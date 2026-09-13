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
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"},
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"},
		{src:"library/images/storage_atlas_18.png", id:"storage_atlas_18"},
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"},
		{src:"library/images/storage_atlas_20.png", id:"storage_atlas_20"},
		{src:"library/images/storage_atlas_21.png", id:"storage_atlas_21"},
		{src:"library/images/storage_atlas_22.png", id:"storage_atlas_22"},
		{src:"library/images/storage_atlas_23.png", id:"storage_atlas_23"},
		{src:"library/images/storage_atlas_24.png", id:"storage_atlas_24"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1200,600],[0,602,1015,600]]},
		{name:"storage_atlas_7", frames: [[0,454,758,600],[0,0,1083,452]]},
		{name:"storage_atlas_8", frames: [[0,0,758,600],[0,602,758,600]]},
		{name:"storage_atlas_9", frames: [[0,602,619,600],[0,0,758,600],[621,602,628,544]]},
		{name:"storage_atlas_10", frames: [[0,0,628,544],[630,0,628,544],[0,546,628,544]]},
		{name:"storage_atlas_11", frames: [[758,0,497,560],[0,821,1200,200],[0,441,756,378],[0,0,731,439]]},
		{name:"storage_atlas_12", frames: [[726,320,435,490],[792,812,394,470],[387,812,403,474],[0,320,724,317],[0,0,726,318],[0,639,385,500]]},
		{name:"storage_atlas_13", frames: [[746,556,500,300],[0,282,327,529],[0,813,342,474],[329,282,337,486],[344,770,400,400],[0,0,640,280],[642,0,640,280],[746,858,520,280],[668,282,560,272]]},
		{name:"storage_atlas_14", frames: [[0,282,520,280],[0,564,520,280],[0,846,520,280],[522,564,520,280],[522,846,520,280],[522,0,520,280],[0,0,520,280],[522,282,520,280]]},
		{name:"storage_atlas_15", frames: [[522,0,520,280],[522,282,336,432],[860,282,380,380],[522,716,380,380],[904,664,324,423],[0,0,520,280],[0,282,520,280],[0,564,520,280],[0,846,520,280]]},
		{name:"storage_atlas_16", frames: [[822,547,324,323],[0,0,312,433],[822,183,301,362],[943,872,319,316],[668,0,628,181],[0,435,307,408],[0,845,304,382],[314,0,284,373],[309,435,289,393],[668,872,273,373],[306,845,360,320],[600,183,220,510]]},
		{name:"storage_atlas_17", frames: [[678,641,300,300],[972,314,300,300],[0,317,380,260],[0,887,300,300],[980,918,300,300],[308,733,300,300],[980,616,300,300],[0,579,306,306],[0,0,319,315],[626,0,294,325],[382,406,294,325],[922,0,292,312],[678,327,292,312],[382,0,242,404],[610,943,340,240]]},
		{name:"storage_atlas_18", frames: [[0,310,280,260],[512,200,189,272],[282,310,228,300],[0,572,228,300],[0,0,251,308],[253,0,251,308],[506,0,289,198],[982,424,230,210],[924,849,230,210],[232,1005,230,210],[464,1005,230,210],[935,0,230,210],[0,1086,230,210],[924,637,230,210],[696,1061,230,210],[750,425,230,210],[935,212,230,210],[928,1061,230,210],[460,793,230,210],[0,874,230,210],[692,793,230,210],[230,612,228,229],[703,200,230,223],[460,612,288,179]]},
		{name:"storage_atlas_19", frames: [[464,636,380,120],[464,880,380,120],[846,984,380,120],[464,758,380,120],[464,1002,380,120],[846,862,380,120],[464,1124,380,120],[846,1106,380,120],[928,634,212,226],[928,424,231,208],[0,0,230,210],[696,0,230,210],[464,0,230,210],[928,0,230,210],[232,0,230,210],[0,424,230,210],[232,424,230,210],[0,636,230,210],[0,212,230,210],[928,212,230,210],[0,1060,230,210],[696,212,230,210],[232,636,230,210],[464,212,230,210],[0,848,230,210],[232,212,230,210],[232,848,230,210],[232,1060,230,210],[464,424,230,210],[696,424,230,210]]},
		{name:"storage_atlas_20", frames: [[382,854,380,120],[0,1098,380,120],[0,976,380,120],[382,0,380,120],[0,0,380,120],[0,122,380,120],[0,244,380,120],[0,366,380,120],[382,122,380,120],[382,244,380,120],[0,488,380,120],[0,610,380,120],[0,732,380,120],[0,854,380,120],[382,366,380,120],[382,488,380,120],[382,610,380,120],[382,732,380,120],[382,976,380,120],[382,1098,228,196],[854,1092,240,180],[1006,0,240,180],[854,910,240,180],[1006,182,240,180],[764,364,240,180],[764,728,240,180],[612,1098,240,180],[1006,364,240,180],[764,0,240,180],[1006,546,240,180],[764,182,240,180],[1006,728,240,180],[764,546,240,180]]},
		{name:"storage_atlas_21", frames: [[1100,1101,190,190],[726,364,240,180],[242,1092,240,180],[484,364,240,180],[242,546,240,180],[726,182,240,180],[242,910,240,180],[242,364,240,180],[484,182,240,180],[0,1092,240,180],[242,182,240,180],[242,728,240,180],[968,182,240,180],[916,720,212,187],[1130,572,163,237],[1091,364,201,206],[693,955,213,171],[687,741,179,212],[484,1100,207,182],[484,909,201,189],[484,546,214,193],[700,546,214,193],[1100,909,190,190],[908,1101,190,190],[908,909,190,190],[0,0,240,180],[242,0,240,180],[0,728,240,180],[0,910,240,180],[0,364,240,180],[484,0,240,180],[726,0,240,180],[0,546,240,180],[968,0,240,180],[0,182,240,180],[968,364,121,354]]},
		{name:"storage_atlas_22", frames: [[0,0,190,190],[0,1086,180,180],[873,540,83,243],[980,768,140,140],[1122,768,140,140],[721,1080,140,140],[1004,910,140,140],[958,626,140,140],[862,938,140,140],[1100,626,140,140],[863,1080,140,140],[1146,910,140,140],[1005,1165,150,120],[182,722,180,180],[602,0,106,274],[509,680,153,161],[612,276,168,142],[380,162,179,168],[327,1047,110,227],[1051,523,201,101],[1051,397,169,124],[721,631,123,163],[782,331,141,154],[848,0,153,154],[0,384,228,156],[848,156,131,173],[364,715,143,180],[710,0,136,174],[981,190,128,174],[182,1047,143,202],[1003,0,125,188],[439,1031,137,177],[925,366,124,172],[1111,224,130,171],[1005,1052,166,111],[385,516,157,162],[572,434,144,169],[578,843,116,169],[192,0,220,160],[439,1210,280,80],[0,192,190,190],[230,434,340,80],[1130,0,102,222],[192,162,186,188],[721,487,150,142],[0,542,194,178],[196,542,187,171],[389,897,187,132],[414,0,186,159],[838,796,140,140],[578,1014,140,140],[696,796,140,140],[720,938,140,140],[182,904,205,141],[0,722,180,180],[0,904,180,180],[230,352,380,80]]},
		{name:"storage_atlas_23", frames: [[435,243,120,120],[736,122,120,120],[579,138,120,120],[609,561,120,100],[731,561,60,180],[508,799,60,160],[980,122,120,120],[858,122,120,120],[1102,122,120,120],[701,244,120,120],[557,260,120,120],[304,635,96,131],[319,133,114,128],[1181,1114,106,61],[1036,1174,90,76],[94,567,115,117],[392,799,114,85],[1155,864,106,92],[0,716,78,157],[914,1194,120,60],[402,662,160,73],[926,1106,109,66],[464,961,87,99],[679,366,120,115],[977,339,162,81],[222,0,127,127],[810,838,118,81],[570,805,118,81],[344,928,118,81],[766,755,118,81],[570,888,118,81],[690,838,118,81],[1121,1050,58,115],[169,852,88,115],[470,104,107,137],[242,1241,135,54],[293,768,97,107],[0,230,101,109],[80,813,87,117],[886,755,86,78],[498,533,109,117],[1141,339,134,97],[975,747,96,104],[1047,873,83,102],[622,0,112,136],[1023,523,120,95],[201,716,90,134],[1157,685,140,75],[930,853,115,74],[1145,523,152,74],[975,620,136,62],[1040,977,79,91],[1141,438,151,83],[351,0,117,131],[823,244,152,93],[0,472,152,93],[977,244,152,93],[1131,244,152,93],[823,339,152,93],[154,472,152,93],[242,1011,132,61],[553,971,132,61],[824,929,132,61],[687,984,132,61],[690,921,132,61],[553,1034,132,61],[537,382,92,149],[441,365,94,146],[0,567,92,147],[308,487,94,146],[404,513,92,147],[211,567,91,147],[0,82,105,146],[1073,747,80,124],[319,365,120,120],[402,737,180,60],[793,569,180,60],[793,631,180,60],[584,743,180,60],[975,685,180,60],[793,693,180,60],[522,1266,220,30],[801,434,168,76],[631,483,168,76],[971,434,168,76],[0,0,220,80],[379,1241,141,47],[801,512,220,55],[1263,762,29,254],[1224,1018,69,94],[812,1194,100,73],[1155,762,99,100],[1224,0,50,210],[267,129,50,297],[242,1116,158,50],[736,0,120,120],[1128,1177,80,80],[584,1169,112,70],[698,1050,112,70],[698,1122,112,70],[698,1194,112,70],[812,1050,112,70],[926,1034,112,70],[812,1122,112,70],[470,1097,112,70],[356,1168,112,70],[584,1097,112,70],[242,1168,112,70],[470,1169,112,70],[0,350,120,120],[107,228,120,120],[122,350,120,120],[858,0,120,120],[1102,0,120,120],[980,0,120,120],[1132,958,90,90],[0,1034,240,40],[102,969,240,40],[259,886,240,40],[0,1202,240,40],[0,1118,240,40],[0,1244,240,40],[0,1076,240,40],[0,1160,240,40],[821,992,200,40],[242,1074,200,40],[0,932,100,100],[319,263,100,100],[470,0,150,102],[107,129,158,97],[1145,599,133,84],[584,663,119,77],[94,686,105,125]]},
		{name:"storage_atlas_24", frames: [[165,539,50,50],[470,132,34,11],[75,305,90,50],[348,281,90,50],[321,541,50,50],[0,572,50,50],[373,541,50,50],[54,565,50,50],[106,586,48,48],[217,584,48,48],[240,312,99,38],[240,352,99,38],[0,357,99,38],[341,348,99,38],[101,366,99,38],[341,388,99,38],[0,124,106,54],[240,267,106,43],[301,62,86,71],[108,124,80,70],[150,675,35,22],[70,678,35,22],[187,676,35,22],[270,177,35,22],[202,366,35,22],[0,666,35,22],[107,0,105,60],[214,0,105,60],[0,62,105,60],[321,0,105,60],[107,62,105,60],[0,0,105,60],[267,613,115,18],[267,593,115,18],[384,613,115,18],[384,633,115,18],[267,633,115,18],[384,593,115,18],[190,136,135,39],[202,392,133,27],[214,62,85,72],[75,262,69,33],[224,695,41,18],[150,700,41,18],[310,695,41,18],[267,695,41,18],[353,695,41,18],[396,695,41,18],[298,428,57,54],[408,653,40,40],[138,406,45,74],[440,281,63,65],[0,246,73,64],[442,348,47,75],[237,421,59,54],[0,312,65,42],[86,452,25,111],[357,428,25,111],[470,0,25,111],[0,459,25,111],[27,459,25,111],[438,475,25,111],[59,452,25,111],[384,428,25,111],[411,428,25,111],[237,477,50,53],[465,475,40,55],[465,532,40,43],[414,95,10,11],[0,397,57,60],[389,95,23,38],[389,62,31,31],[269,536,50,50],[428,0,40,147],[156,633,40,40],[198,634,40,40],[156,591,40,40],[52,617,40,40],[94,636,40,40],[366,653,40,40],[282,653,40,40],[0,624,40,40],[324,653,40,40],[240,653,40,40],[42,659,12,130],[492,653,12,130],[497,0,12,130],[450,653,12,130],[56,659,12,130],[464,653,12,130],[478,653,12,130],[136,636,12,130],[327,135,78,64],[407,149,78,64],[190,177,78,64],[0,180,78,64],[80,196,78,64],[270,201,78,64],[350,215,78,64],[430,215,78,64],[217,532,50,50],[113,534,50,50],[113,482,50,50],[289,484,50,50],[165,487,50,50],[160,243,78,60],[167,305,71,59],[185,421,50,64],[442,425,66,48],[59,406,77,44]]}
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
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.back_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
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
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottle1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottle_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.category_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.category_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.category_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.category_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.category_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.category_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.category_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.category_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.category_5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.check_blush_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.check_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.check_hairstyle_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.check_lips_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.check_shadows_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_de_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_es_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_id_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_it_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_1_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_de_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_es_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_id_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_it_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_2_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.glass_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hand_kursor_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_float1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_float2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_float3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_float4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_float5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_leg1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_swimsuit1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_swimsuit2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_swimsuit3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_swimsuit4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_swimsuit5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_swimsuit6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_swimsuit7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_swimsuit8_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_swimsuit9_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_float1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_float2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_float3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_float4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_float5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_leg1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit8_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit9_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.ice_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.ladder1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.ladder2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.ladder3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.leaf1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.leaf2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.leaf3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.leaf4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.lime1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.lime2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new17_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new22_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new26_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new37_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new39_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new9_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mixer12_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.mixer1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.mixer2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.mixer3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.mixer4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.mixer5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mixer6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.mixer7_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.mixer8_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.mixer9_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.nav_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new12_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new13_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new14_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new16_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.plate_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor4_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pool_decor5_4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new20_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new34_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_23_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_24_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_25_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_26_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_27_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_28_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_29_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_30_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_31_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_32_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_33_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new14_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new22_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new28_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new30_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new36_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new43_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new45_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new49_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.solominka_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.tablet0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tablet10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.tablet1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.tablet2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.tablet3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.tablet4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.tablet6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.tablet7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.tablet8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.tablet9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.thoughts_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.throw_out_trash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.trash_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.trash_item10_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.trash_item1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.trash_item2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.trash_item3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.trash_item4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.trash_item5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.trash_item6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.trash_item7_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.trash_item8_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.trash_item9_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.wave_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-190,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-40,380,80);
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


