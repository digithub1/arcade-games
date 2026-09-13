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
		{name:"storage_atlas_", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_6", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_7", frames: [[0,0,1600,200],[0,1096,640,280],[642,1106,640,280],[1266,202,340,520],[1284,724,420,390],[0,202,420,460],[844,202,420,450],[0,664,420,430],[422,202,420,460],[844,654,420,450],[422,664,420,430]]},
		{name:"storage_atlas_8", frames: [[422,0,500,300],[924,0,500,300],[402,392,500,300],[904,302,500,300],[904,604,500,300],[641,906,500,300],[0,794,280,550],[282,794,357,427],[0,392,400,400],[1406,884,380,380],[1406,502,380,380],[1426,0,290,500],[0,0,420,390]]},
		{name:"storage_atlas_9", frames: [[307,424,250,540],[0,424,305,444],[0,0,342,422],[688,0,327,424],[559,426,307,432],[344,0,342,421],[0,870,250,520],[868,426,250,520],[559,860,250,520],[1120,0,250,520],[1120,522,250,520],[1372,522,250,520],[1372,0,250,520]]},
		{name:"storage_atlas_10", frames: [[1260,0,279,425],[1008,522,309,415],[252,0,250,520],[504,0,250,520],[1008,0,250,520],[504,522,250,520],[756,522,250,520],[0,522,250,520],[0,0,250,520],[756,0,250,520],[252,522,250,520],[1008,939,360,320],[1319,427,360,320],[1370,749,360,320],[1370,1071,360,320],[0,1044,360,320]]},
		{name:"storage_atlas_11", frames: [[770,1122,380,260],[1454,777,300,300],[1454,475,300,300],[1454,1079,300,300],[1152,977,300,300],[0,0,282,404],[928,0,202,501],[770,644,213,476],[225,884,221,477],[1556,0,210,467],[227,406,221,475],[985,503,213,472],[1345,0,209,473],[0,406,225,476],[0,884,223,478],[1132,0,211,475],[284,0,320,320],[448,883,320,320],[450,322,320,320],[606,0,320,320]]},
		{name:"storage_atlas_12", frames: [[0,302,300,300],[0,0,300,300],[1178,584,290,290],[1480,292,290,290],[1470,584,290,290],[1178,876,290,290],[1470,876,290,290],[1188,292,290,290],[896,0,290,290],[604,292,290,290],[896,292,290,290],[886,584,290,290],[1188,0,290,290],[886,876,290,290],[1480,0,290,290],[594,604,290,290],[594,896,290,290],[604,0,290,290],[302,604,290,290],[302,896,290,290],[0,604,300,300],[0,906,300,300],[302,0,300,300],[302,302,300,300]]},
		{name:"storage_atlas_13", frames: [[0,1168,632,110],[0,0,290,290],[0,292,290,290],[0,584,290,290],[292,876,290,290],[584,0,290,290],[0,876,290,290],[584,876,290,290],[292,0,290,290],[292,292,290,290],[292,584,290,290],[876,0,290,290],[1168,0,290,290],[584,292,290,290],[1460,0,290,290],[584,584,290,290],[1075,939,210,210],[1143,292,252,291],[876,292,265,314],[1626,292,163,415],[876,608,217,271],[1438,1124,197,193],[876,1157,203,234],[1258,1151,178,220],[876,881,197,274],[634,1168,188,225],[1321,611,194,278],[1081,1151,175,232],[1321,891,193,231],[1517,709,198,259],[1143,585,176,352],[1397,292,227,317]]},
		{name:"storage_atlas_14", frames: [[168,0,190,190],[374,534,180,180],[0,1183,190,190],[778,182,180,180],[192,1084,180,180],[192,902,180,180],[374,902,180,180],[382,716,180,180],[596,182,180,180],[374,1084,180,180],[556,372,180,180],[730,0,180,180],[556,898,180,180],[556,1080,180,180],[564,554,180,180],[738,364,180,180],[1108,412,150,160],[1384,276,150,160],[934,525,150,160],[1260,438,150,160],[388,372,150,160],[1086,574,150,160],[934,687,150,160],[564,736,150,160],[1562,244,150,160],[1232,250,150,160],[1562,82,150,160],[1536,406,150,160],[192,534,180,190],[0,223,190,190],[192,726,188,174],[1683,1009,95,203],[1119,138,111,234],[1312,0,114,248],[1555,568,116,201],[890,1005,145,150],[1259,1238,146,147],[1617,853,133,154],[1086,736,147,157],[1412,568,141,170],[381,1266,170,127],[1238,600,145,163],[738,1162,143,204],[1407,1211,125,164],[890,849,143,154],[0,0,166,221],[1235,847,106,207],[746,546,186,164],[738,736,150,212],[1534,1132,147,134],[1428,82,132,192],[1101,0,209,136],[960,173,157,187],[1503,1009,169,121],[192,192,220,160],[1517,771,280,80],[1235,765,280,80],[0,415,190,190],[556,1262,180,130],[1688,406,100,240],[1428,0,340,80],[360,0,186,188],[1465,853,150,142],[192,354,194,178],[912,0,187,171],[192,1266,187,132],[920,364,186,159],[0,607,190,190],[0,991,190,190],[0,799,190,190],[414,190,180,180],[548,0,180,180],[883,1162,130,210],[1343,847,120,180],[1015,1157,120,180],[1259,1056,120,180],[1137,1077,120,180],[1037,895,120,180],[1381,1029,120,180],[738,950,150,210]]},
		{name:"storage_atlas_15", frames: [[1216,795,120,120],[1110,1161,120,120],[1232,1161,120,120],[1460,950,120,120],[1247,551,120,120],[1369,674,120,120],[1247,673,120,120],[1094,736,120,120],[1304,1072,142,84],[1010,705,82,178],[866,276,94,168],[1704,903,69,188],[1703,0,90,186],[1394,156,81,189],[0,477,122,157],[0,636,122,157],[0,795,122,157],[0,954,122,157],[0,159,122,157],[0,1113,122,157],[0,318,122,157],[0,0,122,157],[124,0,122,157],[124,159,122,157],[124,477,122,157],[124,318,122,157],[1007,156,123,131],[1582,950,112,125],[614,1248,131,135],[747,1248,117,142],[0,1272,150,124],[1250,1283,161,68],[124,636,122,157],[124,795,122,157],[372,0,122,157],[248,636,122,157],[248,795,122,157],[372,636,122,157],[372,159,122,157],[372,954,122,157],[124,954,122,157],[372,795,122,157],[248,477,122,157],[248,0,122,157],[372,477,122,157],[248,159,122,157],[124,1113,122,157],[248,318,122,157],[372,318,122,157],[248,954,122,157],[248,1113,122,157],[493,1113,119,154],[496,0,119,154],[496,156,119,154],[496,312,119,154],[496,936,119,154],[496,468,119,154],[496,624,119,154],[496,780,119,154],[614,1092,119,154],[617,0,119,154],[372,1113,119,154],[617,156,119,154],[866,156,139,118],[840,446,117,126],[1110,1283,138,101],[152,1272,145,114],[1354,1158,139,78],[1340,0,119,154],[1219,0,119,154],[617,624,119,154],[1582,0,119,154],[856,0,119,154],[977,0,119,154],[617,780,119,154],[1461,0,119,154],[735,1092,119,154],[1098,0,119,154],[617,468,119,154],[617,312,119,154],[617,936,119,154],[938,917,120,120],[1495,1155,180,60],[1595,1279,180,60],[1413,1238,180,60],[1413,1300,180,60],[1448,1093,180,60],[1595,1217,180,60],[1132,156,260,60],[1477,258,150,100],[1477,156,150,100],[962,391,150,100],[1266,347,150,100],[1114,422,150,100],[1629,290,150,100],[1629,188,150,100],[1418,360,150,100],[1132,218,150,100],[962,289,150,100],[1266,449,150,100],[1570,392,150,100],[1114,320,150,100],[1094,858,120,120],[856,1039,120,120],[866,786,70,210],[1418,462,70,210],[1490,462,70,210],[959,493,70,210],[866,574,70,210],[1031,493,70,210],[1562,494,70,210],[1634,494,70,210],[1706,691,70,210],[1103,524,70,210],[1175,524,70,210],[938,705,70,210],[372,1269,220,80],[1722,392,50,297],[1677,1093,120,90],[1216,917,120,120],[1060,980,120,120],[866,1283,120,90],[1491,706,120,120],[1338,796,120,120],[866,1161,120,120],[738,364,100,180],[738,728,100,180],[738,182,100,180],[738,910,100,180],[738,0,100,180],[738,546,100,180],[1338,918,120,120],[988,1102,120,120],[1460,828,120,120],[1182,1039,120,120],[1582,828,120,120],[988,1224,120,120]]},
		{name:"storage_atlas_16", frames: [[42,782,40,40],[205,724,50,50],[266,92,90,50],[415,644,90,50],[0,785,36,36],[237,791,36,36],[160,818,36,36],[271,623,36,36],[417,821,36,36],[198,818,36,36],[454,783,36,36],[341,800,36,36],[122,818,36,36],[379,800,36,36],[84,808,36,36],[275,820,36,36],[455,821,36,36],[333,231,16,16],[101,214,16,16],[333,249,16,16],[101,232,16,16],[333,195,16,16],[284,144,16,16],[302,144,16,16],[266,144,16,16],[333,213,16,16],[333,177,16,16],[310,548,103,70],[310,620,103,65],[0,92,127,80],[92,548,114,67],[153,623,116,50],[101,271,117,84],[129,92,135,75],[328,687,75,47],[153,675,111,47],[462,292,38,67],[0,683,67,58],[0,617,109,64],[366,0,129,82],[418,84,80,124],[328,736,40,40],[266,687,60,60],[69,683,40,55],[464,696,40,43],[497,0,10,11],[415,548,69,94],[208,548,100,73],[405,696,57,60],[0,174,99,100],[101,174,23,38],[333,144,31,31],[153,724,50,50],[111,617,40,147],[366,84,50,210],[0,276,90,90],[0,0,120,90],[0,506,90,90],[122,0,120,90],[69,740,40,40],[0,743,40,40],[257,749,40,40],[370,758,40,40],[412,758,40,40],[111,766,40,40],[153,776,40,40],[195,776,40,40],[299,778,40,40],[464,741,40,40],[418,210,80,80],[244,0,120,90],[0,380,240,40],[242,422,240,40],[220,296,240,40],[242,380,240,40],[0,422,240,40],[0,464,240,40],[220,338,240,40],[242,464,240,40],[92,506,200,40],[294,506,200,40],[129,169,100,100],[231,169,100,100]]}
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
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_10_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
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
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
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
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cloud_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_10_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_11_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_12_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.eyes_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.forward_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.glitter_10_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.glitter_11_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.glitter_12_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.glitter_13_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.glitter_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.glitter_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.glitter_7_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.glitter_8_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.glitter_9_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
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



(lib.hero1_body_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress12_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_scars1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_scars2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_scars3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_scars4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_scars5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_scars6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boutonniere10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boutonniere1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boutonniere2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boutonniere3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boutonniere4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boutonniere5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boutonniere6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boutonniere7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boutonniere8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boutonniere9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat6_back_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_scars1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_scars2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_scars3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_scars4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_scars5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_scars6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.lips_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.lips_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.lips_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.lips_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.lips_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.lips_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.lips_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.lips_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.lips_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_progress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.option_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.option_check_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.option_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.option_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.scars_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.scars_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.scars_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.scars_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.scars_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.scars_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.scars_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.shadows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.shadows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.shadows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.shadows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.shadows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.shadows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.shadows_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.white_flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.white_flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.white_flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.white_flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
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


(lib.wardrobe_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_6_img();
	this.instance.setTransform(-210,-215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-215,420,430);
p.frameBounds = [rect];


(lib.wardrobe_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_5_img();
	this.instance.setTransform(-210,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-225,420,450);
p.frameBounds = [rect];


(lib.wardrobe_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_4_img();
	this.instance.setTransform(-210,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-230,420,460);
p.frameBounds = [rect];


(lib.wardrobe_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_3_img();
	this.instance.setTransform(-210,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-195,420,390);
p.frameBounds = [rect];


(lib.wardrobe_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_6_img();
	this.instance.setTransform(-210,-215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-215,420,430);
p.frameBounds = [rect];


(lib.wardrobe_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_5_img();
	this.instance.setTransform(-210,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-225,420,450);
p.frameBounds = [rect];


(lib.wardrobe_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_4_img();
	this.instance.setTransform(-210,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-230,420,460);
p.frameBounds = [rect];


(lib.wardrobe_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_3_img();
	this.instance.setTransform(-210,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-195,420,390);
p.frameBounds = [rect];


(lib.wardrobe_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_img();
	this.instance.setTransform(-145,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-250,290,500);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-170,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-260,340,520);
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


(lib.shadows_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows_check_1_1_img();
	this.instance.setTransform(-75,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-105,150,210);
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


(lib.scars_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.scars_check_1_1_img();
	this.instance.setTransform(-65,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-105,130,210);
p.frameBounds = [rect];


(lib.option_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.option_check_1_2_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.option_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.option_check_1_1_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.option_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.option_check_0_2_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.option_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.option_check_0_1_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.object_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPeQmamaAApEQAApDGamaQGamZJDgBQJEABGZGZQGbGaAAJDQAAJEmbGaQmZGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
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


(lib.location_progress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_progress_1_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.lips_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lips_check_1_1_img();
	this.instance.setTransform(-50,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
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


(lib.hero2_scars_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_scars6_img();
	this.instance.setTransform(-59.5,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-77,119,154);
p.frameBounds = [rect];


(lib.hero2_scars_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_scars1_img();
	this.instance.setTransform(-59.5,-77);

	this.instance_1 = new lib.hero2_scars2_img();
	this.instance_1.setTransform(-59.5,-77);

	this.instance_2 = new lib.hero2_scars3_img();
	this.instance_2.setTransform(-59.5,-77);

	this.instance_3 = new lib.hero2_scars4_img();
	this.instance_3.setTransform(-59.5,-77);

	this.instance_4 = new lib.hero2_scars5_img();
	this.instance_4.setTransform(-59.5,-77);

	this.instance_5 = new lib.hero2_scars6_img();
	this.instance_5.setTransform(-59.5,-77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-77,119,154);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips2_img();
	this.instance.setTransform(-59.5,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-77,119,154);
p.frameBounds = [rect];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-59.5,-77);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-59.5,-77);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-59.5,-77);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-59.5,-77);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-59.5,-77);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-59.5,-77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-77,119,154);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-59.5,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-77,119,154);
p.frameBounds = [rect];


(lib.hero2_hat6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat6_img();
	this.instance.setTransform(-69.5,-62.5);

	this.instance_1 = new lib.hero2_hat6_back_img();
	this.instance_1.setTransform(-63.5,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-62.5,139,125);
p.frameBounds = [rect];


(lib.hero2_hat_back_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hat6_back_img();
	this.instance.setTransform(-63.9,55.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-63.9,55.8,129,82), null];


(lib.hero2_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-104.5,-68);

	this.instance_1 = new lib.hero2_hat2_img();
	this.instance_1.setTransform(-34.5,-69.2);

	this.instance_2 = new lib.hero2_hat3_img();
	this.instance_2.setTransform(-56.9,-72.2);

	this.instance_3 = new lib.hero2_hat4_img();
	this.instance_3.setTransform(-78.4,-48.7);

	this.instance_4 = new lib.hero2_hat5_img();
	this.instance_4.setTransform(-94.5,-71.7);

	this.instance_5 = new lib.hero2_hat6_img();
	this.instance_5.setTransform(-68.9,-29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-68,209,136);
p.frameBounds = [rect, new cjs.Rectangle(-34.5,-69.2,67,58), new cjs.Rectangle(-56.9,-72.2,109,64), new cjs.Rectangle(-78.4,-48.7,157,187), new cjs.Rectangle(-94.5,-71.7,169,121), new cjs.Rectangle(-68.9,-29.7,139,78), null];


(lib.hero2_hand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hand_img();
	this.instance.setTransform(-19,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-33.5,38,67);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair2_img();
	this.instance.setTransform(-87.9,-7.7);

	this.instance_1 = new lib.hero2_hair4_img();
	this.instance_1.setTransform(-56,62.3);

	this.instance_2 = new lib.hero2_hair6_img();
	this.instance_2.setTransform(-103.5,-19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-87.9,-7.7,176,352), null, new cjs.Rectangle(-56,62.3,111,47), null, new cjs.Rectangle(-103.5,-19.2,227,317)];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-69.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-59,139,118);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-69.5,-59);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-58.9,-72.7);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-71,-58.7);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-75,-64.2);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-72.9,-54.2);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-66.4,-78.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-59,139,118);
p.frameBounds = [rect, new cjs.Rectangle(-58.9,-72.7,117,126), new cjs.Rectangle(-71,-58.7,138,101), new cjs.Rectangle(-75,-64.2,145,114), new cjs.Rectangle(-72.9,-54.2,147,134), new cjs.Rectangle(-66.4,-78.7,132,192)];


(lib.hero2_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes5_img();
	this.instance.setTransform(-59.5,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-77,119,154);
p.frameBounds = [rect];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-59.5,-77);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-59.5,-77);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-59.5,-77);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-59.5,-77);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-59.5,-77);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-59.5,-77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-77,119,154);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-59.5,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-77,119,154);
p.frameBounds = [rect];


(lib.hero2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-59.5,-77);

	this.instance_1 = new lib.hero2_eyebrows2_img();
	this.instance_1.setTransform(-59.5,-77);

	this.instance_2 = new lib.hero2_eyebrows3_img();
	this.instance_2.setTransform(-59.5,-77);

	this.instance_3 = new lib.hero2_eyebrows4_img();
	this.instance_3.setTransform(-59.5,-77);

	this.instance_4 = new lib.hero2_eyebrows5_img();
	this.instance_4.setTransform(-59.5,-77);

	this.instance_5 = new lib.hero2_eyebrows6_img();
	this.instance_5.setTransform(-59.5,-77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-77,119,154);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_boutonniere_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_boutonniere1_img();
	this.instance.setTransform(-23.2,-20.5,0.25,0.25);

	this.instance_1 = new lib.hero2_boutonniere2_img();
	this.instance_1.setTransform(-13.5,-29.7,0.25,0.25);

	this.instance_2 = new lib.hero2_boutonniere3_img();
	this.instance_2.setTransform(-13.2,-25.5,0.25,0.25);

	this.instance_3 = new lib.hero2_boutonniere4_img();
	this.instance_3.setTransform(-20.5,-32.2,0.25,0.25);

	this.instance_4 = new lib.hero2_boutonniere5_img();
	this.instance_4.setTransform(-13.5,-29.2,0.25,0.25);

	this.instance_5 = new lib.hero2_boutonniere6_img();
	this.instance_5.setTransform(-11,-35,0.25,0.25);

	this.instance_6 = new lib.hero2_boutonniere7_img();
	this.instance_6.setTransform(-9.7,-24.2,0.25,0.25);

	this.instance_7 = new lib.hero2_boutonniere8_img();
	this.instance_7.setTransform(-14.5,-26.5,0.25,0.25);

	this.instance_8 = new lib.hero2_boutonniere9_img();
	this.instance_8.setTransform(-13.7,-28.2,0.25,0.25);

	this.instance_9 = new lib.hero2_boutonniere10_img();
	this.instance_9.setTransform(-11,-24.2,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-20.5,46.5,41);
p.frameBounds = [rect, new cjs.Rectangle(-13.5,-29.7,44.5,55), new cjs.Rectangle(-13.2,-25.5,37.5,53), new cjs.Rectangle(-20.5,-32.2,49.3,68.5), new cjs.Rectangle(-13.5,-29.2,47,56.3), new cjs.Rectangle(-11,-35,48.5,69.5), new cjs.Rectangle(-9.7,-24.2,43.8,58), new cjs.Rectangle(-14.5,-26.5,48.3,57.8), new cjs.Rectangle(-13.7,-28.2,49.5,64.8), new cjs.Rectangle(-11,-24.2,50.8,58.5), null];


(lib.hero2_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_body_img();
	this.instance.setTransform(-101,-250.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-250.5,202,501);
p.frameBounds = [rect];


(lib.hero1_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_shadows6_img();
	this.instance.setTransform(-61,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-78.5,122,157);
p.frameBounds = [rect];


(lib.hero1_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-61,-78.5);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-61,-78.5);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-61,-78.5);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-61,-78.5);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-61,-78.5);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-61,-78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-78.5,122,157);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_scars_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_scars1_img();
	this.instance.setTransform(-61,-78.5);

	this.instance_1 = new lib.hero1_scars2_img();
	this.instance_1.setTransform(-61,-78.5);

	this.instance_2 = new lib.hero1_scars3_img();
	this.instance_2.setTransform(-61,-78.5);

	this.instance_3 = new lib.hero1_scars4_img();
	this.instance_3.setTransform(-61,-78.5);

	this.instance_4 = new lib.hero1_scars5_img();
	this.instance_4.setTransform(-61,-78.5);

	this.instance_5 = new lib.hero1_scars6_img();
	this.instance_5.setTransform(-61,-78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-78.5,122,157);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-61,-78.5);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-61,-78.5);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-61,-78.5);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-61,-78.5);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-61,-78.5);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-61,-78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-78.5,122,157);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-61,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-78.5,122,157);
p.frameBounds = [rect];


(lib.hero1_hand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hand_img();
	this.instance.setTransform(-37.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-23.5,75,47);
p.frameBounds = [rect];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-71.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-47,143,154);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-71.5,-47);

	this.instance_1 = new lib.hero1_hair3_img();
	this.instance_1.setTransform(-80.5,40);

	this.instance_2 = new lib.hero1_hair4_img();
	this.instance_2.setTransform(-84,-47);

	this.instance_3 = new lib.hero1_hair6_img();
	this.instance_3.setTransform(0,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-47,143,154);
p.frameBounds = [rect, null, new cjs.Rectangle(-80.5,40,161,68), new cjs.Rectangle(-84,-47,166,221), null, new cjs.Rectangle(0,-37.5,106,207)];


(lib.hero1_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-75,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-62,150,124);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-75,-62);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-85.4,-64.5);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-70.9,-57.5);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-93.4,-64.5);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-73.4,-97);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-63.9,-91.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-62,150,124);
p.frameBounds = [rect, new cjs.Rectangle(-85.4,-64.5,170,127), new cjs.Rectangle(-70.9,-57.5,145,163), new cjs.Rectangle(-93.4,-64.5,197,193), new cjs.Rectangle(-73.4,-97,143,204), new cjs.Rectangle(-63.9,-91.5,125,164)];


(lib.hero1_flower_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_flower6_img();
	this.instance.setTransform(-59.5,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-64.5,131,135);
p.frameBounds = [rect];


(lib.hero1_flower_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_flower1_img();
	this.instance.setTransform(-61.5,-65.5);

	this.instance_1 = new lib.hero1_flower2_img();
	this.instance_1.setTransform(-70,-77.5);

	this.instance_2 = new lib.hero1_flower3_img();
	this.instance_2.setTransform(-89,-58.5);

	this.instance_3 = new lib.hero1_flower4_img();
	this.instance_3.setTransform(-65,-78.5);

	this.instance_4 = new lib.hero1_flower5_img();
	this.instance_4.setTransform(-62,-54.5);

	this.instance_5 = new lib.hero1_flower6_img();
	this.instance_5.setTransform(-59.5,-64.5);

	this.instance_6 = new lib.hero1_flower7_img();
	this.instance_6.setTransform(-67.5,-87);

	this.instance_7 = new lib.hero1_flower8_img();
	this.instance_7.setTransform(-61.5,-64);

	this.instance_8 = new lib.hero1_flower9_img();
	this.instance_8.setTransform(-62.5,-77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.5,-65.5,123,131);
p.frameBounds = [rect, new cjs.Rectangle(-70,-77.5,145,150), new cjs.Rectangle(-89,-58.5,146,147), new cjs.Rectangle(-65,-78.5,133,154), new cjs.Rectangle(-62,-54.5,112,125), new cjs.Rectangle(-59.5,-64.5,131,135), new cjs.Rectangle(-67.5,-87,147,157), new cjs.Rectangle(-61.5,-64,117,142), new cjs.Rectangle(-62.5,-77,141,170), null];


(lib.hero1_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-61,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-78.5,122,157);
p.frameBounds = [rect];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-61,-78.5);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-61,-78.5);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-61,-78.5);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-61,-78.5);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-61,-78.5);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-61,-78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-78.5,122,157);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_eyebrows2_img();
	this.instance.setTransform(-61,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-78.5,122,157);
p.frameBounds = [rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-61,-78.5);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-61,-78.5);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-61,-78.5);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-61,-78.5);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-61,-78.5);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-61,-78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-78.5,122,157);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_earrings9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring9_img();
	this.instance.setTransform(54,-45,0.448,0.448,0,0,180);

	this.instance_1 = new lib.hero1_earring9_img();
	this.instance_1.setTransform(-56,-45,0.448,0.448);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-45,110,90);
p.frameBounds = [rect];


