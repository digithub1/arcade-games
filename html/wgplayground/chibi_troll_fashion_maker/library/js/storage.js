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
		{src:"library/images/storage_atlas_10.png", id:"storage_atlas_10"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600],[0,602,600,600],[602,602,490,490]]},
		{name:"storage_atlas_6", frames: [[815,0,430,430],[492,0,321,648],[0,0,490,490],[0,492,490,490],[0,984,1200,200],[492,650,640,280]]},
		{name:"storage_atlas_7", frames: [[642,0,420,420],[0,282,420,420],[568,899,360,360],[422,422,500,300],[0,704,313,475],[315,724,251,538],[924,422,313,475],[0,0,640,280]]},
		{name:"storage_atlas_8", frames: [[0,405,212,415],[309,0,368,244],[1064,743,231,175],[191,1089,231,188],[787,979,207,219],[0,0,307,403],[1019,502,256,239],[0,822,189,348],[696,455,321,236],[596,732,224,245],[996,920,202,200],[822,743,240,174],[569,979,216,217],[791,212,315,241],[679,0,419,210],[191,914,376,173],[214,732,380,180],[1108,0,150,500],[214,570,480,160],[214,408,480,160],[309,246,480,160]]},
		{name:"storage_atlas_9", frames: [[470,640,240,120],[299,1125,142,171],[443,1125,137,173],[564,315,206,151],[126,339,216,136],[172,679,260,110],[336,963,179,131],[517,1000,194,117],[0,0,181,206],[369,162,193,174],[369,338,183,167],[898,524,216,132],[712,673,181,148],[1043,819,185,142],[1024,180,188,170],[162,963,172,143],[133,1125,164,150],[898,658,180,155],[183,0,243,151],[713,963,173,130],[1116,524,181,155],[0,208,124,273],[564,186,247,127],[172,791,239,104],[1080,681,204,136],[582,1125,192,114],[0,1000,131,196],[842,0,229,145],[677,823,192,138],[428,0,226,160],[434,762,241,111],[958,1125,160,130],[1073,0,185,178],[776,1125,180,120],[1120,1125,160,130],[842,147,180,180],[1043,963,160,160],[0,821,160,160],[126,477,170,170],[298,507,170,170],[772,329,170,170],[0,649,170,170],[554,468,170,170],[726,501,170,170],[1116,352,170,170],[944,352,170,170],[183,153,184,184],[656,0,184,184],[895,815,146,183]]},
		{name:"storage_atlas_10", frames: [[1122,717,100,50],[265,682,83,67],[498,142,101,157],[204,132,160,109],[829,668,81,69],[424,301,91,124],[560,562,88,93],[339,529,82,101],[350,710,81,67],[865,366,128,84],[984,771,77,56],[1122,769,77,56],[1033,0,173,109],[478,519,80,110],[845,528,110,80],[0,392,180,60],[324,0,160,130],[366,142,130,131],[601,211,124,124],[1028,288,96,136],[1126,391,112,93],[940,626,76,94],[285,392,88,118],[486,0,145,140],[802,110,140,131],[723,366,140,78],[1148,568,144,55],[633,98,167,111],[805,610,133,56],[944,199,181,87],[849,288,177,76],[115,326,180,64],[72,736,70,70],[912,722,70,70],[1148,625,81,90],[1155,111,111,156],[846,0,185,108],[633,0,211,96],[1240,391,54,165],[845,452,127,74],[199,594,64,119],[182,392,101,103],[298,275,124,115],[0,633,80,84],[944,111,209,86],[1208,0,90,98],[82,654,82,80],[478,450,150,67],[0,454,113,83],[0,132,202,87],[115,243,181,81],[814,740,96,49],[1018,660,116,54],[713,740,99,49],[514,657,104,62],[250,751,87,52],[557,772,83,50],[1018,716,102,53],[0,356,95,29],[1263,789,34,80],[805,531,38,60],[399,861,52,46],[1056,514,54,52],[999,829,60,60],[849,243,70,40],[0,853,43,60],[727,211,70,29],[599,830,60,60],[423,529,34,80],[115,454,60,38],[740,624,55,35],[233,868,50,38],[1201,789,60,65],[650,562,60,60],[1231,625,67,60],[1061,840,55,60],[265,594,70,35],[265,632,140,48],[560,519,61,36],[433,758,122,39],[433,721,141,35],[642,791,107,37],[722,853,132,23],[0,221,113,133],[280,837,117,29],[576,721,42,42],[183,867,48,40],[339,779,72,56],[424,275,70,24],[995,366,31,18],[298,243,61,19],[115,221,71,18],[423,611,53,18],[1231,687,66,11],[1063,771,56,67],[350,682,59,15],[1056,568,90,90],[727,243,120,120],[1121,827,60,60],[937,829,60,60],[813,791,60,60],[218,805,60,60],[413,799,60,60],[875,794,60,60],[751,791,60,60],[0,791,60,60],[475,799,60,60],[537,824,60,60],[62,808,60,60],[0,0,160,130],[162,0,160,130],[1127,269,120,120],[856,856,50,50],[375,427,101,100],[166,715,82,64],[517,337,102,110],[621,337,100,111],[620,709,91,61],[740,668,87,70],[423,631,89,77],[1268,100,29,32],[650,624,88,83],[92,579,105,73],[0,539,90,92],[712,531,91,91],[1224,717,70,70],[0,719,70,70],[630,450,80,110],[974,514,80,110],[115,497,110,80],[227,512,110,80],[1115,486,115,80],[453,861,44,51],[144,781,72,55],[517,301,82,32],[1183,856,52,48],[1249,336,51,48],[723,446,120,83],[124,838,57,58],[661,830,59,60],[1249,269,45,65],[995,426,118,86]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
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
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
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
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_navigation_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bottom_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cancel_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.check_category_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.check_subcategory_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.color_picker_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.done_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.dress_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.face_accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor13_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor14_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor15_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor16_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.fringle_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor13_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor14_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor15_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor16_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hair_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hand_accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hat10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hat11_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hat12_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hat7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hat8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hat9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero_eyes_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hm1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hm2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hm3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_13_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.mi1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.mi2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.mi3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.mi4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.mi5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.mi6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.mi7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.mi8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.mouth1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.mouth2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.mouth3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.mouth4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.mouth5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.mouth6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.mouth7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.mouth8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.nav_navigation_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.numbers_separator_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.platform_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.random_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.reset_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.sample_bg_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.sample_bg_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.sample_bg_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.sample_bg_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.sample_bg_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.sample_bg_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.sample_bg_7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.sample_bg_8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.substrate_category_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.substrate_category_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.substrate_option_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.substrate_option_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.substrate_subcategory_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.substrate_subcategory_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.title_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.top_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.top_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.top_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.top_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.top_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.top_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.top_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.top_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.top_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.top_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.top_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.top_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(141);
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
	this.instance.setTransform(-245,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-245,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-245,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
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


(lib.top_decor12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor12_img();
	this.instance.setTransform(-22.1,-25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.1,-25.4,44,51);
p.frameBounds = [rect];


(lib.top_decor11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor11_img();
	this.instance.setTransform(-73.2,-91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-91.3,146,183);
p.frameBounds = [rect];


(lib.top_decor10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor10_img();
	this.instance.setTransform(-57.3,-40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.3,-40.2,115,80);
p.frameBounds = [rect];


(lib.top_decor9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor9_img();
	this.instance.setTransform(-58.8,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.8,-43,118,86);
p.frameBounds = [rect];


(lib.top_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor8_img();
	this.instance.setTransform(-22.4,-32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.4,-32.3,45,65);
p.frameBounds = [rect];


(lib.top_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor7_img();
	this.instance.setTransform(-29.6,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.6,-30.1,59,60);
p.frameBounds = [rect];


(lib.top_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor6_img();
	this.instance.setTransform(-28.6,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.6,-29,57,58);
p.frameBounds = [rect];


(lib.top_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor5_img();
	this.instance.setTransform(-60.2,-41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.2,-41.6,120,83);
p.frameBounds = [rect];


(lib.top_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor4_img();
	this.instance.setTransform(-25.5,-23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.7,51,48);
p.frameBounds = [rect];


(lib.top_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor3_img();
	this.instance.setTransform(-26,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-24,52,48);
p.frameBounds = [rect];


(lib.top_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor2_img();
	this.instance.setTransform(-41.1,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-15.7,82,32);
p.frameBounds = [rect];


(lib.top_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor1_img();
	this.instance.setTransform(-35.7,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.7,-27.5,72,55);
p.frameBounds = [rect];


(lib.top_base12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AjCDMQgCgBgCgDIgBgEQgDgagKgvQgIgrAAgXQgBgqBRhkIAAAAQA1hDANgfQABgCADgBQAlgSACgpIACgEIADgCIAEAAIAWAFQAuAJAZAAQAvAAAjgPQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIACALQAEARAJALQAHAIASAJIAOAFQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQACACgBADQgGAjgFA1QgKBiAAA8QAAAZAGAgIAOBaIABACQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQhQAbhWAAQhzAAiBgygAgIAQIAugZQAugfABgSQAAgdgjAAQgLAAgMAFIAAAAIgZAKQgCABgCgBQgCgBgCgDQgDgGgKgEIAAAAQgNgGgSAAQgLAAgHAFIAAAAQgFAFAAAJQAAAWATAUIAAAAQAiAgAMAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.1,-25.4,44.3,50.9);
p.frameBounds = [rect];


(lib.top_base11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("ALTORQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQhJhMhng7QhVgxhsgmIAAAAIgwgPIgDgCIgCgDQhuj1g0khQggi0gGi5IAAgCIAGgfIAAgBIAAABQiWAVirhDIgDgBIgCgDIgBgDQgYA6gpA7IgBAAQhnCRheETQhnEtgQFXIgCAEIgDADIgFAAIgEgDQgXgegOgZQg3hfgSiBIgBgHIABgDQB2lGCWkOIBbilQgLgIgLgLIgDACIhKAHIgEAAIgDgDIgBgEIAAgfQAAhSgggoQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAIA9gWQgIgRAAgcQgBgmAvgcQAngXAAgaQgBgeAGhHIABgBQANg7AggvIAAgBQB7ifB8ALQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABIgUAtIgDAEQgwAfgSARQgJAIgGAJQB1B5CqhcQgBhRgegYIgDgDIAAgDIAFguIACgEIADgCIAEAAQCqAtBBCuIAAACQAOBNAGA7QAGA/AEAQQALAqAqASIAAAAQAbALAEADIAAAAQAQALAAATQAAAFgIAUIAAAAIgFAQIADACIA0BNIABAEIAAAEIgDADQgaAQgaAWQgyApgNAiIgDAEIgEABIgFgCIg4gpIgOAEQAaBQAYA/QAyB9BCCGQB5DzApBmQA9CcAkCiQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABIgEABIgBAAgAB+rfIgBAXIgBABIABABIABgZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-91.3,146.5,182.6);
p.frameBounds = [rect];


(lib.top_base10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AGJFoIgRAHIgEACIgEgDQhshVgwhaQiWBKh6g9QhkAdg4hFQhDBTinAyIgFACIgEgFIgHgJIgBgCIg8AYIgDgGQgxhcAIhIIAAgGIA3gOIAAgWIAAgGIAGgBQBPgPAng2IAAAAQAdgnAShYQAVhrANgeIAAAAQAehHBWgfIABgBICAgmIgDAMIgEAWIgBAGQA6AbBZgVQAQgbAUgXIADgFIBhA0QBfAcAlBNQAUArAZBzQAYBsAaA0QAjBIBAAjIAFAEIgCAGIgMAZIAwAmIgDAFQgqBohSAaIgEABgAnTEbIAAgDIgDgBIADAEIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.4,-39.6,114.8,79.3);
p.frameBounds = [rect];


(lib.top_base9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AF3FlIgDgCQijjDgwh+IgDgJQgHACgGAAQgGABgNgGIgIgFQgGABgGAIIgBAAQgNAOgKAAQgKAAgMgJQgHgGgGAAQgKAAgMANQgSARgKAAQgKAAgNgOQgHgIgHgBQgGABgKAGQgPAJgFgBQgMABgWgSQgRgOgGgBQgGAAgHAGIAAAAQgNAJgJAAQgNAAgRgRIgBAAQgLgNgKAAQgEAAgQAGQgRAGgFAAQgRBOg6A4Qg+A7h0AzQgDABgDgBQgDgBgBgDQgWgzgShYQgRhOgFgbQAAgDABgCQACgDACAAQAugRA0gkQA7goAUgwIAAAAQAOgkAMhSQAIg7ANghQABgDADgBQADgCACABIBWAZIAAAAIA1AQIgBAAIAEABIAAAAQB1AcBwAAIAhgBQAagCAbgEQAvgJAzgQQAogNAsgTQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAIAEADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQADA+ANBSQAQBaAPApQAJAaAOAUQAJAOAfAhQAQARBMA6QAxAmAiAcQACACABADQAAACgBADQgrBLhBA0QglAcgpAUIgBAAIgVAGIgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.8,-35.7,117.7,71.6);
p.frameBounds = [rect];


(lib.top_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AhAEnIgEgCQgogqgmgvQgUgYgmg1QgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgIQAAgQgIhTQgJhQAAgeQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAUgZAwg3IBNhWIAZgcQACgCADgBIAFACQAYARAaAEQADABACACIABgBIAEgBQAZACAbgIQABAAAAAAQABgBABAAQAAAAABABQAAAAABAAQADABABADIASAkIAAgBIAmBMIAAABQAhA7AhAmQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABIAAACQAAA0APA8IAHAbIAAAFIgCADQg+A2hfBDQhKA1gyAeIgEACIgBgBgAgJjiIAAAAIgHANQgRAiAAAWQAAAQAPANQAOANAMAAQATAAAMgOQALgOAAgUQAAgWgPgbIAAAAIgEgJIAAABIgUgkIgBgBQgKAKgJAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.4,-29.6,45,59.2);
p.frameBounds = [rect];


(lib.top_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AhyEeQhCgPhEgdIgEgDIgBgEIAAg+IgBgBQgUgKgHgJIAAgBQgJgKAAgTQAAghALhHQALhEAAgTQAAgGgbhwIAAgCIAAgHIAAgCQAGgZASgOQARgPAYABQAQABAHgNQAEgGAEgEIABgBIAAgBIABgBQABgCACgCQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAIACAAQAGgDAHAAQAQAAAXAZIACAEIgBAEIgDADIgQAIIgBAAIgQAGQAHAYAKAZQBfATBTgJQAtgkArgxIgYgTIgCgEIAAgEIACgDQANgLANAAQAQAAAOAPIAAAAIAHAJQAMAQAOAAIABAAQAVgBAWAaQASAUAJACIABAAQAOgBARARIAAAAQARASgBAIIgBAEIgDADQhMApgbA5QgQAjAABAQAAAyATAjQAVAoAAAHQAAAEgHAMIAAAAIgCAFIABAEIAPA/QABADgCACQgBADgCABQhfAnhnAAQg/AAhFgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.6,-30.1,59.4,60.4);
p.frameBounds = [rect];


(lib.top_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("ADdCUQgogMgmgJQgogJgmgFQhNgKhIAHQggADgfAHIAAAAQgaAFgYAIIgGgBQgDgBgBgDQgnh5Adh9QAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIADgCQBdgdBeAGIABAAIAEAAQBtAHBwA3QABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIABAEQgIBaAhB9IAAAGIgEADIgEABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.1,-14.8,46.2,29.7);
p.frameBounds = [rect];


(lib.top_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AF7GcIg3hLQgtg8gSgTQhNhRAAgyQjEBJjuhgIAAABIAAABQgXA7hrBbQhgBQgzAgIgLAHIgBgNQgBg5ABgvQAAgvgMgvQgNgugegkIgGgGIAHgFIB0haQBLg9ANg+QAciIAYgvQAXgzBagWIBVgRIgBAKQgHBEAfA7IAAAAQAIAPALAPIASgYQABgDACgBQAZgdAggaQABgDACgBQAdgaAmgVQABgCADgBQAagOAbgNIADgCIBJAfQBWAhAgBwIAAAAIAlCrQATBeA/A5QAzAwB7A9IAGADIgBAFQgNBOhFA/QhEA/g/AKIgEABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.1,-41.6,120.2,83.3);
p.frameBounds = [rect];


(lib.top_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("ADSDYQj9hNipBCIgEABIgEgCIgCgDQgqiBAOhgQANhjA9hRQACgDADAAIAogIQACAAADACQACABABADQABADgCADQg6BggBBKQBjgDAoBhQA1hYB1AFQAmiqA4gPQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAEACIAZAZIACADIAAAEIgCAEQgqApgfCrIAoCkIgBAFQgBACgDABIgDABIgCAAgAAJgqIgagXIgfARIgFABIgEgCQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgCABgDIAOghIgbgZIgCgEQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAFgBIAkADIAQghQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIAFgBQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIACAEIAGAkIAkAEIAFACIACAEQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABIgDADIgeATIAGAkIAAAEIgDAEIgFABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-21.6,51.1,43.3);
p.frameBounds = [rect];


(lib.top_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AjsDCIgEgDIgBgEIgJhKQgJhLAAgnQAAhTAbhIQAJgWAJgRQACgDADgBIAxgMIgBABQATgHARgIIADgBIAEABQAWAPAXAIIAAAAQAhALAoAAQA5gBBLguIAEgBIADABIBIAlIAAAAQAeANARAUIACAFIgBAEIgEADQglARgbA5QggBDAABSQAAAnANAnIAQAzQABADgCACQgBADgDABQhZAjhfAAQhwAAh7gug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-24,52.1,48.1);
p.frameBounds = [rect];


(lib.top_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("ADJCdQgSgCgKgBQgDAAgCgCQgCgCAAgDIAAgBQgNAJgOgBQgWABgYgMIAAAAIgEgCQgMAGgNAAQgnAAgVgYIAAAAQgEgHgEgJIgFAAQgYAAgfgWIgBAAIgVgPQgGAMgOASQgUAdgagCIAAAAQgQgBgTgMQgYASgTAAQgEAAgKAEQgDABgCgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAIAAgUQgFADgEABQgDACgZgBQgcAAgMgJIAAAAQgOgKgJgaQgKADgGAAQgLAAgMgHQgLgHgEgLIAAgEIABgEQAggjANguQAJgigBgmIABgEIACgDIAHgEIAAAAQANgIAQgBQAVAAAWAMIAAAAQAJAGAHAFIAKgDQAWgHAIAAQAiAAARAXIAAABIALARIACgCIABAAQAPgHAIAAQAVAAAXAYIAAAAIALAMQAHgIAJgHQAcgXAaAAQAKAAAKADQAKgLAKgHQAUgMAkgBQAfABAYAPQAHgIANgFQAYgNAXAAQAQAAARAKQAFgHAJgHIAAAAQAagXAaAAQAGAAAIADIAEACIABAEQAEArANAmQAUA+AmAZQADACAAADQABACgBADQgLAWgNAMIAAAAQgXAZgggBQgFABgWgGIgQgDQgNAkgOAQIgBAAQgWAYgkAAIgBAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-15.7,82.2,31.5);
p.frameBounds = [rect];


(lib.top_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79E4FF").s().p("AgxEAIAAgBQgJgNgHgHQgPAQgTAGQgWAGgPgNQgLgJgGgKIgJAFQgKAGgNAAQgQAAgMgLIAAAAQgIgIgJgSIgBgDIAAgBIAAgKQgCgbgLgtQgIgggEgfIgBgKQgmgCgKgjIgEAFQgQAVgbgPQgDgCgBgCQgBgDABgDIAKgaIAAABQAHgZAEggIADgVIAAgBIAAgBQADgiAKgaIABgCQAIgTALgOQAGgJAJgIIAAABQAVgTAfgNIAAAAIAHgDIgBAAQBCgZAHgGQADgCADABQADAAABACQACACAAADQABAHAFAQQAFASAMAdIAAAAIAHARIAAAAIALAXIAAAAQAMAZAPAUQASAYAVAPIAigfIAAABIAEgFIAoglIAAAAIA9g5IAighIAfgeIADgCIAFABIA2AXIAAAAIAaAMIAWANIABAAQAXAPANAQIABACIABABQAOAVAGApIACASIAFAxQAFAfAGAVQAAACgBABQgBADgCABQgCABgDgBQgSgDgVgWQABARgDAFQgFAPgRAEQgPAFgPgKIAAABIgNgIIgKARQgPATgUAAQgLAAgPgQIACAdIAAAAQADAfAFAbIAAABIAAABQAFAYAGAVIAGAOIAAAAIAGAQIABAFQgEASgEALQgNAkgcgBQgUAAgKgHQgFgEgGgIQgFALgFAFIAAAAQgMANgUAAQgQAAgPgMQgHgGgEgGIgLAOIAAAAQgMANgUAAIgBAAQgTAAgRgTgAk0iYIgBgBIAAAAIABABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.7,-27.5,71.5,55);
p.frameBounds = [rect];


(lib.title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_3_img();
	this.instance.setTransform(-240,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-80,480,160);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_2_img();
	this.instance.setTransform(-240,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-80,480,160);
p.frameBounds = [rect];


(lib.title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_1_img();
	this.instance.setTransform(-240,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-80,480,160);
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


(lib.shoes_decor12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor12_img();
	this.instance.setTransform(-51.1,-54.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.1,-54.7,102,110);
p.frameBounds = [rect];


(lib.shoes_decor11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor11_img();
	this.instance.setTransform(-40.7,-31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.7,-31.7,82,64);
p.frameBounds = [rect];


(lib.shoes_decor10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor10_img();
	this.instance.setTransform(-50.3,-49.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.3,-49.8,101,100);
p.frameBounds = [rect];


(lib.shoes_decor9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor9_img();
	this.instance.setTransform(-45.3,-45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.3,-45.2,91,91);
p.frameBounds = [rect];


(lib.shoes_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor8_img();
	this.instance.setTransform(-44.8,-45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.8,-45.9,90,92);
p.frameBounds = [rect];


(lib.shoes_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.shoes_decor7_img();
	this.instance.setTransform(-52.3,-36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.3,-36.7,105,73);
p.frameBounds = [rect];


(lib.shoes_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor6_img();
	this.instance.setTransform(-46,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-41.5,88,83);
p.frameBounds = [rect];


(lib.shoes_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor5_img();
	this.instance.setTransform(-14.6,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.6,-15.8,29,32);
p.frameBounds = [rect];


(lib.shoes_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor4_img();
	this.instance.setTransform(-44,-38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-38.7,89,77);
p.frameBounds = [rect];


(lib.shoes_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor3_img();
	this.instance.setTransform(-43.3,-35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-35.1,87,70);
p.frameBounds = [rect];


(lib.shoes_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor2_img();
	this.instance.setTransform(-45.4,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.4,-30.3,91,61);
p.frameBounds = [rect];


(lib.shoes_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor1_img();
	this.instance.setTransform(-50,-55.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-55.2,100,111);
p.frameBounds = [rect];


(lib.shoes_base12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("Aj0H3QgnglgHgeIAEgIQgMgEgHgNQgGgLAAgNQAAgOADgMIAAgDQAAgJACgIIgCAAQgBgLgFgdQgHgeAAgWIAAgJQgCAAgCgDQgCgCAAgDIAEgVIADgIIgDAAQgHgngLgiQgPguhRiaIAFgDIgIgEQgUgOgOgVQgEgHgOg5QgOg6AAgPQAAgSATAAQALAAABAKIAGAbQASAGAOAEQAaAFAiAAQA6AAA1gaQAjgQAkgeIABAAIgEgFIAAgSIAIgGQACgBAGAAQAZAAARBSQAOA/AAAqQAKBLAMA8QAJAvAJAVQAFANAhAmQAQARAPAeIAAAEQAFAmACA7IACA1IAAAdIADABQADABACADQAAACAAADQgEAKgHAHIAAAAIgDACIgDABQABBQgkAnQgkAohNAAQgkAAgrgogAimGGQhLAGgjAhIAAABQAzBEBKAAQAuAAAigkQAdgfAFgpIgQABIgBAAQgmgDgeAAQgYAAgUACgAglEVIAAgBIgBAAIABABgAEWEWQgpAAgrgWQgygZgKglIAAgBQgFgIAAgJQAAgPAGgNIAAAAQAEgGABgGIgCACQgQgSAAgSQAAgfATgWIAAgBIgBAAQgDAAgCgCQgDgCAAgDIgDgrQAAgSAKgYIABgBQgEgBgBgDQgKgegmgkQgsgpgMgRIgOABQgVABg5g4Qg4g3ABgTQgCgHANgIQAJgHAFABQALgBAJANIABAAIAMASQA4gNA4hAQA6hBALg6IgPgKQgRgLABgLQgCgEAJgHIABAAQAHgIAJABQAbgBA6AtQAyAmAKAhQA5BTAZBAIAAgBQAXA4AWAnIABABIAzAvIAAAAQAeAdAPArIAAABIABABIAAAAIAAABQAMA+AEAZIAAAAIABARQAEAvAAApQAAASgJALIAAAAQgHAJgGACQgJAEgHgHIgCgDQgHgfgEgYQgTAfgSAbQhMBwhAAAIgBAAgACvCDQgLADgJADQgBAIgFAJIAAABQgFAKAAALQABAFACAGIAAAAIAAABIABABQAHAKASAKQAbAOAZAAQAgAAAogYIAAAAQAagQAQgQIgigRQgwgbgkAAQgTAAgbAIgACbCEIAAABQABAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.7,-54.4,101.5,108.8);
p.frameBounds = [rect];


(lib.shoes_base11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AjwE9Qg3AAgUgVIgBgCIhEhpIgDgBQgDgBgBgDIgJgvIgGgnQgCghBGgPQAtgKAqgBQAdABAeAFQAVAEANAGIAAgIQgBgTAFgkQADglAAgTQAAgCACgCQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAIAtBgIABACQALCWgZA7QggBNhnAAIAAAAgAk0CcQgrAKgSAQQAWASAbAaQAWASAgAAQA1AAAdgcQAWgUAGgiIgXgIQgegJgOgBQgoAAgtAMgABNAGQgugigKgQIgBgDIAAgDQgBgeALgUIAAgJIAAAAQAChPAWgJQAVgMAwAAQAtAAAzASQAvAQASAZIAahBIAAAAQAXhAAUghQABgDADgBQADAAACAAQADABABADIAoBGIABADIgBAEQhJCdglAtQg/BIhqAAIAAABQgJAAgpgigAA0hoIgBAAIgHAKIgBACQgJAPABAYQAkAYA3AAQBAAAArgnQgTgOgegQQgxgZgZgBQgnAAgTAUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.7,-31.7,81.5,63.5);
p.frameBounds = [rect];


(lib.shoes_base10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AkOHgQgXgRgOgJIgCgBIgBgDQgMglgQgnIgBgCIAEgUQgTgdgGgkIAAgCIABgBIgBgBIgBgDIgIiIQgGhSgcgvIgBgDIABgDQgVgHgTgJIAAAAIgBAAIgHgHIgBgBQgSgUADgVQABgXgEgIQgMgPgIgLQgTgcAKgOQAEgIALgHIAEgCIAPAIIACABIADAHIABABIAFALIAFAOQA1ADBJgLQBNgOA6gYIAGgnIADgBQAJgGAEAAQAEgBAJAFQAQAIgDAfIgFAiIAIAiQAHAhgGAOIAAAAQgFANgEAFIgBABIgBABIgLAGQALAXAWATIAAAAQAjAhASAWQAGAHAFAPIABAFIABgBIA1BkIAAADQgGASgEAaQgFAdAAAWIAFBCIAAAAQAAA6g1AvIAAAAQgyAsg/AAQg/AAgZgSgACoDbQgggkgGgRIgEgKIABAAIglgcQgagUAAgdQAAgZATgqIgBAAQAFgLAEgNQAIgiAAg0IAAgDIAAgZIAAgLQgBgRgEgPIgFAAIgCAAIgIgDIgBAAIAAAAQgagJgIgUIAAABQgKgUgIgFQgRgHgLgGQgfgPACgRQAAgJAGgLIACgFIATAAIAEAFIALAHIAMAKQAvgYA6guQA8gyAmgzIgPgkIACgDQAFgJAEgCQADgDAJAAQATgBANAcIANAgIAXAZQAXAZACAPQACAPgBAGIgBACIgUAjQAEALAIAJIgBAAIAmAfQAvAlAmBOIAJgIIAFAGIAWAgIABAAIAXAhIACAEIgCAEIhRB7Qg0BPgWAcQgYAbgyAXIgBAAQgmAOg7AGIgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-49.8,100.8,99.8);
p.frameBounds = [rect];


(lib.shoes_base9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AjFHAQgdgGgZgNIgmgSIgahIIABAAIgCgCIgDgBIAth1QgqgvgJg/QgFgkAPgjIAKgbIhlgqIgZgwIAKgGICGA6IBXitQhHA4hVAeQgoAQgoAFIgPgeQAAgEACgBQASgJAUgFQBagZBPg2IA5goQADgCAFAAQAQAmgFAsQgBAJgFAJQgpBNgnBOQAaAQAPAdQAHALgBAPQAABNgWBIICBBoQAIgfgFggQgGgkgCgmQAAgTADgQQAFgfAHgcIANAEIAPAzQgLAuALAsQANAxgHAyQgJAygkAmQggAigpAAQgMAAgNgDgAkdFkQAqAgA2ACIAAAAQAyAGAZgrIAAAAIiBhnIgtBlIgDAEIABAAIABAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAgAj4DuIACABIABAAIAAgBIgCAAIgBAAgAkECvIAMhdQACgbgRgUIgFgEQgpBKAxBGgABmCgIgDgDQgPgrAEgsQACgZAKgVIAPgbQgwhTAxhTIgWgKIgBgoQAVgCAVAPIBiizQhOBbhoA4QgTgEgFgTIgBgEQALgNAUgKQAYgMAWgRQBNg9BBhIIAfBBIhvDEQAyAmgNA9QgKAugbAnIBcBhQAqgRAVgrQANgeAJgdQAPg0AVgwQARgnAigNIAXDTIgjAuIg1gVQgoBZhgAeQgYAIgXAAQgpAAgmgYgABpBTQAFANAaAJIAdAJQAeAHAcgLIhQhLgABaBOQgGAGAIAAIAAgJIgCADgACFhKIAHAcQAcgpgNgwQgCgJgFgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.3,-45.2,90.6,90.4);
p.frameBounds = [rect];


(lib.shoes_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("Aj1G6IgBAAQgagVgRgLQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgWg+QgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAcAUALAHIAZAPIAcAKIAAAAQAdAJAIAAQAoAAAegsQAagmABghIgBgIQgWgPgPgHIAAAAQgXgKgaAAQgZAAgWADQgPABgOADIgBAAIgMADQg6APgBAjIgCAEIgDADIgHADQgDABgDgBQgDgBgBgCIgFgLQgBgEAAgTQgBguBCgYIAAAAIAVgGIgEgSIgMAEQgkAPgeAqIgEACIgEABIgEgDIgCgEQgIhGAugTIgBAAQAbgNANgFQgHgVgKgXQgnhggOgrQgpAGgiAAIgEgBIgDgDIgVgsQgBgDABgCQABgDACgBQACgCADAAIAUADIAVABQBCAABQgaQAxgQAjgUQADgCADABQACABACADQACACgBADQgEAPAAANIAAAEIgBADIgBADQglAhhYAVIgIACIAxB5QAOAhAJAfQAXgCAcAAQAWAAA4AMIADgVQAAAAAAgBQABAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAMgDQADAAADACQACABABADIAJArIAAACQAAASALA7IABAAQALA9AAAXQAAA4grArQgrAtg+AAIAAAAQgmAAgbgRgAhXDUIgFgbIgqgJIAAAAQgagFgQAAIgjACIADAQQAVgCAZADQAdAEAYAJIgBAAQAQAFAHAEIAAAAgABuCaIgCgBIgCgDIgRgtQgCgDACgDQABgDADgBQACgBADABQBWAhAegDQAmgEAVgNQAOgKANgKQgOgXgugVQgfgPgcgGIAAAAQgPgDgOgBIgBAAIgHAAQgFAAgXAJIgFACQgCABgDgBQgDgBgBgDQgCgCABgDIAMgpIADgEIADgBQAUgEAPAAIAJAAQADgLACgLIgtADIgCABIgBAAIgFAAIgDgDIgBgEIABgsIABgDIADgDIAFgBQAKgCAhAAQgKgogbgwQgNgZgPgUIgPAIIgDABIgDAAIgpgTIgDgDIgBgEIABgEIAEgDQAQgGAVgNIAAAAIAbgTIgBAAQATgOAWgUQBCg7Ahg7QABgCADgBQADgBACABQADABABADIAOAnIABADIgBADQgiA4g+A3IglAfIAiAzIABABQAfBJAKAlQAiAEAiALQA5ARAbAdIAOgeQAagyAXgaQACgCADgBQADAAACACQACACABADIAJA4IgBADIgBACQgSAYgUAnQgaAvgLAqQgNAtgSATIAAAAQgSASgXAPIAAAAQgYAQgqAEIgHABQgiAAhSgggAFNAmIAGgTIAAABIACgHQgYgggpgQQgbgLgigDQgBAKgDAHIAAgBIgDAKQAaAFAaALIAAAAQAwASAZAbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.8,-45.9,89.6,91.9);
p.frameBounds = [rect];


(lib.shoes_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AiSFuQg3gDgzgmQgtghgVghQgkAogogKQgtgJgvhmIAAgBQguhjANg0IAAAAQAEgWAGgIIAAgBQAOgYBJATQA/APA4A3IABgBQAPgKAhgJQAngKATAFIAAgBIAFACQA4h+AwgcIAAAAQAQgKAMABQgThpATguQAIgVAHgKIAAgBQASgVBDAdIAAAAQA7AaAuBBIABgBIACgBQAPgHAkgEQAngEATAIIAAAAIAEADQBLh2A0gVIgBAAQArgSAlAPQAvASAHBhQAGBTgWA1QgTAwgqAQQgTAIgXgBQgWA5geAgIAAAAQgqAsg9AAQgZABghgWQgdgTgEgTQgBgCABgDQACgDADgBQACgBADACIADACIgBgBQAbAQAhAAQAyAAAsguQAVgUAOgZIgMgFIgBAAQgHgDgggZIABAAIgDgBIimAVIgRAWIAAABQgcAegbAFQAJA9gKAtQgMAygmAXQgMAIgNADQgDBDglA2QgmA4g0AAIgGgBgAkgDVIgFAJQARAgAdAXQAkAdAnAAQBpAAAQhxQgPgBgQgDIAAAAQgIgCgkgUIAAAAIgBgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.3,-36.7,104.7,73.4);
p.frameBounds = [rect];


(lib.shoes_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AkZGKIgBAAIgxghQgDgBAAgDIgPg4QgBgDABgDQABgCADgBQACgBADAAQADABABACQAOAVAYARQAlAaAnAAQA4AAAcgsIAAAAQAOgYAFgfQg4gkgqAAQgsAAgiALIgBAAQgkAMgTAXQgCACgCABQgDAAgDgCQgCgBgBgDIgOg/IgMgyIAAgEIACgDQAagbAegNQAhgNA5AAQBLAAAhAUIAAgFQgTgJgSgdQgagrAAg9IAAgJQgTAXgdAPQgxAXhBAAQgbAAgOgEIgFgCIgDgCIgCgDIgBgIIAAAAIgFgWQgBgDABgDQACgCACgBQADgBADABIAVAGQAWAGAWAAQApAAAogYQAogWAZgmQABgDADgBQADAAADABQACACABADIACAJIADARQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIgHANIAAAAIAEADIAFAJIAAABQAHAKAJAJIACADIABAEQgCALAHAVQAGAYAEAGIAAABQADAGAPAWQAGgUgBgPQgBgDACgCQACgCACgBQADgBADACQACABABADIAUA5IABADQAAAHgEAPIAAABIgEAPQAAAZAHAfQAIAgAAAiQAABCgiAuQgmAyg/AAIAAAAQgfAAgmgVgACRCFQglAAgOgMIgCgCIgjg3IgBgEIACgFIAEgCIAEAAIAjANQAbAJANAAQBFAAAtgtIgBgBQgNgTgfgMQgsgVguAAQgKAAgXAHIgJADQgDABgCgBQgDAAgBgDQgCgDABgCQADgPAAgJQAAgQgFgZIAAgBIgDgmQAAgDACgCQABgCADgBQAZgGAlgGQA3gKB3A+QgIgQgJgcQgUhBABhWIABg1IABgEIAEgCIAEgBIAEADQAHAJAMAJIABAAIADADIACADIABAEQgDASAAAOQAAAoAPBCIAAABQAGAbAIAaQAXg3AWgjQACgCACgBQADgBACABQABAAAAABQABAAAAAAQABABAAAAQABABAAAAIAYArIABAEIgCAEQgYAfgbA0IAAgBIgyBnQgcA5gmAaQgpAdg/AAIAAAAgABCjjQgDgBAAgDQgCgGgDgFIgKgLQgCgCAAgDQAAgDACgCQACgCADAAQAqgEBIg+IAAAAQAygrAWglQABgCADgBQACgBADABQADACABACIAFAKIAAABIAIAMIABAEIgBAEQgdApgqAmQhMBFgvAGIgBAAIgEgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.8,-41.5,83.6,83.2);
p.frameBounds = [rect];


(lib.shoes_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AhVCdQgDgCgBgCIgFgOIgsgDIgEgBIgCgEIAAgEIAPgwIgLgNQgDgDABgDIAAgDQAAgKABgLIACgEIAEgCQAzgSBAhFQAtg0AVgrQABgDADgBQACgBADABIAQAGIAAAAIADABQAHgBAAAQQAAAEAGAMIAzgBQADAAACACQABAAAAAAQAAABABAAQAAABAAABQAAAAABABQAAACgBADIgcAyIAIAQQABADgBACQgIAfg/BDQhKBVg8AMIgCAAIgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.6,-15.8,29.3,31.7);
p.frameBounds = [rect];


(lib.shoes_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AjUGAQgSABgXgZIAAABQgiglgLgJIgDgCIAAgEIgBgPIhDgQIAvg3QgQgpgag2Qg0hngYhCIgEgKIAMAAIAQACQAiAFAfAAQA5AABMgbQBEgYAiggIAKgJIACANQAPBIADBmQABAtAGAiIBCAVIgyAsQgSAjgRAfIgFAJQgVAggVAbQgtA3gVAAIgBAAgAlUA0QgLAKAAAMQABAcAqAvQAqAvAYABQAdgBAUg5QARgvAAgjQAAgagIgJQgKgKgbAAQgVAAgVAKQgRAIgMANIgDADIgEgBQgKgDgGAAQgPAAgKAKgAC5BWQgTgQgHgEIgDgDIAAgEIAAgDIgzgUIAugkQgFgIgHgGIgsgfIg0gpIgjgdIgJgIIALgFQBIgXA4g4QBDhCAchhIAEgNIAIAKQAaAcAUAmIAAAAQAGALAeBCQAYA3AdAkIBBAAIgoAiIAUAWIADAEIgCAEQgZAxggAnIAXAlIgqgOIgUAWQg9A8gggBQgLAAgVgOIgZAXgACKiOIAAABQgNAQAAARQABAaAwAbQAuAaAjAAIACAAIADgOIACgGIAHABQAPACAJgPQAJgVAAgrQAAgYgNgUQgNgTgQgBQgNABgPAZQgEAGgDAHIgDAGIgGgDQgfgMgSAAQgQABgNAQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.5,-38.5,89.1,77);
p.frameBounds = [rect];


(lib.shoes_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AlVE9QAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIgsiZIAAAAQgDgCgBgDQgKgigEgbIgIg+IAAgBIAAgBIABgDIABgDQAVgSAYgGIgBAAQBHgYApAEQApADARAEQAOADAZALQAAgSACgRQADgjAHgXQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIADAAQACAAADACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAZCAIAAABQANCTgcBLQgkBbhjAAQgqAAgtgigAl0CXQAqBGBRAAQAlgBAbglQAOgTAIgWQhAgdgggCQghgCgkARIAAAAQgfAOgNALgACmBhQgggBgNgBIgogEQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgyijQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAEABQAUANAPAFQARAGAYAAQBBAAAhgWIADgBQgKgWgMgNQgeggg7AAQgnAAgSAOIgFACQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQgCgCAAgCIgBgHIACgjQAAgKgFgdIAAAAIgEgoIAAgBIABgEQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAZgMANgEQAVgGAiAAQA6AAAzAkQAbAUAVAdIALgbIAEgJQAag6AnguQABgCADgBQADAAACACQADABABADIAqCYIAAAEIgCAEQg1AvgOAdQgOAdgLAeQgLAggIAOQgiA3ghAXQghAWgfAAIgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-35.1,83,70.3);
p.frameBounds = [rect];


(lib.shoes_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AjuEuQgGgBgPgQIAAAAQgTgUgkgvIgBgBQgCgCABgDQAAgDACgCQADgCACAAQADAAACACQAOAOANAHQAaAPAiAAQBJAAARg5QACgJACgiIAAAAIAAgCQgLgegSgLIAAgBQgTgLgkAAIgNAAIgTAMIgBAAIgKAEIAIAIIAAAAIAPAUQAAABABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgMADgNABIAAAAIgLgBIADALQAEAMAAAOIgCAEIgDADIgFAAQgOgDgKgHIAAABIgJgHIgEALIAAAAIgIAQIgDADIgFABIgEgCIgFgGQgEgDgEgFQgDgGgEgIIAAAAIAAgBIgLAKIAAAAQgKAIgLAGQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQgCgNAAgMIAAAAIABgMIgLADIAAAAQgKABgQgBIgEgCIgDgDQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQADgJAIgOIABAAIAHgJIgLgDIAAgBQgPgGgIgGQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQANgKAJgEIgBABIAKgGIgIgHIgBgBQgKgKgGgJQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgDQANgDAMgBIAMAAIgDgLIAAAAQgCgMgBgMQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAXAKIABAAIALAFIAGgMIABAAIANgVIADgDIAFAAIAEADIANAVIAAABIAEAJIAAAAIAJgHIAFgEIACgBIASgDIgBAAQAUgDAWAAQAyAAAoASQASAGAPAMIABgLQAGglgHgvQgBgDACgCQACgCADgBQADgBACACQApAaAIBGIAAAAQAHAxgKBFQgIA6gKAcIAAAAQgRAzgnAWQgdAQgqAAQgcAAgFgBgAC/ArIgCgBIhTg2IgBAAIgEgBIgBgBQgDAAgBgCQgHgKgFgJIgEgKIgEAEIgBABIgDACIgBABQgJAHgMAGQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgCgNAAgMIAAgBIABgLIgKACIAAAAQgLACgPgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBgBAAIgCgEQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQADgJAHgNIAAgBIAHgIIgKgEIgBAAQgMgGgJgGQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAOgKAGgEIgBAAIALgFIgJgIIAAAAQgIgKgHgKIgBgEIACgEIAEgDQAKgEANgBIALAAIgDgKIAAgBQgCgMAAgNQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAIAYAJIAAABIAMAHIAGgOIAAgBIANgVIAEgDIAEAAIAEADIANAVIAAABIAFAKIAIgHQAIgHAOgHIAEgBIAEACIACAEIACANQAQgDATAAQAoAAAvAQIAAgBQAoAOAPAQIACgEIAAAAQAbg9ApgwIAEgCIAEAAIAEADIAkA1QACACgBADQAAADgCABQgeAegZArQgcAzgGAqQgGAtgqAkQgrAmgyAAIgBAAQgLAAgTgFgAB7gkIAAAAIgGAMQAQAEAZAAQBBAAAigWIgBAAQAUgMAOgZQgIgagYgOIAAgBQgUgMgcgCIgTALIAAABIgKAEIAHAIIAAAAIAPAUQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgNADgMABIgBAAIgLAAIAEALQADAMAAAOIgBAEIgEADIgEAAQgOgDgLgHIAAAAIgJgGIgDALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.4,-30.3,91,60.8);
p.frameBounds = [rect];


(lib.shoes_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AiNIoQg5AAgpgrIAAAAQgFgFgihEQgLgSgHgUIAAAAQgKgagFgfIAAAAIgBgKIAAABIgQhdIAAAAQgIgxgNgtQgBgDACgCQAAgBAAgBQABAAAAAAQABgBAAAAQABAAAAgBQgSg5gbg5IAAABIgzhgQg6huABhoQAAgHADgEIAEgDIAEAAIAtAPIACAAQAmAKAnAAQAzAAAygVQAjgPAYgWQACgCADABQADAAADACQA5A8AMCAIAAAAIAHBvQAEA6AJAqIABACIABAAIAmAiQAgAcAFAqIAAABIAAAAIAAABIAZBOIAAADIgDBdQgDA7gIAlQgbBshiAAIgBAAgAlYCWIAFACIAAgBIgBAAIABAAIgCgFIAAAAIAAABIAAABIAAgBgAlSCQIAEABIAAABIAAgBIgBgCgACKDRQgTgOgGgMIgBgDIAAgEQgKgVAAgPQAAgXANgsQAGgWAEggQACgaAAgiQAAgUAEgVQgNgSgIgRQgIgSAAgGIAAgBQiEh0gtgjQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCQABgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBQBpg5Bci4IADgDIADgBIAEABQBJApAeAhQAdAfATAuIAAAAQArBqAfA/IAAABQAQAhA4AgIABABQAyAlABA8IAAABIAFATIAMAoIAAAEIgBACQgZAagQAaIAAABQgGAKgpBVQgeBAgdAZQgoAjhHAAIgBAAQgkAAhBg/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-55.2,100,110.5);
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
	this.instance = new lib.nav_navigation_img();
	this.instance.setTransform(-45,-45,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ak8E9QiFiDAAi6QAAi5CFiEQCDiEC5AAQC6AACDCEQCECEABC5QgBC6iECDQiDCEi6ABQi5gBiDiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.mouth_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.mouth1_img();
	this.instance.setTransform(-35.1,-12);

	this.instance_1 = new lib.mouth2_img();
	this.instance_1.setTransform(-3.7,-4.7);

	this.instance_2 = new lib.mouth3_img();
	this.instance_2.setTransform(-27.5,-3.7);

	this.instance_3 = new lib.mouth4_img();
	this.instance_3.setTransform(-32.8,-5.6);

	this.instance_4 = new lib.mouth5_img();
	this.instance_4.setTransform(-27.2,-6);

	this.instance_5 = new lib.mouth6_img();
	this.instance_5.setTransform(-32.9,-1.8);

	this.instance_6 = new lib.mouth7_img();
	this.instance_6.setTransform(-30.2,-3.5);

	this.instance_7 = new lib.mouth8_img();
	this.instance_7.setTransform(-31,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.1,-12,70,24);
p.frameBounds = [rect, new cjs.Rectangle(-3.7,-4.7,31,18), new cjs.Rectangle(-27.5,-3.7,61,19), new cjs.Rectangle(-32.8,-5.6,71,18), new cjs.Rectangle(-27.2,-6,53,18), new cjs.Rectangle(-32.9,-1.8,66,11), new cjs.Rectangle(-30.2,-3.5,56,67), new cjs.Rectangle(-31,-3,59,15)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero
	this.instance = new lib.hm2_img();
	this.instance.setTransform(525,65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero
	this.instance_1 = new lib.hm1_img();
	this.instance_1.setTransform(306,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero
	this.instance_2 = new lib.hm3_img();
	this.instance_2.setTransform(333,145,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,-75,756,695);
p.frameBounds = [rect];


(lib.hero_eyes_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor8_img();
	this.instance.setTransform(-47.3,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-14.3,95,29);
p.frameBounds = [rect];


(lib.hero_eyes_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor7_img();
	this.instance.setTransform(-51.1,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.1,-26.5,102,53);
p.frameBounds = [rect];


(lib.hero_eyes_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor6_img();
	this.instance.setTransform(-41.5,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-25.2,83,50);
p.frameBounds = [rect];


(lib.hero_eyes_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor5_img();
	this.instance.setTransform(-43.2,-25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.2,-25.8,87,52);
p.frameBounds = [rect];


(lib.hero_eyes_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_eyes_decor4_img();
	this.instance.setTransform(-51.7,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-31,104,62);
p.frameBounds = [rect];


(lib.hero_eyes_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor3_img();
	this.instance.setTransform(-49.4,-24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.4,-24.4,99,49);
p.frameBounds = [rect];


(lib.hero_eyes_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor2_img();
	this.instance.setTransform(-60.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-27,116,54);
p.frameBounds = [rect];


(lib.hero_eyes_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor1_img();
	this.instance.setTransform(-47.9,-24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.9,-24.4,96,49);
p.frameBounds = [rect];


(lib.hero_eyes_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933CC").s().p("ABkAhIgLgOQgPgTgCgbIAMgCIApgFIAigFQAjgFAlgBIAmgBIABALQgBAYgJARQgIAOgMANQgdAdgoAAQgpAAgegdgAi4A5QgjgCgZgfQgNgOgFgPQgHgSAAgVIABgRIAYAAIABAAIAEAAQA0ADAqAJIANAEQATAFAOAGQgBAWgHAQQgHAOgKAMQgXAbghAAIgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-6.2,54,12.5);
p.frameBounds = [rect];


(lib.hero_eyes_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933CC").s().p("ADIA7IgBAAIgOgBIgVAAQAJgEAIgJQAPgOABgTIAAgEQABgIgCgHQAGAAAEgFIAEgFIABAAIACAAIACABIADABQAEAMAAAMIAAAHQgCAYgQATIgEAAgABUA0IgEgBQgMgSgBgVIAAgDQAAgeAXgXIACgCIAFABIAZAFQgKAEgHAHQgQAQABAVIAAACQAAAVAPAOQAGAHAHADIgigDgAhXAyIgDAAIgjgCQAKgEAIgJQAQgPABgUIgBgNIgBgEQAGAAAFgFQAFgFAAgHIgBgEQAJAOABAQIABAIQAAAdgUAVIgBAAgAi2AtIgBAAIgTgBIgEAAQgPgUAAgYIABgKQACgNAFgLIAGgBQAPgFAPgEIgGAFQgLALgDAPQgCAGABAHQAAAUAPAPQAGAGAHAEIgMAAgAiDg1IAhgEIAGgBIADAEIAFAFQgEgDgGAAQgGAAgGAGIgDAEQgKgIgMgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.2,-5.9,44.5,11.8);
p.frameBounds = [rect];


(lib.hero_eyes_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933CC").s().p("AijBSQgfgDgVgZQgTgaAAggQAAgjATgWQAVgXAfADQAdACAVAaQAVAaAAAgQAAAjgVAWQgTAVgbAAIgEgBgABfA6QgYgYAAgiQAAghAYgZQAXgYAjAAQAiAAAZAYQAXAZAAAhQAAAigXAYQgZAYgiAAQgjAAgXgYg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.6,-8.3,47.2,16.7);
p.frameBounds = [rect];


(lib.hero_eyes_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933CC").s().p("AlZAWQBSgxBDgMQAtgIApAXQAqAYAHAqQAJAuglAGQgIAChDgPQhEgPg4AKQgUAEgoAPQgoAQgZAEIgSADQgEgqBag2gAGHAuQgYgKgogTQhTgog3AKQgoAHgfAOQgfARgRADQgOACgFgBQgGgDgCgOQgEgTANgZQAIgQALgMIAQgRQAGgHARgHQARgJA2gJQA3gKAYAEQAYAEAwAfQAJAHArAxQAqAvAGAQIAAACQABADgCAFQgCAGgDABIgDAAQgJAAgXgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.2,-11.8,86.5,23.6);
p.frameBounds = [rect];


(lib.hero_eyes_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933CC").s().p("Ak3C2QgfggAAgxQAAgsAZgjQAbgGAaACQgLAGgJALIgEgBQgSgBgBAVIADAKIACADQgEAMAAANQABAfATAWQATAVAcgCQAcgBAUgXQATgZAAgfQAAgWgJgRQAYAOAVAVIAAAIQAAAxgeAlQgeAjgrADIgHAAQgmAAgbgegACFCfQgjgiAAgxIABgIQAZgXAagPIgDAHQgLACAAAQIACAJIABADIAAACQAAAgAXAXQAWAWAhAAQAfAAAXgWQAWgXAAggQAAgggWgWQgMgMgOgDQAdgEAfAEQAeAgAAAsQgBAxgiAiQgjAigwAAQgxAAgjgigAiLA/Qg+hAhdABQgfAAgfAIIgSADQgWACgagRIgCgBQAXhFAWgnQArhJA/gEQBTgFA0BcQAxBcgLCCQgSgggVgYgABjhzQA7hgBdAAQBJAAAxBHQAaAmAaBEIgDAAQgdAVgZAAIgVgDQgkgFgiABQhrAChGBFQgZAZgUAhQgNiBA5hfg");
	this.shape.setTransform(0.4,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.1,-31.7,85,42.5);
p.frameBounds = [rect];


(lib.hero_eyes_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933CC").s().p("ACTA3QgXgVAAggQAAgRAJgRIACgCIAAgBQACAHAGAGQAEAEAGADQAFACAHAAQANAAAJgJQAJgKAAgMIAAgJQgDgIgGgGIgEgDIADgBIACAAIAMgBQAgAAAWAWQAWAWAAAeQAAAggWAVQgWAXggAAQgfAAgWgXgAj9AzQgWgWAAgeQAAggAWgVQAWgXAgAAIAMABIACAAIgBACQgHAGgDAKIAAAAIAAAHQAAAPAKAJQAJAKAOAAQAGAAAFgBIACgBQAGgDAFgFQAFgFACgEQAJAQAAATQAAAegXAWQgWAWgfAAQggAAgWgWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.6,-7.8,55.4,15.7);
p.frameBounds = [rect];


(lib.hero_eyes_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933CC").s().p("AkHBEQgWgWAAggQAAgdAWgXQAXgWAfAAQAeAAAWAUIACACQAXAXAAAdIAAAEQgBAdgWAVQgWAXggAAQgfAAgXgXgACcAnQgXgXAAgdIAAgEQACgdAVgVQAWgXAgAAQAfAAAXAXQAWAWAAAgQAAAdgWAXQgKAKgMAFIgOAFQgJACgJAAQggAAgWgWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.7,-9.1,57.4,18.3);
p.frameBounds = [rect];


(lib.hero_eyes_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933CC").s().p("AjgBXQgjgEgTgcQgVgaAGghQAFglAdgVQAbgXAjAFQAiAEAVAbQAUAcgFAhQgGAjgcAWQgZATgcAAIgKgBgAkNgEIABgBIgBgBgACcA+QgbgWgDgjQgEghAWgcQAXgbAjgDQAkgEAaAWQAcAXADAjQAEAhgXAbQgVAcgkADIgJABQgeAAgYgUgAENgKIAAABIACgCIgCABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.6,-8.8,59.2,17.6);
p.frameBounds = [rect];


(lib.hat12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat12_img();
	this.instance.setTransform(-96.2,-66.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.2,-66.7,192,138);
p.frameBounds = [rect];


(lib.hat11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat11_img();
	this.instance.setTransform(-114.5,-72.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-72.4,229,145);
p.frameBounds = [rect];


(lib.hat10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat10_img();
	this.instance.setTransform(-39.9,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.9,-42.2,80,84);
p.frameBounds = [rect];


(lib.hat9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hat9_img();
	this.instance.setTransform(-81.2,-44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.2,-44.1,181,81);
p.frameBounds = [rect];


(lib.hat8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat8_img();
	this.instance.setTransform(-101,-43.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-43.7,202,87);
p.frameBounds = [rect];


(lib.hat7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hat7_img();
	this.instance.setTransform(-56.5,-41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-41.4,113,83);
p.frameBounds = [rect];


(lib.hat6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat6_img();
	this.instance.setTransform(-74.9,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.9,-33.5,150,67);
p.frameBounds = [rect];


(lib.hat5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat5_img();
	this.instance.setTransform(-120.6,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.6,-55.4,241,111);
p.frameBounds = [rect];


(lib.hat4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat4_img();
	this.instance.setTransform(-112.8,-80.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.8,-80.1,226,160);
p.frameBounds = [rect];


(lib.hat3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat3_img();
	this.instance.setTransform(-41,-40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-40.1,82,80);
p.frameBounds = [rect];


(lib.hat2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat2_img();
	this.instance.setTransform(-44.7,-48.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.7,-48.7,90,98);
p.frameBounds = [rect];


(lib.hat1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat1_img();
	this.instance.setTransform(-104.5,-42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-42.9,209,86);
p.frameBounds = [rect];


(lib.hand_accessory12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hand_accessory12_img();
	this.instance.setTransform(-92.4,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.4,-54.9,185,108);
p.frameBounds = [rect];


(lib.hand_accessory11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_accessory11_img();
	this.instance.setTransform(-55.3,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-77.5,111,156);
p.frameBounds = [rect];


(lib.hand_accessory10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_accessory10_img();
	this.instance.setTransform(-40.5,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.5,-44.8,81,90);
p.frameBounds = [rect];


(lib.hand_accessory9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_accessory9_img();
	this.instance.setTransform(-61.7,-57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-57.4,124,115);
p.frameBounds = [rect];


(lib.hand_accessory8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_accessory8_img();
	this.instance.setTransform(-65.2,-97.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.2,-97.8,131,196);
p.frameBounds = [rect];


(lib.hand_accessory7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_accessory7_img();
	this.instance.setTransform(-95.8,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.8,-57,192,114);
p.frameBounds = [rect];


(lib.hand_accessory6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_accessory6_img();
	this.instance.setTransform(-102,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-68,204,136);
p.frameBounds = [rect];


(lib.hand_accessory5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory5_img();
	this.instance.setTransform(-31.7,-90.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.7,-90.3,64,119);
p.frameBounds = [rect];


(lib.hand_accessory4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory4_img();
	this.instance.setTransform(-119.6,-51.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.6,-51.9,239,104);
p.frameBounds = [rect];


(lib.hand_accessory3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hand_accessory3_img();
	this.instance.setTransform(-63.6,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-36.8,127,74);
p.frameBounds = [rect];


(lib.hand_accessory2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory2_img();
	this.instance.setTransform(-27,-82.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-82.4,54,165);
p.frameBounds = [rect];


(lib.hand_accessory1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hand_accessory1_img();
	this.instance.setTransform(-105.4,-47.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.4,-47.7,211,96);
p.frameBounds = [rect];


(lib.hair_decor16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor16_img();
	this.instance.setTransform(-94.3,-174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.3,-174,189,348);
p.frameBounds = [rect];


(lib.hair_decor15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor15_img();
	this.instance.setTransform(-61.9,-136.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-136.7,124,273);
p.frameBounds = [rect];


(lib.hair_decor14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor14_img();
	this.instance.setTransform(-127.7,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.7,-119,256,239);
p.frameBounds = [rect];


(lib.hair_decor13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor13_img();
	this.instance.setTransform(-153.4,-201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-153.4,-201,307,403);
p.frameBounds = [rect];


(lib.hair_decor12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor12_img();
	this.instance.setTransform(-156.6,-237.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.6,-237.6,313,475);
p.frameBounds = [rect];


(lib.hair_decor11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor11_img();
	this.instance.setTransform(-103.4,-109.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.4,-109.7,207,219);
p.frameBounds = [rect];


(lib.hair_decor10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor10_img();
	this.instance.setTransform(-115.7,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.7,-94.5,231,188);
p.frameBounds = [rect];


(lib.hair_decor9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hair_decor9_img();
	this.instance.setTransform(-187.9,-87.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187.9,-87.7,376,173);
p.frameBounds = [rect];


(lib.hair_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor8_img();
	this.instance.setTransform(-209.2,-105.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-209.2,-105.2,419,210);
p.frameBounds = [rect];


(lib.hair_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor7_img();
	this.instance.setTransform(-157.7,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.7,-120.5,315,241);
p.frameBounds = [rect];


(lib.hair_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor6_img();
	this.instance.setTransform(-107.7,-108.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.7,-108.7,216,217);
p.frameBounds = [rect];


(lib.hair_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor5_img();
	this.instance.setTransform(-119.8,-86.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.8,-86.7,240,174);
p.frameBounds = [rect];


(lib.hair_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor4_img();
	this.instance.setTransform(-123.6,-63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.6,-63.2,247,127);
p.frameBounds = [rect];


(lib.hair_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor3_img();
	this.instance.setTransform(-100.7,-100.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.7,-100.2,202,200);
p.frameBounds = [rect];


(lib.hair_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor2_img();
	this.instance.setTransform(-111.7,-122.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.7,-122.3,224,245);
p.frameBounds = [rect];


(lib.hair_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor1_img();
	this.instance.setTransform(-161,-117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161,-117.9,321,236);
p.frameBounds = [rect];


(lib.hair_base16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("Aj8YOQg3hXgThYQgDAAgDgBQgCgCgBgDIgBgEQiOg8hUiYQhgiuAAjhQAAi8BFioQAuhtBqieQB2irAihIQBFiMAAiSQAAhHgehEQgphchKAAQgHABgDABQgDABgDgCIgCgCIAAAEIAAAPIgMgIQgwgghngxIgCgBQiBg/g1gkQjUiMAAjtQAAh8BdhwQBriECfAAIABAAQAWADAVAFIgDADQACgCADgBQADAAADACQAMgQAPgQQCWikDeAAQA/AABLApQBcAxBAB2IADAAQADgBACACQADACAAADQA0gIAvAAQB2AABxAvQByAvBeBSQDPC1AQDxIABApQAAByggBvQgUBAgeA/Qg2Bwh/CrQiLC5gqBLQg/BygPBvQgFAiAAAjQAAAlAQBDQATBRAgBFQBJCgBtAcQgyAeg1AAQhbAAhShkQgTgXgOgVIgFgJIgBAOQAABHBLBxQBMBzAABJQAABxgqBOQgfA3g/A2QhTBGgLANQgrAwAAA/QAAAsAZAdQAeAkA9AAQA6AAAagiQAOgTAMgoQAFAMAAAIQAAA5grAuQgtAxg9AAQgsAAghgLQg6AbgoAOQgnAMgiAAQjFAAhxi2gAlmqGIgEAGIAEgGIAAgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-173.2,188,346.5);
p.frameBounds = [rect];


(lib.hair_base15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ABxVLIgGgCIABgHIAEgIIAAAAQANgeAAgdQAAg6gwghQgngahUgTIiZgjIAAAAQhZgagugnQibiIhCijQg/icAAjlQAAjYBMiUQAyhnBzhxIAAgBIBYhVQAvgxAcgpQBKhrgBiOQAAi6hQiQQgig/hBhUIAAAAIg0hBIgBgCIghgqIgCgCIgggpIgJgLIAOgBQApgDAkg9IAHgLIAGALQAMAXAQAWIAAABQAUAcAaAbIACACQAcAdAlAaIABABIABAAIA7AlIABABIABAAQBGAnBHARIABABIABAAQA6ANA/AAIADAAIABAAQBQgCA0gpQA3gqAAhHIAAgCIAAgWIAHgBIAIAUQATAtACAtIAAABIABAQQAAAxgcAnQBpAlBYCdQAwBTAcBgQAbBbAABGQAAAYgDAZQgOBvhJBvQg3BQiPCTIgwAwIAAABQhpBtgrBCQhZCBAACBQABCTBGBfQBKBiB4AAQBGAAAtgiQAvgmABhBQAAgbgRguIgHgUIACgCIAQAOQAWATATAbQA0BPAABhQAAAYgDAUIAAABQgJA4ghAnQguA0hQAAIgkAAIAAAAIgMgEQAQA6AAAaQAABggkBKQgsBXhRAUIADgDQACgDgBgDIAAAAIgHACIgHACIABACIACACIACABIACAAIABAAQgYAGgbAAQgMAAgTgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-136.4,123.9,272.8);
p.frameBounds = [rect];


(lib.hair_base14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AI4ShIAJgUQAehCAAgmIAAAAQgFidhYioIAAAAIgYgrQiajGi7hfIgCgBIgBAAQh/hAiMgRQgDAAgCgCQgCgDAAgDIAAAAQhhgLhnAKIgiAEQivAeiCBLQABADAAADQgBADgDABQiVBZhYCWIAAAAIAAABQhKB9geCqIAAAAQgNBHAGCMIAAAKIgJgCQhpgahAhDQhMhRAAhsQAAhkAYg4QAOghAdggQgHgZAAgOQAAjACNiaQBMhTBXgvQADgCADABIACABQBoipERhlQDchRD7gUIAHgCQAtgHAtgEQBbgIBhAAQE5gTB7gSQCMgVBgglQATgeAQggQgDgCgBgDQgBgDABgCIAHgQIAAg0QAAhygshNQggg3gvgYQgKAsglA9Qg8BkhLAAQhMAAhOgoQhvg4AAhoQAAhsA/hwQA6hoCLhWQAzgZA/gPQAugKAUAAIAHAAQDjADB/DjQBjCyAADUQAABwgYBkQAYBRAAA+QAADUiKCYQACABABADQADAVAAATQAAC+hbBvIABBjQAACJhDBcQgWAeggAdQgFAfgKAaQgZA/hDApQgSALhsAwQhKAhgiAlIgPAQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.4,-118.9,254.8,238);
p.frameBounds = [rect];


(lib.hair_base13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ACbc6QgTgugPg0QgUhJgHg7QgqBZhRBpQhnCDg7AlQALhzgShQQgFgYgPgqIgoBqIgmBvQhNhIg6hpQg1hkgKhbQgEgdABgbQhSBvgjBMQgZA5gHA+QgCAWgBARQhPh6gShMQgLguAGhWQg8AzhMAlQhlAvhCAGQgTABgRgCIgBAAQA3gyAohmQAohpANh8QAJhTgEg4QgDgfgMg5IgEgRQgRhRgMhjQg2hegmhcIgXg9IAABTQABBTAFAsQiPifhUkrQgliFgTiHIgFglQgIASgEANQgVA6gIBMQgLBhAQBwQgSglgVgxQgwhxgHgzQgailAXjOQAgklBzjbQBBh6BviDQhUAfhMAtQgvAcgcAWQArhFA6hJQB/ifCsiXQCfiLCPhWQA0gfApgSQhEAJhJATQg/ARgsASQAvgbA6gdQBug6BLgeQhxgDiKAmQhIAVg8AaQCliiDXhKQDehND5AbQCWAQBVAYIAIACQgigmgtgpQhOhJhbg4QBTAFBxAmQCuA7ClBsQC3B4BtCOQBQBqAfBrIACgVQAQiPgSiKQBjCGgQCWQgEAigEAXQArgTBDgUQBegbAtAEIANACIgNAGIAMACIAEgBQgfAOgeAQQgqAWglAYIAWACQBZAKA0AmQAlAaArA6IANARIgCADIgUgJQgvgWg4gKIAAAAQgngIg7gGIBPAwIAAAAQBbA5A+A/QChChBbE/IAAABIABAAIAAACIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAIgEADIgBAAIgBAAIgDgBQgDgCgBgDIgDgKQgRgOgUgOQgxgkg3geQCwGZgWDOQgJBOgoCgQgKhVgah8IgShMQgVB1gtBwQgkBXhXCbQhXCcgkBZQg7CSgRCeQgHA7AKA7QgtgxgohQQgVgrgNgjIhJDPIgMAgQhDDHgJBTQgHA/AGA6QAJBNAgBDQApBWA8AcIgEAHQgoAOgkACQgSABgSgCQhvgMhKhUIgRgWQgeBTg3BPQg1BOg2ApIgBAAIgGgIQAIhLgZhrIgdhnIhLEAQgDAeADAbQg/g8gohagAR+0wIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.8,-200,305.7,400.2);
p.frameBounds = [rect];


(lib.hair_base12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("EANVAlIQh0AAhrg6QiFhJAAh3QAAgwA7iGIAAAAQA3iAABg3QAAiahSh4Qgbgpg4g/IgBAAIhhhyQh6iZg8i6QhTkAAAmAQAAh5AgjEQAhjEAAjiQAAjSghmzQggm0AAgbIAEhRQAEg8AFiPIADhPIAAgBQAdjzBNhhIAAABQAwg+BMgcIADgBIAAgBIACgBIABAAQAQgFAQgEIACgBIADACQAJAFAGgIIACgDIADAAQApgIAvAAQB4AABnArIAGACQAzAWAvAgQBjBFA4BVIAAAAIABABIABADQACAOANALIABABIAAACQAMAUAJAXQA0CAAHDKIACBZQADCkgDC9IABCDQABEXgKClQgLDLgOBtQgGA1AAB1QAAA6AMBbQAPBqAcB1QA5DLA7BBIAAgBQA9BBBpBtIAAAAQBrBtAwBBQAyBCgBB3IAAABQAACFhIBvQgyBPhrBeIhfBVQgyAsgKALQhFBKAABFQAAA/ApAlQAqAmA3gBQA4gCAxgpIAAAAQAugogNgdQgQgfgtgPIgBAAQgQgGgNAFIgVAHIgEgIIASgMQAOgKAQgGQAUgIAVAAQBLAAAmA7QAfAwAABTQAACJhLBjQhQBqh+AAQgfAAgigOIgCAAQADARAAATQAAB0hkA9QhTAxh8AAIAAAAgEgQjAkXQhkg9gBh0QABgTADgRIgCAAQgiAOgfgBQh9ABhRhqQhLhjAAiJQAAhTAfgwQAmg7BLAAQAVAAAVAIQAOAGAPAKIASAMIgEAIIgVgHQgNgFgQAGIAAAAQguAPgQAfQgNAdAuAoQAxApA4ACQA3ABAqgmQApglAAg/QAAhFhFhKQgKgLgygsIhfhVQhrhegyhPQhIhwgBiEIAAgBQAAh3AyhCQAwhBBrhtQBphtA9hBIAAABQA7hBA5jLQAch1APhqQANhbAAg6QAAh1gHg1QgOhtgLjLQgKilABkXIABiDQgDi9AEikIABhZQAHjKA0iAQAJgXAMgUIAAgCIABgBQANgLACgOIABgDIABgBIAAAAQA4hVBjhFQAvggAzgWIABAAIAFgCQBngrB4AAQAvAAApAIIADAAIACADQAGAIAJgFIADgCIACABQAQAEAQAFIABAAIACABIAAABIADABQBMAcAwA+IAAgBQBNBhAdDzIAAABIADBPQAFCPAEA8IAEBRQAAAbghG0QggGzAADSQAADiAgDEQAhDDAAB6QAAGAhTD/Qg8C7h6CZIhhByIAAAAQg4A/gcApQhSB4AACaQABA3A3CAIAAAAQA7CGAAAvQAAB4iFBJQhrA5h0AAQh8ABhTgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.6,-237.6,313.2,475.3);
p.frameBounds = [rect];


(lib.hair_base11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AJaRLIACgWQALh8griDQgdhZg2hdIAAAAQgXgegXgaQhEhOhJg6QhehLhngtQhigrhpgQQh+gTiJASIgMADIAAAAQjAAiiHBZQkCCrg6FzIgEAWIgJgBIgCgWIgCgjQAAkWDSkTQBXhzBuhcQBohYBiguIDBhSQBqgtA9gnIgTADIgBgCIBOhEIAehYQAQgqgKgvQgLgxgYguQgQgegpgtQgtgwgPgZQgbgtAAgzQAAgbARgQQASgRAgAAIASABQgzg+ABgvQAAhEA1gqQAtglA3AAQAuAAArAZQAMgSAPgMIgBAAQAogjBBAAQBHAAAeAfQASARAKAfQAzgxA8AAQApAAARAQIAAABQAIAIAFAPIATAAQAtAAApAaQAxAfAAAwIAAAPIAKAAQAxAAAmAgQAiAbgBAXQAAAOgGAOIANAAQApAAAlAPQAzAVgBAkQAAAngNAVIgGAJQAKAEAKAGQAsAaAAAjQABAvhBAjQgvAZhPAXQgQATgXARIAAAAIAAAAQhiA6g4AqQgVAPgTARIAAAAIgHALQg1BWgGBnIATAXIACACIACBnIgOgPIgGgHQAHBFAUA6QASAvA0BcQAzBWAVBDQAgBnAACOQAACBgtB1QghBXg2BEIgNAQgAg9ioIACAFIACgBIAGgEIACgCIgMACgAhAivIADAGIAIgIIgLACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.4,-109.9,206.9,220);
p.frameBounds = [rect];


(lib.hair_base10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AJ5OVQAJjFh9jWQlWm4n8BEQo3BfhZI/IgDAUIgLgSQgphFgjhYQhMi/gBiHQABmUD7kmQBnh5B6hGQBYgyBBgGQgOgKgIgPQgMgYAAg2QgBhuBKgyQBHgyBYACQBXACBQAeIABAAICPA4QDNBSCrAAQAuAABpgPQBqgPA4AAQBgAABFAkQCLBIABDAQgBBIgVBGQAiAeAfAkQCJClAADfQAAFFi/DVQg/BIh9BlQhQBBg0AsIgOALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.7,-93.4,231.4,186.9);
p.frameBounds = [rect];


(lib.hair_base9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AFNJeQjxjxAAlUIAAgCQAAiqA+iTIAJgTIAAAAQA7iEBvhuQDxjxFVAAQFUAADxDxQC0C0AuDtQAKA0AEA4IABAvIAAAIQgBB7gdBoQg3DGicCcQjxDxlUAAQlVAAjxjxgA3XIsQjxjxAAlTIAAgBQAAisA+iTIAJgTIAAAAQA7iEBvhuQDxjxFUAAQFVAADxDxQC0C0AuDtQAKA0AEA4IABAxIAAAHQgBB6gdBpQg3DFicCcQjxDxlVAAQlUAAjxjxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173.7,-84.7,347.5,169.5);
p.frameBounds = [rect];


(lib.hair_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ARLQbQisAAiJhbQiZhmgJinQg7AehBAAQidAAh1hbIAAAAQiFhpAAiqQAAhxBch6IAWgcIAAAAQgVgSgVgYQhShfAAhsQAAihA9hdQBQh7C2AAQA3AAAvANQAYhQBAg9QBrhmCtAAQBEAAA9AOIAAAAIABAAIAJgLQBlh7DSAAQC4AAB9BmQB7BkAACRQAAAZgGAYIAAAAIAAAAQBvAYBdBmQB4CFACCxIAAAGQgDB9hEBWIAAAAIgRAVIAAAAIAAABIAQAUQBSBmAAB1QAACyhvCCIAAABQh6COjCAAQhUAAhZgyIgBAAIgCgBQglAug1AsQieCDiNAAIgBAAgA1oMQQiXhlgIilIgGAFIgBgLIAAABIAAAIQg7AehAAAQieAAh1hbIAAAAQiFhpAAiqQAAhxBch4IAWgcIAAAAQgVgSgVgYQhShhAAhsQAAihA9hdQBQh7C1AAQA4AAAvANQAYhQBAg9QBrhmCtAAQBEAAA9AOIABAAIAAAAIAJgMQBlh6DSAAQC4AAB9BmQB7BkAACRQAAAZgGAYIABAAIAAAAQBuAYBdBmQB4CFACCxIAAAGQgDB/hEBVIAAAAIgSAUIABABIgBAAIARAUQBSBmAAB1QAACyhvCCIAAABQh6COjCAAQhUAAhZgyIgBAAIgCgBIgFgEIgBAAQglAtg0ArQicCCiKAAQirAAiHhag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-209.2,-105.2,418.5,210.4);
p.frameBounds = [rect];


(lib.hair_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ANUSxIACgHQAXhqgBgqQAAiSgwhFQgdgpgqgIIgGgCIABgGQARjQiEjiQlWm2n9BDQpWBkhCJ7IAAAEIgCACQhCA5hKAnQhnA1hJAAQisAAhHhRIgPgPIACgEIAVAHQAYAIAlAAQBRAABLgtIABAAQAzggApgvQgWAEgXAAQipAAhshrQgqgqgYgyIgCgFIAJgJIAIgDIACACQBFA7BGAAQA+AAA7gXQAugSAdgdIgXAAQiJAAhlhXQieiHABk8QgBiZBdihIALgTIAJADIgFAVQgNAsAAAoQABC2C0BvQBNAtBcAXIABAAIgHgHQhZhQABh8QAAiLBXieQAOgZARgYIAKgRIADAVQAIBUBDBDQBGBHB5AaQgXgsAAgZQAAhSA0hfIARgcIAKgTIABAAIACAWQAFAmATAkQARAgAbAaIgEgKIAAgBQgVhEAAhiQABgZAEgcQAIgzAWg+QAphuBHhbQC/jzE9AAQASAAA4AMIAEABIAHANIgGADQg6AlgyAyQiXCTAADAQAAA1AYBbQAFAVAHASQAQgkAdgiQBJhYB/geIAVgFIAAACIgOAPQgTAWgGAOIAAAAQgMAgAABsQAAALAAAiIACAMQAWgfAjgjQB2h3CnAAQBKAABAAXIAOAGIgNAIQgYAOgWAaQg2A+gWBqQBHg1BdglQArgRAtgMQB/gkCQAAQDgAACCB0QBrBfAxCuIAGAVIgDABIgQgPQhohciNAAQhcAAhXAtQgZAMgZASIACAAQB+AABIBNQAzA1AdBgIAGAQIgQgKQgrgWglAAQgdAAg6AcQBQACBVAaIAVAHQArAOAnAUQAtAWApAfQDUCdAAEmQABDRhQCgIgCADIgSADIgBgHQgbjwiNizIAAAAQhMhfhfg2IgGgEQAQARAQASIAAAAQB7CPAADOQABBegbBBIgJAVIgJATIgEgBIgCgVQgCiGhXhMQg4gwhTgRIAAAAQAXA2ABBbQAACNg1BvQgtBehBAwIgEACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.7,-120.5,315.4,241.1);
p.frameBounds = [rect];


(lib.hair_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AJbQtQAAi6h1jHQlVm4n9BEIgBAAQpFBhhOJbIgBAHIgbgDIgBgFQgXhIAAgxQAAkMCvkiIAAABQC+k8E1irQBpg7CWheIBDgrIDNiGQAtgdBdg3IgBABQBPg0A1g3QBthyA/jJIAHgUIAEAAIAEAVQAQBcAAA/QAABOgaBbIAMgaQA7iIAAiIQAAgygJgxIgEgVIABgBIAQAPIAYAZIABAAIABABQAXA2AiCHQAiCIgNBFQgIAogFAeQAkg8AZg2IAJgUIABABIAEAUQAFAaAEAiQAIA+ABArQAnhSAPhCIAKg2IAEgVIAKATQAvBRAgBVQBaDpAAE+QAAC4gpCyQghCRg8CKQh/EijJCYIgMAKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.7,-108.4,215.5,216.9);
p.frameBounds = [rect];


(lib.hair_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("APTNjQiEAAhUg/QglgcgXgiIgOAAIgTgBQhAgHhAgxQhOg9AAhIQAAgxAkhcIAEgKQAehQAAggQAAg7gmgtQgsg1hGAAQgGAAgIACIgOADQgGASgXBOIgDAJIgJgFQgqgdgsgXQg+gghBgVIAAAAQgagKgbgGIgRgDQgzgNg3gEQhHgIhMAFIgJABIABgIIAIhNIAAgBQgggshQAAQhNAAguA4QgeAlgkBfIAAAAIgGARQgjBWgYAhQgvA/hNABQgeAtguAhQgfAVgdALQgmAPgmAAQiCAAhYiJQgegugSgrIgIgUIAIgFIANARQAYAfAgAPIABAAQAcANAeAAQBIAAA0g2QA2g6APgXQALgXAYhIIgIh1IAAgBQAAjgBWiYIAFgJQgjgIgSgTQgbgbgFg/IgBgaQAAgQAIgWIADgJIAIAGIAIAFQAVAOAUAAQAbgBAmgeQAXgUA6g0IAAAAQB+hrCMAAQApAAAlAEQAvggApgQQAsgQA5AAQBlAABLA3QARgPASgIQAfgMBCAAQBiAABSAxQA3AhAbAvQA1gOA5AAQAiAAAvAYQAxAYAsAqQAyAvAcA2QAwAVAkAiIABAAQBQBLAXCUIAAABQAMCeAMA7QAUBaBKABIANgBIATgDIgMAQQgrA2gjgBQgmAAgfgPIgIgFQAPBIAABTQAABPggBuQgaBcgTBZIACAAQACABABADQAQAtAWAcQAqA1BKAAQAfAAAlgSIAUgJIADAFIgOAQQgTAXgVAUQhXBThPAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-86.7,240.1,173.5);
p.frameBounds = [rect];


(lib.hair_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ATBJnQg2ioh8hxQhEg+hOghQhGgeg6AAQgyAAgvAQIgEACIgEgEQg+hNhDg8IgGgFIgDgDQgpgkgpgeIgMgIQhag7hhgkIgKgDIAAAAIgFgBQhFgYhKgLIgEgBQh6gSiHASQiGAWhrAyIgIAEQgvAWgrAcIgEADIAAAAIgBABQhFArg2A+IgBAAIgJAKQgmAtggA1IgCAFIgFgBQgfgHgnAAQhnAAiDBeQhjBGhPBpIgLAQIgIgEIAIgTQAphtBahkQCfixDZAAIAMAAQgegVghgRQiKhHh7AAQhMAAg2AUQgJADgpAUIgSAJIgEgHIANgOQArgnBEgiQBog0BwAAQCxAABoAuQAeAOAgATQgYgrgjglQiDiRjiAAIgHAAIgUAAIgCgJIAVgFQA5gPAsAAQCvAAB5BRQBNAzBFBYIgEgUQgLgkghg7QhIh+gLgcQgghOgEhLIAAgDIADgDIAWgVQAjgdAkgVQBqg9CUAAIAGAAIABAGQAHAmANA1IATBRQAJgaAKgWQAXg7Aig1IACgEIAGABQAoAHAuAOQB2AhBVA1IAGADIgDAGQgmBJgVBSQgYBbgEBaQAYglAmgrQAug2B6g/QCPhLBoAAQBFAABBAaIASAIIAAACIgUAEQi6AjinCWQg9A4guA3IACgBQAXgQAcgSQCRhcBmABQBDAABdAXQAoALAlANIATAGIgBAGIgTABQiKAKhsBOQg1AmgjArIABgBQAbgLAegMQB4gyBLAAQCHAACNBlQBmBJBHBqIALARIgHAGIgPgNQhghShogrQhygwh0AAQhJAAg0AWIAAAAIgMAFQAXgBAYAAQFPAACwEMQA4BWAgBnQATA5ADAcIADAUIgKACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.4,-63.4,246.9,127);
p.frameBounds = [rect];


(lib.hair_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AKbPVQAQjOiDjgQlVm4n9BEIAAAAQppBogyKeIgDAWIgDAAIgJgTQgYg5gEgeQgCgPAAhqQAAlEC8kNQB6iuEkj1QCyiXAqglQB3hrBJhZQCDifArirIAFgVIADAAIAGAVQAuCKg7B7QBahJAviQIAHgUIAEAAIAEAVQAfCMgyCMQBvhWBFiSIAJgTIACAAIADAVQAQBvgkB5QBPhxCIg3IATgIIACADIgMARQheB3gRCXQBiiSCohLIAUgJIADADIgOARQhzCKgMCOQByi/CCg5IATgJIABABIgKASQhDB9geBhQgfBiAABzQAABVAUCVQAUCTAABcQAAESgkC0QglC1igCVIgOANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.1,-100,202.3,200.1);
p.frameBounds = [rect];


(lib.hair_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AJVS5Qg9pFqSivQsPgRh6LJIgEATIgKgRQghg2gQg8QgahcAAijQAAlqD0kdQChi6F1jyQD4ihAlgaQCXhpBehZQDojbAIj/IABgVIAEgBIAJATQAJARAIAVIAAAAIAAABIAHAWQACgnAAgvIAAggIAAgOIAMAIQE/DWCgFSQCaFFAAGoQAAFEi8FuQhRCehkCAQhHBahDA9IgLAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.7,-122.3,223.5,244.8);
p.frameBounds = [rect];


(lib.hair_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("Ah8RdIgLgHQhBgghRgNIgSgCIgCAAQgYgDgZgBIgkgBQgyAAgrAJIg6AOQgfiSBag6QhhmWiajNQjSkUlrAAQh4AAhIAmQgmAVgiAhQAZguAfgnQCjjZD6AAQAxAAAsAJIAAgCQgZgOgbgLQiNg+iGAAQiQAAhyA9QA9g7BYgwQCWhUCLAAQB4AABQATQBoAaBTBDQBPA/BGBvIACgBQgdhWgPgpQg5iXg+hhQgagmgbggIgBgBIgCABQg5AAhLAwQgqAagmAjQAMhXBFg/QAZgWAcgPQiGhmi2AAQhUAAhnBBIgIgFIABAAQAug9BZgnQBxgyB4AAQCtAACYBkQBVA5A5BPIABgBQgyifiAiGQhLhQhTguQhTguhAAAIgGAAQBigoBKAAQDkAACDClQBmCBA3D6IABAAIgCgKQgYiQg5iDQg4iChFhNQgug0gsgTIATgHQAsgOAhAAQDFAABSEiQAeBqAXCvIAJBKIADAAIAGgWQBolrDeAAQA9AAAOACQAPACALAFIAGgCQADgCADABQACABACADQBogyBigEQBlgEBOAuQBOAuARBHQARBHgCAJQgDAIgHAMIgIABQgDg0gvgZQglgTg6AAQheAAivFNQgzBhgwBqIABAAQBQh5BZhdQCpixCrgwIABAAIACAIIAAABIAIgLQA6gPA7AAQB0AABfBBQBbA+AEBTQgkggg0gaQhWgqhSAAQh/AAjODMQhMBLg6BJIACACIAVgKQCfhKClAAQFbAAEBDlQBuBkBIB8QAsBOAZBOQjHj8jFhnQighUjRAAQg3AAhfAYQEpAeCjDcQBGBgAkB3QAZBUADBKQhVjShXhcQhFhJhrghQBiBDA2BzQA5B7AACfQAABOgIAxIgKABQgckJihigQhUhThwgsQgkgPgfgHQArAkAgA2QBLB+AACbQAABHgTBtIgBAAQAAgugRhHQgUhTghhHQhZi9iIAAQhJAAhhBEQhoBJhdB7QiFC0hBDYIgNArIACABIgCgBIgCAIIAwAgIAMAKQAeAfAABBQAABLg4A7QgfgfgqgXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159,-117.2,318,234.4);
p.frameBounds = [rect];


(lib.fringle_decor16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor16_img();
	this.instance.setTransform(-90.4,-73.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.4,-73.9,181,148);
p.frameBounds = [rect];


(lib.fringle_decor15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor15_img();
	this.instance.setTransform(-108,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-66.5,216,132);
p.frameBounds = [rect];


(lib.fringle_decor14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor14_img();
	this.instance.setTransform(-91.5,-83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-83.6,183,167);
p.frameBounds = [rect];


(lib.fringle_decor13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor13_img();
	this.instance.setTransform(-96.4,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.4,-87,193,174);
p.frameBounds = [rect];


(lib.fringle_decor12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor12_img();
	this.instance.setTransform(-90.7,-102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.7,-102.4,181,206);
p.frameBounds = [rect];


(lib.fringle_decor11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor11_img();
	this.instance.setTransform(-96.9,-57.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.9,-57.9,194,117);
p.frameBounds = [rect];


(lib.fringle_decor10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor10_img();
	this.instance.setTransform(-89.6,-65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.6,-65.3,179,131);
p.frameBounds = [rect];


(lib.fringle_decor9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor9_img();
	this.instance.setTransform(-90.7,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.7,-77.5,181,155);
p.frameBounds = [rect];


(lib.fringle_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor8_img();
	this.instance.setTransform(-86.7,-64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.7,-64.7,173,130);
p.frameBounds = [rect];


(lib.fringle_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor7_img();
	this.instance.setTransform(-121.5,-75.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.5,-75.1,243,151);
p.frameBounds = [rect];


(lib.fringle_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor6_img();
	this.instance.setTransform(-89.7,-76.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-76.9,180,155);
p.frameBounds = [rect];


(lib.fringle_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor5_img();
	this.instance.setTransform(-114.9,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.9,-87.5,231,175);
p.frameBounds = [rect];


(lib.fringle_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor4_img();
	this.instance.setTransform(-82.7,-75.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.7,-75.1,164,150);
p.frameBounds = [rect];


(lib.fringle_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor3_img();
	this.instance.setTransform(-86,-71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-71.9,172,143);
p.frameBounds = [rect];


(lib.fringle_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor2_img();
	this.instance.setTransform(-93.9,-84.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.9,-84.9,188,170);
p.frameBounds = [rect];


(lib.fringle_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor1_img();
	this.instance.setTransform(-93.4,-70.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.4,-70.4,185,142);
p.frameBounds = [rect];


(lib.fringle_base16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGYLAIABAAQgLgLgIgPIgEgIIAJgCQAtgLAehAQgRAGgQAAQg4AAgdgbQgbgZAAgrQAAgYAHgSIAHgUIADABIAEAUQAJAtAYABQAngBAbg8QAYg1AAg2IgBgxQh9A0iZAAQjaAAiuiLQiLhthGidQgpCjgsBBQhEBmiGAAQhSAAg3gkQhEguAAhYQAAgwAkgrQALgMAOgMQADgCADAAIABgDIgBgEQALiGA9hxQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQBRiWCohxQB1hQCOgvQB3gnAvgFQAvgFCPAMQCQAMBPALQBNAJAdgMQAbgMATgaIAMgSIAEACIgDAVIAAAIQABAsA9BAIABABQBaBUA0A1QDSDWAAD7QAAAfgVBXQgXBfgWArQgvBggPAvQgMAlAAAaQAAAoAPAbIAAAAQAMAXAVAGIAQAFIgOAJQguAcglAAQgfAAgcgWQgHA0ggAqQgxA/hQAAQg+AAgigjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.4,-73.9,180.9,147.9);
p.frameBounds = [rect];


(lib.fringle_base15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AHZJwQhHgbhcAAIg2AEIgSABQheiuhaheQgxgzg6gpIhFgsQAtB3ArChQg7hrg8hfQg7hegkgpIgDACIifArIAAAEQgBADgDABQgDACgDgBQgDgBgBgDIgEgBIgDgBIgDgCIAAgBIAAAAIgBgBIiZgbQgWAqggBQQg7CSgyC6IgFAVIgLgBIACgWQAPjRAUiCQhnB6gtBxQgMAdgHAfQhkgugvhzQgOgigJgmIATARQAqAfA0AQQgVgngRg0QgjhuAAiAQAAhCARg9QAIAmARAkQATArAZAhIgBgHIAAglQAAhHAshrQAwh2BThlQDMj+EhgLIAbgBQBYABBqARQBgAQByAgQB9AhA0ALQAuAJAtAGQAxAFAuABQCzAACHhQQAjgTAggaIApgiQgWBIg9BZQhKBvhdA6QBUAGBCAeQC+BYAkEmQg0gmhIgHQgQgCgQAAQgOAAgzAIQARAMAQAVQAyA9AABZIAAAfIgLgKQgUgRglAAQhVAAgUB0QgHAtADAzQhlAuhQBNQgeAdgYAdQgXgMgWgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.8,-64.5,213.8,129.1);
p.frameBounds = [rect];


(lib.fringle_base14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AIiMDQgvgegfgkIgEgFIAAALQAAA0ACALIABAEQhlgng6iBQgyhvABhnQAAg1AZhGQAOgnAphaQBQitAAhdQgBgwgIglQARBfhCBOQhmB3i9hSQi8hQiigJQjzgKhvBvQhuBxAACoQABA1ARBZQATBZAHAzQAHAyABAYQAbB2hiAdQAqg1gGgkQgKg3hUiOQhUiOgEh2QgFhyAchYIgDgCQgCgCAAgDIAAgGQAAiqBZiVQAohEA6g8QABgCAEAAIAEABQBHiZCchtQDcibEXAAQB8AABDANQBMAPAlAlIAQAAQCSAABXBaQAeAgASAkQADgBADABQBeAbA1BlQAuBYAABWIAAAJQAgApAUArQAcA7AAA1QAABUg+BMQgkArhgBRQhdBMgiAtQgbAkgMAlQANBRAkBBQBGB+CNAAQANAAAsgMIAVgGIAAAAIgNARQgNASgQARQg6A4hGAAQg5AAgtgVIgNgPIgKgHIgCgBIgCACQAQAVAWAWQBHBHBTAKQgYADgXAAQhjAAhag5gAImF8IgBgQIgDAKIACABQACABAAAEIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.1,-82.8,182.3,165.8);
p.frameBounds = [rect];


(lib.fringle_base13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AHkNcQguhUgWhSQgYhVgDhqQgjBZgsAkIgQAOIgBgBIAFgVQAVhOAAgtQgBjnj/jyQg+BJhjBBQhLAxieBHIgTAJIgFgIIARgOQA/gzBFhNIAYgbIhgA2QjABrhzBnIAAABQgjAfgaAeIgCADIgBAAQgVAhgPAiIgHAPIgBAYIACAhIAAAAIABAEIAEAVIgKADIgIgUIgCgEQg4iSgFgYIgBgFQgKgzAAghQAAiBAphtQgmAugVA3QgOAqgGA2IgCAVIgFABIgHgUIgIgaQgZhXAAhMQAAgvAdhLQhEBBghBTIgKAZIgHAVIgFgBIgDgVQgDghAAgJQAAhOAhhjQAkhrBAhlQCcj4D1hhQAwgUBMgHICAgJQAGgBBXg1QBZg4AvAAQBIAABqBIQAjAZAZAWIADgKQATg0AegwQAbgqAigjIARgRIAPgPIAIAHIgMASQgIAMgEAIIAAAAQgoBKAABZQAAAKAFAgQAogfA8ggQBig0A7AAQBOAABABAQBEBEAmCGIAGAUIgEACIgPgPQhWhUgsghQgtgfhHgKIAAAAIgJABQgZADg4AIQBnAiBbBRQDmDKAAGeIgBBWIAAABIgBAWIgKABIgEgWQgGgegHgcQgQg6gag4IAEAQQAQBGgEBrQgFBqguBuQgvBuhUBsIgNARIgBgBIAAgVIABg1QAAhYgEgeIgBgPQgPAugXA1QhBCVhuCJIgHAJgAqyHtIAAABIAAADIAAABIAAADIABgJIgBABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.4,-87,192.9,174.1);
p.frameBounds = [rect];


(lib.fringle_base12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AEKQBIAMgSQA/hfASgrQAMgbAAgQQAAglgeghQgRgTg0glIAAAAQgzglgVgXQghgnAAgtQgBg8AxhgQAvhcgBg7QABiFhihcQg8g3iahQQifhRg6g2QhbhVgDh4QiWB4hLBnQhpCOAACWQABBvA1BBQAgAmAGAMQATAhgBAwQAAAtgeAvQgNAWgyA7QgsAzgTAkIAAAAQgcA1AAA5QgBAqARAZQAJAOAbAUQAcAWALATIAAAAQASAeAAAzIAAADIgKALIgGgIQgEgJgHgHQgWgbg0gfIABAAQg9gkgRgQQglgjAAgtQAAhDAbg2QARgkApgvQArgzANgVQAZgqgBgvQAAgwgTggIAAAAQgIgMgmgnIAAAAIgNgQIAAAAQghgpgNg5IgEgCIAAAAIgBAAQgEgEgCgGIABABIgDgRQgXgpgQg6QgQg6gGg5IAAgBQgCgYAAgYQABhJAKhGQAThyAvhsQBDiaB2h+QBrhxB9hCQB4g/BfAAQATAAAUAKQAUAKAEAOQAQgJAcgNQAngSAtADQApADCJAzQCnA/CQBdQGoEPAAFvQAAAmgUA1IgBAEIgEABQhHAZhGAjQhgAthfBCIAAABQhLA1g3A2IgBAAIgXAXIAAABQgYAZgQAWQgKAlgRAmQglBMgBAmQAAAwAZAlQANAUAqAnQAqAmARAdQAbAuAAA/QgBA/gSAmQglBKhxBDIgTALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.7,-102.9,181.4,205.9);
p.frameBounds = [rect];


(lib.fringle_base11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AJ9JFIgBgWQgDj1izhUIgBgBIgHgDIgCAAIgBgCQipjMjNBYIgHADIgEACIgDgDQiuiAiJBCIgBAAIgBABIgFACIgBABQghARgfAfIgCACIgBABIgDAAQhJAPhSAiQhRAhgcBZQgdBcgQBFQgRBKg2gBQg3AAgTghQgQgbAAg+QAAhpAuhNIAAAAIADgFQgdAYgoAiQguAlgdgBQgeABgTgjQgQgdAAgqQgBhtB8hPQBQgyBWgOIAMgZIgIACQhGARgwAAQgRABgdgRIAAABQgogWABgcQgBhHBVgwQBIgpBUAAQAwAAAtAIQBfiHD4hhQBSggBPgRIADgBQADAAACADIACADQCZghCNAaQA9ALA2AOIAIACIAAgDQgBgDgCgCIgBgBQCHAjBXA3IAAAAQA1AlAvAsIABAAIAAABIAAAAQB0BsBECQQAkBKAUBFIAAACIAAACIgDAQQATBOAABLQAAAhgaBOQguANgnASQABADgBADQgBADgCABIgBAAQiYBIgvCWIgHAUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.6,-58.2,193.1,116.6);
p.frameBounds = [rect];


(lib.fringle_base10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AIDKMQguAAgmgfQgrgkAAg1QAAghAWgYIAAAAQAYgcAnAAQAjAAAXANIADACQgXhYiAgTQgwgIhZAAQhdgBgcgEIAAAAQgUgDg3gQIAAAAQhLgXhAgcQiVhDgkgnIAAABQgNgPgLgSQgNAVgQAQQgtAshdAaQh/AjgGACQg2AYgDA0QAFAFAFAHQAQAYAAAMQAAAogYAOIABAAQgRALgjAAQhaAAg2hDIAAgBQgug7AAhTQAAhCAbgxQAlhEBNg+QBkovIzhfIAAAAQIFhFFcG/IABAAIAAABQCKDsgWDvIAAADIgDADQhXA7g7BEQg3A/geBEIAAABIAAAAQgBA/geAxQgnA/hJAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.6,-65.3,179.1,130.6);
p.frameBounds = [rect];


(lib.fringle_base9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGeLvIgXgMQgVADgWAAQhAAAg5gpQgSgOgPgPQB4gDA2h/QAjhTAAhpIgDhAIgFhDIgkAuQgOgTgRgRQAmhEAVhXQAgiCgViSQALBgg/CaQghBRgiA5QhthTh/AAIgNABIgcgwQg5hpAAhZQAAgcALg+QgOA7AABAQAABQAWA/IgBAAQAGAQATArIAEAIIhLAZIgDgEQgTgWgXgdIgjguQAHArARAnIAMAYIAEAIIhYAdIgDgDQg+gngpgyQhMhZgEh1IgBAOQAABpA3BSQAkA4AeAQIALAFIgKAHQhyBTjHgCIgDAAIgCgBQglgbgmhEQgOgYgJgYIgJASQgkBSAABIQAABQAaBIQAQArAIAxIAEAVIgDABIgOgQQiSingWg8QgihdAAiOQAAjgCkicIAAgBIAJgJQAwipDyiIQBsg8B4glQBwgiBKAAQC8AACuBAQCnA9CBBuQB/BtBHCLQBICPAACVQAAAegJAzIgBADQg3AZgzAeIhtBHIACAHQAcBNAHA0QAHA2gJBdQgKBcg3BJQglAvg1AmQgeAKgiAEIgaABQgVAAghgQgAJEIpIgEgQIgCAPIAGABIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.3,-76.7,180.6,153.5);
p.frameBounds = [rect];


(lib.fringle_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AHNKAQhligh1hkQg3gvhNgtIAAACQAABcgzA8Qg2A/hTAAQgqAAgrgaIgJgFIAAAAIAAAAQgUAhgnAbQhCAuhEAAQhUAAgzgqQguglgJhAIAAgBQgpAdgrAAQhDAAgrg1QgqgygBhIIAAgCIg1AqIgCgMIgJgxIAAAAIgBAAQgJg5AAgZQAAiRAziRQAxiNBWh0QBWh1BphCQBvhGBuAAQAXAAA0AIQA/ALAZAPQA7ghBAgPQBfgVBQAAQB9AAB/BHQB0BCBiB0QBfBxA3CIQA4CMAACDQAABIgKBKIAAABIgBACIAAAFIgDACQiDBLh3B/QhNBRgzBMIgHAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.7,-64.9,173.4,130);
p.frameBounds = [rect];


(lib.fringle_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AK9LyIgCgVQgIg9gUgrQgag4g1gnIgBAAQgQgLhZgyQhFglglgpQg7hBg6iEIABAAQgVgvglgoQg0g6g4gBQgyAAgxAbQg3Acg2AAQgbAAgzgUQgxgUgiAAQhRAAgrA9QgLARgXAtQgYAtgRAYQgVAdhMA+Qg+A/AABPQAAAOAEARIAFAUIgCACIgQgPIhGhHQgogghCAAQghAAguAPQhHAWg2AuIgQANIgDgCIAHgUQATg0A9hEQBLhUA4gCQgQgJgigHQgygMgoAAQgwAAgjANQgnAOgrAnIgQAPIgDgDIAHgUQAXhBBfg8QBNgxBDgLQgUgIghgLQhHgYgcAAQgjAAg2AUQgeALgrATIgCAAIgXAAIALgMQCCiTBeg4QCBhOC7AAQARAAAYAEQgPg/gdgxQhOiKitgYIgUgDIgBgCIAUgJQATgJAbgIQBLgYA5AAQBKAAB4A+QAnAUAcATIgQguQgehiAAhNIABgNIABgVIACgBIAKATQAaAuA+A/QBOBPA8ASIAAgHQAAgVAHgeQAMg3AfgxIgBAAQBNh9CoguIAPgEIgGANIgBADQgKAeAAA9QAABFAXAsQAJARARAWQAYhWBchXQA2gzA7gfIAXgLIAUgIIABAAIgLATQgGALgCAKQgDAKAAAvQAAAeAFAZQAegbAsgcQBKgwA5gGIAMgBIgFAMQgIATgKAqQgOA6AAApIAEA8QBHggBrAAQBNAABcAjQBSAgBPA3IASAMIgBABIgVAAQg3ABhHAYQhMAaggArQAcgJA1AAQCJAABqBsQA/A/AzBkIAJATIgHADIgPgOQhdhnhngBQgGAAgNADQBbA9BACBQAcA4ATA7IAGAUIgEACIgPgOIgUgSIgKgIQASAoASBAQAYBSAKA3IAEATIgPgMQg5gsgqgBQgyAAgTAvQgHARgJA7IAAAFIgEACQhuAjhSBHQhEA6gjBAIgKATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.4,-75.4,242.9,151);
p.frameBounds = [rect];


(lib.fringle_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AsbL2QgvhOgWhCQgchRAAhpQAAj/CDj7IAUgbQAPhsAihbIABgBQBfkADwh4IACgBQByg5CSgZIAKgCIAAAAQBvgQBqAKQADABACACQACADgBADQAvAEAuAKQAAgDADgCQACgBADAAQDxA1DCDBQACACAAAEQAAADgCACIAqAsQAeAiAcAkQBIB6AcB1QAZBqgJBjIgCACQh6BZhABKQg9BFgQAdIAAAAIgFgEIADAHQA6CpAAC6IAAAyQgjhYhAhUQiFivmEkSQgwghhggxQiIhAgagPQiXhSgphcQgJAqgdA6QgjBCgzBAQgHAKguAxIABAAQgyA4gkA4QhyCuAAC3QAABQALA9QAGAgAOAuIAGAVIgJADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.4,-77.7,178.8,155.4);
p.frameBounds = [rect];


(lib.fringle_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ADENmQgagEgIgGIgZgBQhIAFg8g8Qg/hAhDijQhKjEgmhfQhDing9hNQg+hKhMguQhOguhjgdQhhgegYAFIg2ALQgJAUgNATQgbAnhAAvQhFAxgUAVQgmArAAA4IAAADIAAAVIgGABIgIgTIgQgkIgBAAQgehHABggQAAg2AVgxQAJj2BciEQBbiFA2gxQAfgdAkgZQAVgPAWgNQBCgpBPgcQAagJAbgHQArgOAvgIIAhgHIABAAIARgCQAigEAigBIAwgCQAvAAAuAFQA0AFAxALQA6ANA3AVQAoAQApAVQAdAPAdASIAAgBQAnAYAmAdQBZBFBSBeIAAABIAfAmIAGAIIABABIAAAAIAQAeQAcAyASA0IAIAWIAAAAQANAnAJApQAVBogKBtIA1A+IAAgBQCPCnBWBDQClCBCwANIAWACIAAABIgSALQgZAPgbAJQgrAOg+AAQiMAAiihnQhrhFhthsIAMAYIAAAAIBZCjQBGB6A3A6QAqAuBRAfIAUAIIgUAHQhFAUg9ABIgEAAQh2AAiUhcQgsgcgfgXQAjBuAoA7QAmA3AyAXIANAGIgMAHQgpAXgdAAQhwAAhbhXIAAABQAoBoBBAkIAOAIIgPAFQgtASgsAAQgWAAgagFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.7,-87.5,231.4,175.1);
p.frameBounds = [rect];


(lib.fringle_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AjlLQQhHikgGgTQgTg6gEhUIAAgCIAAgEIABgCQhuhSinAAQhCgBhPAVQgcAHgXAJQAwgiA9gYQBsgrBlAAQBXAABHAbIACABQADgRAFgSQgsgmg7gjQg8gkg9gCQg/gCg7ANQg7ANg9AWIgUAIIgCgFIAOgPQA2g5A9gbQBPgjCEAAQBYAAA/AdQAcANAcATIAOgUIAAgBIgFgGQhyheh8gBQifAAigBAQBJgzBugoQB3grBUAAQBkAABtA4QAZAMAXAPIAFgGIgBAAIAAAAIAAgBIgFgDIAMgNQgigkgqgjQiwiUjTAAQgPgBgyAIIAAgCQAgg1A2gvQCHh0EGhIIgigpQgug2gmgdIAGgBIBDgDQBzAABRASQBbAUCRA2QAmBeAeB/QAoCrACDJIABAAIAEgkQAMh0AAiEQAAh2gUhvQgbiOgQhnQC7G0gLF/IABAAIABABQAchVALg8QAVhyAAiqQAAgagEgzIgHg4QASAFAZANQAuAaAtAoQA5AzAmA5QggBng2BnQgbAzgmA9IgXAlQAPgDAPgBQADAAACACQAngpAxhIQAng5Ajg8QATAiAlBTIAOAfIgVAQIhlBFIAGABIABACIAHgEQAOAxAOA2IAAAAIAIAgQANAyAKAtIAEASIgQgKQh+hWhMgxQkVASj3DYQhpBdhFBpQgrBAgQA1IgGASg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.6,-73.9,161.1,147.8);
p.frameBounds = [rect];


(lib.fringle_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AIcLGQghgNgfgTQhzg9ieiVQjIi8gqggQiDhmieANQieAMhVA+QhXA+hBA9QhBA5gkBAIgHAMIgGgNQgjhNATh5QASh3BqirQBpitDwiSQC7hxBIiLIAKgTIAEABIAAAVIAAAIQAAA5gDAOQgFAUgLAWQAlgdApg6QA0hLAKhGIAEgTIAKARQAQAaAPApQAbBIAAA5QAAAngBAIIgDANQAdgXAag1QAUgqAKghIAEgOIAJALQAUAbAJAiQAMAoAAA8IgBAcQAOgRAOgUIAWggIAIgOIAFAQIAUBEQANAsAAAoIAAAGQEKBuCHDIQB7C0AYEXIAAAEIgEADQhKAphEAyQhzBVgyBCIgEAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.1,-71.2,172.2,142.4);
p.frameBounds = [rect];


(lib.fringle_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGiNLQnBnMlKg+QlHg8jRFNIgLARIgDgTQhEmeBnjKQBmjMCkiRQBphlAWhmIAFgVIACAAIAHAUQAHATAHAcQAIAkACAbIACgDQAcg1AdgqQBLhvBwhmIAQgOIADACIgHAUQguCBACBlQBIh9DKiyIAGgFIAKAMIABABQAbA3ALAgQAmBngKB+QAPgjALglQAOgwALg/IADgWIABAAIAKATQAfA7AYBhQATBLAFA2QAlhoAJhDIAEgUIAKASQAwBMAhB7QAUgvAjg3IABgDIAZgJIADAIQALAnAsBNQAWAoAVAeQAGgVAKgYQAMgfAOgeIAJgUIADABIACAVQAFApARArQCDByBKCMQA/B3AABYQAABxhICNQg/B5hCA7QgLAOhSAZIAAAAQhQAXiIDaIgFAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.9,-84.9,187.9,169.9);
p.frameBounds = [rect];


(lib.fringle_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AIzK7Qi0hIhgijQhGh4gnjPQgKg2gRhiIAAAAQgPhTgRguQgph1hcAAQgFAAgEACIgIAFQgDABgCAAIgEgCIgGAIIgIgFIADgIIAAgBIgIgRQgHgKgmAGQgqAGgwBFQgWAgg9B4IgtBmQgtBggzBHQifDhjdgHIgVAAIgBgKIAVgFQChgjB3jKQAohDAnheIAJgTQgxBZgdAnQiECukGAdIgVADIgCgFIASgMQAwgdAugpQgogqgWhDQgYhHAAhOQAAg3AghMQAhhOA3hKQCFixCogyIABAAIAGAAQA2g1A+glQCEhQCPAAQAgAAAVAEQA2gTA2AAQCDgCBIAfQBHAdBYA9QC9AdCND7QBCB1ArCSQAgBrANBoIABAFIgFADQhTAnhBAvQg0AlglAoQAVAoAQAZQA/BfBSAVIASAEIAWADIAAAKIgWACIgVADIAAAAQhRALhHgoIgTgKQAFAaAJAZQARA4AdARIASAMIgBAFIgWgDQhbgLhRg5QgngcgYgcQAFAtAOAqQAPAqAZAsIALASIgBABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.7,-70.8,185.5,141.6);
p.frameBounds = [rect];


(lib.face_accessory8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory8_img();
	this.instance.setTransform(-89.9,-32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.9,-32.2,180,64);
p.frameBounds = [rect];


(lib.face_accessory7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory7_img();
	this.instance.setTransform(-88.3,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.3,-37.8,177,76);
p.frameBounds = [rect];


(lib.face_accessory6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.face_accessory6_img();
	this.instance.setTransform(-79.7,-40.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.7,-40.3,181,87);
p.frameBounds = [rect];


(lib.face_accessory5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory5_img();
	this.instance.setTransform(-66.4,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.4,-28,133,56);
p.frameBounds = [rect];


(lib.face_accessory4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory4_img();
	this.instance.setTransform(-108.2,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.2,-68,216,136);
p.frameBounds = [rect];


(lib.face_accessory3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory3_img();
	this.instance.setTransform(-83.3,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.3,-55.6,167,111);
p.frameBounds = [rect];


(lib.face_accessory2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory2_img();
	this.instance.setTransform(-26.1,-46.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.1,-46.7,144,55);
p.frameBounds = [rect];


(lib.face_accessory1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_accessory1_img();
	this.instance.setTransform(-69.8,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-39,140,78);
p.frameBounds = [rect];


(lib.dress_decor12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.dress_decor12_img();
	this.instance.setTransform(-183.9,-121.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183.9,-121.8,368,244);
p.frameBounds = [rect];


(lib.dress_decor11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor11_img();
	this.instance.setTransform(-70.8,-85.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.8,-85.4,142,171);
p.frameBounds = [rect];


(lib.dress_decor10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.dress_decor10_img();
	this.instance.setTransform(-65.1,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.1,-65.5,130,131);
p.frameBounds = [rect];


(lib.dress_decor9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.dress_decor9_img();
	this.instance.setTransform(-102.2,-65.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-65.1,206,151);
p.frameBounds = [rect];


(lib.dress_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor8_img();
	this.instance.setTransform(-69.8,-65.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-65.6,140,131);
p.frameBounds = [rect];


(lib.dress_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor7_img();
	this.instance.setTransform(-72.7,-69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.7,-69.7,145,140);
p.frameBounds = [rect];


(lib.dress_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor6_img();
	this.instance.setTransform(-44,-56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-56.1,88,118);
p.frameBounds = [rect];


(lib.dress_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor5_img();
	this.instance.setTransform(-38,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-47.3,76,94);
p.frameBounds = [rect];


(lib.dress_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor4_img();
	this.instance.setTransform(-55.8,-46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.8,-46.6,112,93);
p.frameBounds = [rect];


(lib.dress_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress_decor3_img();
	this.instance.setTransform(-47.8,-67.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-67.9,96,136);
p.frameBounds = [rect];


(lib.dress_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress_decor2_img();
	this.instance.setTransform(-68.3,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-86.5,137,173);
p.frameBounds = [rect];


(lib.dress_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_decor1_img();
	this.instance.setTransform(-61.7,-62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-62.1,124,124);
p.frameBounds = [rect];


(lib.dress_base12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("ATkTBQkoAAkUiOQiUhMiuiPQhnhWhkiQQg+hbhIiEQg1hmgjigQg9AGhFAAQhJAAhzgfQhEgTgsgSQgYBPggCpQgtDygZBiQhUE/iKBoQhAAxhdASQg0ALhNADIgrAEIj6AVQgQABg1AAQivAAhagoQhRgkABg4QgBiLEChpQBXgjCCglIC7gzQDehCCkh8QAkgcAcgaQACgCADAAIACAAIABgDIABgDIAAgEQARhSAIhHQANhxAphrIAAAAQAchKA7hwQAfg6AyhEQAbgmA0hEQBUhzAAheQAAgvgPheQgPhgAAg1QAAgSAKgsIACgLIhLgIQgSgBg1gnQg3goAKhPQAKhNAQgXQACgDADAAQADgBACABQAeATBLAhIAAAAQAmAQAiANIACAAQBwAoBTgGQAAAAABAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAAgBABQgTA8gwAeQArAkAPAmQAVgmAjgXIAAAAQAUgPA8gcIAHgEQgVgogCgmQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQACgCADgBQA7gMA5gPIgBAAIAEgBQBugeBhg9QADgCACABQADAAACACQAOAPANAVQAaArgBAWQABBqh2BCQgZAPgdAKIAIAMIAAAAQAMATAIAYIAAAEIgCADQgoAkgqAyQgrAygWAhQBaF+AtCNQAuCNBACXQBBCcBZCNIABADIADADIACACIABAAQADgBACABQBAAaCPAwIAAAAQCdA0DVAYQDXAXEfBDQDmA1AECCIABAEIABADIgBACIgBAEIAAAAIAAACQhFEfoEA5IAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183.9,-121.8,367.9,243.6);
p.frameBounds = [rect];


(lib.dress_base11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AikH9QhRgzgxgBIgpAFIgsAFQgwAAgmgbQgKgIgIgIQgOgOgmg2IgCgFQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAXgcQgfgMgYgWQgVgTgPgaIgBgFQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIArg1IAAAAQATgZAXg6QAXg9AjhRIAAABQAihVAxg6QAvg7Btg+IACgBQAEgSAAgbQAAgZgQhVIgRhUQAAgDACgDQABgCADgBIALgCQAWgBAWAgQARAYAYAAQAJAAAYgJQAagLALAAQAhAAAVAUQAQAPALAAQANAAARgNQAWgRASAAQAcAAAPAVQAMAOAeAAQAMgBARgTIABAAIACgCQACgCADAAQADAAACACQACACAAADQAEA4A2CpQBTBGAZAlQAYAjAyBxQAyBtAaBEQAYBBA4AlIADADQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIgCAEIgfAdQgtAqgdANIAPASQACADAAADQAAACgCADIgqAoIAAAAQgoAigdANQgiAOgxAAIgrgFQgjgFgHAAQhPAAg4AsIABAAQggAZgNAHQgdAOglAAQhDAAhWg1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-56.2,121.1,112.5);
p.frameBounds = [rect];


(lib.dress_base10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AhxKHQgtgKgngoQgWgVg8AGQhPAJgggMQgqgQgdgOIAAgBQgRgIgFgkQgDgYgOgGIABAAQg8gUgfgNIAAAAQgjgQgWgTIgCgEIAAgEQAnhvBJh7QgOgGgJgGQgLgHgHgJIgCgEIAAgEQBWjWEDjpQgeiYAAgwQAAhIAcgZQAbgbAigGQAhgFAsAPQAnAMAPAQQA1grA8AAQBCAAAcBCQAKAWAQBYIAAABQAKBPAHAtIAAAAQAFAfAGAbQDKCXB0DdIAAAEIgBADQgQAagQARQBkBcAwBSIABAEQABAggsAuQgsAtgqgEQgjgDgTAkQgWArhbAuQhYArgpABQgbAaguASQgvAShYACIgbABQhCAAglgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.1,-65.5,130.2,131.1);
p.frameBounds = [rect];


(lib.dress_base9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AiYISQhVgHhmhpQjyA7hZjLQhiAkgtgiQgwgiAMhrQAAgDACgCQCeiWDyh4QB3g8BjghIgZkIIABgEIACgCIALgKQBEg2BzB6QAshDAygKQA3gNBAAzQACACABADIAoDhIAAABIAAgBQACgGAOAAQAHgBA5AbQBIAhBNAtQDwCOC3DCIABADIABADQgJBbgvAaQgsAZhNghQgoBuhPAgQhQAhh2guQhSBhhbAGQhaAGhghSQg+BQhMAAIgOgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.3,-53.1,170.6,106.2);
p.frameBounds = [rect];


(lib.dress_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AhZJ+QgUgKgQgOIAAAAQgdgZgQgiQiXBChohAIAAAAQhthCABhBQAAgtAUg1IAAAAQAVg5AshDIArhAIgbAYQgKAVgSAVQgoAwg1AAQg1AAgug/IAAAAQgpg6AAg2QAAgYAQgfIAAAAQAHgPAPgZQgGgIgGgQQgLgZAAgTQAAgaAbgbQAcgcAcABIADAAIADgDIAAAAQAZgXAQABQAsgBAsAwQAPAQALASQAUgHABgTQAAgFgBgCIgHgGIgCgDIAAgDQAHgjARAGIAIACIAOgnIAAAAQAGgTACgOIgBgBIAAgBQgwhWAAhhQAAhKA5hCQA7hEBHABQAgAABEAOQBDANANAJQACACABACQABADgCADQgTAlgYAYIAAAAQgPAQgOAHIgBACQgCAGgFADIgBAAIgDABQgEANgDANIAAAAQgBALgCAYQA2A/BXgmQAWhvAng1QA3hKBkAAQA0AAAuAkIAAAAQAvAjAYA+IAAABIADAMIABAVIAAAAQABAogXAnIgkA/IAPBXIAAAAQAEAUAaA3QASAngGAgQAxASA1AjQAZAQAVATQASgFAUAAQAqAAAkAVQAsAYAAAoQAABAgzAjIAAAAQgbAQgMAJIAAAAQgVAOgKAQQgLATgHAhIAAgBQgHAngFARIAAABQgSBChAAAQg6AAgdgfQAbBOgRAxQgcBSi4A7QhsAihFAAQgzAAghgRgAFZEfQgBgMAAgOQAAgRAHgUIg6g9IAAAAIgSgSQATAzAVAkQARAdANAaIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.4,-65.6,138.9,131.1);
p.frameBounds = [rect];


(lib.dress_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("ABfK5QgxAAgsghQgMgLgMgNIgjAUIAAABQgpAVgeAAQg3AAgxggQgUgNgMgOIgIABIgBAAQgcADgKAAQhsAAg5hTQgdgrgMg7QhZAAg4gkQhAgpAAhJQABgrAWgeIALgMIgCgPQgCgHABgVQAAhDAvg0QAzg4BSAAQAeAAAbALQAhgiAtglIBfhLIAAAAQAmgfACgJIgHgLIAAAAQgJgRABgMQgBgRATgMIAAAAQALgHAAgJIAAgHIgCAAQhcghgSAAIgCgBIgDgBQgDAAgCgDQgBgDABgDIANgnIAAAAIADgJQgWgUgPgPQgggiABgjQgBgjAkgxQATgbAYgTQAOggAagXIAAAAQAqglAvAAQAfAAAmAaQACABABADQABACgBADQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQg6AigDAsQC4g5CmArIAEgNIABAAQABgEAWgUIAAABQAVgUA5gMQA4gMA1A2QA0A1gBAvQABAQgFATIAPANQAjAjgBAtQABAggYAbQgNAPgoAbIAHAZIAAAEIgDAEIgEABQgkADg+AbQgvAVgYAVQAHAgAdAlIAAAAQAGAHBNBRQBJBJAxBSIAZgBQASAAAVAKIABAAIACAAQBJAAA5A0QA1AxAAAxQAAAWgCAEIgCADIgIARQAWAkAAAhQAABIg/A4QhAA5hWAAQgTAAgRgDQgIARgNALQgdAZhGAAQgaAAgdgNQgLgEgKgGQgUAUgfATIAAAAQhKAsg9AAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.7,-69.7,145.4,139.5);
p.frameBounds = [rect];


(lib.dress_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AkaH9IgBAAIh4g9IgGgDIACgGQAghbAthPQAVgoBBhhQAqhAATgrIAAAAIAEgLIAAgBQAQgnAGguQAEgcAAggQAAgbgKhPQgKhOAAhYIABg/IACgXIAAgFIAGgBQAfgFAZgIIASgGQAXgMAbgWIAIgHIAEAJQAaBBAcAqQANATAMAQQApgoAwgoQAugnAqgfIAFgDIAFAEQAQAOAhANQAZALAgAIIAOADIgLAKIgFAFIAJAGIASAMIAGAFIgEAGQgqA/gYBAQgZBDgBAvQAUBIAXBcIAKArIAPA8IAUBYQAwDWgGCnIAAAJIgJgCQiYgdhiAiQhXAfiEAAQhjAAhygyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-55.9,82.1,111.9);
p.frameBounds = [rect];


(lib.dress_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("ADhFAQgGgMgIgCQgHgCgKAJIgGAFIgFgGQgOgSgNAJIgHAEIgEgHQgGgOgIgCQgHgCgJAKIgHAGIgFgIQgHgKgIgCQgIgCgKAIIgHAFIgEgJQgGgPgJgCQgKgBgOANIgGAFIgFgHQgIgNgGgBQgJAAgKAJIgGAFIgFgFQgNgPgMgCQgNgBgMANIgFAFIgFgFIgGgFIgBAAQgbgWgpAAIgLAAQgzAQgUARIgGADIgFgEQgEgFgGAAQgHACgKAIIgEAFIgFgEQgOgLgNAOIgFAFIgYgYIACgFQADgGAlguQAYgeAAgbQAAgngKhVQgKhTAAguQAAhHAOg7QAFgYAHgSIACgEIADgBQAUgHAcgMIAAgBIAUgIIAPgHIgFAQIgEALIABgBQgLAjAAAQQAAAuAeArQAeAtArABQA7AABeheQA3g3Aqg8IAEgGIAHAEIAYAQIAAgBIAaAQIAHADIgEAHQgVAngIAUQgPAsAABfQAABWAeBPQAkBeBSABIAjAAIAOAAIgIAMQgPAWgiATIAAAAQgUAKgWAJQAUADAPAAQAWAAAJgDIAIgEIAEAQIgCADQgQAXghAPQghAMgOAHIgJACgABeC+QAEASgMAQQAfgOAVgYIAAABIAOgSIgigEQghgCgkAaQAZgBALgDIAIgDgAhTBSIgUALQggASgTAoQAZgUAqgeQBPg4A6gfIgYAAQgrgChdAkQhaAjguApQApgNBegfIABAAIACAAIAUgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.6,-32.5,71.4,65.1);
p.frameBounds = [rect];


(lib.dress_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AgnFqQgcAXgOAKIAAAAQgjAXg2AAQhoAAg+hLIgNgQIgWABQhiAAg2hHQgagigIgcQgBgDACgDQABgCADgBQAagKBAgmQAygeAmgbIgHgFQgCgCAAgDQAAgDACgCIABgCIABAAIADgDQAmgPAwgkIBJg1QgQhjgCgOQgBgJAAgjQAAh6AkhCQAphNBWAAQBXAABOBBQBJA9AKBEQAIA9AiC1ICABvIACAEIAAAEIgCAEQgJAGgJAFQAcAQArAUQBWAnBDAFQADABACACQACACAAADQAAADgCACQgrAug9AbIAAAAQg5AZgyAAIgGAAQADAPAAAPQABA5hFAsQg9Ang+AAIgBAAQhxAAhMhog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.8,-46.6,111.8,93.3);
p.frameBounds = [rect];


(lib.dress_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AkQKPQiYgagygqQgDgCAAgDQgBgDACgCQAkg4AahnQAoiiAmg/QAgg1AlgyIgVgQQgCgCgBgCQgBgDACgDIAUghIAAgDIAAgBIABgKIgLADQgMACgOgBIgEgCIgDgEIAAgFQAGgNAGgIIAAAAIAHgIIgKgFIAAAAIgWgNQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAMgIAKgEIAAAAIALgEIgHgJIgBAAQgIgNgDgKQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAMAAAMABIABAAIALABIgDgLIgDgYQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABAAQAMAEALAFIAAAAIALAFIAAgMIAAgXQAAgDACgCQACgCADAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAABIAfARIACgjQAAgDACgCQABgCADAAQADgBACACIANAHIAAgIIgKhUIAAgBQgKhXAAgjQAAg0ACgOIAAgBQADgTAIgZIABgDIADgCIBAgYIAzgTQAAgBABAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgCAEQgKAaAAAYQAAAjAjANQAYAKA2AAIAZgBIgIgVQAAgBgBgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQACgCADABIAiADIgOggQgBgCABgDQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAABAAIAiABIgQgfQgBgCABgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQACgCADAAIAigCIgTgeQgBgCAAgDQAAgDACgBQACgCADAAIAXgCIAMgBIgFgKQgGgNgDgKQgBgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQANABAMACIABAAIAJADIAAAAQAAgGACgFIAAgBQADgHAEgDIAAgBQAGgHAKgEQACgBADAAQADABABADIAEAFIAAAAQAVAiAKAVIAhgUQAAAAABAAQAAgBABAAQABAAAAAAQABAAABAAQACAAACACQACACAAADIADAjIALgGQANgGALgCIAFAAIADADIABAEQAAAPgFAMIABgBIgEALIAKABQANABAMACQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAABIgPATIAAAAIgIAJIALAEIABAAIAWAJQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAACgCACIgTAQIAAAAIgJAHIAJAFIABABIATAOQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQABACgBADQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgVALIAAAAIgLAFIAJAIIARARQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgCACgCABIgiAJIAHAKIAAAAIAOAUQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAACgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAABIgYADIAAAAIgMAAIARAgQABACgBADQgBACgCACQAAAAgBABQAAAAgBAAQgBAAAAABQgBAAAAAAIgkgCIAMAhQABADgBACQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgCACgDAAIgigGIAJAiQAAADgBACQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgDABgCgBIgLgCQAJBpBQEjIAkAFIAEACIACAEIAmCaQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIgYgDIAsCXIAAAEIgCADQhfBVh1AhQicAshuAEIgbAAQhoAAiLgYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-67.9,95.8,135.9);
p.frameBounds = [rect];


(lib.dress_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AmmHfIgCgDIgBgDIABgEQA/j+Bgh9QBch3ASiWQAFgnAAgoQAAgbgCgbIgFgoIAAgBIAAgBQAGhpCYgDIAhAAQgEgJgJgFQgIgEgggJQhEgTAAhEQAAgMAGgQQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAYgUAPAHQAOAGAGALIAAABQAHAKgGARQgEAMAAAFQABAEAIAEIAaALIABAAQAZAMALAVQAGgOAKgMQAYgaAugFQAIgBAUgKQAUgKAHgHQAFgFAMgXQAIgRAZAAQALAAAOAOQAFAEADAgIgBAEQgEAHgFAHQgYAhg+AXQhPAcgMAIQgNAHgJAKIATAEQCFAZBECAIABABQBFDnAmDmQAgDHAABOQACA1gBAfQgBAcgEAXIgDAQIgCAEIgEACQitAriZAAQkjAAjZieg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.6,-63.7,85.4,127.5);
p.frameBounds = [rect];


(lib.dress_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AjbIjIhMg1IAAAAQgqgbgkgHIhbgHQg8gDgOgXIhNhvIgBgEIABgEQAhg3BAhFQBqhyDbisIADgDQAEgOACgXIAAg1QAAgNgKiVIAAgBQAAhVAahAQAXg5A4gzQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABgBAAQgCAIAAAFQAAAjAgAYQAgAXAnAAQArAAAugeIABgBQAogaAqgvQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQABAAAAABIBiAzIADACIABAEIgBAEIgJAQIgBACQhNCEAABoQAAA1AWA+QAcBQAFAVQBXBfBpCdQBtChAqBrIAAAEIgCAEQgaAhgUARQg0AshgAAQgpAAgygHQgwgIgeAAQhPAAhSAxIg9AjQggAQggAAIAAAAQhUAAhlhJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-62.1,123.6,124.2);
p.frameBounds = [rect];


(lib.color_picker_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_picker_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,360);
p.frameBounds = [rect];


(lib.bottom_decor12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor12_img();
	this.instance.setTransform(-79.9,-54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.9,-54.4,160,109);
p.frameBounds = [rect];


(lib.bottom_decor11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor11_img();
	this.instance.setTransform(-50.5,-78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-78.4,101,157);
p.frameBounds = [rect];


(lib.bottom_decor10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor10_img();
	this.instance.setTransform(-41.2,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.2,-33.3,83,67);
p.frameBounds = [rect];


(lib.bottom_decor9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor9_img();
	this.instance.setTransform(-86.4,-54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.4,-54.3,173,109);
p.frameBounds = [rect];


(lib.bottom_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor8_img();
	this.instance.setTransform(-38.7,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.7,-28.1,77,56);
p.frameBounds = [rect];


(lib.bottom_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor7_img();
	this.instance.setTransform(-38.7,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.7,-28.1,77,56);
p.frameBounds = [rect];


(lib.bottom_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.bottom_decor6_img();
	this.instance.setTransform(-63,-41.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-41.8,128,84);
p.frameBounds = [rect];


(lib.bottom_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor5_img();
	this.instance.setTransform(-40.1,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.1,-33.5,81,67);
p.frameBounds = [rect];


(lib.bottom_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor4_img();
	this.instance.setTransform(-41.1,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-50.5,82,101);
p.frameBounds = [rect];


(lib.bottom_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor3_img();
	this.instance.setTransform(-43.7,-46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-46.3,88,93);
p.frameBounds = [rect];


(lib.bottom_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_decor2_img();
	this.instance.setTransform(-45.3,-61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.3,-61.7,91,124);
p.frameBounds = [rect];


(lib.bottom_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor1_img();
	this.instance.setTransform(-40.2,-34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-34.6,81,69);
p.frameBounds = [rect];


(lib.bottom_base12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("ADgIgQg3AAhFgiIAAAAIgOgHIAAAAQgjgSgXgRQgbAQgdAMIAAAAIgLAEQhBAYgzAAQhaAAhqgiIAAAAQgPgGgOgGQgdgNgVgUIgvAEIgsAFIgQABIAAAAQg5ADgtgYQgLgGgKgHIAAAAQgmgdgcg3IhDgdIgEgDIgBgDIABgEIAQggQCgk3CpjkQB1igA/gwIAAAAIAJgDIAtg4QABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAABABAAQAAAAABAAQDYBcEGhBQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIAlBGIABADIACACQACADA5AxQBCA5AzBAQClDIB/F6IAAAAIANAnIAAAEIgCADIgEACIhRAUQggAogzAkIgdATIgBAAQhNAuhEAAQgxAAgIgCIAAAAIgcgJIgdAJQhOAWgmAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.9,-54.4,159.9,108.8);
p.frameBounds = [rect];


(lib.bottom_base11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("Aj6MFQhqghgagmIgCgDIABgEIASgyIgCgCIgsgpQgbgbACgYQABgXgDgzQgEg0gVhlQgMg9gSh2QgLhFAAhPQAAiEAqh9IAAABQA5isDUldQACgCADgBQACgBADABQD3BpDNhVIAEAAIAEACIACAEQAgCEAMBUQALBJAAAoQAACQhEBlQgOAUghAmQgTAWgBAIIAJANQAMASgBAEQABADgMATQgIAMgBADQACAEBABDQA1A3AZAoQABADAAADIgCADIAMAMQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQACABACACQAnAvBABYQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAJgFAKIgBABIABABQAtAmABAqQABApgsAtQh9B8hQgBQghAAgxgKQhJgPACgbQAAgGAEgNIABgBIAAgBIABgDIAAAAIABgEIAAAAIADgPIABgCIgCAAIgDgCIgBAAQgMgIgbguQgZgtgMgRQgMgRhhh8IgBgCIgEgBIgggYQA9CXATAXQAYAdgIAfQgHAfgJAJIgGAGIARAPQApAlAFArQABADgCADQhEBXgjAkQgqArg9AAQgfAAgkgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-78.4,101.1,157);
p.frameBounds = [rect];


(lib.bottom_base10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AELFMQgKAAgOgDIgOgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBABgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAIAOgTQgigMgwgIQhEgMhNAAIg3ABQgTABgPACIgCABQgBAHgFAJIAAABQgLAPgHgCQgLABgKgOQgJgMAAgMQgBgIAHgKIAAgBQgVgRhggjQhBgXgvgIIgFAXQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQgdgVgGgPIgBgBQgCgFAAgEQgBgQAYgTIAAAAIAWgSIAOgtQALghAxhcQAxheBtiXIADgDIAEAAQDyA8D+gKQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQAAAAABABQAAAAAAABQABABAAAAIASBEIAAAAIABAFIAAABQAQBwAABSQAAA2gMAuQgKArgYArIAAAAIgmBYQgFA0gjABQgLANgJAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.2,-33.3,82.5,66.6);
p.frameBounds = [rect];


(lib.bottom_base9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AAhIfQgSABgUgTIgEgDIABAAQgQgNgNgBQgKABgSAKIgBAAQgWAMgHAAQgLABgfgZQgYgVgTAAQgHAAgOADIgBAAIgMADIAAAAQgaAGgLAAQgWABgegkQgYgdgLgBQgOAAgTAJIAAAAQgWAJgJAAQgWABgggiQgbgdgWgBQgEAAgGADIgBAAIgIAEIABAAQgPAJgJgBQgMACgfgmQgYgegSgBQgGAAgFAEIgGADIAAAAQgGADgHAAQgVABgegwIAAAAQgYgogcgBQgIAAgGAEIAAAAQgKAIgIAFIgEABIgEgBIgCgDQgMgWgKgOQgOgWgNgBQgDAAgCgCQgCgCAAgDQAAgDABgCQAXgcAngjIAAAAIANgLIgLgIQgCgCgBgCQAAgDABgDQDHloFKjhIAgg+QACgDACgBQADgBADABQDlBgEWg4QADgBACABQADACABADIATBAQEnCwCeFJQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABIgGAGIAPAEIAAAAQAyATAtAjIADAEIAAAEQgIAYgGAcIAAAAQgNAngfgBQgHAAgHADQgVAIgOAiQgYA2gZgBQgHABgLgMIAAAAQgFgGgEgBIgDABIgBAAQgUAGgeAqQgoA3gggBQgTAAgDgNIAAAAIAAgCIgBAAQgSAAggAeQgmAkgRgBQgKAAgNgOIAAAAQgHgIgCgBQgRABgeAbQgkAfgMgBQgMAAgRgIQgJgFgHgBIgBAAIgEgBQgOAAgWASQgcAXgLgBQgJAAgagMIgSgIIAAAAQgHgDgFAAQgLABgXANQgbAQgPAAIgBAAgAg+IBIAAAAIABgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.4,-54.3,173,108.8);
p.frameBounds = [rect];


(lib.bottom_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AEYEZQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQhviajoAJIgMAhQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBABgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgogjgmgUQhUgrh9AAIAAAAIgEgBIgDgEIAAgEIACgKIAAAAIALgrQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIARABQAih1Bgh8IAVgnQACgDADgBQADgBACACQBJAiBNASIAlAHQCcAbCvgnQADgBADACQADABAAADIAKAtQAbBhAEAaIAFAhIAAAAQADAWgMBCQgMBEgbAtIgXAoIAHAIQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgiAuQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABIgDAAIgCAAgAAAgPIAAgEIAAAAIAAAEgAhQgbIgBgEIAAACIABACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.7,-28.1,77.4,56.3);
p.frameBounds = [rect];


(lib.bottom_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AEYEZQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQhviajoAJIgMAhQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBABgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgogjgmgUQhUgrh9AAIAAAAIgEgBIgDgEIAAgEIACgKIAAAAIALgrQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIARABQAih1Bgh8IAVgnQACgDADgBQADgBACACQBJAiBNASIAlAHQCcAbCvgnQADgBADACQADABAAADIAKAtQAbBhAEAaIAFAhIAAAAQADAWgMBCQgMBEgbAtIgXAoIAHAIQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgiAuQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABIgDAAIgCAAgAAAgPIAAgEIAAAAIAAAEgAhQgbIgBgEIAAACIABACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.7,-28.1,77.4,56.3);
p.frameBounds = [rect];


(lib.bottom_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("Ai6F9QgngjgmAAQgLAAgVAHIAAAAQgYAIgJAAQgeABgng0QgigtglgBIg1AFQgjAAgighIAAgBIgrgyIgBgCIgBgFIgBgEIACgDIBuiAQgLgOgFgNIAAgEIACgEIAMgIQAfgdAlgrIAYgcIgCgFIAAgBQgKgUgKgLIgCgDIAAgEIACgEQAwglBVhYIAAAAQBPhRAWgbIAMgfIACgEIAEgBIAEAAQD0BrC+hPQADgCADACQACAAACADIAPAbIAAACQAKAcBMBlQBMBlAsAtQACACAAADQAAADgCACIgTAWIBRBNIAAAAIAPAPQACABABADQAAABAAAAQAAABAAAAQgBABAAABQAAAAAAABQgIANgMAJIBvB0IACAEIAAAEIgDADQg7AugeATQgmAXgygCQgmgBgSALQgLAGgJASIAAAAQgMAVgMAJIAAAAQgTAOgpAAIAAAAIhRgFQgjAAgVAVIAAAAQgZAagqAAQgPAAgygLQgtgLgEAAQgQAAgcAQQgfATgWAAIgBAAQgXAAgsgmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.7,-41.9,127.5,83.8);
p.frameBounds = [rect];


(lib.bottom_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AEPEpIgHgGIgogjQABABgJAIIgPAMIgNAMIAAgOIgBgCIgLgTIgGgKIgSAQQgSAPgLAEIgEABIgDgDQgogogSgPIgIAMIgEAAQgFAAgFgEIgCgBIgDACIAAAAIgHAIIgHAHIgGgLIgDgDIgCgDIgJAIQgMAHgCADIgNAMIAAgOIAAAAIgBgDIgLgSIgJgNQgRAGgcANIgPAHIAFgQIAHgYIgPAHIgCAAQgHABgJgMIAAAAIAAAAIgCgEIgXAQIgYASIgHAEIgEgJQgCgGgng8QgFACgIAGIgLAIIgGAFIgBgCIgBAAIgHgCIAAgFIgDgCQAAgFgDgHQgCgFABgBIgHAEIgBAAQgLAFgGABIgIABIAAgJQAAgGgDgJIgEgRIgPAAIgsAKIgOADIAGgOQAvhtANghQAOgnAxhaQAxhaAsgxIADgEIAFACIAeALIAJADIgGALIANgIIADABQA6AUA3AMIAEABIABAPIAJgNIAFAAQBBAMA9gBIAEAAIAEAHIAAgBIABgGIAHAAQA/gDA7gRIADgBIADACIAAAAIgBgCIAJgDQATgHATgIIAIgDIADAIQAfB2AGAfQAKA2AAAzQAABjghBQQgXA2g3BOIgFAGgADDEVIgEgBIABAAIADABgAgXD3IgEgBIABAAIADABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.4,-30.2,78.8,60.6);
p.frameBounds = [rect];


(lib.bottom_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("Al3HgQgDgBgBgCQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIABgZQAAgegQhbQgQheAChWQADhXAvifQAviiCijvIADgDIAEgBIAEACQAoAhBQAAIAFACIACADIAQAwIAlgtIAEgCIAEAAQChApCXgbQADAAACACQACABABADQAeB4AGAlQAHAmAAApQAABSg2BdQAbBggBAqQAAAdgKAVIAAgBIgCAFIAAgBQgQAagfAAQgxAAgrg3IgIAKQgQAUgIARQAwAHAEAJIABADIAAAEQgjBkgxAxQhBBBhHAUIgEAAIgDgCIgCgEIgCgGQgJgLgbgQIg2gbIgHARQABASAJAUQAFAKAGAGIACAEIAAAEIgDAEQgeASgpAOQg9AWg2AAIAAAAQgvAAhXgZgAE+BeQgCgTgNggIgEAFIAAAAIgDAEQALAYALASIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-50.5,82.3,101.1);
p.frameBounds = [rect];


(lib.bottom_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AhAGgQgQgBgPgEIgEgDQgSgcgGgRIgIACIgIACIgBAAIgaAGQgRADgOABIgPAAIgMAAQgOgBgRgDIAAAAIgcgHIgYgGIgUgHIgOgEIAAgBIgbgJQgVgIgOgHIgDgEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBIAGg2IADgzQAGhTAIg1QAOhTAmhmQAdhMArhWQAXgwAcgzIAAAAIACgDIAYgnQAAAAABAAQAAgBAAAAQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAABAAQCDAtB1AOQCfASCIglQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAEACIACAEIAKAnIAAABQAUBtAABGQAABWhCBkQgXAlgmAsIAAAAQgeAhgZBAIgOAiIgBADIgPATIgZAdIAAAAIgUAVIgXAVIgYAVQgQAMgPAJQgMAIgMAFIgKAEIgBAAIglAMIAAAAIgXAEIAAAAQgOACgOAAIgPgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.9,-41.7,81.8,83.5);
p.frameBounds = [rect];


(lib.bottom_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AkiIsQgKAKgQAKQgbAQgRABQgQABgPgEIgBAAQgQgEgIgFQAAAAgBAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgDABgCQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAngeAEhAQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBIADgBIgDgEIgBgCIgIgkIgIgpIgOhRIAAAAIgEgVQgcitAAg7QAAhNAoiTQA1jHB3itIATgbIAQgWIAAAAQASgbAPAEQANABAIAXQAdgRAWAFQAXAFAPAeIABgBIAAgBQAQgSATABQAmAAASAjQACgEADgCIAAAAQAMgOAbAAQAYAAASAUIADAEQADgFAEgDQAPgQAhAAQAlAAARAdIAFgGQAWgYAVABQAVgBASAUIAAAAIAEAFQACgGAFgCQAJgIARAFQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABABABQAAAAAAABIACAyIAAABIACAfQADAfAFASQAUBFAAAgQABBtheCHIgBAAQguA6gjAvIgRAZIgCACIADAAIAIADQAeAJATALIAAAAQAOAHAPAMIAZAUIABABIAAAAQApAHA5gPQADgBACABQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQgGAngUAXQgSAUgWAGIAOAUQAOAUAAAYQABAYgXAYQgYAYghAAQgMAAgOgFIAAAAIgFgDIAAACIAAAWQAAAhgTAVQgUAXghAAQgSAAgWgLIAAAAIgYgOQgMAYgWAUQggAbgfgGIgEgCIgCgFIgBgHIAAAAIAAgBIgCAEIgBACIAAAAQgPATgWAAIgBAAIgHgCQABAigSAaIAAgBQgWAegoAAQgUAAgSgLQgIgFgEgFQgIAcgLAOQgUAYgnAAIgBAAQg4AAgag9gAhVEAQABAaAVAiIARAdQAMAWAEAOQApAmAngGQgCgWgFgRQgFgQgHgNQgGgKgHgHIAAgBQgogvgUgUQgRgRgRgNIgJAag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.6,-61.7,87.3,123.6);
p.frameBounds = [rect];


(lib.bottom_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663333").s().p("AEcFYQgpgqg7gGIgEgCIgCgDIgBgEIAIg4IglAvQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQhygtiDAIQgCAAgCgBQgDgCAAgCQgBgDABgCIAFgMQhihRh9AGQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQgBgBABgBQAAAAAAgBIAKgnIgYAkQgCACgDABQgDAAgCgBIgjgXIgEgDIAAgFIADgEIA0guQAQgsAWgsQA9iDCEixQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQABABAAAAQDzBcC+hLIAEAAIAEACIACAEQAqCtAHAhQAQBWAAAmQAAA5gLAeQgRAvhLB0IgCBQQAAACgCADQgCACgEAAQgDAAgCgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-34.6,80.5,69.3);
p.frameBounds = [rect];


(lib.body_platform_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.platform_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.body_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.body_decor1_img();
	this.instance.setTransform(-106,-207.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-207.1,212,415);
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


(lib.body_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC97B3").s().p("AmAfyQg1gkAGhEQgShCgKhVQgKhVgqhOIhMiRQgagvgIh6QgEgtgBg2IgLg8QgJg2AAgnIABgcQABgVADgYQAEglAIgrIAKgtIACgLQAiiaBtjKIACgCIABgEQAIgSAUgeIAAgBIApg7IAAgBQA3hMABABIgCgWQgoBphwAZQgeAGhPAKQg0AHgfAGIAAADIAAABQgPAxhiAoQh1AvgdAAQgfAAgNgGQgagKABgWQgCgUA3ggIAXgMIgVACQgZAAgegLQgqgOACgXQgCgjBMgQIAAgBIARgCIgZgEQg5gPABgnQAAgHAEgFQAagpCJACQghgfABgaQAAgKAFgNIAAABQAJgVANABQAegBBDAvQBDAvANAiIADgEIBdgnIAAABQA/gdAdgYQAdgZARg1QAahTAEgGIAAgBIgBgEIAAgHIABgEIgBgDIAAgGQgBgZAEgYQABgKADgKIAAgBQAGgVAKgTQALgYAYgTIANgLQAbgSAngPIABAAQAsgNAagKIATgJQAVgLAIgSQAGgOgCgSQiRgFihhWIAAAAQjIhcANiYQAIhcgQhSIgIgJIAAAAQg3g4gigpQh9iSABhfQAAgYALghQARg4AiABQAEgBAZAOIABAAIAFADQgHiDAjiLIAAgBQCjnoIphIIABAAQIcgaEkHbIAAABQBZC5gFC7QBUgrAgABQBLgCARCEQAPB+gcBSQgcBRhWB1QhXB2hSAmQhUAmguAAQgvAAhggOIgDgBIgHgDIgCgCQi/DWklA7IgCAAQgFAaAAAVIABAEIAAAAQADAUAfAXQAVAOAoAPQAbAKAUANIAAAAIAQAKQAfAWANAbQALAZAGAfQADAWAAAZIAAACIABAUIAAAsIAcBhQALAmAHAbIAAAEIAAAAQADgBADACQAfAUAdAiIBPBhQAWAcAVAMQAMgBAhACIBJAHQAwAGAlBCQATAiAbBKIABADQgBAegOAXIAAAAQgRAYgVAAQgUAAgWgOQgEAYgMAKIAAAAQgQAOgfgKIgBAAQgWgIgQgQQgaAPgMAAQgjAAgSgjQgNgYgFg1IAAgBQgMgDgLgIIAAAAQgKgHgaglIg2gvQg5gvgjgTQgmgUgYggIgBAAQgFgHgEgHIASBLIAAAAIAdDHIAAAEQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQADBmhFBsIgQAZIgPAUIAAAAIg/BVIgJAMQgKAPgIANIgLAUQA1ABA2A1IAAgBQA+A9AcBNQAOApANAcQAKAXAKAPQAUAgASAXQAJANAlAfIABABQAjAjgBAjQAAAcgMAUIgdAvIgEADIAAABQgTBNgjAzIgBAAQglA0g8AHQg+AHgIgJIAAAAQgGgFgDgLIgOACQgUAAgJgGIABAAQgMgIAAgUQgBgMALgbQAKgXAAgTQAAgRgFgoQgFgoAAgVIAAAAIAFg+QAAgbgVgSQgmgXgLgLIAAAAQgKgLgzglQgfgXgighQgSgRgTgUQgCgCAAgDIABgCIgGgCIgDgCQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgbgJgQgHQgcgNgNgLQgHAgABAJQAAAJAWAiIADAEQAWAkAFAdIALBFQADASABArQAAAqADAtQADAsAGAPIAAABQAHAPAiAhQAlAmAAAaQAAAMgFAXIgIAhQgBAFAKA0IAMBDQADANgbAyQgfA6gbgCQgLABgPgLIAAABIgHAHIgBABQgHAGgTABIgBAAQgTAAg5gng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.1,-207.3,212.3,414.8);
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
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_4_img();
	this.instance_3.setTransform(-200,0);

	this.instance_4 = new lib.background_5_img();
	this.instance_4.setTransform(-200,0);

	this.instance_5 = new lib.background_6_img();
	this.instance_5.setTransform(-200,0);

	this.instance_6 = new lib.background_7_img();
	this.instance_6.setTransform(-200,0);

	this.instance_7 = new lib.background_8_img();
	this.instance_7.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.shine_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_1_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
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
	this.instance.setTransform(-35,-35);

	this.instance_1 = new lib.sound_2_img();
	this.instance_1.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
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


(lib.play_again_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-80,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65,160,130);
p.frameBounds = [rect];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_img();
	this.instance.setTransform(-80,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65,160,130);
p.frameBounds = [rect];


(lib.more_games_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_4_img();
	this.instance.setTransform(-26.4,-20.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.4,-20.2,51.9,40.3);
p.frameBounds = [rect];


(lib.more_games_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_3_img();
	this.instance.setTransform(-66.1,-64.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.1,-64.1,133.2,128.2);
p.frameBounds = [rect];


(lib.more_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_2_img();
	this.instance.setTransform(0.3,0.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.3,0.4,34.6,28.8);
p.frameBounds = [rect];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_1_img();
	this.instance.setTransform(-4.4,-10.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.4,-10.7,30.3,30.3);
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
	this.instance.setTransform(-80,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65,160,130);
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
	this.instance.setTransform(-90,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-30,180,60);
p.frameBounds = [rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nav_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
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


(lib.top12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base12_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.1,-25.4,44.3,51);
p.frameBounds = [rect];


(lib.top11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor11_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base11_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-91.3,146.5,183);
p.frameBounds = [rect];


(lib.top10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor10_mc();
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base10_mc();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.3,-40.2,115,80);
p.frameBounds = [rect];


(lib.top9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base9_mc();
	this.body_mc.setTransform(0,7.2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.8,-43,118,86.1);
p.frameBounds = [rect];


(lib.top8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base8_mc();
	this.body_mc.setTransform(0,2.7);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.4,-32.3,45,65);
p.frameBounds = [rect];


(lib.top7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.6,-30.1,59.4,60.4);
p.frameBounds = [rect];


(lib.top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base6_mc();
	this.body_mc.setTransform(-1.7,4.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.6,-29,57,58);
p.frameBounds = [rect];


(lib.top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor5_mc();
	this.instance.setTransform(-0.1,-0.1,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base5_mc();
	this.body_mc.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.2,-41.6,120.2,83.3);
p.frameBounds = [rect];


(lib.top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base4_mc();
	this.body_mc.setTransform(0,2.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.7,51.1,48);
p.frameBounds = [rect];


(lib.top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-24,52.1,48.1);
p.frameBounds = [rect];


(lib.top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-15.7,82.2,32);
p.frameBounds = [rect];


(lib.top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.top_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.7,-27.5,72,55);
p.frameBounds = [rect];


(lib.top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.top1_mc();
	this.body_1.setTransform(177,-77.7);

	this.body_2 = new lib.top2_mc();
	this.body_2.setTransform(178.1,-77.5);

	this.body_3 = new lib.top3_mc();
	this.body_3.setTransform(177.3,-83.4);

	this.body_4 = new lib.top4_mc();
	this.body_4.setTransform(174.8,-85);

	this.body_5 = new lib.top5_mc();
	this.body_5.setTransform(180.4,-64,1,1,0,0,0,-0.1,-0.2);

	this.body_6 = new lib.top6_mc();
	this.body_6.setTransform(175.9,-77.7);

	this.body_7 = new lib.top7_mc();
	this.body_7.setTransform(178.7,-78.1);

	this.body_8 = new lib.top8_mc();
	this.body_8.setTransform(174.5,-74.1);

	this.body_9 = new lib.top9_mc();
	this.body_9.setTransform(180.5,-64.2);

	this.body_10 = new lib.top10_mc();
	this.body_10.setTransform(176.6,-69.3,1,1,0,0,0,0.1,-0.1);

	this.body_11 = new lib.top11_mc();
	this.body_11.setTransform(178.2,-21.9);

	this.body_12 = new lib.top12_mc();
	this.body_12.setTransform(172.9,-87.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(141.2,-105.2,72,55);
p.frameBounds = [rect, new cjs.Rectangle(137,-93.2,82.2,32), new cjs.Rectangle(151.3,-107.5,52.1,48.1), new cjs.Rectangle(149.2,-108.8,51.1,48), new cjs.Rectangle(120.3,-105.4,120.2,83.3), new cjs.Rectangle(147.3,-106.8,57,58), new cjs.Rectangle(149,-108.2,59.4,60.4), new cjs.Rectangle(152,-106.4,45,65), new cjs.Rectangle(121.7,-107.3,118,86.1), new cjs.Rectangle(119.2,-109.4,115,80), new cjs.Rectangle(105,-113.3,146.5,183), new cjs.Rectangle(150.8,-112.6,44.3,51), null];


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
	this.instance = new lib.title_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:300},0).to({x:-50,alpha:0.738},11).to({x:0,alpha:1},4).wait(120).to({x:-300,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.title_1_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({x:-300},0).to({x:50,alpha:0.738},11).to({x:0,alpha:1},4).wait(120).to({x:300,alpha:0.012},10).wait(1));

	// animation
	this.instance_2 = new lib.title_3_mc();
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({alpha:1},5).to({alpha:0.012},5).to({alpha:1},10).to({alpha:0.012},10).to({alpha:1},15).to({alpha:0.012},15).to({alpha:1},20).to({alpha:0.012},20).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-80,480,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-540,-80,1080,160), new cjs.Rectangle(-508.2,-80,1016.4,160), new cjs.Rectangle(-476.3,-80,952.7,160), new cjs.Rectangle(-444.5,-80,889.1,160), new cjs.Rectangle(-412.7,-80,825.5,160), new cjs.Rectangle(-380.9,-80,761.8,160), new cjs.Rectangle(-349.1,-80,698.2,160), new cjs.Rectangle(-317.2,-80,634.5,160), new cjs.Rectangle(-285.4,-80,570.9,160), new cjs.Rectangle(-253.6,-80,507.3,160), new cjs.Rectangle(-258.2,-80,516.4,160), new cjs.Rectangle(-290,-80,580,160), new cjs.Rectangle(-277.5,-80,555,160), new cjs.Rectangle(-265,-80,530,160), new cjs.Rectangle(-252.5,-80,505,160), rect=new cjs.Rectangle(-240,-80,480,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-270,-80,540,160), new cjs.Rectangle(-300,-80,600,160), new cjs.Rectangle(-330,-80,660,160), new cjs.Rectangle(-360,-80,720,160), new cjs.Rectangle(-390,-80,780,160), new cjs.Rectangle(-420,-80,840,160), new cjs.Rectangle(-450,-80,900,160), new cjs.Rectangle(-480,-80,960,160), new cjs.Rectangle(-510,-80,1020,160), new cjs.Rectangle(-540,-80,1080,160)];


(lib.substrate_option_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.substrate_option_0_mc();

	this.instance_1 = new lib.substrate_option_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect, rect];


(lib.shoes12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base12_mc();
	this.body_mc.setTransform(0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.1,-54.7,102.3,110);
p.frameBounds = [rect];


(lib.shoes11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor11_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base11_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.7,-31.7,82,64);
p.frameBounds = [rect];


(lib.shoes10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base10_mc();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.3,-49.8,101.1,100);
p.frameBounds = [rect];


(lib.shoes9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base9_mc();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.3,-45.2,91,91);
p.frameBounds = [rect];


(lib.shoes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.8,-45.9,90,92);
p.frameBounds = [rect];


(lib.shoes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.3,-36.7,105,73.4);
p.frameBounds = [rect];


(lib.shoes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-41.5,88,83.2);
p.frameBounds = [rect];


(lib.shoes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.6,-15.8,29.3,32);
p.frameBounds = [rect];


(lib.shoes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor4_mc();
	this.instance.setTransform(0.5,-0.4,1,1,0,0,0,0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base4_mc();
	this.body_mc.setTransform(0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-38.8,89.1,77.1);
p.frameBounds = [rect];


(lib.shoes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base3_mc();
	this.body_mc.setTransform(1.9,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-35.1,87,70.3);
p.frameBounds = [rect];


(lib.shoes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.4,-30.3,91,61);
p.frameBounds = [rect];


(lib.shoes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-55.2,100,111);
p.frameBounds = [rect];


(lib.shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.shoes1_mc();
	this.body_1.setTransform(176,75);

	this.body_2 = new lib.shoes2_mc();
	this.body_2.setTransform(182.1,97.9);

	this.body_3 = new lib.shoes3_mc();
	this.body_3.setTransform(184.4,100.4);

	this.body_4 = new lib.shoes4_mc();
	this.body_4.setTransform(173,63.3,1,1,0,0,0,0.5,-0.4);

	this.body_5 = new lib.shoes5_mc();
	this.body_5.setTransform(198.9,54.3);

	this.body_6 = new lib.shoes6_mc();
	this.body_6.setTransform(183.1,86.9);

	this.body_7 = new lib.shoes7_mc();
	this.body_7.setTransform(176.9,90.6);

	this.body_8 = new lib.shoes8_mc();
	this.body_8.setTransform(179.4,83.3);

	this.body_9 = new lib.shoes9_mc();
	this.body_9.setTransform(180.2,83.8);

	this.body_10 = new lib.shoes10_mc();
	this.body_10.setTransform(180,81.9);

	this.body_11 = new lib.shoes11_mc();
	this.body_11.setTransform(185.8,97.8);

	this.body_12 = new lib.shoes12_mc();
	this.body_12.setTransform(175.1,73.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(126,19.8,100,111);
p.frameBounds = [rect, new cjs.Rectangle(136.7,67.5,91,61), new cjs.Rectangle(141,65.3,87,70.3), new cjs.Rectangle(128.5,24.8,89.1,77.1), new cjs.Rectangle(184.3,38.5,29.3,32), new cjs.Rectangle(137.1,45.4,88,83.2), new cjs.Rectangle(124.6,53.9,105,73.4), new cjs.Rectangle(134.6,37.4,90,92), new cjs.Rectangle(134.8,38.5,91,91), new cjs.Rectangle(129.6,32,101.1,100), new cjs.Rectangle(145,66,82,64), new cjs.Rectangle(124,18.8,102.3,110), null];


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.platform_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_platform_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.nav_navigation_mc();
	this.prev_mc.setTransform(-50,-120,1,1,0,0,180);

	this.next_mc = new lib.nav_navigation_mc();
	this.next_mc.setTransform(50,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// text
	this.title_mc = new lib.title_navigation_mc();

	this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(1));

	// bg
	this.instance = new lib.bg_navigation_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-165,190,190);
p.frameBounds = [rect];


(lib.jewelry_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.icon_top12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top12_mc();
	this.instance.setTransform(0.4,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top11_mc();
	this.instance.setTransform(1.4,29.1,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,203.6);
p.frameBounds = [rect];


(lib.icon_top10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top10_mc();
	this.instance.setTransform(-0.6,3,1,1,0,0,0,0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top9_mc();
	this.instance.setTransform(3.4,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top8_mc();
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top7_mc();
	this.instance.setTransform(1.4,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top6_mc();
	this.instance.setTransform(2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top5_mc();
	this.instance.setTransform(3,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top4_mc();
	this.instance.setTransform(2,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top3_mc();
	this.instance.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top2_mc();
	this.instance.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.top1_mc();
	this.instance.setTransform(0.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes12_mc();
	this.instance.setTransform(1,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes11_mc();
	this.instance.setTransform(-0.6,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes10_mc();
	this.instance.setTransform(1,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes9_mc();
	this.instance.setTransform(0.3,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes8_mc();
	this.instance.setTransform(-1.6,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes7_mc();
	this.instance.setTransform(-2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes6_mc();
	this.instance.setTransform(-1.3,4.4,1,1,0,0,0,-2.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes5_mc();
	this.instance.setTransform(2.4,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes4_mc();
	this.instance.setTransform(1.4,2.4,1,1,0,0,0,0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes3_mc();
	this.instance.setTransform(3,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes2_mc();
	this.instance.setTransform(3.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes1_mc();
	this.instance.setTransform(1.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.mi8_img();
	this.instance.setTransform(-58,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.mi7_img();
	this.instance.setTransform(-56,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.mi6_img();
	this.instance.setTransform(-65,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.mi5_img();
	this.instance.setTransform(-53,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.mi4_img();
	this.instance.setTransform(-70,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.mi3_img();
	this.instance.setTransform(-62,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.mi2_img();
	this.instance.setTransform(-32,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.mi1_img();
	this.instance.setTransform(-69,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory8_mc();
	this.instance.setTransform(1,3,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory7_mc();
	this.instance.setTransform(-1,3.4,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory6_mc();
	this.instance.setTransform(6.8,6.2,0.89,0.89,0,0,0,10.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory5_mc();
	this.instance.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory4_mc();
	this.instance.setTransform(0.4,2.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory3_mc();
	this.instance.setTransform(0.4,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory2_mc();
	this.instance.setTransform(2.4,1.4,1,1,0,0,0,46.1,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.face_accessory1_mc();
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.sample_bg_8_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.sample_bg_7_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.sample_bg_6_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.sample_bg_5_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.sample_bg_4_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.sample_bg_3_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.sample_bg_2_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_back1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.sample_bg_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat12_mc();
	this.instance.setTransform(2,-3.9,0.8,0.8,0,0,0,-0.1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat11_mc();
	this.instance.setTransform(-1.7,-5.6,0.7,0.7,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat10_mc();
	this.instance.setTransform(-2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat9_mc();
	this.instance.setTransform(8.4,-2,0.9,0.9,0,0,0,9.2,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat8_mc();
	this.instance.setTransform(1.4,0.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat7_mc();
	this.instance.setTransform(-1.7,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat6_mc();
	this.instance.setTransform(1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat5_mc();
	this.instance.setTransform(11,2.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,187.3,184);
p.frameBounds = [rect];


(lib.icon_accessory_head4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat4_mc();
	this.instance.setTransform(-0.6,1.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat3_mc();
	this.instance.setTransform(-0.6,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat2_mc();
	this.instance.setTransform(-4.6,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hat1_mc();
	this.instance.setTransform(3.1,-0.1,0.742,0.741,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory12_mc();
	this.instance.setTransform(-4.6,5.1,0.8,0.8,0,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory11_mc();
	this.instance.setTransform(-4.7,-0.9,1,1,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory10_mc();
	this.instance.setTransform(-0.7,5.1,1,1,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory9_mc();
	this.instance.setTransform(0.3,12.1,1,1,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory8_mc();
	this.instance.setTransform(-0.6,2.1,0.8,0.8,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory7_2_img();
	this.instance.setTransform(-46,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory6_mc();
	this.instance.setTransform(-0.6,6.1,0.8,0.8,0,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory5_mc();
	this.instance.setTransform(4.3,34.1,1,1,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory4_mc();
	this.instance.setTransform(-8.7,8.1,0.7,0.7,24,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.9,-92,192,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory3_mc();
	this.instance.setTransform(-1.7,7.1,1,1,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory2_mc();
	this.instance.setTransform(-1.6,7.1,0.8,0.8,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand_accessory1_mc();
	this.instance.setTransform(-8.7,8.1,0.8,0.8,30,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.9,-92,192.9,184);
p.frameBounds = [rect];


(lib.hero_eyes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base8_mc();
	this.body_mc.setTransform(-2.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-14.3,95,29);
p.frameBounds = [rect];


(lib.hero_eyes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor7_mc();
	this.instance.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base7_mc();
	this.body_mc.setTransform(-0.5,19.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.1,-26.2,102,53);
p.frameBounds = [rect];


(lib.hero_eyes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base6_mc();
	this.body_mc.setTransform(-1.3,12.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-25.2,83,50);
p.frameBounds = [rect];


(lib.hero_eyes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base5_mc();
	this.body_mc.setTransform(0,-14);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.2,-25.8,87,52);
p.frameBounds = [rect];


(lib.hero_eyes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base4_mc();
	this.body_mc.setTransform(-1.1,18.7);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-31,104,62);
p.frameBounds = [rect];


(lib.hero_eyes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base3_mc();
	this.body_mc.setTransform(2.1,14.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.4,-24.4,99,49);
p.frameBounds = [rect];


(lib.hero_eyes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_eyes_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base2_mc();
	this.body_mc.setTransform(-11.2,14.6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-27,116,54);
p.frameBounds = [rect];


(lib.hero_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_eyes_decor1_mc();
	this.instance.setTransform(4.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hero_eyes_base1_mc();
	this.body_mc.setTransform(3.8,14.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-24.2,96,49);
p.frameBounds = [rect];


(lib.hero_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.hero_eyes1_mc();
	this.body_1.setTransform(-4.2,-0.2);

	this.body_2 = new lib.hero_eyes2_mc();
	this.body_2.setTransform(13.9,-0.2);

	this.body_3 = new lib.hero_eyes3_mc();
	this.body_3.setTransform(-1.7,0.1);

	this.body_4 = new lib.hero_eyes4_mc();
	this.body_4.setTransform(2.5,-4);

	this.body_5 = new lib.hero_eyes5_mc();
	this.body_5.setTransform(-1.8,-2.2);

	this.body_6 = new lib.hero_eyes6_mc();
	this.body_6.setTransform(-2.2,-0.3);

	this.body_7 = new lib.hero_eyes7_mc();
	this.body_7.setTransform(-4,-2.7);

	this.body_8 = new lib.hero_eyes8_mc();
	this.body_8.setTransform(0.8,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.9,-24.4,96,49);
p.frameBounds = [rect, new cjs.Rectangle(-46.7,-27.2,116,54), new cjs.Rectangle(-51.2,-24.4,99,49), new cjs.Rectangle(-49.3,-35.1,104,62), new cjs.Rectangle(-45.1,-28,87,52), new cjs.Rectangle(-43.7,-25.5,83,50), new cjs.Rectangle(-55.1,-29,102,53), new cjs.Rectangle(-46.6,-2.5,95,29)];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hat1_mc();
	this.instance.setTransform(201,-223.9,1,1,0,0,0,0.1,-0.1);

	this.instance_1 = new lib.hat2_mc();
	this.instance_1.setTransform(219.3,-248.2);

	this.instance_2 = new lib.hat3_mc();
	this.instance_2.setTransform(230,-242.8);

	this.instance_3 = new lib.hat4_mc();
	this.instance_3.setTransform(189.4,-202.8);

	this.instance_4 = new lib.hat5_mc();
	this.instance_4.setTransform(208.9,-275.3);

	this.instance_5 = new lib.hat6_mc();
	this.instance_5.setTransform(181.7,-255.3);

	this.instance_6 = new lib.hat7_mc();
	this.instance_6.setTransform(241.8,-228.5);

	this.instance_7 = new lib.hat8_mc();
	this.instance_7.setTransform(180.2,-258.5);

	this.instance_8 = new lib.hat9_mc();
	this.instance_8.setTransform(184.7,-241.2);

	this.instance_9 = new lib.hat10_mc();
	this.instance_9.setTransform(149.1,-278.9,1,1,0,0,0,-0.4,0);

	this.instance_10 = new lib.hat11_mc();
	this.instance_10.setTransform(183.7,-214.8,1,1,0,0,0,-0.1,0);

	this.instance_11 = new lib.hat12_mc();
	this.instance_11.setTransform(185.2,-273,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(96.3,-266.7,209,86);
p.frameBounds = [rect, new cjs.Rectangle(174.5,-297,90,98), new cjs.Rectangle(189,-283,82,80), new cjs.Rectangle(76.6,-282.9,226,160), new cjs.Rectangle(88.3,-330.7,241,111), new cjs.Rectangle(106.8,-288.8,150,67), new cjs.Rectangle(185.3,-270,113,83), new cjs.Rectangle(79.2,-302.2,202,87), new cjs.Rectangle(103.5,-285.3,181,81), new cjs.Rectangle(109.6,-321.1,80,84), new cjs.Rectangle(69.3,-287.2,229,145), new cjs.Rectangle(89,-340.2,192,138), null];


(lib.hand_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hand_accessory1_mc();
	this.instance.setTransform(221.5,38);

	this.instance_1 = new lib.hand_accessory2_mc();
	this.instance_1.setTransform(291.1,109.1);

	this.instance_2 = new lib.hand_accessory3_mc();
	this.instance_2.setTransform(181.7,16.1);

	this.instance_3 = new lib.hand_accessory4_mc();
	this.instance_3.setTransform(221.6,34.2);

	this.instance_4 = new lib.hand_accessory5_mc();
	this.instance_4.setTransform(248.4,41.5);

	this.instance_5 = new lib.hand_accessory6_mc();
	this.instance_5.setTransform(275.6,42.9);

	this.instance_6 = new lib.hand_accessory7_mc();
	this.instance_6.setTransform(226.1,1.8);

	this.instance_7 = new lib.hand_accessory8_mc();
	this.instance_7.setTransform(160,32.4);

	this.instance_8 = new lib.hand_accessory9_mc();
	this.instance_8.setTransform(146.6,132);

	this.instance_9 = new lib.hand_accessory10_mc();
	this.instance_9.setTransform(142.7,-17.3);

	this.instance_10 = new lib.hand_accessory11_mc();
	this.instance_10.setTransform(121.3,-20,1,1,0,0,0,0,0.5);

	this.instance_11 = new lib.hand_accessory12_mc();
	this.instance_11.setTransform(210.2,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(116.1,-9.8,211,96);
p.frameBounds = [rect, new cjs.Rectangle(264.1,26.6,54,165), new cjs.Rectangle(118.1,-20.8,127,74), new cjs.Rectangle(102,-17.8,239,104), new cjs.Rectangle(216.7,-48.8,64,119), new cjs.Rectangle(173.6,-25.1,204,136), new cjs.Rectangle(130.3,-55.2,192,114), new cjs.Rectangle(94.8,-65.4,131,196), new cjs.Rectangle(84.8,74.5,124,115), new cjs.Rectangle(102.2,-62.1,81,90), new cjs.Rectangle(66,-98,111,156), new cjs.Rectangle(117.8,-26.3,185,108), null];


(lib.hair16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor16_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base16_mc();
	this.body_mc.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.3,-174,189,348);
p.frameBounds = [rect];


(lib.hair15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor15_mc();
	this.instance.setTransform(0,-0.4,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base15_mc();
	this.body_mc.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-136.7,124,273.1);
p.frameBounds = [rect];


(lib.hair14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor14_mc();
	this.instance.setTransform(0,0.3,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base14_mc();
	this.body_mc.setTransform(-0.3,0.7);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.7,-119,256,239);
p.frameBounds = [rect];


(lib.hair13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor13_mc();
	this.instance.setTransform(0,0.5,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base13_mc();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-153.4,-201,307,403);
p.frameBounds = [rect];


(lib.hair12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base12_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.6,-237.6,313.2,475.3);
p.frameBounds = [rect];


(lib.hair11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor11_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base11_mc();
	this.body_mc.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.4,-109.7,207,220);
p.frameBounds = [rect];


(lib.hair10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor10_mc();
	this.instance.setTransform(0,-0.4,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base10_mc();
	this.body_mc.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.7,-94.5,231.4,188.4);
p.frameBounds = [rect];


(lib.hair9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187.9,-87.7,376,173);
p.frameBounds = [rect];


(lib.hair8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-209.2,-105.2,419,210.4);
p.frameBounds = [rect];


(lib.hair7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base7_mc();
	this.body_mc.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.7,-120.5,315.4,241.1);
p.frameBounds = [rect];


(lib.hair6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor6_mc();
	this.instance.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base6_mc();
	this.body_mc.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.7,-108.7,216,217);
p.frameBounds = [rect];


(lib.hair5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor5_mc();
	this.instance.setTransform(0.2,0,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base5_mc();
	this.body_mc.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.8,-86.7,240.1,174);
p.frameBounds = [rect];


(lib.hair4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor4_mc();
	this.instance.setTransform(-0.2,0.5,1,1,0,0,0,-0.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base4_mc();
	this.body_mc.setTransform(-0.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.6,-63.2,247.1,127.4);
p.frameBounds = [rect];


(lib.hair3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_decor3_mc();
	this.instance.setTransform(0.5,-0.2,1,1,0,0,0,0.5,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base3_mc();
	this.body_mc.setTransform(0.5,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.7,-100.2,202.3,200.1);
p.frameBounds = [rect];


(lib.hair2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.7,-122.3,224,245.1);
p.frameBounds = [rect];


(lib.hair1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair_decor1_mc();
	this.instance.setTransform(-0.4,0.1,1,1,0,0,0,-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161,-117.9,321,236);
p.frameBounds = [rect];


(lib.hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.hair1_mc();
	this.body_1.setTransform(42.6,-168.7,1,1,0,0,0,-0.4,0.1);

	this.body_2 = new lib.hair2_mc();
	this.body_2.setTransform(26,-107.4,1,1,0,0,0,0,-0.2);

	this.body_3 = new lib.hair3_mc();
	this.body_3.setTransform(19.5,-80.9,1,1,0,0,0,0.5,-0.3);

	this.body_4 = new lib.hair4_mc();
	this.body_4.setTransform(7.4,-49.7,1,1,0,0,0,-0.2,0.7);

	this.body_5 = new lib.hair5_mc();
	this.body_5.setTransform(18.8,-73,1,1,0,0,0,0.2,0);

	this.body_6 = new lib.hair6_mc();
	this.body_6.setTransform(26,-94.1,1,1,0,0,0,0,-0.3);

	this.body_7 = new lib.hair7_mc();
	this.body_7.setTransform(11,-59.7);

	this.body_8 = new lib.hair8_mc();
	this.body_8.setTransform(16.5,-44.5);

	this.body_9 = new lib.hair9_mc();
	this.body_9.setTransform(45.8,-21.6);

	this.body_10 = new lib.hair10_mc();
	this.body_10.setTransform(23,-77.1,1,1,0,0,0,0,-0.4);

	this.body_11 = new lib.hair11_mc();
	this.body_11.setTransform(25.7,-90);

	this.body_12 = new lib.hair12_mc();
	this.body_12.setTransform(14.2,146);

	this.body_13 = new lib.hair13_mc();
	this.body_13.setTransform(13.9,63.2,1,1,0,0,0,0,0.5);

	this.body_14 = new lib.hair14_mc();
	this.body_14.setTransform(26,-95.4,1,1,0,0,0,0,0.3);

	this.body_15 = new lib.hair15_mc();
	this.body_15.setTransform(86.2,213.6,1,1,0,0,0,0,-0.4);

	this.body_16 = new lib.hair16_mc();
	this.body_16.setTransform(79.1,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[{t:this.body_13}]},1).to({state:[{t:this.body_14}]},1).to({state:[{t:this.body_15}]},1).to({state:[{t:this.body_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.1,-286.7,321,236);
p.frameBounds = [rect, new cjs.Rectangle(-85.7,-229.6,224,245.1), new cjs.Rectangle(-81.7,-180.8,202.3,200), new cjs.Rectangle(-116,-113.6,247.1,127.4), new cjs.Rectangle(-101.2,-159.7,240.1,174), new cjs.Rectangle(-81.7,-202.5,216,217), new cjs.Rectangle(-146.7,-180.2,315.4,241.1), new cjs.Rectangle(-192.7,-149.7,419,210.4), new cjs.Rectangle(-142.1,-109.3,376,173), new cjs.Rectangle(-92.7,-171.3,231.4,188.4), new cjs.Rectangle(-77.7,-199.7,207,220), new cjs.Rectangle(-142.4,-91.6,313.2,475.3), new cjs.Rectangle(-139.5,-138.3,307,403), new cjs.Rectangle(-101.7,-214.7,256,239), new cjs.Rectangle(24.3,77.2,124,273.1), new cjs.Rectangle(-15.3,-155.2,189,348)];


(lib.fringle16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor16_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base16_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.4,-73.9,181,148);
p.frameBounds = [rect];


(lib.fringle15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor15_mc();
	this.instance.setTransform(-0.1,-0.6,1,1,0,0,0,-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base15_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-66.5,216,132);
p.frameBounds = [rect];


(lib.fringle14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor14_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base14_mc();
	this.body_mc.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-83.6,183.1,167);
p.frameBounds = [rect];


(lib.fringle13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base13_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.4,-87,193,174.1);
p.frameBounds = [rect];


(lib.fringle12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor12_mc();
	this.instance.setTransform(0,0.5,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base12_mc();
	this.body_mc.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.7,-102.4,181.4,206);
p.frameBounds = [rect];


(lib.fringle11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor11_mc();
	this.instance.setTransform(0,0.7,1,1,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base11_mc();
	this.body_mc.setTransform(-0.3,1.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.9,-57.9,194,117.3);
p.frameBounds = [rect];


(lib.fringle10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base10_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.6,-65.3,179.1,131);
p.frameBounds = [rect];


(lib.fringle9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base9_mc();
	this.body_mc.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.7,-77.5,181,155);
p.frameBounds = [rect];


(lib.fringle8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor8_mc();
	this.instance.setTransform(0,0.3,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base8_mc();
	this.body_mc.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.7,-64.7,173.4,130);
p.frameBounds = [rect];


(lib.fringle7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor7_mc();
	this.instance.setTransform(-0.1,0.3,1,1,0,0,0,-0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base7_mc();
	this.body_mc.setTransform(-0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.5,-75.1,243.1,151);
p.frameBounds = [rect];


(lib.fringle6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor6_mc();
	this.instance.setTransform(0,0.7,1,1,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base6_mc();
	this.body_mc.setTransform(-0.3,0.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-76.9,180,155.4);
p.frameBounds = [rect];


(lib.fringle5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor5_mc();
	this.instance.setTransform(0.8,0,1,1,0,0,0,0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base5_mc();
	this.body_mc.setTransform(0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.9,-87.5,231.4,175.1);
p.frameBounds = [rect];


(lib.fringle4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor4_mc();
	this.instance.setTransform(-0.7,-0.1,1,1,0,0,0,-0.7,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base4_mc();
	this.body_mc.setTransform(0,1.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.7,-75.1,164,150.1);
p.frameBounds = [rect];


(lib.fringle3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor3_mc();
	this.instance.setTransform(0,-0.7,1,1,0,0,0,0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base3_mc();
	this.body_mc.setTransform(0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-71.9,172.2,143);
p.frameBounds = [rect];


(lib.fringle2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringle_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base2_mc();
	this.body_mc.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.9,-84.9,188.1,170);
p.frameBounds = [rect];


(lib.fringle1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle_decor1_mc();
	this.instance.setTransform(-0.8,0.4,1,1,0,0,0,-0.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringle_base1_mc();
	this.body_mc.setTransform(-0.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.4,-70.4,185.5,142);
p.frameBounds = [rect];


(lib.fringle_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.fringle1_mc();
	this.body_1.setTransform(-0.8,0.4,1,1,0,0,0,-0.8,0.4);

	this.body_2 = new lib.fringle2_mc();
	this.body_2.setTransform(14.1,-36.5);

	this.body_3 = new lib.fringle3_mc();
	this.body_3.setTransform(4.5,-29,1,1,0,0,0,0,-0.7);

	this.body_4 = new lib.fringle4_mc();
	this.body_4.setTransform(-11.2,-70.1,1,1,0,0,0,-0.7,-0.1);

	this.body_5 = new lib.fringle5_mc();
	this.body_5.setTransform(35.6,22.7,1,1,0,0,0,0.8,0);

	this.body_6 = new lib.fringle6_mc();
	this.body_6.setTransform(-1.9,12.4,1,1,0,0,0,0,0.7);

	this.body_7 = new lib.fringle7_mc();
	this.body_7.setTransform(-13.6,-29.1,1,1,0,0,0,-0.1,0.3);

	this.body_8 = new lib.fringle8_mc();
	this.body_8.setTransform(5.6,-9.2,1,1,0,0,0,0,0.3);

	this.body_9 = new lib.fringle9_mc();
	this.body_9.setTransform(2.6,8.3);

	this.body_10 = new lib.fringle10_mc();
	this.body_10.setTransform(-1.6,-1.5);

	this.body_11 = new lib.fringle11_mc();
	this.body_11.setTransform(-7.3,-11,1,1,0,0,0,0,0.7);

	this.body_12 = new lib.fringle12_mc();
	this.body_12.setTransform(7.1,28.3,1,1,0,0,0,0,0.5);

	this.body_13 = new lib.fringle13_mc();
	this.body_13.setTransform(-1.7,3.3);

	this.body_14 = new lib.fringle14_mc();
	this.body_14.setTransform(5.2,10.4);

	this.body_15 = new lib.fringle15_mc();
	this.body_15.setTransform(13.8,-29.8,1,1,0,0,0,-0.1,-0.5);

	this.body_16 = new lib.fringle16_mc();
	this.body_16.setTransform(1.2,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[{t:this.body_13}]},1).to({state:[{t:this.body_14}]},1).to({state:[{t:this.body_15}]},1).to({state:[{t:this.body_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.4,-70.4,185.5,142);
p.frameBounds = [rect, new cjs.Rectangle(-79.8,-121.5,188.1,170), new cjs.Rectangle(-81.6,-100.2,172.2,143), new cjs.Rectangle(-93.3,-145.1,164,150.1), new cjs.Rectangle(-80.1,-64.8,231.4,175.1), new cjs.Rectangle(-91.6,-65.3,180,155.4), new cjs.Rectangle(-135,-104.5,243.1,151), new cjs.Rectangle(-81.1,-74.2,173.4,130), new cjs.Rectangle(-88.1,-69.2,181,155), new cjs.Rectangle(-91.2,-66.8,179.2,131), new cjs.Rectangle(-104.2,-69.6,194,117.3), new cjs.Rectangle(-83.6,-74.6,181.4,206), new cjs.Rectangle(-98.1,-83.7,193,174.1), new cjs.Rectangle(-86.3,-73.2,183.1,167), new cjs.Rectangle(-94.2,-95.8,216,132), new cjs.Rectangle(-89.2,-71.1,181,148)];


(lib.face_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.face_accessory1_mc();
	this.instance.setTransform(166,17.1);

	this.instance_1 = new lib.face_accessory2_mc();
	this.instance_1.setTransform(119.5,40.3,1,1,0,0,0,0.3,-0.3);

	this.instance_2 = new lib.face_accessory3_mc();
	this.instance_2.setTransform(163,-8.1);

	this.instance_3 = new lib.face_accessory4_mc();
	this.instance_3.setTransform(180,26.7);

	this.instance_4 = new lib.face_accessory5_mc();
	this.instance_4.setTransform(165.8,18);

	this.instance_5 = new lib.face_accessory6_mc();
	this.instance_5.setTransform(167.3,-7.5);

	this.instance_6 = new lib.face_accessory7_mc();
	this.instance_6.setTransform(175.9,-17.9);

	this.instance_7 = new lib.face_accessory8_mc();
	this.instance_7.setTransform(181.9,-14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(96.2,-21.9,140,78);
p.frameBounds = [rect, new cjs.Rectangle(93,-6.1,144,55), new cjs.Rectangle(79.6,-63.7,167,111), new cjs.Rectangle(71.8,-41.3,216,136), new cjs.Rectangle(99.3,-10,133,56), new cjs.Rectangle(87.5,-47.8,181,87), new cjs.Rectangle(87.5,-55.7,177,76), new cjs.Rectangle(92,-47,180,64), null];


(lib.dress12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base12_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183.9,-121.8,368,244);
p.frameBounds = [rect];


(lib.dress11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor11_mc();
	this.instance.setTransform(0,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base11_mc();
	this.body_mc.setTransform(-0.6,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.8,-93.8,142,171);
p.frameBounds = [rect];


(lib.dress10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base10_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.1,-65.5,130.2,131.1);
p.frameBounds = [rect];


(lib.dress9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base9_mc();
	this.body_mc.setTransform(0,12.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-65.1,206,151);
p.frameBounds = [rect];


(lib.dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor8_mc();
	this.instance.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.4,-65.6,140,131.1);
p.frameBounds = [rect];


(lib.dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.7,-69.7,145.4,140);
p.frameBounds = [rect];


(lib.dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor6_mc();
	this.instance.setTransform(-0.1,-0.1,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base6_mc();
	this.body_mc.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-56.1,88,118);
p.frameBounds = [rect];


(lib.dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor5_mc();
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base5_mc();
	this.body_mc.setTransform(2.6,-14.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-47.3,76.3,94.1);
p.frameBounds = [rect];


(lib.dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.8,-46.6,112,93.3);
p.frameBounds = [rect];


(lib.dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-67.9,96,136);
p.frameBounds = [rect];


(lib.dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base2_mc();
	this.body_mc.setTransform(0.8,-22.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-86.5,137,173);
p.frameBounds = [rect];


(lib.dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dress_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-62.1,124,124.2);
p.frameBounds = [rect];


(lib.dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.dress1_mc();
	this.body_1.setTransform(171.8,-43.3);

	this.body_2 = new lib.dress2_mc();
	this.body_2.setTransform(165.8,-22.2);

	this.body_3 = new lib.dress3_mc();
	this.body_3.setTransform(167.1,-48.2);

	this.body_4 = new lib.dress4_mc();
	this.body_4.setTransform(176,-51.1);

	this.body_5 = new lib.dress5_mc();
	this.body_5.setTransform(178.2,-57.5,1,1,0,0,0,0.1,-0.1);

	this.body_6 = new lib.dress6_mc();
	this.body_6.setTransform(168.7,-52.2,1,1,0,0,0,-0.1,-0.1);

	this.body_7 = new lib.dress7_mc();
	this.body_7.setTransform(175.5,-37.5);

	this.body_8 = new lib.dress8_mc();
	this.body_8.setTransform(178.7,-52.1);

	this.body_9 = new lib.dress9_mc();
	this.body_9.setTransform(177.9,-43.1);

	this.body_10 = new lib.dress10_mc();
	this.body_10.setTransform(177.9,-21.7);

	this.body_11 = new lib.dress11_mc();
	this.body_11.setTransform(176,-17.7);

	this.body_12 = new lib.dress12_mc();
	this.body_12.setTransform(183.7,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(110,-105.4,124,124.2);
p.frameBounds = [rect, new cjs.Rectangle(97.5,-108.7,137,173), new cjs.Rectangle(119.3,-116.2,96,136), new cjs.Rectangle(120.1,-97.7,112,93.3), new cjs.Rectangle(140.1,-104.7,76.3,94.1), new cjs.Rectangle(124.8,-108.2,88,118), new cjs.Rectangle(102.8,-107.2,145.4,140), new cjs.Rectangle(109.3,-117.7,140,131.2), new cjs.Rectangle(75.6,-108.3,206,151), new cjs.Rectangle(112.8,-87.2,130.2,131.1), new cjs.Rectangle(105.1,-111.5,142,171), new cjs.Rectangle(-0.2,-128.3,368,244), null];


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
	this.instance.setTransform(-26,-41,0.867,0.867);

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
	this.instance.setTransform(-26,-41);

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

	// Слой 6
	this.instance = new lib.icon_category_3_img();
	this.instance.setTransform(-26,-38);

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

	// Слой 7
	this.instance = new lib.icon_category_1_img();
	this.instance.setTransform(13.5,-43,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.bottom12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base12_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.9,-54.4,160,109);
p.frameBounds = [rect];


(lib.bottom11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor11_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base11_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-78.4,101.1,157);
p.frameBounds = [rect];


(lib.bottom10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base10_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.2,-33.3,83,67);
p.frameBounds = [rect];


(lib.bottom9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.4,-54.3,173,109);
p.frameBounds = [rect];


(lib.bottom8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.7,-28.1,77.4,56.3);
p.frameBounds = [rect];


(lib.bottom7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.7,-28.1,77.4,56.3);
p.frameBounds = [rect];


(lib.bottom6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.7,-41.9,128.8,84.1);
p.frameBounds = [rect];


(lib.bottom5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor5_mc();
	this.instance.setTransform(0.5,0.1,1,1,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base5_mc();
	this.body_mc.setTransform(-0.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.1,-33.5,81,67.4);
p.frameBounds = [rect];


(lib.bottom4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-50.5,82.3,101.1);
p.frameBounds = [rect];


(lib.bottom3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base3_mc();
	this.body_mc.setTransform(2.9,-4.6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-46.3,88,93);
p.frameBounds = [rect];


(lib.bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor2_mc();
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base2_mc();
	this.body_mc.setTransform(1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.3,-61.7,91,124.1);
p.frameBounds = [rect];


(lib.bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bottom_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-34.6,81,69.3);
p.frameBounds = [rect];


(lib.bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.bottom1_mc();
	this.body_1.setTransform(166,-19.4);

	this.body_2 = new lib.bottom2_mc();
	this.body_2.setTransform(164.6,15.5);

	this.body_3 = new lib.bottom3_mc();
	this.body_3.setTransform(162,1.6);

	this.body_4 = new lib.bottom4_mc();
	this.body_4.setTransform(164.9,2.2);

	this.body_5 = new lib.bottom5_mc();
	this.body_5.setTransform(167.9,-21.6,1,1,0,0,0,0.5,0.1);

	this.body_6 = new lib.bottom6_mc();
	this.body_6.setTransform(175.3,-13.6);

	this.body_7 = new lib.bottom7_mc();
	this.body_7.setTransform(168.4,-19.4);

	this.body_8 = new lib.bottom8_mc();
	this.body_8.setTransform(168.4,-19.4);

	this.body_9 = new lib.bottom9_mc();
	this.body_9.setTransform(173.2,4.1);

	this.body_10 = new lib.bottom10_mc();
	this.body_10.setTransform(165,-16.5);

	this.body_11 = new lib.bottom11_mc();
	this.body_11.setTransform(173.3,23.2);

	this.body_12 = new lib.bottom12_mc();
	this.body_12.setTransform(172.7,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(125.8,-54,81,69.3);
p.frameBounds = [rect, new cjs.Rectangle(119.3,-46.3,91,124.1), new cjs.Rectangle(118.3,-44.8,88,93), new cjs.Rectangle(123.7,-48.3,82.3,101.1), new cjs.Rectangle(127.3,-55.3,81,67.4), new cjs.Rectangle(111.5,-55.5,128.8,84.1), rect=new cjs.Rectangle(129.7,-47.5,77.4,56.3), rect, new cjs.Rectangle(86.8,-50.2,173,109), new cjs.Rectangle(123.8,-49.8,83,67), new cjs.Rectangle(122.8,-55.3,101.1,157), new cjs.Rectangle(92.8,-49.5,160,109), null];


(lib.body_hero_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_decor1_mc();
	this.instance.setTransform(5.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.body_base1_mc();
	this.body_mc.setTransform(5.4,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.7,-207.3,212.3,415.3);
p.frameBounds = [rect];


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


(lib.shine_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_1_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-27.7,-26.6,55.1,55.1), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-26.5,-25.5,52.2,52.2), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-19.1,-18.3,37.2,37.2), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11,-10.6,21.3,21.3), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-7.9,-7.8,15.5,15.5), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_1_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


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


(lib.play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.shine_mc = new lib.shine_1_1_mc();
	this.shine_mc.setTransform(-26,-35);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).wait(1));

	// graph
	this.instance = new lib.play_img();
	this.instance.setTransform(-80,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65,160,130);
p.frameBounds = [rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AneKJQiFABheheQheheAAiEIAAqTQAAiEBeheQBehdCFAAIO9AAQCFAABdBdQBeBeABCEIAAKTQgBCEheBeQhdBeiFgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65,160,130);
p.frameBounds = [rect, rect, rect, rect];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AneKJQiFABheheQheheAAiEIAAqTQAAiEBeheQBehdCFAAIO9AAQCFAABdBdQBeBeABCEIAAKTQgBCEheBeQhdBeiFgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65,160,130);
p.frameBounds = [rect, rect, rect, rect];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AneKJQiFABheheQheheAAiEIAAqTQAAiEBeheQBehdCFAAIO9AAQCFAABdBdQBeBeABCEIAAKTQgBCEheBeQhdBeiFgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65,160,130);
p.frameBounds = [rect, rect, rect, rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_nav_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.89,alpha:1},20).to({scaleX:1,scaleY:0.89},20).to({scaleY:1,alpha:0.801},20).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.more_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_3_mc();
	this.instance.setTransform(75.5,44.6,1,1,0,0,0,17.4,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.81,scaleY:0.81,x:75.6,y:49.8},17).to({scaleX:1,scaleY:1,x:75.5,y:44.6},8).to({y:39.6},4).to({_off:true},1).wait(16));

	// animation
	this.instance_1 = new lib.more_games_5_mc();
	this.instance_1.setTransform(51.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.81,scaleY:0.81,x:56.4,y:28.2},17).to({scaleX:1,scaleY:1,x:51.7,y:17.7},8).to({y:14.7},4).to({_off:true},1).wait(16));

	// animation
	this.instance_2 = new lib.more_games_4_mc();
	this.instance_2.setTransform(76.1,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.81,scaleY:0.81},17).to({scaleX:1,scaleY:1},8).wait(4).to({_off:true},1).wait(16));

	// animation
	this.instance_3 = new lib.more_games_2_mc();
	this.instance_3.setTransform(59.1,82.7,0.903,0.903,-141.5,0,0,10.1,3.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({regX:10.2,regY:4,scaleX:1.67,scaleY:1.67,x:75.5,y:111.9},4).to({regX:10.4,scaleX:0.34,scaleY:0.34,x:80.8,y:129.4},13).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.more_games_2_mc();
	this.instance_4.setTransform(96.5,47.2,0.903,0.903,148.8,0,0,10.2,4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({scaleX:1.67,scaleY:1.67,x:129.6,y:41.9},4).to({regX:10.3,regY:3.8,scaleX:0.34,scaleY:0.34,x:147.9,y:43.2},13).to({_off:true},1).wait(1));

	// animation
	this.instance_5 = new lib.more_games_2_mc();
	this.instance_5.setTransform(49,62.9,0.903,0.903,-80.3,0,0,10.2,4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).to({scaleX:1.67,scaleY:1.67,x:31.4,y:91.4},4).to({scaleX:0.34,scaleY:0.34,x:18.6,y:104.5},13).to({_off:true},1).wait(3));

	// animation
	this.instance_6 = new lib.more_games_2_mc();
	this.instance_6.setTransform(98,78.6,0.903,0.903,-150,0,0,10.2,4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({regX:10.1,scaleX:1.67,scaleY:1.67,x:118.8,y:105.1},4).to({regX:10.2,scaleX:0.34,scaleY:0.34,x:126.5,y:121.7},13).to({_off:true},1).wait(3));

	// animation
	this.instance_7 = new lib.more_games_2_mc();
	this.instance_7.setTransform(67.5,5.2,0.903,0.903,8.5,0,0,10.1,3.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({_off:false},0).to({regX:10.2,regY:4,scaleX:1.67,scaleY:1.67,x:38.6,y:-12},4).to({regX:10.3,regY:3.9,scaleX:0.34,scaleY:0.34,x:25.3,y:-24.5},13).to({_off:true},1).wait(3));

	// animation
	this.instance_8 = new lib.more_games_2_mc();
	this.instance_8.setTransform(52.9,54.5,0.903,0.903,-61.2,0,0,10.2,4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({_off:false},0).to({scaleX:1.67,scaleY:1.67,x:26.8,y:75.7},4).to({regY:3.9,scaleX:0.34,scaleY:0.34,x:10.4,y:83.8},13).wait(1));

	// animation
	this.instance_9 = new lib.more_games_2_mc();
	this.instance_9.setTransform(86.1,17.3,0.903,0.903,69.7,0,0,10.2,4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({_off:false},0).to({scaleX:1.67,scaleY:1.67,x:87.2,y:-16.3},4).to({scaleX:0.34,scaleY:0.34,x:91.8,y:-34},13).wait(1));

	// animation
	this.instance_10 = new lib.more_games_2_mc();
	this.instance_10.setTransform(35.8,28.2,0.903,0.903,0,0,0,10.2,4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).to({scaleX:1.67,scaleY:1.67,x:4.7,y:15.5},4).to({scaleX:0.34,scaleY:0.34,x:-10.3,y:5.1},13).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-18.5,133.2,128.2);
p.frameBounds = [rect, new cjs.Rectangle(10.7,-17.8,131.7,126.7), new cjs.Rectangle(11.5,-17,130.2,125.2), new cjs.Rectangle(12.2,-16.3,128.6,123.8), new cjs.Rectangle(13,-15.6,127.1,122.3), new cjs.Rectangle(13.7,-14.8,125.6,120.8), new cjs.Rectangle(14.5,-14.1,124,119.3), new cjs.Rectangle(15.3,-13.3,122.5,117.9), new cjs.Rectangle(16,-12.6,121,116.4), new cjs.Rectangle(16.8,-11.9,119.4,114.9), new cjs.Rectangle(17.5,-11.1,117.9,113.5), new cjs.Rectangle(18.3,-10.4,116.4,112), new cjs.Rectangle(19.1,-9.7,114.9,110.5), new cjs.Rectangle(19.8,-8.9,113.3,109), new cjs.Rectangle(20.6,-8.2,111.8,107.6), new cjs.Rectangle(21.3,-7.4,110.3,106.1), new cjs.Rectangle(22.1,-6.7,108.7,104.6), new cjs.Rectangle(22.9,-6,107.2,103.1), new cjs.Rectangle(21.2,-7.5,110.5,106.3), new cjs.Rectangle(19.6,-9.1,113.7,109.4), new cjs.Rectangle(18,-10.7,117,112.5), new cjs.Rectangle(16.4,-12.2,120.2,115.7), new cjs.Rectangle(14.8,-13.8,123.5,118.8), new cjs.Rectangle(13.2,-15.3,126.7,121.9), new cjs.Rectangle(11.6,-16.9,130,125), rect=new cjs.Rectangle(10,-18.5,133.2,128.2), rect, new cjs.Rectangle(1.4,-24.7,141.8,142.3), new cjs.Rectangle(-9,-32.2,152.7,160.3), new cjs.Rectangle(-19.6,-39.9,172.3,178.3), new cjs.Rectangle(-19.2,-39,170.3,176.6), new cjs.Rectangle(-18.8,-38.3,182,184.5), new cjs.Rectangle(-18.5,-47.6,181,193.2), new cjs.Rectangle(-18.2,-46.9,179.9,191.6), new cjs.Rectangle(-17.8,-46.4,179,190.4), new cjs.Rectangle(-17.5,-45.9,178,189.1), new cjs.Rectangle(-17.2,-45.3,177,187.8), new cjs.Rectangle(-16.9,-44.7,176.1,186.4), new cjs.Rectangle(-16.5,-44.2,175.1,185.1), new cjs.Rectangle(-16.2,-43.6,174.2,183.8), new cjs.Rectangle(-15.9,-43.1,173.2,182.5), new cjs.Rectangle(-15.5,-42.5,172.1,181.2), new cjs.Rectangle(-15.3,-41.9,171.3,179.8), new cjs.Rectangle(2,-41.4,153.3,178.6), new cjs.Rectangle(2.9,-40.9,151.8,177.4), new cjs.Rectangle(3.7,-40.4,94.6,131.1)];


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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AneKJQiFABheheQheheAAiEIAAqTQAAiEBeheQBehdCFAAIO9AAQCFAABdBdQBeBeABCEIAAKTQgBCEheBeQhdBeiFgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65,160,130);
p.frameBounds = [rect, rect, rect, rect];


(lib.done_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.shine_mc = new lib.shine_1_1_mc();
	this.shine_mc.setTransform(-26,-35);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).wait(1));

	// graph
	this.instance = new lib.done_img();
	this.instance.setTransform(-80,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65,160,130);
p.frameBounds = [rect];


(lib.done_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.done_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AneKJQiFABheheQheheAAiEIAAqTQAAiEBeheQBehdCFAAIO9AAQCFAABdBdQBeBeABCEIAAKTQgBCEheBeQhdBeiFgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65,160,130);
p.frameBounds = [rect, rect, rect, rect];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AsLErQh4AAAAh3IAAlnQAAh3B4AAIYXAAQB4AAAAB3IAAFnQAAB3h4AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-30,180,60);
p.frameBounds = [rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,-51,1200,651);
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


(lib.subcategory_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_13_img();
	this.instance.setTransform(-17,-27,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 7
	this.instance = new lib.icon_subcategory_12_img();
	this.instance.setTransform(-25,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 7
	this.instance = new lib.icon_subcategory_11_img();
	this.instance.setTransform(40.4,-7.5,0.917,0.917,0,45,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 7
	this.instance = new lib.icon_subcategory_10_img();
	this.instance.setTransform(44,-18,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 7
	this.instance = new lib.icon_subcategory_9_img();
	this.instance.setTransform(-18.3,-25.9,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_8_img();
	this.instance.setTransform(-18,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_7_img();
	this.instance.setTransform(-21,-27,0.896,0.896);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_6_img();
	this.instance.setTransform(-15,-25,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_5_img();
	this.instance.setTransform(34,-27,0.833,0.833,0,0,180);

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
	this.instance = new lib.icon_subcategory_4_img();
	this.instance.setTransform(-15,-19);

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
	this.instance = new lib.icon_subcategory_3_img();
	this.instance.setTransform(-18,-17);

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
	this.instance = new lib.icon_subcategory_2_img();
	this.instance.setTransform(39,-21,1,1,0,0,180);

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
	this.instance = new lib.icon_subcategory_1_img();
	this.instance.setTransform(23.5,-30,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.panel_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// options
	this.bg_4 = new lib.icon_back4_mc();
	this.bg_4.setTransform(98,98);

	this.bg_3 = new lib.icon_back3_mc();
	this.bg_3.setTransform(-98,98);

	this.bg_2 = new lib.icon_back2_mc();
	this.bg_2.setTransform(98,-98);

	this.bg_1 = new lib.icon_back1_mc();
	this.bg_1.setTransform(-98,-98);

	this.bg_8 = new lib.icon_back8_mc();
	this.bg_8.setTransform(98,98);

	this.bg_7 = new lib.icon_back7_mc();
	this.bg_7.setTransform(-98,98);

	this.bg_6 = new lib.icon_back6_mc();
	this.bg_6.setTransform(98,-98);

	this.bg_5 = new lib.icon_back5_mc();
	this.bg_5.setTransform(-98,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_1},{t:this.bg_2},{t:this.bg_3},{t:this.bg_4}]}).to({state:[{t:this.bg_5},{t:this.bg_6},{t:this.bg_7},{t:this.bg_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect];


(lib.panel_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.jewelry_0 = new lib.jewelry_0_mc();
	this.jewelry_0.setTransform(-208,0);

	this.timeline.addTween(cjs.Tween.get(this.jewelry_0).wait(2));

	// options
	this.jewelry_4 = new lib.icon_glasses4_mc();
	this.jewelry_4.setTransform(98,98);

	this.jewelry_3 = new lib.icon_glasses3_mc();
	this.jewelry_3.setTransform(-98,98);

	this.jewelry_2 = new lib.icon_glasses2_mc();
	this.jewelry_2.setTransform(98,-98);

	this.jewelry_1 = new lib.icon_glasses1_mc();
	this.jewelry_1.setTransform(-98,-98);

	this.jewelry_8 = new lib.icon_glasses8_mc();
	this.jewelry_8.setTransform(98,98);

	this.jewelry_7 = new lib.icon_glasses7_mc();
	this.jewelry_7.setTransform(-98,98);

	this.jewelry_6 = new lib.icon_glasses6_mc();
	this.jewelry_6.setTransform(98,-98);

	this.jewelry_5 = new lib.icon_glasses5_mc();
	this.jewelry_5.setTransform(-98,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jewelry_1},{t:this.jewelry_2},{t:this.jewelry_3},{t:this.jewelry_4}]}).to({state:[{t:this.jewelry_5},{t:this.jewelry_6},{t:this.jewelry_7},{t:this.jewelry_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-228,-215,443,590);
p.frameBounds = [rect, rect];


(lib.panel_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-208,0);

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(3));

	// options
	this.accessory_4 = new lib.icon_accessory_hand4_mc();
	this.accessory_4.setTransform(98,98);

	this.accessory_3 = new lib.icon_accessory_hand3_mc();
	this.accessory_3.setTransform(-98,98);

	this.accessory_2 = new lib.icon_accessory_hand2_mc();
	this.accessory_2.setTransform(98,-98);

	this.accessory_1 = new lib.icon_accessory_hand1_mc();
	this.accessory_1.setTransform(-98,-98);

	this.accessory_8 = new lib.icon_accessory_hand8_mc();
	this.accessory_8.setTransform(98,98);

	this.accessory_7 = new lib.icon_accessory_hand7_mc();
	this.accessory_7.setTransform(-98,98);

	this.accessory_6 = new lib.icon_accessory_hand6_mc();
	this.accessory_6.setTransform(98,-98);

	this.accessory_5 = new lib.icon_accessory_hand5_mc();
	this.accessory_5.setTransform(-98,-98);

	this.accessory_12 = new lib.icon_accessory_hand12_mc();
	this.accessory_12.setTransform(98,98);

	this.accessory_11 = new lib.icon_accessory_hand11_mc();
	this.accessory_11.setTransform(-98,98);

	this.accessory_10 = new lib.icon_accessory_hand10_mc();
	this.accessory_10.setTransform(98,-98);

	this.accessory_9 = new lib.icon_accessory_hand9_mc();
	this.accessory_9.setTransform(-98,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4}]}).to({state:[{t:this.accessory_5},{t:this.accessory_6},{t:this.accessory_7},{t:this.accessory_8}]},1).to({state:[{t:this.accessory_9},{t:this.accessory_10},{t:this.accessory_11},{t:this.accessory_12}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-228,-215,443,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-208,0);

	this.timeline.addTween(cjs.Tween.get(this.headdress_0).wait(3));

	// options
	this.headdress_4 = new lib.icon_accessory_head4_mc();
	this.headdress_4.setTransform(98,98);

	this.headdress_3 = new lib.icon_accessory_head3_mc();
	this.headdress_3.setTransform(-98,98);

	this.headdress_2 = new lib.icon_accessory_head2_mc();
	this.headdress_2.setTransform(98,-98);

	this.headdress_1 = new lib.icon_accessory_head1_mc();
	this.headdress_1.setTransform(-98,-98);

	this.headdress_8 = new lib.icon_accessory_head8_mc();
	this.headdress_8.setTransform(98,98);

	this.headdress_7 = new lib.icon_accessory_head7_mc();
	this.headdress_7.setTransform(-98,98);

	this.headdress_6 = new lib.icon_accessory_head6_mc();
	this.headdress_6.setTransform(98,-98);

	this.headdress_5 = new lib.icon_accessory_head5_mc();
	this.headdress_5.setTransform(-98,-98);

	this.headdress_12 = new lib.icon_accessory_head12_mc();
	this.headdress_12.setTransform(98,98);

	this.headdress_11 = new lib.icon_accessory_head11_mc();
	this.headdress_11.setTransform(-98,98);

	this.headdress_10 = new lib.icon_accessory_head10_mc();
	this.headdress_10.setTransform(98,-98);

	this.headdress_9 = new lib.icon_accessory_head9_mc();
	this.headdress_9.setTransform(-98,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4}]}).to({state:[{t:this.headdress_5},{t:this.headdress_6},{t:this.headdress_7},{t:this.headdress_8}]},1).to({state:[{t:this.headdress_9},{t:this.headdress_10},{t:this.headdress_11},{t:this.headdress_12}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-228,-215,443,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(-208,0);

	this.timeline.addTween(cjs.Tween.get(this.shoes_0).wait(4));

	// options
	this.shoes_4 = new lib.icon_shoes4_mc();
	this.shoes_4.setTransform(98,98);

	this.shoes_3 = new lib.icon_shoes3_mc();
	this.shoes_3.setTransform(-98,98);

	this.shoes_2 = new lib.icon_shoes2_mc();
	this.shoes_2.setTransform(98,-98);

	this.shoes_1 = new lib.icon_shoes1_mc();
	this.shoes_1.setTransform(-98,-98);

	this.shoes_8 = new lib.icon_shoes8_mc();
	this.shoes_8.setTransform(98,98);

	this.shoes_7 = new lib.icon_shoes7_mc();
	this.shoes_7.setTransform(-98,98);

	this.shoes_6 = new lib.icon_shoes6_mc();
	this.shoes_6.setTransform(98,-98);

	this.shoes_5 = new lib.icon_shoes5_mc();
	this.shoes_5.setTransform(-98,-98);

	this.shoes_12 = new lib.icon_shoes12_mc();
	this.shoes_12.setTransform(98,98);

	this.shoes_11 = new lib.icon_shoes11_mc();
	this.shoes_11.setTransform(-98,98);

	this.shoes_10 = new lib.icon_shoes10_mc();
	this.shoes_10.setTransform(98,-98);

	this.shoes_9 = new lib.icon_shoes9_mc();
	this.shoes_9.setTransform(-98,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4}]}).to({state:[{t:this.shoes_5},{t:this.shoes_6},{t:this.shoes_7},{t:this.shoes_8}]},1).to({state:[{t:this.shoes_9},{t:this.shoes_10},{t:this.shoes_11},{t:this.shoes_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_shoes = new lib.color_picker_1_mc();
	this.color_shoes.setTransform(-180,-180);
	this.color_shoes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_shoes).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-228,-215,443,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.top_4 = new lib.icon_top4_mc();
	this.top_4.setTransform(98,98);

	this.top_3 = new lib.icon_top3_mc();
	this.top_3.setTransform(-98,98);

	this.top_2 = new lib.icon_top2_mc();
	this.top_2.setTransform(98,-98);

	this.top_1 = new lib.icon_top1_mc();
	this.top_1.setTransform(-98,-98);

	this.top_8 = new lib.icon_top8_mc();
	this.top_8.setTransform(98,98);

	this.top_7 = new lib.icon_top7_mc();
	this.top_7.setTransform(-98,98);

	this.top_6 = new lib.icon_top6_mc();
	this.top_6.setTransform(98,-98);

	this.top_5 = new lib.icon_top5_mc();
	this.top_5.setTransform(-98,-98);

	this.top_12 = new lib.icon_top12_mc();
	this.top_12.setTransform(98,98);

	this.top_11 = new lib.icon_top11_mc();
	this.top_11.setTransform(-98,98);

	this.top_10 = new lib.icon_top10_mc();
	this.top_10.setTransform(98,-98);

	this.top_9 = new lib.icon_top9_mc();
	this.top_9.setTransform(-98,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.top_1},{t:this.top_2},{t:this.top_3},{t:this.top_4}]}).to({state:[{t:this.top_5},{t:this.top_6},{t:this.top_7},{t:this.top_8}]},1).to({state:[{t:this.top_9},{t:this.top_10},{t:this.top_11},{t:this.top_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_top = new lib.color_picker_1_mc();
	this.color_top.setTransform(-180,-180);
	this.color_top._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_top).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// options
	this.mouth_4 = new lib.icon_mouth4_mc();
	this.mouth_4.setTransform(98,98);

	this.mouth_3 = new lib.icon_mouth3_mc();
	this.mouth_3.setTransform(-98,98);

	this.mouth_2 = new lib.icon_mouth2_mc();
	this.mouth_2.setTransform(98,-98);

	this.mouth_1 = new lib.icon_mouth1_mc();
	this.mouth_1.setTransform(-98,-98);

	this.mouth_8 = new lib.icon_mouth8_mc();
	this.mouth_8.setTransform(98,98);

	this.mouth_7 = new lib.icon_mouth7_mc();
	this.mouth_7.setTransform(-98,98);

	this.mouth_6 = new lib.icon_mouth6_mc();
	this.mouth_6.setTransform(98,-98);

	this.mouth_5 = new lib.icon_mouth5_mc();
	this.mouth_5.setTransform(-98,-98);

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


(lib.icon_hair16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair16_mc();
	this.instance.setTransform(-2,0,0.5,0.5,0,0,0,-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair15_mc();
	this.instance.setTransform(-0.3,2.2,0.588,0.588,0,0,0,-0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair14_mc();
	this.instance.setTransform(1,-3,0.568,0.568,0,0,0,0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair13_mc();
	this.instance.setTransform(-2,2,0.4,0.4,0,0,0,-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair12_mc();
	this.instance.setTransform(-1,1,0.35,0.35,0,0,0,-0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair11_mc();
	this.instance.setTransform(0,0,0.666,0.666,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair10_mc();
	this.instance.setTransform(0,0,0.585,0.585,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair9_mc();
	this.instance.setTransform(-1,4,0.45,0.45,0,0,0,-0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair8_mc();
	this.instance.setTransform(0,1,0.4,0.4,0,0,0,-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair7_mc();
	this.instance.setTransform(0,3,0.5,0.5,0,0,0,-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair6_mc();
	this.instance.setTransform(-5,1.2,0.602,0.602,0,0,0,-0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair5_mc();
	this.instance.setTransform(-3,7.9,0.602,0.602,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair4_mc();
	this.instance.setTransform(0,3,0.648,0.648,0,0,0,-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair3_mc();
	this.instance.setTransform(-0.7,0.2,0.676,0.676,0,0,0,-0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair2_mc();
	this.instance.setTransform(-1.4,0,0.59,0.59,0,0,0,-0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hair1_mc();
	this.instance.setTransform(3,3,0.5,0.5,0,0,0,-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle16_mc();
	this.instance.setTransform(0,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle15_mc();
	this.instance.setTransform(4,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle14_mc();
	this.instance.setTransform(0,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle13_mc();
	this.instance.setTransform(0,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle12_mc();
	this.instance.setTransform(0,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle11_mc();
	this.instance.setTransform(0,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle10_mc();
	this.instance.setTransform(0,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle9_mc();
	this.instance.setTransform(0,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle8_mc();
	this.instance.setTransform(0,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle7_mc();
	this.instance.setTransform(0,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle6_mc();
	this.instance.setTransform(0,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle5_mc();
	this.instance.setTransform(5,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle4_mc();
	this.instance.setTransform(-5,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle3_mc();
	this.instance.setTransform(-5,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle2_mc();
	this.instance.setTransform(0,0.1,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fringle1_mc();
	this.instance.setTransform(0.4,7.4,0.7,0.7,0,0,0,-0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_eyes8_mc();
	this.instance.setTransform(8.1,0.4,1,1,0,0,0,4.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_eyes7_mc();
	this.instance.setTransform(6.1,-5.6,1,1,0,0,0,4.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_eyes6_mc();
	this.instance.setTransform(6.1,-0.6,1,1,0,0,0,4.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_eyes5_mc();
	this.instance.setTransform(5.1,-0.6,1,1,0,0,0,4.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_eyes4_mc();
	this.instance.setTransform(7.1,-4.6,1,1,0,0,0,4.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_eyes3_mc();
	this.instance.setTransform(0.1,-0.6,1,1,0,0,0,4.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_eyes2_mc();
	this.instance.setTransform(13.1,-2.6,1,1,0,0,0,4.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_eyes1_mc();
	this.instance.setTransform(0.1,-0.6,1,1,0,0,0,4.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress12_mc();
	this.instance.setTransform(0,3.3,0.516,0.516,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-92,190,184);
p.frameBounds = [rect];


(lib.icon_dress11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress11_mc();
	this.instance.setTransform(1.4,7,1,1,0,0,0,0,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184.6);
p.frameBounds = [rect];


(lib.icon_dress10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress10_mc();
	this.instance.setTransform(3,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress9_mc();
	this.instance.setTransform(1,3,0.8,0.8,0,0,0,0.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress8_mc();
	this.instance.setTransform(1.7,1.3,1,1,0,0,0,0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress7_mc();
	this.instance.setTransform(1,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress6_mc();
	this.instance.setTransform(-3.6,2.4,1,1,0,0,0,-0.1,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress5_mc();
	this.instance.setTransform(2.4,2.8,1,1,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress4_mc();
	this.instance.setTransform(2.4,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress3_mc();
	this.instance.setTransform(-1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress2_mc();
	this.instance.setTransform(-3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress1_mc();
	this.instance.setTransform(-0.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom12_mc();
	this.instance.setTransform(-0.6,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom11_mc();
	this.instance.setTransform(5.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom10_mc();
	this.instance.setTransform(-2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom9_mc();
	this.instance.setTransform(-0.6,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom8_mc();
	this.instance.setTransform(-0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom7_mc();
	this.instance.setTransform(-1.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom6_mc();
	this.instance.setTransform(-1,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom5_mc();
	this.instance.setTransform(0.5,3,1,1,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom4_mc();
	this.instance.setTransform(-2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom3_mc();
	this.instance.setTransform(-0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom2_mc();
	this.instance.setTransform(0.6,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bottom1_mc();
	this.instance.setTransform(-1.6,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.hero_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.body_hero_body_mc();
	this.body_1.setTransform(-5,0);

	this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.7,-207.3,212.3,415.3);
p.frameBounds = [rect];


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


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,76.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.6,-64,133.2,128.1);
p.frameBounds = [rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();
	this.instance.setTransform(0,0,0.964,0.963);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjMEggBQEhABDNDMQDODOAAEgQAAEhjODOQjNDMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.2,-61.7,128.5,123.5);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-70,-70,140,140)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,-51,1200,651);
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
	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(400,570);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(700,530);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(685,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instruction_btn},{t:this.moreGames_btn},{t:this.play_btn},{t:this.credits_btn}]}).wait(1));

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
	this.instance_3 = new lib.background_3_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,1038.7);
p.frameBounds = [rect];


(lib.panel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.dress_4 = new lib.icon_dress4_mc();
	this.dress_4.setTransform(98,98);

	this.dress_3 = new lib.icon_dress3_mc();
	this.dress_3.setTransform(-98,98);

	this.dress_2 = new lib.icon_dress2_mc();
	this.dress_2.setTransform(98,-98);

	this.dress_1 = new lib.icon_dress1_mc();
	this.dress_1.setTransform(-98,-98);

	this.dress_8 = new lib.icon_dress8_mc();
	this.dress_8.setTransform(98,98);

	this.dress_7 = new lib.icon_dress7_mc();
	this.dress_7.setTransform(-98,98);

	this.dress_6 = new lib.icon_dress6_mc();
	this.dress_6.setTransform(98,-98);

	this.dress_5 = new lib.icon_dress5_mc();
	this.dress_5.setTransform(-98,-98);

	this.dress_12 = new lib.icon_dress12_mc();
	this.dress_12.setTransform(98,98);

	this.dress_11 = new lib.icon_dress11_mc();
	this.dress_11.setTransform(-98,98);

	this.dress_10 = new lib.icon_dress10_mc();
	this.dress_10.setTransform(98,-98);

	this.dress_9 = new lib.icon_dress9_mc();
	this.dress_9.setTransform(-98,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1},{t:this.dress_2},{t:this.dress_3},{t:this.dress_4}]}).to({state:[{t:this.dress_5},{t:this.dress_6},{t:this.dress_7},{t:this.dress_8}]},1).to({state:[{t:this.dress_9},{t:this.dress_10},{t:this.dress_11},{t:this.dress_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_dress = new lib.color_picker_1_mc();
	this.color_dress.setTransform(-180,-180);
	this.color_dress._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_dress).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.bottom_8 = new lib.icon_bottom8_mc();
	this.bottom_8.setTransform(98,98);

	this.bottom_3 = new lib.icon_bottom3_mc();
	this.bottom_3.setTransform(-98,98);

	this.bottom_2 = new lib.icon_bottom2_mc();
	this.bottom_2.setTransform(98,-98);

	this.bottom_1 = new lib.icon_bottom1_mc();
	this.bottom_1.setTransform(-98,-98);

	this.bottom_4 = new lib.icon_bottom4_mc();
	this.bottom_4.setTransform(98,98);

	this.bottom_7 = new lib.icon_bottom7_mc();
	this.bottom_7.setTransform(-98,98);

	this.bottom_6 = new lib.icon_bottom6_mc();
	this.bottom_6.setTransform(98,-98);

	this.bottom_5 = new lib.icon_bottom5_mc();
	this.bottom_5.setTransform(-98,-98);

	this.bottom_12 = new lib.icon_bottom12_mc();
	this.bottom_12.setTransform(98,98);

	this.bottom_11 = new lib.icon_bottom11_mc();
	this.bottom_11.setTransform(-98,98);

	this.bottom_10 = new lib.icon_bottom10_mc();
	this.bottom_10.setTransform(98,-98);

	this.bottom_9 = new lib.icon_bottom9_mc();
	this.bottom_9.setTransform(-98,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom_1},{t:this.bottom_2},{t:this.bottom_3},{t:this.bottom_8}]}).to({state:[{t:this.bottom_5},{t:this.bottom_6},{t:this.bottom_7},{t:this.bottom_4}]},1).to({state:[{t:this.bottom_9},{t:this.bottom_10},{t:this.bottom_11},{t:this.bottom_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_bottom = new lib.color_picker_1_mc();
	this.color_bottom.setTransform(-180,-180);
	this.color_bottom._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_bottom).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(5));

	// options
	this.hair_4 = new lib.icon_hair4_mc();
	this.hair_4.setTransform(98,98);

	this.hair_3 = new lib.icon_hair3_mc();
	this.hair_3.setTransform(-98,98);

	this.hair_2 = new lib.icon_hair2_mc();
	this.hair_2.setTransform(98,-98);

	this.hair_1 = new lib.icon_hair1_mc();
	this.hair_1.setTransform(-98,-98);

	this.hair_8 = new lib.icon_hair8_mc();
	this.hair_8.setTransform(98,98);

	this.hair_7 = new lib.icon_hair7_mc();
	this.hair_7.setTransform(-98,98);

	this.hair_6 = new lib.icon_hair6_mc();
	this.hair_6.setTransform(98,-98);

	this.hair_5 = new lib.icon_hair5_mc();
	this.hair_5.setTransform(-98,-98);

	this.hair_12 = new lib.icon_hair12_mc();
	this.hair_12.setTransform(98,98);

	this.hair_11 = new lib.icon_hair11_mc();
	this.hair_11.setTransform(-98,98);

	this.hair_10 = new lib.icon_hair10_mc();
	this.hair_10.setTransform(98,-98);

	this.hair_9 = new lib.icon_hair9_mc();
	this.hair_9.setTransform(-98,-98);

	this.hair_16 = new lib.icon_hair16_mc();
	this.hair_16.setTransform(98,98);

	this.hair_15 = new lib.icon_hair15_mc();
	this.hair_15.setTransform(-98,98);

	this.hair_14 = new lib.icon_hair14_mc();
	this.hair_14.setTransform(98,-98);

	this.hair_13 = new lib.icon_hair13_mc();
	this.hair_13.setTransform(-98,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4}]}).to({state:[{t:this.hair_5},{t:this.hair_6},{t:this.hair_7},{t:this.hair_8}]},1).to({state:[{t:this.hair_9},{t:this.hair_10},{t:this.hair_11},{t:this.hair_12}]},1).to({state:[{t:this.hair_13},{t:this.hair_14},{t:this.hair_15},{t:this.hair_16}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_hair = new lib.color_picker_1_mc();
	this.color_hair.setTransform(-180,-180);
	this.color_hair._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_hair).wait(4).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.panel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(5));

	// options
	this.fringe_4 = new lib.icon_fringe4_mc();
	this.fringe_4.setTransform(98,98);

	this.fringe_3 = new lib.icon_fringe3_mc();
	this.fringe_3.setTransform(-98,98);

	this.fringe_2 = new lib.icon_fringe2_mc();
	this.fringe_2.setTransform(98,-98);

	this.fringe_1 = new lib.icon_fringe1_mc();
	this.fringe_1.setTransform(-98,-98);

	this.fringe_8 = new lib.icon_fringe8_mc();
	this.fringe_8.setTransform(98,98);

	this.fringe_7 = new lib.icon_fringe7_mc();
	this.fringe_7.setTransform(-98,98);

	this.fringe_6 = new lib.icon_fringe6_mc();
	this.fringe_6.setTransform(98,-98);

	this.fringe_5 = new lib.icon_fringe5_mc();
	this.fringe_5.setTransform(-98,-98);

	this.fringe_12 = new lib.icon_fringe12_mc();
	this.fringe_12.setTransform(98,98);

	this.fringe_11 = new lib.icon_fringe11_mc();
	this.fringe_11.setTransform(-98,98);

	this.fringe_10 = new lib.icon_fringe10_mc();
	this.fringe_10.setTransform(98,-98);

	this.fringe_9 = new lib.icon_fringe9_mc();
	this.fringe_9.setTransform(-98,-98);

	this.fringe_16 = new lib.icon_fringe16_mc();
	this.fringe_16.setTransform(98,98);

	this.fringe_15 = new lib.icon_fringe15_mc();
	this.fringe_15.setTransform(-98,98);

	this.fringe_14 = new lib.icon_fringe14_mc();
	this.fringe_14.setTransform(98,-98);

	this.fringe_13 = new lib.icon_fringe13_mc();
	this.fringe_13.setTransform(-98,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fringe_1},{t:this.fringe_2},{t:this.fringe_3},{t:this.fringe_4}]}).to({state:[{t:this.fringe_5},{t:this.fringe_6},{t:this.fringe_7},{t:this.fringe_8}]},1).to({state:[{t:this.fringe_9},{t:this.fringe_10},{t:this.fringe_11},{t:this.fringe_12}]},1).to({state:[{t:this.fringe_13},{t:this.fringe_14},{t:this.fringe_15},{t:this.fringe_16}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_fringe = new lib.color_picker_1_mc();
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
	this.eyes_4 = new lib.icon_eyes4_mc();
	this.eyes_4.setTransform(98,98);

	this.eyes_3 = new lib.icon_eyes3_mc();
	this.eyes_3.setTransform(-98,98);

	this.eyes_2 = new lib.icon_eyes2_mc();
	this.eyes_2.setTransform(98,-98);

	this.eyes_1 = new lib.icon_eyes1_mc();
	this.eyes_1.setTransform(-98,-98);

	this.eyes_8 = new lib.icon_eyes8_mc();
	this.eyes_8.setTransform(98,98);

	this.eyes_7 = new lib.icon_eyes7_mc();
	this.eyes_7.setTransform(-98,98);

	this.eyes_6 = new lib.icon_eyes6_mc();
	this.eyes_6.setTransform(98,-98);

	this.eyes_5 = new lib.icon_eyes5_mc();
	this.eyes_5.setTransform(-98,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4}]}).to({state:[{t:this.eyes_5},{t:this.eyes_6},{t:this.eyes_7},{t:this.eyes_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_eyes = new lib.color_picker_1_mc();
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

	// accessory
	this.accessory = new lib.hand_accessory_all_mc();
	this.accessory.setTransform(-11.5,66.3,1,1,0,0,0,221.5,38);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// jewelry
	this.jewelry = new lib.face_accessory_all_mc();
	this.jewelry.setTransform(-22.5,-93.6,1,1,0,0,0,166,16);

	this.timeline.addTween(cjs.Tween.get(this.jewelry).wait(1));

	// headdress
	this.headdress = new lib.hat_all_mc();
	this.headdress.setTransform(11.5,15.3,1,1,0,0,0,201,-68.3);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.fringle_all_mc();
	this.fringe.setTransform(-3.6,-141.9,1,1,0,0,0,-0.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyes
	this.eyes = new lib.hero_eyes_all_mc();
	this.eyes.setTransform(-27.4,-102.3);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// mouth
	this.mouth = new lib.mouth_all_mc();
	this.mouth.setTransform(-24.8,-55.9);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// top
	this.top = new lib.top_all_mc();
	this.top.setTransform(-17.7,5,1,1,0,0,0,171.8,-78.6);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.bottom_all_mc();
	this.bottom.setTransform(-25.7,56,1,1,0,0,0,163.8,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// dress
	this.dress = new lib.dress_all_mc();
	this.dress.setTransform(-17.7,40.2,1,1,0,0,0,171.8,-43.4);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.shoes_all_mc();
	this.shoes.setTransform(-13.5,158.6,1,1,0,0,0,176,75);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// skin
	this.skin = new lib.hero_body_mc();

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// hair
	this.hair = new lib.hair_all_mc();
	this.hair.setTransform(35.5,-307,1,1,0,0,0,38.3,-164.7);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.9,-429.1,321,643.4);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logo_1_mc();
	this.logo_btn.setTransform(100.1,50.2,0.526,0.526,0,0,0,0.1,0.4);
	this.logo_btn.cache(-192,-92,384,184);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(2));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(428,380);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({skewY:180,x:371},0).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-49.1,1200,649.1);
p.frameBounds = [rect, rect];


(lib.panels_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hero_1_category_1_subcategory_1:0,hero_1_category_1_subcategory_2:1,hero_1_category_1_subcategory_3:2,hero_1_category_2_subcategory_1:3,hero_1_category_2_subcategory_2:4,hero_1_category_3_subcategory_1:5,hero_1_category_3_subcategory_2:6,hero_1_category_3_subcategory_3:7,hero_1_category_3_subcategory_4:8,hero_1_category_4_subcategory_1:9,hero_1_category_4_subcategory_2:10,hero_1_category_4_subcategory_3:11,hero_1_category_5_subcategory_1:12});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.panel_1}]}).to({state:[{t:this.panel_2}]},1).to({state:[{t:this.panel_3}]},1).to({state:[{t:this.panel_4}]},1).to({state:[{t:this.panel_5}]},1).to({state:[{t:this.panel_6}]},1).to({state:[{t:this.panel_7}]},1).to({state:[{t:this.panel_8}]},1).to({state:[{t:this.panel_9}]},1).to({state:[{t:this.panel_10}]},1).to({state:[{t:this.panel_11}]},1).to({state:[{t:this.panel_12}]},1).to({state:[{t:this.panel_13}]},1).wait(1));

	// category
	this.category_5 = new lib.category_5_mc();
	this.category_5.setTransform(-160,-230);

	this.category_4 = new lib.category_4_mc();
	this.category_4.setTransform(-80,-230);

	this.category_3 = new lib.category_3_mc();
	this.category_3.setTransform(0,-230);

	this.category_2 = new lib.category_2_mc();
	this.category_2.setTransform(80,-230);

	this.category_1 = new lib.category_1_mc();
	this.category_1.setTransform(160,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.category_1},{t:this.category_2},{t:this.category_3},{t:this.category_4},{t:this.category_5}]}).wait(13));

	// subcategory
	this.subcategory_1_1 = new lib.subcategory_1_1_mc();
	this.subcategory_1_1.setTransform(240,-160);

	this.subcategory_3_1 = new lib.subcategory_3_1_mc();
	this.subcategory_3_1.setTransform(240,0);

	this.subcategory_2_1 = new lib.subcategory_2_1_mc();
	this.subcategory_2_1.setTransform(240,-80);

	this.subcategory_2_2 = new lib.subcategory_5_1_mc();
	this.subcategory_2_2.setTransform(240,-80);

	this.subcategory_1_2 = new lib.subcategory_4_1_mc();
	this.subcategory_1_2.setTransform(240,-160);

	this.subcategory_4_3 = new lib.subcategory_9_1_mc();
	this.subcategory_4_3.setTransform(240,80);

	this.subcategory_3_3 = new lib.subcategory_8_1_mc();
	this.subcategory_3_3.setTransform(240,0);

	this.subcategory_2_3 = new lib.subcategory_7_1_mc();
	this.subcategory_2_3.setTransform(240,-80);

	this.subcategory_1_3 = new lib.subcategory_6_1_mc();
	this.subcategory_1_3.setTransform(240,-160);

	this.subcategory_3_4 = new lib.subcategory_12_1_mc();
	this.subcategory_3_4.setTransform(240,0);

	this.subcategory_2_4 = new lib.subcategory_11_1_mc();
	this.subcategory_2_4.setTransform(240,-80);

	this.subcategory_1_4 = new lib.subcategory_10_1_mc();
	this.subcategory_1_4.setTransform(240,-160);

	this.subcategory_1_5 = new lib.subcategory_13_1_mc();
	this.subcategory_1_5.setTransform(240,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subcategory_2_1},{t:this.subcategory_3_1},{t:this.subcategory_1_1}]}).to({state:[{t:this.subcategory_1_2},{t:this.subcategory_2_2}]},3).to({state:[{t:this.subcategory_1_3},{t:this.subcategory_2_3},{t:this.subcategory_3_3},{t:this.subcategory_4_3}]},2).to({state:[{t:this.subcategory_1_4},{t:this.subcategory_2_4},{t:this.subcategory_3_4}]},4).to({state:[{t:this.subcategory_1_5}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-285,510,660);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-228,-285,523,660), rect, rect, rect, new cjs.Rectangle(-215,-285,510,660)];


(lib.ConstructorScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800,0.856,0.856);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(500,520);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.random_btn = new lib.random_btn();
	this.random_btn.setTransform(600,800);
	new cjs.ButtonHelper(this.random_btn, 0, 1, 2, false, new lib.random_btn(), 3);

	this.reset_btn = new lib.reset_btn();
	this.reset_btn.setTransform(200,800);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.reset_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760,-40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(620,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.reset_btn},{t:this.random_btn},{t:this.done_btn},{t:this.moreGames_btn}]}).wait(1));

	// panels
	this.panels_mc = new lib.panels_mc();
	this.panels_mc.setTransform(220,300);

	this.timeline.addTween(cjs.Tween.get(this.panels_mc).wait(1));

	// hero_1
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(650,320);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// platform
	this.instance = new lib.platform_mc();
	this.instance.setTransform(640,510);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-176.9,1200,1057);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(720,520);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(80,520);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(570,500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(230,500);

	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(400,1000,0.8,0.8);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.824,0.824);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(685,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.facebook_btn},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn}]}).wait(1));

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

	this.instance_9 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.redirect_mc}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,127,39.8);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-76.9,1200,1038.7), new cjs.Rectangle(-200,-176.9,1200,1057), new cjs.Rectangle(-200,-51,1200,651), new cjs.Rectangle(-200,-490,1200,1524.1), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(30.7,33.7,261.5,70.5), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1400,0,1200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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