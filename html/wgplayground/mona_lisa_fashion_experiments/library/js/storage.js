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
		{src:"library/images/storage_atlas_13.png", id:"storage_atlas_13"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_6", frames: [[0,602,600,600],[0,0,1600,600],[602,602,580,580]]},
		{name:"storage_atlas_7", frames: [[1026,886,500,300],[0,0,1600,200],[1026,484,400,400],[1026,202,640,280],[0,944,640,280],[0,202,320,740],[644,202,380,500],[322,202,320,740],[644,704,380,500]]},
		{name:"storage_atlas_8", frames: [[502,0,500,300],[1004,0,500,300],[0,0,500,300],[0,302,340,440],[342,302,340,440],[684,302,347,419],[0,744,354,382],[684,723,337,402],[356,744,320,420],[1415,302,320,420],[1415,724,320,420],[1033,684,380,380],[1033,302,380,380]]},
		{name:"storage_atlas_9", frames: [[664,697,352,351],[680,0,367,345],[1431,359,332,338],[1073,359,356,320],[322,365,391,330],[1018,690,357,328],[715,359,356,329],[1049,0,346,356],[322,0,356,363],[1397,0,342,357],[322,697,340,379],[1354,1020,348,330],[664,1050,347,348],[1013,1050,339,348],[0,844,320,420],[0,422,320,420],[0,0,320,420]]},
		{name:"storage_atlas_10", frames: [[529,364,280,360],[247,364,280,360],[282,1088,560,180],[1093,362,560,180],[564,726,280,360],[811,182,280,360],[1128,544,280,360],[1128,906,280,360],[0,884,280,360],[846,544,280,360],[1410,544,280,360],[846,906,280,360],[1410,906,280,360],[1371,0,280,360],[282,726,280,360],[0,0,245,441],[0,443,245,439],[809,0,560,180],[247,182,560,180],[247,0,560,180]]},
		{name:"storage_atlas_11", frames: [[0,1026,300,300],[0,724,300,300],[932,826,260,260],[1194,825,260,260],[282,0,560,180],[906,262,290,286],[1528,0,267,323],[0,0,280,360],[282,182,280,360],[0,362,280,360],[844,0,380,260],[302,846,300,300],[1226,0,300,300],[302,544,300,300],[604,262,300,300],[1518,325,260,287],[604,895,326,267],[604,564,266,329],[1198,302,318,259],[1456,876,260,260],[1456,614,260,260],[932,1088,260,260],[1456,1138,260,260],[1194,1087,260,260],[872,564,260,260],[1134,563,260,260]]},
		{name:"storage_atlas_12", frames: [[1394,959,128,177],[539,0,217,230],[1522,192,198,162],[1563,1220,177,117],[592,606,165,192],[775,1236,206,104],[0,1025,165,225],[1252,959,140,200],[437,426,151,228],[204,262,190,190],[1158,192,180,180],[396,234,190,190],[1267,1243,140,140],[983,1236,140,140],[1125,1243,140,140],[1340,192,180,180],[511,1219,130,170],[643,1219,130,170],[0,1252,260,120],[1522,356,260,120],[588,232,190,190],[262,0,275,232],[0,569,213,250],[0,262,202,305],[0,821,196,202],[758,0,229,183],[0,0,260,260],[942,959,153,193],[198,821,153,193],[1534,868,153,193],[477,1024,153,193],[322,1024,153,193],[1097,959,153,193],[632,1024,153,193],[787,959,153,193],[508,829,153,193],[353,829,153,193],[1278,374,153,193],[1392,569,153,193],[927,569,153,193],[1123,374,153,193],[1069,764,153,193],[759,721,153,193],[914,764,153,193],[167,1025,153,193],[1224,764,153,193],[1547,478,153,193],[1547,673,153,193],[1082,569,153,193],[1379,764,153,193],[772,526,153,193],[968,374,153,193],[1237,569,153,193],[215,454,220,160],[1129,1161,280,80],[1411,1138,280,80],[1565,0,190,190],[787,1154,340,80],[215,616,186,188],[1411,1220,150,142],[780,185,194,178],[403,656,187,171],[322,1219,187,132],[780,365,186,159],[1373,0,190,190],[989,0,190,190],[1181,0,190,190],[590,424,180,180],[976,192,180,180]]},
		{name:"storage_atlas_13", frames: [[1444,366,117,24],[914,184,120,120],[244,142,120,120],[670,132,120,120],[792,184,120,120],[182,366,45,240],[0,142,120,120],[122,142,120,120],[0,0,140,140],[142,0,140,140],[284,0,140,140],[1036,184,120,120],[648,0,130,130],[488,254,80,170],[780,0,130,130],[570,254,80,170],[1191,299,32,29],[1406,426,30,41],[1774,334,23,71],[953,633,28,70],[917,633,34,62],[652,367,29,29],[1563,366,27,24],[917,581,90,50],[792,132,90,50],[366,204,120,120],[1226,217,120,120],[1348,242,120,120],[1470,244,120,120],[1388,596,50,50],[156,608,50,50],[0,630,50,50],[1440,596,50,50],[548,82,48,48],[598,82,48,48],[1226,0,157,93],[0,432,80,124],[912,62,120,120],[1592,346,180,60],[1262,364,180,60],[834,408,180,60],[0,370,180,60],[652,408,180,60],[1444,408,180,60],[912,0,260,60],[460,642,40,40],[736,596,25,111],[1282,596,25,111],[709,596,25,111],[1309,596,25,111],[655,596,25,111],[682,596,25,111],[426,0,220,80],[613,596,40,100],[571,596,40,100],[1009,581,40,100],[1754,0,40,100],[1723,592,40,100],[52,630,40,55],[488,204,40,43],[1156,62,10,11],[1728,408,69,94],[1180,575,100,73],[366,142,57,60],[229,434,99,100],[884,132,23,38],[1158,299,31,31],[1336,596,50,50],[114,524,40,147],[1732,122,50,210],[1174,0,50,297],[1262,426,100,100],[896,306,120,100],[548,132,120,120],[82,432,90,90],[130,264,120,100],[1138,431,100,100],[774,306,120,100],[1592,122,120,120],[330,434,90,90],[1018,306,120,100],[1657,592,64,65],[1592,244,138,100],[422,434,51,65],[367,326,111,106],[1510,554,71,77],[1385,0,123,118],[1583,582,72,60],[1016,408,120,87],[252,264,89,57],[652,254,120,111],[846,581,69,71],[0,264,128,104],[774,581,70,70],[252,326,113,106],[1492,633,40,40],[1534,633,40,40],[334,642,40,40],[376,642,40,40],[292,642,40,40],[208,642,40,40],[250,642,40,40],[418,642,40,40],[582,426,40,40],[1364,426,40,40],[1765,592,25,130],[1510,0,120,120],[1720,510,80,80],[0,558,112,70],[229,570,112,70],[1606,510,112,70],[343,570,112,70],[1066,575,112,70],[457,570,112,70],[1140,339,120,90],[1632,0,120,120],[426,82,120,120],[1034,62,120,120],[1226,95,120,120],[1470,122,120,120],[1348,120,120,120],[330,528,240,40],[1364,470,240,40],[582,512,240,40],[1066,533,240,40],[824,539,240,40],[824,497,240,40],[582,470,240,40],[1364,512,240,40],[572,554,200,40],[1308,554,200,40],[480,426,100,100],[1626,408,100,100]]}
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
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
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
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
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
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.black_600_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.blush_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.blush_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.blush_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.blush_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.blush_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.blush_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
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
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.current_accessory_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.current_accessory_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.current_dress_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_dress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.decor_wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.decor_wardrobe_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.dress10_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress11_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress12_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress13_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress14_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress15_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_13_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_14_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_15_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.forward_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hair9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.head_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero_body_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyelashes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyelashes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyelashes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyelashes5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyelashes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new23_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mascara_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.mascara_new1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.mascara_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.mascara_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.mascara_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.necklace1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.necklace1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.necklace2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.necklace2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.necklace3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.necklace3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.necklace4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.necklace4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.necklace5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.necklace5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.necklace6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.necklace6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.necklace7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.necklace7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.podvopka1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new41_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
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
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.wardrobe_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_4_img();
	this.instance.setTransform(-190,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,500);
p.frameBounds = [rect];


(lib.wardrobe_2_3_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.wardrobe_2_3_img();
	this.instance.setTransform(-160,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-370,320,740);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-190,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,500);
p.frameBounds = [rect];


(lib.wardrobe_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_3_img();
	this.instance.setTransform(-160,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-370,320,740);
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


(lib.necklace_m2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace5_img();
	this.instance.setTransform(-53.5,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-48,120,111);
p.frameBounds = [rect];


(lib.necklace_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.necklace1_img();
	this.instance.setTransform(-69,-50);

	this.instance_1 = new lib.necklace2_img();
	this.instance_1.setTransform(-50,-53.5);

	this.instance_2 = new lib.necklace3_img();
	this.instance_2.setTransform(-53.5,-59.5);

	this.instance_3 = new lib.necklace4_img();
	this.instance_3.setTransform(-57.5,-51);

	this.instance_4 = new lib.necklace5_img();
	this.instance_4.setTransform(-53.5,-48);

	this.instance_5 = new lib.necklace6_img();
	this.instance_5.setTransform(-52.5,-59.5);

	this.instance_6 = new lib.necklace7_img();
	this.instance_6.setTransform(-53,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-50,138,100);
p.frameBounds = [rect, new cjs.Rectangle(-50,-53.5,111,106), new cjs.Rectangle(-53.5,-59.5,123,118), new cjs.Rectangle(-57.5,-51,120,87), new cjs.Rectangle(-53.5,-48,120,111), new cjs.Rectangle(-52.5,-59.5,128,104), new cjs.Rectangle(-53,-53,113,106), null];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,200);
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


(lib.hero_shadows_m2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_shadows6_img();
	this.instance.setTransform(-76.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-96.5,153,193);
p.frameBounds = [rect];


(lib.hero_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_shadows1_img();
	this.instance.setTransform(-76.5,-96.5);

	this.instance_1 = new lib.hero_shadows2_img();
	this.instance_1.setTransform(-76.5,-96.5);

	this.instance_2 = new lib.hero_shadows3_img();
	this.instance_2.setTransform(-76.5,-96.5);

	this.instance_3 = new lib.hero_shadows4_img();
	this.instance_3.setTransform(-76.5,-96.5);

	this.instance_4 = new lib.hero_shadows5_img();
	this.instance_4.setTransform(-76.5,-96.5);

	this.instance_5 = new lib.hero_shadows6_img();
	this.instance_5.setTransform(-76.5,-96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-96.5,153,193);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Слой 1
	this.instance = new lib.hero_rouge1_img();
	this.instance.setTransform(-76.5,-96.5);

	this.instance_1 = new lib.hero_rouge2_img();
	this.instance_1.setTransform(-76.5,-96.5);

	this.instance_2 = new lib.hero_rouge3_img();
	this.instance_2.setTransform(-76.5,-96.5);

	this.instance_3 = new lib.hero_rouge4_img();
	this.instance_3.setTransform(-76.5,-96.5);

	this.instance_4 = new lib.hero_rouge5_img();
	this.instance_4.setTransform(-76.5,-96.5);

	this.instance_5 = new lib.hero_rouge6_img();
	this.instance_5.setTransform(-76.5,-96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-96.5,153,193);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero_lips_m2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_lips2_img();
	this.instance.setTransform(-76.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-96.5,153,193);
p.frameBounds = [rect];


(lib.hero_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_lips1_img();
	this.instance.setTransform(-76.5,-96.5);

	this.instance_1 = new lib.hero_lips2_img();
	this.instance_1.setTransform(-76.5,-96.5);

	this.instance_2 = new lib.hero_lips3_img();
	this.instance_2.setTransform(-76.5,-96.5);

	this.instance_3 = new lib.hero_lips4_img();
	this.instance_3.setTransform(-76.5,-96.5);

	this.instance_4 = new lib.hero_lips5_img();
	this.instance_4.setTransform(-76.5,-96.5);

	this.instance_5 = new lib.hero_lips6_img();
	this.instance_5.setTransform(-76.5,-96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-96.5,153,193);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero_lips_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_lips1_img();
	this.instance.setTransform(-76.5,-96.5);

	this.instance_1 = new lib.hero_lips2_img();
	this.instance_1.setTransform(-76.5,-96.5);

	this.instance_2 = new lib.hero_lips3_img();
	this.instance_2.setTransform(-76.5,-96.5);

	this.instance_3 = new lib.hero_lips4_img();
	this.instance_3.setTransform(-76.5,-96.5);

	this.instance_4 = new lib.hero_lips5_img();
	this.instance_4.setTransform(-76.5,-96.5);

	this.instance_5 = new lib.hero_lips6_img();
	this.instance_5.setTransform(-76.5,-96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-96.5,153,193);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.hero_eyes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_eyes_img();
	this.instance.setTransform(-76.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-96.5,153,193);
p.frameBounds = [rect];


(lib.hero_eyelashes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_eyelashes1_img();
	this.instance.setTransform(-76.5,-96.5);

	this.instance_1 = new lib.hero_eyelashes2_img();
	this.instance_1.setTransform(-76.5,-96.5);

	this.instance_2 = new lib.hero_eyelashes3_img();
	this.instance_2.setTransform(-76.5,-96.5);

	this.instance_3 = new lib.hero_eyelashes4_img();
	this.instance_3.setTransform(-76.5,-96.5);

	this.instance_4 = new lib.hero_eyelashes5_img();
	this.instance_4.setTransform(-76.5,-96.5);

	this.instance_5 = new lib.hero_eyelashes6_img();
	this.instance_5.setTransform(-76.5,-96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-96.5,153,193);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_body_img();
	this.instance.setTransform(-168.5,-201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-168.5,-201,337,402);
p.frameBounds = [rect];


(lib.head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.head_img();
	this.instance.setTransform(-76.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-96.5,153,193);
p.frameBounds = [rect];


(lib.hair_m2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hair4_img();
	this.instance.setTransform(-106,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-142,245,439);
p.frameBounds = [rect];


(lib.hair_m1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hair1_img();
	this.instance.setTransform(-133.5,-141.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.5,-141.5,266,329);
p.frameBounds = [rect];


(lib.hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hair1_img();
	this.instance.setTransform(-133.5,-141.5);

	this.instance_1 = new lib.hair2_img();
	this.instance_1.setTransform(-114,-50);

	this.instance_2 = new lib.hair3_img();
	this.instance_2.setTransform(-49.1,-12.5);

	this.instance_3 = new lib.hair4_img();
	this.instance_3.setTransform(-106,-142);

	this.instance_4 = new lib.hair7_img();
	this.instance_4.setTransform(-165,-144);

	this.instance_5 = new lib.hair9_img();
	this.instance_5.setTransform(-135,-162.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},2).to({state:[]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.5,-141.5,266,329);
p.frameBounds = [rect, new cjs.Rectangle(-114,-50,229,183), new cjs.Rectangle(-49.1,-12.5,157,93), new cjs.Rectangle(-106,-142,245,439), rect=null, rect, new cjs.Rectangle(-165,-144,339,348), null, new cjs.Rectangle(-135,-162.5,318,259)];


(lib.fringe_m2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe4_img();
	this.instance.setTransform(-106,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-142,245,441);
p.frameBounds = [rect];


(lib.fringe_m1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe1_img();
	this.instance.setTransform(-130,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-143.5,260,287);
p.frameBounds = [rect];


(lib.fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fringe1_img();
	this.instance.setTransform(-130,-143.5);

	this.instance_1 = new lib.fringe2_img();
	this.instance_1.setTransform(-150,-152);

	this.instance_2 = new lib.fringe3_img();
	this.instance_2.setTransform(-112.5,-154);

	this.instance_3 = new lib.fringe4_img();
	this.instance_3.setTransform(-106,-142);

	this.instance_4 = new lib.fringe5_img();
	this.instance_4.setTransform(-80.5,-161);

	this.instance_5 = new lib.fringe6_img();
	this.instance_5.setTransform(-69.5,-189);

	this.instance_6 = new lib.fringe7_img();
	this.instance_6.setTransform(-173,-143);

	this.instance_7 = new lib.fringe8_img();
	this.instance_7.setTransform(-68,-143.5);

	this.instance_8 = new lib.fringe9_img();
	this.instance_8.setTransform(-143,-163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-143.5,260,287);
p.frameBounds = [rect, new cjs.Rectangle(-150,-152,348,330), new cjs.Rectangle(-112.5,-154,275,232), new cjs.Rectangle(-106,-142,245,441), new cjs.Rectangle(-80.5,-161,213,250), new cjs.Rectangle(-69.5,-189,202,305), new cjs.Rectangle(-173,-143,347,348), new cjs.Rectangle(-68,-143.5,196,202), new cjs.Rectangle(-143,-163,326,267)];


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


(lib.earrings7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings7_img();
	this.instance.setTransform(78.5,-9.6,1,1,0,0,180);

	this.instance_1 = new lib.earrings7_img();
	this.instance_1.setTransform(-78.5,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.5,-14.3,157,28.7);
p.frameBounds = [rect];


(lib.earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings6_img();
	this.instance.setTransform(79.7,-15.7,1,1,0,0,180);

	this.instance_1 = new lib.earrings6_img();
	this.instance_1.setTransform(-79.7,-13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.7,-15.7,159.5,31.5);
p.frameBounds = [rect];


(lib.earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings5_img();
	this.instance.setTransform(78,-32,1,1,0,0,180);

	this.instance_1 = new lib.earrings5_img();
	this.instance_1.setTransform(-78,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-32,156,64);
p.frameBounds = [rect];


(lib.earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings4_img();
	this.instance.setTransform(75.8,-35.5,1,1,0,0,180);

	this.instance_1 = new lib.earrings4_img();
	this.instance_1.setTransform(-75.7,-34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.7,-35.5,151.5,71);
p.frameBounds = [rect];


(lib.earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings3_img();
	this.instance.setTransform(72,-36.9,1,1,0,0,180);

	this.instance_1 = new lib.earrings3_img();
	this.instance_1.setTransform(-72,-34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-36.9,144,73.9);
p.frameBounds = [rect];


(lib.earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings2_img();
	this.instance.setTransform(77.2,-23,1,1,0,0,180);

	this.instance_1 = new lib.earrings2_img();
	this.instance_1.setTransform(-77.2,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.2,-23,154.5,46);
p.frameBounds = [rect];


(lib.earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings1_img();
	this.instance.setTransform(49.5,-14.9);

	this.instance_1 = new lib.earrings1_img();
	this.instance_1.setTransform(-81.5,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-14.9,163.1,29.9);
p.frameBounds = [rect];


(lib.e7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings7_img();
	this.instance.setTransform(36,-12,1,1,0,0,180);

	this.instance_1 = new lib.earrings7_img();
	this.instance_1.setTransform(-36,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-12,72,24);
p.frameBounds = [rect];


(lib.e6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings6_img();
	this.instance.setTransform(36,-14.5,1,1,0,0,180);

	this.instance_1 = new lib.earrings6_img();
	this.instance_1.setTransform(-36,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-14.5,72,29);
p.frameBounds = [rect];


(lib.e5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings5_img();
	this.instance.setTransform(36,-31,1,1,0,0,180);

	this.instance_1 = new lib.earrings5_img();
	this.instance_1.setTransform(-36,-31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-31,72,62);
p.frameBounds = [rect];


(lib.e4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings4_img();
	this.instance.setTransform(36,-35,1,1,0,0,180);

	this.instance_1 = new lib.earrings4_img();
	this.instance_1.setTransform(-36,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-35,72,70);
p.frameBounds = [rect];


(lib.e3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings3_img();
	this.instance.setTransform(31,-36,1,1,0,0,180);

	this.instance_1 = new lib.earrings3_img();
	this.instance_1.setTransform(-31,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-36,62,71);
p.frameBounds = [rect];


(lib.e2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings2_img();
	this.instance.setTransform(36,-20.5,1,1,0,0,180);

	this.instance_1 = new lib.earrings2_img();
	this.instance_1.setTransform(-36,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-20.5,72,41);
p.frameBounds = [rect];


(lib.e1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings1_img();
	this.instance.setTransform(36,-14.5,1,1,0,0,180);

	this.instance_1 = new lib.earrings1_img();
	this.instance_1.setTransform(-36,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-14.5,72,29);
p.frameBounds = [rect];


(lib.dress_m2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress6_img();
	this.instance.setTransform(-171,-197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171,-197,346,356);
p.frameBounds = [rect];


(lib.dress_m1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress1_img();
	this.instance.setTransform(-178,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178,-160,356,320);
p.frameBounds = [rect];


(lib.dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress1_img();
	this.instance.setTransform(-178,-160);

	this.instance_1 = new lib.dress2_img();
	this.instance_1.setTransform(-215,-170);

	this.instance_2 = new lib.dress3_img();
	this.instance_2.setTransform(-93,-163);

	this.instance_3 = new lib.dress4_img();
	this.instance_3.setTransform(-177,-168);

	this.instance_4 = new lib.dress5_img();
	this.instance_4.setTransform(-184,-169);

	this.instance_5 = new lib.dress6_img();
	this.instance_5.setTransform(-171,-197);

	this.instance_6 = new lib.dress7_img();
	this.instance_6.setTransform(-175,-203);

	this.instance_7 = new lib.dress8_img();
	this.instance_7.setTransform(-167,-197);

	this.instance_8 = new lib.dress9_img();
	this.instance_8.setTransform(-166,-218.9);

	this.instance_9 = new lib.dress10_img();
	this.instance_9.setTransform(-170,-191);

	this.instance_10 = new lib.dress11_img();
	this.instance_10.setTransform(-102,-172.9);

	this.instance_11 = new lib.dress12_img();
	this.instance_11.setTransform(-169,-260.9);

	this.instance_12 = new lib.dress13_img();
	this.instance_12.setTransform(-172,-220.9);

	this.instance_13 = new lib.dress14_img();
	this.instance_13.setTransform(-184,-184.9);

	this.instance_14 = new lib.dress15_img();
	this.instance_14.setTransform(-162,-176.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178,-160,356,320);
p.frameBounds = [rect, new cjs.Rectangle(-215,-170,391,330), new cjs.Rectangle(-93,-163,267,323), new cjs.Rectangle(-177,-168,357,328), new cjs.Rectangle(-184,-169,356,329), new cjs.Rectangle(-171,-197,346,356), new cjs.Rectangle(-175,-203,356,363), new cjs.Rectangle(-167,-197,342,357), new cjs.Rectangle(-166,-218.9,340,379), new cjs.Rectangle(-170,-191,352,351), new cjs.Rectangle(-102,-172.9,290,286), new cjs.Rectangle(-169,-260.9,347,419), new cjs.Rectangle(-172,-220.9,354,382), new cjs.Rectangle(-184,-184.9,367,345), new cjs.Rectangle(-162,-176.9,332,338)];


(lib.decor_wardrobe_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_wardrobe_4_img();
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect];


(lib.decor_wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_wardrobe_1_img();
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect];


(lib.decor_title_tr_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.decor_title_tr_img();
	this.instance.setTransform(-280,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-90,560,180);
p.frameBounds = [rect];


(lib.decor_title_ru_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.decor_title_ru_img();
	this.instance.setTransform(-280,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-90,560,180);
p.frameBounds = [rect];


(lib.decor_title_en_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.decor_title_en_img();
	this.instance.setTransform(-280,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-90,560,180);
p.frameBounds = [rect];


(lib.decor_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_1_img();
	this.instance.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
p.frameBounds = [rect];


(lib.current_makeup_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_1_2_img();
	this.instance.setTransform(-40,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.current_makeup_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_1_1_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.current_makeup_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_0_2_img();
	this.instance.setTransform(-40,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.current_makeup_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_0_1_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_img();
	this.instance.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
p.frameBounds = [rect];


(lib.current_hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.current_hairstyle_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_0_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.current_dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_dress_1_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.current_dress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_dress_0_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.current_accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_accessory_1_1_img();
	this.instance.setTransform(-65,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.current_accessory_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_accessory_0_1_img();
	this.instance.setTransform(-65,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
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


(lib.body_accessory_m2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory1_img();
	this.instance.setTransform(-58.5,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-12,117,24);
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


(lib.animation_for_pointer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_pointer_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory1_img();
	this.instance.setTransform(-58.5,-12);

	this.instance_1 = new lib.accessory2_img();
	this.instance_1.setTransform(-108.5,-151.5);

	this.instance_2 = new lib.accessory3_img();
	this.instance_2.setTransform(-98,-173);

	this.instance_3 = new lib.accessory4_img();
	this.instance_3.setTransform(-86.9,-155);

	this.instance_4 = new lib.accessory5_img();
	this.instance_4.setTransform(-82.9,-100.5);

	this.instance_5 = new lib.accessory6_img();
	this.instance_5.setTransform(-100.4,-148);

	this.instance_6 = new lib.accessory7_img();
	this.instance_6.setTransform(-81.4,-142);

	this.instance_7 = new lib.accessory8_img();
	this.instance_7.setTransform(-69,-100.5);

	this.instance_8 = new lib.accessory9_img();
	this.instance_8.setTransform(-74.9,-135);

	this.instance_9 = new lib.accessory10_img();
	this.instance_9.setTransform(-64,-83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-12,117,24);
p.frameBounds = [rect, new cjs.Rectangle(-108.5,-151.5,217,230), new cjs.Rectangle(-98,-173,198,162), new cjs.Rectangle(-86.9,-155,177,117), new cjs.Rectangle(-82.9,-100.5,165,192), new cjs.Rectangle(-100.4,-148,206,104), new cjs.Rectangle(-81.4,-142,165,225), new cjs.Rectangle(-69,-100.5,140,200), new cjs.Rectangle(-74.9,-135,151,228), new cjs.Rectangle(-64,-83,128,177), null];


(lib.accessory_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory10_img();
	this.instance.setTransform(-64,-88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7O2IAA9rIV3AAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-95,140,190);
p.frameBounds = [rect];


(lib.accessory_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory9_img();
	this.instance.setTransform(-66,-100,0.877,0.877);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsQaMAAAggzIXZAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-105,150,210);
p.frameBounds = [rect];


(lib.accessory_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory8_img();
	this.instance.setTransform(-67,-95,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmRLMAAAgiVIfNAAMAAAAiVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-110,200,220);
p.frameBounds = [rect];


(lib.accessory_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory7_img();
	this.instance.setTransform(-73,-100,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDQyMAAAghjIcHAAMAAAAhjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-107.5,180,215);
p.frameBounds = [rect];


(lib.accessory_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory6_img();
	this.instance.setTransform(-89,-45,0.865,0.865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKJYIAAyuMAiVAAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-60,220,120);
p.frameBounds = [rect];


(lib.accessory_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory5_img();
	this.instance.setTransform(-77,-90,0.938,0.938);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfO1IAA9qIY/AAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-95,160,190);
p.frameBounds = [rect];


(lib.accessory_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory4_img();
	this.instance.setTransform(-88.5,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuK7IAA12MAldAAAIAAV2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect];


(lib.accessory_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory3_img();
	this.instance.setTransform(-99,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuO2IAA9rMAldAAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-95,240,190);
p.frameBounds = [rect];


(lib.accessory_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory2_img();
	this.instance.setTransform(-108.5,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuTiMAAAgnDMAldAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-125,240,250);
p.frameBounds = [rect];


(lib.accessory_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory1_img();
	this.instance.setTransform(-58.5,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsErIAApVIXZAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-30,150,60);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.curtain_3_img();
	this.instance.setTransform(-290,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-290,580,580);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#814106").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
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
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

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
	this.instance.setTransform(-23,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-120,45,240);
p.frameBounds = [rect];


(lib.blinking_light_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_3_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blinking_light_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_2_3_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blinking_light_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_3_img();
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


(lib.nav_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_5_img();
	this.instance.setTransform(-60,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.nav_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_4_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.nav_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_3_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_img();
	this.instance.setTransform(-60,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
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


(lib.nav_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_5_img();
	this.instance.setTransform(-60,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.nav_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_4_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.nav_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_3_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-60,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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
	this.substrate_mc.setTransform(0.2,0,0.5,0.5,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.necklace_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.5,0.5,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.lips_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.2,0,0.5,0.5,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
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


(lib.hero_main_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.fringe_m1_mc();
	this.instance.setTransform(-28.1,-125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.2,x:-24.7,y:-141.1},39).to({rotation:0,x:-28.1,y:-125.1},40).wait(1));

	// animation
	this.instance_1 = new lib.hero_eyes_mc();
	this.instance_1.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:3.2,x:3.6,y:-170.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// animation
	this.instance_2 = new lib.head_mc();
	this.instance_2.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:3.2,x:3.6,y:-170.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// animation
	this.instance_3 = new lib.dress_m1_mc();
	this.instance_3.setTransform(-26.6,154.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:139.4},39).to({y:154.4},40).wait(1));

	// animation
	this.instance_4 = new lib.hero_body_mc();
	this.instance_4.setTransform(-24.6,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:98.5},39).to({y:113.5},40).wait(1));

	// animation
	this.instance_5 = new lib.hair_m1_mc();
	this.instance_5.setTransform(-28.1,-125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:3.2,x:-24.7,y:-141.1},39).to({rotation:0,x:-28.1,y:-125.1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-204.6,-268.6,356,583.1);
p.frameBounds = [rect, new cjs.Rectangle(-204.6,-269,356,583.1), new cjs.Rectangle(-204.6,-269.5,356,583.2), new cjs.Rectangle(-204.6,-270,356,583.3), new cjs.Rectangle(-204.6,-270.9,356,583.8), new cjs.Rectangle(-204.6,-271.3,356,583.9), new cjs.Rectangle(-204.6,-271.7,356,583.9), new cjs.Rectangle(-204.6,-272.6,356,584.4), new cjs.Rectangle(-204.6,-273.1,356,584.5), new cjs.Rectangle(-204.6,-273.6,356,584.6), new cjs.Rectangle(-204.6,-274.4,356,585.1), new cjs.Rectangle(-204.6,-274.9,356,585.1), new cjs.Rectangle(-204.6,-275.3,356,585.2), new cjs.Rectangle(-204.6,-276.2,356,585.7), new cjs.Rectangle(-204.6,-276.7,356,585.8), new cjs.Rectangle(-204.6,-277.1,356,585.8), new cjs.Rectangle(-204.6,-278,356,586.3), new cjs.Rectangle(-204.6,-278.4,356,586.3), new cjs.Rectangle(-204.6,-279,356,586.6), new cjs.Rectangle(-204.6,-279.8,356,587), new cjs.Rectangle(-204.6,-280.2,356,587), new cjs.Rectangle(-204.6,-280.7,356,587.1), new cjs.Rectangle(-204.6,-281.6,356,587.6), new cjs.Rectangle(-204.6,-282,356,587.7), new cjs.Rectangle(-204.6,-282.5,356,587.7), new cjs.Rectangle(-204.6,-283.3,356,588.2), new cjs.Rectangle(-204.6,-283.8,356,588.3), new cjs.Rectangle(-204.6,-284.3,356,588.4), new cjs.Rectangle(-204.6,-285.1,356,588.8), new cjs.Rectangle(-204.6,-285.5,356,588.9), new cjs.Rectangle(-204.6,-286,356,588.9), new cjs.Rectangle(-204.6,-286.8,356,589.4), new cjs.Rectangle(-204.6,-287.3,356,589.5), new cjs.Rectangle(-204.6,-287.8,356,589.6), new cjs.Rectangle(-204.6,-288.6,356,590), new cjs.Rectangle(-204.6,-289.1,356,590.1), new cjs.Rectangle(-204.6,-289.5,356,590.2), new cjs.Rectangle(-204.6,-290.4,356,590.7), new cjs.Rectangle(-204.6,-290.8,356,590.7), new cjs.Rectangle(-204.6,-291.7,356,591.2), new cjs.Rectangle(-204.6,-290.8,356,590.7), new cjs.Rectangle(-204.6,-290.4,356,590.6), new cjs.Rectangle(-204.6,-289.6,356,590.2), new cjs.Rectangle(-204.6,-289.1,356,590.1), new cjs.Rectangle(-204.6,-288.7,356,590.1), new cjs.Rectangle(-204.6,-287.8,356,589.6), new cjs.Rectangle(-204.6,-287.4,356,589.5), new cjs.Rectangle(-204.6,-286.9,356,589.4), new cjs.Rectangle(-204.6,-286.1,356,589), new cjs.Rectangle(-204.6,-285.7,356,588.9), new cjs.Rectangle(-204.6,-285.2,356,588.9), new cjs.Rectangle(-204.6,-284.4,356,588.3), new cjs.Rectangle(-204.6,-283.9,356,588.3), new cjs.Rectangle(-204.6,-283.5,356,588.2), new cjs.Rectangle(-204.6,-282.6,356,587.8), new cjs.Rectangle(-204.6,-282.2,356,587.7), new cjs.Rectangle(-204.6,-281.7,356,587.6), new cjs.Rectangle(-204.6,-281.3,356,587.5), new cjs.Rectangle(-204.6,-280.4,356,587.1), new cjs.Rectangle(-204.6,-280,356,587), new cjs.Rectangle(-204.6,-279.6,356,587), new cjs.Rectangle(-204.6,-278.7,356,586.4), new cjs.Rectangle(-204.6,-278.3,356,586.4), new cjs.Rectangle(-204.6,-277.8,356,586.3), new cjs.Rectangle(-204.6,-276.9,356,585.8), new cjs.Rectangle(-204.6,-276.5,356,585.8), new cjs.Rectangle(-204.6,-276.1,356,585.7), new cjs.Rectangle(-204.6,-275.2,356,585.2), new cjs.Rectangle(-204.6,-274.8,356,585.2), new cjs.Rectangle(-204.6,-274.3,356,585.1), new cjs.Rectangle(-204.6,-273.4,356,584.6), new cjs.Rectangle(-204.6,-273,356,584.5), new cjs.Rectangle(-204.6,-272.6,356,584.5), new cjs.Rectangle(-204.6,-271.7,356,583.9), new cjs.Rectangle(-204.6,-271.2,356,583.9), new cjs.Rectangle(-204.6,-270.8,356,583.8), new cjs.Rectangle(-204.6,-269.9,356,583.3), new cjs.Rectangle(-204.6,-269.5,356,583.2), new cjs.Rectangle(-204.6,-269,356,583.2), new cjs.Rectangle(-204.6,-268.6,356,583.1)];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero_eyes_mc();
	this.instance.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lips
	this.lips = new lib.hero_lips_all_2_mc();
	this.lips.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-252.6,153,193);
p.frameBounds = [rect];


(lib.hair_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.575,0.575,0,0,0,0.1,-0.1);

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


(lib.eyebrows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.2,0,0.5,0.5,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.earrings_m2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings5_mc();
	this.instance.setTransform(0,25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-6.6,156,64);
p.frameBounds = [rect];


(lib.earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earrings1_mc();

	this.instance_1 = new lib.earrings2_mc();
	this.instance_1.setTransform(-0.2,10.9);

	this.instance_2 = new lib.earrings3_mc();
	this.instance_2.setTransform(0,26.9);

	this.instance_3 = new lib.earrings4_mc();
	this.instance_3.setTransform(0.7,27.4);

	this.instance_4 = new lib.earrings5_mc();
	this.instance_4.setTransform(0,25.4);

	this.instance_5 = new lib.earrings6_mc();
	this.instance_5.setTransform(-0.2,6.1);

	this.instance_6 = new lib.earrings7_mc();
	this.instance_6.setTransform(-1,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-14.9,163.1,29.9);
p.frameBounds = [rect, new cjs.Rectangle(-77.5,-12.1,154.5,46), new cjs.Rectangle(-72,-10,144,73.9), new cjs.Rectangle(-75,-8.1,151.5,71), new cjs.Rectangle(-78,-6.6,156,64), new cjs.Rectangle(-80,-9.6,159.5,31.5), new cjs.Rectangle(-79.5,-4.6,157,28.7), null];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.5,0.5,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.575,0.575,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-23,46,46);
p.frameBounds = [rect];


(lib.decor_title_tr_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_title_tr_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({alpha:0.5},15).to({alpha:0.012},15).to({alpha:0.5},10).to({alpha:0.012},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-90,560,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.decor_title_ru_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_title_ru_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({alpha:0.5},15).to({alpha:0.012},15).to({alpha:0.5},10).to({alpha:0.012},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-90,560,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.decor_title_en_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_title_en_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({alpha:0.5},15).to({alpha:0.012},15).to({alpha:0.5},10).to({alpha:0.012},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-90,560,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_makeup_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_makeup_2_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},29).to({alpha:0.898},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_makeup_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_makeup_2_1_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},29).to({alpha:0.898},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_hairstyle_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},39).wait(20).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_dress_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},39).wait(20).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_accessory_2_1_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},29).to({alpha:0.898},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
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


(lib.container_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.hero_1 = new lib.hero_3_mc();
	this.hero_1.setTransform(405,400);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(327,147.4,153,193);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.instance = new lib.decor_title_en_2_mc();

	this.instance_1 = new lib.decor_title_ru_2_mc();

	this.instance_2 = new lib.decor_title_tr_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

	// graph
	this.instance_3 = new lib.title_en_img();
	this.instance_3.setTransform(-280,-90);

	this.instance_4 = new lib.title_ru_img();
	this.instance_4.setTransform(-280,-90);

	this.instance_5 = new lib.title_tr_img();
	this.instance_5.setTransform(-280,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-90,560,180);
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


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.2,0,0.5,0.5,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


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
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.012},30).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.accessory_m2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_accessory_m2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({y:12},5).to({y:10},20).to({y:0},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-12,117,24);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-58.5,-9.6,117,24), new cjs.Rectangle(-58.5,-7.2,117,24), new cjs.Rectangle(-58.5,-4.8,117,24), new cjs.Rectangle(-58.5,-2.4,117,24), new cjs.Rectangle(-58.5,0,117,24), new cjs.Rectangle(-58.5,-0.1,117,24), new cjs.Rectangle(-58.5,-0.2,117,24), new cjs.Rectangle(-58.5,-0.3,117,24), new cjs.Rectangle(-58.5,-0.4,117,24), new cjs.Rectangle(-58.5,-0.5,117,24), new cjs.Rectangle(-58.5,-0.6,117,24), new cjs.Rectangle(-58.5,-0.7,117,24), new cjs.Rectangle(-58.5,-0.8,117,24), new cjs.Rectangle(-58.5,-0.9,117,24), new cjs.Rectangle(-58.5,-1,117,24), new cjs.Rectangle(-58.5,-1.1,117,24), new cjs.Rectangle(-58.5,-1.2,117,24), new cjs.Rectangle(-58.5,-1.3,117,24), new cjs.Rectangle(-58.5,-1.4,117,24), new cjs.Rectangle(-58.5,-1.5,117,24), new cjs.Rectangle(-58.5,-1.6,117,24), new cjs.Rectangle(-58.5,-1.7,117,24), new cjs.Rectangle(-58.5,-1.8,117,24), new cjs.Rectangle(-58.5,-1.9,117,24), new cjs.Rectangle(-58.5,-2,117,24), new cjs.Rectangle(-58.5,-4,117,24), new cjs.Rectangle(-58.5,-6,117,24), new cjs.Rectangle(-58.5,-8,117,24), new cjs.Rectangle(-58.5,-10,117,24), rect=new cjs.Rectangle(-58.5,-12,117,24), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.5,0.5,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:29,end:69});

	// animation
	this.instance = new lib.curtain_4_mc();
	this.instance.setTransform(400,300,0.69,0.69);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},18).wait(30).to({scaleX:0.69,scaleY:0.69,alpha:0.012},19).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,-610);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:0},18).wait(30).to({y:-610},20).wait(1));

	// animation
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(0,610);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:0},18).wait(30).to({y:610},20).wait(1));

	// animation
	this.instance_3 = new lib.curtain_3_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({alpha:1},5).wait(20).to({alpha:0.012},5).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-610,1600,1820);
p.frameBounds = [rect, rect, new cjs.Rectangle(-400,-576.1,1600,1752.2), new cjs.Rectangle(-400,-542.2,1600,1684.4), new cjs.Rectangle(-400,-508.3,1600,1616.7), new cjs.Rectangle(-400,-474.4,1600,1548.9), new cjs.Rectangle(-400,-440.5,1600,1481.1), new cjs.Rectangle(-400,-406.6,1600,1413.3), new cjs.Rectangle(-400,-372.8,1600,1345.6), new cjs.Rectangle(-400,-338.9,1600,1277.8), new cjs.Rectangle(-400,-305,1600,1210), new cjs.Rectangle(-400,-271.1,1600,1142.2), new cjs.Rectangle(-400,-237.2,1600,1074.4), new cjs.Rectangle(-400,-203.3,1600,1006.7), new cjs.Rectangle(-400,-169.4,1600,938.9), new cjs.Rectangle(-400,-135.5,1600,871.1), new cjs.Rectangle(-400,-101.6,1600,803.3), new cjs.Rectangle(-400,-67.8,1600,735.6), new cjs.Rectangle(-400,-33.9,1600,667.8), rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-30.5,1600,661), new cjs.Rectangle(-400,-61,1600,722), new cjs.Rectangle(-400,-91.5,1600,783), new cjs.Rectangle(-400,-122,1600,844), new cjs.Rectangle(-400,-152.5,1600,905), new cjs.Rectangle(-400,-183,1600,966), new cjs.Rectangle(-400,-213.5,1600,1027), new cjs.Rectangle(-400,-244,1600,1088), new cjs.Rectangle(-400,-274.5,1600,1149), new cjs.Rectangle(-400,-305,1600,1210), new cjs.Rectangle(-400,-335.5,1600,1271), new cjs.Rectangle(-400,-366,1600,1332), new cjs.Rectangle(-400,-396.5,1600,1393), new cjs.Rectangle(-400,-427,1600,1454), new cjs.Rectangle(-400,-457.5,1600,1515), new cjs.Rectangle(-400,-488,1600,1576), new cjs.Rectangle(-400,-518.5,1600,1637), new cjs.Rectangle(-400,-549,1600,1698), new cjs.Rectangle(-400,-579.5,1600,1759), new cjs.Rectangle(-400,-610,1600,1820)];


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
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.6,scaleY:0.6,alpha:0.012},19).to({scaleX:1,scaleY:1,alpha:0.301},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-120,45,240);
p.frameBounds = [rect, new cjs.Rectangle(-22.5,-117.4,44.1,235), new cjs.Rectangle(-22,-114.9,43.1,229.9), new cjs.Rectangle(-21.5,-112.4,42.2,224.9), new cjs.Rectangle(-21,-109.8,41.2,219.8), new cjs.Rectangle(-20.5,-107.3,40.3,214.8), new cjs.Rectangle(-20,-104.8,39.3,209.7), new cjs.Rectangle(-19.6,-102.3,38.4,204.6), new cjs.Rectangle(-19.1,-99.7,37.4,199.6), new cjs.Rectangle(-18.6,-97.2,36.5,194.6), new cjs.Rectangle(-18.1,-94.7,35.6,189.5), new cjs.Rectangle(-17.6,-92.2,34.6,184.4), new cjs.Rectangle(-17.1,-89.6,33.7,179.4), new cjs.Rectangle(-16.7,-87.1,32.7,174.3), new cjs.Rectangle(-16.2,-84.6,31.8,169.3), new cjs.Rectangle(-15.7,-82.1,30.8,164.2), new cjs.Rectangle(-15.2,-79.5,29.9,159.1), new cjs.Rectangle(-14.7,-77,28.9,154.1), new cjs.Rectangle(-14.2,-74.5,28,149.1), new cjs.Rectangle(-13.8,-72,27,144), new cjs.Rectangle(-14.2,-74.3,27.9,148.8), new cjs.Rectangle(-14.7,-76.7,28.8,153.6), new cjs.Rectangle(-15.1,-79.1,29.7,158.4), new cjs.Rectangle(-15.6,-81.5,30.6,163.2), new cjs.Rectangle(-16,-83.9,31.5,168), new cjs.Rectangle(-16.5,-86.3,32.4,172.8), new cjs.Rectangle(-17,-88.7,33.3,177.6), new cjs.Rectangle(-17.4,-91.1,34.2,182.4), new cjs.Rectangle(-17.9,-93.5,35.1,187.2), new cjs.Rectangle(-18.3,-95.9,36,192), new cjs.Rectangle(-18.8,-98.3,36.9,196.8), new cjs.Rectangle(-19.3,-100.7,37.8,201.6), new cjs.Rectangle(-19.7,-103.1,38.7,206.4), new cjs.Rectangle(-20.2,-105.5,39.6,211.2), new cjs.Rectangle(-20.6,-107.9,40.5,216), new cjs.Rectangle(-21.1,-110.3,41.4,220.8), new cjs.Rectangle(-21.6,-112.7,42.3,225.6), new cjs.Rectangle(-22,-115.1,43.2,230.4), new cjs.Rectangle(-22.5,-117.5,44.1,235.2), new cjs.Rectangle(-23,-120,45,240)];


(lib.blinking_light_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_3_3_mc();
	this.instance.setTransform(0,0,0.667,0.667);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({alpha:1},5).to({scaleX:0.5,scaleY:0.5,alpha:0.012},15).wait(1));

	// animation
	this.instance_1 = new lib.blinking_light_2_3_mc();
	this.instance_1.setTransform(0,0,0.667,0.667);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:1},5).to({scaleX:1,scaleY:1},15).to({scaleX:0.67,scaleY:0.67},10).to({alpha:0.012},5).to({_off:true},1).wait(15));

	// animation
	this.instance_2 = new lib.blinking_light_1_3_mc();
	this.instance_2.setTransform(0,0,0.5,0.5);
	this.instance_2.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.67,scaleY:0.67,alpha:1},9).to({alpha:0.012},5).to({_off:true},1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, new cjs.Rectangle(-31.1,-31.1,62.2,62.2), new cjs.Rectangle(-32.2,-32.2,64.5,64.5), new cjs.Rectangle(-33.3,-33.3,66.7,66.7), new cjs.Rectangle(-34.4,-34.4,68.9,68.9), new cjs.Rectangle(-35.5,-35.5,71.1,71.1), new cjs.Rectangle(-36.6,-36.6,73.4,73.4), new cjs.Rectangle(-37.7,-37.7,75.6,75.6), new cjs.Rectangle(-38.8,-38.8,77.8,77.8), new cjs.Rectangle(-40,-40,80,80), rect=new cjs.Rectangle(-39.9,-39.9,80,80), rect, rect, rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-41.3,-41.3,82.7,82.7), new cjs.Rectangle(-42.6,-42.6,85.4,85.4), new cjs.Rectangle(-43.9,-43.9,88,88), new cjs.Rectangle(-45.3,-45.3,90.7,90.7), new cjs.Rectangle(-46.6,-46.6,93.4,93.4), new cjs.Rectangle(-47.9,-47.9,96,96), new cjs.Rectangle(-49.3,-49.3,98.7,98.7), new cjs.Rectangle(-50.6,-50.6,101.4,101.4), new cjs.Rectangle(-51.9,-51.9,104,104), new cjs.Rectangle(-53.3,-53.3,106.7,106.7), new cjs.Rectangle(-54.6,-54.6,109.4,109.4), new cjs.Rectangle(-55.9,-55.9,112,112), new cjs.Rectangle(-57.3,-57.3,114.7,114.7), new cjs.Rectangle(-58.6,-58.6,117.4,117.4), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-57.9,-57.9,116,116), new cjs.Rectangle(-56,-56,112,112), new cjs.Rectangle(-53.9,-53.9,108,108), new cjs.Rectangle(-52,-52,104,104), new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-48,-48,96,96), new cjs.Rectangle(-46,-46,92,92), new cjs.Rectangle(-44,-44,88,88), new cjs.Rectangle(-42,-42,84,84), new cjs.Rectangle(-40,-40,80,80), rect=new cjs.Rectangle(-39.9,-39.9,80,80), rect, rect, rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-39.3,-39.3,78.7,78.7), new cjs.Rectangle(-38.6,-38.6,77.4,77.4), new cjs.Rectangle(-37.9,-37.9,76,76), new cjs.Rectangle(-37.3,-37.3,74.7,74.7), new cjs.Rectangle(-36.6,-36.6,73.4,73.4), new cjs.Rectangle(-35.9,-35.9,72,72), new cjs.Rectangle(-35.3,-35.3,70.7,70.7), new cjs.Rectangle(-34.6,-34.6,69.4,69.4), new cjs.Rectangle(-33.9,-33.9,68,68), new cjs.Rectangle(-33.3,-33.3,66.7,66.7), new cjs.Rectangle(-32.6,-32.6,65.4,65.4), new cjs.Rectangle(-31.9,-31.9,64,64), new cjs.Rectangle(-31.3,-31.3,62.7,62.7), new cjs.Rectangle(-30.6,-30.6,61.4,61.4), new cjs.Rectangle(-30,-30,60,60)];


(lib.blinking_light_0_3_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.blinking_light_4_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
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


(lib.nav_anim_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_5_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({alpha:1},20).to({alpha:0.602},20).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGPIAAsdIPnAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_4_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({alpha:1},15).to({alpha:0.012},15).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFgQiTiRAAjPQAAjOCTiSQCSiTDOAAQDPAACSCTQCTCSAADOQAADPiTCRQiSCTjPAAQjOAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_3_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:1},10).to({alpha:0.754},19).to({alpha:0.012},11).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDHCIAAuDIcHAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({alpha:1},20).to({alpha:0.602},20).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGPIAAsdIPnAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_5_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.nav_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGPIAAsdIPnAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.nav_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_4_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.nav_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFgQiTiRAAjPQAAjOCTiSQCSiTDOAAQDPAACSCTQCTCSAADOQAADPiTCRQiSCTjPAAQjOAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_3_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDHCIAAuDIcHAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGPIAAsdIPnAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


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
	this.shape.graphics.f("rgba(255,255,255,0.039)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDPAACSCTQCTCTAADNQAADOiTCTQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50,-50,101,100), new cjs.Rectangle(-50,-50,102,100), new cjs.Rectangle(-50,-50,103,100), new cjs.Rectangle(-50,-50,104,100), new cjs.Rectangle(-50,-50,105,100), new cjs.Rectangle(-50,-50,104,100), new cjs.Rectangle(-50,-50,103,100), new cjs.Rectangle(-50,-50,102,100), new cjs.Rectangle(-50,-50,101,100), new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-51,-50,101,100), new cjs.Rectangle(-52,-50,102,100), new cjs.Rectangle(-53,-50,103,100), new cjs.Rectangle(-54,-50,104,100), new cjs.Rectangle(-55,-50,105,100), new cjs.Rectangle(-54,-50,104,100), new cjs.Rectangle(-53,-50,103,100), new cjs.Rectangle(-52,-50,102,100), new cjs.Rectangle(-51,-50,101,100), new cjs.Rectangle(-50,-50,100,100)];


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
p.nominalBounds = rect = new cjs.Rectangle(-280,-90,560,180);
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


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-160,-210);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-160,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// decor
	this.instance_3 = new lib.animation_current_location_1_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgajAiXMAAAhEtMA1HAAAMAAABEtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-160,-210);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-160,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// decor
	this.instance_3 = new lib.animation_current_location_1_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgajAiXMAAAhEtMA1HAAAMAAABEtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-160,-210);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-160,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// decor
	this.instance_3 = new lib.animation_current_location_1_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgajAiXMAAAhEtMA1HAAAMAAABEtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
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


(lib.hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.accessory_all_mc();
	this.accessory.setTransform(-6.5,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({rotation:3.2,x:-1.6,y:-161.2},39).to({rotation:0,x:-6.5,y:-152.5},40).wait(1));

	// earrings
	this.earrings = new lib.earrings_all_mc();
	this.earrings.setTransform(-3.1,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({regY:-0.1,rotation:3.2,x:-0.3,y:-123.2},39).to({regY:0,rotation:0,x:-3.1,y:-114.5},40).wait(1));

	// fringe
	this.fringe = new lib.fringe_all_mc();
	this.fringe.setTransform(-28.1,-125.1);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:3.2,x:-24.7,y:-135.1},39).to({rotation:0,x:-28.1,y:-125.1},40).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero_eyelashes_all_mc();
	this.eyebrows.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:3.2,x:3.6,y:-164.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// body
	this.instance = new lib.hero_eyes_mc();
	this.instance.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.2,x:3.6,y:-164.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// shadows
	this.shadows = new lib.hero_shadows_all_mc();
	this.shadows.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:3.2,x:3.6,y:-164.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// lips
	this.lips = new lib.hero_lips_all_mc();
	this.lips.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:3.2,x:3.6,y:-164.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// blush
	this.blush = new lib.hero_rouge_all_mc();
	this.blush.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({rotation:3.2,x:3.6,y:-164.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// body
	this.instance_1 = new lib.head_mc();
	this.instance_1.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:3.2,x:3.6,y:-164.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// necklace
	this.necklace = new lib.necklace_all_mc();
	this.necklace.setTransform(-16.1,14.9);

	this.timeline.addTween(cjs.Tween.get(this.necklace).to({y:5.9},39).to({y:14.9},40).wait(1));

	// dress
	this.dress = new lib.dress_all_mc();
	this.dress.setTransform(-26.6,154.4);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:145.4},39).to({y:154.4},40).wait(1));

	// body
	this.instance_2 = new lib.hero_body_mc();
	this.instance_2.setTransform(-24.6,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:104.5},39).to({y:113.5},40).wait(1));

	// hair
	this.hair = new lib.hair_all_mc();
	this.hair.setTransform(-28.1,-125.1);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:3.2,x:-24.7,y:-135.1},39).to({rotation:0,x:-28.1,y:-125.1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-204.6,-268.6,356,583.1);
p.frameBounds = [rect, new cjs.Rectangle(-204.6,-268.9,356,583.1), new cjs.Rectangle(-204.6,-269.2,356,583.2), new cjs.Rectangle(-204.6,-269.5,356,583.3), new cjs.Rectangle(-204.6,-270.3,356,583.9), new cjs.Rectangle(-204.6,-270.6,356,583.9), new cjs.Rectangle(-204.6,-270.8,356,583.9), new cjs.Rectangle(-204.6,-271.6,356,584.5), new cjs.Rectangle(-204.6,-271.9,356,584.5), new cjs.Rectangle(-204.6,-272.2,356,584.6), new cjs.Rectangle(-204.6,-272.9,356,585.1), new cjs.Rectangle(-204.6,-273.2,356,585.1), new cjs.Rectangle(-204.6,-273.5,356,585.3), new cjs.Rectangle(-204.6,-274.2,356,585.7), new cjs.Rectangle(-204.6,-274.5,356,585.8), new cjs.Rectangle(-204.6,-274.8,356,585.9), new cjs.Rectangle(-204.6,-275.5,356,586.3), new cjs.Rectangle(-204.6,-275.8,356,586.4), new cjs.Rectangle(-204.6,-276.2,356,586.5), new cjs.Rectangle(-204.6,-276.8,356,586.9), new cjs.Rectangle(-204.6,-277.2,356,587.1), new cjs.Rectangle(-204.6,-277.5,356,587.1), new cjs.Rectangle(-204.6,-278.2,356,587.6), new cjs.Rectangle(-204.6,-278.5,356,587.7), new cjs.Rectangle(-204.6,-278.8,356,587.7), new cjs.Rectangle(-204.6,-279.5,356,588.2), new cjs.Rectangle(-204.6,-279.8,356,588.3), new cjs.Rectangle(-204.6,-280.1,356,588.3), new cjs.Rectangle(-204.6,-280.8,356,588.9), new cjs.Rectangle(-204.6,-281.1,356,588.9), new cjs.Rectangle(-204.6,-281.4,356,589), new cjs.Rectangle(-204.6,-282.1,356,589.4), new cjs.Rectangle(-204.6,-282.4,356,589.5), new cjs.Rectangle(-204.6,-282.7,356,589.6), new cjs.Rectangle(-204.6,-283.4,356,590), new cjs.Rectangle(-204.6,-283.7,356,590.1), new cjs.Rectangle(-204.6,-284,356,590.2), new cjs.Rectangle(-204.6,-284.7,356,590.7), new cjs.Rectangle(-204.6,-285,356,590.7), new cjs.Rectangle(-204.6,-285.7,356,591.2), new cjs.Rectangle(-204.6,-285,356,590.8), new cjs.Rectangle(-204.6,-284.7,356,590.6), new cjs.Rectangle(-204.6,-284.1,356,590.3), new cjs.Rectangle(-204.6,-283.7,356,590.1), new cjs.Rectangle(-204.6,-283.4,356,590.1), new cjs.Rectangle(-204.6,-282.7,356,589.6), new cjs.Rectangle(-204.6,-282.4,356,589.5), new cjs.Rectangle(-204.6,-282.1,356,589.4), new cjs.Rectangle(-204.6,-281.4,356,589), new cjs.Rectangle(-204.6,-281.2,356,588.9), new cjs.Rectangle(-204.6,-280.9,356,588.8), new cjs.Rectangle(-204.6,-280.2,356,588.3), new cjs.Rectangle(-204.6,-279.9,356,588.3), new cjs.Rectangle(-204.6,-279.6,356,588.2), new cjs.Rectangle(-204.6,-278.9,356,587.8), new cjs.Rectangle(-204.6,-278.6,356,587.7), new cjs.Rectangle(-204.6,-278.3,356,587.6), new cjs.Rectangle(-204.6,-278,356,587.5), new cjs.Rectangle(-204.6,-277.3,356,587.1), new cjs.Rectangle(-204.6,-277,356,587), new cjs.Rectangle(-204.6,-276.7,356,587), new cjs.Rectangle(-204.6,-276,356,586.4), new cjs.Rectangle(-204.6,-275.7,356,586.4), new cjs.Rectangle(-204.6,-275.4,356,586.3), new cjs.Rectangle(-204.6,-274.7,356,585.8), new cjs.Rectangle(-204.6,-274.5,356,585.8), new cjs.Rectangle(-204.6,-274.2,356,585.8), new cjs.Rectangle(-204.6,-273.4,356,585.2), new cjs.Rectangle(-204.6,-273.1,356,585.2), new cjs.Rectangle(-204.6,-272.8,356,585.1), new cjs.Rectangle(-204.6,-272.1,356,584.6), new cjs.Rectangle(-204.6,-271.9,356,584.6), new cjs.Rectangle(-204.6,-271.5,356,584.5), new cjs.Rectangle(-204.6,-270.8,356,583.9), new cjs.Rectangle(-204.6,-270.5,356,583.9), new cjs.Rectangle(-204.6,-270.3,356,583.9), new cjs.Rectangle(-204.6,-269.5,356,583.3), new cjs.Rectangle(-204.6,-269.2,356,583.2), new cjs.Rectangle(-204.6,-268.9,356,583.2), new cjs.Rectangle(-204.6,-268.6,356,583.1)];


(lib.hero_main_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.accessory_m2_mc();
	this.instance.setTransform(-6.5,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.2,x:-1.6,y:-167.2},39).to({rotation:0,x:-6.5,y:-152.5},40).wait(1));

	// animation
	this.instance_1 = new lib.earrings_m2_mc();
	this.instance_1.setTransform(-3.1,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-0.1,rotation:3.2,x:-0.3,y:-129.2},39).to({regY:0,rotation:0,x:-3.1,y:-114.5},40).wait(1));

	// animation
	this.instance_2 = new lib.fringe_m2_mc();
	this.instance_2.setTransform(-28.1,-125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:3.2,x:-24.7,y:-141.1},39).to({rotation:0,x:-28.1,y:-125.1},40).wait(1));

	// animation
	this.instance_3 = new lib.hero_eyes_mc();
	this.instance_3.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:3.2,x:3.6,y:-170.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// animation
	this.instance_4 = new lib.hero_shadows_m2_mc();
	this.instance_4.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:3.2,x:3.6,y:-170.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// animation
	this.instance_5 = new lib.hero_lips_m2_mc();
	this.instance_5.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:3.2,x:3.6,y:-170.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// animation
	this.instance_6 = new lib.head_mc();
	this.instance_6.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:3.2,x:3.6,y:-170.6},39).to({rotation:0,x:-1.5,y:-156.1},40).wait(1));

	// animation
	this.instance_7 = new lib.dress_m2_mc();
	this.instance_7.setTransform(-26.6,154.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:139.4},39).to({y:154.4},40).wait(1));

	// animation
	this.instance_8 = new lib.necklace_m2_mc();
	this.instance_8.setTransform(-16.1,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-0.1},39).to({y:14.9},40).wait(1));

	// animation
	this.instance_9 = new lib.hero_body_mc();
	this.instance_9.setTransform(-24.6,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:98.5},39).to({y:113.5},40).wait(1));

	// animation
	this.instance_10 = new lib.hair_m2_mc();
	this.instance_10.setTransform(-28.1,-125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:3.2,x:-24.7,y:-141.1},39).to({rotation:0,x:-28.1,y:-125.1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197.6,-267.1,346,581.6);
p.frameBounds = [rect, new cjs.Rectangle(-197.6,-267.5,346,581.6), new cjs.Rectangle(-197.6,-268,346,581.7), new cjs.Rectangle(-197.6,-268.5,346,581.8), new cjs.Rectangle(-197.6,-269.2,346,582.2), new cjs.Rectangle(-197.6,-269.7,346,582.3), new cjs.Rectangle(-197.6,-270.1,346,582.3), new cjs.Rectangle(-197.6,-270.9,346,582.7), new cjs.Rectangle(-197.6,-271.4,346,582.8), new cjs.Rectangle(-197.6,-271.8,346,582.9), new cjs.Rectangle(-197.6,-272.6,346,583.3), new cjs.Rectangle(-197.6,-273,346,583.3), new cjs.Rectangle(-197.6,-273.5,346,583.4), new cjs.Rectangle(-197.6,-274.3,346,583.8), new cjs.Rectangle(-197.6,-274.7,346,583.8), new cjs.Rectangle(-197.6,-275.2,346,583.9), new cjs.Rectangle(-197.6,-275.9,346,584.3), new cjs.Rectangle(-197.6,-276.4,346,584.3), new cjs.Rectangle(-197.6,-276.9,346,584.5), new cjs.Rectangle(-197.6,-277.6,346,584.8), new cjs.Rectangle(-197.6,-278.1,346,584.9), new cjs.Rectangle(-197.6,-278.5,346,584.9), new cjs.Rectangle(-197.6,-279.3,346,585.4), new cjs.Rectangle(-197.6,-279.8,346,585.4), new cjs.Rectangle(-197.6,-280.2,346,585.5), new cjs.Rectangle(-197.6,-281,346,585.9), new cjs.Rectangle(-197.6,-281.4,346,585.9), new cjs.Rectangle(-197.6,-281.9,346,586), new cjs.Rectangle(-197.6,-282.7,346,586.4), new cjs.Rectangle(-197.6,-283.1,346,586.4), new cjs.Rectangle(-197.6,-283.5,346,586.5), new cjs.Rectangle(-197.6,-284.3,346,586.9), new cjs.Rectangle(-197.6,-284.8,346,587), new cjs.Rectangle(-197.6,-285.2,346,587), new cjs.Rectangle(-197.6,-286,346,587.4), new cjs.Rectangle(-197.6,-286.4,346,587.5), new cjs.Rectangle(-197.6,-286.8,346,587.5), new cjs.Rectangle(-197.6,-287.6,346,587.8), new cjs.Rectangle(-197.6,-288.1,346,588), new cjs.Rectangle(-197.6,-288.8,346,588.3), new cjs.Rectangle(-197.6,-288.1,346,588), new cjs.Rectangle(-197.6,-287.6,346,587.8), new cjs.Rectangle(-197.6,-286.9,346,587.5), new cjs.Rectangle(-197.6,-286.5,346,587.5), new cjs.Rectangle(-197.6,-286,346,587.4), new cjs.Rectangle(-197.6,-285.3,346,587), new cjs.Rectangle(-197.6,-284.8,346,587), new cjs.Rectangle(-197.6,-284.4,346,586.8), new cjs.Rectangle(-197.6,-283.6,346,586.5), new cjs.Rectangle(-197.6,-283.2,346,586.4), new cjs.Rectangle(-197.6,-282.8,346,586.4), new cjs.Rectangle(-197.6,-282,346,586), new cjs.Rectangle(-197.6,-281.6,346,586), new cjs.Rectangle(-197.6,-281.1,346,585.8), new cjs.Rectangle(-197.6,-280.4,346,585.5), new cjs.Rectangle(-197.6,-279.9,346,585.4), new cjs.Rectangle(-197.6,-279.5,346,585.4), new cjs.Rectangle(-197.6,-279.1,346,585.3), new cjs.Rectangle(-197.6,-278.3,346,584.9), new cjs.Rectangle(-197.6,-277.9,346,584.8), new cjs.Rectangle(-197.6,-277.4,346,584.8), new cjs.Rectangle(-197.6,-276.7,346,584.4), new cjs.Rectangle(-197.6,-276.2,346,584.4), new cjs.Rectangle(-197.6,-275.8,346,584.3), new cjs.Rectangle(-197.6,-275,346,583.9), new cjs.Rectangle(-197.6,-274.6,346,583.8), new cjs.Rectangle(-197.6,-274.1,346,583.8), new cjs.Rectangle(-197.6,-273.4,346,583.3), new cjs.Rectangle(-197.6,-272.9,346,583.3), new cjs.Rectangle(-197.6,-272.5,346,583.2), new cjs.Rectangle(-197.6,-271.7,346,582.9), new cjs.Rectangle(-197.6,-271.3,346,582.8), new cjs.Rectangle(-197.6,-270.8,346,582.7), new cjs.Rectangle(-197.6,-270.1,346,582.3), new cjs.Rectangle(-197.6,-269.6,346,582.3), new cjs.Rectangle(-197.6,-269.2,346,582.2), new cjs.Rectangle(-197.6,-268.4,346,581.8), new cjs.Rectangle(-197.6,-268,346,581.7), new cjs.Rectangle(-197.6,-267.5,346,581.7), new cjs.Rectangle(-197.6,-267.1,346,581.6)];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.accessory_all_mc();
	this.accessory.setTransform(-6.5,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// earrings
	this.earrings = new lib.earrings_all_mc();
	this.earrings.setTransform(-3.1,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).wait(1));

	// fringe
	this.fringe = new lib.fringe_all_mc();
	this.fringe.setTransform(-28.1,-125.1);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero_eyelashes_all_mc();
	this.eyebrows.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// body
	this.instance = new lib.hero_eyes_mc();
	this.instance.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadows
	this.shadows = new lib.hero_shadows_all_mc();
	this.shadows.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero_lips_all_mc();
	this.lips.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero_rouge_all_mc();
	this.blush.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.head_mc();
	this.instance_1.setTransform(-1.5,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// necklace
	this.necklace = new lib.necklace_all_mc();
	this.necklace.setTransform(-16.1,14.9);

	this.timeline.addTween(cjs.Tween.get(this.necklace).wait(1));

	// dress
	this.dress = new lib.dress_all_mc();
	this.dress.setTransform(-26.6,154.4);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// body
	this.instance_2 = new lib.hero_body_mc();
	this.instance_2.setTransform(-24.6,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hair
	this.hair = new lib.hair_all_mc();
	this.hair.setTransform(-28.1,-125.1);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-204.6,-268.6,356,583.1);
p.frameBounds = [rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

	// location_3
	this.location_3 = new lib.location_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-600},0).wait(38).to({y:100},15).to({y:0},5).wait(71));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-280,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-500},0).wait(28).to({regX:-0.1,regY:-0.1,y:100},15).to({regX:0,regY:0,y:0},5).wait(81));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(280,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(48).to({regX:0.1,regY:-0.1,x:280.1,y:100},15).to({regX:0,regY:0,x:280,y:0},5).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.9,-220,791.8,440);
