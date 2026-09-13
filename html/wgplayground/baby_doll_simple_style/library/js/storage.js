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
		{name:"storage_atlas_", frames: [[0,622,1200,600],[0,0,1220,620]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[492,0,542,438],[492,440,541,438],[0,984,1200,200],[0,0,490,490],[0,492,490,490]]},
		{name:"storage_atlas_6", frames: [[925,0,326,507],[0,439,411,491],[413,542,410,491],[825,542,409,491],[0,0,541,437],[543,0,380,540]]},
		{name:"storage_atlas_7", frames: [[729,0,500,300],[971,684,320,412],[327,784,320,412],[649,784,320,412],[0,0,325,508],[0,510,325,508],[327,0,400,400],[327,402,380,380],[729,302,380,380]]},
		{name:"storage_atlas_8", frames: [[580,430,265,457],[847,430,264,457],[0,0,289,453],[0,455,288,453],[290,455,288,453],[587,0,294,428],[883,0,294,428],[291,0,294,428]]},
		{name:"storage_atlas_9", frames: [[892,0,247,434],[626,412,246,434],[626,848,246,434],[0,0,264,457],[0,459,360,332],[266,0,360,332],[0,793,360,332],[362,746,262,410],[628,0,262,410],[362,334,262,410],[874,436,320,320],[874,758,320,320]]},
		{name:"storage_atlas_10", frames: [[976,619,300,300],[0,644,300,300],[302,881,300,300],[322,322,380,260],[0,946,300,300],[604,915,300,300],[906,921,300,300],[649,619,325,294],[322,584,325,295],[704,322,325,295],[0,0,320,320],[0,322,320,320],[966,0,320,320],[322,0,320,320],[644,0,320,320]]},
		{name:"storage_atlas_11", frames: [[0,0,300,300],[0,302,300,300],[302,0,300,300],[906,906,300,300],[604,302,300,300],[0,906,300,300],[906,302,300,300],[604,0,300,300],[604,604,300,300],[604,906,300,300],[302,604,300,300],[906,604,300,300],[906,0,300,300],[302,302,300,300],[0,604,300,300],[302,906,300,300]]},
		{name:"storage_atlas_12", frames: [[302,0,300,300],[0,0,300,300],[604,0,300,300],[906,0,300,300],[0,649,298,274],[300,649,297,274],[599,649,297,274],[759,302,264,327],[1025,302,264,326],[1025,630,264,326],[0,302,251,345],[506,302,251,345],[253,302,251,345],[844,958,420,180],[422,925,420,180],[0,925,420,180],[0,1107,420,180],[422,1107,420,180]]},
		{name:"storage_atlas_13", frames: [[692,691,141,506],[692,182,141,507],[835,182,140,507],[422,182,268,280],[422,464,268,280],[422,746,268,280],[835,691,186,370],[977,0,186,370],[1023,372,186,369],[1023,999,270,254],[1023,743,270,254],[0,728,420,180],[422,0,420,180],[0,364,420,180],[0,0,420,180],[0,182,420,180],[0,546,420,180],[0,910,420,180],[0,1092,420,180]]},
		{name:"storage_atlas_14", frames: [[975,0,149,387],[824,0,149,387],[1126,0,148,387],[386,1011,235,253],[587,309,234,253],[588,0,234,252],[960,661,233,235],[1065,898,232,235],[831,898,232,235],[386,633,165,376],[220,255,165,376],[219,862,165,376],[0,255,218,302],[0,559,218,301],[0,862,217,301],[623,925,206,270],[753,564,205,270],[960,389,205,270],[387,0,199,307],[387,309,198,306],[553,617,198,306],[0,0,270,253]]},
		{name:"storage_atlas_15", frames: [[617,917,195,214],[404,1029,195,214],[0,1056,195,214],[830,905,191,219],[211,904,191,219],[0,0,246,215],[248,0,246,215],[496,0,246,215],[744,0,235,218],[981,0,235,217],[0,217,235,216],[410,616,209,204],[0,645,209,204],[0,851,209,203],[1061,685,207,205],[621,710,207,205],[408,822,207,205],[211,684,195,218],[864,685,195,218],[1061,892,195,217],[237,217,273,185],[981,219,273,184],[512,220,273,184],[787,220,171,278],[237,404,171,278],[960,405,170,278],[0,435,225,208],[410,406,225,208],[637,500,225,208]]},
		{name:"storage_atlas_16", frames: [[187,635,190,190],[919,1085,180,180],[368,827,190,190],[1101,1085,180,180],[0,0,190,219],[184,872,182,217],[187,221,182,217],[0,872,182,217],[954,162,181,189],[924,384,181,189],[907,792,181,189],[752,782,153,227],[769,384,153,226],[764,1011,153,226],[1107,353,168,195],[1103,575,168,195],[1103,772,168,195],[0,1091,190,202],[192,1091,190,202],[192,0,190,202],[187,440,196,193],[371,204,197,192],[384,0,196,192],[0,221,185,215],[0,438,185,215],[0,655,185,215],[774,0,220,160],[570,194,190,190],[919,983,340,100],[576,1019,186,188],[907,612,194,178],[385,398,190,190],[379,635,190,190],[582,0,190,190],[384,1019,190,190],[762,192,190,190],[560,827,190,190],[571,590,190,190],[577,386,190,190]]},
		{name:"storage_atlas_17", frames: [[0,609,131,243],[0,364,131,243],[0,854,131,243],[303,356,227,116],[170,1134,227,116],[540,355,227,116],[590,562,119,229],[469,562,119,229],[711,562,118,229],[1030,340,124,220],[343,562,124,220],[1156,340,124,220],[371,0,157,184],[688,0,156,183],[530,0,156,183],[470,1021,196,119],[668,1021,196,119],[399,1142,195,118],[370,186,168,168],[846,0,168,168],[1016,0,168,168],[170,945,148,187],[880,340,148,187],[320,945,148,187],[831,529,192,129],[1020,692,192,128],[1025,562,192,128],[596,1142,172,128],[1081,1047,172,128],[540,185,168,168],[710,185,168,168],[880,170,168,168],[1006,822,105,223],[899,794,105,223],[792,794,105,223],[1113,822,106,218],[866,1019,106,218],[974,1047,105,218],[578,793,105,226],[685,793,105,226],[470,793,106,226],[133,671,208,135],[133,808,208,135],[133,534,208,135],[1050,170,168,168],[0,1099,168,168],[133,364,168,168],[532,473,280,80],[182,0,187,171],[831,660,187,132],[182,173,186,159],[0,0,180,180],[0,182,180,180]]},
		{name:"storage_atlas_18", frames: [[821,770,120,120],[736,251,120,120],[577,487,120,120],[577,609,120,120],[699,594,120,120],[577,731,120,120],[699,716,120,120],[821,648,120,120],[943,648,120,120],[699,838,120,120],[943,892,120,120],[821,892,120,120],[943,770,120,120],[1065,648,120,120],[836,0,167,121],[1005,0,167,121],[202,144,166,121],[104,1014,112,170],[1174,0,112,170],[218,1014,112,170],[1135,1038,138,103],[1067,304,138,103],[1034,1184,138,103],[712,373,145,109],[712,484,145,108],[859,253,145,108],[417,333,146,112],[565,373,145,112],[332,996,145,112],[265,751,142,121],[268,874,142,120],[592,251,142,120],[862,123,154,128],[202,267,154,127],[98,396,154,127],[0,130,96,228],[0,360,96,228],[0,590,96,228],[496,0,168,124],[666,0,168,124],[326,0,168,124],[0,0,172,128],[1097,563,182,74],[1097,486,182,75],[1067,409,182,75],[963,363,102,151],[859,363,102,151],[422,447,101,151],[1065,770,100,144],[1187,892,100,143],[1034,1038,99,144],[1160,172,117,130],[859,516,117,130],[978,516,117,130],[98,144,102,203],[0,1025,102,203],[0,820,102,203],[259,636,158,113],[264,1186,158,112],[104,1186,158,112],[98,648,159,121],[98,525,159,121],[104,771,159,121],[104,894,162,118],[254,396,161,118],[259,516,161,118],[370,126,162,123],[698,126,162,123],[534,126,162,123],[1065,916,120,120],[370,251,220,80],[174,0,150,142],[525,487,50,297],[601,975,120,120],[424,1110,120,120],[412,853,120,120],[534,853,120,120],[1167,770,120,120],[479,975,120,120],[1018,123,140,140],[546,1097,120,120],[668,1097,120,120],[790,1014,120,120],[912,1014,120,120],[790,1136,120,120],[912,1136,120,120]]},
		{name:"storage_atlas_19", frames: [[294,194,110,100],[124,210,110,100],[970,980,90,50],[878,979,90,50],[1230,980,64,64],[67,981,64,64],[803,0,105,111],[910,0,105,111],[1017,0,105,111],[1135,795,148,48],[246,800,148,48],[745,799,148,48],[616,114,155,74],[1027,114,155,74],[616,190,155,74],[968,587,154,59],[582,554,154,59],[0,548,154,59],[982,706,138,55],[532,671,139,55],[673,687,139,55],[438,87,24,20],[1060,845,102,66],[1164,845,102,66],[745,849,102,66],[1091,384,100,96],[288,397,100,96],[1193,384,100,96],[1134,283,105,99],[288,296,105,99],[0,303,105,99],[173,850,101,66],[1060,913,101,65],[1163,913,100,65],[511,114,103,112],[406,114,103,112],[1124,0,104,112],[690,344,107,93],[982,345,107,92],[395,352,107,92],[414,705,91,82],[0,712,91,82],[1122,706,91,82],[1027,190,122,91],[1151,190,122,91],[0,210,122,91],[156,548,82,50],[1146,980,82,50],[1062,980,82,50],[330,705,82,93],[898,704,82,93],[814,704,82,93],[93,712,151,48],[660,744,151,48],[507,728,151,48],[553,615,164,54],[156,600,164,54],[719,631,164,54],[878,934,148,43],[0,609,148,43],[426,941,148,43],[406,87,30,22],[336,523,92,103],[242,495,92,103],[874,512,92,103],[504,352,82,84],[246,712,82,84],[0,796,82,84],[895,840,87,79],[84,812,87,79],[499,828,87,79],[0,882,76,87],[719,917,75,86],[78,893,75,86],[414,789,83,87],[1215,706,83,87],[660,794,83,86],[984,840,74,92],[351,878,73,91],[276,850,73,91],[155,918,88,71],[335,971,88,71],[245,943,88,71],[467,0,110,112],[691,0,110,112],[579,0,110,112],[0,87,96,121],[196,87,96,121],[98,87,96,121],[294,87,110,105],[803,113,110,105],[915,113,110,105],[93,762,151,48],[507,778,151,48],[982,790,151,48],[885,648,163,54],[165,656,163,54],[0,656,163,54],[312,0,153,85],[0,0,154,85],[156,0,154,85],[1120,524,150,61],[430,523,150,61],[968,524,150,61],[773,154,26,16],[1230,482,66,36],[173,812,65,35],[895,799,65,35],[487,986,65,55],[133,991,65,54],[796,999,65,54],[684,1005,65,50],[588,828,65,50],[200,1016,65,50],[1230,0,65,72],[0,971,65,72],[618,978,64,72],[330,628,63,31],[267,1016,63,31],[390,446,63,31],[937,1032,63,31],[1002,1032,63,31],[1067,1032,63,31],[738,554,121,75],[430,586,121,75],[1124,587,121,75],[799,344,80,124],[588,266,180,60],[406,228,180,60],[773,220,180,60],[770,282,180,60],[952,283,180,60],[406,290,180,60],[425,986,60,61],[988,439,73,35],[863,1031,72,43],[955,220,68,57],[1230,74,70,34],[426,909,220,30],[849,849,40,40],[242,422,40,55],[1252,639,40,43],[1286,110,10,11],[648,882,69,94],[1184,114,100,73],[1241,283,57,60],[881,345,99,100],[773,114,23,38],[1091,345,31,31],[1247,587,50,50],[576,941,40,147],[236,210,50,210],[751,1005,40,40],[0,1045,40,40],[1132,1032,40,40],[1174,1032,40,40],[529,1043,40,40],[487,1043,40,40],[1216,1046,40,40],[1258,1046,40,40],[332,1044,40,40],[374,1044,40,40],[796,917,80,80],[0,422,240,40],[632,512,240,40],[504,439,240,40],[390,481,240,40],[0,464,240,40],[988,482,240,40],[746,470,240,40],[0,506,240,40],[330,663,200,40],[1050,664,200,40],[107,312,100,100],[588,328,100,100]]}
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
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_0_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_set_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_set_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.check_1_0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.check_2_0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.check_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.check_3_0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.check_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_background_0_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.frame_game_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glass1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glass1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glass1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glass2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glass2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glass2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glass3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glass3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glass3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glass1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glass1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glass1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glass2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glass2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glass2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glass3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glass3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glass3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero3_glass1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.hero3_glass1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.hero3_glass1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.hero3_glass2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.hero3_glass2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.hero3_glass2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.hero3_glass3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.hero3_glass3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.hero3_glass3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero3_head1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero3_head1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero3_head1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.icon_set_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.icon_set_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.icon_set_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.icon_set_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.icon_set_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.location_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.location_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.nav_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.nav_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.next_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.next_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.next_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.next_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.next_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.next_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.pointer_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.pointer_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.vk_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
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
	this.shape.graphics.f("#FFFFFF").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.wardrobe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_img();
	this.instance.setTransform(-190,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-270,380,540);
p.frameBounds = [rect];


