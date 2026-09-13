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
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"},
		{src:"library/images/storage_atlas_18.png", id:"storage_atlas_18"},
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"},
		{src:"library/images/storage_atlas_20.png", id:"storage_atlas_20"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_7", frames: [[0,0,1600,600],[0,602,1600,200]]},
		{name:"storage_atlas_8", frames: [[0,602,440,440],[1326,642,380,490],[824,472,500,420],[482,0,480,470],[824,894,500,420],[964,0,480,470],[0,1114,640,280],[0,0,480,600],[1446,0,340,640],[482,472,340,640]]},
		{name:"storage_atlas_9", frames: [[422,282,420,420],[0,282,420,420],[422,704,420,420],[0,704,420,420],[844,0,410,410],[1256,0,410,410],[844,412,410,410],[1256,824,410,410],[1256,412,410,410],[844,824,410,410],[0,0,640,280]]},
		{name:"storage_atlas_10", frames: [[1206,402,400,400],[402,804,400,400],[804,804,400,400],[1206,804,400,400],[804,402,400,400],[804,0,400,400],[0,824,400,400],[0,422,400,400],[1206,0,400,400],[402,0,400,400],[402,402,400,400],[0,0,400,420]]},
		{name:"storage_atlas_11", frames: [[0,0,400,400],[804,1006,500,300],[1206,402,500,300],[1206,704,500,300],[0,402,400,400],[0,804,400,400],[402,402,400,400],[804,0,400,400],[402,804,400,400],[402,0,400,400],[1206,0,400,400],[804,402,400,400]]},
		{name:"storage_atlas_12", frames: [[764,764,380,380],[382,764,380,380],[1146,764,380,380],[764,382,380,380],[1146,382,380,380],[0,0,500,300],[382,382,380,380],[884,0,380,380],[502,0,380,380],[1266,0,380,380],[0,684,380,380],[0,302,380,380]]},
		{name:"storage_atlas_13", frames: [[0,0,380,380],[764,764,370,370],[1136,764,370,370],[1146,382,370,370],[0,764,380,380],[0,382,380,380],[382,764,380,380],[382,0,380,380],[382,382,380,380],[764,0,380,380],[1146,0,380,380],[764,382,380,380]]},
		{name:"storage_atlas_14", frames: [[912,584,300,300],[1429,390,300,300],[502,0,500,240],[0,1116,500,240],[1004,0,340,320],[836,322,380,260],[1457,994,300,300],[1429,692,300,300],[1155,994,300,300],[1346,0,270,388],[1218,390,209,431],[372,624,257,402],[836,965,317,296],[502,242,274,380],[502,1028,332,307],[631,624,279,339],[0,0,370,370],[0,744,370,370],[0,372,370,370]]},
		{name:"storage_atlas_15", frames: [[0,0,300,300],[729,617,280,280],[631,1112,280,280],[975,288,280,280],[1257,288,280,280],[1338,570,280,270],[0,302,225,398],[1534,842,209,331],[729,288,244,327],[913,1077,223,310],[317,1112,312,254],[1011,570,325,236],[1249,0,289,286],[0,702,217,388],[1540,0,232,347],[302,0,309,284],[0,1092,315,257],[913,0,334,251],[613,0,298,286],[1011,808,271,267],[1284,842,248,285],[227,626,500,160],[227,464,500,160],[317,950,500,160],[227,302,500,160],[219,788,500,160]]},
		{name:"storage_atlas_16", frames: [[1445,464,210,210],[1113,1166,220,220],[1219,727,220,220],[1277,242,220,220],[1409,0,220,220],[1372,949,200,240],[1007,726,210,240],[682,1046,240,240],[925,0,240,240],[515,562,240,240],[523,804,240,240],[551,284,240,240],[1035,242,240,240],[765,768,240,240],[999,484,240,240],[757,526,240,240],[1167,0,240,240],[683,0,240,240],[793,242,240,240],[222,0,219,313],[263,1071,211,299],[476,1062,204,299],[1574,1143,179,232],[0,573,279,244],[1441,727,229,196],[272,315,277,245],[1113,968,257,196],[443,0,238,282],[924,1010,187,270],[0,0,220,314],[267,819,254,241],[1241,484,202,241],[1499,222,257,169],[1335,1191,215,188],[1574,925,199,216],[281,562,232,254],[0,1071,261,242],[0,316,270,255],[0,819,265,250]]},
		{name:"storage_atlas_17", frames: [[1341,0,190,190],[1533,0,190,190],[0,868,190,190],[404,360,200,180],[1260,602,175,204],[1437,1014,175,204],[1614,1014,175,204],[1260,808,175,204],[1614,602,175,204],[1437,602,175,204],[1437,808,175,204],[1260,1014,175,204],[1614,808,175,204],[0,388,184,206],[199,0,268,145],[939,0,202,184],[0,0,197,200],[0,202,210,184],[370,1157,176,203],[784,360,176,203],[606,360,176,203],[370,747,176,203],[192,1006,176,203],[1318,192,176,203],[962,186,176,203],[370,952,176,203],[320,542,176,203],[1140,190,176,203],[142,596,176,203],[192,801,176,203],[1496,192,176,203],[548,565,176,203],[904,801,176,203],[1496,397,176,203],[904,1006,176,203],[1140,395,176,203],[1082,1010,176,203],[904,596,176,203],[1318,397,176,203],[726,975,176,203],[1082,805,176,203],[548,1180,176,203],[726,1180,176,203],[1082,600,176,203],[548,770,176,203],[548,975,176,203],[962,391,176,203],[726,565,176,203],[726,770,176,203],[1143,0,196,188],[697,0,240,155],[469,0,226,166],[0,1060,190,190],[212,147,190,190],[0,596,140,270],[404,168,190,190],[212,339,190,190],[596,168,190,190]]},
		{name:"storage_atlas_18", frames: [[1034,788,180,180],[875,606,180,180],[1390,933,240,120],[1632,839,160,160],[1612,470,160,160],[1034,970,180,180],[0,206,175,204],[0,412,175,204],[0,0,175,204],[1388,375,200,154],[1532,1055,220,129],[1216,788,221,143],[1307,1106,223,131],[177,0,175,204],[0,618,175,204],[0,824,175,204],[177,206,175,204],[0,1030,175,204],[177,412,175,204],[177,618,175,204],[177,824,175,204],[177,1030,175,204],[354,0,175,204],[354,206,175,204],[354,412,175,204],[354,1030,175,204],[531,618,175,204],[354,618,175,204],[354,824,175,204],[531,206,175,204],[531,0,175,204],[531,412,175,204],[1239,586,183,169],[854,808,178,185],[1439,692,156,178],[1597,692,182,145],[901,1173,240,142],[531,824,125,282],[1375,0,207,153],[1559,155,200,152],[719,1004,205,167],[1216,933,172,171],[1584,0,208,134],[0,1236,227,157],[1590,309,185,159],[229,1236,220,160],[1143,1152,162,200],[1042,202,162,200],[1047,0,162,200],[1042,404,162,200],[1206,202,162,200],[1211,0,162,200],[708,202,165,200],[880,0,165,200],[875,202,165,200],[708,606,165,200],[708,404,165,200],[875,404,165,200],[719,1173,180,190],[1307,1301,340,80],[531,1108,186,188],[658,824,194,178],[1370,202,187,171],[1424,531,186,159],[1057,606,180,180],[1206,404,180,180],[708,0,170,200],[1307,1239,480,60]]},
		{name:"storage_atlas_19", frames: [[149,1276,120,120],[899,376,120,120],[1021,357,120,120],[1111,1249,100,100],[802,1008,120,120],[1442,0,250,90],[162,324,160,160],[0,162,160,160],[162,0,160,160],[0,0,160,160],[0,324,160,160],[162,162,160,160],[324,0,160,160],[0,486,160,160],[324,162,160,160],[486,0,160,160],[934,498,120,120],[1143,357,120,120],[1056,479,120,120],[1265,332,120,120],[1659,1092,92,103],[149,1121,139,153],[1006,848,118,109],[149,800,123,175],[1422,746,143,73],[1567,746,140,74],[271,1286,142,93],[1417,1306,148,60],[874,1347,143,53],[1371,1176,143,63],[1417,1241,142,63],[630,601,143,74],[1128,723,155,88],[246,690,193,108],[486,162,158,153],[1009,723,117,123],[648,0,185,134],[766,370,131,126],[506,317,126,135],[0,648,95,260],[634,370,130,127],[433,1014,113,100],[1006,959,100,103],[1371,821,167,58],[1360,941,167,58],[415,1338,167,58],[1540,822,167,58],[1360,881,167,58],[705,1258,167,58],[705,1318,167,58],[1360,1001,167,58],[1108,999,167,58],[1259,0,181,128],[162,486,168,144],[1024,0,233,101],[1709,746,80,124],[1300,454,120,120],[1604,684,180,60],[1128,813,180,60],[1126,875,180,60],[1126,937,180,60],[1422,684,180,60],[422,1276,180,60],[332,456,280,80],[1487,174,260,60],[1442,92,280,80],[639,1156,150,100],[802,906,150,100],[630,499,150,100],[802,804,150,100],[1639,236,150,100],[1639,338,150,100],[1487,338,150,100],[782,600,150,100],[1487,236,150,100],[857,702,150,100],[705,702,150,100],[1000,255,150,100],[782,498,150,100],[1178,479,120,120],[1422,440,120,120],[324,324,180,130],[667,852,133,150],[422,1124,133,150],[667,1004,133,150],[1024,103,133,150],[783,136,133,150],[648,136,133,150],[1046,1226,63,160],[1046,1064,63,160],[565,852,100,200],[1306,1087,63,160],[1111,1087,63,160],[1241,1087,63,160],[1176,1087,63,160],[646,288,220,80],[604,1258,99,100],[149,977,150,142],[1308,875,50,210],[954,804,50,297],[835,0,187,132],[1694,0,90,90],[924,1103,120,120],[1544,440,120,120],[1658,1197,90,90],[1666,440,120,120],[802,1130,120,120],[1323,130,80,200],[918,134,80,200],[557,1054,80,200],[1405,174,80,200],[1241,130,80,200],[1159,103,80,200],[924,1225,120,120],[274,800,130,160],[0,910,147,150],[301,962,130,160],[0,1062,147,150],[290,1124,130,160],[97,648,147,150],[441,690,130,160],[0,1214,147,150],[573,690,130,160],[481,538,147,150],[433,852,130,160],[332,538,147,150],[1300,698,120,90],[1300,576,120,120],[1422,562,120,120],[1056,601,120,120],[1178,601,120,120],[1544,562,120,120],[1666,562,120,120],[1516,1176,140,60],[1529,966,240,40],[1417,1092,240,40],[1111,1351,240,40],[1529,1008,240,40],[1529,1050,240,40],[1529,882,240,40],[1529,924,240,40],[1417,1134,240,40],[1567,1331,200,40],[1567,1289,200,40],[1213,1249,100,100],[1315,1249,100,100]]},
		{name:"storage_atlas_20", frames: [[255,219,56,56],[255,371,50,50],[434,377,24,24],[255,167,90,50],[0,453,90,50],[316,454,36,36],[432,453,36,36],[470,453,36,36],[394,445,36,36],[434,339,36,36],[308,124,36,36],[472,320,36,36],[430,407,36,36],[468,415,36,36],[463,282,36,36],[468,377,36,36],[392,407,36,36],[356,445,36,36],[192,466,36,36],[154,466,36,36],[354,483,20,20],[376,483,20,20],[0,131,69,97],[141,0,35,53],[356,365,34,61],[475,101,31,51],[387,0,43,60],[173,372,48,52],[347,288,30,75],[183,77,35,61],[316,387,38,65],[183,0,39,75],[0,0,139,54],[360,191,41,54],[477,0,32,49],[102,56,79,85],[255,0,68,74],[93,439,59,62],[173,302,45,68],[379,247,28,74],[325,0,60,60],[173,225,47,75],[255,76,51,89],[432,0,43,57],[316,288,29,97],[255,277,31,92],[313,219,45,67],[347,124,42,65],[173,428,141,36],[403,171,40,40],[391,114,40,55],[93,388,40,43],[433,156,10,11],[71,143,69,94],[0,56,100,73],[325,62,57,60],[487,154,23,38],[478,51,31,31],[384,62,50,50],[93,239,40,147],[421,297,40,40],[409,255,40,40],[436,59,40,40],[392,365,40,40],[433,114,40,40],[445,156,40,40],[409,213,40,40],[451,240,40,40],[451,198,40,40],[379,323,40,40],[31,230,29,212],[224,0,29,212],[142,225,29,212],[0,230,29,212],[62,239,29,212],[224,214,29,212],[142,143,80,80]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.accessory_bg_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory_check_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessory_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_10_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_11_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
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
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_second_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottom_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottom_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bottom_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cosmic_star_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.current_location_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.faceart_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.faceart_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.faceart_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.faceart_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.faceart_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.faceart_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.faceart_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.faceart_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.faceart_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.faceart_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.faceart_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.faceart_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.faceart_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.forward_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.glitter_10_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.glitter_11_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.glitter_12_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.glitter_13_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.glitter_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.glitter_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.glitter_7_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.glitter_8_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.glitter_9_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.grass_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_animal1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hands_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.lens1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lens1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lens1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.lens1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lens1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.lens1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.lens2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.lens2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.lens2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.lens2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.lens2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.lens2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.lips1_hero1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.lips1_hero2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.lips1_hero3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.lips1_hero4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.lips1_hero5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.lips1_hero6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.lips_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.lips_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.lips_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.lips_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.parrot_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.pencil1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.pencil1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.pencil1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.pencil1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.pencil1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.pencil1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.pencil2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.pencil2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.pencil2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.pencil2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.pencil2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.pencil2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.shadows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.shadows_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.shadows_1_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.shadows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.shadows_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.shadows_2_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.shadows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.shadows_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.shadows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.shadows_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.shadows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.shadows_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.shadows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.shadows_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.shelf_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shelf_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.shelf_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.starfish_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.suitcase_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.suitcase_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.suitcase_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.suitcase_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.top_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.top_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.top_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.top_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.top_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.top_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.top_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.top_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.top_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.top_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.top_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.top_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
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


(lib.wardrobe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_img();
	this.instance.setTransform(-170,-320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-320,340,640);
p.frameBounds = [rect];


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-170,-320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-320,340,640);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-240,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-300,480,600);
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


(lib.suitcase_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseChildren = false;
		this.mouseChildren = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.suitcase_2_2_img();
	this.instance.setTransform(-240,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-235,480,470);
p.frameBounds = [rect];


(lib.suitcase_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseChildren = false;
		this.mouseChildren = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.suitcase_2_1_img();
	this.instance.setTransform(-250,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-210,500,420);
p.frameBounds = [rect];


(lib.suitcase_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.suitcase_1_2_img();
	this.instance.setTransform(-240,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-235,480,470);
p.frameBounds = [rect];


(lib.suitcase_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.suitcase_1_1_img();
	this.instance.setTransform(-250,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-210,500,420);
p.frameBounds = [rect];


(lib.starfish_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.starfish_img();
	this.instance.setTransform(-68,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-18,140,60);
p.frameBounds = [rect];


(lib.shelf_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_2_3_img();
	this.instance.setTransform(-200,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-210,400,420);
p.frameBounds = [rect];


(lib.shelf_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_1_img();
	this.instance.setTransform(-240,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-30,480,60);
p.frameBounds = [rect];


(lib.shelf_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_1_3_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-245,380,490);
p.frameBounds = [rect];


(lib.shadows_2_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows_2_check_0_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_1_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows_1_check_0_1_img();
	this.instance.setTransform(-85,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-100,170,200);
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


(lib.parrot_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.parrot_img();
	this.instance.setTransform(-101,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-134,140,270);
p.frameBounds = [rect];


(lib.object_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwAQBQmompAApYQAApYGomoQGpmpJXABQJZgBGoGpQGpGogBJYQABJYmpGpQmoGopZAAQpXAAmpmog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.object_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwAQBQmompAApYQAApYGomoQGpmpJXABQJZgBGoGpQGpGogBJYQABJYmpGpQmoGopZAAQpXAAmpmog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.object_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwAQBQmompAApYQAApYGomoQGpmpJXABQJZgBGoGpQGpGogBJYQABJYmpGpQmoGopZAAQpXAAmpmog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
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


(lib.lips_2_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lips_2_check_0_1_img();
	this.instance.setTransform(-50,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.lips_1_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lips_1_check_0_1_img();
	this.instance.setTransform(-90,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
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


(lib.hero2_top_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-120,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-77.5,240,155);
p.frameBounds = [rect];


(lib.hero2_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-120,-77.5);

	this.instance_1 = new lib.hero2_top2_img();
	this.instance_1.setTransform(-112.5,-50.5);

	this.instance_2 = new lib.hero2_top3_img();
	this.instance_2.setTransform(-102.5,-65);

	this.instance_3 = new lib.hero2_top4_img();
	this.instance_3.setTransform(-111,-66.5);

	this.instance_4 = new lib.hero2_top5_img();
	this.instance_4.setTransform(-112.5,-86.5);

	this.instance_5 = new lib.hero2_top6_img();
	this.instance_5.setTransform(-92.5,-67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-77.5,240,155);
p.frameBounds = [rect, new cjs.Rectangle(-112.5,-50.5,233,101), new cjs.Rectangle(-102.5,-65,208,134), new cjs.Rectangle(-111,-66.5,227,157), new cjs.Rectangle(-112.5,-86.5,226,166), new cjs.Rectangle(-92.5,-67.5,185,159), null];


(lib.hero2_skirt_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_skirt3_img();
	this.instance.setTransform(-86.4,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.4,-105,172,171);
p.frameBounds = [rect];


(lib.hero2_skirt_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bottom
	this.instance = new lib.hero2_skirt1_img();
	this.instance.setTransform(-99.5,-108);

	this.instance_1 = new lib.hero2_skirt2_img();
	this.instance_1.setTransform(-120,-102.5);

	this.instance_2 = new lib.hero2_skirt3_img();
	this.instance_2.setTransform(-86.4,-105);

	this.instance_3 = new lib.hero2_skirt4_img();
	this.instance_3.setTransform(-119.4,-97);

	this.instance_4 = new lib.hero2_skirt5_img();
	this.instance_4.setTransform(-119,-102.5);

	this.instance_5 = new lib.hero2_skirt6_img();
	this.instance_5.setTransform(-100.9,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.5,-108,199,216);
p.frameBounds = [rect, new cjs.Rectangle(-120,-102.5,271,267), new cjs.Rectangle(-86.4,-105,172,171), new cjs.Rectangle(-119.4,-97,232,254), new cjs.Rectangle(-119,-102.5,248,285), new cjs.Rectangle(-100.9,-102,196,188), null];


(lib.hero2_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-88,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-101.5,176,203);
p.frameBounds = [rect];


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-88,-101.5);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-88,-101.5);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-88,-101.5);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-88,-101.5);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-88,-101.5);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-88,-101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-101.5,176,203);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge3_img();
	this.instance.setTransform(-88,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-101.5,176,203);
p.frameBounds = [rect];


(lib.hero2_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-88,-101.5);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-88,-101.5);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-88,-101.5);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-88,-101.5);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-88,-101.5);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-88,-101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-101.5,176,203);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips5_img();
	this.instance.setTransform(-88,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-101.5,176,203);
p.frameBounds = [rect];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-88,-101.5);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-88,-101.5);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-88,-101.5);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-88,-101.5);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-88,-101.5);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-88,-101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-101.5,176,203);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-88,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-101.5,176,203);
p.frameBounds = [rect];


(lib.hero2_hat_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat2_img();
	this.instance.setTransform(-132.4,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.4,-101,257,169);
p.frameBounds = [rect];


(lib.hero2_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-90.5,-64);

	this.instance_1 = new lib.hero2_hat2_img();
	this.instance_1.setTransform(-132.4,-101);

	this.instance_2 = new lib.hero2_hat3_img();
	this.instance_2.setTransform(-101.9,-50.5);

	this.instance_3 = new lib.hero2_hat4_img();
	this.instance_3.setTransform(-85.9,-72);

	this.instance_4 = new lib.hero2_hat5_img();
	this.instance_4.setTransform(-104.5,-91);

	this.instance_5 = new lib.hero2_hat6_img();
	this.instance_5.setTransform(-125.9,-56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-64,181,128);
p.frameBounds = [rect, new cjs.Rectangle(-132.4,-101,257,169), new cjs.Rectangle(-101.9,-50.5,200,152), new cjs.Rectangle(-85.9,-72,168,144), new cjs.Rectangle(-104.5,-91,215,188), new cjs.Rectangle(-125.9,-56.5,205,167), null];


(lib.hero2_hands_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hands_img();
	this.instance.setTransform(-70.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-18,141,36);
p.frameBounds = [rect];


(lib.hero2_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair5_img();
	this.instance.setTransform(-159,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159,-57,334,251);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-150,-128);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-125,-94.5);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-98,-44.5);

	this.instance_3 = new lib.hero2_hair5_img();
	this.instance_3.setTransform(-159,-57);

	this.instance_4 = new lib.hero2_hair6_img();
	this.instance_4.setTransform(-141,-119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-128,279,339);
p.frameBounds = [rect, new cjs.Rectangle(-125,-94.5,254,241), new cjs.Rectangle(-98,-44.5,202,241), null, new cjs.Rectangle(-159,-57,334,251), new cjs.Rectangle(-141,-119,298,286)];


(lib.hero2_glasses_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses3_img();
	this.instance.setTransform(-83.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-29,167,58);
p.frameBounds = [rect];


(lib.hero2_glasses_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_glasses1_img();
	this.instance.setTransform(-83.5,-29);

	this.instance_1 = new lib.hero2_glasses2_img();
	this.instance_1.setTransform(-83.5,-29);

	this.instance_2 = new lib.hero2_glasses3_img();
	this.instance_2.setTransform(-83.5,-29);

	this.instance_3 = new lib.hero2_glasses4_img();
	this.instance_3.setTransform(-83.5,-29);

	this.instance_4 = new lib.hero2_glasses5_img();
	this.instance_4.setTransform(-83.5,-29);

	this.instance_5 = new lib.hero2_glasses6_img();
	this.instance_5.setTransform(-83.5,-29);

	this.instance_6 = new lib.hero2_glasses7_img();
	this.instance_6.setTransform(-83.5,-29);

	this.instance_7 = new lib.hero2_glasses8_img();
	this.instance_7.setTransform(-83.5,-29);

	this.instance_8 = new lib.hero2_glasses9_img();
	this.instance_8.setTransform(-83.5,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-29,167,58);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe5_img();
	this.instance.setTransform(-156,-144);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156,-144,332,307);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-158.5,-148);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-160,-141);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-101,-136);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-156,-139);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-156,-144);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-159,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.5,-148,317,296);
p.frameBounds = [rect, new cjs.Rectangle(-160,-141,309,284), new cjs.Rectangle(-101,-136,207,153), new cjs.Rectangle(-156,-139,274,380), new cjs.Rectangle(-156,-144,332,307), new cjs.Rectangle(-159,-150,315,257)];


(lib.hero2_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-88,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-101.5,176,203);
p.frameBounds = [rect];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-88,-101.5);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-88,-101.5);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-88,-101.5);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-88,-101.5);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-88,-101.5);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-88,-101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-101.5,176,203);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-88,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-101.5,176,203);
p.frameBounds = [rect];


(lib.hero2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-88,-101.5);

	this.instance_1 = new lib.hero2_eyebrows2_img();
	this.instance_1.setTransform(-88,-101.5);

	this.instance_2 = new lib.hero2_eyebrows3_img();
	this.instance_2.setTransform(-88,-101.5);

	this.instance_3 = new lib.hero2_eyebrows4_img();
	this.instance_3.setTransform(-88,-101.5);

	this.instance_4 = new lib.hero2_eyebrows5_img();
	this.instance_4.setTransform(-88,-101.5);

	this.instance_5 = new lib.hero2_eyebrows6_img();
	this.instance_5.setTransform(-88,-101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-101.5,176,203);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_earrings9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring9_img();
	this.instance.setTransform(95.7,-32.7,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring9_img();
	this.instance_1.setTransform(-95.7,-32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.7,-32.7,191.4,65.5);
p.frameBounds = [rect];


(lib.hero2_earrings8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring8_img();
	this.instance.setTransform(97.7,-34,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring8_img();
	this.instance_1.setTransform(-97.7,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.7,-34,195.4,68);
p.frameBounds = [rect];


(lib.hero2_earrings7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring7_2_img();
	this.instance.setTransform(56.5,-44.5);

	this.instance_1 = new lib.hero2_earring7_1_img();
	this.instance_1.setTransform(-87.4,-48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.4,-48.5,175,97);
p.frameBounds = [rect];


(lib.hero2_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring6_img();
	this.instance.setTransform(95.5,-27.7,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring6_img();
	this.instance_1.setTransform(-95.4,-29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.4,-29.2,190.9,58.5);
p.frameBounds = [rect];


(lib.hero2_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring5_img();
	this.instance.setTransform(98,-44.2,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring5_img();
	this.instance_1.setTransform(-97.9,-44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.9,-44.7,195.9,89.5);
p.frameBounds = [rect];


(lib.hero2_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring4_img();
	this.instance.setTransform(95,-37.5,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring4_img();
	this.instance_1.setTransform(-94.9,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.9,-37.5,189.9,75);
p.frameBounds = [rect];


(lib.hero2_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring3_img();
	this.instance.setTransform(41.7,-29);

	this.instance_1 = new lib.hero2_earring3_img();
	this.instance_1.setTransform(-101.7,-31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-31,203.4,62);
p.frameBounds = [rect];


(lib.hero2_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring2_img();
	this.instance.setTransform(56.2,-37.5);

	this.instance_1 = new lib.hero2_earring2_img();
	this.instance_1.setTransform(-84.2,-36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.2,-37.5,168.4,75);
p.frameBounds = [rect];


(lib.hero2_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring1_img();
	this.instance.setTransform(48.8,-34.5);

	this.instance_1 = new lib.hero2_earring1_img();
	this.instance_1.setTransform(-93.7,-33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.7,-34.5,187.5,69);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-108.5,-194);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(-125.5,-203);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(-120.5,-195.5);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-88,-195.5);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-112.9,-194.5);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-121.9,-208.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.5,-194,217,388);
p.frameBounds = [rect, new cjs.Rectangle(-125.5,-203,257,402), new cjs.Rectangle(-120.5,-195.5,238,282), new cjs.Rectangle(-88,-195.5,187,270), new cjs.Rectangle(-112.9,-194.5,220,314), new cjs.Rectangle(-121.9,-208.5,232,347), null];


(lib.hero2_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_body_img();
	this.instance.setTransform(-104.5,-215.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-215.5,209,431);
p.frameBounds = [rect];


(lib.hero2_animal_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_animal1_img();
	this.instance.setTransform(-62.5,-141);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62.5,-141,125,282), null];


(lib.hero2_accessory_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-47.5,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-130,95,260);
p.frameBounds = [rect];


(lib.hero2_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-47.5,-130);

	this.instance_1 = new lib.hero2_accessory2_img();
	this.instance_1.setTransform(-54,-97);

	this.instance_2 = new lib.hero2_accessory3_img();
	this.instance_2.setTransform(-25.5,-99.5);

	this.instance_3 = new lib.hero2_accessory4_img();
	this.instance_3.setTransform(-13,-124.5);

	this.instance_4 = new lib.hero2_accessory5_img();
	this.instance_4.setTransform(-35.5,-158.5);

	this.instance_5 = new lib.hero2_accessory6_img();
	this.instance_5.setTransform(-17,-149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-130,95,260);
p.frameBounds = [rect, new cjs.Rectangle(-54,-97,130,127), new cjs.Rectangle(-25.5,-99.5,79,85), new cjs.Rectangle(-13,-124.5,68,74), new cjs.Rectangle(-35.5,-158.5,113,100), new cjs.Rectangle(-17,-149,59,62), rect=null, rect];


(lib.hero1_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-58.5,-61.5);

	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(-69.4,-71);

	this.instance_2 = new lib.hero1_top3_img();
	this.instance_2.setTransform(-79.4,-65);

	this.instance_3 = new lib.hero1_top4_img();
	this.instance_3.setTransform(-59.4,-19);

	this.instance_4 = new lib.hero1_top5_img();
	this.instance_4.setTransform(-62.4,-72);

	this.instance_5 = new lib.hero1_top6_img();
	this.instance_5.setTransform(-82.4,-72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-61.5,117,123);
p.frameBounds = [rect, new cjs.Rectangle(-69.4,-71,182,145), new cjs.Rectangle(-79.4,-65,185,134), new cjs.Rectangle(-59.4,-19,131,126), new cjs.Rectangle(-62.4,-72,126,135), new cjs.Rectangle(-82.4,-72.5,240,142), null];


(lib.hero1_skirt_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_skirt1_img();
	this.instance.setTransform(-101,-92);

	this.instance_1 = new lib.hero1_skirt2_img();
	this.instance_1.setTransform(-84,-92.5);

	this.instance_2 = new lib.hero1_skirt3_img();
	this.instance_2.setTransform(-86,-94.5);

	this.instance_3 = new lib.hero1_skirt4_img();
	this.instance_3.setTransform(-94.9,-93.5);

	this.instance_4 = new lib.hero1_skirt5_img();
	this.instance_4.setTransform(-75,-86.5);

	this.instance_5 = new lib.hero1_skirt6_img();
	this.instance_5.setTransform(-76.9,-92.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-92,202,184);
p.frameBounds = [rect, new cjs.Rectangle(-84,-92.5,183,169), new cjs.Rectangle(-86,-94.5,178,185), new cjs.Rectangle(-94.9,-93.5,197,200), new cjs.Rectangle(-75,-86.5,158,153), new cjs.Rectangle(-76.9,-92.5,156,178), null];


(lib.hero1_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows2_img();
	this.instance.setTransform(-87.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-102,175,204);
p.frameBounds = [rect];


(lib.hero1_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-87.5,-102);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-87.5,-102);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-87.5,-102);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-87.5,-102);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-87.5,-102);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-87.5,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-102,175,204);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge5_img();
	this.instance.setTransform(-87.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-102,175,204);
p.frameBounds = [rect];


(lib.hero1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-87.5,-102);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-87.5,-102);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-87.5,-102);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-87.5,-102);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-87.5,-102);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-87.5,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-102,175,204);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-87.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-102,175,204);
p.frameBounds = [rect];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-87.5,-102);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-87.5,-102);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-87.5,-102);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-87.5,-102);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-87.5,-102);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-87.5,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-102,175,204);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-87.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-102,175,204);
p.frameBounds = [rect];


(lib.hero1_hat_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-77.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-44,155,88);
p.frameBounds = [rect];


(lib.hero1_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-77.5,-44);

	this.instance_1 = new lib.hero1_hat2_img();
	this.instance_1.setTransform(-108.4,-50.5);

	this.instance_2 = new lib.hero1_hat3_img();
	this.instance_2.setTransform(-100.4,-16.5);

	this.instance_3 = new lib.hero1_hat4_img();
	this.instance_3.setTransform(-116.4,-46);

	this.instance_4 = new lib.hero1_hat5_img();
	this.instance_4.setTransform(-129.9,-49.5);

	this.instance_5 = new lib.hero1_hat6_img();
	this.instance_5.setTransform(-111.9,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-44,155,88);
