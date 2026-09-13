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
		{src:"library/images/storage_atlas_12.png", id:"storage_atlas_12"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[506,0,600,600],[0,0,504,754]]},
		{name:"storage_atlas_5", frames: [[0,0,389,769],[391,0,310,787],[0,789,1200,200],[703,0,350,690]]},
		{name:"storage_atlas_6", frames: [[851,622,420,420],[0,557,449,489],[451,622,398,446],[402,0,441,469],[845,0,320,620],[0,0,400,555]]},
		{name:"storage_atlas_7", frames: [[0,0,420,420],[0,422,500,300],[422,0,424,377],[724,717,252,473],[848,0,352,393],[0,724,340,435],[978,717,257,445],[502,395,380,320],[342,724,380,320],[884,395,380,320]]},
		{name:"storage_atlas_8", frames: [[222,475,195,506],[0,475,220,473],[0,0,230,473],[0,983,396,245],[232,0,280,320],[983,644,280,320],[701,966,280,320],[514,0,280,320],[983,322,280,320],[701,644,280,320],[796,0,280,320],[419,322,280,320],[983,966,280,320],[701,322,280,320],[419,644,280,320],[419,966,280,320]]},
		{name:"storage_atlas_9", frames: [[865,1055,253,201],[177,234,293,255],[647,807,216,262],[492,1071,253,198],[1147,0,150,369],[1074,502,194,309],[324,506,248,256],[854,502,218,303],[177,0,334,232],[865,813,228,240],[0,952,224,244],[0,491,322,210],[0,0,175,473],[0,764,330,186],[1120,813,170,299],[574,506,244,226],[332,764,313,188],[226,954,264,196],[472,324,380,180],[995,0,150,500],[513,162,480,160],[513,0,480,160]]},
		{name:"storage_atlas_10", frames: [[471,203,190,210],[663,262,190,210],[0,847,190,210],[590,474,190,210],[206,228,190,210],[0,423,190,210],[384,627,190,210],[0,1059,190,210],[871,151,190,210],[192,440,190,210],[855,363,190,210],[398,415,190,210],[0,635,190,210],[1047,363,190,210],[192,652,190,210],[192,864,190,210],[192,1076,190,210],[384,839,190,210],[871,0,290,149],[471,0,226,201],[263,0,206,226],[1080,575,139,239],[585,916,152,240],[740,686,100,360],[842,575,100,360],[842,937,236,150],[1080,816,213,153],[585,1158,310,117],[944,575,130,224],[699,0,170,260],[384,1051,199,186],[576,686,162,228],[0,193,204,228],[0,0,261,191],[1163,0,119,361],[897,1089,180,180],[1079,1089,180,180]]},
		{name:"storage_atlas_11", frames: [[790,112,180,100],[1168,1004,80,100],[1136,1132,80,100],[559,756,120,120],[0,0,240,120],[537,1132,90,90],[424,508,210,110],[782,1178,161,48],[537,1224,161,48],[945,1186,161,47],[1108,1234,161,47],[700,1228,161,47],[863,1235,161,47],[1088,896,175,52],[991,1078,175,52],[959,1132,175,52],[991,1024,175,52],[782,1124,175,52],[1088,950,175,52],[826,533,160,60],[972,112,224,80],[189,281,184,106],[1000,0,161,95],[559,620,70,120],[814,772,87,117],[717,499,107,109],[701,1108,79,117],[0,886,80,228],[814,644,81,126],[391,620,78,245],[709,283,130,120],[1163,0,122,106],[709,405,163,92],[404,143,172,139],[201,975,88,147],[477,832,77,136],[717,644,89,108],[980,194,155,70],[1225,108,73,143],[242,0,160,167],[404,0,170,141],[120,885,79,232],[1225,465,71,113],[0,122,93,267],[95,122,92,266],[884,1002,105,89],[802,1002,80,120],[1149,756,103,81],[0,564,162,142],[375,284,111,101],[357,867,118,111],[988,533,122,63],[681,756,131,96],[0,708,118,176],[288,564,101,199],[1198,322,102,79],[1143,659,102,95],[100,1119,98,113],[164,564,122,179],[0,1116,98,171],[266,765,89,208],[471,620,86,210],[636,508,79,246],[120,745,144,138],[1068,322,128,80],[95,390,400,60],[874,405,360,32],[717,610,360,32],[826,499,360,32],[576,0,210,110],[1137,194,86,126],[980,266,86,125],[578,112,210,110],[802,900,100,100],[497,284,210,110],[788,0,210,110],[497,396,210,110],[0,452,210,110],[212,452,210,110],[841,283,120,120],[638,878,80,126],[291,980,80,126],[897,644,80,126],[373,980,80,126],[455,980,80,126],[979,644,80,126],[556,878,80,126],[720,854,80,126],[903,772,80,126],[1143,533,80,124],[537,1006,80,124],[1006,898,80,124],[373,1108,80,124],[291,1108,80,124],[985,772,80,124],[619,1006,80,124],[1061,644,80,124],[200,1124,80,124],[455,1108,80,124],[720,982,80,124],[1067,770,80,124],[578,224,400,57],[189,169,210,110],[874,439,400,24],[904,900,100,100]]},
		{name:"storage_atlas_12", frames: [[570,0,146,44],[718,0,146,44],[657,200,146,37],[570,46,146,44],[866,0,146,44],[321,196,146,37],[263,235,180,29],[81,233,180,29],[0,264,180,29],[445,265,180,29],[182,266,180,29],[469,234,180,29],[508,296,70,70],[436,296,70,70],[470,0,98,66],[983,200,33,75],[227,164,92,62],[469,222,40,8],[590,562,77,18],[168,515,79,20],[321,164,78,28],[832,379,74,16],[0,523,76,20],[146,562,70,21],[236,543,66,23],[78,544,66,23],[899,542,66,23],[831,540,66,23],[168,537,66,23],[639,537,66,23],[580,296,64,75],[607,420,58,55],[0,0,85,86],[391,0,77,86],[367,338,50,75],[967,542,50,27],[218,568,50,27],[780,303,50,27],[827,565,50,27],[879,567,50,27],[775,550,50,27],[0,391,92,38],[218,373,92,38],[832,397,92,38],[738,377,92,38],[607,380,92,38],[513,373,92,38],[931,571,71,19],[0,433,94,35],[280,466,88,30],[646,335,90,43],[738,335,94,40],[474,453,90,32],[401,88,56,106],[927,200,54,96],[196,0,58,121],[860,200,65,82],[87,0,107,68],[554,177,101,55],[511,222,40,8],[940,468,82,24],[249,522,81,19],[0,501,82,20],[461,487,92,25],[272,498,80,22],[759,476,85,30],[440,556,66,23],[372,556,66,23],[0,570,66,17],[669,575,66,17],[737,579,66,17],[270,578,66,17],[313,92,86,70],[651,239,72,71],[0,170,79,71],[657,177,45,15],[0,88,75,80],[313,0,76,90],[166,345,50,75],[0,589,43,25],[90,590,43,25],[45,590,43,25],[473,594,43,25],[976,592,43,25],[931,592,43,25],[218,413,92,38],[419,408,92,38],[926,397,92,38],[513,413,92,38],[166,297,92,46],[0,295,92,54],[508,573,71,19],[566,477,89,27],[0,470,90,29],[383,448,89,33],[189,453,89,33],[180,488,90,25],[94,367,54,64],[256,0,55,126],[171,123,54,108],[884,437,54,58],[846,497,43,41],[796,437,86,37],[933,520,77,20],[940,437,84,29],[639,515,78,20],[370,483,89,26],[646,312,75,21],[940,494,81,24],[522,548,66,23],[707,550,66,23],[626,594,66,16],[304,553,66,23],[0,545,66,23],[805,594,66,16],[630,92,72,83],[554,92,74,81],[915,298,68,57],[315,338,50,75],[141,585,43,26],[315,297,43,26],[338,581,43,26],[383,581,43,26],[428,581,43,26],[581,582,43,26],[0,351,92,38],[915,357,92,38],[419,368,92,38],[186,597,74,12],[0,243,79,19],[227,128,83,34],[68,569,71,19],[657,487,88,26],[92,470,86,30],[701,417,93,36],[96,433,91,35],[667,455,90,30],[260,297,53,74],[805,200,53,101],[725,239,53,94],[860,284,53,92],[312,415,69,49],[891,497,40,40],[802,46,40,152],[844,46,40,152],[886,46,40,152],[928,46,40,152],[970,46,40,152],[470,68,40,152],[512,68,40,152],[87,70,40,152],[718,46,40,152],[129,70,40,152],[760,46,40,152],[985,277,24,74],[834,303,24,74],[84,502,40,40],[126,502,40,40],[438,514,40,40],[789,508,40,40],[555,506,40,40],[747,508,40,40],[480,514,40,40],[597,506,40,40],[354,511,40,40],[396,511,40,40],[364,266,70,70],[94,295,70,70]]}
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
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
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
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
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



(lib.eye2_icon1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.eye2_icon2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eye2_icon3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eye2_icon4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eye2_icon5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eye2_icon6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.eye3_icon1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.eye3_icon2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.eye3_icon3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.eye3_icon4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.eye3_icon5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.eye3_icon6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eye_icon1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.eye_icon2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eye_icon3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eye_icon4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eye_icon5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eye_icon6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eyelashes_icon6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.free_games_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.h1d0 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.h2_d0 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.h3_d0 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hanger_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body1 = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body2 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_ears = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head0 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero1_socks1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_socks2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_socks3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wings1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wings2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body1 = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body2 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_back = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_ears = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head0 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.hero2_socks1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_socks2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_wings1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_wings2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body1 = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body2 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress2_back_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress3_back_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress6_back_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_ears = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe0 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero3_head = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_1 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.hero3_socks1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero3_socks2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero3_wings1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero3_wings2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h1l2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h1l3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h1l4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h1l5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h1l6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h2l3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h2l4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h2l6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i17_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_icon_h3i6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.next_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.next_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon11_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon12_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon13_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h1s2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h1s3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h1s4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h1s5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i13_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i14_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i21_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i22_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.shelf_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.shelf_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.shelf_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.stick_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
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
	this.instance.setTransform(-190,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160,380,320);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-190,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160,380,320);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-190,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-160,380,320);
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


