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
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_6", frames: [[522,711,420,420],[944,766,420,420],[522,202,462,507],[1366,766,420,420],[0,0,1600,200],[986,202,640,280],[986,484,640,280],[0,724,520,520],[0,202,520,520]]},
		{name:"storage_atlas_7", frames: [[1266,844,414,411],[0,0,420,420],[0,422,420,420],[0,844,420,420],[844,0,420,420],[422,0,420,420],[1266,0,420,420],[422,422,420,420],[422,844,420,420],[1266,422,420,420],[844,422,420,420],[844,844,420,420]]},
		{name:"storage_atlas_8", frames: [[0,704,500,300],[0,402,500,300],[402,0,500,300],[904,0,500,300],[0,1006,500,300],[502,302,500,300],[502,983,344,354],[1386,382,375,346],[1345,730,244,473],[848,983,323,363],[502,604,425,332],[929,684,414,297],[0,0,400,400],[1406,0,380,380],[1004,302,380,380]]},
		{name:"storage_atlas_9", frames: [[657,998,300,300],[1498,1049,300,300],[0,668,380,260],[959,1051,300,300],[1300,0,292,350],[1004,0,294,348],[1213,703,283,346],[1498,703,278,344],[329,996,326,277],[880,350,294,339],[321,313,286,353],[321,0,357,311],[609,335,269,373],[0,0,319,357],[1176,352,287,346],[1465,352,282,349],[880,700,331,296],[0,930,327,279],[382,710,327,284],[0,359,307,298],[680,0,322,333]]},
		{name:"storage_atlas_10", frames: [[1457,302,290,290],[828,519,290,290],[0,776,290,290],[244,484,290,290],[536,519,290,290],[292,1103,290,290],[1120,573,290,290],[0,1068,290,290],[1412,594,290,290],[584,1103,290,290],[292,811,290,290],[584,811,290,290],[876,865,290,290],[1168,886,290,290],[1460,886,290,290],[0,0,300,300],[302,182,300,300],[1306,0,300,300],[302,0,500,180],[804,0,500,180],[604,182,262,335],[1132,302,323,269],[868,182,262,335],[0,302,242,362]]},
		{name:"storage_atlas_11", frames: [[0,0,290,290],[584,584,290,290],[584,292,290,290],[1460,0,290,290],[876,584,290,290],[292,292,290,290],[292,584,290,290],[1168,292,290,290],[876,292,290,290],[1460,292,290,290],[876,876,290,290],[584,876,290,290],[0,292,290,290],[292,876,290,290],[1168,584,290,290],[0,584,290,290],[876,0,290,290],[1168,0,290,290],[584,0,290,290],[1460,584,290,290],[0,876,290,290],[1168,876,290,290],[292,0,290,290],[1460,876,290,290]]},
		{name:"storage_atlas_12", frames: [[0,0,290,290],[876,292,290,290],[292,292,290,290],[1460,0,290,290],[0,292,290,290],[584,876,290,290],[876,584,290,290],[584,0,290,290],[1168,292,290,290],[1460,292,290,290],[0,584,290,290],[292,584,290,290],[292,876,290,290],[0,876,290,290],[876,0,290,290],[1168,0,290,290],[292,0,290,290],[584,292,290,290],[584,584,290,290],[1460,876,290,290],[876,876,290,290],[1460,584,290,290],[1168,584,290,290],[1168,876,290,290]]},
		{name:"storage_atlas_13", frames: [[0,1168,500,160],[876,584,500,160],[1444,313,292,251],[1168,0,318,264],[1488,0,247,311],[1168,266,274,301],[584,876,240,335],[1328,908,240,316],[1378,569,316,244],[826,908,500,160],[826,1070,500,160],[876,746,500,160],[502,1232,500,160],[1004,1232,500,160],[0,0,290,290],[0,292,290,290],[292,0,290,290],[0,584,290,290],[292,292,290,290],[584,0,290,290],[0,876,290,290],[292,584,290,290],[584,292,290,290],[876,0,290,290],[292,876,290,290],[584,584,290,290],[876,292,290,290]]},
		{name:"storage_atlas_14", frames: [[0,619,225,254],[0,316,217,301],[1281,0,254,232],[235,257,260,196],[227,455,248,195],[489,744,240,184],[227,744,260,177],[0,0,233,314],[260,1108,195,224],[468,930,195,224],[457,1156,195,224],[665,930,195,224],[1453,922,195,224],[851,1156,195,224],[1048,1148,195,224],[1018,244,195,224],[497,257,195,224],[654,1156,195,224],[1245,1148,195,224],[1059,922,195,224],[946,696,195,224],[1442,1148,195,224],[1537,626,195,224],[1256,922,195,224],[1537,400,195,224],[0,875,222,254],[774,0,242,265],[1143,696,195,224],[1340,696,195,224],[862,922,195,224],[694,267,195,224],[1215,244,195,224],[946,470,195,224],[749,493,195,224],[1143,470,195,224],[1340,470,195,224],[1537,0,260,201],[1537,203,257,195],[0,1131,258,198],[224,923,242,183],[227,652,520,90],[1018,0,261,242],[235,0,270,255],[507,0,265,250]]},
		{name:"storage_atlas_15", frames: [[394,0,197,221],[197,1130,197,221],[1192,0,197,221],[1391,0,197,221],[394,446,197,221],[394,223,197,221],[593,446,197,221],[1590,0,197,221],[394,669,197,221],[593,669,197,221],[394,892,197,221],[396,1115,197,221],[593,0,197,221],[593,223,197,221],[593,892,197,221],[595,1115,197,221],[794,0,197,221],[993,0,197,221],[993,223,197,221],[1190,892,197,221],[792,446,197,221],[792,669,197,221],[1391,223,197,221],[1391,446,197,221],[1590,446,197,221],[1190,669,197,221],[991,892,197,221],[1590,223,197,221],[1192,446,197,221],[1192,223,197,221],[1192,1115,197,221],[991,446,197,221],[792,223,197,221],[792,892,197,221],[794,1115,197,221],[991,669,197,221],[993,1115,197,221],[1389,851,248,172],[0,226,195,224],[1391,1025,248,168],[0,0,195,224],[0,452,195,224],[0,678,195,224],[0,904,195,224],[0,1130,195,224],[197,0,195,224],[197,226,195,224],[197,452,195,224],[197,678,195,224],[197,904,195,224],[1391,669,241,180],[1391,1195,218,170]]},
		{name:"storage_atlas_16", frames: [[0,681,190,190],[1601,0,180,180],[1662,484,120,120],[1469,800,120,120],[0,489,190,190],[1347,800,120,120],[1662,606,90,90],[192,627,180,180],[1591,800,120,120],[983,356,140,140],[0,873,190,190],[1347,922,120,120],[1469,922,120,120],[1591,922,120,120],[624,930,120,120],[0,315,212,172],[242,1255,262,98],[464,192,218,155],[0,154,232,159],[456,491,224,149],[234,192,228,149],[0,0,243,152],[374,976,196,148],[1267,470,131,142],[1527,490,133,134],[1400,490,125,144],[1325,290,137,178],[1136,190,262,98],[563,642,174,160],[698,373,131,167],[821,0,172,207],[1464,360,179,128],[1254,614,135,135],[995,162,139,192],[1464,180,134,178],[1645,314,131,168],[1125,566,127,150],[995,0,220,160],[1326,1106,80,124],[624,1052,120,120],[1112,1017,180,60],[1112,955,180,60],[990,1190,180,60],[1294,1044,180,60],[1112,1079,180,60],[990,1252,180,60],[684,209,280,80],[1391,636,260,60],[698,291,280,80],[0,1065,190,190],[891,742,150,100],[715,828,150,100],[891,640,150,100],[867,844,150,100],[563,804,150,100],[739,726,150,100],[1043,718,150,100],[1043,820,150,100],[1543,698,150,100],[1391,698,150,100],[1195,751,150,100],[1195,853,150,100],[739,624,150,100],[624,1174,120,120],[746,946,120,120],[1600,182,180,130],[682,542,220,80],[192,1173,340,80],[1217,0,186,188],[1326,1232,99,100],[831,373,150,142],[1172,1141,50,210],[572,906,50,297],[1405,0,194,178],[374,642,187,171],[1136,290,187,132],[374,815,186,159],[1700,1044,100,100],[456,349,240,140],[0,1257,240,140],[1598,1044,100,100],[214,343,240,140],[214,485,240,140],[245,0,190,190],[437,0,190,190],[629,0,190,190],[868,946,120,120],[192,809,180,180],[192,991,180,180],[1650,1146,112,70],[1669,1218,112,70],[1568,1314,112,70],[1682,1290,112,70],[506,1255,112,70],[1476,1044,120,90],[746,1190,120,120],[990,946,120,120],[868,1068,120,120],[868,1190,120,120],[746,1068,120,120],[990,1068,120,120],[1125,424,140,140],[983,498,140,140],[484,1355,240,40],[242,1355,240,40],[1427,1272,240,40],[1408,1146,240,40],[1427,1230,240,40],[1326,1334,240,40],[1408,1188,240,40],[726,1312,240,40],[968,1314,200,40],[726,1354,200,40],[1224,1243,100,100],[1224,1141,100,100]]},
		{name:"storage_atlas_17", frames: [[208,497,50,50],[82,168,80,60],[164,216,80,60],[255,196,80,60],[337,208,80,60],[0,209,80,60],[419,149,80,60],[419,211,80,60],[0,147,80,60],[255,134,80,60],[173,154,80,60],[82,230,80,60],[337,146,80,60],[347,72,72,72],[139,402,21,120],[162,424,21,120],[430,397,21,120],[116,402,21,120],[185,424,21,120],[453,448,21,120],[476,448,21,120],[0,449,21,120],[23,449,21,120],[46,467,21,120],[407,397,21,120],[384,387,21,120],[246,270,90,50],[338,273,90,50],[260,500,50,50],[312,500,50,50],[364,519,50,50],[69,524,50,50],[0,395,52,52],[260,552,48,48],[210,549,48,48],[420,650,27,50],[415,591,34,57],[124,292,33,46],[173,549,35,66],[148,659,28,46],[32,661,23,45],[381,571,32,62],[0,637,30,51],[486,570,21,58],[35,589,27,70],[421,72,33,75],[416,519,34,70],[183,340,37,82],[0,571,33,64],[310,552,30,76],[452,570,32,71],[69,576,35,56],[342,571,37,57],[210,599,40,40],[62,292,60,60],[226,322,60,60],[0,271,60,60],[288,325,60,60],[430,273,60,60],[0,333,60,60],[350,325,60,60],[164,278,60,60],[412,335,60,60],[474,335,25,111],[62,354,25,111],[89,354,25,111],[222,384,25,111],[357,387,25,111],[330,387,25,111],[249,384,25,111],[276,387,25,111],[303,387,25,111],[69,467,40,55],[106,598,40,43],[498,0,10,11],[102,72,69,94],[0,72,100,73],[124,340,57,60],[307,672,23,38],[274,672,31,31],[121,546,50,50],[456,0,40,147],[336,630,40,40],[252,602,40,40],[64,634,40,40],[190,641,40,40],[451,643,40,40],[106,643,40,40],[232,644,40,40],[148,617,40,40],[378,650,40,40],[294,630,40,40],[173,72,80,80],[0,0,112,70],[114,0,112,70],[342,0,112,70],[228,0,112,70],[255,72,90,60]]}
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



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blush_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.blush_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blush_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blush_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.blush_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.blush_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.blush_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.blush_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.blush_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.blush_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.blush_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.blush_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bottom_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottom_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bottom_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bottom_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bottom_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bottom_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bottom_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bottom_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.current_face_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.current_face_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_large_buttons_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.faceart_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.faceart_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.faceart_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.faceart_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.faceart_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.faceart_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.faceart_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.faceart_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.faceart_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.faceart_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.faceart_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.faceart_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.forward_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.gift_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.gift_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.gift_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.gift_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.gift_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gift_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hands_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair9_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hands_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.lens10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.lens13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.lens14_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.lens18_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.lens19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.lens21_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.lens22_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.lens28_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.lens30_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new22_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new32_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new38_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new40_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.long_lamp_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new22_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new25_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new29_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new32_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new37_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new43_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new48_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.substrate_makeup_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.substrate_makeup_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.top_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.top_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.top_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.top_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.top_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.top_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.top_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.top_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.top_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.top_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.top_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.top_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.top_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.top_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.top_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.top_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.top_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.top_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.vs_for_title_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(8);
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
	this.shape_3.graphics.lf(["rgba(152,172,255,0)","rgba(191,194,255,0.298)"],[0,1],0.9,8.8,0.9,75.8).s().p("AtnDnQlXlWgRngQAVFiFTD9QFpEQH+AAQH/AAFpkQQFQj7AYlfQgTHdlVFUQlpFpn/AAQn+AAlplpg");
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
	this.shape_6.graphics.f("rgba(0,0,0,0.098)").s().p("AvcPeQmbmaAApEQAApDGbmZQGZmbJDAAQJEAAGaGbQGZGZAAJDQAAJEmZGaQmaGZpEAAQpDAAmZmZg");
	this.shape_6.setTransform(4.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFF00","#FF6600"],[0,1],-2.1,-23.8,0,-2.1,-23.8,97.6).s().p("AnDJ5IgDgCIAAAAIgBgBQg0ghgfg7IgBgBQgdg5AAhCIAAs7QgBhDAfg5IgBACQAgg/A4giIACgBQA5gkBDABQBCgBA6AkIKNGgQA2AgAhA+IABABQAdA5AABBQAABAgdA7IgBADQghA6gzAhIgDACIqLGeQg2AlhIgBQhJABg1glg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF6699","#E023A0"],[0,1],0,-79,0,79).s().p("AoGLcQhRgyguhaIAAABQgrhTgBhgIAAs7QABhhAshTIgCAEQAwheBTgzIADgCQBWg1BlAAQBkAABWA1IKLGfQBUAwAyBfIgBgBQAsBTABBgQgBBdgqBUIgDAGQgvBVhNAyIgEACIqHGbQhSA6hwABQhwgBhRg5gAkFlGIACgCIABgBIgDADg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-79,138,158);
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
	this.shape.graphics.lf(["#F77EBB","#F82991"],[0,1],0,17,0,-17).s().p("Ax8CqQhHgBgygxQgxgyAAhGQAAhFAxgyQAygxBHAAMAj5AAAQBHAAAyAxQAyAygBBFQABBGgyAyQgyAxhHABg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F77EBB","#F82991"],[0,1],0,-26,0,26).s().p("Ax8EEQhtgBhLhLQhNhMABhsQAAhqBLhMIABgBQBMhLBsAAMAj5AAAQBtgBBMBNQBMBLgBBrQABBrhMBMIAAABIAAAAQhNBLhsABg");
	this.shape_1.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11,-11,282,52);
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


(lib.languages_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.languages_2_3_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-270,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-260,520,520);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-270,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-260,520,520);
p.frameBounds = [rect];


(lib.vs_for_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.vs_for_title_img();
	this.instance.setTransform(-45,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-30,90,60);
p.frameBounds = [rect];


(lib.title_filter_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_filter_en_img();
	this.instance.setTransform(-100,-20);

	this.instance_1 = new lib.title_filter_ru_img();
	this.instance_1.setTransform(-100,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-20,200,40);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_filter_body_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_filter_3_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_3_ru_img();
	this.instance_1.setTransform(1,1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_filter_body_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_filter_2_en_img();

	this.instance_1 = new lib.title_filter_2_ru_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,240,40);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_filter_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_filter_1_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_1_ru_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, new cjs.Rectangle(0,0,240,40), rect=new cjs.Rectangle(1,1,228,38), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_filter_body_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_filter_0_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_0_ru_img();
	this.instance_1.setTransform(1,1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.substrate_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_makeup_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.substrate_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_makeup_1_img();
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
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,200);
p.frameBounds = [rect];


(lib.long_lamp_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.long_lamp_1_img();
	this.instance.setTransform(-260,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-45,520,90);
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


(lib.indicator_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_3_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,280,80);
p.frameBounds = [rect];


(lib.indicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,60);
p.frameBounds = [rect];


(lib.indicator_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
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


(lib.hero3_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-112,-74.5);

	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(-118.5,-73.1);

	this.instance_2 = new lib.hero1_top3_img();
	this.instance_2.setTransform(-125.5,-77.6);

	this.instance_3 = new lib.hero1_top4_img();
	this.instance_3.setTransform(-99.6,-72.1);

	this.instance_4 = new lib.hero1_top5_img();
	this.instance_4.setTransform(-60.6,-69.1);

	this.instance_5 = new lib.hero1_top6_img();
	this.instance_5.setTransform(-65.1,-69.1);

	this.instance_6 = new lib.hero1_top7_img();
	this.instance_6.setTransform(-59.1,-67.5);

	this.instance_7 = new lib.hero1_top8_img();
	this.instance_7.setTransform(-67.1,-70.1);

	this.instance_8 = new lib.hero1_top9_img();
	this.instance_8.setTransform(-134.6,-73);

	this.instance_9 = new lib.hero2_top1_img();
	this.instance_9.setTransform(83,-75.7,1,1,0,0,180);

	this.instance_10 = new lib.hero2_top2_img();
	this.instance_10.setTransform(66,-76.7,1,1,0,0,180);

	this.instance_11 = new lib.hero2_top3_img();
	this.instance_11.setTransform(91,-128.6,1,1,0,0,180);

	this.instance_12 = new lib.hero2_top4_img();
	this.instance_12.setTransform(88,-67.7,1,1,0,0,180);

	this.instance_13 = new lib.hero2_top5_img();
	this.instance_13.setTransform(68,-66.7,1,1,0,0,180);

	this.instance_14 = new lib.hero2_top6_img();
	this.instance_14.setTransform(66,-74.7,1,1,0,0,180);

	this.instance_15 = new lib.hero2_top7_img();
	this.instance_15.setTransform(69,-72.7,1,1,0,0,180);

	this.instance_16 = new lib.hero2_top8_img();
	this.instance_16.setTransform(68,-68.7,1,1,0,0,180);

	this.instance_17 = new lib.hero2_top9_img();
	this.instance_17.setTransform(66,-73.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-74.5,224,149);
p.frameBounds = [rect, new cjs.Rectangle(-118.5,-73.1,228,149), new cjs.Rectangle(-125.5,-77.6,243,152), new cjs.Rectangle(-99.6,-72.1,196,148), new cjs.Rectangle(-60.6,-69.1,131,142), new cjs.Rectangle(-65.1,-69.1,133,134), new cjs.Rectangle(-59.1,-67.5,125,144), new cjs.Rectangle(-67.1,-70.1,137,178), new cjs.Rectangle(-134.6,-73,260,177), new cjs.Rectangle(-91,-75.7,174,160), new cjs.Rectangle(-65,-76.7,131,167), new cjs.Rectangle(-81,-128.6,172,207), new cjs.Rectangle(-91,-67.7,179,128), new cjs.Rectangle(-67,-66.7,135,135), new cjs.Rectangle(-73,-74.7,139,192), new cjs.Rectangle(-65,-72.7,134,178), new cjs.Rectangle(-63,-68.7,131,168), new cjs.Rectangle(-61,-73.7,127,150), null];


(lib.hero3_skirt_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_skirt1_img();
	this.instance.setTransform(-130,-98);

	this.instance_1 = new lib.hero1_skirt2_img();
	this.instance_1.setTransform(-124.6,-97);

	this.instance_2 = new lib.hero1_skirt3_img();
	this.instance_2.setTransform(-131.1,-89.6);

	this.instance_3 = new lib.hero1_skirt4_img();
	this.instance_3.setTransform(-119.5,-94.1);

	this.instance_4 = new lib.hero1_skirt5_img();
	this.instance_4.setTransform(-101.1,-96.1);

	this.instance_5 = new lib.hero1_skirt6_img();
	this.instance_5.setTransform(-122.1,-96);

	this.instance_6 = new lib.hero2_skirt1_img();
	this.instance_6.setTransform(119.4,-100.5,1,1,0,0,180);

	this.instance_7 = new lib.hero2_skirt2_img();
	this.instance_7.setTransform(129.4,-102.5,1,1,0,0,180);

	this.instance_8 = new lib.hero2_skirt3_img();
	this.instance_8.setTransform(130.4,-101.5,1,1,0,0,180);

	this.instance_9 = new lib.hero2_skirt4_img();
	this.instance_9.setTransform(127.4,-100.5,1,1,0,0,180);

	this.instance_10 = new lib.hero2_skirt5_img();
	this.instance_10.setTransform(116.4,-99.5,1,1,0,0,180);

	this.instance_11 = new lib.hero2_skirt6_img();
	this.instance_11.setTransform(129.4,-100.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-98,260,196);
p.frameBounds = [rect, new cjs.Rectangle(-124.6,-97,248,195), new cjs.Rectangle(-131.1,-89.6,248,172), new cjs.Rectangle(-119.5,-94.1,240,184), new cjs.Rectangle(-101.1,-96.1,218,155), new cjs.Rectangle(-122.1,-96,232,159), new cjs.Rectangle(-140.6,-100.5,260,201), new cjs.Rectangle(-127.6,-102.5,257,195), new cjs.Rectangle(-127.6,-101.5,258,198), new cjs.Rectangle(-113.6,-100.5,241,180), new cjs.Rectangle(-101.6,-99.5,218,170), new cjs.Rectangle(-112.6,-100.5,242,183), null];


(lib.hero3_shadows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero3_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero3_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero3_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-138.6,-25.1);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-135.6,-95.6);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-122.5,-61.1);

	this.instance_3 = new lib.hero1_hair5_img();
	this.instance_3.setTransform(-152.6,-114.1);

	this.instance_4 = new lib.hero1_hair6_img();
	this.instance_4.setTransform(-178.5,-139.1);

	this.instance_5 = new lib.hero1_hair7_img();
	this.instance_5.setTransform(-169.1,-119.5);

	this.instance_6 = new lib.hero1_hair9_img();
	this.instance_6.setTransform(-143.1,-76.1);

	this.instance_7 = new lib.hero2_hair3_img();
	this.instance_7.setTransform(227.9,-150.6,1,1,0,0,180);

	this.instance_8 = new lib.hero2_hair5_img();
	this.instance_8.setTransform(120.9,-7.6,1,1,0,0,180);

	this.instance_9 = new lib.hero2_hair6_img();
	this.instance_9.setTransform(153.9,-113.6,1,1,0,0,180);

	this.instance_10 = new lib.hero2_hair8_img();
	this.instance_10.setTransform(116.9,-112.6,1,1,0,0,180);

	this.instance_11 = new lib.hero2_hair9_img();
	this.instance_11.setTransform(206.9,-151.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},2).to({state:[]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.6,-25.1,274,301);
p.frameBounds = [rect, new cjs.Rectangle(-135.6,-95.6,254,232), new cjs.Rectangle(-122.5,-61.1,244,473), null, new cjs.Rectangle(-152.6,-114.1,286,353), new cjs.Rectangle(-178.5,-139.1,357,311), new cjs.Rectangle(-169.1,-119.5,323,363), null, new cjs.Rectangle(-143.1,-76.1,269,373), rect=null, rect, new cjs.Rectangle(-234.1,-150.6,462,507), null, new cjs.Rectangle(-127.1,-7.6,248,168), new cjs.Rectangle(-168.1,-113.6,322,333), null, new cjs.Rectangle(-125.1,-112.6,242,362), new cjs.Rectangle(-207.1,-151.6,414,411)];


(lib.hero3_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-146,-125.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-165,-122);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-118.5,-108.6);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-119.1,-149.1);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-116.1,-107.1);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-106.6,-113.6);

	this.instance_6 = new lib.hero1_fringe7_img();
	this.instance_6.setTransform(-169.1,-119.1);

	this.instance_7 = new lib.hero1_fringe8_img();
	this.instance_7.setTransform(-164.6,-117.1);

	this.instance_8 = new lib.hero1_fringe9_img();
	this.instance_8.setTransform(-156,-112.5);

	this.instance_9 = new lib.hero2_fringe1_img();
	this.instance_9.setTransform(168.9,-119.6,1,1,0,0,180);

	this.instance_10 = new lib.hero2_fringe2_img();
	this.instance_10.setTransform(176.9,-154.6,1,1,0,0,180);

	this.instance_11 = new lib.hero2_fringe3_img();
	this.instance_11.setTransform(205.9,-150.6,1,1,0,0,180);

	this.instance_12 = new lib.hero2_fringe4_img();
	this.instance_12.setTransform(107.9,-115.6,1,1,0,0,180);

	this.instance_13 = new lib.hero2_fringe5_img();
	this.instance_13.setTransform(161.9,-117.6,1,1,0,0,180);

	this.instance_14 = new lib.hero2_fringe6_img();
	this.instance_14.setTransform(150.9,-113.6,1,1,0,0,180);

	this.instance_15 = new lib.hero2_fringe7_img();
	this.instance_15.setTransform(152.9,-107.6,1,1,0,0,180);

	this.instance_16 = new lib.hero2_fringe8_img();
	this.instance_16.setTransform(116.9,-112.6,1,1,0,0,180);

	this.instance_17 = new lib.hero2_fringe9_img();
	this.instance_17.setTransform(206.9,-151.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-125.5,292,251);
p.frameBounds = [rect, new cjs.Rectangle(-165,-122,318,264), new cjs.Rectangle(-118.5,-108.6,225,254), new cjs.Rectangle(-119.1,-149.1,247,311), new cjs.Rectangle(-116.1,-107.1,217,301), new cjs.Rectangle(-106.6,-113.6,212,172), new cjs.Rectangle(-169.1,-119.1,323,269), new cjs.Rectangle(-164.6,-117.1,326,277), new cjs.Rectangle(-156,-112.5,294,339), new cjs.Rectangle(-162.1,-119.6,331,296), new cjs.Rectangle(-150.1,-154.6,327,279), new cjs.Rectangle(-219.1,-150.6,425,332), new cjs.Rectangle(-114.1,-115.6,222,254), new cjs.Rectangle(-165.1,-117.6,327,284), new cjs.Rectangle(-165.1,-113.6,316,244), new cjs.Rectangle(-154.1,-107.6,307,298), new cjs.Rectangle(-125.1,-112.6,242,265), new cjs.Rectangle(-207.1,-151.6,414,297)];


(lib.hero3_faceart_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_faceart1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_faceart2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_faceart3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_faceart4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_faceart5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_faceart6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero3_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_earrings18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings9_img();
	this.instance.setTransform(61.5,-23.2);

	this.instance_1 = new lib.hero2_earrings9_img();
	this.instance_1.setTransform(-98.5,-33.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-33.7,197,67.5);
p.frameBounds = [rect];


(lib.hero3_earrings17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings8_img();
	this.instance.setTransform(62.5,-23);

	this.instance_1 = new lib.hero2_earrings8_img();
	this.instance_1.setTransform(-97.5,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-33,195,66);
p.frameBounds = [rect];


(lib.hero3_earrings16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings7_img();
	this.instance.setTransform(63.3,-27.7);

	this.instance_1 = new lib.hero2_earrings7_img();
	this.instance_1.setTransform(-95.2,-43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.2,-43.2,190.5,86.5);
p.frameBounds = [rect];


(lib.hero3_earrings15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings6_img();
	this.instance.setTransform(64.3,-30);

	this.instance_1 = new lib.hero2_earrings6_img();
	this.instance_1.setTransform(-94.2,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.2,-46,188.5,92);
p.frameBounds = [rect];


(lib.hero3_earrings14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings5_img();
	this.instance.setTransform(99,-26,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings5_img();
	this.instance_1.setTransform(-99,-38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99,-38,198,76);
p.frameBounds = [rect];


(lib.hero3_earrings13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings4_img();
	this.instance.setTransform(61.5,-35);

	this.instance_1 = new lib.hero2_earrings4_img();
	this.instance_1.setTransform(-98.5,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-47,197,94);
p.frameBounds = [rect];


(lib.hero3_earrings12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings3_img();
	this.instance.setTransform(61.8,-29);

	this.instance_1 = new lib.hero2_earrings3_img();
	this.instance_1.setTransform(-95.7,-41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.7,-41,191.5,82);
p.frameBounds = [rect];


(lib.hero3_earrings11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(63,-29.5);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-96,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-45.5,192,91);
p.frameBounds = [rect];


(lib.hero3_earrings10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(-66,-41.3,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings1_img();
	this.instance_1.setTransform(93,-28.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-41.3,186,82.6);
p.frameBounds = [rect];


(lib.hero3_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-147,-175);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-152.5,-175.5);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-167,-179.5);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-175.5,-174.5);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-138,-173.5);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-144.5,-172);

	this.instance_6 = new lib.hero2_dress1_img();
	this.instance_6.setTransform(142.9,-183.5,1,1,0,0,180);

	this.instance_7 = new lib.hero2_dress2_img();
	this.instance_7.setTransform(154.9,-172.5,1,1,0,0,180);

	this.instance_8 = new lib.hero2_dress3_img();
	this.instance_8.setTransform(113.9,-173.5,1,1,0,0,180);

	this.instance_9 = new lib.hero2_dress4_img();
	this.instance_9.setTransform(130.9,-178.5,1,1,0,0,180);

	this.instance_10 = new lib.hero2_dress5_img();
	this.instance_10.setTransform(117.9,-175.5,1,1,0,0,180);

	this.instance_11 = new lib.hero2_dress6_img();
	this.instance_11.setTransform(111.9,-174.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147,-175,292,350);
p.frameBounds = [rect, new cjs.Rectangle(-152.5,-175.5,294,348), new cjs.Rectangle(-167,-179.5,344,354), new cjs.Rectangle(-175.5,-174.5,375,346), new cjs.Rectangle(-138,-173.5,283,346), new cjs.Rectangle(-144.5,-172,278,344), new cjs.Rectangle(-176.1,-183.5,319,357), new cjs.Rectangle(-132.1,-172.5,287,346), new cjs.Rectangle(-119.1,-173.5,233,314), new cjs.Rectangle(-151.1,-178.5,282,349), new cjs.Rectangle(-122.1,-175.5,240,335), new cjs.Rectangle(-128.1,-174.5,240,316), null];


(lib.hero2_top_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top2_img();
	this.instance.setTransform(-70,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-80,131,167);
p.frameBounds = [rect];


(lib.hero2_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-87,-80);

	this.instance_1 = new lib.hero2_top2_img();
	this.instance_1.setTransform(-70,-80);

	this.instance_2 = new lib.hero2_top3_img();
	this.instance_2.setTransform(-93,-136);

	this.instance_3 = new lib.hero2_top4_img();
	this.instance_3.setTransform(-92,-73);

	this.instance_4 = new lib.hero2_top5_img();
	this.instance_4.setTransform(-74,-73);

	this.instance_5 = new lib.hero2_top6_img();
	this.instance_5.setTransform(-70,-81);

	this.instance_6 = new lib.hero2_top7_img();
	this.instance_6.setTransform(-72,-80);

	this.instance_7 = new lib.hero2_top8_img();
	this.instance_7.setTransform(-72,-75);

	this.instance_8 = new lib.hero2_top9_img();
	this.instance_8.setTransform(-69,-79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87,-80,174,160);
p.frameBounds = [rect, new cjs.Rectangle(-70,-80,131,167), new cjs.Rectangle(-93,-136,172,207), new cjs.Rectangle(-92,-73,179,128), new cjs.Rectangle(-74,-73,135,135), new cjs.Rectangle(-70,-81,139,192), new cjs.Rectangle(-72,-80,134,178), new cjs.Rectangle(-72,-75,131,168), new cjs.Rectangle(-69,-79,127,150), null];


(lib.hero2_skirt_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_skirt6_img();
	this.instance.setTransform(-137.6,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.6,-96.5,242,183);
p.frameBounds = [rect];


(lib.hero2_skirt_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_skirt1_img();
	this.instance.setTransform(-130,-100.5);

	this.instance_1 = new lib.hero2_skirt2_img();
	this.instance_1.setTransform(-136.1,-96.5);

	this.instance_2 = new lib.hero2_skirt3_img();
	this.instance_2.setTransform(-138,-99);

	this.instance_3 = new lib.hero2_skirt4_img();
	this.instance_3.setTransform(-133.1,-98);

	this.instance_4 = new lib.hero2_skirt5_img();
	this.instance_4.setTransform(-126.6,-99.6);

	this.instance_5 = new lib.hero2_skirt6_img();
	this.instance_5.setTransform(-137.6,-96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-100.5,260,201);
p.frameBounds = [rect, new cjs.Rectangle(-136.1,-96.5,257,195), new cjs.Rectangle(-138,-99,258,198), new cjs.Rectangle(-133.1,-98,241,180), new cjs.Rectangle(-126.6,-99.6,218,170), new cjs.Rectangle(-137.6,-96.5,242,183), null];


(lib.hero2_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows6_img();
	this.instance.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect];


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-97.5,-112);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-97.5,-112);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-97.5,-112);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-97.5,-112);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-97.5,-112);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-97.5,-112);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-97.5,-112);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-97.5,-112);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-97.5,-112);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-97.5,-112);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips4_img();
	this.instance.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-97.5,-112);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-97.5,-112);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-97.5,-112);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-97.5,-112);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-97.5,-112);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect];