p.frameBounds = [rect, new cjs.Rectangle(-108.4,-50.5,220,129), new cjs.Rectangle(-100.4,-16.5,193,108), new cjs.Rectangle(-116.4,-46,221,143), new cjs.Rectangle(-129.9,-49.5,257,196), new cjs.Rectangle(-111.9,-40,223,131), null];


(lib.hero1_hand2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand2_img();
	this.instance.setTransform(-16,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-24.5,32,49);
p.frameBounds = [rect];


(lib.hero1_hand1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand1_img();
	this.instance.setTransform(-20.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.5,-27,41,54);
p.frameBounds = [rect];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair6_img();
	this.instance.setTransform(-144,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144,-37.5,277,245);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-135.5,-85);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-150,-104);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-101,-28);

	this.instance_3 = new lib.hero1_hair5_img();
	this.instance_3.setTransform(-121,-81);

	this.instance_4 = new lib.hero1_hair6_img();
	this.instance_4.setTransform(-144,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.5,-85,268,145);
p.frameBounds = [rect, new cjs.Rectangle(-150,-104,289,286), new cjs.Rectangle(-101,-28,200,154), null, new cjs.Rectangle(-121,-81,229,196), new cjs.Rectangle(-144,-37.5,277,245)];


(lib.hero1_glasses_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glasses1_img();
	this.instance.setTransform(-71.5,-36.5);

	this.instance_1 = new lib.hero1_glasses2_img();
	this.instance_1.setTransform(-70.9,-36);

	this.instance_2 = new lib.hero1_glasses3_img();
	this.instance_2.setTransform(-70.4,-35.5);

	this.instance_3 = new lib.hero1_glasses4_img();
	this.instance_3.setTransform(-69.9,-31);

	this.instance_4 = new lib.hero1_glasses5_img();
	this.instance_4.setTransform(-74.9,-34.5);

	this.instance_5 = new lib.hero1_glasses6_img();
	this.instance_5.setTransform(-71.4,-31.5);

	this.instance_6 = new lib.hero1_glasses7_img();
	this.instance_6.setTransform(-71.9,-41);

	this.instance_7 = new lib.hero1_glasses8_img();
	this.instance_7.setTransform(-70.9,-42);

	this.instance_8 = new lib.hero1_glasses9_img();
	this.instance_8.setTransform(-70.9,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-36.5,143,73);
p.frameBounds = [rect, new cjs.Rectangle(-70.9,-36,140,74), new cjs.Rectangle(-70.4,-35.5,142,93), new cjs.Rectangle(-69.9,-31,139,54), new cjs.Rectangle(-74.9,-34.5,148,60), new cjs.Rectangle(-71.4,-31.5,143,53), new cjs.Rectangle(-71.9,-41,143,63), new cjs.Rectangle(-70.9,-42,142,63), new cjs.Rectangle(-70.9,-50,143,74), null];


(lib.hero1_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe6_img();
	this.instance.setTransform(-160,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-124,325,236);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-89.5,-116);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-94,-134);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-143,-120);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-137,-116);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-161,-138);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-160,-124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-116,179,232);
p.frameBounds = [rect, new cjs.Rectangle(-94,-134,184,206), new cjs.Rectangle(-143,-120,279,244), new cjs.Rectangle(-137,-116,270,388), new cjs.Rectangle(-161,-138,312,254), new cjs.Rectangle(-160,-124,325,236)];


(lib.hero1_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-87.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-102,175,204);
p.frameBounds = [rect];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-87.5,-102);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-87.5,-102);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-87.5,-102);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-87.5,-102);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-87.5,-102);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-87.5,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-102,175,204);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows2_img();
	this.instance.setTransform(-87.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-102,175,204);
p.frameBounds = [rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-87.5,-102);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-87.5,-102);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-87.5,-102);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-87.5,-102);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-87.5,-102);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-87.5,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-102,175,204);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_earrings9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring9_img();
	this.instance.setTransform(51.7,-35.7);

	this.instance_1 = new lib.hero1_earring9_img();
	this.instance_1.setTransform(-90.7,-39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.7,-39.2,181.4,78.6);
p.frameBounds = [rect];


(lib.hero1_earrings8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring8_img();
	this.instance.setTransform(53,-30.9);

	this.instance_1 = new lib.hero1_earring8_img();
	this.instance_1.setTransform(-90.9,-34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.9,-34,181.9,68.1);
p.frameBounds = [rect];


(lib.hero1_earrings7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring7_img();
	this.instance.setTransform(54.2,-27.9);

	this.instance_1 = new lib.hero1_earring7_img();
	this.instance_1.setTransform(-89.2,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.2,-33,178.4,66.1);
p.frameBounds = [rect];


(lib.hero1_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring6_img();
	this.instance.setTransform(56.3,-35.7);

	this.instance_1 = new lib.hero1_earring6_img();
	this.instance_1.setTransform(-86.2,-39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-39.2,172.5,78.5);
p.frameBounds = [rect];


(lib.hero1_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring5_img();
	this.instance.setTransform(98.2,-24,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earring5_img();
	this.instance_1.setTransform(-98.2,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.2,-28,196.5,56);
p.frameBounds = [rect];


(lib.hero1_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring4_img();
	this.instance.setTransform(97,-29.5,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earring4_img();
	this.instance_1.setTransform(-97,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-30.5,194,61);
p.frameBounds = [rect];


(lib.hero1_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring3_img();
	this.instance.setTransform(90.5,-23.2,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earring3_img();
	this.instance_1.setTransform(-90.5,-27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-27.7,181,55.5);
p.frameBounds = [rect];


(lib.hero1_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring2_img();
	this.instance.setTransform(54.7,-29);

	this.instance_1 = new lib.hero1_earring2_img();
	this.instance_1.setTransform(-88.7,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.7,-32,177.5,64);
p.frameBounds = [rect];


(lib.hero1_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring1_img();
	this.instance.setTransform(53.5,-24.5);

	this.instance_1 = new lib.hero1_earring1_img();
	this.instance_1.setTransform(-88.5,-28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,-28.5,177,57);
p.frameBounds = [rect];


(lib.hero1_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress6_img();
	this.instance.setTransform(-103.5,-158.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.5,-158.5,204,299);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-109.5,-156.5);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-99.9,-166.5);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-114.4,-150);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-101.4,-154.5);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-109.4,-161);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-103.5,-158.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.5,-156.5,219,313);
p.frameBounds = [rect, new cjs.Rectangle(-99.9,-166.5,209,331), new cjs.Rectangle(-114.4,-150,244,327), new cjs.Rectangle(-101.4,-154.5,211,299), new cjs.Rectangle(-109.4,-161,223,310), new cjs.Rectangle(-103.5,-158.5,204,299), null];


(lib.hero1_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body_img();
	this.instance.setTransform(-112.5,-199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-199,225,398);
p.frameBounds = [rect];


(lib.hero1_accessory_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-65.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-18.5,92,103);
p.frameBounds = [rect];


(lib.hero1_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-34.5,-48.5);

	this.instance_1 = new lib.hero1_accessory2_img();
	this.instance_1.setTransform(-65.5,-18.5);

	this.instance_2 = new lib.hero1_accessory3_img();
	this.instance_2.setTransform(-82.5,-8.5);

	this.instance_3 = new lib.hero1_accessory4_img();
	this.instance_3.setTransform(-69.5,-22.5);

	this.instance_4 = new lib.hero1_accessory5_img();
	this.instance_4.setTransform(-105,-104.5);

	this.instance_5 = new lib.hero1_accessory6_img();
	this.instance_5.setTransform(18,-113.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-48.5,69,97);
p.frameBounds = [rect, new cjs.Rectangle(-65.5,-18.5,92,103), new cjs.Rectangle(-82.5,-8.5,139,153), new cjs.Rectangle(-69.5,-22.5,118,109), new cjs.Rectangle(-105,-104.5,123,175), new cjs.Rectangle(18,-113.5,280,270), null];


(lib.headdress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat6_img();
	this.instance.setTransform(-58.2,-100,0.878,0.878,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxfDDIGnriIJNjEINRCqIF0FSIAGGSIpCgxI0ZJqg");
	this.shape.setTransform(-3.4,-9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.5,-100,225.7,200.8);
p.frameBounds = [rect];


(lib.headdress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat6_img();
	this.instance.setTransform(-80,-47,0.717,0.718);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap1H+IjVjGIgympIGdlpIK4gxIF8B8IEoHoIi9Gzg");
	this.shape.setTransform(1.6,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.7,-54.4,178.7,104.8);
p.frameBounds = [rect];


(lib.headdress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat5_img();
	this.instance.setTransform(-95,-83,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ah5OGIuXsCIJOtcIEmiyIEnACIOGOGIhMD8ItxKRg");
	this.shape.setTransform(-1.6,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.7,-89.6,208.4,181.6);
p.frameBounds = [rect];


(lib.headdress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat5_img();
	this.instance.setTransform(-80,-61,0.623,0.622);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqmKAIjrmMIBupaIKVlMILFCDIFbJyIh8HrIkTCFg");
	this.shape.setTransform(-1.1,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.5,-70.8,182.9,138.3);
p.frameBounds = [rect];


(lib.headdress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat4_img();
	this.instance.setTransform(-84,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtgFpIg+nCIGjo3IHwimIHrCOIG/KZIhZFdIs+Hpg");
	this.shape.setTransform(2.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-82.4,185.4,164.7);
p.frameBounds = [rect];


(lib.headdress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat4_img();
	this.instance.setTransform(-80,-52,0.724,0.724);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuMGFIA3muIG+n8IIJhHII/C0IDcGJIiiGbI3PEBg");
	this.shape.setTransform(3.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.3,-62.3,181.9,124.4);
p.frameBounds = [rect];


(lib.headdress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat3_img();
	this.instance.setTransform(-90,-68,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AthLQIijm8IEYrnIKWkTIKoCwIGzMIIi+IVg");
	this.shape.setTransform(2.6,-5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.3,-80,205.9,148.9);
p.frameBounds = [rect];


(lib.headdress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat3_img();
	this.instance.setTransform(-57.1,-47.1,0.67,0.67,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsyG/ICutdINUgmIH4FaIBrIvg");
	this.shape.setTransform(-0.4,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.3,-48.5,163.9,95.6);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat2_img();
	this.instance.setTransform(-128.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AKPL0IqYiOInNBUIk1C4In5ALIhWjdIKBvQIOypLIIPgWIJzY8IheC5ImeAug");
	this.shape.setTransform(1.1,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136,-93.5,274.3,182.9);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat2_img();
	this.instance.setTransform(-75,-41,0.67,0.67,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArGHrIismXIEZmcIHwiyIHtBGIFxDvIB+FaIjoFmg");
	this.shape.setTransform(0.7,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.6,-51.9,176.7,101.6);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-90.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Av+h3IFpm1IKbilIIqB9IHPIDIrzMbIrNAIg");
	this.shape.setTransform(3.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.9,-70.9,204.7,144.6);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-77.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq5HXIkZtVIQCixIOjE5IlXKsIoYB6g");
	this.shape.setTransform(3.2,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.8,-56.5,196,112);
p.frameBounds = [rect];


(lib.hairstyle_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_0_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_0_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.grass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.grass_img();
	this.instance.setTransform(-100,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-160,200,180);
p.frameBounds = [rect];


(lib.forward_icon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.forward_icon_img();
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


(lib.faceart_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.faceart_check_0_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.eyes_2_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_2_check_0_1_img();
	this.instance.setTransform(-105,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-120,210,240);
p.frameBounds = [rect];


(lib.eyes_1_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_1_check_0_1_img();
	this.instance.setTransform(-100,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-120,200,240);
p.frameBounds = [rect];


(lib.eyebrows_2_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyebrows_2_check_0_1_img();
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.eyebrows_1_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyebrows_1_check_0_1_img();
	this.instance.setTransform(-125,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-45,250,90);
p.frameBounds = [rect];


(lib.dress_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_2_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_1_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_0_2_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_0_1_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.current_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_2_img();
	this.instance.setTransform(-220,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-220,440,440);
p.frameBounds = [rect];


(lib.current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-200,400,400);
p.frameBounds = [rect];


(lib.cosmic_star_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cosmic_star_1_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.body_title_second_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-250,-80);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-250,-80);

	this.instance_2 = new lib.title_es_img();
	this.instance_2.setTransform(-250,-80);

	this.instance_3 = new lib.title_pt_img();
	this.instance_3.setTransform(-250,-80);

	this.instance_4 = new lib.title_tr_img();
	this.instance_4.setTransform(-250,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-80,500,160);
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


(lib.bg_title_second_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_second_img();
	this.instance.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,320);
p.frameBounds = [rect];


(lib.bg_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_2_img();
	this.instance.setTransform(-250,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-120,500,240);
p.frameBounds = [rect];


(lib.bg_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_1_img();
	this.instance.setTransform(-250,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-120,500,240);
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


(lib.animation_for_pointer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_pointer_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessory_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory_check_1_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.accessory_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory_check_1_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.accessory_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory_check_0_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.accessory_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory_check_0_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.accessory_bg_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory_bg_0_1_img();
	this.instance.setTransform(-105,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.accessory_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_animal1_img();
	this.instance.setTransform(-62.5,-141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoBWBIkeo7IIq9IIFwmhIIKhaICbI/IiEOfIoxGtIipRwg");
	this.shape.setTransform(-2.9,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,-153.9,160.2,307);
p.frameBounds = [rect];


(lib.accessory_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory6_2_img();
	this.instance.setTransform(-50,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmDGEQiiihABjjQgBjjCiihQChihDiAAQDkAACgChQCiChgBDjQABDjiiChQigCijkgBQjiABihiig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.accessory_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory6_img();
	this.instance.setTransform(-101.2,-68.8,0.63,0.63,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.2,-98.7,202.6,197.4);
p.frameBounds = [rect];


(lib.accessory_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory5_2_img();
	this.instance.setTransform(-105,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnrOPIqY0TIHvmvIJwjNIICBIIHmHPIDAKcIgqDPI0vJ/g");
	this.shape.setTransform(-1.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.8,-102,231.2,205.1);
p.frameBounds = [rect];


(lib.accessory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory5_img();
	this.instance.setTransform(50.9,-94,1,1,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuJEAICBpOIGilWIKmhkIJKEvIt3SdIi0BFg");
	this.shape.setTransform(-2.2,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.7,-94,211.5,188.1);
p.frameBounds = [rect];


(lib.accessory_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-34,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnyjfIB4jWIH7gjIFyE9IkDIjInqBRg");
	this.shape.setTransform(1.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.4,-46.5,99.9,94.7);
p.frameBounds = [rect];


(lib.accessory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4_img();
	this.instance.setTransform(-59,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoGI3Iirj6IAqm8IFsnqII1AAIGYQkIhvCvg");
	this.shape.setTransform(2.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-61.2,138.2,123.6);
p.frameBounds = [rect];


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-39.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoXGwIB7s2IF0ifIHeClIBiDIIjdLeg");
	this.shape.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.7,-54.5,107.4,110.1);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory3_img();
	this.instance.setTransform(-69.5,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoBNcIkfvzIKXrIIHIAQIHhKoIkcQHg");
	this.shape.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.1,-85.6,160.2,172.9);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory2_img();
	this.instance.setTransform(-65,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsF3IAYpzIIHnfII8BCIF+JNIi+J+IkpCqg");
	this.shape.setTransform(4,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.9,-74.6,149.8,146.6);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-46,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AltIVIjXmUIA7nVIF+kvIFYADIF4FqIgGIKIjgEjIltBtg");
	this.shape.setTransform(-2.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-62,116.3,129);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(8.8,-138.1,1,1,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvhPMMAXWggtIFhglICMGEIh4GpIwRShIq0E/g");
	this.shape.setTransform(-4.1,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.5,-138.1,199.3,276.3);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(9.9,-58.7,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnrGDIjJkSIKDpVILEDGIAiDOIloI1g");
	this.shape.setTransform(-0.5,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-58.7,138.8,117.4);
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
	this.instance.setTransform(-18,-18);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-18,-18);

	this.instance_2 = new lib.gravity_explosion_3_img();
	this.instance_2.setTransform(-10,-10);

	this.instance_3 = new lib.gravity_explosion_4_img();
	this.instance_3.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-10,-10,20,20), rect];


(lib.glitter_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glitter_1_3_img();
	this.instance.setTransform(-18,-18);

	this.instance_1 = new lib.glitter_2_3_img();
	this.instance_1.setTransform(-18,-18);

	this.instance_2 = new lib.glitter_3_3_img();
	this.instance_2.setTransform(-18,-18);

	this.instance_3 = new lib.glitter_4_3_img();
	this.instance_3.setTransform(-18,-18);

	this.instance_4 = new lib.glitter_5_3_img();
	this.instance_4.setTransform(-18,-18);

	this.instance_5 = new lib.glitter_6_3_img();
	this.instance_5.setTransform(-18,-18);

	this.instance_6 = new lib.glitter_7_3_img();
	this.instance_6.setTransform(-18,-18);

	this.instance_7 = new lib.glitter_8_3_img();
	this.instance_7.setTransform(-18,-18);

	this.instance_8 = new lib.glitter_9_3_img();
	this.instance_8.setTransform(-18,-18);

	this.instance_9 = new lib.glitter_10_3_img();
	this.instance_9.setTransform(-18,-18);

	this.instance_10 = new lib.glitter_11_3_img();
	this.instance_10.setTransform(-18,-18);

	this.instance_11 = new lib.glitter_12_3_img();
	this.instance_11.setTransform(-18,-18);

	this.instance_12 = new lib.glitter_13_3_img();
	this.instance_12.setTransform(-18,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.bubble_2_2_mc = function(mode,startPosition,loop) {
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


(lib.blinking_light_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_2_2_img();
	this.instance.setTransform(-12,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.blinking_light_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_2_img();
	this.instance.setTransform(-28,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
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
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
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
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
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


(lib.title_second_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_second_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_title_second_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-170,500,320);
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


(lib.shadows_2_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows_2_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.shadows_1_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows_1_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-100,170,200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.lips_2_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lips_2_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lips_1_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lips_1_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lips_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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


(lib.hero2_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings6_mc();
	this.instance.setTransform(-0.5,-6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-35.5,190.9,58.5);
p.frameBounds = [rect];


(lib.hero2_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_mc();

	this.instance_1 = new lib.hero2_earrings2_mc();
	this.instance_1.setTransform(0.2,2);

	this.instance_2 = new lib.hero2_earrings3_mc();
	this.instance_2.setTransform(-0.8,-4.5);

	this.instance_3 = new lib.hero2_earrings4_mc();
	this.instance_3.setTransform(0,2.5);

	this.instance_4 = new lib.hero2_earrings5_mc();
	this.instance_4.setTransform(-0.5,7.8);

	this.instance_5 = new lib.hero2_earrings6_mc();
	this.instance_5.setTransform(-0.5,-6.2);

	this.instance_6 = new lib.hero2_earrings7_mc();
	this.instance_6.setTransform(0.9,6);

	this.instance_7 = new lib.hero2_earrings8_mc();
	this.instance_7.setTransform(0.2,-3.5);

	this.instance_8 = new lib.hero2_earrings9_mc();
	this.instance_8.setTransform(-0.3,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.7,-34.5,187.5,69);
p.frameBounds = [rect, new cjs.Rectangle(-84,-35.5,168.4,75), new cjs.Rectangle(-102.5,-35.5,203.4,62), new cjs.Rectangle(-95,-35,189.9,75), new cjs.Rectangle(-98.5,-37,195.9,89.5), new cjs.Rectangle(-96,-35.5,190.9,58.5), new cjs.Rectangle(-86.5,-42.5,175,97), new cjs.Rectangle(-97.5,-37.5,195.4,68), new cjs.Rectangle(-96,-34.5,191.4,65.5), null];


(lib.hero1_hands_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hand1_mc();
	this.instance.setTransform(80.5,-36.2);

	this.instance_1 = new lib.hero1_hand2_mc();
	this.instance_1.setTransform(-84.9,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.9,-63.2,202,126.5);
p.frameBounds = [rect];


(lib.hero1_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,-28.5,177,57);
p.frameBounds = [rect];


(lib.hero1_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earrings1_mc();

	this.instance_1 = new lib.hero1_earrings2_mc();
	this.instance_1.setTransform(-0.7,3);

	this.instance_2 = new lib.hero1_earrings3_mc();
	this.instance_2.setTransform(0,0.2);

	this.instance_3 = new lib.hero1_earrings4_mc();
	this.instance_3.setTransform(0,-2.5);

	this.instance_4 = new lib.hero1_earrings5_mc();
	this.instance_4.setTransform(-0.2,-2);

	this.instance_5 = new lib.hero1_earrings6_mc();
	this.instance_5.setTransform(0.2,10.7);

	this.instance_6 = new lib.hero1_earrings7_mc();
	this.instance_6.setTransform(-0.3,1);

	this.instance_7 = new lib.hero1_earrings8_mc();
	this.instance_7.setTransform(-0.5,5.5);

	this.instance_8 = new lib.hero1_earrings9_mc();
	this.instance_8.setTransform(1.7,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,-28.5,177,57);
p.frameBounds = [rect, new cjs.Rectangle(-89.5,-29,177.5,64), new cjs.Rectangle(-90.5,-27.5,181,55.5), new cjs.Rectangle(-97,-33,194,61), new cjs.Rectangle(-98.5,-30,196.5,56), new cjs.Rectangle(-86,-28.5,172.5,78.5), new cjs.Rectangle(-89.5,-32,178.4,66.1), new cjs.Rectangle(-91.5,-28.5,181.9,68.1), new cjs.Rectangle(-89,-27.5,181.4,78.6), null];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessorySecond
	this.accessorySecond = new lib.hero2_animal_all_mc();
	this.accessorySecond.setTransform(-90,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.accessorySecond).to({y:-34.5},44).to({y:-42.5},55).wait(1));

	// headdress
	this.headdress = new lib.hero2_hat_all_mc();
	this.headdress.setTransform(2,-275);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:4.5,x:16.6,y:-266.3},44).to({rotation:0,x:2,y:-275},55).wait(1));

	// earrings
	this.earrings = new lib.hero2_earrings_all_mc();
	this.earrings.setTransform(0.2,-113.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1,skewX:1.2,skewY:4.5,x:4.2,y:-105.4},44).to({scaleY:1,skewX:0,skewY:0,x:0.2,y:-113.5},55).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(0,-173.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:4.5,x:6.7,y:-165.2},44).to({rotation:0,x:0,y:-173.5},55).wait(1));

	// glasses
	this.glasses = new lib.hero2_glasses_all_mc();
	this.glasses.setTransform(4.5,-184);

	this.timeline.addTween(cjs.Tween.get(this.glasses).to({rotation:4.5,x:12,y:-175.3},44).to({rotation:0,x:4.5,y:-184},55).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:4.5,x:7,y:-174.8},44).to({rotation:0,x:-0.5,y:-183},55).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:4.5,x:7,y:-174.8},44).to({rotation:0,x:-0.5,y:-183},55).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:4.5,x:7,y:-174.8},44).to({rotation:0,x:-0.5,y:-183},55).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:4.5,x:7,y:-174.8},44).to({rotation:0,x:-0.5,y:-183},55).wait(1));

	// faceart
	this.faceart = new lib.hero2_rouge_all_mc();
	this.faceart.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.faceart).to({rotation:4.5,x:7,y:-174.8},44).to({rotation:0,x:-0.5,y:-183},55).wait(1));

	// body
	this.instance = new lib.hero2_head_mc();
	this.instance.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.5,x:7,y:-174.8},44).to({rotation:0,x:-0.5,y:-183},55).wait(1));

	// body
	this.instance_1 = new lib.hero2_hands_mc();
	this.instance_1.setTransform(18,79.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:87.4},44).to({y:79.4},55).wait(1));

	// accessory
	this.accessory = new lib.hero2_accessory_all_mc();
	this.accessory.setTransform(-32,170.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({y:178.5},44).to({y:170.5},55).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(11.2,122.3);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:130.3},44).to({y:122.3},55).wait(1));

	// top
	this.top = new lib.hero2_top_all_mc();
	this.top.setTransform(1.7,-6);

	this.timeline.addTween(cjs.Tween.get(this.top).to({y:2},44).to({y:-6},55).wait(1));

	// bottom
	this.bottom = new lib.hero2_skirt_all_mc();
	this.bottom.setTransform(15,154.5);

	this.timeline.addTween(cjs.Tween.get(this.bottom).to({y:162.5},44).to({y:154.5},55).wait(1));

	// body
	this.instance_2 = new lib.hero2_body_mc();
	this.instance_2.setTransform(5,106);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:114},44).to({y:106},55).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(0,-173.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:4.5,x:6.7,y:-165.2},44).to({rotation:0,x:0,y:-173.5},55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.5,-339,317,660.5);
p.frameBounds = [rect, new cjs.Rectangle(-158.4,-338.8,317.2,660.5), new cjs.Rectangle(-158.3,-338.6,317.3,660.5), new cjs.Rectangle(-158.7,-338.8,318.4,660.8), new cjs.Rectangle(-158.6,-338.6,318.5,660.8), new cjs.Rectangle(-159,-338.7,319.6,661.1), new cjs.Rectangle(-159,-338.6,319.8,661.2), new cjs.Rectangle(-158.9,-338.4,319.8,661.2), new cjs.Rectangle(-159.2,-338.6,320.9,661.5), new cjs.Rectangle(-159.2,-338.4,321,661.5), new cjs.Rectangle(-159.6,-338.5,322.2,661.8), new cjs.Rectangle(-159.5,-338.4,322.3,661.9), new cjs.Rectangle(-159.3,-338.3,322.4,662), new cjs.Rectangle(-159.7,-338.4,323.5,662.2), new cjs.Rectangle(-159.7,-338.2,323.6,662.3), new cjs.Rectangle(-160,-338.4,324.7,662.6), new cjs.Rectangle(-159.9,-338.2,324.8,662.6), new cjs.Rectangle(-159.9,-338,324.9,662.6), new cjs.Rectangle(-160.2,-338.2,326,662.9), new cjs.Rectangle(-160.2,-338,326.1,662.9), new cjs.Rectangle(-160.5,-338.1,327.2,663.3), new cjs.Rectangle(-160.4,-338,327.3,663.3), new cjs.Rectangle(-160.4,-337.8,327.4,663.3), new cjs.Rectangle(-160.8,-338,328.5,663.7), new cjs.Rectangle(-160.7,-337.8,328.5,663.7), new cjs.Rectangle(-161,-337.9,329.6,664), new cjs.Rectangle(-161,-337.7,329.8,664), new cjs.Rectangle(-161.3,-337.9,330.8,664.3), new cjs.Rectangle(-161.3,-337.7,330.9,664.3), new cjs.Rectangle(-161.1,-337.6,331,664.3), new cjs.Rectangle(-161.5,-337.7,332.1,664.7), new cjs.Rectangle(-161.4,-337.5,332.2,664.7), new cjs.Rectangle(-161.8,-337.7,333.2,665), new cjs.Rectangle(-161.7,-337.5,333.4,665), new cjs.Rectangle(-161.6,-337.4,333.5,665.1), new cjs.Rectangle(-161.9,-337.5,334.5,665.4), new cjs.Rectangle(-161.9,-337.4,334.6,665.4), new cjs.Rectangle(-162.2,-337.5,335.7,665.7), new cjs.Rectangle(-162.1,-337.3,335.8,665.7), new cjs.Rectangle(-162,-337.1,335.9,665.7), new cjs.Rectangle(-162.4,-337.3,336.9,666), new cjs.Rectangle(-162.3,-337.1,337,666.1), new cjs.Rectangle(-162.6,-337.2,338,666.4), new cjs.Rectangle(-162.6,-337.1,338.2,666.4), new cjs.Rectangle(-162.9,-337.2,339.2,666.7), new cjs.Rectangle(-162.5,-337,338.2,666.3), new cjs.Rectangle(-162.6,-337.1,338.1,666.3), new cjs.Rectangle(-162.2,-336.9,337.1,666), new cjs.Rectangle(-162.3,-337.2,337,666.1), new cjs.Rectangle(-162.3,-337.3,336.9,666), new cjs.Rectangle(-162,-337.1,335.9,665.8), new cjs.Rectangle(-162.1,-337.2,335.9,665.7), new cjs.Rectangle(-162.1,-337.3,335.7,665.7), new cjs.Rectangle(-162.2,-337.5,335.6,665.7), new cjs.Rectangle(-161.9,-337.4,334.6,665.4), new cjs.Rectangle(-162,-337.4,334.6,665.3), new cjs.Rectangle(-162,-337.5,334.5,665.3), new cjs.Rectangle(-161.6,-337.4,333.4,665), new cjs.Rectangle(-161.7,-337.5,333.3,664.9), new cjs.Rectangle(-161.8,-337.6,333.2,664.9), new cjs.Rectangle(-161.4,-337.5,332.3,664.7), new cjs.Rectangle(-161.5,-337.6,332.2,664.7), new cjs.Rectangle(-161.5,-337.7,332,664.6), new cjs.Rectangle(-161.2,-337.6,331,664.3), new cjs.Rectangle(-161.3,-337.7,330.9,664.3), new cjs.Rectangle(-161.3,-337.8,330.8,664.3), new cjs.Rectangle(-160.9,-337.7,329.8,664), new cjs.Rectangle(-161,-337.9,329.7,664), new cjs.Rectangle(-161,-338,329.6,664), new cjs.Rectangle(-160.7,-337.8,328.6,663.6), new cjs.Rectangle(-160.7,-337.9,328.5,663.6), new cjs.Rectangle(-160.8,-338.1,328.4,663.6), new cjs.Rectangle(-160.4,-337.8,327.4,663.3), new cjs.Rectangle(-160.5,-338,327.3,663.3), new cjs.Rectangle(-160.6,-338.1,327.2,663.2), new cjs.Rectangle(-160.2,-338,326.1,663), new cjs.Rectangle(-160.3,-338.1,326,662.9), new cjs.Rectangle(-160.3,-338.2,325.9,662.8), new cjs.Rectangle(-160,-338.1,324.9,662.6), new cjs.Rectangle(-160,-338.2,324.8,662.6), new cjs.Rectangle(-160.1,-338.3,324.7,662.6), new cjs.Rectangle(-159.7,-338.1,323.7,662.2), new cjs.Rectangle(-159.8,-338.2,323.6,662.2), new cjs.Rectangle(-159.8,-338.3,323.5,662.2), new cjs.Rectangle(-159.4,-338.2,322.4,661.9), new cjs.Rectangle(-159.5,-338.3,322.3,661.9), new cjs.Rectangle(-159.5,-338.4,322.2,661.8), new cjs.Rectangle(-159.1,-338.3,321.1,661.6), new cjs.Rectangle(-159.2,-338.4,321,661.5), new cjs.Rectangle(-159.3,-338.6,320.9,661.5), new cjs.Rectangle(-158.9,-338.4,319.9,661.2), new cjs.Rectangle(-159,-338.5,319.8,661.2), new cjs.Rectangle(-159,-338.6,319.6,661.1), new cjs.Rectangle(-158.6,-338.4,318.6,660.8), new cjs.Rectangle(-158.7,-338.6,318.5,660.8), new cjs.Rectangle(-158.7,-338.7,318.4,660.8), new cjs.Rectangle(-158.3,-338.5,317.3,660.5), new cjs.Rectangle(-158.4,-338.7,317.2,660.5), new cjs.Rectangle(-158.5,-338.8,317.1,660.5), new cjs.Rectangle(-158.5,-339,317,660.5)];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_hat_main_mc();
	this.instance.setTransform(2,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.5,x:16.6,y:-266.3},34).to({rotation:0,x:2,y:-275},45).wait(1));

	// animation
	this.instance_1 = new lib.hero2_fringe_main_mc();
	this.instance_1.setTransform(0,-173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.5,x:6.7,y:-165.2},34).to({rotation:0,x:0,y:-173.5},45).wait(1));

	// animation
	this.instance_2 = new lib.hero2_earrings_main_mc();
	this.instance_2.setTransform(0.2,-113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,skewX:1.2,skewY:4.5,x:4.2,y:-105.4},34).to({scaleY:1,skewX:0,skewY:0,x:0.2,y:-113.5},45).wait(1));

	// animation
	this.instance_3 = new lib.hero2_glasses_main_mc();
	this.instance_3.setTransform(4.5,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.5,x:12,y:-175.3},34).to({rotation:0,x:4.5,y:-184},45).wait(1));

	// animation
	this.instance_4 = new lib.hero2_eyebrows_main_mc();
	this.instance_4.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:4.5,x:7,y:-174.8},34).to({rotation:0,x:-0.5,y:-183},45).wait(1));

	// animation
	this.instance_5 = new lib.hero2_eyes_main_mc();
	this.instance_5.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4.5,x:7,y:-174.8},34).to({rotation:0,x:-0.5,y:-183},45).wait(1));

	// animation
	this.instance_6 = new lib.hero2_shadows_main_mc();
	this.instance_6.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:4.5,x:7,y:-174.8},34).to({rotation:0,x:-0.5,y:-183},45).wait(1));

	// animation
	this.instance_7 = new lib.hero2_lips_main_mc();
	this.instance_7.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:4.5,x:7,y:-174.8},34).to({rotation:0,x:-0.5,y:-183},45).wait(1));

	// animation
	this.instance_8 = new lib.hero2_rouge_main_mc();
	this.instance_8.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:4.5,x:7,y:-174.8},34).to({rotation:0,x:-0.5,y:-183},45).wait(1));

	// animation
	this.instance_9 = new lib.hero2_head_mc();
	this.instance_9.setTransform(-0.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:4.5,x:7,y:-174.8},34).to({rotation:0,x:-0.5,y:-183},45).wait(1));

	// animation
	this.instance_10 = new lib.hero2_hands_mc();
	this.instance_10.setTransform(18,79.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:87.4},34).to({y:79.4},45).wait(1));

	// animation
	this.instance_11 = new lib.hero2_accessory_main_mc();
	this.instance_11.setTransform(-32,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:178.5},34).to({y:170.5},45).wait(1));

	// animation
	this.instance_12 = new lib.hero2_top_main_mc();
	this.instance_12.setTransform(1.7,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:2},34).to({y:-6},45).wait(1));

	// animation
	this.instance_13 = new lib.hero2_skirt_main_mc();
	this.instance_13.setTransform(15,154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:162.5},34).to({y:154.5},45).wait(1));

	// animation
	this.instance_14 = new lib.hero2_body_mc();
	this.instance_14.setTransform(5,106);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:114},34).to({y:106},45).wait(1));

	// animation
	this.instance_15 = new lib.hero2_hair_main_mc();
	this.instance_15.setTransform(0,-173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({rotation:4.5,x:6.7,y:-165.2},34).to({rotation:0,x:0,y:-173.5},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159,-376,335,697.5);
p.frameBounds = [rect, new cjs.Rectangle(-158.9,-375.8,335.2,697.5), new cjs.Rectangle(-159.4,-376,336.5,698), new cjs.Rectangle(-159.4,-375.9,336.7,698.1), new cjs.Rectangle(-159.9,-376.1,337.9,698.6), new cjs.Rectangle(-159.8,-375.9,338.1,698.6), new cjs.Rectangle(-160.4,-376.1,339.5,699), new cjs.Rectangle(-160.3,-376,339.7,699.1), new cjs.Rectangle(-160.8,-376.2,340.9,699.6), new cjs.Rectangle(-160.8,-376,341.1,699.6), new cjs.Rectangle(-161.3,-376.3,342.4,700.1), new cjs.Rectangle(-161.2,-376.1,342.6,700.2), new cjs.Rectangle(-161.7,-376.4,343.8,700.7), new cjs.Rectangle(-161.6,-376.1,344,700.7), new cjs.Rectangle(-162.1,-376.4,345.3,701.2), new cjs.Rectangle(-162.1,-376.2,345.5,701.3), new cjs.Rectangle(-162.6,-376.5,346.8,701.7), new cjs.Rectangle(-162.5,-376.3,346.9,701.8), new cjs.Rectangle(-163.1,-376.6,348.2,702.3), new cjs.Rectangle(-163.6,-376.8,349.4,702.8), new cjs.Rectangle(-163.5,-376.6,349.5,702.8), new cjs.Rectangle(-164,-376.9,350.8,703.3), new cjs.Rectangle(-163.9,-376.7,351,703.3), new cjs.Rectangle(-164.4,-376.9,352.3,703.8), new cjs.Rectangle(-164.3,-376.7,352.4,703.9), new cjs.Rectangle(-164.9,-376.9,353.7,704.3), new cjs.Rectangle(-164.8,-376.8,353.8,704.4), new cjs.Rectangle(-165.3,-377,355,704.9), new cjs.Rectangle(-165.2,-376.8,355.2,704.9), new cjs.Rectangle(-165.7,-377.1,356.4,705.4), new cjs.Rectangle(-165.6,-376.8,356.6,705.3), new cjs.Rectangle(-166.1,-377.1,357.8,705.9), new cjs.Rectangle(-166,-376.9,358,705.9), new cjs.Rectangle(-166.5,-377.1,359.2,706.3), new cjs.Rectangle(-167,-377.3,360.4,706.8), new cjs.Rectangle(-166.5,-377,359.2,706.3), new cjs.Rectangle(-166.6,-377.2,359.1,706.3), new cjs.Rectangle(-166,-376.9,357.9,705.8), new cjs.Rectangle(-166.1,-377.1,357.8,705.9), new cjs.Rectangle(-165.6,-376.8,356.7,705.4), new cjs.Rectangle(-165.6,-376.9,356.5,705.3), new cjs.Rectangle(-165.7,-377.1,356.4,705.3), new cjs.Rectangle(-165.2,-376.8,355.2,704.9), new cjs.Rectangle(-165.3,-376.9,355.1,704.8), new cjs.Rectangle(-164.8,-376.7,353.9,704.4), new cjs.Rectangle(-164.8,-376.8,353.8,704.4), new cjs.Rectangle(-164.9,-376.9,353.6,704.2), new cjs.Rectangle(-164.3,-376.6,352.5,703.8), new cjs.Rectangle(-164.4,-376.8,352.3,703.8), new cjs.Rectangle(-163.9,-376.6,351.1,703.4), new cjs.Rectangle(-164,-376.7,351,703.3), new cjs.Rectangle(-164,-376.8,350.8,703.3), new cjs.Rectangle(-163.5,-376.6,349.6,702.9), new cjs.Rectangle(-163.6,-376.7,349.5,702.8), new cjs.Rectangle(-163,-376.3,348.3,702.3), new cjs.Rectangle(-163.1,-376.5,348.2,702.2), new cjs.Rectangle(-163.1,-376.7,348,702.3), new cjs.Rectangle(-162.5,-376.3,346.8,701.7), new cjs.Rectangle(-162.6,-376.4,346.7,701.7), new cjs.Rectangle(-162.1,-376.2,345.5,701.3), new cjs.Rectangle(-162.1,-376.4,345.3,701.3), new cjs.Rectangle(-162.2,-376.5,345.2,701.2), new cjs.Rectangle(-161.7,-376.2,344,700.7), new cjs.Rectangle(-161.8,-376.3,343.9,700.7), new cjs.Rectangle(-161.2,-376,342.7,700.1), new cjs.Rectangle(-161.3,-376.1,342.5,700.1), new cjs.Rectangle(-161.3,-376.3,342.4,700.1), new cjs.Rectangle(-160.8,-376,341.1,699.6), new cjs.Rectangle(-160.8,-376.1,341,699.5), new cjs.Rectangle(-160.3,-375.8,339.8,699.1), new cjs.Rectangle(-160.3,-376,339.6,699.1), new cjs.Rectangle(-160.4,-376.1,339.5,699), new cjs.Rectangle(-159.8,-375.9,338.2,698.6), new cjs.Rectangle(-159.9,-376,338,698.5), new cjs.Rectangle(-159.3,-375.7,336.8,698.1), new cjs.Rectangle(-159.4,-375.8,336.7,698), new cjs.Rectangle(-159.5,-375.9,336.6,698), new cjs.Rectangle(-158.9,-375.7,335.3,697.5), new cjs.Rectangle(-159,-375.8,335.2,697.5), new cjs.Rectangle(-159,-376,335,697.5)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero1_hat_all_mc();
	this.headdress.setTransform(1,-280.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:5,x:18.8,y:-270.6},39).to({rotation:0,x:1,y:-280.5},50).wait(1));

	// glasses
	this.glasses = new lib.hero1_glasses_all_mc();
	this.glasses.setTransform(-1.5,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.glasses).to({rotation:5,x:4.9,y:-140.4},39).to({rotation:0,x:-1.5,y:-149.5},50).wait(1));

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(-3,-114);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1,skewX:1.2,skewY:5,x:1.3,y:-105.1},39).to({scaleY:1,skewX:0,skewY:0,x:-3,y:-114},50).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(2,-184);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:5,x:11.4,y:-174.5},39).to({rotation:0,x:2,y:-184},50).wait(1));

	// body
	this.instance = new lib.hero1_hands_mc();
	this.instance.setTransform(9.9,130.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:139.3},39).to({y:130.3},50).wait(1));

	// accessory
	this.accessory = new lib.hero1_accessory_all_mc();
	this.accessory.setTransform(-55.5,186.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({y:195.5},39).to({y:186.5},50).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// eyes 
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// faceart
	this.faceart = new lib.hero1_rouge_all_mc();
	this.faceart.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.faceart).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// body
	this.instance_1 = new lib.hero1_head_mc();
	this.instance_1.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(24,83);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:92},39).to({y:83},50).wait(1));

	// top
	this.top = new lib.hero1_top_all_mc();
	this.top.setTransform(-8,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.top).to({y:2.5},39).to({y:-6.5},50).wait(1));

	// bottom
	this.bottom = new lib.hero1_skirt_all_mc();
	this.bottom.setTransform(35,142.5);

	this.timeline.addTween(cjs.Tween.get(this.bottom).to({y:151.5},39).to({y:142.5},50).wait(1));

	// body
	this.instance_2 = new lib.hero1_body_mc();
	this.instance_2.setTransform(21.5,100.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:109.9},39).to({y:100.9},50).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(2,-184);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:5,x:11.4,y:-174.5},39).to({rotation:0,x:2,y:-184},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.6,-324.5,269.5,624.4);
