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
		{src:"library/images/storage_atlas_15.png", id:"storage_atlas_15"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,816,638],[0,640,735,608]]},
		{name:"storage_atlas_5", frames: [[629,0,580,580],[0,0,627,578],[0,582,479,576]]},
		{name:"storage_atlas_6", frames: [[0,202,548,375],[550,202,418,482],[0,0,1200,200],[302,686,640,280],[302,968,640,280],[0,579,300,600]]},
		{name:"storage_atlas_7", frames: [[0,0,420,420],[422,0,420,420],[680,775,500,300],[335,422,343,456],[844,389,408,384],[844,0,405,387],[0,422,333,470],[0,894,500,280]]},
		{name:"storage_atlas_8", frames: [[757,424,331,365],[0,960,405,303],[913,0,300,422],[502,344,253,479],[0,564,329,394],[407,825,289,407],[502,0,409,342],[978,791,248,450],[698,825,278,402],[0,282,500,280],[0,0,500,280]]},
		{name:"storage_atlas_9", frames: [[0,403,293,370],[0,0,273,401],[846,764,280,380],[859,382,280,380],[275,0,280,380],[0,775,280,380],[295,382,280,380],[557,0,280,380],[282,775,280,380],[839,0,280,380],[564,764,280,380],[577,382,280,380]]},
		{name:"storage_atlas_10", frames: [[0,764,300,337],[814,382,261,361],[1095,382,174,474],[814,745,279,306],[564,382,248,414],[302,764,197,470],[0,0,280,380],[564,0,280,380],[846,0,280,380],[282,0,280,380],[0,382,280,380],[282,382,280,380],[501,1053,420,200]]},
		{name:"storage_atlas_11", frames: [[209,0,226,345],[0,394,290,279],[660,521,251,264],[918,837,203,266],[474,589,184,372],[1071,0,198,310],[913,316,243,258],[913,576,232,259],[0,0,207,392],[859,0,210,314],[614,242,243,277],[1147,576,151,385],[274,1091,380,180],[322,589,150,500],[656,963,260,260],[0,917,272,275],[0,675,320,240],[437,0,320,240],[292,347,320,240]]},
		{name:"storage_atlas_12", frames: [[224,1022,220,220],[191,0,220,220],[224,800,220,220],[183,286,220,220],[138,578,220,220],[890,666,220,220],[668,888,220,220],[668,666,220,220],[890,888,220,220],[405,222,220,220],[360,508,220,220],[804,444,220,220],[1026,444,220,220],[413,0,220,220],[1071,222,220,220],[446,952,220,220],[857,0,220,220],[849,222,220,220],[635,0,220,220],[582,444,220,220],[627,222,220,220],[446,730,220,220],[0,946,222,221],[0,286,181,290],[0,0,189,284],[0,578,136,366]]},
		{name:"storage_atlas_13", frames: [[442,903,240,120],[134,575,280,120],[442,1025,260,110],[0,0,220,220],[0,222,220,220],[442,1137,240,119],[869,1076,158,147],[995,650,117,213],[416,0,234,197],[1164,812,117,196],[984,249,169,195],[820,832,173,146],[992,446,127,202],[873,0,193,190],[0,753,157,257],[698,388,154,179],[704,1076,163,144],[698,183,164,203],[441,747,204,154],[1121,615,129,195],[995,865,167,147],[160,1185,221,102],[854,476,136,192],[1155,249,145,202],[1068,0,148,247],[647,743,171,155],[222,0,192,249],[0,1012,158,247],[652,0,219,181],[0,444,132,307],[864,192,118,282],[623,569,157,172],[704,1014,400,60],[416,443,280,120],[222,251,188,200],[1029,1076,132,175],[159,697,280,120],[820,670,160,160],[1121,453,160,160],[160,941,280,120],[159,819,280,120],[412,321,280,120],[160,1063,280,120],[416,199,280,120],[441,565,180,180],[134,453,280,120]]},
		{name:"storage_atlas_14", frames: [[518,0,180,100],[459,883,120,120],[1123,1041,100,100],[730,165,153,93],[0,694,100,181],[106,582,178,84],[287,486,178,84],[107,496,178,84],[216,267,92,172],[223,0,144,152],[855,1039,131,85],[646,1207,121,85],[223,154,143,111],[1115,590,113,88],[1142,680,113,88],[111,866,154,97],[110,1064,154,97],[106,668,154,97],[287,572,154,97],[111,965,154,97],[102,767,154,97],[905,567,208,60],[646,623,208,60],[856,629,208,60],[1121,161,102,123],[369,0,147,126],[843,260,106,131],[1121,286,123,100],[617,210,111,129],[358,804,190,77],[267,962,190,77],[267,883,190,77],[266,1120,190,77],[267,1041,190,77],[188,1199,190,77],[1121,388,140,72],[0,1042,108,157],[911,0,102,160],[1118,0,100,159],[700,0,106,157],[107,337,107,157],[1015,0,101,158],[0,877,109,163],[808,0,101,163],[646,1095,207,54],[646,1039,207,54],[646,1151,207,54],[310,267,117,132],[498,468,118,130],[581,889,110,110],[855,1126,102,103],[0,208,168,127],[618,468,115,133],[646,685,186,66],[834,691,186,66],[834,827,186,66],[646,753,186,66],[834,759,186,66],[646,821,186,66],[0,104,221,102],[0,0,221,102],[829,393,119,114],[1022,691,118,95],[358,671,113,131],[730,260,111,128],[911,162,168,79],[735,542,168,79],[951,243,168,79],[950,486,168,79],[951,324,168,79],[950,405,168,79],[0,1201,186,83],[310,401,186,83],[429,298,186,83],[369,128,186,83],[429,213,186,83],[498,383,186,83],[0,517,104,175],[262,671,94,158],[458,1127,94,152],[554,1127,90,155],[1022,788,88,123],[0,337,105,178],[735,390,92,150],[693,971,360,32],[693,937,360,32],[646,1005,360,32],[557,102,136,106],[1112,788,99,103],[459,1005,120,120],[1202,462,80,126],[1055,913,80,126],[1137,893,80,126],[959,1126,80,126],[473,600,80,126],[555,603,80,126],[1220,0,80,126],[1120,462,80,126],[550,731,80,126],[1041,1041,80,126],[1143,1143,80,124],[693,895,300,40],[1041,1169,100,100]]},
		{name:"storage_atlas_15", frames: [[0,342,80,100],[82,347,80,100],[352,663,70,70],[576,638,70,70],[242,708,88,48],[126,630,95,56],[658,785,75,38],[972,195,34,66],[63,726,45,78],[332,735,51,65],[796,464,147,46],[860,322,95,88],[267,849,57,35],[475,855,57,35],[326,849,57,35],[0,850,57,35],[963,830,57,35],[324,430,57,35],[736,126,138,67],[692,195,138,67],[832,195,138,67],[552,180,138,67],[876,126,138,67],[410,198,138,67],[80,449,79,92],[728,718,61,63],[664,718,62,65],[0,726,61,60],[597,718,65,62],[904,725,63,59],[424,705,64,66],[176,708,64,66],[804,824,91,29],[321,816,86,31],[527,825,93,28],[984,0,36,87],[795,666,59,82],[110,726,60,56],[703,430,91,85],[383,325,71,41],[385,773,71,41],[703,380,71,41],[585,782,71,41],[791,771,71,41],[110,784,71,41],[383,374,158,50],[543,380,158,50],[860,412,158,50],[164,430,158,50],[383,426,158,50],[543,432,158,50],[159,284,139,61],[550,249,139,65],[410,126,140,70],[242,758,86,36],[864,786,79,36],[490,710,105,39],[295,567,55,100],[957,322,64,77],[856,666,46,103],[0,697,174,27],[161,482,90,68],[164,347,92,71],[922,549,88,69],[201,840,64,33],[69,827,64,33],[622,825,64,33],[409,834,64,33],[897,830,64,33],[135,840,64,33],[850,264,157,56],[620,322,157,56],[302,267,157,56],[0,284,157,56],[461,316,157,56],[691,264,157,56],[779,322,79,106],[352,590,77,71],[0,444,78,95],[300,325,81,103],[945,464,79,83],[431,632,71,71],[324,478,75,87],[126,552,78,76],[490,751,93,37],[648,671,99,45],[461,267,82,42],[401,478,56,110],[977,620,43,114],[922,620,53,103],[552,126,182,52],[458,790,67,42],[183,796,67,42],[252,796,67,42],[0,806,67,42],[945,786,67,42],[735,814,67,42],[258,347,32,77],[534,855,30,65],[688,825,30,66],[206,552,30,76],[930,867,40,40],[669,517,40,152],[711,517,40,152],[753,517,40,152],[0,541,40,152],[42,543,40,152],[84,543,40,152],[543,484,40,152],[627,484,40,152],[585,484,40,152],[501,478,40,152],[796,512,40,152],[459,478,40,152],[838,512,40,152],[253,482,40,152],[880,512,40,152],[720,858,40,40],[762,858,40,40],[608,860,40,40],[566,855,40,40],[59,862,40,40],[749,671,40,40],[846,855,40,40],[804,855,40,40],[888,865,40,40],[969,736,40,40],[0,126,80,124],[738,0,80,124],[902,0,80,124],[820,0,80,124],[82,126,80,124],[164,126,80,124],[246,126,80,124],[328,126,80,124],[574,0,80,124],[656,0,80,124],[328,0,80,124],[492,0,80,124],[0,0,80,124],[246,0,80,124],[164,0,80,124],[410,0,80,124],[82,0,80,124],[0,252,300,30],[223,636,70,70],[504,638,70,70]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.animation_rubbing_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_rubbing_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_rubbing_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body_pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cancel_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.check_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hanger_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_pareo6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_tale1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_tale2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_tale3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_tale4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_pareo6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_swimsuit8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero3_pareo1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero3_pareo2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero3_pareo3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero3_pareo4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero3_pareo5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero3_pareo6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero3_tale1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero3_tale2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_tale3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_tale4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hero4_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero4_body_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero4_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.hero4_pareo1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero4_pareo2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero4_pareo3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero4_pareo4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero4_pareo5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero4_pareo6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.hero4_swimsuit1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero4_swimsuit2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero4_swimsuit3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero4_swimsuit4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero4_swimsuit5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero4_swimsuit6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero4_swimsuit7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero4_swimsuit8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h1l1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h1l2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h1l3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h1l6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h2l2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h2l5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h2l6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i18_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i19_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i20_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i21_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.next_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.next_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon14_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h1s3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h1s4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h2s3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h2s4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h2s5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i21_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i23_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i24_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.shelf_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.stick_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.redirect_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4/SvMAAAgldMAx/AAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect];


(lib.redirect_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.redirect_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_3_img();
	this.instance.setTransform(-160,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-160,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-160,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect];


(lib.play_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_redirect_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.cancel_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cancel_redirect_img();
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.preloader_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().p("AgQARQgIgIAAgJQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAJgIAIQgHAIgKAAQgJAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-2.5,5,5);
p.frameBounds = [rect];


(lib.preloader_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().p("AGNBOQgUgLgNgWQgMgVAAgYQAAghAXgaQAbgeAqAAQAXABASAIQARAHAQARIgXAWQgWgWgdAAQgZAAgRAQQgSARABAXQgBAYATARQARARAbABQAQgBAMgGQALgIAIgPIgyAAIAAgdIBWAAIAAAGQAAAWgMAUQgLAVgTAKQgSAKgZABQgbAAgVgMgAmXA/QgagaAAglQAAgXALgVQAMgUAWgMQAUgNAZAAQAjAAAbAbQAaAaAAAkQAAAmgaAZQgaAagkABQgoAAgYgbgAmAgoQgRAQAAAYQABAdAUAQQAQANAVAAQAWAAARgRQAQgRAAgYQAAgWgQgSQgRgQgXAAQgYAAgQAQgAEhBWIhJhvIAABvIghAAIAAirIAgAAIBJBwIAAhwIAhAAIAACrgABzBWIAAirIAgAAIAACrgAgwBWIAAirIAnAAQAjAAASAKQASAJAMAWQAMAUAAAaQAAATgHARQgGARgMALQgMALgNAEQgOAEgeABgAgQA2IAQAAQAUAAAKgGQALgEAFgNQAHgMAAgSQgBgZgPgPQgNgOgdAAIgLAAgAhrBWIgOgkIhFAAIgPAkIgiAAIBDirIAhAAIBCCrgAizASIAuAAIgWg4gAoRBWIAAirIAgAAIAACLIAwAAIAAAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-9,106.1,18);
p.frameBounds = [rect];


(lib.preloader_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.686)","rgba(255,255,255,0)"],[0,0.525,1],0,0,0,0,0,13).s().p("AgCAIIhwAzIBrg9Ig0hwIA9BrIBxg0IhrA9IAzBxg");
	this.shape.setTransform(11.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,23,23);
p.frameBounds = [rect];


(lib.preloader_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.686)","rgba(255,255,255,0)"],[0,0.525,1],0,-0.1,0,0,-0.1,18.2).s().p("AgHAIIisgIICsgHIAHisIAICsICsAHIisAIIgICsg");
	this.shape.setTransform(18,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,36,36);
p.frameBounds = [rect];


(lib.preloader_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAeQgMgNAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAARgMANQgNAMgRAAQgQAAgNgMg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,8.5,8.5);
p.frameBounds = [rect];


(lib.preloader_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgD5Au4MAAAhdvIHzAAMAAABdvg");
	this.shape.setTransform(25,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50,600);
p.frameBounds = [rect];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCB9D5","#FEF5F9"],[0,1],5.7,-217.9,-4.2,159.7).s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,300,1.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,0.467,1],-49.9,0,50,0).s().p("AnzPnIAA/NIPnAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.preloader_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(252,185,213,0.6)").s().p("AnzGPQilABh2h2Qh1h1AAilQAAikB1h1QB2h1ClAAIPnAAQClAAB1B1QB2B1AACkQAAClh2B1Qh1B2ilgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.preloader_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE0044").s().p("ADkDHQgMAAgKgEQgKgEgHgJQgFgIgBgNQABgRAKgMQAJgLAPgIQAPgIAQgEIAEgWQgNAOgMAFQgMAEgKgBQgTABgMgMQgJgJgCgPIgIAKQgOAQgPAFQgOAFgLgBQgRAAgKgJQgKgJgDgSQgFAJgJAIQgJAJgLAFQgLAFgOAAQgMABgLgHQgNgGgHgOIgEgKIgJALQgPAPgPAGQgQAFgKgBQgTABgMgMQgMgMAAgYIAAgNIACgNIAsjHIA7gIIguDWIgCAHIAAAGQAAAIAEAEQAFADAHAAQAMgBAKgJQAFgFAEgHIAAgDQAAgVAGgWQAGgYANgWQANgWASgOQASgNAbAAQAQAAAJAFQAHAGABAJIAAADIAEgWIA5AAIgdCGIgBAHIAAAGQAAAJADAEQAFAEAIAAQAMAAAIgLQAIgLAFgPIAAAAIAbh/IA6AAIgdCGIgBAFIAAAFQAAAHACAGQADAFAHAAQAKAAAIgKQAJgJAEgOIAciBIA6AAIgpC4QANgEAJgHQAJgHAIgLQAGgLAGgRIARAAQgHAagNAPQgMAPgNAHQgNAIgNADIgGAdQgGAcgMAPQgMAPgOAFQgNAGgMAAIgDgBgADhCCQgJAEgFAHQgFAGAAAIQAAAEADAFQADAEAHAAQAGAAAHgJQAGgJAEgSIACgLQgKADgJAGgAAqhAQgKALgHASQgIARgEASQgEARAAAPQAAAPADAHQAEAGAEABQAGACADAAQAHAAAGgEQAHgEAFgIQAFgIADgLIAUhYQAAgDgCgEQgBgDgEgDQgDgDgHAAQgNAAgKAMgAlVBjIA2j8IA8gIIgdCGQAQgCANgJQAMgJAJgPQAKgOAFgRQAFgRAAgQQAAgPgEgMQgGgNgKgHQgMgHgRAAQgxAAgbAaQgbAZgBAtQAAALABAFIADAIIACAEQgVAAgLgIQgLgKAAgVQABgUAMgTQAMgSAUgPQAVgOAYgJQAZgJAZAAQAhABAVALQAVAKAJASQALASgBAVQABAUgJASQgHATgPAQQgPAPgVAKQgWAJgbAAIgCAAIgYBwg");
	this.shape.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.7,-17,75.5,40);
p.frameBounds = [rect];


(lib.preloader_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC7FA6","#FFFFFF"],[0,1],20,25,20,-25).s().rr(-75,-25,150,50,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-25,150,50);
p.frameBounds = [rect];


(lib.preloader_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().rr(-80,-30,160,60,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-30,160,60);
p.frameBounds = [rect];


(lib.preloader_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(252,185,213,0.898)").s().p("A1ED5QhoAAhKhJQhIhJAAhnQAAhmBIhKQBKhIBoAAMAqKAAAQBnAABJBIQBJBKAABmQAABnhJBJQhJBJhnAAg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,320,50);
p.frameBounds = [rect];


(lib.preloader_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.2)","rgba(255,255,255,0)"],[0,1],0,15,0,-14.9).s().p("A3bCVIAAkqMAu2AAAIAAEqg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,30);
p.frameBounds = [rect];


(lib.preloader_5_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.682)").s().p("EgnoAnpQwbwbAA3OQAA3NQbwbQQbwbXNAAQXOAAQbQbQQbQbAAXNQAAXOwbQbQwbQb3OAAQ3NAAwbwbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-358.8,-358.8,717.6,717.6);
p.frameBounds = [rect];


(lib.preloader_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bCVIAAkqMAu2AAAIAAEqg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,30);
p.frameBounds = [rect];


(lib.preloader_4_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AQRZHQjYBFjTg0Qjjg4hTirQgsBJhZA0QhTAwhmAUQhmAUhggMQhjgLhCgrQg/AchfAYQiJAjhZgMQh+gQgxhrQgjApg6AkQg4AjhEAYQizA/iugfQjEgkg9iQQgkhPAUhTQA9j6Adj1QAjkvgejEQhKAXhBgCQh3gDhHhTQjjDOkWBZQktBhkQhJQl+hlgJjlQgEgwARhaQAYh0A2j9QiZg5hkiDQhxiVALi3IABAAQAGilB9iZQCPitEQiAQCwhTDNguQDhgzDLAHQHxARC1FZQDvhkCgBaQB2hPCBAAQCOAABVBlQCehuCwgeQB/gWB0AbQCBAeBSBUQBLg9BsgpQBugqBugKQEGgYBvCcQBVg1BtgeQBwgfBrADIAkhkQDEiXBLgkQCPhGC2AUQCTARBUBbQBVBcACCSQBsiID8AiQCRAUBbBAQBrBLAQB/QDAABBuB8QCbgvClA4QCYA0BUCLQBNCAAFCyQAFCshACtQhCCyh8CCIAAABQjIDvktBEIAeBjIhfBbIguAPQi9A9hJAOQiXAdhtgmQhYgfhChLIhDBIIghAAQAnDOhGDXQhIDaicCOQgxA4g4ArQidB2i+AOQgaACgZAAQijAAiQhSg");
	this.shape.setTransform(0,17.5,0.583,0.583);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("EgiWAPnIAA/NMBEtAAAIAAfNg");
	this.shape_1.setTransform(0,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-82.4,440,200);
p.frameBounds = [rect];


(lib.preloader_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD255E").s().p("AAUCVIgUgUIgSAUI0yAAQg/ABgrgtQgsgsgBg9QABg9AsgrQArgsA/gBIUxAAIATAUIAUgUIUyAAQA9ABAsAsQAtArgBA9QABA9gtAsQgsAtg9gBg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,30);
p.frameBounds = [rect];


(lib.preloader_3_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#323232","#4C4C4C"],[0,1],0,-5.7,0,5.1).s().p("Ailg4QAcgEA7APQA/AQAPgBQAQABA/gQQA7gPAcAEQgHAsghBEQhGgnhMAIQg1AGgzAbQgihIgHgqg");
	this.shape.setTransform(-287,-75.6,0.595,0.595);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#313131","#4B4B4B"],[0,1],-8.4,-21,1.1,12).s().p("Ai4BeQAPh+ADgTQAViiAdgZQgNECASDDQgsAPgxAJQAJg1ALhcgAhMhHQgIh7AHgNQAOABAMgIQAKgFAFgKQATB6AXBOQAcBTAsAvQg0Avg5AgQgjhlgKiWgAA1g7QgghIgGhrQAJAHAcBDQAcBDAfAWQAkAZA6gUQgfA8gmAvQgzgagghGg");
	this.shape_1.setTransform(-281,-39.5,0.923,0.923);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323232").s().p("AlcE+QAjjXAKgzQAmjGBQhKQAeAJARAFQAZAGAYAAQAAAQAFAYQALAAATgKQAZgNAAgQIANgBQAAASAWANQASAJANAAQAFgbAAgYIAegJQAjAhAVAlQALAUAXA3QAmBZBFAVQA/ATA/gsQhxEPjPCTQjGCPkPAOQAOhDAgjIgAgxkCQgQgOgTgFQgGAbAAAcQgogBgrgPIg8iFQgfhLgHgzQAkgGBNAVQBRAWAVgCQAWACBPgWQBMgVAkAGQgHAzgfBLIg8CFIgRAFQAAgVgFgXQgTAFgRAOQgRARAAATIgNABQAAgUgUgRgAh+oMQgjgVgZgbIAhgMQBhBXBfhXIAhAMQgZAbgiAVQgkAVghAGQghgGglgVg");
	this.shape_2.setTransform(-283.6,-51.5,0.595,0.595);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC9933").s().p("AlcE/QAjjXAKg0QAmjGBQhKQAeAKARAEQAZAGAYAAQAAARAFAYQALAAATgLQAZgMAAgRIANgBQAAATAWAMQASAKANAAQAFgbAAgYIAegJQAjAgAVAmQALATAXA4QAmBYBFAUQA/ATA/grQhxEPjPCUQjGCOkPAOQAOhDAgjHgAgxkBQgQgOgTgFQgGAbAAAbQgpAAgqgQIg8iFQgfhLgHgzQAkgFBNAUQBRAWAVgCQAWACBPgWQBMgUAkAFQgHAzgfBLIg8CGIgRAFQAAgVgFgXQgTAEgRAOQgRARAAATIgNABQAAgUgUgQgAh+oMQgjgVgZgaIAhgNQBhBYBfhYIAhANQgZAagiAVQgjAWgiAGQghgGglgWg");
	this.shape_3.setTransform(-283.6,-51.8,0.595,0.595);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AlcE/QAjjYAKgzQAmjGBQhJQA5ASAnABQAAARAFAXQAKABAUgLQAZgNAAgQIANgBQAAASAWANQASAKANgBQAFgaAAgYIAegJQAjAgAVAmQALATAXA4QAmBYBFAUQA/AUA/gsQhxEPjPCTQjHCQkOANQAOhDAgjHgAgxkBQgQgOgTgFQgGAbAAAbQgpgBgqgPIg8iFQgfhLgHgzQAkgFBNAUQBRAWAVgCQAVACBQgWQBMgUAkAFQgHAygfBMIg8CGIgRAEQAAgUgFgXQgTAEgRAOQgRAQAAAUIgNABQAAgUgUgQgAh+oMQgjgVgZgaIAhgNQBhBYBfhYIAhANQgZAagiAVQgjAWgiAGQghgGglgWg");
	this.shape_4.setTransform(-283.6,-50.8,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-307.2,-86.6,47.1,70.7);
p.frameBounds = [rect];


(lib.preloader_2_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNIkQgPgPgHgTIAAAAQgLgcAGgpIAHgdIAShPIABgBIABgFIgTAJIAAAAQgbALgaABIgDAAIgYAAQgPgCgSgEIgogRQgMgJgIgNIgEgHQgGgLgEgOQgcAkgjAYIgPAKQgSASgWAOQg0AkgyAEQhhAGhCg6QhHg+AAh2QABg7AyjWQA9j/AGgoQAHgvgFgWQgGgXgYgQIA2grQAkgcApgJQApgKAxAGQBIAHAKA9QAGAogXBmQgMAyg2DOQgxDAgBA+QAAAmAPASQAOARAZAAQAPAAATgJQApgrAVgqQAfhBAoiUQAmiQALhUQgDgeAEgXQAGgsAigOQAKgEAWgEQAXgDAPABIAAAAQAXgCAgAEQBCAJAZAXQAhAfgWA9QgQAqgPAsIAfgYQA/gTAqgCQBEgDAiAkQASATAEAbQADAVgGAcQAxgtAugPQA4gTA/AWQA3ATAeA9QAYAyAAA9QgBBTgjBSQgjBSg7A4IgBABQgjAgglATIg8ArIgLAEQgYAIgXAFIhNAGIgrgHIgOgEQgDAPAAALQAAAjAQA2Ig2AqQg5ATgpACIgIAAQg3AAgegfgAFjArQhIBngUA2QANAUAdAJQAXAHASgFQAIgLAIgNIAPgdIAPgrIAFgQQAMgtACgqQADgigHgMIgBgCIgBAAIgCgBQgVAXgbAlgAA6hpQgfB0gNBhQgHAzABATQAAAXAGARIAKghIAdhqIACgGIABgCIAgiEQAIgnABgZQACgqgLgVIgEgGQgOArgMAug");
	this.shape.setTransform(139.2,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzUG+QgLgFACgVIAGgiIAEgUIA6kQQAqi8AZiWQg7AZgcAQQgwAegQAnQgQAjAMAfIADAHIAGAKQAOAWAeAMQgiALgkgGQgkgGgcgVQhBguARhOQADgPAHgPIAVgnQANgUATgUIASgTIAHgGIAZgUICHhSQAWgLAYgJICCgqIADgBIATgEIASgEIATgEIB+gOIANAAIAJgBIAPAAQAnABAjAEIBiAZIAhAQQAcAPAXAUQANALALAOIAyBcQAMAoACAyQAHCThNCTQhJCPh9BpQiBBqiPAgQg1ALgyAAQhjAAhagsgAnWE4IAUg3QAth8AbhqQAThHAJg8IAFgiIABgMIAAgOIABgOQAAgSgCgKIAAgCIAAgBQgEgOgIgSIgIgPIAYgMIAOgHIANgGIAGgDIABAAQAggPAbgGQAqgLAcAKIACABQAHACAFAEIAQAPQAGAIADAMIABADIABADIABASIAAAOIgBANQBShwBGgGQAagCASAJIAKAHIADACIAGAGIANAjIABAOQgBAzghA3QgUAhgwA6QgIgPgHgJQgMgSgIABQg3AEhBCSIgvBwQgXA8gNAQQgkAxhTAgQgpAPgaAAQgbAAgJgSgADCEOQhfgLgrg+Qgmg4AHhZIAAgKQADgaAGgbQAbh7BchiQBhhmB5gVQBFgMAxAUIAFACIAFADIAMAGIARANQAWAUAJAeIAEAOIABAQIAAACIAAANQgBA7g6A9QguAwhDAjQgRAJg0AUQgsATgYAPQgUAMgDAHQgDAEABAKIABAOQAFAYAZANQAZANAZgEQBjgOBDg1QAogfAhgxQAaA3ASAcQAgAuAkANQAMAEAKAAIAFAAIAHgBQAPgDAKgKIAGgKQAHgNgBgSQAAgVgSgXQgGgIgigiQg8g/gHhBQgBgUABgTQABgRAFgQQAGgVALgTIAFgHIAEgHQAPgVAUgSIAVgQQAagTAhgNIAsgNIAOgDIBpgDIAJACIAHADIAZAMQAPAMAEARIAAAEQADARgKATQgNAdghAVIgTANIgZgZQgRgNgPAAQgTAAgHAIQgIAJAAATIABAFIACAHQADAKALAQIAEAFQAMARAgAmIAPAUIAGALQAnBBgHA9QAKgIAQgJIAdgOQAUA3ANAWQAZAqAkAOIAEABIAAABIATADQAIABAIgCIADgBIAJgFQAUgOAAghQAAgVgSgYQgGgIgigjQg8hCgHhBQgCgVACgTQACgPADgOQAGgXANgVIACgCIAPgWQAMgOAPgMIAXgRQAMgIAOgGIA1gVIAjgHIBpACQAJACAHADQAeAMAKAVIACAEIAAABQAIAVgNAaQgOAbggAVIgSAMIgagbQgRgOgPgBQgSgBgIAIQgHAIAAAUQAAAIALAUIAdAqIACACIAGAIIACADIAFAHIAvBKQAHASAFASIACAKQANBDglBCQgvBUheAfQg6ATg1gFQg8gFgughQgZgUgSgaQgSgbgFgdQgeA0g3AkQg1Ajg9AJQg+AKg0gTQg4gVgggyQgtAvhZAdQhHAYhCAAQgTAAgTgCgAFLjfQgpAkgdBbIAmgVQAXgOANgMQAKgKAJgOIAKgRIAFgMIABgDIABgEQADgMgCgJQgCgMgLAAQgMAAgQANg");
	this.shape_1.setTransform(-65.9,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AuhGtQgnAAgVgLQgZgLAGgYQAkiXARiRQAViugQh7QgQh5gtgWQA0goBdAAQApAAAdALQAgAKAIATQAeBGgBCrQgBCYgXBmQAphFAshcQA0huAOg4QADgMgFgMQgEgMgJgBQA2gaA9gJQBKgKASAdQASAdADCUQABBBgBCEQAnhUAbhkQARhEAXh6QAIgqAAgJQAAgXgPgbQgUgkgigOQAngRAsgJQAzgLAlAFQA7AHAIAxQAEASgEAeIgFA1QgDAqgZBbQgaBbgkBhQhZDyg8AtQgbAVhXATQhbATABgbQAKh5AFhGQAIh/gLhRQg3CdhWCHQgfAzgmAiQgVAUglAbQgOAMgkAIQghAIgiAAIgEAAgAKQGjQgogJgjgTQgkgUgcgcQg1A+heADQgjABgigIQgegHgRgMQgtgfgVg2QgVg2AKg8QAHgrATg+QAVhEAIglQAEgUAAgIQAAgLgIgGQgVAMgsA8QgSAYg4BUQgcArgiA/IgrBWQgbA3h0AQQgsAFgegEQgegFAJgMQBIhiBJjpQBGjaAHiDQABgTgEgPIgOghQA4gbApgHQA8gJAkAeQASAQgCAiQgBANgNA+QgKA0gOA2QgOA1gKAbQBAg+BGghQBCgeA3ACQA2ADAYAlQAbAogRBHQgLAtglBqQggBkgCA+QgDA8AmAOQAjAMA5gfQg7hfAeiHQAdh/BZhUQBMhFBhgCQBcgBBHA6QhMAHg2AqQgwAmglBGQgdA5gQBFQgMA2ABApQADBCAqABQAtABApheQAchBAOhHQAHgogGgPQgIgQgjgBQAQgaAdgXQAggaAggJQBSgaAgBYQAbBIgMBYQgMBXgtBIQgwBNhJAjQg1Aag7AAQgfAAgggHg");
	this.shape_2.setTransform(8,64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205.8,-63.9,412.4,171.1);
p.frameBounds = [rect];


(lib.preloader_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().rr(-155,-20,310,40,20);
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,310,40);
p.frameBounds = [rect];


(lib.preloader_1_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuvEhQBujGAAjDIAAgOQgKjtigh1QiNhmj4gEIgZAAQieACivApQiqAoiSBEQh/A8hkBOQBuhhCdhKQCShECrgpQCugpCfgBIAZAAQD4ADCNBmQCfB1ALDuIAAANQAADQh7DRQhvC8i1CSQCmiRBiizgAooH6QANgQARgiIAYg2QAyhyAag5QAohUAggzQA1hTA2gjQgpAngoBGQgYApghBGQgbA4gxBzIgZA1QgQAjgNAPQgSAWghAXgAFZHgQg6ghgMg6QgJguAWgLQAVgLAHAhQALA7A7AhQA3AgA9gJQCwgaB6hcQiFB6jOAeQgNACgOAAQguAAgrgZgAbRHUQhUg1gphlQgKgRAWgOQAVgPALAWQAcBCAgAoQApAzA5AXQAeALAdAAQAeABAYgMIABAAQguAdgvAAQgxAAgxgfgAP7HNQhYgxguhVQgMgYASgVQASgWAMAYQAjBBAlAoQAuAyA1ATQBAAVAwgYQgpAigxAAQgsAAgzgcgEAizAD1QgGgqgRgoQgQgogxhCIg6hLQgkgygNggQgWg0AJgwQAJg0AsgQQgPAZAAAmQABAkAPAkQANAgAkAxQAUAcAmAvQAxBDAQAnQARAnAGArQgKA8gkA3QgiAyg2AnQBPhMAOhegAW3FMQAYghAMgtQAMgxgag5QgQgjgug/IhFhUQgtg5gLghQgSg3AJgrQAKgyArgRQgPAZgBAkQAAAiAMAkQALAiAtA4IBGBUQApA4ARApQAYA3gHA0QgJBIgjApQggAkhEAcQAsgeAYgjgAFehBQAghpBXg/QgxA9gZA+QgnBjALBzIBAgnIAygdQAdgSATgNIgFAGQgZAXgoAYIhFApIhAAnQABiDAXhIgEgkkAAqIACgLQgJgzAYg2QAag3A/gtQgfAfgRAkQgZA1AJA1QgEAdAEAcQgUgEgWgKgAlwiOQAEgwgFgYQgKgrgwgIQgigHgxAMQghAIgnAQQgcANgEgNQBVgrA7gOQAxgMAjAFQAvAJAKArQAFAYgEAwIgLB8IgrA3gANVjAQAChohlgmQhQgfhtATQiLAYh/BiQCPiACkgcQBsgTBRAfQBkAlgBBpQAAAmgVAJQgGADgEAAQgKAAAAgQgAAljmQgGgEAAgFQAAgmgagQQgVgNgnADQgwAEg1AnQBNhHBBgGQAlgDAWAOQAaAPAAAlQABAsgVAEIgDAAQgGAAgFgEgAe7laQA8gaBDgLQB8gQBCAZQAWAKAOAMQAVAWgYAQQgYAPgNgSQgNgOgXgJQhFgbh5ATQhxAQhUA7QAtgsBBgdgATklrQA7gbBBgMQB9gXBCAYQAdAKALAQQANASgYALQgYAMgGgJQgNgPgbgJQhEgZh6AYQhsAThUA8QAugsA+geg");
	this.shape.setTransform(-63.6,-18.2,0.576,0.576);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFF66","#FFCC00"],[0,1],0,-9.7,0,20.3).s().p("Ay/gHIAbiPQg0ASgZAKQhHAagoAaQg4AjgVAqQgRAlAGAmIgCATQgXgJgPgPQgSgQgFgWQANhFBZhJQBDg4BYgpQBggtB4gbQCKgfByAHQCHAJBOA/QBaBIAGCLQADBWgkBdQmUAulaBWQAgiVAdicgAUNCkIgrgsQgagagMgVQgig5Ang+QAxhTB8gUQAxgIAoAGQAnAGAKAQQgIARgQAEQgPAEgQgJQg2ghgrAdQgrAdANA/QAIAlA3BCQA4BEAKAqQhagNhcgLgAldg9QAugXAmgJQA/gPAIAkQADANgHBKIgJBgIBVhyQBShvA9gGQAqgDAAAfQAAAegXAlQgRAZgeAjQgVgVgZACQhHAFhDByQhKAFhiAJQAbiLgNhHgAMNB8QgsgugKgjQgOgyAng4QA3hOB3gWQAvgJAlAFQAmAEAJAOQgKAYgSACQgNABgWgKQg0gZgnAcQgpAeAMA+QAIAlAvA0QA5A+AMAXQhggHh5gGgADrg1QBXhNBlgSQBFgMAvAUQAuATAIAnQAHApgnAtQgsA0heAtIgdAOIgqAAQAmgZANgMQAVgUAQgbQAPgbAEgkQAFgqgRgXQgZgigwAUQg2AWgoBTQgRAggGAeQgEAYAAAkIiSADQAthlBThHg");
	this.shape_1.setTransform(-66.9,-26.3,0.893,0.893);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBE0E").s().p("EghrALHQAdiRBIlJQBJlIAtkHIAJgnIgxASQiGA0g3A5QgXAXgNAcQgzBtA9BZQhhAAhPhFQhUhJAchSQAjhuB9hqQBtheCahIQCOhDCqgqQC6gtCpgCIAaAAQECADCYBuQCzCAALEEIAAAOQgHDkiKDgQiFDajXCbQjdCfjyAsQhVAQhRAAQirAAibhFgAsUIJQBNjVAxi8QA2jNAFiBQADgygFgWQgGgigcg1IApgVQBjgyA/gQQBHgRAyARQA4ASAOA7QADAOAAAdQABAYgCASQCQjDB7gLQA7gFAiAcQAjAbAEA3QgFBMg5BTQgiAzhRBYQgPgYgLgPQgVgbgOABQhhAHhxDoQgMAYhFCbQgpBegWAbQgzA/h2AyQhbAmg7AAQgSAAgPgDgAChF2QhshFgNiOQAEg1ANg6QAvjVCgiqQCoizDSgkQCFgXBbAtQBoAyAJB7QgIBbhkBcQhPBJhxA2QhvAzhuA9QgnAWgPArQgNAmAJAvQAIAqAtAYQAqAWAsgHQCrgZB1hbQBHg3A5hYQAtBjAgAwQA2BRA/AWQAhALAbgFQAagFARgTQAggmgIhFQgGhBghgqQgPgVgkgjQgnglgQgTQhAhNgLheQgEgjATg1QARgtAYgjQAwhEBRgwQBOgtBdgSQCHgYBNAbQBEAXAIA3QgFAegYAdQgYAfgnAXIghAUIgsgnQgdgVgbAAQgzAAgLApQgIAeAQAvQAPAtBpB4QBeCDgNCCQASgQAcgQIAxgYQAkBhAWAmQArBJA/AYQAmAPAegIQAdgJAPgbQAUgmgCg8QgBg8gWgjQgLgRhShTQhGhHgXhCQgLgfgDgfQgDgdAOgtQAMgoASgeQAuhMBWgyQBSgwBlgPQCGgSBNAeQBDAaAJA3QgFAdgYAdQgYAdgnAWIggATQgkgjgJgHQgcgWgbgCQg2gCgJArQgIAhATAtQALAdBGBdQBHBfAUAvQAUAuAGAzQgNBnhSBVQhQBThzAjQhkAehdgHQhngIhQg2QgtgfgfgpQgggsgIgvQg1BVhgA5QhbA3hqAPQhsAQhbgfQhighg3hRQhEBCiEAuQiIAviFABIgIAAQiQAAhbg7gAJcl1QgaAJgdAfQgiAlgdA6QgaA3gGAhQgBAJAAAvIBBgmQAngYAWgVQATgSAQgXQASgbAIgZQANgogCggQgDgjgZAAQgIAAgLAEg");
	this.shape_2.setTransform(-66.1,-9.6,0.576,0.576);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E68525","#FFCC00"],[0,1],0,14.2,0,31.2).s().p("A1sH1QgNgGACgYIAHglQAUhjAyjmQAvjTAdipQhDAcgfATQg3AigSArQgRAnANAkQAPAmAsASQgmANgogHQgogHgggXQhJg0AThXQAQhMBThLQBJhBBrgyQBvg0CDgbQCUgeB6ANQCNAPBRBHQBdBSAGCXQAHClhVCmQhSCgiNB1QiRB4ihAjQg6ANg5AAQhvAAhlgxgAoRFfQBCivAmiSQAWhQAKhDQAQhqgTglIgOgbIBAggQAlgRAegHQA1gNAiAQQAnASAAA1IgCAeQBdh+BPgHQApgDAXAVQAWAVAAApQgBA5glA+QgWAlg2BBQgKgRgHgKQgOgUgJABQg+AFhJCjIg0B/QgbBCgOATQgpA3hdAjQguASgcAAQgfAAgLgUgADZEvQhqgMgxhGQg5hTAhiWQAeiKBohuQBsh0CIgXQBagQA8AhQBFAlgCBYQgBBDhBBEQg0A2hLAnQgUALg6AXQgxAVgbARQgWANgEAIQgFAIAEAXQAFAbAdAPQAbAPAdgFQBvgQBLg7QAtgjAlg3QAdA+AVAfQAjA0ApAOQAjAMAXgQQAWgQAAglQAAgXgUgaQgHgJgmgmQhEhIgHhJQgKhjBHhIQBAhCBogUQBNgNAwAMQAqAKAOAcQAMAagPAfQgPAgglAYIgVAOIgcgcQgTgOgRgBQgVAAgJAKQgIAKAAAVQAAATAXAeQAOASAkArQBFBagJBXQALgKASgKIAggPQAXA+AOAYQAcAwAoAPQAjAOAXgQQAWgQAAgkQAAgYgUgbQgGgJgngoQhDhKgIhJQgKhkBIhGQBAg/BogQQBMgKAwAOQArAMAOAdQAMAagPAgQgQAfgkAXIgVANQgXgZgGgEQgSgQgRgBQgVgBgJAJQgIAJAAAVQABATAuA+QA3BJANAfQAsBmg4BjQg0BehqAjQhAAVg8gFQhDgFg0gmQgdgWgTgdQgVgfgFghQgiA7g+ApQg7AmhEALQhGALg7gVQg/gYgjg4QgzA0hkAiQhQAbhJAAQgWAAgWgDgAFzj6QguAnggBnIArgYQAZgPAOgOQATgSANgYQAOgcgDgVQgDgNgNAAQgNAAgSAPg");
	this.shape_3.setTransform(-65.9,-5.2,0.893,0.893);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#82FFAC","#FFFFFF"],[0,1],-11.4,35.7,8.1,-35.8).s().p("ABXH+QAAgZAThPIAkiQQApiSAVhOQAliLAEhBQAFg+gjgYQA8gSApACQA7ACAnAqQgggYgwgDQgpgDgqAMQAgAoguDFQgPA+gaBaIggByQgSA+gXBiQgRBLgBATQgEA6AgAjQgvgiABhAgApsC9QAAhDA6jwQBDkeAHguQAHgugDgVQgFghgfgVQAtghBFgDQBLgCAjApQglgYg5ABQg5AAglAXQAXAfgFBEQgFA6hDEXQhAEJAABHQgBBBAUAsQATArAqAjQhig1AAiVgAGxE4QglgBgPgSQAQAKAfgEQAYgEAVgLQBIglAlhyQAkhygbhhQAXAcAEAjQALBegjBbQglBfhCAiQgYANgfAAIgDAAgAl/EYQAuAXBShGQBFg8Abg1QAjhIAridQApiYALhdQACgKgHgdQgGgYAHgKQAIgNAcgFQAdgEAlAEQBZAKAWAnQgZgZhOgMQhRgNgLAfQgDAKAEAeIADAkQgMBdgpCZQgrCcgjBIQgKAVgbAfQgeAjghAaQg5AtgqAAQgXAAgTgNg");
	this.shape_4.setTransform(136.1,-8.5,0.893,0.893);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#82FFAC","#FFFFFF"],[0,1],-62.3,9.2,-55.1,36.1).s().p("AicAmQA/hOBTgZQBigfBMBOQhWhDhmArQhXAkg0BRg");
	this.shape_5.setTransform(186.9,-18.6,0.893,0.893);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#19FE68","#FFFFCC"],[0,1],-5,23.6,14.5,-35.4).s().p("AHcFhQAXhAAFhAQAFg9gPgWIgFgJIgLgDQgggHg3A7QgsAvgzBSQhegThmgRQAfhvAKgzQAVhvgVgrQB7gfAsAwQAWAXgFAxQgDAdgOA9IA7g4QAigeAbgPQBHgnBRAZQA1ASAbA7QAYAzAAA9QAABggqBbQhOgYhYgWgAjZDmQAghfAdh9QAdh0AIhGQgFgkAIgOQAOgXBRALQA/AIAUASQAbAYgUA1QhIDDglDBQhWgMhbgLgAqrDEIA6jyQAiiRAKg7QAGgqgBgYQgDghgRgXQAtgYBAgBQBFgCAVAfQARAZgIA+QgDAbgOA+QgPBBgkCDQgjCCgPBHQhTgGhegDg");
	this.shape_6.setTransform(145.3,-27.5,0.893,0.893);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#19FE68","#FFFFCC"],[0,1],-8.3,21.2,-21.7,67.7).s().p("AAOJOQgigjAEg7QABgTAQhMIANg1QgkASggAEQgiAEgsgKQgugKgVghQgTgcgFgyQguBnhOA2Qg7Apg4ADQhuAHhJhAQhQhHAAiEQABhCA5jxQBDkdAHgvQAJg0gHgZQgGgZgbgTQAogeAvgLQAtgMA3AHQBRAJALBEQAHAsgaBzQgNA4g9DnQg3DZgBBFQAAAqARAVQAPATAcAAQAmAAA5g2QAygyAYgyQAkhIAsinQArihAMheQgGgoALgVQAWgnBkAOQBJAKAcAaQAlAigaBFQgpBsghB8QgjCDgNBtQgIA5ABAVQADBDAnAXIAFgTIBCjtQArifAEhGQAEg/gigXQBHgVAvgCQBNgEAmApQAUAVAFAfQADAXgHAgQA3gzAzgRQA/gVBHAZQA+AVAhBEQAbA4AABDQAABfgoBcQgnBdhEA/QhIBDhWAQQhfAShigwQgPBAAAAfQgBAoASA8QhBAVgsACIgKAAQg+AAgjgkgAFxBJQhSBzgWA9QAPAWAgAKQAhAKAYgMQBHglAkiFQAOgzADgtQACgqgIgNIgEgBQgeAAhUB0g");
	this.shape_7.setTransform(142.4,-8,0.893,0.893);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#004E40","#00DC72"],[0,1],0.1,-3.6,-0.9,8.4).s().p("AgqAwQABgIAQhAIAMg1IA7gwIgZBoQgNBCAPAkIg8AtQgMgfAHgvg");
	this.shape_8.setTransform(139.5,34.4,0.893,0.893);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#004E40","#00DC72"],[0,1],2.6,-13.6,-6.4,19.4).s().p("AhAEIQgLgPgBgJIAih4QAVhLAMgwQAShRAEgkQAJhJgWgeQALggACgDIAhgbQAnAagKBZQgFApgaBnIhUE4QgMgHgMgPg");
	this.shape_9.setTransform(148.1,-5.5,0.893,0.893);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#004E40","#00DC72"],[0,1],1.5,-8.2,-1.5,14.3).s().p("AgBABQAQhbgPgYIgBgBQArg0ASAFQAEAFACAMQAIA+gfBfQgkByg/AhIgLAFQAug8AUhng");
	this.shape_10.setTransform(180.5,2.7,0.893,0.893);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#004E40","#00AA61"],[0,1],-2.9,5.1,6,-3.8).s().p("AkaBTQAEgdARhIQCYBJCSgcQCHgZBvhoQhhB0iaA3QhbAihaAAQhEAAhBgUg");
	this.shape_11.setTransform(177.6,29.4,0.576,0.576);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#004E40","#00DC72"],[0,1],-4.1,0.4,7.4,6.9).s().p("AgiBQQgjgIgUgVQgTgTgJgfQAfgkAWg0QAEAjAKAYQAMAcAYAPQAXARAqAFQAmAFAdgGIgbAlQgeANgdABIgJABQgYAAghgIg");
	this.shape_12.setTransform(128.2,21.6,0.893,0.893);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#00AA61","#00C148"],[0,1],-7,-33.5,7.5,29.7).s().p("AAWOgQg1g3AFhcQACgfAah1IAThSQg5AdgwAGQg1AHhFgQQhHgQgig0QgcgqgIhOQhHCfh6BUQhaA/hXAFQiqALhyhkQh9htABjNQABhnBYl2QBom7AMhHQANhSgKgmQgKgogqgcIBehKQDShGBOB7QBFBrgwDQQgTBXhgFnQhVFRgBBrQAABBAbAhQAXAdArAAQA8ABBXhVQBOhNAmhOQA2hwBGkEQBCj6ASiSQgEg1AGgoQALhMA7gZQAQgHAngGQApgGAZABIAFBPQBxAQAsAoQA5A1goBrQhACpgzDAQg2DMgVCoQgMBXABAiQAFBpA9AjIAIgeQBBjoAkiHQBEj5AHhrQAGhig2gkIBfhKIBJAnQCDgLA/BDQAgAiAGAvQAEAjgJAzQBVhPBQgbQBhggBuAmQBgAhAzBpQAqBYAABoQgBChgUBVQgcB5hSBZQhvCGiwAyQi/A3ijhRQgSBKgEAkQgGAwAIAwIB2AXIhfBKQhkAghFADIgQABQhfAAg3g3gAI8B9Qh+CygiBeQAXAkAyAPQAyAPAlgSQBvg5A4jPQAVhOAEhIQAEhCgNgUIgFAAQgwAAiCC0g");
	this.shape_13.setTransform(136.6,-4.6,0.576,0.576);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("A7AKSIAGgXQAdAcBygIQBxgJAmgfQBlhSAOgOQAxgvAyhPQBhibBDibQAvhpBJjXQAfDtgCCEQgBh5gcjNQhJDUgvBrQhDCchhCbQgyBOgxAvQgQAQhjBQQgtAmiEADIgVABQhvAAAJgpgAR7KqQhPgRg7glQg0ggg7g+Qg5BCg0AcQg8AghWADQguABgxgJQg7gLgegVQhCgtghhNQgfhJAFhTQAEBIAfA8QAhBAA5AoQAeAVA7ALQAxAJAugCQBDgCAxgTQAvgSAqgmIAgggQgXgqgKgWQgqhfAEh3QAFB+A6BdQAWAlAEADQACAEAjAgQAvAsAvAZQAzAcBDAOQD5A2Cri5QBKhQArhuQAqhsADhxQAEB1gmBzQgnB2hLBXQhQBehpAnQhGAahMAAQgyAAg1gLgAukJ4IADgqQAmAJB1geQBzgdAhgZQBQg9B9k5QBukSA9j2QAiiIAEh4QAHBGgYCFQgkDQiCFTQiNF2haBEQgiAZh0AeQhZAXgrAAQgPAAgJgDgAmVJYQAPgXAKgRQBVAFBfggQBqgkAcg4QBBiBBeiZQB5jBBdhmQApgtAqgEQAvgFABA6QgDgPgQgRQgIgIgQACQgOABgKAIQhfBMiSDsQhjChhZC0QgeA7h8AhQhNAUhAAAQgbAAgZgEgAKJBbQBGjPARhDQAHgeADgdQAEAsgOA5QgPA+hAC7Qg6C4gFBmQgGhnA9jIgA09C1QARhMAMh2QAJheADhfQgBBogJBqQgMCFgTBTIgbB7IgPAagARaB2QAehuAmhIQAzhjA+g/QBEhFBWggQAbAKAcAPQhsAahRBKQhKBDg7BxQghA/gcBhQgjBzgEBZQgEhbAkiFgAColGQAbhZAdiMIALgyQAIgjADgYQAEAcgKAzQgFAcgLAsQgaB+gWBOQgVBKgmBpIgYAXQA2iTAVhIgA5amEQgWiug9hEIAXgKQArBIARCKQALBZABBgQgDhKgJhFgAnQpVQgZg4gpgjIAfgKQAUAbAPAfQAWAygGAxQgDgbgNgdgAgvqtIAOgGQAJAdgDAlIAAAHQgDgcgRgng");
	this.shape_14.setTransform(7.8,65.3,0.576,0.576);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FF7FE5","#FFCBFF"],[0,1],0.8,-23.8,-0.7,25.7).s().p("AOZEAIAEgSQAIgqgFgWQgGgcgbgKQAzg3A1gKQBAgMAbBJQAbBLgLBcQhVgWhkgVgAwehMQgPhwgngsQA3gbBSABQBTACANAeQAbA/AECMQADB3gOB8QhiANhpASQAVi+gRiJgAIcDEQASg0AdgtQAdguAkghQBCg7BVgMQBVgMBLArQhFAQg1AuQgvArgmBJQgNAZgOAnQhWgOhngMgAqWgoQAFgUgHgTQAsgSA0gIQBHgMAOAXQAWAjAADuIiBAKQgEg8gLhSQgfBZgXA8IhsANQBRibAYhegAEICsIAJglQAGgjgDgMQgDgOgVgTQgqAXhABZQh+gFh4ACQAghqAUhfQAVhiAEhCQABgVgDgPQgDgMgIgSQB7g4A2AuQAQANgGArQgDAYgKAoQgTBbgRA5QgOAtgiBfIA/g+QA9g7BHgiQBFgjA4gCQA6gCAaAiQAcAlgSBJQgHAegZBKQhggJhMgEgAlOA0QALgxAThlIAKg4QACgcgNgdQgQgkgagXQAlgNAkgFQAqgHAeAFQA2AHAFAsQADARgEAeIgFA4QgDAngXBVQgWBRgiBiQhMACg7AEQARg2APhDg");
	this.shape_15.setTransform(8.8,50,0.893,0.893);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF7FE5").s().p("A7AKkQBCkOAdj7QAjkwgcjdQgXivg9hDQBWgrB/ADQCBADAUAvQA0B5gEEoQgEEEglCmIgrDAQCIjnBIiKQB7jrAjiQQAHgfgLgeQBGgbBQgNQBugSAWAjQAeAxADE8QABBkgFE+QByj1AuiTQAmh9AykPIAQhYQADgqgVguQgYg3gpgkQA6gUA4gIQBAgKAwAGQBSALAJBFQAEAagFAvIgJBXQgFBFgsCdQgrCbg+CmQiYGhhiBKQghAZh1AeQh3AegkgKQAFhzALh/QALiAACglQAIiagjkKQhKDVguBrQhDCbhiCbQgxBPgxAvQgQAPhkBRQgtAliDAEIgVAAQhwAAAKgogAR7K7QhQgRg7gkQgzggg8g/Qg4BCg1AdQg7AfhWADQguACgxgJQg7gLgfgVQhKgzgghZQgehUAPhcQAMhDAih1QAmiAALg2QALg1gFgUQgFgVghgdQheA0ifD8QhrCqhiDHQgfA8h8AgQhvAdhSgNQB9i5B7mJQB1l2AOjmQACgfgGgYQgEgTgNgcQDBhXBUBIQAYAUgJBDQgFAlgQA/QgdCMgaBZQgWBIg1CTIBhhfQBghcBug4QBrg2BXgDQBagDAoA1QArA7gcBzQgJAmgsCCQgsCFgTBNQhAEDBeA+QAxAgBJgSQArgLBLgnIgSgcQhiifA1jiQAxjUCRiGQBnheCDgSQCFgTB0BCQhsAahRBJQhKBDg6ByQgcA0gbBUQgfBigKBTQgcDgCEAEQBgACBOiqQA1h0AbiMQAMhBgHgiQgJgpgqgQQBPhVBRgPQBkgTApByQAsB2gTCSQgTCQhKB3QhPB/h2A6QhWAqhiAAQgyAAg1gLg");
	this.shape_16.setTransform(7.9,64.3,0.576,0.576);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF63DD").s().p("A5SLrQhEAAglgSQgrgVAKgoQBAkHAdj9QAjkwgbjXQgbjThQgmQBbhGCiABQBIABAzARQA3ATAOAhQA0B6gCEoQgCELgoCyQBHh4BOijQBai+AYhiQAFgVgHgUQgIgVgQgDQBfgtBqgPQB/gTAgAzQAfAzAGECQADBxgEDoQBFiTAviwQAeh2AojUQANhKABgPQAAgogbgwQgjg9g7gYQBEgfBNgQQBZgTBBAJQBmANAOBVQAGAfgFA0IgJBcQgFBJgtCfQgtCfg+CpQicGmhnBOQgxAliWAhQifAiADgvQAQjTAIh6QAOjegTiPQhfETiWDsQg3BYhBA8QglAig/AwQgaAVg+AOQg7ANg8AAIgEAAgAR2LZQhFgPg+ghQg+gigwgyQhdBsiiAGQg+ACg8gPQg0gMgdgUQhPg3glheQgjheARhoQAMhKAhhsQAkh3AOhBQAHgkAAgOQgBgTgMgKQglAUhMBqQggAqhhCSQgyBMg6BtIhNCWQgwBgjJAbQhNAKgzgIQg1gIAQgVQB8iqCAmWQB5l/AOjjQACghgIgZQgEgMgVguQBjgwBHgLQBqgRA+A1QAgAbgEA9QgBAVgWBsQgTBbgYBdQgZBegRAuQBvhrB6g5QB0g2BeAFQBgAFAqBBQAtBFgdB7QgUBPhAC5Qg3CvgDBsQgGBpBCAXQA9AVBkg1QhnimA1jrQAyjgCaiQQCGh5CngDQCggDB9BnQiFALhfBKQhTBChBB7QgyBigbB6QgWBeADBGQAEBzBKACQBPACBHikQAxhxAXh7QAOhHgMgaQgNgeg9gBQAcgsAygpQA4gsA3gSQCPgtA4CaQAuB+gUCaQgVCYhPB9QhTCGh+A9QhcAshnAAQg2AAg5gMg");
	this.shape_17.setTransform(7.8,64.3,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.2,-63.9,413.5,171.4);
p.frameBounds = [rect];


(lib.orientation_lock_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUD6ICdAAIAAj6QAAjIiMiLQiNiIjIAAQhJAAhCAUIAAlMQBEgMBHAAQFQABDpDoQDoDpAAFNIAAD6ICbAAIk7Img");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.8,-80,109.7,160);
p.frameBounds = [rect];


(lib.orientation_lock_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhFBHQgegfABgoQgBgoAegdQAegdAnAAQApAAAeAdQAcAdAAAoQAAAogcAfQgeAdgpAAQgnAAgegdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,20,20);
p.frameBounds = [rect];


(lib.orientation_lock_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Am3A8QgZAAgRgSQgRgRgBgZQABgYARgRQARgSAZAAINvAAQAZAAARASQARARABAYQgBAZgRARQgRASgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-6,100,12);
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
	this.shape.graphics.f("#000000").s().p("EgVFAgzMAAAhBlMAqLAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-210,270,420);
p.frameBounds = [rect];


(lib.orientation_lock_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgSaArvQiFABheheQheheAAiEMAAAhNeQAAiFBeheQBeheCFAAMAk1AAAQCFAABdBeQBfBeAACFMAAABNeQAACEhfBeQhdBeiFgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-280,300,560);
p.frameBounds = [rect];


(lib.instruction_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.wardrobe_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-210,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-100,420,200);
p.frameBounds = [rect];


(lib.wardrobe_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_img();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-300,300,600);
p.frameBounds = [rect];


(lib.title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_3_img();
	this.instance.setTransform(-250,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-140,500,280);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_2_img();
	this.instance.setTransform(-250,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-140,500,280);
p.frameBounds = [rect];


(lib.title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_1_img();
	this.instance.setTransform(-250,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-140,500,280);
p.frameBounds = [rect];


(lib.stick_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stick_img();
	this.instance.setTransform(-150,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-20,300,40);
p.frameBounds = [rect];


(lib.shoes_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes4_img();
	this.instance.setTransform(-15,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjgHCIAAuDIHBAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-45,45,90);
p.frameBounds = [rect];


(lib.shoes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes4_img();
	this.instance.setTransform(-70,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDHCIAAuDIcHAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-45,180,90);
p.frameBounds = [rect];


(lib.shoes_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes3_img();
	this.instance.setTransform(-15,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjgHCIAAuDIHBAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-45,45,90);
p.frameBounds = [rect];


(lib.shoes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes3_img();
	this.instance.setTransform(-69.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDHCIAAuDIcHAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-45,180,90);
p.frameBounds = [rect];


(lib.shoes_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes2_img();
	this.instance.setTransform(-15,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjgHCIAAuDIHBAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-45,45,90);
p.frameBounds = [rect];


(lib.shoes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes2_img();
	this.instance.setTransform(-70,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDHCIAAuDIcHAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-45,180,90);
p.frameBounds = [rect];


(lib.shoes_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes1_img();
	this.instance.setTransform(-16,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjgHCIAAuDIHBAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-45,45,90);
p.frameBounds = [rect];


(lib.shoes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes1_img();
	this.instance.setTransform(-69.5,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDHCIAAuDIcHAAIAAODg");
	this.shape.setTransform(0,0,1,1,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.4,-59.9,192.9,119.8);
p.frameBounds = [rect];


(lib.shelf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_img();
	this.instance.setTransform(-150,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-15,300,30);
p.frameBounds = [rect];


(lib.shadows_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i14_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h2s4_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h2s5_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s4_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h2s3_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i15_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s4_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i23_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i4_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s4_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_2_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i17_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i17_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s3_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i3_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i1_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i21_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s3_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_4_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i24_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_5_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_5_img();
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadow_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_decor_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
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


(lib.lips_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l5_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i2_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i18_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i21_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i21_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i4_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l3_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l2_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i20_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l2_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l5_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l6_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l6_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i2_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i6_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l6_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l6_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l6_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l1_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i19_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l2_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_img();
	this.instance.setTransform(-20,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.indicator_part_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_0_img();
	this.instance.setTransform(-200,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-30,400,60);
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


(lib.indicator_part_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_3_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.indicator_part_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.indicator_part_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.hero4_swimsuit_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// купальник
	this.instance = new lib.hero4_swimsuit1_img();
	this.instance.setTransform(-51.9,-87.5);

	this.instance_1 = new lib.hero4_swimsuit2_img();
	this.instance_1.setTransform(-42.6,-91.9);

	this.instance_2 = new lib.hero4_swimsuit3_img();
	this.instance_2.setTransform(-41.1,-88);

	this.instance_3 = new lib.hero4_swimsuit4_img();
	this.instance_3.setTransform(-40.1,-89.4);

	this.instance_4 = new lib.hero4_swimsuit5_img();
	this.instance_4.setTransform(-35.6,-56.7);

	this.instance_5 = new lib.hero4_swimsuit6_img();
	this.instance_5.setTransform(-52.8,-88.9);

	this.instance_6 = new lib.hero4_swimsuit7_img();
	this.instance_6.setTransform(-60.9,-87.7);

	this.instance_7 = new lib.hero4_swimsuit8_img();
	this.instance_7.setTransform(-40.1,-85.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.9,-87.5,104,175);
p.frameBounds = [rect, new cjs.Rectangle(-42.6,-91.9,94,158), new cjs.Rectangle(-41.1,-88,94,152), new cjs.Rectangle(-40.1,-89.4,90,155), new cjs.Rectangle(-35.6,-56.7,88,123), new cjs.Rectangle(-52.8,-88.9,105,178), new cjs.Rectangle(-60.9,-87.7,157,172), new cjs.Rectangle(-40.1,-85.4,92,150)];


(lib.hero4_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// обувь
	this.instance = new lib.hero4_shoes1_img();
	this.instance.setTransform(-6.4,286.3);

	this.instance_1 = new lib.hero4_shoes2_img();
	this.instance_1.setTransform(-5.6,292.6);

	this.instance_2 = new lib.hero4_shoes3_img();
	this.instance_2.setTransform(-5.2,293.8);

	this.instance_3 = new lib.hero4_shoes4_img();
	this.instance_3.setTransform(-4.9,283);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6.4,286.3,32,77);
p.frameBounds = [rect, new cjs.Rectangle(-5.6,292.6,30,65), new cjs.Rectangle(-5.2,293.8,30,66), new cjs.Rectangle(-4.9,283,30,76), null];


(lib.hero4_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shadows1_img();
	this.instance.setTransform(-91,-40.2);

	this.instance_1 = new lib.hero4_shadows2_img();
	this.instance_1.setTransform(-91,-40.2);

	this.instance_2 = new lib.hero4_shadows3_img();
	this.instance_2.setTransform(-91,-40.2);

	this.instance_3 = new lib.hero4_shadows4_img();
	this.instance_3.setTransform(-91,-40.2);

	this.instance_4 = new lib.hero4_shadows5_img();
	this.instance_4.setTransform(-91,-40.2);

	this.instance_5 = new lib.hero4_shadows6_img();
	this.instance_5.setTransform(-91,-40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-40.2,186,83);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero4_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_rouge1_img();
	this.instance.setTransform(-84.2,-39.5);

	this.instance_1 = new lib.hero4_rouge2_img();
	this.instance_1.setTransform(-84.2,-39.5);

	this.instance_2 = new lib.hero4_rouge3_img();
	this.instance_2.setTransform(-84.2,-39.5);

	this.instance_3 = new lib.hero4_rouge4_img();
	this.instance_3.setTransform(-84.2,-39.5);

	this.instance_4 = new lib.hero4_rouge5_img();
	this.instance_4.setTransform(-84.2,-39.5);

	this.instance_5 = new lib.hero4_rouge6_img();
	this.instance_5.setTransform(-84.2,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.2,-39.5,168,79);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero4_pareo_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// парео
	this.instance = new lib.hero4_pareo1_img();
	this.instance.setTransform(-55.6,26.3);

	this.instance_1 = new lib.hero4_pareo2_img();
	this.instance_1.setTransform(-73.2,-6.9);

	this.instance_2 = new lib.hero4_pareo3_img();
	this.instance_2.setTransform(-63.2,-67.1);

	this.instance_3 = new lib.hero4_pareo4_img();
	this.instance_3.setTransform(-54.2,7.3);

	this.instance_4 = new lib.hero4_pareo5_img();
	this.instance_4.setTransform(-53.9,-87.4);

	this.instance_5 = new lib.hero4_pareo6_img();
	this.instance_5.setTransform(-53.7,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.6,26.3,113,131);
p.frameBounds = [rect, new cjs.Rectangle(-73.2,-6.9,132,307), new cjs.Rectangle(-63.2,-67.1,151,385), new cjs.Rectangle(-54.2,7.3,111,128), new cjs.Rectangle(-53.9,-87.4,136,366), new cjs.Rectangle(-53.7,7.1,118,282), null];


(lib.hero4_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_lips1_img();
	this.instance.setTransform(-33.5,-20.8);

	this.instance_1 = new lib.hero4_lips2_img();
	this.instance_1.setTransform(-33.5,-20.8);

	this.instance_2 = new lib.hero4_lips3_img();
	this.instance_2.setTransform(-33.5,-20.8);

	this.instance_3 = new lib.hero4_lips4_img();
	this.instance_3.setTransform(-33.5,-20.8);

	this.instance_4 = new lib.hero4_lips5_img();
	this.instance_4.setTransform(-33.5,-20.8);

	this.instance_5 = new lib.hero4_lips6_img();
	this.instance_5.setTransform(-33.5,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.5,-20.8,67,42);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero4_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_head1_img();
	this.instance.setTransform(-121.3,-138.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.3,-138.4,243,277);
p.frameBounds = [rect];


(lib.hero4_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero4_hair1_img();
	this.instance.setTransform(-123.8,-73.1);

	this.instance_1 = new lib.hero4_hair2_img();
	this.instance_1.setTransform(-72.2,-72.7);

	this.instance_2 = new lib.hero4_hair3_img();
	this.instance_2.setTransform(-76.2,-87.3);

	this.instance_3 = new lib.hero4_hair4_img();
	this.instance_3.setTransform(-114,-103.7);

	this.instance_4 = new lib.hero4_hair5_img();
	this.instance_4.setTransform(-90.7,-80.7);

	this.instance_5 = new lib.hero4_hair6_img();
	this.instance_5.setTransform(5.1,-135.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.8,-73.1,248,450);
p.frameBounds = [rect, new cjs.Rectangle(-72.2,-72.7,192,249), new cjs.Rectangle(-76.2,-87.3,158,247), new cjs.Rectangle(-114,-103.7,278,402), new cjs.Rectangle(-90.7,-80.7,210,314), new cjs.Rectangle(5.1,-135.7,219,181)];


(lib.hero4_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_fringe1_img();
	this.instance.setTransform(-67.9,-96);

	this.instance_1 = new lib.hero4_fringe2_img();
	this.instance_1.setTransform(-75.8,-89.6);

	this.instance_2 = new lib.hero4_fringe3_img();
	this.instance_2.setTransform(-61.2,-97.2);

	this.instance_3 = new lib.hero4_fringe4_img();
	this.instance_3.setTransform(-57.5,-128.8);

	this.instance_4 = new lib.hero4_fringe5_img();
	this.instance_4.setTransform(-70.7,-95.7);

	this.instance_5 = new lib.hero4_fringe6_img();
	this.instance_5.setTransform(-58.6,-89.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.9,-96,136,192);
p.frameBounds = [rect, new cjs.Rectangle(-75.8,-89.6,145,202), new cjs.Rectangle(-61.2,-97.2,148,247), new cjs.Rectangle(-57.5,-128.8,119,114), new cjs.Rectangle(-70.7,-95.7,171,155), new cjs.Rectangle(-58.6,-89.2,118,95)];


(lib.hero4_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_eyes1_1_img();
	this.instance.setTransform(-103,-50.5);

	this.instance_1 = new lib.hero4_eyes1_2_img();
	this.instance_1.setTransform(-103,-50.5);

	this.instance_2 = new lib.hero4_eyes1_3_img();
	this.instance_2.setTransform(-103,-50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-50.5,221,102);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero4_eyebrows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyebrows_img();
	this.instance.setTransform(-90.9,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.9,-25.9,182,52);
p.frameBounds = [rect];


(lib.hero4_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_body_img();
	this.instance.setTransform(-98.2,-234.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.2,-234.7,197,470);
p.frameBounds = [rect];


(lib.hero4_accessory_all2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory4_img();
	this.instance.setTransform(-28,-55);

	this.instance_1 = new lib.hero4_accessory5_img();
	this.instance_1.setTransform(-27,-55);

	this.instance_2 = new lib.hero4_accessory6_img();
	this.instance_2.setTransform(-29,-39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-55,56,110);
p.frameBounds = [rect, new cjs.Rectangle(-27,-55,43,114), new cjs.Rectangle(-29,-39,53,103), null];


(lib.hero4_accessory_all1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory1_img();
	this.instance.setTransform(-46.5,-18.5);

	this.instance_1 = new lib.hero4_accessory2_img();
	this.instance_1.setTransform(-53.5,-18.5);

	this.instance_2 = new lib.hero4_accessory3_img();
	this.instance_2.setTransform(-45.5,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.5,-18.5,93,37);
p.frameBounds = [rect, new cjs.Rectangle(-53.5,-18.5,99,45), new cjs.Rectangle(-45.5,-16.5,82,42), null];


(lib.hero3_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// купальник
	this.instance = new lib.hero3_top1_img();
	this.instance.setTransform(-39.6,-53.2);

	this.instance_1 = new lib.hero3_top2_img();
	this.instance_1.setTransform(-38.1,-54);

	this.instance_2 = new lib.hero3_top3_img();
	this.instance_2.setTransform(-38.6,-54.7);

	this.instance_3 = new lib.hero3_top4_img();
	this.instance_3.setTransform(-39.3,-54.4);

	this.instance_4 = new lib.hero3_top5_img();
	this.instance_4.setTransform(-38.7,-54.7);

	this.instance_5 = new lib.hero3_top6_img();
	this.instance_5.setTransform(-38.7,-52);

	this.instance_6 = new lib.hero3_top7_img();
	this.instance_6.setTransform(-39.2,-55.2);

	this.instance_7 = new lib.hero3_top8_img();
	this.instance_7.setTransform(-38.9,-54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.6,-53.2,79,106);
p.frameBounds = [rect, new cjs.Rectangle(-38.1,-54,77,71), new cjs.Rectangle(-38.6,-54.7,78,95), new cjs.Rectangle(-39.3,-54.4,81,103), new cjs.Rectangle(-38.7,-54.7,79,83), new cjs.Rectangle(-38.7,-52,71,71), new cjs.Rectangle(-39.2,-55.2,75,87), new cjs.Rectangle(-38.9,-54.2,78,76)];


(lib.hero3_tale_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_tale1_img();
	this.instance.setTransform(-202.6,-193.5);

	this.instance_1 = new lib.hero3_tale2_img();
	this.instance_1.setTransform(-104.1,-193.5);

	this.instance_2 = new lib.hero3_tale3_img();
	this.instance_2.setTransform(-86.3,-193.5);

	this.instance_3 = new lib.hero3_tale4_img();
	this.instance_3.setTransform(-98.1,-193.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.6,-193.5,405,387);
p.frameBounds = [rect, new cjs.Rectangle(-104.1,-193.5,248,414), new cjs.Rectangle(-86.3,-193.5,207,392), new cjs.Rectangle(-98.1,-193.5,273,401)];


(lib.hero3_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shadows1_img();
	this.instance.setTransform(-91,-31.8);

	this.instance_1 = new lib.hero3_shadows2_img();
	this.instance_1.setTransform(-91,-31.8);

	this.instance_2 = new lib.hero3_shadows3_img();
	this.instance_2.setTransform(-91,-31.8);

	this.instance_3 = new lib.hero3_shadows4_img();
	this.instance_3.setTransform(-91,-31.8);

	this.instance_4 = new lib.hero3_shadows5_img();
	this.instance_4.setTransform(-91,-31.8);

	this.instance_5 = new lib.hero3_shadows6_img();
	this.instance_5.setTransform(-91,-31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-31.8,186,66);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero3_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_rouge1_img();
	this.instance.setTransform(-78.5,-27.7);

	this.instance_1 = new lib.hero3_rouge2_img();
	this.instance_1.setTransform(-78.5,-27.7);

	this.instance_2 = new lib.hero3_rouge3_img();
	this.instance_2.setTransform(-78.5,-27.7);

	this.instance_3 = new lib.hero3_rouge4_img();
	this.instance_3.setTransform(-78.5,-27.7);

	this.instance_4 = new lib.hero3_rouge5_img();
	this.instance_4.setTransform(-78.5,-27.7);

	this.instance_5 = new lib.hero3_rouge6_img();
	this.instance_5.setTransform(-78.5,-27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.5,-27.7,157,56);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero3_pareo_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgU/AhCMAAxhC/MAirAAAIAAC+IGkAAMAAABA9gABiriQgJAUgdA3QgZAugKAdQAeAKAOgTQANgUARgkQASgjAMgOQATgYAgAAQAWAAAVAHQAWAIATgFQATgFAOgUQAOgUAFgQQAlglBchAQBihFBYhPIivh6Qg8B3glA0Qg1BOhEArQgBAFhVgLIhngOQgSgCg2AwQgYAUgZAYIALAKQAIAFASgDQARgEAUgVQAXgVAbgNQg0AwgOAcQgeA0gaATIADACIARAAQAZABAlgwQAcgjAZABQgiAegQAUQgPAWgLAfIgRAzIAGABIAFABQAfABAMgoQANgogGAFQA0gzALgHQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgU/AhCMAAxhC/MAirAAAIAAC+IGkAAMAAABA9gABiriQgJAUgdA3QgZAugKAdQAeAKAOgTQANgUARgkQASgjAMgOQATgYAgAAQAWAAAVAHQAWAIATgFQATgFAOgUQAOgUAFgQQAlglBchAQBihFBYhPIivh6Qg8B3glA0Qg1BOhEArQgBAFhVgLIhngOQgSgCg2AwQgYAUgZAYIALAKQAIAFASgDQARgEAUgVQAXgVAbgNQg0AwgOAcQgeA0gaATIADACIARAAQAZABAlgwQAcgjAZABQgiAegQAUQgPAWgLAfIgRAzIAGABIAFABQAfABAMgoQANgogGAFQA0gzALgHQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgU/AhCMAAxhC/MAirAAAIAAC+IGkAAMAAABA9gABiriQgJAUgdA3QgZAugKAdQAeAKAOgTQANgUARgkQASgjAMgOQATgYAgAAQAWAAAVAHQAWAIATgFQATgFAOgUQAOgUAFgQQAlglBchAQBihFBYhPIivh6Qg8B3glA0Qg1BOhEArQgBAFhVgLIhngOQgSgCg2AwQgYAUgZAYIALAKQAIAFASgDQARgEAUgVQAXgVAbgNQg0AwgOAcQgeA0gaATIADACIARAAQAZABAlgwQAcgjAZABQgiAegQAUQgPAWgLAfIgRAzIAGABIAFABQAfABAMgoQANgogGAFQA0gzALgHQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgU/AhCMAAxhC/MAirAAAIAAC+IGkAAMAAABA9gABiriQgJAUgdA3QgZAugKAdQAeAKAOgTQANgUARgkQASgjAMgOQATgYAgAAQAWAAAVAHQAWAIATgFQATgFAOgUQAOgUAFgQQAlglBchAQBihFBYhPIivh6Qg8B3glA0Qg1BOhEArQgBAFhVgLIhngOQgSgCg2AwQgYAUgZAYIALAKQAIAFASgDQARgEAUgVQAXgVAbgNQg0AwgOAcQgeA0gaATIADACIARAAQAZABAlgwQAcgjAZABQgiAegQAUQgPAWgLAfIgRAzIAGABIAFABQAfABAMgoQANgogGAFQA0gzALgHQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgU/AhCMAAxhC/MAirAAAIAAC+IGkAAMAAABA9gABiriQgJAUgdA3QgZAugKAdQAeAKAOgTQANgUARgkQASgjAMgOQATgYAgAAQAWAAAVAHQAWAIATgFQATgFAOgUQAOgUAFgQQAlglBchAQBihFBYhPIivh6Qg8B3glA0Qg1BOhEArQgBAFhVgLIhngOQgSgCg2AwQgYAUgZAYIALAKQAIAFASgDQARgEAUgVQAXgVAbgNQg0AwgOAcQgeA0gaATIADACIARAAQAZABAlgwQAcgjAZABQgiAegQAUQgPAWgLAfIgRAzIAGABIAFABQAfABAMgoQANgogGAFQA0gzALgHQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:25.4,y:127}).wait(1).to({graphics:mask_graphics_1,x:25.4,y:127}).wait(1).to({graphics:mask_graphics_2,x:25.4,y:127}).wait(1).to({graphics:mask_graphics_3,x:25.4,y:127}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_5,x:25.4,y:127}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// парео
	this.instance = new lib.hero3_pareo1_img();
	this.instance.setTransform(-79.2,37.8);

	this.instance_1 = new lib.hero3_pareo2_img();
	this.instance_1.setTransform(-79.2,36.3);

	this.instance_2 = new lib.hero3_pareo3_img();
	this.instance_2.setTransform(-52.6,46.8);

	this.instance_3 = new lib.hero3_pareo4_img();
	this.instance_3.setTransform(-57.7,47.3);

	this.instance_4 = new lib.hero3_pareo5_img();
	this.instance_4.setTransform(-66.4,-55.3);

	this.instance_5 = new lib.hero3_pareo6_img();
	this.instance_5.setTransform(-90.7,39.3);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,37.8,168,127);
p.frameBounds = [rect, new cjs.Rectangle(-79.2,36.3,181,290), new cjs.Rectangle(-52.6,46.8,115,133), new cjs.Rectangle(-57.7,47.3,129,195), new cjs.Rectangle(-66.4,-55.3,167,147), new cjs.Rectangle(-90.7,39.3,189,284), null];


(lib.hero3_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_lips1_img();
	this.instance.setTransform(-31.8,-16.5);

	this.instance_1 = new lib.hero3_lips2_img();
	this.instance_1.setTransform(-31.8,-16.5);

	this.instance_2 = new lib.hero3_lips3_img();
	this.instance_2.setTransform(-31.8,-16.5);

	this.instance_3 = new lib.hero3_lips4_img();
	this.instance_3.setTransform(-31.8,-16.5);

	this.instance_4 = new lib.hero3_lips5_img();
	this.instance_4.setTransform(-31.8,-16.5);

	this.instance_5 = new lib.hero3_lips6_img();
	this.instance_5.setTransform(-31.8,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.8,-16.5,64,33);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_head1_img();
	this.instance.setTransform(-116,-129.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116,-129.3,232,259);
p.frameBounds = [rect];


(lib.hero3_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero3_hair1_img();
	this.instance.setTransform(-172.7,-55.2);

	this.instance_1 = new lib.hero3_hair2_img();
	this.instance_1.setTransform(-204.2,-57.2);

	this.instance_2 = new lib.hero3_hair3_img();
	this.instance_2.setTransform(-146,14.8);

	this.instance_3 = new lib.hero3_hair4_img();
	this.instance_3.setTransform(-51.7,-26.7);

	this.instance_4 = new lib.hero3_hair5_img();
	this.instance_4.setTransform(-119.1,-63.7);

	this.instance_5 = new lib.hero3_hair6_img();
	this.instance_5.setTransform(-203.3,-54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172.7,-55.2,343,456);
p.frameBounds = [rect, new cjs.Rectangle(-204.2,-57.2,408,384), new cjs.Rectangle(-146,14.8,289,407), new cjs.Rectangle(-51.7,-26.7,102,103), new cjs.Rectangle(-119.1,-63.7,243,258), new cjs.Rectangle(-203.3,-54.8,409,342)];


(lib.hero3_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe1_img();
	this.instance.setTransform(-44.9,-33.7);

	this.instance_1 = new lib.hero3_fringe2_img();
	this.instance_1.setTransform(-46.2,-37.2);

	this.instance_2 = new lib.hero3_fringe3_img();
	this.instance_2.setTransform(-59.7,-41.7);

	this.instance_3 = new lib.hero3_fringe4_img();
	this.instance_3.setTransform(-60.7,-38.7);

	this.instance_4 = new lib.hero3_fringe5_img();
	this.instance_4.setTransform(-51.6,-41.2);

	this.instance_5 = new lib.hero3_fringe6_img();
	this.instance_5.setTransform(-43.1,-33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.9,-33.7,90,68);
p.frameBounds = [rect, new cjs.Rectangle(-46.2,-37.2,92,71), new cjs.Rectangle(-59.7,-41.7,117,132), new cjs.Rectangle(-60.7,-38.7,118,130), new cjs.Rectangle(-51.6,-41.2,110,110), new cjs.Rectangle(-43.1,-33.8,88,69)];


(lib.hero3_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero3_eyes1_1_img();
	this.instance.setTransform(-102,-25);

	this.instance_1 = new lib.hero3_eyes1_2_img();
	this.instance_1.setTransform(-102,-25);

	this.instance_2 = new lib.hero3_eyes1_3_img();
	this.instance_2.setTransform(-102,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-25,207,54);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_eyebrows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyebrows_img();
	this.instance.setTransform(-86.7,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.7,-13.3,174,27);
p.frameBounds = [rect];


(lib.hero3_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_body1_img();
	this.instance.setTransform(-82.2,-101.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.2,-101.3,164,203);
p.frameBounds = [rect];


(lib.hero3_accessory_all2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory4_img();
	this.instance.setTransform(-27.5,-50);

	this.instance_1 = new lib.hero3_accessory5_img();
	this.instance_1.setTransform(-41.6,-37.1);

	this.instance_2 = new lib.hero3_accessory6_img();
	this.instance_2.setTransform(-31.6,-44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-50,55,100);
p.frameBounds = [rect, new cjs.Rectangle(-41.6,-37.1,64,77), new cjs.Rectangle(-31.6,-44.1,46,103), null];


(lib.hero3_accessory_all1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-43,-18);

	this.instance_1 = new lib.hero3_accessory2_img();
	this.instance_1.setTransform(-39.1,-8);

	this.instance_2 = new lib.hero3_accessory3_img();
	this.instance_2.setTransform(-53.5,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-18,86,36);
p.frameBounds = [rect, new cjs.Rectangle(-39.1,-8,79,36), new cjs.Rectangle(-53.5,-9.5,105,39), null];


(lib.hero2_swimsuit_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// купальники
	this.instance = new lib.hero2_swimsuit1_img();
	this.instance.setTransform(-53.9,-78.6);

	this.instance_1 = new lib.hero2_swimsuit2_img();
	this.instance_1.setTransform(-51.2,-81.1);

	this.instance_2 = new lib.hero2_swimsuit3_img();
	this.instance_2.setTransform(-51.3,-79.7);

	this.instance_3 = new lib.hero2_swimsuit4_img();
	this.instance_3.setTransform(-51.4,-79);

	this.instance_4 = new lib.hero2_swimsuit5_img();
	this.instance_4.setTransform(-51,-78.6);

	this.instance_5 = new lib.hero2_swimsuit6_img();
	this.instance_5.setTransform(-48.7,-79.2);

	this.instance_6 = new lib.hero2_swimsuit7_img();
	this.instance_6.setTransform(-48.2,-83.3);

	this.instance_7 = new lib.hero2_swimsuit8_img();
	this.instance_7.setTransform(-51.2,-83.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.9,-78.6,108,157);
p.frameBounds = [rect, new cjs.Rectangle(-51.2,-81.1,102,160), new cjs.Rectangle(-51.3,-79.7,100,159), new cjs.Rectangle(-51.4,-79,106,157), new cjs.Rectangle(-51,-78.6,107,157), new cjs.Rectangle(-48.7,-79.2,101,158), new cjs.Rectangle(-48.2,-83.3,109,163), new cjs.Rectangle(-51.2,-83.7,101,163)];


(lib.hero2_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// обувь
	this.instance = new lib.hero2_shoes1_img();
	this.instance.setTransform(-81.4,312.5);

	this.instance_1 = new lib.hero2_shoes2_img();
	this.instance_1.setTransform(-82.5,310.5);

	this.instance_2 = new lib.hero2_shoes3_img();
	this.instance_2.setTransform(-81.8,305.9);

	this.instance_3 = new lib.hero2_shoes4_img();
	this.instance_3.setTransform(-80.7,313);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.4,312.5,139,61);
p.frameBounds = [rect, new cjs.Rectangle(-82.5,310.5,140,72), new cjs.Rectangle(-81.8,305.9,139,65), new cjs.Rectangle(-80.7,313,140,70), null];


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-93.6,-37);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-93.6,-37);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-93.6,-37);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-93.6,-37);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-93.6,-37);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-93.6,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.6,-37,190,77);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-79,-25);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-79,-25);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-79,-25);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-79,-25);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-79,-25);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-79,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-25,158,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_pareo_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// парео
	this.instance = new lib.hero2_pareo1_img();
	this.instance.setTransform(-89.4,16.5);

	this.instance_1 = new lib.hero2_pareo2_img();
	this.instance_1.setTransform(-41.2,12);

	this.instance_2 = new lib.hero2_pareo3_img();
	this.instance_2.setTransform(-40.7,17.3);

	this.instance_3 = new lib.hero2_pareo4_img();
	this.instance_3.setTransform(-45.7,12.4);

	this.instance_4 = new lib.hero2_pareo5_img();
	this.instance_4.setTransform(-87,-80.5);

	this.instance_5 = new lib.hero2_pareo6_img();
	this.instance_5.setTransform(-71.8,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.4,16.5,198,310);
p.frameBounds = [rect, new cjs.Rectangle(-41.2,12,106,131), new cjs.Rectangle(-40.7,17.3,123,100), new cjs.Rectangle(-45.7,12.4,111,129), new cjs.Rectangle(-87,-80.5,154,179), new cjs.Rectangle(-71.8,21.9,163,144), null];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-35.6,-20.2);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-35.6,-20.2);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-35.6,-20.2);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-35.6,-20.2);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-35.6,-20.2);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-35.6,-20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.6,-20.2,71,41);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_head1_img();
	this.instance.setTransform(-139.4,-152.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.4,-152.9,279,306);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-119.2,-69.2);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-86.1,-66.2);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-105.7,-98.7);

	this.instance_3 = new lib.hero2_hair4_img();
	this.instance_3.setTransform(-93.8,-98.2);

	this.instance_4 = new lib.hero2_hair5_img();
	this.instance_4.setTransform(-75.7,-62.7);

	this.instance_5 = new lib.hero2_hair6_img();
	this.instance_5.setTransform(-169.7,-57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.2,-69.2,253,479);
p.frameBounds = [rect, new cjs.Rectangle(-86.1,-66.2,203,266), new cjs.Rectangle(-105.7,-98.7,184,372), new cjs.Rectangle(-93.8,-98.2,193,190), new cjs.Rectangle(-75.7,-62.7,157,257), new cjs.Rectangle(-169.7,-57.7,329,394)];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-84.4,-97.4);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-78.6,-78.1);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-50.8,-72.5);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-44.7,-66.5);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-61.4,-81.3);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-84.7,-65.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.4,-97.4,169,195);
p.frameBounds = [rect, new cjs.Rectangle(-78.6,-78.1,173,146), new cjs.Rectangle(-50.8,-72.5,102,123), new cjs.Rectangle(-44.7,-66.5,91,85), new cjs.Rectangle(-61.4,-81.3,127,202), new cjs.Rectangle(-84.7,-65.7,147,126)];


(lib.hero2_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_eyes1_1_img();
	this.instance.setTransform(-103,-29.8);

	this.instance_1 = new lib.hero2_eyes1_2_img();
	this.instance_1.setTransform(-103,-29.8);

	this.instance_2 = new lib.hero2_eyes1_3_img();
	this.instance_2.setTransform(-103,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-29.8,208,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body1_img();
	this.instance.setTransform(-87,-236.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87,-236.7,174,474);
p.frameBounds = [rect];


(lib.hero2_accessory_all2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-18,-43.5);

	this.instance_1 = new lib.hero2_accessory5_img();
	this.instance_1.setTransform(-23,-35);

	this.instance_2 = new lib.hero2_accessory6_img();
	this.instance_2.setTransform(-23.5,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-43.5,36,87);
p.frameBounds = [rect, new cjs.Rectangle(-23,-35,59,82), new cjs.Rectangle(-23.5,-9.5,60,56), null];


(lib.hero2_accessory_all1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-45.5,-14.5);

	this.instance_1 = new lib.hero2_accessory2_img();
	this.instance_1.setTransform(-42.5,-20);

	this.instance_2 = new lib.hero2_accessory3_img();
	this.instance_2.setTransform(-46,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-14.5,91,29);
p.frameBounds = [rect, new cjs.Rectangle(-42.5,-20,86,31), new cjs.Rectangle(-46,-13.5,93,28), null];


(lib.hero1_top_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An9LBIAA2BINHAAIAAEiIC0AAIAARfgAjWh/IANAbQAkCXAMBVIAPCSQAGA5AUAxIDKgKQgQhYgQgsQgRgsgQgfQgdg2gFhjQgGhihFirQgLgDgKAAQhCAAgrB/g");
	mask.setTransform(1.3,8.2);

	// Слой 1
	this.instance = new lib.hero1_top7_img();
	this.instance.setTransform(-22,-44.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-44.1,64,66);
p.frameBounds = [rect];


(lib.hero1_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An9LBIAA2BINHAAIAAEiIC0AAIAARfgAjWh/IANAbQAkCXAMBVIAPCSQAGA5AUAxIDKgKQgQhYgQgsQgRgsgQgfQgdg2gFhjQgGhihFirQgLgDgKAAQhCAAgrB/g");
	mask.setTransform(1.3,8.2);

	// Слой 1
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-39.5,-46.1);

	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(-21.5,-47.1);

	this.instance_2 = new lib.hero1_top3_img();
	this.instance_2.setTransform(-22.7,-43.6);

	this.instance_3 = new lib.hero1_top4_img();
	this.instance_3.setTransform(-21.5,-44.4);

	this.instance_4 = new lib.hero1_top5_img();
	this.instance_4.setTransform(-25.7,-19.4);

	this.instance_5 = new lib.hero1_top6_img();
	this.instance_5.setTransform(-22.7,-44);

	this.instance_6 = new lib.hero1_top7_img();
	this.instance_6.setTransform(-22,-44.1);

	this.instance_7 = new lib.hero1_top8_img();
	this.instance_7.setTransform(-22,-44.1);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-46.1,79,92);
p.frameBounds = [rect, new cjs.Rectangle(-21.5,-47.1,61,63), new cjs.Rectangle(-22.7,-43.6,62,65), new cjs.Rectangle(-21.5,-44.4,61,60), new cjs.Rectangle(-25.7,-19.4,65,62), new cjs.Rectangle(-22.7,-44,63,59), rect=new cjs.Rectangle(-22,-44.1,64,66), rect];


(lib.hero1_tale_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale1_img();
	this.instance.setTransform(-150.2,-168.5);

	this.instance_1 = new lib.hero1_tale2_img();
	this.instance_1.setTransform(-153.6,-169.7);

	this.instance_2 = new lib.hero1_tale3_img();
	this.instance_2.setTransform(-121.8,-178.5);

	this.instance_3 = new lib.hero1_tale4_img();
	this.instance_3.setTransform(-160.8,-182.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.2,-168.5,300,337);
p.frameBounds = [rect, new cjs.Rectangle(-153.6,-169.7,293,370), new cjs.Rectangle(-121.8,-178.5,261,361), new cjs.Rectangle(-160.8,-182.5,300,422)];


(lib.hero1_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-76.8,-44.8);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-76.8,-44.8);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-76.8,-44.8);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-76.8,-44.8);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-76.8,-44.8);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-76.8,-44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.8,-44.8,154,97);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-69,-33.2);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-69,-33.2);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-69,-33.2);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-69,-33.2);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-69,-33.2);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-69,-33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-33.2,138,67);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_pareo_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnbAi6MAAAhFzMAuhAAAIAAC+MAgWAAAMAAABC1gAJMpzQAbAhAQAAQADAAAKgGIADABIAFAAIAHgBIAGgCIAAgMQgKgbgUg8QgRgzgLgZIASAAQAXABAQAhQAQAgAOAHQAOAHAHgFQAEgEADgEQgbg8gSgTIgSgVQhigMhNgVQhOgUgQgnIABAAQhflagNg4QgOg4gcg4Qgdg5gFhuQgGhtg7iwQhbACgxCUIANAaQAnCoAHAyQAGAyATB6QAUB5DGE6IAAAAQAOA2ArAhQAzAnBCgKQALAUAZA3QAhBAAaAAQAGAAAEgCIgXgwIAAgCIAcAlg");
	mask.setTransform(-4,93.3);

	// Слой 1
	this.instance = new lib.hero1_pareo5_img();
	this.instance.setTransform(-62.7,-37.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.7,-37.7,113,88);
p.frameBounds = [rect];


(lib.hero1_pareo_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgnbAi6MAAAhFzMAuhAAAIAAC+MAgWAAAMAAABC1gAJMpzQAbAhAQAAQADAAAKgGIADABIAFAAIAHgBIAGgCIAAgMQgKgbgUg8QgRgzgLgZIASAAQAXABAQAhQAQAgAOAHQAOAHAHgFQAEgEADgEQgbg8gSgTIgSgVQhigMhNgVQhOgUgQgnIABAAQhflagNg4QgOg4gcg4Qgdg5gFhuQgGhtg7iwQhbACgxCUIANAaQAnCoAHAyQAGAyATB6QAUB5DGE6IAAAAQAOA2ArAhQAzAnBCgKQALAUAZA3QAhBAAaAAQAGAAAEgCIgXgwIAAgCIAcAlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-4,y:93.3}).wait(6).to({graphics:null,x:0,y:0}).wait(1));

	// Слой 1
	this.instance = new lib.hero1_pareo1_img();
	this.instance.setTransform(-65.3,-42.6);

	this.instance_1 = new lib.hero1_pareo2_img();
	this.instance_1.setTransform(-61.5,-37);

	this.instance_2 = new lib.hero1_pareo3_img();
	this.instance_2.setTransform(-63.2,-37.2);

	this.instance_3 = new lib.hero1_pareo4_img();
	this.instance_3.setTransform(-224.7,-42.4);

	this.instance_4 = new lib.hero1_pareo5_img();
	this.instance_4.setTransform(-62.7,-37.7);

	this.instance_5 = new lib.hero1_pareo6_img();
	this.instance_5.setTransform(-62.7,-37.7);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.3,-42.6,131,85);
p.frameBounds = [rect, new cjs.Rectangle(-61.5,-37,121,85), new cjs.Rectangle(-63.2,-37.2,143,111), new cjs.Rectangle(-224.7,-42.4,405,303), rect=new cjs.Rectangle(-62.7,-37.7,113,88), rect, null];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-28.7,-17.5);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-28.7,-17.5);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-28.7,-17.5);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-28.7,-17.5);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-28.7,-17.5);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-28.7,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.7,-17.5,57,35);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head1_img();
	this.instance.setTransform(-125.4,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.4,-132,251,264);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-133.7,-27.2);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-171.7,-75.7);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-273.5,-97.7);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-190.1,-41.7);

	this.instance_4 = new lib.hero1_hair5_img();
	this.instance_4.setTransform(-65.7,-27.7);

	this.instance_5 = new lib.hero1_hair6_img();
	this.instance_5.setTransform(-185.7,-42.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.7,-27.2,331,365);