(lib.wave_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wave_img();
	this.instance.setTransform(-560,-272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-560,-272,560,272);
p.frameBounds = [rect];


(lib.wardrobe_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-110,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-255,220,510);
p.frameBounds = [rect];


(lib.wardrobe_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-180,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-160,360,320);
p.frameBounds = [rect];


(lib.trash_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.trash_img();
	this.instance.setTransform(-136.5,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.5,-186.5,273,373);
p.frameBounds = [rect];


(lib.trash_item10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.trash_item10_img();
	this.instance.setTransform(-95,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.2,scaleY:1.2,x:-113,y:-58},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AveIIIAgjiIMvvRIKCB6IHsHhInFJoIxbCUg");
	this.shape.setTransform(-21.1,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.2,-65.7,198.3,136.9);
p.frameBounds = [rect, rect, null];


(lib.trash_item9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.trash_item9_img();
	this.instance.setTransform(-37,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.21,scaleY:1.21,x:-45,y:-30},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmDGDQihigAAjjQAAjiChihQChihDiAAQDkAACgChQCiChgBDiQABDjiiCgQigCijkAAQjiAAihiig");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, rect, null];


(lib.trash_item7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.trash_item7_img();
	this.instance.setTransform(-64,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.22,scaleY:1.22,x:-79,y:-88},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiaJWIpaw9IGnlfIJoF+IHaPYImjE3g");
	this.shape.setTransform(-14,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-97.5,151.6,167.9);
p.frameBounds = [rect, rect, null];


(lib.trash_item6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.trash_item6_img();
	this.instance.setTransform(-26,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.28,scaleY:1.28,x:-32,y:-40.9},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmDGEQihihAAjjQAAjiChihQChihDiAAQDjAAChChQCiChgBDiQABDjiiChQihChjjAAQjiAAihihg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, rect, null];


(lib.trash_item5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.trash_item5_img();
	this.instance.setTransform(-60,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.27,scaleY:1.27,x:-77,y:-65},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsDFtIh7qBIDQjtITRhCIFcM+IoOEHIoBBCg");
	this.shape.setTransform(2.4,-16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.1,-74.6,179.2,116.1);
p.frameBounds = [rect, rect, null];


(lib.trash_item4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.trash_item4_img();
	this.instance.setTransform(-71,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.24,scaleY:1.24,x:-88,y:-62},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("At+IpIAAnCIamrEIBXCCIlrOMImcCtg");
	this.shape.setTransform(-5.5,-10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-71,179.1,121.3);
p.frameBounds = [rect, rect, null];


(lib.trash_item3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.trash_item3_img();
	this.instance.setTransform(-33,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.27,scaleY:1.27,x:-41,y:-43},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwivD3AAQD4AACvCvQCxCwAAD3QAAD4ixCwQivCwj4gBQj3ABiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, null];


(lib.trash_item2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.trash_item2_img();
	this.instance.setTransform(-73,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.15,scaleY:1.15,x:-84,y:-44},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwjAhIgCjIIMPoQIC9gGIRXHXIAoD9IqNKEIlfAjg");
	this.shape.setTransform(8.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.7,-59.7,212.5,140.5);
p.frameBounds = [rect, rect, null];


(lib.trash_item1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.trash_item1_img();
	this.instance.setTransform(-39,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.26,scaleY:1.26,x:-49,y:-37.7},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmDGEQihihAAjjQAAjiChihQChihDiAAQDkAACgChQCiChgBDiQABDjiiChQigCijkgBQjiABihiig");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, rect, null];


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


(lib.ti8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.trash_item8_img();
	this.instance.setTransform(-33,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-24,66,48);
p.frameBounds = [rect];


(lib.throw_out_trash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.throw_out_trash_1_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.thoughts_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.thoughts_img();
	this.instance.setTransform(-170,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-120,340,240);
p.frameBounds = [rect];


(lib.tablet10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tablet10_img();
	this.instance.setTransform(-153.5,-204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-153.5,-204,307,408);
p.frameBounds = [rect];


(lib.tablet9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tablet9_img();
	this.instance.setTransform(-144.5,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.5,-196.5,289,393);
p.frameBounds = [rect];


(lib.tablet8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tablet8_img();
	this.instance.setTransform(-142,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142,-186.5,284,373);
p.frameBounds = [rect];


(lib.tablet7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tablet7_img();
	this.instance.setTransform(-121,-202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121,-202,242,404);
p.frameBounds = [rect];


(lib.tablet5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tablet6_img();
	this.instance.setTransform(-160,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-291,304,382);
p.frameBounds = [rect];


(lib.tablet4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tablet4_img();
	this.instance.setTransform(-145,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-85,288,179);
p.frameBounds = [rect];


(lib.tablet3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tablet3_img();
	this.instance.setTransform(-115,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-111.5,230,223);
p.frameBounds = [rect];


(lib.tablet2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tablet2_img();
	this.instance.setTransform(-114,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-114.5,228,229);
p.frameBounds = [rect];


(lib.sw_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AysVmMAAAgrLMAivAAAIAACHICqAAMAAAApEg");
	mask.setTransform(-28.9,139.2);

	// Слой 3
	this.instance = new lib.hero2_leg1_1_img();
	this.instance.setTransform(-134.2,36);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_swimsuit5_img();
	this.instance_1.setTransform(-33,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.2,-86,195.3,334);
p.frameBounds = [rect];


(lib.solominka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.solominka_img();
	this.instance.setTransform(-60.5,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-177,121,354);
p.frameBounds = [rect];


(lib.shadow_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("ApYJZQj4j6AAlfQAAleD4j6QD6j4FeAAQFgAAD4D4QD6D6gBFeQABFfj6D6Qj4D4lgAAQleAAj6j4g");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-79,170,170);
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


(lib.shadow_categories_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AnKHLQi/i+AAkNQAAkMC/i/QC+i+EMAAQENAAC/C+QC+C/AAEMQAAENi+C+Qi/C+kNABQkMgBi+i+g");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-62,130,130);
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


(lib.semicircular_arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.semicircular_arrow_1_img();
	this.instance.setTransform(-120,-90);

	this.instance_1 = new lib.semicircular_arrow_2_img();
	this.instance_1.setTransform(-120,-90);

	this.instance_2 = new lib.semicircular_arrow_3_img();
	this.instance_2.setTransform(-120,-90);

	this.instance_3 = new lib.semicircular_arrow_4_img();
	this.instance_3.setTransform(-120,-90);

	this.instance_4 = new lib.semicircular_arrow_5_img();
	this.instance_4.setTransform(-120,-90);

	this.instance_5 = new lib.semicircular_arrow_6_img();
	this.instance_5.setTransform(-120,-90);

	this.instance_6 = new lib.semicircular_arrow_7_img();
	this.instance_6.setTransform(-120,-90);

	this.instance_7 = new lib.semicircular_arrow_8_img();
	this.instance_7.setTransform(-120,-90);

	this.instance_8 = new lib.semicircular_arrow_9_img();
	this.instance_8.setTransform(-120,-90);

	this.instance_9 = new lib.semicircular_arrow_10_img();
	this.instance_9.setTransform(-120,-90);

	this.instance_10 = new lib.semicircular_arrow_11_img();
	this.instance_10.setTransform(-120,-90);

	this.instance_11 = new lib.semicircular_arrow_12_img();
	this.instance_11.setTransform(-120,-90);

	this.instance_12 = new lib.semicircular_arrow_13_img();
	this.instance_12.setTransform(-120,-90);

	this.instance_13 = new lib.semicircular_arrow_14_img();
	this.instance_13.setTransform(-120,-90);

	this.instance_14 = new lib.semicircular_arrow_15_img();
	this.instance_14.setTransform(-120,-90);

	this.instance_15 = new lib.semicircular_arrow_16_img();
	this.instance_15.setTransform(-120,-90);

	this.instance_16 = new lib.semicircular_arrow_17_img();
	this.instance_16.setTransform(-120,-90);

	this.instance_17 = new lib.semicircular_arrow_18_img();
	this.instance_17.setTransform(-120,-90);

	this.instance_18 = new lib.semicircular_arrow_19_img();
	this.instance_18.setTransform(-120,-90);

	this.instance_19 = new lib.semicircular_arrow_20_img();
	this.instance_19.setTransform(-120,-90);

	this.instance_20 = new lib.semicircular_arrow_21_img();
	this.instance_20.setTransform(-120,-90);

	this.instance_21 = new lib.semicircular_arrow_22_img();
	this.instance_21.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).wait(3));

	// bg
	this.instance_22 = new lib.semicircular_arrow_0_img();
	this.instance_22.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-90,240,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.round_arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.round_arrow_1_img();
	this.instance.setTransform(-115,-105);

	this.instance_1 = new lib.round_arrow_2_img();
	this.instance_1.setTransform(-115,-105);

	this.instance_2 = new lib.round_arrow_3_img();
	this.instance_2.setTransform(-115,-105);

	this.instance_3 = new lib.round_arrow_4_img();
	this.instance_3.setTransform(-115,-105);

	this.instance_4 = new lib.round_arrow_5_img();
	this.instance_4.setTransform(-115,-105);

	this.instance_5 = new lib.round_arrow_6_img();
	this.instance_5.setTransform(-115,-105);

	this.instance_6 = new lib.round_arrow_7_img();
	this.instance_6.setTransform(-115,-105);

	this.instance_7 = new lib.round_arrow_8_img();
	this.instance_7.setTransform(-115,-105);

	this.instance_8 = new lib.round_arrow_9_img();
	this.instance_8.setTransform(-115,-105);

	this.instance_9 = new lib.round_arrow_10_img();
	this.instance_9.setTransform(-115,-105);

	this.instance_10 = new lib.round_arrow_11_img();
	this.instance_10.setTransform(-115,-105);

	this.instance_11 = new lib.round_arrow_12_img();
	this.instance_11.setTransform(-115,-105);

	this.instance_12 = new lib.round_arrow_13_img();
	this.instance_12.setTransform(-115,-105);

	this.instance_13 = new lib.round_arrow_14_img();
	this.instance_13.setTransform(-115,-105);

	this.instance_14 = new lib.round_arrow_15_img();
	this.instance_14.setTransform(-115,-105);

	this.instance_15 = new lib.round_arrow_16_img();
	this.instance_15.setTransform(-115,-105);

	this.instance_16 = new lib.round_arrow_17_img();
	this.instance_16.setTransform(-115,-105);

	this.instance_17 = new lib.round_arrow_18_img();
	this.instance_17.setTransform(-115,-105);

	this.instance_18 = new lib.round_arrow_19_img();
	this.instance_18.setTransform(-115,-105);
	this.instance_18._off = true;

	this.instance_19 = new lib.round_arrow_20_img();
	this.instance_19.setTransform(-115,-105);

	this.instance_20 = new lib.round_arrow_21_img();
	this.instance_20.setTransform(-115,-105);

	this.instance_21 = new lib.round_arrow_22_img();
	this.instance_21.setTransform(-115,-105);

	this.instance_22 = new lib.round_arrow_23_img();
	this.instance_22.setTransform(-115,-105);

	this.instance_23 = new lib.round_arrow_24_img();
	this.instance_23.setTransform(-115,-105);

	this.instance_24 = new lib.round_arrow_25_img();
	this.instance_24.setTransform(-115,-105);

	this.instance_25 = new lib.round_arrow_26_img();
	this.instance_25.setTransform(-115,-105);

	this.instance_26 = new lib.round_arrow_27_img();
	this.instance_26.setTransform(-115,-105);

	this.instance_27 = new lib.round_arrow_28_img();
	this.instance_27.setTransform(-115,-105);

	this.instance_28 = new lib.round_arrow_29_img();
	this.instance_28.setTransform(-115,-105);

	this.instance_29 = new lib.round_arrow_30_img();
	this.instance_29.setTransform(-115,-105);

	this.instance_30 = new lib.round_arrow_31_img();
	this.instance_30.setTransform(-115,-105);

	this.instance_31 = new lib.round_arrow_32_img();
	this.instance_31.setTransform(-115,-105);

	this.instance_32 = new lib.round_arrow_33_img();
	this.instance_32.setTransform(-115,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({_off:false},0).wait(3).to({_off:true},1).wait(17));

	// bg
	this.instance_33 = new lib.round_arrow_0_img();
	this.instance_33.setTransform(-115,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-105,230,210);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.raft_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_float5_img();
	this.instance.setTransform(-94.8,-136.7,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.8,-136.7,189.7,273.6);
p.frameBounds = [rect];


(lib.raft_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_float5_img();
	this.instance.setTransform(-89.5,-107.6,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArIL2IkuqrIHByQICehMII6CTIHjEGIFUIsIAdF2IkKNwIjMB4g");
	this.shape.setTransform(-2.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.9,-116.3,203.1,234.1);
p.frameBounds = [rect];


(lib.raft_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_float4_img();
	this.instance.setTransform(-92.5,-91.6,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.raft_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_float4_img();
	this.instance.setTransform(-88,-122,0.564,0.564);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlIRqIlunaIkK1TIHYpvILUCoILVUSIgWJZIkXHDIoHCPg");
	this.shape.setTransform(-2.2,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.3,-134.5,192.3,266.2);
p.frameBounds = [rect];


(lib.raft_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_float3_img();
	this.instance.setTransform(-91.5,-90.3,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.raft_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_float3_img();
	this.instance.setTransform(-91,-91,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKfQkXkWAAmJQAAmIEXkWQEXkWGHgBQGJABEXEWQEVEWABGIQgBGJkVEWQkXEXmJgBQmHABkXkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.raft_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_float2_img();
	this.instance.setTransform(78.1,-108,0.456,0.456,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-108,156.1,216.4);
p.frameBounds = [rect];


(lib.raft_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_float2_img();
	this.instance.setTransform(-88,-87.7,0.543,0.543);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKfQkXkWAAmJQAAmIEXkWQEXkWGHgBQGJABEXEWQEVEWABGIQgBGJkVEWQkXEXmJgBQmHABkXkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.raft_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_float1_img();
	this.instance.setTransform(-78,-100.3,0.464,0.464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-100.3,156,200.6);
p.frameBounds = [rect];


(lib.raft_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_float1_img();
	this.instance.setTransform(92.3,-109,0.46,0.46,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-109,185.3,218);
p.frameBounds = [rect];


(lib.pool_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pool_decor5_1_img();
	this.instance.setTransform(-102.5,-70.5);

	this.instance_1 = new lib.pool_decor5_2_img();
	this.instance_1.setTransform(-823.9,-88.9);

	this.instance_2 = new lib.pool_decor5_3_img();
	this.instance_2.setTransform(-760.9,59);

	this.instance_3 = new lib.pool_decor5_4_img();
	this.instance_3.setTransform(-724.9,-89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-70.5,205,141);
p.frameBounds = [rect, new cjs.Rectangle(-823.9,-88.9,1200,600), new cjs.Rectangle(-760.9,59,1083,452), new cjs.Rectangle(-724.9,-89,1015,600), null];


(lib.pool_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pool_decor4_1_img();
	this.instance.setTransform(-378,-189);

	this.instance_1 = new lib.pool_decor4_2_img();
	this.instance_1.setTransform(-367,-188);

	this.instance_2 = new lib.pool_decor4_3_img();
	this.instance_2.setTransform(-361,-156);

	this.instance_3 = new lib.pool_decor4_4_img();
	this.instance_3.setTransform(-362,-149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-378,-189,756,378);
p.frameBounds = [rect, new cjs.Rectangle(-367,-188,731,439), new cjs.Rectangle(-361,-156,724,317), new cjs.Rectangle(-362,-149,726,318), null];


(lib.pool_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.ladder1_img();
	this.instance.setTransform(-82,206.5);

	this.instance_1 = new lib.ladder2_img();
	this.instance_1.setTransform(-82,206.5);

	this.instance_2 = new lib.ladder3_img();
	this.instance_2.setTransform(-82,206.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// graph
	this.instance_3 = new lib.pool_decor3_1_img();
	this.instance_3.setTransform(-314,-282.4);

	this.instance_4 = new lib.pool_decor3_2_img();
	this.instance_4.setTransform(-314,-282.4);

	this.instance_5 = new lib.pool_decor3_3_img();
	this.instance_5.setTransform(-314,-282.4);

	this.instance_6 = new lib.pool_decor3_4_img();
	this.instance_6.setTransform(-314,-282.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-314,-282.4,628,565);
p.frameBounds = [rect, rect, rect, rect];


(lib.pool_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pool_decor2_1_img();
	this.instance.setTransform(-379,-300);

	this.instance_1 = new lib.pool_decor2_2_img();
	this.instance_1.setTransform(-379,-300);

	this.instance_2 = new lib.pool_decor2_3_img();
	this.instance_2.setTransform(-379,-300);

	this.instance_3 = new lib.pool_decor2_4_img();
	this.instance_3.setTransform(-379,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-379,-300,758,600);
p.frameBounds = [rect, rect, rect, rect];


(lib.pool_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pool_decor1_1_img();
	this.instance.setTransform(-600,-300);

	this.instance_1 = new lib.pool_decor1_2_img();
	this.instance_1.setTransform(-600,-300);

	this.instance_2 = new lib.pool_decor1_3_img();
	this.instance_2.setTransform(-600,-300);

	this.instance_3 = new lib.pool_decor1_4_img();
	this.instance_3.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect, rect, rect, rect];


(lib.plate_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plate_img();
	this.instance.setTransform(-81,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-26.5,158,50);
p.frameBounds = [rect];


(lib.pareo_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo6_img();
	this.instance.setTransform(-98,-104.7,0.671,0.671);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwhM0IgplNINt5tIUoGTIhPYbIlbFfg");
	this.shape.setTransform(2.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.7,-113.5,219.9,231.9);
p.frameBounds = [rect];


(lib.pareo_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo6_img();
	this.instance.setTransform(98,-121,0.785,0.785,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvNOCIgisMILqueIQ/nyIC2LYIAAP9IlKNgg");
	this.shape.setTransform(-2.8,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.7,-132.6,201.7,261.5);
p.frameBounds = [rect];


(lib.pareo_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo5_img();
	this.instance.setTransform(-95.4,-105.5,0.649,0.649);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AttPcIiflOIEG36IG8kMINhC0IH2JtIn2UcIknC0g");
	this.shape.setTransform(-1.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.3,-113.9,207.6,229.1);
p.frameBounds = [rect];


(lib.pareo_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo5_img();
	this.instance.setTransform(-89,-117.1,0.781,0.781);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvCFKICu4uIMiAsIO1XnIjDJhIzZFVg");
	this.shape.setTransform(2.1,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.3,-123.7,192.8,250.7);
p.frameBounds = [rect];


(lib.pareo_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo4_img();
	this.instance.setTransform(-78.5,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AodKKIkjoIIgzqGICzmVIKvEZIM/NiIBGKBIu2A3g");
	this.shape.setTransform(-0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.8,-92,176.9,184.5);
p.frameBounds = [rect];


(lib.pareo_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo4_img();
	this.instance.setTransform(-76.5,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlVMsIl2lZIiUt7IEsmHITVCOIC/DTInaQeIlfDgg");
	this.shape.setTransform(1.6,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.9,-83.2,173,163.3);
p.frameBounds = [rect];


(lib.pareo_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo3_img();
	this.instance.setTransform(-83,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRJXIlXlFIGks7IQShTIGbOZInMFgg");
	this.shape.setTransform(0.8,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.9,-65.3,187.5,127.6);
p.frameBounds = [rect];


(lib.pareo_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo3_img();
	this.instance.setTransform(-62,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArAL8IA2nZIKbxoIEvhOIGBHhIgaDsIuiQbIi1A/g");
	this.shape.setTransform(-0.1,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.7,-92.5,141.2,183.3);
p.frameBounds = [rect];


(lib.pareo_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo2_img();
	this.instance.setTransform(-58.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ACgKnItVnUIBcrEIFxjvINLEKIBTKJIh5Iug");
	this.shape.setTransform(-0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.7,-74,139,147.6);
p.frameBounds = [rect];


(lib.pareo_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo2_img();
	this.instance.setTransform(-81,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am7HDIncl9IDlkcINWkqIL0GcIhCEjIqDFCg");
	this.shape.setTransform(0.6,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.4,-52.4,184,102.7);
p.frameBounds = [rect];


(lib.pareo_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo1_img();
	this.instance.setTransform(-75.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtVGPIgqiPILTrXINVg7IDXEuIhuL3g");
	this.shape.setTransform(1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.7,-51.3,179.4,106.4);
p.frameBounds = [rect];


(lib.pareo_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo1_img();
	this.instance.setTransform(-60,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An/KEIjQkQIBZo6IQ/ngIEHFLIqbOeIkyBjg");
	this.shape.setTransform(-1.4,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.4,-69.1,144.1,135.8);
p.frameBounds = [rect];


(lib.object_15_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArCLCQklklABmdQgBmdElklQElklGdABQGegBElElQEkElAAGdQAAGdkkElQklEmmegBQmdABklkmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.object_12_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsZAMAAAgx/IXZAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-160,150,320);
p.frameBounds = [rect];


(lib.object_11_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqfKfQkWkVAAmKQAAmIEWkXQEWkVGJgBQGJABEWEVQEXEXAAGIQAAGKkXEVQkWEXmJAAQmJAAkWkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.object_9_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqfKfQkWkXAAmIQAAmJEWkWQEXkWGIAAQGJAAEWEWQEXEWAAGJQAAGIkXEXQkWEWmJABQmIgBkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.object_8_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDZAMAAAgx/IcHAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-160,180,320);
p.frameBounds = [rect];


(lib.object_6_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg7WAPnIAA/NMB2tAAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-100,760,200);
p.frameBounds = [rect];


(lib.object_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap8J8QkGkHgBl1QABl0EGkIQEIkGF0gBQF1ABEHEGQEHEIABF0QgBF1kHEHQkHEHl1ABQl0gBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg86APnIAA/NMB51AAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-100,780,200);
p.frameBounds = [rect];


(lib.nav_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.nav_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.nav_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.mixer12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer12_img();
	this.instance.setTransform(-103.5,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.5,-91,207,182);
p.frameBounds = [rect];


(lib.mixer9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer9_img();
	this.instance.setTransform(-14.5,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleY:1,skewX:-2.7,x:-17.3},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.5,-127,29,254);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-17.3,-127,41,254), rect];


(lib.mixer8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer8_img();
	this.instance.setTransform(-51,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-111,102,222);
p.frameBounds = [rect];


(lib.mixer7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer7_img();
	this.instance.setTransform(-111.3,-33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.3,-33.9,220,55);
p.frameBounds = [rect];


(lib.mixer6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer6_img();
	this.instance.setTransform(-107.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-96.5,214,193);
p.frameBounds = [rect];


(lib.mixer5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer5_img();
	this.instance.setTransform(-314,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-314,-90.5,628,181);
p.frameBounds = [rect];


(lib.mixer4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer4_img();
	this.instance.setTransform(-107.5,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-95.5,214,193);
p.frameBounds = [rect];


(lib.mixer3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer3_img();
	this.instance.setTransform(-70,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-24.5,141,47);
p.frameBounds = [rect];


(lib.mixer2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer2_img();
	this.instance.setTransform(-25,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-27,50,53);
p.frameBounds = [rect];


(lib.mixer1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer1_img();
	this.instance.setTransform(-100.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-94,201,189);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tablet1_img();
	this.instance.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.tablet0_img();
	this.instance_1.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,500);
p.frameBounds = [rect];


(lib.lime2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lime2_img();
	this.instance.setTransform(-32.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-21,65,42);
p.frameBounds = [rect];


(lib.lime1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lime1_img();
	this.instance.setTransform(-29.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.5,-27,59,54);
p.frameBounds = [rect];


(lib.leaf4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leaf4_img();
	this.instance.setTransform(-44.2,-1.6,1,1,0,-120,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.2,-39.1,88.5,78.2);
p.frameBounds = [rect];


(lib.leaf3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leaf3_img();
	this.instance.setTransform(-36.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.5,-32,73,64);
p.frameBounds = [rect];


(lib.leaf2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leaf2_img();
	this.instance.setTransform(-31.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-32.5,63,65);
p.frameBounds = [rect];


(lib.leaf1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leaf1_img();
	this.instance.setTransform(43.3,-0.9,1,1,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-37.9,86.6,76);
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


(lib.ice_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ice_img();
	this.instance.setTransform(-28.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.5,-27,57,54);
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


(lib.hero2_swimsuit_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AysVmMAAAgrLMAivAAAIAACHICqAAMAAAApEg");
	var mask_graphics_1 = new cjs.Graphics().p("AysVmMAAAgrLMAivAAAIAACHICqAAMAAAApEg");
	var mask_graphics_2 = new cjs.Graphics().p("AysVmMAAAgrLMAivAAAIAACHICqAAMAAAApEg");
	var mask_graphics_3 = new cjs.Graphics().p("AysVmMAAAgrLMAivAAAIAACHICqAAMAAAApEg");
	var mask_graphics_4 = new cjs.Graphics().p("AysVmMAAAgrLMAivAAAIAACHICqAAMAAAApEg");
	var mask_graphics_5 = new cjs.Graphics().p("AysVmMAAAgrLMAivAAAIAACHICqAAMAAAApEg");
	var mask_graphics_6 = new cjs.Graphics().p("AysVmMAAAgrLIU5AAIgXHeQIYgsArGfIH0geIAAeYg");
	var mask_graphics_7 = new cjs.Graphics().p("AysVmMAAAgrLIU5AAIgXHeQIYgsArGfIH0geIAAeYg");
	var mask_graphics_8 = new cjs.Graphics().p("AysVmMAAAgrLIU5AAIgXHeQIYgsArGfIH0geIAAeYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-28.9,y:139.2}).wait(1).to({graphics:mask_graphics_1,x:-28.9,y:139.2}).wait(1).to({graphics:mask_graphics_2,x:-28.9,y:139.2}).wait(1).to({graphics:mask_graphics_3,x:-28.9,y:139.2}).wait(1).to({graphics:mask_graphics_4,x:-28.9,y:139.2}).wait(1).to({graphics:mask_graphics_5,x:-28.9,y:139.2}).wait(1).to({graphics:mask_graphics_6,x:-28.9,y:139.2}).wait(1).to({graphics:mask_graphics_7,x:-28.9,y:139.2}).wait(1).to({graphics:mask_graphics_8,x:-28.9,y:139.2}).wait(1));

	// graph
	this.instance = new lib.hero2_leg1_1_img();
	this.instance.setTransform(-134.2,36);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(8));

	// graph
	this.instance_1 = new lib.hero2_swimsuit1_img();
	this.instance_1.setTransform(-72,-84.5);

	this.instance_2 = new lib.hero2_swimsuit2_img();
	this.instance_2.setTransform(-30.5,-86.5);

	this.instance_3 = new lib.hero2_swimsuit3_img();
	this.instance_3.setTransform(-32,-85);

	this.instance_4 = new lib.hero2_swimsuit4_img();
	this.instance_4.setTransform(-34.5,-87.5);

	this.instance_5 = new lib.hero2_swimsuit5_img();
	this.instance_5.setTransform(-33,-86);

	this.instance_6 = new lib.hero2_swimsuit6_img();
	this.instance_6.setTransform(-30,-86);

	this.instance_7 = new lib.hero2_swimsuit7_img();
	this.instance_7.setTransform(-52.4,-86.5);

	this.instance_8 = new lib.hero2_swimsuit8_img();
	this.instance_8.setTransform(-30.5,-84.5);

	this.instance_9 = new lib.hero2_swimsuit9_img();
	this.instance_9.setTransform(-43.5,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	// graph
	this.instance_10 = new lib.hero2_leg1_1_img();
	this.instance_10.setTransform(-134.2,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.2,-84.5,206.3,332.5);
p.frameBounds = [rect, new cjs.Rectangle(-134.2,-86.5,195.8,334.5), new cjs.Rectangle(-134.2,-85,196.3,333), new cjs.Rectangle(-134.2,-87.5,191.8,335.5), new cjs.Rectangle(-134.2,-86,195.3,334), new cjs.Rectangle(-134.2,-86,196.3,334), new cjs.Rectangle(-134.2,-86.5,197.8,334.5), new cjs.Rectangle(-134.2,-84.5,194.8,332.5), new cjs.Rectangle(-134.2,-85,195.8,333)];


(lib.hero2_shadow_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadow1_img();
	this.instance.setTransform(-66,-30.5);

	this.instance_1 = new lib.hero2_shadow2_img();
	this.instance_1.setTransform(-66,-30.5);

	this.instance_2 = new lib.hero2_shadow3_img();
	this.instance_2.setTransform(-66,-30.5);

	this.instance_3 = new lib.hero2_shadow4_img();
	this.instance_3.setTransform(-66,-30.5);

	this.instance_4 = new lib.hero2_shadow5_img();
	this.instance_4.setTransform(-66,-30.5);

	this.instance_5 = new lib.hero2_shadow6_img();
	this.instance_5.setTransform(-66,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66,-30.5,132,61);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-76,-46.5);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-76,-46.5);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-76,-46.5);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-76,-46.5);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-76,-46.5);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-76,-46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76,-46.5,152,93);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_pareob_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_pareo5_2_img();
	this.instance.setTransform(-131.8,-70);

	this.instance_1 = new lib.hero2_pareo6_2_img();
	this.instance_1.setTransform(-148.8,-107.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-131.8,-70,231,208), new cjs.Rectangle(-148.8,-107.5,289,198), null];


(lib.hero2_pareo_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo1_img();
	this.instance.setTransform(-75.5,-41.5);

	this.instance_1 = new lib.hero2_pareo2_img();
	this.instance_1.setTransform(-53.5,-58);

	this.instance_2 = new lib.hero2_pareo3_img();
	this.instance_2.setTransform(-30.4,-140.5);

	this.instance_3 = new lib.hero2_pareo4_img();
	this.instance_3.setTransform(-48.5,-170);

	this.instance_4 = new lib.hero2_pareo5_1_img();
	this.instance_4.setTransform(-130.8,-164);

	this.instance_5 = new lib.hero2_pareo6_1_img();
	this.instance_5.setTransform(-148.7,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,-41.5,151,83);
p.frameBounds = [rect, new cjs.Rectangle(-53.5,-58,117,131), new cjs.Rectangle(-30.4,-140.5,166,111), new cjs.Rectangle(-48.5,-170,157,162), new cjs.Rectangle(-130.8,-164,294,325), new cjs.Rectangle(-148.7,-170,292,312), null];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-20.5,-9);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-20.5,-9);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-20.5,-9);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-20.5,-9);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-20.5,-9);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-20.5,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.5,-9,41,18);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_hatb_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hat2_2_img();
	this.instance.setTransform(-75.8,-14);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-75.8,-14,69,33), rect=null, rect];


(lib.hero2_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-70,-37.5);

	this.instance_1 = new lib.hero2_hat2_1_img();
	this.instance_1.setTransform(-43.3,-25.5);

	this.instance_2 = new lib.hero2_hat3_img();
	this.instance_2.setTransform(-67,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-37.5,140,75);
p.frameBounds = [rect, new cjs.Rectangle(-43.3,-25.5,115,74), new cjs.Rectangle(-67,-30.5,136,62), null];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-66.9,-22);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-40,-24);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-40.9,-28.5);

	this.instance_3 = new lib.hero2_hair4_img();
	this.instance_3.setTransform(-56.4,-28);

	this.instance_4 = new lib.hero2_hair5_img();
	this.instance_4.setTransform(-60.9,-26);

	this.instance_5 = new lib.hero2_hair6_img();
	this.instance_5.setTransform(-42.4,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.9,-22,134,97);
p.frameBounds = [rect, new cjs.Rectangle(-40,-24,96,104), new cjs.Rectangle(-40.9,-28.5,83,102), new cjs.Rectangle(-56.4,-28,112,136), new cjs.Rectangle(-60.9,-26,120,95), new cjs.Rectangle(-42.4,-24,90,134)];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-42.5,-36);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-52.9,-37);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-56.4,-34.5);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-43.4,-36);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-43,-35);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-47.4,-34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-36,85,72);
p.frameBounds = [rect, new cjs.Rectangle(-52.9,-37,97,107), new cjs.Rectangle(-56.4,-34.5,101,109), new cjs.Rectangle(-43.4,-36,87,117), new cjs.Rectangle(-43,-35,86,78), new cjs.Rectangle(-47.4,-34.5,109,117)];


(lib.hero2_float_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_float1_img();
	this.instance.setTransform(-168,-216);

	this.instance_1 = new lib.hero2_float2_img();
	this.instance_1.setTransform(-143.5,-263.9);

	this.instance_2 = new lib.hero2_float3_img();
	this.instance_2.setTransform(-108.5,-216.9);

	this.instance_3 = new lib.hero2_float4_img();
	this.instance_3.setTransform(-114.5,-207.9);

	this.instance_4 = new lib.hero2_float5_img();
	this.instance_4.setTransform(-143.5,-242.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-168,-216,336,432);
p.frameBounds = [rect, new cjs.Rectangle(-143.5,-263.9,342,474), new cjs.Rectangle(-108.5,-216.9,319,315), new cjs.Rectangle(-114.5,-207.9,319,316), new cjs.Rectangle(-143.5,-242.9,337,486), null];


(lib.hero2_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_1_img();
	this.instance.setTransform(-67.5,-27);

	this.instance_1 = new lib.hero2_eyes1_2_img();
	this.instance_1.setTransform(-66.5,-12);

	this.instance_2 = new lib.hero2_eyes1_3_img();
	this.instance_2.setTransform(-66.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},25).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-27,135,54);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-66.5,-12,135,39), rect, rect=new cjs.Rectangle(-66.5,2.5,133,27), rect, rect=new cjs.Rectangle(-66.5,-12,135,39), rect, rect=new cjs.Rectangle(-67.5,-27,135,54), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-57.5,-9);

	this.instance_1 = new lib.hero2_eyebrows2_img();
	this.instance_1.setTransform(-57.5,-9);

	this.instance_2 = new lib.hero2_eyebrows3_img();
	this.instance_2.setTransform(-57.5,-9);

	this.instance_3 = new lib.hero2_eyebrows4_img();
	this.instance_3.setTransform(-57.5,-9);

	this.instance_4 = new lib.hero2_eyebrows5_img();
	this.instance_4.setTransform(-57.5,-9);

	this.instance_5 = new lib.hero2_eyebrows6_img();
	this.instance_5.setTransform(-57.5,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-9,115,18);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_bag_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag1_img();
	this.instance.setTransform(68,14.5);

	this.instance_1 = new lib.hero2_bag2_img();
	this.instance_1.setTransform(56,14.5);

	this.instance_2 = new lib.hero2_bag3_img();
	this.instance_2.setTransform(26.9,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(68,14.5,58,115);
p.frameBounds = [rect, new cjs.Rectangle(56,14.5,88,115), new cjs.Rectangle(26.9,3.5,107,137), null];


(lib.hero1_swimsuit_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_swimsuit1_img();
	this.instance.setTransform(-65.5,-86.5);

	this.instance_1 = new lib.hero1_swimsuit2_img();
	this.instance_1.setTransform(-72.5,-93);

	this.instance_2 = new lib.hero1_swimsuit3_img();
	this.instance_2.setTransform(-67.5,-87.5);

	this.instance_3 = new lib.hero1_swimsuit4_img();
	this.instance_3.setTransform(-71.5,-87.5);

	this.instance_4 = new lib.hero1_swimsuit5_img();
	this.instance_4.setTransform(-55.5,-88.5);

	this.instance_5 = new lib.hero1_swimsuit6_img();
	this.instance_5.setTransform(-59.5,-101.5);

	this.instance_6 = new lib.hero1_swimsuit7_img();
	this.instance_6.setTransform(-63.5,-86);

	this.instance_7 = new lib.hero1_swimsuit8_img();
	this.instance_7.setTransform(-61,-87);

	this.instance_8 = new lib.hero1_swimsuit9_img();
	this.instance_8.setTransform(-66.5,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-86.5,131,173);
p.frameBounds = [rect, new cjs.Rectangle(-72.5,-93,143,180), new cjs.Rectangle(-67.5,-87.5,136,174), new cjs.Rectangle(-71.5,-87.5,128,174), new cjs.Rectangle(-55.5,-88.5,143,202), new cjs.Rectangle(-59.5,-101.5,125,188), new cjs.Rectangle(-63.5,-86,137,177), new cjs.Rectangle(-61,-87,124,172), new cjs.Rectangle(-66.5,-85,130,171)];


(lib.hero1_shadow_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadow1_img();
	this.instance.setTransform(-52.5,-30);

	this.instance_1 = new lib.hero1_shadow2_img();
	this.instance_1.setTransform(-52.5,-30);

	this.instance_2 = new lib.hero1_shadow3_img();
	this.instance_2.setTransform(-52.5,-30);

	this.instance_3 = new lib.hero1_shadow4_img();
	this.instance_3.setTransform(-52.5,-30);

	this.instance_4 = new lib.hero1_shadow5_img();
	this.instance_4.setTransform(-52.5,-30);

	this.instance_5 = new lib.hero1_shadow6_img();
	this.instance_5.setTransform(-52.5,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-30,105,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-59,-40.5);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-59,-40.5);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-59,-40.5);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-59,-40.5);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-59,-40.5);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-59,-40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-40.5,118,81);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_pareo_back_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_pareo4_2_img();
	this.instance.setTransform(-130.3,-154);

	this.instance_1 = new lib.hero1_pareo5_2_img();
	this.instance_1.setTransform(-130.3,-154.5);

	this.instance_2 = new lib.hero1_pareo6_2_img();
	this.instance_2.setTransform(-160.3,-164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-130.3,-154,127,127), new cjs.Rectangle(-130.3,-154.5,228,196), new cjs.Rectangle(-160.3,-164,228,156), null];


(lib.hero1_pareo_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo1_img();
	this.instance.setTransform(-60,-57.5);

	this.instance_1 = new lib.hero1_pareo2_img();
	this.instance_1.setTransform(-82.5,-43);

	this.instance_2 = new lib.hero1_pareo3_img();
	this.instance_2.setTransform(-114.5,-152.5);

	this.instance_3 = new lib.hero1_pareo4_1_img();
	this.instance_3.setTransform(-117.8,-154);

	this.instance_4 = new lib.hero1_pareo5_1_img();
	this.instance_4.setTransform(-131.2,-155);

	this.instance_5 = new lib.hero1_pareo6_1_img();
	this.instance_5.setTransform(-165.8,-198.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-57.5,120,115);
p.frameBounds = [rect, new cjs.Rectangle(-82.5,-43,162,81), new cjs.Rectangle(-114.5,-152.5,123,163), new cjs.Rectangle(-117.8,-154,141,154), new cjs.Rectangle(-131.2,-155,228,300), new cjs.Rectangle(-165.8,-198.5,251,308), null];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-17.5,-11);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-17.5,-11);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-17.5,-11);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-17.5,-11);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-17.5,-11);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-17.5,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-11,35,22);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_hatb_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hat2_2_img();
	this.instance.setTransform(-98.6,-18);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-98.6,-18,109,66), rect=null, rect];


(lib.hero1_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-60,-30);

	this.instance_1 = new lib.hero1_hat2_1_img();
	this.instance_1.setTransform(-64.3,-49);

	this.instance_2 = new lib.hero1_hat3_img();
	this.instance_2.setTransform(-112.6,-76.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-30,120,60);
p.frameBounds = [rect, new cjs.Rectangle(-64.3,-49,160,73), new cjs.Rectangle(-112.6,-76.1,169,124), null];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-76.3,-31.5);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-101.5,-27);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-74,-29.5);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-89,-21);

	this.instance_4 = new lib.hero1_hair5_img();
	this.instance_4.setTransform(-78,-27);

	this.instance_5 = new lib.hero1_hair6_img();
	this.instance_5.setTransform(-111.5,-38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.3,-31.5,78,157);
p.frameBounds = [rect, new cjs.Rectangle(-101.5,-27,212,187), new cjs.Rectangle(-74,-29.5,179,168), new cjs.Rectangle(-89,-21,212,226), new cjs.Rectangle(-78,-27,163,237), new cjs.Rectangle(-111.5,-38.5,110,227)];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-45,-38);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-44.8,-35);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-44.3,-35);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-61.8,-45.5);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-48.3,-37.5);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-45.3,-31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-38,90,76);
p.frameBounds = [rect, new cjs.Rectangle(-44.8,-35,86,71), new cjs.Rectangle(-44.3,-35,115,117), new cjs.Rectangle(-61.8,-45.5,114,85), new cjs.Rectangle(-48.3,-37.5,106,92), new cjs.Rectangle(-45.3,-31.5,80,70)];


(lib.hero1_float_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_float1_img();
	this.instance.setTransform(-201.5,-237);

	this.instance_1 = new lib.hero1_float2_img();
	this.instance_1.setTransform(-179,-179.9);

	this.instance_2 = new lib.hero1_float3_img();
	this.instance_2.setTransform(-171,-167.9);

	this.instance_3 = new lib.hero1_float4_img();
	this.instance_3.setTransform(-170,-232.9);

	this.instance_4 = new lib.hero1_float5_img();
	this.instance_4.setTransform(-179,-193.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-201.5,-237,403,474);
p.frameBounds = [rect, new cjs.Rectangle(-179,-179.9,324,323), new cjs.Rectangle(-171,-167.9,306,306), new cjs.Rectangle(-170,-232.9,312,433), new cjs.Rectangle(-179,-193.9,301,362), null];


(lib.hero1_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_1_img();
	this.instance.setTransform(-53,-30.5);

	this.instance_1 = new lib.hero1_eyes1_2_img();
	this.instance_1.setTransform(-53,-23.5);

	this.instance_2 = new lib.hero1_eyes1_3_img();
	this.instance_2.setTransform(-47,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-30.5,106,61);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-53,-23.5,106,54), rect, rect=new cjs.Rectangle(-47,-6,106,43), rect, rect=new cjs.Rectangle(-53,-23.5,106,54), rect, rect=new cjs.Rectangle(-53,-30.5,106,61), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-49.5,-19);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-49.5,-19);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-49.5,-19);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-49.5,-19);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-49.5,-19);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-49.5,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-19,99,38);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArdMEIAA4HIE8AAQBbDkDFEFQgEgGAFAEICgkLQgMgbgPgeQglhKg/hZILkAAIAABBIBZAAIAAXGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.7,y:-0.2}).wait(3).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero1_bag1_img();
	this.instance.setTransform(-50,-68);

	this.instance_1 = new lib.hero1_bag2_img();
	this.instance_1.setTransform(-81.8,-68);

	this.instance_2 = new lib.hero1_bag3_img();
	this.instance_2.setTransform(-59.8,-73);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-68,96,131);
p.frameBounds = [rect, new cjs.Rectangle(-75.1,-68,146.4,145.1), new cjs.Rectangle(-59.8,-73,114,128), null];


(lib.headdress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat3_img();
	this.instance.setTransform(68,-31,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHBIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-45,160,90);
p.frameBounds = [rect];


(lib.headdress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat3_img();
	this.instance.setTransform(-84.5,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtYIUIhpj6IGsqvIU2k3IChB3IhOHlIy4M9g");
	this.shape.setTransform(-0.4,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.6,-74.2,192.5,143.5);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat2_img();
	this.instance.setTransform(76,-37,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtQHzIAAvlIahAAIAAPlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-50,170,100);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat2_img();
	this.instance.setTransform(-100.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyOFRIJ8s+IIviiIRyJNIidEvI9SGig");
	this.shape.setTransform(-0.8,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.5,-64.9,233.5,131.2);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(70,-38,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-60,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("As+A+INuprIMPD8IgWEfI0IJAg");
	this.shape.setTransform(-2.6,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.7,-52,166.2,111.8);
p.frameBounds = [rect];


(lib.hand_kursor_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_kursor_2_img();
	this.instance.setTransform(-94.5,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.5,-136,189,272);
p.frameBounds = [rect];


(lib.glass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glass_img();
	this.instance.setTransform(-53,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-137,106,274);
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


(lib.dress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit9_img();
	this.instance.setTransform(52,-73,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnHK5IjTw0ICtnFIJVgJIFZEvIDaO8Il8Gog");
	this.shape.setTransform(-2.8,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-81.7,133.5,168.4);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_swimsuit9_img();
	this.instance.setTransform(-65,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkAN4IoDyWICWqsIK7gDIHcG/IDaNgIhVIBIitB7g");
	this.shape.setTransform(0.1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.2,-96.4,154.6,194.9);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit8_img();
	this.instance.setTransform(-45.5,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao/HSIBoucIGTmTIILAPIB5J+IjbOmIrZCIg");
	this.shape.setTransform(-1.1,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.8,-87.8,115.4,172.5);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_swimsuit8_img();
	this.instance.setTransform(-62,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkrNHImmuhIBVtpIHXAKIIKFlIFtOgIhnIwIicBIg");
	this.shape.setTransform(0.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-96,144.5,193);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit7_img();
	this.instance.setTransform(-58,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCIjIGJy8IGSkqIG1A/IC1KOIkfS6g");
	this.shape.setTransform(1.7,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.1,-98.4,141.5,192.9);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_swimsuit7_img();
	this.instance.setTransform(68,-89,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AplOnIippWIG+uqIH3liIHUAPICULYIodSQg");
	this.shape.setTransform(-0.1,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.4,-98.7,156.7,191.3);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit6_img();
	this.instance.setTransform(46,-74,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AluJmIjnt+ICaoiIHmgaIG8FDIBvQgIjXEoIiGAeg");
	this.shape.setTransform(-0.7,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-87,119.7,170.7);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_swimsuit6_img();
	this.instance.setTransform(-62.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkEPdIm+vnIEltsIG6h4IKnVKIh8KTg");
	this.shape.setTransform(-0.5,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.2,-102,141.6,201.5);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit5_img();
	this.instance.setTransform(47,-73,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlvJgIjOsGIB7pWIIWhHIGcEYIBOPtIj9GCg");
	this.shape.setTransform(-1.2,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.6,-81.8,114.9,167.3);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_swimsuit5_img();
	this.instance.setTransform(71,-101,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao+OCIkErWINOwdIDQiiIJngkMgFVAhvg");
	this.shape.setTransform(-2.8,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.3,-105.6,167.1,216.1);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit4_img();
	this.instance.setTransform(-46,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al+MNIjAlmIC8vFIFZkpIHaAaICOJ7IizNLIoXCvg");
	this.shape.setTransform(1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-84.8,115.1,168.1);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_swimsuit4_img();
	this.instance.setTransform(64,-87,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArmM6ID92AIJ8lsIGHAVIDNNQIoWL9IsGEDg");
	this.shape.setTransform(-0.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.9,-94.9,148.7,189.6);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit3_img();
	this.instance.setTransform(-47,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmML5IigkvIBFthIGYmhIHzAWICJIyIjBNiIo6DHg");
	this.shape.setTransform(-0.6,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.3,-83.6,111.5,165.2);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_swimsuit3_img();
	this.instance.setTransform(68,-87,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqHN0IiKplIIpv7IJvjqIDNBiIC+NaInbN3IrvB6g");
	this.shape.setTransform(0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.5,-98.2,157.3,196.8);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit2_img();
	this.instance.setTransform(46,-75,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlCJtIjpuyICanqIIAgVIF6F1IBDOjIisFIIiKApg");
	this.shape.setTransform(-0.9,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-84.9,111.3,167.6);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_swimsuit2_img();
	this.instance.setTransform(-71.5,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("As9geIDkvBIIRAqIIjGAIFjPNIiWJFIuaADg");
	this.shape.setTransform(-0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-98.4,166.1,198.5);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit1_img();
	this.instance.setTransform(-72,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar8JrIG+xRIGcnVIIJAuICWLXIg8Q0IsGA+g");
	this.shape.setTransform(-6,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-97.3,154.6,191.3);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_swimsuit1_img();
	this.instance.setTransform(-65.5,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai/OwIozxXIB/rZICbg/IM9FFIGONwIiJLKg");
	this.shape.setTransform(-2.1,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.6,-97.4,151.1,192.2);
p.frameBounds = [rect];


(lib.drag_part_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzdfmIjc9yMAa5ghZIS6KyMgI4A0Zg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146.6,-202.2,293.3,404.5);
p.frameBounds = [rect];


(lib.decor_category_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.category_0_5_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.decor_category_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.category_0_4_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.decor_category_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.category_0_3_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.decor_category_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.category_0_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.checkpoint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmOPnIAA/NIMdAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-100,80,200);
p.frameBounds = [rect];


(lib.check_shadows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_shadows_img();
	this.instance.setTransform(-75,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.check_lips_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_lips_img();
	this.instance.setTransform(-30,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.check_hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_hairstyle_img();
	this.instance.setTransform(-140,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.check_eyebrows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_eyebrows_img();
	this.instance.setTransform(-30,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.check_blush_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_blush_img();
	this.instance.setTransform(-60,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.bottle1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottle1_img();
	this.instance.setTransform(-17,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17,-5.5,34,11);
p.frameBounds = [rect];


(lib.bottle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottle_img();
	this.instance.setTransform(-41.5,-121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-121.5,83,243);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-260,-140);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-260,-140);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-260,-140);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-260,-140);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-260,-140);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-260,-140);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-260,-140);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-260,-140);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-260,-140);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-260,-140);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-260,-140);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-260,-140);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-260,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-140,520,280);
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


(lib.body_category_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_5_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.body_category_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_4_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.body_category_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_3_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.body_category_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.body_category_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-260,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-140,520,280);
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


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag3_img();
	this.instance.setTransform(-53.5,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApGJUIgyqRIHnrjIEEABIHIFaIA9M9Ii4D6Io6Cvg");
	this.shape.setTransform(-0.9,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.1,-78.7,126.6,160.4);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag3_img();
	this.instance.setTransform(-57,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnKPIiosdIHFomIGmALIG0JCIkzMcg");
	this.shape.setTransform(0.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.4,-69.6,131.3,138.7);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag2_img();
	this.instance.setTransform(-44,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AknJwIkBqFIEMpsIGJAAIG8ENIioP2g");
	this.shape.setTransform(0,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.2,-63.1,110.6,128.5);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag2_img();
	this.instance.setTransform(-76.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmQNbInst/IMKtCIDhAHIMOMzInDOTg");
	this.shape.setTransform(0.9,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.4,-88.2,178.7,174.3);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag1_img();
	this.instance.setTransform(-29,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlsJuIhNrkID+oXIFzAAIECGpIg7Nyg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.9,-65,88.6,131);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag1_img();
	this.instance.setTransform(-48,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK2Ih1uXIGen5IFAAFIGPJKIjLNmg");
	this.shape.setTransform(-0.2,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-75.4,113.6,146.3);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(28,119,196,0.992)").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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


(lib.copyright_body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// layer_1
	this.instance = new lib.copyright_title_1_en_img();
	this.instance.setTransform(-190,-122);

	this.instance_1 = new lib.copyright_title_1_ru_img();
	this.instance_1.setTransform(-190,-124);

	this.instance_2 = new lib.copyright_title_1_de_img();
	this.instance_2.setTransform(-190,-120);

	this.instance_3 = new lib.copyright_title_1_fr_img();
	this.instance_3.setTransform(-190,-123);

	this.instance_4 = new lib.copyright_title_1_it_img();
	this.instance_4.setTransform(-190,-122);

	this.instance_5 = new lib.copyright_title_1_es_img();
	this.instance_5.setTransform(-190,-120);

	this.instance_6 = new lib.copyright_title_1_pt_img();
	this.instance_6.setTransform(-190,-120);

	this.instance_7 = new lib.copyright_title_1_tr_img();
	this.instance_7.setTransform(-190,-121);

	this.instance_8 = new lib.copyright_title_1_ja_img();
	this.instance_8.setTransform(-190,-132);

	this.instance_9 = new lib.copyright_title_1_hi_img();
	this.instance_9.setTransform(-190,-130);

	this.instance_10 = new lib.copyright_title_1_ar_img();
	this.instance_10.setTransform(-190,-132);

	this.instance_11 = new lib.copyright_title_1_id_img();
	this.instance_11.setTransform(-190,-121);

	this.instance_12 = new lib.copyright_title_1_zh_img();
	this.instance_12.setTransform(-190,-132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

	// layer_2
	this.instance_13 = new lib.copyright_title_img();
	this.instance_13.setTransform(-190,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13));

	// layer_3
	this.instance_14 = new lib.copyright_title_2_en_img();
	this.instance_14.setTransform(-190,-1);

	this.instance_15 = new lib.copyright_title_2_ru_img();
	this.instance_15.setTransform(-190,-2);

	this.instance_16 = new lib.copyright_title_2_de_img();
	this.instance_16.setTransform(-190,0);

	this.instance_17 = new lib.copyright_title_2_fr_img();
	this.instance_17.setTransform(-190,-2);

	this.instance_18 = new lib.copyright_title_2_it_img();
	this.instance_18.setTransform(-190,-3);

	this.instance_19 = new lib.copyright_title_2_es_img();
	this.instance_19.setTransform(-190,-4);

	this.instance_20 = new lib.copyright_title_2_pt_img();
	this.instance_20.setTransform(-190,-5);

	this.instance_21 = new lib.copyright_title_2_tr_img();
	this.instance_21.setTransform(-190,0);

	this.instance_22 = new lib.copyright_title_2_ja_img();
	this.instance_22.setTransform(-190,-10);

	this.instance_23 = new lib.copyright_title_2_hi_img();
	this.instance_23.setTransform(-190,0);

	this.instance_24 = new lib.copyright_title_2_ar_img();
	this.instance_24.setTransform(-190,3);

	this.instance_25 = new lib.copyright_title_2_id_img();
	this.instance_25.setTransform(-190,1);

	this.instance_26 = new lib.copyright_title_2_zh_img();
	this.instance_26.setTransform(-190,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-122,380,241);
p.frameBounds = [rect, new cjs.Rectangle(-190,-124,380,242), new cjs.Rectangle(-190,-120,380,240), new cjs.Rectangle(-190,-123,380,241), new cjs.Rectangle(-190,-122,380,239), new cjs.Rectangle(-190,-120,380,236), new cjs.Rectangle(-190,-120,380,235), new cjs.Rectangle(-190,-121,380,241), new cjs.Rectangle(-190,-132,380,242), new cjs.Rectangle(-190,-130,380,250), new cjs.Rectangle(-190,-132,380,255), new cjs.Rectangle(-190,-121,380,242), new cjs.Rectangle(-190,-132,380,246)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:200,alpha:1},10).to({y:240},5).wait(35).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).wait(110).to({y:400,alpha:0.012},10).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,650);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,630), new cjs.Rectangle(-210,-210,420,610), new cjs.Rectangle(-210,-210,420,590), new cjs.Rectangle(-210,-210,420,570), new cjs.Rectangle(-210,-210,420,550), new cjs.Rectangle(-210,-210,420,530), new cjs.Rectangle(-210,-210,420,510), new cjs.Rectangle(-210,-210,420,490), rect=new cjs.Rectangle(-210,-210,420,480.1), rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,482), rect=new cjs.Rectangle(-210,-210,420,490), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,489.4), new cjs.Rectangle(-210,-210,420,488.8), new cjs.Rectangle(-210,-210,420,488.3), new cjs.Rectangle(-210,-210,420,487.8), new cjs.Rectangle(-210,-210,420,487.2), new cjs.Rectangle(-210,-210,420,487.7), new cjs.Rectangle(-210,-210,420,488.3), new cjs.Rectangle(-210,-210,420,488.8), new cjs.Rectangle(-210,-210,420,489.4), new cjs.Rectangle(-210,-210,420,490), new cjs.Rectangle(-210,-210,420,489.4), new cjs.Rectangle(-210,-210,420,488.8), new cjs.Rectangle(-210,-210,420,488.3), new cjs.Rectangle(-210,-210,420,487.8), new cjs.Rectangle(-210,-210,420,487.2), new cjs.Rectangle(-210,-210,420,487.7), new cjs.Rectangle(-210,-210,420,488.3), new cjs.Rectangle(-210,-210,420,488.8), new cjs.Rectangle(-210,-210,420,489.4), rect=new cjs.Rectangle(-210,-210,420,490), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,506), new cjs.Rectangle(-210,-210,420,522), new cjs.Rectangle(-210,-210,420,538), new cjs.Rectangle(-210,-210,420,554), new cjs.Rectangle(-210,-210,420,570), new cjs.Rectangle(-210,-210,420,586), new cjs.Rectangle(-210,-210,420,602), new cjs.Rectangle(-210,-210,420,618), new cjs.Rectangle(-210,-210,420,634), new cjs.Rectangle(-210,-210,420,650)];


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


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_2_mc();
	this.instance.setTransform(280,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_2_2_mc();
	this.instance_1.setTransform(-280,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-255,780,510);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_1_mc();
	this.instance.setTransform(260,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_2_1_mc();
	this.instance_1.setTransform(-260,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-440,-160,880,320);
p.frameBounds = [rect];


(lib.trash_item8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.trash_item8_img();
	this.instance.setTransform(-35,-27);

	this.instance_1 = new lib.ti8_mc();
	this.instance_1.setTransform(-1,-5,1.242,1.242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, null];


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
p.nominalBounds = rect = new cjs.Rectangle(-260,-140,520,280);
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


(lib.throw_out_trash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_309 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(309).call(this.frame_309).wait(1));

	// animation
	this.instance = new lib.throw_out_trash_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({y:-50,alpha:1},10).to({y:20},10).to({y:0},10).to({alpha:0.012},20).wait(30).to({y:-50,alpha:1},10).to({y:20},10).to({y:0},10).to({alpha:0.012},20).wait(30).to({y:-50,alpha:1},10).to({y:20},10).to({y:0},10).to({alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-45,-50,90,90), new cjs.Rectangle(-45,-55,90,90), new cjs.Rectangle(-45,-60,90,90), new cjs.Rectangle(-45,-65,90,90), new cjs.Rectangle(-45,-70,90,90), new cjs.Rectangle(-45,-75,90,90), new cjs.Rectangle(-45,-80,90,90), new cjs.Rectangle(-45,-85,90,90), new cjs.Rectangle(-45,-90,90,90), new cjs.Rectangle(-45,-95,90,90), new cjs.Rectangle(-45,-88,90,90), new cjs.Rectangle(-45,-81,90,90), new cjs.Rectangle(-45,-74,90,90), new cjs.Rectangle(-45,-67,90,90), new cjs.Rectangle(-45,-60,90,90), new cjs.Rectangle(-45,-53,90,90), new cjs.Rectangle(-45,-46,90,90), new cjs.Rectangle(-45,-39,90,90), new cjs.Rectangle(-45,-32,90,90), new cjs.Rectangle(-45,-25,90,90), new cjs.Rectangle(-45,-27,90,90), new cjs.Rectangle(-45,-29,90,90), new cjs.Rectangle(-45,-31,90,90), new cjs.Rectangle(-45,-33,90,90), new cjs.Rectangle(-45,-35,90,90), new cjs.Rectangle(-45,-37,90,90), new cjs.Rectangle(-45,-39,90,90), new cjs.Rectangle(-45,-41,90,90), new cjs.Rectangle(-45,-43,90,90), rect=new cjs.Rectangle(-45,-45,90,90), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-45,-50,90,90), new cjs.Rectangle(-45,-55,90,90), new cjs.Rectangle(-45,-60,90,90), new cjs.Rectangle(-45,-65,90,90), new cjs.Rectangle(-45,-70,90,90), new cjs.Rectangle(-45,-75,90,90), new cjs.Rectangle(-45,-80,90,90), new cjs.Rectangle(-45,-85,90,90), new cjs.Rectangle(-45,-90,90,90), new cjs.Rectangle(-45,-95,90,90), new cjs.Rectangle(-45,-88,90,90), new cjs.Rectangle(-45,-81,90,90), new cjs.Rectangle(-45,-74,90,90), new cjs.Rectangle(-45,-67,90,90), new cjs.Rectangle(-45,-60,90,90), new cjs.Rectangle(-45,-53,90,90), new cjs.Rectangle(-45,-46,90,90), new cjs.Rectangle(-45,-39,90,90), new cjs.Rectangle(-45,-32,90,90), new cjs.Rectangle(-45,-25,90,90), new cjs.Rectangle(-45,-27,90,90), new cjs.Rectangle(-45,-29,90,90), new cjs.Rectangle(-45,-31,90,90), new cjs.Rectangle(-45,-33,90,90), new cjs.Rectangle(-45,-35,90,90), new cjs.Rectangle(-45,-37,90,90), new cjs.Rectangle(-45,-39,90,90), new cjs.Rectangle(-45,-41,90,90), new cjs.Rectangle(-45,-43,90,90), rect=new cjs.Rectangle(-45,-45,90,90), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-45,-50,90,90), new cjs.Rectangle(-45,-55,90,90), new cjs.Rectangle(-45,-60,90,90), new cjs.Rectangle(-45,-65,90,90), new cjs.Rectangle(-45,-70,90,90), new cjs.Rectangle(-45,-75,90,90), new cjs.Rectangle(-45,-80,90,90), new cjs.Rectangle(-45,-85,90,90), new cjs.Rectangle(-45,-90,90,90), new cjs.Rectangle(-45,-95,90,90), new cjs.Rectangle(-45,-88,90,90), new cjs.Rectangle(-45,-81,90,90), new cjs.Rectangle(-45,-74,90,90), new cjs.Rectangle(-45,-67,90,90), new cjs.Rectangle(-45,-60,90,90), new cjs.Rectangle(-45,-53,90,90), new cjs.Rectangle(-45,-46,90,90), new cjs.Rectangle(-45,-39,90,90), new cjs.Rectangle(-45,-32,90,90), new cjs.Rectangle(-45,-25,90,90), new cjs.Rectangle(-45,-27,90,90), new cjs.Rectangle(-45,-29,90,90), new cjs.Rectangle(-45,-31,90,90), new cjs.Rectangle(-45,-33,90,90), new cjs.Rectangle(-45,-35,90,90), new cjs.Rectangle(-45,-37,90,90), new cjs.Rectangle(-45,-39,90,90), new cjs.Rectangle(-45,-41,90,90), new cjs.Rectangle(-45,-43,90,90), rect=new cjs.Rectangle(-45,-45,90,90), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.thoughts_hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bag1_img();
	this.instance.setTransform(57.4,-81.7,0.739,0.739,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_hat2_img();
	this.instance_1.setTransform(134.1,-8.9,0.804,0.804,0,-11.2,168.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(-48.9,6.8,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.dress_4).wait(1));

	// bg
	this.instance_2 = new lib.thoughts_mc();
	this.instance_2.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-120,340,240);
p.frameBounds = [rect];


(lib.thoughts_hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_pareo1_img();
	this.instance.setTransform(7.3,-9.3,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_swimsuit3_img();
	this.instance_1.setTransform(56,-90,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero1_bag1_img();
	this.instance_2.setTransform(-104.9,-71.1,0.664,0.664,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.thoughts_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-120,340,240);
p.frameBounds = [rect];


(lib.targets_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// part_1
	this.part_1 = new lib.drag_part_1_mc();
	this.part_1.setTransform(705.2,414.8);

	this.timeline.addTween(cjs.Tween.get(this.part_1).wait(1));

	// part_2
	this.part_2 = new lib.drag_part_1_mc();
	this.part_2.setTransform(705.2,414.8);

	this.timeline.addTween(cjs.Tween.get(this.part_2).wait(1));

	// part_3
	this.part_3 = new lib.drag_part_1_mc();
	this.part_3.setTransform(705.2,414.8);

	this.timeline.addTween(cjs.Tween.get(this.part_3).wait(1));

	// part_4
	this.part_4 = new lib.drag_part_1_mc();
	this.part_4.setTransform(705.2,414.8);

	this.timeline.addTween(cjs.Tween.get(this.part_4).wait(1));

	// part_5
	this.part_5 = new lib.drag_part_1_mc();
	this.part_5.setTransform(705.2,414.8);

	this.timeline.addTween(cjs.Tween.get(this.part_5).wait(1));

	// part_6
	this.part_6 = new lib.drag_part_1_mc();
	this.part_6.setTransform(705.2,414.8);

	this.timeline.addTween(cjs.Tween.get(this.part_6).wait(1));

	// part_7
	this.part_7 = new lib.drag_part_1_mc();
	this.part_7.setTransform(705.2,414.8);

	this.timeline.addTween(cjs.Tween.get(this.part_7).wait(1));

	// part_8
	this.part_8 = new lib.drag_part_1_mc();
	this.part_8.setTransform(705.2,414.8);

	this.timeline.addTween(cjs.Tween.get(this.part_8).wait(1));

	// part_9
	this.part_9 = new lib.drag_part_1_mc();
	this.part_9.setTransform(705.2,414.8);

	this.timeline.addTween(cjs.Tween.get(this.part_9).wait(1));

	// part_10
	this.part_10 = new lib.drag_part_1_mc();
	this.part_10.setTransform(705.2,414.8);

	this.timeline.addTween(cjs.Tween.get(this.part_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(558.5,212.5,293.3,404.5);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.semicircular_arrow_checks_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(30,-60,1,1,-45);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-100,40,1,1,-45);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-70,-45,1,1,-45);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.round_arrow_checks_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(-20,-80);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-20,80);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-80,0,1,1,-90);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,200,360);
p.frameBounds = [rect];


(lib.raft_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.pareo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_3_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({alpha:1},10).wait(20).to({alpha:0.602},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_2_2_mc();
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({alpha:1},10).wait(20).to({alpha:0.602},10).wait(21));

	// graph
	this.instance_2 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnuHvQjMjOAAkhQAAkgDMjOQDOjMEggBQEiABDMDMQDODOgBEgQABEhjODOQjMDMkiABQkggBjOjMg");
	this.shape.setTransform(-5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,145,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj7F5QgzgzAAhJQAAhJAzg0ICCiAIiBiAQg0g0ABhIQgBhJA0g0QA1g0BIAAQBJAAA0A0IAAAAID7D9QA0A0AABIQAABIg0A0Ij8D9Qg0A1hIAAQhKAAg0g1g");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-100,-100.1,0.6,0.6,45,0,0,-0.2,-0.1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({x:100,y:99.9},30).wait(1));

	// graph
	this.instance_1 = new lib.nav_1_img();
	this.instance_1.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnuHvQjMjOgBkhQABkhDMjMQDOjNEggBQEhABDODNQDMDMABEhQgBEhjMDOQjODNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mix_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer5_mc();
	this.instance.setTransform(314,0,1,1,0,0,180);
	this.instance.alpha = 0.898;

	this.instance_1 = new lib.mixer5_mc();
	this.instance_1.setTransform(-313.9,0);
	this.instance_1.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-627.9,-90.5,1256,181);
p.frameBounds = [rect];


(lib.location_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// animation
	this.instance = new lib.hand_kursor_2_mc();
	this.instance.setTransform(43,360.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29,y:247.4},7).to({x:-78},8).to({x:192.5,y:250},22).to({x:29,y:247.4},8).to({x:43,y:360.4},7).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.tablet1_img();
	this.instance_1.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgaZAjJMAAAhEPIBuAAIAAiCMAzFAAAMAAABGRg");
	mask.setTransform(-2.3,-5.4);

	// animation
	this.instance_2 = new lib.tablet7_mc();
	this.instance_2.setTransform(260.2,0.4);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({x:4.3},8).wait(9));

	// animation
	this.instance_3 = new lib.tablet4_mc();
	this.instance_3.setTransform(0,110.3);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({x:-244},8).to({_off:true},1).wait(38));

	// animation
	this.instance_4 = new lib.tablet3_mc();
	this.instance_4.setTransform(0.5,-80.1);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({x:-221.4},8).to({_off:true},1).wait(38));

	// animation
	this.instance_5 = new lib.tablet0_img();
	this.instance_5.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,746.4);
p.frameBounds = [rect, new cjs.Rectangle(-192.5,-250,385,730.3), new cjs.Rectangle(-192.5,-250,385,714.1), new cjs.Rectangle(-192.5,-250,385,698), new cjs.Rectangle(-192.5,-250,385,681.9), new cjs.Rectangle(-192.5,-250,385,665.7), new cjs.Rectangle(-192.5,-250,385,649.6), rect=new cjs.Rectangle(-192.5,-250,385,633.4), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-192.5,-250,385,633.5), new cjs.Rectangle(-192.5,-250,385,633.7), new cjs.Rectangle(-192.5,-250,385,633.8), new cjs.Rectangle(-192.5,-250,385,633.9), new cjs.Rectangle(-192.5,-250,385,634), new cjs.Rectangle(-192.5,-250,385,634.1), new cjs.Rectangle(-192.5,-250,385,634.3), new cjs.Rectangle(-192.5,-250,385,634.4), new cjs.Rectangle(-192.5,-250,385,634.5), new cjs.Rectangle(-192.5,-250,385,634.6), new cjs.Rectangle(-192.5,-250,385,634.7), new cjs.Rectangle(-192.5,-250,385,634.8), new cjs.Rectangle(-192.5,-250,385,635), new cjs.Rectangle(-192.5,-250,385,635.1), new cjs.Rectangle(-192.5,-250,393.5,635.2), new cjs.Rectangle(-192.5,-250,405.8,635.3), new cjs.Rectangle(-192.5,-250,418,635.4), new cjs.Rectangle(-192.5,-250,430.3,635.6), new cjs.Rectangle(-192.5,-250,442.6,635.7), new cjs.Rectangle(-192.5,-250,454.9,635.8), new cjs.Rectangle(-192.5,-250,467.2,635.9), new cjs.Rectangle(-192.5,-250,479.5,636), new cjs.Rectangle(-192.5,-250,459.1,635.7), new cjs.Rectangle(-192.5,-250,438.7,635.4), new cjs.Rectangle(-192.5,-250,418.2,635.1), new cjs.Rectangle(-192.5,-250,397.8,634.7), new cjs.Rectangle(-192.5,-250,385,634.4), new cjs.Rectangle(-192.5,-250,385,634.1), new cjs.Rectangle(-192.5,-250,385,633.8), new cjs.Rectangle(-192.5,-250,385,633.4), new cjs.Rectangle(-192.5,-250,385,649.6), new cjs.Rectangle(-192.5,-250,385,665.7), new cjs.Rectangle(-192.5,-250,385,681.9), new cjs.Rectangle(-192.5,-250,385,698), new cjs.Rectangle(-192.5,-250,385,714.1), new cjs.Rectangle(-192.5,-250,385,730.3), new cjs.Rectangle(-192.5,-250,385,746.4), new cjs.Rectangle(-192.5,-250,385,500)];


(lib.location_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// animation
	this.instance = new lib.hand_kursor_2_mc();
	this.instance.setTransform(43,360.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29,y:247.4},7).to({x:-78},8).to({x:192.5,y:250},22).to({x:29,y:247.4},8).to({x:43,y:360.4},7).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.tablet1_img();
	this.instance_1.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgaZAjJMAAAhEPIBuAAIAAiCMAzFAAAMAAABGRg");
	mask.setTransform(-2.3,-5.4);

	// animation
	this.instance_2 = new lib.tablet10_mc();
	this.instance_2.setTransform(0,0.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({x:-300.3},8).to({_off:true},1).wait(38));

	// animation
	this.instance_3 = new lib.tablet4_mc();
	this.instance_3.setTransform(169,110.3);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({x:0},12).wait(12));

	// animation
	this.instance_4 = new lib.tablet3_mc();
	this.instance_4.setTransform(161.5,-80.1);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({x:0.5},12).wait(12));

	// animation
	this.instance_5 = new lib.tablet0_img();
	this.instance_5.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,746.4);
p.frameBounds = [rect, new cjs.Rectangle(-192.5,-250,385,730.3), new cjs.Rectangle(-192.5,-250,385,714.1), new cjs.Rectangle(-192.5,-250,385,698), new cjs.Rectangle(-192.5,-250,385,681.9), new cjs.Rectangle(-192.5,-250,385,665.7), new cjs.Rectangle(-192.5,-250,385,649.6), rect=new cjs.Rectangle(-192.5,-250,385,633.4), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-192.5,-250,385,633.5), new cjs.Rectangle(-192.5,-250,385,633.7), new cjs.Rectangle(-192.5,-250,385,633.8), new cjs.Rectangle(-192.5,-250,385,633.9), new cjs.Rectangle(-192.5,-250,385,634), new cjs.Rectangle(-192.5,-250,385,634.1), new cjs.Rectangle(-192.5,-250,385,634.3), new cjs.Rectangle(-192.5,-250,385,634.4), new cjs.Rectangle(-192.5,-250,385,634.5), new cjs.Rectangle(-192.5,-250,385,634.6), new cjs.Rectangle(-192.5,-250,385,634.7), new cjs.Rectangle(-192.5,-250,385,634.8), new cjs.Rectangle(-192.5,-250,385,635), new cjs.Rectangle(-192.5,-250,385,635.1), new cjs.Rectangle(-192.5,-250,393.5,635.2), new cjs.Rectangle(-192.5,-250,405.8,635.3), new cjs.Rectangle(-192.5,-250,418,635.4), new cjs.Rectangle(-192.5,-250,430.3,635.6), new cjs.Rectangle(-192.5,-250,442.6,635.7), new cjs.Rectangle(-192.5,-250,454.9,635.8), new cjs.Rectangle(-192.5,-250,467.2,635.9), new cjs.Rectangle(-192.5,-250,479.5,636), new cjs.Rectangle(-192.5,-250,459.1,635.7), new cjs.Rectangle(-192.5,-250,438.7,635.4), new cjs.Rectangle(-192.5,-250,418.2,635.1), new cjs.Rectangle(-192.5,-250,397.8,634.7), new cjs.Rectangle(-192.5,-250,385,634.4), new cjs.Rectangle(-192.5,-250,385,634.1), new cjs.Rectangle(-192.5,-250,385,633.8), new cjs.Rectangle(-192.5,-250,385,633.4), new cjs.Rectangle(-192.5,-250,385,649.6), new cjs.Rectangle(-192.5,-250,385,665.7), new cjs.Rectangle(-192.5,-250,385,681.9), new cjs.Rectangle(-192.5,-250,385,698), new cjs.Rectangle(-192.5,-250,385,714.1), new cjs.Rectangle(-192.5,-250,385,730.3), new cjs.Rectangle(-192.5,-250,385,746.4), new cjs.Rectangle(-192.5,-250,385,500)];


(lib.location_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// animation
	this.instance = new lib.hand_kursor_2_mc();
	this.instance.setTransform(43,360.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29,y:247.4},7).to({x:-78},8).to({x:192.5,y:250},22).to({x:29,y:247.4},8).to({x:43,y:360.4},7).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.tablet1_img();
	this.instance_1.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgaZAjJMAAAhEPIBuAAIAAiCMAzFAAAMAAABGRg");
	mask.setTransform(-2.3,-5.4);

	// animation
	this.instance_2 = new lib.tablet10_mc();
	this.instance_2.setTransform(301.7,0.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({x:0},8).wait(9));

	// animation
	this.instance_3 = new lib.tablet5_mc();
	this.instance_3.setTransform(7.4,102.3);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({x:-277.6},7).to({_off:true},1).wait(38));

	// animation
	this.instance_4 = new lib.tablet0_img();
	this.instance_4.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,746.4);
p.frameBounds = [rect, new cjs.Rectangle(-192.5,-250,385,730.3), new cjs.Rectangle(-192.5,-250,385,714.1), new cjs.Rectangle(-192.5,-250,385,698), new cjs.Rectangle(-192.5,-250,385,681.9), new cjs.Rectangle(-192.5,-250,385,665.7), new cjs.Rectangle(-192.5,-250,385,649.6), rect=new cjs.Rectangle(-192.5,-250,385,633.4), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-192.5,-250,385,633.5), new cjs.Rectangle(-192.5,-250,385,633.7), new cjs.Rectangle(-192.5,-250,385,633.8), new cjs.Rectangle(-192.5,-250,385,633.9), new cjs.Rectangle(-192.5,-250,385,634), new cjs.Rectangle(-192.5,-250,385,634.1), new cjs.Rectangle(-192.5,-250,385,634.3), new cjs.Rectangle(-192.5,-250,385,634.4), new cjs.Rectangle(-192.5,-250,385,634.5), new cjs.Rectangle(-192.5,-250,385,634.6), new cjs.Rectangle(-192.5,-250,385,634.7), new cjs.Rectangle(-192.5,-250,385,634.8), new cjs.Rectangle(-192.5,-250,385,635), new cjs.Rectangle(-192.5,-250,385,635.1), new cjs.Rectangle(-192.5,-250,393.5,635.2), new cjs.Rectangle(-192.5,-250,405.8,635.3), new cjs.Rectangle(-192.5,-250,418,635.4), new cjs.Rectangle(-192.5,-250,430.3,635.6), new cjs.Rectangle(-192.5,-250,442.6,635.7), new cjs.Rectangle(-192.5,-250,454.9,635.8), new cjs.Rectangle(-192.5,-250,467.2,635.9), new cjs.Rectangle(-192.5,-250,479.5,636), new cjs.Rectangle(-192.5,-250,459.1,635.7), new cjs.Rectangle(-192.5,-250,438.7,635.4), new cjs.Rectangle(-192.5,-250,418.2,635.1), new cjs.Rectangle(-192.5,-250,397.8,634.7), new cjs.Rectangle(-192.5,-250,385,634.4), new cjs.Rectangle(-192.5,-250,385,634.1), new cjs.Rectangle(-192.5,-250,385,633.8), new cjs.Rectangle(-192.5,-250,385,633.4), new cjs.Rectangle(-192.5,-250,385,649.6), new cjs.Rectangle(-192.5,-250,385,665.7), new cjs.Rectangle(-192.5,-250,385,681.9), new cjs.Rectangle(-192.5,-250,385,698), new cjs.Rectangle(-192.5,-250,385,714.1), new cjs.Rectangle(-192.5,-250,385,730.3), new cjs.Rectangle(-192.5,-250,385,746.4), new cjs.Rectangle(-192.5,-250,385,500)];


(lib.location_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// animation
	this.instance = new lib.hand_kursor_2_mc();
	this.instance.setTransform(43,360.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29,y:247.4},7).to({x:-78},8).to({x:192.5,y:250},22).to({x:29,y:247.4},8).to({x:43,y:360.4},7).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.tablet1_img();
	this.instance_1.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgaZAjJMAAAhEPIBuAAIAAiCMAzFAAAMAAABGRg");
	mask.setTransform(-2.3,-5.4);

	// animation
	this.instance_2 = new lib.tablet5_mc();
	this.instance_2.setTransform(168.4,102.3);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({x:7.4},8).wait(9));

	// animation
	this.instance_3 = new lib.tablet4_mc();
	this.instance_3.setTransform(0,110.3);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({x:-244},8).to({_off:true},1).wait(38));

	// animation
	this.instance_4 = new lib.tablet2_mc();
	this.instance_4.setTransform(2.5,-77.1);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({x:-242.5},8).to({_off:true},1).wait(38));

	// animation
	this.instance_5 = new lib.tablet0_img();
	this.instance_5.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,746.4);
p.frameBounds = [rect, new cjs.Rectangle(-192.5,-250,385,730.3), new cjs.Rectangle(-192.5,-250,385,714.1), new cjs.Rectangle(-192.5,-250,385,698), new cjs.Rectangle(-192.5,-250,385,681.9), new cjs.Rectangle(-192.5,-250,385,665.7), new cjs.Rectangle(-192.5,-250,385,649.6), rect=new cjs.Rectangle(-192.5,-250,385,633.4), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-192.5,-250,385,633.5), new cjs.Rectangle(-192.5,-250,385,633.7), new cjs.Rectangle(-192.5,-250,385,633.8), new cjs.Rectangle(-192.5,-250,385,633.9), new cjs.Rectangle(-192.5,-250,385,634), new cjs.Rectangle(-192.5,-250,385,634.1), new cjs.Rectangle(-192.5,-250,385,634.3), new cjs.Rectangle(-192.5,-250,385,634.4), new cjs.Rectangle(-192.5,-250,385,634.5), new cjs.Rectangle(-192.5,-250,385,634.6), new cjs.Rectangle(-192.5,-250,385,634.7), new cjs.Rectangle(-192.5,-250,385,634.8), new cjs.Rectangle(-192.5,-250,385,635), new cjs.Rectangle(-192.5,-250,385,635.1), new cjs.Rectangle(-192.5,-250,393.5,635.2), new cjs.Rectangle(-192.5,-250,405.8,635.3), new cjs.Rectangle(-192.5,-250,418,635.4), new cjs.Rectangle(-192.5,-250,430.3,635.6), new cjs.Rectangle(-192.5,-250,442.6,635.7), new cjs.Rectangle(-192.5,-250,454.9,635.8), new cjs.Rectangle(-192.5,-250,467.2,635.9), new cjs.Rectangle(-192.5,-250,479.5,636), new cjs.Rectangle(-192.5,-250,459.1,635.7), new cjs.Rectangle(-192.5,-250,438.7,635.4), new cjs.Rectangle(-192.5,-250,418.2,635.1), new cjs.Rectangle(-192.5,-250,397.8,634.7), new cjs.Rectangle(-192.5,-250,385,634.4), new cjs.Rectangle(-192.5,-250,385,634.1), new cjs.Rectangle(-192.5,-250,385,633.8), new cjs.Rectangle(-192.5,-250,385,633.4), new cjs.Rectangle(-192.5,-250,385,649.6), new cjs.Rectangle(-192.5,-250,385,665.7), new cjs.Rectangle(-192.5,-250,385,681.9), new cjs.Rectangle(-192.5,-250,385,698), new cjs.Rectangle(-192.5,-250,385,714.1), new cjs.Rectangle(-192.5,-250,385,730.3), new cjs.Rectangle(-192.5,-250,385,746.4), new cjs.Rectangle(-192.5,-250,385,500)];


(lib.location_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// animation
	this.instance = new lib.hand_kursor_2_mc();
	this.instance.setTransform(43,360.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41,y:247.4},9).to({x:-71},10).to({x:167},9).to({x:29},12).to({x:43,y:360.4},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.tablet1_img();
	this.instance_1.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgaZAjJMAAAhEPIBuAAIAAiCMAzFAAAMAAABGRg");
	mask.setTransform(-2.3,-5.4);

	// animation
	this.instance_2 = new lib.tablet4_mc();
	this.instance_2.setTransform(169,110.3);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({x:0},12).wait(12));

	// animation
	this.instance_3 = new lib.tablet9_mc();
	this.instance_3.setTransform(3.4,5);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({x:-272.7},10).to({_off:true},1).wait(32));

	// animation
	this.instance_4 = new lib.tablet2_mc();
	this.instance_4.setTransform(153.5,-77.1);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({x:2.5},12).wait(12));

	// animation
	this.instance_5 = new lib.tablet0_img();
	this.instance_5.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,746.4);
p.frameBounds = [rect, new cjs.Rectangle(-192.5,-250,385,733.9), new cjs.Rectangle(-192.5,-250,385,721.3), new cjs.Rectangle(-192.5,-250,385,708.8), new cjs.Rectangle(-192.5,-250,385,696.2), new cjs.Rectangle(-192.5,-250,385,683.6), new cjs.Rectangle(-192.5,-250,385,671.1), new cjs.Rectangle(-192.5,-250,385,658.5), new cjs.Rectangle(-192.5,-250,385,646), rect=new cjs.Rectangle(-192.5,-250,385,633.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-192.5,-250,401.1,633.4), new cjs.Rectangle(-192.5,-250,427.6,633.4), new cjs.Rectangle(-192.5,-250,454,633.4), new cjs.Rectangle(-192.5,-250,442.5,633.4), new cjs.Rectangle(-192.5,-250,431,633.4), new cjs.Rectangle(-192.5,-250,419.5,633.4), new cjs.Rectangle(-192.5,-250,408,633.4), new cjs.Rectangle(-192.5,-250,396.5,633.4), rect=new cjs.Rectangle(-192.5,-250,385,633.4), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-192.5,-250,385,644.7), new cjs.Rectangle(-192.5,-250,385,656), new cjs.Rectangle(-192.5,-250,385,667.3), new cjs.Rectangle(-192.5,-250,385,678.6), new cjs.Rectangle(-192.5,-250,385,689.9), new cjs.Rectangle(-192.5,-250,385,701.2), new cjs.Rectangle(-192.5,-250,385,712.5), new cjs.Rectangle(-192.5,-250,385,723.8), new cjs.Rectangle(-192.5,-250,385,735.1), new cjs.Rectangle(-192.5,-250,385,746.4), new cjs.Rectangle(-192.5,-250,385,500)];


(lib.location_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// animation
	this.instance = new lib.hand_kursor_2_mc();
	this.instance.setTransform(43,360.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:54,y:247.4},7).to({x:-50},12).to({x:194.1},10).to({x:54},10).to({x:43,y:360.4},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.tablet1_img();
	this.instance_1.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgaZAjJMAAAhEPIBuAAIAAiCMAzFAAAMAAABGRg");
	mask.setTransform(-2.3,-5.4);

	// animation
	this.instance_2 = new lib.tablet9_mc();
	this.instance_2.setTransform(303.4,5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({x:3.4},10).wait(13));

	// animation
	this.instance_3 = new lib.tablet8_mc();
	this.instance_3.setTransform(7,-5.6);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({x:-295},12).to({_off:true},1).wait(32));

	// animation
	this.instance_4 = new lib.tablet0_img();
	this.instance_4.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,746.4);
p.frameBounds = [rect, new cjs.Rectangle(-192.5,-250,385,730.3), new cjs.Rectangle(-192.5,-250,385,714.1), new cjs.Rectangle(-192.5,-250,385,698), new cjs.Rectangle(-192.5,-250,385,681.9), new cjs.Rectangle(-192.5,-250,385,665.7), new cjs.Rectangle(-192.5,-250,385,649.6), rect=new cjs.Rectangle(-192.5,-250,385,633.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-192.5,-250,407.9,633.4), new cjs.Rectangle(-192.5,-250,432.3,633.4), new cjs.Rectangle(-192.5,-250,456.7,633.4), new cjs.Rectangle(-192.5,-250,481.1,633.4), new cjs.Rectangle(-192.5,-250,467.1,633.4), new cjs.Rectangle(-192.5,-250,453.1,633.4), new cjs.Rectangle(-192.5,-250,439.1,633.4), new cjs.Rectangle(-192.5,-250,425.1,633.4), new cjs.Rectangle(-192.5,-250,411.1,633.4), new cjs.Rectangle(-192.5,-250,397,633.4), rect=new cjs.Rectangle(-192.5,-250,385,633.4), rect, rect, rect, new cjs.Rectangle(-192.5,-250,385,643.7), new cjs.Rectangle(-192.5,-250,385,654), new cjs.Rectangle(-192.5,-250,385,664.2), new cjs.Rectangle(-192.5,-250,385,674.5), new cjs.Rectangle(-192.5,-250,385,684.8), new cjs.Rectangle(-192.5,-250,385,695.1), new cjs.Rectangle(-192.5,-250,385,705.3), new cjs.Rectangle(-192.5,-250,385,715.6), new cjs.Rectangle(-192.5,-250,385,725.9), new cjs.Rectangle(-192.5,-250,385,736.2), new cjs.Rectangle(-192.5,-250,385,746.4), new cjs.Rectangle(-192.5,-250,385,500)];


(lib.location_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// animation
	this.instance = new lib.hand_kursor_2_mc();
	this.instance.setTransform(43,360.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:192.5,y:250},7).to({x:54,y:247.4},8).to({x:43,y:360.4},15).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.tablet1_img();
	this.instance_1.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgaZAjJMAAAhEPIBuAAIAAiCMAzFAAAMAAABGRg");
	mask.setTransform(-2.3,-5.4);

	// animation
	this.instance_2 = new lib.tablet8_mc();
	this.instance_2.setTransform(304.1,-5.6);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({x:7},8).wait(17));

	// animation
	this.instance_3 = new lib.tablet0_img();
	this.instance_3.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,746.4);
p.frameBounds = [rect, new cjs.Rectangle(-192.5,-250,385,730.7), new cjs.Rectangle(-192.5,-250,385,714.9), new cjs.Rectangle(-192.5,-250,394.1,699.1), new cjs.Rectangle(-192.5,-250,415.5,683.3), new cjs.Rectangle(-192.5,-250,436.8,667.6), new cjs.Rectangle(-192.5,-250,458.2,651.8), new cjs.Rectangle(-192.5,-250,479.5,636), new cjs.Rectangle(-192.5,-250,462.2,635.7), new cjs.Rectangle(-192.5,-250,444.9,635.4), new cjs.Rectangle(-192.5,-250,427.6,635.1), new cjs.Rectangle(-192.5,-250,410.3,634.7), new cjs.Rectangle(-192.5,-250,393,634.4), new cjs.Rectangle(-192.5,-250,385,634.1), new cjs.Rectangle(-192.5,-250,385,633.8), new cjs.Rectangle(-192.5,-250,385,633.4), new cjs.Rectangle(-192.5,-250,385,641), new cjs.Rectangle(-192.5,-250,385,648.5), new cjs.Rectangle(-192.5,-250,385,656), new cjs.Rectangle(-192.5,-250,385,663.6), new cjs.Rectangle(-192.5,-250,385,671.1), new cjs.Rectangle(-192.5,-250,385,678.6), new cjs.Rectangle(-192.5,-250,385,686.2), new cjs.Rectangle(-192.5,-250,385,693.7), new cjs.Rectangle(-192.5,-250,385,701.2), new cjs.Rectangle(-192.5,-250,385,708.8), new cjs.Rectangle(-192.5,-250,385,716.3), new cjs.Rectangle(-192.5,-250,385,723.8), new cjs.Rectangle(-192.5,-250,385,731.4), new cjs.Rectangle(-192.5,-250,385,738.9), new cjs.Rectangle(-192.5,-250,385,746.4), new cjs.Rectangle(-192.5,-250,385,500)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_1_mc();

	this.instance_1 = new lib.location_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgbzApZQiEAAheheQhdhdAAiFMAAAhIxQAAiFBdheQBehdCEAAMA3nAAAQCEAABeBdQBdBeAACFMAAABIxQAACFhdBdQheBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-264.9,420,530);
p.frameBounds = [rect, rect, new cjs.Rectangle(-210,-264.9,420,761.3)];


(lib.location_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tablet1_img();
	this.instance.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.tablet4_mc();
	this.instance_1.setTransform(0,110.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.tablet3_mc();
	this.instance_2.setTransform(0.5,-80.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.tablet0_img();
	this.instance_3.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,500);
p.frameBounds = [rect];


(lib.location_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tablet1_img();
	this.instance.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.tablet10_mc();
	this.instance_1.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.tablet0_img();
	this.instance_2.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,500);
p.frameBounds = [rect];


(lib.location_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tablet1_img();
	this.instance.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.tablet5_mc();
	this.instance_1.setTransform(7.4,102.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.tablet0_img();
	this.instance_2.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,500);
p.frameBounds = [rect];


(lib.location_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tablet1_img();
	this.instance.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.tablet4_mc();
	this.instance_1.setTransform(0,110.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.tablet2_mc();
	this.instance_2.setTransform(2.5,-77.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.tablet0_img();
	this.instance_3.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,500);
p.frameBounds = [rect];


(lib.location_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tablet1_img();
	this.instance.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.tablet9_mc();
	this.instance_1.setTransform(3.4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.tablet0_img();
	this.instance_2.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,500);
p.frameBounds = [rect];


(lib.location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tablet1_img();
	this.instance.setTransform(-192.5,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.tablet8_mc();
	this.instance_1.setTransform(7,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.tablet0_img();
	this.instance_2.setTransform(-160.3,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-250,385,500);
p.frameBounds = [rect];


(lib.limes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lime2_mc();
	this.instance.setTransform(-40.1,11.6,1,1,75);

	this.instance_1 = new lib.lime1_mc();
	this.instance_1.setTransform(-14.5,2.6);

	this.instance_2 = new lib.lime1_mc();
	this.instance_2.setTransform(30.8,8.7,1,1,60);

	this.instance_3 = new lib.lime2_mc();
	this.instance_3.setTransform(-12.3,-11.6,1,1,105);

	this.instance_4 = new lib.lime1_mc();
	this.instance_4.setTransform(3.1,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.8,-48.4,137.8,96.9);
p.frameBounds = [rect];


(lib.limes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lime2_mc();
	this.instance.setTransform(27,9.1,1,1,15);

	this.instance_1 = new lib.lime1_mc();
	this.instance_1.setTransform(6,0,1,1,-30);

	this.instance_2 = new lib.lime1_mc();
	this.instance_2.setTransform(41,-3.9);

	this.instance_3 = new lib.lime2_mc();
	this.instance_3.setTransform(-38,2.1);

	this.instance_4 = new lib.lime1_mc();
	this.instance_4.setTransform(-6,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-38.1,141,76.3);
p.frameBounds = [rect];


(lib.leafs_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leaf4_mc();
	this.instance.setTransform(0.6,7);

	this.instance_1 = new lib.leaf2_mc();
	this.instance_1.setTransform(37.3,7);

	this.instance_2 = new lib.leaf1_mc();
	this.instance_2.setTransform(-37.5,1.5);

	this.instance_3 = new lib.leaf3_mc();
	this.instance_3.setTransform(-16.7,-14.1);

	this.instance_4 = new lib.leaf4_mc();
	this.instance_4.setTransform(36.6,0.4,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-46.1,161.6,92.2);
p.frameBounds = [rect];


(lib.ices_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ice_mc();
	this.instance.setTransform(9,6.5);

	this.instance_1 = new lib.ice_mc();
	this.instance_1.setTransform(-25,-5.5);

	this.instance_2 = new lib.ice_mc();
	this.instance_2.setTransform(25,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-33.5,107,67);
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


(lib.hero_pool_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.pool_decor5_mc();
	this.accessory.setTransform(225,-211);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// decoration
	this.decoration = new lib.pool_decor4_mc();
	this.decoration.setTransform(12,9);

	this.timeline.addTween(cjs.Tween.get(this.decoration).wait(1));

	// water
	this.water = new lib.pool_decor3_mc();
	this.water.setTransform(12,17.4);

	this.timeline.addTween(cjs.Tween.get(this.water).wait(1));

	// pool
	this.pool = new lib.pool_decor2_mc();
	this.pool.setTransform(12,0);

	this.timeline.addTween(cjs.Tween.get(this.pool).wait(1));

	// grass
	this.grass = new lib.pool_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.grass).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero2_bag_all();
	this.accessory.setTransform(-19.4,-130.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero2_hat_all_mc();
	this.headdress.setTransform(41.7,-262.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(34.5,-242.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(26.5,-234.9,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// body
	this.instance = new lib.hero2_eyes1_mc();
	this.instance.setTransform(26.3,-220.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadow_all_mc();
	this.shadows.setTransform(25.8,-222.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(21.5,-197.1,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(21.1,-209.6,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.hero2_head1_img();
	this.instance_1.setTransform(-4,-273.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// pareo
	this.pareo = new lib.hero2_pareo_all_mc();
	this.pareo.setTransform(-11,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.pareo).wait(1));

	// dress
	this.dress = new lib.hero2_swimsuit_all_mc();
	this.dress.setTransform(5.7,-87.4);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// body
	this.instance_2 = new lib.hero2_body1_img();
	this.instance_2.setTransform(-163,-255.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// pareoSecond
	this.pareoSecond = new lib.hero2_pareob_all_mc();
	this.pareoSecond.setTransform(-11,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.pareoSecond).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(34.5,-242.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// headdressSecond
	this.headdressSecond = new lib.hero2_hatb_all_mc();
	this.headdressSecond.setTransform(41.7,-262.5);

	this.timeline.addTween(cjs.Tween.get(this.headdressSecond).wait(1));

	// raft
	this.raft = new lib.hero2_float_all_mc();
	this.raft.setTransform(-35.5,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.raft).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.5,-300,367.5,573.5);
p.frameBounds = [rect];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-28.3,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_fringe6_img();
	this.instance_1.setTransform(-12.9,-277);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero2_eyebrows1_img();
	this.instance_2.setTransform(2.6,-238.6,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero2_eyes1_mc();
	this.instance_3.setTransform(26.3,-220.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero2_shadow6_img();
	this.instance_4.setTransform(-1.6,-235.3,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero2_lips5_img();
	this.instance_5.setTransform(13,-200.9,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero2_rouge5_img();
	this.instance_6.setTransform(-10.4,-228.9,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero2_head1_img();
	this.instance_7.setTransform(-4,-273.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero2_pareo1_img();
	this.instance_8.setTransform(-86.5,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.sw_main_mc();
	this.instance_9.setTransform(5.7,-87.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero2_body1_img();
	this.instance_10.setTransform(-163,-255.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.hero2_hair6_img();
	this.instance_11.setTransform(-7.9,-266.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hero2_float2_img();
	this.instance_12.setTransform(-179,-286.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179,-300,343,573.5);
p.frameBounds = [rect];


(lib.hero_2_body_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-90.5,-289.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(-1.5,-188);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// body
	this.instance_1 = new lib.hero2_eyes1_mc();
	this.instance_1.setTransform(-2,-154);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadow_all_mc();
	this.shadows.setTransform(-3,-158.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(-13.5,-97);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(-14.5,-127);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero2_body0_img();
	this.instance_2.setTransform(-248.5,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-248.5,-289.5,497,569.6);
p.frameBounds = [rect];


(lib.hero_1_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_fringe0_img();
	this.instance.setTransform(-141.5,-262);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyes1_mc();
	this.instance_1.setTransform(-24.8,-142.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(-29.8,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadow_all_mc();
	this.shadows.setTransform(-27,-147);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-9.5,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(-17.5,-106);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero1_body0_img();
	this.instance_2.setTransform(-217.5,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-217.5,-262,435,507);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.drags_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// part_1
	this.part_1 = new lib.trash_item8_mc();
	this.part_1.setTransform(70,150);

	this.timeline.addTween(cjs.Tween.get(this.part_1).wait(1));

	// part_2
	this.part_2 = new lib.trash_item3_mc();
	this.part_2.setTransform(280,140);

	this.timeline.addTween(cjs.Tween.get(this.part_2).wait(1));

	// part_3
	this.part_3 = new lib.trash_item2_mc();
	this.part_3.setTransform(485,110);

	this.timeline.addTween(cjs.Tween.get(this.part_3).wait(1));

	// part_4
	this.part_4 = new lib.trash_item9_mc();
	this.part_4.setTransform(665,150);

	this.timeline.addTween(cjs.Tween.get(this.part_4).wait(1));

	// part_5
	this.part_5 = new lib.trash_item7_mc();
	this.part_5.setTransform(80,395);

	this.timeline.addTween(cjs.Tween.get(this.part_5).wait(1));

	// part_6
	this.part_6 = new lib.trash_item1_mc();
	this.part_6.setTransform(210,300);

	this.timeline.addTween(cjs.Tween.get(this.part_6).wait(1));

	// part_7
	this.part_7 = new lib.trash_item6_mc();
	this.part_7.setTransform(550,290);

	this.timeline.addTween(cjs.Tween.get(this.part_7).wait(1));

	// part_8
	this.part_8 = new lib.trash_item4_mc();
	this.part_8.setTransform(390,265);

	this.timeline.addTween(cjs.Tween.get(this.part_8).wait(1));

	// part_9
	this.part_9 = new lib.trash_item10_mc();
	this.part_9.setTransform(155,525);

	this.timeline.addTween(cjs.Tween.get(this.part_9).wait(1));

	// part_10
	this.part_10 = new lib.trash_item5_mc();
	this.part_10.setTransform(380,445);

	this.timeline.addTween(cjs.Tween.get(this.part_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,50.3,729.8,545.9);
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


(lib.cocktail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.glass_mc();
	this.instance.setTransform(-22.2,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.ice_mc();
	this.instance_1.setTransform(-7.1,5.9,1,1,15);
	this.instance_1.alpha = 0.891;

	this.instance_2 = new lib.ice_mc();
	this.instance_2.setTransform(-22.5,61,1,1,-30);
	this.instance_2.alpha = 0.891;

	this.instance_3 = new lib.ice_mc();
	this.instance_3.setTransform(-41.7,-31.5,1,1,-15);
	this.instance_3.alpha = 0.891;

	this.instance_4 = new lib.leaf4_mc();
	this.instance_4.setTransform(-35,-41.9);

	this.instance_5 = new lib.leaf2_mc();
	this.instance_5.setTransform(-25.9,125.9,1,1,-30);
	this.instance_5.alpha = 0.801;

	this.instance_6 = new lib.leaf1_mc();
	this.instance_6.setTransform(-25.6,37.5);

	this.instance_7 = new lib.leaf3_mc();
	this.instance_7.setTransform(-9.6,-20);
	this.instance_7.alpha = 0.801;

	this.instance_8 = new lib.leaf4_mc();
	this.instance_8.setTransform(-22.3,89.9,1,1,0,-165,15);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.lime1_mc();
	this.instance_9.setTransform(-22.3,129.9,1,1,45);
	this.instance_9.alpha = 0.602;

	this.instance_10 = new lib.lime1_mc();
	this.instance_10.setTransform(-15.1,45.9,1,1,-45);
	this.instance_10.alpha = 0.602;

	this.instance_11 = new lib.lime2_mc();
	this.instance_11.setTransform(-25.1,79.9,1,1,90);
	this.instance_11.alpha = 0.602;

	this.instance_12 = new lib.lime1_mc();
	this.instance_12.setTransform(-39.7,-10.4);
	this.instance_12.alpha = 0.602;

	this.instance_13 = new lib.mixer8_mc();
	this.instance_13.setTransform(-22.2,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 1
	this.instance_14 = new lib.lime2_mc();
	this.instance_14.setTransform(18.6,-85.3,1,1,-98.8);

	this.instance_15 = new lib.solominka_mc();
	this.instance_15.setTransform(18.8,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-188,158.6,376);
p.frameBounds = [rect];


(lib.check_shadows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_shadows_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_shadows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_shadows_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_shadows_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect, rect];


(lib.check_lips_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_lips_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_lips_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_lips_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect, rect];


(lib.check_hairstyle_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_hairstyle_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_hairstyle_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_hairstyle_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect, rect];


(lib.check_eyebrows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_eyebrows_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_eyebrows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_eyebrows_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_eyebrows_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect, rect];


(lib.check_blush_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_blush_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_blush_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_blush_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_blush_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
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
	this.instance = new lib.rouge_new5_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new34_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new2_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new3_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new3_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new4_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new20_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new6_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new6_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new5_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new1_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rouge_new2_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.animation27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glass_mc();
	this.instance.setTransform(16,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// animation
	this.instance_1 = new lib.plate_mc();
	this.instance_1.setTransform(207.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// animation
	this.instance_2 = new lib.lime2_mc();
	this.instance_2.setTransform(-118,196.3,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// animation
	this.instance_3 = new lib.plate_mc();
	this.instance_3.setTransform(-140.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	// animation
	this.instance_4 = new lib.plate_mc();
	this.instance_4.setTransform(-251.6,150.3,1,1,0,0,0,-2,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// animation
	this.instance_5 = new lib.ice_mc();
	this.instance_5.setTransform(31.1,43.4,1,1,15);
	this.instance_5.alpha = 0.891;

	this.instance_6 = new lib.ice_mc();
	this.instance_6.setTransform(15.7,98.5,1,1,-30);
	this.instance_6.alpha = 0.891;

	this.instance_7 = new lib.ice_mc();
	this.instance_7.setTransform(-3.4,5.9,1,1,-15);
	this.instance_7.alpha = 0.891;

	this.instance_8 = new lib.leaf4_mc();
	this.instance_8.setTransform(3.2,-4.5);

	this.instance_9 = new lib.leaf2_mc();
	this.instance_9.setTransform(12.4,163.4,1,1,-30);
	this.instance_9.alpha = 0.801;

	this.instance_10 = new lib.leaf1_mc();
	this.instance_10.setTransform(12.6,74.9);

	this.instance_11 = new lib.leaf3_mc();
	this.instance_11.setTransform(28.7,17.4);
	this.instance_11.alpha = 0.801;

	this.instance_12 = new lib.leaf4_mc();
	this.instance_12.setTransform(16,127.4,1,1,0,-165,15);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.lime1_mc();
	this.instance_13.setTransform(16,167.3,1,1,45);
	this.instance_13.alpha = 0.602;

	this.instance_14 = new lib.lime1_mc();
	this.instance_14.setTransform(23.1,83.3,1,1,-45);
	this.instance_14.alpha = 0.602;

	this.instance_15 = new lib.lime2_mc();
	this.instance_15.setTransform(13.2,117.3,1,1,90);
	this.instance_15.alpha = 0.602;

	this.instance_16 = new lib.lime1_mc();
	this.instance_16.setTransform(-1.5,27);
	this.instance_16.alpha = 0.602;

	this.instance_17 = new lib.mixer8_mc();
	this.instance_17.setTransform(16,85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(30));

	// animation
	this.instance_18 = new lib.solominka_mc();
	this.instance_18.setTransform(242,164.5,1,1,68.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({rotation:0,x:145,y:-254.5},9).to({x:88.5,y:-238.5},4).to({x:57.1,y:26.5},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330.6,-48.5,759.6,333.5);
p.frameBounds = [rect, new cjs.Rectangle(-330.6,-48.5,745.8,304.6), new cjs.Rectangle(-330.6,-82.4,729,307.9), new cjs.Rectangle(-330.6,-141.5,709.2,367), new cjs.Rectangle(-330.6,-198,686.2,423.5), new cjs.Rectangle(-330.6,-251.2,660.7,476.7), new cjs.Rectangle(-330.6,-301.2,632.3,526.7), new cjs.Rectangle(-330.6,-347.9,615.2,573.4), new cjs.Rectangle(-330.6,-391.3,615.2,616.8), new cjs.Rectangle(-330.6,-431.5,615.2,657), new cjs.Rectangle(-330.6,-427.5,615.2,653), new cjs.Rectangle(-330.6,-423.5,615.2,649), new cjs.Rectangle(-330.6,-419.5,615.2,645), new cjs.Rectangle(-330.6,-415.5,615.2,641), new cjs.Rectangle(-330.6,-399,615.2,624.5), new cjs.Rectangle(-330.6,-382.4,615.2,607.9), new cjs.Rectangle(-330.6,-365.8,615.2,591.3), new cjs.Rectangle(-330.6,-349.3,615.2,574.8), new cjs.Rectangle(-330.6,-332.7,615.2,558.2), new cjs.Rectangle(-330.6,-316.1,615.2,541.6), new cjs.Rectangle(-330.6,-299.6,615.2,525.1), new cjs.Rectangle(-330.6,-283,615.2,508.5), new cjs.Rectangle(-330.6,-266.5,615.2,492), new cjs.Rectangle(-330.6,-249.9,615.2,475.4), new cjs.Rectangle(-330.6,-233.3,615.2,458.8), new cjs.Rectangle(-330.6,-216.8,615.2,442.3), new cjs.Rectangle(-330.6,-200.2,615.2,425.7), new cjs.Rectangle(-330.6,-183.6,615.2,409.1), new cjs.Rectangle(-330.6,-167.1,615.2,392.5), new cjs.Rectangle(-330.6,-150.5,615.2,376)];


(lib.animation25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glass_mc();
	this.instance.setTransform(16,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// animation
	this.instance_1 = new lib.plate_mc();
	this.instance_1.setTransform(207.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36));

	// animation
	this.instance_2 = new lib.lime2_mc();
	this.instance_2.setTransform(-118,196.3,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36));

	// animation
	this.instance_3 = new lib.plate_mc();
	this.instance_3.setTransform(-140.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36));

	// animation
	this.instance_4 = new lib.solominka_mc();
	this.instance_4.setTransform(242,164.5,1,1,68.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36));

	// animation
	this.instance_5 = new lib.ice_mc();
	this.instance_5.setTransform(-240,136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-45.3,y:-133.5},15).to({rotation:15,x:23.7},8).to({x:31.1,y:43.4,alpha:0.891},12).wait(1));

	// animation
	this.instance_6 = new lib.ice_mc();
	this.instance_6.setTransform(-274,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-77.5,y:-90.5},15).to({rotation:-30,x:16.5,y:-83.5},8).to({x:15.7,y:98.5,alpha:0.891},12).wait(1));

	// animation
	this.instance_7 = new lib.ice_mc();
	this.instance_7.setTransform(-224,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-106,y:-117.5},15).to({rotation:-15,x:-2.7,y:-154.5},8).to({x:-3.4,y:5.9,alpha:0.891},12).wait(1));

	// animation
	this.instance_8 = new lib.plate_mc();
	this.instance_8.setTransform(-251.6,150.3,1,1,0,0,0,-2,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36));

	// animation
	this.instance_9 = new lib.leaf4_mc();
	this.instance_9.setTransform(3.2,-4.5);

	this.instance_10 = new lib.leaf2_mc();
	this.instance_10.setTransform(12.4,163.4,1,1,-30);
	this.instance_10.alpha = 0.801;

	this.instance_11 = new lib.leaf1_mc();
	this.instance_11.setTransform(12.6,74.9);

	this.instance_12 = new lib.leaf3_mc();
	this.instance_12.setTransform(28.7,17.4);
	this.instance_12.alpha = 0.801;

	this.instance_13 = new lib.leaf4_mc();
	this.instance_13.setTransform(16,127.4,1,1,0,-165,15);
	this.instance_13.alpha = 0.699;

	this.instance_14 = new lib.lime1_mc();
	this.instance_14.setTransform(16,167.3,1,1,45);
	this.instance_14.alpha = 0.602;

	this.instance_15 = new lib.lime1_mc();
	this.instance_15.setTransform(23.1,83.3,1,1,-45);
	this.instance_15.alpha = 0.602;

	this.instance_16 = new lib.lime2_mc();
	this.instance_16.setTransform(13.2,117.3,1,1,90);
	this.instance_16.alpha = 0.602;

	this.instance_17 = new lib.lime1_mc();
	this.instance_17.setTransform(-1.5,27);
	this.instance_17.alpha = 0.602;

	this.instance_18 = new lib.mixer8_mc();
	this.instance_18.setTransform(16,85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330.6,-48.5,759.6,333.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-330.6,-48.5,759.3,333), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-330.6,-52.5,759.3,337), new cjs.Rectangle(-330.6,-70.5,759.3,355), new cjs.Rectangle(-330.6,-88.5,759.3,373), new cjs.Rectangle(-330.6,-106.5,759.3,391), new cjs.Rectangle(-330.6,-124.5,759.3,409), new cjs.Rectangle(-330.6,-142.5,759.3,427), new cjs.Rectangle(-330.6,-160.5,759.3,445), new cjs.Rectangle(-330.6,-161.4,759.3,445.8), new cjs.Rectangle(-330.6,-162.2,759.3,446.7), new cjs.Rectangle(-330.6,-163.1,759.3,447.6), new cjs.Rectangle(-330.6,-166.4,759.3,450.8), new cjs.Rectangle(-330.6,-171.8,759.3,456.3), new cjs.Rectangle(-330.6,-177.2,759.3,461.7), new cjs.Rectangle(-330.6,-182.6,759.3,467), new cjs.Rectangle(-330.6,-188,759.3,472.5), new cjs.Rectangle(-330.6,-174.4,759.3,458.9), new cjs.Rectangle(-330.6,-161,759.3,445.5), new cjs.Rectangle(-330.6,-147.7,759.3,432.1), new cjs.Rectangle(-330.6,-134.3,759.3,418.7), new cjs.Rectangle(-330.6,-120.9,759.3,405.3), new cjs.Rectangle(-330.6,-107.5,759.3,392), new cjs.Rectangle(-330.6,-94.2,759.3,378.6), new cjs.Rectangle(-330.6,-80.8,759.3,365.3), new cjs.Rectangle(-330.6,-67.4,759.3,351.8), new cjs.Rectangle(-330.6,-54.1,759.3,338.5), new cjs.Rectangle(-330.6,-48.5,759.3,333), new cjs.Rectangle(-330.6,-48.5,759.6,333.5)];


(lib.animation23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glass_mc();
	this.instance.setTransform(16,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// animation
	this.instance_1 = new lib.leaf4_mc();
	this.instance_1.setTransform(3.2,-119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-4.5},9).wait(1));

	// animation
	this.instance_2 = new lib.leaf2_mc();
	this.instance_2.setTransform(4.7,-181.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-30,x:12.4,y:163.4,alpha:0.801},9).wait(1));

	// animation
	this.instance_3 = new lib.leaf1_mc();
	this.instance_3.setTransform(50.9,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:12.6,y:74.9},9).wait(1));

	// animation
	this.instance_4 = new lib.leaf3_mc();
	this.instance_4.setTransform(28.7,-115.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:17.4,alpha:0.801},9).wait(1));

	// animation
	this.instance_5 = new lib.leaf4_mc();
	this.instance_5.setTransform(22.8,-132.1,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({skewX:195,skewY:15,x:16,y:127.4,alpha:0.699},9).wait(1));

	// animation
	this.instance_6 = new lib.plate_mc();
	this.instance_6.setTransform(207.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.lime2_mc();
	this.instance_7.setTransform(-118,196.3,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.plate_mc();
	this.instance_8.setTransform(-140.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.solominka_mc();
	this.instance_9.setTransform(242,164.5,1,1,68.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.ices_mc();
	this.instance_10.setTransform(-249,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.plate_mc();
	this.instance_11.setTransform(-251.6,150.3,1,1,0,0,0,-2,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.lime1_mc();
	this.instance_12.setTransform(16,167.3,1,1,45);
	this.instance_12.alpha = 0.602;

	this.instance_13 = new lib.lime1_mc();
	this.instance_13.setTransform(23.1,83.3,1,1,-45);
	this.instance_13.alpha = 0.602;

	this.instance_14 = new lib.lime2_mc();
	this.instance_14.setTransform(13.2,117.3,1,1,90);
	this.instance_14.alpha = 0.602;

	this.instance_15 = new lib.lime1_mc();
	this.instance_15.setTransform(-1.5,27);
	this.instance_15.alpha = 0.602;

	this.instance_16 = new lib.mixer8_mc();
	this.instance_16.setTransform(16,85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330.6,-214,759.6,498.9);
p.frameBounds = [rect, new cjs.Rectangle(-330.6,-186.1,759.3,470.5), new cjs.Rectangle(-330.6,-158.2,759.3,442.7), new cjs.Rectangle(-330.6,-130.3,759.3,414.8), new cjs.Rectangle(-330.6,-107.5,759.3,391.9), new cjs.Rectangle(-330.6,-94.7,759.3,379.1), new cjs.Rectangle(-330.6,-81.9,759.3,366.3), new cjs.Rectangle(-330.6,-69.1,759.3,353.5), new cjs.Rectangle(-330.6,-56.4,759.3,340.8), new cjs.Rectangle(-330.6,-48.5,759.6,333.5)];


(lib.animation21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glass_mc();
	this.instance.setTransform(16,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// animation
	this.instance_1 = new lib.leaf4_mc();
	this.instance_1.setTransform(200,190.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:111.2,y:-144.5},11).to({x:3.2,y:-119.5},8).wait(1));

	// animation
	this.instance_2 = new lib.leaf2_mc();
	this.instance_2.setTransform(236.7,190.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:191.7,y:-137.9},8).to({x:4.7,y:-181.5},11).wait(1));

	// animation
	this.instance_3 = new lib.leaf1_mc();
	this.instance_3.setTransform(161.9,184.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:131.9,y:-85},9).to({x:50.9,y:-176},10).wait(1));

	// animation
	this.instance_4 = new lib.leaf3_mc();
	this.instance_4.setTransform(182.7,169.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:146.7,y:-132.6},6).to({x:28.7,y:-115.6},13).wait(1));

	// animation
	this.instance_5 = new lib.leaf4_mc();
	this.instance_5.setTransform(236,183.8,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:204.4,y:-92.1},10).to({x:22.8,y:-132.1},9).wait(1));

	// animation
	this.instance_6 = new lib.plate_mc();
	this.instance_6.setTransform(207.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// animation
	this.instance_7 = new lib.lime2_mc();
	this.instance_7.setTransform(-118,196.3,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

	// animation
	this.instance_8 = new lib.plate_mc();
	this.instance_8.setTransform(-140.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20));

	// animation
	this.instance_9 = new lib.solominka_mc();
	this.instance_9.setTransform(242,164.5,1,1,68.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20));

	// animation
	this.instance_10 = new lib.ices_mc();
	this.instance_10.setTransform(-249,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20));

	// animation
	this.instance_11 = new lib.plate_mc();
	this.instance_11.setTransform(-251.6,150.3,1,1,0,0,0,-2,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20));

	// animation
	this.instance_12 = new lib.lime1_mc();
	this.instance_12.setTransform(16,167.3,1,1,45);
	this.instance_12.alpha = 0.602;

	this.instance_13 = new lib.lime1_mc();
	this.instance_13.setTransform(23.1,83.3,1,1,-45);
	this.instance_13.alpha = 0.602;

	this.instance_14 = new lib.lime2_mc();
	this.instance_14.setTransform(13.2,117.3,1,1,90);
	this.instance_14.alpha = 0.602;

	this.instance_15 = new lib.lime1_mc();
	this.instance_15.setTransform(-1.5,27);
	this.instance_15.alpha = 0.602;

	this.instance_16 = new lib.mixer8_mc();
	this.instance_16.setTransform(16,85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330.6,-48.5,759.6,333.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-330.6,-48.5,759.3,333), rect, rect, new cjs.Rectangle(-330.6,-63.9,759.3,348.3), new cjs.Rectangle(-330.6,-114.2,759.3,398.7), new cjs.Rectangle(-330.6,-164.6,759.3,449), new cjs.Rectangle(-330.6,-163.3,759.3,447.7), new cjs.Rectangle(-330.6,-170.4,759.3,454.8), new cjs.Rectangle(-330.6,-174.3,759.3,458.8), new cjs.Rectangle(-330.6,-178.3,759.3,462.8), new cjs.Rectangle(-330.6,-183.6,759.3,468), new cjs.Rectangle(-330.6,-186.2,759.3,470.7), new cjs.Rectangle(-330.6,-190.2,759.3,474.6), new cjs.Rectangle(-330.6,-194.2,759.3,478.6), new cjs.Rectangle(-330.6,-198.1,759.3,482.6), new cjs.Rectangle(-330.6,-202.1,759.3,486.5), new cjs.Rectangle(-330.6,-206,759.3,490.5), new cjs.Rectangle(-330.6,-210,759.3,494.5), new cjs.Rectangle(-330.6,-214,759.6,498.9)];


(lib.animation19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glass_mc();
	this.instance.setTransform(16,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// animation
	this.instance_1 = new lib.leafs_mc();
	this.instance_1.setTransform(199.4,183.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// animation
	this.instance_2 = new lib.plate_mc();
	this.instance_2.setTransform(207.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// animation
	this.instance_3 = new lib.lime2_mc();
	this.instance_3.setTransform(-118,196.3,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	// animation
	this.instance_4 = new lib.lime1_mc();
	this.instance_4.setTransform(-93.8,-97.7,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:4.2,y:-150.6},9).to({x:16,y:167.3,alpha:0.602},15).wait(6));

	// animation
	this.instance_5 = new lib.lime1_mc();
	this.instance_5.setTransform(-92.9,-154.6,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:31.1,y:-146.6},4).to({x:23.1,y:83.3,alpha:0.602},15).wait(11));

	// animation
	this.instance_6 = new lib.lime2_mc();
	this.instance_6.setTransform(-134,-98.6,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:4.2,y:-150.6},8).to({x:13.2,y:117.3,alpha:0.602},17).wait(5));

	// animation
	this.instance_7 = new lib.lime1_mc();
	this.instance_7.setTransform(-129.5,-141.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:5.5,y:-114.7},6).to({x:-1.5,y:27,alpha:0.602},13).wait(11));

	// animation
	this.instance_8 = new lib.plate_mc();
	this.instance_8.setTransform(-140.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30));

	// animation
	this.instance_9 = new lib.solominka_mc();
	this.instance_9.setTransform(242,164.5,1,1,68.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30));

	// animation
	this.instance_10 = new lib.ices_mc();
	this.instance_10.setTransform(-249,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30));

	// animation
	this.instance_11 = new lib.plate_mc();
	this.instance_11.setTransform(-251.6,150.3,1,1,0,0,0,-2,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30));

	// animation
	this.instance_12 = new lib.mixer8_mc();
	this.instance_12.setTransform(16,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330.6,-194.6,759.6,479.5);
p.frameBounds = [rect, new cjs.Rectangle(-330.6,-192.6,759.6,477.6), new cjs.Rectangle(-330.6,-190.6,759.6,475.6), new cjs.Rectangle(-330.6,-188.6,759.6,473.6), new cjs.Rectangle(-330.6,-186.6,759.6,471.5), new cjs.Rectangle(-330.6,-171.3,759.6,456.2), new cjs.Rectangle(-330.6,-172.9,759.6,457.8), new cjs.Rectangle(-330.6,-178.8,759.6,463.7), new cjs.Rectangle(-330.6,-184.6,759.6,469.6), new cjs.Rectangle(-330.6,-190.6,759.6,475.5), new cjs.Rectangle(-330.6,-169.3,759.6,454.3), new cjs.Rectangle(-330.6,-148.1,759.6,433.1), new cjs.Rectangle(-330.6,-126.9,759.6,411.9), new cjs.Rectangle(-330.6,-105.7,759.6,390.7), new cjs.Rectangle(-330.6,-88.6,759.6,373.5), new cjs.Rectangle(-330.6,-72.8,759.6,357.7), new cjs.Rectangle(-330.6,-57,759.6,342), rect=new cjs.Rectangle(-330.6,-48.5,759.6,333.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glass_mc();
	this.instance.setTransform(16,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// animation
	this.instance_1 = new lib.leafs_mc();
	this.instance_1.setTransform(199.4,183.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.plate_mc();
	this.instance_2.setTransform(207.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.lime2_mc();
	this.instance_3.setTransform(-118,196.3,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.lime1_mc();
	this.instance_4.setTransform(-139,187.3,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:45,x:-93.8,y:-97.7},9).wait(1));

	// animation
	this.instance_5 = new lib.lime1_mc();
	this.instance_5.setTransform(-104,183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-45,x:-92.9,y:-154.6},9).wait(1));

	// animation
	this.instance_6 = new lib.lime2_mc();
	this.instance_6.setTransform(-183,189.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:90,x:-134,y:-98.6},9).wait(1));

	// animation
	this.instance_7 = new lib.lime1_mc();
	this.instance_7.setTransform(-151,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-129.5,y:-141.7},9).wait(1));

	// animation
	this.instance_8 = new lib.plate_mc();
	this.instance_8.setTransform(-140.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.solominka_mc();
	this.instance_9.setTransform(242,164.5,1,1,68.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.ices_mc();
	this.instance_10.setTransform(-249,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.plate_mc();
	this.instance_11.setTransform(-251.6,150.3,1,1,0,0,0,-2,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.mixer8_mc();
	this.instance_12.setTransform(16,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330.6,-48.5,759.6,333.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-330.6,-48.5,759.3,333), rect, rect, rect, rect, new cjs.Rectangle(-330.6,-79.9,759.3,364.3), new cjs.Rectangle(-330.6,-118.4,759.3,402.8), new cjs.Rectangle(-330.6,-156.5,759.3,440.9), new cjs.Rectangle(-330.6,-194.6,759.6,479.5)];


(lib.animation15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glass_mc();
	this.instance.setTransform(-97,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:16},9).wait(26));

	// animation
	this.instance_1 = new lib.leafs_mc();
	this.instance_1.setTransform(450.4,183.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:199.4},15).wait(11));

	// animation
	this.instance_2 = new lib.plate_mc();
	this.instance_2.setTransform(458.5,201.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:207.5},15).wait(11));

	// animation
	this.instance_3 = new lib.limes_mc();
	this.instance_3.setTransform(-471.9,187.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:-145},15).wait(11));

	// animation
	this.instance_4 = new lib.plate_mc();
	this.instance_4.setTransform(-467.4,201.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:-140.5},15).wait(11));

	// animation
	this.instance_5 = new lib.solominka_mc();
	this.instance_5.setTransform(511,164.5,1,1,68.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({x:242},10).wait(1));

	// animation
	this.instance_6 = new lib.ices_mc();
	this.instance_6.setTransform(-461.9,130);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({x:-249},10).wait(1));

	// animation
	this.instance_7 = new lib.plate_mc();
	this.instance_7.setTransform(-464.6,150.3,1,1,0,0,0,-2,-1.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({x:-251.6},10).wait(1));

	// animation
	this.instance_8 = new lib.mixer8_mc();
	this.instance_8.setTransform(-97,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:16},9).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-48.5,106,274);
p.frameBounds = [rect, new cjs.Rectangle(-137.4,-48.5,106,274), new cjs.Rectangle(-124.9,-48.5,106,274), new cjs.Rectangle(-112.3,-48.5,106,274), new cjs.Rectangle(-99.8,-48.5,106,274), new cjs.Rectangle(-87.2,-48.5,106,274), new cjs.Rectangle(-74.6,-48.5,106,274), new cjs.Rectangle(-62.1,-48.5,106,274), new cjs.Rectangle(-49.5,-48.5,106,274), new cjs.Rectangle(-548.4,-48.5,1084,278.1), new cjs.Rectangle(-526.6,-48.5,1045.4,278.1), new cjs.Rectangle(-504.8,-48.5,1006.9,278.1), new cjs.Rectangle(-483,-48.5,968.4,278.1), new cjs.Rectangle(-461.2,-48.5,929.8,278.1), new cjs.Rectangle(-439.4,-48.5,891.3,278.1), new cjs.Rectangle(-417.6,-48.5,852.8,278.1), new cjs.Rectangle(-395.9,-48.5,814.3,278.1), new cjs.Rectangle(-374,-48.5,775.7,278.1), new cjs.Rectangle(-352.3,-48.5,737.2,278.1), new cjs.Rectangle(-330.5,-48.5,698.7,278.1), new cjs.Rectangle(-308.7,-48.5,660.2,278.1), new cjs.Rectangle(-286.9,-48.5,621.6,278.1), new cjs.Rectangle(-265.1,-48.5,583.1,278.1), new cjs.Rectangle(-243.3,-48.5,544.6,278.1), new cjs.Rectangle(-543.6,-48.5,1241.5,333.5), new cjs.Rectangle(-522.3,-48.5,1193.1,333), new cjs.Rectangle(-501,-48.5,1144.9,333), new cjs.Rectangle(-479.7,-48.5,1096.7,333), new cjs.Rectangle(-458.4,-48.5,1048.4,333), new cjs.Rectangle(-437.1,-48.5,1000.3,333), new cjs.Rectangle(-415.8,-48.5,952.1,333), new cjs.Rectangle(-394.5,-48.5,903.9,333), new cjs.Rectangle(-373.2,-48.5,855.7,333), new cjs.Rectangle(-351.9,-48.5,807.5,333), new cjs.Rectangle(-330.6,-48.5,759.6,333.5)];


(lib.animation13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mixer7_mc();
	this.instance.setTransform(192.3,226.9,1,1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({x:486.3,alpha:0.012},15).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.glass_mc();
	this.instance_1.setTransform(-97,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_28 = new cjs.Graphics().p("EgOhAmbMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_29 = new cjs.Graphics().p("EgOhAlqMAAAgqeIC+AAIAAi+IXuAAMAAAAtcg");
	var mask_graphics_30 = new cjs.Graphics().p("EgOhAk5MAAAgqeIC+AAIAAi+IXuAAMAAAAtcg");
	var mask_graphics_31 = new cjs.Graphics().p("EgOhAkHMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_32 = new cjs.Graphics().p("EgOhAjWMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_33 = new cjs.Graphics().p("EgOhAilMAAAgqeIC+AAIAAi+IXuAAMAAAAtcg");
	var mask_graphics_34 = new cjs.Graphics().p("EgOhAh0MAAAgqeIC+AAIAAi+IXuAAMAAAAtcg");
	var mask_graphics_35 = new cjs.Graphics().p("EgOhAhCMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_36 = new cjs.Graphics().p("EgOhAgRMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_37 = new cjs.Graphics().p("AuhfgMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_38 = new cjs.Graphics().p("AuhevMAAAgqeIC+AAIAAi+IXuAAMAAAAtcg");
	var mask_graphics_39 = new cjs.Graphics().p("Auhd+MAAAgqeIC+AAIAAi+IXuAAMAAAAtcg");
	var mask_graphics_40 = new cjs.Graphics().p("AuhdMMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_41 = new cjs.Graphics().p("AuhcbMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_42 = new cjs.Graphics().p("AuhbqMAAAgqeIC+AAIAAi+IXuAAMAAAAtcg");
	var mask_graphics_43 = new cjs.Graphics().p("Auha5MAAAgqeIC+AAIAAi+IXuAAMAAAAtcg");
	var mask_graphics_44 = new cjs.Graphics().p("AuhaHMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_45 = new cjs.Graphics().p("AuhZWMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_46 = new cjs.Graphics().p("AuhYlMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_47 = new cjs.Graphics().p("AuhX0MAAAgqeIC+AAIAAi+IXuAAMAAAAtcg");
	var mask_graphics_48 = new cjs.Graphics().p("AuhXDMAAAgqeIC+AAIAAi+IXuAAMAAAAtcg");
	var mask_graphics_49 = new cjs.Graphics().p("AuhWuMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_50 = new cjs.Graphics().p("AuhWuMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_51 = new cjs.Graphics().p("AuhWuMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_52 = new cjs.Graphics().p("AuhWuMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_53 = new cjs.Graphics().p("AuhWuMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");
	var mask_graphics_54 = new cjs.Graphics().p("AuhWuMAAAgqdIC+AAIAAi+IXuAAMAAAAtbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_graphics_28,x:-93,y:246}).wait(1).to({graphics:mask_graphics_29,x:-93,y:241}).wait(1).to({graphics:mask_graphics_30,x:-93,y:236.1}).wait(1).to({graphics:mask_graphics_31,x:-93,y:231.2}).wait(1).to({graphics:mask_graphics_32,x:-93,y:226.3}).wait(1).to({graphics:mask_graphics_33,x:-93,y:221.3}).wait(1).to({graphics:mask_graphics_34,x:-93,y:216.4}).wait(1).to({graphics:mask_graphics_35,x:-93,y:211.5}).wait(1).to({graphics:mask_graphics_36,x:-93,y:206.6}).wait(1).to({graphics:mask_graphics_37,x:-93,y:201.7}).wait(1).to({graphics:mask_graphics_38,x:-93,y:196.7}).wait(1).to({graphics:mask_graphics_39,x:-93,y:191.8}).wait(1).to({graphics:mask_graphics_40,x:-93,y:186.9}).wait(1).to({graphics:mask_graphics_41,x:-93,y:182}).wait(1).to({graphics:mask_graphics_42,x:-93,y:177}).wait(1).to({graphics:mask_graphics_43,x:-93,y:172.1}).wait(1).to({graphics:mask_graphics_44,x:-93,y:167.2}).wait(1).to({graphics:mask_graphics_45,x:-93,y:162.3}).wait(1).to({graphics:mask_graphics_46,x:-93,y:157.4}).wait(1).to({graphics:mask_graphics_47,x:-93,y:152.4}).wait(1).to({graphics:mask_graphics_48,x:-93,y:147.5}).wait(1).to({graphics:mask_graphics_49,x:-93,y:139.7}).wait(1).to({graphics:mask_graphics_50,x:-93,y:129.9}).wait(1).to({graphics:mask_graphics_51,x:-93,y:120}).wait(1).to({graphics:mask_graphics_52,x:-93,y:110.2}).wait(1).to({graphics:mask_graphics_53,x:-93,y:100.3}).wait(1).to({graphics:mask_graphics_54,x:-93,y:90.5}).wait(1).to({graphics:null,x:0,y:0}).wait(26));

	// animation
	this.instance_2 = new lib.mixer8_mc();
	this.instance_2.setTransform(-97,85.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(53));

	// animation
	this.instance_3 = new lib.mixer6_mc();
	this.instance_3.setTransform(192,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-83.6},9).to({rotation:-86.2,x:31.4,y:-159.8},19).wait(25).to({rotation:0,x:192.2,y:-45.7},11).to({x:486.2,alpha:0.012},15).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.mixer12_mc();
	this.instance_4.setTransform(192,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-81.5},9).to({rotation:-86.2,x:33.5,y:-159.7},19).to({scaleX:0.25,scaleY:1.02,rotation:0,skewX:-98.3,skewY:-86.2,x:22.5,y:-98.7,alpha:0.012},25).to({_off:true},1).wait(27));

	// animation
	this.instance_5 = new lib.mixer4_mc();
	this.instance_5.setTransform(192.4,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-84.2},9).to({rotation:-86.2,x:30.9,y:-160.1},19).wait(25).to({rotation:0,x:192.5,y:-46.2},11).to({x:486.5,alpha:0.012},15).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.mixer9_mc();
	this.instance_6.setTransform(-88.6,46.3,1,1,0,7.2,-172.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({_off:true},27).wait(26));

	// animation
	this.instance_7 = new lib.mixer3_mc();
	this.instance_7.setTransform(190.4,42.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({x:484.4,alpha:0.012},15).to({_off:true},1).wait(1));

	// animation
	this.instance_8 = new lib.mixer2_mc();
	this.instance_8.setTransform(194.4,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({x:488.4,alpha:0.012},15).to({_off:true},1).wait(1));

	// animation
	this.instance_9 = new lib.mixer1_mc();
	this.instance_9.setTransform(192.4,141.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(64).to({x:486.4,alpha:0.012},15).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-142.1,453,408.2);
p.frameBounds = [rect, new cjs.Rectangle(-150,-146.3,452.9,412.1), new cjs.Rectangle(-150,-150.6,452.9,416.3), new cjs.Rectangle(-150,-154.8,452.9,420.5), new cjs.Rectangle(-150,-159,452.9,424.8), new cjs.Rectangle(-150,-163.2,452.9,429), new cjs.Rectangle(-150,-167.5,452.9,433.2), new cjs.Rectangle(-150,-171.7,452.9,437.4), new cjs.Rectangle(-150,-175.9,452.9,441.7), new cjs.Rectangle(-150,-180.1,452.9,445.9), new cjs.Rectangle(-150,-192.1,452.9,457.9), new cjs.Rectangle(-150,-203.6,452.9,469.3), new cjs.Rectangle(-150,-214.3,452.9,480.1), new cjs.Rectangle(-150,-224.3,452.9,490), new cjs.Rectangle(-150,-233.5,452.9,499.2), new cjs.Rectangle(-150,-241.9,452.9,507.7), new cjs.Rectangle(-150,-249.4,452.9,515.2), new cjs.Rectangle(-150,-256.3,452.9,522), new cjs.Rectangle(-150,-262.1,452.9,527.8), new cjs.Rectangle(-150,-267.1,452.9,532.8), new cjs.Rectangle(-150,-271.1,452.9,536.8), new cjs.Rectangle(-150,-274.3,452.9,540), new cjs.Rectangle(-150,-276.6,452.9,542.3), new cjs.Rectangle(-150,-278,452.9,543.7), new cjs.Rectangle(-150,-278.4,452.9,544.1), new cjs.Rectangle(-150,-278.1,452.9,543.8), new cjs.Rectangle(-150,-277,452.9,542.8), new cjs.Rectangle(-150,-275.2,452.9,540.9), new cjs.Rectangle(-150,-272.7,452.9,538.5), rect=new cjs.Rectangle(-150,-272.6,452.9,538.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-150,-272.6,453,538.7), rect=new cjs.Rectangle(-150,-272.6,452.9,538.3), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-150,-272.7,452.9,538.5), new cjs.Rectangle(-150,-273.1,452.9,538.8), new cjs.Rectangle(-150,-271.4,452.9,537.1), new cjs.Rectangle(-150,-267.4,452.9,533.1), new cjs.Rectangle(-150,-260.7,452.9,526.4), new cjs.Rectangle(-150,-251.4,452.9,517.1), new cjs.Rectangle(-150,-239.4,452.9,505.1), new cjs.Rectangle(-150,-224.8,452.9,490.5), new cjs.Rectangle(-150,-207.7,452.9,473.5), new cjs.Rectangle(-150,-187.9,452.9,453.6), new cjs.Rectangle(-150,-166.1,452.9,431.8), new cjs.Rectangle(-150,-142.2,453,408.3), new cjs.Rectangle(-150,-142.2,472.5,407.9), new cjs.Rectangle(-150,-142.2,492.1,407.9), new cjs.Rectangle(-150,-142.2,511.7,407.9), new cjs.Rectangle(-150,-142.2,531.3,407.9), new cjs.Rectangle(-150,-142.2,550.9,407.9), new cjs.Rectangle(-150,-142.2,570.5,407.9), new cjs.Rectangle(-150,-142.2,590.1,407.9), new cjs.Rectangle(-150,-142.2,609.7,407.9), new cjs.Rectangle(-150,-142.2,629.3,407.9), new cjs.Rectangle(-150,-142.2,648.9,407.9), new cjs.Rectangle(-150,-142.2,668.5,407.9), new cjs.Rectangle(-150,-142.2,688.1,407.9), new cjs.Rectangle(-150,-142.2,707.7,407.9), new cjs.Rectangle(-150,-142.2,727.3,407.9), new cjs.Rectangle(-150,-142.2,747,408.3), new cjs.Rectangle(-150,-48.5,106,274)];


(lib.animation11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mixer7_mc();
	this.instance.setTransform(192.3,226.9,1,1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// animation
	this.instance_1 = new lib.glass_mc();
	this.instance_1.setTransform(-429.9,88.5);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-97,alpha:1},9).wait(1));

	// animation
	this.instance_2 = new lib.mixer6_mc();
	this.instance_2.setTransform(192,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq/NXIlV78MAgoAAAIlyb8QkTBPlZAAQlXAAmehPg");
	mask.setTransform(191.5,-46.6);

	// animation
	this.instance_3 = new lib.mix_mc();
	this.instance_3.setTransform(-304,-43.5);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.mixer4_mc();
	this.instance_4.setTransform(192.4,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.mixer3_mc();
	this.instance_5.setTransform(190.4,42.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.mixer2_mc();
	this.instance_6.setTransform(194.4,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.mixer1_mc();
	this.instance_7.setTransform(192.4,141.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-482.9,-142.1,785.9,408.2);
p.frameBounds = [rect, new cjs.Rectangle(-445.9,-142.1,748.8,407.9), new cjs.Rectangle(-408.9,-142.1,711.8,407.9), new cjs.Rectangle(-371.9,-142.1,674.8,407.9), new cjs.Rectangle(-334.9,-142.1,637.8,407.9), new cjs.Rectangle(-298,-142.1,600.9,407.9), new cjs.Rectangle(-261,-142.1,563.9,407.9), new cjs.Rectangle(-224,-142.1,526.9,407.9), new cjs.Rectangle(-187,-142.1,489.9,407.9), new cjs.Rectangle(-150,-142.1,453,408.2)];


(lib.animation9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mixer7_mc();
	this.instance.setTransform(192.3,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({rotation:-9.5,x:171.3,y:-166},5).to({x:192.3,y:226.9},16).wait(1));

	// animation
	this.instance_1 = new lib.mixer6_mc();
	this.instance_1.setTransform(192,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq/NXIlV78MAgoAAAIlyb8QkTBPlZAAQlXAAmehPg");
	mask.setTransform(191.5,-46.6);

	// animation
	this.instance_2 = new lib.mix_mc();
	this.instance_2.setTransform(503,-43.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({x:-304},76).wait(32));

	// animation
	this.instance_3 = new lib.limes2_mc();
	this.instance_3.setTransform(195.1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.012},89).to({_off:true},1).wait(31));

	// animation
	this.instance_4 = new lib.mixer4_mc();
	this.instance_4.setTransform(192.4,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(121));

	// animation
	this.instance_5 = new lib.mixer3_mc();
	this.instance_5.setTransform(190.4,42.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(121));

	// animation
	this.instance_6 = new lib.mixer2_mc();
	this.instance_6.setTransform(194.4,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-135},13).wait(71).to({rotation:0},5).wait(32));

	// animation
	this.instance_7 = new lib.mixer1_mc();
	this.instance_7.setTransform(192.4,141.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(81,-173.9,220,410.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(75.8,-182.5,223.1,418.9), new cjs.Rectangle(70.6,-191.4,228.3,427.8), new cjs.Rectangle(65.6,-199.8,233.3,436.2), new cjs.Rectangle(60.7,-208.6,238.2,445), new cjs.Rectangle(55.9,-217.4,243,453.8), new cjs.Rectangle(57.3,-192.4,241.6,428.8), new cjs.Rectangle(58.6,-167.9,240.3,404.2), new cjs.Rectangle(59.9,-143.3,239,379.6), new cjs.Rectangle(61.2,-142.1,237.7,378.5), new cjs.Rectangle(62.5,-142.1,236.4,378.5), new cjs.Rectangle(63.9,-142.1,235,378.5), new cjs.Rectangle(65.2,-142.1,233.7,378.5), new cjs.Rectangle(66.5,-142.1,232.4,378.5), new cjs.Rectangle(67.8,-142.1,231.1,378.5), new cjs.Rectangle(69.1,-142.1,229.8,378.5), new cjs.Rectangle(70.4,-142.1,228.5,378.5), new cjs.Rectangle(71.7,-142.1,227.2,378.5), new cjs.Rectangle(73,-142.1,225.9,378.5), new cjs.Rectangle(74.4,-142.1,225.9,378.5), new cjs.Rectangle(75.7,-142.1,225.9,383.3), new cjs.Rectangle(76.9,-142.1,226.1,408.2)];


(lib.animation7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mixer7_mc();
	this.instance.setTransform(220.8,230.9,1,1,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({rotation:0,x:198.3,y:20},9).to({x:192.3,y:-140},10).wait(1));

	// animation
	this.instance_1 = new lib.mixer6_mc();
	this.instance_1.setTransform(192,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// animation
	this.instance_2 = new lib.plate_mc();
	this.instance_2.setTransform(-203.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({x:-528.4,alpha:0.012},10).to({_off:true},1).wait(19));

	// animation
	this.instance_3 = new lib.bottle_mc();
	this.instance_3.setTransform(-10,-152.6,1,1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:105,x:17,y:-208.6},9).wait(51).to({rotation:37.3,x:-126,y:-95.6,alpha:0.012},10).to({_off:true},1).wait(19));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq/NXIlV78MAgoAAAIlyb8QkTBPlZAAQlXAAmehPg");
	mask.setTransform(191.5,-46.6);

	// animation
	this.instance_4 = new lib.mixer5_mc();
	this.instance_4.setTransform(189,140.4);
	this.instance_4.alpha = 0.898;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:-43.5},51).wait(30));

	// animation
	this.instance_5 = new lib.mixer9_mc();
	this.instance_5.setTransform(141,-69.5,1,0.874);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).wait(50).to({_off:true},1).wait(30));

	// animation
	this.instance_6 = new lib.limes2_mc();
	this.instance_6.setTransform(195.1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

	// animation
	this.instance_7 = new lib.mixer4_mc();
	this.instance_7.setTransform(192.4,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

	// animation
	this.instance_8 = new lib.mixer3_mc();
	this.instance_8.setTransform(190.4,42.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90));

	// animation
	this.instance_9 = new lib.mixer2_mc();
	this.instance_9.setTransform(194.4,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90));

	// animation
	this.instance_10 = new lib.mixer1_mc();
	this.instance_10.setTransform(192.4,141.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-284.5,-249.3,615.7,513.7);
p.frameBounds = [rect, new cjs.Rectangle(-284.5,-247.7,615.6,511.8), new cjs.Rectangle(-284.5,-245.6,615.6,509.8), new cjs.Rectangle(-284.5,-242.7,615.6,506.9), new cjs.Rectangle(-284.5,-239.4,615.6,503.6), new cjs.Rectangle(-284.5,-235.6,615.6,499.8), new cjs.Rectangle(-284.5,-231.4,615.6,495.6), new cjs.Rectangle(-284.5,-247.7,615.6,511.9), new cjs.Rectangle(-284.5,-264,615.6,528.1), new cjs.Rectangle(-284.5,-280.1,615.6,544.3), rect=new cjs.Rectangle(-284.5,-279.7,615.6,543.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-284.5,-280.1,615.6,544.3), new cjs.Rectangle(-317,-255.4,648.1,519.5), new cjs.Rectangle(-349.5,-230.2,680.6,494.4), new cjs.Rectangle(-382,-227.2,713.1,491.3), new cjs.Rectangle(-414.5,-229.3,745.6,493.4), new cjs.Rectangle(-446.9,-230.4,778.1,494.6), new cjs.Rectangle(-479.4,-230.6,810.6,494.7), new cjs.Rectangle(-511.9,-229.4,843.1,493.5), new cjs.Rectangle(-544.4,-226.8,875.6,491), new cjs.Rectangle(-576.9,-222.8,908.1,486.9), new cjs.Rectangle(-609.4,-217.4,940.6,481.8), new cjs.Rectangle(84.5,-142.1,244,381.4), new cjs.Rectangle(84.5,-142.1,241.5,378.5), new cjs.Rectangle(84.5,-142.1,238.7,378.5), new cjs.Rectangle(84.5,-142.1,236.1,378.5), new cjs.Rectangle(84.5,-142.1,233.4,378.5), new cjs.Rectangle(84.5,-142.1,230.7,378.5), new cjs.Rectangle(84.5,-142.1,228,378.5), new cjs.Rectangle(84.5,-142.1,225.2,378.5), new cjs.Rectangle(84.5,-142.1,222.5,378.5), new cjs.Rectangle(84.5,-142.1,221.9,378.5), new cjs.Rectangle(84.5,-142.1,221.3,378.5), new cjs.Rectangle(84.5,-142.1,220.7,378.5), new cjs.Rectangle(84.5,-142.1,220.1,378.5), new cjs.Rectangle(84,-142.1,220,378.5), new cjs.Rectangle(83.4,-142.1,220,378.5), new cjs.Rectangle(82.8,-142.1,220,378.5), new cjs.Rectangle(82.2,-142.1,220,378.5), new cjs.Rectangle(81.6,-157.8,220,394.2), new cjs.Rectangle(81,-173.9,220,410.3)];


(lib.animation5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mixer7_mc();
	this.instance.setTransform(220.8,230.9,1,1,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// animation
	this.instance_1 = new lib.mixer6_mc();
	this.instance_1.setTransform(192,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// animation
	this.instance_2 = new lib.limes2_mc();
	this.instance_2.setTransform(195.1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.plate_mc();
	this.instance_3.setTransform(-203.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.bottle1_mc();
	this.instance_4.setTransform(-49.2,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-45,x:-100.2,y:-129.5,alpha:0.012},6).to({_off:true},1).wait(13));

	// animation
	this.instance_5 = new lib.bottle_mc();
	this.instance_5.setTransform(-49,59.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({rotation:60,x:-10,y:-152.6},13).wait(1));

	// animation
	this.instance_6 = new lib.mixer4_mc();
	this.instance_6.setTransform(192.4,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// animation
	this.instance_7 = new lib.mixer3_mc();
	this.instance_7.setTransform(190.4,42.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

	// animation
	this.instance_8 = new lib.mixer2_mc();
	this.instance_8.setTransform(194.4,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20));

	// animation
	this.instance_9 = new lib.mixer1_mc();
	this.instance_9.setTransform(192.4,141.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-284.5,-142.1,615.7,406.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-284.5,-142.1,615.6,406.3), rect, rect, rect, rect, new cjs.Rectangle(-284.5,-145.4,615.6,409.6), rect=new cjs.Rectangle(-284.5,-142.1,615.6,406.3), rect, rect, rect, new cjs.Rectangle(-284.5,-149.9,615.6,414.1), new cjs.Rectangle(-284.5,-165.1,615.6,429.2), new cjs.Rectangle(-284.5,-179.3,615.6,443.5), new cjs.Rectangle(-284.5,-192.8,615.6,457), new cjs.Rectangle(-284.5,-205.5,615.6,469.6), new cjs.Rectangle(-284.5,-217.5,615.6,481.7), new cjs.Rectangle(-284.5,-228.6,615.6,492.8), new cjs.Rectangle(-284.5,-239.3,615.6,503.4), new cjs.Rectangle(-284.5,-249.3,615.7,513.7)];


(lib.animation3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mixer7_mc();
	this.instance.setTransform(220.8,230.9,1,1,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// animation
	this.instance_1 = new lib.mixer6_mc();
	this.instance_1.setTransform(192,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// animation
	this.instance_2 = new lib.lime2_mc();
	this.instance_2.setTransform(104.3,-166.1,1,1,45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({rotation:75,x:160.5,y:-62.1},14).to({x:154.9,y:12.5},12).wait(10));

	// animation
	this.instance_3 = new lib.lime1_mc();
	this.instance_3.setTransform(90.6,-184.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({x:144.6,y:-101.4},14).to({x:180.6,y:3.5},15).wait(7));

	// animation
	this.instance_4 = new lib.lime1_mc();
	this.instance_4.setTransform(122.8,-170.3,1,1,30);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({rotation:60,x:198.8,y:-63.4},14).to({x:225.8,y:9.6},10).wait(12));

	// animation
	this.instance_5 = new lib.lime2_mc();
	this.instance_5.setTransform(51.5,-204.6,1,1,30);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({rotation:105,x:153.7,y:-147.6},14).to({x:182.7,y:-10.7},18).wait(4));

	// animation
	this.instance_6 = new lib.lime1_mc();
	this.instance_6.setTransform(83.6,-196.4,1,1,30);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({rotation:0,x:213.1,y:-117.4},14).to({x:198.1,y:12.6},14).wait(8));

	// animation
	this.instance_7 = new lib.limes_mc();
	this.instance_7.setTransform(-208,187.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:8,y:-162.7},18).to({rotation:30,x:85.4,y:-187.4},5).to({_off:true},1).wait(36));

	// animation
	this.instance_8 = new lib.plate_mc();
	this.instance_8.setTransform(-203.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:12.5,y:-148},18).to({rotation:30,x:41.9,y:-178},5).to({rotation:0,x:-203.5,y:201.9},36).wait(1));

	// animation
	this.instance_9 = new lib.bottle1_mc();
	this.instance_9.setTransform(-49.2,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60));

	// animation
	this.instance_10 = new lib.bottle_mc();
	this.instance_10.setTransform(-49,59.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60));

	// animation
	this.instance_11 = new lib.mixer4_mc();
	this.instance_11.setTransform(192.4,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60));

	// animation
	this.instance_12 = new lib.mixer3_mc();
	this.instance_12.setTransform(190.4,42.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(60));

	// animation
	this.instance_13 = new lib.mixer2_mc();
	this.instance_13.setTransform(194.4,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60));

	// animation
	this.instance_14 = new lib.mixer1_mc();
	this.instance_14.setTransform(192.4,141.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-284.5,-142.1,615.7,406.5);
p.frameBounds = [rect, new cjs.Rectangle(-272.5,-142.1,603.6,406.3), new cjs.Rectangle(-260.5,-142.1,591.6,406.3), new cjs.Rectangle(-248.5,-142.1,579.6,406.3), new cjs.Rectangle(-236.5,-142.1,567.6,406.3), new cjs.Rectangle(-224.5,-142.1,555.6,406.3), new cjs.Rectangle(-212.5,-142.1,543.6,406.3), new cjs.Rectangle(-200.5,-142.1,531.6,406.3), new cjs.Rectangle(-188.5,-142.1,519.6,406.3), new cjs.Rectangle(-176.5,-142.1,507.6,406.3), new cjs.Rectangle(-164.5,-142.1,495.6,406.3), new cjs.Rectangle(-152.5,-142.1,483.6,406.3), new cjs.Rectangle(-140.5,-142.1,471.6,406.3), new cjs.Rectangle(-128.5,-142.1,459.6,406.3), new cjs.Rectangle(-116.5,-142.1,447.6,406.3), new cjs.Rectangle(-104.5,-142.4,435.6,406.6), new cjs.Rectangle(-92.5,-161.9,423.6,426), new cjs.Rectangle(-90.5,-181.3,421.6,445.5), new cjs.Rectangle(-90.5,-200.8,421.6,465), new cjs.Rectangle(-90.5,-204.8,421.6,469), new cjs.Rectangle(-90.5,-212.9,421.6,477), new cjs.Rectangle(-90.5,-220.6,421.6,484.7), new cjs.Rectangle(-90.5,-228.9,421.6,493), new cjs.Rectangle(-90.5,-241.4,421.6,505.6), new cjs.Rectangle(-90.5,-239.1,421.6,503.2), new cjs.Rectangle(-90.5,-236.4,421.6,500.6), new cjs.Rectangle(-90.5,-233.5,421.6,497.6), new cjs.Rectangle(-90.5,-230.3,421.6,494.5), new cjs.Rectangle(-90.5,-226.7,421.6,490.9), new cjs.Rectangle(-90.5,-222.9,421.6,487.1), new cjs.Rectangle(-90.5,-218.7,421.6,482.8), new cjs.Rectangle(-96.1,-214.2,427.3,478.3), new cjs.Rectangle(-103.1,-209.3,434.3,473.4), new cjs.Rectangle(-110,-204.1,441.2,468.2), new cjs.Rectangle(-117,-198.5,448.1,462.7), new cjs.Rectangle(-123.9,-192.8,455,456.9), new cjs.Rectangle(-130.7,-189.7,461.9,453.9), new cjs.Rectangle(-137.7,-187.2,468.9,451.4), new cjs.Rectangle(-144.5,-184.5,475.7,448.6), new cjs.Rectangle(-151.4,-176.8,482.5,440.9), new cjs.Rectangle(-158.2,-169.2,489.4,433.3), new cjs.Rectangle(-165,-161.5,496.2,425.7), new cjs.Rectangle(-171.8,-153.9,503,418.1), new cjs.Rectangle(-178.6,-146.3,509.7,410.5), new cjs.Rectangle(-185.3,-142.1,516.4,406.3), new cjs.Rectangle(-192,-142.1,523.2,406.3), new cjs.Rectangle(-198.8,-142.1,529.9,406.3), new cjs.Rectangle(-205.4,-142.1,536.6,406.3), new cjs.Rectangle(-212.1,-142.1,543.2,406.3), new cjs.Rectangle(-218.8,-142.1,550,406.3), new cjs.Rectangle(-225.4,-142.1,556.5,406.3), new cjs.Rectangle(-232,-142.1,563.2,406.3), new cjs.Rectangle(-238.7,-142.1,569.8,406.3), new cjs.Rectangle(-245.3,-142.1,576.4,406.3), new cjs.Rectangle(-251.8,-142.1,582.9,406.3), new cjs.Rectangle(-258.4,-142.1,589.5,406.3), new cjs.Rectangle(-264.9,-142.1,596,406.3), new cjs.Rectangle(-271.4,-142.1,602.5,406.3), new cjs.Rectangle(-277.9,-142.1,609.1,406.3), new cjs.Rectangle(-284.5,-142.1,615.7,406.5)];


(lib.animation1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mixer7_mc();
	this.instance.setTransform(220.8,230.9,1,1,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// animation
	this.instance_1 = new lib.mixer6_mc();
	this.instance_1.setTransform(192,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// animation
	this.instance_2 = new lib.limes_mc();
	this.instance_2.setTransform(-584.9,187.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({x:-208},14).wait(1));

	// animation
	this.instance_3 = new lib.plate_mc();
	this.instance_3.setTransform(-582.4,201.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({x:-203.5},14).wait(1));

	// animation
	this.instance_4 = new lib.bottle1_mc();
	this.instance_4.setTransform(-441.2,-63.5);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-206,alpha:1},9).to({x:-49.2},6).wait(15));

	// animation
	this.instance_5 = new lib.bottle_mc();
	this.instance_5.setTransform(-440.9,59.4);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-205.8,alpha:1},9).to({x:-49},6).wait(15));

	// animation
	this.instance_6 = new lib.mixer4_mc();
	this.instance_6.setTransform(192.4,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// animation
	this.instance_7 = new lib.mixer3_mc();
	this.instance_7.setTransform(190.4,42.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// animation
	this.instance_8 = new lib.mixer2_mc();
	this.instance_8.setTransform(194.4,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30));

	// animation
	this.instance_9 = new lib.mixer1_mc();
	this.instance_9.setTransform(192.4,141.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-482.4,-142.1,813.6,406.5);
p.frameBounds = [rect, new cjs.Rectangle(-456.3,-142.1,787.4,406.3), new cjs.Rectangle(-430.2,-142.1,761.3,406.3), new cjs.Rectangle(-404,-142.1,735.2,406.3), new cjs.Rectangle(-377.9,-142.1,709.1,406.3), new cjs.Rectangle(-351.8,-142.1,682.9,406.3), new cjs.Rectangle(-325.7,-142.1,656.8,406.3), new cjs.Rectangle(-299.5,-142.1,630.7,406.3), new cjs.Rectangle(-273.4,-142.1,604.6,406.3), new cjs.Rectangle(-247.3,-142.1,578.4,406.3), new cjs.Rectangle(-221.1,-142.1,552.3,406.3), new cjs.Rectangle(-195,-142.1,526.2,406.3), new cjs.Rectangle(-168.9,-142.1,500,406.3), new cjs.Rectangle(-142.7,-142.1,473.9,406.3), new cjs.Rectangle(-116.6,-142.1,447.8,406.3), new cjs.Rectangle(-663.4,-142.1,994.6,406.3), new cjs.Rectangle(-636.4,-142.1,967.5,406.3), new cjs.Rectangle(-609.3,-142.1,940.4,406.3), new cjs.Rectangle(-582.2,-142.1,913.4,406.3), new cjs.Rectangle(-555.2,-142.1,886.3,406.3), new cjs.Rectangle(-528.1,-142.1,859.2,406.3), new cjs.Rectangle(-501,-142.1,832.2,406.3), new cjs.Rectangle(-473.9,-142.1,805.1,406.3), new cjs.Rectangle(-446.9,-142.1,778,406.3), new cjs.Rectangle(-419.8,-142.1,751,406.3), new cjs.Rectangle(-392.7,-142.1,723.9,406.3), new cjs.Rectangle(-365.7,-142.1,696.8,406.3), new cjs.Rectangle(-338.6,-142.1,669.8,406.3), new cjs.Rectangle(-311.5,-142.1,642.7,406.3), new cjs.Rectangle(-284.5,-142.1,615.7,406.5)];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// animation
	this.instance = new lib.title_mc();
	this.instance.setTransform(0.5,350.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:-49.5},15).to({y:0.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,210,520,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-260,183.4,520,280), new cjs.Rectangle(-260,156.7,520,280), new cjs.Rectangle(-260,130,520,280), new cjs.Rectangle(-260,103.4,520,280), new cjs.Rectangle(-260,76.7,520,280), new cjs.Rectangle(-260,50,520,280), new cjs.Rectangle(-260,23.4,520,280), new cjs.Rectangle(-260,-3.3,520,280), new cjs.Rectangle(-260,-30,520,280), new cjs.Rectangle(-260,-56.6,520,280), new cjs.Rectangle(-260,-83.3,520,280), new cjs.Rectangle(-260,-110,520,280), new cjs.Rectangle(-260,-136.6,520,280), new cjs.Rectangle(-260,-163.3,520,280), new cjs.Rectangle(-260,-190,520,280), new cjs.Rectangle(-260,-180,520,280), new cjs.Rectangle(-260,-170,520,280), new cjs.Rectangle(-260,-160,520,280), new cjs.Rectangle(-260,-150,520,280), new cjs.Rectangle(-260,-140,520,280)];


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


(lib.animation_category_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// animation
	this.instance = new lib.decor_category_5_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,alpha:1},4).to({scaleX:1,scaleY:1,alpha:0.012},5).wait(1));

	// graph
	this.instance_1 = new lib.body_category_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, new cjs.Rectangle(-71.2,-71.2,142.5,142.5), new cjs.Rectangle(-72.4,-72.4,145,145), new cjs.Rectangle(-73.7,-73.7,147.5,147.5), new cjs.Rectangle(-75,-75,150,150), new cjs.Rectangle(-73.9,-73.9,148,148), new cjs.Rectangle(-72.9,-72.9,146,146), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-70.9,-70.9,142,142), new cjs.Rectangle(-70,-70,140,140)];


(lib.animation_category_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// animation
	this.instance = new lib.decor_category_4_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,alpha:1},4).to({scaleX:1,scaleY:1,alpha:0.012},5).wait(1));

	// graph
	this.instance_1 = new lib.body_category_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, new cjs.Rectangle(-71.2,-71.2,142.5,142.5), new cjs.Rectangle(-72.4,-72.4,145,145), new cjs.Rectangle(-73.7,-73.7,147.5,147.5), new cjs.Rectangle(-75,-75,150,150), new cjs.Rectangle(-73.9,-73.9,148,148), new cjs.Rectangle(-72.9,-72.9,146,146), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-70.9,-70.9,142,142), new cjs.Rectangle(-70,-70,140,140)];


(lib.animation_category_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// animation
	this.instance = new lib.decor_category_3_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,alpha:1},4).to({scaleX:1,scaleY:1,alpha:0.012},5).wait(1));

	// graph
	this.instance_1 = new lib.body_category_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, new cjs.Rectangle(-71.2,-71.2,142.5,142.5), new cjs.Rectangle(-72.4,-72.4,145,145), new cjs.Rectangle(-73.7,-73.7,147.5,147.5), new cjs.Rectangle(-75,-75,150,150), new cjs.Rectangle(-73.9,-73.9,148,148), new cjs.Rectangle(-72.9,-72.9,146,146), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-70.9,-70.9,142,142), new cjs.Rectangle(-70,-70,140,140)];


(lib.animation_category_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// animation
	this.instance = new lib.decor_category_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,alpha:1},4).to({scaleX:1,scaleY:1,alpha:0.012},5).wait(1));

	// graph
	this.instance_1 = new lib.body_category_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, new cjs.Rectangle(-71.2,-71.2,142.5,142.5), new cjs.Rectangle(-72.4,-72.4,145,145), new cjs.Rectangle(-73.7,-73.7,147.5,147.5), new cjs.Rectangle(-75,-75,150,150), new cjs.Rectangle(-73.9,-73.9,148,148), new cjs.Rectangle(-72.9,-72.9,146,146), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-70.9,-70.9,142,142), new cjs.Rectangle(-70,-70,140,140)];


(lib.animation_category_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// animation
	this.instance = new lib.decor_category_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,alpha:1},4).to({scaleX:1,scaleY:1,alpha:0.012},5).wait(1));

	// graph
	this.instance_1 = new lib.body_category_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, new cjs.Rectangle(-71.2,-71.2,142.5,142.5), new cjs.Rectangle(-72.4,-72.4,145,145), new cjs.Rectangle(-73.7,-73.7,147.5,147.5), new cjs.Rectangle(-75,-75,150,150), new cjs.Rectangle(-73.9,-73.9,148,148), new cjs.Rectangle(-72.9,-72.9,146,146), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-70.9,-70.9,142,142), new cjs.Rectangle(-70,-70,140,140)];


(lib.anim_hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_2_main_mc();
	this.instance.setTransform(7,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:11,y:10},59).to({x:-3,y:16},60).to({x:7,y:13},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172,-287,343,573.5);
p.frameBounds = [rect, new cjs.Rectangle(-171.9,-287,343,573.5), rect=new cjs.Rectangle(-171.8,-287.1,343,573.5), rect, new cjs.Rectangle(-171.7,-287.2,343,573.5), new cjs.Rectangle(-171.6,-287.2,343,573.5), new cjs.Rectangle(-171.6,-287.3,343,573.5), new cjs.Rectangle(-171.5,-287.3,343,573.5), rect=new cjs.Rectangle(-171.4,-287.4,343,573.5), rect, new cjs.Rectangle(-171.3,-287.5,343,573.5), new cjs.Rectangle(-171.2,-287.5,343,573.5), new cjs.Rectangle(-171.2,-287.6,343,573.5), new cjs.Rectangle(-171.1,-287.6,343,573.5), rect=new cjs.Rectangle(-171,-287.7,343,573.5), rect, new cjs.Rectangle(-170.9,-287.8,343,573.5), new cjs.Rectangle(-170.8,-287.8,343,573.5), new cjs.Rectangle(-170.8,-287.9,343,573.5), new cjs.Rectangle(-170.7,-287.9,343,573.5), rect=new cjs.Rectangle(-170.6,-288,343,573.5), rect, new cjs.Rectangle(-170.5,-288.1,343,573.5), new cjs.Rectangle(-170.4,-288.1,343,573.5), rect=new cjs.Rectangle(-170.3,-288.2,343,573.5), rect, new cjs.Rectangle(-170.2,-288.3,343,573.5), new cjs.Rectangle(-170.1,-288.3,343,573.5), new cjs.Rectangle(-170.1,-288.4,343,573.5), new cjs.Rectangle(-170,-288.4,343,573.5), new cjs.Rectangle(-169.9,-288.5,343,573.5), new cjs.Rectangle(-169.9,-288.6,343,573.5), new cjs.Rectangle(-169.8,-288.6,343,573.5), rect=new cjs.Rectangle(-169.7,-288.7,343,573.5), rect, new cjs.Rectangle(-169.6,-288.8,343,573.5), new cjs.Rectangle(-169.5,-288.8,343,573.5), new cjs.Rectangle(-169.5,-288.9,343,573.5), new cjs.Rectangle(-169.4,-288.9,343,573.5), rect=new cjs.Rectangle(-169.3,-289,343,573.5), rect, new cjs.Rectangle(-169.2,-289.1,343,573.5), new cjs.Rectangle(-169.1,-289.1,343,573.5), new cjs.Rectangle(-169.1,-289.2,343,573.5), new cjs.Rectangle(-169,-289.2,343,573.5), rect=new cjs.Rectangle(-168.9,-289.3,343,573.5), rect, new cjs.Rectangle(-168.8,-289.4,343,573.5), new cjs.Rectangle(-168.7,-289.4,343,573.5), new cjs.Rectangle(-168.7,-289.5,343,573.5), new cjs.Rectangle(-168.6,-289.5,343,573.5), new cjs.Rectangle(-168.5,-289.6,343,573.5), new cjs.Rectangle(-168.4,-289.6,343,573.5), new cjs.Rectangle(-168.4,-289.7,343,573.5), new cjs.Rectangle(-168.3,-289.7,343,573.5), rect=new cjs.Rectangle(-168.2,-289.8,343,573.5), rect, new cjs.Rectangle(-168.1,-289.9,343,573.5), new cjs.Rectangle(-168,-289.9,343,573.5), new cjs.Rectangle(-168,-290,343,573.5), new cjs.Rectangle(-168.2,-289.9,343,573.5), new cjs.Rectangle(-168.4,-289.8,343,573.5), new cjs.Rectangle(-168.7,-289.7,343,573.5), new cjs.Rectangle(-168.9,-289.6,343,573.5), new cjs.Rectangle(-169.1,-289.5,343,573.5), new cjs.Rectangle(-169.4,-289.4,343,573.5), new cjs.Rectangle(-169.6,-289.3,343,573.5), new cjs.Rectangle(-169.8,-289.2,343,573.5), new cjs.Rectangle(-170.1,-289.1,343,573.5), new cjs.Rectangle(-170.3,-289,343,573.5), new cjs.Rectangle(-170.5,-288.9,343,573.5), new cjs.Rectangle(-170.8,-288.8,343,573.5), new cjs.Rectangle(-171,-288.7,343,573.5), new cjs.Rectangle(-171.2,-288.6,343,573.5), new cjs.Rectangle(-171.5,-288.5,343,573.5), new cjs.Rectangle(-171.7,-288.4,343,573.5), new cjs.Rectangle(-171.9,-288.3,343,573.5), new cjs.Rectangle(-172.2,-288.2,343,573.5), new cjs.Rectangle(-172.4,-288.1,343,573.5), new cjs.Rectangle(-172.6,-288,343,573.5), new cjs.Rectangle(-172.9,-287.9,343,573.5), new cjs.Rectangle(-173.1,-287.8,343,573.5), new cjs.Rectangle(-173.3,-287.7,343,573.5), new cjs.Rectangle(-173.6,-287.6,343,573.5), new cjs.Rectangle(-173.8,-287.5,343,573.5), new cjs.Rectangle(-174,-287.4,343,573.5), new cjs.Rectangle(-174.3,-287.3,343,573.5), new cjs.Rectangle(-174.5,-287.2,343,573.5), new cjs.Rectangle(-174.7,-287.1,343,573.5), new cjs.Rectangle(-175,-287,343,573.5), new cjs.Rectangle(-175.2,-286.9,343,573.5), new cjs.Rectangle(-175.4,-286.8,343,573.5), new cjs.Rectangle(-175.7,-286.7,343,573.5), new cjs.Rectangle(-175.9,-286.6,343,573.5), new cjs.Rectangle(-176.1,-286.5,343,573.5), new cjs.Rectangle(-176.4,-286.4,343,573.5), new cjs.Rectangle(-176.6,-286.3,343,573.5), new cjs.Rectangle(-176.8,-286.2,343,573.5), new cjs.Rectangle(-177.1,-286.1,343,573.5), new cjs.Rectangle(-177.3,-286,343,573.5), new cjs.Rectangle(-177.5,-285.9,343,573.5), new cjs.Rectangle(-177.8,-285.8,343,573.5), new cjs.Rectangle(-178,-285.7,343,573.5), new cjs.Rectangle(-178.2,-285.6,343,573.5), new cjs.Rectangle(-178.5,-285.5,343,573.5), new cjs.Rectangle(-178.7,-285.4,343,573.5), new cjs.Rectangle(-178.9,-285.3,343,573.5), new cjs.Rectangle(-179.2,-285.2,343,573.5), new cjs.Rectangle(-179.4,-285.1,343,573.5), new cjs.Rectangle(-179.6,-285,343,573.5), new cjs.Rectangle(-179.9,-284.9,343,573.5), new cjs.Rectangle(-180.1,-284.8,343,573.5), new cjs.Rectangle(-180.3,-284.7,343,573.5), new cjs.Rectangle(-180.6,-284.6,343,573.5), new cjs.Rectangle(-180.8,-284.5,343,573.5), new cjs.Rectangle(-181,-284.4,343,573.5), new cjs.Rectangle(-181.3,-284.3,343,573.5), new cjs.Rectangle(-181.5,-284.2,343,573.5), new cjs.Rectangle(-181.7,-284.1,343,573.5), new cjs.Rectangle(-182,-284,343,573.5), new cjs.Rectangle(-181.8,-284,343,573.5), new cjs.Rectangle(-181.6,-284.1,343,573.5), new cjs.Rectangle(-181.5,-284.1,343,573.5), new cjs.Rectangle(-181.3,-284.2,343,573.5), new cjs.Rectangle(-181.1,-284.2,343,573.5), new cjs.Rectangle(-181,-284.3,343,573.5), new cjs.Rectangle(-180.8,-284.3,343,573.5), new cjs.Rectangle(-180.6,-284.4,343,573.5), new cjs.Rectangle(-180.5,-284.4,343,573.5), new cjs.Rectangle(-180.3,-284.5,343,573.5), new cjs.Rectangle(-180.1,-284.5,343,573.5), new cjs.Rectangle(-180,-284.6,343,573.5), new cjs.Rectangle(-179.8,-284.6,343,573.5), new cjs.Rectangle(-179.6,-284.7,343,573.5), new cjs.Rectangle(-179.5,-284.7,343,573.5), new cjs.Rectangle(-179.3,-284.8,343,573.5), new cjs.Rectangle(-179.1,-284.8,343,573.5), new cjs.Rectangle(-179,-284.9,343,573.5), new cjs.Rectangle(-178.8,-284.9,343,573.5), new cjs.Rectangle(-178.6,-285,343,573.5), new cjs.Rectangle(-178.5,-285,343,573.5), new cjs.Rectangle(-178.3,-285.1,343,573.5), new cjs.Rectangle(-178.1,-285.1,343,573.5), new cjs.Rectangle(-178,-285.2,343,573.5), new cjs.Rectangle(-177.8,-285.2,343,573.5), new cjs.Rectangle(-177.6,-285.3,343,573.5), new cjs.Rectangle(-177.5,-285.3,343,573.5), new cjs.Rectangle(-177.3,-285.4,343,573.5), new cjs.Rectangle(-177.1,-285.4,343,573.5), new cjs.Rectangle(-177,-285.5,343,573.5), new cjs.Rectangle(-176.8,-285.5,343,573.5), new cjs.Rectangle(-176.6,-285.6,343,573.5), new cjs.Rectangle(-176.5,-285.6,343,573.5), new cjs.Rectangle(-176.3,-285.7,343,573.5), new cjs.Rectangle(-176.1,-285.7,343,573.5), new cjs.Rectangle(-176,-285.8,343,573.5), new cjs.Rectangle(-175.8,-285.8,343,573.5), new cjs.Rectangle(-175.6,-285.9,343,573.5), new cjs.Rectangle(-175.5,-285.9,343,573.5), new cjs.Rectangle(-175.3,-286,343,573.5), new cjs.Rectangle(-175.1,-286,343,573.5), new cjs.Rectangle(-175,-286.1,343,573.5), new cjs.Rectangle(-174.8,-286.1,343,573.5), new cjs.Rectangle(-174.6,-286.2,343,573.5), new cjs.Rectangle(-174.5,-286.2,343,573.5), new cjs.Rectangle(-174.3,-286.3,343,573.5), new cjs.Rectangle(-174.1,-286.3,343,573.5), new cjs.Rectangle(-174,-286.4,343,573.5), new cjs.Rectangle(-173.8,-286.4,343,573.5), new cjs.Rectangle(-173.6,-286.5,343,573.5), new cjs.Rectangle(-173.5,-286.5,343,573.5), new cjs.Rectangle(-173.3,-286.6,343,573.5), new cjs.Rectangle(-173.1,-286.6,343,573.5), new cjs.Rectangle(-173,-286.7,343,573.5), new cjs.Rectangle(-172.8,-286.7,343,573.5), new cjs.Rectangle(-172.6,-286.8,343,573.5), new cjs.Rectangle(-172.5,-286.8,343,573.5), new cjs.Rectangle(-172.3,-286.9,343,573.5), new cjs.Rectangle(-172.1,-286.9,343,573.5), new cjs.Rectangle(-172,-287,343,573.5)];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-140,520,280);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:39,end:84});

	// timeline functions:
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// title
	this.instance = new lib.curtain_4_mc();
	this.instance.setTransform(600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:400},11).to({y:300},4).wait(20).to({y:200},4).to({y:900},11).wait(21));

	// curtain_1
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,-600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:0},19).wait(45).to({y:-600},20).wait(1));

	// curtain_2
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0},19).wait(45).to({y:600},20).wait(1));

	// bg
	this.instance_3 = new lib.curtain_3_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(44).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-600,1200,1800);
