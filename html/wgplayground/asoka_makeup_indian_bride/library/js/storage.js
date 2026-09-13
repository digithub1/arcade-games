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
		{name:"storage_atlas_", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,602,800,601],[0,0,1600,600],[802,602,695,612]]},
		{name:"storage_atlas_5", frames: [[1140,491,338,700],[1140,0,600,489],[0,611,608,584],[605,0,533,579],[0,0,603,609],[0,1197,1600,200],[610,581,460,580]]},
		{name:"storage_atlas_6", frames: [[826,0,289,639],[1129,564,340,500],[0,473,360,589],[362,914,439,404],[0,0,502,471],[826,641,301,580],[362,473,462,439],[1117,0,640,280],[1117,282,640,280]]},
		{name:"storage_atlas_7", frames: [[1368,502,340,500],[1026,502,340,500],[0,0,340,500],[1026,0,340,500],[1368,0,340,500],[342,0,340,500],[684,502,340,500],[342,502,340,500],[684,0,340,500],[0,502,340,500]]},
		{name:"storage_atlas_8", frames: [[362,848,500,300],[413,402,500,300],[776,0,500,300],[1278,0,500,300],[0,848,360,433],[0,0,372,446],[864,704,293,504],[0,448,411,398],[374,0,400,400],[1297,302,380,380],[1159,684,380,380],[915,302,380,380]]},
		{name:"storage_atlas_9", frames: [[0,412,278,477],[715,0,387,332],[1104,0,369,329],[0,891,344,344],[337,357,355,333],[346,692,379,309],[346,1003,379,309],[0,0,335,410],[337,0,376,355],[727,596,440,260],[1169,593,440,260],[727,1120,440,260],[727,858,440,260],[1169,855,440,260],[715,334,440,260],[1157,331,440,260],[1169,1117,440,260]]},
		{name:"storage_atlas_10", frames: [[878,826,300,300],[944,262,300,300],[1326,0,440,260],[1180,564,290,290],[303,262,380,260],[576,826,300,300],[340,524,300,300],[642,524,300,300],[274,911,300,300],[1472,520,280,280],[1438,1113,280,280],[1246,262,317,256],[1180,856,256,322],[0,611,338,298],[1438,856,310,255],[0,262,301,347],[576,1128,316,270],[0,911,272,361],[442,0,440,260],[0,0,440,260],[884,0,440,260]]},
		{name:"storage_atlas_11", frames: [[1018,735,240,220],[0,0,280,280],[282,282,280,280],[282,0,280,280],[282,564,280,280],[846,0,280,280],[0,564,280,280],[0,282,280,280],[564,0,280,280],[282,846,280,280],[0,846,280,280],[564,282,280,280],[846,282,216,305],[1607,824,154,305],[794,855,212,280],[1260,774,175,279],[834,1137,293,193],[1128,0,279,219],[0,1128,325,209],[564,901,228,264],[788,589,228,264],[1409,0,228,264],[327,1128,228,264],[564,564,222,335],[1639,0,157,335],[1437,824,168,285],[1500,520,179,302],[1494,1131,238,186],[557,1167,275,208],[1064,282,286,197],[1129,1111,363,125],[1064,481,216,252],[1352,266,216,252],[1282,520,216,252],[834,1332,800,63]]},
		{name:"storage_atlas_12", frames: [[636,788,190,190],[1010,890,180,180],[1110,0,240,180],[1112,668,220,160],[1352,140,220,160],[890,728,220,160],[1110,182,220,160],[1332,302,220,160],[1080,344,220,160],[1334,626,220,160],[1112,506,220,160],[222,1202,220,160],[858,404,220,160],[890,566,220,160],[1334,464,220,160],[698,596,190,190],[1647,0,120,187],[222,0,220,200],[0,0,220,200],[888,0,220,200],[0,404,220,200],[222,202,220,200],[444,202,220,200],[444,0,220,200],[0,606,220,200],[222,404,220,200],[222,606,220,200],[0,808,220,200],[0,1010,220,200],[666,0,220,200],[222,808,220,200],[0,202,220,200],[444,404,220,200],[666,202,220,200],[626,1160,180,180],[1239,1230,140,140],[1654,880,120,120],[1556,310,77,271],[1352,0,293,138],[1635,310,67,295],[444,606,252,144],[1676,1096,67,235],[0,1212,220,160],[1556,607,120,120],[1394,1178,280,80],[1513,1333,260,60],[1394,1096,280,80],[444,752,190,190],[1547,1014,220,80],[1205,1014,340,80],[1381,1260,130,130],[444,944,186,188],[1087,1233,150,142],[1704,581,50,297],[632,980,194,178],[828,1072,187,171],[1205,1096,187,132],[1017,1072,186,159],[888,202,190,190],[222,1010,190,190],[1574,189,177,119],[666,404,190,190],[1704,310,60,269],[444,1134,180,180],[828,890,180,180],[1334,788,277,100],[808,1245,277,100],[1192,890,460,60],[1192,952,460,60]]},
		{name:"storage_atlas_13", frames: [[134,244,97,139],[610,122,120,120],[854,122,120,120],[732,122,120,120],[571,853,48,48],[962,838,50,50],[523,742,29,45],[0,902,34,37],[611,730,30,121],[488,122,120,120],[729,693,90,50],[290,475,90,50],[0,0,120,120],[244,0,120,120],[122,0,120,120],[858,835,50,50],[348,826,50,50],[710,370,50,50],[0,450,50,50],[0,852,48,48],[521,853,48,48],[985,731,36,93],[50,852,23,92],[262,789,46,74],[0,690,48,99],[729,745,47,77],[400,849,25,94],[614,462,71,21],[52,480,70,21],[877,430,70,22],[511,903,70,21],[274,737,77,50],[601,244,185,62],[159,891,38,40],[680,864,40,40],[710,430,165,60],[50,690,37,122],[650,660,36,126],[968,558,47,171],[272,910,49,27],[583,919,49,27],[0,595,99,93],[89,767,91,40],[182,708,90,48],[89,809,88,37],[448,841,71,35],[778,773,78,45],[778,820,78,37],[101,687,79,78],[555,730,54,76],[786,904,27,46],[944,731,39,105],[978,456,43,93],[353,737,42,87],[643,788,35,87],[310,789,36,77],[761,859,23,89],[323,920,66,20],[508,430,63,26],[199,908,71,19],[663,906,71,19],[0,814,84,36],[406,244,193,60],[117,891,40,39],[722,864,36,39],[285,660,186,37],[285,699,129,36],[976,0,48,171],[86,848,63,38],[151,851,63,38],[508,462,104,93],[680,824,79,38],[182,758,78,46],[182,806,72,43],[527,808,71,43],[448,742,73,52],[448,796,77,43],[555,660,93,68],[216,432,72,69],[976,173,48,60],[821,714,72,57],[233,244,69,186],[134,385,80,124],[788,244,180,60],[406,306,180,60],[788,306,180,60],[588,308,180,60],[406,368,180,60],[770,368,180,60],[258,865,40,40],[689,618,38,201],[416,699,30,148],[216,851,40,55],[786,859,40,43],[770,342,10,11],[831,618,69,94],[729,618,100,73],[858,773,57,60],[877,456,99,100],[448,699,23,38],[427,920,31,31],[910,838,50,50],[902,618,40,147],[970,244,50,210],[193,616,90,90],[366,0,120,120],[101,595,90,90],[488,0,120,120],[342,878,40,40],[427,878,40,40],[469,878,40,40],[828,887,40,40],[300,868,40,40],[75,888,40,40],[870,890,40,40],[912,890,40,40],[621,877,40,40],[954,890,40,40],[72,244,60,234],[610,0,120,120],[687,462,21,23],[473,660,80,80],[304,244,100,127],[588,370,120,90],[854,0,120,120],[366,122,120,120],[732,0,120,120],[244,122,120,120],[122,122,120,120],[0,122,120,120],[614,492,240,40],[726,576,240,40],[242,574,240,40],[0,511,240,40],[614,534,240,40],[242,532,240,40],[0,553,240,40],[484,576,240,40],[487,618,200,40],[285,618,200,40],[0,244,70,204],[304,373,100,100],[406,430,100,100],[770,308,14,15],[770,325,14,15]]}
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
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.applicator2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.background_0_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_16_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
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
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.boy1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boy2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.braslets1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.braslets2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.brush1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.brush3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
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
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.current_location_0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.current_maneken_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_hairstyle_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.heart_red_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dark_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress_back_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hands2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hands2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hands4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_nath_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_ton_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_vail_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_vail_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_vail_back1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_vail_back2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dark_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress_back_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hands2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hands4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_nath_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero2_vail_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_vail_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_vail_back1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_vail_back2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.highlighter1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.highlighter2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lipstik1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.lipstik2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
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



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.maneken_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.pinc_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.podvodka3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.podvodka4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.rastr4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(120);
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
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.shadows1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.shadows2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.shelf_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.stick_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.table_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ton_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.video_play_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.volos2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.volos_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(6);
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


(lib.white_screen2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eh8+AyAMgABhj/MD5/AAAMAAABj/gEgnCArvMBV6AAAMAAAhXdMhV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-800,-320,1600,640);
p.frameBounds = [rect];


(lib.white_screen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eh8/Au3MAAAhdtMD5/AAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-800,-300,1600,600);
p.frameBounds = [rect];


