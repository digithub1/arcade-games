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
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,697,879]]},
		{name:"storage_atlas_5", frames: [[624,0,576,912],[0,0,622,889]]},
		{name:"storage_atlas_6", frames: [[0,0,600,600],[492,602,417,587],[911,0,350,690],[0,602,490,680]]},
		{name:"storage_atlas_7", frames: [[0,824,420,420],[422,824,420,420],[0,202,367,562],[844,704,292,529],[691,202,381,500],[0,0,1200,200],[369,202,320,620]]},
		{name:"storage_atlas_8", frames: [[0,0,500,300],[502,0,490,280],[269,716,262,523],[684,282,306,407],[994,0,290,466],[533,714,294,420],[0,302,360,412],[829,691,311,378],[362,302,320,410],[0,716,267,525]]},
		{name:"storage_atlas_9", frames: [[567,822,257,408],[320,362,272,412],[594,362,238,458],[0,774,256,426],[0,370,276,402],[826,822,299,346],[320,0,313,360],[635,0,302,359],[258,776,307,354],[0,0,318,368],[939,0,340,300],[834,361,340,300]]},
		{name:"storage_atlas_10", frames: [[0,0,340,300],[644,936,273,361],[0,614,320,310],[0,926,320,310],[342,0,320,310],[322,312,320,310],[644,312,320,310],[966,312,320,310],[0,302,320,310],[322,624,320,310],[322,936,320,310],[664,0,320,310],[644,624,320,310],[966,624,320,310]]},
		{name:"storage_atlas_11", frames: [[884,776,255,289],[518,832,212,411],[0,877,232,413],[220,433,228,417],[450,348,189,482],[234,852,282,331],[226,0,270,346],[498,0,267,320],[963,484,262,290],[0,433,218,442],[0,0,224,431],[732,776,150,500],[641,484,320,240],[767,0,320,240],[767,242,320,240]]},
		{name:"storage_atlas_12", frames: [[720,0,250,251],[972,0,250,251],[702,253,250,251],[954,253,250,251],[486,564,250,251],[468,0,250,251],[586,817,250,251],[738,506,250,251],[990,506,250,251],[838,759,250,251],[838,1012,250,251],[0,622,244,287],[246,622,238,284],[253,284,206,327],[382,908,202,317],[461,284,239,278],[216,0,250,282],[0,338,251,282],[0,0,214,336],[0,911,380,180]]},
		{name:"storage_atlas_13", frames: [[252,0,250,251],[0,506,250,251],[0,253,250,251],[0,759,250,251],[504,0,250,251],[0,0,250,251],[0,1012,250,251],[799,1004,267,142],[683,276,207,278],[252,1111,243,189],[987,0,212,291],[868,807,202,195],[1068,1018,222,166],[461,253,220,267],[1079,533,207,230],[892,293,231,238],[497,1105,220,184],[461,522,217,261],[680,556,186,269],[892,533,185,272],[640,827,157,251],[1079,765,157,251],[252,253,207,297],[252,552,202,280],[449,834,189,269],[756,0,229,274],[252,834,195,275]]},
		{name:"storage_atlas_14", frames: [[569,679,240,120],[0,1123,232,147],[951,337,193,125],[358,681,209,152],[868,179,162,156],[367,234,176,136],[840,0,152,177],[631,965,139,212],[0,439,157,231],[0,894,151,227],[159,681,197,165],[363,373,213,152],[159,373,202,163],[155,199,210,172],[1107,746,159,140],[934,746,171,131],[159,538,233,141],[512,835,234,128],[994,0,155,159],[0,672,157,220],[949,879,137,161],[367,72,181,160],[772,957,175,132],[811,537,168,145],[748,801,184,154],[750,404,199,131],[981,464,132,180],[0,199,153,238],[423,1030,206,150],[394,527,209,150],[1115,464,143,164],[153,894,175,194],[0,0,185,197],[234,1090,187,179],[1146,293,139,165],[1032,161,178,130],[811,684,400,60],[550,72,143,200],[578,274,143,200],[605,476,143,200],[695,0,143,200],[723,202,143,200],[853,1144,220,100],[1075,1144,220,100],[949,1042,220,100],[631,1179,220,100],[330,848,180,180],[187,0,490,70]]},
		{name:"storage_atlas_15", frames: [[151,649,180,100],[477,738,120,120],[181,1108,120,120],[222,0,220,100],[1076,1128,100,100],[177,751,224,80],[125,980,119,126],[951,608,102,115],[1096,226,179,72],[0,870,184,108],[1187,376,85,117],[457,340,116,117],[575,340,154,88],[599,608,152,84],[303,1034,137,79],[904,229,156,90],[746,1034,143,81],[303,946,132,86],[599,694,133,94],[858,608,91,129],[0,453,127,161],[731,315,146,92],[879,321,146,92],[575,430,146,92],[731,409,146,92],[879,415,146,92],[723,503,146,92],[0,754,175,114],[1181,882,103,109],[222,204,176,116],[0,616,149,136],[563,0,166,130],[335,833,140,111],[1181,993,95,108],[303,1115,177,61],[303,1178,177,61],[586,870,127,97],[333,627,142,112],[0,980,123,154],[586,969,158,74],[1062,300,158,74],[744,224,158,89],[1027,376,158,74],[599,790,158,78],[527,524,158,82],[477,860,107,132],[400,204,124,113],[432,459,93,155],[753,597,103,118],[322,459,108,166],[0,306,149,145],[186,833,147,109],[322,322,133,135],[442,1045,156,65],[731,0,180,115],[913,0,179,115],[1094,0,179,115],[744,117,179,105],[563,132,179,105],[0,1136,179,105],[1027,452,145,80],[746,952,145,80],[715,870,145,80],[1055,698,145,80],[1055,534,145,80],[1055,616,145,80],[871,509,136,97],[526,239,139,99],[444,0,117,188],[893,964,142,80],[1037,882,142,80],[1037,964,142,80],[893,882,142,80],[1035,1046,142,80],[891,1046,142,80],[151,431,169,107],[925,117,169,110],[151,540,169,107],[151,322,169,107],[1096,117,169,107],[862,780,360,32],[862,848,360,32],[862,814,360,32],[0,204,220,100],[222,102,220,100],[1179,1103,100,100],[0,0,220,100],[477,616,120,120],[759,717,80,126],[646,1045,80,126],[728,1117,80,126],[810,1128,80,126],[892,1128,80,126],[482,1112,80,126],[564,1112,80,126],[646,1173,80,124],[1202,495,80,124],[1202,621,80,124],[0,102,220,100],[0,1243,490,30],[974,1128,100,100]]},
		{name:"storage_atlas_16", frames: [[171,310,80,100],[942,288,80,100],[668,577,180,29],[817,546,180,29],[624,670,180,29],[806,670,180,29],[0,665,180,29],[182,679,180,29],[442,663,180,29],[668,639,180,29],[668,608,180,29],[260,648,180,29],[364,694,180,29],[335,126,160,60],[922,577,70,70],[546,694,70,70],[0,126,120,81],[122,126,120,81],[80,310,89,91],[694,345,137,54],[390,270,133,69],[130,236,128,72],[260,260,128,72],[871,214,128,72],[611,198,128,72],[0,209,128,72],[741,214,128,72],[159,710,43,30],[941,701,43,30],[896,701,43,30],[204,710,43,30],[785,401,43,30],[207,412,43,30],[635,126,136,70],[497,126,136,70],[820,70,139,70],[773,142,136,70],[335,188,136,70],[473,198,136,70],[0,283,78,112],[244,126,89,108],[854,288,86,100],[0,696,157,29],[253,341,150,52],[817,498,154,46],[820,0,145,68],[694,288,158,55],[401,442,146,50],[637,401,146,50],[0,403,146,50],[489,390,146,50],[253,395,146,50],[833,390,146,50],[837,701,57,25],[148,412,57,25],[660,701,57,25],[719,701,57,25],[130,209,57,25],[778,701,57,25],[785,442,132,54],[683,498,132,54],[148,447,132,54],[549,453,132,54],[0,455,132,54],[282,494,132,54],[260,550,66,79],[603,272,89,99],[405,341,82,93],[525,270,76,118],[353,725,50,24],[328,622,50,24],[249,710,50,24],[189,209,50,24],[301,710,50,24],[637,373,50,24],[618,701,40,40],[416,494,40,152],[176,503,40,152],[218,503,40,152],[134,503,40,152],[500,494,40,152],[967,0,40,152],[584,509,40,152],[542,509,40,152],[626,509,40,152],[981,390,40,152],[458,494,40,152],[0,511,40,152],[42,511,40,152],[725,453,40,40],[919,442,40,40],[282,447,40,40],[683,453,40,40],[324,447,40,40],[911,142,40,40],[84,511,40,40],[953,154,40,40],[84,553,40,40],[84,595,40,40],[246,0,80,124],[328,0,80,124],[0,0,80,124],[82,0,80,124],[164,0,80,124],[410,0,80,124],[492,0,80,124],[656,0,80,124],[574,0,80,124],[738,0,80,124],[328,550,70,70],[850,577,70,70]]}
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
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_rubbing_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_rubbing_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
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
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cancel_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.check_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_nav_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.decor_wardrobe_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.free_games_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle3_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle3_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hanger2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hanger_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_head_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_0_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h1l6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h2l2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h2l5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h2l6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.next_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.next_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h1s2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h1s3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h1s4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h2s5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h2s6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i20_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.shelf_0_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.shelf_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.shelf_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.stick_0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
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
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().rr(-90,-40,180,80,40);

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
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().rr(-160,-25,320,50,25);
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


(lib.wardrobe_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_0_img();
	this.instance.setTransform(-245,-340);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-340,490,680);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_2_img();
	this.instance.setTransform(-170,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-150,340,300);
p.frameBounds = [rect];


