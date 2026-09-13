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
		{src:"library/images/storage_atlas_20.png", id:"storage_atlas_20"},
		{src:"library/images/storage_atlas_21.png", id:"storage_atlas_21"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1600,600],[905,602,887,637],[0,602,903,649]]},
		{name:"storage_atlas_7", frames: [[0,902,1600,200],[602,0,600,900],[1204,0,400,800],[0,0,600,900]]},
		{name:"storage_atlas_8", frames: [[854,622,407,595],[1263,622,440,550],[402,0,400,800],[0,0,400,800],[432,802,420,590],[0,802,430,590],[1236,0,400,620],[804,0,430,600]]},
		{name:"storage_atlas_9", frames: [[442,552,404,580],[848,552,380,560],[0,552,440,550],[442,0,440,550],[1230,522,400,520],[884,0,400,520],[1286,0,400,520],[0,0,440,550]]},
		{name:"storage_atlas_10", frames: [[402,522,400,520],[804,0,400,520],[1206,0,400,520],[804,522,400,520],[1206,522,400,520],[0,0,400,520],[402,0,400,520],[0,522,400,520]]},
		{name:"storage_atlas_11", frames: [[0,0,400,520],[402,512,400,510],[804,0,400,510],[1206,0,340,590],[1146,592,340,590],[804,512,340,590],[0,522,400,510],[402,0,400,510]]},
		{name:"storage_atlas_12", frames: [[0,0,340,590],[0,592,340,590],[342,0,340,590],[704,542,360,540],[342,592,360,540],[684,0,360,540],[1046,0,360,540],[1408,0,360,540],[1066,542,360,540],[1428,542,360,540]]},
		{name:"storage_atlas_13", frames: [[724,542,360,540],[1418,590,330,588],[1418,0,330,588],[1086,0,330,588],[1086,590,330,588],[362,542,360,540],[0,0,360,540],[724,0,360,540],[0,542,360,540],[362,0,360,540]]},
		{name:"storage_atlas_14", frames: [[0,590,330,588],[0,0,330,588],[714,0,380,490],[1096,0,380,490],[332,492,380,490],[332,0,380,490],[714,492,380,490],[1096,492,380,490]]},
		{name:"storage_atlas_15", frames: [[382,0,380,490],[382,492,380,490],[764,0,380,490],[0,0,380,490],[0,492,380,490],[1146,0,380,490],[0,984,640,280],[642,984,640,280],[1284,492,490,360],[1284,854,490,360],[764,492,490,360]]},
		{name:"storage_atlas_16", frames: [[0,402,500,300],[904,0,500,300],[402,0,500,300],[0,704,500,300],[502,302,720,180],[762,865,256,468],[1487,775,258,468],[1020,865,259,460],[1224,382,261,481],[502,865,258,481],[1487,382,310,391],[502,484,377,321],[0,0,400,400],[1406,0,380,380],[0,1006,380,380]]},
		{name:"storage_atlas_17", frames: [[1459,764,300,300],[1459,1066,300,300],[260,470,380,260],[1157,466,300,300],[255,1056,300,300],[1459,462,300,300],[1157,768,300,300],[1021,0,252,464],[0,924,253,468],[261,0,252,468],[515,0,251,468],[768,0,251,468],[557,838,251,350],[1275,0,254,460],[0,0,259,460],[0,462,258,460],[1531,0,253,460],[642,470,268,366],[912,470,243,376],[260,732,282,322],[1102,1070,290,290],[810,848,290,290]]},
		{name:"storage_atlas_18", frames: [[1434,1140,230,230],[938,1145,230,230],[0,1163,230,230],[858,282,270,270],[1402,313,280,260],[1130,282,270,270],[0,407,280,260],[1523,575,192,321],[722,554,195,339],[282,407,192,345],[476,407,244,271],[919,554,196,337],[1117,554,182,347],[1301,575,220,282],[1422,0,244,311],[0,0,238,352],[232,1006,230,250],[1301,898,240,240],[0,911,230,250],[0,669,240,240],[474,922,230,250],[1543,898,240,240],[706,1137,230,250],[476,680,240,240],[242,754,230,250],[718,895,240,240],[1202,1140,230,250],[960,903,240,240],[858,0,280,280],[1140,0,280,280],[240,0,204,405],[446,0,204,405],[652,0,204,405]]},
		{name:"storage_atlas_19", frames: [[1306,1072,190,190],[1150,404,240,180],[1498,1234,220,160],[1484,880,190,190],[242,666,240,220],[463,1191,220,200],[636,0,220,200],[685,1154,220,200],[706,404,220,200],[484,548,220,200],[660,202,220,200],[601,750,220,200],[858,0,220,200],[882,202,220,200],[1104,202,220,200],[601,952,220,200],[1080,0,220,200],[823,606,220,200],[928,404,220,200],[907,1010,220,200],[823,808,220,200],[1302,0,220,200],[0,232,230,230],[232,444,240,220],[0,464,230,230],[0,918,240,220],[0,1140,240,220],[232,0,240,220],[0,696,240,220],[0,0,230,230],[232,222,240,220],[1524,0,190,190],[1392,304,143,275],[429,888,170,301],[242,1191,219,207],[907,1212,210,185],[1537,304,176,211],[242,888,185,285],[1129,1151,175,242],[474,305,184,241],[474,0,160,303],[1498,1072,220,160],[1207,688,190,190],[1129,880,161,269],[1045,606,160,272],[1399,688,190,190],[1292,880,190,190],[1591,688,190,190],[1326,202,420,100],[1207,586,400,100]]},
		{name:"storage_atlas_20", frames: [[1604,162,180,180],[222,162,220,160],[1332,0,220,160],[222,0,220,160],[0,0,220,160],[444,162,220,160],[1110,0,220,160],[1554,0,220,160],[444,0,220,160],[666,0,220,160],[888,0,220,160],[0,162,220,160],[0,324,180,180],[371,324,226,141],[0,1169,207,102],[783,995,180,143],[647,713,209,126],[774,1140,161,142],[441,972,175,148],[419,1254,194,102],[1029,344,260,120],[211,1153,206,105],[1342,1151,156,146],[937,1246,165,124],[965,1028,186,134],[623,1022,149,155],[1219,1162,117,173],[854,342,173,182],[1651,849,145,179],[1152,847,145,179],[636,841,145,179],[1299,847,145,179],[1005,814,145,179],[1446,855,145,179],[342,791,145,179],[489,791,145,179],[858,814,145,179],[294,972,145,179],[1651,668,145,179],[0,873,145,179],[147,873,145,179],[1217,473,153,185],[182,497,153,185],[721,526,153,185],[1372,473,153,185],[0,506,153,185],[1527,481,153,185],[1496,668,153,185],[337,604,153,185],[492,604,153,185],[1341,660,153,185],[876,627,153,185],[1186,660,153,185],[1031,627,153,185],[0,693,280,80],[937,1164,280,80],[599,352,120,248],[1050,162,188,179],[0,1054,209,113],[1342,1036,211,113],[1291,344,239,127],[1593,1030,175,135],[1532,344,222,135],[371,467,213,135],[441,1122,180,130],[0,791,340,80],[666,162,186,188],[1500,1167,150,142],[854,162,194,178],[182,324,187,171],[1153,1028,187,132],[1029,466,186,159],[623,1179,140,140],[209,1260,140,140],[1652,1167,140,140],[1240,162,180,180],[1422,162,180,180]]},
		{name:"storage_atlas_21", frames: [[610,319,120,120],[732,325,120,120],[1188,326,120,120],[1310,326,120,120],[84,799,40,40],[941,745,50,50],[1066,326,120,120],[1432,326,120,120],[158,383,129,110],[772,0,189,93],[426,0,122,157],[1066,266,90,50],[286,763,90,50],[822,203,120,120],[456,184,120,120],[578,184,120,120],[700,197,120,120],[1314,62,36,36],[1158,164,36,36],[1196,164,36,36],[1234,164,36,36],[1110,800,36,36],[1571,803,36,36],[126,804,36,36],[164,804,36,36],[1533,803,36,36],[1186,800,36,36],[1148,800,36,36],[1495,803,36,36],[1457,803,36,36],[1336,686,130,70],[404,721,130,60],[1632,757,90,70],[0,737,130,60],[1158,204,120,120],[1006,101,110,60],[1001,690,90,90],[1554,326,90,90],[536,744,110,70],[1690,77,18,18],[1768,361,24,24],[331,383,24,24],[398,660,161,59],[1468,757,162,44],[267,549,164,60],[839,690,160,53],[242,653,154,62],[1468,686,150,59],[1093,755,166,43],[1275,595,141,47],[132,763,152,39],[835,531,144,73],[1634,542,147,67],[0,460,143,76],[1193,686,141,67],[1279,522,150,71],[981,535,150,67],[366,261,41,42],[1768,299,29,60],[1077,800,31,51],[1759,611,35,55],[1276,62,36,37],[982,469,22,64],[1431,758,24,72],[1690,0,35,75],[1093,682,25,66],[963,0,159,99],[1141,448,136,81],[512,441,142,80],[1279,448,152,72],[0,366,156,92],[1007,448,132,85],[1193,531,80,124],[1524,204,120,120],[653,531,180,60],[471,523,180,60],[1433,480,180,60],[800,469,180,60],[1615,480,180,60],[289,487,180,60],[1124,0,260,60],[289,383,40,40],[656,447,142,80],[1332,758,97,64],[561,677,146,65],[648,759,90,68],[433,585,132,73],[1554,421,226,57],[289,428,221,57],[854,388,151,79],[709,690,128,67],[1620,686,125,69],[740,759,97,52],[1051,604,86,76],[1580,102,150,100],[304,159,150,100],[152,142,150,100],[0,142,150,100],[1006,164,150,100],[1428,102,150,100],[702,95,150,100],[1538,0,150,100],[854,101,150,100],[1276,102,150,100],[550,82,150,100],[1386,0,150,100],[1124,62,150,100],[1402,204,120,120],[1280,204,120,120],[944,203,60,60],[550,0,220,80],[102,538,40,55],[409,261,40,43],[1784,0,10,11],[1261,755,69,94],[839,745,100,73],[854,325,57,60],[1533,542,99,100],[913,325,23,38],[1352,62,31,31],[1007,388,50,50],[1747,686,40,147],[1141,531,50,210],[1732,0,50,297],[0,0,140,140],[142,0,140,140],[284,0,140,140],[462,783,40,40],[941,797,40,40],[378,783,40,40],[1035,782,40,40],[993,782,40,40],[420,783,40,40],[386,611,40,40],[344,611,40,40],[0,799,40,40],[42,799,40,40],[488,306,120,120],[1646,204,80,80],[145,495,120,90],[366,306,120,120],[122,244,120,120],[244,261,120,120],[944,266,120,120],[1646,299,120,120],[0,244,120,120],[809,606,240,40],[102,611,240,40],[567,593,240,40],[0,653,240,40],[567,635,240,40],[1275,644,240,40],[1517,644,240,40],[809,648,240,40],[0,695,200,40],[202,721,200,40],[0,538,100,100],[1431,542,100,100]]}
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
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(11);
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



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
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
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bow_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.closet3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cupid_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet1_9_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet2_7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet2_8_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.earrings_for_closet2_9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.eyes_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.eyes_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.eyes_check_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eyes_check_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(12);
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