(lib.volos2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.volos2_img();
	this.instance.setTransform(-7,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7,-7.5,14,15);
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


(lib.video_play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.video_play_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.ton_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ton_img();
	this.instance.setTransform(-24,-69.9,0.686,0.686);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-69.9,48,139.9);
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


(lib.table_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.table_img();
	this.instance.setTransform(-400,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-31.5,800,63);
p.frameBounds = [rect];


(lib.stick_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stick_img();
	this.instance.setTransform(-230,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-15,460,60);
p.frameBounds = [rect];


(lib.shelf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_img();
	this.instance.setTransform(-230,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-30,460,60);
p.frameBounds = [rect];


(lib.shadows2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows2_1_img();
	this.instance.setTransform(-138.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-50,277,100);
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


(lib.shadow_video_play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiEyA2sMAAAhtXMEJlAAAMAAABtXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-850,-350,1700,700);
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


(lib.rouge1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_1_img();
	this.instance.setTransform(-50,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-63.5,100,127);
p.frameBounds = [rect];


(lib.podvodka4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka4_img();
	this.instance.setTransform(-30,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-134.5,60,269);
p.frameBounds = [rect];


(lib.podvodka3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka3_img();
	this.instance.setTransform(-30,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-117,60,234);
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


(lib.object_21_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EghIAhJQtutvAAzaQAAzZNutvQNvtuTZAAQTaAANvNuQNuNvAATZQAATatuNvQtvNuzaAAQzZAAtvtug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.object_19_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.object_19_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EghIAhJQtutvAAzaQAAzZNutvQNvtuTZAAQTaAANvNuQNuNvAATZQAATatuNvQtvNuzaAAQzZAAtvtug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.object_17_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBODIAA8FIODAAIAAcFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-89.9,90,180);
p.frameBounds = [rect];


(lib.object_16_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzNRIAA6hIPnAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-85,100,170);
p.frameBounds = [rect];


(lib.object_14_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBNRIAA6hIODAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-85,90,170);
p.frameBounds = [rect];


(lib.object_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A42Y3QqTqUAAujQAAuiKTqUQKUqTOiAAQOjAAKUKTQKTKUAAOiQAAOjqTKUQqUKTujAAQuiAAqUqTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-225,450,450);
p.frameBounds = [rect];


(lib.object_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A42Y2QqTqTAAujQAAuiKTqUQKUqTOiAAQOjAAKUKTQKTKUAAOiQAAOjqTKTQqUKUujAAQuiAAqUqUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-225,450,450);
p.frameBounds = [rect];


(lib.object_11_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A+XeYQslsmgBxyQABxxMlsmQMmslRxgBQRyABMmMlQMlMmABRxQgBRyslMmQsmMlxyABQxxgBsmslg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-275,-275,550,550);
p.frameBounds = [rect];


(lib.object_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ax9H0IAAvnMAj7AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-50,230,100);
p.frameBounds = [rect];


(lib.object_10_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A+XeYQslsmgBxyQABxxMlsmQMmslRxgBQRyABMmMlQMlMmABRxQgBRyslMmQsmMlxyABQxxgBsmslg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-275,-275,550,550);
p.frameBounds = [rect];


(lib.object_9_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuIlIAAxJMAldAAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-55,240,110);
p.frameBounds = [rect];


(lib.object_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtQHCIAAuDIahAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-45,170,90);
p.frameBounds = [rect];


(lib.object_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtQH0IAAvmIahAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-50,170,100);
p.frameBounds = [rect];


(lib.object_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I1QjrjqAAlLQAAlKDrjqQDqjrFKAAQFLAADqDrQDrDqAAFKQAAFLjrDqQjqDrlLAAQlKAAjqjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao+NRIAA6hIR9AAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-85,115,170);
p.frameBounds = [rect];


(lib.object_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMgIAA4/IODAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-80,90,160);
p.frameBounds = [rect];


(lib.object_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzO2IAA9rIPnAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-95,100,190);
p.frameBounds = [rect];


(lib.maneken_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.maneken_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K7IAA11IV3AAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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


(lib.lipstik2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstik2_img();
	this.instance.setTransform(-15,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-74,30,148);
p.frameBounds = [rect];


(lib.lipstik1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstik1_img();
	this.instance.setTransform(-19,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-100.5,38,201);
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


(lib.highlighter2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.highlighter2_img();
	this.instance.setTransform(-33.5,-117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.5,-117.5,67,235);
p.frameBounds = [rect];


(lib.highlighter1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.highlighter1_img();
	this.instance.setTransform(-34.5,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-93,69,186);
p.frameBounds = [rect];


(lib.hero2_vail_back1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_vail_back1_img();
	this.instance.setTransform(-266.5,-289.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-266.5,-289.5,533,579);
p.frameBounds = [rect];


(lib.hero2_vail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_vail_2_img();
	this.instance.setTransform(-231,-219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-231,-219.5,462,439);
p.frameBounds = [rect];


(lib.hero2_vail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_vail_1_img();
	this.instance.setTransform(-150.5,-145.7,0.732,0.732);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.5,-145.7,301,291.5);
p.frameBounds = [rect];


(lib.hero2_shadows4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows4_img();
	this.instance.setTransform(-36,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-28.5,72,57);
p.frameBounds = [rect];


(lib.hero2_shadows3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows3_img();
	this.instance.setTransform(-24,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-30,48,60);
p.frameBounds = [rect];


(lib.hero2_shadows2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows2_img();
	this.instance.setTransform(-36,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-34.5,72,69);
p.frameBounds = [rect];


(lib.hero2_shadows1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-46.5,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.5,-34,93,68);
p.frameBounds = [rect];


(lib.hero2_necklace6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace6_img();
	this.instance.setTransform(-41,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-42,77,43);
p.frameBounds = [rect];


(lib.hero2_necklace5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace5_img();
	this.instance.setTransform(-39,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-44,73,52);
p.frameBounds = [rect];


(lib.hero2_necklace4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace4_img();
	this.instance.setTransform(-37,-42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-42.4,71,43);
p.frameBounds = [rect];


(lib.hero2_necklace3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace3_img();
	this.instance.setTransform(-38,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-42,72,43);
p.frameBounds = [rect];


(lib.hero2_necklace2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace2_img();
	this.instance.setTransform(-39,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-42,78,46);
p.frameBounds = [rect];


(lib.hero2_necklace1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace1_img();
	this.instance.setTransform(-43,-42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-42.4,79,38);
p.frameBounds = [rect];


(lib.hero2_necklace_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace2_img();
	this.instance.setTransform(-34.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-23.5,78,46);
p.frameBounds = [rect];


(lib.hero2_necklace_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_necklace1_img();
	this.instance.setTransform(-39.5,-19);

	this.instance_1 = new lib.hero2_necklace2_img();
	this.instance_1.setTransform(-34.5,-23.5);

	this.instance_2 = new lib.hero2_necklace3_img();
	this.instance_2.setTransform(-28.5,-20);

	this.instance_3 = new lib.hero2_necklace4_img();
	this.instance_3.setTransform(-30,-20);

	this.instance_4 = new lib.hero2_necklace5_img();
	this.instance_4.setTransform(-22.5,-24);

	this.instance_5 = new lib.hero2_necklace6_img();
	this.instance_5.setTransform(-33,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-19,79,38);
p.frameBounds = [rect, new cjs.Rectangle(-34.5,-23.5,78,46), new cjs.Rectangle(-28.5,-20,72,43), new cjs.Rectangle(-30,-20,71,43), new cjs.Rectangle(-22.5,-24,73,52), new cjs.Rectangle(-33,-21.5,77,43), null];


(lib.hero2_nath_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_nath_img();
	this.instance.setTransform(-52,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-46.5,104,93);
p.frameBounds = [rect];


(lib.hero2_lips1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-31.5,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-19,63,38);
p.frameBounds = [rect];


(lib.hero2_lips0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips0_img();
	this.instance.setTransform(-31.5,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-19,63,38);
p.frameBounds = [rect];


(lib.hero2_head3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head3_img();
	this.instance.setTransform(-108,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-126,216,252);
p.frameBounds = [rect];


(lib.hero2_head2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head2_img();
	this.instance.setTransform(-108,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-126,216,252);
p.frameBounds = [rect];


(lib.hero2_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head1_img();
	this.instance.setTransform(-108,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-126,216,252);
p.frameBounds = [rect];


(lib.hero2_hands4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.braslets2_img();
	this.instance.setTransform(-9.6,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_hands4_1_img();
	this.instance_1.setTransform(-24,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-85.5,48.4,171);
p.frameBounds = [rect];


(lib.hero2_hands4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hands4_1_img();
	this.instance.setTransform(-24,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-85.5,48,171);
p.frameBounds = [rect];


(lib.hero2_hair0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hair0_img();
	this.instance.setTransform(-150.5,-173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.5,-173.5,301,347);
p.frameBounds = [rect];


(lib.hero2_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-125,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,63,252,144);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair0_img();
	this.instance.setTransform(-149.6,-17.1);

	this.instance_1 = new lib.hero2_hair1_img();
	this.instance_1.setTransform(-125,63);

	this.instance_2 = new lib.hero2_hair2_img();
	this.instance_2.setTransform(-158.1,-27.5);

	this.instance_3 = new lib.hero2_hair3_img();
	this.instance_3.setTransform(-134.1,26.9);

	this.instance_4 = new lib.hero2_hair4_img();
	this.instance_4.setTransform(-161.6,-40.6);

	this.instance_5 = new lib.hero2_hair5_img();
	this.instance_5.setTransform(-182,-143.1);

	this.instance_6 = new lib.hero2_hair6_img();
	this.instance_6.setTransform(-186.6,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.6,-17.1,301,347);
p.frameBounds = [rect, new cjs.Rectangle(-125,63,252,144), new cjs.Rectangle(-158.1,-27.5,316,270), new cjs.Rectangle(-134.1,26.9,272,361), new cjs.Rectangle(-161.6,-40.6,335,410), new cjs.Rectangle(-182,-143.1,363,125), new cjs.Rectangle(-186.6,6.9,376,355)];


(lib.hero2_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-119,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119,-93,238,186);
p.frameBounds = [rect];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-152.1,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.1,-111,310,255);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-119,-93);

	this.instance_1 = new lib.hero2_fringe1_img();
	this.instance_1.setTransform(-152.1,-111);

	this.instance_2 = new lib.hero2_fringe2_img();
	this.instance_2.setTransform(-192.1,-125.5);

	this.instance_3 = new lib.hero2_fringe3_img();
	this.instance_3.setTransform(-144.1,-116);

	this.instance_4 = new lib.hero2_fringe4_img();
	this.instance_4.setTransform(-138.1,-118.6);

	this.instance_5 = new lib.hero2_fringe5_img();
	this.instance_5.setTransform(-143.1,-113.1);

	this.instance_6 = new lib.hero2_fringe6_img();
	this.instance_6.setTransform(-192.1,-122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119,-93,238,186);
p.frameBounds = [rect, new cjs.Rectangle(-152.1,-111,310,255), new cjs.Rectangle(-192.1,-125.5,379,309), new cjs.Rectangle(-144.1,-116,293,504), new cjs.Rectangle(-138.1,-118.6,275,208), new cjs.Rectangle(-143.1,-113.1,286,197), new cjs.Rectangle(-192.1,-122,379,309)];


(lib.hero2_eyes1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_2_img();
	this.instance.setTransform(-18,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-19.5,36,39);
p.frameBounds = [rect];


(lib.hero2_eyes1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_1_img();
	this.instance.setTransform(-20,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-19.5,40,39);
p.frameBounds = [rect];


(lib.hero2_eyes0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes0_img();
	this.instance.setTransform(-96.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,-30,193,60);
p.frameBounds = [rect];


(lib.hero2_eyes_closed_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes2_img();
	this.instance.setTransform(-93.5,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-2,186,37);
p.frameBounds = [rect];


(lib.hero2_eyelashes1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyelashes1_1_img();
	this.instance.setTransform(-42,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42,-18,84,36);
p.frameBounds = [rect];


(lib.hero2_eyebrows1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_2_img();
	this.instance.setTransform(-35.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.5,-9.5,71,19);
p.frameBounds = [rect];


(lib.hero2_eyebrows1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_1_img();
	this.instance.setTransform(-35.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.5,-9.5,71,19);
p.frameBounds = [rect];


(lib.hero2_eyebrows0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows0_2_img();
	this.instance.setTransform(-35.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.5,-9.5,63,26);
p.frameBounds = [rect];


(lib.hero2_eyebrows0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows0_1_img();
	this.instance.setTransform(-35.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.5,-9.5,66,20);
p.frameBounds = [rect];


(lib.hero2_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings6_img();
	this.instance.setTransform(78.7,-44.5);

	this.instance_1 = new lib.hero2_earrings6_img();
	this.instance_1.setTransform(-101.7,-44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-44.5,203.5,89);
p.frameBounds = [rect];


(lib.hero2_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings5_img();
	this.instance.setTransform(71.2,-38.5);

	this.instance_1 = new lib.hero2_earrings5_img();
	this.instance_1.setTransform(-107.2,-38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.2,-38.5,214.5,77);
p.frameBounds = [rect];


(lib.hero2_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings4_img();
	this.instance.setTransform(72.2,-43.5);

	this.instance_1 = new lib.hero2_earrings4_img();
	this.instance_1.setTransform(-107.2,-43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.2,-43.5,214.5,87);
p.frameBounds = [rect];


(lib.hero2_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings3_img();
	this.instance.setTransform(67.7,-43.5);

	this.instance_1 = new lib.hero2_earrings3_img();
	this.instance_1.setTransform(-109.7,-43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.7,-43.5,219.5,87);
p.frameBounds = [rect];


(lib.hero2_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(69.2,-46.5);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-112.2,-46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.2,-46.5,224.5,93);
p.frameBounds = [rect];


(lib.hero2_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(69.2,-52.5);

	this.instance_1 = new lib.hero2_earrings1_img();
	this.instance_1.setTransform(-108.2,-52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.2,-52.5,216.5,105);
p.frameBounds = [rect];


(lib.hero2_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings6_img();
	this.instance.setTransform(5,-68);

	this.instance_1 = new lib.hero2_earrings6_img();
	this.instance_1.setTransform(-31,-68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-68,59,89);
p.frameBounds = [rect];


(lib.hero2_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings5_img();
	this.instance.setTransform(0,-50.4);

	this.instance_1 = new lib.hero2_earrings5_img();
	this.instance_1.setTransform(-41,-50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-50.4,77,77);
p.frameBounds = [rect];


(lib.hero2_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings4_img();
	this.instance.setTransform(2,-68);

	this.instance_1 = new lib.hero2_earrings4_img();
	this.instance_1.setTransform(-38,-68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-68,75,87);
p.frameBounds = [rect];


(lib.hero2_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings3_img();
	this.instance.setTransform(-2,-62);

	this.instance_1 = new lib.hero2_earrings3_img();
	this.instance_1.setTransform(-43,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-62,83,87);
p.frameBounds = [rect];


(lib.hero2_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(-1,-64);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-45,-64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-64,87,93);
p.frameBounds = [rect];


(lib.hero2_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(0,-62);

	this.instance_1 = new lib.hero2_earrings1_img();
	this.instance_1.setTransform(-39,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-62,78,105);
p.frameBounds = [rect];


(lib.hero2_dress0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress0_img();
	this.instance.setTransform(-84,-142.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-142.5,168,285);
p.frameBounds = [rect];


(lib.hero2_dress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress_img();
	this.instance.setTransform(-89.5,-151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-151,179,302);
p.frameBounds = [rect];


(lib.hero2_dress_back_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress_back_img();
	this.instance.setTransform(-33.5,-147.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.5,-147.5,67,295);
p.frameBounds = [rect];


(lib.hero2_dark_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dark_img();
	this.instance.setTransform(-150.5,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.hero2_vail_back2_img();
	this.instance_1.setTransform(-287.6,-322.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-287.6,-322.3,603,612.3);
p.frameBounds = [rect];


(lib.hero2_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body1_img();
	this.instance.setTransform(-111,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-167.5,222,335);
p.frameBounds = [rect];


(lib.hero1_vail_back2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_vail_back2_img();
	this.instance.setTransform(-347.5,-306);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-347.5,-306,695,612);
p.frameBounds = [rect];


(lib.hero1_vail_back1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_vail_back1_img();
	this.instance.setTransform(-304,-292);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-304,-292,608,584);
p.frameBounds = [rect];


(lib.hero1_vail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_vail_2_img();
	this.instance.setTransform(-251,-235.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-251,-235.5,502,471);
p.frameBounds = [rect];


(lib.hero1_vail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_vail_1_img();
	this.instance.setTransform(-159.4,-146.7,0.726,0.726);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.4,-146.7,318.8,293.4);
p.frameBounds = [rect];


(lib.hero1_ton_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_ton_img();
	this.instance.setTransform(-13.5,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13.5,-23,27,46);
p.frameBounds = [rect];


(lib.hero1_shadows1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows1_2_img();
	this.instance.setTransform(-27,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-38,54,76);
p.frameBounds = [rect];


(lib.hero1_shadows0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows0_1_img();
	this.instance.setTransform(-39.5,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-39,79,78);
p.frameBounds = [rect];


(lib.hero1_necklace6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace6_img();
	this.instance.setTransform(-41,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-39,78,37);
p.frameBounds = [rect];


(lib.hero1_necklace5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace5_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,78,45);
p.frameBounds = [rect];


(lib.hero1_necklace4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace4_img();
	this.instance.setTransform(-38,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-38,71,35);
p.frameBounds = [rect];


(lib.hero1_necklace3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace3_img();
	this.instance.setTransform(-45,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-41,88,37);
p.frameBounds = [rect];


(lib.hero1_necklace2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace2_img();
	this.instance.setTransform(-47,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-40,90,48);
p.frameBounds = [rect];


(lib.hero1_necklace1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace1_img();
	this.instance.setTransform(-47,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-45,91,40);
p.frameBounds = [rect];


(lib.hero1_necklace_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace2_img();
	this.instance.setTransform(-46.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.5,-10,90,48);
p.frameBounds = [rect];


(lib.hero1_necklace_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_necklace1_img();
	this.instance.setTransform(-45.5,-20);

	this.instance_1 = new lib.hero1_necklace2_img();
	this.instance_1.setTransform(-46.5,-10);

	this.instance_2 = new lib.hero1_necklace3_img();
	this.instance_2.setTransform(-45.5,-12);

	this.instance_3 = new lib.hero1_necklace4_img();
	this.instance_3.setTransform(-37,-15);

	this.instance_4 = new lib.hero1_necklace5_img();
	this.instance_4.setTransform(-41,-15);

	this.instance_5 = new lib.hero1_necklace6_img();
	this.instance_5.setTransform(-39.5,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-20,91,40);
p.frameBounds = [rect, new cjs.Rectangle(-46.5,-10,90,48), new cjs.Rectangle(-45.5,-12,88,37), new cjs.Rectangle(-37,-15,71,35), new cjs.Rectangle(-41,-15,78,45), new cjs.Rectangle(-39.5,-11,78,37), null];


(lib.hero1_nath_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_nath_img();
	this.instance.setTransform(-49.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-46.5,99,93);
p.frameBounds = [rect];


(lib.hero1_lips1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-24.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.5,-13.5,49,27);
p.frameBounds = [rect];


(lib.hero1_lips0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips0_img();
	this.instance.setTransform(-24.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.5,-13.5,49,27);
p.frameBounds = [rect];


(lib.hero1_head4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head4_img();
	this.instance.setTransform(-114,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-132,228,264);
p.frameBounds = [rect];


(lib.hero1_head3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head3_img();
	this.instance.setTransform(-114,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-132,228,264);
p.frameBounds = [rect];


(lib.hero1_head2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head2_img();
	this.instance.setTransform(-114,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-132,228,264);
p.frameBounds = [rect];


(lib.hero1_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head1_img();
	this.instance.setTransform(-114,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-132,228,264);
p.frameBounds = [rect];


(lib.hero1_hands4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.braslets1_img();
	this.instance.setTransform(-7.1,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_hands4_1_img();
	this.instance_1.setTransform(-23.5,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.5,-85.5,47,171);
p.frameBounds = [rect];


(lib.hero1_hands4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hands4_1_img();
	this.instance.setTransform(-23.5,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.5,-85.5,47,171);
p.frameBounds = [rect];


(lib.hero1_hair0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair0_img();
	this.instance.setTransform(-180,-216.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216.5,360,433);
p.frameBounds = [rect];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair2_img();
	this.instance.setTransform(-129.6,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.6,63.5,256,322);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair0_img();
	this.instance.setTransform(-178,8.4);

	this.instance_1 = new lib.hero1_hair1_img();
	this.instance_1.setTransform(-148.6,96);

	this.instance_2 = new lib.hero1_hair2_img();
	this.instance_2.setTransform(-129.6,63.5);

	this.instance_3 = new lib.hero1_hair3_img();
	this.instance_3.setTransform(-161.1,71.9);

	this.instance_4 = new lib.hero1_hair4_img();
	this.instance_4.setTransform(-168.6,14.9);

	this.instance_5 = new lib.hero1_hair5_img();
	this.instance_5.setTransform(-186,-113.6);

	this.instance_6 = new lib.hero1_hair6_img();
	this.instance_6.setTransform(-175.1,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178,8.4,360,433);
p.frameBounds = [rect, new cjs.Rectangle(-148.6,96,293,138), new cjs.Rectangle(-129.6,63.5,256,322), new cjs.Rectangle(-161.1,71.9,344,344), new cjs.Rectangle(-168.6,14.9,338,298), new cjs.Rectangle(-186,-113.6,372,446), new cjs.Rectangle(-175.1,-126,355,333)];


(lib.hero1_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe0_img();
	this.instance.setTransform(-146.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146.5,-96.5,293,193);
p.frameBounds = [rect];


(lib.hero1_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe2_img();
	this.instance.setTransform(-141.6,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.6,-92,278,477);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe0_img();
	this.instance.setTransform(-146.5,-96.5);

	this.instance_1 = new lib.hero1_fringe1_img();
	this.instance_1.setTransform(-158.6,-97.6);

	this.instance_2 = new lib.hero1_fringe2_img();
	this.instance_2.setTransform(-141.6,-92);

	this.instance_3 = new lib.hero1_fringe3_img();
	this.instance_3.setTransform(-194,-99.6);

	this.instance_4 = new lib.hero1_fringe4_img();
	this.instance_4.setTransform(-189.5,-88.6);

	this.instance_5 = new lib.hero1_fringe5_img();
	this.instance_5.setTransform(-142,-103.5);

	this.instance_6 = new lib.hero1_fringe6_img();
	this.instance_6.setTransform(-164.6,-96.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146.5,-96.5,293,193);
p.frameBounds = [rect, new cjs.Rectangle(-158.6,-97.6,317,256), new cjs.Rectangle(-141.6,-92,278,477), new cjs.Rectangle(-194,-99.6,387,332), new cjs.Rectangle(-189.5,-88.6,369,329), new cjs.Rectangle(-142,-103.5,279,219), new cjs.Rectangle(-164.6,-96.6,325,209)];


(lib.hero1_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.hero1_eyes1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_1_img();
	this.instance.setTransform(-19,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-20,38,40);
p.frameBounds = [rect];


(lib.hero1_eyes0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes0_img();
	this.instance.setTransform(-92.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.5,-31,185,62);
p.frameBounds = [rect];


(lib.hero1_eyes_closed_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes2_img();
	this.instance.setTransform(-82.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-31,165,60);
p.frameBounds = [rect];


(lib.hero1_eyelashes1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyelashes1_1_img();
	this.instance.setTransform(-38.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-25,77,50);
p.frameBounds = [rect];


(lib.hero1_eyebrows1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_2_img();
	this.instance.setTransform(-35,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-10.5,70,21);
p.frameBounds = [rect];


(lib.hero1_eyebrows1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_1_img();
	this.instance.setTransform(-35,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-11,70,22);
p.frameBounds = [rect];


(lib.hero1_eyebrows0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows0_2_img();
	this.instance.setTransform(-35,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-10.5,70,21);
p.frameBounds = [rect];


(lib.hero1_eyebrows0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows0_1_img();
	this.instance.setTransform(-35,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-11,71,21);
p.frameBounds = [rect];


(lib.hero1_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings6_img();
	this.instance.setTransform(81.8,-47);

	this.instance_1 = new lib.hero1_earrings6_img();
	this.instance_1.setTransform(-106.7,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.7,-47,213.5,94);
p.frameBounds = [rect];


(lib.hero1_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings5_img();
	this.instance.setTransform(69.2,-38.2);

	this.instance_1 = new lib.hero1_earrings5_img();
	this.instance_1.setTransform(-116.2,-38.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.2,-38.7,232.5,77.5);
p.frameBounds = [rect];


(lib.hero1_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings4_img();
	this.instance.setTransform(70.3,-49.5);

	this.instance_1 = new lib.hero1_earrings4_img();
	this.instance_1.setTransform(-118.2,-49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.2,-49.5,236.5,99);
p.frameBounds = [rect];


(lib.hero1_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings3_img();
	this.instance.setTransform(75.5,-37);

	this.instance_1 = new lib.hero1_earrings3_img();
	this.instance_1.setTransform(-121.5,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.5,-37,243,74);
p.frameBounds = [rect];


(lib.hero1_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings2_img();
	this.instance.setTransform(83.2,-46);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-106.2,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.2,-46,212.5,92);
p.frameBounds = [rect];


(lib.hero1_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(76,-46);

	this.instance_1 = new lib.hero1_earrings1_img();
	this.instance_1.setTransform(-112,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-47,224,94);
p.frameBounds = [rect];


(lib.hero1_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings6_img();
	this.instance.setTransform(6,-66);

	this.instance_1 = new lib.hero1_earrings6_img();
	this.instance_1.setTransform(-29,-66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-66,60,94);
p.frameBounds = [rect];


(lib.hero1_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings5_img();
	this.instance.setTransform(-3,-59);

	this.instance_1 = new lib.hero1_earrings5_img();
	this.instance_1.setTransform(-48,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-59,92,77);
p.frameBounds = [rect];


(lib.hero1_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings4_img();
	this.instance.setTransform(-2,-70);

	this.instance_1 = new lib.hero1_earrings4_img();
	this.instance_1.setTransform(-45,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,91,99);
p.frameBounds = [rect];


(lib.hero1_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings3_img();
	this.instance.setTransform(0,-67);

	this.instance_1 = new lib.hero1_earrings3_img();
	this.instance_1.setTransform(-48,-67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-67,94,74);
p.frameBounds = [rect];


(lib.hero1_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings2_img();
	this.instance.setTransform(6,-67);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-32,-67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-67,61,92);
p.frameBounds = [rect];


(lib.hero1_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(0,-66);

	this.instance_1 = new lib.hero1_earrings1_img();
	this.instance_1.setTransform(-39,-66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-66,75,93);
p.frameBounds = [rect];


(lib.hero1_dress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress_img();
	this.instance.setTransform(-87.5,-139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-139.5,175,279);
p.frameBounds = [rect];


(lib.hero1_dress_back_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress_back_img();
	this.instance.setTransform(-38.5,-135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-135.5,77,271);
p.frameBounds = [rect];


(lib.hero1_dark_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dark_img();
	this.instance.setTransform(-180,-294.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-294.5,360,589);
p.frameBounds = [rect];


(lib.hero1_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body1_img();
	this.instance.setTransform(-108,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-152.5,216,305);
p.frameBounds = [rect];


(lib.heart_red1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.heart_red_img();
	this.instance.setTransform(-300,-244.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-244.5,600,489);
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

	// graph
	this.instance = new lib.decor_location_img();
	this.instance.setTransform(-170,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-250,340,500);
p.frameBounds = [rect];


(lib.decor_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_hairstyle_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.current_maneken_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_maneken_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_img();
	this.instance.setTransform(-170,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-250,340,500);
p.frameBounds = [rect];


(lib.current_location_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_0_img();
	this.instance.setTransform(-170,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-250,340,500);
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


(lib.boy2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boy2_img();
	this.instance.setTransform(-144.5,-319.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.5,-319.5,289,639);
p.frameBounds = [rect];


(lib.boy1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boy1_img();
	this.instance.setTransform(-164.5,-340.8,0.974,0.974);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-164.5,-340.8,329.2,681.7);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-220,-130);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-220,-130);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-220,-130);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-220,-130);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-220,-130);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-220,-130);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-220,-130);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-220,-130);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-220,-130);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-220,-130);

	this.instance_10 = new lib.title_id_img();
	this.instance_10.setTransform(-220,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-130,440,260);
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


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-220,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-130,440,260);
p.frameBounds = [rect];


(lib.back_shorts_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_16_img();
	this.instance.setTransform(-400,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-300,800,601);
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


(lib.applicator2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.applicator2_img();
	this.instance.setTransform(-48.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-69.5,97,139);
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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,275,1,0.917);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,550);
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
	this.instance.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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
p.nominalBounds = rect = new cjs.Rectangle(-220,-130,440,260);
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


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows4_mc();
	this.instance.setTransform(-41.7,-9.2,1,1,0,0,180);

	this.instance_1 = new lib.hero2_shadows4_mc();
	this.instance_1.setTransform(41.7,-9.2);

	this.instance_2 = new lib.hero2_shadows3_mc();
	this.instance_2.setTransform(-65.7,6.8,1,1,0,0,180);

	this.instance_3 = new lib.hero2_shadows3_mc();
	this.instance_3.setTransform(62.2,6.8);

	this.instance_4 = new lib.hero2_shadows2_mc();
	this.instance_4.setTransform(-43.7,11.8,1,1,0,0,180);

	this.instance_5 = new lib.hero2_shadows2_mc();
	this.instance_5.setTransform(43.7,11.8);

	this.instance_6 = new lib.hero2_shadows1_mc();
	this.instance_6.setTransform(-56.7,-12.3,1,1,0,0,180);

	this.instance_7 = new lib.hero2_shadows1_mc();
	this.instance_7.setTransform(56.7,-12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.2,-46.3,206.5,92.7);
p.frameBounds = [rect];


(lib.hero2_lips2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_mc();

	this.instance_1 = new lib.hero2_lips0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-19,63,38);
p.frameBounds = [rect];


(lib.hero2_eyes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyelashes1_1_mc();
	this.instance.setTransform(-58,-12.7,1,1,0,0,180);

	this.instance_1 = new lib.hero2_eyelashes1_1_mc();
	this.instance_1.setTransform(58,-12.7);

	this.instance_2 = new lib.hero2_eyes1_1_mc();
	this.instance_2.setTransform(48.4,3.3);

	this.instance_3 = new lib.hero2_eyes1_2_mc();
	this.instance_3.setTransform(-52.4,3.8);

	this.instance_4 = new lib.hero2_eyes0_mc();
	this.instance_4.setTransform(-1.5,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-30.7,200,61.5);
p.frameBounds = [rect];


(lib.hero2_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings5_mc();
	this.instance.setTransform(-1.2,-15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.5,-53.6,214.5,77);
p.frameBounds = [rect];


(lib.hero2_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_mc();

	this.instance_1 = new lib.hero2_earrings2_mc();
	this.instance_1.setTransform(-1.4,-10);

	this.instance_2 = new lib.hero2_earrings3_mc();
	this.instance_2.setTransform(-2.2,-7.5);

	this.instance_3 = new lib.hero2_earrings4_mc();
	this.instance_3.setTransform(-0.9,-11.9);

	this.instance_4 = new lib.hero2_earrings5_mc();
	this.instance_4.setTransform(-1.2,-15.1);

	this.instance_5 = new lib.hero2_earrings6_mc();
	this.instance_5.setTransform(-0.9,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.2,-52.5,216.5,105);
p.frameBounds = [rect, new cjs.Rectangle(-113.6,-56.5,224.5,93), new cjs.Rectangle(-112,-51,219.5,87), new cjs.Rectangle(-108.1,-55.4,214.5,87), new cjs.Rectangle(-108.5,-53.6,214.5,77), new cjs.Rectangle(-102.6,-52.1,203.5,89), null];


(lib.hero1_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows1_2_mc();
	this.instance.setTransform(-38.3,1.9,1,1,0,0,180);

	this.instance_1 = new lib.hero1_shadows1_2_mc();
	this.instance_1.setTransform(35.2,1.9);

	this.instance_2 = new lib.hero1_shadows0_1_mc();
	this.instance_2.setTransform(-65,-0.9,1,1,0,0,180);

	this.instance_3 = new lib.hero1_shadows0_1_mc();
	this.instance_3.setTransform(65,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-39.9,209,79.9);
p.frameBounds = [rect];


(lib.hero1_eyes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_eyelashes1_1_mc();
	this.instance.setTransform(-59.1,-11.6,1,1,0,0,180);

	this.instance_1 = new lib.hero1_eyelashes1_1_mc();
	this.instance_1.setTransform(57.9,-11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.hero1_eyes1_mc();
	this.instance_2.setTransform(-46.5,4.5);

	this.instance_3 = new lib.hero1_eyes1_1_mc();
	this.instance_3.setTransform(48.5,4.5);

	this.instance_4 = new lib.hero1_eyes0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.6,-36.6,194,67.7);
p.frameBounds = [rect];


(lib.hero1_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings2_mc();
	this.instance.setTransform(-0.9,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.1,-47.6,212.5,92);
p.frameBounds = [rect];


(lib.hero1_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earrings1_mc();

	this.instance_1 = new lib.hero1_earrings2_mc();
	this.instance_1.setTransform(-0.9,-1.6);

	this.instance_2 = new lib.hero1_earrings3_mc();
	this.instance_2.setTransform(-0.1,-11.6);

	this.instance_3 = new lib.hero1_earrings4_mc();
	this.instance_3.setTransform(1.7,0);

	this.instance_4 = new lib.hero1_earrings5_mc();
	this.instance_4.setTransform(-0.9,-6.4);

	this.instance_5 = new lib.hero1_earrings6_mc();
	this.instance_5.setTransform(1.6,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-47,224,94);
p.frameBounds = [rect, new cjs.Rectangle(-107.1,-47.6,212.5,92), new cjs.Rectangle(-121.6,-48.6,243,74), new cjs.Rectangle(-116.5,-49.5,236.5,99), new cjs.Rectangle(-117.1,-45.1,232.5,77.5), new cjs.Rectangle(-105.1,-48.1,213.5,94), null];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_nath_mc();
	this.instance.setTransform(-76.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.hero2_earrings_main_mc();
	this.instance_1.setTransform(-20.7,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// animation
	this.instance_2 = new lib.hero2_fringe_main_mc();
	this.instance_2.setTransform(-23.6,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// animation
	this.instance_3 = new lib.hero2_lips2_mc();
	this.instance_3.setTransform(-20,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// animation
	this.instance_4 = new lib.hero2_eyes2_mc();
	this.instance_4.setTransform(-18.5,-43.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// animation
	this.instance_5 = new lib.hero2_eyebrows1_1_mc();
	this.instance_5.setTransform(33.9,-88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// animation
	this.instance_6 = new lib.hero2_eyebrows1_2_mc();
	this.instance_6.setTransform(-80.6,-88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// animation
	this.instance_7 = new lib.hero2_shadows_all_mc();
	this.instance_7.setTransform(-18.7,-49.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// animation
	this.instance_8 = new lib.hero2_head3_mc();
	this.instance_8.setTransform(-24,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// animation
	this.instance_9 = new lib.hero2_head2_mc();
	this.instance_9.setTransform(-24,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// animation
	this.instance_10 = new lib.hero2_necklace_main_mc();
	this.instance_10.setTransform(-19.1,94.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// animation
	this.instance_11 = new lib.hero2_dress_mc();
	this.instance_11.setTransform(-28.1,230.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// animation
	this.instance_12 = new lib.hero2_body1_mc();
	this.instance_12.setTransform(-15.5,213.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// animation
	this.instance_13 = new lib.hero2_dress_back_mc();
	this.instance_13.setTransform(45.4,234.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// animation
	this.instance_14 = new lib.hero2_hair_main_mc();
	this.instance_14.setTransform(-23.6,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// animation
	this.instance_15 = new lib.hero2_vail_back1_mc();
	this.instance_15.setTransform(-19.6,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-286.1,-216.5,533,598.3);
p.frameBounds = [rect];


(lib.hero_2_for_dressup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nath
	this.nath = new lib.hero2_nath_mc();
	this.nath.setTransform(-76.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.nath).to({y:-30},44).to({y:-2},45).wait(1));

	// earrings
	this.earrings = new lib.hero2_earrings_all_mc();
	this.earrings.setTransform(-20.7,46);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1,skewX:3.3,x:-23.7,y:18},44).to({scaleY:1,skewX:0,x:-20.7,y:46},45).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(-23.6,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({y:-133.5},44).to({y:-105.5},45).wait(1));

	// body
	this.instance = new lib.hero2_lips2_mc();
	this.instance.setTransform(-20,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-0.6},44).to({y:27.4},45).wait(1));

	// body
	this.instance_1 = new lib.hero2_eyes2_mc();
	this.instance_1.setTransform(-18.5,-43.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-71.2},44).to({y:-43.2},45).wait(1));

	// body
	this.instance_2 = new lib.hero2_eyebrows1_1_mc();
	this.instance_2.setTransform(33.9,-88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-111.1},44).to({y:-88.1},45).wait(1));

	// body
	this.instance_3 = new lib.hero2_eyebrows1_2_mc();
	this.instance_3.setTransform(-80.6,-88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-123.1},44).to({y:-88.1},45).wait(1));

	// body
	this.instance_4 = new lib.hero2_shadows_all_mc();
	this.instance_4.setTransform(-18.7,-49.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-77.8},44).to({y:-49.8},45).wait(1));

	// body
	this.instance_5 = new lib.hero2_head3_mc();
	this.instance_5.setTransform(-24,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-89.5},44).to({y:-61.5},45).wait(1));

	// body
	this.instance_6 = new lib.hero2_head2_mc();
	this.instance_6.setTransform(-24,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-89.5},44).to({y:-61.5},45).wait(1));

	// beads
	this.beads = new lib.hero2_necklace_all_mc();
	this.beads.setTransform(-19.1,94.4);

	this.timeline.addTween(cjs.Tween.get(this.beads).to({y:66.4},44).to({y:94.4},45).wait(1));

	// body
	this.instance_7 = new lib.hero2_dress_mc();
	this.instance_7.setTransform(-28.1,230.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:202.4},44).to({y:230.4},45).wait(1));

	// body
	this.instance_8 = new lib.hero2_body1_mc();
	this.instance_8.setTransform(-15.5,213.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:185.8},44).to({y:213.8},45).wait(1));

	// body
	this.instance_9 = new lib.hero2_dress_back_mc();
	this.instance_9.setTransform(45.4,234.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:207.3},44).to({y:234.3},45).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(-23.6,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({scaleY:1,skewX:2.8,y:-133.5},44).to({scaleY:1,skewX:0,y:-105.5},45).wait(1));

	// body
	this.instance_10 = new lib.hero2_vail_back1_mc();
	this.instance_10.setTransform(-19.6,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleY:1,skewX:3.4,x:-27.6,y:64},44).to({scaleY:1,skewX:0,x:-19.6,y:92},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-286.1,-198.5,533,580.3);
p.frameBounds = [rect, new cjs.Rectangle(-286.4,-199.1,533.2,580.3), new cjs.Rectangle(-286.6,-199.7,533.4,580.3), new cjs.Rectangle(-286.9,-200.4,533.6,580.3), new cjs.Rectangle(-288.1,-201,535.7,580.4), new cjs.Rectangle(-288.4,-201.7,535.8,580.4), new cjs.Rectangle(-288.7,-202.3,536.1,580.4), new cjs.Rectangle(-289.9,-202.9,538.2,580.4), new cjs.Rectangle(-290.2,-203.6,538.4,580.5), new cjs.Rectangle(-290.4,-204.2,538.5,580.5), new cjs.Rectangle(-291.6,-204.8,540.6,580.5), new cjs.Rectangle(-291.9,-205.5,540.8,580.5), new cjs.Rectangle(-292.3,-206.1,541,580.6), new cjs.Rectangle(-292.5,-206.7,541.2,580.5), new cjs.Rectangle(-293.8,-207.4,543.3,580.6), new cjs.Rectangle(-294,-208,543.5,580.6), new cjs.Rectangle(-294.3,-208.7,543.7,580.7), new cjs.Rectangle(-295.5,-209.3,545.8,580.6), new cjs.Rectangle(-295.8,-209.9,546,580.7), new cjs.Rectangle(-296.1,-210.6,546.2,580.7), new cjs.Rectangle(-297.3,-211.2,548.3,580.8), new cjs.Rectangle(-297.6,-211.8,548.5,580.7), new cjs.Rectangle(-297.8,-212.5,548.6,580.8), new cjs.Rectangle(-299.1,-213.1,550.7,580.8), new cjs.Rectangle(-299.4,-213.7,550.9,580.8), new cjs.Rectangle(-299.6,-214.4,551.1,580.8), new cjs.Rectangle(-300,-215,551.3,580.9), new cjs.Rectangle(-301.2,-215.7,553.4,580.9), new cjs.Rectangle(-301.5,-216.3,553.6,580.9), new cjs.Rectangle(-301.7,-216.9,553.8,580.9), new cjs.Rectangle(-302.9,-217.6,555.9,581), new cjs.Rectangle(-303.2,-218.2,556.1,581), new cjs.Rectangle(-303.5,-218.8,556.3,581), new cjs.Rectangle(-304.7,-219.5,558.4,581), new cjs.Rectangle(-305,-220.1,558.5,581.1), new cjs.Rectangle(-305.3,-220.7,558.8,581), new cjs.Rectangle(-305.5,-221.4,558.9,581.1), new cjs.Rectangle(-306.8,-222,561,581.1), new cjs.Rectangle(-307,-222.7,561.2,581.2), new cjs.Rectangle(-307.4,-223.3,561.4,581.1), new cjs.Rectangle(-308.6,-223.9,563.5,581.2), new cjs.Rectangle(-308.8,-224.6,563.7,581.2), new cjs.Rectangle(-309.1,-225.2,563.8,581.3), new cjs.Rectangle(-310.3,-225.8,566,581.2), new cjs.Rectangle(-311.1,-226.5,567,581.3), new cjs.Rectangle(-310.4,-225.9,566,581.3), new cjs.Rectangle(-309.2,-225.2,563.9,581.2), new cjs.Rectangle(-308.8,-224.6,563.7,581.2), new cjs.Rectangle(-308.6,-224,563.5,581.2), new cjs.Rectangle(-307.3,-223.4,561.4,581.2), new cjs.Rectangle(-307.1,-222.7,561.3,581.1), new cjs.Rectangle(-306.8,-222.1,561.1,581.1), new cjs.Rectangle(-306.6,-221.5,560.9,581.1), new cjs.Rectangle(-305.3,-220.9,558.8,581.1), new cjs.Rectangle(-305.1,-220.3,558.6,581.1), new cjs.Rectangle(-304.8,-219.6,558.4,581), new cjs.Rectangle(-303.5,-219,556.3,581), new cjs.Rectangle(-303.2,-218.4,556.1,581), new cjs.Rectangle(-303,-217.8,556,581), new cjs.Rectangle(-301.8,-217.1,553.9,580.9), new cjs.Rectangle(-301.5,-216.5,553.7,580.9), new cjs.Rectangle(-301.3,-215.9,553.5,580.9), new cjs.Rectangle(-301,-215.3,553.3,580.9), new cjs.Rectangle(-299.8,-214.7,551.2,580.8), new cjs.Rectangle(-299.5,-214,551,580.8), new cjs.Rectangle(-299.2,-213.4,550.8,580.8), new cjs.Rectangle(-298,-212.8,548.8,580.8), new cjs.Rectangle(-297.7,-212.2,548.6,580.8), new cjs.Rectangle(-297.5,-211.5,548.4,580.7), new cjs.Rectangle(-296.2,-210.9,546.3,580.7), new cjs.Rectangle(-296,-210.3,546.1,580.7), new cjs.Rectangle(-295.7,-209.7,545.9,580.7), new cjs.Rectangle(-295.4,-209.1,545.7,580.7), new cjs.Rectangle(-294.2,-208.4,543.6,580.6), new cjs.Rectangle(-293.9,-207.8,543.4,580.6), new cjs.Rectangle(-293.7,-207.2,543.3,580.6), new cjs.Rectangle(-292.4,-206.6,541.2,580.6), new cjs.Rectangle(-292.2,-205.9,541,580.5), new cjs.Rectangle(-291.9,-205.3,540.8,580.5), new cjs.Rectangle(-290.7,-204.7,538.7,580.5), new cjs.Rectangle(-290.4,-204.1,538.5,580.5), new cjs.Rectangle(-290.1,-203.5,538.3,580.5), new cjs.Rectangle(-289.8,-202.8,538.1,580.4), new cjs.Rectangle(-288.6,-202.2,536.1,580.4), new cjs.Rectangle(-288.4,-201.6,535.8,580.4), new cjs.Rectangle(-288.1,-201,535.7,580.4), new cjs.Rectangle(-286.9,-200.3,533.6,580.3), new cjs.Rectangle(-286.6,-199.7,533.4,580.3), new cjs.Rectangle(-286.4,-199.1,533.2,580.3), new cjs.Rectangle(-286.1,-198.5,533,580.3)];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_nath_mc();
	this.instance.setTransform(-64.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.hero1_earrings_main_mc();
	this.instance_1.setTransform(-5.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// animation
	this.instance_2 = new lib.hero1_fringe_main_mc();
	this.instance_2.setTransform(-6.6,-128.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// animation
	this.instance_3 = new lib.hero1_eyes2_mc();
	this.instance_3.setTransform(-7.6,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// animation
	this.instance_4 = new lib.hero1_eyebrows1_1_mc();
	this.instance_4.setTransform(-61.1,-88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// animation
	this.instance_5 = new lib.hero1_eyebrows1_2_mc();
	this.instance_5.setTransform(44.4,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// animation
	this.instance_6 = new lib.hero1_shadows_all_mc();
	this.instance_6.setTransform(-5.6,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// animation
	this.instance_7 = new lib.hero1_lips1_mc();
	this.instance_7.setTransform(-7.6,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// animation
	this.instance_8 = new lib.hero1_head4_mc();
	this.instance_8.setTransform(-7.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// animation
	this.instance_9 = new lib.hero1_head3_mc();
	this.instance_9.setTransform(-7.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// animation
	this.instance_10 = new lib.hero1_head2_mc();
	this.instance_10.setTransform(-7.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// animation
	this.instance_11 = new lib.hero1_necklace_main_mc();
	this.instance_11.setTransform(-4.6,91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// animation
	this.instance_12 = new lib.hero1_dress_mc();
	this.instance_12.setTransform(-8.6,224.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// animation
	this.instance_13 = new lib.hero1_body1_mc();
	this.instance_13.setTransform(-4.9,212.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// animation
	this.instance_14 = new lib.hero1_dress_back_mc();
	this.instance_14.setTransform(72.4,230.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// animation
	this.instance_15 = new lib.hero1_hair_main_mc();
	this.instance_15.setTransform(-6.6,-128.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// animation
	this.instance_16 = new lib.hero1_vail_back1_mc();
	this.instance_16.setTransform(-3.6,72.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-307.6,-220.6,608,586.5);
p.frameBounds = [rect];


(lib.hero_1_for_dressup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nath
	this.instance = new lib.hero1_nath_mc();
	this.instance.setTransform(-64.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-22.5},44).to({y:-6.5},45).wait(1));

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(-5.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1,skewX:3.7,x:-8.5,y:21.5},44).to({scaleY:1,skewX:0,x:-5.5,y:37.5},45).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-6.6,-128.6);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({y:-144.6},44).to({y:-128.6},45).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyes2_mc();
	this.instance_1.setTransform(-7.6,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-62.1},44).to({y:-46.1},45).wait(1));

	// body
	this.instance_2 = new lib.hero1_eyebrows1_1_mc();
	this.instance_2.setTransform(-61.1,-88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-102.1},44).to({y:-88.1},45).wait(1));

	// body
	this.instance_3 = new lib.hero1_eyebrows1_2_mc();
	this.instance_3.setTransform(44.4,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-111},44).to({y:-89},45).wait(1));

	// body
	this.instance_4 = new lib.hero1_shadows_all_mc();
	this.instance_4.setTransform(-5.6,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-68.5},44).to({y:-52.5},45).wait(1));

	// body
	this.instance_5 = new lib.hero1_lips1_mc();
	this.instance_5.setTransform(-7.6,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:15.5},44).to({y:31.5},45).wait(1));

	// body
	this.instance_6 = new lib.hero1_head4_mc();
	this.instance_6.setTransform(-7.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-80},44).to({y:-64},45).wait(1));

	// body
	this.instance_7 = new lib.hero1_head3_mc();
	this.instance_7.setTransform(-7.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-80},44).to({y:-64},45).wait(1));

	// body
	this.instance_8 = new lib.hero1_head2_mc();
	this.instance_8.setTransform(-7.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-80},44).to({y:-64},45).wait(1));

	// beads
	this.beads = new lib.hero1_necklace_all_mc();
	this.beads.setTransform(-4.6,91.4);

	this.timeline.addTween(cjs.Tween.get(this.beads).to({y:75.4},44).to({y:91.4},45).wait(1));

	// body
	this.instance_9 = new lib.hero1_dress_mc();
	this.instance_9.setTransform(-8.6,224.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:208.5},44).to({y:224.5},45).wait(1));

	// body
	this.instance_10 = new lib.hero1_body1_mc();
	this.instance_10.setTransform(-4.9,212.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:196.3},44).to({y:212.3},45).wait(1));

	// body
	this.instance_11 = new lib.hero1_dress_back_mc();
	this.instance_11.setTransform(72.4,230.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:213.3},44).to({y:230.3},45).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-6.6,-128.6);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({skewX:1.7,y:-144.6},44).to({skewX:0,y:-128.6},45).wait(1));

	// body
	this.instance_12 = new lib.hero1_vail_back1_mc();
	this.instance_12.setTransform(-3.6,72.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleY:1,skewX:3.5,x:-7.6,y:56.4},44).to({scaleY:1,skewX:0,x:-3.6,y:72.4},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-307.6,-225.1,608,591);
p.frameBounds = [rect, new cjs.Rectangle(-307.8,-225.5,608.2,590.9), new cjs.Rectangle(-308,-225.9,608.4,591), new cjs.Rectangle(-308.1,-226.2,608.6,590.9), new cjs.Rectangle(-309.3,-226.6,610.8,590.9), new cjs.Rectangle(-309.5,-226.9,611,590.8), new cjs.Rectangle(-309.7,-227.3,611.2,590.9), new cjs.Rectangle(-310.9,-227.7,613.3,590.8), new cjs.Rectangle(-311.1,-228,613.5,590.8), new cjs.Rectangle(-311.2,-228.4,613.7,590.7), new cjs.Rectangle(-312.4,-228.8,615.8,590.8), new cjs.Rectangle(-312.6,-229.1,616,590.7), new cjs.Rectangle(-312.8,-229.5,616.2,590.7), new cjs.Rectangle(-313.9,-229.9,618.3,590.7), new cjs.Rectangle(-314.1,-230.2,618.5,590.7), new cjs.Rectangle(-314.3,-230.6,618.7,590.6), new cjs.Rectangle(-315.4,-230.9,620.8,590.6), new cjs.Rectangle(-315.7,-231.3,621.1,590.6), new cjs.Rectangle(-315.9,-231.7,621.3,590.6), new cjs.Rectangle(-317,-232,623.4,590.5), new cjs.Rectangle(-317.2,-232.4,623.6,590.5), new cjs.Rectangle(-317.4,-232.8,623.8,590.5), new cjs.Rectangle(-318.6,-233.1,625.9,590.5), new cjs.Rectangle(-318.8,-233.5,626.1,590.4), new cjs.Rectangle(-319,-233.9,626.3,590.5), new cjs.Rectangle(-320,-234.2,628.4,590.4), new cjs.Rectangle(-320.2,-234.6,628.6,590.4), new cjs.Rectangle(-320.4,-234.9,628.8,590.3), new cjs.Rectangle(-320.6,-235.3,629,590.4), new cjs.Rectangle(-321.8,-235.7,631.2,590.3), new cjs.Rectangle(-322,-236,631.4,590.3), new cjs.Rectangle(-322.2,-236.4,631.6,590.2), new cjs.Rectangle(-323.3,-236.8,633.7,590.3), new cjs.Rectangle(-323.6,-237.1,633.9,590.2), new cjs.Rectangle(-323.8,-237.5,634.1,590.2), new cjs.Rectangle(-324.9,-237.9,636.2,590.2), new cjs.Rectangle(-325.1,-238.2,636.4,590.2), new cjs.Rectangle(-325.2,-238.6,636.6,590.1), new cjs.Rectangle(-326.4,-238.9,638.8,590.1), new cjs.Rectangle(-326.6,-239.3,639,590.1), new cjs.Rectangle(-326.8,-239.7,639.2,590.1), new cjs.Rectangle(-328,-240,641.3,590), new cjs.Rectangle(-328.1,-240.4,641.5,590), new cjs.Rectangle(-328.3,-240.8,641.7,590), new cjs.Rectangle(-329.6,-241.1,644,590), new cjs.Rectangle(-328.4,-240.8,641.7,590), new cjs.Rectangle(-328.2,-240.4,641.5,590), new cjs.Rectangle(-328,-240.1,641.3,590.1), new cjs.Rectangle(-326.8,-239.7,639.2,590.1), new cjs.Rectangle(-326.6,-239.3,639,590.1), new cjs.Rectangle(-326.4,-239,638.8,590.1), new cjs.Rectangle(-325.3,-238.6,636.7,590.1), new cjs.Rectangle(-325.1,-238.3,636.5,590.1), new cjs.Rectangle(-324.9,-237.9,636.3,590.2), new cjs.Rectangle(-323.7,-237.6,634.2,590.2), new cjs.Rectangle(-323.5,-237.2,634,590.2), new cjs.Rectangle(-323.4,-236.9,633.8,590.3), new cjs.Rectangle(-323.2,-236.5,633.6,590.3), new cjs.Rectangle(-322,-236.1,631.4,590.3), new cjs.Rectangle(-321.8,-235.8,631.2,590.3), new cjs.Rectangle(-321.7,-235.4,631.1,590.3), new cjs.Rectangle(-320.5,-235.1,628.9,590.3), new cjs.Rectangle(-320.3,-234.7,628.7,590.4), new cjs.Rectangle(-320.1,-234.4,628.5,590.4), new cjs.Rectangle(-319,-234,626.4,590.4), new cjs.Rectangle(-318.8,-233.7,626.2,590.5), new cjs.Rectangle(-318.7,-233.3,626,590.5), new cjs.Rectangle(-317.5,-232.9,623.9,590.5), new cjs.Rectangle(-317.2,-232.6,623.7,590.5), new cjs.Rectangle(-317.2,-232.2,623.5,590.5), new cjs.Rectangle(-316,-231.9,621.4,590.5), new cjs.Rectangle(-315.7,-231.5,621.2,590.6), new cjs.Rectangle(-315.6,-231.2,621,590.6), new cjs.Rectangle(-315.4,-230.8,620.8,590.6), new cjs.Rectangle(-314.3,-230.5,618.7,590.7), new cjs.Rectangle(-314,-230.1,618.5,590.7), new cjs.Rectangle(-313.9,-229.7,618.3,590.7), new cjs.Rectangle(-312.7,-229.4,616.2,590.7), new cjs.Rectangle(-312.5,-229,616,590.7), new cjs.Rectangle(-312.4,-228.7,615.8,590.7), new cjs.Rectangle(-311.2,-228.3,613.7,590.8), new cjs.Rectangle(-311,-228,613.5,590.8), new cjs.Rectangle(-310.8,-227.6,613.3,590.8), new cjs.Rectangle(-309.6,-227.3,611.1,590.9), new cjs.Rectangle(-309.5,-226.9,610.9,590.8), new cjs.Rectangle(-309.2,-226.5,610.7,590.9), new cjs.Rectangle(-308.1,-226.2,608.6,590.8), new cjs.Rectangle(-308,-225.8,608.4,590.9), new cjs.Rectangle(-307.7,-225.5,608.2,590.9), new cjs.Rectangle(-307.6,-225.1,608,591)];


(lib.h2_b_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress0_mc();
	this.instance.setTransform(-3.2,91.5);

	this.instance_1 = new lib.hero2_body1_mc();
	this.instance_1.setTransform(7.2,84.5);

	this.instance_2 = new lib.hero2_hair0_mc();
	this.instance_2.setTransform(0,-78.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.5,-251.9,301,504);
p.frameBounds = [rect];


(lib.h2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyelashes1_1_mc();
	this.instance.setTransform(58.7,-149.6);

	this.instance_1 = new lib.hero2_eyelashes1_1_mc();
	this.instance_1.setTransform(-58.2,-149.6,1,1,0,0,180);

	this.instance_2 = new lib.hero2_fringe0_mc();
	this.instance_2.setTransform(-0.9,-196.9);

	this.instance_3 = new lib.hero2_eyes0_mc();
	this.instance_3.setTransform(-0.4,-132.9);

	this.instance_4 = new lib.hero2_eyebrows0_1_mc();
	this.instance_4.setTransform(56.6,-173.5);

	this.instance_5 = new lib.hero2_eyebrows0_2_mc();
	this.instance_5.setTransform(-51.9,-181.5);

	this.instance_6 = new lib.hero2_shadows4_mc();
	this.instance_6.setTransform(43.7,-154.5);

	this.instance_7 = new lib.hero2_shadows4_mc();
	this.instance_7.setTransform(-43.2,-153.7,1,1,0,0,180);

	this.instance_8 = new lib.hero2_shadows3_mc();
	this.instance_8.setTransform(-62.9,-138.6,1,1,0,0,180);

	this.instance_9 = new lib.hero2_shadows3_mc();
	this.instance_9.setTransform(67.1,-138.6);

	this.instance_10 = new lib.hero2_shadows2_mc();
	this.instance_10.setTransform(-42.2,-133.1,1,1,0,0,180);

	this.instance_11 = new lib.hero2_shadows2_mc();
	this.instance_11.setTransform(45.8,-133.4);

	this.instance_12 = new lib.hero2_shadows1_mc();
	this.instance_12.setTransform(57.6,-154.2);

	this.instance_13 = new lib.hero2_shadows1_mc();
	this.instance_13.setTransform(-57.7,-154.2,1,1,0,0,180);

	this.instance_14 = new lib.hero2_lips1_mc();
	this.instance_14.setTransform(2.7,-64);

	this.instance_15 = new lib.hero2_lips0_mc();
	this.instance_15.setTransform(2.7,-64);

	this.instance_16 = new lib.hero2_head3_mc();
	this.instance_16.setTransform(-1.3,-152.9);

	this.instance_17 = new lib.hero2_head2_mc();
	this.instance_17.setTransform(-1.3,-152.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_18 = new lib.hero2_dress0_mc();
	this.instance_18.setTransform(-3.2,129.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// Слой 5
	this.instance_19 = new lib.hero2_body2_img();
	this.instance_19.setTransform(-76.8,-45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// Слой 6
	this.instance_20 = new lib.hero2_hands2_1_img();
	this.instance_20.setTransform(62.5,-15.8,1,1,78.3);

	this.instance_21 = new lib.hero2_hands2_1_img();
	this.instance_21.setTransform(-46.9,-15.8,1,1,0,-78.3,101.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20}]}).wait(1));

	// Слой 3
	this.instance_22 = new lib.hero2_hair0_mc();
	this.instance_22.setTransform(0,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.5,-289.9,301,579.8);
p.frameBounds = [rect];


(lib.h1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyelashes1_1_mc();
	this.instance.setTransform(55.5,-126.3);

	this.instance_1 = new lib.hero1_eyelashes1_1_mc();
	this.instance_1.setTransform(-61.5,-126.3,1,1,0,0,180);

	this.instance_2 = new lib.hero1_eyes0_mc();
	this.instance_2.setTransform(-3,-116.6);

	this.instance_3 = new lib.hero1_shadows1_2_mc();
	this.instance_3.setTransform(-44.5,-123.8,1,1,0,0,180);

	this.instance_4 = new lib.hero1_shadows1_2_mc();
	this.instance_4.setTransform(38.7,-123.8);

	this.instance_5 = new lib.hero1_shadows0_1_mc();
	this.instance_5.setTransform(-69,-124.1,1,1,0,0,180);

	this.instance_6 = new lib.hero1_shadows0_1_mc();
	this.instance_6.setTransform(66,-124.1);

	this.instance_7 = new lib.hero1_fringe0_mc();
	this.instance_7.setTransform(-2,-199.1);

	this.instance_8 = new lib.hero1_eyebrows0_1_mc();
	this.instance_8.setTransform(-56.5,-158.6);

	this.instance_9 = new lib.hero1_eyebrows0_2_mc();
	this.instance_9.setTransform(49,-159.4);

	this.instance_10 = new lib.hero1_lips1_mc();
	this.instance_10.setTransform(-3,-38.9);

	this.instance_11 = new lib.hero1_head4_mc();
	this.instance_11.setTransform(-2.8,-134.4);

	this.instance_12 = new lib.hero1_head3_mc();
	this.instance_12.setTransform(-2.8,-134.4);

	this.instance_13 = new lib.hero1_head2_mc();
	this.instance_13.setTransform(-2.8,-134.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 3
	this.instance_14 = new lib.hero1_dress0_img();
	this.instance_14.setTransform(-96.6,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 4
	this.instance_15 = new lib.hero1_body2_img();
	this.instance_15.setTransform(-76.3,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 6
	this.instance_16 = new lib.hero1_hands2_2_img();
	this.instance_16.setTransform(-79,22);

	this.instance_17 = new lib.hero1_hands2_1_img();
	this.instance_17.setTransform(41.5,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(1));

	// Слой 2
	this.instance_18 = new lib.hero1_hair0_mc();
	this.instance_18.setTransform(0,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-295.6,360,591.3);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.475,0.475,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-19,38,38);
p.frameBounds = [rect];


(lib.current_maneken_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_maneken_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_hairstyle_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
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


(lib.boy_main_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.boy2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-3},39).to({y:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.5,-319.5,289,639);
p.frameBounds = [rect, rect=new cjs.Rectangle(-144.5,-319.6,289,639), rect, new cjs.Rectangle(-144.5,-319.7,289,639), new cjs.Rectangle(-144.5,-319.8,289,639), rect=new cjs.Rectangle(-144.5,-319.9,289,639), rect, new cjs.Rectangle(-144.5,-320,289,639), new cjs.Rectangle(-144.5,-320.1,289,639), rect=new cjs.Rectangle(-144.5,-320.2,289,639), rect, new cjs.Rectangle(-144.5,-320.3,289,639), new cjs.Rectangle(-144.5,-320.4,289,639), new cjs.Rectangle(-144.5,-320.5,289,639), rect=new cjs.Rectangle(-144.5,-320.6,289,639), rect, new cjs.Rectangle(-144.5,-320.7,289,639), new cjs.Rectangle(-144.5,-320.8,289,639), rect=new cjs.Rectangle(-144.5,-320.9,289,639), rect, new cjs.Rectangle(-144.5,-321,289,639), new cjs.Rectangle(-144.5,-321.1,289,639), rect=new cjs.Rectangle(-144.5,-321.2,289,639), rect, new cjs.Rectangle(-144.5,-321.3,289,639), new cjs.Rectangle(-144.5,-321.4,289,639), new cjs.Rectangle(-144.5,-321.5,289,639), rect=new cjs.Rectangle(-144.5,-321.6,289,639), rect, new cjs.Rectangle(-144.5,-321.7,289,639), new cjs.Rectangle(-144.5,-321.8,289,639), rect=new cjs.Rectangle(-144.5,-321.9,289,639), rect, new cjs.Rectangle(-144.5,-322,289,639), new cjs.Rectangle(-144.5,-322.1,289,639), rect=new cjs.Rectangle(-144.5,-322.2,289,639), rect, new cjs.Rectangle(-144.5,-322.3,289,639), new cjs.Rectangle(-144.5,-322.4,289,639), new cjs.Rectangle(-144.5,-322.5,289,639), new cjs.Rectangle(-144.5,-322.4,289,639), new cjs.Rectangle(-144.5,-322.3,289,639), rect=new cjs.Rectangle(-144.5,-322.2,289,639), rect, new cjs.Rectangle(-144.5,-322.1,289,639), new cjs.Rectangle(-144.5,-322,289,639), rect=new cjs.Rectangle(-144.5,-321.9,289,639), rect, new cjs.Rectangle(-144.5,-321.8,289,639), new cjs.Rectangle(-144.5,-321.7,289,639), rect=new cjs.Rectangle(-144.5,-321.6,289,639), rect, new cjs.Rectangle(-144.5,-321.5,289,639), new cjs.Rectangle(-144.5,-321.4,289,639), rect=new cjs.Rectangle(-144.5,-321.3,289,639), rect, new cjs.Rectangle(-144.5,-321.2,289,639), new cjs.Rectangle(-144.5,-321.1,289,639), rect=new cjs.Rectangle(-144.5,-321,289,639), rect, new cjs.Rectangle(-144.5,-320.9,289,639), new cjs.Rectangle(-144.5,-320.8,289,639), rect=new cjs.Rectangle(-144.5,-320.7,289,639), rect, new cjs.Rectangle(-144.5,-320.6,289,639), new cjs.Rectangle(-144.5,-320.5,289,639), rect=new cjs.Rectangle(-144.5,-320.4,289,639), rect, new cjs.Rectangle(-144.5,-320.3,289,639), new cjs.Rectangle(-144.5,-320.2,289,639), rect=new cjs.Rectangle(-144.5,-320.1,289,639), rect, new cjs.Rectangle(-144.5,-320,289,639), new cjs.Rectangle(-144.5,-319.9,289,639), rect=new cjs.Rectangle(-144.5,-319.8,289,639), rect, new cjs.Rectangle(-144.5,-319.7,289,639), new cjs.Rectangle(-144.5,-319.6,289,639), rect=new cjs.Rectangle(-144.5,-319.5,289,639), rect];


(lib.boy_main_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.boy1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-3},39).to({y:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-164.5,-340.8,329.2,681.7);
p.frameBounds = [rect, new cjs.Rectangle(-164.5,-340.9,329.2,681.7), new cjs.Rectangle(-164.5,-341,329.2,681.7), rect=new cjs.Rectangle(-164.5,-341.1,329.2,681.7), rect, new cjs.Rectangle(-164.5,-341.2,329.2,681.7), new cjs.Rectangle(-164.5,-341.3,329.2,681.7), rect=new cjs.Rectangle(-164.5,-341.4,329.2,681.7), rect, new cjs.Rectangle(-164.5,-341.5,329.2,681.7), new cjs.Rectangle(-164.5,-341.6,329.2,681.7), rect=new cjs.Rectangle(-164.5,-341.7,329.2,681.7), rect, new cjs.Rectangle(-164.5,-341.8,329.2,681.7), new cjs.Rectangle(-164.5,-341.9,329.2,681.7), new cjs.Rectangle(-164.5,-342,329.2,681.7), rect=new cjs.Rectangle(-164.5,-342.1,329.2,681.7), rect, new cjs.Rectangle(-164.5,-342.2,329.2,681.7), new cjs.Rectangle(-164.5,-342.3,329.2,681.7), rect=new cjs.Rectangle(-164.5,-342.4,329.2,681.7), rect, new cjs.Rectangle(-164.5,-342.5,329.2,681.7), new cjs.Rectangle(-164.5,-342.6,329.2,681.7), rect=new cjs.Rectangle(-164.5,-342.7,329.2,681.7), rect, new cjs.Rectangle(-164.5,-342.8,329.2,681.7), new cjs.Rectangle(-164.5,-342.9,329.2,681.7), new cjs.Rectangle(-164.5,-343,329.2,681.7), rect=new cjs.Rectangle(-164.5,-343.1,329.2,681.7), rect, new cjs.Rectangle(-164.5,-343.2,329.2,681.7), new cjs.Rectangle(-164.5,-343.3,329.2,681.7), rect=new cjs.Rectangle(-164.5,-343.4,329.2,681.7), rect, new cjs.Rectangle(-164.5,-343.5,329.2,681.7), new cjs.Rectangle(-164.5,-343.6,329.2,681.7), rect=new cjs.Rectangle(-164.5,-343.7,329.2,681.7), rect, new cjs.Rectangle(-164.5,-343.8,329.2,681.7), rect=new cjs.Rectangle(-164.5,-343.7,329.2,681.7), rect, new cjs.Rectangle(-164.5,-343.6,329.2,681.7), new cjs.Rectangle(-164.5,-343.5,329.2,681.7), rect=new cjs.Rectangle(-164.5,-343.4,329.2,681.7), rect, new cjs.Rectangle(-164.5,-343.3,329.2,681.7), new cjs.Rectangle(-164.5,-343.2,329.2,681.7), rect=new cjs.Rectangle(-164.5,-343.1,329.2,681.7), rect, new cjs.Rectangle(-164.5,-343,329.2,681.7), new cjs.Rectangle(-164.5,-342.9,329.2,681.7), rect=new cjs.Rectangle(-164.5,-342.8,329.2,681.7), rect, new cjs.Rectangle(-164.5,-342.7,329.2,681.7), new cjs.Rectangle(-164.5,-342.6,329.2,681.7), rect=new cjs.Rectangle(-164.5,-342.5,329.2,681.7), rect, new cjs.Rectangle(-164.5,-342.4,329.2,681.7), new cjs.Rectangle(-164.5,-342.3,329.2,681.7), rect=new cjs.Rectangle(-164.5,-342.2,329.2,681.7), rect, new cjs.Rectangle(-164.5,-342.1,329.2,681.7), new cjs.Rectangle(-164.5,-342,329.2,681.7), rect=new cjs.Rectangle(-164.5,-341.9,329.2,681.7), rect, new cjs.Rectangle(-164.5,-341.8,329.2,681.7), new cjs.Rectangle(-164.5,-341.7,329.2,681.7), rect=new cjs.Rectangle(-164.5,-341.6,329.2,681.7), rect, new cjs.Rectangle(-164.5,-341.5,329.2,681.7), new cjs.Rectangle(-164.5,-341.4,329.2,681.7), rect=new cjs.Rectangle(-164.5,-341.3,329.2,681.7), rect, new cjs.Rectangle(-164.5,-341.2,329.2,681.7), new cjs.Rectangle(-164.5,-341.1,329.2,681.7), rect=new cjs.Rectangle(-164.5,-341,329.2,681.7), rect, new cjs.Rectangle(-164.5,-340.9,329.2,681.7), new cjs.Rectangle(-164.5,-340.8,329.2,681.7)];


(lib.boy_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.boy2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-8},39).to({y:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.5,-319.5,289,639);
p.frameBounds = [rect, new cjs.Rectangle(-144.5,-319.7,289,639), new cjs.Rectangle(-144.5,-319.9,289,639), new cjs.Rectangle(-144.5,-320.1,289,639), new cjs.Rectangle(-144.5,-320.3,289,639), new cjs.Rectangle(-144.5,-320.5,289,639), new cjs.Rectangle(-144.5,-320.7,289,639), new cjs.Rectangle(-144.5,-320.9,289,639), new cjs.Rectangle(-144.5,-321.1,289,639), new cjs.Rectangle(-144.5,-321.3,289,639), new cjs.Rectangle(-144.5,-321.5,289,639), new cjs.Rectangle(-144.5,-321.7,289,639), new cjs.Rectangle(-144.5,-321.9,289,639), new cjs.Rectangle(-144.5,-322.1,289,639), new cjs.Rectangle(-144.5,-322.3,289,639), new cjs.Rectangle(-144.5,-322.6,289,639), new cjs.Rectangle(-144.5,-322.8,289,639), new cjs.Rectangle(-144.5,-323,289,639), new cjs.Rectangle(-144.5,-323.2,289,639), new cjs.Rectangle(-144.5,-323.4,289,639), new cjs.Rectangle(-144.5,-323.6,289,639), new cjs.Rectangle(-144.5,-323.8,289,639), new cjs.Rectangle(-144.5,-324,289,639), new cjs.Rectangle(-144.5,-324.2,289,639), new cjs.Rectangle(-144.5,-324.4,289,639), new cjs.Rectangle(-144.5,-324.6,289,639), new cjs.Rectangle(-144.5,-324.8,289,639), new cjs.Rectangle(-144.5,-325,289,639), new cjs.Rectangle(-144.5,-325.2,289,639), new cjs.Rectangle(-144.5,-325.4,289,639), new cjs.Rectangle(-144.5,-325.6,289,639), new cjs.Rectangle(-144.5,-325.8,289,639), new cjs.Rectangle(-144.5,-326,289,639), new cjs.Rectangle(-144.5,-326.2,289,639), new cjs.Rectangle(-144.5,-326.4,289,639), new cjs.Rectangle(-144.5,-326.7,289,639), new cjs.Rectangle(-144.5,-326.9,289,639), new cjs.Rectangle(-144.5,-327.1,289,639), new cjs.Rectangle(-144.5,-327.3,289,639), new cjs.Rectangle(-144.5,-327.5,289,639), new cjs.Rectangle(-144.5,-327.3,289,639), new cjs.Rectangle(-144.5,-327.1,289,639), new cjs.Rectangle(-144.5,-326.9,289,639), new cjs.Rectangle(-144.5,-326.7,289,639), new cjs.Rectangle(-144.5,-326.5,289,639), new cjs.Rectangle(-144.5,-326.3,289,639), new cjs.Rectangle(-144.5,-326.1,289,639), new cjs.Rectangle(-144.5,-325.9,289,639), new cjs.Rectangle(-144.5,-325.7,289,639), new cjs.Rectangle(-144.5,-325.5,289,639), new cjs.Rectangle(-144.5,-325.3,289,639), new cjs.Rectangle(-144.5,-325.1,289,639), new cjs.Rectangle(-144.5,-324.9,289,639), new cjs.Rectangle(-144.5,-324.7,289,639), new cjs.Rectangle(-144.5,-324.5,289,639), new cjs.Rectangle(-144.5,-324.3,289,639), new cjs.Rectangle(-144.5,-324.1,289,639), new cjs.Rectangle(-144.5,-323.9,289,639), new cjs.Rectangle(-144.5,-323.7,289,639), new cjs.Rectangle(-144.5,-323.5,289,639), new cjs.Rectangle(-144.5,-323.3,289,639), new cjs.Rectangle(-144.5,-323.1,289,639), new cjs.Rectangle(-144.5,-322.9,289,639), new cjs.Rectangle(-144.5,-322.7,289,639), new cjs.Rectangle(-144.5,-322.5,289,639), new cjs.Rectangle(-144.5,-322.3,289,639), new cjs.Rectangle(-144.5,-322.1,289,639), new cjs.Rectangle(-144.5,-321.9,289,639), new cjs.Rectangle(-144.5,-321.7,289,639), new cjs.Rectangle(-144.5,-321.5,289,639), new cjs.Rectangle(-144.5,-321.3,289,639), new cjs.Rectangle(-144.5,-321.1,289,639), new cjs.Rectangle(-144.5,-320.9,289,639), new cjs.Rectangle(-144.5,-320.7,289,639), new cjs.Rectangle(-144.5,-320.5,289,639), new cjs.Rectangle(-144.5,-320.3,289,639), new cjs.Rectangle(-144.5,-320.1,289,639), new cjs.Rectangle(-144.5,-319.9,289,639), new cjs.Rectangle(-144.5,-319.7,289,639), new cjs.Rectangle(-144.5,-319.5,289,639)];


(lib.boy_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.boy1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-8},39).to({y:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-164.5,-340.8,329.2,681.7);
p.frameBounds = [rect, new cjs.Rectangle(-164.5,-341,329.2,681.7), new cjs.Rectangle(-164.5,-341.2,329.2,681.7), new cjs.Rectangle(-164.5,-341.4,329.2,681.7), new cjs.Rectangle(-164.5,-341.6,329.2,681.7), new cjs.Rectangle(-164.5,-341.9,329.2,681.7), new cjs.Rectangle(-164.5,-342.1,329.2,681.7), new cjs.Rectangle(-164.5,-342.3,329.2,681.7), new cjs.Rectangle(-164.5,-342.5,329.2,681.7), new cjs.Rectangle(-164.5,-342.7,329.2,681.7), new cjs.Rectangle(-164.5,-342.9,329.2,681.7), new cjs.Rectangle(-164.5,-343.1,329.2,681.7), new cjs.Rectangle(-164.5,-343.3,329.2,681.7), new cjs.Rectangle(-164.5,-343.5,329.2,681.7), new cjs.Rectangle(-164.5,-343.7,329.2,681.7), new cjs.Rectangle(-164.5,-343.9,329.2,681.7), new cjs.Rectangle(-164.5,-344.1,329.2,681.7), new cjs.Rectangle(-164.5,-344.3,329.2,681.7), new cjs.Rectangle(-164.5,-344.5,329.2,681.7), new cjs.Rectangle(-164.5,-344.7,329.2,681.7), new cjs.Rectangle(-164.5,-344.9,329.2,681.7), new cjs.Rectangle(-164.5,-345.1,329.2,681.7), new cjs.Rectangle(-164.5,-345.3,329.2,681.7), new cjs.Rectangle(-164.5,-345.5,329.2,681.7), new cjs.Rectangle(-164.5,-345.7,329.2,681.7), new cjs.Rectangle(-164.5,-346,329.2,681.7), new cjs.Rectangle(-164.5,-346.2,329.2,681.7), new cjs.Rectangle(-164.5,-346.4,329.2,681.7), new cjs.Rectangle(-164.5,-346.6,329.2,681.7), new cjs.Rectangle(-164.5,-346.8,329.2,681.7), new cjs.Rectangle(-164.5,-347,329.2,681.7), new cjs.Rectangle(-164.5,-347.2,329.2,681.7), new cjs.Rectangle(-164.5,-347.4,329.2,681.7), new cjs.Rectangle(-164.5,-347.6,329.2,681.7), new cjs.Rectangle(-164.5,-347.8,329.2,681.7), new cjs.Rectangle(-164.5,-348,329.2,681.7), new cjs.Rectangle(-164.5,-348.2,329.2,681.7), new cjs.Rectangle(-164.5,-348.4,329.2,681.7), new cjs.Rectangle(-164.5,-348.6,329.2,681.7), new cjs.Rectangle(-164.5,-348.8,329.2,681.7), new cjs.Rectangle(-164.5,-348.6,329.2,681.7), new cjs.Rectangle(-164.5,-348.4,329.2,681.7), new cjs.Rectangle(-164.5,-348.2,329.2,681.7), new cjs.Rectangle(-164.5,-348,329.2,681.7), new cjs.Rectangle(-164.5,-347.8,329.2,681.7), new cjs.Rectangle(-164.5,-347.6,329.2,681.7), new cjs.Rectangle(-164.5,-347.4,329.2,681.7), new cjs.Rectangle(-164.5,-347.2,329.2,681.7), new cjs.Rectangle(-164.5,-347,329.2,681.7), new cjs.Rectangle(-164.5,-346.8,329.2,681.7), new cjs.Rectangle(-164.5,-346.6,329.2,681.7), new cjs.Rectangle(-164.5,-346.4,329.2,681.7), new cjs.Rectangle(-164.5,-346.2,329.2,681.7), new cjs.Rectangle(-164.5,-346,329.2,681.7), new cjs.Rectangle(-164.5,-345.8,329.2,681.7), new cjs.Rectangle(-164.5,-345.6,329.2,681.7), new cjs.Rectangle(-164.5,-345.4,329.2,681.7), new cjs.Rectangle(-164.5,-345.2,329.2,681.7), new cjs.Rectangle(-164.5,-345,329.2,681.7), new cjs.Rectangle(-164.5,-344.8,329.2,681.7), new cjs.Rectangle(-164.5,-344.6,329.2,681.7), new cjs.Rectangle(-164.5,-344.4,329.2,681.7), new cjs.Rectangle(-164.5,-344.2,329.2,681.7), new cjs.Rectangle(-164.5,-344,329.2,681.7), new cjs.Rectangle(-164.5,-343.8,329.2,681.7), new cjs.Rectangle(-164.5,-343.6,329.2,681.7), new cjs.Rectangle(-164.5,-343.4,329.2,681.7), new cjs.Rectangle(-164.5,-343.2,329.2,681.7), new cjs.Rectangle(-164.5,-343,329.2,681.7), new cjs.Rectangle(-164.5,-342.8,329.2,681.7), new cjs.Rectangle(-164.5,-342.6,329.2,681.7), new cjs.Rectangle(-164.5,-342.4,329.2,681.7), new cjs.Rectangle(-164.5,-342.2,329.2,681.7), new cjs.Rectangle(-164.5,-342,329.2,681.7), new cjs.Rectangle(-164.5,-341.8,329.2,681.7), new cjs.Rectangle(-164.5,-341.6,329.2,681.7), new cjs.Rectangle(-164.5,-341.4,329.2,681.7), new cjs.Rectangle(-164.5,-341.2,329.2,681.7), new cjs.Rectangle(-164.5,-341,329.2,681.7), new cjs.Rectangle(-164.5,-340.8,329.2,681.7)];


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


(lib.bm1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress0_img();
	this.instance.setTransform(-96.6,-36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_body1_mc();
	this.instance_1.setTransform(-0.3,89.6);

	this.instance_2 = new lib.hero1_hair0_mc();
	this.instance_2.setTransform(0,-26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-243,360,486.4);
p.frameBounds = [rect];


(lib.beads_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.475,0.475,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-19,38,38);
p.frameBounds = [rect];


(lib.arrow_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.arrow_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.arrow_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.arrow_9_mc = function(mode,startPosition,loop) {
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


(lib.animation2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.ton_mc();
	this.instance.setTransform(-321.9,196.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-27.7,x:49,y:-79.9},14).wait(1));

	// animation
	this.instance_1 = new lib.lipstik2_mc();
	this.instance_1.setTransform(329,191);

	this.instance_2 = new lib.podvodka4_mc();
	this.instance_2.setTransform(241.6,197.4,0.51,0.51);

	this.instance_3 = new lib.podvodka3_mc();
	this.instance_3.setTransform(271.5,206.3,0.51,0.51);

	this.instance_4 = new lib.rouge1_1_mc();
	this.instance_4.setTransform(-203.5,222.8,0.765,0.765);

	this.instance_5 = new lib.shadows2_1_mc();
	this.instance_5.setTransform(100.8,227.8,0.765,0.765);

	this.instance_6 = new lib.pincet_mc();
	this.instance_6.setTransform(-77.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(15));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.hero2_fringe0_mc();
	this.instance_8.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.volos2_mc();
	this.instance_9.setTransform(64.4,-93.7,0.68,0.68,0,7.5,-172.5);

	this.instance_10 = new lib.volos2_mc();
	this.instance_10.setTransform(71.2,-94.2,0.68,0.68,0,7.5,-172.5);

	this.instance_11 = new lib.volos2_mc();
	this.instance_11.setTransform(76,-91.6,0.68,0.68,0,34.8,-145.2);

	this.instance_12 = new lib.volos2_mc();
	this.instance_12.setTransform(80,-88.6,0.68,0.68,0,45.7,-134.3);

	this.instance_13 = new lib.volos2_mc();
	this.instance_13.setTransform(37.8,-89.2,0.68,0.68,0,-24.8,155.2);

	this.instance_14 = new lib.volos2_mc();
	this.instance_14.setTransform(29.6,-88,0.68,0.68,0,-24.8,155.2);

	this.instance_15 = new lib.volos2_mc();
	this.instance_15.setTransform(56.5,-92.4,0.68,0.68,0,-8.3,171.7);

	this.instance_16 = new lib.volos2_mc();
	this.instance_16.setTransform(48.2,-92.9,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos2_mc();
	this.instance_17.setTransform(41.9,-92,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos2_mc();
	this.instance_18.setTransform(32.8,-88.9,0.68,0.68,0,-8.3,171.7);

	this.instance_19 = new lib.volos2_mc();
	this.instance_19.setTransform(-64.1,-96.7,0.68,0.68,-7.5);

	this.instance_20 = new lib.volos2_mc();
	this.instance_20.setTransform(-68.6,-94.2,0.68,0.68,-7.5);

	this.instance_21 = new lib.volos2_mc();
	this.instance_21.setTransform(-72.4,-93.8,0.68,0.68,-34.8);

	this.instance_22 = new lib.volos2_mc();
	this.instance_22.setTransform(-76.4,-90.9,0.68,0.68,-45.7);

	this.instance_23 = new lib.volos2_mc();
	this.instance_23.setTransform(-35.2,-89.2,0.68,0.68,24.8);

	this.instance_24 = new lib.volos2_mc();
	this.instance_24.setTransform(-26.8,-87.2,0.68,0.68,24.8);

	this.instance_25 = new lib.volos2_mc();
	this.instance_25.setTransform(-53.9,-92.4,0.68,0.68,8.3);

	this.instance_26 = new lib.volos2_mc();
	this.instance_26.setTransform(-45.6,-92.9,0.68,0.68,8.3);

	this.instance_27 = new lib.volos2_mc();
	this.instance_27.setTransform(-39.3,-92,0.68,0.68,8.3);

	this.instance_28 = new lib.volos2_mc();
	this.instance_28.setTransform(-30.2,-88.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(15));

	// animation
	this.instance_29 = new lib.hero2_eyes0_mc();
	this.instance_29.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(15));

	// animation
	this.instance_30 = new lib.hero2_lips0_mc();
	this.instance_30.setTransform(4,21.6);

	this.instance_31 = new lib.hero2_eyebrows0_1_mc();
	this.instance_31.setTransform(57.8,-87.9);

	this.instance_32 = new lib.hero2_eyebrows0_2_mc();
	this.instance_32.setTransform(-50.6,-95.9);

	this.instance_33 = new lib.hero2_head1_mc();
	this.instance_33.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30}]}).wait(15));

	// animation
	this.instance_34 = new lib.h2_b_mc();
	this.instance_34.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_38_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstik2_mc();
	this.instance.setTransform(54.1,99.2,1,1,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:48.8,y:83.9},4).to({x:33.3,y:81.4},6).to({x:21.8,y:80.9},4).to({x:1.6,y:85.1},6).to({x:27.3,y:94.9},8).to({x:53.1,y:85.6},8).to({x:240.1,y:280.6,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.hero2_eyelashes1_1_mc();
	this.instance_1.setTransform(60,-64);

	this.instance_2 = new lib.hero2_eyelashes1_1_mc();
	this.instance_2.setTransform(-57,-64,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(51));

	// animation
	this.instance_3 = new lib.hero2_fringe0_mc();
	this.instance_3.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51));

	// animation
	this.instance_4 = new lib.hero2_eyes0_mc();
	this.instance_4.setTransform(0.9,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51));

	// animation
	this.instance_5 = new lib.hero2_eyebrows0_1_mc();
	this.instance_5.setTransform(57.8,-87.9);

	this.instance_6 = new lib.hero2_eyebrows0_2_mc();
	this.instance_6.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(51));

	// animation
	this.instance_7 = new lib.hero2_shadows4_mc();
	this.instance_7.setTransform(45,-68.9);

	this.instance_8 = new lib.hero2_shadows4_mc();
	this.instance_8.setTransform(-42,-68.1,1,1,0,0,180);

	this.instance_9 = new lib.hero2_shadows3_mc();
	this.instance_9.setTransform(-61.6,-53,1,1,0,0,180);

	this.instance_10 = new lib.hero2_shadows3_mc();
	this.instance_10.setTransform(68.4,-53);

	this.instance_11 = new lib.hero2_shadows2_mc();
	this.instance_11.setTransform(-41,-47.5,1,1,0,0,180);

	this.instance_12 = new lib.hero2_shadows2_mc();
	this.instance_12.setTransform(47,-47.8);

	this.instance_13 = new lib.hero2_shadows1_mc();
	this.instance_13.setTransform(58.8,-68.6);

	this.instance_14 = new lib.hero2_shadows1_mc();
	this.instance_14.setTransform(-56.5,-68.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(51));

	// animation
	this.instance_15 = new lib.hero2_lips1_mc();
	this.instance_15.setTransform(4,21.6);
	this.instance_15.alpha = 0.012;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({alpha:1},32).wait(15));

	// animation
	this.instance_16 = new lib.hero2_lips0_mc();
	this.instance_16.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(51));

	// animation
	this.instance_17 = new lib.hero2_head3_mc();
	this.instance_17.setTransform(0,-67.3);

	this.instance_18 = new lib.hero2_head2_mc();
	this.instance_18.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17}]}).wait(51));

	// animation
	this.instance_19 = new lib.h2_b_mc();
	this.instance_19.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.2,-204.3,301,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-149.2,-204.3,312.3,579.8), new cjs.Rectangle(-149.2,-204.3,326.7,579.8), new cjs.Rectangle(-149.2,-204.3,341.1,579.8), new cjs.Rectangle(-149.2,-204.3,355.5,579.8), new cjs.Rectangle(-149.2,-204.3,369.8,579.8), new cjs.Rectangle(-149.2,-204.3,384.2,579.8), new cjs.Rectangle(-149.2,-204.3,398.6,579.8), new cjs.Rectangle(-149.2,-204.3,413,579.8), new cjs.Rectangle(-149.2,-204.3,427.6,579.8), new cjs.Rectangle(-149.2,-204.3,301,579.8)];


(lib.animation2_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstik2_mc();
	this.instance.setTransform(329,191);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-19,x:54.1,y:99.2},14).wait(1));

	// animation
	this.instance_1 = new lib.table_mc();
	this.instance_1.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:432.5,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.hero2_eyelashes1_1_mc();
	this.instance_2.setTransform(60,-64);

	this.instance_3 = new lib.hero2_eyelashes1_1_mc();
	this.instance_3.setTransform(-57,-64,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// animation
	this.instance_4 = new lib.hero2_fringe0_mc();
	this.instance_4.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.hero2_eyes0_mc();
	this.instance_5.setTransform(0.9,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.hero2_eyebrows0_1_mc();
	this.instance_6.setTransform(57.8,-87.9);

	this.instance_7 = new lib.hero2_eyebrows0_2_mc();
	this.instance_7.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(15));

	// animation
	this.instance_8 = new lib.hero2_shadows4_mc();
	this.instance_8.setTransform(45,-68.9);

	this.instance_9 = new lib.hero2_shadows4_mc();
	this.instance_9.setTransform(-42,-68.1,1,1,0,0,180);

	this.instance_10 = new lib.hero2_shadows3_mc();
	this.instance_10.setTransform(-61.6,-53,1,1,0,0,180);

	this.instance_11 = new lib.hero2_shadows3_mc();
	this.instance_11.setTransform(68.4,-53);

	this.instance_12 = new lib.hero2_shadows2_mc();
	this.instance_12.setTransform(-41,-47.5,1,1,0,0,180);

	this.instance_13 = new lib.hero2_shadows2_mc();
	this.instance_13.setTransform(47,-47.8);

	this.instance_14 = new lib.hero2_shadows1_mc();
	this.instance_14.setTransform(58.8,-68.6);

	this.instance_15 = new lib.hero2_shadows1_mc();
	this.instance_15.setTransform(-56.5,-68.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(15));

	// animation
	this.instance_16 = new lib.hero2_lips0_mc();
	this.instance_16.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15));

	// animation
	this.instance_17 = new lib.hero2_head3_mc();
	this.instance_17.setTransform(0,-67.3);

	this.instance_18 = new lib.hero2_head2_mc();
	this.instance_18.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17}]}).wait(15));

	// animation
	this.instance_19 = new lib.h2_b_mc();
	this.instance_19.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399,-204.3,800,580), new cjs.Rectangle(-399,-204.3,800,592.6), new cjs.Rectangle(-399,-204.3,800,605.2), new cjs.Rectangle(-399,-204.3,800,617.9), new cjs.Rectangle(-399,-204.3,800,630.5), new cjs.Rectangle(-399,-204.3,800,643.1), new cjs.Rectangle(-399,-204.3,800,655.7), new cjs.Rectangle(-399,-204.3,800,668.3), new cjs.Rectangle(-149.2,-204.3,301,579.8)];


(lib.animation2_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka4_mc();
	this.instance.setTransform(96.2,-1.5,0.51,0.51,-79.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:124.7,y:-59.8},8).to({x:132.7,y:-70.8},11).to({x:124.7,y:-59.8},6).to({x:132.7,y:-70.8},11).to({rotation:-54.2,x:294.2,y:14.7,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.hero2_eyelashes1_1_mc();
	this.instance_1.setTransform(60,-64);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({alpha:1},28).wait(14));

	// animation
	this.instance_2 = new lib.hero2_eyelashes1_1_mc();
	this.instance_2.setTransform(-57,-64,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// animation
	this.instance_3 = new lib.lipstik2_mc();
	this.instance_3.setTransform(329,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// animation
	this.instance_4 = new lib.table_mc();
	this.instance_4.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// animation
	this.instance_5 = new lib.hero2_fringe0_mc();
	this.instance_5.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// animation
	this.instance_6 = new lib.hero2_eyes0_mc();
	this.instance_6.setTransform(0.9,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// animation
	this.instance_7 = new lib.hero2_eyebrows0_1_mc();
	this.instance_7.setTransform(57.8,-87.9);

	this.instance_8 = new lib.hero2_eyebrows0_2_mc();
	this.instance_8.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(50));

	// animation
	this.instance_9 = new lib.hero2_shadows4_mc();
	this.instance_9.setTransform(45,-68.9);

	this.instance_10 = new lib.hero2_shadows4_mc();
	this.instance_10.setTransform(-42,-68.1,1,1,0,0,180);

	this.instance_11 = new lib.hero2_shadows3_mc();
	this.instance_11.setTransform(-61.6,-53,1,1,0,0,180);

	this.instance_12 = new lib.hero2_shadows3_mc();
	this.instance_12.setTransform(68.4,-53);

	this.instance_13 = new lib.hero2_shadows2_mc();
	this.instance_13.setTransform(-41,-47.5,1,1,0,0,180);

	this.instance_14 = new lib.hero2_shadows2_mc();
	this.instance_14.setTransform(47,-47.8);

	this.instance_15 = new lib.hero2_shadows1_mc();
	this.instance_15.setTransform(58.8,-68.6);

	this.instance_16 = new lib.hero2_shadows1_mc();
	this.instance_16.setTransform(-56.5,-68.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(50));

	// animation
	this.instance_17 = new lib.hero2_lips0_mc();
	this.instance_17.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// animation
	this.instance_18 = new lib.hero2_head3_mc();
	this.instance_18.setTransform(0,-67.3);

	this.instance_19 = new lib.hero2_head2_mc();
	this.instance_19.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18}]}).wait(50));

	// animation
	this.instance_20 = new lib.h2_b_mc();
	this.instance_20.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka4_mc();
	this.instance.setTransform(2.7,-10.5,0.51,0.51,-96.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-14.3,y:-74.5},4).to({x:-17.3,y:-92.5},11).to({x:-14.3,y:-74.5},5).to({x:-17.3,y:-92.5},11).to({rotation:-79.1,x:96.2,y:-1.5},8).wait(1));

	// animation
	this.instance_1 = new lib.hero2_eyelashes1_1_mc();
	this.instance_1.setTransform(-57,-64,1,1,0,0,180);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},27).wait(9));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// animation
	this.instance_3 = new lib.table_mc();
	this.instance_3.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// animation
	this.instance_4 = new lib.hero2_fringe0_mc();
	this.instance_4.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// animation
	this.instance_5 = new lib.hero2_eyes0_mc();
	this.instance_5.setTransform(0.9,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

	// animation
	this.instance_6 = new lib.hero2_eyebrows0_1_mc();
	this.instance_6.setTransform(57.8,-87.9);

	this.instance_7 = new lib.hero2_eyebrows0_2_mc();
	this.instance_7.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(40));

	// animation
	this.instance_8 = new lib.hero2_shadows4_mc();
	this.instance_8.setTransform(45,-68.9);

	this.instance_9 = new lib.hero2_shadows4_mc();
	this.instance_9.setTransform(-42,-68.1,1,1,0,0,180);

	this.instance_10 = new lib.hero2_shadows3_mc();
	this.instance_10.setTransform(-61.6,-53,1,1,0,0,180);

	this.instance_11 = new lib.hero2_shadows3_mc();
	this.instance_11.setTransform(68.4,-53);

	this.instance_12 = new lib.hero2_shadows2_mc();
	this.instance_12.setTransform(-41,-47.5,1,1,0,0,180);

	this.instance_13 = new lib.hero2_shadows2_mc();
	this.instance_13.setTransform(47,-47.8);

	this.instance_14 = new lib.hero2_shadows1_mc();
	this.instance_14.setTransform(58.8,-68.6);

	this.instance_15 = new lib.hero2_shadows1_mc();
	this.instance_15.setTransform(-56.5,-68.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(40));

	// animation
	this.instance_16 = new lib.hero2_lips0_mc();
	this.instance_16.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(40));

	// animation
	this.instance_17 = new lib.hero2_head3_mc();
	this.instance_17.setTransform(0,-67.3);

	this.instance_18 = new lib.hero2_head2_mc();
	this.instance_18.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17}]}).wait(40));

	// animation
	this.instance_19 = new lib.h2_b_mc();
	this.instance_19.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka3_mc();
	this.instance.setTransform(271.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(14));

	// animation
	this.instance_1 = new lib.podvodka4_mc();
	this.instance_1.setTransform(241.6,197.4,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-96.1,x:2.7,y:-10.5},14).wait(1));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.table_mc();
	this.instance_3.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.hero2_fringe0_mc();
	this.instance_4.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.hero2_eyes0_mc();
	this.instance_5.setTransform(0.9,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.hero2_eyebrows0_1_mc();
	this.instance_6.setTransform(57.8,-87.9);

	this.instance_7 = new lib.hero2_eyebrows0_2_mc();
	this.instance_7.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(15));

	// animation
	this.instance_8 = new lib.hero2_shadows4_mc();
	this.instance_8.setTransform(45,-68.9);

	this.instance_9 = new lib.hero2_shadows4_mc();
	this.instance_9.setTransform(-42,-68.1,1,1,0,0,180);

	this.instance_10 = new lib.hero2_shadows3_mc();
	this.instance_10.setTransform(-61.6,-53,1,1,0,0,180);

	this.instance_11 = new lib.hero2_shadows3_mc();
	this.instance_11.setTransform(68.4,-53);

	this.instance_12 = new lib.hero2_shadows2_mc();
	this.instance_12.setTransform(-41,-47.5,1,1,0,0,180);

	this.instance_13 = new lib.hero2_shadows2_mc();
	this.instance_13.setTransform(47,-47.8);

	this.instance_14 = new lib.hero2_shadows1_mc();
	this.instance_14.setTransform(58.8,-68.6);

	this.instance_15 = new lib.hero2_shadows1_mc();
	this.instance_15.setTransform(-56.5,-68.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(15));

	// animation
	this.instance_16 = new lib.hero2_lips0_mc();
	this.instance_16.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15));

	// animation
	this.instance_17 = new lib.hero2_head3_mc();
	this.instance_17.setTransform(0,-67.3);

	this.instance_18 = new lib.hero2_head2_mc();
	this.instance_18.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17}]}).wait(15));

	// animation
	this.instance_19 = new lib.h2_b_mc();
	this.instance_19.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(179.6,49.7,1,1,-142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-192.5,x:137.6,y:40.3},3).to({rotation:-142.3,x:179.6,y:49.7},3).to({rotation:-192.5,x:137.6,y:40.3},3).to({rotation:-47.5,x:57.6,y:-11.4},9).to({x:70.6,y:-30.3},6).to({x:105.6,y:-40.3},7).to({x:385.6,y:52,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.shadows2_1_mc();
	this.instance_1.setTransform(168.9,78.7,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({y:261.8,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(46));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46));

	// animation
	this.instance_6 = new lib.hero2_fringe0_mc();
	this.instance_6.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46));

	// animation
	this.instance_7 = new lib.hero2_eyes_closed_mc();
	this.instance_7.setTransform(3.9,-48.3);

	this.instance_8 = new lib.hero2_eyes0_mc();
	this.instance_8.setTransform(0.9,-47.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},45).wait(1));

	// animation
	this.instance_9 = new lib.hero2_eyebrows0_1_mc();
	this.instance_9.setTransform(57.8,-87.9);

	this.instance_10 = new lib.hero2_eyebrows0_2_mc();
	this.instance_10.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(46));

	// animation
	this.instance_11 = new lib.hero2_shadows4_mc();
	this.instance_11.setTransform(45,-68.9);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({_off:false},0).to({alpha:1},13).wait(15));

	// animation
	this.instance_12 = new lib.hero2_shadows4_mc();
	this.instance_12.setTransform(-42,-68.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(46));

	// animation
	this.instance_13 = new lib.hero2_shadows3_mc();
	this.instance_13.setTransform(-61.6,-53,1,1,0,0,180);

	this.instance_14 = new lib.hero2_shadows3_mc();
	this.instance_14.setTransform(68.4,-53);

	this.instance_15 = new lib.hero2_shadows2_mc();
	this.instance_15.setTransform(-41,-47.5,1,1,0,0,180);

	this.instance_16 = new lib.hero2_shadows2_mc();
	this.instance_16.setTransform(47,-47.8);

	this.instance_17 = new lib.hero2_shadows1_mc();
	this.instance_17.setTransform(58.8,-68.6);

	this.instance_18 = new lib.hero2_shadows1_mc();
	this.instance_18.setTransform(-56.5,-68.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(46));

	// animation
	this.instance_19 = new lib.hero2_lips0_mc();
	this.instance_19.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(46));

	// animation
	this.instance_20 = new lib.hero2_head3_mc();
	this.instance_20.setTransform(0,-67.3);

	this.instance_21 = new lib.hero2_head2_mc();
	this.instance_21.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20}]}).wait(46));

	// animation
	this.instance_22 = new lib.h2_b_mc();
	this.instance_22.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399,-204.3,817.7,579.8), new cjs.Rectangle(-399,-204.3,839.3,579.8), new cjs.Rectangle(-399,-204.3,800,579.8)];


(lib.animation2_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(179.6,49.7,1,1,-142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-192.5,x:137.6,y:40.3},3).to({rotation:-142.3,x:179.6,y:49.7},3).to({rotation:-192.5,x:137.6,y:40.3},3).to({rotation:-46.9,x:-26.4,y:-38.7},9).to({rotation:-46.9,x:2.6,y:-33.7},4).to({x:26.9,y:-5.7},4).to({rotation:-142.3,x:179.6,y:49.7},8).wait(1));

	// animation
	this.instance_1 = new lib.shadows2_1_mc();
	this.instance_1.setTransform(168.9,78.7,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(35));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// animation
	this.instance_6 = new lib.hero2_fringe0_mc();
	this.instance_6.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

	// animation
	this.instance_7 = new lib.hero2_eyes_closed_mc();
	this.instance_7.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	// animation
	this.instance_8 = new lib.hero2_eyebrows0_1_mc();
	this.instance_8.setTransform(57.8,-87.9);

	this.instance_9 = new lib.hero2_eyebrows0_2_mc();
	this.instance_9.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(35));

	// animation
	this.instance_10 = new lib.hero2_shadows4_mc();
	this.instance_10.setTransform(-42,-68.1,1,1,0,0,180);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({_off:false},0).to({alpha:1},8).wait(9));

	// animation
	this.instance_11 = new lib.hero2_shadows3_mc();
	this.instance_11.setTransform(-61.6,-53,1,1,0,0,180);

	this.instance_12 = new lib.hero2_shadows3_mc();
	this.instance_12.setTransform(68.4,-53);

	this.instance_13 = new lib.hero2_shadows2_mc();
	this.instance_13.setTransform(-41,-47.5,1,1,0,0,180);

	this.instance_14 = new lib.hero2_shadows2_mc();
	this.instance_14.setTransform(47,-47.8);

	this.instance_15 = new lib.hero2_shadows1_mc();
	this.instance_15.setTransform(58.8,-68.6);

	this.instance_16 = new lib.hero2_shadows1_mc();
	this.instance_16.setTransform(-56.5,-68.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(35));

	// animation
	this.instance_17 = new lib.hero2_lips0_mc();
	this.instance_17.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35));

	// animation
	this.instance_18 = new lib.hero2_head3_mc();
	this.instance_18.setTransform(0,-67.3);

	this.instance_19 = new lib.hero2_head2_mc();
	this.instance_19.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18}]}).wait(35));

	// animation
	this.instance_20 = new lib.h2_b_mc();
	this.instance_20.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(218.9,46.7,1,1,-150.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-48.5,x:67.6,y:-35.3},4).to({x:122.6,y:-55.3},9).to({x:117.6,y:-31.6},6).to({x:122.6,y:-55.3},5).to({x:67.6,y:-35.3},9).to({rotation:-142.3,x:179.6,y:49.7},11).wait(1));

	// animation
	this.instance_1 = new lib.shadows2_1_mc();
	this.instance_1.setTransform(168.9,78.7,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(45));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// animation
	this.instance_6 = new lib.hero2_fringe0_mc();
	this.instance_6.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

	// animation
	this.instance_7 = new lib.hero2_eyes_closed_mc();
	this.instance_7.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45));

	// animation
	this.instance_8 = new lib.hero2_shadows3_mc();
	this.instance_8.setTransform(-61.6,-53,1,1,0,0,180);

	this.instance_9 = new lib.hero2_shadows3_mc();
	this.instance_9.setTransform(68.4,-53);

	this.instance_10 = new lib.hero2_shadows2_mc();
	this.instance_10.setTransform(-41,-47.5,1,1,0,0,180);

	this.instance_11 = new lib.hero2_shadows2_mc();
	this.instance_11.setTransform(47,-47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(45));

	// animation
	this.instance_12 = new lib.hero2_shadows1_mc();
	this.instance_12.setTransform(58.8,-68.6);
	this.instance_12.alpha = 0.012;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({alpha:1},29).wait(12));

	// animation
	this.instance_13 = new lib.hero2_shadows1_mc();
	this.instance_13.setTransform(-56.5,-68.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(45));

	// animation
	this.instance_14 = new lib.hero2_eyebrows0_1_mc();
	this.instance_14.setTransform(57.8,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45));

	// animation
	this.instance_15 = new lib.hero2_eyebrows0_2_mc();
	this.instance_15.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(45));

	// animation
	this.instance_16 = new lib.hero2_lips0_mc();
	this.instance_16.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(45));

	// animation
	this.instance_17 = new lib.hero2_head3_mc();
	this.instance_17.setTransform(0,-67.3);

	this.instance_18 = new lib.hero2_head2_mc();
	this.instance_18.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17}]}).wait(45));

	// animation
	this.instance_19 = new lib.h2_b_mc();
	this.instance_19.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(218.9,46.7,1,1,-150.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-60,x:-2.1,y:-56.5},4).to({x:-40.1,y:-54.2},8).to({y:-44.2},7).to({y:-54.2},4).to({x:-2.1,y:-56.5},9).to({rotation:-150.2,x:218.9,y:46.7},12).wait(1));

	// animation
	this.instance_1 = new lib.shadows2_1_mc();
	this.instance_1.setTransform(168.9,78.7,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(45));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// animation
	this.instance_6 = new lib.hero2_fringe0_mc();
	this.instance_6.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

	// animation
	this.instance_7 = new lib.hero2_eyes_closed_mc();
	this.instance_7.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45));

	// animation
	this.instance_8 = new lib.hero2_shadows3_mc();
	this.instance_8.setTransform(-61.6,-53,1,1,0,0,180);

	this.instance_9 = new lib.hero2_shadows3_mc();
	this.instance_9.setTransform(68.4,-53);

	this.instance_10 = new lib.hero2_shadows2_mc();
	this.instance_10.setTransform(-41,-47.5,1,1,0,0,180);

	this.instance_11 = new lib.hero2_shadows2_mc();
	this.instance_11.setTransform(47,-47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(45));

	// animation
	this.instance_12 = new lib.hero2_shadows1_mc();
	this.instance_12.setTransform(-56.5,-68.6,1,1,0,0,180);
	this.instance_12.alpha = 0.012;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({alpha:1},28).wait(13));

	// animation
	this.instance_13 = new lib.hero2_eyebrows0_1_mc();
	this.instance_13.setTransform(57.8,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(45));

	// animation
	this.instance_14 = new lib.hero2_eyebrows0_2_mc();
	this.instance_14.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45));

	// animation
	this.instance_15 = new lib.hero2_lips0_mc();
	this.instance_15.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(45));

	// animation
	this.instance_16 = new lib.hero2_head3_mc();
	this.instance_16.setTransform(0,-67.3);

	this.instance_17 = new lib.hero2_head2_mc();
	this.instance_17.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(45));

	// animation
	this.instance_18 = new lib.h2_b_mc();
	this.instance_18.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(265.9,49.4,1,1,-150.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-188.5,x:226.9,y:44.4},3).to({rotation:-150.2,x:265.9,y:49.4},3).to({rotation:-188.5,x:226.9,y:44.4},3).to({rotation:-150.2,x:265.9,y:49.4},3).to({rotation:-52.5,x:10.9,y:-17.6},11).to({x:-9.1,y:-46.6},7).to({x:-20.1,y:-13},6).to({x:9.9,y:-20},6).to({rotation:-150.2,x:265.9,y:49.4},10).to({rotation:-188.5,x:226.9,y:44.4},3).to({rotation:-150.2,x:265.9,y:49.4},3).to({rotation:-188.5,x:226.9,y:44.4},3).to({rotation:-150.2,x:265.9,y:49.4},3).to({rotation:-44,x:62.7,y:-7.6},13).to({x:71.2,y:-45.2},9).to({x:58.2,y:-5.2},8).to({x:85.2,y:-15.2},8).to({rotation:-150.2,x:218.9,y:46.7},12).wait(1));

	// animation
	this.instance_1 = new lib.shadows2_1_mc();
	this.instance_1.setTransform(168.9,78.7,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(115));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115));

	// animation
	this.instance_6 = new lib.hero2_fringe0_mc();
	this.instance_6.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(115));

	// animation
	this.instance_7 = new lib.hero2_eyes_closed_mc();
	this.instance_7.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(115));

	// animation
	this.instance_8 = new lib.hero2_shadows3_mc();
	this.instance_8.setTransform(-61.6,-53,1,1,0,0,180);

	this.instance_9 = new lib.hero2_shadows3_mc();
	this.instance_9.setTransform(68.4,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(115));

	// animation
	this.instance_10 = new lib.hero2_shadows2_mc();
	this.instance_10.setTransform(-41,-47.5,1,1,0,0,180);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23).to({_off:false},0).to({alpha:1},19).wait(73));

	// animation
	this.instance_11 = new lib.hero2_shadows2_mc();
	this.instance_11.setTransform(47,-47.8);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(77).to({_off:false},0).to({alpha:1},25).wait(13));

	// animation
	this.instance_12 = new lib.hero2_eyebrows0_1_mc();
	this.instance_12.setTransform(57.8,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(115));

	// animation
	this.instance_13 = new lib.hero2_eyebrows0_2_mc();
	this.instance_13.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(115));

	// animation
	this.instance_14 = new lib.hero2_lips0_mc();
	this.instance_14.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(115));

	// animation
	this.instance_15 = new lib.hero2_head3_mc();
	this.instance_15.setTransform(0,-67.3);

	this.instance_16 = new lib.hero2_head2_mc();
	this.instance_16.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).wait(115));

	// animation
	this.instance_17 = new lib.h2_b_mc();
	this.instance_17.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(207,32.4,1,1,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-153,x:125,y:45.4},4).to({rotation:-182,x:104.5,y:42.4},2).to({rotation:-153,x:125,y:45.4},2).to({rotation:-182,x:104.5,y:42.4},2).to({rotation:-57.7,x:-13.5,y:-52.4},10).to({rotation:-91.6,x:-26.2,y:-58.2},5).to({x:-5.2,y:-43.2},5).to({x:-9.2,y:-71.2},6).to({rotation:-153,x:125,y:45.4},11).to({rotation:-182,x:104.5,y:42.4},3).to({rotation:-153,x:125,y:45.4},2).to({rotation:-182,x:104.5,y:42.4},2).to({rotation:-44.2,x:90.5,y:-4.6},11).to({rotation:-44.2,x:108.9,y:-27.6},8).to({x:88.4,y:-37.6},5).to({x:95.9,y:-4.6},7).to({rotation:-150.2,x:265.9,y:49.4},10).wait(1));

	// animation
	this.instance_1 = new lib.shadows2_1_mc();
	this.instance_1.setTransform(168.9,78.7,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(96));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(96));

	// animation
	this.instance_6 = new lib.hero2_fringe0_mc();
	this.instance_6.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(96));

	// animation
	this.instance_7 = new lib.hero2_eyes_closed_mc();
	this.instance_7.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(96));

	// animation
	this.instance_8 = new lib.hero2_shadows3_mc();
	this.instance_8.setTransform(-61.6,-53,1,1,0,0,180);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({alpha:1},16).wait(60));

	// animation
	this.instance_9 = new lib.hero2_shadows3_mc();
	this.instance_9.setTransform(68.4,-53);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65).to({_off:false},0).to({alpha:1},20).wait(11));

	// animation
	this.instance_10 = new lib.hero2_eyebrows0_1_mc();
	this.instance_10.setTransform(57.8,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(96));

	// animation
	this.instance_11 = new lib.hero2_eyebrows0_2_mc();
	this.instance_11.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(96));

	// animation
	this.instance_12 = new lib.hero2_lips0_mc();
	this.instance_12.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(96));

	// animation
	this.instance_13 = new lib.hero2_head3_mc();
	this.instance_13.setTransform(0,-67.3);

	this.instance_14 = new lib.hero2_head2_mc();
	this.instance_14.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(96));

	// animation
	this.instance_15 = new lib.h2_b_mc();
	this.instance_15.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(456,9.4,1,1,-42.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-132,x:207,y:32.4,alpha:1},14).wait(1));

	// animation
	this.instance_1 = new lib.shadows2_1_mc();
	this.instance_1.setTransform(100.8,227.8,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:168.9,y:78.7},14).wait(1));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.hero2_fringe0_mc();
	this.instance_6.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.hero2_eyes0_mc();
	this.instance_7.setTransform(3.9,-48.3);

	this.instance_8 = new lib.hero2_eyes_closed_mc();
	this.instance_8.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},14).wait(1));

	// animation
	this.instance_9 = new lib.hero2_eyebrows0_1_mc();
	this.instance_9.setTransform(57.8,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.hero2_eyebrows0_2_mc();
	this.instance_10.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.hero2_lips0_mc();
	this.instance_11.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.hero2_head3_mc();
	this.instance_12.setTransform(0,-67.3);

	this.instance_13 = new lib.hero2_head2_mc();
	this.instance_13.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(15));

	// animation
	this.instance_14 = new lib.h2_b_mc();
	this.instance_14.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,907,579.8);
