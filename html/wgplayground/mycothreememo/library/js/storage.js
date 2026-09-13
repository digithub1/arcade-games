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
		{src:"library/images/storage_atlas_14.png", id:"storage_atlas_14"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1600,600],[0,602,800,600],[802,602,800,600]]},
		{name:"storage_atlas_7", frames: [[0,0,800,600],[802,0,800,600],[0,602,560,620],[562,602,560,620]]},
		{name:"storage_atlas_8", frames: [[1326,996,390,390],[1326,604,390,390],[0,202,420,620],[422,202,420,620],[0,0,1600,200],[1326,202,400,400],[0,824,640,280],[642,1086,640,280],[844,202,480,440],[844,644,480,440]]},
		{name:"storage_atlas_9", frames: [[502,1076,400,300],[904,1066,400,300],[904,764,400,300],[784,0,500,300],[0,784,500,300],[1286,0,500,300],[0,1086,500,300],[0,392,390,390],[0,0,390,390],[392,0,390,390],[784,302,320,460],[392,392,380,380],[1106,302,380,380],[1306,684,400,300],[1306,986,400,300],[502,774,400,300]]},
		{name:"storage_atlas_10", frames: [[1528,0,260,260],[704,302,300,300],[402,302,300,300],[522,1090,320,220],[1348,362,440,160],[0,1208,520,160],[1488,1010,210,320],[1006,362,340,260],[1206,0,320,360],[924,848,320,220],[1166,686,440,160],[844,1090,320,220],[1348,524,440,160],[1166,1070,320,220],[1246,848,440,160],[402,604,520,160],[402,766,520,160],[402,928,520,160],[0,604,400,300],[0,302,400,300],[0,0,400,300],[0,906,400,300],[402,0,400,300],[804,0,400,300]]},
		{name:"storage_atlas_11", frames: [[424,322,210,320],[1060,0,210,320],[0,966,210,320],[424,966,210,320],[1272,0,210,320],[636,0,210,320],[424,644,210,320],[212,0,210,320],[848,0,210,320],[0,0,210,320],[0,322,210,320],[0,644,210,320],[212,322,210,320],[212,644,210,320],[212,966,210,320],[424,0,210,320],[848,966,210,320],[636,322,210,320],[848,644,210,320],[1060,322,210,320],[848,322,210,320],[1272,322,210,320],[1484,0,210,320],[1484,322,210,320],[1060,644,210,320],[636,644,210,320],[636,966,210,320],[1484,966,210,320],[1272,644,210,320],[1060,966,210,320],[1272,966,210,320],[1484,644,210,320]]},
		{name:"storage_atlas_12", frames: [[1484,966,210,320],[1484,644,210,320],[1060,644,210,320],[1060,966,210,320],[1272,644,210,320],[1272,966,210,320],[636,644,210,320],[636,966,210,320],[848,322,210,320],[848,644,210,320],[1060,322,210,320],[848,966,210,320],[1272,322,210,320],[1484,322,210,320],[212,0,210,320],[0,322,210,320],[1272,0,210,320],[848,0,210,320],[212,644,210,320],[212,966,210,320],[0,644,210,320],[636,0,210,320],[424,0,210,320],[424,322,210,320],[1060,0,210,320],[424,644,210,320],[212,322,210,320],[0,0,210,320],[424,966,210,320],[0,966,210,320],[636,322,210,320],[1484,0,210,320]]},
		{name:"storage_atlas_13", frames: [[636,1020,190,190],[878,636,200,200],[636,828,190,190],[1362,586,240,190],[1120,586,240,190],[1130,222,320,180],[848,0,280,220],[0,322,210,320],[0,0,210,320],[0,644,210,320],[0,966,210,320],[212,0,210,320],[212,322,210,320],[212,644,210,320],[636,444,240,190],[1020,838,160,160],[1020,1191,160,160],[1182,1191,160,160],[1182,778,160,160],[1205,940,160,160],[1344,778,160,160],[1506,778,160,160],[1344,1102,160,160],[1367,940,160,160],[1604,586,190,190],[636,322,150,100],[374,1288,150,100],[222,1288,150,100],[1506,1102,180,130],[878,444,240,190],[636,636,240,190],[0,1288,220,80],[636,1212,186,188],[1533,1234,150,142],[824,1212,194,178],[828,1030,187,171],[1344,1264,187,132],[1017,1030,186,159],[828,838,190,190],[1529,940,160,160],[636,0,210,320],[424,644,210,320],[212,966,210,320],[424,966,210,320],[424,0,210,320],[424,322,210,320],[1452,222,320,180],[1130,0,280,220],[1452,404,320,180],[1412,0,280,220],[1130,404,320,180],[848,222,280,220]]},
		{name:"storage_atlas_14", frames: [[366,204,120,120],[488,224,120,120],[610,224,120,120],[434,448,50,50],[608,102,120,120],[976,391,24,24],[803,379,24,24],[730,102,120,120],[0,204,120,120],[122,204,120,120],[244,204,120,120],[976,417,24,24],[773,438,24,24],[760,0,150,100],[152,0,150,100],[304,0,150,100],[0,102,150,100],[456,0,150,100],[152,102,150,100],[0,0,150,100],[608,0,150,100],[304,102,150,100],[456,102,150,100],[964,212,60,80],[976,294,40,55],[854,251,40,43],[896,102,10,11],[905,421,69,94],[803,421,100,73],[773,496,57,60],[610,346,99,100],[976,351,23,38],[803,346,31,31],[832,496,50,50],[854,102,40,147],[964,0,50,210],[912,0,50,297],[711,346,90,90],[488,438,80,80],[711,438,60,90],[372,448,60,90],[570,448,60,90],[0,448,60,90],[62,448,60,90],[124,448,60,90],[186,448,60,90],[248,448,60,90],[310,448,60,90],[632,448,60,90],[488,346,120,90],[732,224,120,120],[366,326,120,120],[122,326,120,120],[854,299,120,120],[0,326,120,120],[244,326,120,120]]}
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
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_forward_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
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



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.basket_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_location_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_loss_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_start_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_comics_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_comics_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_comics_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_comics_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_greet_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_win_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.card_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.card_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.card_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.card_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.card_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.card_0_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.card_1_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.card_1_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.card_1_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.card_1_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.card_1_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.card_1_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.card_1_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.card_1_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.card_1_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.card_1_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.card_1_2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.card_1_2_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.card_1_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.card_1_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.card_1_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.card_1_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.card_1_3_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.card_1_3_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.card_1_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.card_1_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.card_1_4_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.card_1_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.card_2_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.card_2_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.card_2_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.card_2_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.card_2_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.card_2_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.card_2_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.card_2_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.card_2_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.card_2_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.card_2_2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.card_2_2_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.card_2_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.card_2_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.card_2_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.card_2_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.card_2_3_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.card_2_3_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.card_2_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.card_2_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.card_2_4_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.card_2_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.card_3_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.card_3_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.card_3_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.card_3_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.card_3_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.card_3_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.card_3_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.card_3_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.card_3_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.card_3_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.card_3_2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.card_3_2_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.card_3_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.card_3_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.card_3_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.card_3_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.card_3_3_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.card_3_3_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.card_3_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.card_3_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.card_3_4_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.card_3_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.comics_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.comics_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.comics_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.comics_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.countdown_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.countdown_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.countdown_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.countdown_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.countdown_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.current_location_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.forward_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.grass_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.grass_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.gribovik_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.gribovik_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.gribovik_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.gribovik_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.gribovik_horror_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.house_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.indicator_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.indicator_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.indicator_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.lock_location_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.lock_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.pause_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.repeat_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.sequence_number_0_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.sequence_number_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.sequence_number_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.sequence_number_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.sequence_number_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.sequence_number_5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.sequence_number_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.sequence_number_7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.sequence_number_8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.sequence_number_9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.shadow_card_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.shadow_card_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.shadow_card_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.shadow_card_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.shadow_card_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.shadow_card_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_en_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_en_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_en_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_en_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_ru_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_ru_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_ru_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_ru_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_tr_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_tr_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_tr_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.title_comics_tr_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_greet_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_greet_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_greet_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_start_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.title_start_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_start_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.title_win_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.title_win_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_win_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
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
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.preloader_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("A6tWpQhaABAAhbMAAAgqeQAAhaBaAAMA1bAAAQBaAAAABaMAAAAqeQAABbhagBg");
	this.shape.setTransform(180,145);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,290);
p.frameBounds = [rect];