(lib.hero1_earrings8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring8_img();
	this.instance.setTransform(43.5,-47,0.5,0.5,0,0,180);

	this.instance_1 = new lib.hero1_earring8_img();
	this.instance_1.setTransform(-43,-47,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-47,86.5,94.5);
p.frameBounds = [rect];


(lib.hero1_earrings7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring7_img();
	this.instance.setTransform(6,-62,0.5,0.5);

	this.instance_1 = new lib.hero1_earring7_img();
	this.instance_1.setTransform(-65,-62,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-62,128,124);
p.frameBounds = [rect];


(lib.hero1_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring6_img();
	this.instance.setTransform(47,-47,0.5,0.5,0,0,180);

	this.instance_1 = new lib.hero1_earring6_img();
	this.instance_1.setTransform(-49,-47,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-47,96,93);
p.frameBounds = [rect];


(lib.hero1_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring5_img();
	this.instance.setTransform(60.5,-59,0.5,0.5,0,0,180);

	this.instance_1 = new lib.hero1_earring5_img();
	this.instance_1.setTransform(-61,-59,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-59,121.5,117);
p.frameBounds = [rect];


(lib.hero1_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring4_img();
	this.instance.setTransform(37.5,-47,0.5,0.5,0,0,180);

	this.instance_1 = new lib.hero1_earring4_img();
	this.instance_1.setTransform(-38,-47,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-47,75.5,94);
p.frameBounds = [rect];


(lib.hero1_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring3_img();
	this.instance.setTransform(50,-42,0.5,0.5,0,0,180);

	this.instance_1 = new lib.hero1_earring3_img();
	this.instance_1.setTransform(-50,-42,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-42,100,84);
p.frameBounds = [rect];


(lib.hero1_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring2_img();
	this.instance.setTransform(53.5,-51,0.5,0.5,0,0,180);

	this.instance_1 = new lib.hero1_earring2_img();
	this.instance_1.setTransform(-53,-51,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-51,106.5,101.5);
p.frameBounds = [rect];


(lib.hero1_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_earring1_img
	this.instance = new lib.hero1_earring1_img();
	this.instance.setTransform(46,-45,0.5,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_earring1_img
	this.instance_1 = new lib.hero1_earring1_img();
	this.instance_1.setTransform(-46,-45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-45,92,89);
p.frameBounds = [rect];


(lib.hero1_earring9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring9_img();
	this.instance.setTransform(60.3,-19.8,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earring9_img();
	this.instance_1.setTransform(-60.3,-20.3,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-20.3,120.6,40.7);
p.frameBounds = [rect];


(lib.hero1_earring8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring8_img();
	this.instance.setTransform(54.7,-18.6,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earring8_img();
	this.instance_1.setTransform(-54.7,-19.1,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.7,-19.1,109.4,38.3);
p.frameBounds = [rect];


(lib.hero1_earring7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring7_img();
	this.instance.setTransform(60.6,-24.5,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earring7_img();
	this.instance_1.setTransform(-60.5,-25,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-25,121.1,50.1);
p.frameBounds = [rect];


(lib.hero1_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring6_img();
	this.instance.setTransform(57.2,-18.3,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earring6_img();
	this.instance_1.setTransform(-57.2,-18.8,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.2,-18.8,114.4,37.7);
p.frameBounds = [rect];


(lib.hero1_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring5_img();
	this.instance.setTransform(57.2,-23.1,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earring5_img();
	this.instance_1.setTransform(-57.2,-23.6,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.2,-23.6,114.4,47.3);
p.frameBounds = [rect];


(lib.hero1_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring4_img();
	this.instance.setTransform(54.3,-18.8,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earring4_img();
	this.instance_1.setTransform(-54.3,-18.8,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.3,-18.8,108.6,37.6);
p.frameBounds = [rect];


(lib.hero1_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring3_img();
	this.instance.setTransform(57.8,-16.6,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earring3_img();
	this.instance_1.setTransform(-57.8,-16.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.8,-16.9,115.6,33.8);
p.frameBounds = [rect];


(lib.hero1_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring2_img();
	this.instance.setTransform(57.2,-20,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earring2_img();
	this.instance_1.setTransform(-57.2,-20.5,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.2,-20.5,114.4,41.1);
p.frameBounds = [rect];


(lib.hero1_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring1_img();
	this.instance.setTransform(40.8,-17.8,0.2,0.2);

	this.instance_1 = new lib.hero1_earring1_img();
	this.instance_1.setTransform(-57.2,-17.8,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.2,-17.8,114.4,35.6);
p.frameBounds = [rect];


(lib.hero1_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-126,-145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126,-145.5,252,291);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-126,-145.5);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-125,-176.9);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-139.4,-176.5);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-175.9,-183.5);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-160.4,-191.5);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-83.5,-173.5);

	this.instance_6 = new lib.hero1_dress7_img();
	this.instance_6.setTransform(-105.9,-146.5);

	this.instance_7 = new lib.hero1_dress8_img();
	this.instance_7.setTransform(-183.9,-181);

	this.instance_8 = new lib.hero1_dress9_img();
	this.instance_8.setTransform(-163.4,-186);

	this.instance_9 = new lib.hero1_dress10_img();
	this.instance_9.setTransform(-139.9,-184.5);

	this.instance_10 = new lib.hero1_dress11_img();
	this.instance_10.setTransform(-158.4,-174);

	this.instance_11 = new lib.hero1_dress12_img();
	this.instance_11.setTransform(-203.4,-176.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126,-145.5,252,291);
p.frameBounds = [rect, new cjs.Rectangle(-125,-176.9,265,314), new cjs.Rectangle(-139.4,-176.5,282,404), new cjs.Rectangle(-175.9,-183.5,327,424), new cjs.Rectangle(-160.4,-191.5,307,432), new cjs.Rectangle(-83.5,-173.5,163,415), new cjs.Rectangle(-105.9,-146.5,217,271), new cjs.Rectangle(-183.9,-181,342,421), new cjs.Rectangle(-163.4,-186,357,427), new cjs.Rectangle(-139.9,-184.5,279,425), new cjs.Rectangle(-158.4,-174,309,415), new cjs.Rectangle(-203.4,-176.5,342,422), null];


(lib.hero1_crown_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_crown1_img();
	this.instance.setTransform(-51.5,-35);

	this.instance_1 = new lib.hero1_crown2_img();
	this.instance_1.setTransform(-51.9,-4.5);

	this.instance_2 = new lib.hero1_crown3_img();
	this.instance_2.setTransform(-60.9,-0.5);

	this.instance_3 = new lib.hero1_crown4_img();
	this.instance_3.setTransform(-73,2);

	this.instance_4 = new lib.hero1_crown5_img();
	this.instance_4.setTransform(-56.5,-4.5);

	this.instance_5 = new lib.hero1_crown6_img();
	this.instance_5.setTransform(-57.4,7);

	this.instance_6 = new lib.hero1_crown7_img();
	this.instance_6.setTransform(-58.9,-30.5);

	this.instance_7 = new lib.hero1_crown8_img();
	this.instance_7.setTransform(-94.9,-23);

	this.instance_8 = new lib.hero1_crown9_img();
	this.instance_8.setTransform(-68.4,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-35,103,70);
p.frameBounds = [rect, new cjs.Rectangle(-51.9,-4.5,103,65), new cjs.Rectangle(-60.9,-0.5,127,80), new cjs.Rectangle(-73,2,142,84), new cjs.Rectangle(-56.5,-4.5,114,67), new cjs.Rectangle(-57.4,7,116,50), new cjs.Rectangle(-58.9,-30.5,117,84), new cjs.Rectangle(-94.9,-23,188,174), new cjs.Rectangle(-68.4,2,135,75), null];


(lib.hero1_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_body_img();
	this.instance.setTransform(-152.5,-222);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.5,-222,305,444);
p.frameBounds = [rect];


(lib.headdress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown9_img();
	this.instance.setTransform(-67.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfGPIAAsdIY/AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-40,160,80);
p.frameBounds = [rect];


(lib.headdress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown8_img();
	this.instance.setTransform(-94,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AJ9OhIgqq5Ip9lxIouFuIAAK8Il8AAIhvx6IGJoPIIKi4IH/AAIIsFgIDJH3IjNPqg");
	this.shape.setTransform(0.1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.1,-91.9,218.6,186);
p.frameBounds = [rect];


(lib.headdress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown7_img();
	this.instance.setTransform(-58.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqvJBIhumrINQrWILrM8IiPFFg");
	this.shape.setTransform(0.9,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.9,-67.4,159.7,115.5);
p.frameBounds = [rect];


(lib.headdress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown6_img();
	this.instance.setTransform(-58,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqZFYIiXl7IG3k1IMSAAIGYHcIi1DUg");
	this.shape.setTransform(0.2,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-37.9,163.4,69);
p.frameBounds = [rect];


(lib.headdress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat5_img();
	this.instance.setTransform(-84.5,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArTKJIjuj8ICtvVIDAhfIO0CdIJiFXIglD9Ik9EbItHFCg");
	this.shape.setTransform(-0.6,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.9,-65.6,192.6,136);
p.frameBounds = [rect];


(lib.headdress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown5_img();
	this.instance.setTransform(-57,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqaGPIhtmbIIMmCIIUAAIHvHTIiRFKg");
	this.shape.setTransform(2.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.1,-40.9,155.3,80);
p.frameBounds = [rect];


(lib.headdress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat4_img();
	this.instance.setTransform(-78.5,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDQaMAAAggzIcHAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-105,180,210);
p.frameBounds = [rect];


(lib.headdress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown4_img();
	this.instance.setTransform(70,-42,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArtHgIifijIA1nfIHsk9INgAAIGYHtIiKHSg");
	this.shape.setTransform(1.2,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-48.9,182,96);
p.frameBounds = [rect];


(lib.headdress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat3_img();
	this.instance.setTransform(54,-32,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIGPIAAsdIURAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-40,130,80);
p.frameBounds = [rect];


(lib.headdress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown3_img();
	this.instance.setTransform(-68.7,-32.2,1,1,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsGgDIHenZIJbgIIHUFwIgFJGI3FATg");
	this.shape.setTransform(0.3,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.3,-51.3,155.1,98.6);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat2_img();
	this.instance.setTransform(33,-29,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzF3IAArtIPnAAIAALtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-37.5,100,75);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown2_img();
	this.instance.setTransform(-51.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArADgIAAk6IGZk5IKRgFIFWFeIAACZIhqD5IyeBBg");
	this.shape.setTransform(1.5,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-38.8,141,81.9);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-104.5,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(4,1,1).p("AC+iBIkjEDIhYhQ");
	this.shape.setTransform(11,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AEFGGIneAEImZFsIjOgEIlApZIAfjeIQLq/IEvAAIOmLhIACDHIj6JDIjeAegAAZCwIEkkCIkkECIhWhQg");
	this.shape_1.setTransform(-1.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.1,-76.9,230.8,154.7);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown1_img();
	this.instance.setTransform(-51.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An7HuIkkpKIMKmZIM1GJIlfJig");
	this.shape.setTransform(2.1,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.8,-54.3,160,100.4);
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


(lib.flowers_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boutonniere10_img();
	this.instance.setTransform(-60.9,-70.2,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AroKlIE40+IFLiwIJqEBIDkFxIonN6IstCng");
	this.shape.setTransform(0.3,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.2,-86.8,149.1,168.6);
p.frameBounds = [rect];


(lib.flowers_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boutonniere9_img();
	this.instance.setTransform(-59.4,-77.7,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqTLSIhswhILln8IIZgVIEBN9Ix2NEg");
	this.shape.setTransform(-1.4,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.2,-83.4,153.7,173);
p.frameBounds = [rect];


(lib.flowers_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower9_img();
	this.instance.setTransform(-71,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsiH2IgWuwIKFnaINoCNICERWIudJGg");
	this.shape.setTransform(3.2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.4,-89.1,165.2,183.6);
p.frameBounds = [rect];


(lib.flowers_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boutonniere8_img();
	this.instance.setTransform(-57.9,-69.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArPF5IAptnIQflSIFXLnIlENrIoHAvg");
	this.shape.setTransform(1.8,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.3,-87.2,144.2,166.8);
p.frameBounds = [rect];


(lib.flowers_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower8_img();
	this.instance.setTransform(58,-71,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjhL1IoarqIEzqOILjirIHhGdIg1PaIpUDmg");
	this.shape.setTransform(-3.6,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-79.5,152.9,163.1);
p.frameBounds = [rect];


(lib.flowers_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boutonniere7_img();
	this.instance.setTransform(-52.5,-69.6,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApyJrIgZwSIECk4IMehlID4H2IjdIiIp4Jxg");
	this.shape.setTransform(0.8,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.5,-83.9,130.6,167.5);
p.frameBounds = [rect];


(lib.flowers_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower7_img();
	this.instance.setTransform(-73.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqiLfIlgvLIJrpmIN+h3IIcJwIiVOrIo9F4g");
	this.shape.setTransform(1.3,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.4,-93.4,205.5,194.1);
p.frameBounds = [rect];


(lib.flowers_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boutonniere6_img();
	this.instance.setTransform(-58.2,-83.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArRL8IAzyYIMUpGIDAAvIGcPxIgnDQIxbLVg");
	this.shape.setTransform(0.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.7,-98.5,144.4,199.2);
p.frameBounds = [rect];


(lib.flowers_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower6_img();
	this.instance.setTransform(-65.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnlK9IlBraICsoBIIgj0ILDDAIC+NyImYFgIqXCTg");
	this.shape.setTransform(0.8,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80.2,161.6,157.6);
p.frameBounds = [rect];


(lib.flowers_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boutonniere5_img();
	this.instance.setTransform(-50,-60,0.532,0.532);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq2ApIEAplIOUi4IDZJwIlAJ/IpQD6g");
	this.shape.setTransform(-1.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.8,-75,139.2,151.5);
p.frameBounds = [rect];


(lib.flowers_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower5_img();
	this.instance.setTransform(56,-63,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqVEFIgypNIGNmGIJeAGIGIFHIAcKKImVGVIntAyg");
	this.shape.setTransform(-1.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.6,-71.4,142.5,144);
p.frameBounds = [rect];


(lib.flowers_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boutonniere4_img();
	this.instance.setTransform(-59.1,-82.2,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsCJcIGk0/IJfj3IICGiIgZOaIrhIIIoVBxg");
	this.shape.setTransform(-3.6,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.7,-99.2,154.3,197.6);
p.frameBounds = [rect];


(lib.flowers_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower4_img();
	this.instance.setTransform(66,-77,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar+hUICBn9IH7kGII4AAIFJFgIhCQAItFFPg");
	this.shape.setTransform(-0.1,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.8,-77,153.6,171.4);
p.frameBounds = [rect];


(lib.flowers_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boutonniere3_img();
	this.instance.setTransform(-45,-63.6,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApqJcIAAsiIHQooIJbg1ICqCwIgDJqIkpGSIqcGbg");
	this.shape.setTransform(2.9,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.1,-79.7,124,161);
p.frameBounds = [rect];


(lib.flowers_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower3_img();
	this.instance.setTransform(-73,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlkMMInRmjIAmrGIJrnPIOQDvIBKQfIo8FLg");
	this.shape.setTransform(-0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,-83.9,164.4,162.7);
p.frameBounds = [rect];


(lib.flowers_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boutonniere2_img();
	this.instance.setTransform(57.8,-66,0.6,0.6,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsMgqICErpIPDDYIHSIvInNMXIqFAJg");
	this.shape.setTransform(11.2,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.9,-80.3,156.2,157.8);
p.frameBounds = [rect];


(lib.flowers_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower2_img();
	this.instance.setTransform(-72.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvIlGIMDoqIPBEEIDNPNIsiIIIvDAIg");
	this.shape.setTransform(4.3,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.7,-92.4,194,176.3);
p.frameBounds = [rect];


(lib.flowers_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boutonniere1_img();
	this.instance.setTransform(-55.8,-49.2,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar9GFIgektIE+qHIFzh5IMJDiIB9MAIkUFPIseAgg");
	this.shape.setTransform(2.1,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.6,-70.9,159.4,136.4);
p.frameBounds = [rect];


(lib.flowers_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower1_img();
	this.instance.setTransform(61,-66,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsdAmIEHp9IJAi9IJlDoICPJwInaKgIlLAxg");
	this.shape.setTransform(-2.3,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.1,-76.7,159.6,157.9);
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


(lib.eyes_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_check_1_1_img();
	this.instance.setTransform(-90,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyebrows_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyebrows_check_1_1_img();
	this.instance.setTransform(-105,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.decor_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_1_1_img();
	this.instance.setTransform(-125,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-270,250,540);
p.frameBounds = [rect];


(lib.current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_1_img();
	this.instance.setTransform(-140,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-275,280,550);
p.frameBounds = [rect];


(lib.cloud_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cloud_img();
	this.instance.setTransform(-316,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-316,-55,632,110);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-180,-160);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-180,-160);

	this.instance_2 = new lib.title_es_img();
	this.instance_2.setTransform(-180,-160);

	this.instance_3 = new lib.title_pt_img();
	this.instance_3.setTransform(-180,-160);

	this.instance_4 = new lib.title_tr_img();
	this.instance_4.setTransform(-180,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-160,360,320);
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


(lib.background_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_10_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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


(lib.background_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_8_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_7_img();
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

	this.instance_2 = new lib.copyright_title_es_img();
	this.instance_2.setTransform(-250,-150);

	this.instance_3 = new lib.copyright_title_pt_img();
	this.instance_3.setTransform(-250,-150);

	this.instance_4 = new lib.copyright_title_tr_img();
	this.instance_4.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

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


(lib.white_flash_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_flash_4_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.white_flash_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_flash_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.white_flash_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_flash_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.white_flash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_flash_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
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
	this.instance.setTransform(-8,-8);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-8,-8);

	this.instance_2 = new lib.gravity_explosion_3_img();
	this.instance_2.setTransform(-8,-8);

	this.instance_3 = new lib.gravity_explosion_4_img();
	this.instance_3.setTransform(-8,-8);

	this.instance_4 = new lib.gravity_explosion_5_img();
	this.instance_4.setTransform(-8,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
p.frameBounds = [rect, rect, rect, rect, rect];


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
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.ParticleBigGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_1_img();
	this.instance.setTransform(-8,-8);

	this.instance_1 = new lib.gravity_big_explosion_2_img();
	this.instance_1.setTransform(-8,-8);

	this.instance_2 = new lib.gravity_big_explosion_3_img();
	this.instance_2.setTransform(-8,-8);

	this.instance_3 = new lib.gravity_big_explosion_4_img();
	this.instance_3.setTransform(-8,-8);

	this.instance_4 = new lib.gravity_big_explosion_5_img();
	this.instance_4.setTransform(-8,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
p.frameBounds = [rect, rect, rect, rect, rect];


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

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjOCTiTQCSiSDOABQDPgBCSCSQCTCTAADOQAADOiTCTQiSCTjPAAQjOAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_4_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_3_img();
	this.instance.setTransform(-60,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.nav_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_img();
	this.instance.setTransform(-60,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
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


(lib.nav_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_5_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_4_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_3_img();
	this.instance.setTransform(-60,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.nav_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-60,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
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
p.nominalBounds = rect = new cjs.Rectangle(-180,-160,360,320);
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


(lib.shadows_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shadows_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},19).to({alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-105,150,210);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.shadows_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.shadows_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.shadows_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-105,150,210);
p.frameBounds = [rect, rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_6_1_img();
	this.instance.setTransform(-60,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXOEIAA8HISvAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-105,150,210);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_5_1_img();
	this.instance.setTransform(-60,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXOEIAA8HISvAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-105,150,210);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_4_1_img();
	this.instance.setTransform(-60,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXOEIAA8HISvAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-105,150,210);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_3_1_img();
	this.instance.setTransform(-60,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXOEIAA8HISvAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-105,150,210);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_2_1_img();
	this.instance.setTransform(-60,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXOEIAA8HISvAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-105,150,210);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_1_1_img();
	this.instance.setTransform(-60,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXOEIAA8HISvAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-105,150,210);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.scars_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.scars_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},19).to({alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-105,130,210);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.scars_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.scars_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.scars_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-105,130,210);
p.frameBounds = [rect, rect];


(lib.scars_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars_6_1_img();
	this.instance.setTransform(-50,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.scars_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoaOqIAHt6INtvoICSA6IAvMfIuXQYg");
	this.shape.setTransform(0.7,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-105,130,210);
p.frameBounds = [rect];


(lib.scars_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars_5_1_img();
	this.instance.setTransform(-50,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.scars_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoaOqIAHt6INtvoICSA6IAvMfIuXQYg");
	this.shape.setTransform(0.7,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-105,130,210);
p.frameBounds = [rect];


(lib.scars_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars_4_1_img();
	this.instance.setTransform(-50,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.scars_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoaOqIAHt6INtvoICSA6IAvMfIuXQYg");
	this.shape.setTransform(0.7,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-105,130,210);
p.frameBounds = [rect];


(lib.scars_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars_3_1_img();
	this.instance.setTransform(-50,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.scars_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoaOqIAHt6INtvoICSA6IAvMfIuXQYg");
	this.shape.setTransform(0.7,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-105,130,210);
p.frameBounds = [rect];


(lib.scars_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars_2_1_img();
	this.instance.setTransform(-50,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.scars_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoaOqIAHt6INtvoICSA6IAvMfIuXQYg");
	this.shape.setTransform(0.7,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-105,130,210);
p.frameBounds = [rect];


(lib.scars_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars_1_1_img();
	this.instance.setTransform(-50,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.scars_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoaOqIAHt6INtvoICSA6IAvMfIuXQYg");
	this.shape.setTransform(0.7,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-105,130,210);
p.frameBounds = [rect];


(lib.scars_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.option_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.option_check_2_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.option_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.option_check_2_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.option_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.option_check_1_2_mc();

	this.instance_1 = new lib.option_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect];


(lib.option_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.option_check_1_1_mc();

	this.instance_1 = new lib.option_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect];


(lib.location_progress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.location_progress_1_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lips_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lips_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},19).to({alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lips_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.lips_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.lips_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect, rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_6_2_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_6_1_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_5_2_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_5_1_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_4_2_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_4_1_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_3_2_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_3_1_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_2_2_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_2_1_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_1_2_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_1_1_img();
	this.instance.setTransform(-35,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOQaMAAAggzIMdAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-120,100,240);
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


(lib.hero2_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlSGfIAZsyQFKg3FCDNIAAKcg");
	mask.setTransform(84,68.4);

	// Слой 3
	this.instance = new lib.hero2_hand_mc();
	this.instance.setTransform(76,55);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.hero2_dress1_img();
	this.instance_1.setTransform(-106.5,-238);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-238,213,476);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlSGfIAZsyQFKg3FCDNIAAKcg");
	var mask_graphics_1 = new cjs.Graphics().p("AlSGfIAZsyQFKg3FCDNIAAKcg");
	var mask_graphics_6 = new cjs.Graphics().p("AlSG2IAAtpQIUgSCRDfIAAKcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:84,y:68.4}).wait(1).to({graphics:mask_graphics_1,x:84,y:63.9}).wait(1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_6,x:85,y:57.2}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// graph
	this.instance = new lib.hero2_hand_mc();
	this.instance.setTransform(76,55);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(3));

	// graph
	this.instance_1 = new lib.hero2_dress1_img();
	this.instance_1.setTransform(-106.5,-238);

	this.instance_2 = new lib.hero2_dress2_img();
	this.instance_2.setTransform(-102.4,-238.5);

	this.instance_3 = new lib.hero2_dress3_img();
	this.instance_3.setTransform(-96.9,-228.5);

	this.instance_4 = new lib.hero2_dress4_img();
	this.instance_4.setTransform(-99.4,-237);

	this.instance_5 = new lib.hero2_dress5_img();
	this.instance_5.setTransform(-100,-234);

	this.instance_6 = new lib.hero2_dress6_img();
	this.instance_6.setTransform(-100.4,-235);

	this.instance_7 = new lib.hero2_dress7_img();
	this.instance_7.setTransform(-101.9,-238);

	this.instance_8 = new lib.hero2_dress8_img();
	this.instance_8.setTransform(-101.9,-240);

	this.instance_9 = new lib.hero2_dress9_img();
	this.instance_9.setTransform(-98.9,-237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-238,213,476);
p.frameBounds = [rect, new cjs.Rectangle(-102.4,-238.5,221,477), new cjs.Rectangle(-96.9,-228.5,210,467), new cjs.Rectangle(-99.4,-237,221,475), new cjs.Rectangle(-100,-234,213,472), new cjs.Rectangle(-100.4,-235,209,473), new cjs.Rectangle(-101.9,-238,225,476), new cjs.Rectangle(-101.9,-240,223,478), new cjs.Rectangle(-98.9,-237,211,475), null];


(lib.hero1_earring_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_earring9_mc();
	this.instance.setTransform(-0.6,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.9,-15,120.6,40.7);
p.frameBounds = [rect];


(lib.hero1_earring_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring1_mc();

	this.instance_1 = new lib.hero1_earring2_mc();
	this.instance_1.setTransform(-0.2,5.5);

	this.instance_2 = new lib.hero1_earring3_mc();
	this.instance_2.setTransform(-0.4,2.4);

	this.instance_3 = new lib.hero1_earring4_mc();
	this.instance_3.setTransform(-0.1,3.3);

	this.instance_4 = new lib.hero1_earring5_mc();
	this.instance_4.setTransform(-0.2,8.6);

	this.instance_5 = new lib.hero1_earring6_mc();
	this.instance_5.setTransform(-0.2,3.8);

	this.instance_6 = new lib.hero1_earring7_mc();
	this.instance_6.setTransform(-0.4,10);

	this.instance_7 = new lib.hero1_earring8_mc();
	this.instance_7.setTransform(0,4.1);

	this.instance_8 = new lib.hero1_earring9_mc();
	this.instance_8.setTransform(-0.6,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.2,-17.8,114.4,35.6);
p.frameBounds = [rect, new cjs.Rectangle(-57.4,-15,114.4,41.1), new cjs.Rectangle(-58.2,-14.5,115.6,33.9), new cjs.Rectangle(-54.4,-15.5,108.6,37.6), new cjs.Rectangle(-57.4,-15,114.4,47.3), new cjs.Rectangle(-57.4,-15,114.4,37.7), new cjs.Rectangle(-60.9,-15,121.1,50.1), new cjs.Rectangle(-54.7,-15,109.4,38.3), new cjs.Rectangle(-60.9,-15,120.6,40.7), null];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero2_hat_all_mc();
	this.headdress.setTransform(3,-258.2);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:5,x:14.1,y:-248.7},29).to({rotation:0,x:3,y:-258.2},30).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(3,-238.2);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:5,x:12.3,y:-228.8},29).to({rotation:0,x:3,y:-238.2},30).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(2.5,-130.5,1,1,0,0,0,0,77);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:5,y:-121.5},29).to({rotation:0,y:-130.5},30).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(2.5,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:5,x:9.1,y:-198.2},29).to({rotation:0,x:2.5,y:-207.5},30).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(2.5,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:5,x:9.1,y:-198.2},29).to({rotation:0,x:2.5,y:-207.5},30).wait(1));

	// scars
	this.scars = new lib.hero2_scars_all_mc();
	this.scars.setTransform(2.5,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.scars).to({rotation:5,x:9.1,y:-198.2},29).to({rotation:0,x:2.5,y:-207.5},30).wait(1));

	// body
	this.instance = new lib.hero2_head_mc();
	this.instance.setTransform(2.5,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5,x:9.1,y:-198.2},29).to({rotation:0,x:2.5,y:-207.5},30).wait(1));

	// flowers
	this.flowers = new lib.hero2_boutonniere_all_mc();
	this.flowers.setTransform(34,-68);

	this.timeline.addTween(cjs.Tween.get(this.flowers).to({y:-59},29).to({y:-68},30).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(-2.5,97.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:106.5},29).to({y:97.5},30).wait(1));

	// body
	this.instance_1 = new lib.hero2_body_mc();
	this.instance_1.setTransform(2,85);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:94},29).to({y:85},30).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(3,-238.2);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:5,x:12.3,y:-228.8},29).to({rotation:0,x:3,y:-238.2},30).wait(1));

	// headdressSecond
	this.headdressSecond = new lib.hero2_hat_back_all_mc();
	this.headdressSecond.setTransform(3,-258.2);

	this.timeline.addTween(cjs.Tween.get(this.headdressSecond).to({rotation:5,x:14.1,y:-248.7},29).to({rotation:0,x:3,y:-258.2},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-326.2,225,661.8);
p.frameBounds = [rect, new cjs.Rectangle(-109,-325.9,217.1,661.8), new cjs.Rectangle(-109,-326,217.7,662.2), new cjs.Rectangle(-109,-326.1,218.4,662.6), new cjs.Rectangle(-109,-325.9,218.8,662.7), new cjs.Rectangle(-109,-326,219.4,663.1), new cjs.Rectangle(-109,-326,220.1,663.4), new cjs.Rectangle(-109,-325.8,220.5,663.5), new cjs.Rectangle(-109,-325.9,221.2,663.9), new cjs.Rectangle(-109,-326,221.8,664.3), new cjs.Rectangle(-109,-325.7,222.2,664.3), new cjs.Rectangle(-109,-325.8,222.9,664.8), new cjs.Rectangle(-109,-325.9,223.5,665.1), new cjs.Rectangle(-109,-325.6,223.9,665.2), new cjs.Rectangle(-109,-325.7,224.6,665.6), new cjs.Rectangle(-109,-325.8,225.1,666), new cjs.Rectangle(-109,-325.5,225.6,666), new cjs.Rectangle(-109,-325.6,226.2,666.4), new cjs.Rectangle(-109,-325.6,226.8,666.8), new cjs.Rectangle(-109,-325.4,227.3,666.8), new cjs.Rectangle(-109,-325.5,227.9,667.2), new cjs.Rectangle(-109,-325.6,228.5,667.6), new cjs.Rectangle(-109,-325.6,229.2,668), new cjs.Rectangle(-109,-325.4,229.6,668.1), new cjs.Rectangle(-109,-325.5,230.3,668.5), new cjs.Rectangle(-109,-325.5,230.9,668.8), new cjs.Rectangle(-109,-325.3,231.3,668.9), new cjs.Rectangle(-109,-325.3,231.9,669.3), new cjs.Rectangle(-109,-325.4,232.5,669.7), new cjs.Rectangle(-109,-325.5,233.1,670), new cjs.Rectangle(-109,-325.4,232.6,669.7), new cjs.Rectangle(-109,-325.4,232,669.3), new cjs.Rectangle(-109,-325.3,231.3,668.9), new cjs.Rectangle(-109,-325.5,230.9,668.8), new cjs.Rectangle(-109,-325.4,230.3,668.5), new cjs.Rectangle(-109,-325.4,229.7,668.1), new cjs.Rectangle(-109,-325.6,229.3,668.1), new cjs.Rectangle(-109,-325.5,228.7,667.7), new cjs.Rectangle(-109,-325.4,228.1,667.2), new cjs.Rectangle(-109,-325.7,227.7,667.3), new cjs.Rectangle(-109,-325.6,227.1,666.8), new cjs.Rectangle(-109,-325.5,226.5,666.5), new cjs.Rectangle(-109,-325.8,226,666.4), new cjs.Rectangle(-109,-325.6,225.4,666), new cjs.Rectangle(-109,-325.6,224.8,665.6), new cjs.Rectangle(-109,-325.9,224.4,665.6), new cjs.Rectangle(-109,-325.8,223.7,665.2), new cjs.Rectangle(-109,-325.7,223.1,664.9), new cjs.Rectangle(-109,-325.9,222.7,664.8), new cjs.Rectangle(-109,-325.8,222.1,664.4), new cjs.Rectangle(-109,-325.8,221.4,664), new cjs.Rectangle(-109,-326,221,663.9), new cjs.Rectangle(-109,-325.9,220.4,663.5), new cjs.Rectangle(-109,-325.8,219.7,663.2), new cjs.Rectangle(-109,-326,219.3,663), new cjs.Rectangle(-109,-325.9,218.7,662.7), new cjs.Rectangle(-109,-325.9,218,662.3), new cjs.Rectangle(-109,-326.1,217.6,662.2), new cjs.Rectangle(-109,-326,217,661.8), new cjs.Rectangle(-109,-326.2,225,661.8)];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_fringe_main_mc();
	this.instance.setTransform(3,-238.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.4,x:15.1,y:-233.4},39).to({rotation:0,x:3,y:-238.2},50).wait(1));

	// animation
	this.instance_1 = new lib.hero2_eyebrows_main_mc();
	this.instance_1.setTransform(2.5,-130.5,1,1,0,0,0,0,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:6.4,y:-126.5},39).to({rotation:0,y:-130.5},50).wait(1));

	// animation
	this.instance_2 = new lib.hero2_eyes_main_mc();
	this.instance_2.setTransform(2.5,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:6.4,x:11.1,y:-203},39).to({rotation:0,x:2.5,y:-207.5},50).wait(1));

	// animation
	this.instance_3 = new lib.hero2_lips_main_mc();
	this.instance_3.setTransform(2.5,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:6.4,x:11.1,y:-203},39).to({rotation:0,x:2.5,y:-207.5},50).wait(1));

	// animation
	this.instance_4 = new lib.hero2_scars_main_mc();
	this.instance_4.setTransform(2.5,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:6.4,x:11.1,y:-203},39).to({rotation:0,x:2.5,y:-207.5},50).wait(1));

	// animation
	this.instance_5 = new lib.hero2_head_mc();
	this.instance_5.setTransform(2.5,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:6.4,x:11.1,y:-203},39).to({rotation:0,x:2.5,y:-207.5},50).wait(1));

	// animation
	this.instance_6 = new lib.hero2_dress_main_mc();
	this.instance_6.setTransform(-2.5,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:101.5},39).to({y:97.5},50).wait(1));

	// animation
	this.instance_7 = new lib.hero2_body_mc();
	this.instance_7.setTransform(2,85);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:89},39).to({y:85},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-297.2,225,632.8);
p.frameBounds = [rect, new cjs.Rectangle(-109,-297.1,213,632.8), new cjs.Rectangle(-109,-297.3,213,633), new cjs.Rectangle(-109,-297.2,213,633.1), new cjs.Rectangle(-109,-297.4,213,633.3), new cjs.Rectangle(-109,-297.5,213,633.6), new cjs.Rectangle(-109,-297.4,213,633.6), new cjs.Rectangle(-109,-297.6,213,633.8), rect=new cjs.Rectangle(-109,-297.7,213,634.1), rect, new cjs.Rectangle(-109,-297.8,213,634.4), new cjs.Rectangle(-109,-298,213,634.7), new cjs.Rectangle(-109,-297.9,213,634.7), new cjs.Rectangle(-109,-298,213,634.9), new cjs.Rectangle(-109,-298.2,213,635.2), new cjs.Rectangle(-109,-298.1,213,635.2), new cjs.Rectangle(-109,-298.3,213,635.5), new cjs.Rectangle(-109,-298.4,213,635.7), new cjs.Rectangle(-109,-298.3,213,635.7), new cjs.Rectangle(-109,-298.4,213,635.9), new cjs.Rectangle(-109,-298.6,213,636.2), new cjs.Rectangle(-109,-298.5,213,636.2), new cjs.Rectangle(-109,-298.7,213,636.5), new cjs.Rectangle(-109,-298.8,213,636.7), new cjs.Rectangle(-109,-298.7,213,636.7), new cjs.Rectangle(-109,-298.8,213,636.9), new cjs.Rectangle(-109,-299,213,637.2), new cjs.Rectangle(-109,-298.9,213,637.2), new cjs.Rectangle(-109,-299,213,637.4), new cjs.Rectangle(-109,-299.2,213,637.7), new cjs.Rectangle(-109,-299.1,213,637.7), new cjs.Rectangle(-109,-299.2,213,638), new cjs.Rectangle(-109,-299.4,213,638.2), new cjs.Rectangle(-109,-299.3,213,638.3), new cjs.Rectangle(-109,-299.4,213,638.5), new cjs.Rectangle(-109,-299.6,213,638.7), new cjs.Rectangle(-109,-299.5,213,638.7), new cjs.Rectangle(-109,-299.6,213,639), new cjs.Rectangle(-109,-299.7,213,639.2), new cjs.Rectangle(-109,-299.9,225,639.4), new cjs.Rectangle(-109,-299.7,213,639.2), new cjs.Rectangle(-109,-299.5,213,638.9), new cjs.Rectangle(-109,-299.6,213,638.9), new cjs.Rectangle(-109,-299.4,213,638.7), new cjs.Rectangle(-109,-299.5,213,638.7), new cjs.Rectangle(-109,-299.4,213,638.4), new cjs.Rectangle(-109,-299.4,213,638.3), new cjs.Rectangle(-109,-299.2,213,638.1), new cjs.Rectangle(-109,-299.3,213,638.2), rect=new cjs.Rectangle(-109,-299.2,213,637.9), rect, new cjs.Rectangle(-109,-299.1,213,637.7), new cjs.Rectangle(-109,-299.1,213,637.6), new cjs.Rectangle(-109,-299,213,637.5), new cjs.Rectangle(-109,-299.1,213,637.5), new cjs.Rectangle(-109,-298.9,213,637.2), new cjs.Rectangle(-109,-299,213,637.2), new cjs.Rectangle(-109,-298.8,213,636.9), new cjs.Rectangle(-109,-298.6,213,636.7), new cjs.Rectangle(-109,-298.7,213,636.6), rect=new cjs.Rectangle(-109,-298.6,213,636.4), rect, new cjs.Rectangle(-109,-298.4,213,636.1), new cjs.Rectangle(-109,-298.5,213,636.2), new cjs.Rectangle(-109,-298.4,213,635.9), new cjs.Rectangle(-109,-298.4,213,635.8), new cjs.Rectangle(-109,-298.3,213,635.7), new cjs.Rectangle(-109,-298.3,213,635.6), rect=new cjs.Rectangle(-109,-298.2,213,635.4), rect, rect=new cjs.Rectangle(-109,-298.1,213,635.1), rect, new cjs.Rectangle(-109,-297.9,213,634.8), new cjs.Rectangle(-109,-298,213,634.8), new cjs.Rectangle(-109,-297.8,213,634.6), new cjs.Rectangle(-109,-297.9,213,634.6), new cjs.Rectangle(-109,-297.8,213,634.4), new cjs.Rectangle(-109,-297.9,213,634.3), new cjs.Rectangle(-109,-297.6,213,634.1), new cjs.Rectangle(-109,-297.7,213,634.1), new cjs.Rectangle(-109,-297.5,213,633.8), new cjs.Rectangle(-109,-297.7,213,633.8), new cjs.Rectangle(-109,-297.4,213,633.5), new cjs.Rectangle(-109,-297.5,213,633.5), new cjs.Rectangle(-109,-297.3,213,633.2), new cjs.Rectangle(-109,-297.4,213,633.2), new cjs.Rectangle(-109,-297.2,213,633), new cjs.Rectangle(-109,-297.3,213,633), new cjs.Rectangle(-109,-297.1,213,632.7), new cjs.Rectangle(-109,-297.2,225,632.8)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero1_crown_all_mc();
	this.headdress.setTransform(-48,-272.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:-4.5,x:-60.6,y:-261.8},34).to({rotation:0,x:-48,y:-272.5},35).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-50,-210);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-4.5,x:-57.7,y:-199.3},34).to({rotation:0,x:-50,y:-210},35).wait(1));

	// earrings
	this.earrings = new lib.hero1_earring_all_mc();
	this.earrings.setTransform(-49.5,-140.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1.01,skewX:4.1,skewY:-4.5,x:-53.3,y:-130.1},34).to({scaleY:1,skewX:0,skewY:0,x:-49.5,y:-140.5},35).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(-49.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-4.5,x:-55.3,y:-173},34).to({rotation:0,x:-49.5,y:-185.5},35).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-49.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-4.5,x:-55.3,y:-175},34).to({rotation:0,x:-49.5,y:-185.5},35).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(-49.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-4.5,x:-55.3,y:-175},34).to({rotation:0,x:-49.5,y:-185.5},35).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(-49.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:-4.5,x:-55.3,y:-175},34).to({rotation:0,x:-49.5,y:-185.5},35).wait(1));

	// scars
	this.scars = new lib.hero1_scars_all_mc();
	this.scars.setTransform(-49.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.scars).to({rotation:-4.5,x:-55.3,y:-175},34).to({rotation:0,x:-49.5,y:-185.5},35).wait(1));

	// body
	this.instance = new lib.hero1_head_mc();
	this.instance.setTransform(-49.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.5,x:-55.3,y:-175},34).to({rotation:0,x:-49.5,y:-185.5},35).wait(1));

	// flowers
	this.flowers = new lib.hero1_flower_all_mc();
	this.flowers.setTransform(134.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.flowers).to({rotation:4.7,y:29.5},34).to({rotation:0,y:19.5},35).wait(1));

	// body
	this.instance_1 = new lib.hero1_hand_mc();
	this.instance_1.setTransform(-105,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:32.5},34).to({y:22.5},35).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(-67,72);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:82},34).to({y:72},35).wait(1));

	// body
	this.instance_2 = new lib.hero1_body_mc();
	this.instance_2.setTransform(-21,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:101},34).to({y:91},35).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-50,-210);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-4.5,x:-57.7,y:-199.3},34).to({rotation:0,x:-50,y:-210},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-307.5,389,620.5);
p.frameBounds = [rect, new cjs.Rectangle(-193,-307.2,389,620.5), new cjs.Rectangle(-193,-307,389.2,620.6), new cjs.Rectangle(-193,-306.7,389.3,620.6), new cjs.Rectangle(-193,-306.6,389.5,620.8), new cjs.Rectangle(-193,-306.4,389.6,620.8), new cjs.Rectangle(-193,-306.2,389.8,621), new cjs.Rectangle(-193,-305.9,389.9,621), new cjs.Rectangle(-193,-305.8,390.1,621.2), new cjs.Rectangle(-193,-305.6,390.3,621.2), new cjs.Rectangle(-193,-305.4,390.4,621.3), new cjs.Rectangle(-193,-305.2,390.7,621.4), new cjs.Rectangle(-193,-305,390.7,621.6), new cjs.Rectangle(-193,-304.7,391,621.5), new cjs.Rectangle(-193,-304.6,391,621.7), new cjs.Rectangle(-193,-304.4,391.2,621.8), new cjs.Rectangle(-193,-304.2,391.2,621.9), new cjs.Rectangle(-193,-303.9,391.6,621.9), new cjs.Rectangle(-193,-303.9,391.7,622.2), new cjs.Rectangle(-193,-303.5,391.8,622.1), new cjs.Rectangle(-193,-303.4,392,622.3), new cjs.Rectangle(-193,-303.3,392.1,622.5), new cjs.Rectangle(-193,-303,392.3,622.5), new cjs.Rectangle(-193,-302.9,392.3,622.6), new cjs.Rectangle(-193,-302.6,392.6,622.7), new cjs.Rectangle(-193,-302.5,392.6,622.9), new cjs.Rectangle(-193,-302.2,392.9,622.8), new cjs.Rectangle(-193,-302.1,393.1,623), new cjs.Rectangle(-193,-301.7,393.1,623), new cjs.Rectangle(-193,-301.6,393.3,623.1), new cjs.Rectangle(-193,-301.4,393.4,623.2), new cjs.Rectangle(-193,-301.3,393.7,623.4), new cjs.Rectangle(-193,-301,393.6,623.4), new cjs.Rectangle(-193,-300.8,393.9,623.5), new cjs.Rectangle(-193,-300.7,394.2,623.7), new cjs.Rectangle(-193,-300.8,393.9,623.5), new cjs.Rectangle(-193,-301,393.6,623.4), new cjs.Rectangle(-193,-301.2,393.6,623.3), new cjs.Rectangle(-193,-301.4,393.4,623.2), new cjs.Rectangle(-193,-301.6,393.3,623.2), new cjs.Rectangle(-193,-301.7,393.1,623), new cjs.Rectangle(-193,-302,393,623), new cjs.Rectangle(-193,-302.1,392.9,622.8), new cjs.Rectangle(-193,-302.4,392.8,622.8), new cjs.Rectangle(-193,-302.5,392.5,622.7), new cjs.Rectangle(-193,-302.8,392.3,622.6), new cjs.Rectangle(-193,-302.9,392.3,622.4), new cjs.Rectangle(-193,-303.2,392,622.5), new cjs.Rectangle(-193,-303.3,392,622.3), new cjs.Rectangle(-193,-303.7,391.8,622.3), new cjs.Rectangle(-193,-303.7,391.7,622.2), new cjs.Rectangle(-193,-304,391.5,622.1), new cjs.Rectangle(-193,-304,391.4,621.9), new cjs.Rectangle(-193,-304.4,391.2,621.9), new cjs.Rectangle(-193,-304.5,391.1,621.8), new cjs.Rectangle(-193,-304.7,390.9,621.7), new cjs.Rectangle(-193,-304.9,390.9,621.6), new cjs.Rectangle(-193,-305.1,390.7,621.6), new cjs.Rectangle(-193,-305.2,390.4,621.4), new cjs.Rectangle(-193,-305.6,390.4,621.4), new cjs.Rectangle(-193,-305.6,390.1,621.2), new cjs.Rectangle(-193,-305.9,390.1,621.2), new cjs.Rectangle(-193,-306,389.8,621), new cjs.Rectangle(-193,-306.3,389.8,621), new cjs.Rectangle(-193,-306.4,389.5,620.8), new cjs.Rectangle(-193,-306.7,389.5,620.8), new cjs.Rectangle(-193,-306.8,389.2,620.7), new cjs.Rectangle(-193,-307.1,389.2,620.6), new cjs.Rectangle(-193,-307.2,389,620.5), new cjs.Rectangle(-193,-307.5,389,620.5)];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_fringe_main_mc();
	this.instance.setTransform(-50,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.5,x:-55.8,y:-205.8},54).to({rotation:0,x:-50,y:-210},45).wait(1));

	// animation
	this.instance_1 = new lib.hero1_earring_main_mc();
	this.instance_1.setTransform(-49.5,-140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.5,x:-51,y:-136.5},54).to({rotation:0,x:-49.5,y:-140.5},45).wait(1));

	// animation
	this.instance_2 = new lib.hero1_eyebrows_main_mc();
	this.instance_2.setTransform(-49.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.5,x:-53.8,y:-181.4},54).to({rotation:0,x:-49.5,y:-185.5},45).wait(1));

	// animation
	this.instance_3 = new lib.hero1_eyes_main_mc();
	this.instance_3.setTransform(-49.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.5,x:-53.8,y:-181.4},54).to({rotation:0,x:-49.5,y:-185.5},45).wait(1));

	// animation
	this.instance_4 = new lib.hero1_shadows_main_mc();
	this.instance_4.setTransform(-49.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-3.5,x:-53.8,y:-181.4},54).to({rotation:0,x:-49.5,y:-185.5},45).wait(1));

	// animation
	this.instance_5 = new lib.hero1_head_mc();
	this.instance_5.setTransform(-49.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-3.5,x:-53.8,y:-181.4},54).to({rotation:0,x:-49.5,y:-185.5},45).wait(1));

	// animation
	this.instance_6 = new lib.hero1_flower_main_mc();
	this.instance_6.setTransform(134.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:5.5,y:23.5},54).to({rotation:0,y:19.5},45).wait(1));

	// animation
	this.instance_7 = new lib.hero1_hand_mc();
	this.instance_7.setTransform(-105,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:26.5},54).to({y:22.5},45).wait(1));

	// animation
	this.instance_8 = new lib.hero1_dress_main_mc();
	this.instance_8.setTransform(-67,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:76},54).to({y:72},45).wait(1));

	// animation
	this.instance_9 = new lib.hero1_body_mc();
	this.instance_9.setTransform(-21,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:95},54).to({y:91},45).wait(1));

	// animation
	this.instance_10 = new lib.hero1_hair_main_mc();
	this.instance_10.setTransform(-50,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-3.5,x:-55.8,y:-205.8},54).to({rotation:0,x:-50,y:-210},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-272,399,585);
p.frameBounds = [rect, new cjs.Rectangle(-193,-271.9,399,584.9), new cjs.Rectangle(-193,-271.9,399,585), new cjs.Rectangle(-193,-271.8,399.2,585), new cjs.Rectangle(-193,-272,399.3,585.3), new cjs.Rectangle(-193,-271.9,399.5,585.2), new cjs.Rectangle(-193,-271.9,399.5,585.3), new cjs.Rectangle(-193,-271.8,399.6,585.3), new cjs.Rectangle(-193,-272,399.8,585.6), new cjs.Rectangle(-193,-271.9,399.8,585.6), new cjs.Rectangle(-193,-271.8,400,585.6), new cjs.Rectangle(-193,-271.8,400.1,585.6), new cjs.Rectangle(-193,-272,400.1,585.9), new cjs.Rectangle(-193,-271.9,400.3,585.8), new cjs.Rectangle(-193,-271.9,400.4,585.9), new cjs.Rectangle(-193,-271.8,400.6,585.9), new cjs.Rectangle(-193,-272,400.6,586.2), new cjs.Rectangle(-193,-272,400.7,586.2), new cjs.Rectangle(-193,-271.9,400.9,586.3), new cjs.Rectangle(-193,-271.8,400.9,586.2), rect=new cjs.Rectangle(-193,-272,401.2,586.5), rect, new cjs.Rectangle(-193,-271.9,401.2,586.6), new cjs.Rectangle(-193,-271.9,401.5,586.6), new cjs.Rectangle(-193,-272,401.5,586.8), new cjs.Rectangle(-193,-272,401.7,586.8), rect=new cjs.Rectangle(-193,-271.9,401.7,586.8), rect, rect=new cjs.Rectangle(-193,-272,402,587.1), rect, new cjs.Rectangle(-193,-271.9,402.2,587.1), rect=new cjs.Rectangle(-193,-272.1,402.3,587.4), rect, new cjs.Rectangle(-193,-272,402.5,587.4), new cjs.Rectangle(-193,-271.9,402.5,587.4), rect=new cjs.Rectangle(-193,-272.1,402.8,587.7), rect, new cjs.Rectangle(-193,-272,402.8,587.8), new cjs.Rectangle(-193,-272,403,587.8), new cjs.Rectangle(-193,-272.1,403.1,588), new cjs.Rectangle(-193,-272.1,403.3,588), new cjs.Rectangle(-193,-272,403.3,588.1), new cjs.Rectangle(-193,-272,403.5,588.1), new cjs.Rectangle(-193,-272.1,403.5,588.3), new cjs.Rectangle(-193,-272.1,403.6,588.3), new cjs.Rectangle(-193,-272,403.8,588.4), new cjs.Rectangle(-193,-271.9,403.8,588.3), new cjs.Rectangle(-193,-272.2,404,588.7), new cjs.Rectangle(-193,-272,404,588.6), new cjs.Rectangle(-193,-272,404.1,588.7), new cjs.Rectangle(-193,-271.9,404.3,588.6), new cjs.Rectangle(-193,-272.2,404.3,589), new cjs.Rectangle(-193,-272.1,404.5,588.9), new cjs.Rectangle(-193,-272,404.6,589), new cjs.Rectangle(-193,-272.2,404.8,589.2), new cjs.Rectangle(-193,-272.1,404.5,589), new cjs.Rectangle(-193,-272.1,404.3,588.9), new cjs.Rectangle(-193,-272.2,404.2,588.9), new cjs.Rectangle(-193,-272,404.1,588.6), new cjs.Rectangle(-193,-272.1,404,588.6), new cjs.Rectangle(-193,-272.1,403.8,588.6), new cjs.Rectangle(-193,-272,403.7,588.4), new cjs.Rectangle(-193,-272.1,403.6,588.4), new cjs.Rectangle(-193,-272.2,403.5,588.4), new cjs.Rectangle(-193,-272,403.5,588.1), new cjs.Rectangle(-193,-272.1,403.3,588.1), new cjs.Rectangle(-193,-272.1,403.3,588), new cjs.Rectangle(-193,-271.9,403.1,587.8), new cjs.Rectangle(-193,-272,403,587.7), new cjs.Rectangle(-193,-272.1,402.7,587.8), new cjs.Rectangle(-193,-272.1,402.7,587.7), new cjs.Rectangle(-193,-272,402.5,587.5), new cjs.Rectangle(-193,-272.1,402.4,587.5), new cjs.Rectangle(-193,-272.1,402.2,587.4), new cjs.Rectangle(-193,-271.9,402.2,587.1), new cjs.Rectangle(-193,-272,402,587.2), new cjs.Rectangle(-193,-272.1,401.9,587.1), new cjs.Rectangle(-193,-271.9,401.7,586.8), new cjs.Rectangle(-193,-272,401.7,586.8), new cjs.Rectangle(-193,-272,401.4,586.8), new cjs.Rectangle(-193,-271.9,401.4,586.6), new cjs.Rectangle(-193,-271.9,401.1,586.5), new cjs.Rectangle(-193,-272,401.2,586.5), new cjs.Rectangle(-193,-271.8,400.9,586.2), new cjs.Rectangle(-193,-271.9,400.9,586.3), new cjs.Rectangle(-193,-272,400.6,586.3), new cjs.Rectangle(-193,-272.1,400.6,586.2), new cjs.Rectangle(-193,-271.9,400.3,585.9), new cjs.Rectangle(-193,-272,400.3,586), new cjs.Rectangle(-193,-272,400,585.9), new cjs.Rectangle(-193,-271.8,400.1,585.6), new cjs.Rectangle(-193,-271.9,399.9,585.6), new cjs.Rectangle(-193,-272,399.8,585.6), new cjs.Rectangle(-193,-271.8,399.6,585.3), new cjs.Rectangle(-193,-271.9,399.5,585.3), new cjs.Rectangle(-193,-272,399.3,585.4), new cjs.Rectangle(-193,-271.7,399.3,585), new cjs.Rectangle(-193,-271.8,399,585), new cjs.Rectangle(-193,-271.9,399,585), new cjs.Rectangle(-193,-272,399,585)];


(lib.headdress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfLVIAA2pIY/AAIAAWpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-72.5,160,145);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
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


(lib.flowers_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.eyes_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.eyes_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},19).to({alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyes_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.eyes_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect, rect];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_2_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_1_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_2_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_1_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_2_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_1_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_2_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_1_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_2_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_1_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_2_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_1_img();
	this.instance.setTransform(-75,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsK8IAA13IXZAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-95,180,190);
p.frameBounds = [rect];


(lib.eyebrows_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.eyebrows_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},19).to({alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyebrows_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyebrows_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.eyebrows_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect, rect];


(lib.eyebrows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_6_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_6_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.eyebrows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_5_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_5_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.eyebrows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_4_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_4_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.eyebrows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_3_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_3_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.eyebrows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_2_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_2_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.eyebrows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_1_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_1_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYKLIbj7jIHOHOI7jbjg");
	this.shape.setTransform(0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-111.4,222.8,222.8);
p.frameBounds = [rect];


(lib.earrings_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-55,111,110);
p.frameBounds = [rect];


(lib.earrings_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.earrings_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsKJIAA0RIXZAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-65,150,130);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7JYIAAyvIV3AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-60,140,120);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.dress_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_12_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_11_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_10_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmLmLgBovQABouGLmMQGMmKItAAQIuAAGMGKQGLGMABIuQgBIvmLGLQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoaF8l7QF8l9IaAAQIaAAF8F9QF9F7AAIaQAAIal9F8Ql8F9oaAAQoaAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.dress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
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


(lib.closet_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(145,-60);

	this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(3));

	// options
	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(60,-70);

	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(0,50);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(-60,-70);

	this.earrings_6 = new lib.earrings_6_1_mc();
	this.earrings_6.setTransform(-60,-70);

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(0,50);

	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(60,-70);

	this.earrings_9 = new lib.earrings_9_1_mc();
	this.earrings_9.setTransform(60,-80);

	this.earrings_8 = new lib.earrings_8_1_mc();
	this.earrings_8.setTransform(-60,-80);

	this.earrings_7 = new lib.earrings_7_1_mc();
	this.earrings_7.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3}]}).to({state:[{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_7},{t:this.earrings_8},{t:this.earrings_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-125,286,235);
p.frameBounds = [rect, rect, new cjs.Rectangle(-115,-135,286,250)];


(lib.closet_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.flowers_0 = new lib.flowers_0_mc();
	this.flowers_0.setTransform(107,-150);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(107,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flowers_0}]}).to({state:[{t:this.headdress_0}]},5).wait(3));

	// options
	this.flowers_2 = new lib.flowers_2_2_mc();
	this.flowers_2.setTransform(-10,30);

	this.flowers_1 = new lib.flowers_1_2_mc();
	this.flowers_1.setTransform(0,-110);

	this.flowers_4 = new lib.flowers_4_2_mc();
	this.flowers_4.setTransform(0,40);

	this.flowers_3 = new lib.flowers_3_2_mc();
	this.flowers_3.setTransform(0,-110);

	this.flowers_6 = new lib.flowers_6_2_mc();
	this.flowers_6.setTransform(10,-110);

	this.flowers_5 = new lib.flowers_5_2_mc();
	this.flowers_5.setTransform(0,50);

	this.flowers_7 = new lib.flowers_7_2_mc();
	this.flowers_7.setTransform(10,45);

	this.flowers_8 = new lib.flowers_8_2_mc();
	this.flowers_8.setTransform(0,-110);

	this.flowers_10 = new lib.flowers_10_2_mc();
	this.flowers_10.setTransform(10,45);

	this.flowers_9 = new lib.flowers_9_2_mc();
	this.flowers_9.setTransform(0,-110);

	this.headdress_5 = new lib.headdress_5_2_mc();
	this.headdress_5.setTransform(0,40);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(0,-110);

	this.headdress_6 = new lib.headdress_6_2_mc();
	this.headdress_6.setTransform(0,55);

	this.headdress_3 = new lib.headdress_3_2_mc();
	this.headdress_3.setTransform(0,-65);

	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(0,-145);

	this.headdress_4 = new lib.headdress_4_2_mc();
	this.headdress_4.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flowers_1},{t:this.flowers_2}]}).to({state:[{t:this.flowers_3},{t:this.flowers_4}]},1).to({state:[{t:this.flowers_5},{t:this.flowers_6}]},1).to({state:[{t:this.flowers_8},{t:this.flowers_7}]},1).to({state:[{t:this.flowers_9},{t:this.flowers_10}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_5}]},1).to({state:[{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_6}]},1).to({state:[{t:this.headdress_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.6,-180.9,210.6,288.5);
p.frameBounds = [rect, new cjs.Rectangle(-80.7,-189.7,213.8,328.1), new cjs.Rectangle(-70.8,-208.5,203.8,334.9), new cjs.Rectangle(-70.3,-197.2,203.3,325.8), new cjs.Rectangle(-78.2,-193.4,211.3,320.3), new cjs.Rectangle(-117.1,-186.9,250.2,297.4), new cjs.Rectangle(-80,-182.5,213,310), new cjs.Rectangle(-90,-176,223,251)];


(lib.closet_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.flowers_0 = new lib.flowers_0_mc();
	this.flowers_0.setTransform(145,-60);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(145,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flowers_0}]}).to({state:[{t:this.headdress_0}]},5).wait(3));

	// options
	this.flowers_1 = new lib.flowers_1_1_mc();
	this.flowers_1.setTransform(-5,60);

	this.flowers_2 = new lib.flowers_2_1_mc();
	this.flowers_2.setTransform(0,-90);

	this.flowers_4 = new lib.flowers_4_1_mc();
	this.flowers_4.setTransform(-10,60);

	this.flowers_3 = new lib.flowers_3_1_mc();
	this.flowers_3.setTransform(0,-90);

	this.flowers_5 = new lib.flowers_5_1_mc();
	this.flowers_5.setTransform(0,60);

	this.flowers_6 = new lib.flowers_6_1_mc();
	this.flowers_6.setTransform(0,-90);

	this.flowers_9 = new lib.flowers_9_1_mc();
	this.flowers_9.setTransform(0,-90);

	this.flowers_8 = new lib.flowers_8_1_mc();
	this.flowers_8.setTransform(-5,60);

	this.flowers_7 = new lib.flowers_7_1_mc();
	this.flowers_7.setTransform(0,-10);

	this.headdress_3 = new lib.headdress_3_1_mc();
	this.headdress_3.setTransform(0,-20);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(0,70);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(0,-130);

	this.headdress_6 = new lib.headdress_6_1_mc();
	this.headdress_6.setTransform(0,-115);

	this.headdress_5 = new lib.headdress_5_1_mc();
	this.headdress_5.setTransform(0,65);

	this.headdress_4 = new lib.headdress_4_1_mc();
	this.headdress_4.setTransform(0,-25);

	this.headdress_9 = new lib.headdress_9_1_mc();
	this.headdress_9.setTransform(0,70);

	this.headdress_7 = new lib.headdress_7_1_mc();
	this.headdress_7.setTransform(0,-135);

	this.headdress_8 = new lib.headdress_8_1_mc();
	this.headdress_8.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flowers_2},{t:this.flowers_1}]}).to({state:[{t:this.flowers_3},{t:this.flowers_4}]},1).to({state:[{t:this.flowers_6},{t:this.flowers_5}]},1).to({state:[{t:this.flowers_8},{t:this.flowers_9}]},1).to({state:[{t:this.flowers_7}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3}]},1).to({state:[{t:this.headdress_4},{t:this.headdress_5},{t:this.headdress_6}]},1).to({state:[{t:this.headdress_8},{t:this.headdress_7},{t:this.headdress_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.7,-182.4,263.7,323.5);
p.frameBounds = [rect, new cjs.Rectangle(-86.8,-173.9,257.9,328.3), new cjs.Rectangle(-80,-170.2,251,302.8), new cjs.Rectangle(-85,-179.1,256.1,322.7), new cjs.Rectangle(-101.4,-103.4,272.5,194.1), new cjs.Rectangle(-77.8,-184.3,248.9,297.4), new cjs.Rectangle(-89.7,-152.9,260.8,257), new cjs.Rectangle(-109.1,-202.4,280.2,312.4)];


(lib.closet_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(0,400);

	this.timeline.addTween(cjs.Tween.get(this.dress_0).wait(9));

	// options
	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(0,-80);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(0,-80);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(0,-80);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(0,-80);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(0,-80);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(0,-80);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(0,-80);

	this.dress_9 = new lib.dress_9_2_mc();
	this.dress_9.setTransform(0,-80);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(0,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2}]}).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-240,320,666);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(0,400);

	this.timeline.addTween(cjs.Tween.get(this.dress_0).wait(12));

	// options
	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(0,-85);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(0,-85);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(0,-85);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(0,-85);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(0,-85);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(0,-85);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(0,-85);

	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(0,-85);

	this.dress_10 = new lib.dress_10_1_mc();
	this.dress_10.setTransform(0,-85);

	this.dress_11 = new lib.dress_11_1_mc();
	this.dress_11.setTransform(0,-85);

	this.dress_12 = new lib.dress_12_1_mc();
	this.dress_12.setTransform(0,-85);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(0,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2}]}).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_10}]},1).to({state:[{t:this.dress_11}]},1).to({state:[{t:this.dress_12}]},1).to({state:[{t:this.dress_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-245,320,671);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(0,-50);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,-50);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(0,-50);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(0,-50);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,-50);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2}]}).to({state:[{t:this.hair_3}]},1).to({state:[{t:this.hair_4}]},1).to({state:[{t:this.hair_5}]},1).to({state:[{t:this.hair_6}]},1).to({state:[{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(0,-60);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,-60);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(0,-60);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(0,-60);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,-60);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2}]}).to({state:[{t:this.hair_3}]},1).to({state:[{t:this.hair_4}]},1).to({state:[{t:this.hair_5}]},1).to({state:[{t:this.hair_6}]},1).to({state:[{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-220,320,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.scars_0 = new lib.scars_0_mc();
	this.scars_0.setTransform(106,-150);

	this.timeline.addTween(cjs.Tween.get(this.scars_0).to({_off:true},3).wait(9));

	// options
	this.scars_2 = new lib.scars_2_1_mc();
	this.scars_2.setTransform(20,30);

	this.scars_1 = new lib.scars_1_1_mc();
	this.scars_1.setTransform(-20,-90);

	this.scars_4 = new lib.scars_4_1_mc();
	this.scars_4.setTransform(20,30);

	this.scars_3 = new lib.scars_3_1_mc();
	this.scars_3.setTransform(-20,-90);

	this.scars_6 = new lib.scars_6_1_mc();
	this.scars_6.setTransform(20,30);

	this.scars_5 = new lib.scars_5_1_mc();
	this.scars_5.setTransform(-20,-90);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(-45,-60);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(45,0);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(45,-60);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(-45,0);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(45,0);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(-45,-60);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(0,45);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(0,-110);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(0,45);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(0,-110);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(0,45);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(0,-110);

	this.eyebrows_6 = new lib.eyebrows_6_2_mc();
	this.eyebrows_6.setTransform(10,30);

	this.eyebrows_2 = new lib.eyebrows_2_2_mc();
	this.eyebrows_2.setTransform(0,-90);

	this.eyebrows_4 = new lib.eyebrows_4_2_mc();
	this.eyebrows_4.setTransform(10,30);

	this.eyebrows_3 = new lib.eyebrows_3_2_mc();
	this.eyebrows_3.setTransform(0,-90);

	this.eyebrows_1 = new lib.eyebrows_1_2_mc();
	this.eyebrows_1.setTransform(10,30);

	this.eyebrows_5 = new lib.eyebrows_5_2_mc();
	this.eyebrows_5.setTransform(0,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scars_1},{t:this.scars_2}]}).to({state:[{t:this.scars_3},{t:this.scars_4}]},1).to({state:[{t:this.scars_5},{t:this.scars_6}]},1).to({state:[{t:this.lips_2},{t:this.lips_6}]},1).to({state:[{t:this.lips_3},{t:this.lips_4}]},1).to({state:[{t:this.lips_5},{t:this.lips_1}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_5}]},1).to({state:[{t:this.eyes_3},{t:this.eyes_4}]},1).to({state:[{t:this.eyes_6},{t:this.eyes_1}]},1).to({state:[{t:this.eyebrows_2},{t:this.eyebrows_6}]},1).to({state:[{t:this.eyebrows_3},{t:this.eyebrows_4}]},1).to({state:[{t:this.eyebrows_5},{t:this.eyebrows_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-195,217,330);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-95,-180,190,300), rect, rect, rect=new cjs.Rectangle(-90,-205,180,345), rect, rect, rect=new cjs.Rectangle(-111,-201.4,232.8,342.8), rect, rect];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.scars_0 = new lib.scars_0_mc();
	this.scars_0.setTransform(145,-60);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(145,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scars_0}]}).to({state:[]},3).to({state:[{t:this.shadows_0}]},3).to({state:[]},3).wait(6));

	// options
	this.scars_2 = new lib.scars_2_1_mc();
	this.scars_2.setTransform(40,20);

	this.scars_1 = new lib.scars_1_1_mc();
	this.scars_1.setTransform(-40,-50);

	this.scars_6 = new lib.scars_6_1_mc();
	this.scars_6.setTransform(40,20);

	this.scars_5 = new lib.scars_5_1_mc();
	this.scars_5.setTransform(-40,-50);

	this.scars_4 = new lib.scars_4_1_mc();
	this.scars_4.setTransform(40,20);

	this.scars_3 = new lib.scars_3_1_mc();
	this.scars_3.setTransform(-40,-50);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(50,0);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-50,-30);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(50,-30);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(-50,0);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(50,0);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-50,-30);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(60,20);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-61,-50);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(60,-50);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-61,20);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(-61,-50);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(60,20);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(0,50);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(0,-100);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(0,50);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(0,-100);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(0,50);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(0,-100);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(20,25);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(-10,-80);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(20,25);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(-10,-80);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(20,25);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(-10,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scars_1},{t:this.scars_2}]}).to({state:[{t:this.scars_5},{t:this.scars_6}]},1).to({state:[{t:this.scars_3},{t:this.scars_4}]},1).to({state:[{t:this.lips_5},{t:this.lips_2}]},1).to({state:[{t:this.lips_3},{t:this.lips_6}]},1).to({state:[{t:this.lips_4},{t:this.lips_1}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2}]},1).to({state:[{t:this.shadows_3},{t:this.shadows_5}]},1).to({state:[{t:this.shadows_6},{t:this.shadows_4}]},1).to({state:[{t:this.eyes_6},{t:this.eyes_2}]},1).to({state:[{t:this.eyes_3},{t:this.eyes_4}]},1).to({state:[{t:this.eyes_5},{t:this.eyes_1}]},1).to({state:[{t:this.eyebrows_2},{t:this.eyebrows_5}]},1).to({state:[{t:this.eyebrows_3},{t:this.eyebrows_4}]},1).to({state:[{t:this.eyebrows_6},{t:this.eyebrows_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-155,276,280);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-100,-150,200,270), rect, rect, rect=new cjs.Rectangle(-136,-155,307,280), rect, rect, rect=new cjs.Rectangle(-90,-195,180,340), rect, rect, rect=new cjs.Rectangle(-121,-191.4,252.8,327.8), rect, rect];


(lib.bodyDressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-125,286,235);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.6,-180.9,210.6,288.5);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.7,-182.4,263.7,323.5);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-240,320,666);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-245,320,671);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,320);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-220,320,320);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-195,217,330);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-155,276,280);
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