(lib.forward_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.girl1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.girl1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.girl1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.girl1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.girl1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.girl1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.girl1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.girl2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.girl2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.girl2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.girl2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.girl2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.girl2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.girl2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.glitter_10_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.glitter_11_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.glitter_12_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.glitter_13_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.glitter_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.glitter_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.glitter_7_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.glitter_8_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.glitter_9_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.grass_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_10_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_11_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_12_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_13_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_14_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_15_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_16_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_17_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_18_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_19_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings8_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings9_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero1_glasses6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings8_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings9_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.item10_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.item11_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.item12_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.item13_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.item14_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.item15_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.item16_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.item17_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.item18_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.item19_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.item1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.item20_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.item21_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.item22_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.item23_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.item2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.item3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.item4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.item5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.item6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.item7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.item9_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.light_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_progress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.makeup_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.makeup_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.makeup_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.makeup_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.makeup_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.makeup_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.makeup_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.makeup_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.makeup_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.makeup_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.makeup_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.makeup_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.masseuse_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.masseuse_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.masseuse_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.masseuse_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.masseuse_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.water1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.water2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.water3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
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
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("Eh+jAwcMAAAhg2MD9GAAAMAAABg2g");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bXbMAAAgu2MAu3AAAMAAAAu2g");

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


(lib.water_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.water1_img();

	this.instance_1 = new lib.water2_img();

	this.instance_2 = new lib.water3_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,204,405);
p.frameBounds = [rect, rect, rect];


(lib.wardrobe_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_3_img();
	this.instance.setTransform(-200,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-50,400,100);
p.frameBounds = [rect];


(lib.wardrobe_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_1_img();
	this.instance.setTransform(-210,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-50,420,100);
p.frameBounds = [rect];


(lib.wardrobe_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_4_img();
	this.instance.setTransform(-215,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-300,430,600);
p.frameBounds = [rect];


(lib.wardrobe_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_3_img();
	this.instance.setTransform(-200,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-310,400,620);
p.frameBounds = [rect];


(lib.wardrobe_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_img();
	this.instance.setTransform(-215,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-295,430,590);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-210,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-295,420,590);
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


(lib.object_19_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwAQBQmpmoABpZQgBpYGpmoQGompJYABQJZgBGoGpQGpGogBJYQABJZmpGoQmoGppZgBQpYABmompg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.object_19_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdPeQmZmbgBpDQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJDmZGbQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.object_18_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A7mbnQrdrcAAwLQAAwKLdrcQLcrdQKAAQQLAALbLdQLeLcAAQKQAAQLreLcQrbLcwLABQwKgBrcrcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.object_18_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A7mbnQrdrcAAwLQAAwKLdrcQLcrdQKAAQQLAALcLdQLcLcABQKQgBQLrcLcQrcLcwLABQwKgBrcrcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.object_17_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuWJZQl8j6AAlfQAAleF8j6QF9j4IZAAQIaAAF8D4QF9D6AAFeQAAFfl9D6Ql8D4oaAAQoZAAl9j4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-85,260,170);
p.frameBounds = [rect];


(lib.object_17_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuWJ8Ql8kIAAl0QAAl0F8kIQF9kGIZgBQIaABF8EGQF9EIAAF0QAAF0l9EIQl8EHoaABQoZgBl9kHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-90,260,180);
p.frameBounds = [rect];


(lib.object_15_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AssJZQlRj6AAlfQAAlfFRj5QFSj5HaABQHcgBFQD5QFRD5ABFfQgBFflRD6QlQD4ncAAQnaAAlSj4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-85,230,170);
p.frameBounds = [rect];


(lib.object_15_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsIKgQlCkXAAmJQAAmHFCkXQFBkXHHAAQHHAAFCEXQFCEXAAGHQAAGJlCEXQlCEVnHABQnHgBlBkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-95,220,190);
p.frameBounds = [rect];


(lib.object_14_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A6gahQq/rAAAvhQAAvhK/q/QLAq/PgAAQPiAAK/K/QK/K/AAPhQAAPhq/LAQq/K/viAAQvgAArAq/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-240,480,480);
p.frameBounds = [rect];


(lib.object_14_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A5ZZaQqiqiAAu4QAAu3KiqiQKiqiO3AAQO4AAKiKiQKiKiAAO3QAAO4qiKiQqiKiu4AAQu3AAqiqig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-230,460,460);
p.frameBounds = [rect];


(lib.object_12_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AssHLQlRi/AAkMQAAkMFRi+QFRi+HbAAQHbAAFRC+QFSC+AAEMQAAEMlSC/QlRC/nbgBQnbABlRi/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-65,230,130);
p.frameBounds = [rect];


(lib.object_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsIHKQlCi9AAkNQAAkMFCi+QFCi+HGAAQHHAAFCC+QFDC+gBEMQABENlDC9QlCC/nHAAQnGAAlCi/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-65,220,130);
p.frameBounds = [rect];


(lib.object_11_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.object_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhH0IAAvnMAnDAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-50,250,100);
p.frameBounds = [rect];


(lib.object_10_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AssISQlRjcAAk2QAAk1FRjcQFRjcHbABQHbgBFRDcQFSDcAAE1QAAE2lSDcQlRDbnbAAQnbAAlRjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-75,230,150);
p.frameBounds = [rect];


(lib.object_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsIGoQlCiwAAj4QAAj3FCiwQFCiwHGAAQHHAAFCCwQFDCwgBD3QABD4lDCwQlCCwnHAAQnGAAlCiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-60,220,120);
p.frameBounds = [rect];


(lib.object_9_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArlHuQk0jNAAkhQAAkgE0jOQE0jMGxgBQGyABE0DMQE0DOAAEgQAAEhk0DNQk0DOmyAAQmxAAk0jOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-70,210,140);
p.frameBounds = [rect];


(lib.object_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArCHLQkki/AAkMQAAkLEki/QEli/GdABQGegBElC/QEkC/AAELQAAEMkkC/QklC/megBQmdABkli/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-65,200,130);
p.frameBounds = [rect];


(lib.object_8_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A5ZZaQqiqiAAu4QAAu3KiqiQKiqiO3AAQO4AAKiKiQKiKiAAO3QAAO4qiKiQqiKiu4AAQu3AAqiqig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-230,460,460);
p.frameBounds = [rect];


(lib.object_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A5ZZaQqiqhAAu5QAAu3KiqiQKhqiO4AAQO4AAKiKiQKiKiAAO3QAAO5qiKhQqiKiu4AAQu4AAqhqig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-230,460,460);
p.frameBounds = [rect];


(lib.object_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnuFhQjMiTgBjOQABjODMiSQDOiTEgAAQEhAADNCTQDOCSAADOQAADOjOCTQjNCTkhAAQkgAAjOiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.object_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoRGnQjcivABj4QgBj3DciwQDciwE1AAQE3AADbCwQDbCwAAD3QAAD4jbCvQjbCxk3AAQk1AAjcixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-60,150,120);
p.frameBounds = [rect];


(lib.object_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ao1GEQjpihgBjjQABjiDpihQDrihFKAAQFLAADqChQDrChAADiQAADjjrChQjqChlLAAQlKAAjrihg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-55,160,110);
p.frameBounds = [rect];


(lib.object_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ao1GoQjpiwgBj4QABj2DpiwQDrixFKAAQFLAADqCxQDrCwAAD2QAAD4jrCwQjqCwlLAAQlKAAjriwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.object_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ao0GEQjrigAAjkQAAjjDrihQDqihFKABQFMgBDqChQDpChABDjQgBDkjpCgQjqCilMgBQlKABjqiig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-55,160,110);
p.frameBounds = [rect];


(lib.object_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ao0GnQjrivAAj4QAAj3DriwQDqiwFKAAQFLAADqCwQDrCwAAD3QAAD4jrCvQjqCxlLAAQlKAAjqixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.object_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7GnQkIivAAj4QAAj3EIiwQEHiwF0AAQF0AAEICwQEHCwABD3QgBD4kHCvQkICxl0AAQl0AAkHixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.object_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7HuQkIjNAAkhQAAkgEIjOQEHjMF0gBQF1ABEHDMQEHDOABEgQgBEhkHDNQkHDOl1AAQl0AAkHjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-70,180,140);
p.frameBounds = [rect];


(lib.object_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuWOXQl8l9AAoaQAAoZF8l9QF9l8IZgBQIaABF8F8QF9F9AAIZQAAIal9F9Ql8F9oaAAQoZAAl9l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.object_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwAQBQmpmpABpYQgBpXGpmpQGpmpJXABQJYgBGpGpQGoGpAAJXQAAJYmoGpQmpGopYAAQpXAAmpmog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.object_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.masseuse_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.masseuse_2_1_img();
	this.instance.setTransform(-200,-400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-400,400,800);
p.frameBounds = [rect];


(lib.masseuse_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.masseuse_1_2_img();
	this.instance.setTransform(-300,-450);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-450,600,900);
p.frameBounds = [rect];


(lib.masseuse_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.masseuse_1_1_img();
	this.instance.setTransform(-200,-400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-400,400,800);
p.frameBounds = [rect];


(lib.masseuse_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.masseuse_0_2_img();
	this.instance.setTransform(-300,-450);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-450,600,900);
p.frameBounds = [rect];


(lib.masseuse_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.masseuse_0_1_img();
	this.instance.setTransform(-200,-400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-400,400,800);
p.frameBounds = [rect];


(lib.makeup_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_2_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.makeup_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_2_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.makeup_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.makeup_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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


(lib.location_progress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_progress_1_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.light1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light_img();
	this.instance.setTransform(-188.5,-160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-188.5,-160.5,377,321);
p.frameBounds = [rect];


(lib.item23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item23_img();
	this.instance.setTransform(-87.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-67.5,175,135);
p.frameBounds = [rect];


(lib.item22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item22_img();
	this.instance.setTransform(-119.5,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.5,-63.5,239,127);
p.frameBounds = [rect];


(lib.item21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item21_img();
	this.instance.setTransform(-118.4,-42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.4,-42.6,211,113);
p.frameBounds = [rect];


(lib.item20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item20_img();
	this.instance.setTransform(-118.4,-42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.4,-42.6,209,113);
p.frameBounds = [rect];


(lib.item19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item19_img();
	this.instance.setTransform(-80.5,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-134.5,160,272);
p.frameBounds = [rect];


(lib.item18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item18_img();
	this.instance.setTransform(-80.5,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-134.5,161,269);
p.frameBounds = [rect];


(lib.item17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item17_img();
	this.instance.setTransform(-60,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-124,120,248);
p.frameBounds = [rect];


(lib.item16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item16_img();
	this.instance.setTransform(108,-28.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-28.5,221,57);
p.frameBounds = [rect];


(lib.item15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item15_img();
	this.instance.setTransform(-113,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-28.5,226,57);
p.frameBounds = [rect];


(lib.item14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item14_img();
	this.instance.setTransform(-73,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-44.5,132,73);
p.frameBounds = [rect];


(lib.item13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item13_img();
	this.instance.setTransform(41.5,-32,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-32,90,68);
p.frameBounds = [rect];


(lib.item12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item12_img();
	this.instance.setTransform(-73,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-32.5,146,65);
p.frameBounds = [rect];


(lib.item11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item11_img();
	this.instance.setTransform(-48.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-32,97,64);
p.frameBounds = [rect];


(lib.item10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item10_img();
	this.instance.setTransform(-71,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-40,142,80);
p.frameBounds = [rect];


(lib.item9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item9_img();
	this.instance.setTransform(-43,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-38,86,76);
p.frameBounds = [rect];


(lib.item7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item7_img();
	this.instance.setTransform(-85,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-67.5,213,135);
p.frameBounds = [rect];


(lib.item6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item6_img();
	this.instance.setTransform(-111,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-67.5,222,135);
p.frameBounds = [rect];


(lib.item5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item5_img();
	this.instance.setTransform(-48.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-26,97,52);
p.frameBounds = [rect];


(lib.item4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item4_img();
	this.instance.setTransform(-62.5,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-34.5,125,69);
p.frameBounds = [rect];


(lib.item3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3_img();
	this.instance.setTransform(-64,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64,-33.5,128,67);
p.frameBounds = [rect];


(lib.item2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_img();
	this.instance.setTransform(-75.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,-39.5,151,79);
p.frameBounds = [rect];


(lib.item1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item1_img();
	this.instance.setTransform(-94,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-89.5,188,179);
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


(lib.hero2_makeup_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_makeup2_img();
	this.instance.setTransform(-76.5,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-92.5,153,185);
p.frameBounds = [rect];


(lib.hero2_makeup_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_makeup1_img();
	this.instance.setTransform(-76.5,-92.5);

	this.instance_1 = new lib.hero2_makeup2_img();
	this.instance_1.setTransform(-76.5,-92.5);

	this.instance_2 = new lib.hero2_makeup3_img();
	this.instance_2.setTransform(-76.5,-92.5);

	this.instance_3 = new lib.hero2_makeup4_img();
	this.instance_3.setTransform(-76.5,-92.5);

	this.instance_4 = new lib.hero2_makeup5_img();
	this.instance_4.setTransform(-76.5,-92.5);

	this.instance_5 = new lib.hero2_makeup6_img();
	this.instance_5.setTransform(-76.5,-92.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-92.5,153,185);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-76.5,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-92.5,153,185);
p.frameBounds = [rect];


(lib.hero2_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-102.6,-121.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.6,-121.1,244,311);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-102.6,-121.1);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-51,-82.1);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-117.6,-125.1);

	this.instance_3 = new lib.hero2_hair4_img();
	this.instance_3.setTransform(-75.6,-120.1);

	this.instance_4 = new lib.hero2_hair5_img();
	this.instance_4.setTransform(-131.6,-104.1);

	this.instance_5 = new lib.hero2_hair6_img();
	this.instance_5.setTransform(-132.6,-121.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.6,-121.1,244,311);
p.frameBounds = [rect, new cjs.Rectangle(-51,-82.1,160,303), new cjs.Rectangle(-117.6,-125.1,243,376), new cjs.Rectangle(-75.6,-120.1,238,352), new cjs.Rectangle(-131.6,-104.1,282,322), new cjs.Rectangle(-132.6,-121.1,310,391)];


(lib.hero2_glasses_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_glasses1_img();
	this.instance.setTransform(-79.5,-49.5);

	this.instance_1 = new lib.hero2_glasses2_img();
	this.instance_1.setTransform(-63.5,-42.5);

	this.instance_2 = new lib.hero2_glasses3_img();
	this.instance_2.setTransform(-66.5,-34.5);

	this.instance_3 = new lib.hero2_glasses4_img();
	this.instance_3.setTransform(-74.5,-30.5);

	this.instance_4 = new lib.hero2_glasses5_img();
	this.instance_4.setTransform(-80.5,-51.5);

	this.instance_5 = new lib.hero2_glasses6_img();
	this.instance_5.setTransform(-62.5,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-49.5,159,99);
p.frameBounds = [rect, new cjs.Rectangle(-63.5,-42.5,136,81), new cjs.Rectangle(-66.5,-34.5,142,80), new cjs.Rectangle(-74.5,-30.5,152,72), new cjs.Rectangle(-80.5,-51.5,156,92), new cjs.Rectangle(-62.5,-45.5,132,85), null];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-88,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-105.5,176,211);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-88,-105.5);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-115,-108.5);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-121,-130.5);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-100,-105.5);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-88,-106.5);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-94,-108.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-105.5,176,211);
p.frameBounds = [rect, new cjs.Rectangle(-115,-108.5,220,282), new cjs.Rectangle(-121,-130.5,268,366), new cjs.Rectangle(-100,-105.5,185,285), new cjs.Rectangle(-88,-106.5,175,242), new cjs.Rectangle(-94,-108.5,184,241)];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-76.5,-92.5);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-76.5,-92.5);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-76.5,-92.5);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-76.5,-92.5);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-76.5,-92.5);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-76.5,-92.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-92.5,153,185);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(-15.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.5,-20,29,60);
p.frameBounds = [rect];


(lib.hero2_earrings_back_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(16.5,-20,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.5,-20,29,60);
p.frameBounds = [rect];


(lib.hero2_earrings_back_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(20.5,-21,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(16.5,-20,1,1,0,0,180);

	this.instance_2 = new lib.hero2_earrings3_img();
	this.instance_2.setTransform(-15.5,-20);

	this.instance_3 = new lib.hero2_earrings4_img();
	this.instance_3.setTransform(22.5,-20,1,1,0,0,180);

	this.instance_4 = new lib.hero2_earrings5_img();
	this.instance_4.setTransform(-16.5,-21);

	this.instance_5 = new lib.hero2_earrings6_img();
	this.instance_5.setTransform(-5.5,-21);

	this.instance_6 = new lib.hero2_earrings7_img();
	this.instance_6.setTransform(-5.5,-21);

	this.instance_7 = new lib.hero2_earrings8_img();
	this.instance_7.setTransform(22.5,-21,1,1,0,0,180);

	this.instance_8 = new lib.hero2_earrings9_img();
	this.instance_8.setTransform(14.5,-19,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.5,-21,41,42);
p.frameBounds = [rect, new cjs.Rectangle(-12.5,-20,29,60), new cjs.Rectangle(-15.5,-20,31,51), new cjs.Rectangle(-12.5,-20,35,55), new cjs.Rectangle(-16.5,-21,36,37), new cjs.Rectangle(-5.5,-21,22,64), new cjs.Rectangle(-5.5,-21,24,72), new cjs.Rectangle(-12.5,-21,35,75), new cjs.Rectangle(-10.5,-19,25,66), null];


(lib.hero2_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(-20.5,-21);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-15.5,-20);

	this.instance_2 = new lib.hero2_earrings3_img();
	this.instance_2.setTransform(-17.5,-20);

	this.instance_3 = new lib.hero2_earrings4_img();
	this.instance_3.setTransform(-20.5,-21);

	this.instance_4 = new lib.hero2_earrings5_img();
	this.instance_4.setTransform(-16.5,-21);

	this.instance_5 = new lib.hero2_earrings6_img();
	this.instance_5.setTransform(-10.5,-21);

	this.instance_6 = new lib.hero2_earrings7_img();
	this.instance_6.setTransform(-11,-26);

	this.instance_7 = new lib.hero2_earrings8_img();
	this.instance_7.setTransform(-18,-25);

	this.instance_8 = new lib.hero2_earrings9_img();
	this.instance_8.setTransform(-12,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.5,-21,41,42);
p.frameBounds = [rect, new cjs.Rectangle(-15.5,-20,29,60), new cjs.Rectangle(-17.5,-20,31,51), new cjs.Rectangle(-20.5,-21,35,55), new cjs.Rectangle(-16.5,-21,36,37), new cjs.Rectangle(-10.5,-21,22,64), new cjs.Rectangle(-11,-26,24,72), new cjs.Rectangle(-18,-25,35,75), new cjs.Rectangle(-12,-23,25,66), null];


(lib.hero2_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-125.5,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.5,-230,254,460);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress0_img();
	this.instance.setTransform(-129.5,-230);

	this.instance_1 = new lib.hero2_dress1_img();
	this.instance_1.setTransform(-130.5,-249);

	this.instance_2 = new lib.hero2_dress2_img();
	this.instance_2.setTransform(-127.5,-253);

	this.instance_3 = new lib.hero2_dress3_img();
	this.instance_3.setTransform(-125.5,-230);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-127.5,-230);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-127.5,-230);

	this.instance_6 = new lib.hero2_dress4_img();
	this.instance_6.setTransform(-133,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.5,-230,259,460);
p.frameBounds = [rect, new cjs.Rectangle(-130.5,-249,261,481), new cjs.Rectangle(-127.5,-253,258,481), new cjs.Rectangle(-125.5,-230,254,460), new cjs.Rectangle(-127.5,-230,258,460), new cjs.Rectangle(-127.5,-230,253,460), new cjs.Rectangle(-133,-230,259,460)];


(lib.hero1_makeup_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_makeup1_img();
	this.instance.setTransform(-72.5,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.5,-89.5,145,179);
p.frameBounds = [rect];


(lib.hero1_makeup_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_makeup1_img();
	this.instance.setTransform(-72.5,-89.5);

	this.instance_1 = new lib.hero1_makeup2_img();
	this.instance_1.setTransform(-72.5,-89.5);

	this.instance_2 = new lib.hero1_makeup3_img();
	this.instance_2.setTransform(-72.5,-89.5);

	this.instance_3 = new lib.hero1_makeup4_img();
	this.instance_3.setTransform(-72.5,-89.5);

	this.instance_4 = new lib.hero1_makeup5_img();
	this.instance_4.setTransform(-72.5,-89.5);

	this.instance_5 = new lib.hero1_makeup6_img();
	this.instance_5.setTransform(-72.5,-89.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.5,-89.5,145,179);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-72.5,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.5,-89.5,145,179);
p.frameBounds = [rect];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-105,-174.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-174.1,210,185);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-105,-174.1);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-120,-190.1);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-139,-219.1);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-89,-185.1);

	this.instance_4 = new lib.hero1_hair6_img();
	this.instance_4.setTransform(-124,-161.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-174.1,210,185);
p.frameBounds = [rect, new cjs.Rectangle(-120,-190.1,244,271), new cjs.Rectangle(-139,-219.1,196,337), new cjs.Rectangle(-89,-185.1,182,347), null, new cjs.Rectangle(-124,-161.1,251,350)];


(lib.hero1_glasses_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_glasses1_img();
	this.instance.setTransform(-72,-36.5);

	this.instance_1 = new lib.hero1_glasses2_img();
	this.instance_1.setTransform(-73,-33.5);

	this.instance_2 = new lib.hero1_glasses3_img();
	this.instance_2.setTransform(-72,-36.5);

	this.instance_3 = new lib.hero1_glasses4_img();
	this.instance_3.setTransform(-71.5,-32.5);

	this.instance_4 = new lib.hero1_glasses5_img();
	this.instance_4.setTransform(-75,-36.5);

	this.instance_5 = new lib.hero1_glasses6_img();
	this.instance_5.setTransform(-75,-35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-36.5,144,73);
p.frameBounds = [rect, new cjs.Rectangle(-73,-33.5,147,67), new cjs.Rectangle(-72,-36.5,143,76), new cjs.Rectangle(-71.5,-32.5,141,67), new cjs.Rectangle(-75,-36.5,150,71), new cjs.Rectangle(-75,-35.5,150,67), null];


(lib.hero1_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-96,-160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-160.5,192,321);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-96,-160.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-69,-153.5);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-67,-160.5);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-96,-180.5);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-96,-204.5);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-107,-182.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-160.5,192,321);
p.frameBounds = [rect, new cjs.Rectangle(-69,-153.5,143,275), new cjs.Rectangle(-67,-160.5,170,301), new cjs.Rectangle(-96,-180.5,195,339), new cjs.Rectangle(-96,-204.5,192,345), new cjs.Rectangle(-107,-182.5,219,207)];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-72.5,-89.5);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-72.5,-89.5);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-72.5,-89.5);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-72.5,-89.5);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-72.5,-89.5);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-72.5,-89.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.5,-89.5,145,179);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_earrings5_img();
	this.instance.setTransform(-74,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-26.5,154,62);
p.frameBounds = [rect];


(lib.hero1_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(-80.5,-29.5);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-80.5,-29.5);

	this.instance_2 = new lib.hero1_earrings3_img();
	this.instance_2.setTransform(-78.5,-26.5);

	this.instance_3 = new lib.hero1_earrings4_img();
	this.instance_3.setTransform(-78.5,-25);

	this.instance_4 = new lib.hero1_earrings5_img();
	this.instance_4.setTransform(-74,-26.5);

	this.instance_5 = new lib.hero1_earrings6_img();
	this.instance_5.setTransform(-73.5,-29);

	this.instance_6 = new lib.hero1_earrings7_img();
	this.instance_6.setTransform(-81.5,-29.5);

	this.instance_7 = new lib.hero1_earrings8_img();
	this.instance_7.setTransform(-68,-26);

	this.instance_8 = new lib.hero1_earrings9_img();
	this.instance_8.setTransform(-74,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-29.5,161,59);
p.frameBounds = [rect, new cjs.Rectangle(-80.5,-29.5,162,44), new cjs.Rectangle(-78.5,-26.5,164,60), new cjs.Rectangle(-78.5,-25,160,53), new cjs.Rectangle(-74,-26.5,154,62), new cjs.Rectangle(-73.5,-29,150,59), new cjs.Rectangle(-81.5,-29.5,166,43), new cjs.Rectangle(-68,-26,141,47), new cjs.Rectangle(-74,-25.5,152,39), null];


(lib.hero1_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-127.6,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.6,-235,253,468);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress0_img();
	this.instance.setTransform(-126,-232);

	this.instance_1 = new lib.hero1_dress1_img();
	this.instance_1.setTransform(-127.6,-236);

	this.instance_2 = new lib.hero1_dress2_img();
	this.instance_2.setTransform(-127.6,-235);

	this.instance_3 = new lib.hero1_dress3_img();
	this.instance_3.setTransform(-126.6,-236);

	this.instance_4 = new lib.hero1_dress4_img();
	this.instance_4.setTransform(-124.6,-238);

	this.instance_5 = new lib.hero1_dress5_img();
	this.instance_5.setTransform(-125.6,-234);

	this.instance_6 = new lib.hero1_dress6_img();
	this.instance_6.setTransform(-128.6,-235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126,-232,252,464);
p.frameBounds = [rect, new cjs.Rectangle(-127.6,-236,256,468), new cjs.Rectangle(-127.6,-235,253,468), new cjs.Rectangle(-126.6,-236,252,468), new cjs.Rectangle(-124.6,-238,251,468), new cjs.Rectangle(-125.6,-234,251,468), new cjs.Rectangle(-128.6,-235,258,468)];


(lib.hairstyle_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_2_2_img();
	this.instance.setTransform(-220,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.hairstyle_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_2_1_img();
	this.instance.setTransform(-200,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.hairstyle_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_2_img();
	this.instance.setTransform(-220,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.hairstyle_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_1_img();
	this.instance.setTransform(-200,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.grass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.grass_img();
	this.instance.setTransform(-360,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-130,720,180);
p.frameBounds = [rect];


(lib.glasses_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses6_img();
	this.instance.setTransform(-66,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.glasses_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glasses6_img();
	this.instance.setTransform(-75,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.glasses_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses5_img();
	this.instance.setTransform(-78,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.glasses_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glasses5_img();
	this.instance.setTransform(-75,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.glasses_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses4_img();
	this.instance.setTransform(-76,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.glasses_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glasses4_img();
	this.instance.setTransform(-70.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.glasses_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses3_img();
	this.instance.setTransform(-71,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.glasses_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glasses3_img();
	this.instance.setTransform(-71.5,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.glasses_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses2_img();
	this.instance.setTransform(-68,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.glasses_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glasses2_img();
	this.instance.setTransform(-73.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.glasses_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses1_img();
	this.instance.setTransform(-79.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.glasses_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_glasses1_img();
	this.instance.setTransform(-72,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.girl2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl2_img();
	this.instance.setTransform(-459.5,-318.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-459.5,-318.5,903,649);
p.frameBounds = [rect];


(lib.girl2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl2_6_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,330,588);
p.frameBounds = [rect];


(lib.girl2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl2_5_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,330,588);
p.frameBounds = [rect];


(lib.girl2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl2_4_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,330,588);
p.frameBounds = [rect];


(lib.girl2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl2_3_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,330,588);
p.frameBounds = [rect];


(lib.girl2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl2_2_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,330,588);
p.frameBounds = [rect];


(lib.girl2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl2_1_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,330,588);
p.frameBounds = [rect];


(lib.girl1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_img();
	this.instance.setTransform(-443.5,-318.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-443.5,-318.5,887,637);
p.frameBounds = [rect];


(lib.girl1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_6_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,340,590);
p.frameBounds = [rect];


(lib.girl1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_5_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,340,590);
p.frameBounds = [rect];


(lib.girl1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_4_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,340,590);
p.frameBounds = [rect];


(lib.girl1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_3_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,340,590);
p.frameBounds = [rect];


(lib.girl1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_2_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,340,590);
p.frameBounds = [rect];


(lib.girl1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_1_img();
	this.instance.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-295,340,590);
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


(lib.eyes_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_check_2_2_img();
	this.instance.setTransform(-140,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.eyes_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_check_2_1_img();
	this.instance.setTransform(-135,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-135,270,270);
p.frameBounds = [rect];


(lib.eyes_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_check_1_2_img();
	this.instance.setTransform(-140,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.eyes_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_check_1_1_img();
	this.instance.setTransform(-135,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-135,270,270);
p.frameBounds = [rect];


(lib.earrings_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet2_8_img();
	this.instance.setTransform(-54,-70,0.892,0.892);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.earrings_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet1_8_img();
	this.instance.setTransform(-100,-46,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.earrings_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet2_9_img();
	this.instance.setTransform(-86.5,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuPnIAA/NMAldAAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-100,240,200);
p.frameBounds = [rect];


(lib.earrings_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet1_9_img();
	this.instance.setTransform(-64.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.earrings_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet2_7_img();
	this.instance.setTransform(-58.5,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuMgIAA4/MAldAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-86.5,240,173);
p.frameBounds = [rect];


(lib.earrings_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet1_7_img();
	this.instance.setTransform(-97,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.earrings_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet2_6_img();
	this.instance.setTransform(-74.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuMgIAA4/MAldAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-80,240,160);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet1_5_img();
	this.instance.setTransform(-80.5,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.earrings_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet2_5_img();
	this.instance.setTransform(-94.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuIlIAAxJMAldAAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-55,240,110);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet1_6_img();
	this.instance.setTransform(-87.5,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuOEIAA8HMAldAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-90,240,180);
p.frameBounds = [rect];


(lib.earrings_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet2_4_img();
	this.instance.setTransform(-76,-55,0.821,0.821);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet1_4_img();
	this.instance.setTransform(-104.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuK8IAA13MAldAAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-70,240,140);
p.frameBounds = [rect];


(lib.earrings_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet2_3_img();
	this.instance.setTransform(-67,-50,0.806,0.806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet1_3_img();
	this.instance.setTransform(-90,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuMgIAA4/MAldAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-80,240,160);
p.frameBounds = [rect];


(lib.earrings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet2_2_img();
	this.instance.setTransform(-78,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet1_2_img();
	this.instance.setTransform(-103.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.earrings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet2_1_img();
	this.instance.setTransform(-103,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuJYIAAyvMAldAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_for_closet1_1_img();
	this.instance.setTransform(-113,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.dress_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_2_2_img();
	this.instance.setTransform(-220,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.dress_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_2_1_img();
	this.instance.setTransform(-200,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.dress_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_2_img();
	this.instance.setTransform(-220,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.dress_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_1_img();
	this.instance.setTransform(-200,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.decor_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_1_1_img();
	this.instance.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-270,360,540);
p.frameBounds = [rect];


(lib.current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_1_img();
	this.instance.setTransform(-190,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-280,380,560);
p.frameBounds = [rect];


(lib.cupid_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cupid_img();
	this.instance.setTransform(-185,-265.6,0.916,0.916);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-265.6,370,531.2);
p.frameBounds = [rect];


(lib.closet3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.closet3_img();
	this.instance.setTransform(-203.5,-297.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.5,-297.5,407,595);
p.frameBounds = [rect];


(lib.circle_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle_arrow_1_img();
	this.instance.setTransform(-110,-100);

	this.instance_1 = new lib.circle_arrow_2_img();
	this.instance_1.setTransform(-110,-100);

	this.instance_2 = new lib.circle_arrow_3_img();
	this.instance_2.setTransform(-110,-100);

	this.instance_3 = new lib.circle_arrow_4_img();
	this.instance_3.setTransform(-110,-100);

	this.instance_4 = new lib.circle_arrow_5_img();
	this.instance_4.setTransform(-110,-100);

	this.instance_5 = new lib.circle_arrow_6_img();
	this.instance_5.setTransform(-110,-100);

	this.instance_6 = new lib.circle_arrow_7_img();
	this.instance_6.setTransform(-110,-100);

	this.instance_7 = new lib.circle_arrow_8_img();
	this.instance_7.setTransform(-110,-100);

	this.instance_8 = new lib.circle_arrow_9_img();
	this.instance_8.setTransform(-110,-100);

	this.instance_9 = new lib.circle_arrow_10_img();
	this.instance_9.setTransform(-110,-100);

	this.instance_10 = new lib.circle_arrow_11_img();
	this.instance_10.setTransform(-110,-100);

	this.instance_11 = new lib.circle_arrow_12_img();
	this.instance_11.setTransform(-110,-100);

	this.instance_12 = new lib.circle_arrow_13_img();
	this.instance_12.setTransform(-110,-100);

	this.instance_13 = new lib.circle_arrow_14_img();
	this.instance_13.setTransform(-110,-100);

	this.instance_14 = new lib.circle_arrow_15_img();
	this.instance_14.setTransform(-110,-100);

	this.instance_15 = new lib.circle_arrow_16_img();
	this.instance_15.setTransform(-110,-100);

	this.instance_16 = new lib.circle_arrow_17_img();
	this.instance_16.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[]},2).wait(2));

	// graph
	this.instance_17 = new lib.circle_arrow_0_img();
	this.instance_17.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-110,240,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.checkpoint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgHzAnEMAAAhOHIPnAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-250,100,500);
p.frameBounds = [rect];


(lib.bow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bow_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-245,-180);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-245,-180);

	this.instance_2 = new lib.title_tr_img();
	this.instance_2.setTransform(-245,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-180,490,360);
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


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.arc_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.arc_arrow_1_img();
	this.instance.setTransform(-110,-80);

	this.instance_1 = new lib.arc_arrow_2_img();
	this.instance_1.setTransform(-110,-80);

	this.instance_2 = new lib.arc_arrow_3_img();
	this.instance_2.setTransform(-110,-80);

	this.instance_3 = new lib.arc_arrow_4_img();
	this.instance_3.setTransform(-110,-80);

	this.instance_4 = new lib.arc_arrow_5_img();
	this.instance_4.setTransform(-110,-80);

	this.instance_5 = new lib.arc_arrow_6_img();
	this.instance_5.setTransform(-110,-80);

	this.instance_6 = new lib.arc_arrow_7_img();
	this.instance_6.setTransform(-110,-80);

	this.instance_7 = new lib.arc_arrow_8_img();
	this.instance_7.setTransform(-110,-80);

	this.instance_8 = new lib.arc_arrow_9_img();
	this.instance_8.setTransform(-110,-80);

	this.instance_9 = new lib.arc_arrow_10_img();
	this.instance_9.setTransform(-110,-80);

	this.instance_10 = new lib.arc_arrow_11_img();
	this.instance_10.setTransform(-110,-80);

	this.instance_11 = new lib.arc_arrow_12_img();
	this.instance_11.setTransform(-110,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[]},2).wait(2));

	// graph
	this.instance_12 = new lib.arc_arrow_0_img();
	this.instance_12.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-90,240,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("Eh+jAwcMAAAhg2MD9GAAAMAAABg2g");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
	this.instance.setTransform(-12,-12);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-12,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect, rect, rect];


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


(lib.gravity_big_explosion_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_19_img();
	this.instance.setTransform(-9,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-9,18,18);
p.frameBounds = [rect];


(lib.gravity_big_explosion_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_18_img();
	this.instance.setTransform(-55,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-35,110,70);
p.frameBounds = [rect];


(lib.gravity_big_explosion_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_17_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.gravity_big_explosion_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_16_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.gravity_big_explosion_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_15_img();
	this.instance.setTransform(-55,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-30,110,60);
p.frameBounds = [rect];


(lib.gravity_big_explosion_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_14_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.gravity_big_explosion_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_13_img();
	this.instance.setTransform(-65,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-30,130,60);
p.frameBounds = [rect];


(lib.gravity_big_explosion_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_12_img();
	this.instance.setTransform(-45,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-35,90,70);
p.frameBounds = [rect];


(lib.gravity_big_explosion_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_11_img();
	this.instance.setTransform(-65,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-30,130,60);
p.frameBounds = [rect];


(lib.gravity_big_explosion_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_10_img();
	this.instance.setTransform(-65,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-35,130,70);
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


(lib.nav_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_3_img();
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


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.nav_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_3_img();
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


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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


(lib.bg_small_buttons_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_small_buttons_2_img();
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


(lib.wardrobe_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.wardrobe_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-300,430,600);
p.frameBounds = [rect];


(lib.wardrobe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.wardrobe_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-310,400,620);
p.frameBounds = [rect];


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-295,430,590);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-295,420,590);
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
p.nominalBounds = rect = new cjs.Rectangle(-245,-180,490,360);
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


(lib.masseuse_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.masseuse_0_2_mc();
	this.instance.setTransform(5,0);

	this.instance_1 = new lib.masseuse_1_2_mc();
	this.instance_1.setTransform(-3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-295,-450,600,900);
p.frameBounds = [rect, rect, new cjs.Rectangle(-303,-450,600,900)];


(lib.masseuse_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.masseuse_1_1_mc();

	this.instance_1 = new lib.masseuse_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},49).to({state:[{t:this.instance_1}]},2).to({state:[]},3).wait(46));

	// body
	this.instance_2 = new lib.masseuse_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-400,400,800);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(80));

	// animation
	this.instance = new lib.item23_mc();
	this.instance.setTransform(190.4,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-212.6,y:79},10).wait(7).to({x:-211.6,y:-15},16).to({rotation:25.7,x:-154.9,y:-15.6},17).to({x:-199.9,y:64.4},17).to({rotation:-5.2,x:-232.5,y:134.4},13).wait(1));

	// animation
	this.instance_1 = new lib.light1_mc();
	this.instance_1.setTransform(-174.7,46.7,0.664,0.664);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1},7).to({x:-173.7,y:-47.3},16).to({rotation:25.7,x:-106.7,y:-28.3},17).to({x:-151.7,y:51.7},17).to({scaleX:0.61,scaleY:0.61,rotation:-5.2,x:-197.7,y:98.7},13).wait(1));

	// animation
	this.instance_2 = new lib.closet3_mc();
	this.instance_2.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:694.5,alpha:0.012},10).to({_off:true},1).wait(70));

	// animation
	this.instance_3 = new lib.girl2_5_mc();
	this.instance_3.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, new cjs.Rectangle(-294.6,-290.1,750.8,595), new cjs.Rectangle(-294.6,-290.1,799.8,595), new cjs.Rectangle(-294.6,-290.1,849,595), new cjs.Rectangle(-294.6,-290.1,898.1,595), new cjs.Rectangle(-294.6,-290.1,947.1,595), new cjs.Rectangle(-294.6,-290.1,996.2,595), new cjs.Rectangle(-294.6,-290.1,1045.3,595), new cjs.Rectangle(-294.6,-290.1,1094.4,595), new cjs.Rectangle(-294.6,-290.1,1143.5,595), new cjs.Rectangle(-300.1,-290.1,1198.1,595), new cjs.Rectangle(-308.8,-288.6,344.2,588), new cjs.Rectangle(-317.9,-288.6,353.3,588), new cjs.Rectangle(-327,-288.6,362.4,588), new cjs.Rectangle(-336,-288.6,371.4,588), new cjs.Rectangle(-345,-288.6,380.4,588), new cjs.Rectangle(-354.1,-288.6,389.5,588), rect=new cjs.Rectangle(-363.2,-288.6,398.6,588), rect, new cjs.Rectangle(-363.1,-288.6,398.5,588), rect=new cjs.Rectangle(-363,-288.6,398.4,588), rect, new cjs.Rectangle(-362.9,-288.6,398.3,588), rect=new cjs.Rectangle(-362.8,-288.6,398.2,588), rect, rect=new cjs.Rectangle(-362.7,-288.6,398.1,588), rect, new cjs.Rectangle(-362.6,-288.6,398,588), rect=new cjs.Rectangle(-362.5,-288.6,397.9,588), rect, new cjs.Rectangle(-362.4,-288.6,397.8,588), rect=new cjs.Rectangle(-362.3,-288.6,397.7,588), rect, new cjs.Rectangle(-362.2,-288.6,397.6,588), rect=new cjs.Rectangle(-362.4,-288.6,397.8,588), rect, new cjs.Rectangle(-362.4,-288.6,401,588), new cjs.Rectangle(-362.1,-288.6,408.4,588), new cjs.Rectangle(-361.8,-288.6,415.6,588), new cjs.Rectangle(-361.3,-288.6,422.5,588), new cjs.Rectangle(-360.6,-288.6,429.1,588), new cjs.Rectangle(-359.8,-288.6,435.3,588), new cjs.Rectangle(-358.9,-288.6,441.4,588), new cjs.Rectangle(-357.8,-288.6,447.1,588), new cjs.Rectangle(-356.6,-288.6,452.4,588), new cjs.Rectangle(-355.2,-288.6,457.5,588), new cjs.Rectangle(-353.6,-288.6,462.3,588), new cjs.Rectangle(-351.8,-288.6,466.7,588), new cjs.Rectangle(-350,-288.6,470.8,588), new cjs.Rectangle(-347.9,-288.6,474.6,588), new cjs.Rectangle(-346.2,-288.6,478.9,588), new cjs.Rectangle(-348.4,-288.6,478.1,588), new cjs.Rectangle(-351,-288.6,478.1,588), new cjs.Rectangle(-353.7,-288.6,478.1,588), new cjs.Rectangle(-356.3,-288.6,478.1,588), new cjs.Rectangle(-359,-288.6,478.1,588), new cjs.Rectangle(-361.6,-288.6,478.1,588), new cjs.Rectangle(-364.3,-288.6,478.1,588), new cjs.Rectangle(-366.9,-288.6,478.1,588), new cjs.Rectangle(-369.5,-288.6,478.1,588), new cjs.Rectangle(-372.2,-288.6,478.1,588), new cjs.Rectangle(-374.8,-288.6,478.1,588), new cjs.Rectangle(-377.5,-288.6,478.1,588), new cjs.Rectangle(-380.1,-288.6,478.1,588), new cjs.Rectangle(-382.8,-288.6,478.1,588), new cjs.Rectangle(-385.4,-288.6,478.1,588), new cjs.Rectangle(-388.1,-288.6,478.1,588), new cjs.Rectangle(-391.2,-288.6,478.9,588), new cjs.Rectangle(-384.5,-288.6,458.5,588), new cjs.Rectangle(-377.8,-288.6,438,588), new cjs.Rectangle(-371.2,-288.6,417.7,588), new cjs.Rectangle(-364.1,-288.6,399.5,588), new cjs.Rectangle(-357.3,-288.6,392.7,588), new cjs.Rectangle(-350.2,-288.6,385.6,588), new cjs.Rectangle(-343.2,-288.6,378.6,588), new cjs.Rectangle(-336.1,-288.6,371.5,588), new cjs.Rectangle(-329.4,-288.6,364.8,588), new cjs.Rectangle(-322.4,-288.6,357.8,588), new cjs.Rectangle(-317.4,-288.6,352.8,588), new cjs.Rectangle(-320.6,-288.6,356,588), new cjs.Rectangle(-325.8,-288.6,361.2,588)];


(lib.makeup2_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item22_mc();
	this.instance.setTransform(176.2,156.5,0.856,0.856);

	this.instance_1 = new lib.item23_mc();
	this.instance_1.setTransform(190.4,145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// animation
	this.instance_2 = new lib.closet3_mc();
	this.instance_2.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// animation
	this.instance_3 = new lib.girl2_5_mc();
	this.instance_3.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect];


(lib.makeup2_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item18_mc();
	this.instance.setTransform(260,11,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-42,y:151},9).to({x:-112,y:160},13).to({x:-169,y:103.1},13).to({x:-73,y:110.1},12).to({x:-68,y:-4.9},14).to({x:-168,y:-6.9},15).to({x:-315,y:429},12).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.item22_mc();
	this.instance_1.setTransform(176.2,156.5,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// animation
	this.instance_2 = new lib.closet3_mc();
	this.instance_2.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// animation
	this.instance_3 = new lib.girl2_5_mc();
	this.instance_3.setTransform(-124.6,6.4);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({alpha:1},67).wait(14));

	// animation
	this.instance_4 = new lib.girl2_4_mc();
	this.instance_4.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},76).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-298,-290.1,705.1,595), new cjs.Rectangle(-310.3,-290.1,717.3,616.3), new cjs.Rectangle(-322.5,-290.1,729.6,652.6), new cjs.Rectangle(-334.8,-290.1,741.8,688.9), new cjs.Rectangle(-347,-290.1,754.1,725.2), new cjs.Rectangle(-359.3,-290.1,766.3,761.6), new cjs.Rectangle(-371.5,-290.1,778.6,797.8), new cjs.Rectangle(-383.9,-290.1,790.9,834.3), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup2_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item20_mc();
	this.instance.setTransform(260,11,0.856,0.856);

	this.instance_1 = new lib.item18_mc();
	this.instance_1.setTransform(260,11,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// animation
	this.instance_2 = new lib.item22_mc();
	this.instance_2.setTransform(176.2,156.5,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// animation
	this.instance_3 = new lib.closet3_mc();
	this.instance_3.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// animation
	this.instance_4 = new lib.girl2_4_mc();
	this.instance_4.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect];


(lib.makeup2_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item17_mc();
	this.instance.setTransform(140.8,-43.7,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// animation
	this.instance_1 = new lib.item20_mc();
	this.instance_1.setTransform(260,11,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.item22_mc();
	this.instance_2.setTransform(176.2,156.5,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.item13_mc();
	this.instance_3.setTransform(-74.8,4.6,0.838,0.838,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:44.9,x:10.2,y:86.5,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.item13_mc();
	this.instance_4.setTransform(-191.5,5.9,0.838,0.838,0,-26.6,153.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:-42.1,skewY:137.9,x:-271.5,y:82.6,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_5 = new lib.closet3_mc();
	this.instance_5.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.girl2_2_mc();
	this.instance_6.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-296.9,-290.1,703.9,595), new cjs.Rectangle(-303,-290.1,710.1,595), new cjs.Rectangle(-309.2,-290.1,716.2,595), new cjs.Rectangle(-315.3,-290.1,722.3,595), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup2_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
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
	this.frame_15 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(14).call(this.frame_15).wait(19));

	// animation
	this.instance = new lib.item17_mc();
	this.instance.setTransform(573.7,-43.7,0.856,0.856);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:140.8,alpha:1},18).wait(1));

	// animation
	this.instance_1 = new lib.item20_mc();
	this.instance_1.setTransform(693,11,0.856,0.856);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({x:260,alpha:1},18).wait(1));

	// animation
	this.instance_2 = new lib.item22_mc();
	this.instance_2.setTransform(609.1,156.5,0.856,0.856);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({x:176.2,alpha:1},18).wait(1));

	// animation
	this.instance_3 = new lib.item13_mc();
	this.instance_3.setTransform(-52.6,133.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.84,scaleY:0.84,rotation:21.7,x:-74.8,y:4.6},14).wait(20));

	// animation
	this.instance_4 = new lib.item13_mc();
	this.instance_4.setTransform(-189.6,133.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.84,scaleY:0.84,skewX:-26.6,skewY:153.4,x:-191.5,y:5.9},14).wait(20));

	// animation
	this.instance_5 = new lib.closet3_mc();
	this.instance_5.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:655.5,alpha:0.012},14).to({x:636.5},1).to({x:203.5,alpha:1},18).wait(1));

	// animation
	this.instance_6 = new lib.girl2_2_mc();
	this.instance_6.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, new cjs.Rectangle(-294.6,-290.1,734,595), new cjs.Rectangle(-294.6,-290.1,766.2,595), new cjs.Rectangle(-294.6,-290.1,798.5,595), new cjs.Rectangle(-294.6,-290.1,830.8,595), new cjs.Rectangle(-294.6,-290.1,863.1,595), new cjs.Rectangle(-294.6,-290.1,895.4,595), new cjs.Rectangle(-294.6,-290.1,927.7,595), new cjs.Rectangle(-294.6,-290.1,959.9,595), new cjs.Rectangle(-294.6,-290.1,992.2,595), new cjs.Rectangle(-294.6,-290.1,1024.4,595), new cjs.Rectangle(-294.6,-290.1,1056.8,595), new cjs.Rectangle(-294.6,-290.1,1089.1,595), new cjs.Rectangle(-294.6,-290.1,1121.3,595), new cjs.Rectangle(-294.6,-290.1,1153.6,595), new cjs.Rectangle(-294.6,-290.1,1134.6,595), new cjs.Rectangle(-294.6,-290.1,1110.6,595), new cjs.Rectangle(-294.6,-290.1,1086.5,595), new cjs.Rectangle(-294.6,-290.1,1062.4,595), new cjs.Rectangle(-294.6,-290.1,1038.4,595), new cjs.Rectangle(-294.6,-290.1,1014.4,595), new cjs.Rectangle(-294.6,-290.1,990.3,595), new cjs.Rectangle(-294.6,-290.1,966.3,595), new cjs.Rectangle(-294.6,-290.1,942.2,595), new cjs.Rectangle(-294.6,-290.1,918.2,595), new cjs.Rectangle(-294.6,-290.1,894.1,595), new cjs.Rectangle(-294.6,-290.1,870,595), new cjs.Rectangle(-294.6,-290.1,846,595), new cjs.Rectangle(-294.6,-290.1,821.9,595), new cjs.Rectangle(-294.6,-290.1,797.8,595), new cjs.Rectangle(-294.6,-290.1,773.8,595), new cjs.Rectangle(-294.6,-290.1,749.8,595), new cjs.Rectangle(-294.6,-290.1,725.7,595), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup2_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item9_mc();
	this.instance.setTransform(-78,-37.6,1,1.133);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:113,y:10.4,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.item9_mc();
	this.instance_1.setTransform(-191.6,-36.7,1,1.133);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-380.6,y:5.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.item13_mc();
	this.instance_2.setTransform(264.4,159.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-52.6,y:133.4},14).wait(1));

	// animation
	this.instance_3 = new lib.item13_mc();
	this.instance_3.setTransform(147.4,158.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-189.6,y:133.4},14).wait(1));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.girl2_2_mc();
	this.instance_5.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-307.3,-290.1,714.3,595), new cjs.Rectangle(-321.8,-290.1,728.9,595), new cjs.Rectangle(-336.4,-290.1,743.4,595), new cjs.Rectangle(-350.9,-290.1,758,595), new cjs.Rectangle(-365.4,-290.1,772.5,595), new cjs.Rectangle(-380,-290.1,787,595), new cjs.Rectangle(-394.5,-290.1,801.6,595), new cjs.Rectangle(-409,-290.1,816.1,595), new cjs.Rectangle(-423.6,-290.1,830.6,595), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup2_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item9_mc();
	this.instance.setTransform(-35,119.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.13,x:-78,y:-37.6},14).wait(1));

	// animation
	this.instance_1 = new lib.item9_mc();
	this.instance_1.setTransform(-213.6,126.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.13,x:-191.6,y:-36.7},14).wait(1));

	// animation
	this.instance_2 = new lib.item14_mc();
	this.instance_2.setTransform(209.4,183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.closet3_mc();
	this.instance_3.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.girl2_2_mc();
	this.instance_4.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item9_mc();
	this.instance.setTransform(245,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-35,y:119.4},19).wait(1));

	// animation
	this.instance_1 = new lib.item9_mc();
	this.instance_1.setTransform(168.4,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-213.6,y:126.4},19).wait(1));

	// animation
	this.instance_2 = new lib.item14_mc();
	this.instance_2.setTransform(209.4,183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.closet3_mc();
	this.instance_3.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.girl2_2_mc();
	this.instance_4.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item16_mc();
	this.instance.setTransform(-250.6,425,1,1,0,109.4,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-275.6,y:88},9).to({x:-206.6,y:-30},14).to({x:-127.6,y:-23},11).to({x:-79.6,y:46},14).to({x:-100.6,y:102},14).to({x:-216.6,y:107},12).to({x:-160.6,y:161},8).to({x:-101.6,y:108},7).to({x:-81.6,y:419},9).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.item14_mc();
	this.instance_1.setTransform(209.4,183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// animation
	this.instance_2 = new lib.item10_mc();
	this.instance_2.setTransform(207.4,59.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// animation
	this.instance_3 = new lib.closet3_mc();
	this.instance_3.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// animation
	this.instance_4 = new lib.girl2_2_mc();
	this.instance_4.setTransform(-124.6,6.4);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({alpha:1},80).wait(11));

	// animation
	this.instance_5 = new lib.girl2_1_mc();
	this.instance_5.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315.1,-290.1,722.1,831.2);
p.frameBounds = [rect, new cjs.Rectangle(-317.7,-290.1,724.7,793.6), new cjs.Rectangle(-320.4,-290.1,727.5,756.2), new cjs.Rectangle(-323.2,-290.1,730.3,718.8), new cjs.Rectangle(-326,-290.1,733,681.3), new cjs.Rectangle(-328.8,-290.1,735.8,643.8), new cjs.Rectangle(-331.5,-290.1,738.6,606.4), new cjs.Rectangle(-334.3,-290.1,741.4,595), new cjs.Rectangle(-337.1,-290.1,744.1,595), new cjs.Rectangle(-340.1,-290.1,747.1,595), new cjs.Rectangle(-334.9,-290.1,742,595), new cjs.Rectangle(-330,-290.1,737.1,595), new cjs.Rectangle(-325.1,-290.1,732.1,595), new cjs.Rectangle(-320.2,-290.1,727.2,595), new cjs.Rectangle(-315.2,-290.1,722.3,595), new cjs.Rectangle(-310.3,-290.1,717.4,595), new cjs.Rectangle(-305.4,-290.1,712.4,595), new cjs.Rectangle(-300.4,-290.1,707.5,595), new cjs.Rectangle(-295.5,-290.1,702.6,595), rect=new cjs.Rectangle(-294.6,-290.1,701.7,595), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-294.6,-290.1,701.7,617.8), new cjs.Rectangle(-294.6,-290.1,701.7,652.3), new cjs.Rectangle(-294.6,-290.1,701.7,686.8), new cjs.Rectangle(-294.6,-290.1,701.7,721.4), new cjs.Rectangle(-294.6,-290.1,701.7,756), new cjs.Rectangle(-294.6,-290.1,701.7,790.5), new cjs.Rectangle(-294.6,-290.1,701.7,825.2), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
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
	this.frame_25 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(22));

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(-71.6,9.8,0.492,0.492);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:657.6},24).to({_off:true},1).wait(22));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(-81.8,-15.9,0.489,0.489);

	this.instance_2 = new lib.item14_mc();
	this.instance_2.setTransform(655.3,183.3);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:631.9},24).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).to({x:209.4,alpha:1},14).to({x:202.4},3).to({x:209.4},3).wait(1));

	// animation
	this.instance_3 = new lib.item3_mc();
	this.instance_3.setTransform(-133.1,9.1,0.547,0.547);

	this.instance_4 = new lib.item10_mc();
	this.instance_4.setTransform(653.3,59.4);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:656.9},24).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({x:207.4,alpha:1},14).to({x:200.4},3).to({x:207.4},3).wait(1));

	// animation
	this.instance_5 = new lib.item2_mc();
	this.instance_5.setTransform(-136.7,-17.6,0.377,0.377,3);

	this.instance_6 = new lib.item7_mc();
	this.instance_6.setTransform(637,-83);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:630.1},24).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).to({x:191,alpha:1},14).to({x:184},3).to({x:191},3).wait(1));

	// animation
	this.instance_7 = new lib.girl2_mc();
	this.instance_7.setTransform(-108.6,117.4);

	this.instance_8 = new lib.closet3_mc();
	this.instance_8.setTransform(649.5,7.4);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:765.2},24).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({x:203.5,alpha:1},14).to({x:196.5},3).to({x:203.5},3).wait(1));

	// animation
	this.instance_9 = new lib.cupid_mc();
	this.instance_9.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.instance_10 = new lib.girl2_1_mc();
	this.instance_10.setTransform(-124.6,576.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:613.8},24).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(26).to({_off:false},0).to({y:6.4},14).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-568.1,-339.8,903,787.7);
p.frameBounds = [rect, new cjs.Rectangle(-568.1,-312.8,903,787.7), new cjs.Rectangle(-568.1,-285.8,903,787.7), new cjs.Rectangle(-568.1,-258.8,903,787.7), new cjs.Rectangle(-568.1,-231.8,903,787.7), new cjs.Rectangle(-568.1,-204.9,903,787.8), new cjs.Rectangle(-568.1,-177.9,903,787.8), new cjs.Rectangle(-568.1,-150.9,903,787.8), new cjs.Rectangle(-568.1,-123.9,903,787.8), new cjs.Rectangle(-568.1,-96.9,903,787.8), new cjs.Rectangle(-568.1,-69.9,903,787.8), new cjs.Rectangle(-568.1,-42.9,903,787.8), new cjs.Rectangle(-568.1,-16,903,787.8), new cjs.Rectangle(-568.1,11,903,787.8), new cjs.Rectangle(-568.1,38,903,787.8), new cjs.Rectangle(-568.1,65,903,787.8), new cjs.Rectangle(-568.1,92,903,787.8), new cjs.Rectangle(-568.1,118.9,903,787.8), new cjs.Rectangle(-568.1,145.9,903,787.8), new cjs.Rectangle(-568.1,172.9,903,787.8), new cjs.Rectangle(-568.1,199.9,903,787.8), new cjs.Rectangle(-568.1,226.9,903,787.8), new cjs.Rectangle(-568.1,253.9,903,787.8), new cjs.Rectangle(-568.1,280.9,903,787.8), new cjs.Rectangle(-568.1,308,903,787.7), null, new cjs.Rectangle(-294.6,-290.1,1147.6,1159.4), new cjs.Rectangle(-294.6,-290.1,1115.8,1118.8), new cjs.Rectangle(-294.6,-290.1,1083.9,1078.1), new cjs.Rectangle(-294.6,-290.1,1052.1,1037.3), new cjs.Rectangle(-294.6,-290.1,1020.2,996.6), new cjs.Rectangle(-294.6,-290.1,988.4,955.9), new cjs.Rectangle(-294.6,-290.1,956.5,915.2), new cjs.Rectangle(-294.6,-290.1,924.6,874.5), new cjs.Rectangle(-294.6,-290.1,892.8,833.8), new cjs.Rectangle(-294.6,-290.1,860.9,793.1), new cjs.Rectangle(-294.6,-290.1,829.1,752.3), new cjs.Rectangle(-294.6,-290.1,797.2,711.7), new cjs.Rectangle(-294.6,-290.1,765.3,670.9), new cjs.Rectangle(-294.6,-290.1,733.5,630.2), new cjs.Rectangle(-294.6,-290.1,701.7,595), new cjs.Rectangle(-294.6,-290.1,699.3,595), new cjs.Rectangle(-294.6,-290.1,697,595), new cjs.Rectangle(-294.6,-290.1,694.7,595), new cjs.Rectangle(-294.6,-290.1,697,595), new cjs.Rectangle(-294.6,-290.1,699.3,595), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(250.4,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.49,scaleY:0.49,x:-71.6,y:9.8},19).wait(1));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(-81.8,-15.9,0.489,0.489);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// animation
	this.instance_2 = new lib.item3_mc();
	this.instance_2.setTransform(-133.1,9.1,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.item2_mc();
	this.instance_3.setTransform(-136.7,-17.6,0.377,0.377,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:602.5,alpha:0.012},19).wait(1));

	// animation
	this.instance_5 = new lib.girl2_mc();
	this.instance_5.setTransform(-108.6,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.cupid_mc();
	this.instance_6.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-568.1,-339.8,975.2,787.7);
p.frameBounds = [rect, new cjs.Rectangle(-568.1,-339.8,996.2,787.7), new cjs.Rectangle(-568.1,-339.8,1017.2,787.7), new cjs.Rectangle(-568.1,-339.8,1038.2,787.7), new cjs.Rectangle(-568.1,-339.8,1059.2,787.7), new cjs.Rectangle(-568.1,-339.8,1080.2,787.7), new cjs.Rectangle(-568.1,-339.8,1101.2,787.7), new cjs.Rectangle(-568.1,-339.8,1122.2,787.7), new cjs.Rectangle(-568.1,-339.8,1143.2,787.7), new cjs.Rectangle(-568.1,-339.8,1164.2,787.7), new cjs.Rectangle(-568.1,-339.8,1185.2,787.7), new cjs.Rectangle(-568.1,-339.8,1206.2,787.7), new cjs.Rectangle(-568.1,-339.8,1227.2,787.7), new cjs.Rectangle(-568.1,-339.8,1248.2,787.7), new cjs.Rectangle(-568.1,-339.8,1269.2,787.7), new cjs.Rectangle(-568.1,-339.8,1290.2,787.7), new cjs.Rectangle(-568.1,-339.8,1311.2,787.7), new cjs.Rectangle(-568.1,-339.8,1332.2,787.7), new cjs.Rectangle(-568.1,-339.8,1353.2,787.7), new cjs.Rectangle(-568.1,-339.8,1374.2,787.7)];