(lib.preloader_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,1],-4.4,11.6,5.8,-15.6).s().p("AgqB0QhJgNgmgpQgogqATgwQASgwA/gZQBBgaBHANQBKAKAmAqQAmAqgSAuQgTAxg/AYQgtAUgyAAQgTAAgVgDg");
	this.shape.setTransform(0.2,-117.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,1],11.5,20,-14.9,-25.9).s().p("AiOELQh+gFguhRQgvhQA7hsQA7hwCEhMQCBhLB9AEQB9AEAvBRQAvBSg7BrQg6BviDBMQh7BIh4AAIgNAAg");
	this.shape_1.setTransform(-54,-91.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// graph
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.976],-1.6,-202.4,-1.4,65.4).s().p("AsdJ+QlLkIAAl2QAAl1FLkIQFKkIHTAAQHTAAFLEIQFLEIAAF1QAAF2lLEIQlLEInTAAQnTAAlKkIg");
	this.shape_2.setTransform(0.5,-47.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// graph
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)"],[0,1],0.9,8.8,0.9,75.8).s().p("AtnDnQlXlWgRngQAVFiFTD9QFpEQH+AAQH/AAFpkQQFQj7AYlfQgTHdlVFUQlpFpn/AAQn+AAlplpg");
	this.shape_3.setTransform(0,64.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// graph
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(102,102,102,0)","rgba(102,102,102,0.929)","rgba(102,102,102,0)"],[0,0.69,1],33.4,-45.3,0,33.4,-45.3,220.8).s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// graph
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#666666","#999999"],[0,1],0,124.2,0,-135.9).s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// graph
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.098)").s().p("AvcPeQmbmaAApEQAApDGbmZQGZmbJDAAQJEAAGaGbQGZGZAAJDQAAJEmZGaQmaGZpEAAQpDAAmZmZg");
	this.shape_6.setTransform(4.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#999999"],[0,1],-2.1,-23.8,0,-2.1,-23.8,97.6).s().p("AnDJ5IgDgCIAAAAIgBgBQg0ghgfg7IgBgBQgdg5AAhCIAAs7QgBhDAfg5IgBACQAgg/A4giIACgBQA5gkBDABQBCgBA6AkIKNGgQA2AgAhA+IABABQAdA5AABBQAABAgdA7IgBADQghA6gzAhIgDACIqLGeQg2AlhIgBQhJABg1glg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],0,-79,0,79).s().p("AoGLcQhRgyguhaIAAABQgrhTgBhgIAAs7QABhhAshTIgCAEQAwheBTgzIADgCQBWg1BlAAQBkAABWA1IKLGfQBUAwAyBfIgBgBQAsBTABBgQgBBdgqBUIgDAGQgvBVhNAyIgEACIqHGbQhSA6hwABQhwgBhRg5gAkFlGIACgCIABgBIgDADg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-79,138,158);
p.frameBounds = [rect];


(lib.preloader_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Aw3FeQh4gBAAh4IAAnKQAAh4B4AAMAhuAAAQB5AAAAB4IAAHKQAAB4h5ABg");
	this.shape.setTransform(120,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,240,70);
p.frameBounds = [rect];


(lib.preloader_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AuDgEIAAhLIcHAAIAABLQm/BTnCAAQnBAAnFhTg");
	this.shape.setTransform(90,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,180,16);
p.frameBounds = [rect];


(lib.preloader_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#333333"],[0,1],0,-10,0,10).s().p("AuDBjIAAjGIcHAAIAADGg");
	this.shape.setTransform(90,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Au1CWIAAkrIdrAAIAAErg");
	this.shape_1.setTransform(90,10);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AvmDHIAAmNIfNAAIAAGNg");
	this.shape_2.setTransform(90,10);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,200,40);
p.frameBounds = [rect];


(lib.preloader_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#FFFFFF","#AAAAAA"],[0,0.42,1],0,-10,0,10).s().p("AuDBjIAAjGIcHAAIAADGg");
	this.shape.setTransform(90,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,180,20);
p.frameBounds = [rect];


(lib.preloader_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.preloader_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.pause_app_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag2FdQhUAAgBhTIAAoSQABhUBUAAIBtAAQBUAAABBUIAAISQgBBThUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-35,28,70);
p.frameBounds = [rect];


(lib.pause_app_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ao0I1QjrjqAAlLQAAlKDrjqQDqjqFKAAQFLAADqDqQDrDqAAFKQAAFLjrDqQjqDqlLAAQlKAAjqjqgAnWnWQjDDDAAETQAAEUDDDDQDEDDESAAQEUAADDjDQDDjDAAkUQAAkTjDjDQjDjDkUAAQkSAAjEDDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pause_app_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ag2FeQhUAAgBhUIAAoTQABhUBUAAIBtAAQBUAAABBUIAAITQgBBUhUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-35,28,70);
p.frameBounds = [rect];


(lib.pause_app_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjOHBQhHgIgwg0Qgxg0AAhGIAAoVQAAhGAxg0QAwg0BHgHQBHgIA6AqIF3ELQAwAkATA4QATA2gTA4QgTA4gxAjIl3EMQgxAjg8AAIgTgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-45,75,90);
p.frameBounds = [rect];


(lib.pause_app_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ao0I1QjrjqAAlLQAAlKDrjqQDqjrFKAAQFLAADqDrQDrDqAAFKQAAFLjrDqQjqDrlLAAQlKAAjqjrgAnWnWQjDDEAAESQAAEUDDDDQDEDDESAAQEUAADDjDQDDjDAAkUQAAkSjDjEQjDjDkUAAQkSAAjEDDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pause_app_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjOHBQhHgIgwg0Qgxg0AAhGIAAoVQAAhGAxg0QAwg0BHgHQBHgIA6AqIF3ELQAwAkATA4QATA2gTA4QgTA4gxAjIl3EMQgxAjg8AAIgTgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-45,75,90);
p.frameBounds = [rect];


(lib.pause_app_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ap7J8QkIkIAAl0QAAlzEIkIQEHkHF0gBQF0ABEIEHQEIEIAAFzQAAF0kIEIQkIEHl0AAQl0AAkHkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
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


(lib.languages_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.languages_1_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.languages_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.languages_1_3_img();
	this.instance.setTransform(-30,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-40,60,80);
p.frameBounds = [rect];


(lib.languages_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.languages_2_img();
	this.instance.setTransform(-90,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
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
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.shadow_card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_card_7_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.shadow_card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_card_6_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.shadow_card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_card_4_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.shadow_card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_card_3_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.shadow_card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_card_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.shadow_card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_card_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.sequence_number_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_9_img();
	this.instance.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.sequence_number_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_8_img();
	this.instance.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.sequence_number_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_7_img();
	this.instance.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.sequence_number_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_6_img();
	this.instance.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.sequence_number_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_5_img();
	this.instance.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.sequence_number_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_4_img();
	this.instance.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.sequence_number_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_3_img();
	this.instance.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.sequence_number_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_2_img();
	this.instance.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.sequence_number_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_1_img();
	this.instance.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.sequence_number_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_0_img();
	this.instance.setTransform(-30,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.semitransparent_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("Eh+jAwbMAAAhg1MD9HAAAMAAABg1g");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.repeat_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.repeat_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I1QjrjrAAlKQAAlKDrjqQDqjrFKAAQFKAADrDrQDqDqABFKQgBFKjqDrQjrDqlKABQlKgBjqjqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,200);
p.frameBounds = [rect];


(lib.lock_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lock_location_1_img();
	this.instance.setTransform(-120,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect];


(lib.lock_location_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lock_location_0_img();
	this.instance.setTransform(-120,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect];


(lib.indicator_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_6_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.indicator_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_5_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.indicator_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_4_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.indicator_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_3_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.indicator_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.indicator_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_1_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.house_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.house_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I1QjrjrAAlKQAAlKDrjqQDqjrFKAAQFKAADrDrQDqDqABFKQgBFKjqDrQjrDqlKABQlKgBjqjqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.gribovik_horror_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gribovik_horror_1_img();
	this.instance.setTransform(-160,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-230,320,460);
p.frameBounds = [rect];


(lib.gribovik_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gribovik_4_img();
	this.instance.setTransform(-280,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-310,560,620);
p.frameBounds = [rect];


(lib.gribovik_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gribovik_3_img();
	this.instance.setTransform(-280,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-310,560,620);
p.frameBounds = [rect];


(lib.gribovik_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gribovik_2_img();
	this.instance.setTransform(-210,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,620);
p.frameBounds = [rect];


(lib.gribovik_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gribovik_1_img();
	this.instance.setTransform(-210,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,620);
p.frameBounds = [rect];


(lib.grass_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.grass_2_img();
	this.instance.setTransform(-160,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-260,320,360);
p.frameBounds = [rect];


(lib.grass_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.grass_1_img();
	this.instance.setTransform(-170,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-260,340,260);
p.frameBounds = [rect];


(lib.current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.current_location_img();
	this.instance.setTransform(-120,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect];


(lib.countdown_bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_bg_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.comics_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.comics_1_4_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect];


(lib.comics_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.comics_1_3_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect];


(lib.comics_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.comics_1_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect];


(lib.comics_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.comics_1_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect];


(lib.card_3_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_5_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_4_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_4_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_4_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_3_7_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_3_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_3_4_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_3_3_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_3_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_3_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_2_7_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_2_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_2_4_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_2_3_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_2_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_2_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_1_7_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_1_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_1_4_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_1_3_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_1_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_3_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_1_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_5_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_4_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_4_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_4_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_3_7_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_3_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_3_4_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_3_3_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_3_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_3_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_2_7_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_2_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_2_4_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_2_3_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_2_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_2_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_1_7_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_1_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_1_4_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_1_3_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_1_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_2_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_1_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_5_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_4_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_4_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_4_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_3_7_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_3_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_3_4_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_3_3_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_3_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_3_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_2_7_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_2_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_2_4_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_2_3_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_2_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_2_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_1_7_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_1_5_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_1_4_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_1_3_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_1_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_1_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_1_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_0_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_0_7_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_0_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_0_6_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_0_4_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_0_3_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_0_2_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.card_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_0_1_img();
	this.instance.setTransform(-105,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect];


(lib.body_title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_win_en_img();
	this.instance.setTransform(-200,-150);

	this.instance_1 = new lib.title_win_ru_img();
	this.instance_1.setTransform(-200,-150);

	this.instance_2 = new lib.title_win_tr_img();
	this.instance_2.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-150,400,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_start_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_start_en_img();
	this.instance.setTransform(-200,-150);

	this.instance_1 = new lib.title_start_ru_img();
	this.instance_1.setTransform(-200,-150);

	this.instance_2 = new lib.title_start_tr_img();
	this.instance_2.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-150,400,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-240,-220);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-240,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-220,480,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_loss_en_img();
	this.instance.setTransform(-200,-150);

	this.instance_1 = new lib.title_loss_ru_img();
	this.instance_1.setTransform(-200,-150);

	this.instance_2 = new lib.title_loss_tr_img();
	this.instance_2.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-150,400,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_greet_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_greet_en_img();
	this.instance.setTransform(-260,-80);

	this.instance_1 = new lib.title_greet_ru_img();
	this.instance_1.setTransform(-260,-80);

	this.instance_2 = new lib.title_greet_tr_img();
	this.instance_2.setTransform(-260,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-80,520,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_comics_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_comics_en_1_4_img();
	this.instance.setTransform(-140,-110);

	this.instance_1 = new lib.title_comics_ru_1_4_img();
	this.instance_1.setTransform(-140,-110);

	this.instance_2 = new lib.title_comics_tr_1_4_img();
	this.instance_2.setTransform(-140,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-110,280,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_comics_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_comics_en_1_3_img();
	this.instance.setTransform(-160,-90);

	this.instance_1 = new lib.title_comics_ru_1_3_img();
	this.instance_1.setTransform(-160,-90);

	this.instance_2 = new lib.title_comics_tr_1_3_img();
	this.instance_2.setTransform(-160,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-90,320,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_comics_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_comics_en_1_2_img();
	this.instance.setTransform(-220,-80);

	this.instance_1 = new lib.title_comics_ru_1_2_img();
	this.instance_1.setTransform(-220,-80);

	this.instance_2 = new lib.title_comics_tr_1_2_img();
	this.instance_2.setTransform(-220,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-80,440,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_comics_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_comics_en_1_1_img();
	this.instance.setTransform(-160,-110);

	this.instance_1 = new lib.title_comics_ru_1_1_img();
	this.instance_1.setTransform(-160,-110);

	this.instance_2 = new lib.title_comics_tr_1_1_img();
	this.instance_2.setTransform(-160,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-110,320,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bg_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_win_img();
	this.instance.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-150,400,300);
p.frameBounds = [rect];


(lib.bg_title_greet_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_greet_img();
	this.instance.setTransform(-260,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-80,520,160);
p.frameBounds = [rect];


(lib.bg_title_comics_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_comics_1_4_img();
	this.instance.setTransform(-140,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-110,280,220);
p.frameBounds = [rect];


(lib.bg_title_comics_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_comics_1_3_img();
	this.instance.setTransform(-160,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-90,320,180);
p.frameBounds = [rect];


(lib.bg_title_comics_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_comics_1_2_img();
	this.instance.setTransform(-220,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-80,440,160);
p.frameBounds = [rect];


(lib.bg_title_comics_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg_title_comics_1_1_img();
	this.instance.setTransform(-160,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-110,320,220);
p.frameBounds = [rect];


(lib.bg_start_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_start_img();
	this.instance.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-150,400,300);
p.frameBounds = [rect];


(lib.bg_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_loss_img();
	this.instance.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-150,400,300);
p.frameBounds = [rect];


(lib.bg_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_location_2_img();
	this.instance.setTransform(-120,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect];


(lib.bg_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_location_1_img();
	this.instance.setTransform(-120,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect];


(lib.basket_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.basket_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.background_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_9_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_8_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_7_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_6_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-12,-12);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-8,-8,0.666,0.666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:0.666,scaleY:0.666,x:-8,y:-8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5,scaleY:0.5,x:-6,y:-6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect, new cjs.Rectangle(-8,-8,16,16), new cjs.Rectangle(-6,-6,12,12)];


(lib.flash_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.flash_2_2_img();
	this.instance.setTransform(-12,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.flash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.flash_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.flash_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.flash_1_2_img();
	this.instance.setTransform(-12,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAnEMAAAhOHMB8/AAAMAAABOHg");
	this.shape.setTransform(600,250,1.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,500);
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


(lib.skip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_img();
	this.instance.setTransform(-60,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("Am3IlQhWAAg+g9Qg9g+AAhWIAAqnQAAhWA9g+QA+g9BWAAINvAAQBWAAA+A9QA9A+AABWIAAKnQAABWg9A+Qg+A9hWAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-55,130,110);
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

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjOCTiTQCSiSDOABQDPgBCSCSQCTCTAADOQAADOiTCTQiSCTjPAAQjOAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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


(lib.pause_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pause_img();
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


(lib.animation_for_forward_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_forward_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
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
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAdedIgdgkIgcAkI9OAAMAAAg85MA7VAAAMAAAA85g");
	mask.setTransform(0,5);

	// image_1
	this.instance = new lib.redirect_4_mc();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({alpha:0.012},15).to({_off:true},1).wait(149).to({_off:false,scaleX:0.5,scaleY:0.5,x:95,y:95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(1));

	// image_2
	this.instance_1 = new lib.redirect_5_mc();
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(55).to({alpha:0.012},15).to({_off:true},1).wait(39).to({_off:false,scaleX:0.5,scaleY:0.5,x:-95,y:-95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(56));

	// image_1
	this.instance_2 = new lib.redirect_4_mc();
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).wait(70).to({_off:true},1).wait(55));

	// bg
	this.instance_3 = new lib.redirect_3_mc();
	this.instance_3.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(220));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,50,1,1.083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-79,138,158);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-74.4,-82.9,144.9,165.9), new cjs.Rectangle(-79.9,-86.9,151.8,173.8), new cjs.Rectangle(-85.3,-90.8,158.7,181.7), new cjs.Rectangle(-90.8,-94.8,165.6,189.6), new cjs.Rectangle(-96.2,-98.7,172.5,197.5), new cjs.Rectangle(-94.2,-98.7,172.5,197.5), new cjs.Rectangle(-92.2,-98.7,172.5,197.5), new cjs.Rectangle(-90.2,-98.7,172.5,197.5), new cjs.Rectangle(-88.2,-98.7,172.5,197.5), new cjs.Rectangle(-86.2,-98.7,172.5,197.5), new cjs.Rectangle(-84.2,-98.7,172.5,197.5), new cjs.Rectangle(-82.2,-98.7,172.5,197.5), new cjs.Rectangle(-80.2,-98.7,172.5,197.5), new cjs.Rectangle(-78.2,-98.7,172.5,197.5), new cjs.Rectangle(-76.2,-98.7,172.5,197.5), new cjs.Rectangle(-74.8,-94.8,165.6,189.6), new cjs.Rectangle(-73.4,-90.8,158.7,181.7), new cjs.Rectangle(-71.9,-86.9,151.8,173.8), new cjs.Rectangle(-70.5,-82.9,144.9,165.9), rect=new cjs.Rectangle(-69,-79,138,158), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.preloader_13_mc();
	this.instance.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.preloader_12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_11_mc();
	this.instance.setTransform(0,0.1,0.462,0.462,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("Ao0I1QjqjrgBlKQABlKDqjqQA6g6BAgrQDDiGD3AAQD5AADDCGQBAArA5A6QDrDqAAFKQAAFKjrDrQjqDqlLABQlJgBjrjqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkHkIgBl0QABlzEHkIQBChBBHgxQDbiWEXAAQEYAADbCWQBIAxBBBBQEIEIAAFzQAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.preloader_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// shadow
	this.instance = new lib.preloader_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// animation
	this.instance_1 = new lib.preloader_4_mc();
	this.instance_1.setTransform(0,0,0.003,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1},99).wait(1));

	// bg
	this.instance_2 = new lib.preloader_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// shadow
	this.instance_3 = new lib.preloader_8_mc();
	this.instance_3.setTransform(-30,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-25,240,70);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_14_mc();
	this.instance.setTransform(220,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.preloader_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.pause_app_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pause_app_3_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.pause_app_4_5_mc();
	this.instance_1.setTransform(4,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-35,32,72);
p.frameBounds = [rect];


(lib.pause_app_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pause_app_2_5_mc();
	this.instance.setTransform(-22,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.pause_app_2_5_mc();
	this.instance_1.setTransform(22,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-35,76,72);
p.frameBounds = [rect];


(lib.pause_app_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pause_app_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.pause_app_3_4_mc();
	this.instance_1.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-45,79,94);
p.frameBounds = [rect];


(lib.pause_app_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pause_app_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.pause_app_4_1_mc();
	this.instance_1.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.pause_app_2_1_mc();
	this.instance_2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
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


(lib.languages_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animatiom
	this.instance = new lib.languages_1_3_mc();
	this.instance.setTransform(-15,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:-0.1,scaleX:1,scaleY:1,x:-15.1},5).wait(10).to({regX:-0.2,scaleX:0.83,scaleY:0.83},5).wait(1));

	// animatiom
	this.instance_1 = new lib.languages_1_3_mc();
	this.instance_1.setTransform(15,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({regX:0.1,scaleX:1,scaleY:1,x:15.1},5).wait(10).to({scaleX:0.83,scaleY:0.83},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-33.3,80,66.7);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-40,-34.6,81.1,69.3), new cjs.Rectangle(-40,-35.9,82.1,72), new cjs.Rectangle(-40,-37.3,83.1,74.6), new cjs.Rectangle(-40,-38.6,84.1,77.3), new cjs.Rectangle(-40,-39.9,85,79.9), new cjs.Rectangle(-40.9,-39.9,86,79.9), new cjs.Rectangle(-41.9,-39.9,87,79.9), new cjs.Rectangle(-43,-39.9,88,79.9), new cjs.Rectangle(-44,-39.9,89,79.9), rect=new cjs.Rectangle(-45,-39.9,90,79.9), rect, rect, rect, rect, rect, new cjs.Rectangle(-45,-39.9,89.1,79.9), new cjs.Rectangle(-45,-39.9,88.1,79.9), new cjs.Rectangle(-45,-39.9,87.1,79.9), new cjs.Rectangle(-45,-39.9,86.1,79.9), new cjs.Rectangle(-45,-39.9,85,79.9), new cjs.Rectangle(-43.9,-38.6,84,77.3), new cjs.Rectangle(-42.9,-37.2,83,74.6), new cjs.Rectangle(-42,-35.9,82,72), new cjs.Rectangle(-41,-34.6,81,69.3), new cjs.Rectangle(-40,-33.3,80,66.6)];


(lib.languages_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.languages_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.languages_1_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.languages_3_3_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-25,60,50);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-60,-60,120,120)];


(lib.language_zh_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "zh";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_zh_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_tr_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "tr";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_tr_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_ru_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "ru";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_ru_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_pt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "pt";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_pt_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_ja_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "ja";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_ja_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_it_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "it";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_it_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_id_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "id";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_id_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_hi_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "hi";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_hi_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_fr_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "fr";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_fr_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_es_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "es";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_es_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_en_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "en";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_en_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_de_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "de";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_de_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_ar_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "ar";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_ar_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_win_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_win_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-150,400,300);
p.frameBounds = [rect];


(lib.title_start_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_start_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_start_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-150,400.5,300.5);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-220,480,440);
p.frameBounds = [rect];


(lib.title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_loss_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_loss_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-150,400.5,300.5);
p.frameBounds = [rect];


(lib.title_greet_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_greet_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_title_greet_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-80,520,160);
p.frameBounds = [rect];


(lib.sequence_number_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_7_mc();
	this.instance.setTransform(16.1,0,0.666,0.667,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sequence_number_1_mc();
	this.instance_1.setTransform(-18,0,0.666,0.667,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.9,-30,73.9,60);
p.frameBounds = [rect];


(lib.sequence_number_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_6_mc();
	this.instance.setTransform(16,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sequence_number_1_mc();
	this.instance_1.setTransform(-18,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.3,-35,80.6,70);
p.frameBounds = [rect];


(lib.sequence_number_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_5_mc();
	this.instance.setTransform(16,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sequence_number_1_mc();
	this.instance_1.setTransform(-18,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.3,-35,80.6,70);
p.frameBounds = [rect];


(lib.sequence_number_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_4_mc();
	this.instance.setTransform(16,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sequence_number_1_mc();
	this.instance_1.setTransform(-18,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.3,-35,80.6,70);
p.frameBounds = [rect];


(lib.sequence_number_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_3_mc();
	this.instance.setTransform(16,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sequence_number_1_mc();
	this.instance_1.setTransform(-18,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.3,-35,80.6,70);
p.frameBounds = [rect];


(lib.sequence_number_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_2_mc();
	this.instance.setTransform(16.3,-0.3,0.777,0.778,0,0,0,0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sequence_number_1_mc();
	this.instance_1.setTransform(-18,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.3,-35,80.6,70);
p.frameBounds = [rect];


(lib.sequence_number_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_1_mc();
	this.instance.setTransform(16,-0.1,0.777,0.778,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sequence_number_1_mc();
	this.instance_1.setTransform(-20,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-35,82.6,70);
p.frameBounds = [rect];


(lib.sequence_number_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sequence_number_0_mc();
	this.instance.setTransform(18,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sequence_number_1_mc();
	this.instance_1.setTransform(-20,0,0.777,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-35,84.6,70);
p.frameBounds = [rect];


(lib.repeat_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.repeat_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect];


(lib.indicator_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.indicator_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:true},1).wait(180));

	// animation
	this.instance_1 = new lib.indicator_5_1_mc();
	this.instance_1.setTransform(0,0,1,1,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({rotation:90},88).to({rotation:0},90).wait(181));

	// animation
	this.instance_2 = new lib.indicator_5_1_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({rotation:-90},90).to({rotation:-180},89).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.indicator_6_1_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(359).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, new cjs.Rectangle(-81.4,-81.4,162.8,162.8), new cjs.Rectangle(-82.8,-82.8,165.5,165.5), new cjs.Rectangle(-84.1,-84.1,168.1,168.1), new cjs.Rectangle(-85.4,-85.4,170.8,170.8), new cjs.Rectangle(-86.7,-86.7,173.4,173.4), new cjs.Rectangle(-87.9,-87.9,175.9,175.9), new cjs.Rectangle(-89.2,-89.2,178.4,178.4), new cjs.Rectangle(-90.4,-90.4,180.8,180.8), new cjs.Rectangle(-91.5,-91.5,183.1,183.1), new cjs.Rectangle(-92.7,-92.7,185.4,185.4), new cjs.Rectangle(-94.1,-94.1,188.1,188.1), new cjs.Rectangle(-95.1,-95.1,190.2,190.2), new cjs.Rectangle(-96.1,-96.1,192.3,192.3), new cjs.Rectangle(-97.2,-97.2,194.4,194.4), new cjs.Rectangle(-98.2,-98.2,196.4,196.4), new cjs.Rectangle(-99.2,-99.2,198.3,198.3), new cjs.Rectangle(-100.1,-100.1,200.1,200.1), new cjs.Rectangle(-101,-101,202,202), new cjs.Rectangle(-101.8,-101.9,203.7,203.7), new cjs.Rectangle(-102.7,-102.7,205.4,205.4), new cjs.Rectangle(-103.5,-103.5,207,207), new cjs.Rectangle(-104.5,-104.5,209.1,209.1), new cjs.Rectangle(-105.1,-105.1,210.3,210.3), new cjs.Rectangle(-105.9,-105.9,211.8,211.8), new cjs.Rectangle(-106.5,-106.5,213.1,213.1), new cjs.Rectangle(-107.2,-107.2,214.4,214.4), new cjs.Rectangle(-107.8,-107.8,215.6,215.6), new cjs.Rectangle(-108.4,-108.4,216.8,216.8), new cjs.Rectangle(-108.9,-108.9,217.9,217.9), new cjs.Rectangle(-109.4,-109.4,218.9,218.9), new cjs.Rectangle(-109.9,-109.9,219.8,219.8), new cjs.Rectangle(-110.4,-110.4,220.7,220.7), new cjs.Rectangle(-111,-111,222,222), new cjs.Rectangle(-111.2,-111.2,222.4,222.4), new cjs.Rectangle(-111.5,-111.5,223.1,223.1), new cjs.Rectangle(-111.8,-111.8,223.6,223.6), new cjs.Rectangle(-112.1,-112.1,224.2,224.2), new cjs.Rectangle(-112.3,-112.3,224.6,224.6), new cjs.Rectangle(-112.5,-112.5,225,225), new cjs.Rectangle(-112.7,-112.7,225.4,225.4), new cjs.Rectangle(-112.8,-112.8,225.6,225.6), new cjs.Rectangle(-112.9,-112.9,225.8,225.8), new cjs.Rectangle(-112.9,-112.9,225.9,225.9), new cjs.Rectangle(-113.2,-113.1,226.3,226.3), new cjs.Rectangle(-112.9,-112.9,225.9,225.9), new cjs.Rectangle(-112.9,-112.8,225.8,225.8), new cjs.Rectangle(-112.8,-112.7,225.6,225.6), new cjs.Rectangle(-112.7,-112.6,225.4,225.4), new cjs.Rectangle(-112.5,-112.5,225,225), new cjs.Rectangle(-112.3,-112.2,224.6,224.6), new cjs.Rectangle(-112.1,-112,224.2,224.2), new cjs.Rectangle(-111.8,-111.7,223.6,223.6), new cjs.Rectangle(-111.5,-111.5,223.1,223.1), new cjs.Rectangle(-111.2,-111.1,222.4,222.4), new cjs.Rectangle(-111,-110.9,222,222), new cjs.Rectangle(-110.4,-110.3,220.7,220.7), new cjs.Rectangle(-109.9,-109.8,219.8,219.8), new cjs.Rectangle(-109.4,-109.4,218.9,218.9), new cjs.Rectangle(-108.9,-108.9,217.9,217.9), new cjs.Rectangle(-108.4,-108.3,216.8,216.8), new cjs.Rectangle(-107.8,-107.7,215.6,215.6), new cjs.Rectangle(-107.2,-107.1,214.4,214.4), new cjs.Rectangle(-106.5,-106.5,213.1,213.1), new cjs.Rectangle(-105.9,-105.8,211.8,211.8), new cjs.Rectangle(-105.1,-105.1,210.3,210.3), new cjs.Rectangle(-104.5,-104.5,209.1,209.1), new cjs.Rectangle(-103.5,-103.5,207,207), new cjs.Rectangle(-102.7,-102.6,205.4,205.4), new cjs.Rectangle(-101.8,-101.8,203.7,203.7), new cjs.Rectangle(-101,-100.9,202,202), new cjs.Rectangle(-100.1,-100,200.1,200.1), new cjs.Rectangle(-99.2,-99.1,198.3,198.3), new cjs.Rectangle(-98.2,-98.1,196.4,196.4), new cjs.Rectangle(-97.2,-97.2,194.4,194.4), new cjs.Rectangle(-96.1,-96.1,192.3,192.3), new cjs.Rectangle(-95.1,-95,190.2,190.2), new cjs.Rectangle(-94.1,-94,188.1,188.1), new cjs.Rectangle(-92.7,-92.7,185.4,185.4), new cjs.Rectangle(-91.5,-91.5,183.1,183.1), new cjs.Rectangle(-90.4,-90.3,180.8,180.8), new cjs.Rectangle(-89.2,-89.1,178.4,178.4), new cjs.Rectangle(-87.9,-87.9,175.9,175.9), new cjs.Rectangle(-86.7,-86.6,173.4,173.4), new cjs.Rectangle(-85.4,-85.4,170.8,170.8), new cjs.Rectangle(-84.1,-84,168.1,168.1), new cjs.Rectangle(-82.8,-82.7,165.5,165.5), new cjs.Rectangle(-81.4,-81.3,162.8,162.8), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-81.1,-81.1,162.3,162.3), new cjs.Rectangle(-82.5,-82.4,165,165), new cjs.Rectangle(-84.1,-84,168.1,168.1), new cjs.Rectangle(-85.3,-85.3,170.7,170.7), new cjs.Rectangle(-86.7,-86.6,173.3,173.3), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-88.9,-88.8,177.8,177.8), new cjs.Rectangle(-90.1,-90,180.2,180.2), new cjs.Rectangle(-91.5,-91.4,183,183), new cjs.Rectangle(-92.7,-92.6,185.3,185.3), new cjs.Rectangle(-93.7,-93.7,187.5,187.5), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-95.7,-95.6,191.4,191.4), new cjs.Rectangle(-96.7,-96.7,193.5,193.5), new cjs.Rectangle(-97.9,-97.9,195.8,195.8), new cjs.Rectangle(-98.9,-98.8,197.8,197.8), new cjs.Rectangle(-99.6,-99.6,199.3,199.3), new cjs.Rectangle(-100.5,-100.5,201.1,201.1), new cjs.Rectangle(-101.5,-101.4,202.9,202.9), new cjs.Rectangle(-102.4,-102.4,204.9,204.9), new cjs.Rectangle(-103.3,-103.2,206.6,206.6), new cjs.Rectangle(-104,-104,208.1,208.1), new cjs.Rectangle(-104.7,-104.6,209.4,209.4), new cjs.Rectangle(-105.4,-105.3,210.8,210.8), new cjs.Rectangle(-106.1,-106,212.2,212.2), new cjs.Rectangle(-106.9,-106.8,213.8,213.8), new cjs.Rectangle(-107.5,-107.4,215,215), new cjs.Rectangle(-108.1,-108,216.2,216.2), new cjs.Rectangle(-108.5,-108.5,217.1,217.1), new cjs.Rectangle(-109,-109,218.1,218.1), new cjs.Rectangle(-109.6,-109.6,219.3,219.3), new cjs.Rectangle(-110.1,-110,220.2,220.2), new cjs.Rectangle(-110.5,-110.5,221.1,221.1), new cjs.Rectangle(-110.8,-110.8,221.7,221.7), new cjs.Rectangle(-111.2,-111.2,222.4,222.4), new cjs.Rectangle(-111.5,-111.5,223.1,223.1), new cjs.Rectangle(-111.9,-111.8,223.8,223.8), new cjs.Rectangle(-112.1,-112.1,224.3,224.3), new cjs.Rectangle(-112.3,-112.3,224.7,224.7), new cjs.Rectangle(-112.5,-112.5,225,225), new cjs.Rectangle(-112.7,-112.6,225.3,225.3), new cjs.Rectangle(-112.8,-112.7,225.6,225.6), new cjs.Rectangle(-112.9,-112.8,225.8,225.8), new cjs.Rectangle(-113,-112.9,225.9,225.9), new cjs.Rectangle(-113.1,-113.1,226.3,226.3), new cjs.Rectangle(-112.9,-112.9,225.9,225.9), new cjs.Rectangle(-112.8,-112.8,225.8,225.8), new cjs.Rectangle(-112.7,-112.7,225.6,225.6), new cjs.Rectangle(-112.6,-112.6,225.3,225.3), new cjs.Rectangle(-112.5,-112.5,225,225), new cjs.Rectangle(-112.3,-112.3,224.7,224.7), new cjs.Rectangle(-112.1,-112.1,224.3,224.3), new cjs.Rectangle(-111.8,-111.8,223.8,223.8), new cjs.Rectangle(-111.5,-111.5,223.1,223.1), new cjs.Rectangle(-111.2,-111.2,222.4,222.4), new cjs.Rectangle(-110.8,-110.8,221.7,221.7), new cjs.Rectangle(-110.5,-110.5,221.1,221.1), new cjs.Rectangle(-110.1,-110,220.2,220.2), new cjs.Rectangle(-109.6,-109.6,219.3,219.3), new cjs.Rectangle(-109,-109,218.1,218.1), new cjs.Rectangle(-108.5,-108.5,217.1,217.1), new cjs.Rectangle(-108,-108,216.2,216.2), new cjs.Rectangle(-107.4,-107.4,215,215), new cjs.Rectangle(-106.8,-106.8,213.8,213.8), new cjs.Rectangle(-106,-106,212.2,212.2), new cjs.Rectangle(-105.3,-105.3,210.8,210.8), new cjs.Rectangle(-104.6,-104.6,209.4,209.4), new cjs.Rectangle(-104,-104,208.1,208.1), new cjs.Rectangle(-103.2,-103.2,206.6,206.6), new cjs.Rectangle(-102.4,-102.4,204.9,204.9), new cjs.Rectangle(-101.4,-101.4,202.9,202.9), new cjs.Rectangle(-100.5,-100.5,201.1,201.1), new cjs.Rectangle(-99.6,-99.6,199.3,199.3), new cjs.Rectangle(-98.8,-98.8,197.8,197.8), new cjs.Rectangle(-97.9,-97.9,195.8,195.8), new cjs.Rectangle(-96.7,-96.7,193.5,193.5), new cjs.Rectangle(-95.7,-95.6,191.4,191.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-93.7,-93.7,187.5,187.5), new cjs.Rectangle(-92.6,-92.6,185.3,185.3), new cjs.Rectangle(-91.5,-91.4,183,183), new cjs.Rectangle(-90,-90,180.2,180.2), new cjs.Rectangle(-88.9,-88.8,177.8,177.8), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-86.6,-86.6,173.3,173.3), new cjs.Rectangle(-85.3,-85.3,170.7,170.7), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-82.4,-82.4,165,165), new cjs.Rectangle(-81.1,-81.1,162.3,162.3), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-81.1,-81.1,162.3,162.3), new cjs.Rectangle(-82.4,-82.4,165,165), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-85.3,-85.3,170.7,170.7), new cjs.Rectangle(-86.6,-86.6,173.3,173.3), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-88.8,-88.9,177.8,177.8), new cjs.Rectangle(-90,-90,180.2,180.2), new cjs.Rectangle(-91.4,-91.5,183,183), new cjs.Rectangle(-92.6,-92.6,185.3,185.3), new cjs.Rectangle(-93.7,-93.7,187.5,187.5), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-95.6,-95.7,191.4,191.4), new cjs.Rectangle(-96.7,-96.7,193.5,193.5), new cjs.Rectangle(-97.9,-97.9,195.8,195.8), new cjs.Rectangle(-98.8,-98.8,197.8,197.8), new cjs.Rectangle(-99.6,-99.6,199.3,199.3), new cjs.Rectangle(-100.5,-100.5,201.1,201.1), new cjs.Rectangle(-101.4,-101.4,202.9,202.9), new cjs.Rectangle(-102.4,-102.4,204.9,204.9), new cjs.Rectangle(-103.2,-103.2,206.6,206.6), new cjs.Rectangle(-104,-104,208.1,208.1), new cjs.Rectangle(-104.6,-104.6,209.4,209.4), new cjs.Rectangle(-105.3,-105.3,210.8,210.8), new cjs.Rectangle(-106,-106,212.2,212.2), new cjs.Rectangle(-106.8,-106.8,213.8,213.8), new cjs.Rectangle(-107.4,-107.4,215,215), new cjs.Rectangle(-108,-108,216.2,216.2), new cjs.Rectangle(-108.5,-108.5,217.1,217.1), new cjs.Rectangle(-109,-109,218.1,218.1), new cjs.Rectangle(-109.6,-109.6,219.3,219.3), new cjs.Rectangle(-110,-110.1,220.2,220.2), new cjs.Rectangle(-110.5,-110.5,221.1,221.1), new cjs.Rectangle(-110.8,-110.8,221.7,221.7), new cjs.Rectangle(-111.2,-111.2,222.4,222.4), new cjs.Rectangle(-111.5,-111.5,223.1,223.1), new cjs.Rectangle(-111.8,-111.8,223.8,223.8), new cjs.Rectangle(-112.1,-112.1,224.3,224.3), new cjs.Rectangle(-112.3,-112.3,224.7,224.7), new cjs.Rectangle(-112.5,-112.5,225,225), new cjs.Rectangle(-112.6,-112.6,225.3,225.3), new cjs.Rectangle(-112.7,-112.7,225.6,225.6), new cjs.Rectangle(-112.8,-112.8,225.8,225.8), new cjs.Rectangle(-112.9,-112.9,225.9,225.9), new cjs.Rectangle(-113.1,-113.1,226.3,226.3), new cjs.Rectangle(-112.9,-113,225.9,225.9), new cjs.Rectangle(-112.8,-112.9,225.8,225.8), new cjs.Rectangle(-112.7,-112.8,225.6,225.6), new cjs.Rectangle(-112.6,-112.7,225.3,225.3), new cjs.Rectangle(-112.5,-112.5,225,225), new cjs.Rectangle(-112.3,-112.3,224.7,224.7), new cjs.Rectangle(-112.1,-112.1,224.3,224.3), new cjs.Rectangle(-111.8,-111.9,223.8,223.8), new cjs.Rectangle(-111.5,-111.5,223.1,223.1), new cjs.Rectangle(-111.2,-111.2,222.4,222.4), new cjs.Rectangle(-110.8,-110.8,221.7,221.7), new cjs.Rectangle(-110.5,-110.5,221.1,221.1), new cjs.Rectangle(-110,-110.1,220.2,220.2), new cjs.Rectangle(-109.6,-109.6,219.3,219.3), new cjs.Rectangle(-109,-109,218.1,218.1), new cjs.Rectangle(-108.5,-108.5,217.1,217.1), new cjs.Rectangle(-108,-108.1,216.2,216.2), new cjs.Rectangle(-107.4,-107.5,215,215), new cjs.Rectangle(-106.8,-106.9,213.8,213.8), new cjs.Rectangle(-106,-106.1,212.2,212.2), new cjs.Rectangle(-105.3,-105.4,210.8,210.8), new cjs.Rectangle(-104.6,-104.7,209.4,209.4), new cjs.Rectangle(-104,-104,208.1,208.1), new cjs.Rectangle(-103.2,-103.3,206.6,206.6), new cjs.Rectangle(-102.4,-102.4,204.9,204.9), new cjs.Rectangle(-101.4,-101.5,202.9,202.9), new cjs.Rectangle(-100.5,-100.5,201.1,201.1), new cjs.Rectangle(-99.6,-99.6,199.3,199.3), new cjs.Rectangle(-98.8,-98.9,197.8,197.8), new cjs.Rectangle(-97.9,-97.9,195.8,195.8), new cjs.Rectangle(-96.7,-96.7,193.5,193.5), new cjs.Rectangle(-95.6,-95.7,191.4,191.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-93.7,-93.7,187.5,187.5), new cjs.Rectangle(-92.6,-92.7,185.3,185.3), new cjs.Rectangle(-91.4,-91.5,183,183), new cjs.Rectangle(-90,-90.1,180.2,180.2), new cjs.Rectangle(-88.8,-88.9,177.8,177.8), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-86.6,-86.7,173.3,173.3), new cjs.Rectangle(-85.3,-85.3,170.7,170.7), new cjs.Rectangle(-84,-84.1,168.1,168.1), new cjs.Rectangle(-82.4,-82.5,165,165), new cjs.Rectangle(-81.1,-81.1,162.3,162.3), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-81.3,-81.4,162.8,162.8), new cjs.Rectangle(-82.7,-82.8,165.5,165.5), new cjs.Rectangle(-84,-84.1,168.1,168.1), new cjs.Rectangle(-85.3,-85.4,170.8,170.8), new cjs.Rectangle(-86.6,-86.7,173.4,173.4), new cjs.Rectangle(-87.8,-87.9,175.8,175.8), new cjs.Rectangle(-89.1,-89.2,178.3,178.3), new cjs.Rectangle(-90.3,-90.4,180.7,180.7), new cjs.Rectangle(-91.5,-91.5,183.1,183.1), new cjs.Rectangle(-92.6,-92.6,185.3,185.3), new cjs.Rectangle(-93.7,-93.8,187.6,187.6), new cjs.Rectangle(-94.8,-94.8,189.7,189.7), new cjs.Rectangle(-95.9,-95.9,191.9,191.9), new cjs.Rectangle(-96.9,-96.9,193.9,193.9), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-98.8,-98.9,197.8,197.8), new cjs.Rectangle(-99.8,-99.8,199.7,199.7), new cjs.Rectangle(-100.7,-100.8,201.6,201.6), new cjs.Rectangle(-101.6,-101.7,203.3,203.3), new cjs.Rectangle(-102.4,-102.5,205,205), new cjs.Rectangle(-103.3,-103.3,206.6,206.6), new cjs.Rectangle(-104,-104.1,208.2,208.2), new cjs.Rectangle(-104.9,-105,210,210), new cjs.Rectangle(-105.7,-105.7,211.4,211.4), new cjs.Rectangle(-106.3,-106.4,212.8,212.8), new cjs.Rectangle(-107,-107,214.1,214.1), new cjs.Rectangle(-107.6,-107.7,215.3,215.3), new cjs.Rectangle(-108.1,-108.2,216.4,216.4), new cjs.Rectangle(-108.7,-108.8,217.6,217.6), new cjs.Rectangle(-109.2,-109.3,218.6,218.6), new cjs.Rectangle(-109.7,-109.8,219.6,219.6), new cjs.Rectangle(-110.2,-110.2,220.5,220.5), new cjs.Rectangle(-110.6,-110.6,221.3,221.3), new cjs.Rectangle(-110.9,-111,222,222), new cjs.Rectangle(-111.3,-111.3,222.7,222.7), new cjs.Rectangle(-111.6,-111.7,223.4,223.4), new cjs.Rectangle(-111.9,-111.9,223.9,223.9), new cjs.Rectangle(-112.1,-112.2,224.4,224.4), new cjs.Rectangle(-112.4,-112.4,224.9,224.9), new cjs.Rectangle(-112.6,-112.6,225.2,225.2), new cjs.Rectangle(-112.7,-112.7,225.5,225.5), new cjs.Rectangle(-112.8,-112.9,225.7,225.7), new cjs.Rectangle(-112.9,-112.9,225.8,225.8), rect=new cjs.Rectangle(-112.9,-112.9,225.9,225.9), rect, new cjs.Rectangle(-112.9,-112.9,225.8,225.8), new cjs.Rectangle(-112.9,-112.9,225.7,225.7), new cjs.Rectangle(-112.7,-112.7,225.5,225.5), new cjs.Rectangle(-112.6,-112.6,225.2,225.2), new cjs.Rectangle(-112.4,-112.4,224.9,224.9), new cjs.Rectangle(-112.2,-112.2,224.4,224.4), new cjs.Rectangle(-111.9,-111.9,223.9,223.9), new cjs.Rectangle(-111.7,-111.7,223.4,223.4), new cjs.Rectangle(-111.4,-111.3,222.7,222.7), new cjs.Rectangle(-111,-111,222,222), new cjs.Rectangle(-110.6,-110.6,221.3,221.3), new cjs.Rectangle(-110.2,-110.2,220.5,220.5), new cjs.Rectangle(-109.8,-109.8,219.6,219.6), new cjs.Rectangle(-109.3,-109.3,218.6,218.6), new cjs.Rectangle(-108.8,-108.8,217.6,217.6), new cjs.Rectangle(-108.2,-108.2,216.4,216.4), new cjs.Rectangle(-107.7,-107.7,215.3,215.3), new cjs.Rectangle(-107,-107,214.1,214.1), new cjs.Rectangle(-106.4,-106.4,212.8,212.8), new cjs.Rectangle(-105.7,-105.7,211.4,211.4), new cjs.Rectangle(-105,-105,210,210), new cjs.Rectangle(-104.1,-104.1,208.2,208.2), new cjs.Rectangle(-103.3,-103.3,206.6,206.6), new cjs.Rectangle(-102.5,-102.5,205,205), new cjs.Rectangle(-101.6,-101.7,203.3,203.3), new cjs.Rectangle(-100.8,-100.8,201.6,201.6), new cjs.Rectangle(-99.8,-99.8,199.7,199.7), new cjs.Rectangle(-98.9,-98.9,197.8,197.8), new cjs.Rectangle(-98,-97.9,195.9,195.9), new cjs.Rectangle(-97,-96.9,193.9,193.9), new cjs.Rectangle(-95.9,-95.9,191.9,191.9), new cjs.Rectangle(-94.8,-94.8,189.7,189.7), new cjs.Rectangle(-93.8,-93.8,187.6,187.6), new cjs.Rectangle(-92.6,-92.6,185.3,185.3), new cjs.Rectangle(-91.5,-91.5,183.1,183.1), new cjs.Rectangle(-90.3,-90.4,180.7,180.7), new cjs.Rectangle(-89.2,-89.2,178.3,178.3), new cjs.Rectangle(-87.9,-87.9,175.8,175.8), new cjs.Rectangle(-86.7,-86.7,173.4,173.4), new cjs.Rectangle(-85.4,-85.4,170.8,170.8), new cjs.Rectangle(-84.1,-84.1,168.1,168.1), new cjs.Rectangle(-82.8,-82.8,165.5,165.5), new cjs.Rectangle(-81.4,-81.4,162.8,162.8), rect=new cjs.Rectangle(-80,-80,160,160), rect];


(lib.house_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.house_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect];


(lib.gribovik_win_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gribovik_4_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(67).to({_off:false},0).to({_off:true},3).wait(38));

	// animation
	this.instance_1 = new lib.gribovik_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-310,560,620);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.gribovik_horror_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gribovik_horror_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10},29).to({y:10},60).to({y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-230,320,460);
p.frameBounds = [rect, new cjs.Rectangle(-160,-230.3,320,460), new cjs.Rectangle(-160,-230.7,320,460), new cjs.Rectangle(-160,-231,320,460), new cjs.Rectangle(-160,-231.4,320,460), new cjs.Rectangle(-160,-231.7,320,460), new cjs.Rectangle(-160,-232,320,460), new cjs.Rectangle(-160,-232.4,320,460), new cjs.Rectangle(-160,-232.7,320,460), new cjs.Rectangle(-160,-233.1,320,460), new cjs.Rectangle(-160,-233.4,320,460), new cjs.Rectangle(-160,-233.8,320,460), new cjs.Rectangle(-160,-234.1,320,460), new cjs.Rectangle(-160,-234.5,320,460), new cjs.Rectangle(-160,-234.8,320,460), new cjs.Rectangle(-160,-235.1,320,460), new cjs.Rectangle(-160,-235.5,320,460), new cjs.Rectangle(-160,-235.8,320,460), new cjs.Rectangle(-160,-236.2,320,460), new cjs.Rectangle(-160,-236.5,320,460), new cjs.Rectangle(-160,-236.9,320,460), new cjs.Rectangle(-160,-237.2,320,460), new cjs.Rectangle(-160,-237.6,320,460), new cjs.Rectangle(-160,-237.9,320,460), new cjs.Rectangle(-160,-238.3,320,460), new cjs.Rectangle(-160,-238.6,320,460), new cjs.Rectangle(-160,-238.9,320,460), new cjs.Rectangle(-160,-239.3,320,460), new cjs.Rectangle(-160,-239.6,320,460), new cjs.Rectangle(-160,-240,320,460), new cjs.Rectangle(-160,-239.6,320,460), new cjs.Rectangle(-160,-239.3,320,460), new cjs.Rectangle(-160,-239,320,460), new cjs.Rectangle(-160,-238.6,320,460), new cjs.Rectangle(-160,-238.3,320,460), new cjs.Rectangle(-160,-238,320,460), new cjs.Rectangle(-160,-237.6,320,460), new cjs.Rectangle(-160,-237.3,320,460), new cjs.Rectangle(-160,-237,320,460), new cjs.Rectangle(-160,-236.6,320,460), new cjs.Rectangle(-160,-236.3,320,460), new cjs.Rectangle(-160,-236,320,460), new cjs.Rectangle(-160,-235.6,320,460), new cjs.Rectangle(-160,-235.3,320,460), new cjs.Rectangle(-160,-235,320,460), new cjs.Rectangle(-160,-234.6,320,460), new cjs.Rectangle(-160,-234.3,320,460), new cjs.Rectangle(-160,-234,320,460), new cjs.Rectangle(-160,-233.6,320,460), new cjs.Rectangle(-160,-233.3,320,460), new cjs.Rectangle(-160,-233,320,460), new cjs.Rectangle(-160,-232.6,320,460), new cjs.Rectangle(-160,-232.3,320,460), new cjs.Rectangle(-160,-232,320,460), new cjs.Rectangle(-160,-231.6,320,460), new cjs.Rectangle(-160,-231.3,320,460), new cjs.Rectangle(-160,-231,320,460), new cjs.Rectangle(-160,-230.6,320,460), new cjs.Rectangle(-160,-230.3,320,460), new cjs.Rectangle(-160,-230,320,460), new cjs.Rectangle(-160,-229.6,320,460), new cjs.Rectangle(-160,-229.3,320,460), new cjs.Rectangle(-160,-229,320,460), new cjs.Rectangle(-160,-228.6,320,460), new cjs.Rectangle(-160,-228.3,320,460), new cjs.Rectangle(-160,-228,320,460), new cjs.Rectangle(-160,-227.6,320,460), new cjs.Rectangle(-160,-227.3,320,460), new cjs.Rectangle(-160,-227,320,460), new cjs.Rectangle(-160,-226.6,320,460), new cjs.Rectangle(-160,-226.3,320,460), new cjs.Rectangle(-160,-226,320,460), new cjs.Rectangle(-160,-225.6,320,460), new cjs.Rectangle(-160,-225.3,320,460), new cjs.Rectangle(-160,-225,320,460), new cjs.Rectangle(-160,-224.6,320,460), new cjs.Rectangle(-160,-224.3,320,460), new cjs.Rectangle(-160,-224,320,460), new cjs.Rectangle(-160,-223.6,320,460), new cjs.Rectangle(-160,-223.3,320,460), new cjs.Rectangle(-160,-223,320,460), new cjs.Rectangle(-160,-222.6,320,460), new cjs.Rectangle(-160,-222.3,320,460), new cjs.Rectangle(-160,-222,320,460), new cjs.Rectangle(-160,-221.6,320,460), new cjs.Rectangle(-160,-221.3,320,460), new cjs.Rectangle(-160,-221,320,460), new cjs.Rectangle(-160,-220.6,320,460), new cjs.Rectangle(-160,-220.3,320,460), new cjs.Rectangle(-160,-220,320,460), new cjs.Rectangle(-160,-220.3,320,460), new cjs.Rectangle(-160,-220.6,320,460), new cjs.Rectangle(-160,-221,320,460), new cjs.Rectangle(-160,-221.3,320,460), new cjs.Rectangle(-160,-221.6,320,460), new cjs.Rectangle(-160,-222,320,460), new cjs.Rectangle(-160,-222.3,320,460), new cjs.Rectangle(-160,-222.6,320,460), new cjs.Rectangle(-160,-223,320,460), new cjs.Rectangle(-160,-223.3,320,460), new cjs.Rectangle(-160,-223.6,320,460), new cjs.Rectangle(-160,-224,320,460), new cjs.Rectangle(-160,-224.3,320,460), new cjs.Rectangle(-160,-224.6,320,460), new cjs.Rectangle(-160,-225,320,460), new cjs.Rectangle(-160,-225.3,320,460), new cjs.Rectangle(-160,-225.6,320,460), new cjs.Rectangle(-160,-226,320,460), new cjs.Rectangle(-160,-226.3,320,460), new cjs.Rectangle(-160,-226.6,320,460), new cjs.Rectangle(-160,-227,320,460), new cjs.Rectangle(-160,-227.3,320,460), new cjs.Rectangle(-160,-227.6,320,460), new cjs.Rectangle(-160,-228,320,460), new cjs.Rectangle(-160,-228.3,320,460), new cjs.Rectangle(-160,-228.6,320,460), new cjs.Rectangle(-160,-229,320,460), new cjs.Rectangle(-160,-229.3,320,460), new cjs.Rectangle(-160,-229.6,320,460), new cjs.Rectangle(-160,-230,320,460)];


(lib.gribovik_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gribovik_2_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(47).to({_off:false},0).to({_off:true},3).wait(38));

	// animation
	this.instance_1 = new lib.gribovik_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,620);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},39).to({alpha:0.012},40).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.countdown_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_3_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.countdown_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_2_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.countdown_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_1_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.countdown_0_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_0_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.comics_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_comics_1_4_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_title_comics_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-110,280,220);
p.frameBounds = [rect];


(lib.comics_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_comics_1_3_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_title_comics_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-90,320,180);
p.frameBounds = [rect];


(lib.comics_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_comics_1_2_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_title_comics_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-80,440,160);
p.frameBounds = [rect];


(lib.comics_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_comics_1_1_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_title_comics_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-110,320,220);
p.frameBounds = [rect];


(lib.comics_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_54 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(35).call(this.frame_54).wait(16));

	// animation
	this.instance = new lib.comics_2_1_mc();
	this.instance.setTransform(177,450);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({y:380,alpha:1},10).to({y:415},5).wait(6));

	// animation
	this.instance_1 = new lib.comics_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:800,alpha:0.012},0).wait(18).to({x:-50,alpha:1},15).to({x:0},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(800,0,800,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(743.4,0,800,600), new cjs.Rectangle(686.7,0,800,600), new cjs.Rectangle(630,0,800,600), new cjs.Rectangle(573.4,0,800,600), new cjs.Rectangle(516.7,0,800,600), new cjs.Rectangle(460,0,800,600), new cjs.Rectangle(403.4,0,800,600), new cjs.Rectangle(346.7,0,800,600), new cjs.Rectangle(290,0,800,600), new cjs.Rectangle(233.4,0,800,600), new cjs.Rectangle(176.7,0,800,600), new cjs.Rectangle(120,0,800,600), new cjs.Rectangle(63.4,0,800,600), new cjs.Rectangle(6.7,0,800,600), new cjs.Rectangle(-50,0,800,600), new cjs.Rectangle(-40,0,800,600), new cjs.Rectangle(-30,0,800,600), new cjs.Rectangle(-20,0,800,600), new cjs.Rectangle(-10,0,800,600), rect=new cjs.Rectangle(0,0,800,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:59});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_48 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(29).call(this.frame_48).wait(12));

	// animation
	this.instance = new lib.repeat_mc();
	this.instance.setTransform(400,700);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:450},13).to({y:500},7).wait(1));

	// animation
	this.instance_1 = new lib.title_loss_mc();
	this.instance_1.setTransform(400.5,-199.5,1,1,0,0,0,0.5,0.5);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({scaleX:0.77,scaleY:0.77,x:400.4,y:-199.6},0).to({regX:0.6,regY:0.6,scaleX:0.92,scaleY:0.92,x:400.6,y:400.6,alpha:1},13).to({regX:0.5,regY:0.5,scaleX:1,scaleY:1,x:400.5,y:280.5},7).wait(21));

	// animation
	this.instance_2 = new lib.gribovik_horror_2_mc();
	this.instance_2.setTransform(400.1,310.1,0.695,0.696,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:400,y:90},13).to({y:110},7).wait(1));

	// animation
	this.instance_3 = new lib.semitransparent_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({alpha:1},13).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(200,-350,400.5,300.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-315.4,1620,925.4), new cjs.Rectangle(-410,-270.9,1620,881), new cjs.Rectangle(-410,-226.5,1620,836.5), new cjs.Rectangle(-410,-182,1620,792.1), new cjs.Rectangle(-410,-137.6,1620,747.7), new cjs.Rectangle(-410,-93.2,1620,703.3), new cjs.Rectangle(-410,-48.8,1620,658.9), rect=new cjs.Rectangle(-410,-10,1620,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,790), new cjs.Rectangle(-410,-10,1620,770.8), new cjs.Rectangle(-410,-10,1620,751.6), new cjs.Rectangle(-410,-10,1620,732.3), new cjs.Rectangle(-410,-10,1620,713.1), new cjs.Rectangle(-410,-10,1620,693.9), new cjs.Rectangle(-410,-10,1620,674.6), new cjs.Rectangle(-410,-10,1620,655.4), new cjs.Rectangle(-410,-28.5,1620,654.7), new cjs.Rectangle(-410,-50.9,1620,660.9), new cjs.Rectangle(-410,-73.1,1620,683.1), new cjs.Rectangle(-410,-95.4,1620,705.5), new cjs.Rectangle(-410,-117.8,1620,727.8), new cjs.Rectangle(-410,-140,1620,750), new cjs.Rectangle(-410,-137.1,1620,747.2), new cjs.Rectangle(-410,-134.3,1620,744.3), new cjs.Rectangle(-410,-131.4,1620,741.5), new cjs.Rectangle(-410,-128.5,1620,738.6), new cjs.Rectangle(-410,-125.7,1620,735.7), new cjs.Rectangle(-410,-122.8,1620,732.9), new cjs.Rectangle(-410,-120,1620,730)];


(lib.animation_indicator_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.indicator_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},39).to({alpha:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_grass_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.grass_2_mc();
	this.instance.setTransform(0,0,1,1,0,-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:2},99).to({skewX:-2},90).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.1,-259.9,332.6,359.8);
p.frameBounds = [rect, new cjs.Rectangle(-168.1,-259.9,331.4,359.9), new cjs.Rectangle(-168.1,-259.9,331.3,359.9), rect=new cjs.Rectangle(-168,-259.9,331.2,359.9), rect, new cjs.Rectangle(-168,-259.9,331.1,359.9), new cjs.Rectangle(-167.9,-259.9,331,359.9), new cjs.Rectangle(-167,-259.9,329.8,360), new cjs.Rectangle(-167,-259.9,329.7,359.9), new cjs.Rectangle(-166.9,-259.9,329.7,359.9), new cjs.Rectangle(-166.9,-259.9,329.6,360), rect=new cjs.Rectangle(-166.8,-259.9,329.5,360), rect, new cjs.Rectangle(-165.9,-259.9,328.2,360), new cjs.Rectangle(-165.8,-259.9,328.2,360), new cjs.Rectangle(-165.8,-259.9,328.1,360), rect=new cjs.Rectangle(-165.7,-259.9,328,360), rect, new cjs.Rectangle(-165.7,-259.9,327.9,360), new cjs.Rectangle(-164.8,-259.9,326.7,360), new cjs.Rectangle(-164.7,-259.9,326.6,360), new cjs.Rectangle(-164.7,-259.9,326.5,360), new cjs.Rectangle(-164.6,-259.9,326.5,360), new cjs.Rectangle(-164.6,-259.9,326.4,360), new cjs.Rectangle(-164.5,-259.9,326.4,360), new cjs.Rectangle(-163.6,-260,325.1,360), new cjs.Rectangle(-163.6,-260,325,360), new cjs.Rectangle(-163.5,-260,325,360), new cjs.Rectangle(-163.5,-260,324.9,360), new cjs.Rectangle(-163.4,-260,324.9,360), new cjs.Rectangle(-163.4,-260,324.8,360), new cjs.Rectangle(-162.5,-260,323.6,360.1), new cjs.Rectangle(-162.5,-260,323.5,360.1), rect=new cjs.Rectangle(-162.4,-260,323.4,360.1), rect, new cjs.Rectangle(-162.3,-260,323.3,360.1), new cjs.Rectangle(-162.3,-260,323.2,360.1), new cjs.Rectangle(-162.2,-260,323.2,360.1), rect=new cjs.Rectangle(-161.3,-260,321.9,360.1), rect, new cjs.Rectangle(-161.2,-260,321.8,360.1), new cjs.Rectangle(-161.2,-260,321.7,360.1), new cjs.Rectangle(-161.1,-260,321.7,360.1), new cjs.Rectangle(-161.1,-260,321.6,360.1), new cjs.Rectangle(-160.2,-260,320.4,360.1), new cjs.Rectangle(-160.2,-260,320.3,360.1), new cjs.Rectangle(-160.1,-260,320.3,360.1), new cjs.Rectangle(-160.1,-260,320.2,360.1), rect=new cjs.Rectangle(-160,-260,320.1,360.1), rect, rect, rect, rect=new cjs.Rectangle(-160,-260,320.2,360.1), rect, new cjs.Rectangle(-160,-260,320.3,360.1), new cjs.Rectangle(-160.1,-260,320.4,360.1), new cjs.Rectangle(-160.4,-260,321.6,360.1), rect=new cjs.Rectangle(-160.4,-260,321.7,360.1), rect, new cjs.Rectangle(-160.4,-260,321.8,360.1), rect=new cjs.Rectangle(-160.5,-260,321.9,360.1), rect, rect=new cjs.Rectangle(-160.8,-260,323.2,360), rect, new cjs.Rectangle(-160.8,-260,323.3,360), rect=new cjs.Rectangle(-160.9,-260,323.4,360), rect, new cjs.Rectangle(-160.9,-260,323.5,360), new cjs.Rectangle(-161,-260,323.6,360), rect=new cjs.Rectangle(-161.3,-259.9,324.8,360), rect, new cjs.Rectangle(-161.3,-259.9,324.9,360), rect=new cjs.Rectangle(-161.3,-259.9,325,360), rect, new cjs.Rectangle(-161.4,-259.9,325.1,360), new cjs.Rectangle(-161.7,-259.9,326.3,360), new cjs.Rectangle(-161.7,-259.9,326.4,360), rect=new cjs.Rectangle(-161.7,-259.9,326.5,360), rect, new cjs.Rectangle(-161.8,-259.9,326.6,360), new cjs.Rectangle(-161.8,-259.9,326.7,360), new cjs.Rectangle(-162.2,-259.9,327.9,359.9), rect=new cjs.Rectangle(-162.2,-259.9,328,359.9), rect, rect, rect=new cjs.Rectangle(-162.2,-259.9,328.2,359.9), rect, rect=new cjs.Rectangle(-162.6,-259.8,329.5,359.9), rect, rect, new cjs.Rectangle(-162.6,-259.8,329.6,359.9), new cjs.Rectangle(-162.7,-259.8,329.7,359.9), new cjs.Rectangle(-162.7,-259.8,329.8,359.9), new cjs.Rectangle(-163,-259.8,331,359.8), rect=new cjs.Rectangle(-163,-259.8,331.1,359.8), rect, new cjs.Rectangle(-163.1,-259.8,331.2,359.8), rect=new cjs.Rectangle(-163.1,-259.8,331.3,359.8), rect, new cjs.Rectangle(-163.5,-259.8,332.6,359.8), rect=new cjs.Rectangle(-163.1,-259.8,331.3,359.8), rect, new cjs.Rectangle(-163.1,-259.8,331.2,359.8), rect=new cjs.Rectangle(-163,-259.8,331.1,359.8), rect, new cjs.Rectangle(-162.7,-259.8,329.8,359.9), rect=new cjs.Rectangle(-162.6,-259.8,329.7,359.9), rect, new cjs.Rectangle(-162.6,-259.8,329.6,359.9), rect=new cjs.Rectangle(-162.6,-259.8,329.5,359.9), rect, new cjs.Rectangle(-162.2,-259.9,328.2,359.8), new cjs.Rectangle(-162.2,-259.9,328.1,359.8), new cjs.Rectangle(-162.2,-259.9,328,359.8), new cjs.Rectangle(-162.2,-259.9,328,359.9), new cjs.Rectangle(-162.1,-259.9,327.9,359.9), new cjs.Rectangle(-161.8,-259.9,326.7,359.9), rect=new cjs.Rectangle(-161.8,-259.9,326.6,359.9), rect, new cjs.Rectangle(-161.7,-259.9,326.5,359.9), new cjs.Rectangle(-161.7,-259.9,326.4,359.9), new cjs.Rectangle(-161.7,-259.9,326.3,359.9), rect=new cjs.Rectangle(-161.3,-259.9,325,360), rect, rect, new cjs.Rectangle(-161.3,-259.9,324.9,360), new cjs.Rectangle(-161.3,-259.9,324.8,360), new cjs.Rectangle(-161.2,-259.9,324.7,360), new cjs.Rectangle(-160.9,-259.9,323.5,360), rect=new cjs.Rectangle(-160.9,-259.9,323.4,360), rect, new cjs.Rectangle(-160.8,-259.9,323.3,360), new cjs.Rectangle(-160.8,-259.9,323.2,360), new cjs.Rectangle(-160.5,-259.9,322,360), new cjs.Rectangle(-160.5,-259.9,321.9,360), rect=new cjs.Rectangle(-160.4,-259.9,321.8,360), rect, new cjs.Rectangle(-160.4,-259.9,321.7,360), new cjs.Rectangle(-160.4,-259.9,321.6,360), new cjs.Rectangle(-160,-259.9,320.4,360), new cjs.Rectangle(-160,-259.9,320.3,360), rect=new cjs.Rectangle(-160,-259.9,320.2,360), rect, new cjs.Rectangle(-160,-260,320.1,360), new cjs.Rectangle(-160,-260,320,360), new cjs.Rectangle(-160,-260,320.1,360), new cjs.Rectangle(-160,-259.9,320.2,360), new cjs.Rectangle(-160.1,-259.9,320.2,360), new cjs.Rectangle(-160.1,-259.9,320.3,360), new cjs.Rectangle(-160.2,-259.9,320.4,360), new cjs.Rectangle(-161.1,-259.9,321.6,360), new cjs.Rectangle(-161.1,-259.9,321.7,360), new cjs.Rectangle(-161.2,-259.9,321.8,360), new cjs.Rectangle(-161.3,-259.9,321.8,360), new cjs.Rectangle(-161.3,-259.9,321.9,360), new cjs.Rectangle(-161.4,-259.9,322,360), new cjs.Rectangle(-162.3,-259.9,323.2,360), new cjs.Rectangle(-162.3,-259.9,323.3,360), rect=new cjs.Rectangle(-162.4,-259.9,323.4,360), rect, new cjs.Rectangle(-162.5,-259.9,323.5,360), new cjs.Rectangle(-163.4,-259.9,324.7,360), new cjs.Rectangle(-163.4,-259.9,324.8,360), rect=new cjs.Rectangle(-163.5,-259.9,324.9,360), rect, new cjs.Rectangle(-163.6,-259.9,325,360), new cjs.Rectangle(-163.6,-259.9,325.1,360), new cjs.Rectangle(-164.5,-259.9,326.3,359.9), new cjs.Rectangle(-164.6,-259.9,326.4,359.9), new cjs.Rectangle(-164.6,-259.9,326.5,359.9), new cjs.Rectangle(-164.7,-259.9,326.5,359.9), new cjs.Rectangle(-164.7,-259.9,326.6,359.9), new cjs.Rectangle(-164.8,-259.9,326.7,359.9), new cjs.Rectangle(-165.7,-259.9,327.9,359.9), new cjs.Rectangle(-165.7,-259.9,328,359.9), rect=new cjs.Rectangle(-165.8,-259.9,328.1,359.8), rect, new cjs.Rectangle(-165.9,-259.9,328.2,359.8), rect=new cjs.Rectangle(-166.8,-259.8,329.5,359.9), rect, new cjs.Rectangle(-166.9,-259.8,329.6,359.9), new cjs.Rectangle(-166.9,-259.8,329.7,359.9), new cjs.Rectangle(-167,-259.8,329.7,359.9), new cjs.Rectangle(-167,-259.8,329.8,359.9), new cjs.Rectangle(-167.9,-259.8,331,359.8), new cjs.Rectangle(-168,-259.8,331.1,359.8), new cjs.Rectangle(-168,-259.8,331.2,359.8), rect=new cjs.Rectangle(-168.1,-259.8,331.3,359.8), rect, new cjs.Rectangle(-169,-259.8,332.6,359.8)];


(lib.animation_grass_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.grass_1_mc();
	this.instance.setTransform(0,0,1,1,0,-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:2},99).to({skewX:-2},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.1,-259.9,349.1,259.9);
p.frameBounds = [rect, rect=new cjs.Rectangle(-178.1,-259.9,348.2,259.9), rect, rect=new cjs.Rectangle(-178,-259.9,348.1,259.9), rect, new cjs.Rectangle(-178,-259.9,348,259.9), new cjs.Rectangle(-177.9,-259.9,348,259.9), new cjs.Rectangle(-177,-259.9,347.1,260), new cjs.Rectangle(-177,-259.9,347,260), new cjs.Rectangle(-176.9,-259.9,347,260), new cjs.Rectangle(-176.9,-259.9,346.9,260), rect=new cjs.Rectangle(-176.8,-259.9,346.9,260), rect, new cjs.Rectangle(-175.9,-259.9,346,260), rect=new cjs.Rectangle(-175.8,-259.9,345.9,260), rect, rect=new cjs.Rectangle(-175.7,-259.9,345.8,260), rect, new cjs.Rectangle(-175.7,-259.9,345.7,260), new cjs.Rectangle(-174.8,-259.9,344.8,260), new cjs.Rectangle(-174.7,-259.9,344.8,260), new cjs.Rectangle(-174.7,-259.9,344.7,260), new cjs.Rectangle(-174.6,-259.9,344.7,260), new cjs.Rectangle(-174.6,-259.9,344.6,260), new cjs.Rectangle(-174.5,-259.9,344.6,260), rect=new cjs.Rectangle(-173.6,-260,343.7,260), rect, rect=new cjs.Rectangle(-173.5,-260,343.6,260), rect, rect=new cjs.Rectangle(-173.4,-260,343.5,260), rect, new cjs.Rectangle(-172.5,-260,342.6,260.1), new cjs.Rectangle(-172.5,-260,342.5,260.1), new cjs.Rectangle(-172.4,-260,342.5,260.1), new cjs.Rectangle(-172.4,-260,342.4,260.1), new cjs.Rectangle(-172.3,-260,342.4,260.1), new cjs.Rectangle(-172.3,-260,342.3,260.1), new cjs.Rectangle(-172.2,-260,342.3,260.1), rect=new cjs.Rectangle(-171.3,-260,341.4,260.1), rect, rect=new cjs.Rectangle(-171.2,-260,341.3,260.1), rect, rect=new cjs.Rectangle(-171.1,-260,341.2,260.1), rect, new cjs.Rectangle(-170.2,-260,340.3,260.1), new cjs.Rectangle(-170.2,-260,340.2,260.1), new cjs.Rectangle(-170.1,-260,340.2,260.1), new cjs.Rectangle(-170.1,-260,340.1,260.1), rect=new cjs.Rectangle(-170,-260,340.1,260.1), rect, rect=new cjs.Rectangle(-169.9,-260,340,260.1), rect, new cjs.Rectangle(-169.9,-260,340.1,260.1), rect=new cjs.Rectangle(-169.9,-260,340.2,260.1), rect, new cjs.Rectangle(-170,-260,340.3,260.1), rect=new cjs.Rectangle(-170,-260,341.2,260), rect, rect=new cjs.Rectangle(-170,-260,341.3,260), rect, new cjs.Rectangle(-170,-260,341.4,260), new cjs.Rectangle(-169.9,-260,341.4,260), rect=new cjs.Rectangle(-169.9,-260,342.3,260), rect, rect=new cjs.Rectangle(-169.9,-260,342.4,260), rect, new cjs.Rectangle(-169.9,-260,342.5,260), new cjs.Rectangle(-170,-260,342.5,260), new cjs.Rectangle(-170,-260,342.6,260), rect=new cjs.Rectangle(-170,-259.9,343.5,260), rect, new cjs.Rectangle(-170,-259.9,343.6,260), new cjs.Rectangle(-169.9,-259.9,343.5,260), new cjs.Rectangle(-169.9,-259.9,343.6,260), new cjs.Rectangle(-169.9,-259.9,343.7,260), new cjs.Rectangle(-169.9,-259.9,344.5,260), new cjs.Rectangle(-169.9,-259.9,344.6,260), rect=new cjs.Rectangle(-169.9,-259.9,344.7,260), rect, rect=new cjs.Rectangle(-170,-259.9,344.8,260), rect, new cjs.Rectangle(-170,-259.9,345.7,260), rect=new cjs.Rectangle(-170,-259.9,345.8,260), rect, new cjs.Rectangle(-170,-259.9,345.9,259.9), rect=new cjs.Rectangle(-169.9,-259.9,345.9,259.9), rect, new cjs.Rectangle(-169.9,-259.8,346.8,259.9), rect=new cjs.Rectangle(-169.9,-259.8,346.9,259.9), rect, new cjs.Rectangle(-169.9,-259.8,347,259.9), new cjs.Rectangle(-170,-259.8,347,259.9), new cjs.Rectangle(-170,-259.8,347.1,259.9), rect=new cjs.Rectangle(-170,-259.8,348,259.9), rect, rect=new cjs.Rectangle(-170,-259.8,348.1,259.9), rect, new cjs.Rectangle(-169.9,-259.8,348.1,259.9), new cjs.Rectangle(-169.9,-259.8,348.2,259.9), new cjs.Rectangle(-170,-259.8,349.1,259.9), new cjs.Rectangle(-169.9,-259.8,348.2,259.9), new cjs.Rectangle(-169.9,-259.8,348.1,259.9), rect=new cjs.Rectangle(-169.9,-259.8,348,259.9), rect, rect=new cjs.Rectangle(-170,-259.8,347.1,259.9), rect, new cjs.Rectangle(-170,-259.8,347,259.9), rect=new cjs.Rectangle(-169.9,-259.8,346.9,259.9), rect, new cjs.Rectangle(-169.9,-259.9,346,259.9), rect=new cjs.Rectangle(-170,-259.9,345.9,259.9), rect, rect=new cjs.Rectangle(-170,-259.9,345.8,259.9), rect, rect=new cjs.Rectangle(-169.9,-259.9,344.8,260), rect, new cjs.Rectangle(-169.9,-259.9,344.7,260), new cjs.Rectangle(-170,-259.9,344.7,260), new cjs.Rectangle(-170,-259.9,344.6,260), rect=new cjs.Rectangle(-170,-259.9,343.7,260), rect, rect=new cjs.Rectangle(-169.9,-259.9,343.5,260), rect, rect, new cjs.Rectangle(-169.9,-259.9,343.4,260), rect=new cjs.Rectangle(-170,-259.9,342.5,260), rect, rect=new cjs.Rectangle(-170,-259.9,342.4,260), rect, new cjs.Rectangle(-169.9,-259.9,342.3,260), new cjs.Rectangle(-169.9,-259.9,341.4,260), rect=new cjs.Rectangle(-169.9,-259.9,341.3,260), rect, rect=new cjs.Rectangle(-170,-259.9,341.2,260), rect, new cjs.Rectangle(-170,-259.9,340.3,260), new cjs.Rectangle(-169.9,-259.9,340.2,260), new cjs.Rectangle(-169.9,-259.9,340.1,260), new cjs.Rectangle(-169.9,-260,340,260), new cjs.Rectangle(-170,-260,340,260), new cjs.Rectangle(-170,-260,340.1,260), new cjs.Rectangle(-170.1,-259.9,340.1,260), new cjs.Rectangle(-170.1,-259.9,340.2,260), new cjs.Rectangle(-170.2,-259.9,340.2,260), new cjs.Rectangle(-170.2,-259.9,340.3,260), new cjs.Rectangle(-171.1,-259.9,341.2,260), new cjs.Rectangle(-171.2,-259.9,341.3,260), new cjs.Rectangle(-171.3,-259.9,341.3,260), new cjs.Rectangle(-171.3,-259.9,341.4,260), new cjs.Rectangle(-171.4,-259.9,341.4,260), new cjs.Rectangle(-172.3,-259.9,342.3,260), new cjs.Rectangle(-172.3,-259.9,342.4,260), rect=new cjs.Rectangle(-172.4,-259.9,342.5,260), rect, new cjs.Rectangle(-172.5,-259.9,342.6,260), new cjs.Rectangle(-173.4,-259.9,343.5,260), new cjs.Rectangle(-173.5,-259.9,343.5,260), new cjs.Rectangle(-173.5,-259.9,343.6,260), rect=new cjs.Rectangle(-173.6,-259.9,343.7,260), rect, new cjs.Rectangle(-174.5,-259.9,344.6,260), rect=new cjs.Rectangle(-174.6,-259.9,344.7,260), rect, new cjs.Rectangle(-174.7,-259.9,344.8,260), new cjs.Rectangle(-174.8,-259.9,344.8,260), new cjs.Rectangle(-175.7,-259.9,345.7,259.9), new cjs.Rectangle(-175.7,-259.9,345.8,259.9), rect=new cjs.Rectangle(-175.8,-259.9,345.9,259.9), rect, new cjs.Rectangle(-175.9,-259.9,346,259.9), new cjs.Rectangle(-176.8,-259.8,346.9,259.9), new cjs.Rectangle(-176.9,-259.8,346.9,259.9), new cjs.Rectangle(-176.9,-259.8,347,259.9), rect=new cjs.Rectangle(-177,-259.8,347.1,259.9), rect, new cjs.Rectangle(-177.9,-259.8,348,259.9), new cjs.Rectangle(-178,-259.8,348.1,259.9), new cjs.Rectangle(-178.1,-259.8,348.1,259.9), new cjs.Rectangle(-178.1,-259.8,348.2,259.9), new cjs.Rectangle(-179,-259.8,349.1,259.9)];


(lib.animation_card_3_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{begin:0,mid:4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_5_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_4_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_4_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_4_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_4_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_7_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_3_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_3_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_4_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_3_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_3_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_7_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_2_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_4_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_3_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_7_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_4_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_3_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_3_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_5_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_4_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_4_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_4_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_4_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_7_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_3_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_3_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_4_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_3_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_3_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_7_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_2_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_4_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_3_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_7_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_4_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_3_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_2_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_5_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_4_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_7_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_3_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_3_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_4_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_3_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_3_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_7_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_2_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_4_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_3_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_7_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_4_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_1_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_3_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_0_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_5_1_mc();

	this.frame_1_mc = new lib.animation_card_2_5_1_mc();

	this.frame_2_mc = new lib.animation_card_3_5_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.animation_card_0_4_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_4_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_0_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_4_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_0_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_4_1_mc();

	this.frame_1_mc = new lib.animation_card_2_4_1_mc();

	this.frame_2_mc = new lib.animation_card_3_4_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.animation_card_0_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_0_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_0_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_3_1_mc();

	this.frame_1_mc = new lib.animation_card_2_3_1_mc();

	this.frame_2_mc = new lib.animation_card_3_3_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.animation_card_0_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_6_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_0_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_0_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_2_1_mc();

	this.frame_1_mc = new lib.animation_card_2_2_1_mc();

	this.frame_2_mc = new lib.animation_card_3_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.animation_card_0_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_2_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_0_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_1_mc();
	this.instance.setTransform(0,0,0.056,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.06},4).to({_off:true},1).wait(5));

	// shadow
	this.instance_2 = new lib.shadow_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":19,"end":39});

	// animation
	this.instance = new lib.curtain_1_mc();
	this.instance.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},13).wait(10).to({alpha:0.012},14).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.copyright_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
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


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.flash_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.flash_2_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},10).to({alpha:0.602},7).to({alpha:1},7).to({alpha:0.012},12).wait(1));

	// animation
	this.instance_1 = new lib.flash_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},17).to({alpha:0.012},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_mc();
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.301},15).wait(1));

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
		@copyright 2023 edapskov v 1.1
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
				window.open("https://x.com/DLstudio_2012", '_blank');
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
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-43.7,87.5,87.5);
p.frameBounds = [rect, new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-50,-50,100,100)];


(lib.play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,195,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,190,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.pause_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.pause_mc();
	this.instance.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, new cjs.Rectangle(-45,-45,90,90), new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-45,-45,90,90)];


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


(lib.animation_for_forward_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_for_forward_2_mc();
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,alpha:1},8).to({scaleX:1.08,scaleY:1.08,alpha:0.012},20).wait(17));

	// animation
	this.instance_1 = new lib.animation_for_forward_2_mc();
	this.instance_1.setTransform(0,0,0.5,0.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,alpha:1},8).to({scaleX:1.08,scaleY:1.08,alpha:0.012},20).wait(9));

	// animation
	this.instance_2 = new lib.animation_for_forward_2_mc();
	this.instance_2.setTransform(0,0,0.5,0.5);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,alpha:1},8).to({scaleX:1.08,scaleY:1.08,alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-67.7,-67.7,135.4,135.4), new cjs.Rectangle(-70.4,-70.4,140.9,140.9), new cjs.Rectangle(-73.1,-73.1,146.3,146.3), new cjs.Rectangle(-75.8,-75.8,151.6,151.6), new cjs.Rectangle(-78.5,-78.5,157.1,157.1), new cjs.Rectangle(-81.2,-81.2,162.5,162.5), new cjs.Rectangle(-83.9,-83.9,167.9,167.9), new cjs.Rectangle(-86.6,-86.6,173.3,173.3), new cjs.Rectangle(-89.3,-89.3,178.8,178.8), new cjs.Rectangle(-92,-92,184.1,184.1), new cjs.Rectangle(-94.7,-94.7,189.6,189.6), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-100.2,-100.2,200.4,200.4), new cjs.Rectangle(-102.9,-102.9,205.9,205.9), new cjs.Rectangle(-105.6,-105.6,211.3,211.3), new cjs.Rectangle(-108.3,-108.3,216.7,216.7), new cjs.Rectangle(-111,-111,222.1,222.1), new cjs.Rectangle(-113.7,-113.7,227.5,227.5), new cjs.Rectangle(-116.4,-116.4,232.9,232.9), new cjs.Rectangle(-119.1,-119.1,238.4,238.4), new cjs.Rectangle(-121.8,-121.8,243.8,243.8), new cjs.Rectangle(-124.5,-124.5,249.2,249.2), new cjs.Rectangle(-127.2,-127.2,254.6,254.6), new cjs.Rectangle(-129.9,-129.9,260,260), new cjs.Rectangle(-132.7,-132.7,265.4,265.4), new cjs.Rectangle(-135.4,-135.4,270.8,270.8), new cjs.Rectangle(-138.1,-138.1,276.3,276.3), rect=new cjs.Rectangle(-140.8,-140.8,281.7,281.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_for_forward_0_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.animation_for_forward_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
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


(lib.title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
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
	this.remove_btn.setTransform(580,115);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,610);
p.frameBounds = [rect];


(lib.preloader_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.preloader_3_mc();
	this.indicator_mc.setTransform(-90,-10);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-35,240,70);
p.frameBounds = [rect];


(lib.pause_app_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.pause_app_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.pause_app_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.pause_app_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.pause_app_1_4_mc();
	this.instance.setTransform(5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.pause_app_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.pause_app_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{play:0,pause:1});

	// graph
	this.instance = new lib.pause_app_2_mc();
	this.instance.setTransform(400,300);

	this.instance_1 = new lib.pause_app_3_mc();
	this.instance_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EhduAwcMAAAhg2MC7dAAAMAAABg2g");
	this.shape.setTransform(400,300,1.35,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect, rect];


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
	this.shape.setTransform(400,300,1.35,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.languages_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.tr = new lib.language_tr_mc();
	this.tr.setTransform(600,280);

	this.ru = new lib.language_ru_mc();
	this.ru.setTransform(400,280);

	this.en = new lib.language_en_mc();
	this.en.setTransform(200,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.en},{t:this.ru},{t:this.tr}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(110,215,580,130);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.location_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_17_mc();
	this.instance_2.setTransform(0,-14);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_16_mc();
	this.instance_2.setTransform(0,-14);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_15_mc();
	this.instance_2.setTransform(0,-14);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_14_mc();
	this.instance_2.setTransform(-3,-14);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_13_mc();
	this.instance_2.setTransform(0,-14);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_12_mc();
	this.instance_2.setTransform(0,-14);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_11_mc();
	this.instance_2.setTransform(0,-14);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_10_mc();
	this.instance_2.setTransform(0,-14);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_9_mc();
	this.instance_2.setTransform(1,-12);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_8_mc();
	this.instance_2.setTransform(1,-12);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_7_mc();
	this.instance_2.setTransform(2,-12);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_6_mc();
	this.instance_2.setTransform(1,-12);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_5_mc();
	this.instance_2.setTransform(2,-12);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_4_mc();
	this.instance_2.setTransform(-6,-12);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_3_mc();
	this.instance_2.setTransform(2,-12);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_2_mc();
	this.instance_2.setTransform(1,-12);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.current_location_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// icon
	this.instance_1 = new lib.lock_location_1_mc();

	this.instance_2 = new lib.sequence_number_1_mc();
	this.instance_2.setTransform(-2,-12);

	this.instance_3 = new lib.lock_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect, rect, rect];


(lib.indicator_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.indicator_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// glass
	this.instance_1 = new lib.animation_indicator_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.body_mc = new lib.indicator_7_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_2 = new lib.indicator_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.gribovik_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gribovik_win_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.99,y:2},39).to({scaleY:1,y:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-310,560,620);
p.frameBounds = [rect, new cjs.Rectangle(-280,-309.8,560,619.9), new cjs.Rectangle(-280,-309.7,560,619.8), new cjs.Rectangle(-280,-309.6,560,619.7), new cjs.Rectangle(-280,-309.5,560,619.6), new cjs.Rectangle(-280,-309.4,560,619.5), new cjs.Rectangle(-280,-309.3,560,619.4), new cjs.Rectangle(-280,-309.2,560,619.3), new cjs.Rectangle(-280,-309.1,560,619.2), new cjs.Rectangle(-280,-309,560,619.1), new cjs.Rectangle(-280,-308.9,560,619), new cjs.Rectangle(-280,-308.8,560,618.9), new cjs.Rectangle(-280,-308.7,560,618.8), new cjs.Rectangle(-280,-308.6,560,618.7), new cjs.Rectangle(-280,-308.5,560,618.6), new cjs.Rectangle(-280,-308.4,560,618.5), new cjs.Rectangle(-280,-308.3,560,618.4), new cjs.Rectangle(-280,-308.2,560,618.3), new cjs.Rectangle(-280,-308.1,560,618.2), new cjs.Rectangle(-280,-308,560,618.1), new cjs.Rectangle(-280,-307.9,560,618), new cjs.Rectangle(-280,-307.8,560,617.9), new cjs.Rectangle(-280,-307.7,560,617.8), new cjs.Rectangle(-280,-307.6,560,617.7), new cjs.Rectangle(-280,-307.5,560,617.6), new cjs.Rectangle(-280,-307.4,560,617.5), new cjs.Rectangle(-280,-307.3,560,617.4), new cjs.Rectangle(-280,-307.2,560,617.3), new cjs.Rectangle(-280,-307.1,560,617.1), new cjs.Rectangle(-280,-307,560,617), new cjs.Rectangle(-280,-306.9,560,617), new cjs.Rectangle(-280,-306.8,560,616.8), new cjs.Rectangle(-280,-306.7,560,616.7), new cjs.Rectangle(-280,-306.6,560,616.6), new cjs.Rectangle(-280,-306.5,560,616.5), new cjs.Rectangle(-280,-306.4,560,616.4), new cjs.Rectangle(-280,-306.3,560,616.3), new cjs.Rectangle(-280,-306.2,560,616.2), new cjs.Rectangle(-280,-306.1,560,616.1), new cjs.Rectangle(-280,-306,560,616), new cjs.Rectangle(-280,-306,560,616.1), new cjs.Rectangle(-280,-306.1,560,616.2), new cjs.Rectangle(-280,-306.2,560,616.3), new cjs.Rectangle(-280,-306.3,560,616.4), new cjs.Rectangle(-280,-306.4,560,616.5), new cjs.Rectangle(-280,-306.5,560,616.6), new cjs.Rectangle(-280,-306.6,560,616.7), new cjs.Rectangle(-280,-306.7,560,616.8), new cjs.Rectangle(-280,-306.8,560,616.9), new cjs.Rectangle(-280,-306.9,560,617), new cjs.Rectangle(-280,-307,560,617.1), new cjs.Rectangle(-280,-307.1,560,617.2), new cjs.Rectangle(-280,-307.2,560,617.3), new cjs.Rectangle(-280,-307.3,560,617.4), new cjs.Rectangle(-280,-307.4,560,617.5), new cjs.Rectangle(-280,-307.5,560,617.6), new cjs.Rectangle(-280,-307.6,560,617.7), new cjs.Rectangle(-280,-307.7,560,617.8), new cjs.Rectangle(-280,-307.8,560,617.9), new cjs.Rectangle(-280,-307.9,560,618), new cjs.Rectangle(-280,-308,560,618.1), new cjs.Rectangle(-280,-308.1,560,618.2), new cjs.Rectangle(-280,-308.2,560,618.3), new cjs.Rectangle(-280,-308.3,560,618.4), new cjs.Rectangle(-280,-308.4,560,618.5), new cjs.Rectangle(-280,-308.5,560,618.6), new cjs.Rectangle(-280,-308.6,560,618.7), new cjs.Rectangle(-280,-308.7,560,618.8), new cjs.Rectangle(-280,-308.8,560,618.9), new cjs.Rectangle(-280,-308.9,560,619), new cjs.Rectangle(-280,-309,560,619.1), new cjs.Rectangle(-280,-309.1,560,619.2), new cjs.Rectangle(-280,-309.2,560,619.3), new cjs.Rectangle(-280,-309.3,560,619.4), new cjs.Rectangle(-280,-309.4,560,619.5), new cjs.Rectangle(-280,-309.5,560,619.6), new cjs.Rectangle(-280,-309.6,560,619.7), new cjs.Rectangle(-280,-309.7,560,619.8), new cjs.Rectangle(-280,-309.8,560,619.9), new cjs.Rectangle(-280,-310,560,620)];


(lib.gribovik_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gribovik_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.99,y:2},39).to({scaleY:1,y:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,620);
p.frameBounds = [rect, new cjs.Rectangle(-210,-309.8,420,619.9), new cjs.Rectangle(-210,-309.7,420,619.8), new cjs.Rectangle(-210,-309.6,420,619.7), new cjs.Rectangle(-210,-309.5,420,619.6), new cjs.Rectangle(-210,-309.4,420,619.5), new cjs.Rectangle(-210,-309.3,420,619.4), new cjs.Rectangle(-210,-309.2,420,619.3), new cjs.Rectangle(-210,-309.1,420,619.2), new cjs.Rectangle(-210,-309,420,619.1), new cjs.Rectangle(-210,-308.9,420,619), new cjs.Rectangle(-210,-308.8,420,618.9), new cjs.Rectangle(-210,-308.7,420,618.8), new cjs.Rectangle(-210,-308.6,420,618.7), new cjs.Rectangle(-210,-308.5,420,618.6), new cjs.Rectangle(-210,-308.4,420,618.5), new cjs.Rectangle(-210,-308.3,420,618.4), new cjs.Rectangle(-210,-308.2,420,618.3), new cjs.Rectangle(-210,-308.1,420,618.2), new cjs.Rectangle(-210,-308,420,618.1), new cjs.Rectangle(-210,-307.9,420,618), new cjs.Rectangle(-210,-307.8,420,617.9), new cjs.Rectangle(-210,-307.7,420,617.8), new cjs.Rectangle(-210,-307.6,420,617.7), new cjs.Rectangle(-210,-307.5,420,617.6), new cjs.Rectangle(-210,-307.4,420,617.5), new cjs.Rectangle(-210,-307.3,420,617.4), new cjs.Rectangle(-210,-307.2,420,617.3), new cjs.Rectangle(-210,-307.1,420,617.1), new cjs.Rectangle(-210,-307,420,617), new cjs.Rectangle(-210,-306.9,420,617), new cjs.Rectangle(-210,-306.8,420,616.8), new cjs.Rectangle(-210,-306.7,420,616.7), new cjs.Rectangle(-210,-306.6,420,616.6), new cjs.Rectangle(-210,-306.5,420,616.5), new cjs.Rectangle(-210,-306.4,420,616.4), new cjs.Rectangle(-210,-306.3,420,616.3), new cjs.Rectangle(-210,-306.2,420,616.2), new cjs.Rectangle(-210,-306.1,420,616.1), new cjs.Rectangle(-210,-306,420,616), new cjs.Rectangle(-210,-306,420,616.1), new cjs.Rectangle(-210,-306.1,420,616.2), new cjs.Rectangle(-210,-306.2,420,616.3), new cjs.Rectangle(-210,-306.3,420,616.4), new cjs.Rectangle(-210,-306.4,420,616.5), new cjs.Rectangle(-210,-306.5,420,616.6), new cjs.Rectangle(-210,-306.6,420,616.7), new cjs.Rectangle(-210,-306.7,420,616.8), new cjs.Rectangle(-210,-306.8,420,616.9), new cjs.Rectangle(-210,-306.9,420,617), new cjs.Rectangle(-210,-307,420,617.1), new cjs.Rectangle(-210,-307.1,420,617.2), new cjs.Rectangle(-210,-307.2,420,617.3), new cjs.Rectangle(-210,-307.3,420,617.4), new cjs.Rectangle(-210,-307.4,420,617.5), new cjs.Rectangle(-210,-307.5,420,617.6), new cjs.Rectangle(-210,-307.6,420,617.7), new cjs.Rectangle(-210,-307.7,420,617.8), new cjs.Rectangle(-210,-307.8,420,617.9), new cjs.Rectangle(-210,-307.9,420,618), new cjs.Rectangle(-210,-308,420,618.1), new cjs.Rectangle(-210,-308.1,420,618.2), new cjs.Rectangle(-210,-308.2,420,618.3), new cjs.Rectangle(-210,-308.3,420,618.4), new cjs.Rectangle(-210,-308.4,420,618.5), new cjs.Rectangle(-210,-308.5,420,618.6), new cjs.Rectangle(-210,-308.6,420,618.7), new cjs.Rectangle(-210,-308.7,420,618.8), new cjs.Rectangle(-210,-308.8,420,618.9), new cjs.Rectangle(-210,-308.9,420,619), new cjs.Rectangle(-210,-309,420,619.1), new cjs.Rectangle(-210,-309.1,420,619.2), new cjs.Rectangle(-210,-309.2,420,619.3), new cjs.Rectangle(-210,-309.3,420,619.4), new cjs.Rectangle(-210,-309.4,420,619.5), new cjs.Rectangle(-210,-309.5,420,619.6), new cjs.Rectangle(-210,-309.6,420,619.7), new cjs.Rectangle(-210,-309.7,420,619.8), new cjs.Rectangle(-210,-309.8,420,619.9), new cjs.Rectangle(-210,-310,420,620)];


(lib.frame_locations_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_13
	this.location_13 = new lib.location_13_mc();
	this.location_13.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_13).wait(100));

	// location_14
	this.location_14 = new lib.location_14_mc();
	this.location_14.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_14).wait(100));

	// location_15
	this.location_15 = new lib.location_15_mc();
	this.location_15.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_15).wait(100));

	// location_16
	this.location_16 = new lib.location_16_mc();
	this.location_16.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_16).wait(100));

	// location_17
	this.location_17 = new lib.location_17_mc();
	this.location_17.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_17).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165,740,380.8), new cjs.Rectangle(-370,-165,740,381.6), new cjs.Rectangle(-370,-165,740,382.4), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,384), new cjs.Rectangle(-370,-165,740,384.8), new cjs.Rectangle(-370,-165,740,385.6), new cjs.Rectangle(-370,-165,740,386.4), new cjs.Rectangle(-370,-165,740,387.1), new cjs.Rectangle(-370,-165,740,387.9), new cjs.Rectangle(-370,-165,740,387.3), new cjs.Rectangle(-370,-165,740,386.9), new cjs.Rectangle(-370,-165,740,386.3), new cjs.Rectangle(-370,-165,740,385.8), new cjs.Rectangle(-370,-165,740,385.3), new cjs.Rectangle(-370,-165,740,384.7), new cjs.Rectangle(-370,-165,740,384.1), new cjs.Rectangle(-370,-165,740,383.6), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,382.6), new cjs.Rectangle(-370,-165,740,382), new cjs.Rectangle(-370,-165,740,381.5), new cjs.Rectangle(-370,-165,740,381), new cjs.Rectangle(-370,-165,740,380.4), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_13
	this.location_13 = new lib.location_13_mc();
	this.location_13.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_13).wait(100));

	// location_14
	this.location_14 = new lib.location_14_mc();
	this.location_14.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_14).wait(100));

	// location_15
	this.location_15 = new lib.location_15_mc();
	this.location_15.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_15).wait(100));

	// location_16
	this.location_16 = new lib.location_16_mc();
	this.location_16.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_16).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_17
	this.location_17 = new lib.location_17_mc();
	this.location_17.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_17).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165,740,380.8), new cjs.Rectangle(-370,-165,740,381.6), new cjs.Rectangle(-370,-165,740,382.4), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,384), new cjs.Rectangle(-370,-165,740,384.8), new cjs.Rectangle(-370,-165,740,385.6), new cjs.Rectangle(-370,-165,740,386.4), new cjs.Rectangle(-370,-165,740,387.1), new cjs.Rectangle(-370,-165,740,387.9), new cjs.Rectangle(-370,-165,740,387.3), new cjs.Rectangle(-370,-165,740,386.9), new cjs.Rectangle(-370,-165,740,386.3), new cjs.Rectangle(-370,-165,740,385.8), new cjs.Rectangle(-370,-165,740,385.3), new cjs.Rectangle(-370,-165,740,384.7), new cjs.Rectangle(-370,-165,740,384.1), new cjs.Rectangle(-370,-165,740,383.6), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,382.6), new cjs.Rectangle(-370,-165,740,382), new cjs.Rectangle(-370,-165,740,381.5), new cjs.Rectangle(-370,-165,740,381), new cjs.Rectangle(-370,-165,740,380.4), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_13
	this.location_13 = new lib.location_13_mc();
	this.location_13.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_13).wait(100));

	// location_14
	this.location_14 = new lib.location_14_mc();
	this.location_14.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_14).wait(100));

	// location_15
	this.location_15 = new lib.location_15_mc();
	this.location_15.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_15).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_16
	this.location_16 = new lib.location_16_mc();
	this.location_16.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_16).wait(100));

	// location_17
	this.location_17 = new lib.location_17_mc();
	this.location_17.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_17).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165.7,741,380.8), new cjs.Rectangle(-370,-166.5,742,381.6), new cjs.Rectangle(-370,-167.3,743,382.4), new cjs.Rectangle(-370,-168.1,744,383.2), new cjs.Rectangle(-370,-168.9,745.1,384), new cjs.Rectangle(-370,-169.7,746.1,384.7), new cjs.Rectangle(-370,-170.5,747.1,385.5), new cjs.Rectangle(-370,-171.3,748.1,386.3), new cjs.Rectangle(-370,-172.1,749.1,387.1), new cjs.Rectangle(-370,-172.9,750,387.9), new cjs.Rectangle(-370,-172.3,749.4,387.3), new cjs.Rectangle(-370,-171.7,748.6,386.8), new cjs.Rectangle(-370,-171.2,748.1,386.3), new cjs.Rectangle(-370,-170.7,747.3,385.8), new cjs.Rectangle(-370,-170.2,746.6,385.3), new cjs.Rectangle(-370,-169.6,746.1,384.7), new cjs.Rectangle(-370,-169.1,745.3,384.2), new cjs.Rectangle(-370,-168.6,744.6,383.6), new cjs.Rectangle(-370,-168.1,744,383.1), new cjs.Rectangle(-370,-167.6,743.3,382.6), new cjs.Rectangle(-370,-167.1,742.6,382.1), new cjs.Rectangle(-370,-166.5,742,381.5), new cjs.Rectangle(-370,-166,741.3,381), new cjs.Rectangle(-370,-165.4,740.7,380.5), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165,738,380), new cjs.Rectangle(-370,-165,736,380), new cjs.Rectangle(-370,-165,734,380), new cjs.Rectangle(-370,-165,732,380), new cjs.Rectangle(-370,-165,730,380), new cjs.Rectangle(-370,-165,731.1,380), new cjs.Rectangle(-370,-165,732,380), new cjs.Rectangle(-370,-165,733.1,380), new cjs.Rectangle(-370,-165,734,380), new cjs.Rectangle(-370,-165,735.1,380), new cjs.Rectangle(-370,-165,736,380), new cjs.Rectangle(-370,-165,737.1,380), new cjs.Rectangle(-370,-165,738,380), new cjs.Rectangle(-370,-165,739.1,380), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_13
	this.location_13 = new lib.location_13_mc();
	this.location_13.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_13).wait(100));

	// location_14
	this.location_14 = new lib.location_14_mc();
	this.location_14.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_14).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_15
	this.location_15 = new lib.location_15_mc();
	this.location_15.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_15).wait(100));

	// location_16
	this.location_16 = new lib.location_16_mc();
	this.location_16.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_16).wait(100));

	// location_17
	this.location_17 = new lib.location_17_mc();
	this.location_17.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_17).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165.7,740,380.8), new cjs.Rectangle(-370,-166.5,740,381.6), new cjs.Rectangle(-370,-167.3,740,382.4), new cjs.Rectangle(-370,-168.1,740,383.2), new cjs.Rectangle(-370,-168.9,740,384), new cjs.Rectangle(-370,-169.7,740,384.7), new cjs.Rectangle(-370,-170.5,740,385.5), new cjs.Rectangle(-370,-171.3,740,386.3), new cjs.Rectangle(-370,-172.1,740,387.1), new cjs.Rectangle(-370,-172.9,740,387.9), new cjs.Rectangle(-370,-172.3,740,387.3), new cjs.Rectangle(-370,-171.7,740,386.8), new cjs.Rectangle(-370,-171.2,740,386.3), new cjs.Rectangle(-370,-170.7,740,385.8), new cjs.Rectangle(-370,-170.2,740,385.3), new cjs.Rectangle(-370,-169.6,740,384.7), new cjs.Rectangle(-370,-169.1,740,384.2), new cjs.Rectangle(-370,-168.6,740,383.6), new cjs.Rectangle(-370,-168.1,740,383.1), new cjs.Rectangle(-370,-167.6,740,382.6), new cjs.Rectangle(-370,-167.1,740,382.1), new cjs.Rectangle(-370,-166.5,740,381.5), new cjs.Rectangle(-370,-166,740,381), new cjs.Rectangle(-370,-165.4,740,380.5), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":139});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_59 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_69 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(71));

	// location_17
	this.location_17 = new lib.location_17_mc();
	this.location_17.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_17).wait(1).to({y:-400},0).wait(28).to({y:200},15).to({y:120},10).wait(86));

	// location_16
	this.location_16 = new lib.location_16_mc();
	this.location_16.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_16).wait(1).to({y:-400},0).wait(18).to({y:200},15).to({y:120},10).wait(96));

	// location_15
	this.location_15 = new lib.location_15_mc();
	this.location_15.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_15).wait(1).to({y:-600},0).wait(58).to({y:0},15).to({y:-70},10).wait(56));

	// location_14
	this.location_14 = new lib.location_14_mc();
	this.location_14.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_14).wait(1).to({y:-600},0).wait(48).to({y:0},15).to({y:-70},10).wait(66));

	// location_13
	this.location_13 = new lib.location_13_mc();
	this.location_13.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_13).wait(1).to({y:-600},0).wait(38).to({y:0},15).to({y:-70},10).wait(25).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-695,740,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-695,740,430), new cjs.Rectangle(-370,-695,740,470), new cjs.Rectangle(-370,-695,740,510), new cjs.Rectangle(-370,-695,740,550), new cjs.Rectangle(-370,-695,740,590), new cjs.Rectangle(-370,-695,740,630), new cjs.Rectangle(-370,-695,740,670), new cjs.Rectangle(-370,-695,740,710), new cjs.Rectangle(-370,-695,740,750), new cjs.Rectangle(-370,-695,740,790), new cjs.Rectangle(-370,-695,740,830), new cjs.Rectangle(-370,-695,740,870), new cjs.Rectangle(-370,-695,740,910), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,990), new cjs.Rectangle(-370,-695,740,982), new cjs.Rectangle(-370,-695,740,974), new cjs.Rectangle(-370,-695,740,966), new cjs.Rectangle(-370,-695,740,958), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,942), new cjs.Rectangle(-370,-695,740,934), new cjs.Rectangle(-370,-695,740,926), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,990), new cjs.Rectangle(-370,-695,740,982), new cjs.Rectangle(-370,-695,740,974), new cjs.Rectangle(-370,-695,740,966), new cjs.Rectangle(-370,-695,740,958), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,942), new cjs.Rectangle(-370,-695,740,934), new cjs.Rectangle(-370,-695,740,926), new cjs.Rectangle(-370,-695,740,918), rect=new cjs.Rectangle(-370,-695,740,910), rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-655,740,870), new cjs.Rectangle(-370,-615,740,830), new cjs.Rectangle(-370,-575,740,790), new cjs.Rectangle(-370,-535,740,750), new cjs.Rectangle(-370,-495,740,710), new cjs.Rectangle(-370,-455,740,670), new cjs.Rectangle(-370,-415,740,630), new cjs.Rectangle(-370,-375,740,590), new cjs.Rectangle(-370,-335,740,550), new cjs.Rectangle(-370,-295,740,510), new cjs.Rectangle(-370,-255,740,470), new cjs.Rectangle(-370,-215,740,430), new cjs.Rectangle(-370,-175,740,390), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-368,-165,738,380), new cjs.Rectangle(-366,-165,736,380), new cjs.Rectangle(-363.9,-165,734,380), new cjs.Rectangle(-362,-165,732,380), new cjs.Rectangle(-360,-165,730,380), new cjs.Rectangle(-361,-165,731,380), new cjs.Rectangle(-361.9,-165,732,380), new cjs.Rectangle(-363,-165,733,380), new cjs.Rectangle(-363.9,-165,734,380), new cjs.Rectangle(-365,-165,735,380), new cjs.Rectangle(-365.9,-165,736,380), new cjs.Rectangle(-367,-165,737,380), new cjs.Rectangle(-367.9,-165,738,380), new cjs.Rectangle(-369,-165,739,380), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(100));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(100));

	// location_10
	this.location_10 = new lib.location_10_mc();
	this.location_10.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_10).wait(100));

	// location_11
	this.location_11 = new lib.location_11_mc();
	this.location_11.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_11).wait(100));

	// location_12
	this.location_12 = new lib.location_12_mc();
	this.location_12.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_12).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165,740,380.8), new cjs.Rectangle(-370,-165,740,381.6), new cjs.Rectangle(-370,-165,740,382.4), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,384), new cjs.Rectangle(-370,-165,740,384.8), new cjs.Rectangle(-370,-165,740,385.6), new cjs.Rectangle(-370,-165,740,386.4), new cjs.Rectangle(-370,-165,740,387.1), new cjs.Rectangle(-370,-165,740,387.9), new cjs.Rectangle(-370,-165,740,387.3), new cjs.Rectangle(-370,-165,740,386.9), new cjs.Rectangle(-370,-165,740,386.3), new cjs.Rectangle(-370,-165,740,385.8), new cjs.Rectangle(-370,-165,740,385.3), new cjs.Rectangle(-370,-165,740,384.7), new cjs.Rectangle(-370,-165,740,384.1), new cjs.Rectangle(-370,-165,740,383.6), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,382.6), new cjs.Rectangle(-370,-165,740,382), new cjs.Rectangle(-370,-165,740,381.5), new cjs.Rectangle(-370,-165,740,381), new cjs.Rectangle(-370,-165,740,380.4), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(100));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(100));

	// location_10
	this.location_10 = new lib.location_10_mc();
	this.location_10.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_10).wait(100));

	// location_11
	this.location_11 = new lib.location_11_mc();
	this.location_11.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_11).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_12
	this.location_12 = new lib.location_12_mc();
	this.location_12.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_12).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165,740,380.8), new cjs.Rectangle(-370,-165,740,381.6), new cjs.Rectangle(-370,-165,740,382.4), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,384), new cjs.Rectangle(-370,-165,740,384.8), new cjs.Rectangle(-370,-165,740,385.6), new cjs.Rectangle(-370,-165,740,386.4), new cjs.Rectangle(-370,-165,740,387.1), new cjs.Rectangle(-370,-165,740,387.9), new cjs.Rectangle(-370,-165,740,387.3), new cjs.Rectangle(-370,-165,740,386.9), new cjs.Rectangle(-370,-165,740,386.3), new cjs.Rectangle(-370,-165,740,385.8), new cjs.Rectangle(-370,-165,740,385.3), new cjs.Rectangle(-370,-165,740,384.7), new cjs.Rectangle(-370,-165,740,384.1), new cjs.Rectangle(-370,-165,740,383.6), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,382.6), new cjs.Rectangle(-370,-165,740,382), new cjs.Rectangle(-370,-165,740,381.5), new cjs.Rectangle(-370,-165,740,381), new cjs.Rectangle(-370,-165,740,380.4), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":139});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_59 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_69 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(71));

	// location_12
	this.location_12 = new lib.location_12_mc();
	this.location_12.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_12).wait(1).to({y:-400},0).wait(28).to({y:200},15).to({y:120},10).wait(86));

	// location_11
	this.location_11 = new lib.location_11_mc();
	this.location_11.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_11).wait(1).to({y:-400},0).wait(18).to({y:200},15).to({y:120},10).wait(96));

	// location_10
	this.location_10 = new lib.location_10_mc();
	this.location_10.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_10).wait(1).to({y:-600},0).wait(58).to({y:0},15).to({y:-70},10).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(1).to({y:-600},0).wait(48).to({y:0},15).to({y:-70},10).wait(66));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1).to({y:-600},0).wait(38).to({y:0},15).to({y:-70},10).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-695,740,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-695,740,430), new cjs.Rectangle(-370,-695,740,470), new cjs.Rectangle(-370,-695,740,510), new cjs.Rectangle(-370,-695,740,550), new cjs.Rectangle(-370,-695,740,590), new cjs.Rectangle(-370,-695,740,630), new cjs.Rectangle(-370,-695,740,670), new cjs.Rectangle(-370,-695,740,710), new cjs.Rectangle(-370,-695,740,750), new cjs.Rectangle(-370,-695,740,790), new cjs.Rectangle(-370,-695,740,830), new cjs.Rectangle(-370,-695,740,870), new cjs.Rectangle(-370,-695,740,910), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,990), new cjs.Rectangle(-370,-695,740,982), new cjs.Rectangle(-370,-695,740,974), new cjs.Rectangle(-370,-695,740,966), new cjs.Rectangle(-370,-695,740,958), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,942), new cjs.Rectangle(-370,-695,740,934), new cjs.Rectangle(-370,-695,740,926), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,990), new cjs.Rectangle(-370,-695,740,982), new cjs.Rectangle(-370,-695,740,974), new cjs.Rectangle(-370,-695,740,966), new cjs.Rectangle(-370,-695,740,958), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,942), new cjs.Rectangle(-370,-695,740,934), new cjs.Rectangle(-370,-695,740,926), new cjs.Rectangle(-370,-695,740,918), rect=new cjs.Rectangle(-370,-695,740,910), rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-655,740,870), new cjs.Rectangle(-370,-615,740,830), new cjs.Rectangle(-370,-575,740,790), new cjs.Rectangle(-370,-535,740,750), new cjs.Rectangle(-370,-495,740,710), new cjs.Rectangle(-370,-455,740,670), new cjs.Rectangle(-370,-415,740,630), new cjs.Rectangle(-370,-375,740,590), new cjs.Rectangle(-370,-335,740,550), new cjs.Rectangle(-370,-295,740,510), new cjs.Rectangle(-370,-255,740,470), new cjs.Rectangle(-370,-215,740,430), new cjs.Rectangle(-370,-175,740,390), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165,738,380), new cjs.Rectangle(-370,-165,736,380), new cjs.Rectangle(-370,-165,734,380), new cjs.Rectangle(-370,-165,732,380), new cjs.Rectangle(-370,-165,730,380), new cjs.Rectangle(-370,-165,731.1,380), new cjs.Rectangle(-370,-165,732,380), new cjs.Rectangle(-370,-165,733.1,380), new cjs.Rectangle(-370,-165,734,380), new cjs.Rectangle(-370,-165,735.1,380), new cjs.Rectangle(-370,-165,736,380), new cjs.Rectangle(-370,-165,737.1,380), new cjs.Rectangle(-370,-165,738,380), new cjs.Rectangle(-370,-165,739.1,380), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(100));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(100));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(100));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_10
	this.location_10 = new lib.location_10_mc();
	this.location_10.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_10).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165,740,380.8), new cjs.Rectangle(-370,-165,740,381.6), new cjs.Rectangle(-370,-165,740,382.4), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,384), new cjs.Rectangle(-370,-165,740,384.8), new cjs.Rectangle(-370,-165,740,385.6), new cjs.Rectangle(-370,-165,740,386.4), new cjs.Rectangle(-370,-165,740,387.1), new cjs.Rectangle(-370,-165,740,387.9), new cjs.Rectangle(-370,-165,740,387.3), new cjs.Rectangle(-370,-165,740,386.9), new cjs.Rectangle(-370,-165,740,386.3), new cjs.Rectangle(-370,-165,740,385.8), new cjs.Rectangle(-370,-165,740,385.3), new cjs.Rectangle(-370,-165,740,384.7), new cjs.Rectangle(-370,-165,740,384.1), new cjs.Rectangle(-370,-165,740,383.6), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,382.6), new cjs.Rectangle(-370,-165,740,382), new cjs.Rectangle(-370,-165,740,381.5), new cjs.Rectangle(-370,-165,740,381), new cjs.Rectangle(-370,-165,740,380.4), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(100));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(100));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(100));

	// location_10
	this.location_10 = new lib.location_10_mc();
	this.location_10.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_10).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165.7,741,380.8), new cjs.Rectangle(-370,-166.5,742,381.6), new cjs.Rectangle(-370,-167.3,743,382.4), new cjs.Rectangle(-370,-168.1,744,383.2), new cjs.Rectangle(-370,-168.9,745.1,384), new cjs.Rectangle(-370,-169.7,746.1,384.7), new cjs.Rectangle(-370,-170.5,747.1,385.5), new cjs.Rectangle(-370,-171.3,748.1,386.3), new cjs.Rectangle(-370,-172.1,749.1,387.1), new cjs.Rectangle(-370,-172.9,750,387.9), new cjs.Rectangle(-370,-172.3,749.4,387.3), new cjs.Rectangle(-370,-171.7,748.6,386.8), new cjs.Rectangle(-370,-171.2,748.1,386.3), new cjs.Rectangle(-370,-170.7,747.3,385.8), new cjs.Rectangle(-370,-170.2,746.6,385.3), new cjs.Rectangle(-370,-169.6,746.1,384.7), new cjs.Rectangle(-370,-169.1,745.3,384.2), new cjs.Rectangle(-370,-168.6,744.6,383.6), new cjs.Rectangle(-370,-168.1,744,383.1), new cjs.Rectangle(-370,-167.6,743.3,382.6), new cjs.Rectangle(-370,-167.1,742.6,382.1), new cjs.Rectangle(-370,-166.5,742,381.5), new cjs.Rectangle(-370,-166,741.3,381), new cjs.Rectangle(-370,-165.4,740.7,380.5), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165,738,380), new cjs.Rectangle(-370,-165,736,380), new cjs.Rectangle(-370,-165,734,380), new cjs.Rectangle(-370,-165,732,380), new cjs.Rectangle(-370,-165,730,380), new cjs.Rectangle(-370,-165,731.1,380), new cjs.Rectangle(-370,-165,732,380), new cjs.Rectangle(-370,-165,733.1,380), new cjs.Rectangle(-370,-165,734,380), new cjs.Rectangle(-370,-165,735.1,380), new cjs.Rectangle(-370,-165,736,380), new cjs.Rectangle(-370,-165,737.1,380), new cjs.Rectangle(-370,-165,738,380), new cjs.Rectangle(-370,-165,739.1,380), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(100));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(100));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(100));

	// location_10
	this.location_10 = new lib.location_10_mc();
	this.location_10.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_10).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165.7,740,380.8), new cjs.Rectangle(-370,-166.5,740,381.6), new cjs.Rectangle(-370,-167.3,740,382.4), new cjs.Rectangle(-370,-168.1,740,383.2), new cjs.Rectangle(-370,-168.9,740,384), new cjs.Rectangle(-370,-169.7,740,384.7), new cjs.Rectangle(-370,-170.5,740,385.5), new cjs.Rectangle(-370,-171.3,740,386.3), new cjs.Rectangle(-370,-172.1,740,387.1), new cjs.Rectangle(-370,-172.9,740,387.9), new cjs.Rectangle(-370,-172.3,740,387.3), new cjs.Rectangle(-370,-171.7,740,386.8), new cjs.Rectangle(-370,-171.2,740,386.3), new cjs.Rectangle(-370,-170.7,740,385.8), new cjs.Rectangle(-370,-170.2,740,385.3), new cjs.Rectangle(-370,-169.6,740,384.7), new cjs.Rectangle(-370,-169.1,740,384.2), new cjs.Rectangle(-370,-168.6,740,383.6), new cjs.Rectangle(-370,-168.1,740,383.1), new cjs.Rectangle(-370,-167.6,740,382.6), new cjs.Rectangle(-370,-167.1,740,382.1), new cjs.Rectangle(-370,-166.5,740,381.5), new cjs.Rectangle(-370,-166,740,381), new cjs.Rectangle(-370,-165.4,740,380.5), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":139});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_59 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_69 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(71));

	// location_10
	this.location_10 = new lib.location_10_mc();
	this.location_10.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_10).wait(1).to({y:-400},0).wait(28).to({y:200},15).to({y:120},10).wait(86));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(1).to({y:-400},0).wait(18).to({y:200},15).to({y:120},10).wait(96));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1).to({y:-600},0).wait(58).to({y:0},15).to({y:-70},10).wait(56));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({y:-600},0).wait(48).to({y:0},15).to({y:-70},10).wait(66));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-600},0).wait(38).to({y:0},15).to({y:-70},10).wait(25).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-695,740,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-695,740,430), new cjs.Rectangle(-370,-695,740,470), new cjs.Rectangle(-370,-695,740,510), new cjs.Rectangle(-370,-695,740,550), new cjs.Rectangle(-370,-695,740,590), new cjs.Rectangle(-370,-695,740,630), new cjs.Rectangle(-370,-695,740,670), new cjs.Rectangle(-370,-695,740,710), new cjs.Rectangle(-370,-695,740,750), new cjs.Rectangle(-370,-695,740,790), new cjs.Rectangle(-370,-695,740,830), new cjs.Rectangle(-370,-695,740,870), new cjs.Rectangle(-370,-695,740,910), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,990), new cjs.Rectangle(-370,-695,740,982), new cjs.Rectangle(-370,-695,740,974), new cjs.Rectangle(-370,-695,740,966), new cjs.Rectangle(-370,-695,740,958), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,942), new cjs.Rectangle(-370,-695,740,934), new cjs.Rectangle(-370,-695,740,926), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,990), new cjs.Rectangle(-370,-695,740,982), new cjs.Rectangle(-370,-695,740,974), new cjs.Rectangle(-370,-695,740,966), new cjs.Rectangle(-370,-695,740,958), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,942), new cjs.Rectangle(-370,-695,740,934), new cjs.Rectangle(-370,-695,740,926), new cjs.Rectangle(-370,-695,740,918), rect=new cjs.Rectangle(-370,-695,740,910), rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-655,740,870), new cjs.Rectangle(-370,-615,740,830), new cjs.Rectangle(-370,-575,740,790), new cjs.Rectangle(-370,-535,740,750), new cjs.Rectangle(-370,-495,740,710), new cjs.Rectangle(-370,-455,740,670), new cjs.Rectangle(-370,-415,740,630), new cjs.Rectangle(-370,-375,740,590), new cjs.Rectangle(-370,-335,740,550), new cjs.Rectangle(-370,-295,740,510), new cjs.Rectangle(-370,-255,740,470), new cjs.Rectangle(-370,-215,740,430), new cjs.Rectangle(-370,-175,740,390), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-368,-165,738,380), new cjs.Rectangle(-366,-165,736,380), new cjs.Rectangle(-363.9,-165,734,380), new cjs.Rectangle(-362,-165,732,380), new cjs.Rectangle(-360,-165,730,380), new cjs.Rectangle(-361,-165,731,380), new cjs.Rectangle(-361.9,-165,732,380), new cjs.Rectangle(-363,-165,733,380), new cjs.Rectangle(-363.9,-165,734,380), new cjs.Rectangle(-365,-165,735,380), new cjs.Rectangle(-365.9,-165,736,380), new cjs.Rectangle(-367,-165,737,380), new cjs.Rectangle(-367.9,-165,738,380), new cjs.Rectangle(-369,-165,739,380), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(100));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(100));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(100));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(100));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165,740,380.8), new cjs.Rectangle(-370,-165,740,381.6), new cjs.Rectangle(-370,-165,740,382.4), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,384), new cjs.Rectangle(-370,-165,740,384.8), new cjs.Rectangle(-370,-165,740,385.6), new cjs.Rectangle(-370,-165,740,386.4), new cjs.Rectangle(-370,-165,740,387.1), new cjs.Rectangle(-370,-165,740,387.9), new cjs.Rectangle(-370,-165,740,387.3), new cjs.Rectangle(-370,-165,740,386.9), new cjs.Rectangle(-370,-165,740,386.3), new cjs.Rectangle(-370,-165,740,385.8), new cjs.Rectangle(-370,-165,740,385.3), new cjs.Rectangle(-370,-165,740,384.7), new cjs.Rectangle(-370,-165,740,384.1), new cjs.Rectangle(-370,-165,740,383.6), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,382.6), new cjs.Rectangle(-370,-165,740,382), new cjs.Rectangle(-370,-165,740,381.5), new cjs.Rectangle(-370,-165,740,381), new cjs.Rectangle(-370,-165,740,380.4), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(100));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(100));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(100));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165,740,380.8), new cjs.Rectangle(-370,-165,740,381.6), new cjs.Rectangle(-370,-165,740,382.4), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,384), new cjs.Rectangle(-370,-165,740,384.8), new cjs.Rectangle(-370,-165,740,385.6), new cjs.Rectangle(-370,-165,740,386.4), new cjs.Rectangle(-370,-165,740,387.1), new cjs.Rectangle(-370,-165,740,387.9), new cjs.Rectangle(-370,-165,740,387.3), new cjs.Rectangle(-370,-165,740,386.9), new cjs.Rectangle(-370,-165,740,386.3), new cjs.Rectangle(-370,-165,740,385.8), new cjs.Rectangle(-370,-165,740,385.3), new cjs.Rectangle(-370,-165,740,384.7), new cjs.Rectangle(-370,-165,740,384.1), new cjs.Rectangle(-370,-165,740,383.6), new cjs.Rectangle(-370,-165,740,383.1), new cjs.Rectangle(-370,-165,740,382.6), new cjs.Rectangle(-370,-165,740,382), new cjs.Rectangle(-370,-165,740,381.5), new cjs.Rectangle(-370,-165,740,381), new cjs.Rectangle(-370,-165,740,380.4), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(100));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(100));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(100));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165.7,741,380.8), new cjs.Rectangle(-370,-166.5,742,381.6), new cjs.Rectangle(-370,-167.3,743,382.4), new cjs.Rectangle(-370,-168.1,744,383.2), new cjs.Rectangle(-370,-168.9,745.1,384), new cjs.Rectangle(-370,-169.7,746.1,384.7), new cjs.Rectangle(-370,-170.5,747.1,385.5), new cjs.Rectangle(-370,-171.3,748.1,386.3), new cjs.Rectangle(-370,-172.1,749.1,387.1), new cjs.Rectangle(-370,-172.9,750,387.9), new cjs.Rectangle(-370,-172.3,749.4,387.3), new cjs.Rectangle(-370,-171.7,748.6,386.8), new cjs.Rectangle(-370,-171.2,748.1,386.3), new cjs.Rectangle(-370,-170.7,747.3,385.8), new cjs.Rectangle(-370,-170.2,746.6,385.3), new cjs.Rectangle(-370,-169.6,746.1,384.7), new cjs.Rectangle(-370,-169.1,745.3,384.2), new cjs.Rectangle(-370,-168.6,744.6,383.6), new cjs.Rectangle(-370,-168.1,744,383.1), new cjs.Rectangle(-370,-167.6,743.3,382.6), new cjs.Rectangle(-370,-167.1,742.6,382.1), new cjs.Rectangle(-370,-166.5,742,381.5), new cjs.Rectangle(-370,-166,741.3,381), new cjs.Rectangle(-370,-165.4,740.7,380.5), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165,738,380), new cjs.Rectangle(-370,-165,736,380), new cjs.Rectangle(-370,-165,734,380), new cjs.Rectangle(-370,-165,732,380), new cjs.Rectangle(-370,-165,730,380), new cjs.Rectangle(-370,-165,731.1,380), new cjs.Rectangle(-370,-165,732,380), new cjs.Rectangle(-370,-165,733.1,380), new cjs.Rectangle(-370,-165,734,380), new cjs.Rectangle(-370,-165,735.1,380), new cjs.Rectangle(-370,-165,736,380), new cjs.Rectangle(-370,-165,737.1,380), new cjs.Rectangle(-370,-165,738,380), new cjs.Rectangle(-370,-165,739.1,380), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(100));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(19).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},15).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(100));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(100));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-165.7,740,380.8), new cjs.Rectangle(-370,-166.5,740,381.6), new cjs.Rectangle(-370,-167.3,740,382.4), new cjs.Rectangle(-370,-168.1,740,383.2), new cjs.Rectangle(-370,-168.9,740,384), new cjs.Rectangle(-370,-169.7,740,384.7), new cjs.Rectangle(-370,-170.5,740,385.5), new cjs.Rectangle(-370,-171.3,740,386.3), new cjs.Rectangle(-370,-172.1,740,387.1), new cjs.Rectangle(-370,-172.9,740,387.9), new cjs.Rectangle(-370,-172.3,740,387.3), new cjs.Rectangle(-370,-171.7,740,386.8), new cjs.Rectangle(-370,-171.2,740,386.3), new cjs.Rectangle(-370,-170.7,740,385.8), new cjs.Rectangle(-370,-170.2,740,385.3), new cjs.Rectangle(-370,-169.6,740,384.7), new cjs.Rectangle(-370,-169.1,740,384.2), new cjs.Rectangle(-370,-168.6,740,383.6), new cjs.Rectangle(-370,-168.1,740,383.1), new cjs.Rectangle(-370,-167.6,740,382.6), new cjs.Rectangle(-370,-167.1,740,382.1), new cjs.Rectangle(-370,-166.5,740,381.5), new cjs.Rectangle(-370,-166,740,381), new cjs.Rectangle(-370,-165.4,740,380.5), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":139});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_59 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_69 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(71));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-400},0).wait(28).to({y:200},15).to({y:120},10).wait(86));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-130,120);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-400},0).wait(18).to({y:200},15).to({y:120},10).wait(96));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-600},0).wait(58).to({y:0},15).to({y:-70},10).wait(56));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(48).to({y:0},15).to({y:-70},10).wait(66));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,-70);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-600},0).wait(38).to({y:0},15).to({y:-70},10).wait(25).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-695,740,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-695,740,430), new cjs.Rectangle(-370,-695,740,470), new cjs.Rectangle(-370,-695,740,510), new cjs.Rectangle(-370,-695,740,550), new cjs.Rectangle(-370,-695,740,590), new cjs.Rectangle(-370,-695,740,630), new cjs.Rectangle(-370,-695,740,670), new cjs.Rectangle(-370,-695,740,710), new cjs.Rectangle(-370,-695,740,750), new cjs.Rectangle(-370,-695,740,790), new cjs.Rectangle(-370,-695,740,830), new cjs.Rectangle(-370,-695,740,870), new cjs.Rectangle(-370,-695,740,910), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,990), new cjs.Rectangle(-370,-695,740,982), new cjs.Rectangle(-370,-695,740,974), new cjs.Rectangle(-370,-695,740,966), new cjs.Rectangle(-370,-695,740,958), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,942), new cjs.Rectangle(-370,-695,740,934), new cjs.Rectangle(-370,-695,740,926), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,990), new cjs.Rectangle(-370,-695,740,982), new cjs.Rectangle(-370,-695,740,974), new cjs.Rectangle(-370,-695,740,966), new cjs.Rectangle(-370,-695,740,958), new cjs.Rectangle(-370,-695,740,950), new cjs.Rectangle(-370,-695,740,942), new cjs.Rectangle(-370,-695,740,934), new cjs.Rectangle(-370,-695,740,926), new cjs.Rectangle(-370,-695,740,918), rect=new cjs.Rectangle(-370,-695,740,910), rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-655,740,870), new cjs.Rectangle(-370,-615,740,830), new cjs.Rectangle(-370,-575,740,790), new cjs.Rectangle(-370,-535,740,750), new cjs.Rectangle(-370,-495,740,710), new cjs.Rectangle(-370,-455,740,670), new cjs.Rectangle(-370,-415,740,630), new cjs.Rectangle(-370,-375,740,590), new cjs.Rectangle(-370,-335,740,550), new cjs.Rectangle(-370,-295,740,510), new cjs.Rectangle(-370,-255,740,470), new cjs.Rectangle(-370,-215,740,430), new cjs.Rectangle(-370,-175,740,390), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-368,-165,738,380), new cjs.Rectangle(-366,-165,736,380), new cjs.Rectangle(-363.9,-165,734,380), new cjs.Rectangle(-362,-165,732,380), new cjs.Rectangle(-360,-165,730,380), new cjs.Rectangle(-361,-165,731,380), new cjs.Rectangle(-361.9,-165,732,380), new cjs.Rectangle(-363,-165,733,380), new cjs.Rectangle(-363.9,-165,734,380), new cjs.Rectangle(-365,-165,735,380), new cjs.Rectangle(-365.9,-165,736,380), new cjs.Rectangle(-367,-165,737,380), new cjs.Rectangle(-367.9,-165,738,380), new cjs.Rectangle(-369,-165,739,380), rect=new cjs.Rectangle(-370,-165,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.forward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.forward_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.animation_mc = new lib.animation_for_forward_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I1QjrjrAAlKQAAlKDrjqQDqjrFKAAQFKAADrDrQDqDqABFKQgBFKjqDrQjrDqlKABQlKgBjqjqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.countdown_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":139});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("tick_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_54 = function() {
		try
		{
			app.addSoundFunc("tick_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_84 = function() {
		try
		{
			app.addSoundFunc("tick_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_114 = function() {
		try
		{
			app.addSoundFunc("tick_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(30).call(this.frame_54).wait(30).call(this.frame_84).wait(30).call(this.frame_114).wait(26));

	// animation
	this.instance = new lib.countdown_0_3_mc();
	this.instance.setTransform(0,0,0.643,0.643);
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.countdown_0_2_mc();
	this.instance_1.setTransform(0,0,0.643,0.643);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_2 = new lib.countdown_0_1_mc();
	this.instance_2.setTransform(0,0,0.643,0.643);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.instance_3 = new lib.countdown_0_0_mc();
	this.instance_3.setTransform(0,0,0.643,0.643);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({scaleX:1,scaleY:1,alpha:1},9).to({_off:true},21).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9).to({_off:true},21).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9).to({_off:true},21).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.3,-125.3,250.7,250.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-133,-133,266.2,266.2), new cjs.Rectangle(-140.8,-140.8,281.7,281.7), new cjs.Rectangle(-148.5,-148.5,297.2,297.2), new cjs.Rectangle(-156.3,-156.3,312.6,312.6), new cjs.Rectangle(-164,-164,328.1,328.1), new cjs.Rectangle(-171.7,-171.7,343.6,343.6), new cjs.Rectangle(-179.5,-179.5,359.1,359.1), new cjs.Rectangle(-187.2,-187.2,374.5,374.5), rect=new cjs.Rectangle(-195,-195,390,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-125.3,-125.3,250.7,250.7), new cjs.Rectangle(-133,-133,266.2,266.2), new cjs.Rectangle(-140.8,-140.8,281.7,281.7), new cjs.Rectangle(-148.5,-148.5,297.2,297.2), new cjs.Rectangle(-156.3,-156.3,312.6,312.6), new cjs.Rectangle(-164,-164,328.1,328.1), new cjs.Rectangle(-171.7,-171.7,343.6,343.6), new cjs.Rectangle(-179.5,-179.5,359.1,359.1), new cjs.Rectangle(-187.2,-187.2,374.5,374.5), rect=new cjs.Rectangle(-195,-195,390,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-125.3,-125.3,250.7,250.7), new cjs.Rectangle(-133,-133,266.2,266.2), new cjs.Rectangle(-140.8,-140.8,281.7,281.7), new cjs.Rectangle(-148.5,-148.5,297.2,297.2), new cjs.Rectangle(-156.3,-156.3,312.6,312.6), new cjs.Rectangle(-164,-164,328.1,328.1), new cjs.Rectangle(-171.7,-171.7,343.6,343.6), new cjs.Rectangle(-179.5,-179.5,359.1,359.1), new cjs.Rectangle(-187.2,-187.2,374.5,374.5), rect=new cjs.Rectangle(-195,-195,390,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-125.3,-125.3,250.7,250.7), new cjs.Rectangle(-133,-133,266.2,266.2), new cjs.Rectangle(-140.8,-140.8,281.7,281.7), new cjs.Rectangle(-148.5,-148.5,297.2,297.2), new cjs.Rectangle(-156.3,-156.3,312.6,312.6), new cjs.Rectangle(-164,-164,328.1,328.1), new cjs.Rectangle(-171.7,-171.7,343.6,343.6), new cjs.Rectangle(-179.5,-179.5,359.1,359.1), new cjs.Rectangle(-187.2,-187.2,374.5,374.5), rect=new cjs.Rectangle(-195,-195,390,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.comics_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(30).call(this.frame_34).wait(16));

	// animation
	this.instance = new lib.comics_2_4_mc();
	this.instance.setTransform(670,430);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:600,y:380,alpha:1},10).to({x:625,y:390},5).wait(6));

	// animation
	this.instance_1 = new lib.comics_1_4_mc();
	this.instance_1.setTransform(800,0);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({x:-50,alpha:1},10).to({x:0},5).wait(31));

	// animation
	this.instance_2 = new lib.comics_2_3_mc();
	this.instance_2.setTransform(190,445);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// animation
	this.instance_3 = new lib.comics_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1600,600);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(0,0,1515,600), new cjs.Rectangle(0,0,1430,600), new cjs.Rectangle(0,0,1345,600), new cjs.Rectangle(0,0,1260,600), new cjs.Rectangle(0,0,1175,600), new cjs.Rectangle(0,0,1090,600), new cjs.Rectangle(0,0,1005,600), new cjs.Rectangle(0,0,920,600), new cjs.Rectangle(0,0,835,600), new cjs.Rectangle(-50,0,850,600), new cjs.Rectangle(-40,0,840,600), new cjs.Rectangle(-30,0,830,600), new cjs.Rectangle(-20,0,820,600), new cjs.Rectangle(-10,0,810,600), rect=new cjs.Rectangle(0,0,800,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,0,810,600), new cjs.Rectangle(0,0,803,600), rect=new cjs.Rectangle(0,0,800,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.comics_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_64 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(35).call(this.frame_64).wait(16));

	// animation
	this.instance = new lib.comics_2_3_mc();
	this.instance.setTransform(190,500);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({y:410,alpha:1},10).to({y:445},5).wait(6));

	// animation
	this.instance_1 = new lib.comics_1_3_mc();
	this.instance_1.setTransform(800,0);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({x:-50,alpha:1},15).to({x:0},5).wait(31));

	// animation
	this.instance_2 = new lib.comics_2_2_mc();
	this.instance_2.setTransform(545,415);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({alpha:0.012},5).to({_off:true},1).wait(60));

	// animation
	this.instance_3 = new lib.comics_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({x:-800,alpha:0.012},15).to({_off:true},1).wait(50));

	// animation
	this.instance_4 = new lib.comics_2_1_mc();
	this.instance_4.setTransform(177,415);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.012},4).to({_off:true},1).wait(75));

	// animation
	this.instance_5 = new lib.comics_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-800,alpha:0.012},14).to({_off:true},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1600,600);