(lib.title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_1_img();
	this.instance.setTransform(-170,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-150,340,300);
p.frameBounds = [rect];


(lib.stick_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stick_0_img();
	this.instance.setTransform(-245,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-15,490,30);
p.frameBounds = [rect];


(lib.shelf_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_2_img();
	this.instance.setTransform(-175,-345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-345,350,690);
p.frameBounds = [rect];


(lib.shelf_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_1_img();
	this.instance.setTransform(-160,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-310,320,620);
p.frameBounds = [rect];


(lib.shelf_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_0_img();
	this.instance.setTransform(-245,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-35,490,70);
p.frameBounds = [rect];


(lib.shadows_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h2s5_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i18_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i17_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i20_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i8_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i16_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h2s6_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i16_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s3_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i19_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i17_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s2_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i17_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i14_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i14_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i16_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s4_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i3_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.shadow_hair_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AtyNzQlulugBoFQABoEFuluQFuluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFvoFAAQoEAAlulvg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119,-119,250,250);
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
	this.shape.graphics.f("#FF0000").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.lips_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i15_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l2_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i16_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i9_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i2_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l5_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i14_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i13_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i12_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i9_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l2_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i3_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i3_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.jewelry_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory11_img();
	this.instance.setTransform(-62,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K7IAA11IV3AAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.jewelry_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory7_img();
	this.instance.setTransform(-42.5,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmwL2IiA0QIHmkQIJCDnIA5ElIn/RJg");
	this.shape.setTransform(2.5,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.6,-94.6,112.3,162.4);
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


(lib.hero3_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9RdpMAAAg7RMAz0AAAIAAKqIGvAAMAAAAwngAlNgtIAYBsQAOBHAPAlQAUAvAkAaIAAgMQABgwAIgqQAShfAzhDIAHgJQgfhJgQhWIgOhLQgOgygUgHIAAAAIgmgRIAAgBIgJgDIgOgGQg4gZgHAAIgHABQgTAEg1ASQg9AVgTANIgBABIgCABIgBABIgCABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAFAPATAJQAQAIAQAAQAPAAA4gLIAcgGIABADIAcATIAUAOQgXAAgdADQgdADgkAHIhDARQghAJgKAKQgHAFABAGQgBAQAWAOIgFAGIAAgBQgCAEgBAEQgBAGAEAFQACAFAGAEIALAGQAXAJAZAAQATAAAhgJQAfgKASgDQAQgDAkATIAWASIgCgBQgpgOgFAAQgWAAg1AXIgLAFQg7AZgGALIgBADIABACIAEAGQANARAGADQAHAFAZADQAIACAIgBQASgBAWgKIAEgCQApgNgUAFIgVAIIABgBQATgJALgEQADABgKAEIAUgHg");
	var mask_graphics_1 = new cjs.Graphics().p("A9RdpMAAAg7RMAz0AAAIAAKqIGvAAMAAAAwngAlNgtIAYBsQAOBHAPAlQAUAvAkAaIAAgMQABgwAIgqQAShfAzhDIAHgJQgfhJgQhWIgOhLQgOgygUgHIAAAAIgmgRIAAgBIgJgDIgOgGQg4gZgHAAIgHABQgTAEg1ASQg9AVgTANIgBABIgCABIgBABIgCABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAFAPATAJQAQAIAQAAQAPAAA4gLIAcgGIABADIAcATIAUAOQgXAAgdADQgdADgkAHIhDARQghAJgKAKQgHAFABAGQgBAQAWAOIgFAGIAAgBQgCAEgBAEQgBAGAEAFQACAFAGAEIALAGQAXAJAZAAQATAAAhgJQAfgKASgDQAQgDAkATIAWASIgCgBQgpgOgFAAQgWAAg1AXIgLAFQg7AZgGALIgBADIABACIAEAGQANARAGADQAHAFAZADQAIACAIgBQASgBAWgKIAEgCQApgNgUAFIgVAIIABgBQATgJALgEQADABgKAEIAUgHg");
	var mask_graphics_2 = new cjs.Graphics().p("A9RdpMAAAg7RMAz0AAAIAAKqIGvAAMAAAAwngAjnDvIAHAFIAAgMgAmhhiIgLAFQg7AZgGALIgBADIABACIAEAGQANARAGADQAHAFAZADQAIACAIgBQASgBAWgKIAEgCQApgNgUAFIgVAIIABgBQATgJALgEQADABgKAEIAUgHIAAAAQAfgMgGgtIAlAUIgfgmQAhgTgSg1QAYgJgUg2QAXgcgCgwIABAAIgBgBIgJgEIAAgBIgJgDIgOgGQg4gZgHAAIgHABQgTAEg1ASQg9AVgTANIgBABIgCABIgBABIgCABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAFAPATAJQAQAIAQAAQAPAAA4gLIAcgGIABADIAcATIAUAOQgXAAgdADQgdADgkAHIhDARQghAJgKAKQgHAFABAGQgBAQAWAOIgFAGIAAgBQgCAEgBAEQgBAGAEAFQACAFAGAEIALAGQAXAJAZAAQATAAAhgJQAfgKASgDQAQgDAkATIAWASIgCgBQgpgOgFAAQgWAAg1AXg");
	var mask_graphics_3 = new cjs.Graphics().p("A9RdpMAAAg7RMAz0AAAIAAKqIGvAAMAAAAwngAlNgtIAYBsQAOBHAPAlQAUAvAkAaIAAgMQABgwAIgqQAShfAzhDIAHgJQgfhJgQhWIgOhLQgOgygUgHIAAAAIgmgRIAAgBIgJgDIgOgGQg4gZgHAAIgHABQgTAEg1ASQg9AVgTANIgBABIgCABIgBABIgCABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAFAPATAJQAQAIAQAAQAPAAA4gLIAcgGIABADIAcATIAUAOQgXAAgdADQgdADgkAHIhDARQghAJgKAKQgHAFABAGQgBAQAWAOIgFAGIAAgBQgCAEgBAEQgBAGAEAFQACAFAGAEIALAGQAXAJAZAAQATAAAhgJQAfgKASgDQAQgDAkATIAWASIgCgBQgpgOgFAAQgWAAg1AXIgLAFQg7AZgGALIgBADIABACIAEAGQANARAGADQAHAFAZADQAIACAIgBQASgBAWgKIAEgCQApgNgUAFIgVAIIABgBQATgJALgEQADABgKAEIAUgHg");
	var mask_graphics_4 = new cjs.Graphics().p("A9RdpMAAAg7RMAz0AAAIAAKqIGvAAMAAAAwngAlNgtIAYBsQAOBHAPAlQAUAvAkAaIAAgMQABgwAIgqQAShfAzhDIAHgJQgfhJgQhWIgOhLQgOgygUgHIAAAAIgmgRIAAgBIgJgDIgOgGQg4gZgHAAIgHABQgTAEg1ASQg9AVgTANIgBABIgCABIgBABIgCABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAFAPATAJQAQAIAQAAQAPAAA4gLIAcgGIABADIAcATIAUAOQgXAAgdADQgdADgkAHIhDARQghAJgKAKQgHAFABAGQgBAQAWAOIgFAGIAAgBQgCAEgBAEQgBAGAEAFQACAFAGAEIALAGQAXAJAZAAQATAAAhgJQAfgKASgDQAQgDAkATIAWASIgCgBQgpgOgFAAQgWAAg1AXIgLAFQg7AZgGALIgBADIABACIAEAGQANARAGADQAHAFAZADQAIACAIgBQASgBAWgKIAEgCQApgNgUAFIgVAIIABgBQATgJALgEQADABgKAEIAUgHg");
	var mask_graphics_5 = new cjs.Graphics().p("A9RdpMAAAg7RMAz0AAAIAAKqIGvAAMAAAAwngAlNgtIAYBsQAOBHAPAlQAUAvAkAaIAAgMQABgwAIgqQAShfAzhDIAHgJQgfhJgQhWIgOhLQgOgygUgHIAAAAIgmgRIAAgBIgJgDIgOgGQg4gZgHAAIgHABQgTAEg1ASQg9AVgTANIgBABIgCABIgBABIgCABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAFAPATAJQAQAIAQAAQAPAAA4gLIAcgGIABADIAcATIAUAOQgXAAgdADQgdADgkAHIhDARQghAJgKAKQgHAFABAGQgBAQAWAOIgFAGIAAgBQgCAEgBAEQgBAGAEAFQACAFAGAEIALAGQAXAJAZAAQATAAAhgJQAfgKASgDQAQgDAkATIAWASIgCgBQgpgOgFAAQgWAAg1AXIgLAFQg7AZgGALIgBADIABACIAEAGQANARAGADQAHAFAZADQAIACAIgBQASgBAWgKIAEgCQApgNgUAFIgVAIIABgBQATgJALgEQADABgKAEIAUgHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-3.6,y:11.1}).wait(1).to({graphics:mask_graphics_1,x:-3.6,y:11.1}).wait(1).to({graphics:mask_graphics_2,x:-3.6,y:11.1}).wait(1).to({graphics:mask_graphics_3,x:-3.6,y:11.1}).wait(1).to({graphics:mask_graphics_4,x:-3.6,y:11.1}).wait(1).to({graphics:mask_graphics_5,x:-3.6,y:11.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero3_top1_img();
	this.instance.setTransform(-103.5,-148.3);

	this.instance_1 = new lib.hero3_top2_img();
	this.instance_1.setTransform(-95.4,-133.7);

	this.instance_2 = new lib.hero3_top3_img();
	this.instance_2.setTransform(-107.5,-139.7);

	this.instance_3 = new lib.hero3_top4_img();
	this.instance_3.setTransform(-92.7,-122.6);

	this.instance_4 = new lib.hero3_top5_img();
	this.instance_4.setTransform(-92.7,-127.2);

	this.instance_5 = new lib.hero3_top6_img();
	this.instance_5.setTransform(-92.7,-129);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.5,-148.3,207,297);
p.frameBounds = [rect, new cjs.Rectangle(-95.4,-133.7,202,280), new cjs.Rectangle(-107.5,-139.7,214,336), new cjs.Rectangle(-92.7,-122.6,189,269), new cjs.Rectangle(-92.7,-127.2,229,274), new cjs.Rectangle(-92.7,-129,195,275), null];


(lib.hero3_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_shadows1_img();
	this.instance.setTransform(-84.8,-49.5);

	this.instance_1 = new lib.hero3_shadows2_img();
	this.instance_1.setTransform(-84.8,-52.4);

	this.instance_2 = new lib.hero3_shadows3_img();
	this.instance_2.setTransform(-84.8,-49.5);

	this.instance_3 = new lib.hero3_shadows4_img();
	this.instance_3.setTransform(-93.7,-59.2);

	this.instance_4 = new lib.hero3_shadows5_img();
	this.instance_4.setTransform(-84.8,-49.5);

	this.instance_5 = new lib.hero3_shadows6_img();
	this.instance_5.setTransform(-84.8,-49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.8,-49.5,169,107);
p.frameBounds = [rect, new cjs.Rectangle(-84.8,-52.4,169,110), new cjs.Rectangle(-84.8,-49.5,169,107), new cjs.Rectangle(-93.7,-59.2,178,130), rect=new cjs.Rectangle(-84.8,-49.5,169,107), rect, null];


(lib.hero3_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_rouge1_img();
	this.instance.setTransform(-70.8,-40);

	this.instance_1 = new lib.hero3_rouge2_img();
	this.instance_1.setTransform(-70.8,-40);

	this.instance_2 = new lib.hero3_rouge3_img();
	this.instance_2.setTransform(-70.8,-40);

	this.instance_3 = new lib.hero3_rouge4_img();
	this.instance_3.setTransform(-70.8,-40);

	this.instance_4 = new lib.hero3_rouge5_img();
	this.instance_4.setTransform(-70.8,-40);

	this.instance_5 = new lib.hero3_rouge6_img();
	this.instance_5.setTransform(-70.8,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.8,-40,142,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero3_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_lips1_img();
	this.instance.setTransform(-25.1,-11.8);

	this.instance_1 = new lib.hero3_lips2_img();
	this.instance_1.setTransform(-25.1,-11.8);

	this.instance_2 = new lib.hero3_lips3_img();
	this.instance_2.setTransform(-25.1,-11.8);

	this.instance_3 = new lib.hero3_lips4_img();
	this.instance_3.setTransform(-25.1,-11.8);

	this.instance_4 = new lib.hero3_lips5_img();
	this.instance_4.setTransform(-25.1,-11.8);

	this.instance_5 = new lib.hero3_lips6_img();
	this.instance_5.setTransform(-25.1,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.1,-11.8,50,24);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_hair1_img();
	this.instance.setTransform(-160,-205.1);

	this.instance_1 = new lib.hero3_hair2_img();
	this.instance_1.setTransform(-167.7,-203.3);

	this.instance_2 = new lib.hero3_hair3_img();
	this.instance_2.setTransform(-163.7,-180.8);

	this.instance_3 = new lib.hero3_hair5_img();
	this.instance_3.setTransform(-165,-173.7);

	this.instance_4 = new lib.hero3_hair6_img();
	this.instance_4.setTransform(-237.7,-182.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-205.1,320,410);
p.frameBounds = [rect, new cjs.Rectangle(-167.7,-203.3,117,188), new cjs.Rectangle(-163.7,-180.8,267,525), null, new cjs.Rectangle(-165,-173.7,218,442), new cjs.Rectangle(-237.7,-182.7,381,500)];


(lib.hero3_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_fringe1_img();
	this.instance.setTransform(-67.8,-48.6);

	this.instance_1 = new lib.hero3_fringe2_img();
	this.instance_1.setTransform(-74.1,-50.7);

	this.instance_2 = new lib.hero3_fringe3_img();
	this.instance_2.setTransform(-82.7,-73.7);

	this.instance_3 = new lib.hero3_fringe4_img();
	this.instance_3.setTransform(-70.2,-92.2);

	this.instance_4 = new lib.hero3_fringe5_img();
	this.instance_4.setTransform(-67.6,-56.7);

	this.instance_5 = new lib.hero3_fringe6_img();
	this.instance_5.setTransform(-96.7,-67.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.8,-48.6,136,97);
p.frameBounds = [rect, new cjs.Rectangle(-74.1,-50.7,143,164), new cjs.Rectangle(-82.7,-73.7,175,194), new cjs.Rectangle(-70.2,-92.2,185,197), new cjs.Rectangle(-67.6,-56.7,139,99), new cjs.Rectangle(-96.7,-67.2,187,179)];


(lib.hero3_eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_eyes1_img();
	this.instance.setTransform(-75.7,-41.4);

	this.instance_1 = new lib.hero3_eyes2_img();
	this.instance_1.setTransform(-75.7,-41.4);

	this.instance_2 = new lib.hero3_eyes3_img();
	this.instance_2.setTransform(-75.7,-41.4);

	this.instance_3 = new lib.hero3_eyes4_img();
	this.instance_3.setTransform(-75.7,-41.4);

	this.instance_4 = new lib.hero3_eyes5_img();
	this.instance_4.setTransform(-75.7,-41.4);

	this.instance_5 = new lib.hero3_eyes6_img();
	this.instance_5.setTransform(-75.7,-41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.7,-41.4,145,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_eyelashes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_eyelashes1_img();
	this.instance.setTransform(-90.1,-57.6);

	this.instance_1 = new lib.hero3_eyelashes2_img();
	this.instance_1.setTransform(-90.1,-57.6);

	this.instance_2 = new lib.hero3_eyelashes3_img();
	this.instance_2.setTransform(-90.1,-57.6);

	this.instance_3 = new lib.hero3_eyelashes4_img();
	this.instance_3.setTransform(-90.1,-46.9);

	this.instance_4 = new lib.hero3_eyelashes5_img();
	this.instance_4.setTransform(-90.1,-46.9);

	this.instance_5 = new lib.hero3_eyelashes6_img();
	this.instance_5.setTransform(-90.1,-46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.1,-57.6,180,115);
p.frameBounds = [rect, rect=new cjs.Rectangle(-90.1,-57.6,179,115), rect, rect=new cjs.Rectangle(-90.1,-46.9,179,105), rect, rect, null];


(lib.hero3_eyebrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyebrows_img();
	this.instance.setTransform(-77.8,-32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.8,-32.4,156,65);
p.frameBounds = [rect];


(lib.hero3_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgvoAlnMAEihLNMAz0AAAIAADoIRNhQMAVuBI1gAzCorIAYBuQAOBHAPAlQAUAvAkAaIAAgMQABgwAIgqQAShfAzhFIAHgJQgfhJgQhWIgOhLQgOgygUgHIAAAAIgmgRIAAgBIgJgDIgOgGQg4gZgHAAIgHABQgTAEg1ASQg9AVgTANIgBABIgCABIgBABIgCABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAFAPATAJQAQAIAQAAQAPAAA4gLIAcgGIABADIAcATIAUAOQgXAAgdADQgdADgkAHIhDARQghAJgKAKQgHAFABAGQgBAQAWAOIgFAGIAAgBQgCAEgBAEQgBAGAEAFQACAFAGAEIALAGQAXAJAZAAQATAAAhgJQAfgKASgDQAQgDAkATIAWASIgCgBQgpgOgFAAQgWAAg1AXIgLAFQg7AZgGALIgBADIABACIAEAGQANARAGADQAHAFAZADQAIACAIgBQASgBAWgKIAEgCQApgNgUAFIgVAIIABgBQATgJALgEQADABgKAEIAUgHg");
	var mask_graphics_4 = new cjs.Graphics().p("EgvoAlnMAEihLNMAz0AAAIAADoIRNhQMAVuBI1gAxVkIQAAgGgSgPQgSgOAjh/QAkh/AmgPQgWg9gNhFIgOhLQgOgygUgHIAAAAIgmgRIAAgBIgJgDIgOgGQg4gZgHAAIgHABQgTAEg1ASQg9AVgTANIgBABIgCABIgBABIgCABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAFAPATAJQAQAIAQAAQAPAAA4gLIAcgGIABADIAcATIAUAOQgXAAgdADQgdADgkAHIhDARQghAJgKAKQgHAFABAGQgBAQAWAOIgFAGIAAgBQgCAEgBAEQgBAGAEAFQACAFAGAEIALAGQAXAJAZAAQATAAAhgJQAfgKASgDQAQgDAkATIAWASIgCgBQgpgOgFAAQgWAAg1AXIgLAFQg7AZgGALIgBADIABACIAEAGQANARAGADQAHAFAZADQAIACAIgBQASgBAWgKIAEgCQApgNgUAFIgVAIIABgBQATgJALgEQADABgKAEIAUgHIABABIAYBuQAOBHAPAlQAUAvAkAaIAAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgvoAlnMAEihLNMAz0AAAIAADoIRNhQMAVuBI1gAzCorIAYBuQAOBHAPAlQAUAvAkAaIAAgMQABgwAIgqQAShfAzhFIAHgJQgfhJgQhWIgOhLQgOgygUgHIAAAAIgmgRIAAgBIgJgDIgOgGQg4gZgHAAIgHABQgTAEg1ASQg9AVgTANIgBABIgCABIgBABIgCABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAFAPATAJQAQAIAQAAQAPAAA4gLIAcgGIABADIAcATIAUAOQgXAAgdADQgdADgkAHIhDARQghAJgKAKQgHAFABAGQgBAQAWAOIgFAGIAAgBQgCAEgBAEQgBAGAEAFQACAFAGAEIALAGQAXAJAZAAQATAAAhgJQAfgKASgDQAQgDAkATIAWASIgCgBQgpgOgFAAQgWAAg1AXIgLAFQg7AZgGALIgBADIABACIAEAGQANARAGADQAHAFAZADQAIACAIgBQASgBAWgKIAEgCQApgNgUAFIgVAIIABgBQATgJALgEQADABgKAEIAUgHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:12.9,y:39.6}).wait(1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_4,x:12.9,y:39.6}).wait(1).to({graphics:mask_graphics_5,x:12.9,y:39.6}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(-155.6,-115.7);

	this.instance_1 = new lib.hero3_dress2_img();
	this.instance_1.setTransform(-163.2,-148.7);

	this.instance_2 = new lib.hero3_dress3_img();
	this.instance_2.setTransform(-205.9,-169.4);

	this.instance_3 = new lib.hero3_dress4_img();
	this.instance_3.setTransform(-206.5,-163.2);

	this.instance_4 = new lib.hero3_dress5_img();
	this.instance_4.setTransform(-179.7,-166.6);

	this.instance_5 = new lib.hero3_dress6_img();
	this.instance_5.setTransform(-167.6,-153.7);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155.6,-115.7,302,359);
p.frameBounds = [rect, new cjs.Rectangle(-163.2,-148.7,262,290), new cjs.Rectangle(-205.9,-169.4,360,412), new cjs.Rectangle(-206.5,-163.2,311,378), new cjs.Rectangle(-179.7,-166.6,307,354), new cjs.Rectangle(-167.6,-153.7,318,368), null];


(lib.hero3_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_bottom1_img();
	this.instance.setTransform(-66,-89.7);

	this.instance_1 = new lib.hero3_bottom2_img();
	this.instance_1.setTransform(-87.5,-63.2);

	this.instance_2 = new lib.hero3_bottom3_img();
	this.instance_2.setTransform(-87.5,-63.2);

	this.instance_3 = new lib.hero3_bottom4_img();
	this.instance_3.setTransform(-66.8,-65.8);

	this.instance_4 = new lib.hero3_bottom5_img();
	this.instance_4.setTransform(-87.4,-49.9);

	this.instance_5 = new lib.hero3_bottom6_img();
	this.instance_5.setTransform(-104.2,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66,-89.7,132,180);
p.frameBounds = [rect, rect=new cjs.Rectangle(-87.5,-63.2,157,251), rect, new cjs.Rectangle(-66.8,-65.8,133,135), new cjs.Rectangle(-87.4,-49.9,153,238), new cjs.Rectangle(-104.2,-91,206,150), null];


(lib.hero3_accessory_all3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_accessory7_img();
	this.instance.setTransform(-44.5,-49.5);

	this.instance_1 = new lib.hero3_accessory8_img();
	this.instance_1.setTransform(-43.6,-54.5);

	this.instance_2 = new lib.hero3_accessory9_img();
	this.instance_2.setTransform(-31.6,-45.6);

	this.instance_3 = new lib.hero3_accessory10_img();
	this.instance_3.setTransform(-37,-34.1);

	this.instance_4 = new lib.hero3_accessory12_img();
	this.instance_4.setTransform(-48,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.5,-49.5,89,99);
p.frameBounds = [rect, new cjs.Rectangle(-43.6,-54.5,82,93), new cjs.Rectangle(-31.6,-45.6,76,118), new cjs.Rectangle(-37,-34.1,66,79), new cjs.Rectangle(-48,-13,93,155), null];


(lib.hero3_accessory_all2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-92,-77);

	this.instance_1 = new lib.hero3_accessory2_img();
	this.instance_1.setTransform(-153,-61.5);

	this.instance_2 = new lib.hero3_accessory3_img();
	this.instance_2.setTransform(-26,-61.5);

	this.instance_3 = new lib.hero3_accessory4_img();
	this.instance_3.setTransform(-52,-121.5);

	this.instance_4 = new lib.hero3_accessory5_img();
	this.instance_4.setTransform(-94,-97.5);

	this.instance_5 = new lib.hero3_accessory6_img();
	this.instance_5.setTransform(-89,-47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-77,184,154);
p.frameBounds = [rect, new cjs.Rectangle(-153,-61.5,199,131), new cjs.Rectangle(-26,-61.5,103,118), new cjs.Rectangle(-52,-121.5,108,166), new cjs.Rectangle(-94,-97.5,149,145), new cjs.Rectangle(-89,-47.5,147,109), null];


(lib.hero3_accessory_all1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_accessory11_img();
	this.instance.setTransform(-61.8,-56.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.8,-56.2,124,113);
p.frameBounds = [rect, null];


(lib.hero2_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-90.3,-80.1);

	this.instance_1 = new lib.hero2_top2_img();
	this.instance_1.setTransform(-99.7,-73.2);

	this.instance_2 = new lib.hero2_top3_img();
	this.instance_2.setTransform(-79.7,-62.2);

	this.instance_3 = new lib.hero2_top4_img();
	this.instance_3.setTransform(-99.2,-78.2);

	this.instance_4 = new lib.hero2_top5_img();
	this.instance_4.setTransform(-28.3,-75.9);

	this.instance_5 = new lib.hero2_top6_img();
	this.instance_5.setTransform(-79.5,-74.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.3,-80.1,181,160);
p.frameBounds = [rect, new cjs.Rectangle(-99.7,-73.2,186,269), new cjs.Rectangle(-79.7,-62.2,175,132), new cjs.Rectangle(-99.2,-78.2,185,272), new cjs.Rectangle(-28.3,-75.9,107,132), new cjs.Rectangle(-79.5,-74.5,168,145), null];


(lib.hero2_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-77.9,-34.1);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-77.9,-34.1);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-77.9,-42.6);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-77.9,-34.1);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-77.9,-38);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-77.9,-42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.9,-34.1,158,74);
p.frameBounds = [rect, rect, new cjs.Rectangle(-77.9,-42.6,158,89), new cjs.Rectangle(-77.9,-34.1,158,74), new cjs.Rectangle(-77.9,-38,158,78), new cjs.Rectangle(-77.9,-42.2,158,82), null];


(lib.hero2_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-66.2,-26.8);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-66.2,-26.8);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-66.2,-26.8);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-66.2,-26.8);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-66.2,-26.8);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-66.2,-26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.2,-26.8,132,54);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-28.7,-12.4);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-28.7,-12.4);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-28.7,-12.4);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-28.7,-12.4);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-28.7,-12.4);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-28.7,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.7,-12.4,57,25);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-208.4,-293.3);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-136.7,-278.7);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-136.7,-292.4);

	this.instance_3 = new lib.hero2_hair4_img();
	this.instance_3.setTransform(-121.7,-277.2);

	this.instance_4 = new lib.hero2_hair5_img();
	this.instance_4.setTransform(-139.7,-255.7);

	this.instance_5 = new lib.hero2_hair6_img();
	this.instance_5.setTransform(-168,-291.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.4,-293.3,417,587);
p.frameBounds = [rect, new cjs.Rectangle(-136.7,-278.7,292,529), new cjs.Rectangle(-136.7,-292.4,290,466), new cjs.Rectangle(-121.7,-277.2,217,261), new cjs.Rectangle(-139.7,-255.7,267,320), new cjs.Rectangle(-168,-291.9,313,360)];


(lib.hero2_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-77.3,-79.6);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-63.7,-62.2);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-51.5,-64.8);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-49.9,-61.2);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-99.5,-81.6);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-50.7,-62.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.3,-79.6,155,159);
p.frameBounds = [rect, new cjs.Rectangle(-63.7,-62.2,157,220), new cjs.Rectangle(-51.5,-64.8,137,161), new cjs.Rectangle(-49.9,-61.2,127,97), new cjs.Rectangle(-99.5,-81.6,220,184), new cjs.Rectangle(-50.7,-62.7,142,112)];


(lib.hero2_eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-73,-25.1);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-73,-25.1);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-73,-25.1);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-73,-25.1);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-73,-25.1);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-73,-25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-25.1,146,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_eyelashes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyelashes1_img();
	this.instance.setTransform(-88.6,-30.4);

	this.instance_1 = new lib.hero2_eyelashes2_img();
	this.instance_1.setTransform(-88.6,-30.4);

	this.instance_2 = new lib.hero2_eyelashes3_img();
	this.instance_2.setTransform(-75.7,-21.8);

	this.instance_3 = new lib.hero2_eyelashes4_img();
	this.instance_3.setTransform(-78.2,-25.6);

	this.instance_4 = new lib.hero2_eyelashes5_img();
	this.instance_4.setTransform(-74,-32.9);

	this.instance_5 = new lib.hero2_eyelashes6_img();
	this.instance_5.setTransform(-79.7,-28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.6,-30.4,177,61);
p.frameBounds = [rect, rect, new cjs.Rectangle(-75.7,-21.8,150,52), new cjs.Rectangle(-78.2,-25.6,154,46), new cjs.Rectangle(-74,-32.9,145,68), new cjs.Rectangle(-79.7,-28.9,158,55), null];