p.frameBounds = [rect, rect=new cjs.Rectangle(-395.9,-820,791.8,470), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395.9,-820,791.8,510.1), new cjs.Rectangle(-395.9,-820,791.8,550.1), new cjs.Rectangle(-395.9,-820,791.8,590.1), new cjs.Rectangle(-395.9,-820,791.8,630.1), new cjs.Rectangle(-395.9,-820,791.8,670.1), new cjs.Rectangle(-395.9,-820,791.8,710.1), new cjs.Rectangle(-395.9,-820,791.8,750), new cjs.Rectangle(-395.9,-820,791.8,790.1), new cjs.Rectangle(-395.9,-820,791.8,830), new cjs.Rectangle(-395.9,-820,791.8,870), new cjs.Rectangle(-395.9,-773.3,791.8,863.4), new cjs.Rectangle(-395.9,-726.6,791.8,856.7), new cjs.Rectangle(-395.9,-680,791.8,850), new cjs.Rectangle(-395.9,-650,791.8,860), new cjs.Rectangle(-395.9,-650,791.8,900), new cjs.Rectangle(-395.9,-650,791.8,880), new cjs.Rectangle(-395.9,-650,791.8,860), new cjs.Rectangle(-395.8,-650,791.8,840.1), new cjs.Rectangle(-395.8,-650,791.8,820.1), new cjs.Rectangle(-395.9,-650,791.8,800), new cjs.Rectangle(-395.9,-610,791.8,760), new cjs.Rectangle(-395.9,-570,791.8,750), new cjs.Rectangle(-395.9,-530,791.8,756.7), new cjs.Rectangle(-395.9,-490,791.8,763.4), new cjs.Rectangle(-395.9,-450,791.8,770), new cjs.Rectangle(-395.9,-410,791.8,710), new cjs.Rectangle(-395.9,-370,791.8,650.1), new cjs.Rectangle(-395.9,-330,791.8,590), new cjs.Rectangle(-395.9,-290,791.8,530.1), new cjs.Rectangle(-395.9,-250,791.8,470.1), rect=new cjs.Rectangle(-395.9,-220,791.8,440), rect, rect, rect, new cjs.Rectangle(-395.9,-220,791.8,470), new cjs.Rectangle(-395.9,-220,791.8,450), rect=new cjs.Rectangle(-395.9,-220,791.8,440), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

	// location_2
	this.location_2 = new lib.location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(38).to({y:100},15).to({y:0},5).wait(71));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-280,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-500},0).wait(28).to({regX:-0.1,regY:-0.1,y:100},15).to({regX:0,regY:0,y:0},5).wait(81));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(280,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500},0).wait(48).to({regX:0.1,x:280.1,y:100},15).to({regX:0,x:280,y:0},5).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.9,-220,791.8,440);