p.frameBounds = [rect, new cjs.Rectangle(-399,-204.3,892.6,579.8), new cjs.Rectangle(-399,-204.3,877.7,579.8), new cjs.Rectangle(-399,-204.3,862,579.8), new cjs.Rectangle(-399,-204.3,845.6,579.8), new cjs.Rectangle(-399,-204.3,828.3,579.8), new cjs.Rectangle(-399,-204.3,810.4,579.8), rect=new cjs.Rectangle(-399,-204.3,800,579.8), rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pincet_mc();
	this.instance.setTransform(56.3,-151.1,0.719,0.719,-42.9,0,0,96.5,25.3);

	this.instance_1 = new lib.pincet2_mc();
	this.instance_1.setTransform(61.8,-157.1,0.719,0.719,-42.9,0,0,96.5,25.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:61.8,y:-157.1},3).to({_off:false,x:73.6,y:-155.4},3).to({_off:true,x:78.6,y:-162.6},3).to({_off:false,x:88.3,y:-160.1},3).to({_off:true,x:93.9,y:-160.4},3).to({_off:false,x:99.2,y:-158.9},3).to({_off:true,x:106,y:-157.6},3).to({_off:false,x:111,y:-157.9},3).to({regY:25.2,rotation:13.3,x:232.2,y:-154.6,alpha:0.012},10).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},3).to({_off:true,x:73.6,y:-155.4},3).to({_off:false,x:78.6,y:-162.6},3).to({_off:true,x:88.3,y:-160.1},3).to({_off:false,x:93.9,y:-160.4},3).to({_off:true,x:99.2,y:-158.9},3).to({_off:false,x:106,y:-157.6},3).to({_off:true,x:111,y:-157.9},3).wait(12));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.instance_5 = new lib.shadows2_1_mc();
	this.instance_5.setTransform(100.8,227.8,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(36));

	// animation
	this.instance_6 = new lib.table_mc();
	this.instance_6.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36));

	// animation
	this.instance_7 = new lib.hero2_fringe0_mc();
	this.instance_7.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36));

	// animation
	this.instance_8 = new lib.volos2_mc();
	this.instance_8.setTransform(64.4,-93.7,0.68,0.68,0,7.5,-172.5);

	this.instance_9 = new lib.volos2_mc();
	this.instance_9.setTransform(71.2,-94.2,0.68,0.68,0,7.5,-172.5);

	this.instance_10 = new lib.volos2_mc();
	this.instance_10.setTransform(76,-91.6,0.68,0.68,0,34.8,-145.2);

	this.instance_11 = new lib.volos2_mc();
	this.instance_11.setTransform(80,-88.6,0.68,0.68,0,45.7,-134.3);

	this.instance_12 = new lib.volos2_mc();
	this.instance_12.setTransform(37.8,-89.2,0.68,0.68,0,-24.8,155.2);

	this.instance_13 = new lib.volos2_mc();
	this.instance_13.setTransform(29.6,-88,0.68,0.68,0,-24.8,155.2);

	this.instance_14 = new lib.volos2_mc();
	this.instance_14.setTransform(56.5,-92.4,0.68,0.68,0,-8.3,171.7);

	this.instance_15 = new lib.volos2_mc();
	this.instance_15.setTransform(48.2,-92.9,0.68,0.68,0,-8.3,171.7);

	this.instance_16 = new lib.volos2_mc();
	this.instance_16.setTransform(41.9,-92,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos2_mc();
	this.instance_17.setTransform(32.8,-88.9,0.68,0.68,0,-8.3,171.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16,p:{x:41.9,y:-92}},{t:this.instance_15,p:{x:48.2,y:-92.9}},{t:this.instance_14,p:{x:56.5,y:-92.4}},{t:this.instance_13,p:{skewX:-24.8,skewY:155.2,x:29.6,y:-88}},{t:this.instance_12,p:{skewX:-24.8,skewY:155.2,x:37.8,y:-89.2}},{t:this.instance_11},{t:this.instance_10,p:{skewX:34.8,skewY:-145.2,x:76,y:-91.6}},{t:this.instance_9,p:{skewX:7.5,skewY:-172.5,x:71.2,y:-94.2}},{t:this.instance_8,p:{x:64.4,y:-93.7,skewX:7.5,skewY:-172.5}}]}).to({state:[{t:this.instance_16,p:{x:32.8,y:-88.9}},{t:this.instance_15,p:{x:41.9,y:-92}},{t:this.instance_14,p:{x:48.2,y:-92.9}},{t:this.instance_13,p:{skewX:-8.3,skewY:171.7,x:56.5,y:-92.4}},{t:this.instance_12,p:{skewX:-24.8,skewY:155.2,x:37.8,y:-89.2}},{t:this.instance_11},{t:this.instance_10,p:{skewX:34.8,skewY:-145.2,x:76,y:-91.6}},{t:this.instance_9,p:{skewX:7.5,skewY:-172.5,x:71.2,y:-94.2}},{t:this.instance_8,p:{x:64.4,y:-93.7,skewX:7.5,skewY:-172.5}}]},2).to({state:[{t:this.instance_14,p:{x:41.9,y:-92}},{t:this.instance_13,p:{skewX:-8.3,skewY:171.7,x:48.2,y:-92.9}},{t:this.instance_12,p:{skewX:-8.3,skewY:171.7,x:56.5,y:-92.4}},{t:this.instance_11},{t:this.instance_10,p:{skewX:34.8,skewY:-145.2,x:76,y:-91.6}},{t:this.instance_9,p:{skewX:7.5,skewY:-172.5,x:71.2,y:-94.2}},{t:this.instance_8,p:{x:64.4,y:-93.7,skewX:7.5,skewY:-172.5}}]},2).to({state:[{t:this.instance_12,p:{skewX:-8.3,skewY:171.7,x:56.5,y:-92.4}},{t:this.instance_11},{t:this.instance_10,p:{skewX:34.8,skewY:-145.2,x:76,y:-91.6}},{t:this.instance_9,p:{skewX:7.5,skewY:-172.5,x:71.2,y:-94.2}},{t:this.instance_8,p:{x:64.4,y:-93.7,skewX:7.5,skewY:-172.5}}]},3).to({state:[{t:this.instance_11},{t:this.instance_10,p:{skewX:34.8,skewY:-145.2,x:76,y:-91.6}},{t:this.instance_9,p:{skewX:7.5,skewY:-172.5,x:71.2,y:-94.2}},{t:this.instance_8,p:{x:64.4,y:-93.7,skewX:7.5,skewY:-172.5}}]},3).to({state:[{t:this.instance_10,p:{skewX:45.7,skewY:-134.3,x:80,y:-88.6}},{t:this.instance_9,p:{skewX:34.8,skewY:-145.2,x:76,y:-91.6}},{t:this.instance_8,p:{x:71.2,y:-94.2,skewX:7.5,skewY:-172.5}}]},3).to({state:[{t:this.instance_9,p:{skewX:45.7,skewY:-134.3,x:80,y:-88.6}},{t:this.instance_8,p:{x:76,y:-91.6,skewX:34.8,skewY:-145.2}}]},4).to({state:[{t:this.instance_8,p:{x:80,y:-88.6,skewX:45.7,skewY:-134.3}}]},3).to({state:[]},3).wait(13));

	// animation
	this.instance_18 = new lib.hero2_eyes0_mc();
	this.instance_18.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(36));

	// animation
	this.instance_19 = new lib.hero2_eyebrows0_1_mc();
	this.instance_19.setTransform(57.8,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(36));

	// animation
	this.instance_20 = new lib.hero2_eyebrows0_2_mc();
	this.instance_20.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(36));

	// animation
	this.instance_21 = new lib.hero2_lips0_mc();
	this.instance_21.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(36));

	// animation
	this.instance_22 = new lib.hero2_head3_mc();
	this.instance_22.setTransform(0,-67.3);

	this.instance_23 = new lib.hero2_head2_mc();
	this.instance_23.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22}]}).wait(36));

	// animation
	this.instance_24 = new lib.h2_b_mc();
	this.instance_24.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-239.2,800,614.8);