(lib.top_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top6_1_img();
	this.instance.setTransform(60,-38,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArPGAIAFt0IRhgUIE5EQIi9IcIpbDlg");
	this.shape.setTransform(2.5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.6,-53.6,144.2,104.4);
p.frameBounds = [rect];


(lib.top_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top6_1_img();
	this.instance.setTransform(48,-61,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqMJiIAZxTIGMkPII3BlIE9Q2IuyFmg");
	this.shape.setTransform(1.6,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.7,-78.5,130.7,153.9);
p.frameBounds = [rect];


(lib.top_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top6_1_img();
	this.instance.setTransform(61,-46,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsMH5ICJuxINXjUIHgEfIBZHYIruIig");
	this.shape.setTransform(-3.8,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.9,-65.9,156.3,130.8);
p.frameBounds = [rect];


(lib.top_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top5_1_img();
	this.instance.setTransform(81,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArMF7IkVoPIIcpTIMOAgIKZTCIj0Dtg");
	this.shape.setTransform(-0.8,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.2,-75.5,198.9,149);
p.frameBounds = [rect];


(lib.top_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top5_1_img();
	this.instance.setTransform(55,-56,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArOJGIApxkIDHi/IMtBoIGAO3Ii7FPIxCBNg");
	this.shape.setTransform(2,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-74.6,144,146.9);
p.frameBounds = [rect];


(lib.top_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top5_1_img();
	this.instance.setTransform(73,-56,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsRJZIhZsuIFVmoINxgmIIPLMIjtJ7g");
	this.shape.setTransform(-0.8,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.3,-69.6,175.1,135.3);
p.frameBounds = [rect];


(lib.top_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top4_1_img();
	this.instance.setTransform(81,-59,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsmHsIiYn4IEprPIP8ANIJYTEIjIDmg");
	this.shape.setTransform(-1.6,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.6,-75.3,192,146.5);
p.frameBounds = [rect];


(lib.top_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top4_1_img();
	this.instance.setTransform(44,-36,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApzhqIEFl+IMegHICGCQIA+LbIhNBjIqWARg");
	this.shape.setTransform(-2.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-48.5,125.7,99.3);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top4_1_img();
	this.instance.setTransform(72,-55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArtGaIh1nIIF2phIMIgcIJHJLIhbJmIknCmg");
	this.shape.setTransform(-2.6,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.3,-71,173.5,136.9);
p.frameBounds = [rect];


(lib.top_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top3_1_img();
	this.instance.setTransform(79,-61,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("An8GhIm4lMIA7m9IF6luINlgNIJPSFIjgFCg");
	this.shape.setTransform(-1.6,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,-70.8,190,148);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top3_1_img();
	this.instance.setTransform(37,-46,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AocG0IAJt7ICtiZIKrBcIDYG5Ik4KKIqMAig");
	this.shape.setTransform(2.7,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-62.9,108.4,122);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top3_1_img();
	this.instance.setTransform(45,-41,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ao9IVIhMtcIHxj7IL7BkIAnCfIkxOCg");
	this.shape.setTransform(0.7,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.4,-59.7,130.2,115.8);
p.frameBounds = [rect];


(lib.top_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top2_1_img();
	this.instance.setTransform(79,-57,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApaHRIlWoTIG1pxIMaAnIKSRJIjMD3g");
	this.shape.setTransform(-3.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.6,-68.5,189.1,138.4);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top2_1_img();
	this.instance.setTransform(41,-44,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlLJLIkalGIABo8IEpkvILoBuIC5GSIimLNg");
	this.shape.setTransform(-1.6,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.9,-62.7,122.8,123.1);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top2_1_img();
	this.instance.setTransform(53,-47,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq8ImICVxDIP4hCIDsF4ImPNHg");
	this.shape.setTransform(-0.2,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.3,-62.5,140.3,121.6);
p.frameBounds = [rect];


(lib.top_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top1_1_img();
	this.instance.setTransform(112,-104,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0lM5IMt/sIR+AUIKgTTIgJPFInxBmI1GBVg");
	this.shape.setTransform(-4.3,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.1,-120.9,263.8,241);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top1_1_img();
	this.instance.setTransform(58,-65,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ar4IoIBYywID4ihILZBXIHIOtIjJEjIwQErg");
	this.shape.setTransform(-0.2,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.4,-77.6,152.3,162);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top1_1_img();
	this.instance.setTransform(69,-52,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("An/JbIkHjCIg2puIE5l9ILJhBIJ3K9IjrJqg");
	this.shape.setTransform(-1.4,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.3,-67.9,165.9,132.1);
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


(lib.shoes_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes6_1_img();
	this.instance.setTransform(-31.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzGQIAAsfIPnAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-40,100,80);
p.frameBounds = [rect];


(lib.shoes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes6_1_img();
	this.instance.setTransform(-38,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsIlIAAxKIXZAAIAARKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-55,150,110);
p.frameBounds = [rect];


(lib.shoes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes6_1_img();
	this.instance.setTransform(51,-56,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.shoes_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes5_1_img();
	this.instance.setTransform(-31.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzGQIAAsfIPnAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-40,100,80);
p.frameBounds = [rect];


(lib.shoes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes5_1_img();
	this.instance.setTransform(-43.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsImIAAxKIXZAAIAARKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-55,150,110);
p.frameBounds = [rect];


(lib.shoes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes5_1_img();
	this.instance.setTransform(50,-33,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsIlIAAxKIXZAAIAARKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-55,150,110);
p.frameBounds = [rect];


(lib.shoes_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes4_1_img();
	this.instance.setTransform(-32.5,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzH0IAAvmIPnAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.shoes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes4_1_img();
	this.instance.setTransform(-41,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsIlIAAxKIXZAAIAARKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-55,150,110);
p.frameBounds = [rect];


(lib.shoes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes4_1_img();
	this.instance.setTransform(52,-50,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArBGhIAFtYIBwibIOFgZIF1HrIAUDHIh/GeIisCCIupAEg");
	this.shape.setTransform(0.2,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.4,-62.5,141.3,124);
p.frameBounds = [rect];


(lib.shoes_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes3_1_img();
	this.instance.setTransform(-32.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzGQIAAsfIPnAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-40,100,80);
p.frameBounds = [rect];


(lib.shoes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes3_1_img();
	this.instance.setTransform(-46,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsKKIAA0TIXZAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-65,150,130);
p.frameBounds = [rect];


(lib.shoes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes3_1_img();
	this.instance.setTransform(56,-85,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap9MfIhJ4HIKVjsIFjERIGVQ6IhlF7IkIDbIr6AIg");
	this.shape.setTransform(3.9,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.2,-99,142.3,196.3);
p.frameBounds = [rect];


(lib.shoes_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes2_1_img();
	this.instance.setTransform(-32.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzGQIAAsfIPnAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-40,100,80);
p.frameBounds = [rect];


(lib.shoes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes2_1_img();
	this.instance.setTransform(-50,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNSIAA6jIXZAAIAAajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-85,150,170);
p.frameBounds = [rect];


(lib.shoes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes2_1_img();
	this.instance.setTransform(50,-48,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsKJIAA0RIXZAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-65,150,130);
p.frameBounds = [rect];


(lib.shoes_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes1_1_img();
	this.instance.setTransform(-33,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzGQIAAsfIPnAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-40,100,80);
p.frameBounds = [rect];


(lib.shoes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes1_1_img();
	this.instance.setTransform(-51,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsODIAA8GIXZAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-90,150,180);
p.frameBounds = [rect];


(lib.shoes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes1_1_img();
	this.instance.setTransform(51,-33,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsH0IAAvmIXZAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-50,150,100);
p.frameBounds = [rect];


(lib.shadow_dressup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("EhfSAwcMAAAhg2MC+lAAAMAAABg2g");
	this.shape.setTransform(400,300);

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


(lib.hero3_top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top6_1_img();
	this.instance.setTransform(-60.7,-37.2);

	this.instance_1 = new lib.hero3_top6_2_img();
	this.instance_1.setTransform(-60.5,-37.2);

	this.instance_2 = new lib.hero3_top6_3_img();
	this.instance_2.setTransform(-60.1,-37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,-37.2,121,75);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-60.5,-37.2,121,75), rect, rect=new cjs.Rectangle(-60.1,-37.2,121,75), rect];


(lib.hero3_top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top5_1_img();
	this.instance.setTransform(-81.2,-61.2);

	this.instance_1 = new lib.hero3_top5_2_img();
	this.instance_1.setTransform(-81.2,-61.2);

	this.instance_2 = new lib.hero3_top5_3_img();
	this.instance_2.setTransform(-81.2,-61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.2,-61.2,162,123);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top4_1_img();
	this.instance.setTransform(-81.2,-58.7);

	this.instance_1 = new lib.hero3_top4_2_img();
	this.instance_1.setTransform(-81.2,-58.7);

	this.instance_2 = new lib.hero3_top4_3_img();
	this.instance_2.setTransform(-81.2,-58.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.2,-58.7,162,118);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-81.2,-58.7,161,118), rect, rect, rect];


(lib.hero3_top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top3_1_img();
	this.instance.setTransform(-79.7,-60.6);

	this.instance_1 = new lib.hero3_top3_2_img();
	this.instance_1.setTransform(-79.5,-60.6);

	this.instance_2 = new lib.hero3_top3_3_img();
	this.instance_2.setTransform(-79.5,-60.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.7,-60.6,159,121);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-79.5,-60.6,159,121), rect, rect, rect];


(lib.hero3_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top2_1_img();
	this.instance.setTransform(-79.2,-56.2);

	this.instance_1 = new lib.hero3_top2_2_img();
	this.instance_1.setTransform(-79.2,-56.1);

	this.instance_2 = new lib.hero3_top2_3_img();
	this.instance_2.setTransform(-79.2,-56.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-56.2,158,113);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-79.2,-56.1,158,112), rect, rect, rect];


(lib.hero3_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top1_1_img();
	this.instance.setTransform(-111.5,-102.3);

	this.instance_1 = new lib.hero3_top1_2_img();
	this.instance_1.setTransform(-111.5,-102.3);

	this.instance_2 = new lib.hero3_top1_3_img();
	this.instance_2.setTransform(-111.5,-102.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.5,-102.3,225,208);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_shoes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes6_1_img();
	this.instance.setTransform(-31.6,-15.7);

	this.instance_1 = new lib.hero3_shoes6_2_img();
	this.instance_1.setTransform(-31.6,-15.7);

	this.instance_2 = new lib.hero3_shoes6_3_img();
	this.instance_2.setTransform(-31.6,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.6,-15.7,63,31);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_shoes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes5_1_img();
	this.instance.setTransform(-31.6,-15.7);

	this.instance_1 = new lib.hero3_shoes5_2_img();
	this.instance_1.setTransform(-31.6,-15.7);

	this.instance_2 = new lib.hero3_shoes5_3_img();
	this.instance_2.setTransform(-31.6,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.6,-15.7,63,31);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_shoes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes4_1_img();
	this.instance.setTransform(-32.2,-36.1);

	this.instance_1 = new lib.hero3_shoes4_2_img();
	this.instance_1.setTransform(-32.2,-36.1);

	this.instance_2 = new lib.hero3_shoes4_3_img();
	this.instance_2.setTransform(-32,-36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-36.1,65,72);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-32,-36.1,64,72), rect];


(lib.hero3_shoes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes3_1_img();
	this.instance.setTransform(-32.4,-25);

	this.instance_1 = new lib.hero3_shoes3_2_img();
	this.instance_1.setTransform(-32.4,-25);

	this.instance_2 = new lib.hero3_shoes3_3_img();
	this.instance_2.setTransform(-32.4,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.4,-25,65,50);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-32.4,-24.9,65,50), rect];


(lib.hero3_shoes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes2_1_img();
	this.instance.setTransform(-32.3,-27.2);

	this.instance_1 = new lib.hero3_shoes2_2_img();
	this.instance_1.setTransform(-32.4,-27.2);

	this.instance_2 = new lib.hero3_shoes2_3_img();
	this.instance_2.setTransform(-32.3,-27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.3,-27.2,65,55);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-32.4,-27.2,65,54), rect, rect=new cjs.Rectangle(-32.3,-27.1,65,54), rect];


(lib.hero3_shoes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes1_1_img();
	this.instance.setTransform(-32.9,-17.7);

	this.instance_1 = new lib.hero3_shoes1_2_img();
	this.instance_1.setTransform(-32.6,-17.7);

	this.instance_2 = new lib.hero3_shoes1_3_img();
	this.instance_2.setTransform(-32.7,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.9,-17.7,66,36);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-32.6,-17.7,65,35), rect, rect=new cjs.Rectangle(-32.7,-17.7,65,35), rect];


(lib.hero3_lips1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_lips1_img();
	this.instance.setTransform(-12.7,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.7,-8.2,26,16);
p.frameBounds = [rect];


(lib.hero3_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_head1_1_img();
	this.instance.setTransform(-83.9,-83.8);

	this.instance_1 = new lib.hero3_head1_2_img();
	this.instance_1.setTransform(-84.1,-83.8);

	this.instance_2 = new lib.hero3_head1_3_img();
	this.instance_2.setTransform(-84,-83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.9,-83.8,168,168);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-84.1,-83.8,168,168), rect, rect=new cjs.Rectangle(-84,-83.8,168,168), rect];


(lib.hero3_hair6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_hair6_1_img();
	this.instance.setTransform(-125.5,-172.6);

	this.instance_1 = new lib.hero3_hair6_2_img();
	this.instance_1.setTransform(-125.5,-172.1);

	this.instance_2 = new lib.hero3_hair6_3_img();
	this.instance_2.setTransform(-125.5,-172.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.5,-172.6,251,345);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-125.5,-172.1,251,345), rect, rect=new cjs.Rectangle(-125.5,-172.3,251,345), rect];


(lib.hero3_hair5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_hair5_1_img();
	this.instance.setTransform(-130.7,-205.1);

	this.instance_1 = new lib.hero3_hair5_2_img();
	this.instance_1.setTransform(-130.7,-205.1);

	this.instance_2 = new lib.hero3_hair5_3_img();
	this.instance_2.setTransform(-130.7,-205.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.7,-205.1,262,410);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-130.7,-205.2,262,410), rect];


(lib.hero3_hair4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_hair4_1_img();
	this.instance.setTransform(-146.7,-214.1);

	this.instance_1 = new lib.hero3_hair4_2_img();
	this.instance_1.setTransform(-146.8,-214.1);

	this.instance_2 = new lib.hero3_hair4_3_img();
	this.instance_2.setTransform(-146.8,-214);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146.7,-214.1,294,428);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-146.8,-214.1,294,428), rect, rect=new cjs.Rectangle(-146.8,-214,294,428), rect];


(lib.hero3_hair3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_hair3_1_img();
	this.instance.setTransform(-155.7,-147.1);

	this.instance_1 = new lib.hero3_hair3_2_img();
	this.instance_1.setTransform(-155.5,-147.1);

	this.instance_2 = new lib.hero3_hair3_3_img();
	this.instance_2.setTransform(-155.3,-147.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155.7,-147.1,325,294);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-155.5,-147.1,325,295), rect, rect=new cjs.Rectangle(-155.3,-147.1,325,295), rect];


(lib.hero3_hair2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_hair2_1_img();
	this.instance.setTransform(-271,-218.8);

	this.instance_1 = new lib.hero3_hair2_2_img();
	this.instance_1.setTransform(-270.6,-218.7);

	this.instance_2 = new lib.hero3_hair2_3_img();
	this.instance_2.setTransform(-270.3,-218.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271,-218.8,542,438);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-270.6,-218.7,541,438), rect, rect=new cjs.Rectangle(-270.3,-218.7,541,437), rect];


(lib.hero3_glass3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_glass3_1_img();
	this.instance.setTransform(-74.9,-30.6);

	this.instance_1 = new lib.hero3_glass3_2_img();
	this.instance_1.setTransform(-75,-29.4);

	this.instance_2 = new lib.hero3_glass3_3_img();
	this.instance_2.setTransform(-74.8,-29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.9,-30.6,150,61);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-75,-29.4,150,61), rect, rect=new cjs.Rectangle(-74.8,-29.4,150,61), rect];


(lib.hero3_glass2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_glass2_1_img();
	this.instance.setTransform(-76.7,-42.4);

	this.instance_1 = new lib.hero3_glass2_2_img();
	this.instance_1.setTransform(-77.7,-42.4);

	this.instance_2 = new lib.hero3_glass2_3_img();
	this.instance_2.setTransform(-77.5,-42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.7,-42.4,153,85);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-77.7,-42.4,154,85), rect, rect=new cjs.Rectangle(-77.5,-42.4,154,85), rect];


(lib.hero3_glass1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_glass1_1_img();
	this.instance.setTransform(-81.5,-26.8);

	this.instance_1 = new lib.hero3_glass1_2_img();
	this.instance_1.setTransform(-81.5,-26.8);

	this.instance_2 = new lib.hero3_glass1_3_img();
	this.instance_2.setTransform(-81.5,-26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-26.8,163,54);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_fringe6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe6_1_img();
	this.instance.setTransform(-103.9,-67.4);

	this.instance_1 = new lib.hero3_fringe6_2_img();
	this.instance_1.setTransform(-103.9,-67.3);

	this.instance_2 = new lib.hero3_fringe6_3_img();
	this.instance_2.setTransform(-103.8,-67.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.9,-67.4,208,135);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-103.9,-67.3,208,135), rect, rect=new cjs.Rectangle(-103.8,-67.2,208,135), rect];


(lib.hero3_fringe5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe5_1_img();
	this.instance.setTransform(-85.5,-138.7);

	this.instance_1 = new lib.hero3_fringe5_2_img();
	this.instance_1.setTransform(-85.5,-138.7);

	this.instance_2 = new lib.hero3_fringe5_3_img();
	this.instance_2.setTransform(-84.5,-138.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-138.7,171,278);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-84.5,-138.7,170,278), rect];


(lib.hero3_fringe4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe4_1_img();
	this.instance.setTransform(-92.4,-107.3);

	this.instance_1 = new lib.hero3_fringe4_2_img();
	this.instance_1.setTransform(-91.3,-107.3);

	this.instance_2 = new lib.hero3_fringe4_3_img();
	this.instance_2.setTransform(-92.5,-107.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.4,-107.3,185,215);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-91.3,-107.3,185,215), rect, rect=new cjs.Rectangle(-92.5,-107.3,185,215), rect];


(lib.hero3_fringe3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe3_1_img();
	this.instance.setTransform(-135,-126.6);

	this.instance_1 = new lib.hero3_fringe3_2_img();
	this.instance_1.setTransform(-135,-126.6);

	this.instance_2 = new lib.hero3_fringe3_3_img();
	this.instance_2.setTransform(-135.3,-126.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-126.6,270,253);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-135,-126.6,270,254), rect, rect=new cjs.Rectangle(-135.3,-126.6,270,254), rect];


(lib.hero3_fringe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe2_1_img();
	this.instance.setTransform(-99.2,-153.2);

	this.instance_1 = new lib.hero3_fringe2_2_img();
	this.instance_1.setTransform(-99.2,-152.8);

	this.instance_2 = new lib.hero3_fringe2_3_img();
	this.instance_2.setTransform(-98.8,-152.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.2,-153.2,199,307);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-99.2,-152.8,198,306), rect, rect=new cjs.Rectangle(-98.8,-152.7,198,306), rect];


(lib.hero3_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe1_1_img();
	this.instance.setTransform(-136.2,-91.8);

	this.instance_1 = new lib.hero3_fringe1_2_img();
	this.instance_1.setTransform(-136.5,-91.6);

	this.instance_2 = new lib.hero3_fringe1_3_img();
	this.instance_2.setTransform(-135.4,-91.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.2,-91.8,273,185);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-136.5,-91.6,273,184), rect, rect=new cjs.Rectangle(-135.4,-91.3,273,184), rect];


(lib.hero3_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero3_eyes1_1_img();
	this.instance.setTransform(-73.4,-23.4);

	this.instance_1 = new lib.hero3_eyes1_2_img();
	this.instance_1.setTransform(-73.4,-23.4);

	this.instance_2 = new lib.hero3_eyes1_3_img();
	this.instance_2.setTransform(-73.4,-23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.4,-23.4,151,48);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_dress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress_3_1_img();
	this.instance.setTransform(-98.2,-96.5);

	this.instance_1 = new lib.hero3_dress_3_2_img();
	this.instance_1.setTransform(-99.3,-95.9);

	this.instance_2 = new lib.hero3_dress_3_3_img();
	this.instance_2.setTransform(-98.1,-95.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.2,-96.5,196,193);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-99.3,-95.9,197,192), rect, rect=new cjs.Rectangle(-98.1,-95.9,196,192), rect];


(lib.hero3_dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero3_dress_2_1_img();
	this.instance.setTransform(-84.2,-95);

	this.instance_1 = new lib.hero3_dress_2_2_img();
	this.instance_1.setTransform(-84.1,-95);

	this.instance_2 = new lib.hero3_dress_2_3_img();
	this.instance_2.setTransform(-84.1,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.2,-95,190,202);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-84.1,-95,190,202), rect, rect, rect];


(lib.hero3_dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero3_dress_1_1_img();
	this.instance.setTransform(-79.9,-97.5);

	this.instance_1 = new lib.hero3_dress_1_2_img();
	this.instance_1.setTransform(-79.9,-98.5);

	this.instance_2 = new lib.hero3_dress_1_3_img();
	this.instance_2.setTransform(-79.9,-98.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.9,-97.5,168,195);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-79.9,-98.5,168,195), rect, rect, rect];


(lib.hero3_bottom6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom6_1_img();
	this.instance.setTransform(-52.6,-112.7);

	this.instance_1 = new lib.hero3_bottom6_2_img();
	this.instance_1.setTransform(-52.6,-112.7);

	this.instance_2 = new lib.hero3_bottom6_3_img();
	this.instance_2.setTransform(-52.8,-112.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.6,-112.7,105,226);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-52.8,-112.7,106,226), rect];


(lib.hero3_bottom5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom5_1_img();
	this.instance.setTransform(-76.7,-113.2);

	this.instance_1 = new lib.hero3_bottom5_2_img();
	this.instance_1.setTransform(-75.6,-112.1);

	this.instance_2 = new lib.hero3_bottom5_3_img();
	this.instance_2.setTransform(-76.1,-112.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.7,-113.2,153,227);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-75.6,-112.1,153,226), rect, rect=new cjs.Rectangle(-76.1,-112.1,153,226), rect];


(lib.hero3_bottom4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom4_1_img();
	this.instance.setTransform(-52.8,-109);

	this.instance_1 = new lib.hero3_bottom4_2_img();
	this.instance_1.setTransform(-52.8,-109);

	this.instance_2 = new lib.hero3_bottom4_3_img();
	this.instance_2.setTransform(-52.8,-109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.8,-109,106,218);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-52.8,-109,105,218), rect];


(lib.hero3_bottom3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom3_1_img();
	this.instance.setTransform(-55.2,-52.5);

	this.instance_1 = new lib.hero3_bottom3_2_img();
	this.instance_1.setTransform(-55,-52.5);

	this.instance_2 = new lib.hero3_bottom3_3_img();
	this.instance_2.setTransform(-54.9,-52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.2,-52.5,110,105);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-55,-52.5,110,105), rect, rect=new cjs.Rectangle(-54.9,-52.5,110,105), rect];


(lib.hero3_bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom2_1_img();
	this.instance.setTransform(-52.4,-111.6);

	this.instance_1 = new lib.hero3_bottom2_2_img();
	this.instance_1.setTransform(-52.3,-111.6);

	this.instance_2 = new lib.hero3_bottom2_3_img();
	this.instance_2.setTransform(-52.3,-111.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.4,-111.6,105,223);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-52.3,-111.6,105,223), rect, rect, rect];


(lib.hero3_bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom1_1_img();
	this.instance.setTransform(-51.2,-101.5);

	this.instance_1 = new lib.hero3_bottom1_2_img();
	this.instance_1.setTransform(-51.1,-101.5);

	this.instance_2 = new lib.hero3_bottom1_3_img();
	this.instance_2.setTransform(-51.1,-101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.2,-101.5,102,203);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-51.1,-101.5,102,203), rect, rect, rect];


(lib.hero2_top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top6_1_img();
	this.instance.setTransform(-47.9,-60.5);

	this.instance_1 = new lib.hero2_top6_2_img();
	this.instance_1.setTransform(-47.8,-60.5);

	this.instance_2 = new lib.hero2_top6_3_img();
	this.instance_2.setTransform(-47.8,-60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.9,-60.5,96,121);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-47.8,-60.5,96,121), rect, rect, rect];


(lib.hero2_top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top5_1_img();
	this.instance.setTransform(-54.9,-56);

	this.instance_1 = new lib.hero2_top5_2_img();
	this.instance_1.setTransform(-54.9,-55.9);

	this.instance_2 = new lib.hero2_top5_3_img();
	this.instance_2.setTransform(-54.9,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.9,-56,110,112);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-54.9,-55.9,110,112), rect, rect=new cjs.Rectangle(-54.9,-56,110,112), rect];


(lib.hero2_top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top4_1_img();
	this.instance.setTransform(-43.9,-35.3);

	this.instance_1 = new lib.hero2_top4_2_img();
	this.instance_1.setTransform(-43.9,-35.3);

	this.instance_2 = new lib.hero2_top4_3_img();
	this.instance_2.setTransform(-43.9,-35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.9,-35.3,88,71);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top3_1_img();
	this.instance.setTransform(-36.7,-45.7);

	this.instance_1 = new lib.hero2_top3_2_img();
	this.instance_1.setTransform(-36.6,-45.6);

	this.instance_2 = new lib.hero2_top3_3_img();
	this.instance_2.setTransform(-36.4,-45.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.7,-45.7,74,92);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-36.6,-45.6,73,91), rect, rect=new cjs.Rectangle(-36.4,-45.6,73,91), rect];


(lib.hero2_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top2_1_img();
	this.instance.setTransform(-41.4,-43.2);

	this.instance_1 = new lib.hero2_top2_2_img();
	this.instance_1.setTransform(-41.4,-43.2);

	this.instance_2 = new lib.hero2_top2_3_img();
	this.instance_2.setTransform(-41.5,-43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-43.2,83,87);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-41.5,-43.1,83,86), rect];


(lib.hero2_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top1_1_img();
	this.instance.setTransform(-58.5,-65);

	this.instance_1 = new lib.hero2_top1_2_img();
	this.instance_1.setTransform(-58.5,-64.9);

	this.instance_2 = new lib.hero2_top1_3_img();
	this.instance_2.setTransform(-58.5,-64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-65,117,130);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-58.5,-64.9,117,130), rect, rect, rect];


(lib.hero2_shoes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes6_1_img();
	this.instance.setTransform(-37.7,-43.2);

	this.instance_1 = new lib.hero2_shoes6_2_img();
	this.instance_1.setTransform(-37.7,-43);

	this.instance_2 = new lib.hero2_shoes6_3_img();
	this.instance_2.setTransform(-37.7,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.7,-43.2,76,87);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-37.7,-43,75,86), rect, rect, rect];


(lib.hero2_shoes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes5_1_img();
	this.instance.setTransform(-43.6,-39.6);

	this.instance_1 = new lib.hero2_shoes5_2_img();
	this.instance_1.setTransform(-43.5,-39.6);

	this.instance_2 = new lib.hero2_shoes5_3_img();
	this.instance_2.setTransform(-43.5,-39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.6,-39.6,87,79);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-43.5,-39.6,87,79), rect, rect, rect];


(lib.hero2_shoes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes4_1_img();
	this.instance.setTransform(-41.1,-41.7);

	this.instance_1 = new lib.hero2_shoes4_2_img();
	this.instance_1.setTransform(-41.1,-41.7);

	this.instance_2 = new lib.hero2_shoes4_3_img();
	this.instance_2.setTransform(-41.1,-41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-41.7,82,84);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_shoes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes3_1_img();
	this.instance.setTransform(-45.9,-51.5);

	this.instance_1 = new lib.hero2_shoes3_2_img();
	this.instance_1.setTransform(-45.9,-51.5);

	this.instance_2 = new lib.hero2_shoes3_3_img();
	this.instance_2.setTransform(-45.9,-51.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.9,-51.5,92,103);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-45.9,-51.4,92,103), rect];


(lib.hero2_shoes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes2_1_img();
	this.instance.setTransform(-49.7,-71.7);

	this.instance_1 = new lib.hero2_shoes2_2_img();
	this.instance_1.setTransform(-49.8,-71.7);

	this.instance_2 = new lib.hero2_shoes2_3_img();
	this.instance_2.setTransform(-49.6,-71.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.7,-71.7,100,144);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-49.8,-71.7,100,143), rect, rect=new cjs.Rectangle(-49.6,-71.7,99,144), rect];


(lib.hero2_shoes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes1_1_img();
	this.instance.setTransform(-51,-75.2);

	this.instance_1 = new lib.hero2_shoes1_2_img();
	this.instance_1.setTransform(-51.2,-75.2);

	this.instance_2 = new lib.hero2_shoes1_3_img();
	this.instance_2.setTransform(-50.9,-75.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-75.2,102,151);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-51.2,-75.2,102,151), rect, rect=new cjs.Rectangle(-50.9,-75.2,101,151), rect];


(lib.hero2_lips1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-14.9,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.9,-10.7,30,22);
p.frameBounds = [rect];


(lib.hero2_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head1_1_img();
	this.instance.setTransform(-83.9,-83.8);

	this.instance_1 = new lib.hero2_head1_2_img();
	this.instance_1.setTransform(-84.1,-83.8);

	this.instance_2 = new lib.hero2_head1_3_img();
	this.instance_2.setTransform(-84,-83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.9,-83.8,168,168);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-84.1,-83.8,168,168), rect, rect=new cjs.Rectangle(-84,-83.8,168,168), rect];


(lib.hero2_hair6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hair6_1_img();
	this.instance.setTransform(-102.7,-135.1);

	this.instance_1 = new lib.hero2_hair6_2_img();
	this.instance_1.setTransform(-102.6,-134.8);

	this.instance_2 = new lib.hero2_hair6_3_img();
	this.instance_2.setTransform(-102.3,-134.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.7,-135.1,206,270);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-102.6,-134.8,205,270), rect, rect=new cjs.Rectangle(-102.3,-134.8,205,270), rect];


(lib.hero2_hair5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair5_1_img();
	this.instance.setTransform(-180,-158.5);

	this.instance_1 = new lib.hero2_hair5_2_img();
	this.instance_1.setTransform(-180,-158.6);

	this.instance_2 = new lib.hero2_hair5_3_img();
	this.instance_2.setTransform(-180,-158.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-158.5,360,332);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-180,-158.6,360,332), rect, rect, rect];


(lib.hero2_hair4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hair4_1_img();
	this.instance.setTransform(-205.2,-245.6);

	this.instance_1 = new lib.hero2_hair4_2_img();
	this.instance_1.setTransform(-204.9,-245.4);

	this.instance_2 = new lib.hero2_hair4_3_img();
	this.instance_2.setTransform(-204.7,-245.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205.2,-245.6,411,491);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-204.9,-245.4,410,491), rect, rect=new cjs.Rectangle(-204.7,-245.3,409,491), rect];


(lib.hero2_hair3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hair3_1_img();
	this.instance.setTransform(-144.2,-224.6);

	this.instance_1 = new lib.hero2_hair3_2_img();
	this.instance_1.setTransform(-144.2,-224.2);

	this.instance_2 = new lib.hero2_hair3_3_img();
	this.instance_2.setTransform(-144.4,-224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.2,-224.6,289,453);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-144.2,-224.2,288,453), rect, rect=new cjs.Rectangle(-144.4,-224,288,453), rect];


(lib.hero2_hair1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hair1_1_img();
	this.instance.setTransform(-134.2,-140.1);

	this.instance_1 = new lib.hero2_hair1_2_img();
	this.instance_1.setTransform(-134,-140.1);

	this.instance_2 = new lib.hero2_hair1_3_img();
	this.instance_2.setTransform(-134,-140.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.2,-140.1,268,280);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-134,-140.1,268,280), rect, rect, rect];


(lib.hero2_glass3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glass3_1_img();
	this.instance.setTransform(-74,-21.2);

	this.instance_1 = new lib.hero2_glass3_2_img();
	this.instance_1.setTransform(-74,-21.2);

	this.instance_2 = new lib.hero2_glass3_3_img();
	this.instance_2.setTransform(-74,-21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-21.2,148,43);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_glass2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glass2_1_img();
	this.instance.setTransform(-81.9,-26.7);

	this.instance_1 = new lib.hero2_glass2_2_img();
	this.instance_1.setTransform(-81.9,-26.7);

	this.instance_2 = new lib.hero2_glass2_3_img();
	this.instance_2.setTransform(-81.9,-26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.9,-26.7,164,54);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_glass1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glass1_1_img();
	this.instance.setTransform(-91.1,-37.2);

	this.instance_1 = new lib.hero2_glass1_2_img();
	this.instance_1.setTransform(-91,-37.2);

	this.instance_2 = new lib.hero2_glass1_3_img();
	this.instance_2.setTransform(-91.1,-37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.1,-37.2,182,74);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-91,-37.2,182,75), rect, rect=new cjs.Rectangle(-91.1,-37.1,182,75), rect];


(lib.hero2_fringe6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe6_1_img();
	this.instance.setTransform(-97.7,-108.7);

	this.instance_1 = new lib.hero2_fringe6_2_img();
	this.instance_1.setTransform(-97.6,-108.7);

	this.instance_2 = new lib.hero2_fringe6_3_img();
	this.instance_2.setTransform(-97.4,-108.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.7,-108.7,195,218);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-97.6,-108.7,195,218), rect, rect=new cjs.Rectangle(-97.4,-108.6,195,217), rect];


(lib.hero2_fringe5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe5_1_img();
	this.instance.setTransform(-108.9,-150.7);

	this.instance_1 = new lib.hero2_fringe5_2_img();
	this.instance_1.setTransform(-108.8,-150.5);

	this.instance_2 = new lib.hero2_fringe5_3_img();
	this.instance_2.setTransform(-108.5,-150.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.9,-150.7,218,302);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-108.8,-150.5,218,301), rect, rect=new cjs.Rectangle(-108.5,-150.4,217,301), rect];


(lib.hero2_fringe4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe4_1_img();
	this.instance.setTransform(-85.9,-64);

	this.instance_1 = new lib.hero2_fringe4_2_img();
	this.instance_1.setTransform(-85.8,-64);

	this.instance_2 = new lib.hero2_fringe4_3_img();
	this.instance_2.setTransform(-85.6,-64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.9,-64,172,128);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-85.8,-64,172,128), rect, rect=new cjs.Rectangle(-85.6,-64,172,128), rect];


(lib.hero2_fringe3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe3_1_img();
	this.instance.setTransform(-95.9,-64.2);

	this.instance_1 = new lib.hero2_fringe3_2_img();
	this.instance_1.setTransform(-95.9,-64.1);

	this.instance_2 = new lib.hero2_fringe3_3_img();
	this.instance_2.setTransform(-95.7,-64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.9,-64.2,192,129);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-95.9,-64.1,192,128), rect, rect=new cjs.Rectangle(-95.7,-64.2,192,128), rect];


(lib.hero2_fringe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe2_1_img();
	this.instance.setTransform(-103.7,-102.7);

	this.instance_1 = new lib.hero2_fringe2_2_img();
	this.instance_1.setTransform(-103.7,-102.6);

	this.instance_2 = new lib.hero2_fringe2_3_img();
	this.instance_2.setTransform(-102.8,-102.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.7,-102.7,207,205);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-103.7,-102.6,207,205), rect, rect=new cjs.Rectangle(-102.8,-102.6,207,205), rect];


(lib.hero2_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_1_img();
	this.instance.setTransform(-90.5,-94.3);

	this.instance_1 = new lib.hero2_fringe1_2_img();
	this.instance_1.setTransform(-90.6,-94.5);

	this.instance_2 = new lib.hero2_fringe1_3_img();
	this.instance_2.setTransform(-90.1,-94.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-94.3,181,189);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-90.6,-94.5,181,189), rect, rect=new cjs.Rectangle(-90.1,-94.1,181,189), rect];


(lib.hero2_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero2_eyes1_1_img();
	this.instance.setTransform(-73,-23.1);

	this.instance_1 = new lib.hero2_eyes1_2_img();
	this.instance_1.setTransform(-73,-23.1);

	this.instance_2 = new lib.hero2_eyes1_3_img();
	this.instance_2.setTransform(-73,-23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-23.1,151,48);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress3_1_img();
	this.instance.setTransform(-73.9,-93.3);

	this.instance_1 = new lib.hero2_dress3_2_img();
	this.instance_1.setTransform(-73.9,-93.3);

	this.instance_2 = new lib.hero2_dress3_3_img();
	this.instance_2.setTransform(-73.9,-93.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.9,-93.3,148,187);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress2_1_img();
	this.instance.setTransform(-104.4,-101.7);

	this.instance_1 = new lib.hero2_dress2_2_img();
	this.instance_1.setTransform(-104.1,-101.7);

	this.instance_2 = new lib.hero2_dress2_3_img();
	this.instance_2.setTransform(-104.1,-101.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.4,-101.7,209,204);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-104.1,-101.7,209,204), rect, rect=new cjs.Rectangle(-104.1,-101.7,209,203), rect];


(lib.hero2_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress1_1_img();
	this.instance.setTransform(-117.5,-108.7);

	this.instance_1 = new lib.hero2_dress1_2_img();
	this.instance_1.setTransform(-117.5,-107.8);

	this.instance_2 = new lib.hero2_dress1_3_img();
	this.instance_2.setTransform(-117.5,-107.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.5,-108.7,235,218);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-117.5,-107.8,235,217), rect, rect=new cjs.Rectangle(-117.5,-107.8,235,216), rect];


(lib.hero2_bottom6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom6_1_img();
	this.instance.setTransform(-41.2,-46.4);

	this.instance_1 = new lib.hero2_bottom6_2_img();
	this.instance_1.setTransform(-41.3,-45.4);

	this.instance_2 = new lib.hero2_bottom6_3_img();
	this.instance_2.setTransform(-41.3,-46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.2,-46.4,82,93);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-41.3,-45.4,82,93), rect, rect=new cjs.Rectangle(-41.3,-46.4,82,93), rect];