(lib.hero2_hands_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hands_img();
	this.instance.setTransform(-131,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-49,262,98);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair3_img();
	this.instance.setTransform(-225,-179.5);

	this.instance_1 = new lib.hero2_hair5_img();
	this.instance_1.setTransform(-118.6,-37);

	this.instance_2 = new lib.hero2_hair6_img();
	this.instance_2.setTransform(-155.6,-138.5);

	this.instance_3 = new lib.hero2_hair8_img();
	this.instance_3.setTransform(-117.6,-149.6);

	this.instance_4 = new lib.hero2_hair9_img();
	this.instance_4.setTransform(-205,-179.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, new cjs.Rectangle(-225,-179.5,462,507), null, new cjs.Rectangle(-118.6,-37,248,168), new cjs.Rectangle(-155.6,-138.5,322,333), null, new cjs.Rectangle(-117.6,-149.6,242,362), new cjs.Rectangle(-205,-179.5,414,411)];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe2_img();
	this.instance.setTransform(-177.5,-184.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177.5,-184.5,327,279);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-165.5,-148);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-177.5,-184.5);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-203.1,-178.6);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-108,-147.6);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-160.5,-144.6);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-152.6,-139.6);

	this.instance_6 = new lib.hero2_fringe7_img();
	this.instance_6.setTransform(-153.1,-138.6);

	this.instance_7 = new lib.hero2_fringe8_img();
	this.instance_7.setTransform(-117.6,-149.1);

	this.instance_8 = new lib.hero2_fringe9_img();
	this.instance_8.setTransform(-205,-179.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.5,-148,331,296);
p.frameBounds = [rect, new cjs.Rectangle(-177.5,-184.5,327,279), new cjs.Rectangle(-203.1,-178.6,425,332), new cjs.Rectangle(-108,-147.6,222,254), new cjs.Rectangle(-160.5,-144.6,327,284), new cjs.Rectangle(-152.6,-139.6,316,244), new cjs.Rectangle(-153.1,-138.6,307,298), new cjs.Rectangle(-117.6,-149.1,242,265), new cjs.Rectangle(-205,-179.5,414,297)];


(lib.hero2_faceart_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_faceart3_img();
	this.instance.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect];


(lib.hero2_faceart_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_faceart1_img();
	this.instance.setTransform(-97.5,-112);

	this.instance_1 = new lib.hero2_faceart2_img();
	this.instance_1.setTransform(-97.5,-112);

	this.instance_2 = new lib.hero2_faceart3_img();
	this.instance_2.setTransform(-97.5,-112);

	this.instance_3 = new lib.hero2_faceart4_img();
	this.instance_3.setTransform(-97.5,-112);

	this.instance_4 = new lib.hero2_faceart5_img();
	this.instance_4.setTransform(-97.5,-112);

	this.instance_5 = new lib.hero2_faceart6_img();
	this.instance_5.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes6_img();
	this.instance.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-97.5,-112);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-97.5,-112);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-97.5,-112);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-97.5,-112);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-97.5,-112);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows4_img();
	this.instance.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect];


(lib.hero2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-97.5,-112);

	this.instance_1 = new lib.hero2_eyebrows2_img();
	this.instance_1.setTransform(-97.5,-112);

	this.instance_2 = new lib.hero2_eyebrows3_img();
	this.instance_2.setTransform(-97.5,-112);

	this.instance_3 = new lib.hero2_eyebrows4_img();
	this.instance_3.setTransform(-97.5,-112);

	this.instance_4 = new lib.hero2_eyebrows5_img();
	this.instance_4.setTransform(-97.5,-112);

	this.instance_5 = new lib.hero2_eyebrows6_img();
	this.instance_5.setTransform(-97.5,-112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-112,195,224);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_earrings9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings9_img();
	this.instance.setTransform(64.1,-34.7);

	this.instance_1 = new lib.hero2_earrings9_img();
	this.instance_1.setTransform(-101,-22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-34.7,202.1,69.5);
p.frameBounds = [rect];


(lib.hero2_earrings8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings8_img();
	this.instance.setTransform(101.6,-32.7,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings8_img();
	this.instance_1.setTransform(-101.5,-23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.5,-32.7,203.1,65.4);
p.frameBounds = [rect];


(lib.hero2_earrings7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings7_img();
	this.instance.setTransform(65.1,-41.1);

	this.instance_1 = new lib.hero2_earrings7_img();
	this.instance_1.setTransform(-97,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-41.1,194.1,82.4);
p.frameBounds = [rect];


(lib.hero2_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings6_img();
	this.instance.setTransform(66.3,-42.6);

	this.instance_1 = new lib.hero2_earrings6_img();
	this.instance_1.setTransform(-96.2,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.2,-42.6,192.5,85.4);
p.frameBounds = [rect];


(lib.hero2_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings5_img();
	this.instance.setTransform(99.3,-37.2,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings5_img();
	this.instance_1.setTransform(-99.2,-26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.2,-37.2,198.5,74.4);
p.frameBounds = [rect];


(lib.hero2_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings4_img();
	this.instance.setTransform(63.6,-45.6);

	this.instance_1 = new lib.hero2_earrings4_img();
	this.instance_1.setTransform(-100.5,-36.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-45.6,201.1,91.4);
p.frameBounds = [rect];


(lib.hero2_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings3_img();
	this.instance.setTransform(65.1,-39.6);

	this.instance_1 = new lib.hero2_earrings3_img();
	this.instance_1.setTransform(-99,-30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99,-39.6,198.1,79.4);
p.frameBounds = [rect];


(lib.hero2_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(66.3,-42.7);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-99.2,-32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.2,-42.7,198.5,85.5);
p.frameBounds = [rect];


(lib.hero2_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(68.5,-40);

	this.instance_1 = new lib.hero2_earrings1_img();
	this.instance_1.setTransform(-95.5,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-40,191,80.1);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-159.5,-178.5);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(-170.1,-167.6);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(-129.1,-166.6);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-146,-171.1);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-133,-168.1);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-128,-167.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-178.5,319,357);
p.frameBounds = [rect, new cjs.Rectangle(-170.1,-167.6,287,346), new cjs.Rectangle(-129.1,-166.6,233,314), new cjs.Rectangle(-146,-171.1,282,349), new cjs.Rectangle(-133,-168.1,240,335), new cjs.Rectangle(-128,-167.6,240,316), null];


(lib.hero1_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-112,-74.5);

	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(-118.5,-73.1);

	this.instance_2 = new lib.hero1_top3_img();
	this.instance_2.setTransform(-125.5,-77.6);

	this.instance_3 = new lib.hero1_top4_img();
	this.instance_3.setTransform(-99.6,-72.1);

	this.instance_4 = new lib.hero1_top5_img();
	this.instance_4.setTransform(-60.6,-69.1);

	this.instance_5 = new lib.hero1_top6_img();
	this.instance_5.setTransform(-65.1,-69.1);

	this.instance_6 = new lib.hero1_top7_img();
	this.instance_6.setTransform(-59.1,-67.5);

	this.instance_7 = new lib.hero1_top8_img();
	this.instance_7.setTransform(-67.1,-70.1);

	this.instance_8 = new lib.hero1_top9_img();
	this.instance_8.setTransform(-134.6,-73);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-74.5,224,149);
p.frameBounds = [rect, new cjs.Rectangle(-118.5,-73.1,228,149), new cjs.Rectangle(-125.5,-77.6,243,152), new cjs.Rectangle(-99.6,-72.1,196,148), new cjs.Rectangle(-60.6,-69.1,131,142), new cjs.Rectangle(-65.1,-69.1,133,134), new cjs.Rectangle(-59.1,-67.5,125,144), new cjs.Rectangle(-67.1,-70.1,137,178), new cjs.Rectangle(-134.6,-73,260,177), null];


(lib.hero1_skirt_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_skirt1_img();
	this.instance.setTransform(-130,-98);

	this.instance_1 = new lib.hero1_skirt2_img();
	this.instance_1.setTransform(-124.6,-97);

	this.instance_2 = new lib.hero1_skirt3_img();
	this.instance_2.setTransform(-131.1,-89.6);

	this.instance_3 = new lib.hero1_skirt4_img();
	this.instance_3.setTransform(-119.5,-94.1);

	this.instance_4 = new lib.hero1_skirt5_img();
	this.instance_4.setTransform(-101.1,-96.1);

	this.instance_5 = new lib.hero1_skirt6_img();
	this.instance_5.setTransform(-122.1,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-98,260,196);
p.frameBounds = [rect, new cjs.Rectangle(-124.6,-97,248,195), new cjs.Rectangle(-131.1,-89.6,248,172), new cjs.Rectangle(-119.5,-94.1,240,184), new cjs.Rectangle(-101.1,-96.1,218,155), new cjs.Rectangle(-122.1,-96,232,159), null];


(lib.hero1_shadows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect];


(lib.hero1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips3_img();
	this.instance.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect];


(lib.hero1_hands_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hands_img();
	this.instance.setTransform(-131,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-49,262,98);
p.frameBounds = [rect];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-138.6,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.6,-25.1,274,301);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-138.6,-25.1);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-135.6,-95.6);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-122.5,-61.1);

	this.instance_3 = new lib.hero1_hair5_img();
	this.instance_3.setTransform(-152.6,-114.1);

	this.instance_4 = new lib.hero1_hair6_img();
	this.instance_4.setTransform(-178.5,-139.1);

	this.instance_5 = new lib.hero1_hair7_img();
	this.instance_5.setTransform(-169.1,-119.5);

	this.instance_6 = new lib.hero1_hair9_img();
	this.instance_6.setTransform(-143.1,-76.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.6,-25.1,274,301);
p.frameBounds = [rect, new cjs.Rectangle(-135.6,-95.6,254,232), new cjs.Rectangle(-122.5,-61.1,244,473), null, new cjs.Rectangle(-152.6,-114.1,286,353), new cjs.Rectangle(-178.5,-139.1,357,311), new cjs.Rectangle(-169.1,-119.5,323,363), null, new cjs.Rectangle(-143.1,-76.1,269,373)];


(lib.hero1_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-146,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-125.5,292,251);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-146,-125.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-165,-122);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-118.5,-108.6);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-119.1,-149.1);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-116.1,-107.1);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-106.6,-113.6);

	this.instance_6 = new lib.hero1_fringe7_img();
	this.instance_6.setTransform(-169.1,-119.1);

	this.instance_7 = new lib.hero1_fringe8_img();
	this.instance_7.setTransform(-164.6,-117.1);

	this.instance_8 = new lib.hero1_fringe9_img();
	this.instance_8.setTransform(-156,-112.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-125.5,292,251);
p.frameBounds = [rect, new cjs.Rectangle(-165,-122,318,264), new cjs.Rectangle(-118.5,-108.6,225,254), new cjs.Rectangle(-119.1,-149.1,247,311), new cjs.Rectangle(-116.1,-107.1,217,301), new cjs.Rectangle(-106.6,-113.6,212,172), new cjs.Rectangle(-169.1,-119.1,323,269), new cjs.Rectangle(-164.6,-117.1,326,277), new cjs.Rectangle(-156,-112.5,294,339)];


(lib.hero1_faceart_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_faceart1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_faceart2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_faceart3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_faceart4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_faceart5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_faceart6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-98.5,-110.5);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-98.5,-110.5);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-98.5,-110.5);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-98.5,-110.5);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-98.5,-110.5);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-98.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-110.5,197,221);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_earrings9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings9_img();
	this.instance.setTransform(70,-23.3);

	this.instance_1 = new lib.hero1_earrings9_img();
	this.instance_1.setTransform(-90.9,-34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.9,-34.7,181.9,69.4);
p.frameBounds = [rect];


(lib.hero1_earrings8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings8_img();
	this.instance.setTransform(64.7,-18.6);

	this.instance_1 = new lib.hero1_earrings8_img();
	this.instance_1.setTransform(-94.7,-32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.7,-32.3,189.4,64.8);
p.frameBounds = [rect];


(lib.hero1_earrings7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings7_img();
	this.instance.setTransform(63.8,-24);

	this.instance_1 = new lib.hero1_earrings7_img();
	this.instance_1.setTransform(-95.8,-37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.8,-37.9,191.6,75.9);
p.frameBounds = [rect];


(lib.hero1_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings6_img();
	this.instance.setTransform(68.5,-16.4);

	this.instance_1 = new lib.hero1_earrings6_img();
	this.instance_1.setTransform(-91.5,-28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-28.6,183.1,57.3);
p.frameBounds = [rect];


(lib.hero1_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings5_img();
	this.instance.setTransform(93.3,-15.5,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings5_img();
	this.instance_1.setTransform(-93.3,-30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.3,-30.4,186.6,60.9);
p.frameBounds = [rect];


(lib.hero1_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings4_img();
	this.instance.setTransform(96.3,-27.6,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings4_img();
	this.instance_1.setTransform(-96.2,-38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.2,-38.3,192.6,76.8);
p.frameBounds = [rect];


(lib.hero1_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings3_img();
	this.instance.setTransform(63.7,-17);

	this.instance_1 = new lib.hero1_earrings3_img();
	this.instance_1.setTransform(-96.7,-28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.7,-28.9,193.4,57.9);
p.frameBounds = [rect];


(lib.hero1_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings2_img();
	this.instance.setTransform(64.3,-21.8);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-98.3,-35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.3,-35.1,196.6,70.3);
p.frameBounds = [rect];


(lib.hero1_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(66.5,-19.5);

	this.instance_1 = new lib.hero1_earrings1_img();
	this.instance_1.setTransform(-93.5,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-30.5,187,61);
p.frameBounds = [rect];


(lib.hero1_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress3_img();
	this.instance.setTransform(-167,-179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167,-179.5,344,354);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-147,-175);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-152.5,-175.5);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-167,-179.5);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-175.5,-174.5);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-138,-173.5);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-144.5,-172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147,-175,292,350);
p.frameBounds = [rect, new cjs.Rectangle(-152.5,-175.5,294,348), new cjs.Rectangle(-167,-179.5,344,354), new cjs.Rectangle(-175.5,-174.5,375,346), new cjs.Rectangle(-138,-173.5,283,346), new cjs.Rectangle(-144.5,-172,278,344), null];


(lib.hero_2_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body_img();
	this.instance.setTransform(-131,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-167.5,262,335);
p.frameBounds = [rect];


(lib.hero_1_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body_img();
	this.instance.setTransform(-131,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-167.5,262,335);
p.frameBounds = [rect];


(lib.gift_3_2_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.gift_3_2_img();
	this.instance.setTransform(-250,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-200,500,160);
p.frameBounds = [rect];


(lib.gift_3_1_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.gift_3_1_img();
	this.instance.setTransform(-250,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-200,500,160);
p.frameBounds = [rect];


(lib.gift_2_2_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.gift_2_2_img();
	this.instance.setTransform(-250,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-120,500,180);
p.frameBounds = [rect];


(lib.gift_2_1_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.gift_2_1_img();
	this.instance.setTransform(-250,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-120,500,180);
p.frameBounds = [rect];


(lib.gift_1_2_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.gift_1_2_img();
	this.instance.setTransform(-250,-335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-335,500,300);
p.frameBounds = [rect];


(lib.gift_1_1_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.gift_1_1_img();
	this.instance.setTransform(-250,-335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-335,500,300);
p.frameBounds = [rect];


(lib.forward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.forward_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.decor_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.decor_location_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.current_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.current_makeup_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.current_hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.current_hairstyle_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_0_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.current_face_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_face_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.current_face_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_face_0_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointer_img();
	this.instance.setTransform(-112,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
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


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
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
	this.shape.setTransform(400,300,1.167,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,0,1400,600);
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
	this.instance.setTransform(-26,-26);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-24,-24);

	this.instance_2 = new lib.gravity_explosion_3_img();
	this.instance_2.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect, rect=new cjs.Rectangle(-24,-24,48,48), rect];


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


(lib.blinking_light_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_2_img();
	this.instance.setTransform(-45,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-40,90,90);
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


(lib.skip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_img();
	this.instance.setTransform(-60,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
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


(lib.nav_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_3_img();
	this.instance.setTransform(-120,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect];


(lib.nav_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_img();
	this.instance.setTransform(-120,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect];


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.nav_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_3_img();
	this.instance.setTransform(-120,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect];


(lib.nav_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-120,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect];


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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


(lib.decor_large_buttons_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_large_buttons_1_img();
	this.instance.setTransform(-36,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-36,72,72);
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


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-79,138,158);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-74.4,-82.9,144.9,165.9), new cjs.Rectangle(-79.9,-86.9,151.8,173.8), new cjs.Rectangle(-85.3,-90.8,158.7,181.7), new cjs.Rectangle(-90.8,-94.8,165.6,189.6), new cjs.Rectangle(-96.2,-98.7,172.5,197.5), new cjs.Rectangle(-94.2,-98.7,172.5,197.5), new cjs.Rectangle(-92.2,-98.7,172.5,197.5), new cjs.Rectangle(-90.2,-98.7,172.5,197.5), new cjs.Rectangle(-88.2,-98.7,172.5,197.5), new cjs.Rectangle(-86.2,-98.7,172.5,197.5), new cjs.Rectangle(-84.2,-98.7,172.5,197.5), new cjs.Rectangle(-82.2,-98.7,172.5,197.5), new cjs.Rectangle(-80.2,-98.7,172.5,197.5), new cjs.Rectangle(-78.2,-98.7,172.5,197.5), new cjs.Rectangle(-76.2,-98.7,172.5,197.5), new cjs.Rectangle(-74.8,-94.8,165.6,189.6), new cjs.Rectangle(-73.4,-90.8,158.7,181.7), new cjs.Rectangle(-71.9,-86.9,151.8,173.8), new cjs.Rectangle(-70.5,-82.9,144.9,165.9), rect=new cjs.Rectangle(-69,-79,138,158), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("Ao0I1QjqjqgBlLQABlJDqjrQA6g6BAgsQDDiFD3AAQD5AADDCFQBAAsA5A6QDrDrAAFJQAAFLjrDqQjqDqlLABQlJgBjrjqg");

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
	mask.graphics.p("AAZCVIgZgYIgXAYIxlAAQg/ABgrgtQgsgsgBg9QABg9AsgrQArgsA/gBIRvAAIANAQIAOgQIRvAAQA/ABAsAsQArArABA9QgBA9grAsQgsAtg/gBg");
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


(lib.preloader_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-105.5,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-175,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(175,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(105,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(35,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-23,410,46.1);
p.frameBounds = [rect];


(lib.preloader_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-140,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-70,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(140,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(70,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-23,340,46.1);
p.frameBounds = [rect];


(lib.preloader_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_4_mc();
	this.instance.setTransform(800,550);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.preloader_2_4_mc();
	this.instance_1.setTransform(0,550);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.preloader_2_3_mc();
	this.instance_2.setTransform(800,500);
	this.instance_2.alpha = 0.148;

	this.instance_3 = new lib.preloader_2_3_mc();
	this.instance_3.setTransform(0,500);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.preloader_2_4_mc();
	this.instance_4.setTransform(0,450);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.preloader_2_4_mc();
	this.instance_5.setTransform(800,450);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.preloader_2_3_mc();
	this.instance_6.setTransform(0,400);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.preloader_2_3_mc();
	this.instance_7.setTransform(800,400);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.preloader_4_mc();
	this.instance_8.setTransform(400,50);
	this.instance_8.alpha = 0.199;

	this.instance_9 = new lib.preloader_3_mc();
	this.instance_9.setTransform(400,100);
	this.instance_9.alpha = 0.148;

	this.instance_10 = new lib.preloader_4_mc();
	this.instance_10.setTransform(400,150);
	this.instance_10.alpha = 0.102;

	this.instance_11 = new lib.preloader_3_mc();
	this.instance_11.setTransform(400,200);
	this.instance_11.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_12 = new lib.preloader_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

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

	// animation
	this.instance = new lib.languages_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(1));

	// graph
	this.instance_1 = new lib.languages_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60.5,-60.5,121.1,121.1), new cjs.Rectangle(-61,-61,122.1,122.1), new cjs.Rectangle(-61.5,-61.5,123.1,123.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-62.5,-62.5,125.1,125.1), new cjs.Rectangle(-63,-63,126.1,126.1), new cjs.Rectangle(-63.5,-63.5,127.1,127.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-64.5,-64.4,129,129), new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-64.5,-64.4,129,129), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-63.5,-63.5,127.1,127.1), new cjs.Rectangle(-63,-63,126.1,126.1), new cjs.Rectangle(-62.5,-62.5,125.1,125.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-61.5,-61.5,123.1,123.1), new cjs.Rectangle(-61,-61,122.1,122.1), new cjs.Rectangle(-60.5,-60.5,121.1,121.1), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-60.5,-60.5,121.1,121.1), new cjs.Rectangle(-61,-61,122.1,122.1), new cjs.Rectangle(-61.5,-61.5,123.1,123.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-62.5,-62.5,125.1,125.1), new cjs.Rectangle(-63,-63,126.1,126.1), new cjs.Rectangle(-63.5,-63.5,127.1,127.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-64.4,-64.5,129,129), new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-64.4,-64.5,129,129), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-63.5,-63.5,127.1,127.1), new cjs.Rectangle(-63,-63,126.1,126.1), new cjs.Rectangle(-62.5,-62.5,125.1,125.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-61.5,-61.5,123.1,123.1), new cjs.Rectangle(-61,-61,122.1,122.1), new cjs.Rectangle(-60.5,-60.5,121.1,121.1), new cjs.Rectangle(-60,-60,120,120)];


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
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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


(lib.title_filter_mc = function(mode,startPosition,loop) {
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
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.long_lamp_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.long_lamp_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:1},10).to({alpha:0.199},10).to({alpha:0.5},10).to({alpha:0.012},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-45,520,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.long_lamp_0_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.long_lamp_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-45,520,90);
p.frameBounds = [rect];


(lib.lips_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
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


(lib.hero3_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earrings1_mc();

	this.instance_1 = new lib.hero1_earrings2_mc();
	this.instance_1.setTransform(-0.8,4.6);

	this.instance_2 = new lib.hero1_earrings3_mc();
	this.instance_2.setTransform(0.7,-0.2);

	this.instance_3 = new lib.hero1_earrings4_mc();
	this.instance_3.setTransform(0.1,10.4);

	this.instance_4 = new lib.hero1_earrings5_mc();
	this.instance_4.setTransform(-1.3,0.8);

	this.instance_5 = new lib.hero1_earrings6_mc();
	this.instance_5.setTransform(-0.6,-0.8);

	this.instance_6 = new lib.hero1_earrings7_mc();
	this.instance_6.setTransform(-0.3,8.8);

	this.instance_7 = new lib.hero1_earrings8_mc();
	this.instance_7.setTransform(-0.3,2.4);

	this.instance_8 = new lib.hero1_earrings9_mc();
	this.instance_8.setTransform(-0.5,6.6);

	this.instance_9 = new lib.hero3_earrings10_mc();
	this.instance_9.setTransform(0.4,12.1);

	this.instance_10 = new lib.hero3_earrings11_mc();
	this.instance_10.setTransform(-1.5,16);

	this.instance_11 = new lib.hero3_earrings12_mc();
	this.instance_11.setTransform(0.6,15.9);

	this.instance_12 = new lib.hero3_earrings13_mc();
	this.instance_12.setTransform(-1.6,17.9);

	this.instance_13 = new lib.hero3_earrings14_mc();
	this.instance_13.setTransform(-1.5,7.9);

	this.instance_14 = new lib.hero3_earrings15_mc();
	this.instance_14.setTransform(-0.7,16.4);

	this.instance_15 = new lib.hero3_earrings16_mc();
	this.instance_15.setTransform(-0.4,14.6);

	this.instance_16 = new lib.hero3_earrings17_mc();
	this.instance_16.setTransform(-2.1,5.9);

	this.instance_17 = new lib.hero3_earrings18_mc();
	this.instance_17.setTransform(-0.1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-30.5,187,61);
p.frameBounds = [rect, new cjs.Rectangle(-99.1,-30.5,196.6,70.3), new cjs.Rectangle(-96,-29.1,193.4,57.9), new cjs.Rectangle(-96.1,-28,192.6,76.8), new cjs.Rectangle(-94.6,-29.6,186.6,60.9), new cjs.Rectangle(-92.1,-29.5,183.1,57.3), new cjs.Rectangle(-96.1,-29.1,191.6,75.9), new cjs.Rectangle(-95,-30,189.4,64.8), new cjs.Rectangle(-91.5,-28.1,181.9,69.4), new cjs.Rectangle(-92.6,-29.2,186,82.6), new cjs.Rectangle(-97.5,-29.5,192,91), new cjs.Rectangle(-95.1,-25.1,191.5,82), new cjs.Rectangle(-100.1,-29.1,197,94), new cjs.Rectangle(-100.5,-30.1,198,76), new cjs.Rectangle(-95,-29.6,188.5,92), new cjs.Rectangle(-95.6,-28.6,190.5,86.5), new cjs.Rectangle(-99.6,-27.1,195,66), new cjs.Rectangle(-98.6,-27,197,67.5), null];


(lib.hero2_earrings_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_mc();

	this.instance_1 = new lib.hero2_earrings2_mc();
	this.instance_1.setTransform(1.2,4.8);

	this.instance_2 = new lib.hero2_earrings3_mc();
	this.instance_2.setTransform(1.4,4.2);

	this.instance_3 = new lib.hero2_earrings4_mc();
	this.instance_3.setTransform(0.4,7.2);

	this.instance_4 = new lib.hero2_earrings5_mc();
	this.instance_4.setTransform(1.7,-3.8);

	this.instance_5 = new lib.hero2_earrings6_mc();
	this.instance_5.setTransform(0.7,6.7);

	this.instance_6 = new lib.hero2_earrings7_mc();
	this.instance_6.setTransform(1.9,4.2);

	this.instance_7 = new lib.hero2_earrings8_mc();
	this.instance_7.setTransform(-0.1,-4.8);

	this.instance_8 = new lib.hero2_earrings9_mc();
	this.instance_8.setTransform(1.9,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-40,191,80.1);
p.frameBounds = [rect, new cjs.Rectangle(-98,-38,198.5,85.5), new cjs.Rectangle(-97.6,-35.5,198.1,79.4), new cjs.Rectangle(-100.1,-38.5,201.1,91.4), new cjs.Rectangle(-97.5,-41,198.5,74.4), new cjs.Rectangle(-95.5,-36,192.5,85.4), new cjs.Rectangle(-95.1,-37,194.1,82.4), new cjs.Rectangle(-101.6,-37.5,203.1,65.4), new cjs.Rectangle(-99.1,-40.5,202.1,69.5), null];


(lib.hero1_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings9_mc();
	this.instance.setTransform(-0.5,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-28.1,181.9,69.4);
p.frameBounds = [rect];


(lib.hero1_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earrings1_mc();

	this.instance_1 = new lib.hero1_earrings2_mc();
	this.instance_1.setTransform(-0.8,4.6);

	this.instance_2 = new lib.hero1_earrings3_mc();
	this.instance_2.setTransform(0.7,-0.2);

	this.instance_3 = new lib.hero1_earrings4_mc();
	this.instance_3.setTransform(0.1,10.4);

	this.instance_4 = new lib.hero1_earrings5_mc();
	this.instance_4.setTransform(-1.3,0.8);

	this.instance_5 = new lib.hero1_earrings6_mc();
	this.instance_5.setTransform(-0.6,-0.8);

	this.instance_6 = new lib.hero1_earrings7_mc();
	this.instance_6.setTransform(-0.3,8.8);

	this.instance_7 = new lib.hero1_earrings8_mc();
	this.instance_7.setTransform(-0.3,2.4);

	this.instance_8 = new lib.hero1_earrings9_mc();
	this.instance_8.setTransform(-0.5,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-30.5,187,61);
p.frameBounds = [rect, new cjs.Rectangle(-99.1,-30.5,196.6,70.3), new cjs.Rectangle(-96,-29.1,193.4,57.9), new cjs.Rectangle(-96.1,-28,192.6,76.8), new cjs.Rectangle(-94.6,-29.6,186.6,60.9), new cjs.Rectangle(-92.1,-29.5,183.1,57.3), new cjs.Rectangle(-96.1,-29.1,191.6,75.9), new cjs.Rectangle(-95,-30,189.4,64.8), new cjs.Rectangle(-91.5,-28.1,181.9,69.4), null];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// earrings
	this.earrings = new lib.hero3_earrings_all_mc();
	this.earrings.setTransform(6,-105.1);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1,skewX:0.4,skewY:-5.2,x:0,y:-93.5},44).to({scaleY:1,skewX:0,skewY:0,x:6,y:-105.1},45).wait(1));

	// fringe
	this.fringe = new lib.hero3_fringe_all_mc();
	this.fringe.setTransform(11.4,-191.6);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-5.2,x:-1.6,y:-180.1},44).to({rotation:0,x:11.4,y:-191.6},45).wait(1));

	// eyes
	this.eyes = new lib.hero3_eyes_all_mc();
	this.eyes.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-5.2,x:-3,y:-147.7},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero3_eyebrows_all_mc();
	this.eyebrows.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-5.2,x:-3,y:-147.7},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_mc();
	this.shadows.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:-5.2,x:-3,y:-147.7},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all_mc();
	this.lips.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-5.2,x:-3,y:-147.7},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// faceart
	this.faceart = new lib.hero3_faceart_all_mc();
	this.faceart.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.faceart).to({rotation:-5.2,x:-3,y:-147.7},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all_mc();
	this.blush.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({rotation:-5.2,x:-3,y:-147.7},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// body
	this.instance = new lib.hero1_head_mc();
	this.instance.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.2,x:-3,y:-147.7},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// body
	this.instance_1 = new lib.hero1_hands_mc();
	this.instance_1.setTransform(-0.1,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:34.9},44).to({y:22.9},45).wait(1));

	// top
	this.top = new lib.hero3_top_all_mc();
	this.top.setTransform(4.9,28.4);

	this.timeline.addTween(cjs.Tween.get(this.top).to({y:40.4},44).to({y:28.4},45).wait(1));

	// bottom
	this.bottom = new lib.hero3_skirt_all_mc();
	this.bottom.setTransform(-5.1,199.3);

	this.timeline.addTween(cjs.Tween.get(this.bottom).to({y:211.3},44).to({y:199.3},45).wait(1));

	// dress
	this.dress = new lib.hero3_dress_all_mc();
	this.dress.setTransform(-2.6,130.8);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:142.8},44).to({y:130.8},45).wait(1));

	// body
	this.instance_2 = new lib.hero_1_body_mc();
	this.instance_2.setTransform(0,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:115.5},44).to({y:103.5},45).wait(1));

	// hair
	this.hair = new lib.hero3_hair_all_mc();
	this.hair.setTransform(11.4,-191.6);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-5.2,x:-1.6,y:-180.1},44).to({rotation:0,x:11.4,y:-191.6},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.6,-317.1,307,623);