p.frameBounds = [rect, new cjs.Rectangle(0,-568.4,1200,1736.8), new cjs.Rectangle(0,-536.8,1200,1673.7), new cjs.Rectangle(0,-505.2,1200,1610.5), new cjs.Rectangle(0,-473.7,1200,1547.4), new cjs.Rectangle(0,-442.1,1200,1484.2), new cjs.Rectangle(0,-440,1200,1450.5), new cjs.Rectangle(0,-440,1200,1419), new cjs.Rectangle(0,-440,1200,1387.4), new cjs.Rectangle(0,-440,1200,1355.8), new cjs.Rectangle(0,-440,1200,1324.2), new cjs.Rectangle(0,-440,1200,1292.7), new cjs.Rectangle(0,-440,1200,1261.1), new cjs.Rectangle(0,-440,1200,1229.5), new cjs.Rectangle(0,-440,1200,1197.9), new cjs.Rectangle(0,-376.3,1200,1102.7), new cjs.Rectangle(0,-312.7,1200,1007.5), new cjs.Rectangle(0,-249.1,1200,912.3), new cjs.Rectangle(0,-185.4,1200,817.1), new cjs.Rectangle(0,-121.8,1200,721.8), new cjs.Rectangle(0,-58.2,1200,658.2), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,0,1200,658.2), new cjs.Rectangle(0,0,1200,721.8), new cjs.Rectangle(0,0,1200,785.5), new cjs.Rectangle(0,0,1200,849.1), new cjs.Rectangle(0,0,1200,912.7), new cjs.Rectangle(0,0,1200,976.4), new cjs.Rectangle(0,0,1200,1040), new cjs.Rectangle(0,-30,1200,1070), new cjs.Rectangle(0,-60,1200,1100), new cjs.Rectangle(0,-90,1200,1130), new cjs.Rectangle(0,-120,1200,1160), new cjs.Rectangle(0,-150,1200,1190), new cjs.Rectangle(0,-180,1200,1220), new cjs.Rectangle(0,-210,1200,1250), new cjs.Rectangle(0,-240,1200,1280), new cjs.Rectangle(0,-270,1200,1310), new cjs.Rectangle(0,-300,1200,1340), new cjs.Rectangle(0,-330,1200,1370), new cjs.Rectangle(0,-360,1200,1400), new cjs.Rectangle(0,-390,1200,1430), new cjs.Rectangle(0,-420,1200,1460), new cjs.Rectangle(0,-450,1200,1500), new cjs.Rectangle(0,-480,1200,1560), new cjs.Rectangle(0,-510,1200,1620), new cjs.Rectangle(0,-540,1200,1680), new cjs.Rectangle(0,-570,1200,1740), new cjs.Rectangle(0,-600,1200,1800)];


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
p.nominalBounds = rect = new cjs.Rectangle(-190,-122,380,241);
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
	this.instance.setTransform(-200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-348.7,106.8,302.5,181.5), new cjs.Rectangle(-345,97.1,309.9,186), new cjs.Rectangle(-338.9,81.1,322.2,193.4), new cjs.Rectangle(-330.2,58.6,339.5,203.7), new cjs.Rectangle(-319,29.7,361.7,217.1), new cjs.Rectangle(-305.5,-5.5,388.9,233.4), new cjs.Rectangle(-289.4,-47.2,421,252.6), new cjs.Rectangle(-270.9,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-24.2,-24.2,48.6,48.6), new cjs.Rectangle(-23.9,-23.9,47.8,47.8), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.8,-22.8,45.7,45.7), new cjs.Rectangle(-22.5,-22.5,45,45), new cjs.Rectangle(-22.1,-22.1,44.3,44.3), new cjs.Rectangle(-21.7,-21.7,43.6,43.6), new cjs.Rectangle(-21.4,-21.4,42.8,42.8), new cjs.Rectangle(-21,-21,42.2,42.2), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.3,-24.3,48.7,48.7), new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-25,-25,50,50)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({scaleX:0.95},20).to({scaleX:1,scaleY:0.95},20).to({scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,195,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,190,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,740);
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


(lib.throw_out_trash_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.throw_out_trash_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new10_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new22_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new45_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new36_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new4_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new43_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new6_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new28_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new30_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new14_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new49_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.semicircular_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.semicircular_arrow_checks_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.semicircular_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.round_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.round_arrow_checks_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.round_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,50.3,861.6,566.7);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,0.857,0.857,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.785,0.786,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.9,-55,113.9,110);
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


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.785,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.9,-55,113.9,110);
p.frameBounds = [rect];


