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
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600],[639,602,637,632],[0,602,637,632]]},
		{name:"storage_atlas_6", frames: [[639,0,600,600],[0,0,637,632],[432,634,480,536],[0,634,430,600]]},
		{name:"storage_atlas_7", frames: [[461,659,459,455],[0,724,459,455],[422,202,459,455],[0,0,1200,200],[0,202,420,520]]},
		{name:"storage_atlas_8", frames: [[0,792,410,410],[771,564,410,410],[0,394,446,396],[0,0,463,392],[448,564,321,532],[465,0,640,280],[465,282,640,280]]},
		{name:"storage_atlas_9", frames: [[0,824,410,410],[0,0,410,410],[0,412,410,410],[412,402,233,659],[882,430,233,659],[647,430,233,659],[814,0,367,428],[412,0,400,400]]},
		{name:"storage_atlas_10", frames: [[0,0,390,390],[392,392,390,390],[784,392,390,390],[392,784,390,390],[784,0,390,390],[392,0,390,390],[0,784,390,390],[0,392,390,390],[784,784,390,390]]},
		{name:"storage_atlas_11", frames: [[784,383,500,300],[784,0,396,381],[0,0,390,390],[0,392,390,390],[0,784,390,390],[392,0,390,390],[774,685,380,380],[392,392,380,380]]},
		{name:"storage_atlas_12", frames: [[262,0,300,440],[881,0,335,375],[0,542,363,385],[365,442,347,365],[475,809,374,314],[564,0,315,401],[881,377,364,340],[0,0,260,540],[851,719,223,498],[0,929,473,291]]},
		{name:"storage_atlas_13", frames: [[273,698,354,275],[629,629,300,300],[575,975,300,300],[304,0,380,260],[877,931,300,300],[931,604,300,300],[811,0,300,300],[811,302,300,300],[0,360,313,336],[315,262,235,402],[0,698,271,386],[552,262,257,365],[0,0,302,358],[273,975,300,307]]},
		{name:"storage_atlas_14", frames: [[0,0,300,300],[302,0,300,300],[481,697,325,244],[0,302,309,263],[1094,0,168,474],[311,302,168,474],[832,327,168,474],[1002,476,260,303],[481,378,251,317],[604,0,226,376],[832,0,260,325],[808,803,320,240],[644,1045,320,240],[322,943,320,240],[0,1020,320,240],[966,1045,320,240],[0,778,320,240]]},
		{name:"storage_atlas_15", frames: [[609,562,240,240],[872,262,240,240],[705,1057,220,220],[273,1077,220,220],[927,1057,220,220],[322,755,190,320],[0,968,271,271],[514,804,240,222],[966,0,271,260],[644,242,226,318],[756,804,199,251],[872,504,199,251],[514,1028,189,259],[322,484,285,269],[0,0,320,240],[0,242,320,240],[0,726,320,240],[322,0,320,240],[0,484,320,240],[322,242,320,240],[644,0,320,240],[1114,262,181,284],[957,757,170,291]]},
		{name:"storage_atlas_16", frames: [[444,850,190,190],[222,222,220,220],[0,222,220,220],[444,0,220,220],[222,0,220,220],[0,0,220,220],[0,444,220,220],[0,666,220,220],[0,888,220,220],[666,0,220,220],[888,0,220,220],[1110,0,117,326],[1102,1000,169,201],[0,1110,266,174],[694,444,224,206],[444,444,248,191],[268,1110,226,167],[444,637,212,211],[850,652,164,216],[880,870,164,216],[1016,652,213,166],[920,444,189,206],[880,1088,220,160],[496,1042,190,190],[1111,328,186,188],[1046,820,194,178],[636,850,190,190],[688,1042,190,190],[658,652,190,190],[888,222,220,220],[222,666,220,220],[222,888,220,220],[444,222,220,220],[222,444,220,220],[666,222,220,220]]},
		{name:"storage_atlas_17", frames: [[194,176,180,180],[1130,1059,160,160],[892,1117,160,160],[968,955,160,160],[0,342,180,180],[1200,566,100,279],[182,358,114,272],[0,731,139,197],[403,0,168,193],[968,812,196,141],[0,1037,238,111],[566,355,156,188],[920,447,156,188],[762,322,156,188],[0,1150,196,133],[846,637,120,244],[724,512,120,244],[1078,566,120,244],[762,182,223,138],[1106,213,158,190],[1119,0,150,211],[0,167,192,173],[207,0,194,174],[459,545,159,182],[298,362,159,182],[298,546,159,182],[797,883,169,155],[656,758,139,193],[407,1040,260,100],[198,1200,260,100],[0,955,340,80],[573,182,187,171],[1106,405,186,159],[573,0,180,180],[987,182,117,263],[459,729,195,140],[151,632,143,202],[240,1040,165,158],[483,871,165,158],[376,195,188,165],[0,524,149,205],[937,0,180,180],[755,0,180,180],[460,1142,430,60],[0,0,205,165],[141,871,340,80],[1166,847,122,210]]},
		{name:"storage_atlas_18", frames: [[142,1147,120,120],[1172,1061,120,120],[903,369,142,124],[759,398,142,124],[1116,224,142,124],[764,650,142,124],[759,272,142,124],[908,495,142,124],[903,243,142,124],[764,524,142,124],[189,791,135,131],[622,272,135,131],[490,687,135,131],[326,829,135,131],[627,552,135,131],[655,139,135,131],[627,685,135,131],[107,924,135,131],[518,133,135,131],[353,696,135,131],[928,1106,120,120],[1038,974,120,120],[1050,1096,120,120],[806,1106,120,120],[806,974,114,130],[922,974,114,130],[1160,929,114,130],[908,621,158,111],[353,556,135,138],[0,164,156,154],[488,318,132,145],[622,952,130,127],[0,466,122,188],[1052,432,119,147],[0,320,162,144],[0,656,105,215],[869,0,105,215],[0,873,105,215],[271,556,80,233],[107,656,80,233],[189,556,80,233],[408,962,80,221],[244,924,80,221],[326,962,80,221],[340,140,174,124],[0,0,153,162],[976,82,138,159],[1173,432,124,120],[480,465,220,85],[1160,813,138,114],[316,318,170,117],[518,0,181,131],[316,437,162,117],[622,1081,129,119],[908,734,165,106],[490,552,135,133],[976,0,280,80],[1047,350,220,80],[164,318,150,142],[754,908,50,297],[155,0,187,132],[1116,82,140,140],[158,134,180,120],[701,0,166,137],[344,0,172,138],[1068,581,176,98],[764,776,130,130],[463,829,130,130],[1075,681,130,130],[595,820,130,130],[896,842,130,130],[490,1093,130,130],[490,961,130,130],[1028,842,130,130],[0,1090,140,140],[158,266,430,50]]},
		{name:"storage_atlas_19", frames: [[0,0,120,120],[971,0,50,50],[971,52,50,50],[859,793,86,59],[222,755,86,59],[310,755,86,59],[0,765,86,59],[662,779,86,59],[398,755,86,59],[88,765,86,59],[574,769,86,59],[486,755,86,59],[122,0,120,120],[176,816,60,82],[299,816,61,80],[362,816,61,80],[750,759,60,83],[238,816,59,83],[947,793,60,83],[0,868,90,50],[540,872,90,50],[454,262,48,48],[925,561,48,48],[324,498,160,55],[162,498,160,55],[0,482,160,55],[141,662,139,48],[492,620,139,48],[0,662,139,48],[633,620,100,65],[956,115,66,172],[421,122,89,138],[955,415,63,144],[486,498,160,55],[648,498,160,55],[0,539,109,78],[810,533,113,77],[828,455,125,76],[364,262,88,122],[575,212,30,15],[344,386,30,15],[575,229,30,15],[376,386,30,15],[408,386,30,15],[657,392,30,15],[655,844,113,40],[425,816,113,40],[0,826,113,40],[540,830,113,40],[770,854,113,40],[425,858,113,40],[365,597,125,63],[771,612,125,63],[238,597,125,63],[643,555,126,63],[515,555,126,63],[111,597,125,63],[849,0,120,113],[512,122,124,88],[732,0,115,124],[849,115,105,126],[107,122,105,126],[0,122,105,126],[607,212,28,12],[607,226,28,12],[719,392,28,12],[545,232,28,12],[545,212,28,18],[689,392,28,12],[0,619,107,37],[885,878,107,37],[632,886,107,37],[299,898,107,37],[92,900,107,37],[741,896,107,37],[282,702,109,51],[859,740,109,51],[859,687,109,51],[0,712,109,51],[111,712,109,51],[393,702,109,51],[928,289,80,124],[244,0,120,120],[0,250,180,60],[182,252,180,60],[694,250,180,60],[512,250,180,60],[638,188,180,60],[638,126,180,60],[735,677,80,80],[504,670,80,80],[282,670,220,30],[726,456,40,40],[408,900,40,55],[828,408,40,43],[820,166,10,11],[785,312,69,94],[898,612,100,73],[115,826,57,60],[556,312,99,100],[820,126,23,38],[512,212,31,31],[970,687,50,50],[817,677,40,147],[876,243,50,210],[450,900,40,40],[850,917,40,40],[768,456,40,40],[222,712,40,40],[970,739,40,40],[201,901,40,40],[176,765,40,40],[243,901,40,40],[492,900,40,40],[975,561,40,40],[657,312,126,78],[586,687,80,80],[366,0,120,120],[488,0,120,120],[318,122,101,128],[668,687,65,90],[214,122,102,128],[102,314,240,40],[102,356,240,40],[242,456,240,40],[102,398,240,40],[344,414,240,40],[586,414,240,40],[0,440,240,40],[484,456,240,40],[313,555,200,40],[111,555,200,40],[0,312,100,100],[454,312,100,100],[610,0,120,120]]}
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
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bam_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.check_blush_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.check_hairstyle_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.check_lips_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.check_shadows_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.check_skin_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.closet_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.closet_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.closet_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.closet_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.closet_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.closet_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.closet_lips7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.closet_lips8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.closet_lips9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.closet_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.closet_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.closet_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.closet_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.closet_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.closet_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.closet_rouge7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.closet_rouge8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.closet_shadow10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.closet_shadow1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.closet_shadow2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.closet_shadow3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.closet_shadow4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.closet_shadow5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.closet_shadow6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.closet_shadow7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.closet_shadow8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.closet_shadow9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_location_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_location_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.current_location_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_location_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.current_location_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
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
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.egg1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.egg2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.egg3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.egg4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.egg5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.egg6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eggs_rule_world_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.h1_body11_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.h1_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.h1_body21_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.h1_body2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.h1_body31_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.h1_body3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.h1_e1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.h1_e2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.h1_e3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.h2_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.h2_body2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.h2_body3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.h2_e1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.h2_e2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.h2_e3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.h2_head12_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.h2_head22_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.h2_head32_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hanger_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.happy_hare_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_b1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_b2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_b3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag1back_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag1front_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag2back_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag2front_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag3front_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag4front_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag5back_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag5front_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag6back_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag6front_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head21_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head31_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hint_find_panel_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hint_find_panel_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hint_find_panel_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hint_find_panel_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.pointing_finger_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_12_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.quest_item_9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.set_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.set_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.set_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.set_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.set_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.set_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.set_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.set_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.shadow_nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.shelf_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.skin_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.skin_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.skin_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.skin_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.skin_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.skin_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.stick_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.under1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.under22_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.under2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.vk_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-170,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-40,340,80);
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
	this.shape.setTransform(400,300,1.167,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,0,1400,600);
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


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-215,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-300,430,600);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-210,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-260,420,520);
p.frameBounds = [rect];


(lib.under2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.under1_img();
	this.instance.setTransform(-61.1,-104.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.1,-104.2,122,210);
p.frameBounds = [rect];


(lib.under1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.under22_img();
	this.instance.setTransform(-65.2,-102.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.2,-102.1,130.3,204.5);
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


(lib.text_bubble5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text_bubble5_img();
	this.instance.setTransform(-50.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-64,102,128);
p.frameBounds = [rect];


(lib.text_bubble4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text_bubble4_img();
	this.instance.setTransform(-32.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-45,65,90);
p.frameBounds = [rect];


(lib.text_bubble3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text_bubble3_img();
	this.instance.setTransform(-102.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-82.5,205,165);
p.frameBounds = [rect];


(lib.text_bubble2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text_bubble2_img();
	this.instance.setTransform(-50.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-64,101,128);
p.frameBounds = [rect];


(lib.text_bubble1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text_bubble1_img();
	this.instance.setTransform(-236.5,-145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-236.5,-145.5,473,291);
p.frameBounds = [rect];


(lib.stick_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stick_2_img();
	this.instance.setTransform(-215,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-25,430,50);
p.frameBounds = [rect];


(lib.shelf_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_2_img();
	this.instance.setTransform(-215,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-30,430,60);
p.frameBounds = [rect];


(lib.shadow_nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_nav_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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


(lib.set_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_4_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.set_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_3_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.set_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_2_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.set_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_1_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
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


(lib.set_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_0_4_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.set_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_0_3_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.set_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_0_2_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.set_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_0_1_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.quest_item_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.quest_item_12_img();
	this.instance.setTransform(-83,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,-68.5,166,137);
p.frameBounds = [rect];


(lib.quest_item_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.quest_item_11_img();
	this.instance.setTransform(-58.5,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqZNXMAHvgjFINEBcMgBCAofIuLBig");
	this.shape.setTransform(-2.2,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.8,-136.6,133.4,278.3);
p.frameBounds = [rect];


(lib.quest_item_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.quest_item_10_img();
	this.instance.setTransform(-111.5,-249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgM+AoOMgF1g4BIDd3kILJg8IXBKwMgMdBF2g");
	this.shape.setTransform(-1.3,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.7,-255.3,240.9,516);
p.frameBounds = [rect];


(lib.quest_item_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.quest_item_8_img();
	this.instance.setTransform(-74.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuRprILCorIRiKGIl2aWIxzARg");
	this.shape.setTransform(-1.1,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.6,-121.4,183,235.1);
p.frameBounds = [rect];


(lib.quest_item_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.quest_item_7_img();
	this.instance.setTransform(-94,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AonMFImOn4IARp5IPdoiIFqANIITNTIAAJaIsBFjg");
	this.shape.setTransform(2,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-88.4,191,182.4);
p.frameBounds = [rect];


(lib.quest_item_3_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.quest_item_9_img();
	this.instance.setTransform(-130,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A2UnRIE1t2IJtlhIQPglIJzI4IEFMkMgSGAgwIp3APg");
	this.shape.setTransform(2.5,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-173.9,286,348.5);
p.frameBounds = [rect];


(lib.qi5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.quest_item_5_img();
	this.instance.setTransform(-71.5,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsztCILtlBINKUAIAwNpIimCbIvzADg");
	this.shape.setTransform(-0.3,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.3,-118.4,164.1,231.4);
p.frameBounds = [rect];


(lib.qi4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.quest_item_4_img();
	this.instance.setTransform(-63,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmSJHIl8mlIBcnAIKRkoIMwEhIgiIIImqFkg");
	this.shape.setTransform(0.5,-7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.8,-65.6,156.7,116.6);
p.frameBounds = [rect];


(lib.qi3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quest_item_3_img();
	this.instance.setTransform(-88,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-49,176,98);
p.frameBounds = [rect];


(lib.qi2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quest_item_2_img();
	this.instance.setTransform(-86,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-69,172,138);
p.frameBounds = [rect];


(lib.qi1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.quest_item_1_img();
	this.instance.setTransform(-97.5,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxgjWIS+o/IPmBhIAdJpIqTNcIzyAEg");
	this.shape.setTransform(-7.4,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.5,-81,224.4,158);
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


(lib.oi4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.quest_item_6_img();
	this.instance.setTransform(-100,-94);

	this.instance_1 = new lib.quest_item_6_1_img();
	this.instance_1.setTransform(-97,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(6));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvQCcIZdxgIFEUzItqJWg");
	this.shape.setTransform(-21,-16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.7,-112.8,195.6,193.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.object_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvnPoQmemfAApJQAApIGemfQGfmeJIAAQJJAAGfGeQGeGfAAJIQAAJJmeGfQmfGepJAAQpIAAmfmeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.5,-141.5,283,283);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
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


(lib.hint_find_panel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_find_panel_2_2_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.hint_find_panel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_find_panel_2_1_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.hint_find_panel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_find_panel_1_2_img();
	this.instance.setTransform(-130,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-50,260,100);
p.frameBounds = [rect];


(lib.hint_find_panel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_find_panel_1_1_img();
	this.instance.setTransform(-130,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-50,260,100);
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


(lib.hero2_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-81,-58.5);

	this.instance_1 = new lib.hero2_top2_img();
	this.instance_1.setTransform(-83,-65);

	this.instance_2 = new lib.hero2_top3_img();
	this.instance_2.setTransform(-86,-72);

	this.instance_3 = new lib.hero2_top4_img();
	this.instance_3.setTransform(-80,-23);

	this.instance_4 = new lib.hero2_top5_img();
	this.instance_4.setTransform(-98,-23);

	this.instance_5 = new lib.hero2_top6_img();
	this.instance_5.setTransform(-82,-72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-58.5,162,117);
p.frameBounds = [rect, new cjs.Rectangle(-83,-65,129,119), new cjs.Rectangle(-86,-72,169,155), new cjs.Rectangle(-80,-23,165,106), new cjs.Rectangle(-98,-23,135,133), new cjs.Rectangle(-82,-72,139,193), null];


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-54.7,-25.4);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-54.7,-25.4);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-54.7,-25.4);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-54.7,-25.4);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-54.7,-25.4);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-54.7,-25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.7,-25.4,109,51);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-53.4,-18.6);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-53.4,-18.6);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-53.4,-18.6);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-53.4,-18.6);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-53.4,-18.6);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-53.4,-18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.4,-18.6,107,37);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-13.8,-6.2);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-13.8,-6.2);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-13.8,-6.2);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-13.8,-6.2);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-13.8,-10.3);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-13.8,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13.8,-6.2,28,12);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-13.8,-10.3,28,18), new cjs.Rectangle(-13.8,-6.2,28,12)];


(lib.hero2_head_all1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_head1_1_img();
	this.instance.setTransform(-78,-94);

	this.instance_1 = new lib.hero1_head1_2_img();
	this.instance_1.setTransform(-78,-94);

	this.instance_2 = new lib.hero1_head1_3_img();
	this.instance_2.setTransform(-78,-94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-94,156,188);
p.frameBounds = [rect, rect, rect];


(lib.hero2_head_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_head1_img();
	this.instance.setTransform(-52.4,-63.2);

	this.instance_1 = new lib.hero2_head2_img();
	this.instance_1.setTransform(-52.4,-63.2);

	this.instance_2 = new lib.hero2_head3_img();
	this.instance_2.setTransform(-52.4,-63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.4,-63.2,105,126);
p.frameBounds = [rect, rect, rect];


(lib.hero2_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-62,-60);

	this.instance_1 = new lib.hero2_hat2_img();
	this.instance_1.setTransform(-123,-35.5);

	this.instance_2 = new lib.hero2_hat3_img();
	this.instance_2.setTransform(-123,-64.5);

	this.instance_3 = new lib.hero2_hat4_img();
	this.instance_3.setTransform(-69,-55.5);

	this.instance_4 = new lib.hero2_hat5_img();
	this.instance_4.setTransform(-84,-64.5);

	this.instance_5 = new lib.hero2_hat6_img();
	this.instance_5.setTransform(-92,-61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-60,124,120);
p.frameBounds = [rect, new cjs.Rectangle(-123,-35.5,220,85), new cjs.Rectangle(-123,-64.5,138,114), new cjs.Rectangle(-69,-55.5,170,117), new cjs.Rectangle(-84,-64.5,181,131), new cjs.Rectangle(-92,-61.5,115,124), null];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair2_img();
	this.instance.setTransform(-128,-149);

	this.instance_1 = new lib.hero2_hair3_img();
	this.instance_1.setTransform(-138,-171);

	this.instance_2 = new lib.hero2_hair4_img();
	this.instance_2.setTransform(-13,-212);

	this.instance_3 = new lib.hero2_hair5_img();
	this.instance_3.setTransform(-86,-142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-128,-149,302,358), new cjs.Rectangle(-138,-171,300,307), new cjs.Rectangle(-13,-212,226,376), new cjs.Rectangle(-86,-142,194,174), null];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-182,-170);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-122,-181);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-79,-164);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-57,-167);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-70,-167);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-88,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-170,364,340);
p.frameBounds = [rect, new cjs.Rectangle(-122,-181,192,173), new cjs.Rectangle(-79,-164,153,162), new cjs.Rectangle(-57,-167,124,88), new cjs.Rectangle(-70,-167,138,159), new cjs.Rectangle(-88,-190,285,269)];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.h1_e1_img();
	this.instance.setTransform(-79.8,-27.3);

	this.instance_1 = new lib.h1_e2_img();
	this.instance_1.setTransform(-79.8,-27.3);

	this.instance_2 = new lib.h1_e3_img();
	this.instance_2.setTransform(-79.8,-27.3);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-80.6,-26.8);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-80.1,-27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_3}]},40).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.8,-27.3,160,55);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-80.6,-26.8,160,55), rect, rect=new cjs.Rectangle(-80.1,-27.4,160,55), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-80.6,-26.8,160,55), rect, rect=new cjs.Rectangle(-79.8,-27.3,160,55), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-130,-151.5);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(-111,-187.9);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(-126,-145.9);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-111,-150.9);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-167,-140.9);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-132,-147.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-151.5,260,303);
p.frameBounds = [rect, new cjs.Rectangle(-111,-187.9,271,386), new cjs.Rectangle(-126,-145.9,251,317), new cjs.Rectangle(-111,-150.9,257,365), new cjs.Rectangle(-167,-140.9,374,314), new cjs.Rectangle(-132,-147.9,315,401), null];