(lib.hero2_bottom5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom5_1_img();
	this.instance.setTransform(-84.1,-62.2);

	this.instance_1 = new lib.hero2_bottom5_2_img();
	this.instance_1.setTransform(-84.1,-62.2);

	this.instance_2 = new lib.hero2_bottom5_3_img();
	this.instance_2.setTransform(-84.1,-62.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.1,-62.2,168,124);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_bottom4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom4_1_img();
	this.instance.setTransform(-47.9,-114.1);

	this.instance_1 = new lib.hero2_bottom4_2_img();
	this.instance_1.setTransform(-47.9,-114.1);

	this.instance_2 = new lib.hero2_bottom4_3_img();
	this.instance_2.setTransform(-47.8,-114.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.9,-114.1,96,228);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-47.8,-114.1,96,228), rect];


(lib.hero2_bottom3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom3_1_img();
	this.instance.setTransform(-77.2,-63.8);

	this.instance_1 = new lib.hero2_bottom3_2_img();
	this.instance_1.setTransform(-77.2,-63.7);

	this.instance_2 = new lib.hero2_bottom3_3_img();
	this.instance_2.setTransform(-77.2,-63.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.2,-63.8,154,128);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-77.2,-63.7,154,127), rect, rect, rect];


(lib.hero2_bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom2_1_img();
	this.instance.setTransform(-41.2,-24.9);

	this.instance_1 = new lib.hero2_bottom2_2_img();
	this.instance_1.setTransform(-41.2,-24.9);

	this.instance_2 = new lib.hero2_bottom2_3_img();
	this.instance_2.setTransform(-41.2,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.2,-24.9,82,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom1_1_img();
	this.instance.setTransform(-71,-60.3);

	this.instance_1 = new lib.hero2_bottom1_2_img();
	this.instance_1.setTransform(-71,-59.9);

	this.instance_2 = new lib.hero2_bottom1_3_img();
	this.instance_2.setTransform(-71,-59.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-60.3,142,121);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-71,-59.9,142,120), rect, rect, rect];


(lib.hero1_top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top6_1_img();
	this.instance.setTransform(-60.9,-45.5);

	this.instance_1 = new lib.hero1_top6_2_img();
	this.instance_1.setTransform(-60.8,-45.4);

	this.instance_2 = new lib.hero1_top6_3_img();
	this.instance_2.setTransform(-60.8,-45.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.9,-45.5,122,91);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-60.8,-45.4,122,91), rect, rect=new cjs.Rectangle(-60.8,-45.2,122,91), rect];


(lib.hero1_top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top5_1_img();
	this.instance.setTransform(-72.9,-56);

	this.instance_1 = new lib.hero1_top5_2_img();
	this.instance_1.setTransform(-72.5,-56);

	this.instance_2 = new lib.hero1_top5_3_img();
	this.instance_2.setTransform(-72.3,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.9,-56,146,112);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-72.5,-56,145,112), rect, rect=new cjs.Rectangle(-72.3,-56,145,112), rect];


(lib.hero1_top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top4_1_img();
	this.instance.setTransform(-72.4,-54.2);

	this.instance_1 = new lib.hero1_top4_2_img();
	this.instance_1.setTransform(-72.3,-53.8);

	this.instance_2 = new lib.hero1_top4_3_img();
	this.instance_2.setTransform(-71.8,-53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.4,-54.2,145,109);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-72.3,-53.8,145,108), rect, rect=new cjs.Rectangle(-71.8,-53.7,145,108), rect];


(lib.hero1_top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top3_1_img();
	this.instance.setTransform(-45.4,-40.7);

	this.instance_1 = new lib.hero1_top3_2_img();
	this.instance_1.setTransform(-45.4,-40.7);

	this.instance_2 = new lib.hero1_top3_3_img();
	this.instance_2.setTransform(-45.4,-40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.4,-40.7,91,82);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-45.4,-40.6,91,82), rect];


(lib.hero1_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top2_1_img();
	this.instance.setTransform(-53.7,-46.2);

	this.instance_1 = new lib.hero1_top2_2_img();
	this.instance_1.setTransform(-53.6,-45.9);

	this.instance_2 = new lib.hero1_top2_3_img();
	this.instance_2.setTransform(-53.6,-45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.7,-46.2,107,93);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-53.6,-45.9,107,92), rect, rect, rect];


(lib.hero1_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top1_1_img();
	this.instance.setTransform(-68.9,-51.5);

	this.instance_1 = new lib.hero1_top1_2_img();
	this.instance_1.setTransform(-69,-51.5);

	this.instance_2 = new lib.hero1_top1_3_img();
	this.instance_2.setTransform(-68.6,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.9,-51.5,138,103);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-69,-51.5,138,103), rect, rect=new cjs.Rectangle(-68.6,-51.5,138,103), rect];


(lib.hero1_shoes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes6_1_img();
	this.instance.setTransform(-51.7,-55.7);

	this.instance_1 = new lib.hero1_shoes6_2_img();
	this.instance_1.setTransform(-51.7,-55.7);

	this.instance_2 = new lib.hero1_shoes6_3_img();
	this.instance_2.setTransform(-51.7,-55.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-55.7,103,112);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-51.7,-55.7,104,112), rect];


(lib.hero1_shoes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes5_1_img();
	this.instance.setTransform(-50.4,-32.7);

	this.instance_1 = new lib.hero1_shoes5_2_img();
	this.instance_1.setTransform(-50.3,-32.3);

	this.instance_2 = new lib.hero1_shoes5_3_img();
	this.instance_2.setTransform(-49.6,-31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-32.7,101,66);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-50.3,-32.3,101,65), rect, rect=new cjs.Rectangle(-49.6,-31.9,100,65), rect];


(lib.hero1_shoes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes4_1_img();
	this.instance.setTransform(-52.7,-49.2);

	this.instance_1 = new lib.hero1_shoes4_2_img();
	this.instance_1.setTransform(-52.7,-49.2);

	this.instance_2 = new lib.hero1_shoes4_3_img();
	this.instance_2.setTransform(-52.7,-49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.7,-49.2,105,99);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_shoes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes3_1_img();
	this.instance.setTransform(-56.2,-85);

	this.instance_1 = new lib.hero1_shoes3_2_img();
	this.instance_1.setTransform(-56.2,-85);

	this.instance_2 = new lib.hero1_shoes3_3_img();
	this.instance_2.setTransform(-56.2,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.2,-85,112,170);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_shoes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes2_1_img();
	this.instance.setTransform(-49.8,-48);

	this.instance_1 = new lib.hero1_shoes2_2_img();
	this.instance_1.setTransform(-49.8,-48);

	this.instance_2 = new lib.hero1_shoes2_3_img();
	this.instance_2.setTransform(-49.8,-48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-48,100,96);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_shoes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes1_1_img();
	this.instance.setTransform(-51.2,-32.7);

	this.instance_1 = new lib.hero1_shoes1_2_img();
	this.instance_1.setTransform(-51.2,-32.7);

	this.instance_2 = new lib.hero1_shoes1_3_img();
	this.instance_2.setTransform(-51.2,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.2,-32.7,102,66);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_lips1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-11.8,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.8,-9.8,24,20);
p.frameBounds = [rect];


(lib.hero1_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head1_1_img();
	this.instance.setTransform(-83.9,-83.8);

	this.instance_1 = new lib.hero1_head1_2_img();
	this.instance_1.setTransform(-84.1,-83.8);

	this.instance_2 = new lib.hero1_head1_3_img();
	this.instance_2.setTransform(-84,-83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.9,-83.8,168,168);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-84.1,-83.8,168,168), rect, rect=new cjs.Rectangle(-84,-83.8,168,168), rect];


(lib.hero1_hair4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair4_1_img();
	this.instance.setTransform(-162.3,-253.7);

	this.instance_1 = new lib.hero1_hair4_2_img();
	this.instance_1.setTransform(-162.5,-253.8);

	this.instance_2 = new lib.hero1_hair4_3_img();
	this.instance_2.setTransform(-162.8,-253.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.3,-253.7,325,508);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-162.5,-253.8,325,508), rect, rect=new cjs.Rectangle(-162.8,-253.5,326,507), rect];


(lib.hero1_hair3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair3_1_img();
	this.instance.setTransform(-70.2,-253.1);

	this.instance_1 = new lib.hero1_hair3_2_img();
	this.instance_1.setTransform(-70.2,-253.7);

	this.instance_2 = new lib.hero1_hair3_3_img();
	this.instance_2.setTransform(-69.9,-254.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.2,-253.1,141,506);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-70.2,-253.7,141,507), rect, rect=new cjs.Rectangle(-69.9,-254.1,140,507), rect];


(lib.hero1_hair2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair2_1_img();
	this.instance.setTransform(-160.1,-206);

	this.instance_1 = new lib.hero1_hair2_2_img();
	this.instance_1.setTransform(-159.8,-206.3);

	this.instance_2 = new lib.hero1_hair2_3_img();
	this.instance_2.setTransform(-159.9,-206.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160.1,-206,320,412);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-159.8,-206.3,320,412), rect, rect=new cjs.Rectangle(-159.9,-206.3,320,412), rect];


(lib.hero1_hair1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair1_1_img();
	this.instance.setTransform(-123.2,-107.6);

	this.instance_1 = new lib.hero1_hair1_2_img();
	this.instance_1.setTransform(-123.2,-107.6);

	this.instance_2 = new lib.hero1_hair1_3_img();
	this.instance_2.setTransform(-123,-107.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.2,-107.6,246,215);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-123,-107.5,246,215), rect];


(lib.hero1_glass3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glass3_1_img();
	this.instance.setTransform(-69.1,-27.5);

	this.instance_1 = new lib.hero1_glass3_2_img();
	this.instance_1.setTransform(-69.1,-27.3);

	this.instance_2 = new lib.hero1_glass3_3_img();
	this.instance_2.setTransform(-69.1,-27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.1,-27.5,138,55);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-69.1,-27.3,139,55), rect, rect, rect];


(lib.hero1_glass2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glass2_1_img();
	this.instance.setTransform(-77.2,-29.5);

	this.instance_1 = new lib.hero1_glass2_2_img();
	this.instance_1.setTransform(-77,-29.4);

	this.instance_2 = new lib.hero1_glass2_3_img();
	this.instance_2.setTransform(-76.6,-29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.2,-29.5,154,59);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-77,-29.4,154,59), rect, rect=new cjs.Rectangle(-76.6,-29.2,154,59), rect];


(lib.hero1_glass1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glass1_1_img();
	this.instance.setTransform(-77.6,-13.2);

	this.instance_1 = new lib.hero1_glass1_2_img();
	this.instance_1.setTransform(-77.6,-13.2);

	this.instance_2 = new lib.hero1_glass1_3_img();
	this.instance_2.setTransform(-77.6,-13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.6,-13.2,155,74);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_fringe6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe6_1_img();
	this.instance.setTransform(-98,-59.5);

	this.instance_1 = new lib.hero1_fringe6_2_img();
	this.instance_1.setTransform(-97.5,-59.3);

	this.instance_2 = new lib.hero1_fringe6_3_img();
	this.instance_2.setTransform(-97.4,-58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98,-59.5,196,119);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-97.5,-59.3,196,119), rect, rect=new cjs.Rectangle(-97.4,-58.9,195,118), rect];


(lib.hero1_fringe5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe5_1_img();
	this.instance.setTransform(-116.5,-117.5);

	this.instance_1 = new lib.hero1_fringe5_2_img();
	this.instance_1.setTransform(-116,-117.1);

	this.instance_2 = new lib.hero1_fringe5_3_img();
	this.instance_2.setTransform(-115.4,-117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.5,-117.5,233,235);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-116,-117.1,232,235), rect, rect=new cjs.Rectangle(-115.4,-117,232,235), rect];


(lib.hero1_fringe4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe4_1_img();
	this.instance.setTransform(-90.9,-108.2);

	this.instance_1 = new lib.hero1_fringe4_2_img();
	this.instance_1.setTransform(-90.8,-108.2);

	this.instance_2 = new lib.hero1_fringe4_3_img();
	this.instance_2.setTransform(-90.8,-108.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.9,-108.2,182,217);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-90.8,-108.2,182,217), rect, rect, rect];


(lib.hero1_fringe3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe3_1_img();
	this.instance.setTransform(-83.4,-60.5);

	this.instance_1 = new lib.hero1_fringe3_2_img();
	this.instance_1.setTransform(-83.6,-60.5);

	this.instance_2 = new lib.hero1_fringe3_3_img();
	this.instance_2.setTransform(-83.3,-60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.4,-60.5,167,121);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-83.6,-60.5,167,121), rect, rect=new cjs.Rectangle(-83.3,-60.5,166,121), rect];


(lib.hero1_fringe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe2_1_img();
	this.instance.setTransform(-95.7,-109.5);

	this.instance_1 = new lib.hero1_fringe2_2_img();
	this.instance_1.setTransform(-95.1,-110.5);

	this.instance_2 = new lib.hero1_fringe2_3_img();
	this.instance_2.setTransform(-94.6,-110.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.7,-109.5,191,219);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-95.1,-110.5,191,219), rect, rect=new cjs.Rectangle(-94.6,-110.6,190,219), rect];


(lib.hero1_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_1_img();
	this.instance.setTransform(-97.6,-107);

	this.instance_1 = new lib.hero1_fringe1_2_img();
	this.instance_1.setTransform(-96.6,-106.9);

	this.instance_2 = new lib.hero1_fringe1_3_img();
	this.instance_2.setTransform(-96.5,-106.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.6,-107,195,214);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-96.6,-106.9,195,214), rect, rect=new cjs.Rectangle(-96.5,-106.9,195,214), rect];


(lib.hero1_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero1_eyes1_1_img();
	this.instance.setTransform(-70.2,-23.5);

	this.instance_1 = new lib.hero1_eyes1_2_img();
	this.instance_1.setTransform(-70.2,-23.5);

	this.instance_2 = new lib.hero1_eyes1_3_img();
	this.instance_2.setTransform(-70.2,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance}]},3).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.2,-23.5,148,48);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress3_1_img();
	this.instance.setTransform(-78.4,-91.7);

	this.instance_1 = new lib.hero1_dress3_2_img();
	this.instance_1.setTransform(-77.8,-91.7);

	this.instance_2 = new lib.hero1_dress3_3_img();
	this.instance_2.setTransform(-77.7,-91.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.4,-91.7,157,184);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-77.8,-91.7,156,183), rect, rect=new cjs.Rectangle(-77.7,-91.7,156,183), rect];


(lib.hero1_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress2_1_img();
	this.instance.setTransform(-132.1,-163.2);

	this.instance_1 = new lib.hero1_dress2_2_img();
	this.instance_1.setTransform(-132.1,-163.2);

	this.instance_2 = new lib.hero1_dress2_3_img();
	this.instance_2.setTransform(-132.1,-163.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.1,-163.2,264,327);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-132.1,-163.2,264,326), rect, rect, rect];


(lib.hero1_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress1_1_img();
	this.instance.setTransform(-117.2,-126.5);

	this.instance_1 = new lib.hero1_dress1_2_img();
	this.instance_1.setTransform(-117.1,-126.5);

	this.instance_2 = new lib.hero1_dress1_3_img();
	this.instance_2.setTransform(-117.1,-126.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.2,-126.5,235,253);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-117.1,-126.5,234,253), rect, rect=new cjs.Rectangle(-117.1,-126.2,234,252), rect];


(lib.hero1_bottom6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom6_1_img();
	this.instance.setTransform(-62.2,-109.7);

	this.instance_1 = new lib.hero1_bottom6_2_img();
	this.instance_1.setTransform(-62,-109.7);

	this.instance_2 = new lib.hero1_bottom6_3_img();
	this.instance_2.setTransform(-61.8,-109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.2,-109.7,124,220);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-62,-109.7,124,220), rect, rect=new cjs.Rectangle(-61.8,-109.7,124,220), rect];


(lib.hero1_bottom5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom5_1_img();
	this.instance.setTransform(-52.5,-55.3);

	this.instance_1 = new lib.hero1_bottom5_2_img();
	this.instance_1.setTransform(-52.7,-55.3);

	this.instance_2 = new lib.hero1_bottom5_3_img();
	this.instance_2.setTransform(-52.6,-55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-55.3,105,111);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-52.7,-55.3,105,111), rect, rect=new cjs.Rectangle(-52.6,-55.3,105,111), rect];


(lib.hero1_bottom4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom4_1_img();
	this.instance.setTransform(-59.4,-114.2);

	this.instance_1 = new lib.hero1_bottom4_2_img();
	this.instance_1.setTransform(-59.1,-114.2);

	this.instance_2 = new lib.hero1_bottom4_3_img();
	this.instance_2.setTransform(-58.3,-114.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.4,-114.2,119,229);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-59.1,-114.2,119,229), rect, rect=new cjs.Rectangle(-58.3,-114.2,118,229), rect];


(lib.hero1_bottom3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom3_1_img();
	this.instance.setTransform(-148.7,-137);

	this.instance_1 = new lib.hero1_bottom3_2_img();
	this.instance_1.setTransform(-148.6,-136.8);

	this.instance_2 = new lib.hero1_bottom3_3_img();
	this.instance_2.setTransform(-148.6,-136.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.7,-137,298,274);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-148.6,-136.8,297,274), rect, rect=new cjs.Rectangle(-148.6,-136.6,297,274), rect];


(lib.hero1_bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom2_1_img();
	this.instance.setTransform(-113.7,-58.2);

	this.instance_1 = new lib.hero1_bottom2_2_img();
	this.instance_1.setTransform(-113.5,-58.2);

	this.instance_2 = new lib.hero1_bottom2_3_img();
	this.instance_2.setTransform(-113.2,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.7,-58.2,227,116);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-113.5,-58.2,227,116), rect, rect=new cjs.Rectangle(-113.2,-58.2,227,116), rect];


(lib.hero1_bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom1_1_img();
	this.instance.setTransform(-65.5,-121.2);

	this.instance_1 = new lib.hero1_bottom1_2_img();
	this.instance_1.setTransform(-65.5,-121.2);

	this.instance_2 = new lib.hero1_bottom1_3_img();
	this.instance_2.setTransform(-65.5,-121.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-121.2,131,243);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body1_1_img();
	this.instance.setTransform(-74.4,-193.7);

	this.instance_1 = new lib.hero1_body1_2_img();
	this.instance_1.setTransform(-74.3,-193.7);

	this.instance_2 = new lib.hero1_body1_3_img();
	this.instance_2.setTransform(-74.2,-193.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.4,-193.7,149,387);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-74.3,-193.7,149,387), rect, rect=new cjs.Rectangle(-74.2,-193.7,148,387), rect];


(lib.hero_3_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_body1_1_img();
	this.instance.setTransform(-93.4,-185.5);

	this.instance_1 = new lib.hero3_body1_2_img();
	this.instance_1.setTransform(-94.8,-185.5);

	this.instance_2 = new lib.hero3_body1_3_img();
	this.instance_2.setTransform(-93.9,-184.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.4,-185.5,186,370);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-94.8,-185.5,186,370), rect, rect=new cjs.Rectangle(-93.9,-184.9,186,369), rect];


(lib.hero_2_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body1_1_img();
	this.instance.setTransform(-82.5,-187.9);

	this.instance_1 = new lib.hero2_body1_2_img();
	this.instance_1.setTransform(-82.5,-187.9);

	this.instance_2 = new lib.hero2_body1_3_img();
	this.instance_2.setTransform(-82.5,-187.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-187.9,165,376);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.frame_game_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.frame_game_img();
	this.instance.setTransform(-210,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
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


(lib.ero1_hair6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair6_1_img();
	this.instance.setTransform(-132.2,-228.6);

	this.instance_1 = new lib.hero1_hair6_2_img();
	this.instance_1.setTransform(-132.1,-228.4);

	this.instance_2 = new lib.hero1_hair6_3_img();
	this.instance_2.setTransform(-131.8,-228.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.2,-228.6,265,457);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-132.1,-228.4,264,457), rect, rect=new cjs.Rectangle(-131.8,-228.2,264,457), rect];


(lib.ero1_hair5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair5_1_img();
	this.instance.setTransform(-123.2,-217.1);

	this.instance_1 = new lib.hero1_hair5_2_img();
	this.instance_1.setTransform(-123,-217.2);

	this.instance_2 = new lib.hero1_hair5_3_img();
	this.instance_2.setTransform(-122.6,-216.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.2,-217.1,247,434);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-123,-217.2,246,434), rect, rect=new cjs.Rectangle(-122.6,-216.6,246,434), rect];