(lib.location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_7_mc();

	this.instance_1 = new lib.location_2_7_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgbzApZQiEAAheheQhdhdAAiFMAAAhIxQAAiFBdheQBehdCEAAMA3nAAAQCEAABeBdQBdBeAACFMAAABIxQAACFhdBdQheBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-264.9,420,530);
p.frameBounds = [rect, rect, new cjs.Rectangle(-210,-264.9,420,761.3)];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_6_mc();

	this.instance_1 = new lib.location_2_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgbzApZQiEAAheheQhdhdAAiFMAAAhIxQAAiFBdheQBehdCEAAMA3nAAAQCEAABeBdQBdBeAACFMAAABIxQAACFhdBdQheBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-264.9,420,530);
p.frameBounds = [rect, rect, new cjs.Rectangle(-210,-264.9,420,761.3)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_5_mc();

	this.instance_1 = new lib.location_2_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgbzApZQiEAAheheQhdhdAAiFMAAAhIxQAAiFBdheQBehdCEAAMA3nAAAQCEAABeBdQBdBeAACFMAAABIxQAACFhdBdQheBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-264.9,420,530);
p.frameBounds = [rect, rect, new cjs.Rectangle(-210,-264.9,420,761.3)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_4_mc();

	this.instance_1 = new lib.location_2_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgbzApZQiEAAheheQhdhdAAiFMAAAhIxQAAiFBdheQBehdCEAAMA3nAAAQCEAABeBdQBdBeAACFMAAABIxQAACFhdBdQheBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-264.9,420,530);