(lib.makeup2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(250.4,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(139.4,72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.49,scaleY:0.49,x:-81.8,y:-15.9},19).wait(1));

	// animation
	this.instance_2 = new lib.item3_mc();
	this.instance_2.setTransform(-133.1,9.1,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.item2_mc();
	this.instance_3.setTransform(-136.7,-17.6,0.377,0.377,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.girl2_mc();
	this.instance_5.setTransform(-108.6,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.cupid_mc();
	this.instance_6.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-568.1,-339.8,975.2,787.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(250.4,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(139.4,72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// animation
	this.instance_2 = new lib.item3_mc();
	this.instance_2.setTransform(268.9,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.55,scaleY:0.55,x:-133.1,y:9.1},19).wait(1));

	// animation
	this.instance_3 = new lib.item2_mc();
	this.instance_3.setTransform(-136.7,-17.6,0.377,0.377,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.girl2_mc();
	this.instance_5.setTransform(-108.6,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.cupid_mc();
	this.instance_6.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-568.1,-339.8,975.2,787.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(250.4,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(139.4,72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// animation
	this.instance_2 = new lib.item3_mc();
	this.instance_2.setTransform(268.9,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.item2_mc();
	this.instance_3.setTransform(146.4,-86.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.38,scaleY:0.38,rotation:3,x:-136.7,y:-17.6},19).wait(1));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.girl2_mc();
	this.instance_5.setTransform(-108.6,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.cupid_mc();
	this.instance_6.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-568.1,-339.8,975.2,787.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(202.5,18.3,0.675,0.675);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:250.4,y:154.3,alpha:1},16).wait(1));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(202.5,22.4,0.675,0.675);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:139.4,y:72.1,alpha:1},16).wait(1));

	// animation
	this.instance_2 = new lib.item3_mc();
	this.instance_2.setTransform(205.8,23.3,0.675,0.675);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:268.9,y:4.1,alpha:1},16).wait(1));

	// animation
	this.instance_3 = new lib.item2_mc();
	this.instance_3.setTransform(205.9,19.3,0.675,0.675);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:146.4,y:-86.6,alpha:1},16).wait(1));

	// animation
	this.instance_4 = new lib.item1_mc();
	this.instance_4.setTransform(211.4,-26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.45,scaleY:0.45,alpha:0.012},13).to({_off:true},1).wait(16));

	// animation
	this.instance_5 = new lib.closet3_mc();
	this.instance_5.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// animation
	this.instance_6 = new lib.girl2_mc();
	this.instance_6.setTransform(-108.6,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// animation
	this.instance_7 = new lib.cupid_mc();
	this.instance_7.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-568.1,-339.8,975.2,787.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(24));

	// animation
	this.instance = new lib.item1_mc();
	this.instance.setTransform(655.3,-26.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:211.4,alpha:1},19).to({x:196.4},3).to({x:211.4},2).wait(1));

	// animation
	this.instance_1 = new lib.closet3_mc();
	this.instance_1.setTransform(647.5,7.4);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:203.5,alpha:1},19).to({x:188.5},3).to({x:203.5},2).wait(1));

	// animation
	this.instance_2 = new lib.girl2_mc();
	this.instance_2.setTransform(-108.6,770.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:117.4},19).to({y:106.4},3).to({y:117.4},2).wait(1));

	// animation
	this.instance_3 = new lib.cupid_mc();
	this.instance_3.setTransform(9.4,618.9,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-34},19).to({y:-45},3).to({y:-34},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-568.1,-290.1,1419.1,1390.9);
p.frameBounds = [rect, new cjs.Rectangle(-568.1,-290.1,1395.8,1356.6), new cjs.Rectangle(-568.1,-290.1,1372.4,1322.2), new cjs.Rectangle(-568.1,-290.1,1349,1287.9), new cjs.Rectangle(-568.1,-290.1,1325.7,1253.5), new cjs.Rectangle(-568.1,-290.1,1302.3,1219.2), new cjs.Rectangle(-568.1,-290.1,1278.9,1184.8), new cjs.Rectangle(-568.1,-290.1,1255.6,1150.4), new cjs.Rectangle(-568.1,-290.1,1232.2,1116.1), new cjs.Rectangle(-568.1,-290.1,1208.8,1081.7), new cjs.Rectangle(-568.1,-290.1,1185.4,1047.3), new cjs.Rectangle(-568.1,-290.1,1162.1,1013), new cjs.Rectangle(-568.1,-290.1,1138.7,978.6), new cjs.Rectangle(-568.1,-290.1,1115.4,944.3), new cjs.Rectangle(-568.1,-290.1,1092,909.9), new cjs.Rectangle(-568.1,-290.1,1068.6,875.5), new cjs.Rectangle(-568.1,-290.1,1045.3,841.2), new cjs.Rectangle(-568.1,-290.1,1021.9,806.8), new cjs.Rectangle(-568.1,-305.4,998.5,787.7), new cjs.Rectangle(-568.1,-339.8,975.2,787.7), new cjs.Rectangle(-568.1,-343.4,970.2,787.7), new cjs.Rectangle(-568.1,-347.1,965.2,787.7), new cjs.Rectangle(-568.1,-350.8,960.2,787.7), new cjs.Rectangle(-568.1,-345.2,967.7,787.7), new cjs.Rectangle(-568.1,-339.8,975.2,787.7)];


(lib.makeup1_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(80));

	// animation
	this.instance = new lib.item23_mc();
	this.instance.setTransform(190.4,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-212.6,y:79},10).wait(7).to({x:-211.6,y:-15},16).to({rotation:25.7,x:-154.9,y:-15.6},17).to({x:-199.9,y:64.4},17).to({rotation:-5.2,x:-232.5,y:134.4},13).wait(1));

	// animation
	this.instance_1 = new lib.light1_mc();
	this.instance_1.setTransform(-174.7,46.7,0.664,0.664);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1},7).to({x:-173.7,y:-47.3},16).to({rotation:25.7,x:-106.7,y:-28.3},17).to({x:-151.7,y:51.7},17).to({scaleX:0.61,scaleY:0.61,rotation:-5.2,x:-197.7,y:98.7},13).wait(1));

	// animation
	this.instance_2 = new lib.closet3_mc();
	this.instance_2.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:694.5,alpha:0.012},10).to({_off:true},1).wait(70));

	// animation
	this.instance_3 = new lib.girl1_5_mc();
	this.instance_3.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, new cjs.Rectangle(-294.6,-290.1,750.8,595), new cjs.Rectangle(-294.6,-290.1,799.8,595), new cjs.Rectangle(-294.6,-290.1,849,595), new cjs.Rectangle(-294.6,-290.1,898.1,595), new cjs.Rectangle(-294.6,-290.1,947.1,595), new cjs.Rectangle(-294.6,-290.1,996.2,595), new cjs.Rectangle(-294.6,-290.1,1045.3,595), new cjs.Rectangle(-294.6,-290.1,1094.4,595), new cjs.Rectangle(-294.6,-290.1,1143.5,595), new cjs.Rectangle(-300.1,-290.1,1198.1,595), new cjs.Rectangle(-308.8,-288.6,354.2,590), new cjs.Rectangle(-317.9,-288.6,363.3,590), new cjs.Rectangle(-327,-288.6,372.4,590), new cjs.Rectangle(-336,-288.6,381.4,590), new cjs.Rectangle(-345,-288.6,390.4,590), new cjs.Rectangle(-354.1,-288.6,399.5,590), rect=new cjs.Rectangle(-363.2,-288.6,408.6,590), rect, new cjs.Rectangle(-363.1,-288.6,408.5,590), rect=new cjs.Rectangle(-363,-288.6,408.4,590), rect, new cjs.Rectangle(-362.9,-288.6,408.3,590), rect=new cjs.Rectangle(-362.8,-288.6,408.2,590), rect, rect=new cjs.Rectangle(-362.7,-288.6,408.1,590), rect, new cjs.Rectangle(-362.6,-288.6,408,590), rect=new cjs.Rectangle(-362.5,-288.6,407.9,590), rect, new cjs.Rectangle(-362.4,-288.6,407.8,590), rect=new cjs.Rectangle(-362.3,-288.6,407.7,590), rect, new cjs.Rectangle(-362.2,-288.6,407.6,590), rect=new cjs.Rectangle(-362.4,-288.6,407.8,590), rect, rect, new cjs.Rectangle(-362.1,-288.6,408.4,590), new cjs.Rectangle(-361.8,-288.6,415.6,590), new cjs.Rectangle(-361.3,-288.6,422.5,590), new cjs.Rectangle(-360.6,-288.6,429.1,590), new cjs.Rectangle(-359.8,-288.6,435.3,590), new cjs.Rectangle(-358.9,-288.6,441.4,590), new cjs.Rectangle(-357.8,-288.6,447.1,590), new cjs.Rectangle(-356.6,-288.6,452.4,590), new cjs.Rectangle(-355.2,-288.6,457.5,590), new cjs.Rectangle(-353.6,-288.6,462.3,590), new cjs.Rectangle(-351.8,-288.6,466.7,590), new cjs.Rectangle(-350,-288.6,470.8,590), new cjs.Rectangle(-347.9,-288.6,474.6,590), new cjs.Rectangle(-346.2,-288.6,478.9,590), new cjs.Rectangle(-348.4,-288.6,478.1,590), new cjs.Rectangle(-351,-288.6,478.1,590), new cjs.Rectangle(-353.7,-288.6,478.1,590), new cjs.Rectangle(-356.3,-288.6,478.1,590), new cjs.Rectangle(-359,-288.6,478.1,590), new cjs.Rectangle(-361.6,-288.6,478.1,590), new cjs.Rectangle(-364.3,-288.6,478.1,590), new cjs.Rectangle(-366.9,-288.6,478.1,590), new cjs.Rectangle(-369.5,-288.6,478.1,590), new cjs.Rectangle(-372.2,-288.6,478.1,590), new cjs.Rectangle(-374.8,-288.6,478.1,590), new cjs.Rectangle(-377.5,-288.6,478.1,590), new cjs.Rectangle(-380.1,-288.6,478.1,590), new cjs.Rectangle(-382.8,-288.6,478.1,590), new cjs.Rectangle(-385.4,-288.6,478.1,590), new cjs.Rectangle(-388.1,-288.6,478.1,590), new cjs.Rectangle(-391.2,-288.6,478.9,590), new cjs.Rectangle(-384.5,-288.6,458.5,590), new cjs.Rectangle(-377.8,-288.6,438,590), new cjs.Rectangle(-371.2,-288.6,417.7,590), new cjs.Rectangle(-364.1,-288.6,409.5,590), new cjs.Rectangle(-357.3,-288.6,402.7,590), new cjs.Rectangle(-350.2,-288.6,395.6,590), new cjs.Rectangle(-343.2,-288.6,388.6,590), new cjs.Rectangle(-336.1,-288.6,381.5,590), new cjs.Rectangle(-329.4,-288.6,374.8,590), new cjs.Rectangle(-322.4,-288.6,367.8,590), new cjs.Rectangle(-317.4,-288.6,362.8,590), new cjs.Rectangle(-320.6,-288.6,366,590), new cjs.Rectangle(-325.8,-288.6,371.2,590)];


(lib.makeup1_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item22_mc();
	this.instance.setTransform(176.2,156.5,0.856,0.856);

	this.instance_1 = new lib.item23_mc();
	this.instance_1.setTransform(190.4,145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// animation
	this.instance_2 = new lib.closet3_mc();
	this.instance_2.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// animation
	this.instance_3 = new lib.girl1_5_mc();
	this.instance_3.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect];


(lib.makeup1_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item19_mc();
	this.instance.setTransform(260,11,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-42,y:151},9).to({x:-112,y:160},13).to({x:-169,y:103.1},13).to({x:-73,y:110.1},12).to({x:-68,y:-4.9},14).to({x:-168,y:-6.9},15).to({x:-315,y:429},12).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.item22_mc();
	this.instance_1.setTransform(176.2,156.5,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// animation
	this.instance_2 = new lib.closet3_mc();
	this.instance_2.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// animation
	this.instance_3 = new lib.girl1_5_mc();
	this.instance_3.setTransform(-124.6,6.4);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({alpha:1},67).wait(14));

	// animation
	this.instance_4 = new lib.girl1_4_mc();
	this.instance_4.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},76).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-298,-290.1,705.1,595), new cjs.Rectangle(-310.3,-290.1,717.3,618.8), new cjs.Rectangle(-322.5,-290.1,729.6,655.1), new cjs.Rectangle(-334.8,-290.1,741.8,691.5), new cjs.Rectangle(-347,-290.1,754.1,727.8), new cjs.Rectangle(-359.3,-290.1,766.3,764.1), new cjs.Rectangle(-371.5,-290.1,778.6,800.4), new cjs.Rectangle(-383.9,-290.1,790.9,836.8), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup1_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item21_mc();
	this.instance.setTransform(260,11,0.856,0.856);

	this.instance_1 = new lib.item19_mc();
	this.instance_1.setTransform(260,11,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// animation
	this.instance_2 = new lib.item22_mc();
	this.instance_2.setTransform(176.2,156.5,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// animation
	this.instance_3 = new lib.closet3_mc();
	this.instance_3.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// animation
	this.instance_4 = new lib.girl1_4_mc();
	this.instance_4.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect];


(lib.makeup1_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item17_mc();
	this.instance.setTransform(140.8,-43.7,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// animation
	this.instance_1 = new lib.item21_mc();
	this.instance_1.setTransform(260,11,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.item22_mc();
	this.instance_2.setTransform(176.2,156.5,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.item11_mc();
	this.instance_3.setTransform(-71.8,1.6,0.838,0.838,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:44.9,x:10.2,y:86.5,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.item11_mc();
	this.instance_4.setTransform(-176.5,2.6,0.838,0.838,0,-26.6,153.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:-42.1,skewY:137.9,x:-271.5,y:82.6,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_5 = new lib.closet3_mc();
	this.instance_5.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.girl1_2_mc();
	this.instance_6.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-298,-290.1,705.1,595), new cjs.Rectangle(-305.2,-290.1,712.3,595), new cjs.Rectangle(-312.4,-290.1,719.5,595), new cjs.Rectangle(-319.6,-290.1,726.7,595), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup1_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
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
	this.frame_15 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(14).call(this.frame_15).wait(19));

	// animation
	this.instance = new lib.item17_mc();
	this.instance.setTransform(573.7,-43.7,0.856,0.856);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:140.8,alpha:1},18).wait(1));

	// animation
	this.instance_1 = new lib.item21_mc();
	this.instance_1.setTransform(693,11,0.856,0.856);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({x:260,alpha:1},18).wait(1));

	// animation
	this.instance_2 = new lib.item22_mc();
	this.instance_2.setTransform(609.1,156.5,0.856,0.856);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({x:176.2,alpha:1},18).wait(1));

	// animation
	this.instance_3 = new lib.item11_mc();
	this.instance_3.setTransform(-52.6,133.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.84,scaleY:0.84,rotation:21.7,x:-71.8,y:1.6},14).wait(20));

	// animation
	this.instance_4 = new lib.item11_mc();
	this.instance_4.setTransform(-189.6,133.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.84,scaleY:0.84,skewX:-26.6,skewY:153.4,x:-176.5,y:2.6},14).wait(20));

	// animation
	this.instance_5 = new lib.closet3_mc();
	this.instance_5.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:655.5,alpha:0.012},14).to({x:636.5},1).to({x:203.5,alpha:1},18).wait(1));

	// animation
	this.instance_6 = new lib.girl1_2_mc();
	this.instance_6.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, new cjs.Rectangle(-294.6,-290.1,734,595), new cjs.Rectangle(-294.6,-290.1,766.2,595), new cjs.Rectangle(-294.6,-290.1,798.5,595), new cjs.Rectangle(-294.6,-290.1,830.8,595), new cjs.Rectangle(-294.6,-290.1,863.1,595), new cjs.Rectangle(-294.6,-290.1,895.4,595), new cjs.Rectangle(-294.6,-290.1,927.7,595), new cjs.Rectangle(-294.6,-290.1,959.9,595), new cjs.Rectangle(-294.6,-290.1,992.2,595), new cjs.Rectangle(-294.6,-290.1,1024.4,595), new cjs.Rectangle(-294.6,-290.1,1056.8,595), new cjs.Rectangle(-294.6,-290.1,1089.1,595), new cjs.Rectangle(-294.6,-290.1,1121.3,595), new cjs.Rectangle(-294.6,-290.1,1153.6,595), new cjs.Rectangle(-294.6,-290.1,1134.6,595), new cjs.Rectangle(-294.6,-290.1,1110.6,595), new cjs.Rectangle(-294.6,-290.1,1086.5,595), new cjs.Rectangle(-294.6,-290.1,1062.4,595), new cjs.Rectangle(-294.6,-290.1,1038.4,595), new cjs.Rectangle(-294.6,-290.1,1014.4,595), new cjs.Rectangle(-294.6,-290.1,990.3,595), new cjs.Rectangle(-294.6,-290.1,966.3,595), new cjs.Rectangle(-294.6,-290.1,942.2,595), new cjs.Rectangle(-294.6,-290.1,918.2,595), new cjs.Rectangle(-294.6,-290.1,894.1,595), new cjs.Rectangle(-294.6,-290.1,870,595), new cjs.Rectangle(-294.6,-290.1,846,595), new cjs.Rectangle(-294.6,-290.1,821.9,595), new cjs.Rectangle(-294.6,-290.1,797.8,595), new cjs.Rectangle(-294.6,-290.1,773.8,595), new cjs.Rectangle(-294.6,-290.1,749.8,595), new cjs.Rectangle(-294.6,-290.1,725.7,595), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup1_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item9_mc();
	this.instance.setTransform(-76,-41.6,1,1.133);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:113,y:10.4,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.item9_mc();
	this.instance_1.setTransform(-176.6,-39.7,1,1.133);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-380.6,y:5.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.item11_mc();
	this.instance_2.setTransform(264.4,159.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-52.6,y:133.4},14).wait(1));

	// animation
	this.instance_3 = new lib.item11_mc();
	this.instance_3.setTransform(147.4,158.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-189.6,y:133.4},14).wait(1));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.girl1_2_mc();
	this.instance_5.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-298.1,-290.1,705.1,595), new cjs.Rectangle(-313.8,-290.1,720.8,595), new cjs.Rectangle(-329.4,-290.1,736.5,595), new cjs.Rectangle(-345.1,-290.1,752.2,595), new cjs.Rectangle(-360.8,-290.1,767.9,595), new cjs.Rectangle(-376.5,-290.1,783.6,595), new cjs.Rectangle(-392.2,-290.1,799.2,595), new cjs.Rectangle(-407.9,-290.1,814.9,595), new cjs.Rectangle(-423.6,-290.1,830.6,595), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup1_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item9_mc();
	this.instance.setTransform(-35,119.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.13,x:-76,y:-41.6},14).wait(1));

	// animation
	this.instance_1 = new lib.item9_mc();
	this.instance_1.setTransform(-213.6,126.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.13,x:-176.6,y:-39.7},14).wait(1));

	// animation
	this.instance_2 = new lib.item12_mc();
	this.instance_2.setTransform(209.4,183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.closet3_mc();
	this.instance_3.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.girl1_2_mc();
	this.instance_4.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item9_mc();
	this.instance.setTransform(245,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-35,y:119.4},19).wait(1));

	// animation
	this.instance_1 = new lib.item9_mc();
	this.instance_1.setTransform(168.4,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-213.6,y:126.4},19).wait(1));

	// animation
	this.instance_2 = new lib.item12_mc();
	this.instance_2.setTransform(209.4,183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.closet3_mc();
	this.instance_3.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.girl1_2_mc();
	this.instance_4.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.girl1_1_mc();
	this.instance_5.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item15_mc();
	this.instance.setTransform(-250.6,425,1,1,0,109.4,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-275.6,y:88},9).to({x:-206.6,y:-30},14).to({x:-127.6,y:-23},11).to({x:-79.6,y:46},14).to({x:-100.6,y:102},14).to({x:-216.6,y:107},12).to({x:-160.6,y:161},8).to({x:-101.6,y:108},7).to({x:-81.6,y:419},9).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.item12_mc();
	this.instance_1.setTransform(209.4,183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// animation
	this.instance_2 = new lib.item10_mc();
	this.instance_2.setTransform(207.4,59.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// animation
	this.instance_3 = new lib.closet3_mc();
	this.instance_3.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// animation
	this.instance_4 = new lib.girl1_2_mc();
	this.instance_4.setTransform(-124.6,6.4);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({alpha:1},80).wait(11));

	// animation
	this.instance_5 = new lib.girl1_1_mc();
	this.instance_5.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315.1,-290.1,722.1,831.2);
p.frameBounds = [rect, new cjs.Rectangle(-317.7,-290.1,724.7,793.6), new cjs.Rectangle(-320.4,-290.1,727.5,756.1), new cjs.Rectangle(-323.2,-290.1,730.3,718.7), new cjs.Rectangle(-326,-290.1,733,681.3), new cjs.Rectangle(-328.8,-290.1,735.8,643.8), new cjs.Rectangle(-331.5,-290.1,738.6,606.3), new cjs.Rectangle(-334.3,-290.1,741.4,595), new cjs.Rectangle(-337.1,-290.1,744.1,595), new cjs.Rectangle(-340.1,-290.1,747.1,595), new cjs.Rectangle(-334.9,-290.1,742,595), new cjs.Rectangle(-330,-290.1,737.1,595), new cjs.Rectangle(-325.1,-290.1,732.1,595), new cjs.Rectangle(-320.2,-290.1,727.2,595), new cjs.Rectangle(-315.2,-290.1,722.3,595), new cjs.Rectangle(-310.3,-290.1,717.4,595), new cjs.Rectangle(-305.4,-290.1,712.4,595), new cjs.Rectangle(-300.4,-290.1,707.5,595), new cjs.Rectangle(-295.5,-290.1,702.6,595), rect=new cjs.Rectangle(-294.6,-290.1,701.7,595), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-294.6,-290.1,701.7,617.7), new cjs.Rectangle(-294.6,-290.1,701.7,652.3), new cjs.Rectangle(-294.6,-290.1,701.7,686.8), new cjs.Rectangle(-294.6,-290.1,701.7,721.3), new cjs.Rectangle(-294.6,-290.1,701.7,755.9), new cjs.Rectangle(-294.6,-290.1,701.7,790.5), new cjs.Rectangle(-294.6,-290.1,701.7,825.2), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
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
	this.frame_25 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(22));

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(-71.6,9.8,0.492,0.492);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:657.6},24).to({_off:true},1).wait(22));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(-81.8,-15.9,0.489,0.489);

	this.instance_2 = new lib.item12_mc();
	this.instance_2.setTransform(655.3,183.3);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:631.9},24).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).to({x:209.4,alpha:1},14).to({x:202.4},3).to({x:209.4},3).wait(1));

	// animation
	this.instance_3 = new lib.item3_mc();
	this.instance_3.setTransform(-133.1,9.1,0.547,0.547);

	this.instance_4 = new lib.item10_mc();
	this.instance_4.setTransform(653.3,59.4);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:656.9},24).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({x:207.4,alpha:1},14).to({x:200.4},3).to({x:207.4},3).wait(1));

	// animation
	this.instance_5 = new lib.item2_mc();
	this.instance_5.setTransform(-136.7,-17.6,0.377,0.377,3);

	this.instance_6 = new lib.item6_mc();
	this.instance_6.setTransform(637,-83);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:630.1},24).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).to({x:191,alpha:1},14).to({x:184},3).to({x:191},3).wait(1));

	// animation
	this.instance_7 = new lib.girl1_mc();
	this.instance_7.setTransform(-108.6,117.4);

	this.instance_8 = new lib.closet3_mc();
	this.instance_8.setTransform(649.5,7.4);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:765.2},24).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({x:203.5,alpha:1},14).to({x:196.5},3).to({x:203.5},3).wait(1));

	// animation
	this.instance_9 = new lib.cupid_mc();
	this.instance_9.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.instance_10 = new lib.girl1_1_mc();
	this.instance_10.setTransform(-124.6,576.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:613.8},24).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(26).to({_off:false},0).to({y:6.4},14).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-552.1,-339.8,887,775.7);
p.frameBounds = [rect, new cjs.Rectangle(-552.1,-312.8,887,775.7), new cjs.Rectangle(-552.1,-285.8,887,775.7), new cjs.Rectangle(-552.1,-258.8,887,775.7), new cjs.Rectangle(-552.1,-231.8,887,775.7), new cjs.Rectangle(-552.1,-204.9,887,775.8), new cjs.Rectangle(-552.1,-177.9,887,775.8), new cjs.Rectangle(-552.1,-150.9,887,775.8), new cjs.Rectangle(-552.1,-123.9,887,775.8), new cjs.Rectangle(-552.1,-96.9,887,775.8), new cjs.Rectangle(-552.1,-69.9,887,775.8), new cjs.Rectangle(-552.1,-42.9,887,775.8), new cjs.Rectangle(-552.1,-16,887,775.8), new cjs.Rectangle(-552.1,11,887,775.8), new cjs.Rectangle(-552.1,38,887,775.8), new cjs.Rectangle(-552.1,65,887,775.8), new cjs.Rectangle(-552.1,92,887,775.8), new cjs.Rectangle(-552.1,118.9,887,775.8), new cjs.Rectangle(-552.1,145.9,887,775.8), new cjs.Rectangle(-552.1,172.9,887,775.8), new cjs.Rectangle(-552.1,199.9,887,775.8), new cjs.Rectangle(-552.1,226.9,887,775.8), new cjs.Rectangle(-552.1,253.9,887,775.8), new cjs.Rectangle(-552.1,280.9,887,775.8), new cjs.Rectangle(-552.1,308,887,775.7), null, new cjs.Rectangle(-294.6,-290.1,1147.6,1161.4), new cjs.Rectangle(-294.6,-290.1,1115.8,1120.8), new cjs.Rectangle(-294.6,-290.1,1083.9,1080.1), new cjs.Rectangle(-294.6,-290.1,1052.1,1039.3), new cjs.Rectangle(-294.6,-290.1,1020.2,998.6), new cjs.Rectangle(-294.6,-290.1,988.4,957.9), new cjs.Rectangle(-294.6,-290.1,956.5,917.2), new cjs.Rectangle(-294.6,-290.1,924.6,876.5), new cjs.Rectangle(-294.6,-290.1,892.8,835.8), new cjs.Rectangle(-294.6,-290.1,860.9,795.1), new cjs.Rectangle(-294.6,-290.1,829.1,754.3), new cjs.Rectangle(-294.6,-290.1,797.2,713.7), new cjs.Rectangle(-294.6,-290.1,765.3,672.9), new cjs.Rectangle(-294.6,-290.1,733.5,632.2), new cjs.Rectangle(-294.6,-290.1,701.7,595), new cjs.Rectangle(-294.6,-290.1,699.3,595), new cjs.Rectangle(-294.6,-290.1,697,595), new cjs.Rectangle(-294.6,-290.1,694.7,595), new cjs.Rectangle(-294.6,-290.1,697,595), new cjs.Rectangle(-294.6,-290.1,699.3,595), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(19));

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(250.4,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.49,scaleY:0.49,x:-71.6,y:9.8},19).wait(1));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(-81.8,-15.9,0.489,0.489);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// animation
	this.instance_2 = new lib.item3_mc();
	this.instance_2.setTransform(-133.1,9.1,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.item2_mc();
	this.instance_3.setTransform(-136.7,-17.6,0.377,0.377,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:602.5,alpha:0.012},19).wait(1));

	// animation
	this.instance_5 = new lib.girl1_mc();
	this.instance_5.setTransform(-108.6,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.cupid_mc();
	this.instance_6.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-552.1,-339.8,959.2,775.7);
p.frameBounds = [rect, new cjs.Rectangle(-552.1,-339.8,980.2,775.7), new cjs.Rectangle(-552.1,-339.8,1001.2,775.7), new cjs.Rectangle(-552.1,-339.8,1022.2,775.7), new cjs.Rectangle(-552.1,-339.8,1043.2,775.7), new cjs.Rectangle(-552.1,-339.8,1064.2,775.7), new cjs.Rectangle(-552.1,-339.8,1085.2,775.7), new cjs.Rectangle(-552.1,-339.8,1106.2,775.7), new cjs.Rectangle(-552.1,-339.8,1127.2,775.7), new cjs.Rectangle(-552.1,-339.8,1148.2,775.7), new cjs.Rectangle(-552.1,-339.8,1169.2,775.7), new cjs.Rectangle(-552.1,-339.8,1190.2,775.7), new cjs.Rectangle(-552.1,-339.8,1211.2,775.7), new cjs.Rectangle(-552.1,-339.8,1232.2,775.7), new cjs.Rectangle(-552.1,-339.8,1253.2,775.7), new cjs.Rectangle(-552.1,-339.8,1274.2,775.7), new cjs.Rectangle(-552.1,-339.8,1295.2,775.7), new cjs.Rectangle(-552.1,-339.8,1316.2,775.7), new cjs.Rectangle(-552.1,-339.8,1337.2,775.7), new cjs.Rectangle(-552.1,-339.8,1358.2,775.7)];


(lib.makeup1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(250.4,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(139.4,72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.49,scaleY:0.49,x:-81.8,y:-15.9},19).wait(1));

	// animation
	this.instance_2 = new lib.item3_mc();
	this.instance_2.setTransform(-133.1,9.1,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.item2_mc();
	this.instance_3.setTransform(-136.7,-17.6,0.377,0.377,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.girl1_mc();
	this.instance_5.setTransform(-108.6,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.cupid_mc();
	this.instance_6.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-552.1,-339.8,959.2,775.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(250.4,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(139.4,72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// animation
	this.instance_2 = new lib.item3_mc();
	this.instance_2.setTransform(268.9,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.55,scaleY:0.55,x:-133.1,y:9.1},19).wait(1));

	// animation
	this.instance_3 = new lib.item2_mc();
	this.instance_3.setTransform(-136.7,-17.6,0.377,0.377,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.girl1_mc();
	this.instance_5.setTransform(-108.6,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.cupid_mc();
	this.instance_6.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-552.1,-339.8,959.2,775.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(250.4,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(139.4,72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// animation
	this.instance_2 = new lib.item3_mc();
	this.instance_2.setTransform(268.9,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.item2_mc();
	this.instance_3.setTransform(146.4,-86.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.38,scaleY:0.38,rotation:3,x:-136.7,y:-17.6},19).wait(1));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.girl1_mc();
	this.instance_5.setTransform(-108.6,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.cupid_mc();
	this.instance_6.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-552.1,-339.8,959.2,775.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item5_mc();
	this.instance.setTransform(202.5,18.3,0.675,0.675);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:250.4,y:154.3,alpha:1},16).wait(1));

	// animation
	this.instance_1 = new lib.item4_mc();
	this.instance_1.setTransform(202.5,22.4,0.675,0.675);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:139.4,y:72.1,alpha:1},16).wait(1));

	// animation
	this.instance_2 = new lib.item3_mc();
	this.instance_2.setTransform(205.8,23.3,0.675,0.675);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:268.9,y:4.1,alpha:1},16).wait(1));

	// animation
	this.instance_3 = new lib.item2_mc();
	this.instance_3.setTransform(205.9,19.3,0.675,0.675);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:146.4,y:-86.6,alpha:1},16).wait(1));

	// animation
	this.instance_4 = new lib.item1_mc();
	this.instance_4.setTransform(211.4,-26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.45,scaleY:0.45,alpha:0.012},13).to({_off:true},1).wait(16));

	// animation
	this.instance_5 = new lib.closet3_mc();
	this.instance_5.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// animation
	this.instance_6 = new lib.girl1_mc();
	this.instance_6.setTransform(-108.6,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// animation
	this.instance_7 = new lib.cupid_mc();
	this.instance_7.setTransform(9.4,-34,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-552.1,-339.8,959.2,775.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(24));

	// animation
	this.instance = new lib.item1_mc();
	this.instance.setTransform(655.3,-26.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:211.4,alpha:1},19).to({x:196.4},3).to({x:211.4},2).wait(1));

	// animation
	this.instance_1 = new lib.closet3_mc();
	this.instance_1.setTransform(647.5,7.4);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:203.5,alpha:1},19).to({x:188.5},3).to({x:203.5},2).wait(1));

	// animation
	this.instance_2 = new lib.girl1_mc();
	this.instance_2.setTransform(-108.6,770.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:117.4},19).to({y:106.4},3).to({y:117.4},2).wait(1));

	// animation
	this.instance_3 = new lib.cupid_mc();
	this.instance_3.setTransform(9.4,618.9,0.865,0.865,0,0,0,55,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-34},19).to({y:-45},3).to({y:-34},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-552.1,-290.1,1403.1,1378.9);
p.frameBounds = [rect, new cjs.Rectangle(-552.1,-290.1,1379.8,1344.6), new cjs.Rectangle(-552.1,-290.1,1356.4,1310.2), new cjs.Rectangle(-552.1,-290.1,1333,1275.9), new cjs.Rectangle(-552.1,-290.1,1309.7,1241.5), new cjs.Rectangle(-552.1,-290.1,1286.3,1207.2), new cjs.Rectangle(-552.1,-290.1,1262.9,1172.8), new cjs.Rectangle(-552.1,-290.1,1239.6,1138.4), new cjs.Rectangle(-552.1,-290.1,1216.2,1104.1), new cjs.Rectangle(-552.1,-290.1,1192.8,1069.7), new cjs.Rectangle(-552.1,-290.1,1169.4,1035.3), new cjs.Rectangle(-552.1,-290.1,1146.1,1001), new cjs.Rectangle(-552.1,-290.1,1122.7,966.6), new cjs.Rectangle(-552.1,-290.1,1099.4,932.3), new cjs.Rectangle(-552.1,-290.1,1076,897.9), new cjs.Rectangle(-552.1,-290.1,1052.6,863.5), new cjs.Rectangle(-552.1,-290.1,1029.3,829.2), new cjs.Rectangle(-552.1,-290.1,1005.9,794.8), new cjs.Rectangle(-552.1,-305.4,982.5,775.7), new cjs.Rectangle(-552.1,-339.8,959.2,775.7), new cjs.Rectangle(-552.1,-343.4,954.2,775.7), new cjs.Rectangle(-552.1,-347.1,949.2,775.7), new cjs.Rectangle(-552.1,-350.8,944.2,775.7), new cjs.Rectangle(-552.1,-345.2,951.7,775.7), new cjs.Rectangle(-552.1,-339.8,959.2,775.7)];


(lib.makeup_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.makeup_check_3_2_mc();

	this.instance_1 = new lib.makeup_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect];


(lib.makeup_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.makeup_check_3_1_mc();

	this.instance_1 = new lib.makeup_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, rect];


(lib.makeup_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_6_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-141,280,280);
p.frameBounds = [rect];


(lib.makeup_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_6_1_img();
	this.instance.setTransform(-115,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.makeup_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_5_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-142,280,280);
p.frameBounds = [rect];


(lib.makeup_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_5_1_img();
	this.instance.setTransform(-115,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.makeup_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_4_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-143,280,280);
p.frameBounds = [rect];


(lib.makeup_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_4_1_img();
	this.instance.setTransform(-115,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.makeup_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_3_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-143,280,280);
p.frameBounds = [rect];


(lib.makeup_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_3_1_img();
	this.instance.setTransform(-115,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.makeup_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_2_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-143,280,280);
p.frameBounds = [rect];


(lib.makeup_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_2_1_img();
	this.instance.setTransform(-115,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.makeup_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_1_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,-4);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-144,280,280);
p.frameBounds = [rect];


(lib.makeup_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_1_1_img();
	this.instance.setTransform(-115,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUUMAAAgomMAldAAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.makeup_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(-0.1,0.1,0.42,0.42,0,0,0,-0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.location_progress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.location_progress_1_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.item17_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.water_mc();
	this.instance.setTransform(148.3,3.4,1.585,1,0,-62.2,117.8,102,202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.item17_img();
	this.instance_1.setTransform(-60,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.2,-234,509,474.8);
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


(lib.hero2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_fringe_main_mc();
	this.instance.setTransform(-21.6,-207.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7.5,x:-33.8,y:-214.7},39).to({rotation:0,x:-21.6,y:-207.6},40).wait(1));

	// animation
	this.instance_1 = new lib.hero2_earrings_main_mc();
	this.instance_1.setTransform(34.4,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-7.5,x:30.2,y:-156.9},39).to({rotation:0,x:34.4,y:-142},40).wait(1));

	// animation
	this.instance_2 = new lib.hero2_makeup_main_mc();
	this.instance_2.setTransform(-22,-194.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7.5,x:-32.4,y:-201.8},39).to({rotation:0,x:-22,y:-194.6},40).wait(1));

	// animation
	this.instance_3 = new lib.hero2_head_mc();
	this.instance_3.setTransform(-22,-194.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-7.5,x:-32.4,y:-201.8},39).to({rotation:0,x:-22,y:-194.6},40).wait(1));

	// animation
	this.instance_4 = new lib.hero2_dress_main_mc();
	this.instance_4.setTransform(-10.6,101.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:92.3},39).to({y:101.3},40).wait(1));

	// animation
	this.instance_5 = new lib.hero2_earrings_back_main_mc();
	this.instance_5.setTransform(-83.6,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-7.5,x:-86.8,y:-141.6},39).to({rotation:0,x:-83.6,y:-142},40).wait(1));

	// animation
	this.instance_6 = new lib.hero2_hair_main_mc();
	this.instance_6.setTransform(-21.6,-207.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-7.5,x:-33.8,y:-214.7},39).to({rotation:0,x:-21.6,y:-207.6},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.1,-328.7,255.9,660.1);