p.frameBounds = [rect, new cjs.Rectangle(-149.6,-316.9,306.8,623), new cjs.Rectangle(-149.6,-316.7,306.6,623.1), new cjs.Rectangle(-149.6,-317,306.7,623.6), new cjs.Rectangle(-149.6,-316.8,306.5,623.8), new cjs.Rectangle(-149.6,-317.1,306.8,624.3), new cjs.Rectangle(-149.6,-316.9,306.5,624.4), new cjs.Rectangle(-149.6,-317.2,306.6,624.9), new cjs.Rectangle(-149.6,-317,306.4,625), new cjs.Rectangle(-149.6,-317.3,306.6,625.6), new cjs.Rectangle(-149.6,-317.2,306.4,625.8), new cjs.Rectangle(-149.6,-317.4,306.5,626.2), new cjs.Rectangle(-149.6,-317.2,306.3,626.3), new cjs.Rectangle(-149.6,-317.5,306.4,626.9), new cjs.Rectangle(-149.6,-317.3,306.2,627), new cjs.Rectangle(-149.6,-317.6,306.4,627.6), new cjs.Rectangle(-149.6,-317.4,306.2,627.6), new cjs.Rectangle(-149.6,-317.7,306.3,628.2), new cjs.Rectangle(-149.6,-317.5,306.1,628.2), new cjs.Rectangle(-149.6,-317.3,305.9,628.4), new cjs.Rectangle(-149.6,-317.5,306,628.8), new cjs.Rectangle(-149.6,-317.3,305.7,628.9), new cjs.Rectangle(-149.6,-317.6,305.9,629.5), new cjs.Rectangle(-149.6,-317.5,305.7,629.6), new cjs.Rectangle(-149.6,-317.7,305.9,630.1), new cjs.Rectangle(-149.6,-317.5,305.6,630.1), new cjs.Rectangle(-149.6,-317.8,305.8,630.8), new cjs.Rectangle(-149.6,-317.6,305.6,630.8), new cjs.Rectangle(-149.7,-318,305.8,631.5), new cjs.Rectangle(-150.1,-317.7,305.9,631.5), new cjs.Rectangle(-150.9,-317.9,306.8,632), new cjs.Rectangle(-151.2,-317.8,306.9,632.1), new cjs.Rectangle(-151.9,-318,307.8,632.6), new cjs.Rectangle(-152.3,-317.8,307.9,632.7), new cjs.Rectangle(-153,-318.1,308.8,633.2), new cjs.Rectangle(-153.4,-317.9,308.9,633.3), new cjs.Rectangle(-154.1,-318.1,310.3,633.8), new cjs.Rectangle(-154.5,-318,310.4,633.9), new cjs.Rectangle(-154.8,-317.7,310.6,633.9), new cjs.Rectangle(-155.5,-318,312.1,634.5), new cjs.Rectangle(-155.8,-317.8,312.3,634.6), new cjs.Rectangle(-156.5,-318.1,313.7,635.1), new cjs.Rectangle(-156.9,-317.8,313.9,635.1), new cjs.Rectangle(-157.6,-318.1,315.3,635.7), new cjs.Rectangle(-158.4,-318.4,316.6,636.2), new cjs.Rectangle(-157.6,-318.1,315.3,635.7), new cjs.Rectangle(-157,-317.8,313.9,635.1), new cjs.Rectangle(-156.6,-318,313.7,635.1), new cjs.Rectangle(-155.8,-317.8,312.3,634.6), new cjs.Rectangle(-155.5,-318,312.1,634.5), new cjs.Rectangle(-155.2,-318.2,312,634.4), new cjs.Rectangle(-154.5,-317.9,310.5,633.9), new cjs.Rectangle(-154.1,-318.1,310.3,633.8), new cjs.Rectangle(-153.4,-317.9,308.9,633.3), new cjs.Rectangle(-153,-318.1,308.8,633.3), new cjs.Rectangle(-152.4,-317.8,307.9,632.7), new cjs.Rectangle(-152,-318,307.8,632.6), new cjs.Rectangle(-151.3,-317.7,307,632.1), new cjs.Rectangle(-150.9,-317.9,306.8,632), new cjs.Rectangle(-150.2,-317.6,305.9,631.5), new cjs.Rectangle(-149.9,-317.8,305.8,631.4), new cjs.Rectangle(-149.6,-317.6,305.5,630.9), new cjs.Rectangle(-149.6,-317.7,305.7,630.8), new cjs.Rectangle(-149.6,-317.9,305.9,630.7), new cjs.Rectangle(-149.6,-317.6,305.7,630.1), new cjs.Rectangle(-149.6,-317.8,306,630.1), new cjs.Rectangle(-149.6,-317.5,305.8,629.5), new cjs.Rectangle(-149.6,-317.8,306,629.5), new cjs.Rectangle(-149.6,-317.5,305.9,628.9), new cjs.Rectangle(-149.6,-317.7,306.1,628.8), new cjs.Rectangle(-149.6,-317.4,305.9,628.3), new cjs.Rectangle(-149.6,-317.6,306.2,628.2), new cjs.Rectangle(-149.6,-317.3,306,627.7), new cjs.Rectangle(-149.6,-317.5,306.2,627.6), new cjs.Rectangle(-149.6,-317.2,306,627), new cjs.Rectangle(-149.6,-317.3,306.2,626.9), new cjs.Rectangle(-149.6,-317.6,306.5,626.9), new cjs.Rectangle(-149.6,-317.3,306.4,626.3), new cjs.Rectangle(-149.6,-317.5,306.6,626.3), new cjs.Rectangle(-149.6,-317.2,306.4,625.7), new cjs.Rectangle(-149.6,-317.3,306.6,625.6), new cjs.Rectangle(-149.6,-317.1,306.4,625.1), new cjs.Rectangle(-149.6,-317.2,306.6,624.9), new cjs.Rectangle(-149.6,-316.9,306.5,624.3), new cjs.Rectangle(-149.6,-317.1,306.7,624.3), new cjs.Rectangle(-149.6,-316.9,306.6,623.8), new cjs.Rectangle(-149.6,-317,306.8,623.7), new cjs.Rectangle(-149.6,-316.7,306.6,623.1), new cjs.Rectangle(-149.6,-316.9,306.7,623), new cjs.Rectangle(-149.6,-317.1,307,623)];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// earrings
	this.earrings = new lib.hero2_earrings_mc();
	this.earrings.setTransform(-10,-95.7);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1,skewX:0.3,skewY:4.5,x:-5,y:-89.1},59).to({scaleY:1,skewX:0,skewY:0,x:-10,y:-95.7},60).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(-13.6,-156.6);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:4.5,x:-5.8,y:-150.1},59).to({rotation:0,x:-13.6,y:-156.6},60).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:4.5,x:-0.5,y:-150.2},59).to({rotation:0,x:-8.3,y:-157.2},60).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:4.5,x:-0.5,y:-150.2},59).to({rotation:0,x:-8.3,y:-157.2},60).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:4.5,x:-0.5,y:-150.2},59).to({rotation:0,x:-8.3,y:-157.2},60).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:4.5,x:-0.5,y:-150.2},59).to({rotation:0,x:-8.3,y:-157.2},60).wait(1));

	// faceart
	this.faceart = new lib.hero2_faceart_all_mc();
	this.faceart.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.faceart).to({rotation:4.5,x:-0.5,y:-150.2},59).to({rotation:0,x:-8.3,y:-157.2},60).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({rotation:4.5,x:-0.5,y:-150.2},59).to({rotation:0,x:-8.3,y:-157.2},60).wait(1));

	// body
	this.instance = new lib.hero2_head_mc();
	this.instance.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.5,x:-0.5,y:-150.2},59).to({rotation:0,x:-8.3,y:-157.2},60).wait(1));

	// body
	this.instance_1 = new lib.hero2_hands_mc();
	this.instance_1.setTransform(0.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:28.4},59).to({y:21.4},60).wait(1));

	// top
	this.top = new lib.hero2_top_all_mc();
	this.top.setTransform(-1,32.3);

	this.timeline.addTween(cjs.Tween.get(this.top).to({y:39.3},59).to({y:32.3},60).wait(1));

	// bottom
	this.bottom = new lib.hero2_skirt_all_mc();
	this.bottom.setTransform(15.4,198);

	this.timeline.addTween(cjs.Tween.get(this.bottom).to({y:205},59).to({y:198},60).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(19.4,123);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:130},59).to({y:123},60).wait(1));

	// body
	this.instance_2 = new lib.hero_2_body_mc();
	this.instance_2.setTransform(0,101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:108.8},59).to({y:101.8},60).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(-13.6,-156.6);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:4.5,x:-5.8,y:-150.1},59).to({rotation:0,x:-13.6,y:-156.6},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.1,-304.6,358,606.1);
p.frameBounds = [rect, new cjs.Rectangle(-179,-304.6,357.9,606.2), new cjs.Rectangle(-179,-304.5,357.9,606.3), new cjs.Rectangle(-178.9,-304.4,357.8,606.3), new cjs.Rectangle(-179.2,-304.9,358.1,606.8), new cjs.Rectangle(-179.2,-304.9,358,607), new cjs.Rectangle(-179.1,-304.8,358,607), new cjs.Rectangle(-179.4,-305.3,358.3,607.6), new cjs.Rectangle(-179.4,-305.2,358.3,607.7), new cjs.Rectangle(-179.3,-305.2,358.2,607.7), new cjs.Rectangle(-179.7,-305.7,358.6,608.3), new cjs.Rectangle(-179.6,-305.6,358.5,608.4), new cjs.Rectangle(-179.5,-305.5,358.4,608.4), new cjs.Rectangle(-179.5,-305.5,358.4,608.5), new cjs.Rectangle(-179.8,-306,358.7,609.1), new cjs.Rectangle(-179.7,-305.9,358.6,609.2), new cjs.Rectangle(-179.7,-305.8,358.5,609.2), new cjs.Rectangle(-180,-306.3,358.9,609.8), new cjs.Rectangle(-179.9,-306.2,358.8,609.9), new cjs.Rectangle(-179.9,-306.2,358.8,610), new cjs.Rectangle(-180.2,-306.7,359.1,610.5), new cjs.Rectangle(-180.1,-306.6,359,610.6), new cjs.Rectangle(-180.1,-306.5,359,610.6), new cjs.Rectangle(-180,-306.5,358.9,610.7), new cjs.Rectangle(-180.4,-307,359.3,611.3), new cjs.Rectangle(-180.3,-306.9,359.2,611.3), new cjs.Rectangle(-180.2,-306.8,359.1,611.4), new cjs.Rectangle(-180.6,-307.3,359.5,612), new cjs.Rectangle(-180.5,-307.3,359.4,612.1), new cjs.Rectangle(-180.4,-307.2,359.3,612.2), new cjs.Rectangle(-180.9,-307.7,359.8,612.7), new cjs.Rectangle(-180.8,-307.6,359.7,612.8), new cjs.Rectangle(-180.7,-307.6,359.5,612.9), new cjs.Rectangle(-181.1,-308.1,360,613.5), new cjs.Rectangle(-181,-308,359.9,613.6), new cjs.Rectangle(-180.9,-307.9,359.8,613.6), new cjs.Rectangle(-180.8,-307.9,359.7,613.6), new cjs.Rectangle(-181.1,-308.3,360,614.2), new cjs.Rectangle(-181.1,-308.3,360,614.3), new cjs.Rectangle(-181,-308.2,359.9,614.3), new cjs.Rectangle(-181.4,-308.7,360.3,614.9), new cjs.Rectangle(-181.3,-308.6,360.2,615), new cjs.Rectangle(-181.2,-308.6,360.1,615.1), new cjs.Rectangle(-181.6,-309,360.5,615.6), new cjs.Rectangle(-181.5,-308.9,360.4,615.6), new cjs.Rectangle(-181.4,-308.9,360.3,615.7), new cjs.Rectangle(-181.3,-308.8,360.2,615.8), new cjs.Rectangle(-181.7,-309.3,360.5,616.4), new cjs.Rectangle(-181.6,-309.2,360.5,616.3), new cjs.Rectangle(-181.5,-309.1,360.4,616.4), new cjs.Rectangle(-181.8,-309.6,360.7,617), new cjs.Rectangle(-181.7,-309.6,360.6,617.1), new cjs.Rectangle(-181.7,-309.5,360.5,617.2), new cjs.Rectangle(-182,-309.9,360.9,617.7), new cjs.Rectangle(-181.9,-309.9,360.8,617.8), new cjs.Rectangle(-181.9,-309.8,360.8,617.9), new cjs.Rectangle(-181.8,-309.8,360.7,617.9), new cjs.Rectangle(-182.1,-310.2,361,618.4), new cjs.Rectangle(-182.1,-310.1,361,618.5), new cjs.Rectangle(-182.4,-310.5,361.3,619), new cjs.Rectangle(-182.1,-310.1,361,618.5), new cjs.Rectangle(-182.1,-310.1,361,618.3), new cjs.Rectangle(-182.2,-310.3,361.1,618.4), new cjs.Rectangle(-181.9,-309.8,360.8,617.9), new cjs.Rectangle(-182,-309.9,360.9,617.8), new cjs.Rectangle(-182.1,-309.9,361,617.7), new cjs.Rectangle(-181.7,-309.5,360.5,617.2), new cjs.Rectangle(-181.8,-309.5,360.7,617.1), new cjs.Rectangle(-181.8,-309.6,360.7,617.1), new cjs.Rectangle(-181.5,-309.2,360.4,616.5), rect=new cjs.Rectangle(-181.6,-309.2,360.5,616.3), rect, new cjs.Rectangle(-181.7,-309.2,360.6,616.2), new cjs.Rectangle(-181.3,-308.9,360.2,615.7), new cjs.Rectangle(-181.4,-308.9,360.3,615.7), new cjs.Rectangle(-181.5,-309,360.4,615.6), new cjs.Rectangle(-181.1,-308.5,360,615), new cjs.Rectangle(-181.2,-308.6,360.1,615), new cjs.Rectangle(-181.3,-308.6,360.2,614.9), new cjs.Rectangle(-181,-308.2,359.9,614.3), rect=new cjs.Rectangle(-181.1,-308.3,360,614.3), rect, new cjs.Rectangle(-181.2,-308.3,360.1,614.1), new cjs.Rectangle(-180.8,-307.8,359.7,613.5), new cjs.Rectangle(-180.9,-307.9,359.8,613.5), new cjs.Rectangle(-181,-308,359.9,613.5), new cjs.Rectangle(-180.6,-307.5,359.5,612.9), new cjs.Rectangle(-180.7,-307.6,359.6,612.8), new cjs.Rectangle(-180.8,-307.6,359.7,612.7), new cjs.Rectangle(-180.4,-307.1,359.3,612.1), new cjs.Rectangle(-180.5,-307.2,359.4,612.1), new cjs.Rectangle(-180.6,-307.2,359.5,612), new cjs.Rectangle(-180.6,-307.3,359.5,611.9), new cjs.Rectangle(-180.3,-306.8,359.2,611.4), new cjs.Rectangle(-180.4,-306.8,359.3,611.2), new cjs.Rectangle(-180.5,-306.9,359.4,611.2), new cjs.Rectangle(-180.1,-306.5,359,610.7), new cjs.Rectangle(-180.2,-306.5,359,610.6), new cjs.Rectangle(-180.2,-306.6,359.1,610.6), new cjs.Rectangle(-179.8,-306.1,358.7,609.9), new cjs.Rectangle(-180,-306.2,358.9,609.8), new cjs.Rectangle(-180,-306.3,358.9,609.9), new cjs.Rectangle(-180.1,-306.3,359,609.8), new cjs.Rectangle(-179.7,-305.8,358.5,609.2), new cjs.Rectangle(-179.7,-305.9,358.6,609.1), new cjs.Rectangle(-179.9,-305.9,358.8,609.1), new cjs.Rectangle(-179.4,-305.5,358.3,608.5), new cjs.Rectangle(-179.5,-305.5,358.4,608.4), new cjs.Rectangle(-179.6,-305.5,358.5,608.3), new cjs.Rectangle(-179.2,-305.1,358.1,607.7), new cjs.Rectangle(-179.3,-305.1,358.2,607.7), new cjs.Rectangle(-179.4,-305.3,358.3,607.7), new cjs.Rectangle(-179.5,-305.3,358.4,607.6), new cjs.Rectangle(-179.1,-304.8,358,607), new cjs.Rectangle(-179.2,-304.9,358,607), new cjs.Rectangle(-179.3,-304.9,358.2,606.8), new cjs.Rectangle(-178.9,-304.4,357.8,606.3), new cjs.Rectangle(-178.9,-304.5,357.8,606.2), new cjs.Rectangle(-178.9,-304.5,357.8,606.1), new cjs.Rectangle(-179.1,-304.6,358,606.1)];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_fringe_main_mc();
	this.instance.setTransform(-13.6,-156.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.5,x:-5.8,y:-150.1},54).to({rotation:0,x:-13.6,y:-156.6},55).wait(1));

	// animation
	this.instance_1 = new lib.hero2_eyes_main_mc();
	this.instance_1.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.5,x:-0.5,y:-150.2},54).to({rotation:0,x:-8.3,y:-157.2},55).wait(1));

	// animation
	this.instance_2 = new lib.hero2_eyebrows_main_mc();
	this.instance_2.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:4.5,x:-0.5,y:-150.2},54).to({rotation:0,x:-8.3,y:-157.2},55).wait(1));

	// animation
	this.instance_3 = new lib.hero2_shadows_main_mc();
	this.instance_3.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.5,x:-0.5,y:-150.2},54).to({rotation:0,x:-8.3,y:-157.2},55).wait(1));

	// animation
	this.instance_4 = new lib.hero2_lips_main_mc();
	this.instance_4.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:4.5,x:-0.5,y:-150.2},54).to({rotation:0,x:-8.3,y:-157.2},55).wait(1));

	// animation
	this.instance_5 = new lib.hero2_faceart_main_mc();
	this.instance_5.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4.5,x:-0.5,y:-150.2},54).to({rotation:0,x:-8.3,y:-157.2},55).wait(1));

	// animation
	this.instance_6 = new lib.hero2_head_mc();
	this.instance_6.setTransform(-8.3,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:4.5,x:-0.5,y:-150.2},54).to({rotation:0,x:-8.3,y:-157.2},55).wait(1));

	// animation
	this.instance_7 = new lib.hero2_hands_mc();
	this.instance_7.setTransform(0.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:28.4},54).to({y:21.4},55).wait(1));

	// animation
	this.instance_8 = new lib.hero2_top_main_mc();
	this.instance_8.setTransform(-1,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:39.3},54).to({y:32.3},55).wait(1));

	// animation
	this.instance_9 = new lib.hero2_skirt_main_mc();
	this.instance_9.setTransform(15.4,198);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:205},54).to({y:198},55).wait(1));

	// animation
	this.instance_10 = new lib.hero_2_body_mc();
	this.instance_10.setTransform(0,101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:108.8},54).to({y:101.8},55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191.1,-341.1,327,625.6);
p.frameBounds = [rect, new cjs.Rectangle(-191,-341.1,327.1,625.7), new cjs.Rectangle(-190.9,-341,327.2,625.7), new cjs.Rectangle(-190.7,-340.9,327.3,625.8), new cjs.Rectangle(-190.9,-341.4,328.3,626.4), new cjs.Rectangle(-190.9,-341.4,328.4,626.5), new cjs.Rectangle(-190.7,-341.3,328.5,626.6), new cjs.Rectangle(-191,-341.8,329.6,627.2), new cjs.Rectangle(-190.8,-341.8,329.7,627.4), new cjs.Rectangle(-190.7,-341.7,329.7,627.4), new cjs.Rectangle(-190.9,-342.3,330.7,628.1), new cjs.Rectangle(-190.8,-342.2,330.8,628.1), new cjs.Rectangle(-190.7,-342.1,330.9,628.2), new cjs.Rectangle(-190.8,-342.6,331.9,628.8), new cjs.Rectangle(-190.8,-342.6,332,628.9), new cjs.Rectangle(-190.6,-342.5,332.1,629), new cjs.Rectangle(-190.9,-343,333.1,629.6), new cjs.Rectangle(-190.7,-343,333.2,629.7), new cjs.Rectangle(-190.6,-342.9,333.3,629.7), new cjs.Rectangle(-190.8,-343.4,334.3,630.3), new cjs.Rectangle(-190.7,-343.3,334.4,630.4), new cjs.Rectangle(-190.5,-343.3,334.5,630.5), new cjs.Rectangle(-190.7,-343.8,335.4,631.2), new cjs.Rectangle(-190.6,-343.7,335.5,631.2), new cjs.Rectangle(-190.5,-343.7,335.6,631.3), new cjs.Rectangle(-190.7,-344.2,336.6,631.9), new cjs.Rectangle(-190.6,-344.1,336.7,632), new cjs.Rectangle(-190.5,-344,336.8,632), new cjs.Rectangle(-190.7,-344.6,337.8,632.7), new cjs.Rectangle(-190.6,-344.6,337.9,632.8), new cjs.Rectangle(-190.4,-344.5,338,632.9), new cjs.Rectangle(-190.6,-345,338.9,633.5), new cjs.Rectangle(-190.5,-344.9,339,633.5), new cjs.Rectangle(-190.4,-344.9,339,633.7), new cjs.Rectangle(-190.6,-345.4,340,634.3), new cjs.Rectangle(-190.4,-345.3,340.1,634.3), new cjs.Rectangle(-190.3,-345.2,340.2,634.4), new cjs.Rectangle(-190.5,-345.7,341.2,635), new cjs.Rectangle(-190.4,-345.7,341.3,635.1), new cjs.Rectangle(-190.3,-345.6,341.4,635.1), new cjs.Rectangle(-190.4,-346.1,342.3,635.8), new cjs.Rectangle(-190.3,-346,342.4,635.8), new cjs.Rectangle(-190.2,-345.9,342.5,635.8), new cjs.Rectangle(-190.4,-346.4,343.4,636.5), new cjs.Rectangle(-190.2,-346.4,343.5,636.6), new cjs.Rectangle(-190.1,-346.3,343.6,636.7), new cjs.Rectangle(-190.3,-346.8,344.5,637.2), new cjs.Rectangle(-190.1,-346.7,344.6,637.3), new cjs.Rectangle(-190,-346.7,344.7,637.3), new cjs.Rectangle(-190.2,-347.1,345.7,638), new cjs.Rectangle(-190.1,-347.1,345.8,638.1), new cjs.Rectangle(-190,-347,345.9,638.1), new cjs.Rectangle(-190.1,-347.5,346.8,638.7), new cjs.Rectangle(-190,-347.4,346.9,638.7), new cjs.Rectangle(-190.2,-347.9,347.8,639.3), new cjs.Rectangle(-190,-347.3,346.9,638.7), new cjs.Rectangle(-190.1,-347.4,346.8,638.7), new cjs.Rectangle(-190,-347,345.9,638.1), new cjs.Rectangle(-190.1,-347.1,345.8,638.1), new cjs.Rectangle(-190.1,-347.1,345.7,638), new cjs.Rectangle(-190.1,-346.6,344.8,637.3), new cjs.Rectangle(-190.1,-346.7,344.7,637.3), new cjs.Rectangle(-190.2,-346.8,344.6,637.3), new cjs.Rectangle(-190.2,-346.3,343.7,636.6), new cjs.Rectangle(-190.2,-346.3,343.5,636.6), new cjs.Rectangle(-190.3,-346.4,343.5,636.5), new cjs.Rectangle(-190.5,-346.5,343.4,636.4), new cjs.Rectangle(-190.2,-346,342.4,635.8), new cjs.Rectangle(-190.4,-346,342.3,635.7), new cjs.Rectangle(-190.6,-346.1,342.3,635.7), new cjs.Rectangle(-190.3,-345.6,341.3,635.1), new cjs.Rectangle(-190.4,-345.7,341.2,635), new cjs.Rectangle(-190.6,-345.8,341.1,635), new cjs.Rectangle(-190.4,-345.2,340.2,634.3), new cjs.Rectangle(-190.5,-345.3,340.1,634.3), new cjs.Rectangle(-190.6,-345.4,340,634.2), new cjs.Rectangle(-190.4,-344.8,339,633.5), new cjs.Rectangle(-190.6,-344.9,338.9,633.5), new cjs.Rectangle(-190.7,-345,338.9,633.4), new cjs.Rectangle(-190.5,-344.5,337.9,632.8), new cjs.Rectangle(-190.6,-344.5,337.8,632.7), new cjs.Rectangle(-190.8,-344.6,337.7,632.6), new cjs.Rectangle(-190.5,-344.1,336.8,632), new cjs.Rectangle(-190.6,-344.1,336.7,631.9), new cjs.Rectangle(-190.8,-344.1,336.6,631.8), new cjs.Rectangle(-190.5,-343.7,335.6,631.2), new cjs.Rectangle(-190.7,-343.7,335.5,631.2), new cjs.Rectangle(-190.8,-343.8,335.4,631.1), new cjs.Rectangle(-190.6,-343.3,334.4,630.4), new cjs.Rectangle(-190.7,-343.3,334.3,630.4), new cjs.Rectangle(-190.8,-343.4,334.2,630.3), new cjs.Rectangle(-190.6,-342.9,333.3,629.7), new cjs.Rectangle(-190.8,-343,333.2,629.7), new cjs.Rectangle(-190.9,-343.1,333.1,629.6), new cjs.Rectangle(-190.7,-342.5,332,628.9), new cjs.Rectangle(-190.7,-342.6,332,628.9), new cjs.Rectangle(-190.9,-342.6,331.9,628.8), new cjs.Rectangle(-190.7,-342.1,330.9,628.2), new cjs.Rectangle(-190.8,-342.2,330.8,628.1), new cjs.Rectangle(-191,-342.2,330.7,627.9), new cjs.Rectangle(-190.7,-341.7,329.7,627.4), new cjs.Rectangle(-190.8,-341.7,329.5,627.2), new cjs.Rectangle(-190.9,-341.8,329.5,627.2), new cjs.Rectangle(-190.7,-341.4,328.5,626.6), new cjs.Rectangle(-190.9,-341.4,328.4,626.5), new cjs.Rectangle(-191,-341.4,328.3,626.4), new cjs.Rectangle(-190.7,-340.9,327.3,625.8), new cjs.Rectangle(-190.9,-340.9,327.2,625.7), new cjs.Rectangle(-191,-341,327.1,625.7), new cjs.Rectangle(-191.1,-341.1,327,625.6)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(6,-105.1);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1,skewX:-2.9,skewY:-5.7,x:-0.3,y:-92.8},54).to({scaleY:1,skewX:0,skewY:0,x:6,y:-105.1},50).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(11.4,-191.6);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-5.7,x:-2.8,y:-179.4},54).to({rotation:0,x:11.4,y:-191.6},50).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-5.7,x:-3.9,y:-146.9},54).to({rotation:0,x:7,y:-159.5},50).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-5.7,x:-3.9,y:-146.9},54).to({rotation:0,x:7,y:-159.5},50).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_mc();
	this.shadows.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:-5.7,x:-3.9,y:-146.9},54).to({rotation:0,x:7,y:-159.5},50).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-5.7,x:-3.9,y:-146.9},54).to({rotation:0,x:7,y:-159.5},50).wait(1));

	// faceart
	this.faceart = new lib.hero1_faceart_all_mc();
	this.faceart.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.faceart).to({rotation:-5.7,x:-3.9,y:-146.9},54).to({rotation:0,x:7,y:-159.5},50).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({rotation:-5.7,x:-3.9,y:-146.9},54).to({rotation:0,x:7,y:-159.5},50).wait(1));

	// body
	this.instance = new lib.hero1_head_mc();
	this.instance.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.7,x:-3.9,y:-146.9},54).to({rotation:0,x:7,y:-159.5},50).wait(1));

	// body
	this.instance_1 = new lib.hero1_hands_mc();
	this.instance_1.setTransform(-0.1,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:34.9},54).to({y:22.9},50).wait(1));

	// top
	this.top = new lib.hero1_top_all_mc();
	this.top.setTransform(4.9,28.4);

	this.timeline.addTween(cjs.Tween.get(this.top).to({y:40.4},54).to({y:28.4},50).wait(1));

	// bottom
	this.bottom = new lib.hero1_skirt_all_mc();
	this.bottom.setTransform(-5.1,199.3);

	this.timeline.addTween(cjs.Tween.get(this.bottom).to({y:211.3},54).to({y:199.3},50).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(-2.6,130.8);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:142.8},54).to({y:130.8},50).wait(1));

	// body
	this.instance_2 = new lib.hero_1_body_mc();
	this.instance_2.setTransform(0,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:115.5},54).to({y:103.5},50).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(11.4,-191.6);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-5.7,x:-2.8,y:-179.4},54).to({rotation:0,x:11.4,y:-191.6},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.6,-317.1,307,623);
p.frameBounds = [rect, new cjs.Rectangle(-149.6,-316.9,306.8,623), new cjs.Rectangle(-149.6,-316.8,306.7,623.1), new cjs.Rectangle(-149.6,-317.1,306.8,623.6), new cjs.Rectangle(-149.6,-316.9,306.7,623.7), new cjs.Rectangle(-149.6,-317.2,306.9,624.2), new cjs.Rectangle(-149.6,-317.1,306.7,624.3), new cjs.Rectangle(-149.6,-316.9,306.4,624.3), new cjs.Rectangle(-149.6,-317.3,306.6,624.9), new cjs.Rectangle(-149.6,-317.1,306.4,624.9), new cjs.Rectangle(-149.6,-317.4,306.7,625.4), new cjs.Rectangle(-149.6,-317.2,306.4,625.5), new cjs.Rectangle(-149.6,-317.6,306.6,626.1), new cjs.Rectangle(-149.6,-317.4,306.4,626.1), new cjs.Rectangle(-149.6,-317.2,306.2,626.1), new cjs.Rectangle(-149.6,-317.5,306.3,626.7), new cjs.Rectangle(-149.6,-317.3,306.2,626.7), new cjs.Rectangle(-149.6,-317.7,306.4,627.3), new cjs.Rectangle(-149.6,-317.5,306.2,627.3), new cjs.Rectangle(-149.6,-317.8,306.3,627.9), new cjs.Rectangle(-149.6,-317.6,306.2,627.9), new cjs.Rectangle(-149.6,-317.5,306,628), new cjs.Rectangle(-149.6,-317.8,306.2,628.5), new cjs.Rectangle(-149.6,-317.6,305.9,628.6), new cjs.Rectangle(-149.6,-317.9,306.1,629.1), new cjs.Rectangle(-149.6,-317.7,305.9,629.1), new cjs.Rectangle(-149.6,-317.6,305.7,629.2), new cjs.Rectangle(-149.6,-317.9,305.8,629.7), new cjs.Rectangle(-149.6,-317.7,305.6,629.8), new cjs.Rectangle(-149.6,-318,305.8,630.3), new cjs.Rectangle(-149.6,-317.9,305.6,630.4), new cjs.Rectangle(-149.6,-318.2,305.8,630.9), new cjs.Rectangle(-149.9,-318,305.8,631), new cjs.Rectangle(-150.2,-317.8,306,631), new cjs.Rectangle(-151,-318.1,306.9,631.5), new cjs.Rectangle(-151.3,-317.9,307,631.6), new cjs.Rectangle(-152,-318.2,307.8,632.1), new cjs.Rectangle(-152.3,-318,307.9,632.1), new cjs.Rectangle(-153,-318.4,308.8,632.7), new cjs.Rectangle(-153.3,-318.1,308.9,632.6), new cjs.Rectangle(-153.6,-318,309,632.8), new cjs.Rectangle(-154.3,-318.3,310.4,633.2), new cjs.Rectangle(-154.6,-318.1,310.6,633.3), new cjs.Rectangle(-155.3,-318.4,312,633.8), new cjs.Rectangle(-155.6,-318.2,312.1,633.9), new cjs.Rectangle(-156.3,-318.5,313.6,634.4), new cjs.Rectangle(-156.6,-318.3,313.7,634.4), new cjs.Rectangle(-156.9,-318.2,313.9,634.5), new cjs.Rectangle(-157.6,-318.5,315.3,635), new cjs.Rectangle(-157.9,-318.3,315.5,635.1), new cjs.Rectangle(-158.5,-318.6,316.9,635.5), new cjs.Rectangle(-158.8,-318.4,317,635.6), new cjs.Rectangle(-159.2,-318.3,317.2,635.7), new cjs.Rectangle(-159.9,-318.5,318.7,636.2), new cjs.Rectangle(-160.6,-318.8,320,636.6), new cjs.Rectangle(-159.8,-318.5,318.6,636.1), new cjs.Rectangle(-159.1,-318.3,317.2,635.6), new cjs.Rectangle(-158.8,-318.4,317,635.6), new cjs.Rectangle(-158.4,-318.6,316.8,635.5), new cjs.Rectangle(-157.7,-318.3,315.4,635), new cjs.Rectangle(-157.4,-318.5,315.2,634.9), new cjs.Rectangle(-156.6,-318.3,313.8,634.4), new cjs.Rectangle(-156.3,-318.5,313.7,634.4), new cjs.Rectangle(-155.6,-318.2,312.2,633.9), new cjs.Rectangle(-155.3,-318.4,312,633.8), new cjs.Rectangle(-154.6,-318.1,310.5,633.3), new cjs.Rectangle(-154.3,-318.3,310.4,633.2), new cjs.Rectangle(-153.5,-318,309,632.8), new cjs.Rectangle(-153.2,-318.2,308.9,632.7), new cjs.Rectangle(-152.5,-317.9,308,632.1), new cjs.Rectangle(-152.1,-318.1,307.9,632.1), new cjs.Rectangle(-151.8,-318.2,307.8,632), new cjs.Rectangle(-151.1,-318,306.9,631.5), new cjs.Rectangle(-150.7,-318.1,306.8,631.4), new cjs.Rectangle(-150,-317.9,305.9,631), new cjs.Rectangle(-149.7,-318.1,305.8,630.9), new cjs.Rectangle(-149.6,-317.8,305.6,630.4), new cjs.Rectangle(-149.6,-318,305.8,630.3), new cjs.Rectangle(-149.6,-317.7,305.7,629.8), new cjs.Rectangle(-149.6,-317.9,305.9,629.7), new cjs.Rectangle(-149.6,-317.6,305.7,629.2), new cjs.Rectangle(-149.6,-317.8,305.9,629.1), new cjs.Rectangle(-149.6,-317.9,306.1,629), new cjs.Rectangle(-149.6,-317.7,305.9,628.6), new cjs.Rectangle(-149.6,-317.8,306.2,628.5), new cjs.Rectangle(-149.6,-317.6,306,628), new cjs.Rectangle(-149.6,-317.7,306.2,627.9), new cjs.Rectangle(-149.6,-317.4,306.1,627.3), new cjs.Rectangle(-149.6,-317.6,306.3,627.3), new cjs.Rectangle(-149.6,-317.3,306.2,626.7), new cjs.Rectangle(-149.6,-317.5,306.4,626.7), new cjs.Rectangle(-149.6,-317.2,306.2,626.1), new cjs.Rectangle(-149.6,-317.3,306.4,626.1), new cjs.Rectangle(-149.6,-317.5,306.7,626), new cjs.Rectangle(-149.6,-317.3,306.5,625.5), new cjs.Rectangle(-149.6,-317.5,306.7,625.5), new cjs.Rectangle(-149.6,-317.2,306.5,624.9), new cjs.Rectangle(-149.6,-317.3,306.7,624.9), new cjs.Rectangle(-149.6,-317,306.5,624.3), new cjs.Rectangle(-149.6,-317.2,306.7,624.2), new cjs.Rectangle(-149.6,-316.9,306.5,623.7), new cjs.Rectangle(-149.6,-317,306.9,623.6), new cjs.Rectangle(-149.6,-316.7,306.6,623.1), new cjs.Rectangle(-149.6,-316.9,306.8,623), new cjs.Rectangle(-149.6,-317.1,307,623)];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_earrings_main_mc();
	this.instance.setTransform(6,-105.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-2.9,skewY:-5.7,x:-0.3,y:-92.8},44).to({scaleY:1,skewX:0,skewY:0,x:6,y:-105.1},45).wait(1));

	// animation
	this.instance_1 = new lib.hero1_fringe_main_mc();
	this.instance_1.setTransform(11.4,-191.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-5.7,x:-2.8,y:-179.4},44).to({rotation:0,x:11.4,y:-191.6},45).wait(1));

	// animation
	this.instance_2 = new lib.hero1_eyes_main_mc();
	this.instance_2.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-5.7,x:-3.9,y:-146.9},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// animation
	this.instance_3 = new lib.hero1_eyebrows_main_mc();
	this.instance_3.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-5.7,x:-3.9,y:-146.9},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// animation
	this.instance_4 = new lib.hero1_shadows_main_mc();
	this.instance_4.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-5.7,x:-3.9,y:-146.9},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// animation
	this.instance_5 = new lib.hero1_lips_main_mc();
	this.instance_5.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-5.7,x:-3.9,y:-146.9},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// animation
	this.instance_6 = new lib.hero1_head_mc();
	this.instance_6.setTransform(7,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-5.7,x:-3.9,y:-146.9},44).to({rotation:0,x:7,y:-159.5},45).wait(1));

	// animation
	this.instance_7 = new lib.hero1_hands_mc();
	this.instance_7.setTransform(-0.1,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:34.9},44).to({y:22.9},45).wait(1));

	// animation
	this.instance_8 = new lib.hero1_dress_main_mc();
	this.instance_8.setTransform(-2.6,130.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:142.8},44).to({y:130.8},45).wait(1));

	// animation
	this.instance_9 = new lib.hero_1_body_mc();
	this.instance_9.setTransform(0,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:115.5},44).to({y:103.5},45).wait(1));

	// animation
	this.instance_10 = new lib.hero1_hair_main_mc();
	this.instance_10.setTransform(11.4,-191.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-5.7,x:-2.8,y:-179.4},44).to({rotation:0,x:11.4,y:-191.6},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.6,-317.1,344,622.5);