p.frameBounds = [rect, new cjs.Rectangle(-133.3,-324.2,269.3,624.4), new cjs.Rectangle(-133.3,-324.3,269.3,624.7), new cjs.Rectangle(-133.1,-324.1,269,624.7), new cjs.Rectangle(-133.1,-324.1,269.3,625), new cjs.Rectangle(-132.9,-323.9,269.4,625), new cjs.Rectangle(-132.9,-324,269.9,625.3), new cjs.Rectangle(-132.7,-323.8,270,625.3), new cjs.Rectangle(-132.6,-323.8,270.5,625.6), new cjs.Rectangle(-132.4,-323.6,270.6,625.6), new cjs.Rectangle(-132.4,-323.6,271.1,625.8), new cjs.Rectangle(-132.2,-323.4,271.2,625.8), new cjs.Rectangle(-132.2,-323.4,271.7,626.1), new cjs.Rectangle(-132,-323.2,271.8,626.2), new cjs.Rectangle(-131.9,-323.3,272.3,626.5), new cjs.Rectangle(-131.7,-323,272.4,626.4), new cjs.Rectangle(-131.7,-323.1,272.9,626.7), new cjs.Rectangle(-131.5,-322.9,273,626.7), new cjs.Rectangle(-131.5,-322.9,273.5,627), new cjs.Rectangle(-131.2,-322.7,273.6,627.1), new cjs.Rectangle(-131.2,-322.8,274,627.4), new cjs.Rectangle(-131,-322.5,274.2,627.3), new cjs.Rectangle(-130.9,-322.6,274.7,627.6), new cjs.Rectangle(-130.8,-322.4,274.8,627.6), new cjs.Rectangle(-130.7,-322.4,275.3,627.9), new cjs.Rectangle(-130.5,-322.2,275.3,627.9), new cjs.Rectangle(-130.4,-322.2,275.8,628.2), new cjs.Rectangle(-130.2,-322,275.9,628.2), new cjs.Rectangle(-130.1,-322.1,276.4,628.5), new cjs.Rectangle(-129.9,-321.9,276.5,628.5), new cjs.Rectangle(-129.9,-321.8,276.9,628.7), new cjs.Rectangle(-129.7,-321.6,277,628.7), new cjs.Rectangle(-129.6,-321.7,277.5,629), new cjs.Rectangle(-129.4,-321.5,277.5,629), new cjs.Rectangle(-129.4,-321.5,278,629.3), new cjs.Rectangle(-129.2,-321.3,278.1,629.3), new cjs.Rectangle(-129.1,-321.3,278.6,629.6), new cjs.Rectangle(-128.9,-321.1,278.6,629.6), new cjs.Rectangle(-128.9,-321.1,279.1,629.8), new cjs.Rectangle(-128.8,-321.2,279.6,630.2), new cjs.Rectangle(-128.8,-321,279.1,629.8), new cjs.Rectangle(-129,-321.2,279.1,629.8), new cjs.Rectangle(-128.9,-321.2,278.6,629.6), new cjs.Rectangle(-129.1,-321.3,278.6,629.6), new cjs.Rectangle(-129.1,-321.2,278.1,629.3), new cjs.Rectangle(-129.3,-321.4,278,629.3), new cjs.Rectangle(-129.4,-321.6,278,629.3), new cjs.Rectangle(-129.5,-321.5,277.5,629), new cjs.Rectangle(-129.6,-321.6,277.4,629), new cjs.Rectangle(-129.7,-321.5,277,628.7), new cjs.Rectangle(-129.9,-321.7,276.9,628.7), new cjs.Rectangle(-130,-321.9,276.9,628.7), new cjs.Rectangle(-129.9,-321.8,276.4,628.4), new cjs.Rectangle(-130.1,-322,276.4,628.4), new cjs.Rectangle(-130.2,-321.9,275.9,628.1), new cjs.Rectangle(-130.3,-322.1,275.8,628.1), new cjs.Rectangle(-130.5,-322.2,275.8,628.1), new cjs.Rectangle(-130.5,-322.1,275.3,627.8), new cjs.Rectangle(-130.7,-322.3,275.2,627.9), new cjs.Rectangle(-130.6,-322.2,274.8,627.6), new cjs.Rectangle(-130.8,-322.4,274.7,627.6), new cjs.Rectangle(-131,-322.6,274.7,627.6), new cjs.Rectangle(-131,-322.5,274.2,627.3), new cjs.Rectangle(-131.2,-322.7,274.1,627.3), new cjs.Rectangle(-131.2,-322.5,273.6,627), new cjs.Rectangle(-131.3,-322.7,273.6,626.9), new cjs.Rectangle(-131.5,-322.9,273.5,627), new cjs.Rectangle(-131.5,-322.8,273,626.7), new cjs.Rectangle(-131.6,-323,272.9,626.7), new cjs.Rectangle(-131.6,-322.9,272.5,626.4), new cjs.Rectangle(-131.8,-323,272.4,626.4), new cjs.Rectangle(-131.9,-323.2,272.3,626.4), new cjs.Rectangle(-131.9,-323.1,271.8,626.1), new cjs.Rectangle(-132.1,-323.3,271.8,626.1), new cjs.Rectangle(-132.1,-323.2,271.2,625.9), new cjs.Rectangle(-132.2,-323.4,271.2,625.8), new cjs.Rectangle(-132.4,-323.5,271.1,625.8), new cjs.Rectangle(-132.5,-323.5,270.6,625.6), new cjs.Rectangle(-132.5,-323.6,270.6,625.6), new cjs.Rectangle(-132.5,-323.5,270,625.3), new cjs.Rectangle(-132.8,-323.7,270,625.3), new cjs.Rectangle(-132.9,-323.8,269.9,625.2), new cjs.Rectangle(-132.9,-323.7,269.4,624.9), new cjs.Rectangle(-133.1,-323.9,269.4,625), new cjs.Rectangle(-133,-323.8,269,624.7), new cjs.Rectangle(-133.2,-324,269.2,624.6), new cjs.Rectangle(-133.4,-324.2,269.4,624.7), new cjs.Rectangle(-133.3,-324.1,269.3,624.4), new cjs.Rectangle(-133.4,-324.3,269.4,624.4), new cjs.Rectangle(-133.6,-324.5,269.5,624.4)];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_hat_main_mc();
	this.instance.setTransform(1,-280.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5,x:18.8,y:-270.6},39).to({rotation:0,x:1,y:-280.5},50).wait(1));

	// animation
	this.instance_1 = new lib.hero1_fringe_main_mc();
	this.instance_1.setTransform(2,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5,x:11.4,y:-174.5},39).to({rotation:0,x:2,y:-184},50).wait(1));

	// animation
	this.instance_2 = new lib.hero1_earrings_main_mc();
	this.instance_2.setTransform(-3,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,skewX:1.2,skewY:5,x:1.3,y:-105.1},39).to({scaleY:1,skewX:0,skewY:0,x:-3,y:-114},50).wait(1));

	// animation
	this.instance_3 = new lib.hero1_hands_mc();
	this.instance_3.setTransform(9.9,130.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:139.3},39).to({y:130.3},50).wait(1));

	// animation
	this.instance_4 = new lib.hero1_accessory_main_mc();
	this.instance_4.setTransform(-55.5,186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:195.5},39).to({y:186.5},50).wait(1));

	// animation
	this.instance_5 = new lib.hero1_eyebrows_main_mc();
	this.instance_5.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// animation
	this.instance_6 = new lib.hero1_eyes_main_mc();
	this.instance_6.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// animation
	this.instance_7 = new lib.hero1_shadows_main_mc();
	this.instance_7.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// animation
	this.instance_8 = new lib.hero1_lips_main_mc();
	this.instance_8.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// animation
	this.instance_9 = new lib.hero1_rouge_main_mc();
	this.instance_9.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// animation
	this.instance_10 = new lib.hero1_head_mc();
	this.instance_10.setTransform(-2.5,-178);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:5,x:6.5,y:-168.9},39).to({rotation:0,x:-2.5,y:-178},50).wait(1));

	// animation
	this.instance_11 = new lib.hero1_dress_main_mc();
	this.instance_11.setTransform(24,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:92},39).to({y:83},50).wait(1));

	// animation
	this.instance_12 = new lib.hero1_body_mc();
	this.instance_12.setTransform(21.5,100.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:109.9},39).to({y:100.9},50).wait(1));

	// animation
	this.instance_13 = new lib.hero1_hair_main_mc();
	this.instance_13.setTransform(2,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:5,x:11.4,y:-174.5},39).to({rotation:0,x:2,y:-184},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158,-324.5,325,624.4);
p.frameBounds = [rect, new cjs.Rectangle(-157.8,-324.2,325.2,624.4), new cjs.Rectangle(-158,-324.3,326.1,624.7), new cjs.Rectangle(-157.8,-324.1,326.2,624.7), new cjs.Rectangle(-158,-324.1,327.1,625), new cjs.Rectangle(-157.8,-323.9,327.2,625), new cjs.Rectangle(-158,-324,328.1,625.3), new cjs.Rectangle(-157.8,-323.8,328.2,625.3), new cjs.Rectangle(-158,-323.8,329.1,625.6), new cjs.Rectangle(-157.8,-323.6,329.2,625.6), new cjs.Rectangle(-158,-323.6,330.1,625.8), new cjs.Rectangle(-157.8,-323.4,330.2,625.8), new cjs.Rectangle(-158,-323.4,331.1,626.1), new cjs.Rectangle(-157.8,-323.2,331.2,626.2), new cjs.Rectangle(-157.9,-323.3,332,626.5), new cjs.Rectangle(-157.8,-323,332.2,626.4), new cjs.Rectangle(-157.9,-323.1,333,626.7), new cjs.Rectangle(-157.8,-322.9,333.2,626.7), new cjs.Rectangle(-157.9,-322.9,334,627), new cjs.Rectangle(-157.7,-322.7,334.2,627.1), new cjs.Rectangle(-157.9,-322.8,335,627.4), new cjs.Rectangle(-157.7,-322.5,335.2,627.3), new cjs.Rectangle(-157.9,-322.6,336,627.6), new cjs.Rectangle(-157.7,-322.4,336,627.6), new cjs.Rectangle(-157.8,-322.4,336.9,627.9), new cjs.Rectangle(-157.7,-322.2,337,627.9), new cjs.Rectangle(-157.8,-322.2,337.9,628.2), new cjs.Rectangle(-157.6,-322,338,628.2), new cjs.Rectangle(-157.8,-322.1,338.8,628.5), new cjs.Rectangle(-157.5,-321.9,338.9,628.5), new cjs.Rectangle(-157.7,-321.8,339.8,628.7), new cjs.Rectangle(-157.5,-321.6,339.9,628.7), new cjs.Rectangle(-157.7,-321.7,340.7,629), new cjs.Rectangle(-157.5,-321.5,340.8,629), new cjs.Rectangle(-157.6,-321.5,341.6,629.3), new cjs.Rectangle(-157.4,-321.3,341.7,629.3), new cjs.Rectangle(-157.6,-321.3,342.5,629.6), new cjs.Rectangle(-157.4,-321.1,342.7,629.6), new cjs.Rectangle(-157.5,-321.1,343.5,629.8), new cjs.Rectangle(-157.7,-321.2,344.4,630.2), new cjs.Rectangle(-157.5,-321,343.5,629.8), new cjs.Rectangle(-157.7,-321.2,343.4,629.8), new cjs.Rectangle(-157.4,-321.2,342.6,629.6), new cjs.Rectangle(-157.6,-321.3,342.5,629.6), new cjs.Rectangle(-157.4,-321.2,341.8,629.3), new cjs.Rectangle(-157.6,-321.4,341.7,629.3), new cjs.Rectangle(-157.7,-321.6,341.6,629.3), new cjs.Rectangle(-157.5,-321.5,340.8,629), new cjs.Rectangle(-157.7,-321.6,340.7,629), new cjs.Rectangle(-157.5,-321.5,339.9,628.7), new cjs.Rectangle(-157.7,-321.7,339.8,628.7), new cjs.Rectangle(-157.7,-321.9,339.7,628.7), new cjs.Rectangle(-157.6,-321.8,338.9,628.4), new cjs.Rectangle(-157.7,-322,338.8,628.4), new cjs.Rectangle(-157.6,-321.9,338.1,628.1), new cjs.Rectangle(-157.6,-322.1,337.9,628.1), new cjs.Rectangle(-157.9,-322.2,337.8,628.1), new cjs.Rectangle(-157.7,-322.1,337.1,627.8), new cjs.Rectangle(-157.8,-322.3,337,627.9), new cjs.Rectangle(-157.6,-322.2,336.1,627.6), new cjs.Rectangle(-157.8,-322.4,336,627.6), new cjs.Rectangle(-157.9,-322.6,335.9,627.6), new cjs.Rectangle(-157.7,-322.5,335.1,627.3), new cjs.Rectangle(-157.9,-322.7,335,627.3), new cjs.Rectangle(-157.7,-322.5,334.2,627), new cjs.Rectangle(-157.8,-322.7,334.1,626.9), new cjs.Rectangle(-158,-322.9,334,627), new cjs.Rectangle(-157.8,-322.8,333.2,626.7), new cjs.Rectangle(-157.9,-323,333.1,626.7), new cjs.Rectangle(-157.6,-322.9,332.3,626.4), new cjs.Rectangle(-157.8,-323,332.2,626.4), new cjs.Rectangle(-157.9,-323.2,332,626.4), new cjs.Rectangle(-157.8,-323.1,331.3,626.1), new cjs.Rectangle(-158,-323.3,331.2,626.1), new cjs.Rectangle(-157.7,-323.2,330.3,625.9), new cjs.Rectangle(-157.8,-323.4,330.2,625.8), new cjs.Rectangle(-158,-323.5,330.1,625.8), new cjs.Rectangle(-157.8,-323.5,329.2,625.6), new cjs.Rectangle(-157.9,-323.6,329.1,625.6), new cjs.Rectangle(-157.7,-323.5,328.3,625.3), new cjs.Rectangle(-157.9,-323.7,328.2,625.3), new cjs.Rectangle(-158,-323.8,328.1,625.2), new cjs.Rectangle(-157.8,-323.7,327.2,624.9), new cjs.Rectangle(-158,-323.9,327.1,625), new cjs.Rectangle(-157.8,-323.8,326.3,624.7), new cjs.Rectangle(-157.9,-324,326.2,624.6), new cjs.Rectangle(-158.1,-324.2,326.1,624.7), new cjs.Rectangle(-157.8,-324.1,325.2,624.4), new cjs.Rectangle(-157.9,-324.3,325.1,624.4), new cjs.Rectangle(-158,-324.5,325,624.4)];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.2,0.65,0.65,0,0,0,0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.hairstyle_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hairstyle_check_3_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,alpha:0.398},24).to({scaleX:1,scaleY:1,alpha:0.898},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, new cjs.Rectangle(-139.7,-139.7,279.6,279.6), new cjs.Rectangle(-139.5,-139.5,279.2,279.2), new cjs.Rectangle(-139.3,-139.3,278.8,278.8), new cjs.Rectangle(-139.1,-139.1,278.4,278.4), new cjs.Rectangle(-138.9,-138.9,277.9,277.9), new cjs.Rectangle(-138.7,-138.7,277.5,277.5), new cjs.Rectangle(-138.5,-138.5,277.1,277.1), new cjs.Rectangle(-138.3,-138.3,276.7,276.7), new cjs.Rectangle(-138.1,-138.1,276.3,276.3), new cjs.Rectangle(-137.9,-137.9,275.9,275.9), new cjs.Rectangle(-137.7,-137.7,275.4,275.4), new cjs.Rectangle(-137.5,-137.5,275,275), new cjs.Rectangle(-137.2,-137.2,274.6,274.6), new cjs.Rectangle(-137,-137,274.2,274.2), new cjs.Rectangle(-136.8,-136.8,273.8,273.8), new cjs.Rectangle(-136.6,-136.6,273.4,273.4), new cjs.Rectangle(-136.4,-136.4,272.9,272.9), new cjs.Rectangle(-136.2,-136.2,272.5,272.5), new cjs.Rectangle(-136,-136,272.1,272.1), new cjs.Rectangle(-135.8,-135.8,271.7,271.7), new cjs.Rectangle(-135.6,-135.6,271.3,271.3), new cjs.Rectangle(-135.4,-135.4,270.9,270.9), new cjs.Rectangle(-135.2,-135.2,270.4,270.4), new cjs.Rectangle(-135,-135,270,270), new cjs.Rectangle(-135.1,-135.1,270.4,270.4), new cjs.Rectangle(-135.3,-135.3,270.8,270.8), new cjs.Rectangle(-135.5,-135.5,271.2,271.2), new cjs.Rectangle(-135.7,-135.7,271.6,271.6), new cjs.Rectangle(-135.9,-135.9,272,272), new cjs.Rectangle(-136.1,-136.1,272.4,272.4), new cjs.Rectangle(-136.3,-136.3,272.8,272.8), new cjs.Rectangle(-136.5,-136.5,273.2,273.2), new cjs.Rectangle(-136.7,-136.7,273.6,273.6), new cjs.Rectangle(-136.9,-136.9,274,274), new cjs.Rectangle(-137.1,-137.1,274.4,274.4), new cjs.Rectangle(-137.3,-137.3,274.8,274.8), new cjs.Rectangle(-137.5,-137.5,275.2,275.2), new cjs.Rectangle(-137.7,-137.7,275.6,275.6), new cjs.Rectangle(-137.9,-137.9,276,276), new cjs.Rectangle(-138.1,-138.1,276.4,276.4), new cjs.Rectangle(-138.3,-138.3,276.8,276.8), new cjs.Rectangle(-138.5,-138.5,277.2,277.2), new cjs.Rectangle(-138.7,-138.7,277.6,277.6), new cjs.Rectangle(-138.9,-138.9,278,278), new cjs.Rectangle(-139.1,-139.1,278.4,278.4), new cjs.Rectangle(-139.3,-139.3,278.8,278.8), new cjs.Rectangle(-139.5,-139.5,279.2,279.2), new cjs.Rectangle(-139.7,-139.7,279.6,279.6), new cjs.Rectangle(-140,-140,280,280)];


(lib.hairstyle_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hairstyle_check_3_1_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,alpha:0.398},24).to({scaleX:1,scaleY:1,alpha:0.898},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, new cjs.Rectangle(-139.7,-139.7,279.6,279.6), new cjs.Rectangle(-139.5,-139.5,279.2,279.2), new cjs.Rectangle(-139.3,-139.3,278.8,278.8), new cjs.Rectangle(-139.1,-139.1,278.4,278.4), new cjs.Rectangle(-138.9,-138.9,277.9,277.9), new cjs.Rectangle(-138.7,-138.7,277.5,277.5), new cjs.Rectangle(-138.5,-138.5,277.1,277.1), new cjs.Rectangle(-138.3,-138.3,276.7,276.7), new cjs.Rectangle(-138.1,-138.1,276.3,276.3), new cjs.Rectangle(-137.9,-137.9,275.9,275.9), new cjs.Rectangle(-137.7,-137.7,275.4,275.4), new cjs.Rectangle(-137.5,-137.5,275,275), new cjs.Rectangle(-137.2,-137.2,274.6,274.6), new cjs.Rectangle(-137,-137,274.2,274.2), new cjs.Rectangle(-136.8,-136.8,273.8,273.8), new cjs.Rectangle(-136.6,-136.6,273.4,273.4), new cjs.Rectangle(-136.4,-136.4,272.9,272.9), new cjs.Rectangle(-136.2,-136.2,272.5,272.5), new cjs.Rectangle(-136,-136,272.1,272.1), new cjs.Rectangle(-135.8,-135.8,271.7,271.7), new cjs.Rectangle(-135.6,-135.6,271.3,271.3), new cjs.Rectangle(-135.4,-135.4,270.9,270.9), new cjs.Rectangle(-135.2,-135.2,270.4,270.4), new cjs.Rectangle(-135,-135,270,270), new cjs.Rectangle(-135.1,-135.1,270.4,270.4), new cjs.Rectangle(-135.3,-135.3,270.8,270.8), new cjs.Rectangle(-135.5,-135.5,271.2,271.2), new cjs.Rectangle(-135.7,-135.7,271.6,271.6), new cjs.Rectangle(-135.9,-135.9,272,272), new cjs.Rectangle(-136.1,-136.1,272.4,272.4), new cjs.Rectangle(-136.3,-136.3,272.8,272.8), new cjs.Rectangle(-136.5,-136.5,273.2,273.2), new cjs.Rectangle(-136.7,-136.7,273.6,273.6), new cjs.Rectangle(-136.9,-136.9,274,274), new cjs.Rectangle(-137.1,-137.1,274.4,274.4), new cjs.Rectangle(-137.3,-137.3,274.8,274.8), new cjs.Rectangle(-137.5,-137.5,275.2,275.2), new cjs.Rectangle(-137.7,-137.7,275.6,275.6), new cjs.Rectangle(-137.9,-137.9,276,276), new cjs.Rectangle(-138.1,-138.1,276.4,276.4), new cjs.Rectangle(-138.3,-138.3,276.8,276.8), new cjs.Rectangle(-138.5,-138.5,277.2,277.2), new cjs.Rectangle(-138.7,-138.7,277.6,277.6), new cjs.Rectangle(-138.9,-138.9,278,278), new cjs.Rectangle(-139.1,-139.1,278.4,278.4), new cjs.Rectangle(-139.3,-139.3,278.8,278.8), new cjs.Rectangle(-139.5,-139.5,279.2,279.2), new cjs.Rectangle(-139.7,-139.7,279.6,279.6), new cjs.Rectangle(-140,-140,280,280)];