p.frameBounds = [rect, new cjs.Rectangle(-171.7,-75.7,226,345), new cjs.Rectangle(-273.5,-97.7,222,221), new cjs.Rectangle(-190.1,-41.7,234,197), new cjs.Rectangle(-65.7,-27.7,117,196), new cjs.Rectangle(-185.7,-42.7,290,279)];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-120.2,-59.6);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-86.2,-39.2);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-91,-39.2);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-153.6,-53.7);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-105.7,-37.8);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-100.1,-60.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.2,-59.6,240,119);
p.frameBounds = [rect, new cjs.Rectangle(-86.2,-39.2,92,172), new cjs.Rectangle(-91,-39.2,95,88), new cjs.Rectangle(-153.6,-53.7,158,147), new cjs.Rectangle(-105.7,-37.8,117,213), new cjs.Rectangle(-100.1,-60.9,144,152)];


(lib.hero1_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.hero1_eyes1_1_img();
	this.instance.setTransform(-95.8,-42);

	this.instance_1 = new lib.hero1_eyes1_2_img();
	this.instance_1.setTransform(-95.8,-42);

	this.instance_2 = new lib.hero1_eyes1_3_img();
	this.instance_2.setTransform(-95.8,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.8,-42,178,84);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_eyebrows_img();
	this.instance.setTransform(-73.5,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-23,147,46);
p.frameBounds = [rect];


(lib.hero1_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body1_img();
	this.instance.setTransform(-50.1,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.1,-90.5,100,181);
p.frameBounds = [rect];


(lib.hero1_accessory2_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4_img();
	this.instance.setTransform(-17,-33);

	this.instance_1 = new lib.hero1_accessory5_img();
	this.instance_1.setTransform(-13.5,-59);

	this.instance_2 = new lib.hero1_accessory6_img();
	this.instance_2.setTransform(-22.5,-24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17,-33,34,66);
p.frameBounds = [rect, new cjs.Rectangle(-13.5,-59,45,78), new cjs.Rectangle(-22.5,-24.1,51,65), null];


(lib.hero1_accessory1_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-44,-24);

	this.instance_1 = new lib.hero1_accessory2_img();
	this.instance_1.setTransform(-47.1,-29.6);

	this.instance_2 = new lib.hero1_accessory3_img();
	this.instance_2.setTransform(-35.5,-17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-24,88,48);
p.frameBounds = [rect, new cjs.Rectangle(-47.1,-29.6,95,56), new cjs.Rectangle(-35.5,-17.6,75,38), null];


(lib.headdress_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory3_img();
	this.instance.setTransform(-41,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An1A5IB2jiIK/h0IC2DAIhREEIrcB3g");
	this.shape.setTransform(-0.9,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.2,-29.6,100.6,57.2);
p.frameBounds = [rect];


(lib.headdress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory3_img();
	this.instance.setTransform(-52.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokErIAApVIRJAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-30,110,60);
p.frameBounds = [rect];


(lib.headdress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-46.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzD6IAAnzIPnAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-25,100,50);
p.frameBounds = [rect];


(lib.headdress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory3_img();
	this.instance.setTransform(-37.5,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");
	this.shape.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-30,100,60);
p.frameBounds = [rect];


(lib.headdress_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory2_img();
	this.instance.setTransform(-49.5,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao+AaIB4i1IMViVIDwCJIheE+Is+Cag");
	this.shape.setTransform(-1.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.7,-30,115.1,61);
p.frameBounds = [rect];


(lib.headdress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory2_img();
	this.instance.setTransform(-39.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory2_img();
	this.instance.setTransform(-43,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzD6IAAnzIPnAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-25,100,50);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-47.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");
	this.shape.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-30,100,60);
p.frameBounds = [rect];


(lib.headdress_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory1_img();
	this.instance.setTransform(-46.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao2iXIRthsIgwGuIuhBZg");
	this.shape.setTransform(-1.9,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.6,-26.6,113.5,52.2);
p.frameBounds = [rect];


(lib.headdress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-43,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-45.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzD6IAAnzIPnAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-25,100,50);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-44,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");
	this.shape.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-30,100,60);
p.frameBounds = [rect];


(lib.hanger_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger_1_img();
	this.instance.setTransform(55.1,-33.5,0.72,0.72,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-33.5,110.2,67);
p.frameBounds = [rect];


(lib.bottom_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_tale4_img();
	this.instance.setTransform(-84.2,-123.7,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap/SPIkBqbIHC8HII4AAICdFcIhkPwIKuEoIAgBIIg+H2IqeFcIo2AZg");
	this.shape.setTransform(-0.2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.9,-128,179.6,260.1);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale4_img();
	this.instance.setTransform(-103,-144.8,0.687,0.687);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuZVgIigqmIM+/RIGSj0ILmB8IC9MNIicdqIqFEkg");
	this.shape.setTransform(5.8,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-153.3,217.1,309.7);
p.frameBounds = [rect];


(lib.bottom_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_tale3_img();
	this.instance.setTransform(-63.9,-121,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiHSUIi+myIBlkJIoFzvIJOnNIGSgBIHrHZImtfoIhCAIg");
	this.shape.setTransform(-2,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-126.2,148.5,250.8);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale3_img();
	this.instance.setTransform(-89.6,-123.9,0.687,0.687);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvtLOIJm8OIEmjWIOXBGIC4L3Ih7UMImhGXIp/BOg");
	this.shape.setTransform(-1.7,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.3,-130.4,201.3,260.8);
p.frameBounds = [rect];


(lib.bottom_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_tale2_img();
	this.instance.setTransform(-76.5,-127.8,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7RaIi8kLIHF/AIDFjEIExAAICtCDMAIHAgrIlXGOIr9Avg");
	this.shape.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.4,-131.6,165,267);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale2_img();
	this.instance.setTransform(-100.6,-127,0.687,0.687);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwKK/IG+2+IL3pvINgKZInOfvIwPBVg");
	this.shape.setTransform(5.2,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.6,-142.3,209.4,278.4);
p.frameBounds = [rect];


(lib.bottom_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_tale1_img();
	this.instance.setTransform(-125,-119.4,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0KNgILWmAIE74XICvixIE8gCIDAC4IEeXfIJpGLIh2GvMgn7AAEg");
	this.shape.setTransform(1.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.3,-125.9,267.5,251.9);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale1_img();
	this.instance.setTransform(-103,-115.7,0.687,0.687);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvjSpIhmifMAQxgjDIFhgNIK6IhIBHdrg");
	this.shape.setTransform(-1.3,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.1,-120.1,219.7,244.6);
p.frameBounds = [rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_pointer_img();
	this.instance.setTransform(-55,-55,0.916,0.916);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.body_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.blush_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon4_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon10_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon8_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon8_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon8_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon3_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon9_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon14_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon9_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon5_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon10_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon9_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon3_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon6_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon3_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon6_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.animation_rubbing_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_rubbing_2_img();
	this.instance.setTransform(-40,-50);

	this.instance_1 = new lib.animation_rubbing_3_img();
	this.instance_1.setTransform(-40,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-50,80,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_rubbing_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_rubbing_1_img();
	this.instance.setTransform(-90,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-50,180,100);
p.frameBounds = [rect];


(lib.accessory_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory6_img();
	this.instance.setTransform(-26.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjQJVIiXypILOCyIjCP3g");
	this.shape.setTransform(0.3,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.7,-61.6,72,119.6);
p.frameBounds = [rect];


(lib.accessory_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory6_img();
	this.instance.setTransform(-23,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AhqJcIhnhVIhkv+ID5hnIFyFnIgMMHIhVBQg");
	this.shape.setTransform(-1.1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.1,-63.1,62.1,121.6);
p.frameBounds = [rect];


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory6_img();
	this.instance.setTransform(-30,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory6_img();
	this.instance.setTransform(-25.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqGPIAAsdIJVAAIAAMdg");
	this.shape.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-42,60,80);
p.frameBounds = [rect];


(lib.accessory_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory5_img();
	this.instance.setTransform(-21.5,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai/J1IhYzuIIuBHIhfSsg");
	this.shape.setTransform(-0.4,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.3,-64.8,56,126.9);
p.frameBounds = [rect];


(lib.accessory_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory5_img();
	this.instance.setTransform(-32,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AhPHJIjZieIhxntIAmhtIEZihICVALIFcFuIADFVIjTDTg");
	this.shape.setTransform(0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.7,-46.8,82.1,93.1);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory5_img();
	this.instance.setTransform(-29.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqHCIAAuDIJVAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory5_img();
	this.instance.setTransform(-22.5,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqGQIAAsfIJVAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-40,60,80);
p.frameBounds = [rect];


(lib.accessory_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory4_img();
	this.instance.setTransform(-28,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGJ5IikxNIJLijICKCgIipRQg");
	this.shape.setTransform(-1.5,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.9,-65.3,72.8,126.6);
p.frameBounds = [rect];


(lib.accessory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory4_img();
	this.instance.setTransform(-27.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkyI3IhAuVIG2jjIEvBOIktQ1g");
	this.shape.setTransform(3.3,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.9,-58.8,74.3,115.7);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-18,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqHzIAAvmIJVAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-50,60,100);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4_img();
	this.instance.setTransform(-17,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqGQIAAsfIJVAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-40,60,80);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_3_img();
	this.instance.setTransform(-260,-260,0.897,0.897);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-260,520,520);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFFFF").s().p("EhfSAwcMAAAhg2MC+lAAAMAAABg2g");
	this.shape.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,1220,620);
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


(lib.copyright_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.copyright_img();
	this.instance.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
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


(lib.track_move_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.track_move_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.sound_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_1_img();
	this.instance.setTransform(-35,-35);

	this.instance_1 = new lib.sound_2_img();
	this.instance_1.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, rect];


(lib.skip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.remove_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.remove_1_img();
	this.instance.setTransform(-35,-35,0.583,0.583);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,2,0,3).p("AAAAAIBQBQABQhPIhQBPIhPhPAhPBQIBPhQ");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, null];


(lib.play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.play_again_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.next_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.more_games_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_6_2_img();
	this.instance.setTransform(-0.1,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,0,195.9,198);
p.frameBounds = [rect];


(lib.more_games_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_5_2_img();
	this.instance.setTransform(0.4,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.4,0,71.3,74.2);
p.frameBounds = [rect];


(lib.more_games_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_4_2_img();
	this.instance.setTransform(-93.5,-93.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-93.6,187.2,187.2);
p.frameBounds = [rect];


(lib.more_games_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_3_2_img();
	this.instance.setTransform(0,0.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.2,95.1,126);
p.frameBounds = [rect];


(lib.more_games_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_2_2_img();
	this.instance.setTransform(0,-0.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-0.2,97.9,76.3);
p.frameBounds = [rect];


(lib.logo_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_2_img();
	this.instance.setTransform(-75,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-250,150,500);
p.frameBounds = [rect];


(lib.logo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_1_img();
	this.instance.setTransform(-190,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-90,380,180);
p.frameBounds = [rect];


(lib.instruction_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.full_screen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_1_img();
	this.instance.setTransform(-35,-35);

	this.instance_1 = new lib.full_screen_2_img();
	this.instance_1.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, rect];


(lib.facebook_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_img();
	this.instance.setTransform(-100,-42,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.81,scaleY:0.81,x:-105,y:-44},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-100,y:-42},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-105,y:-44},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-42,200,84.6);
p.frameBounds = [rect, new cjs.Rectangle(-105,-44,210,88.9), new cjs.Rectangle(-100,-42,200,84.6), new cjs.Rectangle(-105,-44,210,88.9)];


(lib.Cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0});

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,0,0.008)").s().p("Aj2D3QhnhnAAiQQAAiPBnhnQBnhnCPAAQCQAABnBnQBnBnAACPQAACQhnBnQhnBniQAAQiPAAhnhng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect];


(lib.credits_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.banner_body_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pic
	this.instance = new lib.banner_2_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.banner_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pic
	this.instance = new lib.banner_1_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.body_title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

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


(lib.redirect_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image_1
	this.instance = new lib.redirect_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:0},10).wait(70).to({alpha:1},10).wait(1));

	// image_2
	this.instance_1 = new lib.redirect_2_mc();
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({alpha:1},10).wait(30).to({alpha:0},10).wait(41));

	// image_3
	this.instance_2 = new lib.redirect_3_mc();
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({alpha:1},10).wait(30).to({alpha:0},10).wait(1));

	// area
	this.instance_3 = new lib.redirect_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// shadow
	this.instance_4 = new lib.redirect_6_mc();
	this.instance_4.setTransform(5,5);
	this.instance_4.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,325,245);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.play_redirect_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_redirect_mc();
	this.instance.setTransform(0,0,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.78,scaleY:0.78,alpha:0.801},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150), new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-75,-75,150,150)];


(lib.cancel_redirect_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cancel_redirect_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.801},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-50,200,100);
p.frameBounds = [rect, new cjs.Rectangle(-105,-52.5,210,105), new cjs.Rectangle(-100,-50,200,100), new cjs.Rectangle(-105,-52.5,210,105)];


(lib.preloader_33_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_32_mc();

	this.instance_1 = new lib.preloader_32_mc();

	this.instance_2 = new lib.preloader_32_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:0}}]},9).to({state:[{t:this.instance_1,p:{x:0}},{t:this.instance,p:{x:8}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:8}},{t:this.instance,p:{x:16}}]},10).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-2.5,-2.5,5,5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-2.5,-2.5,13,5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-2.5,-2.5,21,5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.preloader_30_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.preloader_33_mc();
	this.instance_1.setTransform(62,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-9,106.1,18);
p.frameBounds = [rect];


(lib.preloader_29_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 15
	this.instance = new lib.preloader_5_tween("synched",0);
	this.instance.setTransform(10.8,0,0.011,0.011);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// Layer 14
	this.instance_1 = new lib.preloader_5_tween("synched",0);
	this.instance_1.setTransform(10.8,0,0.011,0.011);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(24));

	// Layer 13
	this.instance_2 = new lib.preloader_5_tween("synched",0);
	this.instance_2.setTransform(10.8,0,0.011,0.011);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(51));

	// Layer 1
	this.instance_3 = new lib.preloader_5_tween("synched",0);
	this.instance_3.setTransform(10.8,0,0.011,0.011);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.8,-4,8,8);
p.frameBounds = [rect, new cjs.Rectangle(6.8,-4,8.1,8.1), new cjs.Rectangle(6.5,-4.3,8.6,8.6), new cjs.Rectangle(6.1,-4.7,9.4,9.4), new cjs.Rectangle(5.5,-5.3,10.6,10.6), new cjs.Rectangle(4.8,-6,12.1,12.1), new cjs.Rectangle(3.9,-6.9,13.9,13.9), new cjs.Rectangle(2.9,-8,16,16), new cjs.Rectangle(1.6,-9.2,18.5,18.5), new cjs.Rectangle(0.2,-10.6,21.3,21.3), new cjs.Rectangle(-1.3,-12.2,24.4,24.4), new cjs.Rectangle(-3,-13.9,27.9,27.9), new cjs.Rectangle(-4.8,-15.8,31.7,31.7), new cjs.Rectangle(-6.9,-17.9,35.8,35.8), new cjs.Rectangle(-9.1,-20.1,40.2,40.2), new cjs.Rectangle(-11.5,-22.5,45,45), new cjs.Rectangle(-14,-25,50.1,50.1), new cjs.Rectangle(-16.7,-27.7,55.5,55.5), new cjs.Rectangle(-19.5,-30.6,61.3,61.3), new cjs.Rectangle(-22.6,-33.7,67.4,67.4), new cjs.Rectangle(-25.7,-36.9,73.8,73.8), new cjs.Rectangle(-29,-40.2,80.5,80.5), new cjs.Rectangle(-32.5,-43.8,87.6,87.6), new cjs.Rectangle(-36.2,-47.5,95,95), new cjs.Rectangle(-40.1,-51.4,102.8,102.8), new cjs.Rectangle(-44,-55.4,110.8,110.8), new cjs.Rectangle(-48.2,-59.6,119.2,119.2), new cjs.Rectangle(-52.5,-63.9,127.9,127.9), new cjs.Rectangle(-57,-68.5,137,137), new cjs.Rectangle(-61.6,-73.1,146.3,146.3), new cjs.Rectangle(-66.3,-78,156,156), new cjs.Rectangle(-71.4,-83,166.1,166.1), new cjs.Rectangle(-76.5,-88.2,176.5,176.5), new cjs.Rectangle(-81.8,-93.6,187.2,187.2), new cjs.Rectangle(-87.2,-99.1,198.2,198.2), new cjs.Rectangle(-92.8,-104.7,209.5,209.5), new cjs.Rectangle(-98.6,-110.6,221.2,221.2), new cjs.Rectangle(-104.5,-116.6,233.2,233.2), new cjs.Rectangle(-110.7,-122.8,245.6,245.6), new cjs.Rectangle(-116.9,-129.1,258.2,258.2), new cjs.Rectangle(-123.3,-135.6,271.2,271.2), new cjs.Rectangle(-130,-142.3,284.6,284.6), new cjs.Rectangle(-136.7,-149.1,298.2,298.2), new cjs.Rectangle(-143.6,-156.1,312.2,312.2), new cjs.Rectangle(-150.7,-163.2,326.5,326.5), new cjs.Rectangle(-157.9,-170.5,341.1,341.1), new cjs.Rectangle(-165.3,-178,356.1,356.1), new cjs.Rectangle(-172.8,-185.7,371.4,371.4), new cjs.Rectangle(-180.6,-193.5,387.1,387.1), new cjs.Rectangle(-188.5,-201.5,403,403), new cjs.Rectangle(-196.6,-209.6,419.3,419.3), new cjs.Rectangle(-204.8,-217.9,435.9,435.9), new cjs.Rectangle(-213.2,-226.4,452.9,452.9), new cjs.Rectangle(-221.7,-235,470.1,470.1), new cjs.Rectangle(-230.4,-243.8,487.7,487.7), new cjs.Rectangle(-239.3,-252.8,505.7,505.7), new cjs.Rectangle(-248.3,-261.9,523.9,523.9), new cjs.Rectangle(-257.5,-271.2,542.5,542.5), new cjs.Rectangle(-266.8,-280.7,561.4,561.4), new cjs.Rectangle(-276.4,-290.3,580.7,580.7), new cjs.Rectangle(-286.1,-300.1,600.3,600.3), new cjs.Rectangle(-295.9,-310.1,620.2,620.2), new cjs.Rectangle(-305.9,-320.2,640.4,640.4), new cjs.Rectangle(-316.1,-330.5,661,661), new cjs.Rectangle(-326.4,-340.9,681.9,681.9), new cjs.Rectangle(-336.9,-351.5,703.1,703.1), new cjs.Rectangle(-347.6,-362.3,724.7,724.7), new cjs.Rectangle(-358.5,-373.3,746.6,746.6), new cjs.Rectangle(-369.4,-384.3,768.7,768.7), new cjs.Rectangle(-380.6,-395.6,791.3,791.3), new cjs.Rectangle(-391.9,-407.1,814.2,814.2), new cjs.Rectangle(-403.4,-418.7,837.4,837.4), new cjs.Rectangle(-414.9,-430.4,860.9,860.9), new cjs.Rectangle(-426.7,-442.3,884.7,884.7), new cjs.Rectangle(-438.7,-454.4,908.9,908.9), new cjs.Rectangle(-450.8,-466.7,933.5,933.5), new cjs.Rectangle(-463.1,-479.1,958.3,958.3), new cjs.Rectangle(-475.6,-491.7,983.5,983.5), new cjs.Rectangle(-488.2,-504.5,1009,1009), new cjs.Rectangle(-500.9,-517.4,1034.8,1034.8), new cjs.Rectangle(-513.9,-530.5,1061,1061), new cjs.Rectangle(-527,-543.7,1087.4,1087.4), new cjs.Rectangle(-540.2,-557.1,1114.2,1114.2), new cjs.Rectangle(-553.6,-570.7,1141.4,1141.4), new cjs.Rectangle(-567.3,-584.4,1168.9,1168.9), new cjs.Rectangle(-581,-598.3,1196.7,1196.7), new cjs.Rectangle(-594.9,-612.4,1224.8,1224.8), new cjs.Rectangle(-609,-626.6,1253.3,1253.3), new cjs.Rectangle(-623.2,-641,1282.1,1282.1), rect=new cjs.Rectangle(-637.7,-655.6,1311.2,1311.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-488.2,-504.5,1009,1009), new cjs.Rectangle(-500.9,-517.4,1034.8,1034.8), new cjs.Rectangle(-513.9,-530.5,1061,1061), new cjs.Rectangle(-527,-543.7,1087.4,1087.4), new cjs.Rectangle(-540.2,-557.1,1114.2,1114.2), new cjs.Rectangle(-553.6,-570.7,1141.4,1141.4), new cjs.Rectangle(-567.3,-584.4,1168.9,1168.9), new cjs.Rectangle(-581,-598.3,1196.7,1196.7), new cjs.Rectangle(-594.9,-612.4,1224.8,1224.8), new cjs.Rectangle(-609,-626.6,1253.3,1253.3), new cjs.Rectangle(-623.2,-641,1282.1,1282.1), rect=new cjs.Rectangle(-637.7,-655.6,1311.2,1311.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-438.7,-454.4,908.9,908.9), new cjs.Rectangle(-450.8,-466.7,933.5,933.5), new cjs.Rectangle(-463.1,-479.1,958.3,958.3), new cjs.Rectangle(-475.6,-491.7,983.5,983.5), new cjs.Rectangle(-488.2,-504.5,1009,1009), new cjs.Rectangle(-500.9,-517.4,1034.8,1034.8), new cjs.Rectangle(-513.9,-530.5,1061,1061), new cjs.Rectangle(-527,-543.7,1087.4,1087.4), new cjs.Rectangle(-540.2,-557.1,1114.2,1114.2), new cjs.Rectangle(-553.6,-570.7,1141.4,1141.4), new cjs.Rectangle(-567.3,-584.4,1168.9,1168.9), new cjs.Rectangle(-581,-598.3,1196.7,1196.7), new cjs.Rectangle(-594.9,-612.4,1224.8,1224.8), new cjs.Rectangle(-609,-626.6,1253.3,1253.3), new cjs.Rectangle(-623.2,-641,1282.1,1282.1), rect=new cjs.Rectangle(-637.7,-655.6,1311.2,1311.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-475.6,-491.7,983.5,983.5), new cjs.Rectangle(-488.2,-504.5,1009,1009), new cjs.Rectangle(-500.9,-517.4,1034.8,1034.8), new cjs.Rectangle(-513.9,-530.5,1061,1061), new cjs.Rectangle(-527,-543.7,1087.4,1087.4), new cjs.Rectangle(-540.2,-557.1,1114.2,1114.2), new cjs.Rectangle(-553.6,-570.7,1141.4,1141.4), new cjs.Rectangle(-567.3,-584.4,1168.9,1168.9), new cjs.Rectangle(-581,-598.3,1196.7,1196.7), new cjs.Rectangle(-594.9,-612.4,1224.8,1224.8), new cjs.Rectangle(-609,-626.6,1253.3,1253.3), new cjs.Rectangle(-623.2,-641,1282.1,1282.1), rect=new cjs.Rectangle(-637.7,-655.6,1311.2,1311.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preloader_27_mc();
	this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.39,scaleY:0.39},19).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,23,23);
p.frameBounds = [rect, new cjs.Rectangle(0.4,0.4,22.3,22.3), new cjs.Rectangle(0.8,0.8,21.6,21.6), new cjs.Rectangle(1.2,1.2,20.8,20.8), new cjs.Rectangle(1.5,1.5,20.1,20.1), new cjs.Rectangle(1.9,1.9,19.3,19.3), new cjs.Rectangle(2.3,2.3,18.6,18.6), new cjs.Rectangle(2.6,2.6,17.8,17.8), new cjs.Rectangle(3,3,17.1,17.1), new cjs.Rectangle(3.4,3.4,16.3,16.3), new cjs.Rectangle(3.7,3.7,15.7,15.7), new cjs.Rectangle(4.1,4.1,14.9,14.9), new cjs.Rectangle(4.5,4.5,14.2,14.2), new cjs.Rectangle(4.8,4.8,13.4,13.4), new cjs.Rectangle(5.2,5.2,12.7,12.7), new cjs.Rectangle(5.6,5.6,12,12), new cjs.Rectangle(5.9,5.9,11.2,11.2), new cjs.Rectangle(6.3,6.3,10.5,10.5), new cjs.Rectangle(6.7,6.7,9.7,9.7), rect=new cjs.Rectangle(7,7,9,9), rect, rect, rect, rect, rect];


(lib.preloader_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preloader_25_mc();
	this.instance.setTransform(18,18,1,1,0,0,0,18,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.6,regY:19.1,rotation:174,x:17.3,y:17,alpha:0},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,36,36);
p.frameBounds = [rect, new cjs.Rectangle(0.2,0.2,35.7,35.7), new cjs.Rectangle(0.6,0.6,34.9,34.9), new cjs.Rectangle(1.3,1.3,33.5,33.5), new cjs.Rectangle(2.2,2.3,31.5,31.5), new cjs.Rectangle(3.4,3.4,29.1,29.1), new cjs.Rectangle(4.8,4.8,26.1,26.1), new cjs.Rectangle(3.9,3.9,27.8,27.8), new cjs.Rectangle(2.5,2.5,30.5,30.5), new cjs.Rectangle(1.4,1.5,32.7,32.7), new cjs.Rectangle(0.5,0.6,34.3,34.3), new cjs.Rectangle(0,0,35.4,35.4), rect=new cjs.Rectangle(-0.4,-0.4,35.9,35.9), rect, new cjs.Rectangle(-0.1,-0.2,35.3,35.3), new cjs.Rectangle(0.4,0.4,34.1,34.1), new cjs.Rectangle(1.3,1.2,32.4,32.3), new cjs.Rectangle(2.4,2.3,30.1,30.1), new cjs.Rectangle(3.8,3.6,27.4,27.4), new cjs.Rectangle(4.1,3.9,26.6,26.6), new cjs.Rectangle(2.7,2.4,29.4,29.4), new cjs.Rectangle(1.4,1.3,31.8,31.8), new cjs.Rectangle(0.5,0.3,33.7,33.7), new cjs.Rectangle(-0.2,-0.5,35,35), new cjs.Rectangle(-1.7,-1.8,39.6,39.6)];


(lib.preloader_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preloader_23_mc();
	this.instance.setTransform(1.6,2.6,0.235,0.235,0,0,0,4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:4.2,scaleX:0.87,scaleY:0.87,rotation:157.5,x:2.3,y:3.3,alpha:0.607},0).wait(1).to({scaleX:1.32,scaleY:1.32,rotation:270,x:2.8,y:3.9,alpha:0.326},0).wait(1).to({scaleX:1.59,scaleY:1.59,rotation:337.5,x:3,y:4.2,alpha:0.158},0).wait(1).to({regX:4.3,scaleX:1.68,scaleY:1.68,rotation:360,x:3.2,y:4.4,alpha:0.102},0).wait(1).to({regX:4.2,scaleX:1.05,scaleY:1.05,x:2.8,y:4.1,alpha:0.079},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:2.6,y:3.8,alpha:0.063},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:2.5,y:3.7,alpha:0.054},0).wait(1).to({regX:4.3,scaleX:0.24,scaleY:0.24,y:3.6,alpha:0.051},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.6,1.6,2,2);
p.frameBounds = [rect, new cjs.Rectangle(-1.5,-0.5,7.4,7.5), new cjs.Rectangle(-2.8,-1.8,11.2,11.3), new cjs.Rectangle(-3.7,-2.6,13.6,13.6), new cjs.Rectangle(-4.1,-2.9,14.3,14.3), new cjs.Rectangle(-1.6,-0.5,8.9,9), new cjs.Rectangle(0.2,1.2,5.1,5.1), new cjs.Rectangle(1.3,2.3,2.8,2.8), rect=new cjs.Rectangle(1.5,2.6,2,2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_18_mc();
	this.instance.setTransform(976,300,0.96,1,0,0,0,25,300);

	this.instance_1 = new lib.preloader_18_mc();
	this.instance_1.setTransform(880,300,0.96,1,0,0,0,25,300);

	this.instance_2 = new lib.preloader_18_mc();
	this.instance_2.setTransform(784,300,0.96,1,0,0,0,25,300);

	this.instance_3 = new lib.preloader_18_mc();
	this.instance_3.setTransform(688,300,0.96,1,0,0,0,25,300);

	this.instance_4 = new lib.preloader_18_mc();
	this.instance_4.setTransform(592,300,0.96,1,0,0,0,25,300);

	this.instance_5 = new lib.preloader_18_mc();
	this.instance_5.setTransform(496,300,0.96,1,0,0,0,25,300);

	this.instance_6 = new lib.preloader_18_mc();
	this.instance_6.setTransform(400,300,0.96,1,0,0,0,25,300);

	this.instance_7 = new lib.preloader_18_mc();
	this.instance_7.setTransform(304,300,0.96,1,0,0,0,25,300);

	this.instance_8 = new lib.preloader_18_mc();
	this.instance_8.setTransform(208,300,0.96,1,0,0,0,25,300);

	this.instance_9 = new lib.preloader_18_mc();
	this.instance_9.setTransform(112,300,0.96,1,0,0,0,25,300);

	this.instance_10 = new lib.preloader_18_mc();
	this.instance_10.setTransform(16,300,0.96,1,0,0,0,25,300);

	this.instance_11 = new lib.preloader_18_mc();
	this.instance_11.setTransform(-80,300,0.96,1,0,0,0,25,300);

	this.instance_12 = new lib.preloader_18_mc();
	this.instance_12.setTransform(-176,300,0.96,1,0,0,0,25,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_19_mc();
	this.instance.setTransform(25,300,1,1,0,0,0,25,300);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.preloader_16_mc();
	this.instance_1.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzkrIPnAAQApABAmAKQAmALAiATQAhAUAcAbQAbAcAUAhQATAiALAmQAKAmABAoIAAAAQgBApgKAmQgLAmgTAiQgUAhgbAcQgcAbghAUQgiATgmALQgmAKgpABIvnAAQg+gBg2gXQg3gXgpgpQgpgpgXg3QgXg2gBg+IAAAAQABgoAKgmQALgmATgiQAUghAbgcQAcgbAhgUQAigTAmgLQAmgKApgBg");

	// animation
	this.instance = new lib.preloader_15_mc();
	this.instance.setTransform(-200,0,1,1,45);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:200},29).wait(71));

	// graph
	this.instance_1 = new lib.preloader_11_mc();

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// graph
	this.instance_2 = new lib.preloader_9_mc();

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// shadow
	this.instance_3 = new lib.preloader_14_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.preloader_31_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},98).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAUCWIgUgVIgSAVI0zAAQg+AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA+AAIUzAAIASAVIATgVIUzAAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAg");

	// shadow
	this.instance_1 = new lib.preloader_6_mc();
	this.instance_1.setTransform(0,0,1,1,0,0,0,150,15);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// band
	this.instance_2 = new lib.preloader_5_mc();
	this.instance_2.setTransform(-300,0,1,1,0,0,0,150,15);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:0},99).wait(1));

	// bg
	this.instance_3 = new lib.preloader_4_mc();
	this.instance_3.setTransform(-4,-4,1,1,0,0,0,146,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// bg
	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(0,0,1,1,0,0,0,150,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// bg
	this.instance_5 = new lib.preloader_7_mc();
	this.instance_5.setTransform(0,0,1,1,0,0,0,150,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-25,320,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.orientation_lock_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_8_mc();
	this.instance.setTransform(70,0);

	this.instance_1 = new lib.orientation_lock_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-10,130,20);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_2_1_mc();
	this.instance_1.setTransform(0,-184,0.952,0.952);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-279.2,420,379.3);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// animation
	this.instance_1 = new lib.title_3_mc();
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},39).to({alpha:0},40).wait(1));

	// graph
	this.instance_2 = new lib.title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-140,500,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,-0.1,0.514,0.514,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.657,0.657,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-23,46,46);
p.frameBounds = [rect];


(lib.pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_pointer_mc();
	this.instance.cache(-57,-57,114,114);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14,x:10},9).to({scaleX:1,scaleY:1,x:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-54.7,-55.8,111.7,111.7), new cjs.Rectangle(-54.4,-56.7,113.5,113.5), new cjs.Rectangle(-54.2,-57.6,115.2,115.2), new cjs.Rectangle(-54,-58.4,117,117), new cjs.Rectangle(-53.7,-59.3,118.7,118.7), new cjs.Rectangle(-53.5,-60.2,120.5,120.5), new cjs.Rectangle(-53.3,-61.1,122.2,122.2), new cjs.Rectangle(-53,-61.9,124,124), new cjs.Rectangle(-52.8,-62.8,125.7,125.7), new cjs.Rectangle(-52.9,-62.3,124.7,124.7), new cjs.Rectangle(-53.1,-61.8,123.6,123.6), new cjs.Rectangle(-53.3,-61.2,122.6,122.6), new cjs.Rectangle(-53.4,-60.7,121.5,121.5), new cjs.Rectangle(-53.5,-60.2,120.5,120.5), new cjs.Rectangle(-53.7,-59.7,119.4,119.4), new cjs.Rectangle(-53.8,-59.1,118.4,118.4), new cjs.Rectangle(-54,-58.6,117.3,117.3), new cjs.Rectangle(-54.2,-58.1,116.3,116.3), new cjs.Rectangle(-54.3,-57.6,115.2,115.2), new cjs.Rectangle(-54.4,-57,114.2,114.2), new cjs.Rectangle(-54.6,-56.5,113.1,113.1), new cjs.Rectangle(-54.7,-56,112.1,112.1), new cjs.Rectangle(-54.9,-55.5,111,111), new cjs.Rectangle(-55,-55,110,110)];


(lib.pareo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,-0.1,0.514,0.514,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.hero4_swimsuit8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_swimsuit8_img();
	this.instance.setTransform(-38.3,-69.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(8.6,-76.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.3,-102.9,92,183.9);
p.frameBounds = [rect];


(lib.hero4_swimsuit7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_swimsuit7_img();
	this.instance.setTransform(-59.7,-72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(8.6,-76.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.7,-102.9,157,202.9);
p.frameBounds = [rect];


(lib.hero4_swimsuit6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_swimsuit6_img();
	this.instance.setTransform(-52.3,-74.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(8.6,-76.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.3,-102.9,105,206.9);
p.frameBounds = [rect];


(lib.hero4_swimsuit5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_swimsuit5_img();
	this.instance.setTransform(-40.7,-75.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(8.6,-76.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.7,-102.9,93.4,150.9);
p.frameBounds = [rect];


(lib.hero4_swimsuit4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_swimsuit4_img();
	this.instance.setTransform(-43.7,-75.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(8.6,-76.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-102.9,96.4,182.9);
p.frameBounds = [rect];


(lib.hero4_swimsuit3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_swimsuit3_img();
	this.instance.setTransform(-42.7,-70.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(8.6,-76.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.7,-102.9,95.4,184.9);
p.frameBounds = [rect];


(lib.hero4_swimsuit2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_swimsuit2_img();
	this.instance.setTransform(-45.7,-77.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(8.6,-76.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.7,-102.9,98.4,183.9);
p.frameBounds = [rect];


(lib.hero4_swimsuit1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_swimsuit1_img();
	this.instance.setTransform(-52.7,-72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(8.6,-76.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.7,-102.9,105.4,205.9);
p.frameBounds = [rect];


(lib.hero4_pareo6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_pareo6_img();
	this.instance.setTransform(-58.5,-51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-1.7,-50.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-77.4,118,307.9);
p.frameBounds = [rect];


(lib.hero4_pareo5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_pareo5_img();
	this.instance.setTransform(-63.5,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-1.7,-50.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.5,-77.4,136,398.8);
p.frameBounds = [rect];


(lib.hero4_pareo4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_pareo4_img();
	this.instance.setTransform(-58.5,-54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-1.7,-50.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-77.4,111,150.9);
p.frameBounds = [rect];


(lib.hero4_pareo3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_pareo3_img();
	this.instance.setTransform(-68.5,-48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-1.7,-50.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-77.4,151,413.9);
p.frameBounds = [rect];


(lib.hero4_pareo2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_pareo2_img();
	this.instance.setTransform(-80.5,-61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-1.7,-50.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-77.4,132,322.9);
p.frameBounds = [rect];


(lib.hero4_pareo1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_pareo1_img();
	this.instance.setTransform(-56.5,-53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-1.7,-50.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-77.4,113,154.9);
p.frameBounds = [rect];


(lib.hero4_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero4_fringe0_img();
	this.instance.setTransform(-166,-180.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero4_eyes1_mc();
	this.instance_1.setTransform(-14.2,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero4_eyebrows_mc();
	this.instance_2.setTransform(-11.7,-18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// lips
	this.lips = new lib.hero4_lips_all_mc();
	this.lips.setTransform(2.1,93.4);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// shadows
	this.shadows = new lib.hero4_shadows_all_mc();
	this.shadows.setTransform(-7.8,21);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero4_rouge_all_mc();
	this.blush.setTransform(1.9,64.9);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_3 = new lib.hero4_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.hero4_body0_img();
	this.instance_4.setTransform(-246.7,-124.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-246.7,-180.5,479,632.4);
p.frameBounds = [rect];


(lib.hero4_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_accessory4_img();
	this.instance.setTransform(53.4,-83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero4_accessory2_img();
	this.instance_1.setTransform(-70.1,-271);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero4_fringe5_img();
	this.instance_2.setTransform(-75.7,-297.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero4_eyes1_mc();
	this.instance_3.setTransform(-12.3,-217.1,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero4_lips4_img();
	this.instance_4.setTransform(-19.2,-193.2,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero4_eyebrows_mc();
	this.instance_5.setTransform(-11.3,-230.1,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero4_shadows3_img();
	this.instance_6.setTransform(-46.7,-230.5,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero4_head1_mc();
	this.instance_7.setTransform(-6.5,-222.7,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero4_swimsuit7_img();
	this.instance_8.setTransform(-66,-161.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero4_body_mc();
	this.instance_9.setTransform(0,44.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero4_hair5_img();
	this.instance_10.setTransform(-95.7,-282.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.2,-297.3,212.6,576.9);
p.frameBounds = [rect];


(lib.hero3_top8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top8_img();
	this.instance.setTransform(-49.8,-41.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-38.9,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-65.7,93.9,100.4);
p.frameBounds = [rect];


(lib.hero3_top7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top7_img();
	this.instance.setTransform(-49.8,-40.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-38.9,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-65.7,93.9,112.4);
p.frameBounds = [rect];


(lib.hero3_top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top6_img();
	this.instance.setTransform(-49.8,-39.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-38.9,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-65.7,93.9,97.4);
p.frameBounds = [rect];


(lib.hero3_top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top5_img();
	this.instance.setTransform(-49.8,-39.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-38.9,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-65.7,93.9,109.4);
p.frameBounds = [rect];


(lib.hero3_top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top4_img();
	this.instance.setTransform(-49.8,-41.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-38.9,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-65.7,93.9,127.4);
p.frameBounds = [rect];


(lib.hero3_top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top3_img();
	this.instance.setTransform(-49.8,-41.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-38.9,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-65.7,93.9,119.4);
p.frameBounds = [rect];


(lib.hero3_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top2_img();
	this.instance.setTransform(-49.8,-39.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-38.9,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-65.7,93.9,97.4);
p.frameBounds = [rect];


(lib.hero3_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top1_img();
	this.instance.setTransform(-49.8,-39.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-38.9,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-65.7,93.9,132.4);
p.frameBounds = [rect];


(lib.hero3_pareo6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_pareo6_img();
	this.instance.setTransform(-95,-47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-0.3,-52.1,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-78.9,189,315.9);
p.frameBounds = [rect];


(lib.hero3_pareo5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_pareo5_img();
	this.instance.setTransform(-82,-52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-0.3,-52.1,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-78.9,167,173.9);
p.frameBounds = [rect];


(lib.hero3_pareo4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_pareo4_img();
	this.instance.setTransform(-59,-44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-0.3,-52.1,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-78.9,129,229.9);
p.frameBounds = [rect];


(lib.hero3_pareo3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_pareo3_img();
	this.instance.setTransform(-59,-44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-0.3,-52.1,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-78.9,115,167.9);
p.frameBounds = [rect];


(lib.hero3_pareo2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_pareo2_img();
	this.instance.setTransform(-84,-48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-0.3,-52.1,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-78.9,181,320.9);
p.frameBounds = [rect];


(lib.hero3_pareo1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_pareo1_img();
	this.instance.setTransform(-84,-48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-0.3,-52.1,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-78.9,168,157.9);
p.frameBounds = [rect];


(lib.hero3_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero3_eyes1_mc();
	this.instance.setTransform(0.7,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero3_fringe0_img();
	this.instance_1.setTransform(-102.9,-134.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero3_eyebrows_mc();
	this.instance_2.setTransform(-0.8,-24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all_mc();
	this.shadows.setTransform(0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all_mc();
	this.lips.setTransform(-0.3,88.7);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all_mc();
	this.blush.setTransform(0.3,55.9);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_3 = new lib.hero3_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.hero3_body0_img();
	this.instance_4.setTransform(-369.9,-180.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-369.9,-180.6,735,608);
p.frameBounds = [rect];


(lib.hero3_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_fringe3_img();
	this.instance.setTransform(-46.1,-302.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero3_eyes1_mc();
	this.instance_1.setTransform(14.8,-233.6,0.431,0.431);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero3_eyebrows_mc();
	this.instance_2.setTransform(14.1,-246,0.431,0.431);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero3_shadows3_img();
	this.instance_3.setTransform(-24.4,-249.1,0.431,0.431);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero3_lips4_img();
	this.instance_4.setTransform(0.7,-204.2,0.431,0.431);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero3_head1_mc();
	this.instance_5.setTransform(14.5,-235.3,0.431,0.431);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero3_top1_img();
	this.instance_6.setTransform(-24.5,-179.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero3_body1_mc();
	this.instance_7.setTransform(32,-97.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero3_tale3_img();
	this.instance_8.setTransform(-86.3,-95.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero3_hair3_img();
	this.instance_9.setTransform(-132.3,-245.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.3,-302.2,289,599.1);
p.frameBounds = [rect];


(lib.hero2_swimsuit8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_swimsuit8_img();
	this.instance.setTransform(-50.8,-68.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-10.1,-68.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.2,-94.9,104.4,189.9);
p.frameBounds = [rect];


(lib.hero2_swimsuit7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_swimsuit7_img();
	this.instance.setTransform(-53.8,-69.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-10.1,-68.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.2,-94.9,109.4,188.9);
p.frameBounds = [rect];


(lib.hero2_swimsuit6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_swimsuit6_img();
	this.instance.setTransform(-54.8,-66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-10.1,-68.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.8,-94.9,101,186.9);
p.frameBounds = [rect];


(lib.hero2_swimsuit5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_swimsuit5_img();
	this.instance.setTransform(-52.8,-63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-10.1,-68.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.2,-94.9,108.4,188.9);
p.frameBounds = [rect];


(lib.hero2_swimsuit4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_swimsuit4_img();
	this.instance.setTransform(-49.8,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-10.1,-68.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.2,-94.9,110.4,189.9);
p.frameBounds = [rect];


(lib.hero2_swimsuit3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_swimsuit3_img();
	this.instance.setTransform(-52.8,-63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-10.1,-68.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.2,-94.9,101.4,190.9);
p.frameBounds = [rect];


(lib.hero2_swimsuit2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_swimsuit2_img();
	this.instance.setTransform(-54.8,-66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-10.1,-68.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.8,-94.9,102,188.9);
p.frameBounds = [rect];


(lib.hero2_swimsuit1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_swimsuit1_img();
	this.instance.setTransform(-53.8,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-10.1,-68.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.2,-94.9,108.4,189.9);
p.frameBounds = [rect];


(lib.hero2_pareo6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_pareo6_img();
	this.instance.setTransform(-80,-142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(5.7,-141.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-168.7,163,170.4);
p.frameBounds = [rect];


(lib.hero2_pareo5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_pareo5_img();
	this.instance.setTransform(-68,-136.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(5.7,-141.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-168.7,154,211.4);
p.frameBounds = [rect];


(lib.hero2_pareo4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_pareo4_img();
	this.instance.setTransform(-51,-145.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(5.7,-141.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-168.7,111,152.4);
p.frameBounds = [rect];


(lib.hero2_pareo3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_pareo3_img();
	this.instance.setTransform(-46,-145.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(5.7,-141.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-168.7,123,123.4);
p.frameBounds = [rect];


(lib.hero2_pareo2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_pareo2_img();
	this.instance.setTransform(-45,-146.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(5.7,-141.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-168.7,106,153.4);
p.frameBounds = [rect];


(lib.hero2_pareo1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_pareo1_img();
	this.instance.setTransform(-99,-141.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(5.7,-141.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99,-168.7,198,337.4);
p.frameBounds = [rect];


(lib.hero2_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_eyes1_mc();
	this.instance.setTransform(-0.7,36.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero2_fringe0_img();
	this.instance_1.setTransform(-217.7,-217.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(-0.9,31.4);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(2.2,110.6);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(1.3,84.9);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero2_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.hero2_body0_img();
	this.instance_3.setTransform(-303.2,-146.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-303.2,-217.9,627,649.1);
p.frameBounds = [rect];


(lib.hero2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory2_img();
	this.instance.setTransform(-24.9,-219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_eyes1_mc();
	this.instance_1.setTransform(17.2,-211.2,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-34.5,-288.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero2_shadows2_img();
	this.instance_3.setTransform(-19.8,-227.7,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero2_lips3_img();
	this.instance_4.setTransform(4.2,-189.8,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero2_head1_mc();
	this.instance_5.setTransform(17.5,-225.5,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero2_pareo4_img();
	this.instance_6.setTransform(-21.9,-67.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero2_swimsuit4_img();
	this.instance_7.setTransform(-27.6,-159.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero2_body1_mc();
	this.instance_8.setTransform(0,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero2_hair3_img();
	this.instance_9.setTransform(-89.4,-315.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.4,-315.1,184,601.9);
p.frameBounds = [rect];


(lib.hero1_top8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top8_img();
	this.instance.setTransform(-17.8,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-31.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.1,-58.7,90.3,94.4);
p.frameBounds = [rect];


(lib.hero1_top7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top7_img();
	this.instance.setTransform(-19.9,-31.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-31.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.1,-58.7,88.2,93.4);
p.frameBounds = [rect];


(lib.hero1_top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top6_img();
	this.instance.setTransform(-18.8,-32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-31.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.1,-58.7,88.3,85.4);
p.frameBounds = [rect];


(lib.hero1_top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top5_img();
	this.instance.setTransform(-33.8,-36.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-31.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.1,-58.7,88.2,84.4);
p.frameBounds = [rect];


(lib.hero1_top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top4_img();
	this.instance.setTransform(-18.8,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-31.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.1,-58.7,88.2,85.4);
p.frameBounds = [rect];


(lib.hero1_top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top3_img();
	this.instance.setTransform(-22.8,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-31.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.1,-58.7,88.2,93.4);
p.frameBounds = [rect];


(lib.hero1_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top2_img();
	this.instance.setTransform(-15.8,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-31.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.1,-58.7,89.3,88.4);
p.frameBounds = [rect];


(lib.hero1_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-37.8,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(0,-31.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.1,-58.7,88.2,117.4);
p.frameBounds = [rect];


(lib.hero1_pareo6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_pareo6_img();
	this.instance.setTransform(-63.5,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-12.7,-28.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.5,-54.9,113,112.9);
p.frameBounds = [rect];


(lib.hero1_pareo5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_pareo5_img();
	this.instance.setTransform(-64.5,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-12.7,-28.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.5,-54.9,113,112.9);
p.frameBounds = [rect];


(lib.hero1_pareo4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_pareo4_img();
	this.instance.setTransform(-221.5,-38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-12.7,-28.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-221.5,-54.9,405,319.8);
p.frameBounds = [rect];


(lib.hero1_pareo3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_pareo3_img();
	this.instance.setTransform(-62.5,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-12.7,-28.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-54.9,143,134.9);
p.frameBounds = [rect];


(lib.hero1_pareo2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_pareo2_img();
	this.instance.setTransform(-58.5,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-12.7,-28.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-54.9,121,109.9);
p.frameBounds = [rect];


(lib.hero1_pareo1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_pareo1_img();
	this.instance.setTransform(-65.5,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-12.7,-28.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-54.9,131,109.9);
p.frameBounds = [rect];


(lib.hero1_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_eyes1_mc();
	this.instance.setTransform(36.1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero1_fringe0_img();
	this.instance_1.setTransform(-152.7,-213.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(32.8,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(29.3,95);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(23.2,67.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero1_eyebrows_mc();
	this.instance_2.setTransform(40.1,-12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.hero1_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.hero1_body0_img();
	this.instance_4.setTransform(-336.5,-126.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-336.5,-213.4,816,724.8);
p.frameBounds = [rect];


(lib.hero1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-41.3,-277.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_eyes1_mc();
	this.instance_1.setTransform(14.5,-209.2,0.415,0.415,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero1_fringe1_img();
	this.instance_2.setTransform(-80.3,-297.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero1_shadows3_img();
	this.instance_3.setTransform(-23.8,-216.6,0.415,0.415,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero1_lips1_img();
	this.instance_4.setTransform(8.8,-182.6,0.415,0.415,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero1_eyebrows_mc();
	this.instance_5.setTransform(10.9,-223.4,0.415,0.415,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero1_head1_mc();
	this.instance_6.setTransform(-2.8,-212.5,0.415,0.415,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero1_pareo_main_mc();
	this.instance_7.setTransform(-2.4,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero1_top_main_mc();
	this.instance_8.setTransform(14.8,-117,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero1_body1_mc();
	this.instance_9.setTransform(23.2,-99.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero1_tale1_img();
	this.instance_10.setTransform(-200,-82.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.hero1_hair1_img();
	this.instance_11.setTransform(-93.8,-265.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-258.9,-297.7,505,570.7);
p.frameBounds = [rect];


(lib.hero_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero4_accessory_all2_mc();
	this.accessory.setTransform(81.4,-28.6);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero4_accessory_all1_mc();
	this.headdress.setTransform(-14.6,-251.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero4_fringe_all_mc();
	this.fringe.setTransform(-4.9,-201.6);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero4_eyes1_mc();
	this.instance.setTransform(-12.3,-217.1,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lips
	this.lips = new lib.hero4_lips_all_mc();
	this.lips.setTransform(-5.6,-184.7,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.hero4_eyebrows_mc();
	this.instance_1.setTransform(-11.3,-230.1,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.hero4_shadows_all_mc();
	this.shadows.setTransform(-9.7,-214.1,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero4_rouge_all_mc();
	this.blush.setTransform(-5.7,-196.3,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero4_head1_mc();
	this.instance_2.setTransform(-6.5,-222.7,0.407,0.407);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// pareo
	this.pareo = new lib.hero4_pareo_all_mc();
	this.pareo.setTransform(-3.1,15.1,1,1,0,0,0,2,88.9);

	this.timeline.addTween(cjs.Tween.get(this.pareo).wait(1));

	// dress
	this.dress = new lib.hero4_swimsuit_all_mc();
	this.dress.setTransform(-5.1,-73.8);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero4_shoes_all_mc();
	this.shoes.setTransform(5.9,250.1,1,1,0,0,0,11,323.9);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_3 = new lib.hero4_body_mc();
	this.instance_3.setTransform(0,44.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hair
	this.hair = new lib.hero4_hair_all_mc();
	this.hair.setTransform(-4.9,-201.6);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128.7,-297.6,248,587.1);
p.frameBounds = [rect];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero3_accessory_all2_mc();
	this.accessory.setTransform(52.4,-99.6);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero3_accessory_all1_mc();
	this.headdress.setTransform(14.7,-274);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero3_fringe_all_mc();
	this.fringe.setTransform(13.7,-260.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero3_eyes1_mc();
	this.instance.setTransform(14.8,-233.6,0.431,0.431);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero3_eyebrows_mc();
	this.instance_1.setTransform(14.1,-246,0.431,0.431);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all_mc();
	this.shadows.setTransform(14.8,-235.4,0.431,0.431,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all_mc();
	this.lips.setTransform(14.4,-197.1,0.431,0.431);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all_mc();
	this.blush.setTransform(14.6,-211.2,0.431,0.431);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero3_head1_mc();
	this.instance_2.setTransform(14.5,-235.3,0.431,0.431);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// top
	this.top = new lib.hero3_top_all_mc();
	this.top.setTransform(15.1,-126.9,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// pareo
	this.pareo = new lib.hero3_pareo_all_mc();
	this.pareo.setTransform(15.1,-126.9,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.pareo).wait(1));

	// body
	this.instance_3 = new lib.hero3_body1_mc();
	this.instance_3.setTransform(32,-97.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bottom
	this.bottom = new lib.hero3_tale_all_mc();
	this.bottom.setTransform(0,98.4);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// hair
	this.hair = new lib.hero3_hair_all_mc();
	this.hair.setTransform(13.7,-260.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.6,-315.7,405,607.6);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(16.3,-216.3);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// accessory
	this.accessory = new lib.hero2_accessory_all2_mc();
	this.accessory.setTransform(-18.3,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero2_accessory_all1_mc();
	this.headdress.setTransform(17.6,-199);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// body
	this.instance = new lib.hero2_eyes1_mc();
	this.instance.setTransform(17.2,-211.2,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(17.2,-213.1,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(18.3,-181.8,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(18,-192,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.hero2_head1_mc();
	this.instance_1.setTransform(17.5,-225.5,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// pareo
	this.pareo = new lib.hero2_pareo_all_mc();
	this.pareo.setTransform(39.7,82.8,1,1,0,0,0,15.9,162.9);

	this.timeline.addTween(cjs.Tween.get(this.pareo).wait(1));

	// dress
	this.dress = new lib.hero2_swimsuit_all_mc();
	this.dress.setTransform(23.7,-80.2,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero2_shoes_all_mc();
	this.shoes.setTransform(14.6,259.8,1,1,0,0,0,-9.2,339.9);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_2 = new lib.hero2_body1_mc();
	this.instance_2.setTransform(0,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(23.8,-45.8,1,1,0,0,0,7.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.9,-313.7,253,607.1);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero1_accessory2_all_mc();
	this.accessory.setTransform(52.4,-168.7);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero1_accessory1_all_mc();
	this.headdress.setTransform(5.8,-247.9);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(39.9,-238);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero1_eyes1_mc();
	this.instance.setTransform(14.5,-209.2,0.415,0.415,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(12.6,-210.5,0.415,0.415,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(22.6,-180,0.415,0.415,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(16.1,-189.9,0.415,0.415,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyebrows_mc();
	this.instance_1.setTransform(10.9,-223.4,0.415,0.415,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero1_head1_mc();
	this.instance_2.setTransform(-2.8,-212.5,0.415,0.415,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// pareo
	this.pareo = new lib.hero1_pareo_all_mc();
	this.pareo.setTransform(-2.4,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.pareo).wait(1));

	// top
	this.top = new lib.hero1_top_all_mc();
	this.top.setTransform(14.8,-117,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// body
	this.instance_3 = new lib.hero1_body1_mc();
	this.instance_3.setTransform(23.2,-99.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bottom
	this.bottom = new lib.hero1_tale_all_mc();
	this.bottom.setTransform(-49.8,85.9,1,1,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(39.9,-238);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-258.9,-297.7,505,570.7);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,-0.1,0.514,0.514,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.dress_8_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_swimsuit8_mc();
	this.instance.setTransform(-9.7,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoPJbIA1xXIFynvIEHgEIFxIvIg4SKIpJEmg");
	this.shape.setTransform(-1.7,93.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-7.1,105.7,201.7);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit8_mc();
	this.instance.setTransform(9,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlKMIIj2u4IgSnVIFel7IEWgDIFmF1IDLRWIkbIfIjHAdg");
	this.shape.setTransform(9,94.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.6,-8.2,119.2,205.7);
p.frameBounds = [rect];


(lib.dress_7_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_swimsuit7_mc();
	this.instance.setTransform(-9.3,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqQPwIi3mVIDQymIGlnqIDaAAIGZGOIGnSwInhItg");
	this.shape.setTransform(9,100.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-7.5,168.1,215.7);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit7_mc();
	this.instance.setTransform(9,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApmCXIAap6IGCoJIDdAAIFZIwID7RnIm8ExIpjARg");
	this.shape.setTransform(10.9,93.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.6,-7,123.1,201.2);
p.frameBounds = [rect];


(lib.dress_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_swimsuit6_mc();
	this.instance.setTransform(-9.2,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApELmICp0sIGQn6ID/AAIFRHuIgiaNIwlAGg");
	this.shape.setTransform(-9.9,102.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-6.5,116.3,217.9);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit6_mc();
	this.instance.setTransform(9.3,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlvLaIi5qoIAXoKIF9oHICwAAIFqHDICjPxIlGHqIhyAhg");
	this.shape.setTransform(4.9,93.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-6,110.7,198.5);
p.frameBounds = [rect];


(lib.dress_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_swimsuit5_mc();
	this.instance.setTransform(-9.5,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoPGSIBGrPIGDn+IDsAAIFqIQIiDM/Im7EmIibACg");
	this.shape.setTransform(-2,72.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.7,-10.5,105.6,165.8);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit5_mc();
	this.instance.setTransform(9,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlvMpIjVsGIgFoiIFunxIDfACIFbGZIDrSAIlvHGg");
	this.shape.setTransform(8.3,96.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.3,-4.7,117.3,201.9);
p.frameBounds = [rect];


(lib.dress_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_swimsuit4_mc();
	this.instance.setTransform(-9.5,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai0O9IljlNIBixXIGLniIDlgBIFdINIhvSqIm/Deg");
	this.shape.setTransform(-4.7,91.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-5.2,107.3,194.3);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit4_mc();
	this.instance.setTransform(9,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlnMAIjbuvIgOmWIFsmrID+AAIFTG2IDkRRIldG5Ih8Ahg");
	this.shape.setTransform(9.9,96.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.4,-4.5,118.8,202);
p.frameBounds = [rect];


(lib.dress_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_swimsuit3_mc();
	this.instance.setTransform(-10,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AooJdIBlxLIFon6IEEABIGAJAIh8TLIo4DFg");
	this.shape.setTransform(-3.8,93.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.1,-6.8,110.8,200.4);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit3_mc();
	this.instance.setTransform(9,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ak3LnIjjsLIgWmsIGeotIDnAAIFAHNICcQOIkKHrIisA1g");
	this.shape.setTransform(4.4,95.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-7,112.3,204.5);
p.frameBounds = [rect];


(lib.dress_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_swimsuit2_mc();
	this.instance.setTransform(-9.5,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai0PLIlolfIB5w4IF9oHIDbACIFoH8IhbSXInEESg");
	this.shape.setTransform(-5,91.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.1,-6.6,108.3,196.1);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit2_mc();
	this.instance.setTransform(9.3,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlnM4IjgzFIGGprIDuAAIFnGiIC0R3IjbGFIilBTg");
	this.shape.setTransform(2.6,93.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.9,-8.5,117,203.5);
p.frameBounds = [rect];


(lib.dress_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_swimsuit1_mc();
	this.instance.setTransform(-9.5,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoLQfIg5i9IC83WIF/nUID/ABIFPH/IhSYzIhUBeg");
	this.shape.setTransform(-9.4,103.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-5.9,116.3,219.5);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_swimsuit1_mc();
	this.instance.setTransform(8.5,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmKMbIjQubIAmoLIGAlwIC1ADIGNHUIDNQkIkXHFIieA3g");
	this.shape.setTransform(8.7,96);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.6,-6,120.8,204.1);
p.frameBounds = [rect];


(lib.body_check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.body_check_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.121},0).to({scaleX:1,scaleY:1,alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, new cjs.Rectangle(-25,-25,50,50), new cjs.Rectangle(-28.1,-28.1,56.3,56.3), new cjs.Rectangle(-31.2,-31.2,62.5,62.5), new cjs.Rectangle(-34.3,-34.3,68.8,68.8), new cjs.Rectangle(-37.4,-37.4,75,75), new cjs.Rectangle(-40.6,-40.6,81.3,81.3), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-46.8,-46.8,93.8,93.8), new cjs.Rectangle(-50,-50,100,100)];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.657,0.657,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-23,46,46);
p.frameBounds = [rect];


(lib.animation_rubbing_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_rubbing_2_mc();
	this.instance.setTransform(0,25,0.8,0.8,-45,0,0,0,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45},19).to({rotation:-45},20).wait(1));

	// bg
	this.instance_1 = new lib.animation_rubbing_1_mc();
	this.instance_1.cache(-92,-52,184,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-61.3,180,111.4);
p.frameBounds = [rect, new cjs.Rectangle(-90,-64.1,180,114.1), new cjs.Rectangle(-90,-66.5,180,116.6), new cjs.Rectangle(-90,-68.5,180,118.5), new cjs.Rectangle(-90,-69.7,180,119.8), new cjs.Rectangle(-90,-70.3,180,120.3), new cjs.Rectangle(-90,-70.2,180,120.3), new cjs.Rectangle(-90,-69.5,180,119.6), new cjs.Rectangle(-90,-68.2,180,118.2), rect=new cjs.Rectangle(-90,-66.1,180,116.2), rect, new cjs.Rectangle(-90,-68.1,180,118.2), new cjs.Rectangle(-90,-69.5,180,119.6), new cjs.Rectangle(-90,-70.2,180,120.3), new cjs.Rectangle(-90,-70.3,180,120.4), new cjs.Rectangle(-90,-69.7,180,119.8), new cjs.Rectangle(-90,-68.5,180,118.6), new cjs.Rectangle(-90,-66.6,180,116.7), new cjs.Rectangle(-90,-64.1,180,114.2), new cjs.Rectangle(-90,-61.3,180,111.4), new cjs.Rectangle(-90,-63.9,180,114), new cjs.Rectangle(-90,-66.3,180,116.4), new cjs.Rectangle(-90,-68.2,180,118.3), new cjs.Rectangle(-90,-69.5,180,119.6), new cjs.Rectangle(-90,-70.2,180,120.2), new cjs.Rectangle(-90,-70.3,180,120.4), new cjs.Rectangle(-90,-69.8,180,119.9), new cjs.Rectangle(-90,-68.8,180,118.8), new cjs.Rectangle(-90,-67.1,180,117.2), new cjs.Rectangle(-90,-64.9,180,115), new cjs.Rectangle(-90,-67.1,180,117.1), new cjs.Rectangle(-90,-68.7,180,118.8), new cjs.Rectangle(-90,-69.8,180,119.9), new cjs.Rectangle(-90,-70.3,180,120.4), new cjs.Rectangle(-90,-70.3,180,120.3), new cjs.Rectangle(-90,-69.6,180,119.6), new cjs.Rectangle(-90,-68.3,180,118.3), new cjs.Rectangle(-90,-66.5,180,116.5), new cjs.Rectangle(-90,-64.1,180,114.2), new cjs.Rectangle(-90,-61.3,180,111.4)];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,-0.1,0.514,0.514,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.curtain_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-90,380,180);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:22,end:59});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// decor
	this.instance = new lib.curtain_5_mc();
	this.instance.setTransform(600.1,299.7,0.333,0.333,0,0,0,0.1,-0.9);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:-0.1,regY:-1,scaleX:1,scaleY:1,x:599.9,y:309,alpha:1},10).wait(10).to({regX:0.1,regY:-0.9,scaleX:0.33,scaleY:0.33,x:600.1,y:299.7,alpha:0.012},20).to({_off:true},1).wait(10));

	// decor
	this.instance_1 = new lib.curtain_4_mc();
	this.instance_1.setTransform(600,300);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},10).wait(20).to({alpha:0.012},15).to({_off:true},1).wait(10));

	// curtain_1
	this.instance_2 = new lib.curtain_1_mc();
	this.instance_2.setTransform(0,-600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0},9).wait(26).to({y:-600},24).wait(1));

	// curtain_2
	this.instance_3 = new lib.curtain_2_mc();
	this.instance_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:0},9).wait(26).to({y:600},24).wait(1));

	// bg
	this.instance_4 = new lib.curtain_3_mc();
	this.instance_4._off = true;
	this.instance_4.cache(-12,-12,1224,624);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({_off:true},21).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-600,1200,1800);
p.frameBounds = [rect, new cjs.Rectangle(0,-533.3,1200,1666.7), new cjs.Rectangle(0,-466.6,1200,1533.3), new cjs.Rectangle(0,-400,1200,1400), new cjs.Rectangle(0,-333.3,1200,1266.7), new cjs.Rectangle(0,-266.6,1200,1133.3), new cjs.Rectangle(0,-200,1200,1000), new cjs.Rectangle(0,-133.3,1200,866.7), new cjs.Rectangle(0,-66.6,1200,733.3), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect=new cjs.Rectangle(-10,-10,1220,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,0,1200,600), new cjs.Rectangle(0,-25,1200,650), new cjs.Rectangle(0,-50,1200,700), new cjs.Rectangle(0,-75,1200,750), new cjs.Rectangle(0,-100,1200,800), new cjs.Rectangle(0,-125,1200,850), new cjs.Rectangle(0,-150,1200,900), new cjs.Rectangle(0,-175,1200,950), new cjs.Rectangle(0,-200,1200,1000), new cjs.Rectangle(0,-225,1200,1050), new cjs.Rectangle(0,-250,1200,1100), new cjs.Rectangle(0,-275,1200,1150), new cjs.Rectangle(0,-300,1200,1200), new cjs.Rectangle(0,-325,1200,1250), new cjs.Rectangle(0,-350,1200,1300), new cjs.Rectangle(0,-375,1200,1350), new cjs.Rectangle(0,-400,1200,1400), new cjs.Rectangle(0,-425,1200,1450), new cjs.Rectangle(0,-450,1200,1500), new cjs.Rectangle(0,-475,1200,1550), new cjs.Rectangle(0,-500,1200,1600), new cjs.Rectangle(0,-525,1200,1650), new cjs.Rectangle(0,-550,1200,1700), new cjs.Rectangle(0,-575,1200,1750), new cjs.Rectangle(0,-600,1200,1800)];


(lib.copyright_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.copyright_2_mc();
	this.instance.setTransform(0,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-151.2,106.8,302.5,181.5), new cjs.Rectangle(-154.9,97.1,309.9,186), new cjs.Rectangle(-161.1,81.1,322.2,193.4), new cjs.Rectangle(-169.7,58.6,339.5,203.7), new cjs.Rectangle(-180.8,29.7,361.7,217.1), new cjs.Rectangle(-194.4,-5.5,388.9,233.4), new cjs.Rectangle(-210.4,-47.2,421,252.6), new cjs.Rectangle(-229,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


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


(lib.skip_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.6), new cjs.Rectangle(-140,-60,280,120)];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40.8,-40.8,81.7,81.7), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40.8,-40.8,81.7,81.7)];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.6), new cjs.Rectangle(-140,-60,280,120)];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.6), new cjs.Rectangle(-140,-60,280,120)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.6), new cjs.Rectangle(-140,-60,280,120)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.6), new cjs.Rectangle(-140,-60,280,120)];


(lib.next_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.next_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.93,scaleY:0.93},14).to({scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect, new cjs.Rectangle(-139.2,-59.6,278.6,119.4), new cjs.Rectangle(-138.5,-59.3,277.2,118.8), new cjs.Rectangle(-137.8,-59,275.7,118.1), new cjs.Rectangle(-137.1,-58.7,274.3,117.5), new cjs.Rectangle(-136.4,-58.4,272.9,116.9), new cjs.Rectangle(-135.7,-58.1,271.4,116.3), new cjs.Rectangle(-134.9,-57.8,270,115.6), new cjs.Rectangle(-134.2,-57.4,268.6,115), new cjs.Rectangle(-133.5,-57.1,267.1,114.4), new cjs.Rectangle(-132.8,-56.8,265.7,113.7), new cjs.Rectangle(-132.1,-56.5,264.3,113.1), new cjs.Rectangle(-131.4,-56.2,262.9,112.5), new cjs.Rectangle(-130.7,-55.9,261.4,111.9), new cjs.Rectangle(-130,-55.6,260,111.2), new cjs.Rectangle(-130.4,-55.8,261,111.7), new cjs.Rectangle(-130.9,-56,262,112.1), new cjs.Rectangle(-131.4,-56.2,263,112.6), new cjs.Rectangle(-131.9,-56.4,264,113), new cjs.Rectangle(-132.4,-56.7,265,113.4), new cjs.Rectangle(-132.9,-56.9,266,113.9), new cjs.Rectangle(-133.4,-57.1,267,114.3), new cjs.Rectangle(-133.9,-57.3,268,114.7), new cjs.Rectangle(-134.4,-57.5,269,115.2), new cjs.Rectangle(-134.9,-57.8,270,115.6), new cjs.Rectangle(-135.4,-58,271,116.1), new cjs.Rectangle(-135.9,-58.2,272,116.5), new cjs.Rectangle(-136.4,-58.4,273,116.9), new cjs.Rectangle(-136.9,-58.6,274,117.4), new cjs.Rectangle(-137.4,-58.9,275,117.8), new cjs.Rectangle(-137.9,-59.1,276,118.3), new cjs.Rectangle(-138.4,-59.3,277,118.7), new cjs.Rectangle(-138.9,-59.5,278,119.1), new cjs.Rectangle(-139.4,-59.7,279,119.6), new cjs.Rectangle(-140,-60,280,120)];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:0.801},20).to({alpha:0.012},20).wait(1));

	// graph
	this.instance_1 = new lib.nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoSISQjajbAAk3QAAk1DajcQDcjcE2ABQE3gBDbDcQDbDcAAE1QAAE3jbDbQjbDck3gBQk2ABjcjcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();
	this.instance.setTransform(0,0,0.964,0.963);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-59.9,280,119.9), new cjs.Rectangle(-135,-57.8,270,115.6), new cjs.Rectangle(-140,-59.9,280,119.9)];


(lib.more_games_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_5_2_mc();
	this.instance.setTransform(57.9,161.4,1,1,0,0,0,35.6,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({scaleY:0.84,y:167.4},3).to({scaleY:1,y:123.3},7,cjs.Ease.get(1)).to({y:161.4},7,cjs.Ease.get(-1)).to({scaleY:0.79,y:169.1},3).to({scaleY:1,y:161.4},3).wait(11));

	// animation
	this.instance_1 = new lib.more_games_2_2_mc();
	this.instance_1.setTransform(169.6,145,0.68,0.68,24,0,0,47.6,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:63.3,rotation:-6,x:148.9,y:148.8},12,cjs.Ease.get(1)).to({regY:63.2,rotation:24,x:169.6,y:145},13,cjs.Ease.get(1)).to({regY:63.3,rotation:-6,x:148.9,y:148.8},11).to({regY:63.2,rotation:24,x:169.6,y:145},18).wait(1));

	// animation
	this.instance_2 = new lib.more_games_1_2_mc();
	this.instance_2.setTransform(99.8,116.3,1,1,0,0,0,49.1,38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({scaleY:0.62,y:127.3},3).to({scaleX:0.91,scaleY:1.02,y:67},9,cjs.Ease.get(1)).to({regY:38.1,scaleX:0.94,scaleY:1.02,x:102.3,y:118},8,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.71,x:102,y:129.6},3).to({regY:38.2,scaleX:1,scaleY:1,x:99.8,y:116.3},4).wait(22));

	// animation
	this.instance_3 = new lib.more_games_1_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55));

	// animation
	this.instance_4 = new lib.more_games_3_2_mc();
	this.instance_4.setTransform(106.6,122.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55));

	// animation
	this.instance_5 = new lib.more_games_6_2_mc();
	this.instance_5.setTransform(107,121.5,1.061,1.061,0,0,0,97.9,98.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:33.4,x:106.9},54).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,216.5,226.7);
p.frameBounds = [rect, new cjs.Rectangle(0,0,211.8,227.6), new cjs.Rectangle(0,0,212.7,228.6), new cjs.Rectangle(-0.2,0,214.3,229.8), new cjs.Rectangle(-1.2,0,216.1,230.7), new cjs.Rectangle(-2.4,0,218.7,231.9), new cjs.Rectangle(-3.3,0,220.4,232.9), new cjs.Rectangle(-4.5,0,222.9,234), new cjs.Rectangle(-5.4,0,224.7,234.9), new cjs.Rectangle(-6.6,0,227,236.1), new cjs.Rectangle(-7.5,0,228.8,237), new cjs.Rectangle(-8.7,0,231.1,238.1), new cjs.Rectangle(-9.5,0,232.8,238.9), new cjs.Rectangle(-10.6,0,235.1,240), new cjs.Rectangle(-11.4,0,236.7,240.8), new cjs.Rectangle(-12.5,0,238.9,242), new cjs.Rectangle(-13.4,0,240.5,242.7), new cjs.Rectangle(-14.4,-0.5,242.6,244.4), new cjs.Rectangle(-15.2,-1.3,244.1,245.9), new cjs.Rectangle(-16.2,-2.3,246.2,248), new cjs.Rectangle(-17,-3,247.7,249.4), new cjs.Rectangle(-17.9,-4,249.6,251.4), new cjs.Rectangle(-18.6,-4.7,251.1,252.8), new cjs.Rectangle(-19.4,-5.4,252.5,254.2), new cjs.Rectangle(-20.4,-6.3,254.4,256), new cjs.Rectangle(-21.1,-7,255.8,257.4), new cjs.Rectangle(-21.9,-7.9,257.6,259.2), new cjs.Rectangle(-22.6,-8.6,259,260.5), new cjs.Rectangle(-23.5,-9.4,260.7,262.2), new cjs.Rectangle(-24.1,-10,262,263.4), new cjs.Rectangle(-25,-10.9,263.6,265.1), new cjs.Rectangle(-25.6,-11.4,264.8,266.3), new cjs.Rectangle(-26.3,-12.2,266.5,267.9), new cjs.Rectangle(-26.9,-12.8,267.6,269), new cjs.Rectangle(-27.7,-13.5,269.2,270.5), new cjs.Rectangle(-28.2,-14.1,270.3,271.5), new cjs.Rectangle(-29,-14.8,271.7,273), new cjs.Rectangle(-29.5,-15.3,272.8,274), new cjs.Rectangle(-30.2,-16,274.2,275.4), new cjs.Rectangle(-30.7,-16.5,275.2,276.3), new cjs.Rectangle(-31.3,-17.1,276.5,277.6), new cjs.Rectangle(-31.8,-17.6,277.4,278.5), new cjs.Rectangle(-32.5,-18.2,278.7,279.7), new cjs.Rectangle(-32.9,-18.6,279.5,280.6), new cjs.Rectangle(-33.3,-19,280.4,281.4), new cjs.Rectangle(-33.9,-19.6,281.6,282.5), new cjs.Rectangle(-34.3,-20,282.3,283.3), new cjs.Rectangle(-34.8,-20.5,283.4,284.3), new cjs.Rectangle(-35.2,-20.9,284.1,285), new cjs.Rectangle(-35.7,-21.3,285.1,286), new cjs.Rectangle(-36,-21.6,285.8,286.6), new cjs.Rectangle(-36.5,-22.1,286.7,287.5), new cjs.Rectangle(-36.8,-22.4,287.3,288), new cjs.Rectangle(-37.3,-22.8,288.2,288.9), new cjs.Rectangle(-37.8,-23.4,289.3,289.9)];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_4_2_mc();
	this.instance.setTransform(0.1,0,1,1,0,0,0,108.3,113.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.2,-113.3,216.5,226.7);
p.frameBounds = [rect];


(lib.logo_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AH0MEQhoAhhlgZQhugbgnhSQgWAjgqAZQgoAXgwAKQgxAJgugFQgwgGgfgUQgeANguALQhCARgrgFQg8gIgYg0QgQAUgdASQgaAQghAMQhWAehTgPQhfgRgdhFQgRgmAKgoQAdh4ANh2QARiRgOhfQgjALggAAQg5gCgigoQhtBjiGArQiQAviDgjQi3gxgEhuQgDgXAJgrIAliwQhJgbgwhAQg3hHAGhYQADhPA8hKQBFhTCDg9QBUgoBigWQBsgZBiAEQDuAIBXClQBzgwBNAsQA5gnA+ABQBEAAApAwQBMg1BUgOQA9gLA4ANQA+APAnAoQAjgdA0gUQA1gUA1gFQB+gLA1BKQApgZA0gPQA2gOAzABIASgwQBehJAkgRQBEghBYAJQBHAIAoAsQApAsABBGQA0hBB5ARQBFAJAsAfQAzAkAIA9QBdAAA0A8QBKgXBQAbQBIAZApBDQAlA9ACBWQADBTgfBTQggBUg7A/QhgByiRAhIAPAwIguAsIgWAHQhbAdgjAHQhIAOg1gSQgqgQgggjIggAiIgQAAQATBjgiBnQgiBphLBFQgYAagbAVQhLA4hbAHIgZABQhOAAhFgng");

	// animation
	this.instance = new lib.logo_4_mc();
	this.instance.setTransform(-300,0,1,1,30);
	this.instance.cache(-77,-252,154,504);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:300},29).wait(71));

	// graph
	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-90,380,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.6), new cjs.Rectangle(-140,-60,280,120)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.6), new cjs.Rectangle(-140,-60,280,120)];


(lib.banner_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.banner_body_2_mc();
	this.instance.setTransform(0,0,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.banner_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.banner_body_1_mc();
	this.instance.setTransform(0,0,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
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
	this.cancelRedirect_btn = new lib.cancel_redirect_btn();
	this.cancelRedirect_btn.setTransform(400,510);
	new cjs.ButtonHelper(this.cancelRedirect_btn, 0, 1, 2, false, new lib.cancel_redirect_btn(), 3);

	this.playRedirect_btn = new lib.play_redirect_btn();
	this.playRedirect_btn.setTransform(400,380);
	new cjs.ButtonHelper(this.playRedirect_btn, 0, 1, 2, false, new lib.play_redirect_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playRedirect_btn},{t:this.cancelRedirect_btn}]}).wait(1));

	// banner
	this.banner_mc = new lib.redirect_5_mc();
	this.banner_mc.setTransform(400,194);

	this.timeline.addTween(cjs.Tween.get(this.banner_mc).wait(1));

	// bg
	this.instance = new lib.redirect_4_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preloader_28_mc();
	this.instance.setTransform(-0.3,0.6,1,1,0,0,0,11.5,11.5);

	this.instance_1 = new lib.preloader_22_mc();
	this.instance_1.setTransform(-0.7,-0.8,1,1,0,0,0,1.6,2.6);

	this.instance_2 = new lib.preloader_26_mc();
	this.instance_2.setTransform(0,0,1,1,0,0,0,18,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.preloader_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_105 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(105).call(this.frame_105).wait(1));

	// graph
	this.instance = new lib.preloader_24_mc();
	this.instance.setTransform(-161.7,-27.6,0.466,0.466,132);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).wait(4));

	// graph
	this.instance_1 = new lib.preloader_24_mc();
	this.instance_1.setTransform(-146.6,-10.4,0.717,0.717,132);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(14));

	// graph
	this.instance_2 = new lib.preloader_24_mc();
	this.instance_2.setTransform(-161.7,5.3,1.74,1.74,132);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).wait(22));

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEFmQgjgbgaAAQgaAAgjAbQgVARg1A0QA0g1AQgUQAcgkAAgaQAAgagcgkQgQgUg0g1QA1A0AVARQAjAcAaAAQAaAAAjgcQAVgRAzg0QgyA1gRAUQgbAkAAAaQAAAaAbAkQARAUAyA1Qgzg0gVgRgADMgLQgQAAgrAoQAmglADgNQAEgSggghIgMALIAMgMIgOgNIAOANQAOgPgDgLQgDgHgUgVQAYAYAJAAQAJAAAYgYQgYAZAAAJQAAAIAYAZQgVgVgHgDQgKgDgQAOQAiAhARgEQAOgDAogmQgrArAAAPQAAAPAtAsQgugrgPAAgAhplcQgQgBgrArQAqgsAAgOQAAgQgtguQAuAtAQAAQAPAAAugtQgtAuAAAQQAAAOAqAsQgrgrgPABg");
	this.shape.setTransform(-156.1,-9.1,0.511,0.511);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(84).to({_off:false},0).wait(22));

	// graph
	this.instance_3 = new lib.preloader_3_tween("synched",0);
	this.instance_3.setTransform(1191.4,271.6,4.528,4.528);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({scaleX:1,scaleY:1,x:134.8,y:49.4,alpha:1},23,cjs.Ease.get(1)).to({scaleX:0.94,scaleY:0.94,x:117.7,y:45.4},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:134.8,y:49.4},2).wait(23));

	// graph
	this.instance_4 = new lib.preloader_1_tween("synched",0);
	this.instance_4.setTransform(-0.3,1.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({alpha:1},3).to({alpha:0},4).to({alpha:1},3).to({alpha:0.57},2).to({alpha:1},2).to({startPosition:0},30).wait(40));

	// graph
	this.instance_5 = new lib.preloader_2_tween("synched",0);
	this.instance_5.setTransform(-1.5,7.3,0.046,0.046);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:-0.3,y:1.6,alpha:1},13).to({scaleX:0.88,scaleY:0.88},4).to({scaleX:1,scaleY:1},4).to({startPosition:0},44).wait(40));

	// graph
	this.instance_6 = new lib.preloader_4_tween("synched",0);
	this.instance_6.setTransform(-1.5,7.6,0.046,0.046);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13).to({scaleX:0.9,scaleY:0.9},4).to({scaleX:1,scaleY:1},4).to({startPosition:0},44).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-11.6,3.8,20.1,9.1), new cjs.Rectangle(-27.7,-2.2,52.4,23.8), new cjs.Rectangle(-43.9,-8.3,84.7,38.5), new cjs.Rectangle(-60,-14.3,117,53.2), new cjs.Rectangle(-76.2,-20.4,149.3,67.9), new cjs.Rectangle(-92.3,-26.5,181.6,82.6), new cjs.Rectangle(-108.4,-32.5,213.9,97.3), new cjs.Rectangle(-124.6,-38.6,246.2,111.9), new cjs.Rectangle(-140.8,-44.6,278.5,126.6), new cjs.Rectangle(-156.9,-50.7,310.8,141.3), new cjs.Rectangle(-173.1,-56.7,343.1,156), new cjs.Rectangle(-189.2,-62.7,375.4,170.7), new cjs.Rectangle(-205.3,-68.8,407.7,185.3), new cjs.Rectangle(-221.5,-74.9,440,200), new cjs.Rectangle(-215.8,-72.7,428.5,194.8), new cjs.Rectangle(-210,-70.6,417,189.6), new cjs.Rectangle(-204.3,-68.4,405.5,184.3), new cjs.Rectangle(-198.5,-66.2,393.9,179.1), new cjs.Rectangle(-204.2,-68.4,405.4,184.3), new cjs.Rectangle(-210,-70.6,417,189.6), new cjs.Rectangle(-215.7,-72.7,428.5,194.8), rect=new cjs.Rectangle(-221.5,-74.9,440,200), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-221.5,-120.7,440,320.1), new cjs.Rectangle(-221.5,-113.4,440,298.8), new cjs.Rectangle(-221.5,-106.7,440,278.5), new cjs.Rectangle(-221.5,-100.3,440,259.2), new cjs.Rectangle(-221.5,-94.1,440,240.9), new cjs.Rectangle(-221.5,-88.3,440,223.4), new cjs.Rectangle(-221.5,-82.7,440,207.9), new cjs.Rectangle(-221.5,-77.5,440,202.6), rect=new cjs.Rectangle(-221.5,-74.9,440,200), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":120});

	// timeline functions:
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(1));

	// logo
	this.logo_mc = new lib.preloader_21_mc();
	this.logo_mc.setTransform(-1.8,130.1,0.85,0.855,0,0,0,-2.1,152.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(121));

	// animation
	this.instance = new lib.preloader_29_mc();
	this.instance.alpha = 0.262;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.8,-4,8,8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.preloader_12_mc();
	this.instance.setTransform(0,0,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.preloader_10_mc();
	this.instance_1.setTransform(0,0,1.333,1.333);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-408.1,-141.4,528.1,282.8);
p.frameBounds = [rect];


(lib.preloader_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.preloader_3_mc();
	this.indicator_mc.setTransform(150,15,1,1,0,0,0,150,15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-25,610,50);
p.frameBounds = [rect];


(lib.orientation_lock_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_7_mc();
	this.instance.setTransform(-15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-10,130,20);
p.frameBounds = [rect];


(lib.orientation_lock_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_9_mc();
	this.instance.setTransform(0,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_5_mc();
	this.instance_1.setTransform(0,235);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_4_mc();
	this.instance_2.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.orientation_lock_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-280,300,560);
p.frameBounds = [rect];


(lib.orientation_lock_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_10_mc();
	this.instance.setTransform(400,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_2_mc();
	this.instance_1.setTransform(200,280.1,0.833,0.833,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_2_mc();
	this.instance_2.setTransform(520,430,0.833,0.833,90);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,46.7,678.3,508.3);
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
	this.text = new cjs.Text("instruction", "46px 'Lobster 1.4'", "#FF0000");
	this.text.lineHeight = 60;
	this.text.lineWidth = 278;
	this.text.setTransform(272,256);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// screen
	this.screen_mc = new lib.instruction_1_mc();
	this.screen_mc.setTransform(600,300,1,1,0,0,0,600,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.top_8_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top8_mc();
	this.instance.setTransform(-1.1,65.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AohhFIFgoOIEHgBIHcMCIjKGWIq8ARg");
	this.shape.setTransform(7.5,50.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-8.9,109.3,119.5);
p.frameBounds = [rect];


(lib.top_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top8_mc();
	this.instance.setTransform(-0.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRg5IF/n6IEdAAIGHKbIixHFIsBAHg");
	this.shape.setTransform(3.7,46.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.4,-9.5,106.2,112.9);
p.frameBounds = [rect];


(lib.top_7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top7_mc();
	this.instance.setTransform(-0.7,65.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoGhbIFSoMID/ABIF/HhIA9GtIhSEuIr4ASg");
	this.shape.setTransform(2,55.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-5.9,103.9,123.3);
p.frameBounds = [rect];


(lib.top_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top7_mc();
	this.instance.setTransform(-1,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al8IhIh6o6IFaoGIENAAIGGIHIhnI5g");
	this.shape.setTransform(0.3,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-6,100.8,109);
p.frameBounds = [rect];


(lib.top_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top6_mc();
	this.instance.setTransform(-1.1,65.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AltHqIiNoBIFxoQIEMAAIFTItIAlFWIiUDMg");
	this.shape.setTransform(2,49.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-6,101.5,110.6);
p.frameBounds = [rect];


(lib.top_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top6_mc();
	this.instance.setTransform(-1,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmIHsIiEoQIFjnSIFUgBIFiIaIhuHVg");
	this.shape.setTransform(0.7,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-5.5,105,101);
p.frameBounds = [rect];


(lib.top_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top5_mc();
	this.instance.setTransform(-1.7,65.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRhGIGBoNIEPACIFlIbIAuF4IizESIqcAAg");
	this.shape.setTransform(2.3,53.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.7,-6.3,106.2,119.3);
p.frameBounds = [rect];


(lib.top_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top5_mc();
	this.instance.setTransform(-1,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlDIaIj3ndIGepYIGOgDIFJJ4IkoHFg");
	this.shape.setTransform(-0.9,41.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-13.1,114.4,108.7);
p.frameBounds = [rect];


(lib.top_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top4_mc();
	this.instance.setTransform(-1.1,65.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoqiiIGSn0ID5ABIHKLIIjDJdIrdAHg");
	this.shape.setTransform(5.7,60.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-5.4,111.1,132.8);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top4_mc();
	this.instance.setTransform(-0.4,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoOAhIGHoJIE+AAIFYItIh8GcIsvAIg");
	this.shape.setTransform(1.6,42.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.1,-6,105.4,97.9);
p.frameBounds = [rect];


(lib.top_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top3_mc();
	this.instance.setTransform(-1.2,65.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoBh9IGQoGIEBgBIFhIpIARF4IiWFmIrMACg");
	this.shape.setTransform(1.9,59.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-4.7,102.9,129.2);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top3_mc();
	this.instance.setTransform(-1.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An3gIIGZoeIDfgBIF3JBIiZICIq8AMg");
	this.shape.setTransform(-1.2,46.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.6,-8.7,100.9,110.5);
p.frameBounds = [rect];


(lib.top_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top2_mc();
	this.instance.setTransform(-1.1,65.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al1IYIiEpLIF0n6ID+ACIFtIiIAUFwIh5DHg");
	this.shape.setTransform(2.9,49.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.7,-6.3,101.2,111.8);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top2_mc();
	this.instance.setTransform(-1,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmeIDIh0orIGNnlIFFADIFTJZIiFG/g");
	this.shape.setTransform(2.7,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-7.1,106.3,105.3);
p.frameBounds = [rect];


(lib.top_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top1_mc();
	this.instance.setTransform(-1.6,65.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AikKwIljtaIGCoqIEfgBIFhJSIAODzIjJJmg");
	this.shape.setTransform(1.5,65.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.6,-6.7,104.2,145.3);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top1_mc();
	this.instance.setTransform(-1,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnqKDIgprTIF4oyIEkACIGLJWIitKtg");
	this.shape.setTransform(1.6,54.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.6,-9.8,106.6,128.8);
p.frameBounds = [rect];


(lib.pareo_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_pareo6_mc();
	this.instance.setTransform(0.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AhlZDIn7jQMgANgjRIBNjvIG7n2ICTAAIGQHSMACwAmGImPEvg");
	this.shape.setTransform(2.8,152.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.4,-8.2,124.6,321);
p.frameBounds = [rect];


(lib.pareo_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_pareo6_mc();
	this.instance.setTransform(-1,79,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlkZ6IqOnRMAHtgktIGTn4IEkAAIGTJYMAGuAiSIp8IPg");
	this.shape.setTransform(-0.9,156.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-9.5,202.4,332.4);
p.frameBounds = [rect];


(lib.pareo_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo6_mc();
	this.instance.setTransform(4.5,72.7,1,1,0,0,0,11,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApklNIHqpaIEvABIGvI6IC4TcI43A4g");
	this.shape.setTransform(0.5,85.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-7.9,166.7,187.4);
p.frameBounds = [rect];


(lib.pareo_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo6_mc();
	this.instance.setTransform(12,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqDD4IAEkgIFmp0IF1gCIIoK/It5J+g");
	this.shape.setTransform(8,58.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.4,-9,128.9,134.3);
p.frameBounds = [rect];


(lib.pareo_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_pareo5_mc();
	this.instance.setTransform(1,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Arpg0ICh39IGAnEIE+ABIF7GtID5QMMgLhAomIm9ALg");
	this.shape.setTransform(3.9,197.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.6,-5.9,149.2,407.7);
p.frameBounds = [rect];


(lib.pareo_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_pareo5_mc();
	this.instance.setTransform(-1.5,79,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnJJPImonHIgDiqILquHIEhAAIGWICIFITrIi3Bmg");
	this.shape.setTransform(-1.7,86.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.2,-7.5,177.1,187.8);
p.frameBounds = [rect];


(lib.pareo_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo5_mc();
	this.instance.setTransform(4.5,72.7,1,1,0,0,0,11,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtWlyIJ6shIGBAAIGvJBIEDZwIyQB2g");
	this.shape.setTransform(5.3,107.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.2,-10,171,234.5);
p.frameBounds = [rect];


(lib.pareo_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo5_mc();
	this.instance.setTransform(12.5,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApjDwIgMlGIGipIIF9gCIHAKhIgCBRIsrJPg");
	this.shape.setTransform(2.5,59.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.9,-7.5,124.9,134.6);
p.frameBounds = [rect];


(lib.pareo_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_pareo4_mc();
	this.instance.setTransform(0.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYAwIA5lcIG7oaIEHgCIGmJFIAQLEIiLDwItwCYg");
	this.shape.setTransform(-3.6,76.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.8,-7.8,120.4,168.3);
p.frameBounds = [rect];


(lib.pareo_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_pareo4_mc();
	this.instance.setTransform(-1,79,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AreSwIB+81IIeo9IE1AAIGGI3IBmL7Ig8RTg");
	this.shape.setTransform(-6.6,114.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.1,-7,147.1,243.9);
p.frameBounds = [rect];


(lib.pareo_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo4_mc();
	this.instance.setTransform(4.5,72.7,1,1,0,0,0,11,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoDlmIGeoZIECAAIHJJnIAAQAIzLCZg");
	this.shape.setTransform(-3.5,81.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-8,123,179.4);
p.frameBounds = [rect];


(lib.pareo_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo4_mc();
	this.instance.setTransform(12,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnFGuIAAojIEck4IDyAAIF9HHIAAGUg");
	this.shape.setTransform(5.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-209.5,-6.5,405,326.4);
p.frameBounds = [rect];


(lib.pareo_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_pareo3_mc();
	this.instance.setTransform(1,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsZf5MACRg62IGhnAIGDAAIGTF7MADrA59IsoEDg");
	this.shape.setTransform(6.3,207.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.1,-10,158.9,435);
p.frameBounds = [rect];


(lib.pareo_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_pareo3_mc();
	this.instance.setTransform(-1,79,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap5FIIAWq0IG1ooIFOAAIHaJ4IgGIOImaJlIlqA+g");
	this.shape.setTransform(2.3,82.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.1,-9,126.9,183.5);
p.frameBounds = [rect];


(lib.pareo_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo3_mc();
	this.instance.setTransform(4.5,72.7,1,1,0,0,0,11,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApyjMIF5nnIDgADIHXHIIDyNXI1fBFg");
	this.shape.setTransform(10.2,60.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.6,-8.5,137.7,138.5);
p.frameBounds = [rect];


(lib.pareo_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo3_mc();
	this.instance.setTransform(12,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqwKOIi5tjIGgorIGsAAIOHOBItpJ/g");
	this.shape.setTransform(21.6,67.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.9,-9,175,153.8);
p.frameBounds = [rect];


(lib.pareo_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_pareo2_mc();
	this.instance.setTransform(1,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq8LPICs6YIH5rJIFGABIEjERIBrQVIgBfrIjQASg");
	this.shape.setTransform(-14.1,159.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.2,-8.4,140.4,336.6);
p.frameBounds = [rect];


(lib.pareo_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_pareo2_mc();
	this.instance.setTransform(-1.5,79,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvlZdMAHQgqpIHipMIE7AAIGkJIMAE6Arpg");
	this.shape.setTransform(-7,161.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.8,-7.5,199.7,338);
p.frameBounds = [rect];


(lib.pareo_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo2_mc();
	this.instance.setTransform(2.5,80.7,1,1,0,0,0,9,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokkVIGopFIDyAAIFdFvIB+H8ImdKhIsECpg");
	this.shape.setTransform(2.3,76.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.1,-9.5,118.8,171.9);
p.frameBounds = [rect];


(lib.pareo_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo2_mc();
	this.instance.setTransform(11.5,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aqrg2IFSo4IF3ABIKOMmIsQGsIpHAKg");
	this.shape.setTransform(14,54.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.4,-7.9,136.9,124.7);
p.frameBounds = [rect];


(lib.pareo_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_pareo1_mc();
	this.instance.setTransform(1,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApoKFIAAvfIGGnwIGUABIFpFBIBOS1IjKCJIrVAVg");
	this.shape.setTransform(0.8,76.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.9,-7.9,123.5,168.8);
p.frameBounds = [rect];


(lib.pareo_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_pareo1_mc();
	this.instance.setTransform(-1.5,79,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtxLiIgii/IJe2FIJpAAIJgTZIgcF6IkMA+IrhA0g");
	this.shape.setTransform(-0.7,80.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.3,-6,183.3,173.6);
p.frameBounds = [rect];


(lib.pareo_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_pareo1_mc();
	this.instance.setTransform(-6.5,168.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxLTQMAHtgmLIIXpjIDwgBIIAKeMAGjAoQItHGRg");
	this.shape.setTransform(-4.8,173.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.9,-8.8,220.2,365);
p.frameBounds = [rect];


(lib.pareo_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_pareo1_mc();
	this.instance.setTransform(12,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar7BgIGVrfIHDAEIKfPYIm5EBIwbAhg");
	this.shape.setTransform(14.1,54.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.3,-9.2,152.9,128);
p.frameBounds = [rect];


(lib.location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(85,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_8_img();
	this.instance_1.setTransform(-140,-190);

	this.instance_2 = new lib.location_1_8_img();
	this.instance_2.setTransform(-140,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am5VsInnj1IlrmDIiZpyICbnHIQGw3IIABBIQ8QqIBsKBIilHVIm3GGInsCyg");
	this.shape.setTransform(-0.1,45.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.6,-190,289.1,380);
p.frameBounds = [rect, rect, rect];


(lib.location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(85,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_7_img();
	this.instance_1.setTransform(-140,-190);

	this.instance_2 = new lib.location_1_7_img();
	this.instance_2.setTransform(-140,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArDVuIoGluIjLn5IARmtIHXwGIKEo/INuAAINAYRIAPHLIjDHlInfFoImqCRImoAdg");
	this.shape.setTransform(-0.1,37.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143,-190,285.9,380);
p.frameBounds = [rect, rect, rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(85,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_6_img();
	this.instance_1.setTransform(-140,-190);

	this.instance_2 = new lib.location_1_6_img();
	this.instance_2.setTransform(-140,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtjTcIl2lDIjHppIBtmjINuy7IH/ieIH2DfIMdRpIBUGEIg8HGIloHFInVEBIrCBBg");
	this.shape.setTransform(-0.8,39.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.9,-190,288.3,380);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(85,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_5_img();
	this.instance_1.setTransform(-140,-190);

	this.instance_2 = new lib.location_1_5_img();
	this.instance_2.setTransform(-140,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtZTwIm2mSIh7o9IHd36IFVjOIQHgXIFhDNIJ1TxIAGIJIhTD7IkLFRIlYDeIl2B8IpuAPg");
	this.shape.setTransform(-1,38.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.9,-190,283.8,380);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(85,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-140,-190);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-140,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtdYGInnn+IhgnuIK/+fIIplTIJaCQIQHe/IgxJBIkBFkIn/FXItUBmg");
	this.shape.setTransform(1.3,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.2,-190,289.1,380);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(85,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-140,-190);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-140,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtmU1IlDk0IjSlAIgPobIPM6AIMMiOIQwbXIANFpIhxHFIk0FhIlsDQIrjCbg");
	this.shape.setTransform(0.7,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.2,-190,283.9,381.1);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(85,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-140,-190);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-140,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AviSKImPn8IgtpMIIh1UIT9iJIG7E8IJkTNIg6G6IkjIoIlmD3IuJBVg");
	this.shape.setTransform(2.9,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141,-190,288,380);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(85,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-140,-190);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-140,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsnRzImsl9IjnqVIFP2AIeVAKIKRIzIhHRAIlOIxInFFIIqKBJg");
	this.shape.setTransform(3.3,56.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.4,-190,293.5,380);
p.frameBounds = [rect, rect, rect];


(lib.indicator_part_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.indicator_part_3_mc();
	this.instance.alpha = 0.5;
	this.instance.cache(-2,-2,364,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5mCgQhCAAgwgwQgugugBhCQABhAAugwQAwguBCgBIZbAAIALANIAMgNIZbAAQBCABAwAuQAuAwABBAQgBBCguAuQgwAwhCAAg");
	mask.setTransform(180,16);

	// text
	this.output_numbers_comp = new lib.output_numbers_1_mc();
	this.output_numbers_comp.setTransform(150.1,-39.4,0.6,0.6,0,0,0,0.1,1);

	this.output_numbers_comp.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.output_numbers_comp).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_part_2_mc();

	this.indicator_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance_1 = new lib.indicator_part_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.hint_rub_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.animation_rubbing_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-61.3,180,111.4);
p.frameBounds = [rect, rect];


(lib.hint_rub_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(this.body_mc)
		{
			if(createjs.Touch.isSupported())
			{
				this.body_mc.gotoAndStop(1);
			}
			else
			{
				this.body_mc.gotoAndStop(0);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.hint_rub_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-61.3,180,111.4);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(685,315);

	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(295,310.3,1,1,0,0,0,0,0.3);

	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(120,360.2,1,1,0,0,0,0,0.2);

	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(485,320.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_3,p:{x:485,y:320.4}},{t:this.hero_1,p:{x:120,y:360.2}},{t:this.hero_2,p:{x:295,y:310.3}},{t:this.hero_4,p:{x:685,y:315}}]}).to({state:[{t:this.hero_1,p:{x:400,y:470.2}}]},1).to({state:[{t:this.hero_2,p:{x:390,y:320.3}}]},1).to({state:[{t:this.hero_3,p:{x:390,y:325.4}}]},1).to({state:[{t:this.hero_4,p:{x:410,y:320}}]},1).to({state:[{t:this.hero_3,p:{x:485,y:370.4}},{t:this.hero_1,p:{x:120,y:410.2}},{t:this.hero_2,p:{x:295,y:355.3}},{t:this.hero_4,p:{x:685,y:360}}]},1).to({state:[{t:this.hero_1,p:{x:380,y:340.2}}]},1).to({state:[{t:this.hero_2,p:{x:390,y:335.3}}]},1).to({state:[{t:this.hero_3,p:{x:385,y:340.4}}]},1).to({state:[{t:this.hero_4,p:{x:370,y:340}}]},1).to({state:[{t:this.hero_3,p:{x:485,y:335.4}},{t:this.hero_1,p:{x:120,y:375.2}},{t:this.hero_2,p:{x:295,y:320.3}},{t:this.hero_4,p:{x:685,y:340}}]},1).to({state:[{t:this.hero_1,p:{x:345,y:390.2}}]},1).to({state:[{t:this.hero_2,p:{x:385,y:320.3}}]},1).to({state:[{t:this.hero_3,p:{x:390,y:325.4}}]},1).to({state:[{t:this.hero_4,p:{x:410,y:320}}]},1).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-3.7,1200,636.7);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,743), new cjs.Rectangle(-200,0,1200,613.4), new cjs.Rectangle(-200,0,1200,616.9), new cjs.Rectangle(-200,0,1200,609.5), new cjs.Rectangle(-200,0,1200,683), new cjs.Rectangle(-200,0,1200,613), new cjs.Rectangle(-200,0,1200,628.4), new cjs.Rectangle(-200,0,1200,631.9), new cjs.Rectangle(-200,0,1200,629.5), new cjs.Rectangle(-200,0,1200,648), new cjs.Rectangle(-200,0,1200,663), new cjs.Rectangle(-200,0,1200,613.4), new cjs.Rectangle(-200,0,1200,616.9), new cjs.Rectangle(-200,0,1200,609.5)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_main_mc();
	this.instance.setTransform(645,350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_main_mc();
	this.instance_1.setTransform(320,345.3,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero1_main_mc();
	this.instance_2.setTransform(130,365.2,1,1,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero3_main_mc();
	this.instance_3.setTransform(475,335.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128.9,29.9,888.3,608.1);
p.frameBounds = [rect];


(lib.closet_makeup_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(180,-150);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(180,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_0}]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_4_mc();
	this.blush_6.setTransform(-100,-300);

	this.blush_5 = new lib.blush_5_4_mc();
	this.blush_5.setTransform(-10,-125);

	this.blush_4 = new lib.blush_4_4_mc();
	this.blush_4.setTransform(-120,-125);

	this.blush_3 = new lib.blush_3_4_mc();
	this.blush_3.setTransform(120,-300);

	this.blush_2 = new lib.blush_2_4_mc();
	this.blush_2.setTransform(10,-300);

	this.blush_1 = new lib.blush_1_4_mc();
	this.blush_1.setTransform(100,-125);

	this.lips_6 = new lib.lips_6_4_mc();
	this.lips_6.setTransform(-80,-315);

	this.lips_5 = new lib.lips_5_4_mc();
	this.lips_5.setTransform(-20,-135);

	this.lips_4 = new lib.lips_4_4_mc();
	this.lips_4.setTransform(20,-315);

	this.lips_3 = new lib.lips_3_4_mc();
	this.lips_3.setTransform(120,-315);

	this.lips_2 = new lib.lips_2_4_mc();
	this.lips_2.setTransform(-120,-135);

	this.lips_1 = new lib.lips_1_4_mc();
	this.lips_1.setTransform(80,-135);

	this.shadows_6 = new lib.shadows_6_4_mc();
	this.shadows_6.setTransform(-100,-305);

	this.shadows_5 = new lib.shadows_5_4_mc();
	this.shadows_5.setTransform(-10,-125);

	this.shadows_4 = new lib.shadows_4_4_mc();
	this.shadows_4.setTransform(-120,-125);

	this.shadows_3 = new lib.shadows_3_4_mc();
	this.shadows_3.setTransform(120,-305);

	this.shadows_2 = new lib.shadows_2_4_mc();
	this.shadows_2.setTransform(10,-305);

	this.shadows_1 = new lib.shadows_1_4_mc();
	this.shadows_1.setTransform(100,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-370,373,315);
p.frameBounds = [rect, new cjs.Rectangle(-165,-405,330,360), new cjs.Rectangle(-170,-375,373,320)];


(lib.closet_makeup_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(180,-150);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(180,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_0}]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_3_mc();
	this.blush_6.setTransform(120,-300);

	this.blush_5 = new lib.blush_5_3_mc();
	this.blush_5.setTransform(-10,-125);

	this.blush_4 = new lib.blush_4_3_mc();
	this.blush_4.setTransform(-120,-125);

	this.blush_3 = new lib.blush_3_3_mc();
	this.blush_3.setTransform(-100,-300);

	this.blush_2 = new lib.blush_2_3_mc();
	this.blush_2.setTransform(10,-300);

	this.blush_1 = new lib.blush_1_3_mc();
	this.blush_1.setTransform(100,-125);

	this.lips_6 = new lib.lips_6_3_mc();
	this.lips_6.setTransform(20,-315);

	this.lips_5 = new lib.lips_5_3_mc();
	this.lips_5.setTransform(-20,-135);

	this.lips_4 = new lib.lips_4_3_mc();
	this.lips_4.setTransform(-120,-135);

	this.lips_3 = new lib.lips_3_3_mc();
	this.lips_3.setTransform(120,-315);

	this.lips_2 = new lib.lips_2_3_mc();
	this.lips_2.setTransform(-80,-315);

	this.lips_1 = new lib.lips_1_3_mc();
	this.lips_1.setTransform(80,-135);

	this.shadows_6 = new lib.shadows_6_3_mc();
	this.shadows_6.setTransform(-100,-305);

	this.shadows_5 = new lib.shadows_5_3_mc();
	this.shadows_5.setTransform(-10,-125);

	this.shadows_4 = new lib.shadows_4_3_mc();
	this.shadows_4.setTransform(-120,-125);

	this.shadows_3 = new lib.shadows_3_3_mc();
	this.shadows_3.setTransform(120,-305);

	this.shadows_2 = new lib.shadows_2_3_mc();
	this.shadows_2.setTransform(10,-305);

	this.shadows_1 = new lib.shadows_1_3_mc();
	this.shadows_1.setTransform(100,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-370,373,315);
p.frameBounds = [rect, new cjs.Rectangle(-165,-405,330,360), new cjs.Rectangle(-170,-375,373,320)];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(180,-150);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(180,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_0}]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(-10,-125);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(-100,-300);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(-120,-125);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(120,-300);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(10,-300);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(100,-125);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(-80,-315);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(-20,-135);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(20,-315);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(120,-315);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(-120,-135);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(80,-135);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(-100,-305);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(-10,-125);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(-120,-125);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(120,-305);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(10,-305);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(100,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-370,373,315);
p.frameBounds = [rect, new cjs.Rectangle(-165,-405,330,360), new cjs.Rectangle(-170,-375,373,320)];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(180,-150);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(180,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_0}]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(110,-300);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(-10,-125);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(-110,-125);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(-90,-300);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(10,-300);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(90,-125);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(-80,-315);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-20,-135);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-120,-135);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(120,-315);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(20,-315);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(80,-135);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(-100,-305);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-10,-125);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(-120,-125);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(120,-305);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(10,-305);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(100,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-370,363,315);
p.frameBounds = [rect, new cjs.Rectangle(-165,-405,330,360), new cjs.Rectangle(-170,-375,373,320)];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.body_check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.body_check_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect];


(lib.bodyDressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.closet_makeup_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-370,373,315);
p.frameBounds = [rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_makeup_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-370,373,315);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-370,373,315);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-370,363,315);
p.frameBounds = [rect];


(lib.body_locations_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1).to({y:500},0).wait(23).to({y:-120},20).wait(36));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:500},0).wait(33).to({y:0},15).wait(31));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({y:500},0).wait(38).to({y:0},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-394.9,-310,787.8,500);
p.frameBounds = [rect, rect=new cjs.Rectangle(-394.9,310,787.8,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-394.9,279,787.8,411), new cjs.Rectangle(-394.9,248,787.8,442), new cjs.Rectangle(-394.9,217,787.8,473), new cjs.Rectangle(-394.9,186,787.8,504), new cjs.Rectangle(-394.9,155,787.8,535), new cjs.Rectangle(-394.9,124,787.8,566), new cjs.Rectangle(-394.9,93,787.8,597), new cjs.Rectangle(-394.9,62,787.8,628), new cjs.Rectangle(-394.9,31,787.8,659), new cjs.Rectangle(-394.9,0,787.8,690), new cjs.Rectangle(-394.9,-31,787.8,721), new cjs.Rectangle(-394.9,-62,787.8,752), new cjs.Rectangle(-394.9,-93,787.8,783), new cjs.Rectangle(-394.9,-124,787.8,814), new cjs.Rectangle(-394.9,-155,787.8,845), new cjs.Rectangle(-394.9,-186,787.8,842.7), new cjs.Rectangle(-394.9,-217,787.8,840.4), new cjs.Rectangle(-394.9,-248,787.8,838), new cjs.Rectangle(-394.9,-279,787.8,835.7), new cjs.Rectangle(-394.9,-310,787.8,833.4), new cjs.Rectangle(-394.9,-310,787.8,800), new cjs.Rectangle(-394.9,-310,787.8,766.7), new cjs.Rectangle(-394.9,-310,787.8,733.4), new cjs.Rectangle(-394.9,-310,787.8,700), new cjs.Rectangle(-394.9,-310,787.8,666.7), new cjs.Rectangle(-394.9,-310,787.8,633.4), new cjs.Rectangle(-394.9,-310,787.8,600), new cjs.Rectangle(-394.9,-310,787.8,566.7), new cjs.Rectangle(-394.9,-310,787.8,533.4), rect=new cjs.Rectangle(-394.9,-310,787.8,500), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({y:500},0).wait(23).to({y:-120},20).wait(36));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:500},0).wait(33).to({y:0},15).wait(31));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1).to({y:500},0).wait(38).to({y:0},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-394.9,-310,789.5,500);
p.frameBounds = [rect, rect=new cjs.Rectangle(-394.9,310,789.5,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-394.9,279,789.5,411), new cjs.Rectangle(-394.9,248,789.5,442), new cjs.Rectangle(-394.9,217,789.5,473), new cjs.Rectangle(-394.9,186,789.5,504), new cjs.Rectangle(-394.9,155,789.5,535), new cjs.Rectangle(-394.9,124,789.5,566), new cjs.Rectangle(-394.9,93,789.5,597), new cjs.Rectangle(-394.9,62,789.5,628), new cjs.Rectangle(-394.9,31,789.5,659), new cjs.Rectangle(-394.9,0,789.5,690), new cjs.Rectangle(-394.9,-31,789.5,721), new cjs.Rectangle(-394.9,-62,789.5,752), new cjs.Rectangle(-394.9,-93,789.5,783), new cjs.Rectangle(-394.9,-124,789.5,814), new cjs.Rectangle(-394.9,-155,789.5,845), new cjs.Rectangle(-394.9,-186,789.5,842.7), new cjs.Rectangle(-394.9,-217,789.5,840.4), new cjs.Rectangle(-394.9,-248,789.5,838), new cjs.Rectangle(-394.9,-279,789.5,835.7), new cjs.Rectangle(-394.9,-310,789.5,833.4), new cjs.Rectangle(-394.9,-310,789.5,800), new cjs.Rectangle(-394.9,-310,789.5,766.7), new cjs.Rectangle(-394.9,-310,789.5,733.4), new cjs.Rectangle(-394.9,-310,789.5,700), new cjs.Rectangle(-394.9,-310,789.5,666.7), new cjs.Rectangle(-394.9,-310,789.5,633.4), new cjs.Rectangle(-394.9,-310,789.5,600), new cjs.Rectangle(-394.9,-310,789.5,566.7), new cjs.Rectangle(-394.9,-310,789.5,533.4), rect=new cjs.Rectangle(-394.9,-310,789.5,500), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:500},0).wait(23).to({y:-120},20).wait(36));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:500},0).wait(33).to({y:0},15).wait(31));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({y:500},0).wait(38).to({y:0},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-392.9,-310,785.8,500);
p.frameBounds = [rect, rect=new cjs.Rectangle(-392.9,310,785.8,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-392.9,279,785.8,411), new cjs.Rectangle(-392.9,248,785.8,442), new cjs.Rectangle(-392.9,217,785.8,473), new cjs.Rectangle(-392.9,186,785.8,504), new cjs.Rectangle(-392.9,155,785.8,535), new cjs.Rectangle(-392.9,124,785.8,566), new cjs.Rectangle(-392.9,93,785.8,597), new cjs.Rectangle(-392.9,62,785.8,628), new cjs.Rectangle(-392.9,31,785.8,659), new cjs.Rectangle(-392.9,0,785.8,690), new cjs.Rectangle(-392.9,-31,785.8,721), new cjs.Rectangle(-392.9,-62,785.8,752), new cjs.Rectangle(-392.9,-93,785.8,783), new cjs.Rectangle(-392.9,-124,785.8,814), new cjs.Rectangle(-392.9,-155,785.8,845), new cjs.Rectangle(-392.9,-186,785.8,842.7), new cjs.Rectangle(-392.9,-217,785.8,840.4), new cjs.Rectangle(-392.9,-248,785.8,838), new cjs.Rectangle(-392.9,-279,785.8,835.7), new cjs.Rectangle(-392.9,-310,785.8,833.4), new cjs.Rectangle(-392.9,-310,785.8,800), new cjs.Rectangle(-392.9,-310,785.8,766.7), new cjs.Rectangle(-392.9,-310,785.8,733.4), new cjs.Rectangle(-392.9,-310,785.8,700), new cjs.Rectangle(-392.9,-310,785.8,666.7), new cjs.Rectangle(-392.9,-310,785.8,633.4), new cjs.Rectangle(-392.9,-310,785.8,600), new cjs.Rectangle(-392.9,-310,785.8,566.7), new cjs.Rectangle(-392.9,-310,785.8,533.4), rect=new cjs.Rectangle(-392.9,-310,785.8,500), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:500},0).wait(23).to({y:-120},20).wait(36));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:500},0).wait(33).to({y:0},15).wait(31));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:500},0).wait(38).to({y:0},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-393.2,-310,786.6,500);
p.frameBounds = [rect, rect=new cjs.Rectangle(-393.2,310,786.6,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-393.2,279,786.6,411), new cjs.Rectangle(-393.2,248,786.6,442), new cjs.Rectangle(-393.2,217,786.6,473), new cjs.Rectangle(-393.2,186,786.6,504), new cjs.Rectangle(-393.2,155,786.6,535), new cjs.Rectangle(-393.2,124,786.6,566), new cjs.Rectangle(-393.2,93,786.6,597), new cjs.Rectangle(-393.2,62,786.6,628), new cjs.Rectangle(-393.2,31,786.6,659), new cjs.Rectangle(-393.2,0,786.6,690), new cjs.Rectangle(-393.2,-31,786.6,721), new cjs.Rectangle(-393.2,-62,786.6,752), new cjs.Rectangle(-393.2,-93,786.6,783), new cjs.Rectangle(-393.2,-124,786.6,814), new cjs.Rectangle(-393.2,-155,786.6,845), new cjs.Rectangle(-393.2,-186,786.6,842.7), new cjs.Rectangle(-393.2,-217,786.6,840.4), new cjs.Rectangle(-393.2,-248,786.6,838), new cjs.Rectangle(-393.2,-279,786.6,835.7), new cjs.Rectangle(-393.2,-310,786.6,833.4), new cjs.Rectangle(-393.2,-310,786.6,800), new cjs.Rectangle(-393.2,-310,786.6,766.7), new cjs.Rectangle(-393.2,-310,786.6,733.4), new cjs.Rectangle(-393.2,-310,786.6,700), new cjs.Rectangle(-393.2,-310,786.6,666.7), new cjs.Rectangle(-393.2,-310,786.6,633.4), new cjs.Rectangle(-393.2,-310,786.6,600), new cjs.Rectangle(-393.2,-310,786.6,566.7), new cjs.Rectangle(-393.2,-310,786.6,533.4), rect=new cjs.Rectangle(-393.2,-310,786.6,500), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:500},0).wait(23).to({y:-120},20).wait(36));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:500},0).wait(33).to({y:0},15).wait(31));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:500},0).wait(38).to({y:0},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-391.2,-310,782.2,501.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-391.2,310,782.2,381.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-391.2,279,782.2,412.1), new cjs.Rectangle(-391.2,248,782.2,443.1), new cjs.Rectangle(-391.2,217,782.2,474.1), new cjs.Rectangle(-391.2,186,782.2,505.1), new cjs.Rectangle(-391.2,155,782.2,536.1), new cjs.Rectangle(-391.2,124,782.2,567.1), new cjs.Rectangle(-391.2,93,782.2,598.1), new cjs.Rectangle(-391.2,62,782.2,629.1), new cjs.Rectangle(-391.2,31,782.2,660.1), new cjs.Rectangle(-391.2,0,782.2,691.1), new cjs.Rectangle(-391.2,-31,782.2,721), new cjs.Rectangle(-391.2,-62,782.2,752), new cjs.Rectangle(-391.2,-93,782.2,783), new cjs.Rectangle(-391.2,-124,782.2,814), new cjs.Rectangle(-391.2,-155,782.2,845), new cjs.Rectangle(-391.2,-186,782.2,842.7), new cjs.Rectangle(-391.2,-217,782.2,840.4), new cjs.Rectangle(-391.2,-248,782.2,838), new cjs.Rectangle(-391.2,-279,782.2,835.7), new cjs.Rectangle(-391.2,-310,782.2,833.4), new cjs.Rectangle(-391.2,-310,782.2,800), new cjs.Rectangle(-391.2,-310,782.2,766.7), new cjs.Rectangle(-391.2,-310,782.2,733.4), new cjs.Rectangle(-391.2,-310,782.2,700), new cjs.Rectangle(-391.2,-310,782.2,666.7), new cjs.Rectangle(-391.2,-310,782.2,633.4), new cjs.Rectangle(-391.2,-310,782.2,600), new cjs.Rectangle(-391.2,-310,782.2,566.7), new cjs.Rectangle(-391.2,-310,782.2,533.4), rect=new cjs.Rectangle(-391.2,-310,782.2,501.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:500},0).wait(23).to({y:-120},20).wait(36));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:500},0).wait(33).to({y:0},15).wait(31));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:500},0).wait(38).to({y:0},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-391,-310,786.9,500);
p.frameBounds = [rect, rect=new cjs.Rectangle(-391,310,786.9,381.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-391,279,786.9,411), new cjs.Rectangle(-391,248,786.9,442), new cjs.Rectangle(-391,217,786.9,473), new cjs.Rectangle(-391,186,786.9,504), new cjs.Rectangle(-391,155,786.9,535), new cjs.Rectangle(-391,124,786.9,566), new cjs.Rectangle(-391,93,786.9,597), new cjs.Rectangle(-391,62,786.9,628), new cjs.Rectangle(-391,31,786.9,659), new cjs.Rectangle(-391,0,786.9,690), new cjs.Rectangle(-391,-31,786.9,721), new cjs.Rectangle(-391,-62,786.9,752), new cjs.Rectangle(-391,-93,786.9,783), new cjs.Rectangle(-391,-124,786.9,814), new cjs.Rectangle(-391,-155,786.9,845), new cjs.Rectangle(-391,-186,786.9,842.7), new cjs.Rectangle(-391,-217,786.9,840.4), new cjs.Rectangle(-391,-248,786.9,838), new cjs.Rectangle(-391,-279,786.9,835.7), new cjs.Rectangle(-391,-310,786.9,833.4), new cjs.Rectangle(-391,-310,786.9,800), new cjs.Rectangle(-391,-310,786.9,766.7), new cjs.Rectangle(-391,-310,786.9,733.4), new cjs.Rectangle(-391,-310,786.9,700), new cjs.Rectangle(-391,-310,786.9,666.7), new cjs.Rectangle(-391,-310,786.9,633.4), new cjs.Rectangle(-391,-310,786.9,600), new cjs.Rectangle(-391,-310,786.9,566.7), new cjs.Rectangle(-391,-310,786.9,533.4), rect=new cjs.Rectangle(-391,-310,786.9,500), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:500},0).wait(23).to({y:-120},20).wait(36));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:500},0).wait(33).to({y:0},15).wait(31));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:500},0).wait(38).to({y:0},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-393.4,-310,786.1,501.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-393.4,310,786.1,381.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-393.4,279,786.1,412.1), new cjs.Rectangle(-393.4,248,786.1,443.1), new cjs.Rectangle(-393.4,217,786.1,474.1), new cjs.Rectangle(-393.4,186,786.1,505.1), new cjs.Rectangle(-393.4,155,786.1,536.1), new cjs.Rectangle(-393.4,124,786.1,567.1), new cjs.Rectangle(-393.4,93,786.1,598.1), new cjs.Rectangle(-393.4,62,786.1,629.1), new cjs.Rectangle(-393.4,31,786.1,660.1), new cjs.Rectangle(-393.4,0,786.1,691.1), new cjs.Rectangle(-393.4,-31,786.1,722.1), new cjs.Rectangle(-393.4,-62,786.1,753.1), new cjs.Rectangle(-393.4,-93,786.1,784.1), new cjs.Rectangle(-393.4,-124,786.1,815.1), new cjs.Rectangle(-393.4,-155,786.1,846.1), new cjs.Rectangle(-393.4,-186,786.1,843.8), new cjs.Rectangle(-393.4,-217,786.1,841.5), new cjs.Rectangle(-393.4,-248,786.1,839.1), new cjs.Rectangle(-393.4,-279,786.1,836.8), new cjs.Rectangle(-393.4,-310,786.1,834.5), new cjs.Rectangle(-393.4,-310,786.1,801.1), new cjs.Rectangle(-393.4,-310,786.1,767.8), new cjs.Rectangle(-393.4,-310,786.1,734.5), new cjs.Rectangle(-393.4,-310,786.1,701.1), new cjs.Rectangle(-393.4,-310,786.1,667.8), new cjs.Rectangle(-393.4,-310,786.1,634.5), new cjs.Rectangle(-393.4,-310,786.1,601.1), new cjs.Rectangle(-393.4,-310,786.1,567.8), new cjs.Rectangle(-393.4,-310,786.1,534.5), rect=new cjs.Rectangle(-393.4,-310,786.1,501.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:500},0).wait(23).to({y:-120},20).wait(36));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:500},0).wait(33).to({y:0},15).wait(31));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:500},0).wait(38).to({y:0},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-391,-310,783.7,501.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-391,310,783.7,381.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-391,279,783.7,412.1), new cjs.Rectangle(-391,248,783.7,443.1), new cjs.Rectangle(-391,217,783.7,474.1), new cjs.Rectangle(-391,186,783.7,505.1), new cjs.Rectangle(-391,155,783.7,536.1), new cjs.Rectangle(-391,124,783.7,567.1), new cjs.Rectangle(-391,93,783.7,598.1), new cjs.Rectangle(-391,62,783.7,629.1), new cjs.Rectangle(-391,31,783.7,660.1), new cjs.Rectangle(-391,0,783.7,691.1), new cjs.Rectangle(-391,-31,783.7,722.1), new cjs.Rectangle(-391,-62,783.7,753.1), new cjs.Rectangle(-391,-93,783.7,784.1), new cjs.Rectangle(-391,-124,783.7,815.1), new cjs.Rectangle(-391,-155,783.7,846.1), new cjs.Rectangle(-391,-186,783.7,843.8), new cjs.Rectangle(-391,-217,783.7,841.5), new cjs.Rectangle(-391,-248,783.7,839.1), new cjs.Rectangle(-391,-279,783.7,836.8), new cjs.Rectangle(-391,-310,783.7,834.5), new cjs.Rectangle(-391,-310,783.7,801.1), new cjs.Rectangle(-391,-310,783.7,767.8), new cjs.Rectangle(-391,-310,783.7,734.5), new cjs.Rectangle(-391,-310,783.7,701.1), new cjs.Rectangle(-391,-310,783.7,667.8), new cjs.Rectangle(-391,-310,783.7,634.5), new cjs.Rectangle(-391,-310,783.7,601.1), new cjs.Rectangle(-391,-310,783.7,567.8), new cjs.Rectangle(-391,-310,783.7,534.5), rect=new cjs.Rectangle(-391,-310,783.7,501.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.screen_mc = new lib.copyright_1_mc();
	this.screen_mc.setTransform(1000,600,1,1,0,0,0,600,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.prev_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.next_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.next_2_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_2_mc();

	this.instance_1 = new lib.next_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.964,scaleY:0.964,alpha:0.801}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect, rect, new cjs.Rectangle(-135,-57.8,270,115.6), new cjs.Rectangle(-140,-60,280,120)];


(lib.moreGames_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_mc();
	this.instance.setTransform(0,0,0.924,0.923);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArCLDQklklABmeQgBmdElklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.9,-104.6,200,209.3);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-100,-100,200,200)];


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_2_mc();
	this.instance.setTransform(-82.9,0,0.553,0.553,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-82.9,alpha:0.801},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270.7,-140.3,375.8,280.6);
p.frameBounds = [rect, new cjs.Rectangle(-283.6,-146.9,393.6,293.9), new cjs.Rectangle(-270.7,-140.3,375.8,280.6), new cjs.Rectangle(-283.6,-146.9,393.6,293.9)];


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

	// btn
	this.play_mc = new lib.preloader_13_mc();
	this.play_mc.setTransform(400,460);

	this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.preloader_8_mc();
	this.indicator_mc.setTransform(400,460);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// animation
	this.animation_mc = new lib.preloader_20_mc();
	this.animation_mc.setTransform(400,250);

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// bg
	this.bg_mc = new lib.preloader_17_mc();
	this.bg_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,601.4);
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
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(660,530,0.963,0.963);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,950,0.901,0.86);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(400.1,550.2,0.815,0.814,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instruction_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.logo_btn},{t:this.credits_btn},{t:this.moreGames_btn},{t:this.play_btn}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(400,420);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_decor_mc();
	this.instance_1.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance_1.alpha = 0.199;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_2_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,1116.9);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logo_1_mc();
	this.logo_btn.setTransform(90.1,50.2,0.421,0.421,0,0,0,0.1,0.4);
	this.logo_btn.cache(-192,-92,384,184);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-3.7,1200,636.7);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5,location_7:6,location_8:7});

	// body
	this.frame_1_mc = new lib.body_locations_1_mc();

	this.frame_2_mc = new lib.body_locations_2_mc();

	this.frame_3_mc = new lib.body_locations_3_mc();

	this.frame_4_mc = new lib.body_locations_4_mc();

	this.frame_5_mc = new lib.body_locations_5_mc();

	this.frame_6_mc = new lib.body_locations_6_mc();

	this.frame_7_mc = new lib.body_locations_7_mc();

	this.frame_8_mc = new lib.body_locations_8_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.frame_8_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-391,-310,783.7,501.1);
p.frameBounds = [rect, new cjs.Rectangle(-393.4,-310,786.1,501.1), new cjs.Rectangle(-391,-310,786.9,500), new cjs.Rectangle(-391.2,-310,782.2,501.1), new cjs.Rectangle(-393.2,-310,786.6,500), new cjs.Rectangle(-392.9,-310,785.8,500), new cjs.Rectangle(-394.9,-310,789.5,500), new cjs.Rectangle(-394.9,-310,787.8,500)];


(lib.indicator_part_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_part_1_mc();
	this.indicator_mc.setTransform(-180,-16);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance = new lib.indicator_part_6_mc();
	this.instance.cache(-202,-32,404,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-68,400,98);
p.frameBounds = [rect];


(lib.hairstyle_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_4_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_3_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_4_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_3_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_4_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_3_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_4_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_3_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_4_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_3_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_4_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_3_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,53);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,230,220);
p.frameBounds = [rect];


(lib.dressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,200);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(50,10);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-50,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-370,420,620);
p.frameBounds = [rect];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,200);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(50,10);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-50,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-370,420,620);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,200);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(50,10);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-50,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-370,420,620);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,200);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(50,10);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-50,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-370,420,620);
p.frameBounds = [rect];


(lib.closet_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.pareo_0 = new lib.pareo_0_mc();
	this.pareo_0.setTransform(137,-150);

	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(137,80);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(137,-80);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(137,-215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.pareo_0}]},5).to({state:[{t:this.headdress_0},{t:this.accessory_0},{t:this.shoes_0}]},2).wait(1));

	// options
	this.hair_2 = new lib.hairstyle_2_4_mc();
	this.hair_2.setTransform(0,30);

	this.hair_1 = new lib.hairstyle_1_4_mc();
	this.hair_1.setTransform(0,-180);

	this.hair_3 = new lib.hairstyle_3_4_mc();
	this.hair_3.setTransform(0,-180);

	this.hair_4 = new lib.hairstyle_4_4_mc();
	this.hair_4.setTransform(0,30);

	this.hair_6 = new lib.hairstyle_6_4_mc();
	this.hair_6.setTransform(0,30);

	this.hair_5 = new lib.hairstyle_5_4_mc();
	this.hair_5.setTransform(0,-180);

	this.dress_2 = new lib.dress_2_4_mc();
	this.dress_2.setTransform(50,-240);

	this.dress_7 = new lib.dress_7_4_mc();
	this.dress_7.setTransform(-50,-240);

	this.dress_4 = new lib.dress_4_4_mc();
	this.dress_4.setTransform(50,-50);

	this.dress_3 = new lib.dress_3_4_mc();
	this.dress_3.setTransform(-50,-50);

	this.dress_6 = new lib.dress_6_4_mc();
	this.dress_6.setTransform(-50,-240);

	this.dress_5 = new lib.dress_5_4_mc();
	this.dress_5.setTransform(50,-240);

	this.dress_1 = new lib.dress_1_4_mc();
	this.dress_1.setTransform(50,-50);

	this.dress_8 = new lib.dress_8_4_mc();
	this.dress_8.setTransform(-50,-50);

	this.pareo_2 = new lib.pareo_2_4_mc();
	this.pareo_2.setTransform(-40,-50);

	this.pareo_1 = new lib.pareo_1_4_mc();
	this.pareo_1.setTransform(-50,-240);

	this.pareo_3 = new lib.pareo_3_4_mc();
	this.pareo_3.setTransform(50,-240);

	this.pareo_4 = new lib.pareo_4_4_mc();
	this.pareo_4.setTransform(50,-240);

	this.pareo_6 = new lib.pareo_6_4_mc();
	this.pareo_6.setTransform(40,-50);

	this.pareo_5 = new lib.pareo_5_4_mc();
	this.pareo_5.setTransform(-50,-240);

	this.accessory_3 = new lib.accessory_3_4_mc();
	this.accessory_3.setTransform(70,-30);

	this.accessory_2 = new lib.accessory_2_4_mc();
	this.accessory_2.setTransform(0,-35);

	this.accessory_1 = new lib.accessory_1_4_mc();
	this.accessory_1.setTransform(-70,-33);

	this.headdress_3 = new lib.headdress_3_4_mc();
	this.headdress_3.setTransform(60,-195);

	this.headdress_2 = new lib.headdress_2_4_mc();
	this.headdress_2.setTransform(-50,-197);

	this.headdress_1 = new lib.headdress_1_4_mc();
	this.headdress_1.setTransform(0,-136);

	this.shoes_4 = new lib.shoes_4_4_mc();
	this.shoes_4.setTransform(30,83);

	this.shoes_3 = new lib.shoes_3_4_mc();
	this.shoes_3.setTransform(-30,88);

	this.shoes_2 = new lib.shoes_2_4_mc();
	this.shoes_2.setTransform(-80,88);

	this.shoes_1 = new lib.shoes_1_4_mc();
	this.shoes_1.setTransform(80,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2}]}).to({state:[{t:this.hair_4},{t:this.hair_3}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_3},{t:this.dress_4},{t:this.dress_7},{t:this.dress_2}]},1).to({state:[{t:this.dress_8},{t:this.dress_1},{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.pareo_3},{t:this.pareo_1},{t:this.pareo_2}]},1).to({state:[{t:this.pareo_5},{t:this.pareo_6},{t:this.pareo_4}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]},1).wait(1));

	// decor
	this.instance = new lib.stick_mc();
	this.instance.setTransform(0,45);

	this.instance_1 = new lib.stick_mc();
	this.instance_1.setTransform(0,-160);

	this.instance_2 = new lib.shelf_mc();
	this.instance_2.setTransform(0,-180);

	this.instance_3 = new lib.shelf_mc();
	this.instance_3.setTransform(0,-120);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,20);

	this.instance_5 = new lib.shelf_mc();
	this.instance_5.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]}).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]},1).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:-30}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:-30}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:-30}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:-30}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,430);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-150,-247.5,300,391.1), new cjs.Rectangle(-150,-250.5,300,414.1), new cjs.Rectangle(-150,-250,305,528.2), new cjs.Rectangle(-150,-247.8,305,510.6), new cjs.Rectangle(-150,-233,305,368)];


(lib.closet_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.pareo_0 = new lib.pareo_0_mc();
	this.pareo_0.setTransform(137,-150);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(137,80);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(137,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.pareo_0}]},7).to({state:[{t:this.headdress_0},{t:this.accessory_0}]},2).wait(1));

	// options
	this.hair_2 = new lib.hairstyle_2_3_mc();
	this.hair_2.setTransform(0,30);

	this.hair_1 = new lib.hairstyle_1_3_mc();
	this.hair_1.setTransform(0,-180);

	this.hair_3 = new lib.hairstyle_3_3_mc();
	this.hair_3.setTransform(0,-180);

	this.hair_4 = new lib.hairstyle_4_3_mc();
	this.hair_4.setTransform(0,30);

	this.hair_6 = new lib.hairstyle_6_3_mc();
	this.hair_6.setTransform(0,30);

	this.hair_5 = new lib.hairstyle_5_3_mc();
	this.hair_5.setTransform(0,-180);

	this.top_8 = new lib.top_8_3_mc();
	this.top_8.setTransform(50,-220);

	this.top_7 = new lib.top_7_3_mc();
	this.top_7.setTransform(-50,-220);

	this.top_3 = new lib.top_3_3_mc();
	this.top_3.setTransform(0,-100);

	this.top_4 = new lib.top_4_3_mc();
	this.top_4.setTransform(0,20);

	this.top_6 = new lib.top_6_3_mc();
	this.top_6.setTransform(-50,-220);

	this.top_5 = new lib.top_5_3_mc();
	this.top_5.setTransform(0,-100);

	this.top_2 = new lib.top_2_3_mc();
	this.top_2.setTransform(50,-220);

	this.top_1 = new lib.top_1_3_mc();
	this.top_1.setTransform(0,20);

	this.bottom_4 = new lib.bottom_4_3_mc();
	this.bottom_4.setTransform(-30,0);

	this.bottom_3 = new lib.bottom_3_3_mc();
	this.bottom_3.setTransform(40,-130);

	this.bottom_1 = new lib.bottom_1_3_mc();
	this.bottom_1.setTransform(-50,10);

	this.bottom_2 = new lib.bottom_2_3_mc();
	this.bottom_2.setTransform(40,-120);

	this.pareo_3 = new lib.pareo_3_3_mc();
	this.pareo_3.setTransform(60,-220);

	this.pareo_2 = new lib.pareo_2_3_mc();
	this.pareo_2.setTransform(0,-40);

	this.pareo_1 = new lib.pareo_1_3_mc();
	this.pareo_1.setTransform(-60,-220);

	this.pareo_4 = new lib.pareo_4_3_mc();
	this.pareo_4.setTransform(-60,-220);

	this.pareo_6 = new lib.pareo_6_3_mc();
	this.pareo_6.setTransform(0,-40);

	this.pareo_5 = new lib.pareo_5_3_mc();
	this.pareo_5.setTransform(60,-220);

	this.accessory_3 = new lib.accessory_3_3_mc();
	this.accessory_3.setTransform(-50,71);

	this.accessory_2 = new lib.accessory_2_3_mc();
	this.accessory_2.setTransform(0,-17);

	this.accessory_1 = new lib.accessory_1_3_mc();
	this.accessory_1.setTransform(50,73);

	this.headdress_3 = new lib.headdress_3_3_mc();
	this.headdress_3.setTransform(55,-200);

	this.headdress_2 = new lib.headdress_2_3_mc();
	this.headdress_2.setTransform(-60,-197);

	this.headdress_1 = new lib.headdress_1_3_mc();
	this.headdress_1.setTransform(0,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2}]}).to({state:[{t:this.hair_4},{t:this.hair_3}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.top_4},{t:this.top_3},{t:this.top_7},{t:this.top_8}]},1).to({state:[{t:this.top_1},{t:this.top_2},{t:this.top_5},{t:this.top_6}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_4}]},1).to({state:[{t:this.bottom_2},{t:this.bottom_1}]},1).to({state:[{t:this.pareo_1},{t:this.pareo_2},{t:this.pareo_3}]},1).to({state:[{t:this.pareo_5},{t:this.pareo_6},{t:this.pareo_4}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]},1).wait(1));

	// decor
	this.instance = new lib.stick_mc();
	this.instance.setTransform(0,45);

	this.instance_1 = new lib.stick_mc();
	this.instance_1.setTransform(0,-160);

	this.instance_2 = new lib.stick_mc();
	this.instance_2.setTransform(0,-200);

	this.instance_3 = new lib.shelf_mc();
	this.instance_3.setTransform(0,-180);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,-80);

	this.instance_5 = new lib.shelf_mc();
	this.instance_5.setTransform(0,20);

	this.instance_6 = new lib.shelf_mc();
	this.instance_6.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]}).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]},1).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:40}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:40}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:40}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:40}}]},1).to({state:[{t:this.instance_1,p:{y:-200}},{t:this.instance,p:{y:-20}}]},1).to({state:[{t:this.instance_1,p:{y:-200}},{t:this.instance,p:{y:-20}}]},1).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,430);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-150,-228.9,300,376.3), new cjs.Rectangle(-150,-226.3,300,384.9), new cjs.Rectangle(-150,-256.2,300,388.2), new cjs.Rectangle(-182.3,-251.6,332.4,387.6), new cjs.Rectangle(-152.3,-229,307.3,519.5), new cjs.Rectangle(-150,-227.5,305,510.4), new cjs.Rectangle(-150,-230,305,365)];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.pareo_0 = new lib.pareo_0_mc();
	this.pareo_0.setTransform(137,-150);

	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(137,-120);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(137,80);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(137,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.pareo_0}]},5).to({state:[{t:this.shoes_0}]},2).to({state:[{t:this.headdress_0},{t:this.accessory_0}]},1).wait(1));

	// options
	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(0,30);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(0,-180);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,-180);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(0,30);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,30);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(0,-180);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(50,-240);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(-50,-240);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(-50,-50);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(50,-50);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(50,-240);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(-50,-240);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(50,-50);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(-50,-50);

	this.pareo_3 = new lib.pareo_3_2_mc();
	this.pareo_3.setTransform(-60,-240);

	this.pareo_2 = new lib.pareo_2_2_mc();
	this.pareo_2.setTransform(60,-240);

	this.pareo_1 = new lib.pareo_1_2_mc();
	this.pareo_1.setTransform(0,-50);

	this.pareo_6 = new lib.pareo_6_2_mc();
	this.pareo_6.setTransform(60,-240);

	this.pareo_5 = new lib.pareo_5_2_mc();
	this.pareo_5.setTransform(0,-50);

	this.pareo_4 = new lib.pareo_4_2_mc();
	this.pareo_4.setTransform(-60,-240);

	this.shoes_4 = new lib.shoes_4_2_mc();
	this.shoes_4.setTransform(0,-1.5);

	this.shoes_3 = new lib.shoes_3_2_mc();
	this.shoes_3.setTransform(0,-99);

	this.shoes_2 = new lib.shoes_2_2_mc();
	this.shoes_2.setTransform(0,-204);

	this.shoes_1 = new lib.shoes_1_2_mc();
	this.shoes_1.setTransform(0.1,108.1,1,1,-10,0,0,0.1,0.1);

	this.headdress_3 = new lib.headdress_3_2_mc();
	this.headdress_3.setTransform(0,-95);

	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(55,-195);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(-55,-195);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(9,95);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(50,-20);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(-50,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2}]}).to({state:[{t:this.hair_4},{t:this.hair_3}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_3},{t:this.dress_4},{t:this.dress_2},{t:this.dress_8}]},1).to({state:[{t:this.dress_7},{t:this.dress_1},{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.pareo_1},{t:this.pareo_2},{t:this.pareo_3}]},1).to({state:[{t:this.pareo_4},{t:this.pareo_5},{t:this.pareo_6}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3}]},1).wait(1));

	// decor
	this.instance = new lib.stick_mc();
	this.instance.setTransform(0,45);

	this.instance_1 = new lib.stick_mc();
	this.instance_1.setTransform(0,-160);

	this.instance_2 = new lib.shelf_mc();
	this.instance_2.setTransform(0,-180);

	this.instance_3 = new lib.shelf_mc();
	this.instance_3.setTransform(0,-80);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,20);

	this.instance_5 = new lib.shelf_mc();
	this.instance_5.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]}).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]},1).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:-30}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:-30}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:-30}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:-30}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,430);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-150,-248.5,300,396), new cjs.Rectangle(-150,-246,300,394.2), new cjs.Rectangle(-150,-249.5,305,555.7), new cjs.Rectangle(-150,-248,305,422.5), new cjs.Rectangle(-150,-249,305,432.8), new cjs.Rectangle(-150,-220,305,355)];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.pareo_0 = new lib.pareo_0_mc();
	this.pareo_0.setTransform(137,-150);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(137,80);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(137,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.pareo_0}]},7).to({state:[{t:this.headdress_0},{t:this.accessory_0}]},2).wait(1));

	// options
	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(0,30);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(0,-180);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,-180);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(0,30);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,30);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(0,-180);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(0,20);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(0,-100);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(-50,-220);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(50,-220);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(0,-100);

	this.top_8 = new lib.top_8_1_mc();
	this.top_8.setTransform(50,-220);

	this.top_7 = new lib.top_7_1_mc();
	this.top_7.setTransform(-50,-220);

	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(0,20);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(-5,20);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(-20,-100);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(0,5);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(-20,-110);

	this.pareo_1 = new lib.pareo_1_1_mc();
	this.pareo_1.setTransform(0,-220);

	this.pareo_3 = new lib.pareo_3_1_mc();
	this.pareo_3.setTransform(0,-100);

	this.pareo_2 = new lib.pareo_2_1_mc();
	this.pareo_2.setTransform(0,20);

	this.pareo_6 = new lib.pareo_6_1_mc();
	this.pareo_6.setTransform(60,-220);

	this.pareo_5 = new lib.pareo_5_1_mc();
	this.pareo_5.setTransform(-60,-220);

	this.pareo_4 = new lib.pareo_4_1_mc();
	this.pareo_4.setTransform(0,-100);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(50,89);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(-50,81);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(0,-11);

	this.headdress_3 = new lib.headdress_3_1_mc();
	this.headdress_3.setTransform(0,-91);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(60,-200);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(-60,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2}]}).to({state:[{t:this.hair_4},{t:this.hair_3}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.top_2},{t:this.top_3},{t:this.top_4},{t:this.top_5}]},1).to({state:[{t:this.top_6},{t:this.top_7},{t:this.top_8},{t:this.top_1}]},1).to({state:[{t:this.bottom_4},{t:this.bottom_2}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_1}]},1).to({state:[{t:this.pareo_2},{t:this.pareo_3},{t:this.pareo_1}]},1).to({state:[{t:this.pareo_4},{t:this.pareo_5},{t:this.pareo_6}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]},1).wait(1));

	// decor
	this.instance = new lib.stick_mc();
	this.instance.setTransform(0,45);

	this.instance_1 = new lib.stick_mc();
	this.instance_1.setTransform(0,-160);

	this.instance_2 = new lib.stick_mc();
	this.instance_2.setTransform(0,-200);

	this.instance_3 = new lib.shelf_mc();
	this.instance_3.setTransform(0,-180);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,-80);

	this.instance_5 = new lib.shelf_mc();
	this.instance_5.setTransform(0,20);

	this.instance_6 = new lib.shelf_mc();
	this.instance_6.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]}).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]},1).to({state:[{t:this.instance_1,p:{y:-160}},{t:this.instance,p:{y:45}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:40}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:40}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:40}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:40}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:40}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:40}}]},1).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,430);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-150,-228.7,300,344.3), new cjs.Rectangle(-150,-229.5,300,345.1), new cjs.Rectangle(-150,-253.3,300,409.4), new cjs.Rectangle(-150,-240.4,300,369.9), new cjs.Rectangle(-150,-229.2,305,366), new cjs.Rectangle(-209.5,-229,405,448.9), new cjs.Rectangle(-150,-230,305,365)];


(lib.bodyDressupPanel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.closet_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,430);
p.frameBounds = [rect];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,430);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,430);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,430);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.199;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-176.9,1200,1181.6);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(400,1000,0.8,0.8);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.8,0.8);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(120.1,530.1,0.815,0.814,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(680,530,0.815,0.814);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(350,530);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(450,530);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,-200);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,-100);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100.2,50.1,0.905,0.904,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.next_btn},{t:this.next_mc},{t:this.prev_mc},{t:this.photo_btn},{t:this.playAgain_btn},{t:this.moreGames_btn},{t:this.facebook_btn}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(600,-300);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(200,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.102;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-490,1200,1525.9);
p.frameBounds = [rect];


(lib.quest_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(200,540,0.857,0.857);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_7_mc();
	this.dressupPanel_mc.setTransform(580,520);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_4 = new lib.hero4_makeup_mc();
	this.hero_4.setTransform(220,220);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.7,39.5,816.8,730.5);
p.frameBounds = [rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(200,540,0.857,0.857);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_mc.setTransform(580,520);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_3 = new lib.hero3_makeup_mc();
	this.hero_3.setTransform(240,230);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.9,49.4,920,720.7);
p.frameBounds = [rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(200,540,0.857,0.857);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(580,520);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_2 = new lib.hero2_makeup_mc();
	this.hero_2.setTransform(230,230);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,12.1,863.3,757.9);
p.frameBounds = [rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(200,540,0.857,0.857);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_mc.setTransform(580,520);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_1 = new lib.hero1_makeup_mc();
	this.hero_1.setTransform(195,210);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.5,-3.4,931.6,773.5);
p.frameBounds = [rect];


(lib.dressupPanel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(140,0);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-140,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-300,400,750);
p.frameBounds = [rect];


(lib.dressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(140,0);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-140,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-300,400,750);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(140,0);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-140,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-300,400,750);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(140,0);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-140,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-300,400,750);
p.frameBounds = [rect];


(lib.quest_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.7,-261.3,816.8,1031.4);
p.frameBounds = [rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.9,-261.3,920,1031.4);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-261.3,863.3,1031.4);
p.frameBounds = [rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.5,-261.3,931.6,1031.4);
p.frameBounds = [rect];


(lib.quest_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260,520,0.857,0.857);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_8_mc();
	this.dressupPanel_mc.setTransform(260,340);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(600,315,0.971,0.971);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60,26.1,655.7,764);
p.frameBounds = [rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260,520,0.857,0.857);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_mc.setTransform(260,340);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(590,325.4,0.955,0.955,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60,23.6,723.2,766.4);
p.frameBounds = [rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260,520,0.857,0.857);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_mc.setTransform(260,340);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(580,315.3,0.955,0.955,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60,15.3,663.4,774.8);
p.frameBounds = [rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260,520,0.857,0.857);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_mc.setTransform(260,340);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(605,365.2,1,1,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60,40,791,750);
p.frameBounds = [rect];


(lib.LocationScreen_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.8,0.8);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.8,0.8);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.8,0.8);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.8,0.8);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245);
p.frameBounds = [rect];


(lib.quest_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60,-261.3,655.7,1051.4);
p.frameBounds = [rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60,-261.3,723.2,1051.4);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60,-261.3,663.4,1051.4);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60,-261.3,791,1051.4);
p.frameBounds = [rect];


(lib.LocationScreen_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.8,0.8);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.8,0.8);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.8,0.8);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.8,0.8);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(1000,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245);
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
	this.text = new cjs.Text("storage", "32px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 123;
	this.text.setTransform(63.5,2);

	this.instance = new lib.PreloaderScreen();
	this.instance.setTransform(-2,0.1,1,1,0,0,0,-2,0.1);

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.LocationScreen_6();

	this.instance_10 = new lib.LocationScreen_7();
	this.instance_10.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_11 = new lib.LocationScreen_8();
	this.instance_11.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.redirect_mc = new lib.RedirectScreen();

	this.instance_12 = new lib.ResultScreen();

	this.instance_13 = new lib.InstructionScreen();

	this.instance_14 = new lib.TrackMove();
	this.instance_14.setTransform(361.4,68.4);

	this.instance_15 = new lib.Cursor();
	this.instance_15.setTransform(257.2,68.7);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(158.7,69.2);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(65.7,69.2);

	this.instance_16 = new lib.OrientationLockScreen();

	this.instance_17 = new lib.CurtainScreen();

	this.instance_18 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.redirect_mc}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).to({state:[{t:this.instance_18}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,127,39.8);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-76.9,1200,1116.9), new cjs.Rectangle(-200,-176.9,1200,1181.6), rect=new cjs.Rectangle(-200,-261.3,1200,1245), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-490,1200,1524.1), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(30.7,18.4,380.7,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-200,-600,1200,1800), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


// stage content:
(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// storage
	this.instance = new lib.storage_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,127,39.8);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;