p.frameBounds = [rect, new cjs.Rectangle(-169.6,-316.9,344,622.5), new cjs.Rectangle(-169.6,-317.2,344,623.1), new cjs.Rectangle(-169.6,-317,344,623.1), new cjs.Rectangle(-169.6,-317.3,344,623.7), new cjs.Rectangle(-169.6,-317.1,344,623.8), new cjs.Rectangle(-169.6,-317.4,344,624.3), new cjs.Rectangle(-169.6,-317.1,344,624.3), new cjs.Rectangle(-169.6,-317.4,344,625), new cjs.Rectangle(-169.6,-317.2,344,625), new cjs.Rectangle(-169.6,-317.5,344,625.6), new cjs.Rectangle(-169.6,-317.3,344,625.7), new cjs.Rectangle(-169.6,-317.5,344,626.1), new cjs.Rectangle(-169.6,-317.4,344,626.3), new cjs.Rectangle(-169.6,-317.6,344,626.8), new cjs.Rectangle(-169.6,-317.4,344,626.8), new cjs.Rectangle(-169.6,-317.7,344,627.4), new cjs.Rectangle(-169.6,-317.5,344,627.5), new cjs.Rectangle(-169.6,-317.7,344,628), new cjs.Rectangle(-169.6,-317.6,344,628.1), new cjs.Rectangle(-169.6,-317.8,344,628.6), new cjs.Rectangle(-169.6,-317.6,344,628.7), new cjs.Rectangle(-169.6,-317.9,344,629.2), new cjs.Rectangle(-169.6,-317.7,344,629.3), new cjs.Rectangle(-169.6,-318,344,629.9), new cjs.Rectangle(-169.6,-317.8,344,630), new cjs.Rectangle(-169.6,-318,344,630.5), new cjs.Rectangle(-169.6,-318.3,344,631), new cjs.Rectangle(-169.6,-318,344,631), new cjs.Rectangle(-169.6,-318.3,344,631.5), new cjs.Rectangle(-169.6,-318.1,344,631.7), new cjs.Rectangle(-169.6,-318.3,344,632.1), new cjs.Rectangle(-169.6,-318.1,344,632.2), new cjs.Rectangle(-169.6,-318.4,344,632.7), new cjs.Rectangle(-169.6,-318.2,344,632.8), new cjs.Rectangle(-169.6,-318.4,344,633.3), new cjs.Rectangle(-169.6,-318.2,344,633.4), new cjs.Rectangle(-169.6,-318.5,344,633.9), new cjs.Rectangle(-169.6,-318.2,344,633.9), new cjs.Rectangle(-169.6,-318.5,344,634.5), new cjs.Rectangle(-169.6,-318.3,344,634.5), new cjs.Rectangle(-169.6,-318.5,344,635.1), new cjs.Rectangle(-169.6,-318.3,344,635.1), new cjs.Rectangle(-169.6,-318.6,344,635.7), new cjs.Rectangle(-169.6,-318.8,344,636.1), new cjs.Rectangle(-169.6,-318.5,344,635.6), new cjs.Rectangle(-169.6,-318.3,344,635.1), new cjs.Rectangle(-169.6,-318.5,344,635), new cjs.Rectangle(-169.6,-318.3,344,634.6), new cjs.Rectangle(-169.6,-318.5,344,634.5), new cjs.Rectangle(-169.6,-318.3,344,634), new cjs.Rectangle(-169.6,-318.4,344,633.8), new cjs.Rectangle(-169.6,-318.2,344,633.3), new cjs.Rectangle(-169.6,-318.4,344,633.3), new cjs.Rectangle(-169.6,-318.1,344,632.8), new cjs.Rectangle(-169.6,-318.3,344,632.7), new cjs.Rectangle(-169.6,-318.1,344,632.2), new cjs.Rectangle(-169.6,-318.3,344,632.2), new cjs.Rectangle(-169.6,-318,344,631.6), new cjs.Rectangle(-169.6,-318.2,344,631.5), new cjs.Rectangle(-169.6,-317.9,344,631), new cjs.Rectangle(-169.6,-318.2,344,631), new cjs.Rectangle(-169.6,-317.9,344,630.5), new cjs.Rectangle(-169.6,-318.1,344,630.4), new cjs.Rectangle(-169.6,-317.8,344,629.8), new cjs.Rectangle(-169.6,-318,344,629.7), new cjs.Rectangle(-169.6,-317.8,344,629.3), new cjs.Rectangle(-169.6,-318,344,629.2), new cjs.Rectangle(-169.6,-317.7,344,628.7), new cjs.Rectangle(-169.6,-317.9,344,628.6), new cjs.Rectangle(-169.6,-317.6,344,628), new cjs.Rectangle(-169.6,-317.8,344,628), new cjs.Rectangle(-169.6,-317.6,344,627.5), new cjs.Rectangle(-169.6,-317.8,344,627.4), new cjs.Rectangle(-169.6,-317.5,344,626.8), new cjs.Rectangle(-169.6,-317.6,344,626.7), new cjs.Rectangle(-169.6,-317.4,344,626.2), new cjs.Rectangle(-169.6,-317.6,344,626.2), new cjs.Rectangle(-169.6,-317.3,344,625.6), new cjs.Rectangle(-169.6,-317.6,344,625.6), new cjs.Rectangle(-169.6,-317.3,344,625), new cjs.Rectangle(-169.6,-317.4,344,624.9), new cjs.Rectangle(-169.6,-317.2,344,624.3), new cjs.Rectangle(-169.6,-317.4,344,624.3), new cjs.Rectangle(-169.6,-317.1,344,623.8), new cjs.Rectangle(-169.6,-317.3,344,623.7), new cjs.Rectangle(-169.6,-317,344,623.2), new cjs.Rectangle(-169.6,-317.2,344,623.1), new cjs.Rectangle(-169.6,-316.9,344,622.5), new cjs.Rectangle(-169.6,-317.1,344,622.5)];


(lib.hair_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.faceart_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.current_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_makeup_2_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.93,scaleY:0.93,alpha:0.102},29).to({scaleX:1,scaleY:1,alpha:0.5},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, new cjs.Rectangle(-69.8,-69.8,139.6,139.6), new cjs.Rectangle(-69.6,-69.6,139.3,139.3), new cjs.Rectangle(-69.4,-69.4,139,139), new cjs.Rectangle(-69.3,-69.3,138.6,138.6), new cjs.Rectangle(-69.1,-69.1,138.3,138.3), new cjs.Rectangle(-68.9,-68.9,138,138), new cjs.Rectangle(-68.7,-68.7,137.6,137.6), new cjs.Rectangle(-68.6,-68.6,137.3,137.3), new cjs.Rectangle(-68.4,-68.4,136.9,136.9), new cjs.Rectangle(-68.2,-68.2,136.6,136.6), new cjs.Rectangle(-68.1,-68.1,136.2,136.2), new cjs.Rectangle(-67.9,-67.9,135.9,135.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-67.5,-67.5,135.1,135.1), new cjs.Rectangle(-67.4,-67.4,134.9,134.9), new cjs.Rectangle(-67.2,-67.2,134.5,134.5), new cjs.Rectangle(-67,-67,134.1,134.1), new cjs.Rectangle(-66.8,-66.8,133.8,133.8), new cjs.Rectangle(-66.7,-66.7,133.5,133.5), new cjs.Rectangle(-66.5,-66.5,133.1,133.1), new cjs.Rectangle(-66.3,-66.3,132.8,132.8), new cjs.Rectangle(-66.2,-66.2,132.4,132.4), new cjs.Rectangle(-66,-66,132.1,132.1), new cjs.Rectangle(-65.8,-65.8,131.7,131.7), new cjs.Rectangle(-65.6,-65.6,131.4,131.4), new cjs.Rectangle(-65.5,-65.5,131.1,131.1), new cjs.Rectangle(-65.3,-65.3,130.7,130.7), new cjs.Rectangle(-65.1,-65.1,130.4,130.4), new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-65.1,-65.1,130.4,130.4), new cjs.Rectangle(-65.3,-65.3,130.6,130.6), new cjs.Rectangle(-65.4,-65.4,131,131), new cjs.Rectangle(-65.6,-65.6,131.4,131.4), new cjs.Rectangle(-65.8,-65.8,131.6,131.6), new cjs.Rectangle(-65.9,-65.9,132,132), new cjs.Rectangle(-66.1,-66.1,132.4,132.4), new cjs.Rectangle(-66.3,-66.3,132.6,132.6), new cjs.Rectangle(-66.4,-66.4,133,133), new cjs.Rectangle(-66.6,-66.6,133.4,133.4), new cjs.Rectangle(-66.8,-66.8,133.6,133.6), new cjs.Rectangle(-66.9,-66.9,134,134), new cjs.Rectangle(-67.1,-67.1,134.4,134.4), new cjs.Rectangle(-67.3,-67.3,134.6,134.6), new cjs.Rectangle(-67.4,-67.4,135,135), new cjs.Rectangle(-67.6,-67.6,135.4,135.4), new cjs.Rectangle(-67.8,-67.8,135.6,135.6), new cjs.Rectangle(-67.9,-67.9,136,136), new cjs.Rectangle(-68.1,-68.1,136.4,136.4), new cjs.Rectangle(-68.3,-68.3,136.6,136.6), new cjs.Rectangle(-68.4,-68.4,137,137), new cjs.Rectangle(-68.6,-68.6,137.4,137.4), new cjs.Rectangle(-68.8,-68.8,137.6,137.6), new cjs.Rectangle(-68.9,-68.9,138,138), new cjs.Rectangle(-69.1,-69.1,138.4,138.4), new cjs.Rectangle(-69.3,-69.3,138.6,138.6), new cjs.Rectangle(-69.4,-69.4,139,139), new cjs.Rectangle(-69.6,-69.6,139.4,139.4), new cjs.Rectangle(-69.8,-69.8,139.6,139.6), new cjs.Rectangle(-70,-70,140,140)];


(lib.current_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_hairstyle_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},39).wait(20).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_face_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_face_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},19).wait(10).to({alpha:0.898},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.body_hint_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).wait(6));

	// decor
	this.instance_6 = new lib.hint_filter_arrow_mc();
	this.instance_6.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-30,210,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.long_lamp_0_mc();
	this.instance.setTransform(-90,80);

	this.instance_1 = new lib.long_lamp_0_mc();
	this.instance_1.setTransform(870,80);

	this.instance_2 = new lib.long_lamp_0_mc();
	this.instance_2.setTransform(390,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.animation_vs_for_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.vs_for_title_mc();
	this.instance.setTransform(0,0,0.889,0.888);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({scaleX:1,scaleY:1,rotation:-5},10).to({rotation:5},20).to({scaleX:0.89,scaleY:0.89,rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-26.6,80,53.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-40.7,-27.3,81.5,54.7), new cjs.Rectangle(-41.4,-28,83,56.1), new cjs.Rectangle(-42.2,-28.7,84.4,57.5), new cjs.Rectangle(-42.9,-29.4,85.9,58.9), new cjs.Rectangle(-43.6,-30.1,87.4,60.3), new cjs.Rectangle(-44.4,-30.8,88.9,61.8), new cjs.Rectangle(-45.1,-31.5,90.4,63.2), new cjs.Rectangle(-45.9,-32.3,91.9,64.7), new cjs.Rectangle(-46.6,-33,93.4,66.2), new cjs.Rectangle(-47.4,-33.8,94.9,67.6), new cjs.Rectangle(-47.2,-33.4,94.4,66.9), new cjs.Rectangle(-46.9,-33,94,66.2), new cjs.Rectangle(-46.7,-32.6,93.5,65.4), new cjs.Rectangle(-46.5,-32.2,93,64.6), new cjs.Rectangle(-46.2,-31.9,92.5,63.9), new cjs.Rectangle(-46,-31.5,92.1,63.1), new cjs.Rectangle(-45.7,-31.1,91.5,62.3), new cjs.Rectangle(-45.5,-30.7,91.1,61.6), new cjs.Rectangle(-45.2,-30.4,90.5,60.8), new cjs.Rectangle(-45,-30,90,60), new cjs.Rectangle(-45.2,-30.3,90.5,60.8), new cjs.Rectangle(-45.5,-30.7,91.1,61.6), new cjs.Rectangle(-45.7,-31.1,91.5,62.3), new cjs.Rectangle(-46,-31.5,92.1,63.1), new cjs.Rectangle(-46.2,-31.9,92.5,63.9), new cjs.Rectangle(-46.5,-32.3,93,64.6), new cjs.Rectangle(-46.7,-32.6,93.5,65.4), new cjs.Rectangle(-46.9,-33,94,66.2), new cjs.Rectangle(-47.1,-33.4,94.4,66.9), new cjs.Rectangle(-47.4,-33.8,94.9,67.6), new cjs.Rectangle(-46.6,-33,93.4,66.2), new cjs.Rectangle(-45.9,-32.3,91.9,64.7), new cjs.Rectangle(-45.1,-31.5,90.4,63.2), new cjs.Rectangle(-44.4,-30.8,88.9,61.8), new cjs.Rectangle(-43.6,-30.1,87.4,60.3), new cjs.Rectangle(-42.9,-29.4,85.9,58.9), new cjs.Rectangle(-42.2,-28.7,84.4,57.5), new cjs.Rectangle(-41.4,-28,83,56.1), new cjs.Rectangle(-40.7,-27.3,81.5,54.7), new cjs.Rectangle(-40,-26.6,80,53.3)];


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


(lib.animation_current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_mc();
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},39).to({alpha:0.301},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:44,end:79});

	// animation
	this.instance = new lib.curtain_2_mc();
	this.instance.setTransform(400,300);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:1},5).wait(40).to({alpha:0.012},10).to({_off:true},1).wait(10));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},18).wait(40).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


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
p.nominalBounds = rect = new cjs.Rectangle(-300,-387,1400,987);
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
p.nominalBounds = rect = new cjs.Rectangle(-300,-387,1400,987);
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


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.102},29).to({scaleX:1,scaleY:1,alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-40,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-44.6,-39.7,89.4,89.4), new cjs.Rectangle(-44.3,-39.4,88.8,88.8), new cjs.Rectangle(-44,-39.1,88.2,88.2), new cjs.Rectangle(-43.7,-38.8,87.5,87.5), new cjs.Rectangle(-43.4,-38.6,86.9,86.9), new cjs.Rectangle(-43.1,-38.3,86.3,86.3), new cjs.Rectangle(-42.8,-38,85.7,85.7), new cjs.Rectangle(-42.5,-37.7,85.1,85.1), new cjs.Rectangle(-42.2,-37.5,84.4,84.4), new cjs.Rectangle(-41.8,-37.2,83.8,83.8), new cjs.Rectangle(-41.5,-36.9,83.2,83.2), new cjs.Rectangle(-41.2,-36.6,82.6,82.6), new cjs.Rectangle(-40.9,-36.4,82,81.9), new cjs.Rectangle(-40.6,-36.1,81.3,81.3), new cjs.Rectangle(-40.3,-35.8,80.7,80.7), new cjs.Rectangle(-40,-35.5,80.1,80.1), new cjs.Rectangle(-39.7,-35.3,79.5,79.4), new cjs.Rectangle(-39.4,-35,78.9,78.9), new cjs.Rectangle(-39.1,-34.7,78.2,78.2), new cjs.Rectangle(-38.7,-34.4,77.6,77.6), new cjs.Rectangle(-38.4,-34.2,77,77), new cjs.Rectangle(-38.1,-33.9,76.4,76.4), new cjs.Rectangle(-37.8,-33.6,75.7,75.7), new cjs.Rectangle(-37.5,-33.3,75.1,75.1), new cjs.Rectangle(-37.2,-33.1,74.5,74.5), new cjs.Rectangle(-36.9,-32.8,73.9,73.9), new cjs.Rectangle(-36.6,-32.5,73.3,73.3), new cjs.Rectangle(-36.3,-32.2,72.6,72.6), new cjs.Rectangle(-36,-32,72,72), new cjs.Rectangle(-36.2,-32.2,72.6,72.6), new cjs.Rectangle(-36.5,-32.5,73.2,73.2), new cjs.Rectangle(-36.8,-32.7,73.8,73.8), new cjs.Rectangle(-37.1,-33,74.4,74.4), new cjs.Rectangle(-37.4,-33.3,75,75), new cjs.Rectangle(-37.7,-33.5,75.6,75.6), new cjs.Rectangle(-38,-33.8,76.2,76.2), new cjs.Rectangle(-38.3,-34.1,76.8,76.8), new cjs.Rectangle(-38.6,-34.3,77.4,77.4), new cjs.Rectangle(-38.9,-34.6,78,78), new cjs.Rectangle(-39.2,-34.9,78.6,78.6), new cjs.Rectangle(-39.5,-35.1,79.2,79.2), new cjs.Rectangle(-39.8,-35.4,79.8,79.8), new cjs.Rectangle(-40.1,-35.7,80.4,80.4), new cjs.Rectangle(-40.4,-35.9,81,81), new cjs.Rectangle(-40.7,-36.2,81.6,81.6), new cjs.Rectangle(-41,-36.5,82.2,82.2), new cjs.Rectangle(-41.3,-36.7,82.8,82.8), new cjs.Rectangle(-41.6,-37,83.4,83.4), new cjs.Rectangle(-41.9,-37.3,84,84), new cjs.Rectangle(-42.2,-37.5,84.6,84.6), new cjs.Rectangle(-42.5,-37.8,85.2,85.2), new cjs.Rectangle(-42.8,-38.1,85.8,85.8), new cjs.Rectangle(-43.1,-38.3,86.4,86.4), new cjs.Rectangle(-43.4,-38.6,87,87), new cjs.Rectangle(-43.7,-38.9,87.6,87.6), new cjs.Rectangle(-44,-39.1,88.2,88.2), new cjs.Rectangle(-44.3,-39.4,88.8,88.8), new cjs.Rectangle(-44.6,-39.7,89.4,89.4), new cjs.Rectangle(-45,-40,90,90)];


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


(lib.skip_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArsHCIAAuDIXZAAIAAODg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-75,-45,150,90)];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40,-40,80,80)];


(lib.nav_anim_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_3_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({alpha:0.801},20).to({alpha:0.012},20).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuK8IAA13MAldAAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({alpha:0.801},20).to({alpha:0.012},20).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuK8IAA13MAldAAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.89,scaleY:0.89,x:-5},19).to({scaleX:1,scaleY:1,x:5},40).to({x:0},20).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDPAACSCTQCTCTAADNQAADOiTCTQiSCTjPgBQjNABiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50,-50,100.4,100), new cjs.Rectangle(-50,-50,100.8,100), new cjs.Rectangle(-50,-50,101.1,100), new cjs.Rectangle(-50,-50,101.6,100), new cjs.Rectangle(-50,-50,102,100), new cjs.Rectangle(-50,-50,102.3,100), new cjs.Rectangle(-50,-50,102.8,100), new cjs.Rectangle(-50,-50,103.1,100), new cjs.Rectangle(-50,-50,103.5,100), new cjs.Rectangle(-50,-50,103.9,100), new cjs.Rectangle(-50,-50,104.3,100), new cjs.Rectangle(-50,-50,104.6,100), new cjs.Rectangle(-50,-50,105,100), new cjs.Rectangle(-50,-50,104.8,100), new cjs.Rectangle(-50,-50,104.5,100), new cjs.Rectangle(-50,-50,104.3,100), new cjs.Rectangle(-50,-50,104,100), new cjs.Rectangle(-50,-50,103.8,100), new cjs.Rectangle(-50,-50,103.5,100), new cjs.Rectangle(-50,-50,103.3,100), new cjs.Rectangle(-50,-50,103,100), new cjs.Rectangle(-50,-50,102.8,100), new cjs.Rectangle(-50,-50,102.5,100), new cjs.Rectangle(-50,-50,102.3,100), new cjs.Rectangle(-50,-50,102,100), new cjs.Rectangle(-50,-50,101.8,100), new cjs.Rectangle(-50,-50,101.5,100), new cjs.Rectangle(-50,-50,101.3,100), new cjs.Rectangle(-50,-50,101,100), new cjs.Rectangle(-50,-50,100.8,100), new cjs.Rectangle(-50,-50,100.5,100), new cjs.Rectangle(-50,-50,100.3,100), new cjs.Rectangle(-50,-50,100,100)];


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


(lib.decor_large_buttons_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_large_buttons_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-36,72,72);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.3,-36.3,72.7,72.7), new cjs.Rectangle(-36.6,-36.6,73.3,73.3), new cjs.Rectangle(-36.9,-36.9,73.9,73.9), new cjs.Rectangle(-37.2,-37.2,74.5,74.5), new cjs.Rectangle(-37.5,-37.5,75.1,75.1), new cjs.Rectangle(-37.8,-37.8,75.7,75.7), new cjs.Rectangle(-38.1,-38.1,76.3,76.3), new cjs.Rectangle(-38.4,-38.3,76.8,76.8), new cjs.Rectangle(-38.7,-38.7,77.4,77.4), new cjs.Rectangle(-39,-39,78,78), new cjs.Rectangle(-38.7,-38.7,77.4,77.4), new cjs.Rectangle(-38.4,-38.3,76.8,76.8), new cjs.Rectangle(-38.1,-38.1,76.3,76.3), new cjs.Rectangle(-37.8,-37.8,75.7,75.7), new cjs.Rectangle(-37.5,-37.5,75.1,75.1), new cjs.Rectangle(-37.2,-37.2,74.5,74.5), new cjs.Rectangle(-36.9,-36.9,73.9,73.9), new cjs.Rectangle(-36.6,-36.6,73.3,73.3), new cjs.Rectangle(-36.3,-36.3,72.7,72.7), new cjs.Rectangle(-36,-36,72,72), new cjs.Rectangle(-36.3,-36.3,72.7,72.7), new cjs.Rectangle(-36.6,-36.6,73.3,73.3), new cjs.Rectangle(-36.9,-36.9,73.9,73.9), new cjs.Rectangle(-37.2,-37.2,74.5,74.5), new cjs.Rectangle(-37.5,-37.5,75.1,75.1), new cjs.Rectangle(-37.8,-37.8,75.7,75.7), new cjs.Rectangle(-38.1,-38.1,76.3,76.3), new cjs.Rectangle(-38.3,-38.4,76.8,76.8), new cjs.Rectangle(-38.7,-38.7,77.4,77.4), new cjs.Rectangle(-39,-39,78,78), new cjs.Rectangle(-38.7,-38.7,77.4,77.4), new cjs.Rectangle(-38.3,-38.4,76.8,76.8), new cjs.Rectangle(-38.1,-38.1,76.3,76.3), new cjs.Rectangle(-37.8,-37.8,75.7,75.7), new cjs.Rectangle(-37.5,-37.5,75.1,75.1), new cjs.Rectangle(-37.2,-37.2,74.5,74.5), new cjs.Rectangle(-36.9,-36.9,73.9,73.9), new cjs.Rectangle(-36.6,-36.6,73.3,73.3), new cjs.Rectangle(-36.3,-36.3,72.7,72.7), new cjs.Rectangle(-36,-36,72,72)];


(lib.decor_large_buttons_0_mc = function(mode,startPosition,loop) {
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
		//_body_mc.visible = false;
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
			//_body_mc.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.decor_large_buttons_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-36,72,72);
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

	// decor
	this.instance = new lib.decor_large_buttons_0_mc();
	this.instance.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.bg_large_buttons_img();
	this.instance_1.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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
		/////*
		////ищем наиболее подходящий язык
		////https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		////*/
		////this.stop();
		////this.body_mc.gotoAndStop(0);
		/////*
		////
		////*/
		////var label_str = "en";
		////var lang_str = window.navigator.language || navigator.userLanguage;
		////lang_str = lang_str.split("-")[0].toLowerCase();
		/////*
		////
		////*/
		////if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		////{
		////	label_str = "ru";
		////}
		////if (lang_str == "de")
		////{
		////	label_str = "de";
		////}
		////if (lang_str == "fr")
		////{
		////	label_str = "fr";
		////}
		////if (lang_str == "it")
		////{
		////	label_str = "it";
		////}
		////if (lang_str == "es")
		////{
		////	label_str = "es";
		////}
		////if (lang_str == "pt")
		////{
		////	label_str = "pt";
		////}
		////if (lang_str == "tr")
		////{
		////	label_str = "tr";
		////}
		////if (lang_str == "ja")
		////{
		////	label_str = "ja";
		////}
		////if (lang_str == "hi")
		////{
		////	label_str = "hi";
		////}
		////if (lang_str == "ar")
		////{
		////	label_str = "ar";
		////}
		////if (lang_str == "id")
		////{
		////	label_str = "id";
		////}
		////if (lang_str == "zh")
		////{
		////	label_str = "zh";
		////}
		/////*
		////
		////*/
		////this.body_mc.gotoAndStop(label_str);
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


(lib.preloader_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.preloader_6_mc();
	this.indicator_mc.setTransform(-130,-15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-35,300,70);
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
	this.pt = new lib.language_pt_mc();
	this.pt.setTransform(510,370);

	this.es = new lib.language_es_mc();
	this.es.setTransform(290,370);

	this.tr = new lib.language_tr_mc();
	this.tr.setTransform(620,220);

	this.ru = new lib.language_ru_mc();
	this.ru.setTransform(180,220);

	this.en = new lib.language_en_mc();
	this.en.setTransform(400,220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.en},{t:this.ru},{t:this.tr},{t:this.es},{t:this.pt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(90,155,620,280);
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


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_6_img();
	this.instance.setTransform(-210,-210);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQItIsgBMSQABMTotIsQosIssTAAQsSAAososg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-210,-210);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQItIsgBMSQABMTotIsQosIssTAAQsSAAososg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-210,-210);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQItIsgBMSQABMTotIsQosIssTAAQsSAAososg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-210,-210);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQItIsgBMSQABMTotIsQosIssTAAQsSAAososg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-210,-210);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQItIsgBMSQABMTotIsQosIssTAAQsSAAososg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-210,-210);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQItIsgBMSQABMTotIsQosIssTAAQsSAAososg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect, rect];


(lib.indicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.indicator_4_mc();
	this.instance.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay7DUQhVhVgCh4IgBgHIABgGQACh3BVhWQBYhXB8gBQB9ABBYBXQAdAdATAiIdfAAQA/gBAsAtQArAsABA8QgBA+grArQgsAsg/ABI9fAAQgUAggcAeQhYBXh9ABQh8gBhYhXg");
	mask.setTransform(130,30);

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
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,280,80);
p.frameBounds = [rect];