(lib.hero2_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(-106.5,-83);

	this.instance_1 = new lib.hero2_bottom2_img();
	this.instance_1.setTransform(-113,-54);

	this.instance_2 = new lib.hero2_bottom3_img();
	this.instance_2.setTransform(-79,-72);

	this.instance_3 = new lib.hero2_bottom4_img();
	this.instance_3.setTransform(-77,-63);

	this.instance_4 = new lib.hero2_bottom5_img();
	this.instance_4.setTransform(-89,-80);

	this.instance_5 = new lib.hero2_bottom6_img();
	this.instance_5.setTransform(-97,-79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-83,213,166);
p.frameBounds = [rect, new cjs.Rectangle(-113,-54,223,138), new cjs.Rectangle(-79,-72,158,190), new cjs.Rectangle(-77,-63,150,211), new cjs.Rectangle(-89,-80,189,206), new cjs.Rectangle(-97,-79,189,259), null];


(lib.hero2_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.h1_body11_img();
	this.instance.setTransform(-229.1,-227.8);

	this.instance_1 = new lib.h1_body21_img();
	this.instance_1.setTransform(-229.1,-227.8);

	this.instance_2 = new lib.h1_body31_img();
	this.instance_2.setTransform(-229.1,-227.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-229.1,-227.8,459,455);
p.frameBounds = [rect, rect, rect];


(lib.hero2_body_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.h1_body1_img();
	this.instance.setTransform(-318.4,-317);

	this.instance_1 = new lib.h1_body2_img();
	this.instance_1.setTransform(-318.4,-317);

	this.instance_2 = new lib.h1_body3_img();
	this.instance_2.setTransform(-318.4,-317);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-318.4,-317,637,632);
p.frameBounds = [rect, rect, rect];


(lib.hero2_bag_back_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bag1back_img();
	this.instance.setTransform(-60,-122);

	this.instance_1 = new lib.hero2_bag2back_img();
	this.instance_1.setTransform(-18,22);

	this.instance_2 = new lib.hero2_bag5back_img();
	this.instance_2.setTransform(-15,-108);

	this.instance_3 = new lib.hero2_bag6back_img();
	this.instance_3.setTransform(-35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-122,120,244);
p.frameBounds = [rect, new cjs.Rectangle(-18,22,105,215), rect=null, rect, new cjs.Rectangle(-15,-108,80,233), new cjs.Rectangle(-35,0,80,221), null];


(lib.hero2_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bag1front_img();
	this.instance.setTransform(-60,-122);

	this.instance_1 = new lib.hero2_bag2front_img();
	this.instance_1.setTransform(-18,22);

	this.instance_2 = new lib.hero2_bag3front_img();
	this.instance_2.setTransform(-159,-117.9);

	this.instance_3 = new lib.hero2_bag4front_img();
	this.instance_3.setTransform(-188,-116.9);

	this.instance_4 = new lib.hero2_bag5front_img();
	this.instance_4.setTransform(-15,-108);

	this.instance_5 = new lib.hero2_bag6front_img();
	this.instance_5.setTransform(-35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-122,120,244);
p.frameBounds = [rect, new cjs.Rectangle(-18,22,105,215), new cjs.Rectangle(-159,-117.9,164,216), new cjs.Rectangle(-188,-116.9,199,251), new cjs.Rectangle(-15,-108,80,233), new cjs.Rectangle(-35,0,80,221), null];


(lib.hero1_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-60,-56.5);

	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(-115,-63.9);

	this.instance_2 = new lib.hero1_top3_img();
	this.instance_2.setTransform(-59,-84.9);

	this.instance_3 = new lib.hero1_top4_img();
	this.instance_3.setTransform(-60,-100.9);

	this.instance_4 = new lib.hero1_top5_img();
	this.instance_4.setTransform(-118,-103.9);

	this.instance_5 = new lib.hero1_top6_img();
	this.instance_5.setTransform(-95,-91.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-56.5,120,113);
p.frameBounds = [rect, new cjs.Rectangle(-115,-63.9,196,133), new cjs.Rectangle(-59,-84.9,122,188), new cjs.Rectangle(-60,-100.9,119,147), new cjs.Rectangle(-118,-103.9,212,211), new cjs.Rectangle(-95,-91.9,162,144), null];


(lib.hero1_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-62.7,-31.4);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-62.7,-31.4);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-62.7,-31.4);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-62.7,-31.4);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-62.7,-31.4);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-62.7,-31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.7,-31.4,125,63);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-62.7,-31.4,126,63), rect, new cjs.Rectangle(-62.7,-31.4,125,63), null];


(lib.hero1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-56.7,-20);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-56.7,-20);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-56.7,-20);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-56.7,-20);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-56.7,-20);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-56.7,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.7,-20,113,40);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-15,-7.6);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-15,-7.6);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-15,-7.6);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-15,-7.6);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-15,-7.6);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-15,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-7.6,30,15);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_head1_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_head11_img();
	this.instance.setTransform(-79.6,-90.9);

	this.instance_1 = new lib.hero2_head21_img();
	this.instance_1.setTransform(-79.6,-90.9);

	this.instance_2 = new lib.hero2_head31_img();
	this.instance_2.setTransform(-79.6,-90.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.6,-90.9,159,182);
p.frameBounds = [rect, rect, rect];


(lib.hero1_head_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.h2_head12_img();
	this.instance.setTransform(-56.9,-65);

	this.instance_1 = new lib.h2_head22_img();
	this.instance_1.setTransform(-56.9,-65);

	this.instance_2 = new lib.h2_head32_img();
	this.instance_2.setTransform(-56.9,-65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-65,114,130);
p.frameBounds = [rect, rect, rect];


(lib.hero1_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-66,-72.5);

	this.instance_1 = new lib.hero1_hat2_img();
	this.instance_1.setTransform(-46,-63.5);

	this.instance_2 = new lib.hero1_hat3_img();
	this.instance_2.setTransform(-65,-57.5);

	this.instance_3 = new lib.hero1_hat4_img();
	this.instance_3.setTransform(-132,-65.5);

	this.instance_4 = new lib.hero1_hat5_img();
	this.instance_4.setTransform(-123,-61.5);

	this.instance_5 = new lib.hero1_hat6_img();
	this.instance_5.setTransform(-120,-47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66,-72.5,132,145);
p.frameBounds = [rect, new cjs.Rectangle(-46,-63.5,88,122), new cjs.Rectangle(-65,-57.5,130,127), new cjs.Rectangle(-132,-65.5,226,167), new cjs.Rectangle(-123,-61.5,196,141), new cjs.Rectangle(-120,-47.5,238,111), null];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-141,-73.5);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-136,-65.5);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-137,-67.5);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-193,-53.5);

	this.instance_4 = new lib.hero1_hair5_img();
	this.instance_4.setTransform(-146,-87.5);

	this.instance_5 = new lib.hero1_hair6_img();
	this.instance_5.setTransform(-92,-29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141,-73.5,309,263);
p.frameBounds = [rect, new cjs.Rectangle(-136,-65.5,271,260), new cjs.Rectangle(-137,-67.5,248,191), new cjs.Rectangle(-193,-53.5,396,381), new cjs.Rectangle(-146,-87.5,226,318), new cjs.Rectangle(-92,-29.5,168,193)];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-54.5,-39);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-63,-41.5);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-56,-37.5);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-71,-41.5);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-59,-44.5);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-74,-43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-39,109,78);
p.frameBounds = [rect, new cjs.Rectangle(-63,-41.5,135,138), new cjs.Rectangle(-56,-37.5,113,77), new cjs.Rectangle(-71,-41.5,139,197), new cjs.Rectangle(-59,-44.5,125,76), new cjs.Rectangle(-74,-43.5,156,154)];


(lib.hero1_eyes1_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.h2_e1_img();
	this.instance.setTransform(-69.5,-24.2);

	this.instance_1 = new lib.h2_e2_img();
	this.instance_1.setTransform(-69.5,-24.2);

	this.instance_2 = new lib.h2_e3_img();
	this.instance_2.setTransform(-69.5,-24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-24.2,139,48);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-167.5,-187.5);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-209,-174);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-143,-153);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-184,-187.9);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-160,-190.9);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-100,-196.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167.5,-187.5,335,375);
p.frameBounds = [rect, new cjs.Rectangle(-209,-174,446,396), new cjs.Rectangle(-143,-153,313,336), new cjs.Rectangle(-184,-187.9,363,385), new cjs.Rectangle(-160,-190.9,347,365), new cjs.Rectangle(-100,-196.9,235,402), null];