(lib.hero2_eyebrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows_img();
	this.instance.setTransform(-78.2,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.2,-14.5,157,29);
p.frameBounds = [rect];


(lib.hero2_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(124.9,-143.1);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(120.8,-159.7);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(125.3,-147.7);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(172.2,-139.5);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(124.9,-142.7);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(123.4,-132.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(124.9,-143.1,276,402);
p.frameBounds = [rect, new cjs.Rectangle(120.8,-159.7,299,346), new cjs.Rectangle(125.3,-147.7,306,407), new cjs.Rectangle(172.2,-139.5,273,361), new cjs.Rectangle(124.9,-142.7,282,331), new cjs.Rectangle(123.4,-132.7,270,346), null];


(lib.hero2_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(-110.8,-82.9);

	this.instance_1 = new lib.hero2_bottom2_img();
	this.instance_1.setTransform(-117.2,-82.8);

	this.instance_2 = new lib.hero2_bottom3_img();
	this.instance_2.setTransform(-144.2,-82.8);

	this.instance_3 = new lib.hero2_bottom4_img();
	this.instance_3.setTransform(-136.3,-67.7);

	this.instance_4 = new lib.hero2_bottom5_img();
	this.instance_4.setTransform(-107.6,-82.8);

	this.instance_5 = new lib.hero2_bottom6_img();
	this.instance_5.setTransform(-122.2,-82.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.8,-82.9,222,166);
p.frameBounds = [rect, new cjs.Rectangle(-117.2,-82.8,234,128), new cjs.Rectangle(-144.2,-82.8,250,282), new cjs.Rectangle(-136.3,-67.7,220,267), new cjs.Rectangle(-107.6,-82.8,207,230), new cjs.Rectangle(-122.2,-82.8,251,282), null];


(lib.hero2_accessory_all2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory7_img();
	this.instance.setTransform(-44.5,-54);

	this.instance_1 = new lib.hero2_accessory8_img();
	this.instance_1.setTransform(-44.1,-68);

	this.instance_2 = new lib.hero2_accessory9_img();
	this.instance_2.setTransform(-53.6,-56.6);

	this.instance_3 = new lib.hero2_accessory10_img();
	this.instance_3.setTransform(-72.5,-81.6);

	this.instance_4 = new lib.hero2_accessory11_img();
	this.instance_4.setTransform(-48.1,-68.1);

	this.instance_5 = new lib.hero2_accessory12_img();
	this.instance_5.setTransform(-28,-93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.5,-54,89,108);
p.frameBounds = [rect, new cjs.Rectangle(-44.1,-68,95,108), new cjs.Rectangle(-53.6,-56.6,86,100), new cjs.Rectangle(-72.5,-81.6,159,140), new cjs.Rectangle(-48.1,-68.1,103,109), new cjs.Rectangle(-28,-93.6,78,112), null];


(lib.hero2_accessory_all1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-88,-58);

	this.instance_1 = new lib.hero2_accessory2_img();
	this.instance_1.setTransform(-38,-64);

	this.instance_2 = new lib.hero2_accessory3_img();
	this.instance_2.setTransform(-53,-68);

	this.instance_3 = new lib.hero2_accessory4_img();
	this.instance_3.setTransform(-37,-39);

	this.instance_4 = new lib.hero2_accessory5_img();
	this.instance_4.setTransform(-63,-58);

	this.instance_5 = new lib.hero2_accessory6_img();
	this.instance_5.setTransform(-37,-63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-58,176,116);
p.frameBounds = [rect, new cjs.Rectangle(-38,-64,149,136), new cjs.Rectangle(-53,-68,166,130), new cjs.Rectangle(-37,-39,140,111), new cjs.Rectangle(-63,-58,171,131), new cjs.Rectangle(-37,-63,233,141), null];


(lib.hero1_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1lcrMAAAg5VMAl/AAAIAAF9IFMAAMAAAAzYgAndkwIADgIIARggQAQgdAWgkQAegvAVgbIAHgJIgNgrIACABIgFgMIgDgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgHgGIAAABQgfgXgigdIgDgCIgDABIgBACQgEAHgDAJIgBAFQgEAMABAVQAAAUAvAjIAAAAIAnAcIAAABQAOALABAIQgBAIgHAgIgGAcIhNgpIgBAAQgVgIgOAMQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgEAKgGARIAAACIgBAAQgMADgGALIgDAHQASAcAGAOIAGgGIAAAAIABAAIAcATIAOAIIACAFQAfC3AkAyIAFAGIAGAJIABgCIAkAcg");
	var mask_graphics_1 = new cjs.Graphics().p("A1lcrMAAAg5VMAl/AAAIAAF9IFMAAMAAAAzYgAndkwIADgIIARggQAQgdAWgkQAegvAVgbIAHgJIgNgrIACABIgFgMIgDgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgHgGIAAABQgfgXgigdIgDgCIgDABIgBACQgEAHgDAJIgBAFQgEAMABAVQAAAUAvAjIAAAAIAnAcIAAABQAOALABAIQgBAIgHAgIgGAcIhNgpIgBAAQgVgIgOAMQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgEAKgGARIAAACIgBAAQgMADgGALIgDAHQASAcAGAOIAGgGIAAAAIABAAIAcATIAOAIIACAFQAfC3AkAyIAFAGIAGAJIABgCIAkAcg");
	var mask_graphics_2 = new cjs.Graphics().p("A1lcrMAAAg5VMAl/AAAIAAF9IFMAAMAAAAzYgAndkwIADgIIARggQAPgdAtgHQAtgHAKAAQAKAAgdhpIgNgrIACABIgFgMIgDgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgHgGIAAABQgfgXgigdIgDgCIgDABIgBACQgEAHgDAJIgBAFQgEAMABAVQAAAUAvAjIAAAAIAnAcIAAABQAOALABAIQgBAIgHAgIgGAcIhNgpIgBAAQgVgIgOAMQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgEAKgGARIAAACIgBAAQgMADgGALIgDAHQASAcAGAOIAGgGIAAAAIABAAQApA0AMAIQAMAIgOAAQAcCYAgAtIAFAGIAGAJIABgCIAkAcg");
	var mask_graphics_3 = new cjs.Graphics().p("A1lcrMAAAg5VMAl/AAAIAAF9IFMAAMAAAAzYgAnfkxIAMANIAQARQAEgHAHgGQAOgNAPACQgEgEgEgGQgEgKAAgNIAAgCQAAgJAFgGQAEgEAGgDQALgGAXgEIgCAAIgJgOIgBgBQgFgJAAgIQAAgQANgMQANgMAQAAIABAAIgNg2IgNgrIACABIgFgMIgDgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgHgGIAAABQgfgXgigdIgDgCIgDABIgBACQgEAHgDAJIgBAFQgEAMABAVQAAAUAvAjIAAAAIAnAcIAAABQAOALABAIQgBAIgHAgIgGAcIhNgpIgBAAQgVgIgOAMQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgEAKgGARIAAACIgBAAQgMADgGALIgDAHQASAcAGAOIAGgGIAAAAIABAAQApA0AMAIQAMAIgOAAQAcCYAgAtIAFAGIAGAJIABgCIAiAbg");
	var mask_graphics_4 = new cjs.Graphics().p("A1lcrMAAAg5VMAl/AAAIAAF9IFMAAMAAAAzYgAoNlZIAFAGQAhArARALIA5AkIAHgEIABgBQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQgNgHgEgDQgFgGAAgOQAAgUAQgOQAOgNAZgFQAAgKgFgEQgFgDAAgLQAAgJAEgIQAHgNASgLIAKgHQgFgbgOgzIgNgrIACABIgFgMIgDgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgHgGIAAABQgfgXgigdIgDgCIgDABIgBACQgEAHgDAJIgBAFQgEAMABAVQAAAUAvAjIAAAAIAnAcIAAABQAOALABAIQgBAIgHAgIgGAcIhNgpIgBAAQgVgIgOAMQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgEAKgGARIAAACIgBAAQgMADgGALIgDAHQASAcAGAOIAGgGIAAAAIABAAQApA0AMAIQAMAIgOAAQAcCYAgAtg");
	var mask_graphics_5 = new cjs.Graphics().p("A1lcrMAAAg5VMAl/AAAIAAF9IFMAAMAAAAzYgAndkwQAPAQAWANIAdgMQAVgPgIgiIABAAIABgCQADACAGAOQAGAOADACIAIgDQAHgDAHABQgPgLAAgaQAAgYAQgPQASgRAdADIgYgXQgPgQgGgVQgEgMgIgPIAEgEIgNgrIACABIgFgMIgDgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgHgGIAAABQgfgXgigdIgDgCIgDABIgBACQgEAHgDAJIgBAFQgEAMABAVQAAAUAvAjIAAAAIAnAcIAAABQAOALABAIQgBAIgHAgIgGAcIhNgpIgBAAQgVgIgOAMQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgEAKgGARIAAACIgBAAQgMADgGALIgDAHQASAcAGAOIAGgGIAAAAIABAAIAcATIAOAIIACAFQAfC3AkAyIAFAGIAGAJIABgCIAkAcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:231.8,y:16}).wait(1).to({graphics:mask_graphics_1,x:231.8,y:16}).wait(1).to({graphics:mask_graphics_2,x:231.8,y:16}).wait(1).to({graphics:mask_graphics_3,x:231.8,y:16}).wait(1).to({graphics:mask_graphics_4,x:231.8,y:16}).wait(1).to({graphics:mask_graphics_5,x:231.8,y:16}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(126.8,-139.2);

	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(162.8,-131.3);

	this.instance_2 = new lib.hero1_top3_img();
	this.instance_2.setTransform(123.2,-147.1);

	this.instance_3 = new lib.hero1_top4_img();
	this.instance_3.setTransform(124,-147.7);

	this.instance_4 = new lib.hero1_top5_img();
	this.instance_4.setTransform(121.5,-137.4);

	this.instance_5 = new lib.hero1_top6_img();
	this.instance_5.setTransform(119.8,-143.2);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(126.8,-139.2,197,165);
p.frameBounds = [rect, new cjs.Rectangle(162.8,-131.3,175,114), new cjs.Rectangle(123.2,-147.1,213,152), new cjs.Rectangle(124,-147.7,202,195), new cjs.Rectangle(121.5,-137.4,202,163), new cjs.Rectangle(119.8,-143.2,210,172), null];


(lib.hero1_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-70.9,-43.6);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-70.9,-43.6);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-70.9,-43.6);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-70.9,-43.6);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-70.9,-43.6);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-70.9,-43.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.9,-43.6,146,92);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-67.7,-35);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-67.7,-35);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-70.9,-35);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-67.7,-35);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-67.7,-35);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-67.7,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.7,-35,136,70);
p.frameBounds = [rect, rect, new cjs.Rectangle(-70.9,-35,139,70), rect=new cjs.Rectangle(-67.7,-35,136,70), rect, rect, null];


(lib.hero1_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-21.5,-14.9);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-21.5,-14.9);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-21.5,-14.9);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-21.5,-14.9);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-21.5,-14.9);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-21.5,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-14.9,43,30);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-183.6,-281);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-91.7,-282.7);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-129.7,-288.7);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-111.5,-288.4);

	this.instance_4 = new lib.hero1_hair5_img();
	this.instance_4.setTransform(-68.5,-291.5);

	this.instance_5 = new lib.hero1_hair6_img();
	this.instance_5.setTransform(5.5,-256.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183.6,-281,367,562);
p.frameBounds = [rect, new cjs.Rectangle(-91.7,-282.7,262,523), new cjs.Rectangle(-129.7,-288.7,272,412), new cjs.Rectangle(-111.5,-288.4,238,458), new cjs.Rectangle(-68.5,-291.5,189,482), new cjs.Rectangle(5.5,-256.4,91,129)];


(lib.hero1_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-76,-88.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-70.1,-84.7);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-74.7,-82.2);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-69.5,-81.7);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-68.8,-82.4);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-68.5,-83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76,-88.5,152,177);
p.frameBounds = [rect, new cjs.Rectangle(-70.1,-84.7,139,212), new cjs.Rectangle(-74.7,-82.2,157,231), new cjs.Rectangle(-69.5,-81.7,132,86), new cjs.Rectangle(-68.8,-82.4,133,94), new cjs.Rectangle(-68.5,-83.5,151,227)];


(lib.hero1_eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-64.2,-33.7);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-64.2,-33.7);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-64.2,-33.7);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-64.2,-33.7);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-64.2,-33.7);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-64.2,-33.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.2,-33.7,128,72);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyelashes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyelashes1_img();
	this.instance.setTransform(-77,-44.2);

	this.instance_1 = new lib.hero1_eyelashes2_img();
	this.instance_1.setTransform(-78.7,-38.3);

	this.instance_2 = new lib.hero1_eyelashes3_img();
	this.instance_2.setTransform(-73.7,-39.2);

	this.instance_3 = new lib.hero1_eyelashes4_img();
	this.instance_3.setTransform(-79.1,-42.8);

	this.instance_4 = new lib.hero1_eyelashes5_img();
	this.instance_4.setTransform(-78.7,-40.8);

	this.instance_5 = new lib.hero1_eyelashes6_img();
	this.instance_5.setTransform(-71,-29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-44.2,154,88);
p.frameBounds = [rect, new cjs.Rectangle(-78.7,-38.3,152,84), new cjs.Rectangle(-73.7,-39.2,137,79), new cjs.Rectangle(-79.1,-42.8,156,90), new cjs.Rectangle(-78.7,-40.8,143,81), new cjs.Rectangle(-71,-29.6,133,69), null];