p.frameBounds = [rect, new cjs.Rectangle(-57.1,0,1657.2,600), new cjs.Rectangle(-114.3,0,1714.3,600), new cjs.Rectangle(-171.4,0,1771.4,600), new cjs.Rectangle(-228.6,0,1828.6,600), new cjs.Rectangle(-285.7,0,1885.7,600), new cjs.Rectangle(-342.8,0,1942.9,600), new cjs.Rectangle(-400,0,2000,600), new cjs.Rectangle(-457.1,0,2057.2,600), new cjs.Rectangle(-514.3,0,2114.3,600), new cjs.Rectangle(-571.4,0,2171.4,600), new cjs.Rectangle(-628.6,0,2228.6,600), new cjs.Rectangle(-685.7,0,2285.7,600), new cjs.Rectangle(-742.8,0,2342.9,600), new cjs.Rectangle(-800,0,2400,600), new cjs.Rectangle(-53.3,0,1653.4,600), new cjs.Rectangle(-106.6,0,1706.7,600), new cjs.Rectangle(-160,0,1760,600), new cjs.Rectangle(-213.3,0,1813.4,600), new cjs.Rectangle(-266.6,0,1866.7,600), new cjs.Rectangle(-320,0,1920,600), new cjs.Rectangle(-373.3,0,1973.4,600), new cjs.Rectangle(-426.6,0,2026.7,600), new cjs.Rectangle(-480,0,2080,600), new cjs.Rectangle(-533.3,0,2133.4,600), new cjs.Rectangle(-586.6,0,2186.7,600), new cjs.Rectangle(-640,0,2240,600), new cjs.Rectangle(-693.3,0,2293.4,600), new cjs.Rectangle(-746.6,0,2346.7,600), new cjs.Rectangle(-800,0,2400,600), new cjs.Rectangle(743.4,0,800,600), new cjs.Rectangle(686.7,0,800,600), new cjs.Rectangle(630,0,800,600), new cjs.Rectangle(573.4,0,800,600), new cjs.Rectangle(516.7,0,800,600), new cjs.Rectangle(460,0,800,600), new cjs.Rectangle(403.4,0,800,600), new cjs.Rectangle(346.7,0,800,600), new cjs.Rectangle(290,0,800,600), new cjs.Rectangle(233.4,0,800,600), new cjs.Rectangle(176.7,0,800,600), new cjs.Rectangle(120,0,800,600), new cjs.Rectangle(63.4,0,800,600), new cjs.Rectangle(6.7,0,800,600), new cjs.Rectangle(-50,0,800,600), new cjs.Rectangle(-40,0,800,600), new cjs.Rectangle(-30,0,800,600), new cjs.Rectangle(-20,0,800,600), new cjs.Rectangle(-10,0,800,600), rect=new cjs.Rectangle(0,0,800,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.comics_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(30).call(this.frame_34).wait(16));

	// animation
	this.instance = new lib.comics_2_2_mc();
	this.instance.setTransform(545,470);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({y:380,alpha:1},10).to({y:415},5).wait(6));

	// animation
	this.instance_1 = new lib.comics_1_2_mc();
	this.instance_1.setTransform(800,0);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({x:-50,alpha:1},10).to({x:0},5).wait(31));

	// animation
	this.instance_2 = new lib.comics_2_1_mc();
	this.instance_2.setTransform(177,415);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// animation
	this.instance_3 = new lib.comics_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1600,600);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(0,0,1515,600), new cjs.Rectangle(0,0,1430,600), new cjs.Rectangle(0,0,1345,600), new cjs.Rectangle(0,0,1260,600), new cjs.Rectangle(0,0,1175,600), new cjs.Rectangle(0,0,1090,600), new cjs.Rectangle(0,0,1005,600), new cjs.Rectangle(0,0,920,600), new cjs.Rectangle(0,0,835,600), new cjs.Rectangle(-50,0,850,600), new cjs.Rectangle(-40,0,840,600), new cjs.Rectangle(-30,0,830,600), new cjs.Rectangle(-20,0,820,600), new cjs.Rectangle(-10,0,810,600), rect=new cjs.Rectangle(0,0,800,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.card_0_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_4_5_mc();

	this.frame_1_mc = new lib.animation_card_2_4_5_mc();

	this.frame_2_mc = new lib.animation_card_3_4_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_0_4_2_mc();

	this.frame_1_mc = new lib.animation_card_2_4_2_mc();

	this.frame_2_mc = new lib.animation_card_3_4_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_3_7_mc();

	this.frame_1_mc = new lib.animation_card_2_3_7_mc();

	this.frame_2_mc = new lib.animation_card_3_3_7_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_0_4_6_mc();

	this.frame_1_mc = new lib.animation_card_2_4_6_mc();

	this.frame_2_mc = new lib.animation_card_3_4_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_3_5_mc();

	this.frame_1_mc = new lib.animation_card_2_3_5_mc();

	this.frame_2_mc = new lib.animation_card_3_3_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_3_4_mc();

	this.frame_1_mc = new lib.animation_card_2_3_4_mc();

	this.frame_2_mc = new lib.animation_card_3_3_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_3_3_mc();

	this.frame_1_mc = new lib.animation_card_2_3_3_mc();

	this.frame_2_mc = new lib.animation_card_3_3_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_0_3_2_mc();

	this.frame_1_mc = new lib.animation_card_2_3_2_mc();

	this.frame_2_mc = new lib.animation_card_3_3_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_2_7_mc();

	this.frame_1_mc = new lib.animation_card_2_2_7_mc();

	this.frame_2_mc = new lib.animation_card_3_2_7_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_0_3_6_mc();

	this.frame_1_mc = new lib.animation_card_2_3_6_mc();

	this.frame_2_mc = new lib.animation_card_3_3_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_2_5_mc();

	this.frame_1_mc = new lib.animation_card_2_2_5_mc();

	this.frame_2_mc = new lib.animation_card_3_2_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_2_4_mc();

	this.frame_1_mc = new lib.animation_card_2_2_4_mc();

	this.frame_2_mc = new lib.animation_card_3_2_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_2_3_mc();

	this.frame_1_mc = new lib.animation_card_2_2_3_mc();

	this.frame_2_mc = new lib.animation_card_3_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_0_2_2_mc();

	this.frame_1_mc = new lib.animation_card_2_2_2_mc();

	this.frame_2_mc = new lib.animation_card_3_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_1_7_mc();

	this.frame_1_mc = new lib.animation_card_2_1_7_mc();

	this.frame_2_mc = new lib.animation_card_3_1_7_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_0_2_6_mc();

	this.frame_1_mc = new lib.animation_card_2_2_6_mc();

	this.frame_2_mc = new lib.animation_card_3_2_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_1_5_mc();

	this.frame_1_mc = new lib.animation_card_2_1_5_mc();

	this.frame_2_mc = new lib.animation_card_3_1_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_1_4_mc();

	this.frame_1_mc = new lib.animation_card_2_1_4_mc();

	this.frame_2_mc = new lib.animation_card_3_1_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_1_1_3_mc();

	this.frame_1_mc = new lib.animation_card_2_1_3_mc();

	this.frame_2_mc = new lib.animation_card_3_1_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_0_1_2_mc();

	this.frame_1_mc = new lib.animation_card_2_1_2_mc();

	this.frame_2_mc = new lib.animation_card_3_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_0_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trio
	this.frame_0_mc = new lib.animation_card_0_1_1_mc();

	this.frame_1_mc = new lib.animation_card_2_1_1_mc();

	this.frame_2_mc = new lib.animation_card_3_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.animation_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":79});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_58 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_68 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(24).call(this.frame_58).wait(10).call(this.frame_68).wait(12));

	// repeat
	this.repeat_btn = new lib.repeat_btn();
	this.repeat_btn.setTransform(470,700);
	new cjs.ButtonHelper(this.repeat_btn, 0, 1, 2, false, new lib.repeat_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.repeat_btn).wait(59).to({scaleX:0.5,scaleY:0.5},0).to({scaleX:1,scaleY:1,y:450},13).to({scaleX:0.88,scaleY:0.88,y:500},7).wait(1));

	// house
	this.house_btn = new lib.house_btn();
	this.house_btn.setTransform(330,700);
	new cjs.ButtonHelper(this.house_btn, 0, 1, 2, false, new lib.house_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.house_btn).wait(49).to({scaleX:0.5,scaleY:0.5},0).to({scaleX:1,scaleY:1,y:450},13).to({scaleX:0.88,scaleY:0.88,y:500},7).wait(11));

	// house_hit
	this.animation_mc = new lib.animation_for_forward_0_mc();
	this.animation_mc.setTransform(330,500);
	this.animation_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(69).to({_off:false},0).wait(11));

	// animation
	this.instance = new lib.title_win_mc();
	this.instance.setTransform(400.5,800.5,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:200.5},13).to({y:280.5,alpha:1},7).wait(31));

	// animation
	this.instance_1 = new lib.semitransparent_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({alpha:1},13).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(200,620,400,330);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,960), new cjs.Rectangle(-410,-10,1620,913.9), new cjs.Rectangle(-410,-10,1620,867.7), new cjs.Rectangle(-410,-10,1620,821.6), rect=new cjs.Rectangle(-410,-10,1620,790), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,750), new cjs.Rectangle(-410,-10,1620,733.9), new cjs.Rectangle(-410,-10,1620,717.7), new cjs.Rectangle(-410,-10,1620,701.6), new cjs.Rectangle(-410,-10,1620,685.4), new cjs.Rectangle(-410,-10,1620,669.3), new cjs.Rectangle(-410,-10,1620,653.1), new cjs.Rectangle(-410,-10,1620,637), new cjs.Rectangle(-410,-10,1620,620.8), rect=new cjs.Rectangle(-410,-10,1620,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_start_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":59});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_48 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(29).call(this.frame_48).wait(12));

	// animation
	this.instance = new lib.forward_mc();
	this.instance.setTransform(400,700);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:450},13).to({y:500},7).wait(1));

	// animation
	this.instance_1 = new lib.title_start_mc();
	this.instance_1.setTransform(400.5,800.5,1,1,0,0,0,0.5,0.5);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({scaleX:0.77,scaleY:0.77,x:400.4,y:800.4},0).to({regX:0.6,regY:0.6,scaleX:0.92,scaleY:0.92,x:400.6,y:200.6,alpha:1},13).to({regX:0.5,regY:0.5,scaleX:1,scaleY:1,x:400.5,y:280.5},7).wait(21));

	// animation
	this.instance_2 = new lib.semitransparent_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,960.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,925.8), new cjs.Rectangle(-410,-10,1620,881.3), new cjs.Rectangle(-410,-10,1620,836.9), new cjs.Rectangle(-410,-10,1620,792.5), new cjs.Rectangle(-410,-10,1620,748), new cjs.Rectangle(-410,-10,1620,703.6), new cjs.Rectangle(-410,-10,1620,659.2), rect=new cjs.Rectangle(-410,-10,1620,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,790), new cjs.Rectangle(-410,-10,1620,770.8), new cjs.Rectangle(-410,-10,1620,751.6), new cjs.Rectangle(-410,-10,1620,732.3), new cjs.Rectangle(-410,-10,1620,713.1), new cjs.Rectangle(-410,-10,1620,693.9), new cjs.Rectangle(-410,-10,1620,674.6), new cjs.Rectangle(-410,-10,1620,655.4), new cjs.Rectangle(-410,-10,1620,636.2), rect=new cjs.Rectangle(-410,-10,1620,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_gribovik_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_69 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.3);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_239 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(50).call(this.frame_69).wait(170).call(this.frame_239).wait(1));

	// animation
	this.instance = new lib.title_greet_mc();
	this.instance.setTransform(-120,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-420},0).wait(58).to({y:-200},15).to({y:-280},10).to({y:-250},5).wait(130).to({y:-220},5).to({y:-420},10).wait(6));

	// animation
	this.instance_1 = new lib.gribovik_win_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:600},0).wait(18).to({y:-50},15).to({y:50},10).to({y:0},5).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-330,660,640);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-500,660,1410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-500,660,1366.7), new cjs.Rectangle(-380,-500,660,1323.4), new cjs.Rectangle(-380,-500,660,1280), new cjs.Rectangle(-380,-500,660,1236.7), new cjs.Rectangle(-380,-500,660,1193.4), new cjs.Rectangle(-380,-500,660,1150), new cjs.Rectangle(-380,-500,660,1106.7), new cjs.Rectangle(-380,-500,660,1063.4), new cjs.Rectangle(-380,-500,660,1020), new cjs.Rectangle(-380,-500,660,976.7), new cjs.Rectangle(-380,-500,660,933.4), new cjs.Rectangle(-380,-500,660,890), new cjs.Rectangle(-380,-500,660,846.7), new cjs.Rectangle(-380,-500,660,803.4), new cjs.Rectangle(-380,-500,660,760), new cjs.Rectangle(-380,-500,660,770), new cjs.Rectangle(-380,-500,660,780), new cjs.Rectangle(-380,-500,660,790), new cjs.Rectangle(-380,-500,660,800), new cjs.Rectangle(-380,-500,660,810), new cjs.Rectangle(-380,-500,660,820), new cjs.Rectangle(-380,-500,660,830), new cjs.Rectangle(-380,-500,660,840), new cjs.Rectangle(-380,-500,660,850), new cjs.Rectangle(-380,-500,660,860), new cjs.Rectangle(-380,-500,660,850), new cjs.Rectangle(-380,-500,660,840), new cjs.Rectangle(-380,-500,660,830), new cjs.Rectangle(-380,-500,660,820), rect=new cjs.Rectangle(-380,-500,660,810), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-485.3,660,795.4), new cjs.Rectangle(-380,-470.6,660,780.7), new cjs.Rectangle(-380,-456,660,766), new cjs.Rectangle(-380,-441.3,660,751.4), new cjs.Rectangle(-380,-426.6,660,736.7), new cjs.Rectangle(-380,-412,660,722), new cjs.Rectangle(-380,-397.3,660,707.4), new cjs.Rectangle(-380,-382.6,660,692.7), new cjs.Rectangle(-380,-368,660,678), new cjs.Rectangle(-380,-353.3,660,663.4), new cjs.Rectangle(-380,-338.6,660,648.7), new cjs.Rectangle(-380,-324,660,634), rect=new cjs.Rectangle(-380,-310,660,620), rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-312,660,622), new cjs.Rectangle(-380,-320,660,630), new cjs.Rectangle(-380,-328,660,638), new cjs.Rectangle(-380,-336,660,646), new cjs.Rectangle(-380,-344,660,654), new cjs.Rectangle(-380,-352,660,662), new cjs.Rectangle(-380,-360,660,670), new cjs.Rectangle(-380,-354,660,664), new cjs.Rectangle(-380,-348,660,658), new cjs.Rectangle(-380,-342,660,652), new cjs.Rectangle(-380,-336,660,646), rect=new cjs.Rectangle(-380,-330,660,640), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-324,660,634), new cjs.Rectangle(-380,-318,660,628), new cjs.Rectangle(-380,-312,660,622), rect=new cjs.Rectangle(-380,-310,660,620), rect, new cjs.Rectangle(-380,-320,660,630), new cjs.Rectangle(-380,-340,660,650), new cjs.Rectangle(-380,-360,660,670), new cjs.Rectangle(-380,-380,660,690), new cjs.Rectangle(-380,-400,660,710), new cjs.Rectangle(-380,-420,660,730), new cjs.Rectangle(-380,-440,660,750), new cjs.Rectangle(-380,-460,660,770), new cjs.Rectangle(-380,-480,660,790), rect=new cjs.Rectangle(-380,-500,660,810), rect, rect, rect, rect, rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect];