p.frameBounds = [rect, new cjs.Rectangle(-136.1,-329,255.7,660.1), new cjs.Rectangle(-136.1,-329.7,256.3,660.6), new cjs.Rectangle(-136.1,-330.5,256.7,661.2), new cjs.Rectangle(-136.1,-331.3,257.1,661.7), new cjs.Rectangle(-136.1,-331.5,257,661.7), new cjs.Rectangle(-136.1,-332.3,257.5,662.3), new cjs.Rectangle(-136.1,-333.1,257.8,662.8), new cjs.Rectangle(-136.1,-333.8,258.4,663.3), new cjs.Rectangle(-136.1,-334.1,258.2,663.3), new cjs.Rectangle(-136.1,-334.9,258.6,663.9), new cjs.Rectangle(-136.1,-335.6,259,664.4), new cjs.Rectangle(-136.1,-336.3,259.5,664.9), new cjs.Rectangle(-136.1,-336.7,259.4,665.1), new cjs.Rectangle(-136.1,-337.4,259.8,665.5), new cjs.Rectangle(-136.1,-338.2,260.3,666.1), new cjs.Rectangle(-136.1,-338.9,260.6,666.6), new cjs.Rectangle(-136.1,-339.2,260.5,666.6), new cjs.Rectangle(-136.6,-339.9,261.5,667.1), new cjs.Rectangle(-137.4,-340.7,262.7,667.6), new cjs.Rectangle(-138.2,-341.4,263.9,668.1), new cjs.Rectangle(-139,-342.1,265.1,668.6), new cjs.Rectangle(-139.4,-342.4,265.3,668.7), new cjs.Rectangle(-140.1,-343.1,266.5,669.2), new cjs.Rectangle(-141,-343.8,267.7,669.6), new cjs.Rectangle(-141.7,-344.6,268.9,670.2), new cjs.Rectangle(-142.1,-344.8,269.1,670.2), new cjs.Rectangle(-142.9,-345.6,270.3,670.7), new cjs.Rectangle(-143.6,-346.3,271.5,671.2), new cjs.Rectangle(-144.4,-347,272.7,671.6), new cjs.Rectangle(-144.8,-347.3,272.9,671.7), new cjs.Rectangle(-145.6,-348,274,672.2), new cjs.Rectangle(-146.3,-348.7,275.2,672.7), new cjs.Rectangle(-147.1,-349.4,276.4,673.1), new cjs.Rectangle(-147.5,-349.7,276.7,673.2), new cjs.Rectangle(-148.3,-350.4,277.8,673.6), new cjs.Rectangle(-149,-351.1,279,674.1), new cjs.Rectangle(-149.8,-351.8,280.1,674.6), new cjs.Rectangle(-150.5,-352.5,281.2,675.1), new cjs.Rectangle(-151.3,-353.2,282.3,675.6), new cjs.Rectangle(-150.5,-352.4,281.2,675), new cjs.Rectangle(-149.8,-351.8,280.1,674.6), new cjs.Rectangle(-149.1,-351.1,279,674.1), new cjs.Rectangle(-148.3,-350.4,277.8,673.6), new cjs.Rectangle(-147.9,-350.1,277.6,673.6), new cjs.Rectangle(-147.2,-349.4,276.4,673.1), new cjs.Rectangle(-146.4,-348.7,275.3,672.6), new cjs.Rectangle(-145.6,-348,274.1,672.2), new cjs.Rectangle(-145.2,-347.7,273.9,672.1), new cjs.Rectangle(-144.5,-347,272.8,671.6), new cjs.Rectangle(-143.7,-346.4,271.6,671.2), new cjs.Rectangle(-143,-345.6,270.4,670.7), new cjs.Rectangle(-142.6,-345.3,270.2,670.6), new cjs.Rectangle(-141.8,-344.6,269,670.1), new cjs.Rectangle(-141.1,-343.9,267.8,669.6), new cjs.Rectangle(-140.4,-343.2,266.6,669.1), new cjs.Rectangle(-139.9,-342.9,266.4,669.1), new cjs.Rectangle(-139.2,-342.2,265.2,668.6), new cjs.Rectangle(-138.4,-341.5,264,668.1), new cjs.Rectangle(-137.6,-340.8,262.8,667.6), new cjs.Rectangle(-137.2,-340.5,262.6,667.6), new cjs.Rectangle(-136.4,-339.7,261.3,667), new cjs.Rectangle(-136.1,-339,260.6,666.6), new cjs.Rectangle(-136.1,-338.3,260.2,666), new cjs.Rectangle(-136.1,-338,260.3,666), new cjs.Rectangle(-136.1,-337.2,259.8,665.4), new cjs.Rectangle(-136.1,-336.5,259.4,664.9), new cjs.Rectangle(-136.1,-335.8,259,664.4), new cjs.Rectangle(-136.1,-335.5,259.1,664.4), new cjs.Rectangle(-136.1,-334.8,258.7,663.9), new cjs.Rectangle(-136.1,-334,258.2,663.4), new cjs.Rectangle(-136.1,-333.4,257.7,662.9), new cjs.Rectangle(-136.1,-333,257.9,662.8), new cjs.Rectangle(-136.1,-332.3,257.5,662.3), new cjs.Rectangle(-136.1,-331.6,257,661.8), new cjs.Rectangle(-136.1,-330.7,256.5,661.2), new cjs.Rectangle(-136.1,-330.5,256.7,661.2), new cjs.Rectangle(-136.1,-329.7,256.2,660.6), new cjs.Rectangle(-136.1,-329,255.8,660.2), new cjs.Rectangle(-136.1,-328.7,255.9,660.1)];


(lib.hero1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_fringe_main_mc();
	this.instance.setTransform(-14,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.7,x:-11.8,y:-160.5},34).to({rotation:0,x:-14,y:-152},35).wait(1));

	// animation
	this.instance_1 = new lib.hero1_earrings_main_mc();
	this.instance_1.setTransform(-12.6,-147.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.7,x:-10.8,y:-156.1},34).to({rotation:0,x:-12.6,y:-147.6},35).wait(1));

	// animation
	this.instance_2 = new lib.hero1_makeup_main_mc();
	this.instance_2.setTransform(-10.6,-207.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:4.7,x:-3.9,y:-215.7},34).to({rotation:0,x:-10.6,y:-207.6},35).wait(1));

	// animation
	this.instance_3 = new lib.hero1_head_mc();
	this.instance_3.setTransform(-10.6,-207.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.7,x:-3.9,y:-215.7},34).to({rotation:0,x:-10.6,y:-207.6},35).wait(1));

	// animation
	this.instance_4 = new lib.hero1_dress_main_mc();
	this.instance_4.setTransform(1,95.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:87.3},34).to({y:95.3},35).wait(1));

	// animation
	this.instance_5 = new lib.hero1_hair_main_mc();
	this.instance_5.setTransform(-14,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4.7,x:-11.8,y:-160.5},34).to({rotation:0,x:-14,y:-152},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.6,-326.1,253,654.5);
p.frameBounds = [rect, new cjs.Rectangle(-126.6,-326.4,253,654.5), new cjs.Rectangle(-126.6,-327.1,253,655), new cjs.Rectangle(-126.6,-327.4,253,655), new cjs.Rectangle(-126.6,-328,253,655.4), new cjs.Rectangle(-126.6,-328.3,253,655.5), new cjs.Rectangle(-126.6,-329,253,655.9), new cjs.Rectangle(-126.6,-329.3,253,656), new cjs.Rectangle(-126.6,-329.9,253,656.3), new cjs.Rectangle(-126.6,-330.3,253,656.5), new cjs.Rectangle(-126.6,-330.9,253,656.8), new cjs.Rectangle(-126.6,-331.5,253,657.3), new cjs.Rectangle(-126.6,-331.8,253,657.4), new cjs.Rectangle(-126.6,-332.5,253,657.8), new cjs.Rectangle(-126.6,-332.8,253,657.8), new cjs.Rectangle(-126.6,-333.4,253,658.2), new cjs.Rectangle(-126.6,-333.7,253,658.3), new cjs.Rectangle(-126.6,-334.4,253,658.7), new cjs.Rectangle(-126.6,-334.7,253,658.8), new cjs.Rectangle(-126.6,-335.3,253,659.2), new cjs.Rectangle(-126.6,-336,253,659.6), new cjs.Rectangle(-126.6,-336.3,253,659.7), new cjs.Rectangle(-126.6,-336.9,253,660.1), new cjs.Rectangle(-126.6,-337.2,253,660.2), new cjs.Rectangle(-126.6,-337.8,253,660.5), new cjs.Rectangle(-126.6,-338.1,253,660.6), new cjs.Rectangle(-126.6,-338.7,253,661), new cjs.Rectangle(-126.6,-339,253,661), new cjs.Rectangle(-126.6,-339.7,253,661.4), new cjs.Rectangle(-126.6,-340.3,253,661.8), new cjs.Rectangle(-126.6,-340.6,253,661.9), new cjs.Rectangle(-126.6,-341.2,253,662.2), new cjs.Rectangle(-126.6,-341.5,253,662.3), new cjs.Rectangle(-126.6,-342.1,253,662.7), new cjs.Rectangle(-126.6,-342.7,253,663), new cjs.Rectangle(-126.6,-342.1,253,662.7), new cjs.Rectangle(-126.6,-341.5,253,662.3), new cjs.Rectangle(-126.6,-341.2,253,662.2), new cjs.Rectangle(-126.6,-340.6,253,661.8), new cjs.Rectangle(-126.6,-340.3,253,661.8), new cjs.Rectangle(-126.6,-339.7,253,661.4), new cjs.Rectangle(-126.6,-339.4,253,661.3), new cjs.Rectangle(-126.6,-338.7,253,660.9), new cjs.Rectangle(-126.6,-338.2,253,660.6), new cjs.Rectangle(-126.6,-337.9,253,660.5), new cjs.Rectangle(-126.6,-337.3,253,660.1), new cjs.Rectangle(-126.6,-337,253,660.1), new cjs.Rectangle(-126.6,-336.3,253,659.6), new cjs.Rectangle(-126.6,-336.1,253,659.6), new cjs.Rectangle(-126.6,-335.5,253,659.3), new cjs.Rectangle(-126.6,-335.2,253,659.2), new cjs.Rectangle(-126.6,-334.5,253,658.8), new cjs.Rectangle(-126.6,-334.2,253,658.7), new cjs.Rectangle(-126.6,-333.6,253,658.3), new cjs.Rectangle(-126.6,-333.2,253,658.1), new cjs.Rectangle(-126.6,-332.7,253,657.8), new cjs.Rectangle(-126.6,-332,253,657.4), new cjs.Rectangle(-126.6,-331.8,253,657.4), new cjs.Rectangle(-126.6,-331.1,253,657), new cjs.Rectangle(-126.6,-330.8,253,656.8), new cjs.Rectangle(-126.6,-330.2,253,656.5), new cjs.Rectangle(-126.6,-329.8,253,656.3), new cjs.Rectangle(-126.6,-329.2,253,656), new cjs.Rectangle(-126.6,-328.9,253,655.9), new cjs.Rectangle(-126.6,-328.3,253,655.5), new cjs.Rectangle(-126.6,-328,253,655.4), new cjs.Rectangle(-126.6,-327.4,253,655), new cjs.Rectangle(-126.6,-327,253,654.9), new cjs.Rectangle(-126.6,-326.4,253,654.5), new cjs.Rectangle(-126.6,-326.1,253,654.5)];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glasses
	this.glasses = new lib.hero2_glasses_all_mc();
	this.glasses.setTransform(-47,-185.9);

	this.timeline.addTween(cjs.Tween.get(this.glasses).to({rotation:-4.5,x:-52.6,y:-199},39).to({rotation:0,x:-47,y:-185.9},40).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(-21.6,-207.6);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-4.5,x:-29.1,y:-222.5},39).to({rotation:0,x:-21.6,y:-207.6},40).wait(1));

	// earrings
	this.earrings = new lib.hero2_earrings_all_mc();
	this.earrings.setTransform(34.4,-142);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({rotation:-4.5,x:31.9,y:-161.5},39).to({rotation:0,x:34.4,y:-142},40).wait(1));

	// makeup
	this.makeup = new lib.hero2_makeup_all_mc();
	this.makeup.setTransform(-22,-194.6);

	this.timeline.addTween(cjs.Tween.get(this.makeup).to({rotation:-4.5,x:-28.4,y:-209.6},39).to({rotation:0,x:-22,y:-194.6},40).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(-22,-194.6);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-4.5,x:-28.4,y:-209.6},39).to({rotation:0,x:-22,y:-194.6},40).wait(1));

	// body
	this.instance = new lib.hero2_head_mc();
	this.instance.setTransform(-22,-194.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.5,x:-28.4,y:-209.6},39).to({rotation:0,x:-22,y:-194.6},40).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(-10.6,101.3);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:85.3},39).to({y:101.3},40).wait(1));

	// earringsSecond
	this.earringsSecond = new lib.hero2_earrings_back_all_mc();
	this.earringsSecond.setTransform(-83.6,-142);

	this.timeline.addTween(cjs.Tween.get(this.earringsSecond).to({rotation:-4.5,x:-85.7,y:-152.3},39).to({rotation:0,x:-83.6,y:-142},40).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(-21.6,-207.6);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-4.5,x:-29.1,y:-222.5},39).to({rotation:0,x:-21.6,y:-207.6},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.1,-328.7,259.9,660.1);
p.frameBounds = [rect, new cjs.Rectangle(-140.1,-329.1,259.8,660.1), new cjs.Rectangle(-140.1,-329.6,259.7,660.1), new cjs.Rectangle(-140.1,-330.5,260.3,660.6), new cjs.Rectangle(-140.1,-331,260.2,660.7), new cjs.Rectangle(-140.1,-331.9,260.7,661.2), new cjs.Rectangle(-140.1,-332.4,260.6,661.3), new cjs.Rectangle(-140.1,-333.3,261,661.8), new cjs.Rectangle(-140.1,-333.7,260.9,661.8), new cjs.Rectangle(-140.1,-334.6,261.5,662.3), new cjs.Rectangle(-140.1,-335.1,261.4,662.3), new cjs.Rectangle(-140.1,-336,261.9,662.8), new cjs.Rectangle(-140.1,-336.4,261.8,662.8), new cjs.Rectangle(-140.1,-336.9,261.7,662.9), new cjs.Rectangle(-140.1,-337.8,262.3,663.4), new cjs.Rectangle(-140.1,-338.3,262.2,663.5), new cjs.Rectangle(-140.1,-339.2,262.6,664), new cjs.Rectangle(-140.1,-339.5,262.6,663.9), new cjs.Rectangle(-140.1,-340.5,263,664.4), new cjs.Rectangle(-140.1,-340.9,262.9,664.5), new cjs.Rectangle(-140.1,-341.9,263.4,665), new cjs.Rectangle(-140.1,-342.3,263.3,665.1), new cjs.Rectangle(-140.1,-343.2,263.8,665.5), new cjs.Rectangle(-140.1,-343.7,263.7,665.6), new cjs.Rectangle(-140.1,-344.6,264.2,666.1), new cjs.Rectangle(-140.1,-345.1,264.1,666.2), new cjs.Rectangle(-140.1,-345.5,264,666.2), new cjs.Rectangle(-140.1,-346.4,264.5,666.6), new cjs.Rectangle(-140.1,-346.8,264.4,666.7), new cjs.Rectangle(-140.1,-347.7,264.9,667.1), new cjs.Rectangle(-140.1,-348.2,264.8,667.2), new cjs.Rectangle(-140.1,-349,265.3,667.7), new cjs.Rectangle(-140.1,-349.5,265.2,667.7), new cjs.Rectangle(-140.1,-350.4,265.6,668.2), new cjs.Rectangle(-140.1,-350.9,265.5,668.3), new cjs.Rectangle(-140.1,-351.7,266,668.7), new cjs.Rectangle(-140.1,-352.1,266,668.7), new cjs.Rectangle(-140.1,-353.1,266.4,669.2), new cjs.Rectangle(-140.3,-353.5,266.5,669.2), new cjs.Rectangle(-140.9,-354.4,267.6,669.7), new cjs.Rectangle(-140.3,-353.5,266.5,669.2), new cjs.Rectangle(-140.1,-353.1,266.4,669.2), new cjs.Rectangle(-140.1,-352.2,265.9,668.8), new cjs.Rectangle(-140.1,-351.7,266.1,668.7), new cjs.Rectangle(-140.1,-350.9,265.6,668.3), new cjs.Rectangle(-140.1,-350.4,265.6,668.2), new cjs.Rectangle(-140.1,-349.5,265.1,667.7), new cjs.Rectangle(-140.1,-349.1,265.2,667.7), new cjs.Rectangle(-140.1,-348.3,264.8,667.2), new cjs.Rectangle(-140.1,-347.8,264.8,667.2), new cjs.Rectangle(-140.1,-347.4,265,667.2), new cjs.Rectangle(-140.1,-346.5,264.4,666.6), new cjs.Rectangle(-140.1,-346.1,264.5,666.6), new cjs.Rectangle(-140.1,-345.2,264,666.1), new cjs.Rectangle(-140.1,-344.7,264.1,666.1), new cjs.Rectangle(-140.1,-343.8,263.7,665.6), new cjs.Rectangle(-140.1,-343.4,263.7,665.6), new cjs.Rectangle(-140.1,-342.5,263.2,665.1), new cjs.Rectangle(-140.1,-342.1,263.3,665.1), new cjs.Rectangle(-140.1,-341.2,262.9,664.5), new cjs.Rectangle(-140.1,-340.7,263,664.5), new cjs.Rectangle(-140.1,-340.3,263.1,664.5), new cjs.Rectangle(-140.1,-339.3,262.6,663.9), new cjs.Rectangle(-140.1,-339,262.6,663.9), new cjs.Rectangle(-140.1,-338.1,262.2,663.4), new cjs.Rectangle(-140.1,-337.6,262.3,663.3), new cjs.Rectangle(-140.1,-336.7,261.7,662.9), new cjs.Rectangle(-140.1,-336.3,261.8,662.8), new cjs.Rectangle(-140.1,-335.4,261.3,662.3), new cjs.Rectangle(-140.1,-335,261.4,662.3), new cjs.Rectangle(-140.1,-334.5,261.5,662.2), new cjs.Rectangle(-140.1,-333.6,261,661.7), new cjs.Rectangle(-140.1,-333.2,261.1,661.7), new cjs.Rectangle(-140.1,-332.3,260.6,661.2), new cjs.Rectangle(-140.1,-331.8,260.7,661.2), new cjs.Rectangle(-140.1,-331,260.2,660.7), new cjs.Rectangle(-140.1,-330.5,260.3,660.6), new cjs.Rectangle(-140.1,-329.6,259.7,660.1), new cjs.Rectangle(-140.1,-329.1,259.8,660), new cjs.Rectangle(-140.1,-328.7,259.9,660.1)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glasses
	this.glasses = new lib.hero1_glasses_mc();
	this.glasses.setTransform(-12,-194.1);

	this.timeline.addTween(cjs.Tween.get(this.glasses).to({rotation:7,x:-4.1,y:-206.2},34).to({rotation:0,x:-12,y:-194.1},35).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-14,-152);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:7,x:-11.2,y:-164.6},34).to({rotation:0,x:-14,y:-152},35).wait(1));

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(-12.6,-147.6);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({rotation:7,x:-10.4,y:-160.1},34).to({rotation:0,x:-12.6,y:-147.6},35).wait(1));

	// makeup
	this.makeup = new lib.hero1_makeup_all_mc();
	this.makeup.setTransform(-10.6,-207.6);

	this.timeline.addTween(cjs.Tween.get(this.makeup).to({rotation:7,x:-1.1,y:-219.4},34).to({rotation:0,x:-10.6,y:-207.6},35).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(-10.6,-207.6);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:7,x:-1.1,y:-219.4},34).to({rotation:0,x:-10.6,y:-207.6},35).wait(1));

	// body
	this.instance = new lib.hero1_head_mc();
	this.instance.setTransform(-10.6,-207.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7,x:-1.1,y:-219.4},34).to({rotation:0,x:-10.6,y:-207.6},35).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(1,95.3);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:83.3},34).to({y:95.3},35).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-14,-152);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:7,x:-11.2,y:-164.6},34).to({rotation:0,x:-14,y:-152},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-326.1,252,653.5);
p.frameBounds = [rect, new cjs.Rectangle(-125,-326.5,252,653.5), new cjs.Rectangle(-125,-327.4,252,654), new cjs.Rectangle(-125,-328.2,252,654.5), new cjs.Rectangle(-125,-329,252,654.9), new cjs.Rectangle(-125,-329.8,252,655.4), new cjs.Rectangle(-125,-330.2,252,655.4), new cjs.Rectangle(-125,-331,252,655.9), new cjs.Rectangle(-125,-331.8,252,656.3), new cjs.Rectangle(-125,-332.6,252,656.7), new cjs.Rectangle(-125,-333.4,252,657.2), new cjs.Rectangle(-125,-334.2,252,657.6), new cjs.Rectangle(-125,-334.6,252,657.7), new cjs.Rectangle(-125,-335.4,252,658.1), new cjs.Rectangle(-125,-336.2,252,658.6), new cjs.Rectangle(-125,-336.9,252,659), new cjs.Rectangle(-125,-337.7,252,659.4), new cjs.Rectangle(-125,-338.1,252,659.5), new cjs.Rectangle(-125,-338.9,252,659.8), new cjs.Rectangle(-125,-339.7,252,660.3), new cjs.Rectangle(-125,-340.4,252,660.7), new cjs.Rectangle(-125,-341.2,252,661.1), new cjs.Rectangle(-125,-341.9,252,661.5), new cjs.Rectangle(-125,-342.3,252,661.6), new cjs.Rectangle(-125,-343.1,252,662), new cjs.Rectangle(-125,-343.8,252,662.4), new cjs.Rectangle(-125,-344.6,252,662.8), new cjs.Rectangle(-125,-345.3,252,663.1), new cjs.Rectangle(-125,-345.8,252,663.2), new cjs.Rectangle(-125,-346.5,252,663.6), new cjs.Rectangle(-125,-347.2,252,664), new cjs.Rectangle(-125,-348,252,664.4), new cjs.Rectangle(-125,-348.7,252,664.7), new cjs.Rectangle(-125.4,-349.4,252.5,665.1), new cjs.Rectangle(-126,-350.2,253,665.5), new cjs.Rectangle(-125.5,-349.4,252.5,665.1), new cjs.Rectangle(-125,-348.7,252,664.7), new cjs.Rectangle(-125,-347.9,252,664.3), new cjs.Rectangle(-125,-347.2,252,663.9), new cjs.Rectangle(-125,-346.5,252,663.6), new cjs.Rectangle(-125,-346.1,252,663.5), new cjs.Rectangle(-125,-345.4,252,663.2), new cjs.Rectangle(-125,-344.6,252,662.7), new cjs.Rectangle(-125,-343.9,252,662.3), new cjs.Rectangle(-125,-343.2,252,662), new cjs.Rectangle(-125,-342.8,252,661.9), new cjs.Rectangle(-125,-342,252,661.5), new cjs.Rectangle(-125,-341.3,252,661.1), new cjs.Rectangle(-125,-340.5,252,660.7), new cjs.Rectangle(-125,-339.8,252,660.3), new cjs.Rectangle(-125,-339.4,252,660.2), new cjs.Rectangle(-125,-338.6,252,659.8), new cjs.Rectangle(-125,-337.9,252,659.3), new cjs.Rectangle(-125,-337.2,252,659), new cjs.Rectangle(-125,-336.4,252,658.6), new cjs.Rectangle(-125,-336,252,658.5), new cjs.Rectangle(-125,-335.2,252,658.1), new cjs.Rectangle(-125,-334.4,252,657.7), new cjs.Rectangle(-125,-333.7,252,657.3), new cjs.Rectangle(-125,-332.9,252,656.8), new cjs.Rectangle(-125,-332.4,252,656.7), new cjs.Rectangle(-125,-331.7,252,656.3), new cjs.Rectangle(-125,-330.9,252,655.8), new cjs.Rectangle(-125,-330.1,252,655.4), new cjs.Rectangle(-125,-329.3,252,655), new cjs.Rectangle(-125,-328.9,252,654.9), new cjs.Rectangle(-125,-328.1,252,654.4), new cjs.Rectangle(-125,-327.3,252,653.9), new cjs.Rectangle(-125,-326.5,252,653.5), new cjs.Rectangle(-125,-326.1,252,653.5)];


(lib.hairstyle_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hairstyle_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hairstyle_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hairstyle_check_3_2_mc();

	this.instance_1 = new lib.hairstyle_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect, rect];


(lib.hairstyle_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hairstyle_check_3_1_mc();

	this.instance_1 = new lib.hairstyle_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect, rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.glasses_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(-0.1,0.1,0.42,0.42,0,0,0,-0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
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


(lib.eyes_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-135,270,270);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyes_check_3_2_mc();

	this.instance_1 = new lib.eyes_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect, rect];


(lib.eyes_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyes_check_3_1_mc();

	this.instance_1 = new lib.eyes_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-135,270,270);
p.frameBounds = [rect, rect];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_2_img();
	this.instance.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuSvMAAAgldMAldAAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_1_img();
	this.instance.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUTMAAAgolMAldAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-135,270,270);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_2_img();
	this.instance.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuSvMAAAgldMAldAAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_1_img();
	this.instance.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUTMAAAgolMAldAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-135,270,270);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_2_img();
	this.instance.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuSvMAAAgldMAldAAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_1_img();
	this.instance.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUTMAAAgolMAldAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-135,270,270);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_2_img();
	this.instance.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuSvMAAAgldMAldAAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_1_img();
	this.instance.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUTMAAAgolMAldAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-135,270,270);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_2_img();
	this.instance.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuSvMAAAgldMAldAAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_1_img();
	this.instance.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUTMAAAgolMAldAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-135,270,270);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_2_img();
	this.instance.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuSvMAAAgldMAldAAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-130,280,260);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_1_img();
	this.instance.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuUTMAAAgolMAldAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-135,270,270);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(-0.1,0.1,0.42,0.42,0,0,0,-0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.dress_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dress_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dress_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dress_check_3_2_mc();

	this.instance_1 = new lib.dress_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect, rect];


(lib.dress_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dress_check_3_1_mc();

	this.instance_1 = new lib.dress_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect, rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_2_img();
	this.instance.setTransform(-200,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-275,440,550);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_1_img();
	this.instance.setTransform(-190,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1hbnQo7rbAAwMQAAwKI7rcQI7rdMmAAQMnAAI7LdQI7LcAAQKQAAQMo7LbQo7LcsnABQsmgBo7rcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,510);
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


(lib.closet_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(169,-75);

	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(169,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_0}]}).to({state:[{t:this.glasses_0}]},5).wait(3));

	// options
	this.earrings_2 = new lib.earrings_2_2_mc();
	this.earrings_2.setTransform(0,80);

	this.earrings_1 = new lib.earrings_1_2_mc();
	this.earrings_1.setTransform(0,-65);

	this.earrings_9 = new lib.earrings_9_2_mc();
	this.earrings_9.setTransform(0,85);

	this.earrings_3 = new lib.earrings_3_2_mc();
	this.earrings_3.setTransform(0,-60);

	this.earrings_6 = new lib.earrings_6_2_mc();
	this.earrings_6.setTransform(0,75);

	this.earrings_5 = new lib.earrings_5_2_mc();
	this.earrings_5.setTransform(0,-70);

	this.earrings_4 = new lib.earrings_4_2_mc();
	this.earrings_4.setTransform(0,-70);

	this.earrings_7 = new lib.earrings_7_2_mc();
	this.earrings_7.setTransform(0,80);

	this.earrings_8 = new lib.earrings_8_2_mc();
	this.earrings_8.setTransform(0,30);

	this.glasses_2 = new lib.glasses_2_2_mc();
	this.glasses_2.setTransform(0,65);

	this.glasses_1 = new lib.glasses_1_2_mc();
	this.glasses_1.setTransform(0,-59);

	this.glasses_3 = new lib.glasses_3_2_mc();
	this.glasses_3.setTransform(0,-51);

	this.glasses_4 = new lib.glasses_4_2_mc();
	this.glasses_4.setTransform(0,72);

	this.glasses_6 = new lib.glasses_6_2_mc();
	this.glasses_6.setTransform(0,65);

	this.glasses_5 = new lib.glasses_5_2_mc();
	this.glasses_5.setTransform(0,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1},{t:this.earrings_2}]}).to({state:[{t:this.earrings_3},{t:this.earrings_9}]},1).to({state:[{t:this.earrings_5},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_7},{t:this.earrings_4}]},1).to({state:[{t:this.earrings_8}]},1).to({state:[{t:this.glasses_1},{t:this.glasses_2}]},1).to({state:[{t:this.glasses_4},{t:this.glasses_3}]},1).to({state:[{t:this.glasses_5},{t:this.glasses_6}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_3_mc();
	this.instance.setTransform(0,-5);

	this.instance_1 = new lib.wardrobe_2_3_mc();
	this.instance_1.setTransform(0,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-125,310,280);
p.frameBounds = [rect, new cjs.Rectangle(-120,-120,310,280), new cjs.Rectangle(-120,-125,310,280), new cjs.Rectangle(-120,-130,310,296.5), new cjs.Rectangle(-120,-96,310,226), new cjs.Rectangle(-200,-119,400,299), new cjs.Rectangle(-200,-111,400,291), new cjs.Rectangle(-200,-117,400,297)];


(lib.closet_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,-40);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(0,-40);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(0,-40);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(0,-40);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,-40);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_3}]}).to({state:[{t:this.hair_2}]},1).to({state:[{t:this.hair_4}]},1).to({state:[{t:this.hair_5}]},1).to({state:[{t:this.hair_6}]},1).to({state:[{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-315,440,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(160,-52);

	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(160,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_0}]}).to({state:[{t:this.glasses_0}]},5).wait(3));

	// options
	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(0,100);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(0,-50);

	this.earrings_9 = new lib.earrings_9_1_mc();
	this.earrings_9.setTransform(0,100);

	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(0,-50);

	this.earrings_7 = new lib.earrings_7_1_mc();
	this.earrings_7.setTransform(0,100);

	this.earrings_6 = new lib.earrings_6_1_mc();
	this.earrings_6.setTransform(0,-50);

	this.earrings_8 = new lib.earrings_8_1_mc();
	this.earrings_8.setTransform(0,95);

	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(0,-60);

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(0,20);

	this.glasses_2 = new lib.glasses_2_1_mc();
	this.glasses_2.setTransform(0,93);

	this.glasses_1 = new lib.glasses_1_1_mc();
	this.glasses_1.setTransform(0,-43);

	this.glasses_3 = new lib.glasses_3_1_mc();
	this.glasses_3.setTransform(0,-44);

	this.glasses_4 = new lib.glasses_4_1_mc();
	this.glasses_4.setTransform(0,90);

	this.glasses_6 = new lib.glasses_6_1_mc();
	this.glasses_6.setTransform(0,-39);

	this.glasses_5 = new lib.glasses_5_1_mc();
	this.glasses_5.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1},{t:this.earrings_2}]}).to({state:[{t:this.earrings_3},{t:this.earrings_9}]},1).to({state:[{t:this.earrings_6},{t:this.earrings_7}]},1).to({state:[{t:this.earrings_4},{t:this.earrings_8}]},1).to({state:[{t:this.earrings_5}]},1).to({state:[{t:this.glasses_1},{t:this.glasses_2}]},1).to({state:[{t:this.glasses_4},{t:this.glasses_3}]},1).to({state:[{t:this.glasses_5},{t:this.glasses_6}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_1_mc();
	this.instance.setTransform(0,20);

	this.instance_1 = new lib.wardrobe_2_1_mc();
	this.instance_1.setTransform(0,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-125,301,285);
p.frameBounds = [rect, new cjs.Rectangle(-120,-130,301,290), new cjs.Rectangle(-120,-125,301,285), new cjs.Rectangle(-120,-130,301,285), new cjs.Rectangle(-120,-73,301,183), new cjs.Rectangle(-210,-103,420,303), new cjs.Rectangle(-210,-104,420,304), new cjs.Rectangle(-210,-99,420,299)];


(lib.closet_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(0,-30);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(0,-30);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,-30);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(0,-30);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,-30);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_5}]}).to({state:[{t:this.hair_2}]},1).to({state:[{t:this.hair_3}]},1).to({state:[{t:this.hair_4}]},1).to({state:[{t:this.hair_6}]},1).to({state:[{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-285,400,510);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(0,-30);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(0,-30);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(0,-30);

	this.dress_7 = new lib.dress_5_2_mc();
	this.dress_7.setTransform(0,-30);

	this.dress_5 = new lib.dress_6_2_mc();
	this.dress_5.setTransform(0,-30);

	this.dress_6 = new lib.dress_7_2_mc();
	this.dress_6.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2}]}).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-305,440,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.makeup_0 = new lib.makeup_0_mc();
	this.makeup_0.setTransform(-159,-60);
	this.makeup_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.makeup_0).wait(6).to({_off:false},0).wait(6));

	// options
	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(0,35);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(0,35);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(0,35);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(0,35);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(0,35);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(0,35);

	this.makeup_6 = new lib.makeup_6_2_mc();
	this.makeup_6.setTransform(0,35);

	this.makeup_2 = new lib.makeup_2_2_mc();
	this.makeup_2.setTransform(0,35);

	this.makeup_3 = new lib.makeup_3_2_mc();
	this.makeup_3.setTransform(0,35);

	this.makeup_4 = new lib.makeup_4_2_mc();
	this.makeup_4.setTransform(0,35);

	this.makeup_5 = new lib.makeup_5_2_mc();
	this.makeup_5.setTransform(0,35);

	this.makeup_1 = new lib.makeup_1_2_mc();
	this.makeup_1.setTransform(0,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_6}]}).to({state:[{t:this.eyes_2}]},1).to({state:[{t:this.eyes_3}]},1).to({state:[{t:this.eyes_4}]},1).to({state:[{t:this.eyes_5}]},1).to({state:[{t:this.eyes_1}]},1).to({state:[{t:this.makeup_6}]},1).to({state:[{t:this.makeup_2}]},1).to({state:[{t:this.makeup_3}]},1).to({state:[{t:this.makeup_4}]},1).to({state:[{t:this.makeup_5}]},1).to({state:[{t:this.makeup_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-95,280,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-180,-106,320,280), rect=new cjs.Rectangle(-180,-108,320,280), rect, rect, new cjs.Rectangle(-180,-107,320,280), new cjs.Rectangle(-180,-109,320,280)];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(0,-30);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(0,-30);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(0,-30);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(0,-30);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(0,-30);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2}]}).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-285,400,510);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.makeup_0 = new lib.makeup_0_mc();
	this.makeup_0.setTransform(-163,-52);

	this.timeline.addTween(cjs.Tween.get(this.makeup_0).to({_off:true},6).wait(6));

	// options
	this.makeup_6 = new lib.makeup_6_1_mc();
	this.makeup_6.setTransform(0,40);

	this.makeup_2 = new lib.makeup_2_1_mc();
	this.makeup_2.setTransform(0,40);

	this.makeup_3 = new lib.makeup_3_1_mc();
	this.makeup_3.setTransform(0,40);

	this.makeup_4 = new lib.makeup_4_1_mc();
	this.makeup_4.setTransform(0,40);

	this.makeup_5 = new lib.makeup_5_1_mc();
	this.makeup_5.setTransform(0,40);

	this.makeup_1 = new lib.makeup_1_1_mc();
	this.makeup_1.setTransform(0,40);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(0,25);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(0,25);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(0,25);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(0,25);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(0,25);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.makeup_6}]}).to({state:[{t:this.makeup_2}]},1).to({state:[{t:this.makeup_3}]},1).to({state:[{t:this.makeup_4}]},1).to({state:[{t:this.makeup_5}]},1).to({state:[{t:this.makeup_1}]},1).to({state:[{t:this.eyes_4}]},1).to({state:[{t:this.eyes_2}]},1).to({state:[{t:this.eyes_3}]},1).to({state:[{t:this.eyes_5}]},1).to({state:[{t:this.eyes_6}]},1).to({state:[{t:this.eyes_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184,-105,329,290);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-135,-110,270,270), rect, rect, rect, rect, rect];


(lib.circle_arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-110,240,220);
p.frameBounds = [rect];


(lib.circle_arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(0,-200,1,1,180);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-200,0,1,1,-90);
	this.checkpoint_2.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(0,200,1,1,180);
	this.checkpoint_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_1},{t:this.checkpoint_2},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,500,900);
p.frameBounds = [rect];


(lib.circle_arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.circle_arrow_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.circle_arrow_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-125,310,280);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-315,440,550);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-125,301,285);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-285,400,510);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-305,440,550);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-95,280,260);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-285,400,510);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184,-105,329,290);
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


(lib.arrow_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.arrow_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.arc_arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.arc_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-90,240,180);
p.frameBounds = [rect];


(lib.arc_arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(71.5,-63.8,1,1,-22.2);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-21,-26,1,1,-22.2);
	this.checkpoint_2.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-113.6,11.8,1,1,-22.2);
	this.checkpoint_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_1},{t:this.checkpoint_2},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arc_arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arc_arrow_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arc_arrow_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.animation_grass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.grass_mc();
	this.instance.setTransform(0,0,1,1,0,-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:2},59).to({skewX:-2},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-364.5,-129.9,726.3,179.9);