(lib.hairstyle_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hairstyle_check_1_2_mc();

	this.instance_1 = new lib.hairstyle_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect];


(lib.hairstyle_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hairstyle_check_1_1_mc();

	this.instance_1 = new lib.hairstyle_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflgAAnwQAAnwFflfQFflfHwgBQHxABFfFfQFfFfAAHwQAAHwlfFgQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.glasses_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.forward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.forward_icon_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.faceart_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.faceart_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.faceart_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.eyes_2_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_2_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-120,210,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes_1_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_1_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-120,200,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyebrows_2_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyebrows_2_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyebrows_1_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyebrows_1_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-45,250,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.dress_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.dress_check_3_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,alpha:0.398},24).to({scaleX:1,scaleY:1,alpha:0.898},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, new cjs.Rectangle(-209.6,-209.6,419.4,419.4), new cjs.Rectangle(-209.3,-209.3,418.8,418.8), new cjs.Rectangle(-209,-209,418.1,418.1), new cjs.Rectangle(-208.7,-208.7,417.5,417.5), new cjs.Rectangle(-208.4,-208.4,416.9,416.9), new cjs.Rectangle(-208.1,-208.1,416.3,416.3), new cjs.Rectangle(-207.8,-207.8,415.6,415.6), new cjs.Rectangle(-207.5,-207.5,415,415), new cjs.Rectangle(-207.1,-207.1,414.4,414.4), new cjs.Rectangle(-206.8,-206.8,413.8,413.8), new cjs.Rectangle(-206.5,-206.5,413.1,413.1), new cjs.Rectangle(-206.2,-206.2,412.5,412.5), new cjs.Rectangle(-205.9,-205.9,411.9,411.9), new cjs.Rectangle(-205.6,-205.6,411.3,411.3), new cjs.Rectangle(-205.3,-205.3,410.6,410.6), new cjs.Rectangle(-204.9,-204.9,410,410), new cjs.Rectangle(-204.6,-204.6,409.4,409.4), new cjs.Rectangle(-204.3,-204.3,408.8,408.8), new cjs.Rectangle(-204,-204,408.1,408.1), new cjs.Rectangle(-203.7,-203.7,407.5,407.5), new cjs.Rectangle(-203.4,-203.4,406.9,406.9), new cjs.Rectangle(-203.1,-203.1,406.3,406.3), new cjs.Rectangle(-202.8,-202.8,405.7,405.7), new cjs.Rectangle(-202.5,-202.5,405,405), new cjs.Rectangle(-202.7,-202.7,405.6,405.6), new cjs.Rectangle(-203,-203,406.2,406.2), new cjs.Rectangle(-203.3,-203.3,406.8,406.8), new cjs.Rectangle(-203.6,-203.6,407.4,407.4), new cjs.Rectangle(-203.9,-203.9,408,408), new cjs.Rectangle(-204.2,-204.2,408.6,408.6), new cjs.Rectangle(-204.5,-204.5,409.2,409.2), new cjs.Rectangle(-204.8,-204.8,409.8,409.8), new cjs.Rectangle(-205.1,-205.1,410.4,410.4), new cjs.Rectangle(-205.4,-205.4,411,411), new cjs.Rectangle(-205.7,-205.7,411.6,411.6), new cjs.Rectangle(-206,-206,412.2,412.2), new cjs.Rectangle(-206.3,-206.3,412.8,412.8), new cjs.Rectangle(-206.6,-206.6,413.4,413.4), new cjs.Rectangle(-206.9,-206.9,414,414), new cjs.Rectangle(-207.2,-207.2,414.6,414.6), new cjs.Rectangle(-207.5,-207.5,415.2,415.2), new cjs.Rectangle(-207.8,-207.8,415.8,415.8), new cjs.Rectangle(-208.1,-208.1,416.4,416.4), new cjs.Rectangle(-208.4,-208.4,417,417), new cjs.Rectangle(-208.7,-208.7,417.6,417.6), new cjs.Rectangle(-209,-209,418.2,418.2), new cjs.Rectangle(-209.3,-209.3,418.8,418.8), new cjs.Rectangle(-209.6,-209.6,419.4,419.4), new cjs.Rectangle(-210,-210,420,420)];


(lib.dress_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.dress_check_3_1_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,alpha:0.398},24).to({scaleX:1,scaleY:1,alpha:0.898},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, new cjs.Rectangle(-209.6,-209.6,419.4,419.4), new cjs.Rectangle(-209.3,-209.3,418.8,418.8), new cjs.Rectangle(-209,-209,418.1,418.1), new cjs.Rectangle(-208.7,-208.7,417.5,417.5), new cjs.Rectangle(-208.4,-208.4,416.9,416.9), new cjs.Rectangle(-208.1,-208.1,416.3,416.3), new cjs.Rectangle(-207.8,-207.8,415.6,415.6), new cjs.Rectangle(-207.5,-207.5,415,415), new cjs.Rectangle(-207.1,-207.1,414.4,414.4), new cjs.Rectangle(-206.8,-206.8,413.8,413.8), new cjs.Rectangle(-206.5,-206.5,413.1,413.1), new cjs.Rectangle(-206.2,-206.2,412.5,412.5), new cjs.Rectangle(-205.9,-205.9,411.9,411.9), new cjs.Rectangle(-205.6,-205.6,411.3,411.3), new cjs.Rectangle(-205.3,-205.3,410.6,410.6), new cjs.Rectangle(-204.9,-204.9,410,410), new cjs.Rectangle(-204.6,-204.6,409.4,409.4), new cjs.Rectangle(-204.3,-204.3,408.8,408.8), new cjs.Rectangle(-204,-204,408.1,408.1), new cjs.Rectangle(-203.7,-203.7,407.5,407.5), new cjs.Rectangle(-203.4,-203.4,406.9,406.9), new cjs.Rectangle(-203.1,-203.1,406.3,406.3), new cjs.Rectangle(-202.8,-202.8,405.7,405.7), new cjs.Rectangle(-202.5,-202.5,405,405), new cjs.Rectangle(-202.7,-202.7,405.6,405.6), new cjs.Rectangle(-203,-203,406.2,406.2), new cjs.Rectangle(-203.3,-203.3,406.8,406.8), new cjs.Rectangle(-203.6,-203.6,407.4,407.4), new cjs.Rectangle(-203.9,-203.9,408,408), new cjs.Rectangle(-204.2,-204.2,408.6,408.6), new cjs.Rectangle(-204.5,-204.5,409.2,409.2), new cjs.Rectangle(-204.8,-204.8,409.8,409.8), new cjs.Rectangle(-205.1,-205.1,410.4,410.4), new cjs.Rectangle(-205.4,-205.4,411,411), new cjs.Rectangle(-205.7,-205.7,411.6,411.6), new cjs.Rectangle(-206,-206,412.2,412.2), new cjs.Rectangle(-206.3,-206.3,412.8,412.8), new cjs.Rectangle(-206.6,-206.6,413.4,413.4), new cjs.Rectangle(-206.9,-206.9,414,414), new cjs.Rectangle(-207.2,-207.2,414.6,414.6), new cjs.Rectangle(-207.5,-207.5,415.2,415.2), new cjs.Rectangle(-207.8,-207.8,415.8,415.8), new cjs.Rectangle(-208.1,-208.1,416.4,416.4), new cjs.Rectangle(-208.4,-208.4,417,417), new cjs.Rectangle(-208.7,-208.7,417.6,417.6), new cjs.Rectangle(-209,-209,418.2,418.2), new cjs.Rectangle(-209.3,-209.3,418.8,418.8), new cjs.Rectangle(-209.6,-209.6,419.4,419.4), new cjs.Rectangle(-210,-210,420,420)];


(lib.dress_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dress_check_1_2_mc();

	this.instance_1 = new lib.dress_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect];


(lib.dress_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dress_check_1_1_mc();

	this.instance_1 = new lib.dress_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.cosmic_star_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cosmic_star_1_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},14).to({scaleX:0.9,scaleY:0.9,rotation:90},10).to({scaleX:0.8,scaleY:0.8,rotation:180},10).to({scaleX:0.6,scaleY:0.6,rotation:270},10).to({scaleX:0.4,scaleY:0.4,rotation:360},10).to({alpha:0.012},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, new cjs.Rectangle(-31.4,-31.4,62.9,62.9), new cjs.Rectangle(-32.8,-32.8,65.7,65.7), new cjs.Rectangle(-34.2,-34.2,68.6,68.6), new cjs.Rectangle(-35.7,-35.7,71.5,71.5), new cjs.Rectangle(-37.1,-37.1,74.3,74.3), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-39.9,-39.9,80,80), new cjs.Rectangle(-41.4,-41.4,82.9,82.9), new cjs.Rectangle(-42.8,-42.8,85.7,85.7), new cjs.Rectangle(-44.2,-44.2,88.6,88.6), new cjs.Rectangle(-45.7,-45.7,91.5,91.5), new cjs.Rectangle(-47.1,-47.1,94.3,94.3), new cjs.Rectangle(-48.5,-48.5,97.2,97.2), new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-56.6,-56.6,113.3,113.3), new cjs.Rectangle(-61.6,-61.5,123.2,123.2), new cjs.Rectangle(-65.1,-65.1,130.4,130.4), new cjs.Rectangle(-66.8,-66.9,133.8,133.8), new cjs.Rectangle(-67.1,-67.1,134.3,134.3), new cjs.Rectangle(-65.5,-65.5,131.1,131.1), new cjs.Rectangle(-62.4,-62.4,124.9,124.9), new cjs.Rectangle(-57.8,-57.8,115.7,115.7), new cjs.Rectangle(-52.1,-52,104.1,104.1), new cjs.Rectangle(-45,-45,90,90), new cjs.Rectangle(-50.9,-50.8,101.8,101.8), new cjs.Rectangle(-55.3,-55.2,110.6,110.6), new cjs.Rectangle(-58.5,-58.4,116.9,116.9), new cjs.Rectangle(-59.9,-59.9,119.9,119.9), new cjs.Rectangle(-60.1,-60.1,120.2,120.2), new cjs.Rectangle(-58.5,-58.5,117.1,117.1), new cjs.Rectangle(-55.8,-55.8,111.6,111.6), new cjs.Rectangle(-51.6,-51.5,103.1,103.1), new cjs.Rectangle(-46.3,-46.3,92.6,92.6), new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-44.6,-44.6,89.2,89.2), new cjs.Rectangle(-47.8,-47.8,95.6,95.6), new cjs.Rectangle(-49.7,-49.7,99.4,99.4), new cjs.Rectangle(-50.2,-50.2,100.4,100.4), new cjs.Rectangle(-49.5,-49.5,99,99), new cjs.Rectangle(-47.4,-47.4,94.8,94.8), new cjs.Rectangle(-44.3,-44.3,88.7,88.7), new cjs.Rectangle(-40.2,-40.2,80.5,80.5), new cjs.Rectangle(-35.4,-35.4,70.9,70.9), new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-33.1,-33.2,66.3,66.3), new cjs.Rectangle(-35.1,-35.2,70.4,70.4), new cjs.Rectangle(-36.2,-36.3,72.6,72.6), new cjs.Rectangle(-36.2,-36.2,72.5,72.5), new cjs.Rectangle(-35.3,-35.3,70.7,70.7), new cjs.Rectangle(-33.4,-33.4,67,67), new cjs.Rectangle(-30.8,-30.9,61.8,61.8), new cjs.Rectangle(-27.6,-27.6,55.3,55.3), new cjs.Rectangle(-24,-23.9,48,48), new cjs.Rectangle(-20,-20,40,40), rect=new cjs.Rectangle(-19.9,-19.9,40,40), rect, rect, rect, new cjs.Rectangle(-20,-20,40,40)];


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


(lib.bottom_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_6_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.bottom_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_6_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.bottom_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_5_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.bottom_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_5_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.bottom_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_4_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_4_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_3_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_3_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_2_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_2_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_1_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_1_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
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


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.bg_title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},29).to({alpha:1},30).wait(1));

	// graph
	this.instance_1 = new lib.bg_title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-120,500,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_starfish_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.starfish_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97},29).to({scaleX:1,scaleY:0.93},60).to({scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-18,140,60);
p.frameBounds = [rect, new cjs.Rectangle(-67.9,-18,139.9,60), new cjs.Rectangle(-67.8,-18,139.7,60), new cjs.Rectangle(-67.7,-18,139.6,60), new cjs.Rectangle(-67.7,-18,139.5,60), new cjs.Rectangle(-67.6,-18,139.3,60), rect=new cjs.Rectangle(-67.5,-18,139.1,60), rect, new cjs.Rectangle(-67.4,-18,138.9,60), new cjs.Rectangle(-67.3,-18,138.8,60), new cjs.Rectangle(-67.3,-18,138.6,60), new cjs.Rectangle(-67.2,-18,138.5,60), new cjs.Rectangle(-67.1,-18,138.4,60), new cjs.Rectangle(-67.1,-18,138.2,60), new cjs.Rectangle(-67,-18,138.1,60), new cjs.Rectangle(-66.9,-18,138,60), new cjs.Rectangle(-66.9,-18,137.8,60), new cjs.Rectangle(-66.8,-18,137.6,60), new cjs.Rectangle(-66.7,-18,137.5,60), new cjs.Rectangle(-66.7,-18,137.4,60), new cjs.Rectangle(-66.6,-18,137.3,60), new cjs.Rectangle(-66.5,-18,137.1,60), new cjs.Rectangle(-66.5,-18,137,60), new cjs.Rectangle(-66.4,-18,136.9,60), new cjs.Rectangle(-66.3,-18,136.7,60), new cjs.Rectangle(-66.3,-18,136.6,60), new cjs.Rectangle(-66.2,-18,136.4,60), new cjs.Rectangle(-66.1,-18,136.3,60), new cjs.Rectangle(-66.1,-18,136.1,60), new cjs.Rectangle(-66,-18,136,60), new cjs.Rectangle(-66,-17.9,136.1,60), new cjs.Rectangle(-66.1,-17.9,136.1,59.9), new cjs.Rectangle(-66.1,-17.9,136.2,59.8), new cjs.Rectangle(-66.1,-17.9,136.3,59.8), new cjs.Rectangle(-66.2,-17.8,136.4,59.7), new cjs.Rectangle(-66.2,-17.8,136.4,59.6), new cjs.Rectangle(-66.2,-17.8,136.5,59.6), new cjs.Rectangle(-66.3,-17.8,136.6,59.5), new cjs.Rectangle(-66.3,-17.8,136.6,59.4), new cjs.Rectangle(-66.3,-17.7,136.6,59.4), new cjs.Rectangle(-66.4,-17.7,136.8,59.3), new cjs.Rectangle(-66.4,-17.7,136.8,59.2), new cjs.Rectangle(-66.4,-17.7,136.9,59.2), new cjs.Rectangle(-66.5,-17.7,137,59.1), new cjs.Rectangle(-66.5,-17.6,137,59), new cjs.Rectangle(-66.5,-17.6,137.1,59), new cjs.Rectangle(-66.6,-17.6,137.1,58.9), new cjs.Rectangle(-66.6,-17.6,137.2,58.8), new cjs.Rectangle(-66.6,-17.6,137.3,58.8), new cjs.Rectangle(-66.7,-17.5,137.4,58.7), new cjs.Rectangle(-66.7,-17.5,137.4,58.6), new cjs.Rectangle(-66.7,-17.5,137.5,58.6), new cjs.Rectangle(-66.8,-17.5,137.6,58.5), new cjs.Rectangle(-66.8,-17.5,137.6,58.4), new cjs.Rectangle(-66.8,-17.4,137.6,58.4), new cjs.Rectangle(-66.8,-17.4,137.8,58.3), new cjs.Rectangle(-66.9,-17.4,137.8,58.2), new cjs.Rectangle(-66.9,-17.4,137.9,58.2), new cjs.Rectangle(-66.9,-17.4,138,58.1), new cjs.Rectangle(-67,-17.3,138,58), new cjs.Rectangle(-67,-17.3,138.1,58), new cjs.Rectangle(-67,-17.3,138.1,57.9), new cjs.Rectangle(-67.1,-17.3,138.2,57.8), new cjs.Rectangle(-67.1,-17.3,138.3,57.8), new cjs.Rectangle(-67.1,-17.2,138.4,57.7), new cjs.Rectangle(-67.2,-17.2,138.4,57.6), new cjs.Rectangle(-67.2,-17.2,138.5,57.6), new cjs.Rectangle(-67.2,-17.2,138.6,57.5), new cjs.Rectangle(-67.3,-17.2,138.6,57.4), new cjs.Rectangle(-67.3,-17.1,138.6,57.4), new cjs.Rectangle(-67.3,-17.1,138.8,57.3), new cjs.Rectangle(-67.4,-17.1,138.8,57.2), new cjs.Rectangle(-67.4,-17.1,138.9,57.2), new cjs.Rectangle(-67.4,-17.1,139,57.1), new cjs.Rectangle(-67.5,-17,139,57), new cjs.Rectangle(-67.5,-17,139.1,57), new cjs.Rectangle(-67.5,-17,139.1,56.9), new cjs.Rectangle(-67.6,-17,139.2,56.8), new cjs.Rectangle(-67.6,-17,139.3,56.8), new cjs.Rectangle(-67.6,-16.9,139.4,56.7), new cjs.Rectangle(-67.7,-16.9,139.4,56.6), new cjs.Rectangle(-67.7,-16.9,139.5,56.6), new cjs.Rectangle(-67.7,-16.9,139.6,56.5), new cjs.Rectangle(-67.8,-16.9,139.6,56.4), new cjs.Rectangle(-67.8,-16.8,139.6,56.4), new cjs.Rectangle(-67.8,-16.8,139.8,56.3), new cjs.Rectangle(-67.9,-16.8,139.8,56.2), new cjs.Rectangle(-67.9,-16.8,139.9,56.2), new cjs.Rectangle(-67.9,-16.8,140,56.1), new cjs.Rectangle(-68,-16.8,140,56), new cjs.Rectangle(-67.9,-16.8,140,56.2), new cjs.Rectangle(-67.9,-16.8,140,56.3), new cjs.Rectangle(-67.9,-16.9,140,56.4), new cjs.Rectangle(-67.9,-16.9,140,56.6), new cjs.Rectangle(-67.9,-16.9,140,56.7), new cjs.Rectangle(-67.9,-17,140,56.8), new cjs.Rectangle(-67.9,-17,140,57), new cjs.Rectangle(-67.9,-17.1,140,57.1), new cjs.Rectangle(-67.9,-17.1,140,57.2), new cjs.Rectangle(-67.9,-17.1,140,57.4), new cjs.Rectangle(-67.9,-17.2,140,57.5), new cjs.Rectangle(-67.9,-17.2,140,57.6), new cjs.Rectangle(-67.9,-17.3,140,57.8), new cjs.Rectangle(-67.9,-17.3,140,57.9), new cjs.Rectangle(-67.9,-17.3,140,58), new cjs.Rectangle(-67.9,-17.4,140,58.2), new cjs.Rectangle(-67.9,-17.4,140,58.3), new cjs.Rectangle(-67.9,-17.5,140,58.4), new cjs.Rectangle(-67.9,-17.5,140,58.6), new cjs.Rectangle(-67.9,-17.5,140,58.7), new cjs.Rectangle(-67.9,-17.6,140,58.8), new cjs.Rectangle(-67.9,-17.6,140,59), new cjs.Rectangle(-67.9,-17.7,140,59.1), new cjs.Rectangle(-67.9,-17.7,140,59.2), new cjs.Rectangle(-67.9,-17.7,140,59.4), new cjs.Rectangle(-67.9,-17.8,140,59.5), new cjs.Rectangle(-67.9,-17.8,140,59.6), new cjs.Rectangle(-67.9,-17.9,140,59.8), new cjs.Rectangle(-67.9,-17.9,140,59.9), new cjs.Rectangle(-68,-18,140,60)];


(lib.animation_parrot_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.parrot_mc();
	this.instance.setTransform(0,0,1,0.963);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,rotation:-2},19).to({rotation:2},40).to({scaleY:0.96,rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-129,140,260);
p.frameBounds = [rect, new cjs.Rectangle(-101,-129.2,140.1,260.6), new cjs.Rectangle(-101.1,-129.6,140.3,261.2), new cjs.Rectangle(-101.5,-129.9,141.2,262.2), new cjs.Rectangle(-101.6,-130.2,141.4,262.8), new cjs.Rectangle(-102.1,-130.6,142.3,263.9), new cjs.Rectangle(-102.2,-130.9,142.5,264.5), new cjs.Rectangle(-102.2,-131.2,142.6,265), new cjs.Rectangle(-102.7,-131.6,143.6,266), new cjs.Rectangle(-102.8,-131.9,143.7,266.7), new cjs.Rectangle(-103.3,-132.3,144.7,267.7), new cjs.Rectangle(-103.3,-132.5,144.8,268.3), new cjs.Rectangle(-103.8,-132.9,145.8,269.3), new cjs.Rectangle(-103.9,-133.2,145.9,269.9), new cjs.Rectangle(-103.9,-133.5,146.1,270.5), new cjs.Rectangle(-104.4,-133.9,147.1,271.5), new cjs.Rectangle(-104.5,-134.2,147.2,272.1), new cjs.Rectangle(-105,-134.5,148.2,273.1), new cjs.Rectangle(-105.1,-134.8,148.3,273.7), new cjs.Rectangle(-105.6,-135.2,149.4,274.7), new cjs.Rectangle(-105.1,-135.1,148.4,274.2), new cjs.Rectangle(-105,-135.1,148.2,274.2), new cjs.Rectangle(-104.5,-135,147.3,273.7), new cjs.Rectangle(-104.5,-135,147.2,273.7), new cjs.Rectangle(-104.4,-134.9,147,273.6), new cjs.Rectangle(-103.9,-134.8,146,273.1), new cjs.Rectangle(-103.9,-134.8,145.9,273), new cjs.Rectangle(-103.4,-134.6,144.9,272.5), new cjs.Rectangle(-103.3,-134.6,144.8,272.5), new cjs.Rectangle(-103.3,-134.6,144.7,272.4), new cjs.Rectangle(-102.8,-134.5,143.7,271.9), new cjs.Rectangle(-102.7,-134.4,143.6,271.8), new cjs.Rectangle(-102.2,-134.3,142.6,271.4), new cjs.Rectangle(-102.2,-134.3,142.5,271.3), new cjs.Rectangle(-102.1,-134.3,142.4,271.2), new cjs.Rectangle(-101.6,-134.1,141.4,270.7), new cjs.Rectangle(-101.6,-134.1,141.3,270.7), new cjs.Rectangle(-101.1,-134,140.3,270.1), new cjs.Rectangle(-101,-134,140.1,270.1), new cjs.Rectangle(-101,-134,140,270), new cjs.Rectangle(-101,-134,140.1,270.1), new cjs.Rectangle(-101.1,-134,140.3,270.1), new cjs.Rectangle(-101.6,-134.4,141.3,270.7), new cjs.Rectangle(-101.6,-134.4,141.4,270.7), new cjs.Rectangle(-101.7,-134.5,141.5,270.8), new cjs.Rectangle(-102.2,-134.9,142.5,271.3), new cjs.Rectangle(-102.3,-134.9,142.6,271.4), new cjs.Rectangle(-102.8,-135.3,143.6,271.8), new cjs.Rectangle(-102.8,-135.3,143.7,271.9), new cjs.Rectangle(-102.8,-135.4,143.8,272), new cjs.Rectangle(-103.3,-135.7,144.8,272.5), new cjs.Rectangle(-103.4,-135.8,144.9,272.5), new cjs.Rectangle(-103.9,-136.1,145.9,273), new cjs.Rectangle(-104,-136.2,146,273), new cjs.Rectangle(-104.1,-136.2,146.1,273.1), new cjs.Rectangle(-104.5,-136.6,147.2,273.6), new cjs.Rectangle(-104.6,-136.6,147.3,273.7), new cjs.Rectangle(-105.1,-137,148.2,274.2), new cjs.Rectangle(-105.1,-137,148.3,274.2), new cjs.Rectangle(-105.7,-137.4,149.4,274.7), new cjs.Rectangle(-105.1,-136.8,148.3,273.7), new cjs.Rectangle(-105,-136.5,148.2,273.2), new cjs.Rectangle(-104.5,-135.9,147.2,272.2), new cjs.Rectangle(-104.5,-135.6,147.1,271.7), new cjs.Rectangle(-104,-135,146.1,270.6), new cjs.Rectangle(-103.9,-134.7,146,270), new cjs.Rectangle(-103.9,-134.4,145.8,269.5), new cjs.Rectangle(-103.4,-133.8,144.9,268.5), new cjs.Rectangle(-103.3,-133.5,144.7,268), new cjs.Rectangle(-102.8,-132.9,143.8,267), new cjs.Rectangle(-102.8,-132.6,143.7,266.4), new cjs.Rectangle(-102.7,-132.3,143.5,265.8), new cjs.Rectangle(-102.2,-131.7,142.6,264.8), new cjs.Rectangle(-102.1,-131.4,142.4,264.3), new cjs.Rectangle(-101.7,-130.8,141.5,263.3), new cjs.Rectangle(-101.6,-130.5,141.3,262.7), new cjs.Rectangle(-101.6,-130.2,141.2,262.2), new cjs.Rectangle(-101.1,-129.6,140.3,261.1), new cjs.Rectangle(-101,-129.3,140.1,260.6), new cjs.Rectangle(-101,-129,140,260)];


(lib.animation_grass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.grass_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:4.3},29).to({scaleY:1.01,skewX:-6.8},60).to({scaleY:1,skewX:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-160,200,180);
p.frameBounds = [rect, new cjs.Rectangle(-99.9,-160,200.1,180), new cjs.Rectangle(-100,-160,200.8,180.1), new cjs.Rectangle(-100.1,-160,201,180.1), new cjs.Rectangle(-100.1,-160,201.7,180.1), new cjs.Rectangle(-100.1,-160,201.8,180.1), new cjs.Rectangle(-100.2,-160,202.5,180.1), new cjs.Rectangle(-100.3,-160,203.1,180.1), new cjs.Rectangle(-100.3,-160,203.3,180.1), new cjs.Rectangle(-100.4,-160,204,180.1), new cjs.Rectangle(-100.4,-160.1,204.1,180.1), new cjs.Rectangle(-100.5,-160,204.8,180.1), new cjs.Rectangle(-100.5,-160,205.5,180.1), new cjs.Rectangle(-100.6,-160.1,205.7,180.1), new cjs.Rectangle(-100.7,-160,206.4,180.1), new cjs.Rectangle(-100.7,-160.1,206.5,180.1), new cjs.Rectangle(-100.7,-160,207.2,180.1), new cjs.Rectangle(-100.8,-160,207.9,180.1), new cjs.Rectangle(-100.8,-160,208,180.1), new cjs.Rectangle(-100.9,-160,208.7,180.1), new cjs.Rectangle(-100.9,-160,208.8,180.1), new cjs.Rectangle(-101,-160,209.5,180.1), new cjs.Rectangle(-101.1,-160,210.3,180.1), new cjs.Rectangle(-101.1,-160,210.4,180.1), new cjs.Rectangle(-101.2,-160,211.1,180.1), new cjs.Rectangle(-101.2,-160,211.2,180.1), new cjs.Rectangle(-101.2,-160,211.9,180), new cjs.Rectangle(-101.3,-160,212,180.1), new cjs.Rectangle(-101.4,-160,212.7,180), new cjs.Rectangle(-101.5,-160,213.5,180), new cjs.Rectangle(-101.4,-160,212.7,180.1), new cjs.Rectangle(-101.3,-160,212,180.1), new cjs.Rectangle(-101.2,-160.1,211.2,180.2), new cjs.Rectangle(-101.2,-160.1,211.1,180.2), new cjs.Rectangle(-101.1,-160.2,210.4,180.3), new cjs.Rectangle(-101,-160.2,209.6,180.3), new cjs.Rectangle(-100.9,-160.3,208.9,180.4), new cjs.Rectangle(-100.9,-160.3,208.7,180.4), new cjs.Rectangle(-100.9,-160.3,208,180.4), new cjs.Rectangle(-100.8,-160.4,207.3,180.5), new cjs.Rectangle(-100.7,-160.4,207.1,180.5), new cjs.Rectangle(-100.6,-160.4,206.4,180.5), new cjs.Rectangle(-100.6,-160.5,205.7,180.6), new cjs.Rectangle(-100.5,-160.5,204.9,180.6), new cjs.Rectangle(-100.5,-160.5,204.8,180.6), new cjs.Rectangle(-100.4,-160.5,204,180.7), new cjs.Rectangle(-100.3,-160.6,203.3,180.7), new cjs.Rectangle(-100.2,-160.6,202.6,180.7), new cjs.Rectangle(-100.2,-160.6,202.4,180.7), new cjs.Rectangle(-100.1,-160.6,201.7,180.8), new cjs.Rectangle(-100,-160.6,200.9,180.8), new cjs.Rectangle(-100,-160.6,200.2,180.8), rect=new cjs.Rectangle(-100,-160.7,200.1,180.8), rect, new cjs.Rectangle(-100.7,-160.7,200.9,180.8), new cjs.Rectangle(-101.4,-160.7,201.6,180.8), new cjs.Rectangle(-101.5,-160.7,201.7,180.9), new cjs.Rectangle(-102.1,-160.7,202.5,180.9), new cjs.Rectangle(-102.8,-160.7,203.2,180.9), new cjs.Rectangle(-102.9,-160.7,203.4,180.9), new cjs.Rectangle(-103.6,-160.7,204.1,180.9), new cjs.Rectangle(-104.2,-160.7,204.8,180.9), new cjs.Rectangle(-104.9,-160.7,205.6,180.8), new cjs.Rectangle(-105,-160.7,205.7,180.9), new cjs.Rectangle(-105.7,-160.7,206.5,180.8), new cjs.Rectangle(-106.3,-160.7,207.2,180.8), new cjs.Rectangle(-107,-160.6,207.9,180.8), new cjs.Rectangle(-107.1,-160.6,208.1,180.8), new cjs.Rectangle(-107.8,-160.6,208.8,180.8), new cjs.Rectangle(-108.4,-160.6,209.6,180.8), new cjs.Rectangle(-109.1,-160.6,210.3,180.7), new cjs.Rectangle(-109.2,-160.6,210.4,180.7), new cjs.Rectangle(-109.9,-160.5,211.2,180.7), new cjs.Rectangle(-110.5,-160.5,211.9,180.7), new cjs.Rectangle(-111.2,-160.5,212.7,180.6), new cjs.Rectangle(-111.3,-160.5,212.8,180.6), new cjs.Rectangle(-112,-160.4,213.5,180.5), new cjs.Rectangle(-112.6,-160.4,214.3,180.5), new cjs.Rectangle(-112.8,-160.4,214.4,180.5), new cjs.Rectangle(-113.4,-160.4,215.2,180.5), new cjs.Rectangle(-114.1,-160.3,215.9,180.4), new cjs.Rectangle(-114.7,-160.3,216.6,180.4), new cjs.Rectangle(-114.8,-160.3,216.8,180.4), new cjs.Rectangle(-115.5,-160.2,217.5,180.3), new cjs.Rectangle(-116.2,-160.1,218.3,180.2), new cjs.Rectangle(-116.8,-160.1,219,180.2), new cjs.Rectangle(-116.9,-160.1,219.1,180.2), new cjs.Rectangle(-117.6,-160,219.9,180.1), new cjs.Rectangle(-118.2,-160,220.6,180), new cjs.Rectangle(-119,-160,221.4,180), new cjs.Rectangle(-118.2,-159.9,220.6,180), new cjs.Rectangle(-117.5,-160,219.8,180.1), new cjs.Rectangle(-116.8,-160,219,180.1), new cjs.Rectangle(-116.2,-160.1,218.3,180.1), new cjs.Rectangle(-115.5,-160.1,217.5,180.2), new cjs.Rectangle(-114.8,-160.1,216.7,180.2), new cjs.Rectangle(-114.1,-160.1,215.9,180.2), new cjs.Rectangle(-113.4,-160.2,215.2,180.3), new cjs.Rectangle(-112.7,-160.2,214.4,180.3), new cjs.Rectangle(-112.6,-160.2,214.2,180.3), new cjs.Rectangle(-111.9,-160.2,213.5,180.3), new cjs.Rectangle(-111.2,-160.2,212.7,180.3), new cjs.Rectangle(-110.5,-160.2,211.9,180.3), new cjs.Rectangle(-109.8,-160.2,211.1,180.3), new cjs.Rectangle(-109.1,-160.2,210.4,180.3), new cjs.Rectangle(-108.5,-160.2,209.6,180.3), new cjs.Rectangle(-107.8,-160.2,208.8,180.3), new cjs.Rectangle(-107.1,-160.2,208.1,180.3), new cjs.Rectangle(-106.4,-160.2,207.3,180.3), new cjs.Rectangle(-106.3,-160.2,207.1,180.3), new cjs.Rectangle(-105.6,-160.2,206.3,180.3), new cjs.Rectangle(-104.9,-160.2,205.6,180.3), new cjs.Rectangle(-104.2,-160.1,204.8,180.2), new cjs.Rectangle(-103.5,-160.1,204,180.2), new cjs.Rectangle(-102.8,-160.1,203.3,180.2), new cjs.Rectangle(-102.2,-160.1,202.5,180.2), new cjs.Rectangle(-101.5,-160.1,201.7,180.1), new cjs.Rectangle(-100.8,-160,201,180.1), new cjs.Rectangle(-100.1,-160,200.2,180.1), new cjs.Rectangle(-100,-160,200,180)];


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


(lib.animation_current_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-220,440,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-200,400,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.accessory_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.accessory_check_3_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,alpha:0.398},24).to({scaleX:1,scaleY:1,alpha:0.898},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, new cjs.Rectangle(-109.8,-109.8,219.7,219.7), new cjs.Rectangle(-109.6,-109.6,219.4,219.4), new cjs.Rectangle(-109.5,-109.5,219,219), new cjs.Rectangle(-109.3,-109.3,218.7,218.7), new cjs.Rectangle(-109.1,-109.1,218.4,218.4), new cjs.Rectangle(-109,-109,218.1,218.1), new cjs.Rectangle(-108.8,-108.8,217.7,217.7), new cjs.Rectangle(-108.6,-108.6,217.4,217.4), new cjs.Rectangle(-108.5,-108.5,217.1,217.1), new cjs.Rectangle(-108.3,-108.3,216.8,216.8), new cjs.Rectangle(-108.1,-108.1,216.4,216.4), new cjs.Rectangle(-108,-108,216.1,216.1), new cjs.Rectangle(-107.8,-107.8,215.8,215.8), new cjs.Rectangle(-107.7,-107.7,215.4,215.4), new cjs.Rectangle(-107.5,-107.5,215.1,215.1), new cjs.Rectangle(-107.3,-107.3,214.8,214.8), new cjs.Rectangle(-107.2,-107.2,214.5,214.5), new cjs.Rectangle(-107,-107,214.1,214.1), new cjs.Rectangle(-106.8,-106.8,213.8,213.8), new cjs.Rectangle(-106.7,-106.7,213.5,213.5), new cjs.Rectangle(-106.5,-106.5,213.2,213.2), new cjs.Rectangle(-106.3,-106.3,212.8,212.8), new cjs.Rectangle(-106.2,-106.2,212.5,212.5), new cjs.Rectangle(-106,-106,212.1,212.1), new cjs.Rectangle(-106.2,-106.2,212.5,212.5), new cjs.Rectangle(-106.3,-106.3,212.8,212.8), new cjs.Rectangle(-106.5,-106.5,213.1,213.1), new cjs.Rectangle(-106.6,-106.6,213.4,213.4), new cjs.Rectangle(-106.8,-106.8,213.7,213.7), new cjs.Rectangle(-107,-107,214,214), new cjs.Rectangle(-107.1,-107.1,214.4,214.4), new cjs.Rectangle(-107.3,-107.3,214.7,214.7), new cjs.Rectangle(-107.4,-107.4,215,215), new cjs.Rectangle(-107.6,-107.6,215.3,215.3), new cjs.Rectangle(-107.7,-107.7,215.6,215.6), new cjs.Rectangle(-107.9,-107.9,215.9,215.9), new cjs.Rectangle(-108.1,-108.1,216.2,216.2), new cjs.Rectangle(-108.2,-108.2,216.6,216.6), new cjs.Rectangle(-108.4,-108.4,216.9,216.9), new cjs.Rectangle(-108.5,-108.5,217.2,217.2), new cjs.Rectangle(-108.7,-108.7,217.5,217.5), new cjs.Rectangle(-108.8,-108.8,217.8,217.8), new cjs.Rectangle(-109,-109,218.1,218.1), new cjs.Rectangle(-109.2,-109.2,218.4,218.4), new cjs.Rectangle(-109.3,-109.3,218.8,218.8), new cjs.Rectangle(-109.5,-109.5,219.1,219.1), new cjs.Rectangle(-109.6,-109.6,219.4,219.4), new cjs.Rectangle(-109.8,-109.8,219.7,219.7), new cjs.Rectangle(-110,-110,220,220)];


