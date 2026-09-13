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
		{src:"library/images/storage_atlas_11.png", id:"storage_atlas_11"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,800,600],[449,804,395,460],[0,804,447,432],[0,602,1200,200],[802,0,400,555]]},
		{name:"storage_atlas_5", frames: [[0,704,420,420],[0,282,420,420],[422,282,371,443],[795,282,390,405],[795,689,490,310],[0,0,640,280],[642,0,640,280]]},
		{name:"storage_atlas_6", frames: [[0,624,500,300],[881,0,360,415],[502,393,352,420],[820,841,314,438],[492,0,387,391],[856,417,341,422],[502,815,316,439],[0,312,490,310],[0,0,490,310]]},
		{name:"storage_atlas_7", frames: [[0,878,296,408],[293,448,280,424],[0,448,291,428],[586,875,260,417],[0,0,304,446],[575,442,272,431],[306,0,307,440],[938,0,304,401],[298,875,286,397],[849,820,224,473],[849,406,276,412],[615,0,321,404]]},
		{name:"storage_atlas_8", frames: [[584,704,290,350],[292,0,290,350],[584,352,290,350],[584,0,290,350],[876,0,290,350],[876,704,290,350],[0,0,290,350],[0,352,290,350],[292,352,290,350],[876,352,290,350],[0,704,290,350],[292,704,290,350]]},
		{name:"storage_atlas_9", frames: [[590,412,175,473],[402,694,186,473],[1031,0,205,396],[590,887,203,402],[584,0,233,410],[819,0,210,417],[0,0,290,350],[0,352,290,350],[0,704,290,350],[292,0,290,350],[1117,398,150,500],[0,1056,400,226],[795,419,320,240],[795,661,320,240],[795,903,320,240],[292,352,280,340]]},
		{name:"storage_atlas_10", frames: [[586,0,200,240],[384,0,200,240],[0,1008,200,240],[620,242,200,240],[536,484,200,240],[418,242,200,240],[788,0,200,240],[536,726,200,240],[567,968,200,240],[990,0,200,240],[822,242,200,240],[738,484,200,240],[205,293,211,293],[157,0,225,291],[0,475,203,349],[382,974,183,299],[1139,424,133,243],[0,0,155,473],[940,484,197,184],[1139,669,150,209],[382,588,152,384],[0,826,380,180],[738,726,222,213],[202,1008,176,176],[1011,1124,240,120],[1011,1002,240,120],[769,1124,240,120],[769,1002,240,120],[962,880,240,120],[1024,242,180,180]]},
		{name:"storage_atlas_11", frames: [[1066,222,180,100],[0,739,80,100],[1201,741,80,100],[745,405,120,120],[242,0,240,120],[867,405,120,120],[484,0,240,120],[421,727,160,60],[765,323,224,80],[555,877,70,70],[627,877,70,70],[282,1026,92,36],[999,992,92,38],[0,1009,92,38],[415,993,92,38],[274,802,98,66],[174,802,98,66],[340,870,49,107],[756,1020,38,81],[1228,1009,61,56],[429,568,74,51],[318,1088,85,19],[1134,937,94,43],[330,326,89,24],[907,305,87,15],[330,353,104,143],[436,353,69,213],[176,1050,53,49],[138,326,110,142],[565,1026,64,51],[0,122,136,205],[704,949,50,75],[1090,386,97,150],[209,1123,42,23],[805,1103,41,19],[0,1127,41,19],[805,1124,41,19],[1093,1022,92,38],[94,1009,92,38],[188,1010,92,38],[812,1011,92,38],[902,1081,77,22],[484,1083,77,22],[88,1082,77,22],[0,1083,77,22],[1022,907,54,75],[1248,222,52,89],[1078,915,54,75],[174,870,51,105],[391,903,54,81],[583,628,37,90],[631,1026,61,51],[1045,729,50,62],[231,1088,85,19],[0,582,96,38],[906,1050,88,29],[1052,1086,85,19],[103,470,94,153],[422,184,99,167],[447,903,57,76],[942,122,122,181],[0,841,63,93],[646,181,117,174],[652,949,50,75],[991,386,97,150],[299,1109,43,24],[1023,1121,43,24],[1068,1121,43,24],[344,1109,43,24],[227,970,92,38],[321,986,92,38],[905,971,92,38],[1134,982,92,38],[1052,1062,77,22],[1131,1062,77,22],[231,1064,77,22],[1210,1067,77,22],[756,949,54,69],[120,882,52,84],[694,1026,53,53],[997,1032,53,53],[227,870,55,97],[1166,843,63,92],[509,993,54,64],[374,802,39,54],[1023,1107,88,12],[906,1011,89,37],[0,1049,86,32],[605,1105,86,18],[477,628,104,97],[82,802,90,78],[1210,0,81,109],[1230,950,61,57],[843,877,62,77],[1066,122,225,98],[737,641,112,49],[600,949,50,75],[646,357,97,150],[649,1125,42,22],[890,1125,42,22],[253,1123,42,22],[605,1125,42,22],[954,652,91,40],[57,969,92,38],[1089,538,92,40],[812,956,91,40],[330,498,77,22],[484,1059,77,22],[563,1079,77,22],[642,1081,77,22],[430,1033,52,53],[376,1033,52,53],[848,1051,52,46],[1231,843,51,105],[151,977,53,24],[310,1064,53,22],[199,470,48,49],[506,903,47,43],[209,1109,88,12],[851,641,101,52],[506,949,92,42],[88,1049,86,31],[540,181,104,209],[250,326,78,194],[1204,581,77,158],[1189,386,75,193],[1112,793,52,120],[985,729,58,153],[907,877,58,80],[0,329,101,149],[79,1126,42,19],[123,1126,42,19],[421,704,42,19],[934,1125,42,19],[447,1107,77,18],[79,1106,77,18],[0,1107,77,18],[890,1105,77,18],[65,882,53,85],[0,936,55,71],[284,870,54,98],[967,884,53,85],[138,122,400,60],[115,670,360,32],[737,695,360,32],[115,636,360,32],[763,1103,40,40],[726,0,240,120],[717,763,65,112],[784,763,65,112],[1045,793,65,112],[918,763,65,112],[583,763,65,112],[421,789,65,112],[650,763,65,112],[488,789,65,112],[851,763,65,112],[796,1051,50,50],[0,0,240,120],[280,184,140,140],[765,181,140,140],[138,184,140,140],[1181,1091,40,40],[167,1101,40,40],[981,1087,40,40],[721,1103,40,40],[1223,1091,40,40],[405,1088,40,40],[563,1103,40,40],[848,1099,40,40],[1139,1086,40,40],[1047,652,40,40],[507,392,120,120],[319,704,100,96],[1099,695,100,96],[115,704,100,96],[217,704,100,96],[744,527,113,112],[507,514,113,112],[629,509,113,112],[199,522,113,112],[314,522,113,112],[974,538,113,112],[1089,581,113,112],[622,623,113,112],[859,527,113,112],[0,625,113,112],[540,122,400,57],[968,0,240,120],[699,877,70,70],[771,877,70,70],[583,737,400,24],[0,480,100,100],[991,324,280,60]]}
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
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_rubbing_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.animation_rubbing_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
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
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body_pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cancel_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.check_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.g1_rouge_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.g1_rouge_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.g1_rouge_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.g1_rouge_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairsrtyle_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hanger2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hanger_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bodyfm_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_headfm_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bodyfm_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress_0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_headfm_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bodyfm_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hands1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hands2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.hero3_head_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.hero3_headfm_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.hero4_body_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bodyfm_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.hero4_head_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.hero4_headfm_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_27_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_30_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_31_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_32_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_48_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_50_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_55_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.nav_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.next_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.next_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.rouge_10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.rouge_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.rouge_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.rouge_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.shadows11_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.shadows18_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.shadows23_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.shadows24_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.shadows25_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.shadows29_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.shadows33_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.shadows34_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.shadows4_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.shadows9_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.shelf_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.stick_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(193);
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
	this.instance = new lib.wardrobe_2_1_img();
	this.instance.setTransform(-140,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-30,280,60);
p.frameBounds = [rect];


(lib.wardrobe_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_img();
	this.instance.setTransform(-200,-278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-278,400,555);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-140,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-170,280,340);
p.frameBounds = [rect];