p.frameBounds = [rect, new cjs.Rectangle(-364,-129.9,725.7,179.9), new cjs.Rectangle(-364,-129.9,725.6,179.9), new cjs.Rectangle(-363.9,-129.9,725.6,179.9), new cjs.Rectangle(-363.5,-129.9,724.9,179.9), rect=new cjs.Rectangle(-363.4,-129.9,724.8,179.9), rect, rect, rect=new cjs.Rectangle(-362.9,-129.9,724.1,180), rect, rect=new cjs.Rectangle(-362.8,-129.9,724,180), rect, rect=new cjs.Rectangle(-362.3,-129.9,723.3,180), rect, new cjs.Rectangle(-362.2,-129.9,723.2,180), new cjs.Rectangle(-361.8,-129.9,722.6,180), rect=new cjs.Rectangle(-361.7,-129.9,722.5,180), rect, new cjs.Rectangle(-361.7,-129.9,722.4,180), new cjs.Rectangle(-361.2,-129.9,721.8,180), new cjs.Rectangle(-361.2,-129.9,721.7,180), new cjs.Rectangle(-361.1,-129.9,721.7,180), new cjs.Rectangle(-361.1,-129.9,721.6,180), new cjs.Rectangle(-360.6,-129.9,721,180), new cjs.Rectangle(-360.6,-129.9,720.9,180), new cjs.Rectangle(-360.5,-129.9,720.9,180), new cjs.Rectangle(-360.1,-129.9,720.2,180), new cjs.Rectangle(-360,-129.9,720.2,180), rect=new cjs.Rectangle(-360,-129.9,720.1,180), rect, new cjs.Rectangle(-359.9,-129.9,720,180), new cjs.Rectangle(-360,-129.9,720.1,180), rect=new cjs.Rectangle(-360,-129.9,720.2,180), rect, new cjs.Rectangle(-360.2,-129.9,720.8,180), new cjs.Rectangle(-360.2,-129.9,720.9,180), new cjs.Rectangle(-360.2,-129.9,721,180), new cjs.Rectangle(-360.4,-129.9,721.6,180), rect=new cjs.Rectangle(-360.4,-129.9,721.7,180), rect, new cjs.Rectangle(-360.4,-129.9,721.8,180), new cjs.Rectangle(-360.6,-129.9,722.4,180), new cjs.Rectangle(-360.6,-129.9,722.5,180), new cjs.Rectangle(-360.7,-129.9,722.5,180), new cjs.Rectangle(-360.7,-129.9,722.6,180), new cjs.Rectangle(-360.9,-129.9,723.2,180), rect=new cjs.Rectangle(-360.9,-129.9,723.3,180), rect, new cjs.Rectangle(-361,-129.9,723.9,180), new cjs.Rectangle(-361.1,-129.9,724,180), rect=new cjs.Rectangle(-361.1,-129.9,724.1,180), rect, rect=new cjs.Rectangle(-361.3,-129.9,724.8,179.9), rect, rect=new cjs.Rectangle(-361.3,-129.9,724.9,179.9), rect, rect=new cjs.Rectangle(-361.5,-129.9,725.6,179.9), rect, new cjs.Rectangle(-361.5,-129.9,725.7,179.9), new cjs.Rectangle(-361.7,-129.9,726.3,179.9), new cjs.Rectangle(-361.5,-129.9,725.7,179.9), rect=new cjs.Rectangle(-361.5,-129.9,725.6,179.9), rect, rect=new cjs.Rectangle(-361.3,-129.9,724.9,179.9), rect, rect=new cjs.Rectangle(-361.3,-129.9,724.8,179.9), rect, rect=new cjs.Rectangle(-361.1,-129.9,724.1,180), rect, rect=new cjs.Rectangle(-361.1,-129.9,724,180), rect, rect=new cjs.Rectangle(-360.9,-129.9,723.3,180), rect, new cjs.Rectangle(-360.8,-129.9,723.2,180), new cjs.Rectangle(-360.7,-129.9,722.6,180), rect=new cjs.Rectangle(-360.6,-129.9,722.5,180), rect, new cjs.Rectangle(-360.6,-129.9,722.4,180), new cjs.Rectangle(-360.4,-129.9,721.8,180), rect=new cjs.Rectangle(-360.4,-129.9,721.7,180), rect, new cjs.Rectangle(-360.4,-129.9,721.6,180), new cjs.Rectangle(-360.2,-129.9,721,180), new cjs.Rectangle(-360.2,-129.9,720.9,180), rect=new cjs.Rectangle(-360.2,-129.9,720.8,180), rect, new cjs.Rectangle(-360,-129.9,720.2,180), rect=new cjs.Rectangle(-360,-129.9,720.1,180), rect, new cjs.Rectangle(-360,-130,720,180), rect=new cjs.Rectangle(-360,-129.9,720.1,180), rect, new cjs.Rectangle(-360.1,-129.9,720.2,180), new cjs.Rectangle(-360.5,-129.9,720.8,180), rect=new cjs.Rectangle(-360.6,-129.9,720.9,180), rect, new cjs.Rectangle(-360.6,-129.9,721,180), new cjs.Rectangle(-361.1,-129.9,721.6,180), new cjs.Rectangle(-361.1,-129.9,721.7,180), new cjs.Rectangle(-361.2,-129.9,721.7,180), new cjs.Rectangle(-361.2,-129.9,721.8,180), new cjs.Rectangle(-361.7,-129.9,722.4,180), new cjs.Rectangle(-361.7,-129.9,722.5,180), new cjs.Rectangle(-361.8,-129.9,722.5,180), new cjs.Rectangle(-361.8,-129.9,722.6,180), new cjs.Rectangle(-362.3,-129.9,723.2,180), rect=new cjs.Rectangle(-362.3,-129.9,723.3,180), rect, rect=new cjs.Rectangle(-362.8,-129.9,724,180), rect, rect=new cjs.Rectangle(-362.9,-129.9,724.1,180), rect, rect=new cjs.Rectangle(-363.4,-129.9,724.8,179.9), rect, rect, new cjs.Rectangle(-363.5,-129.9,724.9,179.9), new cjs.Rectangle(-363.9,-129.9,725.6,179.9), new cjs.Rectangle(-364,-129.9,725.6,179.9), new cjs.Rectangle(-364,-129.9,725.7,179.9), new cjs.Rectangle(-364.5,-129.9,726.3,179.9)];


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
	this.instance.setTransform(0,0,0.981,0.981);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:0.602},49).to({scaleX:0.98,scaleY:0.98,alpha:0.102},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186.4,-274.8,372.9,549.6);
p.frameBounds = [rect, new cjs.Rectangle(-186.5,-274.9,373.1,549.8), new cjs.Rectangle(-186.6,-275,373.3,550.1), new cjs.Rectangle(-186.6,-275.1,373.4,550.3), new cjs.Rectangle(-186.7,-275.2,373.5,550.5), new cjs.Rectangle(-186.8,-275.3,373.7,550.7), new cjs.Rectangle(-186.9,-275.4,373.8,550.9), new cjs.Rectangle(-186.9,-275.5,374,551.1), new cjs.Rectangle(-187,-275.6,374.1,551.3), new cjs.Rectangle(-187.1,-275.7,374.3,551.5), new cjs.Rectangle(-187.1,-275.8,374.4,551.8), new cjs.Rectangle(-187.2,-275.9,374.5,552), new cjs.Rectangle(-187.3,-276,374.7,552.2), new cjs.Rectangle(-187.4,-276.1,374.8,552.3), new cjs.Rectangle(-187.4,-276.2,375,552.6), new cjs.Rectangle(-187.5,-276.3,375.1,552.8), new cjs.Rectangle(-187.6,-276.4,375.3,553), new cjs.Rectangle(-187.6,-276.6,375.4,553.2), new cjs.Rectangle(-187.7,-276.7,375.6,553.4), new cjs.Rectangle(-187.8,-276.8,375.7,553.7), new cjs.Rectangle(-187.9,-276.9,375.8,553.8), new cjs.Rectangle(-187.9,-277,376,554.1), new cjs.Rectangle(-188,-277.1,376.1,554.3), new cjs.Rectangle(-188.1,-277.2,376.3,554.5), new cjs.Rectangle(-188.1,-277.3,376.4,554.7), new cjs.Rectangle(-188.2,-277.4,376.6,554.9), new cjs.Rectangle(-188.3,-277.5,376.7,555.1), new cjs.Rectangle(-188.4,-277.6,376.9,555.3), new cjs.Rectangle(-188.4,-277.7,377,555.6), new cjs.Rectangle(-188.5,-277.8,377.1,555.8), new cjs.Rectangle(-188.6,-277.9,377.3,556), new cjs.Rectangle(-188.7,-278,377.4,556.2), new cjs.Rectangle(-188.7,-278.1,377.6,556.4), new cjs.Rectangle(-188.8,-278.2,377.7,556.6), new cjs.Rectangle(-188.9,-278.4,377.9,556.8), new cjs.Rectangle(-188.9,-278.5,378,557), new cjs.Rectangle(-189,-278.6,378.1,557.3), new cjs.Rectangle(-189.1,-278.7,378.3,557.5), new cjs.Rectangle(-189.2,-278.8,378.4,557.7), new cjs.Rectangle(-189.2,-278.9,378.6,557.8), new cjs.Rectangle(-189.3,-279,378.7,558.1), new cjs.Rectangle(-189.4,-279.1,378.9,558.3), new cjs.Rectangle(-189.4,-279.2,379,558.5), new cjs.Rectangle(-189.5,-279.3,379.2,558.7), new cjs.Rectangle(-189.6,-279.4,379.3,558.9), new cjs.Rectangle(-189.7,-279.5,379.4,559.2), new cjs.Rectangle(-189.7,-279.6,379.6,559.3), new cjs.Rectangle(-189.8,-279.7,379.7,559.6), new cjs.Rectangle(-189.9,-279.8,379.9,559.8), new cjs.Rectangle(-190,-280,380,560), new cjs.Rectangle(-189.9,-279.8,379.9,559.8), new cjs.Rectangle(-189.8,-279.7,379.7,559.6), new cjs.Rectangle(-189.7,-279.6,379.6,559.4), new cjs.Rectangle(-189.7,-279.5,379.5,559.2), new cjs.Rectangle(-189.6,-279.4,379.3,559), new cjs.Rectangle(-189.5,-279.3,379.2,558.8), new cjs.Rectangle(-189.5,-279.2,379,558.6), new cjs.Rectangle(-189.4,-279.1,378.9,558.3), new cjs.Rectangle(-189.3,-279,378.8,558.2), new cjs.Rectangle(-189.2,-278.9,378.6,557.9), new cjs.Rectangle(-189.2,-278.8,378.5,557.7), new cjs.Rectangle(-189.1,-278.7,378.3,557.5), new cjs.Rectangle(-189,-278.6,378.2,557.3), new cjs.Rectangle(-189,-278.5,378,557.1), new cjs.Rectangle(-188.9,-278.4,377.9,556.9), new cjs.Rectangle(-188.8,-278.3,377.8,556.7), new cjs.Rectangle(-188.7,-278.2,377.6,556.5), new cjs.Rectangle(-188.7,-278.1,377.5,556.3), new cjs.Rectangle(-188.6,-278,377.3,556.1), new cjs.Rectangle(-188.5,-277.9,377.2,555.8), new cjs.Rectangle(-188.5,-277.8,377.1,555.7), new cjs.Rectangle(-188.4,-277.7,376.9,555.5), new cjs.Rectangle(-188.3,-277.6,376.8,555.3), new cjs.Rectangle(-188.3,-277.5,376.6,555), new cjs.Rectangle(-188.2,-277.4,376.5,554.8), new cjs.Rectangle(-188.1,-277.3,376.4,554.6), new cjs.Rectangle(-188,-277.1,376.2,554.4), new cjs.Rectangle(-188,-277,376.1,554.2), new cjs.Rectangle(-187.9,-276.9,375.9,554), new cjs.Rectangle(-187.8,-276.8,375.8,553.8), new cjs.Rectangle(-187.8,-276.7,375.6,553.6), new cjs.Rectangle(-187.7,-276.6,375.5,553.3), new cjs.Rectangle(-187.6,-276.5,375.4,553.2), new cjs.Rectangle(-187.5,-276.4,375.2,553), new cjs.Rectangle(-187.5,-276.3,375.1,552.8), new cjs.Rectangle(-187.4,-276.2,374.9,552.6), new cjs.Rectangle(-187.3,-276.1,374.8,552.3), new cjs.Rectangle(-187.3,-276,374.7,552.1), new cjs.Rectangle(-187.2,-275.9,374.5,551.9), new cjs.Rectangle(-187.1,-275.8,374.4,551.7), new cjs.Rectangle(-187.1,-275.7,374.2,551.5), new cjs.Rectangle(-187,-275.6,374.1,551.3), new cjs.Rectangle(-186.9,-275.5,374,551.1), new cjs.Rectangle(-186.8,-275.4,373.8,550.8), new cjs.Rectangle(-186.8,-275.3,373.7,550.7), new cjs.Rectangle(-186.7,-275.2,373.5,550.5), new cjs.Rectangle(-186.6,-275.1,373.4,550.3), new cjs.Rectangle(-186.6,-275,373.3,550.1), new cjs.Rectangle(-186.5,-274.9,373.1,549.8), new cjs.Rectangle(-186.4,-274.8,372.9,549.6)];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2026 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var body_mc = this.body_mc;
		body_mc.gotoAndStop(0);
		body_mc.gotoAndStop(Math.floor(Math.random() * body_mc.totalFrames));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.masseuse_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-295,-450,600,900);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:39,end:69});

	// animation
	this.instance = new lib.curtain_2_mc();
	this.instance.setTransform(400,1100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:400},12).to({y:450},8).wait(15).to({y:1100,alpha:0.012},15).wait(11));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},13).wait(35).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,0,1600,1550), new cjs.Rectangle(-400,0,1600,1491.7), new cjs.Rectangle(-400,0,1600,1433.4), new cjs.Rectangle(-400,0,1600,1375), new cjs.Rectangle(-400,0,1600,1316.7), new cjs.Rectangle(-400,0,1600,1258.4), new cjs.Rectangle(-400,0,1600,1200), new cjs.Rectangle(-400,0,1600,1141.7), new cjs.Rectangle(-400,0,1600,1083.4), new cjs.Rectangle(-400,0,1600,1025), new cjs.Rectangle(-400,0,1600,966.7), new cjs.Rectangle(-400,0,1600,908.4), new cjs.Rectangle(-400,-50,1600,900), new cjs.Rectangle(-400,-43.7,1600,900), new cjs.Rectangle(-400,-37.5,1600,900), new cjs.Rectangle(-400,-31.2,1600,900), new cjs.Rectangle(-400,-25,1600,900), new cjs.Rectangle(-400,-18.7,1600,900), new cjs.Rectangle(-400,-12.5,1600,900), new cjs.Rectangle(-400,-6.2,1600,900), rect=new cjs.Rectangle(-400,0,1600,900), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,0,1600,943.4), new cjs.Rectangle(-400,0,1600,986.7), new cjs.Rectangle(-400,0,1600,1030), new cjs.Rectangle(-400,0,1600,1073.4), new cjs.Rectangle(-400,0,1600,1116.7), new cjs.Rectangle(-400,0,1600,1160), new cjs.Rectangle(-400,0,1600,1203.4), new cjs.Rectangle(-400,0,1600,1246.7), new cjs.Rectangle(-400,0,1600,1290), new cjs.Rectangle(-400,0,1600,1333.4), new cjs.Rectangle(-400,0,1600,1376.7), new cjs.Rectangle(-400,0,1600,1420), new cjs.Rectangle(-400,0,1600,1463.4), new cjs.Rectangle(-400,0,1600,1506.7), rect=new cjs.Rectangle(-400,0,1600,1550), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(105,650,600,900)];


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
	this.instance_1.alpha = 0.602;

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
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
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


(lib.gravity_big_explosion_2_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gravity_big_explosion_18_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.82},24).to({scaleX:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-35,110,70);
p.frameBounds = [rect, new cjs.Rectangle(-54.5,-35,109.2,70), new cjs.Rectangle(-54.1,-35,108.4,70), new cjs.Rectangle(-53.7,-35,107.5,70), new cjs.Rectangle(-53.3,-35,106.7,70), new cjs.Rectangle(-52.9,-35,105.9,70), new cjs.Rectangle(-52.4,-35,105,70), new cjs.Rectangle(-52,-35,104.2,70), new cjs.Rectangle(-51.6,-35,103.4,70), new cjs.Rectangle(-51.2,-35,102.5,70), new cjs.Rectangle(-50.8,-35,101.7,70), new cjs.Rectangle(-50.4,-35,100.9,70), new cjs.Rectangle(-49.9,-35,100,70), new cjs.Rectangle(-49.5,-35,99.2,70), new cjs.Rectangle(-49.1,-35,98.4,70), new cjs.Rectangle(-48.7,-35,97.5,70), new cjs.Rectangle(-48.3,-35,96.7,70), new cjs.Rectangle(-47.9,-35,95.9,70), new cjs.Rectangle(-47.4,-35,95,70), new cjs.Rectangle(-47,-35,94.2,70), new cjs.Rectangle(-46.6,-35,93.4,70), new cjs.Rectangle(-46.2,-35,92.5,70), new cjs.Rectangle(-45.8,-35,91.7,70), new cjs.Rectangle(-45.4,-35,90.9,70), new cjs.Rectangle(-45,-35,90,70), new cjs.Rectangle(-45.4,-35,91,70), new cjs.Rectangle(-45.9,-35,92,70), new cjs.Rectangle(-46.4,-35,93,70), new cjs.Rectangle(-46.9,-35,94,70), new cjs.Rectangle(-47.4,-35,95,70), new cjs.Rectangle(-47.9,-35,96,70), new cjs.Rectangle(-48.4,-35,97,70), new cjs.Rectangle(-48.9,-35,98,70), new cjs.Rectangle(-49.4,-35,99,70), new cjs.Rectangle(-49.9,-35,100,70), new cjs.Rectangle(-50.4,-35,101,70), new cjs.Rectangle(-50.9,-35,102,70), new cjs.Rectangle(-51.4,-35,103,70), new cjs.Rectangle(-51.9,-35,104,70), new cjs.Rectangle(-52.4,-35,105,70), new cjs.Rectangle(-52.9,-35,106,70), new cjs.Rectangle(-53.4,-35,107,70), new cjs.Rectangle(-53.9,-35,108,70), new cjs.Rectangle(-54.4,-35,109,70), new cjs.Rectangle(-55,-35,110,70)];


(lib.gravity_big_explosion_2_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gravity_big_explosion_17_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.89},24).to({scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-45,-44.7,90,89.6), new cjs.Rectangle(-45,-44.5,90,89.2), new cjs.Rectangle(-45,-44.3,90,88.8), new cjs.Rectangle(-45,-44.1,90,88.4), new cjs.Rectangle(-45,-43.9,90,87.9), new cjs.Rectangle(-45,-43.7,90,87.5), new cjs.Rectangle(-45,-43.5,90,87.1), new cjs.Rectangle(-45,-43.3,90,86.7), new cjs.Rectangle(-45,-43.1,90,86.3), new cjs.Rectangle(-45,-42.9,90,85.9), new cjs.Rectangle(-45,-42.7,90,85.4), new cjs.Rectangle(-45,-42.4,90,85), new cjs.Rectangle(-45,-42.2,90,84.6), new cjs.Rectangle(-45,-42,90,84.2), new cjs.Rectangle(-45,-41.8,90,83.8), new cjs.Rectangle(-45,-41.6,90,83.4), new cjs.Rectangle(-45,-41.4,90,82.9), new cjs.Rectangle(-45,-41.2,90,82.5), new cjs.Rectangle(-45,-41,90,82.1), new cjs.Rectangle(-45,-40.8,90,81.7), new cjs.Rectangle(-45,-40.6,90,81.3), new cjs.Rectangle(-45,-40.4,90,80.9), new cjs.Rectangle(-45,-40.2,90,80.4), new cjs.Rectangle(-45,-40,90,80), new cjs.Rectangle(-45,-40.1,90,80.4), new cjs.Rectangle(-45,-40.3,90,80.7), new cjs.Rectangle(-45,-40.4,90,81), new cjs.Rectangle(-45,-40.6,90,81.4), new cjs.Rectangle(-45,-40.8,90,81.7), new cjs.Rectangle(-45,-40.9,90,82), new cjs.Rectangle(-45,-41.1,90,82.4), new cjs.Rectangle(-45,-41.3,90,82.7), new cjs.Rectangle(-45,-41.4,90,83), new cjs.Rectangle(-45,-41.6,90,83.4), new cjs.Rectangle(-45,-41.8,90,83.7), new cjs.Rectangle(-45,-41.9,90,84), new cjs.Rectangle(-45,-42.1,90,84.4), new cjs.Rectangle(-45,-42.3,90,84.7), new cjs.Rectangle(-45,-42.4,90,85), new cjs.Rectangle(-45,-42.6,90,85.4), new cjs.Rectangle(-45,-42.8,90,85.7), new cjs.Rectangle(-45,-42.9,90,86), new cjs.Rectangle(-45,-43.1,90,86.4), new cjs.Rectangle(-45,-43.3,90,86.7), new cjs.Rectangle(-45,-43.4,90,87), new cjs.Rectangle(-45,-43.6,90,87.4), new cjs.Rectangle(-45,-43.8,90,87.7), new cjs.Rectangle(-45,-43.9,90,88), new cjs.Rectangle(-45,-44.1,90,88.4), new cjs.Rectangle(-45,-44.3,90,88.7), new cjs.Rectangle(-45,-44.4,90,89), new cjs.Rectangle(-45,-44.6,90,89.4), new cjs.Rectangle(-45,-44.8,90,89.7), new cjs.Rectangle(-45,-45,90,90)];


(lib.gravity_big_explosion_2_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gravity_big_explosion_16_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.89},19).to({scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-45,-44.7,90,89.5), new cjs.Rectangle(-45,-44.4,90,89), new cjs.Rectangle(-45,-44.2,90,88.4), new cjs.Rectangle(-45,-43.9,90,87.9), new cjs.Rectangle(-45,-43.6,90,87.4), new cjs.Rectangle(-45,-43.4,90,86.9), new cjs.Rectangle(-45,-43.1,90,86.3), new cjs.Rectangle(-45,-42.8,90,85.8), new cjs.Rectangle(-45,-42.6,90,85.3), new cjs.Rectangle(-45,-42.3,90,84.8), new cjs.Rectangle(-45,-42.1,90,84.2), new cjs.Rectangle(-45,-41.8,90,83.7), new cjs.Rectangle(-45,-41.5,90,83.2), new cjs.Rectangle(-45,-41.3,90,82.7), new cjs.Rectangle(-45,-41,90,82.1), new cjs.Rectangle(-45,-40.7,90,81.6), new cjs.Rectangle(-45,-40.5,90,81.1), new cjs.Rectangle(-45,-40.2,90,80.6), new cjs.Rectangle(-45,-40,90,80), new cjs.Rectangle(-45,-40.2,90,80.5), new cjs.Rectangle(-45,-40.4,90,81), new cjs.Rectangle(-45,-40.7,90,81.5), new cjs.Rectangle(-45,-40.9,90,82), new cjs.Rectangle(-45,-41.2,90,82.5), new cjs.Rectangle(-45,-41.4,90,83), new cjs.Rectangle(-45,-41.7,90,83.5), new cjs.Rectangle(-45,-41.9,90,84), new cjs.Rectangle(-45,-42.2,90,84.5), new cjs.Rectangle(-45,-42.4,90,85), new cjs.Rectangle(-45,-42.7,90,85.5), new cjs.Rectangle(-45,-42.9,90,86), new cjs.Rectangle(-45,-43.2,90,86.5), new cjs.Rectangle(-45,-43.4,90,87), new cjs.Rectangle(-45,-43.7,90,87.5), new cjs.Rectangle(-45,-43.9,90,88), new cjs.Rectangle(-45,-44.2,90,88.5), new cjs.Rectangle(-45,-44.4,90,89), new cjs.Rectangle(-45,-44.7,90,89.5), new cjs.Rectangle(-45,-45,90,90)];


(lib.gravity_big_explosion_2_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gravity_big_explosion_15_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.91},19).to({scaleX:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-30,110,60);
p.frameBounds = [rect, new cjs.Rectangle(-54.7,-30,109.5,60), new cjs.Rectangle(-54.4,-30,109,60), new cjs.Rectangle(-54.2,-30,108.4,60), new cjs.Rectangle(-53.9,-30,107.9,60), new cjs.Rectangle(-53.6,-30,107.4,60), new cjs.Rectangle(-53.4,-30,106.9,60), new cjs.Rectangle(-53.1,-30,106.3,60), new cjs.Rectangle(-52.8,-30,105.8,60), new cjs.Rectangle(-52.6,-30,105.3,60), new cjs.Rectangle(-52.3,-30,104.8,60), new cjs.Rectangle(-52.1,-30,104.2,60), new cjs.Rectangle(-51.8,-30,103.7,60), new cjs.Rectangle(-51.5,-30,103.2,60), new cjs.Rectangle(-51.3,-30,102.7,60), new cjs.Rectangle(-51,-30,102.1,60), new cjs.Rectangle(-50.7,-30,101.6,60), new cjs.Rectangle(-50.5,-30,101.1,60), new cjs.Rectangle(-50.2,-30,100.6,60), new cjs.Rectangle(-50,-30,100,60), new cjs.Rectangle(-50.1,-30,100.4,60), new cjs.Rectangle(-50.3,-30,100.7,60), new cjs.Rectangle(-50.4,-30,101,60), new cjs.Rectangle(-50.6,-30,101.4,60), new cjs.Rectangle(-50.8,-30,101.7,60), new cjs.Rectangle(-50.9,-30,102,60), new cjs.Rectangle(-51.1,-30,102.4,60), new cjs.Rectangle(-51.3,-30,102.7,60), new cjs.Rectangle(-51.4,-30,103,60), new cjs.Rectangle(-51.6,-30,103.4,60), new cjs.Rectangle(-51.8,-30,103.7,60), new cjs.Rectangle(-51.9,-30,104,60), new cjs.Rectangle(-52.1,-30,104.4,60), new cjs.Rectangle(-52.3,-30,104.7,60), new cjs.Rectangle(-52.4,-30,105,60), new cjs.Rectangle(-52.6,-30,105.4,60), new cjs.Rectangle(-52.8,-30,105.7,60), new cjs.Rectangle(-52.9,-30,106,60), new cjs.Rectangle(-53.1,-30,106.4,60), new cjs.Rectangle(-53.3,-30,106.7,60), new cjs.Rectangle(-53.4,-30,107,60), new cjs.Rectangle(-53.6,-30,107.4,60), new cjs.Rectangle(-53.8,-30,107.7,60), new cjs.Rectangle(-53.9,-30,108,60), new cjs.Rectangle(-54.1,-30,108.4,60), new cjs.Rectangle(-54.3,-30,108.7,60), new cjs.Rectangle(-54.4,-30,109,60), new cjs.Rectangle(-54.6,-30,109.4,60), new cjs.Rectangle(-54.8,-30,109.7,60), new cjs.Rectangle(-55,-30,110,60)];


(lib.gravity_big_explosion_2_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gravity_big_explosion_14_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92,scaleY:0.92},19).to({scaleX:1,scaleY:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-59.7,-59.7,119.5,119.5), new cjs.Rectangle(-59.4,-59.4,119,119), new cjs.Rectangle(-59.2,-59.2,118.4,118.4), new cjs.Rectangle(-58.9,-58.9,117.9,117.9), new cjs.Rectangle(-58.6,-58.6,117.4,117.4), new cjs.Rectangle(-58.4,-58.4,116.9,116.9), new cjs.Rectangle(-58.1,-58.1,116.3,116.3), new cjs.Rectangle(-57.8,-57.8,115.8,115.8), new cjs.Rectangle(-57.6,-57.6,115.3,115.3), new cjs.Rectangle(-57.3,-57.3,114.8,114.8), new cjs.Rectangle(-57.1,-57.1,114.2,114.2), new cjs.Rectangle(-56.8,-56.8,113.7,113.7), new cjs.Rectangle(-56.5,-56.5,113.2,113.2), new cjs.Rectangle(-56.3,-56.3,112.7,112.7), new cjs.Rectangle(-56,-56,112.1,112.1), new cjs.Rectangle(-55.7,-55.7,111.6,111.6), new cjs.Rectangle(-55.5,-55.5,111.1,111.1), new cjs.Rectangle(-55.2,-55.2,110.6,110.6), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-55.1,-55.1,110.4,110.4), new cjs.Rectangle(-55.3,-55.3,110.8,110.8), new cjs.Rectangle(-55.5,-55.5,111.2,111.2), new cjs.Rectangle(-55.7,-55.7,111.6,111.6), new cjs.Rectangle(-55.9,-55.9,112,112), new cjs.Rectangle(-56.1,-56.1,112.4,112.4), new cjs.Rectangle(-56.3,-56.3,112.8,112.8), new cjs.Rectangle(-56.5,-56.5,113.2,113.2), new cjs.Rectangle(-56.7,-56.7,113.6,113.6), new cjs.Rectangle(-56.9,-56.9,114,114), new cjs.Rectangle(-57.1,-57.1,114.4,114.4), new cjs.Rectangle(-57.3,-57.3,114.8,114.8), new cjs.Rectangle(-57.5,-57.5,115.2,115.2), new cjs.Rectangle(-57.7,-57.7,115.6,115.6), new cjs.Rectangle(-57.9,-57.9,116,116), new cjs.Rectangle(-58.1,-58.1,116.4,116.4), new cjs.Rectangle(-58.3,-58.3,116.8,116.8), new cjs.Rectangle(-58.5,-58.5,117.2,117.2), new cjs.Rectangle(-58.7,-58.7,117.6,117.6), new cjs.Rectangle(-58.9,-58.9,118,118), new cjs.Rectangle(-59.1,-59.1,118.4,118.4), new cjs.Rectangle(-59.3,-59.3,118.8,118.8), new cjs.Rectangle(-59.5,-59.5,119.2,119.2), new cjs.Rectangle(-59.7,-59.7,119.6,119.6), new cjs.Rectangle(-60,-60,120,120)];


(lib.gravity_big_explosion_2_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gravity_big_explosion_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92},34).to({scaleX:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-30,130,60);
p.frameBounds = [rect, new cjs.Rectangle(-64.8,-30,129.7,60), new cjs.Rectangle(-64.7,-30,129.4,60), new cjs.Rectangle(-64.5,-30,129.1,60), new cjs.Rectangle(-64.4,-30,128.8,60), new cjs.Rectangle(-64.2,-30,128.6,60), new cjs.Rectangle(-64.1,-30,128.3,60), new cjs.Rectangle(-63.9,-30,128,60), new cjs.Rectangle(-63.8,-30,127.7,60), new cjs.Rectangle(-63.6,-30,127.4,60), new cjs.Rectangle(-63.5,-30,127.1,60), new cjs.Rectangle(-63.3,-30,126.8,60), new cjs.Rectangle(-63.2,-30,126.5,60), new cjs.Rectangle(-63,-30,126.2,60), new cjs.Rectangle(-62.9,-30,125.9,60), new cjs.Rectangle(-62.7,-30,125.6,60), new cjs.Rectangle(-62.6,-30,125.3,60), new cjs.Rectangle(-62.5,-30,125,60), new cjs.Rectangle(-62.3,-30,124.7,60), new cjs.Rectangle(-62.2,-30,124.4,60), new cjs.Rectangle(-62,-30,124.1,60), new cjs.Rectangle(-61.9,-30,123.8,60), new cjs.Rectangle(-61.7,-30,123.6,60), new cjs.Rectangle(-61.6,-30,123.3,60), new cjs.Rectangle(-61.4,-30,123,60), new cjs.Rectangle(-61.3,-30,122.7,60), new cjs.Rectangle(-61.1,-30,122.4,60), new cjs.Rectangle(-61,-30,122.1,60), new cjs.Rectangle(-60.8,-30,121.8,60), new cjs.Rectangle(-60.7,-30,121.5,60), new cjs.Rectangle(-60.5,-30,121.2,60), new cjs.Rectangle(-60.4,-30,120.9,60), new cjs.Rectangle(-60.2,-30,120.6,60), new cjs.Rectangle(-60.1,-30,120.3,60), new cjs.Rectangle(-60,-30,120,60), new cjs.Rectangle(-60.1,-30,120.4,60), new cjs.Rectangle(-60.3,-30,120.8,60), new cjs.Rectangle(-60.5,-30,121.2,60), new cjs.Rectangle(-60.7,-30,121.6,60), new cjs.Rectangle(-60.9,-30,122,60), new cjs.Rectangle(-61.1,-30,122.4,60), new cjs.Rectangle(-61.3,-30,122.8,60), new cjs.Rectangle(-61.5,-30,123.2,60), new cjs.Rectangle(-61.7,-30,123.6,60), new cjs.Rectangle(-61.9,-30,124,60), new cjs.Rectangle(-62.1,-30,124.4,60), new cjs.Rectangle(-62.3,-30,124.8,60), new cjs.Rectangle(-62.5,-30,125.2,60), new cjs.Rectangle(-62.7,-30,125.6,60), new cjs.Rectangle(-62.9,-30,126,60), new cjs.Rectangle(-63.1,-30,126.4,60), new cjs.Rectangle(-63.3,-30,126.8,60), new cjs.Rectangle(-63.5,-30,127.2,60), new cjs.Rectangle(-63.7,-30,127.6,60), new cjs.Rectangle(-63.9,-30,128,60), new cjs.Rectangle(-64.1,-30,128.4,60), new cjs.Rectangle(-64.3,-30,128.8,60), new cjs.Rectangle(-64.5,-30,129.2,60), new cjs.Rectangle(-64.7,-30,129.6,60), new cjs.Rectangle(-65,-30,130,60)];


(lib.gravity_big_explosion_2_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// amimation
	this.instance = new lib.gravity_big_explosion_12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.89},24).to({scaleX:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-35,90,70);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-35,89.6,70), new cjs.Rectangle(-44.5,-35,89.2,70), new cjs.Rectangle(-44.3,-35,88.8,70), new cjs.Rectangle(-44.1,-35,88.4,70), new cjs.Rectangle(-43.9,-35,87.9,70), new cjs.Rectangle(-43.7,-35,87.5,70), new cjs.Rectangle(-43.5,-35,87.1,70), new cjs.Rectangle(-43.3,-35,86.7,70), new cjs.Rectangle(-43.1,-35,86.3,70), new cjs.Rectangle(-42.9,-35,85.9,70), new cjs.Rectangle(-42.7,-35,85.4,70), new cjs.Rectangle(-42.4,-35,85,70), new cjs.Rectangle(-42.2,-35,84.6,70), new cjs.Rectangle(-42,-35,84.2,70), new cjs.Rectangle(-41.8,-35,83.8,70), new cjs.Rectangle(-41.6,-35,83.4,70), new cjs.Rectangle(-41.4,-35,82.9,70), new cjs.Rectangle(-41.2,-35,82.5,70), new cjs.Rectangle(-41,-35,82.1,70), new cjs.Rectangle(-40.8,-35,81.7,70), new cjs.Rectangle(-40.6,-35,81.3,70), new cjs.Rectangle(-40.4,-35,80.9,70), new cjs.Rectangle(-40.2,-35,80.4,70), new cjs.Rectangle(-40,-35,80,70), new cjs.Rectangle(-40.1,-35,80.4,70), new cjs.Rectangle(-40.3,-35,80.8,70), new cjs.Rectangle(-40.5,-35,81.2,70), new cjs.Rectangle(-40.7,-35,81.6,70), new cjs.Rectangle(-40.9,-35,82,70), new cjs.Rectangle(-41.1,-35,82.4,70), new cjs.Rectangle(-41.3,-35,82.8,70), new cjs.Rectangle(-41.5,-35,83.2,70), new cjs.Rectangle(-41.7,-35,83.6,70), new cjs.Rectangle(-41.9,-35,84,70), new cjs.Rectangle(-42.1,-35,84.4,70), new cjs.Rectangle(-42.3,-35,84.8,70), new cjs.Rectangle(-42.5,-35,85.2,70), new cjs.Rectangle(-42.7,-35,85.6,70), new cjs.Rectangle(-42.9,-35,86,70), new cjs.Rectangle(-43.1,-35,86.4,70), new cjs.Rectangle(-43.3,-35,86.8,70), new cjs.Rectangle(-43.5,-35,87.2,70), new cjs.Rectangle(-43.7,-35,87.6,70), new cjs.Rectangle(-43.9,-35,88,70), new cjs.Rectangle(-44.1,-35,88.4,70), new cjs.Rectangle(-44.3,-35,88.8,70), new cjs.Rectangle(-44.5,-35,89.2,70), new cjs.Rectangle(-44.7,-35,89.6,70), new cjs.Rectangle(-45,-35,90,70)];