(lib.hint_filter_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_hint_filter_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-29.5,210,150);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(390,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({y:1200},0).wait(1).to({y:360},0).wait(1).to({y:1200},0).wait(1).to({skewY:180,x:400,y:360},0).wait(1).to({skewY:0,x:390,y:1200},0).wait(1).to({y:360},0).wait(1).to({y:1200},0).wait(1).to({skewY:180,x:400,y:360},0).wait(1).to({skewY:0,x:390,y:1200},0).wait(1).to({y:360},0).wait(1));

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(140,375,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({scaleX:1,scaleY:1,x:250,y:350},0).wait(1).to({x:230,y:1200},0).wait(1).to({x:250,y:350},0).wait(1).to({x:230,y:1200},0).wait(1).to({x:250,y:350},0).wait(1).to({x:230,y:1200},0).wait(1).to({x:250,y:350},0).wait(1).to({x:230,y:1200},0).wait(1).to({x:250,y:350},0).wait(1).to({x:230,y:1200},0).wait(1));

	// hero_1
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(650,375,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({scaleX:1,scaleY:1,x:550,y:360},0).wait(1).to({x:570,y:1200},0).wait(1).to({x:550,y:360},0).wait(1).to({x:570,y:1200},0).wait(1).to({x:550,y:360},0).wait(1).to({x:570,y:1200},0).wait(1).to({x:550,y:360},0).wait(1).to({x:570,y:1200},0).wait(1).to({x:550,y:360},0).wait(1).to({x:570,y:1200},0).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-400,0);

	this.instance_1 = new lib.background_6_img();
	this.instance_1.setTransform(-400,0);

	this.instance_2 = new lib.background_1_mc();

	this.instance_3 = new lib.background_8_img();
	this.instance_3.setTransform(-400,0);

	this.instance_4 = new lib.background_7_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,665.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,1505.8), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.hero_1_main_mc();
	this.instance.setTransform(-160,340,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({x:310},15).to({x:250},5).wait(1));

	// animation
	this.instance_1 = new lib.hero_2_main_mc();
	this.instance_1.setTransform(940,350,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({x:490},15).to({x:550},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-334.3,8.9,1465.5,636.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-303,8.9,1404.2,636.4), new cjs.Rectangle(-271.7,8.9,1342.9,636.4), new cjs.Rectangle(-240.3,8.9,1281.5,636.4), new cjs.Rectangle(-209,8.9,1220.2,636.4), new cjs.Rectangle(-177.7,8.9,1158.9,636.4), new cjs.Rectangle(-146.3,8.9,1097.5,636.4), new cjs.Rectangle(-115,8.9,1036.2,636.4), new cjs.Rectangle(-83.7,8.9,974.9,636.4), new cjs.Rectangle(-52.3,8.9,913.5,636.4), new cjs.Rectangle(-21,8.9,852.2,636.4), new cjs.Rectangle(10.3,8.9,790.9,636.4), new cjs.Rectangle(41.7,8.9,729.5,636.4), new cjs.Rectangle(73,8.9,668.2,636.4), new cjs.Rectangle(104.3,8.9,606.9,636.4), new cjs.Rectangle(135.7,8.9,545.5,636.4), new cjs.Rectangle(123.7,8.9,569.5,636.4), new cjs.Rectangle(111.7,8.9,593.5,636.4), new cjs.Rectangle(99.7,8.9,617.5,636.4), new cjs.Rectangle(87.7,8.9,641.5,636.4), new cjs.Rectangle(75.7,8.9,665.5,636.4)];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":139});

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-190,-30);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(89).to({y:-100},5).to({y:550},10).wait(36));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(190,30);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(29).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(35).to({y:-40},5).to({y:550},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-240,801.8,481.8), new cjs.Rectangle(-400,-240,803.7,483.7), new cjs.Rectangle(-400,-240,805.4,485.4), new cjs.Rectangle(-400,-240,807.2,487.2), new cjs.Rectangle(-400,-240,809,489), new cjs.Rectangle(-400,-240,810.8,490.8), new cjs.Rectangle(-400,-240,812.5,492.5), new cjs.Rectangle(-400,-240,814.2,494.2), new cjs.Rectangle(-400,-240,815.9,495.9), new cjs.Rectangle(-400,-240,817.5,497.5), new cjs.Rectangle(-400,-240,815.8,495.8), new cjs.Rectangle(-400,-240,814.2,494.2), new cjs.Rectangle(-400,-240,812.4,492.4), new cjs.Rectangle(-400,-240,810.7,490.7), new cjs.Rectangle(-400,-240,809,488.9), new cjs.Rectangle(-400,-240,807.2,487.2), new cjs.Rectangle(-400,-240,805.4,485.4), new cjs.Rectangle(-400,-240,803.6,483.7), new cjs.Rectangle(-400,-240,801.8,481.9), new cjs.Rectangle(-400,-240,800,480), new cjs.Rectangle(-400,-240,801.8,481.8), new cjs.Rectangle(-400,-240,803.7,483.6), new cjs.Rectangle(-400,-240,805.4,485.5), new cjs.Rectangle(-400,-240,807.2,487.2), new cjs.Rectangle(-400,-240,808.9,489), new cjs.Rectangle(-400,-240,810.7,490.7), new cjs.Rectangle(-400,-240,812.4,492.4), new cjs.Rectangle(-400,-240,814.1,494.1), new cjs.Rectangle(-400,-240,815.8,495.8), new cjs.Rectangle(-400,-240,817.5,497.5), new cjs.Rectangle(-400,-240,815.8,495.8), new cjs.Rectangle(-400,-240,814.1,494.1), new cjs.Rectangle(-400,-240,812.4,492.4), new cjs.Rectangle(-400,-240,810.7,490.7), new cjs.Rectangle(-400,-240,808.9,489), new cjs.Rectangle(-400,-240,807.2,487.2), new cjs.Rectangle(-400,-240,805.4,485.3), new cjs.Rectangle(-400,-240,803.6,483.6), new cjs.Rectangle(-400,-240,801.8,481.8), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-254,800,494), new cjs.Rectangle(-400,-268,800,508), new cjs.Rectangle(-400,-282,800,522), new cjs.Rectangle(-400,-296,800,536), new cjs.Rectangle(-400,-310,800,550), new cjs.Rectangle(-400,-245,800,485), new cjs.Rectangle(-400,-180,800,420), new cjs.Rectangle(-400,-180,800,485), new cjs.Rectangle(-400,-180,800,550), new cjs.Rectangle(-400,-180,800,615), new cjs.Rectangle(-400,-180,800,680), new cjs.Rectangle(-400,-180,800,745), new cjs.Rectangle(-400,-180,800,810), new cjs.Rectangle(-400,-180,800,875), new cjs.Rectangle(-400,-180,800,940), new cjs.Rectangle(-400,-194,800,954), new cjs.Rectangle(-400,-208,800,968), new cjs.Rectangle(-400,-222,800,982), new cjs.Rectangle(-400,-236,800,996), new cjs.Rectangle(-400,-250,800,1010), new cjs.Rectangle(-400,-191,800,951), new cjs.Rectangle(-400,-132,800,892), new cjs.Rectangle(-400,-73,800,833), new cjs.Rectangle(-400,-14,800,774), new cjs.Rectangle(-400,45,800,715), new cjs.Rectangle(-400,104,800,656), new cjs.Rectangle(-400,163,800,597), new cjs.Rectangle(-400,222,800,538), new cjs.Rectangle(-400,281,800,479), rect=new cjs.Rectangle(-400,340,800,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":159});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
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
			app.addSoundFunc("tink_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(106));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-190,-30);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-550},0).wait(23).to({y:80},15).to({y:-30},5).wait(25).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(51));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(190,30);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-550},0).wait(43).to({y:130},15).to({y:30},5).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-760,800,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-760,800,462), new cjs.Rectangle(-400,-760,800,504), new cjs.Rectangle(-400,-760,800,546), new cjs.Rectangle(-400,-760,800,588), new cjs.Rectangle(-400,-760,800,630), new cjs.Rectangle(-400,-760,800,672), new cjs.Rectangle(-400,-760,800,714), new cjs.Rectangle(-400,-760,800,756), new cjs.Rectangle(-400,-760,800,798), new cjs.Rectangle(-400,-760,800,840), new cjs.Rectangle(-400,-760,800,882), new cjs.Rectangle(-400,-760,800,924), new cjs.Rectangle(-400,-760,800,966), new cjs.Rectangle(-400,-760,800,1008), new cjs.Rectangle(-400,-760,800,1050), new cjs.Rectangle(-400,-760,800,1028), new cjs.Rectangle(-400,-760,800,1006), new cjs.Rectangle(-400,-760,800,984), new cjs.Rectangle(-400,-760,800,962), new cjs.Rectangle(-400,-760,800,940), new cjs.Rectangle(-400,-714.6,800,894.7), new cjs.Rectangle(-400,-669.3,800,849.4), new cjs.Rectangle(-400,-624,800,804), new cjs.Rectangle(-400,-578.6,800,758.7), new cjs.Rectangle(-400,-533.3,800,713.4), new cjs.Rectangle(-400,-488,800,668), new cjs.Rectangle(-400,-442.6,800,622.7), new cjs.Rectangle(-400,-397.3,800,577.4), new cjs.Rectangle(-400,-352,800,532), new cjs.Rectangle(-400,-306.6,800,486.7), new cjs.Rectangle(-400,-261.3,800,441.4), new cjs.Rectangle(-400,-240,800,444), new cjs.Rectangle(-400,-240,800,489.4), new cjs.Rectangle(-400,-240,800,534.7), new cjs.Rectangle(-400,-240,800,580), new cjs.Rectangle(-400,-240,800,560), new cjs.Rectangle(-400,-240,800,540), new cjs.Rectangle(-400,-240,800,520), new cjs.Rectangle(-400,-240,800,500), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, new cjs.Rectangle(-401.8,-241.8,801.8,481.8), new cjs.Rectangle(-403.6,-243.6,803.6,483.6), new cjs.Rectangle(-405.4,-245.4,805.4,485.4), new cjs.Rectangle(-407.1,-247.1,807.2,487.2), new cjs.Rectangle(-408.9,-248.9,808.9,488.9), new cjs.Rectangle(-410.7,-250.7,810.7,490.7), new cjs.Rectangle(-412.4,-252.4,812.4,492.4), new cjs.Rectangle(-414.1,-254.1,814.1,494.1), new cjs.Rectangle(-415.8,-255.8,815.8,495.8), new cjs.Rectangle(-417.5,-257.5,817.5,497.5), new cjs.Rectangle(-415.7,-255.7,815.7,495.8), new cjs.Rectangle(-414,-254,814.1,494.1), new cjs.Rectangle(-412.3,-252.3,812.3,492.3), new cjs.Rectangle(-410.6,-250.6,810.7,490.7), new cjs.Rectangle(-408.8,-248.9,808.9,488.9), new cjs.Rectangle(-407.1,-247.1,807.1,487.2), new cjs.Rectangle(-405.3,-245.4,805.4,485.4), new cjs.Rectangle(-403.5,-243.6,803.6,483.6), new cjs.Rectangle(-401.8,-241.7,801.8,481.8), new cjs.Rectangle(-399.9,-239.9,800,480), new cjs.Rectangle(-401.7,-241.8,801.8,481.8), new cjs.Rectangle(-403.5,-243.6,803.6,483.6), new cjs.Rectangle(-405.4,-245.3,805.4,485.4), new cjs.Rectangle(-407.1,-247.1,807.2,487.2), new cjs.Rectangle(-408.8,-248.9,808.9,488.9), new cjs.Rectangle(-410.6,-250.6,810.6,490.6), new cjs.Rectangle(-412.3,-252.3,812.3,492.3), new cjs.Rectangle(-414,-254,814,494), new cjs.Rectangle(-415.7,-255.7,815.7,495.8), new cjs.Rectangle(-417.5,-257.5,817.5,497.5), new cjs.Rectangle(-415.7,-255.7,815.8,495.7), new cjs.Rectangle(-414,-254,814,494), new cjs.Rectangle(-412.3,-252.3,812.4,492.4), new cjs.Rectangle(-410.6,-250.6,810.7,490.7), new cjs.Rectangle(-408.8,-248.8,808.9,488.8), new cjs.Rectangle(-407.1,-247.1,807.1,487.1), new cjs.Rectangle(-405.3,-245.3,805.4,485.3), new cjs.Rectangle(-403.5,-243.5,803.6,483.6), new cjs.Rectangle(-401.7,-241.7,801.7,481.8), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":139});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-190,30);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(89).to({y:-40},5).to({y:550},10).wait(36));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,-30);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(29).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(35).to({y:-100},5).to({y:550},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-241.8,801.8,481.8), new cjs.Rectangle(-400,-243.6,803.7,483.6), new cjs.Rectangle(-400,-245.4,805.4,485.4), new cjs.Rectangle(-400,-247.1,807.2,487.2), new cjs.Rectangle(-400,-248.9,809,488.9), new cjs.Rectangle(-400,-250.7,810.8,490.7), new cjs.Rectangle(-400,-252.4,812.5,492.4), new cjs.Rectangle(-400,-254.1,814.3,494.1), new cjs.Rectangle(-400,-255.8,815.9,495.8), new cjs.Rectangle(-400,-257.5,817.5,497.5), new cjs.Rectangle(-400,-255.7,815.8,495.7), new cjs.Rectangle(-400,-254,814.1,494), new cjs.Rectangle(-400,-252.3,812.5,492.4), new cjs.Rectangle(-400,-250.6,810.7,490.7), new cjs.Rectangle(-400,-248.9,809,488.9), new cjs.Rectangle(-400,-247.1,807.2,487.2), new cjs.Rectangle(-400,-245.4,805.4,485.4), new cjs.Rectangle(-400,-243.6,803.7,483.6), new cjs.Rectangle(-400,-241.7,801.8,481.8), new cjs.Rectangle(-400,-239.9,800,480), new cjs.Rectangle(-400,-241.8,801.8,481.8), new cjs.Rectangle(-400,-243.6,803.7,483.6), new cjs.Rectangle(-400,-245.3,805.4,485.4), new cjs.Rectangle(-400,-247.1,807.2,487.2), new cjs.Rectangle(-400,-248.8,809,488.9), new cjs.Rectangle(-400,-250.6,810.7,490.7), new cjs.Rectangle(-400,-252.3,812.4,492.3), new cjs.Rectangle(-400,-254,814.2,494), new cjs.Rectangle(-400,-255.7,815.8,495.7), new cjs.Rectangle(-400,-257.5,817.5,497.5), new cjs.Rectangle(-400,-255.7,815.8,495.8), new cjs.Rectangle(-400,-254,814.2,494.1), new cjs.Rectangle(-400,-252.3,812.4,492.3), new cjs.Rectangle(-400,-250.6,810.7,490.7), new cjs.Rectangle(-400,-248.8,808.9,488.8), new cjs.Rectangle(-400,-247.1,807.1,487.1), new cjs.Rectangle(-400,-245.3,805.3,485.4), new cjs.Rectangle(-400,-243.5,803.6,483.6), new cjs.Rectangle(-400,-241.7,801.8,481.8), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-240,800,466), new cjs.Rectangle(-400,-240,800,452), new cjs.Rectangle(-400,-240,800,438), new cjs.Rectangle(-400,-240,800,424), new cjs.Rectangle(-400,-250,800,430), new cjs.Rectangle(-400,-240,800,469), new cjs.Rectangle(-400,-240,800,528), new cjs.Rectangle(-400,-240,800,587), new cjs.Rectangle(-400,-240,800,646), new cjs.Rectangle(-400,-240,800,705), new cjs.Rectangle(-400,-240,800,764), new cjs.Rectangle(-400,-240,800,823), new cjs.Rectangle(-400,-240,800,882), new cjs.Rectangle(-400,-240,800,941), new cjs.Rectangle(-400,-240,800,1000), new cjs.Rectangle(-400,-254,800,1014), new cjs.Rectangle(-400,-268,800,1028), new cjs.Rectangle(-400,-282,800,1042), new cjs.Rectangle(-400,-296,800,1056), new cjs.Rectangle(-400,-310,800,1070), new cjs.Rectangle(-400,-245,800,1005), new cjs.Rectangle(-400,-180,800,940), new cjs.Rectangle(-400,-115,800,875), new cjs.Rectangle(-400,-50,800,810), new cjs.Rectangle(-400,15,800,745), new cjs.Rectangle(-400,80,800,680), new cjs.Rectangle(-400,145,800,615), new cjs.Rectangle(-400,210,800,550), new cjs.Rectangle(-400,275,800,485), rect=new cjs.Rectangle(-400,340,800,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":159});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
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
			app.addSoundFunc("tink_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(106));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-190,30);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-550},0).wait(23).to({y:130},15).to({y:30},5).wait(25).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(51));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,-30);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-550},0).wait(43).to({y:70},15).to({y:-30},5).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-760,800,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-760,800,465.4), new cjs.Rectangle(-400,-760,800,510.7), new cjs.Rectangle(-400,-760,800,556), new cjs.Rectangle(-400,-760,800,601.4), new cjs.Rectangle(-400,-760,800,646.7), new cjs.Rectangle(-400,-760,800,692), new cjs.Rectangle(-400,-760,800,737.4), new cjs.Rectangle(-400,-760,800,782.7), new cjs.Rectangle(-400,-760,800,828), new cjs.Rectangle(-400,-760,800,873.4), new cjs.Rectangle(-400,-760,800,918.7), new cjs.Rectangle(-400,-760,800,964), new cjs.Rectangle(-400,-760,800,1009.4), new cjs.Rectangle(-400,-760,800,1054.7), new cjs.Rectangle(-400,-760,800,1100), new cjs.Rectangle(-400,-760,800,1080), new cjs.Rectangle(-400,-760,800,1060), new cjs.Rectangle(-400,-760,800,1040), new cjs.Rectangle(-400,-760,800,1020), new cjs.Rectangle(-400,-760,800,1000), new cjs.Rectangle(-400,-718.6,800,958.7), new cjs.Rectangle(-400,-677.3,800,917.4), new cjs.Rectangle(-400,-636,800,876), new cjs.Rectangle(-400,-594.6,800,834.7), new cjs.Rectangle(-400,-553.3,800,793.4), new cjs.Rectangle(-400,-512,800,752), new cjs.Rectangle(-400,-470.6,800,710.7), new cjs.Rectangle(-400,-429.3,800,669.4), new cjs.Rectangle(-400,-388,800,628), new cjs.Rectangle(-400,-346.6,800,586.7), new cjs.Rectangle(-400,-305.3,800,545.4), new cjs.Rectangle(-400,-264,800,504), new cjs.Rectangle(-400,-222.6,800,462.7), new cjs.Rectangle(-400,-181.3,800,421.4), new cjs.Rectangle(-400,-180,800,460), new cjs.Rectangle(-400,-180,800,440), new cjs.Rectangle(-400,-180,800,420), new cjs.Rectangle(-400,-200,800,440), new cjs.Rectangle(-400,-220,800,460), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, new cjs.Rectangle(-401.8,-240,801.8,481.8), new cjs.Rectangle(-403.6,-240,803.6,483.7), new cjs.Rectangle(-405.4,-240,805.4,485.4), new cjs.Rectangle(-407.1,-240,807.2,487.2), new cjs.Rectangle(-408.9,-240,808.9,489), new cjs.Rectangle(-410.7,-240,810.7,490.8), new cjs.Rectangle(-412.4,-240,812.4,492.5), new cjs.Rectangle(-414.1,-240,814.2,494.2), new cjs.Rectangle(-415.8,-240,815.8,495.9), new cjs.Rectangle(-417.5,-240,817.5,497.5), new cjs.Rectangle(-415.7,-240,815.8,495.8), new cjs.Rectangle(-414,-240,814,494.1), new cjs.Rectangle(-412.3,-240,812.4,492.5), new cjs.Rectangle(-410.6,-240,810.7,490.7), new cjs.Rectangle(-408.8,-240,808.9,488.9), new cjs.Rectangle(-407.1,-240,807.2,487.2), new cjs.Rectangle(-405.4,-240,805.4,485.4), new cjs.Rectangle(-403.6,-240,803.6,483.7), new cjs.Rectangle(-401.8,-240,801.8,481.9), new cjs.Rectangle(-399.9,-240,800,480), new cjs.Rectangle(-401.7,-240,801.8,481.8), new cjs.Rectangle(-403.5,-240,803.6,483.6), new cjs.Rectangle(-405.4,-240,805.4,485.5), new cjs.Rectangle(-407.1,-240,807.2,487.2), new cjs.Rectangle(-408.9,-240,808.9,488.9), new cjs.Rectangle(-410.6,-240,810.6,490.7), new cjs.Rectangle(-412.3,-240,812.4,492.4), new cjs.Rectangle(-414,-240,814.1,494.1), new cjs.Rectangle(-415.7,-240,815.7,495.8), new cjs.Rectangle(-417.5,-240,817.5,497.5), new cjs.Rectangle(-415.7,-240,815.7,495.8), new cjs.Rectangle(-414,-240,814.1,494.2), new cjs.Rectangle(-412.3,-240,812.3,492.4), new cjs.Rectangle(-410.6,-240,810.7,490.7), new cjs.Rectangle(-408.8,-240,808.9,489), new cjs.Rectangle(-407,-240,807.1,487.2), new cjs.Rectangle(-405.3,-240,805.3,485.4), new cjs.Rectangle(-403.5,-240,803.5,483.6), new cjs.Rectangle(-401.6,-240,801.7,481.8), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":139});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,-30);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(89).to({y:-100},5).to({y:550},10).wait(36));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,30);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(35).to({y:-40},5).to({y:550},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-240,801.8,481.8), new cjs.Rectangle(-400,-240,803.7,483.7), new cjs.Rectangle(-400,-240,805.4,485.4), new cjs.Rectangle(-400,-240,807.2,487.2), new cjs.Rectangle(-400,-240,809,489), new cjs.Rectangle(-400,-240,810.8,490.8), new cjs.Rectangle(-400,-240,812.5,492.5), new cjs.Rectangle(-400,-240,814.2,494.2), new cjs.Rectangle(-400,-240,815.9,495.9), new cjs.Rectangle(-400,-240,817.5,497.5), new cjs.Rectangle(-400,-240,815.8,495.8), new cjs.Rectangle(-400,-240,814.2,494.2), new cjs.Rectangle(-400,-240,812.4,492.4), new cjs.Rectangle(-400,-240,810.7,490.7), new cjs.Rectangle(-400,-240,809,488.9), new cjs.Rectangle(-400,-240,807.2,487.2), new cjs.Rectangle(-400,-240,805.4,485.4), new cjs.Rectangle(-400,-240,803.6,483.7), new cjs.Rectangle(-400,-240,801.8,481.9), new cjs.Rectangle(-400,-240,800,480), new cjs.Rectangle(-400,-240,801.8,481.8), new cjs.Rectangle(-400,-240,803.7,483.6), new cjs.Rectangle(-400,-240,805.4,485.5), new cjs.Rectangle(-400,-240,807.2,487.2), new cjs.Rectangle(-400,-240,808.9,489), new cjs.Rectangle(-400,-240,810.7,490.7), new cjs.Rectangle(-400,-240,812.4,492.4), new cjs.Rectangle(-400,-240,814.1,494.1), new cjs.Rectangle(-400,-240,815.8,495.8), new cjs.Rectangle(-400,-240,817.5,497.5), new cjs.Rectangle(-400,-240,815.8,495.8), new cjs.Rectangle(-400,-240,814.1,494.1), new cjs.Rectangle(-400,-240,812.4,492.4), new cjs.Rectangle(-400,-240,810.7,490.7), new cjs.Rectangle(-400,-240,808.9,489), new cjs.Rectangle(-400,-240,807.2,487.2), new cjs.Rectangle(-400,-240,805.4,485.3), new cjs.Rectangle(-400,-240,803.6,483.6), new cjs.Rectangle(-400,-240,801.8,481.8), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-254,800,494), new cjs.Rectangle(-400,-268,800,508), new cjs.Rectangle(-400,-282,800,522), new cjs.Rectangle(-400,-296,800,536), new cjs.Rectangle(-400,-310,800,550), new cjs.Rectangle(-400,-245,800,485), new cjs.Rectangle(-400,-180,800,420), new cjs.Rectangle(-400,-180,800,485), new cjs.Rectangle(-400,-180,800,550), new cjs.Rectangle(-400,-180,800,615), new cjs.Rectangle(-400,-180,800,680), new cjs.Rectangle(-400,-180,800,745), new cjs.Rectangle(-400,-180,800,810), new cjs.Rectangle(-400,-180,800,875), new cjs.Rectangle(-400,-180,800,940), new cjs.Rectangle(-400,-194,800,954), new cjs.Rectangle(-400,-208,800,968), new cjs.Rectangle(-400,-222,800,982), new cjs.Rectangle(-400,-236,800,996), new cjs.Rectangle(-400,-250,800,1010), new cjs.Rectangle(-400,-191,800,951), new cjs.Rectangle(-400,-132,800,892), new cjs.Rectangle(-400,-73,800,833), new cjs.Rectangle(-400,-14,800,774), new cjs.Rectangle(-400,45,800,715), new cjs.Rectangle(-400,104,800,656), new cjs.Rectangle(-400,163,800,597), new cjs.Rectangle(-400,222,800,538), new cjs.Rectangle(-400,281,800,479), rect=new cjs.Rectangle(-400,340,800,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":159});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
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
			app.addSoundFunc("tink_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(106));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,-30);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-550},0).wait(23).to({y:70},15).to({y:-30},5).wait(25).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(51));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,30);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-550},0).wait(43).to({y:130},15).to({y:30},5).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-760,800,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-760,800,461.4), new cjs.Rectangle(-400,-760,800,502.7), new cjs.Rectangle(-400,-760,800,544), new cjs.Rectangle(-400,-760,800,585.4), new cjs.Rectangle(-400,-760,800,626.7), new cjs.Rectangle(-400,-760,800,668), new cjs.Rectangle(-400,-760,800,709.4), new cjs.Rectangle(-400,-760,800,750.7), new cjs.Rectangle(-400,-760,800,792), new cjs.Rectangle(-400,-760,800,833.4), new cjs.Rectangle(-400,-760,800,874.7), new cjs.Rectangle(-400,-760,800,916), new cjs.Rectangle(-400,-760,800,957.4), new cjs.Rectangle(-400,-760,800,998.7), new cjs.Rectangle(-400,-760,800,1040), new cjs.Rectangle(-400,-760,800,1020), new cjs.Rectangle(-400,-760,800,1000), new cjs.Rectangle(-400,-760,800,980), new cjs.Rectangle(-400,-760,800,960), new cjs.Rectangle(-400,-760,800,940), new cjs.Rectangle(-400,-714.6,800,894.7), new cjs.Rectangle(-400,-669.3,800,849.4), new cjs.Rectangle(-400,-624,800,804), new cjs.Rectangle(-400,-578.6,800,758.7), new cjs.Rectangle(-400,-533.3,800,713.4), new cjs.Rectangle(-400,-488,800,668), new cjs.Rectangle(-400,-442.6,800,622.7), new cjs.Rectangle(-400,-397.3,800,577.4), new cjs.Rectangle(-400,-352,800,532), new cjs.Rectangle(-400,-306.6,800,486.7), new cjs.Rectangle(-400,-261.3,800,441.4), new cjs.Rectangle(-400,-240,800,444), new cjs.Rectangle(-400,-240,800,489.4), new cjs.Rectangle(-400,-240,800,534.7), new cjs.Rectangle(-400,-240,800,580), new cjs.Rectangle(-400,-240,800,560), new cjs.Rectangle(-400,-240,800,540), new cjs.Rectangle(-400,-240,800,520), new cjs.Rectangle(-400,-240,800,500), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, new cjs.Rectangle(-401.8,-241.8,801.8,481.8), new cjs.Rectangle(-403.6,-243.6,803.6,483.6), new cjs.Rectangle(-405.4,-245.4,805.4,485.4), new cjs.Rectangle(-407.1,-247.1,807.2,487.2), new cjs.Rectangle(-408.9,-248.9,808.9,488.9), new cjs.Rectangle(-410.7,-250.7,810.7,490.7), new cjs.Rectangle(-412.4,-252.4,812.4,492.4), new cjs.Rectangle(-414.1,-254.1,814.1,494.1), new cjs.Rectangle(-415.8,-255.8,815.8,495.8), new cjs.Rectangle(-417.5,-257.5,817.5,497.5), new cjs.Rectangle(-415.7,-255.7,815.7,495.8), new cjs.Rectangle(-414,-254,814.1,494.1), new cjs.Rectangle(-412.3,-252.3,812.3,492.3), new cjs.Rectangle(-410.6,-250.6,810.7,490.7), new cjs.Rectangle(-408.8,-248.9,808.9,488.9), new cjs.Rectangle(-407.1,-247.1,807.1,487.2), new cjs.Rectangle(-405.3,-245.4,805.4,485.4), new cjs.Rectangle(-403.5,-243.6,803.6,483.6), new cjs.Rectangle(-401.8,-241.7,801.8,481.8), new cjs.Rectangle(-399.9,-239.9,800,480), new cjs.Rectangle(-401.7,-241.8,801.8,481.8), new cjs.Rectangle(-403.5,-243.6,803.6,483.6), new cjs.Rectangle(-405.4,-245.3,805.4,485.4), new cjs.Rectangle(-407.1,-247.1,807.2,487.2), new cjs.Rectangle(-408.8,-248.9,808.9,488.9), new cjs.Rectangle(-410.6,-250.6,810.6,490.6), new cjs.Rectangle(-412.3,-252.3,812.3,492.3), new cjs.Rectangle(-414,-254,814,494), new cjs.Rectangle(-415.7,-255.7,815.7,495.8), new cjs.Rectangle(-417.5,-257.5,817.5,497.5), new cjs.Rectangle(-415.7,-255.7,815.8,495.7), new cjs.Rectangle(-414,-254,814,494), new cjs.Rectangle(-412.3,-252.3,812.4,492.4), new cjs.Rectangle(-410.6,-250.6,810.7,490.7), new cjs.Rectangle(-408.8,-248.8,808.9,488.8), new cjs.Rectangle(-407.1,-247.1,807.1,487.1), new cjs.Rectangle(-405.3,-245.3,805.4,485.3), new cjs.Rectangle(-403.5,-243.5,803.6,483.6), new cjs.Rectangle(-401.7,-241.7,801.7,481.8), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_makeup_0_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect];


(lib.current_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_hairstyle_0_mc();

	this.instance_1 = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, rect];


(lib.current_face_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_face_0_mc();

	this.instance_1 = new lib.current_face_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, rect];


(lib.bottom_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_6_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bottom_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_6_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bottom_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_5_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bottom_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_5_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bottom_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_4_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_4_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_3_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_3_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_2_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_2_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_1_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_1_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.instance = new lib.animation_vs_for_title_mc();
	this.instance.setTransform(24,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:18},0).wait(1).to({x:24},0).wait(11));

	// graph
	this.instance_1 = new lib.title_en_img();
	this.instance_1.setTransform(-250,-80);

	this.instance_2 = new lib.title_ru_img();
	this.instance_2.setTransform(-250,-80);

	this.instance_3 = new lib.title_es_img();
	this.instance_3.setTransform(-250,-80);

	this.instance_4 = new lib.title_pt_img();
	this.instance_4.setTransform(-250,-80);

	this.instance_5 = new lib.title_tr_img();
	this.instance_5.setTransform(-250,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-80,500,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.blush_6_2_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.blush_6_1_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.blush_5_2_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.blush_5_1_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.blush_4_2_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.blush_4_1_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.blush_3_2_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.blush_3_1_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.blush_2_2_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.blush_2_1_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.blush_1_2_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.blush_1_1_img();
	this.instance.setTransform(-40,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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
p.nominalBounds = rect = new cjs.Rectangle(-45,-40,90,90);
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
	this.instance.setTransform(0,0,0.9,0.9,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect];


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


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect];


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
	this.logo_mc = new lib.preloader_5_mc();
	this.logo_mc.setTransform(400,260);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// play
	this.play_mc = new lib.preloader_12_mc();
	this.play_mc.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.preloader_9_mc();
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
	this.remove_btn.setTransform(400,520);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.languages_1_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// screen
	this.screen_mc = new lib.languages_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// reserve
	this.zh = new lib.language_zh_mc();
	this.zh.setTransform(200,950);

	this.ja = new lib.language_ja_mc();
	this.ja.setTransform(600,1100);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ar},{t:this.de},{t:this.fr},{t:this.hi},{t:this.id},{t:this.it},{t:this.ja},{t:this.zh}]}).wait(1));

	// bg
	this.instance = new lib.languages_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,1165);
p.frameBounds = [rect];