(lib.hero1_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_bottom1_img();
	this.instance.setTransform(-84.5,-100.5);

	this.instance_1 = new lib.hero1_bottom2_img();
	this.instance_1.setTransform(-170,-112);

	this.instance_2 = new lib.hero1_bottom3_img();
	this.instance_2.setTransform(-139,-109);

	this.instance_3 = new lib.hero1_bottom4_img();
	this.instance_3.setTransform(-125,-113);

	this.instance_4 = new lib.hero1_bottom5_img();
	this.instance_4.setTransform(-137,-93);

	this.instance_5 = new lib.hero1_bottom6_img();
	this.instance_5.setTransform(-112,-109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.5,-100.5,169,201);
p.frameBounds = [rect, new cjs.Rectangle(-170,-112,325,244), new cjs.Rectangle(-139,-109,271,271), new cjs.Rectangle(-125,-113,240,222), new cjs.Rectangle(-137,-93,266,174), new cjs.Rectangle(-112,-109,224,206), null];


(lib.hero1_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_b1_img();
	this.instance.setTransform(-83.4,-237.1);

	this.instance_1 = new lib.hero2_b2_img();
	this.instance_1.setTransform(-83.4,-237.1);

	this.instance_2 = new lib.hero2_b3_img();
	this.instance_2.setTransform(-83.4,-237.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.4,-237.1,168,474);
p.frameBounds = [rect, rect, rect];


(lib.hero1_body_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.h2_body1_img();
	this.instance.setTransform(-116.5,-329.5);

	this.instance_1 = new lib.h2_body2_img();
	this.instance_1.setTransform(-116.5,-329.5);

	this.instance_2 = new lib.h2_body3_img();
	this.instance_2.setTransform(-116.5,-329.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.5,-329.5,233,659);
p.frameBounds = [rect, rect, rect];


(lib.hero1_bag_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArHOBIAA8YIAJAAQBZAABjBLQBaBEAAAqQAAAUARAoIASAlQgHAdABAHQABAJAoASQgLANALAjIAFANQBegJAIgLQASgYAFgaQAEgbAGheQAAhBgPgUQgTgZhAAAIgNAAQgFgbgBgWIQTAAIAAb3g");
	mask.setTransform(-15.4,2.1);

	// Слой 1
	this.instance = new lib.hero1_bag4_img();
	this.instance.setTransform(-70.5,-83);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-83,63,144);
p.frameBounds = [rect];


(lib.hero1_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("An8O/IAA51ICXAAIAAAWQAABZAjASQATAKBoAAQAzAAAegMQAGgqAFhKQAEg6gNgQQgLgOg9gXIAAikIK5AAIAAd9g");
	var mask_graphics_1 = new cjs.Graphics().p("AmPVQQjbiKAAkVQAAi0AjiAQAchhA5hdQAhg1BEhnQAjg8AYhCQBCgjBKg2QAxgkAugnIASmcQAUnAAGhFQALh1gGiDQABgqALgZQAMgYAagUQgDgsgLgvQgOhAgagaIAsAAQCVgGDIAAICQAAIAAAQQAABHAhE2QAgE3AABdQgDCrgBDLQgEGUAIDIQAFB0AHB6QAHB7AGA6QAGA/AZBuQATBbAAAsQAABAgeBCQgqBchYA3QkNCmhvAAQknAAi3hzg");
	var mask_graphics_2 = new cjs.Graphics().p("ArHOBIAA8YIAJAAQBZAABjBLQBaBEAAAqQAAAUARAoIASAlQgHAdABAHQABAJAoASQgLANALAjIAFANQBegJAIgLQASgYAFgaQAEgbAGheQAAhBgPgUQgTgZhAAAIgNAAQgFgbgBgWIQTAAIAAb3g");
	var mask_graphics_3 = new cjs.Graphics().p("ArHOBIAA8YIAJAAQBZAABjBLQBaBEAAAqQAAAUARAoIASAlQgHAdABAHQABAJAoASQgLANALAjIAFANQBegJAIgLQASgYAFgaQAEgbAGheQAAhBgPgUQgTgZhAAAIgNAAQgFgbgBgWIQTAAIAAb3g");
	var mask_graphics_4 = new cjs.Graphics().p("AkrVQQjbiKiGj+QiHj+CNhcQCMhbBHhFQBGhFBEhmQAkg8AYhCQBBgjBKg2QAxgkAugnIAQmcQAVnAAFhFQALh1gGiDQABgqALgZQAMgYAbgUQgEgsgKgvQgOhAgagaIArAAQCYgGDIAAICPAAIAAAQQAABHAhE2QAgE3AABdQgDCrgBDLQgEGUAIDIQAFB0AHB6QAHB7AGA6QAHA/AYBuQATBbAAAsQAABAgdBCQgqBchZA3QkNCmhvAAQknAAi3hzg");
	var mask_graphics_5 = new cjs.Graphics().p("AorX+QiEkVhNmAQhNl/CNhcQCNhbBGhFQBHhEBDhmQAkg9gGhYQBggLBJg2QAygkAugmQCChFgvmNQgtmNAGhFQALh1gHiCQABgrAKgZQALgYAbgUQAqhwhIgUQhHgTgYAQQABgxApg4IC0AAQB0A2CAAAIAhAAIAAC1IB6AAIAVDXQAhE3AABdQgDCrgCDLQgDGWAIDGQAEB1AIB5QAHB7AGA7QAGA+AYBuQAUBbAAAsQAABABeEjQBeEji3BmQi4BmnHBNQhhARhUAAQkuAAhojag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:4.8,y:-1.8}).wait(1).to({graphics:mask_graphics_1,x:85,y:-118}).wait(1).to({graphics:mask_graphics_2,x:-15.4,y:2.1}).wait(1).to({graphics:mask_graphics_3,x:-15.4,y:2.1}).wait(1).to({graphics:mask_graphics_4,x:74.9,y:-118}).wait(1).to({graphics:mask_graphics_5,x:80.3,y:-95.6}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero1_bag1_img();
	this.instance.setTransform(-34,-84.5);

	this.instance_1 = new lib.hero1_bag2_img();
	this.instance_1.setTransform(31.5,-264.9);

	this.instance_2 = new lib.hero1_bag3_img();
	this.instance_2.setTransform(-77.5,-84);

	this.instance_3 = new lib.hero1_bag4_img();
	this.instance_3.setTransform(-70.5,-83);

	this.instance_4 = new lib.hero1_bag5_img();
	this.instance_4.setTransform(14.5,-266);

	this.instance_5 = new lib.hero1_bag6_img();
	this.instance_5.setTransform(30,-266.4);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-84.5,66,172);
p.frameBounds = [rect, new cjs.Rectangle(31.5,-264.9,100,279), new cjs.Rectangle(-77.5,-84,89,138), new cjs.Rectangle(-70.5,-83,63,144), new cjs.Rectangle(14.5,-265.5,114,271.5), new cjs.Rectangle(30,-266.4,117,326), null];


(lib.headdress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat6_img();
	this.instance.setTransform(57,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7DsIBStLIGHinIOeGEIgVJWIprIzg");
	this.shape.setTransform(-2.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.8,-75.8,140.1,155.1);
p.frameBounds = [rect];


(lib.headdress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat6_img();
	this.instance.setTransform(-119,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0/EAIEwrtIa3jAIKYCnIgbC/I0HOsInRBJg");
	this.shape.setTransform(0.3,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.1,-71.5,268.9,137.3);
p.frameBounds = [rect];


(lib.headdress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat5_img();
	this.instance.setTransform(-90.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AilJoIuArQIB1nQIZhkCIF1HVIjYQOIlzCSg");
	this.shape.setTransform(-1.2,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-87.9,212.6,165.5);
p.frameBounds = [rect];


(lib.headdress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat5_img();
	this.instance.setTransform(-98,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AngLaIoSsCIgynmIBkj2IXYBCIINFMIsSObIlcDgg");
	this.shape.setTransform(2.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.7,-77.4,212.4,154.7);
p.frameBounds = [rect];


(lib.headdress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat4_img();
	this.instance.setTransform(-85,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AifKPIs0xdIJWjdIUEBWIBNHwImYMRg");
	this.shape.setTransform(-0.8,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.9,-69.6,196.2,136.9);
p.frameBounds = [rect];


(lib.headdress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat4_img();
	this.instance.setTransform(-113,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuL3IF71VILvk0II8BhIK3NJIhIE9Ir3HEIuvB6g");
	this.shape.setTransform(-0.9,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.8,-91,239.9,183.2);
p.frameBounds = [rect];


(lib.headdress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat3_img();
	this.instance.setTransform(-69,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsjGmIBYkvIS9s6IEyAvIAAOCIjyFjIj0Bzg");
	this.shape.setTransform(-0.4,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-72,160.9,141.7);
p.frameBounds = [rect];


(lib.headdress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat3_img();
	this.instance.setTransform(-65,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkWKtIk8i7Ihzl/IBunxIFzkzIH4gCIGyHUIgTHLInzHIg");
	this.shape.setTransform(-1.3,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-71.2,142.1,138.4);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat2_img();
	this.instance.setTransform(-110,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjtIWIttm/IickYITAlWIUtEdIjAEkIvTHug");
	this.shape.setTransform(2.8,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.3,-58.1,254.3,107.4);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat2_img();
	this.instance.setTransform(-44,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlVKcIi1iJIADtCIDylTIJygkICuEUIhmOtIj8CMg");
	this.shape.setTransform(0.4,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.8,-69.2,104.6,135.9);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(62,-60,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArukyIC6k9IRjg0IDADDIkARLItOA5g");
	this.shape.setTransform(-2.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.3,-66.8,150.4,135.2);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-66,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArkHzIAZvBIGWlCIORBXICJG0IkIM1IkGCzInnAug");
	this.shape.setTransform(1.3,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.8,-77.4,148.2,157.2);
p.frameBounds = [rect];


(lib.happy_hare_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.happy_hare_img();
	this.instance.setTransform(-95,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.h2_t6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top6_img();
	this.instance.setTransform(-84,-46.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-70.2,139,216.4);
p.frameBounds = [rect];


(lib.h2_t5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top5_img();
	this.instance.setTransform(-73,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-70.2,135,162.4);
p.frameBounds = [rect];


(lib.h2_t4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top4_img();
	this.instance.setTransform(-65,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-70.2,165,135.4);
p.frameBounds = [rect];


(lib.h2_t3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top3_img();
	this.instance.setTransform(-88,-53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-70.2,169,171.4);
p.frameBounds = [rect];


(lib.h2_t2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top2_img();
	this.instance.setTransform(-85,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-70.2,135,145.4);
p.frameBounds = [rect];


(lib.h2_t1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-88,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-70.2,162,149.4);
p.frameBounds = [rect];


(lib.h2_d6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress6_img();
	this.instance.setTransform(-140,-45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-70.2,315,425.4);
p.frameBounds = [rect];


(lib.h2_d5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress5_img();
	this.instance.setTransform(-183,-34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183,-70.2,374,349.4);
p.frameBounds = [rect];


(lib.h2_d4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(-117,-45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-70.2,257,389.4);
p.frameBounds = [rect];


(lib.h2_d3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-138,-42.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138,-70.2,251,344.4);
p.frameBounds = [rect];


(lib.h2_d2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(-149,-53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149,-70.2,271,402.4);
p.frameBounds = [rect];


(lib.h2_d1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-148,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-70.2,260,329.4);
p.frameBounds = [rect];


(lib.h2_b6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom6_img();
	this.instance.setTransform(-94,-54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-70.2,189,274.4);
p.frameBounds = [rect];


(lib.h2_b5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom5_img();
	this.instance.setTransform(-82,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-70.2,189,232.2);
p.frameBounds = [rect];


(lib.h2_b4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom4_img();
	this.instance.setTransform(-71,-38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-70.2,150,242.4);
p.frameBounds = [rect];


(lib.h2_b3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom3_img();
	this.instance.setTransform(-76,-47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76,-70.2,158,212.4);
p.frameBounds = [rect];


(lib.h2_b2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom2_img();
	this.instance.setTransform(-106,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-70.2,223,171.2);
p.frameBounds = [rect];


(lib.h2_b1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(-99,-48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99,-70.2,213,187.4);
p.frameBounds = [rect];


(lib.h1_t6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top6_img();
	this.instance.setTransform(-68,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-70.2,162,169.4);
p.frameBounds = [rect];


(lib.h1_t5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top5_img();
	this.instance.setTransform(-93,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-70.2,212,221.4);
p.frameBounds = [rect];


(lib.h1_t4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top4_img();
	this.instance.setTransform(-29,-48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70.2,140,168.4);
p.frameBounds = [rect];


(lib.h1_t3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top3_img();
	this.instance.setTransform(-31,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70.2,141,220.2);
p.frameBounds = [rect];


(lib.h1_t2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top2_img();
	this.instance.setTransform(-93,-51.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-70.2,196,151.4);
p.frameBounds = [rect];


(lib.h1_t1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-60,-42.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-70.2,120,140.4);
p.frameBounds = [rect];


(lib.h1_d6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress6_img();
	this.instance.setTransform(-79,-54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-70.2,235,417.4);
p.frameBounds = [rect];


(lib.h1_d5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress5_img();
	this.instance.setTransform(-142,-48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142,-70.2,347,386.4);
p.frameBounds = [rect];


(lib.h1_d4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress4_img();
	this.instance.setTransform(-169,-46.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169,-70.2,363,408.4);
p.frameBounds = [rect];


(lib.h1_d3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress3_img();
	this.instance.setTransform(-146,-55.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-70.2,313,350.4);
p.frameBounds = [rect];


(lib.h1_d2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-203,-42.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203,-70.2,446,423.4);
p.frameBounds = [rect];


(lib.h1_d1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-148,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-70.2,335,401.4);
p.frameBounds = [rect];


(lib.h1_b6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom6_img();
	this.instance.setTransform(-122,-48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122,-70.2,224,227.4);
p.frameBounds = [rect];


(lib.h1_b5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom5_img();
	this.instance.setTransform(-142,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142,-70.2,266,206.4);
p.frameBounds = [rect];


(lib.h1_b4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom4_img();
	this.instance.setTransform(-134,-45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134,-70.2,240,246.4);
p.frameBounds = [rect];


(lib.h1_b3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom3_img();
	this.instance.setTransform(-148,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-70.2,271,300.4);
p.frameBounds = [rect];


(lib.h1_b2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom2_img();
	this.instance.setTransform(-177,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177,-70.2,325,269.4);
p.frameBounds = [rect];


(lib.h1_b1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom1_img();
	this.instance.setTransform(-94,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_img();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-70.2,169,234.4);
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


(lib.eggs_rule_world_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eggs_rule_world_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.egg6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg6_img();
	this.instance.setTransform(-30,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-41.5,60,83);
p.frameBounds = [rect];


(lib.egg5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg5_img();
	this.instance.setTransform(-29.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.5,-41.5,59,83);
p.frameBounds = [rect];


(lib.egg4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg4_img();
	this.instance.setTransform(-30,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-41.5,60,83);
p.frameBounds = [rect];


(lib.egg3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg3_img();
	this.instance.setTransform(-30.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-40,61,80);
p.frameBounds = [rect];


(lib.egg2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg2_img();
	this.instance.setTransform(-30.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-40,61,80);
p.frameBounds = [rect];


(lib.egg1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg1_img();
	this.instance.setTransform(-30,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-41,60,82);
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


(lib.check_skin_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_skin_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.check_shadows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_shadows_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.check_lips_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_lips_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.check_hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_hairstyle_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.check_blush_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_blush_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-160,-120);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-160,-120);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-160,-120);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-160,-120);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-160,-120);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-160,-120);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-160,-120);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-160,-120);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-160,-120);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-160,-120);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-160,-120);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-160,-120);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-160,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointer_img();
	this.instance.setTransform(-155,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-90,180,180);
p.frameBounds = [rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.body_current_location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_6_img();
	this.instance.setTransform(-205,-205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect];


(lib.body_current_location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_5_img();
	this.instance.setTransform(-205,-205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect];


(lib.body_current_location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_4_img();
	this.instance.setTransform(-205,-205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect];


(lib.body_current_location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_3_img();
	this.instance.setTransform(-205,-205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect];


(lib.body_current_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_2_img();
	this.instance.setTransform(-205,-205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect];


(lib.body_current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-150,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-220,300,440);
p.frameBounds = [rect];


(lib.bam_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bam_img();
	this.instance.setTransform(-177,-137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177,-137.5,354,275);
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


(lib.accessory_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag6_img();
	this.instance.setTransform(-40,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkbS2Ijhn9IAMxLIF7srIFFACIEtZJIjaMwg");
	this.shape.setTransform(-0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.6,-121.7,102,242.9);
p.frameBounds = [rect];


(lib.accessory_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag6_img();
	this.instance.setTransform(-58.5,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AozaYIhvhsMAHPgziIEsADMAJKAz8Ih4Bug");
	this.shape.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-169.5,135.1,344);
p.frameBounds = [rect];


(lib.accessory_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag5_img();
	this.instance.setTransform(-40,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoESKMADfgmeIHSADMAFYAiIIrJGeg");
	this.shape.setTransform(-1.6,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.3,-130.7,103.5,260.2);
p.frameBounds = [rect];


(lib.accessory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag5_img();
	this.instance.setTransform(-57,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqNMWMAKVgi0IC9AAMAHJAmWIi9GiIs/AFg");
	this.shape.setTransform(3.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.2,-144,130.9,287.9);
p.frameBounds = [rect];


(lib.accessory_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag4_img();
	this.instance.setTransform(99,-126,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AgDVFMgRtgoaIFgh7IeBeBIkmMgg");
	this.shape.setTransform(-2.2,-4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.9,-140.7,227.5,272.3);
p.frameBounds = [rect];


(lib.accessory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag4_img();
	this.instance.setTransform(-31.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmOMfIAA4+IMdAAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-80,80,160);
p.frameBounds = [rect];


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag3_img();
	this.instance.setTransform(-82,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuoSoIg0sJIYK5PIGvBsMgSOAj1g");
	this.shape.setTransform(4.2,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.8,-122.2,198,240.4);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag3_img();
	this.instance.setTransform(-44.5,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("An4FqIgLlkIFjsNIEFABIGfOiIkFJhImhALg");
	this.shape.setTransform(-0.1,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-79.8,103.2,155.3);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag2_img();
	this.instance.setTransform(52,-108,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap0Q1IhQrpIOy4WIHXAAMgIdAmCIopATg");
	this.shape.setTransform(1.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-119.9,141.9,245.5);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag2_img();
	this.instance.setTransform(-50,-139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkiWpIjRioIAAwwIGG55IEDAAIFecLIAAOAIkWDGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-145,100,290);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag1_img();
	this.instance.setTransform(-60,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ah+UZIj+i/MgF6gh6IBjkeIFMAAIQ+YMIkCPeIj9CTg");
	this.shape.setTransform(0.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.1,-133.9,151.9,268.7);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag1_img();
	this.instance.setTransform(-33,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmaOsIhHw2ID/suIFnADIFdPkIhNOKg");
	this.shape.setTransform(1.3,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.9,-99.5,96.4,190.6);
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
	this.shape.graphics.f("#FFFF99").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,250,1,0.833);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,500);
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


(lib.blinking_light_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_2_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.vk_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.vk_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
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
	this.instance.setTransform(0,240);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:360},0).to({y:240,alpha:1},10).wait(40).to({alpha:0.602},5).to({alpha:1},5).to({alpha:0.602},5).to({alpha:1},5).wait(110).to({y:360,alpha:0.012},10).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,490);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,610), new cjs.Rectangle(-210,-210,420,598), new cjs.Rectangle(-210,-210,420,586), new cjs.Rectangle(-210,-210,420,574), new cjs.Rectangle(-210,-210,420,562), new cjs.Rectangle(-210,-210,420,550), new cjs.Rectangle(-210,-210,420,538), new cjs.Rectangle(-210,-210,420,526), new cjs.Rectangle(-210,-210,420,514), new cjs.Rectangle(-210,-210,420,502), rect=new cjs.Rectangle(-210,-210,420,490), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,502), new cjs.Rectangle(-210,-210,420,514), new cjs.Rectangle(-210,-210,420,526), new cjs.Rectangle(-210,-210,420,538), new cjs.Rectangle(-210,-210,420,550), new cjs.Rectangle(-210,-210,420,562), new cjs.Rectangle(-210,-210,420,574), new cjs.Rectangle(-210,-210,420,586), new cjs.Rectangle(-210,-210,420,598), new cjs.Rectangle(-210,-210,420,610)];


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
p.nominalBounds = rect = new cjs.Rectangle(-300,0,1400,600);
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


(lib.top_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t6_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AklPZIn13CIHXq9IICAMIJcPBIhLS9IntDDg");
	this.shape.setTransform(8.5,107.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-11.5,159.1,238.3);
p.frameBounds = [rect];


(lib.top_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t6_mc();
	this.instance.setTransform(-1,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApsORIj3o+IDSq+IKbomIFMgBIHjJ/IArKMIqSIag");
	this.shape.setTransform(-15.9,83.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.7,-8.4,173.7,183.1);
p.frameBounds = [rect];


(lib.top_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t5_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsidIIJrrIF0AGIGhHuIC7TzI2zAqg");
	this.shape.setTransform(4.8,79.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.1,-10.7,149.9,181.1);
p.frameBounds = [rect];


(lib.top_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t5_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtEQtIkSweIHXqFIKRonIE3AAIJJLsIDGIAIjPHwIulJfg");
	this.shape.setTransform(-15.7,109.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.8,-9,222.4,236.5);
p.frameBounds = [rect];


(lib.top_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t4_mc();
	this.instance.setTransform(-2.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtgILIhCmVINGuBIIrgCIHUJNIhVLeIl6Dwg");
	this.shape.setTransform(-18.2,65.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.3,-12.4,186.3,156.6);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t4_mc();
	this.instance.setTransform(-1,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqhLVIhgrDINGulIF1gBIFILXIoRRSg");
	this.shape.setTransform(-19.1,83.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.1,-8.2,154.1,183.5);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t3_mc();
	this.instance.setTransform(-2.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtvLHIBgvAIJErHIE6ADIL5K5IAIOQImfE1g");
	this.shape.setTransform(0,85.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-10.5,176.1,192.3);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t3_mc();
	this.instance.setTransform(-1,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsGRVIAx1ZIMUt3IEmgBIGiKdIp/Zcg");
	this.shape.setTransform(-20.5,107.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98,-7.4,155.1,229.9);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t2_mc();
	this.instance.setTransform(-2.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsAgmIH9sYIDkABIMgOzIhNIRItKC4g");
	this.shape.setTransform(10.2,69.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.8,-13.6,154,166.4);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t2_mc();
	this.instance.setTransform(-0.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArPLeIkuuIIBKkaINHmWIFsgBILdKRIAhFBIh/DJIv7Icg");
	this.shape.setTransform(-7.1,75.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.3,-10.4,204.5,172.1);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t1_mc();
	this.instance.setTransform(-2,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("At0C8IIPwOIKmgDII1ODIhwLgIxLBIg");
	this.shape.setTransform(5.8,73);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.7,-12.4,177.2,171);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t1_mc();
	this.instance.setTransform(-1,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApAJgIiEsnIIJpVIF4gBIIIMIIpEMzg");
	this.shape.setTransform(4.1,69.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.9,-10.4,142,159.8);
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

	// substrate
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.quest_item_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.quest_item_3_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10},29).to({y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-173.9,286,348.5);
p.frameBounds = [rect, new cjs.Rectangle(-140.5,-174.3,286,348.5), new cjs.Rectangle(-140.5,-174.6,286,348.5), new cjs.Rectangle(-140.5,-175,286,348.5), new cjs.Rectangle(-140.5,-175.3,286,348.5), new cjs.Rectangle(-140.5,-175.6,286,348.5), new cjs.Rectangle(-140.5,-176,286,348.5), new cjs.Rectangle(-140.5,-176.3,286,348.5), new cjs.Rectangle(-140.5,-176.7,286,348.5), new cjs.Rectangle(-140.5,-177,286,348.5), new cjs.Rectangle(-140.5,-177.4,286,348.5), new cjs.Rectangle(-140.5,-177.7,286,348.5), new cjs.Rectangle(-140.5,-178.1,286,348.5), new cjs.Rectangle(-140.5,-178.4,286,348.5), new cjs.Rectangle(-140.5,-178.8,286,348.5), new cjs.Rectangle(-140.5,-179.1,286,348.5), new cjs.Rectangle(-140.5,-179.4,286,348.5), new cjs.Rectangle(-140.5,-179.8,286,348.5), new cjs.Rectangle(-140.5,-180.1,286,348.5), new cjs.Rectangle(-140.5,-180.5,286,348.5), new cjs.Rectangle(-140.5,-180.8,286,348.5), new cjs.Rectangle(-140.5,-181.2,286,348.5), new cjs.Rectangle(-140.5,-181.5,286,348.5), new cjs.Rectangle(-140.5,-181.9,286,348.5), new cjs.Rectangle(-140.5,-182.2,286,348.5), new cjs.Rectangle(-140.5,-182.5,286,348.5), new cjs.Rectangle(-140.5,-182.9,286,348.5), new cjs.Rectangle(-140.5,-183.2,286,348.5), new cjs.Rectangle(-140.5,-183.6,286,348.5), new cjs.Rectangle(-140.5,-183.9,286,348.5), new cjs.Rectangle(-140.5,-183.6,286,348.5), new cjs.Rectangle(-140.5,-183.3,286,348.5), new cjs.Rectangle(-140.5,-182.9,286,348.5), new cjs.Rectangle(-140.5,-182.6,286,348.5), new cjs.Rectangle(-140.5,-182.3,286,348.5), new cjs.Rectangle(-140.5,-181.9,286,348.5), new cjs.Rectangle(-140.5,-181.6,286,348.5), new cjs.Rectangle(-140.5,-181.3,286,348.5), new cjs.Rectangle(-140.5,-180.9,286,348.5), new cjs.Rectangle(-140.5,-180.6,286,348.5), new cjs.Rectangle(-140.5,-180.3,286,348.5), new cjs.Rectangle(-140.5,-179.9,286,348.5), new cjs.Rectangle(-140.5,-179.6,286,348.5), new cjs.Rectangle(-140.5,-179.3,286,348.5), new cjs.Rectangle(-140.5,-178.9,286,348.5), new cjs.Rectangle(-140.5,-178.6,286,348.5), new cjs.Rectangle(-140.5,-178.3,286,348.5), new cjs.Rectangle(-140.5,-177.9,286,348.5), new cjs.Rectangle(-140.5,-177.6,286,348.5), new cjs.Rectangle(-140.5,-177.3,286,348.5), new cjs.Rectangle(-140.5,-176.9,286,348.5), new cjs.Rectangle(-140.5,-176.6,286,348.5), new cjs.Rectangle(-140.5,-176.3,286,348.5), new cjs.Rectangle(-140.5,-175.9,286,348.5), new cjs.Rectangle(-140.5,-175.6,286,348.5), new cjs.Rectangle(-140.5,-175.3,286,348.5), new cjs.Rectangle(-140.5,-174.9,286,348.5), new cjs.Rectangle(-140.5,-174.6,286,348.5), new cjs.Rectangle(-140.5,-174.3,286,348.5), new cjs.Rectangle(-140.5,-173.9,286,348.5)];


(lib.quest_item_2_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.quest_item_12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},9).to({_off:true},1).wait(7));

	// target
	this.target_mc = new lib.egg6_mc();

	this.timeline.addTween(cjs.Tween.get(this.target_mc).wait(7).to({y:-15},4).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,-68.5,166,137);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-30,-52.7,60,83), new cjs.Rectangle(-30,-56.5,60,83), new cjs.Rectangle(-30,-53.5,60,83), new cjs.Rectangle(-30,-50.5,60,83), new cjs.Rectangle(-30,-47.5,60,83), new cjs.Rectangle(-30,-44.5,60,83), new cjs.Rectangle(-30,-41.5,60,83)];


(lib.quest_item_2_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.quest_item_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},9).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.8,-136.6,133.4,278.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.quest_item_2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.quest_item_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},9).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.7,-255.3,240.9,516);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.quest_item_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.quest_item_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-600},13).to({_off:true},1).wait(2));

	// target
	this.target_mc = new lib.egg4_mc();
	this.target_mc.setTransform(-1,-65);

	this.timeline.addTween(cjs.Tween.get(this.target_mc).wait(7).to({y:-80},4).to({y:-65},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-173.9,286,348.5);
p.frameBounds = [rect, new cjs.Rectangle(-140.5,-220.1,286,348.5), new cjs.Rectangle(-140.5,-266.2,286,348.5), new cjs.Rectangle(-140.5,-312.4,286,348.5), new cjs.Rectangle(-140.5,-358.5,286,348.5), new cjs.Rectangle(-140.5,-404.7,286,381.2), new cjs.Rectangle(-140.5,-450.8,286,427.4), new cjs.Rectangle(-140.5,-497,286,473.6), new cjs.Rectangle(-140.5,-543.2,286,516), new cjs.Rectangle(-140.5,-589.3,286,558.4), new cjs.Rectangle(-140.5,-635.5,286,600.8), new cjs.Rectangle(-140.5,-681.6,286,643.2), new cjs.Rectangle(-140.5,-727.8,286,693.1), new cjs.Rectangle(-140.5,-773.9,286,743), new cjs.Rectangle(-31,-110.2,60,83), new cjs.Rectangle(-31,-106.5,60,83)];


(lib.quest_item_2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.quest_item_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},9).to({_off:true},1).wait(5));

	// target
	this.target_mc = new lib.egg5_mc();
	this.target_mc.setTransform(-3,60);

	this.timeline.addTween(cjs.Tween.get(this.target_mc).wait(6).to({y:45},4).to({y:60},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.6,-121.4,183,235.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,3.5,59,83), new cjs.Rectangle(-32.5,7.3,59,83), new cjs.Rectangle(-32.5,11,59,83), new cjs.Rectangle(-32.5,14.8,59,83), new cjs.Rectangle(-32.5,18.5,59,83)];


(lib.quest_item_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.quest_item_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},9).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-88.4,191,182.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.quest_item_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.qi2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},9).to({_off:true},1).wait(5));

	// target
	this.target_mc = new lib.egg2_mc();
	this.target_mc.setTransform(-3.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.target_mc).wait(6).to({y:5.5},4).to({y:20.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-69,172,138);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-34.5,61,80), new cjs.Rectangle(-34,-30.7,61,80), new cjs.Rectangle(-34,-27,61,80), new cjs.Rectangle(-34,-23.2,61,80), new cjs.Rectangle(-34,-19.5,61,80)];


(lib.quest_i6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.oi4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-169,y:-273.9},24).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.7,-112.8,195.6,193.2);
p.frameBounds = [rect, new cjs.Rectangle(-125.8,-124.2,195.6,193.2), new cjs.Rectangle(-132.8,-135.6,195.6,193.2), new cjs.Rectangle(-139.8,-147,195.6,193.2), new cjs.Rectangle(-146.9,-158.4,195.6,193.2), new cjs.Rectangle(-153.9,-169.8,195.5,193.2), new cjs.Rectangle(-161,-181.3,195.6,193.2), new cjs.Rectangle(-168,-192.7,195.6,193.2), new cjs.Rectangle(-175.1,-204.1,195.5,193.2), new cjs.Rectangle(-182.1,-215.5,195.6,193.2), new cjs.Rectangle(-189.1,-226.9,195.6,193.2), new cjs.Rectangle(-196.2,-238.3,195.5,193.2), new cjs.Rectangle(-203.2,-249.7,195.6,193.2), new cjs.Rectangle(-210.3,-261.2,195.6,193.2), new cjs.Rectangle(-217.3,-272.6,195.5,193.2), new cjs.Rectangle(-224.3,-284,195.5,193.2), new cjs.Rectangle(-231.4,-295.4,195.6,193.2), new cjs.Rectangle(-238.4,-306.8,195.5,193.2), new cjs.Rectangle(-245.5,-318.2,195.6,193.2), new cjs.Rectangle(-252.5,-329.7,195.6,193.2), new cjs.Rectangle(-259.6,-341.1,195.6,193.2), new cjs.Rectangle(-266.6,-352.5,195.6,193.2), new cjs.Rectangle(-273.6,-363.9,195.5,193.2), new cjs.Rectangle(-280.7,-375.3,195.5,193.2), new cjs.Rectangle(-287.7,-386.7,195.6,193.2), null];


(lib.quest_i5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.qi5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-59,y:-25},4).to({x:-140,y:16,alpha:0.512},3).to({x:-226,y:-21,alpha:0.27},3).to({x:-305,y:18,alpha:0.012},3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.3,-118.4,164.1,231.4);
p.frameBounds = [rect, new cjs.Rectangle(-97,-124.7,164.1,231.4), new cjs.Rectangle(-111.8,-130.9,164.1,231.4), new cjs.Rectangle(-126.5,-137.2,164.1,231.4), new cjs.Rectangle(-141.3,-143.4,164.1,231.4), new cjs.Rectangle(-168.3,-129.8,164.1,231.4), new cjs.Rectangle(-195.3,-116.1,164.1,231.4), new cjs.Rectangle(-222.3,-102.4,164.1,231.4), new cjs.Rectangle(-250.9,-114.8,164,231.4), new cjs.Rectangle(-279.6,-127.1,164,231.4), new cjs.Rectangle(-308.3,-139.4,164.1,231.4), new cjs.Rectangle(-334.6,-126.4,164,231.4), new cjs.Rectangle(-360.9,-113.4,164,231.4), new cjs.Rectangle(-387.3,-100.4,164.1,231.4), null];


(lib.quest_i4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.qi4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},14).to({_off:true},1).wait(1));

	// target
	this.target_mc = new lib.egg3_mc();
	this.target_mc.setTransform(-0.5,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.target_mc).wait(7).to({y:-19.5},4).to({y:-4.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.8,-65.6,156.7,116.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-31,-44.5,61,80)];


(lib.quest_i3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.qi3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:211,alpha:0.012},14).to({_off:true},1).wait(5));

	// target
	this.target_mc = new lib.egg1_mc();
	this.target_mc.setTransform(-7,-2);

	this.timeline.addTween(cjs.Tween.get(this.target_mc).wait(10).to({y:-17},5).to({y:-2},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-49,176,98);
p.frameBounds = [rect, new cjs.Rectangle(-72.9,-49,176,98), new cjs.Rectangle(-57.8,-49,176,98), new cjs.Rectangle(-42.8,-49,176,98), new cjs.Rectangle(-37,-49,185.3,98), new cjs.Rectangle(-37,-49,200.4,98), new cjs.Rectangle(-37,-49,215.5,98), new cjs.Rectangle(-37,-49,230.5,98), new cjs.Rectangle(-37,-49,245.6,98), new cjs.Rectangle(-37,-49,260.7,98), new cjs.Rectangle(-37,-49,275.7,98), new cjs.Rectangle(-37,-49,290.8,98), new cjs.Rectangle(-37,-49,305.9,98), new cjs.Rectangle(-37,-52,321,101), new cjs.Rectangle(-37,-55,336,104), new cjs.Rectangle(-37,-58,60,82), new cjs.Rectangle(-37,-54.2,60,82), new cjs.Rectangle(-37,-50.5,60,82), new cjs.Rectangle(-37,-46.7,60,82), new cjs.Rectangle(-37,-43,60,82)];


(lib.quest_i1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.qi1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},14).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.5,-81,224.4,158);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.objects_find_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.object_1 = new lib.quest_item_2_9_mc();
	this.object_1.setTransform(-309,85);

	this.object_6 = new lib.quest_item_2_7_mc();
	this.object_6.setTransform(148,165);

	this.object_5 = new lib.quest_item_2_11_mc();
	this.object_5.setTransform(-4,115);

	this.object_4 = new lib.quest_item_2_10_mc();
	this.object_4.setTransform(-117,-37);

	this.object_3 = new lib.quest_item_2_8_mc();
	this.object_3.setTransform(336,110);

	this.object_2 = new lib.quest_item_2_12_mc();
	this.object_2.setTransform(146,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_2},{t:this.object_3},{t:this.object_4},{t:this.object_5},{t:this.object_6},{t:this.object_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-449.5,-292.3,875.9,551.9);
p.frameBounds = [rect];


(lib.objects_find_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.object_6 = new lib.quest_i6_mc();
	this.object_6.setTransform(159,-123);

	this.object_5 = new lib.quest_i5_mc();
	this.object_5.setTransform(41,100);

	this.object_1 = new lib.quest_i4_mc();
	this.object_1.setTransform(-326,170);

	this.object_3 = new lib.quest_i3_mc();
	this.object_3.setTransform(275,145);

	this.object_2 = new lib.quest_item_2_2_mc();
	this.object_2.setTransform(-160,70);

	this.object_4 = new lib.quest_i1_mc();
	this.object_4.setTransform(-298,-103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_4},{t:this.object_2},{t:this.object_3},{t:this.object_1},{t:this.object_5},{t:this.object_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-417.5,-235.8,780.6,456.8);
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


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shadow_nav_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:0.801},15).to({alpha:0.012},15).wait(1));

	// graph
	this.instance_1 = new lib.nav_2_img();
	this.instance_1.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHuQjNjMAAkiQAAkgDNjOQDOjNEgAAQEhAADNDNQDODOAAEgQAAEijODMQjNDOkhAAQkgAAjOjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.hint_find_panel_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.hint_find_panel_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25},6).to({scaleX:0.75,scaleY:0.75,alpha:0.012},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, new cjs.Rectangle(-41.6,-41.6,83.4,83.4), new cjs.Rectangle(-43.3,-43.3,86.7,86.7), new cjs.Rectangle(-45,-45,90,90), new cjs.Rectangle(-46.6,-46.6,93.4,93.4), new cjs.Rectangle(-48.3,-48.3,96.7,96.7), new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-47.4,-47.4,95,95), new cjs.Rectangle(-44.9,-44.9,90,90), new cjs.Rectangle(-42.4,-42.4,85,85), new cjs.Rectangle(-39.9,-39.9,80,80), new cjs.Rectangle(-37.4,-37.4,75,75), new cjs.Rectangle(-34.9,-34.9,70,70), new cjs.Rectangle(-32.4,-32.4,65,65), new cjs.Rectangle(-30,-30,60,60)];


(lib.hint_find_panel_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.hint_find_panel_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25},6).to({scaleX:0.75,scaleY:0.75,alpha:0.012},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, new cjs.Rectangle(-41.6,-41.6,83.4,83.4), new cjs.Rectangle(-43.3,-43.3,86.7,86.7), new cjs.Rectangle(-45,-45,90,90), new cjs.Rectangle(-46.6,-46.6,93.4,93.4), new cjs.Rectangle(-48.3,-48.3,96.7,96.7), new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-47.4,-47.4,95,95), new cjs.Rectangle(-44.9,-44.9,90,90), new cjs.Rectangle(-42.4,-42.4,85,85), new cjs.Rectangle(-39.9,-39.9,80,80), new cjs.Rectangle(-37.4,-37.4,75,75), new cjs.Rectangle(-34.9,-34.9,70,70), new cjs.Rectangle(-32.4,-32.4,65,65), new cjs.Rectangle(-30,-30,60,60)];


(lib.hint_find_panel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_find_panel_2_2_mc();
	this.instance.setTransform(72,0);

	this.instance_1 = new lib.hint_find_panel_2_2_mc();
	this.instance_1.setTransform(-72,0);

	this.instance_2 = new lib.hint_find_panel_2_2_mc();

	this.instance_3 = new lib.hint_find_panel_3_2_mc();
	this.instance_3.setTransform(72,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:-72}},{t:this.instance,p:{x:72}}]}).to({state:[{t:this.instance_1,p:{x:0}},{t:this.instance,p:{x:-72}},{t:this.instance_3,p:{x:72}}]},1).to({state:[{t:this.instance,p:{x:-72}},{t:this.instance_3,p:{x:0}}]},1).to({state:[{t:this.instance_3,p:{x:-72}}]},1).wait(1));

	// bg
	this.instance_4 = new lib.hint_find_panel_1_2_mc();
	this.instance_4.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-50,260,100);
p.frameBounds = [rect, rect, rect, rect];


(lib.hint_find_panel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_find_panel_2_1_mc();
	this.instance.setTransform(72,0);

	this.instance_1 = new lib.hint_find_panel_2_1_mc();
	this.instance_1.setTransform(-72,0);

	this.instance_2 = new lib.hint_find_panel_2_1_mc();

	this.instance_3 = new lib.hint_find_panel_3_1_mc();
	this.instance_3.setTransform(72,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:-72}},{t:this.instance,p:{x:72}}]}).to({state:[{t:this.instance_1,p:{x:0}},{t:this.instance,p:{x:-72}},{t:this.instance_3,p:{x:72}}]},1).to({state:[{t:this.instance,p:{x:-72}},{t:this.instance_3,p:{x:0}}]},1).to({state:[{t:this.instance_3,p:{x:-72}}]},1).wait(1));

	// bg
	this.instance_4 = new lib.hint_find_panel_1_1_mc();
	this.instance_4.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-50,260,100);
p.frameBounds = [rect, rect, rect, rect];


(lib.hero2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hat3_img();
	this.instance.setTransform(-147.9,-359.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_bag1front_img();
	this.instance_1.setTransform(-50,-143.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero1_eyes1_all_mc();
	this.instance_2.setTransform(-36.8,-206.1,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero2_fringe1_img();
	this.instance_3.setTransform(-217,-298);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero2_lips6_img();
	this.instance_4.setTransform(-48.3,-171.8,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-76,-225.9,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.h2_head12_img();
	this.instance_6.setTransform(-84.6,-282.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero2_top5_img();
	this.instance_7.setTransform(-119.3,-106.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero2_bottom5_img();
	this.instance_8.setTransform(-134,-5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.under1_mc();
	this.instance_9.setTransform(-48.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero2_b1_img();
	this.instance_10.setTransform(-118,-179.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.hero2_bag1back_img();
	this.instance_11.setTransform(-50,-143.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-217,-359.6,364,654);
p.frameBounds = [rect];


(lib.hero2_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_eyes1_all_mc();
	this.instance.setTransform(-51.3,-151.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero2_fringe0_img();
	this.instance_1.setTransform(-130,-272);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(-53.5,-97.6);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(-51.3,-153.8);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(-47.1,-117.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// skinSecond
	this.skinSecond = new lib.hero1_head1_all_mc();
	this.skinSecond.setTransform(-38.1,-167.7);

	this.timeline.addTween(cjs.Tween.get(this.skinSecond).wait(1));

	// body
	this.instance_2 = new lib.hero2_dress0_img();
	this.instance_2.setTransform(-264.5,-33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.under22_img();
	this.instance_3.setTransform(-158.6,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// skin
	this.skin = new lib.hero1_body_all_mc();
	this.skin.setTransform(-47.1,214.7);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// body
	this.instance_4 = new lib.hero2_hair0_img();
	this.instance_4.setTransform(-71.5,-333);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-264.5,-333,514,877.2);
p.frameBounds = [rect];


(lib.hero1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hat3_img();
	this.instance.setTransform(-73,-343.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_bag_main_mc();
	this.instance_1.setTransform(-160,178.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero2_eyes_all_mc();
	this.instance_2.setTransform(-14.2,-180.8,0.665,0.665,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero1_fringe3_img();
	this.instance_3.setTransform(-75.3,-253.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-19.7,-143.6,0.665,0.665);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero1_shadows3_img();
	this.instance_5.setTransform(-53.8,-204.3,0.665,0.665);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero2_head2_img();
	this.instance_6.setTransform(-70.8,-250.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero1_dress3_img();
	this.instance_7.setTransform(-144,-81.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.under2_mc();
	this.instance_8.setTransform(12.6,33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.h1_body21_img();
	this.instance_9.setTransform(-223.1,-151.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero1_hair3_img();
	this.instance_10.setTransform(-156.3,-283.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-246.6,-343.6,482.5,646.8);
p.frameBounds = [rect];


(lib.hero1_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_eyes_all_mc();
	this.instance.setTransform(-19.1,-104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero1_fringe0_img();
	this.instance_1.setTransform(-106.8,-208.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-12.4,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(-15.9,-109);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(-18.9,-61);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// skinSecond
	this.skinSecond = new lib.hero2_head_all1_mc();
	this.skinSecond.setTransform(-25.8,-114.8);

	this.timeline.addTween(cjs.Tween.get(this.skinSecond).wait(1));

	// body
	this.instance_2 = new lib.hero1_dress0_img();
	this.instance_2.setTransform(-242,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.under2_img();
	this.instance_3.setTransform(-69.3,49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// skin
	this.skin = new lib.hero2_body_all_mc();
	this.skin.setTransform(6.2,253.7);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// body
	this.instance_4 = new lib.hero1_hair0_img();
	this.instance_4.setTransform(-240,-252);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-312.3,-252,637,820.7);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero2_hat_all_mc();
	this.headdress.setTransform(-24.9,-295);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// accessory
	this.accessory = new lib.hero2_bag_all_mc();
	this.accessory.setTransform(10,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// body
	this.instance = new lib.hero1_eyes1_all_mc();
	this.instance.setTransform(-36.8,-206.1,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(-35,-128);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(-38.3,-167.3,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(-36.8,-207.7,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(-33.8,-181.2,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// skinSecond
	this.skinSecond = new lib.hero1_head_all_mc();
	this.skinSecond.setTransform(-27.7,-217.7);

	this.timeline.addTween(cjs.Tween.get(this.skinSecond).wait(1));

	// top
	this.top = new lib.hero2_top_all_mc();
	this.top.setTransform(-21.3,-83.2);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero2_bottom_all_mc();
	this.bottom.setTransform(-45,74.9);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(-56,34);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// body
	this.instance_1 = new lib.under1_mc();
	this.instance_1.setTransform(-48.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// skin
	this.skin = new lib.hero1_body_mc();
	this.skin.setTransform(-34.5,57.6);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// accessorySecond
	this.accessorySecond = new lib.hero2_bag_back_all_mc();
	this.accessorySecond.setTransform(10,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.accessorySecond).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(-35,-128);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-217,-355,364,649.5);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero1_hat_all_mc();
	this.headdress.setTransform(-8,-286);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// accessory
	this.accessory = new lib.hero1_bag_all_mc();
	this.accessory.setTransform(-160,178.9);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// body
	this.instance = new lib.hero2_eyes_all_mc();
	this.instance.setTransform(-14.2,-180.8,0.665,0.665,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-19.3,-216);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-9.8,-138.5,0.665,0.665,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(-12.1,-183.4,0.665,0.665,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(-14.1,-151.5,0.665,0.665);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// skinSecond
	this.skinSecond = new lib.hero2_head_all_mc();
	this.skinSecond.setTransform(-18.4,-187.7);

	this.timeline.addTween(cjs.Tween.get(this.skinSecond).wait(1));

	// top
	this.top = new lib.hero1_top_all_mc();
	this.top.setTransform(8,-22);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero1_bottom_all_mc();
	this.bottom.setTransform(15.9,146.9);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(-1,71.9);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// body
	this.instance_1 = new lib.under2_mc();
	this.instance_1.setTransform(12.6,33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// skin
	this.skin = new lib.hero2_body_mc();
	this.skin.setTransform(6,76.1);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-19.3,-216);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-223.1,-358.5,459,661.8);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,-0.1,0.575,0.575,0,0,0,-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-23,46,46);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d6_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A53ZyMAQSgyzIHrq3IIDACIJHNKMAKoAydIl2FDMgjpADFg");
	this.shape.setTransform(-16,216.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.6,-13.7,331.3,459.5);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d6_mc();
	this.instance.setTransform(-1,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsARJIhU1JIMjtZIGUADIHyJpIr9ZHg");
	this.shape.setTransform(-16.1,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157,-7.9,235,425.3);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d5_mc();
	this.instance.setTransform(-2,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ar1deIxSocIh6nYMAcsgq6IJNgOMAYJAvCIi4FNIw4Gug");
	this.shape.setTransform(-7.9,172.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.5,-16.3,397.2,377.6);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d5_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AshUCIBL7vINNtfID+ABIGsK1Inffjg");
	this.shape.setTransform(-26,125.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.5,-9.9,347,396.3);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d4_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvEezMgGbg0WIRVq/INWAJIHLK7MAFIAirInDTWg");
	this.shape.setTransform(-13.7,194.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.3,-14.3,275.2,416.8);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d4_mc();
	this.instance.setTransform(-1,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqVQrIi32QIJ0t1IIAAAIIlI8Is0d5g");
	this.shape.setTransform(-6,116.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-7.5,363,416);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d3_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1pcYMALsg48IOUARMARTAlvIj/TJg");
	this.shape.setTransform(7.4,171.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.2,-11.4,277.3,366);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d3_mc();
	this.instance.setTransform(-0.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsmO9Ihb44IJWl/IGVAAIMYJUIgvE1IsiRsg");
	this.shape.setTransform(10.7,90.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167.5,-11.5,313,362);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d2_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ar752IFdnfIKWAAIOmXfMAFIAo7MgvLACRg");
	this.shape.setTransform(12.9,202.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.1,-10.9,302.1,426.9);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d2_mc();
	this.instance.setTransform(0,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoHSxIoh0DIBsqFIKmpEIJEAAIJkIhICWKuIqpVog");
	this.shape.setTransform(-4.8,122.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-243,-8,446,431.5);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d1_mc();
	this.instance.setTransform(-2,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1aX2MACZgowILRq9IMOgFMAQ9AvJIguCpIzxGHg");
	this.shape.setTransform(17.6,164.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.5,-14.7,274.4,357.9);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d1_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvsRDIgk1gIE4ttII6lUIIKABIKlIcMgFJAmgg");
	this.shape.setTransform(-14.4,140.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-188.5,-9.4,335,410.8);
p.frameBounds = [rect];


(lib.current_location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_6_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_5_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_4_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_3_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.check_skin_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_skin_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_skin_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_skin_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_skin_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect, rect];


(lib.check_shadows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_shadows_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_shadows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_shadows_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_shadows_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


(lib.check_lips_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_lips_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_lips_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_lips_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


(lib.check_hairstyle_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_hairstyle_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_hairstyle_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_hairstyle_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect, rect];


(lib.check_blush_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_blush_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_blush_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_blush_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_blush_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


(lib.bottom_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b6_mc();
	this.instance.setTransform(-2.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwQmMIOIxTIGeACIL7SvItOb4IqOAWg");
	this.shape.setTransform(-2,135.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.1,-14.5,208.3,301);
p.frameBounds = [rect];


(lib.bottom_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b6_mc();
	this.instance.setTransform(-0.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtYQsIk8k3IENvZIJOvgIGhABIMdQAIEQMcIlDF8IwbDwg");
	this.shape.setTransform(10,114.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.3,-7.3,234.7,244.4);
p.frameBounds = [rect];


(lib.bottom_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b5_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwPSsIBLxtIOv1JIGlAAIJaT2IAmJ8IirKjg");
	this.shape.setTransform(-15.5,114.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.5,-14.9,208.2,258.4);
p.frameBounds = [rect];


(lib.bottom_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b5_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ax0O1IkOoNINx4NIMpAAIRrYdInkIJIvcClg");
	this.shape.setTransform(9.2,103.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.8,-9,282.2,225.3);
p.frameBounds = [rect];


(lib.bottom_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b4_mc();
	this.instance.setTransform(-2,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqOUIIju34IMJxMIGcAAIJUTzImcWGg");
	this.shape.setTransform(-4.1,117.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.4,-16.9,178.7,268.4);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b4_mc();
	this.instance.setTransform(-1,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107,0,240,246.4);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b3_mc();
	this.instance.setTransform(-2,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtDPvIB51oIL9sFIDUABIIyOaIALS2IwHCsg");
	this.shape.setTransform(-8.3,105.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.9,-9.7,167.4,230.3);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b3_mc();
	this.instance.setTransform(-1,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124,0,271,300.4);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b2_mc();
	this.instance.setTransform(-2.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqKN9IpLm7IPU18IKkgCIMzXmIrwGTg");
	this.shape.setTransform(-9.6,84.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.5,-11.4,247.8,191.6);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b2_mc();
	this.instance.setTransform(-0.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0dRsImVpnIVq+YIF5AAIaCYeIikIRIuYJnIt9CRg");
	this.shape.setTransform(13,135.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.5,-7.5,343.2,285.7);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b1_mc();
	this.instance.setTransform(-1.5,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AslPhIlmksIO47PIIiAIIM9ZMIlzHhg");
	this.shape.setTransform(-9.6,88.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126,-16.2,232.9,210.4);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b1_mc();
	this.instance.setTransform(-1,70.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuHiqIJGwwIHEAAIMFQDIgOWeI6mAUg");
	this.shape.setTransform(7.3,116.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.1,-8,180.9,248.8);
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


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge6_img();
	this.instance.setTransform(71,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(30,-15,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(-0.6,-1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.1,-85,186.2,151.4);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge6_img();
	this.instance.setTransform(-71,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(-30,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(1.3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-85,186.9,153.4);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge8_img();
	this.instance.setTransform(71,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(30,-15,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(-0.6,-1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.1,-85,186.2,151.4);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge5_img();
	this.instance.setTransform(-71,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(-30,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(1.3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-85,186.9,153.4);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge5_img();
	this.instance.setTransform(71,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(30,-15,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(-0.6,-1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.1,-85,186.2,151.4);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge4_img();
	this.instance.setTransform(-71,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(-30,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(1.3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-85,186.9,153.4);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge3_img();
	this.instance.setTransform(71,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(30,-15,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(-0.6,-1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.1,-85,186.2,151.4);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge3_img();
	this.instance.setTransform(-71,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(-30,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(1.3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-85,186.9,153.4);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge7_img();
	this.instance.setTransform(71,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(30,-15,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(-0.6,-1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.1,-85,186.2,151.4);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge2_img();
	this.instance.setTransform(-71,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(-30,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(1.3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-85,186.9,153.4);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge4_img();
	this.instance.setTransform(71,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(30,-15,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(-0.6,-1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.1,-85,186.2,151.4);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_rouge1_img();
	this.instance.setTransform(-71,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();
	this.check_mc.setTransform(-30,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnkHLIkBkHIhxppID4j8IG/AiIP2TTIhCBMIqsACg");
	this.shape.setTransform(1.3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-85,186.9,153.4);
p.frameBounds = [rect];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// substrate
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.arrow_checks_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(120,0);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-120,0);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-250,340,500);
p.frameBounds = [rect];


(lib.animation_set_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.set_1_4_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},4).to({scaleX:0.92,scaleY:0.92,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.set_0_4_mc();
	this.instance_1.setTransform(0,0,0.923,0.923);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:1},4).to({scaleX:0.92,scaleY:0.92},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-61.2,-61.2,122.5,122.5), new cjs.Rectangle(-62.5,-62.4,125,125), new cjs.Rectangle(-63.7,-63.7,127.5,127.5), new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-64.5,-64.4,129,129), new cjs.Rectangle(-64,-63.9,128,128), new cjs.Rectangle(-63.5,-63.4,127,127), new cjs.Rectangle(-63,-62.9,126,126), new cjs.Rectangle(-62.5,-62.4,125,125), new cjs.Rectangle(-62,-61.9,124,124), new cjs.Rectangle(-61.5,-61.4,123,123), new cjs.Rectangle(-61,-60.9,122,122), new cjs.Rectangle(-60.5,-60.4,121,121), new cjs.Rectangle(-60,-60,120,120)];


(lib.animation_set_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.set_1_3_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},4).to({scaleX:0.92,scaleY:0.92,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.set_0_3_mc();
	this.instance_1.setTransform(0,0,0.923,0.923);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:1},4).to({scaleX:0.92,scaleY:0.92},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-61.2,-61.2,122.5,122.5), new cjs.Rectangle(-62.5,-62.4,125,125), new cjs.Rectangle(-63.7,-63.7,127.5,127.5), new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-64.5,-64.4,129,129), new cjs.Rectangle(-64,-63.9,128,128), new cjs.Rectangle(-63.5,-63.4,127,127), new cjs.Rectangle(-63,-62.9,126,126), new cjs.Rectangle(-62.5,-62.4,125,125), new cjs.Rectangle(-62,-61.9,124,124), new cjs.Rectangle(-61.5,-61.4,123,123), new cjs.Rectangle(-61,-60.9,122,122), new cjs.Rectangle(-60.5,-60.4,121,121), new cjs.Rectangle(-60,-60,120,120)];


(lib.animation_set_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.set_1_2_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},4).to({scaleX:0.92,scaleY:0.92,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.set_0_2_mc();
	this.instance_1.setTransform(0,0,0.923,0.923);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:1},4).to({scaleX:0.92,scaleY:0.92},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-61.2,-61.2,122.5,122.5), new cjs.Rectangle(-62.5,-62.4,125,125), new cjs.Rectangle(-63.7,-63.7,127.5,127.5), new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-64.5,-64.4,129,129), new cjs.Rectangle(-64,-63.9,128,128), new cjs.Rectangle(-63.5,-63.4,127,127), new cjs.Rectangle(-63,-62.9,126,126), new cjs.Rectangle(-62.5,-62.4,125,125), new cjs.Rectangle(-62,-61.9,124,124), new cjs.Rectangle(-61.5,-61.4,123,123), new cjs.Rectangle(-61,-60.9,122,122), new cjs.Rectangle(-60.5,-60.4,121,121), new cjs.Rectangle(-60,-60,120,120)];


(lib.animation_set_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.set_1_1_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},4).to({scaleX:0.92,scaleY:0.92,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.set_0_1_mc();
	this.instance_1.setTransform(0,0,0.923,0.923);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:1},4).to({scaleX:0.92,scaleY:0.92},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-61.2,-61.2,122.5,122.5), new cjs.Rectangle(-62.5,-62.4,125,125), new cjs.Rectangle(-63.7,-63.7,127.5,127.5), new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-64.5,-64.4,129,129), new cjs.Rectangle(-64,-63.9,128,128), new cjs.Rectangle(-63.5,-63.4,127,127), new cjs.Rectangle(-63,-62.9,126,126), new cjs.Rectangle(-62.5,-62.4,125,125), new cjs.Rectangle(-62,-61.9,124,124), new cjs.Rectangle(-61.5,-61.4,123,123), new cjs.Rectangle(-61,-60.9,122,122), new cjs.Rectangle(-60.5,-60.4,121,121), new cjs.Rectangle(-60,-60,120,120)];


(lib.animation_pointing_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pointing_finger_mc();
	this.instance.setTransform(-220,600,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:180},15).to({rotation:30,x:230,y:200},30).to({x:100,y:600},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,305.6,390.9,588.9);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.5,278,389.2,588.1), new cjs.Rectangle(-414.5,250,389.2,588.1), new cjs.Rectangle(-414.5,222,389.2,588.1), new cjs.Rectangle(-414.5,194,389.2,588.1), new cjs.Rectangle(-414.5,166,389.2,588.1), new cjs.Rectangle(-414.5,138,389.2,588.1), new cjs.Rectangle(-414.5,110,389.2,588.1), new cjs.Rectangle(-414.5,82,389.2,588.1), new cjs.Rectangle(-414.5,54,389.2,588.1), new cjs.Rectangle(-414.5,26,389.2,588.1), new cjs.Rectangle(-414.5,-2,389.2,588.1), new cjs.Rectangle(-414.5,-30,389.2,588.1), new cjs.Rectangle(-414.5,-58,389.2,588.1), new cjs.Rectangle(-414.5,-85.9,389.2,588.1), new cjs.Rectangle(-415.4,-114.4,390.9,588.9), new cjs.Rectangle(-393.5,-111.6,377.2,584.9), new cjs.Rectangle(-372.4,-109.2,364.8,581.5), new cjs.Rectangle(-351.2,-106.6,352.3,577.5), new cjs.Rectangle(-329.7,-103.8,339.6,573.2), new cjs.Rectangle(-308.2,-100.7,326.5,568.5), new cjs.Rectangle(-286.6,-97.5,313.3,563.4), new cjs.Rectangle(-264.9,-94.1,299.8,557.9), new cjs.Rectangle(-243.9,-90.9,287.8,552.8), new cjs.Rectangle(-221.1,-86.7,272.3,545.8), new cjs.Rectangle(-199.9,-83.2,260,540), new cjs.Rectangle(-192,-85.8,274,546.6), new cjs.Rectangle(-183.1,-87.8,286.2,552), new cjs.Rectangle(-175.7,-90.5,301.5,558.6), new cjs.Rectangle(-166.6,-92.2,313.2,563.3), new cjs.Rectangle(-159.1,-94.4,328.1,569), new cjs.Rectangle(-150.5,-96,341.1,573.7), new cjs.Rectangle(-142,-97.6,354.1,578.3), new cjs.Rectangle(-133.2,-98.8,366.4,581.9), new cjs.Rectangle(-123.6,-99.7,377.1,584.9), new cjs.Rectangle(-115.4,-100.7,390.7,588.4), new cjs.Rectangle(-105.6,-101.3,401,590.8), new cjs.Rectangle(-97,-101.9,413.9,593.4), new cjs.Rectangle(-86.9,-102,423.6,595), new cjs.Rectangle(-78.1,-102.2,435.9,596.6), new cjs.Rectangle(-67.7,-102,445.2,597.6), new cjs.Rectangle(-58.5,-101.7,456.8,598.3), new cjs.Rectangle(-47.9,-101.2,465.5,598.5), new cjs.Rectangle(-37.7,-100.4,475.2,598.4), new cjs.Rectangle(-27.4,-99.5,484.6,597.9), new cjs.Rectangle(-17.6,-98.8,495.2,597.6), new cjs.Rectangle(-25.5,-71.7,493.6,596.9), new cjs.Rectangle(-34.2,-45,493.6,596.9), new cjs.Rectangle(-42.8,-18.3,493.6,596.9), new cjs.Rectangle(-51.5,8.3,493.6,596.9), new cjs.Rectangle(-60.2,35,493.6,596.8), new cjs.Rectangle(-68.8,61.6,493.6,596.9), new cjs.Rectangle(-77.5,88.3,493.6,596.9), new cjs.Rectangle(-86.2,115,493.6,596.8), new cjs.Rectangle(-94.8,141.6,493.6,596.9), new cjs.Rectangle(-103.5,168.3,493.6,596.9), new cjs.Rectangle(-112.2,195,493.6,596.8), new cjs.Rectangle(-120.8,221.6,493.6,596.9), new cjs.Rectangle(-129.5,248.3,493.6,596.9), new cjs.Rectangle(-138.2,275,493.6,596.8), new cjs.Rectangle(-147.6,301.2,495.2,597.6)];


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


(lib.animation_bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10},39).to({y:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-220,300,440);
p.frameBounds = [rect, new cjs.Rectangle(-150,-220.2,300,440), new cjs.Rectangle(-150,-220.5,300,440), new cjs.Rectangle(-150,-220.7,300,440), new cjs.Rectangle(-150,-221,300,440), new cjs.Rectangle(-150,-221.3,300,440), new cjs.Rectangle(-150,-221.5,300,440), new cjs.Rectangle(-150,-221.8,300,440), new cjs.Rectangle(-150,-222,300,440), new cjs.Rectangle(-150,-222.3,300,440), new cjs.Rectangle(-150,-222.5,300,440), new cjs.Rectangle(-150,-222.8,300,440), new cjs.Rectangle(-150,-223.1,300,440), new cjs.Rectangle(-150,-223.3,300,440), new cjs.Rectangle(-150,-223.6,300,440), new cjs.Rectangle(-150,-223.8,300,440), new cjs.Rectangle(-150,-224.1,300,440), new cjs.Rectangle(-150,-224.3,300,440), new cjs.Rectangle(-150,-224.6,300,440), new cjs.Rectangle(-150,-224.8,300,440), new cjs.Rectangle(-150,-225.1,300,440), new cjs.Rectangle(-150,-225.4,300,440), new cjs.Rectangle(-150,-225.6,300,440), new cjs.Rectangle(-150,-225.9,300,440), new cjs.Rectangle(-150,-226.1,300,440), new cjs.Rectangle(-150,-226.4,300,440), new cjs.Rectangle(-150,-226.6,300,440), new cjs.Rectangle(-150,-226.9,300,440), new cjs.Rectangle(-150,-227.2,300,440), new cjs.Rectangle(-150,-227.4,300,440), new cjs.Rectangle(-150,-227.7,300,440), new cjs.Rectangle(-150,-227.9,300,440), new cjs.Rectangle(-150,-228.2,300,440), new cjs.Rectangle(-150,-228.4,300,440), new cjs.Rectangle(-150,-228.7,300,440), new cjs.Rectangle(-150,-228.9,300,440), new cjs.Rectangle(-150,-229.2,300,440), new cjs.Rectangle(-150,-229.5,300,440), new cjs.Rectangle(-150,-229.7,300,440), new cjs.Rectangle(-150,-230,300,440), new cjs.Rectangle(-150,-229.7,300,440), new cjs.Rectangle(-150,-229.5,300,440), new cjs.Rectangle(-150,-229.2,300,440), new cjs.Rectangle(-150,-229,300,440), new cjs.Rectangle(-150,-228.7,300,440), new cjs.Rectangle(-150,-228.5,300,440), new cjs.Rectangle(-150,-228.2,300,440), new cjs.Rectangle(-150,-228,300,440), new cjs.Rectangle(-150,-227.7,300,440), new cjs.Rectangle(-150,-227.5,300,440), new cjs.Rectangle(-150,-227.2,300,440), new cjs.Rectangle(-150,-227,300,440), new cjs.Rectangle(-150,-226.7,300,440), new cjs.Rectangle(-150,-226.5,300,440), new cjs.Rectangle(-150,-226.2,300,440), new cjs.Rectangle(-150,-226,300,440), new cjs.Rectangle(-150,-225.7,300,440), new cjs.Rectangle(-150,-225.5,300,440), new cjs.Rectangle(-150,-225.2,300,440), new cjs.Rectangle(-150,-225,300,440), new cjs.Rectangle(-150,-224.7,300,440), new cjs.Rectangle(-150,-224.5,300,440), new cjs.Rectangle(-150,-224.2,300,440), new cjs.Rectangle(-150,-224,300,440), new cjs.Rectangle(-150,-223.7,300,440), new cjs.Rectangle(-150,-223.5,300,440), new cjs.Rectangle(-150,-223.2,300,440), new cjs.Rectangle(-150,-223,300,440), new cjs.Rectangle(-150,-222.7,300,440), new cjs.Rectangle(-150,-222.5,300,440), new cjs.Rectangle(-150,-222.2,300,440), new cjs.Rectangle(-150,-222,300,440), new cjs.Rectangle(-150,-221.7,300,440), new cjs.Rectangle(-150,-221.5,300,440), new cjs.Rectangle(-150,-221.2,300,440), new cjs.Rectangle(-150,-221,300,440), new cjs.Rectangle(-150,-220.7,300,440), new cjs.Rectangle(-150,-220.5,300,440), new cjs.Rectangle(-150,-220.2,300,440), new cjs.Rectangle(-150,-220,300,440)];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,-0.1,0.575,0.575,0,0,0,-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-23,46,46);
p.frameBounds = [rect];


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


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-24.2,-24.2,48.6,48.6), new cjs.Rectangle(-23.9,-23.9,47.8,47.8), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.8,-22.8,45.7,45.7), new cjs.Rectangle(-22.5,-22.5,45,45), new cjs.Rectangle(-22.1,-22.1,44.3,44.3), new cjs.Rectangle(-21.7,-21.7,43.6,43.6), new cjs.Rectangle(-21.4,-21.4,42.8,42.8), new cjs.Rectangle(-21,-21,42.2,42.2), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.3,-24.3,48.7,48.7), new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-25,-25,50,50)];


(lib.vk_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.vk_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


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
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-111.1,-111.1,222.3,222.3), new cjs.Rectangle(-112.3,-112.3,224.7,224.7), new cjs.Rectangle(-113.4,-113.4,227,227), new cjs.Rectangle(-114.6,-114.6,229.3,229.3), new cjs.Rectangle(-115.8,-115.8,231.6,231.6), new cjs.Rectangle(-115.2,-115.2,230.4,230.4), new cjs.Rectangle(-114.6,-114.6,229.3,229.3), new cjs.Rectangle(-114,-114,228.1,228.1), new cjs.Rectangle(-113.4,-113.4,227,227), new cjs.Rectangle(-112.8,-112.8,225.8,225.8), new cjs.Rectangle(-112.3,-112.3,224.7,224.7), new cjs.Rectangle(-111.7,-111.7,223.5,223.5), new cjs.Rectangle(-111.1,-111.1,222.3,222.3), new cjs.Rectangle(-110.5,-110.5,221.2,221.2), rect=new cjs.Rectangle(-110,-110,220,220), rect, rect, rect, rect, rect];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
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
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-111.1,-111.1,222.3,222.3), new cjs.Rectangle(-112.3,-112.3,224.7,224.7), new cjs.Rectangle(-113.4,-113.4,227,227), new cjs.Rectangle(-114.6,-114.6,229.3,229.3), new cjs.Rectangle(-115.8,-115.8,231.6,231.6), new cjs.Rectangle(-115.2,-115.2,230.4,230.4), new cjs.Rectangle(-114.6,-114.6,229.3,229.3), new cjs.Rectangle(-114,-114,228.1,228.1), new cjs.Rectangle(-113.4,-113.4,227,227), new cjs.Rectangle(-112.8,-112.8,225.8,225.8), new cjs.Rectangle(-112.3,-112.3,224.7,224.7), new cjs.Rectangle(-111.7,-111.7,223.5,223.5), new cjs.Rectangle(-111.1,-111.1,222.3,222.3), new cjs.Rectangle(-110.5,-110.5,221.2,221.2), new cjs.Rectangle(-110,-110,220,220)];


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
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
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
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
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
	this.instance = new lib.animation_bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-220,320,440);
p.frameBounds = [rect];


(lib.subject_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// animation
	this.instance = new lib.happy_hare_mc();
	this.instance.setTransform(180,-90);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({y:-150,alpha:1},9).to({y:-120},10).wait(36));

	// animation
	this.instance_1 = new lib.bam_mc();
	this.instance_1.setTransform(173,-100);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({alpha:1},5).to({alpha:0.5},15).wait(21));

	// animation
	this.instance_2 = new lib.text_bubble1_mc();
	this.instance_2.setTransform(130,-100);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({alpha:1},15).wait(56));

	// animation
	this.instance_3 = new lib.hero2_main_mc();
	this.instance_3.setTransform(-900,55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-230},19).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1047,-304.6,364,654);
p.frameBounds = [rect, new cjs.Rectangle(-1011.7,-304.6,364,654), new cjs.Rectangle(-976.4,-304.6,364,654), new cjs.Rectangle(-941.2,-304.6,364,654), new cjs.Rectangle(-905.9,-304.6,364,654), new cjs.Rectangle(-870.7,-304.6,364,654), new cjs.Rectangle(-835.4,-304.6,364,654), new cjs.Rectangle(-800.1,-304.6,364,654), new cjs.Rectangle(-764.9,-304.6,364,654), new cjs.Rectangle(-729.6,-304.6,364,654), new cjs.Rectangle(-694.3,-304.6,364,654), new cjs.Rectangle(-659.1,-304.6,364,654), new cjs.Rectangle(-623.8,-304.6,364,654), new cjs.Rectangle(-588.6,-304.6,364,654), new cjs.Rectangle(-553.3,-304.6,364,654), new cjs.Rectangle(-518,-304.6,364,654), new cjs.Rectangle(-482.8,-304.6,364,654), new cjs.Rectangle(-447.5,-304.6,364,654), new cjs.Rectangle(-412.2,-304.6,364,654), rect=new cjs.Rectangle(-377,-304.6,743.5,654), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-377,-310,743.5,659.4), new cjs.Rectangle(-377,-307,743.5,656.4), rect=new cjs.Rectangle(-377,-304.6,743.5,654), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.subject_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// animation
	this.instance = new lib.happy_hare_mc();
	this.instance.setTransform(180,-90);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({y:-150,alpha:1},9).to({y:-120},10).wait(36));

	// animation
	this.instance_1 = new lib.bam_mc();
	this.instance_1.setTransform(173,-100);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({alpha:1},5).to({alpha:0.5},15).wait(21));

	// animation
	this.instance_2 = new lib.text_bubble1_mc();
	this.instance_2.setTransform(130,-100);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({alpha:1},15).wait(56));

	// animation
	this.instance_3 = new lib.hero1_main_mc();
	this.instance_3.setTransform(-900,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-170},19).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1146.6,-288.6,482.5,646.8);
p.frameBounds = [rect, new cjs.Rectangle(-1092.1,-288.6,466.3,646.8), new cjs.Rectangle(-1053.6,-288.6,466.4,646.8), new cjs.Rectangle(-1015.2,-288.6,466.4,646.8), new cjs.Rectangle(-976.8,-288.6,466.4,646.8), new cjs.Rectangle(-938.4,-288.6,466.4,646.8), new cjs.Rectangle(-899.9,-288.6,466.4,646.8), new cjs.Rectangle(-861.5,-288.6,466.4,646.8), new cjs.Rectangle(-823.1,-288.6,466.4,646.8), new cjs.Rectangle(-784.7,-288.6,466.4,646.8), new cjs.Rectangle(-746.3,-288.6,466.4,646.8), new cjs.Rectangle(-707.8,-288.6,466.4,646.8), new cjs.Rectangle(-669.4,-288.6,466.4,646.8), new cjs.Rectangle(-631,-288.6,466.4,646.8), new cjs.Rectangle(-592.6,-288.6,466.4,646.8), new cjs.Rectangle(-554.2,-288.6,466.4,646.8), new cjs.Rectangle(-515.7,-288.6,466.4,646.8), new cjs.Rectangle(-477.3,-288.6,466.4,646.8), new cjs.Rectangle(-438.9,-288.6,466.4,646.8), rect=new cjs.Rectangle(-416.6,-288.6,783.2,646.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-416.6,-290,783.2,648.2), new cjs.Rectangle(-416.6,-296.6,783.2,654.8), new cjs.Rectangle(-416.6,-303.3,783.2,661.6), new cjs.Rectangle(-416.6,-310,783.2,668.2), new cjs.Rectangle(-416.6,-307,783.2,665.2), new cjs.Rectangle(-416.6,-304,783.2,662.2), new cjs.Rectangle(-416.6,-301,783.2,659.2), new cjs.Rectangle(-416.6,-298,783.2,656.2), new cjs.Rectangle(-416.6,-295,783.2,653.2), new cjs.Rectangle(-416.6,-292,783.2,650.2), new cjs.Rectangle(-416.6,-289,783.2,647.2), rect=new cjs.Rectangle(-416.6,-288.6,783.2,646.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.skin_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skin_3_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_skin_1_mc();
	this.check_mc.setTransform(0,0,0.909,0.909,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.skin_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skin_3_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_skin_1_mc();
	this.check_mc.setTransform(0,0,0.909,0.909,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.skin_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skin_2_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_skin_1_mc();
	this.check_mc.setTransform(0,0,0.909,0.909,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.skin_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skin_2_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_skin_1_mc();
	this.check_mc.setTransform(0,0,0.909,0.909,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.skin_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skin_1_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_skin_1_mc();
	this.check_mc.setTransform(0,0,0.909,0.909,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.skin_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skin_1_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_skin_1_mc();
	this.check_mc.setTransform(0,0,0.909,0.909,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow10_img();
	this.instance.setTransform(67,-66,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(15,-20,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsEmIMewMIGvg4ID8D4IAQGOIyEO3g");
	this.shape.setTransform(0.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-90,159.9,176.9);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow6_img();
	this.instance.setTransform(-67.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(-15,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsiYIAQmOID8j4IGvA4IMeQMIlVH5g");
	this.shape.setTransform(4.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,164.1,171.9);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow6_img();
	this.instance.setTransform(67,-66,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(15,-20,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsEmIMewMIGvg4ID8D4IAQGOIyEO3g");
	this.shape.setTransform(0.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-90,159.9,176.9);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow5_img();
	this.instance.setTransform(-67.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(-15,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsiYIAQmOID8j4IGvA4IMeQMIlVH5g");
	this.shape.setTransform(4.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,164.1,171.9);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow4_img();
	this.instance.setTransform(67,-66,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(15,-20,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsEmIMewMIGvg4ID8D4IAQGOIyEO3g");
	this.shape.setTransform(0.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-90,159.9,176.9);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow4_img();
	this.instance.setTransform(-67.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(-15,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsiYIAQmOID8j4IGvA4IMeQMIlVH5g");
	this.shape.setTransform(4.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,164.1,171.9);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow9_img();
	this.instance.setTransform(67,-66,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(15,-20,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsEmIMewMIGvg4ID8D4IAQGOIyEO3g");
	this.shape.setTransform(0.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-90,159.9,176.9);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow3_img();
	this.instance.setTransform(-67.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(-15,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsiYIAQmOID8j4IGvA4IMeQMIlVH5g");
	this.shape.setTransform(4.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,164.1,171.9);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow8_img();
	this.instance.setTransform(67,-66,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(15,-20,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsEmIMewMIGvg4ID8D4IAQGOIyEO3g");
	this.shape.setTransform(0.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-90,159.9,176.9);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow2_img();
	this.instance.setTransform(-67.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(-15,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsiYIAQmOID8j4IGvA4IMeQMIlVH5g");
	this.shape.setTransform(4.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,164.1,171.9);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow7_img();
	this.instance.setTransform(67,-66,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(15,-20,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsEmIMewMIGvg4ID8D4IAQGOIyEO3g");
	this.shape.setTransform(0.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-90,159.9,176.9);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_shadow1_img();
	this.instance.setTransform(-67.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();
	this.check_mc.setTransform(-15,-15,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsiYIAQmOID8j4IGvA4IMeQMIlVH5g");
	this.shape.setTransform(4.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,164.1,171.9);
p.frameBounds = [rect];


(lib.quest_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// panel
	this.panel_mc = new lib.hint_find_panel_2_mc();
	this.panel_mc.setTransform(0,-245);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// objects
	this.objects_mc = new lib.objects_find_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-449.5,-295,875.9,554.5);
p.frameBounds = [rect];


(lib.quest_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// panel
	this.panel_mc = new lib.hint_find_panel_1_mc();
	this.panel_mc.setTransform(0,-245);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// objects
	this.objects_mc = new lib.objects_find_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-417.5,-295,780.6,516);
p.frameBounds = [rect];


(lib.quest_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// animation
	this.instance = new lib.text_bubble5_mc();
	this.instance.setTransform(173.4,-90.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},9).to({_off:true},1).wait(35));

	// animation
	this.instance_1 = new lib.text_bubble1_mc();
	this.instance_1.setTransform(130,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:0.63,scaleY:0.63,x:30,alpha:0.012},15).to({_off:true},1).wait(20));

	// animation
	this.instance_2 = new lib.hero2_main_mc();
	this.instance_2.setTransform(-230,55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({x:-900},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-377,-304.6,743.5,654);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-377,-304.6,731.1,654), new cjs.Rectangle(-377,-304.6,718.7,654), new cjs.Rectangle(-377,-304.6,706.3,654), new cjs.Rectangle(-377,-304.6,693.8,654), new cjs.Rectangle(-377,-304.6,681.4,654), new cjs.Rectangle(-377,-304.6,669,654), new cjs.Rectangle(-377,-304.6,656.5,654), new cjs.Rectangle(-377,-304.6,644.1,654), new cjs.Rectangle(-377,-304.6,631.7,654), new cjs.Rectangle(-377,-304.6,619.2,654), new cjs.Rectangle(-377,-304.6,606.8,654), new cjs.Rectangle(-377,-304.6,594.4,654), new cjs.Rectangle(-377,-304.6,581.9,654), new cjs.Rectangle(-377,-304.6,569.5,654), new cjs.Rectangle(-377,-304.6,557,654), new cjs.Rectangle(-410.5,-304.6,364,654), new cjs.Rectangle(-444,-304.6,364,654), new cjs.Rectangle(-477.5,-304.6,364,654), new cjs.Rectangle(-511,-304.6,364,654), new cjs.Rectangle(-544.5,-304.6,364,654), new cjs.Rectangle(-578,-304.6,364,654), new cjs.Rectangle(-611.5,-304.6,364,654), new cjs.Rectangle(-645,-304.6,364,654), new cjs.Rectangle(-678.5,-304.6,364,654), new cjs.Rectangle(-712,-304.6,364,654), new cjs.Rectangle(-745.5,-304.6,364,654), new cjs.Rectangle(-779,-304.6,364,654), new cjs.Rectangle(-812.5,-304.6,364,654), new cjs.Rectangle(-846,-304.6,364,654), new cjs.Rectangle(-879.5,-304.6,364,654), new cjs.Rectangle(-913,-304.6,364,654), new cjs.Rectangle(-946.5,-304.6,364,654), new cjs.Rectangle(-980,-304.6,364,654), new cjs.Rectangle(-1013.5,-304.6,364,654), new cjs.Rectangle(-1047,-304.6,364,654)];


(lib.quest_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// animation
	this.instance = new lib.text_bubble2_mc();
	this.instance.setTransform(173.4,-90.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},9).to({_off:true},1).wait(30));

	// animation
	this.instance_1 = new lib.text_bubble1_mc();
	this.instance_1.setTransform(130,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({scaleX:0.63,scaleY:0.63,x:30,y:-80,alpha:0.012},14).to({_off:true},1).wait(20));

	// animation
	this.instance_2 = new lib.hero1_main_mc();
	this.instance_2.setTransform(-170,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({x:-900},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-416.6,-288.6,783.2,646.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-416.6,-288.6,769.8,646.8), new cjs.Rectangle(-416.6,-288.6,756.6,646.8), new cjs.Rectangle(-416.6,-288.6,743.2,646.8), new cjs.Rectangle(-416.6,-288.6,729.9,646.8), new cjs.Rectangle(-416.6,-288.6,716.6,646.8), new cjs.Rectangle(-416.6,-288.6,703.3,646.8), new cjs.Rectangle(-416.6,-288.6,690,646.8), new cjs.Rectangle(-416.6,-288.6,676.6,646.8), new cjs.Rectangle(-416.6,-288.6,663.3,646.8), new cjs.Rectangle(-416.6,-288.6,650,646.8), new cjs.Rectangle(-416.6,-288.6,636.7,646.8), new cjs.Rectangle(-416.6,-288.6,623.3,646.8), new cjs.Rectangle(-416.6,-288.6,610,646.8), new cjs.Rectangle(-416.6,-288.6,596.7,646.8), new cjs.Rectangle(-437,-288.6,466.4,646.8), new cjs.Rectangle(-473.5,-288.6,466.4,646.8), new cjs.Rectangle(-510,-288.6,466.4,646.8), new cjs.Rectangle(-546.5,-288.6,466.4,646.8), new cjs.Rectangle(-583,-288.6,466.4,646.8), new cjs.Rectangle(-619.5,-288.6,466.4,646.8), new cjs.Rectangle(-656,-288.6,466.4,646.8), new cjs.Rectangle(-692.5,-288.6,466.4,646.8), new cjs.Rectangle(-729,-288.6,466.4,646.8), new cjs.Rectangle(-765.5,-288.6,466.4,646.8), new cjs.Rectangle(-802,-288.6,466.4,646.8), new cjs.Rectangle(-838.5,-288.6,466.4,646.8), new cjs.Rectangle(-875,-288.6,466.4,646.8), new cjs.Rectangle(-911.5,-288.6,466.4,646.8), new cjs.Rectangle(-948,-288.6,466.4,646.8), new cjs.Rectangle(-984.5,-288.6,466.4,646.8), new cjs.Rectangle(-1021,-288.6,466.4,646.8), new cjs.Rectangle(-1057.5,-288.6,466.4,646.8), new cjs.Rectangle(-1094,-288.6,466.4,646.8), new cjs.Rectangle(-1146.6,-288.6,482.5,646.8)];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_126 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(126).call(this.frame_126).wait(1));

	// animation
	this.instance = new lib.body_pointer_mc();
	this.instance.setTransform(210,-120,1,1,0,-45,135);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({alpha:1},5).wait(20).to({alpha:0.012},5).to({_off:true},1).wait(12));

	// animation
	this.instance_1 = new lib.text_bubble4_mc();
	this.instance_1.setTransform(177.4,-94,0.538,0.538);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1},5).to({scaleX:1.2,scaleY:1.2},2).to({scaleX:1,scaleY:1},2).to({rotation:15},5).to({rotation:-15},10).to({rotation:0},6).to({scaleX:1.2,scaleY:1.2},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.54,scaleY:0.54,alpha:0.012},6).to({_off:true},1).wait(42));

	// animation
	this.instance_2 = new lib.text_bubble3_mc();
	this.instance_2.setTransform(177.4,-100,0.268,0.268);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({scaleX:1,scaleY:1},6).to({scaleX:1.07,scaleY:1.07},2).to({scaleX:1,scaleY:1},2).wait(71).to({scaleX:0.4,scaleY:0.4,x:172.4,y:-56,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.text_bubble5_mc();
	this.instance_3.setTransform(173.4,-90.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).wait(83));

	// animation
	this.instance_4 = new lib.text_bubble1_mc();
	this.instance_4.setTransform(130,-100);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({alpha:1},15).wait(93));

	// animation
	this.instance_5 = new lib.hero2_main_mc();
	this.instance_5.setTransform(-615,55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-230},19).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-762,-304.6,364,654);
p.frameBounds = [rect, new cjs.Rectangle(-741.7,-304.6,364,654), new cjs.Rectangle(-721.4,-304.6,364,654), new cjs.Rectangle(-701.2,-304.6,364,654), new cjs.Rectangle(-680.9,-304.6,364,654), new cjs.Rectangle(-660.7,-304.6,364,654), new cjs.Rectangle(-640.4,-304.6,364,654), new cjs.Rectangle(-620.1,-304.6,364,654), new cjs.Rectangle(-599.9,-304.6,364,654), new cjs.Rectangle(-579.6,-304.6,364,654), new cjs.Rectangle(-559.3,-304.6,364,654), new cjs.Rectangle(-539.1,-304.6,364,654), new cjs.Rectangle(-518.8,-304.6,364,654), new cjs.Rectangle(-498.6,-304.6,364,654), new cjs.Rectangle(-478.3,-304.6,364,654), new cjs.Rectangle(-458,-304.6,364,654), new cjs.Rectangle(-437.8,-304.6,364,654), new cjs.Rectangle(-417.5,-304.6,364,654), new cjs.Rectangle(-397.2,-304.6,364,654), rect=new cjs.Rectangle(-377,-304.6,743.5,654), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-377,-304.6,760.3,654), rect=new cjs.Rectangle(-377,-304.6,760.1,654), rect, rect, rect, rect=new cjs.Rectangle(-377,-304.6,760.3,654), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-377,-304.6,760.1,654), rect, rect, rect, new cjs.Rectangle(-377,-304.6,760.3,654), rect=new cjs.Rectangle(-377,-304.6,743.5,654), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_126 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(126).call(this.frame_126).wait(1));

	// animation
	this.instance = new lib.body_pointer_mc();
	this.instance.setTransform(210,-120,1,1,0,-45,135);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({alpha:1},5).wait(20).to({alpha:0.012},5).to({_off:true},1).wait(12));

	// animation
	this.instance_1 = new lib.text_bubble4_mc();
	this.instance_1.setTransform(177.4,-94,0.538,0.538);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1},5).to({scaleX:1.2,scaleY:1.2},2).to({scaleX:1,scaleY:1},2).to({rotation:15},5).to({rotation:-15},10).to({rotation:0},6).to({scaleX:1.2,scaleY:1.2},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.54,scaleY:0.54,alpha:0.012},6).to({_off:true},1).wait(42));

	// animation
	this.instance_2 = new lib.text_bubble3_mc();
	this.instance_2.setTransform(177.4,-100,0.268,0.268);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({scaleX:1,scaleY:1},6).to({scaleX:1.07,scaleY:1.07},2).to({scaleX:1,scaleY:1},2).wait(71).to({scaleX:0.4,scaleY:0.4,x:172.4,y:-56,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.text_bubble2_mc();
	this.instance_3.setTransform(173.4,-90.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).wait(83));

	// animation
	this.instance_4 = new lib.text_bubble1_mc();
	this.instance_4.setTransform(130,-100);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({alpha:1},15).wait(93));

	// animation
	this.instance_5 = new lib.hero1_main_mc();
	this.instance_5.setTransform(-540,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-170},19).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-786.6,-288.6,482.5,646.8);
p.frameBounds = [rect, new cjs.Rectangle(-751,-288.6,466.4,646.8), new cjs.Rectangle(-731.5,-288.6,466.4,646.8), new cjs.Rectangle(-712.1,-288.6,466.4,646.8), new cjs.Rectangle(-692.6,-288.6,466.4,646.8), new cjs.Rectangle(-673.1,-288.6,466.4,646.8), new cjs.Rectangle(-653.6,-288.6,466.4,646.8), new cjs.Rectangle(-634.2,-288.6,466.4,646.8), new cjs.Rectangle(-614.7,-288.6,466.4,646.8), new cjs.Rectangle(-595.2,-288.6,466.4,646.8), new cjs.Rectangle(-575.7,-288.6,466.4,646.8), new cjs.Rectangle(-556.3,-288.6,466.4,646.8), new cjs.Rectangle(-536.8,-288.6,466.4,646.8), new cjs.Rectangle(-517.3,-288.6,466.4,646.8), new cjs.Rectangle(-497.8,-288.6,466.4,646.8), new cjs.Rectangle(-478.4,-288.6,466.4,646.8), new cjs.Rectangle(-458.9,-288.6,466.4,646.8), new cjs.Rectangle(-439.4,-288.6,466.4,646.8), new cjs.Rectangle(-419.9,-288.6,466.4,646.8), new cjs.Rectangle(-416.6,-288.6,783.2,646.8), rect=new cjs.Rectangle(-400.5,-288.6,767,646.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400.5,-293.2,783.8,651.5), rect=new cjs.Rectangle(-400.5,-292.8,783.6,651.1), rect, rect, rect, rect=new cjs.Rectangle(-400.5,-293.2,783.8,651.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-400.5,-292.8,783.6,651.1), rect, rect, rect, new cjs.Rectangle(-400.5,-293.2,783.8,651.5), rect=new cjs.Rectangle(-400.5,-288.6,767,646.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-416.6,-288.6,783.2,646.8)];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(133.3,0,0.889,0.889,0,0,180,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.786,0.786,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
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
p.nominalBounds = rect = new cjs.Rectangle(-155,-90,180,180);
p.frameBounds = [rect, new cjs.Rectangle(-153.1,-88.9,177.9,177.9), new cjs.Rectangle(-151.3,-87.8,175.7,175.7), new cjs.Rectangle(-149.4,-86.7,173.5,173.6), new cjs.Rectangle(-147.6,-85.7,171.5,171.5), new cjs.Rectangle(-145.7,-84.6,169.3,169.3), new cjs.Rectangle(-143.9,-83.5,167.2,167.1), new cjs.Rectangle(-142,-82.5,165,165), new cjs.Rectangle(-140.2,-81.4,162.9,162.9), new cjs.Rectangle(-138.3,-80.3,160.7,160.7), new cjs.Rectangle(-136.5,-79.2,158.6,158.6), new cjs.Rectangle(-134.7,-78.2,156.5,156.5), new cjs.Rectangle(-132.8,-77.1,154.3,154.3), new cjs.Rectangle(-131,-76,152.2,152.1), new cjs.Rectangle(-129.1,-75,150,150), new cjs.Rectangle(-130.8,-75.9,152,152), new cjs.Rectangle(-132.6,-76.9,154,154), new cjs.Rectangle(-134.3,-77.9,156,156), new cjs.Rectangle(-136,-78.9,158,158), new cjs.Rectangle(-137.7,-79.9,160,160), new cjs.Rectangle(-139.4,-80.9,162,162), new cjs.Rectangle(-141.2,-81.9,164,164), new cjs.Rectangle(-142.9,-82.9,166,166), new cjs.Rectangle(-144.6,-83.9,168,168), new cjs.Rectangle(-146.3,-84.9,170,170), new cjs.Rectangle(-148.1,-85.9,172,172), new cjs.Rectangle(-149.8,-86.9,174,174), new cjs.Rectangle(-151.5,-87.9,176,176), new cjs.Rectangle(-153.2,-88.9,178,178), new cjs.Rectangle(-155,-90,180,180)];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(-133.3,0,0.889,0.889,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.5,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_6_img();
	this.instance.setTransform(-195,-195);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_6_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgIuAgsIsusFIjww3IMD4RIQ+sJIUvZNIApZhIuLOog");
	this.shape.setTransform(-10.3,-6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-215.4,390,418.4);
p.frameBounds = [rect, new cjs.Rectangle(-205,-215.4,410,420.4), new cjs.Rectangle(-195,-215.4,390,418.4)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-195,-195);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// graph
	this.instance_2 = new lib.current_location_5_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqdfjIsup2Ij0xnIHiyDIP5xlIN/AAIQldNIlwWxItSLHg");
	this.shape.setTransform(1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-201.9,390,404);
p.frameBounds = [rect, new cjs.Rectangle(-205,-205,410,410), new cjs.Rectangle(-195,-201.9,390,404)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-195,-195);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_4_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxaayIrOo7MAFMggiIRUsGINdAAIUNevIBHK8Iv1L4g");
	this.shape.setTransform(4.1,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect, new cjs.Rectangle(-205,-205,410,410), new cjs.Rectangle(-195,-195,390,390)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-195,-195);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_3_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArLfoItzpJIiNxJIEN1SINZvrILhAAIUYYUIE4U3IuMSEg");
	this.shape.setTransform(-4,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-203.9,390,405);
p.frameBounds = [rect, new cjs.Rectangle(-205,-205,410,410), new cjs.Rectangle(-195,-203.9,390,405)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-195,-195);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_2_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AswfAIpgtXIjcwoIE+21ILWpLINxAAIRHSlIENXsIpXTug");
	this.shape.setTransform(-6.8,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,403);
p.frameBounds = [rect, new cjs.Rectangle(-205,-205,410,413), new cjs.Rectangle(-195,-195,390,403)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-195,-195);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_1_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuKZLIu5pUIFU8wISksRIPtAGIRCcSIBgKNIsdLwg");
	this.shape.setTransform(4.4,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect, rect, rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips5_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips6_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips9_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips5_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips8_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips4_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips7_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips3_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips2_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips2_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips1_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.closet_lips1_img();
	this.instance.setTransform(-43,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();
	this.check_mc.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiSDNAAQDPAACSCSQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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

	// heroes
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(570,360);

	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(290,340);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_1,p:{x:290}},{t:this.hero_2,p:{x:570}}]}).to({state:[{t:this.hero_2,p:{x:440}}]},1).to({state:[{t:this.hero_1,p:{x:410}}]},1).to({state:[{t:this.hero_1,p:{x:290}},{t:this.hero_2,p:{x:570}}]},1).to({state:[{t:this.hero_1,p:{x:410}}]},1).to({state:[{t:this.hero_2,p:{x:440}}]},1).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_4_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-18.5,1200,672.9);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,654.4), new cjs.Rectangle(-200,-18.5,1200,661.8), new cjs.Rectangle(-200,-18.5,1200,672.9), new cjs.Rectangle(-200,-18.5,1200,661.8), new cjs.Rectangle(-200,0,1200,654.4)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(600,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:400,y:350},10).to({x:200,y:280},10).wait(60).to({x:420,y:350},11).to({x:600,y:280},9).wait(1));

	// hero_2
	this.instance_1 = new lib.hero2_main_mc();
	this.instance_1.setTransform(1250,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({x:610},20).wait(60).to({x:1250},20).wait(1));

	// hero_2
	this.instance_2 = new lib.hero1_main_mc();
	this.instance_2.setTransform(280,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({x:-450},20).wait(60).to({x:280},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(33.4,-9.6,1363.7,662.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(13,-9.6,1352,662.8), new cjs.Rectangle(-23.5,-9.6,1356.5,662.8), new cjs.Rectangle(-60,-9.6,1361,662.8), new cjs.Rectangle(-96.5,-9.6,1365.5,662.8), new cjs.Rectangle(-133,-9.6,1370,662.8), new cjs.Rectangle(-169.5,-9.6,1374.5,662.8), new cjs.Rectangle(-206,-9.6,1379,662.8), new cjs.Rectangle(-242.5,-9.6,1383.5,662.8), new cjs.Rectangle(-279,-9.6,1388,662.8), new cjs.Rectangle(-315.5,-9.6,1392.5,662.8), new cjs.Rectangle(-352,-9.6,1397,662.8), new cjs.Rectangle(-388.5,-9.6,1401.5,662.8), new cjs.Rectangle(-425,-9.6,1406,662.8), new cjs.Rectangle(-461.5,-9.6,1410.5,662.8), new cjs.Rectangle(-498,-9.6,1415,662.8), new cjs.Rectangle(-534.5,-9.6,1419.5,662.8), new cjs.Rectangle(-571,-9.6,1424,662.8), new cjs.Rectangle(-607.5,-9.6,1428.5,662.8), new cjs.Rectangle(-644,-9.6,1433,662.8), rect=new cjs.Rectangle(-696.6,-9.6,1453.7,662.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-644,-9.6,1433,662.8), new cjs.Rectangle(-607.5,-9.6,1428.5,662.8), new cjs.Rectangle(-571,-9.6,1424,662.8), new cjs.Rectangle(-534.5,-9.6,1419.5,662.8), new cjs.Rectangle(-498,-9.6,1415,662.8), new cjs.Rectangle(-461.5,-9.6,1410.5,662.8), new cjs.Rectangle(-425,-9.6,1406,662.8), new cjs.Rectangle(-388.5,-9.6,1401.5,662.8), new cjs.Rectangle(-352,-9.6,1397,662.8), new cjs.Rectangle(-315.5,-9.6,1392.5,662.8), new cjs.Rectangle(-279,-9.6,1388,662.8), new cjs.Rectangle(-242.5,-9.6,1383.5,662.8), new cjs.Rectangle(-206,-9.6,1379,662.8), new cjs.Rectangle(-169.5,-9.6,1374.5,662.8), new cjs.Rectangle(-133,-9.6,1370,662.8), new cjs.Rectangle(-96.5,-9.6,1365.5,662.8), new cjs.Rectangle(-60,-9.6,1361,662.8), new cjs.Rectangle(-23.5,-9.6,1356.5,662.8), new cjs.Rectangle(13,-9.6,1352,662.8), new cjs.Rectangle(33.4,-9.6,1363.7,662.8)];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":89});

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-85.1,75.2,0.629,0.629,0,45,-135,0,0.3);
	this.pointer_1.alpha = 0.012;
	this.pointer_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(44).to({_off:false},0).to({alpha:1},5).to({alpha:0.012},15).to({_off:true},1).wait(25));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(900,50);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(29).to({x:140},15).to({x:180},5).wait(15).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({x:900},15).wait(1));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-900,-50,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(29).to({x:-140},15).to({x:-180},5).wait(15).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({x:-900},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1095,-265.4,2190,517.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1044.3,-265.4,2088.7,517.4), new cjs.Rectangle(-993.6,-265.4,1987.3,517.4), new cjs.Rectangle(-943,-265.4,1886,517.4), new cjs.Rectangle(-892.3,-265.4,1784.7,517.4), new cjs.Rectangle(-841.6,-265.4,1683.3,517.4), new cjs.Rectangle(-791,-265.4,1582,517.4), new cjs.Rectangle(-740.3,-265.4,1480.7,517.4), new cjs.Rectangle(-689.6,-265.4,1379.3,517.4), new cjs.Rectangle(-639,-265.4,1278,517.4), new cjs.Rectangle(-588.3,-265.4,1176.7,517.4), new cjs.Rectangle(-537.6,-265.4,1075.3,517.4), new cjs.Rectangle(-487,-265.4,974,517.4), new cjs.Rectangle(-436.3,-265.4,872.7,517.4), new cjs.Rectangle(-385.6,-265.4,771.3,517.4), new cjs.Rectangle(-335,-265.4,670,517.4), new cjs.Rectangle(-343,-265.4,686,517.4), new cjs.Rectangle(-351,-265.4,702,517.4), new cjs.Rectangle(-359,-265.4,718,517.4), new cjs.Rectangle(-367,-265.4,734,517.4), rect=new cjs.Rectangle(-375,-265.4,750,517.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-270.9,760.1,528.1), new cjs.Rectangle(-385,-276.4,770,538.8), new cjs.Rectangle(-390.1,-281.9,780.2,549.5), new cjs.Rectangle(-395,-287.5,790.1,560.2), new cjs.Rectangle(-400,-293,800,570.9), new cjs.Rectangle(-395,-287.5,790.1,560.3), new cjs.Rectangle(-390,-281.9,780.1,549.5), new cjs.Rectangle(-385,-276.4,770,538.8), new cjs.Rectangle(-380,-270.9,760,528.2), new cjs.Rectangle(-375,-265.4,750,517.4), new cjs.Rectangle(-423,-265.4,846,517.4), new cjs.Rectangle(-471,-265.4,942,517.4), new cjs.Rectangle(-519,-265.4,1038,517.4), new cjs.Rectangle(-567,-265.4,1134,517.4), new cjs.Rectangle(-615,-265.4,1230,517.4), new cjs.Rectangle(-663,-265.4,1326,517.4), new cjs.Rectangle(-711,-265.4,1422,517.4), new cjs.Rectangle(-759,-265.4,1518,517.4), new cjs.Rectangle(-807,-265.4,1614,517.4), new cjs.Rectangle(-855,-265.4,1710,517.4), new cjs.Rectangle(-903,-265.4,1806,517.4), new cjs.Rectangle(-951,-265.4,1902,517.4), new cjs.Rectangle(-999,-265.4,1998,517.4), new cjs.Rectangle(-1047,-265.4,2094,517.4), new cjs.Rectangle(-1095,-265.4,2190,517.4)];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":89});

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-85.1,75.2,0.629,0.629,0,45,-135,0,0.3);
	this.pointer_1.alpha = 0.012;
	this.pointer_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(44).to({_off:false},0).to({alpha:1},5).to({alpha:0.012},15).to({_off:true},1).wait(25));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-900,-50,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(29).to({x:-150},15).to({x:-180},5).wait(15).to({x:50,y:0},10).to({x:0},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(1));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(900,50);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(29).to({x:140},15).to({x:180},5).to({x:900},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1095,-251.9,2190,505);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1045,-251.9,2089.4,505), new cjs.Rectangle(-995,-251.9,1988.7,505), new cjs.Rectangle(-945,-251.9,1888,505), new cjs.Rectangle(-895,-251.9,1787.4,505), new cjs.Rectangle(-845,-251.9,1686.7,505), new cjs.Rectangle(-795,-251.9,1586,505), new cjs.Rectangle(-745,-251.9,1485.4,505), new cjs.Rectangle(-695,-251.9,1384.7,505), new cjs.Rectangle(-645,-251.9,1284,505), new cjs.Rectangle(-595,-251.9,1183.4,505), new cjs.Rectangle(-545,-251.9,1082.7,505), new cjs.Rectangle(-495,-251.9,982,505), new cjs.Rectangle(-445,-251.9,881.4,505), new cjs.Rectangle(-395,-251.9,780.7,505), new cjs.Rectangle(-345,-251.9,680,505), new cjs.Rectangle(-351,-251.9,694,505), new cjs.Rectangle(-357,-251.9,708,505), new cjs.Rectangle(-363,-251.9,722,505), new cjs.Rectangle(-369,-251.9,736,505), new cjs.Rectangle(-375,-251.9,750,505), new cjs.Rectangle(-375,-251.9,798,505), new cjs.Rectangle(-375,-251.9,846,505), new cjs.Rectangle(-375,-251.9,894,505), new cjs.Rectangle(-375,-251.9,942,505), new cjs.Rectangle(-375,-251.9,990,505), new cjs.Rectangle(-375,-251.9,1038,505), new cjs.Rectangle(-375,-251.9,1086,505), new cjs.Rectangle(-375,-251.9,1134,505), new cjs.Rectangle(-375,-251.9,1182,505), new cjs.Rectangle(-375,-251.9,1230,505), new cjs.Rectangle(-375,-251.9,1278,505), new cjs.Rectangle(-375,-251.9,1326,505), new cjs.Rectangle(-375,-251.9,1374,505), new cjs.Rectangle(-375,-251.9,1422,505), new cjs.Rectangle(-375,-251.9,1470,505), new cjs.Rectangle(-352,-246.9,1447,500), new cjs.Rectangle(-329,-241.9,1424,495), new cjs.Rectangle(-306,-236.9,1401,490), new cjs.Rectangle(-283,-231.9,1378,485), new cjs.Rectangle(-260,-226.9,1355,480), new cjs.Rectangle(-237,-221.9,1332,475), new cjs.Rectangle(-214,-216.9,1309,470), new cjs.Rectangle(-191,-211.9,1286,465), new cjs.Rectangle(-168,-206.9,1263,460), new cjs.Rectangle(-145,-201.9,1240,455), new cjs.Rectangle(-155,-201.9,1250,455), new cjs.Rectangle(-165,-201.9,1260,455), new cjs.Rectangle(-175,-201.9,1270,455), new cjs.Rectangle(-185,-201.9,1280,455), new cjs.Rectangle(-195,-201.9,1290,455), new cjs.Rectangle(-200,-207.1,1295.1,460.1), new cjs.Rectangle(-205,-212.3,1300,465.3), new cjs.Rectangle(-210,-217.4,1305.1,470.5), new cjs.Rectangle(-215,-222.6,1310,475.7), new cjs.Rectangle(-220,-227.8,1315,480.8), new cjs.Rectangle(-215,-222.6,1310.1,475.7), new cjs.Rectangle(-210,-217.4,1305.1,470.5), new cjs.Rectangle(-205,-212.3,1300.1,465.3), new cjs.Rectangle(-200,-207.1,1295.1,460.1), new cjs.Rectangle(-195,-201.9,1290,455)];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":89});

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-100.1,50.2,0.629,0.629,0,45,-135,0,0.3);
	this.pointer_1.alpha = 0.012;
	this.pointer_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(44).to({_off:false},0).to({alpha:1},5).to({alpha:0.012},15).to({_off:true},1).wait(25));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-900,-50);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(29).to({x:-140},15).to({x:-180},5).wait(15).to({x:50,y:0},10).to({x:0},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(900,50);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(29).to({x:140},15).to({x:180},5).to({x:900},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1095,-245,2190,497);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1044.3,-245,2088.7,497), new cjs.Rectangle(-993.6,-245,1987.3,497), new cjs.Rectangle(-943,-245,1886,497), new cjs.Rectangle(-892.3,-245,1784.7,497), new cjs.Rectangle(-841.6,-245,1683.3,497), new cjs.Rectangle(-791,-245,1582,497), new cjs.Rectangle(-740.3,-245,1480.7,497), new cjs.Rectangle(-689.6,-245,1379.3,497), new cjs.Rectangle(-639,-245,1278,497), new cjs.Rectangle(-588.3,-245,1176.7,497), new cjs.Rectangle(-537.6,-245,1075.3,497), new cjs.Rectangle(-487,-245,974,497), new cjs.Rectangle(-436.3,-245,872.7,497), new cjs.Rectangle(-385.6,-245,771.3,497), new cjs.Rectangle(-335,-245,670,497), new cjs.Rectangle(-343,-245,686,497), new cjs.Rectangle(-351,-245,702,497), new cjs.Rectangle(-359,-245,718,497), new cjs.Rectangle(-367,-245,734,497), new cjs.Rectangle(-375,-245,750,497), new cjs.Rectangle(-375,-245,798,497), new cjs.Rectangle(-375,-245,846,497), new cjs.Rectangle(-375,-245,894,497), new cjs.Rectangle(-375,-245,942,497), new cjs.Rectangle(-375,-245,990,497), new cjs.Rectangle(-375,-245,1038,497), new cjs.Rectangle(-375,-245,1086,497), new cjs.Rectangle(-375,-245,1134,497), new cjs.Rectangle(-375,-245,1182,497), new cjs.Rectangle(-375,-245,1230,497), new cjs.Rectangle(-375,-245,1278,497), new cjs.Rectangle(-375,-245,1326,497), new cjs.Rectangle(-375,-245,1374,497), new cjs.Rectangle(-375,-245,1422,497), new cjs.Rectangle(-375,-245,1470,497), new cjs.Rectangle(-352,-240,1447,492), new cjs.Rectangle(-329,-235,1424,487), new cjs.Rectangle(-306,-230,1401,482), new cjs.Rectangle(-283,-225,1378,477), new cjs.Rectangle(-260,-220,1355,472), new cjs.Rectangle(-237,-215,1332,467), new cjs.Rectangle(-214,-210,1309,462), new cjs.Rectangle(-191,-205,1286,457), new cjs.Rectangle(-168,-200,1263,452), new cjs.Rectangle(-145,-195,1240,447), new cjs.Rectangle(-155,-195,1250,447), new cjs.Rectangle(-165,-195,1260,447), new cjs.Rectangle(-175,-195,1270,447), new cjs.Rectangle(-185,-195,1280,447), new cjs.Rectangle(-195,-195,1290,447), new cjs.Rectangle(-199.9,-199.9,1295,452), new cjs.Rectangle(-205,-205,1300,457), new cjs.Rectangle(-209.9,-209.9,1305,462), new cjs.Rectangle(-215,-215,1310,467), new cjs.Rectangle(-220,-220,1315,472), new cjs.Rectangle(-214.9,-214.9,1310,467), new cjs.Rectangle(-209.9,-209.9,1305,462), new cjs.Rectangle(-204.9,-204.9,1300,457), new cjs.Rectangle(-199.9,-199.9,1295,452), new cjs.Rectangle(-195,-195,1290,447)];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":89});

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-100.1,75.2,0.629,0.629,0,45,-135,0,0.3);
	this.pointer_1.alpha = 0.012;
	this.pointer_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(44).to({_off:false},0).to({alpha:1},5).to({alpha:0.012},15).to({_off:true},1).wait(25));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(900,50,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({x:140},15).to({x:180},5).wait(15).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({x:900},15).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-900,-50);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(29).to({x:-140},15).to({x:-180},5).wait(15).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({x:-900},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1095,-253.9,2190,512);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1044.3,-253.9,2088.7,512), new cjs.Rectangle(-993.6,-253.9,1987.3,512), new cjs.Rectangle(-943,-253.9,1886,512), new cjs.Rectangle(-892.3,-253.9,1784.7,512), new cjs.Rectangle(-841.6,-253.9,1683.3,512), new cjs.Rectangle(-791,-253.9,1582,512), new cjs.Rectangle(-740.3,-253.9,1480.7,512), new cjs.Rectangle(-689.6,-253.9,1379.3,512), new cjs.Rectangle(-639,-253.9,1278,512), new cjs.Rectangle(-588.3,-253.9,1176.7,512), new cjs.Rectangle(-537.6,-253.9,1075.3,512), new cjs.Rectangle(-487,-253.9,974,512), new cjs.Rectangle(-436.3,-253.9,872.7,512), new cjs.Rectangle(-385.6,-253.9,771.3,512), new cjs.Rectangle(-335,-253.9,670,512), new cjs.Rectangle(-343,-253.9,686,512), new cjs.Rectangle(-351,-253.9,702,512), new cjs.Rectangle(-359,-253.9,718,512), new cjs.Rectangle(-367,-253.9,734,512), rect=new cjs.Rectangle(-375,-253.9,750,512), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-379.9,-259.2,759.9,522.6), new cjs.Rectangle(-385,-264.4,770,533.1), new cjs.Rectangle(-390,-269.6,780,543.7), new cjs.Rectangle(-395,-274.8,790.1,554.2), new cjs.Rectangle(-400,-280.1,800,564.8), new cjs.Rectangle(-394.9,-274.9,789.9,554.3), new cjs.Rectangle(-389.9,-269.6,779.9,543.7), new cjs.Rectangle(-384.9,-264.4,769.8,533.1), new cjs.Rectangle(-379.9,-259.2,759.8,522.7), new cjs.Rectangle(-375,-253.9,750,512), new cjs.Rectangle(-423,-253.9,846,512), new cjs.Rectangle(-471,-253.9,942,512), new cjs.Rectangle(-519,-253.9,1038,512), new cjs.Rectangle(-567,-253.9,1134,512), new cjs.Rectangle(-615,-253.9,1230,512), new cjs.Rectangle(-663,-253.9,1326,512), new cjs.Rectangle(-711,-253.9,1422,512), new cjs.Rectangle(-759,-253.9,1518,512), new cjs.Rectangle(-807,-253.9,1614,512), new cjs.Rectangle(-855,-253.9,1710,512), new cjs.Rectangle(-903,-253.9,1806,512), new cjs.Rectangle(-951,-253.9,1902,512), new cjs.Rectangle(-999,-253.9,1998,512), new cjs.Rectangle(-1047,-253.9,2094,512), new cjs.Rectangle(-1095,-253.9,2190,512)];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":89});

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-100.1,75.2,0.629,0.629,0,45,-135,0,0.3);
	this.pointer_1.alpha = 0.012;
	this.pointer_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(44).to({_off:false},0).to({alpha:1},5).to({alpha:0.012},15).to({_off:true},1).wait(25));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-900,-50);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({x:-140},15).to({x:-180},5).wait(15).to({x:50,y:0},10).to({x:0},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(900,50,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(29).to({x:140},15).to({x:180},5).to({x:900},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1095,-245,2190,496);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1044.3,-245,2088.7,496), new cjs.Rectangle(-993.6,-245,1987.3,496), new cjs.Rectangle(-943,-245,1886,496), new cjs.Rectangle(-892.3,-245,1784.7,496), new cjs.Rectangle(-841.6,-245,1683.3,496), new cjs.Rectangle(-791,-245,1582,496), new cjs.Rectangle(-740.3,-245,1480.7,496), new cjs.Rectangle(-689.6,-245,1379.3,496), new cjs.Rectangle(-639,-245,1278,496), new cjs.Rectangle(-588.3,-245,1176.7,496), new cjs.Rectangle(-537.6,-245,1075.3,496), new cjs.Rectangle(-487,-245,974,496), new cjs.Rectangle(-436.3,-245,872.7,496), new cjs.Rectangle(-385.6,-245,771.3,496), new cjs.Rectangle(-335,-245,670,496), new cjs.Rectangle(-343,-245,686,496), new cjs.Rectangle(-351,-245,702,496), new cjs.Rectangle(-359,-245,718,496), new cjs.Rectangle(-367,-245,734,496), new cjs.Rectangle(-375,-245,750,496), new cjs.Rectangle(-375,-245,798,496), new cjs.Rectangle(-375,-245,846,496), new cjs.Rectangle(-375,-245,894,496), new cjs.Rectangle(-375,-245,942,496), new cjs.Rectangle(-375,-245,990,496), new cjs.Rectangle(-375,-245,1038,496), new cjs.Rectangle(-375,-245,1086,496), new cjs.Rectangle(-375,-245,1134,496), new cjs.Rectangle(-375,-245,1182,496), new cjs.Rectangle(-375,-245,1230,496), new cjs.Rectangle(-375,-245,1278,496), new cjs.Rectangle(-375,-245,1326,496), new cjs.Rectangle(-375,-245,1374,496), new cjs.Rectangle(-375,-245,1422,496), new cjs.Rectangle(-375,-245,1470,496), new cjs.Rectangle(-352,-240,1447,491), new cjs.Rectangle(-329,-235,1424,486), new cjs.Rectangle(-306,-230,1401,481), new cjs.Rectangle(-283,-225,1378,476), new cjs.Rectangle(-260,-220,1355,471), new cjs.Rectangle(-237,-215,1332,466), new cjs.Rectangle(-214,-210,1309,461), new cjs.Rectangle(-191,-205,1286,456), new cjs.Rectangle(-168,-200,1263,451), new cjs.Rectangle(-145,-195,1240,446), new cjs.Rectangle(-155,-195,1250,446), new cjs.Rectangle(-165,-195,1260,446), new cjs.Rectangle(-175,-195,1270,446), new cjs.Rectangle(-185,-195,1280,446), new cjs.Rectangle(-195,-195,1290,446), new cjs.Rectangle(-199.9,-199.9,1295,451), new cjs.Rectangle(-205,-204.9,1300,456), new cjs.Rectangle(-209.9,-209.9,1305,461), new cjs.Rectangle(-215,-214.9,1310,466), new cjs.Rectangle(-220,-220,1315,471), new cjs.Rectangle(-214.9,-214.9,1310,466), new cjs.Rectangle(-209.9,-209.9,1305,461), new cjs.Rectangle(-204.9,-204.9,1300,456), new cjs.Rectangle(-199.9,-199.9,1295,451), new cjs.Rectangle(-195,-195,1290,446)];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":89});

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-100.1,100.2,0.629,0.629,0,45,-135,0,0.3);
	this.pointer_1.alpha = 0.012;
	this.pointer_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(44).to({_off:false},0).to({y:50.2,alpha:1},5).to({y:100.2,alpha:0.012},15).to({_off:true},1).wait(25));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-900,-50);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(29).to({x:-140},15).to({x:-180},5).wait(15).to({x:50,y:0},10).to({x:0},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(900,50,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({x:140},15).to({x:180},5).to({x:900},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1095,-245,2190,503);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1044.3,-245,2088.7,503), new cjs.Rectangle(-993.6,-245,1987.3,503), new cjs.Rectangle(-943,-245,1886,503), new cjs.Rectangle(-892.3,-245,1784.7,503), new cjs.Rectangle(-841.6,-245,1683.3,503), new cjs.Rectangle(-791,-245,1582,503), new cjs.Rectangle(-740.3,-245,1480.7,503), new cjs.Rectangle(-689.6,-245,1379.3,503), new cjs.Rectangle(-639,-245,1278,503), new cjs.Rectangle(-588.3,-245,1176.7,503), new cjs.Rectangle(-537.6,-245,1075.3,503), new cjs.Rectangle(-487,-245,974,503), new cjs.Rectangle(-436.3,-245,872.7,503), new cjs.Rectangle(-385.6,-245,771.3,503), new cjs.Rectangle(-335,-245,670,503), new cjs.Rectangle(-343,-245,686,503), new cjs.Rectangle(-351,-245,702,503), new cjs.Rectangle(-359,-245,718,503), new cjs.Rectangle(-367,-245,734,503), new cjs.Rectangle(-375,-245,750,503), new cjs.Rectangle(-375,-245,798,503), new cjs.Rectangle(-375,-245,846,503), new cjs.Rectangle(-375,-245,894,503), new cjs.Rectangle(-375,-245,942,503), new cjs.Rectangle(-375,-245,990,503), new cjs.Rectangle(-375,-245,1038,503), new cjs.Rectangle(-375,-245,1086,503), new cjs.Rectangle(-375,-245,1134,503), new cjs.Rectangle(-375,-245,1182,503), new cjs.Rectangle(-375,-245,1230,503), new cjs.Rectangle(-375,-245,1278,503), new cjs.Rectangle(-375,-245,1326,503), new cjs.Rectangle(-375,-245,1374,503), new cjs.Rectangle(-375,-245,1422,503), new cjs.Rectangle(-375,-245,1470,503), new cjs.Rectangle(-352,-240,1447,498), new cjs.Rectangle(-329,-235,1424,493), new cjs.Rectangle(-306,-230,1401,488), new cjs.Rectangle(-283,-225,1378,483), new cjs.Rectangle(-260,-220,1355,478), new cjs.Rectangle(-237,-215,1332,473), new cjs.Rectangle(-214,-210,1309,468), new cjs.Rectangle(-191,-205,1286,463), new cjs.Rectangle(-168,-200,1263,458), new cjs.Rectangle(-145,-195,1240,453), new cjs.Rectangle(-155,-195,1250,453), new cjs.Rectangle(-165,-195,1260,453), new cjs.Rectangle(-175,-195,1270,453), new cjs.Rectangle(-185,-195,1280,453), new cjs.Rectangle(-195,-195,1290,453), new cjs.Rectangle(-199.9,-199.9,1295,458), new cjs.Rectangle(-205,-205,1300,463), new cjs.Rectangle(-209.9,-209.9,1305,468), new cjs.Rectangle(-215,-215,1310,473), new cjs.Rectangle(-220,-220,1315,478), new cjs.Rectangle(-214.9,-214.9,1310,473), new cjs.Rectangle(-209.9,-209.9,1305,468), new cjs.Rectangle(-204.9,-204.9,1300,463), new cjs.Rectangle(-199.9,-199.9,1295,458), new cjs.Rectangle(-195,-195,1290,453)];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-145,-140);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-145,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(-25,170);

	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(-75,80);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(65,80);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(45,-40);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(-95,-40);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-5,-130);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(70,135);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(-70,135);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(0,45);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(70,-45);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(-70,-45);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(0,-135);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(50,130);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(-70,130);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(90,0);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-20,0);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(-130,0);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(0,-130);

	this.skin_3 = new lib.skin_3_2_mc();
	this.skin_3.setTransform(55,110);

	this.skin_2 = new lib.skin_2_2_mc();
	this.skin_2.setTransform(-110,40);

	this.skin_1 = new lib.skin_1_2_mc();
	this.skin_1.setTransform(25,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_5},{t:this.blush_6},{t:this.blush_4}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.skin_1},{t:this.skin_2},{t:this.skin_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.1,-215,346.2,451.4);
p.frameBounds = [rect, new cjs.Rectangle(-140,-205,280,410), new cjs.Rectangle(-204.8,-220,379.9,436.9), new cjs.Rectangle(-220,-210,385,430)];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(140,-140);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(140,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(25,170);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(75,80);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(-65,80);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(-45,-40);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(95,-40);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(5,-130);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(70,135);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-70,135);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(0,45);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(70,-45);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-70,-45);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(0,-135);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(50,130);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-70,130);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(130,0);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(20,0);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(-90,0);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(0,-130);

	this.skin_3 = new lib.skin_3_1_mc();
	this.skin_3.setTransform(-55,110);

	this.skin_2 = new lib.skin_2_1_mc();
	this.skin_2.setTransform(105,35);

	this.skin_1 = new lib.skin_1_1_mc();
	this.skin_1.setTransform(-25,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_2},{t:this.blush_6}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.skin_1},{t:this.skin_2},{t:this.skin_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-215,346.9,453.4);
p.frameBounds = [rect, new cjs.Rectangle(-140,-205,280,410), new cjs.Rectangle(-175,-215,384.1,431.9), new cjs.Rectangle(-165,-210,380,430)];


(lib.closet_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(185,-200);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(185,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessory_0}]},5).to({state:[{t:this.headdress_0}]},1).wait(1));

	// options
	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(-130,-232);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(-10,-232);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(110,-232);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(-110,-62);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(0,-62);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(110,-62);

	this.top_5 = new lib.top_5_2_mc();
	this.top_5.setTransform(-120,-232);

	this.top_6 = new lib.top_6_2_mc();
	this.top_6.setTransform(-10,-232);

	this.top_4 = new lib.top_4_2_mc();
	this.top_4.setTransform(120,-232);

	this.bottom_5 = new lib.bottom_5_2_mc();
	this.bottom_5.setTransform(-110,-62);

	this.bottom_6 = new lib.bottom_6_2_mc();
	this.bottom_6.setTransform(0,-62);

	this.bottom_4 = new lib.bottom_4_2_mc();
	this.bottom_4.setTransform(110,-62);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(60,-232);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(-80,-232);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(-80,-232);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(80,-232);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(-80,-232);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(80,-232);

	this.accessory_5 = new lib.accessory_5_2_mc();
	this.accessory_5.setTransform(0,-164);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(-110,-172);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(110,-158);

	this.accessory_6 = new lib.accessory_6_2_mc();
	this.accessory_6.setTransform(0,32);

	this.accessory_4 = new lib.accessory_4_2_mc();
	this.accessory_4.setTransform(140,48);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(-120,30);

	this.headdress_6 = new lib.headdress_6_2_mc();
	this.headdress_6.setTransform(100,122);

	this.headdress_5 = new lib.headdress_5_2_mc();
	this.headdress_5.setTransform(-70,117);

	this.headdress_4 = new lib.headdress_4_2_mc();
	this.headdress_4.setTransform(80,-30);

	this.headdress_3 = new lib.headdress_3_2_mc();
	this.headdress_3.setTransform(-95,-37);

	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(80,-173);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(-100,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom_1},{t:this.bottom_3},{t:this.bottom_2},{t:this.top_1},{t:this.top_3},{t:this.top_2}]}).to({state:[{t:this.bottom_4},{t:this.bottom_6},{t:this.bottom_5},{t:this.top_4},{t:this.top_6},{t:this.top_5}]},1).to({state:[{t:this.dress_5},{t:this.dress_2}]},1).to({state:[{t:this.dress_3},{t:this.dress_4}]},1).to({state:[{t:this.dress_6},{t:this.dress_1}]},1).to({state:[{t:this.accessory_3},{t:this.accessory_4},{t:this.accessory_6},{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_5}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_5},{t:this.headdress_6}]},1).wait(1));

	// decor
	this.instance = new lib.stick_2_mc();
	this.instance.setTransform(0,220);

	this.instance_1 = new lib.stick_2_mc();
	this.instance_1.setTransform(0,-220);

	this.instance_2 = new lib.stick_2_mc();
	this.instance_2.setTransform(0,-50);

	this.instance_3 = new lib.shelf_2_mc();
	this.instance_3.setTransform(0,160);

	this.instance_4 = new lib.shelf_2_mc();
	this.instance_4.setTransform(0,10);

	this.instance_5 = new lib.shelf_2_mc();
	this.instance_5.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-220}},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-220}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-243.5,-245.6,460.4,490.7);
p.frameBounds = [rect, new cjs.Rectangle(-229.5,-245,444.6,490), new cjs.Rectangle(-286.5,-248.3,510.5,493.4), new cjs.Rectangle(-231.3,-246.3,457.5,491.3), new cjs.Rectangle(-215,-246.7,444.7,491.8), new cjs.Rectangle(-215,-294.7,466.6,539.8), new cjs.Rectangle(-215,-246.8,430,491.9)];


(lib.closet_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-185,-200);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-185,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessory_0}]},5).to({state:[{t:this.headdress_0}]},1).wait(1));

	// options
	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(120,-232);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(40,-232);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(-80,-232);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(-120,-62);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(0,-62);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(120,-62);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(130,-232);

	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(-90,-232);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(30,-232);

	this.bottom_6 = new lib.bottom_6_1_mc();
	this.bottom_6.setTransform(-120,-62);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(0,-62);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(120,-62);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(-50,-232);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(120,-232);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(120,-232);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-50,-232);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(-50,-232);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(120,-232);

	this.accessory_5 = new lib.accessory_5_1_mc();
	this.accessory_5.setTransform(-5,40);

	this.accessory_6 = new lib.accessory_6_1_mc();
	this.accessory_6.setTransform(120,68);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(110,-207);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(-110,-204);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(-120,45);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(5,-215);

	this.headdress_5 = new lib.headdress_5_1_mc();
	this.headdress_5.setTransform(120,110);

	this.headdress_4 = new lib.headdress_4_1_mc();
	this.headdress_4.setTransform(-80,110);

	this.headdress_3 = new lib.headdress_3_1_mc();
	this.headdress_3.setTransform(140,-43);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(-130,-42);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(-3,-52);

	this.headdress_6 = new lib.headdress_6_1_mc();
	this.headdress_6.setTransform(10,-187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom_2},{t:this.bottom_3},{t:this.bottom_1},{t:this.top_2},{t:this.top_3},{t:this.top_1}]}).to({state:[{t:this.bottom_5},{t:this.bottom_4},{t:this.bottom_6},{t:this.top_5},{t:this.top_6},{t:this.top_4}]},1).to({state:[{t:this.dress_5},{t:this.dress_2}]},1).to({state:[{t:this.dress_3},{t:this.dress_4}]},1).to({state:[{t:this.dress_1},{t:this.dress_6}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4},{t:this.accessory_6},{t:this.accessory_5}]},1).to({state:[{t:this.headdress_6},{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_5}]},1).wait(1));

	// decor
	this.instance = new lib.stick_2_mc();
	this.instance.setTransform(0,220);

	this.instance_1 = new lib.stick_2_mc();
	this.instance_1.setTransform(0,-220);

	this.instance_2 = new lib.stick_2_mc();
	this.instance_2.setTransform(0,-50);

	this.instance_3 = new lib.shelf_2_mc();
	this.instance_3.setTransform(0,-140);

	this.instance_4 = new lib.shelf_2_mc();
	this.instance_4.setTransform(0,10);

	this.instance_5 = new lib.shelf_2_mc();
	this.instance_5.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-220}},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-220}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{y:-140}},{t:this.instance_1,p:{y:-80}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3,p:{y:160}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-245,519.6,490);
p.frameBounds = [rect, new cjs.Rectangle(-227.3,-245,497.7,490), new cjs.Rectangle(-293,-245,553.5,490), new cjs.Rectangle(-217.5,-245,505.5,490), new cjs.Rectangle(-215,-245,481.5,490), new cjs.Rectangle(-215,-314.5,430,559.6), new cjs.Rectangle(-215,-258.5,443.7,503.6)];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(90,45);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(-90,45);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(0,-145);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(0,45);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(-90,-145);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(90,-145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_5},{t:this.hair_6},{t:this.hair_4}]},1).wait(1));

	// decor
	this.instance = new lib.stick_2_mc();
	this.instance.setTransform(0,220);

	this.instance_1 = new lib.stick_2_mc();
	this.instance_1.setTransform(0,60);

	this.instance_2 = new lib.stick_2_mc();
	this.instance_2.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-265,430,510);
p.frameBounds = [rect, rect];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(90,55);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(-90,55);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(0,-145);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(0,55);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(90,-145);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(-90,-145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_6},{t:this.hair_5}]},1).wait(1));

	// decor
	this.instance = new lib.stick_2_mc();
	this.instance.setTransform(0,220);

	this.instance_1 = new lib.stick_2_mc();
	this.instance_1.setTransform(0,60);

	this.instance_2 = new lib.stick_2_mc();
	this.instance_2.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-265,430,510);
p.frameBounds = [rect, rect];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-243.5,-245.6,460.4,490.7);
p.frameBounds = [rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-265,430,510);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.1,-215,346.2,451.4);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-245,519.6,490);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-265,430,510);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-215,346.9,453.4);
p.frameBounds = [rect];


(lib.body_set_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_4_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.instance_1 = new lib.animation_set_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.body_set_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_3_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.instance_1 = new lib.animation_set_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.body_set_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_2_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.instance_1 = new lib.animation_set_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.body_set_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.set_1_1_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.instance_1 = new lib.animation_set_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.arrow_checks_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.animation_pointing_finger_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,-250,585.5,1144.5);
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
	this.instance.setTransform(0,0,0.955,0.955);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect, new cjs.Rectangle(-110,-110,220,220), new cjs.Rectangle(-105,-105,210,210), new cjs.Rectangle(-110,-110,220,220)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();
	this.instance.setTransform(0,0,0.955,0.955);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect, new cjs.Rectangle(-110,-110,220,220), new cjs.Rectangle(-105,-105,210,210), new cjs.Rectangle(-110,-110,220,220)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();
	this.instance.setTransform(0,0,0.955,0.955);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect, new cjs.Rectangle(-110,-110,220,220), new cjs.Rectangle(-105,-105,210,210), new cjs.Rectangle(-110,-110,220,220)];


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
	this.instance.setTransform(0,0,0.955,0.955);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect, new cjs.Rectangle(-110,-110,220,220), new cjs.Rectangle(-105,-105,210,210), new cjs.Rectangle(-110,-110,220,220)];


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
	this.instance.setTransform(0,0,0.955,0.955);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect, new cjs.Rectangle(-110,-110,220,220), new cjs.Rectangle(-105,-105,210,210), new cjs.Rectangle(-110,-110,220,220)];


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
p.nominalBounds = rect = new cjs.Rectangle(-300,0,1400,600);
p.frameBounds = [rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-10,1200,620);
p.frameBounds = [rect];


(lib.set_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.body_set_4_mc();
	this.check_mc.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGnQixivAAj4QAAj3CxiwQCviwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAivixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.set_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.body_set_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGnQixivAAj4QAAj3CxiwQCviwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAivixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.set_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.body_set_2_mc();
	this.check_mc.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.set_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.body_set_1_mc();
	this.check_mc.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(100,575.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();
	this.heroes_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-18.5,1200,672.9);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.frame_6_mc = new lib.frame_locations_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1095,-245,2190,503);
p.frameBounds = [rect, new cjs.Rectangle(-1095,-245,2190,496), new cjs.Rectangle(-1095,-253.9,2190,512), new cjs.Rectangle(-1095,-245,2190,497), new cjs.Rectangle(-1095,-251.9,2190,505), new cjs.Rectangle(-1095,-265.4,2190,517.4)];


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
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(50,220);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-50,220);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-243.5,-300,460.4,800);
p.frameBounds = [rect];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(50,220);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-50,220);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-300,430,800);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(50,240);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-50,240);

	this.set_4 = new lib.set_4_mc();
	this.set_4.setTransform(180,135,1,1,5);

	this.set_3 = new lib.set_3_mc();
	this.set_3.setTransform(195,20);

	this.set_2 = new lib.set_2_mc();
	this.set_2.setTransform(170,-90,1,1,-5);

	this.set_1 = new lib.set_1_mc();
	this.set_1.setTransform(125,-180,1,1,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.set_2},{t:this.set_3},{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-260,465,555);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(50,220);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-50,220);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-300,519.6,800);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(50,220);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-50,220);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-300,430,800);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(50,240);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-50,240);

	this.set_4 = new lib.set_4_mc();
	this.set_4.setTransform(-180,135,1,1,-5);

	this.set_3 = new lib.set_3_mc();
	this.set_3.setTransform(-195,20);

	this.set_2 = new lib.set_2_mc();
	this.set_2.setTransform(-170,-90,1,1,5);

	this.set_1 = new lib.set_1_mc();
	this.set_1.setTransform(-125,-180,1,1,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.set_2},{t:this.set_3},{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-255,-260,465,555);