(lib.CopyrightScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.copyright_2_mc();
	this.screen_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// bg
	this.instance = new lib.copyright_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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
				particle_mc.life = Math.random() * (1 - 0.5) + 0.5;
				particle_mc.alpha = Math.random() * (1 - 0.4) + 0.6;
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
			target_mc.life -= target_mc.fadeSpeed_num;
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
			if (target_mc.life <= 0 ||	target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
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
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.FlashParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.flash_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.flash_gravity_explosion_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.FlashParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


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
	this.instance.setTransform(0,0,0.947,0.947);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


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


(lib.RedirectScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.redirect_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,610);
p.frameBounds = [rect];


(lib.PreloaderScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_mc = new lib.preloader_2_mc();
	this.logo_mc.setTransform(400,240);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// play
	this.play_mc = new lib.preloader_9_mc();
	this.play_mc.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.preloader_6_mc();
	this.indicator_mc.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.bg_mc = new lib.preloader_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.PauseAppScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.pause_app_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.LanguagesScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.languages_1_btn();
	this.remove_btn.setTransform(680,520);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.languages_1_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// screen
	this.screen_mc = new lib.languages_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// reserve
	this.pt = new lib.language_pt_mc();
	this.pt.setTransform(400,1250);

	this.es = new lib.language_es_mc();
	this.es.setTransform(200,1250);

	this.tr = new lib.language_tr_mc();
	this.tr.setTransform(600,1250);

	this.ja = new lib.language_ja_mc();
	this.ja.setTransform(600,1100);

	this.zh = new lib.language_zh_mc();
	this.zh.setTransform(200,950);

	this.it = new lib.language_it_mc();
	this.it.setTransform(400,1100);

	this.id = new lib.language_id_mc();
	this.id.setTransform(200,1100);

	this.hi = new lib.language_hi_mc();
	this.hi.setTransform(600,950);

	this.fr = new lib.language_fr_mc();
	this.fr.setTransform(400,950);

	this.de = new lib.language_de_mc();
	this.de.setTransform(500,800);

	this.ar = new lib.language_ar_mc();
	this.ar.setTransform(300,800);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ar},{t:this.de},{t:this.fr},{t:this.hi},{t:this.id},{t:this.it},{t:this.zh},{t:this.ja},{t:this.tr},{t:this.es},{t:this.pt}]}).wait(1));

	// bg
	this.instance = new lib.languages_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,1315);