(lib.gravity_big_explosion_2_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gravity_big_explosion_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.85},29).to({scaleX:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-30,130,60);
p.frameBounds = [rect, new cjs.Rectangle(-64.6,-30,129.3,60), new cjs.Rectangle(-64.3,-30,128.6,60), new cjs.Rectangle(-63.9,-30,128,60), new cjs.Rectangle(-63.6,-30,127.3,60), new cjs.Rectangle(-63.2,-30,126.6,60), new cjs.Rectangle(-62.9,-30,125.9,60), new cjs.Rectangle(-62.5,-30,125.2,60), new cjs.Rectangle(-62.2,-30,124.5,60), new cjs.Rectangle(-61.8,-30,123.8,60), new cjs.Rectangle(-61.5,-30,123.1,60), new cjs.Rectangle(-61.2,-30,122.4,60), new cjs.Rectangle(-60.8,-30,121.7,60), new cjs.Rectangle(-60.5,-30,121.1,60), new cjs.Rectangle(-60.1,-30,120.4,60), new cjs.Rectangle(-59.8,-30,119.7,60), new cjs.Rectangle(-59.4,-30,119,60), new cjs.Rectangle(-59.1,-30,118.3,60), new cjs.Rectangle(-58.7,-30,117.6,60), new cjs.Rectangle(-58.4,-30,116.9,60), new cjs.Rectangle(-58.1,-30,116.2,60), new cjs.Rectangle(-57.7,-30,115.5,60), new cjs.Rectangle(-57.4,-30,114.9,60), new cjs.Rectangle(-57,-30,114.2,60), new cjs.Rectangle(-56.7,-30,113.5,60), new cjs.Rectangle(-56.3,-30,112.8,60), new cjs.Rectangle(-56,-30,112.1,60), new cjs.Rectangle(-55.6,-30,111.4,60), new cjs.Rectangle(-55.3,-30,110.7,60), new cjs.Rectangle(-55,-30,110,60), new cjs.Rectangle(-55.3,-30,110.7,60), new cjs.Rectangle(-55.6,-30,111.4,60), new cjs.Rectangle(-55.9,-30,112,60), new cjs.Rectangle(-56.3,-30,112.7,60), new cjs.Rectangle(-56.6,-30,113.4,60), new cjs.Rectangle(-56.9,-30,114,60), new cjs.Rectangle(-57.3,-30,114.7,60), new cjs.Rectangle(-57.6,-30,115.4,60), new cjs.Rectangle(-57.9,-30,116,60), new cjs.Rectangle(-58.3,-30,116.7,60), new cjs.Rectangle(-58.6,-30,117.4,60), new cjs.Rectangle(-58.9,-30,118,60), new cjs.Rectangle(-59.3,-30,118.7,60), new cjs.Rectangle(-59.6,-30,119.4,60), new cjs.Rectangle(-59.9,-30,120,60), new cjs.Rectangle(-60.3,-30,120.7,60), new cjs.Rectangle(-60.6,-30,121.4,60), new cjs.Rectangle(-60.9,-30,122,60), new cjs.Rectangle(-61.3,-30,122.7,60), new cjs.Rectangle(-61.6,-30,123.4,60), new cjs.Rectangle(-61.9,-30,124,60), new cjs.Rectangle(-62.3,-30,124.7,60), new cjs.Rectangle(-62.6,-30,125.4,60), new cjs.Rectangle(-62.9,-30,126,60), new cjs.Rectangle(-63.3,-30,126.7,60), new cjs.Rectangle(-63.6,-30,127.4,60), new cjs.Rectangle(-63.9,-30,128,60), new cjs.Rectangle(-64.3,-30,128.6,60), new cjs.Rectangle(-64.6,-30,129.4,60), new cjs.Rectangle(-65,-30,130,60)];


(lib.gravity_big_explosion_2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gravity_big_explosion_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.77},29).to({scaleX:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-35,130,70);
p.frameBounds = [rect, new cjs.Rectangle(-64.4,-35,129,70), new cjs.Rectangle(-63.9,-35,128,70), new cjs.Rectangle(-63.4,-35,126.9,70), new cjs.Rectangle(-62.9,-35,125.9,70), new cjs.Rectangle(-62.4,-35,124.9,70), new cjs.Rectangle(-61.8,-35,123.8,70), new cjs.Rectangle(-61.3,-35,122.8,70), new cjs.Rectangle(-60.8,-35,121.7,70), new cjs.Rectangle(-60.3,-35,120.7,70), new cjs.Rectangle(-59.8,-35,119.7,70), new cjs.Rectangle(-59.3,-35,118.6,70), new cjs.Rectangle(-58.7,-35,117.6,70), new cjs.Rectangle(-58.2,-35,116.6,70), new cjs.Rectangle(-57.7,-35,115.5,70), new cjs.Rectangle(-57.2,-35,114.5,70), new cjs.Rectangle(-56.7,-35,113.5,70), new cjs.Rectangle(-56.2,-35,112.4,70), new cjs.Rectangle(-55.6,-35,111.4,70), new cjs.Rectangle(-55.1,-35,110.4,70), new cjs.Rectangle(-54.6,-35,109.3,70), new cjs.Rectangle(-54.1,-35,108.3,70), new cjs.Rectangle(-53.6,-35,107.3,70), new cjs.Rectangle(-53.1,-35,106.2,70), new cjs.Rectangle(-52.5,-35,105.2,70), new cjs.Rectangle(-52,-35,104.2,70), new cjs.Rectangle(-51.5,-35,103.1,70), new cjs.Rectangle(-51,-35,102.1,70), new cjs.Rectangle(-50.5,-35,101.1,70), new cjs.Rectangle(-50,-35,100,70), new cjs.Rectangle(-50.4,-35,101,70), new cjs.Rectangle(-50.9,-35,102,70), new cjs.Rectangle(-51.4,-35,103,70), new cjs.Rectangle(-51.9,-35,104,70), new cjs.Rectangle(-52.4,-35,105,70), new cjs.Rectangle(-52.9,-35,106,70), new cjs.Rectangle(-53.4,-35,107,70), new cjs.Rectangle(-53.9,-35,108,70), new cjs.Rectangle(-54.4,-35,109,70), new cjs.Rectangle(-54.9,-35,110,70), new cjs.Rectangle(-55.4,-35,111,70), new cjs.Rectangle(-55.9,-35,112,70), new cjs.Rectangle(-56.4,-35,113,70), new cjs.Rectangle(-56.9,-35,114,70), new cjs.Rectangle(-57.4,-35,115,70), new cjs.Rectangle(-57.9,-35,116,70), new cjs.Rectangle(-58.4,-35,117,70), new cjs.Rectangle(-58.9,-35,118,70), new cjs.Rectangle(-59.4,-35,119,70), new cjs.Rectangle(-59.9,-35,120,70), new cjs.Rectangle(-60.4,-35,121,70), new cjs.Rectangle(-60.9,-35,122,70), new cjs.Rectangle(-61.4,-35,123,70), new cjs.Rectangle(-61.9,-35,124,70), new cjs.Rectangle(-62.4,-35,125,70), new cjs.Rectangle(-62.9,-35,126,70), new cjs.Rectangle(-63.4,-35,127,70), new cjs.Rectangle(-63.9,-35,128,70), new cjs.Rectangle(-64.4,-35,129,70), new cjs.Rectangle(-65,-35,130,70)];


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
		@copyright 2023 edapskov v 1.1
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
				window.open("https://x.com/DLstudio_2012", '_blank');
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

	// bow
	this.instance = new lib.bow_mc();
	this.instance.setTransform(55,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// icon
	this.instance_1 = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-110,210,205);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-110,211,205), new cjs.Rectangle(-97,-110,212,205), new cjs.Rectangle(-98,-110,213,205), new cjs.Rectangle(-99,-110,214,205), new cjs.Rectangle(-100,-110,215,205), new cjs.Rectangle(-99,-110,214,205), new cjs.Rectangle(-98,-110,213,205), new cjs.Rectangle(-97,-110,212,205), new cjs.Rectangle(-96,-110,211,205), rect=new cjs.Rectangle(-95,-110,210,205), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bow
	this.instance = new lib.bow_mc();
	this.instance.setTransform(55,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-110,210,205);
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
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjNEgAAQEhAADODNQDMDOABEgQgBEhjMDOQjODMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjNEgAAQEhAADODNQDMDOABEgQgBEhjMDOQjODMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:1},15).to({alpha:0.012},15).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnoK8QhYAAg9g+Qg+g9AAhYIAAvRQAAhYA+g9QA9g+BYAAIPRAAQBYAAA9A+QA+A9AABYIAAPRQAABYg+A9Qg9A+hYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance_2 = new lib.bg_small_buttons_2_mc();

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
	this.instance_1 = new lib.bg_small_buttons_2_mc();

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

	// bow
	this.instance = new lib.bow_mc();
	this.instance.setTransform(55,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.again_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-110,210,205);
p.frameBounds = [rect];


(lib.title_antiblocking_ads_mc = function(mode,startPosition,loop) {
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
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("Eh+jAwcMAAAhg2MD9GAAAMAAABg2g");
	this.shape.setTransform(400,300);

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
	this.tr = new lib.language_tr_mc();
	this.tr.setTransform(620,280);

	this.ru = new lib.language_ru_mc();
	this.ru.setTransform(400,280);

	this.en = new lib.language_en_mc();
	this.en.setTransform(180,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.en},{t:this.ru},{t:this.tr}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(90,215,620,130);
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


(lib.makeup2_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.4);
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(13).call(this.frame_49).wait(1));

	// animation
	this.instance = new lib.item23_mc();
	this.instance.setTransform(-232.5,134.4,1,1,-5.2);

	this.instance_1 = new lib.forward_mc();
	this.instance_1.setTransform(320.1,360.1,0.526,0.526,0,0,0,0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-370.4,y:367.4},13).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({regY:0.1,scaleX:0.84,scaleY:0.84,y:180.1},7).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:320,y:220},8).wait(1));

	// animation
	this.instance_2 = new lib.light1_mc();
	this.instance_2.setTransform(-197.7,98.7,0.61,0.61,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(49));

	// animation
	this.instance_3 = new lib.girl2_5_mc();
	this.instance_3.setTransform(-124.6,6.4);

	this.instance_4 = new lib.girl2_6_mc();
	this.instance_4.setTransform(-124.6,6.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_4}]},20).to({state:[{t:this.instance_4}]},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(12).to({x:10},20).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-325.8,-288.6,361.2,588);
p.frameBounds = [rect, new cjs.Rectangle(-336.1,-288.6,371.5,588), new cjs.Rectangle(-346.7,-288.6,382.1,588), new cjs.Rectangle(-357.3,-288.6,392.7,588), new cjs.Rectangle(-367.9,-288.6,403.3,588), new cjs.Rectangle(-378.5,-288.6,413.9,588), new cjs.Rectangle(-389.1,-288.6,424.5,605.4), new cjs.Rectangle(-399.8,-288.6,435.2,623.3), new cjs.Rectangle(-410.4,-288.6,445.8,641.3), new cjs.Rectangle(-421,-288.6,456.4,659.2), new cjs.Rectangle(-431.6,-288.6,467,677.1), new cjs.Rectangle(-442.2,-288.6,477.6,695), new cjs.Rectangle(-452.8,-288.6,488.2,713), new cjs.Rectangle(-463.7,-288.6,499.1,731.2), new cjs.Rectangle(-294.6,-288.6,330,588), new cjs.Rectangle(-287.9,-288.6,330,588), new cjs.Rectangle(-281.2,-288.6,330,588), new cjs.Rectangle(-274.4,-288.6,330,588), new cjs.Rectangle(-267.7,-288.6,330,588), new cjs.Rectangle(-261,-288.6,330,588), new cjs.Rectangle(-254.2,-288.6,330,588), new cjs.Rectangle(-247.5,-288.6,330,588), new cjs.Rectangle(-240.8,-288.6,330,588), new cjs.Rectangle(-234,-288.6,330,588), new cjs.Rectangle(-227.3,-288.6,330,588), new cjs.Rectangle(-220.6,-288.6,330,588), new cjs.Rectangle(-213.8,-288.6,330,588), new cjs.Rectangle(-207.1,-288.6,330,588), new cjs.Rectangle(-200.4,-288.6,330,588), new cjs.Rectangle(-193.6,-288.6,330,588), new cjs.Rectangle(-186.9,-288.6,330,588), new cjs.Rectangle(-180.2,-288.6,330,588), new cjs.Rectangle(-173.4,-288.6,330,588), new cjs.Rectangle(-166.7,-288.6,330,588), new cjs.Rectangle(-160,-288.6,530,698.7), new cjs.Rectangle(-160,-288.6,534.3,677.2), new cjs.Rectangle(-160,-288.6,538.6,655.8), new cjs.Rectangle(-160,-288.6,542.8,634.3), new cjs.Rectangle(-160,-288.6,547.2,612.9), new cjs.Rectangle(-160,-288.6,551.4,591.5), new cjs.Rectangle(-160,-288.6,555.7,588), new cjs.Rectangle(-160,-288.6,560,588), new cjs.Rectangle(-160,-288.6,558.8,588), new cjs.Rectangle(-160,-288.6,557.6,588), new cjs.Rectangle(-160,-288.6,556.3,588), new cjs.Rectangle(-160,-288.6,555.1,588), new cjs.Rectangle(-160,-288.6,553.8,588), new cjs.Rectangle(-160,-288.6,552.6,588), new cjs.Rectangle(-160,-288.6,551.3,588), new cjs.Rectangle(-160,-288.6,550,588)];


(lib.makeup2_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item17_mc();
	this.instance.setTransform(140.8,-43.7,0.856,0.856);

	this.instance_1 = new lib.item17_1_mc();
	this.instance_1.setTransform(-265.2,-114.7,0.856,0.856,29.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:29.2,x:-265.2,y:-114.7},10).to({_off:true},1).wait(66).to({_off:false,x:-222.2,y:-237.7},1).to({x:-485.6,y:390.5},10).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},1).to({x:-239.2,y:-232.7},16).to({x:-349.2,y:-138.7},17).to({x:-286.2,y:-68.7},15).to({x:-222.2,y:-237.7},18).to({_off:true},1).wait(12));

	// animation
	this.instance_2 = new lib.item20_mc();
	this.instance_2.setTransform(260,11,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// animation
	this.instance_3 = new lib.item22_mc();
	this.instance_3.setTransform(176.2,156.5,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// animation
	this.instance_5 = new lib.girl2_4_mc();
	this.instance_5.setTransform(-124.6,6.4);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({alpha:1},67).wait(12));

	// animation
	this.instance_6 = new lib.girl2_3_mc();
	this.instance_6.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},78).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-317.5,-290.1,724.5,595), new cjs.Rectangle(-361.8,-290.1,768.8,595), new cjs.Rectangle(-366.3,-290.1,773.3,595), new cjs.Rectangle(-364.5,-290.1,771.5,595), new cjs.Rectangle(-362.9,-290.1,769.9,595), new cjs.Rectangle(-361.2,-293,768.3,597.9), new cjs.Rectangle(-359.6,-300.4,766.7,605.3), new cjs.Rectangle(-358,-307.8,765,612.7), new cjs.Rectangle(-356.4,-315.2,763.4,620.1), new cjs.Rectangle(-354.7,-322.5,761.8,627.4), new cjs.Rectangle(-353.1,-329.9,760.2,634.8), new cjs.Rectangle(-351.5,-337.3,758.5,642.2), new cjs.Rectangle(-349.9,-344.7,756.9,649.6), new cjs.Rectangle(-348.2,-352,755.3,656.9), new cjs.Rectangle(-346.6,-359.4,753.7,664.3), new cjs.Rectangle(-345,-366.8,752,671.7), new cjs.Rectangle(-343.4,-374.2,750.4,679.1), new cjs.Rectangle(-341.7,-381.5,748.8,686.4), new cjs.Rectangle(-340.3,-388.9,747.3,693.8), new cjs.Rectangle(-346.6,-383.4,753.6,688.3), new cjs.Rectangle(-353.1,-377.9,760.1,682.8), new cjs.Rectangle(-359.5,-372.3,766.6,677.2), new cjs.Rectangle(-366,-366.8,773.1,671.7), new cjs.Rectangle(-372.5,-361.3,779.5,666.2), new cjs.Rectangle(-378.9,-355.7,786,660.6), new cjs.Rectangle(-385.4,-350.2,792.5,655.1), new cjs.Rectangle(-391.9,-344.7,798.9,649.6), new cjs.Rectangle(-398.4,-339.2,805.4,644.1), new cjs.Rectangle(-404.8,-333.6,811.9,638.5), new cjs.Rectangle(-411.3,-328.1,818.4,633), new cjs.Rectangle(-417.8,-322.6,824.8,627.5), new cjs.Rectangle(-424.2,-317,831.3,621.9), new cjs.Rectangle(-430.7,-311.5,837.8,616.4), new cjs.Rectangle(-437.2,-306,844.2,610.9), new cjs.Rectangle(-443.7,-300.5,850.7,605.4), new cjs.Rectangle(-450.3,-294.9,857.3,599.8), new cjs.Rectangle(-446,-290.2,853,595.1), new cjs.Rectangle(-441.8,-290.1,848.8,595), new cjs.Rectangle(-437.6,-290.1,844.6,595), new cjs.Rectangle(-433.4,-290.1,840.4,595), new cjs.Rectangle(-429.2,-290.1,836.2,595), new cjs.Rectangle(-425,-290.1,832,595), new cjs.Rectangle(-420.8,-290.1,827.8,595), new cjs.Rectangle(-416.6,-290.1,823.6,595), new cjs.Rectangle(-412.4,-290.1,819.4,595), new cjs.Rectangle(-408.2,-290.1,815.2,595), new cjs.Rectangle(-404,-290.1,811,595), new cjs.Rectangle(-399.8,-290.1,806.8,595), new cjs.Rectangle(-395.6,-290.1,802.6,595), new cjs.Rectangle(-391.4,-290.1,798.4,595), new cjs.Rectangle(-387.3,-290.1,794.3,595), new cjs.Rectangle(-383.6,-290.1,790.7,595), new cjs.Rectangle(-380.1,-290.1,787.1,595), new cjs.Rectangle(-376.5,-290.1,783.6,595), new cjs.Rectangle(-373,-290.1,780,595), new cjs.Rectangle(-369.4,-290.1,776.4,595), new cjs.Rectangle(-365.8,-290.1,772.9,595), new cjs.Rectangle(-362.3,-290.6,769.3,595.5), new cjs.Rectangle(-358.7,-300,765.8,604.9), new cjs.Rectangle(-355.2,-309.4,762.2,614.3), new cjs.Rectangle(-351.6,-318.8,758.7,623.7), new cjs.Rectangle(-348.1,-328.2,755.1,633.1), new cjs.Rectangle(-344.5,-337.5,751.6,642.4), new cjs.Rectangle(-341,-346.9,748,651.8), new cjs.Rectangle(-337.4,-356.3,744.4,661.2), new cjs.Rectangle(-333.8,-365.7,740.9,670.6), new cjs.Rectangle(-330.3,-375.1,737.3,680), new cjs.Rectangle(-326.7,-384.5,733.8,689.4), new cjs.Rectangle(-323.3,-393.9,730.3,698.8), new cjs.Rectangle(-318.8,-355.4,725.8,660.3), new cjs.Rectangle(-344.9,-292.5,752,597.4), new cjs.Rectangle(-371.2,-290.1,778.3,595), new cjs.Rectangle(-397.6,-290.1,804.6,595), new cjs.Rectangle(-423.9,-290.1,831,595), new cjs.Rectangle(-450.2,-290.1,857.3,595), new cjs.Rectangle(-476.6,-290.1,883.6,595), new cjs.Rectangle(-502.9,-290.1,910,609.5), new cjs.Rectangle(-529.3,-290.1,936.3,672.3), new cjs.Rectangle(-555.6,-290.1,962.6,735.2), new cjs.Rectangle(-582.1,-290.1,989.2,798.3), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.makeup1_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.4);
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(13).call(this.frame_49).wait(1));

	// animation
	this.instance = new lib.forward_mc();
	this.instance.setTransform(320.1,360.1,0.526,0.526,0,0,0,0.1,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({regY:0.1,scaleX:0.84,scaleY:0.84,y:180.1},7).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:320,y:220},8).wait(1));

	// animation
	this.instance_1 = new lib.item23_mc();
	this.instance_1.setTransform(-232.5,134.4,1,1,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-370.4,y:367.4},13).to({_off:true},1).wait(36));

	// animation
	this.instance_2 = new lib.light1_mc();
	this.instance_2.setTransform(-197.7,98.7,0.61,0.61,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(49));

	// animation
	this.instance_3 = new lib.girl1_5_mc();
	this.instance_3.setTransform(-124.6,6.4);

	this.instance_4 = new lib.girl1_6_mc();
	this.instance_4.setTransform(-124.6,6.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_4}]},20).to({state:[{t:this.instance_4}]},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(12).to({x:0},20).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-325.8,-288.6,371.2,590);
p.frameBounds = [rect, new cjs.Rectangle(-336.1,-288.6,381.5,590), new cjs.Rectangle(-346.7,-288.6,392.1,590), new cjs.Rectangle(-357.3,-288.6,402.7,590), new cjs.Rectangle(-367.9,-288.6,413.3,590), new cjs.Rectangle(-378.5,-288.6,423.9,590), new cjs.Rectangle(-389.1,-288.6,434.5,605.4), new cjs.Rectangle(-399.8,-288.6,445.2,623.3), new cjs.Rectangle(-410.4,-288.6,455.8,641.3), new cjs.Rectangle(-421,-288.6,466.4,659.2), new cjs.Rectangle(-431.6,-288.6,477,677.1), new cjs.Rectangle(-442.2,-288.6,487.6,695), new cjs.Rectangle(-452.8,-288.6,498.2,713), new cjs.Rectangle(-463.7,-288.6,509.1,731.2), new cjs.Rectangle(-294.6,-288.6,340,590), new cjs.Rectangle(-288.4,-288.6,340,590), new cjs.Rectangle(-282.2,-288.6,340,590), new cjs.Rectangle(-275.9,-288.6,340,590), new cjs.Rectangle(-269.7,-288.6,340,590), new cjs.Rectangle(-263.5,-288.6,340,590), new cjs.Rectangle(-257.2,-288.6,340,590), new cjs.Rectangle(-251,-288.6,340,590), new cjs.Rectangle(-244.8,-288.6,340,590), new cjs.Rectangle(-238.5,-288.6,340,590), new cjs.Rectangle(-232.3,-288.6,340,590), new cjs.Rectangle(-226.1,-288.6,340,590), new cjs.Rectangle(-219.8,-288.6,340,590), new cjs.Rectangle(-213.6,-288.6,340,590), new cjs.Rectangle(-207.4,-288.6,340,590), new cjs.Rectangle(-201.1,-288.6,340,590), new cjs.Rectangle(-194.9,-288.6,340,590), new cjs.Rectangle(-188.7,-288.6,340,590), new cjs.Rectangle(-182.4,-288.6,340,590), new cjs.Rectangle(-176.2,-288.6,340,590), new cjs.Rectangle(-170,-288.6,540,698.7), new cjs.Rectangle(-170,-288.6,544.3,677.2), new cjs.Rectangle(-170,-288.6,548.6,655.8), new cjs.Rectangle(-170,-288.6,552.8,634.3), new cjs.Rectangle(-170,-288.6,557.2,612.9), new cjs.Rectangle(-170,-288.6,561.4,591.5), new cjs.Rectangle(-170,-288.6,565.7,590), new cjs.Rectangle(-170,-288.6,570,590), new cjs.Rectangle(-170,-288.6,568.8,590), new cjs.Rectangle(-170,-288.6,567.6,590), new cjs.Rectangle(-170,-288.6,566.3,590), new cjs.Rectangle(-170,-288.6,565.1,590), new cjs.Rectangle(-170,-288.6,563.8,590), new cjs.Rectangle(-170,-288.6,562.6,590), new cjs.Rectangle(-170,-288.6,561.3,590), new cjs.Rectangle(-170,-288.6,560,590)];


(lib.makeup1_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item17_mc();
	this.instance.setTransform(140.8,-43.7,0.856,0.856);

	this.instance_1 = new lib.item17_1_mc();
	this.instance_1.setTransform(-265.2,-114.7,0.856,0.856,29.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:29.2,x:-265.2,y:-114.7},10).to({_off:true},1).wait(66).to({_off:false,x:-222.2,y:-237.7},1).to({x:-485.6,y:390.5},10).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},1).to({x:-239.2,y:-232.7},16).to({x:-349.2,y:-138.7},17).to({x:-286.2,y:-68.7},15).to({x:-222.2,y:-237.7},18).to({_off:true},1).wait(12));

	// animation
	this.instance_2 = new lib.item21_mc();
	this.instance_2.setTransform(260,11,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// animation
	this.instance_3 = new lib.item22_mc();
	this.instance_3.setTransform(176.2,156.5,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	// animation
	this.instance_4 = new lib.closet3_mc();
	this.instance_4.setTransform(203.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// animation
	this.instance_5 = new lib.girl1_4_mc();
	this.instance_5.setTransform(-124.6,6.4);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({alpha:1},67).wait(12));

	// animation
	this.instance_6 = new lib.girl1_3_mc();
	this.instance_6.setTransform(-124.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},78).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294.6,-290.1,701.7,595);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-317.5,-290.1,724.5,595), new cjs.Rectangle(-361.8,-290.1,768.8,595), new cjs.Rectangle(-366.3,-290.1,773.3,595), new cjs.Rectangle(-364.5,-290.1,771.5,595), new cjs.Rectangle(-362.9,-290.1,769.9,595), new cjs.Rectangle(-361.2,-293,768.3,597.9), new cjs.Rectangle(-359.6,-300.4,766.7,605.3), new cjs.Rectangle(-358,-307.8,765,612.7), new cjs.Rectangle(-356.4,-315.2,763.4,620.1), new cjs.Rectangle(-354.7,-322.5,761.8,627.4), new cjs.Rectangle(-353.1,-329.9,760.2,634.8), new cjs.Rectangle(-351.5,-337.3,758.5,642.2), new cjs.Rectangle(-349.9,-344.7,756.9,649.6), new cjs.Rectangle(-348.2,-352,755.3,656.9), new cjs.Rectangle(-346.6,-359.4,753.7,664.3), new cjs.Rectangle(-345,-366.8,752,671.7), new cjs.Rectangle(-343.4,-374.2,750.4,679.1), new cjs.Rectangle(-341.7,-381.5,748.8,686.4), new cjs.Rectangle(-340.3,-388.9,747.3,693.8), new cjs.Rectangle(-346.6,-383.4,753.6,688.3), new cjs.Rectangle(-353.1,-377.9,760.1,682.8), new cjs.Rectangle(-359.5,-372.3,766.6,677.2), new cjs.Rectangle(-366,-366.8,773.1,671.7), new cjs.Rectangle(-372.5,-361.3,779.5,666.2), new cjs.Rectangle(-378.9,-355.7,786,660.6), new cjs.Rectangle(-385.4,-350.2,792.5,655.1), new cjs.Rectangle(-391.9,-344.7,798.9,649.6), new cjs.Rectangle(-398.4,-339.2,805.4,644.1), new cjs.Rectangle(-404.8,-333.6,811.9,638.5), new cjs.Rectangle(-411.3,-328.1,818.4,633), new cjs.Rectangle(-417.8,-322.6,824.8,627.5), new cjs.Rectangle(-424.2,-317,831.3,621.9), new cjs.Rectangle(-430.7,-311.5,837.8,616.4), new cjs.Rectangle(-437.2,-306,844.2,610.9), new cjs.Rectangle(-443.7,-300.5,850.7,605.4), new cjs.Rectangle(-450.3,-294.9,857.3,599.8), new cjs.Rectangle(-446,-290.2,853,595.1), new cjs.Rectangle(-441.8,-290.1,848.8,595), new cjs.Rectangle(-437.6,-290.1,844.6,595), new cjs.Rectangle(-433.4,-290.1,840.4,595), new cjs.Rectangle(-429.2,-290.1,836.2,595), new cjs.Rectangle(-425,-290.1,832,595), new cjs.Rectangle(-420.8,-290.1,827.8,595), new cjs.Rectangle(-416.6,-290.1,823.6,595), new cjs.Rectangle(-412.4,-290.1,819.4,595), new cjs.Rectangle(-408.2,-290.1,815.2,595), new cjs.Rectangle(-404,-290.1,811,595), new cjs.Rectangle(-399.8,-290.1,806.8,595), new cjs.Rectangle(-395.6,-290.1,802.6,595), new cjs.Rectangle(-391.4,-290.1,798.4,595), new cjs.Rectangle(-387.3,-290.1,794.3,595), new cjs.Rectangle(-383.6,-290.1,790.7,595), new cjs.Rectangle(-380.1,-290.1,787.1,595), new cjs.Rectangle(-376.5,-290.1,783.6,595), new cjs.Rectangle(-373,-290.1,780,595), new cjs.Rectangle(-369.4,-290.1,776.4,595), new cjs.Rectangle(-365.8,-290.1,772.9,595), new cjs.Rectangle(-362.3,-290.6,769.3,595.5), new cjs.Rectangle(-358.7,-300,765.8,604.9), new cjs.Rectangle(-355.2,-309.4,762.2,614.3), new cjs.Rectangle(-351.6,-318.8,758.7,623.7), new cjs.Rectangle(-348.1,-328.2,755.1,633.1), new cjs.Rectangle(-344.5,-337.5,751.6,642.4), new cjs.Rectangle(-341,-346.9,748,651.8), new cjs.Rectangle(-337.4,-356.3,744.4,661.2), new cjs.Rectangle(-333.8,-365.7,740.9,670.6), new cjs.Rectangle(-330.3,-375.1,737.3,680), new cjs.Rectangle(-326.7,-384.5,733.8,689.4), new cjs.Rectangle(-323.3,-393.9,730.3,698.8), new cjs.Rectangle(-318.8,-355.4,725.8,660.3), new cjs.Rectangle(-344.9,-292.5,752,597.4), new cjs.Rectangle(-371.2,-290.1,778.3,595), new cjs.Rectangle(-397.6,-290.1,804.6,595), new cjs.Rectangle(-423.9,-290.1,831,595), new cjs.Rectangle(-450.2,-290.1,857.3,595), new cjs.Rectangle(-476.6,-290.1,883.6,595), new cjs.Rectangle(-502.9,-290.1,910,609.5), new cjs.Rectangle(-529.3,-290.1,936.3,672.3), new cjs.Rectangle(-555.6,-290.1,962.6,735.2), new cjs.Rectangle(-582.1,-290.1,989.2,798.3), new cjs.Rectangle(-294.6,-290.1,701.7,595)];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_6_img();
	this.instance.setTransform(-180,-270);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+cLQosrrAAwgQAAwfIsrrQIsrqMSAAQMSAAIsLqQItLrAAQfQAAQgotLrQosLqsSAAQsSAAosrqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-270,380,540);