p.frameBounds = [rect];


(lib.arrow_checks_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,-250,585.5,1144.5);
p.frameBounds = [rect];


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
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

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

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-695,-280.8,2190,1161.9);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.vk_btn = new lib.vk_btn();
	this.vk_btn.setTransform(220,700,0.818,0.818);
	new cjs.ButtonHelper(this.vk_btn, 0, 1, 2, false, new lib.vk_btn(), 3);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,510);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,510);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(700,340);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(100,340);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.vk_btn}]}).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{regY:0,scaleX:1,scaleY:1,rotation:0,x:340,y:-80}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{regY:0.1,scaleX:0.786,scaleY:0.786,rotation:-45,x:545.1,y:255.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regY:0,scaleX:1,scaleY:1,rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// subjects
	this.subject_3 = new lib.subject_3_4_mc();
	this.subject_3.setTransform(400,300);
	this.subject_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.subject_3).wait(2).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.arrow_checks_mc();
	this.frame_1_mc.setTransform(400,300);

	this.object_2 = new lib.object_2_1_mc();
	this.object_2.setTransform(575,210);

	this.frame_3_mc = new lib.quest_3_4_mc();
	this.frame_3_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.quest_1_4_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.quest_2_4_mc();
	this.subject_2.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-362,-329.4,932,1523.9);