p.frameBounds = [rect, rect, new cjs.Rectangle(-210,-264.9,420,761.3)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_3_mc();

	this.instance_1 = new lib.location_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgbzApZQiEAAheheQhdhdAAiFMAAAhIxQAAiFBdheQBehdCEAAMA3nAAAQCEAABeBdQBdBeAACFMAAABIxQAACFhdBdQheBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-264.9,420,530);
p.frameBounds = [rect, rect, new cjs.Rectangle(-210,-264.9,420,761.3)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_2_mc();

	this.instance_1 = new lib.location_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgbzApZQiEAAheheQhdhdAAiFMAAAhIxQAAiFBdheQBehdCEAAMA3nAAAQCEAABeBdQBdBeAACFMAAABIxQAACFhdBdQheBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-264.9,420,530);
p.frameBounds = [rect, rect, new cjs.Rectangle(-210,-264.9,420,761.3)];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new26_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new9_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new9_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new39_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new39_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new3_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new37_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new10_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new17_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new22_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new2_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new2_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqMgIAA4/IJVAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-80,60,160);
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


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.frame_locations_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":129});

	// location_7
	this.location_7 = new lib.location_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({y:600},0).wait(28).to({y:-50},15).to({y:0},5).wait(81));

	// decor
	this.instance = new lib.hero2_float3_img();
	this.instance.setTransform(262,-148);

	this.instance_1 = new lib.hero2_float1_img();
	this.instance_1.setTransform(-613,-197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-613,-264.9,1194,530);