(lib.accessory_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.accessory_check_3_1_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,alpha:0.398},24).to({scaleX:1,scaleY:1,alpha:0.898},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, new cjs.Rectangle(-109.8,-109.8,219.7,219.7), new cjs.Rectangle(-109.6,-109.6,219.4,219.4), new cjs.Rectangle(-109.5,-109.5,219,219), new cjs.Rectangle(-109.3,-109.3,218.7,218.7), new cjs.Rectangle(-109.1,-109.1,218.4,218.4), new cjs.Rectangle(-109,-109,218.1,218.1), new cjs.Rectangle(-108.8,-108.8,217.7,217.7), new cjs.Rectangle(-108.6,-108.6,217.4,217.4), new cjs.Rectangle(-108.5,-108.5,217.1,217.1), new cjs.Rectangle(-108.3,-108.3,216.8,216.8), new cjs.Rectangle(-108.1,-108.1,216.4,216.4), new cjs.Rectangle(-108,-108,216.1,216.1), new cjs.Rectangle(-107.8,-107.8,215.8,215.8), new cjs.Rectangle(-107.7,-107.7,215.4,215.4), new cjs.Rectangle(-107.5,-107.5,215.1,215.1), new cjs.Rectangle(-107.3,-107.3,214.8,214.8), new cjs.Rectangle(-107.2,-107.2,214.5,214.5), new cjs.Rectangle(-107,-107,214.1,214.1), new cjs.Rectangle(-106.8,-106.8,213.8,213.8), new cjs.Rectangle(-106.7,-106.7,213.5,213.5), new cjs.Rectangle(-106.5,-106.5,213.2,213.2), new cjs.Rectangle(-106.3,-106.3,212.8,212.8), new cjs.Rectangle(-106.2,-106.2,212.5,212.5), new cjs.Rectangle(-106,-106,212.1,212.1), new cjs.Rectangle(-106.2,-106.2,212.5,212.5), new cjs.Rectangle(-106.3,-106.3,212.8,212.8), new cjs.Rectangle(-106.5,-106.5,213.1,213.1), new cjs.Rectangle(-106.6,-106.6,213.4,213.4), new cjs.Rectangle(-106.8,-106.8,213.7,213.7), new cjs.Rectangle(-107,-107,214,214), new cjs.Rectangle(-107.1,-107.1,214.4,214.4), new cjs.Rectangle(-107.3,-107.3,214.7,214.7), new cjs.Rectangle(-107.4,-107.4,215,215), new cjs.Rectangle(-107.6,-107.6,215.3,215.3), new cjs.Rectangle(-107.7,-107.7,215.6,215.6), new cjs.Rectangle(-107.9,-107.9,215.9,215.9), new cjs.Rectangle(-108.1,-108.1,216.2,216.2), new cjs.Rectangle(-108.2,-108.2,216.6,216.6), new cjs.Rectangle(-108.4,-108.4,216.9,216.9), new cjs.Rectangle(-108.5,-108.5,217.2,217.2), new cjs.Rectangle(-108.7,-108.7,217.5,217.5), new cjs.Rectangle(-108.8,-108.8,217.8,217.8), new cjs.Rectangle(-109,-109,218.1,218.1), new cjs.Rectangle(-109.2,-109.2,218.4,218.4), new cjs.Rectangle(-109.3,-109.3,218.8,218.8), new cjs.Rectangle(-109.5,-109.5,219.1,219.1), new cjs.Rectangle(-109.6,-109.6,219.4,219.4), new cjs.Rectangle(-109.8,-109.8,219.7,219.7), new cjs.Rectangle(-110,-110,220,220)];


(lib.accessory_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.accessory_check_1_2_mc();

	this.instance_1 = new lib.accessory_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, rect];


(lib.accessory_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.accessory_check_1_1_mc();

	this.instance_1 = new lib.accessory_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.2,0.65,0.65,0,0,0,0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:59,end:99});

	// animation
	this.instance = new lib.cosmic_star_0_mc();
	this.instance.setTransform(300,100);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({alpha:1},10).wait(25).to({alpha:0.012},10).to({_off:true},1).wait(20));

	// animation
	this.instance_1 = new lib.title_second_mc();
	this.instance_1.setTransform(400,900);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({rotation:15,y:-300},0).to({rotation:-15,y:350},15).to({regY:0.1,rotation:5,y:300.1},10).to({regX:0.1,rotation:0,x:400.1},5).wait(30).to({regX:0,regY:0,x:400.5,y:946.4},9).to({_off:true},1).wait(11));

	// animation
	this.instance_2 = new lib.curtain_1_mc();
	this.instance_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},18).wait(60).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,1050), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-508.2,1600,1108.2), new cjs.Rectangle(-400,-459.9,1600,1060), new cjs.Rectangle(-400,-412.1,1600,1012.1), new cjs.Rectangle(-400,-363.9,1600,963.9), new cjs.Rectangle(-400,-315.5,1600,915.5), new cjs.Rectangle(-400,-266.9,1600,866.9), new cjs.Rectangle(-400,-218.1,1600,818.1), new cjs.Rectangle(-400,-169,1600,769.1), new cjs.Rectangle(-400,-126.2,1600,726.2), new cjs.Rectangle(-400,-88.6,1600,688.6), new cjs.Rectangle(-400,-50.7,1600,650.8), new cjs.Rectangle(-400,-12.7,1600,612.8), rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,0,1600,665.5), new cjs.Rectangle(-400,0,1600,737.3), new cjs.Rectangle(-400,0,1600,809.1), new cjs.Rectangle(-400,0,1600,880.9), new cjs.Rectangle(-400,0,1600,952.7), new cjs.Rectangle(-400,0,1600,1024.5), new cjs.Rectangle(-400,0,1600,1096.4), rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


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
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.glitter_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glitter_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Glitter_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();
		//this.mouseChildren = false;
		//this.mouseEnabled = false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.glitter_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

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
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.67,scaleY:0.67,alpha:0.012},19).to({scaleX:1,scaleY:1,alpha:0.301},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.5,-24.5,49.1,49.1), new cjs.Rectangle(-24.1,-24.1,48.3,48.3), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.8,-22.8,45.6,45.6), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-21.9,-21.9,43.8,43.8), new cjs.Rectangle(-21.4,-21.4,43,43), new cjs.Rectangle(-21,-21,42.1,42.1), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-19.7,-19.7,39.5,39.5), new cjs.Rectangle(-19.2,-19.2,38.6,38.6), new cjs.Rectangle(-18.8,-18.8,37.7,37.7), new cjs.Rectangle(-18.4,-18.4,36.8,36.8), new cjs.Rectangle(-17.9,-17.9,36,36), new cjs.Rectangle(-17.5,-17.5,35.1,35.1), new cjs.Rectangle(-17.1,-17.1,34.2,34.2), new cjs.Rectangle(-16.6,-16.6,33.3,33.3), new cjs.Rectangle(-17,-17,34.2,34.2), new cjs.Rectangle(-17.4,-17.4,35,35), new cjs.Rectangle(-17.9,-17.9,35.8,35.8), new cjs.Rectangle(-18.3,-18.3,36.7,36.7), new cjs.Rectangle(-18.7,-18.7,37.5,37.5), new cjs.Rectangle(-19.1,-19.1,38.3,38.3), new cjs.Rectangle(-19.5,-19.5,39.2,39.2), new cjs.Rectangle(-19.9,-19.9,40,40), new cjs.Rectangle(-20.4,-20.4,40.8,40.8), new cjs.Rectangle(-20.8,-20.8,41.7,41.7), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-22,-22,44.2,44.2), new cjs.Rectangle(-22.4,-22.4,45,45), new cjs.Rectangle(-22.9,-22.9,45.8,45.8), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.7,-23.7,47.5,47.5), new cjs.Rectangle(-24.1,-24.1,48.3,48.3), new cjs.Rectangle(-24.5,-24.5,49.2,49.2), new cjs.Rectangle(-25,-25,50,50)];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.setTransform(0,0,0.667,0.667);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:0.898},19).to({scaleX:0.83,scaleY:0.83,rotation:90,alpha:0.461},20).to({scaleX:0.67,scaleY:0.67,rotation:180,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_1 = new lib.blinking_light_4_2_mc();
	this.instance_1.setTransform(0,0,0.5,0.5);
	this.instance_1.alpha = 0.461;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},20).to({scaleX:0.6,scaleY:0.6,alpha:0.102},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.6,-18.6,37.3,37.3);
p.frameBounds = [rect, new cjs.Rectangle(-19.1,-19.1,38.3,38.3), new cjs.Rectangle(-19.6,-19.6,39.3,39.3), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-22.1,-22.1,44.2,44.2), new cjs.Rectangle(-22.5,-22.5,45.2,45.2), new cjs.Rectangle(-23,-23,46.2,46.2), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-24,-24,48.2,48.2), new cjs.Rectangle(-24.5,-24.5,49.1,49.1), new cjs.Rectangle(-25,-25,50.1,50.1), new cjs.Rectangle(-25.5,-25.5,51.1,51.1), new cjs.Rectangle(-26,-26,52.1,52.1), new cjs.Rectangle(-26.5,-26.5,53.1,53.1), new cjs.Rectangle(-27,-27,54.1,54.1), new cjs.Rectangle(-27.5,-27.5,55,55), new cjs.Rectangle(-28,-28,56,56), new cjs.Rectangle(-29.8,-29.8,59.7,59.7), new cjs.Rectangle(-31.4,-31.4,63,63), new cjs.Rectangle(-32.8,-32.8,65.7,65.7), new cjs.Rectangle(-34,-34,68.1,68.1), new cjs.Rectangle(-35,-35,70.2,70.2), new cjs.Rectangle(-35.7,-35.7,71.5,71.5), new cjs.Rectangle(-36.2,-36.2,72.4,72.4), rect=new cjs.Rectangle(-36.4,-36.4,72.9,72.9), rect, new cjs.Rectangle(-36.3,-36.2,72.6,72.6), new cjs.Rectangle(-35.8,-35.7,71.6,71.6), new cjs.Rectangle(-35.1,-35.1,70.3,70.3), new cjs.Rectangle(-34.3,-34.2,68.6,68.6), new cjs.Rectangle(-33.2,-33.2,66.5,66.5), new cjs.Rectangle(-32,-32,64,64), new cjs.Rectangle(-30.5,-30.5,61,61), new cjs.Rectangle(-28.9,-28.9,57.8,57.8), new cjs.Rectangle(-27.2,-27.2,54.5,54.5), new cjs.Rectangle(-25.4,-25.3,50.7,50.7), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-24.8,-24.8,49.7,49.7), new cjs.Rectangle(-26.2,-26.1,52.3,52.3), new cjs.Rectangle(-27.2,-27.1,54.4,54.4), new cjs.Rectangle(-28.1,-28.1,56.3,56.3), new cjs.Rectangle(-28.9,-28.9,57.9,57.9), new cjs.Rectangle(-29.4,-29.4,58.9,58.9), new cjs.Rectangle(-29.8,-29.8,59.7,59.7), new cjs.Rectangle(-29.9,-29.9,59.9,59.9), new cjs.Rectangle(-29.9,-29.8,59.8,59.8), new cjs.Rectangle(-29.7,-29.7,59.4,59.4), new cjs.Rectangle(-29.2,-29.2,58.5,58.5), new cjs.Rectangle(-28.6,-28.6,57.3,57.3), new cjs.Rectangle(-27.9,-27.9,55.8,55.8), new cjs.Rectangle(-26.9,-27,53.9,53.9), new cjs.Rectangle(-25.9,-25.9,51.9,51.9), new cjs.Rectangle(-24.7,-24.7,49.3,49.3), new cjs.Rectangle(-23.3,-23.3,46.6,46.6), new cjs.Rectangle(-21.9,-21.9,43.8,43.8), new cjs.Rectangle(-20.3,-20.3,40.6,40.6), new cjs.Rectangle(-18.6,-18.6,37.3,37.3), new cjs.Rectangle(-11.8,-11.8,23.7,23.7), new cjs.Rectangle(-11.6,-11.6,23.4,23.4), new cjs.Rectangle(-11.5,-11.5,23.1,23.1), new cjs.Rectangle(-11.3,-11.3,22.7,22.7), new cjs.Rectangle(-11.2,-11.2,22.4,22.4), new cjs.Rectangle(-11,-11,22.1,22.1), new cjs.Rectangle(-10.8,-10.8,21.8,21.8), new cjs.Rectangle(-10.7,-10.7,21.5,21.5), new cjs.Rectangle(-10.5,-10.5,21.1,21.1), new cjs.Rectangle(-10.4,-10.4,20.8,20.8), new cjs.Rectangle(-10.2,-10.2,20.5,20.5), new cjs.Rectangle(-10,-10,20.2,20.2), new cjs.Rectangle(-9.9,-9.9,19.9,19.9), new cjs.Rectangle(-9.7,-9.7,19.5,19.5), new cjs.Rectangle(-9.6,-9.6,19.2,19.2), new cjs.Rectangle(-9.4,-9.4,18.9,18.9), new cjs.Rectangle(-9.2,-9.2,18.6,18.6), new cjs.Rectangle(-9.1,-9.1,18.3,18.3), new cjs.Rectangle(-8.9,-8.9,17.9,17.9), new cjs.Rectangle(-8.8,-8.8,17.6,17.6), new cjs.Rectangle(-8.6,-8.6,17.3,17.3), new cjs.Rectangle(-8.4,-8.4,17,17), new cjs.Rectangle(-8.3,-8.3,16.7,16.7), new cjs.Rectangle(-8.1,-8.1,16.3,16.3), new cjs.Rectangle(-8,-8,16,16), new cjs.Rectangle(-7.8,-7.8,15.7,15.7), new cjs.Rectangle(-7.6,-7.6,15.4,15.4), new cjs.Rectangle(-7.5,-7.5,15.1,15.1), new cjs.Rectangle(-7.3,-7.3,14.7,14.7), new cjs.Rectangle(-7.2,-7.2,14.4,14.4)];


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


(lib.nav_anim_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_3_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({alpha:0.801},15).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({alpha:0.801},15).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.012},30).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjQHCQhkAAhGhHQhGhGgBhkIAAmhQABhkBGhGQBGhGBkgBIGhAAQBkABBGBGQBHBGAABkIAAGhQAABkhHBGQhGBHhkAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.top_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_6_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.top_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_6_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.top_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_5_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.top_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_5_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.top_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_4_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_4_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_3_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_3_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_2_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_2_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_1_2_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A1iViQo7o7AAsnQAAsmI7o8QI8o7MmAAQMnAAI7I7QI8I8AAMmQAAMno8I7Qo7I8snAAQsmAAo8o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_1_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+deeMAAAg87MA87AAAMAAAA87g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.shadows_2_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.shadows_2_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.shadows_2_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_2_2_img();
	this.instance.setTransform(-74,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_1_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.shadows_1_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.shadows_1_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-100,170,200);
p.frameBounds = [rect, rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_1_2_img();
	this.instance.setTransform(-74,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_1_1_img();
	this.instance.setTransform(-65,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNRIAA6iIXZAAIAAaig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-100,170,200);
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
	this.instance.setTransform(-205,-205);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-205,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.animation_current_location_2_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzUTVQoAoBAArUQAArTIAoBQIAoBLUABQLVgBH/IBQIBIBAALTQAALUoBIBQn/IArVABQrUgBoAoAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect, new cjs.Rectangle(-220,-220,440,440), new cjs.Rectangle(-205,-205,410,410)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-185,-185);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-185,-185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.animation_current_location_1_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0bUbQoeodAAr+QAAr9IeoeQIeoeL9AAQL+AAIdIeQIeIeABL9QgBL+oeIdQodIer+ABQr9gBoeoeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-185,370,370);
p.frameBounds = [rect, new cjs.Rectangle(-200,-200,400,400), new cjs.Rectangle(-185,-185,370,370)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-205,-205);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-205,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.animation_current_location_2_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzUTVQoAoBAArUQAArTIAoBQIAoBLUABQLVgBH/IBQIBIBAALTQAALUoBIBQn/IArVABQrUgBoAoAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect, new cjs.Rectangle(-220,-220,440,440), new cjs.Rectangle(-205,-205,410,410)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-185,-185);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-185,-185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.animation_current_location_1_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0bUbQoeodAAr+QAAr9IeoeQIeoeL9AAQL+AAIdIeQIeIeABL9QgBL+oeIdQodIer+ABQr9gBoeoeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-185,370,370);
p.frameBounds = [rect, new cjs.Rectangle(-200,-200,400,400), new cjs.Rectangle(-185,-185,370,370)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-205,-205);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-205,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.animation_current_location_2_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzUTVQoAoBAArUQAArTIAoBQIAoBLUABQLVgBH/IBQIBIBAALTQAALUoBIBQn/IArVABQrUgBoAoAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-205,410,410);
p.frameBounds = [rect, new cjs.Rectangle(-220,-220,440,440), new cjs.Rectangle(-205,-205,410,410)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-185,-185);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-185,-185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.animation_current_location_1_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0bUbQoeodAAr+QAAr9IeoeQIeoeL9AAQL+AAIdIeQIeIeABL9QgBL+oeIdQodIer+ABQr9gBoeoeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-185,370,370);
p.frameBounds = [rect, new cjs.Rectangle(-200,-200,400,400), new cjs.Rectangle(-185,-185,370,370)];