(lib.hero1_eyebrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows_img();
	this.instance.setTransform(-68.5,-27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-27.2,137,54);
p.frameBounds = [rect];


(lib.hero1_dress_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgioAkaMgDShIzMA3zABQIAAF9ISUgoMABuBCOgArpMTQAOBdAVBjQASBTAOBLQEmBYEChcIABgcQAFiNAMiTQjDg4i8AAQiBAAh9AagADWPvQAlBVAdBIQEhAPDmiKQgWh8gnjCQjyCklVgPIA7CHgAmRrdIBRBUIAnAZQCsBlEqBbQCsA0B4AaQBxAZBBACIAQAAQgojGhUh9Qh7gKg1ACQhxAFhngLQhmgMhvguQhIgehyhGIADgVIgdhAIgGgSIgHgZIACABIgEgMIgEgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgGgGIgBABIgQgMIgxgoIgDgCIgDABIgBACQgEAHgDAJIgBAFQgFAMACAVQAAARAkAdIALAJIAAAAIAnAcIAAABQAOALABAIQAAAIgIAgIgGAcIhNgpIgBAAQgIgDgHAAQgLAAgJAHQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgFAKgFARIAAACIgBAAQgMADgGALIgDAHIANAWIALAUIAGgGIAAAAIABAAIAcATIAOAIIACAFQAfC3AkAyIAFAGIAGAJIABgCIARAOgAt0y0QAnC9AbBsQAbBtBFBuQBFBvA3ADQARABAQgFQAEihgOh3QgJhRgaiMIgegzQhaiZgVhYIgWhcQhoAmgpgLQACBOAgCag");
	mask.setTransform(-8.2,21);

	// Слой 1
	this.instance = new lib.hero1_dress_2_img();
	this.instance.setTransform(-86.5,-168.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-168.5,212,411);
p.frameBounds = [rect];


(lib.hero1_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgioAkaMgDShIzMA3zABQIAAF9ISUgoMABuBCOgAl+rPIADgIIARggQAQgdAWgkQAegvAVgbIAHgJIgNgrIACABIgEgMIgEgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgGgGIgBABQgfgXgigdIgDgCIgDABIgBACQgEAHgDAJIgBAFQgFAMACAVQAAAUAvAjIAAAAIAnAcIAAABQAOALABAIQAAAIgIAgIgGAcIhNgpIgBAAQgVgIgOAMQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgFAKgFARIAAACIgBAAQgMADgGALIgDAHQASAcAGAOIAGgGIAAAAIABAAIAcATIAOAIIACAFQAfC3AkAyIAFAGIAGAJIABgCIAkAcg");
	var mask_graphics_1 = new cjs.Graphics().p("EgioAkaMgDShIzMA3zABQIAAF9ISUgoMABuBCOgArpMTQAOBdAVBjQASBTAOBLQEmBYEChcIABgcQAFiNAMiTQjDg4i8AAQiBAAh9AagADWPvQAlBVAdBIQEhAPDmiKQgWh8gnjCQjyCklVgPIA7CHgAmRrdIBRBUIAnAZQCsBlEqBbQCsA0B4AaQBxAZBBACIAQAAQgojGhUh9Qh7gKg1ACQhxAFhngLQhmgMhvguQhIgehyhGIADgVIgdhAIgGgSIgHgZIACABIgEgMIgEgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgGgGIgBABIgQgMIgxgoIgDgCIgDABIgBACQgEAHgDAJIgBAFQgFAMACAVQAAARAkAdIALAJIAAAAIAnAcIAAABQAOALABAIQAAAIgIAgIgGAcIhNgpIgBAAQgIgDgHAAQgLAAgJAHQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgFAKgFARIAAACIgBAAQgMADgGALIgDAHIANAWIALAUIAGgGIAAAAIABAAIAcATIAOAIIACAFQAfC3AkAyIAFAGIAGAJIABgCIARAOgAt0y0QAnC9AbBsQAbBtBFBuQBFBvA3ADQARABAQgFQAEihgOh3QgJhRgaiMIgegzQhaiZgVhYIgWhcQhoAmgpgLQACBOAgCag");
	var mask_graphics_2 = new cjs.Graphics().p("EgioAkaMgDShIzMA3zABQIAAF9ISUgoMABuBCOgAmRrdIBRBUIAnAZQCsBlEqBbQCsA0B4AaQBxAZBBACIAQAAQgojGhUh9Qh7gKg1ACQhxAFhngLQhmgMhvguQhIgehyhGIADgVIgdhAIgGgSIgHgZIACABIgEgMIgEgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgGgGIgBABIgQgMIgxgoIgDgCIgDABIgBACQgEAHgDAJIgBAFQgFAMACAVQAAARAkAdIALAJIAAAAIAnAcIAAABQAOALABAIQAAAIgIAgIgGAcIhNgpIgBAAQgIgDgHAAQgLAAgJAHQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgFAKgFARIAAACIgBAAQgMADgGALIgDAHIANAWIALAUIAGgGIAAAAIABAAIAcATIAOAIIACAFQAfC3AkAyIAFAGIAGAJIABgCIARAOgAt0y0QAnC9AbBsQAbBtBFBuQBFBvA3ADQARABAQgFQAEihgOh3QgJhRgaiMIgegzQhaiZgVhYIgWhcQhoAmgpgLQACBOAgCag");
	var mask_graphics_3 = new cjs.Graphics().p("EgioAkaMgDShIzMA3zABQIAAF9ISUgoMABuBCOgAKjlHQgej/hehEQh7gKg1ACQhxAFhngLQhmgMhvguQhIgehyhGIADgVIgdhAIgGgSIgHgZIACABIgEgMIgEgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgGgGIgBABIgQgMIgxgoIgDgCIgDABIgBACQgEAHgDAJIgBAFQgFAMACAVQAAARAkAdIALAJIAAAAIAnAcIAAABQAOALABAIQAAAIgIAgIgGAcIhNgpIgBAAQgIgDgHAAQgLAAgJAHQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgFAKgFARIAAACIgBAAQgMADgGALIgDAHIANAWIALAUIAGgGIAAAAIABAAIAcATIAOAIIACAFQAfC3AkAyIAFAGIAGAJIABgCIARAOIBRBUIAnAZQCsBlEqBbQCsA0B4AaQBxAZBBACIAQAAIAAAAgAtrygQApCuAlBvQAmBuA5BfQA6BfAwANQAiAKAlgEIAQgdIAIgTIACgGQAMgtgBgoQAAgNgCgXIgOg1Qghh8gfhAIgVgjIgQgYIgFgEIgEgJQg/hhgKgTQhRiVgIiBQhmAlgogLQACBOApCugAkl4tQg1AnAAAyQAAAvAjAgQAlAZAOAGQANAFAeAPQAfAQAfgLQADgJAHgJQAIgLABgHQACgWAAgdQABhSgIgZQgSg8hEAAQgZAAgpAeg");
	var mask_graphics_4 = new cjs.Graphics().p("EgioAkaMgDShIzMA3zABQIAAF9ISUgoMABuBCOgAmRrdIBRBUIAnAZQCsBlEqBbQBOAXBCASQBSAXBCAOQArAKAkAGIAHABIgGgBIAFgUIAGggIAAgBQARh1gtiMIAHgCIgIgBIhJgFIhAgCIgfAAQhhAFhZgIIgegDQhmgMhvguQgggOgqgWQgygag+gmIABgJIACgMIgdhAIgGgSIgHgZIACABIgEgMIgEgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgGgGIgBABIgQgMIgxgoIgDgCIgDABIgBACQgEAHgDAJIgBAFQgFAMACAVQAAARAkAdIALAJIAAAAIASANIAVAPIAAABQAOALABAIQAAAIgIAgIgGAcIgzgbIgBAAIgZgOIgBAAQgIgDgHAAQgLAAgJAHQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgFAKgFARIAAACIgBAAIgHACQgHAEgEAIIgDAHIANAWIALAUIAGgGIAAAAIABAAIAcATIAOAIIACAFQAfC3AkAyIAFAGIAGAJIABgCIARAOgAtrygQApCuAlBvQAmBuA5BfQA6BfAwANQATAGAUABQAQg+ApgvIAMgNIAAgSQABgLgDgTIABgPQABgNgOhKQgNhJg1hIIgVgjIgQgYIgFgEIgEgJQg/hhgKgTQhRiVgIiBQhmAlgogLQACBOApCugAlS2qIABAAIgEgJIADAJg");
	var mask_graphics_5 = new cjs.Graphics().p("EgioAkaMgDShIzMA3zABQIAAF9ISUgoMABuBCOgAmGrUIAIAFIADgIIAEgHQAGgMAUgMQAUgMAXgsIAKgSIAWhBIABgBIAHgJIgDgIIgKgjIACABIgEgMIgEgMIgZhXIABhEQAVhTAAgEQAAgUglgXQgbgRgfgXIgGgGIgBABIgTgPIguglIgDgCIgDABIgBACQgEAHgDAJIgBAFQgFAMACAVQAAAJALANQALAOAZATIAAAAIAnAcIAAABQAOALABAIQAAAIgIAgIgGAcIhNgpIgBAAQgVgIgOAMQgNALgEAWIAAABIgBAAQgOADgIASIgBAAIAAAAQgFAKgFARIAAACIgBAAQgMADgGALIgCAFIgBACIACADQAQAZAGAOIAGgGIAAAAIABAAIAcATIAOAIIACAEIAAABQAfC3AkAyIAFAGIAGAJIABgCIAcAXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-8.2,y:21}).wait(1).to({graphics:mask_graphics_1,x:-8.2,y:21}).wait(1).to({graphics:mask_graphics_2,x:-8.2,y:21}).wait(1).to({graphics:mask_graphics_3,x:-8.2,y:21}).wait(1).to({graphics:mask_graphics_4,x:-8.2,y:21}).wait(1).to({graphics:mask_graphics_5,x:-8.2,y:21}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero1_dress_1_img();
	this.instance.setTransform(-103.2,-163.3);

	this.instance_1 = new lib.hero1_dress_2_img();
	this.instance_1.setTransform(-86.5,-168.5);

	this.instance_2 = new lib.hero1_dress_3_img();
	this.instance_2.setTransform(-102.6,-162.2);

	this.instance_3 = new lib.hero1_dress_4_img();
	this.instance_3.setTransform(-117.3,-165.8);

	this.instance_4 = new lib.hero1_dress_5_img();
	this.instance_4.setTransform(-105.9,-170.6);

	this.instance_5 = new lib.hero1_dress_6_img();
	this.instance_5.setTransform(-102.6,-174.7);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.2,-163.3,206,327);
p.frameBounds = [rect, new cjs.Rectangle(-86.5,-168.5,212,411), new cjs.Rectangle(-102.6,-162.2,202,317), new cjs.Rectangle(-117.3,-165.8,257,408), new cjs.Rectangle(-105.9,-170.6,232,413), new cjs.Rectangle(-102.6,-174.7,228,417), null];


(lib.hero1_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A0L3kINZgaQEQECOvCxILxASMAMBAoTMhH9AAlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:225.5,y:138.2}).wait(6).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero1_bottom1_img();
	this.instance.setTransform(101.6,-9);

	this.instance_1 = new lib.hero1_bottom2_img();
	this.instance_1.setTransform(143.9,-12);

	this.instance_2 = new lib.hero1_bottom3_img();
	this.instance_2.setTransform(130.3,-6.4);

	this.instance_3 = new lib.hero1_bottom4_img();
	this.instance_3.setTransform(101.3,-9.9);

	this.instance_4 = new lib.hero1_bottom5_img();
	this.instance_4.setTransform(111.8,-8.7);

	this.instance_5 = new lib.hero1_bottom6_img();
	this.instance_5.setTransform(117.8,-4.6);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(101.6,-9,243,189);
p.frameBounds = [rect, new cjs.Rectangle(143.9,-12,212,291), new cjs.Rectangle(130.3,-6.4,176,136), new cjs.Rectangle(101.3,-9.9,255,289), new cjs.Rectangle(111.8,-8.7,244,287), new cjs.Rectangle(117.8,-4.6,238,284), null];


(lib.hero1_accessory1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_accessory1_1_img();
	this.instance.setTransform(-133.5,-96.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_accessory1_2_img();
	this.instance_1.setTransform(-133.5,-23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.5,-96.3,267,144.6);
p.frameBounds = [rect];


(lib.hero1_accessory_allback1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory1_2_img();
	this.instance.setTransform(-104.7,-299.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.7,-299.7,179,72);
p.frameBounds = [rect, rect=null, rect, rect, rect, rect, rect];


(lib.hero1_accessory_all3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory8_img();
	this.instance.setTransform(-103.5,-139);

	this.instance_1 = new lib.hero1_accessory9_img();
	this.instance_1.setTransform(55.4,89.5);

	this.instance_2 = new lib.hero1_accessory10_img();
	this.instance_2.setTransform(133.9,98);

	this.instance_3 = new lib.hero1_accessory11_img();
	this.instance_3.setTransform(124,118.9);

	this.instance_4 = new lib.hero1_accessory12_img();
	this.instance_4.setTransform(43.9,63.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.5,-139,207,278);
p.frameBounds = [rect, new cjs.Rectangle(55.4,89.5,116,117), new cjs.Rectangle(133.9,98,119,126), new cjs.Rectangle(124,118.9,102,115), new cjs.Rectangle(43.9,63.9,89,91), null];


(lib.hero1_accessory_all2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory7_img();
	this.instance.setTransform(-42.5,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-58.5,85,117);
p.frameBounds = [rect, null];


(lib.hero1_accessory_all1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory1_1_img();
	this.instance.setTransform(-104.7,-371.6);

	this.instance_1 = new lib.hero1_accessory2_img();
	this.instance_1.setTransform(-86.2,-358.8);

	this.instance_2 = new lib.hero1_accessory3_img();
	this.instance_2.setTransform(-79,-377.9);

	this.instance_3 = new lib.hero1_accessory4_img();
	this.instance_3.setTransform(-68,-374.9);

	this.instance_4 = new lib.hero1_accessory5_img();
	this.instance_4.setTransform(-138,-378.9);

	this.instance_5 = new lib.hero1_accessory6_img();
	this.instance_5.setTransform(-75,-348.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.7,-371.6,267,142);
p.frameBounds = [rect, new cjs.Rectangle(-86.2,-358.8,232,147), new cjs.Rectangle(-79,-377.9,184,108), new cjs.Rectangle(-68,-374.9,193,125), new cjs.Rectangle(-138,-378.9,209,152), new cjs.Rectangle(-75,-348.9,162,156), null];


(lib.headdress_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory6_img();
	this.instance.setTransform(-73.5,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar1HGIghjdIFXtxIRSCfICEQKIhmBog");
	this.shape.setTransform(0.3,-7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-72,158.3,130);
p.frameBounds = [rect];


(lib.headdress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory6_img();
	this.instance.setTransform(-100.3,-60.7,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.3,-60.7,200.6,121.5);
p.frameBounds = [rect];


(lib.headdress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory6_img();
	this.instance.setTransform(-64.8,-62.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArHELIgtmiIDBm5IMRiNIIXHfIj/OJIinBTg");
	this.shape.setTransform(4.6,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.1,-75.7,151.5,146.9);
p.frameBounds = [rect];


(lib.headdress_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory5_img();
	this.instance.setTransform(-74.5,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.5,-72.5,149,145);
p.frameBounds = [rect];


(lib.headdress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory5_img();
	this.instance.setTransform(-73.6,-56.4,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.6,-56.4,147.3,112.8);
p.frameBounds = [rect];


(lib.headdress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory5_img();
	this.instance.setTransform(-83.6,-60.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvhlXIBYjSIcJi1IBiEPImhQzIvFB7g");
	this.shape.setTransform(1.3,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.1,-73,198.9,147.2);
p.frameBounds = [rect];


(lib.headdress_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory4_img();
	this.instance.setTransform(-88.2,-44.8,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjpNRIjyiyIj8zqIGLkFIIyCsIHyMfIgdITImRDDg");
	this.shape.setTransform(8.1,-4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.2,-98.8,176.6,197.8);
p.frameBounds = [rect];


(lib.headdress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-70,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoTJmIkAwLIC1i6IT6gGIB4DMIjvP/g");
	this.shape.setTransform(-0.3,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-59.9,157.8,123);
p.frameBounds = [rect];


(lib.headdress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4_img();
	this.instance.setTransform(-77.2,-50,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtoCyIESrMIObguIICE3IAiEUIoiJGg");
	this.shape.setTransform(-4.1,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.4,-59.2,174.7,117.1);
p.frameBounds = [rect];


(lib.headdress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory3_img();
	this.instance.setTransform(-51.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApGAaIAvnXIJ/kKIGbEkIBEQ0IoFA3g");
	this.shape.setTransform(0.8,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-74.6,116.7,142.5);
p.frameBounds = [rect];


(lib.headdress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-83,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An7LXImEppIFZstIRlgXIFBNkImJJJg");
	this.shape.setTransform(-0.8,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-70.4,179.4,145.5);
p.frameBounds = [rect];


(lib.headdress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory3_img();
	this.instance.setTransform(-73.6,-43.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfIbIgSrFIIrmPIKvCcIGJKjIivE0g");
	this.shape.setTransform(3.9,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.9,-59.2,163.8,114);
p.frameBounds = [rect];


(lib.headdress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory2_img();
	this.instance.setTransform(-81.9,-53.9,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AugGZIH9uyIGRjHIM1DzIB+NfI6jFwg");
	this.shape.setTransform(-1.2,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.1,-76.5,186,147.6);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory2_img();
	this.instance.setTransform(-74.5,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuUraIcpgeIlPXtIyhAEg");
	this.shape.setTransform(0.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.3,-76.3,183.6,152.3);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-92.8,-58.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuyI5IgvoaIJCrSIKVALILtN7IAACyIpCEvg");
	this.shape.setTransform(-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-69.5,199,138.5);
p.frameBounds = [rect];


(lib.headdress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-75.7,-63.4,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArfIsIhgxoICti8IWUD+IA+ENInsPmg");
	this.shape.setTransform(1.2,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.1,-77.8,166.6,152.2);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-88,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwQESIKktdIJ2iBIKkHWIBjEpIiBGLI7vEPg");
	this.shape.setTransform(-3.4,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.6,-73.5,208.4,143.6);
p.frameBounds = [rect];


(lib.hanger2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger2_img();
	this.instance.setTransform(-70,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-47,120,81);
p.frameBounds = [rect];


(lib.hanger1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger_img();
	this.instance.setTransform(-70,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-47,120,81);
p.frameBounds = [rect];


(lib.h3_e6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_eyes6_img();
	this.instance.setTransform(-80,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero3_eyelashes1_img();
	this.instance_1.setTransform(-90,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-57.5,180,115);
p.frameBounds = [rect];


(lib.h3_e5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_eyes5_img();
	this.instance.setTransform(-80,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero3_eyelashes1_img();
	this.instance_1.setTransform(-90,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-57.5,180,115);
p.frameBounds = [rect];


(lib.h3_e4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_eyes4_img();
	this.instance.setTransform(-80,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero3_eyelashes1_img();
	this.instance_1.setTransform(-90,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-57.5,180,115);
p.frameBounds = [rect];


(lib.h3_e3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_eyes3_img();
	this.instance.setTransform(-80,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero3_eyelashes1_img();
	this.instance_1.setTransform(-90,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-57.5,180,115);
p.frameBounds = [rect];


(lib.h3_e2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_eyes2_img();
	this.instance.setTransform(-80,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero3_eyelashes1_img();
	this.instance_1.setTransform(-90,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-57.5,180,115);
p.frameBounds = [rect];


(lib.h3_e1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_eyes1_img();
	this.instance.setTransform(-80,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero3_eyelashes1_img();
	this.instance_1.setTransform(-90,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-57.5,180,115);
p.frameBounds = [rect];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes6_img();
	this.instance.setTransform(-73,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuPFRIk5saMAmRADdIkQK2g");
	this.shape.setTransform(2.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.3,-45.4,245,91.8);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes6_img();
	this.instance.setTransform(-64,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At8DyIBHldIZUn9IBeKrIzZImg");
	this.shape.setTransform(-3.2,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.4,-64.3,178.6,123.6);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes5_img();
	this.instance.setTransform(-73,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuPFRIk5saMAmRADdIkQK2g");
	this.shape.setTransform(2.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.3,-45.4,245,91.8);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes5_img();
	this.instance.setTransform(-64,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At8DyIBHldIZUn9IBeKrIzZImg");
	this.shape.setTransform(-3.2,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.4,-64.3,178.6,123.6);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes4_img();
	this.instance.setTransform(-73,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuPFRIk5saMAmRADdIkQK2g");
	this.shape.setTransform(2.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.3,-45.4,245,91.8);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes4_img();
	this.instance.setTransform(-64,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At8DyIBHldIZUn9IBeKrIzZImg");
	this.shape.setTransform(-3.2,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.4,-64.3,178.6,123.6);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes3_img();
	this.instance.setTransform(-73,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuPFRIk5saMAmRADdIkQK2g");
	this.shape.setTransform(2.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.3,-45.4,245,91.8);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes3_img();
	this.instance.setTransform(-64,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At8DyIBHldIZUn9IBeKrIzZImg");
	this.shape.setTransform(-3.2,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.4,-64.3,178.6,123.6);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes2_img();
	this.instance.setTransform(-73,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuPFRIk5saMAmRADdIkQK2g");
	this.shape.setTransform(2.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.3,-45.4,245,91.8);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes2_img();
	this.instance.setTransform(-64,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At8DyIBHldIZUn9IBeKrIzZImg");
	this.shape.setTransform(-3.2,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.4,-64.3,178.6,123.6);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-73,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuPFRIk5saMAmRADdIkQK2g");
	this.shape.setTransform(2.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.3,-45.4,245,91.8);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-64,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At8DyIBHldIZUn9IBeKrIzZImg");
	this.shape.setTransform(-3.2,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.4,-64.3,178.6,123.6);
p.frameBounds = [rect];


(lib.eyelashes_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon10_img();
	this.instance.setTransform(-87.5,-25.3,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon4_img();
	this.instance.setTransform(-87.5,-25.3,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon2_img();
	this.instance.setTransform(-87.5,-25.3,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon9_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon6_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon3_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon4_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon5_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon4_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon8_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon3_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon5_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon7_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon11_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon6_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon1_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon1_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.eyelashes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon1_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av4ChIAsnvIfFCtIgsHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-33.6,203.6,67.2);
p.frameBounds = [rect];


(lib.decor_wardrobe_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_wardrobe_0_img();
	this.instance.setTransform(-245,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-140,490,280);
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
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon9_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon4_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon6_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon4_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon9_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon10_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon6_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon10_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon9_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon6_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon4_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon5_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK7IAA11IODAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-170,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-150,340,300);
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


(lib.accessory_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory12_img();
	this.instance.setTransform(-39,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnaJYIAAyvIO1AAIAASvg");
	this.shape.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-56,95,122);
p.frameBounds = [rect];


(lib.accessory_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory12_img();
	this.instance.setTransform(-46.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokNSIAA6jIRJAAIAAajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-85,110,170);
p.frameBounds = [rect];


(lib.accessory_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory11_img();
	this.instance.setTransform(-51.5,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao+KKIAA0TIR9AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-65,115,130);
p.frameBounds = [rect];


(lib.accessory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory12_img();
	this.instance.setTransform(-44.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiwHDImQpcIBGk6IGJikIKyJLIh0JFIjEBfg");
	this.shape.setTransform(-1.3,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.1,-66.9,115.6,126.5);
p.frameBounds = [rect];


(lib.accessory_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory10_img();
	this.instance.setTransform(-33,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An0inID6l1IGiAOIFNOIIj+Cjg");
	this.shape.setTransform(-3.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.6,-52.8,100.4,108.3);
p.frameBounds = [rect];


(lib.accessory_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory10_img();
	this.instance.setTransform(-79.5,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.accessory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory11_img();
	this.instance.setTransform(-51,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.accessory_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory9_img();
	this.instance.setTransform(-38,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzKJIAA0RIPnAAIAAURg");
	this.shape.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-59,100,130);
p.frameBounds = [rect];


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory9_img();
	this.instance.setTransform(-43,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory10_img();
	this.instance.setTransform(-59.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArSGaIDgtsILJl4IH9ECIhtTLIsvDIg");
	this.shape.setTransform(-0.1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.5,-82.1,144.8,168.8);
p.frameBounds = [rect];


(lib.accessory_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory8_img();
	this.instance.setTransform(-41,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzI/IAAx9IPnAAIAAR9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-57.5,100,115);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory8_img();
	this.instance.setTransform(-47.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao+JYIAAyvIR9AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-60,115,120);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory9_img();
	this.instance.setTransform(-58,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AliKMIkzlIIAeoaIFZmaIG6gsIH6JLIhGHcIlHESg");
	this.shape.setTransform(0.3,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.9,-69.2,132.6,133.9);
p.frameBounds = [rect];


(lib.accessory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory7_img();
	this.instance.setTransform(-44.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmFJCIiHyMICjhwIN2H1IgIILIotF1g");
	this.shape.setTransform(-1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-68.4,105.1,139.9);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory7_img();
	this.instance.setTransform(-44.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao+JXIAAyuIR9AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-60,115,120);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory8_img();
	this.instance.setTransform(-103.5,-139);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AojJNIp1qgIEqrnIKppnIOog9IG2KcMgEkAkhg");
	this.shape.setTransform(-4,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.7,-150.9,235.5,300.7);
p.frameBounds = [rect];


(lib.curtain_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
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
	this.instance.setTransform(-110,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
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
	this.shape.graphics.f().s("#FF0000").ss(5,2,0,3).p("AAAAAIBQBQABQhPIhQBPAhPBQIBPhQIhPhP");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, null];


(lib.play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_img();
	this.instance.setTransform(-110,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect];


(lib.play_again_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-110,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_img();
	this.instance.setTransform(-110,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect];


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_img();
	this.instance.setTransform(-110,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect];


(lib.next_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_img();
	this.instance.setTransform(-110,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_img();
	this.instance.setTransform(-110,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect];


(lib.more_games_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_1_2_img();
	this.instance.setTransform(-72,-100);

	this.instance_1 = new lib.more_games_2_2_img();
	this.instance_1.setTransform(-72,-100);

	this.instance_2 = new lib.more_games_3_2_img();
	this.instance_2.setTransform(-72,-100);

	this.instance_3 = new lib.more_games_4_2_img();
	this.instance_3.setTransform(-72,-100);

	this.instance_4 = new lib.more_games_5_2_img();
	this.instance_4.setTransform(-72,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_4}]},16).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_4}]},6).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-100,143,200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance.setTransform(-120,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,220,100);
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


(lib.free_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_img();
	this.instance.setTransform(0,0,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,200,71.5);
p.frameBounds = [rect];


(lib.facebook_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_img();
	this.instance.setTransform(-80,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-30,160,60);
p.frameBounds = [rect, rect, rect, rect];


(lib.decor_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_nav_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


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
	this.instance.setTransform(-110,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_2_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({scaleX:1,scaleY:1},28).to({scaleX:0.9,scaleY:0.9},40).wait(1));

	// animation
	this.instance_1 = new lib.title_1_mc();
	this.instance_1.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},29).to({scaleX:0.9,scaleY:0.9},40).wait(69));

	// bg
	this.instance_2 = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(138));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-150,340,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
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


(lib.jewelry_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.hero3_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-78,-321.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero3_fringe
	this.instance_1 = new lib.hero3_fringe1_img();
	this.instance_1.setTransform(-73.4,-262.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero3_eyes_all
	this.instance_2 = new lib.hero3_eyes2_img();
	this.instance_2.setTransform(-55.2,-178.6,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hero3_eyelashes_all
	this.instance_3 = new lib.hero3_eyelashes1_img();
	this.instance_3.setTransform(-62,-197.1,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hero3_lips_all
	this.instance_4 = new lib.hero3_lips3_img();
	this.instance_4.setTransform(-36.4,-115.6,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// hero3_eyebrows
	this.instance_5 = new lib.hero3_eyebrows();
	this.instance_5.setTransform(4,-186.3,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// hero3_shadows_all
	this.instance_6 = new lib.hero3_shadows2_img();
	this.instance_6.setTransform(-60.4,-191.6,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// hero3_rouge_all
	this.instance_7 = new lib.hero3_rouge6_img();
	this.instance_7.setTransform(-64.9,-154.3,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// hero3_head
	this.instance_8 = new lib.hero3_head_img();
	this.instance_8.setTransform(-79.9,-256.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// dress
	this.instance_9 = new lib.hero3_dress3_img();
	this.instance_9.setTransform(-198.9,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// hero3_body1
	this.instance_10 = new lib.hero3_body1_img();
	this.instance_10.setTransform(-195,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// hero3_hair
	this.instance_11 = new lib.hero3_hair1_img();
	this.instance_11.setTransform(-124.5,-286);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-198.9,-321.5,394.4,609.1);
p.frameBounds = [rect];


(lib.hero2_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-67.5,-333.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_fringe1
	this.instance_1 = new lib.hero2_fringe3_img();
	this.instance_1.setTransform(-70.3,-283.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero2_eyes_all
	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-47.8,-197.7,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hero2_eyelashes_all
	this.instance_3 = new lib.hero2_eyelashes2_img();
	this.instance_3.setTransform(-58.1,-206.9,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hero2_lips_all
	this.instance_4 = new lib.hero2_lips4_img();
	this.instance_4.setTransform(-17.7,-145.8,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// hero2_eyebrows
	this.instance_5 = new lib.hero2_eyebrows();
	this.instance_5.setTransform(0.6,-210.1,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// hero2_shadows_all
	this.instance_6 = new lib.hero2_shadows3_img();
	this.instance_6.setTransform(-52.6,-214.5,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// hero2_rouge_all
	this.instance_7 = new lib.hero2_rouge1_img();
	this.instance_7.setTransform(-47.3,-175.2,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// hero2_head
	this.instance_8 = new lib.hero2_head_img();
	this.instance_8.setTransform(-70.1,-275.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// dress
	this.instance_9 = new lib.hero2_dress3_img();
	this.instance_9.setTransform(-130.7,-141.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// hero2_body1
	this.instance_10 = new lib.hero2_body1_img();
	this.instance_10.setTransform(-131,-161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// hero2_hair
	this.instance_11 = new lib.hero2_hair3_img();
	this.instance_11.setTransform(-136.7,-287.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.7,-333.5,312,598.8);
p.frameBounds = [rect];


(lib.hero1_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_accessory10_img();
	this.instance.setTransform(-1.5,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.hero1_accessory1_1_img();
	this.instance_1.setTransform(-91,-338.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// fringe
	this.instance_2 = new lib.hero1_fringe1_img();
	this.instance_2.setTransform(-72.1,-290.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// eyes
	this.instance_3 = new lib.hero1_eyes2_img();
	this.instance_3.setTransform(-44.1,-199.2,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// eyeylashes
	this.instance_4 = new lib.hero1_eyelashes1_img();
	this.instance_4.setTransform(-50.4,-210.5,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// shadows
	this.instance_5 = new lib.hero1_shadows2_img();
	this.instance_5.setTransform(-48,-208.1,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// hero1_lips_all
	this.instance_6 = new lib.hero1_lips2_img();
	this.instance_6.setTransform(-5.5,-144.4,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// hero1_eyebrows
	this.instance_7 = new lib.hero1_eyebrows();
	this.instance_7.setTransform(-10.1,-200.2,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// hero1_rouge_all
	this.instance_8 = new lib.hero1_rouge2_img();
	this.instance_8.setTransform(-33.7,-176.9,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// hero1_head1
	this.instance_9 = new lib.hero1_head1_img();
	this.instance_9.setTransform(-59.4,-280.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// hero1_dress1
	this.instance_10 = new lib.hero1_dress_main();
	this.instance_10.setTransform(13.7,32.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// hero_body1
	this.instance_11 = new lib.hero_body1_img();
	this.instance_11.setTransform(-87.1,-156.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// hero1_hair1
	this.instance_12 = new lib.hero1_hair1_img();
	this.instance_12.setTransform(-183.6,-271.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.hero1_accessory1_2_img();
	this.instance_13.setTransform(-91,-267);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-237.3,-338.8,485.5,629.5);
p.frameBounds = [rect];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero3_accessory_all3();
	this.accessory.setTransform(-167.6,202);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero3_accessory_all2();
	this.headdress.setTransform(14,-244.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero3_fringe_all();
	this.fringe.setTransform(-5.6,-214.3);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyes
	this.eyes = new lib.hero3_eyes_all();
	this.eyes.setTransform(-8.1,-152.6,0.65,0.65,0,0,0,-3.3,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero3_eyelashes_all();
	this.eyelashes.setTransform(-3.5,-159.6,0.65,0.65,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all();
	this.lips.setTransform(-20.1,-107.9,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance = new lib.hero3_eyebrows();
	this.instance.setTransform(4,-186.3,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all();
	this.shadows.setTransform(-5.3,-159.4,0.65,0.65,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all();
	this.blush.setTransform(-19,-128.3,0.65,0.65,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.hero3_head_img();
	this.instance_1.setTransform(-79.9,-256.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// jewelry
	this.jewelry = new lib.hero3_accessory_all1();
	this.jewelry.setTransform(19.3,86.4);

	this.timeline.addTween(cjs.Tween.get(this.jewelry).wait(1));

	// bottom
	this.bottom = new lib.hero3_bottom_all();
	this.bottom.setTransform(35,98.2);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// top
	this.top = new lib.hero3_top_all();
	this.top.setTransform(-64,22.4);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// dress
	this.dress = new lib.hero3_dress_all();
	this.dress.setTransform(7,45);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// body
	this.instance_2 = new lib.hero3_body1_img();
	this.instance_2.setTransform(-195,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hair
	this.hair = new lib.hero3_hair_all();
	this.hair.setTransform(35.5,-80.8);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-255.1,-321.5,450.6,609.8);
p.frameBounds = [rect];


(lib.hero_3_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero3_fringe0_img();
	this.instance.setTransform(-113,-404.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyes
	this.eyes = new lib.hero3_eyes_all();
	this.eyes.setTransform(-12.6,-234.7,1,1,0,0,0,-3.3,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero3_eyelashes_all();
	this.eyelashes.setTransform(-5.4,-245.6);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all();
	this.lips.setTransform(-31.1,-166);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.hero3_eyebrows();
	this.instance_1.setTransform(6.1,-286.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all();
	this.shadows.setTransform(-8.2,-245.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all();
	this.blush.setTransform(-29.2,-197.5);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero3_body0_img();
	this.instance_2.setTransform(-394.9,-440);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-394.9,-440,697,879);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero2_accessory_all2();
	this.accessory.setTransform(-82.6,189);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero2_accessory_all1();
	this.headdress.setTransform(-31.5,-283.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all();
	this.fringe.setTransform(-18.8,-218.3);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all();
	this.eyes.setTransform(1.1,-181.1,0.67,0.67,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero2_eyelashes_all();
	this.eyelashes.setTransform(1.2,-186.5,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all();
	this.lips.setTransform(1.6,-137.5,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance = new lib.hero2_eyebrows();
	this.instance.setTransform(0.6,-210.1,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all();
	this.shadows.setTransform(-0.4,-185.7,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all();
	this.blush.setTransform(-3,-157.2,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.hero2_head_img();
	this.instance_1.setTransform(-70.1,-275.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bottom
	this.bottom = new lib.hero2_bottom_all();
	this.bottom.setTransform(43.4,66.7);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// top
	this.top = new lib.hero2_top_all();
	this.top.setTransform(-36.8,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all();
	this.dress.setTransform(20.9,70,1,1,0,0,0,276.9,64);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// body
	this.instance_2 = new lib.hero2_body1_img();
	this.instance_2.setTransform(-131,-161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all();
	this.hair.setTransform(0,4.6);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.4,-341.5,417,639.8);
p.frameBounds = [rect];


(lib.hero_2_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-143.6,-444.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all();
	this.eyes.setTransform(1.6,-270.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero2_eyelashes_all();
	this.eyelashes.setTransform(1.8,-278.4);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all();
	this.lips.setTransform(2.3,-205.2);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.hero2_eyebrows();
	this.instance_1.setTransform(0.9,-313.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all();
	this.shadows.setTransform(-0.7,-277.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all();
	this.blush.setTransform(-4.4,-234.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero2_body0_img();
	this.instance_2.setTransform(-311.5,-444);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-311.5,-444.6,622,889.6);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero1_accessory_all3();
	this.accessory.setTransform(-147.9,-229.6);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero1_accessory_all1();
	this.headdress.setTransform(13.7,32.8);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all();
	this.fringe.setTransform(3.9,-202.1);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all();
	this.eyes.setTransform(-3.2,-176.3,0.637,0.637,0,0,0,-0.1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero1_eyelashes_all();
	this.eyelashes.setTransform(-1.4,-182.4,0.637,0.637,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all();
	this.shadows.setTransform(-2.9,-180.3,0.637,0.637,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all();
	this.lips.setTransform(8.2,-134.9,0.637,0.637,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance = new lib.hero1_eyebrows();
	this.instance.setTransform(-10.1,-200.2,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all();
	this.blush.setTransform(9.5,-154.6,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.hero1_head1_img();
	this.instance_1.setTransform(-59.4,-280.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// jewelry
	this.jewelry = new lib.hero1_accessory_all2();
	this.jewelry.setTransform(29.4,-83);

	this.timeline.addTween(cjs.Tween.get(this.jewelry).wait(1));

	// top
	this.top = new lib.hero1_top_all();
	this.top.setTransform(12,-63,1,1,0,0,0,229,-59.1);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero1_bottom_all();
	this.bottom.setTransform(3,82.1,1,1,0,0,0,220,86);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all();
	this.dress.setTransform(13.7,32.8);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// body
	this.instance_2 = new lib.hero_body1_img();
	this.instance_2.setTransform(-87.1,-156.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all();
	this.hair.setTransform(0,9.6);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// headdressSecond
	this.headdressSecond = new lib.hero1_accessory_allback1();
	this.headdressSecond.setTransform(13.7,32.8);

	this.timeline.addTween(cjs.Tween.get(this.headdressSecond).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-251.4,-368.6,499.7,659.3);
p.frameBounds = [rect];


(lib.hero_1_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_fringe0_img();
	this.instance.setTransform(-152.5,-451.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all();
	this.lips.setTransform(-26.4,-207.2);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all();
	this.eyes.setTransform(-44.4,-272.3,1,1,0,0,0,-0.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero1_eyelashes_all();
	this.eyelashes.setTransform(-41.5,-281.8);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyebrows();
	this.instance_1.setTransform(-55.2,-309.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all();
	this.shadows.setTransform(-43.8,-278.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all();
	this.blush.setTransform(-24.4,-238.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero1_body0_img();
	this.instance_2.setTransform(-326.7,-452.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326.7,-452.5,576,912);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1();
	this.instance.setTransform(0,19.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyKIpIGSxaINsioIQUHFIADELMgg/ALjg");
	this.shape.setTransform(0.1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.2,-70.8,232.6,146.1);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.h3_t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top6_img();
	this.instance.setTransform(-88,-161.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-180.4,195,293.8);
p.frameBounds = [rect];


(lib.h3_t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top5_img();
	this.instance.setTransform(-92,-160.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-180.4,229,293.8);
p.frameBounds = [rect];


(lib.h3_t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top4_img();
	this.instance.setTransform(-84,-149.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-180.4,189,299.8);
p.frameBounds = [rect];


(lib.h3_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top3_img();
	this.instance.setTransform(-106,-167.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-180.4,214,348.8);
p.frameBounds = [rect];


(lib.h3_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top2_img();
	this.instance.setTransform(-97,-169.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-180.4,202,290.8);
p.frameBounds = [rect];


(lib.h3_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top1_img();
	this.instance.setTransform(-100,-172.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-180.4,207,304.8);
p.frameBounds = [rect];


(lib.h3_d6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress6_img();
	this.instance.setTransform(-97,-166.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-180.4,318,381.8);
p.frameBounds = [rect];


(lib.h3_d5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress5_img();
	this.instance.setTransform(-108,-176.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-180.4,307,357.8);
p.frameBounds = [rect];


(lib.h3_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress4_img();
	this.instance.setTransform(-139,-176.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139,-180.4,311,381.8);
p.frameBounds = [rect];


(lib.h3_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress3_img();
	this.instance.setTransform(-133,-176.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133,-180.4,360,415.8);
p.frameBounds = [rect];


(lib.h3_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress2_img();
	this.instance.setTransform(-90,-156.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-180.4,262,313.8);
p.frameBounds = [rect];


(lib.h3_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(-98,-156.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98,-180.4,302,382.8);
p.frameBounds = [rect];


(lib.h3_b6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom6_img();
	this.instance.setTransform(-72,-158.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-180.4,206,171.8);
p.frameBounds = [rect];


(lib.h3_b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom5_img();
	this.instance.setTransform(-57,-157.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-180.4,153,260.8);
p.frameBounds = [rect];


(lib.h3_b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom4_img();
	this.instance.setTransform(-39.7,-157.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.7,-180.4,135,157.8);
p.frameBounds = [rect];


(lib.h3_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom3_img();
	this.instance.setTransform(-57,-157.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-180.4,157,273.8);
p.frameBounds = [rect];


(lib.h3_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom2_img();
	this.instance.setTransform(-57,-157.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-180.4,157,273.8);
p.frameBounds = [rect];


(lib.h3_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom1_img();
	this.instance.setTransform(-28,-148.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.7,-180.4,145.7,211.8);
p.frameBounds = [rect];


(lib.h2_t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top6_img();
	this.instance.setTransform(-68,-154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-180.4,168,170.8);
p.frameBounds = [rect];


(lib.h2_t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top5_img();
	this.instance.setTransform(-28,-156.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.7,-180.4,120.7,155.8);
p.frameBounds = [rect];


(lib.h2_t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top4_img();
	this.instance.setTransform(-100.6,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.6,-180.4,185,299.4);
p.frameBounds = [rect];


(lib.h2_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top3_img();
	this.instance.setTransform(-75,-160.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-180.4,175,151.8);
p.frameBounds = [rect];


(lib.h2_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top2_img();
	this.instance.setTransform(-91,-161.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-180.4,186,287.8);
p.frameBounds = [rect];


(lib.h2_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-88,-160.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-180.4,181,179.8);
p.frameBounds = [rect];


(lib.h2_d6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress6_img();
	this.instance.setTransform(-90,-151.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-180.4,270,374.8);
p.frameBounds = [rect];


(lib.h2_d5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress5_img();
	this.instance.setTransform(-76,-155.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76,-180.4,282,355.8);
p.frameBounds = [rect];


(lib.h2_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(-47,-158.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-180.4,273,382.8);
p.frameBounds = [rect];


(lib.h2_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-85,-164.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-180.4,306,422.8);
p.frameBounds = [rect];


(lib.h2_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(-81,-169.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-180.4,299,356.8);
p.frameBounds = [rect];


(lib.h2_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-84,-163.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-180.4,276,418.8);
p.frameBounds = [rect];


(lib.h2_b6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom6_img();
	this.instance.setTransform(-83,-150.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,-180.4,251,311.8);
p.frameBounds = [rect];


(lib.h2_b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom5_img();
	this.instance.setTransform(-66,-152.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66,-180.4,207,257.8);
p.frameBounds = [rect];


(lib.h2_b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom4_img();
	this.instance.setTransform(-104,-153.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104,-180.4,220,293.8);
p.frameBounds = [rect];


(lib.h2_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom3_img();
	this.instance.setTransform(-104,-149.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104,-180.4,250,312.8);
p.frameBounds = [rect];


(lib.h2_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom2_img();
	this.instance.setTransform(-74,-149.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-180.4,234,158.8);
p.frameBounds = [rect];


(lib.h2_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(-74,-149.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-180.4,222,196.8);
p.frameBounds = [rect];


(lib.h1_t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top6_img();
	this.instance.setTransform(-114,-159.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-180.4,210,192.8);
p.frameBounds = [rect];


(lib.h1_t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top5_img();
	this.instance.setTransform(-111,-159.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-180.4,202,183.8);
p.frameBounds = [rect];


(lib.h1_t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top4_img();
	this.instance.setTransform(-105,-154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-180.4,202,220.8);
p.frameBounds = [rect];


(lib.h1_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top3_img();
	this.instance.setTransform(-107,-181.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107,-181.6,213,152);
p.frameBounds = [rect];


(lib.h1_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top2_img();
	this.instance.setTransform(-70,-155.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-180.4,175,138.8);
p.frameBounds = [rect];


(lib.h1_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-105,-154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-180.4,197,190.8);
p.frameBounds = [rect];


(lib.h1_d6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress_6_img();
	this.instance.setTransform(-102,-152.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-180.4,228,444.8);
p.frameBounds = [rect];


(lib.h1_d5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress_5_img();
	this.instance.setTransform(-106,-149.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-180.4,232,443.8);
p.frameBounds = [rect];


(lib.h1_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress_4_img();
	this.instance.setTransform(-117,-149.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-180.4,257,438.8);
p.frameBounds = [rect];


(lib.h1_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress_3_img();
	this.instance.setTransform(-100,-161.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-180.4,202,335.8);
p.frameBounds = [rect];


(lib.h1_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress_2_img();
	this.instance.setTransform(-86,-154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-180.4,212,436.8);
p.frameBounds = [rect];


(lib.h1_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress_1_img();
	this.instance.setTransform(-103,-146.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-180.4,206,360.8);
p.frameBounds = [rect];


(lib.h1_b6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom6_img();
	this.instance.setTransform(-79,-147.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-180.4,238,316.8);
p.frameBounds = [rect];


(lib.h1_b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom5_img();
	this.instance.setTransform(-85,-151.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-180.4,244,315.8);
p.frameBounds = [rect];


(lib.h1_b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom4_img();
	this.instance.setTransform(-98,-143.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98,-180.4,255,325.8);
p.frameBounds = [rect];


(lib.h1_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom3_img();
	this.instance.setTransform(-68,-150.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-180.4,176,165.8);
p.frameBounds = [rect];


(lib.h1_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom2_img();
	this.instance.setTransform(-58,-148.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-180.4,212,322.8);
p.frameBounds = [rect];


(lib.h1_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom1_img();
	this.instance.setTransform(-105,-154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(18.3,-139.9,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-180.4,243,214.8);
p.frameBounds = [rect];


(lib.eyes_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_e6();
	this.instance.setTransform(0,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNCnMAhggO+IC7MkI4yMKg");
	this.shape.setTransform(-15.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.9,-104.3,236.3,208.6);
p.frameBounds = [rect];


(lib.eyes_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_e5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyyCmIAruuMAk6AOYIoOJ5g");
	this.shape.setTransform(8,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.3,-79.3,240.7,155.5);
p.frameBounds = [rect];


(lib.eyes_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_e4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyyCmIAruuMAk6AOYIoOJ5g");
	this.shape.setTransform(8,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.3,-79.3,240.7,155.5);
p.frameBounds = [rect];


(lib.eyes_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_e3();
	this.instance.setTransform(0,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNCnMAhggO+IC7MkI4yMKg");
	this.shape.setTransform(-15.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.9,-104.3,236.3,208.6);
p.frameBounds = [rect];


(lib.eyes_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_e2();
	this.instance.setTransform(0,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNCnMAhggO+IC7MkI4yMKg");
	this.shape.setTransform(-15.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.9,-104.3,236.3,208.6);
p.frameBounds = [rect];


(lib.eyes_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_e1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyyCmIAruuMAk6AOYIoOJ5g");
	this.shape.setTransform(8,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.3,-79.3,240.7,155.5);
p.frameBounds = [rect];


(lib.eyelashes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.dress_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d6();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1AXmIlqp8MAJKgukINMAEMAXdAjyIHiW5I29HGg");
	this.shape.setTransform(43.6,199.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.1,-11.4,341.5,421.6);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d6();
	this.instance.setTransform(-17,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2qR2MAHYgjuIKHtvIEPAAMAW0AobIAzKOMgkHAMmg");
	this.shape.setTransform(27.3,187.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.8,-14.9,290.3,404.9);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d6();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgPgAkTMgDPg9PISJrbIHggCIGTNYMAFjA7bg");
	this.shape.setTransform(-8.5,218.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128.5,-14.3,240.1,466.1);
p.frameBounds = [rect];


(lib.dress_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d5();
	this.instance.setTransform(-18.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A5mRUMAKSgwhIM6gCMAX5AimIEITVI5xIkg");
	this.shape.setTransform(29.7,188.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.1,-11.3,327.8,400.2);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d5();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3zSZMAFUgvyIRMgRMAZHAw4Io0J9IzZAgg");
	this.shape.setTransform(45.7,178.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.8,-11.1,305,379.9);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d5();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzYNaMAGjgijIL6vaIGrACIHPKfMAGaA+RMgifAAVg");
	this.shape.setTransform(-9.2,226.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.4,-7.4,248.4,468.2);
p.frameBounds = [rect];


(lib.dress_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d4();
	this.instance.setTransform(-18.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2pbzIjFlqMAPHg1bIOOAAMAUAAh2ICHOvIkROAg");
	this.shape.setTransform(-1.9,191.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.6,-8.9,329.4,400.7);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d4();
	this.instance.setTransform(-19.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1kY3MgBhgzvID1l2INlgFMAcxArxImrRVIxyEhg");
	this.shape.setTransform(70.8,197.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.9,-12.8,295.6,420.2);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d4();
	this.instance.setTransform(-19.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0hqJII4vcILYqQIEqgBILPOEIE6T8MgBlAliMgihAALg");
	this.shape.setTransform(-9.6,220.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141,-9.3,262.9,459.2);
p.frameBounds = [rect];


(lib.dress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d3();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgNsAiSIwLq8MANeg51IUPAAMAToAmsIGaWbIrZH4g");
	this.shape.setTransform(27.5,206.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.7,-13.9,382.4,441.8);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d3();
	this.instance.setTransform(-18,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A58MoMAEVgqVIGfldILAgEMAeFAtJIppYIMgjcABMg");
	this.shape.setTransform(52.1,216.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-8.7,332.3,451.1);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d3();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwNEoIHq5zIHcozIHXAAIJ+JWMgDxAygI7lAHg");
	this.shape.setTransform(-20.5,183);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.3,-8.9,207.6,383.8);
p.frameBounds = [rect];


(lib.dress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d2();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1gVOMAFcgjvIHrsJIJ/AAMATyAiJIAJP8I5IDQg");
	this.shape.setTransform(19.5,160.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.1,-9.9,275.4,341.5);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d2();
	this.instance.setTransform(-18.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A5COxMAGMgtgITAgMMAY5AvNIoxLrI61C/g");
	this.shape.setTransform(51.8,186.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.5,-11.4,320.7,396);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d2();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ax/t7IQM2MIGAAEIIYLqMAFbA7fMgiGABCg");
	this.shape.setTransform(-2.3,221.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.5,-10.1,230.6,462.5);
p.frameBounds = [rect];


(lib.dress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d1();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A5G1QIG1qtIQyAAMAUNAiUIGZc+MgqrAApg");
	this.shape.setTransform(39.6,192.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.1,-11.9,321.5,409.4);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d1();
	this.instance.setTransform(-19,179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2xM8MAE0gqeIGqlNIK2AGMAV0AoMIBbLtIjsQxMgkLAAug");
	this.shape.setTransform(36.9,212.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.9,-10.3,291.7,444.8);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d1();
	this.instance.setTransform(-18,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Auyd+MgC1gv9IRTsDIJTgJIIpPJMgH/AtOg");
	this.shape.setTransform(-16.2,178.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129,-14.8,225.8,386.5);
p.frameBounds = [rect];


(lib.bottom_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_b6();
	this.instance.setTransform(-18.9,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,0,206,171.8);
p.frameBounds = [rect];


(lib.bottom_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b6();
	this.instance.setTransform(-17.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0TZmIggy6MANPggvIHFgCIVTZaIoHaxg");
	this.shape.setTransform(23.1,154.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.1,-12.3,266.5,334.1);
p.frameBounds = [rect];


(lib.bottom_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b6();
	this.instance.setTransform(-18,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AveZ6IkB/yIMk0MIKMADIMAcTIEOXyg");
	this.shape.setTransform(23.9,160.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.9,-6.6,249.6,333.8);
p.frameBounds = [rect];


(lib.bottom_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_b5();
	this.instance.setTransform(-18.4,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,0,153,260.8);
p.frameBounds = [rect];


(lib.bottom_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b5();
	this.instance.setTransform(-18.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ax7SbMAJ6goqIJ0AHILjPUIEmX9IwHFHg");
	this.shape.setTransform(17.1,133);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.7,-9.4,229.8,284.8);
p.frameBounds = [rect];


(lib.bottom_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b5();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvxM9IiJmkIM/4iIMBAAIK2bSIhPDTIumFug");
	this.shape.setTransform(0.1,109.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.7,-6.9,254.7,322.8);
p.frameBounds = [rect];


(lib.bottom_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_b4();
	this.instance.setTransform(-19.8,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.5,0,135,157.8);
p.frameBounds = [rect];


(lib.bottom_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b4();
	this.instance.setTransform(-18,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyoYhMAQVgxNIKBAAIK7SOIgHfLg");
	this.shape.setTransform(-18.4,148.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.7,-9.9,238.7,316.3);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b4();
	this.instance.setTransform(-18.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtTRNInwqXIRn5GIJMgIIPUcUIv3Idg");
	this.shape.setTransform(0.5,106.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.3,-11.1,272.9,336.9);
p.frameBounds = [rect];


(lib.bottom_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_b3();
	this.instance.setTransform(-18.4,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,0,157,273.8);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b3();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0ZPKMASGgksIE/gDINiSfIEMRFImbErIwgC8g");
	this.shape.setTransform(-0.1,130.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.8,-7.9,261.3,320.7);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b3();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvpOEIH/8lIR3AHIFdc8g");
	this.shape.setTransform(0,80.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.2,-12.7,200.5,186.1);
p.frameBounds = [rect];


(lib.bottom_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_b2();
	this.instance.setTransform(-18.4,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,0,157,273.8);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b2();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxALaIijmMIOu0MIEPAAIUKVEIjaDfIw3Fag");
	this.shape.setTransform(25,86);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.3,-9.9,250.6,192);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b2();
	this.instance.setTransform(-18,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyQvSIKAshIGDgBIJ5OBMAKlApcMgkhAAMg");
	this.shape.setTransform(32,165.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-12.3,234,356.3);
p.frameBounds = [rect];


(lib.bottom_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_b1();
	this.instance.setTransform(-18.1,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArXpCIHipjIDeACILvSsIg1QyI1HBrg");
	this.shape.setTransform(20.4,106.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.8,-12.3,153.1,238.1);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b1();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzgJPINm64IGsABISvVeIjzI4I3XE8g");
	this.shape.setTransform(16.8,104.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.1,-8.7,249.9,226.2);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b1();
	this.instance.setTransform(-19.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0mLKIKr97ISyAPMALwAhLIjQD1MgiAAAUg");
	this.shape.setTransform(-2.3,111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.2,-9.2,263.9,240.5);
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
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-33.7,-33.7,67.5,67.5), new cjs.Rectangle(-37.4,-37.4,75,75), new cjs.Rectangle(-41.2,-41.2,82.5,82.5), new cjs.Rectangle(-44.9,-44.9,90,90), new cjs.Rectangle(-48.7,-48.7,97.5,97.5), new cjs.Rectangle(-52.4,-52.4,105,105), new cjs.Rectangle(-56.2,-56.2,112.5,112.5), new cjs.Rectangle(-60,-60,120,120)];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
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
	this.substrate_mc.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_1_mc();
	this.instance.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-85,380,180);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:22,end:59});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// decor
	this.instance = new lib.curtain_4_mc();
	this.instance.setTransform(600.1,299.7,0.333,0.333,0,0,0,0.1,-0.9);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:-0.1,regY:-1,scaleX:1,scaleY:1,x:599.9,y:299,alpha:1},10).wait(10).to({regX:0.1,regY:-0.9,scaleX:0.33,scaleY:0.33,x:600.1,y:299.7,alpha:0.012},20).to({_off:true},1).wait(10));

	// decor
	this.instance_1 = new lib.curtain_5_mc();
	this.instance_1.setTransform(600,300);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},10).wait(20).to({alpha:0.012},15).to({_off:true},1).wait(10));

	// animation
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(-1200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:0,alpha:0.012},0).to({alpha:1},8).wait(25).to({alpha:0.012},24).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1200,0,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


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
	this.instance.setTransform(0,0,0.955,0.954);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxKH0IAAvnMAiVAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-47.7,210,95.4);
p.frameBounds = [rect, new cjs.Rectangle(-110,-50,220,100), new cjs.Rectangle(-105,-47.7,210,95.4), new cjs.Rectangle(-110,-50,220,100)];


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
	this.instance.setTransform(0,0,0.955,0.954);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxKH0IAAvnMAiVAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-47.7,210,95.4);
p.frameBounds = [rect, new cjs.Rectangle(-110,-50,220,100), new cjs.Rectangle(-105,-47.7,210,95.4), new cjs.Rectangle(-110,-50,220,100)];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_mc();
	this.instance.setTransform(0,0,0.955,0.954);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxKH0IAAvnMAiVAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-47.7,210,95.4);
p.frameBounds = [rect, new cjs.Rectangle(-110,-50,220,100), new cjs.Rectangle(-105,-47.7,210,95.4), new cjs.Rectangle(-110,-50,220,100)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();
	this.instance.setTransform(0,0,0.955,0.954);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxKH0IAAvnMAiVAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-47.7,210,95.4);
p.frameBounds = [rect, new cjs.Rectangle(-110,-50,220,100), new cjs.Rectangle(-105,-47.7,210,95.4), new cjs.Rectangle(-110,-50,220,100)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_mc();
	this.instance.setTransform(0,0,0.955,0.954);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxKH0IAAvnMAiVAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-47.7,210,95.4);
p.frameBounds = [rect, new cjs.Rectangle(-110,-50,220,100), new cjs.Rectangle(-105,-47.7,210,95.4), new cjs.Rectangle(-110,-50,220,100)];


(lib.next_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.next_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},24).to({scaleX:1,scaleY:1},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect, new cjs.Rectangle(-109.7,-49.9,219.6,99.8), new cjs.Rectangle(-109.5,-49.8,219.2,99.6), new cjs.Rectangle(-109.3,-49.7,218.8,99.4), new cjs.Rectangle(-109.1,-49.6,218.4,99.3), new cjs.Rectangle(-108.9,-49.5,217.9,99.1), new cjs.Rectangle(-108.7,-49.4,217.5,98.9), new cjs.Rectangle(-108.5,-49.3,217.1,98.7), new cjs.Rectangle(-108.3,-49.2,216.7,98.5), new cjs.Rectangle(-108.1,-49.1,216.3,98.3), new cjs.Rectangle(-107.9,-49,215.8,98.1), new cjs.Rectangle(-107.7,-48.9,215.4,97.9), new cjs.Rectangle(-107.4,-48.8,215,97.7), new cjs.Rectangle(-107.2,-48.7,214.6,97.5), new cjs.Rectangle(-107,-48.6,214.2,97.3), new cjs.Rectangle(-106.8,-48.5,213.8,97.1), new cjs.Rectangle(-106.6,-48.4,213.3,96.9), new cjs.Rectangle(-106.4,-48.3,212.9,96.7), new cjs.Rectangle(-106.2,-48.2,212.5,96.6), new cjs.Rectangle(-106,-48.1,212.1,96.4), new cjs.Rectangle(-105.8,-48,211.7,96.2), new cjs.Rectangle(-105.6,-47.9,211.2,96), new cjs.Rectangle(-105.4,-47.8,210.8,95.8), new cjs.Rectangle(-105.1,-47.7,210.4,95.6), new cjs.Rectangle(-105,-47.7,210,95.4), new cjs.Rectangle(-105.1,-47.7,210.3,95.5), new cjs.Rectangle(-105.2,-47.8,210.6,95.7), new cjs.Rectangle(-105.4,-47.8,210.8,95.8), new cjs.Rectangle(-105.5,-47.9,211.1,95.9), new cjs.Rectangle(-105.6,-48,211.4,96.1), new cjs.Rectangle(-105.8,-48,211.7,96.2), new cjs.Rectangle(-105.9,-48.1,212,96.3), new cjs.Rectangle(-106.1,-48.2,212.3,96.5), new cjs.Rectangle(-106.2,-48.2,212.6,96.6), new cjs.Rectangle(-106.4,-48.3,212.9,96.7), new cjs.Rectangle(-106.5,-48.4,213.1,96.9), new cjs.Rectangle(-106.7,-48.4,213.4,97), new cjs.Rectangle(-106.8,-48.5,213.7,97.1), new cjs.Rectangle(-106.9,-48.6,214,97.2), new cjs.Rectangle(-107.1,-48.6,214.3,97.4), new cjs.Rectangle(-107.2,-48.7,214.6,97.5), new cjs.Rectangle(-107.4,-48.8,214.9,97.6), new cjs.Rectangle(-107.5,-48.8,215.1,97.8), new cjs.Rectangle(-107.7,-48.9,215.4,97.9), new cjs.Rectangle(-107.8,-49,215.7,98), new cjs.Rectangle(-107.9,-49,216,98.2), new cjs.Rectangle(-108.1,-49.1,216.3,98.3), new cjs.Rectangle(-108.2,-49.2,216.6,98.4), new cjs.Rectangle(-108.4,-49.2,216.9,98.6), new cjs.Rectangle(-108.5,-49.3,217.2,98.7), new cjs.Rectangle(-108.7,-49.4,217.4,98.8), new cjs.Rectangle(-108.8,-49.4,217.7,99), new cjs.Rectangle(-108.9,-49.5,218,99.1), new cjs.Rectangle(-109.1,-49.6,218.3,99.2), new cjs.Rectangle(-109.2,-49.6,218.6,99.4), new cjs.Rectangle(-109.4,-49.7,218.9,99.5), new cjs.Rectangle(-109.5,-49.8,219.2,99.6), new cjs.Rectangle(-109.7,-49.8,219.4,99.8), new cjs.Rectangle(-109.8,-49.9,219.7,99.9), new cjs.Rectangle(-110,-50,220,100)];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.decor_nav_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:1},25).to({alpha:0.012},25).wait(1));

	// graph
	this.instance_1 = new lib.body_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am5JYQhBAAgvguQguguAAhCIAAtzQAAhBAugvQAvguBBAAINzAAQBCAAAuAuQAuAvAABBIAANzQAABCguAuQguAuhCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();
	this.instance.setTransform(0,0,0.955,0.954);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxKH0IAAvnMAiVAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-47.7,210,95.4);
p.frameBounds = [rect, new cjs.Rectangle(-110,-50,220,100), new cjs.Rectangle(-105,-47.7,210,95.4), new cjs.Rectangle(-110,-50,220,100)];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_1_2_mc();
	this.instance.setTransform(3.5,0,1,1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95,x:3.6},29).to({scaleX:1,scaleY:1,x:3.5},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-100,143,200);
p.frameBounds = [rect, new cjs.Rectangle(-67.8,-99.8,142.8,199.6), new cjs.Rectangle(-67.7,-99.6,142.5,199.3), new cjs.Rectangle(-67.6,-99.4,142.3,199), new cjs.Rectangle(-67.5,-99.3,142,198.6), new cjs.Rectangle(-67.3,-99.1,141.8,198.3), new cjs.Rectangle(-67.2,-98.9,141.5,198), new cjs.Rectangle(-67.1,-98.7,141.3,197.6), new cjs.Rectangle(-67,-98.6,141.1,197.3), new cjs.Rectangle(-66.8,-98.4,140.8,196.9), new cjs.Rectangle(-66.7,-98.2,140.6,196.6), new cjs.Rectangle(-66.6,-98.1,140.3,196.2), new cjs.Rectangle(-66.5,-97.9,140.1,195.9), new cjs.Rectangle(-66.3,-97.7,139.8,195.5), new cjs.Rectangle(-66.2,-97.5,139.6,195.1), new cjs.Rectangle(-66.1,-97.4,139.3,194.9), new cjs.Rectangle(-66,-97.2,139.1,194.5), new cjs.Rectangle(-65.8,-97,138.8,194.1), new cjs.Rectangle(-65.7,-96.8,138.6,193.8), new cjs.Rectangle(-65.5,-96.7,138.3,193.5), new cjs.Rectangle(-65.4,-96.5,138.1,193.1), new cjs.Rectangle(-65.3,-96.3,137.8,192.8), new cjs.Rectangle(-65.2,-96.2,137.6,192.4), new cjs.Rectangle(-65.1,-96,137.4,192.1), new cjs.Rectangle(-65,-95.8,137.1,191.7), new cjs.Rectangle(-64.8,-95.6,136.9,191.4), new cjs.Rectangle(-64.7,-95.5,136.6,191.1), new cjs.Rectangle(-64.5,-95.3,136.4,190.7), new cjs.Rectangle(-64.4,-95.1,136.1,190.4), new cjs.Rectangle(-64.4,-95,135.9,190), new cjs.Rectangle(-64.5,-95.1,136.1,190.4), new cjs.Rectangle(-64.6,-95.3,136.3,190.6), new cjs.Rectangle(-64.7,-95.4,136.6,191), new cjs.Rectangle(-64.8,-95.6,136.8,191.4), new cjs.Rectangle(-64.9,-95.8,137.1,191.6), new cjs.Rectangle(-65.1,-95.9,137.3,192), new cjs.Rectangle(-65.2,-96.1,137.5,192.4), new cjs.Rectangle(-65.3,-96.3,137.8,192.6), new cjs.Rectangle(-65.4,-96.4,138,193), new cjs.Rectangle(-65.5,-96.6,138.3,193.4), new cjs.Rectangle(-65.7,-96.8,138.5,193.6), new cjs.Rectangle(-65.8,-96.9,138.7,194), new cjs.Rectangle(-65.9,-97.1,139,194.4), new cjs.Rectangle(-66,-97.3,139.2,194.6), new cjs.Rectangle(-66.1,-97.4,139.4,195), new cjs.Rectangle(-66.3,-97.6,139.6,195.4), new cjs.Rectangle(-66.4,-97.8,139.9,195.6), new cjs.Rectangle(-66.6,-97.9,140.1,196), new cjs.Rectangle(-66.7,-98.1,140.4,196.4), new cjs.Rectangle(-66.8,-98.3,140.6,196.6), new cjs.Rectangle(-66.9,-98.4,140.9,197), new cjs.Rectangle(-67,-98.6,141.1,197.4), new cjs.Rectangle(-67.2,-98.8,141.4,197.6), new cjs.Rectangle(-67.3,-98.9,141.6,198), new cjs.Rectangle(-67.4,-99.1,141.8,198.4), new cjs.Rectangle(-67.5,-99.3,142.1,198.6), new cjs.Rectangle(-67.6,-99.4,142.3,199), new cjs.Rectangle(-67.8,-99.6,142.5,199.4), new cjs.Rectangle(-67.8,-99.8,142.8,199.6), new cjs.Rectangle(-68,-100,143,200)];


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
	this.instance.setTransform(0,0,0.955,0.954);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxKH0IAAvnMAiVAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-47.7,210,95.4);
p.frameBounds = [rect, new cjs.Rectangle(-120,-50,220,100), new cjs.Rectangle(-114.5,-47.7,210,95.4), new cjs.Rectangle(-110,-50,220,100)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();
	this.instance.setTransform(0,0,0.955,0.954);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxKH0IAAvnMAiVAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.955,scaleY:0.954,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-47.7,210,95.4);
p.frameBounds = [rect, new cjs.Rectangle(-110,-50,220,100), new cjs.Rectangle(-105,-47.7,210,95.4), new cjs.Rectangle(-110,-50,220,100)];


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


(lib.top_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_t6();
	this.instance.setTransform(-17.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwuVcMAGCgonIGelSIHVACILfN7ICJI3I88aHg");
	this.shape.setTransform(-4.8,147.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.9,-8.7,214.3,313.3);
p.frameBounds = [rect];


(lib.top_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t6();
	this.instance.setTransform(-18,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuwAcIATmgIK+ooIHwgKIKfRPIhkMaIxnAEg");
	this.shape.setTransform(0.7,79.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.8,-15.3,189,190.3);
p.frameBounds = [rect];


(lib.top_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t6();
	this.instance.setTransform(-18,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoYQFIp5seIBTkzISqvGIGLAAIKbRFIkzPgg");
	this.shape.setTransform(-23.2,95.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.2,-8.9,234,208.8);
p.frameBounds = [rect];


(lib.top_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_t5();
	this.instance.setTransform(-17.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AziWhMAGCgo0IHCmFIGegBINDOfIGgO2MginATeg");
	this.shape.setTransform(3.7,146);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.5,-10.3,250.4,312.6);
p.frameBounds = [rect];


(lib.top_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t5();
	this.instance.setTransform(-18.6,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqvgqIIEtlIFvAAIHsOHIg9MXIumCBg");
	this.shape.setTransform(2,78.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.8,-12.9,137.6,182.5);
p.frameBounds = [rect];


(lib.top_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t5();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar3MWIkyxBIQ6rWIG6ACIJfKsIh7UFIjVBPg");
	this.shape.setTransform(-28.5,92.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.1,-9.8,213.4,205.2);
p.frameBounds = [rect];


(lib.top_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_t4();
	this.instance.setTransform(-18.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwtXHMAFUgiyIJ3tPIGJABIMHTgI7XeUg");
	this.shape.setTransform(-5.9,149.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.9,-9.7,214.2,319.1);
p.frameBounds = [rect];


(lib.top_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t4();
	this.instance.setTransform(-18.8,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av0XyMAFUgjoIMftdIGDABIHsPqIAHJPI4PZtg");
	this.shape.setTransform(-30.9,150.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.3,-11.7,202.8,324.2);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t4();
	this.instance.setTransform(-18,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq2OQImdxVIRyvfIINAAIIoM1IhCVqInJCqg");
	this.shape.setTransform(-25.2,109);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136,-9.9,221.7,238);
p.frameBounds = [rect];


(lib.top_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_t3();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AykbZMAH6gwbIIdneIJZABILZXMMgf6Ah0g");
	this.shape.setTransform(-15.6,170.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.5,-11.7,237.9,365.1);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t3();
	this.instance.setTransform(-18.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwzGuICGoTILotHIG6AAIM/UwIvgIpg");
	this.shape.setTransform(2.2,83.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.5,-10.9,215.4,188.3);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t3();
	this.instance.setTransform(-19.5,178.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvBDqIKRxYILAAAIIySMIlSJJI01AIg");
	this.shape.setTransform(-0.4,75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.5,-12.9,222.3,175.9);
p.frameBounds = [rect];


(lib.top_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_t2();
	this.instance.setTransform(-19,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ax2WXMAIFguvIPJAEIMfXEI9DZpg");
	this.shape.setTransform(-11.2,141.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.5,-14.8,228.8,312.4);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t2();
	this.instance.setTransform(-18,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av8V9MAGtgo7IJolcIF8ABIIVL6IBTKQI3Kaqg");
	this.shape.setTransform(-20.7,142.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.9,-13.6,204.4,312.8);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t2();
	this.instance.setTransform(-17.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsJKBIidnrIMcvKIFngBILKReIj4INg");
	this.shape.setTransform(2,76);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-6.2,187.1,164.5);
p.frameBounds = [rect];


(lib.top_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_t1();
	this.instance.setTransform(-19.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ay1WGMAHvgwGIQ5AAINDWFI9Qd8g");
	this.shape.setTransform(-14.7,152.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.3,-13.9,241.3,333.2);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t1();
	this.instance.setTransform(-18.5,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvDFgIgos+IJfoIILDgCIK1NmIghLaIseGRg");
	this.shape.setTransform(-17.7,89.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.1,-10.3,200.9,200.4);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t1();
	this.instance.setTransform(-17.4,180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Axrg3ITfvmIIEAAIH0MoIieUOI4CAFg");
	this.shape.setTransform(-30.7,96.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.9,-8.9,226.5,210.9);
p.frameBounds = [rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(105,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_6_img();
	this.instance_1.setTransform(-160,-155);

	this.instance_2 = new lib.location_1_6_img();
	this.instance_2.setTransform(-160,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-160,-160,325,320)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(105,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_5_img();
	this.instance_1.setTransform(-160,-155);

	this.instance_2 = new lib.location_1_5_img();
	this.instance_2.setTransform(-160,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-160,-160,325,320)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(105,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-160,-155);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-160,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-160,-160,325,320)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(105,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-160,-155);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-160,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-160,-160,325,320)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(105,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-160,-155);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-160,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-160,-160,325,320)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(105,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-160,-155);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-160,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-160,-160,325,320)];


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

	// heroes
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(395,340);

	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(175,335);

	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(610.3,319.7,1,1,0,0,0,0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_3,p:{x:610.3,y:319.7}},{t:this.hero_1,p:{x:175,y:335}},{t:this.hero_2,p:{y:340}}]}).to({state:[{t:this.hero_1,p:{x:400,y:350}}]},1).to({state:[{t:this.hero_2,p:{y:345}}]},1).to({state:[{t:this.hero_3,p:{x:410.3,y:329.7}}]},1).to({state:[{t:this.hero_3,p:{x:610.3,y:319.7}},{t:this.hero_1,p:{x:175,y:335}},{t:this.hero_2,p:{y:340}}]},1).to({state:[{t:this.hero_1,p:{x:400,y:350}}]},1).to({state:[{t:this.hero_2,p:{y:345}}]},1).to({state:[{t:this.hero_3,p:{x:410.3,y:329.7}}]},1).to({state:[{t:this.hero_3,p:{x:610.3,y:319.7}},{t:this.hero_1,p:{x:175,y:335}},{t:this.hero_2,p:{y:340}}]},1).to({state:[{t:this.hero_1,p:{x:400,y:350}}]},1).to({state:[{t:this.hero_2,p:{y:345}}]},1).to({state:[{t:this.hero_3,p:{x:410.3,y:329.7}}]},1).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-33.6,1200,671.9);
p.frameBounds = [rect, new cjs.Rectangle(-200,-18.6,1200,659.3), new cjs.Rectangle(-200,0,1200,643.2), new cjs.Rectangle(-200,0,1200,618.3), new cjs.Rectangle(-200,-33.6,1200,671.9), new cjs.Rectangle(-200,-18.6,1200,659.3), new cjs.Rectangle(-200,0,1200,643.2), new cjs.Rectangle(-200,0,1200,618.3), new cjs.Rectangle(-200,-33.6,1200,671.9), new cjs.Rectangle(-200,-18.6,1200,659.3), new cjs.Rectangle(-200,0,1200,643.2), new cjs.Rectangle(-200,0,1200,618.3)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_main();
	this.instance.setTransform(410,340);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_main();
	this.instance_1.setTransform(205,345);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero3_main();
	this.instance_2.setTransform(610.3,329.7,1,1,0,0,0,0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.3,6.2,837.8,629.5);
p.frameBounds = [rect];


(lib.closet_makeup_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-150,-330);

	this.eyelashes_0 = new lib.eyelashes_0_mc();
	this.eyelashes_0.setTransform(150,-330);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-150,-330);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0},{t:this.eyelashes_0}]},1).to({state:[]},1).wait(1));

	// options
	this.lips_6 = new lib.lips_6_3_mc();
	this.lips_6.setTransform(310,90);

	this.lips_5 = new lib.lips_5_3_mc();
	this.lips_5.setTransform(210,70);

	this.lips_4 = new lib.lips_4_3_mc();
	this.lips_4.setTransform(310,-70);

	this.lips_3 = new lib.lips_3_3_mc();
	this.lips_3.setTransform(210,-90);

	this.lips_2 = new lib.lips_2_3_mc();
	this.lips_2.setTransform(310,-230);

	this.lips_1 = new lib.lips_1_3_mc();
	this.lips_1.setTransform(210,-250);

	this.blush_6 = new lib.blush_6_3_mc();
	this.blush_6.setTransform(-210,70);

	this.blush_5 = new lib.blush_5_3_mc();
	this.blush_5.setTransform(-310,90);

	this.blush_4 = new lib.blush_4_3_mc();
	this.blush_4.setTransform(-210,-90);

	this.blush_3 = new lib.blush_3_3_mc();
	this.blush_3.setTransform(-310,-65);

	this.blush_2 = new lib.blush_2_3_mc();
	this.blush_2.setTransform(-210,-245);

	this.blush_1 = new lib.blush_1_3_mc();
	this.blush_1.setTransform(-310,-220);

	this.eyelashes_6 = new lib.eyelashes_6_3_mc();
	this.eyelashes_6.setTransform(240,80);

	this.eyelashes_5 = new lib.eyelashes_5_3_mc();
	this.eyelashes_5.setTransform(250,20);

	this.eyelashes_4 = new lib.eyelashes_4_3_mc();
	this.eyelashes_4.setTransform(250,-40);

	this.eyelashes_3 = new lib.eyelashes_3_3_mc();
	this.eyelashes_3.setTransform(255,-100);

	this.eyelashes_2 = new lib.eyelashes_2_3_mc();
	this.eyelashes_2.setTransform(265,-160);

	this.eyelashes_1 = new lib.eyelashes_1_3_mc();
	this.eyelashes_1.setTransform(270,-220);

	this.shadows_6 = new lib.shadows_6_3_mc();
	this.shadows_6.setTransform(-205,70);

	this.shadows_5 = new lib.shadows_5_3_mc();
	this.shadows_5.setTransform(-305,90);

	this.shadows_4 = new lib.shadows_4_3_mc();
	this.shadows_4.setTransform(-205,-100);

	this.shadows_3 = new lib.shadows_3_3_mc();
	this.shadows_3.setTransform(-305,-80);

	this.shadows_2 = new lib.shadows_2_3_mc();
	this.shadows_2.setTransform(-205,-250);

	this.shadows_1 = new lib.shadows_1_3_mc();
	this.shadows_1.setTransform(-305,-230);

	this.eyes_6 = new lib.eyes_6_3_mc();
	this.eyes_6.setTransform(-260,-190);

	this.eyes_5 = new lib.eyes_5_3_mc();
	this.eyes_5.setTransform(250,-90);

	this.eyes_4 = new lib.eyes_4_3_mc();
	this.eyes_4.setTransform(260,-190);

	this.eyes_3 = new lib.eyes_3_3_mc();
	this.eyes_3.setTransform(-240,10);

	this.eyes_2 = new lib.eyes_2_3_mc();
	this.eyes_2.setTransform(-250,-90);

	this.eyes_1 = new lib.eyes_1_3_mc();
	this.eyes_1.setTransform(240,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6},{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6},{t:this.eyelashes_1},{t:this.eyelashes_2},{t:this.eyelashes_3},{t:this.eyelashes_4},{t:this.eyelashes_5},{t:this.eyelashes_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(-250,0,1,1,0,0,180);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(250,0);

	this.instance_2 = new lib.shelf_2_mc();
	this.instance_2.setTransform(230,40);

	this.instance_3 = new lib.shelf_2_mc();
	this.instance_3.setTransform(230,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2,p:{skewY:0,x:230}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{skewY:180,x:-230}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-355,820,665);
p.frameBounds = [rect, new cjs.Rectangle(-410,-355,815,740), new cjs.Rectangle(-405,-305,810,690)];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-150,-330);

	this.eyelashes_0 = new lib.eyelashes_0_mc();
	this.eyelashes_0.setTransform(150,-330);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-150,-330);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0},{t:this.eyelashes_0}]},1).to({state:[]},1).wait(1));

	// options
	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(310,90);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(210,70);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(310,-70);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(210,-90);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(310,-230);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(210,-250);

	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(-210,70);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(-310,90);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(-210,-90);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(-310,-65);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(-210,-245);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-310,-220);

	this.eyelashes_6 = new lib.eyelashes_6_2_mc();
	this.eyelashes_6.setTransform(240,80);

	this.eyelashes_5 = new lib.eyelashes_5_2_mc();
	this.eyelashes_5.setTransform(240,20);

	this.eyelashes_4 = new lib.eyelashes_4_2_mc();
	this.eyelashes_4.setTransform(240,-40);

	this.eyelashes_3 = new lib.eyelashes_3_2_mc();
	this.eyelashes_3.setTransform(245,-100);

	this.eyelashes_2 = new lib.eyelashes_2_2_mc();
	this.eyelashes_2.setTransform(260,-160);

	this.eyelashes_1 = new lib.eyelashes_1_2_mc();
	this.eyelashes_1.setTransform(265,-220);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(-205,70);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(-305,90);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(-205,-100);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-305,-80);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(-205,-250);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-305,-230);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(-260,-180);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(250,-80);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(260,-180);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(-240,20);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(-250,-80);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(240,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6},{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6},{t:this.eyelashes_1},{t:this.eyelashes_2},{t:this.eyelashes_3},{t:this.eyelashes_4},{t:this.eyelashes_5},{t:this.eyelashes_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(-250,0,1,1,0,0,180);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(250,0);

	this.instance_2 = new lib.shelf_2_mc();
	this.instance_2.setTransform(230,40);

	this.instance_3 = new lib.shelf_2_mc();
	this.instance_3.setTransform(230,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2,p:{skewY:0,x:230}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{skewY:180,x:-230}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-355,820,665);
p.frameBounds = [rect, new cjs.Rectangle(-410,-355,815,740), new cjs.Rectangle(-405,-305,810,690)];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-150,-330);

	this.eyelashes_0 = new lib.eyelashes_0_mc();
	this.eyelashes_0.setTransform(150,-330);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-150,-330);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0},{t:this.eyelashes_0}]},1).to({state:[]},1).wait(1));

	// options
	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(310,90);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(210,70);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(310,-70);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(210,-90);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(310,-230);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(210,-250);

	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(-210,70);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(-310,90);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(-210,-90);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(-310,-65);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(-210,-245);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-310,-220);

	this.eyelashes_6 = new lib.eyelashes_6_1_mc();
	this.eyelashes_6.setTransform(240,80);

	this.eyelashes_5 = new lib.eyelashes_5_1_mc();
	this.eyelashes_5.setTransform(235,20);

	this.eyelashes_4 = new lib.eyelashes_4_1_mc();
	this.eyelashes_4.setTransform(250,-40);

	this.eyelashes_3 = new lib.eyelashes_3_1_mc();
	this.eyelashes_3.setTransform(250,-100);

	this.eyelashes_2 = new lib.eyelashes_2_1_mc();
	this.eyelashes_2.setTransform(260,-160);

	this.eyelashes_1 = new lib.eyelashes_1_1_mc();
	this.eyelashes_1.setTransform(265,-220);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(-205,70);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-305,90);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(-205,-100);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-305,-80);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(-205,-250);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-305,-230);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(-260,-190);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(250,-90);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(260,-190);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(-240,10);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(-250,-90);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(240,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6},{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6},{t:this.eyelashes_1},{t:this.eyelashes_2},{t:this.eyelashes_3},{t:this.eyelashes_4},{t:this.eyelashes_5},{t:this.eyelashes_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(-250,0,1,1,0,0,180);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(250,0);

	this.instance_2 = new lib.shelf_2_mc();
	this.instance_2.setTransform(230,40);

	this.instance_3 = new lib.shelf_2_mc();
	this.instance_3.setTransform(230,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2,p:{skewY:0,x:230}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{skewY:180,x:-230}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-355,820,665);
p.frameBounds = [rect, new cjs.Rectangle(-410,-355,815,740), new cjs.Rectangle(-405,-305,810,690)];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.body_check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.body_check_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_makeup_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-355,820,665);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-355,820,665);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-355,820,665);
p.frameBounds = [rect];


(lib.body_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect];


(lib.body_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,0);
	this.location_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(19).to({scaleX:0.63,scaleY:0.63},0).to({scaleX:1.13,scaleY:1.13,alpha:1},11).to({scaleX:1,scaleY:1},4).wait(11));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(180,0);
	this.location_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(29).to({scaleX:0.63,scaleY:0.63},0).to({scaleX:1.13,scaleY:1.13,alpha:1},11).to({scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-280,-160,620,320), new cjs.Rectangle(-287.2,-160,627.3,320), new cjs.Rectangle(-294.5,-160,634.6,320), new cjs.Rectangle(-301.8,-160,641.8,320), new cjs.Rectangle(-309.1,-160,649.1,320), new cjs.Rectangle(-316.3,-160,656.3,320), new cjs.Rectangle(-323.6,-160,663.7,320), new cjs.Rectangle(-330.9,-160,670.9,320), new cjs.Rectangle(-338.2,-160,678.2,320), new cjs.Rectangle(-345.4,-165.4,685.5,330.9), new cjs.Rectangle(-352.7,-172.7,632.7,345.4), new cjs.Rectangle(-360,-180,647.3,360), new cjs.Rectangle(-355,-175,649.6,350), new cjs.Rectangle(-349.9,-170,651.8,340), new cjs.Rectangle(-345,-165,654.1,330), new cjs.Rectangle(-340,-160,656.3,320), new cjs.Rectangle(-340,-160,663.7,320), new cjs.Rectangle(-340,-160,670.9,320), new cjs.Rectangle(-340,-160,678.2,320), new cjs.Rectangle(-340,-165.4,685.5,330.9), new cjs.Rectangle(-340,-172.7,692.7,345.4), new cjs.Rectangle(-340,-180,700,360), new cjs.Rectangle(-340,-175,695,350), new cjs.Rectangle(-340,-170,690,340), new cjs.Rectangle(-340,-165,685,330), new cjs.Rectangle(-340,-160,680,320)];


(lib.body_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect];


(lib.body_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-180,0);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(19).to({scaleX:0.63,scaleY:0.63},0).to({scaleX:1.13,scaleY:1.13,alpha:1},11).to({scaleX:1,scaleY:1},4).wait(11));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(180,0);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(29).to({scaleX:0.63,scaleY:0.63},0).to({scaleX:1.13,scaleY:1.13,alpha:1},11).to({scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-280,-160,620,320), new cjs.Rectangle(-287.2,-160,627.3,320), new cjs.Rectangle(-294.5,-160,634.6,320), new cjs.Rectangle(-301.8,-160,641.8,320), new cjs.Rectangle(-309.1,-160,649.1,320), new cjs.Rectangle(-316.3,-160,656.3,320), new cjs.Rectangle(-323.6,-160,663.7,320), new cjs.Rectangle(-330.9,-160,670.9,320), new cjs.Rectangle(-338.2,-160,678.2,320), new cjs.Rectangle(-345.4,-165.4,685.5,330.9), new cjs.Rectangle(-352.7,-172.7,632.7,345.4), new cjs.Rectangle(-360,-180,647.3,360), new cjs.Rectangle(-355,-175,649.6,350), new cjs.Rectangle(-349.9,-170,651.8,340), new cjs.Rectangle(-345,-165,654.1,330), new cjs.Rectangle(-340,-160,656.3,320), new cjs.Rectangle(-340,-160,663.7,320), new cjs.Rectangle(-340,-160,670.9,320), new cjs.Rectangle(-340,-160,678.2,320), new cjs.Rectangle(-340,-165.4,685.5,330.9), new cjs.Rectangle(-340,-172.7,692.7,345.4), new cjs.Rectangle(-340,-180,700,360), new cjs.Rectangle(-340,-175,695,350), new cjs.Rectangle(-340,-170,690,340), new cjs.Rectangle(-340,-165,685,330), new cjs.Rectangle(-340,-160,680,320)];


(lib.body_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect];


(lib.body_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,0);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.63,scaleY:0.63},0).to({scaleX:1.13,scaleY:1.13,alpha:1},11).to({scaleX:1,scaleY:1},4).wait(11));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,0);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.63,scaleY:0.63},0).to({scaleX:1.13,scaleY:1.13,alpha:1},11).to({scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-280,-160,620,320), new cjs.Rectangle(-287.2,-160,627.3,320), new cjs.Rectangle(-294.5,-160,634.6,320), new cjs.Rectangle(-301.8,-160,641.8,320), new cjs.Rectangle(-309.1,-160,649.1,320), new cjs.Rectangle(-316.3,-160,656.3,320), new cjs.Rectangle(-323.6,-160,663.7,320), new cjs.Rectangle(-330.9,-160,670.9,320), new cjs.Rectangle(-338.2,-160,678.2,320), new cjs.Rectangle(-345.4,-165.4,685.5,330.9), new cjs.Rectangle(-352.7,-172.7,632.7,345.4), new cjs.Rectangle(-360,-180,647.3,360), new cjs.Rectangle(-355,-175,649.6,350), new cjs.Rectangle(-349.9,-170,651.8,340), new cjs.Rectangle(-345,-165,654.1,330), new cjs.Rectangle(-340,-160,656.3,320), new cjs.Rectangle(-340,-160,663.7,320), new cjs.Rectangle(-340,-160,670.9,320), new cjs.Rectangle(-340,-160,678.2,320), new cjs.Rectangle(-340,-165.4,685.5,330.9), new cjs.Rectangle(-340,-172.7,692.7,345.4), new cjs.Rectangle(-340,-180,700,360), new cjs.Rectangle(-340,-175,695,350), new cjs.Rectangle(-340,-170,690,340), new cjs.Rectangle(-340,-165,685,330), new cjs.Rectangle(-340,-160,680,320)];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_1_mc();
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1400,0,1200,600);
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
	this.instance.setTransform(0,0,0.917,0.917,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.909,0.909,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-54.5,109.1,109.1);
p.frameBounds = [rect];


(lib.next_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-54.5,109.1,109.1);
p.frameBounds = [rect];


(lib.next_2_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_2_mc();

	this.instance_1 = new lib.next_1_2_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxKH0IAAvnMAiVAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.955,scaleY:0.954,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect, rect, new cjs.Rectangle(-105,-47.7,210,95.4), new cjs.Rectangle(-110,-50,220,100)];


(lib.moreGames_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmEPnQiVABhqhqQhphqAAiVIAAz9QAAiVBphqQBqhqCVABIMJAAQCVgBBqBqQBpBqAACVIAAT9QAACVhpBqQhqBqiVgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-100,143,200);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-75,-100,150,200)];


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_2_mc();
	this.instance.setTransform(-82.9,0,0.553,0.553,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-82.9,alpha:0.801},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270.7,-140.3,375.8,280.6);
p.frameBounds = [rect, new cjs.Rectangle(-283.6,-146.9,393.6,293.9), new cjs.Rectangle(-270.7,-140.3,375.8,280.6), new cjs.Rectangle(-283.6,-146.9,393.6,293.9)];


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
	this.play_btn.setTransform(680,450);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(680,540);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(100,490);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this._moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.credits_btn},{t:this.play_btn}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(400,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_decor_mc();
	this.instance_1.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,927);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-33.6,1200,671.9);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5});

	// body
	this.body_1_mc = new lib.body_locations_1_mc();

	this.body_2_mc = new lib.body_locations_2_mc();

	this.body_3_mc = new lib.body_locations_3_mc();

	this.body_4_mc = new lib.body_locations_4_mc();

	this.body_5_mc = new lib.body_locations_5_mc();

	this.body_6_mc = new lib.body_locations_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).to({state:[{t:this.body_6_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


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


(lib.hair_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle3_6_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle2_6_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle1_6_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle3_5_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle2_5_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle1_5_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle3_4_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle2_4_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle1_4_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle3_3_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle2_3_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle1_3_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle3_2_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle2_2_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle1_2_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle3_1_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle2_1_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.hair_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(85.1,65.1,0.917,0.917,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle1_1_img();
	this.instance.setTransform(-125,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125.5,265,256.5);
p.frameBounds = [rect];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(250,170);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-250,170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_1},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-550,820,860);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(250,170);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-250,170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_1},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-550,820,860);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(250,170);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-250,170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_1},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-550,820,860);
p.frameBounds = [rect];


(lib.closet_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(230,-250);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(0,-330);

	this.jewelry_0 = new lib.jewelry_0_mc();
	this.jewelry_0.setTransform(230,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.headdress_0}]},6).to({state:[{t:this.jewelry_0},{t:this.accessory_0}]},1).wait(1));

	// decor
	this.instance = new lib.decor_wardrobe_0_mc();
	this.instance.setTransform(0,230);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},2).wait(4));

	// options
	this.hair_3 = new lib.hair_3_3_mc();
	this.hair_3.setTransform(0,10);

	this.hair_2 = new lib.hair_2_3_mc();
	this.hair_2.setTransform(135,-220);

	this.hair_1 = new lib.hair_1_3_mc();
	this.hair_1.setTransform(-135,-220);

	this.hair_6 = new lib.hair_6_3_mc();
	this.hair_6.setTransform(0,10);

	this.hair_5 = new lib.hair_5_3_mc();
	this.hair_5.setTransform(135,-220);

	this.hair_4 = new lib.hair_4_3_mc();
	this.hair_4.setTransform(-135,-220);

	this.dress_6 = new lib.dress_6_3_mc();
	this.dress_6.setTransform(-155,-265);

	this.dress_4 = new lib.dress_4_3_mc();
	this.dress_4.setTransform(-25,-265);

	this.dress_2 = new lib.dress_2_3_mc();
	this.dress_2.setTransform(105,-265);

	this.dress_3 = new lib.dress_3_3_mc();
	this.dress_3.setTransform(-155,-265);

	this.dress_1 = new lib.dress_1_3_mc();
	this.dress_1.setTransform(-25,-265);

	this.dress_5 = new lib.dress_5_3_mc();
	this.dress_5.setTransform(105,-265);

	this.bottom_3 = new lib.bottom_3_3_mc();
	this.bottom_3.setTransform(115,-75);

	this.bottom_2 = new lib.bottom_2_3_mc();
	this.bottom_2.setTransform(-5,-75);

	this.top_3 = new lib.top_3_3_mc();
	this.top_3.setTransform(130,-265);

	this.top_2 = new lib.top_2_3_mc();
	this.top_2.setTransform(0,-265);

	this.top_1 = new lib.top_1_3_mc();
	this.top_1.setTransform(-130,-265);

	this.bottom_1 = new lib.bottom_1_3_mc();
	this.bottom_1.setTransform(-125,-75);

	this.bottom_5 = new lib.bottom_5_3_mc();
	this.bottom_5.setTransform(-120,-75);

	this.bottom_6 = new lib.bottom_6_3_mc();
	this.bottom_6.setTransform(0,-70.7,1,1,0,0,0,0,4.3);

	this.bottom_4 = new lib.bottom_4_3_mc();
	this.bottom_4.setTransform(120,-63.7,1,1,0,0,0,0,11.3);

	this.top_5 = new lib.top_5_3_mc();
	this.top_5.setTransform(-130,-265);

	this.top_4 = new lib.top_4_3_mc();
	this.top_4.setTransform(0,-265);

	this.top_6 = new lib.top_6_3_mc();
	this.top_6.setTransform(130,-265);

	this.headdress_6 = new lib.headdress_6_3_mc();
	this.headdress_6.setTransform(140,40);

	this.headdress_5 = new lib.headdress_5_3_mc();
	this.headdress_5.setTransform(-15,15);

	this.headdress_4 = new lib.headdress_4_3_mc();
	this.headdress_4.setTransform(-175,25);

	this.headdress_3 = new lib.headdress_3_3_mc();
	this.headdress_3.setTransform(160,-125);

	this.headdress_2 = new lib.headdress_2_3_mc();
	this.headdress_2.setTransform(10,-145);

	this.headdress_1 = new lib.headdress_1_3_mc();
	this.headdress_1.setTransform(-130,-170);

	this.jewelry_1 = new lib.jewelry_1_3_mc();
	this.jewelry_1.setTransform(175,-170);

	this.accessory_5 = new lib.accessory_5_3_mc();
	this.accessory_5.setTransform(-50,15);

	this.accessory_4 = new lib.accessory_4_3_mc();
	this.accessory_4.setTransform(-170,-150);

	this.accessory_3 = new lib.accessory_3_3_mc();
	this.accessory_3.setTransform(75,30);

	this.accessory_2 = new lib.accessory_2_3_mc();
	this.accessory_2.setTransform(40,-155);

	this.accessory_1 = new lib.accessory_1_3_mc();
	this.accessory_1.setTransform(-70,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_2},{t:this.dress_4},{t:this.dress_6}]},1).to({state:[{t:this.dress_5},{t:this.dress_1},{t:this.dress_3}]},1).to({state:[{t:this.bottom_1},{t:this.top_1},{t:this.top_2},{t:this.top_3},{t:this.bottom_2},{t:this.bottom_3}]},1).to({state:[{t:this.top_6},{t:this.top_4},{t:this.top_5},{t:this.bottom_4},{t:this.bottom_6},{t:this.bottom_5}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_5},{t:this.headdress_6}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4},{t:this.accessory_5},{t:this.jewelry_1}]},1).wait(1));

	// decor
	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,-20);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,-250);

	this.instance_3 = new lib.shelf_0_mc();
	this.instance_3.setTransform(0,80);

	this.instance_4 = new lib.shelf_0_mc();
	this.instance_4.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-20}}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-20}}]},1).to({state:[{t:this.instance_1,p:{y:-250}}]},1).to({state:[{t:this.instance_1,p:{y:-250}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-60}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-60}}]},1).to({state:[{t:this.instance_4},{t:this.instance_1,p:{y:-250}},{t:this.instance_3}]},1).to({state:[{t:this.instance_4},{t:this.instance_1,p:{y:-250}},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-345.5,535,486.5);
p.frameBounds = [rect, rect, new cjs.Rectangle(-282.1,-276.4,544.4,646.5), new cjs.Rectangle(-318.7,-278.9,617.3,649), new cjs.Rectangle(-265.3,-279.8,510.4,478.6), new cjs.Rectangle(-251.5,-275.3,496.5,461.1), new cjs.Rectangle(-263.2,-275,518.3,398.9), new cjs.Rectangle(-245,-355,500,470)];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(230,-250);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(0,-330);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.headdress_0}]},6).to({state:[{t:this.accessory_0}]},1).wait(1));

	// decor
	this.instance = new lib.decor_wardrobe_0_mc();
	this.instance.setTransform(0,230);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},2).wait(4));

	// options
	this.hair_3 = new lib.hair_3_2_mc();
	this.hair_3.setTransform(0,10);

	this.hair_2 = new lib.hair_2_2_mc();
	this.hair_2.setTransform(135,-220);

	this.hair_1 = new lib.hair_1_2_mc();
	this.hair_1.setTransform(-135,-220);

	this.hair_6 = new lib.hair_6_2_mc();
	this.hair_6.setTransform(0,10);

	this.hair_5 = new lib.hair_5_2_mc();
	this.hair_5.setTransform(135,-220);

	this.hair_4 = new lib.hair_4_2_mc();
	this.hair_4.setTransform(-135,-220);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(-130,-265);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(0,-265);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(130,-265);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(-130,-265);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(10,-265);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(130,-265);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(-120,-75);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(-120,-264.7,1,1,0,0,0,0,0.3);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(0,-75);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(120,-64.2,1,1,0,0,0,0,10.8);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(140,-250.7,1,1,0,0,0,0,14.3);

	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(10,-265);

	this.top_5 = new lib.top_5_2_mc();
	this.top_5.setTransform(0,-252.7,1,1,0,0,0,0,12.3);

	this.top_6 = new lib.top_6_2_mc();
	this.top_6.setTransform(130,-260.2,1,1,0,0,0,0,4.8);

	this.top_4 = new lib.top_4_2_mc();
	this.top_4.setTransform(-130,-265);

	this.bottom_6 = new lib.bottom_6_2_mc();
	this.bottom_6.setTransform(110,-75);

	this.bottom_5 = new lib.bottom_5_2_mc();
	this.bottom_5.setTransform(-10,-75);

	this.bottom_4 = new lib.bottom_4_2_mc();
	this.bottom_4.setTransform(-130,-75);

	this.headdress_6 = new lib.headdress_6_2_mc();
	this.headdress_6.setTransform(180,35);

	this.headdress_5 = new lib.headdress_5_2_mc();
	this.headdress_5.setTransform(0,35);

	this.headdress_4 = new lib.headdress_4_2_mc();
	this.headdress_4.setTransform(-140,35);

	this.headdress_3 = new lib.headdress_3_2_mc();
	this.headdress_3.setTransform(135,-180);

	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(-30,-180);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(-195,-150);

	this.accessory_6 = new lib.accessory_6_2_mc();
	this.accessory_6.setTransform(135,35);

	this.accessory_5 = new lib.accessory_5_2_mc();
	this.accessory_5.setTransform(25,35);

	this.accessory_4 = new lib.accessory_4_2_mc();
	this.accessory_4.setTransform(-110,45);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(140,-160);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(10,-160);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(-135,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_2},{t:this.dress_3},{t:this.dress_5}]},1).to({state:[{t:this.dress_6},{t:this.dress_1},{t:this.dress_4}]},1).to({state:[{t:this.top_2},{t:this.top_3},{t:this.bottom_2},{t:this.bottom_3},{t:this.top_1},{t:this.bottom_1}]},1).to({state:[{t:this.bottom_4},{t:this.bottom_5},{t:this.bottom_6},{t:this.top_4},{t:this.top_6},{t:this.top_5}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_5},{t:this.headdress_6}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4},{t:this.accessory_5},{t:this.accessory_6}]},1).wait(1));

	// decor
	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,-20);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,-250);

	this.instance_3 = new lib.shelf_0_mc();
	this.instance_3.setTransform(0,80);

	this.instance_4 = new lib.shelf_0_mc();
	this.instance_4.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-20}}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-20}}]},1).to({state:[{t:this.instance_1,p:{y:-250}}]},1).to({state:[{t:this.instance_1,p:{y:-250}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-60}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:-60}}]},1).to({state:[{t:this.instance_4},{t:this.instance_1,p:{y:-250}},{t:this.instance_3}]},1).to({state:[{t:this.instance_4},{t:this.instance_1,p:{y:-250}},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-345.5,535,486.5);
p.frameBounds = [rect, rect, new cjs.Rectangle(-245,-276.4,587.2,646.4), new cjs.Rectangle(-245,-279.9,547.5,650), new cjs.Rectangle(-245,-278.6,515.3,516.4), new cjs.Rectangle(-267.7,-280.3,534.1,527.1), new cjs.Rectangle(-302.6,-275,583,390), new cjs.Rectangle(-245,-355,490,480)];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(230,-250);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(0,-330);

	this.jewelry_0 = new lib.jewelry_0_mc();
	this.jewelry_0.setTransform(230,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.headdress_0}]},6).to({state:[{t:this.jewelry_0},{t:this.accessory_0}]},1).wait(1));

	// decor
	this.instance = new lib.decor_wardrobe_0_mc();
	this.instance.setTransform(0,230);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},2).wait(4));

	// options
	this.hair_3 = new lib.hair_3_1_mc();
	this.hair_3.setTransform(0,10);

	this.hair_2 = new lib.hair_2_1_mc();
	this.hair_2.setTransform(135,-220);

	this.hair_1 = new lib.hair_1_1_mc();
	this.hair_1.setTransform(-135,-220);

	this.hair_6 = new lib.hair_6_1_mc();
	this.hair_6.setTransform(0,10);

	this.hair_5 = new lib.hair_5_1_mc();
	this.hair_5.setTransform(135,-220);

	this.hair_4 = new lib.hair_4_1_mc();
	this.hair_4.setTransform(-135,-220);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(0,-265);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(130,-265);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(-130,-265);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-130,-265);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(0,-265);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(130,-265);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(130,-250.2,1,1,0,0,0,0,14.8);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(0,-244.2,1,1,0,0,0,0,20.8);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(-130,-265);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(120,-67.7,1,1,0,0,0,0,7.3);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(0,-75);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(-120,-75);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(-130,-265);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(0,-265);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(120,-75);

	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(130,-265);

	this.bottom_6 = new lib.bottom_6_1_mc();
	this.bottom_6.setTransform(0,-75);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(-120,-75);

	this.headdress_6 = new lib.headdress_6_1_mc();
	this.headdress_6.setTransform(146,80);

	this.headdress_5 = new lib.headdress_5_1_mc();
	this.headdress_5.setTransform(15,26);

	this.headdress_4 = new lib.headdress_4_1_mc();
	this.headdress_4.setTransform(-125,48);

	this.headdress_3 = new lib.headdress_3_1_mc();
	this.headdress_3.setTransform(185,-150);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(15,-155);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(-117,-167);

	this.jewelry_1 = new lib.jewelry_1_1_mc();
	this.jewelry_1.setTransform(150,-95);

	this.accessory_5 = new lib.accessory_5_1_mc();
	this.accessory_5.setTransform(140,60);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(20,35);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(-110,40);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(-142,-166);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(-10,-235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_2},{t:this.dress_6},{t:this.dress_4}]},1).to({state:[{t:this.dress_1},{t:this.dress_5},{t:this.dress_3}]},1).to({state:[{t:this.bottom_1},{t:this.bottom_2},{t:this.bottom_3},{t:this.top_1},{t:this.top_2},{t:this.top_3}]},1).to({state:[{t:this.bottom_4},{t:this.bottom_6},{t:this.top_6},{t:this.bottom_5},{t:this.top_5},{t:this.top_4}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_5},{t:this.headdress_6}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4},{t:this.accessory_5},{t:this.jewelry_1}]},1).wait(1));

	// decor
	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,10);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,-220);

	this.instance_3 = new lib.shelf_0_mc();
	this.instance_3.setTransform(0,80);

	this.instance_4 = new lib.shelf_0_mc();
	this.instance_4.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance_1,p:{y:10}}]}).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance_1,p:{y:10}}]},1).to({state:[{t:this.instance_1,p:{y:-250}}]},1).to({state:[{t:this.instance_1,p:{y:-250}}]},1).to({state:[{t:this.instance_2,p:{y:-250}},{t:this.instance_1,p:{y:-60}}]},1).to({state:[{t:this.instance_2,p:{y:-250}},{t:this.instance_1,p:{y:-60}}]},1).to({state:[{t:this.instance_4},{t:this.instance_1,p:{y:-250}},{t:this.instance_3}]},1).to({state:[{t:this.instance_4},{t:this.instance_1,p:{y:-250}},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-345.5,535,486.5);
p.frameBounds = [rect, rect, new cjs.Rectangle(-247.5,-279.3,492.6,649.4), new cjs.Rectangle(-254.3,-279.8,499.4,649.9), new cjs.Rectangle(-273.9,-277.9,518.9,546.8), new cjs.Rectangle(-266,-274.9,526.1,527.1), new cjs.Rectangle(-245,-275,515.9,426.2), new cjs.Rectangle(-245,-385.9,500,512.6)];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-345.5,535,486.5);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-345.5,535,486.5);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-345.5,535,486.5);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,490);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,280);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.398;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,827);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(100,550);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(100,435);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,-200);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,-100);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(680,460,0.905,0.905);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(680,540.1,0.905,0.905,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.freeGames_mc = new lib.free_games_mc();
	this.freeGames_mc.setTransform(300,620);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(350,540);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(450,540);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100.2,50.1,0.905,0.904,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.next_mc},{t:this.prev_mc},{t:this.freeGames_mc},{t:this.photo_btn},{t:this.playAgain_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.next_btn},{t:this.moreGames_btn},{t:this.facebook_btn}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(600,-300);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(200,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.199;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-490,1200,1181.5);
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

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_1_mc.setTransform(400,380);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_3 = new lib.hero_3_for_makeup_mc();
	this.hero_3.setTransform(420.4,459.6,1,1,0,0,0,0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-261.3,820,1160.4);
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
	this.hero_2 = new lib.hero_2_for_makeup_mc();
	this.hero_2.setTransform(415,490);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_1_mc.setTransform(400,380);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-261.3,820,1196.4);
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
	this.hero_1 = new lib.hero_1_for_makeup_mc();
	this.hero_1.setTransform(430,490);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_1_mc.setTransform(400,380);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-261.3,820,1210.8);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(470,545);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(290,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1160.4);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(470,545);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(290,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1196.4);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(470,545);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(290,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1210.8);
p.frameBounds = [rect];


(lib.dressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(220,-20);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-220,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-274.5,-550,549.6,890);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(220,-20);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-220,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-274.5,-550,549.6,890);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(220,-20);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-220,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-274.5,-550,549.6,890);
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

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_1_mc.setTransform(260,420);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(650.3,329.7,1,1,0,0,0,0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.5,-261.3,860,1021.4);
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

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_1_mc.setTransform(260,420);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(640,345);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.5,-261.3,863.1,1021.4);
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

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_1_mc.setTransform(260,420);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(645,335);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.5,-261.3,907.8,1021.4);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(650,545);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(70,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1111.4);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(650,545);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(70,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1111.4);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(650,545);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(70,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1111.4);
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
	this.instance_4.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();
	this.instance_7.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.LocationScreen_5();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.LocationScreen_6();

	this.redirect_mc = new lib.RedirectScreen();

	this.instance_10 = new lib.ResultScreen();

	this.instance_11 = new lib.InstructionScreen();
	this.instance_11.setTransform(400,300,1,1,0,0,0,400,300);

	this.instance_12 = new lib.TrackMove();
	this.instance_12.setTransform(361.4,68.4);

	this.instance_13 = new lib.Cursor();
	this.instance_13.setTransform(257.2,68.7);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(158.7,69.2);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(65.7,69.2);

	this.instance_14 = new lib.OrientationLockScreen();

	this.instance_15 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.redirect_mc}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_13},{t:this.instance_12}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,127,39.8);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-76.9,1200,924.7), new cjs.Rectangle(-200,-76.9,1200,824.7), new cjs.Rectangle(-200,-261.3,1200,1210.8), new cjs.Rectangle(-200,-261.3,1200,1109.1), new cjs.Rectangle(-200,-261.3,1200,1196.4), new cjs.Rectangle(-200,-261.3,1200,1109.1), new cjs.Rectangle(-200,-261.3,1200,1160.4), new cjs.Rectangle(-200,-261.3,1200,1109.1), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-490,1200,1181.5), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(30.7,18.4,380.7,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1400,0,1200,600), rect=null, rect, rect];


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