p.frameBounds = [rect, rect=new cjs.Rectangle(-395.9,-820,791.8,470), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395.9,-820,791.8,510.1), new cjs.Rectangle(-395.9,-820,791.8,550.1), new cjs.Rectangle(-395.9,-820,791.8,590.1), new cjs.Rectangle(-395.9,-820,791.8,630.1), new cjs.Rectangle(-395.9,-820,791.8,670.1), new cjs.Rectangle(-395.9,-820,791.8,710.1), new cjs.Rectangle(-395.9,-820,791.8,750), new cjs.Rectangle(-395.9,-820,791.8,790.1), new cjs.Rectangle(-395.9,-820,791.8,830), new cjs.Rectangle(-395.9,-820,791.8,870), new cjs.Rectangle(-395.9,-773.3,791.8,863.4), new cjs.Rectangle(-395.9,-726.6,791.8,856.7), new cjs.Rectangle(-395.9,-680,791.8,850), new cjs.Rectangle(-395.9,-650,791.8,860), new cjs.Rectangle(-395.9,-650,791.8,900), new cjs.Rectangle(-395.9,-650,791.8,880), new cjs.Rectangle(-395.9,-650,791.8,860), new cjs.Rectangle(-395.8,-650,791.8,840.1), new cjs.Rectangle(-395.8,-650,791.8,820.1), new cjs.Rectangle(-395.9,-650,791.8,800), new cjs.Rectangle(-395.9,-610,791.8,760), new cjs.Rectangle(-395.9,-570,791.8,750), new cjs.Rectangle(-395.9,-530,791.8,756.7), new cjs.Rectangle(-395.9,-490,791.8,763.4), new cjs.Rectangle(-395.9,-450,791.8,770), new cjs.Rectangle(-395.9,-410,791.8,710), new cjs.Rectangle(-395.9,-370,791.8,650.1), new cjs.Rectangle(-395.9,-330,791.8,590), new cjs.Rectangle(-395.9,-290,791.8,530.1), new cjs.Rectangle(-395.9,-250,791.8,470.1), rect=new cjs.Rectangle(-395.9,-220,791.8,440), rect, rect, rect, new cjs.Rectangle(-395.9,-220,791.8,470), new cjs.Rectangle(-395.9,-220,791.8,450.1), rect=new cjs.Rectangle(-395.9,-220,791.8,440), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

	// location_1
	this.location_1 = new lib.location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-600},0).wait(38).to({y:100},15).to({y:0},5).wait(71));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-280,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(28).to({regX:-0.1,regY:-0.1,y:100},15).to({regX:0,regY:0,y:0},5).wait(81));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(280,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500},0).wait(48).to({regX:0.1,regY:-0.1,x:280.1,y:100},15).to({regX:0,regY:0,x:280,y:0},5).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.9,-220,791.8,440);