(lib.wings_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_wings2_img();
	this.instance.setTransform(-127,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("AgCAAIAGAB");
	this.shape.setTransform(20.2,-76.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AmFQWInykxIjxllIk32eIOVGTIFcJ+IEjgGIFLnYIPgnlIk8UTInMJ5IlKBjg");
	this.shape_1.setTransform(3.4,-41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.6,-146.9,288,211.1);
p.frameBounds = [rect];


(lib.wings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_wings2_img();
	this.instance.setTransform(-137,-89.3,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AMkOjIskn2IuHGYIkLgYIj5rSIEprbIHkk5IJ+IZIMenUIG9GPICxMGIloKZg");
	this.shape.setTransform(0.1,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-97.4,284.1,190.9);
p.frameBounds = [rect];


(lib.wings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wings2_img();
	this.instance.setTransform(-162,-133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AslRWIr/tUIjOwMIEhnuIHygKIO/WGIRgy6IHlAkIDOI1IlXPfIswMAg");
	this.shape.setTransform(3.1,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174.8,-144.8,356,256.6);
p.frameBounds = [rect];


(lib.wings_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_wings1_img();
	this.instance.setTransform(-123,-80,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An9M2IlEh6Il+nYIh+n4IC1noIEyg9IM1MgIQeqNIExC0IAQHhIkGINInQE+g");
	this.shape.setTransform(0.1,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.2,-89.4,268.5,165.3);
p.frameBounds = [rect];


(lib.wings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_wings1_img();
	this.instance.setTransform(-148,-91,0.739,0.739);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AApIfIsqGFImmjtIlbqvIBgpdIGWlmIFhACILkNyIMWtMIHXCbIDDD1IAaInIiEGwInNG7IlfAtg");
	this.shape.setTransform(-2.3,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.2,-96.7,307.9,191.3);
p.frameBounds = [rect];


(lib.wings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wings1_img();
	this.instance.setTransform(-153,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuTH6InIlNIkntRIaXG1IZtiWIlJLMIolFeg");
	this.shape.setTransform(2.2,-20.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-164.4,-88.4,333.4,135.5);
p.frameBounds = [rect];


(lib.wardrobe_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_0_img();
	this.instance.setTransform(-200,-278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-278,400,555);
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


(lib.stick_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stick_0_img();
	this.instance.setTransform(-200,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-12,400,24);
p.frameBounds = [rect];


(lib.shoes_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes_6_img();
	this.instance.setTransform(-26.5,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjhIJIhwkcICUsMIHZgIIA2L1IkHFag");
	this.shape.setTransform(-1.2,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-58.1,67.6,110.5);
p.frameBounds = [rect];


(lib.shoes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes_6_img();
	this.instance.setTransform(-27,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlaDLIB5r0IHgAAIBcKhIi7FxIjwBBg");
	this.shape.setTransform(-2.6,-19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.3,-75.3,69.4,111);
p.frameBounds = [rect];


(lib.shoes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes6_img();
	this.instance.setTransform(-29,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlfHaIg2ybIMrAAIg2SrImbDYg");
	this.shape.setTransform(1.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-68.5,81.3,141.3);
p.frameBounds = [rect];


(lib.shoes_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes_5_img();
	this.instance.setTransform(-26.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AloGcIA+tVICbhwIGvgHIBJCrIgMKoIkED7IjRATg");
	this.shape.setTransform(-0.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.6,-55.2,72.3,112.3);
p.frameBounds = [rect];


(lib.shoes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes_5_img();
	this.instance.setTransform(-27,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlfFhIAnvIIJugFIAqNtIkdFYIi4AUg");
	this.shape.setTransform(-1.9,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-63.1,70.6,124.3);
p.frameBounds = [rect];


(lib.shoes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes5_img();
	this.instance.setTransform(-40.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkXK9IkH1wIQ9gQIj1WHg");
	this.shape.setTransform(3.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.2,-70.3,108.7,141.8);
p.frameBounds = [rect];


(lib.shoes_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes_4_img();
	this.instance.setTransform(-43,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlwP2IiI8kIEjlEIHeAbIDwEDIjyarIkPERIiTALg");
	this.shape.setTransform(0.4,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.1,-114.8,101,227.9);
p.frameBounds = [rect];


(lib.shoes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes_4_img();
	this.instance.setTransform(-27.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlfGlIAdwuIIQg3ICSCDIgVPCIkyE3IilAFg");
	this.shape.setTransform(-0.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.2,-70.1,70.6,141.1);
p.frameBounds = [rect];


(lib.shoes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes4_img();
	this.instance.setTransform(-27,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmQFEIBOuGIKYgHIA7NyIj2ELIkBAWg");
	this.shape.setTransform(0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-58.9,80.3,117.3);
p.frameBounds = [rect];


(lib.shoes_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes_3_img();
	this.instance.setTransform(-44.5,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al3OrIiF9JICnjBILuAhIBkCpIkYcVIjgDGIjHAag");
	this.shape.setTransform(-0.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.8,-111.6,101.9,224.1);
p.frameBounds = [rect];


(lib.shoes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes_3_img();
	this.instance.setTransform(-35.5,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlEGSIiNvOIOjiBIhlPhIk3F9IiPAdg");
	this.shape.setTransform(-1.6,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.3,-71.3,93.4,140.6);
p.frameBounds = [rect];


(lib.shoes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes3_img();
	this.instance.setTransform(-40,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlpQjIhv60ICNoqIMkAKMgAnAgUIjEDJIk4CQg");
	this.shape.setTransform(-3,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-118.7,94.8,242.6);
p.frameBounds = [rect];


(lib.shoes_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes_2_img();
	this.instance.setTransform(-26.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai4JHIijjYIB3u4IHvAFIBRNSIkJE8g");
	this.shape.setTransform(-0.1,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-59.8,69.8,117.3);
p.frameBounds = [rect];


(lib.shoes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes_2_img();
	this.instance.setTransform(-39.5,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmRP7MgBgghVIHFjHIIeEbIjTedIl5GLg");
	this.shape.setTransform(2.2,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-133.4,99.6,262.9);
p.frameBounds = [rect];


(lib.shoes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes2_img();
	this.instance.setTransform(-39.5,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai5KcIkCp8IBwnpIH4jUID6CsIAVMvIkZFgg");
	this.shape.setTransform(-3.5,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.9,-70.6,88.9,134.1);
p.frameBounds = [rect];


(lib.shoes_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes_1();
	this.instance.setTransform(-26.5,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiaHqIi2jhICRr1IGqAFIBmK0IkoEgg");
	this.shape.setTransform(-0.2,-4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.9,-54.2,67.5,98.7);
p.frameBounds = [rect];


(lib.shoes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes_1_img();
	this.instance.setTransform(-27,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlQEYICgs5IFFgDIC8MGIj1FCIjeABg");
	this.shape.setTransform(-0.3,-18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-73,67.5,109.9);
p.frameBounds = [rect];


(lib.shoes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes1_img();
	this.instance.setTransform(-28,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al0HWIgwxjINJAKIgYPxIkWEcIjAAEg");
	this.shape.setTransform(-0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-65.3,84.4,130.9);
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
	this.instance.setTransform(-200,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-29,400,57);
p.frameBounds = [rect];


(lib.shadows_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i8_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i3_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i22_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i4_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s3_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i13_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i13_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i22_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i14_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i14_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s5_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s2_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s2_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i21_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s4_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i4_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s4_img();
	this.instance.setTransform(-36,-55.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
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
	this.instance = new lib.lipstick_icon_h3i17_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i1_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l3_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l2_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l5_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h3i17_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l3_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l2_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l4_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h1l4_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_icon_h2l6_img();
	this.instance.setTransform(-14,-53.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
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


(lib.hero3_wings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_wings1_img();

	this.instance_1 = new lib.hero3_wings2_img();
	this.instance_1.setTransform(25,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,313,188);
p.frameBounds = [rect, new cjs.Rectangle(25,-40,264,196), null];


(lib.hero3_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_top1_img();
	this.instance.setTransform(134.1,-80.3);

	this.instance_1 = new lib.hero3_top2_img();
	this.instance_1.setTransform(97,-116.6);

	this.instance_2 = new lib.hero3_top3_img();
	this.instance_2.setTransform(106.3,-104.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(134.1,-80.3,69,49);
p.frameBounds = [rect, new cjs.Rectangle(97,-116.6,144,138), new cjs.Rectangle(106.3,-104.8,128,80), null];


(lib.hero3_socks_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqweWMAAAg8rIVhAAMAAAA8rgAmDsVQAFAMAGAAQAHAAAGgNQAHgQAAgZIgCgaQgCgRgCgGIgBgDIhEjVIgWg6QARgHAbgDQAlgEAQgHIASgJIAKgHQADgCAHgKQAKgTAAgRQABgHgEgJQgEgLgGAAQgEAAgIAEIgWAOQgQAKgaABQgZABgUgNIgRgMIhVBSIAZC2IAPA7QAEASABAOIAAAGQAAAKgBAJIABAEIBdBKQAEAAACgGIACgGIALAag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-5.8,y:1.4}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// graph
	this.instance = new lib.hero3_socks1_img();
	this.instance.setTransform(-61.5,-187.3);

	this.instance_1 = new lib.hero3_socks2_img();
	this.instance_1.setTransform(-40.8,-72.5);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.5,-187.3,119,361);
p.frameBounds = [rect, new cjs.Rectangle(-40.8,-72.5,79,246), null];


(lib.hero3_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_shoes_1();

	this.instance_1 = new lib.hero3_shoes_2_img();
	this.instance_1.setTransform(-1.3,-22.3);

	this.instance_2 = new lib.hero3_shoes_3_img();
	this.instance_2.setTransform(-13.2,-129);

	this.instance_3 = new lib.hero3_shoes_4_img();
	this.instance_3.setTransform(-14,-131.6);

	this.instance_4 = new lib.hero3_shoes_5_img();
	this.instance_4.setTransform(-1.3,-10.7);

	this.instance_5 = new lib.hero3_shoes_6_img();
	this.instance_5.setTransform(-1.3,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,53,74);
p.frameBounds = [rect, new cjs.Rectangle(-1.3,-22.3,53,101), new cjs.Rectangle(-13.2,-129,89,208), new cjs.Rectangle(-14,-131.6,86,210), new cjs.Rectangle(-1.3,-10.7,53,94), new cjs.Rectangle(-1.3,-13,53,92), null];


(lib.hero3_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_shadows1_img();
	this.instance.setTransform(-35.4,-9.6);

	this.instance_1 = new lib.hero3_shadows2_img();
	this.instance_1.setTransform(-42.7,-14.4);

	this.instance_2 = new lib.hero3_shadows3_img();
	this.instance_2.setTransform(-42,-16.5);

	this.instance_3 = new lib.hero3_shadows4_img();
	this.instance_3.setTransform(-44.6,-20.5);

	this.instance_4 = new lib.hero3_shadows5_img();
	this.instance_4.setTransform(-42.9,-21.1);

	this.instance_5 = new lib.hero3_shadows6_img();
	this.instance_5.setTransform(-44.5,-18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.4,-9.6,71,19);
p.frameBounds = [rect, new cjs.Rectangle(-42.7,-14.4,88,26), new cjs.Rectangle(-42,-16.5,86,30), new cjs.Rectangle(-44.6,-20.5,93,36), new cjs.Rectangle(-42.9,-21.1,91,35), new cjs.Rectangle(-44.5,-18.3,90,30), null];


(lib.hero3_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_rouge1_img();
	this.instance.setTransform(-45.8,-18.8);

	this.instance_1 = new lib.hero3_rouge2_img();
	this.instance_1.setTransform(-45.8,-18.8);

	this.instance_2 = new lib.hero3_rouge3_img();
	this.instance_2.setTransform(-45.8,-18.8);

	this.instance_3 = new lib.hero3_rouge4_img();
	this.instance_3.setTransform(-38.5,-5.1);

	this.instance_4 = new lib.hero3_rouge5_img();
	this.instance_4.setTransform(-40.1,-8.9);

	this.instance_5 = new lib.hero3_rouge6_img();
	this.instance_5.setTransform(-41.5,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-18.8,92,38);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-38.5,-5.1,74,12), new cjs.Rectangle(-40.1,-8.9,79,19), new cjs.Rectangle(-41.5,-11,83,34), null];


(lib.hero3_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_lips1_img();
	this.instance.setTransform(-21.5,-13.2);

	this.instance_1 = new lib.hero3_lips2_img();
	this.instance_1.setTransform(-21.5,-13.2);

	this.instance_2 = new lib.hero3_lips3_img();
	this.instance_2.setTransform(-21.5,-13.2);

	this.instance_3 = new lib.hero3_lips4_img();
	this.instance_3.setTransform(-21.5,-13.2);

	this.instance_4 = new lib.hero3_lips5_img();
	this.instance_4.setTransform(-21.5,-13.2);

	this.instance_5 = new lib.hero3_lips6_img();
	this.instance_5.setTransform(-21.5,-13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-13.2,43,26);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_hair1_img();
	this.instance.setTransform(-52.5,-41.2);

	this.instance_1 = new lib.hero3_hair2_img();
	this.instance_1.setTransform(-49.7,-61.5);

	this.instance_2 = new lib.hero3_hair3_img();
	this.instance_2.setTransform(-45.7,-70.2);

	this.instance_3 = new lib.hero3_hair4_img();
	this.instance_3.setTransform(-56.6,-53.3);

	this.instance_4 = new lib.hero3_hair6_img();
	this.instance_4.setTransform(-45.2,-40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-41.2,102,79);
p.frameBounds = [rect, new cjs.Rectangle(-49.7,-61.5,102,95), new cjs.Rectangle(-45.7,-70.2,98,113), new cjs.Rectangle(-56.6,-53.3,122,179), null, new cjs.Rectangle(-45.2,-40.7,98,171)];


(lib.hero3_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_fringe1_img();
	this.instance.setTransform(-65.3,-47.8);

	this.instance_1 = new lib.hero3_fringe2_img();
	this.instance_1.setTransform(-35.1,-48.2);

	this.instance_2 = new lib.hero3_fringe3_img();
	this.instance_2.setTransform(-35.6,-51.1);

	this.instance_3 = new lib.hero3_fringe4_img();
	this.instance_3.setTransform(-31.7,-50.3);

	this.instance_4 = new lib.hero3_fringe5_img();
	this.instance_4.setTransform(-57.3,-51.1);

	this.instance_5 = new lib.hero3_fringe6_img();
	this.instance_5.setTransform(-59.6,-67.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.3,-47.8,131,96);
p.frameBounds = [rect, new cjs.Rectangle(-35.1,-48.2,72,83), new cjs.Rectangle(-35.6,-51.1,74,81), new cjs.Rectangle(-31.7,-50.3,68,57), new cjs.Rectangle(-57.3,-51.1,118,176), new cjs.Rectangle(-59.6,-67.2,101,199)];


(lib.hero3_eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_eyes1_img();
	this.instance.setTransform(-33,-11.5);

	this.instance_1 = new lib.hero3_eyes2_img();
	this.instance_1.setTransform(-33,-11.5);

	this.instance_2 = new lib.hero3_eyes3_img();
	this.instance_2.setTransform(-33,-7);

	this.instance_3 = new lib.hero3_eyes4_img();
	this.instance_3.setTransform(-33,-11.5);

	this.instance_4 = new lib.hero3_eyes5_img();
	this.instance_4.setTransform(-33,-11.5);

	this.instance_5 = new lib.hero3_eyes6_img();
	this.instance_5.setTransform(-33,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-11.5,66,23);
p.frameBounds = [rect, rect, new cjs.Rectangle(-33,-7,66,16), rect=new cjs.Rectangle(-33,-11.5,66,23), rect, new cjs.Rectangle(-33,-7,66,16)];


(lib.hero3_eyelashes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_eyelashes1_img();
	this.instance.setTransform(-38.5,-9.7);

	this.instance_1 = new lib.hero3_eyelashes2_img();
	this.instance_1.setTransform(-41.6,-14.5);

	this.instance_2 = new lib.hero3_eyelashes3_img();
	this.instance_2.setTransform(-38.3,-10.4);

	this.instance_3 = new lib.hero3_eyelashes4_img();
	this.instance_3.setTransform(-43.1,-16.3);

	this.instance_4 = new lib.hero3_eyelashes5_img();
	this.instance_4.setTransform(-36.9,-11.5);

	this.instance_5 = new lib.hero3_eyelashes6_img();
	this.instance_5.setTransform(-39.6,-10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-9.7,77,20);
p.frameBounds = [rect, new cjs.Rectangle(-41.6,-14.5,84,29), new cjs.Rectangle(-38.3,-10.4,78,20), new cjs.Rectangle(-43.1,-16.3,89,26), new cjs.Rectangle(-36.9,-11.5,75,21), new cjs.Rectangle(-39.6,-10.7,81,24), null];


(lib.hero3_dress_back_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_dress2_back_img();
	this.instance.setTransform(-76.1,246.5);

	this.instance_1 = new lib.hero3_dress3_back_img();
	this.instance_1.setTransform(15,89.3);

	this.instance_2 = new lib.hero3_dress6_back_img();
	this.instance_2.setTransform(44.3,301.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-76.1,246.5,330,186), new cjs.Rectangle(15,89.3,162,228), rect=null, rect, new cjs.Rectangle(44.3,301.5,118,111), null];


(lib.hero3_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egg3AtaMAJLhazMA4kAAAMAAABazgANQA9IADAAIACgBIACgDIAKhfQAaAaAdAGQAKACAKgBQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgDQhUh+gLhqIgEgnIgMhZIgEgfQgfAGgOAAQgfAAgigMIgMgEQgJALgKAJQgGAEgIAZQgJAXAAAxIAAAJIAAAIIAAABQgFAmgWAoIAAAAQgdA0AAAKQAAAIAHAEQAFADALAAQAUAAAXgiIAAAAQAUgeAGghIAAABQACgGAHgKQAIgKANgNIAGgHIASAhQgCAQAAAXQAAAegEAIIgSAmIAAAAQgJAZAAAbQgBAMALASIADACIAFACIADAAIADgDIANgaIAQgeIAAAJQgCA5AfAcIAAACIAAAAQAIAlAjAOgAkqg5IAAgBQADgLACgNIAAgBIAAgJQAAgagDgRIAAgBIgCgIIAAgBIgOgsQgHgPgGgVQgVg+gIgcIAAAAIgKgjIgbhDIAVgDIABAAIAFgBIAAAAIASgDIANgBQBWgPABg3IAAgBIAAgCQAAgegRABQgDAAgYAQQgYAOgRAAIgHAAIgBAAQgNgBgLgDIABAAIgFgCQgQgHgNgNIABAAQgOgOgTgIQgPAnguA5QgiAsgWATIALASQAfAvAvAzQAcBogIAUQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAUAQIBHA6IADABIADgBIABgCIABgDQAPAgADgBQAMABAHgSg");
	var mask_graphics_1 = new cjs.Graphics().p("Egg3AtaMAJLhazMA4kAAAMAAABazgANQA9IADAAIACgBIACgDIAKhfQAaAaAdAGQAKACAKgBQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgDQhUh+gLhqIgEgnIgMhZIgEgfIgJACQAEgTgBgPQAAgag2ieQgxiSgQgjQgMgYgRg1QgVhAgKgYQglhhg2ghQg3ARgJglIg9geQAXCrAYA5QANAeAaAoIA3BSQAjA3CBD1QAAAUgNAWIgIAMIgFgCQgJALgKAJQgGAEgIAZQgJAXAAAxIAAAJIAAAIIAAABQgFAmgWAoIAAAAQgdA0AAAKQAAAIAHAEQAFADALAAQAUAAAXgiIAAAAQAUgeAGghIAAABQACgGAHgKQAIgKANgNIAGgHIASAhQgCAQAAAXQAAAegEAIIgSAmIAAAAQgJAZAAAbQgBAMALASIADACIAFACIADAAIADgDIANgaIAQgeIAAAJQgCA5AfAcIAAACIAAAAQAIAlAjAOgAkqg5IAAgBQADgLACgNIAAgBIAAgJQAAgagDgRIAAgBIgCgIIAAgBIgOgsQgHgPgGgVQgVg+gIgcIAAAAIgKgjIgbhDIAVgDIABAAIAFgBIAAAAIASgDIANgBQBWgPABg3IAAgBIAAgCQAAgegRABQgDAAgYAQQgYAOgRAAIgHAAIgBAAQgNgBgLgDIABAAIgFgCQgQgHgNgNIABAAQgOgOgTgIIgDAHIg2gMQgOgIAAgvQAAhdBJilQAkhTAOgoQATg7ADgzIhUgTIhMgRQgbBRgaCqQgfDSAABvQgBA7AZAzQAMAXAVAlIgEAEIALASQAfAvAvAzQAcBogIAUQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAUAQIBHA6IADABIADgBIABgCIABgDQAPAgADgBQAMABAHgSg");
	var mask_graphics_2 = new cjs.Graphics().p("Egg3AtaMAJLhazMA4kAAAMAAABazgANQA9IADAAIACgBIACgDIAKhfQAaAaAdAGQAKACAKgBQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgDQhUh+gLhqIgEgnIgMhZIgEgfIgJACQAEgTgBgPQAAgag2ieQgjhogmhnQgVBRhQAXQBDB6BHCHQAAAUgNAWIgIAMIgFgCQgJALgKAJQgGAEgIAZQgJAXAAAxIAAAJIAAAIIAAABQgFAmgWAoIAAAAQgdA0AAAKQAAAIAHAEQAFADALAAQAUAAAXgiIAAAAQAUgeAGghIAAABQACgGAHgKQAIgKANgNIAGgHIASAhQgCAQAAAXQAAAegEAIIgSAmIAAAAQgJAZAAAbQgBAMALASIADACIAFACIADAAIADgDIANgaIAQgeIAAAJQgCA5AfAcIAAACIAAAAQAIAlAjAOgAkqg5IAAgBQADgLACgNIAAgBIAAgJQAAgagDgRIAAgBIgCgIIAAgBIgOgsQgHgPgGgVQgVg+gIgcIAAAAIgKgjIgbhDIAVgDIABAAIAFgBIAAAAIASgDIANgBQBWgPABg3IAAgBIAAgCQAAgegRABQgDAAgYAQQgYAOgRAAIgHAAIgBAAQgNgBgLgDIABAAIgFgCQgQgHgNgNIABAAQgOgOgTgIIgDAHIg2gMQgOgIAAgvQAAhdBJilIATgrQhXgFhAgYIgJA2QgfDSAABvQgBA7AZAzQAMAXAVAlIgEAEIALASQAfAvAvAzQAcBogIAUQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAUAQIBHA6IADABIADgBIABgCIABgDQAPAgADgBQAMABAHgSg");
	var mask_graphics_3 = new cjs.Graphics().p("Egg3AtaMAJLhazMA4kAAAMAAABazgANQA9IADAAIACgBIACgDIAKhfQAaAaAdAGQAKACAKgBQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgDQhUh+gLhqIgEgnIgMhZIgEgfIgJACQAEgTgBgPQAAgag2ieQgxiSgQgjQgMgYgRg1QgVhAgKgYQglhhg2ghQg3ARgJglIg9geQAXCrAYA5QANAeAaAoIA3BSQAjA3CBD1QAAAUgNAWIgIAMIgFgCQgJALgKAJQgGAEgIAZQgJAXAAAxIAAAJIAAAIIAAABQgFAmgWAoIAAAAQgdA0AAAKQAAAIAHAEQAFADALAAQAUAAAXgiIAAAAQAUgeAGghIAAABQACgGAHgKQAIgKANgNIAGgHIASAhQgCAQAAAXQAAAegEAIIgSAmIAAAAQgJAZAAAbQgBAMALASIADACIAFACIADAAIADgDIANgaIAQgeIAAAJQgCA5AfAcIAAACIAAAAQAIAlAjAOgAkqg5IAAgBQADgLACgNIAAgBIAAgJQAAgagDgRIAAgBIgCgIIAAgBIgOgsQgHgPgGgVQgVg+gIgcIAAAAIgKgjIgbhDIAVgDIABAAIAFgBIAAAAIASgDIANgBQBWgPABg3IAAgBIAAgCQAAgegRABQgDAAgYAQQgYAOgRAAIgHAAIgBAAQgNgBgLgDIABAAIgFgCQgQgHgNgNIABAAQgOgOgTgIIgDAHIg2gMQgOgIAAgvQAAhdBJilQAkhTAOgoQATg7ADgzIhUgTIhMgRQgbBRgaCqQgfDSAABvQgBA7AZAzQAMAXAVAlIgEAEIALASQAfAvAvAzQAcBogIAUQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAUAQIBHA6IADABIADgBIABgCIABgDQAPAgADgBQAMABAHgSg");
	var mask_graphics_4 = new cjs.Graphics().p("Egg3AtaMAJLhazMA4kAAAMAAABazgANQA9IADAAIACgBIACgDIAKhfQAaAaAdAGQAKACAKgBQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgDQhUh+gLhqIgEgnIgMhZIgEgfIgJACQAEgTgBgPQAAgag2ieQgxiSgQgjQgMgYgRg1QgVhAgKgYQglhhg2ghQg3ARgJglIg9geQAXCrAYA5QANAeAaAoIA3BSQAjA3CBD1QAAAUgNAWIgIAMIgFgCQgJALgKAJQgGAEgIAZQgJAXAAAxIAAAJIAAAIIAAABQgFAmgWAoIAAAAQgdA0AAAKQAAAIAHAEQAFADALAAQAUAAAXgiIAAAAQAUgeAGghIAAABQACgGAHgKQAIgKANgNIAGgHIASAhQgCAQAAAXQAAAegEAIIgSAmIAAAAQgJAZAAAbQgBAMALASIADACIAFACIADAAIADgDIANgaIAQgeIAAAJQgCA5AfAcIAAACIAAAAQAIAlAjAOgAkqg5IAAgBQADgLACgNIAAgBIAAgJQAAgagDgRIAAgBIgCgIIAAgBIgOgsQgHgPgGgVQgVg+gIgcIAAAAIgKgjIgbhDIAVgDIABAAIAFgBIAAAAIASgDIANgBQBWgPABg3IAAgBIAAgCQAAgegRABQgDAAgYAQQgYAOgRAAIgHAAIgBAAQgNgBgLgDIABAAIgFgCQgQgHgNgNIABAAQgOgOgTgIIgDAHIg2gMQgOgIAAgvQAAhdBJilQAkhTAOgoQATg7ADgzIhUgTIhMgRQgbBRgaCqQgfDSAABvQgBA7AZAzQAMAXAVAlIgEAEIALASQAfAvAvAzQAcBogIAUQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAUAQIBHA6IADABIADgBIABgCIABgDQAPAgADgBQAMABAHgSg");
	var mask_graphics_5 = new cjs.Graphics().p("Egg3AtaMAJLhazMA4kAAAMAAABazgANQA9IADAAIACgBIACgDIAKhfQAaAaAdAGQAKACAKgBQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgDQhUh+gLhqIgEgnIgMhZIgEgfIgJACQAEgTgBgPQAAgag2ieQgxiSgQgjQgMgYgRg1QgVhAgKgYQglhhg2ghQg3ARgJglIg9geQAXCrAYA5QANAeAaAoIA3BSQAjA3CBD1QAAAUgNAWIgIAMIgFgCQgJALgKAJQgGAEgIAZQgJAXAAAxIAAAJIAAAIIAAABQgFAmgWAoIAAAAQgdA0AAAKQAAAIAHAEQAFADALAAQAUAAAXgiIAAAAQAUgeAGghIAAABQACgGAHgKQAIgKANgNIAGgHIASAhQgCAQAAAXQAAAegEAIIgSAmIAAAAQgJAZAAAbQgBAMALASIADACIAFACIADAAIADgDIANgaIAQgeIAAAJQgCA5AfAcIAAACIAAAAQAIAlAjAOgAkqg5IAAgBQADgLACgNIAAgBIAAgJQAAgagDgRIAAgBIgCgIIAAgBIgOgsQgHgPgGgVQgVg+gIgcIAAAAIgKgjIgbhDIAVgDIABAAIAFgBIAAAAIASgDIANgBQBWgPABg3IAAgBIAAgCQAAgegRABQgDAAgYAQQgYAOgRAAIgHAAIgBAAQgNgBgLgDIABAAIgFgCQgQgHgNgNIABAAQgOgOgTgIIgDAHIg2gMQgOgIAAgvQAAhdBJilQAkhTAOgoQATg7ADgzIhUgTIhMgRQgbBRgaCqQgfDSAABvQgBA7AZAzQAMAXAVAlIgEAEIALASQAfAvAvAzQAcBogIAUQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAUAQIBHA6IADABIADgBIABgCIABgDQAPAgADgBQAMABAHgSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:77,y:201.1}).wait(1).to({graphics:mask_graphics_1,x:77,y:201.1}).wait(1).to({graphics:mask_graphics_2,x:77,y:201.1}).wait(1).to({graphics:mask_graphics_3,x:77,y:201.1}).wait(1).to({graphics:mask_graphics_4,x:77,y:201.1}).wait(1).to({graphics:mask_graphics_5,x:77,y:201.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(-95.7,21.3);

	this.instance_1 = new lib.hero3_dress2_img();
	this.instance_1.setTransform(-77.4,-7.8);

	this.instance_2 = new lib.hero3_dress3_img();
	this.instance_2.setTransform(13.1,-2.5);

	this.instance_3 = new lib.hero3_dress4_img();
	this.instance_3.setTransform(-30.8,19.9);

	this.instance_4 = new lib.hero3_dress5_img();
	this.instance_4.setTransform(-6.5,26.8);

	this.instance_5 = new lib.hero3_dress6_img();
	this.instance_5.setTransform(-21,-6.3);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.7,21.3,352,393);
p.frameBounds = [rect, new cjs.Rectangle(-77.4,-7.8,340,435), new cjs.Rectangle(13.1,-2.5,170,299), new cjs.Rectangle(-30.8,19.9,244,226), new cjs.Rectangle(-6.5,26.8,204,228), new cjs.Rectangle(-21,-6.3,257,445), null];


(lib.hero3_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egg3AtaMAJLhazMA4kAAAMAAABazgANQA9IADAAIACgBIABgDIALhfQAbAaAcAGQAKACALgBQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIgBgDQhTh+gKhqIgFgnIgLhZIgFgfQgfAGgOAAQgfAAgjgMIgLgEQgJALgKAJQgGAEgJAZQgIAXAAAxIAAAJIgBAIIAAABQgEAmgWAoIgBAAQgcA0AAAKQAAAIAHAEQAFADAKAAQAVAAAXgiIgBAAQAVgeAGghIAAABQABgGAIgKQAHgKANgNIAHgHIARAhQgBAQAAAXQgBAegDAIIgSAmIAAAAQgKAZAAAbQAAAMAMASIACACIAFACIAEAAIACgDIANgaIAQgeIgBAJQgBA5AfAcIAAACIAAAAQAHAlAkAOgAkqg5IAAgBQAEgLABgNIAAgBIAAgJQAAgagDgRIAAgBIgCgIIAAgBIgPgsQgGgPgFgVQgWg+gIgcIAAAAIgLgjIgahDIAWgDIAAAAIAFgBIABAAIASgDIAMgBQBWgPABg3IAAgBIAAgCQAAgegRABQgCAAgZAQQgYAOgSAAIgHAAIAAAAQgNgBgKgDIAAAAIgFgCQgQgHgNgNIABAAQgOgOgTgIQgPAngtA5QgjAsgWATIAMASQAeAvAuAzQAdBogHAUQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAUAQIBHA6IACABIADgBIADgCIAAgDQAOAgAFgBQAMABAGgSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:163,y:88.2}).wait(3).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero3_bottom1_img();
	this.instance.setTransform(122.8,0.7);

	this.instance_1 = new lib.hero3_bottom2_img();
	this.instance_1.setTransform(95.5,0.5);

	this.instance_2 = new lib.hero3_bottom3_img();
	this.instance_2.setTransform(115,-17.8);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(122.8,0.7,103,81);
p.frameBounds = [rect, new cjs.Rectangle(95.5,0.5,162,142), new cjs.Rectangle(115,-17.8,111,101), null];


(lib.hero3_accessory_all2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_accessory2_img();
	this.instance.setTransform(-43,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-18.5,86,37);
p.frameBounds = [rect, null];


(lib.hero3_accessory_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-21.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-20.5,43,41);
p.frameBounds = [rect, null];


(lib.hero2_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(119.3,-111);

	this.instance_1 = new lib.hero2_top2_img();
	this.instance_1.setTransform(180.8,-76.5);

	this.instance_2 = new lib.hero2_top3_img();
	this.instance_2.setTransform(180.7,-68.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(119.3,-111,199,186);
p.frameBounds = [rect, new cjs.Rectangle(180.8,-76.5,105,89), new cjs.Rectangle(180.7,-68.3,80,120), null];


(lib.hero2_socks_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_socks1_img();
	this.instance.setTransform(-46.1,-133);

	this.instance_1 = new lib.hero2_socks2_img();
	this.instance_1.setTransform(-45.9,-132.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.1,-133,93,267);
p.frameBounds = [rect, new cjs.Rectangle(-45.9,-132.6,92,266), null];


(lib.hero2_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shoes_1_img();
	this.instance.setTransform(63.7,-2.7);

	this.instance_1 = new lib.hero2_shoes_2_img();
	this.instance_1.setTransform(54.5,-169.8);

	this.instance_2 = new lib.hero2_shoes_3_img();
	this.instance_2.setTransform(54.5,-51.6);

	this.instance_3 = new lib.hero2_shoes_4_img();
	this.instance_3.setTransform(62.7,-63.7);

	this.instance_4 = new lib.hero2_shoes_5_img();
	this.instance_4.setTransform(63.7,-46.1);

	this.instance_5 = new lib.hero2_shoes_6_img();
	this.instance_5.setTransform(63.7,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(63.7,-2.7,54,64);
p.frameBounds = [rect, new cjs.Rectangle(54.5,-169.8,79,232), new cjs.Rectangle(54.5,-51.6,71,113), new cjs.Rectangle(62.7,-63.7,55,126), new cjs.Rectangle(63.7,-46.1,54,108), new cjs.Rectangle(63.7,4.1,54,58), null];


(lib.hero2_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-35.4,-9.6);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-44.5,-15.7);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-43.6,-15.7);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-43.4,-17.5);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-43.4,-17.5);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-43.6,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.4,-9.6,71,19);
p.frameBounds = [rect, new cjs.Rectangle(-44.5,-15.7,89,27), new cjs.Rectangle(-43.6,-15.7,90,29), rect=new cjs.Rectangle(-43.4,-17.5,89,33), rect, new cjs.Rectangle(-43.6,-13.4,90,25), null];


(lib.hero2_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-45.8,-18.8);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-45.8,-18.8);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-45.8,-18.8);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-45.8,-18.8);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-45.8,-18.8);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-45.8,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-18.8,92,38);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-45.8,-18.8,92,46), new cjs.Rectangle(-45.8,-18.8,92,54), null];


(lib.hero2_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-21.4,-12.7);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-21.4,-12.7);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-21.4,-12.7);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-21.4,-12.7);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-21.4,-12.7);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-21.4,-12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.4,-12.7,43,25);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-66.1,-67.7);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-37.7,-35.4);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-36.9,-30.1);

	this.instance_3 = new lib.hero2_hair4_img();
	this.instance_3.setTransform(-39.2,-33.5);

	this.instance_4 = new lib.hero2_hair5_img();
	this.instance_4.setTransform(-74.7,-35.2);

	this.instance_5 = new lib.hero2_hair6_img();
	this.instance_5.setTransform(-85.3,-30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.1,-67.7,155,70);
p.frameBounds = [rect, new cjs.Rectangle(-37.7,-35.4,73,143), new cjs.Rectangle(-36.9,-30.1,75,80), new cjs.Rectangle(-39.2,-33.5,76,90), new cjs.Rectangle(-74.7,-35.2,160,167), new cjs.Rectangle(-85.3,-30.3,170,141)];


(lib.hero2_glasses = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_glasses1_img();
	this.instance.setTransform(4.4,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(4.4,39,45,15);
p.frameBounds = [rect, null];


(lib.hero2_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-43,-34.8);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-45.3,-39.1);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-33.8,-41.5);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-45,-51.5);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-31.6,-46.6);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-35.8,-37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-34.8,86,70);
p.frameBounds = [rect, new cjs.Rectangle(-45.3,-39.1,88,147), new cjs.Rectangle(-33.8,-41.5,77,136), new cjs.Rectangle(-45,-51.5,89,108), new cjs.Rectangle(-31.6,-46.6,72,71), new cjs.Rectangle(-35.8,-37.1,79,71)];


(lib.hero2_eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-33.3,-10.8);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-33.3,-10.8);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-33.3,-6.5);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-33.3,-6.5);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-33.3,-6.5);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-33.3,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.3,-10.8,66,23);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-33.3,-6.5,66,17), rect, rect, rect];


(lib.hero2_eyelashes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyelashes1_img();
	this.instance.setTransform(-40.7,-11.8);

	this.instance_1 = new lib.hero2_eyelashes2_img();
	this.instance_1.setTransform(-40.3,-9);

	this.instance_2 = new lib.hero2_eyelashes3_img();
	this.instance_2.setTransform(-39.9,-9.2);

	this.instance_3 = new lib.hero2_eyelashes4_img();
	this.instance_3.setTransform(-44.4,-14.7);

	this.instance_4 = new lib.hero2_eyelashes5_img();
	this.instance_4.setTransform(-40.2,-10.1);

	this.instance_5 = new lib.hero2_eyelashes6_img();
	this.instance_5.setTransform(-42.7,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.7,-11.8,82,24);
p.frameBounds = [rect, new cjs.Rectangle(-40.3,-9,81,19), new cjs.Rectangle(-39.9,-9.2,82,20), new cjs.Rectangle(-44.4,-14.7,92,25), new cjs.Rectangle(-40.2,-10.1,80,22), new cjs.Rectangle(-42.7,-13.9,85,30)];


(lib.hero2_dress_allback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress3_back();
	this.instance.setTransform(123,89);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, new cjs.Rectangle(123,89,130,224), rect=null, rect, rect, rect];


(lib.hero2_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egm4AsXMATshb1MAs+AAAIAAUKICLAAMAK7BKzgAm8qMQAYANgDAfQgEAfAKAXQAJAXAUALIAPAAIACgoIASAAQAWAdAegEIADgBQADADADACQACABAKAAQAPAAACgFIAAgUQAAgYgLg9QgKg6gEgFIACgBQAFAGAGADIAbAAIAAgNQgIgSgQgzQgNgrgKgLQgLgKglgFQhEgEgWAAQgkAAgGAHIgwAwQgRANgeARIgkAVIgqhHIgbAsIgvBOIgLgHIAJALIAfAnIAhAyQASAZAeAAQAdAAA1gvIApgnIABgBQAfADANAHgAlOriQgogagRgQQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAjgFAPAAQAGAAAUAnIgKAQIgHgFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:194.5,y:91.2}).wait(6).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(74.1,-94.6);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(95.5,-123);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(79.5,-120.8);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-17.5,-82.3);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(114,-106.2);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(87.6,-88);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(74.1,-94.6,228,240);
p.frameBounds = [rect, new cjs.Rectangle(95.5,-123,220,473), new cjs.Rectangle(79.5,-120.8,230,473), new cjs.Rectangle(-17.5,-82.3,441,469), new cjs.Rectangle(114,-106.2,170,260), new cjs.Rectangle(87.6,-88,224,244), null];


(lib.hero2_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(170,38);

	this.instance_1 = new lib.hero2_bottom2_img();
	this.instance_1.setTransform(161,30.3);

	this.instance_2 = new lib.hero2_bottom3_img();
	this.instance_2.setTransform(139.7,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(170,38,107,68);
p.frameBounds = [rect, new cjs.Rectangle(161,30.3,122,106), new cjs.Rectangle(139.7,22.5,163,92), null];


(lib.hero2_accessory_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-32.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-41,65,82);
p.frameBounds = [rect, null];


(lib.hero1_wings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_wings1_img();

	this.instance_1 = new lib.hero1_wings2_img();
	this.instance_1.setTransform(-11.2,-56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,310,117);
p.frameBounds = [rect, new cjs.Rectangle(-11.2,-56.8,334,232), null];


(lib.hero1_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(72.5,-161.5);

	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(22.4,-158.7);

	this.instance_2 = new lib.hero1_top3_img();
	this.instance_2.setTransform(34.3,-155.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(72.5,-161.5,130,120);
p.frameBounds = [rect, new cjs.Rectangle(22.4,-158.7,236,150), new cjs.Rectangle(34.3,-155.2,213,153), null];


(lib.hero1_socks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_socks1_img();
	this.instance.setTransform(84.4,106.1);

	this.instance_1 = new lib.hero1_socks2_img();
	this.instance_1.setTransform(91.7,220.1);

	this.instance_2 = new lib.hero1_socks3_img();
	this.instance_2.setTransform(84,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(84.4,106.1,100,360);
p.frameBounds = [rect, new cjs.Rectangle(91.7,220.1,78,245), new cjs.Rectangle(84,105,100,360), null];


(lib.hero1_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shoes1_img();
	this.instance.setTransform(69.8,-36.8);

	this.instance_1 = new lib.hero1_shoes2_img();
	this.instance_1.setTransform(59.1,-48.5);

	this.instance_2 = new lib.hero1_shoes3_img();
	this.instance_2.setTransform(61.3,-151.7);

	this.instance_3 = new lib.hero1_shoes4_img();
	this.instance_3.setTransform(71.8,-26.9);

	this.instance_4 = new lib.hero1_shoes5_img();
	this.instance_4.setTransform(51.8,-57.7);

	this.instance_5 = new lib.hero1_shoes6_img();
	this.instance_5.setTransform(67.3,-52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(69.8,-36.8,56,106);
p.frameBounds = [rect, new cjs.Rectangle(59.1,-48.5,79,117), new cjs.Rectangle(61.3,-151.7,80,228), new cjs.Rectangle(71.8,-26.9,54,96), new cjs.Rectangle(51.8,-57.7,81,126), new cjs.Rectangle(67.3,-52.5,58,121), null];


(lib.hero1_shadow_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-35.4,-9.6);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-49.5,-23.5);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-45.8,-19);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-46.5,-20.8);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-46.3,-20.4);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-46.2,-16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.4,-9.6,71,19);
p.frameBounds = [rect, new cjs.Rectangle(-49.5,-23.5,94,35), new cjs.Rectangle(-45.8,-19,88,30), new cjs.Rectangle(-46.5,-20.8,90,43), new cjs.Rectangle(-46.3,-20.4,94,40), new cjs.Rectangle(-46.2,-16.3,90,32), null];


(lib.hero1_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-45.8,-18.8);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-45.8,-18.8);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-45.8,-18.8);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-45.8,-18.8);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-45.8,-18.8);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-45.8,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-18.8,92,38);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-24.9,-13.5);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-24.9,-13.5);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-24.9,-13.5);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-24.9,-13.5);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-24.9,-13.5);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-24.9,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.9,-13.5,50,27);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-51.2,-13);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(6.9,19);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-68.6,-23.7);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-91.4,3.7);

	this.instance_4 = new lib.hero1_hair5_img();
	this.instance_4.setTransform(-49,2);

	this.instance_5 = new lib.hero1_hair6_img();
	this.instance_5.setTransform(-2,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.2,-13,150,369);
p.frameBounds = [rect, new cjs.Rectangle(6.9,19,152,240), new cjs.Rectangle(-68.6,-23.7,194,309), new cjs.Rectangle(-91.4,3.7,248,256), new cjs.Rectangle(-49,2,218,303), new cjs.Rectangle(-2,2.8,77,86)];


(lib.hero1_fringe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-6.1,0.3);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(4.3,3.6);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-16.6,-7.3);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(8.8,0.5);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,70,120);
p.frameBounds = [rect, new cjs.Rectangle(-6.1,0.3,87,117), new cjs.Rectangle(4.3,3.6,64,75), new cjs.Rectangle(-16.6,-7.3,107,109), new cjs.Rectangle(8.8,0.5,58,55), new cjs.Rectangle(-6,-0.5,85,86)];


(lib.hero1_eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-32.2,-12);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-32.2,-12);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-32.2,-12);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-32.2,-12);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-32.2,-12);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-32.2,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.2,-12,66,23);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyelashes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyelashes1_img();
	this.instance.setTransform(-38.6,-8.9);

	this.instance_1 = new lib.hero1_eyelashes2_img();
	this.instance_1.setTransform(-39.2,-10.3);

	this.instance_2 = new lib.hero1_eyelashes3_img();
	this.instance_2.setTransform(-38.4,-12.5);

	this.instance_3 = new lib.hero1_eyelashes4_img();
	this.instance_3.setTransform(-36.5,-7.5);

	this.instance_4 = new lib.hero1_eyelashes5_img();
	this.instance_4.setTransform(-38.2,-10.6);

	this.instance_5 = new lib.hero1_eyelashes6_img();
	this.instance_5.setTransform(-33.7,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.6,-8.9,77,18);
p.frameBounds = [rect, new cjs.Rectangle(-39.2,-10.3,79,20), new cjs.Rectangle(-38.4,-12.5,78,28), new cjs.Rectangle(-36.5,-7.5,74,16), new cjs.Rectangle(-38.2,-10.6,76,20), new cjs.Rectangle(-33.7,-7.5,70,21)];


(lib.hero1_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dress
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(96.5,-131.4);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(82.5,-142.5);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(117.2,-133.5);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(78.3,-140.7);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(104.2,-117.6);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(82.5,-106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(96.5,-131.4,226,201);
p.frameBounds = [rect, new cjs.Rectangle(82.5,-142.5,253,201), new cjs.Rectangle(117.2,-133.5,206,226), new cjs.Rectangle(78.3,-140.7,293,255), new cjs.Rectangle(104.2,-117.6,216,262), new cjs.Rectangle(82.5,-106,253,198), null];


(lib.hero1_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_bottom1_img();
	this.instance.setTransform(58,-50.4);

	this.instance_1 = new lib.hero1_bottom2_img();
	this.instance_1.setTransform(65.5,-49.2);

	this.instance_2 = new lib.hero1_bottom3_img();
	this.instance_2.setTransform(4.6,-45.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(58,-50.4,184,106);
p.frameBounds = [rect, new cjs.Rectangle(65.5,-49.2,161,95), new cjs.Rectangle(4.6,-45.7,290,149), null];


(lib.hero1_accessory_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-16.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.5,-37.5,33,75);
p.frameBounds = [rect, null];


(lib.hero_3_socks_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqweWMAAAg8rIVhAAMAAAA8rgAmDsVQAFAMAGAAQAHAAAGgNQAHgQAAgZIgCgaQgCgRgCgGIgBgDIhEjVIgWg6QARgHAbgDQAlgEAQgHIASgJIAKgHQADgCAHgKQAKgTAAgRQABgHgEgJQgEgLgGAAQgEAAgIAEIgWAOQgQAKgaABQgZABgUgNIgRgMIhVBSIAZC2IAPA7QAEASABAOIAAAGQAAAKgBAJIABAEIBdBKQAEAAACgGIACgGIALAag");
	mask.setTransform(-5.8,1.4);

	// Слой 1
	this.instance = new lib.hero3_socks1_img();
	this.instance.setTransform(-61.5,-187.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.5,-187.3,119,361);
p.frameBounds = [rect];


(lib.hero_3_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egg3AtaMAJLhazMA4kAAAMAAABazgANQA9IADAAIACgBIACgDIAKhfQAaAaAdAGQAKACAKgBQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgDQhUh+gLhqIgEgnIgMhZIgEgfQgfAGgOAAQgfAAgigMIgMgEQgJALgKAJQgGAEgIAZQgJAXAAAxIAAAJIAAAIIAAABQgFAmgWAoIAAAAQgdA0AAAKQAAAIAHAEQAFADALAAQAUAAAXgiIAAAAQAUgeAGghIAAABQACgGAHgKQAIgKANgNIAGgHIASAhQgCAQAAAXQAAAegEAIIgSAmIAAAAQgJAZAAAbQgBAMALASIADACIAFACIADAAIADgDIANgaIAQgeIAAAJQgCA5AfAcIAAACIAAAAQAIAlAjAOgAkqg5IAAgBQADgLACgNIAAgBIAAgJQAAgagDgRIAAgBIgCgIIAAgBIgOgsQgHgPgGgVQgVg+gIgcIAAAAIgKgjIgbhDIAVgDIABAAIAFgBIAAAAIASgDIANgBQBWgPABg3IAAgBIAAgCQAAgegRABQgDAAgYAQQgYAOgRAAIgHAAIgBAAQgNgBgLgDIABAAIgFgCQgQgHgNgNIABAAQgOgOgTgIQgPAnguA5QgiAsgWATIALASQAfAvAvAzQAcBogIAUQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAUAQIBHA6IADABIADgBIABgCIABgDQAPAgADgBQAMABAHgSg");
	mask.setTransform(77,201.1);

	// Layer 1
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(-95.7,21.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.7,21.3,352,393);
p.frameBounds = [rect];


(lib.hero_2_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egm4AsXMATshb1MAs+AAAIAAUKICLAAMAK7BKzgAm8qMQAYANgDAfQgEAfAKAXQAJAXAUALIAPAAIACgoIASAAQAWAdAegEIADgBQADADADACQACABAKAAQAPAAACgFIAAgUQAAgYgLg9QgKg6gEgFIACgBQAFAGAGADIAbAAIAAgNQgIgSgQgzQgNgrgKgLQgLgKglgFQhEgEgWAAQgkAAgGAHIgwAwQgRANgeARIgkAVIgqhHIgbAsIgvBOIgLgHIAJALIAfAnIAhAyQASAZAeAAQAdAAA1gvIApgnIABgBQAfADANAHgAlOriQgogagRgQQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAjgFAPAAQAGAAAUAnIgKAQIgHgFg");
	mask.setTransform(194.5,91.2);

	// Слой 2
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(95.5,-123);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(95.5,-123,220,473);
p.frameBounds = [rect];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-40.9,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hf
	this.instance_1 = new lib.hero1_fringe4_img();
	this.instance_1.setTransform(43.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.hero1_eyes1_img();
	this.instance_2.setTransform(112.9,46,0.501,0.501,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 6
	this.instance_3 = new lib.hero1_eyelashes1_img();
	this.instance_3.setTransform(116.1,47.5,0.501,0.501,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 3
	this.instance_4 = new lib.hero1_shadows3_img();
	this.instance_4.setTransform(119.4,41.7,0.501,0.501,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 4
	this.instance_5 = new lib.hero1_lips1_img();
	this.instance_5.setTransform(106.9,68.4,0.501,0.501,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 5
	this.instance_6 = new lib.hero1_rouge3_img();
	this.instance_6.setTransform(119.5,49.1,0.501,0.501,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 7
	this.instance_7 = new lib.hero1_eyebrows_img();
	this.instance_7.setTransform(76.6,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// head
	this.instance_8 = new lib.hero1_head0();
	this.instance_8.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// dress
	this.instance_9 = new lib.hero1_dress3_img();
	this.instance_9.setTransform(-8,91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// sh
	this.instance_10 = new lib.hero1_shoes5_img();
	this.instance_10.setTransform(39.8,429.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// socks
	this.instance_11 = new lib.hero1_socks2_img();
	this.instance_11.setTransform(50.4,292);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// body
	this.instance_12 = new lib.hero1_body2();
	this.instance_12.setTransform(-41.9,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// ears
	this.instance_13 = new lib.hero1_ears();
	this.instance_13.setTransform(53.1,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// hb
	this.instance_14 = new lib.hero1_hair4_img();
	this.instance_14.setTransform(-31.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// wings
	this.instance_15 = new lib.hero1_wings1_img();
	this.instance_15.setTransform(-62.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-13.4,310,569.2);
p.frameBounds = [rect];


(lib.headdress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory2_img();
	this.instance.setTransform(-43,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokETIAAokIRJAAIAAIkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-27.5,110,55);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses1_img();
	this.instance.setTransform(-22.5,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBD6IAAnzIODAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect];


(lib.hanger1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger_img();
	this.instance.setTransform(-57.4,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.4,-38.5,98,66);
p.frameBounds = [rect];


(lib.g2_wings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_wings1_img();
	this.instance.setTransform(-40.5,-38.6);

	this.instance_1 = new lib.hero2_wings2_img();
	this.instance_1.setTransform(-10.7,-38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.5,-38.6,396,245);
p.frameBounds = [rect, new cjs.Rectangle(-10.7,-38.3,322,210), null];


(lib.eyes_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye3_icon6_img();
	this.instance.setTransform(-73,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av5DlIAqpUIfJCLIgqJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-36.9,203.6,73.8);
p.frameBounds = [rect];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye2_icon6_img();
	this.instance.setTransform(-80.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwBEFIA9q4IfGCvIg9K4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.6,-43.6,205.4,87.2);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye_icon6_img();
	this.instance.setTransform(-87.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmGPIAAsdIfNAAIAAMdg");
	this.shape.setTransform(0,0,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.6,-50.2,207.3,100.5);
p.frameBounds = [rect];


(lib.eyes_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye3_icon5_img();
	this.instance.setTransform(-73,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av5DlIAqpUIfJCLIgqJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-36.9,203.6,73.8);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye2_icon5_img();
	this.instance.setTransform(-80.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwBEFIA9q4IfGCvIg9K4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.6,-43.6,205.4,87.2);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye_icon5_img();
	this.instance.setTransform(-87.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmGPIAAsdIfNAAIAAMdg");
	this.shape.setTransform(0,0,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.6,-50.2,207.3,100.5);
p.frameBounds = [rect];


(lib.eyes_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye3_icon4_img();
	this.instance.setTransform(-73,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av5DlIAqpUIfJCLIgqJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-36.9,203.6,73.8);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye2_icon4_img();
	this.instance.setTransform(-80.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwBEFIA9q4IfGCvIg9K4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.6,-43.6,205.4,87.2);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye_icon4_img();
	this.instance.setTransform(-87.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmGPIAAsdIfNAAIAAMdg");
	this.shape.setTransform(0,0,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.6,-50.2,207.3,100.5);
p.frameBounds = [rect];


(lib.eyes_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye3_icon3_img();
	this.instance.setTransform(-73,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av5DlIAqpUIfJCLIgqJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-36.9,203.6,73.8);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye2_icon3_img();
	this.instance.setTransform(-80.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwBEFIA9q4IfGCvIg9K4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.6,-43.6,205.4,87.2);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye_icon3_img();
	this.instance.setTransform(-87.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmGPIAAsdIfNAAIAAMdg");
	this.shape.setTransform(0,0,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.6,-50.2,207.3,100.5);
p.frameBounds = [rect];


(lib.eyes_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye3_icon2_img();
	this.instance.setTransform(-73,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av5DlIAqpUIfJCLIgqJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-36.9,203.6,73.8);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye2_icon2_img();
	this.instance.setTransform(-80.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwBEFIA9q4IfGCvIg9K4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.6,-43.6,205.4,87.2);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye_icon2_img();
	this.instance.setTransform(-87.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmGPIAAsdIfNAAIAAMdg");
	this.shape.setTransform(0,0,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.6,-50.2,207.3,100.5);
p.frameBounds = [rect];


(lib.eyes_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye3_icon1_img();
	this.instance.setTransform(-73,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av5DlIAqpUIfJCLIgqJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-36.9,203.6,73.8);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye2_icon1_img();
	this.instance.setTransform(-80.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwBEFIA9q4IfGCvIg9K4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.6,-43.6,205.4,87.2);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye_icon1_img();
	this.instance.setTransform(-87.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmGPIAAsdIfNAAIAAMdg");
	this.shape.setTransform(0,0,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.6,-50.2,207.3,100.5);
p.frameBounds = [rect];


(lib.eyelashes_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon2_img();
	this.instance.setTransform(-87.5,-25.3,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmD5IAAnxIfNAAIAAHxg");
	this.shape.setTransform(0,0,1,1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon2_img();
	this.instance.setTransform(-87.5,-25.3,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon2_img();
	this.instance.setTransform(-87.5,-25.3,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon3_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmD5IAAnxIfNAAIAAHxg");
	this.shape.setTransform(0,0,1,1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon3_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon3_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon4_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmD5IAAnxIfNAAIAAHxg");
	this.shape.setTransform(0,0,1,1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon4_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon4_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon5_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmD5IAAnxIfNAAIAAHxg");
	this.shape.setTransform(0,0,1,1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon5_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon5_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon6_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmD5IAAnxIfNAAIAAHxg");
	this.shape.setTransform(0,0,1,1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon6_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon6_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon1_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmD5IAAnxIfNAAIAAHxg");
	this.shape.setTransform(0,0,1,1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon1_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
p.frameBounds = [rect];


(lib.eyelashes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyelashes_icon1_img();
	this.instance.setTransform(-87.5,-25.4,1,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av7CPIA0nuIfDDQIg0Hvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-35.3,204.1,70.6);
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
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.blush_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon12_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon12_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon13_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon5_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon8_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon12_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon1_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon1_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon1_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon6_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon6_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon11_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-40,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
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


(lib.accessory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-21.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldFeIAAq6IK7AAIAAK6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-32.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-41,65,82);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-16.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");
	this.shape.setTransform(2.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-45,90,90);
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
	this.instance.setTransform(-105,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-55,210,110);
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
	this.instance.setTransform(-105,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-55,210,110);
p.frameBounds = [rect];


(lib.play_again_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-105,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-55,210,110);
p.frameBounds = [rect];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_img();
	this.instance.setTransform(-105,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-55,210,110);
p.frameBounds = [rect];


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_img();
	this.instance.setTransform(-105,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-55,210,110);
p.frameBounds = [rect];


(lib.next_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_img();
	this.instance.setTransform(-105,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-55,210,110);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_img();
	this.instance.setTransform(-105,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-55,210,110);
p.frameBounds = [rect];


(lib.more_games_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_4_2_img();
	this.instance.setTransform(-43,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-63,86,125);
p.frameBounds = [rect];


(lib.more_games_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_2_2_img();
	this.instance.setTransform(-43,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-63,86,126);
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
	this.instance.setTransform(-105,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-55,210,110);
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
	this.instance.setTransform(-105,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-55,210,110);
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
p.nominalBounds = rect = new cjs.Rectangle(-190,-160,380,320);
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


(lib.wings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.514,0.514,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:10},10).to({y:0},10).to({y:10},10).to({y:0},10).wait(1));

	// animation
	this.instance_1 = new lib.title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({y:-10},10).to({y:0},10).to({y:-10},10).to({y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-80,480,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-240,-81,480,162), new cjs.Rectangle(-240,-82,480,164), new cjs.Rectangle(-240,-83,480,166), new cjs.Rectangle(-240,-84,480,168), new cjs.Rectangle(-240,-85,480,170), new cjs.Rectangle(-240,-86,480,172), new cjs.Rectangle(-240,-87,480,174), new cjs.Rectangle(-240,-88,480,176), new cjs.Rectangle(-240,-89,480,178), new cjs.Rectangle(-240,-90,480,180), new cjs.Rectangle(-240,-89,480,178), new cjs.Rectangle(-240,-88,480,176), new cjs.Rectangle(-240,-87,480,174), new cjs.Rectangle(-240,-86,480,172), new cjs.Rectangle(-240,-85,480,170), new cjs.Rectangle(-240,-84,480,168), new cjs.Rectangle(-240,-83,480,166), new cjs.Rectangle(-240,-82,480,164), new cjs.Rectangle(-240,-81,480,162), new cjs.Rectangle(-240,-80,480,160), new cjs.Rectangle(-240,-81,480,162), new cjs.Rectangle(-240,-82,480,164), new cjs.Rectangle(-240,-83,480,166), new cjs.Rectangle(-240,-84,480,168), new cjs.Rectangle(-240,-85,480,170), new cjs.Rectangle(-240,-86,480,172), new cjs.Rectangle(-240,-87,480,174), new cjs.Rectangle(-240,-88,480,176), new cjs.Rectangle(-240,-89,480,178), new cjs.Rectangle(-240,-90,480,180), new cjs.Rectangle(-240,-89,480,178), new cjs.Rectangle(-240,-88,480,176), new cjs.Rectangle(-240,-87,480,174), new cjs.Rectangle(-240,-86,480,172), new cjs.Rectangle(-240,-85,480,170), new cjs.Rectangle(-240,-84,480,168), new cjs.Rectangle(-240,-83,480,166), new cjs.Rectangle(-240,-82,480,164), new cjs.Rectangle(-240,-81,480,162), new cjs.Rectangle(-240,-80,480,160)];


(lib.stockings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.514,0.514,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


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


(lib.hero_top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top3_img();
	this.instance.setTransform(-64.7,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-1.6,-15.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.7,-47.3,128,116.7);
p.frameBounds = [rect];


(lib.hero_top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top2_img();
	this.instance.setTransform(-75.7,-28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-1.6,-15.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.7,-47.3,144,156.7);
p.frameBounds = [rect];


(lib.hero_top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top1_img();
	this.instance.setTransform(-34.7,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-1.6,-15.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-47.3,98,94.7);
p.frameBounds = [rect];


(lib.hero_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom3_img();
	this.instance.setTransform(-54,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-1.6,-15.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-47.3,111,144.7);
p.frameBounds = [rect];


(lib.hero_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom2_img();
	this.instance.setTransform(-77,-12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-1.6,-15.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-47.3,162,176.7);
p.frameBounds = [rect];


(lib.hero_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom1_img();
	this.instance.setTransform(-50,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-1.6,-15.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-47.3,103,124.7);
p.frameBounds = [rect];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero3_accessory_all2();
	this.headdress.setTransform(100.2,23.4);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// accessory
	this.accessory = new lib.hero3_accessory_all();
	this.accessory.setTransform(60.8,260);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero3_fringe_all();
	this.fringe.setTransform(95.7,53.7);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyes
	this.eyes = new lib.hero3_eyes_all();
	this.eyes.setTransform(96.2,51.9,0.5,0.5,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero3_eyelashes_all();
	this.eyelashes.setTransform(96.2,51.9,0.5,0.5,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all();
	this.shadows.setTransform(96.2,51.2,0.5,0.5,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all();
	this.lips.setTransform(94.4,75.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all();
	this.blush.setTransform(96.1,59.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance = new lib.hero3_head();
	this.instance.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dress
	this.dress = new lib.hero3_dress_all();
	this.dress.setTransform(98.9,278.3,1,1,0,0,0,95.3,189.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero3_top_all();
	this.top.setTransform(86.2,145.7,1,1,0,0,0,168.7,-56.1);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero3_bottom_all();
	this.bottom.setTransform(95.5,235.8,1,1,0,0,0,178,34);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero3_shoes_all();
	this.shoes.setTransform(86.4,509.2,1,1,0,0,0,26.3,37.1);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// stockings
	this.stockings = new lib.hero3_socks_all();
	this.stockings.setTransform(90,363.8,1,1,0,0,0,-2.6,0.8);

	this.timeline.addTween(cjs.Tween.get(this.stockings).wait(1));

	// body
	this.instance_1 = new lib.hero3_body2();
	this.instance_1.setTransform(0,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ears
	this.instance_2 = new lib.hero3_ears();
	this.instance_2.setTransform(29.2,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dressSecond
	this.dressSecond = new lib.hero3_dress_back_all();
	this.dressSecond.setTransform(98.9,278.3,1,1,0,0,0,95.3,189.5);

	this.timeline.addTween(cjs.Tween.get(this.dressSecond).wait(1));

	// hair
	this.hair = new lib.hero3_hair_all();
	this.hair.setTransform(95.7,53.7);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// wings
	this.wings = new lib.hero3_wings();
	this.wings.setTransform(95.3,111,1,1,0,0,0,156.3,93.9);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.9,-30,421,610.7);
p.frameBounds = [rect];


(lib.hero_3_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero3_fringe0();
	this.instance.setTransform(-113.9,-502.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyes
	this.eyes = new lib.hero3_eyes_all();
	this.eyes.setTransform(18.1,-410.7,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero3_eyelashes_all();
	this.eyelashes.setTransform(18.1,-410.7,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all();
	this.shadows.setTransform(18.2,-411.9);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all();
	this.lips.setTransform(14.6,-364.1);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all();
	this.blush.setTransform(17.8,-395.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.h3_d0();
	this.instance_1.setTransform(-177.9,-274.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero3_body1();
	this.instance_2.setTransform(-134.1,-574.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177.9,-574.4,398,787);
p.frameBounds = [rect];


(lib.hero_3_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hf
	this.instance = new lib.hero3_fringe5_img();
	this.instance.setTransform(38.4,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// rouge
	this.instance_1 = new lib.hero3_eyes3_img();
	this.instance_1.setTransform(79.4,48.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.hero3_eyelashes1_img();
	this.instance_2.setTransform(76.9,47,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.hero3_shadows5_img();
	this.instance_3.setTransform(74.8,40.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 3
	this.instance_4 = new lib.hero3_lips2_img();
	this.instance_4.setTransform(83.7,68.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 4
	this.instance_5 = new lib.hero3_rouge6_img();
	this.instance_5.setTransform(74.2,55.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// head
	this.instance_6 = new lib.hero3_head();
	this.instance_6.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// dr
	this.instance_7 = new lib.hero_3_dress_main_mc();
	this.instance_7.setTransform(98.9,278.3,1,1,0,0,0,95.3,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// sh
	this.instance_8 = new lib.hero3_shoes_1();
	this.instance_8.setTransform(60.1,472.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// socks
	this.instance_9 = new lib.hero_3_socks_main_mc();
	this.instance_9.setTransform(90,363.8,1,1,0,0,0,-2.6,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// body
	this.instance_10 = new lib.hero3_body2();
	this.instance_10.setTransform(0,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// ears
	this.instance_11 = new lib.hero3_ears();
	this.instance_11.setTransform(29.2,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// wings
	this.instance_12 = new lib.hero3_wings1_img();
	this.instance_12.setTransform(-61,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.9,-30,420.9,610.6);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero2_accessory_all();
	this.accessory.setTransform(53.5,197);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero2_glasses();
	this.headdress.setTransform(99,36.6,1,1,0,0,0,30.4,24.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all();
	this.fringe.setTransform(94.7,47.4,1,1,0,0,0,0,3.4);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all();
	this.eyes.setTransform(96.5,51.5,0.5,0.5,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero2_eyelashes_all();
	this.eyelashes.setTransform(96.5,51.5,0.5,0.5,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all();
	this.shadows.setTransform(96.4,51.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all();
	this.lips.setTransform(94.6,75.2,0.5,0.5,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all();
	this.blush.setTransform(96.5,58.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance = new lib.hero2_eyebrows();
	this.instance.setTransform(76.6,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero2_head0();
	this.instance_1.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// top
	this.top = new lib.hero2_top_all();
	this.top.setTransform(87.9,136.5,1,1,0,0,0,218,-27);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero2_bottom_all();
	this.bottom.setTransform(93.6,235.3,1,1,0,0,0,223.7,71.8);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all();
	this.dress.setTransform(89.5,200.8,1,1,0,0,0,191,29);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero2_shoes_all();
	this.shoes.setTransform(86.6,520.8,1,1,0,0,0,90.7,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// stockings
	this.stockings = new lib.hero2_socks_all();
	this.stockings.setTransform(89.9,363.7,1,1,0,0,0,-1.1,-40.3);

	this.timeline.addTween(cjs.Tween.get(this.stockings).wait(1));

	// body
	this.instance_2 = new lib.hero2_body2();
	this.instance_2.setTransform(-8.1,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dressSecond
	this.dressSecond = new lib.hero2_dress_allback();
	this.dressSecond.setTransform(89.5,200.8,1,1,0,0,0,191,29);

	this.timeline.addTween(cjs.Tween.get(this.dressSecond).wait(1));

	// ears
	this.instance_3 = new lib.hero2_ears();
	this.instance_3.setTransform(49.3,-16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all();
	this.hair.setTransform(105.7,11.4,1,1,0,0,0,11,-32.6);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// wings
	this.wings = new lib.g2_wings();
	this.wings.setTransform(96.6,142.1,1,1,0,0,0,158.6,121.4);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155.9,-41,497.8,608);
p.frameBounds = [rect];


(lib.hero_2_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_fringe0();
	this.instance.setTransform(-74.4,-501.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all();
	this.eyes.setTransform(15.4,-416.9,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero2_eyelashes_all();
	this.eyelashes.setTransform(15.4,-416.9,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all();
	this.shadows.setTransform(15.1,-417.7);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all();
	this.lips.setTransform(11.5,-369.4);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all();
	this.blush.setTransform(15.3,-403.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.h2_d0();
	this.instance_1.setTransform(-204.3,-349.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero2_body1();
	this.instance_2.setTransform(-193.9,-571.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-204.3,-571.9,449,769);
p.frameBounds = [rect];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hf
	this.instance = new lib.hero2_fringe2_img();
	this.instance.setTransform(49.3,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.hero2_eyes3_img();
	this.instance_1.setTransform(79.9,48.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 6
	this.instance_2 = new lib.hero2_eyelashes1_img();
	this.instance_2.setTransform(76.2,45.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(74.7,42.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 4
	this.instance_4 = new lib.hero2_lips3_img();
	this.instance_4.setTransform(83.9,68.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 5
	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(73.6,49,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 7
	this.instance_6 = new lib.hero2_eyebrows();
	this.instance_6.setTransform(76.6,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// head
	this.instance_7 = new lib.hero2_head0();
	this.instance_7.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// dr
	this.instance_8 = new lib.hero_2_dress_main_mc();
	this.instance_8.setTransform(89.5,200.8,1,1,0,0,0,191,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// sh
	this.instance_9 = new lib.hero2_shoes_3_img();
	this.instance_9.setTransform(50.4,439.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// socks
	this.instance_10 = new lib.hero2_socks1_img();
	this.instance_10.setTransform(44.9,271);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// body
	this.instance_11 = new lib.hero2_body2();
	this.instance_11.setTransform(-8.1,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// ears
	this.instance_12 = new lib.hero2_ears();
	this.instance_12.setTransform(49.3,-16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// hb
	this.instance_13 = new lib.hero2_hair2_img();
	this.instance_13.setTransform(57,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// wings
	this.instance_14 = new lib.hero2_wings1_img();
	this.instance_14.setTransform(-102.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155.9,-41,497.8,608);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero1_accessory_all();
	this.accessory.setTransform(-24.4,120.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe();
	this.fringe.setTransform(94.7,67.1,1,1,0,0,0,34.8,59.8);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all();
	this.eyes.setTransform(97,52.8,0.501,0.501,0,0,180,-0.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero1_eyelashes_all();
	this.eyelashes.setTransform(97,52.8,0.501,0.501,0,0,180,-0.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadow_all();
	this.shadows.setTransform(96.4,51.2,0.501,0.501,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all();
	this.lips.setTransform(94.5,75.2,0.501,0.501,0,0,180,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all();
	this.blush.setTransform(96.5,58.6,0.501,0.501,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance = new lib.hero1_eyebrows_img();
	this.instance.setTransform(76.6,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero1_head0();
	this.instance_1.setTransform(71.1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// top
	this.top = new lib.hero1_top_all();
	this.top.setTransform(86.5,142.7,1,1,0,0,0,138,-103);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero1_bottom_all();
	this.bottom.setTransform(100.5,253.7,1,1,0,0,0,152,8);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all();
	this.dress.setTransform(84.1,193.9,1,1,0,0,0,209.3,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero1_shoes_all();
	this.shoes.setTransform(84,502.5,1,1,0,0,0,96,15);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// stockings
	this.stockings = new lib.hero1_socks();
	this.stockings.setTransform(84.1,307.9,1,1,0,0,0,125.4,236);

	this.timeline.addTween(cjs.Tween.get(this.stockings).wait(1));

	// body
	this.instance_2 = new lib.hero1_body2();
	this.instance_2.setTransform(-41.9,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// ears
	this.instance_3 = new lib.hero1_ears();
	this.instance_3.setTransform(53.1,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hair
	this.hair = new lib.hero1_hair();
	this.hair.setTransform(94.7,67.1,1,1,0,0,0,34.8,59.8);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// wings
	this.wings = new lib.hero1_wings();
	this.wings.setTransform(35.3,121.2,1,1,0,0,0,97.8,88.2);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-13.4,310,570.1);
p.frameBounds = [rect];


(lib.hero_1_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_fringe0();
	this.instance.setTransform(-90.5,-516.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all();
	this.eyes.setTransform(-25.6,-425.3,1,1,0,0,0,-0.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// eyelashes
	this.eyelashes = new lib.hero1_eyelashes_all();
	this.eyelashes.setTransform(-25.6,-425.3,1,1,0,0,0,-0.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.eyelashes).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadow_all();
	this.shadows.setTransform(-24.6,-428.4);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all();
	this.lips.setTransform(-20.6,-380.6);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all();
	this.blush.setTransform(-24.8,-413.8);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.h1d0();
	this.instance_1.setTransform(-214.5,-342.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero1_body1();
	this.instance_2.setTransform(-251.9,-557.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-251.9,-557.9,504,754);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.514,0.514,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.h3_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_socks2_img();
	this.instance.setTransform(-42.5,-149.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-2.6,-165.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-197.8,98,294.7);
p.frameBounds = [rect];


(lib.h3_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_socks1_img();
	this.instance.setTransform(-59.5,-163.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-2.6,-165.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-197.8,119,395.7);
p.frameBounds = [rect];


(lib.h3_d6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress6_img();
	this.instance.setTransform(-102,-212.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero3_dress6_back_img();
	this.instance_1.setTransform(-39,109.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.hanger1();
	this.instance_2.setTransform(0.3,-175.1,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-212.8,257,445);
p.frameBounds = [rect];


(lib.h3_d5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress5_img();
	this.instance.setTransform(-88,-177.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(0.3,-175.1,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-207.1,204,257.3);
p.frameBounds = [rect];


(lib.h3_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress4_img();
	this.instance.setTransform(-115,-175.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(0.3,-175.1,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-207.1,244,257.3);
p.frameBounds = [rect];


(lib.h3_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress3_img();
	this.instance.setTransform(-74,-184.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero3_dress3_back_img();
	this.instance_1.setTransform(-72,-90.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.hanger1();
	this.instance_2.setTransform(0.3,-175.1,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-207.1,170,344.3);
p.frameBounds = [rect];


(lib.h3_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress2_img();
	this.instance.setTransform(-163,-189.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero3_dress2_back_img();
	this.instance_1.setTransform(-163,67.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.hanger1();
	this.instance_2.setTransform(0.3,-175.1,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163,-207.1,340,460.2);
p.frameBounds = [rect];


(lib.h3_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(-176,-185.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(0.3,-175.1,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176,-207.1,352,414.3);
p.frameBounds = [rect];


(lib.h2_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top3_img();
	this.instance.setTransform(-32.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-51.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.1,-83.6,98,159.6);
p.frameBounds = [rect];


(lib.h2_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top2_img();
	this.instance.setTransform(-40.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-51.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.1,-83.6,110.6,108.6);
p.frameBounds = [rect];


(lib.h2_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-99.5,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-51.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.5,-93,199,186);
p.frameBounds = [rect];


(lib.h2_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_socks2_img();
	this.instance.setTransform(-47.7,-109.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-1.6,-125.6,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-157.6,98,314.3);
p.frameBounds = [rect];


(lib.h2_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_socks1_img();
	this.instance.setTransform(-47.7,-109.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-1.6,-125.6,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-157.6,98,315.3);
p.frameBounds = [rect];


(lib.h2_d6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress6_img();
	this.instance.setTransform(-94,-93.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(4.7,-94.7,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-126.8,224,277.6);
p.frameBounds = [rect];


(lib.h2_d5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress5_img();
	this.instance.setTransform(-73,-125.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(4.7,-94.7,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-126.8,170,261.6);
p.frameBounds = [rect];


(lib.h2_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(-202,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(4.7,-94.7,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202,-126.8,441,505.6);
p.frameBounds = [rect];


(lib.h2_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-100,-141.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_dress3_back();
	this.instance_1.setTransform(-57,72.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.hanger1();
	this.instance_2.setTransform(4.7,-94.7,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-141.2,230,473);
p.frameBounds = [rect];


(lib.h2_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(-93,-142.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(4.7,-94.7,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-142.2,220,473);
p.frameBounds = [rect];


(lib.h2_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-114,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(4.7,-94.7,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-126.8,228,253.6);
p.frameBounds = [rect];


(lib.h2_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom3_img();
	this.instance.setTransform(-80.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-51.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-83.6,163,124.6);
p.frameBounds = [rect];


(lib.h2_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom2_img();
	this.instance.setTransform(-59.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-51.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-83.6,122,139.6);
p.frameBounds = [rect];


(lib.h2_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(-49.5,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-51.5,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-83.6,107,108.6);
p.frameBounds = [rect];


(lib.h1_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top3_img();
	this.instance.setTransform(-104,-49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-38.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104,-70.9,213,174.8);
p.frameBounds = [rect];


(lib.h1_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top2_img();
	this.instance.setTransform(-117,-47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-38.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-70.9,236,173.8);
p.frameBounds = [rect];


(lib.h1_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-65,-49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-38.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-70.9,130,141.8);
p.frameBounds = [rect];


(lib.h1_s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_socks3_img();
	this.instance.setTransform(-49,-153.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-3.6,-174.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-206.9,102,413.8);
p.frameBounds = [rect];


(lib.h1_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_socks2_img();
	this.instance.setTransform(-41,-162.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-3.6,-174.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-206.9,98,289.8);
p.frameBounds = [rect];


(lib.h1_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_socks1_img();
	this.instance.setTransform(-49,-153.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-3.6,-174.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-206.9,102,413.8);
p.frameBounds = [rect];


(lib.h1_d6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress6_img();
	this.instance.setTransform(-124,-68.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(4.3,-83.6,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124,-115.6,253,245.3);
p.frameBounds = [rect];


(lib.h1_d5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress5_img();
	this.instance.setTransform(-101,-97.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(4.3,-83.6,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-115.6,216,280.3);
p.frameBounds = [rect];


(lib.h1_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress4_img();
	this.instance.setTransform(-129,-97.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(4.3,-83.6,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129,-115.6,293,273.3);
p.frameBounds = [rect];


(lib.h1_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress3_img();
	this.instance.setTransform(-93,-91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(4.3,-83.6,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-115.6,206,250.3);
p.frameBounds = [rect];


(lib.h1_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-132,-93.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(4.3,-83.6,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132,-115.6,253,223.3);
p.frameBounds = [rect];


(lib.h1_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-113,-85.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(4.3,-83.6,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-115.6,226,231.3);
p.frameBounds = [rect];


(lib.h1_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom3_img();
	this.instance.setTransform(-130,-40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-38.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-70.9,290,179.8);
p.frameBounds = [rect];


(lib.h1_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom2_img();
	this.instance.setTransform(-74,-39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-38.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-70.9,161,126.8);
p.frameBounds = [rect];


(lib.h1_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom1_img();
	this.instance.setTransform(-81,-40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(1.3,-38.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-70.9,184,136.8);
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
	this.instance.setTransform(-1.5,206.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmCLLIjfvwIHLmkIFrAAIGNIWIj0N+g");
	this.shape.setTransform(-0.4,62);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.5,-9.5,257,448.6);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d6();
	this.instance.setTransform(-5.5,126.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApCVWIpjktIGh+/IH6oPIFbABIIbHYII6cOIksFxIsHDzg");
	this.shape.setTransform(12.9,134.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.1,-9.7,238.1,289.3);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d6();
	this.instance.setTransform(-5.5,115.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwzOmIj64fITMp2IE0ABIRbaoIifHHIpGFkIvkALg");
	this.shape.setTransform(-2.1,118);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.7,-8.4,265.3,253.7);
p.frameBounds = [rect];


(lib.dress_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d5();
	this.instance.setTransform(-1.4,207.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,0,204,257.3);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d5();
	this.instance.setTransform(-6.5,126.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuGTJMAB9giwIEzmXIMegCIDiD+MAFcAj2ItkENg");
	this.shape.setTransform(5.7,129.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.6,-11.8,180.6,281.9);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d5();
	this.instance.setTransform(-5,115.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtSWPIk2qEIHP+bIHekhIG9gBIH7HXIGscpImKJlg");
	this.shape.setTransform(1.9,139.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.2,-6.2,232.3,292);
p.frameBounds = [rect];


(lib.dress_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d4();
	this.instance.setTransform(-1.4,207.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnGKHIjJrQIKKpyICsACIHpJ8IhAL5g");
	this.shape.setTransform(-4.3,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.5,-10.6,244,268);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d4();
	this.instance.setTransform(-7,126.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AidOmIpjw3IKwseIEugCIIiGVIngXOg");
	this.shape.setTransform(-6.9,87.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-209,-7,441,512.6);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d4();
	this.instance.setTransform(-5,115.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwqV/In2mtIDg5CIMPs+IJyABMAXgAkyIqdIqg");
	this.shape.setTransform(15.2,137.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.8,-7.9,314,291.1);
p.frameBounds = [rect];


(lib.dress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d3();
	this.instance.setTransform(-0.9,207.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArfERIDQsnIHSmUIEPgBIG/JEIBPNGIijGjIvQAqg");
	this.shape.setTransform(-6.2,85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.7,-9,174.8,353.4);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d3();
	this.instance.setTransform(-6.5,126.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjtZSMgO/gijIPut/IRKicIEgF4MgM6Athg");
	this.shape.setTransform(4.3,137.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.4,-26.8,239.4,485.4);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d3();
	this.instance.setTransform(-5.5,115.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aw8QHIBu16IJLu3IMHgEMAK5AjzIpEFMIuiAeg");
	this.shape.setTransform(6.4,124.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.1,-8.1,217.1,265.6);
p.frameBounds = [rect];


(lib.dress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d2();
	this.instance.setTransform(-1,207.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmQNsIji0aIG9nOIFhgBIHHKJIj0Ryg");
	this.shape.setTransform(-1.2,80.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-164,-8.8,340,469);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d2();
	this.instance.setTransform(-6,126.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgTaAmEMAHmgscIl7shIDJnbIRdsJILUGvMgC4At2IIHYVg");
	this.shape.setTransform(8.6,217);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.6,-29.1,248.6,492.4);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d2();
	this.instance.setTransform(-5.5,115.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApbPiIr/1+ITXsbII4gCIOmezIyvG/g");
	this.shape.setTransform(-7.4,114.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.5,-6.8,274.3,242);
p.frameBounds = [rect];


(lib.dress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d1();
	this.instance.setTransform(-1.5,207.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmHX7In+2oICwxMIINoBIElAAIG8H9IFtRzIqcWFg");
	this.shape.setTransform(8.2,143.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177.5,-9.4,352,423.7);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d1();
	this.instance.setTransform(-6,126.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyWN3IC/4MIONqUIIHgEIE2DPIGkeHIlYGDIzCCCg");
	this.shape.setTransform(-6,126.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-5.8,235.1,265.3);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d1();
	this.instance.setTransform(-5.5,115.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmISaIsJlWIC9xkIMTuhIIGABINNYAIgOJsIsqEWg");
	this.shape.setTransform(-5,114.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.1,-6.9,234.2,243.7);
p.frameBounds = [rect];


(lib.bottom_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_b3();
	this.instance.setTransform(0.5,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AonMYIhQs8IHesEIEFAAIIMNRIhTMAg");
	this.shape.setTransform(2.6,71.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-9,126.6,161.9);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b3();
	this.instance.setTransform(-2.5,83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtwJAIJm0HIIJAAIJySmIsnDpg");
	this.shape.setTransform(-1.6,62.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-8.5,176.3,142.6);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b3();
	this.instance.setTransform(-2,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3GIQIAelfIR7x8IHygBIT2QBIAMESIssJmI1zAgg");
	this.shape.setTransform(11.5,90.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.4,-7.2,295.9,194.7);
p.frameBounds = [rect];


(lib.bottom_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_b2();
	this.instance.setTransform(0.5,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzIwIFav1IHAoLICFAAIGtG6IGbNUIkQJjIw1Awg");
	this.shape.setTransform(3.1,90.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.3,-7.2,176.9,195.6);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b2();
	this.instance.setTransform(-3.5,83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApEKvIhbkVIC9qiIGin7IDwgCIHwLtIgYJ4IidCmg");
	this.shape.setTransform(-2.8,68.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-8.5,134.5,154.8);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b2();
	this.instance.setTransform(-2,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At6EPIHuu7IJggDIKnOaIh9GKI2iA7g");
	this.shape.setTransform(4.9,63.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.2,-4.9,178.4,137.6);
p.frameBounds = [rect];


(lib.bottom_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_b1();
	this.instance.setTransform(0,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AomKvIgXrGIHVquIDLAAIHbK+IhDLNg");
	this.shape.setTransform(1,63.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.4,-7.5,114.9,142.2);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b1();
	this.instance.setTransform(-2.5,83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApaHeIChxhIMxgFIDiOYIq8F5g");
	this.shape.setTransform(-1.4,56.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-8.5,120.6,129.9);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b1();
	this.instance.setTransform(-2,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlIL8IrEmgIMMxYIGgAAINtRiIs2GWg");
	this.shape.setTransform(9,69);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.7,-7.5,207.6,153);
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
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-22.5,-22.5,45,45), new cjs.Rectangle(-26.7,-26.7,53.6,53.6), new cjs.Rectangle(-31,-31,62.2,62.2), new cjs.Rectangle(-35.3,-35.3,70.7,70.7), new cjs.Rectangle(-39.6,-39.6,79.3,79.3), new cjs.Rectangle(-43.9,-43.9,87.9,87.9), new cjs.Rectangle(-48.2,-48.2,96.4,96.4), new cjs.Rectangle(-52.5,-52.5,105,105), new cjs.Rectangle(-49.9,-49.9,100,100), new cjs.Rectangle(-47.4,-47.4,95,95), new cjs.Rectangle(-45,-45,90,90)];


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
	this.substrate_mc.setTransform(0.1,0,0.514,0.514,0,0,0,0.2,0);

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
	this.instance.setTransform(0,0,0.952,0.952);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvmH0IAAvnIfNAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-52.3,200,104.7);
p.frameBounds = [rect, new cjs.Rectangle(-105,-55,210,110), new cjs.Rectangle(-100,-52.3,200,104.7), new cjs.Rectangle(-100,-50,200,100)];


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
	this.instance.setTransform(0,0,0.952,0.952);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvmH0IAAvnIfNAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-52.3,200,104.7);
p.frameBounds = [rect, new cjs.Rectangle(-105,-55,210,110), new cjs.Rectangle(-100,-52.3,200,104.7), new cjs.Rectangle(-100,-50,200,100)];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_mc();
	this.instance.setTransform(0,0,0.952,0.952);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvmH0IAAvnIfNAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-52.3,200,104.7);
p.frameBounds = [rect, new cjs.Rectangle(-105,-55,210,110), new cjs.Rectangle(-100,-52.3,200,104.7), new cjs.Rectangle(-100,-50,200,100)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();
	this.instance.setTransform(0,0,0.952,0.952);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvmH0IAAvnIfNAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-52.3,200,104.7);
p.frameBounds = [rect, new cjs.Rectangle(-105,-55,210,110), new cjs.Rectangle(-100,-52.3,200,104.7), new cjs.Rectangle(-100,-50,200,100)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_mc();
	this.instance.setTransform(0,0,0.952,0.952);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvmH0IAAvnIfNAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-52.3,200,104.7);
p.frameBounds = [rect, new cjs.Rectangle(-105,-55,210,110), new cjs.Rectangle(-100,-52.3,200,104.7), new cjs.Rectangle(-100,-50,200,100)];


(lib.next_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.next_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},14).to({scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-55,210,110);
p.frameBounds = [rect, new cjs.Rectangle(-104.6,-54.8,209.3,109.6), new cjs.Rectangle(-104.2,-54.6,208.6,109.3), new cjs.Rectangle(-103.9,-54.4,207.9,108.9), new cjs.Rectangle(-103.5,-54.2,207.2,108.5), new cjs.Rectangle(-103.2,-54,206.5,108.1), new cjs.Rectangle(-102.8,-53.8,205.7,107.7), new cjs.Rectangle(-102.5,-53.6,205,107.4), new cjs.Rectangle(-102.1,-53.5,204.3,107), new cjs.Rectangle(-101.7,-53.3,203.6,106.6), new cjs.Rectangle(-101.4,-53.1,202.9,106.2), new cjs.Rectangle(-101,-52.9,202.1,105.8), new cjs.Rectangle(-100.7,-52.7,201.5,105.5), new cjs.Rectangle(-100.3,-52.5,200.7,105.1), new cjs.Rectangle(-100,-52.3,200,104.7), new cjs.Rectangle(-100.2,-52.5,200.5,105), new cjs.Rectangle(-100.4,-52.6,201,105.2), new cjs.Rectangle(-100.7,-52.7,201.5,105.5), new cjs.Rectangle(-100.9,-52.9,202,105.8), new cjs.Rectangle(-101.2,-53,202.5,106), new cjs.Rectangle(-101.4,-53.1,203,106.3), new cjs.Rectangle(-101.7,-53.3,203.5,106.6), new cjs.Rectangle(-101.9,-53.4,204,106.8), new cjs.Rectangle(-102.2,-53.5,204.5,107.1), new cjs.Rectangle(-102.4,-53.6,205,107.4), new cjs.Rectangle(-102.7,-53.8,205.5,107.6), new cjs.Rectangle(-102.9,-53.9,206,107.9), new cjs.Rectangle(-103.2,-54,206.5,108.2), new cjs.Rectangle(-103.4,-54.2,207,108.4), new cjs.Rectangle(-103.7,-54.3,207.5,108.7), new cjs.Rectangle(-103.9,-54.4,208,109), new cjs.Rectangle(-104.2,-54.5,208.5,109.2), new cjs.Rectangle(-104.4,-54.7,209,109.5), new cjs.Rectangle(-104.7,-54.8,209.5,109.8), new cjs.Rectangle(-105,-55,210,110)];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({x:5},15).to({x:-5},20).to({x:0},15).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am5JYQhBAAguguQgvguAAhCIAAtzQAAhBAvgvQAuguBBAAINzAAQBBAAAvAuQAtAvABBBIAANzQgBBCgtAuQgvAuhBAAg");
	this.shape.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50.5,-60,120.5,120), new cjs.Rectangle(-51,-60,121,120), new cjs.Rectangle(-51.5,-60,121.5,120), new cjs.Rectangle(-52,-60,122,120), new cjs.Rectangle(-52.5,-60,122.5,120), new cjs.Rectangle(-53,-60,123,120), new cjs.Rectangle(-53.5,-60,123.5,120), new cjs.Rectangle(-54,-60,124,120), new cjs.Rectangle(-54.5,-60,124.5,120), new cjs.Rectangle(-55,-60,125,120), new cjs.Rectangle(-54.6,-60,124.7,120), new cjs.Rectangle(-54.3,-60,124.4,120), new cjs.Rectangle(-54,-60,124,120), new cjs.Rectangle(-53.6,-60,123.7,120), new cjs.Rectangle(-53.3,-60,123.4,120), new cjs.Rectangle(-53,-60,123,120), new cjs.Rectangle(-52.6,-60,122.7,120), new cjs.Rectangle(-52.3,-60,122.4,120), new cjs.Rectangle(-52,-60,122,120), new cjs.Rectangle(-51.6,-60,121.7,120), new cjs.Rectangle(-51.3,-60,121.4,120), new cjs.Rectangle(-51,-60,121,120), new cjs.Rectangle(-50.6,-60,120.7,120), new cjs.Rectangle(-50.3,-60,120.4,120), new cjs.Rectangle(-50,-60,120,120)];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();
	this.instance.setTransform(0,0,0.952,0.952);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvmH0IAAvnIfNAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-52.3,200,104.7);
p.frameBounds = [rect, new cjs.Rectangle(-105,-55,210,110), new cjs.Rectangle(-100,-52.3,200,104.7), new cjs.Rectangle(-100,-50,200,100)];


(lib.more_games_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_6_2_mc();
	this.instance.setTransform(42.5,1,1,1,0,0,0,42.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.66,skewY:-16.5},19).to({scaleX:1,skewY:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-63,86,125);
p.frameBounds = [rect, new cjs.Rectangle(-41.3,-62.9,84.5,126.2), new cjs.Rectangle(-39.8,-63,82.9,127.3), new cjs.Rectangle(-38.2,-63,81.3,128.6), new cjs.Rectangle(-36.6,-63,79.7,129.6), new cjs.Rectangle(-35,-63,78.1,130.9), new cjs.Rectangle(-33.4,-63,76.4,131.8), new cjs.Rectangle(-31.7,-63.1,74.8,132.9), new cjs.Rectangle(-30,-63,73.1,133.7), new cjs.Rectangle(-28.4,-63,71.4,134.8), new cjs.Rectangle(-26.7,-63.1,69.8,135.5), new cjs.Rectangle(-25.1,-63,68,136.4), new cjs.Rectangle(-23.3,-63,66.4,137.1), new cjs.Rectangle(-21.7,-63,64.6,137.9), new cjs.Rectangle(-20,-63.1,62.9,138.5), new cjs.Rectangle(-18.2,-63.1,61.2,139.2), new cjs.Rectangle(-16.5,-63,59.5,139.6), new cjs.Rectangle(-14.8,-63,57.7,140.2), new cjs.Rectangle(-13.1,-63.1,56,140.6), new cjs.Rectangle(-11.5,-63.1,54.3,141.1), new cjs.Rectangle(-13,-63.1,56,140.6), new cjs.Rectangle(-14.7,-63.1,57.6,140.2), new cjs.Rectangle(-16.2,-63.1,59.2,139.8), new cjs.Rectangle(-18,-63,60.9,139.1), new cjs.Rectangle(-19.5,-63,62.5,138.6), new cjs.Rectangle(-21.1,-63,64.1,138.1), new cjs.Rectangle(-22.8,-63,65.8,137.3), new cjs.Rectangle(-24.4,-63.1,67.4,136.7), new cjs.Rectangle(-26,-63,69,136), new cjs.Rectangle(-27.6,-63,70.6,135.3), new cjs.Rectangle(-29.2,-63,72.2,134.3), new cjs.Rectangle(-30.8,-63,73.8,133.5), new cjs.Rectangle(-32.3,-63.1,75.3,132.6), new cjs.Rectangle(-33.9,-63,76.9,131.5), new cjs.Rectangle(-35.4,-63,78.5,130.6), new cjs.Rectangle(-37,-63,80,129.6), new cjs.Rectangle(-38.5,-63,81.5,128.3), new cjs.Rectangle(-40,-63,83.1,127.3), new cjs.Rectangle(-41.5,-63,84.5,126.2), new cjs.Rectangle(-43,-63,86,125)];


(lib.more_games_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_5_2_mc();
	this.instance.setTransform(42.5,1,1,1,0,0,0,42.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.66,skewY:-16.5},19).to({scaleX:1,skewY:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-63,86,126);
p.frameBounds = [rect, new cjs.Rectangle(-41.3,-62.9,84.5,127.2), new cjs.Rectangle(-39.8,-63,82.9,128.3), new cjs.Rectangle(-38.2,-63,81.3,129.6), new cjs.Rectangle(-36.6,-63,79.7,130.6), new cjs.Rectangle(-35,-63,78.1,131.9), new cjs.Rectangle(-33.4,-63,76.4,132.8), new cjs.Rectangle(-31.7,-63.1,74.8,133.9), new cjs.Rectangle(-30,-63,73.1,134.7), new cjs.Rectangle(-28.4,-63,71.4,135.8), new cjs.Rectangle(-26.7,-63.1,69.8,136.5), new cjs.Rectangle(-25.1,-63,68,137.4), new cjs.Rectangle(-23.3,-63,66.4,138.1), new cjs.Rectangle(-21.7,-63,64.6,138.9), new cjs.Rectangle(-20,-63.1,62.9,139.5), new cjs.Rectangle(-18.2,-63.1,61.2,140.2), new cjs.Rectangle(-16.5,-63,59.5,140.6), new cjs.Rectangle(-14.8,-63,57.7,141.2), new cjs.Rectangle(-13.1,-63.1,56,141.6), new cjs.Rectangle(-11.5,-63.1,54.3,142.1), new cjs.Rectangle(-13,-63.1,56,141.6), new cjs.Rectangle(-14.7,-63.1,57.6,141.2), new cjs.Rectangle(-16.2,-63.1,59.2,140.8), new cjs.Rectangle(-18,-63,60.9,140.1), new cjs.Rectangle(-19.5,-63,62.5,139.6), new cjs.Rectangle(-21.1,-63,64.1,139.1), new cjs.Rectangle(-22.8,-63,65.8,138.3), new cjs.Rectangle(-24.4,-63.1,67.4,137.7), new cjs.Rectangle(-26,-63,69,137), new cjs.Rectangle(-27.6,-63,70.6,136.3), new cjs.Rectangle(-29.2,-63,72.2,135.3), new cjs.Rectangle(-30.8,-63,73.8,134.5), new cjs.Rectangle(-32.3,-63.1,75.3,133.6), new cjs.Rectangle(-33.9,-63,76.9,132.5), new cjs.Rectangle(-35.4,-63,78.5,131.6), new cjs.Rectangle(-37,-63,80,130.6), new cjs.Rectangle(-38.5,-63,81.5,129.3), new cjs.Rectangle(-40,-63,83.1,128.3), new cjs.Rectangle(-41.5,-63,84.5,127.2), new cjs.Rectangle(-43,-63,86,126)];


(lib.more_games_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_4_2_mc();
	this.instance.setTransform(-8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.more_games_5_2_img();
	this.instance_1.setTransform(22.5,-45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.more_games_4_2_mc();
	this.instance_2.setTransform(72.2,0.5,0.875,1,0,-3,177);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-64.4,164.1,128.8);
p.frameBounds = [rect];


(lib.more_games_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_3_2_mc();
	this.instance.setTransform(-8,0);

	this.instance_1 = new lib.more_games_3_2_img();
	this.instance_1.setTransform(22.5,-45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.more_games_3_2_mc();
	this.instance_2.setTransform(72.6,0.3,0.875,1,0,-3.8,176.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-65.1,165.2,130.7);
p.frameBounds = [rect];


(lib.more_games_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_2_mc();
	this.instance.setTransform(24.9,25.8,0.407,0.407,0,-25.5,154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.more_games_1_2_mc();
	this.instance_1.setTransform(-57.2,-16.3,0.426,0.426,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.more_games_1_2_img();
	this.instance_2.setTransform(-90.2,-39.8,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.3,-50.7,144.8,153.8);
p.frameBounds = [rect];


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
	this.instance.setTransform(0,0,0.952,0.952);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvmH0IAAvnIfNAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-52.3,200,104.7);
p.frameBounds = [rect, new cjs.Rectangle(-105,-55,210,110), new cjs.Rectangle(-100,-52.3,200,104.7), new cjs.Rectangle(-100,-50,200,100)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();
	this.instance.setTransform(0,0,0.952,0.952);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvmH0IAAvnIfNAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.952,scaleY:0.952,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-52.3,200,104.7);
p.frameBounds = [rect, new cjs.Rectangle(-105,-55,210,110), new cjs.Rectangle(-100,-52.3,200,104.7), new cjs.Rectangle(-100,-50,200,100)];


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


(lib.top_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_top3();
	this.instance.setTransform(1.3,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqyHEIEtyKIMeAAIEaSSIrYD7g");
	this.shape.setTransform(-0.2,65.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.3,-5.5,138.4,142.4);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t3();
	this.instance.setTransform(-1.9,83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApAhsIH2rjIDXgBIG0KmIj7P6Ip9ABg");
	this.shape.setTransform(-1.5,74.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.2,-10.3,115.6,169.9);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t3();
	this.instance.setTransform(-2.5,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArAF6IlamRIJguuIIMAAIPJX/IkwGMg");
	this.shape.setTransform(13.4,90.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-6.5,225.1,193.2);
p.frameBounds = [rect];


(lib.top_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_top2();
	this.instance.setTransform(0.8,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsMJkIFDwBIFzmpIFKAAIFCHhIDXQ0Ii4BuI0UAKg");
	this.shape.setTransform(-4.8,75.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.9,-8,156.3,168);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t2();
	this.instance.setTransform(-2.2,83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmIJtIiuo5IHBqqIC4AAIH0LMIl0Ihg");
	this.shape.setTransform(-0.2,54.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-9,119.3,126.2);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t2();
	this.instance.setTransform(-2,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjYI8IwppkISbtiIE6gLIQuZsIgUCaIlVAlg");
	this.shape.setTransform(-5.2,85.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.4,-6.5,256.5,183.8);
p.frameBounds = [rect];


(lib.top_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_top1();
	this.instance.setTransform(0,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoXCLIGVq6IEzACIFnKtIiYGtIrwADg");
	this.shape.setTransform(0,46.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.6,-9.1,107.3,112.1);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t1();
	this.instance.setTransform(-2.5,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsqPOIkCsGIBuk/INQrrIJTiBIJIFCIgkDeIpiLhIvDLGg");
	this.shape.setTransform(-3.9,80.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.8,-19.2,213.9,199.3);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t1();
	this.instance.setTransform(-2.5,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApcIxIhui4IFuyLIMZgEIENUmIi3EHg");
	this.shape.setTransform(-3.3,74.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-4.5,143,158.4);
p.frameBounds = [rect];


(lib.stockings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s3();
	this.instance.setTransform(2.5,206.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao/2bIHCqwIDiAAIHbL0MgFWA2fIqIAEg");
	this.shape.setTransform(3.2,205.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.3,-6.5,115.2,424.9);
p.frameBounds = [rect];


(lib.stockings_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_s2();
	this.instance.setTransform(1.5,197.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmKYNMgCjgmKIHcqcIDNAAIGyKnMgFiAmMg");
	this.shape.setTransform(0.3,147.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-8.9,111.7,312.6);
p.frameBounds = [rect];


(lib.stockings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_s2();
	this.instance.setTransform(0.5,157.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aouu8IGlq4IEFAAIGzKOMgFbApUIo9AHg");
	this.shape.setTransform(0.4,158.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-6.4,111.9,330.7);
p.frameBounds = [rect];


(lib.stockings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s2();
	this.instance.setTransform(2.5,206.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoftVIHPqjIDWAAIGaJ8MgG0AlxImJAEg");
	this.shape.setTransform(-0.8,146.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.2,-6,108.9,305.9);
p.frameBounds = [rect];


(lib.stockings_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_s1();
	this.instance.setTransform(1,197.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgHEAgfMgCzg1hIHnrYIFGgEIHCMwMgFNA0Ng");
	this.shape.setTransform(1,198.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.2,-9.4,126.5,415.9);
p.frameBounds = [rect];


(lib.stockings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_s1();
	this.instance.setTransform(0,157.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmCZmMgC+goKIHorKIC3gBIHiK1MgGJAoqg");
	this.shape.setTransform(0.1,155.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.6,-9.2,115.5,329.6);
p.frameBounds = [rect];


(lib.stockings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s1();
	this.instance.setTransform(2.5,206.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgIpAg3MAAAg5FIGxotIDyAAIGFJ+IArKJMgE2Atwg");
	this.shape.setTransform(3,206.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-4.7,110.9,421.7);
p.frameBounds = [rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(6,92);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_6_img();
	this.instance_1.setTransform(-140,-160);

	this.instance_2 = new lib.location_1_6_img();
	this.instance_2.setTransform(-140,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtGXcQjpAAijilQikijgBjpIAA9VQABjpCkijQCjilDpAAIaNAAQDpAACjClQCkCjABDpIAAdVQgBDpikCjQijCljpAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-160,280,320);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(6,92);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_5_img();
	this.instance_1.setTransform(-140,-160);

	this.instance_2 = new lib.location_1_5_img();
	this.instance_2.setTransform(-140,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtGXcQjpAAijilQikijgBjpIAA9VQABjpCkijQCjilDpAAIaNAAQDpAACjClQCkCjABDpIAAdVQgBDpikCjQijCljpAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-160,280,320);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(6,92);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-140,-160);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-140,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtGXcQjpAAijilQikijgBjpIAA9VQABjpCkijQCjilDpAAIaNAAQDpAACjClQCkCjABDpIAAdVQgBDpikCjQijCljpAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-160,280,320);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(6,92);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-140,-160);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-140,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtGXcQjpAAijilQikijgBjpIAA9VQABjpCkijQCjilDpAAIaNAAQDpAACjClQCkCjABDpIAAdVQgBDpikCjQijCljpAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-160,280,320);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(6,92);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-140,-160);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-140,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtGXcQjpAAijilQikijgBjpIAA9VQABjpCkijQCjilDpAAIaNAAQDpAACjClQCkCjABDpIAAdVQgBDpikCjQijCljpAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-160,280,320);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(6,92);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-140,-160);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-140,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtGXcQjpAAijilQikijgBjpIAA9VQABjpCkijQCjilDpAAIaNAAQDpAACjClQCkCjABDpIAAdVQgBDpikCjQijCljpAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-160,280,320);
p.frameBounds = [rect, rect, rect];


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
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(603.5,323.2,1,1,0,0,0,87.5,272.2);

	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(195.5,317.2,1,1,0,0,180,87.5,272.2);

	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(393.5,317.2,1,1,0,0,0,87.5,272.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_2,p:{x:393.5,y:317.2}},{t:this.hero_1,p:{x:195.5,y:317.2}},{t:this.hero_3,p:{x:603.5,y:323.2}}]}).to({state:[{t:this.hero_1,p:{x:404.5,y:322.2}}]},1).to({state:[{t:this.hero_2,p:{x:392.5,y:322.2}}]},1).to({state:[{t:this.hero_3,p:{x:395.5,y:322.2}}]},1).to({state:[{t:this.hero_2,p:{x:603.5,y:317.2}},{t:this.hero_1,p:{x:406.5,y:317.2}},{t:this.hero_3,p:{x:184.5,y:323.2}}]},1).to({state:[{t:this.hero_1,p:{x:404.5,y:322.2}}]},1).to({state:[{t:this.hero_2,p:{x:392.5,y:322.2}}]},1).to({state:[{t:this.hero_3,p:{x:395.5,y:322.2}}]},1).to({state:[{t:this.hero_2,p:{x:603.5,y:317.2}},{t:this.hero_3,p:{x:394.5,y:317.2}},{t:this.hero_1,p:{x:195.5,y:317.2}}]},1).to({state:[{t:this.hero_1,p:{x:404.5,y:322.2}}]},1).to({state:[{t:this.hero_2,p:{x:392.5,y:322.2}}]},1).to({state:[{t:this.hero_3,p:{x:395.5,y:322.2}}]},1).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_4_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_5_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,631.7);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,606.7), new cjs.Rectangle(-200,0,1200,617), new cjs.Rectangle(-200,0,1200,630.7), new cjs.Rectangle(-200,0,1200,631.7), new cjs.Rectangle(-200,0,1200,606.7), new cjs.Rectangle(-200,0,1200,617), new cjs.Rectangle(-200,0,1200,630.7), new cjs.Rectangle(-200,0,1200,625.7), new cjs.Rectangle(-200,0,1200,606.7), new cjs.Rectangle(-200,0,1200,617), new cjs.Rectangle(-200,0,1200,630.7)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_3_main_mc();
	this.instance.setTransform(603.5,327.2,1,1,0,0,0,87.5,272.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero_1_main_mc();
	this.instance_1.setTransform(195.5,327.2,1,1,0,0,180,87.5,272.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero_2_main_mc();
	this.instance_2.setTransform(392,317,1,1,-2,0,0,87.5,272.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(35.5,-4.9,771.5,640.4);
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
	this.lips_6.setTransform(200,-260);

	this.lips_5 = new lib.lips_5_3_mc();
	this.lips_5.setTransform(200,70);

	this.lips_4 = new lib.lips_4_3_mc();
	this.lips_4.setTransform(300,-70);

	this.lips_3 = new lib.lips_3_3_mc();
	this.lips_3.setTransform(200,-90);

	this.lips_2 = new lib.lips_2_3_mc();
	this.lips_2.setTransform(300,-230);

	this.lips_1 = new lib.lips_1_3_mc();
	this.lips_1.setTransform(300,90);

	this.blush_6 = new lib.blush_6_3_mc();
	this.blush_6.setTransform(-200,65);

	this.blush_5 = new lib.blush_5_3_mc();
	this.blush_5.setTransform(-300,90);

	this.blush_4 = new lib.blush_4_3_mc();
	this.blush_4.setTransform(-200,-95);

	this.blush_3 = new lib.blush_3_3_mc();
	this.blush_3.setTransform(-300,-70);

	this.blush_2 = new lib.blush_2_3_mc();
	this.blush_2.setTransform(-200,-255);

	this.blush_1 = new lib.blush_1_3_mc();
	this.blush_1.setTransform(-300,-230);

	this.eyelashes_6 = new lib.eyelashes_6_3_mc();
	this.eyelashes_6.setTransform(245,5);

	this.eyelashes_5 = new lib.eyelashes_5_3_mc();
	this.eyelashes_5.setTransform(240,-50);

	this.eyelashes_4 = new lib.eyelashes_4_3_mc();
	this.eyelashes_4.setTransform(245,-100);

	this.eyelashes_3 = new lib.eyelashes_3_3_mc();
	this.eyelashes_3.setTransform(250,-155);

	this.eyelashes_2 = new lib.eyelashes_2_3_mc();
	this.eyelashes_2.setTransform(255,-210);

	this.eyelashes_1 = new lib.eyelashes_1_3_mc();
	this.eyelashes_1.setTransform(245,55);

	this.shadows_6 = new lib.shadows_6_3_mc();
	this.shadows_6.setTransform(-200,70);

	this.shadows_5 = new lib.shadows_5_3_mc();
	this.shadows_5.setTransform(-300,-230);

	this.shadows_4 = new lib.shadows_4_3_mc();
	this.shadows_4.setTransform(-200,-95);

	this.shadows_3 = new lib.shadows_3_3_mc();
	this.shadows_3.setTransform(-300,-70);

	this.shadows_2 = new lib.shadows_2_3_mc();
	this.shadows_2.setTransform(-200,-250);

	this.shadows_1 = new lib.shadows_1_3_mc();
	this.shadows_1.setTransform(-300,90);

	this.eyes_6 = new lib.eyes_6_3_mc();
	this.eyes_6.setTransform(-260,-160);

	this.eyes_5 = new lib.eyes_5_3_mc();
	this.eyes_5.setTransform(250,-70);

	this.eyes_4 = new lib.eyes_4_3_mc();
	this.eyes_4.setTransform(260,-160);

	this.eyes_3 = new lib.eyes_3_3_mc();
	this.eyes_3.setTransform(-240,20);

	this.eyes_2 = new lib.eyes_2_3_mc();
	this.eyes_2.setTransform(-250,-70);

	this.eyes_1 = new lib.eyes_1_3_mc();
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
	this.lips_6.setTransform(200,-260);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(200,70);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(300,-70);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(200,-90);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(300,-230);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(300,90);

	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(-200,65);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(-300,90);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(-200,-95);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(-300,-70);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(-200,-255);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-300,-230);

	this.eyelashes_6 = new lib.eyelashes_6_2_mc();
	this.eyelashes_6.setTransform(255,-215);

	this.eyelashes_5 = new lib.eyelashes_5_2_mc();
	this.eyelashes_5.setTransform(235,2);

	this.eyelashes_4 = new lib.eyelashes_4_2_mc();
	this.eyelashes_4.setTransform(245,-50);

	this.eyelashes_3 = new lib.eyelashes_3_2_mc();
	this.eyelashes_3.setTransform(245,-105);

	this.eyelashes_2 = new lib.eyelashes_2_2_mc();
	this.eyelashes_2.setTransform(250,-160);

	this.eyelashes_1 = new lib.eyelashes_1_2_mc();
	this.eyelashes_1.setTransform(240,55);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(-200,70);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(-300,-230);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(-200,-95);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-300,-70);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(-200,-250);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-300,90);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(-260,-160);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(250,-70);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(260,-160);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(-240,20);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(-250,-70);

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
	this.lips_6.setTransform(200,-260);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(200,70);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(300,-70);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(200,-90);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(300,-230);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(300,90);

	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(-200,65);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(-300,90);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(-200,-95);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(-300,-70);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(-200,-255);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-300,-230);

	this.eyelashes_6 = new lib.eyelashes_6_1_mc();
	this.eyelashes_6.setTransform(230,55);

	this.eyelashes_5 = new lib.eyelashes_5_1_mc();
	this.eyelashes_5.setTransform(235,0);

	this.eyelashes_4 = new lib.eyelashes_4_1_mc();
	this.eyelashes_4.setTransform(240,-55);

	this.eyelashes_3 = new lib.eyelashes_3_1_mc();
	this.eyelashes_3.setTransform(250,-110);

	this.eyelashes_2 = new lib.eyelashes_2_1_mc();
	this.eyelashes_2.setTransform(260,-165);

	this.eyelashes_1 = new lib.eyelashes_1_1_mc();
	this.eyelashes_1.setTransform(270,-220);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(-300,-230);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-200,70);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(-200,-95);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-300,-70);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(-200,-250);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-300,90);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(-260,-160);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(250,-70);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(260,-160);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(-240,20);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(-250,-70);

	this.eyes_1 = new lib.eyes_1_1_mc();
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


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.body_check_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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
p.nominalBounds = rect = new cjs.Rectangle(-320,-160,640,320);
p.frameBounds = [rect];


(lib.body_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,-450);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(19).to({y:100},15).to({y:0},5).wait(11));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(180,-450);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(29).to({y:100},15).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-610,640,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-320,-610,640,356.7), new cjs.Rectangle(-320,-610,640,393.4), new cjs.Rectangle(-320,-610,640,430), new cjs.Rectangle(-320,-610,640,466.7), new cjs.Rectangle(-320,-610,640,503.4), new cjs.Rectangle(-320,-610,640,540), new cjs.Rectangle(-320,-610,640,576.7), new cjs.Rectangle(-320,-610,640,613.4), new cjs.Rectangle(-320,-610,640,650), new cjs.Rectangle(-320,-610,640,686.7), new cjs.Rectangle(-320,-573.3,640,686.7), new cjs.Rectangle(-320,-536.6,640,686.7), new cjs.Rectangle(-320,-500,640,686.7), new cjs.Rectangle(-320,-463.3,640,686.7), new cjs.Rectangle(-320,-426.6,640,686.7), new cjs.Rectangle(-320,-390,640,630), new cjs.Rectangle(-320,-353.3,640,573.4), new cjs.Rectangle(-320,-316.6,640,516.7), new cjs.Rectangle(-320,-280,640,460), new cjs.Rectangle(-320,-243.3,640,403.4), new cjs.Rectangle(-320,-206.6,640,366.7), new cjs.Rectangle(-320,-170,640,330), new cjs.Rectangle(-320,-160,640,346.7), new cjs.Rectangle(-320,-160,640,383.4), new cjs.Rectangle(-320,-160,640,420), new cjs.Rectangle(-320,-160,640,400), new cjs.Rectangle(-320,-160,640,380), new cjs.Rectangle(-320,-160,640,360), new cjs.Rectangle(-320,-160,640,340), new cjs.Rectangle(-320,-160,640,320)];


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
p.nominalBounds = rect = new cjs.Rectangle(-320,-160,640,320);
p.frameBounds = [rect];


(lib.body_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-180,-450);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(19).to({y:100},15).to({y:0},5).wait(11));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(180,-450);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(29).to({y:100},15).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-610,640,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-320,-610,640,356.7), new cjs.Rectangle(-320,-610,640,393.4), new cjs.Rectangle(-320,-610,640,430), new cjs.Rectangle(-320,-610,640,466.7), new cjs.Rectangle(-320,-610,640,503.4), new cjs.Rectangle(-320,-610,640,540), new cjs.Rectangle(-320,-610,640,576.7), new cjs.Rectangle(-320,-610,640,613.4), new cjs.Rectangle(-320,-610,640,650), new cjs.Rectangle(-320,-610,640,686.7), new cjs.Rectangle(-320,-573.3,640,686.7), new cjs.Rectangle(-320,-536.6,640,686.7), new cjs.Rectangle(-320,-500,640,686.7), new cjs.Rectangle(-320,-463.3,640,686.7), new cjs.Rectangle(-320,-426.6,640,686.7), new cjs.Rectangle(-320,-390,640,630), new cjs.Rectangle(-320,-353.3,640,573.4), new cjs.Rectangle(-320,-316.6,640,516.7), new cjs.Rectangle(-320,-280,640,460), new cjs.Rectangle(-320,-243.3,640,403.4), new cjs.Rectangle(-320,-206.6,640,366.7), new cjs.Rectangle(-320,-170,640,330), new cjs.Rectangle(-320,-160,640,346.7), new cjs.Rectangle(-320,-160,640,383.4), new cjs.Rectangle(-320,-160,640,420), new cjs.Rectangle(-320,-160,640,400), new cjs.Rectangle(-320,-160,640,380), new cjs.Rectangle(-320,-160,640,360), new cjs.Rectangle(-320,-160,640,340), new cjs.Rectangle(-320,-160,640,320)];


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
p.nominalBounds = rect = new cjs.Rectangle(-320,-160,640,320);
p.frameBounds = [rect];


(lib.body_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,-450);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({y:100},15).to({y:0},5).wait(11));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,-450);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({y:100},15).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-610,640,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-320,-610,640,356.7), new cjs.Rectangle(-320,-610,640,393.4), new cjs.Rectangle(-320,-610,640,430), new cjs.Rectangle(-320,-610,640,466.7), new cjs.Rectangle(-320,-610,640,503.4), new cjs.Rectangle(-320,-610,640,540), new cjs.Rectangle(-320,-610,640,576.7), new cjs.Rectangle(-320,-610,640,613.4), new cjs.Rectangle(-320,-610,640,650), new cjs.Rectangle(-320,-610,640,686.7), new cjs.Rectangle(-320,-573.3,640,686.7), new cjs.Rectangle(-320,-536.6,640,686.7), new cjs.Rectangle(-320,-500,640,686.7), new cjs.Rectangle(-320,-463.3,640,686.7), new cjs.Rectangle(-320,-426.6,640,686.7), new cjs.Rectangle(-320,-390,640,630), new cjs.Rectangle(-320,-353.3,640,573.4), new cjs.Rectangle(-320,-316.6,640,516.7), new cjs.Rectangle(-320,-280,640,460), new cjs.Rectangle(-320,-243.3,640,403.4), new cjs.Rectangle(-320,-206.6,640,366.7), new cjs.Rectangle(-320,-170,640,330), new cjs.Rectangle(-320,-160,640,346.7), new cjs.Rectangle(-320,-160,640,383.4), new cjs.Rectangle(-320,-160,640,420), new cjs.Rectangle(-320,-160,640,400), new cjs.Rectangle(-320,-160,640,380), new cjs.Rectangle(-320,-160,640,360), new cjs.Rectangle(-320,-160,640,340), new cjs.Rectangle(-320,-160,640,320)];


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
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-60,120,120);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.909,0.909,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-54.5,109.1,109.1);
p.frameBounds = [rect];


(lib.next_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,120,120);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.4,-54.5,109.1,109.1);
p.frameBounds = [rect];


(lib.next_2_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_2_mc();

	this.instance_1 = new lib.next_1_2_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvmH0IAAvnIfNAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.952,scaleY:0.952,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-55,210,110);
p.frameBounds = [rect, rect, new cjs.Rectangle(-100,-52.3,200,104.7), new cjs.Rectangle(-100,-50,200,100)];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_0_2_mc();
	this.instance.setTransform(18,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-75.7,144.8,153.8);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,631.7);
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
p.nominalBounds = rect = new cjs.Rectangle(-320,-610,640,320);
p.frameBounds = [rect, new cjs.Rectangle(-320,-160,640,320), new cjs.Rectangle(-320,-610,640,320), new cjs.Rectangle(-320,-160,640,320), new cjs.Rectangle(-320,-610,640,320), new cjs.Rectangle(-320,-160,640,320)];


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


(lib.hairstyle_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_3_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_3_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_3_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_3_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_3_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_3_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(5,64,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-95,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-105,190,210);
p.frameBounds = [rect];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(50,160);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-50,160);

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
	this.next_mc.setTransform(50,160);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-50,160);

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
	this.next_mc.setTransform(50,160);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-50,160);

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
	this.stockings_0 = new lib.stockings_0_mc();
	this.stockings_0.setTransform(187,-220);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-190,-220);

	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(187,-80);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(187,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.stockings_0}]},6).to({state:[{t:this.accessory_0},{t:this.wings_0},{t:this.headdress_0}]},1).wait(1));

	// options
	this.hair_3 = new lib.hairstyle_3_3_mc();
	this.hair_3.setTransform(-70,70);

	this.hair_2 = new lib.hairstyle_2_3_mc();
	this.hair_2.setTransform(70,-40);

	this.hair_1 = new lib.hairstyle_1_3_mc();
	this.hair_1.setTransform(-70,-150);

	this.hair_6 = new lib.hairstyle_6_3_mc();
	this.hair_6.setTransform(-70,70);

	this.hair_5 = new lib.hairstyle_5_3_mc();
	this.hair_5.setTransform(70,-40);

	this.hair_4 = new lib.hairstyle_4_3_mc();
	this.hair_4.setTransform(-70,-150);

	this.dress_6 = new lib.dress_6_3_mc();
	this.dress_6.setTransform(70,-235);

	this.dress_2 = new lib.dress_2_3_mc();
	this.dress_2.setTransform(-70,-235);

	this.shoes_6 = new lib.shoes_6_3_mc();
	this.shoes_6.setTransform(-130,122);

	this.shoes_4 = new lib.shoes_4_3_mc();
	this.shoes_4.setTransform(50,70);

	this.shoes_3 = new lib.shoes_3_3_mc();
	this.shoes_3.setTransform(-50,70);

	this.shoes_2 = new lib.shoes_2_3_mc();
	this.shoes_2.setTransform(130,120);

	this.dress_4 = new lib.dress_4_3_mc();
	this.dress_4.setTransform(70,-235);

	this.dress_3 = new lib.dress_3_3_mc();
	this.dress_3.setTransform(-70,-235);

	this.shoes_1 = new lib.shoes_1_3_mc();
	this.shoes_1.setTransform(67,133);

	this.dress_1 = new lib.dress_1_3_mc();
	this.dress_1.setTransform(70,-235);

	this.shoes_5 = new lib.shoes_5_3_mc();
	this.shoes_5.setTransform(-130,123);

	this.dress_5 = new lib.dress_5_3_mc();
	this.dress_5.setTransform(-70,-235);

	this.top_1 = new lib.top_1_3_mc();
	this.top_1.setTransform(0,-235);

	this.top_3 = new lib.top_3_3_mc();
	this.top_3.setTransform(110,-235);

	this.bottom_1 = new lib.bottom_1_3_mc();
	this.bottom_1.setTransform(-90,-75);

	this.bottom_3 = new lib.bottom_3_3_mc();
	this.bottom_3.setTransform(90,-75);

	this.bottom_2 = new lib.bottom_2_3_mc();
	this.bottom_2.setTransform(0,-75);

	this.top_2 = new lib.top_2_3_mc();
	this.top_2.setTransform(-110,-235);

	this.stockings_2 = new lib.stockings_2_3_mc();
	this.stockings_2.setTransform(70,-235);

	this.stockings_1 = new lib.stockings_1_3_mc();
	this.stockings_1.setTransform(-70,-235);

	this.accessory_1 = new lib.accessory_1_3_mc();
	this.accessory_1.setTransform(70,-180);

	this.headdress_1 = new lib.headdress_1_3_mc();
	this.headdress_1.setTransform(-70,-170);

	this.wings_2 = new lib.wings_2_3_mc();
	this.wings_2.setTransform(0,105);

	this.wings_1 = new lib.wings_1_3_mc();
	this.wings_1.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_2},{t:this.dress_6}]},1).to({state:[{t:this.dress_3},{t:this.dress_4},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.shoes_6}]},1).to({state:[{t:this.dress_5},{t:this.shoes_5},{t:this.dress_1},{t:this.shoes_1}]},1).to({state:[{t:this.top_2},{t:this.bottom_2},{t:this.bottom_3},{t:this.bottom_1},{t:this.top_3},{t:this.top_1}]},1).to({state:[{t:this.stockings_1},{t:this.stockings_2}]},1).to({state:[{t:this.wings_1},{t:this.wings_2},{t:this.headdress_1},{t:this.accessory_1}]},1).wait(1));

	// decor
	this.instance = new lib.stick_0_mc();
	this.instance.setTransform(0,70);

	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,-150);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,-40);

	this.instance_3 = new lib.stick_0_mc();
	this.instance_3.setTransform(0,-220);

	this.instance_4 = new lib.shelf_0_mc();
	this.instance_4.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{y:-40}},{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:70}}]}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{y:-40}},{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:70}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance_4,p:{y:160}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance_1,p:{y:60}},{t:this.instance,p:{y:-80}},{t:this.instance_4,p:{y:-160}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,430);
p.frameBounds = [rect, rect, new cjs.Rectangle(-234,-244.5,457.5,469.8), new cjs.Rectangle(-200,-245.6,400,433.7), new cjs.Rectangle(-200,-244.4,444.5,432.4), new cjs.Rectangle(-200,-244.1,400,432.2), new cjs.Rectangle(-200,-244.4,405,432.4), new cjs.Rectangle(-208,-238,413,407.2)];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.stockings_0 = new lib.stockings_0_mc();
	this.stockings_0.setTransform(187,-220);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-190,-220);

	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(187,-80);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(187,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.stockings_0}]},6).to({state:[{t:this.accessory_0},{t:this.wings_0},{t:this.headdress_0}]},1).wait(1));

	// options
	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(-70,70);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(70,-40);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(-70,-150);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(-70,70);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(70,-40);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(-70,-150);

	this.shoes_4 = new lib.shoes_4_2_mc();
	this.shoes_4.setTransform(-130,105);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(-80,-235);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(80,-235);

	this.shoes_2 = new lib.shoes_2_2_mc();
	this.shoes_2.setTransform(-50,55);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(80,-235);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(-80,-235);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(-80,-235);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(80,-235);

	this.shoes_1 = new lib.shoes_1_2_mc();
	this.shoes_1.setTransform(120,140);

	this.shoes_6 = new lib.shoes_6_2_mc();
	this.shoes_6.setTransform(-40,140);

	this.shoes_5 = new lib.shoes_5_2_mc();
	this.shoes_5.setTransform(40,120);

	this.shoes_3 = new lib.shoes_3_2_mc();
	this.shoes_3.setTransform(-120,115);

	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(-110,-235);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(110,-235);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(0,-235);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(100,-75);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(0,-75);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(-100,-75);

	this.stockings_2 = new lib.stockings_2_2_mc();
	this.stockings_2.setTransform(70,-235);

	this.stockings_1 = new lib.stockings_1_2_mc();
	this.stockings_1.setTransform(-70,-235);

	this.wings_2 = new lib.wings_2_2_mc();
	this.wings_2.setTransform(0,80);

	this.wings_1 = new lib.wings_1_2_mc();
	this.wings_1.setTransform(0,-45);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(-70,-165);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(70,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.shoes_2},{t:this.dress_2},{t:this.dress_5},{t:this.shoes_4}]},1).to({state:[{t:this.dress_4},{t:this.dress_3}]},1).to({state:[{t:this.shoes_3},{t:this.shoes_5},{t:this.shoes_6},{t:this.shoes_1},{t:this.dress_6},{t:this.dress_1}]},1).to({state:[{t:this.bottom_1},{t:this.bottom_2},{t:this.bottom_3},{t:this.top_1},{t:this.top_3},{t:this.top_2}]},1).to({state:[{t:this.stockings_1},{t:this.stockings_2}]},1).to({state:[{t:this.accessory_1},{t:this.headdress_1},{t:this.wings_1},{t:this.wings_2}]},1).wait(1));

	// decor
	this.instance = new lib.stick_0_mc();
	this.instance.setTransform(0,70);

	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,-150);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,-40);

	this.instance_3 = new lib.stick_0_mc();
	this.instance_3.setTransform(0,-220);

	this.instance_4 = new lib.shelf_0_mc();
	this.instance_4.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{y:-40}},{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:70}}]}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{y:-40}},{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:70}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance_4,p:{y:160}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance_1,p:{y:60}},{t:this.instance,p:{y:-80}},{t:this.instance_4,p:{y:-160}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,430);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,-264.1,413,492.4), new cjs.Rectangle(-289,-261.8,493,532.5), new cjs.Rectangle(-203.5,-244.7,415.5,432.8), new cjs.Rectangle(-200,-254.2,400,442.2), new cjs.Rectangle(-200,-244.2,405,432.2), new cjs.Rectangle(-208,-238,413,411.5)];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.stockings_0 = new lib.stockings_0_mc();
	this.stockings_0.setTransform(187,-220);

	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(187,-80);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(187,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.stockings_0}]},6).to({state:[{t:this.accessory_0},{t:this.wings_0}]},1).wait(1));

	// options
	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(-70,70);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(70,-40);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(-70,-150);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(-70,70);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(70,-40);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(-70,-150);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(-80,-235);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(80,-235);

	this.shoes_4 = new lib.shoes_4_1_mc();
	this.shoes_4.setTransform(100,126);

	this.shoes_3 = new lib.shoes_3_1_mc();
	this.shoes_3.setTransform(0,70);

	this.shoes_2 = new lib.shoes_2_1_mc();
	this.shoes_2.setTransform(-100,118);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-80,-235);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(80,-235);

	this.shoes_6 = new lib.shoes_6_1_mc();
	this.shoes_6.setTransform(80,115);

	this.shoes_5 = new lib.shoes_5_1_mc();
	this.shoes_5.setTransform(-80,110);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(80,-235);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(-80,-235);

	this.shoes_1 = new lib.shoes_1_1_mc();
	this.shoes_1.setTransform(0,118);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(0,-235);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(100,-235);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(-110,-235);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(100,-75);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(-100,-75);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(0,-75);

	this.stockings_3 = new lib.stockings_3_1_mc();
	this.stockings_3.setTransform(110,-235);

	this.stockings_2 = new lib.stockings_2_1_mc();
	this.stockings_2.setTransform(0,-235);

	this.stockings_1 = new lib.stockings_1_1_mc();
	this.stockings_1.setTransform(-110,-235);

	this.wings_1 = new lib.wings_1_1_mc();
	this.wings_1.setTransform(0,-77);

	this.wings_2 = new lib.wings_2_1_mc();
	this.wings_2.setTransform(0,58);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(0,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.dress_2},{t:this.dress_6}]},1).to({state:[{t:this.shoes_5},{t:this.shoes_6},{t:this.dress_4},{t:this.dress_3}]},1).to({state:[{t:this.shoes_1},{t:this.dress_5},{t:this.dress_1}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_2},{t:this.bottom_1},{t:this.top_2},{t:this.top_3},{t:this.top_1}]},1).to({state:[{t:this.stockings_1},{t:this.stockings_2},{t:this.stockings_3}]},1).to({state:[{t:this.accessory_1},{t:this.wings_2},{t:this.wings_1}]},1).wait(1));

	// decor
	this.instance = new lib.stick_0_mc();
	this.instance.setTransform(0,70);

	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,-150);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,-40);

	this.instance_3 = new lib.stick_0_mc();
	this.instance_3.setTransform(0,-220);

	this.instance_4 = new lib.shelf_0_mc();
	this.instance_4.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{y:-40}},{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:70}}]}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{y:-40}},{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:70}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance_4,p:{y:160}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance,p:{y:-220}},{t:this.instance_4,p:{y:160}}]},1).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance_1,p:{y:60}},{t:this.instance,p:{y:-80}},{t:this.instance_4,p:{y:-160}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,430);
p.frameBounds = [rect, rect, new cjs.Rectangle(-214.7,-243.4,424.4,437.3), new cjs.Rectangle(-200,-243.1,452.2,431.1), new cjs.Rectangle(-200,-241.9,400,430), new cjs.Rectangle(-243.4,-241.5,462,429.6), new cjs.Rectangle(-200,-241.5,405,429.6), new cjs.Rectangle(-200,-240,405,409.8)];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,430);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,430);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-255,400,430);
p.frameBounds = [rect];


(lib.moreGames_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnuHvQjMjOgBkhQABkgDMjOQDNjMEhgBQEiABDNDMQDMDOABEgQgBEhjMDOQjNDMkiABQkhgBjNjMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-75.7,144.8,153.8);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-70,-70,140,140)];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(85,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(690,470);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(690,550,0.87,0.869);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.credits_btn},{t:this.instruction_btn},{t:this._moreGames_btn},{t:this.play_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(370,510);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_decor_mc();
	this.instance_1.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(410.9,308.6,1,1,0,0,0,410.9,308.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_5_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,932);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,520);
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
	this.locations_mc.setTransform(400,290);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.398;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-320,1200,1075);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(100,550);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(100,460);
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
	this.playAgain_btn.setTransform(690,450);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(690,540);
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
	this.instance.alpha = 0.102;
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
	this.hero_3 = new lib.hero_3_makeup_mc();
	this.hero_3.setTransform(388.7,595,1,1,0,0,0,0.7,0);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-261.3,820,1068.9);
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

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_1_mc.setTransform(400,380);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_2 = new lib.hero_2_makeup_mc();
	this.hero_2.setTransform(386.6,590,1,1,0,0,0,0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-261.3,820,1048.4);
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

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_1_mc.setTransform(400,380);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.hero_1_makeup_mc();
	this.hero_1.setTransform(422,595);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-261.3,820,1052.5);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(160,550);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(640,550,0.905,0.905);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1116.4);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(160,550);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(640,550,0.905,0.905);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1116.4);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(160,550);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(640,550,0.905,0.905);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1116.4);
p.frameBounds = [rect];


(lib.dressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(190,0);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-253.6,-550,507.3,827);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(190,0);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-253.6,-550,507.3,827);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(190,0);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-253.6,-550,507.3,827);
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
	this.dressupPanel_1_mc.setTransform(260,340);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(618.7,330,0.955,0.955,0,0,0,87.7,272.3);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.4,-261.3,806.4,885.7);
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
	this.dressupPanel_1_mc.setTransform(260,340);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(608.6,329.8,0.954,0.954,0,0,0,87.6,272.2);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.4,-261.3,844.9,878.4);
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
	this.dressupPanel_1_mc.setTransform(260,340);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(622.2,325.9,0.947,0.947,0,0,180,87.5,272.2);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.4,-261.3,757.8,878.4);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(730,520);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260,550,0.905,0.905);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1116.4);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(730,520);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260,550,0.905,0.905);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1116.4);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(730,520);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260,550,0.905,0.905);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1116.4);
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
	this.instance_5.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();

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
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-76.9,1200,929.3), new cjs.Rectangle(-200,-320,1200,1072.4), rect=new cjs.Rectangle(-200,-261.3,1200,1113.7), rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-490,1200,1181.5), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(30.7,18.4,380.7,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1400,0,1200,600), rect=null, rect, rect];


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