p.frameBounds = [rect, new cjs.Rectangle(23,-329.4,743.5,978.8), new cjs.Rectangle(-647,-329.4,1473.4,978.8)];


(lib.quest_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":119});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,520,0.762,0.762);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({y:480},7).to({y:520},3).wait(1).to({y:700},9).wait(51));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_mc.setTransform(240,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-500},0).wait(28).to({x:280},16).to({x:240},4).wait(11).to({x:-500},18).wait(42));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(660,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1300},0).wait(28).to({x:620},16).to({x:660},4).wait(11).to({x:440},18).wait(42));

	// decor
	this.instance = new lib.eggs_rule_world_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({alpha:0.602},9).wait(42));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},19).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3.5,-15,810.5,835.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-743.5,-15,2190.5,835.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-694.7,-15,2099.3,835.1), new cjs.Rectangle(-646,-15,2008,835.1), new cjs.Rectangle(-597.2,-15,1916.8,835.1), new cjs.Rectangle(-548.5,-15,1825.5,835.1), new cjs.Rectangle(-499.7,-15,1734.3,835.1), new cjs.Rectangle(-451,-15,1643,835.1), new cjs.Rectangle(-402.2,-15,1551.8,835.1), new cjs.Rectangle(-353.5,-15,1460.5,835.1), new cjs.Rectangle(-304.7,-15,1369.3,835.1), new cjs.Rectangle(-256,-15,1278,835.1), new cjs.Rectangle(-207.2,-15,1186.8,835.1), new cjs.Rectangle(-158.5,-15,1095.5,835.1), new cjs.Rectangle(-109.7,-15,1004.3,835.1), new cjs.Rectangle(-61,-15,913,835.1), new cjs.Rectangle(-12.2,-15,821.8,835.1), new cjs.Rectangle(36.5,-15,767.3,835.1), new cjs.Rectangle(26.5,-15,777.3,835.1), new cjs.Rectangle(16.5,-15,787.3,835.1), new cjs.Rectangle(6.5,-15,797.3,835.1), rect=new cjs.Rectangle(-3.5,-15,810.5,835.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-15,1220,835.1), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-250.1,-15,1260.2,835.1), new cjs.Rectangle(-291.2,-15,1301.3,835.1), new cjs.Rectangle(-332.4,-15,1342.4,835.1), new cjs.Rectangle(-373.5,-15,1383.5,835.1), new cjs.Rectangle(-414.6,-15,1424.6,835.1), new cjs.Rectangle(-455.7,-15,1465.7,835.1), new cjs.Rectangle(-496.8,-15,1506.9,835.1), new cjs.Rectangle(-537.9,-15,1548,835.1), new cjs.Rectangle(-579,-15,1589.1,835.1), new cjs.Rectangle(-620.1,-15,1630.2,835.1), new cjs.Rectangle(-661.3,-15,1671.3,835.1), new cjs.Rectangle(-702.4,-15,1712.4,835.1), rect=new cjs.Rectangle(-743.5,-15,1753.5,835.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":119});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(80,520,0.762,0.762);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({y:480},7).to({y:520},3).wait(1).to({y:700},9).wait(51));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(560,315);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1300},0).wait(28).to({x:520},16).to({x:560},4).wait(11).to({x:1300},19).wait(41));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(200,320);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-500},0).wait(28).to({x:240},16).to({x:200},4).wait(11).to({x:410},19).wait(41));

	// decor
	this.instance = new lib.eggs_rule_world_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({alpha:0.602},9).wait(41));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({alpha:1},19).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.1,-38.5,887.8,853.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-723.1,-38.5,2327.8,853.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-676.9,-38.5,2232.8,853.6), new cjs.Rectangle(-630.6,-38.5,2137.8,853.6), new cjs.Rectangle(-584.4,-38.5,2042.8,853.6), new cjs.Rectangle(-538.1,-38.5,1947.8,853.6), new cjs.Rectangle(-491.9,-38.5,1852.8,853.6), new cjs.Rectangle(-445.6,-38.5,1757.8,853.6), new cjs.Rectangle(-399.4,-38.5,1662.8,853.6), new cjs.Rectangle(-353.1,-38.5,1567.8,853.6), new cjs.Rectangle(-306.9,-38.5,1472.8,853.6), new cjs.Rectangle(-260.6,-38.5,1377.8,853.6), new cjs.Rectangle(-214.4,-38.5,1282.8,853.6), new cjs.Rectangle(-168.1,-38.5,1187.8,853.6), new cjs.Rectangle(-121.9,-38.5,1092.8,853.6), new cjs.Rectangle(-75.6,-38.5,997.8,853.6), new cjs.Rectangle(-29.4,-38.5,902.8,853.6), new cjs.Rectangle(-3.8,-38.5,828.4,853.6), new cjs.Rectangle(-3.8,-38.5,838.4,853.6), new cjs.Rectangle(-3.8,-38.5,848.4,853.6), new cjs.Rectangle(-13.1,-38.5,867.8,853.6), rect=new cjs.Rectangle(-23.1,-38.5,887.8,853.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-38.5,1220,853.6), rect, rect, rect, new cjs.Rectangle(-210,-38.5,1230.4,853.6), new cjs.Rectangle(-210,-38.5,1269.4,853.6), new cjs.Rectangle(-210,-38.5,1308.3,853.6), new cjs.Rectangle(-210,-38.5,1347.3,853.6), new cjs.Rectangle(-210,-38.5,1386.2,853.6), new cjs.Rectangle(-210,-38.5,1425.1,853.6), new cjs.Rectangle(-210,-38.5,1464.1,853.6), new cjs.Rectangle(-210,-38.5,1503,853.6), new cjs.Rectangle(-210,-38.5,1542,853.6), new cjs.Rectangle(-210,-38.5,1580.9,853.6), new cjs.Rectangle(-210,-38.5,1619.9,853.6), new cjs.Rectangle(-210,-38.5,1658.8,853.6), new cjs.Rectangle(-210,-38.5,1697.8,853.6), new cjs.Rectangle(-210,-38.5,1736.7,853.6), new cjs.Rectangle(-210,-38.5,1775.7,853.6), rect=new cjs.Rectangle(-210,-38.5,1814.6,853.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{regY:0,scaleX:1,scaleY:1,rotation:0,x:340,y:-80}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{regY:0.1,scaleX:0.786,scaleY:0.786,rotation:-45,x:545.1,y:255.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regY:0,scaleX:1,scaleY:1,rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// subjects
	this.subject_3 = new lib.subject_3_1_mc();
	this.subject_3.setTransform(400,300);
	this.subject_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.subject_3).wait(2).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.arrow_checks_mc();
	this.frame_1_mc.setTransform(400,300);

	this.object_2 = new lib.object_2_1_mc();
	this.object_2.setTransform(575,210);

	this.frame_3_mc = new lib.quest_3_1_mc();
	this.frame_3_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.quest_1_1_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.quest_2_1_mc();
	this.subject_2.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-386.6,-329.4,956.7,1523.9);