p.frameBounds = [rect, rect=new cjs.Rectangle(-395.9,-820,791.8,470), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395.9,-820,791.8,510.1), new cjs.Rectangle(-395.9,-820,791.8,550.1), new cjs.Rectangle(-395.9,-820,791.8,590.1), new cjs.Rectangle(-395.9,-820,791.8,630.1), new cjs.Rectangle(-395.9,-820,791.8,670.1), new cjs.Rectangle(-395.9,-820,791.8,710.1), new cjs.Rectangle(-395.9,-820,791.8,750), new cjs.Rectangle(-395.9,-820,791.8,790.1), new cjs.Rectangle(-395.9,-820,791.8,830), new cjs.Rectangle(-395.9,-820,791.8,870), new cjs.Rectangle(-395.9,-773.3,791.8,863.4), new cjs.Rectangle(-395.9,-726.6,791.8,856.7), new cjs.Rectangle(-395.9,-680,791.8,850), new cjs.Rectangle(-395.9,-650,791.8,860), new cjs.Rectangle(-395.9,-650,791.8,900), new cjs.Rectangle(-395.9,-650,791.8,880.1), new cjs.Rectangle(-395.9,-650,791.8,860.1), new cjs.Rectangle(-395.8,-650,791.8,840.2), new cjs.Rectangle(-395.8,-650,791.8,820.2), new cjs.Rectangle(-395.9,-650,791.8,800), new cjs.Rectangle(-395.9,-610,791.8,760), new cjs.Rectangle(-395.9,-570,791.8,750), new cjs.Rectangle(-395.9,-530,791.8,756.7), new cjs.Rectangle(-395.9,-490,791.8,763.4), new cjs.Rectangle(-395.9,-450,791.8,770), new cjs.Rectangle(-395.9,-410,791.8,710), new cjs.Rectangle(-395.9,-370,791.8,650.1), new cjs.Rectangle(-395.9,-330,791.8,590), new cjs.Rectangle(-395.9,-290,791.8,530.1), new cjs.Rectangle(-395.9,-250,791.8,470.1), rect=new cjs.Rectangle(-395.9,-220,791.8,440), rect, rect, rect, new cjs.Rectangle(-395.9,-220,791.8,470), new cjs.Rectangle(-395.9,-220,791.8,450), rect=new cjs.Rectangle(-395.9,-220,791.8,440), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.decor_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.blinking_light_0_3_mc();
	this.instance.setTransform(572,171,0.75,0.75);

	this.instance_1 = new lib.blinking_light_0_3_mc();
	this.instance_1.setTransform(150,410,0.75,0.75);

	this.instance_2 = new lib.blinking_light_0_3_mc();
	this.instance_2.setTransform(45,50,0.75,0.75);

	this.instance_3 = new lib.blinking_light_0_3_mc();
	this.instance_3.setTransform(599,535);

	this.instance_4 = new lib.blinking_light_0_3_mc();
	this.instance_4.setTransform(568,55,0.75,0.75);

	this.instance_5 = new lib.blinking_light_0_3_mc();
	this.instance_5.setTransform(589,283,0.75,0.75);

	this.instance_6 = new lib.blinking_light_0_3_mc();
	this.instance_6.setTransform(178,275);

	this.instance_7 = new lib.blinking_light_0_3_mc();
	this.instance_7.setTransform(135,545);

	this.instance_8 = new lib.blinking_light_0_3_mc();
	this.instance_8.setTransform(220,50);

	this.instance_9 = new lib.blinking_light_0_3_mc();
	this.instance_9.setTransform(683,408);

	this.instance_10 = new lib.blinking_light_0_3_mc();
	this.instance_10.setTransform(741,265);

	this.instance_11 = new lib.blinking_light_0_3_mc();
	this.instance_11.setTransform(689,144);

	this.instance_12 = new lib.blinking_light_0_3_mc();
	this.instance_12.setTransform(333,35,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(22.5,12.5,748.5,562.5);
p.frameBounds = [rect];


(lib.decor_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.blinking_light_0_3_mc();
	this.instance.setTransform(109,283,0.75,0.75);

	this.instance_1 = new lib.blinking_light_0_3_mc();
	this.instance_1.setTransform(68,180,0.75,0.75);

	this.instance_2 = new lib.blinking_light_0_3_mc();
	this.instance_2.setTransform(715,438);

	this.instance_3 = new lib.blinking_light_0_3_mc();
	this.instance_3.setTransform(587,96,0.75,0.75);

	this.instance_4 = new lib.blinking_light_0_3_mc();
	this.instance_4.setTransform(597,240,0.75,0.75);

	this.instance_5 = new lib.blinking_light_0_3_mc();
	this.instance_5.setTransform(230,326);

	this.instance_6 = new lib.blinking_light_0_3_mc();
	this.instance_6.setTransform(126,427);

	this.instance_7 = new lib.blinking_light_0_3_mc();
	this.instance_7.setTransform(234,135);

	this.instance_8 = new lib.blinking_light_0_3_mc();
	this.instance_8.setTransform(603,376);

	this.instance_9 = new lib.blinking_light_0_3_mc();
	this.instance_9.setTransform(676,329);

	this.instance_10 = new lib.blinking_light_0_3_mc();
	this.instance_10.setTransform(697,131);

	this.instance_11 = new lib.blinking_light_0_3_mc();
	this.instance_11.setTransform(286,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(45.5,-3,699.5,471);
p.frameBounds = [rect];


(lib.decor_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.blinking_light_0_3_mc();
	this.instance.setTransform(31,158,0.75,0.75);

	this.instance_1 = new lib.blinking_light_0_3_mc();
	this.instance_1.setTransform(657,516);

	this.instance_2 = new lib.blinking_light_0_3_mc();
	this.instance_2.setTransform(565,82,0.75,0.75);

	this.instance_3 = new lib.blinking_light_0_3_mc();
	this.instance_3.setTransform(587,290,0.75,0.75);

	this.instance_4 = new lib.blinking_light_0_3_mc();
	this.instance_4.setTransform(191,290);

	this.instance_5 = new lib.blinking_light_0_3_mc();
	this.instance_5.setTransform(16,310);

	this.instance_6 = new lib.blinking_light_0_3_mc();
	this.instance_6.setTransform(222,112);

	this.instance_7 = new lib.blinking_light_0_3_mc();
	this.instance_7.setTransform(683,436);

	this.instance_8 = new lib.blinking_light_0_3_mc();
	this.instance_8.setTransform(775,340);

	this.instance_9 = new lib.blinking_light_0_3_mc();
	this.instance_9.setTransform(689,144);

	this.instance_10 = new lib.blinking_light_0_3_mc();
	this.instance_10.setTransform(370,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,10,819,536);
p.frameBounds = [rect];


(lib.current_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_makeup_0_2_mc();

	this.instance_1 = new lib.current_makeup_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect, rect];


(lib.current_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_makeup_0_1_mc();

	this.instance_1 = new lib.current_makeup_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, rect];


(lib.current_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_hairstyle_0_mc();

	this.instance_1 = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect, rect];


(lib.current_dress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_dress_0_mc();

	this.instance_1 = new lib.current_dress_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect, rect];


(lib.current_accessory_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_accessory_0_1_mc();

	this.instance_1 = new lib.current_accessory_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect, rect];


(lib.blush_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blush_6_img();
	this.instance.setTransform(-55,-55,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.blush_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blush_5_img();
	this.instance.setTransform(-55,-55,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.blush_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blush_4_img();
	this.instance.setTransform(-55,-55,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.blush_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blush_3_img();
	this.instance.setTransform(-55,-55,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.blush_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blush_2_img();
	this.instance.setTransform(-55,-55,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.blush_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blush_1_img();
	this.instance.setTransform(-55,-55,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,-610,1600,1820);
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
p.nominalBounds = rect = new cjs.Rectangle(-23,-120,45,240);
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
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.prev_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_5_mc();
	this.instance.setTransform(0,0,0.9,0.9,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-45,108,90);
p.frameBounds = [rect];


(lib.prev_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_4_mc();
	this.instance.setTransform(0,0,0.9,0.9,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-45,135,90);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.9,0.9,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-45,108,90);
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


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


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


(lib.next_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_5_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-45,108,90);
p.frameBounds = [rect];


(lib.next_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_4_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.75,0.75,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-45,135,90);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-45,108,90);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.shadows_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new10_img();
	this.instance.setTransform(-50,-31,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.shadows_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new13_img();
	this.instance.setTransform(-50,-31,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.shadows_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new6_img();
	this.instance.setTransform(-50,-31,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.shadows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-50,-31,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.shadows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new41_img();
	this.instance.setTransform(-50,-31,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.shadows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new4_img();
	this.instance.setTransform(-50,-31,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.necklace_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace6_2_img();
	this.instance.setTransform(-35,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.necklace_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace5_2_img();
	this.instance.setTransform(-43,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.necklace_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace7_2_img();
	this.instance.setTransform(-35,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.necklace_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace4_2_img();
	this.instance.setTransform(-36,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.necklace_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace3_2_img();
	this.instance.setTransform(-33,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.necklace_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace2_2_img();
	this.instance.setTransform(-26,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.necklace_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace1_2_img();
	this.instance.setTransform(-32,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.9,-220,791.8,440);
p.frameBounds = [rect, rect, rect];


(lib.lips_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new11_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.lips_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new19_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.lips_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new23_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.lips_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new10_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.lips_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new7_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new1_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
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


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.background_9_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(405,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(3).to({x:250},0).wait(1).to({x:405},0).wait(1).to({y:1200},0).wait(1));

	// container_1
	this.container_1_mc = new lib.container_1_mc();
	this.container_1_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.container_1_mc).wait(5).to({_off:false},0).wait(1));

	// bg
	this.instance_1 = new lib.background_6_img();
	this.instance_1.setTransform(-400,0);

	this.instance_2 = new lib.background_5_img();
	this.instance_2.setTransform(-400,0);

	this.instance_3 = new lib.background_7_img();
	this.instance_3.setTransform(-400,0);

	this.instance_4 = new lib.background_8_img();
	this.instance_4.setTransform(-400,0);

	this.instance_5 = new lib.black_600_img();
	this.instance_5.setTransform(100,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2},{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,629.5);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-400,0,1600,1514.5)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_main_1_mc();
	this.instance.setTransform(400,1000);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({scaleY:0.86,y:360},10).to({scaleY:1,y:315},5).wait(1));

	// animation
	this.instance_1 = new lib.hero_main_2_mc();
	this.instance_1.setTransform(400,1000);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({scaleY:0.86,y:360},10).to({scaleY:1,y:315},5).wait(50).to({y:1000},10).to({_off:true},1).wait(10));

	// animation
	this.instance_2 = new lib.hero_main_1_mc();
	this.instance_2.setTransform(400,315);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({y:1000},10).to({_off:true},1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(195.4,46.4,356,1268.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(195.4,114.9,356,1199.6), new cjs.Rectangle(195.4,183.4,356,1131.1), new cjs.Rectangle(195.4,251.9,356,1062.6), new cjs.Rectangle(195.4,320.4,356,994.1), new cjs.Rectangle(195.4,388.9,356,925.6), new cjs.Rectangle(195.4,457.4,356,788.7), new cjs.Rectangle(195.4,525.9,356,651.7), new cjs.Rectangle(195.4,552.1,356,625.4), new cjs.Rectangle(195.4,491.8,356,754.2), new cjs.Rectangle(195.4,431.6,356,882.9), new cjs.Rectangle(202.4,371.3,346,532.6), new cjs.Rectangle(202.4,311,346,524.5), new cjs.Rectangle(202.4,250.8,346,516.4), new cjs.Rectangle(202.4,190.6,346,508.2), new cjs.Rectangle(202.4,130.3,346,500), new cjs.Rectangle(202.4,113.8,346,516.4), new cjs.Rectangle(202.4,97.3,346,532.6), new cjs.Rectangle(202.4,80.8,346,549), new cjs.Rectangle(202.4,64.3,346,565.3), rect=new cjs.Rectangle(202.4,47.9,346,581.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(202.4,116.4,346,581.6), new cjs.Rectangle(202.4,184.9,346,581.6), new cjs.Rectangle(202.4,253.4,346,581.6), new cjs.Rectangle(202.4,321.9,346,581.6), new cjs.Rectangle(195.4,390.4,356,924.1), new cjs.Rectangle(195.4,458.9,356,787.1), new cjs.Rectangle(195.4,527.4,356,650.1), new cjs.Rectangle(195.4,550.8,356,626.7), new cjs.Rectangle(195.4,490.6,356,755.4), new cjs.Rectangle(195.4,430.5,356,884), new cjs.Rectangle(195.4,370.3,356,533.2), new cjs.Rectangle(195.4,310.1,356,524.9), new cjs.Rectangle(195.4,250,356,516.6), new cjs.Rectangle(195.4,189.8,356,508.2), new cjs.Rectangle(195.4,129.6,356,500), new cjs.Rectangle(195.4,113,356,516.6), new cjs.Rectangle(195.4,96.3,356,533.2), new cjs.Rectangle(195.4,79.6,356,549.9), new cjs.Rectangle(195.4,63,356,566.5), new cjs.Rectangle(195.4,46.4,356,583.1)];


(lib.hairstyle_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_9_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0SUTMAAAgolMAolAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_8_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0SUTMAAAgolMAolAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_7_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0SUTMAAAgolMAolAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_6_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0SUTMAAAgolMAolAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_5_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0SUTMAAAgolMAolAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_4_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0SUTMAAAgolMAolAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_3_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0SUTMAAAgolMAolAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0SUTMAAAgolMAolAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
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


(lib.eyebrows_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara_new10_img();
	this.instance.setTransform(-20,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.eyebrows_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara_new2_img();
	this.instance.setTransform(-20,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.eyebrows_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara_new6_img();
	this.instance.setTransform(-20,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.eyebrows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara_new1_img();
	this.instance.setTransform(-20,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.eyebrows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara_new3_img();
	this.instance.setTransform(-20,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.eyebrows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvopka1_img();
	this.instance.setTransform(-12.5,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-85,80,170);
p.frameBounds = [rect];


(lib.earrings_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.earrings_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.earrings_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.earrings_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.earrings_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.earrings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.earrings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_accessory_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-85,130,170);
p.frameBounds = [rect];


(lib.dress_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_15_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_14_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_13_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_12_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_11_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_10_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_9_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_8_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_7_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_6_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_5_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_4_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_3_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cHMAAAg4OMArvAAAMAAAA4Og");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_2_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13cIMAAAg4PMArvAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.closet_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(150,-130);

	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(150,-80);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(150,-130);

	this.eyebrows_0 = new lib.eyebrows_0_mc();
	this.eyebrows_0.setTransform(150,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.lips_0}]},1).to({state:[{t:this.shadows_0}]},1).to({state:[{t:this.eyebrows_0}]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_mc();
	this.blush_6.setTransform(66,118);

	this.blush_5 = new lib.blush_5_mc();
	this.blush_5.setTransform(-66,118);

	this.blush_4 = new lib.blush_4_mc();
	this.blush_4.setTransform(66,-7);

	this.blush_3 = new lib.blush_3_mc();
	this.blush_3.setTransform(-66,-7);

	this.blush_2 = new lib.blush_2_mc();
	this.blush_2.setTransform(66,-132);

	this.blush_1 = new lib.blush_1_mc();
	this.blush_1.setTransform(-66,-132);

	this.lips_6 = new lib.lips_6_mc();
	this.lips_6.setTransform(80,80.5);

	this.lips_5 = new lib.lips_5_mc();
	this.lips_5.setTransform(0,80);

	this.lips_4 = new lib.lips_4_mc();
	this.lips_4.setTransform(-80,80.5);

	this.lips_3 = new lib.lips_3_mc();
	this.lips_3.setTransform(80,-90);

	this.lips_2 = new lib.lips_2_mc();
	this.lips_2.setTransform(0,-90);

	this.lips_1 = new lib.lips_1_mc();
	this.lips_1.setTransform(-80,-90);

	this.shadows_6 = new lib.shadows_6_mc();
	this.shadows_6.setTransform(66,118);

	this.shadows_5 = new lib.shadows_5_mc();
	this.shadows_5.setTransform(-66,118);

	this.shadows_4 = new lib.shadows_4_mc();
	this.shadows_4.setTransform(66,-7);

	this.shadows_3 = new lib.shadows_3_mc();
	this.shadows_3.setTransform(-66,-7);

	this.shadows_2 = new lib.shadows_2_mc();
	this.shadows_2.setTransform(66,-132);

	this.shadows_1 = new lib.shadows_1_mc();
	this.shadows_1.setTransform(-66,-132);

	this.eyebrows_6 = new lib.eyebrows_6_mc();
	this.eyebrows_6.setTransform(80,80);

	this.eyebrows_5 = new lib.eyebrows_5_mc();
	this.eyebrows_5.setTransform(0,80);

	this.eyebrows_4 = new lib.eyebrows_4_mc();
	this.eyebrows_4.setTransform(-80,80);

	this.eyebrows_3 = new lib.eyebrows_3_mc();
	this.eyebrows_3.setTransform(80,-90);

	this.eyebrows_2 = new lib.eyebrows_2_mc();
	this.eyebrows_2.setTransform(0,-90);

	this.eyebrows_1 = new lib.eyebrows_1_mc();
	this.eyebrows_1.setTransform(-80,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-197,301,380);
p.frameBounds = [rect, new cjs.Rectangle(-120,-175,290,340.5), new cjs.Rectangle(-131,-197,301,380), new cjs.Rectangle(-120,-175,290,340)];


(lib.closet_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.hair_1 = new lib.hair_1_mc();
	this.hair_1.setTransform(115,-240);

	this.timeline.addTween(cjs.Tween.get(this.hair_1).wait(4));

	// options
	this.hair_3 = new lib.hairstyle_3_mc();
	this.hair_3.setTransform(0,125);

	this.hair_2 = new lib.hairstyle_2_mc();
	this.hair_2.setTransform(0,-125);

	this.hair_5 = new lib.hairstyle_5_mc();
	this.hair_5.setTransform(0,125);

	this.hair_4 = new lib.hairstyle_4_mc();
	this.hair_4.setTransform(0,-125);

	this.hair_7 = new lib.hairstyle_7_mc();
	this.hair_7.setTransform(0,125);

	this.hair_6 = new lib.hairstyle_6_mc();
	this.hair_6.setTransform(0,-125);

	this.hair_9 = new lib.hairstyle_9_mc();
	this.hair_9.setTransform(0,125);

	this.hair_8 = new lib.hairstyle_8_mc();
	this.hair_8.setTransform(0,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5}]},1).to({state:[{t:this.hair_6},{t:this.hair_7}]},1).to({state:[{t:this.hair_8},{t:this.hair_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-263,268,518);
p.frameBounds = [rect, rect, rect, rect];


(lib.closet_dress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_1 = new lib.dress_1_mc();
	this.dress_1.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.dress_1).wait(14));

	// options
	this.dress_2 = new lib.dress_2_mc();

	this.dress_3 = new lib.dress_3_mc();

	this.dress_4 = new lib.dress_4_mc();

	this.dress_5 = new lib.dress_5_mc();

	this.dress_6 = new lib.dress_6_mc();

	this.dress_7 = new lib.dress_7_mc();

	this.dress_8 = new lib.dress_8_mc();

	this.dress_9 = new lib.dress_9_mc();

	this.dress_10 = new lib.dress_10_mc();

	this.dress_11 = new lib.dress_11_mc();

	this.dress_12 = new lib.dress_12_mc();

	this.dress_13 = new lib.dress_13_mc();

	this.dress_15 = new lib.dress_15_mc();

	this.dress_14 = new lib.dress_14_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2}]}).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_10}]},1).to({state:[{t:this.dress_11}]},1).to({state:[{t:this.dress_12}]},1).to({state:[{t:this.dress_13}]},1).to({state:[{t:this.dress_15}]},1).to({state:[{t:this.dress_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143,-183,283,363);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_accessory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-150,-100);

	this.necklace_0 = new lib.necklace_0_mc();
	this.necklace_0.setTransform(-150,-100);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-150,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_0}]}).to({state:[{t:this.necklace_0}]},2).to({state:[{t:this.accessory_0}]},2).wait(5));

	// options
	this.earrings_5 = new lib.earrings_5_mc();
	this.earrings_5.setTransform(-66,75);

	this.earrings_4 = new lib.earrings_4_mc();
	this.earrings_4.setTransform(66,75);

	this.earrings_2 = new lib.earrings_2_mc();
	this.earrings_2.setTransform(66,-95);

	this.earrings_1 = new lib.earrings_1_mc();
	this.earrings_1.setTransform(-66,-95);

	this.earrings_7 = new lib.earrings_7_mc();
	this.earrings_7.setTransform(66,-95);

	this.earrings_6 = new lib.earrings_6_mc();
	this.earrings_6.setTransform(-66,-95);

	this.earrings_3 = new lib.earrings_3_mc();
	this.earrings_3.setTransform(0,75);

	this.necklace_4 = new lib.necklace_4_mc();
	this.necklace_4.setTransform(66,75);

	this.necklace_3 = new lib.necklace_3_mc();
	this.necklace_3.setTransform(-66,75);

	this.necklace_2 = new lib.necklace_2_mc();
	this.necklace_2.setTransform(66,-95);

	this.necklace_1 = new lib.necklace_1_mc();
	this.necklace_1.setTransform(-66,-95);

	this.necklace_7 = new lib.necklace_7_mc();
	this.necklace_7.setTransform(66,-95);

	this.necklace_6 = new lib.necklace_6_mc();
	this.necklace_6.setTransform(-66,-95);

	this.necklace_5 = new lib.necklace_5_mc();
	this.necklace_5.setTransform(0,75);

	this.accessory_2 = new lib.accessory_2_mc();
	this.accessory_2.setTransform(0,35);

	this.accessory_1 = new lib.accessory_1_mc();
	this.accessory_1.setTransform(0,-120);

	this.accessory_4 = new lib.accessory_4_mc();
	this.accessory_4.setTransform(0,90);

	this.accessory_3 = new lib.accessory_3_mc();
	this.accessory_3.setTransform(0,-85);

	this.accessory_8 = new lib.accessory_8_mc();
	this.accessory_8.setTransform(0,60);

	this.accessory_6 = new lib.accessory_6_mc();
	this.accessory_6.setTransform(0,-110);

	this.accessory_5 = new lib.accessory_5_mc();
	this.accessory_5.setTransform(-55,80);

	this.accessory_7 = new lib.accessory_7_mc();
	this.accessory_7.setTransform(50,-90);

	this.accessory_10 = new lib.accessory_10_mc();
	this.accessory_10.setTransform(55,75);

	this.accessory_9 = new lib.accessory_9_mc();
	this.accessory_9.setTransform(-55,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_4},{t:this.earrings_5}]}).to({state:[{t:this.earrings_3},{t:this.earrings_6},{t:this.earrings_7}]},1).to({state:[{t:this.necklace_1},{t:this.necklace_2},{t:this.necklace_3},{t:this.necklace_4}]},1).to({state:[{t:this.necklace_5},{t:this.necklace_6},{t:this.necklace_7}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2}]},1).to({state:[{t:this.accessory_3},{t:this.accessory_4}]},1).to({state:[{t:this.accessory_6},{t:this.accessory_8}]},1).to({state:[{t:this.accessory_7},{t:this.accessory_5}]},1).to({state:[{t:this.accessory_9},{t:this.accessory_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-180,301,340);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-170,-150,290,310), new cjs.Rectangle(-170,-180,290,340), new cjs.Rectangle(-170,-170,280,340), new cjs.Rectangle(-170,-197.5,310,372.5), new cjs.Rectangle(-170,-190,295,360)];


(lib.bodyDressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_accessory_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-180,301,340);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143,-183,283,363);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-263,268,518);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-197,301,380);
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
	this.instance.setTransform(-0.5,0,1,1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-120,45,240);
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

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.199;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,629.5);
p.frameBounds = [rect];


(lib.dressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,500);

	this.next_mc = new lib.next_5_mc();
	this.next_mc.setTransform(45,230);

	this.prev_mc = new lib.prev_5_mc();
	this.prev_mc.setTransform(-45,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_4}]}).wait(1));

	// decor
	this.instance = new lib.decor_wardrobe_4_mc();
	this.instance.setTransform(0,230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.wardrobe_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,800);
p.frameBounds = [rect];


(lib.dressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,500);

	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(130,40);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-130,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_3}]}).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.wardrobe_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-370,350,920);