(lib.dress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress_3_1_img();
	this.instance.setTransform(98,-97,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwrOlIg4kVIHL4TIFej9IKGAnIMGTbIASJ4IlfE5IyoBOg");
	this.shape.setTransform(-1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.4,-113.6,224.9,230.7);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress3_1_img();
	this.instance.setTransform(74,-94,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnlQyIn98FIEkmMIVzAbIEuFnIkYZ5IlYDEg");
	this.shape.setTransform(-2.3,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.9,-112.5,199.1,224.1);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress3_1_img();
	this.instance.setTransform(78,-92,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AslQDIjamHIIk6yIMhgfIK6LHIqDXkg");
	this.shape.setTransform(-1.4,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.8,-105.7,205,222.2);
p.frameBounds = [rect];


(lib.dress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress_2_1_img();
	this.instance.setTransform(95,-101,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AopRhIoqmhIHc3uIHWlPII7AsIK6R3IhfMsIoZEsg");
	this.shape.setTransform(0.9,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-113.4,221.8,230.1);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress2_1_img();
	this.instance.setTransform(104,-102,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuIQMIlTmeINg76IL+B2INZaBIoCIig");
	this.shape.setTransform(0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124,-117,249,233.1);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress2_1_img();
	this.instance.setTransform(132,-164,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3KYHMAPUgyrIQIhgIHMIIMAHtAtTMgrhACug");
	this.shape.setTransform(-0.6,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.9,-178.8,296.7,359.5);
p.frameBounds = [rect];


(lib.dress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress_1_1_img();
	this.instance.setTransform(84,-98,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArvP5IjI4QIAujMIIGlJIJWgSIIcITIDJM9Ip7Mtg");
	this.shape.setTransform(1.5,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.7,-109.9,190.5,217.5);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress1_1_img();
	this.instance.setTransform(117,-109,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A16NzMANfgipIR5E7IMdXYIgsHwI19Fqg");
	this.shape.setTransform(-4.1,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.4,-128.2,280.7,267.1);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_1_img();
	this.instance.setTransform(117,-127,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsZVxIokoTICU3GIItsYIQ8B/MAN+Ah0IpvIOg");
	this.shape.setTransform(-1.5,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.8,-141,268.6,282);
p.frameBounds = [rect];


(lib.decor_background_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_background_0_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.circle_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("AgrGfQgWgBgPgJQgQgIgMgYQgLgXABgSQABgOgIgbQgBgEACgEQACgEAEgBIADAAIAAgCIgEgBQgLgDgUAEQgZAEgTABQgTABgXgBQgUgBgTAEQgVAEgXAEQgaAEgWgKQgWgJgOgYIAAAAQgNgVgFgNQgCgEACgEQABgEAEgBIABgBIAAgBIgBAAQgFAAgCgDQgEgDAAgEIAAglIgBgmIAAgBQAAgRAFgYQADgVgHgXQgJgcAHgRIABAAQAFgOgEgQQgBgEACgEQACgDAEgBIACgBIAAgCQgEAAgDgDQgDgDAAgEIADgkIACgqQABgUgFgXIAAAAQgHgeANgOIAAAAIAagbIAAgBQAQgRAVgHQAUgHASAAIAuABQAEAAADAEQADADAAAEIADAAIABgEQACgEAEgBQAMgEAdAGQAYAGASABQARABAMgGIABAAQALgGAHgLIABgBQAHgMgBgTQgBgZAOgUQAMgSAOgMIABgBQADgCAEAAQADAAAJgBIABgBQALgBAVABQAWACAVAOIAjAYIAgAaIAeAYQADADABAEQABAEgDADIgBABIACACIADgDQAEgCAEABQAEABACAEQAIAMAUALQAaANANASQALAPAQAIIAAABQAUAKAMAUQAKAPAKAIIABABIAdAVQASANAQANQADADAAAEQABAEgDADIAAABIACABIAAAAQADgDAEAAQAEAAADADQAPANAQANQAWAQAAAYQAAAQAKARIAAAAQANAVgNAcQgMAZgQAKIABAAIgdAUQgOAKgLAMIgBAAIgfAiQgDADgEAAQgFAAgDgDIgCACIACAEQABAEgDAEQgQAVgVAPIAAAAQgWAQgQADIAAAAQgKADgJARQgNAXgNAJIAAgBIgbAUQgQAKgUATIgfAfIgBAAQgLANgUAMQgQALgIALQgCADgEABQgFABgDgCIgCgDIgBABIACADQAAAEgCAEQgDADgEABQgTADgRAAIgJAAgAhBFKIAaAUQALAJAMgGIAfgUQANgJAMgQQAPgWAUgIIAAAAQARgHANgLIABAAQAOgNATgUIAAAAQAUgWAHgGQADgDAFAAQADABACACIADgCIgBgCQgCgEACgDQAGgRAXgMIAAgBQASgJAKgNQAMgTAZgJIABAAQASgGAJgPQALgTAUgPQAEgCAEABQADAAACACIADgCQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgEACgDQAMgRAEgRQADgPgHgRQgFgRgMgIIAAABQgPgJgUgPQgTgOgMgNQgLgLgRgLQgTgNgNgUQgCgDABgEQAAgDADgCIgDgCQgCADgEABQgEAAgEgCIghgXQgSgNgMgMQgMgMgRgUQgPgTgRgIIABAAQgVgKgNgOIAAgBQgKgMgOgLQgOgLgNgGQgQgGgQgCQgJgCgIAFQAGAOgKAHQgDAEgCAQIgEAoQgBAZgWAMQgUALgVgHQgPgFgXAEQgFABgDgCQgDgDgBgEIAAgCIgDgBQAAAEgCACQgCAEgEAAQgZAEgUgEQgTgEgSgCQgTgBgSACQgRACgLAGQgJAHgHARQgJAVgGAVQgFARAGANQAJATgIAZQgCADgDACIgFABIAAACQAEAAADADQADACAAAFQABAOAAAZQgBAWACASIACApQABATgHAXIABgBQgFATACAUQAEAWAFASQAEASAGAOIAAAAQAGALAPAKQAEADABAEIAAADIACAAIAAAAQAAgEADgDQADgDAEAAQATAAAUgEQAXgFAVAEIAAAAQARAEARgGQAWgHAXgBQAWAAAYADQAeAEAEAYIAFAkIADAhQABAEgDADQgDADgEABIAAAAIAAACIACAAIABgBQAEAAACADgAl3jKIABgDQAEgKAGgIQgIAKgDALgAh+kOIALABIAAgKIgLAJgAghlvQAPADAQAFIgEgDIAAgBQgKgIgMgBQgLgBgLAGIAHgBIAKABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-41.5,86.6,83.1);
p.frameBounds = [rect];


(lib.check_set_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_set_0_img();
	this.instance.setTransform(-55,-50);

	this.instance_1 = new lib.bg_set_1_img();
	this.instance_1.setTransform(-55,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect, rect];


(lib.check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_1_0_img();
	this.instance.setTransform(-60,-60);

	this.instance_1 = new lib.check_2_0_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.check_3_0_img();
	this.instance_2.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_1_1_img();
	this.instance.setTransform(-60,-60);

	this.instance_1 = new lib.check_2_1_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.check_3_1_img();
	this.instance_2.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.bottom_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom6_1_img();
	this.instance.setTransform(52,-113,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfUTMAAAgolIY/AAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-130,160,260);
p.frameBounds = [rect];


(lib.bottom_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom6_1_img();
	this.instance.setTransform(41,-47,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApRjcIDcl9IJXgGIFwFsIiEMuItZAlg");
	this.shape.setTransform(-1.6,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-59,119,121.6);
p.frameBounds = [rect];


(lib.bottom_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom6_1_img();
	this.instance.setTransform(62,-110,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsUksID+vEIQiAHID6G5IAPe/IxaBig");
	this.shape.setTransform(-1.8,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-123.7,158,253.2);
p.frameBounds = [rect];


(lib.bottom_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom5_1_img();
	this.instance.setTransform(76,-114,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXTFIk57jIGzrBIQdAAIFRNjImtZcg");
	this.shape.setTransform(-0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.7,-124.9,182.8,249.7);
p.frameBounds = [rect];


(lib.bottom_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom5_1_img();
	this.instance.setTransform(84,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxDEzIKlvzINbg6IKHO+IoRIRItQAmg");
	this.shape.setTransform(-3.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-75.5,218.6,152.7);
p.frameBounds = [rect];


(lib.bottom_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom5_1_img();
	this.instance.setTransform(52,-56,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AngInIjetSICrlsIRJAAICJF8ImeOzg");
	this.shape.setTransform(-1.9,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.2,-66.9,140.7,132.9);
p.frameBounds = [rect];


(lib.bottom_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom4_1_img();
	this.instance.setTransform(53,-109,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("An7R/IjQ+PICsmuIQiANIDJHCIpqeug");
	this.shape.setTransform(0.2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-120.6,143.3,243.2);
p.frameBounds = [rect];


(lib.bottom_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom4_1_img();
	this.instance.setTransform(48,-114,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqnSFMACCgjfICHiQIM8g4IEKGWIldf3Ii5CvIqLAJg");
	this.shape.setTransform(2.7,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.3,-132.7,136.1,263);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom4_1_img();
	this.instance.setTransform(59,-115,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnMQPIlH9uID0msIQJgNICaETMACQAhPIiiCsItBAjg");
	this.shape.setTransform(-4.7,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-132.2,157.6,261.2);
p.frameBounds = [rect];


(lib.bottom_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom3_1_img();
	this.instance.setTransform(55,-53,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmUJ7IjhiPIhTqqIEanGINsAJIELGqIhFLoIkWBug");
	this.shape.setTransform(-0.5,-1.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.9,-66,142.7,129.1);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom3_1_img();
	this.instance.setTransform(77,-64,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApJLdIlrlrIIpwmINJg3IH3SOIkFFJg");
	this.shape.setTransform(-2,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.9,-76.8,189.9,149.8);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom3_1_img();
	this.instance.setTransform(149,-137,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ar4UYItEtIIgKmZIN40TIVXkfIFtHqIJRdPIqyIlIn6CZg");
	this.shape.setTransform(0.1,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160.7,-156,321.5,306.5);
p.frameBounds = [rect];


(lib.bottom_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom2_1_img();
	this.instance.setTransform(52,-112,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfUTMAAAgolIY/AAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-130,160,260);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom2_1_img();
	this.instance.setTransform(41,-25,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApOClIAIokINdgxIE4FzIl1Hug");
	this.shape.setTransform(3.1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-42,118.2,86.8);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom2_1_img();
	this.instance.setTransform(113,-58,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnXLPIo5j/IlBs6IMMluIRbAAILhDkIBbHeImOIcIo4DSg");
	this.shape.setTransform(-0.8,-3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.1,-75.9,272.5,145.8);
p.frameBounds = [rect];


(lib.bottom_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom1_1_img();
	this.instance.setTransform(51,-102,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsThMAAAgnBIXZAAMAAAAnBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-125,150,250);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom1_1_img();
	this.instance.setTransform(-71,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDODIAA8GIcHAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom1_1_img();
	this.instance.setTransform(65,-122,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqsS/MgCHghQIDImzIO/gMICJBwMAFXAiQImAFPImdBSg");
	this.shape.setTransform(-1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,-136.5,164.1,272.2);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-210,-90);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-210,-90);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-210,-90);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-210,-90);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-210,-90);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-210,-90);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-210,-90);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-210,-90);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-210,-90);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-210,-90);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-210,-90);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-210,-90);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-210,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-90,420,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pointer_1_img();
	this.instance.setTransform(-110,-60);

	this.instance_1 = new lib.pointer_2_img();
	this.instance_1.setTransform(-110,-60);

	this.instance_2 = new lib.pointer_3_img();
	this.instance_2.setTransform(-110,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.body_nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_1_3_img();
	this.instance.setTransform(-60,-60);

	this.instance_1 = new lib.nav_2_3_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.nav_3_3_img();
	this.instance_2.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.body_nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-60,-60);

	this.instance_1 = new lib.nav_2_2_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.nav_3_2_img();
	this.instance_2.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.animation_for_pointer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_pointer_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessory_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_glass3_1_img();
	this.instance.setTransform(-75,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDGPIAAsdIcHAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glass3_1_img();
	this.instance.setTransform(-76,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmFeIAAq7IfNAAIAAK7g");
	this.shape.setTransform(-1,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-38.9,200,70.1);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glass3_1_img();
	this.instance.setTransform(-70,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1jLIdrjjIAAKhI7/C8g");
	this.shape.setTransform(-2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-42,190,86.4);
p.frameBounds = [rect];


(lib.accessory_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_glass2_1_img();
	this.instance.setTransform(-76.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDH0IAAvnIcHAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-50,180,100);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glass2_1_img();
	this.instance.setTransform(-83,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvnGQIAAseIfPAAIAAMeg");
	this.shape.setTransform(0,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-41.9,200,80);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glass2_1_img();
	this.instance.setTransform(-78,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKjMMAhxgEBIAjMlMghcAB2g");
	this.shape.setTransform(1.7,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.2,-39.3,219.8,92.5);
p.frameBounds = [rect];


(lib.accessory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_glass1_1_img();
	this.instance.setTransform(-81.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDGPIAAsdIcHAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glass1_1_img();
	this.instance.setTransform(-91,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKH0IAAvnMAiVAAAIAAPng");
	this.shape.setTransform(0,-11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-61,220,100);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glass1_1_img();
	this.instance.setTransform(-83,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvAk/Id1jwIAMN8I92Djg");
	this.shape.setTransform(-5.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-55.9,192.4,112.2);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
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


(lib.photoflash_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photoflash_2_img();
	this.instance.setTransform(-245,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
p.frameBounds = [rect];


(lib.photoflash_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photoflash_1_img();
	this.instance.setTransform(-245,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
p.frameBounds = [rect];


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
	this.instance.setTransform(-26,-26,0.813,0.813);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-26,-26,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect, rect];


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

	// animation
	this.instance = new lib.next_1_1_img();
	this.instance.setTransform(-95,-95);

	this.instance_1 = new lib.next_2_1_img();
	this.instance_1.setTransform(-95,-95);

	this.instance_2 = new lib.next_3_1_img();
	this.instance_2.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


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
	this.instance.setTransform(-170,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4CGPQihABAAigIAAnfQAAigChABMAwFAAAQChgBAACgIAAHfQAACgihgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-50,340,100);
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


(lib.body_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_large_buttons_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.bg_next_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.next_1_2_img();
	this.instance.setTransform(-95,-95);

	this.instance_1 = new lib.next_2_2_img();
	this.instance_1.setTransform(-95,-95);

	this.instance_2 = new lib.next_3_2_img();
	this.instance_2.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


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
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(220));

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
p.nominalBounds = rect = new cjs.Rectangle(-210,-90,420,180);
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


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.set_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_set_6_img();
	this.instance.setTransform(-33,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_set_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.set_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_set_5_img();
	this.instance.setTransform(-32,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_set_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.set_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_set_4_img();
	this.instance.setTransform(-34,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_set_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.set_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_set_3_img();
	this.instance.setTransform(-35,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_set_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.set_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_set_2_img();
	this.instance.setTransform(-28,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_set_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag9GbQgTgIgMgRIAAgBQgLgPgJgSQgJgSgCgXQgBgRgFgGQgHgFgQAAIguADIglADQgFABgDgDQgDgCgBgEIgCAAIAAADQgBAEgEACQgEACgDgBQgSgGgSAEQgUAEgTABQgXABgTgVIAAAAIgbgfQgNgQgHgWQgIgXAEgWQADgUABgTIABgqQAAgEAEgDQACgCAEAAIAAgDIgEgBQgEgCgBgEQgJgdAJgXQAHgOgFgPIgJgiQgEgRAGgZQAFgWgBgUQAAgXACgVQADgXAKgTIAAAAQALgSALgOIABAAQANgPAZgEIAAAAQATgDAQgHQADgCAEABQAEACACAEIABAFIACAAIAAgBQAAgEAEgDQADgDAEABQATACAPgDIABAAQASgEAZAGQAWAGAWABQASABAJgEIAAgBQAHgFAEgHIABgBQAEgJADgVQADgaATgUQAPgQAGgNIAAAAQADgKAWgDQAEgBADADQADACABADIADAAQgBgEACgDQADgDAEgBQAcgFAPAWQAKAQANAHIAAAAQAOAJAVAJQAZAKALATQAJANAUAPQADACABAEQABAEgCAEIgCABIACACIACgCQADgDAFAAQAEABACADQALAOAPAPQAPAOASAJQAWALAOAOIAaAaIABAAQAMANAPALQARANAMAPQALANARAMQATAOAOAPIAaAeQADADgBAEQAAAEgDADIgDACIABACIADgBQAEAAADADQADADAAAEIABAlIAAAAQABAfgTAQIAAAAIgeAbIgcAbIgYAZIgdAeIAAABQgUAUgVAFQgEABgEgCIgBgBIgCABIABAEQABAEgCADQgCAEgEABQgRAFgIAMIAAAAQgKASgRAPIAAAAQgPAOgSAMIAAABQgRAMgQAPQgRAQgNAKIgcAYQgDACgEAAQgEAAgDgDIAAAAIgCACIAAAAQADAEgBAEQAAAEgEACIgeAWQgRALgXACIgJABQgTAAgPgIgAh2EQIACACIAFAFIAAgIgAh+kJIAPABIAAgQQgGAJgJAGg");

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


(lib.nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_nav_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.hero3_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_top1_mc();
	this.instance.setTransform(-0.9,-1.8);

	this.instance_1 = new lib.hero3_top2_mc();
	this.instance_1.setTransform(-19.4,-53.5);

	this.instance_2 = new lib.hero3_top3_mc();
	this.instance_2.setTransform(-20.4,-58.6);

	this.instance_3 = new lib.hero3_top4_mc();
	this.instance_3.setTransform(-21.5,-49);

	this.instance_4 = new lib.hero3_top5_mc();
	this.instance_4.setTransform(-17.5,-55);

	this.instance_5 = new lib.hero3_top6_mc();
	this.instance_5.setTransform(-24.5,-46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.4,-104.1,225,208);
p.frameBounds = [rect, new cjs.Rectangle(-98.6,-109.7,158,113), new cjs.Rectangle(-100.1,-119.2,159,121), new cjs.Rectangle(-102.7,-107.7,162,118), new cjs.Rectangle(-98.7,-116.2,162,123), new cjs.Rectangle(-85.2,-83.7,121,75), null];


(lib.hero3_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_shoes1_mc();

	this.instance_1 = new lib.hero3_shoes2_mc();
	this.instance_1.setTransform(-0.4,-8.7);

	this.instance_2 = new lib.hero3_shoes3_mc();
	this.instance_2.setTransform(-1.1,-7.7);

	this.instance_3 = new lib.hero3_shoes4_mc();
	this.instance_3.setTransform(0,-14.3);

	this.instance_4 = new lib.hero3_shoes5_mc();
	this.instance_4.setTransform(-0.8,-0.2);

	this.instance_5 = new lib.hero3_shoes6_mc();
	this.instance_5.setTransform(-0.8,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.9,-17.7,66,36);
p.frameBounds = [rect, new cjs.Rectangle(-32.7,-36,65,55), new cjs.Rectangle(-33.5,-32.7,65,50), new cjs.Rectangle(-32.2,-50.5,65,72), rect=new cjs.Rectangle(-32.5,-15.9,63,31), rect, null];


(lib.hero3_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_hair2_mc();
	this.instance.setTransform(12.7,209.1);

	this.instance_1 = new lib.hero3_hair3_mc();
	this.instance_1.setTransform(-13,124.4);

	this.instance_2 = new lib.hero3_hair4_mc();
	this.instance_2.setTransform(-4,189.4);

	this.instance_3 = new lib.hero3_hair5_mc();
	this.instance_3.setTransform(-5,163.4);

	this.instance_4 = new lib.hero3_hair6_mc();
	this.instance_4.setTransform(2.8,141.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-258.4,-9.7,542,438), new cjs.Rectangle(-168.7,-22.7,325,294), new cjs.Rectangle(-150.7,-24.7,294,428), new cjs.Rectangle(-135.7,-41.7,262,410), new cjs.Rectangle(-122.7,-30.9,251,345)];


(lib.hero3_glass_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_glass1_mc();
	this.instance.setTransform(182.2,10.1);

	this.instance_1 = new lib.hero3_glass2_mc();
	this.instance_1.setTransform(183.9,2.3);

	this.instance_2 = new lib.hero3_glass3_mc();
	this.instance_2.setTransform(184.5,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(100.7,-16.7,163,54);
p.frameBounds = [rect, new cjs.Rectangle(107.2,-40.2,153,85), new cjs.Rectangle(109.5,-33.3,150,61), null];


(lib.hero3_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_fringe1_mc();
	this.instance.setTransform(0,0.7,1,1,0,0,0,0,0.7);

	this.instance_1 = new lib.hero3_fringe2_mc();
	this.instance_1.setTransform(-2.5,113.5);

	this.instance_2 = new lib.hero3_fringe3_mc();
	this.instance_2.setTransform(-23.7,73.9);

	this.instance_3 = new lib.hero3_fringe4_mc();
	this.instance_3.setTransform(-3.9,41.9);

	this.instance_4 = new lib.hero3_fringe5_mc();
	this.instance_4.setTransform(-0.7,81);

	this.instance_5 = new lib.hero3_fringe6_mc();
	this.instance_5.setTransform(-4.8,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.2,-91.8,273,185);
p.frameBounds = [rect, new cjs.Rectangle(-101.7,-39.7,199,307), new cjs.Rectangle(-158.7,-52.7,270,253), new cjs.Rectangle(-96.3,-65.4,185,215), new cjs.Rectangle(-86.2,-57.7,171,278), new cjs.Rectangle(-108.7,-57.7,208,135)];


(lib.hero3_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_dress_1_mc();
	this.instance.setTransform(253.2,11.8);

	this.instance_1 = new lib.hero3_dress_2_mc();
	this.instance_1.setTransform(260.4,13.8);

	this.instance_2 = new lib.hero3_dress_3_mc();
	this.instance_2.setTransform(264.5,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(173.3,-85.7,168,195);
p.frameBounds = [rect, new cjs.Rectangle(176.2,-81.2,190,202), new cjs.Rectangle(166.3,-78.2,196,193), null];


(lib.hero3_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_bottom1_mc();

	this.instance_1 = new lib.hero3_bottom2_mc();
	this.instance_1.setTransform(0.2,4.9);

	this.instance_2 = new lib.hero3_bottom3_mc();
	this.instance_2.setTransform(2,-60.7);

	this.instance_3 = new lib.hero3_bottom4_mc();
	this.instance_3.setTransform(-0.9,1.3);

	this.instance_4 = new lib.hero3_bottom5_mc();
	this.instance_4.setTransform(1.4,2);

	this.instance_5 = new lib.hero3_bottom6_mc();
	this.instance_5.setTransform(1.4,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.2,-101.5,102,203);
p.frameBounds = [rect, new cjs.Rectangle(-52.2,-106.7,105,223), new cjs.Rectangle(-53.2,-113.2,110,105), new cjs.Rectangle(-53.7,-107.7,106,218), new cjs.Rectangle(-75.3,-111.2,153,227), new cjs.Rectangle(-51.2,-106.7,105,226), null];


(lib.hero2_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_top1_mc();

	this.instance_1 = new lib.hero2_top2_mc();
	this.instance_1.setTransform(11.2,-20.5);

	this.instance_2 = new lib.hero2_top3_mc();
	this.instance_2.setTransform(-1.5,-17.5);

	this.instance_3 = new lib.hero2_top4_mc();
	this.instance_3.setTransform(19.2,-28.5);

	this.instance_4 = new lib.hero2_top5_mc();
	this.instance_4.setTransform(-0.3,-7.2);

	this.instance_5 = new lib.hero2_top6_mc();
	this.instance_5.setTransform(6.2,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-65,117,130);
p.frameBounds = [rect, new cjs.Rectangle(-30.2,-63.7,83,87), new cjs.Rectangle(-38.2,-63.2,74,92), new cjs.Rectangle(-24.7,-63.8,88,71), new cjs.Rectangle(-55.2,-63.2,110,112), new cjs.Rectangle(-41.7,-70.7,96,121), null];


(lib.hero2_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shoes1_mc();

	this.instance_1 = new lib.hero2_shoes2_mc();
	this.instance_1.setTransform(4.5,0.3);

	this.instance_2 = new lib.hero2_shoes3_mc();
	this.instance_2.setTransform(12.3,24.3);

	this.instance_3 = new lib.hero2_shoes4_mc();
	this.instance_3.setTransform(12.9,30.5);

	this.instance_4 = new lib.hero2_shoes5_mc();
	this.instance_4.setTransform(16.6,32.4);

	this.instance_5 = new lib.hero2_shoes6_mc();
	this.instance_5.setTransform(10.8,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-75.2,102,151);
p.frameBounds = [rect, new cjs.Rectangle(-45.2,-71.5,100,144), new cjs.Rectangle(-33.7,-27.2,92,103), new cjs.Rectangle(-28.2,-11.2,82,84), new cjs.Rectangle(-27,-7.2,87,79), new cjs.Rectangle(-27,-16,76,87), null];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_mc();
	this.instance.setTransform(-3,132.8);

	this.instance_1 = new lib.hero2_hair3_mc();
	this.instance_1.setTransform(-4.5,156.9);

	this.instance_2 = new lib.hero2_hair4_mc();
	this.instance_2.setTransform(8.5,120.9);

	this.instance_3 = new lib.hero2_hair5_mc();
	this.instance_3.setTransform(6.7,49.3);

	this.instance_4 = new lib.hero2_hair6_mc();
	this.instance_4.setTransform(4,68.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.2,-7.3,268,280);
p.frameBounds = [rect, null, new cjs.Rectangle(-148.7,-67.7,289,453), new cjs.Rectangle(-196.7,-124.7,411,491), new cjs.Rectangle(-173.3,-109.2,360,332), new cjs.Rectangle(-98.7,-66.7,206,270)];


(lib.hero2_glass_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_glass1_mc();

	this.instance_1 = new lib.hero2_glass2_mc();
	this.instance_1.setTransform(0.3,8.7);

	this.instance_2 = new lib.hero2_glass3_mc();
	this.instance_2.setTransform(-1.9,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.1,-37.2,182,74);
p.frameBounds = [rect, new cjs.Rectangle(-81.7,-18,164,54), new cjs.Rectangle(-75.9,-13.5,148,43), null];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_mc();

	this.instance_1 = new lib.hero2_fringe2_mc();
	this.instance_1.setTransform(4.5,-24.5);

	this.instance_2 = new lib.hero2_fringe3_mc();
	this.instance_2.setTransform(7.8,-47.5);

	this.instance_3 = new lib.hero2_fringe4_mc();
	this.instance_3.setTransform(3.8,-42.7);

	this.instance_4 = new lib.hero2_fringe5_mc();
	this.instance_4.setTransform(4.7,57);

	this.instance_5 = new lib.hero2_fringe6_mc();
	this.instance_5.setTransform(-8.4,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-94.3,181,189);
p.frameBounds = [rect, new cjs.Rectangle(-99.2,-127.2,207,205), new cjs.Rectangle(-88.1,-111.7,192,129), new cjs.Rectangle(-82.1,-106.7,172,128), new cjs.Rectangle(-104.2,-93.8,218,302), new cjs.Rectangle(-106.1,-102.2,195,218)];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A0DSMMAAAgkYMAhuAAAIAANqIGZAAIAAWugAGxkAQgBAYAIA3QAABUAeBZQAeBYAFA8QAFA8g0AaQgzAahOAfIAiAxQAbAqAWAwQAogiBNg5QBbhNAAhDQAAgFgKguQgKgtAAglQAAgTARi9IANiMIi8AAQgIARgBARg");
	var mask_graphics_1 = new cjs.Graphics().p("A0DSMMAAAgkYMAhuAAAIAANqIGZAAIAAWugAF3GJIAAAGQgFAJgqA+QgbAogEAkIACACIAKgDQAKgDAxg9QAxg+AVgOQAkgeA3goQBbhNAAhDQAAgFgKguQgKgtAAglQAAgTARi9IANiMIi8AAQgIARgBARQgBAYAIA3QAABUAeBZQAeBYAFA8QAFA8g0AaQgbAOgiAPIgJAEIgUAIQgOAEgRACQgPACg8AAQgCALAJAJQADADANAHQgjAPgQAtIgYBoIAABBIAMAAQAIgGA+hHQA/hEASAAIACAAg");
	var mask_graphics_2 = new cjs.Graphics().p("Az8TmMAAAgnMMAjbAAAQgOIUAPIKIEdAAIAAWugAFvHjIAAAGQgEAJgrA+QgaAogEAkIABACIALgDQAKgDAxg9QAxg+AVgOQAkgeA3goQBahNAAhDQAAgFgKguQgKgtAAglQAAgTASi9IAKhyIgNANQgoAmgtgEQgHAOgmAMIglAJQgDAAgGgDIABAIQAABUAeBXQAeBaAFA8QAFA8gzAaQgbAOgjAPIgJAEIgTAIQgOAEgSACQgPACg7AAQgDALAJAJQADADANAHQgjAPgQAtIgYBoIAABBIANAAQAHgGA/hHQA/hEASAAIABAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:208,y:33.4}).wait(1).to({graphics:mask_graphics_1,x:208,y:33.4}).wait(1).to({graphics:mask_graphics_2,x:208.7,y:24.4}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero2_dress1_mc();
	this.instance.setTransform(217.8,32.5);

	this.instance_1 = new lib.hero2_dress2_mc();
	this.instance_1.setTransform(220.2,36);

	this.instance_2 = new lib.hero2_dress3_mc();
	this.instance_2.setTransform(226.2,8.4);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(100.3,-76.2,235,218);
p.frameBounds = [rect, new cjs.Rectangle(115.8,-65.7,209,204), new cjs.Rectangle(152.3,-85,148,187), null];


(lib.hero2_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bottom1_mc();

	this.instance_1 = new lib.hero2_bottom2_mc();
	this.instance_1.setTransform(11.5,-28.1);

	this.instance_2 = new lib.hero2_bottom3_mc();
	this.instance_2.setTransform(12.5,5.4);

	this.instance_3 = new lib.hero2_bottom4_mc();
	this.instance_3.setTransform(15.7,61.2);

	this.instance_4 = new lib.hero2_bottom5_mc();
	this.instance_4.setTransform(12.9,2.2);

	this.instance_5 = new lib.hero2_bottom6_mc();
	this.instance_5.setTransform(10.5,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-60.3,142,121);
p.frameBounds = [rect, new cjs.Rectangle(-29.7,-53,82,50), new cjs.Rectangle(-64.7,-58.4,154,128), new cjs.Rectangle(-32.2,-53,96,228), new cjs.Rectangle(-71.3,-60,168,124), new cjs.Rectangle(-30.7,-66,82,93), null];


(lib.hero1_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_top1_mc();

	this.instance_1 = new lib.hero1_top2_mc();
	this.instance_1.setTransform(11,1);

	this.instance_2 = new lib.hero1_top3_mc();
	this.instance_2.setTransform(14.7,-7);

	this.instance_3 = new lib.hero1_top4_mc();
	this.instance_3.setTransform(2.2,4);

	this.instance_4 = new lib.hero1_top5_mc();
	this.instance_4.setTransform(2.2,5.8);

	this.instance_5 = new lib.hero1_top6_mc();
	this.instance_5.setTransform(6.7,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.9,-51.5,138,103);
p.frameBounds = [rect, new cjs.Rectangle(-42.7,-45.2,107,93), new cjs.Rectangle(-30.7,-47.7,91,82), new cjs.Rectangle(-70.2,-50.2,145,109), new cjs.Rectangle(-70.7,-50.2,146,112), new cjs.Rectangle(-54.2,-50.2,122,91), null];


(lib.hero1_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shoes1_mc();

	this.instance_1 = new lib.hero1_shoes2_mc();
	this.instance_1.setTransform(0.7,-8.2);

	this.instance_2 = new lib.hero1_shoes3_mc();
	this.instance_2.setTransform(7.5,-43.7);

	this.instance_3 = new lib.hero1_shoes4_mc();
	this.instance_3.setTransform(-1,-7.5);

	this.instance_4 = new lib.hero1_shoes5_mc();
	this.instance_4.setTransform(0.7,0.5);

	this.instance_5 = new lib.hero1_shoes6_mc();
	this.instance_5.setTransform(0.9,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.2,-32.7,102,66);
p.frameBounds = [rect, new cjs.Rectangle(-49.1,-56.2,100,96), new cjs.Rectangle(-48.7,-128.7,112,170), new cjs.Rectangle(-53.7,-56.7,105,99), new cjs.Rectangle(-49.7,-32.2,101,66), new cjs.Rectangle(-50.8,-66.7,103,112), null];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_mc();
	this.instance.setTransform(4,40);

	this.instance_1 = new lib.hero1_hair2_mc();
	this.instance_1.setTransform(3.6,96.3);

	this.instance_2 = new lib.hero1_hair3_mc();
	this.instance_2.setTransform(-55.5,118.4);

	this.instance_3 = new lib.hero1_hair4_mc();
	this.instance_3.setTransform(-7.4,140);

	this.instance_4 = new lib.ero1_hair5_mc();
	this.instance_4.setTransform(5.5,149.4);

	this.instance_5 = new lib.ero1_hair6_mc();
	this.instance_5.setTransform(-21.5,100.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.2,-67.6,246,215);
p.frameBounds = [rect, new cjs.Rectangle(-156.5,-109.7,320,412), new cjs.Rectangle(-125.7,-134.7,141,506), new cjs.Rectangle(-169.7,-113.7,325,508), new cjs.Rectangle(-117.7,-67.7,247,434), new cjs.Rectangle(-153.7,-127.7,265,457)];


(lib.hero1_glass_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glass1_mc();
	this.instance.setTransform(0,-24);

	this.instance_1 = new lib.hero1_glass2_mc();
	this.instance_1.setTransform(3.9,2.8);

	this.instance_2 = new lib.hero1_glass3_mc();
	this.instance_2.setTransform(4.4,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.6,-37.2,155,74);
p.frameBounds = [rect, new cjs.Rectangle(-73.3,-26.7,154,59), new cjs.Rectangle(-64.7,-20,138,55), null];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_mc();

	this.instance_1 = new lib.hero1_fringe2_mc();
	this.instance_1.setTransform(-1.4,11.3);

	this.instance_2 = new lib.hero1_fringe3_mc();
	this.instance_2.setTransform(-2.8,-25.2);

	this.instance_3 = new lib.hero1_fringe4_mc();
	this.instance_3.setTransform(1.8,28.5);

	this.instance_4 = new lib.hero1_fringe5_mc();
	this.instance_4.setTransform(26.8,17.3);

	this.instance_5 = new lib.hero1_fringe6_mc();
	this.instance_5.setTransform(-2.2,-26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.6,-107,195,214);
p.frameBounds = [rect, new cjs.Rectangle(-97.1,-98.2,191,219), new cjs.Rectangle(-86.2,-85.7,167,121), new cjs.Rectangle(-89.1,-79.7,182,217), new cjs.Rectangle(-89.7,-100.2,233,235), new cjs.Rectangle(-100.2,-85.7,196,119)];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_mc();
	this.instance.setTransform(216.5,35.8);

	this.instance_1 = new lib.hero1_dress2_mc();
	this.instance_1.setTransform(213.4,74);

	this.instance_2 = new lib.hero1_dress3_mc();
	this.instance_2.setTransform(202.2,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(99.3,-90.7,235,253);
p.frameBounds = [rect, new cjs.Rectangle(81.3,-89.2,264,327), new cjs.Rectangle(123.8,-92.7,157,184), null];


(lib.hero1_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_bottom1_mc();

	this.instance_1 = new lib.hero1_bottom2_mc();
	this.instance_1.setTransform(14,-67.4);

	this.instance_2 = new lib.hero1_bottom3_mc();
	this.instance_2.setTransform(19,1.8);

	this.instance_3 = new lib.hero1_bottom4_mc();
	this.instance_3.setTransform(6.2,-3.5);

	this.instance_4 = new lib.hero1_bottom5_mc();
	this.instance_4.setTransform(10.6,-58.6);

	this.instance_5 = new lib.hero1_bottom6_mc();
	this.instance_5.setTransform(10,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-121.2,131,243);
p.frameBounds = [rect, new cjs.Rectangle(-99.7,-125.7,227,116), new cjs.Rectangle(-129.7,-135.2,298,274), new cjs.Rectangle(-53.2,-117.7,119,229), new cjs.Rectangle(-42,-113.9,105,111), new cjs.Rectangle(-52.2,-121.7,124,220), null];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero3_glass_all_mc();
	this.accessory.setTransform(-1.5,-102.3,1,1,0,0,0,184.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero3_fringe_all_mc();
	this.fringe.setTransform(0,-197.7,1,1,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero3_lips1_mc();
	this.instance.setTransform(-0.1,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero3_eyes1_mc();
	this.instance_1.setTransform(-2.1,-116.6,1,1,-2.3,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero3_head1_mc();
	this.instance_2.setTransform(-3.3,-141.1,1,1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dress
	this.dress = new lib.hero3_dress_all_mc();
	this.dress.setTransform(-3,33.2,1,1,0,0,0,263,13);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero3_top_all_mc();
	this.top.setTransform(5.3,56.5);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero3_bottom_all_mc();
	this.bottom.setTransform(-1,143.8);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero3_shoes_all_mc();
	this.shoes.setTransform(-0.1,279.5);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_3 = new lib.hero_3_body_1_mc();
	this.instance_3.setTransform(-31.2,105.9,1,1,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hair
	this.hair = new lib.hero3_hair_all_mc();
	this.hair.setTransform(0,-197.7,1,1,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.2,-290.3,273,588.1);
p.frameBounds = [rect];


(lib.hero_3_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_glass1_mc();
	this.instance.setTransform(-3.8,-102.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero3_fringe1_mc();
	this.instance_1.setTransform(0,-197.8,1,1,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero3_lips1_mc();
	this.instance_2.setTransform(-0.1,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero3_eyes1_mc();
	this.instance_3.setTransform(-2.1,-116.6,1,1,-2.3,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero3_head1_mc();
	this.instance_4.setTransform(-3.3,-141.1,1,1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero3_top1_mc();
	this.instance_5.setTransform(4.3,54.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero3_bottom1_mc();
	this.instance_6.setTransform(-1,143.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero3_shoes1_mc();
	this.instance_7.setTransform(-0.1,279.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero_3_body_1_mc();
	this.instance_8.setTransform(-31.2,105.9,1,1,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.2,-290.3,273,588.1);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero2_glass_all_mc();
	this.accessory.setTransform(5.7,-162.7);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(2.8,-181.1);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero2_eyes1_mc();
	this.instance.setTransform(5.5,-159.7,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero2_lips1_mc();
	this.instance_1.setTransform(4.4,-123.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero2_head1_mc();
	this.instance_2.setTransform(5.3,-184.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(8,-5.9,1,1,0,0,0,227,31.4);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero2_top_all_mc();
	this.top.setTransform(0.3,-40);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero2_bottom_all_mc();
	this.bottom.setTransform(-11.7,34.3);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero2_shoes_all_mc();
	this.shoes.setTransform(24.3,200.3);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_3 = new lib.hero_2_body_1_mc();
	this.instance_3.setTransform(-13.2,69.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(2.8,-181.1);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.5,-275.5,273.1,551.5);
p.frameBounds = [rect];


(lib.hero_2_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0DSMMAAAgkYMAhuAAAIAANqIGZAAIAAWugAGxkAQgBAYAIA3QAABUAeBZQAeBYAFA8QAFA8g0AaQgzAahOAfIAiAxQAbAqAWAwQAogiBNg5QBbhNAAhDQAAgFgKguQgKgtAAglQAAgTARi9IANiMIi8AAQgIARgBARg");
	mask.setTransform(208,33.4);

	// Слой 2
	this.instance = new lib.hero2_dress1_mc();
	this.instance.setTransform(217.8,32.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(100.3,-76.2,235,218);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero1_glass_all_mc();
	this.accessory.setTransform(-4,-137.6,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-3.7,-173.7);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero1_lips1_mc();
	this.instance.setTransform(1,-102.3,1,1,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyes1_mc();
	this.instance_1.setTransform(-1.4,-139.4,1,1,-7,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero1_head1_mc();
	this.instance_2.setTransform(-4.6,-163.7,1,1,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(20.5,43.9,1,1,0,0,0,231,38);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero1_top_all_mc();
	this.top.setTransform(-20.3,-38.7);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero1_bottom_all_mc();
	this.bottom.setTransform(-4.7,120);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero1_shoes_all_mc();
	this.shoes.setTransform(-22.9,254.5);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_3 = new lib.hero1_body_1_mc();
	this.instance_3.setTransform(-11.2,87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-3.7,-173.7);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.9,-280.7,246.7,568.5);
p.frameBounds = [rect];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glass2_mc();
	this.instance.setTransform(-0.9,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_fringe1_mc();
	this.instance_1.setTransform(-3.7,-173.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero1_lips1_mc();
	this.instance_2.setTransform(1,-102.3,1,1,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero1_eyes1_mc();
	this.instance_3.setTransform(-1.4,-139.4,1,1,-7,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero1_head1_mc();
	this.instance_4.setTransform(-4.6,-163.7,1,1,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero1_top1_mc();
	this.instance_5.setTransform(-20.3,-38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero1_bottom1_mc();
	this.instance_6.setTransform(-4.7,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero1_shoes1_mc();
	this.instance_7.setTransform(-22.9,254.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero1_body_1_mc();
	this.instance_8.setTransform(-11.2,87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero1_hair1_mc();
	this.instance_9.setTransform(0.3,-133.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.9,-280.7,246,568.5);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


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


(lib.check_1_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.body_animation_circle_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle_nav_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({scaleX:2.5,scaleY:2.5,alpha:0.102},20).to({_off:true},1).wait(20));

	// animation
	this.instance_1 = new lib.circle_nav_mc();
	this.instance_1.alpha = 0.801;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({scaleX:2.5,scaleY:2.5,alpha:0.102},20).to({_off:true},1).wait(10));

	// animation
	this.instance_2 = new lib.circle_nav_mc();
	this.instance_2.alpha = 0.801;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({scaleX:2.5,scaleY:2.5,alpha:0.102},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-41.5,86.6,83.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-46.6,-44.6,93.2,89.3), new cjs.Rectangle(-49.8,-47.7,99.6,95.5), new cjs.Rectangle(-53,-50.8,106.1,101.7), new cjs.Rectangle(-56.3,-53.9,112.6,108), new cjs.Rectangle(-59.5,-57,119.1,114.2), new cjs.Rectangle(-62.8,-60.1,125.6,120.5), new cjs.Rectangle(-66,-63.2,132.1,126.7), new cjs.Rectangle(-69.3,-66.3,138.6,132.9), new cjs.Rectangle(-72.5,-69.5,145.1,139.2), new cjs.Rectangle(-75.8,-72.6,151.6,145.4), new cjs.Rectangle(-79,-75.7,158.1,151.6), new cjs.Rectangle(-82.3,-78.8,164.6,157.8), new cjs.Rectangle(-85.5,-81.9,171.1,164), new cjs.Rectangle(-88.8,-85,177.6,170.2), new cjs.Rectangle(-92,-88.1,184.1,176.5), new cjs.Rectangle(-95.3,-91.2,190.6,182.7), new cjs.Rectangle(-98.5,-94.3,197.1,188.9), new cjs.Rectangle(-101.8,-97.5,203.6,195.2), new cjs.Rectangle(-105,-100.6,210.1,201.4), new cjs.Rectangle(-108.2,-103.7,216.5,207.6), new cjs.Rectangle(-79,-75.7,158.1,151.6), new cjs.Rectangle(-82.3,-78.8,164.6,157.8), new cjs.Rectangle(-85.5,-81.9,171.1,164), new cjs.Rectangle(-88.8,-85,177.6,170.2), new cjs.Rectangle(-92,-88.1,184.1,176.5), new cjs.Rectangle(-95.3,-91.2,190.6,182.7), new cjs.Rectangle(-98.5,-94.3,197.1,188.9), new cjs.Rectangle(-101.8,-97.5,203.6,195.2), new cjs.Rectangle(-105,-100.6,210.1,201.4), new cjs.Rectangle(-108.2,-103.7,216.5,207.6), new cjs.Rectangle(-79,-75.7,158.1,151.6), new cjs.Rectangle(-82.3,-78.8,164.6,157.8), new cjs.Rectangle(-85.5,-81.9,171.1,164), new cjs.Rectangle(-88.8,-85,177.6,170.2), new cjs.Rectangle(-92,-88.1,184.1,176.5), new cjs.Rectangle(-95.3,-91.2,190.6,182.7), new cjs.Rectangle(-98.5,-94.3,197.1,188.9), new cjs.Rectangle(-101.8,-97.5,203.6,195.2), new cjs.Rectangle(-105,-100.6,210.1,201.4), new cjs.Rectangle(-108.2,-103.7,216.5,207.6)];


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


(lib.animation_circle_nav_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.body_animation_circle_nav_mc();
	this.instance.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-36.9,77,73.8);
p.frameBounds = [rect];


(lib.animation_check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.check_1_0_mc();
	this.instance.setTransform(0,0,0.75,0.75);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5,scaleY:0.5},0).to({scaleX:1,scaleY:1,alpha:1},8).to({scaleX:0.75,scaleY:0.75},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-33.7,-33.7,67.5,67.5), new cjs.Rectangle(-37.5,-37.5,75,75), new cjs.Rectangle(-41.2,-41.2,82.5,82.5), new cjs.Rectangle(-45,-45,90,90), new cjs.Rectangle(-48.7,-48.7,97.5,97.5), new cjs.Rectangle(-52.5,-52.5,105,105), new cjs.Rectangle(-56.2,-56.2,112.5,112.5), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-56.9,-56.9,114,114), new cjs.Rectangle(-54,-54,108,108), new cjs.Rectangle(-51,-51,102,102), new cjs.Rectangle(-48,-48,96,96), new cjs.Rectangle(-45,-45,90,90)];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:29,end:59});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// curtain_1
	this.instance = new lib.curtain_1_mc();
	this.instance.setTransform(0,-320);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},19).to({y:5},4).to({y:0},4).wait(6).to({y:-320},26).wait(1));

	// curtain_2
	this.instance_1 = new lib.curtain_2_mc();
	this.instance_1.setTransform(0,320);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:0},19).to({y:-5},4).to({y:0},4).wait(6).to({y:320},26).wait(1));

	// bg
	this.instance_2 = new lib.curtain_3_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(14).to({_off:true},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-320,1200,1240);
p.frameBounds = [rect, new cjs.Rectangle(0,-303.1,1200,1206.3), new cjs.Rectangle(0,-286.3,1200,1172.6), new cjs.Rectangle(0,-269.4,1200,1138.9), new cjs.Rectangle(0,-252.6,1200,1105.3), new cjs.Rectangle(0,-235.8,1200,1071.6), new cjs.Rectangle(0,-218.9,1200,1037.9), new cjs.Rectangle(0,-202.1,1200,1004.2), new cjs.Rectangle(0,-185.2,1200,970.5), new cjs.Rectangle(0,-168.4,1200,936.8), new cjs.Rectangle(0,-151.6,1200,903.2), new cjs.Rectangle(0,-134.7,1200,869.5), new cjs.Rectangle(0,-117.9,1200,835.8), new cjs.Rectangle(0,-101,1200,802.1), new cjs.Rectangle(0,-84.2,1200,768.4), new cjs.Rectangle(0,-67.3,1200,734.7), new cjs.Rectangle(0,-50.5,1200,701.1), new cjs.Rectangle(0,-33.7,1200,667.4), new cjs.Rectangle(0,-16.8,1200,633.7), new cjs.Rectangle(0,0,1200,600), new cjs.Rectangle(0,-1.2,1200,602.5), new cjs.Rectangle(0,-2.5,1200,605), new cjs.Rectangle(0,-3.7,1200,607.5), new cjs.Rectangle(0,-5,1200,610), new cjs.Rectangle(0,-3.7,1200,607.5), new cjs.Rectangle(0,-2.5,1200,605), new cjs.Rectangle(0,-1.2,1200,602.5), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-12.3,1200,624.6), new cjs.Rectangle(0,-24.6,1200,649.2), new cjs.Rectangle(0,-36.9,1200,673.8), new cjs.Rectangle(0,-49.2,1200,698.5), new cjs.Rectangle(0,-61.5,1200,723.1), new cjs.Rectangle(0,-73.8,1200,747.7), new cjs.Rectangle(0,-86.1,1200,772.3), new cjs.Rectangle(0,-98.4,1200,796.9), new cjs.Rectangle(0,-110.7,1200,821.5), new cjs.Rectangle(0,-123.1,1200,846.2), new cjs.Rectangle(0,-135.4,1200,870.8), new cjs.Rectangle(0,-147.7,1200,895.4), new cjs.Rectangle(0,-160,1200,920), new cjs.Rectangle(0,-172.3,1200,944.6), new cjs.Rectangle(0,-184.6,1200,969.2), new cjs.Rectangle(0,-196.9,1200,993.8), new cjs.Rectangle(0,-209.2,1200,1018.5), new cjs.Rectangle(0,-221.5,1200,1043.1), new cjs.Rectangle(0,-233.8,1200,1067.7), new cjs.Rectangle(0,-246.1,1200,1092.3), new cjs.Rectangle(0,-258.4,1200,1116.9), new cjs.Rectangle(0,-270.7,1200,1141.5), new cjs.Rectangle(0,-283.1,1200,1166.2), new cjs.Rectangle(0,-295.4,1200,1190.8), new cjs.Rectangle(0,-307.7,1200,1215.4), new cjs.Rectangle(0,-320,1200,1240)];


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
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));

	// animation
	this.instance = new lib.photoflash_5_mc();
	this.instance.setTransform(0,0,0.75,0.75);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.photoflash_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.75,scaleY:0.75,alpha:0.301}}]}).to({state:[{t:this.instance,p:{scaleX:0.875,scaleY:0.875,alpha:0.602}}]},2).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.875,scaleY:0.875,alpha:0.602}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.75,scaleY:0.75,alpha:0.301}}]},2).to({state:[]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183.7,-183.7,367.5,367.5);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-214.3,-214.3,428.8,428.8), rect, rect=new cjs.Rectangle(-245,-245,490,490), rect, rect, rect, rect=new cjs.Rectangle(-214.3,-214.3,428.8,428.8), rect, rect=new cjs.Rectangle(-183.7,-183.7,367.5,367.5), rect, rect=null, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,-483.7,1200,1083.8);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-483.7,1200,1083.8);
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
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.flash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


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


(lib.next_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.next_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

	// bg
	this.instance_1 = new lib.bg_next_buttons_mc();

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


(lib.bg_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.833,0.833,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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
p.nominalBounds = rect = new cjs.Rectangle(-110,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-108.6,-59.2,118.6,118.6), new cjs.Rectangle(-107.3,-58.5,117.2,117.2), new cjs.Rectangle(-106,-57.8,115.7,115.7), new cjs.Rectangle(-104.7,-57.1,114.3,114.3), new cjs.Rectangle(-103.4,-56.4,112.9,112.9), new cjs.Rectangle(-102.1,-55.7,111.5,111.5), new cjs.Rectangle(-100.8,-55,110,110), new cjs.Rectangle(-99.5,-54.2,108.6,108.6), new cjs.Rectangle(-98.2,-53.5,107.2,107.2), new cjs.Rectangle(-96.9,-52.8,105.7,105.7), new cjs.Rectangle(-95.5,-52.1,104.3,104.3), new cjs.Rectangle(-94.2,-51.4,102.9,102.9), new cjs.Rectangle(-92.9,-50.7,101.5,101.5), new cjs.Rectangle(-91.6,-50,100,100), new cjs.Rectangle(-92.8,-50.6,101.4,101.4), new cjs.Rectangle(-94.1,-51.3,102.7,102.7), new cjs.Rectangle(-95.3,-51.9,104,104), new cjs.Rectangle(-96.5,-52.6,105.4,105.4), new cjs.Rectangle(-97.7,-53.3,106.7,106.7), new cjs.Rectangle(-98.9,-53.9,108,108), new cjs.Rectangle(-100.2,-54.6,109.4,109.4), new cjs.Rectangle(-101.4,-55.3,110.7,110.7), new cjs.Rectangle(-102.6,-55.9,112,112), new cjs.Rectangle(-103.8,-56.6,113.4,113.4), new cjs.Rectangle(-105.1,-57.3,114.7,114.7), new cjs.Rectangle(-106.3,-57.9,116,116), new cjs.Rectangle(-107.5,-58.6,117.4,117.4), new cjs.Rectangle(-108.7,-59.3,118.7,118.7), new cjs.Rectangle(-110,-60,120,120)];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(-133.3,0,0.889,0.889,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.animation_circle_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.5,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_check_mc();
	this.instance.setTransform(75,75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_6_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_check_mc();
	this.instance.setTransform(75,75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_5_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_check_mc();
	this.instance.setTransform(75,75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_4_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_check_mc();
	this.instance.setTransform(75,75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_3_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_check_mc();
	this.instance.setTransform(75,75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_2_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_check_mc();
	this.instance.setTransform(75,75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


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
	this.hero_2.setTransform(400,310);

	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(200,300);

	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(600,290);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_3,p:{x:600,y:290}},{t:this.hero_1,p:{x:200}},{t:this.hero_2,p:{x:400}}]}).to({state:[{t:this.hero_1,p:{x:398}}]},1).to({state:[{t:this.hero_2,p:{x:395}}]},1).to({state:[{t:this.hero_3,p:{x:397,y:295}}]},1).to({state:[{t:this.hero_3,p:{x:200,y:290}},{t:this.hero_1,p:{x:600}},{t:this.hero_2,p:{x:395}}]},1).to({state:[{t:this.hero_2,p:{x:395}}]},1).to({state:[{t:this.hero_3,p:{x:397,y:295}}]},1).to({state:[{t:this.hero_1,p:{x:398}}]},1).to({state:[{t:this.hero_3,p:{x:600,y:290}},{t:this.hero_1,p:{x:200}},{t:this.hero_2,p:{x:400}}]},1).to({state:[{t:this.hero_3,p:{x:397,y:295}}]},1).to({state:[{t:this.hero_1,p:{x:398}}]},1).to({state:[{t:this.hero_2,p:{x:395}}]},1).wait(1));

	// bg
	this.instance = new lib.background_0_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-0.3,1200,600.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, new cjs.Rectangle(-200,-0.3,1200,600.3), rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, new cjs.Rectangle(-200,-0.3,1200,600.3), rect=new cjs.Rectangle(-200,0,1200,600), rect, rect];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe2_mc();
	this.instance.setTransform(7.3,-205.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_eyes1_mc();
	this.instance_1.setTransform(5.5,-159.7,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero2_lips1_mc();
	this.instance_2.setTransform(4.4,-123.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero2_head1_mc();
	this.instance_3.setTransform(5.3,-184.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero_2_dress_main_mc();
	this.instance_4.setTransform(8,-5.9,1,1,0,0,0,227,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero2_shoes2_mc();
	this.instance_5.setTransform(28.8,200.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero_2_body_1_mc();
	this.instance_6.setTransform(-13.2,69.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.5,-308.4,257,581.2);
p.frameBounds = [rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":139});

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,0);
	this.location_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-500,alpha:1},0).wait(23).to({y:50},15).to({y:0},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(40).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(21));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(180,0);
	this.location_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-500,alpha:1},0).wait(33).to({y:50},15).to({y:0},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(40).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect, rect=new cjs.Rectangle(-340,-660,680,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-340,-660,680,356.7), new cjs.Rectangle(-340,-660,680,393.4), new cjs.Rectangle(-340,-660,680,430), new cjs.Rectangle(-340,-660,680,466.7), new cjs.Rectangle(-340,-660,680,503.4), new cjs.Rectangle(-340,-660,680,540), new cjs.Rectangle(-340,-660,680,576.7), new cjs.Rectangle(-340,-660,680,613.4), new cjs.Rectangle(-340,-660,680,650), new cjs.Rectangle(-340,-660,680,686.7), new cjs.Rectangle(-340,-623.3,680,686.7), new cjs.Rectangle(-340,-586.6,680,686.7), new cjs.Rectangle(-340,-550,680,686.7), new cjs.Rectangle(-340,-513.3,680,686.7), new cjs.Rectangle(-340,-476.6,680,686.7), new cjs.Rectangle(-340,-440,680,640), new cjs.Rectangle(-340,-403.3,680,593.4), new cjs.Rectangle(-340,-366.6,680,546.7), new cjs.Rectangle(-340,-330,680,500), new cjs.Rectangle(-340,-293.3,680,453.4), new cjs.Rectangle(-343.9,-256.6,684,420.7), new cjs.Rectangle(-348,-220,688,388), new cjs.Rectangle(-351.9,-183.3,692,355.4), new cjs.Rectangle(-356,-176,696,352), new cjs.Rectangle(-360,-180,700,390), new cjs.Rectangle(-355.9,-175.9,695.9,376), new cjs.Rectangle(-351.9,-171.9,692,362), new cjs.Rectangle(-347.9,-167.9,687.9,348), new cjs.Rectangle(-343.9,-163.9,684,334), new cjs.Rectangle(-340,-160,680,320), new cjs.Rectangle(-340,-163.9,684,328), new cjs.Rectangle(-340,-168,688,336), new cjs.Rectangle(-340,-171.9,692,344), new cjs.Rectangle(-340,-176,696,352), new cjs.Rectangle(-340,-180,700,360), new cjs.Rectangle(-340,-175.9,696,352), new cjs.Rectangle(-340,-171.9,692,344), new cjs.Rectangle(-340,-167.9,688,336), new cjs.Rectangle(-340,-163.9,684,328), rect=new cjs.Rectangle(-340,-160,680,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-343.9,-163.9,684,328), new cjs.Rectangle(-348,-168,688,336), new cjs.Rectangle(-351.9,-171.9,692,344), new cjs.Rectangle(-356,-176,696,352), new cjs.Rectangle(-360,-180,700,360), new cjs.Rectangle(-355.9,-175.9,695.9,352), new cjs.Rectangle(-351.9,-171.9,692,344), new cjs.Rectangle(-347.9,-167.9,687.9,336), new cjs.Rectangle(-343.9,-163.9,684,328), new cjs.Rectangle(-340,-160,680,320), new cjs.Rectangle(-340,-163.9,684,357.3), new cjs.Rectangle(-340,-168,688,394.7), new cjs.Rectangle(-340,-171.9,692,432), new cjs.Rectangle(-340,-176,696,469.4), new cjs.Rectangle(-340,-180,700,506.7), new cjs.Rectangle(-340,-175.9,696,536), new cjs.Rectangle(-340,-171.9,692,565.3), new cjs.Rectangle(-340,-167.9,688,594.6), new cjs.Rectangle(-340,-163.9,684,624), new cjs.Rectangle(-340,-160,680,653.4), new cjs.Rectangle(-340,-126.6,680,653.3), new cjs.Rectangle(-340,-93.3,680,653.4), new cjs.Rectangle(-340,-60,680,653.4), new cjs.Rectangle(-340,-26.6,680,653.3), new cjs.Rectangle(-340,6.7,680,653.4), new cjs.Rectangle(-340,40,680,620), new cjs.Rectangle(-340,73.4,680,586.7), new cjs.Rectangle(-340,106.7,680,553.4), new cjs.Rectangle(-340,140,680,520), new cjs.Rectangle(-340,173.4,680,486.7), new cjs.Rectangle(-340,206.7,680,453.4), new cjs.Rectangle(-340,240,680,420), new cjs.Rectangle(-340,273.4,680,386.7), new cjs.Rectangle(-340,306.7,680,353.4), rect=new cjs.Rectangle(-340,340,680,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":189});

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(0,-100);
	this.location_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-500,alpha:1},0).wait(63).to({y:-50},15).to({y:-100},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(60).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},20).wait(6));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-220,90);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-500,alpha:1},0).wait(23).to({y:150},20).to({y:90},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(70).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(36));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(220,90);
	this.location_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-500,alpha:1},0).wait(38).to({y:150},20).to({y:90},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(65).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-260,760,510);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-660,760,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-660,760,352.5), new cjs.Rectangle(-380,-660,760,385), new cjs.Rectangle(-380,-660,760,417.5), new cjs.Rectangle(-380,-660,760,450), new cjs.Rectangle(-380,-660,760,482.5), new cjs.Rectangle(-380,-660,760,515), new cjs.Rectangle(-380,-660,760,547.5), new cjs.Rectangle(-380,-660,760,580), new cjs.Rectangle(-380,-660,760,612.5), new cjs.Rectangle(-380,-660,760,645), new cjs.Rectangle(-380,-660,760,677.5), new cjs.Rectangle(-380,-660,760,710), new cjs.Rectangle(-380,-660,760,742.5), new cjs.Rectangle(-380,-660,760,775), new cjs.Rectangle(-380,-660,760,807.5), new cjs.Rectangle(-380,-660,760,840), new cjs.Rectangle(-380,-660,760,872.5), new cjs.Rectangle(-380,-660,760,905), new cjs.Rectangle(-380,-660,760,937.5), new cjs.Rectangle(-380,-660,760,970), new cjs.Rectangle(-380,-660,760,958), new cjs.Rectangle(-380,-660,760,946), new cjs.Rectangle(-380,-660,760,934), new cjs.Rectangle(-380,-660,760,922), new cjs.Rectangle(-380,-660,760,910), new cjs.Rectangle(-383.9,-660,764,914.1), new cjs.Rectangle(-388,-660,768,918), new cjs.Rectangle(-391.9,-660,772,922.1), new cjs.Rectangle(-396,-660,776,926), new cjs.Rectangle(-400,-660,780,930), new cjs.Rectangle(-395.9,-660,776,926), new cjs.Rectangle(-391.9,-660,772,922.1), new cjs.Rectangle(-387.9,-660,768,918), new cjs.Rectangle(-383.9,-660,764,937.5), new cjs.Rectangle(-380,-660,760,970), new cjs.Rectangle(-380,-660,760,958), new cjs.Rectangle(-380,-660,760,946), new cjs.Rectangle(-380,-660,760,934), new cjs.Rectangle(-380,-660,760,922), new cjs.Rectangle(-380,-660,760,910), new cjs.Rectangle(-380,-630,764,884.1), new cjs.Rectangle(-380,-600,768,858), new cjs.Rectangle(-380,-570,772,832.1), new cjs.Rectangle(-380,-540,776,806), new cjs.Rectangle(-380,-510,780,780), new cjs.Rectangle(-380,-480,776,746), new cjs.Rectangle(-380,-450,772,712.1), new cjs.Rectangle(-380,-420,768,678), new cjs.Rectangle(-380,-390,764,644.1), new cjs.Rectangle(-380,-360,760,610), new cjs.Rectangle(-380,-330,760,580), new cjs.Rectangle(-380,-300,760,550), new cjs.Rectangle(-380,-270,760,520), new cjs.Rectangle(-380,-240,760,490), new cjs.Rectangle(-380,-210,760,460), new cjs.Rectangle(-380,-220,760,470), new cjs.Rectangle(-380,-230,760,480), new cjs.Rectangle(-380,-240,760,490), new cjs.Rectangle(-380,-250,760,500), new cjs.Rectangle(-380,-260,760,510), new cjs.Rectangle(-380,-263.9,760,514), new cjs.Rectangle(-380,-268,760,518), new cjs.Rectangle(-380,-271.9,760,522), new cjs.Rectangle(-380,-276,760,526), new cjs.Rectangle(-380,-280,760,530), new cjs.Rectangle(-380,-275.9,760,526), new cjs.Rectangle(-380,-271.9,760,522), new cjs.Rectangle(-380,-267.9,760,518), new cjs.Rectangle(-380,-263.9,760,514), rect=new cjs.Rectangle(-380,-260,760,510), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-383.9,-260,764,514.1), new cjs.Rectangle(-388,-260,768,518), new cjs.Rectangle(-391.9,-260,772,522.1), new cjs.Rectangle(-396,-260,776,526), new cjs.Rectangle(-400,-260,780,530), new cjs.Rectangle(-395.9,-260,776,526), new cjs.Rectangle(-391.9,-260,772,522.1), new cjs.Rectangle(-387.9,-260,768,518), new cjs.Rectangle(-383.9,-260,764,514.1), new cjs.Rectangle(-380,-260,760,510), new cjs.Rectangle(-380,-260,764,537.4), new cjs.Rectangle(-380,-260,768,564.7), new cjs.Rectangle(-380,-260,772,592), new cjs.Rectangle(-380,-260,776,619.4), new cjs.Rectangle(-380,-260,780,646.7), new cjs.Rectangle(-380,-260,776,674), new cjs.Rectangle(-380,-260,772,701.4), new cjs.Rectangle(-380,-260,768,728.7), new cjs.Rectangle(-380,-260,764,756), new cjs.Rectangle(-380,-260,760,783.4), new cjs.Rectangle(-380,-260,760,810.7), new cjs.Rectangle(-380,-260,760,838), new cjs.Rectangle(-380,-260,760,865.4), new cjs.Rectangle(-380,-260,760,892.7), new cjs.Rectangle(-380,-260,760,920), new cjs.Rectangle(-380,-263.9,760,924), new cjs.Rectangle(-380,-268,760,928), new cjs.Rectangle(-380,-271.9,760,932), new cjs.Rectangle(-380,-276,760,936), new cjs.Rectangle(-380,-280,760,940), new cjs.Rectangle(-380,-275.9,760,936), new cjs.Rectangle(-380,-271.9,760,932), new cjs.Rectangle(-380,-267.9,760,928), new cjs.Rectangle(-380,-263.9,760,924), new cjs.Rectangle(-380,-260,760,920), new cjs.Rectangle(-380,-230,760,890), new cjs.Rectangle(-380,-200,760,860), new cjs.Rectangle(-380,-170,760,830), new cjs.Rectangle(-380,-140,760,800), new cjs.Rectangle(-380,-110,760,770), new cjs.Rectangle(-380,-80,760,740), new cjs.Rectangle(-380,-50,760,710), new cjs.Rectangle(-380,-20,760,680), new cjs.Rectangle(-380,10,760,650), new cjs.Rectangle(-380,40,760,620), new cjs.Rectangle(-380,70,760,590), new cjs.Rectangle(-380,100,760,560), new cjs.Rectangle(-380,130,760,530), new cjs.Rectangle(-380,160,760,500), new cjs.Rectangle(-380,190,760,470), new cjs.Rectangle(-380,220,760,440), new cjs.Rectangle(-380,250,760,410), new cjs.Rectangle(-380,280,760,380), new cjs.Rectangle(-380,310,760,350), rect=new cjs.Rectangle(-380,340,760,320), rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":189});

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(0,-100);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-500,alpha:1},0).wait(23).to({y:-50},15).to({y:-100},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(70).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:-500},15).wait(41));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-220,90);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:500,alpha:1},0).wait(53).to({y:50},15).to({y:90},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(55).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(26));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(220,90);
	this.location_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:500,alpha:1},0).wait(38).to({y:50},15).to({y:90},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(80).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-260,760,510);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-660,760,1320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-630,760,1290), new cjs.Rectangle(-380,-600,760,1260), new cjs.Rectangle(-380,-570,760,1230), new cjs.Rectangle(-380,-540,760,1200), new cjs.Rectangle(-380,-510,760,1170), new cjs.Rectangle(-380,-480,760,1140), new cjs.Rectangle(-380,-450,760,1110), new cjs.Rectangle(-380,-420,760,1080), new cjs.Rectangle(-380,-390,760,1050), new cjs.Rectangle(-380,-360,760,1020), new cjs.Rectangle(-380,-330,760,990), new cjs.Rectangle(-380,-300,760,960), new cjs.Rectangle(-380,-270,760,930), new cjs.Rectangle(-380,-240,760,900), new cjs.Rectangle(-380,-210,760,870), new cjs.Rectangle(-380,-220,760,880), new cjs.Rectangle(-380,-230,760,890), new cjs.Rectangle(-380,-240,760,900), new cjs.Rectangle(-380,-250,760,910), new cjs.Rectangle(-380,-260,760,920), new cjs.Rectangle(-380,-263.9,760,924), new cjs.Rectangle(-380,-268,760,928), new cjs.Rectangle(-380,-271.9,760,932), new cjs.Rectangle(-380,-276,760,936), new cjs.Rectangle(-380,-280,760,940), new cjs.Rectangle(-380,-275.9,760,936), new cjs.Rectangle(-380,-271.9,760,932), new cjs.Rectangle(-380,-267.9,760,928), new cjs.Rectangle(-380,-263.9,760,924), new cjs.Rectangle(-380,-260,760,920), new cjs.Rectangle(-380,-260,760,890), new cjs.Rectangle(-380,-260,760,860), new cjs.Rectangle(-380,-260,760,830), new cjs.Rectangle(-380,-260,760,800), new cjs.Rectangle(-380,-260,760,770), new cjs.Rectangle(-380,-260,764,740), new cjs.Rectangle(-380,-260,768,710), new cjs.Rectangle(-380,-260,772,680), new cjs.Rectangle(-380,-260,776,650), new cjs.Rectangle(-380,-260,780,620), new cjs.Rectangle(-380,-260,776,590), new cjs.Rectangle(-380,-260,772,560), new cjs.Rectangle(-380,-260,768,530), new cjs.Rectangle(-380,-260,764,514.1), rect=new cjs.Rectangle(-380,-260,760,510), rect, rect, rect, rect, rect, new cjs.Rectangle(-383.9,-260,764,514.1), new cjs.Rectangle(-388,-260,768,518), new cjs.Rectangle(-391.9,-260,772,522.1), new cjs.Rectangle(-396,-260,776,526), new cjs.Rectangle(-400,-260,780,530), new cjs.Rectangle(-395.9,-260,776,526), new cjs.Rectangle(-391.9,-260,772,522.1), new cjs.Rectangle(-387.9,-260,768,518), new cjs.Rectangle(-383.9,-260,764,514.1), rect=new cjs.Rectangle(-380,-260,760,510), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-263.9,760,514), new cjs.Rectangle(-380,-268,760,518), new cjs.Rectangle(-380,-271.9,760,522), new cjs.Rectangle(-380,-276,760,526), new cjs.Rectangle(-380,-280,760,530), new cjs.Rectangle(-380,-275.9,760,526), new cjs.Rectangle(-380,-271.9,760,522), new cjs.Rectangle(-380,-267.9,760,518), new cjs.Rectangle(-380,-263.9,760,514), new cjs.Rectangle(-380,-260,760,510), new cjs.Rectangle(-380,-286.6,760,536.7), new cjs.Rectangle(-380,-313.3,760,563.4), new cjs.Rectangle(-380,-340,760,590), new cjs.Rectangle(-380,-366.6,760,616.7), new cjs.Rectangle(-380,-393.3,760,643.4), new cjs.Rectangle(-383.9,-420,764,674.1), new cjs.Rectangle(-388,-446.6,768,704.7), new cjs.Rectangle(-391.9,-473.3,772,735.4), new cjs.Rectangle(-396,-500,776,766), new cjs.Rectangle(-400,-526.6,780,796.7), new cjs.Rectangle(-395.9,-553.3,776,819.4), new cjs.Rectangle(-391.9,-580,772,842.1), new cjs.Rectangle(-387.9,-606.6,768,864.7), new cjs.Rectangle(-383.9,-633.3,764,887.4), new cjs.Rectangle(-380,-660,760,910), new cjs.Rectangle(-380,-660,764,937.4), new cjs.Rectangle(-380,-660,768,964.7), new cjs.Rectangle(-380,-660,772,992), new cjs.Rectangle(-380,-660,776,1019.4), new cjs.Rectangle(-380,-660,780,1046.7), new cjs.Rectangle(-380,-660,776,1074), new cjs.Rectangle(-380,-660,772,1101.4), new cjs.Rectangle(-380,-660,768,1128.7), new cjs.Rectangle(-380,-660,764,1156), new cjs.Rectangle(-380,-660,760,1183.4), new cjs.Rectangle(-380,-660,760,1210.7), new cjs.Rectangle(-380,-660,760,1238), new cjs.Rectangle(-380,-660,760,1265.4), new cjs.Rectangle(-380,-660,760,1292.7), rect=new cjs.Rectangle(-380,-660,760,1320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.container_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(0);
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.instance = new lib.pointer_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-60,120,120);
p.frameBounds = [rect];


(lib.closet_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(-128,-210);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-128,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0}]},11).to({state:[{t:this.accessory_0}]},1).wait(1));

	// options
	this.dress_1 = new lib.dress_1_3_mc();
	this.dress_1.setTransform(0,-5);

	this.dress_2 = new lib.dress_2_3_mc();
	this.dress_2.setTransform(-2,-6);

	this.dress_3 = new lib.dress_3_3_mc();
	this.dress_3.setTransform(-2,-5);

	this.top_4 = new lib.top_4_3_mc();
	this.top_4.setTransform(0,-70);

	this.top_2 = new lib.top_2_3_mc();
	this.top_2.setTransform(0,70);

	this.top_6 = new lib.top_6_3_mc();
	this.top_6.setTransform(80,-95);

	this.top_5 = new lib.top_5_3_mc();
	this.top_5.setTransform(-55,-60);

	this.top_3 = new lib.top_3_3_mc();
	this.top_3.setTransform(0,80);

	this.top_1 = new lib.top_1_3_mc();

	this.bottom_5 = new lib.bottom_5_3_mc();
	this.bottom_5.setTransform(0,5);

	this.bottom_6 = new lib.bottom_6_3_mc();

	this.bottom_2 = new lib.bottom_2_3_mc();
	this.bottom_2.setTransform(0,5);

	this.bottom_4 = new lib.bottom_4_3_mc();
	this.bottom_4.setTransform(-50,-10);

	this.bottom_3 = new lib.bottom_3_3_mc();
	this.bottom_3.setTransform(60,50);

	this.bottom_1 = new lib.bottom_1_3_mc();
	this.bottom_1.setTransform(0,5);

	this.shoes_6 = new lib.shoes_6_3_mc();
	this.shoes_6.setTransform(70,110);

	this.shoes_5 = new lib.shoes_5_3_mc();
	this.shoes_5.setTransform(-70,110);

	this.shoes_4 = new lib.shoes_4_3_mc();
	this.shoes_4.setTransform(-70,-10);

	this.shoes_3 = new lib.shoes_3_3_mc();
	this.shoes_3.setTransform(70,-130);

	this.shoes_2 = new lib.shoes_2_3_mc();
	this.shoes_2.setTransform(70,-10);

	this.shoes_1 = new lib.shoes_1_3_mc();
	this.shoes_1.setTransform(-70,-130);

	this.accessory_3 = new lib.accessory_3_3_mc();
	this.accessory_3.setTransform(0,-125);

	this.accessory_2 = new lib.accessory_2_3_mc();
	this.accessory_2.setTransform(0,-5);

	this.accessory_1 = new lib.accessory_1_3_mc();
	this.accessory_1.setTransform(0,110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.top_2},{t:this.top_4}]},1).to({state:[{t:this.top_3},{t:this.top_5},{t:this.top_6}]},1).to({state:[{t:this.top_1}]},1).to({state:[{t:this.bottom_5}]},1).to({state:[{t:this.bottom_6}]},1).to({state:[{t:this.bottom_2}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_4}]},1).to({state:[{t:this.bottom_1}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.shoes_5},{t:this.shoes_6}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.7,-114.9,190.5,217.5);
p.frameBounds = [rect, new cjs.Rectangle(-112,-119.4,221.8,230.1), new cjs.Rectangle(-115.4,-118.6,224.9,230.7), new cjs.Rectangle(-97.6,-145.3,192,285.2), new cjs.Rectangle(-155.2,-148.6,309.8,305.8), new cjs.Rectangle(-136.1,-120.9,263.8,241), new cjs.Rectangle(-91.7,-119.9,182.8,249.7), new cjs.Rectangle(-80,-130,160,260), new cjs.Rectangle(-80,-125,160,260), new cjs.Rectangle(-121.5,-130.6,252.3,243.7), new cjs.Rectangle(-75,-120,150,250), new cjs.Rectangle(-152,-234,272,384), new cjs.Rectangle(-152,-234,242,384)];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(-128,-210);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-128,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0}]},9).to({state:[{t:this.accessory_0}]},3).wait(1));

	// options
	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(0,-10);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(0,-5);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(-5,-5);

	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(-5,75);

	this.top_6 = new lib.top_6_2_mc();
	this.top_6.setTransform(80,-60);

	this.top_5 = new lib.top_5_2_mc();
	this.top_5.setTransform(-75,-60);

	this.top_4 = new lib.top_4_2_mc();
	this.top_4.setTransform(75,-70);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(-75,-70);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(0,69.5);

	this.bottom_4 = new lib.bottom_4_2_mc();
	this.bottom_4.setTransform(0,5);

	this.bottom_5 = new lib.bottom_5_2_mc();
	this.bottom_5.setTransform(0,-50);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(0,85);

	this.bottom_6 = new lib.bottom_6_2_mc();
	this.bottom_6.setTransform(0,80);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(0,-60);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(-5,0);

	this.shoes_5 = new lib.shoes_5_2_mc();
	this.shoes_5.setTransform(0,85);

	this.shoes_2 = new lib.shoes_2_2_mc();
	this.shoes_2.setTransform(0,-55);

	this.shoes_4 = new lib.shoes_4_2_mc();
	this.shoes_4.setTransform(0,75);

	this.shoes_3 = new lib.shoes_3_2_mc();
	this.shoes_3.setTransform(0,-65);

	this.shoes_6 = new lib.shoes_6_2_mc();
	this.shoes_6.setTransform(0,-95);

	this.shoes_1 = new lib.shoes_1_2_mc();
	this.shoes_1.setTransform(0,50);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(0,105);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(0,5);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(0,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.top_5},{t:this.top_6},{t:this.top_2}]},1).to({state:[{t:this.top_1},{t:this.top_3},{t:this.top_4}]},1).to({state:[{t:this.bottom_4}]},1).to({state:[{t:this.bottom_2},{t:this.bottom_5}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_6}]},1).to({state:[{t:this.bottom_1}]},1).to({state:[{t:this.shoes_2},{t:this.shoes_5}]},1).to({state:[{t:this.shoes_3},{t:this.shoes_4}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_6}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.4,-138.2,280.7,267.1);
p.frameBounds = [rect, new cjs.Rectangle(-124,-122,249,233.1), new cjs.Rectangle(-106.9,-117.5,199.1,224.1), new cjs.Rectangle(-145,-138.5,292,273.9), new cjs.Rectangle(-126.5,-132.9,261.7,286.8), new cjs.Rectangle(-65.3,-127.7,136.1,263.1), new cjs.Rectangle(-113,-125.5,218.6,255.3), new cjs.Rectangle(-96.9,-136.8,189.9,279.4), new cjs.Rectangle(-95,-90,180,180), new cjs.Rectangle(-152,-234,227,374), new cjs.Rectangle(-152,-234,227,364), new cjs.Rectangle(-152,-234,227,374), new cjs.Rectangle(-152,-234,262,370.1)];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(-128,-210);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-128,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0}]},10).to({state:[{t:this.accessory_0}]},3).wait(1));

	// options
	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(-3,0);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(-2,12);

	this.dress_3 = new lib.dress_3_1_mc();

	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(-75,-65);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(0,70);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(80,-55);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(-77,-65);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(75,-67);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(0,70);

	this.bottom_6 = new lib.bottom_6_1_mc();
	this.bottom_6.setTransform(-5,3);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(0,80);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(-5,-57);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(0,-5);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(0,5);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(5,8);

	this.shoes_4 = new lib.shoes_4_1_mc();
	this.shoes_4.setTransform(0,-90);

	this.shoes_3 = new lib.shoes_3_1_mc();
	this.shoes_3.setTransform(0,60);

	this.shoes_2 = new lib.shoes_2_1_mc();
	this.shoes_2.setTransform(0,65);

	this.shoes_5 = new lib.shoes_5_1_mc();
	this.shoes_5.setTransform(0,-70);

	this.shoes_6 = new lib.shoes_6_1_mc();
	this.shoes_6.setTransform(0,-50);

	this.shoes_1 = new lib.shoes_1_1_mc();
	this.shoes_1.setTransform(0,80);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(0,105);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(0,-5);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(0,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.top_4},{t:this.top_5},{t:this.top_6}]},1).to({state:[{t:this.top_1},{t:this.top_2},{t:this.top_3}]},1).to({state:[{t:this.bottom_6}]},1).to({state:[{t:this.bottom_2},{t:this.bottom_5}]},1).to({state:[{t:this.bottom_3}]},1).to({state:[{t:this.bottom_4}]},1).to({state:[{t:this.bottom_1}]},1).to({state:[{t:this.shoes_3},{t:this.shoes_4}]},1).to({state:[{t:this.shoes_5},{t:this.shoes_2}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_6}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.8,-141,268.6,282);
p.frameBounds = [rect, new cjs.Rectangle(-150.9,-166.8,296.7,359.5), new cjs.Rectangle(-103.8,-105.7,205,222.2), new cjs.Rectangle(-156.9,-130.9,321,266.6), new cjs.Rectangle(-141.4,-129.5,286.4,263.8), new cjs.Rectangle(-85.8,-120.7,158,253.2), new cjs.Rectangle(-142.1,-132.9,272.5,278.9), new cjs.Rectangle(-160.7,-161,321.5,306.5), new cjs.Rectangle(-83.5,-127.2,157.6,261.2), new cjs.Rectangle(-78,-128.5,164.1,272.2), new cjs.Rectangle(-152,-234,227.1,391.3), rect=new cjs.Rectangle(-152,-234,227,364), rect, new cjs.Rectangle(-152,-234,263.6,383.3)];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_1_0_mc();
	this.instance.setTransform(0,0,0.75,0.75);
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.animation_check_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, rect];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.7,-114.9,190.5,217.5);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.4,-138.2,280.7,267.1);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.8,-141,268.6,282);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-320,1200,1240);
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
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
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
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


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


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(120,563,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-0.3,1200,600.3);
p.frameBounds = [rect];


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


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_2_main_mc();
	this.instance.setTransform(580,328);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({x:200},10).to({x:270},5).wait(50).to({x:-400},20).wait(100).to({x:1200},0).to({x:520},15).to({x:580},5).wait(1));

	// animation
	this.instance_1 = new lib.hero_1_main_mc();
	this.instance_1.setTransform(270,314);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({x:-400},20).wait(80).to({x:1200},0).to({x:520},15).to({x:580},5).wait(65).to({x:210},10).to({x:270},5).wait(21));

	// animation
	this.instance_2 = new lib.hero_3_main_mc();
	this.instance_2.setTransform(1200,305);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({x:510},15).to({x:570},5).wait(55).to({x:210},10).to({x:270},5).wait(60).to({x:-400},20).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(147.1,14.7,1189.7,588.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(113.6,14.7,1223.2,588.1), new cjs.Rectangle(80.1,14.7,1256.7,588.1), new cjs.Rectangle(46.6,14.7,1290.2,588.1), new cjs.Rectangle(13.1,14.7,1323.7,588.1), new cjs.Rectangle(-20.4,14.7,1357.2,588.1), new cjs.Rectangle(-53.9,14.7,1390.7,588.1), new cjs.Rectangle(-87.4,14.7,1424.2,588.1), new cjs.Rectangle(-120.9,14.7,1457.7,588.1), new cjs.Rectangle(-154.4,14.7,1491.2,588.1), new cjs.Rectangle(-187.9,14.7,1524.7,588.1), new cjs.Rectangle(-221.4,14.7,1558.2,588.1), new cjs.Rectangle(-254.9,14.7,1591.7,588.1), new cjs.Rectangle(-288.4,14.7,1625.2,588.1), new cjs.Rectangle(-321.9,14.7,1658.7,588.1), new cjs.Rectangle(-355.4,14.7,1692.2,588.1), new cjs.Rectangle(-388.9,14.7,1725.7,588.1), new cjs.Rectangle(-422.4,14.7,1759.2,588.1), new cjs.Rectangle(-455.9,14.7,1792.7,588.1), new cjs.Rectangle(-489.4,14.7,1826.2,588.1), new cjs.Rectangle(-522.9,14.7,1859.7,588.1), new cjs.Rectangle(-522.9,14.7,1813.7,588.1), new cjs.Rectangle(-522.9,14.7,1767.7,588.1), new cjs.Rectangle(-522.9,14.7,1721.7,588.1), new cjs.Rectangle(-522.9,14.7,1675.7,588.1), new cjs.Rectangle(-522.9,14.7,1629.7,588.1), new cjs.Rectangle(-522.9,14.7,1583.7,588.1), new cjs.Rectangle(-522.9,14.7,1537.7,588.1), new cjs.Rectangle(-522.9,14.7,1491.7,588.1), new cjs.Rectangle(-522.9,14.7,1445.7,588.1), new cjs.Rectangle(-522.9,14.7,1399.7,588.1), new cjs.Rectangle(-522.9,14.7,1353.7,588.1), new cjs.Rectangle(-522.9,14.7,1307.7,588.1), new cjs.Rectangle(-522.9,14.7,1261.7,588.1), new cjs.Rectangle(-522.9,14.7,1215.7,588.1), new cjs.Rectangle(-522.9,14.7,1169.7,588.1), new cjs.Rectangle(-522.9,14.7,1181.7,588.1), new cjs.Rectangle(-522.9,14.7,1193.7,588.1), new cjs.Rectangle(-522.9,14.7,1205.7,588.1), new cjs.Rectangle(-522.9,14.7,1217.7,588.1), rect=new cjs.Rectangle(-522.9,14.7,1229.7,588.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-522.9,14.7,1193.7,588.1), new cjs.Rectangle(-522.9,14.7,1157.7,588.1), new cjs.Rectangle(-522.9,14.7,1121.7,588.1), new cjs.Rectangle(-522.9,14.7,1085.7,588.1), new cjs.Rectangle(-539.5,14.7,1862.6,588.1), new cjs.Rectangle(-539.5,14.7,1817.3,588.1), new cjs.Rectangle(-539.5,14.7,1772,588.1), new cjs.Rectangle(-539.5,14.7,1726.6,588.1), new cjs.Rectangle(-539.5,14.7,1681.3,588.1), new cjs.Rectangle(-539.5,14.7,1636,588.1), new cjs.Rectangle(-539.5,14.7,1590.6,588.1), new cjs.Rectangle(-539.5,14.7,1545.3,588.1), new cjs.Rectangle(-539.5,14.7,1500,588.1), new cjs.Rectangle(-539.5,14.7,1454.6,588.1), new cjs.Rectangle(-539.5,14.7,1409.3,588.1), new cjs.Rectangle(-539.5,14.7,1364,588.1), new cjs.Rectangle(-539.5,14.7,1318.6,588.1), new cjs.Rectangle(-539.5,14.7,1273.3,588.1), new cjs.Rectangle(-539.5,14.7,1228,588.1), new cjs.Rectangle(-539.5,14.7,1182.6,588.1), new cjs.Rectangle(-539.5,14.7,1194.6,588.1), new cjs.Rectangle(-539.5,14.7,1206.6,588.1), new cjs.Rectangle(-539.5,14.7,1218.6,588.1), new cjs.Rectangle(-539.5,14.7,1230.6,588.1), rect=new cjs.Rectangle(-539.5,14.7,1242.6,588.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-539.5,14.7,1205.6,588.1), new cjs.Rectangle(-539.5,14.7,1168.6,588.1), new cjs.Rectangle(-539.5,14.7,1131.6,588.1), new cjs.Rectangle(-539.5,14.7,1094.6,588.1), new cjs.Rectangle(-539.5,14.7,1057.6,588.1), new cjs.Rectangle(-539.5,14.7,1020.6,588.1), new cjs.Rectangle(-539.5,14.7,983.6,588.1), new cjs.Rectangle(-539.5,14.7,946.6,588.1), new cjs.Rectangle(-539.5,14.7,909.6,588.1), new cjs.Rectangle(-539.5,14.7,872.6,588.1), new cjs.Rectangle(-539.5,14.7,884.6,588.1), new cjs.Rectangle(-539.5,14.7,896.6,588.1), new cjs.Rectangle(-539.5,14.7,908.6,588.1), new cjs.Rectangle(-539.5,14.7,920.6,588.1), new cjs.Rectangle(-536.2,14.7,1853.7,588.1), new cjs.Rectangle(-536.2,14.7,1807.2,588.1), new cjs.Rectangle(-536.2,14.7,1761.9,588.1), new cjs.Rectangle(-536.2,14.7,1716.5,588.1), new cjs.Rectangle(-536.2,14.7,1671.2,588.1), new cjs.Rectangle(-536.2,14.7,1625.9,588.1), new cjs.Rectangle(-536.2,14.7,1580.5,588.1), new cjs.Rectangle(-536.2,14.7,1535.2,588.1), new cjs.Rectangle(-536.2,14.7,1489.9,588.1), new cjs.Rectangle(-536.2,14.7,1444.5,588.1), new cjs.Rectangle(-536.2,14.7,1399.2,588.1), new cjs.Rectangle(-536.2,14.7,1353.9,588.1), new cjs.Rectangle(-536.2,14.7,1308.5,588.1), new cjs.Rectangle(-536.2,14.7,1263.2,588.1), new cjs.Rectangle(-536.2,14.7,1217.9,588.1), new cjs.Rectangle(-536.2,14.7,1173.7,588.1), new cjs.Rectangle(-536.2,14.7,1184.5,588.1), new cjs.Rectangle(-536.2,14.7,1196.5,588.1), new cjs.Rectangle(-536.2,14.7,1208.5,588.1), new cjs.Rectangle(-536.2,14.7,1220.5,588.1), new cjs.Rectangle(-536.2,14.7,1233.7,588.1)];


(lib.hairstyle_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_6_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_5_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_4_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_3_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_2_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_1_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpCGZmaQGambJDAAQJEAAGaGbQGZGaABJCQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":179});

	// decor
	this.instance = new lib.container_pointer_mc();
	this.instance.setTransform(-90,-150.1,1,1,0,-150,30,-0.1,0.1);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0.012},10).to({_off:true},1).wait(50));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(0,-100);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500,alpha:1},0).wait(53).to({y:-50},15).to({y:-100},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(60).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:-500},15).wait(11));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-220,90);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:500,alpha:1},0).wait(23).to({y:0},15).to({y:90},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(65).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(36));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(220,90);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:500,alpha:1},0).wait(33).to({y:0},15).to({y:90},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(65).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-260,760,510);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-660,760,1320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-660,760,1286.7), new cjs.Rectangle(-380,-660,760,1253.4), new cjs.Rectangle(-380,-660,760,1220), new cjs.Rectangle(-380,-660,760,1186.7), new cjs.Rectangle(-380,-660,760,1153.4), new cjs.Rectangle(-380,-660,760,1120), new cjs.Rectangle(-380,-660,760,1086.7), new cjs.Rectangle(-380,-660,760,1053.4), new cjs.Rectangle(-380,-660,760,1020), new cjs.Rectangle(-380,-660,760,986.7), new cjs.Rectangle(-383.9,-660,764,953.4), new cjs.Rectangle(-388,-660,768,920), new cjs.Rectangle(-391.9,-660,772,922.1), new cjs.Rectangle(-396,-660,776,926), new cjs.Rectangle(-400,-660,780,930), new cjs.Rectangle(-395.9,-660,776,926), new cjs.Rectangle(-391.9,-660,772,922.1), new cjs.Rectangle(-387.9,-660,768,918), new cjs.Rectangle(-383.9,-660,764,914.1), new cjs.Rectangle(-380,-660,760,910), new cjs.Rectangle(-380,-630,764,884.1), new cjs.Rectangle(-380,-600,768,858), new cjs.Rectangle(-380,-570,772,832.1), new cjs.Rectangle(-380,-540,776,806), new cjs.Rectangle(-380,-510,780,780), new cjs.Rectangle(-380,-480,776,746), new cjs.Rectangle(-380,-450,772,712.1), new cjs.Rectangle(-380,-420,768,678), new cjs.Rectangle(-380,-390,764,644.1), new cjs.Rectangle(-380,-360,760,610), new cjs.Rectangle(-380,-330,760,580), new cjs.Rectangle(-380,-300,760,550), new cjs.Rectangle(-380,-270,760,520), new cjs.Rectangle(-380,-240,760,490), new cjs.Rectangle(-380,-210,760,460), new cjs.Rectangle(-380,-220,760,470), new cjs.Rectangle(-380,-230,760,480), new cjs.Rectangle(-380,-240,760,490), new cjs.Rectangle(-380,-250,760,500), new cjs.Rectangle(-380,-260,760,510), new cjs.Rectangle(-380,-263.9,760,514), new cjs.Rectangle(-380,-268,760,518), new cjs.Rectangle(-380,-271.9,760,522), new cjs.Rectangle(-380,-276,760,526), new cjs.Rectangle(-380,-280,760,530), new cjs.Rectangle(-380,-275.9,760,526), new cjs.Rectangle(-380,-271.9,760,522), new cjs.Rectangle(-380,-267.9,760,518), new cjs.Rectangle(-380,-263.9,760,514), rect=new cjs.Rectangle(-380,-260,760,510), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-383.9,-260,764,514.1), new cjs.Rectangle(-388,-260,768,518), new cjs.Rectangle(-391.9,-260,772,522.1), new cjs.Rectangle(-396,-260,776,526), new cjs.Rectangle(-400,-260,780,530), new cjs.Rectangle(-395.9,-260,776,526), new cjs.Rectangle(-391.9,-260,772,522.1), new cjs.Rectangle(-387.9,-260,768,518), new cjs.Rectangle(-383.9,-260,764,514.1), new cjs.Rectangle(-380,-260,760,510), new cjs.Rectangle(-380,-260,764,537.4), new cjs.Rectangle(-380,-260,768,564.7), new cjs.Rectangle(-380,-260,772,592), new cjs.Rectangle(-380,-260,776,619.4), new cjs.Rectangle(-380,-260,780,646.7), new cjs.Rectangle(-380,-260,776,674), new cjs.Rectangle(-380,-260,772,701.4), new cjs.Rectangle(-380,-260,768,728.7), new cjs.Rectangle(-380,-260,764,756), new cjs.Rectangle(-380,-260,760,783.4), new cjs.Rectangle(-380,-260,760,810.7), new cjs.Rectangle(-380,-260,760,838), new cjs.Rectangle(-380,-260,760,865.4), new cjs.Rectangle(-380,-260,760,892.7), new cjs.Rectangle(-380,-260,760,920), new cjs.Rectangle(-380,-263.9,760,924), new cjs.Rectangle(-380,-268,760,928), new cjs.Rectangle(-380,-271.9,760,932), new cjs.Rectangle(-380,-276,760,936), new cjs.Rectangle(-380,-280,760,940), new cjs.Rectangle(-380,-275.9,760,936), new cjs.Rectangle(-380,-271.9,760,932), new cjs.Rectangle(-380,-267.9,760,928), new cjs.Rectangle(-380,-263.9,760,924), new cjs.Rectangle(-380,-260,760,920), new cjs.Rectangle(-380,-286.6,760,946.7), new cjs.Rectangle(-380,-313.3,760,973.4), new cjs.Rectangle(-380,-340,760,1000), new cjs.Rectangle(-380,-366.6,760,1026.7), new cjs.Rectangle(-380,-393.3,760,1053.4), new cjs.Rectangle(-380,-420,760,1080), new cjs.Rectangle(-380,-446.6,760,1106.7), new cjs.Rectangle(-380,-473.3,760,1133.4), new cjs.Rectangle(-380,-500,760,1160), new cjs.Rectangle(-380,-526.6,760,1186.7), new cjs.Rectangle(-380,-553.3,760,1213.4), new cjs.Rectangle(-380,-580,760,1240), new cjs.Rectangle(-380,-606.6,760,1266.7), new cjs.Rectangle(-380,-633.3,760,1293.4), rect=new cjs.Rectangle(-380,-660,760,1320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":84,"end":169});

	// decor
	this.instance = new lib.container_pointer_mc();
	this.instance.setTransform(95,-140,1,1,0,-30,150);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).wait(65).to({alpha:0.012},10).to({_off:true},1).wait(50));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-100);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500,alpha:1},0).wait(23).to({y:-50},15).to({y:-100},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(55).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:-500},15).wait(36));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-220,90);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:500,alpha:1},0).wait(38).to({y:50},15).to({y:90},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(50).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(26));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(220,90);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:500,alpha:1},0).wait(48).to({y:50},15).to({y:90},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(50).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-260,760,510);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-660,760,1320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-630,760,1290), new cjs.Rectangle(-380,-600,760,1260), new cjs.Rectangle(-380,-570,760,1230), new cjs.Rectangle(-380,-540,760,1200), new cjs.Rectangle(-380,-510,760,1170), new cjs.Rectangle(-380,-480,760,1140), new cjs.Rectangle(-380,-450,760,1110), new cjs.Rectangle(-380,-420,760,1080), new cjs.Rectangle(-380,-390,760,1050), new cjs.Rectangle(-380,-360,760,1020), new cjs.Rectangle(-380,-330,760,990), new cjs.Rectangle(-380,-300,760,960), new cjs.Rectangle(-380,-270,760,930), new cjs.Rectangle(-380,-240,760,900), new cjs.Rectangle(-380,-210,760,870), new cjs.Rectangle(-380,-220,760,880), new cjs.Rectangle(-380,-230,760,890), new cjs.Rectangle(-380,-240,760,900), new cjs.Rectangle(-380,-250,760,910), new cjs.Rectangle(-380,-260,760,920), new cjs.Rectangle(-380,-263.9,760,924), new cjs.Rectangle(-380,-268,760,928), new cjs.Rectangle(-380,-271.9,760,932), new cjs.Rectangle(-380,-276,760,936), new cjs.Rectangle(-380,-280,760,940), new cjs.Rectangle(-380,-275.9,760,906), new cjs.Rectangle(-380,-271.9,760,872), new cjs.Rectangle(-380,-267.9,760,838), new cjs.Rectangle(-380,-263.9,760,804), new cjs.Rectangle(-380,-260,760,770), new cjs.Rectangle(-380,-260,760,740), new cjs.Rectangle(-380,-260,760,710), new cjs.Rectangle(-380,-260,760,680), new cjs.Rectangle(-380,-260,760,650), new cjs.Rectangle(-380,-260,760,620), new cjs.Rectangle(-383.9,-260,764,590), new cjs.Rectangle(-388,-260,768,560), new cjs.Rectangle(-391.9,-260,772,530), new cjs.Rectangle(-396,-260,776,526), new cjs.Rectangle(-400,-260,780,530), new cjs.Rectangle(-395.9,-260,776,526), new cjs.Rectangle(-391.9,-260,772,522.1), new cjs.Rectangle(-387.9,-260,768,518), new cjs.Rectangle(-383.9,-260,764,514.1), new cjs.Rectangle(-380,-260,760,510), new cjs.Rectangle(-380,-260,764,514.1), new cjs.Rectangle(-380,-260,768,518), new cjs.Rectangle(-380,-260,772,522.1), new cjs.Rectangle(-380,-260,776,526), new cjs.Rectangle(-380,-260,780,530), new cjs.Rectangle(-380,-260,776,526), new cjs.Rectangle(-380,-260,772,522.1), new cjs.Rectangle(-380,-260,768,518), new cjs.Rectangle(-380,-260,764,514.1), rect=new cjs.Rectangle(-380,-260,760,510), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-263.9,760,514), new cjs.Rectangle(-380,-268,760,518), new cjs.Rectangle(-380,-271.9,760,522), new cjs.Rectangle(-380,-276,760,526), new cjs.Rectangle(-380,-280,760,530), new cjs.Rectangle(-380,-275.9,760,526), new cjs.Rectangle(-380,-271.9,760,522), new cjs.Rectangle(-380,-267.9,760,518), new cjs.Rectangle(-380,-263.9,760,514), new cjs.Rectangle(-380,-260,760,510), new cjs.Rectangle(-383.9,-286.6,764,540.7), new cjs.Rectangle(-388,-313.3,768,571.4), new cjs.Rectangle(-391.9,-340,772,602.1), new cjs.Rectangle(-396,-366.6,776,632.7), new cjs.Rectangle(-400,-393.3,780,663.4), new cjs.Rectangle(-395.9,-420,776,686), new cjs.Rectangle(-391.9,-446.6,772,708.7), new cjs.Rectangle(-387.9,-473.3,768,731.4), new cjs.Rectangle(-383.9,-500,764,754.1), new cjs.Rectangle(-380,-526.6,760,776.7), new cjs.Rectangle(-380,-553.3,764,830.7), new cjs.Rectangle(-380,-580,768,884.7), new cjs.Rectangle(-380,-606.6,772,938.7), new cjs.Rectangle(-380,-633.3,776,992.7), new cjs.Rectangle(-380,-660,780,1046.7), new cjs.Rectangle(-380,-660,776,1074), new cjs.Rectangle(-380,-660,772,1101.4), new cjs.Rectangle(-380,-660,768,1128.7), new cjs.Rectangle(-380,-660,764,1156), new cjs.Rectangle(-380,-660,760,1183.4), new cjs.Rectangle(-380,-660,760,1210.7), new cjs.Rectangle(-380,-660,760,1238), new cjs.Rectangle(-380,-660,760,1265.4), new cjs.Rectangle(-380,-660,760,1292.7), rect=new cjs.Rectangle(-380,-660,760,1320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":139});

	// decor
	this.instance = new lib.container_pointer_mc();
	this.instance.setTransform(-275,-50,1,1,30);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({alpha:1},10).wait(40).to({alpha:0.012},9).to({_off:true},1).wait(36));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,0);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-500,alpha:1},0).wait(23).to({y:50},15).to({y:0},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(40).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(21));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,0);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500,alpha:1},0).wait(33).to({y:50},15).to({y:0},5).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(40).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).to({y:500},15).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect, rect=new cjs.Rectangle(-340,-660,680,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-340,-660,680,356.7), new cjs.Rectangle(-340,-660,680,393.4), new cjs.Rectangle(-340,-660,680,430), new cjs.Rectangle(-340,-660,680,466.7), new cjs.Rectangle(-340,-660,680,503.4), new cjs.Rectangle(-340,-660,680,540), new cjs.Rectangle(-340,-660,680,576.7), new cjs.Rectangle(-340,-660,680,613.4), new cjs.Rectangle(-340,-660,680,650), new cjs.Rectangle(-340,-660,680,686.7), new cjs.Rectangle(-340,-623.3,680,686.7), new cjs.Rectangle(-340,-586.6,680,686.7), new cjs.Rectangle(-340,-550,680,686.7), new cjs.Rectangle(-340,-513.3,680,686.7), new cjs.Rectangle(-340,-476.6,680,686.7), new cjs.Rectangle(-340,-440,680,640), new cjs.Rectangle(-340,-403.3,680,593.4), new cjs.Rectangle(-340,-366.6,680,546.7), new cjs.Rectangle(-340,-330,680,500), new cjs.Rectangle(-400.2,-293.3,740.3,453.4), new cjs.Rectangle(-400,-256.6,740.1,420.7), new cjs.Rectangle(-400,-220,740.1,388), new cjs.Rectangle(-400,-183.3,740.1,355.4), new cjs.Rectangle(-400,-176,740.1,352), new cjs.Rectangle(-400,-180,740.1,390), new cjs.Rectangle(-400,-175.9,740.1,376), new cjs.Rectangle(-400,-171.9,740.1,362), new cjs.Rectangle(-400,-167.9,740.1,348), new cjs.Rectangle(-400,-163.9,740.1,334), new cjs.Rectangle(-400.2,-160,740.3,320), new cjs.Rectangle(-400.2,-163.9,744.3,328), new cjs.Rectangle(-400.2,-168,748.2,336), new cjs.Rectangle(-400.2,-171.9,752.3,344), new cjs.Rectangle(-400.2,-176,756.2,352), new cjs.Rectangle(-400.2,-180,760.3,360), new cjs.Rectangle(-400.2,-175.9,756.2,352), new cjs.Rectangle(-400.2,-171.9,752.3,344), new cjs.Rectangle(-400.2,-167.9,748.2,336), new cjs.Rectangle(-400.2,-163.9,744.3,328), rect=new cjs.Rectangle(-400.2,-160,740.3,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-163.9,740.1,328), new cjs.Rectangle(-400,-168,740.1,336), new cjs.Rectangle(-400,-171.9,740.1,344), new cjs.Rectangle(-400,-176,740.1,352), new cjs.Rectangle(-400,-180,740.1,360), new cjs.Rectangle(-400,-175.9,740.1,352), new cjs.Rectangle(-400,-171.9,740.1,344), new cjs.Rectangle(-400,-167.9,740.1,336), new cjs.Rectangle(-400.2,-163.9,740.3,328), new cjs.Rectangle(-340,-160,680,320), new cjs.Rectangle(-340,-163.9,684,357.3), new cjs.Rectangle(-340,-168,688,394.7), new cjs.Rectangle(-340,-171.9,692,432), new cjs.Rectangle(-340,-176,696,469.4), new cjs.Rectangle(-340,-180,700,506.7), new cjs.Rectangle(-340,-175.9,696,536), new cjs.Rectangle(-340,-171.9,692,565.3), new cjs.Rectangle(-340,-167.9,688,594.6), new cjs.Rectangle(-340,-163.9,684,624), new cjs.Rectangle(-340,-160,680,653.4), new cjs.Rectangle(-340,-126.6,680,653.3), new cjs.Rectangle(-340,-93.3,680,653.4), new cjs.Rectangle(-340,-60,680,653.4), new cjs.Rectangle(-340,-26.6,680,653.3), new cjs.Rectangle(-340,6.7,680,653.4), new cjs.Rectangle(-340,40,680,620), new cjs.Rectangle(-340,73.4,680,586.7), new cjs.Rectangle(-340,106.7,680,553.4), new cjs.Rectangle(-340,140,680,520), new cjs.Rectangle(-340,173.4,680,486.7), new cjs.Rectangle(-340,206.7,680,453.4), new cjs.Rectangle(-340,240,680,420), new cjs.Rectangle(-340,273.4,680,386.7), new cjs.Rectangle(-340,306.7,680,353.4), rect=new cjs.Rectangle(-340,340,680,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.set_6 = new lib.set_6_mc();
	this.set_6.setTransform(-225,200);

	this.set_5 = new lib.set_5_mc();
	this.set_5.setTransform(-225,100);

	this.set_4 = new lib.set_4_mc();
	this.set_4.setTransform(-225,0);

	this.set_3 = new lib.set_3_mc();
	this.set_3.setTransform(-225,-100);

	this.set_2 = new lib.set_2_mc();
	this.set_2.setTransform(-225,-200);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(0,-200,1,1,90);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(0,195,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc},{t:this.set_2},{t:this.set_3},{t:this.set_4},{t:this.set_5},{t:this.set_6}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-270,470,540);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_6 = new lib.set_6_mc();
	this.set_6.setTransform(-225,200);

	this.set_5 = new lib.set_5_mc();
	this.set_5.setTransform(-225,100);

	this.set_4 = new lib.set_4_mc();
	this.set_4.setTransform(-225,0);

	this.set_3 = new lib.set_3_mc();
	this.set_3.setTransform(-225,-100);

	this.set_2 = new lib.set_2_mc();
	this.set_2.setTransform(-225,-200);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(0,-200,1,1,90);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(0,195,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc},{t:this.set_2},{t:this.set_3},{t:this.set_4},{t:this.set_5},{t:this.set_6}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-270,470,540);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_6 = new lib.set_6_mc();
	this.set_6.setTransform(-225,200);

	this.set_5 = new lib.set_5_mc();
	this.set_5.setTransform(-225,100);

	this.set_4 = new lib.set_4_mc();
	this.set_4.setTransform(-225,0);

	this.set_3 = new lib.set_3_mc();
	this.set_3.setTransform(-225,-100);

	this.set_2 = new lib.set_2_mc();
	this.set_2.setTransform(-225,-200);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(0,-200,1,1,90);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(0,195,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc},{t:this.set_2},{t:this.set_3},{t:this.set_4},{t:this.set_5},{t:this.set_6}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-270,470,540);