p.frameBounds = [rect, new cjs.Rectangle(-16.6,-329.4,783.2,987.6), new cjs.Rectangle(-746.6,-329.4,1509.7,987.6)];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":159});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,520,0.762,0.762);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(58).to({y:480},7).to({y:520},3).wait(1).to({y:700},9).wait(81));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_mc.setTransform(240,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-500},0).wait(28).to({x:300},15).to({x:240},5).wait(21).to({x:-500},19).wait(71));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(660,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:1000},0).wait(48).to({y:310},11).to({y:340},4).wait(25).to({x:440},20).wait(51));

	// decor
	this.instance = new lib.eggs_rule_world_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({alpha:0.602},9).wait(52));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({alpha:1},20).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(25,-15,782,835.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-715,20,1522,1274.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-661.6,20,1468.7,1274.4), new cjs.Rectangle(-608.3,20,1415.4,1274.4), new cjs.Rectangle(-555,20,1362,1274.4), new cjs.Rectangle(-501.6,20,1308.7,1274.4), new cjs.Rectangle(-448.3,20,1255.4,1274.4), new cjs.Rectangle(-395,20,1202,1274.4), new cjs.Rectangle(-341.6,20,1148.7,1274.4), new cjs.Rectangle(-288.3,20,1095.4,1274.4), new cjs.Rectangle(-235,20,1042,1274.4), new cjs.Rectangle(-181.6,20,988.7,1274.4), new cjs.Rectangle(-128.3,20,935.4,1274.4), new cjs.Rectangle(-75,20,882,1274.4), new cjs.Rectangle(-21.6,20,828.7,1274.4), new cjs.Rectangle(31.7,20,775.4,1274.4), new cjs.Rectangle(85,20,722,1274.4), new cjs.Rectangle(73,20,734,1274.4), new cjs.Rectangle(61,20,746,1274.4), new cjs.Rectangle(49,20,758,1274.4), new cjs.Rectangle(37,20,770,1274.4), new cjs.Rectangle(25,20,782,1274.4), new cjs.Rectangle(25,20,782,1211.7), new cjs.Rectangle(25,20,782,1149), new cjs.Rectangle(25,20,782,1086.2), new cjs.Rectangle(25,20,782,1023.5), new cjs.Rectangle(25,20,782,960.8), new cjs.Rectangle(25,20,782,898.1), new cjs.Rectangle(25,20,782,835.3), rect=new cjs.Rectangle(25,20,782,800), rect, new cjs.Rectangle(25,17.7,782,802.3), new cjs.Rectangle(25,-45,782,865.1), new cjs.Rectangle(25,-37.5,782,857.6), new cjs.Rectangle(25,-30,782,850.1), new cjs.Rectangle(25,-22.5,782,842.6), rect=new cjs.Rectangle(25,-15,782,835.1), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-13.9,-15,821,835.1), new cjs.Rectangle(-52.9,-15,859.9,835.1), new cjs.Rectangle(-91.8,-15,898.9,835.1), new cjs.Rectangle(-130.8,-15,937.8,835.1), new cjs.Rectangle(-169.7,-15,976.8,835.1), new cjs.Rectangle(-208.7,-15,1015.7,835.1), new cjs.Rectangle(-247.6,-15,1054.7,835.1), new cjs.Rectangle(-286.6,-15,1093.6,835.1), new cjs.Rectangle(-325.5,-15,1132.5,835.1), new cjs.Rectangle(-364.5,-15,1171.5,835.1), new cjs.Rectangle(-403.4,-15,1210.4,835.1), new cjs.Rectangle(-442.3,-15,1249.4,835.1), new cjs.Rectangle(-481.3,-15,1288.3,835.1), new cjs.Rectangle(-520.2,-15,1327.3,835.1), new cjs.Rectangle(-559.2,-15,1366.2,835.1), new cjs.Rectangle(-598.1,-15,1405.2,835.1), new cjs.Rectangle(-637.1,-15,1444.1,835.1), new cjs.Rectangle(-676,-15,1483.1,835.1), rect=new cjs.Rectangle(-715,-15,1725,835.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":169});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,520,0.762,0.762);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(69).to({y:700},0).to({y:480},7).to({y:520},3).wait(1).to({y:700},9).wait(81));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_mc.setTransform(220,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:-350},0).wait(48).to({y:350},15).to({y:300},5).wait(11).to({y:-350},19).wait(71));

	// hero
	this.hero_2 = new lib.hero2_for_makeup_mc();
	this.hero_2.setTransform(610,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1300},0).wait(28).to({x:610},20).wait(50).to({x:460},20).wait(51));

	// decor
	this.instance = new lib.eggs_rule_world_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({alpha:0.602},9).wait(52));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({alpha:1},20).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,17,849.5,877.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(10,-610,1539.5,1504.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,-610,1505,1504.2), new cjs.Rectangle(10,-610,1470.5,1504.2), new cjs.Rectangle(10,-610,1436,1504.2), new cjs.Rectangle(10,-610,1401.5,1504.2), new cjs.Rectangle(10,-610,1367,1504.2), new cjs.Rectangle(10,-610,1332.5,1504.2), new cjs.Rectangle(10,-610,1298,1504.2), new cjs.Rectangle(10,-610,1263.5,1504.2), new cjs.Rectangle(10,-610,1229,1504.2), new cjs.Rectangle(10,-610,1194.5,1504.2), new cjs.Rectangle(10,-610,1160,1504.2), new cjs.Rectangle(10,-610,1125.5,1504.2), new cjs.Rectangle(10,-610,1091,1504.2), new cjs.Rectangle(10,-610,1056.5,1504.2), new cjs.Rectangle(10,-610,1022,1504.2), new cjs.Rectangle(10,-610,987.5,1504.2), new cjs.Rectangle(10,-610,953,1504.2), new cjs.Rectangle(10,-610,918.5,1504.2), new cjs.Rectangle(10,-610,884,1504.2), new cjs.Rectangle(10,-610,849.5,1504.2), new cjs.Rectangle(10,-563.3,849.5,1457.5), new cjs.Rectangle(10,-516.6,849.5,1410.8), new cjs.Rectangle(10,-470,849.5,1364.2), new cjs.Rectangle(10,-423.3,849.5,1317.5), new cjs.Rectangle(10,-376.6,849.5,1270.8), new cjs.Rectangle(10,-330,849.5,1224.2), new cjs.Rectangle(10,-283.3,849.5,1177.5), new cjs.Rectangle(10,-236.6,849.5,1130.8), new cjs.Rectangle(10,-190,849.5,1084.2), new cjs.Rectangle(10,-143.3,849.5,1037.5), new cjs.Rectangle(10,-96.6,849.5,990.8), new cjs.Rectangle(10,-50,849.5,944.2), new cjs.Rectangle(10,-3.3,849.5,897.5), rect=new cjs.Rectangle(10,17,849.5,877.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,5.8,849.5,888.4), new cjs.Rectangle(10,-28.4,849.5,922.6), new cjs.Rectangle(10,-62.6,849.5,956.8), new cjs.Rectangle(10,-96.8,849.5,991), new cjs.Rectangle(10,-131,849.5,1025.2), new cjs.Rectangle(10,-165.2,849.5,1059.4), new cjs.Rectangle(10,-199.5,849.5,1093.7), new cjs.Rectangle(10,-233.7,849.5,1127.9), new cjs.Rectangle(10,-267.9,849.5,1162.1), new cjs.Rectangle(10,-302.1,849.5,1196.3), new cjs.Rectangle(10,-336.3,849.5,1230.5), new cjs.Rectangle(10,-370.5,849.5,1264.7), new cjs.Rectangle(10,-404.7,849.5,1298.9), new cjs.Rectangle(10,-438.9,849.5,1333.1), new cjs.Rectangle(10,-473.1,849.5,1367.3), new cjs.Rectangle(10,-507.3,849.5,1401.5), new cjs.Rectangle(10,-541.5,849.5,1435.7), new cjs.Rectangle(10,-575.8,849.5,1469.9), rect=new cjs.Rectangle(-210,-610,1220,1504.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":159});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(80,520,0.762,0.762);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(58).to({y:480},7).to({y:520},3).wait(1).to({y:700},9).wait(81));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_mc.setTransform(560,315);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1300},0).wait(28).to({x:500},15).to({x:560},5).wait(21).to({x:1300},19).wait(71));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(200,320);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:1000},0).wait(48).to({y:305},11).to({y:320},4).wait(25).to({x:410},20).wait(51));

	// decor
	this.instance = new lib.eggs_rule_world_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({alpha:0.602},9).wait(52));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({alpha:1},20).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.1,-38.5,798.2,853.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-23.1,15,1538.2,1288.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-23.1,15,1484.8,1288.2), new cjs.Rectangle(-23.1,15,1431.5,1288.2), new cjs.Rectangle(-23.1,15,1378.2,1288.2), new cjs.Rectangle(-23.1,15,1324.8,1288.2), new cjs.Rectangle(-23.1,15,1271.5,1288.2), new cjs.Rectangle(-23.1,15,1218.2,1288.2), new cjs.Rectangle(-23.1,15,1164.8,1288.2), new cjs.Rectangle(-23.1,15,1111.5,1288.2), new cjs.Rectangle(-23.1,15,1058.2,1288.2), new cjs.Rectangle(-23.1,15,1004.8,1288.2), new cjs.Rectangle(-23.1,15,951.5,1288.2), new cjs.Rectangle(-23.1,15,898.2,1288.2), new cjs.Rectangle(-23.1,15,844.8,1288.2), new cjs.Rectangle(-23.1,15,791.5,1288.2), new cjs.Rectangle(-23.1,15,738.2,1288.2), new cjs.Rectangle(-23.1,15,750.2,1288.2), new cjs.Rectangle(-23.1,15,762.2,1288.2), new cjs.Rectangle(-23.1,15,774.2,1288.2), new cjs.Rectangle(-23.1,15,786.2,1288.2), new cjs.Rectangle(-23.1,15,798.2,1288.2), new cjs.Rectangle(-23.1,15,798.2,1225), new cjs.Rectangle(-23.1,15,798.2,1161.9), new cjs.Rectangle(-23.1,15,798.2,1098.7), new cjs.Rectangle(-23.1,15,798.2,1035.5), new cjs.Rectangle(-23.1,15,798.2,972.3), new cjs.Rectangle(-23.1,15,798.2,909.1), new cjs.Rectangle(-23.1,15,798.2,845.9), rect=new cjs.Rectangle(-23.1,15,798.2,800), rect, new cjs.Rectangle(-23.1,9.7,798.2,805.4), new cjs.Rectangle(-23.1,-53.5,798.2,868.6), new cjs.Rectangle(-23.1,-49.8,798.2,864.8), new cjs.Rectangle(-23.1,-46,798.2,861.1), new cjs.Rectangle(-23.1,-42.3,798.2,857.3), rect=new cjs.Rectangle(-23.1,-38.5,798.2,853.6), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-23.1,-38.5,837.1,853.6), new cjs.Rectangle(-23.1,-38.5,876.1,853.6), new cjs.Rectangle(-23.1,-38.5,915,853.6), new cjs.Rectangle(-23.1,-38.5,954,853.6), new cjs.Rectangle(-23.1,-38.5,992.9,853.6), new cjs.Rectangle(-23.1,-38.5,1031.9,853.6), new cjs.Rectangle(-23.1,-38.5,1070.8,853.6), new cjs.Rectangle(-23.1,-38.5,1109.8,853.6), new cjs.Rectangle(-23.1,-38.5,1148.7,853.6), new cjs.Rectangle(-23.1,-38.5,1187.7,853.6), new cjs.Rectangle(-23.1,-38.5,1226.6,853.6), new cjs.Rectangle(-23.1,-38.5,1265.5,853.6), new cjs.Rectangle(-23.1,-38.5,1304.5,853.6), new cjs.Rectangle(-23.1,-38.5,1343.4,853.6), new cjs.Rectangle(-23.1,-38.5,1382.4,853.6), new cjs.Rectangle(-23.1,-38.5,1421.3,853.6), new cjs.Rectangle(-23.1,-38.5,1460.3,853.6), new cjs.Rectangle(-23.1,-38.5,1499.2,853.6), rect=new cjs.Rectangle(-210,-38.5,1725,853.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":169});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(80,520,0.762,0.762);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({y:480},7).to({y:520},3).wait(1).to({y:700},9).wait(81));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_mc.setTransform(580,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(48).to({y:250},15).to({y:300},5).wait(11).to({y:900},19).wait(71));

	// hero
	this.hero_1 = new lib.hero1_for_makeup_mc();
	this.hero_1.setTransform(190,300);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-500},0).wait(28).to({x:190},20).wait(50).to({x:410},19).wait(52));

	// decor
	this.instance = new lib.eggs_rule_world_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({alpha:0.602},9).wait(52));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({alpha:1},19).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.3,40,912.3,828.7);