(lib.animation_current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-275,280,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_cloud_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cloud_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10},69).to({y:0},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-316,-55,632,110);
p.frameBounds = [rect, new cjs.Rectangle(-316,-55.1,632,110), new cjs.Rectangle(-316,-55.3,632,110), new cjs.Rectangle(-316,-55.4,632,110), new cjs.Rectangle(-316,-55.6,632,110), new cjs.Rectangle(-316,-55.7,632,110), new cjs.Rectangle(-316,-55.8,632,110), new cjs.Rectangle(-316,-56,632,110), new cjs.Rectangle(-316,-56.1,632,110), new cjs.Rectangle(-316,-56.3,632,110), new cjs.Rectangle(-316,-56.4,632,110), new cjs.Rectangle(-316,-56.6,632,110), new cjs.Rectangle(-316,-56.7,632,110), new cjs.Rectangle(-316,-56.9,632,110), new cjs.Rectangle(-316,-57,632,110), new cjs.Rectangle(-316,-57.1,632,110), new cjs.Rectangle(-316,-57.3,632,110), new cjs.Rectangle(-316,-57.4,632,110), new cjs.Rectangle(-316,-57.6,632,110), new cjs.Rectangle(-316,-57.7,632,110), new cjs.Rectangle(-316,-57.9,632,110), new cjs.Rectangle(-316,-58,632,110), new cjs.Rectangle(-316,-58.2,632,110), new cjs.Rectangle(-316,-58.3,632,110), new cjs.Rectangle(-316,-58.5,632,110), new cjs.Rectangle(-316,-58.6,632,110), new cjs.Rectangle(-316,-58.7,632,110), new cjs.Rectangle(-316,-58.9,632,110), new cjs.Rectangle(-316,-59,632,110), new cjs.Rectangle(-316,-59.2,632,110), new cjs.Rectangle(-316,-59.3,632,110), new cjs.Rectangle(-316,-59.5,632,110), new cjs.Rectangle(-316,-59.6,632,110), new cjs.Rectangle(-316,-59.8,632,110), new cjs.Rectangle(-316,-59.9,632,110), new cjs.Rectangle(-316,-60,632,110), new cjs.Rectangle(-316,-60.2,632,110), new cjs.Rectangle(-316,-60.3,632,110), new cjs.Rectangle(-316,-60.5,632,110), new cjs.Rectangle(-316,-60.6,632,110), new cjs.Rectangle(-316,-60.8,632,110), new cjs.Rectangle(-316,-60.9,632,110), new cjs.Rectangle(-316,-61.1,632,110), new cjs.Rectangle(-316,-61.2,632,110), new cjs.Rectangle(-316,-61.4,632,110), new cjs.Rectangle(-316,-61.5,632,110), new cjs.Rectangle(-316,-61.6,632,110), new cjs.Rectangle(-316,-61.8,632,110), new cjs.Rectangle(-316,-61.9,632,110), new cjs.Rectangle(-316,-62.1,632,110), new cjs.Rectangle(-316,-62.2,632,110), new cjs.Rectangle(-316,-62.4,632,110), new cjs.Rectangle(-316,-62.5,632,110), new cjs.Rectangle(-316,-62.7,632,110), new cjs.Rectangle(-316,-62.8,632,110), new cjs.Rectangle(-316,-62.9,632,110), new cjs.Rectangle(-316,-63.1,632,110), new cjs.Rectangle(-316,-63.2,632,110), new cjs.Rectangle(-316,-63.4,632,110), new cjs.Rectangle(-316,-63.5,632,110), new cjs.Rectangle(-316,-63.7,632,110), new cjs.Rectangle(-316,-63.8,632,110), new cjs.Rectangle(-316,-64,632,110), new cjs.Rectangle(-316,-64.1,632,110), new cjs.Rectangle(-316,-64.3,632,110), new cjs.Rectangle(-316,-64.4,632,110), new cjs.Rectangle(-316,-64.5,632,110), new cjs.Rectangle(-316,-64.7,632,110), new cjs.Rectangle(-316,-64.8,632,110), new cjs.Rectangle(-316,-65,632,110), new cjs.Rectangle(-316,-64.8,632,110), new cjs.Rectangle(-316,-64.7,632,110), new cjs.Rectangle(-316,-64.5,632,110), new cjs.Rectangle(-316,-64.4,632,110), new cjs.Rectangle(-316,-64.3,632,110), new cjs.Rectangle(-316,-64.1,632,110), new cjs.Rectangle(-316,-64,632,110), new cjs.Rectangle(-316,-63.8,632,110), new cjs.Rectangle(-316,-63.7,632,110), new cjs.Rectangle(-316,-63.5,632,110), new cjs.Rectangle(-316,-63.4,632,110), new cjs.Rectangle(-316,-63.3,632,110), new cjs.Rectangle(-316,-63.1,632,110), new cjs.Rectangle(-316,-63,632,110), new cjs.Rectangle(-316,-62.8,632,110), new cjs.Rectangle(-316,-62.7,632,110), new cjs.Rectangle(-316,-62.5,632,110), new cjs.Rectangle(-316,-62.4,632,110), new cjs.Rectangle(-316,-62.3,632,110), new cjs.Rectangle(-316,-62.1,632,110), new cjs.Rectangle(-316,-62,632,110), new cjs.Rectangle(-316,-61.8,632,110), new cjs.Rectangle(-316,-61.7,632,110), new cjs.Rectangle(-316,-61.5,632,110), new cjs.Rectangle(-316,-61.4,632,110), new cjs.Rectangle(-316,-61.3,632,110), new cjs.Rectangle(-316,-61.1,632,110), new cjs.Rectangle(-316,-61,632,110), new cjs.Rectangle(-316,-60.8,632,110), new cjs.Rectangle(-316,-60.7,632,110), new cjs.Rectangle(-316,-60.5,632,110), new cjs.Rectangle(-316,-60.4,632,110), new cjs.Rectangle(-316,-60.3,632,110), new cjs.Rectangle(-316,-60.1,632,110), new cjs.Rectangle(-316,-60,632,110), new cjs.Rectangle(-316,-59.8,632,110), new cjs.Rectangle(-316,-59.7,632,110), new cjs.Rectangle(-316,-59.5,632,110), new cjs.Rectangle(-316,-59.4,632,110), new cjs.Rectangle(-316,-59.3,632,110), new cjs.Rectangle(-316,-59.1,632,110), new cjs.Rectangle(-316,-59,632,110), new cjs.Rectangle(-316,-58.8,632,110), new cjs.Rectangle(-316,-58.7,632,110), new cjs.Rectangle(-316,-58.5,632,110), new cjs.Rectangle(-316,-58.4,632,110), new cjs.Rectangle(-316,-58.3,632,110), new cjs.Rectangle(-316,-58.1,632,110), new cjs.Rectangle(-316,-58,632,110), new cjs.Rectangle(-316,-57.8,632,110), new cjs.Rectangle(-316,-57.7,632,110), new cjs.Rectangle(-316,-57.5,632,110), new cjs.Rectangle(-316,-57.4,632,110), new cjs.Rectangle(-316,-57.3,632,110), new cjs.Rectangle(-316,-57.1,632,110), new cjs.Rectangle(-316,-57,632,110), new cjs.Rectangle(-316,-56.8,632,110), new cjs.Rectangle(-316,-56.7,632,110), new cjs.Rectangle(-316,-56.5,632,110), new cjs.Rectangle(-316,-56.4,632,110), new cjs.Rectangle(-316,-56.3,632,110), new cjs.Rectangle(-316,-56.1,632,110), new cjs.Rectangle(-316,-56,632,110), new cjs.Rectangle(-316,-55.8,632,110), new cjs.Rectangle(-316,-55.7,632,110), new cjs.Rectangle(-316,-55.5,632,110), new cjs.Rectangle(-316,-55.4,632,110), new cjs.Rectangle(-316,-55.3,632,110), new cjs.Rectangle(-316,-55.1,632,110), new cjs.Rectangle(-316,-55,632,110)];


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
	this.instance.setTransform(-200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-348.7,106.8,302.5,181.5), new cjs.Rectangle(-345,97.1,309.9,186), new cjs.Rectangle(-338.9,81.1,322.2,193.4), new cjs.Rectangle(-330.2,58.6,339.5,203.7), new cjs.Rectangle(-319,29.7,361.7,217.1), new cjs.Rectangle(-305.5,-5.5,388.9,233.4), new cjs.Rectangle(-289.4,-47.2,421,252.6), new cjs.Rectangle(-270.9,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.white_flash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_flash_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
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
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
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
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-24.2,-24.2,48.6,48.6), new cjs.Rectangle(-23.9,-23.9,47.8,47.8), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.8,-22.8,45.7,45.7), new cjs.Rectangle(-22.5,-22.5,45,45), new cjs.Rectangle(-22.1,-22.1,44.3,44.3), new cjs.Rectangle(-21.7,-21.7,43.6,43.6), new cjs.Rectangle(-21.4,-21.4,42.8,42.8), new cjs.Rectangle(-21,-21,42.2,42.2), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.3,-24.3,48.7,48.7), new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-25,-25,50,50)];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.301},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, new cjs.Rectangle(-19.7,-19.7,39.5,39.5), new cjs.Rectangle(-19.4,-19.4,38.8,38.8), new cjs.Rectangle(-19.1,-19.1,38.3,38.3), new cjs.Rectangle(-18.8,-18.8,37.7,37.7), new cjs.Rectangle(-18.5,-18.5,37.2,37.2), new cjs.Rectangle(-18.2,-18.2,36.6,36.6), new cjs.Rectangle(-18,-18,36,36), new cjs.Rectangle(-17.7,-17.7,35.5,35.5), new cjs.Rectangle(-17.4,-17.4,34.8,34.8), new cjs.Rectangle(-17.1,-17.1,34.3,34.3), new cjs.Rectangle(-16.8,-16.8,33.7,33.7), new cjs.Rectangle(-16.5,-16.5,33.2,33.2), new cjs.Rectangle(-16.2,-16.2,32.6,32.6), new cjs.Rectangle(-16,-16,32,32), new cjs.Rectangle(-16.2,-16.2,32.6,32.6), new cjs.Rectangle(-16.5,-16.5,33.1,33.1), new cjs.Rectangle(-16.7,-16.7,33.6,33.6), new cjs.Rectangle(-17,-17,34.2,34.2), new cjs.Rectangle(-17.3,-17.3,34.7,34.7), new cjs.Rectangle(-17.5,-17.5,35.2,35.2), new cjs.Rectangle(-17.8,-17.8,35.8,35.8), new cjs.Rectangle(-18.1,-18.1,36.3,36.3), new cjs.Rectangle(-18.3,-18.3,36.8,36.8), new cjs.Rectangle(-18.6,-18.6,37.3,37.3), new cjs.Rectangle(-18.9,-18.9,37.8,37.8), new cjs.Rectangle(-19.1,-19.1,38.4,38.4), new cjs.Rectangle(-19.4,-19.4,39,39), new cjs.Rectangle(-19.7,-19.7,39.5,39.5), new cjs.Rectangle(-20,-20,40,40)];


