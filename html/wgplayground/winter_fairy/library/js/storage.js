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
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_7", frames: [[0,0,600,600],[0,602,1199,299]]},
		{name:"storage_atlas_8", frames: [[0,0,837,409],[0,411,1200,260],[0,673,730,336]]},
		{name:"storage_atlas_9", frames: [[554,559,552,422],[0,559,552,422],[0,357,1200,200],[0,0,686,355]]},
		{name:"storage_atlas_10", frames: [[0,424,363,501],[365,503,363,501],[554,0,363,501],[0,0,552,422],[730,503,409,441],[919,0,360,489]]},
		{name:"storage_atlas_11", frames: [[402,0,500,300],[0,784,380,380],[904,0,380,380],[0,402,380,380],[402,302,380,380],[784,382,380,380],[382,684,380,380],[764,764,380,380],[0,0,400,400]]},
		{name:"storage_atlas_12", frames: [[0,764,340,300],[342,768,340,300],[382,382,356,384],[740,382,276,422],[382,0,380,380],[0,0,380,380],[764,0,380,380],[0,382,380,380],[0,1070,460,220],[684,1028,460,220],[684,806,460,220]]},
		{name:"storage_atlas_13", frames: [[0,444,460,220],[462,666,460,220],[462,444,460,220],[462,222,460,220],[462,0,460,220],[462,888,460,220],[0,0,460,220],[0,222,460,220],[0,666,460,220],[0,888,460,220]]},
		{name:"storage_atlas_14", frames: [[0,941,300,300],[775,0,300,300],[0,0,460,220],[715,624,260,260],[0,222,380,260],[748,886,260,260],[1010,718,260,260],[1010,980,260,260],[977,456,260,260],[462,0,311,295],[210,484,224,410],[1077,0,198,454],[0,484,208,455],[748,302,215,320],[302,896,232,375],[436,297,254,320],[436,619,277,266],[536,887,210,343]]},
		{name:"storage_atlas_15", frames: [[0,0,260,260],[262,0,260,260],[262,262,229,291],[493,262,229,291],[724,262,229,291],[440,555,189,290],[173,555,265,231],[631,555,193,254],[0,524,171,367],[1048,0,217,311],[1058,598,230,210],[1058,810,230,210],[826,810,230,210],[869,1022,230,210],[405,847,230,210],[232,1059,230,210],[826,598,230,210],[637,1022,230,210],[0,1000,230,210],[173,788,230,210],[0,262,260,260],[786,0,260,260],[524,0,260,260],[955,313,224,283]]},
		{name:"storage_atlas_16", frames: [[905,636,209,227],[696,871,270,169],[1116,636,171,273],[696,636,207,233],[232,636,230,210],[928,424,230,210],[696,212,230,210],[464,1060,230,210],[232,848,230,210],[464,424,230,210],[232,212,230,210],[232,1060,230,210],[464,636,230,210],[464,212,230,210],[928,212,230,210],[696,424,230,210],[464,848,230,210],[0,1060,230,210],[232,424,230,210],[0,424,230,210],[464,0,230,210],[0,636,230,210],[696,0,230,210],[928,0,230,210],[0,848,230,210],[0,0,230,210],[0,212,230,210],[232,0,230,210],[696,1042,240,180],[938,1042,240,180]]},
		{name:"storage_atlas_17", frames: [[676,1028,190,190],[1020,534,190,190],[484,546,155,240],[868,1078,182,191],[726,506,292,136],[1026,726,220,160],[641,644,190,190],[1026,888,186,188],[1052,1078,194,178],[484,836,190,190],[484,1028,190,190],[676,836,190,190],[726,182,240,180],[0,1092,240,180],[242,0,240,180],[0,364,240,180],[0,546,240,180],[726,0,240,180],[242,182,240,180],[484,0,240,180],[0,728,240,180],[484,182,240,180],[968,0,240,180],[968,182,240,180],[0,910,240,180],[0,182,240,180],[242,364,240,180],[0,0,240,180],[242,728,240,180],[242,546,240,180],[242,910,240,180],[242,1092,240,180],[484,364,240,180],[1028,364,221,168],[726,364,300,140],[868,726,156,226]]},
		{name:"storage_atlas_18", frames: [[0,860,180,180],[754,410,120,120],[754,532,120,120],[1120,486,120,120],[876,654,120,120],[1120,608,120,120],[998,730,120,120],[744,1010,120,120],[681,1132,120,120],[754,654,120,120],[998,486,120,120],[803,1132,120,120],[0,132,180,180],[998,608,120,120],[750,898,207,65],[866,972,207,65],[866,1039,207,65],[1075,1032,207,65],[1075,1099,207,65],[925,1233,207,65],[925,1166,207,65],[0,314,180,180],[1120,730,120,120],[584,708,120,120],[628,830,120,120],[750,776,120,120],[501,0,197,159],[497,305,155,136],[700,0,184,163],[370,138,112,144],[182,299,161,183],[552,1010,190,79],[994,852,121,118],[616,443,84,196],[1016,198,89,200],[464,859,162,107],[1117,940,152,90],[511,1161,168,99],[1117,852,166,86],[853,198,161,114],[876,410,120,120],[182,935,280,80],[371,585,220,80],[886,116,340,80],[400,1017,150,142],[702,409,50,297],[0,1042,187,171],[182,576,187,132],[182,138,186,159],[474,443,140,140],[189,1126,180,120],[872,776,120,120],[497,161,149,142],[371,1161,138,134],[345,299,150,142],[0,496,180,180],[0,678,180,180],[396,667,186,94],[1107,390,186,94],[796,314,186,94],[396,763,186,94],[1107,198,186,94],[1107,294,186,94],[654,267,140,140],[648,165,203,100],[189,1017,209,107],[182,822,205,111],[182,710,212,110],[262,0,237,136],[464,968,380,40],[182,484,290,90],[876,532,120,120],[0,0,260,130],[886,0,261,114]]},
		{name:"storage_atlas_19", frames: [[851,464,82,104],[794,464,55,169],[540,252,61,164],[681,691,39,114],[968,408,56,148],[726,464,66,143],[887,177,76,141],[941,0,62,175],[0,689,43,109],[0,583,73,104],[615,136,50,50],[423,798,48,48],[201,794,57,41],[937,796,57,41],[142,794,57,41],[579,596,107,60],[470,596,107,60],[935,464,27,93],[294,695,26,65],[286,259,74,74],[369,628,23,60],[644,786,35,69],[177,628,53,118],[770,642,182,34],[0,0,207,65],[0,67,207,65],[209,0,207,65],[418,0,207,65],[627,0,207,65],[209,67,207,65],[703,67,90,50],[523,136,90,50],[754,806,48,48],[1005,36,16,16],[1005,0,14,34],[603,354,154,59],[523,67,178,67],[416,252,122,85],[908,320,35,76],[550,658,49,117],[954,676,41,118],[965,558,56,116],[232,628,93,65],[204,259,80,124],[705,190,180,60],[0,196,180,60],[523,190,180,60],[0,134,180,60],[703,128,180,60],[182,134,180,60],[177,596,220,30],[0,800,40,40],[232,695,60,60],[601,724,60,60],[45,727,60,60],[107,727,60,60],[369,692,60,60],[431,736,60,60],[416,194,95,35],[266,777,95,35],[813,744,95,35],[169,757,95,35],[493,777,95,35],[45,789,95,35],[813,781,95,35],[997,676,25,111],[617,786,25,111],[396,754,25,111],[910,744,25,111],[590,786,25,111],[369,754,25,111],[493,736,52,31],[965,177,44,229],[759,354,40,55],[885,128,40,43],[1005,72,10,11],[399,596,69,94],[75,586,100,73],[754,744,57,60],[807,320,99,100],[667,136,23,38],[795,67,31,31],[342,514,50,50],[327,628,40,147],[364,134,50,210],[102,259,100,100],[804,818,40,40],[846,818,40,40],[681,823,40,40],[42,826,40,40],[310,814,40,40],[84,826,40,40],[473,814,40,40],[126,837,40,40],[515,814,40,40],[168,837,40,40],[470,658,78,76],[418,67,103,125],[836,0,103,126],[688,609,80,80],[807,252,78,64],[601,658,78,64],[770,678,78,64],[632,502,78,64],[850,678,78,64],[75,661,78,64],[0,258,100,100],[114,514,112,70],[0,511,112,70],[404,502,112,70],[228,514,112,70],[518,502,112,70],[851,570,112,70],[182,196,171,61],[1005,54,16,16],[260,814,48,48],[603,252,100,100],[342,574,380,20],[286,346,240,40],[0,427,240,40],[0,385,240,40],[242,388,240,40],[484,418,240,40],[484,460,240,40],[726,422,240,40],[242,430,240,40],[0,469,200,40],[202,472,200,40],[705,252,100,100],[722,691,30,130]]}
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
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
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
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blesk = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.body1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.body2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.body2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.butterfly1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.butterfly2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.butterfly3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.check_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.check_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.check_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.check_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.check_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.check_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.check_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.check_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.check_hairstyle_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.closet1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.closet1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.current_location_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyes3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyes4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.eyes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.eyes5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.eyes5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.eyes6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.eyes6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.head1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.head2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.head3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_bottom3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero_bottom3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero_bottom5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero_bottom6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero_shoes5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero_shoes6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.lens11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.lens13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.lens18_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.lens19_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.lens20_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.lens21_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new17_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new23_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new28_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new37_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new41_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.magic_wander2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.magic_wander_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.nav_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.quest1_10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.quest1_11_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.quest1_12_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.quest1_13_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.quest1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.quest1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.quest1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.quest1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.quest1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.quest1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.quest1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.quest1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.quest1_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new20_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new31_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_23_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_24_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_25_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_26_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_27_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_28_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_29_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_30_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_31_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_32_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_33_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.shadow_nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.shadow_nav_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new23_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new24_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new27_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new37_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.shadows0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.shelf_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.skin_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.skin_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.skin_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.snow_logo_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.stick_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.top0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wing1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.wing2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.wing3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.wing4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.wing5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.wing6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-150,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-70,300,140);
p.frameBounds = [rect];


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
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhdvAu3MAAAhdtMC7fAAAMAAABdtg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],5.8,10.1,-7.6,-13.1).s().p("AhHCHQhAgCgYgqQgXgoAdg2QAeg5BEgmQBAgmA/ACQBAACAYApQAXApgeA2QgdA4hCAnQg+Akg9AAIgGAAg");
	this.shape.setTransform(-54,-91.1,1.97,1.97);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-2.2,5.9,3,-7.9).s().p("AgUA7QglgHgUgVQgUgVAKgXQAJgZAggMQAhgOAjAHQAlAFAUAVQATAWgJAWQgKAZggAMQgXAKgYAAQgKAAgKgBg");
	this.shape_1.setTransform(0.2,-117.4,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// graph
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.976],-0.8,-102.7,-0.7,33.2).s().p("AmUFDQioiGABi9QgBi9CoiGQCoiGDsAAQDtAACoCGQCnCGAAC9QAAC9inCGQioCGjtABQjsgBioiGg");
	this.shape_2.setTransform(0.5,-47.8,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// graph
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(152,172,255,0)","#BFC2FF"],[0,1],0.5,4.5,0.5,38.5).s().p("Am5B1QivitgIjzQALC0CsB/QC3CKECAAQEDAAC4iKQCph/ANiyQgJDyitCsQi4C3kDAAQkCAAi3i3g");
	this.shape_3.setTransform(0,64.1,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// graph
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,145,175,0)","#E023A0","rgba(205,24,144,0)"],[0,0.667,1],17,-23,0,17,-23,112.1).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
	this.shape_4.setTransform(0,0,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// graph
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F252BC","#F87BCE"],[0,1],0,63,0,-69).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
	this.shape_5.setTransform(0,0,1.97,1.97);

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
	this.shape.graphics.lf(["#FFFFFF","#FFCCFF"],[0,1],0,-59.9,0,60).s().p("AmoJIQgZgRgPgbQgOgeAAggIAAu7QAAggAOgeQAPgbAZgRQAZgQAdAAQAdAAAaAQILkHfQAZARAPAcQAOAcAAAfQAAAggOAcQgPAcgZARIrkHfQgaAQgdAAQgdAAgZgQg");
	this.shape.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-60,96,120);
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
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.wings_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing6_img();
	this.instance.setTransform(150,-122.2,0.713,0.713,0,0,180);

	this.instance_1 = new lib.wing6_img();
	this.instance_1.setTransform(-149.9,-122.2,0.713,0.713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4uUkMgA+gpOMAzZAAGMgA7ApPg");
	this.shape.setTransform(-1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.6,-132.8,329.1,264.6);
p.frameBounds = [rect];


(lib.wings_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing5_img();
	this.instance.setTransform(150,-94.5,0.668,0.668,0,0,180);

	this.instance_1 = new lib.wing5_img();
	this.instance_1.setTransform(-149.9,-94.5,0.668,0.668);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0cP9IleyrIFyt7MAm6AAQIHJPDImRSAg");
	this.shape.setTransform(0.1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.8,-105.6,332,213.3);
p.frameBounds = [rect];


(lib.wings_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing4_img();
	this.instance.setTransform(170,-81.4,0.613,0.612,0,0,180);

	this.instance_1 = new lib.wing4_img();
	this.instance_1.setTransform(-169.9,-81.4,0.613,0.612);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A9hjmIanq1IG8gGIZgKOIvqSWI8nAfg");
	this.shape.setTransform(-1.2,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190.3,-98.6,378.2,186.1);
p.frameBounds = [rect];


(lib.wings_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing3_img();
	this.instance.setTransform(165,-102.9,0.643,0.643,0,0,180);

	this.instance_1 = new lib.wing3_img();
	this.instance_1.setTransform(-164.9,-102.9,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A74DLIFTv3IM8lYIXMAAIJCGLIFUOzIxuO/I0jAMg");
	this.shape.setTransform(0.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177.7,-113.9,357.1,231.6);
p.frameBounds = [rect];


(lib.wings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing2_img();
	this.instance.setTransform(140,-101,0.895,0.894,0,0,180);

	this.instance_1 = new lib.wing2_img();
	this.instance_1.setTransform(-139.9,-101,0.895,0.894);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwmRNIno2hID1r/MApSAAOIDWPgIobS5g");
	this.shape.setTransform(-0.8,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155.9,-110.7,310.2,221.8);
p.frameBounds = [rect];


(lib.wings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing1_img();
	this.instance.setTransform(199.9,-43.6,0.766,0.765,0,0,180);

	this.instance_1 = new lib.wing1_img();
	this.instance_1.setTransform(-199.9,-43.6,0.766,0.765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3yI0Ir5niIPDqFMAqvAAAINlK9IwNGqg");
	this.shape.setTransform(1.2,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-227.1,-56.9,456.8,113);
p.frameBounds = [rect];


(lib.wing6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing6_img();
	this.instance.setTransform(-130.2,-51.7,1,1,-25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.2,-142.6,337.8,400.1);
p.frameBounds = [rect];


(lib.wing5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing5_img();
	this.instance.setTransform(-151.7,-61.5,1,1,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.7,-159.5,325.3,352.5);
p.frameBounds = [rect];


(lib.wing4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing4_img();
	this.instance.setTransform(-158.5,-32.7,1,1,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.3,-32.7,297.9,287.9);
p.frameBounds = [rect];


(lib.wing3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing3_img();
	this.instance.setTransform(-115,-63.3,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197.8,-63.3,328.2,374.9);
p.frameBounds = [rect];


(lib.wing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing2_img();
	this.instance.setTransform(-22.1,-123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.1,-123.1,156,226);
p.frameBounds = [rect];


(lib.wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing1_img();
	this.instance.setTransform(-130.5,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.5,-57,261,114);
p.frameBounds = [rect];


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-180,-244.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-244.5,360,489);
p.frameBounds = [rect];


(lib.wardrobe_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wardrobe_2_1_img();
	this.instance.setTransform(-130,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-65,260,130);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-15,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-65,30,130);
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


(lib.stick_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stick_img();
	this.instance.setTransform(-190,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-10,380,20);
p.frameBounds = [rect];


(lib.shoes_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_shoes6_img();
	this.instance.setTransform(-44.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoQrnIBnj5IKxhIIB7CBICObzIhMCjIl8A6g");
	this.shape.setTransform(-1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-105.4,105.9,213.2);
p.frameBounds = [rect];


(lib.shoes_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_shoes5_img();
	this.instance.setTransform(-28,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AhaJuIkPwoIAmh0IHshuIB4BNIBJPoIiBDhIjiAjg");
	this.shape.setTransform(1.5,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-67.1,72.6,133.9);
p.frameBounds = [rect];


(lib.shoes_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_shoes4_img();
	this.instance.setTransform(-20.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqJxIAAzgIJVAAIAATgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-62.5,60,125);
p.frameBounds = [rect];


(lib.shoes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_shoes3_img();
	this.instance.setTransform(-42,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ABLQdIpD7JIBYkLIKbhnICZBpIBlbHIhpENg");
	this.shape.setTransform(-0.7,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.2,-106.8,101.1,211.2);
p.frameBounds = [rect];


(lib.shoes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_shoes2_img();
	this.instance.setTransform(-24.5,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqJwIAAzgIJVAAIAATgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-62.5,60,125);
p.frameBounds = [rect];


(lib.shoes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_shoes1_img();
	this.instance.setTransform(-17.5,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqHCIAAuCIJVAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-45,60,90);
p.frameBounds = [rect];


(lib.shelf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_img();
	this.instance.setTransform(-190,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-20,380,40);
p.frameBounds = [rect];


(lib.shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows0_img();
	this.instance.setTransform(-85.6,-30.6);

	this.instance_1 = new lib.shadows1_img();
	this.instance_1.setTransform(-102.3,-44.5);

	this.instance_2 = new lib.shadows2_img();
	this.instance_2.setTransform(-107.2,-45.9);

	this.instance_3 = new lib.shadows3_img();
	this.instance_3.setTransform(-110.8,-69);

	this.instance_4 = new lib.shadows4_img();
	this.instance_4.setTransform(-102.1,-43.3);

	this.instance_5 = new lib.shadows5_img();
	this.instance_5.setTransform(-108.5,-44.5);

	this.instance_6 = new lib.shadows6_img();
	this.instance_6.setTransform(-120,-60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.6,-30.6,171,61);
p.frameBounds = [rect, new cjs.Rectangle(-102.3,-44.5,203,100), new cjs.Rectangle(-107.2,-45.9,209,107), new cjs.Rectangle(-110.8,-69,221,168), new cjs.Rectangle(-102.1,-43.3,205,111), new cjs.Rectangle(-108.5,-44.5,212,110), new cjs.Rectangle(-120,-60.1,237,136)];


(lib.shadows_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_new37_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.shadows_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.shadows_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_new5_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.shadows_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_new24_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.shadows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_new23_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.shadows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_new27_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.shadow_nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_nav_3_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.shadow_nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_nav_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadow_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AthNhQlmlmAAn7QAAn7FmlmQFnlmH6AAQH7AAFmFmQFnFmAAH7QAAH7lnFmQlmFnn7AAQn6AAlnlng");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.5,-117.5,245,245);
p.frameBounds = [rect];


(lib.shadow_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AqfKfQkVkWgBmJQABmIEVkXQEXkVGIgBQGKABEVEVQEXEXAAGIQAAGJkXEWQkVEXmKAAQmIAAkXkXg");
	this.shape.setTransform(10,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,190,190);
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


(lib.semicircular_arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.semicircular_arrow_1_img();
	this.instance.setTransform(-120,-90);

	this.instance_1 = new lib.semicircular_arrow_2_img();
	this.instance_1.setTransform(-120,-90);

	this.instance_2 = new lib.semicircular_arrow_3_img();
	this.instance_2.setTransform(-120,-90);

	this.instance_3 = new lib.semicircular_arrow_4_img();
	this.instance_3.setTransform(-120,-90);

	this.instance_4 = new lib.semicircular_arrow_5_img();
	this.instance_4.setTransform(-120,-90);

	this.instance_5 = new lib.semicircular_arrow_6_img();
	this.instance_5.setTransform(-120,-90);

	this.instance_6 = new lib.semicircular_arrow_7_img();
	this.instance_6.setTransform(-120,-90);

	this.instance_7 = new lib.semicircular_arrow_8_img();
	this.instance_7.setTransform(-120,-90);

	this.instance_8 = new lib.semicircular_arrow_9_img();
	this.instance_8.setTransform(-120,-90);

	this.instance_9 = new lib.semicircular_arrow_10_img();
	this.instance_9.setTransform(-120,-90);

	this.instance_10 = new lib.semicircular_arrow_11_img();
	this.instance_10.setTransform(-120,-90);

	this.instance_11 = new lib.semicircular_arrow_12_img();
	this.instance_11.setTransform(-120,-90);

	this.instance_12 = new lib.semicircular_arrow_13_img();
	this.instance_12.setTransform(-120,-90);

	this.instance_13 = new lib.semicircular_arrow_14_img();
	this.instance_13.setTransform(-120,-90);

	this.instance_14 = new lib.semicircular_arrow_15_img();
	this.instance_14.setTransform(-120,-90);

	this.instance_15 = new lib.semicircular_arrow_16_img();
	this.instance_15.setTransform(-120,-90);

	this.instance_16 = new lib.semicircular_arrow_17_img();
	this.instance_16.setTransform(-120,-90);

	this.instance_17 = new lib.semicircular_arrow_18_img();
	this.instance_17.setTransform(-120,-90);

	this.instance_18 = new lib.semicircular_arrow_19_img();
	this.instance_18.setTransform(-120,-90);

	this.instance_19 = new lib.semicircular_arrow_20_img();
	this.instance_19.setTransform(-120,-90);

	this.instance_20 = new lib.semicircular_arrow_21_img();
	this.instance_20.setTransform(-120,-90);

	this.instance_21 = new lib.semicircular_arrow_22_img();
	this.instance_21.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).wait(3));

	// bg
	this.instance_22 = new lib.semicircular_arrow_0_img();
	this.instance_22.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-90,240,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.round_arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.round_arrow_1_img();
	this.instance.setTransform(-115,-105);

	this.instance_1 = new lib.round_arrow_2_img();
	this.instance_1.setTransform(-115,-105);

	this.instance_2 = new lib.round_arrow_3_img();
	this.instance_2.setTransform(-115,-105);

	this.instance_3 = new lib.round_arrow_4_img();
	this.instance_3.setTransform(-115,-105);

	this.instance_4 = new lib.round_arrow_5_img();
	this.instance_4.setTransform(-115,-105);

	this.instance_5 = new lib.round_arrow_6_img();
	this.instance_5.setTransform(-115,-105);

	this.instance_6 = new lib.round_arrow_7_img();
	this.instance_6.setTransform(-115,-105);

	this.instance_7 = new lib.round_arrow_8_img();
	this.instance_7.setTransform(-115,-105);

	this.instance_8 = new lib.round_arrow_9_img();
	this.instance_8.setTransform(-115,-105);

	this.instance_9 = new lib.round_arrow_10_img();
	this.instance_9.setTransform(-115,-105);

	this.instance_10 = new lib.round_arrow_11_img();
	this.instance_10.setTransform(-115,-105);

	this.instance_11 = new lib.round_arrow_12_img();
	this.instance_11.setTransform(-115,-105);

	this.instance_12 = new lib.round_arrow_13_img();
	this.instance_12.setTransform(-115,-105);

	this.instance_13 = new lib.round_arrow_14_img();
	this.instance_13.setTransform(-115,-105);

	this.instance_14 = new lib.round_arrow_15_img();
	this.instance_14.setTransform(-115,-105);

	this.instance_15 = new lib.round_arrow_16_img();
	this.instance_15.setTransform(-115,-105);

	this.instance_16 = new lib.round_arrow_17_img();
	this.instance_16.setTransform(-115,-105);

	this.instance_17 = new lib.round_arrow_18_img();
	this.instance_17.setTransform(-115,-105);

	this.instance_18 = new lib.round_arrow_19_img();
	this.instance_18.setTransform(-115,-105);
	this.instance_18._off = true;

	this.instance_19 = new lib.round_arrow_20_img();
	this.instance_19.setTransform(-115,-105);

	this.instance_20 = new lib.round_arrow_21_img();
	this.instance_20.setTransform(-115,-105);

	this.instance_21 = new lib.round_arrow_22_img();
	this.instance_21.setTransform(-115,-105);

	this.instance_22 = new lib.round_arrow_23_img();
	this.instance_22.setTransform(-115,-105);

	this.instance_23 = new lib.round_arrow_24_img();
	this.instance_23.setTransform(-115,-105);

	this.instance_24 = new lib.round_arrow_25_img();
	this.instance_24.setTransform(-115,-105);

	this.instance_25 = new lib.round_arrow_26_img();
	this.instance_25.setTransform(-115,-105);

	this.instance_26 = new lib.round_arrow_27_img();
	this.instance_26.setTransform(-115,-105);

	this.instance_27 = new lib.round_arrow_28_img();
	this.instance_27.setTransform(-115,-105);

	this.instance_28 = new lib.round_arrow_29_img();
	this.instance_28.setTransform(-115,-105);

	this.instance_29 = new lib.round_arrow_30_img();
	this.instance_29.setTransform(-115,-105);

	this.instance_30 = new lib.round_arrow_31_img();
	this.instance_30.setTransform(-115,-105);

	this.instance_31 = new lib.round_arrow_32_img();
	this.instance_31.setTransform(-115,-105);

	this.instance_32 = new lib.round_arrow_33_img();
	this.instance_32.setTransform(-115,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({_off:false},0).wait(3).to({_off:true},1).wait(17));

	// bg
	this.instance_33 = new lib.round_arrow_0_img();
	this.instance_33.setTransform(-115,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-105,230,210);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rouge1_img();
	this.instance.setTransform(-93,-46.7);

	this.instance_1 = new lib.rouge2_img();
	this.instance_1.setTransform(-93,-46.7);

	this.instance_2 = new lib.rouge3_img();
	this.instance_2.setTransform(-93,-46.7);

	this.instance_3 = new lib.rouge4_img();
	this.instance_3.setTransform(-93,-46.7);

	this.instance_4 = new lib.rouge5_img();
	this.instance_4.setTransform(-93,-46.7);

	this.instance_5 = new lib.rouge6_img();
	this.instance_5.setTransform(-93,-46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-46.7,186,94);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.quest1_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quest1_13_img();
	this.instance.setTransform(-418.5,-204.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-418.5,-204.5,837,409);
p.frameBounds = [rect];


(lib.quest1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quest1_12_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect];


(lib.quest1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quest1_10_img();
	this.instance.setTransform(-74.5,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.5,-71,149,142);
p.frameBounds = [rect];


(lib.quest1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quest1_9_img();
	this.instance.setTransform(-75,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-71,150,142);
p.frameBounds = [rect];


(lib.quest1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quest1_6_img();
	this.instance.setTransform(-365,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-365,-168,730,336);
p.frameBounds = [rect];


(lib.quest1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quest1_4_img();
	this.instance.setTransform(-39,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-38,78,76);
p.frameBounds = [rect];


(lib.quest1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quest1_3_img();
	this.instance.setTransform(-599.5,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-599.5,-149.5,1199,299);
p.frameBounds = [rect];


(lib.quest1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quest1_2_img();
	this.instance.setTransform(-600,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-130,1200,260);
p.frameBounds = [rect];


(lib.quest1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quest1_1_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect];


(lib.object_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EhdvAfPMAAAg+dMC7fAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-200,1200,400);
p.frameBounds = [rect];


(lib.object_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlDlCABnHQgBnGFDlCQFClCHGAAQHIAAFBFCQFCFCAAHGQAAHHlCFCQlBFCnIAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClBAAnIQAAnGFClCQFBlCHHAAQHIAAFBFCQFDFCgBHGQABHIlDFBQlBFCnIAAQnHAAlBlCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U/QososAAsTQAAsSIsosQIsosMSAAQMTAAIsIsQIsIsAAMSQAAMTosIsQosIssTAAQsSAAososg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.object_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EhdvAUTMAAAgolMC7fAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-130,1200,260);
p.frameBounds = [rect];


(lib.magic_wander = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.magic_wander_img();
	this.instance.setTransform(-22,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-114.5,44,229);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lips0_img();
	this.instance.setTransform(-48,-17.7);

	this.instance_1 = new lib.lips1_img();
	this.instance_1.setTransform(-48,-17.7);

	this.instance_2 = new lib.lips2_img();
	this.instance_2.setTransform(-48,-17.7);

	this.instance_3 = new lib.lips3_img();
	this.instance_3.setTransform(-48,-17.7);

	this.instance_4 = new lib.lips4_img();
	this.instance_4.setTransform(-48,-17.7);

	this.instance_5 = new lib.lips5_img();
	this.instance_5.setTransform(-48,-17.7);

	this.instance_6 = new lib.lips6_img();
	this.instance_6.setTransform(-48,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-17.7,95,35);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.lips_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lipstick_new10_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqKjIAA1FIJVAAIAAVFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-67.5,60,135);
p.frameBounds = [rect];


(lib.lips_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lipstick_new41_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqKjIAA1FIJVAAIAAVFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-67.5,60,135);
p.frameBounds = [rect];


(lib.lips_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lipstick_new28_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqKjIAA1FIJVAAIAAVFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-67.5,60,135);
p.frameBounds = [rect];


(lib.lips_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lipstick_new37_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqKjIAA1FIJVAAIAAVFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-67.5,60,135);
p.frameBounds = [rect];


(lib.lips_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lipstick_new17_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqKjIAA1FIJVAAIAAVFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-67.5,60,135);
p.frameBounds = [rect];


(lib.lips_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lipstick_new23_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqKjIAA1FIJVAAIAAVFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-67.5,60,135);
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


(lib.indicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,220,30);
p.frameBounds = [rect];


(lib.indicator_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
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


(lib.hero_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_top1_img();
	this.instance.setTransform(-81,-53.5);

	this.instance_1 = new lib.hero_top2_img();
	this.instance_1.setTransform(-117,-41.7);

	this.instance_2 = new lib.hero_top3_img();
	this.instance_2.setTransform(-123.4,-52.7);

	this.instance_3 = new lib.hero_top4_img();
	this.instance_3.setTransform(-122.9,-52.2);

	this.instance_4 = new lib.hero_top5_img();
	this.instance_4.setTransform(-120.9,-57.2);

	this.instance_5 = new lib.hero_top6_img();
	this.instance_5.setTransform(-88.4,-18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-53.5,162,107);
p.frameBounds = [rect, new cjs.Rectangle(-117,-41.7,152,90), new cjs.Rectangle(-123.4,-52.7,168,99), new cjs.Rectangle(-122.9,-52.2,166,86), new cjs.Rectangle(-120.9,-57.2,161,114), new cjs.Rectangle(-88.4,-18.7,93,65), null];


(lib.hero_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_shoes1_img();
	this.instance.setTransform(-17.5,-38);

	this.instance_1 = new lib.hero_shoes2_img();
	this.instance_1.setTransform(-27.9,-71.5);

	this.instance_2 = new lib.hero_shoes3_img();
	this.instance_2.setTransform(-62.9,-154.5);

	this.instance_3 = new lib.hero_shoes4_img();
	this.instance_3.setTransform(-23.9,-78);

	this.instance_4 = new lib.hero_shoes5_img();
	this.instance_4.setTransform(-35.4,-73);

	this.instance_5 = new lib.hero_shoes6_img();
	this.instance_5.setTransform(-65.9,-161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-38,35,76);
p.frameBounds = [rect, new cjs.Rectangle(-27.9,-71.5,49,117), new cjs.Rectangle(-62.9,-154.5,84,196), new cjs.Rectangle(-23.9,-78,41,118), new cjs.Rectangle(-35.4,-73,56,116), new cjs.Rectangle(-65.9,-161,89,200), null];


(lib.hero_hat_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_hat1_img();
	this.instance.setTransform(-42.3,-16.2,0.55,0.55);

	this.instance_1 = new lib.hero_hat2_img();
	this.instance_1.setTransform(-53.7,-21.5,0.55,0.55);

	this.instance_2 = new lib.hero_hat3_img();
	this.instance_2.setTransform(-77.7,-40.1,0.55,0.55);

	this.instance_3 = new lib.hero_hat4_img();
	this.instance_3.setTransform(-33.7,-34.2,0.55,0.55);

	this.instance_4 = new lib.hero_hat5_img();
	this.instance_4.setTransform(-46.9,-6.2,0.55,0.55);

	this.instance_5 = new lib.hero_hat6_img();
	this.instance_5.setTransform(-33.5,-25.6,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.3,-16.2,84.7,32.5);
p.frameBounds = [rect, new cjs.Rectangle(-53.7,-21.5,104.5,43.5), new cjs.Rectangle(-77.7,-40.1,160.6,74.8), new cjs.Rectangle(-33.7,-34.2,66.6,64.9), new cjs.Rectangle(-46.9,-6.2,97.9,36.9), new cjs.Rectangle(-33.5,-25.6,67.1,46.8), null];


(lib.hero_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_hair1_img();
	this.instance.setTransform(-63.3,-117.5,0.55,0.55);

	this.instance_1 = new lib.hero_hair2_img();
	this.instance_1.setTransform(-62,-117,0.55,0.55);

	this.instance_2 = new lib.hero_hair3_img();
	this.instance_2.setTransform(-79.8,-114,0.55,0.55);

	this.instance_3 = new lib.hero_hair4_img();
	this.instance_3.setTransform(-62.7,-118.1,0.55,0.55);

	this.instance_4 = new lib.hero_hair6_img();
	this.instance_4.setTransform(15.8,-75.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.3,-117.5,113.9,128.2);
p.frameBounds = [rect, new cjs.Rectangle(-62,-117,118.3,176), new cjs.Rectangle(-79.8,-114,151.8,232.1), new cjs.Rectangle(-62.7,-118.1,127.6,206.3), null, new cjs.Rectangle(15.8,-75.2,14,34)];


(lib.hero_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_fringe1_img();
	this.instance.setTransform(-53.9,-111.8,0.55,0.55);

	this.instance_1 = new lib.hero_fringe2_img();
	this.instance_1.setTransform(-57,-113.3,0.55,0.55);

	this.instance_2 = new lib.hero_fringe3_img();
	this.instance_2.setTransform(-41.4,-111.9,0.55,0.55);

	this.instance_3 = new lib.hero_fringe4_img();
	this.instance_3.setTransform(-48.6,-114.5,0.55,0.55);

	this.instance_4 = new lib.hero_fringe5_img();
	this.instance_4.setTransform(-55.6,-114.1,0.55,0.55);

	this.instance_5 = new lib.hero_fringe6_img();
	this.instance_5.setTransform(-57.9,-114,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.9,-111.8,108.9,249.7);
p.frameBounds = [rect, new cjs.Rectangle(-57,-113.3,106.2,139.7), new cjs.Rectangle(-41.4,-111.9,94.1,201.9), new cjs.Rectangle(-48.6,-114.5,88.6,100.6), new cjs.Rectangle(-55.6,-114.1,114.4,250.3), new cjs.Rectangle(-57.9,-114,100.1,105.1)];


(lib.hero_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_dress1_img();
	this.instance.setTransform(-85.5,-136.5);

	this.instance_1 = new lib.hero_dress2_img();
	this.instance_1.setTransform(-128.5,-132.5);

	this.instance_2 = new lib.hero_dress3_img();
	this.instance_2.setTransform(-162.4,-122);

	this.instance_3 = new lib.hero_dress4_img();
	this.instance_3.setTransform(-213.5,-143);

	this.instance_4 = new lib.hero_dress5_img();
	this.instance_4.setTransform(-187.5,-109);

	this.instance_5 = new lib.hero_dress6_img();
	this.instance_5.setTransform(-116.4,-126.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-136.5,171,273);
p.frameBounds = [rect, new cjs.Rectangle(-128.5,-132.5,265,231), new cjs.Rectangle(-162.4,-122,311,295), new cjs.Rectangle(-213.5,-143,409,441), new cjs.Rectangle(-187.5,-109,356,384), new cjs.Rectangle(-116.4,-126.5,224,410), null];


(lib.hero_bottom_back_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_bottom3_2_img();
	this.instance.setTransform(-34.8,-91.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, new cjs.Rectangle(-34.8,-91.7,155,240), rect=null, rect, rect, rect];


(lib.hero_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_bottom1_img();
	this.instance.setTransform(-98.5,-79.5);

	this.instance_1 = new lib.hero_bottom2_img();
	this.instance_1.setTransform(-97.3,-77.2);

	this.instance_2 = new lib.hero_bottom3_1_img();
	this.instance_2.setTransform(-35.3,-92.2);

	this.instance_3 = new lib.hero_bottom4_img();
	this.instance_3.setTransform(-41.9,-73.5);

	this.instance_4 = new lib.hero_bottom5_img();
	this.instance_4.setTransform(-45,-84.5);

	this.instance_5 = new lib.hero_bottom6_img();
	this.instance_5.setTransform(-12.5,-82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-79.5,197,159);
p.frameBounds = [rect, new cjs.Rectangle(-97.3,-77.2,270,169), new cjs.Rectangle(-35.3,-92.2,155,136), new cjs.Rectangle(-41.9,-73.5,189,290), new cjs.Rectangle(-45,-84.5,184,163), new cjs.Rectangle(-12.5,-82,112,144), null];


(lib.headdress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_hat6_img();
	this.instance.setTransform(-61,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqTICIhnoVIKQnwIETgBIJSHUIhGI2g");
	this.shape.setTransform(0.1,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-53.7,152.7,103.6);
p.frameBounds = [rect];


(lib.headdress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_hat5_img();
	this.instance.setTransform(-89,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuZDkIhJmVIDbjdIWlhBIFFDvIgIF6IuLE2g");
	this.shape.setTransform(-2.9,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.4,-48.9,199.2,93);
p.frameBounds = [rect];


(lib.headdress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_hat4_img();
	this.instance.setTransform(-60.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArDCqIgCndIJrmTIEJACIIYGVIgGISInAHYIm4AMg");
	this.shape.setTransform(-1.2,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-73.4,142.2,142.3);
p.frameBounds = [rect];


(lib.headdress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_hat3_img();
	this.instance.setTransform(-106,-51,0.753,0.753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyDG4IgSrfIDPjwId7gxICwDFIAxL5Ij0C7I+HAYg");
	this.shape.setTransform(2.3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.1,-57.5,235,117.2);
p.frameBounds = [rect];


(lib.headdress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_hat2_img();
	this.instance.setTransform(-75,-31,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtlBmIAUiZIFJj/IPChqIF+EAIAuE/Ii5DtI2BANg");
	this.shape.setTransform(-0.3,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.3,-42.4,174.1,82.8);
p.frameBounds = [rect];


(lib.headdress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_hat1_img();
	this.instance.setTransform(-77,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuOAfIFmltIQAhuIGLDIIAsF6IhcCDI4oC0g");
	this.shape.setTransform(-2.6,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.7,-45.6,182.3,89.1);
p.frameBounds = [rect];


(lib.head3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyebrows1
	this.instance = new lib.eyebrows_img();
	this.instance.setTransform(-93.5,-50.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// head0
	this.instance_1 = new lib.head3_img();
	this.instance_1.setTransform(-114.3,-145.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.3,-145.2,229,291);
p.frameBounds = [rect];


(lib.head2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyebrows1
	this.instance = new lib.head2_img();
	this.instance.setTransform(-114.3,-145.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.3,-145.2,229,291);
p.frameBounds = [rect];


(lib.head1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyebrows1
	this.instance = new lib.head1_img();
	this.instance.setTransform(-114.3,-145.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.3,-145.2,229,291);
p.frameBounds = [rect];


(lib.fringe0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe0_img();
	this.instance.setTransform(-104.5,-113.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-113.6,209,227);
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


(lib.eyes6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.eyes6_1_img();
	this.instance.setTransform(-104,-25.9);

	this.instance_1 = new lib.eyes6_2_img();
	this.instance_1.setTransform(-104,-25.9);

	this.instance_2 = new lib.eyes1_3_img();
	this.instance_2.setTransform(-104,-25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},25).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104,-25.9,207,65);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.eyes5_1_img();
	this.instance.setTransform(-104,-25.9);

	this.instance_1 = new lib.eyes5_2_img();
	this.instance_1.setTransform(-104,-25.9);

	this.instance_2 = new lib.eyes1_3_img();
	this.instance_2.setTransform(-104,-25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},25).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104,-25.9,207,65);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.eyes4_1_img();
	this.instance.setTransform(-104.1,-25.9);

	this.instance_1 = new lib.eyes4_2_img();
	this.instance_1.setTransform(-104.1,-25.9);

	this.instance_2 = new lib.eyes1_3_img();
	this.instance_2.setTransform(-104.1,-25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},25).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.1,-25.9,207,65);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.eyes3_1_img();
	this.instance.setTransform(-104,-26);

	this.instance_1 = new lib.eyes3_2_img();
	this.instance_1.setTransform(-104,-26);

	this.instance_2 = new lib.eyes1_3_img();
	this.instance_2.setTransform(-104,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},25).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104,-26,207,65);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.eyes2_1_img();
	this.instance.setTransform(-104.1,-25.7);

	this.instance_1 = new lib.eyes2_2_img();
	this.instance_1.setTransform(-104.1,-25.7);

	this.instance_2 = new lib.eyes1_3_img();
	this.instance_2.setTransform(-104.1,-25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},25).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.1,-25.7,207,65);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.eyes1_1_img();
	this.instance.setTransform(-104,-26);

	this.instance_1 = new lib.eyes1_2_img();
	this.instance_1.setTransform(-104,-26);

	this.instance_2 = new lib.eyes1_3_img();
	this.instance_2.setTransform(-104,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},25).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104,-26,207,65);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lens21_img();
	this.instance.setTransform(2,-30);

	this.instance_1 = new lib.lens21_img();
	this.instance_1.setTransform(-62,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.eyes_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lens20_img();
	this.instance.setTransform(2,-30);

	this.instance_1 = new lib.lens20_img();
	this.instance_1.setTransform(-62,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.eyes_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lens13_img();
	this.instance.setTransform(2,-30);

	this.instance_1 = new lib.lens13_img();
	this.instance_1.setTransform(-62,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.eyes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lens18_img();
	this.instance.setTransform(2,-30);

	this.instance_1 = new lib.lens18_img();
	this.instance_1.setTransform(-62,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.eyes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lens11_img();
	this.instance.setTransform(1,-30);

	this.instance_1 = new lib.lens11_img();
	this.instance_1.setTransform(-61,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.eyes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lens19_img();
	this.instance.setTransform(2,-30);

	this.instance_1 = new lib.lens19_img();
	this.instance_1.setTransform(-62,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.earring6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring6_img();
	this.instance.setTransform(-26.3,-58.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.3,-58.8,53,118);
p.frameBounds = [rect];


(lib.earring5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring5_img();
	this.instance.setTransform(-17.7,-34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.7,-34.3,35,69);
p.frameBounds = [rect];


(lib.earring4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring4_img();
	this.instance.setTransform(-11.6,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.6,-30,23,60);
p.frameBounds = [rect];


(lib.earring3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring3_img();
	this.instance.setTransform(-41.7,-40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.7,-40.9,74,74);
p.frameBounds = [rect];


(lib.earring2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring2_img();
	this.instance.setTransform(-12.8,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.8,-32.5,26,65);
p.frameBounds = [rect];


(lib.earring1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring1_img();
	this.instance.setTransform(-13.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13.5,-46.5,27,93);
p.frameBounds = [rect];


(lib.closet1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.closet1_4_img();
	this.instance.setTransform(-53.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-30,107,60);
p.frameBounds = [rect];


(lib.closet1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.closet1_3_img();
	this.instance.setTransform(-53.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-30,107,60);
p.frameBounds = [rect];


(lib.circle_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmZGXQgJgCgHgGQgGgHgCgJIgbiiIhwgOQgJgBgHgGQgGgFgDgJQgDgIADgIQAniggoi0QgCgJADgIQAEgJAHgFQAHgFAJgBIBmgFIAaiqQACgJAGgHQAGgGAJgDQAJgCAJAEIPVF6QAJAEAFAHQAFAIAAAIQAAAJgFAHQgFAIgJAEIvMF6QgFACgFAAIgHgBgAmciyQgBAKgIAHQgIAIgLAAIhcAFQAcCdgcCOIBmANQAJABAIAHQAHAHACAKIAZCTINhlQItqlQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40.9,120,81.8);
p.frameBounds = [rect];


(lib.checkpoint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmOPnIAA/NIMdAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-100,80,200);
p.frameBounds = [rect];


(lib.check_hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_hairstyle_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butterfly1_img();

	this.instance_1 = new lib.butterfly2_img();

	this.instance_2 = new lib.butterfly3_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,57,41);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body2_3_img();
	this.instance.setTransform(-276.2,-211.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-276.2,-211.1,552,422);
p.frameBounds = [rect];


(lib.body2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body2_2_img();
	this.instance.setTransform(-276.2,-211.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-276.2,-211.1,552,422);
p.frameBounds = [rect];


(lib.body2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body2_1_img();
	this.instance.setTransform(-276.2,-211.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-276.2,-211.1,552,422);
p.frameBounds = [rect];


(lib.body1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.body1_3_img();
	this.instance.setTransform(-181.7,-250.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.7,-250.6,363,501);
p.frameBounds = [rect];


(lib.body1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.body1_2_img();
	this.instance.setTransform(-181.7,-250.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.7,-250.6,363,501);
p.frameBounds = [rect];


(lib.body1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.body1_1_img();
	this.instance.setTransform(-181.7,-250.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.7,-250.6,363,501);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-230,-110);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-230,-110);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-230,-110);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-230,-110);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-230,-110);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-230,-110);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-230,-110);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-230,-110);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-230,-110);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-230,-110);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-230,-110);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-230,-110);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-230,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-110,460,220);
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


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.body_nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.body_current_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.blush_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rouge_new6_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokHCIAAuDIRJAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-45,110,90);
p.frameBounds = [rect];


(lib.blush_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rouge_new31_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokHCIAAuDIRJAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-45,110,90);
p.frameBounds = [rect];


(lib.blush_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rouge_new3_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokHCIAAuDIRJAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-45,110,90);
p.frameBounds = [rect];


(lib.blush_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rouge_new20_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokHCIAAuDIRJAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-45,110,90);
p.frameBounds = [rect];


(lib.blush_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rouge_new4_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokHCIAAuDIRJAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-45,110,90);
p.frameBounds = [rect];


(lib.blush_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rouge_new2_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokHCIAAuDIRJAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-45,110,90);
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


(lib.animation_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blesk();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.accessory_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory1_img();
	this.instance.setTransform(-27.5,-84.5);

	this.instance_1 = new lib.accessory2_img();
	this.instance_1.setTransform(-27.5,-82.9);

	this.instance_2 = new lib.accessory3_img();
	this.instance_2.setTransform(-21.5,-81);

	this.instance_3 = new lib.accessory4_img();
	this.instance_3.setTransform(-36.5,-103.9);

	this.instance_4 = new lib.accessory5_img();
	this.instance_4.setTransform(-42.5,-93.9);

	this.instance_5 = new lib.accessory6_img();
	this.instance_5.setTransform(-49.5,-92.9);

	this.instance_6 = new lib.accessory7_img();
	this.instance_6.setTransform(-30.5,-97.9);

	this.instance_7 = new lib.accessory8_img();
	this.instance_7.setTransform(-21.5,-59);

	this.instance_8 = new lib.accessory9_img();
	this.instance_8.setTransform(-47.5,-65);

	this.instance_9 = new lib.accessory10_img();
	this.instance_9.setTransform(-40.5,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-84.5,55,169);
p.frameBounds = [rect, new cjs.Rectangle(-27.5,-82.9,61,164), new cjs.Rectangle(-21.5,-81,39,114), new cjs.Rectangle(-36.5,-103.9,56,148), new cjs.Rectangle(-42.5,-93.9,66,143), new cjs.Rectangle(-49.5,-92.9,76,141), new cjs.Rectangle(-30.5,-97.9,62,175), new cjs.Rectangle(-21.5,-59,43,109), new cjs.Rectangle(-47.5,-65,73,104), new cjs.Rectangle(-40.5,-62,82,104), null];


(lib.accessory_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory10_img();
	this.instance.setTransform(-41,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkXD6IkPuwIMOH7IE/JQIjyEig");
	this.shape.setTransform(-1.9,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-73.2,110.3,139.1);
p.frameBounds = [rect];


(lib.accessory_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory9_img();
	this.instance.setTransform(-36.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlsBjIhdsIILCH/IDRK4IiKCUg");
	this.shape.setTransform(-0.2,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-71.2,91.7,135.6);
p.frameBounds = [rect];


(lib.accessory_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory8_img();
	this.instance.setTransform(-21.5,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlmomIFVh+IF4UNIjuA8g");
	this.shape.setTransform(-3,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.9,-71.5,71.9,135.6);
p.frameBounds = [rect];


(lib.accessory_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory7_img();
	this.instance.setTransform(-31,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An0ucIGjh6IJGfdIkXBQg");
	this.shape.setTransform(-5.3,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-109,100.4,209.4);
p.frameBounds = [rect];


(lib.accessory_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory6_img();
	this.instance.setTransform(-38,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AntoHICRkjIFhBXIHpWoIjlBWg");
	this.shape.setTransform(-0.8,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.2,-82.3,99,162.4);
p.frameBounds = [rect];


(lib.accessory_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory5_img();
	this.instance.setTransform(-33,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am9oiICikVIFQBMIGJXYIjsBLg");
	this.shape.setTransform(-1.3,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.9,-84.2,89.3,165);
p.frameBounds = [rect];


(lib.accessory_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory4_img();
	this.instance.setTransform(-28,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmDo+IC7kPIEdBdIEvX8Ij8BCg");
	this.shape.setTransform(-0.8,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.6,-86.5,77.8,169.3);
p.frameBounds = [rect];


(lib.accessory_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory3_img();
	this.instance.setTransform(-19.5,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al4pyIFDg+IGuUWIlOBLg");
	this.shape.setTransform(-1.7,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.4,-70.2,75.4,137.9);
p.frameBounds = [rect];


(lib.accessory_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory2_img();
	this.instance.setTransform(-30.5,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnwtjIHAhkIIhccIlDBzg");
	this.shape.setTransform(-4.7,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.3,-99.5,99.4,193.6);
p.frameBounds = [rect];


(lib.accessory_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory1_img();
	this.instance.setTransform(-27.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmZt2IHIg4IFrcuIkhAvg");
	this.shape.setTransform(-2.4,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.4,-95.8,82.1,188.7);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_3_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AFD3EE").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.copyright_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.copyright_img();
	this.instance.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.Snowflake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snowfall_1_img();
	this.instance.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.snowfall_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgPnAu4MAAAhdvIfOAAMAAABdvg");
	this.shape.setTransform(100,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,200,600);
p.frameBounds = [rect];


(lib.Snowflake_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snowfall_1_2_img();
	this.instance.setTransform(-8,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
p.frameBounds = [rect];


(lib.snowfall_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fA2sMAAAhtXMB8/AAAMAAABtXg");
	this.shape.setTransform(500,300,1.25,0.857);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1000,600);
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
	this.instance.setTransform(-24,-24);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-8,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect, rect=new cjs.Rectangle(-8,-8,16,16), rect, rect];


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


(lib.sound_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_2_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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


(lib.snow_logo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snow_logo_img();
	this.instance.setTransform(-145,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-45,290,90);
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


(lib.facebook_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_img();
	this.instance.setTransform(-60,-60,0.667,0.667);

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


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(0,220);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:400},0).to({y:220,alpha:1},10).wait(40).to({alpha:0.602},5).to({alpha:1},5).to({alpha:0.602},5).to({alpha:1},5).wait(110).to({y:400,alpha:0.012},10).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAdedIgdgkIgcAkI9OAAMAAAg85MA7VAAAMAAAA85g");
	mask.setTransform(0,5);

	// image_1
	this.instance_1 = new lib.redirect_4_mc();

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({alpha:0.012},15).to({_off:true},1).wait(149).to({_off:false,scaleX:0.5,scaleY:0.5,x:95,y:95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(1));

	// image_2
	this.instance_2 = new lib.redirect_5_mc();
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(55).to({alpha:0.012},15).to({_off:true},1).wait(39).to({_off:false,scaleX:0.5,scaleY:0.5,x:-95,y:-95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(56));

	// image_1
	this.instance_3 = new lib.redirect_4_mc();
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).wait(70).to({_off:true},1).wait(55));

	// bg
	this.instance_4 = new lib.redirect_3_mc();
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(220));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,500);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,680), new cjs.Rectangle(-210,-210,420,662), new cjs.Rectangle(-210,-210,420,644), new cjs.Rectangle(-210,-210,420,626), new cjs.Rectangle(-210,-210,420,608), new cjs.Rectangle(-210,-210,420,590), new cjs.Rectangle(-210,-210,420,572), new cjs.Rectangle(-210,-210,420,554), new cjs.Rectangle(-210,-210,420,536), new cjs.Rectangle(-210,-210,420,518), rect=new cjs.Rectangle(-210,-210,420,500), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,518), new cjs.Rectangle(-210,-210,420,536), new cjs.Rectangle(-210,-210,420,554), new cjs.Rectangle(-210,-210,420,572), new cjs.Rectangle(-210,-210,420,590), new cjs.Rectangle(-210,-210,420,608), new cjs.Rectangle(-210,-210,420,626), new cjs.Rectangle(-210,-210,420,644), new cjs.Rectangle(-210,-210,420,662), new cjs.Rectangle(-210,-210,420,680)];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-60,96,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50.3,-63,100.8,126), new cjs.Rectangle(-54.5,-66,105.6,132), new cjs.Rectangle(-58.8,-69,110.4,138), new cjs.Rectangle(-63.2,-72,115.2,144), new cjs.Rectangle(-67.5,-75,120,150), new cjs.Rectangle(-65.4,-75,120,150), new cjs.Rectangle(-63.4,-75,120,150), new cjs.Rectangle(-61.4,-75,120,150), new cjs.Rectangle(-59.5,-75,120,150), new cjs.Rectangle(-57.5,-75,120,150), new cjs.Rectangle(-55.5,-75,120,150), new cjs.Rectangle(-53.5,-75,120,150), new cjs.Rectangle(-51.5,-75,120,150), new cjs.Rectangle(-49.5,-75,120,150), new cjs.Rectangle(-47.5,-75,120,150), new cjs.Rectangle(-47.2,-72,115.2,144), new cjs.Rectangle(-47,-69,110.4,138), new cjs.Rectangle(-46.7,-66,105.6,132), new cjs.Rectangle(-46.4,-63,100.8,126), rect=new cjs.Rectangle(-46,-60,96,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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


(lib.wings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.4,0.4,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_1_mc();
	this.instance.setTransform(260,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_1_1_mc();
	this.instance_1.setTransform(260,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.wardrobe_2_1_mc();
	this.instance_2.setTransform(180,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.wardrobe_1_1_mc();
	this.instance_3.setTransform(180,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.wardrobe_2_1_mc();
	this.instance_4.setTransform(100,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.wardrobe_1_1_mc();
	this.instance_5.setTransform(100,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-145,420,490);
p.frameBounds = [rect];


(lib.w6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing6();
	this.instance.setTransform(129,21,1,1,23,0,0,129,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:129.1,regY:21.1,scaleX:0.71,rotation:0,skewX:23,skewY:49.6,y:21.1},29).to({regX:129,regY:21,scaleX:1,rotation:23,skewX:0,skewY:0,y:21},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-201.9,-230.8,467.2,500.3);
p.frameBounds = [rect, new cjs.Rectangle(-77.2,-157.5,221,352.1), new cjs.Rectangle(-73,-158.3,215.6,351.6), new cjs.Rectangle(-69.1,-158.8,210.6,351.3), new cjs.Rectangle(-65,-159.6,205.1,350.9), new cjs.Rectangle(-60.6,-160.3,199.5,350.5), new cjs.Rectangle(-56.8,-161.4,194.5,351.4), new cjs.Rectangle(-52.5,-163.7,188.9,354.5), new cjs.Rectangle(-50.3,-166,187.4,357.5), new cjs.Rectangle(-48.6,-167.5,186.8,359.4), new cjs.Rectangle(-46.7,-169.5,186.1,362.1), new cjs.Rectangle(-44.9,-171.5,185.4,364.6), new cjs.Rectangle(-43.3,-172.7,184.8,366.2), new cjs.Rectangle(-41.3,-174.4,184,368.5), new cjs.Rectangle(-39.5,-176,183.4,370.6), new cjs.Rectangle(-37.8,-177,182.8,371.8), new cjs.Rectangle(-36,-178.4,182.1,373.6), new cjs.Rectangle(-34.1,-179.7,181.4,375.4), new cjs.Rectangle(-32.5,-180.4,180.9,376.2), new cjs.Rectangle(-30.6,-181.5,180.2,377.7), new cjs.Rectangle(-28.8,-182.5,179.5,379), new cjs.Rectangle(-27.3,-182.9,178.9,379.5), new cjs.Rectangle(-25.4,-183.7,178.2,380.5), new cjs.Rectangle(-23.6,-184.4,177.5,381.5), new cjs.Rectangle(-21.8,-184.9,176.9,382.2), new cjs.Rectangle(-20.2,-185,176.3,382.3), new cjs.Rectangle(-18.4,-185.4,175.6,382.8), new cjs.Rectangle(-16.7,-185.7,175,383.2), new cjs.Rectangle(-15.1,-185.5,174.4,382.9), new cjs.Rectangle(-82.4,-269.7,311.5,550.8), new cjs.Rectangle(-15.1,-185.6,174.4,382.9), new cjs.Rectangle(-16.6,-185.7,175,383.1), new cjs.Rectangle(-18.3,-185.4,175.5,382.6), new cjs.Rectangle(-19.9,-185.4,176.2,382.6), new cjs.Rectangle(-21.6,-184.9,176.8,381.9), new cjs.Rectangle(-23.2,-184.7,177.4,381.7), new cjs.Rectangle(-25,-184,178,380.8), new cjs.Rectangle(-26.8,-183.2,178.7,379.8), new cjs.Rectangle(-28.4,-182.8,179.3,379.2), new cjs.Rectangle(-30.2,-181.8,180,377.9), new cjs.Rectangle(-31.8,-181.2,180.6,377.2), new cjs.Rectangle(-33.6,-180,181.2,375.6), new cjs.Rectangle(-35.3,-179.3,181.8,374.6), new cjs.Rectangle(-37,-177.8,182.5,372.8), new cjs.Rectangle(-38.6,-176.9,183.1,371.6), new cjs.Rectangle(-40.4,-175.3,183.7,369.5), new cjs.Rectangle(-42.1,-174.2,184.3,368), new cjs.Rectangle(-44,-172.4,185,365.8), new cjs.Rectangle(-45.7,-170.5,185.6,363.3), new cjs.Rectangle(-47.4,-169.1,186.3,361.5), new cjs.Rectangle(-49.2,-167.1,187,358.8), new cjs.Rectangle(-50.8,-165.5,187.6,356.8), new cjs.Rectangle(-53.6,-163.3,190.2,353.7), new cjs.Rectangle(-57.4,-161.5,195.2,351.5), new cjs.Rectangle(-61.6,-160.1,200.7,350.6), new cjs.Rectangle(-65.4,-159.7,205.6,350.9), new cjs.Rectangle(-69.5,-158.9,210.9,351.3), new cjs.Rectangle(-73.6,-158.3,216.3,351.8), new cjs.Rectangle(-77.3,-157.6,221.2,352.1), new cjs.Rectangle(-201.9,-230.8,467.2,500.3)];


(lib.w5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing5();
	this.instance.setTransform(129,21,1,1,23,0,0,129,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:129.1,regY:21.1,scaleX:0.65,rotation:0,skewX:23,skewY:42.7,y:21.2},29).to({regX:129,regY:21,scaleX:1,rotation:23,skewX:0,skewY:0,y:21},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-196.5,-254.7,437.1,451.5);
p.frameBounds = [rect, new cjs.Rectangle(-92.8,-176.4,233.5,293.9), new cjs.Rectangle(-88.3,-176.9,228.2,293.3), new cjs.Rectangle(-83.6,-177.4,223,292.9), new cjs.Rectangle(-79.5,-177.6,218.2,292.6), new cjs.Rectangle(-75,-178,212.9,292.2), new cjs.Rectangle(-70.4,-178.5,207.6,291.8), new cjs.Rectangle(-66.3,-178.7,202.8,291.6), new cjs.Rectangle(-62.1,-179.1,198.3,291.3), new cjs.Rectangle(-59.6,-179.3,197,290.9), new cjs.Rectangle(-57.1,-179.6,195.8,290.6), new cjs.Rectangle(-54.7,-179.7,194.6,290.5), new cjs.Rectangle(-52.3,-180,193.4,290.3), new cjs.Rectangle(-49.7,-180.3,192.1,290.1), new cjs.Rectangle(-47.2,-180.4,190.9,289.8), new cjs.Rectangle(-45,-180.4,189.8,289.8), new cjs.Rectangle(-42.5,-180.7,188.6,289.9), new cjs.Rectangle(-40,-181.1,187.3,290.4), new cjs.Rectangle(-37.8,-180.9,186.2,290.2), new cjs.Rectangle(-35.4,-181.2,185,290.5), new cjs.Rectangle(-32.9,-181.4,183.8,290.8), new cjs.Rectangle(-30.5,-181.6,182.6,290.9), new cjs.Rectangle(-28.3,-181.1,181.5,290.4), new cjs.Rectangle(-26,-181,180.4,290.3), new cjs.Rectangle(-23.5,-180.9,179.2,290.1), new cjs.Rectangle(-21.5,-180.5,178.1,289.8), new cjs.Rectangle(-19.1,-180.3,177,289.9), new cjs.Rectangle(-16.8,-180.2,175.8,290), new cjs.Rectangle(-14.5,-180.1,174.7,290.2), new cjs.Rectangle(-72,-268.8,292.8,467.8), new cjs.Rectangle(-14.5,-180.2,174.7,290.1), new cjs.Rectangle(-16.7,-180.3,175.8,290.1), new cjs.Rectangle(-19,-180.3,176.9,290), new cjs.Rectangle(-21,-180.5,177.9,289.7), new cjs.Rectangle(-23.4,-180.7,179,289.8), new cjs.Rectangle(-25.5,-181.3,180.1,290.5), new cjs.Rectangle(-27.7,-181.3,181.2,290.5), new cjs.Rectangle(-30.1,-181.2,182.4,290.4), new cjs.Rectangle(-32.2,-181.6,183.4,290.9), new cjs.Rectangle(-34.6,-181.4,184.6,290.6), new cjs.Rectangle(-37,-181.1,185.8,290.3), new cjs.Rectangle(-39.2,-181.3,186.9,290.5), new cjs.Rectangle(-41.6,-180.7,188,289.9), new cjs.Rectangle(-43.8,-180.8,189.1,290), new cjs.Rectangle(-46.2,-180.5,190.4,289.8), new cjs.Rectangle(-48.6,-180.3,191.5,290.1), new cjs.Rectangle(-50.9,-180.3,192.7,290.1), new cjs.Rectangle(-53.3,-180,193.9,290.3), new cjs.Rectangle(-55.8,-179.7,195.1,290.6), new cjs.Rectangle(-58,-179.7,196.2,290.7), new cjs.Rectangle(-60.4,-179.3,197.4,291), new cjs.Rectangle(-63.1,-178.9,199,291.4), new cjs.Rectangle(-67.2,-178.8,203.7,291.5), new cjs.Rectangle(-71.6,-178.4,208.9,292), new cjs.Rectangle(-75.6,-178.1,213.5,292.1), new cjs.Rectangle(-80,-177.7,218.7,292.5), new cjs.Rectangle(-84.5,-177.2,223.8,293.1), new cjs.Rectangle(-88.6,-177,228.5,293.4), new cjs.Rectangle(-93,-176.4,233.6,293.8), new cjs.Rectangle(-196.5,-254.7,437.1,451.5)];


(lib.w4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing4();
	this.instance.setTransform(129,21,1,1,23,0,0,129,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:21.1,rotation:12.3,y:21.1},29).to({regY:21,rotation:23,y:21},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-247.2,-149.2,386.6,381.4);
p.frameBounds = [rect, new cjs.Rectangle(-237.3,-138.6,367.7,362.9), new cjs.Rectangle(-236.6,-136.6,366.8,361.9), new cjs.Rectangle(-236.3,-135.4,366.2,361.3), new cjs.Rectangle(-235.9,-134.2,365.7,360.7), new cjs.Rectangle(-235.2,-132.2,364.7,359.5), new cjs.Rectangle(-234.7,-131,364.1,359), new cjs.Rectangle(-234,-128.9,363.1,357.8), new cjs.Rectangle(-233.6,-127.7,362.5,357.1), new cjs.Rectangle(-232.8,-125.6,361.5,356), new cjs.Rectangle(-232.3,-124.4,360.9,355.3), new cjs.Rectangle(-231.5,-122.3,359.8,354.1), new cjs.Rectangle(-231,-121,359.2,353.4), new cjs.Rectangle(-230.3,-119,358.1,352.2), new cjs.Rectangle(-229.7,-117.7,357.4,351.4), new cjs.Rectangle(-228.8,-115.7,356.2,350.2), new cjs.Rectangle(-228.3,-114.4,355.5,349.4), new cjs.Rectangle(-227.3,-112.3,354.3,348), new cjs.Rectangle(-226.8,-111,353.6,347.3), new cjs.Rectangle(-225.8,-108.9,352.4,346), new cjs.Rectangle(-225.2,-107.6,351.7,345.1), new cjs.Rectangle(-224.3,-105.5,350.4,343.8), new cjs.Rectangle(-223.6,-104.2,349.6,342.9), new cjs.Rectangle(-222.6,-102,348.3,341.6), new cjs.Rectangle(-222,-100.7,347.6,340.7), new cjs.Rectangle(-221.4,-99.4,346.8,339.9), new cjs.Rectangle(-220.3,-97.3,345.4,338.4), new cjs.Rectangle(-219.7,-96,344.6,337.5), new cjs.Rectangle(-218.5,-93.8,343.2,336), new cjs.Rectangle(-223,-97.3,352.3,344.7), new cjs.Rectangle(-218.5,-93.7,343.2,336), new cjs.Rectangle(-219.2,-95.1,344,336.9), new cjs.Rectangle(-220.2,-97.1,345.4,338.4), new cjs.Rectangle(-220.9,-98.5,346.2,339.2), new cjs.Rectangle(-221.9,-100.6,347.5,340.7), new cjs.Rectangle(-222.6,-101.9,348.3,341.5), new cjs.Rectangle(-223.6,-104.1,349.6,342.9), new cjs.Rectangle(-224.2,-105.3,350.3,343.7), new cjs.Rectangle(-224.8,-106.6,351.1,344.5), new cjs.Rectangle(-225.7,-108.7,352.3,345.9), new cjs.Rectangle(-226.3,-110,353.1,346.7), new cjs.Rectangle(-227.3,-112.1,354.2,348), new cjs.Rectangle(-227.8,-113.4,355,348.8), new cjs.Rectangle(-228.7,-115.5,356.1,350), new cjs.Rectangle(-229.3,-116.6,356.8,350.8), new cjs.Rectangle(-229.8,-117.9,357.5,351.6), new cjs.Rectangle(-230.6,-120,358.6,352.8), new cjs.Rectangle(-231.1,-121.2,359.3,353.5), new cjs.Rectangle(-231.9,-123.3,360.3,354.7), new cjs.Rectangle(-232.4,-124.5,361,355.4), new cjs.Rectangle(-233.2,-126.6,362,356.5), new cjs.Rectangle(-233.6,-127.8,362.5,357.2), new cjs.Rectangle(-234.1,-129,363.2,357.9), new cjs.Rectangle(-234.8,-131,364.2,359), new cjs.Rectangle(-235.2,-132.2,364.8,359.7), new cjs.Rectangle(-235.9,-134.2,365.7,360.7), new cjs.Rectangle(-236.2,-135.4,366.3,361.3), new cjs.Rectangle(-236.9,-137.4,367.2,362.4), new cjs.Rectangle(-237.3,-138.6,367.7,363), new cjs.Rectangle(-247.2,-149.2,386.6,381.4)];


(lib.w3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing3();
	this.instance.setTransform(129,21,1,1,23,0,0,129,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:128.9,regY:21.1,rotation:-3,x:128.9},29).to({regX:129,regY:21,rotation:23,x:129},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-285.2,-184.2,448.5,473.2);
p.frameBounds = [rect, new cjs.Rectangle(-257.8,-148.5,395.1,408), new cjs.Rectangle(-256.2,-145.1,393.3,407.7), new cjs.Rectangle(-254.9,-142.5,391.7,407.5), new cjs.Rectangle(-253.2,-139,389.8,407.1), new cjs.Rectangle(-251.5,-135.6,387.7,406.5), new cjs.Rectangle(-249.9,-132.7,385.9,406), new cjs.Rectangle(-247.9,-129.2,383.5,405.3), new cjs.Rectangle(-246.3,-126.3,381.7,404.5), new cjs.Rectangle(-244.1,-122.7,379.2,403.6), new cjs.Rectangle(-242.2,-119.7,377,402.7), new cjs.Rectangle(-239.8,-116.1,374.4,401.5), new cjs.Rectangle(-237.3,-112.4,371.5,400.2), new cjs.Rectangle(-235.2,-109.3,369.2,399.1), new cjs.Rectangle(-232.5,-105.5,366.2,397.6), new cjs.Rectangle(-230.2,-102.4,363.7,396.3), new cjs.Rectangle(-227.3,-98.5,360.5,394.6), new cjs.Rectangle(-224.4,-94.6,357.2,392.8), new cjs.Rectangle(-221.9,-91.4,354.5,391.2), new cjs.Rectangle(-218.7,-87.5,350.9,389.2), new cjs.Rectangle(-216,-84.3,348.1,387.5), new cjs.Rectangle(-212.7,-80.2,344.4,385.2), new cjs.Rectangle(-209.3,-76.2,340.7,382.8), new cjs.Rectangle(-206.5,-72.9,337.5,380.9), new cjs.Rectangle(-202.8,-68.8,333.5,378.4), new cjs.Rectangle(-199.8,-65.5,330.3,376.3), new cjs.Rectangle(-196.7,-62.1,327,374), new cjs.Rectangle(-193.5,-58.8,323.6,371.7), new cjs.Rectangle(-189.6,-54.6,319.3,368.8), new cjs.Rectangle(-201.8,-63.3,347.5,391.7), new cjs.Rectangle(-189.5,-54.6,319.3,368.8), new cjs.Rectangle(-192.7,-57.9,322.7,371.1), new cjs.Rectangle(-196.5,-62.1,326.9,374), new cjs.Rectangle(-198.9,-64.6,329.4,375.7), new cjs.Rectangle(-202.6,-68.7,333.4,378.3), new cjs.Rectangle(-205.5,-71.9,336.6,380.3), new cjs.Rectangle(-209,-76,340.4,382.8), new cjs.Rectangle(-211.8,-79.2,343.4,384.7), new cjs.Rectangle(-215.1,-83.2,347.1,386.9), new cjs.Rectangle(-217.8,-86.4,350,388.6), new cjs.Rectangle(-220.3,-89.6,352.8,390.3), new cjs.Rectangle(-223.4,-93.5,356.2,392.3), new cjs.Rectangle(-225.8,-96.6,358.9,393.8), new cjs.Rectangle(-228.7,-100.5,362.1,395.5), new cjs.Rectangle(-231,-103.6,364.6,396.8), new cjs.Rectangle(-233.7,-107.4,367.7,398.4), new cjs.Rectangle(-235.9,-110.4,370,399.5), new cjs.Rectangle(-238.4,-114.2,372.9,400.8), new cjs.Rectangle(-240.4,-117.1,375.1,401.9), new cjs.Rectangle(-242.7,-120.8,377.8,403), new cjs.Rectangle(-244.5,-123.7,379.8,403.8), new cjs.Rectangle(-246.7,-127.3,382.3,404.8), new cjs.Rectangle(-248.3,-130.1,384.2,405.5), new cjs.Rectangle(-250.3,-133.6,386.4,406.2), new cjs.Rectangle(-251.8,-136.4,388.2,406.7), new cjs.Rectangle(-253.5,-139.8,390.2,407.2), new cjs.Rectangle(-254.9,-142.6,391.8,407.5), new cjs.Rectangle(-256.2,-145.3,393.3,407.7), new cjs.Rectangle(-257.7,-148.6,395,408), new cjs.Rectangle(-285.2,-184.2,448.5,473.2)];


(lib.w2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing2();
	this.instance.setTransform(129,21.1,1,1,-7,0,0,128.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7,rotation:0,skewX:-7,skewY:8.5,x:129.1,y:21},29).to({scaleX:1,rotation:-7,skewX:0,skewY:0,x:129,y:21.1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-122.7,182.5,243.4);
p.frameBounds = [rect, new cjs.Rectangle(-37,-122.6,180.9,241.2), new cjs.Rectangle(-35.6,-122.5,179.5,239.7), new cjs.Rectangle(-34.2,-122.5,178,238.2), new cjs.Rectangle(-32.8,-122.4,176.5,236.7), new cjs.Rectangle(-31.2,-122.3,175,235.2), new cjs.Rectangle(-29.8,-122.3,173.4,233.8), new cjs.Rectangle(-28.3,-122.2,171.9,232.4), new cjs.Rectangle(-26.8,-122.2,170.3,231.1), new cjs.Rectangle(-25.3,-122.2,168.8,229.3), new cjs.Rectangle(-23.7,-122.1,167.2,228), new cjs.Rectangle(-22.2,-122.1,165.5,226.7), new cjs.Rectangle(-20.6,-122,164,225.5), new cjs.Rectangle(-19.1,-122,162.4,224.3), new cjs.Rectangle(-17.5,-122.6,160.7,224.9), new cjs.Rectangle(-15.8,-123.8,159,226.1), new cjs.Rectangle(-14.2,-125.3,157.4,227.6), new cjs.Rectangle(-12.6,-126.3,155.8,228.7), new cjs.Rectangle(-10.9,-127.4,154,229.8), new cjs.Rectangle(-9.4,-128.4,152.4,230.8), new cjs.Rectangle(-7.7,-129.4,150.6,231.8), new cjs.Rectangle(-6,-130.3,149,232.8), new cjs.Rectangle(-4.4,-131.2,147.3,233.8), new cjs.Rectangle(-2.7,-132.1,145.6,234.7), new cjs.Rectangle(-1,-133.3,143.8,235.9), new cjs.Rectangle(0.6,-134.2,142.1,236.8), new cjs.Rectangle(2.3,-134.9,140.3,237.6), new cjs.Rectangle(4,-135.7,138.6,238.4), new cjs.Rectangle(5.7,-136.4,136.8,239.2), new cjs.Rectangle(7.3,-137.6,135.2,240.3), new cjs.Rectangle(5.7,-136.5,136.8,239.2), new cjs.Rectangle(4.1,-135.7,138.5,238.4), new cjs.Rectangle(2.4,-134.9,140.2,237.6), new cjs.Rectangle(0.8,-134.2,141.8,236.8), new cjs.Rectangle(-0.8,-133.4,143.5,236), new cjs.Rectangle(-2.4,-132.5,145.2,235.1), new cjs.Rectangle(-4,-131.6,146.9,234.2), new cjs.Rectangle(-5.6,-130.8,148.5,233.3), new cjs.Rectangle(-7.2,-129.8,150.1,232.3), new cjs.Rectangle(-8.8,-128.8,151.8,231.3), new cjs.Rectangle(-10.4,-127.9,153.5,230.3), new cjs.Rectangle(-11.9,-126.8,155,229.2), new cjs.Rectangle(-13.5,-125.4,156.7,227.7), new cjs.Rectangle(-15.1,-124.3,158.3,226.6), new cjs.Rectangle(-16.7,-123.3,159.9,225.5), new cjs.Rectangle(-18.2,-122.1,161.5,224.3), new cjs.Rectangle(-19.7,-122.1,163.1,224.9), new cjs.Rectangle(-21.2,-122.2,164.6,226.1), new cjs.Rectangle(-22.8,-122.2,166.2,227.3), new cjs.Rectangle(-24.3,-122.2,167.7,228.6), new cjs.Rectangle(-25.7,-122.3,169.2,229.9), new cjs.Rectangle(-27.2,-122.3,170.8,231.2), new cjs.Rectangle(-28.6,-122.3,172.3,232.5), new cjs.Rectangle(-30.1,-122.4,173.8,233.9), new cjs.Rectangle(-31.5,-122.5,175.2,235.3), new cjs.Rectangle(-32.9,-122.5,176.7,236.8), new cjs.Rectangle(-34.3,-122.5,178.1,238.2), new cjs.Rectangle(-35.8,-122.5,179.6,239.7), new cjs.Rectangle(-37.1,-122.7,180.9,241.7), new cjs.Rectangle(-38.5,-122.7,182.5,243.4)];


(lib.w1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing1();
	this.instance.setTransform(129,21,1,1,23,0,0,129,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:128.9,regY:21.1,rotation:-22,x:128.9,y:21.1},29).to({regX:129,regY:21,rotation:23,x:129,y:21},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.9,-152.1,284.8,206.9);
p.frameBounds = [rect, new cjs.Rectangle(-125.4,-145.8,284.3,200.9), new cjs.Rectangle(-127,-140,283.9,195.5), new cjs.Rectangle(-128.4,-134.2,283.3,190), new cjs.Rectangle(-129.5,-128.3,282.5,184.3), new cjs.Rectangle(-130.6,-121.6,281.4,177.8), new cjs.Rectangle(-131.4,-115.5,280.3,171.9), new cjs.Rectangle(-132,-109.3,278.9,165.8), new cjs.Rectangle(-132.5,-103,277.3,159.7), new cjs.Rectangle(-132.8,-96.6,275.5,153.4), new cjs.Rectangle(-132.8,-89.3,273.3,146.1), new cjs.Rectangle(-132.7,-82.8,271,139.8), new cjs.Rectangle(-132.4,-76.1,268.7,133.1), new cjs.Rectangle(-131.9,-69.4,266.2,126.5), new cjs.Rectangle(-131.2,-62.6,263.4,119.7), new cjs.Rectangle(-130.8,-57.1,261.5,115.2), new cjs.Rectangle(-132.6,-57.1,264.4,122.1), new cjs.Rectangle(-134.4,-57,267.1,128.8), new cjs.Rectangle(-135.9,-56.9,269.5,135.4), new cjs.Rectangle(-137.5,-56.7,272.1,142.8), new cjs.Rectangle(-138.6,-56.5,274.2,149.3), new cjs.Rectangle(-139.6,-56.2,276.1,155.6), new cjs.Rectangle(-140.4,-55.9,277.9,161.8), new cjs.Rectangle(-141,-55.5,279.3,167.9), new cjs.Rectangle(-141.5,-55,280.8,174.6), new cjs.Rectangle(-141.7,-54.5,281.9,180.5), new cjs.Rectangle(-141.7,-54,282.8,186.3), new cjs.Rectangle(-141.5,-53.4,283.5,191.9), new cjs.Rectangle(-141.2,-52.7,284,197.4), new cjs.Rectangle(-140.9,-51.9,284.7,203.6), new cjs.Rectangle(-141.1,-52.5,284.1,198.1), new cjs.Rectangle(-141.5,-53.1,283.7,192.7), new cjs.Rectangle(-141.7,-53.7,283,187.1), new cjs.Rectangle(-141.7,-54.3,282.1,181.4), new cjs.Rectangle(-141.5,-54.8,281,175.6), new cjs.Rectangle(-141.2,-55.3,279.8,169.8), new cjs.Rectangle(-140.6,-55.6,278.3,163.7), new cjs.Rectangle(-139.8,-56,276.7,157.6), new cjs.Rectangle(-138.9,-56.3,274.9,151.3), new cjs.Rectangle(-137.9,-56.5,272.9,145), new cjs.Rectangle(-136.6,-56.7,270.7,138.5), new cjs.Rectangle(-135.1,-56.9,268.3,132), new cjs.Rectangle(-133.5,-56.9,265.7,125.3), new cjs.Rectangle(-131.7,-57,263,118.6), new cjs.Rectangle(-130.6,-58.3,261.6,115.4), new cjs.Rectangle(-131.5,-65.1,264.5,122.2), new cjs.Rectangle(-132.1,-71.8,267,128.9), new cjs.Rectangle(-132.5,-78.4,269.6,135.4), new cjs.Rectangle(-132.8,-84.9,271.8,141.9), new cjs.Rectangle(-132.9,-91.5,274,148.4), new cjs.Rectangle(-132.8,-97.8,275.9,154.6), new cjs.Rectangle(-132.4,-104.2,277.5,160.9), new cjs.Rectangle(-132,-110.4,279.1,166.9), new cjs.Rectangle(-131.3,-116.5,280.5,172.9), new cjs.Rectangle(-130.5,-122.6,281.6,178.8), new cjs.Rectangle(-129.5,-128.6,282.6,184.5), new cjs.Rectangle(-128.3,-134.4,283.3,190.1), new cjs.Rectangle(-127,-140.1,283.9,195.6), new cjs.Rectangle(-125.4,-145.8,284.3,200.9), new cjs.Rectangle(-123.9,-152.1,284.8,206.9)];


(lib.top6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_top6_img();
	this.instance.setTransform(-84.7,-33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4();
	this.instance_1.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.7,-63.2,110.5,94.4);
p.frameBounds = [rect];


(lib.top5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_top5_img();
	this.instance.setTransform(-115.7,-45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_3();
	this.instance_1.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.7,-63.2,161,131.4);
p.frameBounds = [rect];


(lib.top4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_top4_img();
	this.instance.setTransform(-118.7,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_3();
	this.instance_1.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.7,-63.2,166,111.4);
p.frameBounds = [rect];


(lib.top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_top3_img();
	this.instance.setTransform(-118.7,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_3();
	this.instance_1.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.7,-63.2,168,121.4);
p.frameBounds = [rect];


(lib.top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_top2_img();
	this.instance.setTransform(-107.7,-34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_3();
	this.instance_1.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.7,-63.2,152,118.4);
p.frameBounds = [rect];


(lib.top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_top1_img();
	this.instance.setTransform(-80.7,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_3();
	this.instance_1.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.2,-63.2,162.5,126.4);
p.frameBounds = [rect];


(lib.top_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top6();
	this.instance.setTransform(40,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AophGIGXnhIFqgCIFSG8IjGKUIq2ADg");
	this.shape.setTransform(2.3,46);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-9.5,118.8,110.9);
p.frameBounds = [rect];


(lib.top_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top5();
	this.instance.setTransform(39.3,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApUKkIkGqaIBcmcII6lKIL8ACIEjJiIghFgIoyH1g");
	this.shape.setTransform(3.8,64.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.1,-8.9,171.9,146.6);
p.frameBounds = [rect];


(lib.top_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top4();
	this.instance.setTransform(40.3,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqJJ3IjllTIAuj7IKLqiIF6AAIKfJ/IALElIkSFOg");
	this.shape.setTransform(4.2,56.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.7,-6.5,175.8,126.8);
p.frameBounds = [rect];


(lib.top_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top3();
	this.instance.setTransform(40.3,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYKXIkHjSIgWjYILfuhIFoAAIKkOwIgMDZIlQDgg");
	this.shape.setTransform(4.6,60.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-9,177.3,138.7);
p.frameBounds = [rect];


(lib.top_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top2();
	this.instance.setTransform(40.3,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjhKJIpPmuIAwl/IJCoHIFoAAIJsIUIAbEcIpNIng");
	this.shape.setTransform(8.2,59.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-8.5,163.5,136.9);
p.frameBounds = [rect];


(lib.top_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top1();
	this.instance.setTransform(40,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArcKrIiutNIG6oxIHlgCIMLF+IBrDtIh0F8IsZHEg");
	this.shape.setTransform(37.8,62.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.9,-9.8,181.6,145.3);
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


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.4,0.4,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.shadows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.semicircular_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(28,-62,1,1,-45);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-100,40,1,1,-45);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-70,-45,1,1,-45);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.semicircular_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.round_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(-20,-80);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-20,80);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-80,0,1,1,-90);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.round_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.quest1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.quest1_13_1();
	this.instance.setTransform(0,0,1,1,0,0,180);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},39).to({alpha:0.012},40).wait(1));

	// Слой 1
	this.instance_1 = new lib.quest1_13_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.012},39).to({alpha:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-418.5,-204.5,837,409);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AocEBIkDgXQArjbgrj4ID0gJIA6kBIURH2I0AHxg");

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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF0AAEIEIQEIEHAAF0QAAF1kIEHQkIEIl0AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180.1,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.shadow_nav_3_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:0.012},30).wait(1));

	// graph
	this.instance_1 = new lib.body_nav_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shadow_nav_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:0.801},15).to({alpha:0.012},15).wait(1));

	// graph
	this.instance_1 = new lib.nav_2_img();
	this.instance_1.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHuQjNjMAAkiQAAkgDNjOQDOjNEgAAQEhAADNDNQDODOAAEgQAAEijODMQjNDOkhAAQkgAAjOjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

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


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.4,0.4,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.head_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.head1();

	this.instance_1 = new lib.head2();

	this.instance_2 = new lib.head3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.3,-145.2,229,291);
p.frameBounds = [rect, rect, rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes1();
	this.instance.setTransform(1.7,-3);

	this.instance_1 = new lib.eyes2();
	this.instance_1.setTransform(1.7,-3);

	this.instance_2 = new lib.eyes3();
	this.instance_2.setTransform(1.7,-3);

	this.instance_3 = new lib.eyes4();
	this.instance_3.setTransform(1.7,-3);

	this.instance_4 = new lib.eyes5();
	this.instance_4.setTransform(1.7,-3);

	this.instance_5 = new lib.eyes6();
	this.instance_5.setTransform(1.7,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.3,-29,207,65);
p.frameBounds = [rect, new cjs.Rectangle(-102.4,-28.8,207,65), new cjs.Rectangle(-102.3,-29,207,65), new cjs.Rectangle(-102.4,-29,207,65), rect=new cjs.Rectangle(-102.3,-29,207,65), rect];


(lib.earrings6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring6();
	this.instance.setTransform(96.4,-6.6);

	this.instance_1 = new lib.earring6();
	this.instance_1.setTransform(-96.3,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.6,-65.4,245.8,131.2);
p.frameBounds = [rect];


(lib.earrings5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring5();
	this.instance.setTransform(95.9,-8.2);

	this.instance_1 = new lib.earring5();
	this.instance_1.setTransform(-95.9,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.6,-42.5,226.8,85.4);
p.frameBounds = [rect];


(lib.earrings4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring4();
	this.instance.setTransform(96,-8.9);

	this.instance_1 = new lib.earring4();
	this.instance_1.setTransform(-95.9,8.9,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.3,-38.9,214.8,77.8);
p.frameBounds = [rect];


(lib.earrings3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring3();
	this.instance.setTransform(102.3,-8.4,1,1,0,-15,165);

	this.instance_1 = new lib.earring3();
	this.instance_1.setTransform(-102.3,8.4,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.1,-58.7,302.3,107.4);
p.frameBounds = [rect];


(lib.earrings2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring2();
	this.instance.setTransform(96.4,-6);

	this.instance_1 = new lib.earring2();
	this.instance_1.setTransform(-96.2,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-38.5,218.6,77.1);
p.frameBounds = [rect];


(lib.earrings1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring1();
	this.instance.setTransform(96.5,-7.5);

	this.instance_1 = new lib.earring1();
	this.instance_1.setTransform(-96.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-54,220,108);
p.frameBounds = [rect];


(lib.earrings_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earrings1();

	this.instance_1 = new lib.earrings2();
	this.instance_1.setTransform(0.4,-18.9);

	this.instance_2 = new lib.earrings3();
	this.instance_2.setTransform(1.4,-9.1);

	this.instance_3 = new lib.earrings4();
	this.instance_3.setTransform(0.8,-15);

	this.instance_4 = new lib.earrings5();
	this.instance_4.setTransform(0.3,-14.7);

	this.instance_5 = new lib.earrings6();
	this.instance_5.setTransform(2.1,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-54,220,108);
p.frameBounds = [rect, new cjs.Rectangle(-108.6,-57.5,218.6,77.1), new cjs.Rectangle(-149.8,-67.8,302.3,107.4), new cjs.Rectangle(-106.6,-53.9,214.8,77.8), new cjs.Rectangle(-113.3,-57.3,226.8,85.4), new cjs.Rectangle(-120.5,-55.9,245.8,131.2), null];


(lib.earrings_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring6();
	this.instance.setTransform(27.8,0.3);

	this.instance_1 = new lib.earring6();
	this.instance_1.setTransform(-28.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring5();
	this.instance.setTransform(20.6,-0.2);

	this.instance_1 = new lib.earring5();
	this.instance_1.setTransform(-20.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvmIPnAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.earrings_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring4();
	this.instance.setTransform(16.3,0);

	this.instance_1 = new lib.earring4();
	this.instance_1.setTransform(-16.2,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvmIPnAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.earrings_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring3();
	this.instance.setTransform(32.8,4.8,1,1,0,-15,165);

	this.instance_1 = new lib.earring3();
	this.instance_1.setTransform(-32.8,5.2,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArDHoIj0oVIFAnJIUaAIIEVGyIjdIzg");
	this.shape.setTransform(-1.4,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.7,-52.7,190.5,100.7);
p.frameBounds = [rect];


(lib.earrings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring2();
	this.instance.setTransform(15.6,0.1);

	this.instance_1 = new lib.earring2();
	this.instance_1.setTransform(-16,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzHzIAAvmIPnAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.earrings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring1();
	this.instance.setTransform(-15.5,-4.9,1,1,0,30,-150);

	this.instance_1 = new lib.earring1();
	this.instance_1.setTransform(15.6,13,1,1,0,30,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AozE7IDAqAIG3kZIHwEJIhvIhIojGTg");
	this.shape.setTransform(-1.5,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.8,-56.4,112.8,121.5);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.dress6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_dress6_img();
	this.instance.setTransform(-112.5,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_3();
	this.instance_1.setTransform(20.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-148.5,224,444);
p.frameBounds = [rect];


(lib.dress5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_dress5_img();
	this.instance.setTransform(-178.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_3();
	this.instance_1.setTransform(20.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178.5,-148.5,356,414);
p.frameBounds = [rect];


(lib.dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_dress4_img();
	this.instance.setTransform(-208.5,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_3();
	this.instance_1.setTransform(20.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.5,-148.5,409,461);
p.frameBounds = [rect];


(lib.dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_dress3_img();
	this.instance.setTransform(-161.5,-113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_3();
	this.instance_1.setTransform(20.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.5,-148.5,311,330);
p.frameBounds = [rect];


(lib.dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_dress2_img();
	this.instance.setTransform(-122.5,-117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_3();
	this.instance_1.setTransform(20.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-148.5,265,262);
p.frameBounds = [rect];


(lib.dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_dress1_img();
	this.instance.setTransform(-85.5,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_3();
	this.instance_1.setTransform(20.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-148.5,171,297);
p.frameBounds = [rect];


(lib.dress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress6();
	this.instance.setTransform(-8,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Asos/IJbq8IG2ABIJAIeMgFhAmqIy5Aug");
	this.shape.setTransform(-1,143.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.5,-9.4,224,453.5);
p.frameBounds = [rect];


(lib.dress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress5();
	this.instance.setTransform(-8.5,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2ViNISut1ILfAAIOTMUIALGrIqHMbI/3Arg");
	this.shape.setTransform(3,93.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187,-9,356,423.1);
p.frameBounds = [rect];


(lib.dress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress4();
	this.instance.setTransform(-8,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AonOdIh60MIGPq7IGIAAIIsJ4IkPXdg");
	this.shape.setTransform(10.7,97.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-216.5,-9,409,470.1);
p.frameBounds = [rect];


(lib.dress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress3();
	this.instance.setTransform(-9,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AntNQIlTxBIH5rFIJKAAII+KzIofS6g");
	this.shape.setTransform(7.5,85.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170.5,-10,311,340.1);
p.frameBounds = [rect];


(lib.dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress2();
	this.instance.setTransform(-8.5,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1uOUIG47KIKLpgIKVAAIM0JvMADRAgoI4mCWg");
	this.shape.setTransform(1.2,133.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.9,-10,278.3,286.4);
p.frameBounds = [rect];


(lib.dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress1();
	this.instance.setTransform(-8.5,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArZWFIixzVINV7NIEsAAIIgKGIB0Y/ImZN2g");
	this.shape.setTransform(-9.7,148.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.4,-8.5,181.5,313.3);
p.frameBounds = [rect];


(lib.current_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.check_hairstyle_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_hairstyle_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_hairstyle_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_hairstyle_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect, rect];


(lib.check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// animation
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_8_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.check_7_img();
	this.instance_2.setTransform(-60,-60);

	this.instance_3 = new lib.check_6_img();
	this.instance_3.setTransform(-60,-60);

	this.instance_4 = new lib.check_5_img();
	this.instance_4.setTransform(-60,-60);

	this.instance_5 = new lib.check_4_img();
	this.instance_5.setTransform(-60,-60);

	this.instance_6 = new lib.check_3_img();
	this.instance_6.setTransform(-60,-60);

	this.instance_7 = new lib.check_2_img();
	this.instance_7.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:0.012}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance,p:{alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.butt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butt();
	this.instance.setTransform(0,0,1,1,0,0,0,28.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-37.5,y:-208.6},19).to({rotation:75,x:205.1,y:-182.4},20).to({regX:28.6,regY:20.4,rotation:210,x:204.9},1).to({x:47.2,y:50.3},16).to({rotation:300,y:50.2},1).to({regX:28.5,regY:20.5,rotation:360,x:0,y:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.5,-20.5,57,41);
p.frameBounds = [rect, new cjs.Rectangle(-30.4,-31.5,57,41), new cjs.Rectangle(-32.4,-42.4,57,41), new cjs.Rectangle(-34.4,-53.4,57,41), new cjs.Rectangle(-36.4,-64.4,57,41), new cjs.Rectangle(-38.3,-75.4,57,41), new cjs.Rectangle(-40.3,-86.3,57,41), new cjs.Rectangle(-42.3,-97.3,57,41), new cjs.Rectangle(-44.3,-108.3,57,41), new cjs.Rectangle(-46.2,-119.3,57,41), new cjs.Rectangle(-48.2,-130.3,57,41), new cjs.Rectangle(-50.2,-141.2,57,41), new cjs.Rectangle(-52.2,-152.2,57,41), new cjs.Rectangle(-54.1,-163.2,57,41), new cjs.Rectangle(-56.1,-174.2,57,41), new cjs.Rectangle(-58.1,-185.2,57,41), new cjs.Rectangle(-60.1,-196.1,57,41), new cjs.Rectangle(-62,-207.1,57,41), new cjs.Rectangle(-64,-218.1,57,41), new cjs.Rectangle(-66,-229.1,57,41), new cjs.Rectangle(-55.1,-229.6,59.6,44.7), new cjs.Rectangle(-44.2,-230,61.9,48.1), new cjs.Rectangle(-32.9,-230.3,63.8,51.2), new cjs.Rectangle(-21.7,-230.4,65.6,54.1), new cjs.Rectangle(-10.3,-230.5,67.1,57), new cjs.Rectangle(1.1,-230.5,68.3,59.7), new cjs.Rectangle(12.8,-230.4,69.2,61.9), new cjs.Rectangle(24.6,-230.1,69.8,63.9), new cjs.Rectangle(36.7,-229.6,70.1,65.6), new cjs.Rectangle(48.8,-229.1,70.1,67.1), new cjs.Rectangle(61,-228.4,69.8,68.3), new cjs.Rectangle(73.5,-227.5,69.1,69.2), new cjs.Rectangle(86,-226.5,68.4,69.8), new cjs.Rectangle(98.8,-225.4,67.2,70.1), new cjs.Rectangle(111.6,-224.1,65.7,70.1), new cjs.Rectangle(124.6,-222.6,64,69.8), new cjs.Rectangle(137.7,-221,61.9,69.2), new cjs.Rectangle(151,-219.2,59.7,68.3), new cjs.Rectangle(164.4,-217.3,57.1,67.1), new cjs.Rectangle(177.9,-215.3,54.4,65.7), new cjs.Rectangle(170.1,-214.5,69.9,64), new cjs.Rectangle(160.4,-199.9,69.8,63.9), new cjs.Rectangle(150.5,-185.3,69.8,63.9), new cjs.Rectangle(140.7,-170.8,69.8,63.9), new cjs.Rectangle(130.8,-156.3,69.8,63.9), new cjs.Rectangle(120.9,-141.7,69.8,63.9), new cjs.Rectangle(111.1,-127.2,69.8,63.9), new cjs.Rectangle(101.2,-112.6,69.7,63.9), new cjs.Rectangle(91.4,-98.1,69.8,63.9), new cjs.Rectangle(81.5,-83.5,69.8,63.9), new cjs.Rectangle(71.7,-69,69.8,63.9), new cjs.Rectangle(61.8,-54.5,69.8,63.9), new cjs.Rectangle(52,-40,69.8,63.9), new cjs.Rectangle(42.1,-25.4,69.8,63.9), new cjs.Rectangle(32.2,-10.9,69.8,63.9), new cjs.Rectangle(22.4,3.7,69.8,63.9), new cjs.Rectangle(12.4,18.2,69.9,64), new cjs.Rectangle(15.3,15.4,64,69.9), new cjs.Rectangle(5.4,7.1,68,69.9), new cjs.Rectangle(-3.4,-0.3,69.9,68), new cjs.Rectangle(-11.2,-6.7,69.8,64), new cjs.Rectangle(-18,-12,67.5,57.9), new cjs.Rectangle(-23.8,-16.5,63.2,50.3), new cjs.Rectangle(-28.5,-20.5,57,41)];


(lib.bottom6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_bottom6_img();
	this.instance.setTransform(-106.2,-39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4();
	this.instance_1.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.2,-63.2,132,167.3);
p.frameBounds = [rect];


(lib.bottom5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_bottom5_img();
	this.instance.setTransform(-134.2,-42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4();
	this.instance_1.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.2,-63.2,184,183.3);
p.frameBounds = [rect];


(lib.bottom4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_bottom4_img();
	this.instance.setTransform(-129.3,-46.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4();
	this.instance_1.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.3,-63.2,189,306.3);
p.frameBounds = [rect];


(lib.bottom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_bottom3_1_img();
	this.instance.setTransform(-124.2,-35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero_bottom3_2_img();
	this.instance_1.setTransform(-124.2,-35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.closet1_4();
	this.instance_2.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.2,-63.2,155,267.3);
p.frameBounds = [rect];


(lib.bottom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_bottom2_img();
	this.instance.setTransform(-184.2,-42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4();
	this.instance_1.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.2,-63.2,270,189.3);
p.frameBounds = [rect];


(lib.bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_bottom1_img();
	this.instance.setTransform(-184.2,-42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4();
	this.instance_1.setTransform(-27.7,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.2,-63.2,210,179.3);
p.frameBounds = [rect];


(lib.bottom_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom6();
	this.instance.setTransform(39.8,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApuMSIAnwNIJfqXID/ABIFEJlIAUS/g");
	this.shape.setTransform(-11,84.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.4,-7.4,138.9,183.2);
p.frameBounds = [rect];


(lib.bottom_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom5();
	this.instance.setTransform(40.8,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnQOqIn8u9ICJkbILAqIIFjgBILVPqIAYDfIq0Kmg");
	this.shape.setTransform(-2,86.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.3,-8.2,194.7,191.6);
p.frameBounds = [rect];


(lib.bottom_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom4();
	this.instance.setTransform(39.8,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvfTAMAAsggsIKfriIIEABIHLOiIEldEIjWE6I4GB8g");
	this.shape.setTransform(6,152.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.2,-8.9,198.5,323.1);
p.frameBounds = [rect];


(lib.bottom_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom3();
	this.instance.setTransform(39.8,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj7VjIpi11IAim5ILcvXIIpABIGUWNIjvOKIoEItg");
	this.shape.setTransform(-9.7,136);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.9,-8.4,172.5,288.8);
p.frameBounds = [rect];


(lib.bottom_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom2();
	this.instance.setTransform(39.3,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ah6OqIp/imIl0j+IkgmgIDBnWIQ5qNII9ABIODPiIBhIGImdHPIniBDg");
	this.shape.setTransform(-10.5,95.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.7,-6.9,284.5,204.6);
p.frameBounds = [rect];


(lib.bottom_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom1();
	this.instance.setTransform(39.8,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwyJQIATpiIFsniIOcoRIF9gCIFZGhIB0OgI4DLOg");
	this.shape.setTransform(-46.4,95.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-154,-8.1,219.5,206.6);
p.frameBounds = [rect];


(lib.body2_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body2_1();

	this.instance_1 = new lib.body2_2();

	this.instance_2 = new lib.body2_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-276.2,-211.1,552,422);
p.frameBounds = [rect, rect, rect];


(lib.body1_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body1_1();

	this.instance_1 = new lib.body1_2();

	this.instance_2 = new lib.body1_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.7,-250.6,363,501);
p.frameBounds = [rect, rect, rect];


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


(lib.body_animation_circle_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle_nav_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({scaleX:2.5,scaleY:2.5,x:25,alpha:0.102},20).to({_off:true},1).wait(20));

	// animation
	this.instance_1 = new lib.circle_nav_mc();
	this.instance_1.alpha = 0.801;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({scaleX:2.5,scaleY:2.5,x:25,alpha:0.102},20).to({_off:true},1).wait(10));

	// animation
	this.instance_2 = new lib.circle_nav_mc();
	this.instance_2.alpha = 0.801;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({scaleX:2.5,scaleY:2.5,x:25,alpha:0.102},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40.9,120,81.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-63.2,-44,129,87.9), new cjs.Rectangle(-66.5,-47,138,94), new cjs.Rectangle(-69.7,-50.1,147,100.2), new cjs.Rectangle(-73,-53.2,156,106.3), new cjs.Rectangle(-76.2,-56.2,165,112.4), new cjs.Rectangle(-79.5,-59.3,174,118.6), new cjs.Rectangle(-82.7,-62.4,183,124.7), new cjs.Rectangle(-85.9,-65.4,192,130.8), new cjs.Rectangle(-89.2,-68.5,201,137), new cjs.Rectangle(-92.4,-71.6,210,143.1), new cjs.Rectangle(-95.7,-74.7,219,149.2), new cjs.Rectangle(-98.9,-77.8,228,155.3), new cjs.Rectangle(-102.2,-80.8,237,161.4), new cjs.Rectangle(-105.4,-83.9,246,167.6), new cjs.Rectangle(-108.7,-86.9,255,173.7), new cjs.Rectangle(-111.9,-90,264,179.9), new cjs.Rectangle(-115.2,-93.1,273,186), new cjs.Rectangle(-118.4,-96.1,282,192.1), new cjs.Rectangle(-121.7,-99.2,291,198.3), new cjs.Rectangle(-125,-102.2,300,204.4), new cjs.Rectangle(-95.7,-74.7,219,149.2), new cjs.Rectangle(-98.9,-77.8,228,155.3), new cjs.Rectangle(-102.2,-80.8,237,161.4), new cjs.Rectangle(-105.4,-83.9,246,167.6), new cjs.Rectangle(-108.7,-86.9,255,173.7), new cjs.Rectangle(-111.9,-90,264,179.9), new cjs.Rectangle(-115.2,-93.1,273,186), new cjs.Rectangle(-118.4,-96.1,282,192.1), new cjs.Rectangle(-121.7,-99.2,291,198.3), new cjs.Rectangle(-125,-102.2,300,204.4), new cjs.Rectangle(-95.7,-74.7,219,149.2), new cjs.Rectangle(-98.9,-77.8,228,155.3), new cjs.Rectangle(-102.2,-80.8,237,161.4), new cjs.Rectangle(-105.4,-83.9,246,167.6), new cjs.Rectangle(-108.7,-86.9,255,173.7), new cjs.Rectangle(-111.9,-90,264,179.9), new cjs.Rectangle(-115.2,-93.1,273,186), new cjs.Rectangle(-118.4,-96.1,282,192.1), new cjs.Rectangle(-121.7,-99.2,291,198.3), new cjs.Rectangle(-125,-102.2,300,204.4)];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.blesk_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_7("synched",0);
	this.instance.setTransform(0.5,0.5,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.4,-10.6,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14,29.1,29.1), new cjs.Rectangle(-17.4,-17.5,36.1,36.1), new cjs.Rectangle(-20.9,-20.9,42.8,42.8), new cjs.Rectangle(-23.7,-23.7,48.5,48.5), new cjs.Rectangle(-25.9,-25.9,52.9,52.9), new cjs.Rectangle(-27.3,-27.2,55.5,55.5), new cjs.Rectangle(-27.6,-27.5,56.1,56.1), new cjs.Rectangle(-26.7,-26.6,54.3,54.3), new cjs.Rectangle(-24.5,-24.5,50,50), new cjs.Rectangle(-27,-27,55.1,55.1), new cjs.Rectangle(-27.2,-27.2,55.6,55.6), new cjs.Rectangle(-25.6,-25.6,52.2,52.2), new cjs.Rectangle(-22.4,-22.3,45.7,45.7), new cjs.Rectangle(-18.1,-18.1,37.2,37.2), new cjs.Rectangle(-13.3,-13.2,27.6,27.6), new cjs.Rectangle(-10.2,-10.1,21.3,21.3), new cjs.Rectangle(-9.4,-9.3,19.6,19.6), new cjs.Rectangle(-7.3,-7.2,15.5,15.5), new cjs.Rectangle(-4.4,-4.4,9.8,9.8)];


(lib.arrow_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
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


(lib.animation_circle_nav_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.body_animation_circle_nav_mc();
	this.instance.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.3,-36.3,106.6,72.7);
p.frameBounds = [rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.4,0.4,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:22,end:59});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// logo
	this.instance = new lib.curtain_4_mc();
	this.instance.setTransform(600,300,0.667,0.667);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:600.1,y:300.1,alpha:0.211},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.41},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.03,scaleY:1.03,alpha:0.609},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.801},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:600,y:300,alpha:1},0).wait(10).to({alpha:0.91},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.461},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.012},0).to({_off:true},1).wait(20));

	// curtain_1
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(-1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:-944.4},0).wait(1).to({x:-888.9},0).wait(1).to({x:-833.3},0).wait(1).to({x:-777.7},0).wait(1).to({x:-722.2},0).wait(1).to({x:-666.6},0).wait(1).to({x:-611.1},0).wait(1).to({x:-555.5},0).wait(1).to({x:-500},0).wait(1).to({x:-444.4},0).wait(1).to({x:-388.9},0).wait(1).to({x:-333.3},0).wait(1).to({x:-277.7},0).wait(1).to({x:-222.2},0).wait(1).to({x:-166.6},0).wait(1).to({x:-111.1},0).wait(1).to({x:-55.5},0).wait(1).to({x:0},0).wait(10).to({x:-33.3},0).wait(1).to({x:-66.6},0).wait(1).to({x:-100},0).wait(1).to({x:-133.3},0).wait(1).to({x:-166.6},0).wait(1).to({x:-200},0).wait(1).to({x:-233.3},0).wait(1).to({x:-266.6},0).wait(1).to({x:-300},0).wait(1).to({x:-333.3},0).wait(1).to({x:-366.6},0).wait(1).to({x:-400},0).wait(1).to({x:-433.3},0).wait(1).to({x:-466.6},0).wait(1).to({x:-500},0).wait(1).to({x:-533.3},0).wait(1).to({x:-566.6},0).wait(1).to({x:-600},0).wait(1).to({x:-633.3},0).wait(1).to({x:-666.6},0).wait(1).to({x:-700},0).wait(1).to({x:-733.3},0).wait(1).to({x:-766.6},0).wait(1).to({x:-800},0).wait(1).to({x:-833.3},0).wait(1).to({x:-866.6},0).wait(1).to({x:-900},0).wait(1).to({x:-933.3},0).wait(1).to({x:-966.6},0).wait(1).to({x:-1000},0).wait(2));

	// curtain_2
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({x:944.5},0).wait(1).to({x:888.9},0).wait(1).to({x:833.4},0).wait(1).to({x:777.8},0).wait(1).to({x:722.2},0).wait(1).to({x:666.7},0).wait(1).to({x:611.1},0).wait(1).to({x:555.6},0).wait(1).to({x:500},0).wait(1).to({x:444.5},0).wait(1).to({x:388.9},0).wait(1).to({x:333.4},0).wait(1).to({x:277.8},0).wait(1).to({x:222.3},0).wait(1).to({x:166.7},0).wait(1).to({x:111.1},0).wait(1).to({x:55.6},0).wait(1).to({x:0},0).wait(10).to({x:33.4},0).wait(1).to({x:66.7},0).wait(1).to({x:100},0).wait(1).to({x:133.4},0).wait(1).to({x:166.7},0).wait(1).to({x:200},0).wait(1).to({x:233.4},0).wait(1).to({x:266.7},0).wait(1).to({x:300},0).wait(1).to({x:333.4},0).wait(1).to({x:366.7},0).wait(1).to({x:400},0).wait(1).to({x:433.4},0).wait(1).to({x:466.7},0).wait(1).to({x:500},0).wait(1).to({x:533.4},0).wait(1).to({x:566.7},0).wait(1).to({x:600},0).wait(1).to({x:633.4},0).wait(1).to({x:666.7},0).wait(1).to({x:700},0).wait(1).to({x:733.4},0).wait(1).to({x:766.7},0).wait(1).to({x:800},0).wait(1).to({x:833.4},0).wait(1).to({x:866.7},0).wait(1).to({x:900},0).wait(1).to({x:933.4},0).wait(1).to({x:966.7},0).wait(1).to({x:1000},0).wait(2));

	// bg
	this.instance_3 = new lib.curtain_3_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(9).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1000,0,3200,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(-944.4,0,3088.9,600), new cjs.Rectangle(-888.9,0,2977.8,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-777.7,0,2755.5,600), new cjs.Rectangle(-722.2,0,2644.4,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-611.1,0,2422.2,600), new cjs.Rectangle(-555.5,0,2311.1,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-444.4,0,2088.9,600), new cjs.Rectangle(-388.9,0,1977.8,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-277.7,0,1755.5,600), new cjs.Rectangle(-222.2,0,1644.5,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-111.1,-10,1422.2,620), new cjs.Rectangle(-55.5,-5,1311.1,610), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-33.3,0,1266.7,600), new cjs.Rectangle(-66.6,0,1333.3,600), new cjs.Rectangle(-100,0,1400,600), new cjs.Rectangle(-133.3,0,1466.7,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-200,0,1600,600), new cjs.Rectangle(-233.3,0,1666.7,600), new cjs.Rectangle(-266.6,0,1733.3,600), new cjs.Rectangle(-300,0,1800,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-366.6,0,1933.3,600), new cjs.Rectangle(-400,0,2000,600), new cjs.Rectangle(-433.3,0,2066.7,600), new cjs.Rectangle(-466.6,0,2133.3,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-533.3,0,2266.7,600), new cjs.Rectangle(-566.6,0,2333.3,600), new cjs.Rectangle(-600,0,2400,600), new cjs.Rectangle(-633.3,0,2466.7,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-700,0,2600,600), new cjs.Rectangle(-733.3,0,2666.7,600), new cjs.Rectangle(-766.6,0,2733.3,600), new cjs.Rectangle(-800,0,2800,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-866.6,0,2933.3,600), new cjs.Rectangle(-900,0,3000,600), new cjs.Rectangle(-933.3,0,3066.7,600), new cjs.Rectangle(-966.6,0,3133.3,600), rect=new cjs.Rectangle(-1000,0,3200,600), rect];


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


(lib.snowfall_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
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
		_createSnowflakesFunc(4);
		/*
		функция, создающая пузыри
		*/
		function _createSnowflakesFunc(snowflakes_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < snowflakes_num) 
			{
				/*
				создаём пузырь
				*/
				var snowflake_mc = new lib.Snowflake();
				container_mc.addChild(snowflake_mc);
				snowflake_mc.gotoAndStop(0);
				snowflake_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				snowflake_mc.scaleX = randomScale_num;
				snowflake_mc.scaleY = randomScale_num;
				snowflake_mc.alpha = randomScale_num;
				snowflake_mc.x = Math.random() * _containerBounds_rect.width;
				snowflake_mc.y = Math.random() * _containerBounds_rect.height;
				snowflake_mc.addEventListener("tick", _onTickSnowflakeFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickSnowflakeFunc(event)
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
			target_mc.y += _SPEED_NUM;
			target_mc.rotation += 0.1;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y >= _containerBounds_rect.height)
			{
				target_mc.y = _BUBBLE_DIAMETER_NUM;
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

	// snowfall
	this.instance = new lib.Snowflake();
	this.instance.setTransform(100,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.snowfall_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,200,674);
p.frameBounds = [rect];


(lib.snowfall_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
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
		_createSnowflakesFunc(12);
		/*
		функция, создающая пузыри
		*/
		function _createSnowflakesFunc(snowflakes_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < snowflakes_num) 
			{
				/*
				создаём пузырь
				*/
				var snowflake_mc = new lib.Snowflake_2();
				container_mc.addChild(snowflake_mc);
				snowflake_mc.gotoAndStop(0);
				snowflake_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				snowflake_mc.scaleX = randomScale_num;
				snowflake_mc.scaleY = randomScale_num;
				snowflake_mc.alpha = randomScale_num;
				snowflake_mc.x = Math.random() * _containerBounds_rect.width;
				snowflake_mc.y = Math.random() * _containerBounds_rect.height;
				snowflake_mc.addEventListener("tick", _onTickSnowflakeFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickSnowflakeFunc(event)
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
			target_mc.y += _SPEED_NUM;
			target_mc.rotation += 0.1;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y >= _containerBounds_rect.height)
			{
				target_mc.y = _BUBBLE_DIAMETER_NUM;
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

	// snowfall
	this.instance = new lib.Snowflake_2();
	this.instance.setTransform(500,700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.snowfall_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1000,708);
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
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect, new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.2,-22.2,44.6,44.6), new cjs.Rectangle(-21.9,-21.9,43.9,43.9), new cjs.Rectangle(-21.6,-21.6,43.2,43.2), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-20.9,-20.9,41.8,41.8), new cjs.Rectangle(-20.5,-20.5,41.2,41.2), new cjs.Rectangle(-20.2,-20.2,40.5,40.5), new cjs.Rectangle(-19.8,-19.8,39.8,39.8), new cjs.Rectangle(-19.5,-19.5,39.1,39.1), new cjs.Rectangle(-19.2,-19.2,38.4,38.4), new cjs.Rectangle(-19.5,-19.5,39.1,39.1), new cjs.Rectangle(-19.8,-19.8,39.7,39.7), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-20.4,-20.4,41,41), new cjs.Rectangle(-20.7,-20.7,41.6,41.6), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-21.4,-21.4,42.9,42.9), new cjs.Rectangle(-21.7,-21.7,43.5,43.5), new cjs.Rectangle(-22,-22,44.2,44.2), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-22.7,-22.7,45.5,45.5), new cjs.Rectangle(-23,-23,46.1,46.1), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-24,-24,48,48)];


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
	this.instance.setTransform(7,0,0.4,0.4);

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97,-96.4,193.6,193), new cjs.Rectangle(-98,-95.9,194.1,192), new cjs.Rectangle(-99,-95.4,194.6,191), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-95,-95,190,190)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), new cjs.Rectangle(-95,-95,190,190)];


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

	// Слой 2
	this.instance = new lib.snow_logo_mc();
	this.instance.setTransform(0,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

	// animation
	this.instance_1 = new lib.beam_light_0_mc();
	this.instance_1.setTransform(-220,0,1,1,30);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({regX:-0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:-200.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:29.9,x:0},15).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,rotation:30,x:200.1},15).wait(1));

	// graph
	this.instance_2 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-74,290,114);
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


(lib.facebook_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-70,-70,140,140)];


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

	// decor
	this.instance_1 = new lib.decor_banner_2_img();
	this.instance_1.setTransform(-147,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_2_img();
	this.instance_2.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUUMAAAgomIcHAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147,-130,294.7,275);
p.frameBounds = [rect];


(lib.banner_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.decor_banner_1_img();
	this.instance_1.setTransform(-147,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_1_img();
	this.instance_2.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUTMAAAgolIcHAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147,-130,294.7,275);
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


(lib.redirect_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(585,115);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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
	this.instance = new lib.instruction_2_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.instruction_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.wings6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.w6();
	this.instance.setTransform(142.1,48.6,1,1,0,0,180);

	this.instance_1 = new lib.w6();
	this.instance_1.setTransform(-142,48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-343.9,-182.3,687.9,500.5);
p.frameBounds = [rect];


(lib.wings5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.w5();
	this.instance.setTransform(142.1,48.6,1,1,0,0,180);

	this.instance_1 = new lib.w5();
	this.instance_1.setTransform(-142,48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-338.6,-206.2,677.2,451.8);
p.frameBounds = [rect];


(lib.wings4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.w4();
	this.instance.setTransform(142.1,48.6,1,1,0,0,180);

	this.instance_1 = new lib.w4();
	this.instance_1.setTransform(-142,48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-389.2,-100.6,778.5,381.6);
p.frameBounds = [rect];


(lib.wings3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.w3();
	this.instance.setTransform(142.1,48.6,1,1,0,0,180);

	this.instance_1 = new lib.w3();
	this.instance_1.setTransform(-142,48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-427.3,-135.6,854.6,473.5);
p.frameBounds = [rect];


(lib.wings2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.w2();
	this.instance.setTransform(142.1,48.6,1,1,0,0,180);

	this.instance_1 = new lib.w2();
	this.instance_1.setTransform(-142,48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.6,-74.2,361.2,243.7);
p.frameBounds = [rect];


(lib.wings1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.w1();
	this.instance.setTransform(142.1,48.6,1,1,0,0,180);

	this.instance_1 = new lib.w1();
	this.instance_1.setTransform(-142,48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-266,-103.6,532,207.2);
p.frameBounds = [rect];


(lib.wings_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wings1();
	this.instance.setTransform(10,0);

	this.instance_1 = new lib.wings2();
	this.instance_1.setTransform(10,0);

	this.instance_2 = new lib.wings3();
	this.instance_2.setTransform(10,0);

	this.instance_3 = new lib.wings4();
	this.instance_3.setTransform(10,0);

	this.instance_4 = new lib.wings5();
	this.instance_4.setTransform(10,0);

	this.instance_5 = new lib.wings6();
	this.instance_5.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-256,-103.6,532,207.2);
p.frameBounds = [rect, new cjs.Rectangle(-170.6,-74.2,361.2,243.7), new cjs.Rectangle(-417.3,-135.6,854.6,473.5), new cjs.Rectangle(-379.2,-100.6,778.5,381.6), new cjs.Rectangle(-328.6,-206.2,677.2,451.8), new cjs.Rectangle(-333.9,-182.3,687.9,500.5), null];


(lib.skin_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.skin_3_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.skin_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.skin_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.skin_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.skin_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.quest1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.blesk_anim();
	this.instance.setTransform(-6.9,32.1,0.545,0.545,180,0,0,0.6,0.7);

	this.instance_1 = new lib.blesk_anim();
	this.instance_1.setTransform(-34.2,-22.4,0.545,0.545,180,0,0,0.5,0.6);

	this.instance_2 = new lib.blesk_anim();
	this.instance_2.setTransform(30.6,11,0.545,0.545,180,0,0,0.6,0.7);

	this.instance_3 = new lib.blesk_anim();
	this.instance_3.setTransform(27.9,-23,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_4 = new lib.blesk_anim();
	this.instance_4.setTransform(-17.1,8,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_5 = new lib.blesk_anim();
	this.instance_5.setTransform(-9.1,-45,0.545,0.545,60,0,0,0.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_6 = new lib.quest1_11_img();
	this.instance_6.setTransform(-69,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-67,138,134);
p.frameBounds = [rect];


(lib.quest1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.blesk_anim();
	this.instance.setTransform(22.4,-31.5,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_1 = new lib.blesk_anim();
	this.instance_1.setTransform(-22.6,-0.5,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_2 = new lib.blesk_anim();
	this.instance_2.setTransform(-14.6,-53.5,0.545,0.545,60,0,0,0.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.quest1_8_img();
	this.instance_3.setTransform(-51.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-63,103,126);
p.frameBounds = [rect];


(lib.quest1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.blesk_anim();
	this.instance.setTransform(22.4,5.5,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_1 = new lib.blesk_anim();
	this.instance_1.setTransform(20.4,-50.5,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_2 = new lib.blesk_anim();
	this.instance_2.setTransform(-14.6,-16.5,0.545,0.545,60,0,0,0.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.quest1_7_img();
	this.instance_3.setTransform(-51.5,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-62.5,103,125);
p.frameBounds = [rect];


(lib.quest1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.blesk_anim();
	this.instance.setTransform(91.4,-53.9,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_1 = new lib.blesk_anim();
	this.instance_1.setTransform(-48.8,-37.5,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_2 = new lib.blesk_anim();
	this.instance_2.setTransform(21.4,2.5,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_3 = new lib.blesk_anim();
	this.instance_3.setTransform(41.5,103.5,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_4 = new lib.blesk_anim();
	this.instance_4.setTransform(-50.5,17,1.256,1.256,-75,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim();
	this.instance_5.setTransform(-51.5,105.5,1,1,0,0,0,0.5,0.5);

	this.instance_6 = new lib.blesk_anim();
	this.instance_6.setTransform(-72.5,-124.5,1,1,45,0,0,0.5,0.5);

	this.instance_7 = new lib.blesk_anim();
	this.instance_7.setTransform(46.5,-115.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_8 = new lib.quest1_5_img();
	this.instance_8.setTransform(-108.5,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.5,-155.5,217,311);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.889,0.889,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.prev_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.786,0.786,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,0.9,0.9,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.animation_circle_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.5,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.next_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.magic_wander22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blesk_anim();
	this.instance.setTransform(-17.2,-3,1.142,1.142,15,0,0,0.5,0.7);

	this.instance_1 = new lib.blesk_anim();
	this.instance_1.setTransform(16.2,-2,0.512,0.512,120,0,0,0.5,0.7);

	this.instance_2 = new lib.magic_wander2_img();
	this.instance_2.setTransform(-26,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-18.6,58.5,34.2);
p.frameBounds = [rect];


(lib.magic_wander2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Слой 12
	this.instance = new lib.blesk_anim();
	this.instance.setTransform(20.5,-99,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_1 = new lib.blesk_anim();
	this.instance_1.setTransform(-13.9,-75.2,0.545,0.545,60,0,0,0.5,0.6);

	this.instance_2 = new lib.blesk_anim();
	this.instance_2.setTransform(-11.5,-110,0.545,0.545,60,0,0,0.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(30));

	// Слой 1
	this.instance_3 = new lib.magic_wander_img();
	this.instance_3.setTransform(-22,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	// magic_wander22
	this.instance_4 = new lib.magic_wander22();
	this.instance_4.setTransform(-10.5,-89,1,1,0,-90,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-105.5,alpha:0.012},18).to({_off:true},1).wait(11));

	// magic_wander22
	this.instance_5 = new lib.magic_wander22();
	this.instance_5.setTransform(9.5,-89,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:113.5,alpha:0.012},18).to({_off:true},1).wait(11));

	// magic_wander22
	this.instance_6 = new lib.magic_wander22();
	this.instance_6.setTransform(-0.5,-79,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:7,alpha:0.012},18).to({_off:true},1).wait(11));

	// magic_wander22
	this.instance_7 = new lib.magic_wander22();
	this.instance_7.setTransform(-0.5,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-185,alpha:0.012},18).to({_off:true},1).wait(11));

	// magic_wander22
	this.instance_8 = new lib.magic_wander22();
	this.instance_8.setTransform(-12.4,-101.3,1,1,0,-45,135);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({x:-73.4,y:-166.4,alpha:0.012},19).to({_off:true},1).wait(1));

	// magic_wander22
	this.instance_9 = new lib.magic_wander22();
	this.instance_9.setTransform(10,-79.6,1,1,135);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({x:81.4,y:-11.6,alpha:0.012},19).to({_off:true},1).wait(1));

	// magic_wander22
	this.instance_10 = new lib.magic_wander22();
	this.instance_10.setTransform(-13.3,-77.1,1,1,0,-135,45);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},0).to({x:-67.1,y:-24.3,alpha:0.012},19).to({_off:true},1).wait(1));

	// magic_wander22
	this.instance_11 = new lib.magic_wander22();
	this.instance_11.setTransform(16,-106.5,1,1,45);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({x:68.7,y:-160,alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-121.5,61.8,236);
p.frameBounds = [rect, new cjs.Rectangle(-34.4,-122.4,68.3,236.9), new cjs.Rectangle(-39.6,-127.1,79.3,241.7), new cjs.Rectangle(-44.9,-131.9,90.4,246.5), new cjs.Rectangle(-50.2,-136.7,101.4,251.2), new cjs.Rectangle(-55.5,-141.5,112.5,256), new cjs.Rectangle(-60.7,-146.2,123.5,260.8), new cjs.Rectangle(-66,-151,134.6,265.6), new cjs.Rectangle(-71.3,-155.8,145.6,270.3), new cjs.Rectangle(-76.6,-160.6,156.7,275.1), new cjs.Rectangle(-81.9,-165.4,167.8,279.9), new cjs.Rectangle(-87.1,-170.1,178.8,284.7), new cjs.Rectangle(-92.4,-174.9,189.9,289.5), new cjs.Rectangle(-97.7,-179.7,200.9,294.2), new cjs.Rectangle(-103,-184.5,212,299), new cjs.Rectangle(-108.2,-189.2,223,303.8), new cjs.Rectangle(-113.5,-194,234.1,308.6), new cjs.Rectangle(-118.8,-198.8,245.1,313.3), new cjs.Rectangle(-124.1,-203.6,256.3,318.2), new cjs.Rectangle(-73.8,-167.1,152.8,281.7), new cjs.Rectangle(-77,-170.6,159.8,285.1), new cjs.Rectangle(-80.2,-174,166.8,288.5), new cjs.Rectangle(-83.4,-177.4,173.8,292), new cjs.Rectangle(-86.6,-180.8,180.7,295.4), new cjs.Rectangle(-89.8,-184.3,187.6,298.8), new cjs.Rectangle(-93,-187.7,194.6,302.2), new cjs.Rectangle(-96.3,-191.1,201.6,305.7), new cjs.Rectangle(-99.5,-194.5,208.6,309.1), new cjs.Rectangle(-102.8,-198,215.8,312.5), new cjs.Rectangle(-22,-118.2,50.8,232.7)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(65,95,0.667,0.667);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-190,-190);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.current_location_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxqRrQnVnUAAqXQAAqWHVnUQHUnVKWAAQKXAAHUHVQHVHUAAKWQAAKXnVHUQnUHVqXAAQqWAAnUnVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(65,95,0.667,0.667);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-190,-190);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.current_location_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxqRrQnVnUAAqXQAAqWHVnUQHUnVKWAAQKXAAHUHVQHVHUAAKWQAAKXnVHUQnUHVqXAAQqWAAnUnVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(65,95,0.667,0.667);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-190,-190);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.current_location_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxqRrQnVnUAAqXQAAqWHVnUQHUnVKWAAQKXAAHUHVQHVHUAAKWQAAKXnVHUQnUHVqXAAQqWAAnUnVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(65,95,0.667,0.667);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-190,-190);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.current_location_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxqRrQnVnUAAqXQAAqWHVnUQHUnVKWAAQKXAAHUHVQHVHUAAKWQAAKXnVHUQnUHVqXAAQqWAAnUnVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect, rect];


(lib.indicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuqCLQg2ABgngmQglgmgBg2QABg0AlgnQAnglA2gBIdqAAQA1ABAmAlQAnAngBA0QABA2gnAmQgmAmg1gBg");
	mask.setTransform(109,14);

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
p.nominalBounds = rect = new cjs.Rectangle(2,2,216,26);
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
	this.accessory = new lib.accessory_all();
	this.accessory.setTransform(-146.4,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero_hat_all();
	this.headdress.setTransform(7.2,-271.2);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// earrings
	this.earrings = new lib.earrings_all();
	this.earrings.setTransform(12.3,-213.8,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get(this.earrings).wait(1));

	// fringe
	this.fringe = new lib.hero_fringe_all();
	this.fringe.setTransform(13.7,-178.2);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyes
	this.eyes = new lib.eyes_all();
	this.eyes.setTransform(11.1,-238.5,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// shadows
	this.shadows = new lib.shadows_all();
	this.shadows.setTransform(11.5,-238.9,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.lips_all();
	this.lips.setTransform(13.4,-212,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.rouge_all();
	this.blush.setTransform(12.1,-218.5,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// skinSecond
	this.skinSecond = new lib.head_all();
	this.skinSecond.setTransform(10.3,-239.4,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.skinSecond).wait(1));

	// top
	this.top = new lib.hero_top_all();
	this.top.setTransform(56.2,-142.6);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero_bottom();
	this.bottom.setTransform(-44.2,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// dress
	this.dress = new lib.hero_dress_all();
	this.dress.setTransform(4.5,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero_shoes_all();
	this.shoes.setTransform(18.6,247.3);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// skin
	this.skin = new lib.body1_all();
	this.skin.setTransform(13.8,34.5);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// bottomSecond
	this.bottomSecond = new lib.hero_bottom_back_mc();
	this.bottomSecond.setTransform(-44.2,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.bottomSecond).wait(1));

	// hair
	this.hair = new lib.hero_hair_all();
	this.hair.setTransform(13.7,-178.2);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// wings
	this.wings = new lib.wings_all();
	this.wings.setTransform(5.6,-214.3);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250.4,-317.9,532,603.2);
p.frameBounds = [rect];


(lib.hero_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// earrings
	this.earrings = new lib.earrings_all();
	this.earrings.setTransform(-17.8,-52.3);

	this.timeline.addTween(cjs.Tween.get(this.earrings).wait(1));

	// eyes
	this.eyes = new lib.eyes_all();
	this.eyes.setTransform(-20.1,-143.2);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// body
	this.instance = new lib.fringe0();
	this.instance.setTransform(-24.9,-244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadows
	this.shadows = new lib.shadows_all();
	this.shadows.setTransform(-18.4,-144.6);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.lips_all();
	this.lips.setTransform(-11.6,-47.4);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.rouge_all();
	this.blush.setTransform(-18.9,-80.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// skinSecond
	this.skinSecond = new lib.head_all();
	this.skinSecond.setTransform(-22.9,-146.6);

	this.timeline.addTween(cjs.Tween.get(this.skinSecond).wait(1));

	// body
	this.instance_1 = new lib.top0_img();
	this.instance_1.setTransform(-337.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// skin
	this.skin = new lib.body2_all();
	this.skin.setTransform(0,141.5);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-337.5,-357.6,686,732.6);
p.frameBounds = [rect];


(lib.hero_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory6_img();
	this.instance.setTransform(-190.9,-209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero_hat3_img();
	this.instance_1.setTransform(-71.6,-312,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.earrings3();
	this.instance_2.setTransform(12.3,-213.8,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero_fringe2_img();
	this.instance_3.setTransform(-43.3,-291.6,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.eyes1();
	this.instance_4.setTransform(11.6,-239.3,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.shadows4_img();
	this.instance_5.setTransform(-17.1,-251.3,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.lips5_img();
	this.instance_6.setTransform(0.1,-216.9,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.rouge5_img();
	this.instance_7.setTransform(-13.6,-231.4,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.head1();
	this.instance_8.setTransform(10.3,-239.4,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero_dress5_img();
	this.instance_9.setTransform(-183,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero_shoes1_img();
	this.instance_10.setTransform(1.1,209.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.body1_1();
	this.instance_11.setTransform(13.8,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hero_hair2_img();
	this.instance_12.setTransform(-48.3,-295.2,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.wings3();
	this.instance_13.setTransform(15.6,-214.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-411.7,-349.9,854.6,635.3);
p.frameBounds = [rect];


(lib.hairstyle_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_6_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_5_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_4_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_3_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.closet_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(175,-150);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(175,-160);

	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(175,-130);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(175,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0}]},8).to({state:[{t:this.headdress_0}]},1).to({state:[{t:this.wings_0}]},2).to({state:[{t:this.accessory_0}]},3).wait(2));

	// options
	this.dress_2 = new lib.dress_2_mc();
	this.dress_2.setTransform(50,-206);

	this.dress_1 = new lib.dress_1_mc();
	this.dress_1.setTransform(-70,-206);

	this.dress_5 = new lib.dress_5_mc();
	this.dress_5.setTransform(0,-206);

	this.dress_4 = new lib.dress_4_mc();
	this.dress_4.setTransform(0,-206);

	this.dress_3 = new lib.dress_3_mc();
	this.dress_3.setTransform(0,-206);

	this.dress_6 = new lib.dress_6_mc();
	this.dress_6.setTransform(0,-206);

	this.top_2 = new lib.top_2_mc();
	this.top_2.setTransform(-70,-206);

	this.top_1 = new lib.top_1_mc();
	this.top_1.setTransform(70,-206);

	this.bottom_2 = new lib.bottom_2_mc();
	this.bottom_2.setTransform(70,-56);

	this.bottom_1 = new lib.bottom_1_mc();
	this.bottom_1.setTransform(-70,-56);

	this.top_4 = new lib.top_4_mc();
	this.top_4.setTransform(70,-206);

	this.top_3 = new lib.top_3_mc();
	this.top_3.setTransform(-70,-206);

	this.bottom_4 = new lib.bottom_4_mc();
	this.bottom_4.setTransform(70,-56);

	this.bottom_3 = new lib.bottom_3_mc();
	this.bottom_3.setTransform(-70,-56);

	this.bottom_6 = new lib.bottom_6_mc();
	this.bottom_6.setTransform(-70,-56);

	this.bottom_5 = new lib.bottom_5_mc();
	this.bottom_5.setTransform(70,-56);

	this.top_6 = new lib.top_6_mc();
	this.top_6.setTransform(70,-206);

	this.top_5 = new lib.top_5_mc();
	this.top_5.setTransform(-70,-206);

	this.shoes_6 = new lib.shoes_6_mc();
	this.shoes_6.setTransform(-85,43);

	this.shoes_5 = new lib.shoes_5_mc();
	this.shoes_5.setTransform(5,85);

	this.shoes_4 = new lib.shoes_4_mc();
	this.shoes_4.setTransform(-80,-136);

	this.shoes_3 = new lib.shoes_3_mc();
	this.shoes_3.setTransform(75,45);

	this.shoes_2 = new lib.shoes_2_mc();
	this.shoes_2.setTransform(0,-135);

	this.shoes_1 = new lib.shoes_1_mc();
	this.shoes_1.setTransform(80,-115);

	this.headdress_3 = new lib.headdress_3_mc();
	this.headdress_3.setTransform(0,-140);

	this.headdress_2 = new lib.headdress_2_mc();
	this.headdress_2.setTransform(0,-5);

	this.headdress_1 = new lib.headdress_1_mc();
	this.headdress_1.setTransform(0,120);

	this.headdress_6 = new lib.headdress_6_mc();
	this.headdress_6.setTransform(0,-15);

	this.headdress_5 = new lib.headdress_5_mc();
	this.headdress_5.setTransform(0,-110);

	this.headdress_4 = new lib.headdress_4_mc();
	this.headdress_4.setTransform(0,113);

	this.wings_1 = new lib.wings_1_mc();
	this.wings_1.setTransform(0,96);

	this.wings_2 = new lib.wings_2_mc();
	this.wings_2.setTransform(0,-80);

	this.wings_4 = new lib.wings_4_mc();
	this.wings_4.setTransform(0,-108);

	this.wings_3 = new lib.wings_3_mc();
	this.wings_3.setTransform(0,106);

	this.wings_6 = new lib.wings_6_mc();
	this.wings_6.setTransform(0,100);

	this.wings_5 = new lib.wings_5_mc();
	this.wings_5.setTransform(0,-134);

	this.accessory_5 = new lib.accessory_5_mc();
	this.accessory_5.setTransform(50,70);

	this.accessory_4 = new lib.accessory_4_mc();
	this.accessory_4.setTransform(-50,68);

	this.accessory_3 = new lib.accessory_3_mc();
	this.accessory_3.setTransform(10,-95);

	this.accessory_2 = new lib.accessory_2_mc();
	this.accessory_2.setTransform(80,-118);

	this.accessory_1 = new lib.accessory_1_mc();
	this.accessory_1.setTransform(-80,-122);

	this.accessory_10 = new lib.accessory_10_mc();
	this.accessory_10.setTransform(60,90);

	this.accessory_9 = new lib.accessory_9_mc();
	this.accessory_9.setTransform(-60,90);

	this.accessory_8 = new lib.accessory_8_mc();
	this.accessory_8.setTransform(10,-93);

	this.accessory_7 = new lib.accessory_7_mc();
	this.accessory_7.setTransform(80,-125);

	this.accessory_6 = new lib.accessory_6_mc();
	this.accessory_6.setTransform(-80,-108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1},{t:this.dress_2}]}).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.bottom_1},{t:this.bottom_2},{t:this.top_1},{t:this.top_2}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_4},{t:this.top_3},{t:this.top_4}]},1).to({state:[{t:this.top_5},{t:this.top_6},{t:this.bottom_5},{t:this.bottom_6}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.shoes_5},{t:this.shoes_6}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3}]},1).to({state:[{t:this.headdress_4},{t:this.headdress_5},{t:this.headdress_6}]},1).to({state:[{t:this.wings_2},{t:this.wings_1}]},1).to({state:[{t:this.wings_3},{t:this.wings_4}]},1).to({state:[{t:this.wings_5},{t:this.wings_6}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4},{t:this.accessory_5}]},1).to({state:[{t:this.accessory_6},{t:this.accessory_7},{t:this.accessory_8},{t:this.accessory_9},{t:this.accessory_10}]},1).wait(1));

	// decor
	this.instance = new lib.stick_mc();
	this.instance.setTransform(0,-200);

	this.instance_1 = new lib.stick_mc();
	this.instance_1.setTransform(0,-200);

	this.instance_2 = new lib.shelf_mc();
	this.instance_2.setTransform(0,140);

	this.instance_3 = new lib.shelf_mc();
	this.instance_3.setTransform(0,-80);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{y:-80}},{t:this.instance_2,p:{y:140}}]},1).to({state:[{t:this.instance_4},{t:this.instance_3,p:{y:140}},{t:this.instance_2,p:{y:-100}}]},1).to({state:[{t:this.instance_4},{t:this.instance_3,p:{y:140}},{t:this.instance_2,p:{y:-100}}]},1).to({state:[{t:this.instance_3,p:{y:-40}},{t:this.instance_2,p:{y:140}}]},1).to({state:[{t:this.instance_3,p:{y:-40}},{t:this.instance_2,p:{y:140}}]},1).to({state:[{t:this.instance_3,p:{y:-40}},{t:this.instance_2,p:{y:140}}]},1).to({state:[{t:this.instance_3,p:{y:-40}},{t:this.instance_2,p:{y:140}}]},1).to({state:[{t:this.instance_3,p:{y:-40}},{t:this.instance_2,p:{y:140}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:-50},0).wait(2).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-216,380.4,314.8);
p.frameBounds = [rect, new cjs.Rectangle(-190,-215,380,423.1), new cjs.Rectangle(-216.5,-215,409,470.1), new cjs.Rectangle(-190,-216,380,340.1), new cjs.Rectangle(-190,-215.4,380,453.5), new cjs.Rectangle(-224,-215.8,425.8,358.3), new cjs.Rectangle(-190,-215,380,473.3), new cjs.Rectangle(-190,-215.5,380,342.8), new cjs.Rectangle(-190,-198.5,381,358.5), new cjs.Rectangle(-190,-197.5,381,361), new cjs.Rectangle(-190,-176,381,357.9), new cjs.Rectangle(-227.1,-190.7,456.8,350.7), new cjs.Rectangle(-190.3,-206.6,381.3,430.3), new cjs.Rectangle(-190,-239.6,381,471.4), new cjs.Rectangle(-190,-217.8,381,377.9), new cjs.Rectangle(-190,-234,381,394)];


(lib.closet_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(360,-115);

	this.lips_1 = new lib.lips_1_mc();
	this.lips_1.setTransform(360,-115);

	this.shadows_1 = new lib.shadows_1_mc();
	this.shadows_1.setTransform(360,-115);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(360,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.blush_0}]},1).to({state:[{t:this.lips_1}]},2).to({state:[{t:this.shadows_1}]},1).to({state:[]},2).to({state:[{t:this.earrings_0}]},2).wait(2));

	// options
	this.skin_3 = new lib.skin_3_mc();
	this.skin_3.setTransform(160,160);

	this.skin_2 = new lib.skin_2_mc();
	this.skin_2.setTransform(260,0);

	this.skin_1 = new lib.skin_1_mc();
	this.skin_1.setTransform(160,-160);

	this.blush_3 = new lib.blush_3_mc();
	this.blush_3.setTransform(100,190);

	this.blush_2 = new lib.blush_2_mc();
	this.blush_2.setTransform(180,50);

	this.blush_1 = new lib.blush_1_mc();
	this.blush_1.setTransform(260,-90);

	this.blush_6 = new lib.blush_6_mc();
	this.blush_6.setTransform(100,190);

	this.blush_5 = new lib.blush_5_mc();
	this.blush_5.setTransform(180,50);

	this.blush_4 = new lib.blush_4_mc();
	this.blush_4.setTransform(260,-90);

	this.lips_7 = new lib.lips_7_mc();
	this.lips_7.setTransform(100,170);

	this.lips_6 = new lib.lips_6_mc();
	this.lips_6.setTransform(30,140);

	this.lips_5 = new lib.lips_5_mc();
	this.lips_5.setTransform(180,30);

	this.lips_4 = new lib.lips_4_mc();
	this.lips_4.setTransform(110,0);

	this.lips_3 = new lib.lips_3_mc();
	this.lips_3.setTransform(290,-120);

	this.lips_2 = new lib.lips_2_mc();
	this.lips_2.setTransform(210,-130);

	this.shadows_4 = new lib.shadows_4_mc();
	this.shadows_4.setTransform(100,180);

	this.shadows_3 = new lib.shadows_3_mc();
	this.shadows_3.setTransform(180,40);

	this.shadows_2 = new lib.shadows_2_mc();
	this.shadows_2.setTransform(260,-100);

	this.shadows_7 = new lib.shadows_7_mc();
	this.shadows_7.setTransform(100,180);

	this.shadows_6 = new lib.shadows_6_mc();
	this.shadows_6.setTransform(180,40);

	this.shadows_5 = new lib.shadows_5_mc();
	this.shadows_5.setTransform(260,-100);

	this.eyes_3 = new lib.eyes_3_mc();
	this.eyes_3.setTransform(100,180);

	this.eyes_2 = new lib.eyes_2_mc();
	this.eyes_2.setTransform(180,40);

	this.eyes_1 = new lib.eyes_1_mc();
	this.eyes_1.setTransform(260,-100);

	this.eyes_6 = new lib.eyes_6_mc();
	this.eyes_6.setTransform(100,180);

	this.eyes_5 = new lib.eyes_5_mc();
	this.eyes_5.setTransform(180,40);

	this.eyes_4 = new lib.eyes_4_mc();
	this.eyes_4.setTransform(260,-100);

	this.earrings_3 = new lib.earrings_3_mc();
	this.earrings_3.setTransform(260,-90);

	this.earrings_2 = new lib.earrings_2_mc();
	this.earrings_2.setTransform(100,190);

	this.earrings_1 = new lib.earrings_1_mc();
	this.earrings_1.setTransform(180,50);

	this.earrings_6 = new lib.earrings_6_mc();
	this.earrings_6.setTransform(260,-110);

	this.earrings_5 = new lib.earrings_5_mc();
	this.earrings_5.setTransform(180,50);

	this.earrings_4 = new lib.earrings_4_mc();
	this.earrings_4.setTransform(100,190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.skin_1},{t:this.skin_2},{t:this.skin_3}]}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3}]},1).to({state:[{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6},{t:this.lips_7}]},1).to({state:[{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6},{t:this.shadows_7}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3}]},1).to({state:[{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3}]},1).to({state:[{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,-290,360,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-30,-145,420,490), rect, new cjs.Rectangle(-30,-197.5,420,542.5), rect=new cjs.Rectangle(-30,-150,420,495), rect, rect, rect, new cjs.Rectangle(-30,-145,420,490), new cjs.Rectangle(-30,-180,420,525)];


(lib.closet_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_6 = new lib.hairstyle_6_mc();
	this.hair_6.setTransform(240,160);

	this.hair_5 = new lib.hairstyle_5_mc();
	this.hair_5.setTransform(290,0);

	this.hair_4 = new lib.hairstyle_4_mc();
	this.hair_4.setTransform(240,-160);

	this.hair_3 = new lib.hairstyle_3_mc();
	this.hair_3.setTransform(-240,160);

	this.hair_2 = new lib.hairstyle_2_mc();
	this.hair_2.setTransform(-290,0);

	this.hair_1 = new lib.hairstyle_1_mc();
	this.hair_1.setTransform(-240,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-420,-290,840,580);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-216,380.4,314.8);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-420,-290,840,580);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,-290,360,580);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-370,-190,740,380);
p.frameBounds = [rect];


(lib.body_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-180,0);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(19).to({regX:-0.1,scaleX:0.53,scaleY:0.53},0).to({regX:-0.2,scaleX:1.11,scaleY:1.11,x:-180.2,alpha:1},11).to({regX:0,scaleX:1,scaleY:1,x:-180},4).wait(11));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(180,0);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(29).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:180.1},0).to({regX:0.2,scaleX:1.11,scaleY:1.11,x:180.2,alpha:1},11).to({regX:0,scaleX:1,scaleY:1,x:180},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-190,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-280,-190,650,380), new cjs.Rectangle(-289.9,-190,659.9,380), new cjs.Rectangle(-299.9,-190,670,380), new cjs.Rectangle(-309.9,-190,680,380), new cjs.Rectangle(-319.9,-190,690,380), new cjs.Rectangle(-329.9,-190,700,380), new cjs.Rectangle(-340,-190,710,380), new cjs.Rectangle(-350,-190,720,380), new cjs.Rectangle(-360,-190,730,380), new cjs.Rectangle(-370,-190,740,380.1), new cjs.Rectangle(-380,-199.9,660.1,400), new cjs.Rectangle(-390,-210,680,420), new cjs.Rectangle(-384.9,-204.9,684.9,410), new cjs.Rectangle(-379.8,-199.9,689.9,400), new cjs.Rectangle(-374.8,-194.9,694.8,390), new cjs.Rectangle(-370,-190,700,380), new cjs.Rectangle(-370,-190,710.1,380), new cjs.Rectangle(-370,-190,720.1,380), new cjs.Rectangle(-370,-190,730.1,380), new cjs.Rectangle(-370,-190,740.1,380.1), new cjs.Rectangle(-370,-199.9,750.2,400), new cjs.Rectangle(-370,-210,760,420), new cjs.Rectangle(-370,-204.9,755,410), new cjs.Rectangle(-370,-199.9,750,400), new cjs.Rectangle(-370,-194.9,744.9,390), new cjs.Rectangle(-370,-190,740,380)];


(lib.body_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-180,0);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(19).to({regX:-0.1,scaleX:0.53,scaleY:0.53},0).to({regX:-0.2,scaleX:1.11,scaleY:1.11,x:-180.2,alpha:1},11).to({regX:0,scaleX:1,scaleY:1,x:-180},4).wait(11));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(180,0);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(29).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:180.1},0).to({regX:0.2,scaleX:1.11,scaleY:1.11,x:180.2,alpha:1},11).to({regX:0,scaleX:1,scaleY:1,x:180},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-190,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-280,-190,650,380), new cjs.Rectangle(-289.9,-190,659.9,380), new cjs.Rectangle(-299.9,-190,670,380), new cjs.Rectangle(-309.9,-190,680,380), new cjs.Rectangle(-319.9,-190,690,380), new cjs.Rectangle(-329.9,-190,700,380), new cjs.Rectangle(-340,-190,710,380), new cjs.Rectangle(-350,-190,720,380), new cjs.Rectangle(-360,-190,730,380), new cjs.Rectangle(-370,-190,740,380.1), new cjs.Rectangle(-380,-199.9,660.1,400), new cjs.Rectangle(-390,-210,680,420), new cjs.Rectangle(-384.9,-204.9,684.9,410), new cjs.Rectangle(-379.8,-199.9,689.9,400), new cjs.Rectangle(-374.8,-194.9,694.8,390), new cjs.Rectangle(-370,-190,700,380), new cjs.Rectangle(-370,-190,710.1,380), new cjs.Rectangle(-370,-190,720.1,380), new cjs.Rectangle(-370,-190,730.1,380), new cjs.Rectangle(-370,-190,740.1,380.1), new cjs.Rectangle(-370,-199.9,750.2,400), new cjs.Rectangle(-370,-210,760,420), new cjs.Rectangle(-370,-204.9,755,410), new cjs.Rectangle(-370,-199.9,750,400), new cjs.Rectangle(-370,-194.9,744.9,390), new cjs.Rectangle(-370,-190,740,380)];


(lib.body_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,0);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({regX:-0.1,scaleX:0.53,scaleY:0.53},0).to({regX:-0.2,scaleX:1.11,scaleY:1.11,x:-180.2,alpha:1},11).to({regX:0,scaleX:1,scaleY:1,x:-180},4).wait(11));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,0);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:180.1},0).to({regX:0.2,scaleX:1.11,scaleY:1.11,x:180.2,alpha:1},11).to({regX:0,scaleX:1,scaleY:1,x:180},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-190,740,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-280,-190,650,380), new cjs.Rectangle(-289.9,-190,659.9,380), new cjs.Rectangle(-299.9,-190,670,380), new cjs.Rectangle(-309.9,-190,680,380), new cjs.Rectangle(-319.9,-190,690,380), new cjs.Rectangle(-329.9,-190,700,380), new cjs.Rectangle(-340,-190,710,380), new cjs.Rectangle(-350,-190,720,380), new cjs.Rectangle(-360,-190,730,380), new cjs.Rectangle(-370,-190,740,380.1), new cjs.Rectangle(-380,-199.9,660.1,400), new cjs.Rectangle(-390,-210,680,420), new cjs.Rectangle(-384.9,-204.9,684.9,410), new cjs.Rectangle(-379.8,-199.9,689.9,400), new cjs.Rectangle(-374.8,-194.9,694.8,390), new cjs.Rectangle(-370,-190,700,380), new cjs.Rectangle(-370,-190,710.1,380), new cjs.Rectangle(-370,-190,720.1,380), new cjs.Rectangle(-370,-190,730.1,380), new cjs.Rectangle(-370,-190,740.1,380.1), new cjs.Rectangle(-370,-199.9,750.2,400), new cjs.Rectangle(-370,-210,760,420), new cjs.Rectangle(-370,-204.9,755,410), new cjs.Rectangle(-370,-199.9,750,400), new cjs.Rectangle(-370,-194.9,744.9,390), new cjs.Rectangle(-370,-190,740,380)];


(lib.animation1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_165 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(165).call(this.frame_165).wait(1));

	// animation
	this.instance = new lib.butt1();
	this.instance.setTransform(-0.6,114.6,0.643,0.643,-45);

	this.instance_1 = new lib.butt1();
	this.instance_1.setTransform(-159.8,-69.3,0.643,0.643,-90);

	this.instance_2 = new lib.butt1();
	this.instance_2.setTransform(197.7,-65.4,0.643,0.643,45);

	this.instance_3 = new lib.butt1();
	this.instance_3.setTransform(267,80.3,1,1,-45);

	this.instance_4 = new lib.butt1();
	this.instance_4.setTransform(49,-95.2,1,1,-90);

	this.instance_5 = new lib.butt1();
	this.instance_5.setTransform(-258,80.3,1,1,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},98).wait(68));

	// animation
	this.instance_6 = new lib.magic_wander();
	this.instance_6.setTransform(319,-25.4,1,1,-45);

	this.instance_7 = new lib.magic_wander2();
	this.instance_7.setTransform(-235,0.6,1,1,-126.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,rotation:-126.2,x:-235,y:0.6},14).wait(84).to({_off:false,rotation:-45,x:319,y:-25.4},20).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},14).to({rotation:-156.2,x:54,y:-56.4},19).to({rotation:-126.2,x:336,y:85.5},21).to({rotation:-156.2,x:54,y:-56.4},19).to({rotation:-126.2,x:-231,y:21.6},25).to({_off:true,rotation:-45,x:319,y:-25.4},20).wait(48));

	// animation
	this.instance_8 = new lib.quest1_11();
	this.instance_8.setTransform(291.5,149.3);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({alpha:1},69).wait(68));

	// animation
	this.instance_9 = new lib.quest1_11();
	this.instance_9.setTransform(12.5,94.4);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({alpha:1},69).wait(68));

	// animation
	this.instance_10 = new lib.quest1_11();
	this.instance_10.setTransform(-297,150.3);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({alpha:1},69).wait(68));

	// animation
	this.instance_11 = new lib.quest1_8();
	this.instance_11.setTransform(184.4,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(166));

	// animation
	this.instance_12 = new lib.quest1_7();
	this.instance_12.setTransform(-91.6,-16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(166));

	// animation
	this.instance_13 = new lib.quest1_5();
	this.instance_13.setTransform(52.4,-131.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(166));

	// animation
	this.instance_14 = new lib.quest1_13();
	this.instance_14.setTransform(29,-177.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(166));

	// animation
	this.instance_15 = new lib.quest1_13();
	this.instance_15.setTransform(45,-180.6);
	this.instance_15.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(166));

	// animation
	this.instance_16 = new lib.quest1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(166));

	// animation
	this.instance_17 = new lib.quest1_3();
	this.instance_17.setTransform(-0.5,151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(166));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-385.1,1200,686.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// animation
	this.instance = new lib.magic_wander();
	this.instance.setTransform(319,-25.4,1,1,-45);

	this.instance_1 = new lib.magic_wander2();
	this.instance_1.setTransform(265,-72.4,1,1,-98);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:-98,x:265,y:-72.4},14).wait(6).to({_off:false,rotation:-45,x:319,y:-25.4},19).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({scaleX:0.88,scaleY:0.88,x:251},3).to({scaleX:1,scaleY:1,x:265},3).to({_off:true,rotation:-45,x:319,y:-25.4},19).wait(21));

	// animation
	this.instance_2 = new lib.quest1_11();
	this.instance_2.setTransform(291.5,149.3);
	this.instance_2.alpha = 0.012;

	this.instance_3 = new lib.quest1_11();
	this.instance_3.setTransform(12.5,94.4);
	this.instance_3.alpha = 0.012;

	this.instance_4 = new lib.quest1_11();
	this.instance_4.setTransform(-297,150.3);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(60));

	// animation
	this.instance_5 = new lib.quest1_10();
	this.instance_5.setTransform(160.4,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({scaleX:0.87,scaleY:0.87,alpha:0.012},12).to({_off:true},1).wait(29));

	// animation
	this.instance_6 = new lib.quest1_8();
	this.instance_6.setTransform(184.4,-18);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({alpha:1},12).wait(30));

	// animation
	this.instance_7 = new lib.quest1_7();
	this.instance_7.setTransform(-91.6,-16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

	// animation
	this.instance_8 = new lib.quest1_5();
	this.instance_8.setTransform(52.4,-131.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

	// animation
	this.instance_9 = new lib.quest1_13();
	this.instance_9.setTransform(29,-177.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).wait(30));

	// animation
	this.instance_10 = new lib.quest1_13();
	this.instance_10.setTransform(45,-180.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60));

	// animation
	this.instance_11 = new lib.quest1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60));

	// animation
	this.instance_12 = new lib.quest1_3();
	this.instance_12.setTransform(-0.5,151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-385.1,1200,686.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// animation
	this.instance = new lib.magic_wander();
	this.instance.setTransform(-61.5,33.5,1,1,45);

	this.instance_1 = new lib.magic_wander2();
	this.instance_1.setTransform(-188.5,-108.4,1,1,120);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:120,x:-188.5,y:-108.4},14).wait(6).to({_off:false,rotation:45,x:238.5,y:53.5},14).to({rotation:-45,x:319,y:-25.4},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({scaleX:0.86,scaleY:0.86,x:-176.5,y:-93.4},3).to({scaleX:1,scaleY:1,x:-188.5,y:-108.4},3).to({_off:true,rotation:45,x:238.5,y:53.5},14).wait(16));

	// animation
	this.instance_2 = new lib.quest1_11();
	this.instance_2.setTransform(291.5,149.3);
	this.instance_2.alpha = 0.012;

	this.instance_3 = new lib.quest1_11();
	this.instance_3.setTransform(12.5,94.4);
	this.instance_3.alpha = 0.012;

	this.instance_4 = new lib.quest1_11();
	this.instance_4.setTransform(-297,150.3);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(50));

	// animation
	this.instance_5 = new lib.quest1_10();
	this.instance_5.setTransform(160.4,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// animation
	this.instance_6 = new lib.quest1_9();
	this.instance_6.setTransform(-100,-16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({scaleX:0.91,scaleY:0.91,alpha:0.012},14).to({_off:true},1).wait(19));

	// animation
	this.instance_7 = new lib.quest1_8();
	this.instance_7.setTransform(184.4,-18);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// animation
	this.instance_8 = new lib.quest1_7();
	this.instance_8.setTransform(-91.6,-16.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({alpha:1},14).wait(20));

	// animation
	this.instance_9 = new lib.quest1_5();
	this.instance_9.setTransform(52.4,-131.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// animation
	this.instance_10 = new lib.quest1_13();
	this.instance_10.setTransform(45,-180.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// animation
	this.instance_11 = new lib.quest1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// animation
	this.instance_12 = new lib.quest1_3();
	this.instance_12.setTransform(-0.5,151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-385.1,1200,686.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// animation
	this.instance = new lib.magic_wander();
	this.instance.setTransform(-61.5,33.5,1,1,45);

	this.instance_1 = new lib.magic_wander2();
	this.instance_1.setTransform(-18.5,-151.5,1,1,21.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:21.8,x:-18.5,y:-151.5},14).wait(6).to({_off:false,rotation:45,x:-61.5,y:33.5},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({scaleX:0.75,scaleY:0.75,x:-14.5,y:-177.5},3).to({scaleX:1,scaleY:1,x:-18.5,y:-151.5},3).to({_off:true,rotation:45,x:-61.5,y:33.5},14).wait(16));

	// animation
	this.instance_2 = new lib.quest1_11();
	this.instance_2.setTransform(291.5,149.3);
	this.instance_2.alpha = 0.012;

	this.instance_3 = new lib.quest1_11();
	this.instance_3.setTransform(12.5,94.4);
	this.instance_3.alpha = 0.012;

	this.instance_4 = new lib.quest1_11();
	this.instance_4.setTransform(-297,150.3);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(50));

	// animation
	this.instance_5 = new lib.quest1_10();
	this.instance_5.setTransform(160.4,-17.6);

	this.instance_6 = new lib.quest1_9();
	this.instance_6.setTransform(-100,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(50));

	// animation
	this.instance_7 = new lib.quest1_8();
	this.instance_7.setTransform(184.4,-18);
	this.instance_7.alpha = 0.012;

	this.instance_8 = new lib.quest1_7();
	this.instance_8.setTransform(-91.6,-16.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(50));

	// animation
	this.instance_9 = new lib.quest1_6();
	this.instance_9.setTransform(20.4,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({scaleY:0.89,y:-105,alpha:0.012},12).to({_off:true},1).wait(20));

	// animation
	this.instance_10 = new lib.quest1_5();
	this.instance_10.setTransform(52.4,-131.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17).to({alpha:1},12).wait(21));

	// animation
	this.instance_11 = new lib.quest1_13();
	this.instance_11.setTransform(45,-180.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// animation
	this.instance_12 = new lib.quest1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// animation
	this.instance_13 = new lib.quest1_3();
	this.instance_13.setTransform(-0.5,151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-385.1,1200,686.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// animation
	this.instance = new lib.magic_wander();
	this.instance.setTransform(-61.5,33.5,1,1,45);

	this.instance_1 = new lib.magic_wander2();
	this.instance_1.setTransform(166.5,-120.5,1,1,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:166.5,y:-120.5},14).wait(22).to({_off:false,rotation:23.8,x:320.6,y:-69.2},13).to({scaleX:0.79,scaleY:0.79,x:325.6,y:-85.2},3).to({scaleX:1,scaleY:1,x:320.6,y:-69.2},3).to({rotation:45,x:-61.5,y:33.5},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({scaleX:0.86,scaleY:0.86,x:176.5,y:-130.5},3).to({scaleX:1,scaleY:1,x:166.5,y:-120.5},3).to({rotation:23.8,x:256.5,y:-10.5},10).to({scaleX:0.82,scaleY:0.82,x:265,y:-24},3).to({scaleX:1,scaleY:1,x:256.5,y:-10.5},3).to({_off:true,x:320.6,y:-69.2},13).wait(16));

	// animation
	this.instance_2 = new lib.quest1_11();
	this.instance_2.setTransform(291.5,149.3);
	this.instance_2.alpha = 0.012;

	this.instance_3 = new lib.quest1_11();
	this.instance_3.setTransform(12.5,94.4);
	this.instance_3.alpha = 0.012;

	this.instance_4 = new lib.quest1_11();
	this.instance_4.setTransform(-297,150.3);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(65));

	// animation
	this.instance_5 = new lib.quest1_10();
	this.instance_5.setTransform(160.4,-17.6);

	this.instance_6 = new lib.quest1_9();
	this.instance_6.setTransform(-100,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(65));

	// animation
	this.instance_7 = new lib.quest1_8();
	this.instance_7.setTransform(184.4,-18);
	this.instance_7.alpha = 0.012;

	this.instance_8 = new lib.quest1_7();
	this.instance_8.setTransform(-91.6,-16.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(65));

	// animation
	this.instance_9 = new lib.quest1_6();
	this.instance_9.setTransform(20.4,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65));

	// animation
	this.instance_10 = new lib.quest1_5();
	this.instance_10.setTransform(52.4,-131.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65));

	// animation
	this.instance_11 = new lib.quest1_13();
	this.instance_11.setTransform(45,-180.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65));

	// animation
	this.instance_12 = new lib.quest1_4();
	this.instance_12.setTransform(357,-152.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(52).to({y:-9.6,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_13 = new lib.quest1_4();
	this.instance_13.setTransform(295.5,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(33).to({y:53.5,alpha:0.012},11).to({_off:true},1).wait(20));

	// animation
	this.instance_14 = new lib.quest1_4();
	this.instance_14.setTransform(232,-187.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(17).to({y:-2.6,alpha:0.012},10).to({_off:true},1).wait(37));

	// animation
	this.instance_15 = new lib.quest1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65));

	// animation
	this.instance_16 = new lib.quest1_3();
	this.instance_16.setTransform(-0.5,151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-385.1,1200,686.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// animation
	this.instance = new lib.magic_wander();
	this.instance.setTransform(-61.5,33.5,1,1,45);

	this.instance_1 = new lib.magic_wander2();
	this.instance_1.setTransform(-362.5,-66.1,1,1,30);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:30,x:-362.5,y:-66.1},14).wait(41).to({_off:false,rotation:45,x:-61.5,y:33.5},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({scaleX:0.83,scaleY:0.83,x:-348.5,y:-85.1},3).to({scaleX:1,scaleY:1,x:-362.5,y:-66.1},3).to({x:-295.5,y:-11.1},12).to({scaleX:0.8,scaleY:0.8,x:-286,y:-30.7},3).to({scaleX:1,scaleY:1,x:-295.5,y:-11.1},3).to({x:-217.5,y:-77.8},11).to({scaleX:0.76,scaleY:0.76,x:-210.5,y:-93.8},3).to({scaleX:1,scaleY:1,x:-217.5,y:-77.8},3).to({_off:true,rotation:45,x:-61.5,y:33.5},9).wait(1));

	// animation
	this.instance_2 = new lib.quest1_11();
	this.instance_2.setTransform(291.5,149.3);
	this.instance_2.alpha = 0.012;

	this.instance_3 = new lib.quest1_11();
	this.instance_3.setTransform(12.5,94.4);
	this.instance_3.alpha = 0.012;

	this.instance_4 = new lib.quest1_11();
	this.instance_4.setTransform(-297,150.3);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(65));

	// animation
	this.instance_5 = new lib.quest1_10();
	this.instance_5.setTransform(160.4,-17.6);

	this.instance_6 = new lib.quest1_9();
	this.instance_6.setTransform(-100,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(65));

	// animation
	this.instance_7 = new lib.quest1_8();
	this.instance_7.setTransform(184.4,-18);
	this.instance_7.alpha = 0.012;

	this.instance_8 = new lib.quest1_7();
	this.instance_8.setTransform(-91.6,-16.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(65));

	// animation
	this.instance_9 = new lib.quest1_6();
	this.instance_9.setTransform(20.4,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65));

	// animation
	this.instance_10 = new lib.quest1_5();
	this.instance_10.setTransform(52.4,-131.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65));

	// animation
	this.instance_11 = new lib.quest1_13();
	this.instance_11.setTransform(45,-180.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65));

	// animation
	this.instance_12 = new lib.quest1_4();
	this.instance_12.setTransform(-174,-152.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(52).to({y:6.4,alpha:0.012},10).to({_off:true},1).wait(2));

	// animation
	this.instance_13 = new lib.quest1_4();
	this.instance_13.setTransform(-247.5,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(35).to({y:43.5,alpha:0.012},13).to({_off:true},1).wait(16));

	// animation
	this.instance_14 = new lib.quest1_4();
	this.instance_14.setTransform(-311,-152.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(18).to({y:8.4,alpha:0.012},14).to({_off:true},1).wait(32));

	// animation
	this.instance_15 = new lib.quest1_4();
	this.instance_15.setTransform(357,-152.6);

	this.instance_16 = new lib.quest1_4();
	this.instance_16.setTransform(295.5,-93.5);

	this.instance_17 = new lib.quest1_4();
	this.instance_17.setTransform(232,-187.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(65));

	// animation
	this.instance_18 = new lib.quest1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(65));

	// animation
	this.instance_19 = new lib.quest1_3();
	this.instance_19.setTransform(-0.5,151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-385.1,1200,686.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// animation
	this.instance = new lib.magic_wander();
	this.instance.setTransform(-61.5,33.5,1,1,45);

	this.instance_1 = new lib.magic_wander2();
	this.instance_1.setTransform(-46.2,116.5,1,1,141.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:141.3,x:-46.2,y:116.5},19).to({_off:false},30).to({rotation:45,x:-61.5,y:33.5},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true},30).wait(21));

	// animation
	this.instance_2 = new lib.quest1_11();
	this.instance_2.setTransform(291.5,149.3);
	this.instance_2.alpha = 0.012;

	this.instance_3 = new lib.quest1_11();
	this.instance_3.setTransform(12.5,94.4);
	this.instance_3.alpha = 0.012;

	this.instance_4 = new lib.quest1_11();
	this.instance_4.setTransform(-297,150.3);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(70));

	// animation
	this.instance_5 = new lib.quest1_10();
	this.instance_5.setTransform(160.4,-17.6);

	this.instance_6 = new lib.quest1_9();
	this.instance_6.setTransform(-100,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(70));

	// animation
	this.instance_7 = new lib.quest1_8();
	this.instance_7.setTransform(184.4,-18);
	this.instance_7.alpha = 0.012;

	this.instance_8 = new lib.quest1_7();
	this.instance_8.setTransform(-91.6,-16.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(70));

	// animation
	this.instance_9 = new lib.quest1_6();
	this.instance_9.setTransform(20.4,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70));

	// animation
	this.instance_10 = new lib.quest1_5();
	this.instance_10.setTransform(52.4,-131.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70));

	// animation
	this.instance_11 = new lib.quest1_13();
	this.instance_11.setTransform(45,-180.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70));

	// animation
	this.instance_12 = new lib.quest1_4();
	this.instance_12.setTransform(357,-152.6);

	this.instance_13 = new lib.quest1_4();
	this.instance_13.setTransform(295.5,-93.5);

	this.instance_14 = new lib.quest1_4();
	this.instance_14.setTransform(232,-187.6);

	this.instance_15 = new lib.quest1_4();
	this.instance_15.setTransform(-174,-152.6);

	this.instance_16 = new lib.quest1_4();
	this.instance_16.setTransform(-247.5,-91.5);

	this.instance_17 = new lib.quest1_4();
	this.instance_17.setTransform(-311,-152.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(70));

	// animation
	this.instance_18 = new lib.quest1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(70));

	// animation
	this.instance_19 = new lib.quest1_3();
	this.instance_19.setTransform(-0.5,151.5);
	this.instance_19.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(37).to({alpha:1},32).wait(1));

	// animation
	this.instance_20 = new lib.quest1_2();
	this.instance_20.setTransform(0,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-385.1,1200,686.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// animation
	this.instance = new lib.magic_wander();
	this.instance.setTransform(-292.5,189.5,1,1,45);

	this.instance_1 = new lib.magic_wander2();
	this.instance_1.setTransform(-61.5,33.5,1,1,66.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-61.5,y:33.5},14).to({_off:true,rotation:66.2},5).wait(30).to({_off:false,rotation:45},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},5).wait(30).to({_off:true,rotation:45},10).wait(11));

	// animation
	this.instance_2 = new lib.quest1_12();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({alpha:0.012},19).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.quest1_11();
	this.instance_3.setTransform(291.5,149.3);
	this.instance_3.alpha = 0.012;

	this.instance_4 = new lib.quest1_11();
	this.instance_4.setTransform(12.5,94.4);
	this.instance_4.alpha = 0.012;

	this.instance_5 = new lib.quest1_11();
	this.instance_5.setTransform(-297,150.3);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(70));

	// animation
	this.instance_6 = new lib.quest1_10();
	this.instance_6.setTransform(160.4,-17.6);

	this.instance_7 = new lib.quest1_9();
	this.instance_7.setTransform(-100,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(70));

	// animation
	this.instance_8 = new lib.quest1_8();
	this.instance_8.setTransform(184.4,-18);
	this.instance_8.alpha = 0.012;

	this.instance_9 = new lib.quest1_7();
	this.instance_9.setTransform(-91.6,-16.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(70));

	// animation
	this.instance_10 = new lib.quest1_6();
	this.instance_10.setTransform(20.4,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70));

	// animation
	this.instance_11 = new lib.quest1_5();
	this.instance_11.setTransform(52.4,-131.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70));

	// animation
	this.instance_12 = new lib.quest1_13();
	this.instance_12.setTransform(45,-180.6);
	this.instance_12.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70));

	// animation
	this.instance_13 = new lib.quest1_4();
	this.instance_13.setTransform(357,-152.6);

	this.instance_14 = new lib.quest1_4();
	this.instance_14.setTransform(295.5,-93.5);

	this.instance_15 = new lib.quest1_4();
	this.instance_15.setTransform(232,-187.6);

	this.instance_16 = new lib.quest1_4();
	this.instance_16.setTransform(-174,-152.6);

	this.instance_17 = new lib.quest1_4();
	this.instance_17.setTransform(-247.5,-91.5);

	this.instance_18 = new lib.quest1_4();
	this.instance_18.setTransform(-311,-152.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(70));

	// animation
	this.instance_19 = new lib.quest1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(70));

	// animation
	this.instance_20 = new lib.quest1_3();
	this.instance_20.setTransform(-0.5,151.5);
	this.instance_20.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(70));

	// animation
	this.instance_21 = new lib.quest1_2();
	this.instance_21.setTransform(0,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-385.1,1200,686.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1200,0,3200,600);
p.frameBounds = [rect];


(lib.CopyrightScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.copyright_2_mc();
	this.screen_mc.setTransform(1000,600,1,1,0,0,0,600,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// bg
	this.instance = new lib.copyright_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


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
p.nominalBounds = rect = new cjs.Rectangle(-372.6,-230.8,504.5,461.7);
p.frameBounds = [rect, new cjs.Rectangle(-110,-40,220,80), new cjs.Rectangle(-100,-36.3,200,72.7), new cjs.Rectangle(-110,-40,220,80)];


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


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
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-10,1200,620);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3});

	// body
	this.body_1_mc = new lib.body_locations_1_mc();

	this.body_2_mc = new lib.body_locations_2_mc();

	this.body_3_mc = new lib.body_locations_3_mc();

	this.body_4_mc = new lib.body_locations_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-190,740,380);
p.frameBounds = [rect, rect, rect, rect];


(lib.indicator_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(-110,-15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance = new lib.indicator_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-47,280,87);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(390,342.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({regX:0.1,regY:0.5,scaleX:0.91,scaleY:0.91,x:390.1,y:310.5},0).wait(1).to({regX:0,regY:0.4,scaleX:1,scaleY:1,x:390,y:330.4},0).wait(2));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_4_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_2_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,627.3);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,600), rect=new cjs.Rectangle(-200,0,1200,615.3), rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.instance = new lib.hero_main_mc();
	this.instance.setTransform(385,325.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.7,-24.9,854.6,635.3);
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


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(175,20);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-175,20);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-450,440,694.5);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(100,220);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-100,220);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-420,-450,840,740);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(-170,200);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-300,70,1,1,90);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-450,760,740);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(164,22,0.75,0.75);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-138,42,0.75,0.75);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(181.1,-35,0.875,0.875,0,0,0,0.1,0);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(-181,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.bg_title_img();
	this.instance_4.setTransform(-230,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-110,460,220);
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
p.nominalBounds = rect = new cjs.Rectangle(-230,-110,460,220);
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
	this.locations_mc.setTransform(400,280);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_2_mc();
	this.snowfall_comp.setTransform(-100,0);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_1_mc.setTransform(240,330);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(590.1,325.5,0.912,0.912,0,0,0,0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(600,0);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,-329.4,826.7,1003.4);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_1_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// decor
	this.instance_1 = new lib.decor_background_6_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// objects
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(385,375.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,989.7);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_1_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.hero_makeup_mc();
	this.hero_1.setTransform(320,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-329.4,807.5,1054.4);
p.frameBounds = [rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{skewX:-45,skewY:135,x:460,y:465,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:360,y:90,rotation:-45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:260,y:280,rotation:-30}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:30,skewY:-150,x:610,y:290,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_1 = new lib.arrow_1_1_mc();
	this.object_1.setTransform(435,300);

	this.object_3 = new lib.arrow_2_1_mc();
	this.object_3.setTransform(175,245,1,1,0,165,-15);

	this.object_4 = new lib.arrow_3_1_mc();
	this.object_4.setTransform(705,240,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[]},1).wait(4));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:550}},{t:this.instance,p:{y:450}}]},1).wait(1));

	// objects
	this.object_2 = new lib.object_2_1_mc();
	this.object_2.setTransform(400,475);

	this.object_5 = new lib.object_5_1_mc();
	this.object_5.setTransform(430,160);

	this.object_6 = new lib.object_6_1_mc();
	this.object_6.setTransform(295,275);

	this.object_7 = new lib.object_7_1_mc();
	this.object_7.setTransform(565,280);

	this.object_8 = new lib.object_8_1_mc();
	this.object_8.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[]},1).to({state:[{t:this.object_5}]},2).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).wait(1));

	// objects
	this.subject_1 = new lib.animation1_2();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation1_4();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation1_6();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation1_8();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation1_10();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation1_12();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation1_14();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation1_15();
	this.subject_8.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,930.4);
p.frameBounds = [rect, new cjs.Rectangle(-200,-329.4,1200,934.4), rect=new cjs.Rectangle(-200,-329.4,1200,930.4), rect, rect, rect, rect, new cjs.Rectangle(-200,-139,1200,740)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,627.3);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(710,510,0.875,0.875);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,520,0.75,0.75);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,750);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(110,40,0.909,0.909);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(590,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.instance}]}).wait(1));

	// title
	this.instance_1 = new lib.title_mc();
	this.instance_1.setTransform(400.5,480.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.lower_shadow_mc();
	this.instance_2.setTransform(-200,400);
	this.instance_2.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(600,0);

	this.snowfall_comp_1 = new lib.snowfall_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.snowfall_comp_1},{t:this.snowfall_comp}]}).wait(1));

	// decor
	this.instance_3 = new lib.decor_background_3_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// heroes
	this.instance_4 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bg
	this.instance_5 = new lib.background_3_img();
	this.instance_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(100,700);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,500);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(680,380);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(120,380);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.facebook_btn}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.012;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(600,0);

	this.snowfall_comp_1 = new lib.snowfall_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.snowfall_comp_1},{t:this.snowfall_comp}]}).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();
	this.photoContainer_mc.setTransform(0,0.3,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
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

	this.instance_5 = new lib.LocationScreen_2();
	this.instance_5.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();
	this.instance_7.setTransform(0,0.3,1,1,0,0,0,0,0.3);

	this.instance_8 = new lib.RedirectScreen();

	this.instance_9 = new lib.ResultScreen();
	this.instance_9.setTransform(0,0.3,1,1,0,0,0,0,0.3);

	this.instance_10 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(345,50);

	this.instance_11 = new lib.TrackMove();
	this.instance_11.setTransform(270,50);

	this.instance_12 = new lib.Cursor();
	this.instance_12.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_13 = new lib.OrientationLockScreen();

	this.instance_14 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_12},{t:this.instance_11},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), rect=new cjs.Rectangle(-200,-329.4,1200,1300.3), rect, new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,0,359,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect];


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