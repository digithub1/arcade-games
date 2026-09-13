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
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,778,661]]},
		{name:"storage_atlas_4", frames: [[0,653,600,600],[0,0,581,651],[583,0,560,607]]},
		{name:"storage_atlas_5", frames: [[428,0,384,500],[814,0,445,423],[0,0,426,711],[0,713,1200,200]]},
		{name:"storage_atlas_6", frames: [[780,0,420,420],[714,449,420,420],[0,522,357,503],[714,871,434,393],[362,0,416,447],[0,0,360,520],[362,449,350,520]]},
		{name:"storage_atlas_7", frames: [[747,669,500,300],[747,365,511,302],[586,0,460,363],[0,0,584,292],[438,658,307,516],[0,294,450,362],[0,658,436,368]]},
		{name:"storage_atlas_8", frames: [[822,997,396,303],[0,497,428,326],[817,299,430,286],[0,0,302,495],[0,825,345,350],[838,587,379,315],[347,997,473,255],[713,0,441,297],[430,337,385,344],[430,683,406,312],[304,0,407,335]]},
		{name:"storage_atlas_9", frames: [[787,0,302,342],[333,0,452,237],[0,0,331,333],[966,666,306,334],[0,657,320,320],[977,344,320,320],[333,239,320,320],[322,561,320,320],[0,335,320,320],[644,666,320,320],[322,883,320,320],[655,344,320,320],[644,1002,440,220]]},
		{name:"storage_atlas_10", frames: [[1033,766,247,193],[856,378,328,191],[442,0,466,189],[771,778,145,243],[1033,571,254,193],[0,948,325,225],[327,1118,225,164],[322,776,263,165],[474,570,313,204],[849,195,348,181],[910,0,384,193],[474,191,373,195],[554,977,141,246],[843,1023,139,245],[697,1023,144,237],[587,776,182,199],[789,571,242,205],[327,943,224,173],[474,388,380,180],[322,222,150,500],[984,961,180,180],[0,706,320,240],[0,222,320,240],[0,464,320,240],[0,0,440,220]]},
		{name:"storage_atlas_11", frames: [[961,655,180,100],[304,1156,120,120],[182,371,240,120],[182,1156,120,120],[424,719,240,80],[666,737,224,80],[0,728,180,180],[0,910,180,180],[182,0,180,180],[728,0,180,180],[0,0,180,180],[364,0,180,180],[0,1092,180,180],[0,546,180,180],[546,0,180,180],[0,364,180,180],[0,182,180,180],[910,0,180,180],[783,1107,153,93],[182,1055,153,93],[182,182,162,187],[1020,223,269,99],[424,562,156,146],[295,959,159,94],[182,759,136,133],[346,182,163,182],[424,399,163,161],[845,182,173,163],[524,898,112,134],[892,757,119,144],[537,819,215,77],[1013,815,206,81],[320,801,215,77],[1013,898,206,81],[320,880,202,77],[638,1031,201,74],[1143,655,112,158],[1203,324,97,149],[754,819,111,138],[182,894,111,138],[1092,0,139,221],[647,329,129,208],[867,903,105,143],[589,539,128,178],[511,182,134,215],[1057,1098,199,67],[1078,1029,199,67],[664,1231,199,67],[1078,1167,199,67],[638,898,114,131],[647,182,196,145],[778,347,400,60],[182,595,240,80],[778,409,174,134],[938,1171,138,97],[954,409,240,80],[182,493,240,100],[182,677,240,80],[961,573,240,80],[974,981,302,46],[719,573,240,80],[719,655,240,80],[456,1034,120,120],[954,491,240,80],[426,1156,117,122],[664,1107,117,122],[545,1156,117,122],[938,1048,117,121]]},
		{name:"storage_atlas_12", frames: [[214,732,80,100],[296,747,80,100],[352,685,160,60],[698,918,70,70],[626,918,70,70],[514,688,108,78],[218,360,141,76],[0,683,115,84],[0,844,93,69],[125,134,81,52],[491,364,150,68],[402,0,209,63],[613,0,209,63],[402,65,209,63],[613,65,209,63],[0,69,209,63],[211,130,209,63],[788,159,32,20],[157,297,40,12],[971,918,48,29],[983,484,39,30],[788,181,31,18],[108,297,47,20],[856,873,161,43],[204,849,161,43],[367,860,161,43],[555,825,161,43],[530,870,161,43],[693,873,161,43],[836,791,92,80],[125,195,123,100],[0,769,101,73],[0,134,123,100],[380,254,99,34],[656,130,130,95],[95,896,106,60],[531,130,123,105],[930,791,92,70],[824,0,123,107],[0,915,89,68],[832,285,123,92],[957,285,57,71],[745,688,117,71],[624,688,119,70],[949,0,67,78],[0,592,80,85],[0,236,106,110],[103,821,99,73],[117,732,95,87],[422,130,107,122],[0,0,199,67],[201,0,199,67],[788,130,32,27],[952,160,60,37],[199,297,32,10],[788,201,34,11],[199,309,16,12],[380,237,38,13],[211,69,186,53],[382,575,186,53],[382,630,186,53],[570,633,186,53],[758,633,186,53],[164,677,186,53],[0,348,97,116],[788,215,176,68],[164,566,91,108],[747,761,87,86],[770,975,83,38],[203,955,108,41],[861,961,83,38],[861,918,108,41],[540,937,83,38],[320,937,108,41],[91,958,90,41],[531,237,112,45],[770,918,89,55],[204,894,114,59],[540,977,84,36],[430,937,108,41],[378,747,90,87],[824,109,126,104],[864,688,82,101],[952,80,65,78],[470,768,83,90],[250,195,128,95],[250,292,360,32],[108,326,360,32],[470,330,360,32],[971,358,40,40],[361,364,128,83],[481,254,46,32],[966,244,46,32],[624,761,121,62],[966,199,43,43],[300,449,100,100],[612,284,40,40],[775,285,40,40],[380,195,40,40],[555,768,40,40],[971,442,40,40],[257,566,40,40],[117,683,40,40],[971,400,40,40],[573,434,40,40],[257,608,40,40],[643,364,80,126],[889,379,80,126],[218,438,80,126],[807,379,80,126],[725,364,80,126],[491,434,80,126],[737,507,80,124],[402,449,80,124],[573,492,80,124],[0,466,80,124],[901,507,80,124],[300,551,80,124],[819,507,80,124],[655,492,80,124],[82,557,80,124],[320,915,304,20],[99,360,117,93],[656,227,117,101],[948,705,70,70],[948,633,70,70],[99,455,100,100]]}
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
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_rubbing_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body_pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cancel_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.check_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.free_games_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.h1_m = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.h2_m = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hanger1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hanger2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_b0 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_b1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_h1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_b0 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.next_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.next_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.pipe_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.rouge_icon9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h1s4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i14_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i15_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_h3i8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.shadow_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.shelf_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.socks1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.socks2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.socks3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.socks4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.socks5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.socks6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
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


(lib.socks6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks6_img();
	this.instance.setTransform(-58.3,-50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-50.2,117,101);
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


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-175,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-260,350,520);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-180,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-260,360,520);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_2_img();
	this.instance.setTransform(-220,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-110,440,220);
p.frameBounds = [rect];