(lib.lips_2_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.lips_2_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.lips_2_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect, rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_2_2_img();
	this.instance.setTransform(-32,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBO1IAA9qIODAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.lips_1_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.lips_1_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.lips_1_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect, rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_1_2_img();
	this.instance.setTransform(-32,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBO1IAA9qIODAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips1_hero1_img();
	this.instance.setTransform(-66.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNSIAA6jIXZAAIAAajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


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


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
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
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(25).call(this.frame_39).wait(1));

	// hero_2
	this.instance = new lib.hero_2_main_mc();
	this.instance.setTransform(-800,370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({x:300},20).to({x:250},10).wait(1));

	// hero_1
	this.instance_1 = new lib.hero_1_main_mc();
	this.instance_1.setTransform(1600,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({x:500},20).to({x:550},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-959,-6,2726,697.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-904,-6,2616,697.5), new cjs.Rectangle(-849,-6,2506,697.5), new cjs.Rectangle(-794,-6,2396,697.5), new cjs.Rectangle(-739,-6,2286,697.5), new cjs.Rectangle(-684,-6,2176,697.5), new cjs.Rectangle(-629,-6,2066,697.5), new cjs.Rectangle(-574,-6,1956,697.5), new cjs.Rectangle(-519,-6,1846,697.5), new cjs.Rectangle(-464,-6,1736,697.5), new cjs.Rectangle(-409,-6,1626,697.5), new cjs.Rectangle(-354,-6,1516,697.5), new cjs.Rectangle(-299,-6,1406,697.5), new cjs.Rectangle(-244,-6,1296,697.5), new cjs.Rectangle(-189,-6,1186,697.5), new cjs.Rectangle(-134,-6,1076,697.5), new cjs.Rectangle(-79,-6,966,697.5), new cjs.Rectangle(-24,-6,856,697.5), new cjs.Rectangle(31,-6,746,697.5), new cjs.Rectangle(86,-6,636,697.5), new cjs.Rectangle(141,-6,526,697.5), new cjs.Rectangle(136,-6,536,697.5), new cjs.Rectangle(131,-6,546,697.5), new cjs.Rectangle(126,-6,556,697.5), new cjs.Rectangle(121,-6,566,697.5), new cjs.Rectangle(116,-6,576,697.5), new cjs.Rectangle(111,-6,586,697.5), new cjs.Rectangle(106,-6,596,697.5), new cjs.Rectangle(101,-6,606,697.5), new cjs.Rectangle(96,-6,616,697.5), new cjs.Rectangle(91,-6,626,697.5)];


(lib.glasses_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses9_img();
	this.instance.setTransform(-83.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glasses9_img();
	this.instance.setTransform(-72,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses8_img();
	this.instance.setTransform(-83.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glasses8_img();
	this.instance.setTransform(-71,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses7_img();
	this.instance.setTransform(-83.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glasses7_img();
	this.instance.setTransform(-72,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses6_img();
	this.instance.setTransform(-83.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glasses6_img();
	this.instance.setTransform(-72,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses5_img();
	this.instance.setTransform(-83.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glasses5_img();
	this.instance.setTransform(-74,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses4_img();
	this.instance.setTransform(-83.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glasses4_img();
	this.instance.setTransform(-70,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses3_img();
	this.instance.setTransform(-83.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glasses3_img();
	this.instance.setTransform(-71,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses2_img();
	this.instance.setTransform(-83.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glasses2_img();
	this.instance.setTransform(-70,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses1_img();
	this.instance.setTransform(-83.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glasses1_img();
	this.instance.setTransform(-72,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":159});

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(99).to({y:-50},5).to({y:600},15).wait(41));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(34).to({rotation:-10},10).to({rotation:5},20).to({rotation:0},10).wait(45).to({y:-50},5).to({y:600},15).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-205,780,410);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-208.5,783.6,417.1), new cjs.Rectangle(-385,-211.9,787,424), new cjs.Rectangle(-385,-215.4,790.4,430.8), new cjs.Rectangle(-385,-218.7,793.8,437.5), new cjs.Rectangle(-385,-222,797.1,444.1), new cjs.Rectangle(-385,-225.2,800.3,450.5), new cjs.Rectangle(-385,-228.4,803.4,456.8), new cjs.Rectangle(-385,-231.4,806.5,462.9), new cjs.Rectangle(-385,-234.5,809.5,468.9), new cjs.Rectangle(-385,-237.5,812.5,475), new cjs.Rectangle(-385,-235.1,810.2,470.4), new cjs.Rectangle(-385,-232.9,808,465.9), new cjs.Rectangle(-385,-230.6,805.7,461.4), new cjs.Rectangle(-385,-228.3,803.4,456.7), new cjs.Rectangle(-385,-226,801.1,452.1), new cjs.Rectangle(-385,-223.7,798.8,447.4), new cjs.Rectangle(-385,-220.5,795.7,441.2), new cjs.Rectangle(-385,-218.7,793.9,437.5), new cjs.Rectangle(-385,-216.2,791.3,432.5), new cjs.Rectangle(-385,-213,788.2,426.2), new cjs.Rectangle(-385,-210.4,785.6,421), new cjs.Rectangle(-385,-207.8,783,415.8), new cjs.Rectangle(-385,-205.1,780.3,410.5), new cjs.Rectangle(-385,-206.7,781.9,413.5), new cjs.Rectangle(-385,-209.3,784.5,418.8), new cjs.Rectangle(-385,-211.9,787.1,424), new cjs.Rectangle(-385,-214.5,789.7,429.1), new cjs.Rectangle(-385,-217,792.2,434.2), new cjs.Rectangle(-385,-219.5,794.7,439.2), new cjs.Rectangle(-385,-222,797.1,444.1), new cjs.Rectangle(-385,-220.3,795.3,440.8), new cjs.Rectangle(-385,-218.8,793.8,437.5), new cjs.Rectangle(-385,-217,792.1,434.2), new cjs.Rectangle(-385,-215.4,790.4,430.8), new cjs.Rectangle(-385,-213.7,788.7,427.5), new cjs.Rectangle(-385,-212,787,424), new cjs.Rectangle(-385,-210.2,785.3,420.6), new cjs.Rectangle(-385,-208.5,783.5,417.1), new cjs.Rectangle(-385,-206.8,781.8,413.6), rect=new cjs.Rectangle(-385,-205,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-215,780,420), new cjs.Rectangle(-385,-225,780,430), new cjs.Rectangle(-385,-235,780,440), new cjs.Rectangle(-385,-205,780,410), new cjs.Rectangle(-385,-205,780,426.7), new cjs.Rectangle(-385,-205,780,470), new cjs.Rectangle(-385,-205,780,513.4), new cjs.Rectangle(-385,-205,780,556.7), new cjs.Rectangle(-385,-205,780,600), new cjs.Rectangle(-385,-205,780,643.4), new cjs.Rectangle(-385,-205,780,686.7), new cjs.Rectangle(-385,-205,780,730), new cjs.Rectangle(-385,-205,780,773.4), new cjs.Rectangle(-385,-205,780,816.7), new cjs.Rectangle(-385,-205,780,860), new cjs.Rectangle(-385,-205,780,903.4), new cjs.Rectangle(-385,-205,780,946.7), new cjs.Rectangle(-385,-205,780,990), new cjs.Rectangle(-385,-215,780,1000), new cjs.Rectangle(-385,-225,780,1010), new cjs.Rectangle(-385,-235,780,1020), new cjs.Rectangle(-385,-245,780,1030), new cjs.Rectangle(-385,-255,780,1040), new cjs.Rectangle(-385,-211.6,780,996.7), new cjs.Rectangle(-385,-168.3,780,953.4), new cjs.Rectangle(-385,-125,780,910), new cjs.Rectangle(-385,-81.6,780,866.7), new cjs.Rectangle(-385,-38.3,780,823.4), new cjs.Rectangle(-385,5,780,780), new cjs.Rectangle(-385,48.4,780,736.7), new cjs.Rectangle(-385,91.7,780,693.4), new cjs.Rectangle(-385,135,780,650), new cjs.Rectangle(-385,178.4,780,606.7), new cjs.Rectangle(-385,221.7,780,563.4), new cjs.Rectangle(-385,265,780,520), new cjs.Rectangle(-385,308.4,780,476.7), new cjs.Rectangle(-385,351.7,780,433.4), rect=new cjs.Rectangle(-385,395,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":109});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.2);
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
			app.addSoundFunc("tink_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(56));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:600},0).wait(23).to({y:-100},15).to({y:0},5).wait(66));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:600},0).wait(43).to({y:-100},15).to({y:0},5).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-205,780,410);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,395,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,368.4,780,436.7), new cjs.Rectangle(-385,321.7,780,483.4), new cjs.Rectangle(-385,275,780,530), new cjs.Rectangle(-385,228.4,780,576.7), new cjs.Rectangle(-385,181.7,780,623.4), new cjs.Rectangle(-385,135,780,670), new cjs.Rectangle(-385,88.4,780,716.7), new cjs.Rectangle(-385,41.7,780,763.4), new cjs.Rectangle(-385,-5,780,810), new cjs.Rectangle(-385,-51.6,780,856.7), new cjs.Rectangle(-385,-98.3,780,903.4), new cjs.Rectangle(-385,-145,780,950), new cjs.Rectangle(-385,-191.6,780,996.7), new cjs.Rectangle(-385,-238.3,780,1043.4), new cjs.Rectangle(-385,-285,780,1090), new cjs.Rectangle(-385,-265,780,1070), new cjs.Rectangle(-385,-245,780,1050), new cjs.Rectangle(-385,-225,780,1030), new cjs.Rectangle(-385,-205,780,1010), new cjs.Rectangle(-385,-185,780,990), new cjs.Rectangle(-385,-185,780,943.4), new cjs.Rectangle(-385,-185,780,896.7), new cjs.Rectangle(-385,-185,780,850), new cjs.Rectangle(-385,-185,780,803.4), new cjs.Rectangle(-385,-185,780,756.7), new cjs.Rectangle(-385,-185,780,710), new cjs.Rectangle(-385,-185,780,663.4), new cjs.Rectangle(-385,-185,780,616.7), new cjs.Rectangle(-385,-185,780,570), new cjs.Rectangle(-385,-185,780,523.4), new cjs.Rectangle(-385,-185,780,476.7), new cjs.Rectangle(-385,-185,780,430), new cjs.Rectangle(-385,-211.6,780,410), new cjs.Rectangle(-385,-258.3,780,443.4), new cjs.Rectangle(-385,-305,780,490), new cjs.Rectangle(-385,-285,780,470), new cjs.Rectangle(-385,-265,780,450), new cjs.Rectangle(-385,-245,780,430), new cjs.Rectangle(-385,-225,780,410), rect=new cjs.Rectangle(-385,-205,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":159});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(99).to({y:50},5).to({y:-600},15).wait(41));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(34).to({rotation:-10},10).to({rotation:5},20).to({rotation:0},10).wait(45).to({y:50},5).to({y:-600},15).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-205,780,410);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-208.5,783.6,417.1), new cjs.Rectangle(-385,-211.9,787,424), new cjs.Rectangle(-385,-215.4,790.4,430.8), new cjs.Rectangle(-385,-218.7,793.8,437.5), new cjs.Rectangle(-385,-222,797.1,444.1), new cjs.Rectangle(-385,-225.2,800.3,450.5), new cjs.Rectangle(-385,-228.4,803.4,456.8), new cjs.Rectangle(-385,-231.4,806.5,462.9), new cjs.Rectangle(-385,-234.5,809.5,468.9), new cjs.Rectangle(-385,-237.5,812.5,475), new cjs.Rectangle(-385,-235.1,810.2,470.4), new cjs.Rectangle(-385,-232.9,808,465.9), new cjs.Rectangle(-385,-230.6,805.7,461.4), new cjs.Rectangle(-385,-228.3,803.4,456.7), new cjs.Rectangle(-385,-226,801.1,452.1), new cjs.Rectangle(-385,-223.7,798.8,447.4), new cjs.Rectangle(-385,-220.5,795.7,441.2), new cjs.Rectangle(-385,-218.7,793.9,437.5), new cjs.Rectangle(-385,-216.2,791.3,432.5), new cjs.Rectangle(-385,-213,788.2,426.2), new cjs.Rectangle(-385,-210.4,785.6,421), new cjs.Rectangle(-385,-207.8,783,415.8), new cjs.Rectangle(-385,-205.1,780.3,410.5), new cjs.Rectangle(-385,-206.7,781.9,413.5), new cjs.Rectangle(-385,-209.3,784.5,418.8), new cjs.Rectangle(-385,-211.9,787.1,424), new cjs.Rectangle(-385,-214.5,789.7,429.1), new cjs.Rectangle(-385,-217,792.2,434.2), new cjs.Rectangle(-385,-219.5,794.7,439.2), new cjs.Rectangle(-385,-222,797.1,444.1), new cjs.Rectangle(-385,-220.3,795.3,440.8), new cjs.Rectangle(-385,-218.8,793.8,437.5), new cjs.Rectangle(-385,-217,792.1,434.2), new cjs.Rectangle(-385,-215.4,790.4,430.8), new cjs.Rectangle(-385,-213.7,788.7,427.5), new cjs.Rectangle(-385,-212,787,424), new cjs.Rectangle(-385,-210.2,785.3,420.6), new cjs.Rectangle(-385,-208.5,783.5,417.1), new cjs.Rectangle(-385,-206.8,781.8,413.6), rect=new cjs.Rectangle(-385,-205,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-205,780,420), new cjs.Rectangle(-385,-205,780,430), new cjs.Rectangle(-385,-205,780,440), new cjs.Rectangle(-385,-205,780,410), new cjs.Rectangle(-385,-221.6,780,426.7), new cjs.Rectangle(-385,-265,780,470), new cjs.Rectangle(-385,-308.3,780,513.4), new cjs.Rectangle(-385,-351.6,780,556.7), new cjs.Rectangle(-385,-395,780,600), new cjs.Rectangle(-385,-438.3,780,643.4), new cjs.Rectangle(-385,-481.6,780,686.7), new cjs.Rectangle(-385,-525,780,730), new cjs.Rectangle(-385,-568.3,780,773.4), new cjs.Rectangle(-385,-611.6,780,816.7), new cjs.Rectangle(-385,-655,780,860), new cjs.Rectangle(-385,-698.3,780,903.4), new cjs.Rectangle(-385,-741.6,780,946.7), new cjs.Rectangle(-385,-785,780,990), new cjs.Rectangle(-385,-785,780,1000), new cjs.Rectangle(-385,-785,780,1010), new cjs.Rectangle(-385,-785,780,1020), new cjs.Rectangle(-385,-785,780,1030), new cjs.Rectangle(-385,-785,780,1040), new cjs.Rectangle(-385,-785,780,996.7), new cjs.Rectangle(-385,-785,780,953.4), new cjs.Rectangle(-385,-785,780,910), new cjs.Rectangle(-385,-785,780,866.7), new cjs.Rectangle(-385,-785,780,823.4), new cjs.Rectangle(-385,-785,780,780), new cjs.Rectangle(-385,-785,780,736.7), new cjs.Rectangle(-385,-785,780,693.4), new cjs.Rectangle(-385,-785,780,650), new cjs.Rectangle(-385,-785,780,606.7), new cjs.Rectangle(-385,-785,780,563.4), new cjs.Rectangle(-385,-785,780,520), new cjs.Rectangle(-385,-785,780,476.7), new cjs.Rectangle(-385,-785,780,433.4), rect=new cjs.Rectangle(-385,-805,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":109});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.2);
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
			app.addSoundFunc("tink_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(56));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-600},0).wait(23).to({y:100},15).to({y:0},5).wait(66));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-600},0).wait(43).to({y:100},15).to({y:0},5).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-205,780,410);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-805,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-805,780,436.7), new cjs.Rectangle(-385,-805,780,483.4), new cjs.Rectangle(-385,-805,780,530), new cjs.Rectangle(-385,-805,780,576.7), new cjs.Rectangle(-385,-805,780,623.4), new cjs.Rectangle(-385,-805,780,670), new cjs.Rectangle(-385,-805,780,716.7), new cjs.Rectangle(-385,-805,780,763.4), new cjs.Rectangle(-385,-805,780,810), new cjs.Rectangle(-385,-805,780,856.7), new cjs.Rectangle(-385,-805,780,903.4), new cjs.Rectangle(-385,-805,780,950), new cjs.Rectangle(-385,-805,780,996.7), new cjs.Rectangle(-385,-805,780,1043.4), new cjs.Rectangle(-385,-805,780,1090), new cjs.Rectangle(-385,-805,780,1070), new cjs.Rectangle(-385,-805,780,1050), new cjs.Rectangle(-385,-805,780,1030), new cjs.Rectangle(-385,-805,780,1010), new cjs.Rectangle(-385,-805,780,990), new cjs.Rectangle(-385,-758.3,780,943.4), new cjs.Rectangle(-385,-711.6,780,896.7), new cjs.Rectangle(-385,-665,780,850), new cjs.Rectangle(-385,-618.3,780,803.4), new cjs.Rectangle(-385,-571.6,780,756.7), new cjs.Rectangle(-385,-525,780,710), new cjs.Rectangle(-385,-478.3,780,663.4), new cjs.Rectangle(-385,-431.6,780,616.7), new cjs.Rectangle(-385,-385,780,570), new cjs.Rectangle(-385,-338.3,780,523.4), new cjs.Rectangle(-385,-291.6,780,476.7), new cjs.Rectangle(-385,-245,780,430), new cjs.Rectangle(-385,-198.3,780,410), new cjs.Rectangle(-385,-185,780,443.4), new cjs.Rectangle(-385,-185,780,490), new cjs.Rectangle(-385,-185,780,470), new cjs.Rectangle(-385,-185,780,450), new cjs.Rectangle(-385,-185,780,430), new cjs.Rectangle(-385,-185,780,410), rect=new cjs.Rectangle(-385,-205,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":159});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(99).to({y:-50},5).to({y:600},15).wait(41));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,-10);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(34).to({regX:0.2,regY:0.1,rotation:-10,x:190.2,y:-9.9},10).to({regX:0,regY:0,rotation:5,x:190,y:-10},20).to({rotation:0},10).wait(45).to({y:-60},5).to({y:600},15).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-215,780,410);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-218.5,783.6,417.1), new cjs.Rectangle(-385,-221.3,786.4,422.7), new cjs.Rectangle(-385,-224.7,789.9,429.6), new cjs.Rectangle(-385,-228.1,793.3,436.3), new cjs.Rectangle(-385,-231.3,796.6,442.9), new cjs.Rectangle(-385,-234.5,799.8,449.3), new cjs.Rectangle(-385,-237.7,803,455.6), new cjs.Rectangle(-385,-240.8,806.1,461.8), new cjs.Rectangle(-385,-243.8,809.1,467.8), new cjs.Rectangle(-385,-247.5,812.5,475), new cjs.Rectangle(-385,-244.6,809.7,469.3), new cjs.Rectangle(-385,-242.4,807.5,464.8), new cjs.Rectangle(-385,-240,805.1,460.2), new cjs.Rectangle(-385,-237.7,802.8,455.6), new cjs.Rectangle(-385,-235.3,800.4,450.9), new cjs.Rectangle(-385,-232.9,798,446.1), new cjs.Rectangle(-385,-231.2,796.3,442.6), new cjs.Rectangle(-385,-228.6,793.7,437.5), new cjs.Rectangle(-385,-226.2,791.2,432.5), new cjs.Rectangle(-385,-223.6,788.7,427.5), new cjs.Rectangle(-385,-221.1,786.2,422.3), new cjs.Rectangle(-385,-218.4,783.5,417.1), new cjs.Rectangle(-385,-215.8,780.9,411.8), new cjs.Rectangle(-385,-216,781.1,412.3), new cjs.Rectangle(-385,-218.6,783.7,417.5), new cjs.Rectangle(-385,-221.3,786.3,422.7), new cjs.Rectangle(-385,-223.8,788.9,427.9), new cjs.Rectangle(-385,-226.4,791.4,433), new cjs.Rectangle(-385,-228.9,793.9,438), new cjs.Rectangle(-385,-232,797.1,444.1), new cjs.Rectangle(-385,-229.8,794.8,439.6), new cjs.Rectangle(-385,-228.1,793.2,436.3), new cjs.Rectangle(-385,-226.4,791.5,433), new cjs.Rectangle(-385,-224.7,789.8,429.6), new cjs.Rectangle(-385,-223,788.1,426.2), new cjs.Rectangle(-385,-221.4,786.4,422.8), new cjs.Rectangle(-385,-219.6,784.6,419.3), new cjs.Rectangle(-385,-217.9,782.8,415.7), new cjs.Rectangle(-385,-216.1,781.1,412.3), rect=new cjs.Rectangle(-385,-215,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-225,780,420), new cjs.Rectangle(-385,-235,780,430), new cjs.Rectangle(-385,-215,780,410), new cjs.Rectangle(-385,-215,780,436.7), new cjs.Rectangle(-385,-215,780,480), new cjs.Rectangle(-385,-215,780,523.4), new cjs.Rectangle(-385,-215,780,566.7), new cjs.Rectangle(-385,-215,780,610), new cjs.Rectangle(-385,-215,780,653.4), new cjs.Rectangle(-385,-215,780,696.7), new cjs.Rectangle(-385,-215,780,740), new cjs.Rectangle(-385,-215,780,783.4), new cjs.Rectangle(-385,-215,780,826.7), new cjs.Rectangle(-385,-215,780,870), new cjs.Rectangle(-385,-215,780,913.4), new cjs.Rectangle(-385,-215,780,956.7), new cjs.Rectangle(-385,-215,780,1000), new cjs.Rectangle(-385,-225,780,1010), new cjs.Rectangle(-385,-235,780,1020), new cjs.Rectangle(-385,-245,780,1030), new cjs.Rectangle(-385,-255,780,1040), new cjs.Rectangle(-385,-265,780,1050), new cjs.Rectangle(-385,-221,780,1006), new cjs.Rectangle(-385,-177,780,962), new cjs.Rectangle(-385,-133,780,918), new cjs.Rectangle(-385,-89,780,874), new cjs.Rectangle(-385,-45,780,830), new cjs.Rectangle(-385,-1,780,786), new cjs.Rectangle(-385,43,780,742), new cjs.Rectangle(-385,87,780,698), new cjs.Rectangle(-385,131,780,654), new cjs.Rectangle(-385,175,780,610), new cjs.Rectangle(-385,219,780,566), new cjs.Rectangle(-385,263,780,522), new cjs.Rectangle(-385,307,780,478), new cjs.Rectangle(-385,351,780,434), rect=new cjs.Rectangle(-385,395,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":109});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.2);
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
			app.addSoundFunc("tink_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(56));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:600},0).wait(23).to({y:-100},15).to({y:0},5).wait(66));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,-10);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:600},0).wait(43).to({y:-100},15).to({y:-10},5).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-215,780,410);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,395,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,368.4,780,436.7), new cjs.Rectangle(-385,321.7,780,483.4), new cjs.Rectangle(-385,275,780,530), new cjs.Rectangle(-385,228.4,780,576.7), new cjs.Rectangle(-385,181.7,780,623.4), new cjs.Rectangle(-385,135,780,670), new cjs.Rectangle(-385,88.4,780,716.7), new cjs.Rectangle(-385,41.7,780,763.4), new cjs.Rectangle(-385,-5,780,810), new cjs.Rectangle(-385,-51.6,780,856.7), new cjs.Rectangle(-385,-98.3,780,903.4), new cjs.Rectangle(-385,-145,780,950), new cjs.Rectangle(-385,-191.6,780,996.7), new cjs.Rectangle(-385,-238.3,780,1043.4), new cjs.Rectangle(-385,-285,780,1090), new cjs.Rectangle(-385,-265,780,1070), new cjs.Rectangle(-385,-245,780,1050), new cjs.Rectangle(-385,-225,780,1030), new cjs.Rectangle(-385,-205,780,1010), new cjs.Rectangle(-385,-185,780,990), new cjs.Rectangle(-385,-185,780,943.4), new cjs.Rectangle(-385,-185,780,896.7), new cjs.Rectangle(-385,-185,780,850), new cjs.Rectangle(-385,-185,780,803.4), new cjs.Rectangle(-385,-185,780,756.7), new cjs.Rectangle(-385,-185,780,710), new cjs.Rectangle(-385,-185,780,663.4), new cjs.Rectangle(-385,-185,780,616.7), new cjs.Rectangle(-385,-185,780,570), new cjs.Rectangle(-385,-185,780,523.4), new cjs.Rectangle(-385,-185,780,476.7), new cjs.Rectangle(-385,-185,780,430), new cjs.Rectangle(-385,-211.6,780,410), new cjs.Rectangle(-385,-258.3,780,443.4), new cjs.Rectangle(-385,-305,780,490), new cjs.Rectangle(-385,-287,780,472), new cjs.Rectangle(-385,-269,780,454), new cjs.Rectangle(-385,-251,780,436), new cjs.Rectangle(-385,-233,780,418), rect=new cjs.Rectangle(-385,-215,780,410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.faceart_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.faceart_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.faceart_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect];


(lib.faceart_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_6_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.faceart_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_6_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.faceart_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_5_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.faceart_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_5_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.faceart_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_4_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.faceart_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_4_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.faceart_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_3_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.faceart_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_3_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.faceart_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_2_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.faceart_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_2_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.faceart_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_1_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.faceart_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_1_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.faceart_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.eyes_2_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyes_2_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.eyes_2_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-120,210,240);
p.frameBounds = [rect, rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens2_2_img();
	this.instance.setTransform(-82.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArCLDQklklABmeQgBmdElklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeABQmdgBklkkg");
	this.shape.setTransform(0,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-120,210,240);
p.frameBounds = [rect];


(lib.eyes_1_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyes_1_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.eyes_1_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-120,200,240);
p.frameBounds = [rect, rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens2_1_img();
	this.instance.setTransform(-82.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArCLDQklklABmeQgBmdElklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeABQmdgBklkkg");
	this.shape.setTransform(0,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-120,210,240);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens1_1_img();
	this.instance.setTransform(-81,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap+QaQhYAAg9g+Qg+g9ABhYIAA6NQgBhYA+g9QA9g+BYAAIT9AAQBYAAA9A+QA+A9gBBYIAAaNQABBYg+A9Qg9A+hYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-120,200,240);
p.frameBounds = [rect];


(lib.eyebrows_2_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyebrows_2_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.eyebrows_2_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect, rect];


(lib.eyebrows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil2_2_img();
	this.instance.setTransform(91.5,-56.7,1,1,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_2_check_1_mc();
	this.check_mc.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuIlIAAxKMAldAAAIAARKg");
	this.shape.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-72,240,128.8);
p.frameBounds = [rect];


(lib.eyebrows_1_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyebrows_1_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.eyebrows_1_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-45,250,90);
p.frameBounds = [rect, rect];


(lib.eyebrows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil2_1_img();
	this.instance.setTransform(91.5,-56.8,1,1,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_2_check_1_mc();
	this.check_mc.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuIlIAAxKMAldAAAIAARKg");
	this.shape.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-72,240,128.8);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil1_1_img();
	this.instance.setTransform(-106.9,-4.1,1,1,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhHCIAAuCMAnDAAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-45,250,90);
p.frameBounds = [rect];


(lib.earrings_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring9_img();
	this.instance.setTransform(42.5,-32.5,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring9_img();
	this.instance_1.setTransform(-42.5,-32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring9_img();
	this.instance.setTransform(4,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring9_img();
	this.instance_1.setTransform(-43,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring8_img();
	this.instance.setTransform(46,-33.5,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring8_img();
	this.instance_1.setTransform(-46,-33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring8_img();
	this.instance.setTransform(5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring8_img();
	this.instance_1.setTransform(-43,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring7_2_img();
	this.instance.setTransform(1.5,-45);

	this.instance_1 = new lib.hero2_earring7_1_img();
	this.instance_1.setTransform(-32.5,-48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring7_img();
	this.instance.setTransform(6,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring7_img();
	this.instance_1.setTransform(-41,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring6_img();
	this.instance.setTransform(-6.5,-28.5);

	this.instance_1 = new lib.hero2_earring6_img();
	this.instance_1.setTransform(-36.5,-28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring6_img();
	this.instance.setTransform(7,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring6_img();
	this.instance_1.setTransform(-37,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring5_img();
	this.instance.setTransform(1.5,-44.5);

	this.instance_1 = new lib.hero2_earring5_img();
	this.instance_1.setTransform(-52.5,-44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring5_img();
	this.instance.setTransform(3,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring5_img();
	this.instance_1.setTransform(-51,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring4_img();
	this.instance.setTransform(-0.5,-37.5);

	this.instance_1 = new lib.hero2_earring4_img();
	this.instance_1.setTransform(-46.5,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring4_img();
	this.instance.setTransform(4,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring4_img();
	this.instance_1.setTransform(-46,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring3_img();
	this.instance.setTransform(-3,-30);

	this.instance_1 = new lib.hero2_earring3_img();
	this.instance_1.setTransform(-57,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring3_img();
	this.instance.setTransform(5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring3_img();
	this.instance_1.setTransform(-36,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring2_img();
	this.instance.setTransform(2,-37);

	this.instance_1 = new lib.hero2_earring2_img();
	this.instance_1.setTransform(-30,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring2_img();
	this.instance.setTransform(5,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring2_img();
	this.instance_1.setTransform(-39,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring1_img();
	this.instance.setTransform(-0.5,-34);

	this.instance_1 = new lib.hero2_earring1_img();
	this.instance_1.setTransform(-44.5,-34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring1_img();
	this.instance.setTransform(7,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring1_img();
	this.instance_1.setTransform(-43,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.accessory_bg_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.closet_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-130,-260);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-130,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headdress_0}]}).to({state:[{t:this.accessory_0}]},3).wait(3));

	// options
	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(0,-200);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(0,-65);

	this.headdress_4 = new lib.headdress_4_2_mc();
	this.headdress_4.setTransform(0,-70);

	this.headdress_3 = new lib.headdress_3_2_mc();
	this.headdress_3.setTransform(0,-205);

	this.headdress_5 = new lib.headdress_5_2_mc();
	this.headdress_5.setTransform(0,-70);

	this.headdress_6 = new lib.headdress_6_2_mc();
	this.headdress_6.setTransform(-5,-190);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(-40,-175);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(50,-105);

	this.accessory_6 = new lib.accessory_6_2_mc();
	this.accessory_6.setTransform(-10,-55);

	this.accessory_5 = new lib.accessory_5_2_mc();
	this.accessory_5.setTransform(-80,-145);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(76.5,-170);

	this.accessory_4 = new lib.accessory_4_2_mc();
	this.accessory_4.setTransform(40,-70);

	this.accessory_7 = new lib.accessory_7_2_mc();
	this.accessory_7.setTransform(-40,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headdress_1},{t:this.headdress_2}]}).to({state:[{t:this.headdress_3},{t:this.headdress_4}]},1).to({state:[{t:this.headdress_6},{t:this.headdress_5}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2}]},1).to({state:[{t:this.accessory_3},{t:this.accessory_5},{t:this.accessory_6}]},1).to({state:[{t:this.accessory_7},{t:this.accessory_4}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_2_3_mc();
	this.instance.setTransform(0,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-370,400,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-156,-192);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-156,-192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_0}]}).to({state:[{t:this.headdress_0}]},2).wait(2));

	// options
	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(30,-35);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(-60,-125);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(40,-200);

	this.accessory_6 = new lib.accessory_6_1_mc();
	this.accessory_6.setTransform(-40,-40);

	this.accessory_5 = new lib.accessory_5_1_mc();
	this.accessory_5.setTransform(0,-225);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(60,-126);

	this.headdress_3 = new lib.headdress_3_1_mc();
	this.headdress_3.setTransform(30,11);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(-30,-115);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(30,-222.7);

	this.headdress_6 = new lib.headdress_6_1_mc();
	this.headdress_6.setTransform(-30,0);

	this.headdress_5 = new lib.headdress_5_1_mc();
	this.headdress_5.setTransform(30,-120);

	this.headdress_4 = new lib.headdress_4_1_mc();
	this.headdress_4.setTransform(-30,-228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]}).to({state:[{t:this.accessory_4},{t:this.accessory_5},{t:this.accessory_6}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3}]},1).to({state:[{t:this.headdress_4},{t:this.headdress_5},{t:this.headdress_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_3_mc();
	this.instance.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-385,380,490);
p.frameBounds = [rect, rect, rect, rect];


(lib.closet_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(0,-180);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(0,-180);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(0,-180);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(0,-180);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(0,-180);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(0,-180);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(0,-180);

	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(0,-180);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(0,-180);

	this.top_4 = new lib.top_4_2_mc();
	this.top_4.setTransform(0,-180);

	this.top_5 = new lib.top_5_2_mc();
	this.top_5.setTransform(0,-180);

	this.top_6 = new lib.top_6_2_mc();
	this.top_6.setTransform(0,-180);

	this.bottom_6 = new lib.bottom_6_2_mc();
	this.bottom_6.setTransform(0,-180);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(0,-180);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(0,-180);

	this.bottom_4 = new lib.bottom_4_2_mc();
	this.bottom_4.setTransform(0,-180);

	this.bottom_5 = new lib.bottom_5_2_mc();
	this.bottom_5.setTransform(0,-180);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(0,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2}]}).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_1}]},1).to({state:[{t:this.top_1}]},1).to({state:[{t:this.top_2}]},1).to({state:[{t:this.top_3}]},1).to({state:[{t:this.top_4}]},1).to({state:[{t:this.top_5}]},1).to({state:[{t:this.top_6}]},1).to({state:[{t:this.bottom_6}]},1).to({state:[{t:this.bottom_2}]},1).to({state:[{t:this.bottom_3}]},1).to({state:[{t:this.bottom_4}]},1).to({state:[{t:this.bottom_5}]},1).to({state:[{t:this.bottom_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-390,420,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(0,-100);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(0,-100);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(0,-100);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(0,-100);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(0,-100);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(0,-100);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(0,-100);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(0,-100);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(0,-100);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(0,-100);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(0,-100);

	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(0,-100);

	this.bottom_6 = new lib.bottom_6_1_mc();
	this.bottom_6.setTransform(0,-100);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(0,-100);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(0,-100);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(0,-100);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(0,-100);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_4}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_1}]},1).to({state:[{t:this.top_1}]},1).to({state:[{t:this.top_2}]},1).to({state:[{t:this.top_3}]},1).to({state:[{t:this.top_4}]},1).to({state:[{t:this.top_5}]},1).to({state:[{t:this.top_6}]},1).to({state:[{t:this.bottom_6}]},1).to({state:[{t:this.bottom_2}]},1).to({state:[{t:this.bottom_3}]},1).to({state:[{t:this.bottom_4}]},1).to({state:[{t:this.bottom_5}]},1).to({state:[{t:this.bottom_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(133,-150);

	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(-141,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.earrings_0}]},3).to({state:[{t:this.glasses_0}]},3).wait(3));

	// options
	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(-70,20);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(70,-170);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(70,20);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(-70,-170);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(-70,20);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(70,-170);

	this.earrings_3 = new lib.earrings_3_2_mc();
	this.earrings_3.setTransform(130,40);

	this.earrings_2 = new lib.earrings_2_2_mc();
	this.earrings_2.setTransform(-130,40);

	this.earrings_1 = new lib.earrings_1_2_mc();
	this.earrings_1.setTransform(0,-140);

	this.earrings_6 = new lib.earrings_6_2_mc();
	this.earrings_6.setTransform(130,40);

	this.earrings_5 = new lib.earrings_5_2_mc();
	this.earrings_5.setTransform(-130,40);

	this.earrings_4 = new lib.earrings_4_2_mc();
	this.earrings_4.setTransform(0,-140);

	this.earrings_9 = new lib.earrings_9_2_mc();
	this.earrings_9.setTransform(130,40);

	this.earrings_8 = new lib.earrings_8_2_mc();
	this.earrings_8.setTransform(-130,40);

	this.earrings_7 = new lib.earrings_7_2_mc();
	this.earrings_7.setTransform(0,-140);

	this.glasses_3 = new lib.glasses_3_2_mc();
	this.glasses_3.setTransform(130,40);

	this.glasses_2 = new lib.glasses_2_2_mc();
	this.glasses_2.setTransform(-130,40);

	this.glasses_1 = new lib.glasses_1_2_mc();
	this.glasses_1.setTransform(0,-140);

	this.glasses_6 = new lib.glasses_6_2_mc();
	this.glasses_6.setTransform(130,40);

	this.glasses_5 = new lib.glasses_5_2_mc();
	this.glasses_5.setTransform(-130,40);

	this.glasses_4 = new lib.glasses_4_2_mc();
	this.glasses_4.setTransform(0,-140);

	this.glasses_9 = new lib.glasses_9_2_mc();
	this.glasses_9.setTransform(130,40);

	this.glasses_8 = new lib.glasses_8_2_mc();
	this.glasses_8.setTransform(-130,40);

	this.glasses_7 = new lib.glasses_7_2_mc();
	this.glasses_7.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_6}]}).to({state:[{t:this.hair_4},{t:this.hair_3}]},1).to({state:[{t:this.hair_5},{t:this.hair_1}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3}]},1).to({state:[{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_7},{t:this.earrings_8},{t:this.earrings_9}]},1).to({state:[{t:this.glasses_1},{t:this.glasses_2},{t:this.glasses_3}]},1).to({state:[{t:this.glasses_4},{t:this.glasses_5},{t:this.glasses_6}]},1).to({state:[{t:this.glasses_7},{t:this.glasses_8},{t:this.glasses_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,470);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-240,-250,480,400), rect, rect, rect, rect, rect];


(lib.closet_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-141,-150);

	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(-141,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.earrings_0}]},3).to({state:[{t:this.glasses_0}]},3).wait(3));

	// options
	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(70,20);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(-70,-170);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(-70,20);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(70,-170);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(70,20);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(-70,-170);

	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(130,40);

	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(-130,40);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(0,-140);

	this.earrings_6 = new lib.earrings_6_1_mc();
	this.earrings_6.setTransform(130,40);

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(-130,40);

	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(0,-140);

	this.earrings_9 = new lib.earrings_9_1_mc();
	this.earrings_9.setTransform(130,40);

	this.earrings_8 = new lib.earrings_8_1_mc();
	this.earrings_8.setTransform(-130,40);

	this.earrings_7 = new lib.earrings_7_1_mc();
	this.earrings_7.setTransform(0,-140);

	this.glasses_2 = new lib.glasses_2_1_mc();
	this.glasses_2.setTransform(-130,40);

	this.glasses_1 = new lib.glasses_1_1_mc();
	this.glasses_1.setTransform(130,40);

	this.glasses_3 = new lib.glasses_3_1_mc();
	this.glasses_3.setTransform(0,-140);

	this.glasses_6 = new lib.glasses_6_1_mc();
	this.glasses_6.setTransform(130,40);

	this.glasses_5 = new lib.glasses_5_1_mc();
	this.glasses_5.setTransform(-130,40);

	this.glasses_4 = new lib.glasses_4_1_mc();
	this.glasses_4.setTransform(0,-140);

	this.glasses_9 = new lib.glasses_9_1_mc();
	this.glasses_9.setTransform(130,40);

	this.glasses_8 = new lib.glasses_8_1_mc();
	this.glasses_8.setTransform(-130,40);

	this.glasses_7 = new lib.glasses_7_1_mc();
	this.glasses_7.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_6},{t:this.hair_2}]}).to({state:[{t:this.hair_4},{t:this.hair_3}]},1).to({state:[{t:this.hair_5},{t:this.hair_1}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3}]},1).to({state:[{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_7},{t:this.earrings_8},{t:this.earrings_9}]},1).to({state:[{t:this.glasses_3},{t:this.glasses_1},{t:this.glasses_2}]},1).to({state:[{t:this.glasses_4},{t:this.glasses_5},{t:this.glasses_6}]},1).to({state:[{t:this.glasses_7},{t:this.glasses_8},{t:this.glasses_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,470);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-240,-250,480,400), rect, rect, rect, rect, rect];


(lib.bodyDressupPanel_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_4_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-370,400,420);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-385,380,490);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-390,420,420);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,420);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,470);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,470);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.instance = new lib.animation_parrot_mc();
	this.instance.setTransform(-184,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-198,y:-48},0).wait(1).to({x:-184,y:-50},0).wait(3).to({x:-201,y:-45},0).wait(1).to({x:-184,y:-50},0).wait(1).to({x:-196,y:-46},0).wait(1).to({x:-184,y:-50},0).wait(5));

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
p.nominalBounds = rect = new cjs.Rectangle(-285,-179,535,260);
p.frameBounds = [rect, new cjs.Rectangle(-299,-177,549,260), rect=new cjs.Rectangle(-285,-179,535,260), rect, rect, new cjs.Rectangle(-302,-174,552,260), new cjs.Rectangle(-285,-179,535,260), new cjs.Rectangle(-297,-175,547,260), rect=new cjs.Rectangle(-285,-179,535,260), rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-18.6,-18.6,37.3,37.3);
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
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.917,0.917,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.917,0.917,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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


(lib.next_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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

	// bg
	this.instance = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-285,-179,535,299.1);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_6_2_img();
	this.instance.setTransform(-74,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_6_1_img();
	this.instance.setTransform(-65,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNRIAA6iIXZAAIAAaig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-100,170,200);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_5_2_img();
	this.instance.setTransform(-74,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_5_1_img();
	this.instance.setTransform(-65,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNRIAA6iIXZAAIAAaig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-100,170,200);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_4_2_img();
	this.instance.setTransform(-74,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_4_1_img();
	this.instance.setTransform(-65,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNRIAA6iIXZAAIAAaig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-100,170,200);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_3_2_img();
	this.instance.setTransform(-74,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_3_1_img();
	this.instance.setTransform(-65,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNRIAA6iIXZAAIAAaig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-100,170,200);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_2_1_img();
	this.instance.setTransform(-65,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNRIAA6iIXZAAIAAaig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-100,170,200);
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
p.nominalBounds = rect = new cjs.Rectangle(-385,-215,780,410);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-385,-205,780,410), rect, rect, rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_6_2_img();
	this.instance.setTransform(-32,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBO1IAA9qIODAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips1_hero6_img();
	this.instance.setTransform(-66.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNSIAA6jIXZAAIAAajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_5_2_img();
	this.instance.setTransform(-32,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBO1IAA9qIODAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips1_hero5_img();
	this.instance.setTransform(-66.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNSIAA6jIXZAAIAAajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_4_2_img();
	this.instance.setTransform(-32,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBO1IAA9qIODAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips1_hero4_img();
	this.instance.setTransform(-66.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNSIAA6jIXZAAIAAajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_3_2_img();
	this.instance.setTransform(-32,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBO1IAA9qIODAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips1_hero3_img();
	this.instance.setTransform(-66.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNSIAA6jIXZAAIAAajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips1_hero2_img();
	this.instance.setTransform(-66.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsNSIAA6jIXZAAIAAajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
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


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens2_6_img();
	this.instance.setTransform(-82.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArCLDQklklABmeQgBmdElklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeABQmdgBklkkg");
	this.shape.setTransform(0,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-120,210,240);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens1_6_img();
	this.instance.setTransform(-81,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap+QaQhYAAg9g+Qg+g9ABhYIAA6NQgBhYA+g9QA9g+BYAAIT9AAQBYAAA9A+QA+A9gBBYIAAaNQABBYg+A9Qg9A+hYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-120,200,240);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens2_5_img();
	this.instance.setTransform(-82.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArCLDQklklABmeQgBmdElklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeABQmdgBklkkg");
	this.shape.setTransform(0,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-120,210,240);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens1_5_img();
	this.instance.setTransform(-81,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap+QaQhYAAg9g+Qg+g9ABhYIAA6NQgBhYA+g9QA9g+BYAAIT9AAQBYAAA9A+QA+A9gBBYIAAaNQABBYg+A9Qg9A+hYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-120,200,240);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens2_4_img();
	this.instance.setTransform(-82.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArCLDQklklABmeQgBmdElklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeABQmdgBklkkg");
	this.shape.setTransform(0,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-120,210,240);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens1_4_img();
	this.instance.setTransform(-81,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap+QaQhYAAg9g+Qg+g9ABhYIAA6NQgBhYA+g9QA9g+BYAAIT9AAQBYAAA9A+QA+A9gBBYIAAaNQABBYg+A9Qg9A+hYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-120,200,240);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens2_3_img();
	this.instance.setTransform(-82.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_2_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArCLDQklklABmeQgBmdElklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeABQmdgBklkkg");
	this.shape.setTransform(0,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-120,210,240);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens1_3_img();
	this.instance.setTransform(-81,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap+QaQhYAAg9g+Qg+g9ABhYIAA6NQgBhYA+g9QA9g+BYAAIT9AAQBYAAA9A+QA+A9gBBYIAAaNQABBYg+A9Qg9A+hYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-120,200,240);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens1_2_img();
	this.instance.setTransform(-81,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap+QaQhYAAg9g+Qg+g9ABhYIAA6NQgBhYA+g9QA9g+BYAAIT9AAQBYAAA9A+QA+A9gBBYIAAaNQABBYg+A9Qg9A+hYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-120,200,240);
p.frameBounds = [rect];


(lib.eyebrows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil2_6_img();
	this.instance.setTransform(91.5,-56.7,1,1,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_2_check_1_mc();
	this.check_mc.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuIlIAAxKMAldAAAIAARKg");
	this.shape.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-72,240,128.8);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil1_6_img();
	this.instance.setTransform(-106.9,-4.1,1,1,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhHCIAAuCMAnDAAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-45,250,90);
p.frameBounds = [rect];


(lib.eyebrows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil2_5_img();
	this.instance.setTransform(91.5,-56.7,1,1,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_2_check_1_mc();
	this.check_mc.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuIlIAAxKMAldAAAIAARKg");
	this.shape.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-72,240,128.8);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil1_5_img();
	this.instance.setTransform(-106.9,-4.1,1,1,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhHCIAAuCMAnDAAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-45,250,90);
p.frameBounds = [rect];


(lib.eyebrows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil2_4_img();
	this.instance.setTransform(91.6,-56.8,1,1,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_2_check_1_mc();
	this.check_mc.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuIlIAAxKMAldAAAIAARKg");
	this.shape.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-72,240,128.8);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil1_4_img();
	this.instance.setTransform(-106.9,-4.1,1,1,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhHCIAAuCMAnDAAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-45,250,90);
p.frameBounds = [rect];


(lib.eyebrows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil2_3_img();
	this.instance.setTransform(91.6,-56.7,1,1,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_2_check_1_mc();
	this.check_mc.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuIlIAAxKMAldAAAIAARKg");
	this.shape.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-72,240,128.8);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil1_3_img();
	this.instance.setTransform(-106.9,-4.1,1,1,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhHCIAAuCMAnDAAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-45,250,90);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil1_2_img();
	this.instance.setTransform(-106.9,-4.1,1,1,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_1_check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhHCIAAuCMAnDAAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-45,250,90);
p.frameBounds = [rect];


(lib.dressupPanel_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(0,400);

	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(180,-150);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-370,435,1020);
p.frameBounds = [rect];


(lib.dressupPanel_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-232,9);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(230,5);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-287,-385,572,1035);
p.frameBounds = [rect];


(lib.dressupPanel_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-215,-60);

	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(215,-60);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-390,540,1040);
p.frameBounds = [rect];


(lib.dressupPanel_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-232,9);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(230,5);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-287,-310,572,960);
p.frameBounds = [rect];


(lib.dressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-140,200);

	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(140,200);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-320,420,970);
p.frameBounds = [rect];


(lib.dressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140,200);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140,200);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-320,420,970);
p.frameBounds = [rect];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(214,-70);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(214,-70);

	this.faceart_0 = new lib.faceart_0_mc();
	this.faceart_0.setTransform(214,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_0}]}).to({state:[]},2).to({state:[{t:this.shadows_0}]},3).to({state:[]},3).to({state:[{t:this.faceart_0}]},2).wait(2));

	// options
	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(0,75);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(70,-95);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(-70,-95);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(70,75);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(-70,75);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(0,-95);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(50,80);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(-50,-100);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(-50,80);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(50,-100);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(50,80);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(-50,-100);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(-20,75);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(20,-115);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(20,75);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-20,-115);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(-20,75);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(20,-115);

	this.eyebrows_6 = new lib.eyebrows_6_2_mc();
	this.eyebrows_6.setTransform(0,-100);

	this.eyebrows_3 = new lib.eyebrows_3_2_mc();
	this.eyebrows_3.setTransform(0,140);

	this.eyebrows_2 = new lib.eyebrows_2_2_mc();
	this.eyebrows_2.setTransform(0,20);

	this.eyebrows_1 = new lib.eyebrows_1_2_mc();
	this.eyebrows_1.setTransform(0,140);

	this.eyebrows_5 = new lib.eyebrows_5_2_mc();
	this.eyebrows_5.setTransform(0,20);

	this.eyebrows_4 = new lib.eyebrows_4_2_mc();
	this.eyebrows_4.setTransform(0,-100);

	this.faceart_3 = new lib.faceart_3_2_mc();
	this.faceart_3.setTransform(-75,100);

	this.faceart_2 = new lib.faceart_2_2_mc();
	this.faceart_2.setTransform(75,0);

	this.faceart_1 = new lib.faceart_1_2_mc();
	this.faceart_1.setTransform(-75,-100);

	this.faceart_6 = new lib.faceart_6_2_mc();
	this.faceart_6.setTransform(75,100);

	this.faceart_5 = new lib.faceart_5_2_mc();
	this.faceart_5.setTransform(-75,0);

	this.faceart_4 = new lib.faceart_4_2_mc();
	this.faceart_4.setTransform(75,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_6}]}).to({state:[{t:this.lips_5},{t:this.lips_4},{t:this.lips_3}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_6}]},1).to({state:[{t:this.eyes_3},{t:this.eyes_4}]},1).to({state:[{t:this.eyes_5},{t:this.eyes_1}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2}]},1).to({state:[{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_6}]},1).to({state:[{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_1}]},1).to({state:[{t:this.faceart_1},{t:this.faceart_2},{t:this.faceart_3}]},1).to({state:[{t:this.faceart_4},{t:this.faceart_5},{t:this.faceart_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(0,160);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(0,-10);

	this.instance_2 = new lib.shelf_1_mc();
	this.instance_2.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:-10}},{t:this.instance,p:{y:160}}]}).to({state:[{t:this.instance_1,p:{y:-20}},{t:this.instance,p:{y:160}}]},2).to({state:[{t:this.instance_1,p:{y:-30}},{t:this.instance,p:{y:160}}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:40}},{t:this.instance,p:{y:-80}}]},3).to({state:[]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-195,480,385);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-240,-220,480,420), rect, rect, rect=new cjs.Rectangle(-240,-210,480,400), rect, rect, rect=new cjs.Rectangle(-240,-172,480,368.8), rect, rect=new cjs.Rectangle(-165,-190,403,380), rect];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(-215,-70);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-215,-70);

	this.faceart_0 = new lib.faceart_0_mc();
	this.faceart_0.setTransform(-215,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_0}]}).to({state:[]},2).to({state:[{t:this.shadows_0}]},3).to({state:[]},3).to({state:[{t:this.faceart_0}]},2).wait(2));

	// options
	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(0,95);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(75,-85);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(-75,-85);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(0,95);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(75,-85);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-75,-85);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(50,80);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(-50,-110);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(-50,80);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(50,-110);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(50,80);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(-50,-110);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(40,110);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-60,-70);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(40,110);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-60,-70);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(40,110);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-60,-70);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(0,145);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(0,-95);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(0,25);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(0,145);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(0,25);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(0,-95);

	this.faceart_3 = new lib.faceart_3_1_mc();
	this.faceart_3.setTransform(-75.1,99.9,1,1,0,0,0,-0.1,-0.1);

	this.faceart_2 = new lib.faceart_2_1_mc();
	this.faceart_2.setTransform(75,0);

	this.faceart_1 = new lib.faceart_1_1_mc();
	this.faceart_1.setTransform(-75.1,-100,1,1,0,0,0,-0.1,0);

	this.faceart_6 = new lib.faceart_6_1_mc();
	this.faceart_6.setTransform(75,100);

	this.faceart_5 = new lib.faceart_5_1_mc();
	this.faceart_5.setTransform(-75.1,0.1,1,1,0,0,0,-0.1,0.1);

	this.faceart_4 = new lib.faceart_4_1_mc();
	this.faceart_4.setTransform(75.1,-100.1,1,1,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3}]}).to({state:[{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_6}]},1).to({state:[{t:this.eyes_3},{t:this.eyes_4}]},1).to({state:[{t:this.eyes_5},{t:this.eyes_1}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2}]},1).to({state:[{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3}]},1).to({state:[{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).to({state:[{t:this.faceart_1},{t:this.faceart_2},{t:this.faceart_3}]},1).to({state:[{t:this.faceart_4},{t:this.faceart_5},{t:this.faceart_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(0,160);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(0,-20);

	this.instance_2 = new lib.shelf_1_mc();
	this.instance_2.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:-20}},{t:this.instance,p:{y:160}}]}).to({state:[{t:this.instance_1,p:{y:-30}},{t:this.instance,p:{y:160}}]},2).to({state:[{t:this.instance_1,p:{y:-20}},{t:this.instance,p:{y:160}}]},3).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:40}},{t:this.instance,p:{y:-80}}]},3).to({state:[]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-180,480,370);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-240,-230,480,430), rect, rect, rect=new cjs.Rectangle(-240,-170,480,380), rect, rect, rect=new cjs.Rectangle(-240,-140,480,330), rect, rect=new cjs.Rectangle(-239,-190,404,380), rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-195,480,385);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-180,480,370);