p.frameBounds = [rect, new cjs.Rectangle(-399,-223,800,598.5), new cjs.Rectangle(-399,-225,800,600.5), new cjs.Rectangle(-399,-245.2,800,620.8), new cjs.Rectangle(-399,-226.1,800,601.7), new cjs.Rectangle(-399,-225.6,800,601.1), new cjs.Rectangle(-399,-243.5,800,619), new cjs.Rectangle(-399,-227.6,800,603.1), new cjs.Rectangle(-399,-230,800,605.6), new cjs.Rectangle(-399,-250.7,800,626.3), new cjs.Rectangle(-399,-231.4,800,606.9), new cjs.Rectangle(-399,-230.6,800,606.1), new cjs.Rectangle(-399,-248.2,800,623.8), new cjs.Rectangle(-399,-230.1,800,605.6), new cjs.Rectangle(-399,-230.1,800,605.7), new cjs.Rectangle(-399,-248.5,800,624), new cjs.Rectangle(-399,-229.5,800,605.1), new cjs.Rectangle(-399,-229,800,604.6), new cjs.Rectangle(-399,-247,800,622.5), new cjs.Rectangle(-399,-228.4,800,603.9), new cjs.Rectangle(-399,-227.9,800,603.5), new cjs.Rectangle(-399,-245.7,800,621.3), new cjs.Rectangle(-399,-227.4,800,602.9), new cjs.Rectangle(-399,-227.4,800,603), new cjs.Rectangle(-399,-246,800,621.5), new cjs.Rectangle(-399,-224,800,599.5), new cjs.Rectangle(-399,-219.4,800,595), new cjs.Rectangle(-399,-214.7,800,590.2), new cjs.Rectangle(-399,-209.1,800,584.6), rect=new cjs.Rectangle(-399,-204.3,800,579.8), rect, new cjs.Rectangle(-399,-207.2,800,582.8), new cjs.Rectangle(-399,-212.3,800,587.8), new cjs.Rectangle(-399,-216.7,800,592.3), new cjs.Rectangle(-399,-224.7,800,600.3), new cjs.Rectangle(-399,-204.3,800,579.8)];


(lib.animation2_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pincet_mc();
	this.instance.setTransform(6.6,-165.6,0.719,0.719,-42.9,0,0,96.5,25.3);

	this.instance_1 = new lib.pincet2_mc();
	this.instance_1.setTransform(-13.3,-160.6,0.719,0.719,-41.5,0,0,96.5,25.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:-41.5,x:-13.3,y:-160.6},3).to({_off:false,rotation:-42.9,x:-26.4,y:-158.4},3).to({_off:true,rotation:-41.5,x:-36.9,y:-158.1},3).to({_off:false,rotation:-42.9,x:-41.6,y:-157.9},4).to({_off:true,rotation:-41.5,x:-47.7,y:-160.4},3).to({_off:false,rotation:-42.9,x:-58,y:-152.4},3).to({x:56.3,y:-151.1},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},3).to({_off:true,rotation:-42.9,x:-26.4,y:-158.4},3).to({_off:false,rotation:-41.5,x:-36.9,y:-158.1},3).to({_off:true,rotation:-42.9,x:-41.6,y:-157.9},4).to({_off:false,rotation:-41.5,x:-47.7,y:-160.4},3).to({_off:true,rotation:-42.9,x:-58,y:-152.4},3).wait(11));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.instance_5 = new lib.shadows2_1_mc();
	this.instance_5.setTransform(100.8,227.8,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(30));

	// animation
	this.instance_6 = new lib.table_mc();
	this.instance_6.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// animation
	this.instance_7 = new lib.hero2_fringe0_mc();
	this.instance_7.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// animation
	this.instance_8 = new lib.volos2_mc();
	this.instance_8.setTransform(64.4,-93.7,0.68,0.68,0,7.5,-172.5);

	this.instance_9 = new lib.volos2_mc();
	this.instance_9.setTransform(71.2,-94.2,0.68,0.68,0,7.5,-172.5);

	this.instance_10 = new lib.volos2_mc();
	this.instance_10.setTransform(76,-91.6,0.68,0.68,0,34.8,-145.2);

	this.instance_11 = new lib.volos2_mc();
	this.instance_11.setTransform(80,-88.6,0.68,0.68,0,45.7,-134.3);

	this.instance_12 = new lib.volos2_mc();
	this.instance_12.setTransform(37.8,-89.2,0.68,0.68,0,-24.8,155.2);

	this.instance_13 = new lib.volos2_mc();
	this.instance_13.setTransform(29.6,-88,0.68,0.68,0,-24.8,155.2);

	this.instance_14 = new lib.volos2_mc();
	this.instance_14.setTransform(56.5,-92.4,0.68,0.68,0,-8.3,171.7);

	this.instance_15 = new lib.volos2_mc();
	this.instance_15.setTransform(48.2,-92.9,0.68,0.68,0,-8.3,171.7);

	this.instance_16 = new lib.volos2_mc();
	this.instance_16.setTransform(41.9,-92,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos2_mc();
	this.instance_17.setTransform(32.8,-88.9,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos2_mc();
	this.instance_18.setTransform(-64.1,-96.7,0.68,0.68,-7.5);

	this.instance_19 = new lib.volos2_mc();
	this.instance_19.setTransform(-68.6,-94.2,0.68,0.68,-7.5);

	this.instance_20 = new lib.volos2_mc();
	this.instance_20.setTransform(-72.4,-93.8,0.68,0.68,-34.8);

	this.instance_21 = new lib.volos2_mc();
	this.instance_21.setTransform(-76.4,-90.9,0.68,0.68,-45.7);

	this.instance_22 = new lib.volos2_mc();
	this.instance_22.setTransform(-35.2,-89.2,0.68,0.68,24.8);

	this.instance_23 = new lib.volos2_mc();
	this.instance_23.setTransform(-26.8,-87.2,0.68,0.68,24.8);

	this.instance_24 = new lib.volos2_mc();
	this.instance_24.setTransform(-53.9,-92.4,0.68,0.68,8.3);

	this.instance_25 = new lib.volos2_mc();
	this.instance_25.setTransform(-45.6,-92.9,0.68,0.68,8.3);

	this.instance_26 = new lib.volos2_mc();
	this.instance_26.setTransform(-39.3,-92,0.68,0.68,8.3);

	this.instance_27 = new lib.volos2_mc();
	this.instance_27.setTransform(-30.2,-88.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24,p:{x:-53.9,y:-92.4}},{t:this.instance_23,p:{rotation:24.8,x:-26.8,y:-87.2}},{t:this.instance_22,p:{rotation:24.8,x:-35.2,y:-89.2}},{t:this.instance_21},{t:this.instance_20,p:{rotation:-34.8,x:-72.4,y:-93.8}},{t:this.instance_19,p:{rotation:-7.5,x:-68.6,y:-94.2}},{t:this.instance_18,p:{x:-64.1,y:-96.7,rotation:-7.5}},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).to({state:[{t:this.instance_24,p:{x:-39.3,y:-92}},{t:this.instance_23,p:{rotation:8.3,x:-45.6,y:-92.9}},{t:this.instance_22,p:{rotation:8.3,x:-53.9,y:-92.4}},{t:this.instance_21},{t:this.instance_20,p:{rotation:-34.8,x:-72.4,y:-93.8}},{t:this.instance_19,p:{rotation:-7.5,x:-68.6,y:-94.2}},{t:this.instance_18,p:{x:-64.1,y:-96.7,rotation:-7.5}},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},2).to({state:[{t:this.instance_22,p:{rotation:8.3,x:-53.9,y:-92.4}},{t:this.instance_21},{t:this.instance_20,p:{rotation:-34.8,x:-72.4,y:-93.8}},{t:this.instance_19,p:{rotation:-7.5,x:-68.6,y:-94.2}},{t:this.instance_18,p:{x:-64.1,y:-96.7,rotation:-7.5}},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},2).to({state:[{t:this.instance_21},{t:this.instance_20,p:{rotation:-34.8,x:-72.4,y:-93.8}},{t:this.instance_19,p:{rotation:-7.5,x:-68.6,y:-94.2}},{t:this.instance_18,p:{x:-64.1,y:-96.7,rotation:-7.5}},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},2).to({state:[{t:this.instance_20,p:{rotation:-45.7,x:-76.4,y:-90.9}},{t:this.instance_19,p:{rotation:-34.8,x:-72.4,y:-93.8}},{t:this.instance_18,p:{x:-68.6,y:-94.2,rotation:-7.5}},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},3).to({state:[{t:this.instance_19,p:{rotation:-45.7,x:-76.4,y:-90.9}},{t:this.instance_18,p:{x:-72.4,y:-93.8,rotation:-34.8}},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},3).to({state:[{t:this.instance_18,p:{x:-76.4,y:-90.9,rotation:-45.7}},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},4).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},3).wait(11));

	// animation
	this.instance_28 = new lib.hero2_eyes0_mc();
	this.instance_28.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(30));

	// animation
	this.instance_29 = new lib.hero2_eyebrows0_1_mc();
	this.instance_29.setTransform(57.8,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(30));

	// animation
	this.instance_30 = new lib.hero2_eyebrows0_2_mc();
	this.instance_30.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(30));

	// animation
	this.instance_31 = new lib.hero2_lips0_mc();
	this.instance_31.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(30));

	// animation
	this.instance_32 = new lib.hero2_head3_mc();
	this.instance_32.setTransform(0,-67.3);

	this.instance_33 = new lib.hero2_head2_mc();
	this.instance_33.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32}]}).wait(30));

	// animation
	this.instance_34 = new lib.h2_b_mc();
	this.instance_34.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-253.7,800,629.3);
p.frameBounds = [rect, new cjs.Rectangle(-399,-233.6,800,609.2), new cjs.Rectangle(-399,-231.6,800,607.1), new cjs.Rectangle(-399,-248.3,800,623.8), new cjs.Rectangle(-399,-229,800,604.5), new cjs.Rectangle(-399,-228.4,800,604), new cjs.Rectangle(-399,-246.5,800,622), new cjs.Rectangle(-399,-227.9,800,603.4), new cjs.Rectangle(-399,-227.5,800,603), new cjs.Rectangle(-399,-245.8,800,621.3), new cjs.Rectangle(-399,-227.1,800,602.7), new cjs.Rectangle(-399,-227.2,800,602.8), new cjs.Rectangle(-399,-227.4,800,602.9), new cjs.Rectangle(-399,-246,800,621.5), new cjs.Rectangle(-399,-228.3,800,603.8), new cjs.Rectangle(-399,-228.9,800,604.4), new cjs.Rectangle(-399,-248.1,800,623.7), new cjs.Rectangle(-399,-226.9,800,602.5), new cjs.Rectangle(-399,-224.4,800,600), new cjs.Rectangle(-399,-240.5,800,616), new cjs.Rectangle(-399,-222.1,800,597.6), new cjs.Rectangle(-399,-222,800,597.5), new cjs.Rectangle(-399,-221.8,800,597.4), new cjs.Rectangle(-399,-221.7,800,597.3), new cjs.Rectangle(-399,-221.6,800,597.1), new cjs.Rectangle(-399,-221.5,800,597), new cjs.Rectangle(-399,-221.3,800,596.9), new cjs.Rectangle(-399,-221.2,800,596.8), new cjs.Rectangle(-399,-221.1,800,596.6), new cjs.Rectangle(-399,-239.2,800,614.8)];


(lib.animation2_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pincet_mc();
	this.instance.setTransform(-77.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-42.9,x:6.6,y:-165.6},14).wait(1));

	// animation
	this.instance_1 = new lib.lipstik2_mc();
	this.instance_1.setTransform(329,191);

	this.instance_2 = new lib.podvodka4_mc();
	this.instance_2.setTransform(241.6,197.4,0.51,0.51);

	this.instance_3 = new lib.podvodka3_mc();
	this.instance_3.setTransform(271.5,206.3,0.51,0.51);

	this.instance_4 = new lib.shadows2_1_mc();
	this.instance_4.setTransform(100.8,227.8,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(15));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.hero2_fringe0_mc();
	this.instance_6.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.volos2_mc();
	this.instance_7.setTransform(64.4,-93.7,0.68,0.68,0,7.5,-172.5);

	this.instance_8 = new lib.volos2_mc();
	this.instance_8.setTransform(71.2,-94.2,0.68,0.68,0,7.5,-172.5);

	this.instance_9 = new lib.volos2_mc();
	this.instance_9.setTransform(76,-91.6,0.68,0.68,0,34.8,-145.2);

	this.instance_10 = new lib.volos2_mc();
	this.instance_10.setTransform(80,-88.6,0.68,0.68,0,45.7,-134.3);

	this.instance_11 = new lib.volos2_mc();
	this.instance_11.setTransform(37.8,-89.2,0.68,0.68,0,-24.8,155.2);

	this.instance_12 = new lib.volos2_mc();
	this.instance_12.setTransform(29.6,-88,0.68,0.68,0,-24.8,155.2);

	this.instance_13 = new lib.volos2_mc();
	this.instance_13.setTransform(56.5,-92.4,0.68,0.68,0,-8.3,171.7);

	this.instance_14 = new lib.volos2_mc();
	this.instance_14.setTransform(48.2,-92.9,0.68,0.68,0,-8.3,171.7);

	this.instance_15 = new lib.volos2_mc();
	this.instance_15.setTransform(41.9,-92,0.68,0.68,0,-8.3,171.7);

	this.instance_16 = new lib.volos2_mc();
	this.instance_16.setTransform(32.8,-88.9,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos2_mc();
	this.instance_17.setTransform(-64.1,-96.7,0.68,0.68,-7.5);

	this.instance_18 = new lib.volos2_mc();
	this.instance_18.setTransform(-68.6,-94.2,0.68,0.68,-7.5);

	this.instance_19 = new lib.volos2_mc();
	this.instance_19.setTransform(-72.4,-93.8,0.68,0.68,-34.8);

	this.instance_20 = new lib.volos2_mc();
	this.instance_20.setTransform(-76.4,-90.9,0.68,0.68,-45.7);

	this.instance_21 = new lib.volos2_mc();
	this.instance_21.setTransform(-35.2,-89.2,0.68,0.68,24.8);

	this.instance_22 = new lib.volos2_mc();
	this.instance_22.setTransform(-26.8,-87.2,0.68,0.68,24.8);

	this.instance_23 = new lib.volos2_mc();
	this.instance_23.setTransform(-53.9,-92.4,0.68,0.68,8.3);

	this.instance_24 = new lib.volos2_mc();
	this.instance_24.setTransform(-45.6,-92.9,0.68,0.68,8.3);

	this.instance_25 = new lib.volos2_mc();
	this.instance_25.setTransform(-39.3,-92,0.68,0.68,8.3);

	this.instance_26 = new lib.volos2_mc();
	this.instance_26.setTransform(-30.2,-88.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(15));

	// animation
	this.instance_27 = new lib.hero2_eyes0_mc();
	this.instance_27.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(15));

	// animation
	this.instance_28 = new lib.hero2_eyebrows0_1_mc();
	this.instance_28.setTransform(57.8,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(15));

	// animation
	this.instance_29 = new lib.hero2_eyebrows0_2_mc();
	this.instance_29.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(15));

	// animation
	this.instance_30 = new lib.hero2_lips0_mc();
	this.instance_30.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(15));

	// animation
	this.instance_31 = new lib.hero2_head3_mc();
	this.instance_31.setTransform(0,-67.3);

	this.instance_32 = new lib.hero2_head2_mc();
	this.instance_32.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32},{t:this.instance_31}]}).wait(15));

	// animation
	this.instance_33 = new lib.h2_b_mc();
	this.instance_33.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399,-253.7,800,629.3)];


(lib.animation2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush3_mc();
	this.instance.setTransform(-193,56.4,0.633,0.633,137.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:207.7,x:-112.2},3).to({rotation:162,x:-152.2,y:54.7},3).to({rotation:207.7,x:-112.2,y:56.4},3).to({rotation:162,x:-152.2,y:54.7},4).to({rotation:45.2,x:-104.4,y:23.7},14).to({rotation:19.3,x:-66.4,y:44},8).to({rotation:45.2,x:-104.4,y:23.7},8).to({rotation:-35.2,x:85,y:45.9},16).to({rotation:-72.2,x:119.1,y:-4.1},8).to({rotation:-35.2,x:85,y:45.9},8).to({x:328,y:76.3,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.rouge1_1_mc();
	this.instance_1.setTransform(-137.4,84.3,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({x:-437.2,y:172.3,alpha:0.012},18).to({_off:true},1).wait(59));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.instance_5 = new lib.shadows2_1_mc();
	this.instance_5.setTransform(100.8,227.8,0.765,0.765);

	this.instance_6 = new lib.pincet_mc();
	this.instance_6.setTransform(-77.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(91));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(91));

	// animation
	this.instance_8 = new lib.hero2_fringe0_mc();
	this.instance_8.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(91));

	// animation
	this.instance_9 = new lib.volos2_mc();
	this.instance_9.setTransform(64.4,-93.7,0.68,0.68,0,7.5,-172.5);

	this.instance_10 = new lib.volos2_mc();
	this.instance_10.setTransform(71.2,-94.2,0.68,0.68,0,7.5,-172.5);

	this.instance_11 = new lib.volos2_mc();
	this.instance_11.setTransform(76,-91.6,0.68,0.68,0,34.8,-145.2);

	this.instance_12 = new lib.volos2_mc();
	this.instance_12.setTransform(80,-88.6,0.68,0.68,0,45.7,-134.3);

	this.instance_13 = new lib.volos2_mc();
	this.instance_13.setTransform(37.8,-89.2,0.68,0.68,0,-24.8,155.2);

	this.instance_14 = new lib.volos2_mc();
	this.instance_14.setTransform(29.6,-88,0.68,0.68,0,-24.8,155.2);

	this.instance_15 = new lib.volos2_mc();
	this.instance_15.setTransform(56.5,-92.4,0.68,0.68,0,-8.3,171.7);

	this.instance_16 = new lib.volos2_mc();
	this.instance_16.setTransform(48.2,-92.9,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos2_mc();
	this.instance_17.setTransform(41.9,-92,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos2_mc();
	this.instance_18.setTransform(32.8,-88.9,0.68,0.68,0,-8.3,171.7);

	this.instance_19 = new lib.volos2_mc();
	this.instance_19.setTransform(-64.1,-96.7,0.68,0.68,-7.5);

	this.instance_20 = new lib.volos2_mc();
	this.instance_20.setTransform(-68.6,-94.2,0.68,0.68,-7.5);

	this.instance_21 = new lib.volos2_mc();
	this.instance_21.setTransform(-72.4,-93.8,0.68,0.68,-34.8);

	this.instance_22 = new lib.volos2_mc();
	this.instance_22.setTransform(-76.4,-90.9,0.68,0.68,-45.7);

	this.instance_23 = new lib.volos2_mc();
	this.instance_23.setTransform(-35.2,-89.2,0.68,0.68,24.8);

	this.instance_24 = new lib.volos2_mc();
	this.instance_24.setTransform(-26.8,-87.2,0.68,0.68,24.8);

	this.instance_25 = new lib.volos2_mc();
	this.instance_25.setTransform(-53.9,-92.4,0.68,0.68,8.3);

	this.instance_26 = new lib.volos2_mc();
	this.instance_26.setTransform(-45.6,-92.9,0.68,0.68,8.3);

	this.instance_27 = new lib.volos2_mc();
	this.instance_27.setTransform(-39.3,-92,0.68,0.68,8.3);

	this.instance_28 = new lib.volos2_mc();
	this.instance_28.setTransform(-30.2,-88.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(91));

	// animation
	this.instance_29 = new lib.hero2_eyes0_mc();
	this.instance_29.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(91));

	// animation
	this.instance_30 = new lib.hero2_eyebrows0_1_mc();
	this.instance_30.setTransform(57.8,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(91));

	// animation
	this.instance_31 = new lib.hero2_eyebrows0_2_mc();
	this.instance_31.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(91));

	// animation
	this.instance_32 = new lib.hero2_lips0_mc();
	this.instance_32.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(91));

	// animation
	this.instance_33 = new lib.hero2_head3_mc();
	this.instance_33.setTransform(0,-67.3);
	this.instance_33.alpha = 0.012;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(27).to({_off:false},0).to({alpha:1},48).wait(16));

	// animation
	this.instance_34 = new lib.hero2_head2_mc();
	this.instance_34.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(91));

	// animation
	this.instance_35 = new lib.h2_b_mc();
	this.instance_35.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-408.8,-204.3,809.9,579.8), new cjs.Rectangle(-425.5,-204.3,826.5,579.8), new cjs.Rectangle(-442.2,-204.3,843.2,579.8), new cjs.Rectangle(-458.8,-204.3,859.9,579.8), new cjs.Rectangle(-475.5,-204.3,876.5,579.8), rect=new cjs.Rectangle(-399,-204.3,800,579.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush3_mc();
	this.instance.setTransform(-356.9,84.4,0.633,0.633,38.8);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:137.3,x:-193,y:56.4,alpha:1},14).wait(1));

	// animation
	this.instance_1 = new lib.rouge1_1_mc();
	this.instance_1.setTransform(-202.5,222.8,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-137.4,y:84.3},14).wait(1));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.instance_5 = new lib.shadows2_1_mc();
	this.instance_5.setTransform(100.8,227.8,0.765,0.765);

	this.instance_6 = new lib.pincet_mc();
	this.instance_6.setTransform(-77.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.hero2_fringe0_mc();
	this.instance_8.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.volos2_mc();
	this.instance_9.setTransform(64.4,-93.7,0.68,0.68,0,7.5,-172.5);

	this.instance_10 = new lib.volos2_mc();
	this.instance_10.setTransform(71.2,-94.2,0.68,0.68,0,7.5,-172.5);

	this.instance_11 = new lib.volos2_mc();
	this.instance_11.setTransform(76,-91.6,0.68,0.68,0,34.8,-145.2);

	this.instance_12 = new lib.volos2_mc();
	this.instance_12.setTransform(80,-88.6,0.68,0.68,0,45.7,-134.3);

	this.instance_13 = new lib.volos2_mc();
	this.instance_13.setTransform(37.8,-89.2,0.68,0.68,0,-24.8,155.2);

	this.instance_14 = new lib.volos2_mc();
	this.instance_14.setTransform(29.6,-88,0.68,0.68,0,-24.8,155.2);

	this.instance_15 = new lib.volos2_mc();
	this.instance_15.setTransform(56.5,-92.4,0.68,0.68,0,-8.3,171.7);

	this.instance_16 = new lib.volos2_mc();
	this.instance_16.setTransform(48.2,-92.9,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos2_mc();
	this.instance_17.setTransform(41.9,-92,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos2_mc();
	this.instance_18.setTransform(32.8,-88.9,0.68,0.68,0,-8.3,171.7);

	this.instance_19 = new lib.volos2_mc();
	this.instance_19.setTransform(-64.1,-96.7,0.68,0.68,-7.5);

	this.instance_20 = new lib.volos2_mc();
	this.instance_20.setTransform(-68.6,-94.2,0.68,0.68,-7.5);

	this.instance_21 = new lib.volos2_mc();
	this.instance_21.setTransform(-72.4,-93.8,0.68,0.68,-34.8);

	this.instance_22 = new lib.volos2_mc();
	this.instance_22.setTransform(-76.4,-90.9,0.68,0.68,-45.7);

	this.instance_23 = new lib.volos2_mc();
	this.instance_23.setTransform(-35.2,-89.2,0.68,0.68,24.8);

	this.instance_24 = new lib.volos2_mc();
	this.instance_24.setTransform(-26.8,-87.2,0.68,0.68,24.8);

	this.instance_25 = new lib.volos2_mc();
	this.instance_25.setTransform(-53.9,-92.4,0.68,0.68,8.3);

	this.instance_26 = new lib.volos2_mc();
	this.instance_26.setTransform(-45.6,-92.9,0.68,0.68,8.3);

	this.instance_27 = new lib.volos2_mc();
	this.instance_27.setTransform(-39.3,-92,0.68,0.68,8.3);

	this.instance_28 = new lib.volos2_mc();
	this.instance_28.setTransform(-30.2,-88.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(15));

	// animation
	this.instance_29 = new lib.hero2_eyes0_mc();
	this.instance_29.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(15));

	// animation
	this.instance_30 = new lib.hero2_eyebrows0_1_mc();
	this.instance_30.setTransform(57.8,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(15));

	// animation
	this.instance_31 = new lib.hero2_eyebrows0_2_mc();
	this.instance_31.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(15));

	// animation
	this.instance_32 = new lib.hero2_lips0_mc();
	this.instance_32.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(15));

	// animation
	this.instance_33 = new lib.hero2_head2_mc();
	this.instance_33.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(15));

	// animation
	this.instance_34 = new lib.h2_b_mc();
	this.instance_34.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-423.7,-204.3,824.7,579.8);