p.frameBounds = [rect];


(lib.closet_hair_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_2 = new lib.hairstyle_2_3_mc();
	this.hair_2.setTransform(250,0);

	this.hair_1 = new lib.hairstyle_1_3_mc();
	this.hair_1.setTransform(-250,0);

	this.hair_4 = new lib.hairstyle_4_3_mc();
	this.hair_4.setTransform(250,0);

	this.hair_3 = new lib.hairstyle_3_3_mc();
	this.hair_3.setTransform(-250,0);

	this.hair_6 = new lib.hairstyle_6_3_mc();
	this.hair_6.setTransform(250,0);

	this.hair_5 = new lib.hairstyle_5_3_mc();
	this.hair_5.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2}]}).to({state:[{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-150,800,300);
p.frameBounds = [rect, rect, rect];


(lib.closet_hair_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(-250,0);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(250,0);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(-250,0);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(250,0);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(250,0);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_1}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-150,800,300);
p.frameBounds = [rect, rect, rect];


(lib.closet_hair_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(250,0);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(-250,0);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(250,0);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(-250,0);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(250,0);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_6}]}).to({state:[{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.hair_5},{t:this.hair_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-150,800,300);
p.frameBounds = [rect, rect, rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_hair_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-150,800,300);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_hair_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-150,800,300);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_hair_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-150,800,300);
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


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(740,550,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(210,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(90,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(460,510);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.decor_background_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// heroes
	this.instance_3 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.background_0_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-190.8,1599.4,1191.9);
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
	this.freeGames_mc.setTransform(580,540,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,500);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(720,360);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(80,360);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(735,535);
	this.next_btn.visible = false;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700,visible:true},0).wait(43).to({y:535},10).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(10).to({y:700},10).wait(116));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_mc.setTransform(580,300);
	this.dressupPanel_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1400,visible:true},0).wait(23).to({x:530},15).to({x:580},5).wait(30).to({x:1400},15).wait(111));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(155,300);
	this.hero_3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({x:-600,visible:true},0).wait(23).to({x:200},15).to({x:155},5).wait(35).to({x:400},15).wait(106));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(79).to({_off:false},0).to({_off:true},101).wait(20));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({alpha:1},15).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(18.8,9.7,806.2,615.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-736.2,9.7,2326.3,780.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-682.9,9.7,2214.9,780.3), new cjs.Rectangle(-629.6,9.7,2103.6,780.3), new cjs.Rectangle(-576.2,9.7,1992.3,780.3), new cjs.Rectangle(-522.9,9.7,1880.9,780.3), new cjs.Rectangle(-469.6,9.7,1769.6,780.3), new cjs.Rectangle(-416.2,9.7,1658.3,780.3), new cjs.Rectangle(-362.9,9.7,1546.9,780.3), new cjs.Rectangle(-309.6,9.7,1435.6,780.3), new cjs.Rectangle(-256.2,9.7,1324.3,780.3), new cjs.Rectangle(-202.9,9.7,1212.9,780.3), new cjs.Rectangle(-149.6,9.7,1101.6,780.3), new cjs.Rectangle(-96.2,9.7,990.3,780.3), new cjs.Rectangle(-42.9,9.7,878.9,780.3), new cjs.Rectangle(10.4,9.7,814.6,780.3), new cjs.Rectangle(63.8,9.7,761.2,780.3), new cjs.Rectangle(54.8,9.7,770.3,780.3), new cjs.Rectangle(45.8,9.7,779.2,780.3), new cjs.Rectangle(36.8,9.7,788.3,780.3), new cjs.Rectangle(27.8,9.7,797.2,780.3), new cjs.Rectangle(18.8,9.7,806.2,780.3), new cjs.Rectangle(18.8,9.7,806.2,763.8), new cjs.Rectangle(18.8,9.7,806.2,747.3), new cjs.Rectangle(18.8,9.7,806.2,730.8), new cjs.Rectangle(18.8,9.7,806.2,714.3), new cjs.Rectangle(18.8,9.7,806.2,697.8), new cjs.Rectangle(18.8,9.7,806.2,681.3), new cjs.Rectangle(18.8,9.7,806.2,664.8), new cjs.Rectangle(18.8,9.7,806.2,648.3), new cjs.Rectangle(18.8,9.7,806.2,631.8), new cjs.Rectangle(18.8,9.7,806.2,615.3), new cjs.Rectangle(18.8,9.7,808.5,617.5), new cjs.Rectangle(18.8,9.7,810.7,619.8), new cjs.Rectangle(18.8,9.7,813,622), new cjs.Rectangle(18.8,9.7,815.2,624.3), new cjs.Rectangle(18.8,9.7,817.5,626.5), new cjs.Rectangle(18.8,9.7,815.2,624.3), new cjs.Rectangle(18.8,9.7,813,622), new cjs.Rectangle(18.8,9.7,810.8,619.8), new cjs.Rectangle(18.8,9.7,808.5,617.6), new cjs.Rectangle(18.8,9.7,806.2,615.3), new cjs.Rectangle(18.8,9.7,806.3,615.3), new cjs.Rectangle(18.8,9.7,806.2,615.3), new cjs.Rectangle(18.8,9.7,806.3,615.3), rect=new cjs.Rectangle(18.8,9.7,806.2,615.3), rect, new cjs.Rectangle(18.8,9.7,806.3,615.3), new cjs.Rectangle(18.8,9.7,806.2,615.3), new cjs.Rectangle(18.8,9.7,806.3,615.3), rect=new cjs.Rectangle(18.8,9.7,806.2,615.3), rect, new cjs.Rectangle(18.8,9.7,806.2,631.8), new cjs.Rectangle(18.8,9.7,860.6,648.3), new cjs.Rectangle(18.8,9.7,915.3,664.8), new cjs.Rectangle(18.8,9.7,969.9,681.3), new cjs.Rectangle(-210,-483.7,1253.4,1191.2), new cjs.Rectangle(-210,-483.7,1308,1207.7), new cjs.Rectangle(-210,-483.7,1362.7,1224.2), new cjs.Rectangle(-210,-483.7,1417.4,1240.7), new cjs.Rectangle(-210,-483.7,1472,1257.2), new cjs.Rectangle(-210,-483.7,1526.7,1273.7), new cjs.Rectangle(-210,-483.7,1581.4,1273.8), new cjs.Rectangle(-210,-483.7,1636,1273.7), new cjs.Rectangle(-210,-483.7,1690.7,1273.8), new cjs.Rectangle(-210,-483.7,1745.4,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), rect=new cjs.Rectangle(-210,-10,1800,800), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(455,535);
	this.next_btn.visible = false;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700,visible:true},0).wait(43).to({y:535},10).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(10).to({y:700},10).wait(116));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_mc.setTransform(300,300);
	this.dressupPanel_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-500,visible:true},0).wait(23).to({x:350},15).to({x:300},5).wait(30).to({x:-500},15).wait(111));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(635,310);
	this.hero_2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1300,visible:true},0).wait(23).to({x:590},15).to({x:635},5).wait(35).to({x:395},15).wait(106));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(79).to({_off:false},0).to({_off:true},100).wait(21));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({alpha:1},15).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,30,748.6,595);