p.frameBounds = [rect];


(lib.popup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0,countdown:1,loss:2,win:3});

	// graph
	this.start_mc = new lib.animation_start_mc();

	this.countdown_mc = new lib.countdown_mc();
	this.countdown_mc.setTransform(400,300);

	this.loss_mc = new lib.animation_loss_mc();

	this.win_mc = new lib.animation_win_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start_mc}]}).to({state:[{t:this.countdown_mc}]},1).to({state:[{t:this.loss_mc}]},1).to({state:[{t:this.win_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,960.5);
p.frameBounds = [rect, new cjs.Rectangle(274.7,174.7,250.7,250.7), new cjs.Rectangle(200,-350,400.5,300.5), new cjs.Rectangle(200,620,400,330)];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5,location_7:6,location_8:7,location_9:8,location_10:9,location_11:10,location_12:11,location_13:12,location_14:13,location_15:14,location_16:15,location_17:16});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.frame_6_mc = new lib.frame_locations_6_mc();

	this.frame_7_mc = new lib.frame_locations_7_mc();

	this.frame_8_mc = new lib.frame_locations_8_mc();

	this.frame_9_mc = new lib.frame_locations_9_mc();

	this.frame_10_mc = new lib.frame_locations_10_mc();

	this.frame_11_mc = new lib.frame_locations_11_mc();

	this.frame_12_mc = new lib.frame_locations_12_mc();

	this.frame_13_mc = new lib.frame_locations_13_mc();

	this.frame_14_mc = new lib.frame_locations_14_mc();

	this.frame_15_mc = new lib.frame_locations_15_mc();

	this.frame_16_mc = new lib.frame_locations_16_mc();

	this.frame_17_mc = new lib.frame_locations_17_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.frame_8_mc}]},1).to({state:[{t:this.frame_9_mc}]},1).to({state:[{t:this.frame_10_mc}]},1).to({state:[{t:this.frame_11_mc}]},1).to({state:[{t:this.frame_12_mc}]},1).to({state:[{t:this.frame_13_mc}]},1).to({state:[{t:this.frame_14_mc}]},1).to({state:[{t:this.frame_15_mc}]},1).to({state:[{t:this.frame_16_mc}]},1).to({state:[{t:this.frame_17_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-165,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.comics_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_1_mc = new lib.comics_1_mc();

	this.frame_2_mc = new lib.comics_2_mc();

	this.frame_3_mc = new lib.comics_3_mc();

	this.frame_4_mc = new lib.comics_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(0,0,1600,600), rect, rect];


(lib.CartoonScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.forward_mc();
	this.next_mc.setTransform(725,530,0.813,0.813);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.comics_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_0_mc = new lib.card_0_1_7_mc();

	this.frame_1_mc = new lib.card_0_2_7_mc();

	this.frame_2_mc = new lib.card_0_3_7_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_0_mc = new lib.card_0_1_5_mc();

	this.frame_1_mc = new lib.card_0_2_5_mc();

	this.frame_2_mc = new lib.card_0_3_5_mc();

	this.frame_3_mc = new lib.card_0_4_5_mc();

	this.frame_4_mc = new lib.card_0_1_6_mc();

	this.frame_5_mc = new lib.card_0_2_6_mc();

	this.frame_6_mc = new lib.card_0_3_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.card_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_0_mc = new lib.card_0_1_5_mc();

	this.frame_1_mc = new lib.card_0_2_5_mc();

	this.frame_2_mc = new lib.card_0_3_5_mc();

	this.frame_3_mc = new lib.card_0_4_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect];


(lib.card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_0_mc = new lib.card_0_1_4_mc();

	this.frame_1_mc = new lib.card_0_2_4_mc();

	this.frame_2_mc = new lib.card_0_3_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_0_mc = new lib.card_0_1_3_mc();

	this.frame_1_mc = new lib.card_0_2_3_mc();

	this.frame_2_mc = new lib.card_0_3_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect];


(lib.card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_0_mc = new lib.card_0_1_2_mc();

	this.frame_1_mc = new lib.card_0_2_2_mc();

	this.frame_2_mc = new lib.card_0_3_2_mc();

	this.frame_3_mc = new lib.card_0_4_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect];


(lib.card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_0_mc = new lib.card_0_1_1_mc();

	this.frame_1_mc = new lib.animation_card_0_2_1_mc();

	this.frame_2_mc = new lib.animation_card_0_3_1_mc();

	this.frame_3_mc = new lib.animation_card_0_4_1_mc();

	this.frame_4_mc = new lib.animation_card_0_5_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-160,210,320);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.FlashGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2019 edapskov v 1.1
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
		var _particleTotal_num = 12;
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
				var particle_mc = new lib.FlashParticleGravityExplosionMC();
				body_mc.addChild(particle_mc);
				particle_mc.gotoAndStop(0);
				particle_mc.gotoAndStop(Math.floor(Math.random() * particle_mc.totalFrames));
				particle_mc.x = 0;
				particle_mc.y = 0;
				particle_mc.rotation = Math.random() * 360;
				particle_mc.life = Math.random() * (1 - 0.5) + 0.5;
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
			target_mc.life -= target_mc.fadeSpeed_num;
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
			if (target_mc.life <= 0 ||	target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
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
	this.body_mc = new lib.flash_gravity_explosion_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.flash_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
		this.parent.parent.removeChild(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// gravity_explosion
	this.gravity_explosion_comp = new lib.FlashGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.gravity_explosion_comp).wait(60));

	// animation
	this.instance = new lib.flash_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:1},0).to({scaleX:1,scaleY:1,alpha:0.012},13).to({_off:true},1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-43,-43,86.2,86.2), new cjs.Rectangle(-46.1,-46.1,92.3,92.3), new cjs.Rectangle(-49.2,-49.2,98.5,98.5), new cjs.Rectangle(-52.3,-52.3,104.6,104.6), new cjs.Rectangle(-55.3,-55.3,110.8,110.8), new cjs.Rectangle(-58.4,-58.4,116.9,116.9), new cjs.Rectangle(-61.5,-61.5,123.1,123.1), new cjs.Rectangle(-64.6,-64.6,129.3,129.3), new cjs.Rectangle(-67.6,-67.6,135.4,135.4), new cjs.Rectangle(-70.7,-70.7,141.6,141.6), new cjs.Rectangle(-73.8,-73.8,147.7,147.7), new cjs.Rectangle(-76.9,-76.9,153.9,153.9), new cjs.Rectangle(-80,-80,160,160), rect=new cjs.Rectangle(-12,-12,24,24), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect];