(lib.gravity_big_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleBigGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
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
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-43.7,87.5,87.5);
p.frameBounds = [rect, new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-50,-50,100,100)];


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
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({alpha:0.102},15).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_4_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({alpha:0.102},15).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_3_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},29).to({alpha:0.012},40).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();
	this.instance_1.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.012},29).to({alpha:0.898},40).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXHCIAAuCISvAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({alpha:0.102},15).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXHCIAAuCISvAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
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


(lib.location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_8_img();
	this.instance.setTransform(-125,-260);

	this.instance_1 = new lib.location_1_8_img();
	this.instance_1.setTransform(-125,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(501,-126,1,1,0,0,0,501,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgThAooMAAAhRPMAnDAAAMAAABRPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-270,250,540);
p.frameBounds = [rect, new cjs.Rectangle(-140,-275,280,550), new cjs.Rectangle(-125,-270,250,540)];


(lib.location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_7_img();
	this.instance.setTransform(-125,-260);

	this.instance_1 = new lib.location_1_7_img();
	this.instance_1.setTransform(-125,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(501,-126,1,1,0,0,0,501,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgThAooMAAAhRPMAnDAAAMAAABRPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-270,250,540);
p.frameBounds = [rect, new cjs.Rectangle(-140,-275,280,550), new cjs.Rectangle(-125,-270,250,540)];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_6_img();
	this.instance.setTransform(-125,-260);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-125,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(501,-126,1,1,0,0,0,501,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgThAooMAAAhRPMAnDAAAMAAABRPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-270,250,540);
p.frameBounds = [rect, new cjs.Rectangle(-140,-275,280,550), new cjs.Rectangle(-125,-270,250,540)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-125,-260);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-125,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(501,-126,1,1,0,0,0,501,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgThAooMAAAhRPMAnDAAAMAAABRPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-270,250,540);
p.frameBounds = [rect, new cjs.Rectangle(-140,-275,280,550), new cjs.Rectangle(-125,-270,250,540)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-125,-260);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-125,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(501,-126,1,1,0,0,0,501,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgThAooMAAAhRPMAnDAAAMAAABRPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-270,250,540);
p.frameBounds = [rect, new cjs.Rectangle(-140,-275,280,550), new cjs.Rectangle(-125,-270,250,540)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-125,-260);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-125,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(501,-126,1,1,0,0,0,501,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgThAooMAAAhRPMAnDAAAMAAABRPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-270,250,540);
p.frameBounds = [rect, new cjs.Rectangle(-140,-275,280,550), new cjs.Rectangle(-125,-270,250,540)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-125,-260);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-125,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(501,-126,1,1,0,0,0,501,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgThAooMAAAhRPMAnDAAAMAAABRPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-270,250,540);
p.frameBounds = [rect, new cjs.Rectangle(-140,-275,280,550), new cjs.Rectangle(-125,-270,250,540)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-125,-260);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-125,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(501,-126,1,1,0,0,0,501,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgThAooMAAAhRPMAnDAAAMAAABRPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-270,250,540);
p.frameBounds = [rect, new cjs.Rectangle(-140,-275,280,550), new cjs.Rectangle(-125,-270,250,540)];


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


(lib.frame_locations_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:89,end:199});

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
	this.frame_74 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(20).call(this.frame_74).wait(126));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(150,280,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,280,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,280,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-210,280,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-150,280,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-30,280,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-90,280,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_2_mc();
	this.instance_7.setTransform(210,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(200));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({x:-1600},0).wait(63).to({x:-150},15).to({x:-250},5).wait(75).to({x:-350},5).to({x:1000},15).wait(21));

	// location_7
	this.location_7 = new lib.location_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({x:-1300},0).wait(43).to({x:100},15).to({x:0},5).wait(75).to({x:-100},5).to({x:1300},15).wait(41));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1).to({x:-1000},0).wait(23).to({x:350},15).to({x:250},5).wait(75).to({x:150},5).to({x:1600},15).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-270,750,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1725,-270,1965,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1725,-270,2020,580), new cjs.Rectangle(-1725,-270,2110,580), new cjs.Rectangle(-1725,-270,2200,580), new cjs.Rectangle(-1725,-270,2180,580), new cjs.Rectangle(-1725,-270,2160,580), new cjs.Rectangle(-1725,-270,2140,580), new cjs.Rectangle(-1725,-270,2120,580), rect=new cjs.Rectangle(-1725,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1628.3,-270,2003.4,580), new cjs.Rectangle(-1531.6,-270,1906.7,580), new cjs.Rectangle(-1435,-270,1810,580), new cjs.Rectangle(-1338.3,-270,1713.4,580), new cjs.Rectangle(-1241.7,-270,1616.7,580), new cjs.Rectangle(-1145,-270,1520,580), new cjs.Rectangle(-1048.3,-270,1423.4,580), new cjs.Rectangle(-951.6,-270,1326.7,580), new cjs.Rectangle(-855,-270,1230,580), new cjs.Rectangle(-758.3,-270,1133.3,580), new cjs.Rectangle(-661.6,-270,1036.7,580), new cjs.Rectangle(-565,-270,940,580), new cjs.Rectangle(-468.3,-270,843.4,580), new cjs.Rectangle(-371.6,-270,746.7,580), new cjs.Rectangle(-275,-270,650,580), new cjs.Rectangle(-295,-270,670,580), new cjs.Rectangle(-315,-270,690,580), new cjs.Rectangle(-335,-270,710,580), new cjs.Rectangle(-355,-270,730,580), rect=new cjs.Rectangle(-375,-270,750,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375,-270,730,580), new cjs.Rectangle(-375,-270,710,580), new cjs.Rectangle(-375,-270,690,580), new cjs.Rectangle(-375,-270,670,580), new cjs.Rectangle(-375,-270,650,580), new cjs.Rectangle(-375,-270,746.7,580), new cjs.Rectangle(-375,-270,843.4,580), new cjs.Rectangle(-375,-270,940,580), new cjs.Rectangle(-375,-270,1036.7,580), new cjs.Rectangle(-375,-270,1133.3,580), new cjs.Rectangle(-375,-270,1230,580), new cjs.Rectangle(-375,-270,1326.7,580), new cjs.Rectangle(-375,-270,1423.4,580), new cjs.Rectangle(-375,-270,1520,580), new cjs.Rectangle(-375,-270,1616.7,580), new cjs.Rectangle(-375,-270,1713.4,580), new cjs.Rectangle(-375,-270,1810,580), new cjs.Rectangle(-375,-270,1906.7,580), new cjs.Rectangle(-375,-270,2003.4,580), rect=new cjs.Rectangle(-375,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395,-270,2120,580), new cjs.Rectangle(-415,-270,2140,580), new cjs.Rectangle(-435,-270,2160,580), new cjs.Rectangle(-455,-270,2180,580), new cjs.Rectangle(-475,-270,2200,580), new cjs.Rectangle(-385,-270,2110,580), new cjs.Rectangle(-295,-270,2020,580), rect=new cjs.Rectangle(-235,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":199});

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
	this.frame_74 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(20).call(this.frame_74).wait(126));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(210,280,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,280,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,280,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-210,280,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-150,280,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-30,280,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-90,280,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_2_mc();
	this.instance_7.setTransform(150,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(200));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({x:-1600},0).wait(63).to({x:-150},15).to({x:-250},5).wait(75).to({x:-350},5).to({x:1000},15).wait(21));

	// location_7
	this.location_7 = new lib.location_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({x:-1300},0).wait(43).to({x:100},15).to({x:0},5).wait(75).to({x:-100},5).to({x:1300},15).wait(41));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1).to({x:-1000},0).wait(23).to({x:350},15).to({x:250},5).wait(75).to({x:150},5).to({x:1600},15).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-270,750,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1725,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1725,-270,2020,580), new cjs.Rectangle(-1725,-270,2110,580), new cjs.Rectangle(-1725,-270,2200,580), new cjs.Rectangle(-1725,-270,2180,580), new cjs.Rectangle(-1725,-270,2160,580), new cjs.Rectangle(-1725,-270,2140,580), new cjs.Rectangle(-1725,-270,2120,580), rect=new cjs.Rectangle(-1725,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1628.3,-270,2003.4,580), new cjs.Rectangle(-1531.6,-270,1906.7,580), new cjs.Rectangle(-1435,-270,1810,580), new cjs.Rectangle(-1338.3,-270,1713.4,580), new cjs.Rectangle(-1241.7,-270,1616.7,580), new cjs.Rectangle(-1145,-270,1520,580), new cjs.Rectangle(-1048.3,-270,1423.4,580), new cjs.Rectangle(-951.6,-270,1326.7,580), new cjs.Rectangle(-855,-270,1230,580), new cjs.Rectangle(-758.3,-270,1133.3,580), new cjs.Rectangle(-661.6,-270,1036.7,580), new cjs.Rectangle(-565,-270,940,580), new cjs.Rectangle(-468.3,-270,843.4,580), new cjs.Rectangle(-371.6,-270,746.7,580), new cjs.Rectangle(-275,-270,650,580), new cjs.Rectangle(-295,-270,670,580), new cjs.Rectangle(-315,-270,690,580), new cjs.Rectangle(-335,-270,710,580), new cjs.Rectangle(-355,-270,730,580), rect=new cjs.Rectangle(-375,-270,750,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375,-270,730,580), new cjs.Rectangle(-375,-270,710,580), new cjs.Rectangle(-375,-270,690,580), new cjs.Rectangle(-375,-270,670,580), new cjs.Rectangle(-375,-270,650,580), new cjs.Rectangle(-375,-270,746.7,580), new cjs.Rectangle(-375,-270,843.4,580), new cjs.Rectangle(-375,-270,940,580), new cjs.Rectangle(-375,-270,1036.7,580), new cjs.Rectangle(-375,-270,1133.3,580), new cjs.Rectangle(-375,-270,1230,580), new cjs.Rectangle(-375,-270,1326.7,580), new cjs.Rectangle(-375,-270,1423.4,580), new cjs.Rectangle(-375,-270,1520,580), new cjs.Rectangle(-375,-270,1616.7,580), new cjs.Rectangle(-375,-270,1713.4,580), new cjs.Rectangle(-375,-270,1810,580), new cjs.Rectangle(-375,-270,1906.7,580), new cjs.Rectangle(-375,-270,2003.4,580), rect=new cjs.Rectangle(-375,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395,-270,2120,580), new cjs.Rectangle(-415,-270,2140,580), new cjs.Rectangle(-435,-270,2160,580), new cjs.Rectangle(-455,-270,2180,580), new cjs.Rectangle(-475,-270,2200,580), new cjs.Rectangle(-385,-270,2110,580), new cjs.Rectangle(-295,-270,2020,580), rect=new cjs.Rectangle(-235,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":199});

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
	this.frame_74 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(20).call(this.frame_74).wait(126));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(210,280,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(150,280,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,280,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-210,280,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-150,280,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-30,280,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-90,280,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_2_mc();
	this.instance_7.setTransform(90,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(200));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({x:-1600},0).wait(63).to({x:-150},15).to({x:-250},5).wait(75).to({x:-350},5).to({x:1000},15).wait(21));

	// location_6
	this.location_6 = new lib.location_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({x:-1300},0).wait(43).to({x:100},15).to({x:0},5).wait(75).to({x:-100},5).to({x:1300},15).wait(41));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({x:-1000},0).wait(23).to({x:350},15).to({x:250},5).wait(75).to({x:150},5).to({x:1600},15).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-270,750,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1725,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1725,-270,2020,580), new cjs.Rectangle(-1725,-270,2110,580), new cjs.Rectangle(-1725,-270,2200,580), new cjs.Rectangle(-1725,-270,2180,580), new cjs.Rectangle(-1725,-270,2160,580), new cjs.Rectangle(-1725,-270,2140,580), new cjs.Rectangle(-1725,-270,2120,580), rect=new cjs.Rectangle(-1725,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1628.3,-270,2003.4,580), new cjs.Rectangle(-1531.6,-270,1906.7,580), new cjs.Rectangle(-1435,-270,1810,580), new cjs.Rectangle(-1338.3,-270,1713.4,580), new cjs.Rectangle(-1241.7,-270,1616.7,580), new cjs.Rectangle(-1145,-270,1520,580), new cjs.Rectangle(-1048.3,-270,1423.4,580), new cjs.Rectangle(-951.6,-270,1326.7,580), new cjs.Rectangle(-855,-270,1230,580), new cjs.Rectangle(-758.3,-270,1133.3,580), new cjs.Rectangle(-661.6,-270,1036.7,580), new cjs.Rectangle(-565,-270,940,580), new cjs.Rectangle(-468.3,-270,843.4,580), new cjs.Rectangle(-371.6,-270,746.7,580), new cjs.Rectangle(-275,-270,650,580), new cjs.Rectangle(-295,-270,670,580), new cjs.Rectangle(-315,-270,690,580), new cjs.Rectangle(-335,-270,710,580), new cjs.Rectangle(-355,-270,730,580), rect=new cjs.Rectangle(-375,-270,750,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375,-270,730,580), new cjs.Rectangle(-375,-270,710,580), new cjs.Rectangle(-375,-270,690,580), new cjs.Rectangle(-375,-270,670,580), new cjs.Rectangle(-375,-270,650,580), new cjs.Rectangle(-375,-270,746.7,580), new cjs.Rectangle(-375,-270,843.4,580), new cjs.Rectangle(-375,-270,940,580), new cjs.Rectangle(-375,-270,1036.7,580), new cjs.Rectangle(-375,-270,1133.3,580), new cjs.Rectangle(-375,-270,1230,580), new cjs.Rectangle(-375,-270,1326.7,580), new cjs.Rectangle(-375,-270,1423.4,580), new cjs.Rectangle(-375,-270,1520,580), new cjs.Rectangle(-375,-270,1616.7,580), new cjs.Rectangle(-375,-270,1713.4,580), new cjs.Rectangle(-375,-270,1810,580), new cjs.Rectangle(-375,-270,1906.7,580), new cjs.Rectangle(-375,-270,2003.4,580), rect=new cjs.Rectangle(-375,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395,-270,2120,580), new cjs.Rectangle(-415,-270,2140,580), new cjs.Rectangle(-435,-270,2160,580), new cjs.Rectangle(-455,-270,2180,580), new cjs.Rectangle(-475,-270,2200,580), new cjs.Rectangle(-385,-270,2110,580), new cjs.Rectangle(-295,-270,2020,580), rect=new cjs.Rectangle(-235,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":199});

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
	this.frame_74 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(20).call(this.frame_74).wait(126));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(210,280,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(150,280,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(90,280,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-210,280,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-150,280,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-30,280,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-90,280,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_2_mc();
	this.instance_7.setTransform(30,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(200));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({x:-1600},0).wait(63).to({x:-150},15).to({x:-250},5).wait(75).to({x:-350},5).to({x:1000},15).wait(21));

	// location_5
	this.location_5 = new lib.location_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({x:-1300},0).wait(43).to({x:100},15).to({x:0},5).wait(75).to({x:-100},5).to({x:1300},15).wait(41));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({x:-1000},0).wait(23).to({x:350},15).to({x:250},5).wait(75).to({x:150},5).to({x:1600},15).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-270,750,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1725,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1725,-270,2020,580), new cjs.Rectangle(-1725,-270,2110,580), new cjs.Rectangle(-1725,-270,2200,580), new cjs.Rectangle(-1725,-270,2180,580), new cjs.Rectangle(-1725,-270,2160,580), new cjs.Rectangle(-1725,-270,2140,580), new cjs.Rectangle(-1725,-270,2120,580), rect=new cjs.Rectangle(-1725,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1628.3,-270,2003.4,580), new cjs.Rectangle(-1531.6,-270,1906.7,580), new cjs.Rectangle(-1435,-270,1810,580), new cjs.Rectangle(-1338.3,-270,1713.4,580), new cjs.Rectangle(-1241.7,-270,1616.7,580), new cjs.Rectangle(-1145,-270,1520,580), new cjs.Rectangle(-1048.3,-270,1423.4,580), new cjs.Rectangle(-951.6,-270,1326.7,580), new cjs.Rectangle(-855,-270,1230,580), new cjs.Rectangle(-758.3,-270,1133.3,580), new cjs.Rectangle(-661.6,-270,1036.7,580), new cjs.Rectangle(-565,-270,940,580), new cjs.Rectangle(-468.3,-270,843.4,580), new cjs.Rectangle(-371.6,-270,746.7,580), new cjs.Rectangle(-275,-270,650,580), new cjs.Rectangle(-295,-270,670,580), new cjs.Rectangle(-315,-270,690,580), new cjs.Rectangle(-335,-270,710,580), new cjs.Rectangle(-355,-270,730,580), rect=new cjs.Rectangle(-375,-270,750,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375,-270,730,580), new cjs.Rectangle(-375,-270,710,580), new cjs.Rectangle(-375,-270,690,580), new cjs.Rectangle(-375,-270,670,580), new cjs.Rectangle(-375,-270,650,580), new cjs.Rectangle(-375,-270,746.7,580), new cjs.Rectangle(-375,-270,843.4,580), new cjs.Rectangle(-375,-270,940,580), new cjs.Rectangle(-375,-270,1036.7,580), new cjs.Rectangle(-375,-270,1133.3,580), new cjs.Rectangle(-375,-270,1230,580), new cjs.Rectangle(-375,-270,1326.7,580), new cjs.Rectangle(-375,-270,1423.4,580), new cjs.Rectangle(-375,-270,1520,580), new cjs.Rectangle(-375,-270,1616.7,580), new cjs.Rectangle(-375,-270,1713.4,580), new cjs.Rectangle(-375,-270,1810,580), new cjs.Rectangle(-375,-270,1906.7,580), new cjs.Rectangle(-375,-270,2003.4,580), rect=new cjs.Rectangle(-375,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395,-270,2120,580), new cjs.Rectangle(-415,-270,2140,580), new cjs.Rectangle(-435,-270,2160,580), new cjs.Rectangle(-455,-270,2180,580), new cjs.Rectangle(-475,-270,2200,580), new cjs.Rectangle(-385,-270,2110,580), new cjs.Rectangle(-295,-270,2020,580), rect=new cjs.Rectangle(-235,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":199});

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
	this.frame_74 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(20).call(this.frame_74).wait(126));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(210,280,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(150,280,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(90,280,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-210,280,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-150,280,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(30,280,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-90,280,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_2_mc();
	this.instance_7.setTransform(-30,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(200));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({x:-1600},0).wait(63).to({x:-150},15).to({x:-250},5).wait(75).to({x:-350},5).to({x:1000},15).wait(21));

	// location_4
	this.location_4 = new lib.location_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({x:-1300},0).wait(43).to({x:100},15).to({x:0},5).wait(75).to({x:-100},5).to({x:1300},15).wait(41));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({x:-1000},0).wait(23).to({x:350},15).to({x:250},5).wait(75).to({x:150},5).to({x:1600},15).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-270,750,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1725,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1725,-270,2020,580), new cjs.Rectangle(-1725,-270,2110,580), new cjs.Rectangle(-1725,-270,2200,580), new cjs.Rectangle(-1725,-270,2180,580), new cjs.Rectangle(-1725,-270,2160,580), new cjs.Rectangle(-1725,-270,2140,580), new cjs.Rectangle(-1725,-270,2120,580), rect=new cjs.Rectangle(-1725,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1628.3,-270,2003.4,580), new cjs.Rectangle(-1531.6,-270,1906.7,580), new cjs.Rectangle(-1435,-270,1810,580), new cjs.Rectangle(-1338.3,-270,1713.4,580), new cjs.Rectangle(-1241.7,-270,1616.7,580), new cjs.Rectangle(-1145,-270,1520,580), new cjs.Rectangle(-1048.3,-270,1423.4,580), new cjs.Rectangle(-951.6,-270,1326.7,580), new cjs.Rectangle(-855,-270,1230,580), new cjs.Rectangle(-758.3,-270,1133.3,580), new cjs.Rectangle(-661.6,-270,1036.7,580), new cjs.Rectangle(-565,-270,940,580), new cjs.Rectangle(-468.3,-270,843.4,580), new cjs.Rectangle(-371.6,-270,746.7,580), new cjs.Rectangle(-275,-270,650,580), new cjs.Rectangle(-295,-270,670,580), new cjs.Rectangle(-315,-270,690,580), new cjs.Rectangle(-335,-270,710,580), new cjs.Rectangle(-355,-270,730,580), rect=new cjs.Rectangle(-375,-270,750,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375,-270,730,580), new cjs.Rectangle(-375,-270,710,580), new cjs.Rectangle(-375,-270,690,580), new cjs.Rectangle(-375,-270,670,580), new cjs.Rectangle(-375,-270,650,580), new cjs.Rectangle(-375,-270,746.7,580), new cjs.Rectangle(-375,-270,843.4,580), new cjs.Rectangle(-375,-270,940,580), new cjs.Rectangle(-375,-270,1036.7,580), new cjs.Rectangle(-375,-270,1133.3,580), new cjs.Rectangle(-375,-270,1230,580), new cjs.Rectangle(-375,-270,1326.7,580), new cjs.Rectangle(-375,-270,1423.4,580), new cjs.Rectangle(-375,-270,1520,580), new cjs.Rectangle(-375,-270,1616.7,580), new cjs.Rectangle(-375,-270,1713.4,580), new cjs.Rectangle(-375,-270,1810,580), new cjs.Rectangle(-375,-270,1906.7,580), new cjs.Rectangle(-375,-270,2003.4,580), rect=new cjs.Rectangle(-375,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395,-270,2120,580), new cjs.Rectangle(-415,-270,2140,580), new cjs.Rectangle(-435,-270,2160,580), new cjs.Rectangle(-455,-270,2180,580), new cjs.Rectangle(-475,-270,2200,580), new cjs.Rectangle(-385,-270,2110,580), new cjs.Rectangle(-295,-270,2020,580), rect=new cjs.Rectangle(-235,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":199});

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
	this.frame_74 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(20).call(this.frame_74).wait(126));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(210,280,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(150,280,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(90,280,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-210,280,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-150,280,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(30,280,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-30,280,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_2_mc();
	this.instance_7.setTransform(-90,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(200));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({x:-1600},0).wait(63).to({x:-150},15).to({x:-250},5).wait(65).to({x:-350},5).to({x:1000},15).wait(31));

	// location_3
	this.location_3 = new lib.location_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({x:-1300},0).wait(43).to({x:100},15).to({x:0},5).wait(65).to({x:-100},5).to({x:1300},15).wait(51));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({x:-1000},0).wait(23).to({x:350},15).to({x:250},5).wait(65).to({x:150},5).to({x:1600},15).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-270,750,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1725,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1725,-270,2020,580), new cjs.Rectangle(-1725,-270,2110,580), new cjs.Rectangle(-1725,-270,2200,580), new cjs.Rectangle(-1725,-270,2180,580), new cjs.Rectangle(-1725,-270,2160,580), new cjs.Rectangle(-1725,-270,2140,580), new cjs.Rectangle(-1725,-270,2120,580), rect=new cjs.Rectangle(-1725,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1628.3,-270,2003.4,580), new cjs.Rectangle(-1531.6,-270,1906.7,580), new cjs.Rectangle(-1435,-270,1810,580), new cjs.Rectangle(-1338.3,-270,1713.4,580), new cjs.Rectangle(-1241.7,-270,1616.7,580), new cjs.Rectangle(-1145,-270,1520,580), new cjs.Rectangle(-1048.3,-270,1423.4,580), new cjs.Rectangle(-951.6,-270,1326.7,580), new cjs.Rectangle(-855,-270,1230,580), new cjs.Rectangle(-758.3,-270,1133.3,580), new cjs.Rectangle(-661.6,-270,1036.7,580), new cjs.Rectangle(-565,-270,940,580), new cjs.Rectangle(-468.3,-270,843.4,580), new cjs.Rectangle(-371.6,-270,746.7,580), new cjs.Rectangle(-275,-270,650,580), new cjs.Rectangle(-295,-270,670,580), new cjs.Rectangle(-315,-270,690,580), new cjs.Rectangle(-335,-270,710,580), new cjs.Rectangle(-355,-270,730,580), rect=new cjs.Rectangle(-375,-270,750,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375,-270,730,580), new cjs.Rectangle(-375,-270,710,580), new cjs.Rectangle(-375,-270,690,580), new cjs.Rectangle(-375,-270,670,580), new cjs.Rectangle(-375,-270,650,580), new cjs.Rectangle(-375,-270,746.7,580), new cjs.Rectangle(-375,-270,843.4,580), new cjs.Rectangle(-375,-270,940,580), new cjs.Rectangle(-375,-270,1036.7,580), new cjs.Rectangle(-375,-270,1133.3,580), new cjs.Rectangle(-375,-270,1230,580), new cjs.Rectangle(-375,-270,1326.7,580), new cjs.Rectangle(-375,-270,1423.4,580), new cjs.Rectangle(-375,-270,1520,580), new cjs.Rectangle(-375,-270,1616.7,580), new cjs.Rectangle(-375,-270,1713.4,580), new cjs.Rectangle(-375,-270,1810,580), new cjs.Rectangle(-375,-270,1906.7,580), new cjs.Rectangle(-375,-270,2003.4,580), rect=new cjs.Rectangle(-375,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395,-270,2120,580), new cjs.Rectangle(-415,-270,2140,580), new cjs.Rectangle(-435,-270,2160,580), new cjs.Rectangle(-455,-270,2180,580), new cjs.Rectangle(-475,-270,2200,580), new cjs.Rectangle(-385,-270,2110,580), new cjs.Rectangle(-295,-270,2020,580), rect=new cjs.Rectangle(-235,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":199});

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
	this.frame_74 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(20).call(this.frame_74).wait(126));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(210,280,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(150,280,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(90,280,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-210,280,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,280,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(30,280,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-30,280,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_2_mc();
	this.instance_7.setTransform(-150,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(200));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({x:-1600},0).wait(63).to({x:-150},15).to({x:-250},5).wait(65).to({x:-350},5).to({x:1000},15).wait(31));

	// location_2
	this.location_2 = new lib.location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({x:-1300},0).wait(43).to({x:100},15).to({x:0},5).wait(65).to({x:-100},5).to({x:1300},15).wait(51));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({x:-1000},0).wait(23).to({x:350},15).to({x:250},5).wait(65).to({x:150},5).to({x:1600},15).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-270,750,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1725,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1725,-270,2020,580), new cjs.Rectangle(-1725,-270,2110,580), new cjs.Rectangle(-1725,-270,2200,580), new cjs.Rectangle(-1725,-270,2180,580), new cjs.Rectangle(-1725,-270,2160,580), new cjs.Rectangle(-1725,-270,2140,580), new cjs.Rectangle(-1725,-270,2120,580), rect=new cjs.Rectangle(-1725,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1628.3,-270,2003.4,580), new cjs.Rectangle(-1531.6,-270,1906.7,580), new cjs.Rectangle(-1435,-270,1810,580), new cjs.Rectangle(-1338.3,-270,1713.4,580), new cjs.Rectangle(-1241.7,-270,1616.7,580), new cjs.Rectangle(-1145,-270,1520,580), new cjs.Rectangle(-1048.3,-270,1423.4,580), new cjs.Rectangle(-951.6,-270,1326.7,580), new cjs.Rectangle(-855,-270,1230,580), new cjs.Rectangle(-758.3,-270,1133.3,580), new cjs.Rectangle(-661.6,-270,1036.7,580), new cjs.Rectangle(-565,-270,940,580), new cjs.Rectangle(-468.3,-270,843.4,580), new cjs.Rectangle(-371.6,-270,746.7,580), new cjs.Rectangle(-275,-270,650,580), new cjs.Rectangle(-295,-270,670,580), new cjs.Rectangle(-315,-270,690,580), new cjs.Rectangle(-335,-270,710,580), new cjs.Rectangle(-355,-270,730,580), rect=new cjs.Rectangle(-375,-270,750,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375,-270,730,580), new cjs.Rectangle(-375,-270,710,580), new cjs.Rectangle(-375,-270,690,580), new cjs.Rectangle(-375,-270,670,580), new cjs.Rectangle(-375,-270,650,580), new cjs.Rectangle(-375,-270,746.7,580), new cjs.Rectangle(-375,-270,843.4,580), new cjs.Rectangle(-375,-270,940,580), new cjs.Rectangle(-375,-270,1036.7,580), new cjs.Rectangle(-375,-270,1133.3,580), new cjs.Rectangle(-375,-270,1230,580), new cjs.Rectangle(-375,-270,1326.7,580), new cjs.Rectangle(-375,-270,1423.4,580), new cjs.Rectangle(-375,-270,1520,580), new cjs.Rectangle(-375,-270,1616.7,580), new cjs.Rectangle(-375,-270,1713.4,580), new cjs.Rectangle(-375,-270,1810,580), new cjs.Rectangle(-375,-270,1906.7,580), new cjs.Rectangle(-375,-270,2003.4,580), rect=new cjs.Rectangle(-375,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395,-270,2120,580), new cjs.Rectangle(-415,-270,2140,580), new cjs.Rectangle(-435,-270,2160,580), new cjs.Rectangle(-455,-270,2180,580), new cjs.Rectangle(-475,-270,2200,580), new cjs.Rectangle(-385,-270,2110,580), new cjs.Rectangle(-295,-270,2020,580), rect=new cjs.Rectangle(-235,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":199});

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
	this.frame_74 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(20).call(this.frame_74).wait(126));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(210,280,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(150,280,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(90,280,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-150,280,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,280,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(30,280,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-30,280,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_2_mc();
	this.instance_7.setTransform(-210,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(200));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({x:-1600},0).wait(63).to({x:-150},15).to({x:-250},5).wait(65).to({x:-350},5).to({x:1000},15).wait(31));

	// location_2
	this.location_2 = new lib.location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({x:-1300},0).wait(43).to({x:100},15).to({x:0},5).wait(65).to({x:-100},5).to({x:1300},15).wait(51));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({x:-1000},0).wait(23).to({x:350},15).to({x:250},5).wait(65).to({x:150},5).to({x:1600},15).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-270,750,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1725,-270,1960,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1725,-270,2020,580), new cjs.Rectangle(-1725,-270,2110,580), new cjs.Rectangle(-1725,-270,2200,580), new cjs.Rectangle(-1725,-270,2180,580), new cjs.Rectangle(-1725,-270,2160,580), new cjs.Rectangle(-1725,-270,2140,580), new cjs.Rectangle(-1725,-270,2120,580), rect=new cjs.Rectangle(-1725,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1628.3,-270,2003.4,580), new cjs.Rectangle(-1531.6,-270,1906.7,580), new cjs.Rectangle(-1435,-270,1810,580), new cjs.Rectangle(-1338.3,-270,1713.4,580), new cjs.Rectangle(-1241.7,-270,1616.7,580), new cjs.Rectangle(-1145,-270,1520,580), new cjs.Rectangle(-1048.3,-270,1423.4,580), new cjs.Rectangle(-951.6,-270,1326.7,580), new cjs.Rectangle(-855,-270,1230,580), new cjs.Rectangle(-758.3,-270,1133.3,580), new cjs.Rectangle(-661.6,-270,1036.7,580), new cjs.Rectangle(-565,-270,940,580), new cjs.Rectangle(-468.3,-270,843.4,580), new cjs.Rectangle(-371.6,-270,746.7,580), new cjs.Rectangle(-275,-270,650,580), new cjs.Rectangle(-295,-270,670,580), new cjs.Rectangle(-315,-270,690,580), new cjs.Rectangle(-335,-270,710,580), new cjs.Rectangle(-355,-270,730,580), rect=new cjs.Rectangle(-375,-270,750,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375,-270,730,580), new cjs.Rectangle(-375,-270,710,580), new cjs.Rectangle(-375,-270,690,580), new cjs.Rectangle(-375,-270,670,580), new cjs.Rectangle(-375,-270,650,580), new cjs.Rectangle(-375,-270,746.7,580), new cjs.Rectangle(-375,-270,843.4,580), new cjs.Rectangle(-375,-270,940,580), new cjs.Rectangle(-375,-270,1036.7,580), new cjs.Rectangle(-375,-270,1133.3,580), new cjs.Rectangle(-375,-270,1230,580), new cjs.Rectangle(-375,-270,1326.7,580), new cjs.Rectangle(-375,-270,1423.4,580), new cjs.Rectangle(-375,-270,1520,580), new cjs.Rectangle(-375,-270,1616.7,580), new cjs.Rectangle(-375,-270,1713.4,580), new cjs.Rectangle(-375,-270,1810,580), new cjs.Rectangle(-375,-270,1906.7,580), new cjs.Rectangle(-375,-270,2003.4,580), rect=new cjs.Rectangle(-375,-270,2100,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395,-270,2120,580), new cjs.Rectangle(-415,-270,2140,580), new cjs.Rectangle(-435,-270,2160,580), new cjs.Rectangle(-455,-270,2180,580), new cjs.Rectangle(-475,-270,2200,580), new cjs.Rectangle(-385,-270,2110,580), new cjs.Rectangle(-295,-270,2020,580), rect=new cjs.Rectangle(-240,-270,1965,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.white_flash_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.white_flash_5_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).to({alpha:0.012},12).to({_off:true},1).wait(46));

	// animation
	this.instance_1 = new lib.white_flash_6_mc();
	this.instance_1.setTransform(93,175,0.167,0.167);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90,y:175.1},5).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,y:175,alpha:0.012},12).to({_off:true},1).wait(41));

	// animation
	this.instance_2 = new lib.white_flash_6_mc();
	this.instance_2.setTransform(-175,158,0.167,0.167);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90,y:158.1},5).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,y:158,alpha:0.012},12).to({_off:true},1).wait(41));

	// animation
	this.instance_3 = new lib.white_flash_6_mc();
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.602},0).to({scaleX:0.87,scaleY:0.87,rotation:90},5).to({scaleX:0.33,scaleY:0.33,rotation:180,alpha:0.012},12).to({_off:true},1).wait(41));

	// animation
	this.instance_4 = new lib.white_flash_2_mc();
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.801},0).to({scaleX:1,scaleY:1,alpha:0.012},17).to({_off:true},1).wait(41));

	// animation
	this.instance_5 = new lib.white_flash_4_mc();
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:1},0).to({alpha:0.012},17).to({_off:true},1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-150,350,350);
p.frameBounds = [rect, rect, new cjs.Rectangle(-212.7,-150,362.8,362.7), new cjs.Rectangle(-223.8,-150,373.8,373.8), new cjs.Rectangle(-230.8,-150,380.9,380.9), new cjs.Rectangle(-231.7,-150,381.7,381.7), new cjs.Rectangle(-225,-150,375,375), new cjs.Rectangle(-228.6,-150,378.6,378.6), new cjs.Rectangle(-231,-150,381,381), new cjs.Rectangle(-232,-150,382.1,382.1), new cjs.Rectangle(-231.8,-150,381.8,381.8), new cjs.Rectangle(-230.4,-150,380.4,380.4), new cjs.Rectangle(-227.9,-150,378,378), new cjs.Rectangle(-224.5,-150,374.6,374.6), new cjs.Rectangle(-220.5,-150,370.5,370.5), new cjs.Rectangle(-215.7,-150,365.7,365.8), new cjs.Rectangle(-210.7,-150,360.7,360.7), new cjs.Rectangle(-205.3,-150,355.4,355.4), new cjs.Rectangle(-200,-150,350,350), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
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
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.GravityBigExplosionMC = function(mode,startPosition,loop) {
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
		var _particleMaxSpeed_num = 8;
		var _particleFadeSpeed_num = 0.005;
		var _particleTotal_num = 36;
		var _particleRange_num = 500;
		var _gravity_num = 0.5;
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
				var particle_mc = new lib.ParticleBigGravityExplosionMC();
				body_mc.addChild(particle_mc);
				particle_mc.gotoAndStop(0);
				particle_mc.gotoAndStop(Math.floor(Math.random() * particle_mc.totalFrames));
				particle_mc.x = 0;
				particle_mc.y = 0;
				particle_mc.rotation = Math.random() * 360;
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
			/*
			
			*/
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
			if (target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
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
	this.body_mc = new lib.gravity_big_explosion_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
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


(lib.prev_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_5_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_4_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-33.7,90,67.5);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-33.7,90,67.5);
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


(lib.next_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_5_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.next_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_4_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-33.7,90,67.5);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-33.7,90,67.5);
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
	this.ja = new lib.language_ja_mc();
	this.ja.setTransform(600,1100);

	this.zh = new lib.language_zh_mc();
	this.zh.setTransform(200,950);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ar},{t:this.de},{t:this.fr},{t:this.hi},{t:this.id},{t:this.it},{t:this.zh},{t:this.ja}]}).wait(1));

	// bg
	this.instance = new lib.languages_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,1165);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5,location_7:6,location_8:7});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.frame_6_mc = new lib.frame_locations_6_mc();

	this.frame_7_mc = new lib.frame_locations_7_mc();

	this.frame_8_mc = new lib.frame_locations_8_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.frame_8_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-270,750,580);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.dressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(45,155);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-47,155);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-260,341,910);