p.frameBounds = [rect, rect=new cjs.Rectangle(-780,30,2213.6,760), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-723.3,30,2109.6,760), new cjs.Rectangle(-666.6,30,2005.6,760), new cjs.Rectangle(-610,30,1901.6,760), new cjs.Rectangle(-553.3,30,1797.6,760), new cjs.Rectangle(-496.6,30,1693.6,760), new cjs.Rectangle(-440,30,1589.6,760), new cjs.Rectangle(-383.3,30,1485.6,760), new cjs.Rectangle(-326.6,30,1381.6,760), new cjs.Rectangle(-270,30,1277.6,760), new cjs.Rectangle(-213.3,30,1173.6,760), new cjs.Rectangle(-156.6,30,1069.6,760), new cjs.Rectangle(-100,30,965.6,760), new cjs.Rectangle(-43.3,30,861.6,760), new cjs.Rectangle(13.4,30,757.6,760), new cjs.Rectangle(70,30,653.6,760), new cjs.Rectangle(60,30,672.6,760), new cjs.Rectangle(50,30,691.6,760), new cjs.Rectangle(40,30,710.6,760), new cjs.Rectangle(30,30,729.6,760), new cjs.Rectangle(20,30,748.6,760), new cjs.Rectangle(20,30,748.6,743.5), new cjs.Rectangle(20,30,748.6,727), new cjs.Rectangle(20,30,748.6,710.5), new cjs.Rectangle(20,30,748.6,694), new cjs.Rectangle(20,30,748.6,677.5), new cjs.Rectangle(20,30,748.6,661), new cjs.Rectangle(20,30,748.6,644.5), new cjs.Rectangle(20,30,748.6,628), new cjs.Rectangle(20,30,748.6,611.5), new cjs.Rectangle(20,30,748.6,595), new cjs.Rectangle(20,30,748.6,597.2), new cjs.Rectangle(20,30,748.6,599.5), new cjs.Rectangle(20,30,748.6,601.7), new cjs.Rectangle(20,30,748.6,604), new cjs.Rectangle(20,30,748.6,606.2), new cjs.Rectangle(20,30,748.6,604), new cjs.Rectangle(20,30,748.6,601.7), new cjs.Rectangle(20,30,748.6,599.5), new cjs.Rectangle(20,30,748.6,597.3), rect=new cjs.Rectangle(20,30,748.6,595), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-33.3,30,802,611.5), new cjs.Rectangle(-86.6,30,855.3,628), new cjs.Rectangle(-140,30,908.6,644.5), new cjs.Rectangle(-193.3,30,962,661), new cjs.Rectangle(-246.6,-483.7,1256.7,1191.2), new cjs.Rectangle(-300,-483.7,1310,1207.7), new cjs.Rectangle(-353.3,-483.7,1363.4,1224.2), new cjs.Rectangle(-406.6,-483.7,1416.7,1240.7), new cjs.Rectangle(-460,-483.7,1470,1257.2), new cjs.Rectangle(-513.3,-483.7,1523.4,1273.7), new cjs.Rectangle(-566.6,-483.7,1576.7,1273.8), new cjs.Rectangle(-620,-483.7,1630,1273.7), new cjs.Rectangle(-673.3,-483.7,1683.4,1273.8), new cjs.Rectangle(-726.6,-483.7,1736.7,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), new cjs.Rectangle(-780,-483.7,1790,1273.8), new cjs.Rectangle(-780,-483.7,1790,1273.7), rect=new cjs.Rectangle(-780,-10,1790,800), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(735,535);
	this.next_btn.visible = false;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700,visible:true},0).wait(43).to({y:535},10).to({scaleX:1.13,scaleY:1.13},5).to({scaleX:1,scaleY:1},5).wait(10).to({y:700},10).wait(116));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_mc.setTransform(580,300);
	this.dressupPanel_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1400,visible:true},0).wait(23).to({x:540},15).to({x:580},5).wait(30).to({x:1400},15).wait(111));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(150,305);
	this.hero_1.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-600,visible:true},0).wait(23).to({x:200},15).to({x:150},5).wait(35).to({x:400},15).wait(106));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(79).to({_off:false},0).to({_off:true},100).wait(21));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({alpha:1},15).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(27.1,24.3,797.9,600.7);