p.frameBounds = [rect, new cjs.Rectangle(-190,-274.8,380,549.6), new cjs.Rectangle(-190,-270,380,540)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-180,-270);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+cLQosrrAAwgQAAwfIsrrQIsrqMSAAQMSAAIsLqQItLrAAQfQAAQgotLrQosLqsSAAQsSAAosrqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-270,380,540);
p.frameBounds = [rect, new cjs.Rectangle(-190,-274.8,380,549.6), new cjs.Rectangle(-190,-270,380,540)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-180,-270);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+cLQosrrAAwgQAAwfIsrrQIsrqMSAAQMSAAIsLqQItLrAAQfQAAQgotLrQosLqsSAAQsSAAosrqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-270,380,540);
p.frameBounds = [rect, new cjs.Rectangle(-190,-274.8,380,549.6), new cjs.Rectangle(-190,-270,380,540)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-180,-270);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+cLQosrrAAwgQAAwfIsrrQIsrqMSAAQMSAAIsLqQItLrAAQfQAAQgotLrQosLqsSAAQsSAAosrqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-270,380,540);
p.frameBounds = [rect, new cjs.Rectangle(-190,-274.8,380,549.6), new cjs.Rectangle(-190,-270,380,540)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-180,-270);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+cLQosrrAAwgQAAwfIsrrQIsrqMSAAQMSAAIsLqQItLrAAQfQAAQgotLrQosLqsSAAQsSAAosrqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-270,380,540);
p.frameBounds = [rect, new cjs.Rectangle(-190,-274.8,380,549.6), new cjs.Rectangle(-190,-270,380,540)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-180,-270);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-180,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+cLQosrrAAwgQAAwfIsrrQIsrqMSAAQMSAAIsLqQItLrAAQfQAAQgotLrQosLqsSAAQsSAAosrqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-270,380,540);
p.frameBounds = [rect, new cjs.Rectangle(-190,-274.8,380,549.6), new cjs.Rectangle(-190,-270,380,540)];


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


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

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
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(15).call(this.frame_39).wait(10).call(this.frame_49).wait(15).call(this.frame_64).wait(66));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(-150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-30,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(150,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(130));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-190,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(23).to({y:80},10).to({y:-40},10).to({y:0},5).wait(81));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-600},0).wait(48).to({y:80},10).to({y:-40},10).to({y:0},5).wait(5).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-270,760,570);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-870,760,1220), new cjs.Rectangle(-380,-870,760,1208), new cjs.Rectangle(-380,-870,760,1196), new cjs.Rectangle(-380,-870,760,1184), new cjs.Rectangle(-380,-870,760,1172), rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-802,760,1102), new cjs.Rectangle(-380,-734,760,1034), new cjs.Rectangle(-380,-666,760,966), new cjs.Rectangle(-380,-598,760,898), new cjs.Rectangle(-380,-530,760,830), new cjs.Rectangle(-380,-462,760,762), new cjs.Rectangle(-380,-394,760,694), new cjs.Rectangle(-380,-326,760,626), new cjs.Rectangle(-380,-270,760,570), new cjs.Rectangle(-380,-270,760,620), new cjs.Rectangle(-380,-270,760,608), new cjs.Rectangle(-380,-270,760,596), new cjs.Rectangle(-380,-270,760,584), new cjs.Rectangle(-380,-270,760,572), rect=new cjs.Rectangle(-380,-270,760,570), rect, new cjs.Rectangle(-380,-274,760,574), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-298,760,598), new cjs.Rectangle(-380,-310,760,610), new cjs.Rectangle(-380,-302,760,602), new cjs.Rectangle(-380,-294,760,594), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-278,760,578), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-270,757,570), new cjs.Rectangle(-380,-270,754,570), new cjs.Rectangle(-380,-270,751.1,570), new cjs.Rectangle(-380,-270,748.1,570), new cjs.Rectangle(-380,-270,745,570), new cjs.Rectangle(-380,-270,746.5,570), new cjs.Rectangle(-380,-270,748,570), new cjs.Rectangle(-380,-270,749.5,570), new cjs.Rectangle(-380,-270,751,570), new cjs.Rectangle(-380,-270,752.5,570), new cjs.Rectangle(-380,-270,754,570), new cjs.Rectangle(-380,-270,755.4,570), new cjs.Rectangle(-380,-270,757,570), new cjs.Rectangle(-380,-270,758.5,570), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

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
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(15).call(this.frame_39).wait(10).call(this.frame_49).wait(15).call(this.frame_64).wait(66));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(-150,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-30,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(90,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(130));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-190,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(23).to({y:80},10).to({y:-40},10).to({y:0},5).wait(30).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-600},0).wait(48).to({y:80},10).to({y:-40},10).to({y:0},5).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-270,760,570);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-870,760,1220), new cjs.Rectangle(-380,-870,760,1208), new cjs.Rectangle(-380,-870,760,1196), new cjs.Rectangle(-380,-870,760,1184), new cjs.Rectangle(-380,-870,760,1172), rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-802,760,1102), new cjs.Rectangle(-380,-734,760,1034), new cjs.Rectangle(-380,-666,760,966), new cjs.Rectangle(-380,-598,760,898), new cjs.Rectangle(-380,-530,760,830), new cjs.Rectangle(-380,-462,760,762), new cjs.Rectangle(-380,-394,760,694), new cjs.Rectangle(-380,-326,760,626), new cjs.Rectangle(-380,-270,760,570), new cjs.Rectangle(-380,-270,760,620), new cjs.Rectangle(-380,-270,760,608), new cjs.Rectangle(-380,-270,760,596), new cjs.Rectangle(-380,-270,760,584), new cjs.Rectangle(-380,-270,760,572), rect=new cjs.Rectangle(-380,-270,760,570), rect, new cjs.Rectangle(-380,-274,760,574), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-298,760,598), new cjs.Rectangle(-380,-310,760,610), new cjs.Rectangle(-380,-302,760,602), new cjs.Rectangle(-380,-294,760,594), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-278,760,578), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, new cjs.Rectangle(-377,-270,757,570), new cjs.Rectangle(-374,-270,754,570), new cjs.Rectangle(-371,-270,751.1,570), new cjs.Rectangle(-368,-270,748.1,570), new cjs.Rectangle(-365,-270,745,570), new cjs.Rectangle(-366.5,-270,746.5,570), new cjs.Rectangle(-368,-270,748,570), new cjs.Rectangle(-369.5,-270,749.5,570), new cjs.Rectangle(-371,-270,751,570), new cjs.Rectangle(-372.4,-270,752.4,570), new cjs.Rectangle(-373.9,-270,754,570), new cjs.Rectangle(-375.4,-270,755.4,570), new cjs.Rectangle(-376.9,-270,757,570), new cjs.Rectangle(-378.4,-270,758.5,570), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

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
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(15).call(this.frame_39).wait(10).call(this.frame_49).wait(15).call(this.frame_64).wait(66));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(-150,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-30,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(30,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(130));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-600},0).wait(23).to({y:80},10).to({y:-40},10).to({y:0},5).wait(30).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(48).to({y:80},10).to({y:-40},10).to({y:0},5).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-270,760,570);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-870,760,1220), new cjs.Rectangle(-380,-870,760,1208), new cjs.Rectangle(-380,-870,760,1196), new cjs.Rectangle(-380,-870,760,1184), new cjs.Rectangle(-380,-870,760,1172), rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-802,760,1102), new cjs.Rectangle(-380,-734,760,1034), new cjs.Rectangle(-380,-666,760,966), new cjs.Rectangle(-380,-598,760,898), new cjs.Rectangle(-380,-530,760,830), new cjs.Rectangle(-380,-462,760,762), new cjs.Rectangle(-380,-394,760,694), new cjs.Rectangle(-380,-326,760,626), new cjs.Rectangle(-380,-270,760,570), new cjs.Rectangle(-380,-270,760,620), new cjs.Rectangle(-380,-270,760,608), new cjs.Rectangle(-380,-270,760,596), new cjs.Rectangle(-380,-270,760,584), new cjs.Rectangle(-380,-270,760,572), rect=new cjs.Rectangle(-380,-270,760,570), rect, new cjs.Rectangle(-380,-274,760,574), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-298,760,598), new cjs.Rectangle(-380,-310,760,610), new cjs.Rectangle(-380,-302,760,602), new cjs.Rectangle(-380,-294,760,594), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-278,760,578), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, new cjs.Rectangle(-377,-270,757,570), new cjs.Rectangle(-374,-270,754,570), new cjs.Rectangle(-371,-270,751.1,570), new cjs.Rectangle(-368,-270,748.1,570), new cjs.Rectangle(-365,-270,745,570), new cjs.Rectangle(-366.5,-270,746.5,570), new cjs.Rectangle(-368,-270,748,570), new cjs.Rectangle(-369.5,-270,749.5,570), new cjs.Rectangle(-371,-270,751,570), new cjs.Rectangle(-372.4,-270,752.4,570), new cjs.Rectangle(-373.9,-270,754,570), new cjs.Rectangle(-375.4,-270,755.4,570), new cjs.Rectangle(-376.9,-270,757,570), new cjs.Rectangle(-378.4,-270,758.5,570), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

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
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(15).call(this.frame_39).wait(10).call(this.frame_49).wait(15).call(this.frame_64).wait(66));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-150,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(-30,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(130));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-600},0).wait(23).to({y:80},10).to({y:-40},10).to({y:0},5).wait(30).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-600},0).wait(48).to({y:80},10).to({y:-40},10).to({y:0},5).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-270,760,570);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-870,760,1220), new cjs.Rectangle(-380,-870,760,1208), new cjs.Rectangle(-380,-870,760,1196), new cjs.Rectangle(-380,-870,760,1184), new cjs.Rectangle(-380,-870,760,1172), rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-802,760,1102), new cjs.Rectangle(-380,-734,760,1034), new cjs.Rectangle(-380,-666,760,966), new cjs.Rectangle(-380,-598,760,898), new cjs.Rectangle(-380,-530,760,830), new cjs.Rectangle(-380,-462,760,762), new cjs.Rectangle(-380,-394,760,694), new cjs.Rectangle(-380,-326,760,626), new cjs.Rectangle(-380,-270,760,570), new cjs.Rectangle(-380,-270,760,620), new cjs.Rectangle(-380,-270,760,608), new cjs.Rectangle(-380,-270,760,596), new cjs.Rectangle(-380,-270,760,584), new cjs.Rectangle(-380,-270,760,572), rect=new cjs.Rectangle(-380,-270,760,570), rect, new cjs.Rectangle(-380,-274,760,574), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-298,760,598), new cjs.Rectangle(-380,-310,760,610), new cjs.Rectangle(-380,-302,760,602), new cjs.Rectangle(-380,-294,760,594), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-278,760,578), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, new cjs.Rectangle(-377,-270,757,570), new cjs.Rectangle(-374,-270,754,570), new cjs.Rectangle(-371,-270,751.1,570), new cjs.Rectangle(-368,-270,748.1,570), new cjs.Rectangle(-365,-270,745,570), new cjs.Rectangle(-366.5,-270,746.5,570), new cjs.Rectangle(-368,-270,748,570), new cjs.Rectangle(-369.5,-270,749.5,570), new cjs.Rectangle(-371,-270,751,570), new cjs.Rectangle(-372.4,-270,752.4,570), new cjs.Rectangle(-373.9,-270,754,570), new cjs.Rectangle(-375.4,-270,755.4,570), new cjs.Rectangle(-376.9,-270,757,570), new cjs.Rectangle(-378.4,-270,758.5,570), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

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
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(15).call(this.frame_39).wait(10).call(this.frame_49).wait(15).call(this.frame_64).wait(66));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-30,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-150,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(-90,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(130));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(23).to({y:80},10).to({y:-40},10).to({y:0},5).wait(30).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(190,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-600},0).wait(48).to({y:80},10).to({y:-40},10).to({y:0},5).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-270,760,570);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-870,760,1220), new cjs.Rectangle(-380,-870,760,1208), new cjs.Rectangle(-380,-870,760,1196), new cjs.Rectangle(-380,-870,760,1184), new cjs.Rectangle(-380,-870,760,1172), rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-802,760,1102), new cjs.Rectangle(-380,-734,760,1034), new cjs.Rectangle(-380,-666,760,966), new cjs.Rectangle(-380,-598,760,898), new cjs.Rectangle(-380,-530,760,830), new cjs.Rectangle(-380,-462,760,762), new cjs.Rectangle(-380,-394,760,694), new cjs.Rectangle(-380,-326,760,626), new cjs.Rectangle(-380,-270,760,570), new cjs.Rectangle(-380,-270,760,620), new cjs.Rectangle(-380,-270,760,608), new cjs.Rectangle(-380,-270,760,596), new cjs.Rectangle(-380,-270,760,584), new cjs.Rectangle(-380,-270,760,572), rect=new cjs.Rectangle(-380,-270,760,570), rect, new cjs.Rectangle(-380,-274,760,574), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-298,760,598), new cjs.Rectangle(-380,-310,760,610), new cjs.Rectangle(-380,-302,760,602), new cjs.Rectangle(-380,-294,760,594), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-278,760,578), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, new cjs.Rectangle(-377,-270,757,570), new cjs.Rectangle(-374,-270,754,570), new cjs.Rectangle(-371,-270,751.1,570), new cjs.Rectangle(-368,-270,748.1,570), new cjs.Rectangle(-365,-270,745,570), new cjs.Rectangle(-366.5,-270,746.5,570), new cjs.Rectangle(-368,-270,748,570), new cjs.Rectangle(-369.5,-270,749.5,570), new cjs.Rectangle(-371,-270,751,570), new cjs.Rectangle(-372.4,-270,752.4,570), new cjs.Rectangle(-373.9,-270,754,570), new cjs.Rectangle(-375.4,-270,755.4,570), new cjs.Rectangle(-376.9,-270,757,570), new cjs.Rectangle(-378.4,-270,758.5,570), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

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
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(15).call(this.frame_39).wait(10).call(this.frame_49).wait(15).call(this.frame_64).wait(66));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-30,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(-150,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(130));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-600},0).wait(23).to({y:80},10).to({y:-40},10).to({y:0},5).wait(30).to({scaleX:0.92,scaleY:0.92},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(48).to({y:80},10).to({y:-40},10).to({y:0},5).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-270,760,570);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-870,760,1220), new cjs.Rectangle(-380,-870,760,1208), new cjs.Rectangle(-380,-870,760,1196), new cjs.Rectangle(-380,-870,760,1184), new cjs.Rectangle(-380,-870,760,1172), rect=new cjs.Rectangle(-380,-870,760,1170), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-802,760,1102), new cjs.Rectangle(-380,-734,760,1034), new cjs.Rectangle(-380,-666,760,966), new cjs.Rectangle(-380,-598,760,898), new cjs.Rectangle(-380,-530,760,830), new cjs.Rectangle(-380,-462,760,762), new cjs.Rectangle(-380,-394,760,694), new cjs.Rectangle(-380,-326,760,626), new cjs.Rectangle(-380,-270,760,570), new cjs.Rectangle(-380,-270,760,620), new cjs.Rectangle(-380,-270,760,608), new cjs.Rectangle(-380,-270,760,596), new cjs.Rectangle(-380,-270,760,584), new cjs.Rectangle(-380,-270,760,572), rect=new cjs.Rectangle(-380,-270,760,570), rect, new cjs.Rectangle(-380,-274,760,574), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-298,760,598), new cjs.Rectangle(-380,-310,760,610), new cjs.Rectangle(-380,-302,760,602), new cjs.Rectangle(-380,-294,760,594), new cjs.Rectangle(-380,-286,760,586), new cjs.Rectangle(-380,-278,760,578), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, new cjs.Rectangle(-377,-270,757,570), new cjs.Rectangle(-374,-270,754,570), new cjs.Rectangle(-371,-270,751.1,570), new cjs.Rectangle(-368,-270,748.1,570), new cjs.Rectangle(-365,-270,745,570), new cjs.Rectangle(-366.5,-270,746.5,570), new cjs.Rectangle(-368,-270,748,570), new cjs.Rectangle(-369.5,-270,749.5,570), new cjs.Rectangle(-371,-270,751,570), new cjs.Rectangle(-372.4,-270,752.4,570), new cjs.Rectangle(-373.9,-270,754,570), new cjs.Rectangle(-375.4,-270,755.4,570), new cjs.Rectangle(-376.9,-270,757,570), new cjs.Rectangle(-378.4,-270,758.5,570), rect=new cjs.Rectangle(-380,-270,760,570), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.arrow_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
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
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
				particle_mc.life = Math.random() * (1 - 0.5) + 0.5;
				particle_mc.alpha = Math.random() * (1 - 0.4) + 0.6;
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
			target_mc.life -= target_mc.fadeSpeed_num;
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
			if (target_mc.life <= 0 ||	target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
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
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
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


(lib.ParticleBigGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_2_10_mc();
	this.instance.setTransform(-4,-9);

	this.instance_1 = new lib.gravity_big_explosion_2_11_mc();
	this.instance_1.setTransform(3,-9);

	this.instance_2 = new lib.gravity_big_explosion_2_12_mc();
	this.instance_2.setTransform(-13,-16);

	this.instance_3 = new lib.gravity_big_explosion_2_13_mc();
	this.instance_3.setTransform(0,-10);

	this.instance_4 = new lib.gravity_big_explosion_2_14_mc();
	this.instance_4.setTransform(-11,-24);

	this.instance_5 = new lib.gravity_big_explosion_2_15_mc();
	this.instance_5.setTransform(-9,-17);

	this.instance_6 = new lib.gravity_big_explosion_2_16_mc();
	this.instance_6.setTransform(13,-29);

	this.instance_7 = new lib.gravity_big_explosion_2_17_mc();
	this.instance_7.setTransform(25,-5);

	this.instance_8 = new lib.gravity_big_explosion_2_18_mc();
	this.instance_8.setTransform(11,2);

	this.instance_9 = new lib.gravity_big_explosion_19_mc();
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-44,130,70);
p.frameBounds = [rect, new cjs.Rectangle(-62,-39,130,60), new cjs.Rectangle(-58,-51,90,70), new cjs.Rectangle(-65,-40,130,60), new cjs.Rectangle(-71,-84,120,120), new cjs.Rectangle(-64,-47,110,60), new cjs.Rectangle(-32,-74,90,90), new cjs.Rectangle(-20,-50,90,90), new cjs.Rectangle(-44,-33,110,70), rect=new cjs.Rectangle(-9,-9,18,18), rect, rect, rect, rect, rect];


(lib.gravity_big_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleBigGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-44,130,70);
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
	this.instance.setTransform(0,0,0.857,0.857,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.643,0.643,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.643,0.643,0,0,180);

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
p.nominalBounds = rect = new cjs.Rectangle(-95,-110,210,205);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-110,210,205);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkIkIAAl0QAAlzEIkIQEIkHFzAAQF1AAEHEHQEIEIAAFzQAAF0kIEIQkHEHl1AAQlzAAkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-89.9,180,180)];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.643,0.643);

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
p.nominalBounds = rect = new cjs.Rectangle(-95,-110,210,205);
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
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.PreloaderScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_mc = new lib.preloader_5_mc();
	this.logo_mc.setTransform(400,240);

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
	this.pt = new lib.language_pt_mc();
	this.pt.setTransform(400,1250);

	this.es = new lib.language_es_mc();
	this.es.setTransform(200,1250);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ar},{t:this.de},{t:this.fr},{t:this.hi},{t:this.id},{t:this.it},{t:this.zh},{t:this.ja},{t:this.es},{t:this.pt}]}).wait(1));

	// bg
	this.instance = new lib.languages_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,1315);
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
p.nominalBounds = rect = new cjs.Rectangle(-380,-270,760,570);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


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


(lib.dressupPanel_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(165.1,120.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-165.1,120.3,1,1,0,0,0,-0.1,0.3);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-300,430,950);
p.frameBounds = [rect];


(lib.dressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(110.1,220.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-110.1,220.3,1,1,0,0,0,-0.1,0.3);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-315,440,965);
p.frameBounds = [rect];


(lib.dressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(170.1,70.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-170.1,70.3,1,1,0,0,0,-0.1,0.3);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-295,430,945);
p.frameBounds = [rect];


(lib.dressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110.1,220.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110.1,220.3,1,1,0,0,0,-0.1,0.3);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-285,400,935);
p.frameBounds = [rect];


(lib.dressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(110.1,220.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-110.1,220.3,1,1,0,0,0,-0.1,0.3);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-305,440,955);
p.frameBounds = [rect];


(lib.dressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(160.1,80.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-160.1,80.3,1,1,0,0,0,-0.1,0.3);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-310,410,960);
p.frameBounds = [rect];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110.1,220.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110.1,220.3,1,1,0,0,0,-0.1,0.3);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-285,400,935);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(170.1,70.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-170.1,70.3,1,1,0,0,0,-0.1,0.3);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-295,430,945);
p.frameBounds = [rect];


(lib.background_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(564,62);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(274,49);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(1102,320);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(830,123);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(4,123);

	this.instance_5 = new lib.blinking_light_3_2_mc();
	this.instance_5.setTransform(784,312);

	this.instance_6 = new lib.blinking_light_3_2_mc();
	this.instance_6.setTransform(81,305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_7 = new lib.background_9_img();
	this.instance_7.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(808,211);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(928,538);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(-212,569);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(-243,110);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(199,211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_5 = new lib.background_8_img();
	this.instance_5.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(1150,235);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(761,293);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(-350,281);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(179,234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_7_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(909,21);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(852,445);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(-68,385);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(-114,181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_6_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(1050,65);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(195,193);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(687,200);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(24,278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_5_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(472,13);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(668,203);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(969,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.background_4_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-7,1600,607);
p.frameBounds = [rect];


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(1061,138);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(1068,552);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(801,197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.background_3_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(788,105);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-21,285);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.background_1_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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
		var _particleMaxSpeed_num = 12;
		var _particleFadeSpeed_num = 0.005;
		var _particleTotal_num = 56;
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
p.nominalBounds = rect = new cjs.Rectangle(-69,-44,130,70);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:30,x:555,y:255,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:595,y:200,skewX:-15,skewY:165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:635,y:295,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:570,y:360,skewX:-30,skewY:150}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:45,x:640,y:440,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:605,y:290,skewX:-90,skewY:90}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:175,y:270,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:565,y:435,skewX:-60,skewY:120}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-30,x:195,y:300,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:645,y:290,skewX:-60,skewY:120}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:575,y:420,skewX:-60,skewY:120}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]}).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:90,skewY:-90,x:80,y:260}},{t:this.instance,p:{x:275,y:500,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:90,skewY:-90,x:80,y:260}},{t:this.instance,p:{x:275,y:480,scaleX:0.694,scaleY:0.694}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:260,y:70}},{t:this.instance,p:{x:275,y:490,scaleX:0.694,scaleY:0.694}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).wait(1));

	// objects
	this.object_1 = new lib.arrow_5_mc();
	this.object_1.setTransform(400,320,1,1,-135);

	this.object_2 = new lib.object_2_4_mc();
	this.object_2.setTransform(612,270);

	this.object_3 = new lib.object_3_4_mc();
	this.object_3.setTransform(547,212);

	this.object_4 = new lib.object_4_4_mc();
	this.object_4.setTransform(668,305);

	this.object_5 = new lib.object_5_4_mc();
	this.object_5.setTransform(537,373);

	this.object_6 = new lib.object_6_4_mc();
	this.object_6.setTransform(650,455);

	this.object_7 = new lib.arrow_6_mc();
	this.object_7.setTransform(420,310,1,1,90);

	this.object_8 = new lib.object_8_4_mc();
	this.object_8.setTransform(265,270);

	this.object_9 = new lib.object_9_4_mc();
	this.object_9.setTransform(607,333);

	this.object_10 = new lib.object_10_4_mc();
	this.object_10.setTransform(265,275);

	this.object_11 = new lib.object_11_4_mc();
	this.object_11.setTransform(605,455);

	this.object_12 = new lib.object_12_4_mc();
	this.object_12.setTransform(265,280);

	this.object_13 = new lib.arrow_7_mc();
	this.object_13.setTransform(247.1,375,0.771,0.771,0,-45,135,-0.1,0);

	this.object_14 = new lib.object_14_4_mc();
	this.object_14.setTransform(265,275);

	this.object_15 = new lib.object_15_4_mc();
	this.object_15.setTransform(650,320);

	this.object_16 = new lib.arrow_8_mc();
	this.object_16.setTransform(270,460,0.702,0.702,90);

	this.object_17 = new lib.object_17_4_mc();
	this.object_17.setTransform(585,460);

	this.object_18 = new lib.object_18_4_mc();
	this.object_18.setTransform(265,285);

	this.object_19 = new lib.object_19_4_mc();
	this.object_19.setTransform(720,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).to({state:[{t:this.object_18}]},1).to({state:[{t:this.object_19}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.makeup2_1_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.makeup2_2_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.makeup2_3_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.makeup2_4_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.makeup2_5_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.makeup2_6_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.makeup2_7_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.makeup2_8_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.makeup2_9_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.makeup2_11_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.makeup2_12_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.makeup2_13_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.makeup2_14_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.makeup2_15_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.makeup2_16_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.makeup2_17_mc();
	this.subject_16.setTransform(400,300);

	this.subject_17 = new lib.makeup2_18_mc();
	this.subject_17.setTransform(400,300);

	this.subject_18 = new lib.makeup2_19_mc();
	this.subject_18.setTransform(400,300);

	this.subject_18_1 = new lib.makeup2_20_mc();
	this.subject_18_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_18_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-168.1,-349.4,1419.1,1750.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(-168.1,-349.4,975.2,1097.3), rect, rect, rect, rect, new cjs.Rectangle(-168.1,-349.4,903,1097.3), new cjs.Rectangle(35,-159,772,1000), new cjs.Rectangle(105.4,-349.4,701.7,954.3), new cjs.Rectangle(51,-349.4,756,954.3), new cjs.Rectangle(105.4,-349.4,701.7,954.3), new cjs.Rectangle(68.5,-349.4,738.5,954.3), new cjs.Rectangle(63,-349.4,744.1,954.3), new cjs.Rectangle(25,-159,782,763.9), new cjs.Rectangle(105.4,-349.4,701.7,954.3), new cjs.Rectangle(-45.7,-349.4,852.8,954.3), new cjs.Rectangle(105.4,-349.4,701.7,954.3), new cjs.Rectangle(15,-159,792,763.9), new cjs.Rectangle(74.2,-349.4,790.8,994.4)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:30,x:530,y:240,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:556,y:195,skewX:-45,skewY:135,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:645,y:290,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:545,y:355,skewX:-45,skewY:135,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:640,y:440,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:603,y:285,skewX:-90,skewY:90,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:180,y:265,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:560.1,y:430.2,skewX:-60,skewY:120,regX:0.1,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-45,x:215,y:300,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:655,y:295,skewX:-60,skewY:120,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:575,y:415,skewX:-60,skewY:120,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]}).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:90,skewY:-90,x:80,y:260}},{t:this.instance,p:{x:280,y:500,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:90,skewY:-90,x:80,y:260}},{t:this.instance,p:{x:280,y:500,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:275,y:525}},{t:this.instance,p:{x:275,y:162.4,scaleX:0.694,scaleY:0.694}}]},1).to({state:[{t:this.indicator_mc,p:{skewX:0,skewY:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280,scaleX:0.868,scaleY:0.867}}]},1).wait(1));

	// objects
	this.object_1 = new lib.arrow_1_mc();
	this.object_1.setTransform(400,300,1,1,-135);

	this.object_2 = new lib.object_2_1_mc();
	this.object_2.setTransform(615,275);

	this.object_3 = new lib.object_3_1_mc();
	this.object_3.setTransform(550,210);

	this.object_4 = new lib.object_4_1_mc();
	this.object_4.setTransform(670,300);

	this.object_5 = new lib.object_5_1_mc();
	this.object_5.setTransform(540,370);

	this.object_6 = new lib.object_6_1_mc();
	this.object_6.setTransform(650,450);

	this.object_7 = new lib.arrow_2_mc();
	this.object_7.setTransform(400,300);

	this.object_8 = new lib.object_8_1_mc();
	this.object_8.setTransform(275,265);

	this.object_9 = new lib.object_9_1_mc();
	this.object_9.setTransform(605,335);

	this.object_10 = new lib.object_10_1_mc();
	this.object_10.setTransform(275,275);

	this.object_11 = new lib.object_11_1_mc();
	this.object_11.setTransform(605,455);

	this.object_12 = new lib.object_12_1_mc();
	this.object_12.setTransform(275,275);

	this.object_13 = new lib.arrow_3_mc();
	this.object_13.setTransform(165,365,0.771,0.771,180);

	this.object_14 = new lib.object_14_1_mc();
	this.object_14.setTransform(275,265);

	this.object_15 = new lib.object_15_1_mc();
	this.object_15.setTransform(645,320);

	this.object_16 = new lib.arrow_4_mc();
	this.object_16.setTransform(280,415.1,0.737,0.737,45,0,0,0,0.1);

	this.object_17 = new lib.object_17_1_mc();
	this.object_17.setTransform(585,455);

	this.object_18 = new lib.object_18_1_mc();
	this.object_18.setTransform(275,280);

	this.object_19 = new lib.object_19_1_mc();
	this.object_19.setTransform(720,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).to({state:[{t:this.object_18}]},1).to({state:[{t:this.object_19}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.makeup1_1_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.makeup1_2_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.makeup1_3_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.makeup1_4_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.makeup1_5_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.makeup1_6_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.makeup1_7_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.makeup1_8_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.makeup1_9_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.makeup1_11_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.makeup1_12_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.makeup1_13_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.makeup1_14_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.makeup1_15_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.makeup1_16_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.makeup1_17_mc();
	this.subject_16.setTransform(400,300);

	this.subject_17 = new lib.makeup1_18_mc();
	this.subject_17.setTransform(400,300);

	this.subject_18 = new lib.makeup1_19_mc();
	this.subject_18.setTransform(400,300);

	this.instance_1 = new lib.makeup1_20_mc();
	this.instance_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.1,-349.4,1403.1,1738.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(-152.1,-349.4,959.2,1085.3), rect, rect, rect, rect, new cjs.Rectangle(-152.1,-349.4,887,1099.4), new cjs.Rectangle(40,-159,767,1000), new cjs.Rectangle(105.4,-349.4,701.7,954.3), new cjs.Rectangle(56,-349.4,751,954.3), new cjs.Rectangle(105.4,-349.4,701.7,954.3), new cjs.Rectangle(94.1,-349.4,712.9,954.3), new cjs.Rectangle(1.3,-349.4,805.8,956.7), new cjs.Rectangle(40,-159,767,763.9), new cjs.Rectangle(105.4,-349.4,701.7,954.3), new cjs.Rectangle(19.5,-349.4,787.6,1024.9), new cjs.Rectangle(105.4,-349.4,701.7,954.3), new cjs.Rectangle(25,-159,782,763.9), new cjs.Rectangle(74.2,-349.4,785.8,989.4)];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":179});

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
	this.frame_114 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(35).call(this.frame_59).wait(55).call(this.frame_114).wait(66));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560.2,510.2,0.737,0.737,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({x:1500.2},0).wait(23).to({x:400.2},20).to({x:620.2},10).to({x:560.2},5).wait(40).to({regX:0.3,regY:0.3,scaleX:0.63,scaleY:0.63},5).to({regX:0.2,regY:0.2,scaleX:0.74,scaleY:0.74},10).to({x:450.2},5).to({x:1500.2},15).wait(46));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_4_mc();
	this.dressupPanel_mc.setTransform(560,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(23).to({x:400},20).to({x:620},10).to({x:560},5).wait(55).to({x:450},5).to({x:1500},15).wait(46));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(180,350,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:-700},0).wait(58).to({x:330},20).to({x:100},10).to({x:180},5).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60.3,-15,719.7,955);
p.frameBounds = [rect, rect=new cjs.Rectangle(-819.7,-15,2539.7,955), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-819.7,-15,2484.7,955), new cjs.Rectangle(-819.7,-15,2429.7,955), new cjs.Rectangle(-819.7,-15,2374.7,955), new cjs.Rectangle(-819.7,-15,2319.7,955), new cjs.Rectangle(-819.7,-15,2264.7,955), new cjs.Rectangle(-819.7,-15,2209.7,955), new cjs.Rectangle(-819.7,-15,2154.7,955), new cjs.Rectangle(-819.7,-15,2099.7,955), new cjs.Rectangle(-819.7,-15,2044.7,955), new cjs.Rectangle(-819.7,-15,1989.7,955), new cjs.Rectangle(-819.7,-15,1934.7,955), new cjs.Rectangle(-819.7,-15,1879.7,955), new cjs.Rectangle(-819.7,-15,1824.7,955), new cjs.Rectangle(-819.7,-15,1769.7,955), new cjs.Rectangle(-819.7,-15,1714.7,955), new cjs.Rectangle(-819.7,-15,1659.7,955), new cjs.Rectangle(-819.7,-15,1604.7,955), new cjs.Rectangle(-819.7,-15,1549.7,955), new cjs.Rectangle(-819.7,-15,1494.7,955), new cjs.Rectangle(-819.7,-15,1439.7,955), new cjs.Rectangle(-819.7,-15,1461.7,955), new cjs.Rectangle(-819.7,-15,1483.7,955), new cjs.Rectangle(-819.7,-15,1505.7,955), new cjs.Rectangle(-819.7,-15,1527.7,955), new cjs.Rectangle(-819.7,-15,1549.7,955), new cjs.Rectangle(-819.7,-15,1571.7,955), new cjs.Rectangle(-819.7,-15,1593.7,955), new cjs.Rectangle(-819.7,-15,1615.7,955), new cjs.Rectangle(-819.7,-15,1637.7,955), new cjs.Rectangle(-819.7,-15,1659.7,955), new cjs.Rectangle(-819.7,-15,1647.7,955), new cjs.Rectangle(-819.7,-15,1635.7,955), new cjs.Rectangle(-819.7,-15,1623.7,955), new cjs.Rectangle(-819.7,-15,1611.7,955), new cjs.Rectangle(-819.7,-15,1599.7,955), new cjs.Rectangle(-768.2,-15,1548.2,955), new cjs.Rectangle(-716.7,-15,1496.7,955), new cjs.Rectangle(-665.2,-15,1445.2,955), new cjs.Rectangle(-613.7,-15,1393.7,955), new cjs.Rectangle(-562.2,-15,1342.2,955), new cjs.Rectangle(-510.7,-15,1290.7,955), new cjs.Rectangle(-459.2,-15,1239.2,955), new cjs.Rectangle(-407.7,-15,1187.7,955), new cjs.Rectangle(-356.2,-15,1136.2,955), new cjs.Rectangle(-304.7,-15,1084.7,955), new cjs.Rectangle(-253.2,-15,1033.2,955), new cjs.Rectangle(-201.7,-15,981.7,955), new cjs.Rectangle(-150.2,-15,930.2,955), new cjs.Rectangle(-98.7,-15,878.7,955), new cjs.Rectangle(-47.2,-15,827.2,955), new cjs.Rectangle(4.3,-15,775.7,955), new cjs.Rectangle(55.8,-15,724.2,955), new cjs.Rectangle(107.3,-15,672.7,955), new cjs.Rectangle(158.8,-15,621.2,955), new cjs.Rectangle(210.3,-15,569.7,955), new cjs.Rectangle(187.3,-15,592.7,955), new cjs.Rectangle(164.3,-15,615.7,955), new cjs.Rectangle(141.3,-15,638.7,955), new cjs.Rectangle(118.3,-15,661.7,955), new cjs.Rectangle(95.3,-15,684.7,955), new cjs.Rectangle(72.3,-15,707.7,955), new cjs.Rectangle(49.3,-15,730.7,955), new cjs.Rectangle(26.3,-15,753.7,955), new cjs.Rectangle(3.3,-15,776.7,955), new cjs.Rectangle(-19.7,-15,799.7,955), new cjs.Rectangle(-3.7,-15,783.7,955), new cjs.Rectangle(12.3,-15,767.7,955), new cjs.Rectangle(28.3,-15,751.7,955), new cjs.Rectangle(44.3,-15,735.7,955), rect=new cjs.Rectangle(60.3,-15,719.7,955), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(60.3,-15,697.7,955), new cjs.Rectangle(60.3,-15,675.7,955), new cjs.Rectangle(60.3,-15,653.7,955), new cjs.Rectangle(60.3,-15,631.7,955), new cjs.Rectangle(60.3,-15,609.7,955), new cjs.Rectangle(60.3,-15,679.7,955), new cjs.Rectangle(60.3,-15,749.7,955), new cjs.Rectangle(60.3,-15,819.7,955), new cjs.Rectangle(60.3,-15,889.7,955), new cjs.Rectangle(60.3,-15,959.7,955), new cjs.Rectangle(60.3,-15,1029.7,955), new cjs.Rectangle(60.3,-15,1099.7,955), new cjs.Rectangle(60.3,-15,1169.7,955), new cjs.Rectangle(60.3,-15,1239.7,955), new cjs.Rectangle(60.3,-15,1309.7,955), new cjs.Rectangle(60.3,-15,1379.7,955), new cjs.Rectangle(60.3,-15,1449.7,955), new cjs.Rectangle(60.3,-15,1519.7,955), new cjs.Rectangle(60.3,-15,1589.7,955), rect=new cjs.Rectangle(60.3,-15,1659.7,955), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":179});

	// timeline functions:
	this.frame_19 = function() {
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
	this.frame_114 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(30).call(this.frame_49).wait(65).call(this.frame_114).wait(66));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(710,510,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(78).to({regX:0.1,scaleX:0.84,scaleY:0.84,x:710.1,y:460},10).to({regX:0,scaleX:0.74,scaleY:0.74,x:710,y:510},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:710.1,y:510.1},5).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:710,y:510},10).to({y:460},5).to({y:700},10).wait(51));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_3_mc();
	this.dressupPanel_mc.setTransform(240,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:950},0).wait(18).to({y:150},15).to({y:400},10).to({y:300},5).wait(65).to({y:200},5).to({y:950},10).wait(51));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(620,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:1100},0).wait(48).to({y:290},15).to({y:380},10).to({y:350},5).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(35,-10,745,960);
p.frameBounds = [rect, rect=new cjs.Rectangle(35,630,745,970.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(35,586.7,745,960), new cjs.Rectangle(35,533.4,745.1,960), new cjs.Rectangle(35,480,745.1,960), new cjs.Rectangle(35,426.7,745.1,1004.7), new cjs.Rectangle(35,373.4,745,1057.9), new cjs.Rectangle(35,320,745.1,1111.3), new cjs.Rectangle(35,266.7,745.1,1164.7), new cjs.Rectangle(35,213.4,745.1,1218), new cjs.Rectangle(35,160,745,1271.3), new cjs.Rectangle(35,106.7,745.1,1324.6), new cjs.Rectangle(35,53.4,745.1,1378), new cjs.Rectangle(35,0,745.1,1431.3), new cjs.Rectangle(35,-53.3,745,1484.6), new cjs.Rectangle(35,-106.6,745.1,1538), new cjs.Rectangle(35,-160,745,1591.3), new cjs.Rectangle(35,-135,745.1,1566.3), new cjs.Rectangle(35,-110,745,1541.3), new cjs.Rectangle(35,-85,745.1,1516.3), new cjs.Rectangle(35,-60,745.1,1491.3), new cjs.Rectangle(35,-35,745.1,1466.3), new cjs.Rectangle(35,-10,745,1441.3), new cjs.Rectangle(35,15,745.1,1416.3), new cjs.Rectangle(35,40,745.1,1391.3), new cjs.Rectangle(35,65,745.1,1366.3), new cjs.Rectangle(35,90,745,1341.3), new cjs.Rectangle(35,70,745.1,1361.3), new cjs.Rectangle(35,50,745.1,1381.3), new cjs.Rectangle(35,30,745.1,1401.3), new cjs.Rectangle(35,10,745,1421.3), new cjs.Rectangle(35,-10,745,1441.3), new cjs.Rectangle(35,-10,745,1387.3), new cjs.Rectangle(35,-10,745,1333.3), new cjs.Rectangle(35,-10,745,1279.3), new cjs.Rectangle(35,-10,745,1225.3), new cjs.Rectangle(35,-10,745,1171.3), new cjs.Rectangle(35,-10,745,1117.3), new cjs.Rectangle(35,-10,745,1063.3), new cjs.Rectangle(35,-10,745,1009.3), rect=new cjs.Rectangle(35,-10,745,960), rect, rect, rect, rect, rect, new cjs.Rectangle(35,-38.7,745,988.8), new cjs.Rectangle(35,-29.7,745,979.8), new cjs.Rectangle(35,-20.7,745,970.8), new cjs.Rectangle(35,-11.7,745,961.8), rect=new cjs.Rectangle(35,-10,745,960), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(35,-10,746,960), new cjs.Rectangle(35,-10,747,960), new cjs.Rectangle(35,-10,748,960), new cjs.Rectangle(35,-10,749,960), new cjs.Rectangle(35,-10,750.1,960), new cjs.Rectangle(35,-10,751.1,960), new cjs.Rectangle(35,-10,752,960), new cjs.Rectangle(35,-10,753.1,960), new cjs.Rectangle(35,-10,754.1,960), new cjs.Rectangle(35,-10,755,960), new cjs.Rectangle(35,-10,753,960), new cjs.Rectangle(35,-10,751,960), new cjs.Rectangle(35,-10,749,960), new cjs.Rectangle(35,-10,747,960), rect=new cjs.Rectangle(35,-10,745,960), rect, rect, rect, rect, rect, new cjs.Rectangle(35,-10,743,960), new cjs.Rectangle(35,-10,741,960), new cjs.Rectangle(35,-10,739,960), new cjs.Rectangle(35,-10,737,960), new cjs.Rectangle(35,-10,735,960), new cjs.Rectangle(35,-10,736,960), new cjs.Rectangle(35,-10,737,960), new cjs.Rectangle(35,-10,738,960), new cjs.Rectangle(35,-10,739,960), new cjs.Rectangle(35,-10,740,960), new cjs.Rectangle(35,-10,741,960), new cjs.Rectangle(35,-10,742,960), new cjs.Rectangle(35,-10,743,960), new cjs.Rectangle(35,-10,744,960), new cjs.Rectangle(35,-10,745,960), new cjs.Rectangle(35,-30,745,960), new cjs.Rectangle(35,-50,745,960), new cjs.Rectangle(35,-70,745,960), new cjs.Rectangle(35,-90,745,960), new cjs.Rectangle(35,-110,745,960), new cjs.Rectangle(35,-35,745,960), new cjs.Rectangle(35,21.3,745,978.8), new cjs.Rectangle(35,21.3,745,1053.8), new cjs.Rectangle(35,21.3,745,1128.8), new cjs.Rectangle(35,21.3,745,1203.8), new cjs.Rectangle(35,21.3,745,1278.8), new cjs.Rectangle(35,21.3,745,1353.8), new cjs.Rectangle(35,21.3,745,1428.8), new cjs.Rectangle(35,21.3,745,1503.8), rect=new cjs.Rectangle(35,21.3,745,1578.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":169});

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
	this.frame_114 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(35).call(this.frame_59).wait(55).call(this.frame_114).wait(56));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560,520,0.684,0.684);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({x:1500},0).wait(23).to({x:400},20).to({x:620},10).to({x:560},5).wait(40).to({regX:0.1,scaleX:0.58,scaleY:0.58,x:560.1},5).to({regX:0,scaleX:0.68,scaleY:0.68,x:560},10).to({x:450},5).to({x:1500},15).wait(36));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(560,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(23).to({x:400},20).to({x:620},10).to({x:560},5).wait(55).to({x:450},5).to({x:1500},15).wait(36));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(200,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-700},0).wait(58).to({x:350},20).to({x:120},10).to({x:200},5).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,15,685,935);