(lib.top_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_9_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_9_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_8_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_8_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_7_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_7_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_6_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_6_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_5_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_5_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_4_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_4_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_3_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_3_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_2_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_2_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_1_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_1_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
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
p.nominalBounds = rect = new cjs.Rectangle(-250,-80,500,160);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.shadow_new22_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.shadow_new48_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.shadow_new37_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.shadow_new32_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.shadow_new29_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.shadow_new43_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.shadow_new43_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.shadow_new7_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.shadow_new25_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.shadow_new25_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.shadow_new7_img();
	this.instance.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApJITIiUlzIDglxIMplbIE6BSIB4F3IkJKQg");
	this.shape.setTransform(-16.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-70,159.8,140);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,665.8);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lipstick_new10_img();
	this.instance.setTransform(16.9,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lipstick_new40_img();
	this.instance.setTransform(16.9,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lipstick_new4_img();
	this.instance.setTransform(16.9,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lipstick_new22_img();
	this.instance.setTransform(16.9,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lipstick_new40_img();
	this.instance.setTransform(17,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lipstick_new32_img();
	this.instance.setTransform(17,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lipstick_new9_img();
	this.instance.setTransform(16.9,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lipstick_new38_img();
	this.instance.setTransform(16.9,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lipstick_new3_img();
	this.instance.setTransform(17,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lipstick_new3_img();
	this.instance.setTransform(17,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.lipstick_new2_img();
	this.instance.setTransform(17,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.lipstick_new2_img();
	this.instance.setTransform(17,-34.3,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,145);
p.frameBounds = [rect];


(lib.indicator_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(-130,-30);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance = new lib.indicator_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-62,280,102);
p.frameBounds = [rect];


(lib.hairstyle_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_9_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_9_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_8_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_8_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_7_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_7_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
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


(lib.faceart_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_6_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.faceart_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_6_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.faceart_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_5_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.faceart_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_5_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.faceart_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_4_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.faceart_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_4_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.faceart_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_3_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.faceart_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_3_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.faceart_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_2_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.faceart_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_2_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.faceart_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_1_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.faceart_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_1_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lens18_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lens18_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lens14_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lens10_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lens22_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lens28_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lens13_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lens13_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lens21_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwABj4QgBj3CwiwQCwiwD3ABQD4gBCwCwQCvCwAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.lens30_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwABj4QgBj3CwiwQCwiwD3ABQD4gBCwCwQCvCwAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.lens19_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.lens19_img();
	this.instance.setTransform(-20,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD4AACwCxQCwCwAAD2QAAD4iwCwQiwCwj4AAQj2AAiwiwg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.eyebrows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.eyebrows_6_2_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.eyebrows_6_1_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.eyebrows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.eyebrows_5_2_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.eyebrows_5_1_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.eyebrows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.eyebrows_4_2_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.eyebrows_4_1_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.eyebrows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.eyebrows_3_2_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.eyebrows_3_1_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.eyebrows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.eyebrows_2_2_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.eyebrows_2_1_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.eyebrows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.eyebrows_1_2_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.eyebrows_1_1_img();
	this.instance.setTransform(24.9,-30,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRG+ICUsqILrkCIDkCSIBAEVIkFIcIsWEag");
	this.shape.setTransform(-3.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,144.9);
p.frameBounds = [rect];


(lib.earrings_9_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings9_img();
	this.instance.setTransform(8,-37);

	this.instance_1 = new lib.hero1_earrings9_img();
	this.instance_1.setTransform(-23,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_earrings9_img();
	this.instance.setTransform(2,-33);

	this.instance_1 = new lib.hero2_earrings9_img();
	this.instance_1.setTransform(-35,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings9_img();
	this.instance.setTransform(8,-37);

	this.instance_1 = new lib.hero1_earrings9_img();
	this.instance_1.setTransform(-23,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_8_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings8_img();
	this.instance.setTransform(5,-31);

	this.instance_1 = new lib.hero1_earrings8_img();
	this.instance_1.setTransform(-28,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_earrings8_img();
	this.instance.setTransform(3,-30);

	this.instance_1 = new lib.hero2_earrings8_img();
	this.instance_1.setTransform(-34,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings8_img();
	this.instance.setTransform(5,-31);

	this.instance_1 = new lib.hero1_earrings8_img();
	this.instance_1.setTransform(-28,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings7_img();
	this.instance.setTransform(4,-40);

	this.instance_1 = new lib.hero1_earrings7_img();
	this.instance_1.setTransform(-29,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_earrings7_img();
	this.instance.setTransform(4,-47);

	this.instance_1 = new lib.hero2_earrings7_img();
	this.instance_1.setTransform(-33,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings7_img();
	this.instance.setTransform(4,-40);

	this.instance_1 = new lib.hero1_earrings7_img();
	this.instance_1.setTransform(-29,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings6_img();
	this.instance.setTransform(8,-30);

	this.instance_1 = new lib.hero1_earrings6_img();
	this.instance_1.setTransform(-22,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_earrings6_img();
	this.instance.setTransform(3,-40);

	this.instance_1 = new lib.hero2_earrings6_img();
	this.instance_1.setTransform(-31,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings6_img();
	this.instance.setTransform(8,-30);

	this.instance_1 = new lib.hero1_earrings6_img();
	this.instance_1.setTransform(-22,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings5_img();
	this.instance.setTransform(7,-30);

	this.instance_1 = new lib.hero1_earrings5_img();
	this.instance_1.setTransform(-26,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_earrings5_img();
	this.instance.setTransform(2,-35);

	this.instance_1 = new lib.hero2_earrings5_img();
	this.instance_1.setTransform(-35,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings5_img();
	this.instance.setTransform(7,-30);

	this.instance_1 = new lib.hero1_earrings5_img();
	this.instance_1.setTransform(-26,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings4_img();
	this.instance.setTransform(3,-46);

	this.instance_1 = new lib.hero1_earrings4_img();
	this.instance_1.setTransform(-31,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_earrings4_img();
	this.instance.setTransform(1,-38);

	this.instance_1 = new lib.hero2_earrings4_img();
	this.instance_1.setTransform(-39,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings4_img();
	this.instance.setTransform(3,-46);

	this.instance_1 = new lib.hero1_earrings4_img();
	this.instance_1.setTransform(-31,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings3_img();
	this.instance.setTransform(3,-28);

	this.instance_1 = new lib.hero1_earrings3_img();
	this.instance_1.setTransform(-30,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_earrings3_img();
	this.instance.setTransform(3,-36);

	this.instance_1 = new lib.hero2_earrings3_img();
	this.instance_1.setTransform(-35,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings3_img();
	this.instance.setTransform(3,-28);

	this.instance_1 = new lib.hero1_earrings3_img();
	this.instance_1.setTransform(-30,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings2_img();
	this.instance.setTransform(4,-32);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-31,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(3,-40);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-35,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings2_img();
	this.instance.setTransform(4,-32);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-31,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(5,-30);

	this.instance_1 = new lib.hero1_earrings1_img();
	this.instance_1.setTransform(-25,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(3,-34);

	this.instance_1 = new lib.hero2_earrings1_img();
	this.instance_1.setTransform(-28,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(5,-30);

	this.instance_1 = new lib.hero1_earrings1_img();
	this.instance_1.setTransform(-25,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_2 = new lib.substrate_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABotGLmMQGLmMIuAAQIuAAGMGMQGLGMABItQgBIvmLGLQmMGLouAAQouAAmLmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.decor_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(650,400,0.778,0.777);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(150,200,1,1,0,0,180);

	this.instance_2 = new lib.blinking_light_3_mc();
	this.instance_2.setTransform(750.1,300.1,0.4,0.4,0,0,0,0.1,0.1);

	this.instance_3 = new lib.blinking_light_3_mc();
	this.instance_3.setTransform(50.1,300.1,0.4,0.4,0,0,0,0.1,0.1);

	this.instance_4 = new lib.blinking_light_3_mc();
	this.instance_4.setTransform(200,400,0.6,0.6);

	this.instance_5 = new lib.blinking_light_3_mc();
	this.instance_5.setTransform(600,200,0.6,0.6);

	this.instance_6 = new lib.blinking_light_3_mc();
	this.instance_6.setTransform(100,400,0.6,0.6);

	this.instance_7 = new lib.blinking_light_3_mc();
	this.instance_7.setTransform(700,200,0.6,0.6);

	this.instance_8 = new lib.blinking_light_3_mc();
	this.instance_8.setTransform(600,500);

	this.instance_9 = new lib.blinking_light_3_mc();
	this.instance_9.setTransform(600,100);

	this.instance_10 = new lib.blinking_light_3_mc();
	this.instance_10.setTransform(200,500);

	this.instance_11 = new lib.blinking_light_3_mc();
	this.instance_11.setTransform(200,100);

	this.instance_12 = new lib.blinking_light_3_mc();
	this.instance_12.setTransform(600,300);

	this.instance_13 = new lib.blinking_light_3_mc();
	this.instance_13.setTransform(200,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,75,720,450);
p.frameBounds = [rect];


(lib.closet_makeup_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.faceart_0 = new lib.faceart_0_mc();
	this.faceart_0.setTransform(98,-240);

	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(98,-240);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(98,-240);

	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(98,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.faceart_0}]}).to({state:[]},3).to({state:[{t:this.lips_0}]},1).to({state:[{t:this.shadows_0}]},1).to({state:[{t:this.blush_0}]},1).to({state:[]},1).wait(1));

	// options
	this.faceart_2 = new lib.faceart_2_1_mc();
	this.faceart_2.setTransform(125,-30,1,1,0,0,180);

	this.faceart_1 = new lib.faceart_1_1_mc();
	this.faceart_1.setTransform(-125,0,1,1,0,0,180);

	this.faceart_4 = new lib.faceart_4_1_mc();
	this.faceart_4.setTransform(125,0,1,1,0,0,180);

	this.faceart_3 = new lib.faceart_3_1_mc();
	this.faceart_3.setTransform(-125,-30,1,1,0,0,180);

	this.faceart_6 = new lib.faceart_6_1_mc();
	this.faceart_6.setTransform(125,-30,1,1,0,0,180);

	this.faceart_5 = new lib.faceart_5_1_mc();
	this.faceart_5.setTransform(-125,0,1,1,0,0,180);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(125,25);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(10,45);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(-105,65);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(75,-100);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(-40,-80);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(-155,-60);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(135,20);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-30,-90);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-95,60);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(85,-110);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(20,40);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(-145,-70);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-50,65);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(-110,-155);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-80,-45);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(70,-45);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(40,-155);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(100,65);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(10,-25);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(-130,-15);

	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(70,75);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(-70,85);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(80,-125);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-60,-115);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(145,30);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(30,50);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(-85,70);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(85,-100);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(-30,-80);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(-145,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.faceart_1},{t:this.faceart_2}]}).to({state:[{t:this.faceart_3},{t:this.faceart_4}]},1).to({state:[{t:this.faceart_5},{t:this.faceart_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6},{t:this.shadows_4},{t:this.shadows_3},{t:this.shadows_2},{t:this.shadows_1}]},1).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_5},{t:this.blush_6},{t:this.blush_3},{t:this.blush_4}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,406);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-225,-170,420,305), new cjs.Rectangle(-215,-261,420,396), new cjs.Rectangle(-199.7,-261,369.8,396), new cjs.Rectangle(-200,-261,350,416), new cjs.Rectangle(-215,-170,430,314.9)];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.faceart_0 = new lib.faceart_0_mc();
	this.faceart_0.setTransform(98,-240);

	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(98,-240);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(98,-240);

	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(98,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.faceart_0}]}).to({state:[]},3).to({state:[{t:this.lips_0}]},1).to({state:[{t:this.shadows_0}]},1).to({state:[{t:this.blush_0}]},1).to({state:[]},1).wait(1));

	// options
	this.faceart_2 = new lib.faceart_2_2_mc();
	this.faceart_2.setTransform(125,-30);

	this.faceart_1 = new lib.faceart_1_2_mc();
	this.faceart_1.setTransform(-125,0);

	this.faceart_4 = new lib.faceart_4_2_mc();
	this.faceart_4.setTransform(125,0);

	this.faceart_3 = new lib.faceart_3_2_mc();
	this.faceart_3.setTransform(-125,-30);

	this.faceart_6 = new lib.faceart_6_2_mc();
	this.faceart_6.setTransform(125,-30);

	this.faceart_5 = new lib.faceart_5_2_mc();
	this.faceart_5.setTransform(-125,0);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(125,25);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(10,45);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(75,-100);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(-105,65);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(-40,-80);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(-155,-60);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(135,20);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(20,40);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(-95,60);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(85,-110);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(-30,-90);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(-145,-70);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-50,65);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(-110,-155);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-80,-45);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(95,65);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(40,-155);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(70,-45);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(10,-25);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(-130,-15);

	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(70,75);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(-70,85);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(80,-125);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-60,-115);

	this.eyebrows_6 = new lib.eyebrows_6_2_mc();
	this.eyebrows_6.setTransform(145,30);

	this.eyebrows_5 = new lib.eyebrows_5_2_mc();
	this.eyebrows_5.setTransform(-145,-60);

	this.eyebrows_4 = new lib.eyebrows_4_2_mc();
	this.eyebrows_4.setTransform(-85,70);

	this.eyebrows_3 = new lib.eyebrows_3_2_mc();
	this.eyebrows_3.setTransform(85,-100);

	this.eyebrows_2 = new lib.eyebrows_2_2_mc();
	this.eyebrows_2.setTransform(-30,-80);

	this.eyebrows_1 = new lib.eyebrows_1_2_mc();
	this.eyebrows_1.setTransform(30,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.faceart_1},{t:this.faceart_2}]}).to({state:[{t:this.faceart_3},{t:this.faceart_4}]},1).to({state:[{t:this.faceart_5},{t:this.faceart_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6},{t:this.shadows_4},{t:this.shadows_3},{t:this.shadows_2},{t:this.shadows_1}]},1).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_5},{t:this.blush_6},{t:this.blush_3},{t:this.blush_4}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,406);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-225,-170,420,305), new cjs.Rectangle(-215,-261,420,396), new cjs.Rectangle(-199.7,-261,364.8,396), new cjs.Rectangle(-200,-261,350,416), new cjs.Rectangle(-215,-170,430,314.9)];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.faceart_0 = new lib.faceart_0_mc();
	this.faceart_0.setTransform(98,-240);

	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(98,-240);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(98,-240);

	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(98,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.faceart_0}]}).to({state:[]},3).to({state:[{t:this.lips_0}]},1).to({state:[{t:this.shadows_0}]},1).to({state:[{t:this.blush_0}]},1).to({state:[]},1).wait(1));

	// options
	this.faceart_2 = new lib.faceart_2_1_mc();
	this.faceart_2.setTransform(125,-30);

	this.faceart_1 = new lib.faceart_1_1_mc();
	this.faceart_1.setTransform(-125,0);

	this.faceart_4 = new lib.faceart_4_1_mc();
	this.faceart_4.setTransform(125,0);

	this.faceart_3 = new lib.faceart_3_1_mc();
	this.faceart_3.setTransform(-125,-30);

	this.faceart_6 = new lib.faceart_6_1_mc();
	this.faceart_6.setTransform(125,-30);

	this.faceart_5 = new lib.faceart_5_1_mc();
	this.faceart_5.setTransform(-125,0);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(125,25);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(10,45);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(-105,65);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(75,-100);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(-40,-80);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(-155,-60);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(135,20);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-30,-90);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-95,60);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(85,-110);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(20,40);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(-145,-70);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-50,65);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(40,-155);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-80,-45);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(70,-45);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(100,60);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-110,-155);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(10,-25);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(-130,-15);

	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(70,75);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(-70,85);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(80,-125);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-60,-115);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(145,30);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(-145,-60);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(-85,70);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(85,-100);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(-30,-80);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(30,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.faceart_1},{t:this.faceart_2}]}).to({state:[{t:this.faceart_3},{t:this.faceart_4}]},1).to({state:[{t:this.faceart_5},{t:this.faceart_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6},{t:this.shadows_4},{t:this.shadows_3},{t:this.shadows_2},{t:this.shadows_1}]},1).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_5},{t:this.blush_6},{t:this.blush_3},{t:this.blush_4}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,406);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-225,-170,420,305), new cjs.Rectangle(-215,-261,420,396), new cjs.Rectangle(-199.7,-261,369.8,396), new cjs.Rectangle(-200,-261,350,416), new cjs.Rectangle(-215,-170,430,314.9)];


(lib.closet_hair_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-100,-240);
	this.earrings_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(9).to({_off:false},0).wait(3));

	// options
	this.hair_10 = new lib.hairstyle_1_2_mc();
	this.hair_10.setTransform(125,0);

	this.hair_9 = new lib.hairstyle_9_1_mc();
	this.hair_9.setTransform(-125,-60);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(125,-60);

	this.hair_11 = new lib.hairstyle_2_2_mc();
	this.hair_11.setTransform(-125,0);

	this.hair_14 = new lib.hairstyle_5_2_mc();
	this.hair_14.setTransform(125,0);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(-125,-60);

	this.hair_8 = new lib.hairstyle_8_1_mc();
	this.hair_8.setTransform(125,-60);

	this.hair_15 = new lib.hairstyle_6_2_mc();
	this.hair_15.setTransform(-125,0);

	this.hair_18 = new lib.hairstyle_9_2_mc();
	this.hair_18.setTransform(125,0);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(-125,-60);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(125,-60);

	this.hair_12 = new lib.hairstyle_3_2_mc();
	this.hair_12.setTransform(-125,0);

	this.hair_13 = new lib.hairstyle_4_2_mc();
	this.hair_13.setTransform(125,0);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(-125,-60);

	this.hair_7 = new lib.hairstyle_7_1_mc();
	this.hair_7.setTransform(125,-60);

	this.hair_16 = new lib.hairstyle_7_2_mc();
	this.hair_16.setTransform(-125,0);

	this.hair_17 = new lib.hairstyle_8_2_mc();
	this.hair_17.setTransform(125,0);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(-125,-60);

	this.earrings_6 = new lib.earrings_6_3_mc();
	this.earrings_6.setTransform(100,50);

	this.earrings_5 = new lib.earrings_5_3_mc();
	this.earrings_5.setTransform(140,-70);

	this.earrings_4 = new lib.earrings_4_3_mc();
	this.earrings_4.setTransform(-20,50);

	this.earrings_3 = new lib.earrings_3_3_mc();
	this.earrings_3.setTransform(-140,50);

	this.earrings_2 = new lib.earrings_2_3_mc();
	this.earrings_2.setTransform(20,-70);

	this.earrings_1 = new lib.earrings_1_3_mc();
	this.earrings_1.setTransform(-100,-70);

	this.earrings_12 = new lib.earrings_3_2_mc();
	this.earrings_12.setTransform(100,50);

	this.earrings_11 = new lib.earrings_2_2_mc();
	this.earrings_11.setTransform(-20,50);

	this.earrings_10 = new lib.earrings_1_2_mc();
	this.earrings_10.setTransform(-140,50);

	this.earrings_9 = new lib.earrings_9_3_mc();
	this.earrings_9.setTransform(140,-70);

	this.earrings_8 = new lib.earrings_8_3_mc();
	this.earrings_8.setTransform(20,-70);

	this.earrings_7 = new lib.earrings_7_3_mc();
	this.earrings_7.setTransform(-100,-70);

	this.earrings_18 = new lib.earrings_9_2_mc();
	this.earrings_18.setTransform(100,50);

	this.earrings_17 = new lib.earrings_8_2_mc();
	this.earrings_17.setTransform(-20,50);

	this.earrings_16 = new lib.earrings_7_2_mc();
	this.earrings_16.setTransform(-140,50);

	this.earrings_15 = new lib.earrings_6_2_mc();
	this.earrings_15.setTransform(140,-70);

	this.earrings_14 = new lib.earrings_5_2_mc();
	this.earrings_14.setTransform(20,-70);

	this.earrings_13 = new lib.earrings_4_2_mc();
	this.earrings_13.setTransform(-100,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_9},{t:this.hair_10}]}).to({state:[{t:this.hair_11},{t:this.hair_4}]},1).to({state:[{t:this.hair_6},{t:this.hair_14}]},1).to({state:[{t:this.hair_15},{t:this.hair_8}]},1).to({state:[{t:this.hair_2},{t:this.hair_18}]},1).to({state:[{t:this.hair_12},{t:this.hair_3}]},1).to({state:[{t:this.hair_5},{t:this.hair_13}]},1).to({state:[{t:this.hair_16},{t:this.hair_7}]},1).to({state:[{t:this.hair_1},{t:this.hair_17}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3},{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_7},{t:this.earrings_8},{t:this.earrings_9},{t:this.earrings_10},{t:this.earrings_11},{t:this.earrings_12}]},1).to({state:[{t:this.earrings_13},{t:this.earrings_14},{t:this.earrings_15},{t:this.earrings_16},{t:this.earrings_17},{t:this.earrings_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-205,540,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-261,420,381), rect, rect];


(lib.closet_dress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.dress_7 = new lib.dress_1_2_mc();
	this.dress_7.setTransform(125,-60);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(-125,0);

	this.dress_8 = new lib.dress_2_2_mc();
	this.dress_8.setTransform(-125,-60);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(125,0);

	this.dress_9 = new lib.dress_3_2_mc();
	this.dress_9.setTransform(125,-60);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-125,0);

	this.dress_10 = new lib.dress_4_2_mc();
	this.dress_10.setTransform(-125,-60);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(125,0);

	this.dress_11 = new lib.dress_5_2_mc();
	this.dress_11.setTransform(125,-60);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(-125,0);

	this.dress_12 = new lib.dress_6_2_mc();
	this.dress_12.setTransform(-125,-60);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(125,0);

	this.top_10 = new lib.top_1_2_mc();
	this.top_10.setTransform(125,-60);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(-125,0);

	this.top_11 = new lib.top_2_2_mc();
	this.top_11.setTransform(-125,-60);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(125,0);

	this.top_12 = new lib.top_3_2_mc();
	this.top_12.setTransform(125,-60);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(-125,0);

	this.top_13 = new lib.top_4_2_mc();
	this.top_13.setTransform(-125,-60);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(125,0);

	this.top_14 = new lib.top_5_2_mc();
	this.top_14.setTransform(125,-60);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(-125,0);

	this.top_15 = new lib.top_6_2_mc();
	this.top_15.setTransform(-125,-60);

	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(125,0);

	this.top_16 = new lib.top_7_2_mc();
	this.top_16.setTransform(125,-60);

	this.top_7 = new lib.top_7_1_mc();
	this.top_7.setTransform(-125,0);

	this.top_8 = new lib.top_8_1_mc();
	this.top_8.setTransform(125,0);

	this.top_18 = new lib.top_9_2_mc();
	this.top_18.setTransform(-125,-60);

	this.top_17 = new lib.top_8_2_mc();
	this.top_17.setTransform(125,-60);

	this.top_9 = new lib.top_9_1_mc();
	this.top_9.setTransform(-125,0);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(125,0);

	this.bottom_7 = new lib.bottom_1_2_mc();
	this.bottom_7.setTransform(-125,-60);

	this.bottom_12 = new lib.bottom_6_2_mc();
	this.bottom_12.setTransform(125,-60);

	this.bottom_6 = new lib.bottom_6_1_mc();
	this.bottom_6.setTransform(-125,0);

	this.bottom_9 = new lib.bottom_3_2_mc();
	this.bottom_9.setTransform(-125,-60);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(125,0);

	this.bottom_10 = new lib.bottom_4_2_mc();
	this.bottom_10.setTransform(125,-60);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(-125,0);

	this.bottom_11 = new lib.bottom_5_2_mc();
	this.bottom_11.setTransform(-125,-60);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(125,0);

	this.bottom_8 = new lib.bottom_2_2_mc();
	this.bottom_8.setTransform(125,-60);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(-125,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1},{t:this.dress_7}]}).to({state:[{t:this.dress_2},{t:this.dress_8}]},1).to({state:[{t:this.dress_3},{t:this.dress_9}]},1).to({state:[{t:this.dress_4},{t:this.dress_10}]},1).to({state:[{t:this.dress_5},{t:this.dress_11}]},1).to({state:[{t:this.dress_6},{t:this.dress_12}]},1).to({state:[{t:this.top_1},{t:this.top_10}]},1).to({state:[{t:this.top_2},{t:this.top_11}]},1).to({state:[{t:this.top_3},{t:this.top_12}]},1).to({state:[{t:this.top_4},{t:this.top_13}]},1).to({state:[{t:this.top_5},{t:this.top_14}]},1).to({state:[{t:this.top_6},{t:this.top_15}]},1).to({state:[{t:this.top_7},{t:this.top_16}]},1).to({state:[{t:this.top_18},{t:this.top_8}]},1).to({state:[{t:this.top_9},{t:this.top_17}]},1).to({state:[{t:this.bottom_7},{t:this.bottom_2}]},1).to({state:[{t:this.bottom_6},{t:this.bottom_12}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_9}]},1).to({state:[{t:this.bottom_4},{t:this.bottom_10}]},1).to({state:[{t:this.bottom_5},{t:this.bottom_11}]},1).to({state:[{t:this.bottom_1},{t:this.bottom_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-205,540,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.hair_1 = new lib.hair_1_mc();
	this.hair_1.setTransform(-100,-240);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-100,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1}]}).to({state:[]},4).to({state:[{t:this.earrings_0}]},11).wait(2));

	// options
	this.hair_9 = new lib.hairstyle_9_2_mc();
	this.hair_9.setTransform(125,-60);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(-125,0);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(125,0);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(-125,-60);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(125,-60);

	this.hair_8 = new lib.hairstyle_8_2_mc();
	this.hair_8.setTransform(-125,0);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(125,0);

	this.hair_7 = new lib.hairstyle_7_2_mc();
	this.hair_7.setTransform(-125,-60);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(125,-60);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(-125,0);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(125,0);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(-125,-60);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(125,-60);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(-125,0);

	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(125,0);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(-125,-60);

	this.top_4 = new lib.top_4_2_mc();
	this.top_4.setTransform(125,-60);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(-125,0);

	this.top_6 = new lib.top_6_2_mc();
	this.top_6.setTransform(125,0);

	this.top_5 = new lib.top_5_2_mc();
	this.top_5.setTransform(-125,-60);

	this.top_8 = new lib.top_8_2_mc();
	this.top_8.setTransform(125,-60);

	this.top_7 = new lib.top_7_2_mc();
	this.top_7.setTransform(-125,0);

	this.top_9 = new lib.top_9_2_mc();
	this.top_9.setTransform(10,0);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(125,0);

	this.bottom_6 = new lib.bottom_6_2_mc();
	this.bottom_6.setTransform(-125,-60);

	this.bottom_4 = new lib.bottom_4_2_mc();
	this.bottom_4.setTransform(125,-60);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(-125,0);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(125,0);

	this.bottom_5 = new lib.bottom_5_2_mc();
	this.bottom_5.setTransform(-125,-60);

	this.earrings_4 = new lib.earrings_4_2_mc();
	this.earrings_4.setTransform(70,50);

	this.earrings_3 = new lib.earrings_3_2_mc();
	this.earrings_3.setTransform(-70,70);

	this.earrings_2 = new lib.earrings_2_2_mc();
	this.earrings_2.setTransform(70,-70);

	this.earrings_1 = new lib.earrings_1_2_mc();
	this.earrings_1.setTransform(-70,-50);

	this.earrings_9 = new lib.earrings_9_2_mc();
	this.earrings_9.setTransform(80,-80);

	this.earrings_8 = new lib.earrings_8_2_mc();
	this.earrings_8.setTransform(110,40);

	this.earrings_7 = new lib.earrings_7_2_mc();
	this.earrings_7.setTransform(-80,80);

	this.earrings_6 = new lib.earrings_6_2_mc();

	this.earrings_5 = new lib.earrings_5_2_mc();
	this.earrings_5.setTransform(-110,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_5},{t:this.hair_9}]}).to({state:[{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.hair_8},{t:this.hair_6}]},1).to({state:[{t:this.hair_7},{t:this.hair_2}]},1).to({state:[{t:this.dress_1},{t:this.dress_2}]},1).to({state:[{t:this.dress_3},{t:this.dress_4}]},1).to({state:[{t:this.dress_6},{t:this.dress_5}]},1).to({state:[{t:this.top_1},{t:this.top_2}]},1).to({state:[{t:this.top_3},{t:this.top_4}]},1).to({state:[{t:this.top_5},{t:this.top_6}]},1).to({state:[{t:this.top_7},{t:this.top_8}]},1).to({state:[{t:this.top_9}]},1).to({state:[{t:this.bottom_6},{t:this.bottom_2}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_4}]},1).to({state:[{t:this.bottom_5},{t:this.bottom_1}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3},{t:this.earrings_4}]},1).to({state:[{t:this.earrings_5},{t:this.earrings_6},{t:this.earrings_7},{t:this.earrings_8},{t:this.earrings_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,406);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-270,-205,540,350), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-135,-145,290,290), rect=new cjs.Rectangle(-270,-205,540,350), rect, rect, new cjs.Rectangle(-140,-261,280,401), new cjs.Rectangle(-180,-261,360,411)];


(lib.closet_dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.hair_1 = new lib.hair_1_mc();
	this.hair_1.setTransform(-100,-240);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-100,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1}]}).to({state:[]},4).to({state:[{t:this.earrings_0}]},11).wait(2));

	// options
	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(125,0);

	this.hair_9 = new lib.hairstyle_9_1_mc();
	this.hair_9.setTransform(-125,-60);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(125,-60);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(-125,0);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(125,0);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(-125,-60);

	this.hair_8 = new lib.hairstyle_8_1_mc();
	this.hair_8.setTransform(125,-60);

	this.hair_7 = new lib.hairstyle_7_1_mc();
	this.hair_7.setTransform(-125,0);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(125,0);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(-125,-60);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(125,-60);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-125,0);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(125,0);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(-125,-60);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(125,-60);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(-125,0);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(125,0);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(-125,-60);

	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(125,-60);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(-125,0);

	this.top_8 = new lib.top_8_1_mc();
	this.top_8.setTransform(125,0);

	this.top_7 = new lib.top_7_1_mc();
	this.top_7.setTransform(-125,-60);

	this.top_9 = new lib.top_9_1_mc();
	this.top_9.setTransform(10,0);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(125,-60);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(-125,0);

	this.bottom_6 = new lib.bottom_6_1_mc();
	this.bottom_6.setTransform(125,0);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(-125,-60);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(125,-60);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(-125,0);

	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(70,50);

	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(-70,70);

	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(70,-70);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(-70,-50);

	this.earrings_9 = new lib.earrings_9_1_mc();
	this.earrings_9.setTransform(80,-80);

	this.earrings_8 = new lib.earrings_8_1_mc();
	this.earrings_8.setTransform(110,40);

	this.earrings_7 = new lib.earrings_7_1_mc();
	this.earrings_7.setTransform(-80,80);

	this.earrings_6 = new lib.earrings_6_1_mc();

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(-110,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_9},{t:this.hair_2}]}).to({state:[{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.hair_7},{t:this.hair_8}]},1).to({state:[{t:this.dress_1},{t:this.dress_2}]},1).to({state:[{t:this.dress_3},{t:this.dress_4}]},1).to({state:[{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.top_1},{t:this.top_2}]},1).to({state:[{t:this.top_3},{t:this.top_4}]},1).to({state:[{t:this.top_5},{t:this.top_6}]},1).to({state:[{t:this.top_7},{t:this.top_8}]},1).to({state:[{t:this.top_9}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_2}]},1).to({state:[{t:this.bottom_4},{t:this.bottom_6}]},1).to({state:[{t:this.bottom_5},{t:this.bottom_1}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3},{t:this.earrings_4}]},1).to({state:[{t:this.earrings_5},{t:this.earrings_6},{t:this.earrings_7},{t:this.earrings_8},{t:this.earrings_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,406);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-270,-205,540,350), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-135,-145,290,290), rect=new cjs.Rectangle(-270,-205,540,350), rect, rect, new cjs.Rectangle(-140,-261,280,401), new cjs.Rectangle(-180,-261,360,411)];


(lib.bodyDressupPanel_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_dress_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-205,540,350);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_hair_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-205,540,350);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_makeup_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,406);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_dress_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,406);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,406);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_dress_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,406);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,406);
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
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect];


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


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E60000").s().p("AzhIlIAAxJMAnDAAAIAARJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-125,-55,250,110)];


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


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(445,540);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(355,540);

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
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
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
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.199;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1780);
p.frameBounds = [rect];


(lib.dressupPanel_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140,190);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140,190);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-260,540,910);
p.frameBounds = [rect];


(lib.dressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140,190);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140,190);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-260,540,910);
p.frameBounds = [rect];


(lib.dressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-140,190);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(140,190);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,911);
p.frameBounds = [rect];


(lib.dressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140,190);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140,190);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,911);
p.frameBounds = [rect];