p.frameBounds = [rect];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,500);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(0,255);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(0,-255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-300,268,850);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,500);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(45,230);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-45,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// decor
	this.instance = new lib.decor_wardrobe_1_mc();
	this.instance.setTransform(0,230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,800);
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
	this.instance.setTransform(600,800);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,920);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1050.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,510,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(280,510);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.301;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(1,2.9,1,1,0,0,0,201,2.9);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1595.3);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(450,540);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(350,540);

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
	this.instance.alpha = 0.398;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();
	this.photoContainer_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1780);
p.frameBounds = [rect];


(lib.quest_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":189});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(710,510,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(190));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_3_mc();
	this.dressupPanel_mc.setTransform(-600,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({x:310},19).to({x:220},5).wait(35).to({x:-600},15).wait(116));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(590,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(74).to({x:400},15).wait(101));

	// decor
	this.instance = new lib.decor_locations_3_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({alpha:1},15).wait(101));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({alpha:1},15).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-790,40,1580,800);
p.frameBounds = [rect, new cjs.Rectangle(-742.1,40,1532.1,800), new cjs.Rectangle(-694.2,40,1484.2,800), new cjs.Rectangle(-646.3,40,1436.3,800), new cjs.Rectangle(-598.4,40,1413.7,800), new cjs.Rectangle(-550.5,40,1340.6,800), new cjs.Rectangle(-502.6,40,1292.7,800), new cjs.Rectangle(-454.7,40,1244.8,800), new cjs.Rectangle(-406.8,40,1222.1,800), new cjs.Rectangle(-358.9,40,1149,800), new cjs.Rectangle(-311,40,1101.1,800), new cjs.Rectangle(-263.1,40,1053.2,800), new cjs.Rectangle(-215.2,40,1030.5,800), new cjs.Rectangle(-167.4,40,957.4,800), new cjs.Rectangle(-119.4,40,909.5,800), new cjs.Rectangle(-71.6,40,861.6,800), new cjs.Rectangle(-23.7,40,839,800), new cjs.Rectangle(24.2,40,765.8,800), new cjs.Rectangle(72.1,40,717.9,800), new cjs.Rectangle(120,40,670,800), new cjs.Rectangle(102,40,713.3,800), new cjs.Rectangle(84,40,706,800), new cjs.Rectangle(66,40,724,800), new cjs.Rectangle(48,40,742,800), new cjs.Rectangle(30,40,785.3,800), rect=new cjs.Rectangle(30,40,760,800), rect, rect, new cjs.Rectangle(30,40,785.3,800), rect=new cjs.Rectangle(30,40,760,800), rect, rect, new cjs.Rectangle(30,40,785.3,800), rect=new cjs.Rectangle(30,40,760,800), rect, rect, new cjs.Rectangle(30,40,785.3,800), rect=new cjs.Rectangle(30,40,760,800), rect, rect, rect, rect, new cjs.Rectangle(30,40,785.3,800), rect=new cjs.Rectangle(30,40,760,800), rect, rect, new cjs.Rectangle(30,40,785.3,800), rect=new cjs.Rectangle(30,40,760,800), rect, rect, new cjs.Rectangle(30,40,785.3,800), rect=new cjs.Rectangle(30,40,760,800), rect, rect, new cjs.Rectangle(30,40,785.3,800), rect=new cjs.Rectangle(30,40,760,800), rect, rect, new cjs.Rectangle(30,40,785.3,800), new cjs.Rectangle(30,40,760,800), new cjs.Rectangle(-24.6,40,814.7,800), new cjs.Rectangle(-79.3,40,869.4,800), new cjs.Rectangle(-134,40,949.3,800), new cjs.Rectangle(-188.6,40,978.7,800), new cjs.Rectangle(-243.3,40,1033.4,800), new cjs.Rectangle(-298,40,1088,800), new cjs.Rectangle(-352.6,40,1167.9,800), new cjs.Rectangle(-407.3,40,1197.4,800), new cjs.Rectangle(-462,40,1252,800), new cjs.Rectangle(-516.6,40,1306.7,800), new cjs.Rectangle(-571.3,40,1386.6,800), new cjs.Rectangle(-626,40,1416,800), new cjs.Rectangle(-680.6,40,1470.7,800), new cjs.Rectangle(-735.3,40,1525.4,800), rect=new cjs.Rectangle(-790,-10,2000,850), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":139});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560,520,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(140));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_3_mc();
	this.dressupPanel_mc.setTransform(560,270);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1400,y:280},0).wait(43).to({x:510,y:270},16).to({x:560},4).wait(35).to({x:1400,y:280},15).wait(26));

	// hero
	this.hero_1 = new lib.hero_2_mc();
	this.hero_1.setTransform(250,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-700},0).wait(23).to({x:300},16).to({x:250},4).wait(70).to({x:590},15).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(45.4,-100,689.7,920);