p.frameBounds = [rect, rect=new cjs.Rectangle(-613,-197,1194,1062), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-613,-197,1194,1018.7), new cjs.Rectangle(-613,-197,1194,975.4), new cjs.Rectangle(-613,-197,1194,932), new cjs.Rectangle(-613,-197,1194,888.7), new cjs.Rectangle(-613,-197,1194,845.4), new cjs.Rectangle(-613,-197,1194,802), new cjs.Rectangle(-613,-197,1194,758.7), new cjs.Rectangle(-613,-197,1194,715.4), new cjs.Rectangle(-613,-197,1194,672), new cjs.Rectangle(-613,-197,1194,628.7), new cjs.Rectangle(-613,-197,1194,585.4), new cjs.Rectangle(-613,-197,1194,542), new cjs.Rectangle(-613,-228.3,1194,530), new cjs.Rectangle(-613,-271.6,1194,530), new cjs.Rectangle(-613,-314.9,1194,550), new cjs.Rectangle(-613,-304.9,1194,540), new cjs.Rectangle(-613,-294.9,1194,530), new cjs.Rectangle(-613,-284.9,1194,530), new cjs.Rectangle(-613,-274.9,1194,530), rect=new cjs.Rectangle(-613,-264.9,1194,530), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":129});

	// location_6
	this.location_6 = new lib.location_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:600},0).wait(28).to({y:-50},15).to({y:0},5).wait(81));

	// decor
	this.instance = new lib.hero2_float4_img();
	this.instance.setTransform(-592,-47);

	this.instance_1 = new lib.hero2_float5_img();
	this.instance_1.setTransform(277,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-592,-264.9,1206,534);
p.frameBounds = [rect, rect=new cjs.Rectangle(-592,-250,1206,1115), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-592,-250,1206,1071.7), new cjs.Rectangle(-592,-250,1206,1028.4), new cjs.Rectangle(-592,-250,1206,985), new cjs.Rectangle(-592,-250,1206,941.7), new cjs.Rectangle(-592,-250,1206,898.4), new cjs.Rectangle(-592,-250,1206,855), new cjs.Rectangle(-592,-250,1206,811.7), new cjs.Rectangle(-592,-250,1206,768.4), new cjs.Rectangle(-592,-250,1206,725), new cjs.Rectangle(-592,-250,1206,681.7), new cjs.Rectangle(-592,-250,1206,638.4), new cjs.Rectangle(-592,-250,1206,595), new cjs.Rectangle(-592,-250,1206,551.7), new cjs.Rectangle(-592,-271.6,1206,540.6), new cjs.Rectangle(-592,-314.9,1206,584), new cjs.Rectangle(-592,-304.9,1206,574), new cjs.Rectangle(-592,-294.9,1206,564), new cjs.Rectangle(-592,-284.9,1206,554), new cjs.Rectangle(-592,-274.9,1206,544), rect=new cjs.Rectangle(-592,-264.9,1206,534), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":129});

	// location_5
	this.location_5 = new lib.location_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:600},0).wait(28).to({y:-50},15).to({y:0},5).wait(81));

	// decor
	this.instance = new lib.pool_decor5_2_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-600,-300,1200,1165), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-600,-300,1200,1121.7), new cjs.Rectangle(-600,-300,1200,1078.4), new cjs.Rectangle(-600,-300,1200,1035), new cjs.Rectangle(-600,-300,1200,991.7), new cjs.Rectangle(-600,-300,1200,948.4), new cjs.Rectangle(-600,-300,1200,905), new cjs.Rectangle(-600,-300,1200,861.7), new cjs.Rectangle(-600,-300,1200,818.4), new cjs.Rectangle(-600,-300,1200,775), new cjs.Rectangle(-600,-300,1200,731.7), new cjs.Rectangle(-600,-300,1200,688.4), new cjs.Rectangle(-600,-300,1200,645), new cjs.Rectangle(-600,-300,1200,601.7), new cjs.Rectangle(-600,-300,1200,600), new cjs.Rectangle(-600,-314.9,1200,615), new cjs.Rectangle(-600,-304.9,1200,605), rect=new cjs.Rectangle(-600,-300,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":129});

	// location_4
	this.location_4 = new lib.location_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:600},0).wait(28).to({y:-50},15).to({y:0},5).wait(81));

	// decor
	this.instance = new lib.hero1_float2_img();
	this.instance.setTransform(-582,-208);

	this.instance_1 = new lib.hero1_float4_img();
	this.instance_1.setTransform(581,-154,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-582,-264.9,1163,544);
p.frameBounds = [rect, rect=new cjs.Rectangle(-582,-208,1163,1073), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-582,-208,1163,1029.7), new cjs.Rectangle(-582,-208,1163,986.4), new cjs.Rectangle(-582,-208,1163,943), new cjs.Rectangle(-582,-208,1163,899.7), new cjs.Rectangle(-582,-208,1163,856.4), new cjs.Rectangle(-582,-208,1163,813), new cjs.Rectangle(-582,-208,1163,769.7), new cjs.Rectangle(-582,-208,1163,726.4), new cjs.Rectangle(-582,-208,1163,683), new cjs.Rectangle(-582,-208,1163,639.7), new cjs.Rectangle(-582,-208,1163,596.4), new cjs.Rectangle(-582,-208,1163,553), new cjs.Rectangle(-582,-228.3,1163,530), new cjs.Rectangle(-582,-271.6,1163,550.6), new cjs.Rectangle(-582,-314.9,1163,594), new cjs.Rectangle(-582,-304.9,1163,584), new cjs.Rectangle(-582,-294.9,1163,574), new cjs.Rectangle(-582,-284.9,1163,564), new cjs.Rectangle(-582,-274.9,1163,554), rect=new cjs.Rectangle(-582,-264.9,1163,544), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":129});

	// location_3
	this.location_3 = new lib.location_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:600},0).wait(28).to({y:-50},15).to({y:0},5).wait(81));

	// decor
	this.instance = new lib.hero1_float5_img();
	this.instance.setTransform(581,-212,1,1,0,0,180);

	this.instance_1 = new lib.hero1_float3_img();
	this.instance_1.setTransform(-582,-83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-582,-264.9,1163,530);
p.frameBounds = [rect, rect=new cjs.Rectangle(-582,-212,1163,1077), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-582,-212,1163,1033.7), new cjs.Rectangle(-582,-212,1163,990.4), new cjs.Rectangle(-582,-212,1163,947), new cjs.Rectangle(-582,-212,1163,903.7), new cjs.Rectangle(-582,-212,1163,860.4), new cjs.Rectangle(-582,-212,1163,817), new cjs.Rectangle(-582,-212,1163,773.7), new cjs.Rectangle(-582,-212,1163,730.4), new cjs.Rectangle(-582,-212,1163,687), new cjs.Rectangle(-582,-212,1163,643.7), new cjs.Rectangle(-582,-212,1163,600.4), new cjs.Rectangle(-582,-212,1163,557), new cjs.Rectangle(-582,-228.3,1163,530), new cjs.Rectangle(-582,-271.6,1163,530), new cjs.Rectangle(-582,-314.9,1163,538), new cjs.Rectangle(-582,-304.9,1163,530), new cjs.Rectangle(-582,-294.9,1163,530), new cjs.Rectangle(-582,-284.9,1163,530), new cjs.Rectangle(-582,-274.9,1163,530), rect=new cjs.Rectangle(-582,-264.9,1163,530), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":129});

	// location_2
	this.location_2 = new lib.location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:600},0).wait(28).to({y:-50},15).to({y:0},5).wait(81));

	// decor
	this.instance = new lib.hero1_float2_img();
	this.instance.setTransform(265,-136);

	this.instance_1 = new lib.hero1_float1_img();
	this.instance_1.setTransform(-676,-273);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-676,-273,1265,538);
p.frameBounds = [rect, rect=new cjs.Rectangle(-676,-273,1265,1138), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-676,-273,1265,1094.7), new cjs.Rectangle(-676,-273,1265,1051.4), new cjs.Rectangle(-676,-273,1265,1008), new cjs.Rectangle(-676,-273,1265,964.7), new cjs.Rectangle(-676,-273,1265,921.4), new cjs.Rectangle(-676,-273,1265,878), new cjs.Rectangle(-676,-273,1265,834.7), new cjs.Rectangle(-676,-273,1265,791.4), new cjs.Rectangle(-676,-273,1265,748), new cjs.Rectangle(-676,-273,1265,704.7), new cjs.Rectangle(-676,-273,1265,661.4), new cjs.Rectangle(-676,-273,1265,618), new cjs.Rectangle(-676,-273,1265,574.7), new cjs.Rectangle(-676,-273,1265,531.4), new cjs.Rectangle(-676,-314.9,1265,530), new cjs.Rectangle(-676,-304.9,1265,530), new cjs.Rectangle(-676,-294.9,1265,530), new cjs.Rectangle(-676,-284.9,1265,530), new cjs.Rectangle(-676,-274.9,1265,530), rect=new cjs.Rectangle(-676,-273,1265,538), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":129});

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-170,160,1,1,-15);
	this.pointer_1.alpha = 0.012;
	this.pointer_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(49).to({_off:false},0).to({alpha:1},5).wait(10).to({alpha:0.012},5).to({_off:true},1).wait(60));

	// location_1
	this.location_1 = new lib.location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:600},0).wait(28).to({y:-50},15).to({y:0},5).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-264.9,420,530);
p.frameBounds = [rect, rect=new cjs.Rectangle(-210,335.1,420,530), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,291.7,420,530), new cjs.Rectangle(-210,248.4,420,530), new cjs.Rectangle(-210,205.1,420,530), new cjs.Rectangle(-210,161.7,420,530), new cjs.Rectangle(-210,118.4,420,530), new cjs.Rectangle(-210,75.1,420,530), new cjs.Rectangle(-210,31.7,420,529.9), new cjs.Rectangle(-210,-11.6,420,530), new cjs.Rectangle(-210,-54.9,420,530), new cjs.Rectangle(-210,-98.3,420,529.9), new cjs.Rectangle(-210,-141.6,420,530), new cjs.Rectangle(-210,-184.9,420,530), new cjs.Rectangle(-210,-228.3,420,530), new cjs.Rectangle(-210,-271.6,420,530), new cjs.Rectangle(-210,-314.9,420,530), new cjs.Rectangle(-210,-304.9,420,530), new cjs.Rectangle(-210,-294.9,420,530), new cjs.Rectangle(-210,-284.9,420,530), new cjs.Rectangle(-210,-274.9,420,530), new cjs.Rectangle(-293.4,-264.9,503.5,530), rect=new cjs.Rectangle(-293.2,-264.9,503.3,530), rect, rect, rect, rect=new cjs.Rectangle(-293.4,-264.9,503.5,530), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-293.2,-264.9,503.3,530), rect, rect, rect, new cjs.Rectangle(-293.4,-264.9,503.5,530), rect=new cjs.Rectangle(-210,-264.9,420,530), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyebrows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new13_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new12_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.eyebrows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new14_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new4_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.eyebrows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new4_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new13_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.eyebrows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new6_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new3_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.eyebrows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new2_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new6_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.eyebrows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new3_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new16_img();
	this.instance.setTransform(-6,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGLtIAA3ZIGNAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-90,60,180);
p.frameBounds = [rect];


(lib.cocktail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmwLTIAA2lIKFAAIAAGNIDcAAIAAQYgAAIFQQADACAAAJQAAAGgFAPQgFAPAAAIQAAAKAWARQAXASARAAQAgAAANgqQAKgggCgzQgCgvAIg8IAGgfQg4hIgfgnQgggmgigkQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQgGA2AXAiQAUAhAcAXQghABg+gCQhGADgjAAIgBAFIgCAHQAAAcBGAFQAlADAwgDQAVAAAQANIAWATQgbAEhAAOIiCAbQgDARAVAOQAJAGAaAKIgBAHQAAALANAIQALAHANAAIBPgFQAJAAADADg");
	mask.setTransform(2.9,3.4);

	// graph
	this.instance = new lib.cocktail_1_mc();
	this.instance.setTransform(0,0,0.332,0.332);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-62.3,52.5,124.7);
p.frameBounds = [rect];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-255,-225);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-255,-225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_0}]},1).to({state:[]},2).wait(1));

	// options
	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(340,-145);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(-250,-140);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(160,-145);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(-160,-145);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(250,-140);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-340,-145);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(340,-170);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(260,-175);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(180,-170);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(-180,-170);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(-260,-175);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(-340,-170);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(-320,-150);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(320,-150);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(190,-150);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(-190,-150);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(260,-150);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(-260,-150);

	this.eyebrows_6 = new lib.eyebrows_6_2_mc();
	this.eyebrows_6.setTransform(340,-180);

	this.eyebrows_5 = new lib.eyebrows_5_2_mc();
	this.eyebrows_5.setTransform(260,-175);

	this.eyebrows_4 = new lib.eyebrows_4_2_mc();
	this.eyebrows_4.setTransform(180,-180);

	this.eyebrows_3 = new lib.eyebrows_3_2_mc();
	this.eyebrows_3.setTransform(-180,-180);

	this.eyebrows_2 = new lib.eyebrows_2_2_mc();
	this.eyebrows_2.setTransform(-260,-175);

	this.eyebrows_1 = new lib.eyebrows_1_2_mc();
	this.eyebrows_1.setTransform(-340,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_6}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_1}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-243,800,153);
p.frameBounds = [rect, new cjs.Rectangle(-370,-255,740,165), new cjs.Rectangle(-395,-243,790,153), new cjs.Rectangle(-335,-243,670,153), new cjs.Rectangle(-370,-270,740,185)];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-255,-225);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-255,-225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_0}]},1).to({state:[]},2).wait(1));

	// options
	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(250,-140);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(340,-145);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(160,-145);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(-250,-140);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(-160,-145);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-340,-145);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(-340,-170);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(260,-175);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(180,-170);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(-180,-170);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-260,-175);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(340,-170);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(-320,-150);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(320,-150);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(190,-150);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(-190,-150);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(260,-150);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-260,-150);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(340,-180);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(260,-175);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(180,-180);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(-180,-180);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(-260,-175);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(-340,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_6}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_1}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-243,800,153);
p.frameBounds = [rect, new cjs.Rectangle(-370,-255,740,165), new cjs.Rectangle(-395,-243,790,153), new cjs.Rectangle(-335,-243,670,153), new cjs.Rectangle(-370,-270,740,185)];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_1 = new lib.dress_1_mc();
	this.dress_1.setTransform(185,-235);

	this.pareo_0 = new lib.pareo_0_mc();
	this.pareo_0.setTransform(185,-235);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(185,-235);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-185,-235);

	this.raft_1 = new lib.raft_1_mc();
	this.raft_1.setTransform(185,-235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.dress_1}]},1).to({state:[{t:this.pareo_0}]},2).to({state:[{t:this.headdress_0},{t:this.accessory_0}]},1).to({state:[{t:this.raft_1}]},1).wait(1));

	// options
	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(290,150);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(260,0);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(290,-150);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(-290,150,1,1,0,0,180);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(-260,0,1,1,0,0,180);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(-290,-150,1,1,0,0,180);

	this.dress_9 = new lib.dress_9_2_mc();
	this.dress_9.setTransform(-280,-110);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(280,100);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(280,-110);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(-280,100);

	this.dress_ = new lib.dress_1_2_mc();
	this.dress_.setTransform(-752.1,-21.6);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(280,100);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(280,-105);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(-280,100);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(-280,-110);

	this.pareo_6 = new lib.pareo_6_2_mc();
	this.pareo_6.setTransform(-290,125);

	this.pareo_5 = new lib.pareo_5_2_mc();
	this.pareo_5.setTransform(280,140);

	this.pareo_4 = new lib.pareo_4_2_mc();
	this.pareo_4.setTransform(-285,-175,1,1,-41.2);

	this.pareo_3 = new lib.pareo_3_2_mc();
	this.pareo_3.setTransform(280,-160);

	this.pareo_2 = new lib.pareo_2_2_mc();
	this.pareo_2.setTransform(276,-30);

	this.pareo_1 = new lib.pareo_1_2_mc();
	this.pareo_1.setTransform(-285,-35);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(277,0);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(277,-150);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(277,150);

	this.headdress_3 = new lib.headdress_3_2_mc();
	this.headdress_3.setTransform(-280,135);

	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(-280,5);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(-280,-135);

	this.raft_5 = new lib.raft_5_2_mc();
	this.raft_5.setTransform(280,80);

	this.raft_2 = new lib.raft_2_2_mc();
	this.raft_2.setTransform(-280,90);

	this.raft_3 = new lib.raft_3_2_mc();
	this.raft_3.setTransform(-280,-120);

	this.raft_4 = new lib.raft_4_2_mc();
	this.raft_4.setTransform(280,-120);

	this.raft_ = new lib.raft_1_2_mc();
	this.raft_.setTransform(-800,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]}).to({state:[{t:this.dress_},{t:this.dress_2},{t:this.dress_3},{t:this.dress_4},{t:this.dress_9}]},1).to({state:[{t:this.dress_5},{t:this.dress_6},{t:this.dress_7},{t:this.dress_8}]},1).to({state:[{t:this.pareo_1},{t:this.pareo_2},{t:this.pareo_3},{t:this.pareo_4},{t:this.pareo_5},{t:this.pareo_6}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]},1).to({state:[{t:this.raft_},{t:this.raft_4},{t:this.raft_3},{t:this.raft_2},{t:this.raft_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430,-280,860,560);
p.frameBounds = [rect, new cjs.Rectangle(-834.6,-253,1173.2,436.3), new cjs.Rectangle(-340.5,-253,693,437.6), new cjs.Rectangle(-412.4,-302.2,794.7,557.4), new cjs.Rectangle(-365,-253,704.5,469), new cjs.Rectangle(-878,-253,1258,469.8)];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_1 = new lib.dress_1_mc();
	this.dress_1.setTransform(185,-235);

	this.pareo_0 = new lib.pareo_0_mc();
	this.pareo_0.setTransform(185,-235);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(185,-235);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-185,-235);

	this.raft_1 = new lib.raft_1_mc();
	this.raft_1.setTransform(185,-235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.dress_1}]},1).to({state:[{t:this.pareo_0}]},2).to({state:[{t:this.headdress_0},{t:this.accessory_0}]},1).to({state:[{t:this.raft_1}]},1).wait(1));

	// options
	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(290,150);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(260,0);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(290,-150);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(-290,150,1,1,0,0,180);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(-260,0,1,1,0,0,180);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(-290,-150,1,1,0,0,180);

	this.dress_ = new lib.dress_1_1_mc();
	this.dress_.setTransform(-743.2,-36.5);

	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(-280,-110);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(280,100);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(280,-110);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(-280,100);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(-280,-110);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(280,-110);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(-280,100);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(280,100);

	this.pareo_2 = new lib.pareo_2_1_mc();
	this.pareo_2.setTransform(-277,-43);

	this.pareo_1 = new lib.pareo_1_1_mc();
	this.pareo_1.setTransform(-276,-158);

	this.pareo_4 = new lib.pareo_4_1_mc();
	this.pareo_4.setTransform(280,-145);

	this.pareo_3 = new lib.pareo_3_1_mc();
	this.pareo_3.setTransform(278,-13,1,1,30);

	this.pareo_6 = new lib.pareo_6_1_mc();
	this.pareo_6.setTransform(278,129);

	this.pareo_5 = new lib.pareo_5_1_mc();
	this.pareo_5.setTransform(-278,131);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(280,165);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(280,10);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(280,-150);

	this.headdress_3 = new lib.headdress_3_1_mc();
	this.headdress_3.setTransform(-280,-120);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(-280,30);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(-280,150);

	this.raft_5 = new lib.raft_5_1_mc();
	this.raft_5.setTransform(280,100);

	this.raft_4 = new lib.raft_4_1_mc();
	this.raft_4.setTransform(-280,90);

	this.raft_3 = new lib.raft_3_1_mc();
	this.raft_3.setTransform(-280,-110);

	this.raft_2 = new lib.raft_2_1_mc();
	this.raft_2.setTransform(280,-110);

	this.raft_ = new lib.raft_1_1_mc();
	this.raft_.setTransform(-800,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]}).to({state:[{t:this.dress_2},{t:this.dress_3},{t:this.dress_4},{t:this.dress_9},{t:this.dress_}]},1).to({state:[{t:this.dress_5},{t:this.dress_6},{t:this.dress_7},{t:this.dress_8}]},1).to({state:[{t:this.pareo_5},{t:this.pareo_6},{t:this.pareo_3},{t:this.pareo_4},{t:this.pareo_1},{t:this.pareo_2}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]},1).to({state:[{t:this.raft_},{t:this.raft_2},{t:this.raft_3},{t:this.raft_4},{t:this.raft_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430,-280,860,560);
p.frameBounds = [rect, new cjs.Rectangle(-820.8,-253,1179.7,453.1), new cjs.Rectangle(-352,-253,712.9,463.4), new cjs.Rectangle(-372.3,-253,757.6,511), new cjs.Rectangle(-397.5,-253,767.7,487), new cjs.Rectangle(-893,-253,1272.2,474.7)];


(lib.category_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.animation_mc = new lib.animation_category_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// shadow
	this.instance = new lib.shadow_categories_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnuHvQjNjOAAkhQAAkhDNjMQDOjOEgABQEhgBDODOQDMDMABEhQgBEhjMDOQjODMkhAAQkgAAjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.category_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.animation_mc = new lib.animation_category_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// shadow
	this.instance = new lib.shadow_categories_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnuHvQjNjOAAkhQAAkhDNjMQDOjOEgABQEhgBDODOQDMDMABEhQgBEhjMDOQjODMkhAAQkgAAjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.category_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.animation_mc = new lib.animation_category_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// shadow
	this.instance = new lib.shadow_categories_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnuHvQjNjOAAkhQAAkhDNjMQDOjOEgABQEhgBDODOQDMDMABEhQgBEhjMDOQjODMkhAAQkgAAjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.category_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.animation_mc = new lib.animation_category_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// shadow
	this.instance = new lib.shadow_categories_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnuHvQjNjOAAkhQAAkhDNjMQDOjOEgABQEhgBDODOQDMDMABEhQgBEhjMDOQjODMkhAAQkgAAjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.category_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.animation_mc = new lib.animation_category_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// shadow
	this.instance = new lib.shadow_categories_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnuHvQjNjOAAkhQAAkhDNjMQDOjOEgABQEhgBDODOQDMDMABEhQgBEhjMDOQjODMkhAAQkgAAjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.bodyDressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430,-280,860,560);
p.frameBounds = [rect];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-243,800,153);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430,-280,860,560);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-243,800,153);
p.frameBounds = [rect];