(lib.cards_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_7_mc();
	this.instance.setTransform(530.1,485.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_7_mc();
	this.instance_1.setTransform(400.1,485.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_7_mc();
	this.instance_2.setTransform(270.1,485.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_7_mc();
	this.instance_3.setTransform(530.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_7_mc();
	this.instance_4.setTransform(400.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_7_mc();
	this.instance_5.setTransform(270.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_6 = new lib.card_7_mc();
	this.instance_6.setTransform(530.1,115.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_7 = new lib.card_7_mc();
	this.instance_7.setTransform(400.1,115.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_8 = new lib.card_7_mc();
	this.instance_8.setTransform(270.1,115.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(210,23.6,380,552.9);
p.frameBounds = [rect];


(lib.cards_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_6_mc();
	this.instance.setTransform(675.1,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_1 = new lib.card_6_mc();
	this.instance_1.setTransform(565.1,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_2 = new lib.card_6_mc();
	this.instance_2.setTransform(455.1,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_3 = new lib.card_6_mc();
	this.instance_3.setTransform(345.1,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_4 = new lib.card_6_mc();
	this.instance_4.setTransform(235.1,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_5 = new lib.card_6_mc();
	this.instance_5.setTransform(125.1,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_6 = new lib.card_6_mc();
	this.instance_6.setTransform(675.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_7 = new lib.card_6_mc();
	this.instance_7.setTransform(565.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_8 = new lib.card_6_mc();
	this.instance_8.setTransform(455.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_9 = new lib.card_6_mc();
	this.instance_9.setTransform(345.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_10 = new lib.card_6_mc();
	this.instance_10.setTransform(235.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_11 = new lib.card_6_mc();
	this.instance_11.setTransform(125.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_12 = new lib.card_6_mc();
	this.instance_12.setTransform(510.1,125.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_13 = new lib.card_6_mc();
	this.instance_13.setTransform(400.1,125.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_14 = new lib.card_6_mc();
	this.instance_14.setTransform(290.1,125.1,0.476,0.476,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,48.9,650,472.3);
p.frameBounds = [rect];


(lib.cards_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_5_mc();
	this.instance.setTransform(520.1,473.1,0.524,0.524,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_5_mc();
	this.instance_1.setTransform(400.1,473.1,0.524,0.524,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_5_mc();
	this.instance_2.setTransform(280.1,473.1,0.524,0.524,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_5_mc();
	this.instance_3.setTransform(520.1,127.1,0.524,0.524,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_5_mc();
	this.instance_4.setTransform(400.1,127.1,0.524,0.524,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_5_mc();
	this.instance_5.setTransform(280.1,127.1,0.524,0.524,0,0,0,0.1,0.1);

	this.instance_6 = new lib.card_5_mc();
	this.instance_6.setTransform(700.1,300.1,0.524,0.524,0,0,0,0.1,0.1);

	this.instance_7 = new lib.card_5_mc();
	this.instance_7.setTransform(580.1,300.1,0.524,0.524,0,0,0,0.1,0.1);

	this.instance_8 = new lib.card_5_mc();
	this.instance_8.setTransform(460.1,300.1,0.524,0.524,0,0,0,0.1,0.1);

	this.instance_9 = new lib.card_5_mc();
	this.instance_9.setTransform(340.1,300.1,0.524,0.524,0,0,0,0.1,0.1);

	this.instance_10 = new lib.card_5_mc();
	this.instance_10.setTransform(220.1,300.1,0.524,0.524,0,0,0,0.1,0.1);

	this.instance_11 = new lib.card_5_mc();
	this.instance_11.setTransform(100.1,300.1,0.524,0.524,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(45,43.2,710,513.6);
p.frameBounds = [rect];


(lib.cards_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_5_mc();
	this.instance.setTransform(530.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_5_mc();
	this.instance_1.setTransform(400.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_5_mc();
	this.instance_2.setTransform(270.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_5_mc();
	this.instance_3.setTransform(530.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_5_mc();
	this.instance_4.setTransform(400.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_5_mc();
	this.instance_5.setTransform(270.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_6 = new lib.card_5_mc();
	this.instance_6.setTransform(530.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_7 = new lib.card_5_mc();
	this.instance_7.setTransform(400.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_8 = new lib.card_5_mc();
	this.instance_8.setTransform(270.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(210,18.6,380,562.9);
p.frameBounds = [rect];


(lib.cards_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_5_mc();
	this.instance.setTransform(530.1,390.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_5_mc();
	this.instance_1.setTransform(400.1,390.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_5_mc();
	this.instance_2.setTransform(270.1,390.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_5_mc();
	this.instance_3.setTransform(530.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_5_mc();
	this.instance_4.setTransform(400.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_5_mc();
	this.instance_5.setTransform(270.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(210,108.6,380,372.9);
p.frameBounds = [rect];


(lib.cards_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_2_mc();
	this.instance.setTransform(595.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_2_mc();
	this.instance_1.setTransform(465.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_2_mc();
	this.instance_2.setTransform(660.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_2_mc();
	this.instance_3.setTransform(335.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_2_mc();
	this.instance_4.setTransform(205.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_2_mc();
	this.instance_5.setTransform(530.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_6 = new lib.card_2_mc();
	this.instance_6.setTransform(400.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_7 = new lib.card_2_mc();
	this.instance_7.setTransform(270.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_8 = new lib.card_2_mc();
	this.instance_8.setTransform(140.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_9 = new lib.card_2_mc();
	this.instance_9.setTransform(530.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_10 = new lib.card_2_mc();
	this.instance_10.setTransform(400.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_11 = new lib.card_2_mc();
	this.instance_11.setTransform(270.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,18.6,640,562.9);
p.frameBounds = [rect];


(lib.cards_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_4_mc();
	this.instance.setTransform(595.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_4_mc();
	this.instance_1.setTransform(465.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_4_mc();
	this.instance_2.setTransform(335.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_4_mc();
	this.instance_3.setTransform(465.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_4_mc();
	this.instance_4.setTransform(335.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_4_mc();
	this.instance_5.setTransform(205.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_6 = new lib.card_4_mc();
	this.instance_6.setTransform(595.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_7 = new lib.card_4_mc();
	this.instance_7.setTransform(465.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_8 = new lib.card_4_mc();
	this.instance_8.setTransform(335.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(145,18.6,510,562.9);
p.frameBounds = [rect];


(lib.cards_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_3_mc();
	this.instance.setTransform(465.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_3_mc();
	this.instance_1.setTransform(335.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_3_mc();
	this.instance_2.setTransform(465.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_3_mc();
	this.instance_3.setTransform(335.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_3_mc();
	this.instance_4.setTransform(660.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_3_mc();
	this.instance_5.setTransform(530.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_6 = new lib.card_3_mc();
	this.instance_6.setTransform(400.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_7 = new lib.card_3_mc();
	this.instance_7.setTransform(140.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_8 = new lib.card_3_mc();
	this.instance_8.setTransform(270.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,18.6,640,562.9);
p.frameBounds = [rect];


(lib.cards_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_2_mc();
	this.instance.setTransform(530.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_2_mc();
	this.instance_1.setTransform(400.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_2_mc();
	this.instance_2.setTransform(270.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_2_mc();
	this.instance_3.setTransform(530.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_2_mc();
	this.instance_4.setTransform(400.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_2_mc();
	this.instance_5.setTransform(270.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_6 = new lib.card_2_mc();
	this.instance_6.setTransform(530.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_7 = new lib.card_2_mc();
	this.instance_7.setTransform(400.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_8 = new lib.card_2_mc();
	this.instance_8.setTransform(270.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(210,18.6,380,562.9);
p.frameBounds = [rect];


(lib.cards_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_4_mc();
	this.instance.setTransform(530.1,390.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_4_mc();
	this.instance_1.setTransform(400.1,390.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_4_mc();
	this.instance_2.setTransform(270.1,390.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_4_mc();
	this.instance_3.setTransform(530.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_4_mc();
	this.instance_4.setTransform(400.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_4_mc();
	this.instance_5.setTransform(270.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(210,108.6,380,372.9);
p.frameBounds = [rect];


(lib.cards_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_3_mc();
	this.instance.setTransform(540.1,395.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_3_mc();
	this.instance_1.setTransform(400.1,395.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_3_mc();
	this.instance_2.setTransform(260.1,395.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_3_mc();
	this.instance_3.setTransform(540.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_3_mc();
	this.instance_4.setTransform(260.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_3_mc();
	this.instance_5.setTransform(400.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(200,108.6,400,377.9);
p.frameBounds = [rect];


(lib.cards_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_2_mc();
	this.instance.setTransform(540.1,395.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_2_mc();
	this.instance_1.setTransform(400.1,395.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_2_mc();
	this.instance_2.setTransform(260.1,395.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_2_mc();
	this.instance_3.setTransform(540.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_2_mc();
	this.instance_4.setTransform(400.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_2_mc();
	this.instance_5.setTransform(260.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(200,108.6,400,377.9);
p.frameBounds = [rect];


(lib.cards_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_1_mc();
	this.instance.setTransform(675.1,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_1 = new lib.card_1_mc();
	this.instance_1.setTransform(565.1,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_2 = new lib.card_1_mc();
	this.instance_2.setTransform(454.6,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_3 = new lib.card_1_mc();
	this.instance_3.setTransform(345.1,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_4 = new lib.card_1_mc();
	this.instance_4.setTransform(235.1,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_5 = new lib.card_1_mc();
	this.instance_5.setTransform(125.1,445.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_6 = new lib.card_1_mc();
	this.instance_6.setTransform(675.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_7 = new lib.card_1_mc();
	this.instance_7.setTransform(565.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_8 = new lib.card_1_mc();
	this.instance_8.setTransform(455.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_9 = new lib.card_1_mc();
	this.instance_9.setTransform(345.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_10 = new lib.card_1_mc();
	this.instance_10.setTransform(235.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_11 = new lib.card_1_mc();
	this.instance_11.setTransform(125.1,285.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_12 = new lib.card_1_mc();
	this.instance_12.setTransform(510.1,125.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_13 = new lib.card_1_mc();
	this.instance_13.setTransform(400.1,125.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_14 = new lib.card_1_mc();
	this.instance_14.setTransform(290.1,125.1,0.476,0.476,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,48.8,650,472.4);
p.frameBounds = [rect];


(lib.cards_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_1_mc();
	this.instance.setTransform(675.1,375.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_1 = new lib.card_1_mc();
	this.instance_1.setTransform(565.1,375.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_2 = new lib.card_1_mc();
	this.instance_2.setTransform(455.1,375.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_3 = new lib.card_1_mc();
	this.instance_3.setTransform(345.1,375.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_4 = new lib.card_1_mc();
	this.instance_4.setTransform(235.1,375.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_5 = new lib.card_1_mc();
	this.instance_5.setTransform(120.1,375.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_6 = new lib.card_1_mc();
	this.instance_6.setTransform(675.1,215.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_7 = new lib.card_1_mc();
	this.instance_7.setTransform(565.1,215.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_8 = new lib.card_1_mc();
	this.instance_8.setTransform(455.1,215.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_9 = new lib.card_1_mc();
	this.instance_9.setTransform(345.1,215.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_10 = new lib.card_1_mc();
	this.instance_10.setTransform(235.1,215.1,0.476,0.476,0,0,0,0.2,0.1);

	this.instance_11 = new lib.card_1_mc();
	this.instance_11.setTransform(120.1,215.1,0.476,0.476,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,138.8,655,312.4);
p.frameBounds = [rect];


(lib.cards_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_1_mc();
	this.instance.setTransform(530.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_1_mc();
	this.instance_1.setTransform(400.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_1_mc();
	this.instance_2.setTransform(270.1,490.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_1_mc();
	this.instance_3.setTransform(530.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_1_mc();
	this.instance_4.setTransform(400.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_1_mc();
	this.instance_5.setTransform(270.1,300.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_6 = new lib.card_1_mc();
	this.instance_6.setTransform(530.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_7 = new lib.card_1_mc();
	this.instance_7.setTransform(400.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_8 = new lib.card_1_mc();
	this.instance_8.setTransform(270.1,110.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(210,18.6,380,562.9);
p.frameBounds = [rect];


(lib.cards_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_1_mc();
	this.instance.setTransform(540.1,395.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_1 = new lib.card_1_mc();
	this.instance_1.setTransform(400.1,395.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_2 = new lib.card_1_mc();
	this.instance_2.setTransform(260.1,395.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_3 = new lib.card_1_mc();
	this.instance_3.setTransform(540.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_4 = new lib.card_1_mc();
	this.instance_4.setTransform(400.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.instance_5 = new lib.card_1_mc();
	this.instance_5.setTransform(260.1,200.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(200,108.6,400,377.9);
p.frameBounds = [rect];


(lib.cards_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_1_mc();
	this.instance.setTransform(580,300,0.762,0.762);

	this.instance_1 = new lib.card_1_mc();
	this.instance_1.setTransform(400,300,0.762,0.762);

	this.instance_2 = new lib.card_1_mc();
	this.instance_2.setTransform(220,300,0.762,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(140,178.1,520,243.8);
p.frameBounds = [rect];


(lib.FlashAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		@author edapskov
		@copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.instance = new lib.flash_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,665);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":149});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_104 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.05);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(30).call(this.frame_49).wait(55).call(this.frame_104).wait(46));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,700,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(68).to({y:460},15).to({y:510},10).wait(6).to({scaleX:0.74,scaleY:0.74},5).to({scaleX:0.9,scaleY:0.9},10).to({y:460},5).to({scaleX:0.53,scaleY:0.53,y:660},10).wait(21));

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1050.5,0.75,0.75,0,0,0,0.7,0.7);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(590,540,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).wait(150));

	// decor
	this.instance = new lib.animation_grass_1_mc();
	this.instance.setTransform(240,620);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// title
	this.instance_1 = new lib.title_mc();
	this.instance_1.setTransform(240,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({y:340},15).to({y:200},10).to({y:240},5).wait(71));

	// decor
	this.instance_2 = new lib.lower_shadow_mc();
	this.instance_2.setTransform(0,400);
	this.instance_2.alpha = 0.398;
	this.instance_2.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	// decor
	this.instance_3 = new lib.basket_1_mc();
	this.instance_3.setTransform(450,750);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({y:580},15).to({y:520},5).wait(81));

	// hero
	this.instance_4 = new lib.gribovik_mc();
	this.instance_4.setTransform(590,950);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({y:300},15).to({y:360},10).to({y:330},5).wait(101));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(150));

	// bg
	this.instance_5 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-470,1600,1730);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-470,1600,1686.7), new cjs.Rectangle(-400,-470,1600,1643.4), new cjs.Rectangle(-400,-470,1600,1600), rect=new cjs.Rectangle(-400,-470,1600,1565), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-430.6,1600,1525.7), new cjs.Rectangle(-400,-391.3,1600,1486.4), new cjs.Rectangle(-400,-352,1600,1447), new cjs.Rectangle(-400,-312.6,1600,1407.7), new cjs.Rectangle(-400,-273.3,1600,1368.4), new cjs.Rectangle(-400,-234,1600,1329), new cjs.Rectangle(-400,-280.8,1600,1375.9), new cjs.Rectangle(-400,-155.3,1600,1250.4), new cjs.Rectangle(-400,-116,1600,1211), new cjs.Rectangle(-400,-90,1600,1185), new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), new cjs.Rectangle(-400,-90,1600,1185)];


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
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(750.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(210,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(90,510,0.895,0.895);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.freeGames_mc},{t:this.social_network_mc}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.398;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.animation_grass_2_mc();
	this.instance_1.setTransform(750,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero
	this.instance_2 = new lib.animation_gribovik_win_mc();
	this.instance_2.setTransform(400,320);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1065);
p.frameBounds = [rect];


(lib.LocationScreen_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_17_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_16_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_15_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_14_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_12_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(730,540);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(170,40);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_0_1_mc();
	this.indicator_mc.setTransform(70,70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// cards
	this.cards_mc = new lib.cards_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.storage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// storage
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 74;
	this.text.lineWidth = 253;
	this.text.setTransform(128.5,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.LanguagesScreen();

	this.instance_3 = new lib.WelcomeScreen();

	this.instance_4 = new lib.CartoonScreen();

	this.instance_5 = new lib.SelectionScreen();

	this.instance_6 = new lib.LocationScreen_1();

	this.instance_7 = new lib.LocationScreen_2();

	this.instance_8 = new lib.LocationScreen_3();

	this.instance_9 = new lib.LocationScreen_4();

	this.instance_10 = new lib.LocationScreen_5();

	this.instance_11 = new lib.LocationScreen_6();

	this.instance_12 = new lib.LocationScreen_7();

	this.instance_13 = new lib.LocationScreen_8();

	this.instance_14 = new lib.LocationScreen_9();

	this.instance_15 = new lib.LocationScreen_10();

	this.instance_16 = new lib.LocationScreen_11();

	this.instance_17 = new lib.LocationScreen_12();

	this.instance_18 = new lib.LocationScreen_13();

	this.instance_19 = new lib.LocationScreen_14();

	this.instance_20 = new lib.LocationScreen_15();

	this.instance_21 = new lib.LocationScreen_16();

	this.instance_22 = new lib.LocationScreen_17();

	this.instance_23 = new lib.RedirectScreen();

	this.instance_24 = new lib.ResultScreen();

	this.instance_25 = new lib.InstructionScreen();

	this.instance_26 = new lib.forward_mc();
	this.instance_26.setTransform(600,250);

	this.instance_27 = new lib.FlashAnimation();
	this.instance_27.setTransform(150,250);

	this.instance_28 = new lib.Cursor();
	this.instance_28.setTransform(200,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(280,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_29 = new lib.PauseAppScreen();

	this.instance_30 = new lib.OrientationLockScreen();

	this.instance_31 = new lib.CurtainScreen();

	this.instance_32 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.gravity_explosion_comp},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[]},1).to({state:[{t:this.instance_32}]},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,0,1600,1315), new cjs.Rectangle(-400,-470,1600,1730), rect=new cjs.Rectangle(-400,-280.8,1600,1261.9), rect, rect=new cjs.Rectangle(-410,-280.8,1620,1261.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1065), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(10,15,670,315), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


// stage content:
(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// storage
	this.instance = new lib.storage_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,257,75.5);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;