p.frameBounds = [rect, rect=new cjs.Rectangle(-904.6,-90,2479.7,920), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-842.1,-90,2417.2,920), new cjs.Rectangle(-779.6,-90,2354.7,920), new cjs.Rectangle(-717.1,-90,2292.2,920), new cjs.Rectangle(-654.6,-90,2229.7,920), new cjs.Rectangle(-592.1,-90,2167.2,920), new cjs.Rectangle(-529.6,-90,2104.7,920), new cjs.Rectangle(-467.1,-90,2042.2,920), new cjs.Rectangle(-404.6,-90,1979.7,920), new cjs.Rectangle(-342.1,-90,1917.2,920), new cjs.Rectangle(-279.6,-90,1854.7,920), new cjs.Rectangle(-217.1,-90,1792.2,920), new cjs.Rectangle(-154.6,-90,1729.7,920), new cjs.Rectangle(-92.1,-90,1667.2,920), new cjs.Rectangle(-29.6,-90,1604.7,920), new cjs.Rectangle(32.9,-90,1542.2,920), new cjs.Rectangle(95.4,-90,1479.7,920), new cjs.Rectangle(82.9,-90,1492.2,920), new cjs.Rectangle(70.4,-90,1504.7,920), new cjs.Rectangle(57.9,-90,1517.2,920), new cjs.Rectangle(45.4,-90,1529.7,920), new cjs.Rectangle(45.4,-90.6,1474.1,920), new cjs.Rectangle(45.4,-91.2,1418.4,920), new cjs.Rectangle(45.4,-91.8,1362.8,920), new cjs.Rectangle(45.4,-92.5,1307.2,920), new cjs.Rectangle(45.4,-93.1,1251.5,920), new cjs.Rectangle(45.4,-93.7,1195.9,920), new cjs.Rectangle(45.4,-94.3,1140.3,920), new cjs.Rectangle(45.4,-95,1084.7,920), new cjs.Rectangle(45.4,-95.6,1029,920), new cjs.Rectangle(45.4,-96.2,973.4,920), new cjs.Rectangle(45.4,-96.8,917.8,920), new cjs.Rectangle(45.4,-97.5,862.2,920), new cjs.Rectangle(45.4,-98.1,806.6,920), new cjs.Rectangle(45.4,-98.7,750.9,920), new cjs.Rectangle(45.4,-99.3,695.3,920), new cjs.Rectangle(45.4,-100,639.7,920), new cjs.Rectangle(45.4,-100,652.2,920), new cjs.Rectangle(45.4,-100,664.7,920), new cjs.Rectangle(45.4,-100,677.2,920), rect=new cjs.Rectangle(45.4,-100,689.7,920), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(45.4,-99.3,745.7,920), new cjs.Rectangle(45.4,-98.6,801.7,920), new cjs.Rectangle(45.4,-98,857.7,920), new cjs.Rectangle(45.4,-97.3,913.7,920), new cjs.Rectangle(45.4,-96.6,969.7,920), new cjs.Rectangle(45.4,-96,1025.7,920), new cjs.Rectangle(45.4,-95.3,1081.7,920), new cjs.Rectangle(45.4,-94.6,1137.7,920), new cjs.Rectangle(45.4,-94,1193.7,920), new cjs.Rectangle(45.4,-93.3,1249.7,920), new cjs.Rectangle(45.4,-92.6,1305.7,920), new cjs.Rectangle(45.4,-92,1361.7,920), new cjs.Rectangle(45.4,-91.3,1417.7,920), new cjs.Rectangle(45.4,-90.6,1473.7,920), new cjs.Rectangle(45.4,-90,1529.7,920), new cjs.Rectangle(68,-90,1507,920), new cjs.Rectangle(90.7,-90,1484.3,920), new cjs.Rectangle(113.4,-90,1461.7,920), new cjs.Rectangle(136,-90,1439,920), new cjs.Rectangle(158.7,-90,1416.3,920), new cjs.Rectangle(181.4,-90,1393.7,920), new cjs.Rectangle(204,-90,1371,920), new cjs.Rectangle(226.7,-90,1348.3,920), new cjs.Rectangle(249.4,-90,1325.7,920), new cjs.Rectangle(272,-90,1303,920), new cjs.Rectangle(294.7,-90,1280.3,920), new cjs.Rectangle(317.4,-90,1257.7,920), new cjs.Rectangle(340,-90,1235,920), new cjs.Rectangle(362.7,-90,1212.3,920), rect=new cjs.Rectangle(385.4,-90,1189.7,920), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":229});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(710,510,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(230));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(200,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-600},0).wait(48).to({x:290},20).to({x:200},5).wait(35).to({x:-600},15).wait(106));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(540,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1500},0).wait(23).to({x:450},20).to({x:540},5).wait(75).to({x:405},15).wait(91));

	// decor
	this.instance = new lib.decor_locations_2_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({alpha:0.801},15).wait(91));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).to({alpha:1},15).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,0,720,850);