p.frameBounds = [rect, new cjs.Rectangle(-414.1,-204.3,815.1,579.8), new cjs.Rectangle(-403.6,-204.3,804.6,579.8), rect=new cjs.Rectangle(-399,-204.3,800,579.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator2_mc();
	this.instance.setTransform(-118.6,-16.6,0.505,0.505,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:34.5,x:-68.1,y:-4.6},6).to({x:4.2,y:34.4},10).to({x:59.9,y:-0.6},9).to({x:-4.7,y:-24.6},9).to({x:7.3,y:-115.6},10).to({x:-51.1,y:-121.6},11).to({x:53.8,y:-118.6},9).to({rotation:-29,x:238.8,y:5.4,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.lipstik2_mc();
	this.instance_1.setTransform(329,191);

	this.instance_2 = new lib.podvodka4_mc();
	this.instance_2.setTransform(241.6,197.4,0.51,0.51);

	this.instance_3 = new lib.podvodka3_mc();
	this.instance_3.setTransform(271.5,206.3,0.51,0.51);

	this.instance_4 = new lib.rouge1_1_mc();
	this.instance_4.setTransform(-203.5,222.8,0.765,0.765);

	this.instance_5 = new lib.shadows2_1_mc();
	this.instance_5.setTransform(100.8,227.8,0.765,0.765);

	this.instance_6 = new lib.pincet_mc();
	this.instance_6.setTransform(-77.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(80));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// animation
	this.instance_8 = new lib.hero2_fringe0_mc();
	this.instance_8.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// animation
	this.instance_9 = new lib.volos2_mc();
	this.instance_9.setTransform(64.4,-93.7,0.68,0.68,0,7.5,-172.5);

	this.instance_10 = new lib.volos2_mc();
	this.instance_10.setTransform(71.2,-94.2,0.68,0.68,0,7.5,-172.5);

	this.instance_11 = new lib.volos2_mc();
	this.instance_11.setTransform(76,-91.6,0.68,0.68,0,34.8,-145.2);

	this.instance_12 = new lib.volos2_mc();
	this.instance_12.setTransform(80,-88.6,0.68,0.68,0,45.7,-134.3);

	this.instance_13 = new lib.volos2_mc();
	this.instance_13.setTransform(37.8,-89.2,0.68,0.68,0,-24.8,155.2);

	this.instance_14 = new lib.volos2_mc();
	this.instance_14.setTransform(29.6,-88,0.68,0.68,0,-24.8,155.2);

	this.instance_15 = new lib.volos2_mc();
	this.instance_15.setTransform(56.5,-92.4,0.68,0.68,0,-8.3,171.7);

	this.instance_16 = new lib.volos2_mc();
	this.instance_16.setTransform(48.2,-92.9,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos2_mc();
	this.instance_17.setTransform(41.9,-92,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos2_mc();
	this.instance_18.setTransform(32.8,-88.9,0.68,0.68,0,-8.3,171.7);

	this.instance_19 = new lib.volos2_mc();
	this.instance_19.setTransform(-64.1,-96.7,0.68,0.68,-7.5);

	this.instance_20 = new lib.volos2_mc();
	this.instance_20.setTransform(-68.6,-94.2,0.68,0.68,-7.5);

	this.instance_21 = new lib.volos2_mc();
	this.instance_21.setTransform(-72.4,-93.8,0.68,0.68,-34.8);

	this.instance_22 = new lib.volos2_mc();
	this.instance_22.setTransform(-76.4,-90.9,0.68,0.68,-45.7);

	this.instance_23 = new lib.volos2_mc();
	this.instance_23.setTransform(-35.2,-89.2,0.68,0.68,24.8);

	this.instance_24 = new lib.volos2_mc();
	this.instance_24.setTransform(-26.8,-87.2,0.68,0.68,24.8);

	this.instance_25 = new lib.volos2_mc();
	this.instance_25.setTransform(-53.9,-92.4,0.68,0.68,8.3);

	this.instance_26 = new lib.volos2_mc();
	this.instance_26.setTransform(-45.6,-92.9,0.68,0.68,8.3);

	this.instance_27 = new lib.volos2_mc();
	this.instance_27.setTransform(-39.3,-92,0.68,0.68,8.3);

	this.instance_28 = new lib.volos2_mc();
	this.instance_28.setTransform(-30.2,-88.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(80));

	// animation
	this.instance_29 = new lib.hero2_eyes0_mc();
	this.instance_29.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(80));

	// animation
	this.instance_30 = new lib.hero2_eyebrows0_1_mc();
	this.instance_30.setTransform(57.8,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(80));

	// animation
	this.instance_31 = new lib.hero2_eyebrows0_2_mc();
	this.instance_31.setTransform(-50.6,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(80));

	// animation
	this.instance_32 = new lib.hero2_lips0_mc();
	this.instance_32.setTransform(4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(80));

	// animation
	this.instance_33 = new lib.hero1_ton_mc();
	this.instance_33.setTransform(6.1,-26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(35).to({alpha:0.012},11).to({_off:true},1).wait(33));

	// animation
	this.instance_34 = new lib.hero1_ton_mc();
	this.instance_34.setTransform(64.6,5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(25).to({alpha:0.012},14).to({_off:true},1).wait(40));

	// animation
	this.instance_35 = new lib.hero1_ton_mc();
	this.instance_35.setTransform(-50.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(6).to({alpha:0.012},19).to({_off:true},1).wait(54));

	// animation
	this.instance_36 = new lib.hero1_ton_mc();
	this.instance_36.setTransform(7.3,-110.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(44).to({alpha:0.012},13).to({_off:true},1).wait(22));

	// animation
	this.instance_37 = new lib.hero2_head2_mc();
	this.instance_37.setTransform(0,-67.3);
	this.instance_37.alpha = 0.012;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(6).to({_off:false},0).to({alpha:1},38).wait(36));

	// animation
	this.instance_38 = new lib.hero2_head1_mc();
	this.instance_38.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({_off:true},79).wait(1));

	// animation
	this.instance_39 = new lib.h2_b_mc();
	this.instance_39.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator2_mc();
	this.instance.setTransform(-325.2,75.2,0.505,0.505,47.2);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({x:-118.6,y:-16.6,alpha:1},12).wait(1));

	// animation
	this.instance_1 = new lib.ton_mc();
	this.instance_1.setTransform(49,-79.9,1,1,-27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-41.7,x:62,y:-89.9},4).to({scaleX:0.87},3).to({scaleX:1},3).to({x:1.4,y:34.6},17).to({scaleX:0.74},3).to({scaleX:1},4).to({x:118.1,y:25.1},17).to({scaleX:0.82},4).to({scaleX:1},4).to({rotation:-78.7,x:75.6,y:-49.2},21).to({scaleX:0.77,x:74.2,y:-45.7},4).to({scaleX:1,x:75.6,y:-49.2},4).to({rotation:-34.2,x:313.1,y:29.9,alpha:0.012},17).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.lipstik2_mc();
	this.instance_2.setTransform(329,191);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(241.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(271.5,206.3,0.51,0.51);

	this.instance_5 = new lib.rouge1_1_mc();
	this.instance_5.setTransform(-203.5,222.8,0.765,0.765);

	this.instance_6 = new lib.shadows2_1_mc();
	this.instance_6.setTransform(100.8,227.8,0.765,0.765);

	this.instance_7 = new lib.pincet_mc();
	this.instance_7.setTransform(-77.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(107));

	// animation
	this.instance_8 = new lib.table_mc();
	this.instance_8.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(107));

	// animation
	this.instance_9 = new lib.hero2_fringe0_mc();
	this.instance_9.setTransform(0.4,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(107));

	// animation
	this.instance_10 = new lib.volos2_mc();
	this.instance_10.setTransform(64.4,-93.7,0.68,0.68,0,7.5,-172.5);

	this.instance_11 = new lib.volos2_mc();
	this.instance_11.setTransform(71.2,-94.2,0.68,0.68,0,7.5,-172.5);

	this.instance_12 = new lib.volos2_mc();
	this.instance_12.setTransform(76,-91.6,0.68,0.68,0,34.8,-145.2);

	this.instance_13 = new lib.volos2_mc();
	this.instance_13.setTransform(80,-88.6,0.68,0.68,0,45.7,-134.3);

	this.instance_14 = new lib.volos2_mc();
	this.instance_14.setTransform(37.8,-89.2,0.68,0.68,0,-24.8,155.2);

	this.instance_15 = new lib.volos2_mc();
	this.instance_15.setTransform(29.6,-88,0.68,0.68,0,-24.8,155.2);

	this.instance_16 = new lib.volos2_mc();
	this.instance_16.setTransform(56.5,-92.4,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos2_mc();
	this.instance_17.setTransform(48.2,-92.9,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos2_mc();
	this.instance_18.setTransform(41.9,-92,0.68,0.68,0,-8.3,171.7);

	this.instance_19 = new lib.volos2_mc();
	this.instance_19.setTransform(32.8,-88.9,0.68,0.68,0,-8.3,171.7);

	this.instance_20 = new lib.volos2_mc();
	this.instance_20.setTransform(-64.1,-96.7,0.68,0.68,-7.5);

	this.instance_21 = new lib.volos2_mc();
	this.instance_21.setTransform(-68.6,-94.2,0.68,0.68,-7.5);

	this.instance_22 = new lib.volos2_mc();
	this.instance_22.setTransform(-72.4,-93.8,0.68,0.68,-34.8);

	this.instance_23 = new lib.volos2_mc();
	this.instance_23.setTransform(-76.4,-90.9,0.68,0.68,-45.7);

	this.instance_24 = new lib.volos2_mc();
	this.instance_24.setTransform(-35.2,-89.2,0.68,0.68,24.8);

	this.instance_25 = new lib.volos2_mc();
	this.instance_25.setTransform(-26.8,-87.2,0.68,0.68,24.8);

	this.instance_26 = new lib.volos2_mc();
	this.instance_26.setTransform(-53.9,-92.4,0.68,0.68,8.3);

	this.instance_27 = new lib.volos2_mc();
	this.instance_27.setTransform(-45.6,-92.9,0.68,0.68,8.3);

	this.instance_28 = new lib.volos2_mc();
	this.instance_28.setTransform(-39.3,-92,0.68,0.68,8.3);

	this.instance_29 = new lib.volos2_mc();
	this.instance_29.setTransform(-30.2,-88.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(107));

	// animation
	this.instance_30 = new lib.hero2_eyes0_mc();
	this.instance_30.setTransform(3.9,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(107));

	// animation
	this.instance_31 = new lib.hero1_ton_mc();
	this.instance_31.setTransform(6.6,-42.4,0.407,0.407);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(80).to({_off:false},0).to({scaleX:1,scaleY:1,x:6.1,y:-26.9},4).wait(23));

	// animation
	this.instance_32 = new lib.hero1_ton_mc();
	this.instance_32.setTransform(63.1,-4.5,0.552,0.552);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(51).to({_off:false},0).to({scaleX:1,scaleY:1,x:64.6,y:5.1},4).wait(52));

	// animation
	this.instance_33 = new lib.hero1_ton_mc();
	this.instance_33.setTransform(-53.5,1.6,0.437,0.437);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(27).to({_off:false},0).to({scaleX:1,scaleY:1,x:-50.6,y:11.6},4).wait(76));

	// animation
	this.instance_34 = new lib.hero1_ton_mc();
	this.instance_34.setTransform(7.6,-121.3,0.561,0.561);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:7.3,y:-110.4},3).wait(100));

	// animation
	this.instance_35 = new lib.hero2_lips0_mc();
	this.instance_35.setTransform(4,21.6);

	this.instance_36 = new lib.hero2_eyebrows0_1_mc();
	this.instance_36.setTransform(57.8,-87.9);

	this.instance_37 = new lib.hero2_eyebrows0_2_mc();
	this.instance_37.setTransform(-50.6,-95.9);

	this.instance_38 = new lib.hero2_head1_mc();
	this.instance_38.setTransform(0,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35}]}).wait(107));

	// animation
	this.instance_39 = new lib.h2_b_mc();
	this.instance_39.setTransform(1.3,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-204.3,800,579.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstik1_mc();
	this.instance.setTransform(61.8,100.1,0.737,0.737,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-28.4,x:22.4,y:80.5},6).to({x:34.4,y:75.5},8).to({x:50.6,y:83.5},9).to({x:37.6,y:88.5},8).to({x:16.6,y:80.5},9).to({x:245.6,y:143.5,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.hero1_eyelashes1_1_mc();
	this.instance_1.setTransform(59.8,-65.1);

	this.instance_2 = new lib.hero1_eyelashes1_1_mc();
	this.instance_2.setTransform(-57.1,-65.1,1,1,0,0,180);

	this.instance_3 = new lib.hero1_eyes0_mc();
	this.instance_3.setTransform(1.4,-55.4);

	this.instance_4 = new lib.hero1_shadows1_2_mc();
	this.instance_4.setTransform(-40.1,-62.6,1,1,0,0,180);

	this.instance_5 = new lib.hero1_shadows1_2_mc();
	this.instance_5.setTransform(43,-62.6);

	this.instance_6 = new lib.hero1_shadows0_1_mc();
	this.instance_6.setTransform(-64.6,-63,1,1,0,0,180);

	this.instance_7 = new lib.hero1_shadows0_1_mc();
	this.instance_7.setTransform(70.4,-63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(50));

	// animation
	this.instance_8 = new lib.hero1_fringe0_mc();
	this.instance_8.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// animation
	this.instance_9 = new lib.hero1_eyebrows0_1_mc();
	this.instance_9.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// animation
	this.instance_10 = new lib.hero1_eyebrows0_2_mc();
	this.instance_10.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// animation
	this.instance_11 = new lib.hero1_lips1_mc();
	this.instance_11.setTransform(1.4,22.2);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).to({alpha:1},34).wait(10));

	// animation
	this.instance_12 = new lib.hero1_lips0_mc();
	this.instance_12.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},49).wait(1));

	// animation
	this.instance_13 = new lib.hero1_head4_mc();
	this.instance_13.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// animation
	this.instance_14 = new lib.hero1_head3_mc();
	this.instance_14.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// animation
	this.instance_15 = new lib.hero1_head2_mc();
	this.instance_15.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// animation
	this.instance_16 = new lib.bm1_mc();
	this.instance_16.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175.6,-234.4,360,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-175.6,-234.4,382.7,591.3), new cjs.Rectangle(-175.6,-234.4,411.3,591.3), new cjs.Rectangle(-175.6,-234.4,440,591.3), new cjs.Rectangle(-175.6,-234.4,468.8,591.3), new cjs.Rectangle(-175.6,-234.4,360,591.3)];


(lib.animation1_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstik1_mc();
	this.instance.setTransform(331,191,0.737,0.737);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-21.7,x:61.8,y:100.1},14).wait(1));

	// animation
	this.instance_1 = new lib.table_mc();
	this.instance_1.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:432.5,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.hero1_eyelashes1_1_mc();
	this.instance_2.setTransform(59.8,-65.1);

	this.instance_3 = new lib.hero1_eyelashes1_1_mc();
	this.instance_3.setTransform(-57.1,-65.1,1,1,0,0,180);

	this.instance_4 = new lib.hero1_eyes0_mc();
	this.instance_4.setTransform(1.4,-55.4);

	this.instance_5 = new lib.hero1_shadows1_2_mc();
	this.instance_5.setTransform(-40.1,-62.6,1,1,0,0,180);

	this.instance_6 = new lib.hero1_shadows1_2_mc();
	this.instance_6.setTransform(43,-62.6);

	this.instance_7 = new lib.hero1_shadows0_1_mc();
	this.instance_7.setTransform(-64.6,-63,1,1,0,0,180);

	this.instance_8 = new lib.hero1_shadows0_1_mc();
	this.instance_8.setTransform(70.4,-63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// animation
	this.instance_9 = new lib.hero1_fringe0_mc();
	this.instance_9.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.hero1_eyebrows0_1_mc();
	this.instance_10.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.hero1_eyebrows0_2_mc();
	this.instance_11.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.hero1_lips0_mc();
	this.instance_12.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.hero1_head4_mc();
	this.instance_13.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.hero1_head3_mc();
	this.instance_14.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// animation
	this.instance_15 = new lib.hero1_head2_mc();
	this.instance_15.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

	// animation
	this.instance_16 = new lib.bm1_mc();
	this.instance_16.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-399,-234.4,800,597.6), new cjs.Rectangle(-399,-234.4,800,610.2), new cjs.Rectangle(-399,-234.4,800,622.8), new cjs.Rectangle(-399,-234.4,800,635.3), new cjs.Rectangle(-399,-234.4,800,648), new cjs.Rectangle(-399,-234.4,800,660.6), new cjs.Rectangle(-399,-234.4,800,673.2), new cjs.Rectangle(-399,-234.4,800,685.8), new cjs.Rectangle(-399,-234.4,800,698.5), new cjs.Rectangle(-175.6,-234.4,360,591.3)];


(lib.animation1_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka4_mc();
	this.instance.setTransform(96.2,-1.5,0.51,0.51,-79.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:124.7,y:-59.8},8).to({x:132.7,y:-70.8},11).to({x:124.7,y:-59.8},6).to({x:132.7,y:-70.8},11).to({rotation:-54.2,x:294.2,y:14.7,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.lipstik1_mc();
	this.instance_1.setTransform(331,191,0.737,0.737);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// animation
	this.instance_2 = new lib.table_mc();
	this.instance_2.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// animation
	this.instance_3 = new lib.hero1_eyelashes1_1_mc();
	this.instance_3.setTransform(59.8,-65.1);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1},28).wait(14));

	// animation
	this.instance_4 = new lib.hero1_eyelashes1_1_mc();
	this.instance_4.setTransform(-57.1,-65.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// animation
	this.instance_5 = new lib.hero1_eyes0_mc();
	this.instance_5.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// animation
	this.instance_6 = new lib.hero1_shadows1_2_mc();
	this.instance_6.setTransform(-40.1,-62.6,1,1,0,0,180);

	this.instance_7 = new lib.hero1_shadows1_2_mc();
	this.instance_7.setTransform(43,-62.6);

	this.instance_8 = new lib.hero1_shadows0_1_mc();
	this.instance_8.setTransform(-64.6,-63,1,1,0,0,180);

	this.instance_9 = new lib.hero1_shadows0_1_mc();
	this.instance_9.setTransform(70.4,-63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(50));

	// animation
	this.instance_10 = new lib.hero1_fringe0_mc();
	this.instance_10.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// animation
	this.instance_11 = new lib.hero1_eyebrows0_1_mc();
	this.instance_11.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// animation
	this.instance_12 = new lib.hero1_eyebrows0_2_mc();
	this.instance_12.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// animation
	this.instance_13 = new lib.hero1_lips0_mc();
	this.instance_13.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// animation
	this.instance_14 = new lib.hero1_head4_mc();
	this.instance_14.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// animation
	this.instance_15 = new lib.hero1_head3_mc();
	this.instance_15.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// animation
	this.instance_16 = new lib.hero1_head2_mc();
	this.instance_16.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// animation
	this.instance_17 = new lib.bm1_mc();
	this.instance_17.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka4_mc();
	this.instance.setTransform(2.7,-10.5,0.51,0.51,-96.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-14.3,y:-74.5},4).to({x:-17.3,y:-92.5},11).to({x:-14.3,y:-74.5},5).to({x:-17.3,y:-92.5},11).to({rotation:-79.1,x:96.2,y:-1.5},8).wait(1));

	// animation
	this.instance_1 = new lib.lipstik1_mc();
	this.instance_1.setTransform(331,191,0.737,0.737);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// animation
	this.instance_2 = new lib.table_mc();
	this.instance_2.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// animation
	this.instance_3 = new lib.hero1_eyelashes1_1_mc();
	this.instance_3.setTransform(-57.1,-65.1,1,1,0,0,180);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({alpha:1},27).wait(9));

	// animation
	this.instance_4 = new lib.hero1_eyes0_mc();
	this.instance_4.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// animation
	this.instance_5 = new lib.hero1_shadows1_2_mc();
	this.instance_5.setTransform(-40.1,-62.6,1,1,0,0,180);

	this.instance_6 = new lib.hero1_shadows1_2_mc();
	this.instance_6.setTransform(43,-62.6);

	this.instance_7 = new lib.hero1_shadows0_1_mc();
	this.instance_7.setTransform(-64.6,-63,1,1,0,0,180);

	this.instance_8 = new lib.hero1_shadows0_1_mc();
	this.instance_8.setTransform(70.4,-63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(40));

	// animation
	this.instance_9 = new lib.hero1_fringe0_mc();
	this.instance_9.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

	// animation
	this.instance_10 = new lib.hero1_eyebrows0_1_mc();
	this.instance_10.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40));

	// animation
	this.instance_11 = new lib.hero1_eyebrows0_2_mc();
	this.instance_11.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40));

	// animation
	this.instance_12 = new lib.hero1_lips0_mc();
	this.instance_12.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(40));

	// animation
	this.instance_13 = new lib.hero1_head4_mc();
	this.instance_13.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40));

	// animation
	this.instance_14 = new lib.hero1_head3_mc();
	this.instance_14.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(40));

	// animation
	this.instance_15 = new lib.hero1_head2_mc();
	this.instance_15.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(40));

	// animation
	this.instance_16 = new lib.bm1_mc();
	this.instance_16.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka3_mc();
	this.instance.setTransform(289.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(14));

	// animation
	this.instance_1 = new lib.podvodka4_mc();
	this.instance_1.setTransform(259.6,197.4,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-96.1,x:2.7,y:-10.5},14).wait(1));

	// animation
	this.instance_2 = new lib.lipstik1_mc();
	this.instance_2.setTransform(331,191,0.737,0.737);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.table_mc();
	this.instance_3.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.hero1_eyes0_mc();
	this.instance_4.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.hero1_shadows1_2_mc();
	this.instance_5.setTransform(-40.1,-62.6,1,1,0,0,180);

	this.instance_6 = new lib.hero1_shadows1_2_mc();
	this.instance_6.setTransform(43,-62.6);

	this.instance_7 = new lib.hero1_shadows0_1_mc();
	this.instance_7.setTransform(-64.6,-63,1,1,0,0,180);

	this.instance_8 = new lib.hero1_shadows0_1_mc();
	this.instance_8.setTransform(70.4,-63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(15));

	// animation
	this.instance_9 = new lib.hero1_fringe0_mc();
	this.instance_9.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.hero1_eyebrows0_1_mc();
	this.instance_10.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.hero1_eyebrows0_2_mc();
	this.instance_11.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.hero1_lips0_mc();
	this.instance_12.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.hero1_head4_mc();
	this.instance_13.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.hero1_head3_mc();
	this.instance_14.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// animation
	this.instance_15 = new lib.hero1_head2_mc();
	this.instance_15.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

	// animation
	this.instance_16 = new lib.bm1_mc();
	this.instance_16.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(265.9,49.4,1,1,-150.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-188.5,x:226.9,y:44.4},3).to({rotation:-150.2,x:265.9,y:49.4},3).to({rotation:-188.5,x:226.9,y:44.4},3).to({rotation:-150.2,x:265.9,y:49.4},3).to({rotation:-52.5,x:10.9,y:-17.6},11).to({x:-9.1,y:-46.6},7).to({x:-20.1,y:-13},6).to({x:9.9,y:-20},6).to({rotation:-150.2,x:265.9,y:49.4},10).to({rotation:-188.5,x:226.9,y:44.4},3).to({rotation:-150.2,x:265.9,y:49.4},3).to({rotation:-188.5,x:226.9,y:44.4},3).to({rotation:-150.2,x:265.9,y:49.4},3).to({rotation:-44,x:62.7,y:-7.6},13).to({x:71.2,y:-45.2},9).to({x:58.2,y:-5.2},8).to({x:85.2,y:-15.2},8).to({x:419.2,y:-32.5,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.shadows1_1_mc();
	this.instance_1.setTransform(168.9,78.7,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({y:247.7,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.lipstik1_mc();
	this.instance_2.setTransform(331,191,0.737,0.737);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(259.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(289.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(115));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115));

	// animation
	this.instance_6 = new lib.hero1_eyes_closed_mc();
	this.instance_6.setTransform(1.4,-55.4);

	this.instance_7 = new lib.hero1_eyes0_mc();
	this.instance_7.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},114).wait(1));

	// animation
	this.instance_8 = new lib.hero1_shadows1_2_mc();
	this.instance_8.setTransform(-40.1,-62.6,1,1,0,0,180);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(23).to({_off:false},0).to({alpha:1},19).wait(73));

	// animation
	this.instance_9 = new lib.hero1_shadows1_2_mc();
	this.instance_9.setTransform(43,-62.6);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(77).to({_off:false},0).to({alpha:1},25).wait(13));

	// animation
	this.instance_10 = new lib.hero1_shadows0_1_mc();
	this.instance_10.setTransform(-64.6,-63,1,1,0,0,180);

	this.instance_11 = new lib.hero1_shadows0_1_mc();
	this.instance_11.setTransform(70.4,-63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(115));

	// animation
	this.instance_12 = new lib.hero1_fringe0_mc();
	this.instance_12.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(115));

	// animation
	this.instance_13 = new lib.hero1_eyebrows0_1_mc();
	this.instance_13.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(115));

	// animation
	this.instance_14 = new lib.hero1_eyebrows0_2_mc();
	this.instance_14.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(115));

	// animation
	this.instance_15 = new lib.hero1_lips0_mc();
	this.instance_15.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(115));

	// animation
	this.instance_16 = new lib.hero1_head4_mc();
	this.instance_16.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(115));

	// animation
	this.instance_17 = new lib.hero1_head3_mc();
	this.instance_17.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(115));

	// animation
	this.instance_18 = new lib.hero1_head2_mc();
	this.instance_18.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(115));

	// animation
	this.instance_19 = new lib.bm1_mc();
	this.instance_19.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399,-234.4,810,591.3), new cjs.Rectangle(-399,-234.4,840.4,591.3), new cjs.Rectangle(-399,-234.4,871,591.3), new cjs.Rectangle(-399,-234.4,800,591.3)];


(lib.animation1_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(207,32.4,1,1,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-153,x:125,y:45.4},4).to({rotation:-182,x:104.5,y:42.4},2).to({rotation:-153,x:125,y:45.4},2).to({rotation:-182,x:104.5,y:42.4},2).to({rotation:-57.7,x:-13.5,y:-69},10).to({rotation:-91.6,x:-26.2,y:-58.2},5).to({x:-5.2,y:-43.2},5).to({x:-14.2,y:-82.2},6).to({rotation:-153,x:125,y:45.4},11).to({rotation:-182,x:104.5,y:42.4},3).to({rotation:-153,x:125,y:45.4},2).to({rotation:-182,x:104.5,y:42.4},2).to({rotation:-44.2,x:90.5,y:-4.6},11).to({rotation:-44.2,x:95.9,y:-52.6},8).to({x:113.9,y:-33.6},5).to({x:95.9,y:-4.6},7).to({rotation:-150.2,x:265.9,y:49.4},10).wait(1));

	// animation
	this.instance_1 = new lib.shadows1_1_mc();
	this.instance_1.setTransform(168.9,78.7,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96));

	// animation
	this.instance_2 = new lib.lipstik1_mc();
	this.instance_2.setTransform(331,191,0.737,0.737);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(259.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(289.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(96));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(96));

	// animation
	this.instance_6 = new lib.hero1_eyes_closed_mc();
	this.instance_6.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(96));

	// animation
	this.instance_7 = new lib.hero1_shadows0_1_mc();
	this.instance_7.setTransform(-64.6,-63,1,1,0,0,180);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({alpha:1},16).wait(60));

	// animation
	this.instance_8 = new lib.hero1_shadows0_1_mc();
	this.instance_8.setTransform(70.4,-63);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65).to({_off:false},0).to({alpha:1},20).wait(11));

	// animation
	this.instance_9 = new lib.hero1_fringe0_mc();
	this.instance_9.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(96));

	// animation
	this.instance_10 = new lib.hero1_eyebrows0_1_mc();
	this.instance_10.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(96));

	// animation
	this.instance_11 = new lib.hero1_eyebrows0_2_mc();
	this.instance_11.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(96));

	// animation
	this.instance_12 = new lib.hero1_lips0_mc();
	this.instance_12.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(96));

	// animation
	this.instance_13 = new lib.hero1_head4_mc();
	this.instance_13.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(96));

	// animation
	this.instance_14 = new lib.hero1_head3_mc();
	this.instance_14.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(96));

	// animation
	this.instance_15 = new lib.hero1_head2_mc();
	this.instance_15.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(96));

	// animation
	this.instance_16 = new lib.bm1_mc();
	this.instance_16.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush1_mc();
	this.instance.setTransform(456,9.4,1,1,-42.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-132,x:207,y:32.4,alpha:1},14).wait(1));

	// animation
	this.instance_1 = new lib.shadows1_1_mc();
	this.instance_1.setTransform(125.8,227.8,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:168.9,y:78.7},14).wait(1));

	// animation
	this.instance_2 = new lib.lipstik1_mc();
	this.instance_2.setTransform(331,191,0.737,0.737);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(259.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(289.5,206.3,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.hero1_eyes0_mc();
	this.instance_6.setTransform(1.4,-55.4);

	this.instance_7 = new lib.hero1_eyes_closed_mc();
	this.instance_7.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},14).wait(1));

	// animation
	this.instance_8 = new lib.hero1_fringe0_mc();
	this.instance_8.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.hero1_eyebrows0_1_mc();
	this.instance_9.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.hero1_eyebrows0_2_mc();
	this.instance_10.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.hero1_lips0_mc();
	this.instance_11.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.hero1_head4_mc();
	this.instance_12.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.hero1_head3_mc();
	this.instance_13.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.hero1_head2_mc();
	this.instance_14.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// animation
	this.instance_15 = new lib.bm1_mc();
	this.instance_15.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,907,591.3);
p.frameBounds = [rect, new cjs.Rectangle(-399,-234.4,892.6,591.3), new cjs.Rectangle(-399,-234.4,877.7,591.3), new cjs.Rectangle(-399,-234.4,862,591.3), new cjs.Rectangle(-399,-234.4,845.6,591.3), new cjs.Rectangle(-399,-234.4,828.3,591.3), new cjs.Rectangle(-399,-234.4,810.4,591.3), rect=new cjs.Rectangle(-399,-234.4,800,591.3), rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pincet_mc();
	this.instance.setTransform(54.3,-166.6,0.719,0.719,-42.9,0,0,96.5,25.3);

	this.instance_1 = new lib.pincet2_mc();
	this.instance_1.setTransform(61.6,-166.1,0.719,0.719,-42.9,0,0,96.5,25.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:61.6,y:-166.1},3).to({_off:false,x:71.6,y:-168.1},3).to({_off:true,x:78.6,y:-169.4},3).to({_off:false,x:86.3,y:-171.4},3).to({_off:true,x:94.7,y:-169.6},3).to({_off:false,x:99.2,y:-169.4},3).to({_off:true,x:109.8,y:-165.1},3).to({_off:false,x:111.8,y:-164.1},3).to({regY:25.2,rotation:13.3,x:232.2,y:-154.6,alpha:0.012},10).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},3).to({_off:true,x:71.6,y:-168.1},3).to({_off:false,x:78.6,y:-169.4},3).to({_off:true,x:86.3,y:-171.4},3).to({_off:false,x:94.7,y:-169.6},3).to({_off:true,x:99.2,y:-169.4},3).to({_off:false,x:109.8,y:-165.1},3).to({_off:true,x:111.8,y:-164.1},3).wait(12));

	// animation
	this.instance_2 = new lib.lipstik1_mc();
	this.instance_2.setTransform(331,191,0.737,0.737);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(259.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(289.5,206.3,0.51,0.51);

	this.instance_5 = new lib.shadows1_1_mc();
	this.instance_5.setTransform(125.8,227.8,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(36));

	// animation
	this.instance_6 = new lib.table_mc();
	this.instance_6.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36));

	// animation
	this.instance_7 = new lib.hero1_eyes0_mc();
	this.instance_7.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36));

	// animation
	this.instance_8 = new lib.hero1_fringe0_mc();
	this.instance_8.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36));

	// animation
	this.instance_9 = new lib.volos_mc();
	this.instance_9.setTransform(66.7,-105.7,0.68,0.68,0,7.5,-172.5);

	this.instance_10 = new lib.volos_mc();
	this.instance_10.setTransform(71.2,-103.2,0.68,0.68,0,7.5,-172.5);

	this.instance_11 = new lib.volos_mc();
	this.instance_11.setTransform(75,-102.8,0.68,0.68,0,34.8,-145.2);

	this.instance_12 = new lib.volos_mc();
	this.instance_12.setTransform(79,-99.9,0.68,0.68,0,45.7,-134.3);

	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(37.8,-98.2,0.68,0.68,0,-24.8,155.2);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(29.6,-97,0.68,0.68,0,-24.8,155.2);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(56.5,-101.4,0.68,0.68,0,-8.3,171.7);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(48.2,-101.9,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(41.9,-101,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(32.8,-97.9,0.68,0.68,0,-8.3,171.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17,p:{x:41.9,y:-101}},{t:this.instance_16,p:{x:48.2,y:-101.9}},{t:this.instance_15,p:{x:56.5,y:-101.4}},{t:this.instance_14,p:{skewX:-24.8,skewY:155.2,x:29.6,y:-97}},{t:this.instance_13,p:{skewX:-24.8,skewY:155.2,x:37.8,y:-98.2}},{t:this.instance_12},{t:this.instance_11,p:{skewX:34.8,skewY:-145.2,x:75,y:-102.8}},{t:this.instance_10,p:{skewX:7.5,skewY:-172.5,x:71.2,y:-103.2}},{t:this.instance_9,p:{x:66.7,y:-105.7,skewX:7.5,skewY:-172.5}}]}).to({state:[{t:this.instance_17,p:{x:32.8,y:-97.9}},{t:this.instance_16,p:{x:41.9,y:-101}},{t:this.instance_15,p:{x:48.2,y:-101.9}},{t:this.instance_14,p:{skewX:-8.3,skewY:171.7,x:56.5,y:-101.4}},{t:this.instance_13,p:{skewX:-24.8,skewY:155.2,x:37.8,y:-98.2}},{t:this.instance_12},{t:this.instance_11,p:{skewX:34.8,skewY:-145.2,x:75,y:-102.8}},{t:this.instance_10,p:{skewX:7.5,skewY:-172.5,x:71.2,y:-103.2}},{t:this.instance_9,p:{x:66.7,y:-105.7,skewX:7.5,skewY:-172.5}}]},1).to({state:[{t:this.instance_15,p:{x:41.9,y:-101}},{t:this.instance_14,p:{skewX:-8.3,skewY:171.7,x:48.2,y:-101.9}},{t:this.instance_13,p:{skewX:-8.3,skewY:171.7,x:56.5,y:-101.4}},{t:this.instance_12},{t:this.instance_11,p:{skewX:34.8,skewY:-145.2,x:75,y:-102.8}},{t:this.instance_10,p:{skewX:7.5,skewY:-172.5,x:71.2,y:-103.2}},{t:this.instance_9,p:{x:66.7,y:-105.7,skewX:7.5,skewY:-172.5}}]},2).to({state:[{t:this.instance_14,p:{skewX:-8.3,skewY:171.7,x:48.2,y:-101.9}},{t:this.instance_13,p:{skewX:-8.3,skewY:171.7,x:56.5,y:-101.4}},{t:this.instance_12},{t:this.instance_11,p:{skewX:34.8,skewY:-145.2,x:75,y:-102.8}},{t:this.instance_10,p:{skewX:7.5,skewY:-172.5,x:71.2,y:-103.2}},{t:this.instance_9,p:{x:66.7,y:-105.7,skewX:7.5,skewY:-172.5}}]},2).to({state:[{t:this.instance_13,p:{skewX:-8.3,skewY:171.7,x:56.5,y:-101.4}},{t:this.instance_12},{t:this.instance_11,p:{skewX:34.8,skewY:-145.2,x:75,y:-102.8}},{t:this.instance_10,p:{skewX:7.5,skewY:-172.5,x:71.2,y:-103.2}},{t:this.instance_9,p:{x:66.7,y:-105.7,skewX:7.5,skewY:-172.5}}]},2).to({state:[{t:this.instance_12},{t:this.instance_11,p:{skewX:34.8,skewY:-145.2,x:75,y:-102.8}},{t:this.instance_10,p:{skewX:7.5,skewY:-172.5,x:71.2,y:-103.2}},{t:this.instance_9,p:{x:66.7,y:-105.7,skewX:7.5,skewY:-172.5}}]},3).to({state:[{t:this.instance_11,p:{skewX:45.7,skewY:-134.3,x:79,y:-99.9}},{t:this.instance_10,p:{skewX:34.8,skewY:-145.2,x:75,y:-102.8}},{t:this.instance_9,p:{x:71.2,y:-103.2,skewX:7.5,skewY:-172.5}}]},4).to({state:[{t:this.instance_10,p:{skewX:45.7,skewY:-134.3,x:79,y:-99.9}},{t:this.instance_9,p:{x:75,y:-102.8,skewX:34.8,skewY:-145.2}}]},4).to({state:[{t:this.instance_9,p:{x:79,y:-99.9,skewX:45.7,skewY:-134.3}}]},2).to({state:[]},3).wait(13));

	// animation
	this.instance_19 = new lib.hero1_eyebrows0_1_mc();
	this.instance_19.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(36));

	// animation
	this.instance_20 = new lib.hero1_eyebrows0_2_mc();
	this.instance_20.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(36));

	// animation
	this.instance_21 = new lib.hero1_lips0_mc();
	this.instance_21.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(36));

	// animation
	this.instance_22 = new lib.hero1_head4_mc();
	this.instance_22.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(36));

	// animation
	this.instance_23 = new lib.hero1_head3_mc();
	this.instance_23.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(36));

	// animation
	this.instance_24 = new lib.hero1_head2_mc();
	this.instance_24.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(36));

	// animation
	this.instance_25 = new lib.bm1_mc();
	this.instance_25.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-254.7,800,611.6);
