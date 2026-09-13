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
		{src:"library/images/storage_atlas_11.png", id:"storage_atlas_11"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600],[0,602,580,580]]},
		{name:"storage_atlas_6", frames: [[582,564,430,430],[0,0,1200,200],[0,202,580,360],[0,926,580,360],[0,564,580,360],[582,202,580,360]]},
		{name:"storage_atlas_7", frames: [[0,0,420,420],[0,422,420,420],[767,469,500,300],[740,771,356,391],[0,844,382,378],[422,0,343,470],[422,472,316,460],[767,0,340,467]]},
		{name:"storage_atlas_8", frames: [[705,0,360,360],[343,0,360,360],[646,751,310,268],[342,765,302,357],[327,393,316,370],[0,393,325,396],[958,637,237,327],[645,362,284,387],[1067,0,216,367],[931,369,295,266],[0,791,340,353],[0,0,341,391],[958,966,320,240],[646,1021,309,251]]},
		{name:"storage_atlas_9", frames: [[152,484,247,253],[499,886,300,151],[752,1039,230,184],[322,0,181,415],[1078,781,209,200],[984,983,191,218],[258,1127,293,173],[912,580,234,199],[553,1039,197,221],[862,781,214,198],[505,0,219,342],[0,986,256,207],[1033,0,264,202],[258,908,239,217],[401,417,235,205],[726,243,380,180],[0,484,150,500],[0,0,320,240],[0,242,320,240],[491,624,340,135],[912,425,306,153],[491,761,369,123],[152,739,337,167],[638,425,272,176],[726,0,305,241]]},
		{name:"storage_atlas_10", frames: [[491,879,180,140],[491,1152,191,108],[989,1167,193,111],[925,796,240,120],[0,1176,280,120],[1049,126,180,180],[0,365,178,219],[853,126,194,168],[396,277,164,208],[222,277,172,200],[688,1113,151,161],[354,967,135,199],[1167,662,104,215],[207,967,145,193],[841,1113,146,162],[183,855,260,110],[235,102,209,173],[0,788,181,207],[0,586,193,200],[0,180,220,183],[282,1168,165,130],[0,997,205,177],[0,0,233,178],[610,0,241,154],[688,989,203,122],[853,0,298,124],[925,662,221,132],[989,1080,268,85],[749,650,174,175],[925,308,174,175],[1101,485,174,175],[559,702,174,175],[1101,308,174,175],[749,473,174,175],[925,485,174,175],[749,296,174,175],[491,1021,195,129],[735,827,160,160],[195,665,180,180],[567,338,180,180],[567,520,180,180],[377,673,180,180],[562,156,180,180],[1059,918,160,160],[897,918,160,160],[381,487,184,184],[195,479,184,184],[235,0,373,100]]},
		{name:"storage_atlas_11", frames: [[276,784,141,60],[366,0,154,123],[683,0,193,95],[162,0,202,99],[878,0,187,96],[1043,388,153,89],[1226,858,68,106],[939,812,87,92],[164,787,109,75],[826,940,65,43],[683,97,170,98],[1066,654,91,103],[819,842,79,96],[659,888,80,91],[0,979,79,77],[723,1084,58,64],[1233,86,53,129],[1243,266,45,82],[309,292,120,120],[1093,1035,100,50],[726,1022,87,60],[910,994,98,56],[877,222,101,42],[370,683,118,75],[616,981,108,56],[1157,966,95,67],[558,386,137,102],[245,1046,79,57],[569,1039,83,55],[1195,1035,86,55],[81,1033,84,61],[403,905,120,59],[0,716,80,110],[642,753,110,80],[0,130,129,124],[431,348,125,113],[490,759,116,74],[922,556,142,71],[540,835,117,69],[1145,788,121,68],[403,546,143,72],[419,835,119,68],[0,915,113,62],[250,909,123,57],[522,121,158,103],[682,197,94,19],[162,101,154,106],[1270,0,22,11],[276,683,92,99],[992,176,32,12],[991,950,164,42],[326,1074,124,30],[0,256,120,120],[999,266,120,120],[365,620,158,61],[659,835,158,51],[0,864,158,49],[1028,900,148,48],[697,388,179,78],[1028,858,196,40],[682,222,193,75],[992,190,207,74],[244,296,59,106],[1067,0,201,84],[815,1061,105,39],[550,490,130,81],[244,414,159,84],[229,500,172,63],[673,1101,34,80],[640,226,38,60],[1242,1092,55,60],[922,1052,70,56],[1056,1087,60,60],[275,846,126,61],[371,1027,114,45],[754,790,98,40],[1026,1149,88,35],[640,299,167,85],[0,378,118,37],[922,479,146,75],[0,539,146,72],[405,463,143,81],[1201,217,81,47],[645,671,115,80],[375,966,110,59],[525,677,115,80],[645,573,34,80],[493,1128,50,38],[1118,1087,60,60],[0,1058,70,56],[72,1096,60,60],[1116,1149,60,38],[994,1063,60,65],[654,1039,67,60],[1093,994,60,39],[1243,350,55,35],[969,1130,55,60],[741,888,70,40],[1180,1092,60,60],[900,842,37,60],[487,1064,60,62],[558,348,70,35],[0,828,70,29],[1178,900,43,60],[1270,13,19,12],[0,518,51,17],[97,613,49,35],[709,1150,52,33],[318,101,44,11],[1254,966,46,31],[778,197,50,22],[871,587,48,38],[122,296,120,120],[845,1102,60,60],[369,1106,60,60],[0,1116,60,60],[907,1110,60,60],[611,1101,60,60],[431,1128,60,60],[245,1105,60,60],[549,1096,60,60],[307,1106,60,60],[134,1108,60,60],[783,1102,60,60],[1121,266,120,120],[900,906,89,79],[286,968,83,76],[115,952,84,79],[201,968,83,76],[826,987,82,72],[487,987,80,75],[1010,994,81,67],[160,864,88,86],[268,565,95,103],[821,474,99,111],[525,906,89,79],[776,587,93,104],[1197,511,98,107],[0,613,95,101],[126,418,101,119],[97,650,94,100],[548,573,95,102],[741,940,83,80],[762,693,93,95],[1198,388,98,121],[318,125,98,165],[969,629,95,99],[193,670,81,115],[418,125,98,165],[518,226,120,120],[877,266,120,120],[82,752,80,110],[857,730,80,110],[1159,706,110,80],[939,730,110,80],[878,388,163,84],[1067,86,164,102],[855,98,135,122],[682,561,92,108],[522,0,159,119],[0,0,160,128],[871,629,96,99],[131,209,176,85],[809,299,60,74],[1066,567,114,85],[431,292,60,52],[697,468,122,91],[148,565,118,83],[0,418,124,98],[167,1046,76,60],[1051,759,92,92],[992,98,60,76],[1070,479,125,86],[419,760,67,67],[1182,620,114,84]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.acc_hat10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.acc_hat11_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.acc_hat12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.acc_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.acc_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.acc_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.acc_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.acc_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.acc_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.acc_hat7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.acc_hat8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.acc_hat9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand11_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand12_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.accessory_hand9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
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



(lib.bg_navigation_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bg_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.cancel_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.check_category_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.check_subcategory_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.color_picker_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.color_picker_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.done_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eyes_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.eyes_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.eyes_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.eyes_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.eyes_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.eyes_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.eyes_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.eyes_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor13_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor14_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor15_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor16_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fringe_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.gloves_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.gloves_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.gloves_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.gloves_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor13_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor14_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor15_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor_16_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.horns10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.horns11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.horns12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.horns1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.horns2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.horns3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.horns4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.horns5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.horns6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.horns7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.horns8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.horns9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.icon_bg_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.icon_gloves_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.icon_gloves_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.icon_gloves_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.icon_gloves_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.icon_horns_10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.icon_horns_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.icon_horns_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.icon_horns_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.icon_horns_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.icon_horns_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.icon_horns_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.icon_horns_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.icon_horns_8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.icon_horns_9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_4_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_5_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.mouth1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.mouth2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.mouth3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.mouth4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.mouth5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.mouth6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.mouth7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.mouth8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.numbers_separator_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.random_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.reset_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.socks_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.substrate_category_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.substrate_category_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.substrate_option_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.substrate_option_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.substrate_subcategory_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.substrate_subcategory_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.tail_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.title_0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.top_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.top_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.top_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.top_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.top_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.top_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.top_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.top_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.top_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.top_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.top_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.top_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.wings_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.wings_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.wings_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.wings_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.wings_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.wings_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.wings_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.wings_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(24);
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


(lib.wings_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings_decor8_img();
	this.instance.setTransform(-152.6,-120.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.6,-120.4,305,241);
p.frameBounds = [rect];


(lib.wings_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings_decor7_img();
	this.instance.setTransform(-154.4,-125.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-154.4,-125.7,309,251);
p.frameBounds = [rect];


(lib.wings_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings_decor6_img();
	this.instance.setTransform(-136,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136,-87.9,272,176);
p.frameBounds = [rect];


(lib.wings_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings_decor5_img();
	this.instance.setTransform(-186.6,-49.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186.6,-49.9,373,100);
p.frameBounds = [rect];


(lib.wings_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings_decor4_img();
	this.instance.setTransform(-168.2,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-168.2,-83.5,337,167);
p.frameBounds = [rect];


(lib.wings_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings_decor3_img();
	this.instance.setTransform(-184.6,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.6,-61.5,369,123);
p.frameBounds = [rect];


(lib.wings_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings_decor2_img();
	this.instance.setTransform(-152.8,-76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.8,-76.7,306,153);
p.frameBounds = [rect];


(lib.wings_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings_decor1_img();
	this.instance.setTransform(-169.8,-67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.8,-67.3,340,135);
p.frameBounds = [rect];


(lib.wings_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AOZSRQACgDAHgoQAHgnAEg/QAFg+gFhJQgEhIgXhEQgWhGgwgzQgCAcADAmQAFAmAPAjIAUAkIgngQQgFAAgggSQgggQgxgmQgygmg3g+Qg4g9g0haQg0haglh6QgehlgXg8QgYg9gQgdQgQgcgKgKQgKgJgDABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgQAPgQAGQggAKgbgCQgbgDgSgRQhAg3AsjEIAEgRIARAFIAPAEQAMADATgBQASgBATgJQAhgTALgxQAEgSACgeIAFhGQADhDAJhTQAIhTAShWQAThWAghMQAjhLA2g1QA2g0BRgQIAIgBQBRgLBAAjQBAAiA2A9QA1A8AyBFQArA7AsA2QAuA1AxAlQAzAmA8ALQA9ANBLgXIAogNIgXAkIgTAbQgSAXgiAgQgjAggxAcQgxAbhBANIgYADQAYAWAmAnQAlAlAsA0QAsA0ArA/QB2CtAfCoQAfCog4CaIgQAsIgNgtIgLgeQgJgdgUguQgTgugeg1Qgcg1gngzQgngzgvgmQgCAvACBAQAABAAIBAQAIBAARAyQARAxAdAUIARALIgOAOIgRAMQgPALgYAIQgZAIgggHQgwgKgogwQAKAsAJA2QAKA2AFA7QAMC0gvB8QgwB9hpA/IggATgAuwR/Qhpg+gwh9Qgvh9AMi0QAFg7AKg1QAJg2AKgsQgoAvgwALQggAGgZgIQgYgIgPgKIgRgNIgOgNIARgLQAdgUARgxQARgyAIhBQAIhAAAhAQACg/gCgvQgvAmgnAzQgnAzgcA1QgeA1gTAuQgUAtgJAdIgLAeIgNAuIgQgtQg4iZAfipQAfinB2iuQArg+Asg0QAsg0AlgmQAmgnAYgVIgYgDQhBgNgxgcQgxgcgjggQgigfgSgXIgTgcIgXgkIAoAOQBLAWA9gMQA8gMAzglQAxglAug2QAsg1Arg8QAyhFA1g8QA2g9BAgiQBAgiBRAKIAIACQBRAPA2A1QA2A0AjBLQAgBMATBWQASBXAIBSQAJBTADBEIAFBGQACAeAEASQALAwAhATQATAKASABQATAAAMgDQAOgCABgBIARgGIAEARQAsDFhAA3QgSAQgbADQgbADgggLQgQgFgQgPQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgDAAgKAJQgKAKgQAeQgQAdgYA6QgXA9geBkQglB6g0BaQg0Bag4A+Qg3A+gyAlQgxAmggARQggARgFABIgnAQIAUglQAPgiAFgmQADgngCgbQgwAygWBGQgXBEgEBJQgFBIAFA/QAEA+AHAoQAHAnACADIAIAjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.6,-120.4,305.2,240.9);
p.frameBounds = [rect];


(lib.wings_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("ASnTkQhCgNg9gfQg+ggg0goQhahEhLhWQhLhVg/heQhKhqhHhtIiOjXIhGhpQgkg1gngzQgigsgmgiQgngkgsgeIgYgGQgGgDACgGIgJADQgJAAgCgGQgDgDACgHQADgHAHgCIADAAQgCg7ARg5QARg4Aeg1QAeg2AkgxQAjgyAigsQBYh2BjhuQBjhuBthkQBUhNBZhIQBahIBhg4QA2ggBBgcQBBgcBEgKQBEgKA+AVQAlAOAeAXQAaATASAbQApA4AQBKQARBKABBRQABA0gEA0IgEAzQgJBKgKA6QgMBGgRBGQgRBHgdBEQgbBCgrA6QgrA3g2AtQg3Atg/AgQhAAehEAQQhfAYhegBQhfgBhfgOIi+geQhfgQhfgGQhfgHhfALIAUAMQBLAQBKAbQBKAaBHAgQDmBmDKCQQDKCQCuC2QAuAwAxA3QAxA3AnA+QAnA9AQBCQAMAxgJArQgIAsgdAgQgdAggzAPQgnAKgmAAQgcAAgbgFgA0+TfQgugPgaggQgbgggHgsQgIgrAKgxQAPhCAjg9QAkg+Asg3QAtg3AqgwQCei2C3iQQC4iQDRhmQBBggBDgaQBDgbBEgQIATgMQhXgLhWAHQhWAGhXAQIisAeQhXAOhWABQhWABhWgYQg+gQg6geQg5gggygtQgxgtgng3Qgng6gZhCQgahEgQhHQgPhGgLhGQgJg6gJhKIgDgzQgDg0ABg0QAAhRAPhKQAPhKAmg4QAQgbAYgTQAbgXAhgOQA5gVA9AKQA/AKA6AcQA7AcAxAgQBZA4BRBIQBSBIBLBNQBkBkBZBuQBaBuBRB2QAfAsAfAyQAhAxAbA2QAbA1AQA4QAQA5gCA7IADAAQAGACACAHQACAHgCADQgCAGgIAAIgJgDQACAGgFADIgWAGQgoAegjAkQgjAigfAsQgjAzghA1IhABpIiBDXQhBBthCBqQg6BehEBVQhEBWhSBEQgvAog4AgQg4Afg8ANQgZAFgZAAQgjAAgjgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-154.4,-125.7,308.9,251.4);
p.frameBounds = [rect];


(lib.wings_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("ANbNvQgJgDgFgJIinkuIgUDGQgCAMgPAFQgPABgIgKIjKkcIg+C5QgEAMgOABQgOABgHgKIhaiBIiGBNQgIADgIAAQgJgCgFgGQgFgHABgIQABgHAJgFIANgIIghhyQgFABgGgBQgKgCgFgLQgCgIAEgHQAEgHAJgCIAFgCIgBhQQgGAAgGgDQgHgFgCgIQgBgHAEgHQAFgGAKgCQABAAAagHIAQgEQAVgJAcgPQAigQAjgcIAOgLQAqglAhg6QAZgrAOg6QAGgUADgSIALhPQANheAShnQAUhoAfhmQAehlAxhVQAxhUBKg1QBIg2BpgIQBkgFBVBCQBAA0AyBXQAzBVAmBuQAmBuAbB5QAcB5ARB6QASB5ALBuQALBvAFBYQAGBZABA3IACBAQgBAOgOAFQgHACgHgCQgHgCgDgFIinjRIgKFyQAAAHgEAFQgFAFgHABQgIACgGgDQgHgCgDgGIjCk0IgWFmQgBANgQAFIgLAAgAu5NdIgSlmIinE0QgDAGgGACQgFADgHgCQgGgBgEgFQgEgFAAgHIgIlyIiPDRQgDAFgGACQgGACgHgCQgMgFAAgOIABhAQABg3AGhZQAEhYAJhvQAJhuAQh5QAPh6AYh5QAYh5AghuQAhhuAqhVQAshXA3g0QBJhCBWAFQBZAIA/A2QA/A1AqBUQAqBVAaBlQAaBmASBoQAQBnALBeIAJBPQADASAEAUQAMA6AWArQAdA6AjAlIANALQAeAcAcAQQAYAPATAJIANAEQAXAHAAAAQAJACAEAGQAEAHgBAHQgBAIgHAFQgFADgFAAIgBBQIAEACQAIACAEAHQADAHgCAIQgEALgJACQgFABgEgBIgcByIALAIQAHAFABAHQACAIgFAHQgEAGgJACQgGAAgHgDIhzhNIhNCBQgGAKgNgBQgLgBgDgMIg1i5IitEcQgJAKgMgBQgNgFgCgMIgQjGIiQEuQgEAJgIADIgJAAQgNgFgCgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136,-87.9,272,175.9);
p.frameBounds = [rect];


(lib.wings_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AEcHyQgCgBgDgDQgGgGAAgHIgDgTQgDgSgIgbQgHgbgPgaQgPgbgYgTQgogdg7AOQgIABgGgEQgHgEgCgHIAAgBIgKgMIgLgLQgFgGgGgEQgMgIgMgEIAAAAQgEAHgHADQgHADgFgDIgBAAQgHgEgDgHQgCgHADgIIAEgHQgKgLgNgKQgOgLgSgKIgGAKQgFAHgHACQgIACgHgEQgHgFgBgHQgCgIAEgHIAZglIAVgeIALgOIAGgHIABgBIAEgHIAEgEIACgBIAAgBIACgDIABAAIAAgBIABgBIACgEIAzg9QANgPANgMIA1g3QBFhFBZhFQBZhFBug7QBvg6CBgmIASgEQAbgKAdgFIABABQBdgUBggHQCGgKB/AJQCAAIBwASQBwATBWAUQBUAVAyAPIAzAPQAKAEADAKQACAKgIAIIjVDTQgHAIgKgDIi+gsICJBaQAIAFABAJQABAIgGAHIh8CJQgKAKgNgFIihhRIB3B0QAGAGgBAJQgBAJgHAFIiwB5QgLAIgLgHIihhwIBnCGQAFAIgCAJQgCAJgJAEIioBMQgLAFgKgHIiaiKIBNCNQAEAIgDAJQgEAIgJACIjdA2QgLACgIgIIiFicIAhCKQACAIgFAIQgFAGgIABIjFARIgCAAIgHgBgAobHzIimgRQgHgBgEgGQgEgIABgIIAciKIhwCcQgHAIgKgCIi5g2QgIgCgDgIQgDgJAEgIIBAiNIiBCKQgJAHgJgFIiOhMQgHgEgCgJQgCgJAFgIIBWiGIiHBwQgKAHgJgIIiVh5QgFgFgBgJQgBgJAGgGIBkh0IiJBRQgKAFgJgKIhoiJQgFgHABgIQABgJAGgFIBzhaIifAsQgIADgHgIIi0jTQgGgIACgKQADgKAIgEIArgPQApgPBIgVQBIgUBegTQBfgSBrgIQBsgJBwAKQBSAHBOAUIABgBQAYAFAXAKIAQAEQBsAmBdA6QBdA7BLBFQBLBFA7BFIAsA3QALAMALAPIAsA9IACADIAAABIACABIAAABIAAAAIACADIAAABIACABIAAABIABACIACABIACAEIADAEIAEAHIAJAOIASAeIAVAlQADAHgCAIQAAAHgGAFQgGAEgHgCQgGgCgEgHIgEgKQgQAKgMALQgLAKgIALIADAHQACAIgBAHQgCAHgGAEIgBAAQgGADgGgDQgGgDgDgHIAAAAQgKAEgLAIQgFAEgEAGIgJALIgIAMIgBABQgBAHgGAEQgFAEgHgBQgygOghAdQgVATgMAbQgMAagHAbQgHAbgCASIgCATQgBAHgFAGQgCADgCABIgFABIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186.6,-49.9,373.2,99.9);
p.frameBounds = [rect];


(lib.wings_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("ACEMlQg+gdgpg0Qgsg9gGhOQgGhNAhhXQAbhCArgqQArgqA2gZQA3gZA+gOQA/gQBCgLQBTgOBRgVQBRgWBJgqQBHgrA4hLQA8hXAehZQAehYAMhUQALhUAFhLQAFg8AHgzQAHgzAQgnQAPgnAfgXQAfgXA0gDQBbgFA3A7QAhAmAPAwQAPAxAEAwQAEAvgCAkQATgQAYgQQAZgQAdgKQAcgLAdACQA0ACAiAvQAXAhgDAqQgCAqgUAuQgVAugeAsQgdAsgfAmQgfAmgXAZQAYABAfAEQAeAFAeALQAfALAZAVQArAlAEA7QABAtgfAmQgfAlgzAeQgyAeg4AVQg5AWgwAOQAnAJAmASQAmASAZAeQAjAtgMA7QgGAkgiAUQgiAUg1AGQg1AGg/gEQhAgEhAgKQhAgKg3gMIhdgVQAPAYAOAfQAOAgAGAjQAIAigHAiQgHAigbAdQgbAagsAAQgsAAg0gSQg0gSg1gaQg0gbgsgbQgtgbgbgTQgDAcgMAoQgLAogYAoQgXAognAeQgnAdg6AIQgUADgUAAQhIgBg+gcgAobM/QgxgIgggdQgggegTgoQgUgogJgoQgKgogDgcQgWATglAbQglAbgrAbQgsAagrASQgsASgkAAQgkAAgXgaQgXgdgFgiQgGgiAGgiQAGgjALggQAMgfAMgYIhNAVQguAMg1AKQg1AKg1AEQg0AEgsgGQgsgGgcgUQgcgUgGgkQgKg7AegtQAUgeAggSQAggSAggJQgogOgvgWQgvgVgqgeQgqgegZglQgagmABgtQADg7AkglQAVgVAZgLQAZgLAZgFQAZgEAVgBQgTgZgagmQgagmgYgsQgZgsgRguQgRgugCgqQgCgqATghQAcgvAsgCQAYgCAXALQAYAKAUAQQAVAQAPAQQgCgkAEgvQADgwANgxQAMgwAbgmQAug7BMAFQArADAZAXQAaAXANAnQANAnAGAzQAFAzAFA8QAEBLAJBUQAKBUAZBYQAZBZAxBXQAvBLA7ArQA8AqBEAWQBDAVBFAOQA3ALA0AQQA0AOAtAZQAtAZAjAqQAkAqAXBCQAcBXgEBNQgFBOgnA9QgiA0gzAdQg0Acg7ABQgRAAgQgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-168.2,-83.5,336.5,167);
p.frameBounds = [rect];


(lib.wings_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AMLJmQgcgEgcgTQgcgTgZgaQgagagVgcQAEAigHAeQgHAegYAPQgVAKgXgKQgYgKgXgWQgXgWgWgaQgTgbgQgZQgJAagTAZQgRAYghAGQgeABgagaQgagagUgkQgTgkgMgdQgTAQgcAGQgbAGgggOQgUgJgOgQQgTgUgMgVIgQgkIgCgDIgRAAQgFgBgFgFQgDgDgCgEIg8hwIgGACQgIAEgGgEQgIgEgCgHQgDgHADgIQADgHAIgDQACABAmgSQAlgRA+gmQA/gmBNg8QBNg9BRhZQBShYBLh3QBHhzB7g8QB5g8CiAAQBlABBmAYQBlAXBbApQBbAqBGA1QBGA2AmA/QAoBDgfAlQgGAJgOAHIAOAMQAdAbAmAmQAlAmAiAtQAiAqASApQARApgKAhQgKAegcAIQgUAEgXgGQgagGgagNQgbgOgagRQAYAiAUAjQAVAjAMAfQAMAggBAXQgCAMgFAJIgKANQgXARgngKQgmgJgtgaQgtgagpgeQAOAbAHAbQAIAcgDAZQgDAZgTATQgWATgggEQghgDgmgUQglgSgkgaQgkgZgdgYQAHAfAHAlQAFAkABAiQAAAigLAZQgKAbgZAKQgdAKgfgQQgegSgcgfQgdgggWgiQABAggDAhQgFAggNAYQgPAYgcAHQgYAFgXgKQgXgLgTgUQgVgVgPgYQABAhgEAfQgEAfgQASQgGAIgNAGQgJAEgMAAIgMgBgAvaJjQgLgGgFgIQgNgSgDgfQgEgfABghQgNAYgRAVQgQAUgSALQgUAKgUgFQgXgHgMgYQgLgYgEggQgDghABggQgTAigXAgQgYAfgZASQgZAQgZgKQgUgKgJgbQgJgZAAgiQABgiAEgkQAGglAGgfQgYAYgeAZQgeAagfASQgfAUgcADQgbAEgSgTQgQgTgCgZQgDgZAHgcQAGgbAMgbQgjAeglAaQglAaggAJQggAKgUgRIgHgNQgFgJgBgMQgBgXAKggQAKgfARgjQARgjAUgiQgWARgWAOQgWANgVAGQgUAGgQgEQgXgIgJgeQgIghAOgpQAPgpAcgqQAcgtAfgmQAfgmAZgbIAMgMQgMgHgFgJQgaglAhhDQAgg/A6g2QA6g1BMgqQBLgpBVgXQBUgYBUgBQCHAABkA8QBmA8A8BzQA+B3BEBYQBDBZBAA9QBAA8A1AmQA1AmAfARQAfASACgBQAGADADAHQACAIgCAHQgCAHgGAEQgGAEgGgEIgFgCIgyBwQgBAEgDADQgEAFgGABIgOAAIgCADIgNAkQgKAVgQAUQgMAQgQAJQgaAOgXgGQgXgGgQgQQgKAdgQAkQgQAkgWAaQgWAagZgBQgbgGgOgYQgQgZgHgaIgeA0QgSAagTAWQgTAWgUAKQgTAKgRgKQgUgPgHgeQgFgeADgiQgRAcgWAaQgVAagXATQgXATgYAEIgJABQgKAAgIgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.6,-61.5,369.3,123.2);
p.frameBounds = [rect];


(lib.wings_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AFQL4IgQgOQgRgOgagQQgagRghgLQgigLgjACQgkACgiAYQgHAFgJgBQgJgBgFgHQgFgIABgIQABgIAHgGIAGgDIgShFQgHgBgFgDQgFgEgDgIQgDgIAFgHQABgEAEgDIgOgsQgHAAgGgEQgFgFgCgJQgCgJAEgHQAEgHAJgCQACABAegKQAggKAvgaQAwgaA2guQA1gvAwhKQAvhLAchqQAehpgCiRQACgPAOgFIAxgSIB7gtQBOgdBhgnQBfgnBnguQBngvBhgzQBhgzBOg1QBQg0Axg1QAFgHAJAAQAJgBAGAGQAHAGABAJQAAAIgFAHIgfAnIgBABIgCADIgTAXQgWAegdApQgqA8gtBKQgtBIggBKQggBJgIA+QgIBNALBDQANBBAUAzQASAzARAdQAQAdACABQAEAGgBAHQAAAHgFAFQgEAGgHACQgHACgGgDIgdgLQgcgJgugJQgugKg3gDQg2gDg4AMQg3AMgwAjQg0AqgWAwQgWAwgDAsQgFAsAGAeQAEAdACADQACAIgDAGQgCAGgFAEQgHAEgGAAQgHAAgGgEQAAgCgSgKQgTgKgfgKQghgKgrABQgsABgzAVQgxAWgbAfQgaAfgKAfQgKAfgBAVQgBAWABADQABAOgOAHQgEACgFAAQgIAAgHgGgAoGLoQgNgHABgOQABgDgBgWQgBgVgIgfQgJgfgXgfQgWgfgrgWQgtgVglgBQglgBgcAKQgcAKgPAKQgQAKAAACQgFAEgGAAQgGAAgFgEQgFgEgCgGQgCgGABgIQACgDAEgdQAEgegDgsQgDgsgTgwQgTgwgtgqQgpgjgwgMQgwgMgvADQgwADgnAKQgnAJgZAJIgZALQgGADgFgCQgGgCgEgGQgEgFgBgHQABgHADgGIAPgeQAOgdARgzQARgzAKhBQAKhDgGhNQgHg+gdhJQgbhKgnhIQgmhKglg8IgshHIgQgXIgCgDIAAgBIgbgnQgFgHABgIQAAgJAGgGQAGgGAHABQAHAAAGAHQApA1BFA0QBEA1BUAzQBTAzBZAvQBZAuBTAnQBSAnBEAdIBrAtIAqASQAMAFABAPQgBCRAaBpQAYBqApBLQApBKAtAvQAvAuApAaQAqAaAbAKQAaAKACgBQAHACAFAHQAEAHgBAJQgDAJgFAFQgGAEgGAAIgMAsQADADACAEQADAHgCAIQgCAIgEAEQgFADgGABIgPBFIAFADQAFAGABAIQABAIgEAIQgFAHgHABQgIABgGgFQgdgYgggCQgdgCgdALQgdALgXARQgXAQgNAOIgQAOQgFAGgHAAQgFAAgCgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.8,-76.7,305.6,153.4);
p.frameBounds = [rect];


(lib.wings_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AN8KGQgWgWgOgjQgOgjgGgpQgQAvgaAiQgbAhgpAGQgrAFgfgdQgTgRgNgcQgLgagHgdQgGgegDgZQgTAbgYAhQgZAfgbAfQgbAdgaAWQgZAVgVADQgWAEgOgPQgOgOgFgeQgEgeABgkQACglAFgiQgYAbgeAaQgfAZggANQggANgegLIgCgBQgbgNgHgbQgGgZAJgcQAJgcAPgZIiHAsQgIACgHgDQgGgDgDgIQgBgIACgHQAEgHAIgDIAHgCIAPiOIgGgDQgGgDgDgHQgDgIAEgHQADgGAIgEQBRgaBAglIAGgEIADgBQACgDADAAQA2gjAlgxQAqg3AShOQARhSgKhyQgJhqBZhXQA3g0BUgpQBMglBbgbIAEgBIAPgEQBogdBvgPQBugQBugCQBtgCBhALQBRAJAjAOQAiAPABAYQABANgOAOQgPAOgoAQQgpAPhLAUIg5AOQAxAHA7AOQA6AOA4AUQA3AVArAdQArAdATAnQAMAXgDAPQgDAPgIAIQgRASgkAEQglAEgygGQgygFg1gLIhogZQAvAfAyAnQAzAnAtArQAsArAaAqQAbAqgBAjQgBAVgJAKQgJAJgIADQgJAFgRgBQgSABgegKQgegLgwgaQgwgahHgvIgMgIQAqAvAqA1QAqA1AiA3QAhA2ASAyQASAygGAmQgFAegMANQgNANgMACQgbAFgkgUQgjgUglgkQgmgjgjgnQARArAKAvQALAvAAAuQgBAsgQAlQgNAZgOAIQgPAIgMAAQgdAAgggaQgggZgegmQgggngZgnQAFAkAAAoQAAAngHAmQgHAlgTAcQgbAqgyAIIgPABQgmAAgcgbgAwiKgQgsgIgYgqQgQgcgGglQgHgmAAgnQAAgoAEgkQgWAngcAnQgaAmgdAZQgcAagZAAQgLAAgNgIQgNgIgLgZQgOglgBgsQAAguAKgvQAIgvAPgrQgeAngiAjQghAkgeAUQggAUgYgFQgLgCgLgNQgKgNgFgeQgFgmAPgyQAQgyAeg2QAdg3Amg1QAlg1AlgvIgLAIQg+AvgrAaQgqAagbALQgaAKgQgBQgPABgIgFQgHgDgIgJQgIgKgBgVQgBgjAYgqQAXgqAngrQAogrAtgnQAsgnAqgfIhdAZQguALgsAFQgsAGghgEQgggEgPgSQgHgIgDgPQgCgPAKgXQARgnAmgdQAmgdAxgVQAxgUAzgOQA0gOAsgHIgzgOQhCgUgkgPQgjgQgNgOQgNgOABgNQAAgYAfgPQAfgOBHgJQBVgLBhACQBhACBhAQQBiAPBbAdIAOAEIADABQBQAbBDAlQBKApAxA0QBPBXgIBqQgJByAPBSQAQBOAlA3QAgAxAwAjQADAAACADIACABIAGAEQA4AlBIAaQAGAEADAGQADAHgCAIQgCAHgGADIgFADIANCOIAGACQAHADAEAHQADAHgCAIQgDAIgFADQgHADgHgCIh2gsQAMAZAIAcQAIAcgFAZQgGAbgYANIgCABQgaALgcgNQgcgNgcgZQgagagWgbQAFAiACAlQAAAkgDAeQgFAegMAOQgMAPgTgEQgTgDgWgVQgXgWgYgdQgYgfgVgfQgWghgRgbQgCAZgFAeQgGAdgLAaQgLAcgQARQgcAdgmgFQgkgGgYghQgXgigOgvQgFApgMAjQgNAjgTAWQgZAbghAAIgOgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.8,-67.3,339.7,134.6);
p.frameBounds = [rect];


(lib.top_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor12_img();
	this.instance.setTransform(-30,-25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-25.8,60,52);
p.frameBounds = [rect];


(lib.top_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor11_img();
	this.instance.setTransform(-56.9,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-42.2,114,85);
p.frameBounds = [rect];


(lib.top_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor10_img();
	this.instance.setTransform(-30,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-36.8,60,74);
p.frameBounds = [rect];


(lib.top_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor9_img();
	this.instance.setTransform(-56.9,-41.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-41.7,114,84);
p.frameBounds = [rect];


(lib.top_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor8_img();
	this.instance.setTransform(-33.3,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.3,-33.4,67,67);
p.frameBounds = [rect];


(lib.top_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor7_img();
	this.instance.setTransform(-62.4,-42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.4,-42.9,125,86);
p.frameBounds = [rect];


(lib.top_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor6_img();
	this.instance.setTransform(-30,-38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-38.2,60,76);
p.frameBounds = [rect];


(lib.top_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor4_img();
	this.instance.setTransform(-38,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-30,76,60);
p.frameBounds = [rect];


(lib.top_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor3_img();
	this.instance.setTransform(-61.7,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-49,124,98);
p.frameBounds = [rect];


(lib.top_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor2_img();
	this.instance.setTransform(-59,-41.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-41.2,118,83);
p.frameBounds = [rect];


(lib.top_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor1_img();
	this.instance.setTransform(-61.1,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.1,-45.5,122,91);
p.frameBounds = [rect];


(lib.top_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("AkjCyIBViHIAAhdQiJg9BdhwQAKgNAOgOQBhgUA6BzQBhhrCXAvIA8DSIAAA1IAjCHIAUAyQhVAVhfAAQi2AAjdhMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.2,-25.4,58.5,50.8);
p.frameBounds = [rect];


(lib.top_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("ACwGjIgPgCQgCAAgDgCQgCgCAAgDIgBgdQgfACggAAQiPgCingvIABAAIgEgBIgBAAIgsgOIgBgBIgBACIgQAaQgCACgCABQgDABgDgBQgagMgcgbIgBgBIgCADQgmAegVAAQgOAAgUgMQgOgIgKgKIg5AAQgDAAgBgCIgCAAIAFgNIACgMIAAAAIACgSQAAglgUgsIgXgsIgBgEIACgEQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAygQAEgUQAAgcA1gkQAwggAYgoIAAAAQAYgqAUhQQAVhVBNhHQBMhICAgfQACgBADACQACABACADQABACgBADQgLAggtA3IAAABQgGAIgGAJIANAJIATAJIABAAIABAAQAdAMAmAAQAaAAAZgGQAZgGAWgMIAVgMQADgBADABIAAgCIAAAAIgBgEQgGgngMg3QAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAjAYAaAPQAYAOAkAKQAnAKAbAYQAbAWAVApQAUAoAGAmIAUBtQAPBPAGAaQAJAvA6AmQAeAUAJALQATAUAAAcQAAAHgGAPQgEAKAAAFQABAIAIAGIAAAAQAQANAEAKIABAFIgCADIgDADQgsAMgbAkQgPATgZA2IgDADIgEABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgJgHgOAFQgcAJgEAAQgYAAgbgbIgBgCIgBABQgNAIgRAHQg6AXg0AAQgHAAgLgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-42.2,113.9,84.5);
p.frameBounds = [rect];


(lib.top_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("AkjCzQAlhbAugqIANhCQgxgXgOgPQgWgXgJgoQgKgpAkhKIAJgRQApAGAhAQQBJAjAkBXQBAhEBHgSQAkgJAlACIBABIQAMBVAgBPIAvDIQhVAUhfAAQi2AAjdhLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.2,-25.4,58.6,50.9);
p.frameBounds = [rect];


(lib.top_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("AANEnIhPh1IgKAKQg6A9gUAYQgugJgzgMQADgIANgdQAJgXABgPQAAgegrgnQgrgnAAglQAAghAphAQAmg+APggIAAhqIBHgeQABAwAMArQARA5AlAxQBZgMBQg8QA2gpAwhAQAUACASAGQA5AUAZA+QhPgSgsC1QgiCJBMCJQg5Ash5AAIgogBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.2,-29.7,62.4,59.4);
p.frameBounds = [rect];


(lib.top_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("AjDECIAvhSIgEg4QgVANgWAAQgdAAgogTQgrgVgRgIQAchDA2gzQAqgoAngMIA4hXQgdghAAgiQgBgUARgQIAGgGIBmgfIgJAbQBWAgBqgPQASgbARgeIBGAtQASBahQAsIgMAHIA1BTIgIApQAQCCArBJIARB0QhiAWhgAAQilAAihhEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.6,-32.6,65.2,65.3);
p.frameBounds = [rect];


(lib.top_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("AFhF9QhBhThDhfIAMA2IAJAuQiWAki1gcIgZjYIg3DJQhSgShYgeIgGgFIAZgiIAPgUIgSARQhlBVh1AkIg3AQQAGgaADgNQAGgfAAgoQAAg2gPgtQgIgVgLgVIA2gSQAygQAXgLQBIgjAqhYIANgvIAgAIQALgiAegoIATgZIgGAIIAzg9QAcghAPgaQgEgbALgbIBLgfQAJAlAcAOQAMAGAQABQAQAAAOgCQA2gKAsg4IAwAjQgIBZg2AoQAMAWATArQAUApANAXIAAAYIAAAoQBYACBQg4IAMAyIgBABIABAEQAUBfBfBLQALAJBYA9IAhAYIAtAiQgsBKhLA2QhBAvgvAMIgggpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.6,-42.2,123.3,84.4);
p.frameBounds = [rect];


(lib.top_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("AACFwIghgFIg8i9IhMCiIh8glQAhhiAvg9QAUgXgPgXQgggMgVgbQgWgcgEgdQgFgfAVgtQAUguA7hHQADgWACgmQAGgqAJgbIAvgRIAWgJQAXgLAXgDQg0BpAmBCIAIAMIgDACIAEgBIACAAIAJACQADABAUgPIgGAEQBthGBFhzQASAOAYAOIALAGIAzAbQgOAMgbBSQgbBTAAA9QAAA+AcBXQAiBhAOAuIAiCIQhJARhSADIgaAAQg0AAg5gGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.2,-37.5,58.5,75);
p.frameBounds = [rect];


(lib.top_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("AAAHEQgygCg2gHQgxgGgzgLQgsgKgugNQgpgMgqgOIA4hQIAAgGQgZgPgDgEQgCgDADgSQADgSAUgMQAKgHACgPQgWAAgTgHQgWgIgTgQQgUgRgQgYIAUhHQgoghAAgZQAAgKAfhHQAkhTAcgZIgpgFQgjgGABgvQAogzgWhCQgDgGAAgHQAAgQAfgcQANALAsANIAKADQBKAVBiAOIAeADIAAABQAAAsgXAaQAbAYAaAkQBEg5A/gWQgIgOAAgMIAFgeIACgIIAjgIQA9gOAzgTQAMgBAdgQIgHADQAcgMAYgOQAcADAbAFQB4AWAAA7QAAAUgSAPIgRBkIAHAGQADAEAAAIQAAAchDAPQgTAEg9AHIARAaQAVAfAJA6QAJA4gOAMQgOALgMANIAAAAIgBABIAAABIACgBIAdBoQgXAagcAQQgiASgmADQgQACgQgBQgBAjAOAWIAVAfQAHAKgCAAQgBAAgMAWIAJBbQgyAMg2AFQglADgoAAIgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.2,-45.2,90.5,90.5);
p.frameBounds = [rect];


(lib.top_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("AguDtQg7gMg9gSIgegUQhwhSBhiNQAvhBADhzIBagZIgnCsQgOA/A6BEQA3hEBdgeIBfjcIBLAjIhLCgIAeBYQAGCEAsBdQgzAFg1AAQhiAAhlgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.7,-25.8,51.5,51.6);
p.frameBounds = [rect];


(lib.top_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("AGbGUIg6gzIghgdIg8g1IgYAXIgDgCIAUAyQiuAqjXgsQhdgThlgiIASgkIg0AdIgEACQg7AfgYAHIgOAAIABAEIgBAAIhrAZIAFgWQADgTAAgJQAAgrgLgtQgMgwgUgcIgBgEIAFgCQAVgHAqgRIAOgGQAlgPAPgIIAFAAQABgTAIgEQADgCAQAAIACAAIAKACIAAgBQADgXASgKIAMgIIAEgDQAQgKAHgKQgDgCgGgPIgDgHIgDgIQAAgPAHgIIAGgHQADgDAEAAIADACIACgCQALgWAGglIAHgzIABgHIACAAIgCgCIAAgCQAGgmAeghQAOgRAVgPIABgBIgBgBIgZgbQAEghARgHIALgFIAFgEQAHgIAAgWQAAgTAKgMIAKgJICugCIgOAcIgFgCIgFAZIABgEQgDANgEALQAPADANAAQArAAAygNQAWgFAXgIQgCgMAAgJQAAgMAEgQIABAAIBjgdIAwAMQAGAJACARIAAAzQAWAAAMAMQALALAAAUIgBAOIgCAFIgDACIgXAOIATAIQAYAJAQAVQAHAKAFAMQAQAigEA/QgBAWACAWQAFAqARAtIALAXIAQAgQAAAQgJAUIgBABQAHABAGADIABAAQAQAGADANQAHAbAFAFIAOAMIA9ArIAdAZQAjAeAqApQgfAMgbBKIgBABQgcBKgRAxQgkgdg6gxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.9,-48.3,121.9,96.6);
p.frameBounds = [rect];


(lib.top_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("AHBFxIgBAAIgQAAQgsAAgcgRQgZgPgUgjQgJgPgTgaQgJAMgMAJQADAfACAFIABAFQj3A7lSh4IARghIgKgMQgtAegfAPQgtAWgjABQgGgBgRgFQgVgFABgFIAAgDIAAgBIgtgBIAAgYQADgagIgiQgHgmgUgYQAOgOAZgJQgNgIAAgGQAAgpBqghQAmgKAJgXQAKgXAogRQAWgXACgfQADgfAVheQAVhfCVgaIACgPIA8gXIAEAIIAHAIQAFAHAIAHIAJAHIABAAIAEADIAAgBIACgBIAHgDIACgBQAKgEAPAAQAbABAPAFQAPAGACANIAQgCQAegIAWgUIAMgMIAoAeQCIAdAUBnIAeCVQAIAsADApIgDADIAPAPQAfAcANAUQANASAOAQQAOAPAFANIAAAAIAbAKQA7AaAAAcQAAAVgMARIAPARQAPAPAAAFQgVAOgVAXQgqAvgGAxQgTgEgZggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-40.5,116.6,81);
p.frameBounds = [rect];


(lib.top_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6DCB").s().p("ACoEmQgiADgkAAIAAAAQiMADilgtQgkgJgmgMQgZAggTAiQgTAcgOAdQhIgPgrg3IgOgUIhLAZQAxikhZhWIBDgZIAFAEQBOgbAkgcQA1goAWhEQAFgSALg5QALg6ASgyQAGgQANgOQAhgiBsgiIBFgXIgmBoQAJALAJAKQA7A4BcguQAegPAigYIAAhgIBdAyIADAKQAkgCAaAbQAMANAKASQAfA8AJBgQAHBgA5BOQAWAbB6CNIAvAvQgZAJgmAuQgyA6gXBKIg8gtIAFgPIgBAAQhZBYh+ARg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-44.7,120.7,89.5);
p.frameBounds = [rect];


(lib.title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_3_img();
	this.instance.setTransform(-290,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-180,580,360);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_2_img();
	this.instance.setTransform(-290,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-180,580,360);
p.frameBounds = [rect];


(lib.title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_1_img();
	this.instance.setTransform(-290,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-180,580,360);
p.frameBounds = [rect];


(lib.title_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_0_img();
	this.instance.setTransform(-290,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-180,580,360);
p.frameBounds = [rect];


(lib.tail_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor8_img();
	this.instance.setTransform(-88.2,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.2,-42.2,176,85);
p.frameBounds = [rect];


(lib.tail_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor7_img();
	this.instance.setTransform(-47.8,-49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-49.2,96,99);
p.frameBounds = [rect];


(lib.tail_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor6_img();
	this.instance.setTransform(-79.9,-63.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.9,-63.7,160,128);
p.frameBounds = [rect];


(lib.tail_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor5_img();
	this.instance.setTransform(-79.7,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.7,-59.5,159,119);
p.frameBounds = [rect];


(lib.tail_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor4_img();
	this.instance.setTransform(-46.1,-53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.1,-53.9,92,108);
p.frameBounds = [rect];


(lib.tail_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor3_img();
	this.instance.setTransform(-67.2,-60.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.2,-60.9,135,122);
p.frameBounds = [rect];


(lib.tail_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor2_img();
	this.instance.setTransform(-82,-50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-50.8,164,102);
p.frameBounds = [rect];


(lib.tail_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail_decor1_img();
	this.instance.setTransform(-81.7,-42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.7,-42.1,163,84);
p.frameBounds = [rect];


(lib.tail_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AHGGDQg1hZheh/IgagqQg7hmAAhKQAAhYAogsIANgLQArgkBPAAQA4AAAvAfQAnAcANAjIABgHIABgEQABgYgLgdQgQgpgkgkQhahbijAAQhtABhkAqQggAOggATQhHAphjBRQirB3hQAlQhRAhhOgOQhPgMg6g2Qg7g2g9ieQgHg5ARgMQAMgIAZAPQAlCzBVA+QBWA8A9gKQA+gLBJghQBJghCRhnQCRhmBkguQBlgtBiAAQBhgBBYAlQBSAjAWAeQAVAeAPAeQAPAdAHApQAIAogBAXIAIgFQAggQAVgJQAWgIAJgBIA7ABQAkABAuA0QAtAzAABSQAAAxgUAsQgbA7hBAvQgkAbhVAzQhhA5hLAzIgPgbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-41.5,175,83);
p.frameBounds = [rect];


(lib.tail_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("Ag8HVQgagSgEgTQgDgNABgQQgQgrAIgqQAJgxAigfQAfgdAXgxQAVgzACgkIgEgIIgLgbQgFgbACgSQACgLAEgIQgciGish1QhohGiEg0QghgVgHgZQgIgaAogJQA0gLBUATQBWATBeAtQDdBtCGC0IAEAUIgPgBQgLAAgHgCIgBAAIABACIAGAIQAPAVATA5IgDABIAEAAQATACAOALIAHAFQAJgLARgMQAJgHAMgHQAMgHANgGIAEgBQAQgHAOgCQAbgEAWAZQAUAXAHAcQAFAkgNAkQgOAkgBAZIgBANQgFATgQAVQgQAVgUAIIgLADQghAHgegUQgSgMgbggIgGgHQgGAFgJACIgDABIACAAQgVCOguBGQgvBGgmAJQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQgBABgVAGQgVAFgUgLQgLAFgPAEQgGACgJAAQgZAAgYgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-48.5,94.2,97);
p.frameBounds = [rect];


(lib.tail_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AEtJiIABgQIADgWIAGgWQAEgLAFgNIAIgPQAJgRAKgMQgOgNAAgUQAAgWAagrIAFgIIANgTIAGgJIAEgFIAGgLIgCACIgFAGIgGAGIgKAKQgfAcgdABQgZAAgQgOQgKgJgGgOQgSglgCgPQgCgIABgKIADgRIAEgVIgGgMIgIgRIgEgJQgLgbAAgXQAAgoAVgOQAMgIAdgCIAXgBIAAACIADgCQAPAAAYAFIACABIAGABIAjAHQgCgHABgGIAAAAQABgGAFgDQi8iekHheQjZhfjfg2Qjfg2g9jOQANgVAQgLQAxglBFA4QA3B8FbBVQDFA+DQBVQEMB6BxCuIAKARQAXgNAJADQAIAEAAAGIABAFQALgIASgHIAPgFIARgEQAYgFAUgCIAagCIACABIAAgBQAbAAARASQAQARACAmQABASgFAUQgGAUgMAVIAAABIgBACIADAcIAAABQAEAdAAAKQAABPhGAAQgPAAgOgDQgNgDgMgFIgCgBIgMgGIACAnQAEBDASAyQAJAXALAUIAEAGQAEAIAHAIIAQATQANAPAAAFQAAAPgZAJQgIADgKACQgUAEgdAAIgIAAQgmAAgVgZQgHgKgFgMIADgBIgEgBQgEgLgCgNIgBgOIAAgIQAAgfADggQACgjAFglQAKhEAQgsIgGgHQggBHgVAoIgNAXQgnA/goAUIgDARIgCAeIgCAeIgEAAIAEABIgBACIAAARIgCAlIgdACIgcABIgQACQgvAAAAgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-63,158.4,126.1);
p.frameBounds = [rect];


(lib.tail_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("Ah7JAIgdgEQnwiNh3o8Qg9kQByhqQA6gkAzgRQC2g8BhC1QAaAyAVBGQAfCAAzBpIAYgSIAKgIQAegVAbAAQAKAAAIACIAAAAQAXAIAJAbQALAfACBPIAAAaIgDAUQACAPABAtIAAARIAaAZQAKgQAHgJIACgEQAYgcAXAAQALAAAMAUQAKARALAfQAPAsADAqIAqAXIAUgnIAJgPQAWgkASAAQAJAAAJALQAKANAMAaQAPAkAIAsQAjAEAggCQAAgeAFgUQAIgsAbAAQALAAALAHQALAHAMAOIAZAlQARgIAQgKIgDgFQAIgFACgGIAAgPQAAgMgMgYQgIgRgPgXIgFgJQgegxAAgfQAAgSAIgQQAIgRAMAAQAKAAAKALQAdAEAUggIgCgLQAAgwAZglQAVgfAdgIQAMgEANAAQApAAATAjQAPAbAAAmQAAAmgSAoQARA5AugTQAHgIAIAAQAKAAAIAIIAGAIQAKAPgVAvQgLAXgqAlQgpAjhGAuQi0ErmJAAQhLAAhWgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.9,-58.8,157.9,117.6);
p.frameBounds = [rect];


(lib.tail_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("ABJITQiIgBiCh1IADgHIgWgMQgvgvgcg0QgnhIgDhSIgDAKQgDAMgCAZIgFAEQgggmgLgsQgHgfAAg/QAAhTgEgXQgJhBgogRQgFgBgCgEIAAgKQAAgUAgAAQAPAAA+AoQAoAZAgAJQATAGAQAAQAcAAAPgHQARgIAJgQIACARQAAAOgKASIgKAOIAGAEQADABAQAAIAagBQBugLBQhpQBFhZALhiQACgUAAgTQAAgUgFgtIgEggQAuAcAbApIADAZIALAAQAPAgAFAqIACAZIAIgRIAIgTQAWg1gBgaQALAJAKALQAgAiAYA4QAnBZAABlQAAAPgDAUQgEAdgKAoIgOAvIgFAKIABABQAZgDAOgHQAMgDAKgHIADAHQANAdALAyQARBNgOBJIAAACQgOBIgZA0QgZA1gyArQgzAqgkAVQgiAUh/AAIgMAAgAEMCFIACAAIgCgCgADEi+IACgCIABgBIgDADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.4,-53.1,90.8,106.3);
p.frameBounds = [rect];


(lib.tail_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AhpJCQgYgNgPgNIgTALQgWAKgLAAQgVAAgQgPIgKgMIgRAJQgWALgPAAQgdAAgdgiQgKgLgGgLIgEgFIAEgCIgFAAQhNgFg3g3QgzgygCg5QgngSgXggQghgrAAg9QAAgzAPgiIAFgKQgGgJgFgJQgRgfAAgfQABg5AogeQAdgWAnAAQAOAAALADQAIgIAKgFQAggSAmAAQA2AAAYAZIABACIABABIABgCQAohWBcAAQANAAAXAHQAaAHAGAGIACgDQgOgJgLgPQgNgTgEgUQgNgHgMgTQgRgcAAgWQAAgyAqg1QA1hBBSAAIANACQAahFAkgcQAjgZA8AAQAsAAAXAKQATAIARAQQAFgBAWAAQA9AAAlAfQAmAfAXBBQARgFAMAAQAvAAAqApQAnAlAGA3QA4APAcA9QAYA0ABBMQgBAggHAgQgHAegMAUIAEAtQAAA4gdA8QgGAMhBBtQgkA+hCAyQhFA1g2AAQgRAAgNgEQgPA1g2AjQg2AkgygFIg3gGIgIgBQgdAog6AAQgcAAgpgXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-60.1,133,120.3);
p.frameBounds = [rect];


(lib.tail_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AGcHZQAOgaAPgoQARgnAJgnIgxAKIgGAAQhvgDg9g5Qg9g3gfhVQgdhWgShYIgYh6QgLg/gSg4QgTg5gigkQhCg9hjgFQhkgEh0AgQhyAghuAtQhhAqhOAjQgYgOgCgTQgCgMAHgOQAIgQAVgUQBEgdBOgeQB1gwB8gaQB6gbBuAOQBvANBOBOQBDBFAgBbQAgBcAUBiQAVBeAZBFQAYBEApAlQArAmBJACIA6gKQgKgsgRgnIgghFQgOgagCgCIGkDRImdDig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-50,162.6,100.1);
p.frameBounds = [rect];


(lib.tail_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AjFGdQgcgCgbgHQgcgHgbgKQgagKgbgLQgagLgZgRQgYgSgXgXQgWgVgWgZIgngyIgjgvIgBgBIAFAQIADAPIACAHIABAEIABADIgBAAQgnghgjgnQgigngbgsQgagngQgmQgSgpgLgqQgMgpgIgsQgHgrgFgtIgCgXIgCgUQgBgKACgKIAEgOQAGgNALgLQAOgNAOgFQANgGANAEQAMACAKAJQALAIAJAMQAKANAHAOQAQAdAWAZQAVAZAbAUQAbATAeAPQAeAOAgAHQAgAJAhAAIgiAJQAHAHAKADQAJAEAKABQAJAAAKgCQgQAIgTADQgSADgSgCQgSgBgSgFQgSgHgPgKQAUAPAVAJQAWAJAZAEQAXAFAZABQAZACAYgBIAwgDQAYgCAYAAIAwgBQAYABAYAFIgXAFQAYAJAZACQAZACAZgCQAZgDAagGQAXgGAXgIIAlgOIAkgQIAlgSQASgJAWgIQAUgKAagJIgGAGIgGALIgHALQgDAFgDACIA4gfIA0geIAygaQAZgNAZgJQAZgJAagGQAbgGAegBQAdgCAhAEIAOACQAJABAIADIAUAGIARAHQAIAEAFAGQAFAEgBAFQgMgCgMACQgLACgLAGQgJAFgJAHQgIAJgGAIQAIABAMgBIAagCIAcgFQANgDANgEIAZgHQAKgEAHgFQAIgGAHgIQAGgJAEgJQAEgKAAgKQABgKgCgJQgDgJgHgIQAUAVAOAZIAEAHIACADIABAEIAFALIAEAKIACAFIABADIADAKQAHAaACAcIgBADIABAFIAAADQABACgBADIAAAcIgBAJIAAAIIgCASIgJAoIgBABIAAABIgaBFIgCADQgRAhgYAfQgYAfgeAbQgdAaghAVIAcABIAQABQgxAng4AeQg3Aeg7AUQg7AWg9ALIAHAFQAMAJANAFIAEACIACABIAPAFIAQADIgBAAQgTALgVAFQgVAFgVACQgVABgXgBIgsgDIgrgHIg2gLIg1gIQgcgDgaAAQgZgBgbAGIgdAGIgdAGQgOAEgPABQgOAAgPgEIAAABIALAOIADAEIACADIAGAFIAJAHQAJAHANAEQAMADASACIgBAAQggAMgeAEQgUADgUAAIgTgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.9,-41.4,162,82.9);
p.frameBounds = [rect];


(lib.substrate_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_subcategory_1_img();
	this.instance.setTransform(-55,-40);

	this.instance_1 = new lib.substrate_subcategory_2_img();
	this.instance_1.setTransform(-55,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect, rect];


(lib.substrate_option_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_option_1_img();
	this.instance.setTransform(-92,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.substrate_option_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_option_0_img();
	this.instance.setTransform(-92,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.substrate_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_category_1_img();
	this.instance.setTransform(-40,-55);

	this.instance_1 = new lib.substrate_category_2_img();
	this.instance_1.setTransform(-40,-55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect, rect];


(lib.socks_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor12_img();
	this.instance.setTransform(-50.5,-59.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-59.3,101,119);
p.frameBounds = [rect];


(lib.socks_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor11_img();
	this.instance.setTransform(-47.3,-50.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-50.4,95,101);
p.frameBounds = [rect];


(lib.socks_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor10_img();
	this.instance.setTransform(-48.7,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-53.5,98,107);
p.frameBounds = [rect];


(lib.socks_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor9_img();
	this.instance.setTransform(-48.8,-82.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-82.7,98,165);
p.frameBounds = [rect];


(lib.socks_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor8_img();
	this.instance.setTransform(-40.3,-57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.3,-57.4,81,115);
p.frameBounds = [rect];


(lib.socks_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor7_img();
	this.instance.setTransform(-47.3,-49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-49.7,95,99);
p.frameBounds = [rect];


(lib.socks_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor6_img();
	this.instance.setTransform(-48.8,-82.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-82.7,98,165);
p.frameBounds = [rect];


(lib.socks_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor5_img();
	this.instance.setTransform(-48.8,-60.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-60.4,98,121);
p.frameBounds = [rect];


(lib.socks_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor4_img();
	this.instance.setTransform(-46.3,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.3,-47.5,93,95);
p.frameBounds = [rect];


(lib.socks_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor3_img();
	this.instance.setTransform(-41.3,-39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.3,-39.8,83,80);
p.frameBounds = [rect];


(lib.socks_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor2_img();
	this.instance.setTransform(-47.3,-50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-50.8,95,102);
p.frameBounds = [rect];


(lib.socks_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor1_img();
	this.instance.setTransform(-47.1,-49.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-49.8,94,100);
p.frameBounds = [rect];


(lib.socks_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("AiCJRQgKAAgSgIQhjgvgKhdQgLhsgJgqQgThZgKghQgVhFgog/QgqhAgOg8QgPg8ADgxIAAgBQgDhYgMhCIgBgDIAAgBIgBgCIAAgBIgEgYQAAABgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAIgTgJIAAAAQgOgIAAgPQgBgWAeAAQAMAAACABIABAAIACABIADgIIAAAAQAJgUAQABQAIAAAFADIAAgBIACAAIADgFIAAAAQAIgPAQAAQAKgBALAOIAAAAIABABQACgGADgFIAAABQAKgOAUAAQAQAAAHAOIAAAAIAAAAIAAABIAEgGIAAAAQAHgJAQAAQALAAAJANIADAEIAAAAQAFgJAOAAQAPAAAFAJIAAABIAAAAIACAGIACgBIAAgBQAJgHAHAAQAGAAAFAEIAGgZIAAgBIABgFIgBgBIgLgIIAAgBIgBAAQgHgHAAgHQAAgTATgJQAIgEAZAGQADgaAXgFQAdgGAEARIABgCQAKgTAPABQASAAAEAJIABABIABgCQALgNAPAAQAUAAAEAKIABADQAIgLAOAAQAJAAAHAGIAAAAQAJAHABARQAQgNAFABQAOAAAIAGIAAAAIAAABQAIAGgBAKIAAABQAMgEAHAAQAOgBAEARIAAAAIAAACIAMgBQAfAAAAAjQABATgUADIAAAAIgMACQgBACgDABIgPAYIAAAAIAAABIgCAEQB8AsAwBpIAAAAIAkBZQAVA0AbAjIABABQASAjAXARIAAgBQAYARAZAcQAbAcgMAnIgBAAQgLAkgXAeQgUAcgOAzQgOA3g2AkQg3AlgjgBIAAAAQgngBgKgPIgDgFIgQACQgWAAgLgMIAAgBQgJgKACgUQADgQAJgaQAIgXgCgPQgDgSAAgeIAAAAQAAgcgEgSQgFgTACgcIACgiQgBgihehDQhnhKgXgiQhTgogagPIAAAUQAAAdARAYQAbAnAIATQAKAaACAuIABBKIACBJQAEAqANAbQAKATAkAiQAcAcAAAjQAAAPgHAgIAAAAQgIAcgBARQABAMAIAiQAHAkAAAQQAAAXgVAvQgcA4gagBQgKAAgRgHIgCgCIgCAEQgNAMgNAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-59.3,100.8,118.8);
p.frameBounds = [rect];


(lib.socks_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("AihH4QgKAAgSgIQhjgwgKhcQgLhtgJgpQgThZgKghQgVhFgog9QgphCgPg8QgFgTgCgRQgBgBAAAAQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAAABABAAQCcArCVhNQACgCADABQADABACADQAJAPAEAKIAAAAQAKAaACAuIABBMIAAAAIADBJQADAoANAaQAKAUAlAiQAdAbAAAjQAAAQgJAfIAAABQgIAcAAARQAAAMAIAiQAJAkAAAPQAAAYgXAvQgcA4gZgCQgLABgQgIIgDgCIgCAFQgNAMgNAAIgBAAgADyDjIAAAAQgngBgJgOIgDgFIgQACQgXAAgKgMIgBgBQgJgKADgUQACgRAKgZQAHgXgCgPQgDgSABgeIAAAAQgBgcgEgQQgFgTADgcIACgkQgCgihehDQhCgwghgfQgCgCAAgDQgBAAAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQCUg9A/icIADgEIAEgBIAEABQBHAsAiBKIAAAAIAlBZQAUA0AbAjIABABQASAjAXARIAAgBQAYARAZAcQAbAegMAnIAAAAQgMAkgWAcQgVAcgOAzQgOA3g2AkQg1AkgjAAIgCgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-50.4,94.6,100.9);
p.frameBounds = [rect];


(lib.socks_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("AiSIXQgKAAgTgIQhjgvgJhdQgMhsgJgqQgShZgLggQgVhGgog9QgphCgPg8QgOg8ADgxIAAgBQgDhbgOhDQgGgigCghQAAgDABgCQACgCACgBQADgBACACQCNBCB9hBQACgUAGgaQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABQCLBQCZg6IAAAAIADgBIAEgBIAHABQADAAACADQACACAAADIgBACQB9AsAwBpIAAAAIAkBaQAVAzAbAjIAAABQATAjAWARIAAAAQAZAQAZAcQAbAegNAoIAAAAQgMAhgWAeQgUAcgOAzQgPA3g2AlQg2AkgjgBIgBAAQgmgBgKgPIgDgFIgQACQgXAAgKgMIAAAAQgKgLADgUQADgQAJgaQAIgXgCgPQgDgSAAgdIAAgBQAAgcgFgRQgEgUACgaIACgkQgBgihehCQhnhKgXgjQhUgogZgPIAAAUQAAAdAQAYQAcAnAIAUQAKAZACAuIABBMIACBHQAEAqANAbQAKATAkAiQAeAcAAAjQAAAPgJAgIAAAAQgJAcAAARQAAAMAJAiQAJAkAAAQQAAAXgYAwQgbA3gagBQgKAAgRgHIgCgCIgDAEQgNAMgMAAIgBAAgABtnJIAAgFIAAgCIAAAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-53.5,97.6,107.2);
p.frameBounds = [rect];


(lib.socks_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("AiSM7QgKAAgSgIQhjgwgKhcQgLhtgJgqQgThYgKghQgVhGgog/QgphBgPg8QgPg9ADgwIAAgBQgDhZgNhEQgOhFAGhHQAFhHAhhxQAhhyBojMIAAAAIAYg9QABgDADgBQADgBADABQEXBxEigzIAEAAIADADIACADIAPB/IAAAAIAAABIAAABIAAAAQAMB+htCXQhJBjgZApQB9AsAwBqIAAAAIAkBXQAUAzAbAjIABABQASAkAXAQIAAAAQAYARAZAcQAbAegMAnIAAAAQgMAkgWAeQgVAcgNAzQgPA3g2AkQg2AkgkgBIAAAAQgmgBgKgOIgDgFIgQACQgXAAgKgNIAAAAQgKgLADgTQACgRAKgZQAHgXgCgQQgCgSAAgdIAAAAQgBgdgEgRQgFgTADgcIACgkQgCgjhdhCQhohKgWgiQhUgmgZgPIgBAUQAAAbARAYQAcAnAHATQAKAZACAvIABBMIAAAAIADBJQADAqAOAaQAKAUAkAiQAdAbAAAjQAAAQgIAfIAAABQgJAcAAARQAAALAJAjQAIAkAAAPQABAYgYAvQgcA4gZgCQgKABgRgIIgDgCIgCAEQgNANgNAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-82.7,97.7,165.5);
p.frameBounds = [rect];


(lib.socks_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("AkZI5IgDgCIgCgCQgFgLgRgbQgqhBgOg8QgPg9ADgwIAAgBQgDhbgNhEQgOhFAFhFQAFhHAihxQAghyBojMIAZg9QABgDADgBQADgBADABQEWBxEjgzIAEAAIADADQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIAQB/IAAABQAMB+huCYQhJBigYAoQB8AsAwBqIAAABIAQAlIAAADIgBAEQhNCLiKAdIgDAAIgDgBIgYgSQhphKgXgiQhSgogZgPIAAAUQAAAdARAYQAbAnAIATQAKAZACAvIABBCQAAADgCACQhJBPh6AAQgeAAghgFgAgRkgQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAIABgCIgDgBIAAgBIgBABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.3,-57.4,80.8,114.8);
p.frameBounds = [rect];


(lib.socks_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("Ai5HiQg5gbgagrQgSgdgEgjQgLhtgJgqQgThZgKghQgWhHgog+Qghg0gQgxIgGgWQgGgXgDgVQCcA5CShiQARAaAGAOQAEAKACANQAEATABAbIABBMIADBJQADAqAOAcQALAUAlAjQAbAZAAAgQAAAPgIAeQgJAeAAASQAAAMAJAjQAIAjAAAPQAAAXgWAtQgZAygWAAQgJAAgPgHIAAABQgCADgCABQgDAAgDgBIgCgBIgBABQgLAKgKAAQgJAAgQgHgADzDVQgigBgJgMQgDgEgCgHIgCADQgMACgGAAQgTAAgIgKQgIgIADgQQACgQAJgZQAJgZgDgRIAAgEQgCgRAAgZQgBgegEgQQgFgSADgbIACgkQAAgmhjhFIgTgOQgfgWgUgSQChgdAvjKQAeAWAVAcQASAXAMAbIAkBZQAVA0AcAkQAQAgAUARIAHAFQAYARAYAbQAYAbgLAjQgLAigWAbQgMAQgJAXQgIATgGAYQgLAoggAdIgXASQgzAighAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.6,-48.9,93.3,98);
p.frameBounds = [rect];


(lib.socks_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("AiSM7QgKAAgSgIQhjgwgKhcQgLhtgJgqQgThYgKghQgVhGgog/QgphBgPg8QgPg9ADgwIAAgBQgDhZgNhEQgOhFAGhHQAFhHAhhxQAhhyBojMIAAAAIAYg9QABgDADgBQADgBADABQEXBxEigzIAEAAIADADIACADIAPB/IAAAAIAAABIAAABIAAAAQAMB+htCXQhJBjgZApQB9AsAwBqIAAAAIAkBXQAUAzAbAjIABABQASAkAXAQIAAAAQAYARAZAcQAbAegMAnIAAAAQgMAkgWAeQgVAcgNAzQgPA3g2AkQg2AkgkgBIAAAAQgmgBgKgOIgDgFIgQACQgXAAgKgNIAAAAQgKgLADgTQACgRAKgZQAHgXgCgQQgCgSAAgdIAAAAQgBgdgEgRQgFgTADgcIACgkQgCgjhdhCQhohKgWgiQhUgmgZgPIgBAUQAAAbARAYQAcAnAHATQAKAZACAvIABBMIAAAAIADBJQADAqAOAaQAKAUAkAiQAdAbAAAjQAAAQgIAfIAAABQgJAcAAARQAAALAJAjQAIAkAAAPQABAYgYAvQgcA4gZgCQgKABgRgIIgDgCIgCAEQgNANgNAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-82.7,97.7,165.5);
p.frameBounds = [rect];


(lib.socks_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("AiSJcQgKAAgSgIQhjgvgKhdQgLhsgJgqQgThZgKggQgVhGgog/QgphAgPg8QgPg8ADgxIAAgBQgDhbgNhDQgOhGAGhHQADgwARhEIACgEIAEgCQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQBWAsBbAZQA0ANArAFIAEACIACADIAAAEIgGAdQgQBHAAAhQAABLAbAbIADADIAAAEIgCADQgBAFAAAXQAAAdARAYQAcAnAHAUQAKAZACAuIABBKIADBJQADAqAOAbQAKATAkAiQAdAcAAAjQAAAPgIAgIAAAAQgJAcAAARQAAAMAJAiQAIAkAAAQQABAXgYAwQgcA3gZgBQgKAAgRgHIgCgBIgCACIgBABQgNAMgNAAIgBAAgAEBFIQgmgBgKgPIgDgFIgQACQgXAAgKgMQgKgLADgUQACgQAKgaQAHgXgCgPQgCgSAAgdIAAgBQgBgcgEgRQgFgUADgcIACgkQgBgWgwgpIgFgEQgDgCAAgDIgDAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgLABQgQAAgHgJQgFgGgEgQQgBgDABgCIADgDIABgCQABgDAEgBQCSgxA+iWIAAAAIACgCIAAgBIACgBIAAAAQADgBADABIAAAAIACACQASARAGALQAGANAAARQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABIABAEIgBAHIACAAQADACABADIAOAiQAUAzAbAjIABABQASAjAXARQAYAQAZAcQAbAcgMAoIAAAAQgMAjgWAeQgVAcgNAzQgPA3g2AlQg1AjgjAAIgCAAgAB3hDIACACIACgDIgEABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-60.4,97.7,121);
p.frameBounds = [rect];


(lib.socks_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("AkYHMIgDgCIgCgDIgKgsQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQACgBADABQAsAIAgAAQA2AABJg0IANgIIAEgCIAEABIADADQAIAOAUAVQACACAAADQAAADgCACQgVAYgWAPIABAAQg2AnhMAAQgiAAgrgPgAkMFoIAAAAIglgDIgEgBIgDgEQgHgYgLgXQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQBTgCBIgpQArgYAZgfIAAAAIAGgIIAEgDQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAIAEADIACAEIAAAOIACA7QAAADgDACQhXBZhjAAIgBAAgAC6EMQgDgCAAgDQgCgPACgTIACgVQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIA6gLQAqgJAqgaIAAABQArgcAqgWQACgBADABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAIAKAKAHIAPALIACADIAAAEIgBADQg1A7hIAfQhCAdhPAEIAAAAQgDAAgCgCgAldEGQgBAAgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBIgPgYIAAAAIgXgoQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQA9gHBOgoQBYgtAqg2QAAAAAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAAAABgBQAAAAABAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAHAMAEAJQAEAMADAQIAAADIgBADQgrA4hCAtQhJAxhMATIgCAAIgCgBgACuCoIgEgDIgBgEIAAgCQgOgQgWgTQgDgCAAgDQAAgDACgCQAigvAohXQAjhQAVhCQABgDACgBQACgCADAAQADABACACQAOAPAMASQABADAAADQgPBRggBNQgMAfgNAaIBDgmQAfgUAZgXQABAAAAAAQAAgBABAAQABAAAAAAQABAAAAgBIAFABQAAABABAAQAAABABAAQAAAAAAABQABAAAAABQAHARAJAOIABAEIgCAEQgdAsgvAeQg3AjhFAMIgBAAIgBAAIgCABIgCAAgAlUB4Ig1gBIAAAAIgYgDIgDgBIgDgDIgBgEQgIgigCgdQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAQAAAAABAAQAAABABAAIAMADIAAAAQAsAKAiAAQBGAAA+gdQAZgNAfgUIAEgBIAEABIADADIAHAKIANATIABAEIgBAEQgdAtg5AXIgBAAQg6AYhPAAIAAAAgAgVAAIgDgBIgMgOIg0gZQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQATgDAagIQA1gSA3ggQBTgxAtg7QABgCADAAQADgBACABQAXANATAQQACABABADQAAADgCACQgrBEhEAwQg/ArhaAcIgCAAIgCAAgAm+iCIgCgEIgEgXIAAAAQgDgPgBgPQgBgDACgCQACgCADgBQADAAACABQCQBcCAgZQACAAADABQACABABADQAHAWANAMIACADIAAAEIgCADIAAAcQAAADgCACQgCACgDABQgjAGghAAQiCAAhghegAizieQgDAAgCgCQgDgCAAgDIgBgZQAAgRAEgaQABgDACgCQADgCADAAIAdAEQAeADALAAQBaAABSgUQBEgPAegKIgEAFIAAABIgBABIAAABIgNAUIAMAEQACABACACQABADgBACQAAADgCACIgWAPIgPAKQg6AihLAKQgqAGg8AAIhEAAgACLjsIABgBIAAAAIgBABgAnHkCQgDAAgCgDQgCgCABgDIAAgBIAAAAIABgfIACgUQAAgDADgCQACgCADAAIAJABQARABA9AAQBaAAAygLQAUgEAVgJQiggEheg3QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAOg3IADgDIADgCIAEAAQCfA7B5ADIAFABIACAEIAAAFIgFAQQAYAIASAEQA3ALBhAAQBoAAAYgGQAPgEARgIQADgBACABQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgtA/IAAAAIAAABIAAAAIgBABIgCACIgUADQgyAHhAAAQhRAAhOgVQgRgEgWgIIgHAgIgDAOIgCAEIgEACQgWAFhRANQgmAGgrAAQgxAAg4gIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.3,-47.5,92.6,95.1);
p.frameBounds = [rect];


(lib.socks_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("Aj1F/QhfgtgKhZQgLhtgJgqQgThZgKgfIgFgQQCCAkBZhnQADArAOAbQALAVAlAhQAbAZAAAgQAAAPgIAeQgJAdAAASQAAAMAJAkQAIAjAAAPQAAAWgWAtQgZAygWAAQgJAAgPgGIAAAAQgCADgCABQgDABgDgCIgCAAIgBAAQgLALgKAAQgJAAgQgIgAC3ByQgigBgJgLQgDgEgCgIIgCADQgMADgGAAQgTAAgIgKQgIgJADgQQACgQAJgYQAJgXgDgRQgCgSAAgdQgBgdgEgSQgFgTADgaIACglQAAgUgegeQCBABA9iSQATAvAaAhQATAmAYARQAYAQAYAbQAYAbgLAjQgLAjgWAdQgVAdgOA0QgOAzg0AiQgzAigiAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.6,-39.1,81.2,78.3);
p.frameBounds = [rect];


(lib.socks_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("Ai6HtQhfgtgJhZQgMhtgJgqQgThZgKghQgVhGgpg+QgohBgPg7QgFgUgCgTQCnArB6hqQAbAnAHASQAKAZACAsIABBMIACBHQAEAtAOAbQAKAVAmAjQAbAZAAAgQAAAPgJAeQgJAdAAASQAAAMAJAkQAJAjAAAPQAAAWgXAtQgZAygVAAQgJAAgPgGIAAgFQgBgDgDgCIgfgQIgHgDQAQAUAOAMIgBAAQgLALgLAAQgJAAgQgIgADyDgQghgBgJgLQgDgEgDgIIgCADQgLADgGAAQgTAAgJgKQgHgJACgQQADgQAJgYQAIgZgCgRQgDgSAAgdQAAgdgFgQQgEgTACgaIACglQAAglhihGQhXg+gdgiQChgwA4ikQBSAsAkBPIAkBZQAVA1AbAjQAUAmAYARQAXAQAZAbQAYAbgLAjQgMAjgVAbQgWAdgOA0QgOA1gzAiQgzAigiAAIgBAAgAC8CfQgFAbADABQACACADgBIABAAQACgBACgDQABgDAAgCIgEgPQgBgDgDgCIgBgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.5,-50.1,93.2,100.3);
p.frameBounds = [rect];


(lib.socks_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("Ai8HjQhagrgNhTIgBgFIAAgDQgMhtgJgqQgThZgKghQgVhHgpg+QgohAgPg7IgDgRQAbAEAmAAQBpAAAwgSIAWgKQAagPAfgcQARAZAFAOQAKAYACAtIABBMIACBJQAEAqAOAcQAKAUAmAjQAbAZAAAgQAAAPgJAeQgJAeAAASQAAAMAJAjQAJAjAAAPQAAAXgXAtQgZAygVAAQgJAAgPgHIgBABQgBADgDABQgDAAgDgBIgBgBIgBABQgLAKgLAAQgJAAgQgHgADwDWQghgBgJgMQgDgEgDgHIgCADQgLACgGAAQgTAAgJgKQgHgIACgQQADgQAJgZQAIgZgCgRQgDgRAAgdQAAgegFgQQgEgSACgbIACgkQAAgmhihFQg8grgggeQA+gTA7g0IAPgOQAwgvAeg3IANgbQA3AoAdA+IAkBZQAVA0AbAkQAUAlAYARQAXARAZAbQAYAbgLAjQgMAigVAbQgWAdgOA1QgOA0gzAjQgzAigiAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.3,-49,92.8,98.2);
p.frameBounds = [rect];


(lib.shoes_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor12_img();
	this.instance.setTransform(-42.2,-39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.2,-39.2,84,79);
p.frameBounds = [rect];


(lib.shoes_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor11_img();
	this.instance.setTransform(-41.4,-37.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-37.7,83,76);
p.frameBounds = [rect];


(lib.shoes_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor10_img();
	this.instance.setTransform(-44.6,-39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.6,-39.2,89,79);
p.frameBounds = [rect];


(lib.shoes_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor9_img();
	this.instance.setTransform(-46.2,-51.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-51.9,93,104);
p.frameBounds = [rect];


(lib.shoes_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor8_img();
	this.instance.setTransform(-44.6,-39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.6,-39.2,89,79);
p.frameBounds = [rect];


(lib.shoes_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor7_img();
	this.instance.setTransform(-49.7,-55.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.7,-55.2,99,111);
p.frameBounds = [rect];


(lib.shoes_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor6_img();
	this.instance.setTransform(-47.3,-51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-51.4,95,103);
p.frameBounds = [rect];


(lib.shoes_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor5_img();
	this.instance.setTransform(-43.7,-43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-43.1,88,86);
p.frameBounds = [rect];


(lib.shoes_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor4_img();
	this.instance.setTransform(-40.3,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.3,-33.3,81,67);
p.frameBounds = [rect];


(lib.shoes_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor3_img();
	this.instance.setTransform(-39.8,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.8,-37.5,80,75);
p.frameBounds = [rect];


(lib.shoes_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor2_img();
	this.instance.setTransform(-41.1,-35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-35.8,82,72);
p.frameBounds = [rect];


(lib.shoes_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor1_img();
	this.instance.setTransform(-41.4,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-37.8,83,76);
p.frameBounds = [rect];


(lib.shoes_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AkkFPQgygigRhjQgNgpgNg7IgGgeIgBgEIgKg8IgHgbIgEgQQCWAlBTh4QAGATANARQAHALALALIATAVQAXAZAFAIIADAKIAWArQgIAegBAMIgBAOQAAAKAHAmQAFAlAAAMQAAA2gcAwQgdAwg3AjQhcgkgTgOgABHBQIgVghQgGgKABgIQAAgNAJgcQAJgeAEgnQACgQAAgQQgBgXgEgXIAAgBQgEgWAEghQADgWAGgcQCBAoBQifQALAPATAQIALAJIAdAYIALAIQAOANAKASQAMAWAFAgIAKAsQgoApgoB6QgqBviEAAQgoAAgxgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-38.5,82.9,77);
p.frameBounds = [rect];


(lib.shoes_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AksFAQgygigRhjQgQgygQhQIgGgmQANgRAVgHQAfgNA4AAQAegBAdAMIANAHIAEgdQAEgoAXgwQAKAWAUAVQAoArAHAKIADAMIAWApQgIAegCALIAAAPQAAAJAHAmQAFAnAAAMQAAA1gcAwQgdAxg3AhQhbgjgUgOgAknA+QgiABgTAIQgSAGgFAKQANA7AaAJQAbAIAZgIQAZgJAPgRQAPgOgFgqIgOgGQgOgGgYAAIgNABgAA/BBIgVghQgGgKAAgHQAAgOAKgcQAJgeAEgnQADgngGgnQgDgTACgZIAQgGQAggMAhAAQAfAAAmARQAZALANAOIASgXQAQgYACgWQAFgxAGgYQAGgRAHgPIAMAJIAoAhQAgAcAJA4IAKAsQgoApgoB6QgqBviEAAQgoAAgxgLgABRiVQgFAIgBAOQgBAOANAVQAMATAcAEQAcADAYgOQAXgNAMgXQgHgSgcgNQgdgOgWgBIgEAAQgTAAgYANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.6,-37,81.3,74);
p.frameBounds = [rect];


(lib.shoes_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AjuF7QgWgHgRgOQgYgTgOgeIgCgFQgPgjgCgyQgSgygPhQQgKhCgIgZIAAgCIgGgDQgDgCgBgDQgBgDABgCIAAgBQgTgMgLgQQgMgSAAgRQAAgcAhAAQAHAAAKAMQgCgGAAgGQAAgZApgQQApgQAaAAQAYAAAOAKQAMALAHANQAFgLAKgNQAVgeASAAQAOAAAJAUQAIAQgBAQQABAPgGAJIgGAHQACACABADQABADgCACIgDAFQAMAYAVAWQApAqAGAJIADAMIAWArQgIAegBAMIgBAOQAAAKAGAmQAHAmAAAMQAAA2gcAvQgQAagYATIgOALQgmAKgeAAQgYAAgUgGgABhBiIgBgBIgXghQgEgKAAgHQAAgOAJgdIAAgBQAJgcAEgnQADgngFgnQgFgcAHgpQgHgWgFgHQgGgHAAgJQAAgKAIgIIADgCIgDgFIgGgEQgEgCAAgEQAAgRA5gXQAygUANAAQATAAANALIAHAIIAAgBIATgSQAjghARAAQAOAAALANQAKALAAAOIAAACIACABQACAAACADQABADgBADIAAADIAFAEIAoAhQAgAdAJA3IAKAsQgoApgoB6QglBhhqAMQgPACgRAAQgnAAgvgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.8,-38.5,87.7,77.1);
p.frameBounds = [rect];


(lib.shoes_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("Aj7GfQgygigRhjQgRgzgPhPQgLhDgHgaQgIggg4iJIgWgzIAUACIAzAAQAjAAAegEQBngOAxhAQANAgAFAcQgDgGgCAFIAFABQgCAOABAPIADBOIAAALQAHAsAlAlQAoAsAHAKIADAMIAWArQgIAegCALIAAAPQAAAJAGAmQAGAmAAAMQAAA2gcAvQgdAxg3AiQhcgjgTgOgABwCgIgWghQgFgKAAgIQAAgNAKgeIAGgWQAEgWADgXQADgogGgmQgGgnAQhBIgHgTQgMgagKgEQgOgFgtgjQAjgNAkgVQAZgPAagUQBOg7AYg/QAKAPAIASQAMAZAIAeQAMAvAWAYQAPAUAZAUIApAgQAgAdAJA4IAKAsQgoApgoB3QgrBxiDAAQgoAAgxgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-46.4,91.1,93);
p.frameBounds = [rect];


(lib.shoes_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AjuF7QgWgHgRgOQgYgTgOgeIgCgFQgPgjgCgyQgSgygPhQQgKhCgIgZIAAgCIgGgDQgDgCgBgDQgBgDABgCIAAgBQgTgMgLgQQgMgSAAgRQAAgcAhAAQAHAAAKAMQgCgGAAgGQAAgZApgQQApgQAaAAQAYAAAOAKQAMALAHANQAFgLAKgNQAVgeASAAQAOAAAJAUQAIAQgBAQQABAPgGAJIgGAHQACACABADQABADgCACIgDAFQAMAYAVAWQApAqAGAJIADAMIAWArQgIAegBAMIgBAOQAAAKAGAmQAHAmAAAMQAAA2gcAvQgQAagYATIgOALQgmAKgeAAQgYAAgUgGgABhBiIgBgBIgXghQgEgKAAgHQAAgOAJgdIAAgBQAJgcAEgnQADgngFgnQgFgcAHgpQgHgWgFgHQgGgHAAgJQAAgKAIgIIADgCIgDgFIgGgEQgEgCAAgEQAAgRA5gXQAygUANAAQATAAANALIAHAIIAAgBIATgSQAjghARAAQAOAAALANQAKALAAAOIAAACIACABQACAAACADQABADgBADIAAADIAFAEIAoAhQAgAdAJA3IAKAsQgoApgoB6QglBhhqAMQgPACgRAAQgnAAgvgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.8,-38.5,87.7,77.1);
p.frameBounds = [rect];


(lib.shoes_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AjZHvQgdgUgRgpQgNgegIgqIgFgRQgOgugNhDQgLhDgGgaQgKglgYgvIhQixQgZhHgJhRIAAgDIgBgIQgFgogBgcIAfAKIATAEIAcAGQAgAFAegBIASAAQAkAAAagDIAYgDQAkgGAVgPIAIAgIAKAfIADAKQAKAdAWA2QAaA/gGCOQAGAyAoArQApAsAGAKIADAMIAUArQgGAegCAMIAAAOQAAAJAGAnQAEAlABAMIgBASQgCAQgCAPQgGAbgQAZQgdAxg3AjQhbgkgUgOgACxD2IgfgGIgVghQgFgKgBgIQAAgNAKgeQAFgQADgTQAEgQABgSQAEgogGglQgHglAQhAIAAgCQgcgwgmgcQgtgcgXgRQgfgXgognIgQgPIgoglIgNgLQApgHAvgdQAVgOAVgSIABgBQBEg4Aig6IAGgMQAkAJAfAWQAqAdAgA1IARAdQAdA2A0BzIAEAJQAJAMAMALQAIAJALAIIApAgQAgAeAJA3IAKAsQgoAngoB5QgOAlgXAZIgCADQgwAxhXAAQgbAAgfgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.9,-54.5,97.9,109);
p.frameBounds = [rect];


(lib.shoes_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AiEIBQhdgkgUgOIAAAAQg0gjgRhnIAAAAQgRgzgQhOIAAgBQgKhCgHgaQgKglhijcQgBgDABgDQABgDACgBQADgBADAAIATAFQAnAIAdACIADABIADADIBOB4QgCgSgFhRIAAAAIgBgUQAAgDABgCQACgDADAAQAugHAlgRQAfgPAZgWQACgCACAAQABAAABAAQAAAAABAAQABABAAAAQABAAAAABQACABABADQAUBQgGBiIAAAAQAFAuAmApQApAtAHAKIABACIADALIAVAqQACADgBADQgIAdgBAMIAAAAIgBANQAAAJAHAlQAGAnAAANQAAA4gdAwQgfAzg4AjIgEABIAAAAIgDgBgAB6DRQgDAAgCgDIgWghIAAAAIgBgBQgFgMAAgIQAAgPAJgfQAKgeADgmQAEgmgGgkQgHgnAQhCQgJgdgggYIAAAAIhohWQgCgCgBgDQAAgDACgCQABgDADAAQAYgFASgKIAAAAIANgHIAEgBIADABIAqAgIAAAAIAeAXIgbg0IgMgVQgCgDABgDQABgCACgCIAdgXQBUhHANhGQAAgDACgBQADgCADAAQADAAACACQAsAuA2CDIgBAAQAZA2AOAUIAAAAQANASAPANIArAhIABABQAiAeAJA7IAAAAIAKArIAAAEIgCADQgnApgnB1IAAAAQgsB2iIAAQgpAAgygLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-51.4,94.8,102.9);
p.frameBounds = [rect];


(lib.shoes_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AkqFPQgxgigShjIgCgHIgPg2IgJgmIgGgfIgKg7IAOAGQAaAJATgIQALA1AjAbIAHAFIADgIQAQgmgRg2IAPgGQAZgQAYgbQATgXATgdIAIgNQALAZAXAYIANAPQAdAeAFAJIADAKIAWArQgIAegCAMIAAAOQAAAKAHAmQAFAlABAMQAAA2gdAwQgdAwg3AjQhbgkgUgOgABBBQIgVghQgFgKgBgIQAAgNAKgcQAKgeADgnIABgUQABgdgEgcIAAgBIAAgBQgHgiANg4QAFAIAHADQAJAGAKgFIAAACIgBABIgGA+IAPgHQAHATAMAUIALgNQAMgUAEgXQAGgfgIgmQAOgFANgHQAhgTAbgcQAWgXAQgeIADgGQAPAUAZAUIAGAEIAjAcQAgAdAJA4IAAABIAKArQgoApgoB6QgqBviEAAQgoAAgxgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.8,-38.5,81.7,77);
p.frameBounds = [rect];


(lib.shoes_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("Ak/ERQgngdgShaIACgBIgDgIIgBgCQgIgYgIgfIAJgCQAUgBATAGQARAFARAKIA1AhIADACIACgDIAMgXQAHgPAIgJIAHgKIADgCQAPgRASgIQAUgKAXACIAAABIAAgCIAAABIgBgLIgBgCQgCgLAAgWQAAgdAFgUQAEgPADgXIASAWIADAMIACAQIAEgDIAQAeQgHAXgCANIgBADIAAAPQAAAJAGAmQAGAnAAAMQAAA2gcAuQgMAVgRASQgXAZggATQhOgVgpgfgAl2CZQAJAaAJARQAsAgANAHQAbAQAuAEQAqAFAZgxIAFgKQARglAAg4QgWAGgVAMQgLAGgKAHIgNAKIgZAUIgVARQgjgdgngFIgQgBQgSAAgGACgAA0AVIgWgfQgFgKAAgHQAAgOAPgZQAFAXAmAAQAOABAOAJQAOAKALAAQA2AAAsgqQAKgKAIgLIgEgEIgagTIgIgFQgQgKgTgCIgNgBQgQgBgMAHIgJAFQgOAIgRANQgCgEgNgKQgJgIgJgCIgHgBIgNABIADgVIABghIAAgLQAKgCAOAHIAGAEIAHAFQAQANAEAYQAUgQAQgLIANgJQAOgIAKgDQAGgCAFAAQATAAAaAMIAFADIALAGQASAMAGAJIAIADIAIgUIACgFQAKgiAGgMQANgdAVgcQAVgcABgfQARAVADARIAKAsQgaAbgaA+QgOAfgOAqQgHASgIAPQgwBPhvAAQgoAAgxgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-32.6,79.1,65.2);
p.frameBounds = [rect];


(lib.shoes_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("Ak7E+QgygigRhjQgIgXAAgXQAEAGAZAfQA3ArApgEQApgDAYhAQAXhAAAhEQAAgcgKhFIgEgbQAKAQAPAQQAoArAHAKIADAMIAWApQgIAegCAMIAAAOQAAAKAGAmQAGAmAAAMQAAA2gcAvQgdAxg3AiQhcgkgTgOgAAwA/IgWghQgFgKAAgHQAAgNAKgdQAIgaAQgqQAKAsAnAAQBTAAA6hrQAwhYgBh3IAHAGIApAhQAgAdAJA3IAKAsQgoApgoB6QgrBviDAAQgoAAgxgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.1,-36.8,78.3,73.7);
p.frameBounds = [rect];


(lib.shoes_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AlAFAQgggogRhjQgRgygQhQIAAgCQAgggAUgJQAYgKAoAAQAzAAAfAQIAHgJQANgWAIgnQAGgWABgTIAPARQApArAGAKIADAMIAWApQgIAegBAMIgBAOQAAAKAGAmQAHAmgBAMQAAA2gYA3QgYA2hFAGQgTACgQAAQg+AAgagfgAA9A7IgXghQgEgKAAgHQAAgIACgLIAHgXQAKgeADgnQADgngFgnQgDgPABgUQAOgTAWgHQASgGAlAAQAnAAAYAMQAQAHAQAQQAbgRAig6QAUgiALgdIAWASQAgAdAJA3IAKAsQgoApgoB6QgqBviEAAQgoAAgwgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.3,-35.1,80.7,70.3);
p.frameBounds = [rect];


(lib.shoes_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AkrFBQgfgWgghjIgDgJIgBgDQgRgzgPhQIgCgLIgGgiIAJAIIANALIgEgXQgFgZAAgIQAAgaA0gRQAngMAdAAQAfAAASAfIAbAvIAHgTIAHgeIACgHQAFgXADgXQAJAPAOAPQAoArAHALIADAMIAWApQgIAegCALIAAAPQAAAJAGAmQAGAmAAAMQAAApgQAkQgFANgHALQgdAxg3AiQhcgjgTgOgABABBIgWggQgFgKAAgIQAAgJAFgPIAFgRQAJgeAEgoIABgjQgBgWgDgUQgEgYAFghIAEgcQAGgFAygHQAygIATACQATADAKANQAKAMAKA1QAqhVAJgaQAKgeAEgQIAEgRIACACIAIAIIAAAAIApAhQAgAdAJA3IAKAtQgoAogoB6QgWA4gtAdQgrAahAAAQgoAAgxgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.7,-37,81.5,74.1);
p.frameBounds = [rect];


(lib.shadow_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_decor_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.nav_navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.arrow_img();
	this.instance.setTransform(-45,-45,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ak8E9QiFiDAAi6QAAi5CFiEQCDiEC5AAQC6AACDCEQCECEABC5QgBC6iECDQiDCEi6ABQi5gBiDiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.mouth8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth8_img();
	this.instance.setTransform(-11.7,-9.1,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.7,-9.1,23.1,18.3);
p.frameBounds = [rect];


(lib.mouth7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth7_img();
	this.instance.setTransform(-12,-5.4,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-5.4,24,10.6);
p.frameBounds = [rect];


(lib.mouth6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth6_img();
	this.instance.setTransform(-10.8,-7.5,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.8,-7.5,22.1,14.9);
p.frameBounds = [rect];


(lib.mouth5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth5_img();
	this.instance.setTransform(-10.6,-2.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.6,-2.9,21.1,5.3);
p.frameBounds = [rect];


(lib.mouth4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth4_img();
	this.instance.setTransform(-12.5,-7.7,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.5,-7.7,25,15.9);
p.frameBounds = [rect];


(lib.mouth3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth3_img();
	this.instance.setTransform(-11.6,-8.5,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.6,-8.5,23.5,16.8);
p.frameBounds = [rect];


(lib.mouth2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth2_img();
	this.instance.setTransform(-12.1,-4.2,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.1,-4.2,24.5,8.2);
p.frameBounds = [rect];


(lib.mouth1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth1_img();
	this.instance.setTransform(-4.3,-2.7,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.3,-2.7,9.1,5.8);
p.frameBounds = [rect];


(lib.hwherher = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor5_img();
	this.instance.setTransform(-46,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-46,92,92);
p.frameBounds = [rect];


(lib.horns12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns12_img();
	this.instance.setTransform(-134.1,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.1,-42.5,268,85);
p.frameBounds = [rect];


(lib.horns11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns11_img();
	this.instance.setTransform(-110.4,-65.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.4,-65.9,221,132);
p.frameBounds = [rect];


(lib.horns10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns10_img();
	this.instance.setTransform(-89.2,-39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.2,-39.2,179,78);
p.frameBounds = [rect];


(lib.horns9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns9_img();
	this.instance.setTransform(-86.1,-31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.1,-31.6,172,63);
p.frameBounds = [rect];


(lib.horns8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns8_img();
	this.instance.setTransform(-79.3,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.3,-42.2,159,84);
p.frameBounds = [rect];


(lib.horns7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.horns7_img();
	this.instance.setTransform(-64.8,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.8,-40.5,130,81);
p.frameBounds = [rect];


(lib.horns6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns6_img();
	this.instance.setTransform(-52.3,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.3,-19.5,105,39);
p.frameBounds = [rect];


(lib.horns5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns5_img();
	this.instance.setTransform(-100.7,-41.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.7,-41.8,201,84);
p.frameBounds = [rect];


(lib.horns4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns4_img();
	this.instance.setTransform(-29.6,-52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.6,-52.9,59,106);
p.frameBounds = [rect];


(lib.horns3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns3_img();
	this.instance.setTransform(-103.6,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.6,-36.8,207,74);
p.frameBounds = [rect];


(lib.horns2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns2_img();
	this.instance.setTransform(-96.6,-37.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.6,-37.4,193,75);
p.frameBounds = [rect];


(lib.horns1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns1_img();
	this.instance.setTransform(-97.8,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.8,-20.1,196,40);
p.frameBounds = [rect];


(lib.hero_main_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_3_img();
	this.instance.setTransform(170,-233.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-233.5,340,467);
p.frameBounds = [rect];


(lib.hero_main_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_2_img();
	this.instance.setTransform(-158,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158,-230,316,460);
p.frameBounds = [rect];


(lib.hero_main_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_1_img();
	this.instance.setTransform(-171.5,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-235,343,470);
p.frameBounds = [rect];


(lib.hero_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("An/MhIABABQjIhdANiYQAMiQguh4QiakiBTlKIAAgBQCknoIohIIABAAQIcgaEkHaIABABQC3F9jYGFIgBABQAOAVAAAYQABBChLBQQhPBShNAAQgRAAgRgLQjADakqA9Ig1AJIAAAAIgoAFIgaADQjMgCiihXgAhUtpQoeBHihHeQhSFFCXEdIAAABQAwB7gMCUQgLCPC9BXIAAAAQCfBVCPAEQADAAACADIAAAAIAAAAQACgDADAAQAkAAAjgFIABAAQAngEAlgHIAEAAIABAAQADgCADAAIABABIADgCQElg7C9jXQgFgIgHgQQgBgDAAgKIAAgHQADAIAIAKIAQATIABABIABABIACACQANAJAOAAQBIgBBJhNQBGhKAAg9QAAgWgPgTIgFgGQgUgUgjgBQgiAAgaAMIgCABQAkgbAjAAQAgAAAZAZIAAAAQDSl8i0l0IAAAAQkQm6nsAAIg2ABgAlEJQQgNgJgFgHIAAAAQgLgSAGgXQABgDADgEIAIgKQAEgHAAANIgBAPQgFAQAIANIAAAAIAQAXIAHAJIgBAAIAAAAQgEAAgNgIgAHzIVQgBgDABgDQAGgQALgPIAAgBQASgdAegdQAagaAYgNIADgBQAWgMATAAQADAAADACIAAABQgNAFgXAPQAIAngVAgQgYAkgmAAQgKAAgTgFQgGAMgOAKIgFAEIAAgDgAI+HAQgZAYgQAZQANADAHAAQAeAAATgdQARgZgFgfQgTAMgVAVg");
	this.shape.setTransform(7.1,-118.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC6C6").s().p("AjFNtQgCgCgDAAQiPgEifhVIAAAAQi9hYALiOQAMiUgwh7IAAgBQiXkcBSlGQChnfIehGQITgZEfHSIAAgBQC0F1jSF8IAAgBQgZgYggAAQgjgBgkAcIACgBQAagNAiABQAjABAUAUIAFAFQAPATAAAXQAAA9hGBKQhJBNhIABQgOAAgNgKIgCgBIgBgBIgBgBIgQgTQgIgLgDgHIAAAHQAAAKABADQAHAQAFAHQi9DXklA8IgDABIgBAAQgDAAgDACIgBAAIgEAAQglAHgnAEIgBAAQgjAFgkAAQgDAAgCACIAAABgAlPIDIgIALQgDAEgBADQgGAWALASIAAABQAFAHANAIQANAJAEAAIABAAIgHgJIgQgXIAAAAQgIgNAFgQIABgPQAAgJgCAAIgCACgAJpGKIgDACQgYANgaAaQgeAdgSAdIAAABQgLAPgGAQQgBADABACIAAAEIAFgEQAOgLAGgLQATAFAKAAQAmAAAYgkQAVgggIgnQAXgPANgGIAAAAQgDgCgDAAIAAAAQgTAAgWALgAIVHvQAQgZAZgZQAVgUATgMQAFAfgRAZQgTAcgeABQgHAAgNgDg");
	this.shape_1.setTransform(7.1,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.1,-207.3,166.5,178.2);
p.frameBounds = [rect];


(lib.hair_decor15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor15_img();
	this.instance.setTransform(-131.9,-101.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.9,-101.1,264,202);
p.frameBounds = [rect];


(lib.hair_decor14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor14_img();
	this.instance.setTransform(-162.7,-197.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.7,-197.8,325,396);
p.frameBounds = [rect];


(lib.hair_decor13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor13_img();
	this.instance.setTransform(-149,-61.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149,-61.9,298,124);
p.frameBounds = [rect];


(lib.hair_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor12_img();
	this.instance.setTransform(-157.9,-185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.9,-185,316,370);
p.frameBounds = [rect];


(lib.hair_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hair_decor11_img();
	this.instance.setTransform(-128,-103.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-103.4,256,207);
p.frameBounds = [rect];


(lib.hair_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hair_decor10_img();
	this.instance.setTransform(-151.1,-178.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.1,-178.3,302,357);
p.frameBounds = [rect];


(lib.hair_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor9_img();
	this.instance.setTransform(-119.6,-108.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.6,-108.6,239,217);
p.frameBounds = [rect];


(lib.hair_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor8_img();
	this.instance.setTransform(-170.4,-195.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170.4,-195.3,341,391);
p.frameBounds = [rect];


(lib.hair_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor7_img();
	this.instance.setTransform(-169.9,-176.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.9,-176.3,340,353);
p.frameBounds = [rect];


(lib.hair_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor6_img();
	this.instance.setTransform(-191.2,-189.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191.2,-189.2,382,378);
p.frameBounds = [rect];


(lib.hair_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor5_img();
	this.instance.setTransform(-147.2,-132.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.2,-132.8,295,266);
p.frameBounds = [rect];


(lib.hair_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor4_img();
	this.instance.setTransform(-107.9,-183.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.9,-183.4,216,367);
p.frameBounds = [rect];


(lib.hair_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor3_img();
	this.instance.setTransform(-141.9,-193.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-193.9,284,387);
p.frameBounds = [rect];


(lib.hair_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor2_img();
	this.instance.setTransform(-118.7,-163.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.7,-163.3,237,327);
p.frameBounds = [rect];


(lib.hair_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor1_img();
	this.instance.setTransform(-178.1,-195.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178.1,-195.5,356,391);
p.frameBounds = [rect];


(lib.hair_decor_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor_16_img();
	this.instance.setTransform(-117.3,-102.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.3,-102.2,235,205);
p.frameBounds = [rect];


(lib.hair_base15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AFzPnQhPgRgmhVQgehJAPhIQAFgWALgUQhphKgbgiQg6hDAUhbQAJgoAWgmQg9hIgZgvIgEgIQgZAtg3BCQAXAmAJAoQAVBbg6BFQgbAhhoBLQALAUAGAVQAQBJgfBJQglBVhPASQhDAPhHgZQhTgfgahBIAChNQApBDAGAFQAYARApgKQAbgGAPgWQAPgVgGgYQgJgohZhIQhXhKgWhgQgkijDCgsQAagGATgBIgBgBQh8hCgVhXIgLgxQgGBFguA3QgiAphMA4QAPAqAAApQAABdhHA2QgiAbh2AyQAHAWAAAWQgBBKguBBQg2BLhRAAQhFAAhAgpQhKgwgMhFIAThLQAbBLAEAFQAUAWAqAAQAbAAAUgSQASgSABgYQgBgphGhaQhFhbAAhjQAAinDIAAQAZAAAUADIAAgBQhrhbAAhaIAAgzQAShSB2gMQhJghgegaQhHg4AAhbQAAgiAdgeQAQgTAwgjQAigZAcgIIgKglQgKguAAgfQAAimBrh3QB8iMDcAAQB3AABmBKQA8gfBLgRQCJgfCFBKIABAAQB4g4B6AaQA+AOAzAXQBag4BnAAQDcAAB8CMQBrB3AACmQAAAfgKAuIgKAlQAcAIAiAZQAwAjAQATQAdAeAAAiQAABbhHA4QgeAahJAhQB2AMASBQIAAA1QAABahrBbIAAABQAUgDAZAAQDIAAAACnQAABjhFBbQhGBagBApQABAYASASQAUASAbAAQAqAAAUgWQAEgFAbhLIATBLQgMBFhKAwQhAAphFAAQhRAAg2hLQguhBgBhKQAAgWAHgWQh2gygigbQhHg2AAhdQAAgpAPgqQhMg4gigpQgOgRgKgRQgkA5hXAwIgBAAQAUABAZAGQDDAqgjCjQgVBghYBLQhXBJgKApQgEAXAOAVQAQAWAaAGQApAJAZgRQAFgEAphEIADBMQgaBChSAfQguARgsAAQgZAAgYgFgApBgVQAgAygBA6IAAACQAMhGBjggQhOgQgjgSIgBgBQgOAQgOALgAgEgWQAWAYAPAeQAMgVASgRQgWgbgPgqQgOAfgQAWgAHugBQApAMAaAUQAHgSAKgOIgSgRQgcAJgmAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.2,-100.4,262.4,200.9);
p.frameBounds = [rect];


(lib.hair_base14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AHJdcQh1hbABibQAAiDBIhWQBOheCHAAIAJAGIAEgGIAAgBQBthiA7ifQAmhnARh9Qg1CuhmCOQijDjjEAAQgPAAgtgEQgvgFgfgFQBcgDBqhPQBihKBYh7QChjiAbjTQgYAHgbAAQhUAAhDg/Qg7A1hNARIgCgHQA2gyAnhCQgyhHAAhUQAAg1AbhEIARAFQAABeA5A+IACADQAyiGAKizQAHhlgGjXQgDiuAEhjQgXhagFgWQgdiVABlvQABlvhujnQAqiRBzhAQBzhBBjAAQCAAAAkCUQAOAzAFBWQAFBdAEApQACAWAEEGQACCsAqBeQA+CGBhCQQBsCYAxBIQBTB9AmBpQAwCHAACeQAAB4gcBfQgaBXhVB/QCvFhAADbQAACyhsDAQhjCziTBxQiJCxiMA4Qh8Axh8AAQivAAhshWgAN5VLQhQB7hbBOQgnAhgnAYQAPARASAPQBRBBCDAAQCKAABfhvQAcghAZgsQANgXALgYIgQgHQAVhIAAiDQAAh+gHgzQgcDniaBtQApgxAeheQAfhgADhEQAEhEgNhGQgNhHgggTQALC0i4EagAVAW8QERpMkmmTQCgIYiLHHgAKrHIIgOAbQATAFAWAAQApAAAegbIgLiEIgRitQgGCnhACFgATagzIgWBIIAiBFIAeA6QBLiUAAiIIACAAIgCgJQgJgjgNghQgQgqgjhBQgGCDgmCKgAQEqaQAoEoAtCIQAQAvAWA1IADgRQAfiMABh7QgBgggHgsIAFgEIgKgQQg3hfghhGQgshcglhnIAYDMgAvbeBQiMg4iJixQiThxhkizQhrjAAAiyQAAjbCvlhQhVh/gahXQgchfAAh4QAAieAwiHQAmhpBTh9QAxhIBsiYQBhiQA+iGQAqheACisQAEkGACgWQAEgpAFhdQAFhWAOgzQAkiUCAAAQBjAABzBBQBzBAAqCRQhuDnABFvQAAFvgcCVQgFAWgXBaQAEBjgDCuQgGDXAHBlQAKCzAyCGIACgDQA5g+AAheIAQgFQAcBEAAA1QAABUgyBHQAnBCA2AyIgCAHQhNgRg7g1QhDA/hUAAQgbAAgZgHQAcDTChDiQBYB7BiBKQBqBPBcADQgfAFgvAFQgtAEgPAAQjEAAijjjQhmiOg1iuQAQB9AnBnQA7CfBtBiIAAABIAEAGIAJgGQCHAABOBeQBIBWAACDQABCbh1BbQhsBWivAAQh8AAh8gxgAyvTxQAACDAVBIIgQAHQALAYANAXQAZAsAcAhQBfBvCKAAQCDAABRhBQASgPAPgRQgngYgnghQhbhOhQh7Qi4kaALi0QggATgNBHQgNBGAEBEQADBEAfBgQAeBeApAxQiahtgcjnQgHAzAAB+gA0/W8QiLnHCgoYQkmGTERJMgAsBFJIgLCEQAeAbApAAQAWAAATgFIgOgbQhAiFgGinIgRCtgA04jVQgNAhgJAjIgCAJIACAAQAACIBLCUIAeg6IAihFIgWhIQgmiKgGiDQgjBBgQAqgAw8qjQghBGg3BfIgKAQIAFAEQgHAsgBAgQABB7AfCMIADARQAWg1AQgvQAtiIAokoIAYjMQglBngsBcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.9,-197,323.9,394.2);
p.frameBounds = [rect];


(lib.hair_base13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("ALKJhIgYgFQgUhJgZhtQgjidgZigQgijVAzi5QAchnA5hxIALgVIAEABQBAARBFAgQCUBFCEB6QCNCBBeCgQBlCwAeC9IABAJIgEAFQgMg9haiyQhZiuhJhKQA2BBA4CGQA9CWAcCPQgSgDggABQgjAAgNACQgWADgWAGQgUhBgfhMQgxh1g2hYQATAsAWBQQAfBtAWCIIgSAKQgVALhMA1QhWA7hjAfQg1ARg4AKIgGABQgYADgWAAQgTAAgRgCgAsbIQIgGgBQg4gKg1gRQhjgfhWg7QhMg1gVgLIgSgKQAWiIAfhtQAWhQATgqQg2BWgxB1QgfBMgUBBQgWgGgWgDQgNgCgjAAQgggBgSADQAciPA9iWQA4iGA2hBQhJBKhZCuQhaCygMA9IgEgFIABgJQAei9BliuQBeiiCNiBQCEh6CUhFQBFggBAgRIAEgBIALAVQA5BxAcBnQAzC5giDVQgZCggjCdQgZBtgUBJIgYAFQgRACgTAAQgWAAgYgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.3,-61.2,296.6,122.4);
p.frameBounds = [rect];


(lib.hair_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("A22aoQhsiGAAifQAAiHA0h6QAkhRBciJQBuiiAthVQBZiiA/iyQBAizAGimQAGikgWklQgWklBsncQDPnqGDhZQAwgLA0gFQA0gFA2ACQCfgkCYAXQB/ASB5A8QCCBAB7BvQDSDqBCFSQAfCaAAEAQAABigMDRQgICaAJBZQAYD1DgGUQBLCJBdCQQBcCRATAjQAsBPARBMQASBTAACCQAACLhTCMQgoBDgzA2QhXAHhZgDQBFhIA7h4QAvhiAchqQAahhAAg+QAAhbgQg8QgHgcgehQQAEASACAaQACAXAAA9QAAD1h2DAQhmCmikBMIhygFIi1gGQAegzAmhVQAnhVAHhjQAJhjinkdIgBgCIAAABIAiBtQAlCCAABJQAACdgmBJQgfA6hjBjIiUgGIhMgBQi0AAoLANIi7AEQhdg3hAhmQgig1gahEIgXhDIgDgPIgDgBIAABJIAEAqQAFAtAKAZQAKAZAQAdIAZAxQAVAoAkAkIigAEQgtgFg1gCQg0gCg8ACQgQgIgRgLQhTg0hIhFQjCi7AXi2IAAgGQgGANAAApQAAB1AqBtQA6CVB9BbIgDAEQhcAHg9AHQhbhFg4hGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.2,-184.3,314.4,368.7);
p.frameBounds = [rect];


(lib.hair_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AGJQDQA/grAAhqQAAhGgQglQgFgLgIgNIAAADQAAATgQAnQgVAygkArQhsB+i+AAQgWAAgigMQghAMgXAAQi+AAhrh+QglgrgVgyQgQgnAAgTIAAgDQgIANgEALQgQAlAABGQAABqA/ArIiEAAQhMgRgngrQgkgpgIhGQgSAhAAAuIABAnQACALAPAHQhPgHg2hQQgyhJAAhMQAAgrAGgRQhAA9gpgEQgsgEgVgOQgXgPgJgDIAZADQAiABAAgWQAAgrgmglQgUgThBgoQg7gmgZgbQgmgqAAg2QAAgVAWgcIAIgJQgCgMAAgNQAAgtANghQANgiAfgcQgkAXgnBIQgRAegFAUIgDgKQgIgoAAgSQAAhkA9hTQAqg4BfhIQBCg0AlghQArmSEckDQB2hrCJg9QB7g2BfAAQAvAIAwALQAyALAZALQAagLAygLQAwgLAvgIQBfAAB7A2QCJA9B2BrQEcEDArGSQAlAhBCA0QBfBIApA4QA+BTAABkQAAASgJAoIgCAKQgFgUgRgeQgnhIgkgXQAeAcAOAiQANAhAAAtQAAANgCAMIAIAJQAWAcAAAVQAAA2gmAqQgZAbg7AmQhBAogUATQgmAlAAArQAAAWAigBIAZgDQgKADgWAPQgVAOgsAEQgqAEg/g9IAAAAIAAAAIAAAAQAGARAAArQAABMgyBJQg3BQhOAHQAOgHADgLIAAgnQAAgugRghQgIBGgkApQgnArhNARgAtcK4IAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.3,-102.7,254.6,205.5);
p.frameBounds = [rect];


(lib.hair_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AHKbkQAPgpAQg3QAvifAAiDQAAhDgQhJIAAgCIgDgKIAAAMQAABGgLBBQgJA0gRAxQg4CjiRB+IotAAQiRh+g4ijQgRgxgJg0QgLhBAAhGIAAgMIgDAKIAAACQgQBKAABCQAACDAvCfQAQA3APApQhkALgpAAQgvABhIgTIgOgDQg1gsgnhWQgZg0gLgzIgEgWIAABTIABA4IAFBIQAEAdAGATIjVgdIgLgIQhRgThEh0QhDhxAAhiQAAhJAdhgQAKghAOgkIAAAAIAAgBIAbhBIgkA8IAAABIgBABQgTAhgQAiQg6B9gBBPQAABCAZBmQAKAkAIAbIg7hJQhPh3ANheQgZAZgXAzQgSAlgEBHQgPhXADgiQAIhdA/h1QA/h3B/jdQB/jdA0h3QBPi4AAiGQAAgxgokRQgljTAAjIQABjuBHjgQBGjWB8inQB7imCchdQA6gjA8gWQA8gWA8gJQEVhuEWBuQA8AJA8AWQA8AWA6AjQCcBdB7CmQB8CnBGDWQBHDgABDuQAADIglDTIgRBUIAEACQgbDDAAApQAACGBPC4QA0B3B/DdQB/DdA/B3QA/B1AIBdQADAigPBXQgEhHgSglQgXgzgZgZQANBehPB3Ig8BJQAJgbAJgkQAahmAAhCQgBhPg6h9QgQgigTghIAAgBIgBgBQgRgfgTgdIAbBBIAAABIAAAAQAOAkAKAhQAdBgAABJQAABihDBxQhEB0hRATIgLAIIjVAdQAGgTAEgdIAFhIIABg4IAAhTIgEAWQgFAagKAbQgJAZgMAZQgnBWg1AsIgOADQhIATgvgBQgpAAhkgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.4,-177.6,300.8,355.2);
p.frameBounds = [rect];


(lib.hair_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AMaQ2IgcgGQAogRAdgaQggAKghAAQhJAAhBglQBUgbAihMIANgiQgfhDiLghQgCglgQgrQgFgRgHgPQABAigcA0IgHAOQg+gJhWgHIgChNQgCAdgbAuQhQgEhigDQlYgHi8ANIgIABQgHgMgCgMQgHgUAAgoQgYALgHAlQgCAJAAAeQhHAHg6AJQgOgXgLgaQgYg4ACggQgCALgIATQgKAbAAAkQAAAaAFAdQidAhgYA8QAJAdAPAdQAxBkBHAAIAFAJQgdAOgXAAQhYAAhOgtQgZgOgPgMIABACQAwBEAjAjIgDADQgLADgIAAQiRgBhui/QgthLgahZQgZhTAAg+QAAiPCNk+QAwhuAzieQA4i/AkhwQBslTEOifQDTh+ESAAQEoABDuD5QDVDeA+ElQAaB4BBCJQAmBMBXCVQBPCLAeBBQAuBqAABPQAADFhlCaQhuCqimAAQgMAAgFgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.8,-107.9,237.7,215.8);
p.frameBounds = [rect];


(lib.hair_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AEpeIQhEgbgxg+Qgpg1gQg8QgGAlAAAqQABAxAOA2IAGAYQg1gWgvg3IgVgbQgNgTgKgVQgMAVgNATQgKAOgLANQguA3g1AWIAHgYQANg2AAgxQAAgqgEglQgRA8gqA1QgwA+hEAbQgZAKgbAFQAQgRASgbIASgcQAMgWAIgWQAFgRACgQIgbAcIgiAeQhXBGhBABQASgRATgcQAbgoAJgsQghAxhGAkQg0Aag0AMQAPgVANgZQAZgwAJg2QgSAagSAPQgWATgbAMQgiAPgsADIgPAAIgSgBQAJgMAIgSQAGgTAEgZQAFgfABgnQgSASghATQggAUgfAFIADALQAEAJAEAHIgUACQgwAAgkgZIgMgJIAHgJIgJAHQgUAMgdAAQgEAAgcgJQgggJgFgGIgDgDQgQAMgTAGIgDAAIgBACQgHAVABAcQAAARACAMQgRgKgNgOQgUgYgEgeQhygNg/hwQgwhVAAhIQAAg2ADgGIAAgBQARAwAVAUQAVARAoAAQBKAAAigeQAkgfAAhHQABgVgJgXQgMgGgPgEQgYgIg+gJQg/gJgjgJQh5ghg/hjQhHhxgLjUQg9hjgBhkQABiABFhoQBHhqCCg6QC4hUBcgZQBQgNAogRQBJggAAhNQAAhThXhRQgSgTiriCQiBhig9hYQhXh7AAiZQAAhtBRiVQBSiaCKiKQCSiVDvilQDciZB0gsQHQjLIADLQByAsDdCZQDvClCTCVQCJCKBTCaQBRCVAABtQgBCZhWB7Qg+BYiABiQisCCgSATQhXBRAABTQAABNBKAgQAnARBQANQBcAZC5BUQCBA6BIBqQBFBoAACAQAABkg+BjQgLDUhHBxQg/Bjh5AhQgjAJg/AJQg9AJgYAIQgPAEgNAGQgIAXAAAVQAABHAlAfQAhAeBKAAQApAAAUgRQAWgUAQgwIAAABQADAGAAA2QAABIgwBVQg/BwhxANQgFAegTAYQgNAOgRAKQACgMAAgRQAAgcgHgVIAAgCIgEAAQgSgGgRgMIgDADQgFAGgfAJQgdAJgEAAQgdAAgUgMIgJgHIgFASQgjAZgxAAIgUgCIAIgQIAEgKIgCAAQglgDgogXQgggTgRgSQAAAnAFAfQADAZAIATQAGASAJAMIgQABIgQAAQgrgDgkgPQgagMgWgTQgRgPgTgaQAJA2AYAwQANAZARAVQg1gMg1gaQhFgkghgxQAJAsAbAoQATAcASARQhCgBhVhGIgjgeIgbgcQACAQAGARQAGAWANAWIASAcQASAbARARQgcgFgZgKgAWPQmQhvBfgvAqQAXAFAMAAQCFAABOhsQA7hUABhaQg5A/hbBNgA3lRIQBNBsCGAAQAKAAAYgFQgugqhwhfQhahNg5g/QAABaA8BUgAU1ucQAhBYAABxQAAA3goBnIgQAoQAfgbAUgbQBChWAAiCQgBhshJhRQgsgyhFghQA9A5AgBWgA1HvYQhKBRAABsQAACCBBBWQAVAbAeAbIgQgoQgohnAAg3QAAhxAhhYQAghWA9g5QhEAhgsAyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.7,-194.4,339.4,388.8);
p.frameBounds = [rect];


(lib.hair_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AQLbLIgagNQghAMgjAAQgPAAgTgHIgFgMQAygTAmg8QAthJAHhoQgXBIghAuQhHBfh9AAQgTAAgagGQAagPAcgsQAcgrAHgoQhXBshAAOIgHAAQAAgMgFgjQgEgjgBgdQABhvAsh5QAQgrATgmIACABIABgFQAthXBMhmQglASgjAAQgOAAgQgGQgzgZg2hwQg9h/AAgzQACgyAHgNQAHgMA5gXQhBgihIhCQhWhNgaiKIgBAZQAABjA1BiQAjBCAjAWQh+gkhAidIgFgKIgDADQgvgugkg+Qg7hngBhpQAAhMAThZQAShVAfhXQkXDMkYjnQAnBlAUBiQATBZAABMQgBBpg7BnQgkA+gvAuIgDgDIgFAKQhACdh/AkQAkgWAjhCQA1hiAAhjIgBgZQgaCKhWBNQhIBChBAiQA5AXAHAMQAHANACAyQAAAzg9B/Qg2BwgzAZQgQAGgOAAQgjAAglgSQBMBmAuBXIAAAFIABgBQAUAmAQArQAsB5ABBvQgBAdgEAjQgFAjAAAMIgHAAQhAgOhXhsQAHAoAcArQAcAsAaAPQgaAGgTAAQh9AAhHhfQghgugXhIQAHBoAtBJQAmA8AyATIgFAMQgTAHgPAAQgjAAghgMIgaANQghAPgXAAQg0AAgsgOQiFgNhLg7QhMg7grhNQgthNgUgxQgVgxgKg4IAAASQAAB2AiBfQAaBJAqAvIgCABQhKgng1huQg3h3AAiRQAAh/AyiAQAJgZALgWQAphbA7g7IADgEQgPgNgLgWQgag0AAhRQAAhtAJgwQAShVAzAAQAPAAAdAHIAeAGQgOgQgOgSQhiiCAAi4QAAhKAahtQAriuDMkWIAAADQAGiDBAiZQA7iNBhiDQBfiABlhNQBqhRBRgBQKFp7KoJ7QBRABBqBRQBlBNBfCAQBhCDA7CNQBACZAGCDIAAgDQDMEWArCuQAaBtAABKQAAC4hiCCQgOASgOAQIAegGQAdgHAPAAQAzAAASBVQAJAwAABtQAABRgaA0QgLAWgPANIADAEQA7A7ApBbQALAWAJAZQAyCAgBB/QAACRg2B3Qg1BuhKAnIgCgBQAqgvAahJQAihfAAh2IAAgSQgKA4gVAxQgUAxgtBNQgrBNhMA7QhLA7iFANQgsAOg0AAQgXAAghgPgAVvi6QAeBPAOA/QgMiRgkhaQgphrhQgwIgRAAQBQBWA+CigA1qkXQgkBagMCRQAOg/AehPQA+iiBQhWIgRAAQhQAwgpBrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.2,-175.5,338.4,351);
p.frameBounds = [rect];


(lib.hair_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AiYbTQg4glhLglQg4ghgkg+Qgkg9ADg7IgQBvQgFAZgIARIgLgGQAAgigehOIAAAFQAKAUAAARQAABMgoA0QgrA3hcAFQAMgRALgLQAWgWAAgcQAAhWiVguIgtgNIAMAMQBIBLAABTQAABMgzA5Qg1A8hPAAQgWAAglgGQAlgEAKgPQAKgRAAgaQAAgwgogaIgVgMQABAGAFAOQADAKgSAuQgLheh9gWQgigGhCgGQgzgFgIgEIgFgDIgpANQgwAPgQAAQiNAAhjhpQgpgsgYgzQhlgFhAhVQhBhWAAh/QAAh+BGhbQA0hDB6hQQC+h9AegXQCChkBRh4QAzhOAiiHIAIgzQAWifAZk1QAVkMC3o/QC3pAI4inQLCgYD4KfQD3KfAVEMQAZE1AWCfIAIAzQAiCHAzBOQBRB4CCBkQAeAXC+B9QB6BQA0BDQBGBbAAB+QAAB/hBBWQhABVhlAFQgYAzgpAsQhjBpiNAAQgQAAgwgPIgpgNIgFADQgIAEgzAFQhCAGgiAGQh9AWgLBeQgSguADgKQAFgOABgGIgVAMQgoAaAAAwQAAAaAKARQAKAPAlAEQglAGgWAAQhPAAg1g8Qgzg5AAhMQAAhTBIhLIAMgMIgtANQiVAuAABWQAAAcAWAWQALALAMARQhcgFgrg3Qgog0AAhMQAAgRAKgUIAAgFQgeBOAAAiIgKAGQgJgRgFgZIgQhvQADA7gkA9QgkA+g4AhQhLAlg4AlQhXA5hCBOQhBhOhXg5gAU8KJQAOAqBYBgQCNCbArBEQArBEAYBFQAZBEgEBSQgFBRgVA8QAxgSAngwQA1hCAAhOQAAiajYi1QhzhbgygpQhVhGgYgrIABABgA2nL5QgyAphzBbQjYC1AACaQAABOA1BCQAnAwAxASQgVg8gFhNQgEhNAahBQAahCAog6QAog6B0iPQB0iPAOgqIABgBQgYArhVBGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190.5,-188.2,381,376.5);
p.frameBounds = [rect];


(lib.hair_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AmtTpQhmhAgNhRQgjAdgsATQgyAUguAAQgnAAgkgTQgxgagLgDIBJgSQAhgQAEguQiDgghWg9Qh7hYAAiGQAAgUAGgWQhLgZg2hBQhVhmgCiXQgTA8AAAjQAAAaATAyQAQAoALAPIgHAEQhghAgwheQguhYAAhtQABhtBAhoQAyhNBDguIgMgRQhGhoAAihQAAhHAXhGQAWhJAjgpQgVAWgaAeQgrAzgKAbQAAgKgEgSQgGgTAAgNQAAhrBAhKQAqgxA3gTQgQgRgOgZQgeg2gBgoQABhuBGhLQBBhGBPAAQAqAAAoAWQAWAMAuAkQBYBGBIAAQBGAABCgpIB7hZQBWg8BXgeQB5goDXAdQDTAdB0BsQB1BsA9BwQAMAUAOAmQAZBCAaAmQBFBmCWAAQBHAAAsgfQAxgkAAhJQABgSgSgfIAKgHQAhAmAOAhQAVAzgKBAIAAAKQAHgGAcgMQAcgMAHAAQCSAABxB4QBvB0AACLQAABugzBBQgiAug3AQQAsAhArBOQA+B4ABBkQgBAfgSBGIgTBIQACgagQgwQgTg2gSgTIgBgJIAAAIIABABQABAPAIAcQAKAmAAANQgBC9iBCIQh9CCicAAQgmAAgigGIACAFQAVA0AAAsQgBCKh3BXQhtBOiTAAQhXAAhkgpQhegogzg2QANAPAPAqQASAuAMAMQgZAIgbAGQgeAGgSAAQgVAAhFgPQhHgPgJgIQgkBKg8ApQg+ArhLAAQhwAAhjg/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146.5,-132,293,264.2);
p.frameBounds = [rect];


(lib.hair_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AJ1cOQgrgWgdgrQgUgigMgRIgCgGIgBABIgCgCQgVgbgZAAQgnAAgpAXQgaAOgSASIgIgaQgKgnAAgqQgBhlArhMQARgeAcggQhRAugqBHQggA0gGA1QgRgggRgSQgXgagZgHQAqirBsgtQAbgLA9gLQATgEAOgEQgUgegBglQAAgYALgaQAIgXALgLIgfgSQhCgngegmQgrg1ABhLQAAgrAKgTQARgfAvgFIACgFQg/gZghgbQhMg+AAh0QAAgmANggQAMgeASgLIADgCIgFgCQhkgfhPheQhKhagBhLQAAgoAPgjIADgIQgrgTgjgWQiuhmAAiVQABggADgKQAHgTAKggQg9gSg0gcQgUgLgSgNIgIADQgHACgHAAQhmAAiThOQiVhPhXiCQhYiDgtiLQgsiMAAhnQAAlTEhiwQBrhACFgiQBqgbELACQEKACD3EAQD4EAgGGAQAgAhAWAiQBHBogBCYQABAugRA0QAvANATAHQBCAaATAyQAUAyAPBCIAAAgQAABgghBMIgLAXQA8AKA1B1QAzB3AAB/QABA7gSAuQgGASgMAWQA2ALAdBJQAWA9AABTQAABug5BZIAFAPQADAKAAAzQgBCrilA8IgBABIABADQAABGg3AvQgsAng5AGIgHAeQgGAqgBAaQAABjAsBbQAlBLA+A9QgYAZgWAMQgJAFgKAEQgSAFgWAAQg2AAgpgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.2,-182.6,214.4,365.3);
p.frameBounds = [rect];


(lib.hair_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("Ah1cJQlAAag9gaQjPAJhBgXQlWARiLiLQgzg0gZg6QgTgYgRgbQgvhMAAg6QAAiLByixQAkg4BRhtQBch7Aqg+QCmjyBSjsQBIjLAXjkQgFjNgVk4QgdmJgLicQBCkMCEicQBRhgBpg1QATgKAUgIQBRgiBggKIABgBQBGgHBOAFQAjgEAjgBQA4gBA2AGQDHAUCYB0QDACSB1EqQAEBoAJCGQArCQAdCmQBQHBgcIjQgLDWBDClQAuBwBvCJQCCCiAgA4QBBBxAJCDQATBtg8DGQg9DGi/AgQi/AgiJgZQheAUiZAOQiaAOjXhvIiVAwIgzBRQg1hPgigjgAroE3QgpCChXCUQgyBXhyCwQg1BUgpBNQBShSAXgZQCViiBKi+QA4iQAZi1QgKAqgNAogANuKlQAqBlB9BlQiRjpg7iJQADBUAiBUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.2,-191.5,282.4,383.2);
p.frameBounds = [rect];


(lib.hair_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("ACpYrQAAhcjLhEQg1gThpghQg+gUgegUQgEARAAAYQAABQAxAzQATAUAUALQgdAVgaAMQgqATgzAAQhkAAhChaQgjgugNguIgBgBIgBAFIgBAAQgQAagVARQglAggpAAQhJAAg6g/IgTgWQBTgLAAhJQAAg4ghgkQgOgPgVgNQibANhchlQhRhYABh2QgBhEAshRQAJgTALgOQgegOgYgdQgtgzAAhCQAAhVBUg0QAogZCRg0QA6gVAsgVQhNgHgvg2QgqgxAAg6IABgWQAPAhAfAaQAgAaAiACQgLgGgKgHQgrgiAAg/QAAgWAWgaQAVgcAZAAQAaAAARAPIAiAZQg0gXglASIgGAHQABAqAOARQAPARAlAAQAkAAAQgVQAPgTAAgkQAAgNhjkQQhjkSAAh+QAAk+CWjhQBBhgBVg9QBJhTBkg9IAVgMQBqg9B+ghQB7ghCNgFQAcgCAdAAQD4AACfCbQCaA2BYBrQBfBwAbCwQARAbAJAhQAQA0ADBbIABCFQAOBfA7AAQAiAAALgVQAIgMAAgdQgBgPgQgRIgFgGQAXALALARQAeAwAAAtQAAA4gqAbQghAUgwAAQgxAAgrgdQgLgHgIgIQAUAnA3AlQAuAfAPAQQAbAeABAkQAABQhABDQgjAlgJANQgTAdAAAhQAABGBCAAQAXAAAXgMQAcgQAAgcQABgLgWgmQAYAHAKAIQAeAXAAA0QAABKgvAqQgsAnhOAEIAnARQBvAvAuAoQBIA9AABfQAAA1gaA4QALAnAAAKQAABMgtBJQgiAzgnAUIAKAOQARAeAAA9QAABVgqA4QgxA+hVAAQg9AAgmgpQgkgmAAgwQAAgQASgaQAJgOALgLQAMA/AgAAQAiAAALgVQAIgNAAgjQAAhIg8gqQgdgUhqgtQhjgogwgrQgIgHgHgIQAeA/BrCzQBjC8AACFQAAB0hHBaQhPBki5APIAAgBQAMgEgXgBIAGgEIAKgJIgFgEQARgcAAgLQAAgtgageQgQgSgjgfQgQgThBgVQAtA8AABJQAABHgxAvQgxAugrAXQgsAYgSABQAbgmAAgIgAweMnQgSAwAAAbQAABCArA3QAmAxAnAGIAjAAQgqgpgTgpQgfhBgHirQgTAPgTA0gAs3H5QgtAvgEBQQgEBCAlA0QAIAMALALQAaAgArAnQhujmBtiwQgaAUgtAvgAwwG8QgrAkAABAQABAdAOAXQAaAqAJAGQgOgqAAgfQAAg0ASgfQASgjBphAQhcATgqAkgAQuFqQApBKgDAqQAgiVhzgkQAQARAdA0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.9,-162.5,235.9,325.1);
p.frameBounds = [rect];


(lib.hair_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("ANEdlQgxgihAhYQAVAVAcAPQBAAlBVAAQA7AAA/gkQAcgPATgRQg9gRgpgtQhMhUgZgwQAWAZAhATQA+AiBdABQBwgBA/g4QA/g3AAhkQABiFh/huQgbgYj4ilQi9h9hYh9Qh+iwAAj1QAAglADgkIgLglQgQg7AAg+QAAiOA4iaQAfhVBci7QBYixAkhsQA4iqgBiqQAAjeh2ipQhriaikikQA4g9BkgwQBsgyBeAAQCaAABUBIQBNBBAjCOQBiBQBMBRQA5A+AYBAQAbBFAUBJQAZBaAAAuQAAC3hUDXQg3CKiEDxQhUCagyBkIgBAxQgBBUAhBmIAWBGQBKApBfAAIBbgLIASgDQguAsgdARQgtAYhdAAQg6AAg0gSQBVCTBPBlQBpCICCBoQBEAnAqAlQB3BqAACUIAAAOIANAeQASA1AABfQABCdiICeQiXCvjDAAQgaAbgiAYQhgBEhnAAQh7AAhKg2gAaUVQQgqBHhCAtQgbBjhOBOQgYAXgaAVQBfgeBNhUQBihsADiEIgKARgAPJGCQAABeAVBRQAYAQAZAOQAnAWCaBGQhMg/g+hQQhEhWg3hwIgCAsgAPp6rQgwhPglgdQgwgjhOAAQgcAAgeAMIhDAXQDGgGCKByIAAAAgAzPdXQgigYgagbQjDAAiXivQiIieABidQAAhfASg1IANgeIAAgOQAAiUB3hqQAqglBEgnQCChoBpiIQBPhlBViTQg0ASg6AAQhdAAgtgYQgdgRgugsIASADIBbALQBfAABKgpIAWhGQAhhmgBhUIgBgxQgyhkhUiaQiEjxg3iKQhUjXAAi3QAAguAZhaQAUhJAbhFQAYhAA5g+QBMhRBihQQAjiOBNhBQBUhICaAAQBeAABsAyQBkAwA4A9QikCkhrCaQh2CpAADeQgBCqA4CqQAkBsBYCxQBcC7AfBVQA4CaAACOQAAA+gQA7IgLAlQADAkAAAlQAAD1h+CwQhYB9i9B9Qj4ClgbAYQh/BuABCFQAABkA/A3QA/A4BwABQBdgBA+giQAhgTAWgZQgZAwhMBUQgpAtg9ARQATARAcAPQA/AkA7AAQBVAABAglQAcgPAVgVQhABYgxAiQhKA2h7AAQhnAAhghEgA44YvQBNBUBeAeQgZgVgYgXQhOhOgbhjQhCgtgqhHIgKgRQADCEBiBsgAxFIcQg+BQhMA/QCahGAngWQAZgOAYgQQAVhRAAheIgCgsQg3BwhEBWgAuT8XQglAdgwBPQCKhyDFAGIhCgXQgegMgcAAQhOAAgwAjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177.4,-194.7,354.8,389.5);
p.frameBounds = [rect];


(lib.hair_base_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AjmOrQgwhBhVgqQhOgngpgoQgPgPgJgNQgHAhAAATQAABLAVAyQAGANAHALQhrgOhFhXQglgvgUg+QgQgwAAgiIAAgEIgMAdQgXA9AABDQAAAmAIAdQgegWgRgcQgkg2AAhdQAAhrAmhYIABgBIgBgBIAAACIgIAEQg4AahNAAQhCAAgrgPQAegBAqgTQAwgWAogjQA0gtAXg0QgbAOgjANQg7AWgjAAQhYAAhBhMQgSgVgNgUQAaAHAaAAQA6AAA+goQA/gpA0hJQAcgmAWgrIgEgOQgLg1AAh0QAAnMFEjXQDribFKAAQHsAADsDhQDmDbAAG7QAAAggNCGQgMCIAABHQAAByAyBUQAtBMBIASQhBAuhQAAQgmAAgjgXQAfBkAABOQAABIgcApIgCgBQAAhgg3hSQguhEhIgoIAQAXQAWAnAAA2QAAA4gmBbQgOAigMAXQgOhBgpgjQgggchEgTQhKgUgUgNIAAAAQAOBUA8A3QAgAdAoARQgiAJgnAAQh0AAhNhQIAAgBIAAAAIAAABQADAPAAARQAAAzgaA+QgJg/g3g8QhJhQhhADQhiACg5gZQAWA4A0ArQAPANAPAKIgnABQiGAAhmhIIAAAAQAmA6AABCQAAAfgVA0QgJgigagigAjcMaIAIAGIgFgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.6,-100.7,231.3,201.6);
p.frameBounds = [rect];


(lib.gloves_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gloves_decor4_img();
	this.instance.setTransform(-73.8,-23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.8,-23.9,148,48);
p.frameBounds = [rect];


(lib.gloves_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gloves_decor3_img();
	this.instance.setTransform(-78.8,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-24.3,158,49);
p.frameBounds = [rect];


(lib.gloves_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.gloves_decor2_img();
	this.instance.setTransform(-78.8,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-25.2,158,51);
p.frameBounds = [rect];


(lib.gloves_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gloves_decor1_img();
	this.instance.setTransform(-78.8,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-30.5,158,61);
p.frameBounds = [rect];


(lib.gloves_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC99").s().p("AJZDvQgRAAgMgHIABAAQgKgGgOgRQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIgDgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgNgDgMgIIAAAAQgKgHgigqQANgoAegiQAcgfAUgLIAMgJQAgAdAcgFIAcgFIAYgDIgEAQIAAABIgCAKIABAEIAAABIAAgBIAAAIIAAACIAAAHIgoAPQgRAGgNgFIgFgCIgDAEQgPAKgIALIAAABQgKAOAAAWQAAAPAEANIAAAAQAMgDAMgIQAYgUAQgMIABAAIAmgWQAKgIAFgJQAJAGAOAAQAAAJACAGQgDAJgCALIAAgBQgXAMgEADQgLAKAAAQIAAADIABAAIACgBIABAAQAAAFAGAKIgCAAQABADgCACIgDAFIgBADIAAACIAAACQgOAEgJAGIAHgFIABgBIAAgBQgrARgRAAIgBAAgApqBQQgWgDgjgKQgTgGgOgBQgCACgDAAIgBAAIgLAAIgDABIADgEQAEgGAAgJIAAgBIgBgHQgCgPgNgBQAIgFAAgOIAAAAIAAgBQAAgLgFgHIAAgHIACAAIABgBIABAAIACgFIAAAAQADgGAAgGIAAgBQADgKABgMIAGgFIAEABIAUAOIABABQALgOgKgLIgCgCQAFgEAEgHIADADQAFgHAEgIIAAAAQADgIAAgHIABgEIgCgBIAEgPIACABIABAAQADAAADADIABACIAKAFIgBgCQAHAFAIADIACABIAAAAQABADgCADIgBABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIgIAeIgCAEIAAABIABAFIAKALQARAOAWAAIAOgFIABAAIAIgEIABAAIgBgEIABgCIgCgDIgFgSIAAgEIgCgDIAAAAQAMgCAEgMIAOgHQAYAdADAYIAAABQABAJAAAnIAAAdIABAPIgFABIgCABQgDACgCgBIgCAAIgQADQgCAAgDgBIgCACIgCAEIAAAAQgGAIgJAIQgWASgVAAIgGgBgALhAeIABAAIAAACIgBgCgAhljuQAAADgCACIgGAJQAEgLAEgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.8,-23.9,147.8,48);
p.frameBounds = [rect];


(lib.gloves_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC99").s().p("AKnD7QgPgDAAgOQAAgKADgEIABgBQACgEAJgEIABgBIAAgBQgsASgSgBQgRAAgLgHIAAAAQgKgGgNgRQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgOgDgLgIIgBAAQgKgHgaglIg2gvIgRgOIADgRQAEgkAegdQAeggAigHIAQgEIAbAhQAsA1AmgGIAdgFQAagEAYgDQArgEAEAVQADAOAAAvIAAAQIgBADIAAABIAFAKQAEAIAAAHQAAAIgEAHQACACABADIABAKQAAAbgeAOIgCABIAAADQAAAUgUAKQgQAHgYAAQgNAAgEgBgALPA6IgCADIAAAAIABAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABgBAAgBgArGBSQgQABgXgXQgXgXABgMQgBgHAPgNIAAAAIAHgFIgHgDIgBAAQgdgSABgUQgBgLAJgLIABAAQAGgIAGgDQgJgRAAgJQgCgPAngLIACAAIAAgRQAAgmAaACQAOgBAoAWIAAAAIAcAQQgEgXAAgGQAAgQAIgUQALgcAQACQAYgCADAqIAEAoIATAnQAigPBBgaIAJgHQAlAxAJAbIgBAAQAOAogFAoIAAAOIg3AHQg4AHggAHQgDAAgCgBIgDACIgBAEIgBAAQgGAIgIAIQgaAUgYgDQgVgDgkgKQgZgHgPgBQAFAIgBAFQAAAXgPAAIgBAAgArGAfIACACQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAIgEgCIgCACgAhUj7QABADgCACIgHAJQAFgLADgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-25.2,157.6,50.6);
p.frameBounds = [rect];


(lib.gloves_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC99").s().p("AKnD7QgPgDAAgOQAAgKADgEIABgBQACgEAJgEIABgBIAAgBQgsASgSgBQgRAAgLgHIAAAAQgKgGgNgRQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgOgDgLgIIgBAAQgKgHgaglIg2gvQgpgigdgUIgVgMQgmgUgZgeIAAgBIgKgNQgXggAHgVIAfg+QABgDADgBQADgBADACIApATIARgkQABgDADgBQADgBADACIAnASIAAgDIAIgNIACABIAAgBIAKAIQAeAVAdAiIBQBhQAsA1AmgGIAdgFQAagEAYgDQArgEAEAVQADAOAAAvIAAAQIgBADIAAABIAFAKIABABQADAHAAAHQAAAHgDAGIgBACIABABIACAEIABAKQAAAJgDAIQgHAPgUAJIgCABIAAADQAAAUgUAKQgQAHgYAAQgNAAgEgBgALPA6IgCADIAAAAIABAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABgBAAgBgAE5hpQgCACAAAGIACAHQACAFAHAAQAGAAADgEQACgDAAgFQAAgJgLgBIgDAAQgEAAgCACgAGAh8QgDADAAAGIACAIQADAFAHAAQAGAAADgEIABgBQADgDAAgFQAAgLgNgBIgCAAQgFAAgCADgArGBSQgQABgXgXQgXgXABgMQgBgHAPgNIAAAAIAHgFIgHgDIgBAAQgdgSABgUQgBgLAJgLIABAAQAGgIAGgDQgJgRAAgJQgCgPAngLIACAAIAAgRQAAgmAaACQAOgBAoAWIAAAAIAcAQQgEgXAAgGQAAgQAIgUQALgcAQACIAFAAQATADADAlIAEAoIATAnIBlgqIgBAAQAngRAagQIBDANQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABIADADIAAAEIgIAjIAnAGQADAAACADQABACAAADIgCAnIAiAMIADABIAPAGQgbAegnAQIgOAGQgOAFgQADQgdAFhPAKQg4AHggAHQgDAAgCgBIgDACIgBAEIgBAAQgGAIgIAIQgUAQgUACIgKgBQgVgDgkgKQgZgHgPgBQAFAIgBAFQAAAXgPAAIgBAAgArGAfIACACQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAIgEgCIgCACgAk3grQgDACAAAHQAAADACADIACADQADACAEAAQAFAAAEgFIAAAAIADgFIAAgCQgBgIgLgCIgDAAQgDAAgCACgAlVhfQgDADAAAGIACAGIAAAAQADAFAGAAQAFAAAEgEQADgEAAgEQgBgJgLgBIgCAAQgEAAgCACgAmAiZQgCADAAAGQAAAEABADIABAAQACAFAGAAQAGAAADgFIAAAAQADgEAAgDQAAgJgLgBIgDAAQgEAAgCABgAEEhoIABACIAAABgAhUj7QABADgCACIgHAJQAFgLADgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-25.2,157.6,50.6);
p.frameBounds = [rect];


(lib.gloves_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC99").s().p("AKnEwQgPgDAAgOQAAgKADgEIABgBQACgEAJgEIABgBIAAgBQgsASgSgBQgRAAgLgHIAAAAQgKgGgNgRQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgOgDgLgIIgBAAQgKgHgaglIg2gvQgpgigdgUIgVgMQgmgUgZggIAAgBIgKgNIgSg8QAOAUgMgSQgNgSgBgGQgUgpgMgwQgKglgHgvIAPgDQAsgIAkgLQAcgKAlgRIADgBIAPgIIAAAIIAAANIAdBgQALAmAGAcIAAADIABAAQADgBADACQAeAVAdAiIBQBfQAsA3AmgGIAdgFQAagEAYgDQArgEAEAVQADAOAAAvIAAAQIgBADIAAABIAFAKQAEAIAAAHQAAAIgEAHQACACABADIABAKQAAAbgeAOIgCABIAAADQAAAUgUAKQgQAHgYAAQgNAAgEgBgALPBvIgCADIAAAAIABAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABgBAAgBgArGCHQgQABgXgXQgXgXABgMQgBgHAPgNIAAAAIAHgFIgHgFIgBAAQgdgSABgUQgBgKAJgKIABAAQAGgIAGgDQgJgRAAgJQgCgPAngLIACAAIAAgRQAAgmAaACQAOgBAoAWIAAAAIAcAQQgEgXAAgGQAAgQAIgUQALgcAQACQAYgCADAqIAEAoIATAnIBlgqIgBAAQBAgcAdgYQAdgaARg1IASg4QAGAFAIAEIAGADIgBAAIAHACIAQAFQgJAUAAAUQAAAlAbAYQAWASAdACIAAAAQADAIAFAHIgBAAIADAYIAAABIABAFQgHAcgEAAQgpBnhwAZQgdAHhPAKQg4AHggAHQgDAAgCgBIgDACIgBAEIgBAAQgGAIgIAIQgaAUgYgDQgVgDgkgKQgZgHgPgBQAFAIgBAFQAAAXgPAAIgBAAgArGBUIACACQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIgEgCIgCACgAhUjGQABADgCACIgHAJQAFgLADgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-30.5,157.6,61.2);
p.frameBounds = [rect];


(lib.fringe_decor16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor16_img();
	this.instance.setTransform(-117.2,-99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.2,-99.9,234,199);
p.frameBounds = [rect];


(lib.fringe_decor15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor15_img();
	this.instance.setTransform(-109.7,-91.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.7,-91.8,220,183);
p.frameBounds = [rect];


(lib.fringe_decor14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor14_img();
	this.instance.setTransform(-96.3,-99.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.3,-99.7,193,200);
p.frameBounds = [rect];


(lib.fringe_decor13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor13_img();
	this.instance.setTransform(-146.6,-86.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146.6,-86.7,293,173);
p.frameBounds = [rect];


(lib.fringe_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor12_img();
	this.instance.setTransform(-90.5,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-103.5,181,207);
p.frameBounds = [rect];


(lib.fringe_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor11_img();
	this.instance.setTransform(-104.7,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.7,-86.5,209,173);
p.frameBounds = [rect];


(lib.fringe_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.fringe_decor10_img();
	this.instance.setTransform(-95.4,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.4,-108.5,191,218);
p.frameBounds = [rect];


(lib.fringe_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor9_img();
	this.instance.setTransform(-101.5,-61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.5,-61.1,203,122);
p.frameBounds = [rect];


(lib.fringe_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor8_img();
	this.instance.setTransform(-155,-133.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-133.6,310,268);
p.frameBounds = [rect];


(lib.fringe_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor7_img();
	this.instance.setTransform(-120.3,-76.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.3,-76.9,241,154);
p.frameBounds = [rect];


(lib.fringe_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor6_img();
	this.instance.setTransform(-109.7,-171.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.7,-171.1,219,342);
p.frameBounds = [rect];


(lib.fringe_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor5_img();
	this.instance.setTransform(-107,-98.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107,-98.9,214,198);
p.frameBounds = [rect];


(lib.fringe_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor4_img();
	this.instance.setTransform(-98.4,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.4,-110,197,221);
p.frameBounds = [rect];


(lib.fringe_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.fringe_decor3_img();
	this.instance.setTransform(-116.6,-89.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.6,-89.2,233,178);
p.frameBounds = [rect];


(lib.fringe_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor2_img();
	this.instance.setTransform(-102.4,-88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.4,-88.2,205,177);
p.frameBounds = [rect];


(lib.fringe_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor1_img();
	this.instance.setTransform(-82.3,-64.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.3,-64.8,165,130);
p.frameBounds = [rect];


(lib.fringe_base16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AIYN4QALgcAHgWQgbAVggAPQghARgfAIQAxguAehnQAdhjAAhdQAAg4gNg+QgFgYgGgRIgnghQhnhZhchqQgegigTgYQAHBvAMCUIALCOQgbgxgshUIgxhfQgFB0gwCcQgHAWgRAvQgFhCgEgnQgEg0gKgvIgIACQhQg+grgnQgYgWgSgVQANAyAWBBIgIAJQhyhxh6jNQgrhJgfg9QgFCJhDC6QgcBIgbA4QgCATgFAQQgIAgAAAQQAACCAhBtQATBBAbAnIgfgfQgzg1gZgnQgkBlhhCRQALgYAOgkQAhhYABgwIgEg/QgmBUhZBcQgWAYgXAVQAvhAAih0QAIgaAXhtQgjAtgzAvIgWAUIgCgCQAahHAAg5IAAgHIgDACQgaAVghAWQg9Aog7AZQgnASgbAIIgBgBQA8gxA2hvQAxhjAKg7QgfAfgtAbQgvAegvAVIgEgIQAxgdA0hpIAZg5IABgBIgCABQhYAmgzAAQg4AAgVgNIgKgJQBXgcA5g3QAWgTAPgXQgWALgMAAQg9AAg1g5IgQgRQAQAFAWAAQB6AABJidQAYgzAWhNQAUhMAGgXQAviVAxhEQA0hGBQgaQg1hXhVgWQAZgNATgHQAlgNAtAAQA7AAAeAQIACACIgBgDQgOgugNhIIAAhaQATAJAiAcQApAhAUAbQAKANAKAgQAagvBGg5QA9gwARgSQAagaANgYQAAAJAFAXQAIAmACAeQACAcgMAsQAUgSAZgPQBGgrCLgsQgQAfgZA+IgQApQAZgPAegMQBCgYBDAAQAWAAAuAIQAuAJAUAAQA0AAA6gvQA4gsANguQgEArgDAVQgHAmgPAdQgbAxhEAwQAkgFB8gIQBsgHAzgcQARgJAOgNQgKCAiEBRIAdADQBHAABXgsQBAgfAhguIABAbQAAA3gQA0QgGASgHASIgBACIAHAAQATAAAvAgQA5AmAzA6QCQClAADbQAABVgjBaIgHATQgQgzgyhZQgVgjgUgdIgDgHIABAIIApCOQAPA2gUCEQgUCDhfCfQA5AnA0AYQhygKh2gzQAWA0AyA7QAXAaAVAVQhDgKg7gdQgbBVhXBLQhNBBhtAwQAUgkAVg0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.8,-97.6,231.7,195.3);
p.frameBounds = [rect];


(lib.fringe_base15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AFwOEIgugGQA6gGBDggQA+gcAmgrQgqAhgxAUQhSAghIgKQgjgFgSgKIgGgCQgJgGgMgLQASABARACQB/ASBghdQBYhVAOh5QAEgogEgpQgBgUgEgRQhCAghPgLQjAgbiTicQhPhUgjhhQgJgBgUADQgZAEgNgCQhdgNg7hKQgvg5gFhNQgLA/gDAWQgLBrhHBBQgqAnhrAzIgqAUQhKAmgiAgQgNAMgLAOQCFDJgfCoIAHABQBDAHAwgPQgWAagiAMQghALglAGIgCABQAqATAwAHIAUACQgYAVg4AMQgcAHgWACQgbACgVgDQhUgMhEhOQgrgygMgxIgZgRIgEgDQhwhUALhxIAAgDIgDAAIgHgJQgog1gLgpQgMgsAIhLQARicBVhKIgGgsQgJhVAHhAQATiuCoiYQB/hyB8gSQAmgvAnglQAxgvAzgcQASgLASgIQBlgsCRARIAWACQBCAJAsAZQAbAOAXAUQAhgSAwgNQB1giCAASQC9AbBxCHQBaBrgNBZIAOAMQB5BxgQCXIgCASQAvAsAnA7QBsCegRCcQgGA6gMAkQgQArgmA4QgnA5g1AxQgZAWgUAOQgiCkiPBwQh7BhifAAQgZAAgagDgAIxlpIACACIgBgHIgBAFgAIjoqIAAgIIgCAAIACAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-90.3,218,180.6);
p.frameBounds = [rect];


(lib.fringe_base14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AJUOTQgHgMgGgMQgcgHgWgfQgggrAAg0QAAg3A+iIIACgGQAmhUANhNIgMAOQgeAfg6AoQgMAJgHAHIAXjqQgRAVgUAUQAHgHAKgzQgjishag6QhFB/haAzQA6hQAmhRIAOgeIgrgXIhOCDQgmBGAAAhQAAAVAHAOQgGgJgegnQgPgUgHgOIAMBCQAOBFATAQIgCABQhrgjhwh4QgsgvgfgwQAJAmAOAqQAjBtAWAcQhbg0hjiuQhViTgViGQgKAugFAkQgJA4AAA8QAABeAlBQQAWAwAoAxIgCACQhxghhDhaQgpg3gQhFQACCAA3BJQARAXAXATIAQANQhzgPhCiDQglhHgNhRQggA3gOAnQgZBDAABWIACApIADApQAWAtAYBGQAXBGgEA8QgFA7ATBhQAKASANATQASAaAVAWQAUAVAYASQgIAPgKAOQgWAfgcAHQgGAMgHALQglA5hDAQQAMgTAMgZQAmhOAAhNQAAgMgEgVQgIAPgNARQgoA3gvADQAHgIAFgKQAYguAAhBQAAhAglhaQgKgZhKiVQh4j3AAi8QAAj3CKjFQBmiTBxg0IBCggQAngpAygdQAPgIAQgIQBEggBJgEIAAgEQgZgKgagIQg1gOg8AAQgsAAgLACQgeACgcAOQAhgfA+gVQBCgYBBAAQBoABBeAlQBLAmAIAAQAEAAAOgGQARgHAYgFIAEgEQAug5A1gVQAsgTBEAAQA4AAAjAJQAnAMApAeQgxgIhBAPQhFAPguAfIgFABIADAAIACgBQAngGAYgBQAxAAA6AgQAzAZAkAlQAfAfAuAaQAaAPBGAgQBxA1BmCTQCKDFAAD4QAAC6h4D4QhKCWgKAXQglBbAABBQAABAAYAuQAFAKAHAIQgvgEgog2QgNgQgIgQQgEAVAAANQAABMAmBOQAMAZAMATQhDgQglg4gAJsEnIAAAAIAAgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-98.7,191.1,197.5);
p.frameBounds = [rect];


(lib.fringe_base13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AE1JxIgHAGQhVBRhTAAQhCAAg9gqQgsgfgRgnIATAHQAjANAWAAQBoAABRiVQAagwASg2IAAgBQhGhLhmj7QhPjCgTh3QgVBYgkBaQgtBug3BbQgzBUglAdIAAgFQAggcBWk+IACgJQgqBPg+BRQiTDIiWA6QB4hcBxi5QB1i7ALiCIgFAAQhLCpjKC3Qi4CqimBLQAACgALBGQAIA0AlBtIAAAFQgjgtglh1QgsiQgIipQgdA5gQA6QgXBLAAA+IACAdQADAZAAAKQgbg8gRhqIgYgCIgXAHQgnAKgdAAQghAAgagPIgHgFQgfgEgbgLQgPAJgHACQgOAFgPAAQhUAAguhSQgjhAAAhQIAFg8IgJgbQgHgaAAgYQAAhzBThiQBShhB8gcQAEgyAKgfIADgIIADgHIgDgCQAAikB1h6QBzh4CWAAQBmAABTArQAUALARAMQCJg7ClAAIBrAJIAHgCQAogHAKAAQCcAACoBSQChBPA9BmIAAABIAAgBIABAAIgBAAQAHh6Bxg7QBTgsBmAAQCVAAB0B5QB1B6AACkIgDABIADAIIACAIQALAfADAxQB9AcBSBhQBTBjAABxQAAAZgIAbIgIAaIAEA8QAABRgjBAQgtBRhUAAQgPAAgOgEIgWgLQgbALgfAEIgHAEQgaAQghAAQgdAAgngKIgXgHQgTACgVAAQg+AAhAgoQgtgcgcgiQgRgDgSgGQgGA7gTAxQgTAygSAVIhEBPQAAhUgWgUQgmghgiAAQgLAAgQAEQgYBRg3BgQhwDGiJBFQBYhtA6h7gAViECQgkBBhLAkIgGAFQAKAEAGAAQA7AAAohDQAjg8AAhFIgBgeQgEBBgcAzgA2DB+QAABFAjA8QAoBDA8AAIAKgBIAFgBIACgCIgHgFQhLgjgkhCQgVgngIgvIgDgdgAMcEsIAAgCIgEAAIAEACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.8,-85.8,291.8,171.6);
p.frameBounds = [rect];


(lib.fringe_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AKGPSQhBgYgqgvIgFgfQgNhUAAgPQAAhZAtjdQArjPACiDQgNg4gbhDQg5h9gTgwQgbhEhPhXIgDgEQgrgWg7gdQh5g7g+glQiihmhgibIgCgEIgEAIQgJATgLASQgmA8hNBCQgtAmhmBQQhJA8g0A8QgeBGgdBMQhMDIgZCUQAdFSAUByQATBxAABcQAABchEAmQhDAlhjAQIAFgFIAAgBIABgBIAAAAQA0hbAQioQAGg7AKk3QABg+ABiYQAAiNADhQQACiRAWiBQAkjIBhicQBgibC9hrQAigTCJgcQBvgXBggCQBhgCCVAlQCVAlCYByQCXByBaC0QBaCzAAChQAAChghB4QgiCAg1A5QgYhJg7ATIgBALQgECdAAA+QAACiApC3QAmCtAwBIIgEABQg5gUhtgdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.8,-102.7,179.6,205.5);
p.frameBounds = [rect];


(lib.fringe_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AqnMmQgsgugGgzIgGAAIAABEQACACAEAKQACAGAEAAIAAAHQgXgYgcgiQgdgkgLgVIAJBBQAKArAjAZQhngEgah8IAAgBIgBgHIAAAGIABACQADAbgkAYQgzAcgQAMIAAgJQAAgGAKgfQAJgfAAgQQAAgNgFgVQghgcgPgmQgPgnAAhBQAAgcAPgeQgPhDAAgRIAAgDQAAhEAihIIAFgLQALgWALgRQAVgfAWgRIABAAIAEgEIgFAEIhcAAIAAgGQBSgVAxhaQAnhJAWiCQAHgpAdhQIAWg7IARgpQAPghAPgeQAeg8BdhcQBdhcA+gQQFwimGzB8QCtA8BWBRQBWBSAYAzIAnBUIARApIAWA7QAdBQAHApQAWCCAnBJQAxBaBSAVIAAAGIhcAAIgFgEIAEAEIABAAQAWARAVAfQALARALAWIAFALQAiBIAABEIAAADQAAARgPBDQAPAeAAAcQAABBgPAnQgPAmghAcQgFAVAAANQAAAQAJAfQAKAfAAAGIAAAJQgQgMgzgcQgkgYADgbQgaB8hnAEQAjgZAKgrIAJhBIACgDIAAgGIgCAJQgLAVgdAkQgcAigXAYIAAgHQAEAAACgGQAEgKACgCIAAhEIgGAAQgGAzgsAuQgwAzg8AAQggAAgxgNQgwgMgQgMQA3ACAagrQARgdAHg8IgGAAIgXArQgIAUAGASQgYgSgTgYQgZgiAAghQAAgqBUhpQBThpAAhCIAAgDQgBgVgOgzQghg2gVhAIgKghQgShDgCg+QgghPABhuQgDBVgkBKQgmBJhBAuQAIgdAAgeQAAgkgOgUQAAAGgGAAQgGAYgWARQgMAKgQAJIATg5QAMgoAAgZQAAhAgyhsQgwhogggVIAGAHQAXAtAKAcQARAvAAAiQAABngtBAQgvBEhwAwIAAgHQANgNAEglQABgQAAguQAAgMgDglIgJhBQABB5hnBKQhgBEiDAAIgdgDQgWgDgOAAQAigvAJgPQAMgXABgeQgvApg6AXQghAOgxAPIghAKQAWgfAPgiIACgEIAAAAQAXgkAUglQAzheAKgrQgOAog3BDIgLANQhVBihfALIgJAAQAJgQAahdQAVhLAFhAQgmBxgxBIQgwBEgyAZQgEAYAAATQAAA6AVA1QAUA0AlBQQAiBJgFANIgCACIABgBIANBVQAFAjgFA4QgGA4AyBoQAdA6BPArQggAIgRAAQg8AAgwgzgAsuKvIgCgJIAAAGIACADIAAAAgAN6KsIAAABIABgCIAAgGIgBAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104,-85.7,208,171.6);
p.frameBounds = [rect];


(lib.fringe_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("ALWQBQgrgigjgoIAGBeIAFAPQhJgugehaQgZhHAAhpQAAiBAfjXIASiHIg6BPQAYifhZh4IgcAAIgGAAIAAgMQAAgigIgpQgIgkgFgLQgEAXgFA6QgEAggHAVIjWACIAIhBQAHhKAAhEQAAg/gRhbQgEgZgHhTQADBxAAA9QAABggaBiQgSBFgVAfIg5gFIhHgFQgCgKAAgPQAAkLhGjWQgahLgdg1QiHhGifB8IgDAAIgDAAIgGABQhNAFhMBSIgNAZQhQCgAADSQAABFAHA6QAFAzgGCJQAPAvATCbQASCbAABGQAAB/gbBcQgfBng7AaQAGghAAgUQAAgagGgGQgRAihFAVQgoANgbACQBPhpAZhvQAShQAAilQAAhigLhfQgHg9gEguQiRlxAgkqQAgkqC2iVQC3iWCcgvQCQgqCPgBQIeAAEIE2QEHE1gbGGQgbGEjHEZIgBArQAACLAaBlQAbBnA+BbQg1gMg0gpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.6,-107.8,189.3,215.6);
p.frameBounds = [rect];


(lib.fringe_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AL8IKQgPAKgVAAQidAAhxiLQhDhVhhjVQgEBPgKA4QgWB0g4BMIgKAKIgHAFIgGACQgFABgTAAIgbADQgVABgIgEQgKgDgtAJQgsAKgGAGIAAgdQgMAEgPABQgQACg2AAQg0AAg4AFQgjg8gchZQgjhsAAhOIADgjQhjDdhGBeQhuCUiXAAQgJAAgLgFQAfgkAKgRQAUglAIguQgfAygqAoQheBZhiAAQghAAgLgBQAwhFAWhbQAMg2AOh+QAMh9AShJQAehzA9hmQB1jDDghuQDfhuDAgHQC+gGDLBmQDLBmBeB8QBeB8AXA2QAXA1AfCOQAeCQADBcQACBcAEAbQAPB4BpAYQgYALgfAAQhnAAhLhRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.8,-60.3,199.6,120.7);
p.frameBounds = [rect];


(lib.fringe_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AhhU0QBFgZAxgbQBYgvAjg2QCVimBSk3QBGkGAAkAIAAgdIgCgoQgDAAgCgCQgDgDAAgCIAAgGQg7gmgdgbQg1gxgqhJIgCABQAcBNArA9IADAEQAhAxAuAoIgBAFQg6gSgygkQhPg3g7hfIgIgOIgCABIAFAOQAUA7AfAyQAYAoAeAfIAPAPQgkAAhugEIgTABQgRgPgUgVIhAhCQALAYAXAsQAMAWAJAPIiIAMQgQgPgSgVQgWgYgXgYIAuBYIhxALQghgYghgnQgagegTgbQAEAaAVAtQAQAeASAYIhhALQgLgBgOgHQgdgPglg6QAFAeAMAaQAMAZANALIgCABQg/gag4iKQgehJgOhJIgEAAQghBkgVBoQghCpAACcQAAHNC3DIIAUAUQA2AzBEAfQhmgQg3gfIgPgJIgBABIAAAAIAMANQAWAWAWASQAuAmBUAmQg/gKgqgQIgmgRQg4gYgPgLIgNgLIhPhDQgvgpgmgzQiTjEgLltIAAgGIAAgGQADhxAEhdQgogvgchQQgmhqAAhdQAAgaAEg2IADgwQgoAPgwAAQg5AAghgUIAAAAQgVgMghgoQiDAGhRhAQhUhDAAhzQAAggAZhIQgJgHgJgOQgMgVAAgUIABgMQgLgLgFgMIABAAQgIgRAAgaQAAgSAFgOIAAgBQgQgjgCgKIABAAQgCgHAAgpQAAhQA5hGQAzg/BJgUQAOgEAOgDIAJAAQAMgZAUgZQAigrA9gnQBshGBuAAQA0AAAZAIQAZAHAcAWQAKgDAHgBQAJgBAVAUIAAAAQAHAGAFAHQAiAHAsAWQBTAoArA3QAoAyAaBIQAZBCACA3QBzhWBwgvQB0gyBeAAQAgAAArAMIA1AeQALgDAFgEQAkgVAagHQAdgHA7AAQA/AABbAkQBdAlAvAtIABgDQAahIAogzQArg3BTgoQAsgVAjgIIALgNIAAAAQAVgTAJABQAHAAAKAEQAcgXAZgHQAZgHA0gBQBuAABsBHQA9AoAiAqQAUAZAMAZIAJAAQAOACAOAFQBJAUAzA/QA5BHAABOQAAAqgCAHIABAAQgCAKgQAiIABACQAFAOAAARQAAAagJASIABAAQgFALgLAMIABAMQAAATgMAWQgJAOgJAHQAZBIAAAgQAAByhUBDQhRBAiDgFQghAogUAMIgBAAQghATg5AAQgwAAgpgPIgFB4QgGBOgYByQgbCCh8BcQhcBEhLAGQgWB5gwC+Qg9DXhiB2QhXBpiCBYIAIgHQAighAzhFIATgbQg8BLg9AjQg7AjhLAdQgxAThUAIgAPbjWQAPAFAOABQAaAAAYgOQgPACgQAAQgcAAgcgNgAv3kFQASAAATgIIAWgbIgHADQgkAVgjAAQgQAAgPgCQAYANAaAAgAV2lUQgKAPgTAQQAdgLAPgPQAcgiAAgvQgOAigdAqgA2EmEQAPAQAdALQgTgRgKgPQgdgpgOgiQAAAuAcAigAWouoIAAABQAdAqAQAlQgDgrgUgcQgPgUgdgSIAWAdgApvwRQA/BUAPBVIAHgFIAAgIQAAhag4hRQg3hNhxgRQBbArAwBCgA29vUQgUAdgDArQAQgmAdgqIAAgBIAWgdQgdASgPAUgAJTvsQgWAigOAiIATAVQASglAcglQAwhBBbgrQhxARg3BMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-133.6,310,267.3);
p.frameBounds = [rect];


(lib.fringe_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AJeK4QAhg4AHgtIABgTQgZAxgsAoQhPBLhQgGIgCgIQBMgSAyhbQAqhPAUh8QASh2gOhiQgLhSgghAQggAVgtATQAEggAAgzQgBg7gJgVQgDALgRAnQgQAkgKAPIgCgCQAagegbhFIgQgjQgcBRhABEQgeAgglAfQgQANgTANQAMgogEhCQgFhOgegTQAPAQgiBJQgdBCgRATQACgMgUhiIgJgqQgPAqgZAqQglA+gRAMQgBgVg2iLQgSgvgOgiIACAIQAVBQgLBEQgJA9gPAfQgOAggCANIgMgJIgpgiQgfgYgegWIgBAFQAAAJAIAOQALAQAEAIQgOgGgOgIQgPgKgQgOQgigogghIQgehEgIg9QgMAngEAgQgKBJAEAhQACATAFAaQgmgcgXhjQgJgngEgjQgaBQgJA6QgEAlADArIgFAEQgjgjgegyQgqhEAMgtQgGAOgFAjQgDAWADAkIACAZQgrhOgIgYQgFgQgDgTQgHAagEAaQgDAaAEAjIAFAdQgXgLgRgTIgKA9QggCoAGCcQAKEgCeAjIgBABQhQgGg5g2IAaAvIgagDQhWgGhJhbQgVgagPgdQgDA9AOAoQAHASAWAZQhAgUg6hbQg3hUgFhiQgWAwgHA0QgHA0AFAdQADASAIAiQgnhLgUhPQgJgggEgfIgIARQgPAjgDAbQgCAKgBAZIgCABQguhhAXikQAajAB5jCQBsixCkiXQCbiOCghRQCghRBvAJQASACALAGQAFADAGAFQAGAEAHAHIAMgDIAJgCIA0gNQAwgLBlgHQBngIDjB4QDiB4CSCkQCRClCSDtQCSDwg0CSQghBZgmApQAKgUACgRQAHgtgVhBQgVB+g/A6QgmAkhqA6QAhguAHgSQADgLAJg7QADgQAAgWQglBFhGA7Qh/BqiPAMQAYgYAYgog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.5,-76.1,239,152.2);
p.frameBounds = [rect];


(lib.fringe_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("ANNZyQgfgiAAgtQAAgXAKggIABgBQALgmADgYQgHAigPAYIAAAAIgBABIgDAFQgUAcgdAIQAPgQAFgIQAKgRAAgVQAAgZgqgtQgrgtAAgeQAAgeAaguQAgg6ARgQIAJg2IgcgmQgpg3AAgmQAAgTALgYQAMgZARgPIADgCIgageQgggkAAg7QAAgNANgeQAMgeAKgJIgHgHQgmgmAAgzQAAgfALgbQAMgeATgIIgVgcQgpg1AAgyQAAgOALgXQANgdAQgHIAFgEIgKgNQgog1AAgeQAAgSALgRQAQgbADgIIADgCIgSgdQgog/AAgkQAAgSAKgaIAFgNIAGgNIAEgIIAHgGQgKgKgHgJQgWgegCgeQg1Ajg/AAIgRAAIgIAAQgPgBgGgCIgCABIgnATQgbAPgNAQQALhRAHgZQAGgXAKgVIAEgJIgGABIgMADQgcAFgYACQAignAXhEQAWhCAAg2QAAhzg8h9QgZgzgjg1QgggvhEhZQg7hOgVgjQAEA+gEBCQhcgdhagPIg4j2IAGDvQiQgRiRAQIgkjuIgZD2QhEALhDASIAAAAIAAgBIgBgDIAAABIgBABIAAAAIAAABIgBAAIgVAwQgYA5gPA1QgkCEAQByQAIA1AdA/QAeBBAjAiQgVABgagCIgLgBIgFAAIAEAHQAMAUAJAWQAKAZAUBPQgOgPgZgMIgkgNIAAgDIgDACIADABQgEBKgWAdIgQATIAGAGIAEAIIAGANIAFANQAKAaAAASQAAAkgoA/IgSAdIADACQADAIAQAbQALARAAASQAAAegoA1IgKANIAFAEQAQAHANAdQALAXAAAOQAAAygpA1IgVAcQATAIAMAeQALAbAAAfQAAAzgmAmIgHAHQAKAJAMAeQANAeAAANQAAA7ggAkIgaAeIADACQARAPAMAZQALAYAAATQAAAmgpA3IgcAmIAJA2QARAQAgA6QAaAuAAAeQAAAegrAtQgqAtAAAZQAAAVAKARQAFAIAPAQQgdgIgUgcIgDgFIgBgBIAAAAQgPgYgHgiQADAYALAmIABABQAKAgAAAXQAAAtgfAiQgTAUgtAhIAAgHIAHgOQAIgQAAgNQAAgbgXgbQgKgLgogkQhIg/AAhCQAAgMAKgbQAJgXAQghQgbAHgVAnQgHAMgZA+IAAgoQgNg7AVg3QAVg3BMg1IASgpIgNgdQgUgvAAgwQAAghAHgLIAdgsIgCgEQgdhDAAgaQAAgeAUgeIAog6IAEgCIgJgSQgZgyAAgbQAAgdAKgZQAIgSARgVIADgBIgKgXQgXg6AAgrQAAgVALgUQANgZAWgEIgEgJQgbg6AAgjQAAgVAMgZQAOgdATgIIAEgBIgFgKQgVgwgGgXIgCgPQAAgUAWgtQAKgUAIgNQAIgPAHgIIAIgEQgMgVgHgWQgHgdABghQAEgxAKgeIAEgNIgKgRIgJgQQgCANgDALIgFANIAAAAQgDAJgJAMIAAABIgBAAIgGAIIgBgOQgIg3gyhjQgyhjgHgxQgDgYAPhFIAPg5QAQg0AVg6QAMgeANgdQghhuBXh9QgxiECfhEQAQh/CGghQA9ifCQAdQA6gpAOgFQAOgGAlgLQAkgMBzAZQB4hgDLBHQCdgVBYBlQCSgBBFB+QCmAkgGCLQCHBwgjBsQBbBpg4B4QBCBrhbBxIgCABQABADAEACIABAAQAqBXg4BHIgFAGIAGgCIAEAMQAKAeAAAUQAAAtgPArQgJAagMASIAAABIgBABQAKAYAEA8QABAhgHAdQgHAWgMAVIAIAEQAHAIAIAPQAIANAKAUQAWAtAAAUIgCAPQgGAXgVAwIgEAKIADABQATAIAOAdQAMAZAAAVQAAAjgbA6IgEAJQAWAEANAZQALAUAAAVQAAArgXA6IgJAXIACABQARAVAIASQAKAZAAAdQAAAbgZAyIgJASIAEACIAoA6QAUAeAAAeQAAAagdBDIgCAEIAdAsQAHALAAAhQAAAwgUAvIgNAdIASApQBMA1AVA3QAVA3gNA7IAAAoQgZg+gHgMQgVgngbgHQAQAhAJAXQAKAbAAAMQAABChIA/QgoAkgKALQgXAbAAAbQAAANAIAQIAHAOIAAAHQgtghgTgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.9,-170.3,217.9,340.8);
p.frameBounds = [rect];


(lib.fringe_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AK4PSQgPgMgTgHIgEgNIgTAFQghAHgpAAQhYAAgkgWQgKgGgTgXQBhgOAvhoQAehBAFhTQgiArghAPQgWAKgcAAIgygBIgBAAQA9gXAmhMQAwhcgBh3QAAhegdg8IhHhuQgvhIgjhnQgCCdAoBIQiagJijhfQhLgtg0grQALAeAQAfIAhA5QikgvhWiEQgUgfgPgiQAJBMAbBAQAQAnATAcQhRgGhNgzQgngYgXgZQgFAaAAAQQAAAjAeAwQiEgNhNhXQhAhLgGhhIgBgHIgCAHQgdBXAAAiQAAA9AlBTIgCACQg/gwgag4QgLgZgHggIgEALQgDALAABMQAABBAqBkIAcBAIgWA+QgmBsAABlQAABhAaBMQALAiARAZIgOAJQjeAbhniUQgag9AAg7QABiUBSi8IBIidQArhdAXhIQA0ikATg3QAyiMAzhdQBcimBtgqIgDgKQAphSCpg1QCRgtCKAAQCxAACuA3QC2A6COBsQFJD7AAGiQAAAxgiB0QgjB3AABtQgBCuBlAHQgNATgPARQg8BEhDAAQgJAAgJgDIgCAAIAAACIABACIAAgBQAwCEgyCFIgCAIQgdBOhRANQguAdgUAAQgGAAgEgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-98.1,212,196.3);
p.frameBounds = [rect];


(lib.fringe_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AHUN6QgCgJABggQAAhVAdhOQAUgwAxhPQA0hUATgqQAKgYAJgYQgjAthsA2QBkh8AAg1QgBhNg7hOQhEhKgWgeQAHAVAHAQQAcBGAvAeIgGABQgOABg+AAQhqAAhEggQg0gggagJIgDgHIADAAIgFgBIACABIgBAAQg/gGh7AAIirABQgyAAhBgYQi7hOgxhtQgGgPgFgTQARBbAnBFQATAkAhAmQibhcg/hwQg3hiAAidIABg7IAAABQhRDVAACYQAABgAOBQQAPBZAnCEQgngeghgjIAAAzQgBCJAsCEQARA2AUAqQktlDAAmzQABjOA7i4QA7izBqiHQBqiICMhKQCPhMCfAAQAZAAAPAIIAMAIQAwgdAegHQAjgKBJAAQDQAADwCcQDvCcBMCcQBMCcAzC1QA0C2AACBQgBDCgrCXQgkCAhNB7QgjA8h2CfQhpCRg8BrQgyiHAQhDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.7,-109.2,195.4,218.5);
p.frameBounds = [rect];


(lib.fringe_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AEGNoQgKgEgJgLQBFAGAvg+QAtg6AAhFQgBhqgfhGIhEhyIABgHQhzgMhug+Qh7hIhlh/Qhjh5g3iWQgohsgMhqQhQFNhJCqQhlDoh1AAQgQAAgQgFQAOAjAKAsQALAzgBArQAABEglA/QglA/AAAuQAAAKANASQgjgQgWgrQgagyAAgxIAAgNQgVgagGgOQgHgOgCgqQgBgqAXgzQAXg0AAhKQAAgKgCgeIgGgyQgXg9AIhAQAFgrASgrQhIhNhIiBIgKgTIgUgnQgxhfgjhfIgLghQgTg+gJgwQgGglgBgdQAAhmBzgaQAdgGBPgCIBGgCIAgAAIAXAAQA9ABBJADIAXABQBCgEBJgJQAqgFApAJQAdgJAgABIAFgEQAfgkBOgQQA7gNA3gEQA1gEA8ATQC1gkCsBsQATgTAigRQAQgIAPgGQA0gSA3AHQA4AHA0AEIAfACIAogBIBKgDIBCgBIAUAAIApABIAtABQBMACAcAGQBzAaAABmQAAAggIApQgGAdgKAjQgJAhgNAnQgTAxgVAyIgVAtQgZA0gcA0IgHALQhEB6hFBLIgTAVIgVATIACAMQALBNAABFQABCnhfCnQhDB2hLBAQgOAygZAjQgmA1h5A6IgWAKIgCABQgaAJgeAAQgUAAgggMgAlfmJIABACIAAgCIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.9,-88.4,231.8,177);
p.frameBounds = [rect];


(lib.fringe_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AGSM9QgkgtABg3QAAgrALgYQAJgTAbg0IgIgGQgigggBg9QAAgOALgfQALghALgLIAAgBIgBAAIAAAAQgigZgBgVQgBglAlgxQAlgyAAgjQABhFg+g+QgcgchjhFQhUg8gcgqQgjg0AMhNQgRBBg1AqQg0Ash4AiQiPApgdAPQhQAlAABGQABAbAPATQAPATACAEQABADAdAFQAcAFAEgyQAJANABANQAAA1g/AAQguAAgZgpQgVgfABgpQgBgaAGgZIgFgCQgVglAAgUQAAgnANgfQgJgNgDgNQgBgEAAgVQgmAGg1AfQg3AigwAzQhyB2gGCNIgPgiQgPgkgJgZQh4gBg3hXQgqg/AAhrQAAhoBShnQBEhWBAgYIABAAIgFgGQgZgmABgsQAAguAegfQAcgfAnAAQAGAAALADIAPADIAAAAIgCABQgRAEgQAMQgTAPAAAPQAAAbATAQQAUAPAhAAQAXAAAOgMIARgSQgMgHgJgOQgQgVABgYQAAgWANgOIAOgLQgCAFAAAHQAAAUAYAPQAXAQAZAAIACAAQBHhuCPhKQCThNCNABQBZgBBfAgQBcAfAUAgIAEAGQAIgEARgEQAPgCALAAQDWAACjCoQB5B9BRDTQAfAhAnA8QBRB/gBBUQABA+hOBEQgpAlgNAPQgXAeAAAeQgBAWALAKQAJAKAggGQAWgGgHgcIAHgDQAMAQgBAUQAAAdgZANQgRAKgZAAIgCAAQgZAfgQAFIgHADIADACIABAAQAaASAYArQAYAqAAAkQgBAtgqAzQgqAzgFAEQgHAFAHAgQAGAgAegmIACAFIACgBIACAFQACAGgHAPQgHAQgMAGQgNAHgWgFQgYgGgjgnQgegjAAgmQABgnA8iXQgJgQgSgOQgcgXgZABQgvAAgnAeQgfAZgHAbIgEgCQACgLABgWQAAgXgKgWIgJgSQgjA4gxgQIgDAGIgEAAQgKAdAAASIABAIQACAOAJALQArglAcANQAbAOAKAQQAEAMABAOQAAA6hCAEIgKAAIAGAGQgkAugNAbQgNAdADAhQAEAgAUAcQAWAeAXAAIAHAGIgGAEQgYATgPAAQgmABgigugAJDE/IABAAIABgCIgCACgAHeETIALAAIgKgEIgBAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-87.5,203.4,175);
p.frameBounds = [rect];


(lib.fringe_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AGUGHQAziugQh7QgHg0gSgqQgMgbgSgZQjjjdmLB2IgLADQgogTgngMQhbgdhUADQioAHiPCHQASipBvh/QBPhaB+hEQBsg7CPgqQBPgOBKgDQBTgEBQAKQC7AXCXBiQBqBFBYBqQBmByAxCDQAgBWAJBcQASCvg/DIQgbBTgoBXQgnhRhMAVIiRBGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-64.1,163.1,128.3);
p.frameBounds = [rect];


(lib.face_accessory8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory8_img();
	this.instance.setTransform(-62,-15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-15.1,124,30);
p.frameBounds = [rect];


(lib.face_accessory7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory7_img();
	this.instance.setTransform(-81.9,-20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.9,-20.7,164,42);
p.frameBounds = [rect];


(lib.face_accessory6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory6_img();
	this.instance.setTransform(-16.2,-5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.2,-5.7,32,12);
p.frameBounds = [rect];


(lib.face_accessory5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory5_img();
	this.instance.setTransform(-46,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-49.5,92,99);
p.frameBounds = [rect];


(lib.face_accessory4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory4_img();
	this.instance.setTransform(-10.9,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.9,-5.6,22,11);
p.frameBounds = [rect];


(lib.face_accessory3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory3_img();
	this.instance.setTransform(-76.9,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.9,-53.1,154,106);
p.frameBounds = [rect];


(lib.face_accessory2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory2_img();
	this.instance.setTransform(-46.9,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.9,-9.5,94,19);
p.frameBounds = [rect];


(lib.face_accessory1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory1_img();
	this.instance.setTransform(-79,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-51.5,158,103);
p.frameBounds = [rect];


(lib.eyes_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor8_img();
	this.instance.setTransform(-61.2,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.2,-28.5,123,57);
p.frameBounds = [rect];


(lib.eyes_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor7_img();
	this.instance.setTransform(-56.3,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.3,-31,113,62);
p.frameBounds = [rect];


(lib.eyes_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor6_img();
	this.instance.setTransform(-59.6,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.6,-34,119,68);
p.frameBounds = [rect];


(lib.eyes_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor5_img();
	this.instance.setTransform(-71.3,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.3,-36,143,72);
p.frameBounds = [rect];


(lib.eyes_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor4_img();
	this.instance.setTransform(-60.3,-33.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-33.7,121,68);
p.frameBounds = [rect];


(lib.eyes_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor3_img();
	this.instance.setTransform(-58.3,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-34.5,117,69);
p.frameBounds = [rect];


(lib.eyes_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor2_img();
	this.instance.setTransform(-71.2,-35.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.2,-35.3,142,71);
p.frameBounds = [rect];


(lib.eyes_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor1_img();
	this.instance.setTransform(-58.1,-37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.1,-37.1,116,74);
p.frameBounds = [rect];


(lib.eyes_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33FF").s().p("ADeCRIgRgEQgigMghgpQgOgRgGgeQgEgRAAgQQAIABAKgCQAMgBAAgDQABgIgVgEIgJgCQACgRAGgQIAJgTQAHgNAKgLQAogTAtgDQAQgBAQAAQAvAGAnAOIAAABQAKASAEAUIABAFQAEAQAAARQAAANgDAVQgHA+gkAhQghAegwAAIgWgBgACZAjIACAAIAAgCIgCACgAlfBFQgXgnAEg8QABgXACgNQACgRAFgPIACgFQAGgSAKgRIABgBQAfgHAlABIAYAGQAiALAcAYQAGAMADAPQADAKACAKQACAQgBASIgIAAQgQABgBAKQAAADAIADQAIADAHAAQgDAOgFARQgJAcgNAPQgfAjgcAGIgOABQgxgDgZgpgAjSAQIACAAIgBgCIgBACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.2,-14.6,74.4,29.3);
p.frameBounds = [rect];


(lib.eyes_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33FF").s().p("AhFBGQgQgXgJgYQgNgjAAgoQAAgqAGgZIAEgLQAMgHAOgFIAOgCIAGgBIAEgBIAHACIgEgCQAegDAYAIQAOAFANAHQAkAVAZAvIABADIABADQAEATADASIABASQABAOgBAOQgFA5glAqIgKALIgBAAQgPAGgOAEQg6gXglg3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.9,-14.8,21.8,29.7);
p.frameBounds = [rect];


(lib.eyes_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33FF").s().p("AhkBuQgqgtgBhBQAAgNACgNIABgFIADgMQAKglAbgeQAqguA6AAQA7AAAqAuQAoArACA7IAAAGIAAACIAAAGQgBA8gpAsQgqAvg7AAQg6AAgqgvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.4,-15.7,28.8,31.5);
p.frameBounds = [rect];


(lib.eyes_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33FF").s().p("ABpBZIgFgQQgDg6AKgrQAEgUAGgRQAVg2ArggQCJgDB2BPQAYA1ACAtQAEBRhEBLIgOAAQiiAAh1hagAmuBwQgqhbANhOQAHguAYgvQBhgxBkAlQAcAqAJA7QACASABAUQACAugKA5IgGAPQg6AkhCAAQgwAAg1gTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.3,-17.9,92.6,36);
p.frameBounds = [rect];


(lib.eyes_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33FF").s().p("AD/CWQg+gFglg0QgcgngCgtIAKAAQAMABAJgBQAJgDAAgEQABgDgJgDQgIgEgMgBQgHgBgFABIAAgDQABgPAEgOQAGgVANgTQBOgsBgATQAjAPAcATQAGAOADAPQAFAcgDAgQgEAxgrArQgoApgvAAIgJAAgAD1gtIABAAIABgBIgCABgAkrByQgogCgegzQgdgwAAgwQAAghAFgbQADgPAFgNQAWgQAcgJQBJgGA4A1QAJAUACAWQADAOAAAPIAAAEIgJgCQgJgBgHADQgGADAAAEQAAAFAGADQAHADAJABIAIAAQgFArgXAjQgeArgqAAIgGAAgAkZhOIABAAIgBgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.9,-15,79.9,30.1);
p.frameBounds = [rect];


(lib.eyes_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33FF").s().p("AC9ANQguhNBHAdQA9AsA9gBQBTAOhkAhQgUAGgSAAQg0AAgogwgAlLAJQhOg0BFAEQAwANA2ggQA7gNgsBDQgeAcgfAAQgXAAgYgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.4,-6.1,74.8,12.3);
p.frameBounds = [rect];


(lib.eyes_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33FF").s().p("AD+CtQhRgRgZgdIgBgBQghg4AAgyIAAgBQgBhOBRhBIAXgEQAmgGArAFIAQAEQAWAGAUAMQAyAeAkBCIAKASQABAygTAoQgTAngmAcQgoAMgpAAQgVAAgVgDgAlECCQgxgKgrglQgZgngIgsQgGgqAJgwIAMgQQAog0ArgNQASgFASABIANACQAjAIAcASIARAKQAyBZgPBLIAAABQgKAwgkAqIAAACQgRANgkAAQgRAAgVgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.3,-17.6,90.6,35.3);
p.frameBounds = [rect];


(lib.eyes_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33FF").s().p("ADLBeQgjgrAAg7QAAgkAMgdQAIgWANgMQAPgCARgBIAIAAQA5AAA9AiQAeAQAWAXQAFAUAAAIQAAAxghAvQglA0g0AAQg3AAgkgtgAlwBxQgSgPgLgbQgSgpAAhCQAAgjAMgcQAKgZASgOIAEAAQAkAFApA/QApBBgEAnIgEAZQgGAWgJAQQgSAaglAAQgTAAgSgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.6,-13.9,83.3,27.9);
p.frameBounds = [rect];


(lib.dress_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.dress_decor12_img();
	this.instance.setTransform(-96.8,-83.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.8,-83.7,194,168);
p.frameBounds = [rect];


(lib.dress_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor11_img();
	this.instance.setTransform(-89.1,-109.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.1,-109.3,178,219);
p.frameBounds = [rect];


(lib.dress_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.dress_decor10_img();
	this.instance.setTransform(-64.2,-69.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.2,-69.1,129,124);
p.frameBounds = [rect];


(lib.dress_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.dress_decor9_img();
	this.instance.setTransform(-72.9,-80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.9,-80.8,146,162);
p.frameBounds = [rect];


(lib.dress_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor8_img();
	this.instance.setTransform(-72.3,-95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-95.9,145,193);
p.frameBounds = [rect];


(lib.dress_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.dress_decor7_img();
	this.instance.setTransform(-51.9,-107.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.9,-107.6,104,215);
p.frameBounds = [rect];


(lib.dress_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.dress_decor6_img();
	this.instance.setTransform(-67.1,-98.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.1,-98.9,135,199);
p.frameBounds = [rect];


(lib.dress_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor5_img();
	this.instance.setTransform(-75.7,-80.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.7,-80.7,151,161);
p.frameBounds = [rect];


(lib.dress_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.dress_decor4_img();
	this.instance.setTransform(-86.2,-100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-100.1,172,200);
p.frameBounds = [rect];


(lib.dress_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.dress_decor3_img();
	this.instance.setTransform(-104.3,-99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.3,-99.9,209,200);
p.frameBounds = [rect];


(lib.dress_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress_decor2_img();
	this.instance.setTransform(-82.1,-104.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.1,-104.1,164,208);
p.frameBounds = [rect];


(lib.dress_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress_decor1_img();
	this.instance.setTransform(-62.2,-56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.2,-56.6,125,113);
p.frameBounds = [rect];


(lib.dress_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AEZJsQg4hAgzhFQgSAMgVAKQhEAjgfAAQgYAAghgFQgYgEABgPIgShBQgSAIgTAQQguAjgZAAQgmAAgzgrIgSgOIgeBFIgBADQgGAKgQAAQgoAAg2gsQgIgHgbgbQgzAzg3AtIgMACQgnAAgVgfQgTgeAEgnQgEAAgKACQgJADgHAAQgoAAgWgXQgYgaABgzQgugKgTgNIgDgCQgSgPgDgdQAqghAugnQBjhXCEiEQBWhOBgg8QBuhGBEgSQhziCAFhtIAAgGIAUAAIALAFIACABQAFgHAGgFIAAgBIALgHIA1jVIAvgRIgcDYIAHABQAZAFAZAWQATAPAKAPQAYgaAkgUQAmgVAdgBQAJgBALABIANACIBzjWIAoAQIgBADIhWDcIAKAGIAPAMQATgKAUABQgIB3AuCGIAFACQBMAnBMBBQBKA/BJBkQBJBmAkBCQAkBBBGBSQApAwApAoQgJAGgIAEIgEACQgeAMgzgLQgPAsgSATQgXAWgqAAQgbAAgFgFQgVAzgVAUQgiAdg2gPQgQAogkAVQgdASgoAFQgqgogzg6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.7,-71.8,171.5,143.6);
p.frameBounds = [rect];


(lib.dress_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AlHPRQglgOgfgKIhfg3IgCgFIAEhCQAEglATgRIALgJIgDgDQABgLgEgUQgFgVAAgIQAAgNAZgjIAAgCIgCgPQgNhIAAgeQAAgNAKgaIgFgCIgFggQgDgSgIgbIgHgXIgHgXIgxgPIAzgKIgygPIAzgKIgxgPIAygKIgxgQIAygJQgYgIgZgGIAygNIgzgLIAxgQIgygIIAwgRIgzgIIAwgSIgzgGIAwgTIgzgFIAwgUIg0gGIAwgTIgzgGIAwgSIgzgHIAxgRIgzgJIAxgQIgygKIAxgMIgxgMIAygLIgxgQQAagEAZgDIgvgUIAzgDIgugXIA0AAIgtgaQAaABAZACIgrgcIAzAFIgrgdIA0AGIgqgfIAzAJIgoggIAyALIgmgiIAyAMIgmgjIAyAOIglgkIAxAOIgkglIAxAQIgjglIAwARIgigmIAwASIghgoIAvAUIgfgoIAvAVIgggpIAvAVIgfgoIAvAVIgfgpIAvAVIgggoQAXALAYAIIghgnIAwATIgigmQAYAJAZAHIgkgkIAxANIgmgjQAZAHAaAFIgoghIAzAJIgrgeIAaADIAaAAIgXgMIgWgNIAzgCIgYgKIgYgJIAzgJIgygNIAYgGIAZgKIgagDIgagCIAXgKQAKgFANgJIgaACIgaAEIAVgQIASgTIgZAIIgYAKIAfgoIguAWIAggoQgRAHgHACIgZAIIATgTIATgQIgZAFIgaABQAJgGANgHIAYgLQgRAAgJgBQgRgDgJgDIAZgHQAOgDAMgBQgNgEgMgEIgXgLIAagCIAZACIgVgOIgVgPIAyAIQgUgQgTgRIAyAMIgmgjIAyAOIgmgiIAyAJQgLgKgJgGQgKgGgMgHIAHABIATABIAZgDQgLgGgMgEIgHgCIACgJQB+AAAgB8QBLh6B8AIIAcAEIAUAZIgYgKIgZgHIASASIAUARIgZgGIgagEIAqAeIgzgFIAsAaIgzABIAuAWIgzAEQAYALAYAHIgyAJIAxAPIgyAMIAyALIgxAPIAyAJIgxARIAzAIIgwARIAzAHIgwASIAzAGIgwATIAzAHIgwASIAzAHIgxARIAzAIIgxAPIAyALIgxAOIAyALIgyAOIAyALIgyANIAyAMIgxAOIAyAKQgYAIgYAIQAZAFAaACIgwATIAzAFQgXAKgXALIAzACIguAXIAzABIgtAXIAzAAIgtAZIA0gBIgtAZIAzAAIgtAYIAzABIguAXIA0ABIgvAXIA0ADIgwAUIAzAGIgwARIAZAEIAaAGIgyAMIAYAHIAZAIQgZAFgaADIAwATIgzAFIAvAVIg0ACIAvAXIg0ACIAvAVIgzAEIAvAUIgzAGIAwARIgyAKIAyAMIgZAIIgYAGIAzAFIguAYIAagBIAZgCIgVAOIgUAQQAOgCALgDIAZgGIgTARIgRAUIAwgUIgQAUIgOAVIAtgZIgaAtQAWgOAUgQIgWAvIApgfIgUAvIAfgZIAOArIgFALIAHgFIAHAWQAjBnAIAUQAPAKAKAIQAmAfATA8IgDAGIASAKQAQAIAEAEQATASALAbQAHARAIAhIAUBeIABAHIAKAtIAJAnIADAEIgKASQgjA5hPBCQhsBahWAAQglAAhbgMQhbgNgdAAQgkAAhAAPQhAAPgpAAQhLAAgegLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-98.8,110,197.7);
p.frameBounds = [rect];


(lib.dress_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ABfFUQguBphQA5QhshogChnQhJBxiRAgQg/hbANheQh7Aohmg/QCShOCLiiIADgHQgSgIgSgKQB7hnBIhdIgBgGIgXADQgjg4gJgTQgVguAAgxQAAgmAZgrQANgWAagnQDGChDxAyQAKA1AUAxIAmBbIgKAEIAAAAQAJA1AVA4QAkBiBFA3IgHAIQBXC/CHB/Qi2ABhnhiQgIBrhLBTQiZhLgTiCgACGBvIAAAAIAAgBgAh9BHIgCgGIgBABIADAFIAAAAgAjjAIIAAgBIAAAAIgDAAgACrjAIgGgHIgBACIAHAFIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.5,-54.5,127,109.1);
p.frameBounds = [rect];


(lib.dress_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AFoMDQgFgHgCgIIgBgIIgCACIhVitQgWACguAJQg9ANgOAAIgjAAQgOgEgBgTIAAgCIAAAAIhPjjIgsgMQhegagvgxQhAhDAAh8IABhFIAAAAIgXAEQgUAAgSgIQglDrAdDTIAAABIAAAIQgDAQgXAWQgLAKg3AgQgtAagUAdQgeAqAHA0QACAQABA9Qhzg4AAgWQAAgGAFgcQAFgbAAgHQAAgvg5grQg6grAAgqQAAgoAvhKQAZgpAwhIQAkhBATgyQAYg+ALg+QgVgCgYgMQgjgTAAgdQAAgyCtifQBnhfBihNIAGAJIAAhOIABAAQgfgPgggjQghgmAKgxQALgxAQgTQAQgTAWgkQBmAhAwB6QB/iOChAWQgbBTA5CnIATBYQA1BEBBCLQAmBQBNCqQBFCUA6BTQAfAtAhAhQgxA+gjAAQgSAAgRgYQgHgKgVgpQgWgrgXgSQCZFOA5BaQAYAmgBAJQh8ArggAJQgpANgsAAQhgAAgYgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.2,-80.1,144.4,160.3);
p.frameBounds = [rect];


(lib.dress_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AhtMEQgMgggHgNQgMgVgbAAQgTAAgrAJQgrAIgHAAQgqAAgdhHQgOgkgJgNQgQgWgZAAQgKAAgUAKQgUAKgJAAQgXAAgQgoQgKgagFggQgEgYgmgIQgrgIgHgMQgKgRAAgoQABgrgGgPQgHgRgogOQghgMAAgiQAAgYAHgZQAIgYAAgTQAAgTgBgEQgDgKgLgGICPhwIgSgYQgTgdgKgVIAigWQgSgyAAgtIABgQQBVgUBbgxIAggSIAEg2QAAgPgFgZQAbgDAogJIBEgQIABgBIAAgBIAAAAIAAAAQAKgPApgzQAog3AAgTQAAgHgFgaIgEgVQhRgeAAhGQAAgqAXgpIAshCQDPgJDTA0QADBlAKAiQAOA4AHAbQAFARAGAMQgCAnAQA9IAWBMQAvAXAzAPQAzAOALAFQgTAygSAgIAaAYQBOBEBIAZQgRAsgiAwIgJANIA8A0IBrBjQgIAHgEAHQgMASAAAfQAAAJAIAaQAHAZAAAIQAAAlgyAIIglAHQgSAGgFAOQgFAQgGBEQgNA9gpAAQgKAAgZgEQgZgEgOAAQgdAAgHAZIgPA8QgWAvgPAPQgSASgbAAQgRAAgMgKQgMgKgMAAQgPAAgFAWIgFAwQgIBGgxAAQgOAAgcgKQgcgKgHAAQgMAAgQAvQgQAvhIAPQhRghgYgqgAA3jCIAFgFIgBAAQgGADACACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-84.7,143.1,169.5);
p.frameBounds = [rect];


(lib.dress_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AlDQTQglgNgbgHIgSgGQgjgLgjgVQgUgLgPgMQAXhYAJh3QAGhHAGjGQAEivAMhlQASiYAphxQAYhBAkhMQAfg/AdgzQA/hsAIgPQAshWAAgwIAAgKQgmgUgPgRQgWgXAAgjQAAgxAshKIAZgxQghAOgUAAQgIAAgPgDIgmgJQAQgSAYgTIAJgIQAUgPARgGQgLACgLAGQgLAFgZAAQgZAAgNgEQgNgEgYgMQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAQALgSAcgPQAbgPAPAEIAVAFIANAEQASAEAZALQgpgVgMgMQgLgLgJgzIADAAQAlAAAiAfIANAMIABgcQACgUALgSIAJgMQAWAWAFAIQAVAoAAAnIgBAUIALAJQgFgSAAgKQAAgNAOgTQAMgQAGgCIANAnQAHAYAAAQQAAAKgHAUQAVADAlACIAqAEIAAgaQAFgOAFgbQAFgcADgIQAdAZAzAlIAFgFQACgHAhgmQAMgOAPgYQARA/AIAWIAJAYIAvgOIAngMQAAARADAfIACAfQAABIg9AVIgWAbQgIAKgSABQAEAsAKArQAPBCAnBnIAjBeIAKAkQCpGMgcDFIgBApIAAAAIAAADQAAAchyA2QgyAYgcAUIgDB+QgJAwhuAxIhSAmIgPAJIACBqQgHAlhAAkQhAAng6ABQglABgSAYQgLAPgKAmQgKAmgJAOQgQAYgiABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.1,-106.8,102.4,213.8);
p.frameBounds = [rect];


(lib.dress_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Ao+PYQgigDgPgHQgKgEghggIAAgPQDgxDEGkrIAAAAIABgDIA5hTIhMAmQgSgwgZghQglgyg3gTIBIglQgNgWgEgKQgGgPAAgTQABgjAkgXQAtgbAJgaIgBgBIAShpQE/BSE4hNIAOBxIgDABIABAEQATATAeAVQAVAUAAAgQAAAWgLAXQgKATgOAOIA5BBQgsgEgjAHQhFAOgnA1IgbgdIAsDCQBhCBA/FUQA1EdA/EFIACAKQiWB9iOAWIgjAFQglAEg2AEIgRABIgNABQhBAGgjAFIgPACIgKACQiHAXiHA8QgeAOgqAOQgoAOgzAPQh7Akg5AAQgfAAgYgCgAFxKaIAAgCIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.7,-98.6,133.5,197.3);
p.frameBounds = [rect];


(lib.dress_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AgMMbIhChzIgxBlQkvgxk+i2QCMlECok+QgwhiAAh2IAAgJQAngXA7geQA9glAfg2QAPgbAMgpIAShFQAah0CQgsIBQgYIAYCLQB7gsBRhvIBfA8IAAAAIAFACQAHABAnAXQAnAWAQApQAPApAeB4QAWBbAzBDQAcAmAoAkQAwArBAArQgTBwgqBaQgzByg4AVIDBHKQlACulUAAQgzAAgygEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.9,-79.9,150,159.9);
p.frameBounds = [rect];


(lib.dress_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ADXPXQgNgLgGAAQgFAAgRAKQgSAKgGAAQgIAAgKgNQgKgOgGAAQgFAAgMAGQgNAGgGAAQgLAAgJgNQgJgOgNAAQgDAAgSAHQgRAIgCAAQgJAAgJgOQgKgOgNAAQgKAAgRALQgQALgDAAQgFAAgPgKQgQgKgHAAQgMAAgNAKQgNALgCAAQgHAAgMgJQgNgJgGAAQgPAAgKAMQgKALgEAAQgDAAgRgIQgRgHgEAAQgHAAgIAJQgHAIgGAAQgFAAgJgLQgJgMgJAAIgDABQgPAMgVAKQgEAAgKgIQgJgJgDAAQgIAAgEAJQgEAIgIAAQgEAAgLgLQgLgLgIAAQgEAAgMAHQgMAHgCAAQgBAAgPgPQgPgPgMAAQgDAAgGAEQgGADgEAAQgFAAgJgNQgIgNgHAAQgEAAgKAEQgLAFgCAAQgGAAgPgMQgPgMgGAAQgEAAgHAGQgIAFgCAAQgEAAgEgMQgGgMgKAAQgFAAgIADQgIACgGAAQgKAAgFgNQgGgNgHAAQgDAAgHADQgIADgEAAQgKAAgHgNQgHgNgJAAQgDAAgEACIgFACQgJAAgFgMQgGgPgDgCQADgEAMgCQAFgBALgGQA3hdAwhjIgFAAQgNAAABgNQABgPgFgCQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAcgMAIgBIAFgDIAAgBQBPiwAzjBIAAAAIgCAAQgJAAgDgKQgCgMgBgEIALgJQAJgFAIgDIADgRQAUhQAThlQAWhuAthtIAFgCIAAgCIgQgLQAVgIAGgLQARgkARgeQAdg0ACgDIAhg1QB1jGgKguQgngHgQgRQgSgUgCgsIgOgFQgPgGgIgLIgCADIgUgRQgLgNABgUQAAgYAcgjIATgWIAMgOIAGgIQApABAaAeIACACIADgDIgCgJIgDgLQAAgGAQgJQAMAAAFASQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQgBgFAHgJQAHgKAHAAQAIAAABABIAEAOIAIgKQAIgKADAAQAOAAACAXQAEgDAGgHQAEgFAEAAQAGAAADAEIACAIQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAEgEAFgKQADgGAEAAQAJAAAHAFQAGAFgBAFQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQANgRAGAAQAHAAAEAFIAIAMQAAgCAEgFIAVAAIABARIAHgJQAEgGAEAAQAUAAgDAXQAGgGADgJQADgFAPAAQAGAAAFAKQAEAKgDAFIAJgIQAHgFADAAQAFAAAGAJQAFAIABAGQAFgDADgHQACgFAIAAQAGAAAIAUQAKgKAFAAQAMAAABAQIADAWIAAABIAAACIABABIAAgCIADgDQBJhjBkAnIAPAPIAnAoQALANAAARQAAASgLANIgHAHIgCgDIAAAEQgEAhgvAJQgjAGgmgIIgLAMQgOAMgbAAQgKAAgQgDQArCJA/DVQASA/AWBEQAWAWAJAMIgOANIAAAAQA2ChA2CKQAaBDAcA/IANAFQAIADAEADIAVATIgBABQgHACgLAGIgIAFQBJCgBTCFIAMATIABACIAAgCQALgFAPADQAPADAMAAQgNAMAAAHQgBACAJATIgFABIgNgCIgEAAIAAABIABABQAuBFAsA3IgDAAIACACIACgCQADAFAMAGIARAHIABABQgIgBgIAEQgIAFAAAGQAAADAFAQQAAAIgNABIgXgBQgJABgFAMIgJAWQgCAFgPAAQgRABgFAEQgFAEgDAPQgBAMgKAAQgJgDgGAAQgCAAgHAIQgHAIgMAAIgEAAIgJgBQgIAmgXgIQgXgJgOATQgMAQgIAAQgFAAgDgEQgEgEgEAAQgSAAgKARQgJAQgIAAQgEAAgHgEQgHgEgEAAQgQAAgMARQgNAQgBAAIgZgLQgKAAgLAPQgLAPgGAAQgFAAgKgHQgKgHgDAAQgKAAgPANIgQANQgFAAgJgHQgLgHgEAAQgHAAgUAOQgUANgGAAQgIAAgMgLgAi0llIABgBIAAgBIgBACgAjOmOIABAAIAAgBIgBgCIAAADgAgKnlIABADIADgFgAgUoGIABACIABgDgAiXqrIABAAIgCgDIABADgAizsPIAEABIgCgDgAi8tuIAAgBIgBAAIABABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.4,-99.4,170.9,198.9);
p.frameBounds = [rect];


(lib.dress_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AA8OyQg1gtgwAAQgRAAgWAKQgWAKgaAUQg3AogeAAQgcAAhGgoQhHgogKAAQgLAAgPAGQgWAJggAWQg3AmgcAAQgpAAgxg6Qgxg5gkAAQgUAAgSAEQgPAEgNAHQgdAPgUAAQgaAAgUgYQgLgOgXgrQgzhfg7gdQB2hpCNifQBuh9AvhJQgHgRgHgXQgMgsgHgOQgNgbgUACICJh+QAqgnAXgfQgGgHgGgKQgPgcAAgZQAAgGAFgZQAFgZAAgGQAAgPgFgNIgKgWQAZgUA4glQA5glAUgOIAAgBQgDgEAAgGQAAgJAFgKQAFgKAAgGQAAgGgKgFQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQANgEARgDQARgDAIAAIAGgDQgGgPACgFQAJgSAGgOQAFgPASgPIAAAAIAAAAQgDgHAAgDQAAgLAPgXIAFACIgCgHQANgTAagNIACADIAdgvQAUgfAAgVQAAgMgNgpQgagKgLgJQgjgegDgfQgCggAKgfQAKgeAWgvQAbgBAqAHIAIABIABAAQBDARAyA4QBGg0BQABQArAAAtAQIADAfQAHA+AOArQAMAoAbA0IAAAtIgFABIAHALQAeAyAAAmQAAATgKASIAbAwQAUANAWAcQAYAfAfA6QgoAGgbANQgMAHgTACQAbAoA0A0QAvAvArAiQgRAcgqArQA7BLBvAwQAbAMA9AXQgsAwgyAmIB7DIQCzEXB5CMQghAjgtAeQgzAhgUAAQgJAAgogeQgRgNgMgHQgSgKgJAAQhPAAg5A5QgfAfgNAJQgbASgjAAQgXAAgngZQgdgTgbgFIgRgBQgiAAhWA3QhWA3gnAAQguAAg2gtgACfEdIAGALQgDgGAAgHgACsDJIADAEIgBgFgABLAfIAFABIgBgCgAD5ltIAAAAIAAgBIAAABgAgEnKIACAAIAAgBgACmoHIgBgCIgBAAIACACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.6,-99.1,207.3,198.3);
p.frameBounds = [rect];


(lib.dress_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AiDPrQg3gegVAAQgjAAgiAXQgiAWgWAAQgmAAhVhhQhWhignAAQgbAAgHAMQgDAEgFAiIgZAAQgzgagshLIgLgSQg3hegEgHIA7hOQBDhaA9hfQBiiYAchXQAGgUADgQQgGgJgGgKIgBgCQgWg5gFgGQAVgLAwgiIA4grIAHgHQgKgMgMgGQAZgSAXgbQAageAIgYIgMgXQAAgJAfgbIApglIANgaIANgZQARgjAUgEIAJgGIgLgEQAqgwADhDIAAgXQiLgVA9iDQBagwA5BiQAGgTAKgOQARgWAVADQAUACAMAZQAEALADANQBth1BvBnIAzClIAlCMIgBAAIABAFQAdgBAIAvQAGAbAEA7QAGAmAkBHIgBABIABACIAHAJIACAEIABADIAAAAIAAAAIAJAQQARAfAIAIQgJAHgJAPQAQAKBEAVQBIAWAOAAQgCAJgKATIgUAiIgMAVIgKAQIAbAJQgdAugdARQAwB9B3CfQBCBYBCBEIAQARQhjAyg4AiQg3AhgfAAQgRAAgTgHQgUgIgNAAQgeAAhmBiQhlBhgqAAQgEAAgkgZQgkgZgEAAQgkAAhBAtQg+AtgeAAQgeAAg4gegACkDwIAAAAIAAgBIAAABgACDB8IABgBIgCAAgAhKBoIADgBIgDAAgAhrpBIAAgDIgDAAgAjjrDQA/hkAGhuQCYgqgHg6QBkAGBKgVQgOA1BDAyQBMALBMBCQhpASgzCYQjGhAjvAng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.4,-103.3,162.8,206.8);
p.frameBounds = [rect];


(lib.dress_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AAUIgQgcgLgfgdIgBAAIgBgCIgBAAQhJAVhAAAQiFAAhgg8QgXgPgagWIgHAHIgnAAQgwgLgfgiQgfglAAgzQgBg/A/hHQAUgXAdgdIgCACQgYhagQg0QgVhEgmgkIA6gYQAwgUAcgPQBWgxAJhIQARhyAdg0QAcgwAvgYQAoAxAlATQAvAZBTAAQBEAABOgaQBRgbA5gxQBAAeAbBpQAJAgAMBKQAKBDAJAdQARA3BoBZIB8BpQgqAXhBA6QhWBOgOAyQhghfhMiAIAAAAIAAgBIgTgfIAPAiQAdBJArBjQApBlAAAwQABBSg8BEQg9BGhQAAQhWAAgmgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.5,-55.8,123,111.7);
p.frameBounds = [rect];


(lib.color_picker_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_picker_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,360);
p.frameBounds = [rect];


(lib.color_picker_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_picker_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,360);
p.frameBounds = [rect];


(lib.bottom_decor12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor12_img();
	this.instance.setTransform(-49.9,-20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-20.7,101,42);
p.frameBounds = [rect];


(lib.bottom_decor11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor11_img();
	this.instance.setTransform(-48.7,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-28.1,98,56);
p.frameBounds = [rect];


(lib.bottom_decor10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor10_img();
	this.instance.setTransform(-43.6,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.6,-30,87,60);
p.frameBounds = [rect];


(lib.bottom_decor9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor9_img();
	this.instance.setTransform(-60.2,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.2,-29.6,120,59);
p.frameBounds = [rect];


(lib.bottom_decor8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor8_img();
	this.instance.setTransform(-41.8,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.8,-30.5,84,61);
p.frameBounds = [rect];


(lib.bottom_decor7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor7_img();
	this.instance.setTransform(-42.8,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.8,-27.4,86,55);
p.frameBounds = [rect];


(lib.bottom_decor6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor6_img();
	this.instance.setTransform(-41.5,-27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-27.7,83,55);
p.frameBounds = [rect];


(lib.bottom_decor5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor5_img();
	this.instance.setTransform(-39.6,-28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.6,-28.6,79,57);
p.frameBounds = [rect];


(lib.bottom_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor4_img();
	this.instance.setTransform(-68.3,-50.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-50.9,137,102);
p.frameBounds = [rect];


(lib.bottom_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor3_img();
	this.instance.setTransform(-47.2,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.2,-33.3,95,67);
p.frameBounds = [rect];


(lib.bottom_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor2_img();
	this.instance.setTransform(-53.7,-27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.7,-27.7,108,56);
p.frameBounds = [rect];


(lib.bottom_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor1_img();
	this.instance.setTransform(-59.1,-37.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.1,-37.4,118,75);
p.frameBounds = [rect];


(lib.bottom_base12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ACWDOQgZgCgKgWIgJAIQgRALgNAAQgTAAgUgMIAAgBQgLgIgFgHIgOALQgLAMgRAAQgTAAgRgSIAAAAQgLgLgFgMIgIAGQgUAPgOAAQgIAAgRgLQgNgIgIgJIgJAFQgOAGgGgBQgRAAgRgMQgMgJgEgJIgFACQgOAGgIAAQgXAAgOgNQgLgLAAgNIgDABIAAAAIgRADQgSABgQgTQgJgKgCgJIgGACIgSAAQgSAAgOgNQgMgMgBgQQgHABgIAAQgPAAgKgJIgBAAQgMgLAAgPQAAgJAEgFIABgCIACgBIADgBQAhgPA+g3QAZgXAcgeIAzg2IADgDIAFABQFKByD4g6IAEgBIADADQAMAPA+BrIAAgBQBCBkAyATIANAFIgLAIQgLAIgEAEIgBAAQgLAOgaAAIgEAAIgGAQIAAAAQgIAPgUgDQgLgCgLgJIgOAaQgMAMgVAAQgTAAgKgGIgBAAQgEgDgJgJIgPAQQgPAMgVAAQgSABgQgSIgFgFQgTAegZAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.3,-20.7,100.8,41.4);
p.frameBounds = [rect];


(lib.bottom_base11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AneB0QAGgbAIgaQA8i+CbiRQBaAeBSASQDlAzC2gsQBsC4AfDGIAGAzQiiA5iwAAQkiAAlJidg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-27.3,96,54.7);
p.frameBounds = [rect];


(lib.bottom_base10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ADYEqQiAhRi0AbIgEAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAIgBgFIACgeQiNhHiNAxQgBAAAAAAQgBAAAAAAQgBABAAgBQgBAAgBAAIgDgCQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgFhQIABgDIgEgDIgcgnIAAgBQgJgNAAgYQAAgsAagtQAKgSA+hEIAEgCIAAgBQABgDADgBIABAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAugyBIhKQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAEAAQAfALAfAJQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACgBALAFIAHACQgEgCAXAHQAXAGAyALQADABACACQACgCADABQBiAUA5ABIAsACIABAAQBlABBagVQACgBADABQADACABADQAiB/AIA/IACARIgBAEQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAEIABADQAEAtgCAuQgEBBg2A8Qg1A9g6gWIgnA5IgFADIgCAAIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.6,-30,87.2,60);
p.frameBounds = [rect];


(lib.bottom_base9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAzDKQABgRgDgMIgDgNIgDAAQgKgQgVAAQgbAAgyAZQgyAZgYAAQgeAAgXgmQgYgngdAAQgNAAgIAHQgIAGgEALQgJAXgOAAQgeAAgTgzQgTgzgbAAIgBgCIgDACQgKACgNAMQgOANgJAAQgSAAgIgKQgIgJAAgVQAAgKAIgTIABgEQAJgVAAgLIgBgLQgBgEgGAAQAbgFAlgIQA0gNAHgHIAKgCQgDgLAAgKQAAgRALgNIAggkIAAgBIAPggQAFgMATgFQBUAcBPASIAJApIATADIAZgiQDGAkCkgoIANBdQAQATgLAVICPBhIgUAaIgNAPQgQARgQAAQgIAAgKgLQgFgHgHgDIgBgBIAAABQgCACgDAAQgDABgDgCIgCgCQgXADgqAmQgtApgTgqIgEgIIgEgGIgBABQgCACgDgBQgEAAgBgCIgHgJQgWABgyAjQg1AkgZAAQgLAAgFgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.1,-20.5,96.3,41);
p.frameBounds = [rect];


(lib.bottom_base8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AhuELIAJgiQgRgGgZgFQg6gNhEAAQgiAAg4AHIgyAIIAThxIAYgDQAFgbAIgaQAdhoBWilIAthSIAbAJIAdAJQAiAKAhAJQAFgPASAEICJAaQARADABAPIAuAEIAuABIAcAAIA2gDIAtgFIAcgEIAjgIIAUBfIgMADQAOBOgTBFIAEAGQAGAMAAASQAAAJgCAKQgDAIgDAEQgDADgFAQIAHgOQgVAygMAOQgNAOgEAAQgKAAgLgEIAAAAQgQAXgRATIANAKIg/BfQiGhtjYBPgABaiGIABAAIgBgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-29.7,82.1,59.5);
p.frameBounds = [rect];


(lib.bottom_base7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AkGCmIASgsQgcgIgVgSQgNgLgLgOIgJgNIgCgEIgBgCIgLgWIgCgEIAVgaQg/gIgcg0IgIgRIAggaQgMgIgFgOQgEgJAAgNIAIgEIABgBICHhLIAXgmQAhAMAhAJQA7ASA4AMQAuAJApAGQAzAHAxACQAsACAqgDQA5gDA0gLIAUgFIAFAmIBLCiQgjA4hKAJIAAABIAAAAIAEAJIAAABIAFAKQgzA2hPgLIAHAYQg/AxhbgGIACAgQgTAKgUAJIgBAAIAAAAIgBAAIgCABQgVAMgcAEIgBAAQgqAKguACQhNgggyhEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.1,-26.6,84.3,53.3);
p.frameBounds = [rect];


(lib.bottom_base6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmZCBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAtjMBdh5IABgBIAnhDQACgCACgBQADgBACABIA5ASIAcAJIABAAIAAAAIABAAIA8AQQAHgSAWAEICSAZQAUADADARIAIACQBDgBAfgBIAAAAIAlgDIAAAAQAwgFAsgLIAEAAIAEACIABAEIAJBaIAAAAQA/C8geC+IgDAEQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAQhiAQhkAAQkqAAk3iTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-27.7,83,55.4);
p.frameBounds = [rect];


(lib.bottom_base5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AEIEcQhAgnhOgXQhagahbAAQgTAAgQADQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgDgDIgBgEQAAgHADgNIgBABIABgDQhSgVhfgFIgBAAIhtgEIgEgBIgDgEQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAMhCAWhHQAahYByi6IAEgDQADgBACABQFMByD3g7QABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAEACIABAEQALA8ACAXQADAXADA4QADA5geBWQgdBWhCByIgCACIgEABIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.6,-28.6,79.3,57.2);
p.frameBounds = [rect];


(lib.bottom_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Aj/GvQgYgTgNAAQgLAAgGADQgJAEgJANIAAg1QAAgtALg9Qg8AVgTgnQgJAigDAPQgMBSAfAeIgOgBQgKAAgGgCQgfgIgUgkQgQgegNgIIgeBAQgCAHgGgBQgPgBAKAGQgtgSgTgZQgSgagMgDQgLgDgGACQgKABgMALIANgzQAMgtAbg4IACgFIgDgDQgEgFAAgcQAAgGAFgXQAFgWAAgHQAAgQgUgEQgUgDAAgWQAAgPAIgZQAHgXAAgKQAAgMgHgHQgIgIAAgKQBCgfBoiJQA5hLBih1QAjALAlACQApACArgKQAbgHAbgKIABgBQAYgJAZgNIAfAZQAkAbAlAVQAuAZAyAQQAaAIAcAFQA8AMBAgBIAtgDQBICaAYAsQBFB/BeA/IgOAYQgLATAAAMQAAAPAPAJQAPAJAAAYQAAAhgYAgQAjAcAgAAQAHAAAEgDIAGgCQgMARgNAPQgaAcgQAAQgGAAgOgFIgKgDIgGgGIgEAEQgNAAgUARQgUASgMAAQgIAAgLgLIgGgHIAGAHQgagYgFAAQgTAAgNARQgOAWgLALQgPhAgcg7IgKgVQgdA0hFgbQAHAYAFALQAeBNAqAKIgNAHIgPAGQgeAIgkgVQgdgRgPgBIAGBGQACAIgGACQgOAHANgBQgxAHgdgNQgcgMgNADQgKADgFAEQgIAHgFAOIgNgyQgMgtgGg9IAAgMQg5gvgmA0IACAjQAKBTAlAVQgEAAgKACQgJADgHAAQgfAAgdgeQgYgYgOgFIgMBGQAAAHgHABQgPADAMADQgwgGgZgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-45.7,135.1,91.5);
p.frameBounds = [rect];


(lib.bottom_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AE9E6QgCgDAAgZQAAgWADgmQADgqAEgUIgcAiQh/h+jVA4IACgNIgDANIABAAIgDAcQiKg/idAZIAKg+IAAAAIgBAAIABAAIgCAAIAAABIACgBIgCACQhACjgLAKQgZgYAAgIIABgEQgGgDgGgGIgMgPQAggXBYhYIgnAbQgeAVgMAAQgOAAgPgSQgRgTAAgaQAAgTAFgIQAEgHAJgCQgEgVAGgOQAGgQAOgBQATABAPAZQAFAHAQAkIAFgCQgHgRgDggQgDgkBBhuQBBhvA0AKIAcg0QFOByD5g7IAHA+QAxAkgKBtQgLBqgUAqQgMAagYAQQAWAAATAFQAZAHAAASQAAAPgFAKIgDAAIABAHQAAAMgZATQgZARgOAAQgQAAgUgmIgLgWIAGAYIAKAlQAKAiAFAXIAAAPIgOABIgOABIAAABQgBAJgBACQgZgGgDgFgAGDDSIAOgJIAOgIQgFgOgWgJIgxgTQAcAmAUAVgAmqA1QAAAJAFAJQAGAKAIgBQAPAAATgKIAngNIABgBQgTABgBgBIgTgIIgfgKIgUAAQAAAFgDAKgAlcAuIAAgBIgCgBgAmoAJQANACANAHQgMgWgLgBQgCACgBAMgAlLA4IAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.5,-32.6,93,65.2);
p.frameBounds = [rect];


(lib.bottom_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AjQC/IgDgEQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAFgOQh7ABhVhZQgCgDAAgCIABgFIANgQQhpgOgdh1QAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIETi+QABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEAAQFLByD4g7QAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAEACIDIDNIACAEIgBAFQgwBghnAGIALAYQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQhMBEhsAFIAHAeIgBAFIgDADQhLAkhRAAQh7AAiOhWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.7,-27.7,107.5,55.5);
p.frameBounds = [rect];


(lib.bottom_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AEyFRQgNgMgvggQgjAJgFAAQgZAAhBjDQg9i2gEgzIghDPQgWCagNA/Qg1gHgzgUQgsgShMgsQhNgsg1gVQgZgKgXgEIgOB6QiMgkgKg2QALg1A7gzIAPgNIBGg3QAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgEACgCIANgNQA9ilA6haQAggzAfgbQFJBxD2g4IADgBQAXAeARAzQAOAvAJBBQANBeAJA3IAIAGQACACAAAEQAAADgCACIAAAAIAdAaQA2A3AlA5QAOAWAMAWQgcAvhaAiQhaAigpAVQgNgPgQgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.4,-36.7,116.8,73.5);
p.frameBounds = [rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.body_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body_decor1_img();
	this.instance.setTransform(-90.3,-207.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.3,-207.3,181,415);
p.frameBounds = [rect];


(lib.body_check_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_subcategory_img();
	this.instance.setTransform(-55,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.body_check_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_category_img();
	this.instance.setTransform(-40,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.body_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC6C6").s().p("AlGfsQgygiAHhAQgShCgKhWQgLhWgqhQIhNiQQghhBgEjJIgMg9QgIg0AAgnQAAhQAciAQAiiZBsjIQAHgSAYgkIApg8IA6hQQAAgNgFgeIgBgCIgBgKIgDAJIAAACQgkB2h2AaQgdAHhPAKQhBAIghAIQgHALgLAJQgWATgVgDQgVgDgjgKQgkgKgSACIgCACIACADQAIAKAAAGQAAAPgJAAQgNAAgUgUQgUgTAAgKQAAgFALgKIAPgNIgQgJQgZgPAAgRQAAgIAHgJQAGgIAHgDIAEgCIAAgBIgBgBQgLgRAAgKQAAgKAngKIAAgWQAAgdASAAQAOAAAlAUIAoAXIABgFQgGgfAAgGQAAgPAHgTQAJgVALAAQARAAADAhIAEAqQAOAbAJATQAigPBJgeQBAgcAegZQAfgbARg3QAahSADgGIAAgXQgDg9AZgzQAZgzBWggQBCgTAZgNQAqgXgGgwIAAgFQiSgCikhYQjChaAMiTQAMiSgvh6QiYkgBSlJQCinkIkhHQIYgaEhHXQC2F5jWGEIgFADQARAVAAAaQAAA/hIBNQhMBQhKAAQgRAAgPgLIgEgDQjCDgkxA7QgFAdAAAYQAAAZAoAcQAVAOApAQQBSAhAVAtQAUArAAA5IAABDIAdBiQAMAqAGAcIAAABIADgBQAhAVAfAkIBPBhQAxA8ApgIQAqgIAkgEQAjgDAEAOQADAOAAAtQAAAOgBAIIgBABIABAAIABAAIAFAKQADAHAAAFQAAAJgGAGIADADQADAGAAAHQAAAYgfAMIgCAAQAEAWgTAKQgOAGgXAAIgPgBQgJgCAAgIQAAgHACgDQACgDAGgDIAMgDIgEgBQgDgCAAgHIABgFIAAgBIAAgBIAAABIgBAAIgCABQgwATgSAAQgPAAgKgGQgKgGgPgUIACgDIgEAAIgBAAQgQgBgNgKQgJgHgagkIg3gwQg5gvgjgTQglgUgYgfQgNgRgHgSIAAAAIgFgSQgCgJAAgKIgKgSIgCABIAHAlIAAAAIAEASIAAABQAJAqAOA6IAfDOQADB4hjCCIhKBiQgYAhgKAaQA6gEA5A4QA9A7AbBLQAaBLAVAiQAVAhASAXQAKANAlAgQAhAhAAAgQAAAagLASIggAzIgCACQgTBMgjAyQgjAxg5AHQg5AGgHgHQgGgFgDgNIAAgBIgEABQgJACgGAAQgRAAgIgFQgKgGAAgPQAAgLAMgZQALgYAAgVQAAgSgFgoQgFgoAAgUIAFg+QAAgfgbgUQglgWgIgLQgLgMgzglQg0gmg8hBQgfgKgSgIQgegOgMgMIgEgEIgCgDIgCAGIAAAAQgIApAAAKQAAAKAYAlQAXAkAFAeIALBFQADASABAqQABAqADAuQACAtAHAQQAHAQAjAjQAjAjAAAYQAAALgFAWIgIAiQgBAFALA3IAMBCQABAMgZAuQgcA1gXAAQgKAAgOgKIgFgEIgCAEQgCAEgGAGQgGAFgQABIAAAAQgQAAg4gmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-206.6,179.1,413.3);
p.frameBounds = [rect];


(lib.bg_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_panel_img();
	this.instance.setTransform(-215,-215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,430);
p.frameBounds = [rect];


(lib.bg_navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_navigation_img();
	this.instance.setTransform(-50,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-25,100,50);
p.frameBounds = [rect];


(lib.backgrounds_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_5_img();
	this.instance_3.setTransform(-200,0);

	this.instance_4 = new lib.background_6_img();
	this.instance_4.setTransform(-200,0);

	this.instance_5 = new lib.background_7_img();
	this.instance_5.setTransform(-200,0);

	this.instance_6 = new lib.background_8_img();
	this.instance_6.setTransform(-200,0);

	this.instance_7 = new lib.background_9_img();
	this.instance_7.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.accessory_hand12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand12_img();
	this.instance.setTransform(-54.4,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.4,-37.5,109,75);
p.frameBounds = [rect];


(lib.accessory_hand11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand11_img();
	this.instance.setTransform(-43.7,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-46.1,87,92);
p.frameBounds = [rect];


(lib.accessory_hand10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand10_img();
	this.instance.setTransform(-33.9,-52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.9,-52.9,68,106);
p.frameBounds = [rect];


(lib.accessory_hand9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand9_img();
	this.instance.setTransform(-22.2,-41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.2,-41.1,45,82);
p.frameBounds = [rect];


(lib.accessory_hand8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand8_img();
	this.instance.setTransform(-26.7,-64.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.7,-64.3,53,129);
p.frameBounds = [rect];


(lib.accessory_hand7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand7_img();
	this.instance.setTransform(-29.2,-32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.2,-32.2,58,64);
p.frameBounds = [rect];


(lib.accessory_hand6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand6_img();
	this.instance.setTransform(-39.7,-38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.7,-38.2,79,77);
p.frameBounds = [rect];


(lib.accessory_hand5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand5_img();
	this.instance.setTransform(-39.8,-45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.8,-45.4,80,91);
p.frameBounds = [rect];


(lib.accessory_hand4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand4_img();
	this.instance.setTransform(-39.3,-47.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.3,-47.9,79,96);
p.frameBounds = [rect];


(lib.accessory_hand3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory_hand3_img();
	this.instance.setTransform(-45.7,-51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.7,-51.6,91,103);
p.frameBounds = [rect];


(lib.accessory_hand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand2_img();
	this.instance.setTransform(-85,-49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-49.1,170,98);
p.frameBounds = [rect];


(lib.accessory_hand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand1_img();
	this.instance.setTransform(-32.2,-21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-21.3,65,43);
p.frameBounds = [rect];


(lib.acc_hat12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acc_hat12_img();
	this.instance.setTransform(-90,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-70,180,140);
p.frameBounds = [rect];


(lib.acc_hat11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acc_hat11_img();
	this.instance.setTransform(-76.9,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.9,-61.5,154,123);
p.frameBounds = [rect];


(lib.acc_hat10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acc_hat10_img();
	this.instance.setTransform(-70.7,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.7,-30.1,141,60);
p.frameBounds = [rect];


(lib.acc_hat9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acc_hat9_img();
	this.instance.setTransform(-114.7,-92.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.7,-92.1,230,184);
p.frameBounds = [rect];


(lib.acc_hat8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.acc_hat8_img();
	this.instance.setTransform(-108.7,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.7,-55.6,193,111);
p.frameBounds = [rect];


(lib.acc_hat7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acc_hat7_img();
	this.instance.setTransform(-95.5,-53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-53.9,191,108);
p.frameBounds = [rect];


(lib.acc_hat6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acc_hat6_img();
	this.instance.setTransform(-76.5,-44.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-44.3,153,89);
p.frameBounds = [rect];


(lib.acc_hat5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acc_hat5_img();
	this.instance.setTransform(-149.8,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.8,-75.5,300,151);
p.frameBounds = [rect];


(lib.acc_hat4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acc_hat4_img();
	this.instance.setTransform(-93.4,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.4,-47.3,187,96);
p.frameBounds = [rect];


(lib.acc_hat3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acc_hat3_img();
	this.instance.setTransform(-100.8,-49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.8,-49.1,202,99);
p.frameBounds = [rect];


(lib.acc_hat2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acc_hat2_img();
	this.instance.setTransform(-96.2,-47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.2,-47.2,193,95);
p.frameBounds = [rect];


(lib.acc_hat1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acc_hat1_img();
	this.instance.setTransform(-123.3,-126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.3,-126.5,247,253);
p.frameBounds = [rect];


(lib.curtain_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-290,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-290,580,580);
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


(lib.numbers_separator_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.numbers_separator_img();
	this.instance.setTransform(-24,-24,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.numbers_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.numbers_0_img();
	this.instance.setTransform(-30,-30);

	this.instance_1 = new lib.numbers_1_img();
	this.instance_1.setTransform(-30,-30);

	this.instance_2 = new lib.numbers_2_img();
	this.instance_2.setTransform(-30,-30);

	this.instance_3 = new lib.numbers_3_img();
	this.instance_3.setTransform(-30,-30);

	this.instance_4 = new lib.numbers_4_img();
	this.instance_4.setTransform(-30,-30);

	this.instance_5 = new lib.numbers_5_img();
	this.instance_5.setTransform(-30,-30);

	this.instance_6 = new lib.numbers_6_img();
	this.instance_6.setTransform(-30,-30);

	this.instance_7 = new lib.numbers_7_img();
	this.instance_7.setTransform(-30,-30);

	this.instance_8 = new lib.numbers_8_img();
	this.instance_8.setTransform(-30,-30);

	this.instance_9 = new lib.numbers_9_img();
	this.instance_9.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.numbers_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.numbers_0_img();
	this.instance.setTransform(-30,-30);

	this.instance_1 = new lib.numbers_1_img();
	this.instance_1.setTransform(-30,-30);

	this.instance_2 = new lib.numbers_2_img();
	this.instance_2.setTransform(-30,-30);

	this.instance_3 = new lib.numbers_3_img();
	this.instance_3.setTransform(-30,-30);

	this.instance_4 = new lib.numbers_4_img();
	this.instance_4.setTransform(-30,-30);

	this.instance_5 = new lib.numbers_5_img();
	this.instance_5.setTransform(-30,-30);

	this.instance_6 = new lib.numbers_6_img();
	this.instance_6.setTransform(-30,-30);

	this.instance_7 = new lib.numbers_7_img();
	this.instance_7.setTransform(-30,-30);

	this.instance_8 = new lib.numbers_8_img();
	this.instance_8.setTransform(-30,-30);

	this.instance_9 = new lib.numbers_9_img();
	this.instance_9.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.sound_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_1_img();
	this.instance.setTransform(-40,-40,0.667,0.667);

	this.instance_1 = new lib.sound_2_img();
	this.instance_1.setTransform(-40,-40,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, rect];


(lib.reset_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.reset_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
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
	this.instance.setTransform(-30,-30,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, null];


(lib.random_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.random_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_img();
	this.instance.setTransform(-85,-85,0.944,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.play_again_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-85,-85,0.944,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_img();
	this.instance.setTransform(-85,-85,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_img();
	this.instance.setTransform(-85,-85,0.944,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
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
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.full_screen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_1_img();
	this.instance.setTransform(-40,-40,0.667,0.667);

	this.instance_1 = new lib.full_screen_2_img();
	this.instance_1.setTransform(-40,-40,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
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


(lib.done_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.done_img();
	this.instance.setTransform(-85,-85,0.944,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
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
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
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


(lib.wings8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.wings_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.6,-120.4,305.2,241);
p.frameBounds = [rect];


(lib.wings7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.wings_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.wings_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-154.4,-125.7,309,251.4);
p.frameBounds = [rect];


(lib.wings6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.wings_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136,-87.9,272,176);
p.frameBounds = [rect];


(lib.wings5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.wings_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186.6,-49.9,373.2,100);
p.frameBounds = [rect];


(lib.wings4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.wings_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-168.2,-83.5,337,167);
p.frameBounds = [rect];


(lib.wings3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.wings_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.6,-61.5,369.3,123.2);
p.frameBounds = [rect];


(lib.wings2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.wings_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.8,-76.7,306,153.4);
p.frameBounds = [rect];


(lib.wings1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.wings_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.8,-67.3,340,135);
p.frameBounds = [rect];


(lib.wings_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.wings1();

	this.body_2 = new lib.wings2();
	this.body_2.setTransform(-5,-26);

	this.body_3 = new lib.wings3();
	this.body_3.setTransform(-0.8,9.4);

	this.body_4 = new lib.wings4();
	this.body_4.setTransform(4,-19);

	this.body_5 = new lib.wings5();
	this.body_5.setTransform(-1.5,11.7);

	this.body_6 = new lib.wings6();
	this.body_6.setTransform(-9.5,-12.6);

	this.body_7 = new lib.wings7();
	this.body_7.setTransform(-5.5,39.1);

	this.body_8 = new lib.wings8();
	this.body_8.setTransform(-15,50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.8,-67.3,340,135);
p.frameBounds = [rect, new cjs.Rectangle(-157.8,-102.7,306,153.4), new cjs.Rectangle(-185.5,-52.1,369.3,123.2), new cjs.Rectangle(-164.2,-102.5,337,167), new cjs.Rectangle(-188.1,-38.2,373.2,100), new cjs.Rectangle(-145.5,-100.6,272,176), new cjs.Rectangle(-159.9,-86.6,309,251.4), new cjs.Rectangle(-167.6,-69.7,305.2,241), null];


(lib.wings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.top12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.top_decor12();
	this.instance.setTransform(0,0,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base12();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-26.3,60,52);
p.frameBounds = [rect];


(lib.top11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-42.2,114,85);
p.frameBounds = [rect];


(lib.top10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base10();
	this.body_mc.setTransform(0,10.6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-36.8,60,74);
p.frameBounds = [rect];


(lib.top9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base9();
	this.body_mc.setTransform(0.1,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-41.7,114,84);
p.frameBounds = [rect];


(lib.top8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.top_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.3,-33.4,67,67);
p.frameBounds = [rect];


(lib.top7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.4,-42.9,125,86);
p.frameBounds = [rect];


(lib.top6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-38.2,60,76);
p.frameBounds = [rect];


(lib.top5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hwherher();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-46,92,92);
p.frameBounds = [rect];


(lib.top4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.top_decor4();
	this.instance.setTransform(4.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base4();
	this.body_mc.setTransform(-1,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-30,76,60);
p.frameBounds = [rect];


(lib.top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.top_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base3();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-49,124,98);
p.frameBounds = [rect];


(lib.top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-41.2,118,83);
p.frameBounds = [rect];


(lib.top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.top_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.1,-45.5,122,91);
p.frameBounds = [rect];


(lib.title_navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.totalPages_mc = new lib.numbers_2_mc();
	this.totalPages_mc.setTransform(25,0,0.7,0.7);

	this.currentPage_mc = new lib.numbers_1_mc();
	this.currentPage_mc.setTransform(-25,0,0.7,0.7);

	this.instance = new lib.numbers_separator_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.currentPage_mc},{t:this.totalPages_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-21,92,42);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({alpha:0.5},10).to({alpha:1},10).wait(1));

	// animation
	this.instance_1 = new lib.title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({alpha:0.5},10).to({alpha:1},10).wait(31));

	// graph
	this.instance_2 = new lib.title_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// graph
	this.instance_3 = new lib.title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-180,580,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.tail_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tail_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.2,-42.2,176,85);
p.frameBounds = [rect];


(lib.tail_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tail_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-49.2,96,99);
p.frameBounds = [rect];


(lib.tail_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tail_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.9,-63.7,160,128);
p.frameBounds = [rect];


(lib.tail_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tail_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.7,-59.5,159,119);
p.frameBounds = [rect];


(lib.tail_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tail_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.1,-53.9,92,108);
p.frameBounds = [rect];


(lib.tail_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tail_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.2,-60.9,135,122);
p.frameBounds = [rect];


(lib.tail_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tail_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-50.8,164,102);
p.frameBounds = [rect];


(lib.tail_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tail_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.7,-42.1,163,84);
p.frameBounds = [rect];


(lib.tail_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.substrate_option_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.substrate_option_0_mc();

	this.instance_1 = new lib.substrate_option_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect, rect];


(lib.socks12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks_decor12();
	this.instance.setTransform(0,0,1,1,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base12();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-59.3,101,119);
p.frameBounds = [rect];


(lib.socks11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-50.4,95,101);
p.frameBounds = [rect];


(lib.socks10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-53.5,98,107.2);
p.frameBounds = [rect];


(lib.socks9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.socks_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base9();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-82.7,98,165.5);
p.frameBounds = [rect];


(lib.socks8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.3,-57.4,81,115);
p.frameBounds = [rect];


(lib.socks7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-49.7,95,99);
p.frameBounds = [rect];


(lib.socks6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-82.7,98,165.5);
p.frameBounds = [rect];


(lib.socks5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor5();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-60.4,98,121);
p.frameBounds = [rect];


(lib.socks4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.3,-47.5,93,95.1);
p.frameBounds = [rect];


(lib.socks3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.3,-39.8,83,80);
p.frameBounds = [rect];


(lib.socks2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-50.8,95,102);
p.frameBounds = [rect];


(lib.socks1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.socks_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-49.8,94,100);
p.frameBounds = [rect];


(lib.socks_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.shoes12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base12();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.2,-39.2,84,79);
p.frameBounds = [rect];


(lib.shoes11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-37.7,83,76);
p.frameBounds = [rect];


(lib.shoes10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.shoes_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.6,-39.2,89,79);
p.frameBounds = [rect];


(lib.shoes9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base9();
	this.body_mc.setTransform(0,4.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-51.9,93,104);
p.frameBounds = [rect];


(lib.shoes8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.shoes_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.6,-39.2,89,79);
p.frameBounds = [rect];


(lib.shoes7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.7,-55.2,99,111);
p.frameBounds = [rect];


(lib.shoes6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-51.4,95,103);
p.frameBounds = [rect];


(lib.shoes5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.shoes_decor5();
	this.instance.setTransform(-1.4,0,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base5();
	this.body_mc.setTransform(0.8,3.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.2,-43.1,88,86);
p.frameBounds = [rect];


(lib.shoes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.3,-33.3,81,67);
p.frameBounds = [rect];


(lib.shoes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.8,-37.5,80,75);
p.frameBounds = [rect];


(lib.shoes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-35.8,82,72);
p.frameBounds = [rect];


(lib.shoes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-37.8,83,76);
p.frameBounds = [rect];


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlgFhQiTiSAAjPQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADPiTCSQiTCTjOAAQjNAAiTiTg");

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
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjMEggBQEhABDODMQDMDOABEgQgBEhjMDOQjODMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mouth_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.mouth1();

	this.instance_1 = new lib.mouth2();
	this.instance_1.setTransform(2.6,-3.9);

	this.instance_2 = new lib.mouth3();
	this.instance_2.setTransform(4.1,-1.5);

	this.instance_3 = new lib.mouth4();
	this.instance_3.setTransform(4,-1.9);

	this.instance_4 = new lib.mouth5();
	this.instance_4.setTransform(1.9,-4.3);

	this.instance_5 = new lib.mouth6();
	this.instance_5.setTransform(5.2,-1.1);

	this.instance_6 = new lib.mouth7();
	this.instance_6.setTransform(6.1,-2.5);

	this.instance_7 = new lib.mouth8();
	this.instance_7.setTransform(6.5,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.3,-2.8,9.1,5.8);
p.frameBounds = [rect, new cjs.Rectangle(-9.6,-8.2,24.5,8.1), new cjs.Rectangle(-7.5,-10,23.5,16.8), new cjs.Rectangle(-8.6,-9.6,25,15.9), new cjs.Rectangle(-8.7,-7.3,21.1,5.3), new cjs.Rectangle(-5.6,-8.7,22.1,14.9), new cjs.Rectangle(-5.9,-8,24,10.6), new cjs.Rectangle(-5.3,-10.6,23.1,18.3)];


(lib.jewelry_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.icon_wings8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings8();
	this.instance.setTransform(1.1,-1,0.494,0.494,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_wings7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings7();
	this.instance.setTransform(1.1,-1,0.462,0.462,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_wings6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings6();
	this.instance.setTransform(1.1,-1,0.494,0.494,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_wings5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings5();
	this.instance.setTransform(0.1,-1,0.467,0.467,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_wings4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings4();
	this.instance.setTransform(1.1,-1,0.494,0.494,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_wings3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings3();
	this.instance.setTransform(1.1,-1,0.462,0.462,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_wings2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings2();
	this.instance.setTransform(1.1,-1,0.494,0.494,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_wings1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wings1();
	this.instance.setTransform(1.1,-1,0.494,0.494,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top12();
	this.instance.setTransform(2.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top11();
	this.instance.setTransform(1.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top10();
	this.instance.setTransform(1.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top9();
	this.instance.setTransform(1.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top8();
	this.instance.setTransform(-0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top7();
	this.instance.setTransform(3.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top6();
	this.instance.setTransform(1.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top5();
	this.instance.setTransform(2.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top4();
	this.instance.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top3();
	this.instance.setTransform(1.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top2();
	this.instance.setTransform(0.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top1();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_tail8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_8();
	this.instance.setTransform(0.4,3.1,0.92,0.92,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_tail7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_7();
	this.instance.setTransform(1.4,3.1,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_tail6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_6();
	this.instance.setTransform(-1.6,4.1,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_tail5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_5();
	this.instance.setTransform(1.4,5.1,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_tail4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_4();
	this.instance.setTransform(-0.6,2.1,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_tail3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_3();
	this.instance.setTransform(1.4,3.1,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_tail2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_2();
	this.instance.setTransform(0.4,6.1,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_tail1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tail_1();
	this.instance.setTransform(-5.6,13,1,1,45,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-92,185,192.4);
p.frameBounds = [rect];


(lib.icon_socks12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks12();
	this.instance.setTransform(1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_socks11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks11();
	this.instance.setTransform(1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_socks10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks10();
	this.instance.setTransform(2.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_socks9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks9();
	this.instance.setTransform(2.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_socks8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks8();
	this.instance.setTransform(1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_socks7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks7();
	this.instance.setTransform(1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_socks6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks6();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_socks5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks5();
	this.instance.setTransform(2.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_socks4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks4();
	this.instance.setTransform(2.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_socks3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks3();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_socks2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks2();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_socks1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.socks1();
	this.instance.setTransform(1.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes12();
	this.instance.setTransform(2.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes11();
	this.instance.setTransform(0.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes10();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes9();
	this.instance.setTransform(1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes8();
	this.instance.setTransform(2.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes7();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes6();
	this.instance.setTransform(1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes5();
	this.instance.setTransform(2.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes4();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes3();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes2();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes1();
	this.instance.setTransform(2.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth8();
	this.instance.setTransform(-20.1,69.8,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth7();
	this.instance.setTransform(-20.1,69.8,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth6();
	this.instance.setTransform(-20.1,69.8,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth5();
	this.instance.setTransform(-20.1,69.8,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth4();
	this.instance.setTransform(-20.1,69.8,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth3();
	this.instance.setTransform(-20.1,69.8,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth2();
	this.instance.setTransform(-20.1,69.8,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mouth1();
	this.instance.setTransform(-20.1,69.8,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.icon_horns_10_img();
	this.instance.setTransform(-67,-34,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.icon_horns_9_img();
	this.instance.setTransform(-78,-52,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.icon_horns_8_img();
	this.instance.setTransform(-58,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.icon_horns_7_img();
	this.instance.setTransform(-55,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.icon_horns_6_img();
	this.instance.setTransform(-58,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.horns7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.icon_horns_5_img();
	this.instance.setTransform(-41,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.icon_horns_4_img();
	this.instance.setTransform(-72,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.horns4();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.icon_horns_3_img();
	this.instance.setTransform(-73,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.icon_horns_2_img();
	this.instance.setTransform(-72,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_horns1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.icon_horns_1_img();
	this.instance.setTransform(-59,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_gloves4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.icon_gloves_4_img();
	this.instance.setTransform(-43,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_gloves3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.icon_gloves_3_img();
	this.instance.setTransform(-49,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_gloves2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.icon_gloves_2_img();
	this.instance.setTransform(-57,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_gloves1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.icon_gloves_1_img();
	this.instance.setTransform(-62,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.icon_bg_8_img();
	this.instance.setTransform(-87,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.icon_bg_7_img();
	this.instance.setTransform(-87,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.icon_bg_6_img();
	this.instance.setTransform(-87,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.icon_bg_5_img();
	this.instance.setTransform(-87,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.icon_bg_4_img();
	this.instance.setTransform(-87,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.icon_bg_3_img();
	this.instance.setTransform(-87,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.icon_bg_2_img();
	this.instance.setTransform(-87,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.icon_bg_1_img();
	this.instance.setTransform(-87,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat12();
	this.instance.setTransform(0.4,2.4,0.747,0.747,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat11();
	this.instance.setTransform(2.4,1.4,0.747,0.747,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat10();
	this.instance.setTransform(0.4,3.4,0.747,0.747,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat9();
	this.instance.setTransform(0.4,3.4,0.657,0.657,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat8();
	this.instance.setTransform(9.4,-1.6,0.747,0.747,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat7();
	this.instance.setTransform(2.4,-1.6,0.747,0.747,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat6();
	this.instance.setTransform(2.4,-1.6,0.747,0.747,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat5();
	this.instance.setTransform(2.4,-1.6,0.5,0.5,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat4();
	this.instance.setTransform(1.4,-2.6,0.747,0.747,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat3();
	this.instance.setTransform(0.4,-1.6,0.747,0.747,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat2();
	this.instance.setTransform(4.4,-1.6,0.747,0.747,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_aht1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.acc_hat1();
	this.instance.setTransform(8.3,-0.6,0.579,0.579,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand12();
	this.instance.setTransform(0.3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand11();
	this.instance.setTransform(2,3.4,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand10();
	this.instance.setTransform(1.4,3.4,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand9();
	this.instance.setTransform(-2.9,4.4,1,1,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand8();
	this.instance.setTransform(3.4,4,1,1,0,0,0,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand7();
	this.instance.setTransform(1.4,-0.6,1,1,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand6();
	this.instance.setTransform(-0.6,1.4,1,1,0,0,0,-0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand5();
	this.instance.setTransform(-2.7,-0.6,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand4();
	this.instance.setTransform(0.4,1.1,1,1,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand3();
	this.instance.setTransform(-0.6,1.4,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand2();
	this.instance.setTransform(-0.7,8.4,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_ah1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.accessory_hand1();
	this.instance.setTransform(0.4,1.4,1,1,0,0,0,0.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_af8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory8();
	this.instance.setTransform(-7.6,39.4,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_af7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory7();
	this.instance.setTransform(0.3,-8.6,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_af6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory6();
	this.instance.setTransform(-26.6,-3.6,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_af5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory5();
	this.instance.setTransform(36.7,25.8,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_af4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory4();
	this.instance.setTransform(-27.6,48.4,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_af3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory3();
	this.instance.setTransform(-4.6,3.4,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_af2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory2();
	this.instance.setTransform(-16.6,61.4,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_af1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory1();
	this.instance.setTransform(-4.6,3.4,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_head();
	this.instance_1.setTransform(1.4,1.4,0.922,0.922,0,0,0,7.1,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.horns_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.horns1();

	this.instance_1 = new lib.horns2();
	this.instance_1.setTransform(-3.7,11.4);

	this.instance_2 = new lib.horns3();
	this.instance_2.setTransform(2.2,-12.2);

	this.instance_3 = new lib.horns4();
	this.instance_3.setTransform(-25.7,0.4);

	this.instance_4 = new lib.horns5();
	this.instance_4.setTransform(0.4,12.4);

	this.instance_5 = new lib.horns6();
	this.instance_5.setTransform(-1.9,-19.2);

	this.instance_6 = new lib.horns7();
	this.instance_6.setTransform(-35,-49.7);

	this.instance_7 = new lib.horns8();
	this.instance_7.setTransform(-7,-28.7);

	this.instance_8 = new lib.horns9();
	this.instance_8.setTransform(-3.6,4.2);

	this.instance_9 = new lib.horns10();
	this.instance_9.setTransform(-4.5,2.5);

	this.instance_10 = new lib.horns11();
	this.instance_10.setTransform(0,-8.9);

	this.instance_11 = new lib.horns12();
	this.instance_11.setTransform(1.3,47.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.8,-20.1,196,40);
p.frameBounds = [rect, new cjs.Rectangle(-100.3,-26,193,75), new cjs.Rectangle(-101.4,-49,207,74), new cjs.Rectangle(-55.3,-52.6,59,106), new cjs.Rectangle(-100.3,-29.4,201,84), new cjs.Rectangle(-54.3,-38.7,105,39), new cjs.Rectangle(-99.9,-90.3,130,81), new cjs.Rectangle(-86.3,-70.9,159,84), new cjs.Rectangle(-89.8,-27.5,172,63), new cjs.Rectangle(-93.7,-36.7,179,78), new cjs.Rectangle(-110.5,-74.8,221,132), new cjs.Rectangle(-132.8,4.8,268,85), null];


(lib.horns_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_main_1_mc();
	this.instance.setTransform(400,310);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:290},39).to({y:310},40).wait(1));

	// animation
	this.instance_1 = new lib.hero_main_3_mc();
	this.instance_1.setTransform(620,290);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:300},39).to({y:290},40).wait(1));

	// animation
	this.instance_2 = new lib.hero_main_2_mc();
	this.instance_2.setTransform(180,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:290},39).to({y:280},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(22,50,768,495);
p.frameBounds = [rect, new cjs.Rectangle(22,50.3,768,494.3), new cjs.Rectangle(22,50.5,768,493.5), new cjs.Rectangle(22,50.8,768,492.7), new cjs.Rectangle(22,51.1,768,491.9), new cjs.Rectangle(22,51.3,768,491.2), new cjs.Rectangle(22,51.6,768,490.4), new cjs.Rectangle(22,51.8,768,489.6), new cjs.Rectangle(22,52.1,768,488.9), new cjs.Rectangle(22,52.3,768,488.1), new cjs.Rectangle(22,52.6,768,487.3), new cjs.Rectangle(22,52.8,768,486.6), new cjs.Rectangle(22,53.1,768,485.8), new cjs.Rectangle(22,53.4,768,485), new cjs.Rectangle(22,53.6,768,484.2), new cjs.Rectangle(22,53.9,768,483.4), new cjs.Rectangle(22,54.1,768,482.7), new cjs.Rectangle(22,54.4,768,481.9), new cjs.Rectangle(22,54.6,768,481.2), new cjs.Rectangle(22,54.9,768,480.4), new cjs.Rectangle(22,55.2,768,479.6), new cjs.Rectangle(22,55.4,768,478.9), new cjs.Rectangle(22,55.7,768,478.1), new cjs.Rectangle(22,55.9,768,477.3), new cjs.Rectangle(22,56.2,768,476.6), new cjs.Rectangle(22,56.4,768,475.8), new cjs.Rectangle(22,56.7,768,475), new cjs.Rectangle(22,56.9,768,474.3), new cjs.Rectangle(22,57.2,768,473.5), new cjs.Rectangle(22,57.5,768,473.5), new cjs.Rectangle(22,57.7,768,473.5), new cjs.Rectangle(22,58,768,473.5), new cjs.Rectangle(22,58.2,768,473.5), new cjs.Rectangle(22,58.1,768,473.9), new cjs.Rectangle(22,57.6,768,474.7), new cjs.Rectangle(22,57.1,768,475.4), new cjs.Rectangle(22,56.6,768,476.2), new cjs.Rectangle(22,56.1,768,477), new cjs.Rectangle(22,55.5,768,477.8), new cjs.Rectangle(22,55,768,478.5), new cjs.Rectangle(22,55.5,768,477.8), new cjs.Rectangle(22,56,768,477), new cjs.Rectangle(22,56.5,768,476.3), new cjs.Rectangle(22,57,768,475.5), new cjs.Rectangle(22,57.5,768,474.8), new cjs.Rectangle(22,58,768,474), new cjs.Rectangle(22,58.3,768,473.5), new cjs.Rectangle(22,58,768,473.5), new cjs.Rectangle(22,57.8,768,473.5), new cjs.Rectangle(22,57.5,768,473.5), new cjs.Rectangle(22,57.3,768,473.5), new cjs.Rectangle(22,57,768,474), new cjs.Rectangle(22,56.8,768,474.8), new cjs.Rectangle(22,56.5,768,475.5), new cjs.Rectangle(22,56.3,768,476.3), new cjs.Rectangle(22,56,768,477), new cjs.Rectangle(22,55.8,768,477.8), new cjs.Rectangle(22,55.5,768,478.5), new cjs.Rectangle(22,55.3,768,479.3), new cjs.Rectangle(22,55,768,480), new cjs.Rectangle(22,54.8,768,480.8), new cjs.Rectangle(22,54.5,768,481.5), new cjs.Rectangle(22,54.3,768,482.3), new cjs.Rectangle(22,54,768,483), new cjs.Rectangle(22,53.8,768,483.8), new cjs.Rectangle(22,53.5,768,484.5), new cjs.Rectangle(22,53.3,768,485.3), new cjs.Rectangle(22,53,768,486), new cjs.Rectangle(22,52.8,768,486.8), new cjs.Rectangle(22,52.5,768,487.5), new cjs.Rectangle(22,52.3,768,488.3), new cjs.Rectangle(22,52,768,489), new cjs.Rectangle(22,51.8,768,489.8), new cjs.Rectangle(22,51.5,768,490.5), new cjs.Rectangle(22,51.3,768,491.3), new cjs.Rectangle(22,51,768,492), new cjs.Rectangle(22,50.8,768,492.8), new cjs.Rectangle(22,50.5,768,493.5), new cjs.Rectangle(22,50.3,768,494.3), new cjs.Rectangle(22,50,768,495)];


(lib.hero_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.top1();
	this.body_1.setTransform(201.8,-52.2);

	this.body_2 = new lib.top2();
	this.body_2.setTransform(201,-56.7);

	this.body_3 = new lib.top3();
	this.body_3.setTransform(203,-58.6);

	this.body_4 = new lib.top4();
	this.body_4.setTransform(197.7,-66.7);

	this.body_5 = new lib.top5();
	this.body_5.setTransform(207.8,-67.6);

	this.body_6 = new lib.top6();
	this.body_6.setTransform(199.2,-59.8);

	this.body_7 = new lib.top7();
	this.body_7.setTransform(204,-54.7);

	this.body_8 = new lib.top8();
	this.body_8.setTransform(192.9,-64);

	this.body_9 = new lib.top9();
	this.body_9.setTransform(201.7,-59.9);

	this.body_10 = new lib.top10();
	this.body_10.setTransform(199.2,-58.4);

	this.body_11 = new lib.top11();
	this.body_11.setTransform(200.3,-60);

	this.body_12 = new lib.top12();
	this.body_12.setTransform(199.2,-47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(140.7,-97.7,122,91);
p.frameBounds = [rect, new cjs.Rectangle(141.9,-98,118,83), new cjs.Rectangle(141.3,-107.7,124,98), new cjs.Rectangle(163.7,-96.7,76,60), new cjs.Rectangle(161.8,-113.6,92,92), new cjs.Rectangle(169.2,-98.1,60,76), new cjs.Rectangle(141.6,-97.7,125,86), new cjs.Rectangle(159.5,-97.4,67,67), new cjs.Rectangle(144.7,-101.7,114,84), new cjs.Rectangle(169.2,-95.2,60,74), new cjs.Rectangle(143.4,-102.2,114,85), new cjs.Rectangle(169.2,-74.1,60,52), null];


(lib.hero_socks_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.socks1();
	this.body_1.setTransform(200.2,84.7);

	this.body_2 = new lib.socks2();
	this.body_2.setTransform(200,83.6);

	this.body_3 = new lib.socks3();
	this.body_3.setTransform(206,94.6);

	this.body_4 = new lib.socks4();
	this.body_4.setTransform(196,55.7);

	this.body_5 = new lib.socks5();
	this.body_5.setTransform(198.5,74);

	this.body_6 = new lib.socks6();
	this.body_6.setTransform(198.5,51.8);

	this.body_7 = new lib.socks7();
	this.body_7.setTransform(199.9,84.8);

	this.body_8 = new lib.socks8();
	this.body_8.setTransform(190,26.5);

	this.body_9 = new lib.socks9();
	this.body_9.setTransform(198.5,51.8);

	this.body_10 = new lib.socks10();
	this.body_10.setTransform(198.5,80.9);

	this.body_11 = new lib.socks11();
	this.body_11.setTransform(200,84.1);

	this.body_12 = new lib.socks12();
	this.body_12.setTransform(196.9,75.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(153.1,34.9,94,100);
p.frameBounds = [rect, new cjs.Rectangle(152.7,32.8,95,102), new cjs.Rectangle(164.6,54.8,83,80), new cjs.Rectangle(149.7,8.2,93,95.1), new cjs.Rectangle(149.7,13.6,98,121), new cjs.Rectangle(149.7,-30.9,98,165.5), new cjs.Rectangle(152.6,35.1,95,99), new cjs.Rectangle(149.7,-30.9,81,115), new cjs.Rectangle(149.7,-30.9,98,165.5), new cjs.Rectangle(149.8,27.4,98,107.2), new cjs.Rectangle(152.7,33.6,95,101), new cjs.Rectangle(146.5,15.8,101,119), null];


(lib.hero_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.shoes1();
	this.body_1.setTransform(208.5,103);

	this.body_2 = new lib.shoes2();
	this.body_2.setTransform(208.9,103.6);

	this.body_3 = new lib.shoes3();
	this.body_3.setTransform(210.1,103.2);

	this.body_4 = new lib.shoes4();
	this.body_4.setTransform(209.7,107.4);

	this.body_5 = new lib.shoes5();
	this.body_5.setTransform(207.6,97.7);

	this.body_6 = new lib.shoes6();
	this.body_6.setTransform(202.6,89.3);

	this.body_7 = new lib.shoes7();
	this.body_7.setTransform(200.3,85.5);

	this.body_8 = new lib.shoes8();
	this.body_8.setTransform(205.4,99.8);

	this.body_9 = new lib.shoes9();
	this.body_9.setTransform(203.7,88.8);

	this.body_10 = new lib.shoes10();
	this.body_10.setTransform(205.4,99.8);

	this.body_11 = new lib.shoes11();
	this.body_11.setTransform(208.6,103);

	this.body_12 = new lib.shoes12();
	this.body_12.setTransform(207.8,101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(167,65.2,83,76);
p.frameBounds = [rect, new cjs.Rectangle(167.8,67.7,82,72), new cjs.Rectangle(170.2,65.6,80,75), new cjs.Rectangle(169.4,74.1,81,67), new cjs.Rectangle(162.3,54.6,88,86), new cjs.Rectangle(155.2,37.9,95,103), new cjs.Rectangle(150.6,30.3,99,111), new cjs.Rectangle(160.8,60.5,89,79), new cjs.Rectangle(157.4,36.8,93,104), new cjs.Rectangle(160.8,60.5,89,79), new cjs.Rectangle(167.2,65.3,83,76), new cjs.Rectangle(165.6,62.3,84,79), null];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.hat_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.acc_hat1();
	this.instance.setTransform(235.6,3,1,1,0,0,0,0,-0.3);

	this.instance_1 = new lib.acc_hat2();
	this.instance_1.setTransform(233.1,-50.5,1,1,0,0,0,0.4,0);

	this.instance_2 = new lib.acc_hat3();
	this.instance_2.setTransform(224.7,-64.5,1,1,0,0,0,-0.1,0.3);

	this.instance_3 = new lib.acc_hat4();
	this.instance_3.setTransform(214.4,-74.5,1,1,0,0,0,-0.1,0.5);

	this.instance_4 = new lib.acc_hat5();
	this.instance_4.setTransform(248,-109.7);

	this.instance_5 = new lib.acc_hat6();
	this.instance_5.setTransform(235.9,-89.1);

	this.instance_6 = new lib.acc_hat7();
	this.instance_6.setTransform(227.3,-94.6);

	this.instance_7 = new lib.acc_hat8();
	this.instance_7.setTransform(239.6,-75.4);

	this.instance_8 = new lib.acc_hat9();
	this.instance_8.setTransform(242.5,-81.1,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.acc_hat10();
	this.instance_9.setTransform(220.6,-103.3);

	this.instance_10 = new lib.acc_hat11();
	this.instance_10.setTransform(251.5,-85.6);

	this.instance_11 = new lib.acc_hat12();
	this.instance_11.setTransform(224.5,-60.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(112.3,-123.2,247,253);
p.frameBounds = [rect, new cjs.Rectangle(136.5,-97.7,193,95), new cjs.Rectangle(123.9,-113.9,202,99), new cjs.Rectangle(121.1,-122.3,187,96), new cjs.Rectangle(98.2,-185.2,300,151), new cjs.Rectangle(159.4,-133.4,153,89), new cjs.Rectangle(131.8,-148.5,191,108), new cjs.Rectangle(130.9,-131,193,111), new cjs.Rectangle(127.7,-173,230,184), new cjs.Rectangle(149.9,-133.5,141,60), new cjs.Rectangle(174.5,-147.1,154,123), new cjs.Rectangle(134.5,-130.2,180,140), null];


(lib.hair15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hair_decor15();
	this.instance.setTransform(0,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base15();
	this.body_mc.setTransform(0,4.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.9,-96.7,264,202);
p.frameBounds = [rect];


(lib.hair14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base14();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.7,-197.8,325,396);
p.frameBounds = [rect];


(lib.hair13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor13();
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base13();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149,-61.8,298,124);
p.frameBounds = [rect];


(lib.hair12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base12();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.9,-185,316,370);
p.frameBounds = [rect];


(lib.hair11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-103.4,256,207);
p.frameBounds = [rect];


(lib.hair10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.1,-178.3,302,357);
p.frameBounds = [rect];


(lib.hair9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base9();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.6,-108.6,239,217);
p.frameBounds = [rect];


(lib.hair8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor8();
	this.instance.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170.4,-195.1,341,391);
p.frameBounds = [rect];


(lib.hair7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.9,-176.3,340,353);
p.frameBounds = [rect];


(lib.hair6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor6();
	this.instance.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191.2,-189,382,378);
p.frameBounds = [rect];


(lib.hair5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.2,-132.8,295,266);
p.frameBounds = [rect];


(lib.hair4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.9,-183.4,216,367);
p.frameBounds = [rect];


(lib.hair3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor3();
	this.instance.setTransform(-0.1,-0.5,1,1,0,0,0,-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base3();
	this.body_mc.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-193.9,284,387);
p.frameBounds = [rect];


(lib.hair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor2();
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.7,-163.2,237,327);
p.frameBounds = [rect];


(lib.hair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor1();
	this.instance.setTransform(-112.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base1();
	this.body_mc.setTransform(-112.5,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290.6,-195.5,356,391);
p.frameBounds = [rect];


(lib.hair_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor_16_mc();
	this.instance.setTransform(0.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base_16_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.2,-101.5,235,205);
p.frameBounds = [rect];


(lib.gloves_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.gloves_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.gloves_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.8,-23.9,148,48);
p.frameBounds = [rect];


(lib.gloves_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.gloves_decor3();
	this.instance.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.gloves_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-25.2,158,50.8);
p.frameBounds = [rect];


(lib.gloves_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.gloves_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.gloves_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-25.2,158,51);
p.frameBounds = [rect];


(lib.gloves_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.gloves_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.gloves_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-30.5,158,61.2);
p.frameBounds = [rect];


(lib.gloves_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.fringe16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor16();
	this.instance.setTransform(-0.4,-0.4,1,1,0,0,0,-0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base16();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.2,-99.9,234,199);
p.frameBounds = [rect];


(lib.fringe15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base15();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.7,-91.8,220,183);
p.frameBounds = [rect];


(lib.fringe14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor14();
	this.instance.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base14();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.3,-99.5,193,200);
p.frameBounds = [rect];


(lib.fringe13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base13();
	this.body_mc.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146.6,-86.7,293,173);
p.frameBounds = [rect];


(lib.fringe12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base12();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-103.5,181,207);
p.frameBounds = [rect];


(lib.fringe11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.7,-86.5,209,173);
p.frameBounds = [rect];


(lib.fringe10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor10();
	this.instance.setTransform(0,0.1,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.4,-108.5,191,218);
p.frameBounds = [rect];


(lib.fringe9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor9();
	this.instance.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base9();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.1,-61.1,203,122);
p.frameBounds = [rect];


(lib.fringe8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe_decor8();
	this.instance.setTransform(-0.1,0.4,1,1,0,0,0,-0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-133.6,310,268);
p.frameBounds = [rect];


(lib.fringe7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor7();
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.3,-76.8,241,154);
p.frameBounds = [rect];


(lib.fringe6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.7,-171.1,219,342);
p.frameBounds = [rect];


(lib.fringe5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor5();
	this.instance.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.7,-98.9,214,198);
p.frameBounds = [rect];


(lib.fringe4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor4();
	this.instance.setTransform(0,0.5,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.4,-110,197,221);
p.frameBounds = [rect];


(lib.fringe3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.6,-89.2,233,178);
p.frameBounds = [rect];


(lib.fringe2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.4,-88.2,205,177);
p.frameBounds = [rect];


(lib.fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.3,-64.8,165,130);
p.frameBounds = [rect];


(lib.fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.fringe1();

	this.body_2 = new lib.fringe2();
	this.body_2.setTransform(-6.7,16.5);

	this.body_3 = new lib.fringe3();
	this.body_3.setTransform(0.6,20.5);

	this.body_4 = new lib.fringe4();
	this.body_4.setTransform(-3.8,31.3,1,1,0,0,0,0,0.5);

	this.body_5 = new lib.fringe5();
	this.body_5.setTransform(-6.7,22.2,1,1,0,0,0,0.3,0);

	this.body_6 = new lib.fringe6();
	this.body_6.setTransform(-8.9,102.1);

	this.body_7 = new lib.fringe7();
	this.body_7.setTransform(-5.7,3.7,1,1,0,0,0,0,0.1);

	this.body_8 = new lib.fringe8();
	this.body_8.setTransform(-5.8,25.1,1,1,0,0,0,-0.1,0.4);

	this.body_9 = new lib.fringe9();
	this.body_9.setTransform(-2.9,-5.8,1,1,0,0,0,0.4,0);

	this.body_10 = new lib.fringe10();
	this.body_10.setTransform(-8.7,37.1,1,1,0,0,0,0,0.1);

	this.body_11 = new lib.fringe11();
	this.body_11.setTransform(-3.5,19.8);

	this.body_12 = new lib.fringe12();
	this.body_12.setTransform(-7.2,37.6);

	this.body_13 = new lib.fringe13();
	this.body_13.setTransform(7.5,14.6);

	this.body_14 = new lib.fringe14();
	this.body_14.setTransform(-7.5,20.3,1,1,0,0,0,-0.1,0.2);

	this.body_15 = new lib.fringe15();
	this.body_15.setTransform(-9.2,10.5);

	this.body_16 = new lib.fringe16();
	this.body_16.setTransform(-17.2,-1.2,1,1,0,0,0,-0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[{t:this.body_13}]},1).to({state:[{t:this.body_14}]},1).to({state:[{t:this.body_15}]},1).to({state:[{t:this.body_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.3,-64.9,165,130);
p.frameBounds = [rect, new cjs.Rectangle(-109.1,-71.7,205,177), new cjs.Rectangle(-116,-68.7,233,178), new cjs.Rectangle(-102.2,-79.2,197,221), new cjs.Rectangle(-113.7,-76.7,214,198), new cjs.Rectangle(-118.6,-69,219,342), new cjs.Rectangle(-126,-73.3,241,154), new cjs.Rectangle(-160.7,-109,310,268), new cjs.Rectangle(-104.4,-66.9,203,122), new cjs.Rectangle(-104.1,-71.6,191,218), new cjs.Rectangle(-108.3,-66.7,209,173), new cjs.Rectangle(-97.8,-65.9,181,207), new cjs.Rectangle(-139.1,-72.1,293,173), new cjs.Rectangle(-103.7,-79.4,193,200), new cjs.Rectangle(-119,-81.3,220,183), new cjs.Rectangle(-134.1,-100.7,234,199)];


(lib.eyes8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.eyes_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes_base8();
	this.body_mc.setTransform(-4.2,12.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.2,-28.5,123,57);
p.frameBounds = [rect];


(lib.eyes7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes_base7();
	this.body_mc.setTransform(-26.2,12.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.3,-31,113,62);
p.frameBounds = [rect];


(lib.eyes6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes_base6();
	this.body_mc.setTransform(22.1,17.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.6,-34,119,68);
p.frameBounds = [rect];


(lib.eyes5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.eyes_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes_base5();
	this.body_mc.setTransform(-4.7,13.6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.3,-36,143,72);
p.frameBounds = [rect];


(lib.eyes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.eyes_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes_base4();
	this.body_mc.setTransform(-2.5,17.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-33.7,121,68);
p.frameBounds = [rect];


(lib.eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes_base3();
	this.body_mc.setTransform(-3,23.6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-34.5,117,69);
p.frameBounds = [rect];


(lib.eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor2();
	this.instance.setTransform(-7.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes_base2();
	this.body_mc.setTransform(-9.7,13.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.7,-35.3,142,71);
p.frameBounds = [rect];


(lib.eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes_base1();
	this.body_mc.setTransform(0.6,18.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.1,-37.1,116,74);
p.frameBounds = [rect];


(lib.eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.eyes1();

	this.body_2 = new lib.eyes2();
	this.body_2.setTransform(8.4,3.5);

	this.body_3 = new lib.eyes3();
	this.body_3.setTransform(0.7,2);

	this.body_4 = new lib.eyes4();
	this.body_4.setTransform(2.1,2.1);

	this.body_5 = new lib.eyes5();
	this.body_5.setTransform(5.4,4);

	this.body_6 = new lib.eyes6();
	this.body_6.setTransform(6,2.4);

	this.body_7 = new lib.eyes7();
	this.body_7.setTransform(-4.1,4);

	this.body_8 = new lib.eyes8();
	this.body_8.setTransform(1.9,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.2,-37.1,116,74);
p.frameBounds = [rect, new cjs.Rectangle(-70.3,-31.9,142,71), new cjs.Rectangle(-57.6,-32.6,117,69), new cjs.Rectangle(-58.3,-31.7,121,68), new cjs.Rectangle(-65.9,-32.1,143,72), new cjs.Rectangle(-53.6,-31.7,119,68), new cjs.Rectangle(-60.4,-27,113,62), new cjs.Rectangle(-59.3,-21.5,123,57)];


(lib.dress12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor12();
	this.instance.setTransform(0,0.1,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base12();
	this.body_mc.setTransform(3.2,-10.2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.8,-83.7,194,168);
p.frameBounds = [rect];


(lib.dress11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base11();
	this.body_mc.setTransform(-1.1,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.1,-109.3,178,219);
p.frameBounds = [rect];


(lib.dress10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.2,-69.1,129,124);
p.frameBounds = [rect];


(lib.dress9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base9();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.9,-80.8,146,162);
p.frameBounds = [rect];


(lib.dress8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress_decor8();
	this.instance.setTransform(0,-10.7,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-107,145,193);
p.frameBounds = [rect];


(lib.dress7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.9,-107.6,104,215);
p.frameBounds = [rect];


(lib.dress6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.1,-98.9,135,199);
p.frameBounds = [rect];


(lib.dress5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.7,-80.7,151,161);
p.frameBounds = [rect];


(lib.dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-100.1,172,200);
p.frameBounds = [rect];


(lib.dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.3,-99.9,209,200);
p.frameBounds = [rect];


(lib.dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.1,-104.1,164,208);
p.frameBounds = [rect];


(lib.dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.2,-56.6,125,113);
p.frameBounds = [rect];


(lib.dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A40Z5MAAAgvoIDcAAIAAkJMAuNAAAMAAAAzxg");
	var mask_graphics_1 = new cjs.Graphics().p("A40YGMAAAgsCIDcAAIAAkJMAuNAAAMAAAAwLgAo4FyQAABXATB0QgCAoAAAtQAABaASA8QAMAqAfAxQAoBBAMAbQAZA1AfBtQA9AbApAfQAKBMA9hDQBChJA8AvQglhYgYgbQgpgugDgGQgNgXgDgtQgBgjAEgqQAJhQglhRIgrhNIAOhCQAWAMAoATIApARQAUAfAVAWQALAMA+AuQAOAKA6AmQA2AnAAAcQAAAJgEAfQgEAeAAANQAAAGAHAxIAGAvQAAASgGAOQgCAFgnAzQBGAYAWADQAWACAagIQAZgIAxg6QAxg5AggKQAhgJAVgWQgKhMAAgNQAAgagTgaQgIgKgXgVQgTgSgKgMQgSgWgNgaIgUgqIgUghIgyhkQgYgygagZQgighg9gWIgYAAQAHgSALgRQAKgPARgVQgCgDgCgCQgDgBgEAAQgjAAgSAfQgVAfgwAAQgoAAgVgfQgKgPgJgIQgJgIgIAAQgegBgKAbQgLAaggAAQguAAgTgPQgMgKgEgXIgDgNQgDgOgEgFQgMgPgiAAQgZAAgLASQgEAGgCAJQgIAggYAAQggAAgcglQgVghgNgPQgIBBAAASg");
	var mask_graphics_2 = new cjs.Graphics().p("A40Z5MAAAgvoIDcAAIAAkJMAuNAAAMAAAAzxg");
	var mask_graphics_5 = new cjs.Graphics().p("A40YGMAAAgsCIDcAAIAAkJMAuNAAAMAAAAwLgAlNJnQgBApgxAXQgbANhHARIgLCyQAyBKAYA8QAcBFAMB2QARgQA+gaQA9gbB0geIgfglQgXgcgMgZQgTgigBhsIgDhGQgCgqgIgaQgIgdgYggQgSgXAAgjIACgNQgOgMAAgUQAAgMAGgLIgEgDQACgEARhzIACgNIg5gFQgMBVgEB2gABLMqIgGAAQAQAZAAARQAAAHgFAfQgFAeAAAIQAAAZAHAYQAIAYAAAYQAAAcgBAFIgGAnQBDgYA0AGQA0AGBGgxQAFgvARgcIATghQhRAYgeAKQgmANgQgIQgTgJgBgNIgliPIgKAAQgPAAgrAIgAhkJvQgtAEgYAAQAvA4CKBeIgVidIgcAAQgRAAgyADg");
	var mask_graphics_6 = new cjs.Graphics().p("A40YGMAAAgsCIDcAAIAAkJMAuNAAAMAAAAwLgAjPQBQgHAJg6ADQg6ACgYAHQgZAIgKAPQgGAJgDALIgBAFQAGAZAEAaQAKBCAQBLQAJgqAlALQAlAKgOg8QgPg8AYACQAYACAngFQAngEA6guQgtgggDgEQgOgQgJgfQgEAEgHAKgAglGVIgMD6IABAHQAAAbgTAWIAAABQALAGBCA2QAjAbAnA9QAshHA1AIIALgmIAAhYQBJAMg4hmQgzhRgvgiQgwgjgxgIIAKgSIAagnIAAAAQgmANgxAagABMCpIABCsQAIgLAHgOQAQgfAFgHIgEhyQgPABgSAEg");
	var mask_graphics_7 = new cjs.Graphics().p("A40YGMAAAgsCIDcAAIAAkJMAuNAAAMAAAAwLgAkXPVQgTAbAsAFQAsAEAJAEQAJAEgDgXQgDgXgDg+QgChRgFggQgEgYgdhLQgbhHAAgCQAAgPAFgeIADgBQA1AeAqAQQAQASASAPIBLBDQAUAUBHApQAvAbAAAmQAAASgDAQQgEARAAAcIgCAtQAagFASgGQALgDAEgVIAAADQAiggATgPIAAgEIABgCIAOgPQAjgoAWgCQAXgBAJgdQAJgeANgBQgtg1gXgzQgihVgRghQgRgkgXgWQgXgWgigXQghgXgSAAQgSgBgKgEQAIgOAMgVIgEgBIAAAAQgRgEgPgOIgMgKQgdgegUAAQghAAg4AdIgBABIgEgEIACAEQg1AbgGAAIgIgBQgSgEgsgXQghgRgZgHQgSgFgOAAQgcAAgdAKIgGACQgZAIgNAAQgmAAgqg8IgGgIIgIAvQgGAkAAAiQAAA4AJAyQALA5ACAwQAEBmAUBdQAbAYALAnQAKAmATAdQAUAeAagUQAagUAoATQAoAUAYgGIAHgCQANAAgPAXg");
	var mask_graphics_8 = new cjs.Graphics().p("AGrYGQgPhJgFhmQgIiTgikLQhAgFgSgXQgGgHgCgIIhYi0QgWADguAJQg9ANgNAAIgjAAQgNgEAAgUIgBgBIhRjjIgrgMQhegagvgyQhAhDAAh7IAAhFIAAgBIgXAFQgUgBgRgJQglDtAdDSIAAACIAAAHQgDARgYAWQgLAJg2AgQgtAbgVAcQgdArAHA0QACAQABA8IgCgBIBSEiIBgFVIyiAAMAAAgsCIDcAAIAAkJMAuNAAAMAAAAwLg");
	var mask_graphics_9 = new cjs.Graphics().p("A40Z5MAAAgvoIDcAAIAAkJMAuNAAAMAAAAzxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:182,y:25}).wait(1).to({graphics:mask_graphics_1,x:182,y:13.5}).wait(1).to({graphics:mask_graphics_2,x:182,y:25}).wait(3).to({graphics:mask_graphics_5,x:182,y:13.5}).wait(1).to({graphics:mask_graphics_6,x:182,y:13.5}).wait(1).to({graphics:mask_graphics_7,x:182,y:13.5}).wait(1).to({graphics:mask_graphics_8,x:182,y:13.5}).wait(1).to({graphics:mask_graphics_9,x:182,y:25}).wait(3).to({graphics:null,x:0,y:0}).wait(1));

	// body
	this.body_1 = new lib.dress1();
	this.body_1.setTransform(178,-11.3);

	this.body_2 = new lib.dress2();
	this.body_2.setTransform(170.9,24.6);

	this.body_3 = new lib.dress3();
	this.body_3.setTransform(169.1,50.9);

	this.body_4 = new lib.dress4();
	this.body_4.setTransform(175.3,44.7);

	this.body_5 = new lib.dress5();
	this.body_5.setTransform(166.5,7.7);

	this.body_6 = new lib.dress6();
	this.body_6.setTransform(163,41.4);

	this.body_7 = new lib.dress7();
	this.body_7.setTransform(166.7,32.1);

	this.body_8 = new lib.dress8();
	this.body_8.setTransform(170.3,33.9);

	this.body_9 = new lib.dress9();
	this.body_9.setTransform(174.2,28.9);

	this.body_10 = new lib.dress10();
	this.body_10.setTransform(172,3.7);

	this.body_11 = new lib.dress11();
	this.body_11.setTransform(174.3,47.6);

	this.body_12 = new lib.dress12();
	this.body_12.setTransform(169.2,13.4,1,1,0,0,0,0,0.1);

	this.body_1.mask = this.body_2.mask = this.body_3.mask = this.body_4.mask = this.body_5.mask = this.body_6.mask = this.body_7.mask = this.body_8.mask = this.body_9.mask = this.body_10.mask = this.body_11.mask = this.body_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(115.8,-67.9,125,113);
p.frameBounds = [rect, new cjs.Rectangle(88.8,-79.5,164,208), new cjs.Rectangle(64.8,-49,209,200), new cjs.Rectangle(89.1,-55.5,172,200), new cjs.Rectangle(90.8,-73,151,161), new cjs.Rectangle(95.9,-57.5,135,199), new cjs.Rectangle(114.8,-75.5,104,215), new cjs.Rectangle(98,-73.1,145,193), new cjs.Rectangle(101.3,-52,146,162), new cjs.Rectangle(107.8,-65.4,129,124), new cjs.Rectangle(85.2,-61.8,178,219), new cjs.Rectangle(72.4,-70.5,194,168), null];


(lib.check_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_check_subcategory_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect, rect];


(lib.check_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_check_category_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect, rect];


(lib.category_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_5_img();
	this.instance.setTransform(-27,-41,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_4_img();
	this.instance.setTransform(-27,-37,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_3_img();
	this.instance.setTransform(-28,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_2_img();
	this.instance.setTransform(-19,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_1_img();
	this.instance.setTransform(-11,-43,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.bottom12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bottom_decor12();
	this.instance.setTransform(0.4,0.2,1,1,0,0,0,0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base12();
	this.body_mc.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-20.7,101,42);
p.frameBounds = [rect];


(lib.bottom11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base11();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-28.1,98,56);
p.frameBounds = [rect];


(lib.bottom10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base10();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.6,-30,87.2,60);
p.frameBounds = [rect];


(lib.bottom9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bottom_decor9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base9();
	this.body_mc.setTransform(2.9,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.2,-29.6,120,59);
p.frameBounds = [rect];


(lib.bottom8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base8();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.8,-30.5,84,61);
p.frameBounds = [rect];


(lib.bottom7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base7();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.8,-27.4,86,55);
p.frameBounds = [rect];


(lib.bottom6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor6();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base6();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-27.7,83,55.4);
p.frameBounds = [rect];


(lib.bottom5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base5();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.6,-28.6,79.3,57.2);
p.frameBounds = [rect];


(lib.bottom4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bottom_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base4();
	this.body_mc.setTransform(0,4.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-50.9,137,102);
p.frameBounds = [rect];


(lib.bottom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.2,-33.3,95,67);
p.frameBounds = [rect];


(lib.bottom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base2();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.7,-27.7,108,56);
p.frameBounds = [rect];


(lib.bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bottom_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.1,-37.4,118,75);
p.frameBounds = [rect];


(lib.body_1_hero_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.body_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.3,-207.3,181,415);
p.frameBounds = [rect];


(lib.accessory_hand_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.accessory_hand1();

	this.instance_1 = new lib.accessory_hand2();
	this.instance_1.setTransform(10.3,39);

	this.instance_2 = new lib.accessory_hand3();
	this.instance_2.setTransform(-6.9,-7.3);

	this.instance_3 = new lib.accessory_hand4();
	this.instance_3.setTransform(-9.7,43.6);

	this.instance_4 = new lib.accessory_hand5();
	this.instance_4.setTransform(1.9,38.2);

	this.instance_5 = new lib.accessory_hand6();
	this.instance_5.setTransform(-4.8,-1.5);

	this.instance_6 = new lib.accessory_hand7();
	this.instance_6.setTransform(6.1,-21.7);

	this.instance_7 = new lib.accessory_hand8();
	this.instance_7.setTransform(6.1,-33.6);

	this.instance_8 = new lib.accessory_hand9();
	this.instance_8.setTransform(2.7,0.5);

	this.instance_9 = new lib.accessory_hand10();
	this.instance_9.setTransform(17,-26);

	this.instance_10 = new lib.accessory_hand11();
	this.instance_10.setTransform(9.8,38.6);

	this.instance_11 = new lib.accessory_hand12();
	this.instance_11.setTransform(-3,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-21.3,65,43);
p.frameBounds = [rect, new cjs.Rectangle(-74.7,-10.1,170,98), new cjs.Rectangle(-52.6,-58.9,91,103), new cjs.Rectangle(-49,-4.3,79,96), new cjs.Rectangle(-37.9,-7.2,80,91), new cjs.Rectangle(-44.5,-39.7,79,77), new cjs.Rectangle(-23.1,-53.9,58,64), new cjs.Rectangle(-20.6,-97.9,53,129), new cjs.Rectangle(-19.5,-40.6,45,82), new cjs.Rectangle(-16.9,-78.9,68,106), new cjs.Rectangle(-33.9,-7.5,87,92), new cjs.Rectangle(-57.4,-7.3,109,75), null];


(lib.accessory_face_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.face_accessory1();
	this.instance.setTransform(179.3,-4.7);

	this.instance_1 = new lib.face_accessory2();
	this.instance_1.setTransform(159.8,54.7);

	this.instance_2 = new lib.face_accessory3();
	this.instance_2.setTransform(179.8,-4.6);

	this.instance_3 = new lib.face_accessory4();
	this.instance_3.setTransform(148.2,37);

	this.instance_4 = new lib.face_accessory5();
	this.instance_4.setTransform(211.8,17.8);

	this.instance_5 = new lib.face_accessory6();
	this.instance_5.setTransform(148,-32);

	this.instance_6 = new lib.face_accessory7();
	this.instance_6.setTransform(178.8,-24.5);

	this.instance_7 = new lib.face_accessory8();
	this.instance_7.setTransform(170.5,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(100.3,-56.2,158,103);
p.frameBounds = [rect, new cjs.Rectangle(112.9,45.1,94,19), new cjs.Rectangle(102.8,-57.7,154,106), new cjs.Rectangle(137.3,31.3,22,11), new cjs.Rectangle(165.8,-31.7,92,99), new cjs.Rectangle(131.8,-37.7,32,12), new cjs.Rectangle(96.8,-45.2,164,42), new cjs.Rectangle(108.5,20.2,124,30), null];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
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


(lib.reset_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.reset_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-35,-35,70,70)];


(lib.random_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.random_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_mc();
	this.instance.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.nav_navigation_mc();
	this.prev_mc.setTransform(-45,-120,1,1,0,0,180);

	this.next_mc = new lib.nav_navigation_mc();
	this.next_mc.setTransform(45,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// text
	this.title_mc = new lib.title_navigation_mc();

	this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(1));

	// bg
	this.instance = new lib.bg_navigation_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-165,180,190);
p.frameBounds = [rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect];


(lib.done_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.done_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-85.2,-85.2,170.6,170.6), new cjs.Rectangle(-85.5,-85.5,171.1,171.1), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-86,-86,172.1,172.1), new cjs.Rectangle(-86.3,-86.3,172.6,172.6), new cjs.Rectangle(-86.5,-86.5,173.1,173.1), new cjs.Rectangle(-86.8,-86.8,173.7,173.7), new cjs.Rectangle(-87.1,-87.1,174.2,174.2), new cjs.Rectangle(-87.3,-87.3,174.8,174.8), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-87.9,-87.9,175.8,175.8), new cjs.Rectangle(-88.1,-88.1,176.4,176.4), new cjs.Rectangle(-88.4,-88.4,176.9,176.9), new cjs.Rectangle(-88.6,-88.6,177.4,177.4), new cjs.Rectangle(-88.9,-88.9,177.9,177.9), new cjs.Rectangle(-89.2,-89.2,178.5,178.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-89.7,-89.7,179.5,179.5), new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-89.8,-89.8,179.7,179.7), new cjs.Rectangle(-89.6,-89.6,179.4,179.4), new cjs.Rectangle(-89.5,-89.5,179.1,179.1), new cjs.Rectangle(-89.3,-89.3,178.7,178.7), new cjs.Rectangle(-89.1,-89.1,178.4,178.4), new cjs.Rectangle(-89,-89,178.1,178.1), new cjs.Rectangle(-88.8,-88.8,177.7,177.7), new cjs.Rectangle(-88.6,-88.6,177.4,177.4), new cjs.Rectangle(-88.5,-88.5,177,177), new cjs.Rectangle(-88.3,-88.3,176.7,176.7), new cjs.Rectangle(-88.1,-88.1,176.4,176.4), new cjs.Rectangle(-88,-88,176,176), new cjs.Rectangle(-87.8,-87.8,175.7,175.7), new cjs.Rectangle(-87.6,-87.6,175.4,175.4), new cjs.Rectangle(-87.5,-87.5,175,175), new cjs.Rectangle(-87.3,-87.3,174.7,174.7), new cjs.Rectangle(-87.1,-87.1,174.4,174.4), new cjs.Rectangle(-87,-87,174,174), new cjs.Rectangle(-86.8,-86.8,173.6,173.6), new cjs.Rectangle(-86.6,-86.6,173.4,173.4), new cjs.Rectangle(-86.5,-86.5,173,173), new cjs.Rectangle(-86.3,-86.3,172.6,172.6), new cjs.Rectangle(-86.1,-86.1,172.4,172.4), new cjs.Rectangle(-86,-86,172,172), new cjs.Rectangle(-85.8,-85.8,171.6,171.6), new cjs.Rectangle(-85.6,-85.6,171.4,171.4), new cjs.Rectangle(-85.4,-85.4,171,171), new cjs.Rectangle(-85.3,-85.3,170.6,170.6), new cjs.Rectangle(-85.1,-85.1,170.4,170.4), new cjs.Rectangle(-85,-85,170,170)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.7);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.7), new cjs.Rectangle(-140,-60,280,120)];


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


(lib.tail_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.tail_1();

	this.body_2 = new lib.tail_2();
	this.body_2.setTransform(2,2);

	this.body_3 = new lib.tail_3();
	this.body_3.setTransform(-7.2,-25.8);

	this.body_4 = new lib.tail_4();
	this.body_4.setTransform(-28.6,-15.6);

	this.body_5 = new lib.tail_5();
	this.body_5.setTransform(-12.8,21.7);

	this.body_6 = new lib.tail_6();
	this.body_6.setTransform(-9.9,25);

	this.body_7 = new lib.tail_7();
	this.body_7.setTransform(-24.2,13.2);

	this.body_8 = new lib.tail_8();
	this.body_8.setTransform(-2.9,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.7,-42.1,163,84);
p.frameBounds = [rect, new cjs.Rectangle(-80,-48.8,164,102), new cjs.Rectangle(-74.5,-86.7,135,122), new cjs.Rectangle(-74.7,-69.5,92,108), new cjs.Rectangle(-92.5,-37.8,159,119), new cjs.Rectangle(-89.8,-38.8,160,128), new cjs.Rectangle(-72,-36.1,96,99), new cjs.Rectangle(-91.2,-44,176,85), null];


(lib.subcategory_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_6_3_img();
	this.instance.setTransform(-33.6,-7,0.917,0.917,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_5_4_img();
	this.instance.setTransform(-44,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_5_3_img();
	this.instance.setTransform(20.2,-24.4,1,1,0,-15,165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_4_4_img();
	this.instance.setTransform(-38,-29,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_4_3_img();
	this.instance.setTransform(23.5,-15.7,1,1,0,30,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_4_1_img();
	this.instance.setTransform(-33,-25,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_3_4_img();
	this.instance.setTransform(-43,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_3_3_img();
	this.instance.setTransform(-35,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_3_1_img();
	this.instance.setTransform(-36,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_2_4_img();
	this.instance.setTransform(-39,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_2_3_img();
	this.instance.setTransform(-38,-27,0.896,0.896);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_2_2_img();
	this.instance.setTransform(-32,-26,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_2_1_img();
	this.instance.setTransform(-37,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_1_5_img();
	this.instance.setTransform(-37,-27,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_1_4_img();
	this.instance.setTransform(-37,-24,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_1_3_img();
	this.instance.setTransform(-33,-25,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_1_2_img();
	this.instance.setTransform(-34,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_1_1_img();
	this.instance.setTransform(-19,-30,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.857,0.857,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-217.7,394.2,435.5);
p.frameBounds = [rect];


(lib.panel_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// options
	this.bg_4 = new lib.icon_back4();
	this.bg_4.setTransform(96,96);

	this.bg_3 = new lib.icon_back3();
	this.bg_3.setTransform(-96,96);

	this.bg_2 = new lib.icon_back2();
	this.bg_2.setTransform(96,-96);

	this.bg_1 = new lib.icon_back1();
	this.bg_1.setTransform(-96,-96);

	this.bg_8 = new lib.icon_back8();
	this.bg_8.setTransform(96,96);

	this.bg_7 = new lib.icon_back7();
	this.bg_7.setTransform(-96,96);

	this.bg_6 = new lib.icon_back6();
	this.bg_6.setTransform(96,-96);

	this.bg_5 = new lib.icon_back5();
	this.bg_5.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_1},{t:this.bg_2},{t:this.bg_3},{t:this.bg_4}]}).to({state:[{t:this.bg_5},{t:this.bg_6},{t:this.bg_7},{t:this.bg_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect];


(lib.panel_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.jewelry_0 = new lib.jewelry_0_mc();
	this.jewelry_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.jewelry_0).wait(2));

	// options
	this.jewelry_4 = new lib.icon_af4();
	this.jewelry_4.setTransform(96,96);

	this.jewelry_3 = new lib.icon_af3();
	this.jewelry_3.setTransform(-96,96);

	this.jewelry_2 = new lib.icon_af2();
	this.jewelry_2.setTransform(96,-96);

	this.jewelry_1 = new lib.icon_af1();
	this.jewelry_1.setTransform(-96,-96);

	this.jewelry_8 = new lib.icon_af8();
	this.jewelry_8.setTransform(96,96);

	this.jewelry_7 = new lib.icon_af7();
	this.jewelry_7.setTransform(-96,96);

	this.jewelry_6 = new lib.icon_af6();
	this.jewelry_6.setTransform(96,-96);

	this.jewelry_5 = new lib.icon_af5();
	this.jewelry_5.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jewelry_1},{t:this.jewelry_2},{t:this.jewelry_3},{t:this.jewelry_4}]}).to({state:[{t:this.jewelry_5},{t:this.jewelry_6},{t:this.jewelry_7},{t:this.jewelry_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect];


(lib.panel_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(3));

	// options
	this.accessory_4 = new lib.icon_ah4();
	this.accessory_4.setTransform(96,96);

	this.accessory_3 = new lib.icon_ah3();
	this.accessory_3.setTransform(-96,96);

	this.accessory_2 = new lib.icon_ah2();
	this.accessory_2.setTransform(96,-96);

	this.accessory_1 = new lib.icon_ah1();
	this.accessory_1.setTransform(-96,-96);

	this.accessory_8 = new lib.icon_ah8();
	this.accessory_8.setTransform(96,96);

	this.accessory_7 = new lib.icon_ah7();
	this.accessory_7.setTransform(-96,96);

	this.accessory_6 = new lib.icon_ah6();
	this.accessory_6.setTransform(96,-96);

	this.accessory_5 = new lib.icon_ah5();
	this.accessory_5.setTransform(-96,-96);

	this.accessory_12 = new lib.icon_ah12();
	this.accessory_12.setTransform(96,96);

	this.accessory_11 = new lib.icon_ah11();
	this.accessory_11.setTransform(-96,96);

	this.accessory_10 = new lib.icon_ah10();
	this.accessory_10.setTransform(96,-96);

	this.accessory_9 = new lib.icon_ah9();
	this.accessory_9.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4}]}).to({state:[{t:this.accessory_5},{t:this.accessory_6},{t:this.accessory_7},{t:this.accessory_8}]},1).to({state:[{t:this.accessory_9},{t:this.accessory_10},{t:this.accessory_11},{t:this.accessory_12}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.headdress_0).wait(3));

	// options
	this.headdress_4 = new lib.icon_aht4();
	this.headdress_4.setTransform(96,96);

	this.headdress_3 = new lib.icon_aht3();
	this.headdress_3.setTransform(-96,96);

	this.headdress_2 = new lib.icon_aht2();
	this.headdress_2.setTransform(96,-96);

	this.headdress_1 = new lib.icon_aht1();
	this.headdress_1.setTransform(-96,-96);

	this.headdress_8 = new lib.icon_aht8();
	this.headdress_8.setTransform(96,96);

	this.headdress_7 = new lib.icon_aht7();
	this.headdress_7.setTransform(-96,96);

	this.headdress_6 = new lib.icon_aht6();
	this.headdress_6.setTransform(96,-96);

	this.headdress_5 = new lib.icon_aht5();
	this.headdress_5.setTransform(-96,-96);

	this.headdress_12 = new lib.icon_aht12();
	this.headdress_12.setTransform(96,96);

	this.headdress_11 = new lib.icon_aht11();
	this.headdress_11.setTransform(-96,96);

	this.headdress_10 = new lib.icon_aht10();
	this.headdress_10.setTransform(96,-96);

	this.headdress_9 = new lib.icon_aht9();
	this.headdress_9.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4}]}).to({state:[{t:this.headdress_5},{t:this.headdress_6},{t:this.headdress_7},{t:this.headdress_8}]},1).to({state:[{t:this.headdress_9},{t:this.headdress_10},{t:this.headdress_11},{t:this.headdress_12}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.tail_0 = new lib.tail_0_mc();
	this.tail_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.tail_0).wait(3));

	// options
	this.tail_4 = new lib.icon_tail4();
	this.tail_4.setTransform(96,96);

	this.tail_3 = new lib.icon_tail3();
	this.tail_3.setTransform(-96,96);

	this.tail_2 = new lib.icon_tail2();
	this.tail_2.setTransform(96,-96);

	this.tail_1 = new lib.icon_tail1();
	this.tail_1.setTransform(-96,-96);

	this.tail_8 = new lib.icon_tail8();
	this.tail_8.setTransform(96,96);

	this.tail_7 = new lib.icon_tail7();
	this.tail_7.setTransform(-96,96);

	this.tail_6 = new lib.icon_tail6();
	this.tail_6.setTransform(96,-96);

	this.tail_5 = new lib.icon_tail5();
	this.tail_5.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tail_1},{t:this.tail_2},{t:this.tail_3},{t:this.tail_4}]}).to({state:[{t:this.tail_5},{t:this.tail_6},{t:this.tail_7},{t:this.tail_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_tail = new lib.color_picker_2_mc();
	this.color_tail.setTransform(-180,-180);
	this.color_tail._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_tail).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.wings_0).wait(3));

	// options
	this.wings_4 = new lib.icon_wings4();
	this.wings_4.setTransform(96,96);

	this.wings_3 = new lib.icon_wings3();
	this.wings_3.setTransform(-96,96);

	this.wings_2 = new lib.icon_wings2();
	this.wings_2.setTransform(96,-96);

	this.wings_1 = new lib.icon_wings1();
	this.wings_1.setTransform(-96,-96);

	this.wings_8 = new lib.icon_wings8();
	this.wings_8.setTransform(96,96);

	this.wings_7 = new lib.icon_wings7();
	this.wings_7.setTransform(-96,96);

	this.wings_6 = new lib.icon_wings6();
	this.wings_6.setTransform(96,-96);

	this.wings_5 = new lib.icon_wings5();
	this.wings_5.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wings_1},{t:this.wings_2},{t:this.wings_3},{t:this.wings_4}]}).to({state:[{t:this.wings_5},{t:this.wings_6},{t:this.wings_7},{t:this.wings_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_wings = new lib.color_picker_2_mc();
	this.color_wings.setTransform(-180,-180);
	this.color_wings._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_wings).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.gloves_0 = new lib.gloves_0_mc();
	this.gloves_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.gloves_0).wait(2));

	// options
	this.gloves_4 = new lib.icon_gloves4();
	this.gloves_4.setTransform(96,96);

	this.gloves_3 = new lib.icon_gloves3();
	this.gloves_3.setTransform(-96,96);

	this.gloves_2 = new lib.icon_gloves2();
	this.gloves_2.setTransform(96,-96);

	this.gloves_1 = new lib.icon_gloves1();
	this.gloves_1.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gloves_1},{t:this.gloves_2},{t:this.gloves_3},{t:this.gloves_4}]}).to({state:[]},1).wait(1));

	// palette
	this.color_gloves = new lib.color_picker_2_mc();
	this.color_gloves.setTransform(-180,-180);
	this.color_gloves._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_gloves).wait(1).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect];


(lib.panel_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.shoes_0).wait(4));

	// options
	this.shoes_4 = new lib.icon_shoes4();
	this.shoes_4.setTransform(96,96);

	this.shoes_3 = new lib.icon_shoes3();
	this.shoes_3.setTransform(-96,96);

	this.shoes_2 = new lib.icon_shoes2();
	this.shoes_2.setTransform(96,-96);

	this.shoes_1 = new lib.icon_shoes1();
	this.shoes_1.setTransform(-96,-96);

	this.shoes_8 = new lib.icon_shoes8();
	this.shoes_8.setTransform(96,96);

	this.shoes_7 = new lib.icon_shoes7();
	this.shoes_7.setTransform(-96,96);

	this.shoes_6 = new lib.icon_shoes6();
	this.shoes_6.setTransform(96,-96);

	this.shoes_5 = new lib.icon_shoes5();
	this.shoes_5.setTransform(-96,-96);

	this.shoes_12 = new lib.icon_shoes12();
	this.shoes_12.setTransform(96,96);

	this.shoes_11 = new lib.icon_shoes11();
	this.shoes_11.setTransform(-96,96);

	this.shoes_10 = new lib.icon_shoes10();
	this.shoes_10.setTransform(96,-96);

	this.shoes_9 = new lib.icon_shoes9();
	this.shoes_9.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4}]}).to({state:[{t:this.shoes_5},{t:this.shoes_6},{t:this.shoes_7},{t:this.shoes_8}]},1).to({state:[{t:this.shoes_9},{t:this.shoes_10},{t:this.shoes_11},{t:this.shoes_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_shoes = new lib.color_picker_2_mc();
	this.color_shoes.setTransform(-180,-180);
	this.color_shoes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_shoes).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// no
	this.socks_0 = new lib.socks_0_mc();
	this.socks_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.socks_0).wait(4));

	// options
	this.socks_4 = new lib.icon_socks4();
	this.socks_4.setTransform(96,96);

	this.socks_3 = new lib.icon_socks3();
	this.socks_3.setTransform(-96,96);

	this.socks_2 = new lib.icon_socks2();
	this.socks_2.setTransform(96,-96);

	this.socks_1 = new lib.icon_socks1();
	this.socks_1.setTransform(-96,-96);

	this.socks_8 = new lib.icon_socks8();
	this.socks_8.setTransform(96,96);

	this.socks_7 = new lib.icon_socks7();
	this.socks_7.setTransform(-96,96);

	this.socks_6 = new lib.icon_socks6();
	this.socks_6.setTransform(96,-96);

	this.socks_5 = new lib.icon_socks5();
	this.socks_5.setTransform(-96,-96);

	this.socks_12 = new lib.icon_socks12();
	this.socks_12.setTransform(96,96);

	this.socks_11 = new lib.icon_socks11();
	this.socks_11.setTransform(-96,96);

	this.socks_10 = new lib.icon_socks10();
	this.socks_10.setTransform(96,-96);

	this.socks_9 = new lib.icon_socks9();
	this.socks_9.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.socks_1},{t:this.socks_2},{t:this.socks_3},{t:this.socks_4}]}).to({state:[{t:this.socks_5},{t:this.socks_6},{t:this.socks_7},{t:this.socks_8}]},1).to({state:[{t:this.socks_9},{t:this.socks_10},{t:this.socks_11},{t:this.socks_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_socks = new lib.color_picker_2_mc();
	this.color_socks.setTransform(-180,-180);
	this.color_socks._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_socks).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.top_4 = new lib.icon_top4();
	this.top_4.setTransform(96,96);

	this.top_3 = new lib.icon_top3();
	this.top_3.setTransform(-96,96);

	this.top_2 = new lib.icon_top2();
	this.top_2.setTransform(96,-96);

	this.top_1 = new lib.icon_top1();
	this.top_1.setTransform(-96,-96);

	this.top_8 = new lib.icon_top8();
	this.top_8.setTransform(96,96);

	this.top_7 = new lib.icon_top7();
	this.top_7.setTransform(-96,96);

	this.top_6 = new lib.icon_top6();
	this.top_6.setTransform(96,-96);

	this.top_5 = new lib.icon_top5();
	this.top_5.setTransform(-96,-96);

	this.top_12 = new lib.icon_top12();
	this.top_12.setTransform(96,96);

	this.top_11 = new lib.icon_top11();
	this.top_11.setTransform(-96,96);

	this.top_10 = new lib.icon_top10();
	this.top_10.setTransform(96,-96);

	this.top_9 = new lib.icon_top9();
	this.top_9.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.top_1},{t:this.top_2},{t:this.top_3},{t:this.top_4}]}).to({state:[{t:this.top_5},{t:this.top_6},{t:this.top_7},{t:this.top_8}]},1).to({state:[{t:this.top_9},{t:this.top_10},{t:this.top_11},{t:this.top_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_top = new lib.color_picker_2_mc();
	this.color_top.setTransform(-180,-180);
	this.color_top._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_top).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.horns_0 = new lib.horns_0_mc();
	this.horns_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.horns_0).wait(3));

	// options
	this.horns_4 = new lib.icon_horns4();
	this.horns_4.setTransform(96,96);

	this.horns_3 = new lib.icon_horns3();
	this.horns_3.setTransform(-96,96);

	this.horns_2 = new lib.icon_horns2();
	this.horns_2.setTransform(96,-96);

	this.horns_1 = new lib.icon_horns1();
	this.horns_1.setTransform(-96,-96);

	this.horns_8 = new lib.icon_horns8();
	this.horns_8.setTransform(96,96);

	this.horns_7 = new lib.icon_horns7();
	this.horns_7.setTransform(-96,96);

	this.horns_6 = new lib.icon_horns6();
	this.horns_6.setTransform(96,-96);

	this.horns_5 = new lib.icon_horns5();
	this.horns_5.setTransform(-96,-96);

	this.horns_12 = new lib.icon_horns12();
	this.horns_12.setTransform(96,96);

	this.horns_11 = new lib.icon_horns11();
	this.horns_11.setTransform(-96,96);

	this.horns_10 = new lib.icon_horns10();
	this.horns_10.setTransform(96,-96);

	this.horns_9 = new lib.icon_horns9();
	this.horns_9.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.horns_1},{t:this.horns_2},{t:this.horns_3},{t:this.horns_4}]}).to({state:[{t:this.horns_5},{t:this.horns_6},{t:this.horns_7},{t:this.horns_8}]},1).to({state:[{t:this.horns_9},{t:this.horns_10},{t:this.horns_11},{t:this.horns_12}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// options
	this.mouth_4 = new lib.icon_mouth4();
	this.mouth_4.setTransform(96,96);

	this.mouth_3 = new lib.icon_mouth3();
	this.mouth_3.setTransform(-96,96);

	this.mouth_2 = new lib.icon_mouth2();
	this.mouth_2.setTransform(96,-96);

	this.mouth_1 = new lib.icon_mouth1();
	this.mouth_1.setTransform(-96,-96);

	this.mouth_8 = new lib.icon_mouth8();
	this.mouth_8.setTransform(96,96);

	this.mouth_7 = new lib.icon_mouth7();
	this.mouth_7.setTransform(-96,96);

	this.mouth_6 = new lib.icon_mouth6();
	this.mouth_6.setTransform(96,-96);

	this.mouth_5 = new lib.icon_mouth5();
	this.mouth_5.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mouth_1},{t:this.mouth_2},{t:this.mouth_3},{t:this.mouth_4}]}).to({state:[{t:this.mouth_5},{t:this.mouth_6},{t:this.mouth_7},{t:this.mouth_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect];


(lib.panel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// palette
	this.color_skin = new lib.color_picker_1_mc();
	this.color_skin.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get(this.color_skin).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-334.2,-217.7,394.2,435.5);
p.frameBounds = [rect];


(lib.icon_hair16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.body_15 = new lib.hair_16_mc();
	this.body_15.setTransform(-4.1,0.1,0.7,0.7,0,0,0,0.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.body_15).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair15();
	this.instance.setTransform(1.4,1.4,0.581,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair14();
	this.instance.setTransform(2,1,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair13();
	this.instance.setTransform(0.4,0.4,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair12();
	this.instance.setTransform(1.4,1.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair11();
	this.instance.setTransform(-0.6,2.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair10();
	this.instance.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair9();
	this.instance.setTransform(1.4,-3.6,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair8();
	this.instance.setTransform(0.4,2.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair7();
	this.instance.setTransform(1.4,2.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair6();
	this.instance.setTransform(-1,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair5();
	this.instance.setTransform(4,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair4();
	this.instance.setTransform(-3.6,4.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair3();
	this.instance.setTransform(-0.6,2.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair2();
	this.instance.setTransform(-1,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair1();
	this.instance.setTransform(46.4,2.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe16();
	this.instance.setTransform(-2.6,-3.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe15();
	this.instance.setTransform(0.4,0.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe14();
	this.instance.setTransform(0.4,-0.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe13();
	this.instance.setTransform(4.4,0.4,0.584,0.584);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe12();
	this.instance.setTransform(2.4,0.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe11();
	this.instance.setTransform(1.4,-0.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe10();
	this.instance.setTransform(0.4,-0.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe9();
	this.instance.setTransform(1.4,-12.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe8();
	this.instance.setTransform(0.4,4.4,0.545,0.545);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe7();
	this.instance.setTransform(1.4,6.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe6();
	this.instance.setTransform(0.4,5.4,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe5();
	this.instance.setTransform(0.4,-0.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe4();
	this.instance.setTransform(2.4,0.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe3();
	this.instance.setTransform(1.4,-2.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe2();
	this.instance.setTransform(0.4,-0.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringe1();
	this.instance.setTransform(0.4,-0.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes8();
	this.instance.setTransform(3.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes7();
	this.instance.setTransform(-1.6,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes6();
	this.instance.setTransform(9.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes5();
	this.instance.setTransform(1.4,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes4();
	this.instance.setTransform(1.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes3();
	this.instance.setTransform(-1.6,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes2();
	this.instance.setTransform(11.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes1();
	this.instance.setTransform(0.4,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress12();
	this.instance.setTransform(1,1.4,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress11();
	this.instance.setTransform(4,3.4,0.775,0.775);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress10();
	this.instance.setTransform(1,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress9();
	this.instance.setTransform(3,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress8();
	this.instance.setTransform(2,9.4,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress7();
	this.instance.setTransform(3,3.4,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress6();
	this.instance.setTransform(-2,3.4,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress5();
	this.instance.setTransform(-2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress4();
	this.instance.setTransform(2,4.4,0.824,0.824);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress3();
	this.instance.setTransform(1,5.4,0.798,0.798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress2();
	this.instance.setTransform(1,6.4,0.791,0.791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress1();
	this.instance.setTransform(3,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom12();
	this.instance.setTransform(1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom11();
	this.instance.setTransform(0.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom10();
	this.instance.setTransform(0.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom9();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom8();
	this.instance.setTransform(-0.6,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom7();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom6();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom5();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom4();
	this.instance.setTransform(2.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom3();
	this.instance.setTransform(-0.6,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom2();
	this.instance.setTransform(0.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom1();
	this.instance.setTransform(1.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.hero_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.bottom1();
	this.body_1.setTransform(193.4,6.8);

	this.body_2 = new lib.bottom2();
	this.body_2.setTransform(195.5,-2.9);

	this.body_3 = new lib.bottom3();
	this.body_3.setTransform(186.8,2.7);

	this.body_4 = new lib.bottom4();
	this.body_4.setTransform(195.8,20.3);

	this.body_5 = new lib.bottom5();
	this.body_5.setTransform(191.5,-2.1);

	this.body_6 = new lib.bottom6();
	this.body_6.setTransform(192.9,-3);

	this.body_7 = new lib.bottom7();
	this.body_7.setTransform(194.3,-3.3);

	this.body_8 = new lib.bottom8();
	this.body_8.setTransform(189.4,-0.2);

	this.body_9 = new lib.bottom9();
	this.body_9.setTransform(193.5,-0.8);

	this.body_10 = new lib.bottom10();
	this.body_10.setTransform(190.4,-0.7);

	this.body_11 = new lib.bottom11();
	this.body_11.setTransform(195,-2.6);

	this.body_12 = new lib.bottom12();
	this.body_12.setTransform(198.9,-9.8,1,1,0,0,0,0.4,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(134.3,-30.7,118,75);
p.frameBounds = [rect, new cjs.Rectangle(141.7,-30.7,108,56), new cjs.Rectangle(139.5,-30.7,95,67), new cjs.Rectangle(127.5,-30.7,137,102), new cjs.Rectangle(151.8,-30.7,79.3,57.2), new cjs.Rectangle(151.5,-30.7,83,55.4), new cjs.Rectangle(151.5,-30.7,86,55), new cjs.Rectangle(147.6,-30.7,84,61), new cjs.Rectangle(133.3,-30.4,120,59), new cjs.Rectangle(146.8,-30.7,87.2,60), new cjs.Rectangle(146.2,-30.7,98,56), new cjs.Rectangle(148.5,-30.8,101,42), null];


(lib.hero_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.body_1_hero_body();

	this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.3,-207.3,181,415);
p.frameBounds = [rect];


(lib.hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.hair1();
	this.body_1.setTransform(114.3,152.3);

	this.body_2 = new lib.hair2();
	this.body_2.setTransform(-8.7,123.2,1,1,0,0,0,0,-0.1);

	this.body_3 = new lib.hair3();
	this.body_3.setTransform(-4.9,148.7,1,1,0,0,0,-0.1,-0.5);

	this.body_4 = new lib.hair4();
	this.body_4.setTransform(26.2,130.4);

	this.body_5 = new lib.hair5();
	this.body_5.setTransform(8.5,69.8);

	this.body_6 = new lib.hair6();
	this.body_6.setTransform(-1.5,134.8,1,1,0,0,0,-0.1,0.1);

	this.body_7 = new lib.hair7();
	this.body_7.setTransform(-3.1,119.5);

	this.body_8 = new lib.hair8();
	this.body_8.setTransform(2.8,122.8,1,1,0,0,0,0,0.2);

	this.body_9 = new lib.hair9();
	this.body_9.setTransform(2.7,47.2,1,1,0,0,0,0,0.4);

	this.body_10 = new lib.hair10();
	this.body_10.setTransform(-2.2,115.4);

	this.body_11 = new lib.hair11();
	this.body_11.setTransform(-2.1,35.3);

	this.body_12 = new lib.hair12();
	this.body_12.setTransform(-1.7,119.6);

	this.body_13 = new lib.hair13();
	this.body_13.setTransform(-5.6,65.6);

	this.body_14 = new lib.hair14();
	this.body_14.setTransform(1.2,125.3);

	this.body_15 = new lib.hair15();
	this.body_15.setTransform(-8.7,130.5);

	this.body_16 = new lib.hair_16_mc();
	this.body_16.setTransform(-11.3,37.1,1,1,0,0,0,0.1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[{t:this.body_13}]},1).to({state:[{t:this.body_14}]},1).to({state:[{t:this.body_15}]},1).to({state:[{t:this.body_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176.3,-43.2,356,391);
p.frameBounds = [rect, new cjs.Rectangle(-127.4,-40,237,327), new cjs.Rectangle(-146.7,-44.7,284,387), new cjs.Rectangle(-81.7,-53,216,367), new cjs.Rectangle(-138.7,-63,295,266), new cjs.Rectangle(-192.6,-54.3,382,378), new cjs.Rectangle(-173,-56.8,340,353), new cjs.Rectangle(-167.6,-72.5,341,391), new cjs.Rectangle(-116.9,-61.9,239,217), new cjs.Rectangle(-153.3,-62.9,302,357), new cjs.Rectangle(-130.2,-68.2,256,207), new cjs.Rectangle(-159.6,-65.5,316,370), new cjs.Rectangle(-154.7,3.7,298,124), new cjs.Rectangle(-161.5,-72.5,325,396), new cjs.Rectangle(-140.6,33.7,264,202), new cjs.Rectangle(-128.7,-65.2,235,205)];


(lib.gloves_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.gloves_1();

	this.body_2 = new lib.gloves_2();
	this.body_2.setTransform(0,5.3);

	this.body_3 = new lib.gloves_3();
	this.body_3.setTransform(0,5.3);

	this.body_4 = new lib.gloves_4();
	this.body_4.setTransform(1.7,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-30.5,158,61.2);
p.frameBounds = [rect, new cjs.Rectangle(-78.8,-19.9,158,51), new cjs.Rectangle(-78.8,-19.9,158,50.8), new cjs.Rectangle(-72.1,-19.9,148,48), null];


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


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_2_mc();
	this.instance.setTransform(-82.9,0,0.553,0.553,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-82.9,alpha:0.801},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270.7,-140.3,375.8,280.6);
p.frameBounds = [rect, new cjs.Rectangle(-283.6,-146.9,393.6,293.9), new cjs.Rectangle(-270.7,-140.3,375.8,280.6), new cjs.Rectangle(-283.6,-146.9,393.6,293.9)];


(lib.done_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.done_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleX:1.06,scaleY:1.06},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


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
	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(685,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(400.1,560.1,0.667,0.666,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(90,510,0.941,0.941);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,510,0.941,0.941);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.moreGames_btn},{t:this.credits_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instruction_btn}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(400,460);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// heroes
	this.instance_1 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.background_8_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,957);
p.frameBounds = [rect];


(lib.panel_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.dress_4 = new lib.icon_dress4();
	this.dress_4.setTransform(96,96);

	this.dress_3 = new lib.icon_dress3();
	this.dress_3.setTransform(-96,96);

	this.dress_2 = new lib.icon_dress2();
	this.dress_2.setTransform(96,-96);

	this.dress_1 = new lib.icon_dress1();
	this.dress_1.setTransform(-96,-96);

	this.dress_8 = new lib.icon_dress8();
	this.dress_8.setTransform(96,96);

	this.dress_7 = new lib.icon_dress7();
	this.dress_7.setTransform(-96,96);

	this.dress_6 = new lib.icon_dress6();
	this.dress_6.setTransform(96,-96);

	this.dress_5 = new lib.icon_dress5();
	this.dress_5.setTransform(-96,-96);

	this.dress_12 = new lib.icon_dress12();
	this.dress_12.setTransform(96,96);

	this.dress_11 = new lib.icon_dress11();
	this.dress_11.setTransform(-96,96);

	this.dress_10 = new lib.icon_dress10();
	this.dress_10.setTransform(96,-96);

	this.dress_9 = new lib.icon_dress9();
	this.dress_9.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1},{t:this.dress_2},{t:this.dress_3},{t:this.dress_4}]}).to({state:[{t:this.dress_5},{t:this.dress_6},{t:this.dress_7},{t:this.dress_8}]},1).to({state:[{t:this.dress_9},{t:this.dress_10},{t:this.dress_11},{t:this.dress_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_dress = new lib.color_picker_2_mc();
	this.color_dress.setTransform(-180,-180);
	this.color_dress._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_dress).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.bottom_4 = new lib.icon_bottom4();
	this.bottom_4.setTransform(96,96);

	this.bottom_3 = new lib.icon_bottom3();
	this.bottom_3.setTransform(-96,96);

	this.bottom_2 = new lib.icon_bottom2();
	this.bottom_2.setTransform(96,-96);

	this.bottom_1 = new lib.icon_bottom1();
	this.bottom_1.setTransform(-96,-96);

	this.bottom_8 = new lib.icon_bottom8();
	this.bottom_8.setTransform(96,96);

	this.bottom_7 = new lib.icon_bottom7();
	this.bottom_7.setTransform(-96,96);

	this.bottom_6 = new lib.icon_bottom6();
	this.bottom_6.setTransform(96,-96);

	this.bottom_5 = new lib.icon_bottom5();
	this.bottom_5.setTransform(-96,-96);

	this.bottom_12 = new lib.icon_bottom12();
	this.bottom_12.setTransform(96,96);

	this.bottom_11 = new lib.icon_bottom11();
	this.bottom_11.setTransform(-96,96);

	this.bottom_10 = new lib.icon_bottom10();
	this.bottom_10.setTransform(96,-96);

	this.bottom_9 = new lib.icon_bottom9();
	this.bottom_9.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom_1},{t:this.bottom_2},{t:this.bottom_3},{t:this.bottom_4}]}).to({state:[{t:this.bottom_5},{t:this.bottom_6},{t:this.bottom_7},{t:this.bottom_8}]},1).to({state:[{t:this.bottom_9},{t:this.bottom_10},{t:this.bottom_11},{t:this.bottom_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_bottom = new lib.color_picker_2_mc();
	this.color_bottom.setTransform(-180,-180);
	this.color_bottom._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_bottom).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(5));

	// options
	this.hair_4 = new lib.icon_hair4();
	this.hair_4.setTransform(96,96);

	this.hair_3 = new lib.icon_hair3();
	this.hair_3.setTransform(-96,96);

	this.hair_2 = new lib.icon_hair2();
	this.hair_2.setTransform(96,-96);

	this.hair_1 = new lib.icon_hair1();
	this.hair_1.setTransform(-96,-96);

	this.hair_8 = new lib.icon_hair8();
	this.hair_8.setTransform(96,96);

	this.hair_7 = new lib.icon_hair7();
	this.hair_7.setTransform(-96,96);

	this.hair_6 = new lib.icon_hair6();
	this.hair_6.setTransform(96,-96);

	this.hair_5 = new lib.icon_hair5();
	this.hair_5.setTransform(-96,-96);

	this.hair_12 = new lib.icon_hair12();
	this.hair_12.setTransform(96,96);

	this.hair_11 = new lib.icon_hair11();
	this.hair_11.setTransform(-96,96);

	this.hair_10 = new lib.icon_hair10();
	this.hair_10.setTransform(96,-96);

	this.hair_9 = new lib.icon_hair9();
	this.hair_9.setTransform(-96,-96);

	this.hair_16 = new lib.icon_hair16();
	this.hair_16.setTransform(96,96);

	this.hair_15 = new lib.icon_hair15();
	this.hair_15.setTransform(-96,96);

	this.hair_14 = new lib.icon_hair14();
	this.hair_14.setTransform(96,-96);

	this.hair_13 = new lib.icon_hair13();
	this.hair_13.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4}]}).to({state:[{t:this.hair_5},{t:this.hair_6},{t:this.hair_7},{t:this.hair_8}]},1).to({state:[{t:this.hair_9},{t:this.hair_10},{t:this.hair_11},{t:this.hair_12}]},1).to({state:[{t:this.hair_13},{t:this.hair_14},{t:this.hair_15},{t:this.hair_16}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_hair = new lib.color_picker_2_mc();
	this.color_hair.setTransform(-180,-180);
	this.color_hair._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_hair).wait(4).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.panel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(5));

	// options
	this.fringe_4 = new lib.icon_fringe4();
	this.fringe_4.setTransform(96,96);

	this.fringe_3 = new lib.icon_fringe3();
	this.fringe_3.setTransform(-96,96);

	this.fringe_2 = new lib.icon_fringe2();
	this.fringe_2.setTransform(96,-96);

	this.fringe_1 = new lib.icon_fringe1();
	this.fringe_1.setTransform(-96,-96);

	this.fringe_8 = new lib.icon_fringe8();
	this.fringe_8.setTransform(96,96);

	this.fringe_7 = new lib.icon_fringe7();
	this.fringe_7.setTransform(-96,96);

	this.fringe_6 = new lib.icon_fringe6();
	this.fringe_6.setTransform(96,-96);

	this.fringe_5 = new lib.icon_fringe5();
	this.fringe_5.setTransform(-96,-96);

	this.fringe_12 = new lib.icon_fringe12();
	this.fringe_12.setTransform(96,96);

	this.fringe_11 = new lib.icon_fringe11();
	this.fringe_11.setTransform(-96,96);

	this.fringe_10 = new lib.icon_fringe10();
	this.fringe_10.setTransform(96,-96);

	this.fringe_9 = new lib.icon_fringe9();
	this.fringe_9.setTransform(-96,-96);

	this.fringe_16 = new lib.icon_fringe16();
	this.fringe_16.setTransform(96,96);

	this.fringe_15 = new lib.icon_fringe15();
	this.fringe_15.setTransform(-96,96);

	this.fringe_14 = new lib.icon_fringe14();
	this.fringe_14.setTransform(96,-96);

	this.fringe_13 = new lib.icon_fringe13();
	this.fringe_13.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fringe_1},{t:this.fringe_2},{t:this.fringe_3},{t:this.fringe_4}]}).to({state:[{t:this.fringe_5},{t:this.fringe_6},{t:this.fringe_7},{t:this.fringe_8}]},1).to({state:[{t:this.fringe_9},{t:this.fringe_10},{t:this.fringe_11},{t:this.fringe_12}]},1).to({state:[{t:this.fringe_13},{t:this.fringe_14},{t:this.fringe_15},{t:this.fringe_16}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_fringe = new lib.color_picker_2_mc();
	this.color_fringe.setTransform(-180,-180);
	this.color_fringe._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_fringe).wait(4).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.panel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.eyes_4 = new lib.icon_eyes4();
	this.eyes_4.setTransform(96,96);

	this.eyes_3 = new lib.icon_eyes3();
	this.eyes_3.setTransform(-96,96);

	this.eyes_2 = new lib.icon_eyes2();
	this.eyes_2.setTransform(96,-96);

	this.eyes_1 = new lib.icon_eyes1();
	this.eyes_1.setTransform(-96,-96);

	this.eyes_8 = new lib.icon_eyes8();
	this.eyes_8.setTransform(96,96);

	this.eyes_7 = new lib.icon_eyes7();
	this.eyes_7.setTransform(-96,96);

	this.eyes_6 = new lib.icon_eyes6();
	this.eyes_6.setTransform(96,-96);

	this.eyes_5 = new lib.icon_eyes5();
	this.eyes_5.setTransform(-96,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4}]}).to({state:[{t:this.eyes_5},{t:this.eyes_6},{t:this.eyes_7},{t:this.eyes_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_eyes = new lib.color_picker_2_mc();
	this.color_eyes.setTransform(-180,-180);
	this.color_eyes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_eyes).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect];


(lib.hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hat_all();
	this.headdress.setTransform(-236.2,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// accessory
	this.accessory = new lib.accessory_hand_all();
	this.accessory.setTransform(-89.5,34.1);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// jewelry
	this.jewelry = new lib.accessory_face_all();
	this.jewelry.setTransform(-178.5,-104);

	this.timeline.addTween(cjs.Tween.get(this.jewelry).wait(1));

	// mouth
	this.mouth = new lib.mouth_all();
	this.mouth.setTransform(-25.2,-42.4);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// eyes
	this.eyes = new lib.eyes_all();
	this.eyes.setTransform(-18,-93.3);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// horns
	this.horns = new lib.horns_all();
	this.horns.setTransform(0,-188.2);

	this.timeline.addTween(cjs.Tween.get(this.horns).wait(1));

	// fringe
	this.fringe = new lib.fringe_all();
	this.fringe.setTransform(2.5,-143.2);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// dress
	this.dress = new lib.dress_all();
	this.dress.setTransform(-16,37.8,1,1,0,0,0,174,-12);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero_top_all();
	this.top.setTransform(-15.9,30.5,1,1,0,0,0,200,-44);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// gloves
	this.gloves = new lib.gloves_all();
	this.gloves.setTransform(-18.2,36.2);

	this.timeline.addTween(cjs.Tween.get(this.gloves).wait(1));

	// bottom
	this.bottom = new lib.hero_bottom_all();
	this.bottom.setTransform(-22.5,81.3,1,1,0,0,0,193.4,6.8);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero_shoes_all();
	this.shoes.setTransform(-11.9,177.6,1,1,0,0,0,204,103.1);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// socks
	this.socks = new lib.hero_socks_all();
	this.socks.setTransform(-15.9,30.5,1,1,0,0,0,200,-44);

	this.timeline.addTween(cjs.Tween.get(this.socks).wait(1));

	// skin
	this.skin = new lib.hero_body();
	this.skin.setTransform(-6.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// wings
	this.wings = new lib.wings_all();
	this.wings.setTransform(1.4,-36.6);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

	// tail
	this.tail = new lib.tail_all();
	this.tail.setTransform(68.1,89.9);

	this.timeline.addTween(cjs.Tween.get(this.tail).wait(1));

	// hair
	this.hair = new lib.hair_all();
	this.hair.setTransform(-2.5,0.7,1,1,0,0,0,-5,143.9);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173.8,-208.4,356,448.9);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logo_1_mc();
	this.logo_btn.setTransform(110.1,545.2,0.526,0.526,0,0,0,0.1,0.4);
	this.logo_btn.cache(-192,-92,384,184);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(412,310);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.panels_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hero_1_category_1_subcategory_1:0,hero_1_category_1_subcategory_2:1,hero_1_category_1_subcategory_3:2,hero_1_category_1_subcategory_4:3,hero_1_category_2_subcategory_1:4,hero_1_category_2_subcategory_2:5,hero_1_category_3_subcategory_1:6,hero_1_category_3_subcategory_2:7,hero_1_category_3_subcategory_3:8,hero_1_category_3_subcategory_4:9,hero_1_category_3_subcategory_5:10,hero_1_category_3_subcategory_6:11,hero_1_category_4_subcategory_1:12,hero_1_category_4_subcategory_2:13,hero_1_category_4_subcategory_3:14,hero_1_category_4_subcategory_4:15,hero_1_category_4_subcategory_5:16,hero_1_category_5_subcategory_1:17});

	// panels
	this.panel_1 = new lib.panel_1_mc();

	this.panel_2 = new lib.panel_2_mc();

	this.panel_3 = new lib.panel_3_mc();

	this.panel_4 = new lib.panel_4_mc();

	this.panel_5 = new lib.panel_5_mc();

	this.panel_6 = new lib.panel_6_mc();

	this.panel_7 = new lib.panel_7_mc();

	this.panel_8 = new lib.panel_8_mc();

	this.panel_9 = new lib.panel_9_mc();

	this.panel_10 = new lib.panel_10_mc();

	this.panel_11 = new lib.panel_11_mc();

	this.panel_12 = new lib.panel_12_mc();

	this.panel_13 = new lib.panel_13_mc();

	this.panel_14 = new lib.panel_14_mc();

	this.panel_15 = new lib.panel_15_mc();

	this.panel_16 = new lib.panel_16_mc();

	this.panel_17 = new lib.panel_17_mc();

	this.panel_18 = new lib.panel_18_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.panel_1}]}).to({state:[{t:this.panel_2}]},1).to({state:[{t:this.panel_3}]},1).to({state:[{t:this.panel_4}]},1).to({state:[{t:this.panel_5}]},1).to({state:[{t:this.panel_6}]},1).to({state:[{t:this.panel_7}]},1).to({state:[{t:this.panel_8}]},1).to({state:[{t:this.panel_9}]},1).to({state:[{t:this.panel_10}]},1).to({state:[{t:this.panel_11}]},1).to({state:[{t:this.panel_12}]},1).to({state:[{t:this.panel_13}]},1).to({state:[{t:this.panel_14}]},1).to({state:[{t:this.panel_15}]},1).to({state:[{t:this.panel_16}]},1).to({state:[{t:this.panel_17}]},1).to({state:[{t:this.panel_18}]},1).wait(1));

	// category
	this.category_5 = new lib.category_5_mc();
	this.category_5.setTransform(160,-230);

	this.category_4 = new lib.category_4_mc();
	this.category_4.setTransform(80,-230);

	this.category_3 = new lib.category_3_mc();
	this.category_3.setTransform(0,-230);

	this.category_2 = new lib.category_2_mc();
	this.category_2.setTransform(-80,-230);

	this.category_1 = new lib.category_1_mc();
	this.category_1.setTransform(-160,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.category_1},{t:this.category_2},{t:this.category_3},{t:this.category_4},{t:this.category_5}]}).wait(18));

	// subcategory
	this.subcategory_4_1 = new lib.subcategory_4_1_mc();
	this.subcategory_4_1.setTransform(-240,80);

	this.subcategory_3_1 = new lib.subcategory_3_1_mc();
	this.subcategory_3_1.setTransform(-240,0);

	this.subcategory_2_1 = new lib.subcategory_2_1_mc();
	this.subcategory_2_1.setTransform(-240,-80);

	this.subcategory_1_1 = new lib.subcategory_1_1_mc();
	this.subcategory_1_1.setTransform(-240,-160);

	this.subcategory_2_2 = new lib.subcategory_2_2_mc();
	this.subcategory_2_2.setTransform(-240,-80);

	this.subcategory_1_2 = new lib.subcategory_1_2_mc();
	this.subcategory_1_2.setTransform(-240,-160);

	this.subcategory_6_3 = new lib.subcategory_6_3_mc();
	this.subcategory_6_3.setTransform(-240,240);

	this.subcategory_5_3 = new lib.subcategory_5_3_mc();
	this.subcategory_5_3.setTransform(-240,160);

	this.subcategory_4_3 = new lib.subcategory_4_3_mc();
	this.subcategory_4_3.setTransform(-240,80);

	this.subcategory_3_3 = new lib.subcategory_3_3_mc();
	this.subcategory_3_3.setTransform(-240,0);

	this.subcategory_2_3 = new lib.subcategory_2_3_mc();
	this.subcategory_2_3.setTransform(-240,-80);

	this.subcategory_1_3 = new lib.subcategory_1_3_mc();
	this.subcategory_1_3.setTransform(-240,-160);

	this.subcategory_5_4 = new lib.subcategory_5_4_mc();
	this.subcategory_5_4.setTransform(-240,160);

	this.subcategory_4_4 = new lib.subcategory_4_4_mc();
	this.subcategory_4_4.setTransform(-240,80);

	this.subcategory_3_4 = new lib.subcategory_3_4_mc();
	this.subcategory_3_4.setTransform(-240,0);

	this.subcategory_2_4 = new lib.subcategory_2_4_mc();
	this.subcategory_2_4.setTransform(-240,-80);

	this.subcategory_1_4 = new lib.subcategory_1_4_mc();
	this.subcategory_1_4.setTransform(-240,-160);

	this.subcategory_1_5 = new lib.subcategory_1_5_mc();
	this.subcategory_1_5.setTransform(-240,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subcategory_1_1},{t:this.subcategory_2_1},{t:this.subcategory_3_1},{t:this.subcategory_4_1}]}).to({state:[{t:this.subcategory_1_2},{t:this.subcategory_2_2}]},4).to({state:[{t:this.subcategory_1_3},{t:this.subcategory_2_3},{t:this.subcategory_3_3},{t:this.subcategory_4_3},{t:this.subcategory_5_3},{t:this.subcategory_6_3}]},2).to({state:[{t:this.subcategory_1_4},{t:this.subcategory_2_4},{t:this.subcategory_3_4},{t:this.subcategory_4_4},{t:this.subcategory_5_4}]},6).to({state:[{t:this.subcategory_1_5}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-295,-285,510,660);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-295,-285,519,660), rect=new cjs.Rectangle(-295,-285,510,660), rect, rect, rect, rect, rect=new cjs.Rectangle(-295,-285,519,660), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-295,-285,510,660)];


(lib.ConstructorScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.random_btn = new lib.random_btn();
	this.random_btn.setTransform(600,800);
	new cjs.ButtonHelper(this.random_btn, 0, 1, 2, false, new lib.random_btn(), 3);

	this.reset_btn = new lib.reset_btn();
	this.reset_btn.setTransform(200,800);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.reset_btn(), 3);

	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(80.3,520.3,0.823,0.823,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800,0.824,0.824);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(50,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(240,45);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.done_btn},{t:this.reset_btn},{t:this.random_btn}]}).wait(1));

	// panels
	this.panels_mc = new lib.panels_mc();
	this.panels_mc.setTransform(580,300);

	this.timeline.addTween(cjs.Tween.get(this.panels_mc).wait(1));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(175,320);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1200,970);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(450,700);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(350,700);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(710.3,375.2,0.824,0.824,0,0,0,0.3,0.2);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(710.2,515.2,0.824,0.824,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(90,555,0.8,0.8);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(90,460,0.824,0.824);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(685,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.facebook_btn},{t:this.photo_btn},{t:this.playAgain_btn},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-200,-490,1200,1407.8);
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
	this.text.lineHeight = 38;
	this.text.lineWidth = 123;
	this.text.setTransform(2,2);

	this.instance = new lib.PreloaderScreen();
	this.instance.setTransform(-2,0.1,1,1,0,0,0,-2,0.1);

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.ConstructorScreen();

	this.redirect_mc = new lib.RedirectScreen();

	this.instance_4 = new lib.ResultScreen();

	this.instance_5 = new lib.InstructionScreen();

	this.instance_6 = new lib.Cursor();
	this.instance_6.setTransform(257.2,68.7);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(158.7,69.2);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(65.7,69.2);

	this.instance_7 = new lib.OrientationLockScreen();

	this.instance_8 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.redirect_mc}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,127,39.8);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-76.9,1200,957), new cjs.Rectangle(-200,-90,1200,970), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-490,1200,1407.8), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(25.7,29.2,266.5,80), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1400,0,1200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect];


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