p.frameBounds = [rect, rect=new cjs.Rectangle(-812.3,48,1602.3,1147), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-777.8,48,1567.8,1147), new cjs.Rectangle(-743.3,48,1533.3,1147), new cjs.Rectangle(-708.8,48,1498.8,1147), new cjs.Rectangle(-674.3,48,1464.3,1147), new cjs.Rectangle(-639.8,48,1429.8,1147), new cjs.Rectangle(-605.3,48,1395.3,1147), new cjs.Rectangle(-570.8,48,1360.8,1147), new cjs.Rectangle(-536.3,48,1326.3,1147), new cjs.Rectangle(-501.8,48,1291.8,1147), new cjs.Rectangle(-467.3,48,1257.3,1147), new cjs.Rectangle(-432.8,48,1222.8,1147), new cjs.Rectangle(-398.3,48,1188.3,1147), new cjs.Rectangle(-363.8,48,1153.8,1147), new cjs.Rectangle(-329.3,48,1119.3,1147), new cjs.Rectangle(-294.8,48,1084.8,1147), new cjs.Rectangle(-260.3,48,1050.3,1147), new cjs.Rectangle(-225.8,48,1015.8,1147), new cjs.Rectangle(-191.3,48,981.3,1147), new cjs.Rectangle(-156.8,48,946.8,1147), new cjs.Rectangle(-122.3,48,912.3,1147), new cjs.Rectangle(-122.3,48,912.3,1103.6), new cjs.Rectangle(-122.3,48,912.3,1060.3), new cjs.Rectangle(-122.3,48,912.3,1017), new cjs.Rectangle(-122.3,48,912.3,973.6), new cjs.Rectangle(-122.3,48,912.3,930.3), new cjs.Rectangle(-122.3,48,912.3,887), new cjs.Rectangle(-122.3,48,912.3,843.6), rect=new cjs.Rectangle(-122.3,48,912.3,820.7), rect, rect, rect, rect, rect, new cjs.Rectangle(-122.3,33.4,912.3,835.3), new cjs.Rectangle(-122.3,-10,912.3,878.7), new cjs.Rectangle(-122.3,0,912.3,868.7), new cjs.Rectangle(-122.3,10,912.3,858.7), new cjs.Rectangle(-122.3,20,912.3,848.7), new cjs.Rectangle(-122.3,30,912.3,838.7), rect=new cjs.Rectangle(-122.3,40,912.3,828.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-122.3,48,912.3,820.7), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-122.3,48,912.3,831.2), new cjs.Rectangle(-122.3,48,912.3,862.8), new cjs.Rectangle(-122.3,48,912.3,894.3), new cjs.Rectangle(-122.3,48,912.3,925.9), new cjs.Rectangle(-122.3,48,912.3,957.5), new cjs.Rectangle(-122.3,48,912.3,989.1), new cjs.Rectangle(-122.3,48,912.3,1020.7), new cjs.Rectangle(-122.3,48,912.3,1052.2), new cjs.Rectangle(-122.3,48,912.3,1083.8), new cjs.Rectangle(-122.3,48,912.3,1115.4), rect=new cjs.Rectangle(-210,-10,1220,1205), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
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
	this.body_mc = new lib.quest_4_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-362,-329.4,1362,1523.9);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-386.6,-329.4,1386.7,1523.9);
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
	this.instance.setTransform(400,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,675);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(680,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,1000);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,900,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(560,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,750);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// heroes
	this.instance_1 = new lib.heroes_0_mc();
	this.instance_1.setTransform(368.4,331.8,1,1,0,0,0,368.4,331.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_2 = new lib.background_5_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1659.7,1361.9);