(lib.dressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140,190);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140,190);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,911);
p.frameBounds = [rect];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-140,190);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(140,190);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,911);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-140,190);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(140,190);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-261,540,911);
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
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1150.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,510,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,1050,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(590,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,750);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc}]}).wait(1));

	// text
	this.instance = new lib.title_mc();
	this.instance.setTransform(300,520);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.301;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1475.9);
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
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.quest_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":299});

	// timeline functions:
	this.frame_0 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_169 = function() {
		try
		{
			app.addSoundFunc("vanish_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(169).call(this.frame_169).wait(131));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(260,700,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(94).to({y:440},10).to({y:510},5).wait(191));

	// gift
	this.instance = new lib.gift_1_2_mc();
	this.instance.setTransform(260,1000);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:550},15).to({y:600},5).wait(5).to({rotation:-45,x:250,y:300},15).to({x:-600},15).wait(85).to({x:250},15).to({rotation:0,x:260,y:600},15).to({y:550},5).to({y:1000},15).wait(106));

	// gift
	this.instance_1 = new lib.gift_2_2_mc();
	this.instance_1.setTransform(260,1000);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:550},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(106));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_6_mc();
	this.dressupPanel_mc.setTransform(260,1000);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(59).to({regX:0.1,regY:0.1,scaleX:0.56,scaleY:0.56,x:260.1,y:1000.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:260,y:250},15).to({y:300},5).wait(45).to({y:250},5).to({regX:0.1,regY:0.1,scaleX:0.56,scaleY:0.56,x:260.1,y:1000.1},15).wait(156));

	// gift
	this.instance_2 = new lib.gift_3_2_mc();
	this.instance_2.setTransform(260,1000);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({y:550},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(106));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(154).to({_off:false},0).to({_off:true},100).wait(46));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(194).to({x:390},15).wait(91));

	// shadow
	this.instance_3 = new lib.shadow_dressup_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(194).to({_off:false},0).to({alpha:1},15).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,42.9,807.4,1607.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-23.9,42.9,821.3,1607.2), new cjs.Rectangle(-40.2,42.9,837.6,1607.2), new cjs.Rectangle(-55.7,42.9,853.1,1607.2), new cjs.Rectangle(-70.4,42.9,867.8,1607.2), new cjs.Rectangle(-84.2,42.9,881.6,1607.2), new cjs.Rectangle(-97,42.9,894.4,1607.2), new cjs.Rectangle(-109.4,32.8,906.8,1617.3), new cjs.Rectangle(-120.3,8.6,917.7,1641.4), new cjs.Rectangle(-129.5,-14.3,926.9,1664.4), new cjs.Rectangle(-138.4,-36.3,935.8,1686.4), new cjs.Rectangle(-146.1,-57.2,943.5,1707.3), new cjs.Rectangle(-152.7,-77,950.1,1727), new cjs.Rectangle(-158.3,-95.6,955.7,1745.6), new cjs.Rectangle(-163.7,-113.6,961.1,1763.7), new cjs.Rectangle(-219.5,-113,1016.9,1763), new cjs.Rectangle(-276.2,-113,1073.6,1763), new cjs.Rectangle(-332.8,-113,1130.2,1763), new cjs.Rectangle(-389.5,-113,1186.9,1763), new cjs.Rectangle(-446.1,-113,1243.5,1763), new cjs.Rectangle(-502.8,-113,1300.2,1763), new cjs.Rectangle(-559.5,-113,1356.9,1763), new cjs.Rectangle(-616.1,-113,1413.5,1763.1), new cjs.Rectangle(-672.8,-113,1470.2,1763.1), new cjs.Rectangle(-729.5,-113,1526.9,1763.1), new cjs.Rectangle(-786.1,-113,1583.5,1763.1), new cjs.Rectangle(-842.8,-113,1640.2,1763.1), new cjs.Rectangle(-899.5,-113,1696.9,1763.1), new cjs.Rectangle(-956.2,-113,1753.6,1763.1), new cjs.Rectangle(-1013.7,-113.6,1811.1,1474.8), new cjs.Rectangle(-1013.7,-113.6,1811.1,1444), new cjs.Rectangle(-1013.7,-113.6,1811.1,1413.3), new cjs.Rectangle(-1013.7,-113.6,1811.1,1382.5), new cjs.Rectangle(-1013.7,-113.6,1811.1,1351.8), new cjs.Rectangle(-1013.7,-113.6,1811.1,1321.1), new cjs.Rectangle(-1013.7,-113.6,1811.1,1290.2), new cjs.Rectangle(-1013.7,-113.6,1811.1,1259.6), new cjs.Rectangle(-1013.7,-113.6,1811.1,1228.8), new cjs.Rectangle(-1013.7,-113.6,1811.1,1198), new cjs.Rectangle(-1013.7,-113.6,1811.1,1167.3), new cjs.Rectangle(-1013.7,-113.6,1811.1,1136.5), new cjs.Rectangle(-1013.7,-113.6,1811.1,1105.8), new cjs.Rectangle(-1013.7,-113.6,1811.1,1075), new cjs.Rectangle(-1013.7,-113.6,1811.1,1044.3), new cjs.Rectangle(-1013.7,-113.6,1811.1,1013.7), new cjs.Rectangle(-1013.7,-113.6,1811.1,1023.7), new cjs.Rectangle(-1013.7,-113.6,1811.1,1033.7), new cjs.Rectangle(-1013.7,-113.6,1811.1,1043.7), new cjs.Rectangle(-1013.7,-113.6,1811.1,1053.7), rect=new cjs.Rectangle(-1013.7,-113.6,1811.1,1063.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1013.7,-113.6,1811.1,1053.7), new cjs.Rectangle(-1013.7,-113.6,1811.1,1043.7), new cjs.Rectangle(-1013.7,-113.6,1811.1,1033.7), new cjs.Rectangle(-1013.7,-113.6,1811.1,1023.7), new cjs.Rectangle(-1013.7,-113.6,1811.1,1013.7), new cjs.Rectangle(-1013.7,-113.6,1811.1,1044.4), new cjs.Rectangle(-1013.7,-113.6,1811.1,1075.1), new cjs.Rectangle(-1013.7,-113.6,1811.1,1105.9), new cjs.Rectangle(-1013.7,-113.6,1811.1,1136.6), new cjs.Rectangle(-1013.7,-113.6,1811.1,1167.4), new cjs.Rectangle(-1013.7,-113.6,1811.1,1198.1), new cjs.Rectangle(-1013.7,-113.6,1811.1,1228.9), new cjs.Rectangle(-1013.7,-113.6,1811.1,1259.6), new cjs.Rectangle(-1013.7,-113.6,1811.1,1290.3), new cjs.Rectangle(-1013.7,-113.6,1811.1,1321.1), new cjs.Rectangle(-1013.7,-113.6,1811.1,1351.8), new cjs.Rectangle(-1013.7,-113.6,1811.1,1382.6), new cjs.Rectangle(-1013.7,-113.6,1811.1,1413.3), new cjs.Rectangle(-1013.7,-113.6,1811.1,1444.1), new cjs.Rectangle(-1013.7,-113.6,1811.1,1474.8), new cjs.Rectangle(-956.2,-113.1,1753.6,1474.2), new cjs.Rectangle(-899.5,-113.1,1696.9,1474.2), new cjs.Rectangle(-842.9,-113.1,1640.3,1474.2), new cjs.Rectangle(-786.2,-113.1,1583.6,1474.2), new cjs.Rectangle(-729.5,-113.1,1526.9,1474.2), new cjs.Rectangle(-672.9,-113.1,1470.3,1474.2), new cjs.Rectangle(-616.2,-113.1,1413.6,1474.2), new cjs.Rectangle(-559.5,-113.1,1356.9,1474.2), new cjs.Rectangle(-502.9,-113.1,1300.3,1474.2), new cjs.Rectangle(-446.2,-387,1546.3,1748.1), new cjs.Rectangle(-389.6,-387,1489.6,1748.1), new cjs.Rectangle(-332.9,-387,1433,1748.1), rect=new cjs.Rectangle(-300,-387,1400,1748.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-387,1620,1748.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1371.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":129,"end":229});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_179 = function() {
		try
		{
			app.addSoundFunc("vanish_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(160).call(this.frame_179).wait(51));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(540,510,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(113).to({y:440},10).to({y:510},5).wait(101));

	// gift
	this.instance = new lib.gift_1_2_mc();
	this.instance.setTransform(540,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1000},0).wait(23).to({y:550},15).to({y:600},5).wait(25).to({rotation:45,x:550,y:300},15).to({x:1400},15).wait(55).to({x:550},15).to({rotation:0,x:540,y:600},15).to({y:550},5).to({y:1000},15).wait(26));

	// gift
	this.instance_1 = new lib.gift_2_2_mc();
	this.instance_1.setTransform(540,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1000},0).wait(23).to({y:550},15).to({y:600},5).wait(140).to({y:550},5).to({y:1000},15).wait(26));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_6_mc();
	this.dressupPanel_mc.setTransform(540,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(98).to({regY:0.1,scaleX:0.56,scaleY:0.56,y:1000.1},0).to({regY:0,scaleX:1,scaleY:1,y:250},15).to({y:300},5).wait(15).to({y:250},5).to({regY:0.1,scaleX:0.56,scaleY:0.56,y:1000.1},15).wait(76));

	// gift
	this.instance_2 = new lib.gift_3_2_mc();
	this.instance_2.setTransform(540,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:1000},0).wait(23).to({y:550},15).to({y:600},5).wait(140).to({y:550},5).to({y:1000},15).wait(26));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(160,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({x:-800},0).wait(43).to({x:250},20).to({x:160},5).wait(135).to({x:600},20).to({x:640},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10.4,40,799.7,910);
p.frameBounds = [rect, rect=new cjs.Rectangle(-949.6,42.9,1759.7,1607.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-897.1,42.9,1707.2,1607.2), new cjs.Rectangle(-844.6,42.9,1654.7,1607.2), new cjs.Rectangle(-792.1,42.9,1602.2,1607.2), new cjs.Rectangle(-739.6,42.9,1549.7,1607.2), new cjs.Rectangle(-687.1,42.9,1497.2,1607.2), new cjs.Rectangle(-634.6,42.9,1444.7,1607.2), new cjs.Rectangle(-582.1,42.9,1392.2,1607.2), new cjs.Rectangle(-529.6,42.9,1339.7,1607.2), new cjs.Rectangle(-477.1,42.9,1287.2,1607.2), new cjs.Rectangle(-424.6,42.9,1234.7,1607.2), new cjs.Rectangle(-372.1,42.9,1182.2,1607.2), new cjs.Rectangle(-319.6,42.9,1129.7,1607.2), new cjs.Rectangle(-267.1,42.9,1077.2,1607.2), new cjs.Rectangle(-214.6,42.9,1024.7,1607.2), new cjs.Rectangle(-162.1,42.9,972.2,1607.2), new cjs.Rectangle(-109.6,42.9,919.7,1607.2), new cjs.Rectangle(-57.1,42.9,867.2,1607.2), new cjs.Rectangle(-4.6,42.9,814.7,1607.2), new cjs.Rectangle(47.9,42.9,762.2,1607.2), new cjs.Rectangle(100.4,42.9,709.7,1607.2), new cjs.Rectangle(82.4,42.9,727.7,1607.2), new cjs.Rectangle(64.4,42.9,745.7,1607.2), new cjs.Rectangle(46.4,42.9,763.7,1607.2), new cjs.Rectangle(28.4,42.9,781.7,1607.2), rect=new cjs.Rectangle(10.4,42.9,799.7,1607.2), rect, new cjs.Rectangle(10.4,42.9,813.5,1607.2), new cjs.Rectangle(10.4,42.9,829.9,1607.2), new cjs.Rectangle(10.4,42.9,845.4,1607.2), new cjs.Rectangle(10.4,42.9,860.1,1607.2), new cjs.Rectangle(10.4,42.9,873.9,1607.2), new cjs.Rectangle(10.4,42.9,886.8,1607.2), new cjs.Rectangle(10.4,32.8,899.3,1617.3), new cjs.Rectangle(10.4,8.6,910.2,1641.4), new cjs.Rectangle(10.4,-14.3,919.4,1664.3), new cjs.Rectangle(10.4,-36.3,928.3,1686.3), new cjs.Rectangle(10.4,-57.1,936,1707.2), new cjs.Rectangle(10.4,-76.9,942.6,1726.9), new cjs.Rectangle(10.4,-95.5,948.2,1745.5), new cjs.Rectangle(10.4,-113.6,953.4,1763.7), new cjs.Rectangle(10.4,-113,1009.2,1763), new cjs.Rectangle(10.4,-113,1065.9,1763), new cjs.Rectangle(10.4,-113,1122.6,1763), new cjs.Rectangle(10.4,-113,1179.2,1763), new cjs.Rectangle(10.4,-113,1235.9,1763), new cjs.Rectangle(10.4,-113,1292.6,1763), new cjs.Rectangle(10.4,-113,1349.2,1763), new cjs.Rectangle(10.4,-113,1405.9,1763.1), new cjs.Rectangle(10.4,-113,1462.5,1763.1), new cjs.Rectangle(10.4,-113,1519.2,1763.1), new cjs.Rectangle(10.4,-113,1575.9,1763.1), new cjs.Rectangle(10.4,-113,1632.5,1763.1), new cjs.Rectangle(10.4,-113,1689.2,1763.1), new cjs.Rectangle(10.4,-113,1745.9,1763.1), new cjs.Rectangle(10.4,-113.6,1803.4,1474.8), new cjs.Rectangle(10.4,-113.6,1803.4,1444), new cjs.Rectangle(10.4,-113.6,1803.4,1413.3), new cjs.Rectangle(10.4,-113.6,1803.4,1382.5), new cjs.Rectangle(10.4,-113.6,1803.4,1351.8), new cjs.Rectangle(10.4,-113.6,1803.4,1321.1), new cjs.Rectangle(10.4,-113.6,1803.4,1290.2), new cjs.Rectangle(10.4,-113.6,1803.4,1259.6), new cjs.Rectangle(10.4,-113.6,1803.4,1228.8), new cjs.Rectangle(10.4,-113.6,1803.4,1198), new cjs.Rectangle(10.4,-113.6,1803.4,1167.3), new cjs.Rectangle(10.4,-113.6,1803.4,1136.5), new cjs.Rectangle(10.4,-113.6,1803.4,1105.8), new cjs.Rectangle(10.4,-113.6,1803.4,1075), new cjs.Rectangle(10.4,-113.6,1803.4,1044.3), new cjs.Rectangle(10.4,-113.6,1803.4,1013.7), new cjs.Rectangle(10.4,-113.6,1803.4,1023.7), new cjs.Rectangle(10.4,-113.6,1803.4,1033.7), new cjs.Rectangle(10.4,-113.6,1803.4,1043.7), new cjs.Rectangle(10.4,-113.6,1803.4,1053.7), rect=new cjs.Rectangle(10.4,-113.6,1803.4,1063.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10.4,-113.6,1803.4,1053.7), new cjs.Rectangle(10.4,-113.6,1803.4,1043.7), new cjs.Rectangle(10.4,-113.6,1803.4,1033.7), new cjs.Rectangle(10.4,-113.6,1803.4,1023.7), new cjs.Rectangle(10.4,-113.6,1803.4,1013.7), new cjs.Rectangle(10.4,-113.6,1803.4,1044.4), new cjs.Rectangle(10.4,-113.6,1803.4,1075.1), new cjs.Rectangle(10.4,-113.6,1803.4,1105.9), new cjs.Rectangle(10.4,-113.6,1803.4,1136.6), new cjs.Rectangle(10.4,-113.6,1803.4,1167.4), new cjs.Rectangle(10.4,-113.6,1803.4,1198.1), new cjs.Rectangle(10.4,-113.6,1803.4,1228.9), new cjs.Rectangle(10.4,-113.6,1803.4,1259.6), new cjs.Rectangle(10.4,-113.6,1803.4,1290.3), new cjs.Rectangle(10.4,-113.6,1803.4,1321.1), new cjs.Rectangle(10.4,-113.6,1803.4,1351.8), new cjs.Rectangle(10.4,-113.6,1803.4,1382.6), new cjs.Rectangle(10.4,-113.6,1803.4,1413.3), new cjs.Rectangle(10.4,-113.6,1803.4,1444.1), new cjs.Rectangle(10.4,-113.6,1803.4,1474.8), new cjs.Rectangle(10.4,-113,1745.9,1474.1), new cjs.Rectangle(10.4,-113,1689.2,1474.1), new cjs.Rectangle(10.4,-113,1632.5,1474.1), new cjs.Rectangle(10.4,-113,1575.9,1474.1), new cjs.Rectangle(10.4,-113,1519.2,1474.1), new cjs.Rectangle(10.4,-113,1462.5,1474.1), new cjs.Rectangle(10.4,-113,1405.9,1474.1), new cjs.Rectangle(10.4,-113,1349.2,1474.1), new cjs.Rectangle(10.4,-113,1292.5,1474.1), new cjs.Rectangle(10.4,-113,1235.9,1474.1), new cjs.Rectangle(10.4,-113,1179.2,1474.1), new cjs.Rectangle(10.4,-113,1122.5,1474.1), new cjs.Rectangle(10.4,-113,1065.9,1474.1), new cjs.Rectangle(10.4,-113,1009.2,1474.1), new cjs.Rectangle(10.4,-113.6,953.4,1474.8), new cjs.Rectangle(10.4,-95.6,948.2,1456.8), new cjs.Rectangle(10.4,-77,942.6,1438.1), new cjs.Rectangle(10.4,-57.3,936,1418.4), new cjs.Rectangle(10.4,-36.4,928.2,1397.6), new cjs.Rectangle(10.4,-14.4,919.4,1375.5), new cjs.Rectangle(10.4,8.5,910.2,1352.6), new cjs.Rectangle(10.4,32.7,899.3,1328.4), new cjs.Rectangle(10.4,42.9,886.7,1318.3), new cjs.Rectangle(10.4,42.9,874,1318.3), new cjs.Rectangle(10.4,42.9,860.2,1318.3), new cjs.Rectangle(10.4,42.9,845.5,1318.3), new cjs.Rectangle(10.4,42.9,829.9,1318.3), new cjs.Rectangle(10.4,42.9,813.6,1318.3), new cjs.Rectangle(10.4,42.9,796.4,1318.3), rect=new cjs.Rectangle(10.4,42.9,779.7,1318.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(32.4,42.9,757.7,1318.3), new cjs.Rectangle(54.4,42.9,735.7,1318.3), new cjs.Rectangle(76.4,42.9,713.7,1318.3), new cjs.Rectangle(98.4,42.9,691.7,1318.3), new cjs.Rectangle(120.4,42.9,669.7,1318.3), new cjs.Rectangle(142.4,42.9,647.7,1318.3), new cjs.Rectangle(164.4,42.9,625.7,1318.3), new cjs.Rectangle(186.4,42.9,603.7,1318.3), new cjs.Rectangle(208.4,42.9,581.7,1318.3), new cjs.Rectangle(230.4,42.9,559.7,1318.3), new cjs.Rectangle(252.4,42.9,537.7,1318.3), new cjs.Rectangle(274.4,42.9,515.7,1318.3), rect=new cjs.Rectangle(290,42.9,500,1318.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(290,42.9,507.4,1318.3)];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":129,"end":299});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_189 = function() {
		try
		{
			app.addSoundFunc("vanish_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(170).call(this.frame_189).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(260,510,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(113).to({y:440},10).to({y:510},5).wait(171));

	// gift
	this.instance = new lib.gift_1_1_mc();
	this.instance.setTransform(260,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1000},0).wait(23).to({y:500},15).to({y:600},5).wait(25).to({rotation:-45,x:250,y:300},15).to({x:-600},15).wait(65).to({x:250},15).to({rotation:0,x:260,y:600},15).to({y:550},5).to({y:1000},15).wait(86));

	// gift
	this.instance_1 = new lib.gift_2_1_mc();
	this.instance_1.setTransform(260,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1000},0).wait(23).to({y:500},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(86));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_5_mc();
	this.dressupPanel_mc.setTransform(260,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(98).to({regX:0.1,regY:0.1,scaleX:0.56,scaleY:0.56,x:260.1,y:1000.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:260,y:250},15).to({y:300},5).wait(25).to({y:250},5).to({regX:0.1,scaleX:0.56,scaleY:0.56,x:260.1,y:1000},15).wait(136));

	// gift
	this.instance_2 = new lib.gift_3_1_mc();
	this.instance_2.setTransform(260,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:1000},0).wait(23).to({y:500},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(86));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(630,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({x:1500},0).wait(43).to({x:560},20).to({x:630},5).wait(145).to({x:390},15).wait(71));

	// decor
	this.instance_3 = new lib.decor_shadow_mc();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(214).to({_off:false},0).to({alpha:1},15).wait(71));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(214).to({_off:false},0).to({alpha:1},15).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,39,797.4,911);
p.frameBounds = [rect, rect=new cjs.Rectangle(-10,42.9,1667.4,1607.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,42.9,1620.4,1607.2), new cjs.Rectangle(-10,42.9,1573.4,1607.2), new cjs.Rectangle(-10,42.9,1526.4,1607.2), new cjs.Rectangle(-10,42.9,1479.4,1607.2), new cjs.Rectangle(-10,42.9,1432.4,1607.2), new cjs.Rectangle(-10,42.9,1385.4,1607.2), new cjs.Rectangle(-10,42.9,1338.4,1607.2), new cjs.Rectangle(-10,42.9,1291.4,1607.2), new cjs.Rectangle(-10,42.9,1244.4,1607.2), new cjs.Rectangle(-10,42.9,1197.4,1607.2), new cjs.Rectangle(-10,42.9,1150.4,1607.2), new cjs.Rectangle(-10,42.9,1103.4,1607.2), new cjs.Rectangle(-10,42.9,1056.4,1607.2), new cjs.Rectangle(-10,42.9,1009.4,1607.2), new cjs.Rectangle(-10,42.9,962.4,1607.2), new cjs.Rectangle(-10,42.9,915.4,1607.2), new cjs.Rectangle(-10,42.9,868.4,1607.2), new cjs.Rectangle(-10,42.9,821.4,1607.2), new cjs.Rectangle(-10,42.9,774.4,1607.2), new cjs.Rectangle(-10,42.9,727.4,1607.2), new cjs.Rectangle(-10,42.9,741.4,1607.2), new cjs.Rectangle(-10,42.9,755.4,1607.2), new cjs.Rectangle(-10,42.9,769.4,1607.2), new cjs.Rectangle(-10,42.9,783.4,1607.2), rect=new cjs.Rectangle(-10,42.9,797.4,1607.2), rect, new cjs.Rectangle(-23.9,42.9,811.3,1607.2), new cjs.Rectangle(-40.2,42.9,827.6,1607.2), new cjs.Rectangle(-55.7,42.9,843.1,1607.2), new cjs.Rectangle(-70.4,42.9,857.8,1607.2), new cjs.Rectangle(-84.2,42.9,871.6,1607.2), new cjs.Rectangle(-97,42.9,884.4,1607.2), new cjs.Rectangle(-109.5,32.8,896.9,1617.3), new cjs.Rectangle(-120.4,8.6,907.8,1641.5), new cjs.Rectangle(-129.5,-14.4,916.9,1664.4), new cjs.Rectangle(-138.4,-36.4,925.8,1686.4), new cjs.Rectangle(-146.2,-57.3,933.6,1707.3), new cjs.Rectangle(-152.7,-77,940.1,1727.1), new cjs.Rectangle(-158.4,-95.6,945.8,1745.7), new cjs.Rectangle(-163.7,-113.6,951.1,1763.7), new cjs.Rectangle(-219.5,-113,1006.9,1763), new cjs.Rectangle(-276.2,-113,1063.6,1763), new cjs.Rectangle(-332.8,-113,1120.2,1763), new cjs.Rectangle(-389.5,-113,1176.9,1763), new cjs.Rectangle(-446.1,-113,1233.5,1763), new cjs.Rectangle(-502.8,-113,1290.2,1763), new cjs.Rectangle(-559.4,-113,1346.8,1763), new cjs.Rectangle(-616.1,-113,1403.5,1763), new cjs.Rectangle(-672.8,-113,1460.2,1763), new cjs.Rectangle(-729.4,-113,1516.8,1763), new cjs.Rectangle(-786.1,-113,1573.5,1763), new cjs.Rectangle(-842.8,-113,1630.2,1763), new cjs.Rectangle(-899.4,-113,1686.8,1763), new cjs.Rectangle(-956.1,-113,1743.5,1763), new cjs.Rectangle(-1013.7,-113.6,1801.1,1478.1), new cjs.Rectangle(-1013.7,-113.6,1801.1,1447.1), new cjs.Rectangle(-1013.7,-113.6,1801.1,1416.2), new cjs.Rectangle(-1013.7,-113.6,1801.1,1385.2), new cjs.Rectangle(-1013.7,-113.6,1801.1,1354.2), new cjs.Rectangle(-1013.7,-113.6,1801.1,1323.3), new cjs.Rectangle(-1013.7,-113.6,1801.1,1292.3), new cjs.Rectangle(-1013.7,-113.6,1801.1,1261.4), new cjs.Rectangle(-1013.7,-113.6,1801.1,1230.3), new cjs.Rectangle(-1013.7,-113.6,1801.1,1199.4), new cjs.Rectangle(-1013.7,-113.6,1801.1,1168.4), new cjs.Rectangle(-1013.7,-113.6,1801.1,1137.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1106.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1075.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1044.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1013.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1023.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1033.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1043.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1053.7), rect=new cjs.Rectangle(-1013.7,-113.6,1801.1,1063.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1013.7,-113.6,1801.1,1053.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1043.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1033.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1023.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1013.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1044.6), new cjs.Rectangle(-1013.7,-113.6,1801.1,1075.6), new cjs.Rectangle(-1013.7,-113.6,1801.1,1106.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1137.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1168.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1199.4), new cjs.Rectangle(-1013.7,-113.6,1801.1,1230.4), new cjs.Rectangle(-1013.7,-113.6,1801.1,1261.4), new cjs.Rectangle(-1013.7,-113.6,1801.1,1292.3), new cjs.Rectangle(-1013.7,-113.6,1801.1,1323.3), new cjs.Rectangle(-1013.7,-113.6,1801.1,1354.3), new cjs.Rectangle(-1013.7,-113.6,1801.1,1385.2), new cjs.Rectangle(-1013.7,-113.6,1801.1,1416.2), new cjs.Rectangle(-1013.7,-113.6,1801.1,1447.1), new cjs.Rectangle(-1013.7,-113.6,1801.1,1478.1), new cjs.Rectangle(-956.2,-113.1,1743.6,1477.6), new cjs.Rectangle(-899.5,-113.1,1686.9,1477.6), new cjs.Rectangle(-842.9,-113.1,1630.3,1477.6), new cjs.Rectangle(-786.2,-113.1,1573.6,1477.6), new cjs.Rectangle(-729.5,-113.1,1516.9,1477.6), new cjs.Rectangle(-672.9,-113.1,1460.3,1477.6), new cjs.Rectangle(-616.2,-113.1,1403.6,1477.6), new cjs.Rectangle(-559.5,-113.1,1346.9,1477.6), new cjs.Rectangle(-502.9,-113.1,1290.3,1477.6), new cjs.Rectangle(-446.2,-113.1,1233.6,1477.6), new cjs.Rectangle(-389.6,-113.1,1177,1477.6), new cjs.Rectangle(-332.9,-113.1,1120.3,1477.6), new cjs.Rectangle(-276.3,-113.1,1063.7,1477.6), new cjs.Rectangle(-219.6,-113.1,1007,1477.6), new cjs.Rectangle(-163.7,-113.6,951.1,1478.1), new cjs.Rectangle(-158.4,-95.6,945.8,1460.1), new cjs.Rectangle(-152.8,-76.9,940.2,1441.4), new cjs.Rectangle(-146.2,-57.2,933.6,1421.7), new cjs.Rectangle(-138.5,-36.3,925.9,1400.8), new cjs.Rectangle(-129.7,-14.3,917.1,1378.8), new cjs.Rectangle(-120.4,8.6,907.8,1355.9), new cjs.Rectangle(-109.6,32.8,897,1331.7), new cjs.Rectangle(-97,42.9,884.4,1321.6), new cjs.Rectangle(-84.2,42.9,871.6,1321.6), new cjs.Rectangle(-70.4,42.9,857.8,1321.6), new cjs.Rectangle(-55.7,42.9,843.1,1321.6), new cjs.Rectangle(-40.2,42.9,827.6,1321.6), new cjs.Rectangle(-23.9,42.9,811.3,1321.6), new cjs.Rectangle(-6.8,42.9,794.2,1321.6), rect=new cjs.Rectangle(10,42.9,777.4,1321.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1374.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":129,"end":299});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_189 = function() {
		try
		{
			app.addSoundFunc("vanish_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(170).call(this.frame_189).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(540,510,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(113).to({y:440},10).to({y:510},5).wait(171));

	// gift
	this.instance = new lib.gift_1_2_mc();
	this.instance.setTransform(540,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1000},0).wait(23).to({y:550},15).to({y:600},5).wait(25).to({rotation:45,x:550,y:300},15).to({x:1400},15).wait(65).to({x:550},15).to({rotation:0,x:540,y:600},15).to({y:550},5).to({y:1000},15).wait(86));

	// gift
	this.instance_1 = new lib.gift_2_2_mc();
	this.instance_1.setTransform(540,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1000},0).wait(23).to({y:550},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(86));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_4_mc();
	this.dressupPanel_mc.setTransform(540,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(98).to({regY:0.1,scaleX:0.56,scaleY:0.56,y:1000.1},0).to({regY:0,scaleX:1,scaleY:1,y:250},15).to({y:300},5).wait(25).to({y:250},5).to({scaleX:0.56,scaleY:0.56,y:1000},15).wait(136));

	// gift
	this.instance_2 = new lib.gift_3_2_mc();
	this.instance_2.setTransform(540,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:1000},0).wait(23).to({y:550},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(86));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(160,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:-800},0).wait(43).to({x:240},20).to({x:160},5).wait(145).to({x:400},15).wait(71));

	// decor
	this.instance_3 = new lib.decor_shadow_mc();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(214).to({_off:false},0).to({alpha:1},15).wait(71));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(214).to({_off:false},0).to({alpha:1},15).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.1,39,829.2,911);
p.frameBounds = [rect, rect=new cjs.Rectangle(-979.1,45.4,1789.2,1604.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-927.1,45.4,1737.2,1604.7), new cjs.Rectangle(-875.1,45.4,1685.2,1604.7), new cjs.Rectangle(-823.1,45.4,1633.2,1604.7), new cjs.Rectangle(-771.1,45.4,1581.2,1604.7), new cjs.Rectangle(-719.1,45.4,1529.2,1604.7), new cjs.Rectangle(-667.1,45.4,1477.2,1604.7), new cjs.Rectangle(-615.1,45.4,1425.2,1604.7), new cjs.Rectangle(-563.1,45.4,1373.2,1604.7), new cjs.Rectangle(-511.1,45.4,1321.2,1604.7), new cjs.Rectangle(-459.1,45.4,1269.2,1604.7), new cjs.Rectangle(-407.1,45.4,1217.2,1604.7), new cjs.Rectangle(-355.1,45.4,1165.2,1604.7), new cjs.Rectangle(-303.1,45.4,1113.2,1604.7), new cjs.Rectangle(-251.1,45.4,1061.2,1604.7), new cjs.Rectangle(-199.1,45.4,1009.2,1604.7), new cjs.Rectangle(-147.1,45.4,957.2,1604.7), new cjs.Rectangle(-95.1,45.4,905.2,1604.7), new cjs.Rectangle(-43.1,45.4,853.2,1604.7), new cjs.Rectangle(8.9,45.4,801.2,1604.7), new cjs.Rectangle(60.9,45.4,749.2,1604.7), new cjs.Rectangle(44.9,45.4,765.2,1604.7), new cjs.Rectangle(28.9,45.4,781.2,1604.7), new cjs.Rectangle(12.9,45.4,797.2,1604.7), new cjs.Rectangle(-3.1,45.4,813.2,1604.7), rect=new cjs.Rectangle(-19.1,45.4,829.2,1604.7), rect, new cjs.Rectangle(-19.1,45.4,843,1604.7), new cjs.Rectangle(-19.1,45.4,859.4,1604.7), new cjs.Rectangle(-19.1,45.4,874.9,1604.7), new cjs.Rectangle(-19.1,45.4,889.6,1604.7), new cjs.Rectangle(-19.1,45.4,903.4,1604.7), new cjs.Rectangle(-19.1,45.4,916.3,1604.7), new cjs.Rectangle(-19.1,32.8,928.8,1617.3), new cjs.Rectangle(-19.1,8.6,939.7,1641.4), new cjs.Rectangle(-19.1,-14.3,948.9,1664.3), new cjs.Rectangle(-19.1,-36.3,957.8,1686.3), new cjs.Rectangle(-19.1,-57.1,965.5,1707.2), new cjs.Rectangle(-19.1,-76.9,972.1,1726.9), new cjs.Rectangle(-19.1,-95.5,977.7,1745.5), new cjs.Rectangle(-19.1,-113.6,982.9,1763.7), new cjs.Rectangle(-19.1,-113,1038.7,1763), new cjs.Rectangle(-19.1,-113,1095.4,1763), new cjs.Rectangle(-19.1,-113,1152.1,1763), new cjs.Rectangle(-19.1,-113,1208.7,1763), new cjs.Rectangle(-19.1,-113,1265.4,1763), new cjs.Rectangle(-19.1,-113,1322.1,1763), new cjs.Rectangle(-19.1,-113,1378.7,1763), new cjs.Rectangle(-19.1,-113,1435.4,1763.1), new cjs.Rectangle(-19.1,-113,1492,1763.1), new cjs.Rectangle(-19.1,-113,1548.7,1763.1), new cjs.Rectangle(-19.1,-113,1605.4,1763.1), new cjs.Rectangle(-19.1,-113,1662,1763.1), new cjs.Rectangle(-19.1,-113,1718.7,1763.1), new cjs.Rectangle(-19.1,-113,1775.4,1763.1), new cjs.Rectangle(-19.1,-113.6,1832.9,1474.8), new cjs.Rectangle(-19.1,-113.6,1832.9,1444), new cjs.Rectangle(-19.1,-113.6,1832.9,1413.3), new cjs.Rectangle(-19.1,-113.6,1832.9,1382.5), new cjs.Rectangle(-19.1,-113.6,1832.9,1351.8), new cjs.Rectangle(-19.1,-113.6,1832.9,1321.1), new cjs.Rectangle(-19.1,-113.6,1832.9,1290.2), new cjs.Rectangle(-19.1,-113.6,1832.9,1259.6), new cjs.Rectangle(-19.1,-113.6,1832.9,1228.8), new cjs.Rectangle(-19.1,-113.6,1832.9,1198), new cjs.Rectangle(-19.1,-113.6,1832.9,1167.3), new cjs.Rectangle(-19.1,-113.6,1832.9,1136.5), new cjs.Rectangle(-19.1,-113.6,1832.9,1105.8), new cjs.Rectangle(-19.1,-113.6,1832.9,1075), new cjs.Rectangle(-19.1,-113.6,1832.9,1044.3), new cjs.Rectangle(-19.1,-113.6,1832.9,1013.7), new cjs.Rectangle(-19.1,-113.6,1832.9,1023.7), new cjs.Rectangle(-19.1,-113.6,1832.9,1033.7), new cjs.Rectangle(-19.1,-113.6,1832.9,1043.7), new cjs.Rectangle(-19.1,-113.6,1832.9,1053.7), rect=new cjs.Rectangle(-19.1,-113.6,1832.9,1063.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-19.1,-113.6,1832.9,1053.7), new cjs.Rectangle(-19.1,-113.6,1832.9,1043.7), new cjs.Rectangle(-19.1,-113.6,1832.9,1033.7), new cjs.Rectangle(-19.1,-113.6,1832.9,1023.7), new cjs.Rectangle(-19.1,-113.6,1832.9,1013.7), new cjs.Rectangle(-19.1,-113.6,1832.9,1044.4), new cjs.Rectangle(-19.1,-113.6,1832.9,1075.1), new cjs.Rectangle(-19.1,-113.6,1832.9,1105.9), new cjs.Rectangle(-19.1,-113.6,1832.9,1136.6), new cjs.Rectangle(-19.1,-113.6,1832.9,1167.4), new cjs.Rectangle(-19.1,-113.6,1832.9,1198.1), new cjs.Rectangle(-19.1,-113.6,1832.9,1228.9), new cjs.Rectangle(-19.1,-113.6,1832.9,1259.6), new cjs.Rectangle(-19.1,-113.6,1832.9,1290.3), new cjs.Rectangle(-19.1,-113.6,1832.9,1321.1), new cjs.Rectangle(-19.1,-113.6,1832.9,1351.8), new cjs.Rectangle(-19.1,-113.6,1832.9,1382.5), new cjs.Rectangle(-19.1,-113.6,1832.9,1413.3), new cjs.Rectangle(-19.1,-113.6,1832.9,1444), new cjs.Rectangle(-19.1,-113.6,1832.9,1474.8), new cjs.Rectangle(-19.1,-113,1775.4,1474.1), new cjs.Rectangle(-19.1,-113,1718.7,1474.1), new cjs.Rectangle(-19.1,-113,1662,1474.1), new cjs.Rectangle(-19.1,-113,1605.4,1474.1), new cjs.Rectangle(-19.1,-113,1548.7,1474.1), new cjs.Rectangle(-19.1,-113,1492,1474.1), new cjs.Rectangle(-19.1,-113,1435.4,1474.1), new cjs.Rectangle(-19.1,-113,1378.7,1474.1), new cjs.Rectangle(-19.1,-113,1322,1474.1), new cjs.Rectangle(-19.1,-113,1265.4,1474.1), new cjs.Rectangle(-19.1,-113,1208.7,1474.1), new cjs.Rectangle(-19.1,-113,1152,1474.1), new cjs.Rectangle(-19.1,-113,1095.4,1474.1), new cjs.Rectangle(-19.1,-113,1038.7,1474.1), new cjs.Rectangle(-19.1,-113.6,982.9,1474.8), new cjs.Rectangle(-19.1,-95.6,977.7,1456.8), new cjs.Rectangle(-19.1,-77,972.1,1438.1), new cjs.Rectangle(-19.1,-57.3,965.5,1418.4), new cjs.Rectangle(-19.1,-36.4,957.7,1397.6), new cjs.Rectangle(-19.1,-14.4,948.9,1375.5), new cjs.Rectangle(-19.1,8.5,939.7,1352.6), new cjs.Rectangle(-19.1,32.7,928.8,1328.4), new cjs.Rectangle(-19.1,45.4,916.2,1315.8), new cjs.Rectangle(-19.1,45.4,903.5,1315.8), new cjs.Rectangle(-19.1,45.4,889.7,1315.8), new cjs.Rectangle(-19.1,45.4,875,1315.8), new cjs.Rectangle(-19.1,45.4,859.4,1315.8), new cjs.Rectangle(-19.1,45.4,843.1,1315.8), new cjs.Rectangle(-19.1,45.4,826,1315.8), rect=new cjs.Rectangle(-19.1,45.4,809.2,1315.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1371.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":129,"end":299});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_189 = function() {
		try
		{
			app.addSoundFunc("vanish_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(170).call(this.frame_189).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(260,510,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(113).to({y:440},10).to({y:510},5).wait(171));

	// gift
	this.instance = new lib.gift_1_2_mc();
	this.instance.setTransform(260,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1000},0).wait(23).to({y:550},15).to({y:600},5).wait(25).to({rotation:-45,x:250,y:300},15).to({x:-600},15).wait(65).to({x:250},15).to({rotation:0,x:260,y:600},15).to({y:550},5).to({y:1000},15).wait(86));

	// gift
	this.instance_1 = new lib.gift_2_2_mc();
	this.instance_1.setTransform(260,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1000},0).wait(23).to({y:550},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(86));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_3_mc();
	this.dressupPanel_mc.setTransform(260,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(98).to({regX:0.1,regY:0.1,scaleX:0.56,scaleY:0.56,x:260.1,y:1000.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:260,y:250},15).to({y:300},5).wait(25).to({y:250},5).to({regX:0.1,regY:0.1,scaleX:0.56,scaleY:0.56,x:260.1,y:1000.1},15).wait(136));

	// gift
	this.instance_2 = new lib.gift_3_2_mc();
	this.instance_2.setTransform(260,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:1000},0).wait(23).to({y:550},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(86));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(630,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1500},0).wait(43).to({x:550},20).to({x:630},5).wait(145).to({x:400},15).wait(71));

	// decor
	this.instance_3 = new lib.decor_shadow_mc();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(214).to({_off:false},0).to({alpha:1},15).wait(71));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(214).to({_off:false},0).to({alpha:1},15).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,39,818.9,911);