p.frameBounds = [rect, new cjs.Rectangle(-399,-236.3,800,593.2), new cjs.Rectangle(-399,-236.1,800,593), new cjs.Rectangle(-399,-254.2,800,611.1), new cjs.Rectangle(-399,-236.4,800,593.2), new cjs.Rectangle(-399,-237.1,800,593.9), new cjs.Rectangle(-399,-256.2,800,613.1), new cjs.Rectangle(-399,-238.4,800,595.2), new cjs.Rectangle(-399,-238.8,800,595.7), new cjs.Rectangle(-399,-257.5,800,614.3), new cjs.Rectangle(-399,-239.7,800,596.5), new cjs.Rectangle(-399,-240.4,800,597.2), new cjs.Rectangle(-399,-259.5,800,616.3), new cjs.Rectangle(-399,-240.6,800,597.5), new cjs.Rectangle(-399,-240.1,800,596.9), new cjs.Rectangle(-399,-257.7,800,614.6), new cjs.Rectangle(-399,-239.2,800,596), new cjs.Rectangle(-399,-239.1,800,596), new cjs.Rectangle(-399,-257.5,800,614.3), new cjs.Rectangle(-399,-237.9,800,594.7), new cjs.Rectangle(-399,-236.4,800,593.3), new cjs.Rectangle(-399,-253.2,800,610.1), rect=new cjs.Rectangle(-399,-234.4,800,591.3), rect, new cjs.Rectangle(-399,-252.2,800,609.1), rect=new cjs.Rectangle(-399,-234.4,800,591.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pincet_mc();
	this.instance.setTransform(6.6,-165.6,0.719,0.719,-42.9,0,0,96.5,25.3);

	this.instance_1 = new lib.pincet2_mc();
	this.instance_1.setTransform(-8.8,-168.6,0.719,0.719,-41.5,0,0,96.5,25.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:-41.5,x:-8.8,y:-168.6},3).to({_off:false,rotation:-42.9,x:-15.1},3).to({_off:true,rotation:-41.5,x:-28.1,y:-172.6},3).to({_off:false,rotation:-42.9,x:-36.1},4).to({_off:true,rotation:-41.5,x:-45.2,y:-173.7},3).to({_off:false,rotation:-42.9,x:-55.5,y:-165.6},3).to({x:54.3,y:-166.6},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},3).to({_off:true,rotation:-42.9,x:-15.1},3).to({_off:false,rotation:-41.5,x:-28.1,y:-172.6},3).to({_off:true,rotation:-42.9,x:-36.1},4).to({_off:false,rotation:-41.5,x:-45.2,y:-173.7},3).to({_off:true,rotation:-42.9,x:-55.5,y:-165.6},3).wait(11));

	// animation
	this.instance_2 = new lib.lipstik1_mc();
	this.instance_2.setTransform(331,191,0.737,0.737);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(259.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(289.5,206.3,0.51,0.51);

	this.instance_5 = new lib.shadows1_1_mc();
	this.instance_5.setTransform(125.8,227.8,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(30));

	// animation
	this.instance_6 = new lib.table_mc();
	this.instance_6.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// animation
	this.instance_7 = new lib.hero1_eyes0_mc();
	this.instance_7.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// animation
	this.instance_8 = new lib.hero1_fringe0_mc();
	this.instance_8.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30));

	// animation
	this.instance_9 = new lib.volos_mc();
	this.instance_9.setTransform(66.7,-105.7,0.68,0.68,0,7.5,-172.5);

	this.instance_10 = new lib.volos_mc();
	this.instance_10.setTransform(71.2,-103.2,0.68,0.68,0,7.5,-172.5);

	this.instance_11 = new lib.volos_mc();
	this.instance_11.setTransform(75,-102.8,0.68,0.68,0,34.8,-145.2);

	this.instance_12 = new lib.volos_mc();
	this.instance_12.setTransform(79,-99.9,0.68,0.68,0,45.7,-134.3);

	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(37.8,-98.2,0.68,0.68,0,-24.8,155.2);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(29.6,-97,0.68,0.68,0,-24.8,155.2);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(56.5,-101.4,0.68,0.68,0,-8.3,171.7);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(48.2,-101.9,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(41.9,-101,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(32.8,-97.9,0.68,0.68,0,-8.3,171.7);

	this.instance_19 = new lib.volos_mc();
	this.instance_19.setTransform(-64.1,-105.7,0.68,0.68,-7.5);

	this.instance_20 = new lib.volos_mc();
	this.instance_20.setTransform(-68.6,-103.2,0.68,0.68,-7.5);

	this.instance_21 = new lib.volos_mc();
	this.instance_21.setTransform(-72.4,-102.8,0.68,0.68,-34.8);

	this.instance_22 = new lib.volos_mc();
	this.instance_22.setTransform(-76.4,-99.9,0.68,0.68,-45.7);

	this.instance_23 = new lib.volos_mc();
	this.instance_23.setTransform(-35.2,-98.2,0.68,0.68,24.8);

	this.instance_24 = new lib.volos_mc();
	this.instance_24.setTransform(-27,-97,0.68,0.68,24.8);

	this.instance_25 = new lib.volos_mc();
	this.instance_25.setTransform(-53.9,-101.4,0.68,0.68,8.3);

	this.instance_26 = new lib.volos_mc();
	this.instance_26.setTransform(-45.6,-101.9,0.68,0.68,8.3);

	this.instance_27 = new lib.volos_mc();
	this.instance_27.setTransform(-39.3,-101,0.68,0.68,8.3);

	this.instance_28 = new lib.volos_mc();
	this.instance_28.setTransform(-30.2,-97.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27,p:{x:-39.3,y:-101}},{t:this.instance_26,p:{x:-45.6,y:-101.9}},{t:this.instance_25,p:{x:-53.9,y:-101.4}},{t:this.instance_24,p:{rotation:24.8,x:-27,y:-97}},{t:this.instance_23,p:{rotation:24.8,x:-35.2,y:-98.2}},{t:this.instance_22},{t:this.instance_21,p:{rotation:-34.8,x:-72.4,y:-102.8}},{t:this.instance_20,p:{rotation:-7.5,x:-68.6,y:-103.2}},{t:this.instance_19,p:{x:-64.1,y:-105.7,rotation:-7.5}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).to({state:[{t:this.instance_27,p:{x:-30.2,y:-97.9}},{t:this.instance_26,p:{x:-39.3,y:-101}},{t:this.instance_25,p:{x:-45.6,y:-101.9}},{t:this.instance_24,p:{rotation:8.3,x:-53.9,y:-101.4}},{t:this.instance_23,p:{rotation:24.8,x:-35.2,y:-98.2}},{t:this.instance_22},{t:this.instance_21,p:{rotation:-34.8,x:-72.4,y:-102.8}},{t:this.instance_20,p:{rotation:-7.5,x:-68.6,y:-103.2}},{t:this.instance_19,p:{x:-64.1,y:-105.7,rotation:-7.5}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},2).to({state:[{t:this.instance_26,p:{x:-39.3,y:-101}},{t:this.instance_25,p:{x:-45.6,y:-101.9}},{t:this.instance_24,p:{rotation:8.3,x:-53.9,y:-101.4}},{t:this.instance_23,p:{rotation:24.8,x:-35.2,y:-98.2}},{t:this.instance_22},{t:this.instance_21,p:{rotation:-34.8,x:-72.4,y:-102.8}},{t:this.instance_20,p:{rotation:-7.5,x:-68.6,y:-103.2}},{t:this.instance_19,p:{x:-64.1,y:-105.7,rotation:-7.5}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_24,p:{rotation:8.3,x:-45.6,y:-101.9}},{t:this.instance_23,p:{rotation:8.3,x:-53.9,y:-101.4}},{t:this.instance_22},{t:this.instance_21,p:{rotation:-34.8,x:-72.4,y:-102.8}},{t:this.instance_20,p:{rotation:-7.5,x:-68.6,y:-103.2}},{t:this.instance_19,p:{x:-64.1,y:-105.7,rotation:-7.5}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},2).to({state:[{t:this.instance_23,p:{rotation:8.3,x:-53.9,y:-101.4}},{t:this.instance_22},{t:this.instance_21,p:{rotation:-34.8,x:-72.4,y:-102.8}},{t:this.instance_20,p:{rotation:-7.5,x:-68.6,y:-103.2}},{t:this.instance_19,p:{x:-64.1,y:-105.7,rotation:-7.5}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},2).to({state:[{t:this.instance_22},{t:this.instance_21,p:{rotation:-34.8,x:-72.4,y:-102.8}},{t:this.instance_20,p:{rotation:-7.5,x:-68.6,y:-103.2}},{t:this.instance_19,p:{x:-64.1,y:-105.7,rotation:-7.5}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},2).to({state:[{t:this.instance_21,p:{rotation:-45.7,x:-76.4,y:-99.9}},{t:this.instance_20,p:{rotation:-34.8,x:-72.4,y:-102.8}},{t:this.instance_19,p:{x:-68.6,y:-103.2,rotation:-7.5}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},3).to({state:[{t:this.instance_20,p:{rotation:-45.7,x:-76.4,y:-99.9}},{t:this.instance_19,p:{x:-72.4,y:-102.8,rotation:-34.8}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},2).to({state:[{t:this.instance_19,p:{x:-76.4,y:-99.9,rotation:-45.7}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},2).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},2).wait(12));

	// animation
	this.instance_29 = new lib.hero1_eyebrows0_1_mc();
	this.instance_29.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(30));

	// animation
	this.instance_30 = new lib.hero1_eyebrows0_2_mc();
	this.instance_30.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(30));

	// animation
	this.instance_31 = new lib.hero1_lips0_mc();
	this.instance_31.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(30));

	// animation
	this.instance_32 = new lib.hero1_head4_mc();
	this.instance_32.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(30));

	// animation
	this.instance_33 = new lib.hero1_head3_mc();
	this.instance_33.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(30));

	// animation
	this.instance_34 = new lib.hero1_head2_mc();
	this.instance_34.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(30));

	// animation
	this.instance_35 = new lib.bm1_mc();
	this.instance_35.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-253.7,800,610.6);
p.frameBounds = [rect, new cjs.Rectangle(-399,-236.3,800,593.1), new cjs.Rectangle(-399,-236.9,800,593.8), new cjs.Rectangle(-399,-256.3,800,613.1), new cjs.Rectangle(-399,-237.8,800,594.6), new cjs.Rectangle(-399,-237.9,800,594.8), new cjs.Rectangle(-399,-256.7,800,613.6), new cjs.Rectangle(-399,-239.5,800,596.4), new cjs.Rectangle(-399,-240.6,800,597.4), new cjs.Rectangle(-399,-260.3,800,617.1), new cjs.Rectangle(-399,-241.7,800,598.5), new cjs.Rectangle(-399,-241.8,800,598.7), new cjs.Rectangle(-399,-242.1,800,598.9), new cjs.Rectangle(-399,-260.7,800,617.6), new cjs.Rectangle(-399,-242.5,800,599.4), new cjs.Rectangle(-399,-242.6,800,599.5), new cjs.Rectangle(-399,-261.4,800,618.2), new cjs.Rectangle(-399,-240.2,800,597), new cjs.Rectangle(-399,-237.7,800,594.5), new cjs.Rectangle(-399,-253.7,800,610.6), new cjs.Rectangle(-399,-235.6,800,592.5), new cjs.Rectangle(-399,-235.7,800,592.6), new cjs.Rectangle(-399,-235.8,800,592.7), new cjs.Rectangle(-399,-235.9,800,592.8), new cjs.Rectangle(-399,-236,800,592.9), new cjs.Rectangle(-399,-236.1,800,593), new cjs.Rectangle(-399,-236.2,800,593.1), new cjs.Rectangle(-399,-236.3,800,593.2), new cjs.Rectangle(-399,-236.4,800,593.3), new cjs.Rectangle(-399,-254.7,800,611.6)];


(lib.animation1_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pincet_mc();
	this.instance.setTransform(-33.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-42.9,x:6.6,y:-165.6},14).wait(1));

	// animation
	this.instance_1 = new lib.lipstik1_mc();
	this.instance_1.setTransform(331,191,0.737,0.737);

	this.instance_2 = new lib.podvodka4_mc();
	this.instance_2.setTransform(259.6,197.4,0.51,0.51);

	this.instance_3 = new lib.podvodka3_mc();
	this.instance_3.setTransform(289.5,206.3,0.51,0.51);

	this.instance_4 = new lib.shadows1_1_mc();
	this.instance_4.setTransform(125.8,227.8,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(15));

	// animation
	this.instance_5 = new lib.table_mc();
	this.instance_5.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.hero1_eyes0_mc();
	this.instance_6.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.hero1_fringe0_mc();
	this.instance_7.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.volos_mc();
	this.instance_8.setTransform(66.7,-105.7,0.68,0.68,0,7.5,-172.5);

	this.instance_9 = new lib.volos_mc();
	this.instance_9.setTransform(71.2,-103.2,0.68,0.68,0,7.5,-172.5);

	this.instance_10 = new lib.volos_mc();
	this.instance_10.setTransform(75,-102.8,0.68,0.68,0,34.8,-145.2);

	this.instance_11 = new lib.volos_mc();
	this.instance_11.setTransform(79,-99.9,0.68,0.68,0,45.7,-134.3);

	this.instance_12 = new lib.volos_mc();
	this.instance_12.setTransform(37.8,-98.2,0.68,0.68,0,-24.8,155.2);

	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(29.6,-97,0.68,0.68,0,-24.8,155.2);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(56.5,-101.4,0.68,0.68,0,-8.3,171.7);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(48.2,-101.9,0.68,0.68,0,-8.3,171.7);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(41.9,-101,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(32.8,-97.9,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(-64.1,-105.7,0.68,0.68,-7.5);

	this.instance_19 = new lib.volos_mc();
	this.instance_19.setTransform(-68.6,-103.2,0.68,0.68,-7.5);

	this.instance_20 = new lib.volos_mc();
	this.instance_20.setTransform(-72.4,-102.8,0.68,0.68,-34.8);

	this.instance_21 = new lib.volos_mc();
	this.instance_21.setTransform(-76.4,-99.9,0.68,0.68,-45.7);

	this.instance_22 = new lib.volos_mc();
	this.instance_22.setTransform(-35.2,-98.2,0.68,0.68,24.8);

	this.instance_23 = new lib.volos_mc();
	this.instance_23.setTransform(-27,-97,0.68,0.68,24.8);

	this.instance_24 = new lib.volos_mc();
	this.instance_24.setTransform(-53.9,-101.4,0.68,0.68,8.3);

	this.instance_25 = new lib.volos_mc();
	this.instance_25.setTransform(-45.6,-101.9,0.68,0.68,8.3);

	this.instance_26 = new lib.volos_mc();
	this.instance_26.setTransform(-39.3,-101,0.68,0.68,8.3);

	this.instance_27 = new lib.volos_mc();
	this.instance_27.setTransform(-30.2,-97.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(15));

	// animation
	this.instance_28 = new lib.hero1_eyebrows0_1_mc();
	this.instance_28.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(15));

	// animation
	this.instance_29 = new lib.hero1_eyebrows0_2_mc();
	this.instance_29.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(15));

	// animation
	this.instance_30 = new lib.hero1_lips0_mc();
	this.instance_30.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(15));

	// animation
	this.instance_31 = new lib.hero1_head4_mc();
	this.instance_31.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(15));

	// animation
	this.instance_32 = new lib.hero1_head3_mc();
	this.instance_32.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(15));

	// animation
	this.instance_33 = new lib.hero1_head2_mc();
	this.instance_33.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(15));

	// animation
	this.instance_34 = new lib.bm1_mc();
	this.instance_34.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399,-253.7,800,610.6)];


(lib.animation1_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush3_mc();
	this.instance.setTransform(-193,56.4,0.633,0.633,137.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:207.7,x:-112.2},3).to({rotation:162,x:-152.2,y:54.7},3).to({rotation:207.7,x:-112.2,y:56.4},3).to({rotation:162,x:-152.2,y:54.7},4).to({rotation:45.2,x:-104.4,y:23.7},14).to({rotation:19.3,x:-66.4,y:44},8).to({rotation:45.2,x:-104.4,y:23.7},8).to({rotation:-35.2,x:85,y:45.9},16).to({rotation:-72.2,x:119.1,y:-4.1},8).to({rotation:-35.2,x:85,y:45.9},8).to({x:328,y:76.3,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.rouge1_1_mc();
	this.instance_1.setTransform(-137.4,84.3,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({x:-437.2,y:172.3,alpha:0.012},18).to({_off:true},1).wait(59));

	// animation
	this.instance_2 = new lib.lipstik1_mc();
	this.instance_2.setTransform(331,191,0.737,0.737);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(259.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(289.5,206.3,0.51,0.51);

	this.instance_5 = new lib.shadows1_1_mc();
	this.instance_5.setTransform(125.8,227.8,0.765,0.765);

	this.instance_6 = new lib.pincet_mc();
	this.instance_6.setTransform(-33.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(91));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(91));

	// animation
	this.instance_8 = new lib.hero1_eyes0_mc();
	this.instance_8.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(91));

	// animation
	this.instance_9 = new lib.hero1_fringe0_mc();
	this.instance_9.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(91));

	// animation
	this.instance_10 = new lib.volos_mc();
	this.instance_10.setTransform(66.7,-105.7,0.68,0.68,0,7.5,-172.5);

	this.instance_11 = new lib.volos_mc();
	this.instance_11.setTransform(71.2,-103.2,0.68,0.68,0,7.5,-172.5);

	this.instance_12 = new lib.volos_mc();
	this.instance_12.setTransform(75,-102.8,0.68,0.68,0,34.8,-145.2);

	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(79,-99.9,0.68,0.68,0,45.7,-134.3);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(37.8,-98.2,0.68,0.68,0,-24.8,155.2);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(29.6,-97,0.68,0.68,0,-24.8,155.2);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(56.5,-101.4,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(48.2,-101.9,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(41.9,-101,0.68,0.68,0,-8.3,171.7);

	this.instance_19 = new lib.volos_mc();
	this.instance_19.setTransform(32.8,-97.9,0.68,0.68,0,-8.3,171.7);

	this.instance_20 = new lib.volos_mc();
	this.instance_20.setTransform(-64.1,-105.7,0.68,0.68,-7.5);

	this.instance_21 = new lib.volos_mc();
	this.instance_21.setTransform(-68.6,-103.2,0.68,0.68,-7.5);

	this.instance_22 = new lib.volos_mc();
	this.instance_22.setTransform(-72.4,-102.8,0.68,0.68,-34.8);

	this.instance_23 = new lib.volos_mc();
	this.instance_23.setTransform(-76.4,-99.9,0.68,0.68,-45.7);

	this.instance_24 = new lib.volos_mc();
	this.instance_24.setTransform(-35.2,-98.2,0.68,0.68,24.8);

	this.instance_25 = new lib.volos_mc();
	this.instance_25.setTransform(-27,-97,0.68,0.68,24.8);

	this.instance_26 = new lib.volos_mc();
	this.instance_26.setTransform(-53.9,-101.4,0.68,0.68,8.3);

	this.instance_27 = new lib.volos_mc();
	this.instance_27.setTransform(-45.6,-101.9,0.68,0.68,8.3);

	this.instance_28 = new lib.volos_mc();
	this.instance_28.setTransform(-39.3,-101,0.68,0.68,8.3);

	this.instance_29 = new lib.volos_mc();
	this.instance_29.setTransform(-30.2,-97.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(91));

	// animation
	this.instance_30 = new lib.hero1_eyebrows0_1_mc();
	this.instance_30.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(91));

	// animation
	this.instance_31 = new lib.hero1_eyebrows0_2_mc();
	this.instance_31.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(91));

	// animation
	this.instance_32 = new lib.hero1_lips0_mc();
	this.instance_32.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(91));

	// animation
	this.instance_33 = new lib.hero1_head4_mc();
	this.instance_33.setTransform(1.5,-73.3);
	this.instance_33.alpha = 0.012;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(27).to({_off:false},0).to({alpha:1},48).wait(16));

	// animation
	this.instance_34 = new lib.hero1_head3_mc();
	this.instance_34.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(91));

	// animation
	this.instance_35 = new lib.hero1_head2_mc();
	this.instance_35.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(91));

	// animation
	this.instance_36 = new lib.bm1_mc();
	this.instance_36.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-408.8,-234.4,809.9,591.3), new cjs.Rectangle(-425.5,-234.4,826.5,591.3), new cjs.Rectangle(-442.2,-234.4,843.2,591.3), new cjs.Rectangle(-458.8,-234.4,859.9,591.3), new cjs.Rectangle(-475.5,-234.4,876.5,591.3), rect=new cjs.Rectangle(-399,-234.4,800,591.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.brush3_mc();
	this.instance.setTransform(-356.9,84.4,0.633,0.633,38.8);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:137.3,x:-193,y:56.4,alpha:1},14).wait(1));

	// animation
	this.instance_1 = new lib.rouge1_1_mc();
	this.instance_1.setTransform(-149.5,222.8,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-137.4,y:84.3},14).wait(1));

	// animation
	this.instance_2 = new lib.lipstik1_mc();
	this.instance_2.setTransform(331,191,0.737,0.737);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(259.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(289.5,206.3,0.51,0.51);

	this.instance_5 = new lib.shadows1_1_mc();
	this.instance_5.setTransform(125.8,227.8,0.765,0.765);

	this.instance_6 = new lib.pincet_mc();
	this.instance_6.setTransform(-33.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.hero1_eyes0_mc();
	this.instance_8.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.hero1_fringe0_mc();
	this.instance_9.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.volos_mc();
	this.instance_10.setTransform(66.7,-105.7,0.68,0.68,0,7.5,-172.5);

	this.instance_11 = new lib.volos_mc();
	this.instance_11.setTransform(71.2,-103.2,0.68,0.68,0,7.5,-172.5);

	this.instance_12 = new lib.volos_mc();
	this.instance_12.setTransform(75,-102.8,0.68,0.68,0,34.8,-145.2);

	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(79,-99.9,0.68,0.68,0,45.7,-134.3);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(37.8,-98.2,0.68,0.68,0,-24.8,155.2);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(29.6,-97,0.68,0.68,0,-24.8,155.2);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(56.5,-101.4,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(48.2,-101.9,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(41.9,-101,0.68,0.68,0,-8.3,171.7);

	this.instance_19 = new lib.volos_mc();
	this.instance_19.setTransform(32.8,-97.9,0.68,0.68,0,-8.3,171.7);

	this.instance_20 = new lib.volos_mc();
	this.instance_20.setTransform(-64.1,-105.7,0.68,0.68,-7.5);

	this.instance_21 = new lib.volos_mc();
	this.instance_21.setTransform(-68.6,-103.2,0.68,0.68,-7.5);

	this.instance_22 = new lib.volos_mc();
	this.instance_22.setTransform(-72.4,-102.8,0.68,0.68,-34.8);

	this.instance_23 = new lib.volos_mc();
	this.instance_23.setTransform(-76.4,-99.9,0.68,0.68,-45.7);

	this.instance_24 = new lib.volos_mc();
	this.instance_24.setTransform(-35.2,-98.2,0.68,0.68,24.8);

	this.instance_25 = new lib.volos_mc();
	this.instance_25.setTransform(-27,-97,0.68,0.68,24.8);

	this.instance_26 = new lib.volos_mc();
	this.instance_26.setTransform(-53.9,-101.4,0.68,0.68,8.3);

	this.instance_27 = new lib.volos_mc();
	this.instance_27.setTransform(-45.6,-101.9,0.68,0.68,8.3);

	this.instance_28 = new lib.volos_mc();
	this.instance_28.setTransform(-39.3,-101,0.68,0.68,8.3);

	this.instance_29 = new lib.volos_mc();
	this.instance_29.setTransform(-30.2,-97.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(15));

	// animation
	this.instance_30 = new lib.hero1_eyebrows0_1_mc();
	this.instance_30.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(15));

	// animation
	this.instance_31 = new lib.hero1_eyebrows0_2_mc();
	this.instance_31.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(15));

	// animation
	this.instance_32 = new lib.hero1_lips0_mc();
	this.instance_32.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(15));

	// animation
	this.instance_33 = new lib.hero1_head3_mc();
	this.instance_33.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(15));

	// animation
	this.instance_34 = new lib.hero1_head2_mc();
	this.instance_34.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(15));

	// animation
	this.instance_35 = new lib.bm1_mc();
	this.instance_35.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-423.7,-234.4,824.7,591.3);
p.frameBounds = [rect, new cjs.Rectangle(-414.1,-234.4,815.1,591.3), new cjs.Rectangle(-403.6,-234.4,804.6,591.3), rect=new cjs.Rectangle(-399,-234.4,800,591.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.highlighter2_mc();
	this.instance.setTransform(-114.7,22.3,0.563,0.563,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:20.5,x:-74.2,y:53.3},6).to({rotation:46.5,x:-114.7,y:22.3},6).to({rotation:-44.5,x:104.1,y:36},16).to({rotation:-67.3,x:130.3,y:1.5},6).to({rotation:-44.5,x:104.1,y:36},6).to({x:434.1,y:46,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.lipstik1_mc();
	this.instance_1.setTransform(331,191,0.737,0.737);

	this.instance_2 = new lib.podvodka4_mc();
	this.instance_2.setTransform(259.6,197.4,0.51,0.51);

	this.instance_3 = new lib.podvodka3_mc();
	this.instance_3.setTransform(289.5,206.3,0.51,0.51);

	this.instance_4 = new lib.rouge1_1_mc();
	this.instance_4.setTransform(-149.5,222.8,0.765,0.765);

	this.instance_5 = new lib.shadows1_1_mc();
	this.instance_5.setTransform(125.8,227.8,0.765,0.765);

	this.instance_6 = new lib.pincet_mc();
	this.instance_6.setTransform(-33.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(56));

	// animation
	this.instance_7 = new lib.table_mc();
	this.instance_7.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(56));

	// animation
	this.instance_8 = new lib.hero1_eyes0_mc();
	this.instance_8.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56));

	// animation
	this.instance_9 = new lib.hero1_fringe0_mc();
	this.instance_9.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(56));

	// animation
	this.instance_10 = new lib.volos_mc();
	this.instance_10.setTransform(66.7,-105.7,0.68,0.68,0,7.5,-172.5);

	this.instance_11 = new lib.volos_mc();
	this.instance_11.setTransform(71.2,-103.2,0.68,0.68,0,7.5,-172.5);

	this.instance_12 = new lib.volos_mc();
	this.instance_12.setTransform(75,-102.8,0.68,0.68,0,34.8,-145.2);

	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(79,-99.9,0.68,0.68,0,45.7,-134.3);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(37.8,-98.2,0.68,0.68,0,-24.8,155.2);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(29.6,-97,0.68,0.68,0,-24.8,155.2);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(56.5,-101.4,0.68,0.68,0,-8.3,171.7);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(48.2,-101.9,0.68,0.68,0,-8.3,171.7);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(41.9,-101,0.68,0.68,0,-8.3,171.7);

	this.instance_19 = new lib.volos_mc();
	this.instance_19.setTransform(32.8,-97.9,0.68,0.68,0,-8.3,171.7);

	this.instance_20 = new lib.volos_mc();
	this.instance_20.setTransform(-64.1,-105.7,0.68,0.68,-7.5);

	this.instance_21 = new lib.volos_mc();
	this.instance_21.setTransform(-68.6,-103.2,0.68,0.68,-7.5);

	this.instance_22 = new lib.volos_mc();
	this.instance_22.setTransform(-72.4,-102.8,0.68,0.68,-34.8);

	this.instance_23 = new lib.volos_mc();
	this.instance_23.setTransform(-76.4,-99.9,0.68,0.68,-45.7);

	this.instance_24 = new lib.volos_mc();
	this.instance_24.setTransform(-35.2,-98.2,0.68,0.68,24.8);

	this.instance_25 = new lib.volos_mc();
	this.instance_25.setTransform(-27,-97,0.68,0.68,24.8);

	this.instance_26 = new lib.volos_mc();
	this.instance_26.setTransform(-53.9,-101.4,0.68,0.68,8.3);

	this.instance_27 = new lib.volos_mc();
	this.instance_27.setTransform(-45.6,-101.9,0.68,0.68,8.3);

	this.instance_28 = new lib.volos_mc();
	this.instance_28.setTransform(-39.3,-101,0.68,0.68,8.3);

	this.instance_29 = new lib.volos_mc();
	this.instance_29.setTransform(-30.2,-97.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(56));

	// animation
	this.instance_30 = new lib.hero1_eyebrows0_1_mc();
	this.instance_30.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(56));

	// animation
	this.instance_31 = new lib.hero1_eyebrows0_2_mc();
	this.instance_31.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(56));

	// animation
	this.instance_32 = new lib.hero1_lips0_mc();
	this.instance_32.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(56));

	// animation
	this.instance_33 = new lib.hero1_head3_mc();
	this.instance_33.setTransform(1.5,-73.3);
	this.instance_33.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({alpha:1},40).wait(16));

	// animation
	this.instance_34 = new lib.hero1_head2_mc();
	this.instance_34.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(56));

	// animation
	this.instance_35 = new lib.bm1_mc();
	this.instance_35.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399,-234.4,822.2,591.3), new cjs.Rectangle(-399,-234.4,845.7,591.3), new cjs.Rectangle(-399,-234.4,869.3,591.3), new cjs.Rectangle(-399,-234.4,893,591.3), new cjs.Rectangle(-399,-234.4,800,591.3)];