p.frameBounds = [rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.frame_2_mc = new lib.quest_2_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(25,-329.4,782,1149.4);
p.frameBounds = [rect, new cjs.Rectangle(-3.5,-329.4,810.5,1149.4)];


(lib.quest_5_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-329.4,849.5,1223.6);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.frame_2_mc = new lib.quest_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.1,-329.4,798.2,1144.4);
p.frameBounds = [rect, new cjs.Rectangle(-23.1,-329.4,887.8,1144.4)];


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
p.nominalBounds = rect = new cjs.Rectangle(-122.3,-329.4,912.3,1198.1);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(1000,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
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
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(1000,0,1,1,0,0,180);

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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
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

	this.instance_8 = new lib.LocationScreen_5();

	this.instance_9 = new lib.LocationScreen_6();

	this.instance_10 = new lib.RedirectScreen();

	this.instance_11 = new lib.ResultScreen();

	this.instance_12 = new lib.InstructionScreen();

	this.instance_13 = new lib.TrackMove_2();
	this.instance_13.setTransform(350,50);

	this.instance_14 = new lib.FlashAnimation();
	this.instance_14.setTransform(150,280);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_16},{t:this.instance_15},{t:this.gravity_explosion_comp},{t:this.instance_14},{t:this.instance_13}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[]},1).to({state:[{t:this.instance_19}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, new cjs.Rectangle(-300,0,1400,600), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-280.8,1659.7,1361.9), new cjs.Rectangle(-695,-280.8,2190,1161.9), new cjs.Rectangle(-386.6,-329.4,1386.7,1523.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), rect, new cjs.Rectangle(-362,-329.4,1362,1523.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(0,0,418,430), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, new cjs.Rectangle(-210,-10,1220,620)];


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