p.frameBounds = [rect, rect=new cjs.Rectangle(-10,45.4,1688.9,1604.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,45.4,1641.4,1604.7), new cjs.Rectangle(-10,45.4,1593.9,1604.7), new cjs.Rectangle(-10,45.4,1546.4,1604.7), new cjs.Rectangle(-10,45.4,1498.9,1604.7), new cjs.Rectangle(-10,45.4,1451.4,1604.7), new cjs.Rectangle(-10,45.4,1403.9,1604.7), new cjs.Rectangle(-10,45.4,1356.4,1604.7), new cjs.Rectangle(-10,45.4,1308.9,1604.7), new cjs.Rectangle(-10,45.4,1261.4,1604.7), new cjs.Rectangle(-10,45.4,1213.9,1604.7), new cjs.Rectangle(-10,45.4,1166.4,1604.7), new cjs.Rectangle(-10,45.4,1118.9,1604.7), new cjs.Rectangle(-10,45.4,1071.4,1604.7), new cjs.Rectangle(-10,45.4,1023.9,1604.7), new cjs.Rectangle(-10,45.4,976.4,1604.7), new cjs.Rectangle(-10,45.4,928.9,1604.7), new cjs.Rectangle(-10,45.4,881.4,1604.7), new cjs.Rectangle(-10,45.4,833.9,1604.7), new cjs.Rectangle(-10,45.4,786.4,1604.7), new cjs.Rectangle(-10,45.4,738.9,1604.7), new cjs.Rectangle(-10,45.4,754.9,1604.7), new cjs.Rectangle(-10,45.4,770.9,1604.7), new cjs.Rectangle(-10,45.4,786.9,1604.7), new cjs.Rectangle(-10,45.4,802.9,1604.7), rect=new cjs.Rectangle(-10,45.4,818.9,1604.7), rect, new cjs.Rectangle(-23.9,45.4,832.8,1604.7), new cjs.Rectangle(-40.2,45.4,849.1,1604.7), new cjs.Rectangle(-55.7,45.4,864.6,1604.7), new cjs.Rectangle(-70.4,45.4,879.3,1604.7), new cjs.Rectangle(-84.2,45.4,893.1,1604.7), new cjs.Rectangle(-97,45.4,905.9,1604.7), new cjs.Rectangle(-109.4,32.8,918.3,1617.3), new cjs.Rectangle(-120.3,8.6,929.2,1641.4), new cjs.Rectangle(-129.5,-14.3,938.4,1664.4), new cjs.Rectangle(-138.4,-36.3,947.3,1686.4), new cjs.Rectangle(-146.1,-57.2,955,1707.3), new cjs.Rectangle(-152.7,-77,961.6,1727), new cjs.Rectangle(-158.3,-95.6,967.2,1745.6), new cjs.Rectangle(-163.7,-113.6,972.6,1763.7), new cjs.Rectangle(-219.5,-113,1028.4,1763), new cjs.Rectangle(-276.2,-113,1085.1,1763), new cjs.Rectangle(-332.8,-113,1141.7,1763), new cjs.Rectangle(-389.5,-113,1198.4,1763), new cjs.Rectangle(-446.1,-113,1255,1763), new cjs.Rectangle(-502.8,-113,1311.7,1763), new cjs.Rectangle(-559.5,-113,1368.4,1763), new cjs.Rectangle(-616.1,-113,1425,1763.1), new cjs.Rectangle(-672.8,-113,1481.7,1763.1), new cjs.Rectangle(-729.5,-113,1538.4,1763.1), new cjs.Rectangle(-786.1,-113,1595,1763.1), new cjs.Rectangle(-842.8,-113,1651.7,1763.1), new cjs.Rectangle(-899.5,-113,1708.4,1763.1), new cjs.Rectangle(-956.2,-113,1765.1,1763.1), new cjs.Rectangle(-1013.7,-113.6,1822.6,1478.1), new cjs.Rectangle(-1013.7,-113.6,1822.6,1447.1), new cjs.Rectangle(-1013.7,-113.6,1822.6,1416.2), new cjs.Rectangle(-1013.7,-113.6,1822.6,1385.2), new cjs.Rectangle(-1013.7,-113.6,1822.6,1354.2), new cjs.Rectangle(-1013.7,-113.6,1822.6,1323.3), new cjs.Rectangle(-1013.7,-113.6,1822.6,1292.3), new cjs.Rectangle(-1013.7,-113.6,1822.6,1261.4), new cjs.Rectangle(-1013.7,-113.6,1822.6,1230.3), new cjs.Rectangle(-1013.7,-113.6,1822.6,1199.4), new cjs.Rectangle(-1013.7,-113.6,1822.6,1168.4), new cjs.Rectangle(-1013.7,-113.6,1822.6,1137.5), new cjs.Rectangle(-1013.7,-113.6,1822.6,1106.5), new cjs.Rectangle(-1013.7,-113.6,1822.6,1075.5), new cjs.Rectangle(-1013.7,-113.6,1822.6,1044.5), new cjs.Rectangle(-1013.7,-113.6,1822.6,1013.7), new cjs.Rectangle(-1013.7,-113.6,1822.6,1023.7), new cjs.Rectangle(-1013.7,-113.6,1822.6,1033.7), new cjs.Rectangle(-1013.7,-113.6,1822.6,1043.7), new cjs.Rectangle(-1013.7,-113.6,1822.6,1053.7), rect=new cjs.Rectangle(-1013.7,-113.6,1822.6,1063.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1013.7,-113.6,1822.6,1053.7), new cjs.Rectangle(-1013.7,-113.6,1822.6,1043.7), new cjs.Rectangle(-1013.7,-113.6,1822.6,1033.7), new cjs.Rectangle(-1013.7,-113.6,1822.6,1023.7), new cjs.Rectangle(-1013.7,-113.6,1822.6,1013.7), new cjs.Rectangle(-1013.7,-113.6,1822.6,1044.6), new cjs.Rectangle(-1013.7,-113.6,1822.6,1075.6), new cjs.Rectangle(-1013.7,-113.6,1822.6,1106.5), new cjs.Rectangle(-1013.7,-113.6,1822.6,1137.5), new cjs.Rectangle(-1013.7,-113.6,1822.6,1168.5), new cjs.Rectangle(-1013.7,-113.6,1822.6,1199.4), new cjs.Rectangle(-1013.7,-113.6,1822.6,1230.4), new cjs.Rectangle(-1013.7,-113.6,1822.6,1261.4), new cjs.Rectangle(-1013.7,-113.6,1822.6,1292.4), new cjs.Rectangle(-1013.7,-113.6,1822.6,1323.3), new cjs.Rectangle(-1013.7,-113.6,1822.6,1354.3), new cjs.Rectangle(-1013.7,-113.6,1822.6,1385.3), new cjs.Rectangle(-1013.7,-113.6,1822.6,1416.2), new cjs.Rectangle(-1013.7,-113.6,1822.6,1447.2), new cjs.Rectangle(-1013.7,-113.6,1822.6,1478.1), new cjs.Rectangle(-956.2,-113.1,1765.1,1477.6), new cjs.Rectangle(-899.5,-113.1,1708.4,1477.6), new cjs.Rectangle(-842.9,-113.1,1651.8,1477.6), new cjs.Rectangle(-786.2,-113.1,1595.1,1477.6), new cjs.Rectangle(-729.5,-113.1,1538.4,1477.6), new cjs.Rectangle(-672.9,-113.1,1481.8,1477.6), new cjs.Rectangle(-616.2,-113.1,1425.1,1477.6), new cjs.Rectangle(-559.5,-113.1,1368.4,1477.6), new cjs.Rectangle(-502.9,-113.1,1311.8,1477.6), new cjs.Rectangle(-446.2,-113.1,1255.1,1477.6), new cjs.Rectangle(-389.6,-113.1,1198.5,1477.6), new cjs.Rectangle(-332.9,-113.1,1141.8,1477.6), new cjs.Rectangle(-276.3,-113.1,1085.2,1477.6), new cjs.Rectangle(-219.6,-113.1,1028.5,1477.6), new cjs.Rectangle(-163.7,-113.6,972.6,1478.1), new cjs.Rectangle(-158.4,-95.6,967.3,1460.1), new cjs.Rectangle(-152.8,-76.9,961.7,1441.4), new cjs.Rectangle(-146.2,-57.2,955.1,1421.7), new cjs.Rectangle(-138.5,-36.3,947.4,1400.8), new cjs.Rectangle(-129.7,-14.3,938.6,1378.8), new cjs.Rectangle(-120.4,8.6,929.3,1355.9), new cjs.Rectangle(-109.6,32.8,918.5,1331.7), new cjs.Rectangle(-97,45.4,905.9,1319.1), new cjs.Rectangle(-84.2,45.4,893.1,1319.1), new cjs.Rectangle(-70.4,45.4,879.3,1319.1), new cjs.Rectangle(-55.7,45.4,864.6,1319.1), new cjs.Rectangle(-40.2,45.4,849.1,1319.1), new cjs.Rectangle(-23.9,45.4,832.8,1319.1), new cjs.Rectangle(-6.8,45.4,815.7,1319.1), rect=new cjs.Rectangle(10,45.4,798.9,1319.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1374.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":129,"end":299});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_189 = function() {
		try
		{
			app.addSoundFunc("vanish_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(170).call(this.frame_189).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(540,510,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(113).to({y:440},10).to({y:510},5).wait(171));

	// gift
	this.instance = new lib.gift_1_1_mc();
	this.instance.setTransform(540,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1000},0).wait(23).to({y:500},15).to({y:600},5).wait(25).to({rotation:45,x:550,y:300},15).to({x:1500},15).wait(65).to({x:550},15).to({rotation:0,x:540,y:600},15).to({y:550},5).to({y:1000},15).wait(86));

	// gift
	this.instance_1 = new lib.gift_2_1_mc();
	this.instance_1.setTransform(540,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1000},0).wait(23).to({y:500},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(86));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(540,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(98).to({regY:0.1,scaleX:0.56,scaleY:0.56,y:1000.1},0).to({regY:0,scaleX:1,scaleY:1,y:250},15).to({y:300},5).wait(25).to({y:250},0).to({y:300},5).to({scaleX:0.56,scaleY:0.56,y:1000},15).wait(136));

	// gift
	this.instance_2 = new lib.gift_3_1_mc();
	this.instance_2.setTransform(540,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:1000},0).wait(23).to({y:500},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(86));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(150,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-800},0).wait(43).to({x:250},20).to({x:150},5).wait(145).to({x:390},15).wait(71));

	// decor
	this.instance_3 = new lib.decor_shadow_mc();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(214).to({_off:false},0).to({alpha:1},15).wait(71));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(214).to({_off:false},0).to({alpha:1},15).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.4,39,809.7,911);
p.frameBounds = [rect, rect=new cjs.Rectangle(-949.6,42.9,1759.7,1607.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-897.1,42.9,1707.2,1607.2), new cjs.Rectangle(-844.6,42.9,1654.7,1607.2), new cjs.Rectangle(-792.1,42.9,1602.2,1607.2), new cjs.Rectangle(-739.6,42.9,1549.7,1607.2), new cjs.Rectangle(-687.1,42.9,1497.2,1607.2), new cjs.Rectangle(-634.6,42.9,1444.7,1607.2), new cjs.Rectangle(-582.1,42.9,1392.2,1607.2), new cjs.Rectangle(-529.6,42.9,1339.7,1607.2), new cjs.Rectangle(-477.1,42.9,1287.2,1607.2), new cjs.Rectangle(-424.6,42.9,1234.7,1607.2), new cjs.Rectangle(-372.1,42.9,1182.2,1607.2), new cjs.Rectangle(-319.6,42.9,1129.7,1607.2), new cjs.Rectangle(-267.1,42.9,1077.2,1607.2), new cjs.Rectangle(-214.6,42.9,1024.7,1607.2), new cjs.Rectangle(-162.1,42.9,972.2,1607.2), new cjs.Rectangle(-109.6,42.9,919.7,1607.2), new cjs.Rectangle(-57.1,42.9,867.2,1607.2), new cjs.Rectangle(-4.6,42.9,814.7,1607.2), new cjs.Rectangle(47.9,42.9,762.2,1607.2), new cjs.Rectangle(100.4,42.9,709.7,1607.2), new cjs.Rectangle(80.4,42.9,729.7,1607.2), new cjs.Rectangle(60.4,42.9,749.7,1607.2), new cjs.Rectangle(40.4,42.9,769.7,1607.2), new cjs.Rectangle(20.4,42.9,789.7,1607.2), rect=new cjs.Rectangle(0.4,42.9,809.7,1607.2), rect, new cjs.Rectangle(0.4,42.9,823.5,1607.2), new cjs.Rectangle(0.4,42.9,839.9,1607.2), new cjs.Rectangle(0.4,42.9,855.4,1607.2), new cjs.Rectangle(0.4,42.9,870.1,1607.2), new cjs.Rectangle(0.4,42.9,883.9,1607.2), new cjs.Rectangle(0.4,42.9,896.7,1607.2), new cjs.Rectangle(0.4,32.8,909.3,1617.3), new cjs.Rectangle(0.4,8.6,920.1,1641.5), new cjs.Rectangle(0.4,-14.5,930,1664.5), new cjs.Rectangle(0.4,-36.4,938.7,1686.5), new cjs.Rectangle(0.4,-57.2,946.4,1707.3), new cjs.Rectangle(0.4,-76.9,952.9,1726.9), new cjs.Rectangle(0.4,-95.4,958.3,1745.4), new cjs.Rectangle(0.4,-113.7,963.3,1763.7), new cjs.Rectangle(0.4,-112.9,1026.1,1762.9), new cjs.Rectangle(0.4,-112.9,1089.4,1762.9), new cjs.Rectangle(0.4,-112.9,1152.8,1762.9), new cjs.Rectangle(0.4,-112.9,1216.1,1762.9), new cjs.Rectangle(0.4,-112.9,1279.4,1762.9), new cjs.Rectangle(0.4,-112.9,1342.8,1762.9), new cjs.Rectangle(0.4,-112.9,1406.1,1762.9), new cjs.Rectangle(0.4,-112.9,1469.5,1762.9), new cjs.Rectangle(0.4,-112.9,1532.8,1762.9), new cjs.Rectangle(0.4,-112.9,1596.1,1762.9), new cjs.Rectangle(0.4,-112.9,1659.4,1762.9), new cjs.Rectangle(0.4,-112.9,1722.8,1762.9), new cjs.Rectangle(0.4,-112.9,1786.1,1762.9), new cjs.Rectangle(0.4,-112.9,1849.4,1762.9), new cjs.Rectangle(0.4,-113.7,1913.3,1474.8), new cjs.Rectangle(0.4,-113.7,1913.3,1444), new cjs.Rectangle(0.4,-113.7,1913.3,1413.3), new cjs.Rectangle(0.4,-113.7,1913.3,1382.6), new cjs.Rectangle(0.4,-113.7,1913.3,1351.8), new cjs.Rectangle(0.4,-113.7,1913.3,1321.1), new cjs.Rectangle(0.4,-113.7,1913.3,1290.3), new cjs.Rectangle(0.4,-113.7,1913.3,1259.6), new cjs.Rectangle(0.4,-113.7,1913.3,1228.8), new cjs.Rectangle(0.4,-113.7,1913.3,1198.1), new cjs.Rectangle(0.4,-113.7,1913.3,1167.4), new cjs.Rectangle(0.4,-113.7,1913.3,1136.6), new cjs.Rectangle(0.4,-113.7,1913.3,1105.9), new cjs.Rectangle(0.4,-113.7,1913.3,1075.1), new cjs.Rectangle(0.4,-113.7,1913.3,1044.3), new cjs.Rectangle(0.4,-113.7,1913.3,1013.7), new cjs.Rectangle(0.4,-113.7,1913.3,1023.7), new cjs.Rectangle(0.4,-113.7,1913.3,1033.7), new cjs.Rectangle(0.4,-113.7,1913.3,1043.7), new cjs.Rectangle(0.4,-113.7,1913.3,1053.7), rect=new cjs.Rectangle(0.4,-113.7,1913.3,1063.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0.4,-113.7,1913.3,1013.7), new cjs.Rectangle(0.4,-113.7,1913.3,1023.7), new cjs.Rectangle(0.4,-113.7,1913.3,1033.7), new cjs.Rectangle(0.4,-113.7,1913.3,1043.7), new cjs.Rectangle(0.4,-113.7,1913.3,1053.7), new cjs.Rectangle(0.4,-113.7,1913.3,1063.7), new cjs.Rectangle(0.4,-113.7,1913.3,1091.1), new cjs.Rectangle(0.4,-113.7,1913.3,1118.5), new cjs.Rectangle(0.4,-113.7,1913.3,1145.9), new cjs.Rectangle(0.4,-113.7,1913.3,1173.3), new cjs.Rectangle(0.4,-113.7,1913.3,1200.8), new cjs.Rectangle(0.4,-113.7,1913.3,1228.1), new cjs.Rectangle(0.4,-113.7,1913.3,1255.6), new cjs.Rectangle(0.4,-113.7,1913.3,1283), new cjs.Rectangle(0.4,-113.7,1913.3,1310.3), new cjs.Rectangle(0.4,-113.7,1913.3,1337.8), new cjs.Rectangle(0.4,-113.7,1913.3,1365.2), new cjs.Rectangle(0.4,-113.7,1913.3,1392.6), new cjs.Rectangle(0.4,-113.7,1913.3,1420), new cjs.Rectangle(0.4,-113.7,1913.3,1447.4), new cjs.Rectangle(0.4,-113.7,1913.3,1474.8), new cjs.Rectangle(0.4,-112.9,1849.4,1474), new cjs.Rectangle(0.4,-112.9,1786.1,1474), new cjs.Rectangle(0.4,-112.9,1722.7,1474), new cjs.Rectangle(0.4,-112.9,1659.4,1474), new cjs.Rectangle(0.4,-112.9,1596.1,1474), new cjs.Rectangle(0.4,-112.9,1532.7,1474), new cjs.Rectangle(0.4,-112.9,1469.4,1474), new cjs.Rectangle(0.4,-112.9,1406.1,1474), new cjs.Rectangle(0.4,-112.9,1342.7,1474), new cjs.Rectangle(0.4,-112.9,1279.4,1474), new cjs.Rectangle(0.4,-112.9,1216.1,1474), new cjs.Rectangle(0.4,-112.9,1152.7,1474), new cjs.Rectangle(0.4,-112.9,1089.4,1474), new cjs.Rectangle(0.4,-112.9,1026.1,1474), new cjs.Rectangle(0.4,-113.7,963.3,1474.8), new cjs.Rectangle(0.4,-95.5,958.5,1456.6), new cjs.Rectangle(0.4,-77,952.9,1438.1), new cjs.Rectangle(0.4,-57.2,946.3,1418.4), new cjs.Rectangle(0.4,-36.5,938.6,1397.6), new cjs.Rectangle(0.4,-14.5,929.9,1375.6), new cjs.Rectangle(0.4,8.5,920.1,1352.6), new cjs.Rectangle(0.4,32.7,909.3,1328.4), new cjs.Rectangle(0.4,42.9,896.7,1318.3), new cjs.Rectangle(0.4,42.9,883.9,1318.3), new cjs.Rectangle(0.4,42.9,870.2,1318.3), new cjs.Rectangle(0.4,42.9,855.5,1318.3), new cjs.Rectangle(0.4,42.9,839.9,1318.3), new cjs.Rectangle(0.4,42.9,823.5,1318.3), new cjs.Rectangle(0.4,42.9,806.4,1318.3), rect=new cjs.Rectangle(0.4,42.9,789.7,1318.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1371.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":129,"end":299});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_189 = function() {
		try
		{
			app.addSoundFunc("vanish_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(170).call(this.frame_189).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(260,510,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(113).to({y:440},10).to({y:510},5).wait(171));

	// gift
	this.instance = new lib.gift_1_1_mc();
	this.instance.setTransform(260,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1000},0).wait(23).to({y:500},15).to({y:600},5).wait(25).to({rotation:-45,x:250,y:300},15).to({x:-600},15).wait(65).to({x:250},15).to({rotation:0,x:260,y:600},15).to({y:550},5).to({y:1000},15).wait(86));

	// gift
	this.instance_1 = new lib.gift_2_1_mc();
	this.instance_1.setTransform(260,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1000},0).wait(23).to({y:500},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(86));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(260,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(98).to({regX:0.1,regY:0.1,scaleX:0.56,scaleY:0.56,x:260.1,y:1000.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:260,y:250},15).to({y:300},5).wait(25).to({y:250},0).to({y:300},5).to({regX:0.1,regY:0.1,scaleX:0.56,scaleY:0.56,x:260.1,y:1000.1},15).wait(136));

	// gift
	this.instance_2 = new lib.gift_3_1_mc();
	this.instance_2.setTransform(260,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:1000},0).wait(23).to({y:500},15).to({y:600},5).wait(150).to({y:550},5).to({y:1000},15).wait(86));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(630,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1500},0).wait(43).to({x:550},20).to({x:630},5).wait(145).to({x:390},15).wait(71));

	// decor
	this.instance_3 = new lib.decor_shadow_mc();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(214).to({_off:false},0).to({alpha:1},15).wait(71));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(214).to({_off:false},0).to({alpha:1},15).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,39,797.4,911);
p.frameBounds = [rect, rect=new cjs.Rectangle(-10,42.9,1667.4,1607.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,42.9,1619.9,1607.2), new cjs.Rectangle(-10,42.9,1572.4,1607.2), new cjs.Rectangle(-10,42.9,1524.9,1607.2), new cjs.Rectangle(-10,42.9,1477.4,1607.2), new cjs.Rectangle(-10,42.9,1429.9,1607.2), new cjs.Rectangle(-10,42.9,1382.4,1607.2), new cjs.Rectangle(-10,42.9,1334.9,1607.2), new cjs.Rectangle(-10,42.9,1287.4,1607.2), new cjs.Rectangle(-10,42.9,1239.9,1607.2), new cjs.Rectangle(-10,42.9,1192.4,1607.2), new cjs.Rectangle(-10,42.9,1144.9,1607.2), new cjs.Rectangle(-10,42.9,1097.4,1607.2), new cjs.Rectangle(-10,42.9,1049.9,1607.2), new cjs.Rectangle(-10,42.9,1002.4,1607.2), new cjs.Rectangle(-10,42.9,954.9,1607.2), new cjs.Rectangle(-10,42.9,907.4,1607.2), new cjs.Rectangle(-10,42.9,859.9,1607.2), new cjs.Rectangle(-10,42.9,812.4,1607.2), new cjs.Rectangle(-10,42.9,764.9,1607.2), new cjs.Rectangle(-10,42.9,717.4,1607.2), new cjs.Rectangle(-10,42.9,733.4,1607.2), new cjs.Rectangle(-10,42.9,749.4,1607.2), new cjs.Rectangle(-10,42.9,765.4,1607.2), new cjs.Rectangle(-10,42.9,781.4,1607.2), rect=new cjs.Rectangle(-10,42.9,797.4,1607.2), rect, new cjs.Rectangle(-23.9,42.9,811.3,1607.2), new cjs.Rectangle(-40.2,42.9,827.6,1607.2), new cjs.Rectangle(-55.7,42.9,843.1,1607.2), new cjs.Rectangle(-70.4,42.9,857.8,1607.2), new cjs.Rectangle(-84.2,42.9,871.6,1607.2), new cjs.Rectangle(-97,42.9,884.4,1607.2), new cjs.Rectangle(-109.5,32.8,896.9,1617.3), new cjs.Rectangle(-120.4,8.6,907.8,1641.5), new cjs.Rectangle(-129.5,-14.4,916.9,1664.4), new cjs.Rectangle(-138.4,-36.4,925.8,1686.4), new cjs.Rectangle(-146.2,-57.3,933.6,1707.3), new cjs.Rectangle(-152.7,-77,940.1,1727.1), new cjs.Rectangle(-158.4,-95.6,945.8,1745.7), new cjs.Rectangle(-163.7,-113.6,951.1,1763.7), new cjs.Rectangle(-219.5,-113,1006.9,1763), new cjs.Rectangle(-276.2,-113,1063.6,1763), new cjs.Rectangle(-332.8,-113,1120.2,1763), new cjs.Rectangle(-389.5,-113,1176.9,1763), new cjs.Rectangle(-446.1,-113,1233.5,1763), new cjs.Rectangle(-502.8,-113,1290.2,1763), new cjs.Rectangle(-559.4,-113,1346.8,1763), new cjs.Rectangle(-616.1,-113,1403.5,1763), new cjs.Rectangle(-672.8,-113,1460.2,1763), new cjs.Rectangle(-729.4,-113,1516.8,1763), new cjs.Rectangle(-786.1,-113,1573.5,1763), new cjs.Rectangle(-842.8,-113,1630.2,1763), new cjs.Rectangle(-899.4,-113,1686.8,1763), new cjs.Rectangle(-956.1,-113,1743.5,1763), new cjs.Rectangle(-1013.7,-113.6,1801.1,1478.1), new cjs.Rectangle(-1013.7,-113.6,1801.1,1447.1), new cjs.Rectangle(-1013.7,-113.6,1801.1,1416.2), new cjs.Rectangle(-1013.7,-113.6,1801.1,1385.2), new cjs.Rectangle(-1013.7,-113.6,1801.1,1354.2), new cjs.Rectangle(-1013.7,-113.6,1801.1,1323.3), new cjs.Rectangle(-1013.7,-113.6,1801.1,1292.3), new cjs.Rectangle(-1013.7,-113.6,1801.1,1261.4), new cjs.Rectangle(-1013.7,-113.6,1801.1,1230.3), new cjs.Rectangle(-1013.7,-113.6,1801.1,1199.4), new cjs.Rectangle(-1013.7,-113.6,1801.1,1168.4), new cjs.Rectangle(-1013.7,-113.6,1801.1,1137.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1106.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1075.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1044.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1013.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1023.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1033.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1043.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1053.7), rect=new cjs.Rectangle(-1013.7,-113.6,1801.1,1063.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1013.7,-113.6,1801.1,1013.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1023.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1033.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1043.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1053.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1063.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1091.3), new cjs.Rectangle(-1013.7,-113.6,1801.1,1118.9), new cjs.Rectangle(-1013.7,-113.6,1801.1,1146.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1174.2), new cjs.Rectangle(-1013.7,-113.6,1801.1,1201.8), new cjs.Rectangle(-1013.7,-113.6,1801.1,1229.4), new cjs.Rectangle(-1013.7,-113.6,1801.1,1257.1), new cjs.Rectangle(-1013.7,-113.6,1801.1,1284.7), new cjs.Rectangle(-1013.7,-113.6,1801.1,1312.4), new cjs.Rectangle(-1013.7,-113.6,1801.1,1340), new cjs.Rectangle(-1013.7,-113.6,1801.1,1367.6), new cjs.Rectangle(-1013.7,-113.6,1801.1,1395.3), new cjs.Rectangle(-1013.7,-113.6,1801.1,1422.9), new cjs.Rectangle(-1013.7,-113.6,1801.1,1450.5), new cjs.Rectangle(-1013.7,-113.6,1801.1,1478.1), new cjs.Rectangle(-956.2,-113.1,1743.6,1477.6), new cjs.Rectangle(-899.5,-113.1,1686.9,1477.6), new cjs.Rectangle(-842.9,-113.1,1630.3,1477.6), new cjs.Rectangle(-786.2,-113.1,1573.6,1477.6), new cjs.Rectangle(-729.5,-113.1,1516.9,1477.6), new cjs.Rectangle(-672.9,-113.1,1460.3,1477.6), new cjs.Rectangle(-616.2,-113.1,1403.6,1477.6), new cjs.Rectangle(-559.5,-113.1,1346.9,1477.6), new cjs.Rectangle(-502.9,-113.1,1290.3,1477.6), new cjs.Rectangle(-446.2,-113.1,1233.6,1477.6), new cjs.Rectangle(-389.6,-113.1,1177,1477.6), new cjs.Rectangle(-332.9,-113.1,1120.3,1477.6), new cjs.Rectangle(-276.3,-113.1,1063.7,1477.6), new cjs.Rectangle(-219.6,-113.1,1007,1477.6), new cjs.Rectangle(-163.7,-113.6,951.1,1478.1), new cjs.Rectangle(-158.4,-95.6,945.8,1460.1), new cjs.Rectangle(-152.8,-76.9,940.2,1441.4), new cjs.Rectangle(-146.2,-57.2,933.6,1421.7), new cjs.Rectangle(-138.5,-36.3,925.9,1400.8), new cjs.Rectangle(-129.7,-14.3,917.1,1378.8), new cjs.Rectangle(-120.4,8.6,907.8,1355.9), new cjs.Rectangle(-109.6,32.8,897,1331.7), new cjs.Rectangle(-97,42.9,884.4,1321.6), new cjs.Rectangle(-84.2,42.9,871.6,1321.6), new cjs.Rectangle(-70.4,42.9,857.8,1321.6), new cjs.Rectangle(-55.7,42.9,843.1,1321.6), new cjs.Rectangle(-40.2,42.9,827.6,1321.6), new cjs.Rectangle(-23.9,42.9,811.3,1321.6), new cjs.Rectangle(-6.8,42.9,794.2,1321.6), rect=new cjs.Rectangle(10,42.9,777.4,1321.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1374.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.frame_2_mc = new lib.quest_2_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10.4,-349.4,799.7,1299.4);
p.frameBounds = [rect, new cjs.Rectangle(-10,-349.4,807.4,1999.4)];


(lib.quest_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-349.4,797.4,1299.4);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.1,-349.4,829.2,1299.4);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-349.4,818.9,1299.4);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.4,-349.4,809.7,1299.4);
p.frameBounds = [rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-349.4,797.4,1299.4);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
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
	this.text.lineWidth = 253;
	this.text.setTransform(128.5,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.LanguagesScreen();

	this.instance_3 = new lib.WelcomeScreen();

	this.instance_4 = new lib.SelectionScreen();

	this.instance_5 = new lib.LocationScreen_1();

	this.instance_6 = new lib.LocationScreen_2();

	this.instance_7 = new lib.LocationScreen_3();

	this.instance_8 = new lib.LocationScreen_4();

	this.instance_9 = new lib.LocationScreen_5();

	this.instance_10 = new lib.LocationScreen_6();

	this.instance_11 = new lib.RedirectScreen();

	this.instance_12 = new lib.ResultScreen();

	this.instance_13 = new lib.InstructionScreen();

	this.instance_14 = new lib.forward_mc();
	this.instance_14.setTransform(657,266);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(467,266);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_15 = new lib.Glitter_2();
	this.instance_15.setTransform(500,50);

	this.instance_16 = new lib.FlashAnimation();
	this.instance_16.setTransform(150,280);

	this.instance_17 = new lib.TrackMove_2();
	this.instance_17.setTransform(350,50);

	this.instance_18 = new lib.TrackMove();
	this.instance_18.setTransform(270,50);

	this.instance_19 = new lib.Cursor();
	this.instance_19.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_20 = new lib.PauseAppScreen();

	this.instance_21 = new lib.OrientationLockScreen();

	this.instance_22 = new lib.CurtainScreen();

	this.instance_23 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.next_btn},{t:this.gravity_explosion_comp},{t:this.instance_14}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[]},1).to({state:[{t:this.instance_23}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,0,1600,1165), new cjs.Rectangle(-400,-280.8,1600,1475.9), new cjs.Rectangle(-400,-280.8,1600,1261.9), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, rect, rect, rect, rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,752,430), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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