p.frameBounds = [rect, rect=new cjs.Rectangle(-730,0,2381.4,850), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-730,0,2328.9,850), new cjs.Rectangle(-730,0,2276.4,850), new cjs.Rectangle(-730,0,2223.9,850), new cjs.Rectangle(-730,0,2171.4,850), new cjs.Rectangle(-730,0,2118.9,850), new cjs.Rectangle(-730,0,2066.4,850), new cjs.Rectangle(-730,0,2013.9,850), new cjs.Rectangle(-730,0,1961.4,850), new cjs.Rectangle(-730,0,1908.9,850), new cjs.Rectangle(-730,0,1856.4,850), new cjs.Rectangle(-730,0,1803.9,850), new cjs.Rectangle(-730,0,1751.4,850), new cjs.Rectangle(-730,0,1698.9,850), new cjs.Rectangle(-730,0,1646.4,850), new cjs.Rectangle(-730,0,1593.9,850), new cjs.Rectangle(-730,0,1545.3,850), rect=new cjs.Rectangle(-730,0,1520,850), rect, rect, new cjs.Rectangle(-730,0,1545.3,850), rect=new cjs.Rectangle(-730,0,1520,850), rect, rect, new cjs.Rectangle(-730,0,1545.3,850), new cjs.Rectangle(-730,0,1520,850), new cjs.Rectangle(-685.5,0,1475.5,850), new cjs.Rectangle(-641,0,1431,850), new cjs.Rectangle(-596.5,0,1411.8,850), new cjs.Rectangle(-552,0,1342,850), new cjs.Rectangle(-507.5,0,1297.5,850), new cjs.Rectangle(-463,0,1253,850), new cjs.Rectangle(-418.5,0,1233.8,850), new cjs.Rectangle(-374,0,1164,850), new cjs.Rectangle(-329.5,0,1119.5,850), new cjs.Rectangle(-285,0,1075,850), new cjs.Rectangle(-240.5,0,1055.8,850), new cjs.Rectangle(-196,0,986,850), new cjs.Rectangle(-151.5,0,941.5,850), new cjs.Rectangle(-107,0,897,850), new cjs.Rectangle(-62.5,0,877.8,850), new cjs.Rectangle(-18,0,808,850), new cjs.Rectangle(26.5,0,763.5,850), new cjs.Rectangle(71,0,719,850), new cjs.Rectangle(115.5,0,699.8,850), new cjs.Rectangle(160,0,630,850), new cjs.Rectangle(142,0,648,850), new cjs.Rectangle(124,0,666,850), new cjs.Rectangle(106,0,709.3,850), new cjs.Rectangle(88,0,702,850), rect=new cjs.Rectangle(70,0,720,850), rect, new cjs.Rectangle(70,0,745.3,850), rect=new cjs.Rectangle(70,0,720,850), rect, rect, new cjs.Rectangle(70,0,745.3,850), rect=new cjs.Rectangle(70,0,720,850), rect, rect, new cjs.Rectangle(70,0,745.3,850), rect=new cjs.Rectangle(70,0,720,850), rect, rect, new cjs.Rectangle(70,0,745.3,850), rect=new cjs.Rectangle(70,0,720,850), rect, rect, new cjs.Rectangle(70,0,745.3,850), rect=new cjs.Rectangle(70,0,720,850), rect, rect, new cjs.Rectangle(70,0,745.3,850), rect=new cjs.Rectangle(70,0,720,850), rect, rect, new cjs.Rectangle(70,0,745.3,850), rect=new cjs.Rectangle(70,0,720,850), rect, rect, new cjs.Rectangle(70,0,745.3,850), rect=new cjs.Rectangle(70,0,720,850), rect, rect, new cjs.Rectangle(70,0,745.3,850), new cjs.Rectangle(70,0,720,850), new cjs.Rectangle(16.7,0,773.4,850), new cjs.Rectangle(-36.6,0,826.7,850), new cjs.Rectangle(-90,0,905.3,850), new cjs.Rectangle(-143.3,0,933.4,850), new cjs.Rectangle(-196.6,0,986.7,850), new cjs.Rectangle(-250,0,1040,850), new cjs.Rectangle(-303.3,0,1118.6,850), new cjs.Rectangle(-356.6,0,1146.7,850), new cjs.Rectangle(-410,0,1200,850), new cjs.Rectangle(-463.3,0,1253.4,850), new cjs.Rectangle(-516.6,0,1331.9,850), new cjs.Rectangle(-570,0,1360,850), new cjs.Rectangle(-623.3,0,1413.4,850), new cjs.Rectangle(-676.6,0,1466.7,850), rect=new cjs.Rectangle(-730,-10,1940,860), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":229});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(90,510,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(230));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(560,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1400},0).wait(48).to({x:470},20).to({x:560},5).wait(35).to({x:1400},15).wait(106));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(210,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-700},0).wait(23).to({x:300},20).to({x:210},5).wait(75).to({x:405},15).wait(91));

	// decor
	this.instance = new lib.decor_locations_1_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({alpha:0.801},15).wait(91));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).to({alpha:1},15).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(5.4,40,744.7,800);