(lib.title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_1_img();
	this.instance.setTransform(-220,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-110,440,220);
p.frameBounds = [rect];


(lib.socks5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.socks5_img();
	this.instance.setTransform(-58.3,-60.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-60.7,117,121);
p.frameBounds = [rect];


(lib.socks4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks4_img();
	this.instance.setTransform(-58.3,-60.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-60.9,117,122);
p.frameBounds = [rect];


(lib.socks3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks3_img();
	this.instance.setTransform(-58.3,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-46.5,117,93);
p.frameBounds = [rect];


(lib.socks2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks2_img();
	this.instance.setTransform(-58.3,-60.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-60.9,117,122);
p.frameBounds = [rect];


(lib.socks1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.socks1_img();
	this.instance.setTransform(-58.3,-60.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-60.9,117,122);
p.frameBounds = [rect];


(lib.shoes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes6_2_img();
	this.instance.setTransform(-42,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.shoes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes6_2_img();
	this.instance.setTransform(-45,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnlEpIgbi1IDOn0IGRgcIGiDFIiuJfImpAVg");
	this.shape.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-41.4,102.7,82.8);
p.frameBounds = [rect];


(lib.shoes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes5_2_img();
	this.instance.setTransform(-45,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzFeIAAq7IPnAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-35,100,70);
p.frameBounds = [rect];


(lib.shoes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes5_2_img();
	this.instance.setTransform(-46,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzEfIgTixIDfnSIMAg8IAuDDIiOJwInYAOg");
	this.shape.setTransform(0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-42.1,103.9,83.4);
p.frameBounds = [rect];


(lib.shoes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes4_2_img();
	this.instance.setTransform(-45,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.shoes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes4_2_img();
	this.instance.setTransform(-53,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApFDeIggjLICqmBIQhBVIjbJHIndBBg");
	this.shape.setTransform(3.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-35.6,123,73.4);
p.frameBounds = [rect];


(lib.shoes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes3_2_img();
	this.instance.setTransform(-42,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.shoes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes3_2_img();
	this.instance.setTransform(-50,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoLD5IAAnxIQXAAIAAHxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-25,105,50);
p.frameBounds = [rect];


(lib.shoes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes2_2_img();
	this.instance.setTransform(-42,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzEsIAApXIPnAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.shoes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes2_2_img();
	this.instance.setTransform(-51,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoUEqIgeiVIC5o0IIqgZIGCDuIimJBImsBBg");
	this.shape.setTransform(1.7,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.6,-44.3,112.7,88.2);
p.frameBounds = [rect];


(lib.shoes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes1_2_img();
	this.instance.setTransform(-42,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzEsIAApXIPnAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.shoes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes1_2_img();
	this.instance.setTransform(-46,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnCF0Ig9i2ICapuIICgcIFjDtIiUKhIm+ALg");
	this.shape.setTransform(0.6,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.7,-47.8,102.6,92.2);
p.frameBounds = [rect];


(lib.shelf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_img();
	this.instance.setTransform(123,-8,0.836,0.837,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-8,254,16.8);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i15_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h1s4_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i10_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i10_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i14_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i14_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i4_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i8_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i1_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i1_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_icon_h3i3_img();
	this.instance.setTransform(-36,-55,0.887,0.887);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJXIAAytIPnAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
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
	this.shape.graphics.f("#FF0000").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCTiTDNAAQDPAACSCTQCTCTAADNQAADPiTCSQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.pipe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pipe_img();
	this.instance.setTransform(122,-19,0.821,0.822,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126,-19,248,37.8);
p.frameBounds = [rect];


(lib.mouth_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips6_img();
	this.instance.setTransform(-18,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.mouth_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips6_img();
	this.instance.setTransform(-22,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.mouth_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips5_img();
	this.instance.setTransform(-8,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.mouth_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips5_img();
	this.instance.setTransform(-14,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.mouth_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips4_img();
	this.instance.setTransform(-17,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.mouth_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips4_img();
	this.instance.setTransform(-19,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.mouth_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips3_img();
	this.instance.setTransform(-16,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.mouth_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips3_img();
	this.instance.setTransform(-24,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.mouth_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips2_img();
	this.instance.setTransform(-29,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.mouth_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips2_img();
	this.instance.setTransform(-19,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.mouth_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-16,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.mouth_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-16,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,150,0,0.6)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
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


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.h1_m();
	this.instance.setTransform(388,72);

	this.instance_1 = new lib.h2_m();
	this.instance_1.setTransform(70,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,72,675,505);
p.frameBounds = [rect];


(lib.hero2_top6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top6_img();
	this.instance.setTransform(-64,-47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64,-47.4,128,95);
p.frameBounds = [rect];


(lib.hero2_top5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top5_img();
	this.instance.setTransform(-41.4,-45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-45.2,83,90);
p.frameBounds = [rect];


(lib.hero2_top4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_top4_img();
	this.instance.setTransform(-32.5,-38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-38.7,65,78);
p.frameBounds = [rect];


(lib.hero2_top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top3_img();
	this.instance.setTransform(-41,-50.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-50.6,82,101);
p.frameBounds = [rect];


(lib.hero2_top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_top2_img();
	this.instance.setTransform(-62.8,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.8,-52,126,104);
p.frameBounds = [rect];


(lib.hero2_top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-44.7,-43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.7,-43.3,90,87);
p.frameBounds = [rect];


(lib.hero2_shoes6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes6_img();
	this.instance.setTransform(-54.1,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.1,-20.3,108,41);
p.frameBounds = [rect];


(lib.hero2_shoes5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes5_img();
	this.instance.setTransform(-56.9,-29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-29.2,114,59);
p.frameBounds = [rect];


(lib.hero2_shoes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes4_img();
	this.instance.setTransform(-55.8,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.8,-22.3,112,45);
p.frameBounds = [rect];


(lib.hero2_shoes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes3_img();
	this.instance.setTransform(-54.1,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.1,-20.3,108,41);
p.frameBounds = [rect];


(lib.hero2_shoes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes2_img();
	this.instance.setTransform(-54.1,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.1,-20.3,108,41);
p.frameBounds = [rect];


(lib.hero2_shoes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes1_img();
	this.instance.setTransform(-54.1,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.1,-20.3,108,41);
p.frameBounds = [rect];


(lib.hero2_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-57.1,-65.4);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-55,-62);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-34.9,-11.1);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-39.2,-51.2);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-49.9,-47.5);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-44,-65.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.1,-65.4,114,131);
p.frameBounds = [rect, new cjs.Rectangle(-55,-62,97,116), new cjs.Rectangle(-34.9,-11.1,176,68), new cjs.Rectangle(-39.2,-51.2,91,108), new cjs.Rectangle(-49.9,-47.5,87,86), new cjs.Rectangle(-44,-65.3,196,145), null];


(lib.hero2_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-92.8,-29.2);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-92.8,-29.2);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-92.8,-29.2);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-92.8,-29.2);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-92.8,-29.2);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-92.8,-29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.8,-29.2,186,53);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-16.1,-13.7);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-20.5,-21.7);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(0.7,-5.1);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(8.3,-3.7);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(14.7,-4.4);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-0.5,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.1,-13.7,32,27);
p.frameBounds = [rect, new cjs.Rectangle(-20.5,-21.7,60,37), new cjs.Rectangle(0.7,-5.1,32,10), new cjs.Rectangle(8.3,-3.7,34,11), new cjs.Rectangle(14.7,-4.4,16,12), new cjs.Rectangle(-0.5,-8.9,38,13)];


(lib.hero2_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-153,-166.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-153,-166.7,306,334);
p.frameBounds = [rect];


(lib.hero2_hair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-111.9,-86.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.9,-86.4,224,173);
p.frameBounds = [rect];


(lib.hero2_fringe6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe6_img();
	this.instance.setTransform(-218,-184.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-184.2,436,368);
p.frameBounds = [rect];


(lib.hero2_fringe5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe5_img();
	this.instance.setTransform(-225,-180.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-180.7,450,362);
p.frameBounds = [rect];


(lib.hero2_fringe4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe4_img();
	this.instance.setTransform(-203.4,-167.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.4,-167.3,407,335);
p.frameBounds = [rect];


(lib.hero2_fringe3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe3_img();
	this.instance.setTransform(-202.9,-155.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.9,-155.8,406,312);
p.frameBounds = [rect];


(lib.hero2_fringe2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe2_img();
	this.instance.setTransform(-165.2,-166.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.2,-166.4,331,333);
p.frameBounds = [rect];


(lib.hero2_fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-192.5,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-172,385,344);
p.frameBounds = [rect];


(lib.hero2_eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-99.6,-33.5);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-99.6,-33.5);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-99.6,-33.5);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-99.6,-33.5);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-99.6,-33.5);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-99.6,-33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.6,-33.5,199,67);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_dress9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress9_img();
	this.instance.setTransform(-121,-102.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121,-102.3,242,205);
p.frameBounds = [rect];


(lib.hero2_dress8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress8_img();
	this.instance.setTransform(-67,-107.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-107.6,134,215);
p.frameBounds = [rect];


(lib.hero2_dress7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero2_dress7_img();
	this.instance.setTransform(-63.9,-88.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.9,-88.9,128,178);
p.frameBounds = [rect];


(lib.hero2_dress6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress6_img();
	this.instance.setTransform(-52.7,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.7,-71.5,105,143);
p.frameBounds = [rect];


(lib.hero2_dress5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress5_img();
	this.instance.setTransform(-91.2,-99.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.2,-99.6,182,199);
p.frameBounds = [rect];


(lib.hero2_dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(-64.9,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-103.5,129,208);
p.frameBounds = [rect];


(lib.hero2_dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-72.2,-118.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.2,-118.6,144,237);
p.frameBounds = [rect];


(lib.hero2_dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(-69.3,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.3,-110.5,139,221);
p.frameBounds = [rect];


(lib.hero2_dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-69.7,-122.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.7,-122.4,139,245);
p.frameBounds = [rect];


(lib.hero2_bottom6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom6_img();
	this.instance.setTransform(-53.2,-60.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.2,-60.7,107,122);
p.frameBounds = [rect];


(lib.hero2_bottom5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom5_img();
	this.instance.setTransform(-55.6,-68.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.6,-68.9,111,138);
p.frameBounds = [rect];


(lib.hero2_bottom4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom4_img();
	this.instance.setTransform(-47.4,-43.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.4,-43.2,95,87);
p.frameBounds = [rect];


(lib.hero2_bottom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom3_img();
	this.instance.setTransform(-49.5,-36.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-36.3,99,73);
p.frameBounds = [rect];


(lib.hero2_bottom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom2_img();
	this.instance.setTransform(-55.6,-68.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.6,-68.9,111,138);
p.frameBounds = [rect];


(lib.hero2_bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(-52.7,-55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.7,-55.1,106,110);
p.frameBounds = [rect];


(lib.hero2_accessory9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory9_img();
	this.instance.setTransform(-48.6,-74.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.6,-74.3,97,149);
p.frameBounds = [rect];


(lib.hero2_accessory8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory8_img();
	this.instance.setTransform(-186.5,-97.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186.5,-97.2,373,195);
p.frameBounds = [rect];


(lib.hero2_accessory7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory7_img();
	this.instance.setTransform(-191.9,-96.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191.9,-96.4,384,193);
p.frameBounds = [rect];


(lib.hero2_accessory6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory6_img();
	this.instance.setTransform(-220.3,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220.3,-148.7,441,297);
p.frameBounds = [rect];


(lib.hero2_accessory5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory5_img();
	this.instance.setTransform(-225.9,-118.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225.9,-118.6,452,237);
p.frameBounds = [rect];


(lib.hero2_accessory4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-174.1,-90.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174.1,-90.3,348,181);
p.frameBounds = [rect];


(lib.hero2_accessory3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-156.7,-102.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.7,-102.9,313,204);
p.frameBounds = [rect];


(lib.hero2_accessory2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory2_img();
	this.instance.setTransform(-131.5,-82.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.5,-82.4,263,165);
p.frameBounds = [rect];


(lib.hero2_accessory1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-237.8,-127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-237.8,-127.3,473,255);
p.frameBounds = [rect];


(lib.hero1_top6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_top6_img();
	this.instance.setTransform(-40,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-42.2,80,85);
p.frameBounds = [rect];


(lib.hero1_top5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top5_img();
	this.instance.setTransform(-33.3,-39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.3,-39.1,67,78);
p.frameBounds = [rect];


(lib.hero1_top4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top4_img();
	this.instance.setTransform(-55.9,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.9,-79,112,158);
p.frameBounds = [rect];


(lib.hero1_top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top3_img();
	this.instance.setTransform(-59.7,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.7,-35,119,70);
p.frameBounds = [rect];


(lib.hero1_top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top2_img();
	this.instance.setTransform(-58.2,-35.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.2,-35.3,117,71);
p.frameBounds = [rect];


(lib.hero1_top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-28.4,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.4,-35.5,57,71);
p.frameBounds = [rect];


(lib.hero1_shoes6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_shoes6_img();
	this.instance.setTransform(-61.7,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-46,123,92);
p.frameBounds = [rect];


(lib.hero1_shoes5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes5_img();
	this.instance.setTransform(-61.7,-53.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-53.2,123,107);
p.frameBounds = [rect];


(lib.hero1_shoes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes4_img();
	this.instance.setTransform(-61.7,-52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-52.6,123,105);
p.frameBounds = [rect];


(lib.hero1_shoes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_shoes3_img();
	this.instance.setTransform(-65,-47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-47.6,130,95);
p.frameBounds = [rect];


(lib.hero1_shoes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_shoes2_img();
	this.instance.setTransform(-61.7,-50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-50.2,123,100);
p.frameBounds = [rect];


(lib.hero1_shoes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero1_shoes1_img();
	this.instance.setTransform(-61.7,-50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-50.2,123,100);
p.frameBounds = [rect];


(lib.hero1_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-109.5,-40.6);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-104.4,-44.7);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-109.5,-40.6);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-104.4,-44.7);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-102.5,-41.4);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-100.3,-38.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.5,-40.6,215,77);
p.frameBounds = [rect, new cjs.Rectangle(-104.4,-44.7,206,81), new cjs.Rectangle(-109.5,-40.6,215,77), new cjs.Rectangle(-104.4,-44.7,206,81), new cjs.Rectangle(-102.5,-41.4,202,77), new cjs.Rectangle(-100.3,-38.4,201,74), null];


(lib.hero1_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-73.4,-30.3);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-73.4,-30.3);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-73.4,-30.3);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-73.4,-30.3);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-73.4,-30.3);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-73.4,-30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.4,-30.3,161,43);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-15.8,-10.1);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-32.8,-9.3);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-26.3,-14.2);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-25.1,-12);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-28.6,-7.6);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-29.2,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.8,-10.1,32,20);
p.frameBounds = [rect, new cjs.Rectangle(-32.8,-9.3,40,12), new cjs.Rectangle(-26.3,-14.2,48,29), new cjs.Rectangle(-25.1,-12,39,30), new cjs.Rectangle(-28.6,-7.6,31,18), new cjs.Rectangle(-29.2,-11.5,47,20)];


(lib.hero1_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_h1();
	this.instance.setTransform(-151.1,-170.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.1,-170.9,302,342);
p.frameBounds = [rect];


(lib.hero1_hair6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair6_img();
	this.instance.setTransform(-279.8,-303.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-279.8,-303.5,560,607);
p.frameBounds = [rect];


(lib.hero1_hair5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair5_img();
	this.instance.setTransform(-290.6,-325.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290.6,-325.4,581,651);
p.frameBounds = [rect];


(lib.hero1_hair4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair4_img();
	this.instance.setTransform(-389.1,-330.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-389.1,-330.6,778,661);
p.frameBounds = [rect];


(lib.hero1_hair3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair3_img();
	this.instance.setTransform(-291.9,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-291.9,-146,584,292);
p.frameBounds = [rect];


(lib.hero1_hair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_hair2_img();
	this.instance.setTransform(-230.1,-181.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230.1,-181.6,460,363);
p.frameBounds = [rect];


(lib.hero1_fringe6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe6_img();
	this.instance.setTransform(-208,-223.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208,-223.5,416,447);
p.frameBounds = [rect];


(lib.hero1_fringe5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_fringe5_img();
	this.instance.setTransform(-213,-358.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-213,-358.7,426,711);
p.frameBounds = [rect];


(lib.hero1_fringe4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe4_img();
	this.instance.setTransform(-189.6,-157.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189.6,-157.4,379,315);
p.frameBounds = [rect];


(lib.hero1_fringe3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe3_img();
	this.instance.setTransform(-172.3,-175.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172.3,-175.1,345,350);
p.frameBounds = [rect];


(lib.hero1_fringe2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_fringe2_img();
	this.instance.setTransform(-216.8,-195.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-216.8,-195.8,434,393);
p.frameBounds = [rect];


(lib.hero1_fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-222.3,-211.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.3,-211.7,445,423);
p.frameBounds = [rect];


(lib.hero1_eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-104.3,-31.6);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-104.3,-31.6);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-104.3,-31.6);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-104.3,-31.6);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-104.3,-31.6);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-104.3,-31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.3,-31.6,209,63);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_dress9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_dress9_img();
	this.instance.setTransform(-59.3,-71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.3,-71.9,119,144);
p.frameBounds = [rect];


(lib.hero1_dress8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_dress8_img();
	this.instance.setTransform(-55.7,-67.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.7,-67.1,112,134);
p.frameBounds = [rect];


(lib.hero1_dress7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.hero1_dress7_img();
	this.instance.setTransform(-85.3,-78.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.3,-78.3,173,163);
p.frameBounds = [rect];


(lib.hero1_dress6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress6_img();
	this.instance.setTransform(-112.4,-81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.4,-81.7,225,164);
p.frameBounds = [rect];


(lib.hero1_dress5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress5_img();
	this.instance.setTransform(-81.6,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.6,-80.5,163,161);
p.frameBounds = [rect];


(lib.hero1_dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.hero1_dress4_img();
	this.instance.setTransform(-162.6,-112.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.6,-112.3,325,225);
p.frameBounds = [rect];


(lib.hero1_dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress3_img();
	this.instance.setTransform(-127.1,-106.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.1,-106.9,254,193);
p.frameBounds = [rect];


(lib.hero1_dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-81.4,-110.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.4,-110.1,163,182);
p.frameBounds = [rect];


(lib.hero1_dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-68.1,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.1,-66.5,136,133);
p.frameBounds = [rect];


(lib.hero1_bottom6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom6_img();
	this.instance.setTransform(-75,-33.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-33.7,150,68);
p.frameBounds = [rect];


(lib.hero1_bottom5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom5_img();
	this.instance.setTransform(-40.2,-26.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-26.1,81,52);
p.frameBounds = [rect];


(lib.hero1_bottom4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom4_img();
	this.instance.setTransform(-46.5,-34.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.5,-34.2,93,69);
p.frameBounds = [rect];


(lib.hero1_bottom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom3_img();
	this.instance.setTransform(-79.4,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.4,-47,159,94);
p.frameBounds = [rect];


(lib.hero1_bottom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_bottom2_img();
	this.instance.setTransform(-57.5,-41.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-41.8,115,84);
p.frameBounds = [rect];


(lib.hero1_bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom1_img();
	this.instance.setTransform(-70.5,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-38,141,76);
p.frameBounds = [rect];


(lib.hero1_accessory9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory9_2_img();
	this.instance.setTransform(-214.8,-143.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.8,-143.2,430,286);
p.frameBounds = [rect];


(lib.hero1_accessory9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_accessory9_1_img();
	this.instance.setTransform(-213.9,-163.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-213.9,-163.1,428,326);
p.frameBounds = [rect];


(lib.hero1_accessory8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory8_2_img();
	this.instance.setTransform(-232.7,-94.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-232.7,-94.3,466,189);
p.frameBounds = [rect];


(lib.hero1_accessory8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory8_1_img();
	this.instance.setTransform(-255.6,-151.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-255.6,-151.1,511,302);
p.frameBounds = [rect];


(lib.hero1_accessory7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory7_img();
	this.instance.setTransform(-163.9,-95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.9,-95.7,328,191);
p.frameBounds = [rect];


(lib.hero1_accessory6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory6_img();
	this.instance.setTransform(-123.6,-96.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.6,-96.2,247,193);
p.frameBounds = [rect];


(lib.hero1_accessory5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory5_img();
	this.instance.setTransform(-54,-39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-39.1,108,78);
p.frameBounds = [rect];


(lib.hero1_accessory4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4_img();
	this.instance.setTransform(-78.1,-72.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.1,-72.8,156,146);
p.frameBounds = [rect];


(lib.hero1_accessory3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory3_img();
	this.instance.setTransform(-198.1,-151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-198.1,-151.5,396,303);
p.frameBounds = [rect];


(lib.hero1_accessory2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-134.3,-49.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.3,-49.4,269,99);
p.frameBounds = [rect];


(lib.hero1_accessory1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-80.7,-92.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.7,-92.3,162,187);
p.frameBounds = [rect];


(lib.hanger2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger2_img();
	this.instance.setTransform(55.1,-33.5,0.72,0.72,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-33.5,110.2,67);
p.frameBounds = [rect];


(lib.hanger1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger1_img();
	this.instance.setTransform(55.1,-33.5,0.72,0.72,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-33.5,110.2,67);
p.frameBounds = [rect];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes6_img();
	this.instance.setTransform(-99.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes6_img();
	this.instance.setTransform(-104.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes5_img();
	this.instance.setTransform(-99.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes5_img();
	this.instance.setTransform(-104.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes4_img();
	this.instance.setTransform(-99.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes4_img();
	this.instance.setTransform(-104.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes3_img();
	this.instance.setTransform(-99.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes3_img();
	this.instance.setTransform(-104.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes2_img();
	this.instance.setTransform(-99.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes2_img();
	this.instance.setTransform(-104.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-99.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-104.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuHzIAAvmMAldAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
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


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon9_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon9_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon3_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon3_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon6_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon6_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon2_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon2_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon1_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon1_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_icon7_img();
	this.instance.setTransform(-35,-55,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzJYIAAyvIPnAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
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
	this.instance.setTransform(-120,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-40,240,80);
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
	this.shape.graphics.f().s("#FF0000").ss(5,2,0,3).p("AAAAAIBQBQABQhPIhQBPAhPBQIBPhQIhPhP");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, null];


(lib.play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_img();
	this.instance.setTransform(-120,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-40,240,80);
p.frameBounds = [rect];


(lib.play_again_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-120,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-40,240,80);
p.frameBounds = [rect];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_img();
	this.instance.setTransform(-120,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-40,240,80);
p.frameBounds = [rect];


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_img();
	this.instance.setTransform(-120,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-40,240,80);
p.frameBounds = [rect];


(lib.next_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_img();
	this.instance.setTransform(-120,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_img();
	this.instance.setTransform(-120,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-40,240,80);
p.frameBounds = [rect];


(lib.more_games_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_7_2_img();
	this.instance.setTransform(0.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.7,0,43,43);
p.frameBounds = [rect];


(lib.more_games_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_6_2_img();
	this.instance.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-0.1,121,62);
p.frameBounds = [rect];


(lib.more_games_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_5_2_img();
	this.instance.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-0.2,46,32);
p.frameBounds = [rect];


(lib.more_games_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_4_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,46,32);
p.frameBounds = [rect];


(lib.more_games_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_3_2_img();
	this.instance.setTransform(-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.5,0.5,138,97);
p.frameBounds = [rect];


(lib.more_games_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_2_2_img();
	this.instance.setTransform(0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.5,-0.3,174,134);
p.frameBounds = [rect];


(lib.more_games_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_1_2_img();
	this.instance.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.5,-0.5,128,83);
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
	this.instance.setTransform(-120,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-40,240,80);
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
	this.instance.setTransform(-120,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-40,240,80);
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


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({rotation:-2,y:-10},5).to({rotation:0,y:0},5).to({rotation:-2,y:-10},5).to({rotation:0,y:0},5).wait(1));

	// animation
	this.instance_1 = new lib.title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({regY:0.1,rotation:-2,y:10.1},5).to({regY:0,rotation:0,y:0},5).to({rotation:2,y:10},5).to({rotation:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-110,440,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-220.5,-113,441.1,226.2), new cjs.Rectangle(-221.4,-116.9,442.9,233.9), new cjs.Rectangle(-222,-120,444,240.1), new cjs.Rectangle(-222.8,-123.8,445.7,247.8), new cjs.Rectangle(-223.7,-127.6,447.4,255.3), new cjs.Rectangle(-222.8,-123.7,445.7,247.6), new cjs.Rectangle(-222,-119.9,444,239.9), new cjs.Rectangle(-221.4,-116.8,443,233.6), new cjs.Rectangle(-220.5,-112.9,441.2,226), new cjs.Rectangle(-220,-110,440,220), new cjs.Rectangle(-220.5,-113,441.1,226.2), new cjs.Rectangle(-221.4,-116.9,443,233.8), new cjs.Rectangle(-222,-120,444,240.1), new cjs.Rectangle(-222.8,-123.8,445.7,247.7), new cjs.Rectangle(-223.7,-127.6,447.4,255.3), new cjs.Rectangle(-222.8,-123.7,445.7,247.5), new cjs.Rectangle(-221.9,-119.9,444,239.9), new cjs.Rectangle(-221.4,-116.8,443,233.6), new cjs.Rectangle(-220.4,-112.9,441.1,226), new cjs.Rectangle(-220,-110,440,220)];


(lib.tail_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4();
	this.instance.setTransform(0.1,0,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDMgIAA4/IcHAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-80,180,160);
p.frameBounds = [rect];


(lib.tail_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.socks_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.raincoat_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
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


(lib.hero2_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_top1();
	this.instance.setTransform(141.3,-16.4);

	this.instance_1 = new lib.hero2_top2();
	this.instance_1.setTransform(146.9,-0.7);

	this.instance_2 = new lib.hero2_top3();
	this.instance_2.setTransform(140.2,-7.7);

	this.instance_3 = new lib.hero2_top4();
	this.instance_3.setTransform(139.8,-11.1);

	this.instance_4 = new lib.hero2_top5();
	this.instance_4.setTransform(141.6,-6.9);

	this.instance_5 = new lib.hero2_top6();
	this.instance_5.setTransform(149.2,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(96.5,-59.7,90,87);
p.frameBounds = [rect, new cjs.Rectangle(84,-52.7,126,104), new cjs.Rectangle(99.2,-58.3,82,101), new cjs.Rectangle(107.3,-49.8,65,78), new cjs.Rectangle(100.2,-52.2,83,90), new cjs.Rectangle(85.2,-61.4,128,95), null];


(lib.hero2_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero2_shoes1();
	this.instance.setTransform(304.7,146.2);

	this.instance_1 = new lib.hero2_shoes2();
	this.instance_1.setTransform(304.7,146.2);

	this.instance_2 = new lib.hero2_shoes3();
	this.instance_2.setTransform(304.7,146.2);

	this.instance_3 = new lib.hero2_shoes4();
	this.instance_3.setTransform(306.4,144.2);

	this.instance_4 = new lib.hero2_shoes5();
	this.instance_4.setTransform(307.4,137.3);

	this.instance_5 = new lib.hero2_shoes6();
	this.instance_5.setTransform(304.7,146.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(250.5,125.8,108,41);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(250.5,121.8,112,45), new cjs.Rectangle(250.5,108.1,114,59), new cjs.Rectangle(250.5,125.8,108,41), null];


(lib.hero2_pet_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero2_accessory9();
	this.instance.setTransform(226.1,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(177.5,-99.3,97,149);
p.frameBounds = [rect, null];


(lib.hero2_hat_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.hero2_accessory1();
	this.instance.setTransform(16.6,-68,1,1,0,0,0,-1.3,0);

	this.instance_1 = new lib.hero2_accessory2();
	this.instance_1.setTransform(-31.1,-134.2);

	this.instance_2 = new lib.hero2_accessory3();
	this.instance_2.setTransform(-43.4,0,1,1,0,0,0,-0.1,-0.8);

	this.instance_3 = new lib.hero2_accessory4();
	this.instance_3.setTransform(-0.1,-79.4);

	this.instance_4 = new lib.hero2_accessory5();
	this.instance_4.setTransform(5.6,-84.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-219.9,-195.3,473,255);
p.frameBounds = [rect, new cjs.Rectangle(-162.6,-216.6,263,165), new cjs.Rectangle(-200.1,-102.2,313,204), new cjs.Rectangle(-174.2,-169.7,348,181), new cjs.Rectangle(-220.3,-202.8,452,237), null];


(lib.hero2_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero2_hair1();
	this.instance.setTransform(-24.9,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.8,57.1,224,173);
p.frameBounds = [rect, rect=null, rect, rect, rect, rect];


(lib.hero2_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1();

	this.instance_1 = new lib.hero2_fringe2();
	this.instance_1.setTransform(4,42.9);

	this.instance_2 = new lib.hero2_fringe3();
	this.instance_2.setTransform(-32.8,28.2);

	this.instance_3 = new lib.hero2_fringe4();
	this.instance_3.setTransform(-7.6,13.5);

	this.instance_4 = new lib.hero2_fringe5();
	this.instance_4.setTransform(0.6,4);

	this.instance_5 = new lib.hero2_fringe6();
	this.instance_5.setTransform(14.5,37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-172,385,344);
p.frameBounds = [rect, new cjs.Rectangle(-161.3,-123.5,331,333), new cjs.Rectangle(-235.7,-127.7,406,312), new cjs.Rectangle(-211,-153.8,407,335), new cjs.Rectangle(-224.5,-176.7,450,362), new cjs.Rectangle(-203.5,-146.3,436,368)];


(lib.hero2_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_dress1();
	this.instance.setTransform(322,33.3);

	this.instance_1 = new lib.hero2_dress2();
	this.instance_1.setTransform(321.6,45.2);

	this.instance_2 = new lib.hero2_dress3();
	this.instance_2.setTransform(324.5,37.1);

	this.instance_3 = new lib.hero2_dress4();
	this.instance_3.setTransform(322.3,40.9,1,1,0,0,0,-0.4,0.4);

	this.instance_4 = new lib.hero2_dress5();
	this.instance_4.setTransform(332,39.6);

	this.instance_5 = new lib.hero2_dress6();
	this.instance_5.setTransform(319.3,16.2);

	this.instance_6 = new lib.hero2_dress7();
	this.instance_6.setTransform(325.7,28.4);

	this.instance_7 = new lib.hero2_dress8();
	this.instance_7.setTransform(323.5,39.1);

	this.instance_8 = new lib.hero2_dress9();
	this.instance_8.setTransform(318.6,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(252.3,-89.1,139,245);
p.frameBounds = [rect, new cjs.Rectangle(252.3,-65.4,139,221), new cjs.Rectangle(252.3,-81.6,144,237), new cjs.Rectangle(257.8,-63,129,208), new cjs.Rectangle(240.8,-60,182,199), new cjs.Rectangle(266.6,-55.4,105,143), new cjs.Rectangle(261.8,-60.5,128,178), new cjs.Rectangle(256.5,-68.5,134,215), new cjs.Rectangle(197.6,-64.4,242,205), null];


(lib.hero2_coat_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_accessory6();
	this.instance.setTransform(342.7,17.6);

	this.instance_1 = new lib.hero2_accessory7();
	this.instance_1.setTransform(306.3,-15.7);

	this.instance_2 = new lib.hero2_accessory8();
	this.instance_2.setTransform(302.1,36.8,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(122.4,-131.1,441,297);
p.frameBounds = [rect, new cjs.Rectangle(114.3,-112.1,384,193), new cjs.Rectangle(115.5,-60.5,373,195), null];


(lib.hero2_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom1();
	this.instance.setTransform(133.5,73.4);

	this.instance_1 = new lib.hero2_bottom2();
	this.instance_1.setTransform(128.4,87.1);

	this.instance_2 = new lib.hero2_bottom3();
	this.instance_2.setTransform(136.7,54.6);

	this.instance_3 = new lib.hero2_bottom4();
	this.instance_3.setTransform(136.2,61.5);

	this.instance_4 = new lib.hero2_bottom5();
	this.instance_4.setTransform(128.4,87.1);

	this.instance_5 = new lib.hero2_bottom6();
	this.instance_5.setTransform(130.5,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80.8,18.2,106,110);
p.frameBounds = [rect, new cjs.Rectangle(72.8,18.2,111,138), new cjs.Rectangle(87.2,18.2,99,73), new cjs.Rectangle(88.8,18.2,95,87), new cjs.Rectangle(72.8,18.2,111,138), new cjs.Rectangle(77.3,18.2,107,122), null];


(lib.hero1_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_top1();
	this.instance.setTransform(147.2,-22.7);

	this.instance_1 = new lib.hero1_top2();
	this.instance_1.setTransform(144.5,-28.2);

	this.instance_2 = new lib.hero1_top3();
	this.instance_2.setTransform(143,-27);

	this.instance_3 = new lib.hero1_top4();
	this.instance_3.setTransform(147.2,20.7);

	this.instance_4 = new lib.hero1_top5();
	this.instance_4.setTransform(144.2,-29.6);

	this.instance_5 = new lib.hero1_top6();
	this.instance_5.setTransform(146.8,-21.4,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(118.8,-58.3,57,71);
p.frameBounds = [rect, new cjs.Rectangle(86.3,-63.5,117,71), new cjs.Rectangle(83.3,-62,119,70), new cjs.Rectangle(91.3,-58.3,112,158), new cjs.Rectangle(110.8,-68.7,67,78), new cjs.Rectangle(106.8,-63.8,80,85), null];


(lib.hero1_tail_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.1,-72.8,156,146);
p.frameBounds = [rect, null];


(lib.hero1_socks_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.socks1();
	this.instance.setTransform(197.8,110.2);

	this.instance_1 = new lib.socks2();
	this.instance_1.setTransform(197.8,110.2);

	this.instance_2 = new lib.socks3();
	this.instance_2.setTransform(197.8,124.6);

	this.instance_3 = new lib.socks4();
	this.instance_3.setTransform(197.8,110.2);

	this.instance_4 = new lib.socks5();
	this.instance_4.setTransform(197.8,110.5);

	this.instance_5 = new lib.socks6();
	this.instance_5.setTransform(197.8,120.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(139.4,49.3,117,122);
p.frameBounds = [rect, rect, new cjs.Rectangle(139.4,78.1,117,93), new cjs.Rectangle(139.4,49.3,117,122), new cjs.Rectangle(139.4,49.8,117,121), new cjs.Rectangle(139.4,70.7,117,101), null];


(lib.hero1_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.hero1_shoes1();
	this.instance.setTransform(199,128);

	this.instance_1 = new lib.hero1_shoes2();
	this.instance_1.setTransform(199,128);

	this.instance_2 = new lib.hero1_shoes3();
	this.instance_2.setTransform(201.7,136.6);

	this.instance_3 = new lib.hero1_shoes4();
	this.instance_3.setTransform(199,125.6);

	this.instance_4 = new lib.hero1_shoes5();
	this.instance_4.setTransform(199,125);

	this.instance_5 = new lib.hero1_shoes6();
	this.instance_5.setTransform(199,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(137.3,77.8,123,100);
p.frameBounds = [rect, rect, new cjs.Rectangle(136.7,88.9,130,95), new cjs.Rectangle(137.3,73,123,105), new cjs.Rectangle(137.3,71.7,123,107), new cjs.Rectangle(137.3,86.1,123,92), null];


(lib.hero1_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero1_hair2();
	this.instance.setTransform(41.2,147.6);

	this.instance_1 = new lib.hero1_hair3();
	this.instance_1.setTransform(15.9,-39.4);

	this.instance_2 = new lib.hero1_hair4();
	this.instance_2.setTransform(-40.7,203.5);

	this.instance_3 = new lib.hero1_hair5();
	this.instance_3.setTransform(-16.6,242.6);

	this.instance_4 = new lib.hero1_hair6();
	this.instance_4.setTransform(4.3,188.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-189,-34,460,363), new cjs.Rectangle(-276,-185.4,584,292), new cjs.Rectangle(-429.8,-127.1,778,661), new cjs.Rectangle(-307.2,-82.8,581,651), new cjs.Rectangle(-275.5,-114.8,560,607)];


(lib.hero1_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1();

	this.instance_1 = new lib.hero1_fringe2();
	this.instance_1.setTransform(23,-25.7,1,1,0,0,0,0.1,0.7);

	this.instance_2 = new lib.hero1_fringe3();
	this.instance_2.setTransform(-8.3,17.6);

	this.instance_3 = new lib.hero1_fringe4();
	this.instance_3.setTransform(14.9,7.5);

	this.instance_4 = new lib.hero1_fringe5();
	this.instance_4.setTransform(-23.2,167.7);

	this.instance_5 = new lib.hero1_fringe6();
	this.instance_5.setTransform(-12.2,30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.3,-211.7,445,423);
p.frameBounds = [rect, new cjs.Rectangle(-193.9,-222.2,434,393), new cjs.Rectangle(-180.7,-157.5,345,350), new cjs.Rectangle(-174.7,-149.9,379,315), new cjs.Rectangle(-236.3,-191.1,426,711), new cjs.Rectangle(-220.2,-192.9,416,447)];


(lib.hero1_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress1();
	this.instance.setTransform(165.9,13.3);

	this.instance_1 = new lib.hero1_dress2();
	this.instance_1.setTransform(172,38.6);

	this.instance_2 = new lib.hero1_dress3();
	this.instance_2.setTransform(207.7,49.9);

	this.instance_3 = new lib.hero1_dress4();
	this.instance_3.setTransform(186.6,53.9);

	this.instance_4 = new lib.hero1_dress5();
	this.instance_4.setTransform(170.9,28);

	this.instance_5 = new lib.hero1_dress6();
	this.instance_5.setTransform(187.7,23);

	this.instance_6 = new lib.hero1_dress7();
	this.instance_6.setTransform(177,21.1);

	this.instance_7 = new lib.hero1_dress8();
	this.instance_7.setTransform(180,7.4);

	this.instance_8 = new lib.hero1_dress9();
	this.instance_8.setTransform(172.6,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(97.8,-53.2,136,133);
p.frameBounds = [rect, new cjs.Rectangle(90.5,-71.5,163,182), new cjs.Rectangle(80.5,-57,254,193), new cjs.Rectangle(24,-58.4,325,225), new cjs.Rectangle(89.3,-52.5,163,161), new cjs.Rectangle(75.3,-58.7,225,164), new cjs.Rectangle(91.7,-57.2,173,163), new cjs.Rectangle(124.2,-59.7,112,134), new cjs.Rectangle(113.3,-56.5,119,144), null];


(lib.hero1_coat_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero1_accessory6();
	this.instance.setTransform(202.4,50.9);

	this.instance_1 = new lib.hero1_accessory7();
	this.instance_1.setTransform(179.4,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(78.8,-45.4,247,193);
p.frameBounds = [rect, new cjs.Rectangle(15.5,-49.7,328,191), null];


(lib.hero1_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom1();
	this.instance.setTransform(154.8,40.7);

	this.instance_1 = new lib.hero1_bottom2();
	this.instance_1.setTransform(162,44.6);

	this.instance_2 = new lib.hero1_bottom3();
	this.instance_2.setTransform(153.9,49.7);

	this.instance_3 = new lib.hero1_bottom4();
	this.instance_3.setTransform(155,37);

	this.instance_4 = new lib.hero1_bottom5();
	this.instance_4.setTransform(157.9,28.8);

	this.instance_5 = new lib.hero1_bottom6();
	this.instance_5.setTransform(150.3,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(84.3,2.7,141,76);
p.frameBounds = [rect, new cjs.Rectangle(104.4,2.7,115,84), new cjs.Rectangle(74.5,2.7,159,94), new cjs.Rectangle(108.5,2.7,93,69), new cjs.Rectangle(117.7,2.7,81,52), new cjs.Rectangle(75.3,2.7,150,68), null];


(lib.hero1_accessoryhatback_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero1_accessory8_2();
	this.instance.setTransform(-44.5,-31.4);

	this.instance_1 = new lib.hero1_accessory9_2();
	this.instance_1.setTransform(-58.9,-52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-277.2,-125.7,466,189), new cjs.Rectangle(-273.7,-195.8,430,286), null];


(lib.hero1_accessoryhat_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.hero1_accessory1();
	this.instance.setTransform(129.9,-74.7,1,1,0,0,0,0,1.2);

	this.instance_1 = new lib.hero1_accessory2();
	this.instance_1.setTransform(-7,-102.7);

	this.instance_2 = new lib.hero1_accessory3();
	this.instance_2.setTransform(-31.9,-126.3);

	this.instance_3 = new lib.hero1_accessory8_1();
	this.instance_3.setTransform(59.4,-100.5);

	this.instance_4 = new lib.hero1_accessory9_1();
	this.instance_4.setTransform(172.3,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(49.2,-168.3,162,187);
p.frameBounds = [rect, new cjs.Rectangle(-141.3,-152.1,269,99), new cjs.Rectangle(-230,-277.8,396,303), new cjs.Rectangle(-196.3,-251.6,511,302), new cjs.Rectangle(-41.6,-206.1,428,326), null];


(lib.hero1_accessory9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory9_1();
	this.instance.setTransform(171.2,78,1,1,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.hero1_accessory9_2();
	this.instance_1.setTransform(-64.7,63.1,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-279.8,-85.1,665.2,326);
p.frameBounds = [rect];


(lib.hero1_accessory8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory8_1();
	this.instance.setTransform(42.3,-6.5,1,1,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.hero1_accessory8_2();
	this.instance_1.setTransform(-64.7,63.1,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-297.7,-157.5,595.5,315.2);
p.frameBounds = [rect];


(lib.hero1_accessory_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-39.1,108,78);
p.frameBounds = [rect, null];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero2_pet_all();
	this.accessory.setTransform(-89.3,44.4,1,1,0,0,0,222,-26);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero2_hat_all();
	this.headdress.setTransform(0,-127,0.626,0.626);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all();
	this.fringe.setTransform(0,-127,0.626,0.626);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all();
	this.eyes.setTransform(15.4,-49.9,0.626,0.626);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all();
	this.shadows.setTransform(-19.1,-46.2,0.626,0.626);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// mouth
	this.mouth = new lib.hero2_lips_all();
	this.mouth.setTransform(13.4,-9.8,0.626,0.626);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all();
	this.blush.setTransform(16.6,-18,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance = new lib.hero2_head();
	this.instance.setTransform(4.7,-96.5,0.626,0.626);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all();
	this.dress.setTransform(6.6,106.4,1,1,0,0,0,317.9,36);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero2_top_all();
	this.top.setTransform(12.6,47.3,1,1,0,0,0,142,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero2_bottom_all();
	this.bottom.setTransform(8.1,135.3,1,1,0,0,0,137.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero2_shoes_all();
	this.shoes.setTransform(-6.6,216.6,1,1,0,0,0,304.7,146.2);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_1 = new lib.hero2_body_img();
	this.instance_1.setTransform(-60,-9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// raincoat
	this.raincoat = new lib.hero2_coat_all();
	this.raincoat.setTransform(20.6,89.4,1,1,0,0,0,331.9,19);

	this.timeline.addTween(cjs.Tween.get(this.raincoat).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all();
	this.hair.setTransform(0,-127,0.626,0.626);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-188.9,-249.2,441,486.4);
p.frameBounds = [rect];


(lib.hero_2_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fringe
	this.fringe = new lib.hero2_fringe_all();
	this.fringe.setTransform(0,-113);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all();
	this.eyes.setTransform(24.7,10.2);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all();
	this.shadows.setTransform(-30.5,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// mouth
	this.mouth = new lib.hero2_lips_all();
	this.mouth.setTransform(21.4,74.3);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all();
	this.blush.setTransform(23,61.8);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance = new lib.hero2_b0();
	this.instance.setTransform(-145.4,-231);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all();
	this.hair.setTransform(0,-113);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-285,385,570.1);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero1_accessoryhat_all();
	this.headdress.setTransform(82.1,-156.2,0.602,0.602,0,0,0,136.2,-79.8);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all();
	this.fringe.setTransform(0,-108.2,0.602,0.602,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// accessory
	this.accessory = new lib.hero1_accessory_eyes();
	this.accessory.setTransform(-34.1,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all();
	this.eyes.setTransform(-23.2,-45.1,0.602,0.602);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all();
	this.shadows.setTransform(-24,-48.7,0.602,0.602);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// mouth
	this.mouth = new lib.hero1_lips_all();
	this.mouth.setTransform(-24,-7.7,0.602,0.602,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all();
	this.blush.setTransform(-29.9,-8.2,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance = new lib.hero1_head();
	this.instance.setTransform(-2.3,-93.2,0.602,0.602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all();
	this.dress.setTransform(-29.4,79.3,1,1,0,0,0,170,14);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero1_top_all();
	this.top.setTransform(-27.6,55.3,1,1,0,0,0,150,-17);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero1_bottom_all();
	this.bottom.setTransform(-27.6,55.3,1,1,0,0,0,150,-17);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero1_shoes_all();
	this.shoes.setTransform(-4.4,191.3,1,1,0,0,0,195,126);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// socks
	this.socks = new lib.hero1_socks_all();
	this.socks.setTransform(-1.6,175.5,1,1,0,0,0,197.8,110.2);

	this.timeline.addTween(cjs.Tween.get(this.socks).wait(1));

	// body
	this.instance_1 = new lib.hero1_b1();
	this.instance_1.setTransform(-89.1,-6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// tail
	this.tail = new lib.hero1_tail_all();
	this.tail.setTransform(62.7,43.2);

	this.timeline.addTween(cjs.Tween.get(this.tail).wait(1));

	// raincoat
	this.raincoat = new lib.hero1_coat_all();
	this.raincoat.setTransform(-29.4,79.3,1,1,0,0,0,170,14);

	this.timeline.addTween(cjs.Tween.get(this.raincoat).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all();
	this.hair.setTransform(0,-108.2,0.602,0.602,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// headdressSecond
	this.headdressSecond = new lib.hero1_accessoryhatback_all();
	this.headdressSecond.setTransform(29,-108.2,0.602,0.602,0,0,0,48.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.headdressSecond).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.9,-235.7,274.4,478.8);
p.frameBounds = [rect];


(lib.hero_1_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fringe
	this.fringe = new lib.hero1_fringe_all();
	this.fringe.setTransform(0,-68.1);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all();
	this.eyes.setTransform(-38.4,36.3);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all();
	this.shadows.setTransform(-39.7,30);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// mouth
	this.mouth = new lib.hero1_lips_all();
	this.mouth.setTransform(-39.7,98.3);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all();
	this.blush.setTransform(-48.9,96.7);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance = new lib.hero1_b0();
	this.instance.setTransform(-154.9,-214.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all();
	this.hair.setTransform(0,-68.1);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.3,-279.9,445,560.3);
p.frameBounds = [rect];


(lib.headdress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory5();
	this.instance.setTransform(0,0,0.396,0.396,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At7GAIhFlKIJ4pMIF/AvIIAEaIGKKNIguBXg");
	this.shape.setTransform(0.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.4,-53.1,192.3,107.1);
p.frameBounds = [rect];


(lib.headdress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory9();
	this.instance.setTransform(-17.5,-25.8,0.332,0.332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("As+GfIj+jTIhPjjIBTlvIEVivITPgiIJ9HZIBjFSImwGEg");
	this.shape.setTransform(-0.3,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.6,-58.8,232.8,120.2);
p.frameBounds = [rect];


(lib.headdress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4();
	this.instance.setTransform(0,0,0.488,0.488,0,0,0,-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuyDLICYqNIY+g4ICPJKIh+EJI4pCig");
	this.shape.setTransform(0.8,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.9,-51.4,189.5,101.5);
p.frameBounds = [rect];


(lib.headdress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory8();
	this.instance.setTransform(0,0,0.332,0.332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsNHKIjViyIhDkTIG/lhITRjqIG7C8IiiNJIlNBvIvtAZg");
	this.shape.setTransform(-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-58.4,212.6,116.7);
p.frameBounds = [rect];


(lib.headdress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3();
	this.instance.setTransform(23.6,-16.5,0.408,0.408,0,0,0,-1.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApqEuIhMj0IDyoWIR5A7IACC3IpSK7ImfAMg");
	this.shape.setTransform(23.3,-17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-65.4,139.2,95.6);
p.frameBounds = [rect];


(lib.headdress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory3();
	this.instance.setTransform(0.1,0,0.419,0.419,9,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArgJyIiRqjIDfm6IEniRIN2AwIFnGAIgCIzIhlEXg");
	this.shape.setTransform(-3,-5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.9,-75.7,183.9,151.5);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory2();
	this.instance.setTransform(-0.5,0.1,0.408,0.408,0,0,0,-1.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXEyIDWo+IJbimIF7FxIADCLIlzECIqeBng");
	this.shape.setTransform(-1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-43.3,120.1,87.2);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory2();
	this.instance.setTransform(0,0,0.457,0.457,45,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AB8G4IrDrxIgUifIHwgeILHJ1Ig/D5IibB/g");
	this.shape.setTransform(-1.5,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-59.4,121.4,119);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1();
	this.instance.setTransform(0,0,0.381,0.38,0,0,0,-1.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjlHsIrPk9IgYlqIM+llIFcADIFdC8IGhKTIjfCHIn3Bog");
	this.shape.setTransform(0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,-54,194.6,109.1);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1();
	this.instance.setTransform(0,0,0.494,0.494,0,0,0,0.2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AguHqIkSixIiSmnIC5mHICDgLIJpG3IgFB+IjiHMg");
	this.shape.setTransform(-0.5,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.2,-52,93.5,102.7);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.h2_t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_top6();
	this.instance.setTransform(20.3,16,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-54.5,139.3,117.9);
p.frameBounds = [rect];


(lib.h2_t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_top5();
	this.instance.setTransform(8.3,21,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-54.5,110.2,120.1);
p.frameBounds = [rect];


(lib.h2_t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_top4();
	this.instance.setTransform(5.3,21,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-54.5,110.2,114.6);
p.frameBounds = [rect];


(lib.h2_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_top3();
	this.instance.setTransform(10.3,23,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-54.5,110.2,127.8);
p.frameBounds = [rect];


(lib.h2_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_top2();
	this.instance.setTransform(15.3,27,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-54.5,133.5,133.4);
p.frameBounds = [rect];


(lib.h2_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_top1();
	this.instance.setTransform(10.3,11,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-54.5,110.6,109);
p.frameBounds = [rect];


(lib.h2_d9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_dress9();
	this.instance.setTransform(4.3,83,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-54.5,242,240);
p.frameBounds = [rect];


(lib.h2_d8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_dress8();
	this.instance.setTransform(13,80,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-54.5,135,241.7);
p.frameBounds = [rect];


(lib.h2_d7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_dress7();
	this.instance.setTransform(12.3,69,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-54.5,131.4,212.5);
p.frameBounds = [rect];


(lib.h2_d6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_dress6();
	this.instance.setTransform(2.9,55,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-54.5,110.2,180.8);
p.frameBounds = [rect];


(lib.h2_d5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_dress5();
	this.instance.setTransform(14.3,81,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.2,-54.5,182,234.8);
p.frameBounds = [rect];


(lib.h2_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_dress4();
	this.instance.setTransform(5.3,77,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.9,-54.5,129,235.8);
p.frameBounds = [rect];


(lib.h2_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_dress3();
	this.instance.setTransform(9.3,75,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.2,-54.5,144,247.7);
p.frameBounds = [rect];


(lib.h2_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_dress2();
	this.instance.setTransform(9.3,84,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-54.5,139,248.8);
p.frameBounds = [rect];


(lib.h2_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero2_dress1();
	this.instance.setTransform(4.3,78,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.7,-54.5,139,255);
p.frameBounds = [rect];


(lib.h2_b6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_bottom1
	this.instance = new lib.hero2_bottom6();
	this.instance.setTransform(-4.5,23.5,1,1,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(0,-38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.1,-72.4,113.2,157.3);
p.frameBounds = [rect];


(lib.h2_b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_bottom1
	this.instance = new lib.hero2_bottom5();
	this.instance.setTransform(-5.5,29.5,1,1,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(0,-38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.4,-72.4,116.5,171.1);
p.frameBounds = [rect];


(lib.h2_b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_bottom1
	this.instance = new lib.hero2_bottom4();
	this.instance.setTransform(-0.5,7.5,1,1,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(0,-38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.1,-72.4,110.2,123.8);
p.frameBounds = [rect];


(lib.h2_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_bottom1
	this.instance = new lib.hero2_bottom3();
	this.instance.setTransform(-1.5,-0.5,1,1,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(0,-38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.1,-72.4,110.2,108.7);
p.frameBounds = [rect];


(lib.h2_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_bottom1
	this.instance = new lib.hero2_bottom2();
	this.instance.setTransform(-6.5,31.5,1,1,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(0,-38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.4,-72.4,117.5,173.1);
p.frameBounds = [rect];


(lib.h2_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_bottom1
	this.instance = new lib.hero2_bottom1();
	this.instance.setTransform(0.5,17.5,1,1,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(0,-38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.1,-72.4,110.2,144.9);
p.frameBounds = [rect];


(lib.h2_a8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hanger1
	this.instance = new lib.hanger1();
	this.instance.setTransform(-27,-76.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_accessory6
	this.instance_1 = new lib.hero2_accessory8();
	this.instance_1.setTransform(-43,18,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-229.6,-109.9,373,226);
p.frameBounds = [rect];


(lib.h2_a7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hanger1
	this.instance = new lib.hanger1();
	this.instance.setTransform(-27,-76.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_accessory6
	this.instance_1 = new lib.hero2_accessory7();
	this.instance_1.setTransform(-38,-31.9,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230.1,-128.2,384,193);
p.frameBounds = [rect];


(lib.h2_a6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hanger1
	this.instance = new lib.hanger1();
	this.instance.setTransform(-27,-76.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_accessory6
	this.instance_1 = new lib.hero2_accessory6();
	this.instance_1.setTransform(0,0,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220.5,-148.5,441,297);
p.frameBounds = [rect];


(lib.h1_t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top2
	this.instance = new lib.hero1_top6();
	this.instance.setTransform(-14.7,-1.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-10.7,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.8,-67.9,110.2,109.1);
p.frameBounds = [rect];


(lib.h1_t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_top5();
	this.instance.setTransform(-8.7,8.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-55,110.2,102.3);
p.frameBounds = [rect];


(lib.h1_t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top2
	this.instance = new lib.hero1_top4();
	this.instance.setTransform(-12.4,38.1,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-10.7,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.6,-67.9,113,185);
p.frameBounds = [rect];


(lib.h1_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_top3();
	this.instance.setTransform(-7.7,3.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.7,-55,122.6,93.3);
p.frameBounds = [rect];


(lib.h1_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top2
	this.instance = new lib.hero1_top2();
	this.instance.setTransform(-18.7,-10.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-10.7,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.2,-67.9,121.6,93);
p.frameBounds = [rect];


(lib.h1_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_top1();
	this.instance.setTransform(-4.7,15.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-55,110.2,105.8);
p.frameBounds = [rect];


(lib.h1_s6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// socks1
	this.instance = new lib.socks6();
	this.instance.setTransform(7.5,-0.2,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-12.9,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-75.7,134.1,126.2);
p.frameBounds = [rect];


(lib.h1_s5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// socks1
	this.instance = new lib.socks5();
	this.instance.setTransform(9.5,8.8,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-12.9,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-75.7,136.1,144.8);
p.frameBounds = [rect];


(lib.h1_s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// socks1
	this.instance = new lib.socks4();
	this.instance.setTransform(9.5,14.8,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-12.9,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-75.7,136.1,151.5);
p.frameBounds = [rect];


(lib.h1_s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// socks1
	this.instance = new lib.socks3();
	this.instance.setTransform(-9.5,-19.2,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-12.9,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-75.7,117,102.9);
p.frameBounds = [rect];


(lib.h1_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// socks1
	this.instance = new lib.socks2();
	this.instance.setTransform(9.5,14.8,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-12.9,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-75.7,136.1,151.5);
p.frameBounds = [rect];


(lib.h1_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// socks1
	this.instance = new lib.socks1();
	this.instance.setTransform(9.5,14.8,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-12.9,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-75.7,136.1,151.5);
p.frameBounds = [rect];


(lib.h1_d9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_dress9();
	this.instance.setTransform(-5.1,46.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.7,-55,119.6,173.5);
p.frameBounds = [rect];


(lib.h1_d8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_dress8();
	this.instance.setTransform(7.9,31.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-55,119.2,153.3);
p.frameBounds = [rect];


(lib.h1_d7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_dress7();
	this.instance.setTransform(3.3,40.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.3,-55,173,180);
p.frameBounds = [rect];


(lib.h1_d6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_dress6();
	this.instance.setTransform(12.3,52.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.4,-55,225,189.6);
p.frameBounds = [rect];


(lib.h1_d5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_dress5();
	this.instance.setTransform(-1.7,58.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.6,-55,163,193.9);
p.frameBounds = [rect];


(lib.h1_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_dress4();
	this.instance.setTransform(7.3,83.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155.6,-55,325,251.1);
p.frameBounds = [rect];


(lib.h1_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_dress3();
	this.instance.setTransform(37.3,77.4,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.1,-55,254,218.4);
p.frameBounds = [rect];


(lib.h1_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_dress2();
	this.instance.setTransform(-5.7,68.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.4,-55,163,195.2);
p.frameBounds = [rect];


(lib.h1_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_top1
	this.instance = new lib.hero1_dress1();
	this.instance.setTransform(-5.7,43.5,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.1,-55,136,164.9);
p.frameBounds = [rect];


(lib.h1_b6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_bottom2
	this.instance = new lib.hero1_bottom6();
	this.instance.setTransform(-6.8,5.4,1,1,11.6,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-7.7,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.2,-62,160.6,116);
p.frameBounds = [rect];


(lib.h1_b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_bottom1
	this.instance = new lib.hero1_bottom5();
	this.instance.setTransform(4,-0.8,1,1,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-0.9,-23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.9,-57.3,110.2,88.7);
p.frameBounds = [rect];


(lib.h1_b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_bottom2
	this.instance = new lib.hero1_bottom4();
	this.instance.setTransform(-6.8,5.4,1,1,11.6,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-7.7,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.8,-62,110.2,110.7);
p.frameBounds = [rect];


(lib.h1_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_bottom1
	this.instance = new lib.hero1_bottom3();
	this.instance.setTransform(0,19.2,1,1,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.9,-23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-57.3,172.3,135.9);
p.frameBounds = [rect];


(lib.h1_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_bottom2
	this.instance = new lib.hero1_bottom2();
	this.instance.setTransform(0.2,9.4,1,1,11.6,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger2
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-7.7,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.7,-62,129.6,124.2);
p.frameBounds = [rect];


(lib.h1_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_bottom1
	this.instance = new lib.hero1_bottom1();
	this.instance.setTransform(0,8.2,1,1,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-0.9,-23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.8,-57.3,151.6,114.6);
p.frameBounds = [rect];


(lib.h1_a7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hanger1
	this.instance = new lib.hanger1();
	this.instance.setTransform(-22,-81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_accessory6
	this.instance_1 = new lib.hero1_accessory7();
	this.instance_1.setTransform(-15.9,15.7,1,1,0,0,0,-0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.8,-115.2,328,225.9);
p.frameBounds = [rect];


(lib.h1_a6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hanger1
	this.instance = new lib.hanger1();
	this.instance.setTransform(-22,-81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_accessory6
	this.instance_1 = new lib.hero1_accessory6();
	this.instance_1.setTransform(2.1,20.7,1,1,0,0,0,-0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.5,-115.2,247,232.4);
p.frameBounds = [rect];


(lib.dress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d9();
	this.instance.setTransform(-1,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqFRtIl8kxIjal8IgmnhICtl2IPOtpIDdAAIP0NXIC3G8IhgI6IkRFmInHEKIp/BEg");
	this.shape.setTransform(4.1,120.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.1,-7.5,256.5,256.3);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d9();
	this.instance.setTransform(-1.5,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap8LnICZwqIHVpcIDdAAIGkJmIAKNJIitD+IliCPIlOADg");
	this.shape.setTransform(-8,85.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.8,-7,127.6,185.8);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d8();
	this.instance.setTransform(-1.7,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArNR2ICQ6tIF8rJICwABILfIKIlBf2g");
	this.shape.setTransform(9.8,122.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-5.7,143.8,256.3);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d8();
	this.instance.setTransform(-1.7,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApnJXIBtvQIFhnBIDKADII3S9IjeExIk9B5ImvALg");
	this.shape.setTransform(6.3,75.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-6.9,125,165.5);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d7();
	this.instance.setTransform(-1.4,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmDQhIkzimIAJz2IG9riID9gBIKqIiIkgX2IhnBZIkwBMg");
	this.shape.setTransform(12.5,107.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-4.8,139.1,223.9);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d7();
	this.instance.setTransform(-1.7,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApDM/IlUlLIDeyKIHjk7IGHABILnR1Ii9GyIj2DEIngC3g");
	this.shape.setTransform(2.8,87.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.2,-9.9,184.1,195.6);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d6();
	this.instance.setTransform(-0.7,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AowM/ICy0lIEZnVIDfACIFWJKIBhSmIk8BrIl/Aag");
	this.shape.setTransform(1.2,90.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-5.1,113.4,191.3);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d6();
	this.instance.setTransform(-1.5,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArMjcIHlpkICoABIRcWAMgg4AD/g");
	this.shape.setTransform(12.9,77.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-6.2,225,195.8);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d5();
	this.instance.setTransform(-1.3,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArKRnIjqlnIFd43IF4mlIEMgBII4HoIFQcSIjlCPIqbAyg");
	this.shape.setTransform(12.2,118.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.8,-6.4,190,249.4);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d5();
	this.instance.setTransform(-1.9,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtkMxIFFy7IHSqKIDvgBIG1J6IEOSmIlqDOIwjA9g");
	this.shape.setTransform(-4.6,96.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-7.7,173.9,209.3);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d4();
	this.instance.setTransform(-1.1,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgSuIlliDIBw4zIGlrAIDNADIKpHyIlOecg");
	this.shape.setTransform(6.1,117.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-5.5,142.1,245.2);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d4();
	this.instance.setTransform(-1.9,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxQhMAL8giYIJrAAMAP8Ajug");
	this.shape.setTransform(8.8,107.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.5,-6.5,325,257.6);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d3();
	this.instance.setTransform(-1.3,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar8QhIDF8hIDnmhIDhh9IClgBILGIOMgFyAgxg");
	this.shape.setTransform(6.7,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.7,-6.2,153,262.4);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d3();
	this.instance.setTransform(-1.3,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwIPrIk0oaIKy6kIGlgBIGlHsIA/K7IOiHGICcC3IiFDpI4vGcg");
	this.shape.setTransform(35,116.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.2,-7.7,268.4,247.6);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d2();
	this.instance.setTransform(-1.2,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArhRRICx9BIGEouID9AAIKSHsMgEqAhRg");
	this.shape.setTransform(7.2,125.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.6,-6,147.8,262.3);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d2();
	this.instance.setTransform(-2,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqBNMIjjl+IDnysIHDkqIIjgCIH8XUIj5FpInyDAIl7AYg");
	this.shape.setTransform(-6.6,96.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-7.2,173.9,207.1);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d1();
	this.instance.setTransform(-1.8,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArSRcMABDgitIHwjzIEVAAIJdI8MgE1AhNg");
	this.shape.setTransform(2.2,126.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.1,-8,144.8,269.9);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d1();
	this.instance.setTransform(-1.4,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlqMuIllwNIJcqqIEggBIIjJAIg6QyIo4Cjg");
	this.shape.setTransform(-8.1,83.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.2,-7.6,144.2,181.5);
p.frameBounds = [rect];


(lib.bottom_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b6();
	this.instance.setTransform(-1.4,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkXMnIk8iWIEPwXIFNnAIBvAAIF6HBIBiSqIksAig");
	this.shape.setTransform(-7.5,77.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.1,-6.2,120.7,168);
p.frameBounds = [rect];


(lib.bottom_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b6();
	this.instance.setTransform(6.5,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqiHPIiJmhILXp9ICsAAILULTIlQHMg");
	this.shape.setTransform(1.1,49.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-10,163.2,126);
p.frameBounds = [rect];


(lib.bottom_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b5();
	this.instance.setTransform(-1.8,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoqLEIgmjVIESu3IFMnJIC0gBIFoIBIAnQ9IhlDjIqTAEg");
	this.shape.setTransform(-8.8,84.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.1,-7.2,121.4,183);
p.frameBounds = [rect];


(lib.bottom_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b5();
	this.instance.setTransform(-0.1,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnSEzICMszIGlAAIF1KsIhfFVg");
	this.shape.setTransform(2.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.1,-7.5,110.2,102.7);
p.frameBounds = [rect];


(lib.bottom_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b4();
	this.instance.setTransform(-1.4,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnkIXIgljZID6vgIJfAEIC6PTIhDDiIhxBeIm0Aug");
	this.shape.setTransform(-2.5,62);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-5.4,110.2,135);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b4();
	this.instance.setTransform(6.8,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnaHuIhFmCIGyq9IDrgCIGiNJIj+Feg");
	this.shape.setTransform(1.9,50.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-9.2,112.4,119.9);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b3();
	this.instance.setTransform(-1,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoWHNIBVnnIGUpEIDBgBIFHIaIA8ITIiqB2IqZAbg");
	this.shape.setTransform(-3.4,52.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-7.9,111.1,121.6);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b3();
	this.instance.setTransform(-0.6,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIyIk9mRIMbtpIFjAAIJFO8IohGFIkoBQg");
	this.shape.setTransform(-2.8,62.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-9,175.2,145);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b2();
	this.instance.setTransform(-1.3,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao4K/IgcipID3uyIF5oEIBxAAIF2HkIBSR0IhTDSIqAAXg");
	this.shape.setTransform(-7.9,86.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.6,-6.5,121.4,185.9);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b2();
	this.instance.setTransform(6,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqgGmIHEwXIGgAAIHdP8IlwDGImLAhg");
	this.shape.setTransform(2.2,54.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.1,-8,136,132.2);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b1();
	this.instance.setTransform(-1.5,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjfLrIlPhyIgMliIDMpdIEUnCIDgAAIE4GzIB9MpIgrDyIjfBDg");
	this.shape.setTransform(-1.2,71.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.4,-6.5,114.4,155.5);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b1();
	this.instance.setTransform(-0.5,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCGbIg0jyIIHruIHAAAIImMCIiiDtIk3CPIpiANg");
	this.shape.setTransform(1.9,50.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.3,-7.5,154.1,122.1);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.5,scaleY:0.5},1).to({scaleX:1.17,scaleY:1.17,alpha:0.898},7).to({scaleX:1,scaleY:1,alpha:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-35.7,-35.7,71.4,71.4), new cjs.Rectangle(-41.4,-41.4,82.9,82.9), new cjs.Rectangle(-47.1,-47.1,94.3,94.3), new cjs.Rectangle(-52.8,-52.8,105.7,105.7), new cjs.Rectangle(-58.5,-58.5,117.2,117.2), new cjs.Rectangle(-64.2,-64.2,128.6,128.6), new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-66.6,-66.6,133.4,133.4), new cjs.Rectangle(-63.3,-63.3,126.7,126.7), new cjs.Rectangle(-60,-60,120,120)];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
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


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory9();
	this.instance.setTransform(0,0,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIOEIAA8HIURAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory5();
	this.instance.setTransform(0,0.1,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIH0IAAvnIURAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-50,130,100);
p.frameBounds = [rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
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
	this.instance.setTransform(0,0,0.958,0.958);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyuGPIAAsdMAldAAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-38.3,230,76.7);
p.frameBounds = [rect, new cjs.Rectangle(-120,-40,240,80), new cjs.Rectangle(-115,-38.3,230,76.7), new cjs.Rectangle(-120,-40,240,80)];


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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyuGPIAAsdMAldAAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-38.3,230,76.7);
p.frameBounds = [rect, new cjs.Rectangle(-120,-40,240,80), new cjs.Rectangle(-115,-38.3,230,76.7), new cjs.Rectangle(-120,-40,240,80)];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_mc();
	this.instance.setTransform(0,0,0.958,0.958);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyuGPIAAsdMAldAAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-38.3,230,76.7);
p.frameBounds = [rect, new cjs.Rectangle(-120,-40,240,80), new cjs.Rectangle(-115,-38.3,230,76.7), new cjs.Rectangle(-120,-40,240,80)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();
	this.instance.setTransform(0,0,0.958,0.958);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyuGPIAAsdMAldAAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-38.3,230,76.7);
p.frameBounds = [rect, new cjs.Rectangle(-120,-40,240,80), new cjs.Rectangle(-115,-38.3,230,76.7), new cjs.Rectangle(-120,-40,240,80)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_mc();
	this.instance.setTransform(0,0,0.958,0.958);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyuGPIAAsdMAldAAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.947,scaleY:0.947,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-38.3,230,76.7);
p.frameBounds = [rect, new cjs.Rectangle(-120,-40,240,80), new cjs.Rectangle(-113.7,-37.9,227.4,75.8), new cjs.Rectangle(-120,-40,240,80)];


(lib.next_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.next_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92,scaleY:0.92},24).to({scaleX:1,scaleY:1},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect, new cjs.Rectangle(-119.5,-49.8,239.2,99.7), new cjs.Rectangle(-119.1,-49.6,238.4,99.3), new cjs.Rectangle(-118.7,-49.4,237.5,99), new cjs.Rectangle(-118.3,-49.3,236.7,98.6), new cjs.Rectangle(-117.9,-49.1,235.9,98.3), new cjs.Rectangle(-117.5,-48.9,235,97.9), new cjs.Rectangle(-117,-48.7,234.2,97.6), new cjs.Rectangle(-116.6,-48.6,233.4,97.2), new cjs.Rectangle(-116.2,-48.4,232.5,96.9), new cjs.Rectangle(-115.8,-48.2,231.7,96.5), new cjs.Rectangle(-115.4,-48,230.9,96.2), new cjs.Rectangle(-115,-47.9,230,95.8), new cjs.Rectangle(-114.5,-47.7,229.2,95.5), new cjs.Rectangle(-114.1,-47.5,228.4,95.1), new cjs.Rectangle(-113.7,-47.3,227.5,94.8), new cjs.Rectangle(-113.3,-47.2,226.7,94.4), new cjs.Rectangle(-112.9,-47,225.9,94.1), new cjs.Rectangle(-112.5,-46.8,225,93.7), new cjs.Rectangle(-112,-46.6,224.2,93.4), new cjs.Rectangle(-111.6,-46.5,223.4,93), new cjs.Rectangle(-111.2,-46.3,222.5,92.7), new cjs.Rectangle(-110.8,-46.1,221.7,92.3), new cjs.Rectangle(-110.4,-45.9,220.9,92), new cjs.Rectangle(-110,-45.8,220,91.6), new cjs.Rectangle(-110.2,-45.9,220.6,91.9), new cjs.Rectangle(-110.5,-46,221.2,92.1), new cjs.Rectangle(-110.8,-46.1,221.7,92.4), new cjs.Rectangle(-111.1,-46.2,222.3,92.6), new cjs.Rectangle(-111.4,-46.4,222.9,92.8), new cjs.Rectangle(-111.7,-46.5,223.5,93.1), new cjs.Rectangle(-111.9,-46.6,224,93.3), new cjs.Rectangle(-112.2,-46.7,224.6,93.6), new cjs.Rectangle(-112.5,-46.8,225.2,93.8), new cjs.Rectangle(-112.8,-47,225.7,94), new cjs.Rectangle(-113.1,-47.1,226.3,94.3), new cjs.Rectangle(-113.4,-47.2,226.9,94.5), new cjs.Rectangle(-113.7,-47.3,227.4,94.8), new cjs.Rectangle(-113.9,-47.4,228,95), new cjs.Rectangle(-114.2,-47.6,228.6,95.2), new cjs.Rectangle(-114.5,-47.7,229.2,95.5), new cjs.Rectangle(-114.8,-47.8,229.7,95.7), new cjs.Rectangle(-115.1,-47.9,230.3,96), new cjs.Rectangle(-115.4,-48,230.9,96.2), new cjs.Rectangle(-115.7,-48.2,231.5,96.4), new cjs.Rectangle(-115.9,-48.3,232,96.7), new cjs.Rectangle(-116.2,-48.4,232.6,96.9), new cjs.Rectangle(-116.5,-48.5,233.2,97.2), new cjs.Rectangle(-116.8,-48.6,233.7,97.4), new cjs.Rectangle(-117.1,-48.8,234.3,97.6), new cjs.Rectangle(-117.4,-48.9,234.9,97.9), new cjs.Rectangle(-117.7,-49,235.5,98.1), new cjs.Rectangle(-117.9,-49.1,236,98.3), new cjs.Rectangle(-118.2,-49.2,236.6,98.6), new cjs.Rectangle(-118.5,-49.4,237.2,98.8), new cjs.Rectangle(-118.8,-49.5,237.7,99.1), new cjs.Rectangle(-119.1,-49.6,238.3,99.3), new cjs.Rectangle(-119.4,-49.7,238.9,99.5), new cjs.Rectangle(-119.7,-49.8,239.4,99.8), new cjs.Rectangle(-120,-50,240,100)];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAGDIgLAMQidgEhxhxQh1h1AAilQAAikB1h1QB1h1CkAAQClAAB1B1QB2B1gBCkQABClh2B1QhxBxidAEg");

	// animation
	this.instance = new lib.logo_4_mc();
	this.instance.setTransform(0.1,-90,0.4,0.4,90,0,0,0,-0.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({y:90},30).wait(1));

	// graph
	this.instance_1 = new lib.body_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am5JYQhBAAgvguQguguAAhCIAAtzQAAhBAugvQAvguBBAAINzAAQBCAAAuAuQAuAvAABBIAANzQAABCguAuQguAuhCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();
	this.instance.setTransform(0,0,0.958,0.958);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyuGPIAAsdMAldAAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-38.3,230,76.7);
p.frameBounds = [rect, new cjs.Rectangle(-120,-40,240,80), new cjs.Rectangle(-115,-38.3,230,76.7), new cjs.Rectangle(-120,-40,240,80)];


(lib.more_games_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_8_2_mc();
	this.instance.setTransform(65.3,68,1.002,1.002,45,0,0,21.6,21.6);

	this.instance_1 = new lib.more_games_8_2_mc();
	this.instance_1.setTransform(131.3,66,0.524,0.524,45,0,0,21.6,21.6);

	this.instance_2 = new lib.more_games_8_2_mc();
	this.instance_2.setTransform(52.3,54,0.524,0.524,45,0,0,21.6,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleX:0.524,scaleY:0.524,x:131.3,y:66}},{t:this.instance,p:{scaleX:1.002,scaleY:1.002,x:65.3,y:68,regX:21.6,regY:21.6}}]},83).to({state:[{t:this.instance_2,p:{scaleX:0.524,scaleY:0.524,x:52.3,y:54}},{t:this.instance_1,p:{scaleX:0.642,scaleY:0.642,x:102.3,y:51.5}},{t:this.instance,p:{scaleX:0.495,scaleY:0.495,x:136.9,y:74.5,regX:21.6,regY:21.6}}]},3).to({state:[{t:this.instance,p:{scaleX:0.445,scaleY:0.445,x:83.8,y:81,regX:21.6,regY:21.6}}]},3).to({state:[{t:this.instance_2,p:{scaleX:0.594,scaleY:0.594,x:63.8,y:59.9}},{t:this.instance_1,p:{scaleX:1.377,scaleY:1.377,x:99.3,y:67.5}},{t:this.instance,p:{scaleX:0.716,scaleY:0.716,x:144.8,y:72.1,regX:21.7,regY:21.7}}]},3).to({state:[{t:this.instance_1,p:{scaleX:0.524,scaleY:0.524,x:131.3,y:66}},{t:this.instance,p:{scaleX:1.002,scaleY:1.002,x:65.3,y:68,regX:21.6,regY:21.6}}]},3).to({state:[{t:this.instance_2,p:{scaleX:0.524,scaleY:0.524,x:52.3,y:54}},{t:this.instance_1,p:{scaleX:0.642,scaleY:0.642,x:102.3,y:51.5}},{t:this.instance,p:{scaleX:0.495,scaleY:0.495,x:136.9,y:74.5,regX:21.6,regY:21.6}}]},3).to({state:[{t:this.instance,p:{scaleX:0.445,scaleY:0.445,x:83.8,y:81,regX:21.6,regY:21.6}}]},3).to({state:[{t:this.instance_2,p:{scaleX:0.594,scaleY:0.594,x:63.8,y:59.9}},{t:this.instance_1,p:{scaleX:1.377,scaleY:1.377,x:99.3,y:67.5}},{t:this.instance,p:{scaleX:0.716,scaleY:0.716,x:144.8,y:72.1,regX:21.7,regY:21.7}}]},3).to({state:[{t:this.instance_1,p:{scaleX:0.524,scaleY:0.524,x:131.3,y:66}},{t:this.instance,p:{scaleX:1.002,scaleY:1.002,x:65.3,y:68,regX:21.6,regY:21.6}}]},3).to({state:[{t:this.instance_2,p:{scaleX:0.524,scaleY:0.524,x:52.3,y:54}},{t:this.instance_1,p:{scaleX:0.642,scaleY:0.642,x:102.3,y:51.5}},{t:this.instance,p:{scaleX:0.495,scaleY:0.495,x:136.9,y:74.5,regX:21.6,regY:21.6}}]},3).to({state:[{t:this.instance,p:{scaleX:0.445,scaleY:0.445,x:83.8,y:81,regX:21.6,regY:21.6}}]},3).to({state:[{t:this.instance_2,p:{scaleX:0.594,scaleY:0.594,x:63.8,y:59.9}},{t:this.instance_1,p:{scaleX:1.377,scaleY:1.377,x:99.3,y:67.5}},{t:this.instance,p:{scaleX:0.716,scaleY:0.716,x:144.8,y:72.1,regX:21.7,regY:21.7}}]},3).to({state:[]},3).wait(9));

	// animation
	this.instance_3 = new lib.more_games_7_2_mc();
	this.instance_3.setTransform(88,153.1,1,1,0,0,0,60.3,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({regY:31.2,rotation:3.9,x:84.7,y:153.2},2).to({regY:31.1,rotation:-3.5,x:90.9,y:152.9},3).to({rotation:0,x:88,y:153.1},3).wait(8).to({regY:31.2,rotation:3.9,x:84.7,y:153.2},2).to({regY:31.1,rotation:-3.5,x:90.9,y:152.9},3).to({rotation:0,x:88,y:153.1},3).wait(17).to({scaleX:0.87,scaleY:1.09,x:87.8,y:157.2},2).to({scaleX:1,scaleY:1,x:88,y:153.1},2).to({scaleX:1.26,scaleY:1.14,y:162.6},3).to({scaleX:1,scaleY:1,y:153.1},5).to({scaleX:0.87,scaleY:1.09,x:87.8,y:157.2},2).to({scaleX:1,scaleY:1,x:88,y:153.1},2).to({scaleX:1.26,scaleY:1.14,y:162.6},3).wait(51).to({scaleX:1,scaleY:1,y:153.1},9).wait(1));

	// animation
	this.instance_4 = new lib.more_games_6_2_mc();
	this.instance_4.setTransform(116.6,116.5,1,1,0,0,0,23.1,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({rotation:3.9,x:115.8,y:118.5},2).to({regX:23.2,regY:16,rotation:-3.5,x:117.3,y:114.7},3).to({regX:23.1,regY:15.9,rotation:0,x:116.6,y:116.5},3).wait(8).to({rotation:3.9,x:115.8,y:118.5},2).to({regX:23.2,regY:16,rotation:-3.5,x:117.3,y:114.7},3).to({regX:23.1,regY:15.9,rotation:0,x:116.6,y:116.5},3).wait(17).to({scaleX:0.87,scaleY:1.09,x:112.6,y:117.4},2).to({scaleX:1,scaleY:1,x:116.6,y:116.5},2).to({y:126},3).to({y:116.5},5).to({scaleX:0.87,scaleY:1.09,x:112.6,y:117.4},2).to({scaleX:1,scaleY:1,x:116.6,y:116.5},2).to({y:126},3).wait(51).to({y:116.5},9).wait(1));

	// animation
	this.instance_5 = new lib.more_games_5_2_mc();
	this.instance_5.setTransform(59.3,116.5,1,1,0,0,0,23.1,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({rotation:3.9,x:58.6,y:114.6},2).to({regX:23.2,regY:16,rotation:-3.5,x:60.1,y:118.2},3).to({regX:23.1,regY:15.9,rotation:0,x:59.3,y:116.5},3).wait(8).to({rotation:3.9,x:58.6,y:114.6},2).to({regX:23.2,regY:16,rotation:-3.5,x:60.1,y:118.2},3).to({regX:23.1,regY:15.9,rotation:0,x:59.3,y:116.5},3).wait(17).to({scaleX:0.87,scaleY:1.09,x:62.9,y:117.4},2).to({scaleX:1,scaleY:1,x:59.3,y:116.5},2).to({y:126},3).to({y:116.5},5).to({scaleX:0.87,scaleY:1.09,x:62.9,y:117.4},2).to({scaleX:1,scaleY:1,x:59.3,y:116.5},2).to({y:126},3).wait(51).to({y:116.5},9).wait(1));

	// animation
	this.instance_6 = new lib.more_games_4_2_mc();
	this.instance_6.setTransform(88.6,48.5,1,1,0,0,0,69,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({rotation:3.9,x:92.5,y:48.8},2).to({regX:69.1,rotation:-3.5,x:85.2,y:48.5},3).to({regX:69,rotation:0,x:88.6},3).wait(8).to({rotation:3.9,x:92.5,y:48.8},2).to({regX:69.1,rotation:-3.5,x:85.2,y:48.5},3).to({regX:69,rotation:0,x:88.6},3).wait(17).to({scaleX:0.87,scaleY:1.09,x:88.4,y:43.7},2).to({scaleX:1,scaleY:1,x:88.6,y:48.5},5).wait(5).to({scaleX:0.87,scaleY:1.09,x:88.4,y:43.7},2).to({scaleX:1,scaleY:1,x:88.6,y:48.5},5).wait(1).to({y:-6.5},9,cjs.Ease.get(1)).wait(41).to({y:48.5},9).wait(1));

	// animation
	this.instance_7 = new lib.more_games_3_2_mc();
	this.instance_7.setTransform(86.8,143.5,1,1,0,0,0,86.8,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({rotation:3.9,x:84.2,y:143.4},2).to({rotation:-3.5,x:89.1,y:143.5},3).to({rotation:0,x:86.8},3).wait(8).to({rotation:3.9,x:84.2,y:143.4},2).to({rotation:-3.5,x:89.1,y:143.5},3).to({rotation:0,x:86.8},3).wait(17).to({scaleX:0.87,scaleY:1.09,y:146.8},2).to({scaleX:1,scaleY:1,y:143.5},5).wait(5).to({scaleX:0.87,scaleY:1.09,y:146.8},2).to({scaleX:1,scaleY:1,y:143.5},5).wait(61));

	// animation
	this.instance_8 = new lib.more_games_1_2_mc();
	this.instance_8.setTransform(88.5,131.4,1,1,0,0,0,64.2,41.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(72).to({_off:false},0).to({y:76.8},11,cjs.Ease.get(1)).wait(35).to({y:118.8},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.5,0.5,174,209.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-2.8,-1.5,178.1,214.4), new cjs.Rectangle(-6.5,-3.9,182.8,220), new cjs.Rectangle(-1.9,-0.9,177,213), new cjs.Rectangle(0,-0.7,176.3,212.4), new cjs.Rectangle(-1.1,-3.6,181.8,218.9), new cjs.Rectangle(-0.5,-2.2,179.2,215.7), new cjs.Rectangle(0.1,-0.7,176.4,212.4), rect=new cjs.Rectangle(0.5,0.5,174,209.8), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-2.8,-1.5,178.1,214.4), new cjs.Rectangle(-6.5,-3.9,182.8,220), new cjs.Rectangle(-1.9,-0.9,177,213), new cjs.Rectangle(0,-0.7,176.3,212.4), new cjs.Rectangle(-1.1,-3.6,181.8,218.9), new cjs.Rectangle(-0.5,-2.2,179.2,215.7), new cjs.Rectangle(0.1,-0.7,176.4,212.4), rect=new cjs.Rectangle(0.5,0.5,174,209.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(6.3,-3.9,162.5,218.6), new cjs.Rectangle(12,-8.5,150.9,227.7), new cjs.Rectangle(9.7,-6.6,155.5,224), new cjs.Rectangle(7.4,-4.8,160.2,220.4), new cjs.Rectangle(5.1,-3,164.8,216.9), new cjs.Rectangle(2.8,-1.2,169.4,213.2), rect=new cjs.Rectangle(0.5,0.5,174,209.8), rect, rect, rect, rect, rect, new cjs.Rectangle(6.3,-3.9,162.5,218.6), new cjs.Rectangle(12,-8.5,150.9,227.7), new cjs.Rectangle(9.7,-6.6,155.5,224), new cjs.Rectangle(7.4,-4.8,160.2,220.4), new cjs.Rectangle(5.1,-3,164.8,216.9), new cjs.Rectangle(2.8,-1.2,169.4,213.2), rect=new cjs.Rectangle(0.5,0.5,174,209.8), rect, new cjs.Rectangle(0.5,-11.1,174,221.3), new cjs.Rectangle(0.5,-21.3,174,231.5), new cjs.Rectangle(0.5,-30.1,174,240.3), new cjs.Rectangle(0.5,-37.5,174,247.8), new cjs.Rectangle(0.5,-43.7,174,253.9), new cjs.Rectangle(0.5,-48.4,174,258.7), new cjs.Rectangle(0.5,-51.8,174,262.1), new cjs.Rectangle(0.5,-53.8,174,264.1), rect=new cjs.Rectangle(0.5,-54.5,174,264.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0.5,-48.4,174,258.7), new cjs.Rectangle(0.5,-42.3,174,252.6), new cjs.Rectangle(0.5,-36.2,174,246.4), new cjs.Rectangle(0.5,-30.1,174,240.3), new cjs.Rectangle(0.5,-24,174,234.2), new cjs.Rectangle(0.5,-17.9,174,228.1), new cjs.Rectangle(0.5,-11.7,174,222), new cjs.Rectangle(0.5,-5.6,174,215.9), new cjs.Rectangle(0.5,0.5,174,209.8)];


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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyuGPIAAsdMAldAAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-38.3,230,76.7);
p.frameBounds = [rect, new cjs.Rectangle(-120,-40,240,80), new cjs.Rectangle(-115,-38.3,230,76.7), new cjs.Rectangle(-120,-40,240,80)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();
	this.instance.setTransform(0,0,0.958,0.958);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyuGPIAAsdMAldAAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.958,scaleY:0.958,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-38.3,230,76.7);
p.frameBounds = [rect, new cjs.Rectangle(-120,-40,240,80), new cjs.Rectangle(-115,-38.3,230,76.7), new cjs.Rectangle(-120,-40,240,80)];


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


(lib.top_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t6();
	this.instance.setTransform(-0.8,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am6JPIkipIIHrqXIELAAIKeIVIAlDyImsHfIjMA7g");
	this.shape.setTransform(13.5,59.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.8,-6.5,146.6,131.6);
p.frameBounds = [rect];


(lib.top_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t6();
	this.instance.setTransform(8.8,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlGIwIiEq5IFonkIDygBIEjG8IAYGbIk1GGg");
	this.shape.setTransform(-7.8,55.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-7.1,110.2,124.7);
p.frameBounds = [rect];


(lib.top_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t5();
	this.instance.setTransform(-1.3,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApZAqIIEqsIC+AAIHxJvIiTJ5IqWAdg");
	this.shape.setTransform(-1.5,58.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-5.5,120.5,128.7);
p.frameBounds = [rect];


(lib.top_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t5();
	this.instance.setTransform(-0.8,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmyI8IirnSIH8rDIDHAAIH4LSInLHhg");
	this.shape.setTransform(-0.3,50.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.9,-9.4,121.3,120.6);
p.frameBounds = [rect];


(lib.top_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t4();
	this.instance.setTransform(-0.7,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlHJmIkVo/IHbqTIETAAIHLKiIkFI3g");
	this.shape.setTransform(1.1,57.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.4,-5,121,124.3);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t4();
	this.instance.setTransform(9.7,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AE4O+IjqoEImdFSIiSgoIiAx6II8pRIEGADIGBKUIgGSKIiNCug");
	this.shape.setTransform(-5.7,91);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.8,-9,122.1,200.1);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t3();
	this.instance.setTransform(-1.3,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkuKiIkVqoIHKqoIEMAAIGxJ7IgyLig");
	this.shape.setTransform(-3,63.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-5.5,116.1,137.5);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t3();
	this.instance.setTransform(-1.1,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ak5IfIlInIIAVj0IJ2mGIDbABIGdIXIhCEvIoPEAg");
	this.shape.setTransform(-9.4,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.7,-9.8,128.5,109.7);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t2();
	this.instance.setTransform(-1.4,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApUIbIiOp3IIGp5IC1ABIMKHzIm+OIIpiAvg");
	this.shape.setTransform(14.4,66.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-6,148,145.4);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t2();
	this.instance.setTransform(9,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkDIMIlXlZIgpjyIKDnVIDRAAIGzJcIh9DyImADbg");
	this.shape.setTransform(-8.4,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.8,-7.8,128.9,106.8);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t1();
	this.instance.setTransform(-1,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlDIfIkOnqIHhqeID7ADIHHKcIgXGAIioCAIjwA0g");
	this.shape.setTransform(0.4,54.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.1,-7.4,119,123.8);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t1();
	this.instance.setTransform(-1.8,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmiIkIjNnyIIYqZIEHgBIHAL/IoHHSg");
	this.shape.setTransform(0.5,53.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-8.3,124.9,123.6);
p.frameBounds = [rect];


(lib.socks_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s6();
	this.instance.setTransform(11.5,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7JGIBOrdIEeoXIDLAAIKHITIA4FzItrHXg");
	this.shape.setTransform(18.2,62.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-6.5,138.3,137.6);
p.frameBounds = [rect];


(lib.socks_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s5();
	this.instance.setTransform(11.5,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApuKUIADxdIEck+IDyACIKyLrIAZEGIjDEhIrAD7g");
	this.shape.setTransform(20.9,72.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-5.1,139.8,155.3);
p.frameBounds = [rect];


(lib.socks_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s4();
	this.instance.setTransform(11.5,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap2LMIAxyYIERlaIDsAAIKZMmIAmEdIiNCmIrWFkg");
	this.shape.setTransform(20.6,75.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-5.5,140.2,161.4);
p.frameBounds = [rect];


(lib.socks_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s3();
	this.instance.setTransform(11.5,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AooH6IhSkfIIeslIDqgCIHQFeIAcFAIg1BVIr2Glg");
	this.shape.setTransform(-0.1,50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.5,-8.4,127,117.8);
p.frameBounds = [rect];


(lib.socks_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s2();
	this.instance.setTransform(11.5,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AplLEIANyOIEVlvIDlABILEMyIgKFbIsXHlg");
	this.shape.setTransform(19.9,76.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-6.3,137.9,165.4);
p.frameBounds = [rect];


(lib.socks_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s1();
	this.instance.setTransform(12,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApwLOIAgygIFFlsIBaAAIMiNuIg9FbIsKG0g");
	this.shape.setTransform(21.4,75.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-8,140,166.4);
p.frameBounds = [rect];


(lib.raincoat_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_a8();
	this.instance.setTransform(25.7,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A6gSSIkGm5IeC+OIIDADMAXIAgeIgxFLg");
	this.shape.setTransform(-17.2,113.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-213,-7.6,391.8,241.4);
p.frameBounds = [rect];


(lib.raincoat_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_a7();
	this.instance.setTransform(25.6,109.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A53KZIl2yqIMDlLMAm1gCkIMjDOIkuVjIj/EsMgrvACkg");
	this.shape.setTransform(-13.7,78.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-216.7,-23.8,406,205.1);
p.frameBounds = [rect];


(lib.raincoat_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_a7();
	this.instance.setTransform(20.8,115.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A5mODIhBlEIP76cITQgCIOdUdIDnMnIhgBlMgoxAAWg");
	this.shape.setTransform(4.3,103.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.1,-8.3,340.9,234.2);
p.frameBounds = [rect];


(lib.raincoat_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_a6();
	this.instance.setTransform(25,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2mSrIs/xzIJRqyIWmoSIb8mOIJWN2ICCH9ItWRFIu6JGImQA3g");
	this.shape.setTransform(21.3,109.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.6,-47.2,455.7,312.8);
p.frameBounds = [rect];


(lib.raincoat_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_a6();
	this.instance.setTransform(20.5,115.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0PLFIKc+eILLAAMAS4AhjIgkFHMgkmAAJg");
	this.shape.setTransform(21.3,117.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.4,-6.5,259.3,248.5);
p.frameBounds = [rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(125,115);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-160,-160,345,335)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(125,115);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-160,-160,345,335)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(125,115);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-160,-160,345,335)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(125,115);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, new cjs.Rectangle(-160,-160,345,335)];


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
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(550,315.4,1,1,0,0,0,0,0.4);

	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(265,320.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_2,p:{x:265,y:320.4}},{t:this.hero_1,p:{x:550,y:315.4}}]}).to({state:[{t:this.hero_2,p:{x:380,y:320.4}}]},1).to({state:[{t:this.hero_1,p:{x:425,y:310.4}}]},1).to({state:[{t:this.hero_2,p:{x:265,y:320.4}},{t:this.hero_1,p:{x:550,y:315.4}}]},1).to({state:[{t:this.hero_2,p:{x:380,y:320.4}}]},1).to({state:[{t:this.hero_1,p:{x:425,y:310.4}}]},1).to({state:[{t:this.hero_2,p:{x:380,y:355.4}}]},1).to({state:[{t:this.hero_1,p:{x:440,y:350.4}}]},1).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(1000,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2,p:{skewY:180,x:1000}}]},3).to({state:[{t:this.instance_2,p:{skewY:0,x:-200}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.raincoat_0 = new lib.raincoat_0_mc();
	this.raincoat_0.setTransform(-126,-200);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-128,-150);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-128,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.raincoat_0}]},8).to({state:[{t:this.headdress_0}]},2).to({state:[{t:this.accessory_0}]},1).wait(1));

	// options
	this.top_5 = new lib.top_5_2_mc();
	this.top_5.setTransform(-50,-246);

	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(60,-246);

	this.shoes_5 = new lib.shoes_5_2_mc();
	this.shoes_5.setTransform(-50,135);

	this.bottom_5 = new lib.bottom_5_2_mc();
	this.bottom_5.setTransform(-50,-99);

	this.shoes_2 = new lib.shoes_2_2_mc();
	this.shoes_2.setTransform(60,143);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(60,-99);

	this.top_4 = new lib.top_4_2_mc();
	this.top_4.setTransform(60,-246);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(-50,-246);

	this.shoes_4 = new lib.shoes_4_2_mc();
	this.shoes_4.setTransform(60,144);

	this.shoes_3 = new lib.shoes_3_2_mc();
	this.shoes_3.setTransform(-50,145);

	this.bottom_4 = new lib.bottom_4_2_mc();
	this.bottom_4.setTransform(60,-99);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(-50,-99);

	this.top_6 = new lib.top_6_2_mc();
	this.top_6.setTransform(-50,-246);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(60,-246);

	this.shoes_1 = new lib.shoes_1_2_mc();
	this.shoes_1.setTransform(60,146);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(60,-99);

	this.shoes_6 = new lib.shoes_6_2_mc();
	this.shoes_6.setTransform(-50,146);

	this.bottom_6 = new lib.bottom_6_2_mc();
	this.bottom_6.setTransform(-50,-99);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(60,-169);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(-50,-169);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(60,-169);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(-50,-169);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(60,-169);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(-50,-169);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(60,-169);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(-50,-169);

	this.dress_9 = new lib.dress_9_2_mc();
	this.dress_9.setTransform(-5,-169);

	this.raincoat_1 = new lib.raincoat_1_2_mc();
	this.raincoat_1.setTransform(0,-169);

	this.raincoat_3 = new lib.raincoat_3_2_mc();
	this.raincoat_3.setTransform(0,-39);

	this.raincoat_2 = new lib.raincoat_2_2_mc();
	this.raincoat_2.setTransform(0,-169);

	this.headdress_5 = new lib.headdress_5_2_mc();
	this.headdress_5.setTransform(5,125);

	this.headdress_4 = new lib.headdress_4_2_mc();
	this.headdress_4.setTransform(5,-233);

	this.headdress_3 = new lib.headdress_3_2_mc();
	this.headdress_3.setTransform(63,-98);

	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(-50,-98);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(5,15);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom_2},{t:this.shoes_2},{t:this.bottom_5},{t:this.shoes_5},{t:this.top_2},{t:this.top_5}]}).to({state:[{t:this.bottom_3},{t:this.bottom_4},{t:this.shoes_3},{t:this.shoes_4},{t:this.top_3},{t:this.top_4}]},1).to({state:[{t:this.bottom_6},{t:this.shoes_6},{t:this.bottom_1},{t:this.shoes_1},{t:this.top_1},{t:this.top_6}]},1).to({state:[{t:this.dress_1},{t:this.dress_2}]},1).to({state:[{t:this.dress_3},{t:this.dress_4}]},1).to({state:[{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.dress_7},{t:this.dress_8}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.raincoat_1}]},1).to({state:[{t:this.raincoat_2},{t:this.raincoat_3}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_5}]},1).to({state:[{t:this.accessory_1}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_mc();
	this.instance.setTransform(0,160);

	this.instance_1 = new lib.pipe_mc();
	this.instance_1.setTransform(0,-80);

	this.instance_2 = new lib.pipe_mc();
	this.instance_2.setTransform(0,-150);

	this.instance_3 = new lib.shelf_mc();
	this.instance_3.setTransform(0,40);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:160}}]}).to({state:[{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{y:160}},{t:this.instance_1,p:{y:-20}}]},1).to({state:[{t:this.instance_4},{t:this.instance_3,p:{y:40}},{t:this.instance,p:{y:-80}}]},1).to({state:[{t:this.instance_3,p:{y:160}},{t:this.instance,p:{y:40}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-252,279.5,425.1);
p.frameBounds = [rect, new cjs.Rectangle(-131,-251.5,254,426.6), new cjs.Rectangle(-131,-253.4,254,429.5), new cjs.Rectangle(-131,-177,272.2,345.8), new cjs.Rectangle(-131,-175.2,268.2,344), new cjs.Rectangle(-132.8,-175.4,255.8,344.2), new cjs.Rectangle(-131,-174.7,272.8,343.5), new cjs.Rectangle(-131,-176.5,258.4,345.3), new cjs.Rectangle(-206.6,-226,455.7,394.8), new cjs.Rectangle(-216.7,-226,406,420.8), new cjs.Rectangle(-154,-284.4,309.9,463.5), new cjs.Rectangle(-154,-176,277,344.8)];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.raincoat_0 = new lib.raincoat_0_mc();
	this.raincoat_0.setTransform(-128,-140);

	this.socks_0 = new lib.socks_0_mc();
	this.socks_0.setTransform(-128,-160);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-128,-150);

	this.tail_0 = new lib.tail_0_mc();

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-128,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.raincoat_0}]},5).to({state:[{t:this.socks_0}]},1).to({state:[{t:this.headdress_0}]},1).to({state:[{t:this.accessory_0},{t:this.tail_0}]},1).wait(1));

	// options
	this.shoes_6 = new lib.shoes_6_1_mc();
	this.shoes_6.setTransform(-50,128);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(-50,-246);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(60,-246);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(-50,-99);

	this.shoes_2 = new lib.shoes_2_1_mc();
	this.shoes_2.setTransform(60,126);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(60,-99);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(60,-246);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(-50,-246);

	this.shoes_4 = new lib.shoes_4_1_mc();
	this.shoes_4.setTransform(60,131);

	this.shoes_3 = new lib.shoes_3_1_mc();
	this.shoes_3.setTransform(-55,145);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(60,-99);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(-50,-99);

	this.shoes_1 = new lib.shoes_1_1_mc();
	this.shoes_1.setTransform(60,122);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(60,-246);

	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(-50,-246);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(60,-99);

	this.shoes_5 = new lib.shoes_5_1_mc();
	this.shoes_5.setTransform(-50,127);

	this.bottom_6 = new lib.bottom_6_1_mc();
	this.bottom_6.setTransform(-50,-99);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-50,-69);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(60,-246);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(-50,-246);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(60,-69);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(60,-246);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(-50,-246);

	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(90,-69);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(10,-69);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(-70,-69);

	this.raincoat_2 = new lib.raincoat_2_1_mc();
	this.raincoat_2.setTransform(0,-246);

	this.raincoat_1 = new lib.raincoat_1_1_mc();
	this.raincoat_1.setTransform(0,-69);

	this.socks_2 = new lib.socks_2_1_mc();
	this.socks_2.setTransform(60,-246);

	this.socks_1 = new lib.socks_1_1_mc();
	this.socks_1.setTransform(-50,-246);

	this.socks_6 = new lib.socks_6_1_mc();
	this.socks_6.setTransform(60,-110);

	this.socks_5 = new lib.socks_5_1_mc();
	this.socks_5.setTransform(-50,20);

	this.socks_4 = new lib.socks_4_1_mc();
	this.socks_4.setTransform(60,20);

	this.socks_3 = new lib.socks_3_1_mc();
	this.socks_3.setTransform(-50,-110);

	this.headdress_5 = new lib.headdress_5_1_mc();
	this.headdress_5.setTransform(20,119);

	this.headdress_4 = new lib.headdress_4_1_mc();
	this.headdress_4.setTransform(5,-11);

	this.headdress_3 = new lib.headdress_3_1_mc();
	this.headdress_3.setTransform(0,-116);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(70,-212);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(-45,-238);

	this.tail_1 = new lib.tail_1_1_mc();
	this.tail_1.setTransform(5,87);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(10,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom_2},{t:this.shoes_2},{t:this.bottom_5},{t:this.top_2},{t:this.top_5},{t:this.shoes_6}]}).to({state:[{t:this.bottom_3},{t:this.bottom_4},{t:this.shoes_3},{t:this.shoes_4},{t:this.top_3},{t:this.top_4}]},1).to({state:[{t:this.bottom_6},{t:this.shoes_5},{t:this.bottom_1},{t:this.top_6},{t:this.top_1},{t:this.shoes_1}]},1).to({state:[{t:this.dress_4},{t:this.dress_1},{t:this.dress_2},{t:this.dress_3}]},1).to({state:[{t:this.dress_7},{t:this.dress_8},{t:this.dress_9},{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.raincoat_1},{t:this.raincoat_2}]},1).to({state:[{t:this.socks_3},{t:this.socks_4},{t:this.socks_5},{t:this.socks_6},{t:this.socks_1},{t:this.socks_2}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_5}]},1).to({state:[{t:this.accessory_1},{t:this.tail_1}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_mc();
	this.instance.setTransform(0,160);

	this.instance_1 = new lib.pipe_mc();
	this.instance_1.setTransform(0,-80);

	this.instance_2 = new lib.pipe_mc();
	this.instance_2.setTransform(0,-90);

	this.instance_3 = new lib.shelf_mc();
	this.instance_3.setTransform(0,40);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:160}}]}).to({state:[{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-50}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-50}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-50}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_2},{t:this.instance,p:{y:160}},{t:this.instance_1,p:{y:40}}]},1).to({state:[{t:this.instance_4},{t:this.instance_3,p:{y:40}},{t:this.instance,p:{y:-80}}]},1).to({state:[{t:this.instance_3,p:{y:160}},{t:this.instance,p:{y:-80}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-255.4,261.8,425.3);
p.frameBounds = [rect, new cjs.Rectangle(-139.5,-255.8,264.5,425.8), new cjs.Rectangle(-131,-254.3,268.8,423.1), new cjs.Rectangle(-149.2,-253.6,376.7,435.7), new cjs.Rectangle(-159.2,-253.7,342.2,422.5), new cjs.Rectangle(-166.1,-254.3,340.9,427.2), new cjs.Rectangle(-154,-254,297.7,429.9), new cjs.Rectangle(-154,-290,290.2,470.4), new cjs.Rectangle(-154,-176,277,344.8)];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.body_check_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-252,279.5,425.1);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-255.4,261.8,425.3);
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
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
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

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(19).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1.13,scaleY:1.13,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(11));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(180,0);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(29).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1.13,scaleY:1.13,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-290,-160,630,320), new cjs.Rectangle(-297,-160,637.1,320), new cjs.Rectangle(-304,-160,644.1,320), new cjs.Rectangle(-311,-160,651,320), new cjs.Rectangle(-318,-160,658,320), new cjs.Rectangle(-325,-160,665,320), new cjs.Rectangle(-332,-160,672,320), new cjs.Rectangle(-339,-160,679,320), new cjs.Rectangle(-346,-166,686,332.1), new cjs.Rectangle(-353,-173,693,346.1), new cjs.Rectangle(-360,-180,650,360), new cjs.Rectangle(-355.9,-176,653,352.1), new cjs.Rectangle(-352,-172,656.1,344.1), new cjs.Rectangle(-347.9,-168,659,336.1), new cjs.Rectangle(-344,-164,662,328.1), new cjs.Rectangle(-340,-160,665,320), new cjs.Rectangle(-340,-160,672,320), new cjs.Rectangle(-340,-160,679,320), new cjs.Rectangle(-340,-166,686,332.1), new cjs.Rectangle(-340,-173,693,346.1), new cjs.Rectangle(-340,-180,700,360), new cjs.Rectangle(-340,-176,696,352.1), new cjs.Rectangle(-340,-172,692,344.1), new cjs.Rectangle(-340,-168,688,336.1), new cjs.Rectangle(-340,-164,684,328.1), new cjs.Rectangle(-340,-160,680,320)];


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
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect];


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

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1.13,scaleY:1.13,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(11));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,0);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1.13,scaleY:1.13,alpha:1},10).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-290,-160,630,320), new cjs.Rectangle(-297,-160,637.1,320), new cjs.Rectangle(-304,-160,644.1,320), new cjs.Rectangle(-311,-160,651,320), new cjs.Rectangle(-318,-160,658,320), new cjs.Rectangle(-325,-160,665,320), new cjs.Rectangle(-332,-160,672,320), new cjs.Rectangle(-339,-160,679,320), new cjs.Rectangle(-346,-166,686,332.1), new cjs.Rectangle(-353,-173,693,346.1), new cjs.Rectangle(-360,-180,650,360), new cjs.Rectangle(-355.9,-176,653,352.1), new cjs.Rectangle(-352,-172,656.1,344.1), new cjs.Rectangle(-347.9,-168,659,336.1), new cjs.Rectangle(-344,-164,662,328.1), new cjs.Rectangle(-340,-160,665,320), new cjs.Rectangle(-340,-160,672,320), new cjs.Rectangle(-340,-160,679,320), new cjs.Rectangle(-340,-166,686,332.1), new cjs.Rectangle(-340,-173,693,346.1), new cjs.Rectangle(-340,-180,700,360), new cjs.Rectangle(-340,-176,696,352.1), new cjs.Rectangle(-340,-172,692,344.1), new cjs.Rectangle(-340,-168,688,336.1), new cjs.Rectangle(-340,-164,684,328.1), new cjs.Rectangle(-340,-160,680,320)];


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
p.nominalBounds = rect = new cjs.Rectangle(-100,-120,200,180);
p.frameBounds = [rect];


(lib.prev_2_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.833,0.833,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.3,-99.9,166.7,150);
p.frameBounds = [rect];


(lib.next_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-120,200,180);
p.frameBounds = [rect];


(lib.next_2_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.3,-99.9,166.7,150);
p.frameBounds = [rect];


(lib.next_2_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_2_mc();

	this.instance_1 = new lib.next_1_2_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyuGPIAAsdMAldAAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.958,scaleY:0.958,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect, rect, new cjs.Rectangle(-115,-47.9,230,95.8), new cjs.Rectangle(-120,-40,240,80)];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_2_mc();
	this.instance.setTransform(-0.5,-21.7,1,1,0,0,0,87.5,105.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-126.5,174,209.8);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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
p.nominalBounds = rect = new cjs.Rectangle(-340,-160,680,320);
p.frameBounds = [rect, rect, rect, rect];


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


(lib.hairstyle_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(90,-90,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.hairstyle_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(90,-90,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.hairstyle_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(90,-90,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.hairstyle_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(90,-90,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(90,-90,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(90,-90,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(70,45,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzABQF0gBEIEIQEIEHAAF0QAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,200,180);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-450);

	this.prev_mc = new lib.prev_2_nav_mc();
	this.prev_mc.setTransform(-130,40);

	this.next_mc = new lib.next_2_nav_mc();
	this.next_mc.setTransform(135,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-213.3,-500,431.7,760);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-450);

	this.prev_mc = new lib.prev_2_nav_mc();
	this.prev_mc.setTransform(-130,40);

	this.next_mc = new lib.next_2_nav_mc();
	this.next_mc.setTransform(135,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-213.3,-500,431.7,760);
p.frameBounds = [rect];


(lib.moreGames_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArCLDQklklABmeQgBmdElklQEmkkGcAAQGdAAEmEkQEkElAAGdQAAGekkElQkmEkmdAAQmcAAkmkkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-126.5,174,209.8);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-100,-100,200,200)];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(120,505,0.906,0.906);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(690,465,0.957,0.956);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(690,545,0.957,0.956);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.credits_btn},{t:this.instruction_btn},{t:this._moreGames_btn},{t:this.play_btn},{t:this.moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(400,510,0.864,0.864);

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
	this.instance_3 = new lib.background_2_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,917);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,520,0.858,0.858);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn}]}).wait(1));

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
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,817);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
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

	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(100,550);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(100,435);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(680,470);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(680,545);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.next_mc},{t:this.prev_mc},{t:this.freeGames_mc},{t:this.photo_btn},{t:this.playAgain_btn},{t:this.moreGames_btn},{t:this.facebook_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.next_btn}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(600,-300);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(200,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.199;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-490,1200,1181.5);
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
	this.dressupPanel_1_mc.setTransform(590,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(230,325.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(41.1,-261.3,767.3,831.4);
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
	this.dressupPanel_1_mc.setTransform(590,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(240,320.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(106.1,-261.3,702.3,831.4);
p.frameBounds = [rect];


(lib.makeup_closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(140,-52);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(140,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(5));

	// options
	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(50,135);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(-50,135);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(50,5);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(-50,5);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(50,-125);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-50,-125);

	this.mouth_6 = new lib.mouth_6_2_mc();
	this.mouth_6.setTransform(55,125);

	this.mouth_5 = new lib.mouth_5_2_mc();
	this.mouth_5.setTransform(-55,-95);

	this.mouth_4 = new lib.mouth_4_2_mc();
	this.mouth_4.setTransform(55,15);

	this.mouth_3 = new lib.mouth_3_2_mc();
	this.mouth_3.setTransform(-55,15);

	this.mouth_2 = new lib.mouth_2_2_mc();
	this.mouth_2.setTransform(55,-95);

	this.mouth_1 = new lib.mouth_1_2_mc();
	this.mouth_1.setTransform(-55,125);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(55,135);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(-55,135);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(55,5);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-55,5);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(55,-125);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-55,-125);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(0,-85);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(0,115);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(0,15);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(0,115);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(0,15);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(0,-85);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(0,90);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(0,-90);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(0,90);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,-90);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,90);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(0,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.mouth_1},{t:this.mouth_2},{t:this.mouth_3},{t:this.mouth_4},{t:this.mouth_5},{t:this.mouth_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_6}]},1).to({state:[{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_1}]},1).to({state:[{t:this.hair_1},{t:this.hair_2}]},1).to({state:[{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-185,266,380);
p.frameBounds = [rect, new cjs.Rectangle(-95,-135,190,300), new cjs.Rectangle(-105,-185,271,380), rect=new cjs.Rectangle(-120,-135,240,300), rect, rect=new cjs.Rectangle(-90,-180,200,360), rect, rect];


(lib.makeup_closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(140,-52);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(140,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(5));

	// options
	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(50,140);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(-50,140);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(50,10);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(-50,10);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(50,-120);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-50,-120);

	this.mouth_6 = new lib.mouth_6_1_mc();
	this.mouth_6.setTransform(50,110);

	this.mouth_5 = new lib.mouth_5_1_mc();
	this.mouth_5.setTransform(-50,-90);

	this.mouth_4 = new lib.mouth_4_1_mc();
	this.mouth_4.setTransform(50,10);

	this.mouth_3 = new lib.mouth_3_1_mc();
	this.mouth_3.setTransform(-50,10);

	this.mouth_2 = new lib.mouth_2_1_mc();
	this.mouth_2.setTransform(50,-90);

	this.mouth_1 = new lib.mouth_1_1_mc();
	this.mouth_1.setTransform(-50,110);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(50,135);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-50,135);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(50,5);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-50,5);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(50,-125);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-50,-125);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(0,-90);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(0,10);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(0,110);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(0,110);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(0,10);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(0,-90);

	this.hair_2 = new lib.hairstyle_2_mc();
	this.hair_2.setTransform(0,90);

	this.hair_1 = new lib.hairstyle_1_mc();
	this.hair_1.setTransform(0,-90);

	this.hair_4 = new lib.hairstyle_4_mc();
	this.hair_4.setTransform(0,90);

	this.hair_3 = new lib.hairstyle_3_mc();
	this.hair_3.setTransform(0,-90);

	this.hair_6 = new lib.hairstyle_6_mc();
	this.hair_6.setTransform(0,90);

	this.hair_5 = new lib.hairstyle_5_mc();
	this.hair_5.setTransform(0,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.mouth_1},{t:this.mouth_2},{t:this.mouth_3},{t:this.mouth_4},{t:this.mouth_5},{t:this.mouth_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_6}]},1).to({state:[{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_1}]},1).to({state:[{t:this.hair_1},{t:this.hair_2}]},1).to({state:[{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-180,266,380);
p.frameBounds = [rect, new cjs.Rectangle(-90,-130,180,280), new cjs.Rectangle(-100,-185,266,380), rect=new cjs.Rectangle(-120,-140,240,300), rect, rect=new cjs.Rectangle(-90,-180,200,360), rect, rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(70,525,0.763,0.763);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(600,520);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(1000,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1101.4);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(70,525,0.763,0.763);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(600,520);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(1000,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1101.4);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.makeup_closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-185,266,380);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.makeup_closet_1_mc();
	this.hero_1.setTransform(-2.5,-1.7,1,1,0,0,0,-2.5,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-180,266,380);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-450);

	this.prev_mc = new lib.prev_2_nav_mc();
	this.prev_mc.setTransform(-140,67);

	this.next_mc = new lib.next_2_nav_mc();
	this.next_mc.setTransform(140,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-223.3,-500,446.7,760);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-450);

	this.prev_mc = new lib.prev_2_nav_mc();
	this.prev_mc.setTransform(-140,67);

	this.next_mc = new lib.next_2_nav_mc();
	this.next_mc.setTransform(140,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-223.3,-500,446.7,760);
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
	this.dressupPanel_1_mc.setTransform(200,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_2 = new lib.hero_2_makeup_mc();
	this.hero_2.setTransform(560,320);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.3,-261.3,775.9,866.4);
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
	this.dressupPanel_1_mc.setTransform(200,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.hero_1_makeup_mc();
	this.hero_1.setTransform(570,325);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.3,-261.3,816.1,866.7);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(70.1,530.1,0.667,0.667,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(660,530);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1101.4);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(70.1,530.1,0.667,0.667,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(660,530);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1101.4);
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

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();

	this.redirect_mc = new lib.RedirectScreen();

	this.instance_8 = new lib.ResultScreen();

	this.instance_9 = new lib.InstructionScreen();
	this.instance_9.setTransform(400,300,1,1,0,0,0,400,300);

	this.instance_10 = new lib.TrackMove();
	this.instance_10.setTransform(361.4,68.4);

	this.instance_11 = new lib.Cursor();
	this.instance_11.setTransform(257.2,68.7);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(158.7,69.2);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(65.7,69.2);

	this.instance_12 = new lib.OrientationLockScreen();

	this.instance_13 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.redirect_mc}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_11},{t:this.instance_10}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,127,39.8);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-76.9,1200,915.3), new cjs.Rectangle(-200,-76.9,1200,815.3), rect=new cjs.Rectangle(-200,-261.3,1200,1099.7), rect, rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-490,1200,1181.5), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(30.7,18.4,380.7,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1400,0,1200,600), rect=null, rect, rect, rect, rect];


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