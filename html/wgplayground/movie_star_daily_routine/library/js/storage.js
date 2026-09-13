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
		{src:"library/images/filmstrip_img.png", id:"filmstrip_img"},
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
		{src:"library/images/storage_atlas_25.png", id:"storage_atlas_25"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1200,600],[0,602,800,600]]},
		{name:"storage_atlas_7", frames: [[0,0,600,600],[602,546,581,555],[602,0,617,544],[0,602,560,560]]},
		{name:"storage_atlas_8", frames: [[402,742,468,323],[0,0,558,538],[0,540,1200,200],[0,742,400,400],[560,0,387,484]]},
		{name:"storage_atlas_9", frames: [[0,0,500,300],[502,0,440,340],[0,302,440,340],[0,644,440,340],[442,342,440,340],[442,684,440,340]]},
		{name:"storage_atlas_10", frames: [[442,0,440,340],[0,342,440,340],[0,684,440,340],[0,0,440,340],[442,342,440,340],[442,684,440,340]]},
		{name:"storage_atlas_11", frames: [[644,724,319,434],[884,0,371,402],[965,404,294,447],[0,0,440,340],[442,0,440,340],[0,342,440,340],[382,724,260,540],[442,342,380,380],[0,684,380,380],[965,853,310,398]]},
		{name:"storage_atlas_12", frames: [[234,759,190,478],[451,0,335,363],[305,365,284,392],[426,834,300,300],[728,991,300,300],[838,729,380,260],[0,0,449,271],[0,273,303,392],[788,0,296,407],[0,667,232,415],[591,409,245,423],[838,409,320,318]]},
		{name:"storage_atlas_13", frames: [[302,0,300,300],[604,0,300,300],[568,302,176,467],[0,0,300,300],[0,302,300,300],[0,604,300,300],[0,906,300,300],[302,302,264,328],[906,0,233,383],[302,771,660,120],[302,893,660,120],[866,1015,280,280],[964,667,280,280],[964,385,280,280],[584,1015,280,280],[302,1015,280,280]]},
		{name:"storage_atlas_14", frames: [[0,564,280,280],[0,0,280,280],[0,282,280,280],[0,846,280,280],[282,0,280,280],[564,282,280,280],[564,846,280,280],[564,0,280,280],[282,564,280,280],[846,0,280,280],[846,564,280,280],[282,282,280,280],[282,846,280,280],[846,282,280,280],[564,564,280,280],[846,846,280,280]]},
		{name:"storage_atlas_15", frames: [[0,0,280,280],[0,282,280,280],[564,846,280,280],[846,282,280,280],[0,564,280,280],[0,846,280,280],[282,0,280,280],[846,0,280,280],[282,282,280,280],[282,564,280,280],[846,564,280,280],[282,846,280,280],[564,0,280,280],[564,282,280,280],[564,564,280,280],[846,846,280,280]]},
		{name:"storage_atlas_16", frames: [[282,564,280,280],[564,0,280,280],[846,846,280,280],[846,282,280,280],[0,282,280,280],[846,0,280,280],[282,282,280,280],[282,846,280,280],[564,282,280,280],[564,564,280,280],[0,0,280,280],[564,846,280,280],[846,564,280,280],[0,564,280,280],[0,846,280,280],[282,0,280,280]]},
		{name:"storage_atlas_17", frames: [[846,846,280,280],[564,564,280,280],[564,846,280,280],[846,564,280,280],[0,846,280,280],[282,0,280,280],[564,0,280,280],[846,0,280,280],[0,0,280,280],[0,282,280,280],[282,282,280,280],[282,564,280,280],[0,564,280,280],[282,846,280,280],[564,282,280,280],[846,282,280,280]]},
		{name:"storage_atlas_18", frames: [[0,0,280,280],[874,1092,380,180],[0,282,245,305],[0,589,245,305],[220,896,270,255],[0,896,218,322],[492,0,380,180],[874,0,380,180],[874,182,380,180],[492,182,380,180],[247,364,380,180],[874,728,380,180],[492,1092,380,180],[247,546,380,180],[629,364,380,180],[492,728,380,180],[492,910,380,180],[874,910,380,180],[629,546,380,180]]},
		{name:"storage_atlas_19", frames: [[0,392,260,260],[346,760,272,235],[832,846,220,280],[707,564,220,280],[929,564,220,280],[673,0,220,280],[1054,846,220,280],[895,0,220,280],[1054,282,220,280],[832,282,220,280],[0,654,172,392],[176,0,182,358],[174,654,170,383],[509,0,162,391],[346,360,161,398],[0,0,174,390],[509,393,196,323],[569,997,261,242],[0,1048,265,250],[267,1039,300,215]]},
		{name:"storage_atlas_20", frames: [[888,390,240,240],[444,564,184,303],[0,282,220,280],[222,282,220,280],[444,0,220,280],[222,564,220,280],[0,564,220,280],[666,0,220,280],[0,846,220,280],[222,0,220,280],[888,0,220,280],[222,846,220,280],[444,282,220,280],[666,282,220,280],[0,0,220,280],[1110,0,157,388],[630,564,203,257],[444,934,230,210],[835,632,230,210],[676,934,230,210],[908,934,230,210],[1067,632,230,210],[444,869,800,63]]},
		{name:"storage_atlas_21", frames: [[0,636,230,210],[0,212,230,210],[0,0,230,210],[0,848,230,210],[464,212,230,210],[696,0,230,210],[0,1060,230,210],[232,0,230,210],[464,0,230,210],[928,0,230,210],[0,424,230,210],[232,212,230,210],[696,212,230,210],[928,212,230,210],[464,424,230,210],[696,636,230,210],[232,424,230,210],[696,424,230,210],[232,636,230,210],[232,848,230,210],[232,1060,230,210],[928,424,230,210],[928,636,230,210],[464,636,230,210],[464,848,230,210],[464,1060,230,210],[696,848,230,210],[696,1060,230,210],[928,848,230,210]]},
		{name:"storage_atlas_22", frames: [[0,0,159,295],[161,0,161,287],[0,297,161,287],[163,289,181,250],[968,910,157,261],[1138,292,147,284],[0,586,168,271],[1138,0,148,290],[324,0,319,136],[412,502,240,180],[588,138,240,180],[588,320,240,180],[242,905,240,180],[968,728,240,180],[830,182,240,180],[484,728,240,180],[726,910,240,180],[726,728,240,180],[896,546,240,180],[726,1092,240,180],[830,364,240,180],[484,910,240,180],[242,1087,240,180],[830,0,240,180],[484,1092,240,180],[654,546,240,180],[346,320,240,180],[0,859,240,180],[242,723,240,180],[346,138,240,180],[0,1041,240,180],[170,541,240,180]]},
		{name:"storage_atlas_23", frames: [[170,148,190,190],[535,536,180,180],[979,0,190,190],[863,382,136,229],[535,354,180,180],[0,0,271,146],[787,0,190,190],[660,959,108,225],[0,148,168,233],[851,797,116,215],[770,1014,118,200],[192,696,141,242],[1001,372,126,247],[1043,1056,101,233],[890,1056,151,156],[0,383,150,245],[1171,741,108,213],[362,122,166,213],[192,479,159,215],[1171,0,112,256],[1129,554,152,185],[717,382,144,224],[1146,1056,154,151],[530,192,220,160],[0,630,190,190],[381,1025,176,139],[717,715,340,80],[752,192,186,188],[940,192,194,178],[192,1122,187,171],[969,797,187,132],[335,696,186,159],[689,797,160,160],[0,822,190,190],[595,0,190,190],[0,1014,190,190],[353,479,180,180],[192,940,180,180],[170,340,259,137],[717,613,277,100],[381,1199,264,87],[576,900,82,297],[374,900,200,123],[969,931,200,123],[273,0,320,120],[1129,372,169,180],[523,718,164,180]]},
		{name:"storage_atlas_24", frames: [[662,743,120,120],[540,865,120,120],[784,817,120,120],[0,770,128,116],[0,356,120,187],[634,992,100,100],[1077,1049,100,100],[1190,947,100,100],[736,1083,100,100],[1179,1049,100,100],[873,981,100,100],[975,981,100,100],[906,817,131,100],[301,476,100,198],[799,695,120,120],[681,323,192,94],[403,521,130,78],[368,967,162,83],[0,888,234,62],[921,573,235,50],[540,743,120,120],[296,845,120,120],[388,42,119,188],[1059,0,152,105],[748,211,125,100],[418,845,120,120],[0,952,120,120],[404,354,129,165],[0,1167,113,109],[492,1139,115,84],[244,975,122,112],[115,1192,144,79],[933,451,142,80],[0,1074,148,91],[535,499,152,120],[662,865,107,125],[661,42,122,167],[1059,107,129,123],[94,597,148,126],[266,193,114,199],[1103,703,96,105],[274,1089,71,164],[266,0,120,191],[347,1139,143,69],[368,1052,147,85],[1088,873,139,72],[1158,513,139,73],[1103,625,140,76],[634,1094,80,124],[122,952,120,120],[1077,451,180,60],[921,625,180,60],[921,749,180,60],[921,687,180,60],[906,919,180,60],[1039,811,180,60],[122,394,280,80],[1059,300,171,89],[403,621,150,100],[0,545,92,223],[564,211,182,110],[535,354,144,143],[785,42,220,80],[1201,703,99,100],[509,42,150,142],[1213,0,50,210],[244,676,50,297],[382,232,180,120],[122,476,177,119],[1007,0,50,330],[937,124,60,234],[875,124,60,269],[811,451,120,120],[681,419,560,30],[532,987,100,127],[0,89,264,87],[0,178,264,87],[0,0,264,87],[0,267,264,87],[388,0,560,40],[965,1151,125,77],[838,1162,125,77],[838,1083,125,77],[347,1210,125,77],[1059,232,235,66],[689,451,120,120],[418,723,120,120],[677,621,120,120],[555,621,120,120],[799,573,120,120],[296,723,120,120],[965,1230,240,40],[474,1225,240,40],[716,1241,240,40],[130,725,98,138],[150,1089,122,101],[1088,947,100,100],[771,981,100,100]]},
		{name:"storage_atlas_25", frames: [[793,114,90,90],[298,242,20,20],[701,114,90,90],[242,42,129,74],[292,501,30,121],[721,381,91,60],[617,42,82,108],[567,301,80,80],[803,510,50,50],[417,512,50,50],[716,293,234,28],[193,164,238,34],[500,457,90,50],[592,461,90,50],[274,242,22,19],[33,383,84,64],[190,354,83,70],[633,206,81,93],[570,513,48,48],[620,513,48,48],[996,439,24,27],[85,303,80,78],[324,520,73,29],[649,381,70,78],[349,450,66,68],[33,449,81,59],[0,84,147,59],[275,354,73,78],[533,42,82,108],[885,114,80,101],[350,378,78,70],[190,426,78,65],[193,242,79,85],[567,383,71,72],[430,437,68,73],[0,510,70,56],[395,206,142,56],[874,506,66,64],[274,264,220,30],[324,551,40,40],[94,145,50,156],[193,118,145,38],[190,501,100,43],[804,217,100,73],[684,461,35,120],[952,292,70,90],[716,206,86,85],[430,388,110,47],[373,42,78,120],[453,42,78,120],[193,84,32,32],[763,323,112,56],[649,323,112,56],[274,296,115,56],[968,0,43,203],[149,84,42,202],[119,383,30,148],[72,510,40,55],[114,533,40,43],[955,42,10,11],[496,292,69,94],[906,217,100,73],[814,381,57,60],[919,323,23,38],[340,118,31,31],[635,152,50,50],[877,323,40,147],[366,551,40,40],[763,562,40,40],[570,563,40,40],[408,564,40,40],[805,562,40,40],[612,563,40,40],[721,550,40,40],[190,546,40,40],[232,546,40,40],[450,564,40,40],[721,510,80,38],[167,288,21,291],[33,234,50,126],[1013,0,9,9],[496,264,21,23],[391,296,80,80],[721,443,75,65],[919,439,75,65],[270,434,77,65],[798,443,74,65],[942,506,71,59],[828,42,125,70],[500,509,68,59],[701,42,125,70],[0,234,31,223],[484,0,240,40],[0,0,240,40],[242,0,240,40],[726,0,240,40],[0,42,240,40],[433,164,200,40],[193,200,200,40],[0,145,92,87],[539,206,92,84],[1008,205,14,15],[919,384,100,53]]}
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
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_forward_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_cell_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_speech_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_speech_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_speech_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_speech_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_speech_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.body0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body_cinema_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.body_sport_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_sport_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_sport_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_sport_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_sport_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottom_sport_5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_sport_6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.brush1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.brush3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.check_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.check_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.check_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.check_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.check_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.check_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.closet1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.comics1_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.comics1_chair_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.comics1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.comics1_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.comics1_hand0_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(14);
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
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.drops1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.drops2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.drops3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.drops4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.emo1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.emo2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.emo3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows0_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eyes0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyes0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyes0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.facemask1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.facemask2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fata_back_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fata_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.filmstrip_img = function() {
	this.initialize(img.filmstrip_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,2200);


(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.finger_hero_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.forward_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.fringe0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fringe_sport1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.fringe_sport2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.fringe_sport3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.fringe_sport4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.fringe_sport5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.fringe_sport6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hair0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hair_sport1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hair_sport3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hair_sport5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hair_sport6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hand_cinema_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.head0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_glasses_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_hair8_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero_cinema_shoes6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress2b_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress4b_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_dress9b_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero_rc_shoes6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hint_find_panel_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hint_find_panel_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.item1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.item1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.item1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.item1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.item1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.item1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.item1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.item2_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.item2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.item2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.item2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.item2_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.item2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.item2_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.item2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.item2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.kap1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.kap2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lens_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lens_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.lips0defect_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.lipstik1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.lipstik2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.lipstik3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.patch_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.pen_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.pinc_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.podvodka_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.podvodka_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.podvodka_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.podvodka_4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.pointing_finger_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.prisch_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.rastr4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.rod_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_23_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_24_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_25_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_26_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_27_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_28_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_29_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_30_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_31_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_32_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_33_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.shadows1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.shelf_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.shoes_sport6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.sinyaki_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.skin_defect1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.skin_defect2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.sportbag_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.spray_water_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.stick_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.table_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.thermal_waterani_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.tin_facemask1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.tin_facemask2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.title_1_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_1_de_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_1_es_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_1_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_1_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_1_id_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_1_it_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_1_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_1_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_1_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_1_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_2_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_2_de_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_2_es_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_2_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_2_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_2_id_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_2_it_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_2_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_2_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_2_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_2_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_3_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_3_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_3_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_3_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_3_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_3_id_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_3_it_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_3_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_3_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_3_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_3_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_4_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_4_de_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_4_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_4_es_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_4_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_4_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_4_id_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_4_it_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_4_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_4_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_4_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_4_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_4_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_5_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_5_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_5_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_5_es_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_5_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_5_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_5_id_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_5_it_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_5_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_5_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_5_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_5_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_5_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.top_sport_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.top_sport_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.top_sport_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.top_sport_4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.top_sport_5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.top_sport_6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.towel_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.volos_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.zacolka_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-130,-44,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-44,260,97.5);
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


(lib.zacolka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zacolka_img();
	this.instance.setTransform(-50,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-26.5,100,53);
p.frameBounds = [rect];


(lib.wardrobe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_img();
	this.instance.setTransform(-280,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-280,560,560);
p.frameBounds = [rect];


(lib.volos_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.volos_img();
	this.instance.setTransform(-7,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7,-7.5,14,15);
p.frameBounds = [rect];


(lib.ts6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_sport_6_img();
	this.instance.setTransform(-86.9,-31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.9,-59.8,164,208.6);
p.frameBounds = [rect];


(lib.ts5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_sport_5_img();
	this.instance.setTransform(-65.9,-32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.9,-59.8,122,128.6);
p.frameBounds = [rect];


(lib.ts4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_sport_4_img();
	this.instance.setTransform(-94,-38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-59.8,169,201.6);
p.frameBounds = [rect];


(lib.ts3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_sport_3_img();
	this.instance.setTransform(-43.9,-24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.9,-59.8,97,119.6);
p.frameBounds = [rect];


(lib.ts2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_sport_2_img();
	this.instance.setTransform(-53.9,-29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.9,-59.8,98,168.6);
p.frameBounds = [rect];


(lib.ts1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_sport_1_img();
	this.instance.setTransform(-43,-27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.9,-59.8,97.9,119.6);
p.frameBounds = [rect];


(lib.towel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.towel_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,387,484);
p.frameBounds = [rect];


(lib.top_sport_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.top_sport_1_img();
	this.instance.setTransform(-46,-43.5);

	this.instance_1 = new lib.top_sport_2_img();
	this.instance_1.setTransform(-50,-43);

	this.instance_2 = new lib.top_sport_3_img();
	this.instance_2.setTransform(-46.5,-43.5);

	this.instance_3 = new lib.top_sport_4_img();
	this.instance_3.setTransform(-87.9,-44.5);

	this.instance_4 = new lib.top_sport_5_img();
	this.instance_4.setTransform(-60.4,-44);

	this.instance_5 = new lib.top_sport_6_img();
	this.instance_5.setTransform(-82.4,-44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-43.5,92,87);
p.frameBounds = [rect, new cjs.Rectangle(-50,-43,98,138), new cjs.Rectangle(-46.5,-43.5,92,84), new cjs.Rectangle(-87.9,-44.5,169,180), new cjs.Rectangle(-60.4,-44,122,101), new cjs.Rectangle(-82.4,-44,164,180)];


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


(lib.tin_facemask2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tin_facemask2_img();
	this.instance.setTransform(-100,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-61.5,200,123);
p.frameBounds = [rect];


(lib.tin_facemask1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tin_facemask1_img();
	this.instance.setTransform(-100,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-61.5,200,123);
p.frameBounds = [rect];


(lib.thermal_waterani_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.thermal_waterani_img();
	this.instance.setTransform(0.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,1.3,82,297);
p.frameBounds = [rect];


(lib.table_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.table_img();
	this.instance.setTransform(-400,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-31.5,800,63);
p.frameBounds = [rect];


(lib.stick2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.kap2_img();
	this.instance.setTransform(-21.1,-111.8,0.579,0.579);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.stick_img();
	this.instance_1.setTransform(-15.5,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.1,-111.8,45.2,223.4);
p.frameBounds = [rect];


(lib.stick1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.kap1_img();
	this.instance.setTransform(-21.1,-111.8,0.579,0.579);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.stick_img();
	this.instance_1.setTransform(-15.5,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.1,-111.8,45.2,223.4);
p.frameBounds = [rect];


(lib.spray_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spray_water_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,320,318);
p.frameBounds = [rect];


(lib.sportbag_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sportbag_img();
	this.instance.setTransform(-150,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-107.5,300,215);
p.frameBounds = [rect];


(lib.skin_defect2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skin_defect2_img();
	this.instance.setTransform(-109,-161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-161,218,322);
p.frameBounds = [rect];


(lib.skin_defect1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skin_defect1_img();
	this.instance.setTransform(-155,-199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-199,310,398);
p.frameBounds = [rect];


(lib.sinyaki_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sinyaki_img();
	this.instance.setTransform(-117.5,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.5,-33,235,66);
p.frameBounds = [rect];


(lib.shoes_sport_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shoes_sport1_img();
	this.instance.setTransform(-62.5,-38.5);

	this.instance_1 = new lib.shoes_sport2_img();
	this.instance_1.setTransform(-62.5,-38.5);

	this.instance_2 = new lib.shoes_sport3_img();
	this.instance_2.setTransform(-62.5,-38.5);

	this.instance_3 = new lib.shoes_sport4_img();
	this.instance_3.setTransform(-62.5,-38.5);

	this.instance_4 = new lib.shoes_sport5_img();
	this.instance_4.setTransform(-61.5,-29.5);

	this.instance_5 = new lib.shoes_sport6_img();
	this.instance_5.setTransform(-61.5,-29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-38.5,125,77);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-61.5,-29.5,125,70), rect, null];


(lib.shoes_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_rc_shoes6_2_img();
	this.instance.setTransform(-33,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBGPIAAseIODAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-40,90,80);
p.frameBounds = [rect];


(lib.shoes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_cinema_shoes6_2_img();
	this.instance.setTransform(-41,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnaJXIAAyuIO1AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-60,95,120);
p.frameBounds = [rect];


(lib.shoes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_sport6_2_img();
	this.instance.setTransform(-34,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shoes_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_rc_shoes5_2_img();
	this.instance.setTransform(-35,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBGPIAAseIODAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-40,90,80);
p.frameBounds = [rect];


(lib.shoes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_cinema_shoes5_2_img();
	this.instance.setTransform(-54,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AhyQvIj9iiIj789IL3iwMAHeAggIhmChg");
	this.shape.setTransform(-2.9,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-113.8,124,224.4);
p.frameBounds = [rect];


(lib.shoes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_sport5_2_img();
	this.instance.setTransform(-36,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shoes_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_rc_shoes4_2_img();
	this.instance.setTransform(-34,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHzIAAvmIODAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-50,90,100);
p.frameBounds = [rect];


(lib.shoes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_cinema_shoes4_2_img();
	this.instance.setTransform(-37,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHBIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shoes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_sport4_2_img();
	this.instance.setTransform(-37,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shoes_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_rc_shoes3_2_img();
	this.instance.setTransform(-36,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHzIAAvmIODAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-50,90,100);
p.frameBounds = [rect];


(lib.shoes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_cinema_shoes3_2_img();
	this.instance.setTransform(-41,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBEsIAApXIODAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.shoes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_sport3_2_img();
	this.instance.setTransform(-39,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shoes_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_rc_shoes2_2_img();
	this.instance.setTransform(-40,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHzIAAvmIODAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-50,90,100);
p.frameBounds = [rect];


(lib.shoes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_cinema_shoes2_2_img();
	this.instance.setTransform(-33,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHBIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shoes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_sport2_2_img();
	this.instance.setTransform(-38,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shoes_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_rc_shoes1_2_img();
	this.instance.setTransform(-39,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBGPIAAseIODAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-40,90,80);
p.frameBounds = [rect];


(lib.shoes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_cinema_shoes1_2_img();
	this.instance.setTransform(-35,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHBIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shoes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_sport1_2_img();
	this.instance.setTransform(-38,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shelf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_img();
	this.instance.setTransform(-280,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-20,560,40);
p.frameBounds = [rect];


(lib.shadows5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows5_img();
	this.instance.setTransform(-132,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132,-43.5,264,87);
p.frameBounds = [rect];


(lib.shadows4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows4_img();
	this.instance.setTransform(-132,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132,-43.5,264,87);
p.frameBounds = [rect];


(lib.shadows3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows3_img();
	this.instance.setTransform(-132,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132,-43.5,264,87);
p.frameBounds = [rect];


(lib.shadows2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows2_img();
	this.instance.setTransform(-132,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132,-43.5,264,87);
p.frameBounds = [rect];


(lib.shadows1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows1_img();
	this.instance.setTransform(-132,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132,-43.5,264,87);
p.frameBounds = [rect];


(lib.shadows1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows1_1_img();
	this.instance.setTransform(-138.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-50,277,100);
p.frameBounds = [rect];


(lib.shadow_selection_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhfTAwbMAAAhg1MC+nAAAMAAABg1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-610,-310,1220,620);
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


(lib.rouge1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_img();
	this.instance.setTransform(-129.5,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.5,-68.5,259,137);
p.frameBounds = [rect];


(lib.rouge1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_1_img();
	this.instance.setTransform(-50,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-63.5,100,127);
p.frameBounds = [rect];


(lib.rod_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rod_img();
	this.instance.setTransform(-280,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-15,560,30);
p.frameBounds = [rect];


(lib.rc_d9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_rc_dress9_img();
	this.instance.setTransform(-91.5,-172.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-46.8,-210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.hero_rc_dress9b_img();
	this.instance_2.setTransform(-63.5,-13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-210.2,174,427.4);
p.frameBounds = [rect];


(lib.rc_d8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_rc_dress8_img();
	this.instance.setTransform(-75.5,-190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-46.8,-210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,-210.2,152,204.4);
p.frameBounds = [rect];


(lib.rc_d7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_rc_dress7_img();
	this.instance.setTransform(-91.5,-191.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-46.8,-210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-210.2,148,308.4);
p.frameBounds = [rect];


(lib.rc_d6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_rc_dress6_img();
	this.instance.setTransform(-130.5,-176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-46.8,-210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.5,-210.2,245,456.4);
p.frameBounds = [rect];


(lib.rc_d5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_rc_dress5_img();
	this.instance.setTransform(-239.5,-173.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-46.8,-210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-239.5,-210.2,294,483.4);
p.frameBounds = [rect];


(lib.rc_d4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_rc_dress4_img();
	this.instance.setTransform(-128.5,-182.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-46.8,-210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.hero_rc_dress4b_img();
	this.instance_2.setTransform(-73.5,-25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128.5,-210.2,232,442.4);
p.frameBounds = [rect];


(lib.rc_d3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_rc_dress3_img();
	this.instance.setTransform(-82.5,-184.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-46.8,-210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-210.2,159,240.4);
p.frameBounds = [rect];


(lib.rc_d2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_rc_dress2_img();
	this.instance.setTransform(-135.5,-182.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-46.8,-210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.hero_rc_dress2b_img();
	this.instance_2.setTransform(-117.5,-70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.5,-210.2,233,410.4);
p.frameBounds = [rect];


(lib.rc_d1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_rc_dress1_img();
	this.instance.setTransform(-80.5,-187.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-46.8,-210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-210.2,161,420.4);
p.frameBounds = [rect];


(lib.prisch_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prisch_img();
	this.instance.setTransform(-4.5,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.5,-4.5,9,9);
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


(lib.podvodka4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka_4_img();
	this.instance.setTransform(-30,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-134.5,60,269);
p.frameBounds = [rect];


(lib.podvodka3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka_3_img();
	this.instance.setTransform(-30,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-117,60,234);
p.frameBounds = [rect];


(lib.podvodka2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka_2_img();
	this.instance.setTransform(-25,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-165,50,330);
p.frameBounds = [rect];


(lib.podvodka1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka_1_img();
	this.instance.setTransform(-25,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-63,50,126);
p.frameBounds = [rect];


(lib.pincet2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rastr4_img();
	this.instance.setTransform(113.3,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.pinc_img();
	this.instance_1.setTransform(18,-35.9,1,1,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.pinc_img();
	this.instance_2.setTransform(20.4,-51.4,1,1,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.9,-51.4,196.9,154.6);
p.frameBounds = [rect];


(lib.pincet_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.pinc_img();
	this.instance.setTransform(21.5,-46.2,1,1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.pinc_img();
	this.instance_1.setTransform(20.4,-51.4,1,1,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.9,-51.4,198.8,153.3);
p.frameBounds = [rect];


(lib.pen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.pen_img();
	this.instance.setTransform(0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.8,0,21,291);
p.frameBounds = [rect];


(lib.patch_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.patch_img();
	this.instance.setTransform(-40,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-19,80,38);
p.frameBounds = [rect];


(lib.object_18_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7UTMAAAgolIV3AAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.object_15_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzhK8IAA13MAnDAAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-70,250,140);
p.frameBounds = [rect];


(lib.object_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXUTMAAAgolISvAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-130,120,260);
p.frameBounds = [rect];


(lib.object_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A7mbnQrcrcgBwLQABwKLcrcQLcrdQKAAQQLAALcLdQLcLcABQKQgBQLrcLcQrcLcwLABQwKgBrcrcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.object_11_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzO2IAA9rIPnAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-95,100,190);
p.frameBounds = [rect];


(lib.object_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoZF8l9QF9l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F9oaAAQoZAAl9l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.object_9_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzPnIAA/NIPnAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.object_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AolUTMAAAgolIRLAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-130,110,260);
p.frameBounds = [rect];


(lib.object_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A7mbnQrdrbAAwMQAAwKLdrcQLbrdQLAAQQLAALcLdQLcLcABQKQgBQMrcLbQrcLcwLABQwLgBrbrcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.object_7_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokPnIAA/NIRJAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-100,110,200);
p.frameBounds = [rect];


(lib.object_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtyNzQlulugBoFQABoEFuluQFuluIEgBQIFABFuFuQFvFuAAIEQAAIFlvFuQluFuoFABQoEgBlulug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125,250,250);
p.frameBounds = [rect];


(lib.object_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bKJIAA0RMAu3AAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-65,300,130);
p.frameBounds = [rect];


(lib.object_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDsjpFJgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlJAAjsjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1FH0IAAvnMAqLAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-50,270,100);
p.frameBounds = [rect];


(lib.object_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bKJIAA0RMAu3AAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-65,300,130);
p.frameBounds = [rect];


(lib.object_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bJYIAAyvMAu3AAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-60,300,120);
p.frameBounds = [rect];


(lib.object_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtONQQlglfAAnxQAAnwFglfQFflfHvAAQHxAAFfFfQFfFfAAHwQAAHxlfFfQlfFfnxAAQnvAAlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.object_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtONQQlglfAAnxQAAnwFglfQFflfHvAAQHxAAFfFfQFfFfAAHwQAAHxlfFfQlfFfnxAAQnvAAlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.object_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A8tcuQr5r6gBw0QABwzL5r6QL6r5QzgBQQ1ABL5L5QL5L6ABQzQgBQ0r5L6Qr5L5w1ABQwzgBr6r5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-260,520,520);
p.frameBounds = [rect];


(lib.object_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYJZQj5j6ABlfQgBlfD5j5QD5j5FfABQFfgBD6D5QD4D5AAFfQAAFfj4D6Qj6D4lfAAQlfAAj5j4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.object_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0kzQE0k1GxAAQGyAAE0E1QE0EzAAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.location_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_7_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_6_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_5_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_4_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_3_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_2_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_1_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_0_7_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.location_0_7_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_0_6_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.location_0_6_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_0_5_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_0_4_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_0_3_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_0_2_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.location_0_1_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-220,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-170,440,340);
p.frameBounds = [rect];


(lib.lipstik3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstik3_img();
	this.instance.setTransform(-15,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-74,30,148);
p.frameBounds = [rect];


(lib.lipstik2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstik2_img();
	this.instance.setTransform(-21,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-101,42,202);
p.frameBounds = [rect];


(lib.lipstik1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstik1_img();
	this.instance.setTransform(-21.5,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-101.5,43,203);
p.frameBounds = [rect];


(lib.lips2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips2_img();
	this.instance.setTransform(-57.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-28,115,56);
p.frameBounds = [rect];


(lib.lips1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips0_img();
	this.instance.setTransform(-56,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-28,112,56);
p.frameBounds = [rect];


(lib.lips0defect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips0defect_img();
	this.instance.setTransform(-56,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-28,112,56);
p.frameBounds = [rect];


(lib.lips0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips0_img();
	this.instance.setTransform(-24.6,-12.3,0.44,0.44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.6,-12.3,49.3,24.7);
p.frameBounds = [rect];


(lib.lens_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lens_2_img();
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.lens_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lens_1_img();
	this.instance.setTransform(-400,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-300,800,600);
p.frameBounds = [rect];


(lib.it26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item2_6_img();
	this.instance.setTransform(-88,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwQlIIaJn8IGYQ+I6oJLg");
	this.shape.setTransform(-0.4,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-81.7,208.3,167.6);
p.frameBounds = [rect];


(lib.it25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item2_5_img();
	this.instance.setTransform(-159.5,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A31IKIinj2IBmsPIG1kHMAnZADVIFFF4IgvMNIkKCrg");
	this.shape.setTransform(-2.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172,-76,338.8,154.4);
p.frameBounds = [rect];


(lib.it24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item2_4_img();
	this.instance.setTransform(-72,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYJYQj5j4ABlgQgBlfD5j5QD5j5FfABQFfgBD6D5QD4D5AAFfQAAFgj4D4Qj6D6lfAAQlfAAj5j6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.it23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item2_3_img();
	this.instance.setTransform(-91,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4BeIfxsJIgcHRI74OGg");
	this.shape.setTransform(-1.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-68.4,203.6,136.9);
p.frameBounds = [rect];


(lib.it22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item2_2_img();
	this.instance.setTransform(-46,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApzxWIIAiAMALnAkKIp6Cjg");
	this.shape.setTransform(2.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-122.8,125.7,248);
p.frameBounds = [rect];


(lib.it21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item2_1_img();
	this.instance.setTransform(-101.5,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxBUNID7ozIkKiUIHg3tIO5nYIMHJ+IiscDImBDAI2lC9g");
	this.shape.setTransform(1.3,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.1,-145.6,221,281.6);
p.frameBounds = [rect];


(lib.it17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item1_7_img();
	this.instance.setTransform(-12.5,-43,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5IlIAAxJIHzAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-55,50,110);
p.frameBounds = [rect];


(lib.it16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item1_6_img();
	this.instance.setTransform(-41,-29.9,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOEqIhklBIIUl3IGzBPIAdJCIlFCMg");
	this.shape.setTransform(-0.9,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.7,-40.8,99.8,79.9);
p.frameBounds = [rect];


(lib.it15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item1_5_img();
	this.instance.setTransform(-48,-32,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApbA/IDhl+IDahLIHoDcIEUE/IlmDMIp5Aug");
	this.shape.setTransform(-0.2,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,-41.5,121,79.2);
p.frameBounds = [rect];


(lib.it14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item1_4_img();
	this.instance.setTransform(-50,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXEsIAApWISvAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-30,120,60);
p.frameBounds = [rect];


(lib.it13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item1_3_img();
	this.instance.setTransform(-43.5,-11.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoeDWICMm6IOxCQIgqE4g");
	this.shape.setTransform(-2.8,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.1,-24.3,108.7,45.8);
p.frameBounds = [rect];


(lib.it12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item1_2_img();
	this.instance.setTransform(-85.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-44.5,171,89);
p.frameBounds = [rect];


(lib.it1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item1_1_img();
	this.instance.setTransform(-25,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzPnIAA/NIPnAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
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


(lib.hint_find_panel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hint_find_panel_1_2_img();
	this.instance.setTransform(-330,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-60,660,120);
p.frameBounds = [rect];


(lib.hint_find_panel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hint_find_panel_1_1_img();
	this.instance.setTransform(-330,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-60,660,120);
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


(lib.hero_rc_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_rc_shoes1_img();
	this.instance.setTransform(-71.5,-34.5);

	this.instance_1 = new lib.hero_rc_shoes2_img();
	this.instance_1.setTransform(-74.5,-55.5);

	this.instance_2 = new lib.hero_rc_shoes3_img();
	this.instance_2.setTransform(-71,-42);

	this.instance_3 = new lib.hero_rc_shoes4_img();
	this.instance_3.setTransform(-71.5,-42.5);

	this.instance_4 = new lib.hero_rc_shoes5_img();
	this.instance_4.setTransform(-73.5,-28.5);

	this.instance_5 = new lib.hero_rc_shoes6_img();
	this.instance_5.setTransform(-72,-46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-34.5,143,69);
p.frameBounds = [rect, new cjs.Rectangle(-74.5,-55.5,147,85), new cjs.Rectangle(-71,-42,139,72), new cjs.Rectangle(-71.5,-42.5,139,73), new cjs.Rectangle(-73.5,-28.5,142,56), new cjs.Rectangle(-72,-46.5,140,76), null];


(lib.hero_rc_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_rc_hair1_img();
	this.instance.setTransform(-46,-25.5);

	this.instance_1 = new lib.hero_rc_hair2_img();
	this.instance_1.setTransform(-31,-56.5);

	this.instance_2 = new lib.hero_rc_hair4_img();
	this.instance_2.setTransform(-72.5,-43.5);

	this.instance_3 = new lib.hero_rc_hair5_img();
	this.instance_3.setTransform(-97.4,-59.5);

	this.instance_4 = new lib.hero_rc_hair7_img();
	this.instance_4.setTransform(-57.5,-64.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-25.5,96,105);
p.frameBounds = [rect, new cjs.Rectangle(-31,-56.5,71,164), null, new cjs.Rectangle(-72.5,-43.5,154,151), new cjs.Rectangle(-97.4,-59.5,196,323), null, new cjs.Rectangle(-57.5,-64.5,120,191)];


(lib.hero_rc_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_rc_fringe1_img();
	this.instance.setTransform(-53.5,-62.5);

	this.instance_1 = new lib.hero_rc_fringe2_img();
	this.instance_1.setTransform(-59,-63);

	this.instance_2 = new lib.hero_rc_fringe3_img();
	this.instance_2.setTransform(-40.5,-85.5);

	this.instance_3 = new lib.hero_rc_fringe4_img();
	this.instance_3.setTransform(-51.4,-62);

	this.instance_4 = new lib.hero_rc_fringe5_img();
	this.instance_4.setTransform(-73,-59.5);

	this.instance_5 = new lib.hero_rc_fringe6_img();
	this.instance_5.setTransform(-52,-60.5);

	this.instance_6 = new lib.hero_rc_fringe7_img();
	this.instance_6.setTransform(-38,-59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-62.5,107,125);
p.frameBounds = [rect, new cjs.Rectangle(-59,-63,122,167), new cjs.Rectangle(-40.5,-85.5,80,101), new cjs.Rectangle(-51.4,-62,129,123), new cjs.Rectangle(-73,-59.5,148,126), new cjs.Rectangle(-52,-60.5,114,199), new cjs.Rectangle(-38,-59.5,78,70)];


(lib.hero_rc_dress_allb_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_rc_dress2b_img();
	this.instance.setTransform(-112,-52.5);

	this.instance_1 = new lib.hero_rc_dress4b_img();
	this.instance_1.setTransform(-78,-38);

	this.instance_2 = new lib.hero_rc_dress9b_img();
	this.instance_2.setTransform(-54,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-112,-52.5,168,271), null, new cjs.Rectangle(-78,-38,112,256), rect=null, rect, rect, rect, new cjs.Rectangle(-54,-26,144,224)];


(lib.hero_rc_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_rc_dress1_img();
	this.instance.setTransform(-80.5,-199);

	this.instance_1 = new lib.hero_rc_dress2_img();
	this.instance_1.setTransform(-135.4,-164);

	this.instance_2 = new lib.hero_rc_dress3_img();
	this.instance_2.setTransform(-79.4,-196.5);

	this.instance_3 = new lib.hero_rc_dress4_img();
	this.instance_3.setTransform(-123.9,-190.5);

	this.instance_4 = new lib.hero_rc_dress5_img();
	this.instance_4.setTransform(-237.4,-191.5);

	this.instance_5 = new lib.hero_rc_dress6_img();
	this.instance_5.setTransform(-130.4,-191.5);

	this.instance_6 = new lib.hero_rc_dress7_img();
	this.instance_6.setTransform(-89.4,-200.5);

	this.instance_7 = new lib.hero_rc_dress8_img();
	this.instance_7.setTransform(-79.4,-178);

	this.instance_8 = new lib.hero_rc_dress9_img();
	this.instance_8.setTransform(-85.9,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-199,161,398);
p.frameBounds = [rect, new cjs.Rectangle(-135.4,-164,233,383), new cjs.Rectangle(-79.4,-196.5,159,215), new cjs.Rectangle(-123.9,-190.5,232,415), new cjs.Rectangle(-237.4,-191.5,294,447), new cjs.Rectangle(-130.4,-191.5,245,423), new cjs.Rectangle(-89.4,-200.5,148,290), new cjs.Rectangle(-79.4,-178,152,185), new cjs.Rectangle(-85.9,-190,174,390)];


(lib.hero_cinema_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_cinema_shoes1_img();
	this.instance.setTransform(-72,-39.5);

	this.instance_1 = new lib.hero_cinema_shoes2_img();
	this.instance_1.setTransform(-72,-40);

	this.instance_2 = new lib.hero_cinema_shoes3_img();
	this.instance_2.setTransform(-72,-14.5);

	this.instance_3 = new lib.hero_cinema_shoes4_img();
	this.instance_3.setTransform(-75,-49);

	this.instance_4 = new lib.hero_cinema_shoes5_img();
	this.instance_4.setTransform(-94.5,-171);

	this.instance_5 = new lib.hero_cinema_shoes6_img();
	this.instance_5.setTransform(-81.5,-79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-39.5,144,79);
p.frameBounds = [rect, new cjs.Rectangle(-72,-40,142,80), new cjs.Rectangle(-72,-14.5,147,59), new cjs.Rectangle(-75,-49,148,91), new cjs.Rectangle(-94.5,-171,166,213), new cjs.Rectangle(-81.5,-79,152,120), null];


(lib.hero_cinema_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_cinema_hair3_img();
	this.instance.setTransform(-75.4,-100.5);

	this.instance_1 = new lib.hero_cinema_hair4_img();
	this.instance_1.setTransform(-48.4,-108);

	this.instance_2 = new lib.hero_cinema_hair5_img();
	this.instance_2.setTransform(-145.4,-141.5);

	this.instance_3 = new lib.hero_cinema_hair6_img();
	this.instance_3.setTransform(-76.9,-89);

	this.instance_4 = new lib.hero_cinema_hair8_img();
	this.instance_4.setTransform(-64,-99.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, new cjs.Rectangle(-75.4,-100.5,147,284), new cjs.Rectangle(-48.4,-108,101,233), new cjs.Rectangle(-145.4,-141.5,157,388), new cjs.Rectangle(-76.9,-89,151,156), null, new cjs.Rectangle(-64,-99.5,150,245)];


(lib.hero_cinema_glasses_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_cinema_glasses_img();
	this.instance.setTransform(-36.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.5,-14.5,73,29);
p.frameBounds = [rect, null];


(lib.hero_cinema_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_cinema_fringe1_img();
	this.instance.setTransform(-58,-107.5);

	this.instance_1 = new lib.hero_cinema_fringe2_img();
	this.instance_1.setTransform(-56.5,-111.5);

	this.instance_2 = new lib.hero_cinema_fringe3_img();
	this.instance_2.setTransform(-70.9,-107.5);

	this.instance_3 = new lib.hero_cinema_fringe4_img();
	this.instance_3.setTransform(-70.4,-111.5);

	this.instance_4 = new lib.hero_cinema_fringe5_img();
	this.instance_4.setTransform(-40.9,-115.5);

	this.instance_5 = new lib.hero_cinema_fringe6_img();
	this.instance_5.setTransform(-60.9,-121);

	this.instance_6 = new lib.hero_cinema_fringe7_img();
	this.instance_6.setTransform(-61.4,-104);

	this.instance_7 = new lib.hero_cinema_fringe8_img();
	this.instance_7.setTransform(-85.4,-106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-107.5,116,215);
p.frameBounds = [rect, new cjs.Rectangle(-56.5,-111.5,113,109), new cjs.Rectangle(-70.9,-107.5,118,200), new cjs.Rectangle(-70.4,-111.5,141,242), new cjs.Rectangle(-40.9,-115.5,80,78), new cjs.Rectangle(-60.9,-121,115,84), new cjs.Rectangle(-61.4,-104,122,112), new cjs.Rectangle(-85.4,-106.5,126,247)];


(lib.hero_cinema_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_cinema_dress1_img();
	this.instance.setTransform(-86,-196);

	this.instance_1 = new lib.hero_cinema_dress2_img();
	this.instance_1.setTransform(-99.4,-195);

	this.instance_2 = new lib.hero_cinema_dress3_img();
	this.instance_2.setTransform(-152.9,-196);

	this.instance_3 = new lib.hero_cinema_dress4_img();
	this.instance_3.setTransform(-147.4,-195);

	this.instance_4 = new lib.hero_cinema_dress5_img();
	this.instance_4.setTransform(-85.4,-193.5);

	this.instance_5 = new lib.hero_cinema_dress6_img();
	this.instance_5.setTransform(-89.9,-206.5);

	this.instance_6 = new lib.hero_cinema_dress7_img();
	this.instance_6.setTransform(-96.9,-205);

	this.instance_7 = new lib.hero_cinema_dress8_img();
	this.instance_7.setTransform(-84,-194.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-196,172,392);
p.frameBounds = [rect, new cjs.Rectangle(-99.4,-195,182,358), new cjs.Rectangle(-152.9,-196,296,407), new cjs.Rectangle(-147.4,-195,264,328), new cjs.Rectangle(-85.4,-193.5,170,383), new cjs.Rectangle(-89.9,-206.5,157,261), new cjs.Rectangle(-96.9,-205,168,233), new cjs.Rectangle(-84,-194.5,162,391)];


(lib.head0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head0_img();
	this.instance.setTransform(-66.6,-86.2,0.44,0.44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.6,-86.2,133.3,172.5);
p.frameBounds = [rect];


(lib.hair0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair0_img();
	this.instance.setTransform(-224.5,-135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-224.5,-135.5,449,271);
p.frameBounds = [rect];


(lib.hair0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair0_1_img();
	this.instance.setTransform(-185.5,-201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.5,-201,371,402);
p.frameBounds = [rect];


(lib.hair_sport_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hair_sport1_img();
	this.instance.setTransform(-91,-14);

	this.instance_1 = new lib.hair_sport3_img();
	this.instance_1.setTransform(-95.5,-37.5);

	this.instance_2 = new lib.hair_sport5_img();
	this.instance_2.setTransform(-63.9,-16.5);

	this.instance_3 = new lib.hair_sport6_img();
	this.instance_3.setTransform(-63.9,-49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-14,181,250);
p.frameBounds = [rect, null, new cjs.Rectangle(-95.5,-37.5,184,303), null, new cjs.Rectangle(-63.9,-16.5,129,165), new cjs.Rectangle(-63.9,-49.5,108,225)];


(lib.fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe0_img();
	this.instance.setTransform(-308.5,-272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-308.5,-272,617,544);
p.frameBounds = [rect];


(lib.fringe0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe0_1_img();
	this.instance.setTransform(-290.5,-277.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290.5,-277.5,581,555);
p.frameBounds = [rect];


(lib.fringe_sport_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fringe_sport1_img();
	this.instance.setTransform(-42,-32);

	this.instance_1 = new lib.fringe_sport2_img();
	this.instance_1.setTransform(-66.9,-34);

	this.instance_2 = new lib.fringe_sport3_img();
	this.instance_2.setTransform(-76.4,-37.5);

	this.instance_3 = new lib.fringe_sport4_img();
	this.instance_3.setTransform(-61.9,-40);

	this.instance_4 = new lib.fringe_sport5_img();
	this.instance_4.setTransform(-41.9,-32.5);

	this.instance_5 = new lib.fringe_sport6_img();
	this.instance_5.setTransform(-42,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42,-32,84,64);
p.frameBounds = [rect, new cjs.Rectangle(-66.9,-34,119,188), new cjs.Rectangle(-76.4,-37.5,152,105), new cjs.Rectangle(-61.9,-40,125,100), new cjs.Rectangle(-41.9,-32.5,83,70), new cjs.Rectangle(-42,-35,81,93)];


(lib.finger_hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.finger_hero_1_img();
	this.instance.setTransform(-11,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11,-9.5,22,19);
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


(lib.filmstrip_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.filmstrip_img();
	this.instance.setTransform(-270,-1100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-1100,540,2200);
p.frameBounds = [rect];


(lib.fata_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fata_img();
	this.instance.setTransform(-135.5,-119.7);

	this.instance_1 = new lib.fata_back_img();
	this.instance_1.setTransform(-136,-115.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136,-119.7,272,239.5);
p.frameBounds = [rect];


(lib.fata_back_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fata_back_img();
	this.instance.setTransform(-136,-117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136,-117.5,272,235);
p.frameBounds = [rect, null];


(lib.fata_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fata_img();
	this.instance.setTransform(-135.5,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.5,-73,271,146);
p.frameBounds = [rect, null];


(lib.facemask2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.facemask2_img();
	this.instance.setTransform(-122.5,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-152.5,245,305);
p.frameBounds = [rect];


(lib.facemask1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.facemask1_img();
	this.instance.setTransform(-122.5,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-152.5,245,305);
p.frameBounds = [rect];


(lib.eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes0_1_img();
	this.instance.setTransform(-117,-31);

	this.instance_1 = new lib.eyes0_2_img();
	this.instance_1.setTransform(-118,-19);

	this.instance_2 = new lib.eyes0_3_img();
	this.instance_2.setTransform(-118,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-31,234,62);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-118,-19,235,50), rect, rect=new cjs.Rectangle(-118,-2,238,34), rect, rect=new cjs.Rectangle(-118,-19,235,50), rect, rect=new cjs.Rectangle(-117,-31,234,62), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes1_closed_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes0_3_img();
	this.instance.setTransform(-118,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118,-2,238,34);
p.frameBounds = [rect];


(lib.eyes0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.eyes0_1_img();
	this.instance.setTransform(-51.5,-13.6,0.44,0.44);

	this.instance_1 = new lib.eyes0_2_img();
	this.instance_1.setTransform(-51.6,-8.3,0.44,0.44);

	this.instance_2 = new lib.eyes0_3_img();
	this.instance_2.setTransform(-51.9,-0.9,0.44,0.44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},26).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-13.6,103,27.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-51.6,-8.3,103.4,22), rect, rect=new cjs.Rectangle(-51.9,-0.9,104.7,15), rect, rect=new cjs.Rectangle(-51.6,-8.3,103.4,22), rect, rect=new cjs.Rectangle(-51.5,-13.6,103,27.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyebrows0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows0_img();
	this.instance.setTransform(-51.5,-6.1,0.44,0.44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-6.1,103,12.3);
p.frameBounds = [rect];


(lib.drops4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drops4_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,162,83);
p.frameBounds = [rect];


(lib.drops3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drops3_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,130,78);
p.frameBounds = [rect];


(lib.drops2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drops2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,82,108);
p.frameBounds = [rect];


(lib.drops1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drops1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,192,94);
p.frameBounds = [rect];


(lib.decor_3_text_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.emo1_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.decor_2_text_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.emo3_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.decor_1_text_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.emo2_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.comics1_hand0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.comics1_hand0_img();
	this.instance.setTransform(-50,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-99,100,198);
p.frameBounds = [rect];


(lib.comics1_hair0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.comics1_hair0_img();
	this.instance.setTransform(-142,-196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142,-196,284,392);
p.frameBounds = [rect];


(lib.comics1_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.comics1_fringe0_img();
	this.instance.setTransform(-65.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-50,131,100);
p.frameBounds = [rect];


(lib.comics1_chair_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.comics1_chair_img();
	this.instance.setTransform(-167.5,-181.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167.5,-181.5,335,363);
p.frameBounds = [rect];


(lib.comics1_body0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.comics1_body0_img();
	this.instance.setTransform(-159.5,-217);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-217,319,434);
p.frameBounds = [rect];


(lib.circle_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmZGXQgJgCgHgGQgGgHgCgJIgbiiIhwgOQgJgBgHgGQgGgFgDgJQgDgIADgIQAniggoi0QgCgJADgIQAEgJAHgFQAHgFAJgBIBmgFIAaiqQACgJAGgHQAGgGAJgDQAJgCAJAEIPVF6QAJAEAFAHQAFAIAAAIQAAAJgFAHQgFAIgJAEIvMF6QgFACgFAAIgHgBgAmciyQgBAKgIAHQgIAIgLAAIhcAFQAcCdgcCOIBmANQAJABAIAHQAHAHACAKIAZCTINhlQItqlQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40.9,120,81.8);
p.frameBounds = [rect];


(lib.cin_d8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_cinema_dress8_img();
	this.instance.setTransform(-83,-179.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-49.8,-210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,-210.7,162,422.4);
p.frameBounds = [rect];


(lib.cin_d7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_cinema_dress7_img();
	this.instance.setTransform(-97,-190.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-49.8,-210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-210.7,168,253.4);
p.frameBounds = [rect];


(lib.cin_d6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_cinema_dress6_img();
	this.instance.setTransform(-89,-188.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-49.8,-210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89,-210.7,157,283.4);
p.frameBounds = [rect];


(lib.cin_d5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_cinema_dress5_img();
	this.instance.setTransform(-86,-183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-49.8,-210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-210.7,170,410.4);
p.frameBounds = [rect];


(lib.cin_d4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_cinema_dress4_img();
	this.instance.setTransform(-150,-178.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-49.8,-210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-210.7,264,360.4);
p.frameBounds = [rect];


(lib.cin_d3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_cinema_dress3_img();
	this.instance.setTransform(-154,-183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-49.8,-210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-154,-210.7,296,434.4);
p.frameBounds = [rect];


(lib.cin_d2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_cinema_dress2_img();
	this.instance.setTransform(-100,-183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-49.8,-210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-210.7,182,385.4);
p.frameBounds = [rect];


(lib.cin_d1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_cinema_dress1_img();
	this.instance.setTransform(-86,-181.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-49.8,-210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-210.7,172,421.4);
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


(lib.checkpoint_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgHzAnEMAAAhOHIPnAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-250,100,500);
p.frameBounds = [rect];


(lib.check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_1_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.bs6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_sport_6_img();
	this.instance.setTransform(-77,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-59.8,161,304.6);
p.frameBounds = [rect];


(lib.bs5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_sport_5_img();
	this.instance.setTransform(-70,-37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-59.8,129,96.6);
p.frameBounds = [rect];


(lib.bs4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_sport_4_img();
	this.instance.setTransform(-70,-41.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-59.8,161,305.6);
p.frameBounds = [rect];


(lib.bs3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_sport_3_img();
	this.instance.setTransform(-77,-41.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-59.8,159,313.6);
p.frameBounds = [rect];


(lib.bs2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_sport_2_img();
	this.instance.setTransform(-70,-35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-59.8,136,253.6);
p.frameBounds = [rect];


(lib.bs1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_sport_1_img();
	this.instance.setTransform(-70,-35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_img();
	this.instance_1.setTransform(-48.9,-59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-59.8,128,140.6);
p.frameBounds = [rect];


(lib.brush3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.brush3_img();
	this.instance.setTransform(-60,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-93.5,120,187);
p.frameBounds = [rect];


(lib.brush1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.brush1_img();
	this.instance.setTransform(-15,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-60.5,30,121);
p.frameBounds = [rect];


(lib.bottom_sport_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bottom_sport_1_img();
	this.instance.setTransform(-64,-58);

	this.instance_1 = new lib.bottom_sport_2_img();
	this.instance_1.setTransform(-65,-58);

	this.instance_2 = new lib.bottom_sport_3_img();
	this.instance_2.setTransform(-63.5,-70);

	this.instance_3 = new lib.bottom_sport_4_img();
	this.instance_3.setTransform(-66.5,-60.5);

	this.instance_4 = new lib.bottom_sport_5_img();
	this.instance_4.setTransform(-64,-56.5);

	this.instance_5 = new lib.bottom_sport_6_img();
	this.instance_5.setTransform(-64.9,-59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64,-58,128,116);
p.frameBounds = [rect, new cjs.Rectangle(-65,-58,136,229), new cjs.Rectangle(-63.5,-70,159,295), new cjs.Rectangle(-66.5,-60.5,161,287), new cjs.Rectangle(-64,-56.5,129,74), new cjs.Rectangle(-64.9,-59.5,161,287)];


(lib.body0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body0_img();
	this.instance.setTransform(-279,-269);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-279,-269,558,538);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-190,-90);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-190,-90);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-190,-90);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-190,-90);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-190,-90);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-190,-90);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-190,-90);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-190,-90);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-190,-90);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-190,-90);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-190,-90);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-190,-90);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-190,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-90,380,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_5_en_img();
	this.instance.setTransform(-140,-140);

	this.instance_1 = new lib.title_5_ru_img();
	this.instance_1.setTransform(-140,-140);

	this.instance_2 = new lib.title_5_de_img();
	this.instance_2.setTransform(-140,-140);

	this.instance_3 = new lib.title_5_fr_img();
	this.instance_3.setTransform(-140,-140);

	this.instance_4 = new lib.title_5_it_img();
	this.instance_4.setTransform(-140,-140);

	this.instance_5 = new lib.title_5_es_img();
	this.instance_5.setTransform(-140,-140);

	this.instance_6 = new lib.title_5_pt_img();
	this.instance_6.setTransform(-140,-140);

	this.instance_7 = new lib.title_5_tr_img();
	this.instance_7.setTransform(-140,-140);

	this.instance_8 = new lib.title_5_ja_img();
	this.instance_8.setTransform(-140,-140);

	this.instance_9 = new lib.title_5_hi_img();
	this.instance_9.setTransform(-140,-140);

	this.instance_10 = new lib.title_5_ar_img();
	this.instance_10.setTransform(-140,-140);

	this.instance_11 = new lib.title_5_id_img();
	this.instance_11.setTransform(-140,-140);

	this.instance_12 = new lib.title_5_zh_img();
	this.instance_12.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_4_en_img();
	this.instance.setTransform(-140,-140);

	this.instance_1 = new lib.title_4_ru_img();
	this.instance_1.setTransform(-140,-140);

	this.instance_2 = new lib.title_4_de_img();
	this.instance_2.setTransform(-140,-140);

	this.instance_3 = new lib.title_4_fr_img();
	this.instance_3.setTransform(-140,-140);

	this.instance_4 = new lib.title_4_it_img();
	this.instance_4.setTransform(-140,-140);

	this.instance_5 = new lib.title_4_es_img();
	this.instance_5.setTransform(-140,-140);

	this.instance_6 = new lib.title_4_pt_img();
	this.instance_6.setTransform(-140,-140);

	this.instance_7 = new lib.title_4_tr_img();
	this.instance_7.setTransform(-140,-140);

	this.instance_8 = new lib.title_4_ja_img();
	this.instance_8.setTransform(-140,-140);

	this.instance_9 = new lib.title_4_hi_img();
	this.instance_9.setTransform(-140,-140);

	this.instance_10 = new lib.title_4_ar_img();
	this.instance_10.setTransform(-140,-140);

	this.instance_11 = new lib.title_4_id_img();
	this.instance_11.setTransform(-140,-140);

	this.instance_12 = new lib.title_4_zh_img();
	this.instance_12.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_2_en_img();
	this.instance.setTransform(-140,-140);

	this.instance_1 = new lib.title_2_ru_img();
	this.instance_1.setTransform(-140,-140);

	this.instance_2 = new lib.title_2_de_img();
	this.instance_2.setTransform(-140,-140);

	this.instance_3 = new lib.title_2_fr_img();
	this.instance_3.setTransform(-140,-140);

	this.instance_4 = new lib.title_2_it_img();
	this.instance_4.setTransform(-140,-140);

	this.instance_5 = new lib.title_2_es_img();
	this.instance_5.setTransform(-140,-140);

	this.instance_6 = new lib.title_2_pt_img();
	this.instance_6.setTransform(-140,-140);

	this.instance_7 = new lib.title_2_tr_img();
	this.instance_7.setTransform(-140,-140);

	this.instance_8 = new lib.title_2_ja_img();
	this.instance_8.setTransform(-140,-140);

	this.instance_9 = new lib.title_2_hi_img();
	this.instance_9.setTransform(-140,-140);

	this.instance_10 = new lib.title_2_ar_img();
	this.instance_10.setTransform(-140,-140);

	this.instance_11 = new lib.title_2_id_img();
	this.instance_11.setTransform(-140,-140);

	this.instance_12 = new lib.title_2_zh_img();
	this.instance_12.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_1_en_img();
	this.instance.setTransform(-140,-140);

	this.instance_1 = new lib.title_1_ru_img();
	this.instance_1.setTransform(-140,-140);

	this.instance_2 = new lib.title_1_de_img();
	this.instance_2.setTransform(-140,-140);

	this.instance_3 = new lib.title_1_fr_img();
	this.instance_3.setTransform(-140,-140);

	this.instance_4 = new lib.title_1_it_img();
	this.instance_4.setTransform(-140,-140);

	this.instance_5 = new lib.title_1_es_img();
	this.instance_5.setTransform(-140,-140);

	this.instance_6 = new lib.title_1_pt_img();
	this.instance_6.setTransform(-140,-140);

	this.instance_7 = new lib.title_1_tr_img();
	this.instance_7.setTransform(-140,-140);

	this.instance_8 = new lib.title_1_ja_img();
	this.instance_8.setTransform(-140,-140);

	this.instance_9 = new lib.title_1_hi_img();
	this.instance_9.setTransform(-140,-140);

	this.instance_10 = new lib.title_1_ar_img();
	this.instance_10.setTransform(-140,-140);

	this.instance_11 = new lib.title_1_id_img();
	this.instance_11.setTransform(-140,-140);

	this.instance_12 = new lib.title_1_zh_img();
	this.instance_12.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
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


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.body_nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.bg_title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg_title_3_img();
	this.instance.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,20,20);
p.frameBounds = [rect];


(lib.bg_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.bg_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_1_img();
	this.instance.setTransform(-190,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-90,380,180);
p.frameBounds = [rect];


(lib.bg_speech_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_speech_5_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.bg_speech_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_speech_4_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.bg_speech_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_speech_3_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.bg_speech_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_speech_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.bg_speech_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_speech_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.bg_cell_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg_cell_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.background_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_7_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.background_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_6_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.b2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag2_img();
	this.instance.setTransform(-234,-161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-234,-161.5,468,323);
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


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_cinema_glasses_img();
	this.instance.setTransform(-36.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHBIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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
	this.shape.graphics.f("#FFCC66").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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
	this.shape.setTransform(400,300,1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect];


(lib.blinking_light_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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


(lib.forward_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.forward_1_img();
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
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,503.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,623.5), new cjs.Rectangle(-210,-210,420,611.5), new cjs.Rectangle(-210,-210,420,599.5), new cjs.Rectangle(-210,-210,420,587.5), new cjs.Rectangle(-210,-210,420,575.5), new cjs.Rectangle(-210,-210,420,563.5), new cjs.Rectangle(-210,-210,420,551.5), new cjs.Rectangle(-210,-210,420,539.5), new cjs.Rectangle(-210,-210,420,527.5), new cjs.Rectangle(-210,-210,420,515.5), rect=new cjs.Rectangle(-210,-210,420,503.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,515.5), new cjs.Rectangle(-210,-210,420,527.5), new cjs.Rectangle(-210,-210,420,539.5), new cjs.Rectangle(-210,-210,420,551.5), new cjs.Rectangle(-210,-210,420,563.5), new cjs.Rectangle(-210,-210,420,575.5), new cjs.Rectangle(-210,-210,420,587.5), new cjs.Rectangle(-210,-210,420,599.5), new cjs.Rectangle(-210,-210,420,611.5), new cjs.Rectangle(-210,-210,420,623.5)];


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


(lib.top_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ts6_mc();
	this.instance.setTransform(5,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap/JdIj6rvII1vTIISADIHHJMIDmXhIj0Cbg");
	this.shape.setTransform(0.4,106.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.7,-6.3,178.2,225.4);
p.frameBounds = [rect];


(lib.top_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ts5_mc();
	this.instance.setTransform(5,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmGKUIkOpMICMmaIG2liID/AAIHBIcIAnF+Ik1HPg");
	this.shape.setTransform(-0.3,63.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-5.9,132.4,138.8);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ts4_mc();
	this.instance.setTransform(5.1,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AosI8IljrYII+ujIJ3ACIGUIFIDWYFIlABzg");
	this.shape.setTransform(-4.5,103.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.8,-5.5,182.5,217.7);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ts3_mc();
	this.instance.setTransform(4.5,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am7KfIisrbIGkpqIEtAAIH/MlIjOIog");
	this.shape.setTransform(7.2,60.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-7.5,123.4,136);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ts2_mc();
	this.instance.setTransform(5,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRL4IAjy5IGknQIEhAAIG7KJIjwSag");
	this.shape.setTransform(3.7,85.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.7,-5.5,118.9,182.9);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ts1_mc();
	this.instance.setTransform(4.5,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmaKNIjjqYIHBqQIFlABIHVK9Ii9J5g");
	this.shape.setTransform(4.5,61.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.2,-5.4,127.6,133.6);
p.frameBounds = [rect];


(lib.tools3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pincet_mc();
	this.instance.setTransform(-82.3,44.9,1,1,8.3,0,0,96.4,25.2);

	this.instance_1 = new lib.lipstik2_mc();
	this.instance_1.setTransform(170.7,-33.9);

	this.instance_2 = new lib.lipstik1_mc();
	this.instance_2.setTransform(125,-33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191.4,-134.9,383.1,269.9);
p.frameBounds = [rect];


(lib.tools2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.thermal_waterani_mc();
	this.instance.setTransform(268.1,-16.8,0.756,0.756,0,0,0,41.1,150);

	this.instance_1 = new lib.tin_facemask2_mc();
	this.instance_1.setTransform(58.2,40);

	this.instance_2 = new lib.tin_facemask1_mc();
	this.instance_2.setTransform(-199.8,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-299.8,-129.3,598.9,230.8);
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


(lib.title_5_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_5_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_speech_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.title_4_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_4_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_speech_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_2_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_speech_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.title_1_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_1_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_speech_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.shoes_0_mc = function(mode,startPosition,loop) {
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


(lib.quest1_text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_4_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.q2_text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_5_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
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

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmUD2IjDgVQA9jTg9juIC5gJIAqj1IPMHgIu/Hdg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-200,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:200},20).wait(41));

	// graph
	this.instance_1 = new lib.body_nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ao0I1QjrjrAAlKQAAlKDrjqQDqjqFKgBQFLABDqDqQDrDqAAFKQAAFKjrDrQjqDqlLAAQlKAAjqjqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstik3_mc();
	this.instance.setTransform(98,138.4,1,1,-27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-35.7,x:8,y:93.4},9).to({x:35,y:96.3},5).to({x:50},4).to({x:60,y:90.3},3).to({x:92,y:91.3},4).to({x:39,y:117.3},9).to({x:1.7,y:97.3},9).to({x:-107,y:248.3,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.table_mc();
	this.instance_1.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56));

	// animation
	this.instance_2 = new lib.fringe0_mc();
	this.instance_2.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56));

	// animation
	this.instance_3 = new lib.eyes1_mc();
	this.instance_3.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56));

	// animation
	this.instance_4 = new lib.lips2_mc();
	this.instance_4.setTransform(3,55.5);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({alpha:1},34).wait(13));

	// animation
	this.instance_5 = new lib.lips1_mc();
	this.instance_5.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},43).wait(13));

	// animation
	this.instance_6 = new lib.eyebrows0_img();
	this.instance_6.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(56));

	// animation
	this.instance_7 = new lib.shadows5_mc();
	this.instance_7.setTransform(3,-66);

	this.instance_8 = new lib.shadows4_mc();
	this.instance_8.setTransform(3,-66);

	this.instance_9 = new lib.shadows3_mc();
	this.instance_9.setTransform(3,-66);

	this.instance_10 = new lib.shadows2_mc();
	this.instance_10.setTransform(3,-66);

	this.instance_11 = new lib.shadows1_mc();
	this.instance_11.setTransform(3,-66);

	this.instance_12 = new lib.rouge1_mc();
	this.instance_12.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(56));

	// animation
	this.instance_13 = new lib.body0_mc();
	this.instance_13.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(56));

	// animation
	this.instance_14 = new lib.hair0_mc();
	this.instance_14.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,584.1), new cjs.Rectangle(-400,-280.6,800,597.8), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup2_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstik3_mc();
	this.instance.setTransform(295,186.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-27.2,x:98,y:138.4},9).wait(1));

	// animation
	this.instance_1 = new lib.table_mc();
	this.instance_1.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.fringe0_mc();
	this.instance_2.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.eyes1_mc();
	this.instance_3.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.lips2_mc();
	this.instance_4.setTransform(3,55.5);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.lips1_mc();
	this.instance_5.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.eyebrows0_img();
	this.instance_6.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.shadows5_mc();
	this.instance_7.setTransform(3,-66);

	this.instance_8 = new lib.shadows4_mc();
	this.instance_8.setTransform(3,-66);

	this.instance_9 = new lib.shadows3_mc();
	this.instance_9.setTransform(3,-66);

	this.instance_10 = new lib.shadows2_mc();
	this.instance_10.setTransform(3,-66);

	this.instance_11 = new lib.shadows1_mc();
	this.instance_11.setTransform(3,-66);

	this.instance_12 = new lib.rouge1_mc();
	this.instance_12.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(10));

	// animation
	this.instance_13 = new lib.body0_mc();
	this.instance_13.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// animation
	this.instance_14 = new lib.hair0_mc();
	this.instance_14.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka2_mc();
	this.instance.setTransform(59.1,-96.1,0.578,0.578,57.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:16.1,y:-126.1},9).to({x:-43.9,y:-107.1},10).to({x:108.1,y:-93.7},15).to({x:128.1,y:-121.7},6).to({rotation:68,x:174.1,y:-102.7},10).to({x:212.1,y:-90.7},9).to({rotation:134.3,x:438,y:52.3,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.lipstik3_mc();
	this.instance_1.setTransform(295,186.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71));

	// animation
	this.instance_2 = new lib.table_mc();
	this.instance_2.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71));

	// animation
	this.instance_3 = new lib.fringe0_mc();
	this.instance_3.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71));

	// animation
	this.instance_4 = new lib.eyes1_mc();
	this.instance_4.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71));

	// animation
	this.instance_5 = new lib.lips2_mc();
	this.instance_5.setTransform(3,55.5);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71));

	// animation
	this.instance_6 = new lib.lips1_mc();
	this.instance_6.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71));

	// animation
	this.instance_7 = new lib.eyebrows0_img();
	this.instance_7.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(71));

	// animation
	this.instance_8 = new lib.shadows5_mc();
	this.instance_8.setTransform(3,-66);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},59).wait(12));

	// animation
	this.instance_9 = new lib.shadows4_mc();
	this.instance_9.setTransform(3,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(71));

	// animation
	this.instance_10 = new lib.shadows3_mc();
	this.instance_10.setTransform(3,-66);

	this.instance_11 = new lib.shadows2_mc();
	this.instance_11.setTransform(3,-66);

	this.instance_12 = new lib.shadows1_mc();
	this.instance_12.setTransform(3,-66);

	this.instance_13 = new lib.rouge1_mc();
	this.instance_13.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(71));

	// animation
	this.instance_14 = new lib.body0_mc();
	this.instance_14.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(71));

	// animation
	this.instance_15 = new lib.hair0_mc();
	this.instance_15.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,821.4,581.7), new cjs.Rectangle(-400,-280.6,842.8,581.7), new cjs.Rectangle(-400,-280.6,863,581.7), new cjs.Rectangle(-400,-280.6,881.8,581.7), new cjs.Rectangle(-400,-280.6,899.6,581.7), new cjs.Rectangle(-400,-280.6,916.4,581.7), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup2_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka1_mc();
	this.instance.setTransform(201.4,214.1,0.734,0.734);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.podvodka2_mc();
	this.instance_1.setTransform(235.1,163.9,0.578,0.578,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:57.8,x:59.1,y:-96.1},9).wait(1));

	// animation
	this.instance_2 = new lib.lipstik3_mc();
	this.instance_2.setTransform(295,186.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.table_mc();
	this.instance_3.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.fringe0_mc();
	this.instance_4.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.eyes1_mc();
	this.instance_5.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.lips2_mc();
	this.instance_6.setTransform(3,55.5);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.lips1_mc();
	this.instance_7.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.eyebrows0_img();
	this.instance_8.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.shadows5_mc();
	this.instance_9.setTransform(3,-66);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.shadows4_mc();
	this.instance_10.setTransform(3,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.shadows3_mc();
	this.instance_11.setTransform(3,-66);

	this.instance_12 = new lib.shadows2_mc();
	this.instance_12.setTransform(3,-66);

	this.instance_13 = new lib.shadows1_mc();
	this.instance_13.setTransform(3,-66);

	this.instance_14 = new lib.rouge1_mc();
	this.instance_14.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(10));

	// animation
	this.instance_15 = new lib.body0_mc();
	this.instance_15.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// animation
	this.instance_16 = new lib.hair0_mc();
	this.instance_16.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka4_mc();
	this.instance.setTransform(-136.5,47.8,0.667,0.667,49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-85.5,y:16.3},9).to({rotation:67.7,x:-133.5,y:-2.7},5).to({rotation:106.7,x:-182.5,y:-74.7},5).to({rotation:-21.9,x:62.5,y:42.3},15).to({rotation:-40.6,x:109.5,y:29.3},5).to({rotation:-62.6,x:156.5,y:5.3},5).to({x:185.5,y:-16.7},6).to({x:197.5},4).to({x:530.4,y:162.2,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.podvodka2_mc();
	this.instance_1.setTransform(235.1,163.9,0.578,0.578,180);

	this.instance_2 = new lib.podvodka1_mc();
	this.instance_2.setTransform(201.4,214.1,0.734,0.734);

	this.instance_3 = new lib.lipstik3_mc();
	this.instance_3.setTransform(295,186.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(66));

	// animation
	this.instance_4 = new lib.table_mc();
	this.instance_4.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66));

	// animation
	this.instance_5 = new lib.fringe0_mc();
	this.instance_5.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66));

	// animation
	this.instance_6 = new lib.eyes1_mc();
	this.instance_6.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66));

	// animation
	this.instance_7 = new lib.lips2_mc();
	this.instance_7.setTransform(3,55.5);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66));

	// animation
	this.instance_8 = new lib.lips1_mc();
	this.instance_8.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(66));

	// animation
	this.instance_9 = new lib.eyebrows0_img();
	this.instance_9.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66));

	// animation
	this.instance_10 = new lib.shadows5_mc();
	this.instance_10.setTransform(3,-66);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(66));

	// animation
	this.instance_11 = new lib.shadows4_mc();
	this.instance_11.setTransform(3,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(66));

	// animation
	this.instance_12 = new lib.shadows3_mc();
	this.instance_12.setTransform(3,-66);
	this.instance_12.alpha = 0.012;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({alpha:1},45).wait(12));

	// animation
	this.instance_13 = new lib.shadows2_mc();
	this.instance_13.setTransform(3,-66);

	this.instance_14 = new lib.shadows1_mc();
	this.instance_14.setTransform(3,-66);

	this.instance_15 = new lib.rouge1_mc();
	this.instance_15.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(66));

	// animation
	this.instance_16 = new lib.body0_mc();
	this.instance_16.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(66));

	// animation
	this.instance_17 = new lib.hair0_mc();
	this.instance_17.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,819.4,581.7), new cjs.Rectangle(-400,-280.6,852.7,581.7), new cjs.Rectangle(-400,-280.6,886,581.7), new cjs.Rectangle(-400,-280.6,919.3,581.7), new cjs.Rectangle(-400,-280.6,952.6,581.7), new cjs.Rectangle(-400,-280.6,985.9,581.7), new cjs.Rectangle(-400,-280.6,1019.2,581.7), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup2_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka3_mc();
	this.instance.setTransform(135.5,186.4,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.podvodka4_mc();
	this.instance_1.setTransform(96.5,174.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:49.7,x:-136.5,y:47.8},9).wait(1));

	// animation
	this.instance_2 = new lib.podvodka2_mc();
	this.instance_2.setTransform(235.1,163.9,0.578,0.578,180);

	this.instance_3 = new lib.podvodka1_mc();
	this.instance_3.setTransform(201.4,214.1,0.734,0.734);

	this.instance_4 = new lib.lipstik3_mc();
	this.instance_4.setTransform(295,186.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.fringe0_mc();
	this.instance_6.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.eyes1_mc();
	this.instance_7.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.lips2_mc();
	this.instance_8.setTransform(3,55.5);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.lips1_mc();
	this.instance_9.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.eyebrows0_img();
	this.instance_10.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.shadows5_mc();
	this.instance_11.setTransform(3,-66);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.shadows4_mc();
	this.instance_12.setTransform(3,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// animation
	this.instance_13 = new lib.shadows3_mc();
	this.instance_13.setTransform(3,-66);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// animation
	this.instance_14 = new lib.shadows2_mc();
	this.instance_14.setTransform(3,-66);

	this.instance_15 = new lib.shadows1_mc();
	this.instance_15.setTransform(3,-66);

	this.instance_16 = new lib.rouge1_mc();
	this.instance_16.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// animation
	this.instance_17 = new lib.body0_mc();
	this.instance_17.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// animation
	this.instance_18 = new lib.hair0_mc();
	this.instance_18.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(-152.6,83.7,1,1,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-151,x:-165.6,y:76.7},4).to({rotation:-136,x:-152.6,y:83.7},4).to({rotation:-151,x:-165.6,y:76.7},4).to({rotation:-136,x:-152.6,y:83.7},3).to({rotation:-151,x:-165.6,y:76.7},4).to({rotation:-38.2,x:-65.8,y:-38.2},10).to({x:-52.8,y:-48.2},11).to({x:-71.8,y:-23.2},7).to({x:-53.8,y:-41.2},7).to({x:118.2,y:-47.2},14).to({x:138.2,y:-22.2},5).to({x:116.2,y:-38.2},5).to({x:133.8,y:-52.7},6).to({x:304.8,y:331.3,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.shadows1_1_mc();
	this.instance_1.setTransform(-160,99.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({y:357.4,alpha:0.012},9).to({_off:true},1).wait(68));

	// animation
	this.instance_2 = new lib.podvodka2_mc();
	this.instance_2.setTransform(235.1,163.9,0.578,0.578,180);

	this.instance_3 = new lib.podvodka1_mc();
	this.instance_3.setTransform(201.4,214.1,0.734,0.734);

	this.instance_4 = new lib.podvodka4_mc();
	this.instance_4.setTransform(96.5,174.7,0.667,0.667);

	this.instance_5 = new lib.podvodka3_mc();
	this.instance_5.setTransform(135.5,186.4,0.667,0.667);

	this.instance_6 = new lib.lipstik3_mc();
	this.instance_6.setTransform(295,186.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(97));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(97));

	// animation
	this.instance_8 = new lib.fringe0_mc();
	this.instance_8.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(97));

	// animation
	this.instance_9 = new lib.eyes1_closed_mc();
	this.instance_9.setTransform(3,-58.6);

	this.instance_10 = new lib.eyes1_mc();
	this.instance_10.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},96).wait(1));

	// animation
	this.instance_11 = new lib.lips2_mc();
	this.instance_11.setTransform(3,55.5);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(97));

	// animation
	this.instance_12 = new lib.lips1_mc();
	this.instance_12.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(97));

	// animation
	this.instance_13 = new lib.eyebrows0_img();
	this.instance_13.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(97));

	// animation
	this.instance_14 = new lib.shadows5_mc();
	this.instance_14.setTransform(3,-66);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(97));

	// animation
	this.instance_15 = new lib.shadows4_mc();
	this.instance_15.setTransform(3,-66);
	this.instance_15.alpha = 0.012;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(29).to({_off:false},0).to({alpha:1},55).wait(13));

	// animation
	this.instance_16 = new lib.shadows3_mc();
	this.instance_16.setTransform(3,-66);
	this.instance_16.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(97));

	// animation
	this.instance_17 = new lib.shadows2_mc();
	this.instance_17.setTransform(3,-66);

	this.instance_18 = new lib.shadows1_mc();
	this.instance_18.setTransform(3,-66);

	this.instance_19 = new lib.rouge1_mc();
	this.instance_19.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(97));

	// animation
	this.instance_20 = new lib.body0_mc();
	this.instance_20.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(97));

	// animation
	this.instance_21 = new lib.hair0_mc();
	this.instance_21.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,602), new cjs.Rectangle(-400,-280.6,800,630.7), new cjs.Rectangle(-400,-280.6,800,659.3), new cjs.Rectangle(-400,-280.6,800,688), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,598.8), new cjs.Rectangle(-400,-280.6,800,633.7), new cjs.Rectangle(-400,-280.6,800,668.8), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(-90.6,95.5,1,1,-123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-155.5,x:-112.6,y:75.5},3).to({rotation:-123.1,x:-90.6,y:95.5},3).to({rotation:-155.5,x:-112.6,y:75.5},3).to({rotation:-123.1,x:-90.6,y:95.5},3).to({rotation:-155.5,x:-112.6,y:75.5},3).to({rotation:-34.5,x:-21.6,y:-28.4},11).to({x:-56.6,y:-26.2},7).to({x:-40.6,y:-11.2},7).to({x:73.4,y:-17.2},8).to({x:82.4,y:-35.2},7).to({x:123.1,y:-22.2},7).to({x:88.4,y:-8.2},7).to({x:90.4,y:-26.2},6).to({rotation:-136,x:-152.6,y:83.7},9).wait(1));

	// animation
	this.instance_1 = new lib.shadows1_1_mc();
	this.instance_1.setTransform(-160,99.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

	// animation
	this.instance_2 = new lib.podvodka2_mc();
	this.instance_2.setTransform(235.1,163.9,0.578,0.578,180);

	this.instance_3 = new lib.podvodka1_mc();
	this.instance_3.setTransform(201.4,214.1,0.734,0.734);

	this.instance_4 = new lib.podvodka4_mc();
	this.instance_4.setTransform(96.5,174.7,0.667,0.667);

	this.instance_5 = new lib.podvodka3_mc();
	this.instance_5.setTransform(135.5,186.4,0.667,0.667);

	this.instance_6 = new lib.lipstik3_mc();
	this.instance_6.setTransform(295,186.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(85));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(85));

	// animation
	this.instance_8 = new lib.fringe0_mc();
	this.instance_8.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(85));

	// animation
	this.instance_9 = new lib.eyes1_closed_mc();
	this.instance_9.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(85));

	// animation
	this.instance_10 = new lib.lips2_mc();
	this.instance_10.setTransform(3,55.5);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(85));

	// animation
	this.instance_11 = new lib.lips1_mc();
	this.instance_11.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(85));

	// animation
	this.instance_12 = new lib.eyebrows0_img();
	this.instance_12.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(85));

	// animation
	this.instance_13 = new lib.shadows5_mc();
	this.instance_13.setTransform(3,-66);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(85));

	// animation
	this.instance_14 = new lib.shadows4_mc();
	this.instance_14.setTransform(3,-66);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(85));

	// animation
	this.instance_15 = new lib.shadows3_mc();
	this.instance_15.setTransform(3,-66);
	this.instance_15.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(85));

	// animation
	this.instance_16 = new lib.shadows2_mc();
	this.instance_16.setTransform(3,-66);
	this.instance_16.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(26).to({alpha:1},49).wait(10));

	// animation
	this.instance_17 = new lib.shadows1_mc();
	this.instance_17.setTransform(3,-66);

	this.instance_18 = new lib.rouge1_mc();
	this.instance_18.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17}]}).wait(85));

	// animation
	this.instance_19 = new lib.body0_mc();
	this.instance_19.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(85));

	// animation
	this.instance_20 = new lib.hair0_mc();
	this.instance_20.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(-32,91.4,1,1,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-160.3,x:-59,y:74.4},3).to({rotation:-124.5,x:-32,y:91.4},3).to({rotation:-160.3,x:-59,y:74.4},3).to({rotation:-124.5,x:-32,y:91.4},3).to({rotation:-45.3,x:15,y:-15.6},10).to({x:-0.9,y:-31.4},5).to({y:-10.3},5).to({x:57.1,y:-15.3},4).to({x:75.1,y:-31.4},5).to({x:66.4,y:-7.4},5).to({rotation:-123.1,x:-90.6,y:95.5},13).wait(1));

	// animation
	this.instance_1 = new lib.shadows1_1_mc();
	this.instance_1.setTransform(-160,99.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// animation
	this.instance_2 = new lib.podvodka2_mc();
	this.instance_2.setTransform(235.1,163.9,0.578,0.578,180);

	this.instance_3 = new lib.podvodka1_mc();
	this.instance_3.setTransform(201.4,214.1,0.734,0.734);

	this.instance_4 = new lib.podvodka4_mc();
	this.instance_4.setTransform(96.5,174.7,0.667,0.667);

	this.instance_5 = new lib.podvodka3_mc();
	this.instance_5.setTransform(135.5,186.4,0.667,0.667);

	this.instance_6 = new lib.lipstik3_mc();
	this.instance_6.setTransform(295,186.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(60));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

	// animation
	this.instance_8 = new lib.fringe0_mc();
	this.instance_8.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

	// animation
	this.instance_9 = new lib.eyes1_closed_mc();
	this.instance_9.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60));

	// animation
	this.instance_10 = new lib.lips2_mc();
	this.instance_10.setTransform(3,55.5);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60));

	// animation
	this.instance_11 = new lib.lips1_mc();
	this.instance_11.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60));

	// animation
	this.instance_12 = new lib.eyebrows0_img();
	this.instance_12.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(60));

	// animation
	this.instance_13 = new lib.shadows5_mc();
	this.instance_13.setTransform(3,-66);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60));

	// animation
	this.instance_14 = new lib.shadows4_mc();
	this.instance_14.setTransform(3,-66);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60));

	// animation
	this.instance_15 = new lib.shadows3_mc();
	this.instance_15.setTransform(3,-66);
	this.instance_15.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60));

	// animation
	this.instance_16 = new lib.shadows2_mc();
	this.instance_16.setTransform(3,-66);
	this.instance_16.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60));

	// animation
	this.instance_17 = new lib.shadows1_mc();
	this.instance_17.setTransform(3,-66);
	this.instance_17.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(22).to({alpha:1},24).wait(14));

	// animation
	this.instance_18 = new lib.rouge1_mc();
	this.instance_18.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(60));

	// animation
	this.instance_19 = new lib.body0_mc();
	this.instance_19.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(60));

	// animation
	this.instance_20 = new lib.hair0_mc();
	this.instance_20.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(3.9,356.3,1,1,-124.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-32,y:91.4,alpha:1},9).wait(1));

	// animation
	this.instance_1 = new lib.shadows1_1_mc();
	this.instance_1.setTransform(-77,214.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-160,y:99.4},9).wait(1));

	// animation
	this.instance_2 = new lib.podvodka2_mc();
	this.instance_2.setTransform(235.1,163.9,0.578,0.578,180);

	this.instance_3 = new lib.podvodka1_mc();
	this.instance_3.setTransform(201.4,214.1,0.734,0.734);

	this.instance_4 = new lib.podvodka4_mc();
	this.instance_4.setTransform(96.5,174.7,0.667,0.667);

	this.instance_5 = new lib.podvodka3_mc();
	this.instance_5.setTransform(135.5,186.4,0.667,0.667);

	this.instance_6 = new lib.lipstik3_mc();
	this.instance_6.setTransform(295,186.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.fringe0_mc();
	this.instance_8.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.eyes1_mc();
	this.instance_9.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.lips2_mc();
	this.instance_10.setTransform(3,55.5);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.lips1_mc();
	this.instance_11.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.eyebrows0_img();
	this.instance_12.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// animation
	this.instance_13 = new lib.shadows5_mc();
	this.instance_13.setTransform(3,-66);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// animation
	this.instance_14 = new lib.shadows4_mc();
	this.instance_14.setTransform(3,-66);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// animation
	this.instance_15 = new lib.shadows3_mc();
	this.instance_15.setTransform(3,-66);
	this.instance_15.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// animation
	this.instance_16 = new lib.shadows2_mc();
	this.instance_16.setTransform(3,-66);
	this.instance_16.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// animation
	this.instance_17 = new lib.shadows1_mc();
	this.instance_17.setTransform(3,-66);
	this.instance_17.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// animation
	this.instance_18 = new lib.rouge1_mc();
	this.instance_18.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

	// animation
	this.instance_19 = new lib.body0_mc();
	this.instance_19.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// animation
	this.instance_20 = new lib.hair0_mc();
	this.instance_20.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,683.6);
p.frameBounds = [rect, new cjs.Rectangle(-400,-280.6,800,654.2), new cjs.Rectangle(-400,-280.6,800,624.7), new cjs.Rectangle(-400,-280.6,800,595.3), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, rect];


(lib.makeup2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush3_mc();
	this.instance.setTransform(-231.2,57.6,1,1,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:175.7,x:-195.8,y:52.6},3).to({rotation:140.5,x:-231.2,y:57.6},3).to({rotation:175.7,x:-195.8,y:52.6},3).to({rotation:140.5,x:-231.2,y:57.6},2).to({rotation:175.7,x:-195.8,y:52.6},3).to({rotation:47.7,x:-140.8,y:43.8},10).to({rotation:63.9},6).to({rotation:47.7},6).to({rotation:63.9},6).to({rotation:-48.9,x:142.2,y:53.8},12).to({rotation:-75.6,x:150.2,y:42.8},6).to({rotation:-48.9,x:142.2,y:53.8},6).to({rotation:-75.6,x:150.2,y:42.8},6).to({rotation:-48.9,x:142.2,y:53.8},6).to({rotation:-75.6,x:150.2,y:42.8},6).to({rotation:-36.1,x:496.1,y:110.9,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.rouge1_1_mc();
	this.instance_1.setTransform(-157,100.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({y:376.9,alpha:0.012},8).to({_off:true},1).wait(72));

	// animation
	this.instance_2 = new lib.podvodka2_mc();
	this.instance_2.setTransform(235.1,163.9,0.578,0.578,180);

	this.instance_3 = new lib.podvodka1_mc();
	this.instance_3.setTransform(201.4,214.1,0.734,0.734);

	this.instance_4 = new lib.podvodka4_mc();
	this.instance_4.setTransform(96.5,174.7,0.667,0.667);

	this.instance_5 = new lib.podvodka3_mc();
	this.instance_5.setTransform(135.5,186.4,0.667,0.667);

	this.instance_6 = new lib.lipstik3_mc();
	this.instance_6.setTransform(295,186.4);

	this.instance_7 = new lib.shadows1_1_mc();
	this.instance_7.setTransform(-77,214.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(95));

	// animation
	this.instance_8 = new lib.table_mc();
	this.instance_8.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(95));

	// animation
	this.instance_9 = new lib.fringe0_mc();
	this.instance_9.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(95));

	// animation
	this.instance_10 = new lib.eyes1_mc();
	this.instance_10.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(95));

	// animation
	this.instance_11 = new lib.lips2_mc();
	this.instance_11.setTransform(3,55.5);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(95));

	// animation
	this.instance_12 = new lib.lips1_mc();
	this.instance_12.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(95));

	// animation
	this.instance_13 = new lib.eyebrows0_img();
	this.instance_13.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(95));

	// animation
	this.instance_14 = new lib.shadows5_mc();
	this.instance_14.setTransform(3,-66);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(95));

	// animation
	this.instance_15 = new lib.shadows4_mc();
	this.instance_15.setTransform(3,-66);
	this.instance_15.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(95));

	// animation
	this.instance_16 = new lib.shadows3_mc();
	this.instance_16.setTransform(3,-66);
	this.instance_16.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(95));

	// animation
	this.instance_17 = new lib.shadows2_mc();
	this.instance_17.setTransform(3,-66);
	this.instance_17.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(95));

	// animation
	this.instance_18 = new lib.shadows1_mc();
	this.instance_18.setTransform(3,-66);
	this.instance_18.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(95));

	// animation
	this.instance_19 = new lib.rouge1_mc();
	this.instance_19.setTransform(4,5);
	this.instance_19.alpha = 0.012;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(24).to({_off:false},0).to({alpha:1},60).wait(11));

	// animation
	this.instance_20 = new lib.body0_mc();
	this.instance_20.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(95));

	// animation
	this.instance_21 = new lib.hair0_mc();
	this.instance_21.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,583), new cjs.Rectangle(-400,-280.6,800,617.5), new cjs.Rectangle(-400,-280.6,800,652), new cjs.Rectangle(-400,-280.6,800,686.5), new cjs.Rectangle(-400,-280.6,800,721), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,814.8,581.7), new cjs.Rectangle(-400,-280.6,853.1,581.7), new cjs.Rectangle(-400,-280.6,890.6,581.7), new cjs.Rectangle(-400,-280.6,927.5,581.7), new cjs.Rectangle(-400,-280.6,963.9,581.7), new cjs.Rectangle(-400,-280.6,999.7,581.7), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush3_mc();
	this.instance.setTransform(-549.2,178.8,1,1,140.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-231.2,y:57.6,alpha:1},14).wait(1));

	// animation
	this.instance_1 = new lib.rouge1_1_mc();
	this.instance_1.setTransform(-275,207.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-157,y:100.9},14).wait(1));

	// animation
	this.instance_2 = new lib.podvodka2_mc();
	this.instance_2.setTransform(235.1,163.9,0.578,0.578,180);

	this.instance_3 = new lib.podvodka1_mc();
	this.instance_3.setTransform(201.4,214.1,0.734,0.734);

	this.instance_4 = new lib.podvodka4_mc();
	this.instance_4.setTransform(96.5,174.7,0.667,0.667);

	this.instance_5 = new lib.podvodka3_mc();
	this.instance_5.setTransform(135.5,186.4,0.667,0.667);

	this.instance_6 = new lib.lipstik3_mc();
	this.instance_6.setTransform(295,186.4);

	this.instance_7 = new lib.shadows1_1_mc();
	this.instance_7.setTransform(-77,214.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// animation
	this.instance_8 = new lib.table_mc();
	this.instance_8.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.fringe0_mc();
	this.instance_9.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.eyes1_mc();
	this.instance_10.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.lips2_mc();
	this.instance_11.setTransform(3,55.5);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.lips1_mc();
	this.instance_12.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.eyebrows0_img();
	this.instance_13.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.shadows5_mc();
	this.instance_14.setTransform(3,-66);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// animation
	this.instance_15 = new lib.shadows4_mc();
	this.instance_15.setTransform(3,-66);
	this.instance_15.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

	// animation
	this.instance_16 = new lib.shadows3_mc();
	this.instance_16.setTransform(3,-66);
	this.instance_16.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15));

	// animation
	this.instance_17 = new lib.shadows2_mc();
	this.instance_17.setTransform(3,-66);
	this.instance_17.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15));

	// animation
	this.instance_18 = new lib.shadows1_mc();
	this.instance_18.setTransform(3,-66);
	this.instance_18.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(15));

	// animation
	this.instance_19 = new lib.rouge1_mc();
	this.instance_19.setTransform(4,5);
	this.instance_19.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(15));

	// animation
	this.instance_20 = new lib.body0_mc();
	this.instance_20.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(15));

	// animation
	this.instance_21 = new lib.hair0_mc();
	this.instance_21.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-654.9,-280.6,1055,581.7);
p.frameBounds = [rect, new cjs.Rectangle(-632,-280.6,1032,581.7), new cjs.Rectangle(-609.3,-280.6,1009.3,581.7), new cjs.Rectangle(-586.5,-280.6,986.6,581.7), new cjs.Rectangle(-563.8,-280.6,963.9,581.7), new cjs.Rectangle(-541.1,-280.6,941.2,581.7), new cjs.Rectangle(-518.4,-280.6,918.5,581.7), new cjs.Rectangle(-495.7,-280.6,895.7,581.7), new cjs.Rectangle(-473,-280.6,873,581.7), new cjs.Rectangle(-450.3,-280.6,850.3,581.7), new cjs.Rectangle(-427.6,-280.6,827.6,581.7), new cjs.Rectangle(-404.9,-280.6,804.9,581.7), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect];


(lib.makeup1_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstik2_mc();
	this.instance.setTransform(-116,120.4,1,1,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:38.4,x:-91,y:114.4},7).to({x:-66,y:108.4},8).to({x:-53,y:112.5},4).to({x:-42,y:108.5},4).to({x:-10,y:111.5},8).to({x:-50,y:136.5},13).to({x:-95,y:115.5},14).to({y:349.5,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.table_mc();
	this.instance_1.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// animation
	this.instance_2 = new lib.fringe0_mc();
	this.instance_2.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

	// animation
	this.instance_3 = new lib.eyes1_mc();
	this.instance_3.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

	// animation
	this.instance_4 = new lib.lips0defect_mc();
	this.instance_4.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({alpha:0.012},51).to({_off:true},1).wait(11));

	// animation
	this.instance_5 = new lib.lips1_mc();
	this.instance_5.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70));

	// animation
	this.instance_6 = new lib.eyebrows0_img();
	this.instance_6.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70));

	// animation
	this.instance_7 = new lib.body0_mc();
	this.instance_7.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70));

	// animation
	this.instance_8 = new lib.hair0_mc();
	this.instance_8.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,581.8), new cjs.Rectangle(-400,-280.6,800,605.1), new cjs.Rectangle(-400,-280.6,800,628.5), new cjs.Rectangle(-400,-280.6,800,651.9), new cjs.Rectangle(-400,-280.6,800,675.3), new cjs.Rectangle(-400,-280.6,800,698.7), new cjs.Rectangle(-400,-280.6,800,722.3), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup1_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstik2_mc();
	this.instance.setTransform(140,176.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:31.4,x:-116,y:120.4},9).wait(1));

	// animation
	this.instance_1 = new lib.lipstik1_mc();
	this.instance_1.setTransform(94.4,176.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:81.9,y:422.8,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.table_mc();
	this.instance_2.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.fringe0_mc();
	this.instance_3.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.eyes1_mc();
	this.instance_4.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.lips0defect_mc();
	this.instance_5.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.lips1_mc();
	this.instance_6.setTransform(4.4,55.3);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.eyebrows0_img();
	this.instance_7.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.body0_mc();
	this.instance_8.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.hair0_mc();
	this.instance_9.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, new cjs.Rectangle(-400,-280.6,800,589.8), new cjs.Rectangle(-400,-280.6,800,620.5), new cjs.Rectangle(-400,-280.6,800,651.3), new cjs.Rectangle(-400,-280.6,800,682), new cjs.Rectangle(-400,-280.6,800,712.7), new cjs.Rectangle(-400,-280.6,800,743.5), new cjs.Rectangle(-400,-280.6,800,774.2), new cjs.Rectangle(-400,-280.6,800,804.9), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup1_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pincet_mc();
	this.instance.setTransform(204.3,-168.5,1,1,-18.4,0,0,96.5,25.2);

	this.instance_1 = new lib.pincet2_mc();
	this.instance_1.setTransform(189.3,-160.5,1,1,-13.7,0,0,96.5,25.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-13.7,x:194.3,y:-159.5},4).to({_off:true,x:189.3,y:-160.5},2).to({_off:false,x:175.1,y:-165.5},3).to({_off:true,x:165.1,y:-166.5},3).to({_off:false,x:147.3,y:-163.5},4).to({_off:true,x:132.3,y:-164.5},3).to({_off:false,x:122.3,y:-162.5},3).to({_off:true,x:109.3,y:-163.5},3).to({_off:false,x:107.3,y:-160.5},2).to({x:448.3,y:-224.5,alpha:0.012},7).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},2).to({_off:true,x:175.1,y:-165.5},3).to({_off:false,x:165.1,y:-166.5},3).to({_off:true,x:147.3,y:-163.5},4).to({_off:false,x:132.3,y:-164.5},3).to({_off:true,x:122.3,y:-162.5},3).to({_off:false,x:109.3,y:-163.5},3).to({_off:true,x:107.3,y:-160.5},2).wait(9));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(140,176.4);

	this.instance_3 = new lib.lipstik1_mc();
	this.instance_3.setTransform(94.4,176.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(36));

	// animation
	this.instance_4 = new lib.table_mc();
	this.instance_4.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36));

	// animation
	this.instance_5 = new lib.fringe0_mc();
	this.instance_5.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36));

	// animation
	this.instance_6 = new lib.eyes1_mc();
	this.instance_6.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36));

	// animation
	this.instance_7 = new lib.lips0defect_mc();
	this.instance_7.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36));

	// animation
	this.instance_8 = new lib.lips1_mc();
	this.instance_8.setTransform(4.4,55.3);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36));

	// animation
	this.instance_9 = new lib.volos_mc();
	this.instance_9.setTransform(90.7,-106.7,1,1,0,15.8,-164.2);

	this.instance_10 = new lib.volos_mc();
	this.instance_10.setTransform(103.3,-101.2,1,1,0,15.8,-164.2);

	this.instance_11 = new lib.volos_mc();
	this.instance_11.setTransform(108.7,-99.8,1,1,0,43,-137);

	this.instance_12 = new lib.volos_mc();
	this.instance_12.setTransform(113.9,-94.7,1,1,0,54,-126);

	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(47.1,-101.9,1,1,0,-16.5,163.5);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(34.7,-101.9,1,1,0,-16.5,163.5);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(74.9,-102.6,1,1,0,0,180);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(62.9,-105.1,1,1,0,0,180);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(53.6,-105.1,1,1,0,0,180);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(39.6,-102.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17,p:{x:53.6,y:-105.1}},{t:this.instance_16,p:{x:62.9,y:-105.1}},{t:this.instance_15,p:{x:74.9,y:-102.6}},{t:this.instance_14,p:{skewX:-16.5,skewY:163.5,x:34.7,y:-101.9}},{t:this.instance_13,p:{x:47.1,skewX:-16.5,skewY:163.5,y:-101.9}},{t:this.instance_12,p:{skewX:54,skewY:-126,x:113.9,y:-94.7}},{t:this.instance_11,p:{skewX:43,skewY:-137,x:108.7,y:-99.8}},{t:this.instance_10,p:{skewX:15.8,skewY:-164.2,x:103.3,y:-101.2}},{t:this.instance_9,p:{skewX:15.8,skewY:-164.2,x:90.7,y:-106.7}}]}).to({state:[{t:this.instance_17,p:{x:39.6,y:-102.6}},{t:this.instance_16,p:{x:53.6,y:-105.1}},{t:this.instance_15,p:{x:62.9,y:-105.1}},{t:this.instance_14,p:{skewX:0,skewY:180,x:74.9,y:-102.6}},{t:this.instance_13,p:{x:34.7,skewX:-16.5,skewY:163.5,y:-101.9}},{t:this.instance_12,p:{skewX:-16.5,skewY:163.5,x:47.1,y:-101.9}},{t:this.instance_11,p:{skewX:43,skewY:-137,x:108.7,y:-99.8}},{t:this.instance_10,p:{skewX:15.8,skewY:-164.2,x:103.3,y:-101.2}},{t:this.instance_9,p:{skewX:15.8,skewY:-164.2,x:90.7,y:-106.7}}]},4).to({state:[{t:this.instance_16,p:{x:39.6,y:-102.6}},{t:this.instance_15,p:{x:53.6,y:-105.1}},{t:this.instance_14,p:{skewX:0,skewY:180,x:62.9,y:-105.1}},{t:this.instance_13,p:{x:74.9,skewX:0,skewY:180,y:-102.6}},{t:this.instance_12,p:{skewX:-16.5,skewY:163.5,x:34.7,y:-101.9}},{t:this.instance_11,p:{skewX:-16.5,skewY:163.5,x:47.1,y:-101.9}},{t:this.instance_10,p:{skewX:15.8,skewY:-164.2,x:103.3,y:-101.2}},{t:this.instance_9,p:{skewX:15.8,skewY:-164.2,x:90.7,y:-106.7}}]},3).to({state:[{t:this.instance_15,p:{x:39.6,y:-102.6}},{t:this.instance_14,p:{skewX:0,skewY:180,x:53.6,y:-105.1}},{t:this.instance_13,p:{x:62.9,skewX:0,skewY:180,y:-105.1}},{t:this.instance_12,p:{skewX:0,skewY:180,x:74.9,y:-102.6}},{t:this.instance_11,p:{skewX:-16.5,skewY:163.5,x:34.7,y:-101.9}},{t:this.instance_10,p:{skewX:-16.5,skewY:163.5,x:47.1,y:-101.9}},{t:this.instance_9,p:{skewX:15.8,skewY:-164.2,x:90.7,y:-106.7}}]},3).to({state:[{t:this.instance_14,p:{skewX:0,skewY:180,x:39.6,y:-102.6}},{t:this.instance_13,p:{x:53.6,skewX:0,skewY:180,y:-105.1}},{t:this.instance_12,p:{skewX:0,skewY:180,x:62.9,y:-105.1}},{t:this.instance_11,p:{skewX:0,skewY:180,x:74.9,y:-102.6}},{t:this.instance_10,p:{skewX:-16.5,skewY:163.5,x:34.7,y:-101.9}},{t:this.instance_9,p:{skewX:-16.5,skewY:163.5,x:47.1,y:-101.9}}]},3).to({state:[{t:this.instance_13,p:{x:39.6,skewX:0,skewY:180,y:-102.6}},{t:this.instance_12,p:{skewX:0,skewY:180,x:53.6,y:-105.1}},{t:this.instance_11,p:{skewX:0,skewY:180,x:62.9,y:-105.1}},{t:this.instance_10,p:{skewX:-16.5,skewY:163.5,x:34.7,y:-101.9}},{t:this.instance_9,p:{skewX:-16.5,skewY:163.5,x:47.1,y:-101.9}}]},3).to({state:[{t:this.instance_12,p:{skewX:0,skewY:180,x:39.6,y:-102.6}},{t:this.instance_11,p:{skewX:0,skewY:180,x:53.6,y:-105.1}},{t:this.instance_10,p:{skewX:-16.5,skewY:163.5,x:34.7,y:-101.9}},{t:this.instance_9,p:{skewX:-16.5,skewY:163.5,x:47.1,y:-101.9}}]},2).to({state:[{t:this.instance_11,p:{skewX:0,skewY:180,x:39.6,y:-102.6}},{t:this.instance_10,p:{skewX:-16.5,skewY:163.5,x:34.7,y:-101.9}},{t:this.instance_9,p:{skewX:-16.5,skewY:163.5,x:47.1,y:-101.9}}]},3).to({state:[{t:this.instance_10,p:{skewX:0,skewY:180,x:39.6,y:-102.6}},{t:this.instance_9,p:{skewX:-16.5,skewY:163.5,x:34.7,y:-101.9}}]},2).to({state:[{t:this.instance_9,p:{skewX:-16.5,skewY:163.5,x:34.7,y:-101.9}}]},3).to({state:[]},1).wait(9));

	// animation
	this.instance_19 = new lib.eyebrows0_img();
	this.instance_19.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(36));

	// animation
	this.instance_20 = new lib.body0_mc();
	this.instance_20.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(36));

	// animation
	this.instance_21 = new lib.hair0_mc();
	this.instance_21.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,845.1,581.7), new cjs.Rectangle(-400,-280.6,893.9,581.7), new cjs.Rectangle(-400,-322.1,963,623.1), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.location_0_5_mc();
	this.instance.setTransform(0,-658);

	this.instance_1 = new lib.location_0_6_mc();
	this.instance_1.setTransform(0,-329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(3));

	// graph
	this.instance_2 = new lib.location_0_7_mc();

	this.instance_3 = new lib.location_1_7_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.filmstrip_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-1100,540,2200);
p.frameBounds = [rect, rect, rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.location_0_4_mc();
	this.instance.setTransform(0,-658);

	this.instance_1 = new lib.location_0_5_mc();
	this.instance_1.setTransform(0,-329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(3));

	// graph
	this.instance_2 = new lib.location_0_6_mc();

	this.instance_3 = new lib.location_1_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// decor
	this.instance_4 = new lib.location_0_7_mc();
	this.instance_4.setTransform(0,332);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// bg
	this.instance_5 = new lib.filmstrip_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-1100,540,2200);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.location_0_3_mc();
	this.instance.setTransform(0,-658);

	this.instance_1 = new lib.location_0_4_mc();
	this.instance_1.setTransform(0,-329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(3));

	// graph
	this.instance_2 = new lib.location_0_5_mc();

	this.instance_3 = new lib.location_1_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// decor
	this.instance_4 = new lib.location_0_7_mc();
	this.instance_4.setTransform(0,664);

	this.instance_5 = new lib.location_0_6_mc();
	this.instance_5.setTransform(0,332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(3));

	// bg
	this.instance_6 = new lib.filmstrip_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-1100,540,2200);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.location_0_2_mc();
	this.instance.setTransform(0,-658);

	this.instance_1 = new lib.location_0_3_mc();
	this.instance_1.setTransform(0,-329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(3));

	// graph
	this.instance_2 = new lib.location_0_4_mc();

	this.instance_3 = new lib.location_1_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// decor
	this.instance_4 = new lib.location_0_6_mc();
	this.instance_4.setTransform(0,664);

	this.instance_5 = new lib.location_0_5_mc();
	this.instance_5.setTransform(0,332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(3));

	// bg
	this.instance_6 = new lib.filmstrip_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-1100,540,2200);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.location_0_1_mc();
	this.instance.setTransform(0,-658);

	this.instance_1 = new lib.location_0_2_mc();
	this.instance_1.setTransform(0,-329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(3));

	// graph
	this.instance_2 = new lib.location_0_3_mc();

	this.instance_3 = new lib.location_1_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// decor
	this.instance_4 = new lib.location_0_5_mc();
	this.instance_4.setTransform(0,664);

	this.instance_5 = new lib.location_0_4_mc();
	this.instance_5.setTransform(0,332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(3));

	// bg
	this.instance_6 = new lib.filmstrip_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-1100,540,2200);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.location_0_1_mc();
	this.instance.setTransform(0,-329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// graph
	this.instance_1 = new lib.location_0_2_mc();

	this.instance_2 = new lib.location_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.location_0_4_mc();
	this.instance_3.setTransform(0,664);

	this.instance_4 = new lib.location_0_3_mc();
	this.instance_4.setTransform(0,332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(3));

	// bg
	this.instance_5 = new lib.filmstrip_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-1100,540,2200);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_mc();

	this.instance_1 = new lib.location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.location_0_3_mc();
	this.instance_2.setTransform(0,664);

	this.instance_3 = new lib.location_0_2_mc();
	this.instance_3.setTransform(0,332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(3));

	// bg
	this.instance_4 = new lib.filmstrip_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-1100,540,2200);
p.frameBounds = [rect, rect, rect];


(lib.lens_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lens_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.karli_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.drops4_mc();
	this.instance.setTransform(1.3,106,1,1,0,0,0,81,41.6);

	this.instance_1 = new lib.drops3_mc();
	this.instance_1.setTransform(50.4,22.3,1,1,0,0,0,65,39.1);

	this.instance_2 = new lib.drops2_mc();
	this.instance_2.setTransform(-74.3,51.5,1,1,0,0,0,41,53.9);

	this.instance_3 = new lib.drops1_mc();
	this.instance_3.setTransform(-1.1,-100.4,1,1,0,0,0,96.2,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.3,-147.4,230.7,294.8);
p.frameBounds = [rect];


(lib.item1_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.84,scaleY:1.84,rotation:14,x:-51.9,y:-180.9},9).to({x:152.1,y:-128.9},5).to({x:25.3,y:332.7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect, new cjs.Rectangle(-63.3,-130.8,115.1,221.5), new cjs.Rectangle(-77,-161.8,131,243.2), new cjs.Rectangle(-91.2,-192.9,147.9,265.2), new cjs.Rectangle(-105.8,-224.1,165.5,287.5), new cjs.Rectangle(-121.2,-255.6,184.8,310.3), new cjs.Rectangle(-136.7,-287,204.1,332.8), new cjs.Rectangle(-152.4,-318.4,224.1,355.5), new cjs.Rectangle(-168.6,-349.9,244.9,378.2), new cjs.Rectangle(-185.6,-381.6,267.4,401.5), new cjs.Rectangle(-144.3,-371,266.3,400.9), new cjs.Rectangle(-103.5,-360.6,266.3,400.9), new cjs.Rectangle(-62.7,-350.2,266.3,400.9), new cjs.Rectangle(-21.9,-339.8,266.3,400.9), new cjs.Rectangle(18.4,-329.6,267.4,401.5), new cjs.Rectangle(-6.3,-237,266.3,400.9), new cjs.Rectangle(-31.7,-144.7,266.3,400.9), new cjs.Rectangle(-57,-52.4,266.3,400.9), new cjs.Rectangle(-82.4,40,266.3,400.9), new cjs.Rectangle(-108.4,132,267.4,401.5)];


(lib.it2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it26_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-24.7,x:238,y:147},9).to({x:255,y:416},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-81.7,208.3,167.6);
p.frameBounds = [rect, new cjs.Rectangle(-79.3,-68.1,210.7,173.1), new cjs.Rectangle(-53.9,-54.5,212.6,178.8), new cjs.Rectangle(-28.4,-40.7,214.3,184), new cjs.Rectangle(-2.6,-26.7,215.3,188.9), new cjs.Rectangle(23.5,-12.5,215.9,193.2), new cjs.Rectangle(49.8,2,216,197.1), new cjs.Rectangle(76.4,16.6,215.6,200.6), new cjs.Rectangle(103.2,31.5,215.8,203.6), new cjs.Rectangle(108.9,29.4,259.2,239.2), new cjs.Rectangle(130.9,73.5,217.6,206.1), new cjs.Rectangle(132.6,100.4,217.6,206.1), new cjs.Rectangle(134.3,127.3,217.6,206.1), new cjs.Rectangle(136,154.2,217.6,206.1), new cjs.Rectangle(137.7,181.1,217.6,206.1), new cjs.Rectangle(139.4,208,217.6,206.1), new cjs.Rectangle(141.1,234.9,217.6,206.1), new cjs.Rectangle(142.8,261.8,217.6,206.1), new cjs.Rectangle(144.5,288.7,217.6,206.1), new cjs.Rectangle(125.9,298.4,259.2,239.3)];


(lib.it2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it25_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:47,x:-98,y:85},10).to({x:-118,y:454},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172,-76,338.8,154.4);
p.frameBounds = [rect, new cjs.Rectangle(-183.5,-76.6,341.3,174), new cjs.Rectangle(-193.9,-77,342.7,193.1), new cjs.Rectangle(-203.2,-79,345,213.3), new cjs.Rectangle(-211.9,-81.6,345.5,233.2), new cjs.Rectangle(-222.1,-82.9,346.4,251), new cjs.Rectangle(-231.3,-83.9,345,269.8), new cjs.Rectangle(-239.2,-83.9,341.3,286.9), new cjs.Rectangle(-246,-82.9,335.2,301.9), new cjs.Rectangle(-251.6,-80.9,326.9,314.9), new cjs.Rectangle(-272.6,-92.7,344,353), new cjs.Rectangle(-258.5,-36.7,316.7,325.3), new cjs.Rectangle(-260.8,4.3,316.7,325.3), new cjs.Rectangle(-263,45.3,316.7,325.3), new cjs.Rectangle(-265.2,86.3,316.7,325.3), new cjs.Rectangle(-267.4,127.2,316.7,325.3), new cjs.Rectangle(-269.7,168.2,316.7,325.3), new cjs.Rectangle(-271.9,209.2,316.7,325.3), new cjs.Rectangle(-274.1,250.2,316.7,325.3), new cjs.Rectangle(-292.6,276.3,344,353)];


(lib.it2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it24_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:203,y:-34},9).to({x:234,y:200},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-62.4,-88.8,170,170), new cjs.Rectangle(-39.9,-92.5,170,170), new cjs.Rectangle(-17.3,-96.3,170,170), new cjs.Rectangle(5.2,-100.1,170,170), new cjs.Rectangle(27.8,-103.9,170,170), new cjs.Rectangle(50.4,-107.6,170,170), new cjs.Rectangle(72.9,-111.4,170,170), new cjs.Rectangle(95.5,-115.2,170,170), new cjs.Rectangle(118,-119,170,170), new cjs.Rectangle(121.1,-95.6,170,170), new cjs.Rectangle(124.2,-72.2,170,170), new cjs.Rectangle(127.3,-48.8,170,170), new cjs.Rectangle(130.4,-25.4,170,170), new cjs.Rectangle(133.5,-2,170,170), new cjs.Rectangle(136.6,21.4,170,170), new cjs.Rectangle(139.7,44.8,170,170), new cjs.Rectangle(142.8,68.2,170,170), new cjs.Rectangle(145.9,91.6,170,170), new cjs.Rectangle(149,115,170,170)];


(lib.it2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it23_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-47.9,x:-211,y:-12},9).to({x:-260,y:244},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-68.4,203.6,136.9);
p.frameBounds = [rect, new cjs.Rectangle(-125.1,-78.6,197.4,153), new cjs.Rectangle(-146.3,-88.1,198.9,167.7), new cjs.Rectangle(-172.8,-97.1,204.9,181.1), new cjs.Rectangle(-198.4,-105.4,209.3,193.3), new cjs.Rectangle(-223,-112.6,211.7,203.4), new cjs.Rectangle(-246.8,-118.9,212.3,211.7), new cjs.Rectangle(-269.6,-124.5,211.1,218.6), new cjs.Rectangle(-291.5,-128.8,208.1,223.2), new cjs.Rectangle(-330.8,-132.4,238,242.8), new cjs.Rectangle(-317.4,-106.7,203.3,226), new cjs.Rectangle(-322.3,-81.1,203.3,226), new cjs.Rectangle(-327.2,-55.5,203.3,226), new cjs.Rectangle(-332.1,-29.9,203.3,226), new cjs.Rectangle(-337,-4.3,203.3,226), new cjs.Rectangle(-341.9,21.3,203.3,226), new cjs.Rectangle(-346.8,46.9,203.3,226), new cjs.Rectangle(-351.7,72.5,203.3,226), new cjs.Rectangle(-356.6,98.1,203.3,226), new cjs.Rectangle(-379.8,123.6,238,242.8)];


(lib.it2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it22_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:58,y:300},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-122.8,125.7,248);
p.frameBounds = [rect, new cjs.Rectangle(-56.5,-101.4,125.7,248), new cjs.Rectangle(-52.3,-79.9,125.7,248), new cjs.Rectangle(-48.2,-58.5,125.7,248), new cjs.Rectangle(-44.1,-37.1,125.7,248), new cjs.Rectangle(-39.9,-15.7,125.7,248), new cjs.Rectangle(-35.8,5.8,125.7,248), new cjs.Rectangle(-31.6,27.2,125.7,248), new cjs.Rectangle(-27.5,48.6,125.7,248), new cjs.Rectangle(-23.3,70,125.7,248), new cjs.Rectangle(-19.2,91.5,125.7,248), new cjs.Rectangle(-15.1,112.9,125.7,248), new cjs.Rectangle(-10.9,134.3,125.7,248), new cjs.Rectangle(-6.8,155.8,125.7,248), new cjs.Rectangle(-2.6,177.2,125.7,248)];


(lib.it2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it21_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-287,y:50},14).to({x:-310,y:398.9},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.1,-145.6,221,281.6);
p.frameBounds = [rect, new cjs.Rectangle(-129.6,-142,221,281.6), new cjs.Rectangle(-150.1,-138.4,221,281.6), new cjs.Rectangle(-170.6,-134.9,221,281.6), new cjs.Rectangle(-191.1,-131.3,221,281.6), new cjs.Rectangle(-211.6,-127.7,221,281.6), new cjs.Rectangle(-232.1,-124.1,221,281.6), new cjs.Rectangle(-252.6,-120.6,221,281.6), new cjs.Rectangle(-273.1,-117,221,281.6), new cjs.Rectangle(-293.6,-113.4,221,281.6), new cjs.Rectangle(-314.1,-109.9,221,281.6), new cjs.Rectangle(-334.6,-106.3,221,281.6), new cjs.Rectangle(-355.1,-102.7,221,281.6), new cjs.Rectangle(-375.6,-99.1,221,281.6), new cjs.Rectangle(-396.1,-95.6,221,281.6), new cjs.Rectangle(-398.4,-60.7,221,281.6), new cjs.Rectangle(-400.7,-25.8,221,281.6), new cjs.Rectangle(-403,9.1,221,281.6), new cjs.Rectangle(-405.3,44,221,281.6), new cjs.Rectangle(-407.6,78.9,221,281.6), new cjs.Rectangle(-409.9,113.8,221,281.6), new cjs.Rectangle(-412.2,148.7,221,281.6), new cjs.Rectangle(-414.5,183.5,221,281.6), new cjs.Rectangle(-416.8,218.4,221,281.6), new cjs.Rectangle(-419.1,253.3,221,281.6)];


(lib.it1_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it15_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.31,scaleY:1.31,x:6,y:-9},9).to({scaleX:1.56,scaleY:1.56,x:113,y:-44},10).to({rotation:-78.7,x:117,y:171.9},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,-41.5,121,79.2);
p.frameBounds = [rect, new cjs.Rectangle(-62.1,-44,125.2,81.9), new cjs.Rectangle(-63.6,-46.4,129.4,84.7), new cjs.Rectangle(-65,-48.9,133.6,87.4), new cjs.Rectangle(-66.5,-51.3,137.8,90.2), new cjs.Rectangle(-67.9,-53.8,142,92.9), new cjs.Rectangle(-69.4,-56.2,146.3,95.7), new cjs.Rectangle(-70.8,-58.6,150.5,98.4), new cjs.Rectangle(-72.2,-61.1,154.6,101.2), new cjs.Rectangle(-73.7,-63.5,158.8,104), new cjs.Rectangle(-64.5,-68.1,161.9,105.9), new cjs.Rectangle(-55.3,-72.6,164.9,107.9), new cjs.Rectangle(-46.1,-77.2,167.9,109.9), new cjs.Rectangle(-36.9,-81.7,171,111.9), new cjs.Rectangle(-27.7,-86.2,174,113.9), new cjs.Rectangle(-18.6,-90.8,177,115.8), new cjs.Rectangle(-9.4,-95.4,180.1,117.8), new cjs.Rectangle(-0.2,-99.9,183,119.8), new cjs.Rectangle(8.9,-104.4,186.1,121.8), new cjs.Rectangle(18.1,-108.9,189.1,123.8), new cjs.Rectangle(20.4,-83.3,189.1,127.4), new cjs.Rectangle(24.3,-69,185.5,141.3), new cjs.Rectangle(25.6,-55,182.8,153.9), new cjs.Rectangle(24.7,-39.4,180.5,163.6), new cjs.Rectangle(25.4,-22.3,179.2,172.3), new cjs.Rectangle(27.8,-3.4,175.1,177.9), new cjs.Rectangle(32,17.1,167.7,180.1), new cjs.Rectangle(37.7,39.1,157.2,179), new cjs.Rectangle(44.9,63,143.5,179.1), new cjs.Rectangle(34.8,66.8,158.3,209.7)];


(lib.it1_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it12_mc();
	this.instance.setTransform(-28,0,0.642,0.642);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0},9).to({rotation:54.7,x:-415,y:-58.9},10).to({x:-482,y:89},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.9,-28.6,109.9,57.2);
p.frameBounds = [rect, new cjs.Rectangle(-83.2,-30.3,116.7,60.7), new cjs.Rectangle(-83.5,-32.1,123.5,64.3), new cjs.Rectangle(-83.7,-33.8,130.3,67.8), new cjs.Rectangle(-84,-35.6,137.1,71.3), new cjs.Rectangle(-84.3,-37.4,143.8,74.9), new cjs.Rectangle(-84.6,-39.1,150.6,78.4), new cjs.Rectangle(-84.9,-40.9,157.4,82), new cjs.Rectangle(-85.2,-42.7,164.2,85.5), new cjs.Rectangle(-85.5,-44.5,171,89), new cjs.Rectangle(-130.7,-58.1,178.5,104.4), new cjs.Rectangle(-175.2,-71.5,184.5,119.4), new cjs.Rectangle(-218.9,-84.3,189,133.3), new cjs.Rectangle(-261.7,-96.5,191.6,146), new cjs.Rectangle(-303.7,-108.1,192.6,157.3), new cjs.Rectangle(-344.8,-118.9,191.7,167.3), new cjs.Rectangle(-385,-129,189.1,175.6), new cjs.Rectangle(-424.4,-138.2,184.8,182.1), new cjs.Rectangle(-462.9,-146.6,178.8,187.3), new cjs.Rectangle(-500.7,-154.4,171.4,190.9), new cjs.Rectangle(-507.3,-139.4,171.2,190.7), new cjs.Rectangle(-514,-124.6,171.2,190.7), new cjs.Rectangle(-520.7,-109.8,171.2,190.7), new cjs.Rectangle(-527.4,-95.1,171.2,190.7), new cjs.Rectangle(-534.1,-80.3,171.2,190.7), new cjs.Rectangle(-540.8,-65.5,171.2,190.7), new cjs.Rectangle(-547.5,-50.7,171.2,190.7), new cjs.Rectangle(-554.2,-35.9,171.2,190.7), new cjs.Rectangle(-560.9,-21.1,171.2,190.7), new cjs.Rectangle(-567.7,-6.4,171.4,190.9)];


(lib.it1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it17_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.23,scaleY:1.23,rotation:-52.2,x:-100,y:-8.9},9).to({scaleX:1.43,scaleY:1.43,rotation:-75.2,x:117.9,y:212.1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-55,50,110);
p.frameBounds = [rect, new cjs.Rectangle(-42.2,-59.7,62.3,117.4), new cjs.Rectangle(-59.5,-63.9,74.6,123.8), new cjs.Rectangle(-76.6,-67.5,86.6,129.1), new cjs.Rectangle(-93.5,-70.5,98.2,133.1), new cjs.Rectangle(-110.3,-72.8,109.5,135.8), new cjs.Rectangle(-126.5,-74.4,119.7,137), new cjs.Rectangle(-142.4,-75.4,129.2,136.9), new cjs.Rectangle(-157.7,-75.4,137.5,135), new cjs.Rectangle(-172.5,-74.8,145,131.8), new cjs.Rectangle(-159,-59.8,147,131.1), new cjs.Rectangle(-145.8,-44.6,149.5,130.2), new cjs.Rectangle(-132.3,-29.5,151.7,129.5), new cjs.Rectangle(-118.8,-14.3,153.8,128.7), new cjs.Rectangle(-105.4,0.9,155.9,127.6), new cjs.Rectangle(-91.8,16.2,157.8,126.4), new cjs.Rectangle(-78.3,31.7,159.7,125.1), new cjs.Rectangle(-64.6,47.1,161.4,123.7), new cjs.Rectangle(-50.9,62.6,163.1,122.1), new cjs.Rectangle(-37.1,78.4,164.6,120), new cjs.Rectangle(-23.3,94.1,166,118.1), new cjs.Rectangle(-9.4,109.9,167.2,116.1), new cjs.Rectangle(4.7,125.6,168.3,114), new cjs.Rectangle(18.6,141.5,169.4,111.6), new cjs.Rectangle(32.7,157.4,170.4,109.3)];


(lib.it1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it16_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.49,scaleY:1.49},9).to({x:-290,y:-86},10).to({x:-320,y:121},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.7,-40.8,99.8,79.9);
p.frameBounds = [rect, new cjs.Rectangle(-53.5,-43,105.2,84.2), new cjs.Rectangle(-56.2,-45.2,110.6,88.5), new cjs.Rectangle(-59,-47.4,116.1,92.9), new cjs.Rectangle(-61.7,-49.6,121.5,97.2), new cjs.Rectangle(-64.5,-51.9,126.9,101.5), new cjs.Rectangle(-67.2,-54.1,132.3,105.8), new cjs.Rectangle(-70,-56.3,137.7,110.2), new cjs.Rectangle(-72.7,-58.5,143.1,114.5), new cjs.Rectangle(-75.5,-60.7,148.5,118.8), new cjs.Rectangle(-104.5,-69.3,148.5,118.8), new cjs.Rectangle(-133.5,-77.9,148.5,118.8), new cjs.Rectangle(-162.5,-86.5,148.5,118.8), new cjs.Rectangle(-191.5,-95.1,148.5,118.8), new cjs.Rectangle(-220.5,-103.7,148.5,118.8), new cjs.Rectangle(-249.5,-112.3,148.5,118.8), new cjs.Rectangle(-278.5,-120.9,148.5,118.8), new cjs.Rectangle(-307.5,-129.5,148.5,118.8), new cjs.Rectangle(-336.5,-138.1,148.5,118.8), new cjs.Rectangle(-365.5,-146.7,148.5,118.8), new cjs.Rectangle(-368.5,-126,148.5,118.8), new cjs.Rectangle(-371.5,-105.3,148.5,118.8), new cjs.Rectangle(-374.5,-84.6,148.5,118.8), new cjs.Rectangle(-377.5,-63.9,148.5,118.8), new cjs.Rectangle(-380.5,-43.3,148.5,118.8), new cjs.Rectangle(-383.5,-22.6,148.5,118.8), new cjs.Rectangle(-386.5,-1.9,148.5,118.8), new cjs.Rectangle(-389.5,18.8,148.5,118.8), new cjs.Rectangle(-392.5,39.5,148.5,118.8), new cjs.Rectangle(-395.5,60.3,148.5,118.8)];


(lib.it1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it14_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.28,scaleY:1.28,x:-56,y:-126.9},9).to({x:-294,y:-161.9},10).to({rotation:45,x:-304,y:-7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-30,120,60);
p.frameBounds = [rect, new cjs.Rectangle(-68,-45,123.7,61.9), new cjs.Rectangle(-76.2,-60,127.5,63.8), new cjs.Rectangle(-84.2,-75.1,131.2,65.6), new cjs.Rectangle(-92.3,-90.1,134.9,67.4), new cjs.Rectangle(-100.4,-105.2,138.7,69.4), new cjs.Rectangle(-108.5,-120.2,142.4,71.2), new cjs.Rectangle(-116.6,-135.2,146.1,73.1), new cjs.Rectangle(-124.7,-150.3,149.9,75), new cjs.Rectangle(-132.8,-165.3,153.6,76.8), new cjs.Rectangle(-156.6,-168.7,153.6,76.8), new cjs.Rectangle(-180.4,-172.2,153.6,76.8), new cjs.Rectangle(-204.2,-175.7,153.6,76.8), new cjs.Rectangle(-228,-179.2,153.6,76.8), new cjs.Rectangle(-251.8,-182.7,153.6,76.8), new cjs.Rectangle(-275.6,-186.2,153.6,76.8), new cjs.Rectangle(-299.4,-189.7,153.6,76.8), new cjs.Rectangle(-323.2,-193.2,153.6,76.8), new cjs.Rectangle(-347,-196.7,153.6,76.8), new cjs.Rectangle(-370.8,-200.3,153.6,76.8), new cjs.Rectangle(-374.5,-190.7,159.1,88.6), new cjs.Rectangle(-377.7,-180.7,163.5,99.4), new cjs.Rectangle(-380.6,-170.8,167.3,110.6), new cjs.Rectangle(-382.7,-160,169.6,120.1), new cjs.Rectangle(-384.4,-149.2,171,129.3), new cjs.Rectangle(-385.6,-138.1,171.5,138), new cjs.Rectangle(-386.4,-126.2,170.9,145.3), new cjs.Rectangle(-386.5,-114,169.3,152.1), new cjs.Rectangle(-386.1,-101.5,166.5,157.8), new cjs.Rectangle(-385.4,-88.4,162.9,162.9)];


(lib.it1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.it13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.24,scaleY:1.24},9).to({x:-385,y:395.8},20).to({scaleX:1.48,scaleY:1.48,rotation:-4.5,x:-287.6,y:524.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.1,-24.3,108.7,45.8);
p.frameBounds = [rect, new cjs.Rectangle(-58.6,-24.9,111.6,47.1), new cjs.Rectangle(-60.2,-25.6,114.6,48.3), new cjs.Rectangle(-61.7,-26.2,117.5,49.5), new cjs.Rectangle(-63.3,-26.9,120.5,50.8), new cjs.Rectangle(-64.8,-27.6,123.4,52), new cjs.Rectangle(-66.3,-28.2,126.3,53.3), new cjs.Rectangle(-67.9,-28.9,129.2,54.5), new cjs.Rectangle(-69.4,-29.5,132.2,55.7), new cjs.Rectangle(-71,-30.2,135.1,57), new cjs.Rectangle(-90.2,-10.4,135.1,57), new cjs.Rectangle(-109.5,9.4,135.1,57), new cjs.Rectangle(-128.7,29.2,135.1,57), new cjs.Rectangle(-148,49,135.1,57), new cjs.Rectangle(-167.2,68.8,135.1,57), new cjs.Rectangle(-186.5,88.6,135.1,57), new cjs.Rectangle(-205.7,108.4,135.1,57), new cjs.Rectangle(-225,128.1,135.1,57), new cjs.Rectangle(-244.2,147.9,135.1,56.9), new cjs.Rectangle(-263.5,167.7,135.1,57), new cjs.Rectangle(-282.8,187.5,135.1,56.9), new cjs.Rectangle(-302,207.3,135.1,56.9), new cjs.Rectangle(-321.3,227.1,135.1,56.9), new cjs.Rectangle(-340.5,246.9,135.1,57), new cjs.Rectangle(-359.8,266.7,135.1,57), new cjs.Rectangle(-379,286.5,135.1,56.9), new cjs.Rectangle(-398.3,306.3,135.1,56.9), new cjs.Rectangle(-417.5,326,135.1,56.9), new cjs.Rectangle(-436.8,345.8,135.1,56.9), new cjs.Rectangle(-456,365.6,135.1,56.9), new cjs.Rectangle(-447.5,378.3,137.5,57.4), new cjs.Rectangle(-438.9,391,139.7,57.5), new cjs.Rectangle(-430.3,403.8,141.9,58.7), new cjs.Rectangle(-421.7,416.6,144.2,59.9), new cjs.Rectangle(-413.1,429.2,146.5,61.1), new cjs.Rectangle(-404.5,442.1,148.7,62.3), new cjs.Rectangle(-395.8,454.9,150.8,63.5), new cjs.Rectangle(-387.1,467.8,152.9,64.7), new cjs.Rectangle(-378.4,480.8,155,65.9), new cjs.Rectangle(-374.7,482.7,165.8,80.2)];


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


(lib.hint_find_panel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item2_1_2_img();
	this.instance.setTransform(-31,-40,0.889,0.889);

	this.instance_1 = new lib.item2_2_img();
	this.instance_1.setTransform(27.7,-35.9,0.376,0.376,60);

	this.instance_2 = new lib.item2_3_img();
	this.instance_2.setTransform(-8.9,44.1,0.423,0.423,-109.7);

	this.instance_3 = new lib.item2_4_2_img();
	this.instance_3.setTransform(-35,-35,0.814,0.814);

	this.instance_4 = new lib.item2_5_2_img();
	this.instance_4.setTransform(-50,23.1,0.9,0.9,-45);

	this.instance_5 = new lib.item2_6_img();
	this.instance_5.setTransform(-40,-30,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// bg
	this.instance_6 = new lib.bg_cell_mc();
	this.instance_6.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0.059},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-50,-47,100,100), new cjs.Rectangle(-45,-45,90,90)];


(lib.hint_find_panel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item1_1_img();
	this.instance.setTransform(16.9,-37.1,0.498,0.498,42.2);

	this.instance_1 = new lib.item1_2_img();
	this.instance_1.setTransform(-40,-21,0.463,0.463);

	this.instance_2 = new lib.item1_3_img();
	this.instance_2.setTransform(-38,-10,0.526,0.526);

	this.instance_3 = new lib.item1_4_img();
	this.instance_3.setTransform(-36,-14,0.72,0.72);

	this.instance_4 = new lib.item1_5_img();
	this.instance_4.setTransform(-40,-27,0.53,0.53);

	this.instance_5 = new lib.item1_6_img();
	this.instance_5.setTransform(-37,-26,0.72,0.72);

	this.instance_6 = new lib.item1_7_img();
	this.instance_6.setTransform(8.4,-34,0.575,0.576,0,29.7,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// bg
	this.instance_7 = new lib.bg_cell_mc();
	this.instance_7.setTransform(0,0,0.956,0.956);
	this.instance_7.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({alpha:0.059},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-43,86,86);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hint_find_panel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.object_7 = new lib.hint_find_panel_2_1_mc();
	this.object_7.setTransform(270,0);

	this.object_6 = new lib.hint_find_panel_2_1_mc();
	this.object_6.setTransform(180,0);

	this.object_5 = new lib.hint_find_panel_2_1_mc();
	this.object_5.setTransform(90,0);

	this.object_1 = new lib.hint_find_panel_2_1_mc();
	this.object_1.setTransform(-270,0);

	this.object_2 = new lib.hint_find_panel_2_1_mc();
	this.object_2.setTransform(-180,0);

	this.object_3 = new lib.hint_find_panel_2_1_mc();
	this.object_3.setTransform(-90,0);

	this.object_4 = new lib.hint_find_panel_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_4},{t:this.object_3},{t:this.object_2},{t:this.object_1},{t:this.object_5},{t:this.object_6},{t:this.object_7}]}).wait(1));

	// bg
	this.instance = new lib.hint_find_panel_1_1_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-60,660,120);
p.frameBounds = [rect];


(lib.hero0_head0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.comics1_fringe0_mc();
	this.instance.setTransform(1.5,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.eyes0_mc();
	this.instance_1.setTransform(-1.5,8.6,1,1,2);

	this.instance_2 = new lib.lips0_mc();
	this.instance_2.setTransform(-3,58.6,1,1,2);

	this.instance_3 = new lib.eyebrows0_mc();
	this.instance_3.setTransform(-1,-8.9,1,1,2);

	this.instance_4 = new lib.head0_mc();
	this.instance_4.setTransform(0,0,1,1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.6,-88.5,139.2,177.1);
p.frameBounds = [rect];


(lib.hero_sport_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.finger_hero_1_mc();
	this.instance.setTransform(84,-25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.sportbag_img();
	this.instance_1.setTransform(15,-30,0.507,0.507);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// fringe
	this.fringe = new lib.fringe_sport_all_mc();
	this.fringe.setTransform(4.5,-297.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance_2 = new lib.eyes0_mc();
	this.instance_2.setTransform(3.1,-266.5,0.626,0.626,2);

	this.instance_3 = new lib.lips0_mc();
	this.instance_3.setTransform(2.1,-235.2,0.626,0.626,2);

	this.instance_4 = new lib.eyebrows0_mc();
	this.instance_4.setTransform(3.3,-277.4,0.626,0.626,2,0,0,-0.1,0);

	this.instance_5 = new lib.head0_mc();
	this.instance_5.setTransform(4,-271.9,0.626,0.626,2,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// top
	this.top = new lib.top_sport_all_mc();
	this.top.setTransform(-2.5,-173.5);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.bottom_sport_all_mc();
	this.bottom.setTransform(-23,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.shoes_sport_all_mc();
	this.shoes.setTransform(28.5,204.9);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_6 = new lib.body_sport_img();
	this.instance_6.setTransform(-95,-239);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// hair
	this.hair = new lib.hair_sport_all_mc();
	this.hair.setTransform(4.5,-297.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-329.5,262.1,572.9);
p.frameBounds = [rect];


(lib.hero_sport_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fringe_sport1_img();
	this.instance.setTransform(-37.5,-329.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.eyes0_mc();
	this.instance_1.setTransform(3.1,-266.5,0.626,0.626,2);

	this.instance_2 = new lib.lips0_mc();
	this.instance_2.setTransform(2.1,-235.2,0.626,0.626,2);

	this.instance_3 = new lib.eyebrows0_mc();
	this.instance_3.setTransform(3.3,-277.4,0.626,0.626,2,0,0,-0.1,0);

	this.instance_4 = new lib.head0_mc();
	this.instance_4.setTransform(4,-271.9,0.626,0.626,2,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// graph
	this.instance_5 = new lib.top_sport_4_img();
	this.instance_5.setTransform(-90.5,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.bottom_sport_4_img();
	this.instance_6.setTransform(-89.5,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.shoes_sport1_img();
	this.instance_7.setTransform(-34,166.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.body_sport_img();
	this.instance_8.setTransform(-95,-239);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hair_sport1_img();
	this.instance_9.setTransform(-86.5,-311.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-329.5,190,572.9);
p.frameBounds = [rect];


(lib.hero_red_carpet_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.fata_all_mc();
	this.accessory.setTransform(-15,-261);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero_rc_fringe_all_mc();
	this.fringe.setTransform(-13.5,-267);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hand_cinema_img();
	this.instance.setTransform(-73,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.eyes0_mc();
	this.instance_1.setTransform(-13.7,-263,0.626,0.626,-1.2);

	this.instance_2 = new lib.eyebrows0_mc();
	this.instance_2.setTransform(-14,-274,0.626,0.626,-1.2,0,0,-0.1,0);

	this.instance_3 = new lib.shadows5_img();
	this.instance_3.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_4 = new lib.shadows4_img();
	this.instance_4.setTransform(-50.6,-277.7,0.276,0.276,-1.2);

	this.instance_5 = new lib.shadows3_img();
	this.instance_5.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_6 = new lib.shadows2_img();
	this.instance_6.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_7 = new lib.shadows1_img();
	this.instance_7.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_8 = new lib.lips2_img();
	this.instance_8.setTransform(-29.3,-239.1,0.276,0.276,-1.2);

	this.instance_9 = new lib.head0_mc();
	this.instance_9.setTransform(-13,-268.5,0.626,0.626,-1.2,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// dress
	this.dress = new lib.hero_rc_dress_all_mc();
	this.dress.setTransform(-9.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero_rc_shoes_all_mc();
	this.shoes.setTransform(20.9,207.4);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_10 = new lib.body_cinema_img();
	this.instance_10.setTransform(-88,-233.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// dressSecond
	this.dressSecond = new lib.hero_rc_dress_allb_mc();
	this.dressSecond.setTransform(-9.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.dressSecond).wait(1));

	// hair
	this.hair = new lib.hero_rc_hair_all_mc();
	this.hair.setTransform(-13.5,-267);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// accessorySecond
	this.accessorySecond = new lib.fata_back_all_mc();
	this.accessorySecond.setTransform(-14.5,-215.5);

	this.timeline.addTween(cjs.Tween.get(this.accessorySecond).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.5,-334,272,575.9);
p.frameBounds = [rect];


(lib.hero_red_carpet_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fata_img();
	this.instance.setTransform(-150.5,-334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero_rc_fringe2_img();
	this.instance_1.setTransform(-72.5,-330);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hand_cinema_img();
	this.instance_2.setTransform(-73,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.eyes0_mc();
	this.instance_3.setTransform(-13.7,-263,0.626,0.626,-1.2);

	this.instance_4 = new lib.eyebrows0_mc();
	this.instance_4.setTransform(-14,-274,0.626,0.626,-1.2,0,0,-0.1,0);

	this.instance_5 = new lib.shadows5_img();
	this.instance_5.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_6 = new lib.shadows4_img();
	this.instance_6.setTransform(-50.6,-277.7,0.276,0.276,-1.2);

	this.instance_7 = new lib.shadows3_img();
	this.instance_7.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_8 = new lib.shadows2_img();
	this.instance_8.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_9 = new lib.shadows1_img();
	this.instance_9.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_10 = new lib.lips2_img();
	this.instance_10.setTransform(-29.3,-239.1,0.276,0.276,-1.2);

	this.instance_11 = new lib.head0_mc();
	this.instance_11.setTransform(-13,-268.5,0.626,0.626,-1.2,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// graph
	this.instance_12 = new lib.hero_rc_dress2_img();
	this.instance_12.setTransform(-144.9,-183.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.hero_rc_shoes2_img();
	this.instance_13.setTransform(-53.6,151.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// graph
	this.instance_14 = new lib.body_cinema_img();
	this.instance_14.setTransform(-88,-233.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// graph
	this.instance_15 = new lib.hero_rc_dress2b_img();
	this.instance_15.setTransform(-121.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// graph
	this.instance_16 = new lib.hero_rc_hair2_img();
	this.instance_16.setTransform(-44.5,-323.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// graph
	this.instance_17 = new lib.fata_back_img();
	this.instance_17.setTransform(-150.5,-333);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.5,-334,272,570.9);
p.frameBounds = [rect];


(lib.hero_m4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fringe0
	this.instance = new lib.fringe0_mc();
	this.instance.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyes1
	this.instance_1 = new lib.eyes1_mc();
	this.instance_1.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips2
	this.instance_2 = new lib.lips2_mc();
	this.instance_2.setTransform(3,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// eyebrows
	this.instance_3 = new lib.eyebrows0_img();
	this.instance_3.setTransform(-114,-112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// shadows5
	this.instance_4 = new lib.shadows5_mc();
	this.instance_4.setTransform(3,-66);

	this.instance_5 = new lib.shadows4_mc();
	this.instance_5.setTransform(3,-66);

	this.instance_6 = new lib.shadows3_mc();
	this.instance_6.setTransform(3,-66);

	this.instance_7 = new lib.shadows2_mc();
	this.instance_7.setTransform(3,-66);

	this.instance_8 = new lib.shadows1_mc();
	this.instance_8.setTransform(3,-66);

	this.instance_9 = new lib.rouge1_mc();
	this.instance_9.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// body0
	this.instance_10 = new lib.body0_mc();
	this.instance_10.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// hair0
	this.instance_11 = new lib.hair0_mc();
	this.instance_11.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-303.1,-280.6,617,544);
p.frameBounds = [rect];


(lib.hero_for_q2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe0_mc();

	this.instance_1 = new lib.eyes1_mc();
	this.instance_1.setTransform(-2.3,-50);

	this.instance_2 = new lib.lips1_mc();
	this.instance_2.setTransform(-1,64);

	this.instance_3 = new lib.eyebrows0_img();
	this.instance_3.setTransform(-119.3,-104);

	this.instance_4 = new lib.body0_mc();
	this.instance_4.setTransform(13.7,2.6);

	this.instance_5 = new lib.hair0_mc();
	this.instance_5.setTransform(1,136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-308.5,-272,617,544);
p.frameBounds = [rect];


(lib.hero_cinema_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero_cinema_glasses_all_mc();
	this.accessory.setTransform(-12.8,-257.8);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// body
	this.instance = new lib.hand_cinema_img();
	this.instance.setTransform(-73,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fringe
	this.fringe = new lib.hero_cinema_fringe_all_mc();
	this.fringe.setTransform(-13,-220.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance_1 = new lib.eyes0_mc();
	this.instance_1.setTransform(-13.7,-263,0.626,0.626,-1.2);

	this.instance_2 = new lib.eyebrows0_mc();
	this.instance_2.setTransform(-14,-274,0.626,0.626,-1.2,0,0,-0.1,0);

	this.instance_3 = new lib.shadows5_img();
	this.instance_3.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_4 = new lib.shadows4_img();
	this.instance_4.setTransform(-50.6,-277.7,0.276,0.276,-1.2);

	this.instance_5 = new lib.shadows3_img();
	this.instance_5.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_6 = new lib.shadows2_img();
	this.instance_6.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_7 = new lib.shadows1_img();
	this.instance_7.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_8 = new lib.lips2_img();
	this.instance_8.setTransform(-29.3,-239.1,0.276,0.276,-1.2);

	this.instance_9 = new lib.head0_mc();
	this.instance_9.setTransform(-13,-268.5,0.626,0.626,-1.2,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// dress
	this.dress = new lib.hero_cinema_dress_all_mc();
	this.dress.setTransform(-5,-18);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero_cinema_shoes_all_mc();
	this.shoes.setTransform(18,194);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_10 = new lib.body_cinema_img();
	this.instance_10.setTransform(-88,-233.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// hair
	this.hair = new lib.hero_cinema_hair_all_mc();
	this.hair.setTransform(-13,-220.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-328,181,561.5);
p.frameBounds = [rect];


(lib.hero_cinema_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hand_cinema_img();
	this.instance.setTransform(-73,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero_cinema_fringe1_img();
	this.instance_1.setTransform(-71,-328);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.eyes0_mc();
	this.instance_2.setTransform(-13.7,-263,0.626,0.626,-1.2);

	this.instance_3 = new lib.eyebrows0_mc();
	this.instance_3.setTransform(-14,-274,0.626,0.626,-1.2,0,0,-0.1,0);

	this.instance_4 = new lib.shadows5_img();
	this.instance_4.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_5 = new lib.shadows4_img();
	this.instance_5.setTransform(-50.6,-277.7,0.276,0.276,-1.2);

	this.instance_6 = new lib.shadows3_img();
	this.instance_6.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_7 = new lib.shadows2_img();
	this.instance_7.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_8 = new lib.shadows1_img();
	this.instance_8.setTransform(-50.6,-276.7,0.276,0.276,-1.2);

	this.instance_9 = new lib.lips2_img();
	this.instance_9.setTransform(-29.3,-239.1,0.276,0.276,-1.2);

	this.instance_10 = new lib.head0_mc();
	this.instance_10.setTransform(-13,-268.5,0.626,0.626,-1.2,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// graph
	this.instance_11 = new lib.hero_cinema_dress1_img();
	this.instance_11.setTransform(-91,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hero_cinema_shoes1_img();
	this.instance_12.setTransform(-54,154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.body_cinema_img();
	this.instance_13.setTransform(-88,-233.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-328,181,561.5);
p.frameBounds = [rect];


(lib.girl_on_chair_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.comics1_hand0_mc();
	this.instance.setTransform(-685.9,44,1,1,0,0,0,29,77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero0_head0_mc();
	this.instance_1.setTransform(-577.4,-116.5,1,1,0,0,0,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.comics1_body0_mc();
	this.instance_2.setTransform(-531.9,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.comics1_hair0_mc();
	this.instance_3.setTransform(-574.9,-231,1,1,0,0,0,3,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.comics1_chair_mc();
	this.instance_4.setTransform(-562.9,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-764.9,-280.1,392.5,580.6);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.eyebrows1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.volos_mc();
	this.instance.setTransform(87.7,-8.1,1,1,0,15.8,-164.2);

	this.instance_1 = new lib.volos_mc();
	this.instance_1.setTransform(100.3,-2.6,1,1,0,15.8,-164.2);

	this.instance_2 = new lib.volos_mc();
	this.instance_2.setTransform(105.7,-1.2,1,1,0,43,-137);

	this.instance_3 = new lib.volos_mc();
	this.instance_3.setTransform(110.9,4,1,1,0,54,-126);

	this.instance_4 = new lib.volos_mc();
	this.instance_4.setTransform(44.1,-3.3,1,1,0,-16.5,163.5);

	this.instance_5 = new lib.volos_mc();
	this.instance_5.setTransform(31.7,-3.3,1,1,0,-16.5,163.5);

	this.instance_6 = new lib.volos_mc();
	this.instance_6.setTransform(71.9,-4,1,1,0,0,180);

	this.instance_7 = new lib.volos_mc();
	this.instance_7.setTransform(59.9,-6.5,1,1,0,0,180);

	this.instance_8 = new lib.volos_mc();
	this.instance_8.setTransform(50.6,-6.5,1,1,0,0,180);

	this.instance_9 = new lib.volos_mc();
	this.instance_9.setTransform(36.6,-4,1,1,0,0,180);

	this.instance_10 = new lib.volos_mc();
	this.instance_10.setTransform(-88.8,-8.1,1,1,-15.8);

	this.instance_11 = new lib.volos_mc();
	this.instance_11.setTransform(-101.4,-2.6,1,1,-15.8);

	this.instance_12 = new lib.volos_mc();
	this.instance_12.setTransform(-106.8,-1.2,1,1,-43);

	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(-112,4,1,1,-54);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(-45.1,-3.3,1,1,16.5);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(-32.8,-3.3,1,1,16.5);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(-73,-4);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(-61,-6.5);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(-51.6,-6.5);

	this.instance_19 = new lib.volos_mc();
	this.instance_19.setTransform(-37.6,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_20 = new lib.eyebrows0_img();
	this.instance_20.setTransform(-117,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.1,-17.2,243.2,31.2);
p.frameBounds = [rect];


(lib.eyebrows1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.volos_mc();
	this.instance.setTransform(87.7,-8.1,1,1,0,15.8,-164.2);

	this.instance_1 = new lib.volos_mc();
	this.instance_1.setTransform(100.3,-2.6,1,1,0,15.8,-164.2);

	this.instance_2 = new lib.volos_mc();
	this.instance_2.setTransform(105.7,-1.2,1,1,0,43,-137);

	this.instance_3 = new lib.volos_mc();
	this.instance_3.setTransform(110.9,4,1,1,0,54,-126);

	this.instance_4 = new lib.volos_mc();
	this.instance_4.setTransform(44.1,-3.3,1,1,0,-16.5,163.5);

	this.instance_5 = new lib.volos_mc();
	this.instance_5.setTransform(31.7,-3.3,1,1,0,-16.5,163.5);

	this.instance_6 = new lib.volos_mc();
	this.instance_6.setTransform(71.9,-4,1,1,0,0,180);

	this.instance_7 = new lib.volos_mc();
	this.instance_7.setTransform(59.9,-6.5,1,1,0,0,180);

	this.instance_8 = new lib.volos_mc();
	this.instance_8.setTransform(50.6,-6.5,1,1,0,0,180);

	this.instance_9 = new lib.volos_mc();
	this.instance_9.setTransform(36.6,-4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_10 = new lib.eyebrows0_img();
	this.instance_10.setTransform(-117,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-17.2,238.1,31.2);
p.frameBounds = [rect];


(lib.dress_9_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rc_d9_mc();
	this.instance.setTransform(3,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsqIWIhGutIJwtpIFoABIHSKuIE3WAIpgHSg");
	this.shape.setTransform(7.5,120.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,-7.3,184.2,434.8);
p.frameBounds = [rect];


(lib.dress_8_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rc_d8_mc();
	this.instance.setTransform(2.5,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsDN/IhRxZIFktkIQAADIFFKFIgPPPIkwGDIpbCig");
	this.shape.setTransform(1,103.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.4,-5.4,170.8,217.4);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cin_d8_mc();
	this.instance.setTransform(6,210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJWzIjircIDO4VIHzpzIE8gBIGJG/IDRXSIkAPUg");
	this.shape.setTransform(-3.4,139.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.6,-6.2,169.7,428.6);
p.frameBounds = [rect];


(lib.dress_7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rc_d7_mc();
	this.instance.setTransform(3,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AslFBIH03vIFnmoIF4ABIFnNfMAARAkrI1GAig");
	this.shape.setTransform(-14.2,155);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.8,-7.3,161.4,324.7);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cin_d7_mc();
	this.instance.setTransform(5.5,210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AttL9IFH4gIHmoeIFBgCIGSGzIDbXzIjiKDI18Beg");
	this.shape.setTransform(-6.2,128.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-6.4,175.7,269.7);
p.frameBounds = [rect];


(lib.dress_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rc_d6_mc();
	this.instance.setTransform(3,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AroLIIhCpzIC0rFIGoouIE5ABIGkHMIEcYHIkiFpg");
	this.shape.setTransform(5.8,111.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.5,-6.8,245,463.3);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cin_d6_mc();
	this.instance.setTransform(5.5,210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqpM3Ihco/ICrrDIHso/IEOABIG9HsICpWmIjeCCg");
	this.shape.setTransform(0,94.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-8.8,161,292.3);
p.frameBounds = [rect];


(lib.dress_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rc_d5_mc();
	this.instance.setTransform(2.5,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtYerMAEtg2PIKhtFIEPABIGbJ2MAA5AntIy+Xvg");
	this.shape.setTransform(-23.6,227);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-237,-7.7,299.2,491.1);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cin_d5_mc();
	this.instance.setTransform(6,210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogQWIjIuOICysqIGDnNIFrgDIF2FlIC7W5IlZHHg");
	this.shape.setTransform(-1.2,108.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-5.6,170,416.1);
p.frameBounds = [rect];


(lib.dress_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rc_d4_mc();
	this.instance.setTransform(3,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnkLTIg9uKIHKqPID7ABIFvGtIAPIgIl2K/g");
	this.shape.setTransform(-2.2,77.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.5,-6.3,232,448.8);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cin_d4_mc();
	this.instance.setTransform(5.5,210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnbNJIjRuTIHwsrIH/gDIFqLPImVQig");
	this.shape.setTransform(-6.2,82.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.5,-6.1,264,366.5);
p.frameBounds = [rect];


(lib.dress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rc_d3_mc();
	this.instance.setTransform(3,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArNseIJmniIGSAAIGIFbICrX3Im5KoI0CAHg");
	this.shape.setTransform(-1.8,121.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-7,172.5,256.3);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cin_d3_mc();
	this.instance.setTransform(6,210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApoMYIjz0fIKbnjIF/AAIKdJCIsJWUg");
	this.shape.setTransform(4.3,92.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-7.5,296,441.9);
p.frameBounds = [rect];


(lib.dress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rc_d2_mc();
	this.instance.setTransform(3,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao3JrIBfvWIGanQIEngBIFFF3IAKF8Il9OGg");
	this.shape.setTransform(-3.5,75.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.5,-7.2,233,417.7);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cin_d2_mc();
	this.instance.setTransform(5.5,210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsjNzIEI45IHnoXIEWgBIF3GXIDLWqIkUJ8g");
	this.shape.setTransform(-6.1,118.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.5,-6.4,182,391.8);
p.frameBounds = [rect];


(lib.dress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rc_d1_mc();
	this.instance.setTransform(3,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtBHdID21yIIEojIESAAIGTF/IDkXZIksQVIyHAEg");
	this.shape.setTransform(-2.4,139.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.9,-7,169.4,427.4);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cin_d1_mc();
	this.instance.setTransform(5.5,210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7PhIhNiuIDR1nIIQo0IEbACIFmGYICvXDIkSF0g");
	this.shape.setTransform(-7.6,106.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.4,-6.2,177,427.6);
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


(lib.comics1_text2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_2_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.comics1_text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_1_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.comics_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.comics1_text2_mc();
	this.instance.setTransform(215,-138);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).wait(41));

	// text
	this.instance_1 = new lib.comics1_text1_mc();
	this.instance_1.setTransform(-239,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// animation
	this.instance_2 = new lib.comics1_hand0_mc();
	this.instance_2.setTransform(-124,44,1,1,0,0,0,29,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:28.9,rotation:33.9},19).wait(27).to({regX:29,rotation:0},13).wait(1));

	// animation
	this.instance_3 = new lib.hero0_head0_mc();
	this.instance_3.setTransform(-15.5,-116.5,1,1,0,0,0,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-9.4,y:-116.6},19).wait(27).to({rotation:0,y:-116.5},13).wait(1));

	// animation
	this.instance_4 = new lib.comics1_body0_mc();
	this.instance_4.setTransform(30,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	// animation
	this.instance_5 = new lib.comics1_hair0_mc();
	this.instance_5.setTransform(-13,-231,1,1,0,0,0,3,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:3.1,regY:-171.8,rotation:-3.5,x:-31.7,y:-229.9},19).wait(27).to({regX:3,regY:-172,rotation:0,x:-13,y:-231},13).wait(1));

	// animation
	this.instance_6 = new lib.comics1_chair_mc();
	this.instance_6.setTransform(-1,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-379,-280.1,734,580.6);
p.frameBounds = [rect, new cjs.Rectangle(-379,-280.3,734,580.8), new cjs.Rectangle(-379,-280.9,734,581.3), new cjs.Rectangle(-379,-281.4,734,581.9), new cjs.Rectangle(-379,-282,734,582.5), new cjs.Rectangle(-379,-282.5,734,583), new cjs.Rectangle(-379,-283,734,583.5), new cjs.Rectangle(-379,-283.5,734,584), new cjs.Rectangle(-379,-284,734,584.5), new cjs.Rectangle(-379,-284.4,734,584.9), new cjs.Rectangle(-379,-284.9,734,585.3), new cjs.Rectangle(-379,-285.4,734,585.8), new cjs.Rectangle(-379,-285.8,734,586.3), new cjs.Rectangle(-379,-286.2,734,586.7), new cjs.Rectangle(-379,-286.6,734,587.1), new cjs.Rectangle(-379,-287.1,734,587.6), new cjs.Rectangle(-379,-287.4,734,587.9), new cjs.Rectangle(-379,-287.8,734,588.3), new cjs.Rectangle(-379,-288.2,734,588.7), new cjs.Rectangle(-379,-288.7,734,589.2), rect=new cjs.Rectangle(-379,-288.5,734,589), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-379,-288.7,734,589.2), new cjs.Rectangle(-379,-288,734,588.5), new cjs.Rectangle(-379,-287.5,734,588), new cjs.Rectangle(-379,-287.1,734,587.6), new cjs.Rectangle(-379,-286.4,734,586.9), new cjs.Rectangle(-379,-285.8,734,586.3), new cjs.Rectangle(-379,-285.1,734,585.6), new cjs.Rectangle(-379,-284.4,734,584.9), new cjs.Rectangle(-379,-283.8,734,584.3), new cjs.Rectangle(-379,-283,734,583.5), new cjs.Rectangle(-379,-282.2,734,582.7), new cjs.Rectangle(-379,-281.4,734,581.9), new cjs.Rectangle(-379,-280.7,734,581.2), new cjs.Rectangle(-379,-280.1,734,580.6)];


(lib.comics_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.comics1_text1_mc();
	this.instance.setTransform(-239,119);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},25).wait(26));

	// animation
	this.instance_1 = new lib.comics1_hand0_mc();
	this.instance_1.setTransform(-942,44,1,1,0,0,0,29,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({x:-124},28).to({rotation:-23.2,y:43.9},25).to({rotation:0,y:44},25).wait(1));

	// animation
	this.instance_2 = new lib.hero0_head0_mc();
	this.instance_2.setTransform(-833,-116,1,1,0,0,0,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({x:-15.5,y:-116.5},28).to({rotation:4.7},25).to({rotation:0},25).wait(1));

	// animation
	this.instance_3 = new lib.comics1_body0_mc();
	this.instance_3.setTransform(-788,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({x:30},28).wait(51));

	// animation
	this.instance_4 = new lib.comics1_hair0_mc();
	this.instance_4.setTransform(-831,-231,1,1,0,0,0,3,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({x:-13},28).to({rotation:0.9,x:-3.6,y:-230.4},25).to({rotation:0,x:-13,y:-231},25).wait(1));

	// animation
	this.instance_5 = new lib.comics1_chair_mc();
	this.instance_5.setTransform(-819,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({x:-1},28).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1021,-279.5,392.5,580.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-991.8,-279.5,392.5,580), new cjs.Rectangle(-962.5,-279.5,392.5,580.1), new cjs.Rectangle(-933.3,-279.5,392.5,580.1), new cjs.Rectangle(-904.1,-279.6,392.5,580.1), new cjs.Rectangle(-874.9,-279.6,392.5,580.1), new cjs.Rectangle(-845.7,-279.6,392.5,580.1), new cjs.Rectangle(-816.5,-279.6,392.5,580.2), new cjs.Rectangle(-787.3,-279.6,392.5,580.2), new cjs.Rectangle(-758,-279.7,392.5,580.2), new cjs.Rectangle(-728.8,-279.7,392.5,580.2), new cjs.Rectangle(-699.6,-279.7,392.5,580.2), new cjs.Rectangle(-670.4,-279.7,392.5,580.3), new cjs.Rectangle(-641.2,-279.7,392.5,580.3), new cjs.Rectangle(-612,-279.7,392.5,580.2), new cjs.Rectangle(-582.8,-279.8,392.5,580.3), new cjs.Rectangle(-553.5,-279.8,392.5,580.3), new cjs.Rectangle(-524.3,-279.8,392.5,580.3), new cjs.Rectangle(-495.1,-279.8,392.5,580.3), new cjs.Rectangle(-465.9,-279.8,392.5,580.3), new cjs.Rectangle(-436.7,-279.9,392.5,580.3), new cjs.Rectangle(-407.5,-279.9,392.5,580.3), new cjs.Rectangle(-378.3,-279.9,392.5,580.4), new cjs.Rectangle(-349,-279.9,392.5,580.4), new cjs.Rectangle(-319.8,-279.9,392.5,580.4), new cjs.Rectangle(-290.6,-280,392.5,580.5), new cjs.Rectangle(-261.4,-280,392.5,580.5), new cjs.Rectangle(-232.2,-280,392.5,580.5), rect=new cjs.Rectangle(-379,-280.1,568.5,580.6), rect, new cjs.Rectangle(-379,-280.3,568.5,580.8), new cjs.Rectangle(-379,-280.6,568.5,581.1), new cjs.Rectangle(-379,-280.8,568.5,581.3), new cjs.Rectangle(-379,-280.9,568.5,581.4), new cjs.Rectangle(-379,-281.1,568.5,581.6), new cjs.Rectangle(-379,-281.4,568.5,581.8), new cjs.Rectangle(-379,-281.6,568.5,582.1), new cjs.Rectangle(-379,-281.7,568.5,582.2), new cjs.Rectangle(-379,-281.9,568.5,582.3), new cjs.Rectangle(-379,-282.1,568.5,582.6), new cjs.Rectangle(-379,-282.4,568.5,582.8), new cjs.Rectangle(-379,-282.4,568.5,582.9), new cjs.Rectangle(-379,-282.7,568.5,583.2), new cjs.Rectangle(-379,-282.9,568.5,583.4), rect=new cjs.Rectangle(-379,-283.2,568.5,583.7), rect, new cjs.Rectangle(-379,-283.4,568.5,583.9), new cjs.Rectangle(-379,-283.6,568.5,584.1), new cjs.Rectangle(-379,-283.9,568.5,584.3), new cjs.Rectangle(-379,-283.9,568.5,584.4), new cjs.Rectangle(-379,-284.1,568.5,584.6), new cjs.Rectangle(-379,-284.3,568.5,584.8), new cjs.Rectangle(-379,-284.6,568.5,585.1), new cjs.Rectangle(-379,-284.8,568.5,585.3), new cjs.Rectangle(-379,-284.6,568.5,585.1), new cjs.Rectangle(-379,-284.3,568.5,584.8), new cjs.Rectangle(-379,-284.2,568.5,584.7), new cjs.Rectangle(-379,-283.9,568.5,584.4), new cjs.Rectangle(-379,-283.9,568.5,584.3), new cjs.Rectangle(-379,-283.7,568.5,584.2), new cjs.Rectangle(-379,-283.4,568.5,583.9), rect=new cjs.Rectangle(-379,-283.2,568.5,583.7), rect, new cjs.Rectangle(-379,-282.9,568.5,583.4), new cjs.Rectangle(-379,-282.7,568.5,583.2), new cjs.Rectangle(-379,-282.5,568.5,583), new cjs.Rectangle(-379,-282.4,568.5,582.9), new cjs.Rectangle(-379,-282.2,568.5,582.7), new cjs.Rectangle(-379,-281.9,568.5,582.4), new cjs.Rectangle(-379,-281.7,568.5,582.2), new cjs.Rectangle(-379,-281.6,568.5,582.1), new cjs.Rectangle(-379,-281.4,568.5,581.8), new cjs.Rectangle(-379,-281.1,568.5,581.6), new cjs.Rectangle(-379,-280.9,568.5,581.3), new cjs.Rectangle(-379,-280.8,568.5,581.3), new cjs.Rectangle(-379,-280.6,568.5,581.1), new cjs.Rectangle(-379,-280.3,568.5,580.8), rect=new cjs.Rectangle(-379,-280.1,568.5,580.6), rect];


(lib.check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// animation
	this.instance = new lib.check_1_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_7_1_img();
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.check_6_1_img();
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.check_5_1_img();
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.check_4_1_img();
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.check_3_1_img();
	this.instance_5.setTransform(-50,-50);

	this.instance_6 = new lib.check_2_1_img();
	this.instance_6.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:0.012}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance,p:{alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect];


(lib.bottom_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bs6_mc();
	this.instance.setTransform(5.1,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtysvIC/m+IHLleIEnACIGEGuMAGwAnSIiICoIyvBtg");
	this.shape.setTransform(8.9,153.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.4,-7.7,176.7,322.5);
p.frameBounds = [rect];


(lib.bottom_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bs5_mc();
	this.instance.setTransform(5.6,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AraGyIAXlvIHXp0IHSAAIGWHWIBfIaIlEBzg");
	this.shape.setTransform(-0.5,49.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.6,-7.1,146.3,112.5);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bs4_mc();
	this.instance.setTransform(4.6,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At5p3IC7pTIG6mBIEygBIGwHZMAGcApFI0KB7g");
	this.shape.setTransform(14.4,153);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.7,-8.4,178.2,322.8);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bs3_mc();
	this.instance.setTransform(5.6,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuOucIMCsCIEmABIGUIcMAFhApOI0uDSg");
	this.shape.setTransform(5.1,161.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-7.9,182.3,339.1);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bs2_mc();
	this.instance.setTransform(5.1,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnFU2Ikv9uIJAsCIE7ABIHWIBICYdsIkFEHg");
	this.shape.setTransform(2,127.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.8,-6.8,151.6,268);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bs1_mc();
	this.instance.setTransform(5.6,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AptMAIiGtvIJHq4IFgAAIJALTIiKN8g");
	this.shape.setTransform(2,71.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.6,-9,151.3,161.7);
p.frameBounds = [rect];


(lib.body_title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.instance = new lib.decor_3_text_3_mc();
	this.instance.setTransform(60,10);

	this.instance_1 = new lib.decor_2_text_3_mc();
	this.instance_1.setTransform(-20,70);

	this.instance_2 = new lib.decor_1_text_3_mc();
	this.instance_2.setTransform(-70,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{y:0,x:-70}},{t:this.instance_1,p:{x:-20,y:70}},{t:this.instance,p:{y:10,x:60}}]}).to({state:[{t:this.instance_2,p:{y:30,x:-70}},{t:this.instance_1,p:{x:-15,y:75}},{t:this.instance,p:{y:35,x:60}}]},1).to({state:[{t:this.instance_2,p:{y:30,x:-70}},{t:this.instance_1,p:{x:-15,y:75}},{t:this.instance,p:{y:35,x:60}}]},1).to({state:[{t:this.instance_2,p:{y:-10,x:-70}},{t:this.instance_1,p:{x:-20,y:75}},{t:this.instance,p:{y:0,x:60}}]},1).to({state:[{t:this.instance_2,p:{y:0,x:-70}},{t:this.instance_1,p:{x:-20,y:70}},{t:this.instance,p:{y:10,x:60}}]},1).to({state:[{t:this.instance_2,p:{y:0,x:-70}},{t:this.instance_1,p:{x:-20,y:70}},{t:this.instance,p:{y:10,x:60}}]},1).to({state:[{t:this.instance_2,p:{y:10,x:-70}},{t:this.instance_1,p:{x:-20,y:80}},{t:this.instance,p:{y:20,x:60}}]},1).to({state:[{t:this.instance_2,p:{y:-5,x:-70}},{t:this.instance_1,p:{x:-20,y:65}},{t:this.instance,p:{y:5,x:60}}]},1).to({state:[{t:this.instance_2,p:{y:5,x:-70}},{t:this.instance_1,p:{x:-20,y:75}},{t:this.instance,p:{y:15,x:60}}]},1).to({state:[{t:this.instance_2,p:{y:55,x:-65}},{t:this.instance_1,p:{x:-5,y:90}},{t:this.instance,p:{y:50,x:65}}]},1).to({state:[{t:this.instance_2,p:{y:5,x:-70}},{t:this.instance_1,p:{x:-20,y:75}},{t:this.instance,p:{y:15,x:60}}]},1).to({state:[{t:this.instance_2,p:{y:5,x:-70}},{t:this.instance_1,p:{x:-20,y:75}},{t:this.instance,p:{y:15,x:60}}]},1).to({state:[{t:this.instance_2,p:{y:-5,x:-70}},{t:this.instance_1,p:{x:-20,y:65}},{t:this.instance,p:{y:5,x:60}}]},1).wait(1));

	// graph
	this.instance_3 = new lib.title_3_en_img();
	this.instance_3.setTransform(-140,-140);

	this.instance_4 = new lib.title_3_ru_img();
	this.instance_4.setTransform(-140,-140);

	this.instance_5 = new lib.title_3_de_img();
	this.instance_5.setTransform(-140,-140);

	this.instance_6 = new lib.title_3_fr_img();
	this.instance_6.setTransform(-140,-140);

	this.instance_7 = new lib.title_3_it_img();
	this.instance_7.setTransform(-140,-140);

	this.instance_8 = new lib.title_3_es_img();
	this.instance_8.setTransform(-140,-140);

	this.instance_9 = new lib.title_3_pt_img();
	this.instance_9.setTransform(-140,-140);

	this.instance_10 = new lib.title_3_tr_img();
	this.instance_10.setTransform(-140,-140);

	this.instance_11 = new lib.title_3_ja_img();
	this.instance_11.setTransform(-140,-140);

	this.instance_12 = new lib.title_3_hi_img();
	this.instance_12.setTransform(-140,-140);

	this.instance_13 = new lib.title_3_ar_img();
	this.instance_13.setTransform(-140,-140);

	this.instance_14 = new lib.title_3_id_img();
	this.instance_14.setTransform(-140,-140);

	this.instance_15 = new lib.title_3_zh_img();
	this.instance_15.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({scaleX:2.5,scaleY:2.5,x:25,alpha:0.102},20).to({_off:true},1).wait(20));

	// animation
	this.instance_1 = new lib.circle_nav_mc();
	this.instance_1.alpha = 0.801;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({scaleX:2.5,scaleY:2.5,x:25,alpha:0.102},20).to({_off:true},1).wait(10));

	// animation
	this.instance_2 = new lib.circle_nav_mc();
	this.instance_2.alpha = 0.801;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({scaleX:2.5,scaleY:2.5,x:25,alpha:0.102},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40.9,120,81.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-63.2,-44,129,87.9), new cjs.Rectangle(-66.5,-47,138,94), new cjs.Rectangle(-69.7,-50.1,147,100.2), new cjs.Rectangle(-73,-53.2,156,106.3), new cjs.Rectangle(-76.2,-56.2,165,112.4), new cjs.Rectangle(-79.5,-59.3,174,118.6), new cjs.Rectangle(-82.7,-62.4,183,124.7), new cjs.Rectangle(-85.9,-65.4,192,130.8), new cjs.Rectangle(-89.2,-68.5,201,137), new cjs.Rectangle(-92.4,-71.6,210,143.1), new cjs.Rectangle(-95.7,-74.7,219,149.2), new cjs.Rectangle(-98.9,-77.8,228,155.3), new cjs.Rectangle(-102.2,-80.8,237,161.4), new cjs.Rectangle(-105.4,-83.9,246,167.6), new cjs.Rectangle(-108.7,-86.9,255,173.7), new cjs.Rectangle(-111.9,-90,264,179.9), new cjs.Rectangle(-115.2,-93.1,273,186), new cjs.Rectangle(-118.4,-96.1,282,192.1), new cjs.Rectangle(-121.7,-99.2,291,198.3), new cjs.Rectangle(-125,-102.2,300,204.4), new cjs.Rectangle(-95.7,-74.7,219,149.2), new cjs.Rectangle(-98.9,-77.8,228,155.3), new cjs.Rectangle(-102.2,-80.8,237,161.4), new cjs.Rectangle(-105.4,-83.9,246,167.6), new cjs.Rectangle(-108.7,-86.9,255,173.7), new cjs.Rectangle(-111.9,-90,264,179.9), new cjs.Rectangle(-115.2,-93.1,273,186), new cjs.Rectangle(-118.4,-96.1,282,192.1), new cjs.Rectangle(-121.7,-99.2,291,198.3), new cjs.Rectangle(-125,-102.2,300,204.4), new cjs.Rectangle(-95.7,-74.7,219,149.2), new cjs.Rectangle(-98.9,-77.8,228,155.3), new cjs.Rectangle(-102.2,-80.8,237,161.4), new cjs.Rectangle(-105.4,-83.9,246,167.6), new cjs.Rectangle(-108.7,-86.9,255,173.7), new cjs.Rectangle(-111.9,-90,264,179.9), new cjs.Rectangle(-115.2,-93.1,273,186), new cjs.Rectangle(-118.4,-96.1,282,192.1), new cjs.Rectangle(-121.7,-99.2,291,198.3), new cjs.Rectangle(-125,-102.2,300,204.4)];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.bg_title_3_mc();
	this.instance.setTransform(-135,-71);

	this.instance_1 = new lib.bg_title_3_mc();
	this.instance_1.setTransform(-153,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:-153,y:-70}},{t:this.instance,p:{x:-135,y:-71}}]}).to({state:[{t:this.instance_1,p:{x:-105,y:-71}},{t:this.instance,p:{x:-120,y:-71}}]},2).to({state:[{t:this.instance_1,p:{x:-90,y:-71}},{t:this.instance,p:{x:-75,y:-71}}]},2).to({state:[{t:this.instance_1,p:{x:-45,y:-71}},{t:this.instance,p:{x:-60,y:-71}}]},2).to({state:[{t:this.instance_1,p:{x:-30,y:-71}},{t:this.instance,p:{x:-15,y:-71}}]},2).to({state:[{t:this.instance_1,p:{x:15,y:-71}},{t:this.instance,p:{x:0,y:-71}}]},2).to({state:[{t:this.instance_1,p:{x:30,y:-71}},{t:this.instance,p:{x:45,y:-71}}]},2).to({state:[{t:this.instance_1,p:{x:75,y:-71}},{t:this.instance,p:{x:60,y:-71}}]},2).to({state:[{t:this.instance_1,p:{x:90,y:-71}},{t:this.instance,p:{x:105,y:-71}}]},2).to({state:[{t:this.instance_1,p:{x:135,y:-71}},{t:this.instance,p:{x:120,y:-71}}]},2).to({state:[{t:this.instance_1,p:{x:153,y:-70}},{t:this.instance,p:{x:166,y:-61}}]},2).to({state:[{t:this.instance_1,p:{x:171,y:-30}},{t:this.instance,p:{x:171,y:-45}}]},2).to({state:[{t:this.instance_1,p:{x:171,y:-15}},{t:this.instance,p:{x:171,y:0}}]},2).to({state:[{t:this.instance_1,p:{x:171,y:30}},{t:this.instance,p:{x:171,y:15}}]},2).to({state:[{t:this.instance_1,p:{x:171,y:45}},{t:this.instance,p:{x:166,y:61}}]},2).to({state:[{t:this.instance_1,p:{x:135,y:71}},{t:this.instance,p:{x:153,y:70}}]},2).to({state:[{t:this.instance_1,p:{x:120,y:71}},{t:this.instance,p:{x:105,y:71}}]},2).to({state:[{t:this.instance_1,p:{x:75,y:71}},{t:this.instance,p:{x:90,y:71}}]},2).to({state:[{t:this.instance_1,p:{x:60,y:71}},{t:this.instance,p:{x:45,y:71}}]},2).to({state:[{t:this.instance_1,p:{x:15,y:71}},{t:this.instance,p:{x:30,y:71}}]},2).to({state:[{t:this.instance_1,p:{x:0,y:71}},{t:this.instance,p:{x:-15,y:71}}]},2).to({state:[{t:this.instance_1,p:{x:-45,y:71}},{t:this.instance,p:{x:-30,y:71}}]},2).to({state:[{t:this.instance_1,p:{x:-60,y:71}},{t:this.instance,p:{x:-75,y:71}}]},2).to({state:[{t:this.instance_1,p:{x:-105,y:71}},{t:this.instance,p:{x:-90,y:71}}]},2).to({state:[{t:this.instance_1,p:{x:-120,y:71}},{t:this.instance,p:{x:-135,y:71}}]},2).to({state:[{t:this.instance_1,p:{x:-166,y:61}},{t:this.instance,p:{x:-153,y:70}}]},2).to({state:[{t:this.instance_1,p:{x:-171,y:45}},{t:this.instance,p:{x:-171,y:30}}]},2).to({state:[{t:this.instance_1,p:{x:-171,y:0}},{t:this.instance,p:{x:-171,y:15}}]},2).to({state:[{t:this.instance_1,p:{x:-171,y:-15}},{t:this.instance,p:{x:-171,y:-30}}]},2).to({state:[{t:this.instance_1,p:{x:-166,y:-61}},{t:this.instance,p:{x:-171,y:-45}}]},2).wait(2));

	// graph
	this.instance_2 = new lib.bg_title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// animation
	this.instance_3 = new lib.bg_title_2_mc();
	this.instance_3.setTransform(-170,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.83,scaleY:0.83,y:-69.9},29).to({scaleX:1,scaleY:1,y:-70},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-190,480,280);
p.frameBounds = [rect, new cjs.Rectangle(-289.3,-189.3,479.3,279.3), new cjs.Rectangle(-288.6,-188.6,478.6,278.6), new cjs.Rectangle(-287.9,-187.9,477.9,277.9), new cjs.Rectangle(-287.2,-187.2,477.2,277.2), new cjs.Rectangle(-286.5,-186.5,476.6,276.6), new cjs.Rectangle(-285.8,-185.8,475.9,275.9), new cjs.Rectangle(-285.1,-185.1,475.2,275.2), new cjs.Rectangle(-284.4,-184.4,474.5,274.5), new cjs.Rectangle(-283.7,-183.7,473.8,273.8), new cjs.Rectangle(-283.1,-183.1,473.1,273.1), new cjs.Rectangle(-282.4,-182.4,472.4,272.4), new cjs.Rectangle(-281.7,-181.7,471.7,271.7), new cjs.Rectangle(-281,-181,471,271), new cjs.Rectangle(-280.3,-180.3,470.3,270.3), new cjs.Rectangle(-279.6,-179.6,469.7,269.7), new cjs.Rectangle(-278.9,-178.9,469,269), new cjs.Rectangle(-278.2,-178.2,468.3,268.3), new cjs.Rectangle(-277.5,-177.5,467.6,267.6), new cjs.Rectangle(-276.8,-176.8,466.9,266.9), new cjs.Rectangle(-276.2,-176.2,466.2,266.2), new cjs.Rectangle(-275.5,-175.5,465.5,265.5), new cjs.Rectangle(-274.8,-174.8,464.8,264.8), new cjs.Rectangle(-274.1,-174.1,464.1,264.1), new cjs.Rectangle(-273.4,-173.4,463.4,263.4), new cjs.Rectangle(-272.7,-172.7,462.8,262.8), new cjs.Rectangle(-272,-172,462.1,262.1), new cjs.Rectangle(-271.3,-171.3,461.4,261.4), new cjs.Rectangle(-270.6,-170.6,460.7,260.7), new cjs.Rectangle(-270,-169.9,460,260), new cjs.Rectangle(-270.6,-170.6,460.7,260.6), new cjs.Rectangle(-271.3,-171.2,461.3,261.3), new cjs.Rectangle(-271.9,-171.9,462,261.9), new cjs.Rectangle(-272.6,-172.6,462.7,262.6), new cjs.Rectangle(-273.3,-173.2,463.3,263.3), new cjs.Rectangle(-273.9,-173.8,463.9,263.9), new cjs.Rectangle(-274.6,-174.6,464.7,264.6), new cjs.Rectangle(-275.3,-175.2,465.3,265.3), new cjs.Rectangle(-275.9,-175.9,466,265.9), new cjs.Rectangle(-276.6,-176.6,466.7,266.6), new cjs.Rectangle(-277.3,-177.2,467.3,267.3), new cjs.Rectangle(-277.9,-177.9,468,267.9), new cjs.Rectangle(-278.6,-178.6,468.7,268.6), new cjs.Rectangle(-279.3,-179.2,469.3,269.3), new cjs.Rectangle(-279.9,-179.8,469.9,269.9), new cjs.Rectangle(-280.6,-180.6,470.7,270.6), new cjs.Rectangle(-281.3,-181.2,471.3,271.3), new cjs.Rectangle(-281.9,-181.8,471.9,271.9), new cjs.Rectangle(-282.6,-182.6,472.7,272.6), new cjs.Rectangle(-283.3,-183.2,473.3,273.3), new cjs.Rectangle(-283.9,-183.9,474,273.9), new cjs.Rectangle(-284.6,-184.6,474.7,274.6), new cjs.Rectangle(-285.3,-185.2,475.3,275.3), new cjs.Rectangle(-285.9,-185.9,476,275.9), new cjs.Rectangle(-286.6,-186.6,476.7,276.6), new cjs.Rectangle(-287.3,-187.2,477.3,277.3), new cjs.Rectangle(-287.9,-187.8,477.9,277.9), new cjs.Rectangle(-288.6,-188.6,478.7,278.6), new cjs.Rectangle(-289.3,-189.2,479.3,279.3), new cjs.Rectangle(-290,-190,480,280)];


(lib.bag2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// animation
	this.instance = new lib.b2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:150,alpha:1},0).to({y:0},10).to({y:-30},3).to({y:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-234,-161.5,468,323);
p.frameBounds = [rect, new cjs.Rectangle(-234,-11.5,468,323), new cjs.Rectangle(-234,-26.5,468,323), new cjs.Rectangle(-234,-41.5,468,323), new cjs.Rectangle(-234,-56.5,468,323), new cjs.Rectangle(-234,-71.5,468,323), new cjs.Rectangle(-234,-86.5,468,323), new cjs.Rectangle(-234,-101.5,468,323), new cjs.Rectangle(-234,-116.5,468,323), new cjs.Rectangle(-234,-131.5,468,323), new cjs.Rectangle(-234,-146.5,468,323), new cjs.Rectangle(-234,-161.5,468,323), new cjs.Rectangle(-234,-171.5,468,323), new cjs.Rectangle(-234,-181.5,468,323), new cjs.Rectangle(-234,-191.5,468,323), new cjs.Rectangle(-234,-181.5,468,323), new cjs.Rectangle(-234,-171.5,468,323), new cjs.Rectangle(-234,-161.5,468,323)];


(lib.arrow_checks_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_2_mc();
	this.checkpoint_3.setTransform(120,0);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_2_mc();
	this.checkpoint_1.setTransform(-120,0);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_2_mc();
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-250,340,500);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-53.3,-36.3,106.6,72.7);
p.frameBounds = [rect];


(lib.accessory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fata_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwoL/Ilat3IEJpiIQioFIE3AAIPtJoIC2ILIjgKpIpTJ9IwMAmg");
	this.shape.setTransform(-1.5,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.5,-128,282.2,249.7);
p.frameBounds = [rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.63,scaleY:0.62,alpha:0.012},29).wait(20).to({scaleY:0.63},0).to({scaleX:1,scaleY:1,alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-44.4,-44.4,88.9,88.9), new cjs.Rectangle(-43.8,-43.8,87.7,87.7), new cjs.Rectangle(-43.2,-43.2,86.5,86.5), new cjs.Rectangle(-42.6,-42.6,85.4,85.4), new cjs.Rectangle(-42,-42,84.2,84.2), new cjs.Rectangle(-41.5,-41.5,83,83), new cjs.Rectangle(-40.9,-40.9,81.9,81.9), new cjs.Rectangle(-40.3,-40.3,80.7,80.7), new cjs.Rectangle(-39.7,-39.7,79.6,79.5), new cjs.Rectangle(-39.1,-39.1,78.4,78.4), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-38,-38,76.1,76), new cjs.Rectangle(-37.4,-37.4,74.9,74.9), new cjs.Rectangle(-36.8,-36.8,73.7,73.7), new cjs.Rectangle(-36.2,-36.3,72.6,72.5), new cjs.Rectangle(-35.6,-35.7,71.4,71.4), new cjs.Rectangle(-35.1,-35.1,70.2,70.2), new cjs.Rectangle(-34.5,-34.5,69.1,69), new cjs.Rectangle(-33.9,-33.9,67.9,67.9), new cjs.Rectangle(-33.3,-33.3,66.7,66.7), new cjs.Rectangle(-32.7,-32.8,65.6,65.5), new cjs.Rectangle(-32.1,-32.2,64.4,64.4), new cjs.Rectangle(-31.6,-31.6,63.3,63.2), new cjs.Rectangle(-31,-31,62.1,62), new cjs.Rectangle(-30.4,-30.4,60.9,60.9), new cjs.Rectangle(-29.8,-29.8,59.8,59.7), new cjs.Rectangle(-29.2,-29.3,58.6,58.5), new cjs.Rectangle(-28.7,-28.7,57.4,57.4), rect=new cjs.Rectangle(-28.1,-28.1,56.3,56.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-28.5,-28.5,57.1,57.1), new cjs.Rectangle(-28.9,-28.9,58,58), new cjs.Rectangle(-29.3,-29.3,58.8,58.8), new cjs.Rectangle(-29.8,-29.8,59.6,59.6), new cjs.Rectangle(-30.2,-30.2,60.5,60.5), new cjs.Rectangle(-30.6,-30.6,61.3,61.3), new cjs.Rectangle(-31,-31,62.2,62.2), new cjs.Rectangle(-31.4,-31.4,63,63), new cjs.Rectangle(-31.9,-31.9,63.9,63.9), new cjs.Rectangle(-32.3,-32.3,64.7,64.7), new cjs.Rectangle(-32.7,-32.7,65.6,65.5), new cjs.Rectangle(-33.1,-33.1,66.4,66.4), new cjs.Rectangle(-33.6,-33.6,67.2,67.2), new cjs.Rectangle(-34,-34,68.1,68.1), new cjs.Rectangle(-34.4,-34.4,68.9,68.9), new cjs.Rectangle(-34.8,-34.8,69.8,69.8), new cjs.Rectangle(-35.2,-35.2,70.6,70.6), new cjs.Rectangle(-35.7,-35.7,71.5,71.5), new cjs.Rectangle(-36.1,-36.1,72.3,72.3), new cjs.Rectangle(-36.5,-36.5,73.1,73.1), new cjs.Rectangle(-36.9,-36.9,74,74), new cjs.Rectangle(-37.4,-37.4,74.8,74.8), new cjs.Rectangle(-37.8,-37.8,75.7,75.7), new cjs.Rectangle(-38.2,-38.2,76.5,76.5), new cjs.Rectangle(-38.6,-38.6,77.4,77.4), new cjs.Rectangle(-39,-39,78.2,78.2), new cjs.Rectangle(-39.5,-39.5,79.1,79.1), new cjs.Rectangle(-39.9,-39.9,79.9,79.9), new cjs.Rectangle(-40.3,-40.3,80.7,80.7), new cjs.Rectangle(-40.7,-40.7,81.6,81.6), new cjs.Rectangle(-41.2,-41.2,82.4,82.4), new cjs.Rectangle(-41.6,-41.6,83.3,83.3), new cjs.Rectangle(-42,-42,84.1,84.1), new cjs.Rectangle(-42.4,-42.4,85,85), new cjs.Rectangle(-42.8,-42.8,85.8,85.8), new cjs.Rectangle(-43.3,-43.3,86.6,86.6), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-44.1,-44.1,88.3,88.3), new cjs.Rectangle(-44.5,-44.5,89.2,89.2), new cjs.Rectangle(-45,-45,90,90)];


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
	this.instance = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-190,480,280);
p.frameBounds = [rect];


(lib.title_3_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_3_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_speech_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
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
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-254,470,508);
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


(lib.objects_find_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.object_6 = new lib.it2_6_mc();
	this.object_6.setTransform(102,201);

	this.object_5 = new lib.it2_5_mc();
	this.object_5.setTransform(452,200);

	this.object_4 = new lib.it2_4_mc();
	this.object_4.setTransform(126,423);

	this.object_3 = new lib.it2_3_mc();
	this.object_3.setTransform(612,394);

	this.object_2 = new lib.it2_2_mc();
	this.object_2.setTransform(302,339);

	this.object_1 = new lib.it2_1_mc();
	this.object_1.setTransform(688,261);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.object_2},{t:this.object_3},{t:this.object_4},{t:this.object_5},{t:this.object_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,115.4,802.4,392.6);
p.frameBounds = [rect];


(lib.objects_find_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.object_2 = new lib.it1_12_mc();
	this.object_2.setTransform(669,437);

	this.object_3 = new lib.it1_3_mc();
	this.object_3.setTransform(762,359,1,1,47.5);

	this.object_7 = new lib.it1_7_mc();
	this.object_7.setTransform(360,437,1,1,90);

	this.object_6 = new lib.it1_6_mc();
	this.object_6.setTransform(533,409);

	this.object_4 = new lib.it1_4_mc();
	this.object_4.setTransform(490,532);

	this.object_5 = new lib.it1_15_mc();
	this.object_5.setTransform(73,359);

	this.object_1 = new lib.item1_11_mc();
	this.object_1.setTransform(159,339,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.object_5},{t:this.object_4},{t:this.object_6},{t:this.object_7},{t:this.object_3},{t:this.object_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(12.3,287,802.5,275);
p.frameBounds = [rect];


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


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-389.9,-254,470,508);
p.frameBounds = [rect];


(lib.makeup1_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pincet_mc();
	this.instance.setTransform(-36,-185.2,1,1,-18.7,0,0,96.4,25.2);

	this.instance_1 = new lib.pincet2_mc();
	this.instance_1.setTransform(-28.9,-180.1,1,1,-24.6,0,0,96.5,25.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-29.9,x:-56,y:-172.1},4).to({regY:25.3,scaleX:1,scaleY:1,rotation:-26.3,x:-37.9,y:-177.5},2).to({_off:true,regX:96.5,regY:25.2,scaleX:1,scaleY:1,rotation:-24.6,x:-28.9,y:-180.1},1).to({_off:false,rotation:-22.4,x:-14.9,y:-171.9},3).to({_off:true,x:-9.9,y:-173.9},3).to({_off:false,rotation:-18.4,x:12.1,y:-170.9},3).to({_off:true,x:18.1},3).to({_off:false,x:25.1},3).to({_off:true,x:35.1,y:-167.9},3).to({_off:false,x:204.3,y:-168.5},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},1).to({_off:true,rotation:-22.4,x:-14.9,y:-171.9},3).to({_off:false,x:-9.9,y:-173.9},3).to({_off:true,rotation:-18.4,x:12.1,y:-170.9},3).to({_off:false,x:18.1},3).to({_off:true,x:25.1},3).to({_off:false,x:35.1,y:-167.9},3).to({_off:true,x:204.3,y:-168.5},3).wait(1));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(140,176.4);

	this.instance_3 = new lib.lipstik1_mc();
	this.instance_3.setTransform(94.4,176.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(29));

	// animation
	this.instance_4 = new lib.table_mc();
	this.instance_4.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29));

	// animation
	this.instance_5 = new lib.fringe0_mc();
	this.instance_5.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29));

	// animation
	this.instance_6 = new lib.eyes1_mc();
	this.instance_6.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29));

	// animation
	this.instance_7 = new lib.lips0defect_mc();
	this.instance_7.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29));

	// animation
	this.instance_8 = new lib.lips1_mc();
	this.instance_8.setTransform(4.4,55.3);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29));

	// animation
	this.instance_9 = new lib.volos_mc();
	this.instance_9.setTransform(-85.8,-106.7,1,1,-15.8);

	this.instance_10 = new lib.volos_mc();
	this.instance_10.setTransform(-98.4,-101.2,1,1,-15.8);

	this.instance_11 = new lib.volos_mc();
	this.instance_11.setTransform(-103.8,-99.8,1,1,-43);

	this.instance_12 = new lib.volos_mc();
	this.instance_12.setTransform(-109,-94.7,1,1,-54);

	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(-42.1,-101.9,1,1,16.5);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(-29.8,-101.9,1,1,16.5);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(-70,-102.6);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(-58,-105.1);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(-48.6,-105.1);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(-34.6,-102.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16,p:{x:-58,y:-105.1}},{t:this.instance_15,p:{x:-70,y:-102.6}},{t:this.instance_14,p:{rotation:16.5,x:-29.8,y:-101.9}},{t:this.instance_13,p:{rotation:16.5,x:-42.1,y:-101.9}},{t:this.instance_12,p:{rotation:-54,x:-109,y:-94.7}},{t:this.instance_11,p:{rotation:-43,x:-103.8,y:-99.8}},{t:this.instance_10,p:{rotation:-15.8,x:-98.4,y:-101.2}},{t:this.instance_9,p:{rotation:-15.8,x:-85.8,y:-106.7}}]}).to({state:[{t:this.instance_16,p:{x:-34.6,y:-102.6}},{t:this.instance_15,p:{x:-48.6,y:-105.1}},{t:this.instance_14,p:{rotation:0,x:-58,y:-105.1}},{t:this.instance_13,p:{rotation:0,x:-70,y:-102.6}},{t:this.instance_12,p:{rotation:16.5,x:-29.8,y:-101.9}},{t:this.instance_11,p:{rotation:16.5,x:-42.1,y:-101.9}},{t:this.instance_10,p:{rotation:-15.8,x:-98.4,y:-101.2}},{t:this.instance_9,p:{rotation:-15.8,x:-85.8,y:-106.7}}]},3).to({state:[{t:this.instance_15,p:{x:-34.6,y:-102.6}},{t:this.instance_14,p:{rotation:0,x:-48.6,y:-105.1}},{t:this.instance_13,p:{rotation:0,x:-58,y:-105.1}},{t:this.instance_12,p:{rotation:0,x:-70,y:-102.6}},{t:this.instance_11,p:{rotation:16.5,x:-29.8,y:-101.9}},{t:this.instance_10,p:{rotation:16.5,x:-42.1,y:-101.9}},{t:this.instance_9,p:{rotation:-15.8,x:-85.8,y:-106.7}}]},3).to({state:[{t:this.instance_14,p:{rotation:0,x:-34.6,y:-102.6}},{t:this.instance_13,p:{rotation:0,x:-48.6,y:-105.1}},{t:this.instance_12,p:{rotation:0,x:-58,y:-105.1}},{t:this.instance_11,p:{rotation:0,x:-70,y:-102.6}},{t:this.instance_10,p:{rotation:16.5,x:-29.8,y:-101.9}},{t:this.instance_9,p:{rotation:16.5,x:-42.1,y:-101.9}}]},3).to({state:[{t:this.instance_13,p:{rotation:0,x:-34.6,y:-102.6}},{t:this.instance_12,p:{rotation:0,x:-48.6,y:-105.1}},{t:this.instance_11,p:{rotation:0,x:-58,y:-105.1}},{t:this.instance_10,p:{rotation:16.5,x:-29.8,y:-101.9}},{t:this.instance_9,p:{rotation:16.5,x:-42.1,y:-101.9}}]},2).to({state:[{t:this.instance_12,p:{rotation:0,x:-34.6,y:-102.6}},{t:this.instance_11,p:{rotation:0,x:-48.6,y:-105.1}},{t:this.instance_10,p:{rotation:16.5,x:-29.8,y:-101.9}},{t:this.instance_9,p:{rotation:16.5,x:-42.1,y:-101.9}}]},5).to({state:[{t:this.instance_11,p:{rotation:0,x:-34.6,y:-102.6}},{t:this.instance_10,p:{rotation:16.5,x:-29.8,y:-101.9}},{t:this.instance_9,p:{rotation:16.5,x:-42.1,y:-101.9}}]},3).to({state:[{t:this.instance_10,p:{rotation:0,x:-34.6,y:-102.6}},{t:this.instance_9,p:{rotation:16.5,x:-29.8,y:-101.9}}]},3).to({state:[{t:this.instance_9,p:{rotation:16.5,x:-29.8,y:-101.9}}]},3).to({state:[]},1).wait(3));

	// animation
	this.instance_19 = new lib.eyebrows1_1_mc();
	this.instance_19.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(29));

	// animation
	this.instance_20 = new lib.body0_mc();
	this.instance_20.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(29));

	// animation
	this.instance_21 = new lib.hair0_mc();
	this.instance_21.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-289,800,590.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, new cjs.Rectangle(-400,-287.2,800,588.2), new cjs.Rectangle(-400,-280.6,800,581.7), new cjs.Rectangle(-400,-289.4,800,590.4), new cjs.Rectangle(-400,-290.4,800,591.5), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, new cjs.Rectangle(-400,-281.9,800,583), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pincet_mc();
	this.instance.setTransform(-113,255.2,1,1,8.3,0,0,96.4,25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-18.7,x:-36,y:-185.2},9).wait(1));

	// animation
	this.instance_1 = new lib.lipstik2_mc();
	this.instance_1.setTransform(140,176.4);

	this.instance_2 = new lib.lipstik1_mc();
	this.instance_2.setTransform(94.4,176.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// animation
	this.instance_3 = new lib.table_mc();
	this.instance_3.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.fringe0_mc();
	this.instance_4.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.eyes1_mc();
	this.instance_5.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.lips0defect_mc();
	this.instance_6.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.lips1_mc();
	this.instance_7.setTransform(4.4,55.3);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.eyebrows1_mc();
	this.instance_8.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.body0_mc();
	this.instance_9.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.hair0_mc();
	this.instance_10.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,625.9);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-289,800,590.1)];


(lib.makeup1_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.tools3_mc();
	this.instance.setTransform(-30.6,409.3);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).to({y:210.3,alpha:1},14).to({y:206.3},3).to({y:210.3},3).wait(1));

	// animation
	this.instance_1 = new lib.towel_mc();
	this.instance_1.setTransform(-251,420,0.744,0.744,0,0,0,193.5,242);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({x:-62,y:17.9},10).to({x:70,y:4.9},11).to({x:95,y:146.9},11).to({x:-67,y:149.9},12).to({x:24.8,y:256.9},10).to({x:83.8,y:136.9},12).to({x:209.8,y:467.9,alpha:0.012},8).to({_off:true},1).wait(21));

	// animation
	this.instance_2 = new lib.spray_mc();
	this.instance_2.setTransform(-43,-141,0.482,0.482,0,20.6,-159.4,160.1,159.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({regX:160,scaleX:1,scaleY:1,x:33,y:-99.9},3).to({regX:160.1,scaleX:0.48,scaleY:0.48,x:-43,y:-141},3).to({_off:true},1).wait(10).to({_off:false,x:-23,y:14.2},0).to({regX:160,scaleX:1,scaleY:1,x:57.1,y:50.1},3).to({regX:160.1,scaleX:0.48,scaleY:0.48,x:-23,y:14.2},3).to({_off:true},1).wait(12).to({_off:false,scaleX:0.49,scaleY:0.49,x:69.8,y:-103.3},0).to({regX:160,scaleX:1,scaleY:1,x:151.1,y:-71.4},4).to({regX:160.1,scaleX:0.49,scaleY:0.49,x:69.8,y:-103.3},4).to({_off:true},1).wait(106));

	// animation
	this.instance_3 = new lib.thermal_waterani_mc();
	this.instance_3.setTransform(-210.5,-6.9,0.756,0.756,9.7,0,0,41.1,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:18.7,x:-165,y:-73.9},9).wait(6).to({x:-143,y:84.1},11).wait(6).to({x:-48.7,y:-34.9},13).wait(9).to({rotation:0.4,x:-224.7,y:148},11).to({rotation:0.4,x:-230.7,y:403,alpha:0.012},9).to({_off:true},1).wait(85));

	// animation
	this.instance_4 = new lib.table_mc();
	this.instance_4.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160));

	// animation
	this.instance_5 = new lib.fringe0_mc();
	this.instance_5.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(160));

	// animation
	this.instance_6 = new lib.eyes1_mc();
	this.instance_6.setTransform(3,-58.6);

	this.instance_7 = new lib.eyes1_closed_mc();
	this.instance_7.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},138).wait(21));

	// animation
	this.instance_8 = new lib.lips0defect_mc();
	this.instance_8.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(160));

	// animation
	this.instance_9 = new lib.lips1_mc();
	this.instance_9.setTransform(4.4,55.3);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(160));

	// animation
	this.instance_10 = new lib.eyebrows1_mc();
	this.instance_10.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160));

	// animation
	this.instance_11 = new lib.karli_mc();
	this.instance_11.setTransform(13.7,-36.2);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({alpha:1},45).wait(40).to({alpha:0.012},36).to({_off:true},1).wait(29));

	// animation
	this.instance_12 = new lib.facemask2_mc();
	this.instance_12.setTransform(3.4,-43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15).to({alpha:0.012},39).to({_off:true},1).wait(105));

	// animation
	this.instance_13 = new lib.body0_mc();
	this.instance_13.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(160));

	// animation
	this.instance_14 = new lib.hair0_mc();
	this.instance_14.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-283.2,800,584.2), new cjs.Rectangle(-400,-305.1,800,606.2), new cjs.Rectangle(-400,-283.1,800,584.2), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,880.7), new cjs.Rectangle(-400,-280.6,800,840.5), new cjs.Rectangle(-400,-280.6,800,800.3), new cjs.Rectangle(-400,-280.6,800,760), new cjs.Rectangle(-400,-280.6,800,719.8), new cjs.Rectangle(-400,-280.6,800,679.6), new cjs.Rectangle(-400,-280.6,800,682.5), new cjs.Rectangle(-400,-280.6,800,710.8), new cjs.Rectangle(-400,-280.6,800,739.2), new cjs.Rectangle(-400,-280.6,800,767.5), new cjs.Rectangle(-400,-280.6,800,795.9), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,581.8), new cjs.Rectangle(-400,-280.6,800,594.7), new cjs.Rectangle(-400,-280.6,800,607.6), new cjs.Rectangle(-400,-280.6,800,607.9), new cjs.Rectangle(-400,-280.6,800,608.2), new cjs.Rectangle(-400,-280.6,800,608.4), new cjs.Rectangle(-400,-280.6,800,608.7), new cjs.Rectangle(-400,-280.6,800,608.9), new cjs.Rectangle(-400,-280.6,800,609.2), new cjs.Rectangle(-400,-280.6,800,609.4), new cjs.Rectangle(-400,-280.6,800,609.7), new cjs.Rectangle(-400,-280.6,800,609.9), new cjs.Rectangle(-400,-280.6,800,610.2), new cjs.Rectangle(-400,-280.6,800,610.4), new cjs.Rectangle(-400,-280.6,800,610.6), new cjs.Rectangle(-400,-280.6,800,621.3), new cjs.Rectangle(-400,-280.6,800,632), new cjs.Rectangle(-400,-280.6,800,642.7), new cjs.Rectangle(-400,-280.6,800,653.3), new cjs.Rectangle(-400,-280.6,800,664), new cjs.Rectangle(-400,-280.6,800,674.7), new cjs.Rectangle(-400,-280.6,800,685.4), new cjs.Rectangle(-400,-280.6,800,696.1), new cjs.Rectangle(-400,-280.6,800,706.8), new cjs.Rectangle(-400,-280.6,800,717.5), new cjs.Rectangle(-400,-280.6,800,707.5), new cjs.Rectangle(-400,-280.6,800,697.5), new cjs.Rectangle(-400,-280.6,800,687.5), new cjs.Rectangle(-400,-280.6,800,677.5), new cjs.Rectangle(-400,-280.6,800,667.5), new cjs.Rectangle(-400,-280.6,800,657.5), new cjs.Rectangle(-400,-280.6,800,647.6), new cjs.Rectangle(-400,-280.6,800,637.6), new cjs.Rectangle(-400,-280.6,800,627.6), new cjs.Rectangle(-400,-280.6,800,617.6), new cjs.Rectangle(-400,-280.6,800,607.6), new cjs.Rectangle(-400,-280.6,800,597.6), new cjs.Rectangle(-400,-280.6,800,639), new cjs.Rectangle(-400,-280.6,800,680.3), new cjs.Rectangle(-400,-280.6,800,721.7), new cjs.Rectangle(-400,-280.6,800,763.1), new cjs.Rectangle(-400,-280.6,800,804.4), new cjs.Rectangle(-400,-280.6,800,845.8), new cjs.Rectangle(-400,-280.6,800,887.2), new cjs.Rectangle(-400,-280.6,800,928.5), new cjs.Rectangle(-400,-280.6,800,824.9), new cjs.Rectangle(-400,-280.6,800,807.7), new cjs.Rectangle(-400,-280.6,800,793.4), new cjs.Rectangle(-400,-280.6,800,779.3), new cjs.Rectangle(-400,-280.6,800,765.1), new cjs.Rectangle(-400,-280.6,800,750.8), new cjs.Rectangle(-400,-280.6,800,736.6), new cjs.Rectangle(-400,-280.6,800,722.4), new cjs.Rectangle(-400,-280.6,800,708.2), new cjs.Rectangle(-400,-280.6,800,694), new cjs.Rectangle(-400,-280.6,800,679.8), new cjs.Rectangle(-400,-280.6,800,665.6), new cjs.Rectangle(-400,-280.6,800,651.3), new cjs.Rectangle(-400,-280.6,800,637.1), new cjs.Rectangle(-400,-280.6,800,625.9), new cjs.Rectangle(-400,-280.6,800,621.6), new cjs.Rectangle(-400,-280.6,800,620.3), new cjs.Rectangle(-400,-280.6,800,621.9), new cjs.Rectangle(-400,-280.6,800,620.3), new cjs.Rectangle(-400,-280.6,800,621.6), new cjs.Rectangle(-400,-280.6,800,625.9)];


(lib.makeup1_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.thermal_waterani_mc();
	this.instance.setTransform(-224.7,148,0.756,0.756,0.4,0,0,41.1,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.7,x:-210.5,y:-6.9},9).wait(1));

	// animation
	this.instance_1 = new lib.table_mc();
	this.instance_1.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.fringe0_mc();
	this.instance_2.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.eyes1_mc();
	this.instance_3.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.lips0defect_mc();
	this.instance_4.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.lips1_mc();
	this.instance_5.setTransform(4.4,55.3);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.eyebrows1_mc();
	this.instance_6.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.facemask2_mc();
	this.instance_7.setTransform(3.4,-43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.body0_mc();
	this.instance_8.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.hair0_mc();
	this.instance_9.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.tin_facemask2_mc();
	this.instance.setTransform(28.4,219);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(10));

	// animation
	this.instance_1 = new lib.stick2_mc();
	this.instance_1.setTransform(16.9,375.5,1,1,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:5.3,y:-103.4},10).wait(1));

	// animation
	this.instance_2 = new lib.thermal_waterani_mc();
	this.instance_2.setTransform(-224.7,148,0.756,0.756,0.4,0,0,41.1,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:150.1,rotation:0.3,y:148.1},10).wait(1));

	// animation
	this.instance_3 = new lib.table_mc();
	this.instance_3.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

	// animation
	this.instance_4 = new lib.fringe0_mc();
	this.instance_4.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11));

	// animation
	this.instance_5 = new lib.eyes1_mc();
	this.instance_5.setTransform(3,-58.6);

	this.instance_6 = new lib.eyes1_closed_mc();
	this.instance_6.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},1).wait(10));

	// animation
	this.instance_7 = new lib.lips0defect_mc();
	this.instance_7.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11));

	// animation
	this.instance_8 = new lib.lips1_mc();
	this.instance_8.setTransform(4.4,55.3);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11));

	// animation
	this.instance_9 = new lib.eyebrows1_mc();
	this.instance_9.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11));

	// animation
	this.instance_10 = new lib.skin_defect2_mc();
	this.instance_10.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11));

	// animation
	this.instance_11 = new lib.body0_mc();
	this.instance_11.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11));

	// animation
	this.instance_12 = new lib.hair0_mc();
	this.instance_12.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,730.7);
p.frameBounds = [rect, new cjs.Rectangle(-400,-280.6,800,682.7), new cjs.Rectangle(-400,-280.6,800,634.8), new cjs.Rectangle(-400,-280.6,800,586.8), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, rect, rect];


(lib.makeup1_16_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.stick2_mc();
	this.instance.setTransform(5.3,-103.4,1,1,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-40.2,x:136.3,y:-69.4},14).to({x:60.3,y:-32.4},12).to({x:58.3,y:69.6},8).to({x:-20.7,y:86.6},14).to({x:52.3,y:170.6},12).to({x:148.7,y:92.8},15).to({x:64.7,y:23.6},9).to({x:60.7,y:-77.4},16).to({y:405.4,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.thermal_waterani_mc();
	this.instance_1.setTransform(-224.7,148.1,0.756,0.756,0.3,0,0,41.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:150,rotation:0.4,y:148},109).wait(1));

	// animation
	this.instance_2 = new lib.table_mc();
	this.instance_2.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110));

	// animation
	this.instance_3 = new lib.fringe0_mc();
	this.instance_3.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110));

	// animation
	this.instance_4 = new lib.eyes1_closed_mc();
	this.instance_4.setTransform(3,-58.6);

	this.instance_5 = new lib.eyes1_mc();
	this.instance_5.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},109).wait(1));

	// animation
	this.instance_6 = new lib.lips0defect_mc();
	this.instance_6.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110));

	// animation
	this.instance_7 = new lib.lips1_mc();
	this.instance_7.setTransform(4.4,55.3);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110));

	// animation
	this.instance_8 = new lib.eyebrows1_mc();
	this.instance_8.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(110));

	// animation
	this.instance_9 = new lib.facemask2_mc();
	this.instance_9.setTransform(3.4,-43.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},100).wait(10));

	// animation
	this.instance_10 = new lib.skin_defect2_mc();
	this.instance_10.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100).to({alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_11 = new lib.body0_mc();
	this.instance_11.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(110));

	// animation
	this.instance_12 = new lib.hair0_mc();
	this.instance_12.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,600), new cjs.Rectangle(-400,-280.6,800,660.3), new cjs.Rectangle(-400,-280.6,800,720.7), new cjs.Rectangle(-400,-280.6,800,781.2), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup1_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.towel_mc();
	this.instance.setTransform(-251,420,0.744,0.744,0,0,0,193.5,242);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({x:-62,y:17.9},10).to({x:70,y:4.9},11).to({x:95,y:146.9},11).to({x:-67,y:149.9},12).to({x:24.8,y:256.9},10).to({x:83.8,y:136.9},12).to({x:209.8,y:467.9,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.spray_mc();
	this.instance_1.setTransform(-43,-141,0.482,0.482,0,20.6,-159.4,160.1,159.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regX:160,scaleX:1,scaleY:1,x:33,y:-99.9},3).to({regX:160.1,scaleX:0.48,scaleY:0.48,x:-43,y:-141},3).to({_off:true},1).wait(10).to({_off:false,x:-23,y:14.2},0).to({regX:160,scaleX:1,scaleY:1,x:57.1,y:50.1},3).to({regX:160.1,scaleX:0.48,scaleY:0.48,x:-23,y:14.2},3).to({_off:true},1).wait(12).to({_off:false,scaleX:0.49,scaleY:0.49,x:69.8,y:-103.3},0).to({regX:160,scaleX:1,scaleY:1,x:151.1,y:-71.4},4).to({regX:160.1,scaleX:0.49,scaleY:0.49,x:69.8,y:-103.3},4).to({_off:true},1).wait(86));

	// animation
	this.instance_2 = new lib.thermal_waterani_mc();
	this.instance_2.setTransform(-210.5,-6.9,0.756,0.756,9.7,0,0,41.1,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:18.7,x:-165,y:-73.9},9).wait(6).to({x:-143,y:84.1},11).wait(6).to({x:-48.7,y:-34.9},13).wait(9).to({rotation:0.4,x:-224.7,y:148},11).to({rotation:0.4},74).wait(1));

	// animation
	this.instance_3 = new lib.tin_facemask2_mc();
	this.instance_3.setTransform(28.4,219);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140));

	// animation
	this.instance_4 = new lib.table_mc();
	this.instance_4.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140));

	// animation
	this.instance_5 = new lib.fringe0_mc();
	this.instance_5.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140));

	// animation
	this.instance_6 = new lib.eyes1_mc();
	this.instance_6.setTransform(3,-58.6);

	this.instance_7 = new lib.eyes1_closed_mc();
	this.instance_7.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},138).wait(1));

	// animation
	this.instance_8 = new lib.lips0defect_mc();
	this.instance_8.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(140));

	// animation
	this.instance_9 = new lib.lips1_mc();
	this.instance_9.setTransform(4.4,55.3);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(140));

	// animation
	this.instance_10 = new lib.eyebrows1_mc();
	this.instance_10.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(140));

	// animation
	this.instance_11 = new lib.karli_mc();
	this.instance_11.setTransform(13.7,-36.2);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({alpha:1},45).wait(40).to({alpha:0.012},36).to({_off:true},1).wait(9));

	// animation
	this.instance_12 = new lib.facemask1_mc();
	this.instance_12.setTransform(2.6,-41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15).to({alpha:0.012},39).to({_off:true},1).wait(85));

	// animation
	this.instance_13 = new lib.skin_defect2_mc();
	this.instance_13.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(140));

	// animation
	this.instance_14 = new lib.body0_mc();
	this.instance_14.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(140));

	// animation
	this.instance_15 = new lib.hair0_mc();
	this.instance_15.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-283.2,800,584.2), new cjs.Rectangle(-400,-305.1,800,606.2), new cjs.Rectangle(-400,-283.1,800,584.2), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,880.7), new cjs.Rectangle(-400,-280.6,800,840.5), new cjs.Rectangle(-400,-280.6,800,800.3), new cjs.Rectangle(-400,-280.6,800,760), new cjs.Rectangle(-400,-280.6,800,719.8), new cjs.Rectangle(-400,-280.6,800,679.6), new cjs.Rectangle(-400,-280.6,800,639.5), new cjs.Rectangle(-400,-280.6,800,599.3), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,581.8), new cjs.Rectangle(-400,-280.6,800,594.7), new cjs.Rectangle(-400,-280.6,800,607.6), new cjs.Rectangle(-400,-280.6,800,607.9), new cjs.Rectangle(-400,-280.6,800,608.2), new cjs.Rectangle(-400,-280.6,800,608.4), new cjs.Rectangle(-400,-280.6,800,608.7), new cjs.Rectangle(-400,-280.6,800,608.9), new cjs.Rectangle(-400,-280.6,800,609.2), new cjs.Rectangle(-400,-280.6,800,609.4), new cjs.Rectangle(-400,-280.6,800,609.7), new cjs.Rectangle(-400,-280.6,800,609.9), new cjs.Rectangle(-400,-280.6,800,610.2), new cjs.Rectangle(-400,-280.6,800,610.4), new cjs.Rectangle(-400,-280.6,800,610.6), new cjs.Rectangle(-400,-280.6,800,621.3), new cjs.Rectangle(-400,-280.6,800,632), new cjs.Rectangle(-400,-280.6,800,642.7), new cjs.Rectangle(-400,-280.6,800,653.3), new cjs.Rectangle(-400,-280.6,800,664), new cjs.Rectangle(-400,-280.6,800,674.7), new cjs.Rectangle(-400,-280.6,800,685.4), new cjs.Rectangle(-400,-280.6,800,696.1), new cjs.Rectangle(-400,-280.6,800,706.8), new cjs.Rectangle(-400,-280.6,800,717.5), new cjs.Rectangle(-400,-280.6,800,707.5), new cjs.Rectangle(-400,-280.6,800,697.5), new cjs.Rectangle(-400,-280.6,800,687.5), new cjs.Rectangle(-400,-280.6,800,677.5), new cjs.Rectangle(-400,-280.6,800,667.5), new cjs.Rectangle(-400,-280.6,800,657.5), new cjs.Rectangle(-400,-280.6,800,647.6), new cjs.Rectangle(-400,-280.6,800,637.6), new cjs.Rectangle(-400,-280.6,800,627.6), new cjs.Rectangle(-400,-280.6,800,617.6), new cjs.Rectangle(-400,-280.6,800,607.6), new cjs.Rectangle(-400,-280.6,800,597.6), new cjs.Rectangle(-400,-280.6,800,639), new cjs.Rectangle(-400,-280.6,800,680.3), new cjs.Rectangle(-400,-280.6,800,721.7), new cjs.Rectangle(-400,-280.6,800,763.1), new cjs.Rectangle(-400,-280.6,800,804.4), new cjs.Rectangle(-400,-280.6,800,845.8), new cjs.Rectangle(-400,-280.6,800,887.2), new cjs.Rectangle(-400,-280.6,800,928.5), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup1_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.thermal_waterani_mc();
	this.instance.setTransform(238.3,162.1,0.756,0.756,0,0,0,41.1,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.7,x:-210.5,y:-6.9},9).wait(1));

	// animation
	this.instance_1 = new lib.tin_facemask2_mc();
	this.instance_1.setTransform(28.4,219);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.table_mc();
	this.instance_2.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.fringe0_mc();
	this.instance_3.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.eyes1_mc();
	this.instance_4.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.lips0defect_mc();
	this.instance_5.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.lips1_mc();
	this.instance_6.setTransform(4.4,55.3);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.eyebrows1_mc();
	this.instance_7.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.facemask1_mc();
	this.instance_8.setTransform(2.6,-41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.skin_defect2_mc();
	this.instance_9.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.body0_mc();
	this.instance_10.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.hair0_mc();
	this.instance_11.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.thermal_waterani_mc();
	this.instance.setTransform(238.3,162.1,0.756,0.756,0,0,0,41.1,150);

	this.instance_1 = new lib.tin_facemask2_mc();
	this.instance_1.setTransform(28.4,219);

	this.instance_2 = new lib.tin_facemask1_mc();
	this.instance_2.setTransform(-229.6,219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(10));

	// animation
	this.instance_3 = new lib.stick1_mc();
	this.instance_3.setTransform(17,390,1,1,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:5.3,y:-103.4},10).wait(1));

	// animation
	this.instance_4 = new lib.thermal_waterani_mc();
	this.instance_4.setTransform(238.3,162.1,0.756,0.756,0,0,0,41.1,150);

	this.instance_5 = new lib.tin_facemask2_mc();
	this.instance_5.setTransform(28.4,219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(11));

	// animation
	this.instance_6 = new lib.table_mc();
	this.instance_6.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11));

	// animation
	this.instance_7 = new lib.fringe0_mc();
	this.instance_7.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11));

	// animation
	this.instance_8 = new lib.eyes1_mc();
	this.instance_8.setTransform(3,-58.6);

	this.instance_9 = new lib.eyes1_closed_mc();
	this.instance_9.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},1).wait(10));

	// animation
	this.instance_10 = new lib.lips0defect_mc();
	this.instance_10.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11));

	// animation
	this.instance_11 = new lib.lips1_mc();
	this.instance_11.setTransform(4.4,55.3);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11));

	// animation
	this.instance_12 = new lib.eyebrows1_mc();
	this.instance_12.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(11));

	// animation
	this.instance_13 = new lib.skin_defect2_mc();
	this.instance_13.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(11));

	// animation
	this.instance_14 = new lib.skin_defect1_mc();
	this.instance_14.setTransform(6.4,-76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(11));

	// animation
	this.instance_15 = new lib.body0_mc();
	this.instance_15.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(11));

	// animation
	this.instance_16 = new lib.hair0_mc();
	this.instance_16.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,745.2);
p.frameBounds = [rect, new cjs.Rectangle(-400,-280.6,800,695.7), new cjs.Rectangle(-400,-280.6,800,646.3), new cjs.Rectangle(-400,-280.6,800,597), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect, rect, rect];


(lib.makeup1_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.stick1_mc();
	this.instance.setTransform(5.3,-103.4,1,1,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-40.2,x:136.3,y:-69.4},14).to({x:60.3,y:-32.4},12).to({x:58.3,y:69.6},8).to({x:-20.7,y:86.6},14).to({x:52.3,y:170.6},12).to({x:148.7,y:92.8},15).to({x:64.7,y:23.6},9).to({x:60.7,y:-77.4},16).to({y:405.4,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.thermal_waterani_mc();
	this.instance_1.setTransform(238.3,162.1,0.756,0.756,0,0,0,41.1,150);

	this.instance_2 = new lib.tin_facemask2_mc();
	this.instance_2.setTransform(28.4,219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(110));

	// animation
	this.instance_3 = new lib.table_mc();
	this.instance_3.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110));

	// animation
	this.instance_4 = new lib.fringe0_mc();
	this.instance_4.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110));

	// animation
	this.instance_5 = new lib.eyes1_closed_mc();
	this.instance_5.setTransform(3,-58.6);

	this.instance_6 = new lib.eyes1_mc();
	this.instance_6.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},109).wait(1));

	// animation
	this.instance_7 = new lib.lips0defect_mc();
	this.instance_7.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110));

	// animation
	this.instance_8 = new lib.lips1_mc();
	this.instance_8.setTransform(4.4,55.3);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(110));

	// animation
	this.instance_9 = new lib.eyebrows1_mc();
	this.instance_9.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110));

	// animation
	this.instance_10 = new lib.facemask1_mc();
	this.instance_10.setTransform(2.6,-41.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},100).wait(10));

	// animation
	this.instance_11 = new lib.skin_defect2_mc();
	this.instance_11.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(110));

	// animation
	this.instance_12 = new lib.skin_defect1_mc();
	this.instance_12.setTransform(6.4,-76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(100).to({alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_13 = new lib.body0_mc();
	this.instance_13.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(110));

	// animation
	this.instance_14 = new lib.hair0_mc();
	this.instance_14.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,600), new cjs.Rectangle(-400,-280.6,800,660.3), new cjs.Rectangle(-400,-280.6,800,720.7), new cjs.Rectangle(-400,-280.6,800,781.2), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.patch_mc();
	this.instance.setTransform(226,258.4,1,1,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.3,x:145,y:178.4},4).wait(1));

	// animation
	this.instance_1 = new lib.patch_mc();
	this.instance_1.setTransform(252.4,247.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewY:180},1).to({x:209.2,y:185.3},3).wait(1));

	// animation
	this.instance_2 = new lib.table_mc();
	this.instance_2.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5));

	// animation
	this.instance_3 = new lib.fringe0_mc();
	this.instance_3.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5));

	// animation
	this.instance_4 = new lib.eyes1_mc();
	this.instance_4.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// animation
	this.instance_5 = new lib.sinyaki_mc();
	this.instance_5.setTransform(4.4,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5));

	// animation
	this.instance_6 = new lib.lips0defect_mc();
	this.instance_6.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5));

	// animation
	this.instance_7 = new lib.lips1_mc();
	this.instance_7.setTransform(4.4,55.3);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5));

	// animation
	this.instance_8 = new lib.eyebrows1_mc();
	this.instance_8.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5));

	// animation
	this.instance_9 = new lib.skin_defect2_mc();
	this.instance_9.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5));

	// animation
	this.instance_10 = new lib.skin_defect1_mc();
	this.instance_10.setTransform(6.4,-76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5));

	// animation
	this.instance_11 = new lib.body0_mc();
	this.instance_11.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5));

	// animation
	this.instance_12 = new lib.hair0_mc();
	this.instance_12.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.makeup1_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.tools2_mc();
	this.instance.setTransform(-29.8,380.9);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({y:179,alpha:1},5).to({y:176},2).to({y:179},2).wait(1));

	// animation
	this.instance_1 = new lib.patch_mc();
	this.instance_1.setTransform(124.7,158.4,1,1,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-6.5,x:-57.7,y:-21.6},9).wait(42).to({rotation:-33.4,x:-55.8,y:84.5,alpha:0.012},9).to({_off:true},1).wait(10));

	// animation
	this.instance_2 = new lib.patch_mc();
	this.instance_2.setTransform(194.8,164.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:65.4,y:-23},9).wait(36).to({skewX:27,skewY:207,x:68.4,y:152,alpha:0.012},9).to({_off:true},1).wait(16));

	// animation
	this.instance_3 = new lib.table_mc();
	this.instance_3.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71));

	// animation
	this.instance_4 = new lib.fringe0_mc();
	this.instance_4.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71));

	// animation
	this.instance_5 = new lib.eyes1_mc();
	this.instance_5.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71));

	// animation
	this.instance_6 = new lib.sinyaki_mc();
	this.instance_6.setTransform(4.4,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({alpha:0.012},36).to({_off:true},1).wait(25));

	// animation
	this.instance_7 = new lib.lips0defect_mc();
	this.instance_7.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(71));

	// animation
	this.instance_8 = new lib.lips1_mc();
	this.instance_8.setTransform(4.4,55.3);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(71));

	// animation
	this.instance_9 = new lib.eyebrows1_mc();
	this.instance_9.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(71));

	// animation
	this.instance_10 = new lib.skin_defect2_mc();
	this.instance_10.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(71));

	// animation
	this.instance_11 = new lib.skin_defect1_mc();
	this.instance_11.setTransform(6.4,-76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(71));

	// animation
	this.instance_12 = new lib.body0_mc();
	this.instance_12.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(71));

	// animation
	this.instance_13 = new lib.hair0_mc();
	this.instance_13.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,763.1), new cjs.Rectangle(-400,-280.6,800,722.7), new cjs.Rectangle(-400,-280.6,800,682.3), new cjs.Rectangle(-400,-280.6,800,641.9), new cjs.Rectangle(-400,-280.6,800,601.5), rect=new cjs.Rectangle(-400,-280.6,800,581.7), rect, rect, rect, rect];


(lib.makeup1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pen_mc();
	this.instance.setTransform(10.1,261.3,0.866,0.866,86,0,0,12.4,157.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.5,scaleX:0.87,scaleY:0.87,rotation:115.1,x:65.3,y:200.2},9).wait(1));

	// animation
	this.instance_1 = new lib.patch_mc();
	this.instance_1.setTransform(226,258.4,1,1,-6.5);

	this.instance_2 = new lib.patch_mc();
	this.instance_2.setTransform(252.4,247.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// animation
	this.instance_3 = new lib.table_mc();
	this.instance_3.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.fringe0_mc();
	this.instance_4.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.eyes1_mc();
	this.instance_5.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.sinyaki_mc();
	this.instance_6.setTransform(4.4,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.lips0defect_mc();
	this.instance_7.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.lips1_mc();
	this.instance_8.setTransform(4.4,55.3);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.eyebrows1_mc();
	this.instance_9.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.prisch_mc();
	this.instance_10.setTransform(11,-103);

	this.instance_11 = new lib.prisch_mc();
	this.instance_11.setTransform(-26,-171);

	this.instance_12 = new lib.prisch_mc();
	this.instance_12.setTransform(-66,-126);

	this.instance_13 = new lib.prisch_mc();
	this.instance_13.setTransform(-51,-4.7);

	this.instance_14 = new lib.prisch_mc();
	this.instance_14.setTransform(77,14);

	this.instance_15 = new lib.prisch_mc();
	this.instance_15.setTransform(19,96.9);

	this.instance_16 = new lib.prisch_mc();
	this.instance_16.setTransform(62,-137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(10));

	// animation
	this.instance_17 = new lib.skin_defect2_mc();
	this.instance_17.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// animation
	this.instance_18 = new lib.skin_defect1_mc();
	this.instance_18.setTransform(6.4,-76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

	// animation
	this.instance_19 = new lib.body0_mc();
	this.instance_19.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// animation
	this.instance_20 = new lib.hair0_mc();
	this.instance_20.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pen_mc();
	this.instance.setTransform(71.6,193.3,0.865,0.865,118.4,0,0,12.4,157.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:158,scaleX:0.87,scaleY:0.87,rotation:131.5,x:96.2,y:166.1},4).to({regX:12.3,scaleX:0.72,scaleY:0.72,x:82.3,y:153},2).to({regX:12.4,scaleX:0.87,scaleY:0.87,x:96.2,y:166.1},2).to({rotation:140.2,x:143.3,y:93},13).to({regY:158.1,scaleX:0.74,scaleY:0.74,x:132.4,y:81},2).to({regY:158,scaleX:0.87,scaleY:0.87,x:143.3,y:93},2).to({x:15.3,y:74},14).to({scaleX:0.78,scaleY:0.78,x:8.3,y:66},2).to({scaleX:0.87,scaleY:0.87,x:15.3,y:74},2).to({rotation:145.4,x:70,y:-17.9},14).to({scaleX:0.75,scaleY:0.75,x:61.2,y:-28.4},2).to({scaleX:0.87,scaleY:0.87,x:70,y:-17.9},2).to({x:120,y:-50.9},14).to({scaleX:0.75,scaleY:0.75,x:112.1,y:-63.9},2).to({scaleX:0.87,scaleY:0.87,x:120,y:-50.9},2).to({rotation:125.5,x:58,y:-110.9},14).to({scaleX:0.75,scaleY:0.75,rotation:125.4,x:46,y:-119},2).to({scaleX:0.87,scaleY:0.87,rotation:125.5,x:58,y:-110.9},2).to({x:18,y:-65.9},15).to({regX:12.3,scaleX:0.75,scaleY:0.75,rotation:125.4,x:6,y:-74},2).to({regX:12.4,scaleX:0.87,scaleY:0.87,rotation:125.5,x:18,y:-65.9},2).to({x:4.6,y:308,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.patch_mc();
	this.instance_1.setTransform(226,258.4,1,1,-6.5);

	this.instance_2 = new lib.patch_mc();
	this.instance_2.setTransform(252.4,247.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(130));

	// animation
	this.instance_3 = new lib.table_mc();
	this.instance_3.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130));

	// animation
	this.instance_4 = new lib.fringe0_mc();
	this.instance_4.setTransform(5.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(130));

	// animation
	this.instance_5 = new lib.eyes1_mc();
	this.instance_5.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130));

	// animation
	this.instance_6 = new lib.sinyaki_mc();
	this.instance_6.setTransform(4.4,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(130));

	// animation
	this.instance_7 = new lib.lips0defect_mc();
	this.instance_7.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(130));

	// animation
	this.instance_8 = new lib.lips1_mc();
	this.instance_8.setTransform(4.4,55.3);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(130));

	// animation
	this.instance_9 = new lib.eyebrows1_mc();
	this.instance_9.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(130));

	// animation
	this.instance_10 = new lib.prisch_mc();
	this.instance_10.setTransform(11,-103);

	this.instance_11 = new lib.prisch_mc();
	this.instance_11.setTransform(-26,-171);

	this.instance_12 = new lib.prisch_mc();
	this.instance_12.setTransform(-66,-126);

	this.instance_13 = new lib.prisch_mc();
	this.instance_13.setTransform(-51,-4.7);

	this.instance_14 = new lib.prisch_mc();
	this.instance_14.setTransform(77,14);

	this.instance_15 = new lib.prisch_mc();
	this.instance_15.setTransform(19,96.9);

	this.instance_16 = new lib.prisch_mc();
	this.instance_16.setTransform(62,-137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15,p:{x:19,y:96.9}},{t:this.instance_14,p:{x:77,y:14}},{t:this.instance_13,p:{x:-51,y:-4.7}},{t:this.instance_12,p:{x:-66,y:-126}},{t:this.instance_11,p:{x:-26,y:-171}},{t:this.instance_10,p:{x:11,y:-103}}]}).to({state:[{t:this.instance_15,p:{x:62,y:-137}},{t:this.instance_14,p:{x:77,y:14}},{t:this.instance_13,p:{x:-51,y:-4.7}},{t:this.instance_12,p:{x:-66,y:-126}},{t:this.instance_11,p:{x:-26,y:-171}},{t:this.instance_10,p:{x:11,y:-103}}]},6).to({state:[{t:this.instance_14,p:{x:62,y:-137}},{t:this.instance_13,p:{x:-51,y:-4.7}},{t:this.instance_12,p:{x:-66,y:-126}},{t:this.instance_11,p:{x:-26,y:-171}},{t:this.instance_10,p:{x:11,y:-103}}]},17).to({state:[{t:this.instance_13,p:{x:62,y:-137}},{t:this.instance_12,p:{x:-66,y:-126}},{t:this.instance_11,p:{x:-26,y:-171}},{t:this.instance_10,p:{x:11,y:-103}}]},18).to({state:[{t:this.instance_12,p:{x:62,y:-137}},{t:this.instance_11,p:{x:-66,y:-126}},{t:this.instance_10,p:{x:-26,y:-171}}]},18).to({state:[{t:this.instance_11,p:{x:-66,y:-126}},{t:this.instance_10,p:{x:-26,y:-171}}]},18).to({state:[{t:this.instance_10,p:{x:-66,y:-126}}]},18).to({state:[]},19).wait(16));

	// animation
	this.instance_17 = new lib.skin_defect2_mc();
	this.instance_17.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(130));

	// animation
	this.instance_18 = new lib.skin_defect1_mc();
	this.instance_18.setTransform(6.4,-76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(130));

	// animation
	this.instance_19 = new lib.body0_mc();
	this.instance_19.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(130));

	// animation
	this.instance_20 = new lib.hair0_mc();
	this.instance_20.setTransform(6.4,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.6,800,581.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,611.8), new cjs.Rectangle(-400,-280.6,800,643.1), new cjs.Rectangle(-400,-280.6,800,674.7), new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.zacolka_mc();
	this.instance.setTransform(158,-229,1,1,122.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.64,scaleY:0.64,rotation:116.3,x:106,y:-185,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.zacolka_mc();
	this.instance_1.setTransform(196.3,-161,1,1,156.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.6,scaleY:0.6,rotation:144.4,x:135.3,y:-151.7,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.zacolka_mc();
	this.instance_2.setTransform(-139,-244.6,1,1,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.69,scaleY:0.69,rotation:31.7,x:-94.5,y:-190.6,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.zacolka_mc();
	this.instance_3.setTransform(-180,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.63,scaleY:0.63,rotation:-1.5,x:-116.8,y:-154,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.patch_mc();
	this.instance_4.setTransform(226,258.4,1,1,-6.5);

	this.instance_5 = new lib.patch_mc();
	this.instance_5.setTransform(252.4,247.8);

	this.instance_6 = new lib.pen_mc();
	this.instance_6.setTransform(10.1,261.3,0.866,0.866,86,0,0,12.4,157.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(10));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.fringe0_1_mc();
	this.instance_8.setTransform(4.4,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_9 = new lib.fringe0_mc();
	this.instance_9.setTransform(5.4,-8.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},9).wait(1));

	// animation
	this.instance_10 = new lib.eyes1_mc();
	this.instance_10.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.sinyaki_mc();
	this.instance_11.setTransform(4.4,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.lips0defect_mc();
	this.instance_12.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// animation
	this.instance_13 = new lib.lips1_mc();
	this.instance_13.setTransform(4.4,55.3);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// animation
	this.instance_14 = new lib.eyebrows1_mc();
	this.instance_14.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// animation
	this.instance_15 = new lib.prisch_mc();
	this.instance_15.setTransform(11,-103);

	this.instance_16 = new lib.prisch_mc();
	this.instance_16.setTransform(-26,-171);

	this.instance_17 = new lib.prisch_mc();
	this.instance_17.setTransform(-66,-126);

	this.instance_18 = new lib.prisch_mc();
	this.instance_18.setTransform(-51,-4.7);

	this.instance_19 = new lib.prisch_mc();
	this.instance_19.setTransform(77,14);

	this.instance_20 = new lib.prisch_mc();
	this.instance_20.setTransform(19,96.9);

	this.instance_21 = new lib.prisch_mc();
	this.instance_21.setTransform(62,-137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(10));

	// animation
	this.instance_22 = new lib.skin_defect2_mc();
	this.instance_22.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10));

	// animation
	this.instance_23 = new lib.skin_defect1_mc();
	this.instance_23.setTransform(6.4,-76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(10));

	// animation
	this.instance_24 = new lib.body0_mc();
	this.instance_24.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(10));

	// animation
	this.instance_25 = new lib.hair0_1_mc();
	this.instance_25.setTransform(27,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_26 = new lib.hair0_mc();
	this.instance_26.setTransform(6.4,127.3);
	this.instance_26.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-291.5,800,592.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-280.6,800,581.7)];


(lib.makeup1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.zacolka_mc();
	this.instance.setTransform(-174,250.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:122.8,x:158,y:-229},14).wait(1));

	// animation
	this.instance_1 = new lib.zacolka_mc();
	this.instance_1.setTransform(-224,259.9,1,1,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:156.6,x:196.3,y:-161},14).wait(1));

	// animation
	this.instance_2 = new lib.zacolka_mc();
	this.instance_2.setTransform(-227,236.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:21.7,x:-139,y:-244.6},14).wait(1));

	// animation
	this.instance_3 = new lib.zacolka_mc();
	this.instance_3.setTransform(-260,259.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-180,y:-149},14).wait(1));

	// animation
	this.instance_4 = new lib.patch_mc();
	this.instance_4.setTransform(226,258.4,1,1,-6.5);

	this.instance_5 = new lib.patch_mc();
	this.instance_5.setTransform(252.4,247.8);

	this.instance_6 = new lib.pen_mc();
	this.instance_6.setTransform(10.1,261.3,0.866,0.866,86,0,0,12.4,157.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(15));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(0,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.fringe0_1_mc();
	this.instance_8.setTransform(4.4,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.fringe0_mc();
	this.instance_9.setTransform(5.4,-8.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.eyes1_mc();
	this.instance_10.setTransform(3,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.sinyaki_mc();
	this.instance_11.setTransform(4.4,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.lips0defect_mc();
	this.instance_12.setTransform(4.4,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.lips1_mc();
	this.instance_13.setTransform(4.4,55.3);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.eyebrows1_mc();
	this.instance_14.setTransform(3,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// animation
	this.instance_15 = new lib.prisch_mc();
	this.instance_15.setTransform(11,-103);

	this.instance_16 = new lib.prisch_mc();
	this.instance_16.setTransform(-26,-171);

	this.instance_17 = new lib.prisch_mc();
	this.instance_17.setTransform(-66,-126);

	this.instance_18 = new lib.prisch_mc();
	this.instance_18.setTransform(-51,-4.7);

	this.instance_19 = new lib.prisch_mc();
	this.instance_19.setTransform(77,14);

	this.instance_20 = new lib.prisch_mc();
	this.instance_20.setTransform(19,96.9);

	this.instance_21 = new lib.prisch_mc();
	this.instance_21.setTransform(62,-137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(15));

	// animation
	this.instance_22 = new lib.skin_defect2_mc();
	this.instance_22.setTransform(9.4,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(15));

	// animation
	this.instance_23 = new lib.skin_defect1_mc();
	this.instance_23.setTransform(6.4,-76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(15));

	// animation
	this.instance_24 = new lib.body0_mc();
	this.instance_24.setTransform(19,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(15));

	// animation
	this.instance_25 = new lib.hair0_1_img();
	this.instance_25.setTransform(-158.5,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(15));

	// animation
	this.instance_26 = new lib.hair0_mc();
	this.instance_26.setTransform(6.4,127.3);
	this.instance_26.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-291.5,800,592.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lens_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lens_3_mc();
	this.instance.setTransform(-230,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.lens_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-300,800,600);
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


(lib.hint_find_panel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.object_1 = new lib.hint_find_panel_2_2_mc();
	this.object_1.setTransform(-259,0);

	this.object_2 = new lib.hint_find_panel_2_2_mc();
	this.object_2.setTransform(-156,0);

	this.object_6 = new lib.hint_find_panel_2_2_mc();
	this.object_6.setTransform(259,0);

	this.object_5 = new lib.hint_find_panel_2_2_mc();
	this.object_5.setTransform(156,0);

	this.object_3 = new lib.hint_find_panel_2_2_mc();
	this.object_3.setTransform(-53,0);

	this.object_4 = new lib.hint_find_panel_2_2_mc();
	this.object_4.setTransform(53,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_4},{t:this.object_3},{t:this.object_5},{t:this.object_6},{t:this.object_2},{t:this.object_1}]}).wait(1));

	// bg
	this.instance = new lib.hint_find_panel_1_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-60,660,120);
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
	this.hero_1 = new lib.hero_sport_mc();
	this.hero_1.setTransform(400,350);

	this.hero_2 = new lib.hero_cinema_mc();
	this.hero_2.setTransform(410,355);

	this.hero_3 = new lib.hero_red_carpet_mc();
	this.hero_3.setTransform(415,355);

	this.instance = new lib.hero_m4_mc();
	this.instance.setTransform(397,338);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_1}]}).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_3}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// bg
	this.instance_1 = new lib.background_6_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_7_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.instance_4 = new lib.background_4_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-200,0,1200,601.4)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.girl_on_chair_mc();
	this.instance.setTransform(850,305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195));

	// animation
	this.instance_1 = new lib.hero_sport_main_mc();
	this.instance_1.setTransform(1300,350);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).to({x:507},20).to({x:557},5).wait(1));

	// animation
	this.instance_2 = new lib.hero_red_carpet_main_mc();
	this.instance_2.setTransform(1300,355);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({x:523},20).to({x:573},5).wait(40).to({x:1300},20).to({_off:true},1).wait(5));

	// animation
	this.instance_3 = new lib.hero_cinema_main_mc();
	this.instance_3.setTransform(1300,355);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({x:523},20).to({x:573},5).wait(40).to({x:1300},20).to({_off:true},1).wait(70));

	// animation
	this.instance_4 = new lib.hero_sport_main_mc();
	this.instance_4.setTransform(557,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({x:1300},20).to({_off:true},1).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(85.1,20.5,1336.5,585);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(85.1,21,1336.5,584.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(85.1,21,1297.6,584.5), new cjs.Rectangle(85.1,21,1258.8,584.5), new cjs.Rectangle(85.1,21,1219.9,584.5), new cjs.Rectangle(85.1,21,1181.1,584.5), new cjs.Rectangle(85.1,21,1142.2,584.5), new cjs.Rectangle(85.1,21,1103.4,584.5), new cjs.Rectangle(85.1,21,1064.5,584.5), new cjs.Rectangle(85.1,21,1025.7,584.5), new cjs.Rectangle(85.1,21,986.8,584.5), new cjs.Rectangle(85.1,21,948,584.5), new cjs.Rectangle(85.1,21,977.8,584.5), new cjs.Rectangle(85.1,21,1014.2,584.5), new cjs.Rectangle(85.1,21,1050.5,584.5), new cjs.Rectangle(85.1,21,1086.9,584.5), new cjs.Rectangle(85.1,21,1123.2,584.5), new cjs.Rectangle(85.1,21,1159.6,584.5), new cjs.Rectangle(85.1,21,1195.9,584.5), new cjs.Rectangle(85.1,21,1232.3,584.5), new cjs.Rectangle(85.1,21,1268.6,584.5), new cjs.Rectangle(85.1,21,1305,584.5), new cjs.Rectangle(85.1,21,569.5,584.5), new cjs.Rectangle(85.1,21,579.5,584.5), new cjs.Rectangle(85.1,21,589.5,584.5), new cjs.Rectangle(85.1,21,599.5,584.5), rect=new cjs.Rectangle(85.1,21,609.5,584.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(85.1,20.5,1310,585), new cjs.Rectangle(85.1,20.5,1270.3,585), new cjs.Rectangle(85.1,20.5,1230.7,585), new cjs.Rectangle(85.1,20.5,1191,585), new cjs.Rectangle(85.1,20.5,1151.4,585), new cjs.Rectangle(85.1,20.5,1111.7,585), new cjs.Rectangle(85.1,20.5,1072.1,585), new cjs.Rectangle(85.1,20.5,1032.4,585), new cjs.Rectangle(85.1,20.5,992.8,585), new cjs.Rectangle(85.1,20.5,953.1,585), new cjs.Rectangle(85.1,20.5,973,585), new cjs.Rectangle(85.1,20.5,1009.3,585), new cjs.Rectangle(85.1,20.5,1045.7,585), new cjs.Rectangle(85.1,20.5,1082,585), new cjs.Rectangle(85.1,20.5,1118.4,585), new cjs.Rectangle(85.1,20.5,1154.7,585), new cjs.Rectangle(85.1,20.5,1191.1,585), new cjs.Rectangle(85.1,20.5,1227.4,585), new cjs.Rectangle(85.1,20.5,1263.8,585), new cjs.Rectangle(85.1,20.5,1300.1,585), new cjs.Rectangle(85.1,20.5,1336.5,585), new cjs.Rectangle(85.1,20.5,527,585), new cjs.Rectangle(85.1,20.5,537,585), new cjs.Rectangle(85.1,20.5,547,585), new cjs.Rectangle(85.1,20.5,557,585), new cjs.Rectangle(85.1,20.5,567,585)];


(lib.hairstyle_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_8_2_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_7_3_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_7_2_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_3_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_3_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_3_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_3_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_3_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_3_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_1_mc();
	this.check_mc.setTransform(65,90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-110,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-140,220,280);
p.frameBounds = [rect];


(lib.frame_locations_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":79});

	// decor
	this.instance = new lib.lens_mc();
	this.instance.setTransform(1000,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:0},14).wait(26));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(0,330);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(19).to({y:0},20).wait(41));

	// decor
	this.instance_1 = new lib.shadow_selection_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:0.398},9).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-770,540,2200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-270,-786.5,540,2200), new cjs.Rectangle(-270,-803,540,2200), new cjs.Rectangle(-270,-819.5,540,2200), new cjs.Rectangle(-270,-836,540,2200), new cjs.Rectangle(-270,-852.5,540,2200), new cjs.Rectangle(-270,-869,540,2200), new cjs.Rectangle(-270,-885.5,540,2200), new cjs.Rectangle(-270,-902,540,2200), new cjs.Rectangle(-270,-918.5,540,2200), new cjs.Rectangle(-270,-935,540,2200), new cjs.Rectangle(-270,-951.5,540,2200), new cjs.Rectangle(-270,-968,540,2200), new cjs.Rectangle(-270,-984.5,540,2200), new cjs.Rectangle(-270,-1001,540,2200), new cjs.Rectangle(-270,-1017.5,540,2200), new cjs.Rectangle(-270,-1034,540,2200), new cjs.Rectangle(-270,-1050.5,540,2200), new cjs.Rectangle(-270,-1067,540,2200), new cjs.Rectangle(-270,-1083.5,540,2200), new cjs.Rectangle(-270,-1100,540,2200), new cjs.Rectangle(-610,-1100,2010,2200), new cjs.Rectangle(-610,-1100,1938.6,2200), new cjs.Rectangle(-610,-1100,1867.2,2200), new cjs.Rectangle(-610,-1100,1795.7,2200), new cjs.Rectangle(-610,-1100,1724.3,2200), new cjs.Rectangle(-610,-1100,1652.9,2200), new cjs.Rectangle(-610,-1100,1581.5,2200), new cjs.Rectangle(-610,-1100,1510,2200), new cjs.Rectangle(-610,-1100,1438.6,2200), new cjs.Rectangle(-610,-1100,1367.2,2200), new cjs.Rectangle(-610,-1100,1295.7,2200), new cjs.Rectangle(-610,-1100,1224.3,2200), rect=new cjs.Rectangle(-610,-1100,1220,2200), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":69});

	// decor
	this.instance = new lib.lens_mc();
	this.instance.setTransform(1000,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:0},14).wait(16));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(0,330);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(19).to({y:0},20).wait(31));

	// decor
	this.instance_1 = new lib.shadow_selection_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:0.398},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-770,540,2200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-270,-786.5,540,2200), new cjs.Rectangle(-270,-803,540,2200), new cjs.Rectangle(-270,-819.5,540,2200), new cjs.Rectangle(-270,-836,540,2200), new cjs.Rectangle(-270,-852.5,540,2200), new cjs.Rectangle(-270,-869,540,2200), new cjs.Rectangle(-270,-885.5,540,2200), new cjs.Rectangle(-270,-902,540,2200), new cjs.Rectangle(-270,-918.5,540,2200), new cjs.Rectangle(-270,-935,540,2200), new cjs.Rectangle(-270,-951.5,540,2200), new cjs.Rectangle(-270,-968,540,2200), new cjs.Rectangle(-270,-984.5,540,2200), new cjs.Rectangle(-270,-1001,540,2200), new cjs.Rectangle(-270,-1017.5,540,2200), new cjs.Rectangle(-270,-1034,540,2200), new cjs.Rectangle(-270,-1050.5,540,2200), new cjs.Rectangle(-270,-1067,540,2200), new cjs.Rectangle(-270,-1083.5,540,2200), new cjs.Rectangle(-270,-1100,540,2200), new cjs.Rectangle(-610,-1100,2010,2200), new cjs.Rectangle(-610,-1100,1938.6,2200), new cjs.Rectangle(-610,-1100,1867.2,2200), new cjs.Rectangle(-610,-1100,1795.7,2200), new cjs.Rectangle(-610,-1100,1724.3,2200), new cjs.Rectangle(-610,-1100,1652.9,2200), new cjs.Rectangle(-610,-1100,1581.5,2200), new cjs.Rectangle(-610,-1100,1510,2200), new cjs.Rectangle(-610,-1100,1438.6,2200), new cjs.Rectangle(-610,-1100,1367.2,2200), new cjs.Rectangle(-610,-1100,1295.7,2200), new cjs.Rectangle(-610,-1100,1224.3,2200), rect=new cjs.Rectangle(-610,-1100,1220,2200), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":69});

	// decor
	this.instance = new lib.lens_mc();
	this.instance.setTransform(1000,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:0},14).wait(16));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(0,330);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(19).to({y:0},20).wait(31));

	// decor
	this.instance_1 = new lib.shadow_selection_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:0.398},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-770,540,2200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-270,-786.5,540,2200), new cjs.Rectangle(-270,-803,540,2200), new cjs.Rectangle(-270,-819.5,540,2200), new cjs.Rectangle(-270,-836,540,2200), new cjs.Rectangle(-270,-852.5,540,2200), new cjs.Rectangle(-270,-869,540,2200), new cjs.Rectangle(-270,-885.5,540,2200), new cjs.Rectangle(-270,-902,540,2200), new cjs.Rectangle(-270,-918.5,540,2200), new cjs.Rectangle(-270,-935,540,2200), new cjs.Rectangle(-270,-951.5,540,2200), new cjs.Rectangle(-270,-968,540,2200), new cjs.Rectangle(-270,-984.5,540,2200), new cjs.Rectangle(-270,-1001,540,2200), new cjs.Rectangle(-270,-1017.5,540,2200), new cjs.Rectangle(-270,-1034,540,2200), new cjs.Rectangle(-270,-1050.5,540,2200), new cjs.Rectangle(-270,-1067,540,2200), new cjs.Rectangle(-270,-1083.5,540,2200), new cjs.Rectangle(-270,-1100,540,2200), new cjs.Rectangle(-610,-1100,2010,2200), new cjs.Rectangle(-610,-1100,1938.6,2200), new cjs.Rectangle(-610,-1100,1867.2,2200), new cjs.Rectangle(-610,-1100,1795.7,2200), new cjs.Rectangle(-610,-1100,1724.3,2200), new cjs.Rectangle(-610,-1100,1652.9,2200), new cjs.Rectangle(-610,-1100,1581.5,2200), new cjs.Rectangle(-610,-1100,1510,2200), new cjs.Rectangle(-610,-1100,1438.6,2200), new cjs.Rectangle(-610,-1100,1367.2,2200), new cjs.Rectangle(-610,-1100,1295.7,2200), new cjs.Rectangle(-610,-1100,1224.3,2200), rect=new cjs.Rectangle(-610,-1100,1220,2200), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":69});

	// decor
	this.instance = new lib.lens_mc();
	this.instance.setTransform(1000,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:0},14).wait(16));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(0,330);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(19).to({y:0},20).wait(31));

	// decor
	this.instance_1 = new lib.shadow_selection_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:0.398},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-770,540,2200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-270,-786.5,540,2200), new cjs.Rectangle(-270,-803,540,2200), new cjs.Rectangle(-270,-819.5,540,2200), new cjs.Rectangle(-270,-836,540,2200), new cjs.Rectangle(-270,-852.5,540,2200), new cjs.Rectangle(-270,-869,540,2200), new cjs.Rectangle(-270,-885.5,540,2200), new cjs.Rectangle(-270,-902,540,2200), new cjs.Rectangle(-270,-918.5,540,2200), new cjs.Rectangle(-270,-935,540,2200), new cjs.Rectangle(-270,-951.5,540,2200), new cjs.Rectangle(-270,-968,540,2200), new cjs.Rectangle(-270,-984.5,540,2200), new cjs.Rectangle(-270,-1001,540,2200), new cjs.Rectangle(-270,-1017.5,540,2200), new cjs.Rectangle(-270,-1034,540,2200), new cjs.Rectangle(-270,-1050.5,540,2200), new cjs.Rectangle(-270,-1067,540,2200), new cjs.Rectangle(-270,-1083.5,540,2200), new cjs.Rectangle(-270,-1100,540,2200), new cjs.Rectangle(-610,-1100,2010,2200), new cjs.Rectangle(-610,-1100,1938.6,2200), new cjs.Rectangle(-610,-1100,1867.2,2200), new cjs.Rectangle(-610,-1100,1795.7,2200), new cjs.Rectangle(-610,-1100,1724.3,2200), new cjs.Rectangle(-610,-1100,1652.9,2200), new cjs.Rectangle(-610,-1100,1581.5,2200), new cjs.Rectangle(-610,-1100,1510,2200), new cjs.Rectangle(-610,-1100,1438.6,2200), new cjs.Rectangle(-610,-1100,1367.2,2200), new cjs.Rectangle(-610,-1100,1295.7,2200), new cjs.Rectangle(-610,-1100,1224.3,2200), rect=new cjs.Rectangle(-610,-1100,1220,2200), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":69});

	// decor
	this.instance = new lib.lens_mc();
	this.instance.setTransform(1000,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:0},14).wait(16));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(0,330);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(19).to({y:0},20).wait(31));

	// decor
	this.instance_1 = new lib.shadow_selection_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:0.398},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-770,540,2200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-270,-786.5,540,2200), new cjs.Rectangle(-270,-803,540,2200), new cjs.Rectangle(-270,-819.5,540,2200), new cjs.Rectangle(-270,-836,540,2200), new cjs.Rectangle(-270,-852.5,540,2200), new cjs.Rectangle(-270,-869,540,2200), new cjs.Rectangle(-270,-885.5,540,2200), new cjs.Rectangle(-270,-902,540,2200), new cjs.Rectangle(-270,-918.5,540,2200), new cjs.Rectangle(-270,-935,540,2200), new cjs.Rectangle(-270,-951.5,540,2200), new cjs.Rectangle(-270,-968,540,2200), new cjs.Rectangle(-270,-984.5,540,2200), new cjs.Rectangle(-270,-1001,540,2200), new cjs.Rectangle(-270,-1017.5,540,2200), new cjs.Rectangle(-270,-1034,540,2200), new cjs.Rectangle(-270,-1050.5,540,2200), new cjs.Rectangle(-270,-1067,540,2200), new cjs.Rectangle(-270,-1083.5,540,2200), new cjs.Rectangle(-270,-1100,540,2200), new cjs.Rectangle(-610,-1100,2010,2200), new cjs.Rectangle(-610,-1100,1938.6,2200), new cjs.Rectangle(-610,-1100,1867.2,2200), new cjs.Rectangle(-610,-1100,1795.7,2200), new cjs.Rectangle(-610,-1100,1724.3,2200), new cjs.Rectangle(-610,-1100,1652.9,2200), new cjs.Rectangle(-610,-1100,1581.5,2200), new cjs.Rectangle(-610,-1100,1510,2200), new cjs.Rectangle(-610,-1100,1438.6,2200), new cjs.Rectangle(-610,-1100,1367.2,2200), new cjs.Rectangle(-610,-1100,1295.7,2200), new cjs.Rectangle(-610,-1100,1224.3,2200), rect=new cjs.Rectangle(-610,-1100,1220,2200), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":69});

	// decor
	this.instance = new lib.lens_mc();
	this.instance.setTransform(1000,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:0},14).wait(16));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,330);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(19).to({y:0},20).wait(31));

	// decor
	this.instance_1 = new lib.shadow_selection_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:0.398},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-770,540,2200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-270,-786.5,540,2200), new cjs.Rectangle(-270,-803,540,2200), new cjs.Rectangle(-270,-819.5,540,2200), new cjs.Rectangle(-270,-836,540,2200), new cjs.Rectangle(-270,-852.5,540,2200), new cjs.Rectangle(-270,-869,540,2200), new cjs.Rectangle(-270,-885.5,540,2200), new cjs.Rectangle(-270,-902,540,2200), new cjs.Rectangle(-270,-918.5,540,2200), new cjs.Rectangle(-270,-935,540,2200), new cjs.Rectangle(-270,-951.5,540,2200), new cjs.Rectangle(-270,-968,540,2200), new cjs.Rectangle(-270,-984.5,540,2200), new cjs.Rectangle(-270,-1001,540,2200), new cjs.Rectangle(-270,-1017.5,540,2200), new cjs.Rectangle(-270,-1034,540,2200), new cjs.Rectangle(-270,-1050.5,540,2200), new cjs.Rectangle(-270,-1067,540,2200), new cjs.Rectangle(-270,-1083.5,540,2200), new cjs.Rectangle(-270,-1100,540,2200), new cjs.Rectangle(-610,-1100,2010,2200), new cjs.Rectangle(-610,-1100,1938.6,2200), new cjs.Rectangle(-610,-1100,1867.2,2200), new cjs.Rectangle(-610,-1100,1795.7,2200), new cjs.Rectangle(-610,-1100,1724.3,2200), new cjs.Rectangle(-610,-1100,1652.9,2200), new cjs.Rectangle(-610,-1100,1581.5,2200), new cjs.Rectangle(-610,-1100,1510,2200), new cjs.Rectangle(-610,-1100,1438.6,2200), new cjs.Rectangle(-610,-1100,1367.2,2200), new cjs.Rectangle(-610,-1100,1295.7,2200), new cjs.Rectangle(-610,-1100,1224.3,2200), rect=new cjs.Rectangle(-610,-1100,1220,2200), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":69});

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-190,125,1,1,-30);
	this.pointer_1.alpha = 0.012;
	this.pointer_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(34).to({_off:false},0).to({alpha:1},5).to({alpha:0.012},5).to({_off:true},1).wait(25));

	// decor
	this.instance = new lib.lens_mc();
	this.instance.setTransform(1000,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:0},14).wait(16));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(0,655);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({y:0},20).wait(31));

	// decor
	this.instance_1 = new lib.shadow_selection_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:0.398},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-445,540,2200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-270,-477.7,540,2200), new cjs.Rectangle(-270,-510.5,540,2200), new cjs.Rectangle(-270,-543.2,540,2200), new cjs.Rectangle(-270,-576,540,2200), new cjs.Rectangle(-270,-608.7,540,2200), new cjs.Rectangle(-270,-641.5,540,2200), new cjs.Rectangle(-270,-674.2,540,2200), new cjs.Rectangle(-270,-707,540,2200), new cjs.Rectangle(-270,-739.7,540,2200), new cjs.Rectangle(-270,-772.5,540,2200), new cjs.Rectangle(-270,-805.2,540,2200), new cjs.Rectangle(-270,-838,540,2200), new cjs.Rectangle(-270,-870.7,540,2200), new cjs.Rectangle(-270,-903.5,540,2200), new cjs.Rectangle(-316.5,-936.2,586.5,2200), new cjs.Rectangle(-316.3,-969,586.3,2200), new cjs.Rectangle(-316.3,-1001.7,586.3,2200), new cjs.Rectangle(-316.3,-1034.5,586.3,2200), new cjs.Rectangle(-316.3,-1067.2,586.3,2200), new cjs.Rectangle(-316.5,-1100,586.5,2200), new cjs.Rectangle(-610,-1100,2010,2200), new cjs.Rectangle(-610,-1100,1938.6,2200), new cjs.Rectangle(-610,-1100,1867.2,2200), new cjs.Rectangle(-610,-1100,1795.7,2200), new cjs.Rectangle(-610,-1100,1724.3,2200), new cjs.Rectangle(-610,-1100,1652.9,2200), new cjs.Rectangle(-610,-1100,1581.5,2200), new cjs.Rectangle(-610,-1100,1510,2200), new cjs.Rectangle(-610,-1100,1438.6,2200), new cjs.Rectangle(-610,-1100,1367.2,2200), new cjs.Rectangle(-610,-1100,1295.7,2200), new cjs.Rectangle(-610,-1100,1224.3,2200), rect=new cjs.Rectangle(-610,-1100,1220,2200), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.comics1_text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_3_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.comics_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.comics1_text2_mc();
	this.instance.setTransform(215,-138);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},9).to({_off:true},1).wait(50));

	// text
	this.instance_1 = new lib.comics1_text1_mc();
	this.instance_1.setTransform(-239,119);

	this.instance_2 = new lib.comics1_text3_mc();
	this.instance_2.setTransform(-239,119);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.012},9).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({alpha:1},13).wait(36));

	// animation
	this.instance_3 = new lib.comics1_hand0_mc();
	this.instance_3.setTransform(-124,44,1,1,0,0,0,29,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-27.2,x:-119,y:37},11).wait(49));

	// animation
	this.instance_4 = new lib.hero0_head0_mc();
	this.instance_4.setTransform(-15.5,-116.5,1,1,0,0,0,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:7,x:-16,y:-116.2},11).wait(49));

	// animation
	this.instance_5 = new lib.comics1_body0_mc();
	this.instance_5.setTransform(30,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// animation
	this.instance_6 = new lib.comics1_hair0_mc();
	this.instance_6.setTransform(-13,-231,1,1,0,0,0,3,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-172.1,rotation:1.4,x:0.3,y:-229.6},11).wait(49));

	// animation
	this.instance_7 = new lib.comics1_chair_mc();
	this.instance_7.setTransform(-1,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-379,-280.1,734,580.6);
p.frameBounds = [rect, new cjs.Rectangle(-379,-280.6,734,581.1), new cjs.Rectangle(-379,-281.3,734,581.8), new cjs.Rectangle(-379,-281.9,734,582.3), new cjs.Rectangle(-379,-282.6,734,583.1), new cjs.Rectangle(-379,-283.1,734,583.6), new cjs.Rectangle(-379,-283.7,734,584.2), new cjs.Rectangle(-379,-284.1,734,584.6), new cjs.Rectangle(-379,-284.8,734,585.3), new cjs.Rectangle(-379,-285.1,734,585.6), new cjs.Rectangle(-264.3,-285.7,453.9,586.2), new cjs.Rectangle(-379,-286.3,568.5,586.8), rect=new cjs.Rectangle(-379,-286.1,568.5,586.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-379,-286.3,568.5,586.8)];


(lib.closet3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(250,-145);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(250,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0}]},5).to({state:[{t:this.accessory_0}]},1).wait(1));

	// options
	this.hair_4 = new lib.hairstyle_4_3_mc();
	this.hair_4.setTransform(90,40);

	this.hair_3 = new lib.hairstyle_3_3_mc();
	this.hair_3.setTransform(-140,40);

	this.hair_2 = new lib.hairstyle_2_3_mc();
	this.hair_2.setTransform(140,-120);

	this.hair_1 = new lib.hairstyle_1_3_mc();
	this.hair_1.setTransform(-90,-120);

	this.hair_5 = new lib.hairstyle_5_3_mc();
	this.hair_5.setTransform(-140,-120);

	this.hair_7 = new lib.hairstyle_7_3_mc();
	this.hair_7.setTransform(20,40);

	this.hair_6 = new lib.hairstyle_6_3_mc();
	this.hair_6.setTransform(140,-120);

	this.dress_8 = new lib.dress_8_3_mc();
	this.dress_8.setTransform(140,-220);

	this.dress_2 = new lib.dress_2_3_mc();
	this.dress_2.setTransform(0,-220);

	this.dress_3 = new lib.dress_3_3_mc();
	this.dress_3.setTransform(-140,-220);

	this.dress_6 = new lib.dress_6_3_mc();
	this.dress_6.setTransform(140,-220);

	this.dress_4 = new lib.dress_4_3_mc();
	this.dress_4.setTransform(0,-220);

	this.dress_5 = new lib.dress_5_3_mc();
	this.dress_5.setTransform(-140,-220);

	this.dress_9 = new lib.dress_9_3_mc();
	this.dress_9.setTransform(140,-220);

	this.dress_7 = new lib.dress_7_3_mc();
	this.dress_7.setTransform(0,-220);

	this.dress_1 = new lib.dress_1_3_mc();
	this.dress_1.setTransform(-140,-220);

	this.shoes_6 = new lib.shoes_6_3_mc();
	this.shoes_6.setTransform(130,42);

	this.shoes_5 = new lib.shoes_5_3_mc();
	this.shoes_5.setTransform(-130,47);

	this.shoes_4 = new lib.shoes_4_3_mc();
	this.shoes_4.setTransform(-130,-103);

	this.shoes_3 = new lib.shoes_3_3_mc();
	this.shoes_3.setTransform(130,-98);

	this.shoes_2 = new lib.shoes_2_3_mc();
	this.shoes_2.setTransform(0,-104);

	this.shoes_1 = new lib.shoes_1_3_mc();
	this.shoes_1.setTransform(0,41);

	this.accessory_1 = new lib.accessory_1_3_mc();
	this.accessory_1.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4}]}).to({state:[{t:this.hair_6},{t:this.hair_7},{t:this.hair_5}]},1).to({state:[{t:this.dress_3},{t:this.dress_2},{t:this.dress_8}]},1).to({state:[{t:this.dress_5},{t:this.dress_4},{t:this.dress_6}]},1).to({state:[{t:this.dress_1},{t:this.dress_7},{t:this.dress_9}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.shoes_5},{t:this.shoes_6}]},1).to({state:[{t:this.accessory_1}]},1).wait(1));

	// decor
	this.instance = new lib.rod_mc();
	this.instance.setTransform(0,-50);

	this.instance_1 = new lib.rod_mc();
	this.instance_1.setTransform(0,-80);

	this.instance_2 = new lib.rod_mc();
	this.instance_2.setTransform(0,-210);

	this.instance_3 = new lib.rod_mc();
	this.instance_3.setTransform(0,-240);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,200);

	this.instance_5 = new lib.shelf_mc();
	this.instance_5.setTransform(0,60);

	this.instance_6 = new lib.shelf_mc();
	this.instance_6.setTransform(0,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:-50}}]}).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:-50}}]},1).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_1,p:{y:-240}},{t:this.instance,p:{y:-210}}]},1).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_1,p:{y:-240}},{t:this.instance,p:{y:-210}}]},1).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_1,p:{y:-240}},{t:this.instance,p:{y:-210}}]},1).to({state:[{t:this.instance_6},{t:this.instance_1,p:{y:-240}},{t:this.instance,p:{y:-210}},{t:this.instance_5},{t:this.instance_4,p:{y:-80}}]},1).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-100}},{t:this.instance,p:{y:-70}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-260,560,480);
p.frameBounds = [rect, rect, new cjs.Rectangle(-280,-255,560,475), new cjs.Rectangle(-377,-255,657,518.4), rect=new cjs.Rectangle(-280,-255,560,475), rect, rect];


(lib.closet2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(250,-155);

	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(250,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0},{t:this.accessory_0}]},4).wait(1));

	// options
	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(90,40);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(-140,40);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(140,-120);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(-90,-120);

	this.hair_8 = new lib.hairstyle_8_2_mc();
	this.hair_8.setTransform(90,40);

	this.hair_7 = new lib.hairstyle_7_2_mc();
	this.hair_7.setTransform(-140,40);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(140,-120);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(-90,-120);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(-55,-220);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(55,-220);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(-165,-220);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(165,-220);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(165,-220);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(55,-220);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(-55,-220);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(-165,-220);

	this.shoes_3 = new lib.shoes_3_2_mc();
	this.shoes_3.setTransform(-50,-100);

	this.shoes_2 = new lib.shoes_2_2_mc();
	this.shoes_2.setTransform(70,-106);

	this.shoes_1 = new lib.shoes_1_2_mc();
	this.shoes_1.setTransform(-175,-105);

	this.shoes_6 = new lib.shoes_6_2_mc();
	this.shoes_6.setTransform(150,99);

	this.shoes_5 = new lib.shoes_5_2_mc();
	this.shoes_5.setTransform(0,38);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(180,-105);

	this.shoes_4 = new lib.shoes_4_2_mc();
	this.shoes_4.setTransform(-140,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4}]}).to({state:[{t:this.hair_5},{t:this.hair_6},{t:this.hair_7},{t:this.hair_8}]},1).to({state:[{t:this.dress_6},{t:this.dress_7},{t:this.dress_4},{t:this.dress_1}]},1).to({state:[{t:this.dress_8},{t:this.dress_2},{t:this.dress_3},{t:this.dress_5}]},1).to({state:[{t:this.shoes_4},{t:this.accessory_1},{t:this.shoes_5},{t:this.shoes_6},{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3}]},1).wait(1));

	// decor
	this.instance = new lib.rod_mc();
	this.instance.setTransform(0,-50);

	this.instance_1 = new lib.rod_mc();
	this.instance_1.setTransform(0,-80);

	this.instance_2 = new lib.rod_mc();
	this.instance_2.setTransform(0,-210);

	this.instance_3 = new lib.rod_mc();
	this.instance_3.setTransform(0,-240);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,200);

	this.instance_5 = new lib.shelf_mc();
	this.instance_5.setTransform(0,-90);

	this.instance_6 = new lib.shelf_mc();
	this.instance_6.setTransform(0,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:-50}}]}).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:-50}}]},1).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_1,p:{y:-240}},{t:this.instance,p:{y:-210}}]},1).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_1,p:{y:-240}},{t:this.instance,p:{y:-210}}]},1).to({state:[{t:this.instance_6},{t:this.instance_1,p:{y:-240}},{t:this.instance,p:{y:-210}},{t:this.instance_5},{t:this.instance_4,p:{y:120}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-260,560,480);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-280,-255,560,475), rect, rect];


(lib.closet1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(250,-140);
	this.shoes_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shoes_0).wait(6).to({_off:false},0).wait(1));

	// options
	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(120,-60);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(-110,-60);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(-110,-60);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(120,-60);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(120,-60);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(-110,-60);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(-130,-220);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(130,-220);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(0,-220);

	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(-110,-70);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(110,-70);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(0,-170);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(-150,-170);

	this.bottom_6 = new lib.bottom_6_1_mc();
	this.bottom_6.setTransform(150,-170);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(90,-220.9);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(-90,-220.9);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(-90,-70);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(90,-70);

	this.shoes_6 = new lib.shoes_6_1_mc();
	this.shoes_6.setTransform(140,75);

	this.shoes_5 = new lib.shoes_5_1_mc();
	this.shoes_5.setTransform(-140,75);

	this.shoes_4 = new lib.shoes_4_1_mc();
	this.shoes_4.setTransform(0,-73);

	this.shoes_3 = new lib.shoes_3_1_mc();
	this.shoes_3.setTransform(140,-73);

	this.shoes_2 = new lib.shoes_2_1_mc();
	this.shoes_2.setTransform(-140,-73);

	this.shoes_1 = new lib.shoes_1_1_mc();
	this.shoes_1.setTransform(0,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2}]}).to({state:[{t:this.hair_4},{t:this.hair_3}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.top_4},{t:this.top_6},{t:this.top_2},{t:this.top_3},{t:this.top_5}]},1).to({state:[{t:this.bottom_6},{t:this.bottom_3},{t:this.bottom_4}]},1).to({state:[{t:this.bottom_2},{t:this.bottom_1},{t:this.top_1},{t:this.bottom_5}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.shoes_5},{t:this.shoes_6}]},1).wait(1));

	// decor
	this.instance = new lib.rod_mc();
	this.instance.setTransform(0,-120);

	this.instance_1 = new lib.rod_mc();
	this.instance_1.setTransform(0,-150);

	this.instance_2 = new lib.rod_mc();
	this.instance_2.setTransform(0,-210);

	this.instance_3 = new lib.rod_mc();
	this.instance_3.setTransform(0,-240);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,200);

	this.instance_5 = new lib.shelf_mc();
	this.instance_5.setTransform(0,-60);

	this.instance_6 = new lib.shelf_mc();
	this.instance_6.setTransform(0,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_3},{t:this.instance_2,p:{y:-210}},{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:-120}}]}).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_3},{t:this.instance_2,p:{y:-210}},{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:-120}}]},1).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_3},{t:this.instance_2,p:{y:-210}},{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:-120}}]},1).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_2,p:{y:-240}},{t:this.instance_1,p:{y:-210}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_2,p:{y:-240}},{t:this.instance_1,p:{y:-210}},{t:this.instance,p:{y:-160}}]},1).to({state:[{t:this.instance_4,p:{y:200}},{t:this.instance_2,p:{y:-240}},{t:this.instance_1,p:{y:-210}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_6},{t:this.instance_1,p:{y:-240}},{t:this.instance,p:{y:-210}},{t:this.instance_5},{t:this.instance_4,p:{y:80}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-255,560,475);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-260,560,480);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-260,560,480);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-255,560,475);
p.frameBounds = [rect];


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


(lib.arrow_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// animation
	this.instance = new lib.title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:300.5,alpha:1},0).wait(28).to({y:-49.5},20).to({y:0.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-190,480,280);
p.frameBounds = [rect, rect=new cjs.Rectangle(-290,110,480,280), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-290,92.5,480,280), new cjs.Rectangle(-290,75,480,280), new cjs.Rectangle(-290,57.5,480,280), new cjs.Rectangle(-290,40,480,280), new cjs.Rectangle(-290,22.5,480,280), new cjs.Rectangle(-290,5,480,280), new cjs.Rectangle(-290,-12.5,480,280), new cjs.Rectangle(-290,-30,480,280), new cjs.Rectangle(-290,-47.5,480,280), new cjs.Rectangle(-290,-65,480,280), new cjs.Rectangle(-290,-82.5,480,280), new cjs.Rectangle(-290,-100,480,280), new cjs.Rectangle(-290,-117.5,480,280), new cjs.Rectangle(-290,-135,480,280), new cjs.Rectangle(-290,-152.5,480,280), new cjs.Rectangle(-290,-170,480,280), new cjs.Rectangle(-290,-187.5,480,280), new cjs.Rectangle(-290,-205,480,280), new cjs.Rectangle(-290,-222.5,480,280), new cjs.Rectangle(-290,-240,480,280), new cjs.Rectangle(-290,-230,480,280), new cjs.Rectangle(-290,-220,480,280), new cjs.Rectangle(-290,-210,480,280), new cjs.Rectangle(-290,-200,480,280), new cjs.Rectangle(-290,-190,480,280)];


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
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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


(lib.forward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.forward_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// animation
	this.animation_mc = new lib.animation_for_forward_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.02)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


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


(lib.quest_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// panel
	this.panel_mc = new lib.hint_find_panel_2_mc();
	this.panel_mc.setTransform(330,60);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// decor
	this.instance = new lib.bag2_mc();
	this.instance.setTransform(400,640);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// objects
	this.objects_mc = new lib.objects_find_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,0,802.4,801.5);
p.frameBounds = [rect];


(lib.quest_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// panel
	this.panel_mc = new lib.hint_find_panel_1_mc();
	this.panel_mc.setTransform(330,60);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// decor
	this.instance = new lib.sportbag_mc();
	this.instance.setTransform(185,510);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// objects
	this.objects_mc = new lib.objects_find_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,814.8,617.5);
p.frameBounds = [rect];


(lib.quest_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.forward_mc();
	this.next_mc.setTransform(130,180,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.next_mc).to({scaleX:1.05,scaleY:1.05},9).to({regX:0.1,regY:0.1,scaleX:0.47,scaleY:0.47,x:130.1,y:180.1,alpha:0.012},10).to({_off:true},1).wait(30));

	// text
	this.instance = new lib.q2_text1_mc();
	this.instance.setTransform(124.9,-25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},19).to({_off:true},1).wait(30));

	// animation
	this.instance_1 = new lib.hero_for_q2_mc();
	this.instance_1.setTransform(-175,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({x:-1000},30).wait(1));

	// objects
	this.instance_2 = new lib.it26_mc();
	this.instance_2.setTransform(-298,-99);

	this.instance_3 = new lib.it25_mc();
	this.instance_3.setTransform(52,-101);

	this.instance_4 = new lib.it24_mc();
	this.instance_4.setTransform(-273,122);

	this.instance_5 = new lib.it23_mc();
	this.instance_5.setTransform(212,93);

	this.instance_6 = new lib.it22_mc();
	this.instance_6.setTransform(-97,38);

	this.instance_7 = new lib.it21_mc();
	this.instance_7.setTransform(288,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-483.5,-242,883.4,544);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-511,-242,910.9,544), new cjs.Rectangle(-538.5,-242,938.4,544), new cjs.Rectangle(-566,-242,965.9,544), new cjs.Rectangle(-593.5,-242,993.4,544), new cjs.Rectangle(-621,-242,1020.9,544), new cjs.Rectangle(-648.5,-242,1048.4,544), new cjs.Rectangle(-676,-242,1075.9,544), new cjs.Rectangle(-703.5,-242,1103.4,544), new cjs.Rectangle(-731,-242,1130.9,544), new cjs.Rectangle(-758.5,-242,1158.4,544), new cjs.Rectangle(-786,-242,1185.9,544), new cjs.Rectangle(-813.5,-242,1213.4,544), new cjs.Rectangle(-841,-242,1240.9,544), new cjs.Rectangle(-868.5,-242,1268.4,544), new cjs.Rectangle(-896,-242,1295.9,544), new cjs.Rectangle(-923.5,-242,1323.4,544), new cjs.Rectangle(-951,-242,1350.9,544), new cjs.Rectangle(-978.5,-242,1378.4,544), new cjs.Rectangle(-1006,-242,1405.9,544), new cjs.Rectangle(-1033.5,-242,1433.4,544), new cjs.Rectangle(-1061,-242,1460.9,544), new cjs.Rectangle(-1088.5,-242,1488.4,544), new cjs.Rectangle(-1116,-242,1515.9,544), new cjs.Rectangle(-1143.5,-242,1543.4,544), new cjs.Rectangle(-1171,-242,1570.9,544), new cjs.Rectangle(-1198.5,-242,1598.4,544), new cjs.Rectangle(-1226,-242,1625.9,544), new cjs.Rectangle(-1253.5,-242,1653.4,544), new cjs.Rectangle(-1281,-242,1680.9,544), new cjs.Rectangle(-1308.5,-242,1708.4,544)];


(lib.quest_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.forward_mc();
	this.next_mc.setTransform(240,150,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.next_mc).to({regX:0.1,regY:0.2,scaleX:1.05,scaleY:1.05,x:240.1,y:150.2,alpha:0.629},3).to({regY:0.1,scaleX:0.47,scaleY:0.47,y:150.1,alpha:0.012},5).to({_off:true},1).wait(30));

	// text
	this.instance = new lib.quest1_text1_mc();
	this.instance.setTransform(-239,119);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_1 = new lib.comics1_hand0_mc();
	this.instance_1.setTransform(-124,44,1,1,0,0,0,29,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({x:-947},30).wait(1));

	// animation
	this.instance_2 = new lib.hero0_head0_mc();
	this.instance_2.setTransform(-15.5,-116.5,1,1,0,0,0,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({x:-838,y:-116},30).wait(1));

	// animation
	this.instance_3 = new lib.comics1_body0_mc();
	this.instance_3.setTransform(30,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({x:-793},30).wait(1));

	// animation
	this.instance_4 = new lib.comics1_hair0_mc();
	this.instance_4.setTransform(-13,-231,1,1,0,0,0,3,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({x:-836},30).wait(1));

	// animation
	this.instance_5 = new lib.comics1_chair_mc();
	this.instance_5.setTransform(-1,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({x:-824},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-379,-280.1,699,580.6);
p.frameBounds = [rect, new cjs.Rectangle(-379,-280.1,705.7,580.6), new cjs.Rectangle(-379,-280.1,712.4,580.6), new cjs.Rectangle(-379,-280.1,719.1,580.6), new cjs.Rectangle(-379,-280.1,708,580.6), new cjs.Rectangle(-379,-280.1,697.1,580.6), new cjs.Rectangle(-379,-280.1,686,580.6), new cjs.Rectangle(-379,-280.1,675,580.6), new cjs.Rectangle(-379,-280.1,664,580.6), new cjs.Rectangle(-230.4,-280,392.5,580.5), new cjs.Rectangle(-257.8,-280,392.5,580.5), new cjs.Rectangle(-285.3,-280,392.5,580.5), new cjs.Rectangle(-312.7,-280,392.5,580.5), new cjs.Rectangle(-340.1,-279.9,392.5,580.4), new cjs.Rectangle(-367.6,-279.9,392.5,580.4), new cjs.Rectangle(-395,-279.9,392.5,580.3), new cjs.Rectangle(-422.4,-279.9,392.5,580.3), new cjs.Rectangle(-449.9,-279.9,392.5,580.3), new cjs.Rectangle(-477.3,-279.8,392.5,580.3), new cjs.Rectangle(-504.7,-279.8,392.5,580.3), new cjs.Rectangle(-532.2,-279.8,392.5,580.3), new cjs.Rectangle(-559.6,-279.8,392.5,580.3), new cjs.Rectangle(-587,-279.8,392.5,580.3), new cjs.Rectangle(-614.5,-279.7,392.5,580.2), new cjs.Rectangle(-641.9,-279.7,392.5,580.3), new cjs.Rectangle(-669.3,-279.7,392.5,580.3), new cjs.Rectangle(-696.8,-279.7,392.5,580.2), new cjs.Rectangle(-724.2,-279.7,392.5,580.2), new cjs.Rectangle(-751.6,-279.7,392.5,580.2), new cjs.Rectangle(-779.1,-279.6,392.5,580.2), new cjs.Rectangle(-806.5,-279.6,392.5,580.2), new cjs.Rectangle(-833.9,-279.6,392.5,580.2), new cjs.Rectangle(-861.4,-279.6,392.5,580.1), new cjs.Rectangle(-888.8,-279.6,392.5,580.1), new cjs.Rectangle(-916.2,-279.5,392.5,580.1), new cjs.Rectangle(-943.7,-279.5,392.5,580.1), new cjs.Rectangle(-971.1,-279.5,392.5,580.1), new cjs.Rectangle(-998.5,-279.5,392.5,580), new cjs.Rectangle(-1026,-279.5,392.5,580.1)];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.forward_mc();
	this.next_mc.setTransform(130,180.1,0.474,0.474,0,0,0,0.1,0.1);
	this.next_mc.alpha = 0.012;
	this.next_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_mc).wait(69).to({_off:false},0).to({regX:0,regY:0,scaleX:0.95,scaleY:0.95,y:180,alpha:1},10).to({scaleX:0.84,scaleY:0.84},9).wait(1));

	// text
	this.instance = new lib.q2_text1_mc();
	this.instance.setTransform(124.9,-25.6);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({alpha:1},19).wait(41));

	// animation
	this.instance_1 = new lib.hero_for_q2_mc();
	this.instance_1.setTransform(-1000,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-175},29).wait(60));

	// objects
	this.instance_2 = new lib.it26_mc();
	this.instance_2.setTransform(-298,-99);

	this.instance_3 = new lib.it25_mc();
	this.instance_3.setTransform(52,-101);

	this.instance_4 = new lib.it24_mc();
	this.instance_4.setTransform(-273,122);

	this.instance_5 = new lib.it23_mc();
	this.instance_5.setTransform(212,93);

	this.instance_6 = new lib.it22_mc();
	this.instance_6.setTransform(-97,38);

	this.instance_7 = new lib.it21_mc();
	this.instance_7.setTransform(288,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1308.5,-242,1708.4,544);
p.frameBounds = [rect, new cjs.Rectangle(-1280,-242,1679.9,544), new cjs.Rectangle(-1251.6,-242,1651.5,544), new cjs.Rectangle(-1223.1,-242,1623,544), new cjs.Rectangle(-1194.7,-242,1594.6,544), new cjs.Rectangle(-1166.2,-242,1566.1,544), new cjs.Rectangle(-1137.8,-242,1537.7,544), new cjs.Rectangle(-1109.3,-242,1509.2,544), new cjs.Rectangle(-1080.9,-242,1480.8,544), new cjs.Rectangle(-1052.4,-242,1452.3,544), new cjs.Rectangle(-1024,-242,1423.9,544), new cjs.Rectangle(-995.5,-242,1395.4,544), new cjs.Rectangle(-967.1,-242,1367,544), new cjs.Rectangle(-938.7,-242,1338.6,544), new cjs.Rectangle(-910.2,-242,1310.1,544), new cjs.Rectangle(-881.7,-242,1281.6,544), new cjs.Rectangle(-853.3,-242,1253.2,544), new cjs.Rectangle(-824.8,-242,1224.7,544), new cjs.Rectangle(-796.4,-242,1196.3,544), new cjs.Rectangle(-768,-242,1167.9,544), new cjs.Rectangle(-739.5,-242,1139.4,544), new cjs.Rectangle(-711.1,-242,1111,544), new cjs.Rectangle(-682.6,-242,1082.5,544), new cjs.Rectangle(-654.2,-242,1054.1,544), new cjs.Rectangle(-625.7,-242,1025.6,544), new cjs.Rectangle(-597.3,-242,997.2,544), new cjs.Rectangle(-568.8,-242,968.7,544), new cjs.Rectangle(-540.4,-242,940.3,544), new cjs.Rectangle(-511.9,-242,911.8,544), rect=new cjs.Rectangle(-483.5,-242,883.4,544), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.forward_mc();
	this.next_mc.setTransform(240.1,150.1,0.474,0.474,0,0,0,0.1,0.1);
	this.next_mc.alpha = 0.012;
	this.next_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.next_mc).wait(54).to({_off:false},0).to({regX:0,regY:0,scaleX:0.95,scaleY:0.95,x:240,y:150,alpha:1},17).to({scaleX:0.84,scaleY:0.84},8).wait(1));

	// text
	this.instance = new lib.quest1_text1_mc();
	this.instance.setTransform(-239,119);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({alpha:1},25).wait(26));

	// animation
	this.instance_1 = new lib.comics1_hand0_mc();
	this.instance_1.setTransform(-947,44,1,1,0,0,0,29,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-124},28).to({rotation:-23.2,y:43.9},25).to({rotation:0,y:44},25).wait(1));

	// animation
	this.instance_2 = new lib.hero0_head0_mc();
	this.instance_2.setTransform(-838,-116,1,1,0,0,0,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-15.5,y:-116.5},28).to({rotation:4.7},25).to({rotation:0},25).wait(1));

	// animation
	this.instance_3 = new lib.comics1_body0_mc();
	this.instance_3.setTransform(-793,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:30},28).wait(51));

	// animation
	this.instance_4 = new lib.comics1_hair0_mc();
	this.instance_4.setTransform(-836,-231,1,1,0,0,0,3,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-13},28).to({rotation:0.9,x:-3.6,y:-230.4},25).to({rotation:0,x:-13,y:-231},25).wait(1));

	// animation
	this.instance_5 = new lib.comics1_chair_mc();
	this.instance_5.setTransform(-824,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:-1},28).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1026,-279.5,392.5,580.1);
p.frameBounds = [rect, rect, new cjs.Rectangle(-996.6,-279.5,392.5,580), new cjs.Rectangle(-967.2,-279.5,392.5,580.1), new cjs.Rectangle(-937.8,-279.5,392.5,580.1), new cjs.Rectangle(-908.4,-279.6,392.5,580.1), new cjs.Rectangle(-879,-279.6,392.5,580.1), new cjs.Rectangle(-849.6,-279.6,392.5,580.1), new cjs.Rectangle(-820.2,-279.6,392.5,580.2), new cjs.Rectangle(-790.8,-279.6,392.5,580.2), new cjs.Rectangle(-761.4,-279.7,392.5,580.2), new cjs.Rectangle(-732,-279.7,392.5,580.2), new cjs.Rectangle(-702.7,-279.7,392.5,580.2), new cjs.Rectangle(-673.3,-279.7,392.5,580.3), new cjs.Rectangle(-643.9,-279.7,392.5,580.3), new cjs.Rectangle(-614.5,-279.7,392.5,580.2), new cjs.Rectangle(-585.1,-279.8,392.5,580.3), new cjs.Rectangle(-555.7,-279.8,392.5,580.3), new cjs.Rectangle(-526.3,-279.8,392.5,580.3), new cjs.Rectangle(-496.9,-279.8,392.5,580.3), new cjs.Rectangle(-467.5,-279.8,392.5,580.3), new cjs.Rectangle(-438.1,-279.9,392.5,580.3), new cjs.Rectangle(-408.7,-279.9,392.5,580.3), new cjs.Rectangle(-379.3,-279.9,392.5,580.4), new cjs.Rectangle(-349.9,-279.9,392.5,580.4), new cjs.Rectangle(-320.5,-279.9,392.5,580.4), new cjs.Rectangle(-291.2,-280,392.5,580.5), new cjs.Rectangle(-261.8,-280,392.5,580.5), new cjs.Rectangle(-232.4,-280,392.5,580.5), rect=new cjs.Rectangle(-379,-280.1,568.5,580.6), rect, new cjs.Rectangle(-379,-280.3,568.5,580.8), new cjs.Rectangle(-379,-280.6,568.5,581.1), new cjs.Rectangle(-379,-280.8,568.5,581.3), new cjs.Rectangle(-379,-280.9,568.5,581.4), new cjs.Rectangle(-379,-281.1,568.5,581.6), new cjs.Rectangle(-379,-281.4,568.5,581.8), new cjs.Rectangle(-379,-281.6,568.5,582.1), new cjs.Rectangle(-379,-281.7,568.5,582.2), new cjs.Rectangle(-379,-281.9,568.5,582.3), new cjs.Rectangle(-379,-282.1,568.5,582.6), new cjs.Rectangle(-379,-282.4,568.5,582.8), new cjs.Rectangle(-379,-282.4,568.5,582.9), new cjs.Rectangle(-379,-282.7,568.5,583.2), new cjs.Rectangle(-379,-282.9,568.5,583.4), rect=new cjs.Rectangle(-379,-283.2,568.5,583.7), rect, new cjs.Rectangle(-379,-283.4,568.5,583.9), new cjs.Rectangle(-379,-283.6,568.5,584.1), new cjs.Rectangle(-379,-283.9,568.5,584.3), new cjs.Rectangle(-379,-283.9,568.5,584.4), new cjs.Rectangle(-379,-284.1,568.5,584.6), new cjs.Rectangle(-379,-284.3,568.5,584.8), new cjs.Rectangle(-379,-284.6,568.5,585.1), new cjs.Rectangle(-379,-284.8,664,585.3), new cjs.Rectangle(-379,-284.6,666.7,585.1), new cjs.Rectangle(-379,-284.3,669.3,584.8), new cjs.Rectangle(-379,-284.2,671.9,584.7), new cjs.Rectangle(-379,-283.9,674.6,584.4), new cjs.Rectangle(-379,-283.9,677.2,584.3), new cjs.Rectangle(-379,-283.7,679.9,584.2), new cjs.Rectangle(-379,-283.4,682.5,583.9), new cjs.Rectangle(-379,-283.2,685.1,583.7), new cjs.Rectangle(-379,-283.2,687.8,583.7), new cjs.Rectangle(-379,-282.9,690.4,583.4), new cjs.Rectangle(-379,-282.7,693.1,583.2), new cjs.Rectangle(-379,-282.5,695.7,583), new cjs.Rectangle(-379,-282.4,698.3,582.9), new cjs.Rectangle(-379,-282.2,700.9,582.7), new cjs.Rectangle(-379,-281.9,703.6,582.4), new cjs.Rectangle(-379,-281.7,706.3,582.2), new cjs.Rectangle(-379,-281.6,709,582.1), new cjs.Rectangle(-379,-281.4,707.8,581.8), new cjs.Rectangle(-379,-281.1,706.5,581.6), new cjs.Rectangle(-379,-280.9,705.2,581.3), new cjs.Rectangle(-379,-280.8,704,581.3), new cjs.Rectangle(-379,-280.6,702.8,581.1), new cjs.Rectangle(-379,-280.3,701.5,580.8), new cjs.Rectangle(-379,-280.1,700.3,580.6), new cjs.Rectangle(-379,-280.1,699,580.6)];


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
p.nominalBounds = rect = new cjs.Rectangle(-270,-445,540,2200);
p.frameBounds = [rect, rect=new cjs.Rectangle(-270,-770,540,2200), rect, rect, rect, rect, rect];


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


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110,220);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110,220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-550,560,1024);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110,220);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110,220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-550,560,1024);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110,220);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110,220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-550,560,1024);
p.frameBounds = [rect];


(lib.comics_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_1_mc = new lib.comics_1_mc();
	this.frame_1_mc.setTransform(400,300);

	this.frame_2_mc = new lib.comics_2_mc();
	this.frame_2_mc.setTransform(400,300);

	this.frame_3_mc = new lib.comics_3_mc();
	this.frame_3_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-621,20.5,392.5,580.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(21,19.9,734,580.6), rect];


(lib.CartoonScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.forward_mc();
	this.next_mc.setTransform(400,520,0.842,0.842);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.comics_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-621,-280.8,1621,1261.9);
p.frameBounds = [rect];


(lib.arrow_checks_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,-250,585.5,1144.5);
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
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
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
	this.photo_btn.setTransform(700,500);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(680,320);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(120,320);

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

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
p.frameBounds = [rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.arrow_checks_mc();
	this.object_1.setTransform(400,300);

	this.object_2 = new lib.object_2_6_mc();
	this.object_2.setTransform(530,480);

	this.frame_3_mc = new lib.quest_3_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.quest_1_6_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.quest_2_6_mc();
	this.subject_2.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-908.5,-329.4,1708.4,1523.9);
p.frameBounds = [rect, new cjs.Rectangle(-83.5,-329.4,883.4,931.4), new cjs.Rectangle(-2.5,-329.4,802.4,1130.9)];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(145,470,1,1,0,-45,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{skewX:-45,skewY:135,x:145,y:470,rotation:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:240,y:485,rotation:45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:373,y:243,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:482,y:504,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:607,y:455,rotation:45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:686,y:497,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_4_mc();
	this.object_1.setTransform(126,505);

	this.object_2 = new lib.arrow_1_4_mc();
	this.object_2.setTransform(420,335,0.858,0.858,45);

	this.object_3 = new lib.object_3_4_mc();
	this.object_3.setTransform(322,515);

	this.object_4 = new lib.object_4_4_mc();
	this.object_4.setTransform(403,240);

	this.object_5 = new lib.arrow_2_4_mc();
	this.object_5.setTransform(348,225,0.82,0.82,-45);

	this.object_6 = new lib.arrow_3_4_mc();
	this.object_6.setTransform(330,220,0.793,0.793);

	this.object_7 = new lib.object_7_4_mc();
	this.object_7.setTransform(515,475);

	this.object_8 = new lib.arrow_4_4_mc();
	this.object_8.setTransform(310,225.1,0.813,0.813,-120,0,0,-0.1,-0.1);

	this.object_9 = new lib.object_9_4_mc();
	this.object_9.setTransform(615,468);

	this.object_10 = new lib.arrow_5_4_mc();
	this.object_10.setTransform(305.1,235.1,0.813,0.813,0,-45,135,0,0.1);

	this.object_11 = new lib.object_11_4_mc();
	this.object_11.setTransform(695,480);

	this.object_12 = new lib.arrow_6_4_mc();
	this.object_12.setTransform(415.1,345,0.899,0.899,15,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.makeup2_2_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.makeup2_4_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.makeup2_6_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.makeup2_8_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.makeup2_10_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.makeup2_12_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.makeup2_14_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.makeup2_16_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.makeup2_18_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.makeup2_20_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.makeup2_22_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.makeup2_24_mc();
	this.subject_12.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.9,-329.4,1055,930.4);
p.frameBounds = [rect, new cjs.Rectangle(0,-329.4,800,930.4), new cjs.Rectangle(0,-329.4,800,1032.4), rect=new cjs.Rectangle(0,-329.4,800,930.4), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.arrow_checks_mc();
	this.object_1.setTransform(400,300);

	this.object_2 = new lib.object_2_2_mc();
	this.object_2.setTransform(640,450);

	this.frame_3_mc = new lib.quest_3_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.quest_1_2_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.quest_2_2_mc();
	this.subject_2.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-626,-329.4,1196,1523.9);
p.frameBounds = [rect, new cjs.Rectangle(21,-329.4,739,929.9), new cjs.Rectangle(0,-329.4,814.8,946.9)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(208,531,1,1,0,-45,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:-45,skewY:135,x:208,y:531,rotation:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{regX:-0.1,regY:0.1,skewX:30,skewY:-150,x:285.1,y:130.2,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:427,y:558,rotation:60}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:600,y:530,rotation:45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:305,y:270,rotation:-30}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:-60,skewY:120,x:163,y:460,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:615,y:430,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:362,y:486,rotation:45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:-15,skewY:165,x:200,y:430,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:285,y:555,rotation:45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:480,y:485,rotation:-15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,regY:0,skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:560}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:402,y:280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:540}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:402,y:280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_1_mc();
	this.object_1.setTransform(182,552);

	this.object_2 = new lib.object_2_1_mc();
	this.object_2.setTransform(405,215);

	this.object_3 = new lib.object_3_1_mc();
	this.object_3.setTransform(418,555);

	this.object_4 = new lib.arrow_1_1_mc();
	this.object_4.setTransform(405,315,0.778,0.778,90);

	this.object_5 = new lib.object_5_1_mc();
	this.object_5.setTransform(638,550);

	this.object_6 = new lib.object_6_1_mc();
	this.object_6.setTransform(404,250);

	this.object_7 = new lib.object_7_1_mc();
	this.object_7.setTransform(165,525);

	this.object_8 = new lib.object_8_1_mc();
	this.object_8.setTransform(403,260);

	this.object_9 = new lib.object_9_1_mc();
	this.object_9.setTransform(639,460);

	this.object_10 = new lib.arrow_2_1_mc();
	this.object_10.setTransform(415,225);

	this.object_11 = new lib.object_11_1_mc();
	this.object_11.setTransform(425,530);

	this.object_12 = new lib.object_12_1_mc();
	this.object_12.setTransform(404,260);

	this.object_13 = new lib.object_13_1_mc();
	this.object_13.setTransform(177,447);

	this.object_14 = new lib.arrow_3_1_mc();
	this.object_14.setTransform(415,235);

	this.object_15 = new lib.object_15_1_mc();
	this.object_15.setTransform(287,557);

	this.object_16 = new lib.arrow_4_1_mc();
	this.object_16.setTransform(350.1,220.1,0.813,0.813,45,0,0,0.1,0);

	this.object_17 = new lib.arrow_5_1_mc();
	this.object_17.setTransform(455.1,220.1,0.813,0.813,0,-45,135,0,0.1);

	this.object_18 = new lib.object_18_1_mc();
	this.object_18.setTransform(517,473);

	this.object_19 = new lib.arrow_6_1_mc();
	this.object_19.setTransform(425,375,0.966,0.966,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).to({state:[{t:this.object_18}]},1).to({state:[{t:this.object_19}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.makeup1_2_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.makeup1_4_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.makeup1_6_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.makeup1_6_2_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.makeup1_8_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.makeup1_8_2_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.makeup1_10_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.makeup1_10_2_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.makeup1_12_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.makeup1_14_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.makeup1_16_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.makeup1_16_2_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.makeup1_18_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.makeup1_20_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.makeup1_22_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.makeup1_24_mc();
	this.subject_16.setTransform(400,300);

	this.subject_17 = new lib.makeup1_26_mc();
	this.subject_17.setTransform(400,300);

	this.subject_18 = new lib.makeup1_28_mc();
	this.subject_18.setTransform(400,300);

	this.subject_19 = new lib.makeup1_30_mc();
	this.subject_19.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-329.4,800,986.4);
p.frameBounds = [rect, new cjs.Rectangle(0,-329.4,800,930.4), new cjs.Rectangle(0,-329.4,800,944.4), new cjs.Rectangle(0,-329.4,800,930.4), new cjs.Rectangle(0,-329.4,800,959.4), new cjs.Rectangle(0,-329.4,800,930.4), new cjs.Rectangle(0,-329.4,800,1093.9), new cjs.Rectangle(0,-139,800,740), rect=new cjs.Rectangle(0,-329.4,800,930.4), rect, new cjs.Rectangle(0,-329.4,800,1079.4), new cjs.Rectangle(0,-139,800,740), rect=new cjs.Rectangle(0,-329.4,800,930.4), rect, new cjs.Rectangle(0,-329.4,800,974.7), rect=new cjs.Rectangle(0,-329.4,800,930.4), rect, new cjs.Rectangle(0,-329.4,800,932.4), new cjs.Rectangle(0,-329.4,800,930.4)];


(lib.quest_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":159});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(280,520,0.875,0.875);
	this.next_btn.alpha = 0.012;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700,alpha:1},0).wait(48).to({y:520},10).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:280.1,y:520.1},5).to({regX:0,regY:0,scaleX:0.88,scaleY:0.88,x:280,y:520},5).wait(1).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:280.1,y:520.1},4).to({regX:0,regY:0,scaleX:0.88,scaleY:0.88,x:280,y:520},5).to({y:700},10).wait(71));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(280,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-500},0).wait(23).to({x:280},25).wait(40).to({x:-500},20).wait(51));

	// hero
	this.hero_3 = new lib.hero_red_carpet_mc();
	this.hero_3.setTransform(660,355);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({x:1200},0).wait(23).to({x:610},25).to({x:660},5).wait(35).to({x:410},20).wait(51));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(89).to({_off:false},0).wait(71));

	// shadow
	this.instance = new lib.background_1_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({alpha:1},20).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-250,781.5,1024);
p.frameBounds = [rect, new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-780,-250,2101.5,1028.7), new cjs.Rectangle(-780,-250,2101.5,1028.8), new cjs.Rectangle(-748.8,-250,2046.7,1028.7), new cjs.Rectangle(-717.6,-250,1991.9,1028.8), new cjs.Rectangle(-686.4,-250,1937.1,1028.7), new cjs.Rectangle(-655.2,-250,1882.3,1028.8), new cjs.Rectangle(-624,-250,1827.5,1028.7), new cjs.Rectangle(-592.8,-250,1772.7,1028.8), new cjs.Rectangle(-561.6,-250,1717.9,1028.7), new cjs.Rectangle(-530.4,-250,1663.1,1028.8), new cjs.Rectangle(-499.2,-250,1608.3,1028.7), new cjs.Rectangle(-468,-250,1553.5,1028.8), new cjs.Rectangle(-436.8,-250,1498.7,1028.7), new cjs.Rectangle(-405.6,-250,1443.9,1028.8), new cjs.Rectangle(-374.4,-250,1389.1,1028.7), new cjs.Rectangle(-343.2,-250,1334.3,1028.8), new cjs.Rectangle(-312,-250,1279.5,1028.7), new cjs.Rectangle(-280.8,-250,1224.7,1028.8), new cjs.Rectangle(-249.6,-250,1169.9,1028.7), new cjs.Rectangle(-218.4,-250,1115.1,1028.8), new cjs.Rectangle(-187.2,-250,1060.3,1028.7), new cjs.Rectangle(-156,-250,1005.5,1028.8), new cjs.Rectangle(-124.8,-250,950.7,1028.7), new cjs.Rectangle(-93.6,-250,895.9,1028.8), new cjs.Rectangle(-62.4,-250,841.1,1028.7), new cjs.Rectangle(-31.2,-250,786.3,1028.8), new cjs.Rectangle(0,-250,731.5,1028.7), new cjs.Rectangle(0,-250,741.5,1024), new cjs.Rectangle(0,-250,751.5,1024), new cjs.Rectangle(0,-250,761.5,1024), new cjs.Rectangle(0,-250,771.5,1024), rect=new cjs.Rectangle(0,-250,781.5,1024), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-387,1200,1165.7), new cjs.Rectangle(-200,-387,1200,1165.8), new cjs.Rectangle(-200,-387,1200,1165.7), new cjs.Rectangle(-200,-387,1200,1165.8), new cjs.Rectangle(-200,-387,1200,1165.7), new cjs.Rectangle(-200,-387,1200,1165.8), new cjs.Rectangle(-234,-387,1234,1165.7), new cjs.Rectangle(-273,-387,1273,1165.8), new cjs.Rectangle(-312,-387,1312,1165.7), new cjs.Rectangle(-351,-387,1351,1165.8), new cjs.Rectangle(-390,-387,1390,1165.7), new cjs.Rectangle(-429,-387,1429,1165.8), new cjs.Rectangle(-468,-387,1468,1165.7), new cjs.Rectangle(-507,-387,1507,1165.8), new cjs.Rectangle(-546,-387,1546,1165.7), new cjs.Rectangle(-585,-387,1585,1165.8), new cjs.Rectangle(-624,-387,1624,1165.7), new cjs.Rectangle(-663,-387,1663,1165.8), new cjs.Rectangle(-702,-387,1702,1165.7), new cjs.Rectangle(-741,-387,1741,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7)];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":159});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(280,520,0.875,0.875);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({y:520},10).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:280.1,y:520.1},5).to({regX:0,regY:0,scaleX:0.88,scaleY:0.88,x:280,y:520},5).wait(1).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:280.1,y:520.1},4).to({regX:0,regY:0,scaleX:0.88,scaleY:0.88,x:280,y:520},5).to({y:700},10).wait(71));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_mc.setTransform(280,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-500},0).wait(23).to({x:280},25).wait(40).to({x:-500},20).wait(51));

	// hero
	this.hero_2 = new lib.hero_cinema_mc();
	this.hero_2.setTransform(670,355);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1200},0).wait(23).to({x:620},25).to({x:670},5).wait(35).to({x:410},20).wait(51));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(89).to({_off:false},0).wait(71));

	// shadow
	this.instance = new lib.background_7_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({alpha:1},20).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-250,760,1024);
p.frameBounds = [rect, new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-780,-250,2070,1028.7), new cjs.Rectangle(-780,-250,2070,1028.8), new cjs.Rectangle(-748.8,-250,2015.6,1028.7), new cjs.Rectangle(-717.6,-250,1961.2,1028.8), new cjs.Rectangle(-686.4,-250,1906.8,1028.7), new cjs.Rectangle(-655.2,-250,1852.4,1028.8), new cjs.Rectangle(-624,-250,1798,1028.7), new cjs.Rectangle(-592.8,-250,1743.6,1028.8), new cjs.Rectangle(-561.6,-250,1689.2,1028.7), new cjs.Rectangle(-530.4,-250,1634.8,1028.8), new cjs.Rectangle(-499.2,-250,1580.4,1028.7), new cjs.Rectangle(-468,-250,1526,1028.8), new cjs.Rectangle(-436.8,-250,1471.6,1028.7), new cjs.Rectangle(-405.6,-250,1417.2,1028.8), new cjs.Rectangle(-374.4,-250,1362.8,1028.7), new cjs.Rectangle(-343.2,-250,1308.4,1028.8), new cjs.Rectangle(-312,-250,1254,1028.7), new cjs.Rectangle(-280.8,-250,1199.6,1028.8), new cjs.Rectangle(-249.6,-250,1145.2,1028.7), new cjs.Rectangle(-218.4,-250,1090.8,1028.8), new cjs.Rectangle(-187.2,-250,1036.4,1028.7), new cjs.Rectangle(-156,-250,982,1028.8), new cjs.Rectangle(-124.8,-250,927.6,1028.7), new cjs.Rectangle(-93.6,-250,873.2,1028.8), new cjs.Rectangle(-62.4,-250,818.8,1028.7), new cjs.Rectangle(-31.2,-250,764.4,1028.8), new cjs.Rectangle(0,-250,710,1028.7), new cjs.Rectangle(0,-250,720,1024), new cjs.Rectangle(0,-250,730,1024), new cjs.Rectangle(0,-250,740,1024), new cjs.Rectangle(0,-250,750,1024), rect=new cjs.Rectangle(0,-250,760,1024), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-387,1200,1165.7), new cjs.Rectangle(-200,-387,1200,1165.8), new cjs.Rectangle(-200,-387,1200,1165.7), new cjs.Rectangle(-200,-387,1200,1165.8), new cjs.Rectangle(-200,-387,1200,1165.7), new cjs.Rectangle(-200,-387,1200,1165.8), new cjs.Rectangle(-234,-387,1234,1165.7), new cjs.Rectangle(-273,-387,1273,1165.8), new cjs.Rectangle(-312,-387,1312,1165.7), new cjs.Rectangle(-351,-387,1351,1165.8), new cjs.Rectangle(-390,-387,1390,1165.7), new cjs.Rectangle(-429,-387,1429,1165.8), new cjs.Rectangle(-468,-387,1468,1165.7), new cjs.Rectangle(-507,-387,1507,1165.8), new cjs.Rectangle(-546,-387,1546,1165.7), new cjs.Rectangle(-585,-387,1585,1165.8), new cjs.Rectangle(-624,-387,1624,1165.7), new cjs.Rectangle(-663,-387,1663,1165.8), new cjs.Rectangle(-702,-387,1702,1165.7), new cjs.Rectangle(-741,-387,1741,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7)];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":159});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(280,520,0.875,0.875);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({y:520},10).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:280.1,y:520.1},5).to({regX:0,regY:0,scaleX:0.88,scaleY:0.88,x:280,y:520},5).wait(1).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:280.1,y:520.1},4).to({regX:0,regY:0,scaleX:0.88,scaleY:0.88,x:280,y:520},5).to({y:700},10).wait(71));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_mc.setTransform(280,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-500},0).wait(23).to({x:280},25).wait(40).to({x:-500},20).wait(51));

	// hero
	this.hero_1 = new lib.hero_sport_mc();
	this.hero_1.setTransform(655,345);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1200},0).wait(23).to({x:600},25).to({x:655},5).wait(35).to({x:400},20).wait(51));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(89).to({_off:false},0).wait(71));

	// shadow
	this.instance = new lib.background_6_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({alpha:1},20).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-250,822.1,1024);
p.frameBounds = [rect, new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-780,-250,2147.1,1028.7), new cjs.Rectangle(-780,-250,2147.1,1028.8), new cjs.Rectangle(-748.8,-250,2091.9,1028.7), new cjs.Rectangle(-717.6,-250,2036.7,1028.8), new cjs.Rectangle(-686.4,-250,1981.5,1028.7), new cjs.Rectangle(-655.2,-250,1926.3,1028.8), new cjs.Rectangle(-624,-250,1871.1,1028.7), new cjs.Rectangle(-592.8,-250,1815.9,1028.8), new cjs.Rectangle(-561.6,-250,1760.7,1028.7), new cjs.Rectangle(-530.4,-250,1705.5,1028.8), new cjs.Rectangle(-499.2,-250,1650.3,1028.7), new cjs.Rectangle(-468,-250,1595.1,1028.8), new cjs.Rectangle(-436.8,-250,1539.9,1028.7), new cjs.Rectangle(-405.6,-250,1484.7,1028.8), new cjs.Rectangle(-374.4,-250,1429.5,1028.7), new cjs.Rectangle(-343.2,-250,1374.3,1028.8), new cjs.Rectangle(-312,-250,1319.1,1028.7), new cjs.Rectangle(-280.8,-250,1263.9,1028.8), new cjs.Rectangle(-249.6,-250,1208.7,1028.7), new cjs.Rectangle(-218.4,-250,1153.5,1028.8), new cjs.Rectangle(-187.2,-250,1098.3,1028.7), new cjs.Rectangle(-156,-250,1043.1,1028.8), new cjs.Rectangle(-124.8,-250,987.9,1028.7), new cjs.Rectangle(-93.6,-250,932.7,1028.8), new cjs.Rectangle(-62.4,-250,877.5,1028.7), new cjs.Rectangle(-31.2,-250,822.3,1028.8), new cjs.Rectangle(0,-250,767.1,1028.7), new cjs.Rectangle(0,-250,778.1,1024), new cjs.Rectangle(0,-250,789.1,1024), new cjs.Rectangle(0,-250,800.1,1024), new cjs.Rectangle(0,-250,811.1,1024), rect=new cjs.Rectangle(0,-250,822.1,1024), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-387,1200,1165.7), new cjs.Rectangle(-200,-387,1200,1165.8), new cjs.Rectangle(-200,-387,1200,1165.7), new cjs.Rectangle(-200,-387,1200,1165.8), new cjs.Rectangle(-200,-387,1200,1165.7), new cjs.Rectangle(-200,-387,1200,1165.8), new cjs.Rectangle(-234,-387,1234,1165.7), new cjs.Rectangle(-273,-387,1273,1165.8), new cjs.Rectangle(-312,-387,1312,1165.7), new cjs.Rectangle(-351,-387,1351,1165.8), new cjs.Rectangle(-390,-387,1390,1165.7), new cjs.Rectangle(-429,-387,1429,1165.8), new cjs.Rectangle(-468,-387,1468,1165.7), new cjs.Rectangle(-507,-387,1507,1165.8), new cjs.Rectangle(-546,-387,1546,1165.7), new cjs.Rectangle(-585,-387,1585,1165.8), new cjs.Rectangle(-624,-387,1624,1165.7), new cjs.Rectangle(-663,-387,1663,1165.8), new cjs.Rectangle(-702,-387,1702,1165.7), new cjs.Rectangle(-741,-387,1741,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7), new cjs.Rectangle(-780,-387,1780,1165.8), new cjs.Rectangle(-780,-387,1780,1165.7)];


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
	this.instance = new lib.background_8_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-908.5,-329.4,1908.5,1523.9);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
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
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-626,-329.4,1626,1523.9);
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
	this.instance.setTransform(350,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-130,800,730);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(110,40,0.909,0.909);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(50,700,0.727,0.727);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.instance}]}).wait(1));

	// title
	this.instance_1 = new lib.animation_title_mc();
	this.instance_1.setTransform(280,510);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.lower_shadow_mc();
	this.instance_2.setTransform(-200,400);
	this.instance_2.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// heroes
	this.instance_3 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(400,200,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_4 = new lib.background_1_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1684.2,1281.9);
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
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,450,1,0.75);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,2335.9);
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
p.nominalBounds = rect = new cjs.Rectangle(0,-329.4,781.5,1103.4);
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
p.nominalBounds = rect = new cjs.Rectangle(0,-329.4,760,1103.4);
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
	this.frame_1_mc.setTransform(-0.3,0,1,1,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-329.4,822.1,1103.4);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_9_img();
	this.instance.setTransform(-200,0);

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
	this.instance = new lib.background_9_img();
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_9_img();
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

	this.instance_3 = new lib.CartoonScreen();

	this.instance_4 = new lib.SelectionScreen();

	this.instance_5 = new lib.LocationScreen_1();

	this.instance_6 = new lib.LocationScreen_2();

	this.instance_7 = new lib.LocationScreen_3();

	this.instance_8 = new lib.LocationScreen_4();

	this.instance_9 = new lib.LocationScreen_5();

	this.instance_10 = new lib.LocationScreen_6();

	this.instance_11 = new lib.LocationScreen_7();

	this.instance_12 = new lib.RedirectScreen();

	this.instance_13 = new lib.ResultScreen();

	this.instance_14 = new lib.InstructionScreen();

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_18},{t:this.instance_17},{t:this.gravity_explosion_comp},{t:this.instance_16},{t:this.instance_15},{t:this.next_btn}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1684.2,1281.9), new cjs.Rectangle(-621,-280.8,1621,1261.9), new cjs.Rectangle(-262.6,-280.8,1262.7,2335.9), new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), new cjs.Rectangle(-626,-329.4,1626,1523.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), rect, rect, new cjs.Rectangle(-908.5,-329.4,1908.5,1523.9), new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(0,-10,810,440), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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