p.frameBounds = [rect, rect=new cjs.Rectangle(-904.6,40,2494.7,800), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-854.6,40,2444.7,800), new cjs.Rectangle(-804.6,40,2394.7,800), new cjs.Rectangle(-754.6,40,2344.7,800), new cjs.Rectangle(-704.6,40,2294.7,800), new cjs.Rectangle(-654.6,40,2244.7,800), new cjs.Rectangle(-604.6,40,2194.7,800), new cjs.Rectangle(-554.6,40,2144.7,800), new cjs.Rectangle(-504.6,40,2094.7,800), new cjs.Rectangle(-454.6,40,2044.7,800), new cjs.Rectangle(-404.6,40,1994.7,800), new cjs.Rectangle(-354.6,40,1944.7,800), new cjs.Rectangle(-304.6,40,1894.7,800), new cjs.Rectangle(-254.6,40,1844.7,800), new cjs.Rectangle(-204.6,40,1794.7,800), new cjs.Rectangle(-154.6,40,1744.7,800), new cjs.Rectangle(-104.6,40,1694.7,800), new cjs.Rectangle(-54.6,40,1644.7,800), new cjs.Rectangle(-4.6,40,1594.7,800), new cjs.Rectangle(10,40,1580,800), new cjs.Rectangle(-15.2,40,1605.3,800), rect=new cjs.Rectangle(10,40,1580,800), rect, rect, new cjs.Rectangle(-15.2,40,1605.3,800), new cjs.Rectangle(5.4,40,1584.7,800), new cjs.Rectangle(5.4,40,1538.2,800), new cjs.Rectangle(5.4,40,1491.7,800), new cjs.Rectangle(-15.2,40,1465.8,800), new cjs.Rectangle(5.4,40,1398.7,800), new cjs.Rectangle(5.4,40,1352.2,800), new cjs.Rectangle(5.4,40,1305.7,800), new cjs.Rectangle(-15.2,40,1279.8,800), new cjs.Rectangle(5.4,40,1212.7,800), new cjs.Rectangle(5.4,40,1166.2,800), new cjs.Rectangle(5.4,40,1119.7,800), new cjs.Rectangle(-15.2,40,1093.8,800), new cjs.Rectangle(5.4,40,1026.7,800), new cjs.Rectangle(5.4,40,980.2,800), new cjs.Rectangle(5.4,40,933.7,800), new cjs.Rectangle(-15.2,40,907.8,800), new cjs.Rectangle(5.4,40,840.7,800), new cjs.Rectangle(5.4,40,794.2,800), new cjs.Rectangle(5.4,40,747.7,800), new cjs.Rectangle(-15.2,40,721.8,800), new cjs.Rectangle(5.4,40,654.7,800), new cjs.Rectangle(5.4,40,672.7,800), new cjs.Rectangle(5.4,40,690.7,800), new cjs.Rectangle(-15.2,40,729.3,800), new cjs.Rectangle(5.4,40,726.7,800), rect=new cjs.Rectangle(5.4,40,744.7,800), rect, new cjs.Rectangle(-15.2,40,765.3,800), rect=new cjs.Rectangle(5.4,40,744.7,800), rect, rect, new cjs.Rectangle(-15.2,40,765.3,800), rect=new cjs.Rectangle(5.4,40,744.7,800), rect, rect, new cjs.Rectangle(-15.2,40,765.3,800), rect=new cjs.Rectangle(5.4,40,744.7,800), rect, rect, new cjs.Rectangle(-15.2,40,765.3,800), rect=new cjs.Rectangle(5.4,40,744.7,800), rect, rect, new cjs.Rectangle(-15.2,40,765.3,800), rect=new cjs.Rectangle(5.4,40,744.7,800), rect, rect, new cjs.Rectangle(-15.2,40,765.3,800), rect=new cjs.Rectangle(5.4,40,744.7,800), rect, rect, new cjs.Rectangle(-15.2,40,765.3,800), rect=new cjs.Rectangle(5.4,40,744.7,800), rect, rect, new cjs.Rectangle(-15.2,40,765.3,800), rect=new cjs.Rectangle(5.4,40,744.7,800), rect, rect, new cjs.Rectangle(-15.2,40,765.3,800), new cjs.Rectangle(5.4,40,744.7,800), new cjs.Rectangle(5.4,40,800.7,800), new cjs.Rectangle(5.4,40,856.7,800), new cjs.Rectangle(-15.2,40,933.3,800), new cjs.Rectangle(5.4,40,968.7,800), new cjs.Rectangle(5.4,40,1024.7,800), new cjs.Rectangle(5.4,40,1080.7,800), new cjs.Rectangle(-15.2,40,1157.3,800), new cjs.Rectangle(5.4,40,1192.7,800), new cjs.Rectangle(5.4,40,1248.7,800), new cjs.Rectangle(5.4,40,1304.7,800), new cjs.Rectangle(-15.2,40,1381.3,800), new cjs.Rectangle(5.4,40,1416.7,800), new cjs.Rectangle(5.4,40,1472.7,800), new cjs.Rectangle(5.4,40,1528.7,800), rect=new cjs.Rectangle(-410,-10,2000,850), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.frame_2_mc = new lib.quest_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(45.4,-349.4,689.7,1169.4);
p.frameBounds = [rect, new cjs.Rectangle(-790,-349.4,1580,1189.4)];


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
p.nominalBounds = rect = new cjs.Rectangle(70,-349.4,720,1199.4);
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
p.nominalBounds = rect = new cjs.Rectangle(5.4,-349.4,744.7,1189.4);
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
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
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
	this.instance = new lib.background_4_img();
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
	this.sound_mc.setTransform(740,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();
	this.instance_4.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_5 = new lib.LocationScreen_2();
	this.instance_5.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.RedirectScreen();

	this.instance_8 = new lib.ResultScreen();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.InstructionScreen();

	this.instance_10 = new lib.forward_mc();
	this.instance_10.setTransform(657,266);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(467,266);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_11 = new lib.Glitter_2();
	this.instance_11.setTransform(500,50);

	this.instance_12 = new lib.FlashAnimation();
	this.instance_12.setTransform(150,280);

	this.instance_13 = new lib.TrackMove_2();
	this.instance_13.setTransform(350,50);

	this.instance_14 = new lib.TrackMove();
	this.instance_14.setTransform(270,50);

	this.instance_15 = new lib.Cursor();
	this.instance_15.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_16 = new lib.OrientationLockScreen();

	this.instance_17 = new lib.CurtainScreen();

	this.instance_18 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.next_btn},{t:this.gravity_explosion_comp},{t:this.instance_10}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).to({state:[{t:this.instance_18}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,-280.8,1600,1595.3), new cjs.Rectangle(-400,-280.8,1600,1261.9), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,752,430), new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,-610,1600,1820), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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