(lib.animation1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.highlighter2_mc();
	this.instance.setTransform(-222.6,205.3,0.563,0.563);

	this.instance_1 = new lib.highlighter1_mc();
	this.instance_1.setTransform(-263.4,219.1,0.563,0.563);

	this.instance_2 = new lib.lipstik1_mc();
	this.instance_2.setTransform(331,191,0.737,0.737);

	this.instance_3 = new lib.podvodka4_mc();
	this.instance_3.setTransform(259.6,197.4,0.51,0.51);

	this.instance_4 = new lib.podvodka3_mc();
	this.instance_4.setTransform(289.5,206.3,0.51,0.51);

	this.instance_5 = new lib.rouge1_1_mc();
	this.instance_5.setTransform(-149.5,222.8,0.765,0.765);

	this.instance_6 = new lib.shadows1_1_mc();
	this.instance_6.setTransform(125.8,227.8,0.765,0.765);

	this.instance_7 = new lib.pincet_mc();
	this.instance_7.setTransform(-33.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(14));

	// animation
	this.instance_8 = new lib.highlighter2_mc();
	this.instance_8.setTransform(-222.6,205.3,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:46.5,x:-114.7,y:22.3},14).wait(1));

	// animation
	this.instance_9 = new lib.lipstik1_mc();
	this.instance_9.setTransform(331,191,0.737,0.737);

	this.instance_10 = new lib.podvodka4_mc();
	this.instance_10.setTransform(259.6,197.4,0.51,0.51);

	this.instance_11 = new lib.podvodka3_mc();
	this.instance_11.setTransform(289.5,206.3,0.51,0.51);

	this.instance_12 = new lib.rouge1_1_mc();
	this.instance_12.setTransform(-149.5,222.8,0.765,0.765);

	this.instance_13 = new lib.shadows1_1_mc();
	this.instance_13.setTransform(125.8,227.8,0.765,0.765);

	this.instance_14 = new lib.pincet_mc();
	this.instance_14.setTransform(-33.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(15));

	// animation
	this.instance_15 = new lib.table_mc();
	this.instance_15.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

	// animation
	this.instance_16 = new lib.hero1_eyes0_mc();
	this.instance_16.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15));

	// animation
	this.instance_17 = new lib.hero1_fringe0_mc();
	this.instance_17.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15));

	// animation
	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(66.7,-105.7,0.68,0.68,0,7.5,-172.5);

	this.instance_19 = new lib.volos_mc();
	this.instance_19.setTransform(71.2,-103.2,0.68,0.68,0,7.5,-172.5);

	this.instance_20 = new lib.volos_mc();
	this.instance_20.setTransform(75,-102.8,0.68,0.68,0,34.8,-145.2);

	this.instance_21 = new lib.volos_mc();
	this.instance_21.setTransform(79,-99.9,0.68,0.68,0,45.7,-134.3);

	this.instance_22 = new lib.volos_mc();
	this.instance_22.setTransform(37.8,-98.2,0.68,0.68,0,-24.8,155.2);

	this.instance_23 = new lib.volos_mc();
	this.instance_23.setTransform(29.6,-97,0.68,0.68,0,-24.8,155.2);

	this.instance_24 = new lib.volos_mc();
	this.instance_24.setTransform(56.5,-101.4,0.68,0.68,0,-8.3,171.7);

	this.instance_25 = new lib.volos_mc();
	this.instance_25.setTransform(48.2,-101.9,0.68,0.68,0,-8.3,171.7);

	this.instance_26 = new lib.volos_mc();
	this.instance_26.setTransform(41.9,-101,0.68,0.68,0,-8.3,171.7);

	this.instance_27 = new lib.volos_mc();
	this.instance_27.setTransform(32.8,-97.9,0.68,0.68,0,-8.3,171.7);

	this.instance_28 = new lib.volos_mc();
	this.instance_28.setTransform(-64.1,-105.7,0.68,0.68,-7.5);

	this.instance_29 = new lib.volos_mc();
	this.instance_29.setTransform(-68.6,-103.2,0.68,0.68,-7.5);

	this.instance_30 = new lib.volos_mc();
	this.instance_30.setTransform(-72.4,-102.8,0.68,0.68,-34.8);

	this.instance_31 = new lib.volos_mc();
	this.instance_31.setTransform(-76.4,-99.9,0.68,0.68,-45.7);

	this.instance_32 = new lib.volos_mc();
	this.instance_32.setTransform(-35.2,-98.2,0.68,0.68,24.8);

	this.instance_33 = new lib.volos_mc();
	this.instance_33.setTransform(-27,-97,0.68,0.68,24.8);

	this.instance_34 = new lib.volos_mc();
	this.instance_34.setTransform(-53.9,-101.4,0.68,0.68,8.3);

	this.instance_35 = new lib.volos_mc();
	this.instance_35.setTransform(-45.6,-101.9,0.68,0.68,8.3);

	this.instance_36 = new lib.volos_mc();
	this.instance_36.setTransform(-39.3,-101,0.68,0.68,8.3);

	this.instance_37 = new lib.volos_mc();
	this.instance_37.setTransform(-30.2,-97.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(15));

	// animation
	this.instance_38 = new lib.hero1_eyebrows0_1_mc();
	this.instance_38.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(15));

	// animation
	this.instance_39 = new lib.hero1_eyebrows0_2_mc();
	this.instance_39.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(15));

	// animation
	this.instance_40 = new lib.hero1_lips0_mc();
	this.instance_40.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(15));

	// animation
	this.instance_41 = new lib.hero1_head2_mc();
	this.instance_41.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(15));

	// animation
	this.instance_42 = new lib.bm1_mc();
	this.instance_42.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator2_mc();
	this.instance.setTransform(-118.6,-16.6,0.505,0.505,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:34.5,x:-68.1,y:-4.6},6).to({x:4.2,y:34.4},10).to({x:59.9,y:-0.6},9).to({x:-4.7,y:-24.6},9).to({x:7.3,y:-115.6},10).to({x:-51.1,y:-121.6},11).to({x:53.8,y:-118.6},9).to({rotation:-29,x:238.8,y:5.4,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.highlighter2_mc();
	this.instance_1.setTransform(-222.6,205.3,0.563,0.563);

	this.instance_2 = new lib.highlighter1_mc();
	this.instance_2.setTransform(-263.4,219.1,0.563,0.563);

	this.instance_3 = new lib.lipstik1_mc();
	this.instance_3.setTransform(331,191,0.737,0.737);

	this.instance_4 = new lib.podvodka4_mc();
	this.instance_4.setTransform(259.6,197.4,0.51,0.51);

	this.instance_5 = new lib.podvodka3_mc();
	this.instance_5.setTransform(289.5,206.3,0.51,0.51);

	this.instance_6 = new lib.rouge1_1_mc();
	this.instance_6.setTransform(-149.5,222.8,0.765,0.765);

	this.instance_7 = new lib.shadows1_1_mc();
	this.instance_7.setTransform(125.8,227.8,0.765,0.765);

	this.instance_8 = new lib.pincet_mc();
	this.instance_8.setTransform(-33.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(80));

	// animation
	this.instance_9 = new lib.table_mc();
	this.instance_9.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// animation
	this.instance_10 = new lib.hero1_eyes0_mc();
	this.instance_10.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// animation
	this.instance_11 = new lib.hero1_fringe0_mc();
	this.instance_11.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// animation
	this.instance_12 = new lib.volos_mc();
	this.instance_12.setTransform(66.7,-105.7,0.68,0.68,0,7.5,-172.5);

	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(71.2,-103.2,0.68,0.68,0,7.5,-172.5);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(75,-102.8,0.68,0.68,0,34.8,-145.2);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(79,-99.9,0.68,0.68,0,45.7,-134.3);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(37.8,-98.2,0.68,0.68,0,-24.8,155.2);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(29.6,-97,0.68,0.68,0,-24.8,155.2);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(56.5,-101.4,0.68,0.68,0,-8.3,171.7);

	this.instance_19 = new lib.volos_mc();
	this.instance_19.setTransform(48.2,-101.9,0.68,0.68,0,-8.3,171.7);

	this.instance_20 = new lib.volos_mc();
	this.instance_20.setTransform(41.9,-101,0.68,0.68,0,-8.3,171.7);

	this.instance_21 = new lib.volos_mc();
	this.instance_21.setTransform(32.8,-97.9,0.68,0.68,0,-8.3,171.7);

	this.instance_22 = new lib.volos_mc();
	this.instance_22.setTransform(-64.1,-105.7,0.68,0.68,-7.5);

	this.instance_23 = new lib.volos_mc();
	this.instance_23.setTransform(-68.6,-103.2,0.68,0.68,-7.5);

	this.instance_24 = new lib.volos_mc();
	this.instance_24.setTransform(-72.4,-102.8,0.68,0.68,-34.8);

	this.instance_25 = new lib.volos_mc();
	this.instance_25.setTransform(-76.4,-99.9,0.68,0.68,-45.7);

	this.instance_26 = new lib.volos_mc();
	this.instance_26.setTransform(-35.2,-98.2,0.68,0.68,24.8);

	this.instance_27 = new lib.volos_mc();
	this.instance_27.setTransform(-27,-97,0.68,0.68,24.8);

	this.instance_28 = new lib.volos_mc();
	this.instance_28.setTransform(-53.9,-101.4,0.68,0.68,8.3);

	this.instance_29 = new lib.volos_mc();
	this.instance_29.setTransform(-45.6,-101.9,0.68,0.68,8.3);

	this.instance_30 = new lib.volos_mc();
	this.instance_30.setTransform(-39.3,-101,0.68,0.68,8.3);

	this.instance_31 = new lib.volos_mc();
	this.instance_31.setTransform(-30.2,-97.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(80));

	// animation
	this.instance_32 = new lib.hero1_eyebrows0_1_mc();
	this.instance_32.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(80));

	// animation
	this.instance_33 = new lib.hero1_eyebrows0_2_mc();
	this.instance_33.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(80));

	// animation
	this.instance_34 = new lib.hero1_lips0_mc();
	this.instance_34.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(80));

	// animation
	this.instance_35 = new lib.hero1_ton_mc();
	this.instance_35.setTransform(6.1,-26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(35).to({alpha:0.012},11).to({_off:true},1).wait(33));

	// animation
	this.instance_36 = new lib.hero1_ton_mc();
	this.instance_36.setTransform(64.6,5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(25).to({alpha:0.012},14).to({_off:true},1).wait(40));

	// animation
	this.instance_37 = new lib.hero1_ton_mc();
	this.instance_37.setTransform(-50.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(6).to({alpha:0.012},19).to({_off:true},1).wait(54));

	// animation
	this.instance_38 = new lib.hero1_ton_mc();
	this.instance_38.setTransform(7.3,-110.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(44).to({alpha:0.012},13).to({_off:true},1).wait(22));

	// animation
	this.instance_39 = new lib.hero1_head2_mc();
	this.instance_39.setTransform(1.5,-73.3);
	this.instance_39.alpha = 0.012;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(6).to({_off:false},0).to({alpha:1},58).wait(16));

	// animation
	this.instance_40 = new lib.hero1_head1_mc();
	this.instance_40.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(80));

	// animation
	this.instance_41 = new lib.bm1_mc();
	this.instance_41.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator2_mc();
	this.instance.setTransform(-325.2,75.2,0.505,0.505,47.2);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({x:-118.6,y:-16.6,alpha:1},12).wait(1));

	// animation
	this.instance_1 = new lib.ton_mc();
	this.instance_1.setTransform(49,-79.9,1,1,-27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-41.7,x:62,y:-89.9},4).to({scaleX:0.87},3).to({scaleX:1},3).to({x:1.4,y:34.6},17).to({scaleX:0.74},3).to({scaleX:1},4).to({x:118.1,y:25.1},17).to({scaleX:0.82},4).to({scaleX:1},4).to({rotation:-78.7,x:75.6,y:-49.2},21).to({scaleX:0.77,x:74.2,y:-45.7},4).to({scaleX:1,x:75.6,y:-49.2},4).to({rotation:-34.2,x:313.1,y:29.9,alpha:0.012},17).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.highlighter2_mc();
	this.instance_2.setTransform(-222.6,205.3,0.563,0.563);

	this.instance_3 = new lib.highlighter1_mc();
	this.instance_3.setTransform(-263.4,219.1,0.563,0.563);

	this.instance_4 = new lib.lipstik1_mc();
	this.instance_4.setTransform(331,191,0.737,0.737);

	this.instance_5 = new lib.podvodka4_mc();
	this.instance_5.setTransform(259.6,197.4,0.51,0.51);

	this.instance_6 = new lib.podvodka3_mc();
	this.instance_6.setTransform(289.5,206.3,0.51,0.51);

	this.instance_7 = new lib.rouge1_1_mc();
	this.instance_7.setTransform(-149.5,222.8,0.765,0.765);

	this.instance_8 = new lib.shadows1_1_mc();
	this.instance_8.setTransform(125.8,227.8,0.765,0.765);

	this.instance_9 = new lib.pincet_mc();
	this.instance_9.setTransform(-33.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(107));

	// animation
	this.instance_10 = new lib.table_mc();
	this.instance_10.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(107));

	// animation
	this.instance_11 = new lib.hero1_eyes0_mc();
	this.instance_11.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(107));

	// animation
	this.instance_12 = new lib.hero1_fringe0_mc();
	this.instance_12.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(107));

	// animation
	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(66.7,-105.7,0.68,0.68,0,7.5,-172.5);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(71.2,-103.2,0.68,0.68,0,7.5,-172.5);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(75,-102.8,0.68,0.68,0,34.8,-145.2);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(79,-99.9,0.68,0.68,0,45.7,-134.3);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(37.8,-98.2,0.68,0.68,0,-24.8,155.2);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(29.6,-97,0.68,0.68,0,-24.8,155.2);

	this.instance_19 = new lib.volos_mc();
	this.instance_19.setTransform(56.5,-101.4,0.68,0.68,0,-8.3,171.7);

	this.instance_20 = new lib.volos_mc();
	this.instance_20.setTransform(48.2,-101.9,0.68,0.68,0,-8.3,171.7);

	this.instance_21 = new lib.volos_mc();
	this.instance_21.setTransform(41.9,-101,0.68,0.68,0,-8.3,171.7);

	this.instance_22 = new lib.volos_mc();
	this.instance_22.setTransform(32.8,-97.9,0.68,0.68,0,-8.3,171.7);

	this.instance_23 = new lib.volos_mc();
	this.instance_23.setTransform(-64.1,-105.7,0.68,0.68,-7.5);

	this.instance_24 = new lib.volos_mc();
	this.instance_24.setTransform(-68.6,-103.2,0.68,0.68,-7.5);

	this.instance_25 = new lib.volos_mc();
	this.instance_25.setTransform(-72.4,-102.8,0.68,0.68,-34.8);

	this.instance_26 = new lib.volos_mc();
	this.instance_26.setTransform(-76.4,-99.9,0.68,0.68,-45.7);

	this.instance_27 = new lib.volos_mc();
	this.instance_27.setTransform(-35.2,-98.2,0.68,0.68,24.8);

	this.instance_28 = new lib.volos_mc();
	this.instance_28.setTransform(-27,-97,0.68,0.68,24.8);

	this.instance_29 = new lib.volos_mc();
	this.instance_29.setTransform(-53.9,-101.4,0.68,0.68,8.3);

	this.instance_30 = new lib.volos_mc();
	this.instance_30.setTransform(-45.6,-101.9,0.68,0.68,8.3);

	this.instance_31 = new lib.volos_mc();
	this.instance_31.setTransform(-39.3,-101,0.68,0.68,8.3);

	this.instance_32 = new lib.volos_mc();
	this.instance_32.setTransform(-30.2,-97.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(107));

	// animation
	this.instance_33 = new lib.hero1_eyebrows0_1_mc();
	this.instance_33.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(107));

	// animation
	this.instance_34 = new lib.hero1_eyebrows0_2_mc();
	this.instance_34.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(107));

	// animation
	this.instance_35 = new lib.hero1_lips0_mc();
	this.instance_35.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(107));

	// animation
	this.instance_36 = new lib.hero1_ton_mc();
	this.instance_36.setTransform(6.6,-42.4,0.407,0.407);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(80).to({_off:false},0).to({scaleX:1,scaleY:1,x:6.1,y:-26.9},4).wait(23));

	// animation
	this.instance_37 = new lib.hero1_ton_mc();
	this.instance_37.setTransform(63.1,-4.5,0.552,0.552);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(51).to({_off:false},0).to({scaleX:1,scaleY:1,x:64.6,y:5.1},4).wait(52));

	// animation
	this.instance_38 = new lib.hero1_ton_mc();
	this.instance_38.setTransform(-53.5,1.6,0.437,0.437);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(27).to({_off:false},0).to({scaleX:1,scaleY:1,x:-50.6,y:11.6},4).wait(76));

	// animation
	this.instance_39 = new lib.hero1_ton_mc();
	this.instance_39.setTransform(7.6,-121.3,0.561,0.561);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:7.3,y:-110.4},3).wait(100));

	// animation
	this.instance_40 = new lib.hero1_head1_mc();
	this.instance_40.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(107));

	// animation
	this.instance_41 = new lib.bm1_mc();
	this.instance_41.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.ton_mc();
	this.instance.setTransform(-321.9,196.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-27.7,x:49,y:-79.9},14).wait(1));

	// animation
	this.instance_1 = new lib.highlighter2_mc();
	this.instance_1.setTransform(-222.6,205.3,0.563,0.563);

	this.instance_2 = new lib.highlighter1_mc();
	this.instance_2.setTransform(-263.4,219.1,0.563,0.563);

	this.instance_3 = new lib.lipstik1_mc();
	this.instance_3.setTransform(331,191,0.737,0.737);

	this.instance_4 = new lib.podvodka4_mc();
	this.instance_4.setTransform(259.6,197.4,0.51,0.51);

	this.instance_5 = new lib.podvodka3_mc();
	this.instance_5.setTransform(289.5,206.3,0.51,0.51);

	this.instance_6 = new lib.rouge1_1_mc();
	this.instance_6.setTransform(-149.5,222.8,0.765,0.765);

	this.instance_7 = new lib.shadows1_1_mc();
	this.instance_7.setTransform(125.8,227.8,0.765,0.765);

	this.instance_8 = new lib.pincet_mc();
	this.instance_8.setTransform(-33.7,245.3,0.719,0.719,3.3,0,0,96.5,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(15));

	// animation
	this.instance_9 = new lib.table_mc();
	this.instance_9.setTransform(1,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.hero1_eyes0_mc();
	this.instance_10.setTransform(1.4,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.hero1_fringe0_mc();
	this.instance_11.setTransform(2.4,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.volos_mc();
	this.instance_12.setTransform(66.7,-105.7,0.68,0.68,0,7.5,-172.5);

	this.instance_13 = new lib.volos_mc();
	this.instance_13.setTransform(71.2,-103.2,0.68,0.68,0,7.5,-172.5);

	this.instance_14 = new lib.volos_mc();
	this.instance_14.setTransform(75,-102.8,0.68,0.68,0,34.8,-145.2);

	this.instance_15 = new lib.volos_mc();
	this.instance_15.setTransform(79,-99.9,0.68,0.68,0,45.7,-134.3);

	this.instance_16 = new lib.volos_mc();
	this.instance_16.setTransform(37.8,-98.2,0.68,0.68,0,-24.8,155.2);

	this.instance_17 = new lib.volos_mc();
	this.instance_17.setTransform(29.6,-97,0.68,0.68,0,-24.8,155.2);

	this.instance_18 = new lib.volos_mc();
	this.instance_18.setTransform(56.5,-101.4,0.68,0.68,0,-8.3,171.7);

	this.instance_19 = new lib.volos_mc();
	this.instance_19.setTransform(48.2,-101.9,0.68,0.68,0,-8.3,171.7);

	this.instance_20 = new lib.volos_mc();
	this.instance_20.setTransform(41.9,-101,0.68,0.68,0,-8.3,171.7);

	this.instance_21 = new lib.volos_mc();
	this.instance_21.setTransform(32.8,-97.9,0.68,0.68,0,-8.3,171.7);

	this.instance_22 = new lib.volos_mc();
	this.instance_22.setTransform(-64.1,-105.7,0.68,0.68,-7.5);

	this.instance_23 = new lib.volos_mc();
	this.instance_23.setTransform(-68.6,-103.2,0.68,0.68,-7.5);

	this.instance_24 = new lib.volos_mc();
	this.instance_24.setTransform(-72.4,-102.8,0.68,0.68,-34.8);

	this.instance_25 = new lib.volos_mc();
	this.instance_25.setTransform(-76.4,-99.9,0.68,0.68,-45.7);

	this.instance_26 = new lib.volos_mc();
	this.instance_26.setTransform(-35.2,-98.2,0.68,0.68,24.8);

	this.instance_27 = new lib.volos_mc();
	this.instance_27.setTransform(-27,-97,0.68,0.68,24.8);

	this.instance_28 = new lib.volos_mc();
	this.instance_28.setTransform(-53.9,-101.4,0.68,0.68,8.3);

	this.instance_29 = new lib.volos_mc();
	this.instance_29.setTransform(-45.6,-101.9,0.68,0.68,8.3);

	this.instance_30 = new lib.volos_mc();
	this.instance_30.setTransform(-39.3,-101,0.68,0.68,8.3);

	this.instance_31 = new lib.volos_mc();
	this.instance_31.setTransform(-30.2,-97.9,0.68,0.68,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(15));

	// animation
	this.instance_32 = new lib.hero1_eyebrows0_1_mc();
	this.instance_32.setTransform(-52.1,-97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(15));

	// animation
	this.instance_33 = new lib.hero1_eyebrows0_2_mc();
	this.instance_33.setTransform(53.4,-98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(15));

	// animation
	this.instance_34 = new lib.hero1_lips0_mc();
	this.instance_34.setTransform(1.4,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(15));

	// animation
	this.instance_35 = new lib.hero1_head1_mc();
	this.instance_35.setTransform(1.5,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(15));

	// animation
	this.instance_36 = new lib.bm1_mc();
	this.instance_36.setTransform(4.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399,-234.4,800,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_video_play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.video_play_mc();
	this.instance.setTransform(0,0,0.632,0.632);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.74,scaleY:0.74,alpha:0.898},9).to({scaleX:0.63,scaleY:0.63},10).wait(1));

	// animation
	this.instance_1 = new lib.shadow_video_play_mc();
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.398},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-850,-350,1700,700);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_mc();
	this.instance.setTransform(0,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:-50},10).to({y:0},5).wait(15).to({scaleY:0.92},20).to({scaleX:0.96,scaleY:1},20).to({scaleX:1},20).wait(10).to({y:300},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,170,440,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-220,135,440,260), new cjs.Rectangle(-220,100,440,260), new cjs.Rectangle(-220,65,440,260), new cjs.Rectangle(-220,30,440,260), new cjs.Rectangle(-220,-5,440,260), new cjs.Rectangle(-220,-40,440,260), new cjs.Rectangle(-220,-75,440,260), new cjs.Rectangle(-220,-110,440,260), new cjs.Rectangle(-220,-145,440,260), new cjs.Rectangle(-220,-180,440,260), new cjs.Rectangle(-220,-170,440,260), new cjs.Rectangle(-220,-160,440,260), new cjs.Rectangle(-220,-150,440,260), new cjs.Rectangle(-220,-140,440,260), rect=new cjs.Rectangle(-220,-130,440,260), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-220,-129.5,440,259), new cjs.Rectangle(-220,-129,440,258), new cjs.Rectangle(-220,-128.5,440,257), new cjs.Rectangle(-220,-128,440,256), new cjs.Rectangle(-220,-127.5,440,255), new cjs.Rectangle(-220,-127,440,254), new cjs.Rectangle(-220,-126.5,440,253), new cjs.Rectangle(-220,-126,440,252), new cjs.Rectangle(-220,-125.5,440,251), new cjs.Rectangle(-220,-125,440,250), new cjs.Rectangle(-220,-124.4,440,249), new cjs.Rectangle(-220,-123.9,440,248), new cjs.Rectangle(-220,-123.4,440,247), new cjs.Rectangle(-220,-122.9,440,246), new cjs.Rectangle(-220,-122.4,440,245), new cjs.Rectangle(-220,-121.9,440,244), new cjs.Rectangle(-220,-121.5,440,243), new cjs.Rectangle(-220,-121,440,242), new cjs.Rectangle(-220,-120.5,440,241), new cjs.Rectangle(-220,-120,440,240), new cjs.Rectangle(-219.4,-120.4,439,241), new cjs.Rectangle(-218.9,-120.9,438,242), new cjs.Rectangle(-218.4,-121.4,437,243), new cjs.Rectangle(-217.9,-121.9,436,244), new cjs.Rectangle(-217.4,-122.4,435,245), new cjs.Rectangle(-216.9,-122.9,434,246), new cjs.Rectangle(-216.4,-123.4,433,247), new cjs.Rectangle(-215.9,-123.9,432,248), new cjs.Rectangle(-215.4,-124.4,431,249), new cjs.Rectangle(-215,-124.9,430,250), new cjs.Rectangle(-214.5,-125.4,429,251), new cjs.Rectangle(-214,-125.9,428,252), new cjs.Rectangle(-213.5,-126.4,427,253), new cjs.Rectangle(-213,-126.9,426,254), new cjs.Rectangle(-212.5,-127.4,425,255), new cjs.Rectangle(-212,-127.9,424,256), new cjs.Rectangle(-211.5,-128.4,423,257), new cjs.Rectangle(-211,-128.9,422,258), new cjs.Rectangle(-210.4,-129.4,421,259), new cjs.Rectangle(-210,-130,420,260), new cjs.Rectangle(-210.4,-129.9,421,260), new cjs.Rectangle(-210.9,-129.9,422,260), new cjs.Rectangle(-211.4,-129.9,423,260), new cjs.Rectangle(-211.9,-129.9,424,260), new cjs.Rectangle(-212.4,-129.9,425,260), new cjs.Rectangle(-212.9,-129.9,426,260), new cjs.Rectangle(-213.4,-129.9,427,260), new cjs.Rectangle(-213.9,-129.9,428,260), new cjs.Rectangle(-214.4,-129.9,429,260), new cjs.Rectangle(-214.9,-129.9,430,260), new cjs.Rectangle(-215.4,-129.9,431,260), new cjs.Rectangle(-215.9,-129.9,432,260), new cjs.Rectangle(-216.4,-129.9,433,260), new cjs.Rectangle(-216.9,-129.9,434,260), new cjs.Rectangle(-217.4,-129.9,435,260), new cjs.Rectangle(-217.9,-129.9,436,260), new cjs.Rectangle(-218.4,-129.9,437,260), new cjs.Rectangle(-218.9,-129.9,438,260), new cjs.Rectangle(-219.4,-129.9,439,260), rect=new cjs.Rectangle(-220,-130,440,260), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-220,-100,440,260), new cjs.Rectangle(-220,-70,440,260), new cjs.Rectangle(-220,-40,440,260), new cjs.Rectangle(-220,-10,440,260), new cjs.Rectangle(-220,20,440,260), new cjs.Rectangle(-220,50,440,260), new cjs.Rectangle(-220,80,440,260), new cjs.Rectangle(-220,110,440,260), new cjs.Rectangle(-220,140,440,260), new cjs.Rectangle(-220,170,440,260)];


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
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},19).to({alpha:0.801},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-250,340,500);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-120,440,260);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:39,end:79});

	// animation
	this.instance = new lib.curtain_2_mc();
	this.instance.setTransform(400,300,0.833,0.833);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(30).to({alpha:0.012},15).to({_off:true},1).wait(10));

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
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.801},15).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect, new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.2,-22.2,44.6,44.6), new cjs.Rectangle(-21.9,-21.9,43.9,43.9), new cjs.Rectangle(-21.6,-21.6,43.2,43.2), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-20.9,-20.9,41.8,41.8), new cjs.Rectangle(-20.5,-20.5,41.2,41.2), new cjs.Rectangle(-20.2,-20.2,40.5,40.5), new cjs.Rectangle(-19.8,-19.8,39.8,39.8), new cjs.Rectangle(-19.5,-19.5,39.1,39.1), new cjs.Rectangle(-19.2,-19.2,38.4,38.4), new cjs.Rectangle(-19.5,-19.5,39.1,39.1), new cjs.Rectangle(-19.8,-19.8,39.7,39.7), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-20.4,-20.4,41,41), new cjs.Rectangle(-20.7,-20.7,41.6,41.6), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-21.4,-21.4,42.9,42.9), new cjs.Rectangle(-21.7,-21.7,43.5,43.5), new cjs.Rectangle(-22,-22,44.2,44.2), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-22.7,-22.7,45.5,45.5), new cjs.Rectangle(-23,-23,46.1,46.1), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-24,-24,48,48)];


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


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},30).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-170,-250);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-170,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_0_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_4 = new lib.decor_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-250,340,500);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-170,-250);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-170,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_0_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_4 = new lib.decor_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-250,340,500);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-170,-250);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-170,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_0_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_4 = new lib.decor_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-250,340,500);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-170,-250);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-170,-250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_0_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_4 = new lib.decor_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-250,340,500);
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


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.hero_1_for_dressup_mc();
	this.hero_1.setTransform(255,260);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:1100},0).wait(1).to({x:405,y:260},0).wait(1).to({x:255,y:1100},0).wait(1).to({x:500,y:260},0).wait(1).to({x:255,y:1100},0).wait(1).to({x:405,y:260},0).wait(1).to({x:255,y:1100},0).wait(1).to({y:260},0).wait(1).to({y:1100},0).wait(1).to({x:405,y:260},0).wait(1).to({y:1100},0).wait(2).to({x:550,y:260},0).wait(1));

	// hero_2
	this.hero_2 = new lib.hero_2_for_dressup_mc();
	this.hero_2.setTransform(270,1100);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:240},0).wait(1).to({y:1100},0).wait(1).to({x:415,y:240},0).wait(1).to({y:1100},0).wait(1).to({x:530,y:240},0).wait(1).to({x:415,y:1100},0).wait(1).to({y:240},0).wait(1).to({y:1100},0).wait(1).to({x:270,y:240},0).wait(1).to({y:1100},0).wait(1).to({x:415,y:240},0).wait(1).to({y:1100},0).wait(1).to({x:260,y:240},0).wait(1));

	// decor
	this.instance = new lib.boy_1_mc();
	this.instance.setTransform(595,345);

	this.instance_1 = new lib.boy_2_mc();
	this.instance_1.setTransform(600,340);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:595,y:345}}]}).to({state:[{t:this.instance_1,p:{x:600}}]},1).to({state:[]},1).to({state:[{t:this.instance,p:{x:180,y:345}}]},2).to({state:[{t:this.instance_1,p:{x:190}}]},1).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:600}}]},2).to({state:[{t:this.instance,p:{x:595,y:345}}]},1).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:590}},{t:this.instance,p:{x:250,y:350}}]},2).to({state:[]},1).wait(1));

	// bg
	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-400,0);

	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-400,0);

	this.instance_4 = new lib.background_5_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,1481.8);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,1465.8), new cjs.Rectangle(-400,0,1600,1481.8), new cjs.Rectangle(-400,0,1600,1465.8), new cjs.Rectangle(-400,0,1600,1481.8), new cjs.Rectangle(-400,0,1600,1465.8), new cjs.Rectangle(-400,0,1600,1481.8), new cjs.Rectangle(-400,0,1600,1465.8), new cjs.Rectangle(-400,0,1600,1481.8), new cjs.Rectangle(-400,0,1600,1465.8), new cjs.Rectangle(-400,0,1600,1481.8), new cjs.Rectangle(-400,0,1600,1465.8), new cjs.Rectangle(-400,0,1600,1481.8), new cjs.Rectangle(-400,0,1600,625.8)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl_1
	this.instance = new lib.hero_1_main_mc();
	this.instance.setTransform(-800,260);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({x:350},15).to({x:300},5).wait(1));

	// boy_1
	this.instance_1 = new lib.boy_main_1_mc();
	this.instance_1.setTransform(1600,350);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).to({x:510},15).to({x:560},5).wait(1));

	// girl_2
	this.instance_2 = new lib.hero_2_main_mc();
	this.instance_2.setTransform(1600,260);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({x:470},15).to({x:520},5).wait(50).to({x:1600},15).to({_off:true},1).wait(10));

	// boy_2
	this.instance_3 = new lib.boy_main_2_mc();
	this.instance_3.setTransform(-800,340);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({x:280},15).to({x:230},5).wait(50).to({x:-800},15).to({_off:true},1).wait(10));

	// girl_1
	this.instance_4 = new lib.hero_1_main_mc();
	this.instance_4.setTransform(300,260);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({x:-800},15).to({_off:true},1).wait(85));

	// boy_1
	this.instance_5 = new lib.boy_main_1_mc();
	this.instance_5.setTransform(560,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({x:1600},15).to({_off:true},1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.6,9.2,732.3,681.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-81,9.2,875,681.7), new cjs.Rectangle(-154.3,9.2,1017.6,681.7), new cjs.Rectangle(-227.6,9.2,1160.3,681.7), new cjs.Rectangle(-300.9,9.2,1302.9,681.7), new cjs.Rectangle(-944.5,9.2,2791.4,681.7), new cjs.Rectangle(-872.5,9.2,2644.1,681.7), new cjs.Rectangle(-800.5,9.2,2496.8,681.7), new cjs.Rectangle(-728.5,9.2,2349.4,681.7), new cjs.Rectangle(-667.6,9.2,2213.3,681.7), new cjs.Rectangle(-741,9.2,2211.3,681.7), new cjs.Rectangle(-814.3,9.2,2301.6,681.7), new cjs.Rectangle(-887.6,9.2,2444.3,681.7), new cjs.Rectangle(-961,9.2,2587,681.7), new cjs.Rectangle(-1034.3,9.2,2729.6,681.7), new cjs.Rectangle(-1107.6,9.2,2872.3,681.7), new cjs.Rectangle(-152.5,20.5,1170.8,639), new cjs.Rectangle(-80.5,20.5,1023.4,639), new cjs.Rectangle(-8.5,20.5,876.1,639), new cjs.Rectangle(63.5,20.5,728.8,639), new cjs.Rectangle(135.5,20.5,581.4,639), new cjs.Rectangle(125.5,20.5,601.4,639), new cjs.Rectangle(115.5,20.5,621.4,639), new cjs.Rectangle(105.5,20.5,641.4,639), new cjs.Rectangle(95.5,20.5,661.4,639), rect=new cjs.Rectangle(85.5,20.5,681.4,639), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(16.9,20.5,822.1,639), new cjs.Rectangle(-51.8,20.5,962.8,639), new cjs.Rectangle(-120.5,20.5,1103.4,639), new cjs.Rectangle(-189.1,20.5,1244.1,639), new cjs.Rectangle(-1107.6,9.2,2872.3,681.7), new cjs.Rectangle(-1031,9.2,2723,681.7), new cjs.Rectangle(-954.3,9.2,2573.6,681.7), new cjs.Rectangle(-877.6,9.2,2424.3,681.7), new cjs.Rectangle(-801,9.2,2275,681.7), new cjs.Rectangle(-724.3,9.2,2211.2,681.7), new cjs.Rectangle(-669.8,9.2,2228.8,681.7), new cjs.Rectangle(-738.5,9.2,2369.4,681.7), new cjs.Rectangle(-807.1,9.2,2510.1,681.7), new cjs.Rectangle(-875.8,9.2,2650.8,681.7), new cjs.Rectangle(-944.5,9.2,2791.4,681.7), new cjs.Rectangle(-264.3,9.2,1229.6,681.7), new cjs.Rectangle(-187.6,9.2,1080.3,681.7), new cjs.Rectangle(-111,9.2,931,681.7), new cjs.Rectangle(-34.3,9.2,781.6,681.7), new cjs.Rectangle(42.4,9.2,632.3,681.7), new cjs.Rectangle(32.4,9.2,652.3,681.7), new cjs.Rectangle(22.4,9.2,672.3,681.7), new cjs.Rectangle(12.4,9.2,692.3,681.7), new cjs.Rectangle(2.4,9.2,712.3,681.7), new cjs.Rectangle(-7.6,9.2,732.3,681.7)];