p.frameBounds = [rect];


(lib.dressupPanel_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(45,160);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-45,160);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-250,290,900);
p.frameBounds = [rect];


(lib.dressupPanel_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(45,155);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-47,155);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-260,341,910);
p.frameBounds = [rect];


(lib.dressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_5_mc();
	this.next_mc.setTransform(140,20,1,1,20);

	this.prev_mc = new lib.prev_5_mc();
	this.prev_mc.setTransform(-140,20,1,1,-20);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197.7,-240,395.4,890);
p.frameBounds = [rect];


(lib.dressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(140,20,1,1,20);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-140,20,1,1,-20);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197.7,-245,395.4,895);
p.frameBounds = [rect];


(lib.dressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_5_mc();
	this.next_mc.setTransform(150,30,1,1,15);

	this.prev_mc = new lib.prev_5_mc();
	this.prev_mc.setTransform(-150,30,1,1,-15);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205.1,-210,410.2,860);
p.frameBounds = [rect];


(lib.dressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(140,0,1,1,15);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-140,0,1,1,-15);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195.1,-220,390.2,870);
p.frameBounds = [rect];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(45,160);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-45,160);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-650,290,900);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(45,155);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-47,155);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-650,341,910);
p.frameBounds = [rect];


(lib.decor_shadow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.gravity_big_explosion_comp = new lib.GravityBigExplosionMC();
	this.gravity_big_explosion_comp.setTransform(400,200);

	this.timeline.addTween(cjs.Tween.get(this.gravity_big_explosion_comp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(392,192,16,16);
p.frameBounds = [rect];


(lib.background_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(-287,303,0.5,0.5);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-144,245.1,0.5,0.5,0,0,0,0,0.1);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(392,18,0.75,0.75);
	this.instance_2.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.background_6_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(677.1,93.1,0.75,0.75,0,0,0,0.1,0.1);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-295,350,0.5,0.5);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(-126,231,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.background_5_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(-289,277);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-127,295);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(-128,195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.background_4_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(-250,260);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-253,391);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(-153,270);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(-153,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_3_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(-46,166);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(704,103);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(111,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.background_2_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(525,70);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-23,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.background_1_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":24,"end":59});

	// decor
	this.body_mc = new lib.white_flash_3_mc();
	this.body_mc.setTransform(427,224);
	this.body_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(29).to({_off:false},0).to({_off:true},25).wait(6));

	// animation
	this.instance = new lib.curtain_1_mc();
	this.instance.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},13).wait(25).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


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
	this.locations_mc.setTransform(400,290);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.199;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.quest_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":29,"end":149});

	// timeline functions:
	this.frame_4 = function() {
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
	this.frame_49 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(45).call(this.frame_49).wait(101));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,700,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(9).to({y:450},10).to({y:500},5).wait(15).to({y:450},5).to({y:700},10).wait(96));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_3_mc();
	this.dressupPanel_mc.setTransform(550,900);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({y:200},14).to({y:300},5).wait(30).to({y:250},5).to({y:900},15).wait(81));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(300,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(69).to({x:450},20).wait(61));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).wait(61));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({alpha:1},20).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,22.5,701,1527.5);