p.frameBounds = [rect];


(lib.background_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(832,72.5);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(543,299);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.background_10_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(1060,148);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(1102,365);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(424,239);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(20,187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_9_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(701,475);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(491,209);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(-343,212);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(-221,416);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(990,410);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_5 = new lib.background_7_img();
	this.instance_5.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(1138,190);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(1063,162);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(1031,478);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(572,163);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(668,425);

	this.instance_5 = new lib.blinking_light_3_2_mc();
	this.instance_5.setTransform(115,68);

	this.instance_6 = new lib.blinking_light_3_2_mc();
	this.instance_6.setTransform(-65,177);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_7 = new lib.background_6_img();
	this.instance_7.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(630,377);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(15).call(this.frame_59).wait(1));

	// animation
	this.instance = new lib.title_mc();
	this.instance.setTransform(0,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({rotation:-10},0).to({rotation:5,y:-50},15).to({rotation:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-285,121,535,299.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-311.7,138.4,578.8,323.2), new cjs.Rectangle(-309.3,119.1,574.9,315.1), new cjs.Rectangle(-306.9,96.3,571.2,310.7), new cjs.Rectangle(-304.5,70,567.2,309.5), new cjs.Rectangle(-301.9,43.8,563.1,308.3), new cjs.Rectangle(-299.3,17.6,558.8,307), new cjs.Rectangle(-296.6,-8.4,554.4,305.6), new cjs.Rectangle(-293.8,-34.5,549.8,304), new cjs.Rectangle(-290.5,-61,544.2,302.2), new cjs.Rectangle(-287.4,-87,539.1,300.5), new cjs.Rectangle(-285,-112.4,535,299), new cjs.Rectangle(-286.3,-140.6,538.4,308.3), new cjs.Rectangle(-287.6,-168.8,541.6,317.5), new cjs.Rectangle(-288.7,-196.9,544.6,326.5), new cjs.Rectangle(-289.9,-225,547.6,335.5), new cjs.Rectangle(-290.9,-253.1,550.4,344.5), new cjs.Rectangle(-289.8,-238.4,547.6,335.6), new cjs.Rectangle(-288.7,-223.6,544.6,326.6), new cjs.Rectangle(-287.6,-208.8,541.7,317.5), new cjs.Rectangle(-286.3,-193.9,538.4,308.3), new cjs.Rectangle(-285,-179,535,299.1)];


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


(lib.Bubble_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect];


(lib.bubble_1_2_mc = function(mode,startPosition,loop) {
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
				var bubble_mc = new lib.Bubble_2();
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
	this.instance = new lib.Bubble_2();
	this.instance.setTransform(600,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,665);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1050.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(700,500,0.895,0.895);
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
	this.credits_btn.setTransform(590,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(310,520);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.animation_grass_mc();
	this.instance_2.setTransform(110,600,1,1,0,0,180);

	this.instance_3 = new lib.animation_grass_mc();
	this.instance_3.setTransform(610,600,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// heroes
	this.instance_4 = new lib.heroes_0_mc();
	this.instance_4.setTransform(0.4,0.5,1,1,0,0,0,0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-201,-1,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_5 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-959,-280.8,2726,1375.9);
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
	this.instance.alpha = 0.301;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-201,-1,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// decor
	this.instance_1 = new lib.animation_starfish_mc();
	this.instance_1.setTransform(400,530);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.quest_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":229});

	// timeline functions:
	this.frame_0 = function() {
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
	this.frame_59 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_79 = function() {
		try
		{
			app.addSoundFunc("open_2_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(20).call(this.frame_79).wait(151));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(543,700,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(19).to({y:460},10).to({y:500},5).wait(25).to({y:700},10).wait(161));

	// suitcase
	this.instance = new lib.suitcase_2_2_mc();
	this.instance.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({y:350},5).to({y:900},15).wait(131));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_2_mc();
	this.dressupPanel_mc.setTransform(540,900,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({scaleX:1,scaleY:1,y:350},14).to({y:410},5).wait(40).to({y:360},5).to({scaleX:0.69,scaleY:0.69,y:1000},15).wait(151));

	// suitcase
	this.instance_1 = new lib.suitcase_1_2_mc();
	this.instance_1.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({y:350},5).to({y:900},15).wait(131));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(114).to({_off:false},0).to({_off:true},66).wait(50));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(150,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(99).to({x:400},15).wait(116));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({alpha:1},15).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.5,1,788.6,1347.3);
p.frameBounds = [rect, new cjs.Rectangle(-8.5,1,788.6,1322.4), new cjs.Rectangle(-8.5,1,788.6,1297.5), new cjs.Rectangle(-8.5,1,788.6,1272.6), new cjs.Rectangle(-8.5,1,788.6,1247.7), new cjs.Rectangle(-8.5,1,788.6,1222.8), new cjs.Rectangle(-8.5,1,788.6,1197.9), new cjs.Rectangle(-8.5,1,788.6,1173.1), new cjs.Rectangle(-8.5,1,788.6,1148.2), new cjs.Rectangle(-8.5,1,788.6,1123.3), new cjs.Rectangle(-8.5,1,788.6,1098.4), new cjs.Rectangle(-8.5,1,788.6,1073.5), new cjs.Rectangle(-8.5,1,788.6,1048.7), new cjs.Rectangle(-8.5,1,788.6,1023.8), new cjs.Rectangle(-8.5,-20,788.6,1020), new cjs.Rectangle(-8.5,-8,788.6,1020), new cjs.Rectangle(-8.5,1,788.6,1023), new cjs.Rectangle(-8.5,1,788.6,1035), new cjs.Rectangle(-8.5,1,788.6,1047), rect=new cjs.Rectangle(-8.5,1,788.6,1059), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-8.5,1,788.6,1049), new cjs.Rectangle(-8.5,1,788.6,1039), new cjs.Rectangle(-8.5,1,788.6,1029), new cjs.Rectangle(-8.5,0,788.6,1020), new cjs.Rectangle(-8.5,-10,788.6,1020), new cjs.Rectangle(-8.5,1,788.6,1038.2), new cjs.Rectangle(-8.5,1,788.6,1067.5), new cjs.Rectangle(-8.5,1,788.6,1096.7), new cjs.Rectangle(-8.5,1,788.6,1125.8), new cjs.Rectangle(-8.5,1,788.6,1155.1), new cjs.Rectangle(-8.5,1,788.6,1184.3), new cjs.Rectangle(-8.5,1,788.6,1213.5), new cjs.Rectangle(-8.5,1,788.6,1242.7), new cjs.Rectangle(-8.5,1,788.6,1272), new cjs.Rectangle(-8.5,1,788.6,1301.2), new cjs.Rectangle(-8.5,1,788.6,1330.4), new cjs.Rectangle(-8.5,1,788.6,1359.7), new cjs.Rectangle(-8.5,1,788.6,1388.8), new cjs.Rectangle(-8.5,1,788.6,1418.1), rect=new cjs.Rectangle(-8.5,1,788.6,1447.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1458.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-387,1620,1835.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1458.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":229});

	// timeline functions:
	this.frame_0 = function() {
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
	this.frame_59 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_79 = function() {
		try
		{
			app.addSoundFunc("open_2_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_214 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(20).call(this.frame_79).wait(135).call(this.frame_214).wait(16));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(280,700,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(14).to({y:480},10).to({y:520},5).wait(30).to({y:700},10).wait(161));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700,700,0.737,0.737);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(209).to({_off:false},0).to({scaleX:1,scaleY:1,y:450},10).to({scaleX:0.9,scaleY:0.9,y:500},5).wait(6));

	// suitcase
	this.instance_1 = new lib.suitcase_2_1_mc();
	this.instance_1.setTransform(280,410);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({y:350},5).to({y:900},15).wait(131));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_1_mc();
	this.dressupPanel_mc.setTransform(280,800.1,0.35,0.35,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({regY:0,scaleX:1,scaleY:1,y:360},14).to({y:410},5).wait(40).to({y:360},5).to({regY:0.1,scaleX:0.35,scaleY:0.35,y:800.1},15).wait(151));

	// suitcase
	this.instance_2 = new lib.suitcase_1_1_mc();
	this.instance_2.setTransform(280,410);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({y:350},5).to({y:900},15).wait(131));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(114).to({_off:false},0).to({_off:true},66).wait(50));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(630,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).to({x:650},39).wait(60).to({x:630},0).to({x:400},15).wait(116));

	// shadow
	this.instance_3 = new lib.shadow_dressup_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({alpha:1},15).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,5.5,736,1021.8);
p.frameBounds = [rect, new cjs.Rectangle(30,5.5,736.5,1020.5), new cjs.Rectangle(30,5.5,737,1019.3), new cjs.Rectangle(30,5.5,737.5,1018), new cjs.Rectangle(30,5.5,738,1016.7), new cjs.Rectangle(30,5.5,738.5,1015.5), new cjs.Rectangle(30,5.5,739.1,1014.3), new cjs.Rectangle(30,5.5,739.6,1013), new cjs.Rectangle(30,5.5,740.1,1011.8), new cjs.Rectangle(30,5.5,740.6,1010.6), new cjs.Rectangle(30,5.5,741.1,1009.3), new cjs.Rectangle(30,5.5,741.6,1008.1), new cjs.Rectangle(19.6,5.5,752.5,1006.8), new cjs.Rectangle(6.2,5.5,766.4,1005.6), new cjs.Rectangle(-7,-25,780.2,1035), new cjs.Rectangle(-7,-15,780.7,1035), new cjs.Rectangle(-7,-5,781.2,1035), new cjs.Rectangle(-7,5,781.7,1035), new cjs.Rectangle(-7,5.5,782.2,1044.5), new cjs.Rectangle(-7,5.5,782.7,1054.5), new cjs.Rectangle(-7,5.5,783.2,1054.5), new cjs.Rectangle(-7,5.5,783.7,1054.5), new cjs.Rectangle(-7,5.5,784.3,1054.5), new cjs.Rectangle(-7,5.5,784.8,1054.5), new cjs.Rectangle(-7,5.5,785.3,1054.5), new cjs.Rectangle(-7,5.5,785.8,1054.5), new cjs.Rectangle(-7,5.5,786.3,1054.5), new cjs.Rectangle(-7,5.5,786.8,1054.5), new cjs.Rectangle(-7,5.5,787.3,1054.5), new cjs.Rectangle(-7,5.5,787.8,1054.5), new cjs.Rectangle(-7,5.5,788.4,1054.5), new cjs.Rectangle(-7,5.5,788.9,1054.5), new cjs.Rectangle(-7,5.5,789.4,1054.5), new cjs.Rectangle(-7,5.5,789.9,1054.5), new cjs.Rectangle(-7,5.5,790.4,1054.5), new cjs.Rectangle(-7,5.5,790.9,1054.5), new cjs.Rectangle(-7,5.5,791.4,1054.5), new cjs.Rectangle(-7,5.5,791.9,1054.5), new cjs.Rectangle(-7,5.5,792.5,1054.5), rect=new cjs.Rectangle(-7,5.5,793,1054.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-7,5.5,793,1044.5), new cjs.Rectangle(-7,5,793,1035), new cjs.Rectangle(-7,-5,793,1035), new cjs.Rectangle(-7,-15,793,1035), new cjs.Rectangle(-7,-25,793,1035), new cjs.Rectangle(5.4,5.5,780.6,1005.7), new cjs.Rectangle(17.9,5.5,768.1,1006.8), new cjs.Rectangle(30,5.5,756,1008), new cjs.Rectangle(30,5.5,756,1009.1), new cjs.Rectangle(30,5.5,756,1010.3), new cjs.Rectangle(30,5.5,756,1011.4), new cjs.Rectangle(30,5.5,756,1012.5), new cjs.Rectangle(30,5.5,756,1013.7), new cjs.Rectangle(30,5.5,756,1014.9), new cjs.Rectangle(30,5.5,756,1016), new cjs.Rectangle(30,5.5,756,1017.2), new cjs.Rectangle(30,5.5,756,1018.4), new cjs.Rectangle(30,5.5,756,1019.5), new cjs.Rectangle(30,5.5,756,1020.6), rect=new cjs.Rectangle(30,5.5,756,1021.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,5.5,756,1031.2), new cjs.Rectangle(30,5.5,756,1067.9), rect=new cjs.Rectangle(-410,-10,1620,1120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-387,1620,1497), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":199});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("open_sound", 0.2);
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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(30).call(this.frame_54).wait(65).call(this.frame_119).wait(81));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(543,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({y:450},10).to({y:500},5).wait(35).to({y:700},10).wait(71));

	// suitcase
	this.instance = new lib.suitcase_2_2_mc();
	this.instance.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:900},0).wait(23).to({y:300},15).to({y:400},5).wait(156));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_2_mc();
	this.dressupPanel_mc.setTransform(540,410);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1100},0).wait(48).to({scaleX:0.37,scaleY:0.37,y:900},0).to({scaleX:1,scaleY:1,y:340},15).to({y:410},5).wait(50).to({y:350},5).to({scaleX:0.37,scaleY:0.37,y:800},15).wait(61));

	// suitcase
	this.instance_1 = new lib.suitcase_1_2_mc();
	this.instance_1.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:900},0).wait(23).to({y:300},15).to({y:400},5).wait(156));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(150,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:-800},0).wait(68).to({x:250},15).to({x:150},5).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.5,1,818.6,1059);