(lib.hero2_for_animation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 16
	this.instance = new lib.hero2_nath_mc();
	this.instance.setTransform(-76.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 9
	this.instance_1 = new lib.hero2_earrings1_mc();
	this.instance_1.setTransform(-20.7,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 14
	this.instance_2 = new lib.hero2_fringe0_img();
	this.instance_2.setTransform(-142.6,-198.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 13
	this.instance_3 = new lib.hero2_lips2_mc();
	this.instance_3.setTransform(-20,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 12
	this.instance_4 = new lib.hero2_eyes2_mc();
	this.instance_4.setTransform(-18.5,-43.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 15
	this.instance_5 = new lib.hero2_eyebrows1_1_mc();
	this.instance_5.setTransform(33.9,-88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 8
	this.instance_6 = new lib.hero2_eyebrows1_2_mc();
	this.instance_6.setTransform(-80.6,-88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 11
	this.instance_7 = new lib.hero2_shadows_all_mc();
	this.instance_7.setTransform(-18.7,-49.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 10
	this.instance_8 = new lib.hero2_head3_mc();
	this.instance_8.setTransform(-24,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 7
	this.instance_9 = new lib.hero2_head2_mc();
	this.instance_9.setTransform(-24,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 6
	this.instance_10 = new lib.hero2_necklace1_img();
	this.instance_10.setTransform(-58.6,75.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 5
	this.instance_11 = new lib.hero2_dress_mc();
	this.instance_11.setTransform(-28.1,230.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 4
	this.instance_12 = new lib.hero2_body1_mc();
	this.instance_12.setTransform(-15.5,213.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 2
	this.instance_13 = new lib.hero2_dress_back_mc();
	this.instance_13.setTransform(45.4,234.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 17
	this.instance_14 = new lib.hero2_hair0_img();
	this.instance_14.setTransform(-173.2,-122.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 3
	this.instance_15 = new lib.hero2_vail_back1_mc();
	this.instance_15.setTransform(-19.6,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-286.1,-198.5,533,580.3);
p.frameBounds = [rect];


(lib.hero1_for_animation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 16
	this.instance = new lib.hero1_nath_mc();
	this.instance.setTransform(-64.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 9
	this.instance_1 = new lib.hero1_earrings1_mc();
	this.instance_1.setTransform(-5.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 17
	this.instance_2 = new lib.hero1_fringe0_img();
	this.instance_2.setTransform(-153.1,-225.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 15
	this.instance_3 = new lib.hero1_eyes2_mc();
	this.instance_3.setTransform(-7.6,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 14
	this.instance_4 = new lib.hero1_eyebrows1_1_mc();
	this.instance_4.setTransform(-61.1,-88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 13
	this.instance_5 = new lib.hero1_eyebrows1_2_mc();
	this.instance_5.setTransform(44.4,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 12
	this.instance_6 = new lib.hero1_shadows_all_mc();
	this.instance_6.setTransform(-5.6,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 11
	this.instance_7 = new lib.hero1_lips1_mc();
	this.instance_7.setTransform(-7.6,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 10
	this.instance_8 = new lib.hero1_head4_mc();
	this.instance_8.setTransform(-7.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 8
	this.instance_9 = new lib.hero1_head3_mc();
	this.instance_9.setTransform(-7.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 7
	this.instance_10 = new lib.hero1_head2_mc();
	this.instance_10.setTransform(-7.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 18
	this.instance_11 = new lib.hero1_necklace1_img();
	this.instance_11.setTransform(-50.1,71.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 6
	this.instance_12 = new lib.hero1_dress_mc();
	this.instance_12.setTransform(-8.6,224.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.hero1_body1_mc();
	this.instance_13.setTransform(-4.9,212.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.hero1_dress_back_mc();
	this.instance_14.setTransform(72.4,230.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 4
	this.instance_15 = new lib.hero1_hair0_img();
	this.instance_15.setTransform(-184.6,-120.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 3
	this.instance_16 = new lib.hero1_vail_back1_mc();
	this.instance_16.setTransform(-3.6,72.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-307.6,-225.1,608,591);
p.frameBounds = [rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":29,"end":79});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(49).to({y:-50},5).to({y:600},10).wait(16));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(59).to({y:-50},5).to({y:600},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-250,700,500);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-350,-260,700,510), new cjs.Rectangle(-350,-270,700,520), new cjs.Rectangle(-350,-280,700,530), new cjs.Rectangle(-350,-290,700,540), new cjs.Rectangle(-350,-300,700,550), new cjs.Rectangle(-350,-250,700,515), new cjs.Rectangle(-350,-250,700,580), new cjs.Rectangle(-350,-250,700,645), new cjs.Rectangle(-350,-250,700,710), new cjs.Rectangle(-350,-250,700,775), new cjs.Rectangle(-350,-260,700,850), new cjs.Rectangle(-350,-270,700,925), new cjs.Rectangle(-350,-280,700,1000), new cjs.Rectangle(-350,-290,700,1075), new cjs.Rectangle(-350,-300,700,1150), new cjs.Rectangle(-350,-235,700,1085), new cjs.Rectangle(-350,-170,700,1020), new cjs.Rectangle(-350,-105,700,955), new cjs.Rectangle(-350,-40,700,890), new cjs.Rectangle(-350,25,700,825), new cjs.Rectangle(-350,90,700,760), new cjs.Rectangle(-350,155,700,695), new cjs.Rectangle(-350,220,700,630), new cjs.Rectangle(-350,285,700,565), rect=new cjs.Rectangle(-350,350,700,500), rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":119});

	// timeline functions:
	this.frame_39 = function() {
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
	this.frame_59 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(20).call(this.frame_59).wait(61));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-230,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({x:-1350},0).wait(48).to({x:-180},15).to({x:-230},5).wait(51));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(100,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({x:-1000},0).wait(28).to({x:150},15).to({x:100},5).wait(71));

	// decor
	this.instance = new lib.boy_2_mc();
	this.instance.setTransform(370,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1000},0).wait(18).to({x:320},15).to({x:370},5).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-289.5,914.5,639);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1520,-289.5,2664.5,639), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1520,-289.5,2619.2,639), new cjs.Rectangle(-1520,-289.5,2573.9,639), new cjs.Rectangle(-1520,-289.5,2528.5,639), new cjs.Rectangle(-1520,-289.5,2483.2,639), new cjs.Rectangle(-1520,-289.5,2437.9,639), new cjs.Rectangle(-1520,-289.5,2392.5,639), new cjs.Rectangle(-1520,-289.5,2347.2,639), new cjs.Rectangle(-1520,-289.5,2301.9,639), new cjs.Rectangle(-1520,-289.5,2256.5,639), new cjs.Rectangle(-1520,-289.5,2211.2,639), new cjs.Rectangle(-1520,-289.5,2165.9,639), new cjs.Rectangle(-1520,-289.5,2120.5,639), new cjs.Rectangle(-1520,-289.5,2075.2,639), new cjs.Rectangle(-1520,-289.5,2029.9,639), new cjs.Rectangle(-1520,-289.5,1984.5,639), new cjs.Rectangle(-1520,-289.5,1994.5,639), new cjs.Rectangle(-1520,-289.5,2004.5,639), new cjs.Rectangle(-1520,-289.5,2014.5,639), new cjs.Rectangle(-1520,-289.5,2024.5,639), rect=new cjs.Rectangle(-1520,-289.5,2034.5,639), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1442,-289.5,1956.5,639), new cjs.Rectangle(-1364,-289.5,1878.5,639), new cjs.Rectangle(-1286,-289.5,1800.5,639), new cjs.Rectangle(-1208,-289.5,1722.5,639), new cjs.Rectangle(-1130,-289.5,1644.5,639), new cjs.Rectangle(-1052,-289.5,1566.5,639), new cjs.Rectangle(-974,-289.5,1488.5,639), new cjs.Rectangle(-896,-289.5,1410.5,639), new cjs.Rectangle(-818,-289.5,1332.5,639), new cjs.Rectangle(-740,-289.5,1254.5,639), new cjs.Rectangle(-662,-289.5,1176.5,639), new cjs.Rectangle(-584,-289.5,1098.5,639), new cjs.Rectangle(-506,-289.5,1020.5,639), new cjs.Rectangle(-428,-289.5,942.5,639), new cjs.Rectangle(-350,-289.5,864.5,639), new cjs.Rectangle(-360,-289.5,874.5,639), new cjs.Rectangle(-370,-289.5,884.5,639), new cjs.Rectangle(-380,-289.5,894.5,639), new cjs.Rectangle(-390,-289.5,904.5,639), rect=new cjs.Rectangle(-400,-289.5,914.5,639), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":29,"end":79});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(49).to({y:-50},5).to({y:600},10).wait(16));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(59).to({y:-50},5).to({y:600},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-250,700,500);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-350,-260,700,510), new cjs.Rectangle(-350,-270,700,520), new cjs.Rectangle(-350,-280,700,530), new cjs.Rectangle(-350,-290,700,540), new cjs.Rectangle(-350,-300,700,550), new cjs.Rectangle(-350,-250,700,515), new cjs.Rectangle(-350,-250,700,580), new cjs.Rectangle(-350,-250,700,645), new cjs.Rectangle(-350,-250,700,710), new cjs.Rectangle(-350,-250,700,775), new cjs.Rectangle(-350,-260,700,850), new cjs.Rectangle(-350,-270,700,925), new cjs.Rectangle(-350,-280,700,1000), new cjs.Rectangle(-350,-290,700,1075), new cjs.Rectangle(-350,-300,700,1150), new cjs.Rectangle(-350,-235,700,1085), new cjs.Rectangle(-350,-170,700,1020), new cjs.Rectangle(-350,-105,700,955), new cjs.Rectangle(-350,-40,700,890), new cjs.Rectangle(-350,25,700,825), new cjs.Rectangle(-350,90,700,760), new cjs.Rectangle(-350,155,700,695), new cjs.Rectangle(-350,220,700,630), new cjs.Rectangle(-350,285,700,565), rect=new cjs.Rectangle(-350,350,700,500), rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":119});

	// timeline functions:
	this.frame_39 = function() {
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
	this.frame_59 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(20).call(this.frame_59).wait(61));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-100,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({x:1000},0).wait(28).to({x:-150},15).to({x:-100},5).wait(71));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(230,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({x:1350},0).wait(48).to({x:180},15).to({x:230},5).wait(51));

	// decor
	this.instance = new lib.boy_1_mc();
	this.instance.setTransform(-380,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-1000},0).wait(18).to({x:-300},15).to({x:-380},5).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-544.5,-280.8,944.6,681.7);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1164.5,-280.8,2684.6,681.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1117.9,-280.8,2637.9,681.7), new cjs.Rectangle(-1071.2,-280.8,2591.2,681.7), new cjs.Rectangle(-1024.5,-280.8,2544.6,681.7), new cjs.Rectangle(-977.9,-280.8,2497.9,681.7), new cjs.Rectangle(-931.2,-280.8,2451.2,681.7), new cjs.Rectangle(-884.5,-280.8,2404.6,681.7), new cjs.Rectangle(-837.9,-280.8,2357.9,681.7), new cjs.Rectangle(-791.2,-280.8,2311.2,681.7), new cjs.Rectangle(-744.5,-280.8,2264.6,681.7), new cjs.Rectangle(-697.9,-280.8,2217.9,681.7), new cjs.Rectangle(-651.2,-280.8,2171.2,681.7), new cjs.Rectangle(-604.5,-280.8,2124.6,681.7), new cjs.Rectangle(-557.9,-280.8,2077.9,681.7), new cjs.Rectangle(-511.2,-280.8,2031.2,681.7), new cjs.Rectangle(-464.5,-280.8,1984.6,681.7), new cjs.Rectangle(-480.5,-280.8,2000.6,681.7), new cjs.Rectangle(-496.5,-280.8,2016.6,681.7), new cjs.Rectangle(-512.5,-280.8,2032.6,681.7), new cjs.Rectangle(-528.5,-280.8,2048.6,681.7), rect=new cjs.Rectangle(-544.5,-280.8,2064.6,681.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-544.5,-280.8,1986.6,681.7), new cjs.Rectangle(-544.5,-280.8,1908.6,681.7), new cjs.Rectangle(-544.5,-280.8,1830.6,681.7), new cjs.Rectangle(-544.5,-280.8,1752.6,681.7), new cjs.Rectangle(-544.5,-280.8,1674.6,681.7), new cjs.Rectangle(-544.5,-280.8,1596.6,681.7), new cjs.Rectangle(-544.5,-280.8,1518.6,681.7), new cjs.Rectangle(-544.5,-280.8,1440.6,681.7), new cjs.Rectangle(-544.5,-280.8,1362.6,681.7), new cjs.Rectangle(-544.5,-280.8,1284.6,681.7), new cjs.Rectangle(-544.5,-280.8,1206.6,681.7), new cjs.Rectangle(-544.5,-280.8,1128.6,681.7), new cjs.Rectangle(-544.5,-280.8,1050.6,681.7), new cjs.Rectangle(-544.5,-280.8,972.6,681.7), new cjs.Rectangle(-544.5,-280.8,894.6,681.7), new cjs.Rectangle(-544.5,-280.8,904.6,681.7), new cjs.Rectangle(-544.5,-280.8,914.6,681.7), new cjs.Rectangle(-544.5,-280.8,924.6,681.7), new cjs.Rectangle(-544.5,-280.8,934.6,681.7), rect=new cjs.Rectangle(-544.5,-280.8,944.6,681.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_maneken_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_maneken_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.current_maneken_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect];


(lib.current_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_hairstyle_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, rect];


(lib.beads_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.arrow_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


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


(lib.arrow_4_mc = function(mode,startPosition,loop) {
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


(lib.animation2_40_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("magic_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(281));

	// animation
	this.instance = new lib.animation_video_play_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},19).to({_off:true},1).wait(280));

	// animation
	this.instance_1 = new lib.white_screen_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(184).to({_off:false,alpha:0.012},0).to({alpha:1},4).to({_off:true},1).wait(81));

	// animation
	this.instance_2 = new lib.back_shorts_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({_off:true},185).wait(85));

	// animation
	this.instance_3 = new lib.heart_red1_mc();
	this.instance_3.setTransform(-7.6,9.7,0.035,0.035);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({scaleX:1,scaleY:1,x:-10,y:-37},6).to({scaleX:1.2,scaleY:1.2,alpha:0.012},7).to({_off:true},1).wait(186));

	// animation
	this.instance_4 = new lib.white_screen2_mc();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).wait(184).to({_off:true},1).wait(85));

	// animation
	this.instance_5 = new lib.white_screen_mc();
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(141).to({_off:false},0).to({alpha:1},4).to({_off:true},1).wait(154));

	// animation
	this.instance_6 = new lib.hero2_hands4_1_mc();
	this.instance_6.setTransform(85,253,1,1,0,0,180);
	this.instance_6._off = true;

	this.instance_7 = new lib.hero2_hands4_2_mc();
	this.instance_7.setTransform(85,107,1,1,0,0,180);
	this.instance_7._off = true;

	this.instance_8 = new lib.hero2_vail_1_mc();
	this.instance_8.setTransform(-3,-228.8,1,1,0,0,0,-2,-141);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(52).to({_off:false},0).to({y:107},15).to({_off:true},11).wait(222));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},11).wait(17).to({skewX:-20.2,skewY:159.8,x:40},5).wait(2).to({skewX:5.7,skewY:185.7,x:47,y:106},4).to({_off:true},1).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(146).to({_off:false},0).wait(11).to({regY:-141.1,scaleY:0.42,y:-369.9},10).to({_off:true},1).wait(132));

	// animation
	this.instance_9 = new lib.hero2_hands4_1_mc();
	this.instance_9.setTransform(-78,255);
	this.instance_9._off = true;

	this.instance_10 = new lib.hero2_hands4_2_mc();
	this.instance_10.setTransform(-78,107);
	this.instance_10._off = true;

	this.instance_11 = new lib.hero2_for_animation_mc();
	this.instance_11.setTransform(-4.5,-14,0.757,0.757,0,0,0,-19.6,91.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).to({y:107},13).to({_off:true},9).wait(248));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(43).to({_off:false},9).wait(43).to({rotation:20.5,x:-44.7,y:106.8},5).wait(2).to({rotation:-8.2,x:-57.7,y:109.8},4).to({_off:true},1).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(146).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1,y:35},32).wait(101));

	// animation
	this.instance_12 = new lib.hero2_vail_2_mc();
	this.instance_12.setTransform(0,-55.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(107).to({_off:false},0).wait(6).to({scaleX:0.71,scaleY:0.71,x:-4,y:-86.6},28).wait(4).to({_off:true},1).wait(154));

	// animation
	this.instance_13 = new lib.hero2_dark_mc();
	this.instance_13.setTransform(-4.6,35.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(107).to({_off:false},0).wait(6).to({scaleX:0.71,scaleY:0.71,x:-7.3,y:-22.4},28).wait(4).to({_off:true},1).wait(154));

	// animation
	this.instance_14 = new lib.hero2_eyelashes1_1_mc();
	this.instance_14.setTransform(60,-64);

	this.instance_15 = new lib.hero2_eyelashes1_1_mc();
	this.instance_15.setTransform(-57,-64,1,1,0,0,180);

	this.instance_16 = new lib.hero2_fringe0_mc();
	this.instance_16.setTransform(0.4,-111.3);

	this.instance_17 = new lib.hero2_eyes0_mc();
	this.instance_17.setTransform(0.9,-47.3);

	this.instance_18 = new lib.hero2_eyebrows0_1_mc();
	this.instance_18.setTransform(57.8,-87.9);

	this.instance_19 = new lib.hero2_eyebrows0_2_mc();
	this.instance_19.setTransform(-50.6,-95.9);

	this.instance_20 = new lib.hero2_shadows4_mc();
	this.instance_20.setTransform(45,-68.9);

	this.instance_21 = new lib.hero2_shadows4_mc();
	this.instance_21.setTransform(-42,-68.1,1,1,0,0,180);

	this.instance_22 = new lib.hero2_shadows3_mc();
	this.instance_22.setTransform(-61.6,-53,1,1,0,0,180);

	this.instance_23 = new lib.hero2_shadows3_mc();
	this.instance_23.setTransform(68.4,-53);

	this.instance_24 = new lib.hero2_shadows2_mc();
	this.instance_24.setTransform(-41,-47.5,1,1,0,0,180);

	this.instance_25 = new lib.hero2_shadows2_mc();
	this.instance_25.setTransform(47,-47.8);

	this.instance_26 = new lib.hero2_shadows1_mc();
	this.instance_26.setTransform(58.8,-68.6);

	this.instance_27 = new lib.hero2_shadows1_mc();
	this.instance_27.setTransform(-56.5,-68.6,1,1,0,0,180);

	this.instance_28 = new lib.hero2_lips1_mc();
	this.instance_28.setTransform(4,21.6);

	this.instance_29 = new lib.hero2_lips0_mc();
	this.instance_29.setTransform(4,21.6);

	this.instance_30 = new lib.hero2_head3_mc();
	this.instance_30.setTransform(0,-67.3);

	this.instance_31 = new lib.hero2_head2_mc();
	this.instance_31.setTransform(0,-67.3);

	this.instance_32 = new lib.h2_b_mc();
	this.instance_32.setTransform(1.3,123.5);

	this.instance_33 = new lib.h2_1_mc();
	this.instance_33.setTransform(-8.7,66.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).to({state:[{t:this.instance_33}]},30).to({state:[]},77).wait(193));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-850,-350,1700,725.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-149.2,-204.3,301,579.8), rect, rect, rect, rect=new cjs.Rectangle(-800,-300,1600,675.5), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-800,-320,1600,676.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-800,-320,1600,645.4), rect, rect, rect, rect, new cjs.Rectangle(-800,-322.6,1600,648), new cjs.Rectangle(-800,-329.5,1600,654.9), new cjs.Rectangle(-800,-320,1600,640.3), rect=new cjs.Rectangle(-800,-320,1600,640), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-800,-330.3,1600,650.3), new cjs.Rectangle(-800,-344.1,1600,664.2), new cjs.Rectangle(-800,-358,1600,678), new cjs.Rectangle(-800,-371.8,1600,691.8), rect=new cjs.Rectangle(-800,-320,1600,640), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-800,-320,1600,641.4), rect=new cjs.Rectangle(-800,-320,1600,645.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-800,-300,1600,625.2), rect, rect, rect, rect=new cjs.Rectangle(-271,-255.1,533,580.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		try
		{
			app.addSoundFunc("magic_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(281));

	// animation
	this.instance = new lib.animation_video_play_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},19).to({_off:true},1).wait(280));

	// animation
	this.instance_1 = new lib.white_screen_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(184).to({_off:false,alpha:0.012},0).to({alpha:1},4).to({_off:true},1).wait(81));

	// animation
	this.instance_2 = new lib.back_shorts_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({_off:true},185).wait(85));

	// animation
	this.instance_3 = new lib.heart_red1_mc();
	this.instance_3.setTransform(-7.6,9.7,0.035,0.035);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({scaleX:1,scaleY:1,x:-10,y:-37},6).to({scaleX:1.2,scaleY:1.2,alpha:0.012},7).to({_off:true},1).wait(186));

	// animation
	this.instance_4 = new lib.white_screen2_mc();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).wait(184).to({_off:true},1).wait(85));

	// animation
	this.instance_5 = new lib.white_screen_mc();
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(141).to({_off:false},0).to({alpha:1},4).to({_off:true},1).wait(154));

	// animation
	this.instance_6 = new lib.hero1_hands4_1_mc();
	this.instance_6.setTransform(-96.6,264);
	this.instance_6._off = true;

	this.instance_7 = new lib.hero1_hands4_2_mc();
	this.instance_7.setTransform(-96.6,107);
	this.instance_7._off = true;

	this.instance_8 = new lib.hero1_vail_1_mc();
	this.instance_8.setTransform(-5.6,-97.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(52).to({_off:false},0).to({y:107},15).to({_off:true},11).wait(222));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},11).wait(17).to({rotation:20.7,x:-46.6,y:109.5},5).to({rotation:-11.1,x:-61.6,y:108.5},2).to({rotation:-11.1},4).to({_off:true},1).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(146).to({_off:false},0).wait(21).to({regX:-0.1,regY:-0.1,scaleY:0.52,x:-6.7,y:-332.4},15).to({_off:true},1).wait(117));

	// animation
	this.instance_9 = new lib.hero1_hands4_1_mc();
	this.instance_9.setTransform(84.4,255,1,1,0,0,180);
	this.instance_9._off = true;

	this.instance_10 = new lib.hero1_hands4_2_mc();
	this.instance_10.setTransform(84.4,107,1,1,0,0,180);
	this.instance_10._off = true;

	this.instance_11 = new lib.hero1_for_animation_mc();
	this.instance_11.setTransform(-5.6,-22,0.734,0.734,0,0,0,-3.7,70.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).to({y:107},13).to({_off:true},9).wait(248));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(43).to({_off:false},9).wait(43).to({skewX:-26.8,skewY:153.2,x:44.4,y:105.3},5).to({skewX:6.2,skewY:186.2,x:53.4},2).to({skewX:6.2},4).to({_off:true},1).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(146).to({_off:false},0).wait(36).to({scaleX:1,scaleY:1,y:48.1},21).wait(97));

	// animation
	this.instance_12 = new lib.hero1_vail_2_mc();
	this.instance_12.setTransform(-3.6,-45);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(107).to({_off:false},0).wait(6).to({scaleX:0.7,scaleY:0.7,x:-7.4,y:-93.7},28).wait(4).to({_off:true},1).wait(154));

	// animation
	this.instance_13 = new lib.hero1_dark_mc();
	this.instance_13.setTransform(-4,45.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(107).to({_off:false},0).wait(6).to({scaleX:0.7,scaleY:0.7,x:-7.6,y:-30.1},28).wait(4).to({_off:true},1).wait(154));

	// animation
	this.instance_14 = new lib.hero1_eyelashes1_1_mc();
	this.instance_14.setTransform(59.8,-65.1);

	this.instance_15 = new lib.hero1_eyelashes1_1_mc();
	this.instance_15.setTransform(-57.1,-65.1,1,1,0,0,180);

	this.instance_16 = new lib.hero1_eyes0_mc();
	this.instance_16.setTransform(1.4,-55.4);

	this.instance_17 = new lib.hero1_shadows1_2_mc();
	this.instance_17.setTransform(-40.1,-62.6,1,1,0,0,180);

	this.instance_18 = new lib.hero1_shadows1_2_mc();
	this.instance_18.setTransform(43,-62.6);

	this.instance_19 = new lib.hero1_shadows0_1_mc();
	this.instance_19.setTransform(-64.6,-63,1,1,0,0,180);

	this.instance_20 = new lib.hero1_shadows0_1_mc();
	this.instance_20.setTransform(70.4,-63);

	this.instance_21 = new lib.hero1_fringe0_mc();
	this.instance_21.setTransform(2.4,-137.9);

	this.instance_22 = new lib.hero1_eyebrows0_1_mc();
	this.instance_22.setTransform(-52.1,-97.4);

	this.instance_23 = new lib.hero1_eyebrows0_2_mc();
	this.instance_23.setTransform(53.4,-98.3);

	this.instance_24 = new lib.hero1_lips1_mc();
	this.instance_24.setTransform(1.4,22.2);

	this.instance_25 = new lib.hero1_head4_mc();
	this.instance_25.setTransform(1.5,-73.3);

	this.instance_26 = new lib.hero1_head3_mc();
	this.instance_26.setTransform(1.5,-73.3);

	this.instance_27 = new lib.hero1_head2_mc();
	this.instance_27.setTransform(1.5,-73.3);

	this.instance_28 = new lib.bm1_mc();
	this.instance_28.setTransform(4.4,113.5);

	this.instance_29 = new lib.h1_1_mc();
	this.instance_29.setTransform(-5.6,49.2);

	this.instance_30 = new lib.hero1_vail_back2_mc();
	this.instance_30.setTransform(17.4,48);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).to({state:[{t:this.instance_29}]},30).to({state:[{t:this.instance_30}]},77).to({state:[{t:this.instance_30}]},6).to({state:[{t:this.instance_30}]},28).to({state:[{t:this.instance_30}]},4).to({state:[]},1).wait(154));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(107).to({_off:false},0).wait(6).to({scaleX:0.7,scaleY:0.7,x:7.4,y:-28.3},28).wait(4).to({_off:true},1).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-850,-350,1700,706.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-175.6,-234.4,360,591.3), rect, rect, rect, rect=new cjs.Rectangle(-800,-300,1600,656.8), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-800,-320,1600,664.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-800,-320,1600,669.5), rect=new cjs.Rectangle(-800,-320,1600,664.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-800,-320,1600,674), rect, rect, rect, rect, new cjs.Rectangle(-800,-322.6,1600,676.6), new cjs.Rectangle(-800,-329.5,1600,683.5), new cjs.Rectangle(-800,-320,1600,668.1), new cjs.Rectangle(-800,-320,1600,662.1), new cjs.Rectangle(-800,-320,1600,656.2), new cjs.Rectangle(-800,-320,1600,650.1), new cjs.Rectangle(-800,-320,1600,644.2), rect=new cjs.Rectangle(-800,-320,1600,640), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-800,-321.1,1600,641.2), new cjs.Rectangle(-800,-332.2,1600,652.2), new cjs.Rectangle(-800,-343.1,1600,663.2), new cjs.Rectangle(-800,-354.1,1600,674.2), new cjs.Rectangle(-800,-365.1,1600,685.1), new cjs.Rectangle(-800,-376.1,1600,696.1), new cjs.Rectangle(-800,-387,1600,707.1), new cjs.Rectangle(-800,-398,1600,718.1), new cjs.Rectangle(-800,-409,1600,729.1), rect=new cjs.Rectangle(-800,-320,1600,640), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-800,-320,1600,642.3), new cjs.Rectangle(-800,-320,1600,649.3), new cjs.Rectangle(-800,-320,1600,656.4), rect=new cjs.Rectangle(-800,-320,1600,663.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-800,-300,1600,643.6), rect, rect, rect, rect=new cjs.Rectangle(-309.6,-247.4,608,591), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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
	this.freeGames_mc.setTransform(400,1150,0.727,0.727);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(400,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.102;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(586,42,0.833,0.833);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(456,18,0.833,0.833);

	this.instance_5 = new lib.blinking_light_3_2_mc();
	this.instance_5.setTransform(182,28,0.833,0.833);

	this.instance_6 = new lib.blinking_light_3_2_mc();
	this.instance_6.setTransform(329,28,0.833,0.833);

	this.instance_7 = new lib.blinking_light_3_2_mc();
	this.instance_7.setTransform(466,308,0.833,0.833);

	this.instance_8 = new lib.blinking_light_3_2_mc();
	this.instance_8.setTransform(684,250);

	this.instance_9 = new lib.blinking_light_3_2_mc();
	this.instance_9.setTransform(135,234.6);

	this.instance_10 = new lib.blinking_light_3_2_mc();
	this.instance_10.setTransform(784,239);

	this.instance_11 = new lib.blinking_light_3_2_mc();
	this.instance_11.setTransform(6,243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// bg
	this.instance_12 = new lib.background_1_img();
	this.instance_12.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1474.4);
p.frameBounds = [rect];


(lib.wardrobe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(198,-263.9,0.667,0.667,0,0,0,0,0.1);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-214,-262.9,0.667,0.667,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.stick_mc();
	this.instance_2.setTransform(0,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.wardrobe_img();
	this.instance_3.setTransform(-230,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-290,460,580);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,1481.8);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-544.5,-280.8,944.6,681.7);
p.frameBounds = [rect, new cjs.Rectangle(-350,-250,700,500), new cjs.Rectangle(-400,-289.5,914.5,639), new cjs.Rectangle(-350,-250,700,500)];


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


(lib.hairstyle_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_7_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_7_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcPdQmbmaAApDQAApCGbmaQGambJCABQJEgBGZGbQGbGaAAJCQAAJDmbGaQmZGbpEAAQpCAAmambg");

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


(lib.earrings_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.decor_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(765,150);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(10,320);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(35,545);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(90,435);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(770,540.7);

	this.instance_5 = new lib.blinking_light_3_2_mc();
	this.instance_5.setTransform(730,430);

	this.instance_6 = new lib.blinking_light_3_2_mc();
	this.instance_6.setTransform(600,220);

	this.instance_7 = new lib.blinking_light_3_2_mc();
	this.instance_7.setTransform(145,295);

	this.instance_8 = new lib.blinking_light_3_2_mc();
	this.instance_8.setTransform(685,255);

	this.instance_9 = new lib.blinking_light_3_2_mc();
	this.instance_9.setTransform(138,146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,122,808,447);
p.frameBounds = [rect];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-208,-110);

	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(-208,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.earrings_0}]},3).to({state:[{t:this.beads_0}]},2).wait(2));

	// options
	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,80);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(0,-180);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(0,80);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(0,-180);

	this.hair_7 = new lib.hairstyle_7_2_mc();
	this.hair_7.setTransform(0,80);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,-180);

	this.earrings_3 = new lib.earrings_3_2_mc();
	this.earrings_3.setTransform(0,90);

	this.earrings_2 = new lib.earrings_2_2_mc();
	this.earrings_2.setTransform(80,-100);

	this.earrings_1 = new lib.earrings_1_2_mc();
	this.earrings_1.setTransform(-80,-100);

	this.earrings_6 = new lib.earrings_6_2_mc();
	this.earrings_6.setTransform(-80,-100);

	this.earrings_4 = new lib.earrings_4_2_mc();
	this.earrings_4.setTransform(80,-100);

	this.earrings_5 = new lib.earrings_5_2_mc();
	this.earrings_5.setTransform(0,90);

	this.beads_2 = new lib.beads_2_2_mc();
	this.beads_2.setTransform(0,90);

	this.beads_3 = new lib.beads_3_2_mc();
	this.beads_3.setTransform(80,-100);

	this.beads_1 = new lib.beads_1_2_mc();
	this.beads_1.setTransform(-80,-100);

	this.beads_4 = new lib.beads_4_2_mc();
	this.beads_4.setTransform(0,90);

	this.beads_6 = new lib.beads_6_2_mc();
	this.beads_6.setTransform(80,-100);

	this.beads_5 = new lib.beads_5_2_mc();
	this.beads_5.setTransform(-80,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5}]},1).to({state:[{t:this.hair_6},{t:this.hair_7}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3}]},1).to({state:[{t:this.earrings_5},{t:this.earrings_4},{t:this.earrings_6}]},1).to({state:[{t:this.beads_1},{t:this.beads_3},{t:this.beads_2}]},1).to({state:[{t:this.beads_5},{t:this.beads_6},{t:this.beads_4}]},1).wait(1));

	// decor
	this.instance = new lib.stick_mc();
	this.instance.setTransform(0,80);

	this.instance_1 = new lib.shelf_mc();
	this.instance_1.setTransform(0,140);

	this.instance_2 = new lib.shelf_mc();
	this.instance_2.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:80}}]}).to({state:[{t:this.instance,p:{y:80}}]},1).to({state:[{t:this.instance,p:{y:80}}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{y:180}},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{y:180}},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{y:180}},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{y:180}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-325,460,550);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-230,-170,460,395), rect, rect, rect];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-208,-110);

	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(-208,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.earrings_0}]},3).to({state:[{t:this.beads_0}]},2).wait(2));

	// options
	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,80);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(0,-180);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(0,-180);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(0,80);

	this.hair_7 = new lib.hairstyle_7_1_mc();
	this.hair_7.setTransform(0,80);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,-180);

	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(0,90);

	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(80,-100);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(-80,-100);

	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(80,-100);

	this.earrings_6 = new lib.earrings_6_1_mc();
	this.earrings_6.setTransform(0,90);

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(-80,-100);

	this.beads_3 = new lib.beads_3_1_mc();
	this.beads_3.setTransform(0,90);

	this.beads_2 = new lib.beads_2_1_mc();
	this.beads_2.setTransform(80,-100);

	this.beads_1 = new lib.beads_1_1_mc();
	this.beads_1.setTransform(-80,-100);

	this.beads_4 = new lib.beads_4_1_mc();
	this.beads_4.setTransform(0,90);

	this.beads_6 = new lib.beads_6_1_mc();
	this.beads_6.setTransform(80,-100);

	this.beads_5 = new lib.beads_5_1_mc();
	this.beads_5.setTransform(-80,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_5},{t:this.hair_4}]},1).to({state:[{t:this.hair_6},{t:this.hair_7}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3}]},1).to({state:[{t:this.earrings_5},{t:this.earrings_6},{t:this.earrings_4}]},1).to({state:[{t:this.beads_1},{t:this.beads_2},{t:this.beads_3}]},1).to({state:[{t:this.beads_5},{t:this.beads_6},{t:this.beads_4}]},1).wait(1));

	// decor
	this.instance = new lib.stick_mc();
	this.instance.setTransform(0,80);

	this.instance_1 = new lib.shelf_mc();
	this.instance_1.setTransform(0,140);

	this.instance_2 = new lib.shelf_mc();
	this.instance_2.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:80}}]}).to({state:[{t:this.instance,p:{y:80}}]},1).to({state:[{t:this.instance,p:{y:80}}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{y:180}},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{y:180}},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{y:180}},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{y:180}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-325,460,550);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-230,-170,460,395), rect, rect, rect];


(lib.bodyDressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-325,460,550);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-325,460,550);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1801.7);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(110,500,1,1,0,-15,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{skewX:-15,skewY:165,x:110,y:500,rotation:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:185,y:495,rotation:45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:320,y:530,rotation:45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:510,y:505,rotation:60}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:625,y:500,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:700,y:490,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]}).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:50,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:405,y:380}}]},1).to({state:[{t:this.indicator_mc,p:{y:190,rotation:-90,x:570}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:405,y:155}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{y:-180,rotation:0,x:400}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_3_mc();
	this.object_1.setTransform(75,495);

	this.object_2 = new lib.arrow_10_mc();
	this.object_2.setTransform(408,285.1,0.799,0.799,0,119.9,-60.1,-0.1,-0.1);

	this.object_3 = new lib.arrow_11_mc();
	this.object_3.setTransform(397.1,280.2,0.799,0.799,0,52.7,-127.3,-0.2,0);

	this.object_4 = new lib.object_4_3_mc();
	this.object_4.setTransform(200,515);

	this.object_5 = new lib.arrow_12_mc();
	this.object_5.setTransform(420,335.1,0.8,0.8,30,0,0,0.1,0.1);

	this.object_6 = new lib.object_6_3_mc();
	this.object_6.setTransform(320,545);

	this.object_7 = new lib.arrow_13_mc();
	this.object_7.setTransform(325.2,275,0.699,0.699,0,-14.8,165.2,-0.2,0.1);

	this.object_8 = new lib.arrow_14_mc();
	this.object_8.setTransform(485,275.2,0.7,0.7,15,0,0,0.1,0.2);

	this.object_9 = new lib.object_9_3_mc();
	this.object_9.setTransform(500,520);

	this.object_10 = new lib.object_10_3_mc();
	this.object_10.setTransform(405,300);

	this.object_11 = new lib.object_11_3_mc();
	this.object_11.setTransform(405,300);

	this.object_12 = new lib.arrow_15_mc();
	this.object_12.setTransform(320,225,0.8,0.8,0,0,180);

	this.object_13 = new lib.arrow_16_mc();
	this.object_13.setTransform(480,225,0.8,0.8);

	this.object_14 = new lib.arrow_17_mc();
	this.object_14.setTransform(350,310.1,0.7,0.7,30,0,0,0.1,0.1);

	this.object_15 = new lib.arrow_18_mc();
	this.object_15.setTransform(490.1,300.1,0.7,0.7,15,0,0,0.1,0.1);

	this.object_16 = new lib.object_16_3_mc();
	this.object_16.setTransform(655,495);

	this.object_17 = new lib.arrow_19_mc();
	this.object_17.setTransform(270,235,0.7,0.7,-90);

	this.object_18 = new lib.arrow_20_mc();
	this.object_18.setTransform(500,210,0.7,0.7,0,90,-90);

	this.object_19 = new lib.object_19_3_mc();
	this.object_19.setTransform(730,485);

	this.object_20 = new lib.arrow_21_mc();
	this.object_20.setTransform(410,330,0.8,0.8,0,-105,75);

	this.object_21 = new lib.object_21_3_mc();
	this.object_21.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).to({state:[{t:this.object_18}]},1).to({state:[{t:this.object_19}]},1).to({state:[{t:this.object_20}]},1).to({state:[{t:this.object_21}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation2_2_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation2_4_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation2_6_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation2_8_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation2_10_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation2_12_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation2_14_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation2_16_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.animation2_18_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.animation2_19_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.animation2_20_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.animation2_22_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.animation2_24_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.animation2_26_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.animation2_28_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.animation2_30_mc();
	this.subject_16.setTransform(400,300);

	this.subject_17 = new lib.animation2_32_mc();
	this.subject_17.setTransform(400,300);

	this.subject_18 = new lib.animation2_34_mc();
	this.subject_18.setTransform(400,300);

	this.subject_19 = new lib.animation2_36_mc();
	this.subject_19.setTransform(400,300);

	this.subject_20 = new lib.animation2_38_mc();
	this.subject_20.setTransform(400,300);

	this.subject_21 = new lib.animation2_40_mc();
	this.subject_21.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.subject_20}]},1).to({state:[{t:this.subject_21}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,-349.4,800,1024.9);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-23.7,-349.4,824.7,1024.9), rect=new cjs.Rectangle(1,-349.4,800,1024.9), rect, rect, rect, new cjs.Rectangle(1,-349.4,907,1024.9), rect=new cjs.Rectangle(1,-159,800,834.5), rect, rect=new cjs.Rectangle(1,-349.4,800,1024.9), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(51.9,-349.4,716.2,1024.9), new cjs.Rectangle(-450,-349.4,1700,1024.9)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(110,480,1,1,0,-15,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{skewX:-15,skewY:165,x:110,y:480,rotation:0,regY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:160,y:480,rotation:30,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:210,y:490,rotation:30,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:360,y:530,rotation:45,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:565.1,y:495.1,rotation:120,regY:-0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:640,y:500,rotation:15,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:710,y:490,rotation:15,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:380,y:-100,rotation:0,regY:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]}).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:-90,x:227,y:180}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:402,y:325}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:-90,x:575,y:180}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:400,y:120}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_1_mc();
	this.object_1.setTransform(75,490);

	this.object_2 = new lib.arrow_1_mc();
	this.object_2.setTransform(410,255,0.799,0.799,0,135.1,-44.9);

	this.object_3 = new lib.arrow_2_mc();
	this.object_3.setTransform(395,245,0.799,0.799,0,44.9,-135.1);

	this.object_4 = new lib.object_4_1_mc();
	this.object_4.setTransform(160,500);

	this.object_5 = new lib.arrow_3_mc();
	this.object_5.setTransform(417.1,300.1,0.799,0.799,0,135.1,-44.9,0,-0.1);

	this.object_6 = new lib.object_6_1_mc();
	this.object_6.setTransform(250,520);

	this.object_7 = new lib.arrow_4_mc();
	this.object_7.setTransform(420,340,0.799,0.799,44.9);

	this.object_8 = new lib.object_8_1_mc();
	this.object_8.setTransform(365,545);

	this.object_9 = new lib.arrow_5_mc();
	this.object_9.setTransform(335.1,255.1,0.6,0.6,0,-15,165,-0.1,0.2);

	this.object_10 = new lib.arrow_6_mc();
	this.object_10.setTransform(470.1,255.1,0.6,0.6,15,0,0,0.1,0.1);

	this.object_11 = new lib.object_11_1_mc();
	this.object_11.setTransform(525,525);

	this.object_12 = new lib.object_12_1_mc();
	this.object_12.setTransform(400,240);

	this.object_13 = new lib.object_13_1_mc();
	this.object_13.setTransform(400,240);

	this.object_14 = new lib.object_14_1_mc();
	this.object_14.setTransform(675,490);

	this.object_15 = new lib.arrow_7_mc();
	this.object_15.setTransform(325.1,200.1,0.8,0.8,-90,0,0,-0.1,0.1);

	this.object_16 = new lib.arrow_8_mc();
	this.object_16.setTransform(470,200,0.7,0.7,0,90,-90);

	this.object_17 = new lib.object_17_1_mc();
	this.object_17.setTransform(730,485);

	this.object_18 = new lib.arrow_9_mc();
	this.object_18.setTransform(410.1,320,0.699,0.699,15.1,0,0,0.1,-0.1);

	this.object_19 = new lib.object_19_1_mc();
	this.object_19.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).to({state:[{t:this.object_18}]},1).to({state:[{t:this.object_19}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation1_2_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation1_4_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation1_6_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation1_8_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation1_10_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation1_12_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation1_14_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation1_16_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.animation1_18_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.animation1_20_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.animation1_22_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.animation1_23_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.animation1_24_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.animation1_26_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.animation1_28_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.animation1_30_mc();
	this.subject_16.setTransform(400,300);

	this.subject_17 = new lib.animation1_32_mc();
	this.subject_17.setTransform(400,300);

	this.subject_18 = new lib.animation1_34_mc();
	this.subject_18.setTransform(400,300);

	this.subject_19 = new lib.animation1_36_mc();
	this.subject_19.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,-349.4,800,1006.2);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-23.7,-349.4,824.7,1006.2), rect=new cjs.Rectangle(1,-349.4,800,1006.2), rect, rect, rect, new cjs.Rectangle(1,-349.4,907,1006.2), rect=new cjs.Rectangle(1,-159,800,815.8), rect, rect=new cjs.Rectangle(1,-349.4,800,1006.2), rect, rect, rect, new cjs.Rectangle(97.3,-349.4,487.1,1006.2), new cjs.Rectangle(-450,-349.4,1700,1006.2)];


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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(556,268);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(272,278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(645,164);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(185,178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.background_2_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.dressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-600);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(195,80);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-195,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-255,-650,510,940);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-600);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(195,80);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-195,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-255,-650,510,940);
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,675);
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
	this.instance_1 = new lib.background_0_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.quest_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,510,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(79).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_1_mc();
	this.dressupPanel_mc.setTransform(250,340);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-800},0).wait(18).to({x:300},15).to({x:250},5).wait(30).to({x:-800},15).wait(116));

	// hero
	this.hero_2 = new lib.hero_2_for_dressup_mc();
	this.hero_2.setTransform(640,250);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1600},0).wait(18).to({x:590},15).to({x:640},5).wait(30).to({x:420},20).wait(111));

	// decor
	this.instance = new lib.decor_shadow_mc();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({alpha:1},15).wait(106));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).to({alpha:1},15).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-310,891.9,941.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1055,-310,2901.9,941.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-981.6,-310,2761.2,941.8), new cjs.Rectangle(-908.3,-310,2620.6,941.8), new cjs.Rectangle(-835,-310,2479.9,941.8), new cjs.Rectangle(-761.7,-310,2339.3,941.8), new cjs.Rectangle(-688.3,-310,2198.6,941.8), new cjs.Rectangle(-615,-310,2057.9,941.8), new cjs.Rectangle(-541.7,-310,1917.3,941.8), new cjs.Rectangle(-468.3,-310,1776.5,941.8), new cjs.Rectangle(-395,-310,1635.9,941.8), new cjs.Rectangle(-321.6,-310,1495.2,941.8), new cjs.Rectangle(-248.3,-310,1354.6,941.8), new cjs.Rectangle(-175,-310,1213.9,941.8), new cjs.Rectangle(-101.6,-310,1073.2,941.8), new cjs.Rectangle(-28.3,-310,932.6,941.8), new cjs.Rectangle(45,-310,791.9,941.8), new cjs.Rectangle(35,-310,811.9,941.8), new cjs.Rectangle(25,-310,831.9,941.8), new cjs.Rectangle(15,-310,851.9,941.8), new cjs.Rectangle(5,-310,871.9,941.8), rect=new cjs.Rectangle(-5,-310,891.9,941.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-75,-310,950.9,941.8), new cjs.Rectangle(-145,-310,1009.9,941.8), new cjs.Rectangle(-215,-310,1068.9,941.8), new cjs.Rectangle(-285,-310,1127.9,941.8), new cjs.Rectangle(-355,-310,1186.9,941.8), new cjs.Rectangle(-425,-310,1245.9,941.8), new cjs.Rectangle(-495,-310,1304.9,941.8), new cjs.Rectangle(-565,-310,1363.9,941.8), new cjs.Rectangle(-635,-310,1422.9,941.8), new cjs.Rectangle(-705,-310,1915,941.8), new cjs.Rectangle(-775,-310,1985,941.8), new cjs.Rectangle(-845,-310,2055,941.8), new cjs.Rectangle(-915,-310,2125,957), new cjs.Rectangle(-985,-310,2195,976), new cjs.Rectangle(-1055,-310,2265,995), new cjs.Rectangle(-1055,-310,2265,1014), new cjs.Rectangle(-1055,-310,2265,1033), new cjs.Rectangle(-1055,-310,2265,1052), new cjs.Rectangle(-1055,-310,2265,1071), rect=new cjs.Rectangle(-1055,-310,2265,1090), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,510,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(79).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(250,340);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-800},0).wait(18).to({x:300},15).to({x:250},5).wait(30).to({x:-800},15).wait(116));

	// hero
	this.hero_1 = new lib.hero_1_for_dressup_mc();
	this.hero_1.setTransform(620,260);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1600},0).wait(18).to({x:570},15).to({x:620},5).wait(30).to({x:405},20).wait(111));

	// decor
	this.instance = new lib.decor_shadow_mc();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({alpha:1},15).wait(106));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).to({alpha:1},15).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-310,925.4,940);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1055,-310,2955.4,940), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-981.6,-310,2813.4,940), new cjs.Rectangle(-908.3,-310,2671.4,940), new cjs.Rectangle(-835,-310,2529.4,940), new cjs.Rectangle(-761.7,-310,2387.4,940), new cjs.Rectangle(-688.3,-310,2245.4,940), new cjs.Rectangle(-615,-310,2103.4,940), new cjs.Rectangle(-541.7,-310,1961.4,940), new cjs.Rectangle(-468.3,-310,1819.3,940), new cjs.Rectangle(-395,-310,1677.4,940), new cjs.Rectangle(-321.6,-310,1535.4,940), new cjs.Rectangle(-248.3,-310,1393.4,940), new cjs.Rectangle(-175,-310,1251.4,940), new cjs.Rectangle(-101.6,-310,1109.4,940), new cjs.Rectangle(-28.3,-310,967.4,940), new cjs.Rectangle(45,-310,825.4,940), new cjs.Rectangle(35,-310,845.4,940), new cjs.Rectangle(25,-310,865.4,940), new cjs.Rectangle(15,-310,885.4,940), new cjs.Rectangle(5,-310,905.4,940), rect=new cjs.Rectangle(-5,-310,925.4,940), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-75,-310,984.6,940), new cjs.Rectangle(-145,-310,1043.9,940), new cjs.Rectangle(-215,-310,1103.1,940), new cjs.Rectangle(-285,-310,1162.4,940), new cjs.Rectangle(-355,-310,1221.6,940), new cjs.Rectangle(-425,-310,1280.9,940), new cjs.Rectangle(-495,-310,1340.1,940), new cjs.Rectangle(-565,-310,1399.4,940), new cjs.Rectangle(-635,-310,1458.6,940), new cjs.Rectangle(-705,-310,1915,940), new cjs.Rectangle(-775,-310,1985,940), new cjs.Rectangle(-845,-310,2055,940), new cjs.Rectangle(-915,-310,2125,957), new cjs.Rectangle(-985,-310,2195,976), new cjs.Rectangle(-1055,-310,2265,995), new cjs.Rectangle(-1055,-310,2265,1014), new cjs.Rectangle(-1055,-310,2265,1033), new cjs.Rectangle(-1055,-310,2265,1052), new cjs.Rectangle(-1055,-310,2265,1071), rect=new cjs.Rectangle(-1055,-310,2265,1090), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.frame_1_mc = new lib.quest_4_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-349.4,891.9,981.2);
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
	this.frame_1_mc = new lib.quest_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-349.4,925.4,979.4);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
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
	this.text.lineWidth = 252;
	this.text.setTransform(128.2,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();
	this.instance_4.setTransform(2,0,1,1,0,0,0,2,0);

	this.instance_5 = new lib.LocationScreen_2();
	this.instance_5.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.LocationScreen_4();
	this.instance_7.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.RedirectScreen();

	this.instance_9 = new lib.ResultScreen();
	this.instance_9.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_10 = new lib.InstructionScreen();

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.next_btn},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).to({state:[{t:this.instance_18}]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,-280.8,1600,1470.9), new cjs.Rectangle(-400,-280.8,1600,1261.9), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, rect, rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1801.7), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,562,430), new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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