p.frameBounds = [rect, new cjs.Rectangle(20,22.5,701,1477.5), new cjs.Rectangle(20,22.5,701,1427.5), new cjs.Rectangle(-5.2,22.5,726.3,1377.5), new cjs.Rectangle(20,22.5,701,1327.5), new cjs.Rectangle(20,22.5,701,1277.5), new cjs.Rectangle(20,22.5,701,1227.5), new cjs.Rectangle(-5.2,22.5,726.3,1177.5), new cjs.Rectangle(20,22.5,701,1127.5), new cjs.Rectangle(20,22.5,701,1077.5), new cjs.Rectangle(20,22.5,701,1027.5), new cjs.Rectangle(20,22.5,701,977.5), new cjs.Rectangle(20,22.5,701,927.5), new cjs.Rectangle(20,-10,701,910), new cjs.Rectangle(20,-60,701,910), new cjs.Rectangle(20,-40,701,910), new cjs.Rectangle(20,-20,701,910), new cjs.Rectangle(20,0,701,910), new cjs.Rectangle(20,20,701,910), rect=new cjs.Rectangle(20,22.5,701,927.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-5.2,22.5,726.3,927.5), rect=new cjs.Rectangle(20,22.5,701,927.5), rect, rect, rect, new cjs.Rectangle(-5.2,22.5,726.3,927.5), rect=new cjs.Rectangle(20,22.5,701,927.5), rect, rect, new cjs.Rectangle(-5.2,22.5,726.3,927.5), rect=new cjs.Rectangle(20,22.5,701,927.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(20,22.5,701,917.5), new cjs.Rectangle(20,20,701,910), new cjs.Rectangle(20,10,701,910), new cjs.Rectangle(20,0,701,910), new cjs.Rectangle(20,-10,701,910), new cjs.Rectangle(20,22.5,701,920.9), new cjs.Rectangle(20,22.5,701,964.2), new cjs.Rectangle(-5.2,22.5,726.3,1007.5), new cjs.Rectangle(20,22.5,701,1050.9), new cjs.Rectangle(20,22.5,701,1094.2), new cjs.Rectangle(20,22.5,701,1137.5), new cjs.Rectangle(-5.2,22.5,726.3,1180.9), new cjs.Rectangle(20,22.5,701,1224.2), new cjs.Rectangle(20,22.5,701,1267.5), new cjs.Rectangle(20,22.5,701,1310.9), new cjs.Rectangle(-5.2,22.5,726.3,1354.2), new cjs.Rectangle(20,22.5,701,1397.5), new cjs.Rectangle(20,22.5,701,1440.9), new cjs.Rectangle(20,22.5,701,1484.2), rect=new cjs.Rectangle(-410,-10,1620,1560), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":199});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_44 = function() {
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
	this.frame_99 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(55).call(this.frame_99).wait(101));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(58).to({y:450},10).to({y:500},5).wait(15).to({y:460},5).to({y:700},10).wait(96));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_8_mc();
	this.dressupPanel_mc.setTransform(220,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(23).to({y:200},15).to({y:300},5).wait(55).to({y:250},5).to({y:900},15).wait(81));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(540,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1500},0).wait(43).to({x:440},15).to({x:540},5).wait(55).to({x:400},20).wait(61));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).wait(61));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},20).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,23.8,705,926.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(75,23.8,1541,1526.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(75,23.8,1541,1479.6), new cjs.Rectangle(75,23.8,1541,1432.9), new cjs.Rectangle(75,23.8,1541,1386.3), new cjs.Rectangle(75,23.8,1541,1339.6), new cjs.Rectangle(75,23.8,1541,1292.9), new cjs.Rectangle(75,23.8,1541,1246.3), new cjs.Rectangle(75,23.8,1541,1199.6), new cjs.Rectangle(75,23.8,1541,1152.9), new cjs.Rectangle(75,23.8,1541,1106.3), new cjs.Rectangle(75,23.8,1541,1059.6), new cjs.Rectangle(75,23.8,1541,1012.9), new cjs.Rectangle(75,23.8,1541,966.3), new cjs.Rectangle(75,23.8,1541,919.6), new cjs.Rectangle(75,-3.3,1541,900), new cjs.Rectangle(75,-50,1541,900), new cjs.Rectangle(75,-30,1541,900), new cjs.Rectangle(75,-10,1541,900), new cjs.Rectangle(75,10,1541,900), new cjs.Rectangle(75,23.8,1541,906.3), new cjs.Rectangle(75,23.8,1541,926.3), new cjs.Rectangle(75,23.8,1461.9,926.3), new cjs.Rectangle(75,23.8,1391.2,926.3), new cjs.Rectangle(75,23.8,1320.5,926.3), new cjs.Rectangle(75,23.8,1249.9,926.3), new cjs.Rectangle(75,23.8,1179.2,926.3), new cjs.Rectangle(75,23.8,1108.5,926.3), new cjs.Rectangle(75,23.8,1037.9,926.3), new cjs.Rectangle(75,23.8,967.2,926.3), new cjs.Rectangle(75,23.8,896.5,926.3), new cjs.Rectangle(75,23.8,825.9,926.3), new cjs.Rectangle(75,23.8,755.2,926.3), new cjs.Rectangle(75,23.8,730.3,926.3), rect=new cjs.Rectangle(75,23.8,705,926.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(75,23.8,730.3,926.3), rect=new cjs.Rectangle(75,23.8,705,926.3), rect, rect, rect, new cjs.Rectangle(75,23.8,730.3,926.3), rect=new cjs.Rectangle(75,23.8,705,926.3), rect, rect, new cjs.Rectangle(75,23.8,730.3,926.3), rect=new cjs.Rectangle(75,23.8,705,926.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(75,23.8,705,916.3), new cjs.Rectangle(75,23.8,705,906.3), new cjs.Rectangle(75,20,705,900), new cjs.Rectangle(75,10,705,900), new cjs.Rectangle(75,0,705,900), new cjs.Rectangle(75,23.8,705,919.6), new cjs.Rectangle(75,23.8,705,962.9), new cjs.Rectangle(75,23.8,730.3,1006.3), new cjs.Rectangle(75,23.8,705,1049.6), new cjs.Rectangle(75,23.8,705,1092.9), new cjs.Rectangle(75,23.8,705,1136.3), new cjs.Rectangle(75,23.8,730.3,1179.6), new cjs.Rectangle(75,23.8,705,1222.9), new cjs.Rectangle(75,23.8,705,1266.3), new cjs.Rectangle(75,23.8,705,1309.6), new cjs.Rectangle(75,23.8,730.3,1352.9), new cjs.Rectangle(75,23.8,705,1396.3), new cjs.Rectangle(75,23.8,705,1439.6), new cjs.Rectangle(75,23.8,705,1482.9), rect=new cjs.Rectangle(-410,-10,1620,1560), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":199});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_44 = function() {
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
	this.frame_99 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(55).call(this.frame_99).wait(101));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(58).to({y:450},10).to({y:500},5).wait(15).to({y:460},5).to({y:700},10).wait(96));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_7_mc();
	this.dressupPanel_mc.setTransform(200,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(23).to({y:200},15).to({y:300},5).wait(55).to({y:250},5).to({y:900},15).wait(81));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(580,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1500},0).wait(38).to({x:480},15).to({x:580},5).wait(60).to({x:450},20).wait(61));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).wait(61));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},20).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,22.5,750,927.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(30,22.5,1666,1527.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,22.5,1666,1480.9), new cjs.Rectangle(30,22.5,1666,1434.2), new cjs.Rectangle(30,22.5,1666,1387.5), new cjs.Rectangle(30,22.5,1666,1340.9), new cjs.Rectangle(30,22.5,1666,1294.2), new cjs.Rectangle(30,22.5,1666,1247.5), new cjs.Rectangle(30,22.5,1666,1200.9), new cjs.Rectangle(30,22.5,1666,1154.2), new cjs.Rectangle(30,22.5,1666,1107.5), new cjs.Rectangle(30,22.5,1666,1060.9), new cjs.Rectangle(30,22.5,1666,1014.2), new cjs.Rectangle(30,22.5,1666,967.5), new cjs.Rectangle(30,22.5,1666,920.9), new cjs.Rectangle(30,-13.3,1666,910), new cjs.Rectangle(30,-60,1666,910), new cjs.Rectangle(30,-40,1598,910), new cjs.Rectangle(30,-20,1530,910), new cjs.Rectangle(30,0,1462,910), new cjs.Rectangle(30,20,1394,910), new cjs.Rectangle(30,22.5,1326,927.5), new cjs.Rectangle(30,22.5,1258,927.5), new cjs.Rectangle(30,22.5,1190,927.5), new cjs.Rectangle(30,22.5,1122,927.5), new cjs.Rectangle(30,22.5,1054,927.5), new cjs.Rectangle(30,22.5,986,927.5), new cjs.Rectangle(30,22.5,918,927.5), new cjs.Rectangle(30,22.5,850,927.5), new cjs.Rectangle(30,22.5,782,927.5), rect=new cjs.Rectangle(30,22.5,750,927.5), rect, rect, new cjs.Rectangle(30,22.5,775.3,927.5), rect=new cjs.Rectangle(30,22.5,750,927.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,22.5,775.3,927.5), rect=new cjs.Rectangle(30,22.5,750,927.5), rect, rect, rect, new cjs.Rectangle(30,22.5,775.3,927.5), rect=new cjs.Rectangle(30,22.5,750,927.5), rect, rect, new cjs.Rectangle(30,22.5,775.3,927.5), rect=new cjs.Rectangle(30,22.5,750,927.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,22.5,750,917.5), new cjs.Rectangle(30,20,750,910), new cjs.Rectangle(30,10,750,910), new cjs.Rectangle(30,0,750,910), new cjs.Rectangle(30,-10,750,910), new cjs.Rectangle(30,22.5,750,920.9), new cjs.Rectangle(30,22.5,750,964.2), new cjs.Rectangle(30,22.5,775.3,1007.5), new cjs.Rectangle(30,22.5,750,1050.9), new cjs.Rectangle(30,22.5,750,1094.2), new cjs.Rectangle(30,22.5,750,1137.5), new cjs.Rectangle(30,22.5,775.3,1180.9), new cjs.Rectangle(30,22.5,750,1224.2), new cjs.Rectangle(30,22.5,750,1267.5), new cjs.Rectangle(30,22.5,750,1310.9), new cjs.Rectangle(30,22.5,775.3,1354.2), new cjs.Rectangle(30,22.5,750,1397.5), new cjs.Rectangle(30,22.5,750,1440.9), new cjs.Rectangle(30,22.5,750,1484.2), rect=new cjs.Rectangle(-410,-10,1620,1560), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":239});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.05);
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
	this.frame_134 = function() {
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
	this.frame_219 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(10).call(this.frame_59).wait(75).call(this.frame_134).wait(85).call(this.frame_219).wait(21));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,700,0.526,0.526,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:false},0).to({regX:0,scaleX:0.84,scaleY:0.84,x:700,y:450},10).to({y:500},5).wait(6));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(240,510,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(78).to({y:460},10).to({y:510},5).wait(15).to({y:470},5).to({y:700},10).wait(116));

	// decor
	this.instance_1 = new lib.wardrobe_2_6_mc();
	this.instance_1.setTransform(240,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-700},0).wait(23).to({x:340},15).to({x:240},5).wait(90).to({x:340},5).to({x:-700},15).wait(86));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_6_mc();
	this.dressupPanel_mc.setTransform(240,400);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(23).to({alpha:0.012},0).to({x:340},15).to({scaleX:0.76,scaleY:0.76,x:240,y:500},5).to({scaleX:1,scaleY:1,y:350,alpha:1},10).to({y:400},5).wait(60).to({y:360},5).to({scaleX:0.76,scaleY:0.76,y:500,alpha:0.012},10).to({x:340},5).to({x:-700},15).wait(86));

	// decor
	this.instance_2 = new lib.wardrobe_1_6_mc();
	this.instance_2.setTransform(240,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-700},0).wait(23).to({x:340},15).to({x:240},5).wait(90).to({x:340},5).to({x:-700},15).wait(86));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(590,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1500},0).wait(58).to({x:490},15).to({x:590},5).wait(75).to({x:400},20).wait(66));

	// decor
	this.instance_3 = new lib.decor_shadow_1_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(174).to({_off:false},0).wait(66));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(154).to({_off:false},0).to({alpha:1},20).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,23.8,676,1026.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-910,23.8,2526,1026.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-840.6,23.8,2456.6,1026.3), new cjs.Rectangle(-771.3,23.8,2387.3,1026.3), new cjs.Rectangle(-702,23.8,2318,1026.3), new cjs.Rectangle(-632.7,23.8,2248.7,1026.3), new cjs.Rectangle(-563.3,23.8,2179.3,1026.3), new cjs.Rectangle(-494,23.8,2110,1026.3), new cjs.Rectangle(-424.7,23.8,2040.7,1026.3), new cjs.Rectangle(-355.3,23.8,1971.3,1026.3), new cjs.Rectangle(-286,23.8,1902,1026.3), new cjs.Rectangle(-216.6,23.8,1832.6,1026.3), new cjs.Rectangle(-147.3,23.8,1763.3,1026.3), new cjs.Rectangle(-78,23.8,1694,1026.3), new cjs.Rectangle(-8.6,23.8,1624.6,1026.3), new cjs.Rectangle(60.7,23.8,1555.3,1026.3), new cjs.Rectangle(130,23.8,1486,1026.3), new cjs.Rectangle(110,23.8,1506,1014.9), new cjs.Rectangle(90,23.8,1526,1003.5), new cjs.Rectangle(70,23.8,1546,992.2), new cjs.Rectangle(50,23.8,1566,980.8), new cjs.Rectangle(30,23.8,1586,969.4), new cjs.Rectangle(30,23.8,1586,970.1), new cjs.Rectangle(30,23.8,1586,970.8), new cjs.Rectangle(30,23.8,1586,971.4), new cjs.Rectangle(30,23.8,1586,972.1), new cjs.Rectangle(30,23.8,1586,972.8), new cjs.Rectangle(30,23.8,1586,973.4), new cjs.Rectangle(30,23.8,1586,974.2), new cjs.Rectangle(30,23.8,1586,974.8), new cjs.Rectangle(30,23.8,1586,975.5), new cjs.Rectangle(30,23.8,1586,976.3), new cjs.Rectangle(30,23.8,1586,986.3), new cjs.Rectangle(30,23.8,1586,996.3), new cjs.Rectangle(30,23.8,1586,1006.3), new cjs.Rectangle(30,23.8,1586,1016.3), new cjs.Rectangle(30,23.8,1586,1026.3), new cjs.Rectangle(30,23.8,1510.2,1026.3), new cjs.Rectangle(30,23.8,1442.9,1026.3), new cjs.Rectangle(30,23.8,1375.5,1026.3), new cjs.Rectangle(30,23.8,1308.2,1026.3), new cjs.Rectangle(30,23.8,1240.9,1026.3), new cjs.Rectangle(30,23.8,1173.5,1026.3), new cjs.Rectangle(30,23.8,1106.2,1026.3), new cjs.Rectangle(30,23.8,1038.8,1026.3), new cjs.Rectangle(30,23.8,971.5,1026.3), new cjs.Rectangle(30,23.8,904.2,1026.3), new cjs.Rectangle(30,23.8,836.9,1026.3), new cjs.Rectangle(30,23.8,769.5,1026.3), new cjs.Rectangle(30,23.8,702.2,1026.3), new cjs.Rectangle(30,23.8,634.9,1026.3), new cjs.Rectangle(30,23.8,576,1026.3), new cjs.Rectangle(30,23.8,587.5,1026.3), new cjs.Rectangle(30,23.8,607.5,1026.3), new cjs.Rectangle(30,23.8,627.5,1026.3), new cjs.Rectangle(30,23.8,647.5,1026.3), rect=new cjs.Rectangle(30,23.8,676,1026.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,23.8,676,1018.3), new cjs.Rectangle(30,23.8,676,1010.3), new cjs.Rectangle(30,23.8,676,1002.3), new cjs.Rectangle(30,23.8,676,994.3), new cjs.Rectangle(30,23.8,676,986.3), new cjs.Rectangle(30,23.8,676,984.6), new cjs.Rectangle(30,23.8,676,982.9), new cjs.Rectangle(30,23.8,676,981.2), new cjs.Rectangle(30,23.8,676,979.5), new cjs.Rectangle(30,23.8,676,977.8), new cjs.Rectangle(30,23.8,676,976.2), new cjs.Rectangle(30,23.8,676,974.5), new cjs.Rectangle(30,23.8,676,972.8), new cjs.Rectangle(30,23.8,676,971.2), new cjs.Rectangle(30,23.8,676,969.4), new cjs.Rectangle(50,23.8,656,969.4), new cjs.Rectangle(70,23.8,636,969.4), new cjs.Rectangle(90,23.8,616,969.4), new cjs.Rectangle(110,23.8,596,969.4), new cjs.Rectangle(130,23.8,576,969.4), new cjs.Rectangle(60.7,23.8,645.3,969.4), new cjs.Rectangle(-8.6,23.8,714.6,969.4), new cjs.Rectangle(-78,23.8,784,969.4), new cjs.Rectangle(-147.3,23.8,853.3,969.4), new cjs.Rectangle(-216.6,23.8,922.6,969.4), new cjs.Rectangle(-286,23.8,992,969.4), new cjs.Rectangle(-355.3,23.8,1061.3,969.4), new cjs.Rectangle(-424.7,23.8,1130.7,969.4), new cjs.Rectangle(-494,23.8,1200,969.4), new cjs.Rectangle(-563.3,23.8,1269.3,969.4), new cjs.Rectangle(-632.6,23.8,1338.6,969.4), new cjs.Rectangle(-702,23.8,1408,969.4), new cjs.Rectangle(-771.3,23.8,1477.3,969.4), new cjs.Rectangle(-840.6,23.8,1546.6,969.4), rect=new cjs.Rectangle(-910,-10,2120,1003.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":239});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.05);
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
	this.frame_139 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(10).call(this.frame_59).wait(80).call(this.frame_139).wait(101));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(240,520,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(78).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:240.1},0).to({regX:0,scaleX:0.79,scaleY:0.79,x:240,y:470},10).to({y:520},5).wait(15).to({y:480},5).to({y:700},10).wait(116));

	// decor
	this.instance = new lib.wardrobe_2_5_mc();
	this.instance.setTransform(240,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-700},0).wait(23).to({x:340},15).to({x:240},5).wait(95).to({x:340},5).to({x:-700},15).wait(81));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_5_mc();
	this.dressupPanel_mc.setTransform(240,400);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(23).to({alpha:0.012},0).to({x:340},15).to({scaleX:0.76,scaleY:0.76,x:240,y:500},5).to({scaleX:1,scaleY:1,y:350,alpha:1},10).to({y:400},5).wait(60).to({y:350},5).to({scaleX:0.76,scaleY:0.76,y:500,alpha:0.012},15).to({x:340},5).to({x:-700},15).wait(81));

	// decor
	this.instance_1 = new lib.wardrobe_1_5_mc();
	this.instance_1.setTransform(240,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-700},0).wait(23).to({x:340},15).to({x:240},5).wait(95).to({x:340},5).to({x:-700},15).wait(81));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(620,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1500},0).wait(58).to({x:520},15).to({x:620},5).wait(80).to({x:450},20).wait(61));

	// decor
	this.instance_2 = new lib.decor_shadow_1_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).wait(61));

	// shadow
	this.instance_3 = new lib.shadow_dressup_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).to({alpha:1},20).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,22.5,786,1027.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-910,22.5,2606,1027.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-840.6,22.5,2536.6,1027.5), new cjs.Rectangle(-771.3,22.5,2467.3,1027.5), new cjs.Rectangle(-702,22.5,2398,1027.5), new cjs.Rectangle(-632.7,22.5,2328.7,1027.5), new cjs.Rectangle(-563.3,22.5,2259.3,1027.5), new cjs.Rectangle(-494,22.5,2190,1027.5), new cjs.Rectangle(-424.7,22.5,2120.7,1027.5), new cjs.Rectangle(-355.3,22.5,2051.3,1027.5), new cjs.Rectangle(-286,22.5,1982,1027.5), new cjs.Rectangle(-216.6,22.5,1912.6,1027.5), new cjs.Rectangle(-147.3,22.5,1843.3,1027.5), new cjs.Rectangle(-78,22.5,1774,1027.5), new cjs.Rectangle(-8.6,22.5,1704.6,1027.5), new cjs.Rectangle(60.7,22.5,1635.3,1027.5), new cjs.Rectangle(130,22.5,1566,1027.5), new cjs.Rectangle(110,22.5,1586,1016.1), new cjs.Rectangle(90,22.5,1606,1004.7), new cjs.Rectangle(70,22.5,1626,993.4), new cjs.Rectangle(50,22.5,1646,982.1), new cjs.Rectangle(30,22.5,1666,970.7), new cjs.Rectangle(30,22.5,1666,971.3), new cjs.Rectangle(30,22.5,1666,972), new cjs.Rectangle(30,22.5,1666,972.7), new cjs.Rectangle(30,22.5,1666,973.4), new cjs.Rectangle(30,22.5,1666,974.1), new cjs.Rectangle(30,22.5,1666,974.7), new cjs.Rectangle(30,22.5,1666,975.4), new cjs.Rectangle(30,22.5,1666,976.1), new cjs.Rectangle(30,22.5,1666,976.8), new cjs.Rectangle(30,22.5,1666,977.5), new cjs.Rectangle(30,22.5,1666,987.5), new cjs.Rectangle(30,22.5,1666,997.5), new cjs.Rectangle(30,22.5,1666,1007.5), new cjs.Rectangle(30,22.5,1666,1017.5), new cjs.Rectangle(30,22.5,1666,1027.5), new cjs.Rectangle(30,22.5,1600.6,1027.5), new cjs.Rectangle(30,22.5,1535.3,1027.5), new cjs.Rectangle(30,22.5,1470,1027.5), new cjs.Rectangle(30,22.5,1404.7,1027.5), new cjs.Rectangle(30,22.5,1339.3,1027.5), new cjs.Rectangle(30,22.5,1274,1027.5), new cjs.Rectangle(30,22.5,1208.7,1027.5), new cjs.Rectangle(30,22.5,1143.3,1027.5), new cjs.Rectangle(30,22.5,1078,1027.5), new cjs.Rectangle(30,22.5,1012.6,1027.5), new cjs.Rectangle(30,22.5,947.3,1027.5), new cjs.Rectangle(30,22.5,882,1027.5), new cjs.Rectangle(30,22.5,816.6,1027.5), new cjs.Rectangle(30,22.5,751.3,1027.5), new cjs.Rectangle(30,22.5,686,1027.5), new cjs.Rectangle(30,22.5,706,1027.5), new cjs.Rectangle(30,22.5,726,1027.5), new cjs.Rectangle(30,22.5,746,1027.5), new cjs.Rectangle(30,22.5,766,1027.5), rect=new cjs.Rectangle(30,22.5,786,1027.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,22.5,786,1017.5), new cjs.Rectangle(30,22.5,786,1007.5), new cjs.Rectangle(30,22.5,786,997.5), new cjs.Rectangle(30,22.5,786,987.5), new cjs.Rectangle(30,22.5,786,977.5), new cjs.Rectangle(30,22.5,786,977.1), new cjs.Rectangle(30,22.5,786,976.6), new cjs.Rectangle(30,22.5,786,976.1), new cjs.Rectangle(30,22.5,786,975.7), new cjs.Rectangle(30,22.5,786,975.2), new cjs.Rectangle(30,22.5,786,974.7), new cjs.Rectangle(30,22.5,786,974.3), new cjs.Rectangle(30,22.5,786,973.9), new cjs.Rectangle(30,22.5,786,973.4), new cjs.Rectangle(30,22.5,786,973), new cjs.Rectangle(30,22.5,786,972.5), new cjs.Rectangle(30,22.5,786,972.1), new cjs.Rectangle(30,22.5,786,971.6), new cjs.Rectangle(30,22.5,786,971.2), new cjs.Rectangle(30,22.5,786,970.7), new cjs.Rectangle(50,22.5,766,970.7), new cjs.Rectangle(70,22.5,746,970.7), new cjs.Rectangle(90,22.5,726,970.7), new cjs.Rectangle(110,22.5,706,970.7), new cjs.Rectangle(130,22.5,686,970.7), new cjs.Rectangle(60.7,22.5,755.3,970.7), new cjs.Rectangle(-8.6,22.5,824.6,970.7), new cjs.Rectangle(-78,22.5,894,970.7), new cjs.Rectangle(-147.3,22.5,963.3,970.7), new cjs.Rectangle(-216.6,22.5,1032.6,970.7), new cjs.Rectangle(-286,22.5,1102,970.7), new cjs.Rectangle(-355.3,22.5,1171.3,970.7), new cjs.Rectangle(-424.7,22.5,1240.7,970.7), new cjs.Rectangle(-494,22.5,1310,970.7), new cjs.Rectangle(-563.3,22.5,1379.3,970.7), new cjs.Rectangle(-632.6,22.5,1448.6,970.7), new cjs.Rectangle(-702,22.5,1518,970.7), new cjs.Rectangle(-771.3,22.5,1587.3,970.7), new cjs.Rectangle(-840.6,22.5,1656.6,970.7), rect=new cjs.Rectangle(-910,-10,2120,1003.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":239});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.05);
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
	this.frame_134 = function() {
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
	this.frame_219 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(10).call(this.frame_59).wait(75).call(this.frame_134).wait(85).call(this.frame_219).wait(21));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,700,0.526,0.526,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:false},0).to({regX:0,scaleX:0.84,scaleY:0.84,x:700,y:450},10).to({y:500},5).wait(6));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(78).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:100.1},0).to({regX:0,scaleX:0.84,scaleY:0.84,x:100,y:450},10).to({y:500},5).wait(15).to({y:460},5).to({y:700},10).wait(116));

	// decor
	this.instance_1 = new lib.wardrobe_2_4_mc();
	this.instance_1.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:1500},0).wait(23).to({x:440},15).to({x:540},5).wait(90).to({x:390},5).to({x:1500},15).wait(86));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_4_mc();
	this.dressupPanel_mc.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(23).to({alpha:0.012},0).to({x:440},15).to({scaleX:0.73,scaleY:0.73,x:540,y:500},5).to({scaleX:1,scaleY:1,y:350,alpha:1},10).to({y:400},5).wait(60).to({y:360},5).to({scaleX:0.73,scaleY:0.73,y:500,alpha:0.012},10).to({x:390},5).to({x:1500},15).wait(86));

	// decor
	this.instance_2 = new lib.wardrobe_1_4_mc();
	this.instance_2.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:1500},0).wait(23).to({x:440},15).to({x:540},5).wait(90).to({x:390},5).to({x:1500},15).wait(86));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(200,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:-700},0).wait(58).to({x:300},15).to({x:200},5).wait(75).to({x:400},20).wait(66));

	// decor
	this.instance_3 = new lib.decor_shadow_1_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(174).to({_off:false},0).wait(66));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(154).to({_off:false},0).to({alpha:1},20).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,23.8,730,1026.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-809,23.8,2519.1,1026.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-809,23.8,2448.4,1026.3), new cjs.Rectangle(-809,23.8,2377.7,1026.3), new cjs.Rectangle(-809,23.8,2307.1,1026.3), new cjs.Rectangle(-809,23.8,2236.4,1026.3), new cjs.Rectangle(-809,23.8,2165.7,1026.3), new cjs.Rectangle(-809,23.8,2095.1,1026.3), new cjs.Rectangle(-809,23.8,2024.4,1026.3), new cjs.Rectangle(-809,23.8,1953.7,1026.3), new cjs.Rectangle(-809,23.8,1883.1,1026.3), new cjs.Rectangle(-809,23.8,1812.4,1026.3), new cjs.Rectangle(-809,23.8,1741.7,1026.3), new cjs.Rectangle(-809,23.8,1671.1,1026.3), new cjs.Rectangle(-809,23.8,1600.4,1026.3), new cjs.Rectangle(-809,23.8,1529.7,1026.3), new cjs.Rectangle(-809,23.8,1459.1,1026.3), new cjs.Rectangle(-809,23.8,1479.1,1011.3), new cjs.Rectangle(-809,23.8,1499.1,996.4), new cjs.Rectangle(-809,23.8,1519.1,981.5), new cjs.Rectangle(-809,23.8,1539.1,966.6), new cjs.Rectangle(-809,23.8,1559.1,951.6), new cjs.Rectangle(-809,23.8,1559.1,954.1), new cjs.Rectangle(-809,23.8,1559.1,956.5), new cjs.Rectangle(-809,23.8,1559.1,959), new cjs.Rectangle(-809,23.8,1559.1,961.5), new cjs.Rectangle(-809,23.8,1559.1,963.9), new cjs.Rectangle(-809,23.8,1559.1,966.3), new cjs.Rectangle(-809,23.8,1559.1,968.8), new cjs.Rectangle(-809,23.8,1559.1,971.2), new cjs.Rectangle(-809,23.8,1559.1,973.7), new cjs.Rectangle(-809,23.8,1559.1,976.3), new cjs.Rectangle(-809,23.8,1559.1,986.3), new cjs.Rectangle(-809,23.8,1559.1,996.3), new cjs.Rectangle(-809,23.8,1559.1,1006.3), new cjs.Rectangle(-809,23.8,1559.1,1016.3), new cjs.Rectangle(-809,23.8,1559.1,1026.3), new cjs.Rectangle(-742.4,23.8,1492.4,1026.3), new cjs.Rectangle(-675.7,23.8,1425.7,1026.3), new cjs.Rectangle(-609,23.8,1359.1,1026.3), new cjs.Rectangle(-542.4,23.8,1292.4,1026.3), new cjs.Rectangle(-475.7,23.8,1225.7,1026.3), new cjs.Rectangle(-409,23.8,1159.1,1026.3), new cjs.Rectangle(-342.4,23.8,1092.4,1026.3), new cjs.Rectangle(-275.7,23.8,1025.7,1026.3), new cjs.Rectangle(-209,23.8,959.1,1026.3), new cjs.Rectangle(-142.4,23.8,892.4,1026.3), new cjs.Rectangle(-75.7,23.8,825.7,1026.3), new cjs.Rectangle(-9,23.8,759.1,1026.3), new cjs.Rectangle(-5.2,23.8,755.3,1026.3), rect=new cjs.Rectangle(20,23.8,730,1026.3), rect, rect, new cjs.Rectangle(-5.2,23.8,755.3,1026.3), rect=new cjs.Rectangle(20,23.8,730,1026.3), rect, new cjs.Rectangle(50,23.8,700,1026.3), new cjs.Rectangle(47,23.8,703.1,1026.3), new cjs.Rectangle(44,23.8,706.1,1026.3), new cjs.Rectangle(41,23.8,709.1,1026.3), new cjs.Rectangle(38,23.8,712.1,1026.3), new cjs.Rectangle(35,23.8,715,1026.3), new cjs.Rectangle(32,23.8,718,1026.3), new cjs.Rectangle(29,23.8,721.1,1026.3), new cjs.Rectangle(26,23.8,724,1026.3), new cjs.Rectangle(23,23.8,727.1,1026.3), rect=new cjs.Rectangle(20,23.8,730,1026.3), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-5.2,23.8,755.3,1026.3), rect=new cjs.Rectangle(20,23.8,730,1026.3), rect, rect, rect, new cjs.Rectangle(-5.2,23.8,755.3,1026.3), rect=new cjs.Rectangle(20,23.8,730,1026.3), rect, rect, new cjs.Rectangle(-5.2,23.8,755.3,1026.3), rect=new cjs.Rectangle(20,23.8,730,1026.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(20,23.8,730,1018.3), new cjs.Rectangle(20,23.8,730,1010.3), new cjs.Rectangle(20,23.8,730,1002.3), new cjs.Rectangle(20,23.8,730,994.3), new cjs.Rectangle(20,23.8,730,986.3), new cjs.Rectangle(20,23.8,730,982.8), new cjs.Rectangle(20,23.8,730,979.3), new cjs.Rectangle(-5.2,23.8,755.3,975.8), new cjs.Rectangle(20,23.8,730,972.4), new cjs.Rectangle(20,23.8,730,969), new cjs.Rectangle(20,23.8,730,965.5), new cjs.Rectangle(-5.2,23.8,755.3,962.1), new cjs.Rectangle(20,23.8,730,958.6), new cjs.Rectangle(20,23.8,730,955.1), new cjs.Rectangle(20,23.8,730,951.6), new cjs.Rectangle(-5.2,23.8,725.3,951.5), new cjs.Rectangle(20,23.8,670,951.5), new cjs.Rectangle(20,23.8,640,951.5), new cjs.Rectangle(20,23.8,610,951.5), new cjs.Rectangle(-5.2,23.8,605.3,951.6), new cjs.Rectangle(20,23.8,654,951.5), new cjs.Rectangle(20,23.8,728,951.5), new cjs.Rectangle(20,23.8,802,951.5), new cjs.Rectangle(-5.2,23.8,901.3,951.5), new cjs.Rectangle(20,23.8,950,951.5), new cjs.Rectangle(20,23.8,1024,951.5), new cjs.Rectangle(20,23.8,1098,951.5), new cjs.Rectangle(-5.2,23.8,1197.3,951.5), new cjs.Rectangle(20,23.8,1246,951.5), new cjs.Rectangle(20,23.8,1320,951.5), new cjs.Rectangle(20,23.8,1394,951.5), new cjs.Rectangle(-5.2,23.8,1493.3,951.5), new cjs.Rectangle(20,23.8,1542,951.5), new cjs.Rectangle(20,23.8,1616,951.5), rect=new cjs.Rectangle(-410,-10,2120,985.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":159});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.05);
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
	this.frame_124 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(10).call(this.frame_59).wait(65).call(this.frame_124).wait(36));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:100.1},0).to({regX:0,scaleX:0.84,scaleY:0.84,x:100,y:450},10).to({y:500},5).wait(15).to({y:460},5).to({y:700},10).wait(46));

	// decor
	this.instance = new lib.wardrobe_2_3_mc();
	this.instance.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1500},0).wait(23).to({x:440},15).to({x:540},5).wait(80).to({x:500},5).to({x:1500},15).wait(16));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_3_mc();
	this.dressupPanel_mc.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500,alpha:0.012},0).wait(23).to({x:440},15).to({scaleX:0.77,scaleY:0.77,x:540,y:450},5).to({scaleX:1,scaleY:1,y:350,alpha:1},10).to({y:400},5).wait(50).to({y:350},5).to({scaleX:0.77,scaleY:0.77,y:450,alpha:0.012},10).to({x:500},5).to({x:1500},15).wait(16));

	// decor
	this.instance_1 = new lib.wardrobe_1_3_mc();
	this.instance_1.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:1500},0).wait(23).to({x:440},15).to({x:540},5).wait(80).to({x:490},5).to({x:1500},15).wait(16));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(300,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-700},0).wait(58).to({x:400},15).to({x:300},5).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,22.5,730,1027.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-893,22.5,2603,1027.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-893,22.5,2532.4,1027.5), new cjs.Rectangle(-893,22.5,2461.7,1027.5), new cjs.Rectangle(-893,22.5,2391,1027.5), new cjs.Rectangle(-893,22.5,2320.4,1027.5), new cjs.Rectangle(-893,22.5,2249.7,1027.5), new cjs.Rectangle(-893,22.5,2179,1027.5), new cjs.Rectangle(-893,22.5,2108.4,1027.5), new cjs.Rectangle(-893,22.5,2037.7,1027.5), new cjs.Rectangle(-893,22.5,1967,1027.5), new cjs.Rectangle(-893,22.5,1896.4,1027.5), new cjs.Rectangle(-893,22.5,1825.7,1027.5), new cjs.Rectangle(-893,22.5,1755,1027.5), new cjs.Rectangle(-893,22.5,1684.4,1027.5), new cjs.Rectangle(-893,22.5,1613.7,1027.5), new cjs.Rectangle(-893,22.5,1543,1027.5), new cjs.Rectangle(-893,22.5,1563,1007.5), new cjs.Rectangle(-893,22.5,1583,987.4), new cjs.Rectangle(-893,22.5,1603,967.3), new cjs.Rectangle(-893,22.5,1623,947.3), new cjs.Rectangle(-893,22.5,1643,927.2), new cjs.Rectangle(-893,22.5,1643,932.2), new cjs.Rectangle(-893,22.5,1643,937.3), new cjs.Rectangle(-893,22.5,1643,942.3), new cjs.Rectangle(-893,22.5,1643,947.3), new cjs.Rectangle(-893,22.5,1643,952.4), new cjs.Rectangle(-893,22.5,1643,957.4), new cjs.Rectangle(-893,22.5,1643,962.5), new cjs.Rectangle(-893,22.5,1643,967.5), new cjs.Rectangle(-893,22.5,1643,972.5), new cjs.Rectangle(-893,22.5,1643,977.5), new cjs.Rectangle(-893,22.5,1643,987.5), new cjs.Rectangle(-893,22.5,1643,997.5), new cjs.Rectangle(-893,22.5,1643,1007.5), new cjs.Rectangle(-893,22.5,1643,1017.5), new cjs.Rectangle(-893,22.5,1643,1027.5), new cjs.Rectangle(-819.6,22.5,1569.7,1027.5), new cjs.Rectangle(-746.3,22.5,1496.4,1027.5), new cjs.Rectangle(-673,22.5,1423,1027.5), new cjs.Rectangle(-599.7,22.5,1349.7,1027.5), new cjs.Rectangle(-526.3,22.5,1276.4,1027.5), new cjs.Rectangle(-453,22.5,1203,1027.5), new cjs.Rectangle(-379.7,22.5,1129.7,1027.5), new cjs.Rectangle(-306.3,22.5,1056.3,1027.5), new cjs.Rectangle(-233,22.5,983,1027.5), new cjs.Rectangle(-159.6,22.5,909.7,1027.5), new cjs.Rectangle(-86.3,22.5,836.4,1027.5), new cjs.Rectangle(-13,22.5,763,1027.5), new cjs.Rectangle(41,22.5,709.1,1027.5), new cjs.Rectangle(38,22.5,712.1,1027.5), new cjs.Rectangle(35,22.5,715,1027.5), new cjs.Rectangle(32,22.5,718,1027.5), new cjs.Rectangle(29,22.5,721.1,1027.5), new cjs.Rectangle(26,22.5,724,1027.5), new cjs.Rectangle(23,22.5,727.1,1027.5), rect=new cjs.Rectangle(20,22.5,730,1027.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-5.2,22.5,755.3,1027.5), rect=new cjs.Rectangle(20,22.5,730,1027.5), rect, rect, rect, new cjs.Rectangle(-5.2,22.5,755.3,1027.5), rect=new cjs.Rectangle(20,22.5,730,1027.5), rect, rect, new cjs.Rectangle(-5.2,22.5,755.3,1027.5), rect=new cjs.Rectangle(20,22.5,730,1027.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(20,22.5,730,1017.5), new cjs.Rectangle(20,22.5,730,1007.5), new cjs.Rectangle(20,22.5,730,997.5), new cjs.Rectangle(20,22.5,730,987.5), new cjs.Rectangle(20,22.5,730,977.5), new cjs.Rectangle(20,22.5,730,972.5), new cjs.Rectangle(20,22.5,730,967.5), new cjs.Rectangle(-5.2,22.5,755.3,962.4), new cjs.Rectangle(20,22.5,730,957.4), new cjs.Rectangle(20,22.5,730,952.3), new cjs.Rectangle(20,22.5,730,947.3), new cjs.Rectangle(-5.2,22.5,755.3,942.3), new cjs.Rectangle(20,22.5,730,937.3), new cjs.Rectangle(20,22.5,730,932.2), new cjs.Rectangle(20,22.5,730,927.2), new cjs.Rectangle(-5.2,22.5,747.3,927.2), new cjs.Rectangle(20,22.5,714,927.2), new cjs.Rectangle(20,22.5,706,927.2), new cjs.Rectangle(20,22.5,698,927.2), new cjs.Rectangle(-5.2,22.5,715.3,927.2), new cjs.Rectangle(20,22.5,756.7,927.2), new cjs.Rectangle(20,22.5,823.4,927.2), new cjs.Rectangle(20,22.5,890,927.2), new cjs.Rectangle(-5.2,22.5,981.9,927.2), new cjs.Rectangle(20,22.5,1023.4,927.2), new cjs.Rectangle(20,22.5,1090,927.2), new cjs.Rectangle(20,22.5,1156.7,927.2), new cjs.Rectangle(-5.2,22.5,1248.6,927.2), new cjs.Rectangle(20,22.5,1290,927.2), new cjs.Rectangle(20,22.5,1356.7,927.2), new cjs.Rectangle(20,22.5,1423.4,927.2), new cjs.Rectangle(-5.2,22.5,1515.3,927.2), new cjs.Rectangle(20,22.5,1556.7,927.2), new cjs.Rectangle(20,22.5,1623.4,927.2), new cjs.Rectangle(20,22.5,1690,927.2), new cjs.Rectangle(-5.2,22.5,1715.3,927.2), rect=new cjs.Rectangle(20,22.5,1690,927.2), rect, rect, new cjs.Rectangle(-5.2,22.5,1715.3,927.2), rect=new cjs.Rectangle(20,22.5,1690,927.2), rect, rect, new cjs.Rectangle(-5.2,22.5,1715.3,927.2), rect=new cjs.Rectangle(20,22.5,1690,927.2), rect, rect, new cjs.Rectangle(-5.2,22.5,1715.3,927.2), rect=new cjs.Rectangle(20,22.5,1690,927.2), rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":219});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_99 = function() {
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
	this.frame_199 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(15).call(this.frame_39).wait(60).call(this.frame_99).wait(100).call(this.frame_199).wait(21));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,700,0.526,0.526,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({_off:false},0).to({regX:0,scaleX:0.84,scaleY:0.84,x:700,y:450},10).to({y:500},5).wait(6));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(58).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:700.1},0).to({regX:0,scaleX:0.84,scaleY:0.84,x:700,y:450},10).to({y:500},5).wait(15).to({y:460},5).to({y:700},10).wait(116));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(220,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:-300},0).wait(38).to({y:400},15).to({y:300},5).wait(40).to({y:350},5).to({y:-300},15).wait(101));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(540,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1500},0).wait(23).to({x:440},15).to({x:540},5).wait(75).to({x:400},20).wait(81));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).wait(81));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({alpha:1},20).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,-350,705,1025.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(75,-950,1541,1730), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(75,-950,1461.9,1730), new cjs.Rectangle(75,-950,1391.2,1730), new cjs.Rectangle(75,-950,1320.5,1730), new cjs.Rectangle(75,-950,1249.9,1730), new cjs.Rectangle(75,-950,1179.2,1730), new cjs.Rectangle(75,-950,1108.5,1730), new cjs.Rectangle(75,-950,1037.9,1730), new cjs.Rectangle(75,-950,967.2,1730), new cjs.Rectangle(75,-950,896.5,1730), new cjs.Rectangle(75,-950,825.9,1730), new cjs.Rectangle(75,-950,755.2,1730), new cjs.Rectangle(75,-950,730.3,1730), rect=new cjs.Rectangle(75,-950,705,1730), rect, rect, new cjs.Rectangle(75,-903.3,730.3,1683.4), new cjs.Rectangle(75,-856.6,705,1636.7), new cjs.Rectangle(75,-810,705,1590), new cjs.Rectangle(75,-763.3,705,1543.4), new cjs.Rectangle(75,-716.6,730.3,1496.7), new cjs.Rectangle(75,-670,705,1450), new cjs.Rectangle(75,-623.3,705,1403.4), new cjs.Rectangle(75,-576.6,705,1356.7), new cjs.Rectangle(75,-530,730.3,1310), new cjs.Rectangle(75,-483.3,705,1263.4), new cjs.Rectangle(75,-436.6,705,1216.7), new cjs.Rectangle(75,-390,705,1170), new cjs.Rectangle(75,-343.3,730.3,1123.4), new cjs.Rectangle(75,-296.6,705,1076.7), new cjs.Rectangle(75,-250,705,1030), new cjs.Rectangle(75,-270,705,1050), new cjs.Rectangle(75,-290,730.3,1070), new cjs.Rectangle(75,-310,705,1090), new cjs.Rectangle(75,-330,705,1110), new cjs.Rectangle(75,-350,675,1100), new cjs.Rectangle(75,-350,678,1078), new cjs.Rectangle(75,-350,681,1056), new cjs.Rectangle(75,-350,684,1034), new cjs.Rectangle(75,-350,687,1025.5), new cjs.Rectangle(75,-350,690,1025.5), new cjs.Rectangle(75,-350,693,1025.5), new cjs.Rectangle(75,-350,696,1025.5), new cjs.Rectangle(75,-350,699,1025.5), new cjs.Rectangle(75,-350,702,1025.5), rect=new cjs.Rectangle(75,-350,705,1025.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(75,-350,730.3,1025.5), rect=new cjs.Rectangle(75,-350,705,1025.5), rect, rect, rect, new cjs.Rectangle(75,-350,730.3,1025.5), rect=new cjs.Rectangle(75,-350,705,1025.5), rect, rect, new cjs.Rectangle(75,-350,730.3,1025.5), rect=new cjs.Rectangle(75,-350,705,1025.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(75,-340,705,1024), new cjs.Rectangle(75,-330,705,1038), new cjs.Rectangle(75,-320,705,1052), new cjs.Rectangle(75,-310,705,1066), new cjs.Rectangle(75,-300,705,1080), new cjs.Rectangle(75,-343.3,705,1123.4), new cjs.Rectangle(75,-386.6,705,1166.7), new cjs.Rectangle(75,-430,730.3,1210), new cjs.Rectangle(75,-473.3,705,1253.4), new cjs.Rectangle(75,-516.6,705,1296.7), new cjs.Rectangle(75,-560,705,1340), new cjs.Rectangle(75,-603.3,730.3,1383.4), new cjs.Rectangle(75,-646.6,705,1426.7), new cjs.Rectangle(75,-690,705,1470), new cjs.Rectangle(75,-733.3,705,1513.4), new cjs.Rectangle(75,-776.6,730.3,1556.7), new cjs.Rectangle(75,-820,705,1600), new cjs.Rectangle(75,-863.3,705,1643.4), new cjs.Rectangle(75,-906.6,705,1686.7), rect=new cjs.Rectangle(-410,-950,1620,1730), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":199});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_99 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(15).call(this.frame_39).wait(60).call(this.frame_99).wait(101));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(58).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:700.1},0).to({regX:0,scaleX:0.84,scaleY:0.84,x:700,y:450},10).to({y:500},5).wait(15).to({y:460},5).to({y:700},10).wait(96));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(240,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:-400},0).wait(38).to({y:400},15).to({y:300},5).wait(40).to({y:350},5).to({y:-400},15).wait(81));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(610,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1500},0).wait(23).to({x:510},15).to({x:610},5).wait(75).to({x:450},20).wait(61));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).wait(61));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},20).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,-350,736,1013);
p.frameBounds = [rect, rect=new cjs.Rectangle(70,-1050,1626,1830), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(70,-1050,1560,1830), new cjs.Rectangle(70,-1050,1494,1830), new cjs.Rectangle(70,-1050,1428,1830), new cjs.Rectangle(70,-1050,1362,1830), new cjs.Rectangle(70,-1050,1296,1830), new cjs.Rectangle(70,-1050,1230,1830), new cjs.Rectangle(70,-1050,1164,1830), new cjs.Rectangle(70,-1050,1098,1830), new cjs.Rectangle(70,-1050,1032,1830), new cjs.Rectangle(70,-1050,966,1830), new cjs.Rectangle(70,-1050,900,1830), new cjs.Rectangle(70,-1050,834,1830), new cjs.Rectangle(70,-1050,768,1830), rect=new cjs.Rectangle(70,-1050,710,1830), rect, new cjs.Rectangle(70,-996.6,735.3,1776.7), new cjs.Rectangle(70,-943.3,710,1723.4), new cjs.Rectangle(70,-890,710,1670), new cjs.Rectangle(70,-836.6,716,1616.7), new cjs.Rectangle(70,-783.3,736,1563.4), new cjs.Rectangle(70,-730,736,1510), new cjs.Rectangle(70,-676.6,736,1456.7), new cjs.Rectangle(70,-623.3,736,1403.4), new cjs.Rectangle(70,-570,736,1350), new cjs.Rectangle(70,-516.6,736,1296.7), new cjs.Rectangle(70,-463.3,736,1243.4), new cjs.Rectangle(70,-410,736,1190), new cjs.Rectangle(70,-356.6,736,1136.7), new cjs.Rectangle(70,-303.3,736,1083.4), new cjs.Rectangle(70,-250,736,1030), new cjs.Rectangle(70,-270,736,1050), new cjs.Rectangle(70,-290,736,1070), new cjs.Rectangle(70,-310,736,1090), new cjs.Rectangle(70,-330,736,1110), new cjs.Rectangle(70,-350,736,1100), new cjs.Rectangle(70,-350,736,1078), new cjs.Rectangle(70,-350,736,1056), new cjs.Rectangle(70,-350,736,1034), rect=new cjs.Rectangle(70,-350,736,1013), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(70,-340,736,1024), new cjs.Rectangle(70,-330,736,1038), new cjs.Rectangle(70,-320,736,1052), new cjs.Rectangle(70,-310,736,1066), new cjs.Rectangle(70,-300,736,1080), new cjs.Rectangle(70,-350,736,1130), new cjs.Rectangle(70,-400,736,1180), new cjs.Rectangle(70,-450,736,1230), new cjs.Rectangle(70,-500,736,1280), new cjs.Rectangle(70,-550,736,1330), new cjs.Rectangle(70,-600,736,1380), new cjs.Rectangle(70,-650,736,1430), new cjs.Rectangle(70,-700,736,1480), new cjs.Rectangle(70,-750,736,1530), new cjs.Rectangle(70,-800,736,1580), new cjs.Rectangle(70,-850,736,1630), new cjs.Rectangle(70,-900,736,1680), new cjs.Rectangle(70,-950,736,1730), new cjs.Rectangle(70,-1000,736,1780), rect=new cjs.Rectangle(-410,-1050,1620,1830), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(560,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:450},0).wait(1).to({x:400,y:1500},0).wait(1).to({x:560,y:330},0).wait(5));

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(280,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:400,y:1500},0).wait(1).to({y:340},0).wait(1).to({x:280},0).wait(5));

	// bg
	this.instance = new lib.background_7_mc();

	this.instance_1 = new lib.background_8_mc();

	this.instance_2 = new lib.background_9_mc();

	this.instance_3 = new lib.background_10_mc();

	this.instance_4 = new lib.background_2_mc();

	this.instance_5 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,675.5);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,1835.5), new cjs.Rectangle(-400,0,1600,1813), rect=new cjs.Rectangle(-400,0,1600,675.5), rect, rect, rect, rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
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
	this.initialize(mode,startPosition,loop,{"mid":69,"end":119});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_44 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(76));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(640,700,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(44).to({scaleX:0.53,scaleY:0.53},0).to({scaleX:0.95,scaleY:0.95,y:450},10).to({scaleX:0.9,scaleY:0.9,y:500},5).wait(10).to({scaleX:0.79,scaleY:0.79},5).to({scaleX:0.9,scaleY:0.9},10).to({y:450},5).to({scaleX:0.53,scaleY:0.53,y:700},10).wait(21));

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,820.5,0.75,0.75,0,0,0,0.7,0.7);

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
	this.credits_btn.setTransform(50,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]},69).wait(51));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(640,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:350},15).to({y:250},5).wait(55).to({y:315},10).wait(11));

	// decor
	this.instance_1 = new lib.animation_cloud_mc();
	this.instance_1.setTransform(280,560);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// decor
	this.instance_2 = new lib.lower_shadow_mc();
	this.instance_2.setTransform(0,400);
	this.instance_2.alpha = 0.199;
	this.instance_2.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// hero_1
	this.instance_3 = new lib.hero_1_main_mc();
	this.instance_3.setTransform(430,320);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// hero_2
	this.instance_4 = new lib.hero_2_main_mc();
	this.instance_4.setTransform(180,330);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(120));

	// bg
	this.instance_5 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-360,1600,1453.6);