(lib.title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_3_img();
	this.instance.setTransform(-245,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-155,490,310);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_2_img();
	this.instance.setTransform(-245,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-155,490,310);
p.frameBounds = [rect];


(lib.title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_1_img();
	this.instance.setTransform(-245,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-155,490,310);
p.frameBounds = [rect];


(lib.stick_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stick_0_img();
	this.instance.setTransform(-200,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-12,400,24);
p.frameBounds = [rect];


(lib.shoes_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes4_img();
	this.instance.setTransform(-26.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBJXIAAyuIODAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.shoes_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes4_img();
	this.instance.setTransform(-25.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOJXIAAyuIMdAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-60,80,120);
p.frameBounds = [rect];


(lib.shoes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes4_img();
	this.instance.setTransform(-26.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOH0IAAvmIMdAAIAAPmg");
	this.shape.setTransform(0,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-58.5,80,100);
p.frameBounds = [rect];


(lib.shoes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes4_img();
	this.instance.setTransform(-25.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBJXIAAyuIODAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.shoes_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes3_img();
	this.instance.setTransform(-27,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBJXIAAyuIODAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.shoes_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes3_img();
	this.instance.setTransform(-26,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOH0IAAvnIMdAAIAAPng");
	this.shape.setTransform(0,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-58.5,80,100);
p.frameBounds = [rect];


(lib.shoes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes3_img();
	this.instance.setTransform(-26.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOH0IAAvmIMdAAIAAPmg");
	this.shape.setTransform(0,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-58.5,80,100);
p.frameBounds = [rect];


(lib.shoes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes3_img();
	this.instance.setTransform(-27,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBJXIAAyuIODAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.shoes_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes2_img();
	this.instance.setTransform(-27.5,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBJXIAAyuIODAAIAASug");
	this.shape.setTransform(0,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-68.5,90,120);
p.frameBounds = [rect];


(lib.shoes_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes2_img();
	this.instance.setTransform(-26,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOH0IAAvnIMdAAIAAPng");
	this.shape.setTransform(0,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-58.5,80,100);
p.frameBounds = [rect];


(lib.shoes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes2_img();
	this.instance.setTransform(-26,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOJYIAAyvIMdAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-60,80,120);
p.frameBounds = [rect];


(lib.shoes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes2_img();
	this.instance.setTransform(-26,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBJXIAAyuIODAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.shoes_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes1_img();
	this.instance.setTransform(-26.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBJXIAAyuIODAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.shoes_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes1_img();
	this.instance.setTransform(-26,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOH0IAAvnIMdAAIAAPng");
	this.shape.setTransform(0,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-58.5,80,100);
p.frameBounds = [rect];


(lib.shoes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes1_img();
	this.instance.setTransform(-27,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOH0IAAvmIMdAAIAAPmg");
	this.shape.setTransform(0,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-56,80,100);
p.frameBounds = [rect];


(lib.shoes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes1_img();
	this.instance.setTransform(-27,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBJXIAAyuIODAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.shelf_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_0_img();
	this.instance.setTransform(-200,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-29,400,57);
p.frameBounds = [rect];


(lib.shadows_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows33_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows34_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows24_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows4_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows29_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows18_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows33_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows29_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows4_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows9_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows25_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows11_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows23_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows29_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows29_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows25_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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


(lib.lips_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_32_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_55_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_31_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_48_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_50_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_50_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_2_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_2_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_27_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_27_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_27_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_27_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_30_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_2_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_30_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_1_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnLCIAAx4IFxkLIJeS4Ih/DLg");
	this.shape.setTransform(1.9,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-77.3,97.8,141.4);
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


(lib.hero4_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero4_shoes1_img();
	this.instance.setTransform(271.8,198.5);

	this.instance_1 = new lib.hero4_shoes2_img();
	this.instance_1.setTransform(270.6,217.8);

	this.instance_2 = new lib.hero4_shoes3_img();
	this.instance_2.setTransform(270,200);

	this.instance_3 = new lib.hero4_shoes4_img();
	this.instance_3.setTransform(271.8,198.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(271.8,198.5,53,85);
p.frameBounds = [rect, new cjs.Rectangle(270.6,217.8,55,71), new cjs.Rectangle(270,200,54,98), new cjs.Rectangle(271.8,198.5,53,85), null];


(lib.hero4_shadows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shadows1_img();
	this.instance.setTransform(-38.7,-8.8);

	this.instance_1 = new lib.hero4_shadows2_img();
	this.instance_1.setTransform(-38.7,-8.8);

	this.instance_2 = new lib.hero4_shadows3_img();
	this.instance_2.setTransform(-38.7,-8.8);

	this.instance_3 = new lib.hero4_shadows4_img();
	this.instance_3.setTransform(-38.7,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.7,-8.8,77,18);
p.frameBounds = [rect, rect, rect, rect, null];


(lib.hero4_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1_rouge_1_img();
	this.instance.setTransform(-45.8,-18);

	this.instance_1 = new lib.g1_rouge_2_img();
	this.instance_1.setTransform(-45.8,-18.8);

	this.instance_2 = new lib.g1_rouge_3_img();
	this.instance_2.setTransform(-45.8,-18.8);

	this.instance_3 = new lib.g1_rouge_4_img();
	this.instance_3.setTransform(-45.8,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-18,92,36);
p.frameBounds = [rect, rect=new cjs.Rectangle(-45.8,-18.8,92,38), rect, rect, null];


(lib.hero4_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_lips1_img();
	this.instance.setTransform(-20.8,-9.8);

	this.instance_1 = new lib.hero4_lips2_img();
	this.instance_1.setTransform(-20.8,-9.8);

	this.instance_2 = new lib.hero4_lips3_img();
	this.instance_2.setTransform(-20.8,-9.8);

	this.instance_3 = new lib.hero4_lips4_img();
	this.instance_3.setTransform(-20.8,-9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.8,-9.8,42,19);
p.frameBounds = [rect, rect, rect, rect];


(lib.hero4_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero4_hair1_img();
	this.instance.setTransform(-41.8,-97.5);

	this.instance_1 = new lib.hero4_hair2_img();
	this.instance_1.setTransform(-30.8,-93);

	this.instance_2 = new lib.hero4_hair3_img();
	this.instance_2.setTransform(-32.3,-97.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.8,-97.5,75,193);
p.frameBounds = [rect, new cjs.Rectangle(-30.8,-93,52,120), new cjs.Rectangle(-32.3,-97.5,58,153)];


(lib.hero4_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_fringe1_img();
	this.instance.setTransform(-52,-104.5);

	this.instance_1 = new lib.hero4_fringe2_img();
	this.instance_1.setTransform(-52.3,-104);

	this.instance_2 = new lib.hero4_fringe3_img();
	this.instance_2.setTransform(-38.8,-101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-104.5,104,209);
p.frameBounds = [rect, new cjs.Rectangle(-52.3,-104,78,194), new cjs.Rectangle(-38.8,-101,77,158)];


(lib.hero4_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyes1_1_img();
	this.instance.setTransform(-48.9,-27.3);

	this.instance_1 = new lib.hero4_eyes1_2_img();
	this.instance_1.setTransform(-46.2,-20);

	this.instance_2 = new lib.hero4_eyes1_3_img();
	this.instance_2.setTransform(-43.7,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},54).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.9,-27.3,101,52);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-46.2,-20,92,42), rect, rect=new cjs.Rectangle(-43.7,-10.4,86,31), rect, rect=new cjs.Rectangle(-46.2,-20,92,42), rect, rect=new cjs.Rectangle(-48.9,-27.3,101,52), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero4_eyebrows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyebrows_img();
	this.instance.setTransform(-44,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-6,88,12);
p.frameBounds = [rect];


(lib.hero4_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero4_dress1_img();
	this.instance.setTransform(138.4,-165.6);

	this.instance_1 = new lib.hero4_dress2_img();
	this.instance_1.setTransform(161.7,-169.5);

	this.instance_2 = new lib.hero4_dress3_img();
	this.instance_2.setTransform(142.1,-165.2);

	this.instance_3 = new lib.hero4_dress4_img();
	this.instance_3.setTransform(142.7,-151.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(138.4,-165.6,341,422);
p.frameBounds = [rect, new cjs.Rectangle(161.7,-169.5,276,412), new cjs.Rectangle(142.1,-165.2,316,439), new cjs.Rectangle(142.7,-151.5,321,404)];


(lib.hero4_bag_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArpMDQgUAAAAgUIAA3dQAAgUAUAAIUhAAIAAFmQAAAUAUAAICyAAIAAR3QAAAUgUAAgAjxjRQANAEAXABQAIABAOAKQAOAJAIAAQAHAAAEgFIAEgEIAAgBIAMAEQAMAEAHAAIAEgnIABggIAAgEIAAgBQgTgBgHgRQgFgKgCgbQgFgygdgEIgBgCIgEgGQgGgKgHAAQgPAAgMAyQgKAoAAAPQAAAGAFANIgZggQgLgNgGgTQgHgTgNgZQgNgagTAAQgKAAgEADQgCACAAAEQAAALAVA3QANAgAKATQgfgagyAAQgyAAACAPQAWANAyARQAxARAQANIASANIAPgDQACAAAJAFg");
	mask.setTransform(212.9,-95.2);

	// Слой 3
	this.instance = new lib.hero4_bag2_img();
	this.instance.setTransform(162.9,-144.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(162.9,-144.6,53,22);
p.frameBounds = [rect];


(lib.hero4_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArpMDQgUAAAAgUIAA3dQAAgUAUAAIUhAAIAAFmQAAAUAUAAICyAAIAAR3QAAAUgUAAgAjxjRQANAEAXABQAIABAOAKQAOAJAIAAQAHAAAEgFIAEgEIAAgBIAMAEQAMAEAHAAIAEgnIABggIAAgEIAAgBQgTgBgHgRQgFgKgCgbQgFgygdgEIgBgCIgEgGQgGgKgHAAQgPAAgMAyQgKAoAAAPQAAAGAFANIgZggQgLgNgGgTQgHgTgNgZQgNgagTAAQgKAAgEADQgCACAAAEQAAALAVA3QANAgAKATQgfgagyAAQgyAAACAPQAWANAyARQAxARAQANIASANIAPgDQACAAAJAFg");
	var mask_graphics_1 = new cjs.Graphics().p("ArpMDQgUAAAAgUIAA3dQAAgUAUAAIUhAAIAAFmQAAAUAUAAICyAAIAAR3QAAAUgUAAgAjxjRQANAEAXABQAIABAOAKQAOAJAIAAQAHAAAEgFIAEgEIAAgBIAMAEQAMAEAHAAIAEgnIABggIAAgEIAAgBQgTgBgHgRQgFgKgCgbQgFgygdgEIgBgCIgEgGQgGgKgHAAQgPAAgMAyQgKAoAAAPQAAAGAFANIgZggQgLgNgGgTQgHgTgNgZQgNgagTAAQgKAAgEADQgCACAAAEQAAALAVA3QANAgAKATQgfgagyAAQgyAAACAPQAWANAyARQAxARAQANIASANIAPgDQACAAAJAFg");
	var mask_graphics_2 = new cjs.Graphics().p("ArpMDQgUAAAAgUIAA3dQAAgUAUAAIUhAAIAAFmQAAAUAUAAICyAAIAAR3QAAAUgUAAgAjxjRQANAEAXABQAIABAOAKQAOAJAIAAQAHAAAEgFIAEgEIAAgBIAMAEQAMAEAHAAIAEgnIABggIAAgEIAAgBQgTgBgHgRQgFgKgCgbQgFgygdgEIgBgCIgEgGQgGgKgHAAQgPAAgMAyQgKAoAAAPQAAAGAFANIgZggQgLgNgGgTQgHgTgNgZQgNgagTAAQgKAAgEADQgCACAAAEQAAALAVA3QANAgAKATQgfgagyAAQgyAAACAPQAWANAyARQAxARAQANIASANIAPgDQACAAAJAFg");
	var mask_graphics_3 = new cjs.Graphics().p("ArpMDQgUAAAAgUIAA3dQAAgUAUAAIUhAAIAAFmQAAAUAUAAICyAAIAAR3QAAAUgUAAgAjxjRQANAEAXABQAIABAOAKQAOAJAIAAQAHAAAEgFIAEgEIAAgBIAMAEQAMAEAHAAIAEgnIABggIAAgEIAAgBQgTgBgHgRQgFgKgCgbQgFgygdgEIgBgCIgEgGQgGgKgHAAQgPAAgMAyQgKAoAAAPQAAAGAFANIgZggQgLgNgGgTQgHgTgNgZQgNgagTAAQgKAAgEADQgCACAAAEQAAALAVA3QANAgAKATQgfgagyAAQgyAAACAPQAWANAyARQAxARAQANIASANIAPgDQACAAAJAFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:212.9,y:-95.2}).wait(1).to({graphics:mask_graphics_1,x:212.9,y:-95.2}).wait(1).to({graphics:mask_graphics_2,x:212.9,y:-95.2}).wait(1).to({graphics:mask_graphics_3,x:212.9,y:-95.2}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Слой 2
	this.instance = new lib.hero4_bag1_img();
	this.instance.setTransform(163.8,-147.8);

	this.instance_1 = new lib.hero4_bag2_img();
	this.instance_1.setTransform(163.8,-145);

	this.instance_2 = new lib.hero4_bag3_img();
	this.instance_2.setTransform(172.3,-170.1);

	this.instance_3 = new lib.hero4_bag4_img();
	this.instance_3.setTransform(169.3,-165.6);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(163.8,-147.8,53,24);
p.frameBounds = [rect, new cjs.Rectangle(163.8,-145,53,22), new cjs.Rectangle(172.3,-170.1,48,49), new cjs.Rectangle(169.3,-165.6,47,43), null];


(lib.hero3_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_shoes1_img();
	this.instance.setTransform(212.6,190.6);

	this.instance_1 = new lib.hero3_shoes2_img();
	this.instance_1.setTransform(212.6,190.6);

	this.instance_2 = new lib.hero3_shoes3_img();
	this.instance_2.setTransform(212.1,189);

	this.instance_3 = new lib.hero3_shoes4_img();
	this.instance_3.setTransform(211.5,132.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(212.6,190.6,52,53);
p.frameBounds = [rect, rect, new cjs.Rectangle(212.1,189,52,46), new cjs.Rectangle(211.5,132.3,51,105), null];


(lib.hero3_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shadows_1_img();
	this.instance.setTransform(-38.4,-10.8);

	this.instance_1 = new lib.hero3_shadows_2_img();
	this.instance_1.setTransform(-38.4,-10.8);

	this.instance_2 = new lib.hero3_shadows_3_img();
	this.instance_2.setTransform(-38.4,-10.8);

	this.instance_3 = new lib.hero3_shadows_4_img();
	this.instance_3.setTransform(-38.4,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.4,-10.8,77,22);
p.frameBounds = [rect, rect, rect, rect, null];


(lib.hero3_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_rouge_1_img();
	this.instance.setTransform(-45.7,-16.1);

	this.instance_1 = new lib.hero3_rouge_2_img();
	this.instance_1.setTransform(-44.8,-14.3);

	this.instance_2 = new lib.hero3_rouge_3_img();
	this.instance_2.setTransform(-45.6,-16.4);

	this.instance_3 = new lib.hero3_rouge_4_img();
	this.instance_3.setTransform(-44.7,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.7,-16.1,91,40);
p.frameBounds = [rect, new cjs.Rectangle(-44.8,-14.3,92,38), new cjs.Rectangle(-45.6,-16.4,92,40), new cjs.Rectangle(-44.7,-13.7,91,40), null];


(lib.hero3_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_lips1_img();
	this.instance.setTransform(-21.6,-11.1);

	this.instance_1 = new lib.hero3_lips2_img();
	this.instance_1.setTransform(-21.6,-11.1);

	this.instance_2 = new lib.hero3_lips3_img();
	this.instance_2.setTransform(-21.6,-11.1);

	this.instance_3 = new lib.hero3_lips4_img();
	this.instance_3.setTransform(-21.6,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.6,-11.1,42,22);
p.frameBounds = [rect, rect, rect, rect];


(lib.hero3_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero3_hair1_img();
	this.instance.setTransform(-78,-30);

	this.instance_1 = new lib.hero3_hair2_img();
	this.instance_1.setTransform(-30,-26);

	this.instance_2 = new lib.hero3_hair3_img();
	this.instance_2.setTransform(-37,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-30,150,209);
p.frameBounds = [rect, new cjs.Rectangle(-30,-26,61,57), new cjs.Rectangle(-37,-36,62,77)];


(lib.hero3_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe1_img();
	this.instance.setTransform(-52,-48.5);

	this.instance_1 = new lib.hero3_fringe2_img();
	this.instance_1.setTransform(-44.5,-44);

	this.instance_2 = new lib.hero3_fringe3_img();
	this.instance_2.setTransform(-45,-44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-48.5,104,97);
p.frameBounds = [rect, new cjs.Rectangle(-44.5,-44,90,78), new cjs.Rectangle(-45,-44.5,81,109)];


(lib.hero3_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyes1_1_img();
	this.instance.setTransform(-45.3,-16.2);

	this.instance_1 = new lib.hero3_eyes1_2_img();
	this.instance_1.setTransform(-42.9,-11.4);

	this.instance_2 = new lib.hero3_eyes1_3_img();
	this.instance_2.setTransform(-43.1,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.3,-16.2,89,37);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-42.9,-11.4,86,32), rect, rect=new cjs.Rectangle(-43.1,-5.9,86,18), rect, rect=new cjs.Rectangle(-42.9,-11.4,86,32), rect, rect=new cjs.Rectangle(-45.3,-16.2,89,37), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_eyebrows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyebrows_img();
	this.instance.setTransform(-43.9,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.9,-6,88,12);
p.frameBounds = [rect];


(lib.hero3_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(48.8,-207.7);

	this.instance_1 = new lib.hero3_dress2_img();
	this.instance_1.setTransform(147.5,-192.1);

	this.instance_2 = new lib.hero3_dress3_img();
	this.instance_2.setTransform(60,-187.8);

	this.instance_3 = new lib.hero3_dress4_img();
	this.instance_3.setTransform(120.7,-191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(48.8,-207.7,395,460);
p.frameBounds = [rect, new cjs.Rectangle(147.5,-192.1,203,402), new cjs.Rectangle(60,-187.8,390,405), new cjs.Rectangle(120.7,-191,233,410)];


(lib.hero3_bag_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgDGCQhJgTh4gxQhogqg/hXQg/hZAAhpQAAhIAqhVQAnhTA5gxQBIg9BIgbQBHgaBWAAQCRAACDA3QCEA4AABBQAAAtgUAcQgRAZgVAAQgcAAg/gkIhCglIgGgCIgIABIgHACIgxAcQguAbgEAJQgEAKAMAFQALADAIAAQALABAOgHIABAAQgJAGgMAKIgiAkQgWAZgNAKIgPAPQgKAJABAFQAAAMAKACIAMAGIADABQADAEAFAEQAJAEAJAAQAOABAYgTIAWgPIg0A6QAAAKAMAHQAJAEANgCQAMgCASgVIAhgmQAsAEARADQAcAGAKAZQASAwAGAIQATAeApgBQANAAANgFIAfgPQAGAYAAAKIgCBAQgCA/gQAlQgJAYgiAZQgKAIgrAZQgQALgwAHQgtAHgpAAQhQAAhUgYgACgiFQAGgEAMgNQALgKAKAAQAGAAAPAIIATAMQAAADALAEQgUAEgbAAQgagBgRACg");
	mask.setTransform(-42.5,-43.1);

	// Слой 3
	this.instance = new lib.hero3_bag4_img();
	this.instance.setTransform(-53.5,-68);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-68,39,54);
p.frameBounds = [rect];


(lib.hero3_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ap8OGIAA8LIM3AAIAAGfIHCAAIAAVsgAimpLQgVAggBAkQAAAlAPAXQARAZAfAAQARAAAtgIQAvgHAKgFQgHgxgBgVQgBgVhCgkQgigUgXAAQgTAAgJAOg");
	var mask_graphics_1 = new cjs.Graphics().p("Ap8OGIAA8LIM3AAIBEFqIF+A1IAAVsgAimpLQgVAggBAkQAAAlAPAXQARAZAfAAQARAAAtgIIAPgCIA4AAQAFgEAQgjQAJgUAEgNIAGgMQASgkg1gCQg0gBgQABIgagPQgigUgXAAQgTAAgJAOg");
	var mask_graphics_2 = new cjs.Graphics().p("AgDGCQhJgTh4gxQhogqg/hXQg/hZAAhpQAAhIAqhVQAnhTA5gxQBIg9BIgbQBHgaBWAAQCRAACDA3QCEA4AABBQAAAtgUAcQgRAZgVAAQgcAAg/gkIhCglIgGgCIgIABIgHACIgxAcQguAbgEAJQgEAKAMAFQALADAIAAQALABAOgHIABAAQgJAGgMAKIgiAkQgWAZgNAKIgPAPQgKAJABAFQAAAMAKACIAMAGIADABQADAEAFAEQAJAEAJAAQAOABAYgTIAWgPIg0A6QAAAKAMAHQAJAEANgCQAMgCASgVIAhgmQAsAEARADQAcAGAKAZQASAwAGAIQATAeApgBQANAAANgFIAfgPQAGAYAAAKIgCBAQgCA/gQAlQgJAYgiAZQgKAIgrAZQgQALgwAHQgtAHgpAAQhQAAhUgYgACgiFQAGgEAMgNQALgKAKAAQAGAAAPAIIATAMQAAADALAEQgUAEgbAAQgagBgRACg");
	var mask_graphics_3 = new cjs.Graphics().p("AgDGCQhJgTh4gxQhogqg/hXQg/hZAAhpQAAhIAqhVQAnhTA5gxQBIg9BIgbQBHgaBWAAQCRAACDA3QCEA4AABBQAAAtgUAcQgRAZgVAAQgcAAg/gkIhCglIgGgCIgIABIgHACIgxAcQguAbgEAJQgEAKAMAFQALADAIAAQALABAOgHIABAAQgJAGgMAKIgiAkQgWAZgNAKIgPAPQgKAJABAFQAAAMAKACIAMAGIADABQADAEAFAEQAJAEAJAAQAOABAYgTIAWgPIg0A6QAAAKAMAHQAJAEANgCQAMgCASgVIAhgmQAsAEARADQAcAGAKAZQASAwAGAIQATAeApgBQANAAANgFIAfgPQAGAYAAAKIgCBAQgCA/gQAlQgJAYgiAZQgKAIgrAZQgQALgwAHQgtAHgpAAQhQAAhUgYgACgiFQAGgEAMgNQALgKAKAAQAGAAAPAIIATAMQAAADALAEQgUAEgbAAQgagBgRACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:4.9,y:12.6}).wait(1).to({graphics:mask_graphics_1,x:4.9,y:12.6}).wait(1).to({graphics:mask_graphics_2,x:-42.5,y:-43.1}).wait(1).to({graphics:mask_graphics_3,x:-42.5,y:-43.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Слой 1
	this.instance = new lib.hero3_bag1_img();
	this.instance.setTransform(-27.3,-48.7);

	this.instance_1 = new lib.hero3_bag2_img();
	this.instance_1.setTransform(-24.8,-48.7);

	this.instance_2 = new lib.hero3_bag3_img();
	this.instance_2.setTransform(-63.8,-73);

	this.instance_3 = new lib.hero3_bag4_img();
	this.instance_3.setTransform(-53.3,-68.1);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.3,-48.7,55,97);
p.frameBounds = [rect, new cjs.Rectangle(-24.8,-48.7,63,92), new cjs.Rectangle(-63.8,-73,54,64), new cjs.Rectangle(-53.3,-68.1,39,54), null];


(lib.hero2_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_shoes1_img();
	this.instance.setTransform(177.9,190.8);

	this.instance_1 = new lib.hero2_shoes2_img();
	this.instance_1.setTransform(178.5,165.1);

	this.instance_2 = new lib.hero2_shoes3_img();
	this.instance_2.setTransform(177.5,203);

	this.instance_3 = new lib.hero2_shoes4_img();
	this.instance_3.setTransform(177.5,203);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(177.9,190.8,54,69);
p.frameBounds = [rect, new cjs.Rectangle(178.5,165.1,52,84), rect=new cjs.Rectangle(177.5,203,53,53), rect, null];


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows_1_img();
	this.instance.setTransform(-38.4,-11.1);

	this.instance_1 = new lib.hero2_shadows_2_img();
	this.instance_1.setTransform(-38.4,-11.1);

	this.instance_2 = new lib.hero2_shadows_3_img();
	this.instance_2.setTransform(-38.4,-11.1);

	this.instance_3 = new lib.hero2_shadows_4_img();
	this.instance_3.setTransform(-38.4,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.4,-11.1,77,22);
p.frameBounds = [rect, rect, rect, rect, null];


(lib.hero2_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge_1_img();
	this.instance.setTransform(-45.8,-18.8);

	this.instance_1 = new lib.hero2_rouge_2_img();
	this.instance_1.setTransform(-45.8,-18.8);

	this.instance_2 = new lib.hero2_rouge_3_img();
	this.instance_2.setTransform(-45.8,-18.8);

	this.instance_3 = new lib.hero2_rouge_4_img();
	this.instance_3.setTransform(-45.8,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-18.8,92,38);
p.frameBounds = [rect, rect, rect, rect, null];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-20.6,-12.1);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-20.6,-12.1);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-20.6,-12.1);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-20.6,-12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.6,-12.1,43,24);
p.frameBounds = [rect, rect, rect, rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-23,-54);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-63,-79);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-71,-63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-54,63,93);
p.frameBounds = [rect, new cjs.Rectangle(-63,-79,133,243), new cjs.Rectangle(-71,-63,117,174)];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-47,-76.5);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-49,-75.5);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-17,-70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-76.5,94,153);
p.frameBounds = [rect, new cjs.Rectangle(-49,-75.5,99,167), new cjs.Rectangle(-17,-70.5,57,76)];


(lib.hero2_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_1_img();
	this.instance.setTransform(-49.3,-20.6);

	this.instance_1 = new lib.hero2_eyes1_2_img();
	this.instance_1.setTransform(-44,-13.7);

	this.instance_2 = new lib.hero2_eyes1_3_img();
	this.instance_2.setTransform(-42.5,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.3,-20.6,96,38);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-44,-13.7,88,29), rect, rect=new cjs.Rectangle(-42.5,-4.2,85,19), rect, rect=new cjs.Rectangle(-44,-13.7,88,29), rect, rect=new cjs.Rectangle(-49.3,-20.6,96,38), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows_img();
	this.instance.setTransform(-42.5,-9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-9.4,85,19);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero2_dress_1_img();
	this.instance.setTransform(58.1,-198.2);

	this.instance_1 = new lib.hero2_dress_2_img();
	this.instance_1.setTransform(90.8,-198.5);

	this.instance_2 = new lib.hero2_dress_3_img();
	this.instance_2.setTransform(58.9,-200.4);

	this.instance_3 = new lib.hero2_dress_4_img();
	this.instance_3.setTransform(108.3,-191.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(58.1,-198.2,314,438);
p.frameBounds = [rect, new cjs.Rectangle(90.8,-198.5,272,431), new cjs.Rectangle(58.9,-200.4,307,440), new cjs.Rectangle(108.3,-191.2,203,349)];


(lib.hero2_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqWOsIAA9WIKrAAIAAD0IGkAAQG7Kvm7OzgAjUniQAVArAnAuQAfAlAdAXQgFAMAAAEQAFAAAAAEQAHgCAHgHQAVgTAXg2QAbg+AAgVQAAgSgVg2IgXg8QhzBXguApg");
	var mask_graphics_1 = new cjs.Graphics().p("AqWOsIAA9WIKrAAIAAD0IGkAAQG7Kvm7OzgAjUniQAVArAnAuQAfAlAdAXQgFAMAAAEQAFAAAAAEQAHgCAHgHQAVgTAXg2QAbg+AAgVQAAgSgVg2IgXg8QhzBXguApg");
	var mask_graphics_3 = new cjs.Graphics().p("AqWOsIAA9WIKrAAIAAD0IGkAAQG7Kvm7OzgAjUniQAVArAnAuQAaAfAqAuIAPgJIBDgtQAwghgcgzQgZgzgUgvIgYg6QhzBXguApg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:141.9,y:-73.6}).wait(1).to({graphics:mask_graphics_1,x:141.9,y:-73.6}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_3,x:141.9,y:-73.6}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Слой 5
	this.instance = new lib.hero2_bag1_img();
	this.instance.setTransform(95.8,-129.4);

	this.instance_1 = new lib.hero2_bag2_img();
	this.instance_1.setTransform(114.8,-127.4);

	this.instance_2 = new lib.hero2_bag3_img();
	this.instance_2.setTransform(139.5,-115.9);

	this.instance_3 = new lib.hero2_bag4_img();
	this.instance_3.setTransform(109,-119);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(95.8,-129.4,54,81);
p.frameBounds = [rect, new cjs.Rectangle(114.8,-127.4,37,90), new cjs.Rectangle(139.5,-115.9,61,51), new cjs.Rectangle(109,-119,50,62), null];


(lib.hero1_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.hero1_shoes1_img();
	this.instance.setTransform(152.7,191);

	this.instance_1 = new lib.hero1_shoes2_img();
	this.instance_1.setTransform(153.3,166.4);

	this.instance_2 = new lib.hero1_shoes3_img();
	this.instance_2.setTransform(152.7,191);

	this.instance_3 = new lib.hero1_shoes4_img();
	this.instance_3.setTransform(152.8,147.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(152.7,191,54,75);
p.frameBounds = [rect, new cjs.Rectangle(153.3,166.4,52,89), new cjs.Rectangle(152.7,191,54,75), new cjs.Rectangle(152.8,147.5,51,105), null];


(lib.hero1_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows_1_img();
	this.instance.setTransform(-38.4,-11.1);

	this.instance_1 = new lib.hero1_shadows_2_img();
	this.instance_1.setTransform(-38.4,-11.1);

	this.instance_2 = new lib.hero1_shadows_3_img();
	this.instance_2.setTransform(-38.4,-11.1);

	this.instance_3 = new lib.hero1_shadows_4_img();
	this.instance_3.setTransform(-38.4,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.4,-11.1,77,22);
p.frameBounds = [rect, rect, rect, rect, null];


(lib.hero1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge_1_img();
	this.instance.setTransform(-45.8,-18.8);

	this.instance_1 = new lib.hero1_rouge_2_img();
	this.instance_1.setTransform(-45.8,-18.8);

	this.instance_2 = new lib.hero1_rouge_3_img();
	this.instance_2.setTransform(-45.8,-18.8);

	this.instance_3 = new lib.hero1_rouge_4_img();
	this.instance_3.setTransform(-45.8,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-18.8,92,38);
p.frameBounds = [rect, rect, rect, rect, null];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-20.9,-11.5);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-20.5,-9.2);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-20.5,-9.2);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-20.5,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.9,-11.5,42,23);
p.frameBounds = [rect, rect=new cjs.Rectangle(-20.5,-9.2,41,19), rect, rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-56,-65);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-30,-34);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-63,-74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-65,110,142);
p.frameBounds = [rect, new cjs.Rectangle(-30,-34,64,51), new cjs.Rectangle(-63,-74,136,205)];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-52,-71.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-35,-67.9);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-23,-65.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-71.5,104,143);
p.frameBounds = [rect, new cjs.Rectangle(-35,-67.9,69,213), new cjs.Rectangle(-23,-65.9,53,49)];


(lib.hero1_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_1_img();
	this.instance.setTransform(-45.2,-22.8);

	this.instance_1 = new lib.hero1_eyes1_2_img();
	this.instance_1.setTransform(-43.6,-11.8);

	this.instance_2 = new lib.hero1_eyes1_3_img();
	this.instance_2.setTransform(-43.9,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.2,-22.8,94,43);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-43.6,-11.8,89,24), rect, rect=new cjs.Rectangle(-43.9,-3.8,87,15), rect, rect=new cjs.Rectangle(-43.6,-11.8,89,24), rect, rect=new cjs.Rectangle(-45.2,-22.8,94,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows_img();
	this.instance.setTransform(-42.5,-9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-9.4,85,19);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(32.8,-196);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(46,-177.3);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(41.5,-197.3);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(68.5,-187.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(32.8,-196,371,443);
p.frameBounds = [rect, new cjs.Rectangle(46,-177.3,280,424), new cjs.Rectangle(41.5,-197.3,291,428), new cjs.Rectangle(68.5,-187.1,260,417)];


(lib.hero1_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqpNNIAA6YIR8AAIAAEYIDXAAIAAWAgABUoHQgFAegBAYQAAA2AMAfQAJAZAeAqIAEAAQAAgVAlhBQAmhBgSgwQgTgwgCgPQg1AhggAXg");
	var mask_graphics_1 = new cjs.Graphics().p("AqpNNIAA6YIR8AAIAAEYIDXAAIAAWAgABUoHQgFAegBAYQAAA2AMAfQAJAZAeAqIAEAAQAAgVAlhBQAmhBgSgwQgTgwgCgPQg1AhggAXg");
	var mask_graphics_2 = new cjs.Graphics().p("ApbLIIAA2PIPbAAIAADSIDcAAIAAS9g");
	var mask_graphics_3 = new cjs.Graphics().p("ApbLIIAA2PIPbAAIAADSIDcAAIAAS9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:106.6,y:-7}).wait(1).to({graphics:mask_graphics_1,x:106.6,y:-7}).wait(1).to({graphics:mask_graphics_2,x:265.8,y:-3.8}).wait(1).to({graphics:mask_graphics_3,x:265.8,y:-3.8}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Слой 4
	this.instance = new lib.hero1_bag1_img();
	this.instance.setTransform(77.7,-58.5);

	this.instance_1 = new lib.hero1_bag2_img();
	this.instance_1.setTransform(99.2,-60.1);

	this.instance_2 = new lib.hero1_bag3_img();
	this.instance_2.setTransform(229.1,-37.4);

	this.instance_3 = new lib.hero1_bag4_img();
	this.instance_3.setTransform(222.3,-35.8);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(77.7,-58.5,49,107);
p.frameBounds = [rect, new cjs.Rectangle(99.2,-60.1,38,81), new cjs.Rectangle(229.1,-37.4,61,56), new cjs.Rectangle(222.3,-35.8,74,51), null];


(lib.hanger_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger2_img();
	this.instance.setTransform(-57.4,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.4,-38.5,98,66);
p.frameBounds = [rect];


(lib.hanger_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger_img();
	this.instance.setTransform(-57.4,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.4,-38.5,98,66);
p.frameBounds = [rect];


(lib.g1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1_rouge_1_img();
	this.instance.setTransform(-45.8,-18);

	this.instance_1 = new lib.g1_rouge_2_img();
	this.instance_1.setTransform(-45.8,-18.8);

	this.instance_2 = new lib.g1_rouge_3_img();
	this.instance_2.setTransform(-45.8,-18.8);

	this.instance_3 = new lib.g1_rouge_4_img();
	this.instance_3.setTransform(-45.8,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-18,92,36);
p.frameBounds = [rect, rect=new cjs.Rectangle(-45.8,-18.8,92,38), rect, rect, null];


(lib.decor_background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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


(lib.blush_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_10_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_10_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_10_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_10_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_9_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_9_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_9_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_9_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_2_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_2_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_2_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_2_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDNkhAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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


(lib.accessory_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_bag4_img();
	this.instance.setTransform(-23.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");
	this.shape.setTransform(0,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-47.5,90,90);
p.frameBounds = [rect];


(lib.accessory_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bag4_img();
	this.instance.setTransform(-32.8,-5.3,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHBIAAuCIODAAIAAOCg");
	this.shape.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-48,90,90);
p.frameBounds = [rect];


(lib.accessory_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag4_img();
	this.instance.setTransform(-25,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGQIAAseIMdAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.accessory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag4_img();
	this.instance.setTransform(-37,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGPIAAsdIPnAAIAAMdg");
	this.shape.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-42,100,80);
p.frameBounds = [rect];


(lib.accessory_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_bag3_img();
	this.instance.setTransform(-24,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");
	this.shape.setTransform(0,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-47.5,90,90);
p.frameBounds = [rect];


(lib.accessory_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bag3_img();
	this.instance.setTransform(-40.3,11.3,1,1,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHBIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag3_img();
	this.instance.setTransform(-19,-34.9,1,1,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGPIAAsdIMdAAIAAMdg");
	this.shape.setTransform(0,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-46,80,80.9);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag3_img();
	this.instance.setTransform(-40.4,-8.9,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGPIAAsdIMdAAIAAMdg");
	this.shape.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.4,-43,80.9,82.6);
p.frameBounds = [rect];


(lib.accessory_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_bag2_img();
	this.instance.setTransform(-26.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHBIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.accessory_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bag2_img();
	this.instance.setTransform(-31.5,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOImIAAxKIMdAAIAARKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag2_img();
	this.instance.setTransform(29.7,-38.5,1,1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGPIAAseIPmAAIAAMeg");
	this.shape.setTransform(0.1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-38.5,100,84);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag2_img();
	this.instance.setTransform(-44,7.9,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao6gpICMlnIOlCuIBECuIjUGiIiZAjg");
	this.shape.setTransform(2.7,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.4,-38.3,114.3,80.4);
p.frameBounds = [rect];


(lib.accessory_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_bag1_img();
	this.instance.setTransform(-26.5,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");
	this.shape.setTransform(0,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-47.5,90,90);
p.frameBounds = [rect];


(lib.accessory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bag1_img();
	this.instance.setTransform(-27.5,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOJXIAAyuIMdAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-60,80,120);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag1_img();
	this.instance.setTransform(9.5,-47.7,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokGPIAAsdIRJAAIAAMdg");
	this.shape.setTransform(4,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-47.7,110,96.2);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag1_img();
	this.instance.setTransform(35.1,-54.7,1,1,59.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnNGtIjvooIBrjIITghsIAuF2Iu9Hpg");
	this.shape.setTransform(0.1,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-54.7,140.3,105.9);
p.frameBounds = [rect];


(lib.curtain_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-400,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-300,800,600);
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
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
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
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.play_again_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_img();
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_img();
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.next_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_img();
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.nav_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_0_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_img();
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.more_games_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_4_2_img();
	this.instance.setTransform(-62.8,-63.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.8,-63.4,126.7,126.7);
p.frameBounds = [rect];


(lib.more_games_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_3_2_img();
	this.instance.setTransform(-111,-106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-106.5,222,213);
p.frameBounds = [rect];


(lib.more_games_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_1_2_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.more_games_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_2_2_img();
	this.instance.setTransform(175.9,-99.4,0.879,0.879);

	this.instance_1 = new lib.more_games_2_2_img();
	this.instance_1.setTransform(175.9,-99.4,0.879,0.879,0,0,180);

	this.instance_2 = new lib.more_games_2_2_img();
	this.instance_2.setTransform(-527.6,-99.4,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-527.6,-99.4,1055.3,198.8);
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
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
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
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
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


(lib.wardrobe_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_1_mc();
	this.instance.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_2_1_mc();
	this.instance_1.setTransform(0,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-170,280,340);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// animation
	this.instance_1 = new lib.title_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.398},39).to({alpha:1},40).wait(1));

	// animation
	this.instance_2 = new lib.title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-155,490,310);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.514,0.514,0,0,0,0.1,-0.2);

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


(lib.hero4_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero4_bag_main_mc();
	this.instance.setTransform(-21.4,126.9,1,1,0,0,0,190.1,-135.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fringe
	this.instance_1 = new lib.hero4_fringe1_img();
	this.instance_1.setTransform(42.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero4_eyes1
	this.instance_2 = new lib.hero4_eyes1_mc();
	this.instance_2.setTransform(91.6,51.1,0.5,0.5,0,-0.3,179.7,1.3,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hero4_eyebrows
	this.instance_3 = new lib.hero4_eyebrows_mc();
	this.instance_3.setTransform(91.9,44.9,0.5,0.5,0,-0.3,179.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hero4_lips_all
	this.instance_4 = new lib.hero4_lips4_img();
	this.instance_4.setTransform(103.9,68.6,0.5,0.5,0,-0.3,179.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// hero4_shadows
	this.instance_5 = new lib.hero4_shadows4_img();
	this.instance_5.setTransform(111.6,47.1,0.5,0.5,0,-0.3,179.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// g1_rouge_all
	this.instance_6 = new lib.g1_rouge_4_img();
	this.instance_6.setTransform(115,48.9,0.5,0.5,0,-0.3,179.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// head
	this.instance_7 = new lib.hero4_head_img();
	this.instance_7.setTransform(64.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 6
	this.instance_8 = new lib.hero4_dress2_img();
	this.instance_8.setTransform(-50,91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 5
	this.instance_9 = new lib.hero4_shoes2_img();
	this.instance_9.setTransform(58.9,480.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// body
	this.instance_10 = new lib.hero4_body_img();
	this.instance_10.setTransform(-41.9,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// hair
	this.instance_11 = new lib.hero4_hair1_img();
	this.instance_11.setTransform(52.4,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.2,4.5,301.3,547.3);
p.frameBounds = [rect];


(lib.hero4_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero4_fringe0_img();
	this.instance.setTransform(-153.5,-544.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero4_eyes1_mc();
	this.instance_1.setTransform(-43.2,-453.2,1,1,0,0,0,1.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero4_eyebrows_mc();
	this.instance_2.setTransform(-43.9,-465.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// lips
	this.lips = new lib.hero4_lips_all_mc();
	this.lips.setTransform(-47.1,-408);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// shadows
	this.shadows = new lib.hero4_shadows_mc();
	this.shadows.setTransform(-44.8,-451.9);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero4_rouge_all_mc();
	this.blush.setTransform(-44.4,-439);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_3 = new lib.hero4_headfm_img();
	this.instance_3.setTransform(-93.4,-528.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.hero4_dress0_img();
	this.instance_4.setTransform(-241.7,-363.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.hero4_bodyfm_img();
	this.instance_5.setTransform(-223,-412.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.hero4_hair0_img();
	this.instance_6.setTransform(-128.5,-533);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-241.7,-544.5,465.7,572);
p.frameBounds = [rect];


(lib.hero3_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bag
	this.instance = new lib.hero3_bag_main_mc();
	this.instance.setTransform(66.9,221.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fringe
	this.instance_1 = new lib.hero3_fringe2_img();
	this.instance_1.setTransform(51,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hands
	this.instance_2 = new lib.hero3_hands2_img();
	this.instance_2.setTransform(26.5,153.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hero3_lips_all
	this.instance_3 = new lib.hero3_lips2_img();
	this.instance_3.setTransform(105.5,67.9,0.5,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hero3_eyes1
	this.instance_4 = new lib.hero3_eyes1_mc();
	this.instance_4.setTransform(97,53,0.5,0.5,0,0,180,-0.8,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// hero3_eyebrow
	this.instance_5 = new lib.hero3_eyebrows_mc();
	this.instance_5.setTransform(97,45.3,0.5,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// hero3_shadow_all
	this.instance_6 = new lib.hero3_shadows_3_img();
	this.instance_6.setTransform(115.8,46.6,0.5,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// hero3_roug_all
	this.instance_7 = new lib.hero3_rouge_2_img();
	this.instance_7.setTransform(119.4,50.7,0.5,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// head
	this.instance_8 = new lib.hero3_head_img();
	this.instance_8.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 6
	this.instance_9 = new lib.hero3_dress4_img();
	this.instance_9.setTransform(-30.8,115.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 5
	this.instance_10 = new lib.hero3_shoes4_img();
	this.instance_10.setTransform(60.5,438.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// body
	this.instance_11 = new lib.hero3_body_img();
	this.instance_11.setTransform(0,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// hb
	this.instance_12 = new lib.hero3_hair2_img();
	this.instance_12.setTransform(65.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.8,5,233,539.3);
p.frameBounds = [rect];


(lib.hero3_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero3_fringe0_img();
	this.instance.setTransform(-136,-547);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero3_hands1_img();
	this.instance_1.setTransform(-122.9,-252.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all_mc();
	this.lips.setTransform(-31.3,-412.5,1,1,0,0,0,2.9,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.hero3_eyes1_mc();
	this.instance_2.setTransform(-38.8,-453.1,1,1,0,0,0,-0.8,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.hero3_eyebrows_mc();
	this.instance_3.setTransform(-39,-468.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all_mc();
	this.shadows.setTransform(-38,-455.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all_mc();
	this.blush.setTransform(-38,-441.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_4 = new lib.hero3_headfm_img();
	this.instance_4.setTransform(-88.1,-531.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.hero3_dress0_img();
	this.instance_5.setTransform(-180.4,-329);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.hero3_bodyfm_img();
	this.instance_6.setTransform(-130,-416.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// body
	this.instance_7 = new lib.hero3_hair0_img();
	this.instance_7.setTransform(-173.5,-521.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.4,-547,304,619);
p.frameBounds = [rect];


(lib.hero2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero2_bag3_img();
	this.instance.setTransform(20.9,177.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.hero2_fringe1_img();
	this.instance_1.setTransform(38.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero2_eyes1
	this.instance_2 = new lib.hero2_eyes1_mc();
	this.instance_2.setTransform(96.2,50.3,0.5,0.5,0,0,0,-1.2,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hero2_eyebrow
	this.instance_3 = new lib.hero2_eyebrows_mc();
	this.instance_3.setTransform(97,46.5,0.5,0.5,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hero2_shadow_all
	this.instance_4 = new lib.hero2_shadows_2_img();
	this.instance_4.setTransform(77.3,45.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// hero2_lips_all
	this.instance_5 = new lib.hero2_lips3_img();
	this.instance_5.setTransform(84.1,67.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// hero2_roug_all
	this.instance_6 = new lib.hero2_rouge_3_img();
	this.instance_6.setTransform(73.6,49.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// head
	this.instance_7 = new lib.hero2_head_img();
	this.instance_7.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 8
	this.instance_8 = new lib.hero2_dress_3_img();
	this.instance_8.setTransform(-59.1,93.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 7
	this.instance_9 = new lib.hero2_shoes3_img();
	this.instance_9.setTransform(59.9,492.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// body
	this.instance_10 = new lib.hero2_body_img();
	this.instance_10.setTransform(-8.1,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// hb
	this.instance_11 = new lib.hero2_hair1_img();
	this.instance_11.setTransform(62.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.1,2.5,307,543.3);
p.frameBounds = [rect];


(lib.hero2_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-88,-550.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero2_eyes1_mc();
	this.instance_1.setTransform(23.3,-458.1,1,1,0,0,0,-1.3,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero2_eyebrows_mc();
	this.instance_2.setTransform(25,-465.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(23.9,-455.9);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(19.7,-410.9);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(24.1,-441.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_3 = new lib.hero2_headfm_img();
	this.instance_3.setTransform(-23,-531.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.hero2_dress_0_img();
	this.instance_4.setTransform(-130,-367.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.hero2_bodyfm_img();
	this.instance_5.setTransform(-185.2,-416.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.hero2_hair0_img();
	this.instance_6.setTransform(-37.5,-508.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.2,-550.5,359.2,629);
p.frameBounds = [rect];


(lib.hero1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlkJDIAAyGIH3AAIAAC/IDSAAIAAPHgAg7mNQgeAegBAaQABAiAKAkQALAiATAcQAAgrAnhAIAng4QAAgJgPgdQgOgcgEgGQgvAmgIAJg");
	mask.setTransform(29.1,268.6);

	// Слой 6
	this.instance = new lib.hero1_bag2_img();
	this.instance.setTransform(5.4,229.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.hero1_fringe1_img();
	this.instance_1.setTransform(42.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero1_eyes1
	this.instance_2 = new lib.hero1_eyes1_mc();
	this.instance_2.setTransform(97.6,51.2,0.5,0.5,0,0,0,2,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hero1_eyebrow
	this.instance_3 = new lib.hero1_eyebrows_mc();
	this.instance_3.setTransform(97,46.6,0.5,0.5,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hero1_shadow_all
	this.instance_4 = new lib.hero1_shadows_2_img();
	this.instance_4.setTransform(77.3,45.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// hero1_lips_all
	this.instance_5 = new lib.hero1_lips1_img();
	this.instance_5.setTransform(84.1,68.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// hero1_roug_all
	this.instance_6 = new lib.hero1_rouge_1_img();
	this.instance_6.setTransform(73.6,49.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// head
	this.instance_7 = new lib.hero1_head_img();
	this.instance_7.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 8
	this.instance_8 = new lib.hero1_dress2_img();
	this.instance_8.setTransform(-47.5,112.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 7
	this.instance_9 = new lib.hero1_shoes2_img();
	this.instance_9.setTransform(59.9,455.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// body
	this.instance_10 = new lib.hero1_body_img();
	this.instance_10.setTransform(0,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// hb
	this.instance_11 = new lib.hero1_hair1_img();
	this.instance_11.setTransform(38.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,4.5,280,540.3);
p.frameBounds = [rect];


(lib.hero1_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_fringe0_img();
	this.instance.setTransform(-90,-548.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyes1_mc();
	this.instance_1.setTransform(20.5,-456.4,1,1,0,0,0,2,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero1_eyebrows_mc();
	this.instance_2.setTransform(19.3,-465.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(18.2,-455.9);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(14.5,-411.2);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(18.4,-441.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_3 = new lib.hero1_headfm_img();
	this.instance_3.setTransform(-29,-531.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.hero1_dress0_img();
	this.instance_4.setTransform(-143.8,-371);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.hero1_bodyfm_img();
	this.instance_5.setTransform(-134.1,-416.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.hero1_hair0_img();
	this.instance_6.setTransform(-94,-518.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.8,-548.5,360,592.5);
p.frameBounds = [rect];


(lib.hero_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero4_bag_all_mc();
	this.accessory.setTransform(-21.4,126.9,1,1,0,0,0,190.1,-135.7);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero4_fringe_all_mc();
	this.fringe.setTransform(94.2,109);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero4_eyes1_mc();
	this.instance.setTransform(91.6,51.1,0.5,0.5,0,-0.3,179.7,1.3,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero4_eyebrows_mc();
	this.instance_1.setTransform(91.9,44.9,0.5,0.5,0,-0.3,179.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero4_lips_all_mc();
	this.lips.setTransform(93.6,73.5,0.5,0.5,0,-0.3,179.7);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// shadows
	this.shadows = new lib.hero4_shadows_mc();
	this.shadows.setTransform(92.3,51.6,0.5,0.5,0,-0.3,179.7);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.g1_rouge_all_mc();
	this.blush.setTransform(92.1,58.1,0.5,0.5,0,-0.3,179.7);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero4_head_img();
	this.instance_2.setTransform(64.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dress
	this.dress = new lib.hero4_dress_all_mc();
	this.dress.setTransform(96.3,318.2,1,1,0,0,0,307.8,55.6);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero4_shoes_all_mc();
	this.shoes.setTransform(86.5,503.7,1,1,0,0,0,298,241.1);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_3 = new lib.hero4_body_img();
	this.instance_3.setTransform(-41.9,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hair
	this.hair = new lib.hero4_hair_all_mc();
	this.hair.setTransform(94.2,109);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.2,4.5,343.1,541.6);
p.frameBounds = [rect];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero3_bag_all_mc();
	this.accessory.setTransform(66.9,221.7);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero3_fringe_all_mc();
	this.fringe.setTransform(95.5,49);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero3_hands2_img();
	this.instance.setTransform(26.5,153.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all_mc();
	this.lips.setTransform(93.2,73.3,0.5,0.5,0,0,180,2.9,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.hero3_eyes1_mc();
	this.instance_1.setTransform(97,53,0.5,0.5,0,0,180,-0.8,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero3_eyebrows_mc();
	this.instance_2.setTransform(97,45.3,0.5,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all_mc();
	this.shadows.setTransform(96.6,51.9,0.5,0.5,0,0,180,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all_mc();
	this.blush.setTransform(96.6,58.8,0.5,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_3 = new lib.hero3_head_img();
	this.instance_3.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// dress
	this.dress = new lib.hero3_dress_all_mc();
	this.dress.setTransform(94.5,318.1,1,1,0,0,0,246,12);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero3_shoes_all_mc();
	this.shoes.setTransform(87.1,523.2,1,1,0,0,0,238.6,217.1);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_4 = new lib.hero3_body_img();
	this.instance_4.setTransform(0,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// hair
	this.hair = new lib.hero3_hair_all_mc();
	this.hair.setTransform(95.5,49);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.7,0.5,395,557.9);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero2_bag_all_mc();
	this.accessory.setTransform(6.8,208.7,1,1,0,0,0,125.2,-85);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(85.5,79);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero2_eyes1_mc();
	this.instance.setTransform(96.2,50.3,0.5,0.5,0,0,0,-1.2,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero2_eyebrows_mc();
	this.instance_1.setTransform(97,46.5,0.5,0.5,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(96.5,51.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(94.4,73.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(96.5,58.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero2_head_img();
	this.instance_2.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(96.8,324.6,1,1,0,0,0,215.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero2_shoes_all_mc();
	this.shoes.setTransform(86.4,519.1,1,1,0,0,0,204.8,225.4);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_3 = new lib.hero2_body_img();
	this.instance_3.setTransform(-8.1,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(85.5,79);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,2.5,314,550.9);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero1_bag_all_mc();
	this.accessory.setTransform(8.9,284.6,1,1,0,0,0,102.4,-5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(94.5,76);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero1_eyes1_mc();
	this.instance.setTransform(97.6,51.2,0.5,0.5,0,0,0,2,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyebrows_mc();
	this.instance_1.setTransform(97,46.6,0.5,0.5,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(96.5,51.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(94.6,73.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(96.5,58.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.hero1_head_img();
	this.instance_2.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(128.5,320.6,1,1,0,0,0,222,31);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero1_shoes_all_mc();
	this.shoes.setTransform(90.5,525.6,1,1,0,0,0,184,236);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_3 = new lib.hero1_body_img();
	this.instance_3.setTransform(0,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(94.5,76);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.7,4.5,371,551.2);
p.frameBounds = [rect];


(lib.h4_d4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress2.png
	this.instance = new lib.hero4_dress4_img();
	this.instance.setTransform(-158,-202.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_2_mc();
	this.instance_1.setTransform(-6.7,-198.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158,-230.5,321,432.2);
p.frameBounds = [rect];


(lib.h4_d3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress1.png
	this.instance = new lib.hero4_dress3_img();
	this.instance.setTransform(-193.5,-200.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-35.7,-203.2,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193.5,-235.3,316,473.7);
p.frameBounds = [rect];


(lib.h4_d2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress2.png
	this.instance = new lib.hero4_dress2_img();
	this.instance.setTransform(-145,-207.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_2_mc();
	this.instance_1.setTransform(-6.7,-198.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-230.5,276,435.2);
p.frameBounds = [rect];


(lib.h4_d1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress1.png
	this.instance = new lib.hero4_dress1_img();
	this.instance.setTransform(-198.5,-198.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-35.7,-203.2,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-198.5,-235.3,341,458.7);
p.frameBounds = [rect];


(lib.h3_d4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress2.png
	this.instance = new lib.hero3_dress4_img();
	this.instance.setTransform(-122,-196.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_2_mc();
	this.instance_1.setTransform(-6.7,-198.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122,-230.5,233,444.2);
p.frameBounds = [rect];


(lib.h3_d3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress1.png
	this.instance = new lib.hero3_dress3_img();
	this.instance.setTransform(-211.5,-201.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_2_mc();
	this.instance_1.setTransform(-35.7,-203.2,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211.5,-235.3,390,438.7);
p.frameBounds = [rect];


(lib.h3_d2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress2.png
	this.instance = new lib.hero3_dress2_img();
	this.instance.setTransform(-97,-201.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_2_mc();
	this.instance_1.setTransform(-6.7,-198.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-230.5,203,431.2);
p.frameBounds = [rect];


(lib.h3_d1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress1.png
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(-226.5,-194.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-35.7,-203.2,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.5,-235.3,395,500.7);
p.frameBounds = [rect];


(lib.h2_d4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress2.png
	this.instance = new lib.hero2_dress_4_img();
	this.instance.setTransform(-106,-200.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_2_mc();
	this.instance_1.setTransform(-6.7,-198.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-230.5,203,379.2);
p.frameBounds = [rect];


(lib.h2_d3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress1.png
	this.instance = new lib.hero2_dress_3_img();
	this.instance.setTransform(-185.5,-209.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-35.7,-203.2,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.5,-235.3,307,465.7);
p.frameBounds = [rect];


(lib.h2_d2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress2.png
	this.instance = new lib.hero2_dress_2_img();
	this.instance.setTransform(-123,-197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_2_mc();
	this.instance_1.setTransform(-6.7,-198.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123,-230.5,272,464.2);
p.frameBounds = [rect];


(lib.h2_d1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress1.png
	this.instance = new lib.hero2_dress_1_img();
	this.instance.setTransform(-185.5,-216.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_2_mc();
	this.instance_1.setTransform(-35.7,-203.2,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.5,-235.3,314,456.7);
p.frameBounds = [rect];


(lib.h1_d4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress2.png
	this.instance = new lib.hero1_dress4_img();
	this.instance.setTransform(-118,-207.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_2_mc();
	this.instance_1.setTransform(-6.7,-198.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118,-230.5,260,440.2);
p.frameBounds = [rect];


(lib.h1_d3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress1.png
	this.instance = new lib.hero1_dress3_img();
	this.instance.setTransform(-177.5,-210.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_1_mc();
	this.instance_1.setTransform(-35.7,-203.2,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177.5,-235.3,291,452.7);
p.frameBounds = [rect];


(lib.h1_d2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress2.png
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-140,-193.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_2_mc();
	this.instance_1.setTransform(-6.7,-198.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-230.5,280,461.2);
p.frameBounds = [rect];


(lib.h1_d1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_dress1.png
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-185.5,-207.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger_2_mc();
	this.instance_1.setTransform(-35.7,-203.2,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.5,-235.3,371,470.7);
p.frameBounds = [rect];


(lib.dress_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_d4_mc();
	this.instance.setTransform(4.5,230.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am7M2IoZurILHsZIHHAAIMbK3IgGEUIonNSg");
	this.shape.setTransform(5.1,83.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-153.5,-8,321,440.2);
p.frameBounds = [rect];


(lib.dress_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d4_mc();
	this.instance.setTransform(5,230.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlGOZIlfuIIB0oUIGFmZIFFAAIGZHCIB0JbIi/Mcg");
	this.shape.setTransform(1.8,82.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-10,233,454.2);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d4_mc();
	this.instance.setTransform(4.5,230.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ak/YVMgHngkhIO7sIICiAAIHwKqMgBuAl/g");
	this.shape.setTransform(-23.6,143.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.3,-12.5,205.9,391.7);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d4_mc();
	this.instance.setTransform(5,230.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap3rFIG6l2IGmgBIGPIMIjDZrIs8ACg");
	this.shape.setTransform(0.1,100.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-7.7,260,447.9);
p.frameBounds = [rect];


(lib.dress_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_d3_mc();
	this.instance.setTransform(34.5,235.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnaM4Ij0rOIDIueIIPgDILGLnIpMOIg");
	this.shape.setTransform(12.3,78);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159,-4.4,316,478.1);
p.frameBounds = [rect];


(lib.dress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d3_mc();
	this.instance.setTransform(33.5,235.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AojmmIGMnLIE5AAIGCJRIjxSLIqcAHg");
	this.shape.setTransform(-1,79.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178,-8.5,390,447.2);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d3_mc();
	this.instance.setTransform(35,235.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AluNgIjqwiIHaqeIEgAAIG3KaIlFQmg");
	this.shape.setTransform(-0.5,80);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.5,-6.5,307,472.2);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d3_mc();
	this.instance.setTransform(34.5,235.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AofXjMgBVgjvIH9raIEMABIHgL3MgCbAjVg");
	this.shape.setTransform(1.2,143.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143,-7.2,291,459.9);
p.frameBounds = [rect];


(lib.dress_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_d2_mc();
	this.instance.setTransform(5,230.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmpORIngt6IH4xCIHPAAINMNJIoUUOg");
	this.shape.setTransform(7.3,100.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-6,276,441.2);
p.frameBounds = [rect];


(lib.dress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d2_mc();
	this.instance.setTransform(5,230.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnhPGIkLx3IG1soIJQAAIHUO+InWP1g");
	this.shape.setTransform(1.8,87.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-11.5,203,442.7);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d2_mc();
	this.instance.setTransform(4.5,230.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqFj8IIVoxIFNACIGpJqImgPuIo/ABg");
	this.shape.setTransform(-4.6,71.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.5,-9.5,272,473.7);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d2_mc();
	this.instance.setTransform(5,230.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApUoiIHcn0IEKgBIHDHvIjhY9IscADg");
	this.shape.setTransform(0.3,97);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-7.9,280,469.1);
p.frameBounds = [rect];


(lib.dress_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_d1_mc();
	this.instance.setTransform(34.5,235.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsSCrIFuv7IHsACILLNBIpeMoIrTA2g");
	this.shape.setTransform(10.5,80.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-164,-4.3,341,463);
p.frameBounds = [rect];


(lib.dress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d1_mc();
	this.instance.setTransform(34.5,235.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsnkrII6qmIHtACIIoPPIpdPOIrkAEg");
	this.shape.setTransform(1,88);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192,-9.8,395,510.5);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d1_mc();
	this.instance.setTransform(34,235.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnLNZIkmz4IIynHII2AAIF7IpIkESkg");
	this.shape.setTransform(-11.9,78.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.5,-9,314,465.7);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d1_mc();
	this.instance.setTransform(34,235.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap6BGICXpxIHPoRID/ABIGKKCIAGXnIvpAPg");
	this.shape.setTransform(-8.8,97.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.5,-11.4,371,482.1);
p.frameBounds = [rect];


(lib.body_check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// animation
	this.instance = new lib.body_check_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5,scaleY:0.5},0).to({scaleX:1.17,scaleY:1.17,alpha:0.898},7).to({scaleX:1,scaleY:1,alpha:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-35.7,-35.7,71.4,71.4), new cjs.Rectangle(-41.4,-41.4,82.9,82.9), new cjs.Rectangle(-47.1,-47.1,94.3,94.3), new cjs.Rectangle(-52.8,-52.8,105.7,105.7), new cjs.Rectangle(-58.5,-58.5,117.2,117.2), new cjs.Rectangle(-64.2,-64.2,128.6,128.6), new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-66.6,-66.6,133.4,133.4), new cjs.Rectangle(-63.3,-63.3,126.7,126.7), new cjs.Rectangle(-60,-60,120,120)];


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
	this.substrate_mc.setTransform(0.1,-0.1,0.514,0.514,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
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
	this.instance.setTransform(-200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-348.7,106.8,302.5,181.5), new cjs.Rectangle(-345,97.1,309.9,186), new cjs.Rectangle(-338.9,81.1,322.2,193.4), new cjs.Rectangle(-330.2,58.6,339.5,203.7), new cjs.Rectangle(-319,29.7,361.7,217.1), new cjs.Rectangle(-305.5,-5.5,388.9,233.4), new cjs.Rectangle(-289.4,-47.2,421,252.6), new cjs.Rectangle(-270.9,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


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
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-57.5,230,115);
p.frameBounds = [rect, new cjs.Rectangle(-120,-60,240,120), new cjs.Rectangle(-115,-57.5,230,115), new cjs.Rectangle(-120,-60,240,120)];


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
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-57.5,230,115);
p.frameBounds = [rect, new cjs.Rectangle(-120,-60,240,120), new cjs.Rectangle(-115,-57.5,230,115), new cjs.Rectangle(-120,-60,240,120)];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_mc();
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-57.5,230,115);
p.frameBounds = [rect, new cjs.Rectangle(-120,-60,240,120), new cjs.Rectangle(-115,-57.5,230,115), new cjs.Rectangle(-120,-60,240,120)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-57.5,230,115);
p.frameBounds = [rect, new cjs.Rectangle(-120,-60,240,120), new cjs.Rectangle(-115,-57.5,230,115), new cjs.Rectangle(-120,-60,240,120)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_mc();
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-57.5,230,115);
p.frameBounds = [rect, new cjs.Rectangle(-120,-60,240,120), new cjs.Rectangle(-115,-57.5,230,115), new cjs.Rectangle(-120,-60,240,120)];


(lib.next_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.next_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96},14).to({scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect, new cjs.Rectangle(-119.6,-59.8,239.3,119.7), new cjs.Rectangle(-119.2,-59.6,238.6,119.3), new cjs.Rectangle(-118.9,-59.4,237.9,118.9), new cjs.Rectangle(-118.5,-59.2,237.2,118.5), new cjs.Rectangle(-118.2,-59,236.5,118.2), new cjs.Rectangle(-117.8,-58.8,235.7,117.8), new cjs.Rectangle(-117.4,-58.6,235,117.4), new cjs.Rectangle(-117.1,-58.5,234.3,117.1), new cjs.Rectangle(-116.7,-58.3,233.6,116.7), new cjs.Rectangle(-116.4,-58.1,232.9,116.3), new cjs.Rectangle(-116,-57.9,232.2,115.9), new cjs.Rectangle(-115.7,-57.7,231.4,115.6), new cjs.Rectangle(-115.3,-57.5,230.7,115.2), new cjs.Rectangle(-115,-57.4,230,114.8), new cjs.Rectangle(-115.2,-57.5,230.5,115.1), new cjs.Rectangle(-115.4,-57.6,231,115.3), new cjs.Rectangle(-115.7,-57.7,231.5,115.6), new cjs.Rectangle(-115.9,-57.9,232,115.9), new cjs.Rectangle(-116.2,-58,232.5,116.1), new cjs.Rectangle(-116.4,-58.1,233,116.4), new cjs.Rectangle(-116.7,-58.3,233.5,116.6), new cjs.Rectangle(-116.9,-58.4,234,116.9), new cjs.Rectangle(-117.2,-58.5,234.5,117.2), new cjs.Rectangle(-117.4,-58.6,235,117.4), new cjs.Rectangle(-117.7,-58.8,235.5,117.7), new cjs.Rectangle(-117.9,-58.9,236,117.9), new cjs.Rectangle(-118.2,-59,236.5,118.2), new cjs.Rectangle(-118.4,-59.2,237,118.5), new cjs.Rectangle(-118.7,-59.3,237.5,118.7), new cjs.Rectangle(-118.9,-59.4,238,119), new cjs.Rectangle(-119.2,-59.6,238.5,119.2), new cjs.Rectangle(-119.4,-59.7,239,119.5), new cjs.Rectangle(-119.7,-59.8,239.5,119.8), new cjs.Rectangle(-120,-60,240,120)];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.012},30).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// animation
	this.instance_2 = new lib.nav_0_mc();
	this.instance_2.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.102},29).to({alpha:0.199},30).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am5JYQhBAAgvguQguguAAhCIAAtzQAAhBAugvQAvguBBAAINzAAQBCAAAuAuQAuAvAABBIAANzQAABCguAuQguAuhCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-57.5,230,115);
p.frameBounds = [rect, new cjs.Rectangle(-120,-60,240,120), new cjs.Rectangle(-115,-57.5,230,115), new cjs.Rectangle(-120,-60,240,120)];


(lib.more_games_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_4_2_mc();
	this.instance.setTransform(3,5,0.957,0.957);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9,x:2,y:6},49).to({scaleX:0.96,scaleY:0.96,x:3,y:5},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.2,-96.9,212.4,203.8);
p.frameBounds = [rect, new cjs.Rectangle(-103.1,-96.8,212.2,203.6), new cjs.Rectangle(-103,-96.6,211.9,203.4), new cjs.Rectangle(-102.9,-96.5,211.7,203.1), new cjs.Rectangle(-102.8,-96.3,211.4,202.9), new cjs.Rectangle(-102.6,-96.1,211.2,202.6), new cjs.Rectangle(-102.5,-96,210.9,202.4), new cjs.Rectangle(-102.4,-95.9,210.7,202.1), new cjs.Rectangle(-102.3,-95.7,210.4,201.9), new cjs.Rectangle(-102.2,-95.6,210.2,201.7), new cjs.Rectangle(-102.1,-95.5,209.9,201.4), new cjs.Rectangle(-102,-95.4,209.7,201.2), new cjs.Rectangle(-101.9,-95.2,209.4,200.9), new cjs.Rectangle(-101.8,-95,209.2,200.6), new cjs.Rectangle(-101.7,-94.9,208.9,200.4), new cjs.Rectangle(-101.6,-94.7,208.7,200.2), new cjs.Rectangle(-101.5,-94.6,208.4,200), new cjs.Rectangle(-101.4,-94.5,208.2,199.7), new cjs.Rectangle(-101.2,-94.4,207.9,199.5), new cjs.Rectangle(-101.2,-94.2,207.6,199.2), new cjs.Rectangle(-101,-94.1,207.4,199), new cjs.Rectangle(-101,-93.9,207.1,198.7), new cjs.Rectangle(-100.8,-93.7,206.9,198.5), new cjs.Rectangle(-100.7,-93.6,206.6,198.3), new cjs.Rectangle(-100.6,-93.4,206.4,198), new cjs.Rectangle(-100.5,-93.3,206.1,197.8), new cjs.Rectangle(-100.4,-93.2,205.9,197.5), new cjs.Rectangle(-100.3,-93.1,205.6,197.3), new cjs.Rectangle(-100.2,-93,205.4,197), new cjs.Rectangle(-100.1,-92.8,205.1,196.8), new cjs.Rectangle(-100,-92.6,204.9,196.6), new cjs.Rectangle(-99.9,-92.4,204.6,196.3), new cjs.Rectangle(-99.8,-92.3,204.4,196.1), new cjs.Rectangle(-99.6,-92.2,204.1,195.8), new cjs.Rectangle(-99.6,-92.1,203.9,195.6), new cjs.Rectangle(-99.4,-92,203.6,195.3), new cjs.Rectangle(-99.4,-91.8,203.3,195.1), new cjs.Rectangle(-99.2,-91.7,203.1,194.9), new cjs.Rectangle(-99.2,-91.4,202.8,194.6), new cjs.Rectangle(-99,-91.3,202.6,194.4), new cjs.Rectangle(-98.9,-91.2,202.3,194.1), new cjs.Rectangle(-98.8,-91,202.1,193.9), new cjs.Rectangle(-98.8,-91,201.8,193.6), new cjs.Rectangle(-98.7,-90.8,201.6,193.4), new cjs.Rectangle(-98.5,-90.7,201.3,193.2), new cjs.Rectangle(-98.4,-90.5,201.1,192.9), new cjs.Rectangle(-98.3,-90.3,200.8,192.6), new cjs.Rectangle(-98.2,-90.2,200.6,192.4), new cjs.Rectangle(-98.1,-90,200.3,192.1), new cjs.Rectangle(-98,-89.9,200,191.9), new cjs.Rectangle(-98,-90,200.3,192.2), new cjs.Rectangle(-98.1,-90.2,200.6,192.4), new cjs.Rectangle(-98.2,-90.3,200.8,192.6), new cjs.Rectangle(-98.3,-90.5,201,192.9), new cjs.Rectangle(-98.4,-90.6,201.3,193.1), new cjs.Rectangle(-98.6,-90.7,201.5,193.4), new cjs.Rectangle(-98.6,-90.8,201.8,193.6), new cjs.Rectangle(-98.8,-91,202,193.8), new cjs.Rectangle(-98.9,-91.2,202.3,194.1), new cjs.Rectangle(-99,-91.3,202.5,194.3), new cjs.Rectangle(-99.1,-91.4,202.8,194.6), new cjs.Rectangle(-99.2,-91.6,203,194.8), new cjs.Rectangle(-99.3,-91.7,203.3,195), new cjs.Rectangle(-99.4,-91.8,203.5,195.3), new cjs.Rectangle(-99.5,-92,203.8,195.5), new cjs.Rectangle(-99.6,-92.1,204,195.8), new cjs.Rectangle(-99.7,-92.3,204.3,196), new cjs.Rectangle(-99.8,-92.4,204.5,196.2), new cjs.Rectangle(-99.9,-92.6,204.8,196.5), new cjs.Rectangle(-100,-92.7,205,196.7), new cjs.Rectangle(-100.1,-92.8,205.3,196.9), new cjs.Rectangle(-100.2,-93,205.5,197.2), new cjs.Rectangle(-100.3,-93.1,205.8,197.4), new cjs.Rectangle(-100.4,-93.3,206,197.6), new cjs.Rectangle(-100.5,-93.4,206.3,197.9), new cjs.Rectangle(-100.6,-93.5,206.5,198.1), new cjs.Rectangle(-100.7,-93.6,206.8,198.4), new cjs.Rectangle(-100.9,-93.7,207,198.6), new cjs.Rectangle(-101,-94,207.2,198.8), new cjs.Rectangle(-101.1,-94.1,207.5,199.1), new cjs.Rectangle(-101.2,-94.2,207.7,199.3), new cjs.Rectangle(-101.3,-94.4,208,199.6), new cjs.Rectangle(-101.4,-94.5,208.2,199.8), new cjs.Rectangle(-101.5,-94.6,208.5,200), new cjs.Rectangle(-101.6,-94.8,208.7,200.3), new cjs.Rectangle(-101.7,-94.9,209,200.5), new cjs.Rectangle(-101.8,-95.1,209.2,200.7), new cjs.Rectangle(-101.9,-95.2,209.5,201), new cjs.Rectangle(-102,-95.3,209.7,201.2), new cjs.Rectangle(-102.1,-95.5,210,201.5), new cjs.Rectangle(-102.2,-95.5,210.2,201.6), new cjs.Rectangle(-102.3,-95.8,210.5,201.9), new cjs.Rectangle(-102.4,-95.9,210.7,202.2), new cjs.Rectangle(-102.5,-96,211,202.4), new cjs.Rectangle(-102.6,-96.2,211.2,202.6), new cjs.Rectangle(-102.7,-96.3,211.5,202.9), new cjs.Rectangle(-102.8,-96.4,211.7,203.1), new cjs.Rectangle(-103,-96.5,212,203.4), new cjs.Rectangle(-103,-96.7,212.2,203.6), new cjs.Rectangle(-103.2,-96.9,212.4,203.8)];


(lib.more_games_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_2_2_mc("synched",0);
	this.instance.setTransform(0.5,0.5,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.4,-10.6,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14,29.1,29.1), new cjs.Rectangle(-17.4,-17.5,36.1,36.1), new cjs.Rectangle(-20.9,-20.9,42.8,42.8), new cjs.Rectangle(-23.7,-23.7,48.5,48.5), new cjs.Rectangle(-25.9,-25.9,52.9,52.9), new cjs.Rectangle(-27.3,-27.2,55.5,55.5), new cjs.Rectangle(-27.6,-27.5,56.1,56.1), new cjs.Rectangle(-26.7,-26.6,54.3,54.3), new cjs.Rectangle(-24.5,-24.5,50,50), new cjs.Rectangle(-27,-27,55.1,55.1), new cjs.Rectangle(-27.2,-27.2,55.6,55.6), new cjs.Rectangle(-25.6,-25.6,52.2,52.2), new cjs.Rectangle(-22.4,-22.3,45.7,45.7), new cjs.Rectangle(-18.1,-18.1,37.2,37.2), new cjs.Rectangle(-13.3,-13.2,27.6,27.6), new cjs.Rectangle(-10.2,-10.1,21.3,21.3), new cjs.Rectangle(-9.4,-9.3,19.6,19.6), new cjs.Rectangle(-7.3,-7.2,15.5,15.5), new cjs.Rectangle(-4.4,-4.4,9.8,9.8)];


(lib.more_games_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_3_2_mc();
	this.instance.setTransform(26.6,35.9,1.57,1.57,-16,0,0,0.6,0.4);

	this.instance_1 = new lib.more_games_3_2_mc();
	this.instance_1.setTransform(-46.4,22,1,1,-16,0,0,0.5,0.5);

	this.instance_2 = new lib.more_games_3_2_mc();
	this.instance_2.setTransform(13.7,-45,1,1,-16,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(284));

	// animation
	this.instance_3 = new lib.more_games_6_2_mc();
	this.instance_3.setTransform(-1.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(284));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnAHBQi5i7AAkGQgBjKBwieQAhguApgqQC7i6EFAAQAwAAAtAHQDLAbCYCYQC7C7AAEFQAAEGi7C7Qi6C6kGAAQkFAAi7i6g");
	mask.setTransform(-1.5,9);

	// animation
	this.instance_4 = new lib.more_games_1_2_mc();
	this.instance_4.setTransform(327.3,-316.6,1,1,-45);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-168.6,y:177.4},283).wait(1));

	// animation
	this.instance_5 = new lib.more_games_5_2_mc();
	this.instance_5.setTransform(-4.1,-5.9,1.14,1.14);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(284));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.8,-153.5,242.2,269.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-57.5,230,115);
p.frameBounds = [rect, new cjs.Rectangle(-120,-60,240,120), new cjs.Rectangle(-115,-57.5,230,115), new cjs.Rectangle(-120,-60,240,120)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-57.5,230,115);
p.frameBounds = [rect, new cjs.Rectangle(-120,-60,240,120), new cjs.Rectangle(-115,-57.5,230,115), new cjs.Rectangle(-120,-60,240,120)];


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


(lib.wardrobe_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_1_mc();
	this.instance.setTransform(250,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_3_1_mc();
	this.instance_1.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-170,780,340);
p.frameBounds = [rect];


(lib.location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(120,90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_8_img();
	this.instance_1.setTransform(-145,-175);

	this.instance_2 = new lib.location_1_8_img();
	this.instance_2.setTransform(-145,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdbVQi+AAiHiHQiHiGABi/MAAAgoRQgBi/CHiHQCHiGC+AAIe7AAQC+AACGCGQCHCHAAC/MAAAAoRQAAC/iHCGQiGCHi+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-175,290,350);
p.frameBounds = [rect, rect, new cjs.Rectangle(-145,-175,325,350)];


(lib.location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(120,90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_7_img();
	this.instance_1.setTransform(-145,-175);

	this.instance_2 = new lib.location_1_7_img();
	this.instance_2.setTransform(-145,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdbVQi+AAiHiHQiHiGABi/MAAAgoRQgBi/CHiHQCHiGC+AAIe7AAQC+AACGCGQCHCHAAC/MAAAAoRQAAC/iHCGQiGCHi+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-175,290,350);
p.frameBounds = [rect, rect, new cjs.Rectangle(-145,-175,325,350)];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(120,90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_6_img();
	this.instance_1.setTransform(-145,-175);

	this.instance_2 = new lib.location_1_6_img();
	this.instance_2.setTransform(-145,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdbVQi+AAiHiHQiHiGABi/MAAAgoRQgBi/CHiHQCHiGC+AAIe7AAQC+AACGCGQCHCHAAC/MAAAAoRQAAC/iHCGQiGCHi+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-175,290,350);
p.frameBounds = [rect, rect, new cjs.Rectangle(-145,-175,325,350)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(120,90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_5_img();
	this.instance_1.setTransform(-145,-175);

	this.instance_2 = new lib.location_1_5_img();
	this.instance_2.setTransform(-145,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdbVQi+AAiHiHQiHiGABi/MAAAgoRQgBi/CHiHQCHiGC+AAIe7AAQC+AACGCGQCHCHAAC/MAAAAoRQAAC/iHCGQiGCHi+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-175,290,350);
p.frameBounds = [rect, rect, new cjs.Rectangle(-145,-175,325,350)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(120,90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-145,-175);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-145,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdbVQi+AAiHiHQiHiGABi/MAAAgoRQgBi/CHiHQCHiGC+AAIe7AAQC+AACGCGQCHCHAAC/MAAAAoRQAAC/iHCGQiGCHi+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-175,290,350);
p.frameBounds = [rect, rect, new cjs.Rectangle(-145,-175,325,350)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(120,90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-145,-175);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-145,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdbVQi+AAiHiHQiHiGABi/MAAAgoRQgBi/CHiHQCHiGC+AAIe7AAQC+AACGCGQCHCHAAC/MAAAAoRQAAC/iHCGQiGCHi+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-175,290,350);
p.frameBounds = [rect, rect, new cjs.Rectangle(-145,-175,325,350)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(120,90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-145,-175);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-145,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdbVQi+AAiHiHQiHiGABi/MAAAgoRQgBi/CHiHQCHiGC+AAIe7AAQC+AACGCGQCHCHAAC/MAAAAoRQAAC/iHCGQiGCHi+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-175,290,350);
p.frameBounds = [rect, rect, new cjs.Rectangle(-145,-175,325,350)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(120,90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-145,-175);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-145,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdbVQi+AAiHiHQiHiGABi/MAAAgoRQgBi/CHiHQCHiGC+AAIe7AAQC+AACGCGQCHCHAAC/MAAAAoRQAAC/iHCGQiGCHi+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-175,290,350);
p.frameBounds = [rect, rect, new cjs.Rectangle(-145,-175,325,350)];


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
	this.hero_2.setTransform(337.5,313.2,1,1,0,0,0,87.5,272.2);

	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(197.6,306.2,1,1,0,0,0,87.6,272.2);

	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(470.5,309.2,1,1,0,0,180,87.5,272.2);

	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(597.4,310.7,1,1,0,0,180,87.6,272.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_4,p:{x:597.4,y:310.7}},{t:this.hero_3,p:{x:470.5,y:309.2}},{t:this.hero_1,p:{x:197.6,y:306.2}},{t:this.hero_2,p:{x:337.5,y:313.2}}]}).to({state:[{t:this.hero_1,p:{x:393.6,y:312.2}}]},1).to({state:[{t:this.hero_2,p:{x:392.5,y:315.2}}]},1).to({state:[{t:this.hero_3,p:{x:407.5,y:312.2}}]},1).to({state:[{t:this.hero_4,p:{x:402.4,y:320.2}}]},1).to({state:[{t:this.hero_4,p:{x:597.4,y:315.7}},{t:this.hero_3,p:{x:470.5,y:310.2}},{t:this.hero_1,p:{x:197.6,y:310.2}},{t:this.hero_2,p:{x:337.5,y:314.2}}]},1).to({state:[{t:this.hero_1,p:{x:393.6,y:317.2}}]},1).to({state:[{t:this.hero_2,p:{x:394.5,y:318.2}}]},1).to({state:[{t:this.hero_3,p:{x:407.5,y:317.2}}]},1).to({state:[{t:this.hero_4,p:{x:402.4,y:325.2}}]},1).to({state:[{t:this.hero_4,p:{x:597.4,y:319.7}},{t:this.hero_3,p:{x:470.5,y:316.2}},{t:this.hero_1,p:{x:197.6,y:313.2}},{t:this.hero_2,p:{x:337.5,y:315.2}}]},1).to({state:[{t:this.hero_1,p:{x:400.6,y:319.2}}]},1).to({state:[{t:this.hero_2,p:{x:399.5,y:318.2}}]},1).to({state:[{t:this.hero_3,p:{x:411.5,y:318.2}}]},1).to({state:[{t:this.hero_4,p:{x:407.4,y:321.2}}]},1).to({state:[{t:this.hero_4,p:{x:597.4,y:324.7}},{t:this.hero_3,p:{x:470.5,y:327.2}},{t:this.hero_1,p:{x:197.6,y:322.2}},{t:this.hero_2,p:{x:337.5,y:329.2}}]},1).to({state:[{t:this.hero_1,p:{x:400.6,y:321.2}}]},1).to({state:[{t:this.hero_2,p:{x:395.5,y:322.2}}]},1).to({state:[{t:this.hero_3,p:{x:407.5,y:318.2}}]},1).to({state:[{t:this.hero_4,p:{x:403.4,y:330.2}}]},1).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_4_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,600.6), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,0,1200,603.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,0,1200,602.4), new cjs.Rectangle(-200,0,1200,602.6), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,0,1200,604.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,0,1200,613.4), new cjs.Rectangle(-200,0,1200,604.6), new cjs.Rectangle(-200,0,1200,603.4), new cjs.Rectangle(-200,0,1200,604.4), new cjs.Rectangle(-200,0,1200,604.1)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_main_mc();
	this.instance.setTransform(345.5,312.2,1,1,0,0,0,87.5,272.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_main_mc();
	this.instance_1.setTransform(200.6,304.2,1,1,0,0,0,87.6,272.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero3_main_mc();
	this.instance_2.setTransform(480.5,308.2,1,1,0,0,180,87.5,272.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero4_main_mc();
	this.instance_3.setTransform(612.4,308.2,1,1,0,0,180,87.6,272.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(65.5,36.5,709.8,551.3);
p.frameBounds = [rect];


(lib.closet_makeup_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-135,-135);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-135,-135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_4 = new lib.blush_4_4_mc();
	this.blush_4.setTransform(220,40);

	this.blush_3 = new lib.blush_3_4_mc();
	this.blush_3.setTransform(280,-60);

	this.blush_2 = new lib.blush_2_4_mc();
	this.blush_2.setTransform(-220,40);

	this.blush_1 = new lib.blush_1_4_mc();
	this.blush_1.setTransform(-280,-60);

	this.shadows_4 = new lib.shadows_4_4_mc();
	this.shadows_4.setTransform(280,35);

	this.shadows_3 = new lib.shadows_3_4_mc();
	this.shadows_3.setTransform(220,-65);

	this.shadows_2 = new lib.shadows_2_4_mc();
	this.shadows_2.setTransform(-220,35);

	this.shadows_1 = new lib.shadows_1_4_mc();
	this.shadows_1.setTransform(-280,-65);

	this.lips_4 = new lib.lips_4_4_mc();
	this.lips_4.setTransform(-210,-70);

	this.lips_3 = new lib.lips_3_4_mc();
	this.lips_3.setTransform(280,-70);

	this.lips_2 = new lib.lips_2_4_mc();
	this.lips_2.setTransform(-270,30);

	this.lips_1 = new lib.lips_1_4_mc();
	this.lips_1.setTransform(220,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-158,700,268);
p.frameBounds = [rect, new cjs.Rectangle(-350,-158,700,263), new cjs.Rectangle(-317,-147.3,647.8,241.4)];


(lib.closet_makeup_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-135,-135);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-135,-135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_4 = new lib.blush_4_3_mc();
	this.blush_4.setTransform(220,40);

	this.blush_3 = new lib.blush_3_3_mc();
	this.blush_3.setTransform(280,-60);

	this.blush_2 = new lib.blush_2_3_mc();
	this.blush_2.setTransform(-220,40);

	this.blush_1 = new lib.blush_1_3_mc();
	this.blush_1.setTransform(-280,-60);

	this.shadows_4 = new lib.shadows_4_3_mc();
	this.shadows_4.setTransform(280,35);

	this.shadows_3 = new lib.shadows_3_3_mc();
	this.shadows_3.setTransform(220,-65);

	this.shadows_2 = new lib.shadows_2_3_mc();
	this.shadows_2.setTransform(-220,35);

	this.shadows_1 = new lib.shadows_1_3_mc();
	this.shadows_1.setTransform(-280,-65);

	this.lips_4 = new lib.lips_4_3_mc();
	this.lips_4.setTransform(-210,-70);

	this.lips_3 = new lib.lips_3_3_mc();
	this.lips_3.setTransform(280,-70);

	this.lips_2 = new lib.lips_2_3_mc();
	this.lips_2.setTransform(-270,30);

	this.lips_1 = new lib.lips_1_3_mc();
	this.lips_1.setTransform(220,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-158,700,268);
p.frameBounds = [rect, new cjs.Rectangle(-350,-158,700,263), new cjs.Rectangle(-317,-147.3,647.8,241.4)];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-135,-135);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-135,-135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(220,40);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(280,-60);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(-220,40);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-280,-60);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(280,35);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(220,-65);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(-220,35);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-280,-65);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(-210,-70);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(280,-70);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(-270,30);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(220,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-158,700,268);
p.frameBounds = [rect, new cjs.Rectangle(-350,-158,700,263), new cjs.Rectangle(-317,-147.3,647.8,241.4)];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-135,-135);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-135,-135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(220,40);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(280,-60);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(-220,40);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-280,-60);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(280,35);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(220,-65);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(-220,35);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-280,-65);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-210,-70);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(280,-70);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-270,30);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(220,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-158,700,268);
p.frameBounds = [rect, new cjs.Rectangle(-350,-158,700,263), new cjs.Rectangle(-317,-147.3,647.8,241.4)];


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


(lib.bodyDressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.closet_makeup_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-158,700,268);
p.frameBounds = [rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_makeup_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-158,700,268);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-158,700,268);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-158,700,268);
p.frameBounds = [rect];


(lib.body_locations_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":19,"end":39});

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(40));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-325,-175,650,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(-180,0);
	this.location_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(29).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(36));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(180,0);
	this.location_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(44).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-325,-175,650,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-280,-175,605,350), new cjs.Rectangle(-283,-175,608,350), new cjs.Rectangle(-286,-175,611,350), new cjs.Rectangle(-289,-175,614,350), new cjs.Rectangle(-292,-175,617,350), new cjs.Rectangle(-295,-175,620,350), new cjs.Rectangle(-298,-175,623,350), new cjs.Rectangle(-301,-175,626,350), new cjs.Rectangle(-304,-175,629,350), new cjs.Rectangle(-307,-175,632,350), new cjs.Rectangle(-309.9,-175,635,350), new cjs.Rectangle(-312.9,-175,638,350), new cjs.Rectangle(-315.9,-175,641,350), new cjs.Rectangle(-318.9,-175,644,350), new cjs.Rectangle(-321.9,-175,647,350), new cjs.Rectangle(-325,-175,605,350), new cjs.Rectangle(-325,-175,608,350), new cjs.Rectangle(-325,-175,611,350), new cjs.Rectangle(-325,-175,614,350), new cjs.Rectangle(-325,-175,617,350), new cjs.Rectangle(-325,-175,620,350), new cjs.Rectangle(-325,-175,623,350), new cjs.Rectangle(-325,-175,626,350), new cjs.Rectangle(-325,-175,629,350), new cjs.Rectangle(-325,-175,632,350), new cjs.Rectangle(-325,-175,635,350), new cjs.Rectangle(-325,-175,638,350), new cjs.Rectangle(-325,-175,641,350), new cjs.Rectangle(-325,-175,644,350), new cjs.Rectangle(-325,-175,647,350), rect=new cjs.Rectangle(-325,-175,650,350), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":19,"end":39});

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(40));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-325,-175,650,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,0);
	this.location_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(29).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(36));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(180,0);
	this.location_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(44).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-325,-175,650,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-280,-175,605,350), new cjs.Rectangle(-283,-175,608,350), new cjs.Rectangle(-286,-175,611,350), new cjs.Rectangle(-289,-175,614,350), new cjs.Rectangle(-292,-175,617,350), new cjs.Rectangle(-295,-175,620,350), new cjs.Rectangle(-298,-175,623,350), new cjs.Rectangle(-301,-175,626,350), new cjs.Rectangle(-304,-175,629,350), new cjs.Rectangle(-307,-175,632,350), new cjs.Rectangle(-309.9,-175,635,350), new cjs.Rectangle(-312.9,-175,638,350), new cjs.Rectangle(-315.9,-175,641,350), new cjs.Rectangle(-318.9,-175,644,350), new cjs.Rectangle(-321.9,-175,647,350), new cjs.Rectangle(-325,-175,605,350), new cjs.Rectangle(-325,-175,608,350), new cjs.Rectangle(-325,-175,611,350), new cjs.Rectangle(-325,-175,614,350), new cjs.Rectangle(-325,-175,617,350), new cjs.Rectangle(-325,-175,620,350), new cjs.Rectangle(-325,-175,623,350), new cjs.Rectangle(-325,-175,626,350), new cjs.Rectangle(-325,-175,629,350), new cjs.Rectangle(-325,-175,632,350), new cjs.Rectangle(-325,-175,635,350), new cjs.Rectangle(-325,-175,638,350), new cjs.Rectangle(-325,-175,641,350), new cjs.Rectangle(-325,-175,644,350), new cjs.Rectangle(-325,-175,647,350), rect=new cjs.Rectangle(-325,-175,650,350), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":19,"end":39});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(40));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-325,-175,650,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-180,0);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(29).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(36));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(180,0);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(44).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-325,-175,650,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-280,-175,605,350), new cjs.Rectangle(-283,-175,608,350), new cjs.Rectangle(-286,-175,611,350), new cjs.Rectangle(-289,-175,614,350), new cjs.Rectangle(-292,-175,617,350), new cjs.Rectangle(-295,-175,620,350), new cjs.Rectangle(-298,-175,623,350), new cjs.Rectangle(-301,-175,626,350), new cjs.Rectangle(-304,-175,629,350), new cjs.Rectangle(-307,-175,632,350), new cjs.Rectangle(-309.9,-175,635,350), new cjs.Rectangle(-312.9,-175,638,350), new cjs.Rectangle(-315.9,-175,641,350), new cjs.Rectangle(-318.9,-175,644,350), new cjs.Rectangle(-321.9,-175,647,350), new cjs.Rectangle(-325,-175,605,350), new cjs.Rectangle(-325,-175,608,350), new cjs.Rectangle(-325,-175,611,350), new cjs.Rectangle(-325,-175,614,350), new cjs.Rectangle(-325,-175,617,350), new cjs.Rectangle(-325,-175,620,350), new cjs.Rectangle(-325,-175,623,350), new cjs.Rectangle(-325,-175,626,350), new cjs.Rectangle(-325,-175,629,350), new cjs.Rectangle(-325,-175,632,350), new cjs.Rectangle(-325,-175,635,350), new cjs.Rectangle(-325,-175,638,350), new cjs.Rectangle(-325,-175,641,350), new cjs.Rectangle(-325,-175,644,350), new cjs.Rectangle(-325,-175,647,350), rect=new cjs.Rectangle(-325,-175,650,350), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":19,"end":39});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(40));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-325,-175,650,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,0);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(29).to({regX:-0.2,scaleX:0.69,scaleY:0.69,x:-180.1},0).to({regX:0,scaleX:1,scaleY:1,x:-180,alpha:1},15).wait(36));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,0);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(44).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-325,-175,650,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-280,-175,605,350), new cjs.Rectangle(-283,-175,608,350), new cjs.Rectangle(-286,-175,611,350), new cjs.Rectangle(-288.9,-175,614,350), new cjs.Rectangle(-291.9,-175,616.9,350), new cjs.Rectangle(-294.9,-175,619.9,350), new cjs.Rectangle(-297.9,-175,622.9,350), new cjs.Rectangle(-300.9,-175,626,350), new cjs.Rectangle(-303.9,-175,628.9,350), new cjs.Rectangle(-306.9,-175,631.9,350), new cjs.Rectangle(-309.9,-175,634.9,350), new cjs.Rectangle(-312.9,-175,637.9,350), new cjs.Rectangle(-315.9,-175,640.9,350), new cjs.Rectangle(-318.8,-175,643.9,350), new cjs.Rectangle(-321.8,-175,646.9,350), new cjs.Rectangle(-325,-175,605,350), new cjs.Rectangle(-325,-175,608,350), new cjs.Rectangle(-325,-175,611,350), new cjs.Rectangle(-325,-175,614,350), new cjs.Rectangle(-325,-175,617,350), new cjs.Rectangle(-325,-175,620,350), new cjs.Rectangle(-325,-175,623,350), new cjs.Rectangle(-325,-175,626,350), new cjs.Rectangle(-325,-175,629,350), new cjs.Rectangle(-325,-175,632,350), new cjs.Rectangle(-325,-175,635,350), new cjs.Rectangle(-325,-175,638,350), new cjs.Rectangle(-325,-175,641,350), new cjs.Rectangle(-325,-175,644,350), new cjs.Rectangle(-325,-175,647,350), rect=new cjs.Rectangle(-325,-175,650,350), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance.setTransform(0,0,0.857,0.857,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.prev_nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.714,0.714,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.next_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.next_nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.next_2_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_2_mc();

	this.instance_1 = new lib.next_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.958,scaleY:0.958,alpha:0.801}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect, rect, new cjs.Rectangle(-115,-57.5,230,115), new cjs.Rectangle(-120,-60,240,120)];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_0_2_mc();
	this.instance.setTransform(325.9,-316.7,1,1,0,0,0,325.9,-316.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.8,-760,892.4,886.7);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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
p.nominalBounds = rect = new cjs.Rectangle(-325,-175,650,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.hairsrtyle_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_3_4_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.hairsrtyle_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_3_3_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.hairsrtyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_3_2_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.hairsrtyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_3_1_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.hairsrtyle_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_2_4_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.hairsrtyle_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_2_3_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.hairsrtyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_2_2_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.hairsrtyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_2_1_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.hairsrtyle_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_1_4_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.hairsrtyle_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_1_3_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.hairsrtyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_1_2_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.hairsrtyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,55.1,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairsrtyle_1_1_img();
	this.instance.setTransform(-90,-108,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-108,205,216);
p.frameBounds = [rect];


(lib.dressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,400);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(170,210);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-170,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-170,780,620);
p.frameBounds = [rect];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,400);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(170,210);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-170,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-170,780,620);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,400);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(170,210);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-170,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-170,780,620);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,400);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(170,210);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(-170,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-170,780,620);
p.frameBounds = [rect];


(lib.closet_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(190,-150);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(190,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0}]},3).to({state:[{t:this.accessory_0}]},1).wait(1));

	// options
	this.hair_1 = new lib.hairsrtyle_1_4_mc();
	this.hair_1.setTransform(-90,-130);

	this.hair_3 = new lib.hairsrtyle_3_4_mc();
	this.hair_3.setTransform(0,75);

	this.hair_2 = new lib.hairsrtyle_2_4_mc();
	this.hair_2.setTransform(90,-130);

	this.dress_1 = new lib.dress_1_4_mc();
	this.dress_1.setTransform(80,-235);

	this.dress_2 = new lib.dress_2_4_mc();
	this.dress_2.setTransform(-80,-235);

	this.dress_3 = new lib.dress_3_4_mc();
	this.dress_3.setTransform(80,-235);

	this.dress_4 = new lib.dress_4_4_mc();
	this.dress_4.setTransform(-80,-235);

	this.shoes_4 = new lib.shoes_4_4_mc();
	this.shoes_4.setTransform(60,68);

	this.shoes_3 = new lib.shoes_3_4_mc();
	this.shoes_3.setTransform(-60,64);

	this.shoes_2 = new lib.shoes_2_4_mc();
	this.shoes_2.setTransform(60,-80);

	this.shoes_1 = new lib.shoes_1_4_mc();
	this.shoes_1.setTransform(-60,-85);

	this.accessory_4 = new lib.accessory_4_4_mc();
	this.accessory_4.setTransform(60,75);

	this.accessory_3 = new lib.accessory_3_4_mc();
	this.accessory_3.setTransform(-60,75);

	this.accessory_2 = new lib.accessory_2_4_mc();
	this.accessory_2.setTransform(60,-65);

	this.accessory_1 = new lib.accessory_1_4_mc();
	this.accessory_1.setTransform(-60,-65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3},{t:this.hair_1}]}).to({state:[{t:this.dress_2},{t:this.dress_1}]},1).to({state:[{t:this.dress_4},{t:this.dress_3}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4}]},1).wait(1));

	// decor
	this.instance = new lib.stick_0_mc();
	this.instance.setTransform(0,95);

	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,-110);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,55);

	this.instance_3 = new lib.stick_0_mc();
	this.instance_3.setTransform(0,-150);

	this.instance_4 = new lib.shelf_0_mc();
	this.instance_4.setTransform(0,-60);

	this.instance_5 = new lib.shelf_0_mc();
	this.instance_5.setTransform(0,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{y:95}}]}).to({state:[{t:this.instance,p:{y:-220}}]},1).to({state:[{t:this.instance,p:{y:-220}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-238,405,421);
p.frameBounds = [rect, new cjs.Rectangle(-220,-241,477,464.7), new cjs.Rectangle(-233.5,-243,470.5,481.7), rect=new cjs.Rectangle(-200,-232,408,360), rect];


(lib.closet_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(190,-150);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(190,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0}]},3).to({state:[{t:this.accessory_0}]},1).wait(1));

	// options
	this.hair_1 = new lib.hairsrtyle_1_3_mc();
	this.hair_1.setTransform(-90,-130);

	this.hair_3 = new lib.hairsrtyle_3_3_mc();
	this.hair_3.setTransform(0,75);

	this.hair_2 = new lib.hairsrtyle_2_3_mc();
	this.hair_2.setTransform(90,-130);

	this.dress_1 = new lib.dress_1_3_mc();
	this.dress_1.setTransform(80,-235);

	this.dress_3 = new lib.dress_3_3_mc();
	this.dress_3.setTransform(-80,-235);

	this.dress_4 = new lib.dress_4_3_mc();
	this.dress_4.setTransform(80,-235);

	this.dress_2 = new lib.dress_2_3_mc();
	this.dress_2.setTransform(-80,-235);

	this.shoes_4 = new lib.shoes_4_3_mc();
	this.shoes_4.setTransform(60,60);

	this.shoes_3 = new lib.shoes_3_3_mc();
	this.shoes_3.setTransform(-60,90);

	this.shoes_2 = new lib.shoes_2_3_mc();
	this.shoes_2.setTransform(60,-70);

	this.shoes_1 = new lib.shoes_1_3_mc();
	this.shoes_1.setTransform(-60,-70);

	this.accessory_4 = new lib.accessory_4_3_mc();
	this.accessory_4.setTransform(60,83);

	this.accessory_3 = new lib.accessory_3_3_mc();
	this.accessory_3.setTransform(-60,82);

	this.accessory_2 = new lib.accessory_2_3_mc();
	this.accessory_2.setTransform(60,-144);

	this.accessory_1 = new lib.accessory_1_3_mc();
	this.accessory_1.setTransform(-60,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3},{t:this.hair_1}]}).to({state:[{t:this.dress_3},{t:this.dress_1}]},1).to({state:[{t:this.dress_2},{t:this.dress_4}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4}]},1).wait(1));

	// decor
	this.instance = new lib.stick_0_mc();
	this.instance.setTransform(0,95);

	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,-110);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,55);

	this.instance_3 = new lib.stick_0_mc();
	this.instance_3.setTransform(0,-150);

	this.instance_4 = new lib.shelf_0_mc();
	this.instance_4.setTransform(0,-60);

	this.instance_5 = new lib.shelf_0_mc();
	this.instance_5.setTransform(0,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-110}},{t:this.instance,p:{y:95}}]}).to({state:[{t:this.instance,p:{y:-220}}]},1).to({state:[{t:this.instance,p:{y:-220}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance_5},{t:this.instance_4},{t:this.instance,p:{y:-180}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-238,405,421);
p.frameBounds = [rect, new cjs.Rectangle(-258,-244.8,541,510.5), new cjs.Rectangle(-200,-246.5,400,455.7), new cjs.Rectangle(-200,-232,408,363.5), new cjs.Rectangle(-200,-232,408,360)];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(190,-150);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(190,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0}]},3).to({state:[{t:this.accessory_0}]},1).wait(1));

	// options
	this.hair_1 = new lib.hairsrtyle_1_2_mc();
	this.hair_1.setTransform(-90,-130);

	this.hair_3 = new lib.hairsrtyle_3_2_mc();
	this.hair_3.setTransform(0,75);

	this.hair_2 = new lib.hairsrtyle_2_2_mc();
	this.hair_2.setTransform(90,-130);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(-80,-235);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(80,-235);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(80,-235);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(-80,-235);

	this.shoes_4 = new lib.shoes_4_2_mc();
	this.shoes_4.setTransform(-60,-70);

	this.shoes_3 = new lib.shoes_3_2_mc();
	this.shoes_3.setTransform(-60,90);

	this.shoes_2 = new lib.shoes_2_2_mc();
	this.shoes_2.setTransform(60,-80);

	this.shoes_1 = new lib.shoes_1_2_mc();
	this.shoes_1.setTransform(60,90);

	this.accessory_4 = new lib.accessory_4_2_mc();
	this.accessory_4.setTransform(60,72);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(-60,85);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(70,-70);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(-70,-72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3},{t:this.hair_1}]}).to({state:[{t:this.dress_3},{t:this.dress_1}]},1).to({state:[{t:this.dress_2},{t:this.dress_4}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4}]},1).wait(1));

	// decor
	this.instance = new lib.stick_0_mc();
	this.instance.setTransform(0,95);

	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,-110);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,55);

	this.instance_3 = new lib.stick_0_mc();
	this.instance_3.setTransform(0,-150);

	this.instance_4 = new lib.shelf_0_mc();
	this.instance_4.setTransform(0,-60);

	this.instance_5 = new lib.shelf_0_mc();
	this.instance_5.setTransform(0,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{y:95}}]}).to({state:[{t:this.instance,p:{y:-220}}]},1).to({state:[{t:this.instance,p:{y:-220}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-238,405,421);
p.frameBounds = [rect, new cjs.Rectangle(-231.5,-244,468,474.7), new cjs.Rectangle(-200,-247.5,400,476.7), new cjs.Rectangle(-200,-232,408,366), new cjs.Rectangle(-200,-232,408,360)];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(190,-150);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(190,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0}]},3).to({state:[{t:this.accessory_0}]},1).wait(1));

	// options
	this.hair_1 = new lib.hairsrtyle_1_1_mc();
	this.hair_1.setTransform(-90,-130);

	this.hair_3 = new lib.hairsrtyle_3_1_mc();
	this.hair_3.setTransform(0,75);

	this.hair_2 = new lib.hairsrtyle_2_1_mc();
	this.hair_2.setTransform(90,-130);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(80,-235);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-80,-235);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(80,-235);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(-80,-235);

	this.shoes_4 = new lib.shoes_4_1_mc();
	this.shoes_4.setTransform(70,62);

	this.shoes_3 = new lib.shoes_3_1_mc();
	this.shoes_3.setTransform(70,-80);

	this.shoes_2 = new lib.shoes_2_1_mc();
	this.shoes_2.setTransform(-70,70);

	this.shoes_1 = new lib.shoes_1_1_mc();
	this.shoes_1.setTransform(-70,-80);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(60,80);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(-65,82);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(70,-65);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(-63,-67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3},{t:this.hair_1}]}).to({state:[{t:this.dress_3},{t:this.dress_2}]},1).to({state:[{t:this.dress_1},{t:this.dress_4}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4}]},1).wait(1));

	// decor
	this.instance = new lib.stick_0_mc();
	this.instance.setTransform(0,95);

	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,-110);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,55);

	this.instance_3 = new lib.stick_0_mc();
	this.instance_3.setTransform(0,-150);

	this.instance_4 = new lib.shelf_0_mc();
	this.instance_4.setTransform(0,-60);

	this.instance_5 = new lib.shelf_0_mc();
	this.instance_5.setTransform(0,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{y:95}}]}).to({state:[{t:this.instance,p:{y:-220}}]},1).to({state:[{t:this.instance,p:{y:-220}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-238,405,421);
p.frameBounds = [rect, new cjs.Rectangle(-223,-242.9,448,469.1), new cjs.Rectangle(-231.5,-246.4,458.5,482.1), new cjs.Rectangle(-200,-232,408,362), new cjs.Rectangle(-200,-232,408,360)];


(lib.bodyDressupPanel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.closet_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-238,405,421);
p.frameBounds = [rect];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-238,405,421);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-238,405,421);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-238,405,421);
p.frameBounds = [rect];


(lib.moreGames_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_mc();
	this.instance.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AuWOXQl8l9AAoaQAAoZF8l9QF9l8IZgBQIaABF8F8QF9F9AAIZQAAIal9F9Ql8F8oaAAQoZAAl9l8g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.8,-760,892.4,886.7);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-130,-130,260,260)];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(130,530);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(670,530);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.826,0.826);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this._moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.credits_btn}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(400,445);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_decor_mc();
	this.instance_1.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance_1.alpha = 0.102;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.decor_background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// heroes
	this.instance_3 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.background_3_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1236.3,1081.6);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.826,0.826);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.301;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-176.9,1236.3,1181.6);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(680,530,0.87,0.87);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(120,530,0.87,0.87);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(450,520);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(350,520);

	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(400,1000);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.826,0.826);
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

	this.freeGames_mc = new lib.free_games_mc();
	this.freeGames_mc.setTransform(300,620);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100.2,50.1,0.905,0.904,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.freeGames_mc},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.next_btn},{t:this.moreGames_btn},{t:this.facebook_btn},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn}]}).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-200,-490,1236.3,1520);
p.frameBounds = [rect];


(lib.quest_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(400,510);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_7_mc();
	this.dressupPanel_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.301;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero
	this.hero_4 = new lib.hero4_for_makeup_mc();
	this.hero_4.setTransform(446.7,599.5,1,1,0,0,0,0.7,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,55.5,1200,694.5);
p.frameBounds = [rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(400,510);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.301;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero
	this.hero_3 = new lib.hero3_for_makeup_mc();
	this.hero_3.setTransform(427.8,624.5,1,1,0,0,0,-7.2,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,78,1200,672);
p.frameBounds = [rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(400,510);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.301;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero
	this.hero_2 = new lib.hero2_for_makeup_mc();
	this.hero_2.setTransform(400.6,619.5,1,1,0,0,0,0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,69.5,1200,680.5);
p.frameBounds = [rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(400,510);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.301;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero
	this.hero_1 = new lib.hero1_for_makeup_mc();
	this.hero_1.setTransform(389.7,629.5,1,1,0,0,0,0.7,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,81.5,1200,668.5);
p.frameBounds = [rect];


(lib.dressupPanel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_nav_2_mc();
	this.next_mc.setTransform(195,40);

	this.prev_mc = new lib.prev_nav_2_mc();
	this.prev_mc.setTransform(-200,40);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-278,495,728);
p.frameBounds = [rect];


(lib.dressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_nav_2_mc();
	this.next_mc.setTransform(195,40);

	this.prev_mc = new lib.prev_nav_2_mc();
	this.prev_mc.setTransform(-200,40);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-278,495,728);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_nav_2_mc();
	this.next_mc.setTransform(195,40);

	this.prev_mc = new lib.prev_nav_2_mc();
	this.prev_mc.setTransform(-200,40);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-278,495,728);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_nav_2_mc();
	this.next_mc.setTransform(195,40);

	this.prev_mc = new lib.prev_nav_2_mc();
	this.prev_mc.setTransform(-200,40);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-278,495,728);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1011.4);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1011.4);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1011.4);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1011.4);
p.frameBounds = [rect];


(lib.quest_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260,540,0.917,0.917);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_8_mc();
	this.dressupPanel_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(612.5,312.2,1,1,0,0,180,87.5,272.2);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,42,765.3,728);
p.frameBounds = [rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260,540,0.917,0.917);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(612.5,312.2,1,1,0,0,180,87.5,272.2);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,40.5,792.8,729.6);
p.frameBounds = [rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260,540,0.917,0.917);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(607.5,312.2,1,1,0,0,0,87.5,272.2);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,42,763.7,728);
p.frameBounds = [rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260,540,0.917,0.917);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(607.6,307.2,1,1,0,0,0,87.6,272.2);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,39.5,820.3,730.6);
p.frameBounds = [rect];


(lib.LocationScreen_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400.1,900.1,0.661,0.66,0,0,0,0.1,0.1);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.1);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400.1,900.1,0.661,0.66,0,0,0,0.1,0.1);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.1);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400.1,900.1,0.661,0.66,0,0,0,0.1,0.1);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.1);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400.1,900.1,0.661,0.66,0,0,0,0.1,0.1);
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
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.1);
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
p.nominalBounds = rect = new cjs.Rectangle(10,-261.3,765.3,1031.4);
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
p.nominalBounds = rect = new cjs.Rectangle(10,-261.3,792.8,1031.4);
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
p.nominalBounds = rect = new cjs.Rectangle(10,-261.3,763.7,1031.4);
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
p.nominalBounds = rect = new cjs.Rectangle(10,-261.3,820.3,1031.4);
p.frameBounds = [rect];


(lib.LocationScreen_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400.1,900.1,0.661,0.66,0,0,0,0.1,0.1);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.1);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400.1,900.1,0.661,0.66,0,0,0,0.1,0.1);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.1);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400.1,900.1,0.661,0.66,0,0,0,0.1,0.1);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.1);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400.1,900.1,0.661,0.66,0,0,0,0.1,0.1);
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
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.1);
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
	this.instance_4.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_5 = new lib.LocationScreen_2();
	this.instance_5.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();
	this.instance_7.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.LocationScreen_5();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.LocationScreen_6();
	this.instance_9.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

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
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-76.9,1236.3,1081.6), new cjs.Rectangle(-200,-176.9,1236.3,1181.6), rect=new cjs.Rectangle(-200,-261.3,1200,1245.1), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-490,1236.3,1520), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(30.7,18.4,380.7,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1400,0,1200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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