p.frameBounds = [rect, new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-722.9,24.3,2312.9,765.7), new cjs.Rectangle(-722.9,24.3,2312.9,765.8), new cjs.Rectangle(-669.5,24.3,2202.2,765.7), new cjs.Rectangle(-616.2,24.3,2091.6,765.8), new cjs.Rectangle(-562.9,24.3,1980.9,765.7), new cjs.Rectangle(-509.5,24.3,1870.3,765.8), new cjs.Rectangle(-456.2,24.3,1759.6,765.7), new cjs.Rectangle(-402.9,24.3,1648.9,765.8), new cjs.Rectangle(-349.5,24.3,1538.2,765.7), new cjs.Rectangle(-296.2,24.3,1427.6,765.8), new cjs.Rectangle(-242.9,24.3,1316.9,765.7), new cjs.Rectangle(-189.5,24.3,1206.2,765.8), new cjs.Rectangle(-136.2,24.3,1095.6,765.7), new cjs.Rectangle(-82.9,24.3,984.9,765.8), new cjs.Rectangle(-29.5,24.3,874.2,765.7), new cjs.Rectangle(23.8,24.3,801.3,765.8), new cjs.Rectangle(77.1,24.3,747.9,765.7), new cjs.Rectangle(67.1,24.3,757.9,765.8), new cjs.Rectangle(57.1,24.3,767.9,765.7), new cjs.Rectangle(47.1,24.3,777.9,765.8), new cjs.Rectangle(37.1,24.3,787.9,765.7), new cjs.Rectangle(27.1,24.3,797.9,765.7), new cjs.Rectangle(27.1,24.3,797.9,749.2), new cjs.Rectangle(27.1,24.3,797.9,732.7), new cjs.Rectangle(27.1,24.3,797.9,716.2), new cjs.Rectangle(27.1,24.3,797.9,699.7), new cjs.Rectangle(27.1,24.3,797.9,683.2), new cjs.Rectangle(27.1,24.3,797.9,666.7), new cjs.Rectangle(27.1,24.3,797.9,650.2), new cjs.Rectangle(27.1,24.3,797.9,633.7), new cjs.Rectangle(27.1,24.3,797.9,617.2), new cjs.Rectangle(27.1,24.3,797.9,600.7), new cjs.Rectangle(27.1,24.3,800.1,603), new cjs.Rectangle(27.1,24.3,802.4,605.2), new cjs.Rectangle(27.1,24.3,804.6,607.5), new cjs.Rectangle(27.1,24.3,806.9,609.7), new cjs.Rectangle(27.1,24.3,809.1,612), new cjs.Rectangle(27.1,24.3,806.9,609.7), new cjs.Rectangle(27.1,24.3,804.6,607.5), new cjs.Rectangle(27.1,24.3,802.4,605.3), new cjs.Rectangle(27.1,24.3,800.2,603), new cjs.Rectangle(27.1,24.3,797.9,600.7), new cjs.Rectangle(27.1,24.3,797.9,600.8), new cjs.Rectangle(27.1,24.3,797.9,600.7), new cjs.Rectangle(27.1,24.3,797.9,600.8), rect=new cjs.Rectangle(27.1,24.3,797.9,600.7), rect, new cjs.Rectangle(27.1,24.3,797.9,600.8), new cjs.Rectangle(27.1,24.3,797.9,600.7), new cjs.Rectangle(27.1,24.3,797.9,600.8), rect=new cjs.Rectangle(27.1,24.3,797.9,600.7), rect, new cjs.Rectangle(27.1,24.3,797.9,617.2), new cjs.Rectangle(27.1,24.3,852.3,633.7), new cjs.Rectangle(27.1,24.3,906.9,650.2), new cjs.Rectangle(27.1,24.3,961.6,666.7), new cjs.Rectangle(-210,-483.7,1253.4,1191.2), new cjs.Rectangle(-210,-483.7,1308,1207.7), new cjs.Rectangle(-210,-483.7,1362.7,1224.2), new cjs.Rectangle(-210,-483.7,1417.4,1240.7), new cjs.Rectangle(-210,-483.7,1472,1257.2), new cjs.Rectangle(-210,-483.7,1526.7,1273.7), new cjs.Rectangle(-210,-483.7,1581.4,1273.8), new cjs.Rectangle(-210,-483.7,1636,1273.7), new cjs.Rectangle(-210,-483.7,1690.7,1273.8), new cjs.Rectangle(-210,-483.7,1745.4,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), new cjs.Rectangle(-210,-483.7,1800,1273.8), new cjs.Rectangle(-210,-483.7,1800,1273.7), rect=new cjs.Rectangle(-210,-10,1800,800), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-260,760,510), rect, rect, rect, new cjs.Rectangle(-340,-160,680,320)];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110,200);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110,200);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-150,800,700);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110,200);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110,200);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-150,800,700);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110,200);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110,200);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-150,800,700);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// frame
	this.instance = new lib.frame_game_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.background_1_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1272.7,1161.9);
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
p.nominalBounds = rect = new cjs.Rectangle(18.8,-329.4,796.3,944.4);
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
p.nominalBounds = rect = new cjs.Rectangle(20,-329.4,748.6,944.4);
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
p.nominalBounds = rect = new cjs.Rectangle(27.1,-329.4,787.9,944.4);
p.frameBounds = [rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,500);
	this.next_btn.visible = false;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700,visible:true},0).wait(68).to({scaleX:1.13,scaleY:1.13,y:450},10).to({scaleX:1,scaleY:1,y:500},5).wait(10).to({y:700},10).wait(96));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_mc.setTransform(400,300);
	this.dressupPanel_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:800,visible:true},0).wait(48).to({y:250},15).to({y:300},5).wait(40).to({y:800},15).wait(76));

	// decor
	this.instance = new lib.decor_background_0_mc();
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({visible:true},0).wait(93).to({alpha:0.012},14).to({_off:true},1).wait(91));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(405,300);
	this.hero_3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({x:1200,visible:true},0).wait(23).to({x:350},20).to({x:405},5).wait(151));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(109).to({_off:false},0).to({_off:true},70).wait(21));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({alpha:1},15).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,850);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1536.8,1350), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1494.3,1350), new cjs.Rectangle(-200,0,1451.8,1350), new cjs.Rectangle(-200,0,1409.3,1350), new cjs.Rectangle(-200,0,1366.8,1350), new cjs.Rectangle(-200,0,1324.3,1350), new cjs.Rectangle(-200,0,1281.8,1350), new cjs.Rectangle(-200,0,1239.3,1350), rect=new cjs.Rectangle(-200,0,1200,1350), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,1313.4), new cjs.Rectangle(-200,0,1200,1276.7), new cjs.Rectangle(-200,0,1200,1240), new cjs.Rectangle(-200,0,1200,1203.4), new cjs.Rectangle(-200,0,1200,1166.7), new cjs.Rectangle(-200,0,1200,1130), new cjs.Rectangle(-200,0,1200,1093.4), new cjs.Rectangle(-200,0,1200,1056.7), new cjs.Rectangle(-200,0,1200,1020), new cjs.Rectangle(-200,0,1200,983.4), new cjs.Rectangle(-200,0,1200,946.7), new cjs.Rectangle(-200,0,1200,910), new cjs.Rectangle(-200,0,1200,873.4), new cjs.Rectangle(-200,0,1200,836.7), new cjs.Rectangle(-200,0,1200,800), new cjs.Rectangle(-200,0,1200,810), new cjs.Rectangle(-200,0,1200,820), new cjs.Rectangle(-200,0,1200,830), new cjs.Rectangle(-200,0,1200,840), rect=new cjs.Rectangle(-200,0,1200,850), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-483.7,1220,1333.8), new cjs.Rectangle(-210,-483.7,1220,1367.1), new cjs.Rectangle(-210,-483.7,1220,1400.4), new cjs.Rectangle(-210,-483.7,1220,1433.8), new cjs.Rectangle(-210,-483.7,1220,1467.1), new cjs.Rectangle(-210,-483.7,1220,1500.4), new cjs.Rectangle(-210,-483.7,1220,1533.8), new cjs.Rectangle(-210,-483.7,1220,1567.1), new cjs.Rectangle(-210,-483.7,1220,1600.4), new cjs.Rectangle(-210,-483.7,1220,1633.8), new cjs.Rectangle(-210,-483.7,1220,1667.1), new cjs.Rectangle(-210,-483.7,1220,1700.4), new cjs.Rectangle(-210,-483.7,1220,1733.8), new cjs.Rectangle(-210,-483.7,1220,1767.1), new cjs.Rectangle(-210,-483.7,1220,1800.4), rect=new cjs.Rectangle(-210,-483.7,1220,1833.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,1360), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,500);
	this.next_btn.visible = false;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700,visible:true},0).wait(68).to({scaleX:1.13,scaleY:1.13,y:450},10).to({scaleX:1,scaleY:1,y:500},5).wait(10).to({y:700},10).wait(96));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(400,300);
	this.dressupPanel_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:800,visible:true},0).wait(48).to({y:250},15).to({y:300},5).wait(40).to({y:800},15).wait(76));

	// decor
	this.instance = new lib.decor_background_0_mc();
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({visible:true},0).wait(93).to({alpha:0.012},14).to({_off:true},1).wait(91));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(400,310);
	this.hero_2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1200,visible:true},0).wait(23).to({x:350},20).to({x:400},5).wait(151));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(109).to({_off:false},0).to({_off:true},70).wait(21));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({alpha:1},15).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,850);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1533.6,1350), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1491.1,1350), new cjs.Rectangle(-200,0,1448.6,1350), new cjs.Rectangle(-200,0,1406.1,1350), new cjs.Rectangle(-200,0,1363.6,1350), new cjs.Rectangle(-200,0,1321.1,1350), new cjs.Rectangle(-200,0,1278.6,1350), new cjs.Rectangle(-200,0,1236.1,1350), rect=new cjs.Rectangle(-200,0,1200,1350), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,1313.4), new cjs.Rectangle(-200,0,1200,1276.7), new cjs.Rectangle(-200,0,1200,1240), new cjs.Rectangle(-200,0,1200,1203.4), new cjs.Rectangle(-200,0,1200,1166.7), new cjs.Rectangle(-200,0,1200,1130), new cjs.Rectangle(-200,0,1200,1093.4), new cjs.Rectangle(-200,0,1200,1056.7), new cjs.Rectangle(-200,0,1200,1020), new cjs.Rectangle(-200,0,1200,983.4), new cjs.Rectangle(-200,0,1200,946.7), new cjs.Rectangle(-200,0,1200,910), new cjs.Rectangle(-200,0,1200,873.4), new cjs.Rectangle(-200,0,1200,836.7), new cjs.Rectangle(-200,0,1200,800), new cjs.Rectangle(-200,0,1200,810), new cjs.Rectangle(-200,0,1200,820), new cjs.Rectangle(-200,0,1200,830), new cjs.Rectangle(-200,0,1200,840), rect=new cjs.Rectangle(-200,0,1200,850), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-483.7,1220,1333.8), new cjs.Rectangle(-210,-483.7,1220,1367.1), new cjs.Rectangle(-210,-483.7,1220,1400.4), new cjs.Rectangle(-210,-483.7,1220,1433.8), new cjs.Rectangle(-210,-483.7,1220,1467.1), new cjs.Rectangle(-210,-483.7,1220,1500.4), new cjs.Rectangle(-210,-483.7,1220,1533.8), new cjs.Rectangle(-210,-483.7,1220,1567.1), new cjs.Rectangle(-210,-483.7,1220,1600.4), new cjs.Rectangle(-210,-483.7,1220,1633.8), new cjs.Rectangle(-210,-483.7,1220,1667.1), new cjs.Rectangle(-210,-483.7,1220,1700.4), new cjs.Rectangle(-210,-483.7,1220,1733.8), new cjs.Rectangle(-210,-483.7,1220,1767.1), new cjs.Rectangle(-210,-483.7,1220,1800.4), rect=new cjs.Rectangle(-210,-483.7,1220,1833.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,1360), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":209});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,500);
	this.next_btn.visible = false;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700,visible:true},0).wait(68).to({scaleX:1.13,scaleY:1.13,y:450},10).to({scaleX:1,scaleY:1,y:500},5).wait(10).to({y:700},10).wait(106));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_mc.setTransform(400,300);
	this.dressupPanel_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:800,visible:true},0).wait(48).to({y:250},15).to({y:300},5).wait(40).to({y:800},15).wait(86));

	// decor
	this.instance = new lib.decor_background_0_mc();
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({visible:true},0).wait(93).to({alpha:0.012},14).to({_off:true},1).wait(101));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(400,310);
	this.hero_1.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-400,visible:true},0).wait(23).to({x:450},21).to({x:400},4).wait(161));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(109).to({_off:false},0).to({_off:true},81).wait(20));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({alpha:1},15).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,850);