p.frameBounds = [rect, new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-360,1600,1453.7), new cjs.Rectangle(-400,-360,1600,1453.6), new cjs.Rectangle(-400,-323.3,1600,1417), new cjs.Rectangle(-400,-286.6,1600,1380.3), new cjs.Rectangle(-400,-250,1600,1343.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-176.6,1600,1270.3), new cjs.Rectangle(-400,-140,1600,1233.6), new cjs.Rectangle(-400,-103.3,1600,1197), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), rect=new cjs.Rectangle(-400,-280.8,1600,1374.4), rect, new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6)];


(lib.quest_8_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,-349.4,705,1299.4);
p.frameBounds = [rect];


(lib.quest_7_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,-349.4,750,1299.4);
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
	this.object_2 = new lib.object_0_mc();
	this.object_2.setTransform(700,500);
	this.object_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,-349.4,676,1399.4);
p.frameBounds = [rect, new cjs.Rectangle(30,-349.4,810,1399.4)];


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
p.nominalBounds = rect = new cjs.Rectangle(30,-349.4,786,1399.4);
p.frameBounds = [rect];


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
	this.object_2 = new lib.object_0_mc();
	this.object_2.setTransform(700,500);
	this.object_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,-349.4,730,1399.4);
p.frameBounds = [rect, new cjs.Rectangle(20,-349.4,820,1399.4)];


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
p.nominalBounds = rect = new cjs.Rectangle(20,-349.4,730,1399.4);
p.frameBounds = [rect, new cjs.Rectangle(20,-349.4,701,1899.4)];


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
	this.object_2 = new lib.object_0_mc();
	this.object_2.setTransform(700,500);
	this.object_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_2_mc();
	this.frame_1_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,-350,705,1025.5);