(lib.arrow_7_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_6_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_5_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.animation29_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.shine_mc = new lib.shine_1_7_mc();
	this.shine_mc.setTransform(19.4,159.2);

	this.shine_mc_1 = new lib.shine_1_6_mc();
	this.shine_mc_1.setTransform(-5.6,65.2);

	this.shine_mc_2 = new lib.shine_1_5_mc();
	this.shine_mc_2.setTransform(45.4,-3.2);

	this.shine_mc_3 = new lib.shine_1_2_mc();
	this.shine_mc_3.setTransform(-5.6,-14.2);

	this.shine_mc_4 = new lib.shine_1_1_mc();
	this.shine_mc_4.setTransform(65.1,-98.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc_4},{t:this.shine_mc_3},{t:this.shine_mc_2},{t:this.shine_mc_1},{t:this.shine_mc}]}).wait(50));

	// animation
	this.instance = new lib.glass_mc();
	this.instance.setTransform(16,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// animation
	this.instance_1 = new lib.plate_mc();
	this.instance_1.setTransform(207.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:481.5,alpha:0.012},9).to({_off:true},1).wait(40));

	// animation
	this.instance_2 = new lib.lime2_mc();
	this.instance_2.setTransform(-118,196.3,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-98.8,x:49,y:-60.8},9).to({x:56.8,y:-47.8},5).wait(36));

	// animation
	this.instance_3 = new lib.plate_mc();
	this.instance_3.setTransform(-140.5,201.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-432.4,alpha:0.012},9).to({_off:true},1).wait(40));

	// animation
	this.instance_4 = new lib.plate_mc();
	this.instance_4.setTransform(-251.6,150.3,1,1,0,0,0,-2,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-460.6,alpha:0.012},10).to({_off:true},1).wait(39));

	// animation
	this.instance_5 = new lib.ice_mc();
	this.instance_5.setTransform(31.1,43.4,1,1,15);
	this.instance_5.alpha = 0.891;

	this.instance_6 = new lib.ice_mc();
	this.instance_6.setTransform(15.7,98.5,1,1,-30);
	this.instance_6.alpha = 0.891;

	this.instance_7 = new lib.ice_mc();
	this.instance_7.setTransform(-3.4,5.9,1,1,-15);
	this.instance_7.alpha = 0.891;

	this.instance_8 = new lib.leaf4_mc();
	this.instance_8.setTransform(3.2,-4.5);

	this.instance_9 = new lib.leaf2_mc();
	this.instance_9.setTransform(12.4,163.4,1,1,-30);
	this.instance_9.alpha = 0.801;

	this.instance_10 = new lib.leaf1_mc();
	this.instance_10.setTransform(12.6,74.9);

	this.instance_11 = new lib.leaf3_mc();
	this.instance_11.setTransform(28.7,17.4);
	this.instance_11.alpha = 0.801;

	this.instance_12 = new lib.leaf4_mc();
	this.instance_12.setTransform(16,127.4,1,1,0,-165,15);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.lime1_mc();
	this.instance_13.setTransform(16,167.3,1,1,45);
	this.instance_13.alpha = 0.602;

	this.instance_14 = new lib.lime1_mc();
	this.instance_14.setTransform(23.1,83.3,1,1,-45);
	this.instance_14.alpha = 0.602;

	this.instance_15 = new lib.lime2_mc();
	this.instance_15.setTransform(13.2,117.3,1,1,90);
	this.instance_15.alpha = 0.602;

	this.instance_16 = new lib.lime1_mc();
	this.instance_16.setTransform(-1.5,27);
	this.instance_16.alpha = 0.602;

	this.instance_17 = new lib.mixer8_mc();
	this.instance_17.setTransform(16,85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(50));

	// animation
	this.instance_18 = new lib.solominka_mc();
	this.instance_18.setTransform(57.1,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330.6,-150.5,615.2,376);
p.frameBounds = [rect, new cjs.Rectangle(-351.5,-150.4,666.5,375.9), new cjs.Rectangle(-372.4,-150.4,717.8,375.9), new cjs.Rectangle(-393.3,-150.4,769.2,375.9), new cjs.Rectangle(-414.2,-150.4,820.5,375.9), new cjs.Rectangle(-435.1,-150.4,871.8,375.9), new cjs.Rectangle(-456,-150.4,923.2,375.9), new cjs.Rectangle(-476.9,-150.4,974.5,375.9), new cjs.Rectangle(-497.8,-150.4,1025.8,375.9), new cjs.Rectangle(-518.7,-150.4,1077.2,375.9), new cjs.Rectangle(-539.6,-150.4,657.3,375.9), rect=new cjs.Rectangle(-41,-150.4,158.7,375.9), rect, rect, rect=new cjs.Rectangle(-41,-150.5,158.6,376), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_trash_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// decor
	this.instance = new lib.throw_out_trash_mc();
	this.instance.setTransform(-14,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).wait(1));

	// animation
	this.instance_1 = new lib.trash_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({y:400,alpha:1},0).to({y:0},20).to({y:20},5).to({y:0},5).to({y:10},5).to({y:0},5).to({y:5},5).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.5,-186.5,273,373);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-136.5,213.5,273,373), new cjs.Rectangle(-136.5,193.5,273,373), new cjs.Rectangle(-136.5,173.5,273,373), new cjs.Rectangle(-136.5,153.5,273,373), new cjs.Rectangle(-136.5,133.5,273,373), new cjs.Rectangle(-136.5,113.5,273,373), new cjs.Rectangle(-136.5,93.5,273,373), new cjs.Rectangle(-136.5,73.5,273,373), new cjs.Rectangle(-136.5,53.5,273,373), new cjs.Rectangle(-136.5,33.5,273,373), new cjs.Rectangle(-136.5,13.5,273,373), new cjs.Rectangle(-136.5,-6.5,273,373), new cjs.Rectangle(-136.5,-26.5,273,373), new cjs.Rectangle(-136.5,-46.5,273,373), new cjs.Rectangle(-136.5,-66.5,273,373), new cjs.Rectangle(-136.5,-86.5,273,373), new cjs.Rectangle(-136.5,-106.5,273,373), new cjs.Rectangle(-136.5,-126.5,273,373), new cjs.Rectangle(-136.5,-146.5,273,373), new cjs.Rectangle(-136.5,-166.5,273,373), new cjs.Rectangle(-136.5,-186.5,273,373), new cjs.Rectangle(-136.5,-182.5,273,373), new cjs.Rectangle(-136.5,-178.5,273,373), new cjs.Rectangle(-136.5,-174.5,273,373), new cjs.Rectangle(-136.5,-170.5,273,373), new cjs.Rectangle(-136.5,-166.5,273,373), new cjs.Rectangle(-136.5,-170.5,273,373), new cjs.Rectangle(-136.5,-174.5,273,373), new cjs.Rectangle(-136.5,-178.5,273,373), new cjs.Rectangle(-136.5,-182.5,273,373), new cjs.Rectangle(-136.5,-186.5,273,373), new cjs.Rectangle(-136.5,-184.5,273,373), new cjs.Rectangle(-136.5,-182.5,273,373), new cjs.Rectangle(-136.5,-180.5,273,373), new cjs.Rectangle(-136.5,-178.5,273,373), new cjs.Rectangle(-136.5,-176.5,273,373), new cjs.Rectangle(-136.5,-178.5,273,373), new cjs.Rectangle(-136.5,-180.5,273,373), new cjs.Rectangle(-136.5,-182.5,273,373), new cjs.Rectangle(-136.5,-184.5,273,373), new cjs.Rectangle(-136.5,-186.5,273,373), new cjs.Rectangle(-136.5,-185.5,273,373), new cjs.Rectangle(-136.5,-184.5,273,373), new cjs.Rectangle(-136.5,-183.5,273,373), new cjs.Rectangle(-136.5,-182.5,273,373), new cjs.Rectangle(-136.5,-181.5,273,373), new cjs.Rectangle(-136.5,-182.5,273,373), new cjs.Rectangle(-136.5,-183.5,273,373), new cjs.Rectangle(-136.5,-184.5,273,373), new cjs.Rectangle(-136.5,-185.5,273,373), new cjs.Rectangle(-136.5,-186.5,273,373)];


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


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-600,1200,1800);
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
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


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
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,740);
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


(lib.subject_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_trash_mc();
	this.instance.setTransform(705,415);

	this.instance_1 = new lib.trash_mc();
	this.instance_1.setTransform(705,415);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},28).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:800},28).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(568.5,228.5,273,373);
p.frameBounds = [rect, rect, new cjs.Rectangle(568.5,242.3,273,373), new cjs.Rectangle(568.5,256,273,373), new cjs.Rectangle(568.5,269.8,273,373), new cjs.Rectangle(568.5,283.5,273,373), new cjs.Rectangle(568.5,297.3,273,373), new cjs.Rectangle(568.5,311,273,373), new cjs.Rectangle(568.5,324.8,273,373), new cjs.Rectangle(568.5,338.5,273,373), new cjs.Rectangle(568.5,352.3,273,373), new cjs.Rectangle(568.5,366,273,373), new cjs.Rectangle(568.5,379.8,273,373), new cjs.Rectangle(568.5,393.5,273,373), new cjs.Rectangle(568.5,407.3,273,373), new cjs.Rectangle(568.5,421,273,373), new cjs.Rectangle(568.5,434.8,273,373), new cjs.Rectangle(568.5,448.5,273,373), new cjs.Rectangle(568.5,462.3,273,373), new cjs.Rectangle(568.5,476,273,373), new cjs.Rectangle(568.5,489.8,273,373), new cjs.Rectangle(568.5,503.5,273,373), new cjs.Rectangle(568.5,517.3,273,373), new cjs.Rectangle(568.5,531,273,373), new cjs.Rectangle(568.5,544.8,273,373), new cjs.Rectangle(568.5,558.5,273,373), new cjs.Rectangle(568.5,572.3,273,373), new cjs.Rectangle(568.5,586,273,373), new cjs.Rectangle(568.5,599.8,273,373), rect=new cjs.Rectangle(568.5,613.5,273,373), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5,location_7:6});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.frame_6_mc = new lib.frame_locations_6_mc();

	this.frame_7_mc = new lib.frame_locations_7_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-264.9,420,530);
p.frameBounds = [rect, new cjs.Rectangle(-676,-273,1265,538), new cjs.Rectangle(-582,-264.9,1163,530), new cjs.Rectangle(-582,-264.9,1163,544), new cjs.Rectangle(-600,-300,1200,600), new cjs.Rectangle(-592,-264.9,1206,534), new cjs.Rectangle(-613,-264.9,1194,530)];


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


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.cocktail_2_mc();
	this.instance.setTransform(-13,-184.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// accessory
	this.accessory = new lib.hero1_bag_all_mc();
	this.accessory.setTransform(-141.8,-93);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero1_hat_all_mc();
	this.headdress.setTransform(-97.3,-221.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-111.8,-223);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyes1_mc();
	this.instance_1.setTransform(-94.6,-198.1,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(-97.3,-211.5,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadow_all_mc();
	this.shadows.setTransform(-95.8,-200.5,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-86.4,-169.6,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(-90.7,-178.5,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero1_head1_img();
	this.instance_2.setTransform(-153,-252.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.hero1_leg1_img();
	this.instance_3.setTransform(-83,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// pareo
	this.pareo = new lib.hero1_pareo_all_mc();
	this.pareo.setTransform(-38.3,0);

	this.timeline.addTween(cjs.Tween.get(this.pareo).wait(1));

	// dress
	this.dress = new lib.hero1_swimsuit_all_mc();
	this.dress.setTransform(-72.8,-59);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// body
	this.instance_4 = new lib.hero1_body1_img();
	this.instance_4.setTransform(-196.5,-217);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// pareoSecond
	this.pareoSecond = new lib.hero1_pareo_back_all_mc();
	this.pareoSecond.setTransform(-38.3,0);

	this.timeline.addTween(cjs.Tween.get(this.pareoSecond).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-111.8,-223);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// headdressSecond
	this.headdressSecond = new lib.hero1_hatb_all_mc();
	this.headdressSecond.setTransform(-97.3,-221.5);

	this.timeline.addTween(cjs.Tween.get(this.headdressSecond).wait(1));

	// raft
	this.raft = new lib.hero1_float_mc();
	this.raft.setTransform(-41.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.raft).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-243,-261,440.5,514);
p.frameBounds = [rect];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cocktail_2_mc();
	this.instance.setTransform(-13,-184.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_hat1_img();
	this.instance_1.setTransform(-157.3,-251.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero1_fringe1_img();
	this.instance_2.setTransform(-156.8,-261);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero1_eyes1_mc();
	this.instance_3.setTransform(-94.6,-198.1,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero1_eyebrows1_img();
	this.instance_4.setTransform(-124,-221.7,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero1_shadow4_img();
	this.instance_5.setTransform(-124,-216.7,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero1_lips5_img();
	this.instance_6.setTransform(-95.8,-175.5,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero1_rouge5_img();
	this.instance_7.setTransform(-122.4,-200.3,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero1_head1_img();
	this.instance_8.setTransform(-153,-252.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero1_leg1_img();
	this.instance_9.setTransform(-83,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero1_pareo6_1_img();
	this.instance_10.setTransform(-204.1,-198.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.hero1_swimsuit6_img();
	this.instance_11.setTransform(-132.3,-160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hero1_body1_img();
	this.instance_12.setTransform(-196.5,-217);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.hero1_pareo6_2_img();
	this.instance_13.setTransform(-198.6,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// graph
	this.instance_14 = new lib.hero1_hair1_img();
	this.instance_14.setTransform(-188.1,-254.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// graph
	this.instance_15 = new lib.hero1_float3_img();
	this.instance_15.setTransform(-212.5,-183.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-212.5,-261,410,514);
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


(lib.dressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,500);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(115,210);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-115,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430,-280,860,830);
p.frameBounds = [rect];


(lib.dressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,200);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(130,-30);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-130,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-440,-243,880,493);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,500);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(115,210);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-115,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430,-280,860,830);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,200);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(130,-30);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-130,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-440,-243,880,493);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// categories
	this.decoration = new lib.category_5_mc();
	this.decoration.setTransform(500,520);

	this.accessory = new lib.category_4_mc();
	this.accessory.setTransform(365,520);

	this.water = new lib.category_3_mc();
	this.water.setTransform(230,520);

	this.pool = new lib.category_2_mc();
	this.pool.setTransform(80,370);

	this.grass = new lib.category_1_mc();
	this.grass.setTransform(80,235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.grass},{t:this.pool},{t:this.water},{t:this.accessory},{t:this.decoration}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,165,560,425);
p.frameBounds = [rect];


(lib.anim_hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_1_main_mc();
	this.instance.setTransform(7,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5,y:0},69).to({x:14,y:7},70).to({x:9,y:11},60).to({x:7,y:4},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205.5,-257,410,514);
p.frameBounds = [rect, rect, new cjs.Rectangle(-205.5,-257.1,410,514), new cjs.Rectangle(-205.6,-257.1,410,514), new cjs.Rectangle(-205.6,-257.2,410,514), rect=new cjs.Rectangle(-205.6,-257.3,410,514), rect, rect=new cjs.Rectangle(-205.7,-257.4,410,514), rect, new cjs.Rectangle(-205.7,-257.5,410,514), rect=new cjs.Rectangle(-205.8,-257.6,410,514), rect, new cjs.Rectangle(-205.8,-257.7,410,514), new cjs.Rectangle(-205.9,-257.7,410,514), rect=new cjs.Rectangle(-205.9,-257.8,410,514), rect, new cjs.Rectangle(-205.9,-257.9,410,514), rect=new cjs.Rectangle(-206,-258,410,514), rect, new cjs.Rectangle(-206,-258.1,410,514), new cjs.Rectangle(-206.1,-258.1,410,514), new cjs.Rectangle(-206.1,-258.2,410,514), rect=new cjs.Rectangle(-206.1,-258.3,410,514), rect, rect=new cjs.Rectangle(-206.2,-258.4,410,514), rect, new cjs.Rectangle(-206.2,-258.5,410,514), new cjs.Rectangle(-206.3,-258.5,410,514), new cjs.Rectangle(-206.3,-258.6,410,514), rect=new cjs.Rectangle(-206.3,-258.7,410,514), rect, rect=new cjs.Rectangle(-206.4,-258.8,410,514), rect, new cjs.Rectangle(-206.4,-258.9,410,514), new cjs.Rectangle(-206.5,-258.9,410,514), new cjs.Rectangle(-206.5,-259,410,514), rect=new cjs.Rectangle(-206.5,-259.1,410,514), rect, rect=new cjs.Rectangle(-206.6,-259.2,410,514), rect, new cjs.Rectangle(-206.6,-259.3,410,514), rect=new cjs.Rectangle(-206.7,-259.4,410,514), rect, rect=new cjs.Rectangle(-206.7,-259.5,410,514), rect, rect=new cjs.Rectangle(-206.8,-259.6,410,514), rect, new cjs.Rectangle(-206.8,-259.7,410,514), rect=new cjs.Rectangle(-206.9,-259.8,410,514), rect, new cjs.Rectangle(-206.9,-259.9,410,514), new cjs.Rectangle(-207,-259.9,410,514), rect=new cjs.Rectangle(-207,-260,410,514), rect, new cjs.Rectangle(-207,-260.1,410,514), rect=new cjs.Rectangle(-207.1,-260.2,410,514), rect, new cjs.Rectangle(-207.1,-260.3,410,514), new cjs.Rectangle(-207.2,-260.3,410,514), new cjs.Rectangle(-207.2,-260.4,410,514), rect=new cjs.Rectangle(-207.2,-260.5,410,514), rect, rect=new cjs.Rectangle(-207.3,-260.6,410,514), rect, new cjs.Rectangle(-207.3,-260.7,410,514), new cjs.Rectangle(-207.4,-260.7,410,514), new cjs.Rectangle(-207.4,-260.8,410,514), rect=new cjs.Rectangle(-207.4,-260.9,410,514), rect, new cjs.Rectangle(-207.5,-261,410,514), new cjs.Rectangle(-207.3,-260.9,410,514), new cjs.Rectangle(-207.2,-260.8,410,514), new cjs.Rectangle(-207.1,-260.7,410,514), new cjs.Rectangle(-207,-260.6,410,514), new cjs.Rectangle(-206.8,-260.5,410,514), new cjs.Rectangle(-206.7,-260.4,410,514), new cjs.Rectangle(-206.6,-260.3,410,514), new cjs.Rectangle(-206.4,-260.2,410,514), new cjs.Rectangle(-206.3,-260.1,410,514), new cjs.Rectangle(-206.2,-260,410,514), new cjs.Rectangle(-206.1,-259.9,410,514), new cjs.Rectangle(-205.9,-259.8,410,514), new cjs.Rectangle(-205.8,-259.7,410,514), new cjs.Rectangle(-205.7,-259.6,410,514), new cjs.Rectangle(-205.5,-259.5,410,514), new cjs.Rectangle(-205.4,-259.4,410,514), new cjs.Rectangle(-205.3,-259.3,410,514), new cjs.Rectangle(-205.2,-259.2,410,514), new cjs.Rectangle(-205,-259.1,410,514), new cjs.Rectangle(-204.9,-259,410,514), new cjs.Rectangle(-204.8,-258.9,410,514), new cjs.Rectangle(-204.6,-258.8,410,514), new cjs.Rectangle(-204.5,-258.7,410,514), new cjs.Rectangle(-204.4,-258.6,410,514), new cjs.Rectangle(-204.3,-258.5,410,514), new cjs.Rectangle(-204.1,-258.4,410,514), new cjs.Rectangle(-204,-258.3,410,514), new cjs.Rectangle(-203.9,-258.2,410,514), new cjs.Rectangle(-203.7,-258.1,410,514), new cjs.Rectangle(-203.6,-258,410,514), new cjs.Rectangle(-203.5,-257.9,410,514), new cjs.Rectangle(-203.4,-257.8,410,514), new cjs.Rectangle(-203.2,-257.7,410,514), new cjs.Rectangle(-203.1,-257.6,410,514), new cjs.Rectangle(-203,-257.5,410,514), new cjs.Rectangle(-202.8,-257.4,410,514), new cjs.Rectangle(-202.7,-257.3,410,514), new cjs.Rectangle(-202.6,-257.2,410,514), new cjs.Rectangle(-202.5,-257.1,410,514), new cjs.Rectangle(-202.3,-257,410,514), new cjs.Rectangle(-202.2,-256.9,410,514), new cjs.Rectangle(-202.1,-256.8,410,514), new cjs.Rectangle(-201.9,-256.7,410,514), new cjs.Rectangle(-201.8,-256.6,410,514), new cjs.Rectangle(-201.7,-256.5,410,514), new cjs.Rectangle(-201.6,-256.4,410,514), new cjs.Rectangle(-201.4,-256.3,410,514), new cjs.Rectangle(-201.3,-256.2,410,514), new cjs.Rectangle(-201.2,-256.1,410,514), new cjs.Rectangle(-201,-256,410,514), new cjs.Rectangle(-200.9,-255.9,410,514), new cjs.Rectangle(-200.8,-255.8,410,514), new cjs.Rectangle(-200.7,-255.7,410,514), new cjs.Rectangle(-200.5,-255.6,410,514), new cjs.Rectangle(-200.4,-255.5,410,514), new cjs.Rectangle(-200.3,-255.4,410,514), new cjs.Rectangle(-200.1,-255.3,410,514), new cjs.Rectangle(-200,-255.2,410,514), new cjs.Rectangle(-199.9,-255.1,410,514), new cjs.Rectangle(-199.8,-255,410,514), new cjs.Rectangle(-199.6,-254.9,410,514), new cjs.Rectangle(-199.5,-254.8,410,514), new cjs.Rectangle(-199.4,-254.7,410,514), new cjs.Rectangle(-199.2,-254.6,410,514), new cjs.Rectangle(-199.1,-254.5,410,514), new cjs.Rectangle(-199,-254.4,410,514), new cjs.Rectangle(-198.9,-254.3,410,514), new cjs.Rectangle(-198.7,-254.2,410,514), new cjs.Rectangle(-198.6,-254.1,410,514), new cjs.Rectangle(-198.5,-254,410,514), new cjs.Rectangle(-198.6,-253.9,410,514), new cjs.Rectangle(-198.6,-253.8,410,514), new cjs.Rectangle(-198.7,-253.8,410,514), new cjs.Rectangle(-198.8,-253.7,410,514), new cjs.Rectangle(-198.9,-253.6,410,514), new cjs.Rectangle(-199,-253.6,410,514), new cjs.Rectangle(-199.1,-253.5,410,514), new cjs.Rectangle(-199.1,-253.4,410,514), new cjs.Rectangle(-199.2,-253.4,410,514), new cjs.Rectangle(-199.3,-253.3,410,514), new cjs.Rectangle(-199.4,-253.2,410,514), new cjs.Rectangle(-199.5,-253.2,410,514), new cjs.Rectangle(-199.6,-253.1,410,514), new cjs.Rectangle(-199.6,-253,410,514), new cjs.Rectangle(-199.7,-253,410,514), new cjs.Rectangle(-199.8,-252.9,410,514), new cjs.Rectangle(-199.9,-252.8,410,514), new cjs.Rectangle(-200,-252.8,410,514), new cjs.Rectangle(-200.1,-252.7,410,514), new cjs.Rectangle(-200.1,-252.6,410,514), new cjs.Rectangle(-200.2,-252.6,410,514), new cjs.Rectangle(-200.3,-252.5,410,514), new cjs.Rectangle(-200.4,-252.4,410,514), new cjs.Rectangle(-200.5,-252.4,410,514), new cjs.Rectangle(-200.6,-252.3,410,514), new cjs.Rectangle(-200.6,-252.2,410,514), new cjs.Rectangle(-200.7,-252.2,410,514), new cjs.Rectangle(-200.8,-252.1,410,514), new cjs.Rectangle(-200.9,-252,410,514), new cjs.Rectangle(-201,-252,410,514), new cjs.Rectangle(-201.1,-251.9,410,514), new cjs.Rectangle(-201.1,-251.8,410,514), new cjs.Rectangle(-201.2,-251.8,410,514), new cjs.Rectangle(-201.3,-251.7,410,514), new cjs.Rectangle(-201.4,-251.6,410,514), new cjs.Rectangle(-201.5,-251.6,410,514), new cjs.Rectangle(-201.6,-251.5,410,514), new cjs.Rectangle(-201.6,-251.4,410,514), new cjs.Rectangle(-201.7,-251.4,410,514), new cjs.Rectangle(-201.8,-251.3,410,514), new cjs.Rectangle(-201.9,-251.2,410,514), new cjs.Rectangle(-202,-251.2,410,514), new cjs.Rectangle(-202.1,-251.1,410,514), new cjs.Rectangle(-202.1,-251,410,514), new cjs.Rectangle(-202.2,-251,410,514), new cjs.Rectangle(-202.3,-250.9,410,514), new cjs.Rectangle(-202.4,-250.8,410,514), new cjs.Rectangle(-202.5,-250.8,410,514), new cjs.Rectangle(-202.6,-250.7,410,514), new cjs.Rectangle(-202.6,-250.6,410,514), new cjs.Rectangle(-202.7,-250.6,410,514), new cjs.Rectangle(-202.8,-250.5,410,514), new cjs.Rectangle(-202.9,-250.4,410,514), new cjs.Rectangle(-203,-250.4,410,514), new cjs.Rectangle(-203.1,-250.3,410,514), new cjs.Rectangle(-203.1,-250.2,410,514), new cjs.Rectangle(-203.2,-250.2,410,514), new cjs.Rectangle(-203.3,-250.1,410,514), new cjs.Rectangle(-203.4,-250,410,514), new cjs.Rectangle(-203.5,-250,410,514), new cjs.Rectangle(-203.5,-250.1,410,514), new cjs.Rectangle(-203.6,-250.3,410,514), new cjs.Rectangle(-203.6,-250.4,410,514), new cjs.Rectangle(-203.6,-250.5,410,514), new cjs.Rectangle(-203.7,-250.7,410,514), new cjs.Rectangle(-203.7,-250.8,410,514), new cjs.Rectangle(-203.8,-251,410,514), new cjs.Rectangle(-203.8,-251.1,410,514), new cjs.Rectangle(-203.8,-251.2,410,514), new cjs.Rectangle(-203.9,-251.4,410,514), new cjs.Rectangle(-203.9,-251.5,410,514), new cjs.Rectangle(-204,-251.7,410,514), new cjs.Rectangle(-204,-251.8,410,514), new cjs.Rectangle(-204,-251.9,410,514), new cjs.Rectangle(-204.1,-252.1,410,514), new cjs.Rectangle(-204.1,-252.2,410,514), new cjs.Rectangle(-204.2,-252.4,410,514), new cjs.Rectangle(-204.2,-252.5,410,514), new cjs.Rectangle(-204.2,-252.6,410,514), new cjs.Rectangle(-204.3,-252.8,410,514), new cjs.Rectangle(-204.3,-252.9,410,514), new cjs.Rectangle(-204.4,-253.1,410,514), new cjs.Rectangle(-204.4,-253.2,410,514), new cjs.Rectangle(-204.4,-253.3,410,514), new cjs.Rectangle(-204.5,-253.5,410,514), new cjs.Rectangle(-204.5,-253.6,410,514), new cjs.Rectangle(-204.6,-253.8,410,514), new cjs.Rectangle(-204.6,-253.9,410,514), new cjs.Rectangle(-204.6,-254,410,514), new cjs.Rectangle(-204.7,-254.2,410,514), new cjs.Rectangle(-204.7,-254.3,410,514), new cjs.Rectangle(-204.8,-254.5,410,514), new cjs.Rectangle(-204.8,-254.6,410,514), new cjs.Rectangle(-204.8,-254.7,410,514), new cjs.Rectangle(-204.9,-254.9,410,514), new cjs.Rectangle(-204.9,-255,410,514), new cjs.Rectangle(-205,-255.2,410,514), new cjs.Rectangle(-205,-255.3,410,514), new cjs.Rectangle(-205,-255.4,410,514), new cjs.Rectangle(-205.1,-255.6,410,514), new cjs.Rectangle(-205.1,-255.7,410,514), new cjs.Rectangle(-205.2,-255.9,410,514), new cjs.Rectangle(-205.2,-256,410,514), new cjs.Rectangle(-205.2,-256.1,410,514), new cjs.Rectangle(-205.3,-256.3,410,514), new cjs.Rectangle(-205.3,-256.4,410,514), new cjs.Rectangle(-205.4,-256.6,410,514), new cjs.Rectangle(-205.4,-256.7,410,514), new cjs.Rectangle(-205.4,-256.8,410,514), new cjs.Rectangle(-205.5,-257,410,514)];


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
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
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
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(260.2,445.1,1,1,60,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{regX:0.1,regY:-0.1,rotation:60,x:260.2,y:445.1,skewX:0,skewY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,rotation:15,x:330,y:235,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0.1,regY:0.1,rotation:0,x:340,y:475.1,skewX:-45,skewY:135}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,rotation:0,x:350,y:330,skewX:15,skewY:-165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,rotation:0,x:275,y:450,skewX:-60,skewY:120}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0.1,regY:-0.1,rotation:60,x:595.2,y:460.1,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,rotation:0,x:440,y:320,skewX:-15,skewY:165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0.1,regY:0,rotation:60,x:285.1,y:485.1,skewX:0,skewY:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_5_mc();
	this.object_1.setTransform(400,510);

	this.object_2 = new lib.arrow_1_5_mc();
	this.object_2.setTransform(530.1,140.2,0.831,0.831,30,0,0,0.2,0.1);

	this.object_3 = new lib.object_3_5_mc();
	this.object_3.setTransform(351,238);

	this.object_4 = new lib.arrow_2_5_mc();
	this.object_4.setTransform(545.1,190,0.813,0.813,45,0,0,0.1,-0.1);

	this.object_5 = new lib.arrow_3_5_mc();
	this.object_5.setTransform(583,440,0.678,0.678,0,0,180);

	this.object_6 = new lib.object_6_5_mc();
	this.object_6.setTransform(400,510);

	this.object_7 = new lib.arrow_4_5_mc();
	this.object_7.setTransform(352.1,200.1,0.813,0.813,0,-45,135,0,0.1);

	this.object_8 = new lib.object_8_5_mc();
	this.object_8.setTransform(305,375);

	this.object_9 = new lib.object_9_5_mc();
	this.object_9.setTransform(260,475);

	this.object_10 = new lib.arrow_5_5_mc();
	this.object_10.setTransform(370.1,200.1,0.813,0.813,45,0,0,0.1,0);

	this.object_11 = new lib.object_11_5_mc();
	this.object_11.setTransform(606,473);

	this.object_12 = new lib.object_12_5_mc();
	this.object_12.setTransform(418,373);

	this.object_13 = new lib.arrow_6_5_mc();
	this.object_13.setTransform(215,325,0.854,0.854);

	this.object_14 = new lib.arrow_7_5_mc();
	this.object_14.setTransform(560,355,0.793,0.793,0,0,180);

	this.object_15 = new lib.object_15_5_mc();
	this.object_15.setTransform(265,470);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation1_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation3_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation5_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation7_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation9_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation11_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation13_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation15_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.animation17_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.animation19_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.animation21_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.animation23_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.animation25_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.animation27_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.animation29_mc();
	this.subject_15.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.4,-329.4,872.5,939.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(115.5,-329.4,615.7,893.8), rect, rect, new cjs.Rectangle(228,-329.4,1303,891.4), new cjs.Rectangle(-531.9,-329.4,1312,939.4), new cjs.Rectangle(228,-329.4,475,895.5), new cjs.Rectangle(215,-329.4,325,864.4), rect=new cjs.Rectangle(69.4,-329.4,759.6,914.3), rect, rect, rect, new cjs.Rectangle(45.1,-329.4,783.8,914.3), new cjs.Rectangle(69.4,-329.4,759.6,914.3), new cjs.Rectangle(69.4,-329.4,615.2,899.4)];


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

	// subjects
	this.subject_1 = new lib.subject_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.subject_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,-329.4,861.6,946.4);
p.frameBounds = [rect];


(lib.quest_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":269});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,510);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.75,scaleY:0.75},0).to({scaleX:1.13,scaleY:1.13,y:510},10).to({scaleX:1,scaleY:1},10).wait(20).to({y:700},10).wait(171));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_7_mc();
	this.dressupPanel_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(18).to({y:250},26).to({y:300},4).wait(50).to({y:1000},15).wait(156));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(405,320);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:-500},0).wait(18).to({y:370},26).to({y:320},4).wait(40).to({y:315},30).to({y:325},30).to({y:315},30).to({y:325},30).to({y:315},30).to({y:325},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,20,860,830);
p.frameBounds = [rect, rect=new cjs.Rectangle(-30,-800,860,2350), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-30,-766.5,860,2287.7), new cjs.Rectangle(-30,-733.1,860,2225.4), new cjs.Rectangle(-30,-699.6,860,2163.1), new cjs.Rectangle(-30,-666.1,860,2100.8), new cjs.Rectangle(-30,-632.7,860,2038.5), new cjs.Rectangle(-30,-599.2,860,1976.2), new cjs.Rectangle(-30,-565.8,860,1913.9), new cjs.Rectangle(-30,-532.3,860,1851.6), new cjs.Rectangle(-30,-498.8,860,1789.3), new cjs.Rectangle(-30,-465.4,860,1727), new cjs.Rectangle(-30,-431.9,860,1664.6), new cjs.Rectangle(-30,-398.4,860,1602.3), new cjs.Rectangle(-30,-365,860,1540), new cjs.Rectangle(-30,-331.5,860,1477.7), new cjs.Rectangle(-30,-298.1,860,1415.4), new cjs.Rectangle(-30,-264.6,860,1353.1), new cjs.Rectangle(-30,-231.1,860,1290.8), new cjs.Rectangle(-30,-197.7,860,1228.5), new cjs.Rectangle(-30,-164.2,860,1166.2), new cjs.Rectangle(-30,-130.7,860,1103.9), new cjs.Rectangle(-30,-97.3,860,1041.6), new cjs.Rectangle(-30,-63.8,860,979.3), new cjs.Rectangle(-30,-30.4,860,917), new cjs.Rectangle(-30,3.1,860,854.6), new cjs.Rectangle(-30,-1.1,860,830), new cjs.Rectangle(-30,-30,860,830), new cjs.Rectangle(-30,-17.5,860,830), new cjs.Rectangle(-30,-5,860,830), new cjs.Rectangle(-30,7.5,860,830), rect=new cjs.Rectangle(-30,20,860,830), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-30,19.9,860,830.2), new cjs.Rectangle(-30,19.7,860,830.4), new cjs.Rectangle(-30,19.5,860,830.5), new cjs.Rectangle(-30,19.4,860,830.7), new cjs.Rectangle(-30,19.2,860,830.9), new cjs.Rectangle(-30,19,860,831), new cjs.Rectangle(-30,18.9,860,831.2), new cjs.Rectangle(-30,18.7,860,831.4), new cjs.Rectangle(-30,18.5,860,831.5), new cjs.Rectangle(-30,18.4,860,831.7), new cjs.Rectangle(-30,18.2,860,878.5), new cjs.Rectangle(-30,18,860,925.4), new cjs.Rectangle(-30,17.9,860,972.2), new cjs.Rectangle(-30,17.7,860,1019), new cjs.Rectangle(-30,17.5,860,1065.9), new cjs.Rectangle(-30,17.4,860,1112.7), new cjs.Rectangle(-30,17.2,860,1159.5), new cjs.Rectangle(-30,17,860,1206.4), new cjs.Rectangle(-30,16.9,860,1253.2), new cjs.Rectangle(-30,16.7,860,1300), new cjs.Rectangle(-30,16.5,860,1346.9), new cjs.Rectangle(-30,16.4,860,1393.7), new cjs.Rectangle(-30,16.2,860,1440.5), new cjs.Rectangle(-30,16,860,1487.4), new cjs.Rectangle(-30,15.9,860,1534.2), new cjs.Rectangle(-30,15.7,860,1534.4), new cjs.Rectangle(-30,15.5,860,1534.5), new cjs.Rectangle(-30,15.4,860,1534.7), new cjs.Rectangle(-30,15.2,860,1534.9), new cjs.Rectangle(-30,15,860,1535), new cjs.Rectangle(-30,15.4,860,1534.7), new cjs.Rectangle(-30,15.7,860,1534.4), new cjs.Rectangle(-30,16,860,1534), new cjs.Rectangle(-30,16.4,860,1533.7), new cjs.Rectangle(-30,16.7,860,1533.4), new cjs.Rectangle(-30,17,860,1533), new cjs.Rectangle(-30,17.4,860,1532.7), new cjs.Rectangle(-30,17.7,860,1532.4), new cjs.Rectangle(-30,18,860,1532), new cjs.Rectangle(-30,18.4,860,1531.7), new cjs.Rectangle(-30,18.7,860,1531.4), new cjs.Rectangle(-30,19,860,1531), new cjs.Rectangle(-30,19.4,860,1530.7), new cjs.Rectangle(-30,19.7,860,1530.4), new cjs.Rectangle(-30,20,860,1530), new cjs.Rectangle(-30,20.4,860,1529.7), new cjs.Rectangle(-30,20.7,860,1529.4), new cjs.Rectangle(-30,21,860,1529), new cjs.Rectangle(-30,21.4,860,1528.7), new cjs.Rectangle(-30,21.7,860,1528.4), new cjs.Rectangle(-30,22,860,1528), new cjs.Rectangle(-30,22.4,860,1527.7), new cjs.Rectangle(-30,22.7,860,1527.4), new cjs.Rectangle(-30,23,860,1527), new cjs.Rectangle(-30,23.4,860,1526.7), new cjs.Rectangle(-30,23.7,860,1526.4), new cjs.Rectangle(-30,24,860,1526), new cjs.Rectangle(-30,24.4,860,1525.7), new cjs.Rectangle(-30,24.7,860,1525.4), new cjs.Rectangle(-30,25,860,1525), new cjs.Rectangle(-30,24.7,860,1525.4), new cjs.Rectangle(-30,24.4,860,1525.7), new cjs.Rectangle(-30,24,860,1526), new cjs.Rectangle(-30,23.7,860,1526.4), new cjs.Rectangle(-30,23.4,860,1526.7), new cjs.Rectangle(-30,23,860,1527), new cjs.Rectangle(-30,22.7,860,1527.4), new cjs.Rectangle(-30,22.4,860,1527.7), new cjs.Rectangle(-30,22,860,1528), new cjs.Rectangle(-30,21.7,860,1528.4), new cjs.Rectangle(-30,21.4,860,1528.7), new cjs.Rectangle(-30,21,860,1529), new cjs.Rectangle(-30,20.7,860,1529.4), new cjs.Rectangle(-30,20.4,860,1529.7), new cjs.Rectangle(-30,20,860,1530), new cjs.Rectangle(-30,19.7,860,1530.4), new cjs.Rectangle(-30,19.4,860,1530.7), new cjs.Rectangle(-30,19,860,1531), new cjs.Rectangle(-30,18.7,860,1531.4), new cjs.Rectangle(-30,18.4,860,1531.7), new cjs.Rectangle(-30,18,860,1532), new cjs.Rectangle(-30,17.7,860,1532.4), new cjs.Rectangle(-30,17.4,860,1532.7), new cjs.Rectangle(-30,17,860,1533), new cjs.Rectangle(-30,16.7,860,1533.4), new cjs.Rectangle(-30,16.4,860,1533.7), new cjs.Rectangle(-30,16,860,1534), new cjs.Rectangle(-30,15.7,860,1534.4), new cjs.Rectangle(-30,15.4,860,1534.7), new cjs.Rectangle(-30,15,860,1535), new cjs.Rectangle(-30,15.4,860,1534.7), new cjs.Rectangle(-30,15.7,860,1534.4), new cjs.Rectangle(-30,16,860,1534), new cjs.Rectangle(-30,16.4,860,1533.7), new cjs.Rectangle(-30,16.7,860,1533.4), new cjs.Rectangle(-30,17,860,1533), new cjs.Rectangle(-30,17.4,860,1532.7), new cjs.Rectangle(-30,17.7,860,1532.4), new cjs.Rectangle(-30,18,860,1532), new cjs.Rectangle(-30,18.4,860,1531.7), new cjs.Rectangle(-30,18.7,860,1531.4), new cjs.Rectangle(-30,19,860,1531), new cjs.Rectangle(-30,19.4,860,1530.7), new cjs.Rectangle(-30,19.7,860,1530.4), new cjs.Rectangle(-30,20,860,1530), new cjs.Rectangle(-30,20.4,860,1529.7), new cjs.Rectangle(-30,20.7,860,1529.4), new cjs.Rectangle(-30,21,860,1529), new cjs.Rectangle(-30,21.4,860,1528.7), new cjs.Rectangle(-30,21.7,860,1528.4), new cjs.Rectangle(-30,22,860,1528), new cjs.Rectangle(-30,22.4,860,1527.7), new cjs.Rectangle(-30,22.7,860,1527.4), new cjs.Rectangle(-30,23,860,1527), new cjs.Rectangle(-30,23.4,860,1526.7), new cjs.Rectangle(-30,23.7,860,1526.4), new cjs.Rectangle(-30,24,860,1526), new cjs.Rectangle(-30,24.4,860,1525.7), new cjs.Rectangle(-30,24.7,860,1525.4), new cjs.Rectangle(-30,25,860,1525), new cjs.Rectangle(-30,24.7,860,1525.4), new cjs.Rectangle(-30,24.4,860,1525.7), new cjs.Rectangle(-30,24,860,1526), new cjs.Rectangle(-30,23.7,860,1526.4), new cjs.Rectangle(-30,23.4,860,1526.7), new cjs.Rectangle(-30,23,860,1527), new cjs.Rectangle(-30,22.7,860,1527.4), new cjs.Rectangle(-30,22.4,860,1527.7), new cjs.Rectangle(-30,22,860,1528), new cjs.Rectangle(-30,21.7,860,1528.4), new cjs.Rectangle(-30,21.4,860,1528.7), new cjs.Rectangle(-30,21,860,1529), new cjs.Rectangle(-30,20.7,860,1529.4), new cjs.Rectangle(-30,20.4,860,1529.7), new cjs.Rectangle(-30,20,860,1530), new cjs.Rectangle(-30,19.7,860,1530.4), new cjs.Rectangle(-30,19.4,860,1530.7), new cjs.Rectangle(-30,19,860,1531), new cjs.Rectangle(-30,18.7,860,1531.4), new cjs.Rectangle(-30,18.4,860,1531.7), new cjs.Rectangle(-30,18,860,1532), new cjs.Rectangle(-30,17.7,860,1532.4), new cjs.Rectangle(-30,17.4,860,1532.7), new cjs.Rectangle(-30,17,860,1533), new cjs.Rectangle(-30,16.7,860,1533.4), new cjs.Rectangle(-30,16.4,860,1533.7), new cjs.Rectangle(-30,16,860,1534), new cjs.Rectangle(-30,15.7,860,1534.4), new cjs.Rectangle(-30,15.4,860,1534.7), new cjs.Rectangle(-30,15,860,1535), new cjs.Rectangle(-30,15.4,860,1534.7), new cjs.Rectangle(-30,15.7,860,1534.4), new cjs.Rectangle(-30,16,860,1534), new cjs.Rectangle(-30,16.4,860,1533.7), new cjs.Rectangle(-30,16.7,860,1533.4), new cjs.Rectangle(-30,17,860,1533), new cjs.Rectangle(-30,17.4,860,1532.7), new cjs.Rectangle(-30,17.7,860,1532.4), new cjs.Rectangle(-30,18,860,1532), new cjs.Rectangle(-30,18.4,860,1531.7), new cjs.Rectangle(-30,18.7,860,1531.4), new cjs.Rectangle(-30,19,860,1531), new cjs.Rectangle(-30,19.4,860,1530.7), new cjs.Rectangle(-30,19.7,860,1530.4), new cjs.Rectangle(-30,20,860,1530), new cjs.Rectangle(-30,20.4,860,1529.7), new cjs.Rectangle(-30,20.7,860,1529.4), new cjs.Rectangle(-30,21,860,1529), new cjs.Rectangle(-30,21.4,860,1528.7), new cjs.Rectangle(-30,21.7,860,1528.4), new cjs.Rectangle(-30,22,860,1528), new cjs.Rectangle(-30,22.4,860,1527.7), new cjs.Rectangle(-30,22.7,860,1527.4), new cjs.Rectangle(-30,23,860,1527), new cjs.Rectangle(-30,23.4,860,1526.7), new cjs.Rectangle(-30,23.7,860,1526.4), new cjs.Rectangle(-30,24,860,1526), new cjs.Rectangle(-30,24.4,860,1525.7), new cjs.Rectangle(-30,24.7,860,1525.4), new cjs.Rectangle(-30,25,860,1525)];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":179});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,510);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(63).to({scaleX:0.63,scaleY:0.63},0).to({scaleX:1.13,scaleY:1.13,y:510},10).to({scaleX:1,scaleY:1},10).wait(15).to({y:700},10).wait(71));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_mc.setTransform(400,540);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(43).to({y:500},16).to({y:540},4).wait(45).to({y:1000},15).wait(56));

	// decor
	this.instance = new lib.thoughts_hero_2_mc();
	this.instance.setTransform(380,355);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({alpha:1},10).wait(46));

	// hero
	this.hero_2 = new lib.hero_2_body_makeup_mc();
	this.hero_2.setTransform(430,323);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1300},0).wait(18).to({x:380},20).to({x:430},5).wait(65).to({x:600},15).wait(56));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({alpha:1},19).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,33.5,880,756.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-40,33.5,1588.5,1216.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-40,33.5,1542.5,1216.6), new cjs.Rectangle(-40,33.5,1496.5,1216.6), new cjs.Rectangle(-40,33.5,1450.5,1216.6), new cjs.Rectangle(-40,33.5,1404.5,1216.6), new cjs.Rectangle(-40,33.5,1358.5,1216.6), new cjs.Rectangle(-40,33.5,1312.5,1216.6), new cjs.Rectangle(-40,33.5,1266.5,1216.6), new cjs.Rectangle(-40,33.5,1220.5,1216.6), new cjs.Rectangle(-40,33.5,1174.5,1216.6), new cjs.Rectangle(-40,33.5,1128.5,1216.6), new cjs.Rectangle(-40,33.5,1082.5,1216.6), new cjs.Rectangle(-40,33.5,1036.5,1216.6), new cjs.Rectangle(-40,33.5,990.5,1216.6), new cjs.Rectangle(-40,33.5,944.5,1216.6), new cjs.Rectangle(-40,33.5,898.5,1216.6), rect=new cjs.Rectangle(-40,33.5,880,1216.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-40,33.5,880,1185.3), new cjs.Rectangle(-40,33.5,880,1154.1), new cjs.Rectangle(-40,33.5,880,1122.8), new cjs.Rectangle(-40,33.5,880,1091.6), new cjs.Rectangle(-40,33.5,880,1060.3), new cjs.Rectangle(-40,33.5,880,1029.1), new cjs.Rectangle(-40,33.5,880,997.8), new cjs.Rectangle(-40,33.5,880,966.6), new cjs.Rectangle(-40,33.5,880,935.3), new cjs.Rectangle(-40,33.5,880,904.1), new cjs.Rectangle(-40,33.5,880,872.8), new cjs.Rectangle(-40,33.5,880,841.6), new cjs.Rectangle(-40,33.5,880,810.3), new cjs.Rectangle(-40,33.5,880,779.1), new cjs.Rectangle(-40,33.5,880,756.5), new cjs.Rectangle(-40,33.5,880,756.6), new cjs.Rectangle(-40,33.5,880,756.5), new cjs.Rectangle(-40,33.5,880,756.6), new cjs.Rectangle(-40,33.5,880,756.5), rect=new cjs.Rectangle(-40,33.5,880,756.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,800), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,830.7), new cjs.Rectangle(-210,-10,1220,861.4), new cjs.Rectangle(-210,-10,1220,892), new cjs.Rectangle(-210,-10,1220,922.7), new cjs.Rectangle(-210,-10,1220,953.4), new cjs.Rectangle(-210,-10,1220,984), new cjs.Rectangle(-210,-10,1220,1014.7), new cjs.Rectangle(-210,-10,1220,1045.4), new cjs.Rectangle(-210,-10,1220,1076), new cjs.Rectangle(-210,-10,1220,1106.7), new cjs.Rectangle(-210,-10,1220,1137.4), new cjs.Rectangle(-210,-10,1220,1168), new cjs.Rectangle(-210,-10,1220,1198.7), new cjs.Rectangle(-210,-10,1220,1229.4), rect=new cjs.Rectangle(-210,-10,1220,1260), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":269});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,510);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.75,scaleY:0.75},0).to({scaleX:1.13,scaleY:1.13,y:510},10).to({scaleX:1,scaleY:1},10).wait(20).to({y:700},10).wait(171));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(18).to({y:250},26).to({y:300},4).wait(50).to({y:1000},15).wait(156));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(450,320);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:-500},0).wait(18).to({y:370},26).to({y:320},4).wait(40).to({y:315},30).to({y:325},30).to({y:315},30).to({y:325},30).to({y:315},30).to({y:325},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,20,860,830);