p.frameBounds = [rect, rect=new cjs.Rectangle(-522.9,0,1522.9,1350), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-482.4,0,1482.4,1350), new cjs.Rectangle(-441.9,0,1442,1350), new cjs.Rectangle(-401.4,0,1401.5,1350), new cjs.Rectangle(-361,0,1361,1350), new cjs.Rectangle(-320.5,0,1320.5,1350), new cjs.Rectangle(-280,0,1280.1,1350), new cjs.Rectangle(-239.5,0,1239.6,1350), rect=new cjs.Rectangle(-200,0,1200,1350), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,1313.4), new cjs.Rectangle(-200,0,1200,1276.7), new cjs.Rectangle(-200,0,1200,1240), new cjs.Rectangle(-200,0,1200,1203.4), new cjs.Rectangle(-200,0,1200,1166.7), new cjs.Rectangle(-200,0,1200,1130), new cjs.Rectangle(-200,0,1200,1093.4), new cjs.Rectangle(-200,0,1200,1056.7), new cjs.Rectangle(-200,0,1200,1020), new cjs.Rectangle(-200,0,1200,983.4), new cjs.Rectangle(-200,0,1200,946.7), new cjs.Rectangle(-200,0,1200,910), new cjs.Rectangle(-200,0,1200,873.4), new cjs.Rectangle(-200,0,1200,836.7), new cjs.Rectangle(-200,0,1200,800), new cjs.Rectangle(-200,0,1200,810), new cjs.Rectangle(-200,0,1200,820), new cjs.Rectangle(-200,0,1200,830), new cjs.Rectangle(-200,0,1200,840), rect=new cjs.Rectangle(-200,0,1200,850), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-483.7,1220,1333.8), new cjs.Rectangle(-210,-483.7,1220,1367.1), new cjs.Rectangle(-210,-483.7,1220,1400.4), new cjs.Rectangle(-210,-483.7,1220,1433.8), new cjs.Rectangle(-210,-483.7,1220,1467.1), new cjs.Rectangle(-210,-483.7,1220,1500.4), new cjs.Rectangle(-210,-483.7,1220,1533.8), new cjs.Rectangle(-210,-483.7,1220,1567.1), new cjs.Rectangle(-210,-483.7,1220,1600.4), new cjs.Rectangle(-210,-483.7,1220,1633.8), new cjs.Rectangle(-210,-483.7,1220,1667.1), new cjs.Rectangle(-210,-483.7,1220,1700.4), new cjs.Rectangle(-210,-483.7,1220,1733.8), new cjs.Rectangle(-210,-483.7,1220,1767.1), new cjs.Rectangle(-210,-483.7,1220,1800.4), rect=new cjs.Rectangle(-210,-483.7,1220,1833.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,1360), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_0_img();
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
	this.fullScreen_mc.setTransform(760.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_0_img();
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

	// bg
	this.instance = new lib.background_0_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,1179.4);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,1179.4);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,1179.4);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_0_img();
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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_0_img();
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
	this.instance = new lib.background_0_img();
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

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();
	this.instance_8.setTransform(0,-0.4,1,1,0,0,0,0,-0.4);

	this.instance_9 = new lib.LocationScreen_6();
	this.instance_9.setTransform(0,-0.4,1,1,0,0,0,0,-0.4);

	this.instance_10 = new lib.RedirectScreen();

	this.instance_11 = new lib.ResultScreen();

	this.instance_12 = new lib.InstructionScreen();

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,80);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_16},{t:this.instance_15},{t:this.gravity_explosion_comp},{t:this.instance_14},{t:this.instance_13},{t:this.next_btn}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[]},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-190.8,1599.4,1191.9), new cjs.Rectangle(-262.6,-280.8,1272.7,1161.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(0,-10,810,440), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-200,-320,1200,1240), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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