p.frameBounds = [rect, rect=new cjs.Rectangle(-825,15,2525,935), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-825,15,2470,935), new cjs.Rectangle(-825,15,2415,935), new cjs.Rectangle(-825,15,2360,935), new cjs.Rectangle(-825,15,2305,935), new cjs.Rectangle(-825,15,2250,935), new cjs.Rectangle(-825,15,2195,935), new cjs.Rectangle(-825,15,2140,935), new cjs.Rectangle(-825,15,2085,935), new cjs.Rectangle(-825,15,2030,935), new cjs.Rectangle(-825,15,1975,935), new cjs.Rectangle(-825,15,1920,935), new cjs.Rectangle(-825,15,1865,935), new cjs.Rectangle(-825,15,1810,935), new cjs.Rectangle(-825,15,1755,935), new cjs.Rectangle(-825,15,1700,935), new cjs.Rectangle(-825,15,1645,935), new cjs.Rectangle(-825,15,1590,935), new cjs.Rectangle(-825,15,1535,935), new cjs.Rectangle(-825,15,1480,935), new cjs.Rectangle(-825,15,1425,935), new cjs.Rectangle(-825,15,1447,935), new cjs.Rectangle(-825,15,1469,935), new cjs.Rectangle(-825,15,1491,935), new cjs.Rectangle(-825,15,1513,935), new cjs.Rectangle(-825,15,1535,935), new cjs.Rectangle(-825,15,1557,935), new cjs.Rectangle(-825,15,1579,935), new cjs.Rectangle(-825,15,1601,935), new cjs.Rectangle(-825,15,1623,935), new cjs.Rectangle(-825,15,1645,935), new cjs.Rectangle(-825,15,1633,935), new cjs.Rectangle(-825,15,1621,935), new cjs.Rectangle(-825,15,1609,935), new cjs.Rectangle(-825,15,1597,935), new cjs.Rectangle(-825,15,1585,935), new cjs.Rectangle(-772.5,15,1532.5,935), new cjs.Rectangle(-720,15,1480,935), new cjs.Rectangle(-667.5,15,1427.5,935), new cjs.Rectangle(-615,15,1375,935), new cjs.Rectangle(-562.5,15,1322.5,935), new cjs.Rectangle(-510,15,1270,935), new cjs.Rectangle(-457.5,15,1217.5,935), new cjs.Rectangle(-405,15,1165,935), new cjs.Rectangle(-352.5,15,1112.5,935), new cjs.Rectangle(-300,15,1060,935), new cjs.Rectangle(-247.5,15,1007.5,935), new cjs.Rectangle(-195,15,955,935), new cjs.Rectangle(-142.5,15,902.5,935), new cjs.Rectangle(-90,15,850,935), new cjs.Rectangle(-37.5,15,797.5,935), new cjs.Rectangle(15,15,745,935), new cjs.Rectangle(67.5,15,692.5,935), new cjs.Rectangle(120,15,640,935), new cjs.Rectangle(172.5,15,587.5,935), new cjs.Rectangle(225,15,535,935), new cjs.Rectangle(202,15,558,935), new cjs.Rectangle(179,15,581,935), new cjs.Rectangle(156,15,604,935), new cjs.Rectangle(133,15,627,935), new cjs.Rectangle(110,15,650,935), new cjs.Rectangle(87,15,673,935), new cjs.Rectangle(64,15,696,935), new cjs.Rectangle(41,15,719,935), new cjs.Rectangle(18,15,742,935), new cjs.Rectangle(-5,15,765,935), new cjs.Rectangle(11,15,749,935), new cjs.Rectangle(27,15,733,935), new cjs.Rectangle(43,15,717,935), new cjs.Rectangle(59,15,701,935), rect=new cjs.Rectangle(75,15,685,935), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(75,15,663,935), new cjs.Rectangle(75,15,641,935), new cjs.Rectangle(75,15,619,935), new cjs.Rectangle(75,15,597,935), new cjs.Rectangle(75,15,575,935), new cjs.Rectangle(75,15,645,935), new cjs.Rectangle(75,15,715,935), new cjs.Rectangle(75,15,785,935), new cjs.Rectangle(75,15,855,935), new cjs.Rectangle(75,15,925,935), new cjs.Rectangle(75,15,995,935), new cjs.Rectangle(75,15,1065,935), new cjs.Rectangle(75,15,1135,935), new cjs.Rectangle(75,15,1205,935), new cjs.Rectangle(75,15,1275,935), new cjs.Rectangle(75,15,1345,935), new cjs.Rectangle(75,15,1415,935), new cjs.Rectangle(75,15,1485,935), new cjs.Rectangle(75,15,1555,935), rect=new cjs.Rectangle(75,15,1625,935), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":169});

	// timeline functions:
	this.frame_19 = function() {
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
	this.frame_109 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(30).call(this.frame_49).wait(60).call(this.frame_109).wait(61));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(710,510,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(78).to({regX:0.1,scaleX:0.84,scaleY:0.84,x:710.1,y:460},10).to({regX:0,scaleX:0.74,scaleY:0.74,x:710,y:510},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:710.1,y:510.1},5).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:710,y:510},10).to({y:460},5).to({y:700},10).wait(41));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(240,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(18).to({y:150},15).to({y:400},10).to({y:300},5).wait(60).to({y:200},5).to({y:900},15).wait(41));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(620,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:1100},0).wait(48).to({y:290},15).to({y:380},10).to({y:350},5).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(25,5,755,945);
p.frameBounds = [rect, rect=new cjs.Rectangle(25,605,755,945), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(25,555,755,945), new cjs.Rectangle(25,505,755.1,945), new cjs.Rectangle(25,455,755.1,972.3), new cjs.Rectangle(25,405,755.1,1022.3), new cjs.Rectangle(25,355,755,1072.3), new cjs.Rectangle(25,305,755.1,1122.3), new cjs.Rectangle(25,255,755.1,1172.3), new cjs.Rectangle(25,205,755.1,1222.3), new cjs.Rectangle(25,155,755,1272.3), new cjs.Rectangle(25,105,755.1,1322.3), new cjs.Rectangle(25,55,755.1,1372.3), new cjs.Rectangle(25,5,755.1,1422.3), new cjs.Rectangle(25,-45,755,1472.3), new cjs.Rectangle(25,-95,755.1,1522.3), new cjs.Rectangle(25,-145,755,1572.3), new cjs.Rectangle(25,-120,755.1,1547.3), new cjs.Rectangle(25,-95,755,1522.3), new cjs.Rectangle(25,-70,755.1,1497.3), new cjs.Rectangle(25,-45,755.1,1472.3), new cjs.Rectangle(25,-20,755.1,1447.3), new cjs.Rectangle(25,5,755,1422.3), new cjs.Rectangle(25,30,755.1,1397.3), new cjs.Rectangle(25,55,755.1,1372.3), new cjs.Rectangle(25,80,755.1,1347.3), new cjs.Rectangle(25,105,755,1322.3), new cjs.Rectangle(25,85,755.1,1342.3), new cjs.Rectangle(25,65,755.1,1362.3), new cjs.Rectangle(25,45,755.1,1382.3), new cjs.Rectangle(25,25,755,1402.3), new cjs.Rectangle(25,5,755,1422.3), new cjs.Rectangle(25,5,755,1368.3), new cjs.Rectangle(25,5,755,1314.3), new cjs.Rectangle(25,5,755,1260.3), new cjs.Rectangle(25,5,755,1206.3), new cjs.Rectangle(25,5,755,1152.3), new cjs.Rectangle(25,5,755,1098.3), new cjs.Rectangle(25,5,755,1044.3), new cjs.Rectangle(25,5,755,990.3), rect=new cjs.Rectangle(25,5,755,945), rect, rect, rect, rect, rect, new cjs.Rectangle(25,-36.1,755,986.2), new cjs.Rectangle(25,-27.1,755,977.2), new cjs.Rectangle(25,-18.1,755,968.2), new cjs.Rectangle(25,-9.1,755,959.2), new cjs.Rectangle(25,-0.1,755,950.2), rect=new cjs.Rectangle(25,5,755,945), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(25,5,756,945), new cjs.Rectangle(25,5,757,945), new cjs.Rectangle(25,5,758,945), new cjs.Rectangle(25,5,759,945), new cjs.Rectangle(25,5,760.1,945), new cjs.Rectangle(25,5,761.1,945), new cjs.Rectangle(25,5,762,945), new cjs.Rectangle(25,5,763.1,945), new cjs.Rectangle(25,5,764.1,945), new cjs.Rectangle(25,5,765,945), new cjs.Rectangle(25,5,763,945), new cjs.Rectangle(25,5,761,945), new cjs.Rectangle(25,5,759,945), new cjs.Rectangle(25,5,757,945), rect=new cjs.Rectangle(25,5,755,945), rect, rect, rect, rect, rect, new cjs.Rectangle(25,5,753,945), new cjs.Rectangle(25,5,751,945), new cjs.Rectangle(25,5,749,945), new cjs.Rectangle(25,5,747,945), new cjs.Rectangle(25,5,745,945), new cjs.Rectangle(25,5,746,945), new cjs.Rectangle(25,5,747,945), new cjs.Rectangle(25,5,748,945), new cjs.Rectangle(25,5,749,945), new cjs.Rectangle(25,5,750,945), new cjs.Rectangle(25,-15,751,945), new cjs.Rectangle(25,-35,752.1,945), new cjs.Rectangle(25,-55,753.1,945), new cjs.Rectangle(25,-75,754,945), new cjs.Rectangle(25,-95,755,945), new cjs.Rectangle(25,-48.3,755,945), new cjs.Rectangle(25,-1.6,755,945), new cjs.Rectangle(25,23.9,755,966.2), new cjs.Rectangle(25,23.9,755,1012.8), new cjs.Rectangle(25,23.9,755.1,1059.5), new cjs.Rectangle(25,23.9,755,1106.2), new cjs.Rectangle(25,23.9,755,1152.8), new cjs.Rectangle(25,23.9,755,1199.5), new cjs.Rectangle(25,23.9,755,1246.2), new cjs.Rectangle(25,23.9,755,1292.8), new cjs.Rectangle(25,23.9,755,1339.5), new cjs.Rectangle(25,23.9,755,1386.2), new cjs.Rectangle(25,23.9,755,1432.8), new cjs.Rectangle(25,23.9,755,1479.5), rect=new cjs.Rectangle(25,23.9,755,1526.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.fullScreen_mc.setTransform(680.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1651,1750.2);
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
	this.fullScreen_mc.setTransform(680.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1651,1738.2);
p.frameBounds = [rect];


(lib.decor_shadow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.gravity_big_explosion_comp = new lib.GravityBigExplosionMC();
	this.gravity_big_explosion_comp.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.gravity_big_explosion_comp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(331,256,130,70);
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
	this.initialize(mode,startPosition,loop,{"mid":199,"end":249});

	// timeline functions:
	this.frame_19 = function() {
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
	this.frame_154 = function() {
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
	this.frame_164 = function() {
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
	this.frame_179 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_209 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(30).call(this.frame_49).wait(10).call(this.frame_59).wait(60).call(this.frame_119).wait(35).call(this.frame_154).wait(10).call(this.frame_164).wait(15).call(this.frame_179).wait(30).call(this.frame_209).wait(41));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(700,680,0.714,0.714);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(174).to({regY:0.1,scaleX:0.62,scaleY:0.62,y:680.1},0).to({regX:0.1,scaleX:1,scaleY:1,x:700.1,y:460.1},10).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,x:700,y:510},10).wait(5).to({scaleX:0.76,scaleY:0.76},5).to({scaleX:0.9,scaleY:0.9},10).to({y:460},6).to({regY:0.1,scaleX:0.62,scaleY:0.62,y:680.1},9).wait(21));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).wait(250));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({y:480},15).to({y:250},10).to({y:350},5).wait(40).to({y:150},10).to({y:800},15).wait(106));

	// grass
	this.instance_1 = new lib.animation_grass_mc();
	this.instance_1.setTransform(400,700);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({y:600},20).wait(211));

	// decor
	this.instance_2 = new lib.lower_shadow_mc();
	this.instance_2.setTransform(0,400);
	this.instance_2.alpha = 0.398;
	this.instance_2.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(250));

	// hero_1
	this.instance_3 = new lib.hero1_main_mc();
	this.instance_3.setTransform(-700,340);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149).to({x:400},20).to({x:150},10).to({x:220},5).wait(66));

	// hero_2
	this.instance_4 = new lib.hero2_main_mc();
	this.instance_4.setTransform(1500,340);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(159).to({x:440},20).to({x:680},10).to({x:610},5).wait(56));

	// cupid
	this.instance_5 = new lib.masseuse_1_mc();
	this.instance_5.setTransform(1500,420);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({x:450},20).to({x:700},10).to({x:600},5).wait(85).to({scaleX:0.75,scaleY:0.75,x:400,y:320},20).wait(91));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(250));

	// bg
	this.instance_6 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-826.6,-430,2526.7,1523.6);
p.frameBounds = [rect, new cjs.Rectangle(-826.6,-430,2526.7,1523.7), new cjs.Rectangle(-826.6,-430,2526.7,1523.6), new cjs.Rectangle(-826.6,-430,2526.7,1523.7), new cjs.Rectangle(-826.6,-430,2526.7,1523.6), new cjs.Rectangle(-826.6,-430,2526.7,1523.7), new cjs.Rectangle(-826.6,-430,2526.7,1523.6), new cjs.Rectangle(-826.6,-430,2526.7,1523.7), new cjs.Rectangle(-826.6,-430,2526.7,1523.6), new cjs.Rectangle(-826.6,-430,2526.7,1523.7), new cjs.Rectangle(-826.6,-430,2526.7,1523.6), new cjs.Rectangle(-826.6,-430,2526.7,1523.7), new cjs.Rectangle(-826.6,-430,2526.7,1523.6), new cjs.Rectangle(-826.6,-430,2526.7,1523.7), new cjs.Rectangle(-826.6,-430,2526.7,1523.6), new cjs.Rectangle(-826.6,-430,2526.7,1523.7), new cjs.Rectangle(-826.6,-430,2526.7,1523.6), new cjs.Rectangle(-826.6,-430,2526.7,1523.7), new cjs.Rectangle(-826.6,-430,2526.7,1523.6), new cjs.Rectangle(-826.6,-430,2526.7,1523.7), new cjs.Rectangle(-826.6,-430,2474.2,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-430,2446.4,1523.6), new cjs.Rectangle(-826.6,-430,2446.4,1523.7), new cjs.Rectangle(-826.6,-381.3,2446.4,1474.9), new cjs.Rectangle(-826.6,-332.6,2446.4,1426.3), new cjs.Rectangle(-826.6,-284,2446.4,1377.6), new cjs.Rectangle(-826.6,-235.3,2446.4,1329), new cjs.Rectangle(-826.6,-186.6,2446.4,1280.3), new cjs.Rectangle(-826.6,-138,2446.4,1231.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-90,2446.4,1183.6), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-826.6,-280.8,2446.4,1374.4), new cjs.Rectangle(-826.6,-90,2446.4,1183.7), new cjs.Rectangle(-771.6,-90,2391.4,1183.6), new cjs.Rectangle(-716.6,-90,2336.4,1183.7), new cjs.Rectangle(-661.6,-280.8,2281.4,1374.4), new cjs.Rectangle(-606.6,-90,2226.4,1183.7), new cjs.Rectangle(-551.6,-90,2171.4,1183.6), new cjs.Rectangle(-496.6,-90,2116.4,1183.7), new cjs.Rectangle(-441.6,-280.8,2061.4,1374.4), new cjs.Rectangle(-400,-90,2019.7,1183.7), new cjs.Rectangle(-400,-90,2019.7,1183.6), new cjs.Rectangle(-400,-90,2019.7,1183.7), new cjs.Rectangle(-400,-280.8,1966.7,1374.4), new cjs.Rectangle(-400,-90,1913.7,1183.7), new cjs.Rectangle(-400,-90,1860.7,1183.6), new cjs.Rectangle(-400,-90,1807.7,1183.7), new cjs.Rectangle(-400,-280.8,1754.7,1374.4), new cjs.Rectangle(-400,-90,1701.7,1183.7), new cjs.Rectangle(-400,-90,1648.7,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7)];


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

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.quest_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":209});

	// timeline functions:
	this.frame_1 = function() {
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
	this.frame_54 = function() {
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
	this.frame_89 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_196 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(53).call(this.frame_54).wait(35).call(this.frame_89).wait(107).call(this.frame_196).wait(14));

	// animation
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,660.1,0.526,0.526,0,0,0,0.1,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({_off:false},0).to({regY:0.1,scaleX:0.84,scaleY:0.84,y:480.1},7).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:700,y:520},8).wait(1));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(1500.1,535.1,0.632,0.632,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).to({x:400.1},19).to({x:600.1},10).to({x:560.1},5).wait(5).to({regX:0.2,scaleX:0.53,scaleY:0.53},5).to({regX:0.1,scaleX:0.63,scaleY:0.63},10).to({x:450.1},5).to({x:1500.1},15).wait(136));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_4_mc();
	this.dressupPanel_mc.setTransform(1500,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({x:400},19).to({x:600},10).to({x:560},5).wait(20).to({x:450},5).to({x:1500},15).wait(136));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(180,350,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(74).to({x:370},20).wait(116));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).wait(116));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({alpha:1},20).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60.3,-10,1654.7,950);
p.frameBounds = [rect, new cjs.Rectangle(60.3,-10,1596.8,950), new cjs.Rectangle(60.3,-10,1538.9,950), new cjs.Rectangle(60.3,-10,1481,950), new cjs.Rectangle(60.3,-10,1423.1,950), new cjs.Rectangle(60.3,-10,1365.3,950), new cjs.Rectangle(60.3,-10,1307.3,950), new cjs.Rectangle(60.3,-10,1249.5,950), new cjs.Rectangle(60.3,-10,1191.6,950), new cjs.Rectangle(60.3,-10,1133.7,950), new cjs.Rectangle(60.3,-10,1075.8,950), new cjs.Rectangle(60.3,-10,1017.9,950), new cjs.Rectangle(60.3,-10,960,950), new cjs.Rectangle(60.3,-10,902.1,950), new cjs.Rectangle(60.3,-10,844.2,950), new cjs.Rectangle(60.3,-10,786.3,950), new cjs.Rectangle(60.3,-10,728.4,950), new cjs.Rectangle(60.3,-10,670.5,950), new cjs.Rectangle(60.3,-10,612.6,950), new cjs.Rectangle(60.3,-10,554.7,950), new cjs.Rectangle(60.3,-10,574.7,950), new cjs.Rectangle(60.3,-10,594.7,950), new cjs.Rectangle(60.3,-10,614.7,950), new cjs.Rectangle(60.3,-10,634.7,950), new cjs.Rectangle(60.3,-10,654.7,950), new cjs.Rectangle(60.3,-10,674.7,950), new cjs.Rectangle(60.3,-10,694.7,950), new cjs.Rectangle(60.3,-10,714.7,950), new cjs.Rectangle(60.3,-10,734.7,950), new cjs.Rectangle(60.3,-10,754.7,950), new cjs.Rectangle(60.3,-10,746.7,950), new cjs.Rectangle(60.3,-10,738.7,950), new cjs.Rectangle(60.3,-10,730.7,950), new cjs.Rectangle(60.3,-10,722.7,950), rect=new cjs.Rectangle(60.3,-10,714.7,950), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(60.3,-10,692.7,950), new cjs.Rectangle(60.3,-10,670.7,950), new cjs.Rectangle(60.3,-10,648.7,950), new cjs.Rectangle(60.3,-10,626.7,950), new cjs.Rectangle(60.3,-10,604.7,950), new cjs.Rectangle(60.3,-10,674.7,950), new cjs.Rectangle(60.3,-10,744.7,950), new cjs.Rectangle(60.3,-10,814.7,950), new cjs.Rectangle(60.3,-10,884.7,950), new cjs.Rectangle(60.3,-10,954.7,950), new cjs.Rectangle(60.3,-10,1024.7,950), new cjs.Rectangle(60.3,-10,1094.7,950), new cjs.Rectangle(60.3,-10,1164.7,950), new cjs.Rectangle(60.3,-10,1234.7,950), new cjs.Rectangle(60.3,-10,1304.7,950), new cjs.Rectangle(60.3,-10,1374.7,950), new cjs.Rectangle(60.3,-10,1444.7,950), new cjs.Rectangle(60.3,-10,1514.7,950), new cjs.Rectangle(60.3,-10,1584.7,950), rect=new cjs.Rectangle(-410,-10,2125,950), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":219});

	// timeline functions:
	this.frame_1 = function() {
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
	this.frame_64 = function() {
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
	this.frame_94 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(63).call(this.frame_64).wait(30).call(this.frame_94).wait(126));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(240,700,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(29).to({regX:0.2,scaleX:0.84,scaleY:0.84,x:240.2,y:460},10).to({regX:0,scaleX:0.74,scaleY:0.74,x:240,y:520},5).wait(5).to({regX:0.1,scaleX:0.63,scaleY:0.63,x:240.1},5).to({regX:0,scaleX:0.74,scaleY:0.74,x:240},10).to({y:410},5).to({y:1180},10).wait(141));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_3_mc();
	this.dressupPanel_mc.setTransform(240,950);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({y:150},14).to({y:400},10).to({y:300},5).wait(35).to({y:200},5).to({y:950},10).wait(141));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(620,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(79).to({x:420},20).wait(121));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).wait(121));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).to({alpha:1},20).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,21.3,719.7,1578.8);
p.frameBounds = [rect, new cjs.Rectangle(20,21.3,719.7,1521.6), new cjs.Rectangle(20,21.3,719.7,1464.5), new cjs.Rectangle(20,21.3,719.7,1407.4), new cjs.Rectangle(20,21.3,719.7,1350.2), new cjs.Rectangle(20,21.3,719.7,1293.1), new cjs.Rectangle(20,21.3,719.7,1235.9), new cjs.Rectangle(20,21.3,719.7,1178.8), new cjs.Rectangle(20,21.3,719.7,1121.6), new cjs.Rectangle(20,21.3,719.7,1064.5), new cjs.Rectangle(20,21.3,719.7,1007.4), new cjs.Rectangle(20,6.4,719.7,965), new cjs.Rectangle(20,-50.7,719.7,965), new cjs.Rectangle(20,-107.8,719.7,965), new cjs.Rectangle(20,-165,719.7,965), new cjs.Rectangle(20,-140,719.7,965), new cjs.Rectangle(20,-115,719.7,965), new cjs.Rectangle(20,-90,719.7,965), new cjs.Rectangle(20,-65,719.7,965), new cjs.Rectangle(20,-40,719.7,965), new cjs.Rectangle(20,-15,719.7,965), new cjs.Rectangle(20,10,719.7,965), new cjs.Rectangle(20,21.3,719.7,978.8), new cjs.Rectangle(20,21.3,719.7,1003.8), new cjs.Rectangle(20,21.3,719.7,1028.8), new cjs.Rectangle(20,21.3,719.7,1008.8), new cjs.Rectangle(20,21.3,719.7,988.8), new cjs.Rectangle(20,21.3,719.7,968.8), new cjs.Rectangle(20,5,719.7,965), rect=new cjs.Rectangle(20,-15,719.7,965), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(20,-35,719.7,965), new cjs.Rectangle(20,-55,719.7,965), new cjs.Rectangle(20,-75,719.7,965), new cjs.Rectangle(20,-95,719.7,965), new cjs.Rectangle(20,-115,719.7,965), new cjs.Rectangle(20,-40,719.7,965), new cjs.Rectangle(20,21.3,719.7,978.8), new cjs.Rectangle(20,21.3,719.7,1053.8), new cjs.Rectangle(20,21.3,719.7,1128.8), new cjs.Rectangle(20,21.3,719.7,1203.8), new cjs.Rectangle(20,21.3,719.7,1278.8), new cjs.Rectangle(20,21.3,719.7,1353.8), new cjs.Rectangle(20,21.3,719.7,1428.8), new cjs.Rectangle(20,21.3,719.7,1503.8), rect=new cjs.Rectangle(-410,-10,1620,1610), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":39,"end":209});

	// timeline functions:
	this.frame_1 = function() {
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
	this.frame_54 = function() {
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
	this.frame_89 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_196 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(53).call(this.frame_54).wait(35).call(this.frame_89).wait(107).call(this.frame_196).wait(14));

	// animation
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,660.1,0.526,0.526,0,0,0,0.1,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({_off:false},0).to({regY:0.1,scaleX:0.84,scaleY:0.84,y:480.1},7).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:700,y:520},8).wait(1));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(1500,535,0.684,0.684);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).to({x:400},19).to({x:620},10).to({x:560},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.58,scaleY:0.58,x:560.1,y:535.1},5).to({regX:0,regY:0,scaleX:0.68,scaleY:0.68,x:560,y:535},10).to({x:450},5).to({x:1500},15).wait(136));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_2_mc();
	this.dressupPanel_mc.setTransform(1500,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({x:400},19).to({x:620},10).to({x:560},5).wait(20).to({x:450},5).to({x:1500},15).wait(136));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(200,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(74).to({x:410},20).wait(116));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).wait(116));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({alpha:1},20).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,5,1640,945);
p.frameBounds = [rect, new cjs.Rectangle(75,5,1582.1,945), new cjs.Rectangle(75,5,1524.2,945), new cjs.Rectangle(75,5,1466.3,945), new cjs.Rectangle(75,5,1408.4,945), new cjs.Rectangle(75,5,1350.6,945), new cjs.Rectangle(75,5,1292.6,945), new cjs.Rectangle(75,5,1234.8,945), new cjs.Rectangle(75,5,1176.9,945), new cjs.Rectangle(75,5,1119,945), new cjs.Rectangle(75,5,1061.1,945), new cjs.Rectangle(75,5,1003.2,945), new cjs.Rectangle(75,5,945.3,945), new cjs.Rectangle(75,5,887.4,945), new cjs.Rectangle(75,5,829.5,945), new cjs.Rectangle(75,5,771.6,945), new cjs.Rectangle(75,5,713.7,945), new cjs.Rectangle(75,5,655.8,945), new cjs.Rectangle(75,5,597.9,945), new cjs.Rectangle(75,5,540,945), new cjs.Rectangle(75,5,562,945), new cjs.Rectangle(75,5,584,945), new cjs.Rectangle(75,5,606,945), new cjs.Rectangle(75,5,628,945), new cjs.Rectangle(75,5,650,945), new cjs.Rectangle(75,5,672,945), new cjs.Rectangle(75,5,694,945), new cjs.Rectangle(75,5,716,945), new cjs.Rectangle(75,5,738,945), new cjs.Rectangle(75,5,760,945), new cjs.Rectangle(75,5,748,945), new cjs.Rectangle(75,5,736,945), new cjs.Rectangle(75,5,724,945), new cjs.Rectangle(75,5,712,945), rect=new cjs.Rectangle(75,5,700,945), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(75,5,678,945), new cjs.Rectangle(75,5,656,945), new cjs.Rectangle(75,5,634,945), new cjs.Rectangle(75,5,612,945), new cjs.Rectangle(75,5,590,945), new cjs.Rectangle(75,5,660,945), new cjs.Rectangle(75,5,730,945), new cjs.Rectangle(75,5,800,945), new cjs.Rectangle(75,5,870,945), new cjs.Rectangle(75,5,940,945), new cjs.Rectangle(75,5,1010,945), new cjs.Rectangle(75,5,1080,945), new cjs.Rectangle(75,5,1150,945), new cjs.Rectangle(75,5,1220,945), new cjs.Rectangle(75,5,1290,945), new cjs.Rectangle(75,5,1360,945), new cjs.Rectangle(75,5,1430,945), new cjs.Rectangle(75,5,1500,945), new cjs.Rectangle(75,5,1570,945), rect=new cjs.Rectangle(-410,-10,2125,960), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":219});

	// timeline functions:
	this.frame_1 = function() {
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
	this.frame_64 = function() {
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
	this.frame_94 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(63).call(this.frame_64).wait(30).call(this.frame_94).wait(126));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(240,700,0.684,0.684);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(29).to({regX:0.1,scaleX:0.79,scaleY:0.79,x:240.1,y:470},10).to({regX:0,scaleX:0.68,scaleY:0.68,x:240,y:520},5).wait(5).to({regX:0.1,scaleX:0.58,scaleY:0.58,x:240.1},5).to({regX:0,scaleX:0.68,scaleY:0.68,x:240},10).to({regX:0.1,regY:0.1,scaleX:0.79,scaleY:0.79,x:240.1,y:410.1},5).to({regX:0,regY:0,scaleX:0.68,scaleY:0.68,x:240,y:1120},10).wait(141));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_1_mc();
	this.dressupPanel_mc.setTransform(240,900);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({y:150},14).to({y:400},10).to({y:300},5).wait(35).to({y:200},5).to({y:900},10).wait(141));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(620,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(79).to({x:410},20).wait(121));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).wait(121));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).to({alpha:1},20).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,23.9,707,1526.2);
p.frameBounds = [rect, new cjs.Rectangle(40,23.9,707,1472.6), new cjs.Rectangle(40,23.9,707,1419), new cjs.Rectangle(40,23.9,707,1365.5), new cjs.Rectangle(40,23.9,707,1311.9), new cjs.Rectangle(40,23.9,707,1258.3), new cjs.Rectangle(40,23.9,707,1204.7), new cjs.Rectangle(40,23.9,707,1151.2), new cjs.Rectangle(40,23.9,707,1097.6), new cjs.Rectangle(40,23.9,707,1044), new cjs.Rectangle(40,23.9,707,990.5), new cjs.Rectangle(40,23.9,707,936.9), new cjs.Rectangle(40,-27.8,707,935), new cjs.Rectangle(40,-81.4,707,935), new cjs.Rectangle(40,-135,707,935), new cjs.Rectangle(40,-110,707,935), new cjs.Rectangle(40,-85,707,935), new cjs.Rectangle(40,-60,707,935), new cjs.Rectangle(40,-35,707,935), new cjs.Rectangle(40,-10,707,935), new cjs.Rectangle(40,15,707,935), new cjs.Rectangle(40,23.9,707,951.2), new cjs.Rectangle(40,23.9,707,976.2), new cjs.Rectangle(40,23.9,707,1001.2), new cjs.Rectangle(40,23.9,707,1026.2), new cjs.Rectangle(40,23.9,707,1006.2), new cjs.Rectangle(40,23.9,707,986.2), new cjs.Rectangle(40,23.9,707,966.2), new cjs.Rectangle(40,23.9,707,946.2), rect=new cjs.Rectangle(40,15,707,935), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(40,-5,707,935), new cjs.Rectangle(40,-25,707,935), new cjs.Rectangle(40,-45,707,935), new cjs.Rectangle(40,-65,707,935), new cjs.Rectangle(40,-85,707,935), new cjs.Rectangle(40,-15,707,935), new cjs.Rectangle(40,23.9,707,966.2), new cjs.Rectangle(40,23.9,707,1036.2), new cjs.Rectangle(40,23.9,707,1106.2), new cjs.Rectangle(40,23.9,707,1176.2), new cjs.Rectangle(40,23.9,707,1246.2), new cjs.Rectangle(40,23.9,707,1316.2), new cjs.Rectangle(40,23.9,707,1386.2), new cjs.Rectangle(40,23.9,707,1456.2), rect=new cjs.Rectangle(-410,-10,1620,1560), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(280,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:410},0).wait(1).to({x:400,y:1400},0).wait(1).to({skewY:180,x:390,y:340},0).wait(1).to({skewY:0,x:400,y:1400},0).wait(1).to({x:410,y:340},0).wait(1).to({x:400,y:1400},0).wait(1).to({x:410,y:340},0).wait(1).to({x:400,y:1400},0).wait(1));

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(550,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:400,y:1400},0).wait(1).to({x:440,y:350},0).wait(1).to({x:400,y:1400},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:440,y:320},0).wait(1).to({scaleX:1,scaleY:1,x:400,y:1400},0).wait(1).to({x:440,y:350},0).wait(1).to({x:400,y:1400},0).wait(1).to({skewY:180,x:380,y:350},0).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(9));

	// bg
	this.instance = new lib.background_9_mc();

	this.instance_1 = new lib.background_6_mc();

	this.instance_2 = new lib.background_8_mc();

	this.instance_3 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,681.3);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,1731.3), new cjs.Rectangle(-400,0,1600,1727.3), new cjs.Rectangle(-400,0,1600,1731.3), new cjs.Rectangle(-400,0,1600,1727.3), new cjs.Rectangle(-400,0,1600,1731.3), new cjs.Rectangle(-400,0,1600,1727.3), new cjs.Rectangle(-400,0,1600,1731.3), new cjs.Rectangle(-400,0,1600,1727.3)];


(lib.quest_6_mc = function(mode,startPosition,loop) {
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
	this.object_3 = new lib.object_0_mc();
	this.object_3.setTransform(700,500);
	this.object_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(2).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.frame_2_mc = new lib.quest_2_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(2));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-349.4,1200,1289.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,-349.4,1915,1289.4), rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.frame_2_mc = new lib.quest_2_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(35,-349.4,745,1299.4);
p.frameBounds = [rect, new cjs.Rectangle(20,-349.4,719.7,1949.4)];


(lib.quest_3_mc = function(mode,startPosition,loop) {
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
	this.object_3 = new lib.object_0_mc();
	this.object_3.setTransform(700,500);
	this.object_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(2).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.frame_2_mc = new lib.quest_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(2));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-349.4,1200,1299.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,-349.4,1915,1299.4), rect];


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
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.frame_2_mc = new lib.quest_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(25,-349.4,755,1299.4);
p.frameBounds = [rect, new cjs.Rectangle(40,-349.4,707,1899.4)];


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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,681.3);
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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_8_mc();

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
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_mc();

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
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_mc();
	this.instance.setTransform(400,300,1,1,0,0,0,400,300);

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
	this.next_mc.setTransform(730,320);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(70,320);

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

	this.instance_6 = new lib.LocationScreen_2();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_3();
	this.instance_7.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.LocationScreen_4();

	this.instance_9 = new lib.LocationScreen_5();
	this.instance_9.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_10 = new lib.LocationScreen_6();
	this.instance_10.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_11 = new lib.RedirectScreen();

	this.instance_12 = new lib.ResultScreen();
	this.instance_12.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

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
	this.instance_16.setTransform(150,275);

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

	this.instance_23 = new lib.decor_shadow_1_mc();

	this.instance_24 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.gravity_explosion_comp},{t:this.instance_15},{t:this.instance_14},{t:this.next_btn}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[]},1).to({state:[{t:this.instance_23}]},2).to({state:[]},1).to({state:[{t:this.instance_24}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,0,1600,1315), new cjs.Rectangle(-826.6,-430,2526.7,1520), new cjs.Rectangle(-400,-280.8,1600,1261.9), new cjs.Rectangle(-400,-349.4,1651,1738.2), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, new cjs.Rectangle(-400,-349.4,1651,1750.2), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, rect=null, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,785,425), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, new cjs.Rectangle(331,256,130,70), rect=null, rect, new cjs.Rectangle(-410,-10,1620,620)];


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