p.frameBounds = [rect, rect=new cjs.Rectangle(-30,-761,860,2311), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-30,-727.5,860,2248.7), new cjs.Rectangle(-30,-694.1,860,2186.4), new cjs.Rectangle(-30,-660.6,860,2124.1), new cjs.Rectangle(-30,-627.1,860,2061.8), new cjs.Rectangle(-30,-593.7,860,1999.5), new cjs.Rectangle(-30,-560.2,860,1937.2), new cjs.Rectangle(-30,-526.8,860,1874.9), new cjs.Rectangle(-30,-493.3,860,1812.6), new cjs.Rectangle(-30,-459.8,860,1750.3), new cjs.Rectangle(-30,-426.4,860,1688), new cjs.Rectangle(-30,-392.9,860,1625.6), new cjs.Rectangle(-30,-359.4,860,1563.3), new cjs.Rectangle(-30,-326,860,1501), new cjs.Rectangle(-30,-292.5,860,1438.7), new cjs.Rectangle(-30,-259.1,860,1376.4), new cjs.Rectangle(-30,-225.6,860,1314.1), new cjs.Rectangle(-30,-192.1,860,1251.8), new cjs.Rectangle(-30,-158.7,860,1189.5), new cjs.Rectangle(-30,-125.2,860,1127.2), new cjs.Rectangle(-30,-91.7,860,1064.9), new cjs.Rectangle(-30,-58.3,860,1002.6), new cjs.Rectangle(-30,-24.8,860,940.3), new cjs.Rectangle(-30,8.6,860,878), new cjs.Rectangle(-30,27.7,860,830), new cjs.Rectangle(-30,-1.1,860,830), new cjs.Rectangle(-30,-30,860,830), new cjs.Rectangle(-30,-17.5,860,830), new cjs.Rectangle(-30,-5,860,830), new cjs.Rectangle(-30,7.5,860,830), rect=new cjs.Rectangle(-30,20,860,830), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-30,57.2,860,839.5), new cjs.Rectangle(-30,57,860,886.4), new cjs.Rectangle(-30,56.9,860,933.2), new cjs.Rectangle(-30,56.7,860,980), new cjs.Rectangle(-30,56.5,860,1026.9), new cjs.Rectangle(-30,56.4,860,1073.7), new cjs.Rectangle(-30,56.2,860,1120.5), new cjs.Rectangle(-30,56,860,1167.4), new cjs.Rectangle(-30,55.9,860,1214.2), new cjs.Rectangle(-30,55.7,860,1261), new cjs.Rectangle(-30,55.5,860,1307.9), new cjs.Rectangle(-30,55.4,860,1354.7), new cjs.Rectangle(-30,55.2,860,1401.5), new cjs.Rectangle(-30,55,860,1448.4), new cjs.Rectangle(-30,54.9,860,1495.2), new cjs.Rectangle(-30,54.7,860,1495.4), new cjs.Rectangle(-30,54.5,860,1495.5), new cjs.Rectangle(-30,54.4,860,1495.7), new cjs.Rectangle(-30,54.2,860,1495.9), new cjs.Rectangle(-30,54,860,1496), new cjs.Rectangle(-30,54.4,860,1495.7), new cjs.Rectangle(-30,54.7,860,1495.4), new cjs.Rectangle(-30,55,860,1495), new cjs.Rectangle(-30,55.4,860,1494.7), new cjs.Rectangle(-30,55.7,860,1494.4), new cjs.Rectangle(-30,56,860,1494), new cjs.Rectangle(-30,56.4,860,1493.7), new cjs.Rectangle(-30,56.7,860,1493.4), new cjs.Rectangle(-30,57,860,1493), new cjs.Rectangle(-30,57.4,860,1492.7), new cjs.Rectangle(-30,57.7,860,1492.4), new cjs.Rectangle(-30,58,860,1492), new cjs.Rectangle(-30,58.4,860,1491.7), new cjs.Rectangle(-30,58.7,860,1491.4), new cjs.Rectangle(-30,59,860,1491), new cjs.Rectangle(-30,59.4,860,1490.7), new cjs.Rectangle(-30,59.7,860,1490.4), new cjs.Rectangle(-30,60,860,1490), new cjs.Rectangle(-30,60.4,860,1489.7), new cjs.Rectangle(-30,60.7,860,1489.4), new cjs.Rectangle(-30,61,860,1489), new cjs.Rectangle(-30,61.4,860,1488.7), new cjs.Rectangle(-30,61.7,860,1488.4), new cjs.Rectangle(-30,62,860,1488), new cjs.Rectangle(-30,62.4,860,1487.7), new cjs.Rectangle(-30,62.7,860,1487.4), new cjs.Rectangle(-30,63,860,1487), new cjs.Rectangle(-30,63.4,860,1486.7), new cjs.Rectangle(-30,63.7,860,1486.4), new cjs.Rectangle(-30,64,860,1486), new cjs.Rectangle(-30,63.7,860,1486.4), new cjs.Rectangle(-30,63.4,860,1486.7), new cjs.Rectangle(-30,63,860,1487), new cjs.Rectangle(-30,62.7,860,1487.4), new cjs.Rectangle(-30,62.4,860,1487.7), new cjs.Rectangle(-30,62,860,1488), new cjs.Rectangle(-30,61.7,860,1488.4), new cjs.Rectangle(-30,61.4,860,1488.7), new cjs.Rectangle(-30,61,860,1489), new cjs.Rectangle(-30,60.7,860,1489.4), new cjs.Rectangle(-30,60.4,860,1489.7), new cjs.Rectangle(-30,60,860,1490), new cjs.Rectangle(-30,59.7,860,1490.4), new cjs.Rectangle(-30,59.4,860,1490.7), new cjs.Rectangle(-30,59,860,1491), new cjs.Rectangle(-30,58.7,860,1491.4), new cjs.Rectangle(-30,58.4,860,1491.7), new cjs.Rectangle(-30,58,860,1492), new cjs.Rectangle(-30,57.7,860,1492.4), new cjs.Rectangle(-30,57.4,860,1492.7), new cjs.Rectangle(-30,57,860,1493), new cjs.Rectangle(-30,56.7,860,1493.4), new cjs.Rectangle(-30,56.4,860,1493.7), new cjs.Rectangle(-30,56,860,1494), new cjs.Rectangle(-30,55.7,860,1494.4), new cjs.Rectangle(-30,55.4,860,1494.7), new cjs.Rectangle(-30,55,860,1495), new cjs.Rectangle(-30,54.7,860,1495.4), new cjs.Rectangle(-30,54.4,860,1495.7), new cjs.Rectangle(-30,54,860,1496), new cjs.Rectangle(-30,54.4,860,1495.7), new cjs.Rectangle(-30,54.7,860,1495.4), new cjs.Rectangle(-30,55,860,1495), new cjs.Rectangle(-30,55.4,860,1494.7), new cjs.Rectangle(-30,55.7,860,1494.4), new cjs.Rectangle(-30,56,860,1494), new cjs.Rectangle(-30,56.4,860,1493.7), new cjs.Rectangle(-30,56.7,860,1493.4), new cjs.Rectangle(-30,57,860,1493), new cjs.Rectangle(-30,57.4,860,1492.7), new cjs.Rectangle(-30,57.7,860,1492.4), new cjs.Rectangle(-30,58,860,1492), new cjs.Rectangle(-30,58.4,860,1491.7), new cjs.Rectangle(-30,58.7,860,1491.4), new cjs.Rectangle(-30,59,860,1491), new cjs.Rectangle(-30,59.4,860,1490.7), new cjs.Rectangle(-30,59.7,860,1490.4), new cjs.Rectangle(-30,60,860,1490), new cjs.Rectangle(-30,60.4,860,1489.7), new cjs.Rectangle(-30,60.7,860,1489.4), new cjs.Rectangle(-30,61,860,1489), new cjs.Rectangle(-30,61.4,860,1488.7), new cjs.Rectangle(-30,61.7,860,1488.4), new cjs.Rectangle(-30,62,860,1488), new cjs.Rectangle(-30,62.4,860,1487.7), new cjs.Rectangle(-30,62.7,860,1487.4), new cjs.Rectangle(-30,63,860,1487), new cjs.Rectangle(-30,63.4,860,1486.7), new cjs.Rectangle(-30,63.7,860,1486.4), new cjs.Rectangle(-30,64,860,1486), new cjs.Rectangle(-30,63.7,860,1486.4), new cjs.Rectangle(-30,63.4,860,1486.7), new cjs.Rectangle(-30,63,860,1487), new cjs.Rectangle(-30,62.7,860,1487.4), new cjs.Rectangle(-30,62.4,860,1487.7), new cjs.Rectangle(-30,62,860,1488), new cjs.Rectangle(-30,61.7,860,1488.4), new cjs.Rectangle(-30,61.4,860,1488.7), new cjs.Rectangle(-30,61,860,1489), new cjs.Rectangle(-30,60.7,860,1489.4), new cjs.Rectangle(-30,60.4,860,1489.7), new cjs.Rectangle(-30,60,860,1490), new cjs.Rectangle(-30,59.7,860,1490.4), new cjs.Rectangle(-30,59.4,860,1490.7), new cjs.Rectangle(-30,59,860,1491), new cjs.Rectangle(-30,58.7,860,1491.4), new cjs.Rectangle(-30,58.4,860,1491.7), new cjs.Rectangle(-30,58,860,1492), new cjs.Rectangle(-30,57.7,860,1492.4), new cjs.Rectangle(-30,57.4,860,1492.7), new cjs.Rectangle(-30,57,860,1493), new cjs.Rectangle(-30,56.7,860,1493.4), new cjs.Rectangle(-30,56.4,860,1493.7), new cjs.Rectangle(-30,56,860,1494), new cjs.Rectangle(-30,55.7,860,1494.4), new cjs.Rectangle(-30,55.4,860,1494.7), new cjs.Rectangle(-30,55,860,1495), new cjs.Rectangle(-30,54.7,860,1495.4), new cjs.Rectangle(-30,54.4,860,1495.7), new cjs.Rectangle(-30,54,860,1496), new cjs.Rectangle(-30,54.4,860,1495.7), new cjs.Rectangle(-30,54.7,860,1495.4), new cjs.Rectangle(-30,55,860,1495), new cjs.Rectangle(-30,55.4,860,1494.7), new cjs.Rectangle(-30,55.7,860,1494.4), new cjs.Rectangle(-30,56,860,1494), new cjs.Rectangle(-30,56.4,860,1493.7), new cjs.Rectangle(-30,56.7,860,1493.4), new cjs.Rectangle(-30,57,860,1493), new cjs.Rectangle(-30,57.4,860,1492.7), new cjs.Rectangle(-30,57.7,860,1492.4), new cjs.Rectangle(-30,58,860,1492), new cjs.Rectangle(-30,58.4,860,1491.7), new cjs.Rectangle(-30,58.7,860,1491.4), new cjs.Rectangle(-30,59,860,1491), new cjs.Rectangle(-30,59.4,860,1490.7), new cjs.Rectangle(-30,59.7,860,1490.4), new cjs.Rectangle(-30,60,860,1490), new cjs.Rectangle(-30,60.4,860,1489.7), new cjs.Rectangle(-30,60.7,860,1489.4), new cjs.Rectangle(-30,61,860,1489), new cjs.Rectangle(-30,61.4,860,1488.7), new cjs.Rectangle(-30,61.7,860,1488.4), new cjs.Rectangle(-30,62,860,1488), new cjs.Rectangle(-30,62.4,860,1487.7), new cjs.Rectangle(-30,62.7,860,1487.4), new cjs.Rectangle(-30,63,860,1487), new cjs.Rectangle(-30,63.4,860,1486.7), new cjs.Rectangle(-30,63.7,860,1486.4), new cjs.Rectangle(-30,64,860,1486)];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":179});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,510);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(63).to({scaleX:0.63,scaleY:0.63},0).to({scaleX:1.13,scaleY:1.13,y:510},10).to({scaleX:1,scaleY:1},10).wait(15).to({y:700},10).wait(71));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(400,540);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(43).to({y:500},16).to({y:540},4).wait(45).to({y:1000},15).wait(56));

	// decor
	this.instance = new lib.thoughts_hero_1_mc();
	this.instance.setTransform(500,170);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({alpha:1},10).wait(46));

	// hero
	this.hero_1 = new lib.hero_1_makeup_mc();
	this.hero_1.setTransform(400,355);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-500},0).wait(18).to({x:450},20).to({x:400},5).wait(65).to({x:300},15).wait(56));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({alpha:1},19).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,93,880,697);
p.frameBounds = [rect, rect=new cjs.Rectangle(-717.5,93,1557.5,1157), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-670,93,1510,1157), new cjs.Rectangle(-622.5,93,1462.5,1157), new cjs.Rectangle(-575,93,1415,1157), new cjs.Rectangle(-527.5,93,1367.5,1157), new cjs.Rectangle(-480,93,1320,1157), new cjs.Rectangle(-432.5,93,1272.5,1157), new cjs.Rectangle(-385,93,1225,1157), new cjs.Rectangle(-337.5,93,1177.5,1157), new cjs.Rectangle(-290,93,1130,1157), new cjs.Rectangle(-242.5,93,1082.5,1157), new cjs.Rectangle(-195,93,1035,1157), new cjs.Rectangle(-147.5,93,987.5,1157), new cjs.Rectangle(-100,93,940,1157), new cjs.Rectangle(-52.5,93,892.5,1157), rect=new cjs.Rectangle(-40,93,880,1157), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-40,93,880,1125.8), new cjs.Rectangle(-40,93,880,1094.5), new cjs.Rectangle(-40,93,880,1063.3), new cjs.Rectangle(-40,93,880,1032), new cjs.Rectangle(-40,93,880,1000.8), new cjs.Rectangle(-40,93,880,969.5), new cjs.Rectangle(-40,93,880,938.3), new cjs.Rectangle(-40,93,880,907), new cjs.Rectangle(-40,93,880,875.8), new cjs.Rectangle(-40,93,880,844.5), new cjs.Rectangle(-40,93,880,813.3), new cjs.Rectangle(-40,93,880,782), new cjs.Rectangle(-40,93,880,750.8), new cjs.Rectangle(-40,93,880,719.5), rect=new cjs.Rectangle(-40,93,880,697), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,800), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,830.7), new cjs.Rectangle(-210,-10,1220,861.4), new cjs.Rectangle(-210,-10,1220,892), new cjs.Rectangle(-210,-10,1220,922.7), new cjs.Rectangle(-210,-10,1220,953.4), new cjs.Rectangle(-210,-10,1220,984), new cjs.Rectangle(-210,-10,1220,1014.7), new cjs.Rectangle(-210,-10,1220,1045.4), new cjs.Rectangle(-210,-10,1220,1076), new cjs.Rectangle(-210,-10,1220,1106.7), new cjs.Rectangle(-210,-10,1220,1137.4), new cjs.Rectangle(-210,-10,1220,1168), new cjs.Rectangle(-210,-10,1220,1198.7), new cjs.Rectangle(-210,-10,1220,1229.4), rect=new cjs.Rectangle(-210,-10,1220,1260), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":139});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(80,520);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(53).to({y:520},10).to({scaleX:1.06,scaleY:1.06},5).to({scaleX:1,scaleY:1},5).wait(15).to({y:700},10).wait(41));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-600,y:600},0).wait(18).to({x:20,y:-20},31).to({x:0,y:0},4).wait(45).to({y:600},15).wait(26));

	// decor
	this.shine_mc = new lib.shine_1_1_mc();
	this.shine_mc.setTransform(689.7,421.3);

	this.shine_mc_1 = new lib.shine_1_7_mc();
	this.shine_mc_1.setTransform(109.4,235.6);

	this.shine_mc_2 = new lib.shine_1_6_mc();
	this.shine_mc_2.setTransform(431.4,552);

	this.shine_mc_3 = new lib.shine_1_5_mc();
	this.shine_mc_3.setTransform(709.4,233.6);

	this.shine_mc_4 = new lib.shine_1_2_mc();
	this.shine_mc_4.setTransform(400.4,18.7);

	this.shine_mc_5 = new lib.shine_1_1_mc();
	this.shine_mc_5.setTransform(202.1,65.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shine_mc_5},{t:this.shine_mc_4},{t:this.shine_mc_3},{t:this.shine_mc_2},{t:this.shine_mc_1},{t:this.shine_mc}]},89).wait(51));

	// hero
	this.hero_3 = new lib.hero_pool_mc();
	this.hero_3.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,610);
p.frameBounds = [rect, rect=new cjs.Rectangle(-590,0,1590,1190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-570,0,1570,1170), new cjs.Rectangle(-550,0,1550,1150), new cjs.Rectangle(-530,0,1530,1130), new cjs.Rectangle(-510,0,1510,1110), new cjs.Rectangle(-490,0,1490,1090), new cjs.Rectangle(-470,0,1470,1070), new cjs.Rectangle(-450,0,1450,1050), new cjs.Rectangle(-430,0,1430,1030), new cjs.Rectangle(-410,0,1410,1010), new cjs.Rectangle(-390,0,1390,990), new cjs.Rectangle(-370,0,1370,970), new cjs.Rectangle(-350,0,1350,950), new cjs.Rectangle(-330,0,1330,930), new cjs.Rectangle(-310,0,1310,910), new cjs.Rectangle(-290,0,1290,890), new cjs.Rectangle(-270,0,1270,870), new cjs.Rectangle(-250,0,1250,850), new cjs.Rectangle(-230,0,1230,830), new cjs.Rectangle(-210,0,1210,810), rect=new cjs.Rectangle(-200,0,1200,790), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,772), new cjs.Rectangle(-200,0,1200,754), new cjs.Rectangle(-200,0,1200,736), new cjs.Rectangle(-200,0,1200,718), new cjs.Rectangle(-200,0,1200,700), new cjs.Rectangle(-200,0,1200,682), new cjs.Rectangle(-200,0,1200,664), new cjs.Rectangle(-200,0,1200,646), new cjs.Rectangle(-200,0,1200,628), new cjs.Rectangle(-200,0,1200,610), new cjs.Rectangle(-200,0,1200,611.1), new cjs.Rectangle(-200,0,1200,612.3), new cjs.Rectangle(-200,0,1200,613.4), new cjs.Rectangle(-200,0,1200,614.5), new cjs.Rectangle(-200,0,1200,615.6), new cjs.Rectangle(-200,0,1200,614.5), new cjs.Rectangle(-200,0,1200,613.4), new cjs.Rectangle(-200,0,1200,612.3), new cjs.Rectangle(-200,0,1200,611.1), rect=new cjs.Rectangle(-200,0,1200,610), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,628), new cjs.Rectangle(-200,0,1200,646), new cjs.Rectangle(-200,0,1200,664), new cjs.Rectangle(-200,0,1200,682), new cjs.Rectangle(-200,0,1200,700), new cjs.Rectangle(-200,0,1200,718), new cjs.Rectangle(-200,0,1200,736), new cjs.Rectangle(-200,0,1200,754), new cjs.Rectangle(-200,0,1200,772), rect=new cjs.Rectangle(-200,0,1200,790), rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,830), new cjs.Rectangle(-200,0,1200,870), new cjs.Rectangle(-200,0,1200,910), new cjs.Rectangle(-200,0,1200,950), new cjs.Rectangle(-200,0,1200,990), new cjs.Rectangle(-200,0,1200,1030), new cjs.Rectangle(-200,0,1200,1070), new cjs.Rectangle(-200,0,1200,1110), new cjs.Rectangle(-200,0,1200,1150), rect=new cjs.Rectangle(-200,0,1200,1190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
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
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.back_shadow_img();
	this.instance.setTransform(89.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// hero_1
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(590,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({scaleX:0.7,scaleY:0.7,x:540,y:300},0).wait(1));

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(240,325);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({scaleX:0.7,scaleY:0.7,x:295,y:315},0).wait(1));

	// hero_3
	this.hero_3 = new lib.hero_pool_mc();
	this.hero_3.setTransform(0,0,1,1,0,0,0,-400,-300);
	this.hero_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({_off:false},0).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,600.1)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.anim_hero_1_main_mc();
	this.instance.setTransform(590,310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.anim_hero_2_main_mc();
	this.instance_1.setTransform(250,320);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(78,33,716.5,573.5);
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
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(110,40,0.909,0.909);

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
	this.credits_btn.setTransform(60,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc},{t:this.instance}]}).wait(1));

	// title
	this.instance_1 = new lib.animation_title_mc();
	this.instance_1.setTransform(400,440);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.wave_mc();
	this.instance_2.setTransform(1001,601);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// heroes
	this.instance_3 = new lib.heroes_0_mc();
	this.instance_3.setTransform(397.3,301.5,1,1,0,0,0,397.3,301.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// decor
	this.instance_4 = new lib.lower_shadow_mc();
	this.instance_4.setTransform(-200,400);
	this.instance_4.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_5 = new lib.background_1_img();
	this.instance_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1263.7,1364.4);
p.frameBounds = [rect];


(lib.quest_7_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-329.4,860,1179.4);
p.frameBounds = [rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-329.4,880,1119.4);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-329.4,860,1179.4);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-40,-329.4,880,1119.4);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,929.4);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.LocationScreen_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
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
	this.body_mc = new lib.quest_6_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
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
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
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
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,520);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,520);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(720,300);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(80,300);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.social_network_mc}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.012;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();
	this.photoContainer_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

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
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();

	this.instance_9 = new lib.LocationScreen_6();
	this.instance_9.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_10 = new lib.LocationScreen_7();

	this.instance_11 = new lib.RedirectScreen();

	this.instance_12 = new lib.ResultScreen();
	this.instance_12.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_13 = new lib.InstructionScreen();

	this.instance_14 = new lib.Glitter_2();
	this.instance_14.setTransform(500,50);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,80);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_15 = new lib.FlashAnimation();
	this.instance_15.setTransform(150,280);

	this.instance_16 = new lib.TrackMove_2();
	this.instance_16.setTransform(350,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.instance_17 = new lib.TrackMove();
	this.instance_17.setTransform(270,50);

	this.instance_18 = new lib.Cursor();
	this.instance_18.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_19 = new lib.OrientationLockScreen();

	this.instance_20 = new lib.CurtainScreen();

	this.instance_21 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_18},{t:this.instance_17},{t:this.gravity_explosion_comp},{t:this.instance_16},{t:this.instance_15},{t:this.next_btn},{t:this.instance_14}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[]},1).to({state:[{t:this.instance_21}]},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1263.7,1360.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,740), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(0,-10,810,440), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-200,-600,1200,1800), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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