p.frameBounds = [rect, rect=new cjs.Rectangle(-958.5,1,1768.6,1749), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-958.5,1,1738.6,1139.7), new cjs.Rectangle(-958.5,1,1738.6,1129.6), new cjs.Rectangle(-958.5,1,1738.6,1119.6), new cjs.Rectangle(-958.5,1,1738.6,1109.5), new cjs.Rectangle(-958.5,1,1738.6,1099.4), new cjs.Rectangle(-958.5,1,1738.6,1089.5), new cjs.Rectangle(-958.5,1,1738.6,1079.4), new cjs.Rectangle(-958.5,1,1738.6,1069.3), new cjs.Rectangle(-958.5,1,1738.6,1059.3), new cjs.Rectangle(-958.5,1,1738.6,1049.3), new cjs.Rectangle(-958.5,1,1738.6,1039.2), new cjs.Rectangle(-958.5,1,1738.6,1029.2), new cjs.Rectangle(-958.5,1,1738.6,1019.1), new cjs.Rectangle(-958.5,1,1745.9,1009.1), new cjs.Rectangle(-958.5,1,1757.3,999.1), new cjs.Rectangle(-958.5,-50,1768.6,1040), new cjs.Rectangle(-958.5,-36,1768.6,1040), new cjs.Rectangle(-958.5,-22,1768.6,1040), new cjs.Rectangle(-958.5,-8,1768.6,1040), new cjs.Rectangle(-958.5,1,1768.6,1045), new cjs.Rectangle(-958.5,1,1768.6,1059), new cjs.Rectangle(-888.5,1,1698.6,1059), new cjs.Rectangle(-818.5,1,1628.6,1059), new cjs.Rectangle(-748.5,1,1558.6,1059), new cjs.Rectangle(-678.5,1,1488.6,1059), new cjs.Rectangle(-608.5,1,1418.6,1059), new cjs.Rectangle(-538.5,1,1348.6,1059), new cjs.Rectangle(-468.5,1,1278.6,1059), new cjs.Rectangle(-398.5,1,1208.6,1059), new cjs.Rectangle(-328.5,1,1138.6,1059), new cjs.Rectangle(-258.5,1,1068.6,1059), new cjs.Rectangle(-188.5,1,998.6,1059), new cjs.Rectangle(-118.5,1,928.6,1059), new cjs.Rectangle(-48.5,1,858.6,1059), new cjs.Rectangle(21.5,1,788.6,1059), new cjs.Rectangle(91.5,1,718.6,1059), new cjs.Rectangle(71.5,1,738.6,1059), new cjs.Rectangle(51.5,1,758.6,1059), new cjs.Rectangle(31.5,1,778.6,1059), new cjs.Rectangle(11.5,1,798.6,1059), rect=new cjs.Rectangle(-8.5,1,818.6,1059), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-8.5,1,818.6,1047), new cjs.Rectangle(-8.5,-4,818.6,1040), new cjs.Rectangle(-8.5,-16,818.6,1040), new cjs.Rectangle(-8.5,-28,818.6,1040), new cjs.Rectangle(-8.5,-40,818.6,1040), new cjs.Rectangle(-8.5,1,807.2,1001.7), new cjs.Rectangle(-8.5,1,795.8,1004.4), new cjs.Rectangle(-8.5,1,788.6,1007.1), new cjs.Rectangle(-8.5,1,788.6,1009.9), new cjs.Rectangle(-8.5,1,788.6,1012.6), new cjs.Rectangle(-8.5,1,788.6,1015.3), new cjs.Rectangle(-8.5,1,788.6,1018), new cjs.Rectangle(-8.5,1,788.6,1020.7), new cjs.Rectangle(-8.5,1,788.6,1023.4), new cjs.Rectangle(-8.5,1,788.6,1026.1), new cjs.Rectangle(-8.5,1,788.6,1028.8), new cjs.Rectangle(-8.5,1,788.6,1031.6), new cjs.Rectangle(-8.5,1,788.6,1034.3), new cjs.Rectangle(-8.5,1,788.6,1037), rect=new cjs.Rectangle(-8.5,1,788.6,1039.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":189});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("open_sound", 0.2);
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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(30).call(this.frame_54).wait(65).call(this.frame_119).wait(71));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(280,520,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({y:480},10).to({y:520},5).wait(35).to({y:700},10).wait(61));

	// suitcase
	this.instance = new lib.suitcase_2_1_mc();
	this.instance.setTransform(280,410);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:900},0).wait(23).to({y:350},15).to({y:410},5).wait(146));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_1_mc();
	this.dressupPanel_mc.setTransform(280,410);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(48).to({regX:0.1,regY:0.1,scaleX:0.35,scaleY:0.35,x:280.1,y:900.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:280,y:350},15).to({y:410},5).wait(50).to({y:350},5).to({scaleX:0.35,scaleY:0.35,y:900},15).wait(51));

	// suitcase
	this.instance_1 = new lib.suitcase_1_1_mc();
	this.instance_1.setTransform(280,410);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:900},0).wait(23).to({y:350},15).to({y:410},5).wait(146));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(630,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1500},0).wait(68).to({x:550},15).to({x:630},5).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7,5.5,773,1054.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-7,5.5,1643,1644.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,5.5,1606,1121.8), new cjs.Rectangle(30,5.5,1606,1113.3), new cjs.Rectangle(30,5.5,1606,1104.7), new cjs.Rectangle(30,5.5,1606,1096.3), new cjs.Rectangle(30,5.5,1606,1087.8), new cjs.Rectangle(30,5.5,1606,1079.3), new cjs.Rectangle(30,5.5,1606,1070.9), new cjs.Rectangle(30,5.5,1606,1062.3), new cjs.Rectangle(30,5.5,1606,1053.8), new cjs.Rectangle(30,5.5,1606,1045.3), new cjs.Rectangle(30,5.5,1606,1036.8), new cjs.Rectangle(30,5.5,1606,1028.4), new cjs.Rectangle(30,5.5,1606,1019.9), new cjs.Rectangle(17.8,5.5,1618.2,1011.4), new cjs.Rectangle(5.3,5.5,1630.7,1002.8), new cjs.Rectangle(-7,5.5,1643,994.5), new cjs.Rectangle(-7,5.5,1643,1006.5), new cjs.Rectangle(-7,5.5,1643,1018.5), new cjs.Rectangle(-7,5.5,1643,1030.5), new cjs.Rectangle(-7,5.5,1643,1042.5), new cjs.Rectangle(-7,5.5,1643,1054.5), new cjs.Rectangle(-7,5.5,1579.6,1054.5), new cjs.Rectangle(-7,5.5,1516.3,1054.5), new cjs.Rectangle(-7,5.5,1453,1054.5), new cjs.Rectangle(-7,5.5,1389.7,1054.5), new cjs.Rectangle(-7,5.5,1326.3,1054.5), new cjs.Rectangle(-7,5.5,1263,1054.5), new cjs.Rectangle(-7,5.5,1199.7,1054.5), new cjs.Rectangle(-7,5.5,1136.3,1054.5), new cjs.Rectangle(-7,5.5,1073,1054.5), new cjs.Rectangle(-7,5.5,1009.6,1054.5), new cjs.Rectangle(-7,5.5,946.3,1054.5), new cjs.Rectangle(-7,5.5,883,1054.5), new cjs.Rectangle(-7,5.5,819.6,1054.5), new cjs.Rectangle(-7,5.5,756.3,1054.5), new cjs.Rectangle(-7,5.5,693,1054.5), new cjs.Rectangle(-7,5.5,709,1054.5), new cjs.Rectangle(-7,5.5,725,1054.5), new cjs.Rectangle(-7,5.5,741,1054.5), new cjs.Rectangle(-7,5.5,757,1054.5), rect=new cjs.Rectangle(-7,5.5,773,1054.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-7,5.5,773,1042.5), new cjs.Rectangle(-7,5.5,773,1030.5), new cjs.Rectangle(-7,5.5,773,1018.5), new cjs.Rectangle(-7,5.5,773,1006.5), new cjs.Rectangle(-7,5.5,773,994.5), new cjs.Rectangle(5.4,5.5,760.6,1003), new cjs.Rectangle(17.9,5.5,748.1,1011.5), new cjs.Rectangle(30,5.5,736,1020), new cjs.Rectangle(30,5.5,736,1028.4), new cjs.Rectangle(30,5.5,736,1036.9), new cjs.Rectangle(30,5.5,736,1045.4), new cjs.Rectangle(30,5.5,736,1053.9), new cjs.Rectangle(30,5.5,736,1062.4), new cjs.Rectangle(30,5.5,736,1070.9), new cjs.Rectangle(30,5.5,736,1079.3), new cjs.Rectangle(30,5.5,736,1087.8), new cjs.Rectangle(30,5.5,736,1096.3), new cjs.Rectangle(30,5.5,736,1104.8), new cjs.Rectangle(30,5.5,736,1113.3), rect=new cjs.Rectangle(30,5.5,736,1121.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":279});

	// timeline functions:
	this.frame_54 = function() {
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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_264 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(65).call(this.frame_119).wait(145).call(this.frame_264).wait(16));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({y:450},10).to({y:500},5).wait(25).to({y:450},5).to({y:700},10).wait(156));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700,700,0.737,0.737);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(259).to({_off:false},0).to({scaleX:1,scaleY:1,y:450},10).to({scaleX:0.9,scaleY:0.9,y:500},5).wait(6));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_2_mc();
	this.dressupPanel_mc.setTransform(560,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(48).to({x:460},15).to({x:560},5).wait(50).to({x:500},5).to({x:1500},15).wait(141));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(200,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:-700},0).wait(23).to({x:300},15).to({x:200},5).wait(95).to({x:400},20).wait(121));

	// decor
	this.instance_1 = new lib.background_8_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).to({alpha:1},20).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(41.5,-20,728.6,970);
p.frameBounds = [rect, rect=new cjs.Rectangle(-858.5,-20,2568.6,970), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-791.9,-20,2501.9,970), new cjs.Rectangle(-725.2,-20,2435.2,970), new cjs.Rectangle(-658.5,-20,2368.6,970), new cjs.Rectangle(-591.9,-20,2301.9,970), new cjs.Rectangle(-525.2,-20,2235.2,970), new cjs.Rectangle(-458.5,-20,2168.6,970), new cjs.Rectangle(-391.9,-20,2101.9,970), new cjs.Rectangle(-325.2,-20,2035.2,970), new cjs.Rectangle(-258.5,-20,1968.6,970), new cjs.Rectangle(-191.9,-20,1901.9,970), new cjs.Rectangle(-125.2,-20,1835.2,970), new cjs.Rectangle(-58.5,-20,1768.6,970), new cjs.Rectangle(8.1,-20,1701.9,970), new cjs.Rectangle(74.8,-20,1635.2,970), new cjs.Rectangle(141.5,-20,1568.6,970), new cjs.Rectangle(121.5,-20,1588.6,970), new cjs.Rectangle(101.5,-20,1608.6,970), new cjs.Rectangle(81.5,-20,1628.6,970), new cjs.Rectangle(61.5,-20,1648.6,970), rect=new cjs.Rectangle(41.5,-20,1668.6,970), rect, rect, rect, rect, rect, new cjs.Rectangle(41.5,-20,1599.2,970), new cjs.Rectangle(41.5,-20,1529.9,970), new cjs.Rectangle(41.5,-20,1460.6,970), new cjs.Rectangle(41.5,-20,1391.3,970), new cjs.Rectangle(41.5,-20,1321.9,970), new cjs.Rectangle(41.5,-20,1252.6,970), new cjs.Rectangle(41.5,-20,1183.3,970), new cjs.Rectangle(41.5,-20,1113.9,970), new cjs.Rectangle(41.5,-20,1044.6,970), new cjs.Rectangle(41.5,-20,975.2,970), new cjs.Rectangle(41.5,-20,905.9,970), new cjs.Rectangle(41.5,-20,836.6,970), new cjs.Rectangle(41.5,-20,767.2,970), new cjs.Rectangle(41.5,-20,697.9,970), new cjs.Rectangle(41.5,-20,628.6,970), new cjs.Rectangle(41.5,-20,648.6,970), new cjs.Rectangle(41.5,-20,668.6,970), new cjs.Rectangle(41.5,-20,688.6,970), new cjs.Rectangle(41.5,-20,708.6,970), rect=new cjs.Rectangle(41.5,-20,728.6,970), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(41.5,-20,716.6,970), new cjs.Rectangle(41.5,-20,704.6,970), new cjs.Rectangle(41.5,-20,692.6,970), new cjs.Rectangle(41.5,-20,680.6,970), new cjs.Rectangle(41.5,-20,668.6,970), new cjs.Rectangle(41.5,-20,735.2,970), new cjs.Rectangle(41.5,-20,801.9,970), new cjs.Rectangle(41.5,-20,868.6,970), new cjs.Rectangle(41.5,-20,935.2,970), new cjs.Rectangle(41.5,-20,1001.9,970), new cjs.Rectangle(41.5,-20,1068.6,970), new cjs.Rectangle(41.5,-20,1135.2,970), new cjs.Rectangle(41.5,-20,1201.9,970), new cjs.Rectangle(41.5,-20,1268.6,970), new cjs.Rectangle(41.5,-20,1335.2,970), new cjs.Rectangle(41.5,-20,1401.9,970), new cjs.Rectangle(41.5,-20,1468.6,970), new cjs.Rectangle(41.5,-20,1535.2,970), new cjs.Rectangle(41.5,-20,1601.9,970), rect=new cjs.Rectangle(-400,-20,2110,970), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":269});

	// timeline functions:
	this.frame_54 = function() {
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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(65).call(this.frame_119).wait(151));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(240,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({y:450},10).to({y:500},5).wait(25).to({y:450},5).to({y:700},10).wait(146));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_1_mc();
	this.dressupPanel_mc.setTransform(240,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(48).to({x:340},15).to({x:240},5).wait(50).to({x:300},5).to({x:-700},15).wait(131));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(600,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1500},0).wait(23).to({x:500},15).to({x:600},5).wait(95).to({x:400},20).wait(80).to({x:-800},30).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-201,-1,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(270));

	// decor
	this.instance = new lib.background_5_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).to({alpha:1},20).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-20,1200,970);
p.frameBounds = [rect, rect=new cjs.Rectangle(-910,-20,2546,970), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-910,-20,2479.3,970), new cjs.Rectangle(-910,-20,2412.6,970), new cjs.Rectangle(-910,-20,2346,970), new cjs.Rectangle(-910,-20,2279.3,970), new cjs.Rectangle(-910,-20,2212.6,970), new cjs.Rectangle(-910,-20,2146,970), new cjs.Rectangle(-910,-20,2079.3,970), new cjs.Rectangle(-910,-20,2012.6,970), new cjs.Rectangle(-910,-20,1946,970), rect=new cjs.Rectangle(-910,-20,1910,970), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-840.6,-20,1840.7,970), new cjs.Rectangle(-771.3,-20,1771.4,970), new cjs.Rectangle(-702,-20,1702,970), new cjs.Rectangle(-632.7,-20,1632.7,970), new cjs.Rectangle(-563.3,-20,1563.4,970), new cjs.Rectangle(-494,-20,1494,970), new cjs.Rectangle(-424.7,-20,1424.7,970), new cjs.Rectangle(-355.3,-20,1355.3,970), new cjs.Rectangle(-286,-20,1286,970), new cjs.Rectangle(-216.6,-20,1216.7,970), rect=new cjs.Rectangle(-200,-20,1200,970), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-243.3,-20,1243.4,970), new cjs.Rectangle(-310,-20,1310,970), new cjs.Rectangle(-376.6,-20,1376.7,970), new cjs.Rectangle(-443.3,-20,1443.4,970), new cjs.Rectangle(-510,-20,1510,970), new cjs.Rectangle(-576.6,-20,1576.7,970), new cjs.Rectangle(-643.3,-20,1643.4,970), new cjs.Rectangle(-710,-20,1710,970), new cjs.Rectangle(-776.6,-20,1776.7,970), new cjs.Rectangle(-843.3,-20,1843.4,970), rect=new cjs.Rectangle(-910,-20,2110,970), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-933.6,-20,2133.6,970)];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_grass_mc();
	this.instance.setTransform(50,600,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(3).to({x:905},0).to({_off:true},3).wait(3));

	// hero_1
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(550,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:400,y:1200},0).wait(1).to({x:480,y:340},0).wait(1).to({x:250},0).wait(1).to({x:400,y:1200},0).wait(1).to({y:340},0).wait(1).to({x:550},0).wait(1).to({x:400,y:1200},0).wait(1).to({y:340},0).wait(1).to({x:250},0).wait(1).to({x:400},0).wait(1).to({y:1200},0).wait(1).to({x:550,y:340},0).wait(1).to({x:400,y:1200},0).wait(1).to({x:450,y:340},0).wait(1));

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(250,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:400},0).wait(1).to({y:1200},0).wait(1).to({x:550,y:340},0).wait(1).to({x:400},0).wait(1).to({y:1200},0).wait(1).to({x:250,y:340},0).wait(1).to({x:400},0).wait(1).to({y:1200},0).wait(1).to({x:550,y:340},0).wait(1).to({x:400,y:1200},0).wait(1).to({y:340},0).wait(1).to({x:250},0).wait(1).to({x:400},0).wait(1).to({y:1200},0).wait(1));

	// bg
	this.instance_1 = new lib.background_9_mc();

	this.instance_2 = new lib.background_10_mc();

	this.instance_3 = new lib.background_11_img();
	this.instance_3.setTransform(-400,0);

	this.instance_4 = new lib.background_4_mc();

	this.instance_5 = new lib.background_8_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,661.5);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,1499.9), new cjs.Rectangle(-400,0,1600,1521.5), new cjs.Rectangle(-400,0,1600,661.5), new cjs.Rectangle(-400,0,1600,1499.9), new cjs.Rectangle(-400,0,1600,1521.5), new cjs.Rectangle(-400,0,1600,661.5), new cjs.Rectangle(-400,0,1600,1499.9), new cjs.Rectangle(-400,0,1600,1521.5), new cjs.Rectangle(-400,0,1600,661.5), new cjs.Rectangle(-400,0,1600,1521.5), new cjs.Rectangle(-400,0,1600,1499.9), new cjs.Rectangle(-400,0,1600,661.5), new cjs.Rectangle(-400,0,1600,1499.9), new cjs.Rectangle(-400,0,1600,1521.5)];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-216,120);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(218,120);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-261,-300,524,950);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-216,120);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(218,120);

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
p.nominalBounds = rect = new cjs.Rectangle(-261,-300,524,950);
p.frameBounds = [rect];


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
	this.frame_1_mc.setTransform(0,-1,1,1,0,0,0,0,-1);

	this.frame_2_mc = new lib.quest_2_6_mc();
	this.frame_2_mc.setTransform(0,-1,1,1,0,0,0,0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.5,-349.4,818.6,1409.4);
p.frameBounds = [rect, new cjs.Rectangle(-8.5,-349.4,788.6,1697.7)];


(lib.quest_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_3 = new lib.object_3_5_mc();
	this.object_3.setTransform(700,500);
	this.object_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(2).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_5_mc();
	this.frame_1_mc.setTransform(-1,-2,1,1,0,0,0,-1,-2);

	this.frame_2_mc = new lib.quest_2_5_mc();
	this.frame_2_mc.setTransform(-1,-2,1,1,0,0,0,-1,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(2));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-201,-1,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-349.4,1200,1409.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,-349.4,1200,1376.7), rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
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
	this.object_2 = new lib.object_2_4_mc();
	this.object_2.setTransform(700,500);
	this.object_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_4_mc();
	this.frame_1_mc.setTransform(0,-1,1,1,0,0,0,0,-1);

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(41.5,-349.4,728.6,1299.4);
p.frameBounds = [rect, new cjs.Rectangle(41.5,-349.4,803.6,1299.4)];


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
	this.frame_1_mc.setTransform(-1,-2,1,1,0,0,0,-1,-2);

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-349.4,1200,1299.4);
p.frameBounds = [rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":279});

	// timeline functions:
	this.frame_59 = function() {
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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_264 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(60).call(this.frame_119).wait(145).call(this.frame_264).wait(16));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({y:450},10).to({y:500},5).wait(25).to({y:450},5).to({y:700},10).wait(156));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700,700,0.737,0.737);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(259).to({_off:false},0).to({scaleX:1,scaleY:1,y:450},10).to({scaleX:0.9,scaleY:0.9,y:500},5).wait(6));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(540,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(48).to({y:250},16).to({y:300},4).wait(50).to({y:250},5).to({y:1000},15).wait(141));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(170,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:1200},0).wait(23).to({y:315},15).to({y:350},5).wait(95).to({x:400,y:360},20).wait(121));

	// decor
	this.instance_1 = new lib.background_7_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).to({alpha:1},20).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.5,0,791.6,950);
p.frameBounds = [rect, rect=new cjs.Rectangle(11.5,620,791.6,1030), rect, rect, new cjs.Rectangle(-5.2,620,808.3,1030), rect=new cjs.Rectangle(11.5,620,791.6,1030), rect, rect, new cjs.Rectangle(-5.2,620,808.3,1030), rect=new cjs.Rectangle(11.5,620,791.6,1030), rect, rect, new cjs.Rectangle(-5.2,620,808.3,1030), rect=new cjs.Rectangle(11.5,620,791.6,1030), rect, rect, new cjs.Rectangle(-5.2,620,808.3,1030), rect=new cjs.Rectangle(11.5,620,791.6,1030), rect, rect, new cjs.Rectangle(-5.2,620,808.3,1030), rect=new cjs.Rectangle(11.5,620,791.6,1030), rect, rect, new cjs.Rectangle(-5.2,620,808.3,1030), rect=new cjs.Rectangle(11.5,620,791.6,1030), rect, rect, new cjs.Rectangle(-5.2,620,808.3,1030), new cjs.Rectangle(11.5,566,791.6,1084), new cjs.Rectangle(11.5,507,791.6,1143), new cjs.Rectangle(11.5,448,791.6,1202), new cjs.Rectangle(-5.2,389,808.3,1261), new cjs.Rectangle(11.5,330,791.6,1320), new cjs.Rectangle(11.5,271,791.6,1379), new cjs.Rectangle(11.5,212,791.6,1438), new cjs.Rectangle(-5.2,153,808.3,1497), new cjs.Rectangle(11.5,94,791.6,1556), new cjs.Rectangle(11.5,35,791.6,1615), new cjs.Rectangle(11.5,-24,791.6,1674), new cjs.Rectangle(-5.2,-17,808.3,1667), new cjs.Rectangle(11.5,-10,791.6,1660), new cjs.Rectangle(11.5,-3,791.6,1653), new cjs.Rectangle(11.5,4,791.6,1646), new cjs.Rectangle(-5.2,11,808.3,1639), rect=new cjs.Rectangle(11.5,11,791.6,1639), rect, rect, new cjs.Rectangle(-5.2,11,808.3,1639), new cjs.Rectangle(11.5,11,791.6,1639), new cjs.Rectangle(11.5,11,791.6,1592.2), new cjs.Rectangle(11.5,11,791.6,1545.3), new cjs.Rectangle(-5.2,11,808.3,1498.4), new cjs.Rectangle(11.5,11,791.6,1451.5), new cjs.Rectangle(11.5,11,791.6,1404.6), new cjs.Rectangle(11.5,11,791.6,1357.8), new cjs.Rectangle(-5.2,11,808.3,1310.9), new cjs.Rectangle(11.5,11,791.6,1264), new cjs.Rectangle(11.5,11,791.6,1217.2), new cjs.Rectangle(11.5,11,791.6,1170.3), new cjs.Rectangle(-5.2,11,808.3,1123.4), new cjs.Rectangle(11.5,11,791.6,1076.5), new cjs.Rectangle(11.5,11,791.6,1029.7), new cjs.Rectangle(11.5,11,791.6,982.8), new cjs.Rectangle(-5.2,-3.1,808.3,950), new cjs.Rectangle(11.5,-50,791.6,950), new cjs.Rectangle(11.5,-37.5,791.6,950), new cjs.Rectangle(11.5,-25,791.6,950), new cjs.Rectangle(-5.2,-12.5,808.3,950), rect=new cjs.Rectangle(11.5,0,791.6,950), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-5.2,0,808.3,950), rect=new cjs.Rectangle(11.5,0,791.6,950), rect, rect, rect, new cjs.Rectangle(-5.2,0,808.3,950), rect=new cjs.Rectangle(11.5,0,791.6,950), rect, rect, new cjs.Rectangle(-5.2,0,808.3,950), rect=new cjs.Rectangle(11.5,0,791.6,950), rect, rect, new cjs.Rectangle(-5.2,0,808.3,950), rect=new cjs.Rectangle(11.5,0,791.6,950), rect, rect, new cjs.Rectangle(-5.2,0,808.3,950), rect=new cjs.Rectangle(11.5,0,791.6,950), rect, rect, new cjs.Rectangle(-5.2,0,808.3,950), rect=new cjs.Rectangle(11.5,0,791.6,950), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(11.5,-10,791.6,950), new cjs.Rectangle(11.5,-20,791.6,950), new cjs.Rectangle(11.5,-30,791.6,950), new cjs.Rectangle(11.5,-40,791.6,950), new cjs.Rectangle(11.5,-50,791.6,950), new cjs.Rectangle(11.5,0,791.6,950), new cjs.Rectangle(11.5,11,791.6,989), new cjs.Rectangle(-5.2,11,808.3,1039), new cjs.Rectangle(11.5,11,791.6,1089), new cjs.Rectangle(11.5,11,791.6,1139), new cjs.Rectangle(11.5,11,791.6,1189), new cjs.Rectangle(-5.2,11,808.3,1239), new cjs.Rectangle(11.5,11,791.6,1289), new cjs.Rectangle(11.5,11,791.6,1339), new cjs.Rectangle(11.5,11,791.6,1389), new cjs.Rectangle(-5.2,11,808.3,1439), new cjs.Rectangle(11.5,11,791.6,1489), new cjs.Rectangle(11.5,11,791.6,1539), new cjs.Rectangle(11.5,11,791.6,1589), rect=new cjs.Rectangle(-400,0,1600,1650), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":269});

	// timeline functions:
	this.frame_59 = function() {
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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(60).call(this.frame_119).wait(151));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({y:450},10).to({y:500},5).wait(25).to({y:450},5).to({y:700},10).wait(146));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(260,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(48).to({y:250},15).to({y:300},5).wait(50).to({y:250},5).to({y:1000},15).wait(131));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(630,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:1200},0).wait(23).to({y:315},15).to({y:350},5).wait(95).to({x:400},20).wait(111));

	// decor
	this.instance = new lib.background_4_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).to({alpha:1},20).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,0,781,950);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1,620,781,1030), rect, rect, new cjs.Rectangle(-1,620,806.3,1030), rect=new cjs.Rectangle(-1,620,781,1030), rect, rect, new cjs.Rectangle(-1,620,806.3,1030), rect=new cjs.Rectangle(-1,620,781,1030), rect, rect, new cjs.Rectangle(-1,620,806.3,1030), rect=new cjs.Rectangle(-1,620,781,1030), rect, rect, new cjs.Rectangle(-1,620,806.3,1030), rect=new cjs.Rectangle(-1,620,781,1030), rect, rect, new cjs.Rectangle(-1,620,806.3,1030), rect=new cjs.Rectangle(-1,620,781,1030), rect, rect, new cjs.Rectangle(-1,620,806.3,1030), rect=new cjs.Rectangle(-1,620,781,1030), rect, rect, new cjs.Rectangle(-1,620,806.3,1030), new cjs.Rectangle(-1,580.5,781,1069.5), new cjs.Rectangle(-1,521.5,781,1128.5), new cjs.Rectangle(-1,462.5,781,1187.5), new cjs.Rectangle(-1,403.5,806.3,1246.5), new cjs.Rectangle(-1,344.5,781,1305.5), new cjs.Rectangle(-1,285.5,781,1364.5), new cjs.Rectangle(-1,226.5,781,1423.5), new cjs.Rectangle(-1,167.5,806.3,1482.5), new cjs.Rectangle(-1,108.5,781,1541.5), new cjs.Rectangle(-1,49.5,781,1600.5), new cjs.Rectangle(-1,-9.5,781,1659.5), new cjs.Rectangle(-1,-2.5,806.3,1652.5), new cjs.Rectangle(-1,4.5,781,1645.5), new cjs.Rectangle(-1,11.5,781,1638.5), new cjs.Rectangle(-1,18.5,781,1631.5), new cjs.Rectangle(-1,25.5,806.3,1624.5), rect=new cjs.Rectangle(-1,25.5,781,1624.5), rect, rect, new cjs.Rectangle(-1,25.5,806.3,1624.5), new cjs.Rectangle(-1,25.5,781,1624.5), new cjs.Rectangle(-1,25.5,781.1,1574.5), new cjs.Rectangle(-1,25.5,781.1,1524.5), new cjs.Rectangle(-1,25.5,806.3,1474.5), new cjs.Rectangle(-1,25.5,781.1,1424.5), new cjs.Rectangle(-1,25.5,781.1,1374.5), new cjs.Rectangle(-1,25.5,781.1,1324.5), new cjs.Rectangle(-1,25.5,806.3,1274.5), new cjs.Rectangle(-1,25.5,781.1,1224.5), new cjs.Rectangle(-1,25.5,781.1,1174.5), new cjs.Rectangle(-1,25.5,781.1,1124.5), new cjs.Rectangle(-1,25.5,806.3,1074.5), new cjs.Rectangle(-1,25.5,781.1,1024.5), new cjs.Rectangle(-1,25.5,781.1,974.5), new cjs.Rectangle(-1,0,781.1,950), new cjs.Rectangle(-1,-50,806.3,950), new cjs.Rectangle(-1,-40,781.1,950), new cjs.Rectangle(-1,-30,781.1,950), new cjs.Rectangle(-1,-20,781.1,950), new cjs.Rectangle(-1,-10,806.3,950), rect=new cjs.Rectangle(-1,0,781,950), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1,0,806.3,950), rect=new cjs.Rectangle(-1,0,781,950), rect, rect, rect, new cjs.Rectangle(-1,0,806.3,950), rect=new cjs.Rectangle(-1,0,781,950), rect, rect, new cjs.Rectangle(-1,0,806.3,950), rect=new cjs.Rectangle(-1,0,781,950), rect, rect, new cjs.Rectangle(-1,0,806.3,950), rect=new cjs.Rectangle(-1,0,781,950), rect, rect, new cjs.Rectangle(-1,0,806.3,950), rect=new cjs.Rectangle(-1,0,781,950), rect, rect, new cjs.Rectangle(-1,0,806.3,950), rect=new cjs.Rectangle(-1,0,781,950), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1,-10,781.1,950), new cjs.Rectangle(-1,-20,781.1,950), new cjs.Rectangle(-1,-30,781.1,950), new cjs.Rectangle(-1,-40,781.1,950), new cjs.Rectangle(-1,-50,781,950), new cjs.Rectangle(-1,0,781.1,950), new cjs.Rectangle(-1,25.5,781.1,974.5), new cjs.Rectangle(-1,25.5,806.3,1024.5), new cjs.Rectangle(-1,25.5,781.1,1074.5), new cjs.Rectangle(-1,25.5,781.1,1124.5), new cjs.Rectangle(-1,25.5,781.1,1174.5), new cjs.Rectangle(-1,25.5,806.3,1224.5), new cjs.Rectangle(-1,25.5,781.1,1274.5), new cjs.Rectangle(-1,25.5,781.1,1324.5), new cjs.Rectangle(-1,25.5,781.1,1374.5), new cjs.Rectangle(-1,25.5,806.3,1424.5), new cjs.Rectangle(-1,25.5,781.1,1474.5), new cjs.Rectangle(-1,25.5,781.1,1524.5), new cjs.Rectangle(-1,25.5,781.1,1574.5), rect=new cjs.Rectangle(-400,0,1600,1650), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,661.5);
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
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();
	this.body_mc.setTransform(0,-1,1,1,0,0,0,0,-1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1409.4);
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
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();
	this.body_mc.setTransform(-1,-2,1,1,0,0,0,-1,-2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1409.4);
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
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();
	this.body_mc.setTransform(0,-1,1,1,0,0,0,0,-1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_7_mc();

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
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();
	this.body_mc.setTransform(-1,-2,1,1,0,0,0,-1,-2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(440,540);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(360,540);

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

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1780);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
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
	this.object_2 = new lib.object_2_2_mc();
	this.object_2.setTransform(700,500);
	this.object_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_2_mc();
	this.frame_1_mc.setTransform(1,-1,1,1,0,0,0,1,-1);

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.5,-349.4,791.6,1299.4);
p.frameBounds = [rect, new cjs.Rectangle(11.5,-349.4,833.6,1299.4)];


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
	this.frame_1_mc.setTransform(1.1,-2,1,1,0,0,0,1.1,-2);

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-349.4,781,1299.4);
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
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();
	this.body_mc.setTransform(1,-1,1,1,0,0,0,1,-1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_mc();

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
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();
	this.body_mc.setTransform(1.1,-2,1,1,0,0,0,1.1,-2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

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
	this.instance_3.setTransform(1,-0.1,1,1,0,0,0,1,-0.1);

	this.instance_4 = new lib.SelectionScreen();
	this.instance_4.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.instance_5 = new lib.LocationScreen_1();

	this.instance_6 = new lib.LocationScreen_2();

	this.instance_7 = new lib.LocationScreen_3();

	this.instance_8 = new lib.LocationScreen_4();

	this.instance_9 = new lib.LocationScreen_5();

	this.instance_10 = new lib.LocationScreen_6();

	this.instance_11 = new lib.RedirectScreen();

	this.instance_12 = new lib.ResultScreen();

	this.instance_13 = new lib.InstructionScreen();

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(690,250);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_14 = new lib.forward_mc();
	this.instance_14.setTransform(500,250);

	this.instance_15 = new lib.Glitter_2();
	this.instance_15.setTransform(450,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.gravity_explosion_comp},{t:this.instance_15},{t:this.instance_14},{t:this.next_btn}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[]},1).to({state:[{t:this.instance_23}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,0,1600,1165), new cjs.Rectangle(-959,-280.8,2726,1375.9), new cjs.Rectangle(-400,-280.8,1600,1261.9), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, rect, rect, rect=new cjs.Rectangle(-400,-349.4,1600,1409.4), rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,785,430), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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