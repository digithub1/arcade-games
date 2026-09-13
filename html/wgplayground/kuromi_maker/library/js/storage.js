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
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_7", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_8", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_9", frames: [[0,602,800,330],[0,0,600,600],[602,0,600,600],[0,934,1200,200]]},
		{name:"storage_atlas_10", frames: [[824,0,360,460],[0,874,422,392],[0,0,440,520],[442,0,380,590],[424,874,400,400],[0,592,640,280],[642,592,640,280]]},
		{name:"storage_atlas_11", frames: [[0,0,500,300],[0,302,451,328],[456,382,380,322],[838,382,380,322],[0,957,380,322],[456,706,380,322],[838,706,380,322],[0,632,454,323],[502,0,380,380],[884,0,380,380]]},
		{name:"storage_atlas_12", frames: [[588,620,300,300],[286,648,300,300],[990,0,279,359],[668,0,320,320],[890,361,327,268],[286,950,300,300],[588,922,300,300],[0,324,380,322],[382,0,284,389],[382,391,412,227],[0,0,380,322],[0,648,284,389],[890,631,380,220],[890,1075,380,220],[890,853,380,220]]},
		{name:"storage_atlas_13", frames: [[1126,412,160,252],[764,978,281,170],[256,1110,261,146],[1047,968,237,155],[764,0,348,214],[764,216,376,194],[764,412,278,200],[986,756,200,210],[0,1110,254,158],[764,614,360,140],[764,756,220,220],[382,0,380,220],[382,222,380,220],[0,444,380,220],[0,888,380,220],[0,666,380,220],[382,444,380,220],[0,222,380,220],[820,1150,280,130],[382,666,380,220],[0,0,380,220],[382,888,380,220],[519,1150,299,124]]},
		{name:"storage_atlas_14", frames: [[0,0,190,190],[192,0,190,190],[598,888,150,150],[260,615,285,103],[0,603,258,115],[828,688,244,118],[648,724,165,162],[547,617,279,105],[783,493,259,122],[207,720,252,109],[384,0,190,190],[0,720,205,135],[830,338,214,153],[1046,382,213,143],[378,339,214,150],[461,724,185,147],[362,192,248,145],[1074,688,185,152],[1011,842,201,123],[830,192,244,144],[207,831,199,125],[815,808,194,129],[612,192,216,166],[408,873,188,127],[196,339,180,180],[750,939,150,150],[152,1110,150,150],[493,1040,150,150],[1054,967,150,150],[189,958,150,150],[0,991,150,150],[341,1002,150,150],[902,967,150,150],[645,1091,150,150],[797,1119,150,150],[1101,1119,150,150],[0,1143,150,150],[949,1119,150,150],[576,0,190,190],[0,192,360,100],[1076,192,186,188],[0,294,194,178],[594,360,187,171],[0,857,187,132],[1044,527,186,159],[768,0,190,190],[960,0,190,190],[0,521,371,80],[373,533,371,80]]},
		{name:"storage_atlas_15", frames: [[172,296,138,139],[332,1195,142,105],[304,0,234,96],[671,256,100,147],[918,199,120,120],[920,321,120,120],[1102,144,180,80],[798,360,120,120],[150,772,244,75],[180,849,244,75],[180,1003,244,75],[180,926,244,75],[505,569,120,120],[0,433,153,139],[726,0,240,92],[906,122,194,75],[680,182,206,72],[152,152,149,142],[671,405,125,116],[773,256,143,102],[0,574,175,120],[155,437,170,108],[726,94,178,86],[540,0,184,121],[0,912,178,113],[0,304,170,127],[0,1027,178,113],[331,626,172,88],[526,123,152,102],[531,691,120,120],[561,813,120,120],[561,935,120,120],[626,1057,120,120],[327,385,130,130],[0,0,150,150],[152,0,150,150],[0,152,150,150],[331,517,150,107],[340,1080,149,101],[0,1142,178,110],[180,1195,150,105],[303,180,174,101],[1112,1113,129,106],[312,283,170,100],[177,547,152,116],[1112,1004,130,107],[491,1058,133,112],[396,716,133,112],[0,772,148,138],[426,830,133,112],[627,526,100,136],[426,944,133,112],[484,227,133,112],[484,341,133,112],[483,455,133,112],[180,1080,158,113],[304,98,220,80],[1150,0,150,142],[619,227,50,297],[968,0,180,120],[683,932,120,120],[805,932,120,120],[1164,308,120,120],[805,810,120,120],[683,810,120,120],[1042,308,120,120],[748,1054,180,80],[930,758,180,80],[798,482,180,80],[927,840,180,80],[1040,226,180,80],[927,922,180,80],[930,676,180,80],[748,728,180,80],[658,1218,180,80],[748,1136,180,80],[930,1004,180,80],[840,1218,180,80],[930,594,180,80],[476,1218,180,80],[1042,430,180,80],[930,1086,180,80],[980,512,180,80],[1112,594,180,80],[1112,676,180,80],[748,564,180,80],[1112,758,180,80],[1109,840,180,80],[748,646,180,80],[1109,922,180,80],[0,696,278,74]]},
		{name:"storage_atlas_16", frames: [[845,213,89,127],[247,0,205,66],[675,452,73,123],[913,721,66,91],[1191,293,93,109],[379,68,72,55],[1232,404,65,98],[981,721,74,76],[1162,404,68,138],[750,550,80,94],[454,0,106,127],[0,680,77,81],[662,577,85,85],[851,743,57,64],[749,646,80,80],[1057,782,60,60],[587,779,100,50],[514,780,60,60],[286,291,50,50],[159,645,80,80],[241,649,80,80],[534,164,175,68],[0,266,175,64],[562,0,169,79],[88,596,150,47],[554,407,220,43],[1016,0,132,95],[1132,189,115,102],[177,291,107,99],[0,594,86,84],[1063,384,97,99],[154,186,81,77],[1016,97,114,106],[859,105,114,106],[936,288,132,84],[750,483,128,65],[733,0,150,89],[975,205,142,81],[486,234,142,79],[122,462,141,63],[0,186,152,78],[562,81,152,81],[379,129,153,78],[630,271,152,73],[0,527,128,65],[602,346,174,59],[397,467,131,65],[0,332,137,75],[384,534,140,56],[1249,239,48,48],[1249,189,48,48],[587,735,130,42],[252,594,130,53],[751,785,60,60],[689,785,60,60],[1119,782,60,60],[486,651,80,80],[1118,604,130,51],[913,671,130,48],[323,718,130,47],[719,743,130,40],[132,778,130,40],[1161,544,130,58],[530,530,130,61],[1057,739,130,41],[291,767,130,40],[248,871,130,25],[159,731,130,45],[0,763,130,40],[554,452,119,76],[992,557,124,60],[102,0,143,95],[340,290,128,85],[885,0,129,103],[286,377,124,79],[716,91,141,87],[1070,293,119,89],[937,374,124,79],[102,97,139,87],[1150,0,136,91],[711,180,132,89],[832,609,130,50],[130,527,120,67],[323,667,130,49],[0,409,120,78],[247,68,130,95],[252,531,130,61],[964,619,130,50],[486,593,130,56],[470,315,130,80],[455,733,130,45],[265,462,130,67],[1150,93,130,94],[340,209,144,79],[0,0,100,136],[326,809,60,60],[0,805,60,60],[1096,657,80,80],[568,651,80,80],[62,805,60,60],[186,820,60,60],[981,799,60,60],[813,809,60,60],[124,820,60,60],[576,831,60,60],[880,537,110,70],[1049,485,110,70],[937,455,110,80],[1178,657,80,80],[139,392,140,68],[650,664,91,69],[412,397,140,68],[243,165,95,124],[832,550,40,55],[1118,557,40,43],[1288,0,10,11],[88,645,69,94],[384,592,100,73],[1243,814,57,60],[836,374,99,100],[975,138,23,38],[975,105,31,31],[880,476,50,50],[1260,604,40,147],[784,271,50,210],[875,814,60,60],[264,809,60,60],[388,836,60,60],[450,836,60,60],[512,842,60,60],[1043,844,60,60],[1105,844,60,60],[1181,814,60,60],[700,847,60,60],[937,861,60,60],[638,847,60,60],[831,661,80,80],[0,867,60,60],[423,780,89,54],[0,138,85,45],[1189,753,87,59],[62,867,57,58]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.accessory10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessory17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.accessory19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.accessory20_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.background_10_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_11_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_12_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_13_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_14_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_15_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_16_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_category_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_long_button_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bg_navigation_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bg_option_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bg_subcategory_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.body_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.check_category_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.check_subcategory_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.clouds_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.collar_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.color_picker_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.crown10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.crown11_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.crown12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.crown13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.crown14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.crown15_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.crown16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.crown17_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.crown18_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.crown19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.crown1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.crown20_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.crown21_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.crown22_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.crown23_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.crown24_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.crown25_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.crown26_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.crown27_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.crown28_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.crown2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.crown3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.crown4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.crown5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.crown6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.crown7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.crown8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.crown9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.done_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor13_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor14_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor16_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor18_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor19_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor20_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.face10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.face11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.face12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.face13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.face14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.face15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.face16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.face1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.face2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.face3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.face4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.face5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.face6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.face7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.face8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.face9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hat_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.icon_accessory_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.icon_accessory_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.icon_accessory_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_11_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_12_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_13_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_14_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_15_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_16_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.icon_collar_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_19_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_20_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.icon_dress_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_20_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_22_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_23_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_24_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_28_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.icon_headdress_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.icon_mutch_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.icon_tail_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.icon_tail_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.icon_tail_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.icon_tail_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.icon_wings_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.icon_wings_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.icon_wings_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.icon_wings_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.numbers_separator_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.podium_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.shadow_hero_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.star_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_random_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.title_random_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.title_random_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.title_random_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.title_random_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.title_random_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.title_random_id_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.title_random_it_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.title_random_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.title_random_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.title_random_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.title_random_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_id_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_it_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.wings1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.wings2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.wings3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.wings4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-140,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-65,280,130);
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


(lib.wings4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings4_img();
	this.instance.setTransform(-149.3,-61.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.3,-61.8,299,124);
p.frameBounds = [rect];


(lib.wings3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings3_img();
	this.instance.setTransform(-185.3,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.3,-40,371,80);
p.frameBounds = [rect];


(lib.wings2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings2_img();
	this.instance.setTransform(-138.9,-36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.9,-36.9,278,74);
p.frameBounds = [rect];


(lib.wings1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings1_img();
	this.instance.setTransform(-185.3,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.3,-40,371,80);
p.frameBounds = [rect];


(lib.tale_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AjIDLIAAAAQhUhUAAh3QAAh2BUhVQBThTB1gBQB2ABBUBTIAAAAQBTBVAAB2QAAB3hTBUQhUBUh2AAQh1AAhThUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.6,-28.8,57.2,57.6);
p.frameBounds = [rect];


(lib.tale_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AjuEdQisgbgRhDQgLghADgTQADgcAXgGIAAABQAdgKAZAAQAHAABBAYQA5AVAtAAQBYAABRgsIAAAAQBPgtAxhMQgdgGgYgRIAAAAQgsgfAAg0QgBhgByglQA6gUCIgJIABAAIARAAQAFAAAEADQADACACAEQAyBwALAcQASAtAAA1QAAA/gcAjQggAphAAAQguAAgggaQhSB2hwA9QhRAuhrAAQgsAAgvgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-29.3,87.5,58.7);
p.frameBounds = [rect];


(lib.tale_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AmcBWQgDgDgBgDQgPgsARgVQAPgVAuADIAGACIAEACQBWBpDQACQCGgeBNh+IhCg9QgEgEgBgGQAAgFADgFQADgEAFgCIEuhXQAGgCAFACQAFADACAFQADAFgCAFIhQE0QgBAFgFAEQgFADgGgBQgFgBgEgFIg3hFQh2Coi1AMQgfAEgeAAQivAAiLiKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.4,-22.4,84.9,44.9);
p.frameBounds = [rect];


(lib.tale_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("AmbCMIgDgEQgng8AJgkQAGgoA7gKQADgBADABIAGADQCWB1B/gYQB5gZBmihIhFhmQgDgEAAgFQABgGAEgDQADgEAFgBIFjgtQAFgBAEACQAEACACAEQADAEgBAFIgUF1QAAAFgEAFQgFAEgGAAQgGAAgEgEIhFhBQjMDPjOAAQilAAioiDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.7,-27.1,89.4,54.3);
p.frameBounds = [rect];


(lib.tail_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor4_img();
	this.instance.setTransform(-28.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.6,-28.8,57,58);
p.frameBounds = [rect];


(lib.tail_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor3_img();
	this.instance.setTransform(-43.7,-29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-29.3,87,59);
p.frameBounds = [rect];


(lib.tail_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor2_img();
	this.instance.setTransform(-42.4,-22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.4,-22.4,85,45);
p.frameBounds = [rect];


(lib.tail_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor1_img();
	this.instance.setTransform(-44.6,-27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.6,-27.1,89,54);
p.frameBounds = [rect];


(lib.shadow_hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_hero_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.nav_navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.arrow_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkZEaQh1h1AAilQAAikB1h1QB1h1CkAAQClAAB1B1QB2B1gBCkQABClh2B1Qh1B2ilgBQikABh1h2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.hero_main_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_2_img();
	this.instance.setTransform(-193,-661);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-661,380,590);
p.frameBounds = [rect];


(lib.hero_main_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_1_img();
	this.instance.setTransform(-222,-520);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222,-520,440,520);
p.frameBounds = [rect];


(lib.hat_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat_decor12_img();
	this.instance.setTransform(-210.8,-195.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210.8,-195.8,422,392);
p.frameBounds = [rect];


(lib.hat_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat_decor11_img();
	this.instance.setTransform(-190,-160.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat_decor10_img();
	this.instance.setTransform(-190,-160.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat_decor9_img();
	this.instance.setTransform(-227.1,-161.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-227.1,-161.3,454,323);
p.frameBounds = [rect];


(lib.hat_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat_decor8_img();
	this.instance.setTransform(-141.8,-194.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.8,-194.7,284,389);
p.frameBounds = [rect];


(lib.hat_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat_decor7_img();
	this.instance.setTransform(-190,-160.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat_decor6_img();
	this.instance.setTransform(-190,-160.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat_decor5_img();
	this.instance.setTransform(-190,-160.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat_decor4_img();
	this.instance.setTransform(-206.2,-113.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.2,-113.4,412,227);
p.frameBounds = [rect];


(lib.hat_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat_decor3_img();
	this.instance.setTransform(-190,-160.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat_decor2_img();
	this.instance.setTransform(-141.8,-194.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.8,-194.7,284,389);
p.frameBounds = [rect];


(lib.hat_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat_decor1_img();
	this.instance.setTransform(-190,-160.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("AWHejQihh6AUjKIAAhEIAAgDIAAgBIgPg6QgKgsAAgbQAAhKAYg0IAAABQAOggArg1QgPgcgOgmQgXg9ABgpQgBgoAYhFQARgwAWgkQgSgOgQgPQhVhOgwiCQgghUgfieQgOhJgMg2QliBQl5AOIkxABIgBAAIgBAAIgTgBIgBAAIgRgBIgCAAIgBAAQlsgPlZhOQgMA2gOBJQgfCegfBUQgxCChVBOIAAAAIgXAUQAZAoATA1IAAAAQAYBFAAAoQAAApgWA9QgOAmgPAcQAqA1APAgIAAgBQAYA0AABKQAAAbgKAsIgPA6IgBABIABADIAABEQATDKigB6QgFADgFAAQgGAAgEgEQiCh9A0izIgHgDQgEgBgCgEQgDgDAAgEIgIgqQglgUgRg4IAAABQgNgnAAgvQAAgoAPgwQAMglALgWQgXgjgug3IgBgBQgrg9AAhEQAAglAOgdIgBAAQALgYAcgWIgEgDQidgUhrhhQg4gygqhIIAAAAQiFjfABh4QAAgyALgoQAThLA3guQA6gwBfgMQAegEAgAAQBLABAWADIAAAAQATADARAFQAdh+AqiOIi6gUQgFgBgDgCQgDgCgCgEInBw2QgoASgugFQgPgCgNgEIAAAAQgwgMgggnIgHgHIABABQgtg3AIhGQAHhGA4gsIAAAAQA0gqBDAFIACAAIACAAIACAAQAZADAXAJIAAABQAmAQAbAjIAAgBQAOARAJASIAAAAQATAqgEAwIAAABQgDAQgEAPISkEXQADABADACQADADABADIBXD0QECgvFPgTQAtgDAtgBIABAAQApABApADQDXAMC4AXIAAj7QAAgEACgDQACgEADgCIP/o0QgWgmAAguQAAgPACgNQAHgxAkgmIgBABIAGgGQAxgyBHAAQBGAAAyAyQAvAwADBCIAAABIAAAFQAAAagHAXIAAAAQgMAogfAfQgQAPgQALIAAAAQgoAYgwAAQgRAAgQgDIiTS7QgBAEgCADQgDAEgDABIh1A0IAWBGIAYBMIgBAAQAxCiAhCOQASgFASgDIAAAAQAWgDBLgBQAgAAAeAEQBfAMA6AwQA3AuAUBLQAKAoAAAyQABB4iEDfIAAAAQgrBIg4AyQhkBbiQAXIgHAGQAcAWAKAYIAAAAQANAdABAlQAABEgsA9IAAABQguA3gXAjQALAWALAlQAQAwAAAoQAAAvgNAnIAAgBQgQA0glAUIgJAvQgBADgCADQgDAEgDABIgHADQAzCziBB9QgEAEgGAAIgBAAQgFAAgEgDgAwPVhIAAgBIgFgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210.8,-195.8,421.7,391.7);
p.frameBounds = [rect];


(lib.hat_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("Au+UtIgBAAIgEgDIAAAAQmqkhgJn9QgEjWBJi4IjQgsQgEgBgDgEQgEgDAAgFIiXzuQgOACgPAAQhGAAgygyQgLgKgIgLIAAAAQgSgZgHgcQgGgVAAgZQAAhGAygyQAygyBGAAQBGAAAyAyQAqAqAHA4IAAAAIABAWQAAAUgEASIAAAAQgFAYgMAVIQtICQAEACACADQADAEAAAEIAACrQBggfBmgTQCfgdCrABQEcABDwBRIAAjIQAAgEACgDQACgEAEgCIP/o0QgXgmAAguQAAgPADgNQAHgxAjgmIgBABIAGgGQAygyBGAAQBGAAAyAyQAwAwACBCIAAABIAAAFQAAAagGAXIAAAAQgNAogfAfQgPAPgQALIgBAAQgnAYgxAAQgRAAgPgDIiUS7QAAAEgDADQgCAEgEABIjfBhQBqDIAMDnQAYHOmRFKQmOFJpVAGIgWAAQpDAAmkkbgAojHIQkuCPhEDVQhBDUCkEaQFnDVH8gRIABAAQGDgEFmiZQDCj3gijaQgjjbkKi+QhqhMhiAkIgBABQh6AniQBfQibBliAhgIjch4Qgwgbg2AAQg7AAhCAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,321.7);
p.frameBounds = [rect];


(lib.hat_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("Au+UtIgBAAIgEgDIAAAAQmqkhgJn9QgEjWBJi4IjQgsQgEgBgDgEQgEgDAAgFIiXzuQgOACgPAAQhGAAgygyQgLgKgIgLIAAAAQgSgZgHgcQgGgVAAgZQAAhGAygyQAygyBGAAQBGAAAyAyQAqAqAHA4IAAAAIABAWQAAAUgEASIAAAAQgFAYgMAVIQtICQAEACACADQADAEAAAEIAACrQBggfBmgTQCfgdCrABQEcABDwBRIAAjIQAAgEACgDQACgEAEgCIP/o0QgXgmAAguQAAgPADgNQAHgxAjgmIgBABIAGgGQAygyBGAAQBGAAAyAyQAwAwACBCIAAABIAAAFQAAAagGAXIAAAAQgNAogfAfQgPAPgQALIgBAAQgnAYgxAAQgRAAgPgDIiUS7QAAAEgDADQgCAEgEABIjfBhQBqDIAMDnQAYHOmRFKQmOFJpVAGIgWAAQpDAAmkkbgAAoTdQCCiHC4BJQEWA2CthuQBdg8A+hsQACg2gMg0QgujLj4iyIgCgBQhqhMhiAkIgBABQh6AniQBfQibBliAhgIjch4Qhlg3h+A8QjrBlhVCLQhVCLATB2QAdCVCgBJQClBKEtg9IABAAIABAAQBJgZA9AAQBwAABGBSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,321.7);
p.frameBounds = [rect];


(lib.hat_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("AouUzIgBgBIgDgCIgBgBQl2j+g0mnIj8AbQgEAAgDgBIgGgFIrdvOQgNALgPAIQgqAYgugBIAAAAQgUAAgUgGIAAAAQgrgLgegcIgBgBQgRgRgMgVIgCgDIAAgBIgBgCQggg7AShBIAAAAQARhEA9gjQA9gjBFASIABAAIAHADQAwAPAfAmIgBgBQAKALAHAOIAAgBQAXAoAAAsISQgXQADAAAEACQAEACACAEIBpC2QAggdAkgcQB0hbB+hBQBmg2BugkQBpgkBwgUQCegdCtAAQEKABDlBIIAAjJQAAgEACgDQACgEAEgCIP+o0QgWgmAAguQAAgPADgNQAHgyAjglIAAABIAFgGQAygyBGAAQBGAAAyAyQAwAvACBDIAAABIAAAFQAAAZgGAYIAAAAQgNAogfAfQgPAPgQALQgoAYgxAAQgRAAgPgDIiUS7QAAAEgDADIgGAFIjMBZIACAEQByDOAMDvQAYHPmRFKQmOFIpUAGIgWAAQpEAAmkkagAiTHNQitBThgBpIhcCSIgIAWQhCDUClEbIAOAIQBmA7ByAoIAEACQEVBhFfgKIAEAAIABAAQBBgBBAgFIAPgBIAKgBII9iOIASgHQDCj4ghjaIgDgRQgNg7gdg5QgyhihjhaIgCgDIgDgDIgDgCIgDgDQgpgkgxgjIgHgGQhnhJhfAgIgGACIgBAAQh6AoiQBeIgJAHQiWBch+heIjch4IgIgEQgfgPgggFQgOgCgQAAQg6AAhCAfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-227.1,-161.3,454.2,322.8);
p.frameBounds = [rect];


(lib.hat_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("AvRaAIgBAAIgDgDIgBAAQmqkigJn8QgCiCAah3IAAAAQANg6ATg2IAAgBIABgBQAGgTAHgSIAGgNIAAgBIABgBQAXg5Agg1IAAAAQAUgjAYgiQBLhuBshgQA0l7A6k4QBBlfCrm1QCtm8D1hDQD7hIBaDGQBZC9gFCcIgDBxIAAAZIgBAFIAAABIgBAHIAAANIgFBYIgCArQA/gOBAAAQGMAACdGRQBqEOgJHEQAwAiAuAlQBPBCBABHIAAAAQBeBoA/BzQByDOAMDvQAYHOmRFKQmOFJpUAGIgWAAQpEAAmkkbgAuzTOQgMBWAWBUQAgCCBFBzQFmDUH8gQIABAAQGDgFFmiYQBYhwAeh3IABgBQBEjQg5iLQg5iMiNhIQhsg2iag5IAAABQiyg/i7gPQi5gMi3AmQiqAkicBHQhHAghHAnIACgCQinB6gbDJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.8,-194.7,283.7,389.5);
p.frameBounds = [rect];


(lib.hat_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("Au+UtIgBAAIgEgDIAAAAQmqkhgJn9QgEjWBJi4IjQgsQgEgBgDgEQgEgDAAgFIiXzuQgOACgPAAQhGAAgygyQgLgKgIgLIAAAAQgSgZgHgcQgGgVAAgZQAAhGAygyQAygyBGAAQBGAAAyAyQAqAqAHA4IAAAAIABAWQAAAUgEASIAAAAQgFAYgMAVIQtICQAEACACADQADAEAAAEIAACrQBggfBmgTQCfgdCrABQEcABDwBRIAAjIQAAgEACgDQACgEAEgCIP/o0QgXgmAAguQAAgPADgNQAHgxAjgmIgBABIAGgGQAygyBGAAQBGAAAyAyQAwAwACBCIAAABIAAAFQAAAagGAXIAAAAQgNAogfAfQgPAPgQALIgBAAQgnAYgxAAQgRAAgPgDIiUS7QAAAEgDADQgCAEgEABIjfBhIArBbIAFAPQALAbAJAbIAHAUIAAAAIAAABIAAACQASA6ALA9IAAABIAAADIADARQAIA1ADA3QAYHOmRFKQmOFJpVAGIgWAAQpDAAmkkbgAojHIQkuCPhEDVQhBDUCkEaQFnDVH8gRIABAAQGDgEFmiZQDCj3gijaQgjjbkKi+QhqhMhiAkIgBABQh6AniQBfQibBliAhgIjch4Qgwgbg2AAQg7AAhCAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,321.7);
p.frameBounds = [rect];


(lib.hat_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("AhfY7QkRgUgMgJQhPgMiyhJQhugug0gaIg4gNIgGgEIgLAEIgBABQgdAJgkAAQgpAAgKgHIAAAAQgXgKAAgrIABgpIAAgLIgngfQgtgkgmgnIgCgDIgBgBIgBgBIgTgTQhrh1g7iNQgchBgRhFIgBgDIgEgVQgQhDgGhHIAAgDIAAgDIAAgDIgBgDIAAgDIAAgDQgCgfgBgfQgChnAQhgIAJgsIAAgBIACgJQARhKAchGIjQgsQgFgCgDgDQgEgEAAgEIiXzuQgOACgPAAQhGAAgygyQgLgKgIgLQgSgZgHgcQgGgWAAgYQAAhGAygyQAygyBGAAQBGAAAyAyQAqApAHA4IAAABIABAWQAAATgEASIAAABQgFAXgMAVIQtICQAEACADAEQACADAAAFIAACqIAqgNIACAAIAVgGIATgFIAHgCIAAAAIAbgGQAogKApgHQAwgJAygGIAEgBIALgBQAbgDAcgCIAigDIAJAAQA7gEA7AAIAIAAIANABIAWAAIAIAAQAbABAaACIANAAIABAAIABAAQBsAHBmAUIAKACIAKACQA2ALA0APIA0AQIARAFIAAjHQAAgEACgEQACgDAEgCIP/o1QgXglAAgvQAAgOADgOQAHgxAjglIAAABIAFgHQAygyBGAAQBGAAAyAyQAwAwACBDIAAAAIAAAFQAAAagGAXIAAABQgNAngfAfQgPAQgQAKQgoAYgxAAQgRAAgPgDIiUS8QAAADgDAEIgGAFIjfBhIAZAxQAdA/AUBDQAOARAAAXIAAAHIACAIQAOA6AHA8QAFAmACAnIABAMIAAAAIAAAHIgCBmIAAAIIgCAXQgMBpgjBiIgCAFIg1B0IgCAEIgBACQgcAxgiAvIAAAAIgBACIhaBrIgKAKIAAAAIAAABIgEAEIgVAUIgBABIgiAgIgKAJIgBAAIgHAHIgNALIgPAMIgnAfIgZAUIAAAJIABASQAAAsgIAIQgKAQgyAAQgVAAgagKIAAAAIgLgEIgLAGIgJACQhpA1gvANQgvAMiKArIAAgBQiCAiABABQiNAbinAAQhRAAhZgHgAoOCZQhDA0g/A5IAAAAQhEA/g5BJQg5BIgiBUQgeBIgTBJQgOA4gHA4QgGAvgBAxQgCBaAdBUQAOAqATApQAmBPAtBNIAKAFIACABIABABIAAAAQFfDGHrgQIABAAQGCgFFmiYIAQgbIAAAAQAuhPAohSQATgpAPgqQAchUgChaQgBgxgGgvIAAAAQgHg4gOg4QgThJgdhIIgBAAQgihUg4hIQg6hJhEg/Qg/g5hDg0IiqgcIgSAhICdBdQAFADACAFQACAGgCAFQgDAFgFACInHDSIgGACIgGgBInyjSQgFgDgDgEQgCgGABgFQACgFAEgDICWhoIgagXg");
	this.shape.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-159.3,380,320.5);
p.frameBounds = [rect];


(lib.hat_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("Au+UtIgBAAIgEgDIAAAAQmqkhgJn9QgEjWBJi4IjQgsQgEgBgDgEQgEgDAAgFIiXzuQgOACgPAAQhGAAgygyQgLgKgIgLIAAAAQgSgZgHgcQgGgVAAgZQAAhGAygyQAygyBGAAQBGAAAyAyQAqAqAHA4IAAAAIABAWQAAAUgEASIAAAAQgFAYgMAVIQtICQAEACACADQADAEAAAEIAACrQBggfBmgTQCfgdCrABQEcABDwBRIAAjIQAAgEACgDQACgEAEgCIP/o0QgXgmAAguQAAgPADgNQAHgxAjgmIgBABIAGgGQAygyBGAAQBGAAAyAyQAwAwACBCIAAABIAAAFQAAAagGAXIAAAAQgNAogfAfQgPAPgQALIgBAAQgnAYgxAAQgRAAgPgDIiUS7QAAAEgDADQgCAEgEABIjfBhQBqDIAMDnQAYHOmRFKQmOFJpVAGIgWAAQpDAAmkkbgAojHIQkuCPhEDVQhBDUCkEaQFnDVH8gRIABAAQGDgEFmiZQDCj3gijaQgjjbkKi+QhqhMhiAkIgBABQh6AniQBfQibBliAhgIjch4Qgwgbg2AAQg7AAhCAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,321.7);
p.frameBounds = [rect];


(lib.hat_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("AvLNTIgBgBIgEgCIgBgBQjaiUhtjOQiTGLhABNQhFBUiBAQQiBAQhphvQhyh3AAjdQAAklBukNQBejlCljAQCOilCihlQCYhfBkABQAHAAAPADQALACAHAAIABAAQAxgwA6guQBzhbB/hBQBmg1BtglQBqgkBxgUQCfgdCrAAQEnABD5BYQB9AtByBCQBoA9BeBPQAzAqAsAtQADgCAEAAQAHAAALgCQAPgDAHAAQBkgBCYBfQCiBlCPClQCkDABeDlQBuENAAElQAADdhyB3QhpBviCgQQiAgQhFhUQhAhNiSmGQhdCiioCLQmPFIpUAGIgXABQpDAAmjkbgAowgRQiuBRhgBpIhcCSIgIAWQhCDUClEbIAVALQCXBXCzAuQDqA8EWgIIAEAAIAAAAQBBgBBBgFIAPgBIAKgBII9iOIASgHQDCj4gijaIgDgRQgMg7gdg5QgyhhhjhbIgDgDIgDgDIgDgCIgDgDQgpgkgwgjIgIgEIAAAAQhmhJhfAgIgGACIgBAAIAAAAQh7AoiPBcIgKAHQiVBch9heIjbh2IgJgEQgegPghgFQgPgCgQAAQg7AAhBAfgAxSq6IgEAEIABAAIADgEIACgCIgCACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.2,-113.4,412.5,226.8);
p.frameBounds = [rect];


(lib.hat_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("Au+UtIgBAAIgEgDIAAAAQmqkhgJn9QgEjWBJi4IjQgsQgEgBgDgEQgEgDAAgFIgul+Qg3AMgwgTQg4gXgNgxQgOgxAmgwIAAgBQAkgsA/gSIABAAIASgDIAAAAIABgBIgEggQg8AHg0gVQhLgdgRhCIAAAAQgShBAyg/IAAAAQAvg7BSgXIAFgBIgikdQgOACgPAAQhGAAgygyQgLgKgIgLIAAAAQgSgZgHgcQgGgVAAgZQAAhGAygyQAygyBGAAQBGAAAyAyQAqAqAHA4IAAAAIABAWQAAAUgEASIAAAAQgFAYgMAVIQtICQAEACACADQADAEAAAEIAACrQBggfBmgTQCfgdCrABQEcABDwBRIAAjIQAAgEACgDQACgEAEgCIP/o0QgXgmAAguQAAgPADgNQAHgxAjgmIgBABIAGgGQAygyBGAAQBGAAAyAyQAwAwACBCIAAABIAAAFQAAAagGAXIAAAAQgNAogfAfQgPAPgQALIgBAAQgnAYgxAAQgRAAgPgDIiUS7QAAAEgDADQgCAEgEABIjfBhQBqDIAMDnQAYHOmRFKQmOFJpVAGIgWAAQpDAAmkkbgAojHIQkuCPhEDVQhBDUCkEaQFnDVH8gRIABAAQGDgEFmiZQDCj3gijaQgjjbkKi+QhqhMhiAkIgBABQh6AniQBfQibBliAhgIjch4Qgwgbg2AAQg7AAhCAggA6bmcQAGAUAZAJQAaAJAfgGIABAAIgNhrIgLACIAAAAQgiAKgSAWIgBAAQgQAUAEAVgA65sOQgZAeAIAfQAIAeAlANQAaAKAegCIgSiaQgqANgYAdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,321.7);
p.frameBounds = [rect];


(lib.hat_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("AvRaAIgBAAIgDgDIgBAAQmqkigJn8QgEjXBKi4IAHgPIAAgBQAnheA8hVQBLhuBshgQA0l7A6k4QBBlfCrm1QCtm8D1hDQD7hIBaDGQBZC9gFCcIgDBxIAAAZIgBAFIAAABIgBAHIAAANIgFBYIgCArQA/gOBAAAQGMAACdGRQBqEOgJHEQAwAiAuAlQBPBCBABHIAAAAQBeBoA/BzQByDOAMDvQAYHOmRFKQmOFJpUAGIgWAAQpEAAmkkbgAuzTOQgMBWAWBUQAgCCBFBzQFmDUH8gQIABAAQGDgFFmiYQBYhwAeh3IABgBQBEjQg5iLQg5iMiNhIQhsg2iag5IAAABQiyg/i7gPQi5gMi3AmQiqAkicBHQhHAghHAnIACgCQinB6gbDJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.8,-194.7,283.7,389.5);
p.frameBounds = [rect];


(lib.hat_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("Au+UtIgBAAIgEgDIAAAAQmqkhgJn9QgEjWBJi4IjQgsQgEgBgDgEQgEgDAAgFIiXzuQgOACgPAAQhGAAgygyQgLgKgIgLIAAAAQgSgZgHgcQgGgVAAgZQAAhGAygyQAygyBGAAQBGAAAyAyQAqAqAHA4IAAAAIABAWQAAAUgEASIAAAAQgFAYgMAVIQtICQAEACACADQADAEAAAEIAACrQBggfBmgTQCfgdCrABQEcABDwBRIAAjIQAAgEACgDQACgEAEgCIP/o0QgXgmAAguQAAgPADgNQAHgxAjgmIgBABIAGgGQAygyBGAAQBGAAAyAyQAwAwACBCIAAABIAAAFQAAAagGAXIAAAAQgNAogfAfQgPAPgQALIgBAAQgnAYgxAAQgRAAgPgDIiUS7QAAAEgDADQgCAEgEABIjfBhQBqDIAMDnQAYHOmRFKQmOFJpVAGIgWAAQpDAAmkkbgAojHIQkuCPhEDVQhBDUCkEaQFnDVH8gRIABAAQGDgEFmiZQDCj3gijaQgjjbkKi+QhqhMhiAkIgBABQh6AniQBfQibBliAhgIjch4Qgwgbg2AAQg7AAhCAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,321.7);
p.frameBounds = [rect];


(lib.face16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face16_img();
	this.instance.setTransform(-75.1,-39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.1,-39.4,152,102);
p.frameBounds = [rect];


(lib.face15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face15_img();
	this.instance.setTransform(-70.3,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.3,-22.7,141,63);
p.frameBounds = [rect];


(lib.face14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face14_img();
	this.instance.setTransform(-70.4,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.4,-38.5,142,79);
p.frameBounds = [rect];


(lib.face13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.face13_img();
	this.instance.setTransform(-69.4,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.4,-31.5,142,81);
p.frameBounds = [rect];


(lib.face12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.face12_img();
	this.instance.setTransform(-75.6,-40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.6,-40.4,150,89);
p.frameBounds = [rect];


(lib.face11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.face11_img();
	this.instance.setTransform(-85.4,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.4,-31.5,172,88);
p.frameBounds = [rect];


(lib.face10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face10_img();
	this.instance.setTransform(-64.6,-30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.6,-30.2,128,65);
p.frameBounds = [rect];


(lib.face9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face9_img();
	this.instance.setTransform(-69.3,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.3,-24.5,140,56);
p.frameBounds = [rect];


(lib.face8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.face8_img();
	this.instance.setTransform(-67.8,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.8,-34.5,137,75);
p.frameBounds = [rect];


(lib.face7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face7_img();
	this.instance.setTransform(-64.6,-30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.6,-30.2,131,65);
p.frameBounds = [rect];


(lib.face6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face6_img();
	this.instance.setTransform(-87,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87,-22,174,59);
p.frameBounds = [rect];


(lib.face5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face5_img();
	this.instance.setTransform(-64.6,-30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.6,-30.2,128,65);
p.frameBounds = [rect];


(lib.face4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face4_img();
	this.instance.setTransform(-75.9,-38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.9,-38.4,152,73);
p.frameBounds = [rect];


(lib.face3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face3_img();
	this.instance.setTransform(-75.9,-38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.9,-38.4,153,78);
p.frameBounds = [rect];


(lib.face2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face2_img();
	this.instance.setTransform(-75.9,-38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.9,-38.4,152,81);
p.frameBounds = [rect];


(lib.face1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face1_img();
	this.instance.setTransform(-75.9,-38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.9,-38.4,152,78);
p.frameBounds = [rect];


(lib.dress_decor20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor20_img();
	this.instance.setTransform(-92.3,-75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.3,-75.8,185,152);
p.frameBounds = [rect];


(lib.dress_decor19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.dress_decor19_img();
	this.instance.setTransform(-124.4,-69.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.4,-69.6,248,145);
p.frameBounds = [rect];


(lib.dress_decor18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor18_img();
	this.instance.setTransform(-92.3,-73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.3,-73.6,185,147);
p.frameBounds = [rect];


(lib.dress_decor17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor17_img();
	this.instance.setTransform(-91.9,-60.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.9,-60.3,184,121);
p.frameBounds = [rect];


(lib.dress_decor16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor16_img();
	this.instance.setTransform(-107.1,-74.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.1,-74.8,214,150);
p.frameBounds = [rect];


(lib.dress_decor15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor15_img();
	this.instance.setTransform(-126.7,-79.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.7,-79.1,254,158);
p.frameBounds = [rect];


(lib.dress_decor14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor14_img();
	this.instance.setTransform(-106.4,-71.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.4,-71.6,213,143);
p.frameBounds = [rect];


(lib.dress_decor13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor13_img();
	this.instance.setTransform(-107.2,-76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.2,-76.6,214,153);
p.frameBounds = [rect];


(lib.dress_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress_decor12_img();
	this.instance.setTransform(-102.5,-67.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-67.6,205,135);
p.frameBounds = [rect];


(lib.dress_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor11_img();
	this.instance.setTransform(-89.1,-42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.1,-42.9,178,86);
p.frameBounds = [rect];


(lib.dress_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.dress_decor10_img();
	this.instance.setTransform(-85,-53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-53.8,170,108);
p.frameBounds = [rect];


(lib.dress_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.dress_decor9_img();
	this.instance.setTransform(-94.5,-61.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.5,-61.2,188,127);
p.frameBounds = [rect];


(lib.dress_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor8_img();
	this.instance.setTransform(-107.9,-83.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.9,-83.1,216,166);
p.frameBounds = [rect];


(lib.dress_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor7_img();
	this.instance.setTransform(-97.2,-64.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.2,-64.4,194,129);
p.frameBounds = [rect];


(lib.dress_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.dress_decor6_img();
	this.instance.setTransform(-99.6,-62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.6,-62.6,199,125);
p.frameBounds = [rect];


(lib.dress_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor5_img();
	this.instance.setTransform(-120.9,-65.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.9,-65.9,244,144);
p.frameBounds = [rect];


(lib.dress_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor4_img();
	this.instance.setTransform(-89.1,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.1,-56.5,178,113);
p.frameBounds = [rect];


(lib.dress_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor3_img();
	this.instance.setTransform(-84.7,-63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.7,-63.3,170,127);
p.frameBounds = [rect];


(lib.dress_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor2_img();
	this.instance.setTransform(-100.7,-61.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.7,-61.4,201,123);
p.frameBounds = [rect];


(lib.dress_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor1_img();
	this.instance.setTransform(-89,-56.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89,-56.3,178,113);
p.frameBounds = [rect];


(lib.dress_base20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AhqLeQlmgZl6hlQB1jpBOmFIgFgeQh+Adh+hVQgDgNAAgOIAIiFIAEgTQAThtAEgkQAEgnAtg+QAQgXAXgYQBRhVCDhVIBkAYQCSAiCNARICmD2ICljqQB9gFB3gWQBlgSBhgdIACABQB3BPBMBQQAXAYAQAXQAtA9AFA9QAEArATBmQAJBdACAlIAAAKQhtBViQgYIgHArQBMGKCsEJQlyBfmLAAQh2AAh3gJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.8,-74.3,181.6,148.7);
p.frameBounds = [rect];


(lib.dress_base19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AhoJUQlKB8jvibQlUA3jDjhQBCjWCuhkIAegQQBCkxDkhqIAGACIgGgEQgIgHgNgMQgcgaAAgOQAAgDAGgOQAGgPADgDQgSgPgGgHQgLgMAAgSQAAgQADgFIAMgRQgUgFgTgXQgVgbAAgbQAAgJADgLQADgJAEgEQAOAPArAAQAHAAANgDQANgCAQgKIAxghQKACrIIieIABABQAXAPAYATQAQgFANACQANADAHAAIBBABQACAIAAAJQAAAbgVAbQgTAXgUAFIAMARQADAFAAAQQAAASgLAMQgGAHgSAPQADADAGAPQAGAOAAADQAAAOgbAaIgiAeQEfCJAbEsQDFBRBdDgQkoD9lihdQiSB0i2AAQibAAi0hVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.9,-68.1,241.9,136.3);
p.frameBounds = [rect];


(lib.dress_base18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AFcLNQl6g0BbjVQAGhjhChTQhKBIANBsQBbDVl6A0QnQAjA9lAQA7hYA7gKQgnheA9hdQgUg7gMg6IgFgWQh8AohFguQhFgxACg5QADg5APgjQAJgUAVgnIAHgEQgKgNgFgRQgLgjAFg3QAFg9Atg9QAQgXAXgYQBRhVCDhVQD2BBEpAVIAAAAQAPgEAZAGIACABIAAgBQEwAHEPhSIACABQB3BPBMBQQAXAXAQAXQAtA+AFA9QAIBRgcAnIgCACIAIABQAVAoAJAUQAPAiADA6QACA5hFAuQhFAwh8goIgFAWQgMA6gUA7QA9BegnBdQA7AKA7BYQA3EhlyAAQgpAAgvgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.8,-72.1,181.6,144.3);
p.frameBounds = [rect];


(lib.dress_base17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("Ag1JKQk4gJlEhZQAUifAChNIAChxQABglAGgrIAaAGIgagJQh7Afh6hnQAEgcAJgUQAJgUAVgoIAHgDQgcgnAHhRQAFg9Atg+QAQgXAXgXQBShVCChWQBfAZBdATQB0AWBwAMIBVAHIBxCJICCiIQAqgDApgEQCBgNB5geQAqgKApgNIACABQB4BQBLBPQAXAYARAXQAsA9AFA9QAIBSgcAmIgBACIAIACQAUAnAJAUQAKAXAFAhQhoBbiOgZQABAvAFAlQAFAkgCAWQgBAWASENQjfBBjnAUIgyAEQhQAGhQAAIhJgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.4,-58.8,180.9,117.6);
p.frameBounds = [rect];


(lib.dress_base16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AhBK4IgXgCQg/gEhAgIIgWgCQg+gJhAgMIgTgEQg+gMg+gRIgNgDQg+gRg9gUIgRgFQg8gUg8gXIgXgJQg6gXg6gbIgNgGQg5gag6gdIgHgEQAwivBtiBIAXgaQgSgQgRgTQAui6C3huQAPh0CLlPQIjCEHJhyQCKFKAOB+QCvCJBACmIgXAaIgLALQgWAWgYASQggAXgkARQgjARgnAKQgjAJgmAEQgxAFg0gEIgBAIIAAgIQgqgEgugIIgDgBIgBAAQgegGgfgJIgdAUIAAAAQglAYglASQgtAVgtANQgqALgpAEIABANQAAAOAQAHQAMAGAQAAQATAAAJgLQAIgJAFgWQAOAUAYAAQAVAAATgQQAUgSgFgVQAVAUAQAAQAXAAAKgVQAKgVgIgXIAAgDIABACQAHAIAJAIQAOAKAMAAQAKAAAOgLQALgJAFgIIAFADQACAOALAQQANAUAOAAQAYAAAagrIAAAAQACAOANANQAPAQARAAQALAAAVgPQAVgQAAgJQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAEANAJAJQALALAMAAQAVAAALgQQAIgNgBgSQABAHAPAKQAQAKANAAQAOAAALgQQALgQgDgSQADADAPAGQAPAGAFAAQATAAAJgVQAIgSgEgTQAHAAALAFQALAFAEAAQAgAAAAggIAAgCIAAgCIACACQCCB3A7C9IgTAKQg3Aag2AYIgUAJQg7AZg8AVIgOAGQg9AVg+ASIgSAGQg8ARg9AOIgSAEQg+ANg+AKIgXAEQg/AJhAAFIgOACQg/AFhAAAIgRABIgQAAQg2AAg4gDgAgtFlQALAQATAAQAiAAAPgsIAAgIQgtADgwgGQgwgGgwgPIgCAIQABATANASQAQAVASAAQAJAAAUgTIAUgTIAPAggAj1EbQgFAYAKARQAJAQAVAAQAWAAAcgjIABAAIABAAIABgIQgrgOgrgUIgHALIAGgMQgmgSgmgXIgSgMQhQAOhIgBQg0AAgwgHIAAAFIgDAAIAAANQASAoAkAAQAOAAAJgJQAHgFASgUIABgEIAAADIgBABQAAAJATAOQAUAQAMAAQAQAAALgQQAJgNABgOQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAAPAKALQAKALANAAQASAAALgPQAIgMACgPQAFAAAAgCIAAACQgDAQAEAXQAEAXAQAGQAPAHAQgNQANgLAHgEgAqyD4QANAMAgAAQANAAAQgPQAKgJAEgHQACgFAAgEIAAgBIABgFQg1gJgvgRQgtgQgogXQglgWgigcIgFAGQgKASAAAUQAAAPAKAKQAKAKAPAAQALAAANgHQARgKAEgBQgFAPAAAIQAAAVAPALQANAKATAAQAJAAAQgMIAUgPQgCAkAPAOgAnwjXIAAAAIgIgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.4,-69.9,211,139.9);
p.frameBounds = [rect];


(lib.dress_base15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("ABZL9QgGgJgGgZIAAgCIAAACIgdAbQgVASgNAAQgWAAgHgLIgLgnIgDAAIgYAkQgIAMgSAAQgSAAgOgMQgLgJgTgXIgDgEIAAABIgSATQgQAUgSAAQgNAAgSgTQgRgRgCgLIAAgBIAAgBIAAACQgIAQgOANQgRAQgUAAQgWgBgOgQQgMgNgGgZQgEASgOAKQgOAMgTgBQgTABgMgLQgNgKAAgRIACgIIAAgBIgBABIAAAAIgRATQgOAOgQAAQgTAAgPgQQgOgQgBgUIgFgDQgWAjgXAAQgWAAgQgQQgLgKgGgQIgFgNQgOARgFAFQgNAKgPAAQgPAAgPgMQgPgNAAgKQACgKAAgEIADgIIgBAAIgCAIIgZAQQgSALgQAAQgRAAgPgOQgPgPgBgVQgEACgSAPQgPANgKAAQgQAAgPgQQgOgPABgSIAAgCIgCABIgCgEIAAABIgUARQgMALgUAAQgVAAgVgVQgYgXAIgVIgDAAQgFAKgRAKQgRAKgPAAQgZAAgOgQQgNgPABgbIgYARQgMAIgLAAQgPABgKgLQgKgKAAgQQAAgIACgDIAFgLQAhhPAnhIIACgFIAHgMIABgCQCwlDESivQgBgeABgdQADhbAYhWIgQAEIgeAAQgkgFgCgoQgEAHgIAAIgRABQgOAAgMgKQgMgLAAgPQAAgDABgDIABgGQgcAIgQgNQgPgMgBgWIADgJQAHgNAJgMIARgXQgJgeAVhLQAUhLDKgOQKBCrIHieIBfAUQBdAUATA2QASA0gQAaQAPASAMAQIAMARQAJAWgGANQgHAMgNACQgOADgJgFIgMgIQAIAVgUATQgQAPgPAAQgGAAgMgFQgNgHgEgFQgJAVgGAJQgLAPgUAAQgDAAgMgFIgOgFIgDACIAEAQQAcBjACBmQAAAUgBAUIgBATQFRCxDEExIACADIAHALQAtBJAmBQQAOANABADIAEAQQACAOgHAKQgJAMgPAAQgNAAgPgKQgQgLAAgLQgIAkgEAHQgKARgYAAQgTAAgEgGQgGgNgJgPIgBgBIAAACIgCABQgJA+g1AAQgLAAgNgLQgMgKgFgOQACAUgcATQgZAQgVAAQgSAAgEgBQgKgEgIgSIgIAAQgCAOgLANQgSAVgZAAQgiAAgKgbQgDAWgQARQgQAQgWAAQgQAAgMgMQgEgDgSgXQgEAPgSATQgUAYgRAAQgOAAgOgNQgUgRgGgDQABAbgWAOQgSALgXAAQgkABgQgnIgBgKIgBAAIABAJIAAABIgCABQgCATgSAPQgTAQgYAAQgiAAgSgmIgEgDIgZAfQgQARgUAAQgQAAgVgOIgagVQgXA1guAAQgWAAgJgLgAnEK9IABAAIAAgCIgBACgAoBHiIADAAIABgEIgEAEgAodC6IACAAIgDgBIABABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.2,-77.6,250.6,155.3);
p.frameBounds = [rect];


(lib.dress_base14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AIpJ6Qg+BchchIQhkBSgyhJQhfBChBhAQhEBHhVhKQgsA4hqhDQg+A8hThKQhMAbg6guIgRBCQiZgZicgmQhygbhzgiQBxm8D+kbQABgYADgYQAOh8A2h3QgLh0hFg7QAsghA0giIAyANQITCDG7hgIAGgBQBCgPBAgTIABABQAmAZAiAaQhIA/gBB0QApBbASBdQAMA+ACA+QEMEYCNHPQiHApiKAdQhkAWhmAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.9,-70.1,210,140.3);
p.frameBounds = [rect];


(lib.dress_base13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AG4GVIhjiJQAGgLAFgRQARg3AAgTIAAgeQA0gJA1gKQBWgSBVgZIAKgEIABAUIAAAVQB5BkA/CLQiEgKiFBpQh5gWh4A6QA7geAvgugAhqHRQA2iRBrifQBSCBAbC6Qh1hAiZA1gAo4GBQhRhjiaAJQAnh7BihoIABgSQBXAbBXAUQBrAZBqAQQADAyAQAwIAEALIhnBxQAfAoAmAdQh4hHifAbgAHUm0QA6gOAdgLQAegMBKABQBJABA4A2QA4A2AuBLQAtBMgZA0QgZA0gPAAQhdBoh9ATIgGglQhxAYhzAQgAqPglIgEAYQhlAOh4hdQgqg1AEgrQAEgrAagyQAZgyBDhAQBEhACWgVQBAARA/AOIA9HOQiEgSiFggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.9,-48.1,183.9,96.3);
p.frameBounds = [rect];


(lib.dress_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("Ao9EfIgBAAQhFgEhHgLIgOgDQgngGgngJIg3gMIgIgCQg/gQhBgVIgLgEQBljLCpixIAzg1QB4AaB0ASQDJAfC/AKIBJiMIBLCRQCUADCXgYQCLgWCPgtQAkAiAhAjQBhBoBFBzQA8BjAnBsIABACIAEAMIgDgBQg+gZg+gUIgHgCQhBgVhAgQIgGgBIAAAAIgGgBQhGgRhFgKIgBAAQhHgKhGgEIgOgBQhHgDhFAEIgSABQhHAEhFALIgGABQguAHgtALIgsASIgNAFQhDAZhEARIgGACQhEARhGAKIgCAAQhFAJhFADIgBAAIgrAAQgwAAgxgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.9,-29,202,58.2);
p.frameBounds = [rect];


(lib.dress_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("Ap8FtIgGgeIgFgWQgPhSABhQQiZgWghg8QgGgLgEgKQgQglgBgqQgBgVACgVQAAgJACgIQAFgaALgaQAMgbAUgbQAQgXAXgXQBRhVCDhWQDrA/DbASQCYANCRgIQDVgNDEg8IACABQB3BQBMBPQAUAUAPAUIgBACIAFAFQARAXALAXQANAaAGAaQACAMABAMIACAjQgBAwgPAnIgIAQQgdA4ihA9QgCBBgMBDIgFAWQgBAGgBAWQkuAwk/AAQk+AAlSgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.6,-41.4,175.3,82.8);
p.frameBounds = [rect];


(lib.dress_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AiMH4Qg4gfgjAAQgZAAhDAdQhLAggUgBQgyABgxgwQgmglgagBQgOABguAWQg3AbgWAAQgtAAgugtQgqgqACghIAAgBIABgGIgBgDQAAgGAEgFIA7hHQgLgIgLgLQgqgqACghIAAgBIABgGIgBgDQAAgGAEgFIA/hLQgOgJgOgOQgqgqACgfIAAgBIABgGIgBgDQAAgGAEgEICei/IAAgUIAAgeIAAgBQAAhhAihyQABgEADgCQAEgEAEAAQJ3hsJ1BsQAEAAADAEQADACACAEQAhBvABB0IAAABIAAAJIAAAdICzC0QAEADABAFQAAAFgCAEQgpBXghANIAAAAIgCABIBLBKQADAEABAEQAAAFgCAEQgoBWggAPIBFBEQADAEABAEQAAAFgCAEQgpBZghANQgfANguAAQgVAAglgIQgggHgUAAQgmAAg9AfQhGAjgVgBQg0ABhIgjQhBgfgZAAQgtAAg2AhQg/Alg1AAIgBAAQgsAAg+gig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-53.8,170.1,107.7);
p.frameBounds = [rect];


(lib.dress_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("ACGImQg9gwgJgZQhIAwgSAJQg7AjhgAAQhgAAijiJQhUAmgQAHQg9AXg2AAQhcAAhVg3Qg2gjgZgqIByjRIAKgTIAKgRQBLiXBJjwQApiVBRizQIPB9G8hoQBjDMAqCjQAIAgAHAfQAlCKBFCHIAaAyQBGB+BaBvQgcA8hNAvQhPAuhNgEQhOgEg4gYIgogTQgfAggnAZQgmAXhYAAQhXAAg8gvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.3,-59.7,182.6,119.5);
p.frameBounds = [rect];


(lib.dress_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AAXE+Ig/BSQg3gCg3gFQkQgYkNhSIgsgOIBNhOQgDhdAThbIgKgCQgPAIgIAAQgOAAgQgPQgRgOAAgRQAAgIAEgSIgUATQgRAPgMAAQgRAAgLgNQgKgLAAgOQAAgLAFgJIAJgKIABgCIgCAAQgEAEgUAJQgSAKgDgBQgNAAgMgMQgNgNAAgNQAAgKAKgPQAFgHASgMIgBAAQAKgRgHgYQgHgZA7hQQA7hQCfgZIBMATIBAAPQIuB4HOiMIBVAbQBTAaAmA6QAlA7AAAXQAAAWAGALQAmAngBAZQgBAYgeAFQgfAGgHgHIgYgfQADAGAHAJQAFAHAAAKIAAACQAAARgGAQQgGAPgVADQgVADgNgSQgOgRgEgHIAAgBQAAgFgFgKIAAgCQgBAGAGAMQAAAXgKASQgNAXgcAAQgHABgDgCIgDgBIgFgGIACAIQAZB2gKB6IBDBFIgyANQj0A5jxALQg3ADg3ABgArOg3IABgBIAAgDIgBAEIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.6,-40.3,175.3,80.6);
p.frameBounds = [rect];


(lib.dress_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("ABGJiQgegVgCgfIgBgDIAAADQgMAYgOAPQgZAggfAAQgWgBgWgeQgTgagIgdQgKAlgQARQgTAVgjABQgYgBgSggQgSgqgMgWQgRAVgLAKQgXAVgfAAQgvAAgQghQgJgSgDgxIAAgFIAAAFQgJAQgaANQgYALgVgBQgcAAgXgZQgTgXAAgaQAAgZAEgKIgEAAQgJAHgaAQQgdAQgJAAQgWAAgVgOQgZgTAAgdQAAgGAIgSQAHgSAAgKQgmAigiAAQgWAAgPgOQgPgPgBgXQAVgvgBgLQgTARgIACQgDABgdAAQgfAAgUgOQgTgQAAgZQgBgFALgXQANgZAMgGIAAgBIDgiQIgTAAQg0gIgSgYQgQgZAAgaQgKAJgPAZQgGALgYgBQgYABgLgQQgKgOAAgcQAAgWAKgLQgYAKgegSQgfgRABgbQAAgZAMgOQANgMAjgKIADgBIAAAAQgCgcACgfQAFg9Atg+QAQgWAXgYQBShVCChWQKBCrIHidIACABQB4BPBLBPQAXAYARAXQAsA+AGBIQACAUgCAUIAKABQAYAJAQAQQAVAVgBAbQAAAYgZARQgWAPgYgBIgLgBIgDgBIgCAAIgGgDIAFAFIABACIACAFQACAFAAATQAAARgQAWQgQAagVAAQgSAAgPgMQgSgOgCgZQgIAigHARQgNAbgnAAQgGABgGgDQgGgCgFAAIAAgGIgGAAIgFAyIEUCuIAGAIIADgCIAAgBIgBgBIACABQASAHAFAGQALALAAAbQABAXgVASQgRAPgSgBQgRABgUgMQgVgLgMgRIAAAEQAGAGAHASQAIATAAAKQAAAWgQAPQgOAPgVAAQgXABgTgTQgRgVgFgGQAKAUgBAQQAAAdgTAUQgUAVgcAAQgVAAgOgOQgRgWgPgPQAUAogbAhQgZAhgnAAQgTgBgPgKQgVgUgTgOQADAkgSAbQgWAggpgBQgTAAgVgUQgXgVAAgSQgJAsgQAYQgVAfggABQgZgBgRgVQgKgOgOgjIgFgCIAAABQgHAUgOAYQgVAlgSABQgUAAgbgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.7,-62.9,191.4,125.8);
p.frameBounds = [rect];


(lib.dress_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("ACOJYIgOgJQgPgNgdglQAHgSgVgvIgUgrIgDgDIgCgEIgGgLQgSgfgSgYIgDgFQgbgjgggTQgRAKgfAcQgWASgaAaQgiAhgUAXIgIAJQgNAPgFAIIgOAZQgDAagaANQgWALgYAAIgCAAQgMAAgMgBQgdgGgSgQQgYgWgSg3QgPg0gchBIgEgKQgghJgYglIgCgBIgCgDIgCgEIgBAAQgGgEgyAaIgwAaIgEACIgFACIgGAEQg6AfghAXQgiAWgJANIACADIgDACQg6AAgJgDQgWgHAAgjQAAgLACgLQBQg5AvhDIA+hZQAqg+AUgfIASgfIANgYIABgGIAGAAIABgeQADggAFgfQADgQAFgVQAXheBRi/IAwhwIANADIA6ANIAiAHQAxAJAwAIQBBAKA+AHIADAAQA4AGA2ADIAYABIgTBVIAVA3IAJAZIhsE1IC8EWICqkCIhalJIAohkIgdhCIAbgBIA3gEIAygGIApgFIBFgLQAxgJAxgMIAXAkQAeAzAZAzIADAGQAUArAQAtIAJAZQATA4ALA6QAGAfAEAeQAIA7ABA7IAKAXIAEAJIASAiQAmBMArA0QAWAbAbAbIgMAYIgHgEQgqgTgHAEQAAANgIBSQgHBRAAAOIAAAKQgFAZgHATQgWA0gqAEIgHAAQgJAAgTgIIgNgFQgcgOgNgNQgTglgvgfQgRgMgVgLIgLgGQgpgUgngQIgKgEIgjgNIgHgCIgJgDIguA7IggAvQgtBDgDAoIAAAEIABANQgNAVgMAPQgZAdgZAAQgaAAgVgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.4,-61.1,178.8,122.3);
p.frameBounds = [rect];


(lib.dress_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AhnJ6QhMgOhUgkIgWgKQhZgogTgIIgBgBQg7gVgugBIgKAAQh2ABgdgHIgRgDQhBgShRg5IgHgGQhMg7gpgaIgNgIQgYgOgZgKQBKiaBbijQBvjHBdiAIAJgXIgTgzIgCgDQgRgsgSgoQgNgcgOgbQAygnA9goIAZAHIBGARIBCAPIAxAJQAyAJAxAIIA/AIIBSAIQAnAEAoACIA/ACIBCAAIA9gCIA9gDQAsgEArgFIBCgKIAigGIA3gKIBHgRIA/gSIABAAQBBAsA1AsQgnArgdArQgRAYgNAWIgOAaIAFAOQBTBtCVDsQCKDYA/CLIgMANQg0A4g6AsQguAjgxAbIgiASQhfAthnAEIgVABQhAAAgggIIgOgCQgagGgdAAQgbAAhFASQgoAJg2AQQg8ARgqALQg9APgWAAQgwAAgzgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.6,-64.4,201.3,128.8);
p.frameBounds = [rect];


(lib.dress_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("ArRGSIAzmHQACinBIigIBcjfQBgAXBeAQQglFcFwAfQFqAIg1l3QBVgNBRgUIBXDQQBICdACCjIAAAGIAAATIBFGVQlLBnlPAAQmBAAmIiKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.2,-54,144.5,108.1);
p.frameBounds = [rect];


(lib.dress_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("Ap6EaQgUidApiUQhahTiAgZQALgXARgXQAQgXAXgXQBRhVCDhWQKBCrIHieIACABQB3BQBMBPQAPAQAMAPQiAAEhFBoQBIDIgnDZQkPA8kTAAQl2AAl+hxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.2,-39.5,166.6,79.1);
p.frameBounds = [rect];


(lib.dress_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("AAqJXIhlgBQjjgDiEgTQiYgaiqgXIg0gHIAZh0QhwAHhwg/IBvppQAIg4Aog3QARgXAWgYQBShVCDhWQKACsIIieIABAAQB4BQBMBQQAWAXARAXQAoA3AIA2ICAJfQhnA1hugGIAcBmQgrAXguAMQhoAbhvARQjTAhj5AAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.2,-59.9,198.5,119.8);
p.frameBounds = [rect];


(lib.dress_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D393A").s().p("Ao6HgQggAIgeARQgnheA9hdQgUg7gMg6IgFgWIACgGIgDAAQgNhNAAhKQgqgIghgMQglgLgZgSQgXgQgOgTIgIgMQgRgagIgeQgJgkAEgqQABgSAGgSQALgrAggrQAQgXAXgYQBRhVCDhVQKBCrIHieIACABQB3BPBMBQQAXAXAQAXQASAZAMAYQARAlADAlQAFAwgNAnQgIAYgOAWIgGAHQgSAYghATQgaAOgkAKQgcAKgjAHQABBQgPBSIgFAWIgEAVQgLAwgRAwQA9BegnBdQgegQgggIQkGgkkFBQQgPgsgggoQguAtgMA8QkBhQkAAMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-54.8,175.1,109.8);
p.frameBounds = [rect];


(lib.decor_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_title_img();
	this.instance.setTransform(-100,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-105,200,210);
p.frameBounds = [rect];


(lib.crown28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown28_img();
	this.instance.setTransform(-187.8,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187.8,-97,376,194);
p.frameBounds = [rect];


(lib.crown27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown27_img();
	this.instance.setTransform(-62.3,-57.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.3,-57.9,125,116);
p.frameBounds = [rect];


(lib.crown26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown26_img();
	this.instance.setTransform(-74.2,-70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.2,-70.8,149,142);
p.frameBounds = [rect];


(lib.crown25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown25_img();
	this.instance.setTransform(-48.2,-49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-49.7,97,99);
p.frameBounds = [rect];


(lib.crown24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown24_img();
	this.instance.setTransform(-102.7,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.7,-36,206,72);
p.frameBounds = [rect];


(lib.crown23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown23_img();
	this.instance.setTransform(-173.7,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173.7,-107,348,214);
p.frameBounds = [rect];


(lib.crown22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown22_img();
	this.instance.setTransform(-126,-54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126,-54.4,252,109);
p.frameBounds = [rect];


(lib.crown21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown21_img();
	this.instance.setTransform(-43,-42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-42.1,86,84);
p.frameBounds = [rect];


(lib.crown20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown20_img();
	this.instance.setTransform(-97,-37.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-37.3,194,75);
p.frameBounds = [rect];


(lib.crown19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown19_img();
	this.instance.setTransform(-57.5,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-51.1,115,102);
p.frameBounds = [rect];


(lib.crown18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown18_img();
	this.instance.setTransform(-129.6,-60.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.6,-60.9,259,122);
p.frameBounds = [rect];


(lib.crown17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown17_img();
	this.instance.setTransform(-225.2,-163.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225.2,-163.9,451,328);
p.frameBounds = [rect];


(lib.crown16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown16_img();
	this.instance.setTransform(-118.4,-77.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.4,-77.3,237,155);
p.frameBounds = [rect];


(lib.crown15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown15_img();
	this.instance.setTransform(-139.2,-52.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.2,-52.3,279,105);
p.frameBounds = [rect];


(lib.crown14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown14_img();
	this.instance.setTransform(-65.8,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.8,-47.3,132,95);
p.frameBounds = [rect];


(lib.crown13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown13_img();
	this.instance.setTransform(-130.5,-73.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.5,-73.2,261,146);
p.frameBounds = [rect];


(lib.crown12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown12_img();
	this.instance.setTransform(-120.1,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.1,-46,240,92);
p.frameBounds = [rect];


(lib.crown11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown11_img();
	this.instance.setTransform(-82,-81.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-81.1,165,162);
p.frameBounds = [rect];


(lib.crown10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown10_img();
	this.instance.setTransform(-75.5,-69.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,-69.4,153,139);
p.frameBounds = [rect];


(lib.crown9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown9_img();
	this.instance.setTransform(-65.8,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.8,-42.2,132,84);
p.frameBounds = [rect];


(lib.crown8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown8_img();
	this.instance.setTransform(-57.1,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.1,-53,114,106);
p.frameBounds = [rect];


(lib.crown7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown7_img();
	this.instance.setTransform(-57.1,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.1,-53,114,106);
p.frameBounds = [rect];


(lib.crown6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown6_img();
	this.instance.setTransform(-139.3,-99.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.3,-99.6,278,200);
p.frameBounds = [rect];


(lib.crown5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.crown5_img();
	this.instance.setTransform(-40.2,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-38.5,81,77);
p.frameBounds = [rect];


(lib.crown4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.crown4_img();
	this.instance.setTransform(-87.6,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.6,-59.8,175,120);
p.frameBounds = [rect];


(lib.crown3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.crown3_img();
	this.instance.setTransform(-163.9,-139.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.9,-139.3,327,268);
p.frameBounds = [rect];


(lib.crown2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown2_img();
	this.instance.setTransform(-71.5,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-51.1,143,102);
p.frameBounds = [rect];


(lib.crown1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown1_img();
	this.instance.setTransform(-53.4,-49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.4,-49.2,107,99);
p.frameBounds = [rect];


(lib.color_picker_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_picker_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,320,320);
p.frameBounds = [rect];


(lib.collar_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.collar_decor12_img();
	this.instance.setTransform(-142.6,-51.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.6,-51.2,285,103);
p.frameBounds = [rect];


(lib.collar_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.collar_decor11_img();
	this.instance.setTransform(-87.4,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.4,-24.6,175,64);
p.frameBounds = [rect];


(lib.collar_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.collar_decor10_img();
	this.instance.setTransform(-87.4,-33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.4,-33.9,175,68);
p.frameBounds = [rect];


(lib.collar_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.collar_decor9_img();
	this.instance.setTransform(-122.2,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.2,-37.5,244,75);
p.frameBounds = [rect];


(lib.collar_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.collar_decor8_img();
	this.instance.setTransform(-122.2,-69.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.2,-69.2,244,118);
p.frameBounds = [rect];


(lib.collar_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.collar_decor7_img();
	this.instance.setTransform(-110.1,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.1,-21.5,220,43);
p.frameBounds = [rect];


(lib.collar_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.collar_decor6_img();
	this.instance.setTransform(-122.2,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.2,-37.5,244,75);
p.frameBounds = [rect];


(lib.collar_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.collar_decor5_img();
	this.instance.setTransform(-74.9,-23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.9,-23.4,150,47);
p.frameBounds = [rect];


(lib.collar_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.collar_decor4_img();
	this.instance.setTransform(-84.4,-39.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.4,-39.7,169,79);
p.frameBounds = [rect];


(lib.collar_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.collar_decor3_img();
	this.instance.setTransform(-129.1,-57.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.1,-57.6,258,115);
p.frameBounds = [rect];


(lib.collar_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.collar_decor2_img();
	this.instance.setTransform(-122.2,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.2,-37.5,244,75);
p.frameBounds = [rect];


(lib.collar_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.collar_decor1_img();
	this.instance.setTransform(-122.2,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.2,-37.5,244,75);
p.frameBounds = [rect];


(lib.collar_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("AuMHLQikg0hjAAQhvAAhMAMIAAAAQgbAEgVAGQgFABgFgCQgFgDgCgEQgDgFACgGQAWhVA5hqIAAAAQAXgrAcgsIAAAAQBAhmBWhiIABAAQEklUFRhmQAEgCAEACQE3BYEtADIAKAAQEaABEUhIQAEgCAEACQH8CXDfGuQAIALADAMIABABIABAMQAAAngiAcIAAAAQgaAVg/AZIgBAAQjBA/mfBjQgFABgFgCQgEgDgDgEQgCgFABgFIAiidQhMApg8AnQgEACgFAAQgGAAgDgEIgigeIAAAAQhZhVhWhtQjHj9gqjLQg3A3gSAOIAAAAQhOBBiDBAQgsAWieAcQibAcjfAQIAAAAIgTABIAPA5QACAFgDAFQgCAFgFADQgwAXACBdQA5ClCtgzQAEgCAEACQAEAAADADQADADABAEIAoCWQABAFgBAEQgCAEgEADQgcAXgLBNQgBAGgEADQgEAEgGAAIgUAAIAAAAQiFAAiqg1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.6,-51.2,285.3,102.5);
p.frameBounds = [rect];


(lib.collar_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("ADlEfQgvAAgZgmQgHgKgIgUIgGANIgCACQgLASgqAAQgfAAgegXQgegaABgaIAAgBQgGAQgNAPIAAAAQgaAegmAAQgmAAgQgRQgHgGgHgPIgDAFIAAAAQgcAygfgCQgkAAgZgaIAAAAQgMgMgUgkIgLANQggAlgngBQgsAAgZgmQgNgUgGgaQgJALgGAEQgRAOgeAAQgPABgegSIAAAAQgrgZABgpQgBgDAEgLIgJAFIAAAAQgaAMgSAAQgdAAgZgTQgfgXAAgpIABgbQgIACgKAAQgoAAgXgZQgYgZAAgfQAAgcAIgPIAAgBQAIgPATgNIAAAAQAYgPAMAGIAAAAIAJACIAEABICuhtIAGgCIAHAAQE+BdEdAHIACAAQEyAHERhbQADgBADAAQAEAAADACICwBzQAOgMATAAQAfAAAVAaIAAgBQASAXAAAdQABAhglAbQgfAXgcAAQgFAAgLgDIABAaQAABVhTAAQgQAAgRgIIABAZQAAAmgdAeQgeAegiAAQgmAAgegYIAAAAQgLgIgKgMQgGAkgHANIAAAAQgUAogwAAQgsAAgPgSIgBgCIgTgfIgKAVIAAAAQgeA3gjAAIgDAAgAgECTIAAAHQAEgPANgPIABAAIAVgXIgii+IghC0IAEADIgBAAQAaAbgBAag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.4,-28.7,174.9,57.5);
p.frameBounds = [rect];


(lib.collar_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("ADlEfQgvAAgZgmQgHgKgIgUIgGANIgCACQgLASgqAAQgfAAgegXQgegaABgaIAAgBQgGAQgNAPIAAAAQgaAegmAAQgmAAgQgRQgHgGgHgPIgDAFIAAAAQgcAygfgCQgkAAgZgaIAAAAQgMgMgUgkIgLANQggAlgngBQgsAAgZgmQgNgUgGgaQgJALgGAEQgRAOgeAAQgPABgegSIAAAAQgrgZABgpQgBgDAEgLIgJAFIAAAAQgaAMgSAAQgdAAgZgTQgfgXAAgpIABgbQgIACgKAAQgoAAgXgZQgYgZAAgfQAAgcAIgPIAAgBQAIgPATgNIAAAAQAYgPAMAGIAAAAIAJACIAEABICuhtIAGgCIAHAAQE+BdEdAHIACAAQEyAHERhbQADgBADAAQAEAAADACICwBzQAOgMATAAQAfAAAVAaIAAgBQASAXAAAdQABAhglAbQgfAXgcAAQgFAAgLgDIABAaQAABVhTAAQgQAAgRgIIABAZQAAAmgdAeQgeAegiAAQgmAAgegYIAAAAQgLgIgKgMQgGAkgHANIAAAAQgUAogwAAQgsAAgPgSIgBgCIgTgfIgKAVIAAAAQgeA3gjAAIgDAAgAgECTIAAAHQAEgPANgPIABAAIAVgXIgii+IghC0IAEADIgBAAQAaAbgBAag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.4,-28.7,174.9,57.5);
p.frameBounds = [rect];


(lib.collar_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("AoYFEQgjgjAAgxQAAgyAjgkQAegcAngGIhFj4Im4AAQAKAWAAAbQAAAygjAhQgjAkgygBQgxABgkgkQgjghAAgyQAAgxAjgjQAkgkAxABQAtgBAhAdIAHAHIgGgIIEFi8QMTEELvkEIDCDDQAHgLAJgJQAjgiAyAAQAsAAAhAcIAHAGQAQARAJASQALAYAAAbQAAAxgkAjQgjAhgxAAQgyAAgjghQgjgjAAgxIAAgJImzgVIhGDuQAjAFAbAXIAHAGQAQARAJATQALAXAAAbQAAAxgkAjQgjAkgxAAQgyAAgjgkQgjgjAAgxQAAgyAjgkIAIgHIlSjEImaDLIAFAEIAHAGQAQAQAJATQAKAYAAAbQAAAxgjAjQgjAjgyABQgxgBgkgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.7,-36,241.5,72);
p.frameBounds = [rect];


(lib.collar_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("AoYFEQgjgjAAgxQAAgyAjgkQAegcAngGIhFj4Im4AAQAKAWAAAbQAAAygjAhQgjAkgygBQgxABgkgkQgjghAAgyQAAgxAjgjQAkgkAxABQAtgBAhAdIAHAHIgGgIIEFi8QMTEELvkEIDCDDQAHgLAJgJQAjgiAyAAQAsAAAhAcIAHAGQAQARAJASQALAYAAAbQAAAxgkAjQgjAhgxAAQgyAAgjghQgjgjAAgxIAAgJImzgVIhGDuQAjAFAbAXIAHAGQAQARAJATQALAXAAAbQAAAxgkAjQgjAkgxAAQgyAAgjgkQgjgjAAgxQAAgyAjgkIAIgHIlSjEImaDLIAFAEIAHAGQAQAQAJATQAKAYAAAbQAAAxgjAjQgjAjgyABQgxgBgkgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.7,-36,241.5,72);
p.frameBounds = [rect];


(lib.collar_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("AJ3DPQiCgIiAgNQh/gOg9gJQhzgShLgfQhJAchqAQQg9AJh/AOQiAANiCAHQiDAJhMgBQhRABhOglQhogwABhkQgBgpAthNQAkg+AegZQADgDAFgBQAEAAAEACQHxD9HSAEIAFAAIAOAAIADAAQHygDHJkbQAEgCAEAAQAEgBADACQAEACACAEIBEB2QAtBNgBAoQABBlhoAwQhOAlhRAAQhMAAiDgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.1,-21.5,220.2,43);
p.frameBounds = [rect];


(lib.collar_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("AoYFEQgjgjAAgxQAAgyAjgkQAegcAngGIhFj4Im4AAQAKAWAAAbQAAAygjAhQgjAkgygBQgxABgkgkQgjghAAgyQAAgxAjgjQAkgkAxABQAtgBAhAdIAHAHIgGgIIEFi8QMTEELvkEIDCDDQAHgLAJgJQAjgiAyAAQAsAAAhAcIAHAGQAQARAJASQALAYAAAbQAAAxgkAjQgjAhgxAAQgyAAgjghQgjgjAAgxIAAgJImzgVIhGDuQAjAFAbAXIAHAGQAQARAJATQALAXAAAbQAAAxgkAjQgjAkgxAAQgyAAgjgkQgjgjAAgxQAAgyAjgkIAIgHIlSjEImaDLIAFAEIAHAGQAQAQAJATQAKAYAAAbQAAAxgjAjQgjAjgyABQgxgBgkgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.7,-36,241.5,72);
p.frameBounds = [rect];


(lib.collar_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("AmTDJIAAAAIlUk0QgEgDgBgEQgBgFACgEQABgEAEgDICMhkIAGgDQADAAAEABQDgA9DcAPIAAAAIAKABIABAAQBqAHBngEIABAAQD8gJD3hHQADgBAEAAQADABADACICbBzQAEADABAEQACAFgBAEQgCAFgDADIlPEbIAAAAQhJA9hchaQhQhQhijNQheADhhgFQg2DghBBSQgkAvgoAEIgLABQgjAAglghg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.9,-23.4,150,46.9);
p.frameBounds = [rect];


(lib.collar_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("AI3FMQgUgGgegPIAAAAQglgVg1glQhJg0gXgXQgTAEgYAAQhdAAg0hZQgYgqgjhVQgRANgWAAQgTAAgQgKQggBSgYAqQg0BZhdAAQgbAAgVgFQgaAYhBAuQg0AlglAUIAAAAQgeAQgVAFQgDABgEgBQgEgBgDgDIgtgtQgEgEAAgGQgBgGAEgEQAEgFAGAAQAOgCASgHQAngQA3gkQBCgrASgXQgLgYAAghQAAgVAFgUQghAMgZgGQghgHgVghQgoAbgkgIQglgHghgtQgzAagjgIQgmgIgUgrQgxAIgfgUQgjgVgKg4QgBgEACgEQABgEADgDQAEgCAEgBQCGgQA2h9QACgFAFgCQAFgDAGACQFUBdETAIIgGAAIAJAAIAJABIAAAAIAaABIATABIAVgBIgNgBIAPAAIAIAAIABAAIADAAIACAAIABAAIADAAIADAAIADAAQECgGEGhRQAFgCAFACQAFADADAFQAyBqCWApQAFABADAEQAEAFgBAFQgEA7gfAXQgbAWgwgIQguA+hWgeQgYAwgoAJQgnALg3geIgcAbIACATQAAAjgNAYQANAWBKAxQA3AkAnAPQASAHAOACQAGABAEAEQADAFAAAGQAAAFgEAFIgtAtQgDACgEACIgEAAIgEAAgAEMBGQAVgCARgRQAJgLgDgMQgiAUgqgBQAUAWAMABgAjRAzQARARAVACQAKgBASgRQgrADgdgeQgEAOAKAMgAAljVIAIgBIgHgBQgFACAEAAgAAQjcIgGABIAJAAIAMgBIARgDIAAAAIAJgCIgpAFgAA7jhQBOAEgcgCIgigEIAAAAIgQACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.4,-33.2,169,66.5);
p.frameBounds = [rect];


(lib.collar_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("ArMI/Qhpgdhxg6QjXhuiJipQgEgFAAgGQABgGAEgEQBOhECPiMIAAAAQBuhvBHhMQAEgDAEgBQAFgBAEACQAFACACAEQADAFgBAEIgBAQQABApAbAsQACADAAAFQAAAFgDAEQgNASgUAuQgTApAKApQAKApA2ApIAAAAQA1AoB4gkQAEgCAFACQAEABADAEQADAEAAAFQABA5ASA4IAGATIABAGIgCAGQgNAYgJAeQgNAsAAAoQAAAJAJAoIADAQQACAGgDAFQgDAGgGABQgeAKgeASIAAgBIgRAMIgGACIgDABIgEgBgAJtFWQgFgCgCgEQgCgFABgEIAYikQh3BKhqBiQgFAEgGAAQgGgBgFgEQjFjXhbj4QgxiGgOiRQgnBAgwAnQhJA4hUAAQh8AAhmhaQhQhEg8iBIAAAAIgIgRQgCgFACgGQABgGAGgDQAFgDAGACQE8BWEsACIABAAQEZAAENhIIABAAIABgBIAAAAIABAAIAFAAIACAAIACABQHwDKCvFoIACAFIgBAHIgBACIgBACIgCACQjFDqnLBXIgDABQgDAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.1,-57.6,258.3,115.2);
p.frameBounds = [rect];


(lib.collar_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("AoYFEQgjgjAAgxQAAgyAjgkQAegcAngGIhFj4Im4AAQAKAWAAAbQAAAygjAhQgjAkgygBQgxABgkgkQgjghAAgyQAAgxAjgjQAkgkAxABQAtgBAhAdIAHAHIgGgIIEFi8QMTEELvkEIDCDDQAHgLAJgJQAjgiAyAAQAsAAAhAcIAHAGQAQARAJASQALAYAAAbQAAAxgkAjQgjAhgxAAQgyAAgjghQgjgjAAgxIAAgJImzgVIhGDuQAjAFAbAXIAHAGQAQARAJATQALAXAAAbQAAAxgkAjQgjAkgxAAQgyAAgjgkQgjgjAAgxQAAgyAjgkIAIgHIlSjEImaDLIAFAEIAHAGQAQAQAJATQAKAYAAAbQAAAxgjAjQgjAjgyABQgxgBgkgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.7,-36,241.5,72);
p.frameBounds = [rect];


(lib.collar_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9BAF").s().p("AoYFEQgjgjAAgxQAAgyAjgkQAegcAngGIhFj4Im4AAQAKAWAAAbQAAAygjAhQgjAkgygBQgxABgkgkQgjghAAgyQAAgxAjgjQAkgkAxABQAtgBAhAdIAHAHIgGgIIEFi8QMTEELvkEIDCDDQAHgLAJgJQAjgiAyAAQAsAAAhAcIAHAGQAQARAJASQALAYAAAbQAAAxgkAjQgjAhgxAAQgyAAgjghQgjgjAAgxIAAgJImzgVIhGDuQAjAFAbAXIAHAGQAQARAJATQALAXAAAbQAAAxgkAjQgjAkgxAAQgyAAgjgkQgjgjAAgxQAAgyAjgkIAIgHIlSjEImaDLIAFAEIAHAGQAQAQAJATQAKAYAAAbQAAAxgjAjQgjAjgyABQgxgBgkgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.7,-36,241.5,72);
p.frameBounds = [rect];


(lib.clouds_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.clouds_img();
	this.instance.setTransform(-400,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-165,800,330);
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
	this.instance.setTransform(-28.1,-28.5,0.867,0.867,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.1,-33,56.4,56.4);
p.frameBounds = [rect, null];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-190,-110);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-180,-104,0.947,0.947);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-190,-110);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-195,-110);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-191,-110);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-190,-110);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-197,-110);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-192,-110);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-197,-110);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-208,-110);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-193,-110);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-193,-110);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-193,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-110,380,220);
p.frameBounds = [rect, new cjs.Rectangle(-180,-104,360,208.4), new cjs.Rectangle(-190,-110,380,220), new cjs.Rectangle(-195,-110,380,220), new cjs.Rectangle(-191,-110,380,220), new cjs.Rectangle(-190,-110,380,220), new cjs.Rectangle(-197,-110,380,220), new cjs.Rectangle(-192,-110,380,220), new cjs.Rectangle(-197,-110,380,220), new cjs.Rectangle(-208,-110,380,220), rect=new cjs.Rectangle(-193,-110,380,220), rect, rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.body_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body_decor_img();
	this.instance.setTransform(-139.4,-179.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.4,-179.7,279,359);
p.frameBounds = [rect];


(lib.body_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADSbSQingpgPhTQgRhQAZg1QADhVgug5QgwA6ADBUQAaA1gRBQQgQBTinApQidAnhzgIQh1gIhKg3QhNg5gGhUQgHhUAvg6QAWgcA3gdQgfhrA3hIQgSg6gKg5IgDABQgMAFg9AGQhAAFg6grIAAAAQhCgwABhJQAAgzAgg7QAKgSAKgNQgagzAMhMQAMhXBOhVQALgMAXgTQA6gxCJhgQj1hMjDiTQmVkvAinaQAgnaGOk3QGLk2ItAAQIwAAGME2QGNE3AUHOQAUHMmFE/QjEChj+BPQCABbA4AvIABAAQAWATALAMQBPBVAMBXQALBNgaAyQALANAJASIAAAAQAhA7AAAzQAABJhCAwQg6Arg/gFQg9gGgNgFIgDgBQgKA5gRA6QA2BIgfBrQA3AdAWAcQAwA6gHBUQgGBUhOA5QhKA3h1AIIgnACQhlAAiEghgANOMlIAAAAIAAAAIACgCIgCACgAIbFHIAAABIAAgCIAAABg");
	this.shape.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138,-176.9,276.1,355.8);
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


(lib.bg_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_panel_img();
	this.instance.setTransform(-5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
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


(lib.accessory20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory20_img();
	this.instance.setTransform(-36.8,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.8,-38,74,76);
p.frameBounds = [rect];


(lib.accessory19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory19_img();
	this.instance.setTransform(-35.7,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.7,-27.5,72,55);
p.frameBounds = [rect];


(lib.accessory18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory18_img();
	this.instance.setTransform(-46.6,-54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.6,-54.4,93,109);
p.frameBounds = [rect];


(lib.accessory17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory17_img();
	this.instance.setTransform(-117,-47.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-47.7,234,96);
p.frameBounds = [rect];


(lib.accessory16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory16_img();
	this.instance.setTransform(-33.1,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.1,-45.6,66,91);
p.frameBounds = [rect];


(lib.accessory15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory15_img();
	this.instance.setTransform(-70.8,-51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.8,-51.6,142,105);
p.frameBounds = [rect];


(lib.accessory14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory14_img();
	this.instance.setTransform(-36.5,-74.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.5,-74.1,73,123);
p.frameBounds = [rect];


(lib.accessory13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory13_img();
	this.instance.setTransform(-102.4,-32.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.4,-32.9,205,66);
p.frameBounds = [rect];


(lib.accessory12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory12_img();
	this.instance.setTransform(-79.7,-125.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.7,-125.7,160,252);
p.frameBounds = [rect];


(lib.accessory11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory11_img();
	this.instance.setTransform(-44.4,-63.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-63.7,89,127);
p.frameBounds = [rect];


(lib.accessory10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory10_img();
	this.instance.setTransform(-69,-69.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-69.4,138,139);
p.frameBounds = [rect];


(lib.accessory9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory9_img();
	this.instance.setTransform(-28.5,-31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.5,-31.7,57,64);
p.frameBounds = [rect];


(lib.accessory8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory8_img();
	this.instance.setTransform(-42.5,-42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-42.6,85,85);
p.frameBounds = [rect];


(lib.accessory7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory7_img();
	this.instance.setTransform(-38.4,-40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.4,-40.2,77,81);
p.frameBounds = [rect];


(lib.accessory6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory6_img();
	this.instance.setTransform(-52.8,-63.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.8,-63.4,106,127);
p.frameBounds = [rect];


(lib.accessory5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory5_img();
	this.instance.setTransform(-39.9,-59.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.9,-59.1,80,94);
p.frameBounds = [rect];


(lib.accessory4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory4_img();
	this.instance.setTransform(-33.1,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.1,-68,68,138);
p.frameBounds = [rect];


(lib.accessory3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory3_img();
	this.instance.setTransform(-49.9,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-73.5,100,147);
p.frameBounds = [rect];


(lib.accessory2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory2_img();
	this.instance.setTransform(-140.4,-85.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.4,-85.1,281,170);
p.frameBounds = [rect];


(lib.accessory1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory1_img();
	this.instance.setTransform(-32.5,-48.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-48.7,65,98);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BCEAFB").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,600,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,600,600);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect, rect, rect];


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
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11});

	// graph
	this.instance = new lib.title_reset_en_img();
	this.instance.setTransform(-90,-40);

	this.instance_1 = new lib.title_reset_ru_img();
	this.instance_1.setTransform(-90,-40);

	this.instance_2 = new lib.title_reset_de_img();
	this.instance_2.setTransform(-90,-40);

	this.instance_3 = new lib.title_reset_fr_img();
	this.instance_3.setTransform(-90,-40);

	this.instance_4 = new lib.title_reset_it_img();
	this.instance_4.setTransform(-90,-40);

	this.instance_5 = new lib.title_reset_es_img();
	this.instance_5.setTransform(-90,-40);

	this.instance_6 = new lib.title_reset_pt_img();
	this.instance_6.setTransform(-90,-40);

	this.instance_7 = new lib.title_reset_tr_img();
	this.instance_7.setTransform(-90,-40);

	this.instance_8 = new lib.title_reset_ja_img();
	this.instance_8.setTransform(-90,-40);

	this.instance_9 = new lib.title_reset_hi_img();
	this.instance_9.setTransform(-90,-40);

	this.instance_10 = new lib.title_reset_ar_img();
	this.instance_10.setTransform(-90,-40);

	this.instance_11 = new lib.title_reset_id_img();
	this.instance_11.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_random_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11});

	// graph
	this.instance = new lib.title_random_en_img();
	this.instance.setTransform(-90,-40);

	this.instance_1 = new lib.title_random_ru_img();
	this.instance_1.setTransform(-90,-40);

	this.instance_2 = new lib.title_random_de_img();
	this.instance_2.setTransform(-90,-40);

	this.instance_3 = new lib.title_random_fr_img();
	this.instance_3.setTransform(-90,-40);

	this.instance_4 = new lib.title_random_it_img();
	this.instance_4.setTransform(-90,-40);

	this.instance_5 = new lib.title_random_es_img();
	this.instance_5.setTransform(-90,-40);

	this.instance_6 = new lib.title_random_pt_img();
	this.instance_6.setTransform(-90,-40);

	this.instance_7 = new lib.title_random_tr_img();
	this.instance_7.setTransform(-90,-40);

	this.instance_8 = new lib.title_random_ja_img();
	this.instance_8.setTransform(-90,-40);

	this.instance_9 = new lib.title_random_hi_img();
	this.instance_9.setTransform(-90,-40);

	this.instance_10 = new lib.title_random_ar_img();
	this.instance_10.setTransform(-90,-40);

	this.instance_11 = new lib.title_random_id_img();
	this.instance_11.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(0,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

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
	this.shape.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,480.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.wings_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.wings1();

	this.instance_1 = new lib.wings2();
	this.instance_1.setTransform(-3.9,15.8);

	this.instance_2 = new lib.wings3();

	this.instance_3 = new lib.wings4();
	this.instance_3.setTransform(-0.4,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.3,-40,371,80);
p.frameBounds = [rect, new cjs.Rectangle(-142.8,-21.1,278,74), new cjs.Rectangle(-185.3,-40,371,80), new cjs.Rectangle(-149.7,-39.3,299,124), null];


(lib.wings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.6,-26.6,53.3,53.3);
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
p.nominalBounds = rect = new cjs.Rectangle(-190,-110,380,220);
p.frameBounds = [rect];


(lib.tail4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tail_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.6,-28.8,57.2,58);
p.frameBounds = [rect];


(lib.tail3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tail_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-29.3,87.5,59);
p.frameBounds = [rect];


(lib.tail2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tail_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.4,-22.4,85.1,45);
p.frameBounds = [rect];


(lib.tail1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tail_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale_base1();
	this.body_mc.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.7,-27.1,89.4,54.3);
p.frameBounds = [rect];


(lib.tail_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.tail1();

	this.body_2 = new lib.tail2();
	this.body_2.setTransform(3.6,-5.2);

	this.body_3 = new lib.tail3();
	this.body_3.setTransform(4.5,-13.2);

	this.body_4 = new lib.tail4();
	this.body_4.setTransform(-15.4,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.7,-27.1,89.4,54.3);
p.frameBounds = [rect, new cjs.Rectangle(-38.9,-27.6,85.1,45), new cjs.Rectangle(-39.2,-42.5,87.5,59), new cjs.Rectangle(-44,-23.5,57.2,58), null];


(lib.tail_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.6,-26.6,53.3,53.3);
p.frameBounds = [rect];


(lib.podium_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shadow_hero_mc();
	this.instance.setTransform(0,-45.1,1,0.364,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.podium_img();
	this.instance_1.setTransform(-180,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-85,360,155);
p.frameBounds = [rect];


(lib.option_tail_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_tail_4_img();
	this.instance.setTransform(-40,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_hero_mc();
	this.instance_1.setTransform(0,30,0.455,0.165,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_tail_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_tail_3_img();
	this.instance.setTransform(-38,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_hero_mc();
	this.instance_1.setTransform(0,30,0.455,0.165,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_tail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_tail_2_img();
	this.instance.setTransform(-47,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_hero_mc();
	this.instance_1.setTransform(0,30,0.455,0.165,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_tail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_tail_1_img();
	this.instance.setTransform(-45,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_hero_mc();
	this.instance_1.setTransform(0,30,0.455,0.165,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_12_img();
	this.instance.setTransform(-70,-61,0.878,0.878);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_11_img();
	this.instance.setTransform(-67,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_10_img();
	this.instance.setTransform(-67,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_9_img();
	this.instance.setTransform(-91,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-98,184.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_8_img();
	this.instance.setTransform(-50,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_7_img();
	this.instance.setTransform(-67,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_6_img();
	this.instance.setTransform(-67,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_5_img();
	this.instance.setTransform(-67,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_4_img();
	this.instance.setTransform(-65,-36,0.903,0.903);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_3_img();
	this.instance.setTransform(-67,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_2_img();
	this.instance.setTransform(-51,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_fringe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_mutch_1_img();
	this.instance.setTransform(-67,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face16();
	this.instance.setTransform(-0.6,-3.7,0.724,0.723,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face15();
	this.instance.setTransform(-0.2,-2.4,0.8,0.8,0,0,0,-0.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face14();
	this.instance.setTransform(-0.4,3.9,0.775,0.774,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face13();
	this.instance.setTransform(-1.2,-1.3,0.775,0.774,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face12();
	this.instance.setTransform(0.5,3.6,0.733,0.733,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face11();
	this.instance.setTransform(-0.4,-3.1,0.698,0.697,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face10();
	this.instance.setTransform(0.5,2.9,0.781,0.781,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face9();
	this.instance.setTransform(-0.5,3,0.786,0.785,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face8();
	this.instance.setTransform(-0.6,1.3,0.803,0.803,0,0,0,-0.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face7();
	this.instance.setTransform(0.2,2.8,0.8,0.8,0,0,0,-0.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face6();
	this.instance.setTransform(0.1,-0.6,0.69,0.688,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face5();
	this.instance.setTransform(0.4,1.8,0.8,0.8,0,0,0,-0.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face4();
	this.instance.setTransform(0,3,0.724,0.723,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face3();
	this.instance.setTransform(-0.4,1.2,0.719,0.719,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face2();
	this.instance.setTransform(0,1.1,0.724,0.723,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_face_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.face1();
	this.instance.setTransform(0,2.2,0.724,0.723,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_20_img();
	this.instance.setTransform(-60,-49,0.93,0.93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_19_img();
	this.instance.setTransform(-65,-36,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_18_img();
	this.instance.setTransform(-60,-46,0.93,0.93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_17_img();
	this.instance.setTransform(-60,-38,0.938,0.938);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_16_img();
	this.instance.setTransform(-65,-45,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_15_img();
	this.instance.setTransform(-65,-40,0.73,0.73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_14_img();
	this.instance.setTransform(-65,-43,0.872,0.872);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_13_img();
	this.instance.setTransform(-65,-46,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_12_img();
	this.instance.setTransform(-65,-42,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_11_img();
	this.instance.setTransform(-62,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_10_img();
	this.instance.setTransform(-55,-34,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_9_img();
	this.instance.setTransform(-59,-38,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_8_img();
	this.instance.setTransform(-63,-47,0.822,0.822);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_7_img();
	this.instance.setTransform(-60,-38,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_6_img();
	this.instance.setTransform(-59,-34,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_5_img();
	this.instance.setTransform(-65,-33,0.765,0.764);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_4_img();
	this.instance.setTransform(-62,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_3_img();
	this.instance.setTransform(-60,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_2_img();
	this.instance.setTransform(-60,-34,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_dress_1_img();
	this.instance.setTransform(-62,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_12_img();
	this.instance.setTransform(-65,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_11_img();
	this.instance.setTransform(-63,-17,0.962,0.961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_10_img();
	this.instance.setTransform(-60,-21,0.923,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_9_img();
	this.instance.setTransform(-63,-12,0.962,0.961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_8_img();
	this.instance.setTransform(-63,-17,0.962,0.961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_7_img();
	this.instance.setTransform(-60,-8,0.923,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_6_img();
	this.instance.setTransform(-63,-14,0.962,0.961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_5_img();
	this.instance.setTransform(-60,-11,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_4_img();
	this.instance.setTransform(-60,-18,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_3_img();
	this.instance.setTransform(-65,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_2_img();
	this.instance.setTransform(-63,-14,0.962,0.961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_collar_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_collar_1_img();
	this.instance.setTransform(-63,-14,0.962,0.961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_16_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_15_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_14_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_13_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_12_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_11_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_10_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_9_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_8_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_7_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_6_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_5_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_4_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_3_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_2_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_bg_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_bg_1_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_wings_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_wings_4_img();
	this.instance.setTransform(-41,-55,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_wings_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_wings_3_img();
	this.instance.setTransform(-13.4,-75.5,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_wings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_wings_2_img();
	this.instance.setTransform(-4.7,-49.5,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_wings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_wings_1_img();
	this.instance.setTransform(-12.4,-73.5,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_28_img();
	this.instance.setTransform(-65,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown27_img();
	this.instance.setTransform(-61.3,-56.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown26_img();
	this.instance.setTransform(-50.9,-48.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown25_img();
	this.instance.setTransform(-48,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_24_img();
	this.instance.setTransform(-65,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_23_img();
	this.instance.setTransform(-63,-39,0.969,0.969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_22_img();
	this.instance.setTransform(-62,-24,0.954,0.954);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown21_img();
	this.instance.setTransform(-42,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_20_img();
	this.instance.setTransform(-34.7,-56.1,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown19_img();
	this.instance.setTransform(-40,-33,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_18_img();
	this.instance.setTransform(-60,-28,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_17_img();
	this.instance.setTransform(-65,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_16_img();
	this.instance.setTransform(-55,-34,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_15_img();
	this.instance.setTransform(-73.1,-3.8,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// crown14
	this.instance = new lib.crown14_img();
	this.instance.setTransform(-53,-34,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_13_img();
	this.instance.setTransform(-60,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_12_img();
	this.instance.setTransform(-68.2,-5.3,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown11_img();
	this.instance.setTransform(-59,-55,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown10_img();
	this.instance.setTransform(-55,-48,0.719,0.719);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown9_img();
	this.instance.setTransform(-55,-32,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown8_img();
	this.instance.setTransform(-55,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown7_img();
	this.instance.setTransform(-55,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_6_img();
	this.instance.setTransform(-65,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown5_img();
	this.instance.setTransform(-39,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown4_img();
	this.instance.setTransform(-60,-36,0.686,0.686);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_headdress_3_img();
	this.instance.setTransform(-65,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown2_img();
	this.instance.setTransform(-60,-41,0.839,0.839);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_head_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.crown1_img();
	this.instance.setTransform(-54,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory20_img();
	this.instance.setTransform(-36,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory19_img();
	this.instance.setTransform(-35,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory18_img();
	this.instance.setTransform(-49,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_accessory_17_img();
	this.instance.setTransform(-54.7,30.2,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory16_img();
	this.instance.setTransform(-34,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory15_img();
	this.instance.setTransform(-64,-46,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory14_img();
	this.instance.setTransform(-35,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_accessory_13_img();
	this.instance.setTransform(65,-18,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory12_img();
	this.instance.setTransform(-39,-60,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory11_img();
	this.instance.setTransform(-45,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory10_img();
	this.instance.setTransform(42.5,-86.9,1,1,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.3,-98,180.6,189.8);
p.frameBounds = [rect];


(lib.option_accessory_hand_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory9_img();
	this.instance.setTransform(-26,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory8_img();
	this.instance.setTransform(-43,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory7_img();
	this.instance.setTransform(-39,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory6_img();
	this.instance.setTransform(-57,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory5_img();
	this.instance.setTransform(-39,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory4_img();
	this.instance.setTransform(-23,-55,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory3_img();
	this.instance.setTransform(-40,-56,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_accessory_2_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
p.frameBounds = [rect];


(lib.option_accessory_hand_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.accessory1_img();
	this.instance.setTransform(-33,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-98,168.3,173.1);
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
p.nominalBounds = rect = new cjs.Rectangle(-130,-40,260,80);
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

	// animation
	this.instance = new lib.clouds_mc();
	this.instance.setTransform(400,620);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({y:600},15).to({y:620},15).wait(30).to({y:600},15).to({y:620},15).wait(1));

	// animation
	this.instance_1 = new lib.hero_main_1_mc();
	this.instance_1.setTransform(400,530);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({rotation:90},10).to({rotation:180},10).wait(40).to({rotation:270},10).to({rotation:360},10).wait(6));

	// animation
	this.instance_2 = new lib.hero_main_2_mc();
	this.instance_2.setTransform(400,600,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({rotation:270},10).to({rotation:360},10).wait(40).to({rotation:450},10).to({rotation:540},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,10,800,1251);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-18,800,1300.8), new cjs.Rectangle(0,-32.4,800,1320.1), new cjs.Rectangle(-66.4,-33.3,896.5,1308.9), new cjs.Rectangle(-138.1,-20.5,1018.8,1268.2), new cjs.Rectangle(-199.7,5.3,1121.5,1198.6), new cjs.Rectangle(-244.2,46.1,1192.4,1096.8), new cjs.Rectangle(-272.8,96.5,1234.3,975.3), new cjs.Rectangle(-285.9,159.8,1247.1,826), new cjs.Rectangle(-281.8,229.5,1229.2,664.4), new cjs.Rectangle(-261,308,1181,485), new cjs.Rectangle(-282.7,310.8,1230.8,515.7), new cjs.Rectangle(-287.6,219.9,1250.1,676.5), new cjs.Rectangle(-275.5,133.6,1238.9,826.5), new cjs.Rectangle(-247.7,61.9,1198.3,948.7), new cjs.Rectangle(-203.9,0.4,1128.5,1051.5), new cjs.Rectangle(-142.9,-44.2,1026.8,1122.4), new cjs.Rectangle(-71.8,-72.8,905.3,1164.4), new cjs.Rectangle(0,-85.9,800,1177.1), new cjs.Rectangle(0,-81.7,800,1159.2), rect=new cjs.Rectangle(0,-61,800,1111), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-82.7,800,1160.8), new cjs.Rectangle(0,-87.6,800,1180.1), new cjs.Rectangle(-30,-75.5,896.5,1168.9), new cjs.Rectangle(-80.6,-47.6,1018.7,1128.2), new cjs.Rectangle(-121.9,-3.8,1121.5,1058.5), new cjs.Rectangle(-148.3,57.1,1192.4,956.8), new cjs.Rectangle(-161.6,128.2,1234.4,835.3), new cjs.Rectangle(-161.2,214.2,1247.1,686), new cjs.Rectangle(-147.4,306.1,1229.2,524.4), new cjs.Rectangle(-120,312,1181,475), new cjs.Rectangle(-148,233.5,1230.8,654.5), new cjs.Rectangle(-162.4,163.6,1250.1,816.4), new cjs.Rectangle(-163.3,100,1238.9,966.5), new cjs.Rectangle(-150.5,49.4,1198.1,1088.7), new cjs.Rectangle(-124.7,8.1,1128.5,1191.5), new cjs.Rectangle(-83.9,-18.2,1026.8,1262.4), new cjs.Rectangle(-33.5,-31.5,905.3,1304.4), new cjs.Rectangle(0,-31.2,800,1317.1), new cjs.Rectangle(0,-17.4,800,1299.2), rect=new cjs.Rectangle(0,10,800,1251), rect, rect, rect, rect, rect];


(lib.hero_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.body_base();
	this.body_mc.setTransform(0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.4,-179.7,279,359);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.6,-26.6,53.3,53.3);
p.frameBounds = [rect];


(lib.hat12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base12();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210.8,-195.8,422,392);
p.frameBounds = [rect];


(lib.hat11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor9();
	this.instance.setTransform(-100.1,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base9();
	this.body_mc.setTransform(-100.1,11.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-327.2,-149.9,454.2,323);
p.frameBounds = [rect];


(lib.hat8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.8,-194.8,284,389.5);
p.frameBounds = [rect];


(lib.hat7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base6();
	this.body_mc.setTransform(0,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.2,-113.4,412.5,227);
p.frameBounds = [rect];


(lib.hat3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.8,-194.8,284,389.5);
p.frameBounds = [rect];


(lib.hat1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hat_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hat_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect];


(lib.hat_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.hat1();

	this.body_2 = new lib.hat2();
	this.body_2.setTransform(1.9,-33.8);

	this.body_3 = new lib.hat3();

	this.body_4 = new lib.hat4();
	this.body_4.setTransform(1.3,47.5);

	this.body_5 = new lib.hat5();

	this.body_6 = new lib.hat6();

	this.body_7 = new lib.hat7();

	this.body_8 = new lib.hat8();
	this.body_8.setTransform(1.9,-33.8);

	this.body_9 = new lib.hat9();
	this.body_9.setTransform(60.1,-12);

	this.body_10 = new lib.hat10();

	this.body_11 = new lib.hat11();

	this.body_12 = new lib.hat12();
	this.body_12.setTransform(-16.3,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160.8,380,322);
p.frameBounds = [rect, new cjs.Rectangle(-139.9,-228.6,284,389.5), new cjs.Rectangle(-190,-160.8,380,322), new cjs.Rectangle(-204.9,-65.9,412.5,227), rect=new cjs.Rectangle(-190,-160.8,380,322), rect, rect, new cjs.Rectangle(-139.9,-228.6,284,389.5), new cjs.Rectangle(-267.1,-161.9,454.2,323), rect=new cjs.Rectangle(-190,-160.8,380,322), rect, new cjs.Rectangle(-227.2,-172.9,422,392)];


(lib.face_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.face1();
	this.instance.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_1 = new lib.face2();
	this.instance_1.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_2 = new lib.face3();
	this.instance_2.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_3 = new lib.face4();
	this.instance_3.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_4 = new lib.face5();
	this.instance_4.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_5 = new lib.face6();
	this.instance_5.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_6 = new lib.face7();
	this.instance_6.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_7 = new lib.face8();
	this.instance_7.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_8 = new lib.face9();
	this.instance_8.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_9 = new lib.face10();
	this.instance_9.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_10 = new lib.face11();
	this.instance_10.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_11 = new lib.face12();
	this.instance_11.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_12 = new lib.face13();
	this.instance_12.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_13 = new lib.face14();
	this.instance_13.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_14 = new lib.face15();
	this.instance_14.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.instance_15 = new lib.face16();
	this.instance_15.setTransform(-0.1,0.8,1,1,0,0,0,-0.1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.9,-38.4,152,78);
p.frameBounds = [rect, new cjs.Rectangle(-75.9,-38.4,152,81), new cjs.Rectangle(-75.9,-38.4,153,78), new cjs.Rectangle(-75.9,-38.4,152,73), new cjs.Rectangle(-64.6,-30.2,128,65), new cjs.Rectangle(-87,-22,174,59), new cjs.Rectangle(-64.6,-30.2,131,65), new cjs.Rectangle(-67.8,-34.5,137,75), new cjs.Rectangle(-69.3,-24.5,140,56), new cjs.Rectangle(-64.6,-30.2,128,65), new cjs.Rectangle(-85.4,-31.5,172,88), new cjs.Rectangle(-75.6,-40.4,150,89), new cjs.Rectangle(-69.4,-31.5,142,81), new cjs.Rectangle(-70.4,-38.5,142,79), new cjs.Rectangle(-70.3,-22.7,141,63), new cjs.Rectangle(-75.1,-39.4,152,102)];


(lib.dress12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor12();
	this.instance.setTransform(0,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base12();
	this.body_mc.setTransform(0,29.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.6,-60.4,205,135);
p.frameBounds = [rect];


(lib.dress11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.1,-42.9,178,86);
p.frameBounds = [rect];


(lib.dress10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base10();
	this.body_mc.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-53.8,170.1,108);
p.frameBounds = [rect];


(lib.dress9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base9();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.5,-61.2,188,127);
p.frameBounds = [rect];


(lib.dress8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base8();
	this.body_mc.setTransform(0.7,-41.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.9,-83.1,216,166);
p.frameBounds = [rect];


(lib.dress7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.2,-64.4,194,129);
p.frameBounds = [rect];


(lib.dress6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base6();
	this.body_mc.setTransform(-8.7,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.6,-62.6,199,125);
p.frameBounds = [rect];


(lib.dress5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.9,-65.9,244,144);
p.frameBounds = [rect];


(lib.dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base4();
	this.body_mc.setTransform(0.9,1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.1,-56.5,178,113);
p.frameBounds = [rect];


(lib.dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base3();
	this.body_mc.setTransform(0,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.7,-63.3,170,127);
p.frameBounds = [rect];


(lib.dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.7,-61.4,201,123);
p.frameBounds = [rect];


(lib.dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89,-56.3,178,113);
p.frameBounds = [rect];


(lib.dress_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor20();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base20();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.3,-75.8,185,152);
p.frameBounds = [rect];


(lib.dress_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor19();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base19();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.4,-69.6,248,145);
p.frameBounds = [rect];


(lib.dress_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor18();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base18();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.3,-73.6,185,147);
p.frameBounds = [rect];


(lib.dress_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base17();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.9,-60.3,184,121);
p.frameBounds = [rect];


(lib.dress_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor16();
	this.instance.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base16();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.2,-71.4,214,150);
p.frameBounds = [rect];


(lib.dress_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base15();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.7,-79.1,254,158);
p.frameBounds = [rect];


(lib.dress_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base14();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.4,-71.6,213,143);
p.frameBounds = [rect];


(lib.dress_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dress_decor13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base13();
	this.body_mc.setTransform(-1.8,-26.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.2,-76.6,214,153);
p.frameBounds = [rect];


(lib.dress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.6,-26.6,53.3,53.3);
p.frameBounds = [rect];


(lib.crown_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.crown1();
	this.instance.setTransform(-90.2,-47.3);

	this.instance_1 = new lib.crown2();
	this.instance_1.setTransform(61.1,-51);

	this.instance_2 = new lib.crown3();
	this.instance_2.setTransform(2.1,34.5);

	this.instance_3 = new lib.crown4();
	this.instance_3.setTransform(2.1,-41.1);

	this.instance_4 = new lib.crown5();
	this.instance_4.setTransform(101.6,-32.6);

	this.instance_5 = new lib.crown6();
	this.instance_5.setTransform(6.8,16.8,1,1,0,0,0,-0.4,0.4);

	this.instance_6 = new lib.crown7();
	this.instance_6.setTransform(-60.3,-60.2);

	this.instance_7 = new lib.crown8();
	this.instance_7.setTransform(-60.3,-60.2);

	this.instance_8 = new lib.crown9();
	this.instance_8.setTransform(1.7,-84.2);

	this.instance_9 = new lib.crown10();
	this.instance_9.setTransform(98,-30.9,1,1,0,0,0,0.8,0);

	this.instance_10 = new lib.crown11();
	this.instance_10.setTransform(71.3,-40.2,1,1,0,0,0,0.3,-0.1);

	this.instance_11 = new lib.crown12();
	this.instance_11.setTransform(-18.5,-17.5);

	this.instance_12 = new lib.crown13();
	this.instance_12.setTransform(1.5,-81);

	this.instance_13 = new lib.crown14();
	this.instance_13.setTransform(1.7,-79.1);

	this.instance_14 = new lib.crown15();
	this.instance_14.setTransform(-0.7,-49.8);

	this.instance_15 = new lib.crown16();
	this.instance_15.setTransform(-7.2,-64.6);

	this.instance_16 = new lib.crown17();
	this.instance_16.setTransform(1.2,-86.5);

	this.instance_17 = new lib.crown18();
	this.instance_17.setTransform(1.5,-20.7);

	this.instance_18 = new lib.crown19();
	this.instance_18.setTransform(-94.7,-21.4);

	this.instance_19 = new lib.crown20();
	this.instance_19.setTransform(1,-54.3);

	this.instance_20 = new lib.crown21();
	this.instance_20.setTransform(-105.6,-14.6);

	this.instance_21 = new lib.crown22();
	this.instance_21.setTransform(-2.2,3.9);

	this.instance_22 = new lib.crown23();
	this.instance_22.setTransform(1.8,-5.2);

	this.instance_23 = new lib.crown24();
	this.instance_23.setTransform(3.3,86.4);

	this.instance_24 = new lib.crown25();
	this.instance_24.setTransform(99.8,2.5);

	this.instance_25 = new lib.crown26();
	this.instance_25.setTransform(99.5,-36.4);

	this.instance_26 = new lib.crown27();
	this.instance_26.setTransform(95.7,-31.7);

	this.instance_27 = new lib.crown28();
	this.instance_27.setTransform(2.5,27.1,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.6,-96.5,107,99);
p.frameBounds = [rect, new cjs.Rectangle(-10.4,-102.1,143,102), new cjs.Rectangle(-161.8,-104.9,327,268), new cjs.Rectangle(-85.5,-100.9,175,120), new cjs.Rectangle(61.4,-71.1,81,77), new cjs.Rectangle(-132.1,-83.2,278,200), rect=new cjs.Rectangle(-117.5,-113.3,114,106), rect, new cjs.Rectangle(-64.2,-126.4,132,84), new cjs.Rectangle(21.6,-100.3,153,139), new cjs.Rectangle(-11,-121.2,165,162), new cjs.Rectangle(-138.6,-63.5,240,92), new cjs.Rectangle(-129,-154.2,261,146), new cjs.Rectangle(-64.2,-126.4,132,95), new cjs.Rectangle(-139.9,-102.2,279,105), new cjs.Rectangle(-125.6,-141.9,237,155), new cjs.Rectangle(-224,-250.5,451,328), new cjs.Rectangle(-128.2,-81.6,259,122), new cjs.Rectangle(-152.2,-72.5,115,102), new cjs.Rectangle(-96.1,-91.6,194,75), new cjs.Rectangle(-148.6,-56.7,86,84), new cjs.Rectangle(-128.2,-50.5,252,109), new cjs.Rectangle(-172,-112.2,348,214), new cjs.Rectangle(-99.5,50.3,206,72), new cjs.Rectangle(51.6,-47.2,97,99), new cjs.Rectangle(25.3,-107.2,149,142), new cjs.Rectangle(33.4,-89.6,125,116), new cjs.Rectangle(-185.3,-70.2,376,194), null];


(lib.collar12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base12();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.6,-51.2,285.3,103);
p.frameBounds = [rect];


(lib.collar11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor11();
	this.instance.setTransform(0,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.4,-28.7,175,64);
p.frameBounds = [rect];


(lib.collar10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor10();
	this.instance.setTransform(0,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.4,-38,175,68);
p.frameBounds = [rect];


(lib.collar9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base9();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.2,-37.5,244,75);
p.frameBounds = [rect];


(lib.collar8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.2,-69.2,244,118);
p.frameBounds = [rect];


(lib.collar7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.1,-21.5,220.2,43);
p.frameBounds = [rect];


(lib.collar6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.2,-37.5,244,75);
p.frameBounds = [rect];


(lib.collar5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.9,-23.4,150,47);
p.frameBounds = [rect];


(lib.collar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor4();
	this.instance.setTransform(0,6,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.4,-33.2,169,79);
p.frameBounds = [rect];


(lib.collar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.1,-57.6,258.3,115.2);
p.frameBounds = [rect];


(lib.collar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.2,-37.5,244,75);
p.frameBounds = [rect];


(lib.collar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.collar_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.collar_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.2,-37.5,244,75);
p.frameBounds = [rect];


(lib.collar_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.collar1();

	this.body_2 = new lib.collar2();

	this.body_3 = new lib.collar3();
	this.body_3.setTransform(2.4,28.1);

	this.body_4 = new lib.collar4();
	this.body_4.setTransform(4.7,2.3);

	this.body_5 = new lib.collar5();
	this.body_5.setTransform(5.2,-5.5);

	this.body_6 = new lib.collar6();

	this.body_7 = new lib.collar7();
	this.body_7.setTransform(8.2,-27.5);

	this.body_8 = new lib.collar8();

	this.body_9 = new lib.collar9();

	this.body_10 = new lib.collar10();
	this.body_10.setTransform(5.1,-1.2);

	this.body_11 = new lib.collar11();
	this.body_11.setTransform(5.1,-1.2);

	this.body_12 = new lib.collar12();
	this.body_12.setTransform(-4.1,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.2,-37.5,244,75);
p.frameBounds = [rect, rect, new cjs.Rectangle(-126.7,-29.5,258.3,115.2), new cjs.Rectangle(-79.7,-31,169,79), new cjs.Rectangle(-69.7,-29,150,47), new cjs.Rectangle(-122.2,-37.5,244,75), new cjs.Rectangle(-101.9,-49,220.2,43), new cjs.Rectangle(-122.2,-69.2,244,118), new cjs.Rectangle(-122.2,-37.5,244,75), new cjs.Rectangle(-82.4,-39.3,175,68), new cjs.Rectangle(-82.4,-30,175,64), new cjs.Rectangle(-146.7,-29.5,285.3,103), null];


(lib.collar_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.6,-26.6,53.3,53.3);
p.frameBounds = [rect];


(lib.body_check_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjUFEQguAAghggQggghAAguIAAmpQAAguAgghQAhggAuAAIGpAAQAuAAAhAgQAgAhAAAuIAAGpQAAAuggAhQghAgguAAgAj5j5QgTATAAAbIAAGZQABAaASASQATATAbAAIGXAAQAbAAATgTQATgTAAgbIAAmXQAAgbgTgTQgSgSgagBImcAAQgZABgSASg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},14).to({rotation:180},15).to({rotation:270},15).to({rotation:360},15).wait(1));

	// graph
	this.instance_1 = new lib.check_subcategory_img();
	this.instance_1.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_check_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjUFEQguAAghggQggghAAguIAAmpQAAguAgghQAhggAuAAIGpAAQAuAAAhAgQAgAhAAAuIAAGpQAAAuggAhQghAgguAAgAj5j5QgTATAAAbIAAGZQABAaASASQATATAbAAIGXAAQAbAAATgTQATgTAAgbIAAmXQAAgbgTgTQgSgSgagBImcAAQgZABgSASg");

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

	// animation
	this.instance = new lib.decor_title_mc();
	this.instance.setTransform(100,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({rotation:15},15).to({rotation:-15},30).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-100,200,210);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1.5,-101.4,203,212.8), new cjs.Rectangle(-3.3,-103,206.6,216.2), new cjs.Rectangle(-5,-104.7,210.1,219.5), new cjs.Rectangle(-6.7,-106.3,213.5,222.8), new cjs.Rectangle(-8.4,-107.9,216.9,226), new cjs.Rectangle(-10.1,-109.4,220.2,229.1), new cjs.Rectangle(-11.7,-111,223.4,232.2), new cjs.Rectangle(-13.3,-112.4,226.6,235.2), new cjs.Rectangle(-14.7,-113.9,229.7,238.1), new cjs.Rectangle(-16.3,-115.3,232.8,240.9), new cjs.Rectangle(-17.8,-116.7,235.7,243.7), new cjs.Rectangle(-19.3,-118,238.6,246.4), new cjs.Rectangle(-20.6,-119.3,241.4,249), new cjs.Rectangle(-22,-120.6,244.2,251.5), new cjs.Rectangle(-23.7,-122.3,247.5,254.6), new cjs.Rectangle(-22,-120.7,244.2,251.5), new cjs.Rectangle(-20.6,-119.5,241.4,249), new cjs.Rectangle(-19.2,-118.2,238.6,246.4), new cjs.Rectangle(-17.8,-116.9,235.7,243.7), new cjs.Rectangle(-16.3,-115.5,232.8,240.9), new cjs.Rectangle(-14.8,-114.1,229.7,238.1), new cjs.Rectangle(-13.2,-112.6,226.6,235.2), new cjs.Rectangle(-11.6,-111.1,223.4,232.2), new cjs.Rectangle(-10,-109.6,220.2,229.1), new cjs.Rectangle(-8.4,-108,216.9,226), new cjs.Rectangle(-6.7,-106.4,213.5,222.8), new cjs.Rectangle(-5,-104.8,210,219.5), new cjs.Rectangle(-3.3,-103.1,206.5,216.2), new cjs.Rectangle(-1.4,-101.4,203,212.8), new cjs.Rectangle(0,-100,200,210), new cjs.Rectangle(-1.8,-101.8,203.6,213.5), new cjs.Rectangle(-3.5,-103.4,207.2,216.8), new cjs.Rectangle(-5.3,-105.2,210.7,220.1), new cjs.Rectangle(-7,-106.8,214.1,223.4), new cjs.Rectangle(-8.6,-108.4,217.5,226.6), new cjs.Rectangle(-10.3,-109.9,220.8,229.7), new cjs.Rectangle(-11.9,-111.4,224,232.7), new cjs.Rectangle(-13.2,-112.6,226.6,235.2), new cjs.Rectangle(-15.1,-114.3,230.3,238.6), new cjs.Rectangle(-16.3,-115.5,232.8,240.9), new cjs.Rectangle(-17.9,-116.9,235.7,243.7), new cjs.Rectangle(-19.3,-118.2,238.6,246.4), new cjs.Rectangle(-20.7,-119.5,241.4,249), new cjs.Rectangle(-22,-120.8,244.2,251.5), new cjs.Rectangle(-23.8,-122.3,247.6,254.6), new cjs.Rectangle(-22.1,-120.8,244.2,251.5), new cjs.Rectangle(-20.7,-119.5,241.4,249), new cjs.Rectangle(-19.3,-118.2,238.6,246.4), new cjs.Rectangle(-17.8,-116.8,235.7,243.7), new cjs.Rectangle(-16.3,-115.4,232.8,240.9), new cjs.Rectangle(-14.8,-114,229.7,238.1), new cjs.Rectangle(-13.3,-112.5,226.6,235.2), new cjs.Rectangle(-11.7,-111.1,223.4,232.2), new cjs.Rectangle(-10.1,-109.5,220.2,229.1), new cjs.Rectangle(-8.4,-108,216.9,226), new cjs.Rectangle(-6.7,-106.4,213.5,222.8), new cjs.Rectangle(-5,-104.7,210,219.5), new cjs.Rectangle(-3.3,-103.1,206.5,216.2), new cjs.Rectangle(-1.5,-101.4,203,212.8), new cjs.Rectangle(0,-100,200,210)];


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
p.nominalBounds = rect = new cjs.Rectangle(-190,-110,390,220);
p.frameBounds = [rect];


(lib.accessory_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.accessory1();
	this.instance.setTransform(183.2,-3.6);

	this.instance_1 = new lib.accessory2();
	this.instance_1.setTransform(138.4,-2.5,1,1,-111);

	this.instance_2 = new lib.accessory3();
	this.instance_2.setTransform(187.4,0.5);

	this.instance_3 = new lib.accessory4();
	this.instance_3.setTransform(174.3,-17.8,1,1,0,0,0,0.7,0.8);

	this.instance_4 = new lib.accessory5();
	this.instance_4.setTransform(199,57.6);

	this.instance_5 = new lib.accessory6();
	this.instance_5.setTransform(170.8,-0.4);

	this.instance_6 = new lib.accessory7();
	this.instance_6.setTransform(178,58.1);

	this.instance_7 = new lib.accessory8();
	this.instance_7.setTransform(189.3,41.2);

	this.instance_8 = new lib.accessory9();
	this.instance_8.setTransform(182.5,1.7);

	this.instance_9 = new lib.accessory10();
	this.instance_9.setTransform(193.4,23.3);

	this.instance_10 = new lib.accessory11();
	this.instance_10.setTransform(177,2.8);

	this.instance_11 = new lib.accessory12();
	this.instance_11.setTransform(169.3,-16.8);

	this.instance_12 = new lib.accessory13();
	this.instance_12.setTransform(280.5,-102.1);

	this.instance_13 = new lib.accessory14();
	this.instance_13.setTransform(178.3,8.1);

	this.instance_14 = new lib.accessory15();
	this.instance_14.setTransform(230.4,18.4,1,1,0,0,0,0,0.7);

	this.instance_15 = new lib.accessory16();
	this.instance_15.setTransform(214.5,3.1);

	this.instance_16 = new lib.accessory17();
	this.instance_16.setTransform(270,19.7);

	this.instance_17 = new lib.accessory18();
	this.instance_17.setTransform(168.8,0.5);

	this.instance_18 = new lib.accessory19();
	this.instance_18.setTransform(169.9,23.9);

	this.instance_19 = new lib.accessory20();
	this.instance_19.setTransform(186.1,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(150.7,-52.3,65,98);
p.frameBounds = [rect, new cjs.Rectangle(8.5,-164.2,259.6,323.3), new cjs.Rectangle(137.4,-73.1,100,147), new cjs.Rectangle(140.5,-86.6,68,138), new cjs.Rectangle(159.1,-1.5,80,94), new cjs.Rectangle(117.9,-63.9,106,127), new cjs.Rectangle(139.5,17.9,77,81), new cjs.Rectangle(146.8,-1.5,85,85), new cjs.Rectangle(154,-30.1,57,64), new cjs.Rectangle(124.4,-46.1,138,139), new cjs.Rectangle(132.6,-60.9,89,127), new cjs.Rectangle(89.5,-142.6,160,252), new cjs.Rectangle(178,-135,205,66), new cjs.Rectangle(141.7,-66,73,123), new cjs.Rectangle(159.6,-33.9,142,105), new cjs.Rectangle(181.4,-42.5,66,91), new cjs.Rectangle(153,-28.1,234,96), new cjs.Rectangle(122.1,-53.9,93,109), new cjs.Rectangle(134.2,-3.6,72,55), new cjs.Rectangle(149.3,9.8,74,76), null];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.6,-26.6,53.3,53.3);
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


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.801},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-24.2,-24.2,48.6,48.6), new cjs.Rectangle(-23.9,-23.9,47.8,47.8), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.8,-22.8,45.7,45.7), new cjs.Rectangle(-22.5,-22.5,45,45), new cjs.Rectangle(-22.1,-22.1,44.3,44.3), new cjs.Rectangle(-21.7,-21.7,43.6,43.6), new cjs.Rectangle(-21.4,-21.4,42.8,42.8), new cjs.Rectangle(-21,-21,42.2,42.2), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.3,-24.3,48.7,48.7), new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-25,-25,50,50)];


(lib.title_reset_mc = function(mode,startPosition,loop) {
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
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
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
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
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
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

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
	this.instance.setTransform(-50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.decor_banner_2_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_2_img();
	this.instance_2.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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

	// decor
	this.instance_1 = new lib.decor_banner_1_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_1_img();
	this.instance_2.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(133.3,0,0.889,0.889,0,0,180,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.panel_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.bg_3 = new lib.option_bg_3_mc();
	this.bg_3.setTransform(95,255);

	this.bg_4 = new lib.option_bg_4_mc();
	this.bg_4.setTransform(255,255);

	this.bg_2 = new lib.option_bg_2_mc();
	this.bg_2.setTransform(255,95);

	this.bg_1 = new lib.option_bg_1_mc();
	this.bg_1.setTransform(95,95);

	this.bg_7 = new lib.option_bg_7_mc();
	this.bg_7.setTransform(95,255);

	this.bg_8 = new lib.option_bg_8_mc();
	this.bg_8.setTransform(255,255);

	this.bg_6 = new lib.option_bg_6_mc();
	this.bg_6.setTransform(255,95);

	this.bg_5 = new lib.option_bg_5_mc();
	this.bg_5.setTransform(95,95);

	this.bg_11 = new lib.option_bg_11_mc();
	this.bg_11.setTransform(95,255);

	this.bg_12 = new lib.option_bg_12_mc();
	this.bg_12.setTransform(255,255);

	this.bg_10 = new lib.option_bg_10_mc();
	this.bg_10.setTransform(255,95);

	this.bg_9 = new lib.option_bg_9_mc();
	this.bg_9.setTransform(95,95);

	this.bg_15 = new lib.option_bg_15_mc();
	this.bg_15.setTransform(95,255);

	this.bg_16 = new lib.option_bg_16_mc();
	this.bg_16.setTransform(255,255);

	this.bg_14 = new lib.option_bg_14_mc();
	this.bg_14.setTransform(255,95);

	this.bg_13 = new lib.option_bg_13_mc();
	this.bg_13.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_1},{t:this.bg_2},{t:this.bg_4},{t:this.bg_3}]}).to({state:[{t:this.bg_5},{t:this.bg_6},{t:this.bg_8},{t:this.bg_7}]},1).to({state:[{t:this.bg_9},{t:this.bg_10},{t:this.bg_12},{t:this.bg_11}]},1).to({state:[{t:this.bg_13},{t:this.bg_14},{t:this.bg_16},{t:this.bg_15}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// no
	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(337,95);

	this.timeline.addTween(cjs.Tween.get(this.wings_0).wait(1));

	// options
	this.wings_3 = new lib.option_accessory_wings_3_mc();
	this.wings_3.setTransform(95,255);

	this.wings_4 = new lib.option_accessory_wings_4_mc();
	this.wings_4.setTransform(255,255);

	this.wings_2 = new lib.option_accessory_wings_2_mc();
	this.wings_2.setTransform(255,95);

	this.wings_1 = new lib.option_accessory_wings_1_mc();
	this.wings_1.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wings_1},{t:this.wings_2},{t:this.wings_4},{t:this.wings_3}]}).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,368.7,460);
p.frameBounds = [rect];


(lib.panel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(5));

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(337,95);

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(5));

	// options
	this.accessory_3 = new lib.option_accessory_hand_3_mc();
	this.accessory_3.setTransform(95,255);

	this.accessory_4 = new lib.option_accessory_hand_4_mc();
	this.accessory_4.setTransform(255,255);

	this.accessory_2 = new lib.option_accessory_hand_2_mc();
	this.accessory_2.setTransform(255,95);

	this.accessory_1 = new lib.option_accessory_hand_1_mc();
	this.accessory_1.setTransform(95,95);

	this.accessory_7 = new lib.option_accessory_hand_7_mc();
	this.accessory_7.setTransform(95,255);

	this.accessory_8 = new lib.option_accessory_hand_8_mc();
	this.accessory_8.setTransform(255,255);

	this.accessory_6 = new lib.option_accessory_hand_6_mc();
	this.accessory_6.setTransform(255,95);

	this.accessory_5 = new lib.option_accessory_hand_5_mc();
	this.accessory_5.setTransform(95,95);

	this.accessory_11 = new lib.option_accessory_hand_11_mc();
	this.accessory_11.setTransform(95,255);

	this.accessory_12 = new lib.option_accessory_hand_12_mc();
	this.accessory_12.setTransform(255,255);

	this.accessory_10 = new lib.option_accessory_hand_10_mc();
	this.accessory_10.setTransform(255,95);

	this.accessory_9 = new lib.option_accessory_hand_9_mc();
	this.accessory_9.setTransform(95,95);

	this.accessory_15 = new lib.option_accessory_hand_15_mc();
	this.accessory_15.setTransform(95,255);

	this.accessory_16 = new lib.option_accessory_hand_16_mc();
	this.accessory_16.setTransform(255,255);

	this.accessory_14 = new lib.option_accessory_hand_14_mc();
	this.accessory_14.setTransform(255,95);

	this.accessory_13 = new lib.option_accessory_hand_13_mc();
	this.accessory_13.setTransform(95,95);

	this.accessory_19 = new lib.option_accessory_hand_19_mc();
	this.accessory_19.setTransform(95,255);

	this.accessory_20 = new lib.option_accessory_hand_20_mc();
	this.accessory_20.setTransform(255,255);

	this.accessory_18 = new lib.option_accessory_hand_18_mc();
	this.accessory_18.setTransform(255,95);

	this.accessory_17 = new lib.option_accessory_hand_17_mc();
	this.accessory_17.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_4},{t:this.accessory_3}]}).to({state:[{t:this.accessory_5},{t:this.accessory_6},{t:this.accessory_8},{t:this.accessory_7}]},1).to({state:[{t:this.accessory_9},{t:this.accessory_10},{t:this.accessory_12},{t:this.accessory_11}]},1).to({state:[{t:this.accessory_13},{t:this.accessory_14},{t:this.accessory_16},{t:this.accessory_15}]},1).to({state:[{t:this.accessory_17},{t:this.accessory_18},{t:this.accessory_20},{t:this.accessory_19}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,368.7,460);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.panel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(7));

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(337,95);

	this.timeline.addTween(cjs.Tween.get(this.headdress_0).wait(7));

	// options
	this.headdress_3 = new lib.option_accessory_head_3_mc();
	this.headdress_3.setTransform(95,255);

	this.headdress_4 = new lib.option_accessory_head_4_mc();
	this.headdress_4.setTransform(255,255);

	this.headdress_2 = new lib.option_accessory_head_2_mc();
	this.headdress_2.setTransform(255,95);

	this.headdress_1 = new lib.option_accessory_head_1_mc();
	this.headdress_1.setTransform(95,95);

	this.headdress_7 = new lib.option_accessory_head_7_mc();
	this.headdress_7.setTransform(95,255);

	this.headdress_8 = new lib.option_accessory_head_8_mc();
	this.headdress_8.setTransform(255,255);

	this.headdress_6 = new lib.option_accessory_head_6_mc();
	this.headdress_6.setTransform(255,95);

	this.headdress_5 = new lib.option_accessory_head_5_mc();
	this.headdress_5.setTransform(95,95);

	this.headdress_11 = new lib.option_accessory_head_11_mc();
	this.headdress_11.setTransform(95,255);

	this.headdress_12 = new lib.option_accessory_head_12_mc();
	this.headdress_12.setTransform(255,255);

	this.headdress_10 = new lib.option_accessory_head_10_mc();
	this.headdress_10.setTransform(255,95);

	this.headdress_9 = new lib.option_accessory_head_9_mc();
	this.headdress_9.setTransform(95,95);

	this.headdress_15 = new lib.option_accessory_head_15_mc();
	this.headdress_15.setTransform(95,255);

	this.headdress_16 = new lib.option_accessory_head_16_mc();
	this.headdress_16.setTransform(255,255);

	this.headdress_14 = new lib.option_accessory_head_14_mc();
	this.headdress_14.setTransform(255,95);

	this.headdress_13 = new lib.option_accessory_head_13_mc();
	this.headdress_13.setTransform(95,95);

	this.headdress_19 = new lib.option_accessory_head_19_mc();
	this.headdress_19.setTransform(95,255);

	this.headdress_20 = new lib.option_accessory_head_20_mc();
	this.headdress_20.setTransform(255,255);

	this.headdress_18 = new lib.option_accessory_head_18_mc();
	this.headdress_18.setTransform(255,95);

	this.headdress_17 = new lib.option_accessory_head_17_mc();
	this.headdress_17.setTransform(95,95);

	this.headdress_23 = new lib.option_accessory_head_23_mc();
	this.headdress_23.setTransform(95,255);

	this.headdress_24 = new lib.option_accessory_head_24_mc();
	this.headdress_24.setTransform(255,255);

	this.headdress_22 = new lib.option_accessory_head_22_mc();
	this.headdress_22.setTransform(255,95);

	this.headdress_21 = new lib.option_accessory_head_21_mc();
	this.headdress_21.setTransform(95,95);

	this.headdress_27 = new lib.option_accessory_head_27_mc();
	this.headdress_27.setTransform(95,255);

	this.headdress_28 = new lib.option_accessory_head_28_mc();
	this.headdress_28.setTransform(255,255);

	this.headdress_26 = new lib.option_accessory_head_26_mc();
	this.headdress_26.setTransform(255,95);

	this.headdress_25 = new lib.option_accessory_head_25_mc();
	this.headdress_25.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_4},{t:this.headdress_3}]}).to({state:[{t:this.headdress_5},{t:this.headdress_6},{t:this.headdress_8},{t:this.headdress_7}]},1).to({state:[{t:this.headdress_9},{t:this.headdress_10},{t:this.headdress_12},{t:this.headdress_11}]},1).to({state:[{t:this.headdress_13},{t:this.headdress_14},{t:this.headdress_16},{t:this.headdress_15}]},1).to({state:[{t:this.headdress_17},{t:this.headdress_18},{t:this.headdress_20},{t:this.headdress_19}]},1).to({state:[{t:this.headdress_21},{t:this.headdress_22},{t:this.headdress_24},{t:this.headdress_23}]},1).to({state:[{t:this.headdress_25},{t:this.headdress_26},{t:this.headdress_28},{t:this.headdress_27}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,368.7,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.panel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// no
	this.collar_0 = new lib.collar_0_mc();
	this.collar_0.setTransform(337,95);

	this.timeline.addTween(cjs.Tween.get(this.collar_0).wait(4));

	// options
	this.collar_3 = new lib.option_collar_3_mc();
	this.collar_3.setTransform(95,255);

	this.collar_4 = new lib.option_collar_4_mc();
	this.collar_4.setTransform(255,255);

	this.collar_2 = new lib.option_collar_2_mc();
	this.collar_2.setTransform(255,95);

	this.collar_1 = new lib.option_collar_1_mc();
	this.collar_1.setTransform(95,95);

	this.collar_7 = new lib.option_collar_7_mc();
	this.collar_7.setTransform(95,255);

	this.collar_8 = new lib.option_collar_8_mc();
	this.collar_8.setTransform(255,255);

	this.collar_6 = new lib.option_collar_6_mc();
	this.collar_6.setTransform(255,95);

	this.collar_5 = new lib.option_collar_5_mc();
	this.collar_5.setTransform(95,95);

	this.collar_11 = new lib.option_collar_11_mc();
	this.collar_11.setTransform(95,255);

	this.collar_12 = new lib.option_collar_12_mc();
	this.collar_12.setTransform(255,255);

	this.collar_10 = new lib.option_collar_10_mc();
	this.collar_10.setTransform(255,95);

	this.collar_9 = new lib.option_collar_9_mc();
	this.collar_9.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.collar_1},{t:this.collar_2},{t:this.collar_4},{t:this.collar_3}]}).to({state:[{t:this.collar_5},{t:this.collar_6},{t:this.collar_8},{t:this.collar_7}]},1).to({state:[{t:this.collar_9},{t:this.collar_10},{t:this.collar_12},{t:this.collar_11}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_collar = new lib.color_picker_mc();
	this.color_collar.setTransform(15,20);
	this.color_collar._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_collar).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,368.7,460);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(6));

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(337,95);

	this.timeline.addTween(cjs.Tween.get(this.dress_0).wait(6));

	// options
	this.dress_3 = new lib.option_dress_3_mc();
	this.dress_3.setTransform(95,255);

	this.dress_4 = new lib.option_dress_4_mc();
	this.dress_4.setTransform(255,255);

	this.dress_2 = new lib.option_dress_2_mc();
	this.dress_2.setTransform(255,95);

	this.dress_1 = new lib.option_dress_1_mc();
	this.dress_1.setTransform(95,95);

	this.dress_7 = new lib.option_dress_7_mc();
	this.dress_7.setTransform(95,255);

	this.dress_8 = new lib.option_dress_8_mc();
	this.dress_8.setTransform(255,255);

	this.dress_6 = new lib.option_dress_6_mc();
	this.dress_6.setTransform(255,95);

	this.dress_5 = new lib.option_dress_5_mc();
	this.dress_5.setTransform(95,95);

	this.dress_11 = new lib.option_dress_11_mc();
	this.dress_11.setTransform(95,255);

	this.dress_12 = new lib.option_dress_12_mc();
	this.dress_12.setTransform(255,255);

	this.dress_10 = new lib.option_dress_10_mc();
	this.dress_10.setTransform(255,95);

	this.dress_9 = new lib.option_dress_9_mc();
	this.dress_9.setTransform(95,95);

	this.dress_15 = new lib.option_dress_15_mc();
	this.dress_15.setTransform(95,255);

	this.dress_16 = new lib.option_dress_16_mc();
	this.dress_16.setTransform(255,255);

	this.dress_14 = new lib.option_dress_14_mc();
	this.dress_14.setTransform(255,95);

	this.dress_13 = new lib.option_dress_13_mc();
	this.dress_13.setTransform(95,95);

	this.dress_19 = new lib.option_dress_19_mc();
	this.dress_19.setTransform(95,255);

	this.dress_20 = new lib.option_dress_20_mc();
	this.dress_20.setTransform(255,255);

	this.dress_18 = new lib.option_dress_18_mc();
	this.dress_18.setTransform(255,95);

	this.dress_17 = new lib.option_dress_17_mc();
	this.dress_17.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1},{t:this.dress_2},{t:this.dress_4},{t:this.dress_3}]}).to({state:[{t:this.dress_5},{t:this.dress_6},{t:this.dress_8},{t:this.dress_7}]},1).to({state:[{t:this.dress_9},{t:this.dress_10},{t:this.dress_12},{t:this.dress_11}]},1).to({state:[{t:this.dress_13},{t:this.dress_14},{t:this.dress_16},{t:this.dress_15}]},1).to({state:[{t:this.dress_17},{t:this.dress_18},{t:this.dress_20},{t:this.dress_19}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_dress = new lib.color_picker_mc();
	this.color_dress.setTransform(15,20);
	this.color_dress._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_dress).wait(5).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,368.7,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.panel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.tail_0 = new lib.tail_0_mc();
	this.tail_0.setTransform(337,95);

	this.timeline.addTween(cjs.Tween.get(this.tail_0).wait(2));

	// options
	this.tail_3 = new lib.option_tail_3_mc();
	this.tail_3.setTransform(95,255);

	this.tail_4 = new lib.option_tail_4_mc();
	this.tail_4.setTransform(255,255);

	this.tail_2 = new lib.option_tail_2_mc();
	this.tail_2.setTransform(255,95);

	this.tail_1 = new lib.option_tail_1_mc();
	this.tail_1.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tail_1},{t:this.tail_2},{t:this.tail_4},{t:this.tail_3}]}).to({state:[]},1).wait(1));

	// palette
	this.color_tail = new lib.color_picker_mc();
	this.color_tail.setTransform(15,20);
	this.color_tail._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_tail).wait(1).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,368.7,460);
p.frameBounds = [rect, rect];


(lib.panel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.mutch_3 = new lib.option_fringe_3_mc();
	this.mutch_3.setTransform(95,255);

	this.mutch_4 = new lib.option_fringe_4_mc();
	this.mutch_4.setTransform(255,255);

	this.mutch_2 = new lib.option_fringe_2_mc();
	this.mutch_2.setTransform(255,95);

	this.mutch_1 = new lib.option_fringe_1_mc();
	this.mutch_1.setTransform(95,95);

	this.mutch_7 = new lib.option_fringe_7_mc();
	this.mutch_7.setTransform(95,255);

	this.mutch_8 = new lib.option_fringe_8_mc();
	this.mutch_8.setTransform(255,255);

	this.mutch_6 = new lib.option_fringe_6_mc();
	this.mutch_6.setTransform(255,95);

	this.mutch_5 = new lib.option_fringe_5_mc();
	this.mutch_5.setTransform(95,95);

	this.mutch_11 = new lib.option_fringe_11_mc();
	this.mutch_11.setTransform(95,255);

	this.mutch_12 = new lib.option_fringe_12_mc();
	this.mutch_12.setTransform(255,255);

	this.mutch_10 = new lib.option_fringe_10_mc();
	this.mutch_10.setTransform(255,95);

	this.mutch_9 = new lib.option_fringe_9_mc();
	this.mutch_9.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mutch_1},{t:this.mutch_2},{t:this.mutch_4},{t:this.mutch_3}]}).to({state:[{t:this.mutch_5},{t:this.mutch_6},{t:this.mutch_8},{t:this.mutch_7}]},1).to({state:[{t:this.mutch_9},{t:this.mutch_10},{t:this.mutch_12},{t:this.mutch_11}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_mutch = new lib.color_picker_mc();
	this.color_mutch.setTransform(15,20);
	this.color_mutch._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_mutch).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.eyes_3 = new lib.option_face_3_mc();
	this.eyes_3.setTransform(95,255);

	this.eyes_4 = new lib.option_face_4_mc();
	this.eyes_4.setTransform(255,255);

	this.eyes_2 = new lib.option_face_2_mc();
	this.eyes_2.setTransform(255,95);

	this.eyes_1 = new lib.option_face_1_mc();
	this.eyes_1.setTransform(95,95);

	this.eyes_7 = new lib.option_face_7_mc();
	this.eyes_7.setTransform(95,255);

	this.eyes_8 = new lib.option_face_8_mc();
	this.eyes_8.setTransform(255,255);

	this.eyes_6 = new lib.option_face_6_mc();
	this.eyes_6.setTransform(255,95);

	this.eyes_5 = new lib.option_face_5_mc();
	this.eyes_5.setTransform(95,95);

	this.eyes_11 = new lib.option_face_11_mc();
	this.eyes_11.setTransform(95,255);

	this.eyes_12 = new lib.option_face_12_mc();
	this.eyes_12.setTransform(255,255);

	this.eyes_10 = new lib.option_face_10_mc();
	this.eyes_10.setTransform(255,95);

	this.eyes_9 = new lib.option_face_9_mc();
	this.eyes_9.setTransform(95,95);

	this.eyes_15 = new lib.option_face_15_mc();
	this.eyes_15.setTransform(95,255);

	this.eyes_16 = new lib.option_face_16_mc();
	this.eyes_16.setTransform(255,255);

	this.eyes_14 = new lib.option_face_14_mc();
	this.eyes_14.setTransform(255,95);

	this.eyes_13 = new lib.option_face_13_mc();
	this.eyes_13.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_4},{t:this.eyes_3}]}).to({state:[{t:this.eyes_5},{t:this.eyes_6},{t:this.eyes_8},{t:this.eyes_7}]},1).to({state:[{t:this.eyes_9},{t:this.eyes_10},{t:this.eyes_12},{t:this.eyes_11}]},1).to({state:[{t:this.eyes_13},{t:this.eyes_14},{t:this.eyes_16},{t:this.eyes_15}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
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


(lib.hero_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.hero_body_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.4,-179.7,279,359);
p.frameBounds = [rect];


(lib.dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.dress1();
	this.body_1.setTransform(278.8,12.6);

	this.body_2 = new lib.dress2();
	this.body_2.setTransform(279.7,17.6);

	this.body_3 = new lib.dress3();
	this.body_3.setTransform(276.8,19.6);

	this.body_4 = new lib.dress4();
	this.body_4.setTransform(278.9,12.7);

	this.body_5 = new lib.dress5();
	this.body_5.setTransform(281.6,22.1);

	this.body_6 = new lib.dress6();
	this.body_6.setTransform(281.7,20.9);

	this.body_7 = new lib.dress7();
	this.body_7.setTransform(280.7,20.6);

	this.body_8 = new lib.dress8();
	this.body_8.setTransform(278,39.4);

	this.body_9 = new lib.dress9();
	this.body_9.setTransform(280.7,19.5);

	this.body_10 = new lib.dress10();
	this.body_10.setTransform(280,39.6);

	this.body_11 = new lib.dress11();
	this.body_11.setTransform(278.8,-0.9);

	this.body_12 = new lib.dress12();
	this.body_12.setTransform(280,16.6);

	this.body_13 = new lib.dress_13();
	this.body_13.setTransform(281.2,32.8);

	this.body_14 = new lib.dress_14();
	this.body_14.setTransform(281,27.9);

	this.body_15 = new lib.dress_15();
	this.body_15.setTransform(284,35.4);

	this.body_16 = new lib.dress_16();
	this.body_16.setTransform(281.4,29.4);

	this.body_17 = new lib.dress_17();
	this.body_17.setTransform(278.9,16.5);

	this.body_18 = new lib.dress_18();
	this.body_18.setTransform(278.8,29.9);

	this.body_19 = new lib.dress_19();
	this.body_19.setTransform(281,25.9);

	this.body_20 = new lib.dress_20();
	this.body_20.setTransform(278.8,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[{t:this.body_13}]},1).to({state:[{t:this.body_14}]},1).to({state:[{t:this.body_15}]},1).to({state:[{t:this.body_16}]},1).to({state:[{t:this.body_17}]},1).to({state:[{t:this.body_18}]},1).to({state:[{t:this.body_19}]},1).to({state:[{t:this.body_20}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(189.8,-43.8,178,113);
p.frameBounds = [rect, new cjs.Rectangle(179,-43.8,201,123), new cjs.Rectangle(192.1,-43.8,170,127), new cjs.Rectangle(189.8,-43.8,178,113), new cjs.Rectangle(160.6,-43.8,244,144), new cjs.Rectangle(182,-41.8,199,125), new cjs.Rectangle(183.5,-43.8,194,129), new cjs.Rectangle(170,-43.8,216,166), new cjs.Rectangle(186.2,-41.7,188,127), new cjs.Rectangle(195,-14.2,170.1,108), new cjs.Rectangle(189.7,-43.8,178,86), new cjs.Rectangle(177.4,-43.8,205,135), new cjs.Rectangle(174,-43.8,214,153), new cjs.Rectangle(174.5,-43.8,213,143), new cjs.Rectangle(157.3,-43.8,254,158), new cjs.Rectangle(174.2,-42,214,150), new cjs.Rectangle(187,-43.8,184,121), new cjs.Rectangle(186.5,-43.8,185,147), new cjs.Rectangle(156.6,-43.8,248,145), new cjs.Rectangle(186.5,-43.8,185,152), null];


(lib.check_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.body_check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect, null];


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


(lib.category_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_category_4_img();
	this.instance.setTransform(-30,-29,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.category_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_category_3_img();
	this.instance.setTransform(-23,-23,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.category_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_category_2_img();
	this.instance.setTransform(-23,-23,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.category_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_category_1_img();
	this.instance.setTransform(-28,-28,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

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


(lib.subcategory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_subcategory_4_1_img();
	this.instance.setTransform(-24,-24,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_subcategory_3_3_img();
	this.instance.setTransform(-23,-21,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_subcategory_3_1_img();
	this.instance.setTransform(-25,-25,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_subcategory_2_3_img();
	this.instance.setTransform(-23,-23,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_subcategory_2_2_img();
	this.instance.setTransform(-27,-27,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_subcategory_2_1_img();
	this.instance.setTransform(-31.8,-18.3,0.867,0.867,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_subcategory_1_4_img();
	this.instance.setTransform(-30,-28,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_subcategory_1_3_img();
	this.instance.setTransform(-24,-24,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_subcategory_1_2_img();
	this.instance.setTransform(-24,-22,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_subcategory_1_1_img();
	this.instance.setTransform(-28,-28,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.panels_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hero_1_category_1_subcategory_1:0,hero_1_category_1_subcategory_2:1,hero_1_category_1_subcategory_3:2,hero_1_category_1_subcategory_4:3,hero_1_category_2_subcategory_1:4,hero_1_category_2_subcategory_2:5,hero_1_category_3_subcategory_1:6,hero_1_category_3_subcategory_2:7,hero_1_category_3_subcategory_3:8,hero_1_category_4_subcategory_1:9});

	// category
	this.category_4 = new lib.category_4_mc();
	this.category_4.setTransform(-40,250);

	this.category_3 = new lib.category_3_mc();
	this.category_3.setTransform(-40,180);

	this.category_2 = new lib.category_2_mc();
	this.category_2.setTransform(-40,110);

	this.category_1 = new lib.category_1_mc();
	this.category_1.setTransform(-40,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.category_1},{t:this.category_2},{t:this.category_3},{t:this.category_4}]}).wait(10));

	// subcategory
	this.subcategory_4_1 = new lib.subcategory_4_1_mc();
	this.subcategory_4_1.setTransform(250,-40);

	this.subcategory_3_1 = new lib.subcategory_3_1_mc();
	this.subcategory_3_1.setTransform(180,-40);

	this.subcategory_2_1 = new lib.subcategory_2_1_mc();
	this.subcategory_2_1.setTransform(110,-40);

	this.subcategory_1_1 = new lib.subcategory_1_1_mc();
	this.subcategory_1_1.setTransform(40,-40);

	this.subcategory_2_2 = new lib.subcategory_2_2_mc();
	this.subcategory_2_2.setTransform(110,-40);

	this.subcategory_1_2 = new lib.subcategory_1_2_mc();
	this.subcategory_1_2.setTransform(40,-40);

	this.subcategory_3_3 = new lib.subcategory_3_3_mc();
	this.subcategory_3_3.setTransform(180,-40);

	this.subcategory_2_3 = new lib.subcategory_2_3_mc();
	this.subcategory_2_3.setTransform(110,-40);

	this.subcategory_1_3 = new lib.subcategory_1_3_mc();
	this.subcategory_1_3.setTransform(40,-40);

	this.subcategory_1_4 = new lib.subcategory_1_4_mc();
	this.subcategory_1_4.setTransform(40,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subcategory_1_1},{t:this.subcategory_2_1},{t:this.subcategory_3_1},{t:this.subcategory_4_1}]}).to({state:[{t:this.subcategory_1_2},{t:this.subcategory_2_2}]},4).to({state:[{t:this.subcategory_1_3},{t:this.subcategory_2_3},{t:this.subcategory_3_3}]},2).to({state:[{t:this.subcategory_1_4}]},3).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.panel_1}]}).to({state:[{t:this.panel_2}]},1).to({state:[{t:this.panel_3}]},1).to({state:[{t:this.panel_4}]},1).to({state:[{t:this.panel_5}]},1).to({state:[{t:this.panel_6}]},1).to({state:[{t:this.panel_7}]},1).to({state:[{t:this.panel_8}]},1).to({state:[{t:this.panel_9}]},1).to({state:[{t:this.panel_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-190,440,645);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-85,-190,448.7,645), rect, rect, rect, rect, rect, new cjs.Rectangle(-85,-190,440,645)];


(lib.hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.accessory_all();
	this.accessory.setTransform(-104.4,124.1,1,1,0,0,0,181,2);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.crown_all();
	this.headdress.setTransform(-7.5,-71.3);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// mutch
	this.mutch = new lib.hat_all();
	this.mutch.setTransform(-7.5,-71.3);

	this.timeline.addTween(cjs.Tween.get(this.mutch).wait(1));

	// eyes
	this.eyes = new lib.face_all();
	this.eyes.setTransform(-4.7,29.4,1,1,0,0,0,-0.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// collar
	this.collar = new lib.collar_all();
	this.collar.setTransform(-10.2,107);

	this.timeline.addTween(cjs.Tween.get(this.collar).wait(1));

	// dress
	this.dress = new lib.dress_all();
	this.dress.setTransform(-2.4,128.1,1,1,0,0,0,283,6);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// skin
	this.skin = new lib.hero_body_mc();
	this.skin.setTransform(-5.7,45.6);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// wings
	this.wings = new lib.wings_all();
	this.wings.setTransform(-5.3,87.7);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

	// tail
	this.tail = new lib.tail_all();
	this.tail.setTransform(83.3,162.2);

	this.timeline.addTween(cjs.Tween.get(this.tail).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197.5,-232.1,380,457);
p.frameBounds = [rect];


(lib.ConstructorScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(395,540,0.688,0.688);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.reset_btn = new lib.reset_btn();
	this.reset_btn.setTransform(535,540);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.reset_btn(), 3);

	this.random_btn = new lib.random_btn();
	this.random_btn.setTransform(695,540);
	new cjs.ButtonHelper(this.random_btn, 0, 1, 2, false, new lib.random_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.random_btn},{t:this.reset_btn},{t:this.done_btn}]}).wait(1));

	// panels
	this.panels_mc = new lib.panels_mc();
	this.panels_mc.setTransform(440,90);

	this.timeline.addTween(cjs.Tween.get(this.panels_mc).wait(1));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(179.5,316.5,1,1,0,0,0,-7.5,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// podium
	this.podium_mc = new lib.podium_mc();
	this.podium_mc.setTransform(180,515,1,1,0,0,0,0,-60);

	this.timeline.addTween(cjs.Tween.get(this.podium_mc).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1251.8);
p.frameBounds = [rect];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(130,560,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(4));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(406,320);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({skewY:180,x:395},0).wait(1).to({skewY:0,x:406,y:345},0).wait(1).to({skewY:180,x:395},0).wait(1));

	// decor
	this.podium_mc = new lib.podium_mc();
	this.podium_mc.setTransform(400,515,1,1,0,0,0,0,-60);

	this.timeline.addTween(cjs.Tween.get(this.podium_mc).wait(1).to({_off:true},1).wait(2));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,645);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-200,0,1200,600), rect];


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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,675);
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
	this.instance.setTransform(400,490);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.102;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_8_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1541.9);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(400,800);
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
	this.next_mc.setTransform(690,340);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(110,340);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.facebook_btn},{t:this.social_network_mc}]}).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1189.9);
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

	this.instance_3 = new lib.ConstructorScreen();

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

	this.instance_8 = new lib.OrientationLockScreen();

	this.instance_9 = new lib.CurtainScreen();

	this.instance_10 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_7},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1541.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1251.8), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1180), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,15,250,70), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1000,0,2800,600), rect=null, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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