p.frameBounds = [rect, new cjs.Rectangle(75,-350,765,1025.5)];


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
p.nominalBounds = rect = new cjs.Rectangle(70,-350,736,1013);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,675.5);
p.frameBounds = [rect];


(lib.LocationScreen_8 = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.quest_8_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.LocationScreen_7 = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.quest_7_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1399.4);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1399.4);
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
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1399.4);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1399.4);
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
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-350,1600,1331);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-350,1600,1331);
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
	this.photoContainer_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1780);
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
	this.instance_5.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.LocationScreen_2();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_3();
	this.instance_7.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.LocationScreen_4();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.LocationScreen_5();
	this.instance_9.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_10 = new lib.LocationScreen_6();
	this.instance_10.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_11 = new lib.LocationScreen_7();
	this.instance_11.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_12 = new lib.LocationScreen_8();
	this.instance_12.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_13 = new lib.RedirectScreen();

	this.instance_14 = new lib.ResultScreen();
	this.instance_14.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_15 = new lib.InstructionScreen();

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(690,250);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_16 = new lib.forward_mc();
	this.instance_16.setTransform(500,250);

	this.instance_17 = new lib.Glitter_2();
	this.instance_17.setTransform(450,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.instance_18 = new lib.FlashAnimation();
	this.instance_18.setTransform(150,280);

	this.instance_19 = new lib.TrackMove_2();
	this.instance_19.setTransform(350,50);

	this.instance_20 = new lib.TrackMove();
	this.instance_20.setTransform(270,50);

	this.instance_21 = new lib.Cursor();
	this.instance_21.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_22 = new lib.PauseAppScreen();

	this.instance_23 = new lib.OrientationLockScreen();

	this.instance_24 = new lib.CurtainScreen();

	this.instance_25 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.gravity_explosion_comp},{t:this.instance_17},{t:this.instance_16},{t:this.next_btn}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[]},1).to({state:[{t:this.instance_25}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,0,1600,1165), new cjs.Rectangle(-400,-360,1600,1450), new cjs.Rectangle(-400,-280.8,1600,1261.9), rect=new cjs.Rectangle(-400,-350,1600,1331), rect, rect=new cjs.Rectangle(-400,-349.4,1600,1399.4), rect, rect, rect, rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,785,430), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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