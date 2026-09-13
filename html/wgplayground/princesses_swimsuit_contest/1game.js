(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_atlas_.png?1557220653093", id:"game_atlas_"},
		{src:"images/game_atlas_2.png?1557220653094", id:"game_atlas_2"},
		{src:"images/game_atlas_3.png?1557220653095", id:"game_atlas_3"},
		{src:"images/game_atlas_4.png?1557220653097", id:"game_atlas_4"},
		{src:"sounds/bgmusic.mp3?1557220653099", id:"bgmusic"},
		{src:"sounds/sparkles.mp3?1557220653099", id:"sparkles"}
	]
};



lib.ssMetadata = [
		{name:"game_atlas_", frames: [[1026,902,810,658],[1202,0,417,752],[0,0,1200,900],[0,902,1024,600]]},
		{name:"game_atlas_2", frames: [[934,604,372,610],[0,555,382,606],[384,1112,368,607],[1308,604,370,608],[555,495,377,615],[0,1163,362,428],[1241,1583,639,251],[1308,1214,485,367],[754,1216,485,367],[0,0,553,553],[1053,0,800,300],[754,1585,467,325],[555,0,496,493],[0,1721,655,226],[1053,302,800,300]]},
		{name:"game_atlas_3", frames: [[1083,707,160,222],[464,368,172,239],[1259,674,198,432],[1565,640,323,275],[1786,917,214,199],[0,640,216,655],[876,368,205,566],[587,1194,219,547],[808,939,217,547],[0,1297,215,655],[665,368,209,569],[218,640,223,552],[443,640,220,552],[808,1488,257,451],[0,0,402,366],[404,0,402,366],[808,0,402,366],[1212,0,401,366],[0,368,230,209],[1554,1128,229,209],[1259,1209,230,208],[232,368,230,209],[1554,917,230,209],[525,1743,233,237],[1251,1603,182,180],[1570,1818,174,177],[1067,1802,183,184],[217,1297,368,362],[1570,1638,176,178],[1252,1419,182,182],[1259,368,304,304],[217,1661,306,323],[1786,1118,136,265],[1491,1339,117,297],[1083,368,143,337],[1840,0,149,468],[1459,674,93,533],[1615,0,223,638],[1748,1598,135,222],[1415,1785,153,211],[1755,1385,153,211],[665,939,135,223],[1610,1339,143,231],[1067,1376,182,424],[1027,936,230,438],[1252,1785,161,202]]},
		{name:"game_atlas_4", frames: [[815,302,150,150],[1039,606,84,106],[745,357,67,65],[1074,140,35,39],[1508,663,90,75],[0,0,424,70],[967,410,94,41],[921,686,97,52],[1328,607,178,63],[745,454,188,90],[1701,701,97,39],[1436,385,176,114],[0,208,160,160],[815,140,160,160],[0,370,112,183],[1758,0,123,218],[1614,402,124,160],[265,208,129,195],[1268,311,58,366],[1074,230,61,374],[1771,220,62,377],[686,357,57,370],[114,462,145,101],[261,563,132,92],[0,643,127,74],[503,639,97,97],[1600,663,99,61],[1835,245,26,30],[1835,220,34,23],[1978,36,22,29],[1978,0,19,34],[1074,181,30,27],[254,657,83,82],[977,140,95,268],[162,208,101,252],[1115,0,128,228],[1711,564,51,18],[0,72,420,66],[693,0,420,70],[693,72,420,66],[0,140,420,66],[1341,0,289,100],[506,531,131,106],[602,727,77,25],[840,727,77,25],[1231,729,77,25],[0,719,78,25],[1419,672,78,29],[1328,575,79,29],[1908,693,78,29],[840,696,78,29],[511,738,72,25],[435,738,74,25],[919,740,72,25],[1495,740,72,25],[1020,714,78,28],[602,697,79,28],[1419,703,79,28],[129,715,78,28],[1908,724,75,26],[1419,733,74,26],[1600,726,75,26],[1100,735,74,26],[1231,679,93,48],[339,694,94,47],[745,696,93,47],[1813,693,93,48],[265,405,120,156],[559,225,125,191],[693,140,120,215],[396,403,108,180],[1137,480,106,107],[931,577,106,107],[1835,584,106,107],[395,585,106,107],[1568,564,141,97],[1835,482,145,100],[129,643,123,70],[1137,589,128,88],[1137,311,129,167],[935,454,121,121],[1328,672,89,67],[745,424,53,20],[1436,102,93,281],[1531,102,93,281],[1137,230,98,69],[1245,0,94,309],[1341,102,93,282],[1883,0,93,288],[179,565,56,56],[745,546,184,86],[0,565,177,76],[745,634,174,60],[506,418,172,111],[426,0,131,226],[1632,0,124,225],[559,0,132,223],[1626,227,143,173],[396,228,143,173],[1328,386,102,187],[1432,501,134,104],[1835,290,120,190],[1125,679,104,54],[602,639,56,56],[1711,599,100,100]]}
];


// symbols:



(lib.anim_blitz_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.anim_blitz_2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.anim_blitz_3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.arielcover = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.arielheadsmilepngcopy2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2copy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2111111111111111 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3copy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39111111111 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40111111111 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41111111111 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap415 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap421111111 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap420 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4311111111 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44111111 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap451111111 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46111111 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap49 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap50 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap51 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap52 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap53 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap54 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap55 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap56 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap57 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap58 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap59 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap62 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap63 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap64 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap65 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap66 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap67 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap68 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap69 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7copy2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap70 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap71 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap72 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap73 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap74 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8copy4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap81 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap82 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap83 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap84 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap841 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap85 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap86 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8611 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap87 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap88 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.blink_photographer = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.bot = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.button_icon_dress = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.button_icon_eyes = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.button_icon_pants = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.button_icon_skin_color = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.button_icon_tops = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.cap = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.corppersonaje = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.coverbg = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dresses_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.dresses_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.dresses_3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.dresses_4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.dresses_5 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.dresses_6 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_black = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.glovesstander = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.gloves_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.gloves_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.gloves_3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.gloves_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.googleplaybutton = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hairariel4pngcopy2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_1_black = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_1_blue = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_1_brown = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_1_green = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_2_black = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_2_blue = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_2_brown = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_2_green = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_3_black = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_3_blue = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_3_brown = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_3_green = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_4_black = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_4_blue = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_4_brown = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_4_green = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_5_black = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_5_blue = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_5_brown = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.ic_eyes_5_green = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.ic_gloves_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.ic_gloves_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.ic_gloves_3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.ic_gloves_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.ic_pareo_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.ic_pareo_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.ic_pareo_3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.ic_pareo_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.ic_skin_color_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.ic_skin_color_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.ic_skin_color_3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.ic_skin_color_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.ic_slippers_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.ic_slippers_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.ic_slippers_3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.ic_slippers_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.ic_surfboard_4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.ladybug_web_face = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.level = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.levelsiconbase = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.logopngcopy = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.masajackkristoff = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.nextbuton = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.ochi2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.pants_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.pants_1pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.pants_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.pants_3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.pants_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.pants_5 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.photographer = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.pink_button = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.podium = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.slippers_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.slippers_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.slippers_3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.slippers_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.swimsuit_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.swimsuit_1pngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.swimsuit_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.swimsuit_2pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.swimsuit_3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.swimsuit_3pngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.swimsuit_4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.swimsuit_4pngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Symbol141 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Symbol142 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.top = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.tops_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.tops_1pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.tops_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.tops_3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.tops_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.tops_5 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.umerass = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.violet_button = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.YoutubeButtons7326 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bot();
	this.instance.parent = this;
	this.instance.setTransform(-400,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-149,800,300);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.top();
	this.instance.parent = this;
	this.instance.setTransform(-400,-139);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-139,800,300);


(lib.Symbol148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap85();
	this.instance.parent = this;
	this.instance.setTransform(30,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,5,176,178);


(lib.Symbol146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cap();
	this.instance.parent = this;
	this.instance.setTransform(4,11,0.852,0.852);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,11,70.8,69.9);


(lib.Symbol145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap82();
	this.instance.parent = this;
	this.instance.setTransform(57,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57,0,174,177);


(lib.Symbol144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap81();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,180);


(lib.Symbol140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arielcover();
	this.instance.parent = this;
	this.instance.setTransform(2,-5,1.007,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-5,199.3,434.9);


(lib.Symbol139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hairariel4pngcopy2();
	this.instance.parent = this;
	this.instance.setTransform(84.8,0,0.648,0.648,0,-3.2,176.8);

	this.instance_1 = new lib.arielheadsmilepngcopy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82,11.2,0.648,0.648,0,-3.2,176.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.6,82.8);


(lib.Symbol130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photographer();
	this.instance.parent = this;

	this.instance_1 = new lib.anim_blitz_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30,58);

	this.instance_2 = new lib.anim_blitz_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36,21);

	this.instance_3 = new lib.anim_blitz_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-42,12);

	this.instance_4 = new lib.blink_photographer();
	this.instance_4.parent = this;
	this.instance_4.setTransform(50,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},4).to({state:[{t:this.instance},{t:this.instance_2}]},2).to({state:[{t:this.instance},{t:this.instance_3}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance},{t:this.instance_4}]},14).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,638);


(lib.Symbol129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap74();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,810,658);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,39);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nextbuton();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,67);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7copy2();
	this.instance.parent = this;
	this.instance.setTransform(-406,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-406,-94,132,92);


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-248,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-183,145,101);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8copy4();
	this.instance.parent = this;
	this.instance.setTransform(-309,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309,-76,127,74);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_slippers_4();
	this.instance.parent = this;
	this.instance.setTransform(-52,-166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-166,128,88);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_slippers_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-293);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-293,141,97);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_slippers_2();
	this.instance.parent = this;
	this.instance.setTransform(-29,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-57,145,100);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_slippers_3();
	this.instance.parent = this;
	this.instance.setTransform(-40,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-4,123,70);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_1_black();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_1_blue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_2_black();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_1_green();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_1_brown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(1,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_2_blue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,39);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_2_brown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(1,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_2_green();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,39);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_3_black();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_3_blue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_3_brown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_4_blue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_4_black();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,39);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_3_green();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_4_brown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_4_green();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_5_black();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,39);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_5_blue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_5_brown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ic_eyes_5_green();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.814,1);

	this.instance_1 = new lib.ochi2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,7,1.34,1.34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,39);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_skin_color_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,107);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_skin_color_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,107);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_skin_color_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,107);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_skin_color_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,107);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap53();
	this.instance.parent = this;
	this.instance.setTransform(-256,-234);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-257,-233,1.285,4.331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257,-234,130,195);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap52();
	this.instance.parent = this;
	this.instance.setTransform(60,-235);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60,-235,1.167,3.797);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60,-235,124,160);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap51();
	this.instance.parent = this;
	this.instance.setTransform(-21,-199);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23,-199,1.266,4.035);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-199,125,218);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap50();
	this.instance.parent = this;
	this.instance.setTransform(-41,-162);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-43,-163,1.212,4.019);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-163,114,184);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_pareo_1();
	this.instance.parent = this;
	this.instance.setTransform(178,-186);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(172,-183,1.229,3.329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(172,-186,126,156);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_pareo_4();
	this.instance.parent = this;
	this.instance.setTransform(-84,-60);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-90,-66,1.213,4.156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-66,114.1,186);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_pareo_3();
	this.instance.parent = this;
	this.instance.setTransform(129,-75);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125,-79,1.346,4.042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,-79,126.6,219);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_pareo_2();
	this.instance.parent = this;
	this.instance.setTransform(-255,-97);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-263,-98,1.378,4.219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263,-98,133,192);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.swimsuit_3();
	this.instance.parent = this;
	this.instance.setTransform(300.2,-209,0.687,0.687,0,0,180);

	this.instance_1 = new lib.umerass();
	this.instance_1.parent = this;
	this.instance_1.setTransform(310,-223,1,1,0,0,180);

	this.instance_2 = new lib.Bitmap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(210,-189,1.046,2.046);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(195,-223,115,187.5);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.swimsuit_2();
	this.instance.parent = this;
	this.instance.setTransform(245.3,-34,0.695,0.695,0,0,180);

	this.instance_1 = new lib.umerass();
	this.instance_1.parent = this;
	this.instance_1.setTransform(260,-62,1,1,0,0,180);

	this.instance_2 = new lib.Bitmap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159,-34,0.915,1.932);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156,-62,104,184.5);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.swimsuit_2pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-83.5,-139,0.648,0.648,0,0,180);

	this.instance_1 = new lib.umerass();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62,-168,1,1,0,0,180);

	this.instance_2 = new lib.Bitmap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-164,-127,1.001,2.021);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169,-168,107,192.6);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.swimsuit_4();
	this.instance.parent = this;
	this.instance.setTransform(-99.8,-72,0.705,0.705,0,0,180);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-190,-72,1.081,2.047);

	this.instance_2 = new lib.umerass();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-83,-97,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-97,112,182.2);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.swimsuit_4pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(171.7,-128,0.648,0.648,0,0,180);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88,-128,0.961,1.919);

	this.instance_2 = new lib.umerass();
	this.instance_2.parent = this;
	this.instance_2.setTransform(190,-153,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79,-153,111,174.7);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.swimsuit_1();
	this.instance.parent = this;
	this.instance.setTransform(56,-86,0.614,0.614);

	this.instance_1 = new lib.umerass();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35,-110);

	this.instance_2 = new lib.Bitmap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51,-94,1.027,1.988);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35,-110,108.5,165.1);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.swimsuit_3pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-77.9,-51,0.648,0.648,0,0,180);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-176,-51,1.095,1.757);

	this.instance_2 = new lib.umerass();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-63,-65,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177,-65,114,150.7);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.swimsuit_1pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(155.5,-38,0.648,0.648,0,0,180);

	this.instance_1 = new lib.umerass();
	this.instance_1.parent = this;
	this.instance_1.setTransform(172,-63,1,1,0,0,180);

	this.instance_2 = new lib.Bitmap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75,-58,0.898,1.746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68,-63,104,168.8);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap57();
	this.instance.parent = this;
	this.instance.setTransform(-194,-271);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194,-271,62,377);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap56();
	this.instance.parent = this;
	this.instance.setTransform(262,-239);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(262,-239,61,374);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap58();
	this.instance.parent = this;
	this.instance.setTransform(-307,-244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307,-244,57,370);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap55();
	this.instance.parent = this;
	this.instance.setTransform(-132,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,76,58,366);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3copy();
	this.instance.parent = this;
	this.instance.setTransform(-257,-78);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-260,-81,1.504,0.789);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260,-81,100.8,55);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_gloves_3();
	this.instance.parent = this;
	this.instance.setTransform(-21,-23);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19,-31,1.352,0.891);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-31,93,58);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_gloves_2();
	this.instance.parent = this;
	this.instance.setTransform(-7,-95);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5,-98,1.415,0.796);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-98,96.8,51.8);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_gloves_4();
	this.instance.parent = this;
	this.instance.setTransform(-174,-66);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-170,-73,1.294,0.846);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174,-73,93,55);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_gloves_1();
	this.instance.parent = this;
	this.instance.setTransform(-21,-18);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21,-24,1.486,0.945);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-24,99.6,61.5);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tops_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.702,0.702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,141.8);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tops_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.702,0.702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.2,133.4);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tops_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.702,0.702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.1,73);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logopngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-67,0,0.757,0.757);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,0,353.5,246);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap83();
	this.instance.parent = this;
	this.instance.setTransform(267,-312,1.933,1.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(267,-312,187.5,187.5);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tops_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.702,0.702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.6,131.3);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tops_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.702,0.702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.4,121.4);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pants_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.8,183.5);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pants_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.8,188.1);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pants_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.4,201.8);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pants_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.8,184.2);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pants_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,45.1);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dresses_6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.4,125.3);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dresses_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.496,0.496);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,131.5);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dresses_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.432,0.432);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.8,145.6);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dresses_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.496,0.496);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.1,147.4);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dresses_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.496,0.496);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.1,133);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dresses_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.496,0.496);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.1,125);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{geanta1:1,geanta2:2,geanta3:3,geanta4:4,geanta5:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.Bitmap41();
	this.instance.parent = this;
	this.instance.setTransform(2788,-1353);

	this.instance_1 = new lib.Bitmap42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-630);

	this.instance_2 = new lib.Bitmap43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11,-626);

	this.instance_3 = new lib.Bitmap44();
	this.instance_3.parent = this;
	this.instance_3.setTransform(8,-631);

	this.instance_4 = new lib.Bitmap45();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6,-632);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:2788,y:-1353}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance,p:{x:8,y:-635}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2788,-1353,372,610);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{cercei1:1,cercei2:2,cercei3:3,cercei4:4,cercei5:5,cercei6:6,cercei7:7,cercei8:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 1
	this.instance = new lib.Bitmap39111111111();
	this.instance.parent = this;
	this.instance.setTransform(2066,19,0.515,0.515);

	this.instance_1 = new lib.Bitmap40111111111();
	this.instance_1.parent = this;
	this.instance_1.setTransform(194,-65,0.533,0.533);

	this.instance_2 = new lib.Bitmap41111111111();
	this.instance_2.parent = this;
	this.instance_2.setTransform(199,-53,0.531,0.531);

	this.instance_3 = new lib.Bitmap421111111();
	this.instance_3.parent = this;
	this.instance_3.setTransform(184,-54,0.547,0.547);

	this.instance_4 = new lib.Bitmap4311111111();
	this.instance_4.parent = this;
	this.instance_4.setTransform(192,-47,0.515,0.515);

	this.instance_5 = new lib.Bitmap44111111();
	this.instance_5.parent = this;
	this.instance_5.setTransform(194,-65,0.53,0.53);

	this.instance_6 = new lib.Bitmap451111111();
	this.instance_6.parent = this;
	this.instance_6.setTransform(199,-53,0.527,0.527);

	this.instance_7 = new lib.Bitmap46111111();
	this.instance_7.parent = this;
	this.instance_7.setTransform(184,-54,0.543,0.542);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:2066,y:19}}]}).to({state:[{t:this.instance,p:{x:192,y:-47}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2066,19,111.3,337.4);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lant1:0,lant2:1,lant3:2,lant4:3,lant5:4,lant6:5,lant7:6,lant8:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 1
	this.instance = new lib.swimsuit_1pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(178.8,-119,0.658,0.665,0,0,180);

	this.instance_1 = new lib.swimsuit_3pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(190.4,-108,0.663,0.648,0,0,180);

	this.instance_2 = new lib.swimsuit_4pngcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(178.7,-120,0.648,0.666,0,0,180);

	this.instance_3 = new lib.swimsuit_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(178.1,-120,0.665,0.665,0,0,180);

	this.instance_4 = new lib.swimsuit_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(181.5,-124,0.685,0.705,0,0,180);

	this.instance_5 = new lib.swimsuit_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(179.3,-123,0.695,0.695,0,0,180);

	this.instance_6 = new lib.swimsuit_2pngcopy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(177.5,-121,0.648,0.667,0,0,180);

	this.instance_7 = new lib.swimsuit_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(190.9,-114,0.672,0.687,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90,-119,88.8,147.6);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{pantofi1:0,"pantofi1":1,pantofi2:2,pantofi3:3,pantofi4:4,pantofi5:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.gloves_1();
	this.instance.parent = this;
	this.instance.setTransform(3102,-144);

	this.instance_1 = new lib.gloves_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-108,35);

	this.instance_2 = new lib.gloves_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-109,31);

	this.instance_3 = new lib.gloves_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-108,35);

	this.instance_4 = new lib.Bitmap2copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-108,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:3102,y:-144}}]}).to({state:[{t:this.instance,p:{x:-108,y:35}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3102,-144,420,66);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{tricou1:0,tricou2:1,tricou3:2,tricou4:3,tricou5:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.tops_1pngcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,173);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{pantaloni1:0,pantaloni2:1,pantaloni3:2,pantaloni4:3,pantaloni5:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.pants_1pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-1,0,1.011,1.011);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,94,284);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{rochie1:0,rochie2:1,rochie3:2,rochie4:3,rochie5:4,rochie6:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ochii1:0,ochii2:1,ochii3:2,"4":3,ochii5:4,ochii6:5,ochii7:6,ochii8:7,ochii9:8,ochii10:9,ochii11:10,ochii12:11,ochii13:12,ochii14:13,ochii15:14,ochii16:15,ochii17:16,ochii18:17,ochii19:18,ochii20:19,ochii21:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// Layer 1
	this.instance = new lib.eyes_1_black();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,51,18);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{par1:0,"par1":1,par2:2,par3:3,par4:4,par5:5,par6:6,par7:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 1
	this.instance = new lib.slippers_3();
	this.instance.parent = this;
	this.instance.setTransform(3584,-300);

	this.instance_1 = new lib.slippers_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(216,13,0.963,1);

	this.instance_2 = new lib.slippers_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(214,8,0.936,0.936);

	this.instance_3 = new lib.slippers_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(213,-18,0.982,0.956);

	this.instance_4 = new lib.Bitmap38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(210,29);

	this.instance_5 = new lib.Bitmap39();
	this.instance_5.parent = this;
	this.instance_5.setTransform(213,8,0.933,0.897);

	this.instance_6 = new lib.Bitmap40();
	this.instance_6.parent = this;
	this.instance_6.setTransform(213,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:3584,y:-300}}]}).to({state:[{t:this.instance,p:{x:210,y:29}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3584,-300,174,60);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap73();
	this.instance.parent = this;
	this.instance.setTransform(-634.1,92.7,0.529,0.529,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-645.4,92.7,134.1,136);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap70();
	this.instance.parent = this;
	this.instance.setTransform(-215,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215,-94,230,208);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button_icon_eyes();
	this.instance.parent = this;
	this.instance.setTransform(11,15);

	this.instance_1 = new lib.violet_button();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button_icon_skin_color();
	this.instance.parent = this;
	this.instance.setTransform(19,11);

	this.instance_1 = new lib.violet_button();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap69();
	this.instance.parent = this;
	this.instance.setTransform(-231,-192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231,-192,229,209);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap68();
	this.instance.parent = this;
	this.instance.setTransform(-227,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227,-218,230,209);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap71();
	this.instance.parent = this;
	this.instance.setTransform(-139,-162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-162,230,209);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap72();
	this.instance.parent = this;
	this.instance.setTransform(-138,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,64,230,209);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button_icon_tops();
	this.instance.parent = this;
	this.instance.setTransform(13,15);

	this.instance_1 = new lib.pink_button();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button_icon_pants();
	this.instance.parent = this;
	this.instance.setTransform(17,14);

	this.instance_1 = new lib.pink_button();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button_icon_dress();
	this.instance.parent = this;
	this.instance.setTransform(15,13);

	this.instance_1 = new lib.pink_button();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.instance = new lib.Bitmap62();
	this.instance.parent = this;
	this.instance.setTransform(477,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(477,97);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(477,97,485,367);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Bitmap64();
	this.instance.parent = this;
	this.instance.setTransform(-82,-6);

	this.instance_1 = new lib.Bitmap65();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-82,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-6,402,366);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap67();
	this.instance.parent = this;
	this.instance.setTransform(-83,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-51,401,366);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2111111111111111();
	this.instance.parent = this;
	this.instance.setTransform(-176,24);

	this.instance_1 = new lib.Bitmap19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-225,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-12,323,275);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Bitmap87();
	this.instance.parent = this;
	this.instance.setTransform(-357,68);

	this.instance_1 = new lib.Bitmap88();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-357,60,0.996,0.996);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357,68,304,304);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8611();
	this.instance.parent = this;
	this.instance.setTransform(-1178,-1479);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1178,-1479,553,553);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap841();
	this.instance.parent = this;
	this.instance.setTransform(-355.2,-852.9,1.498,1.498,-47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.2,-1259,772.3,772.9);


(lib.Tween38copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqMO1QkoABAAkpIAA0ZQAAkpEoAAIUZAAQEpAAAAEpIAAUZQAAEpkpgBg");
	mask.setTransform(-5,-4);

	// Layer 1
	this.instance = new lib.Bitmap415();
	this.instance.parent = this;
	this.instance.setTransform(-100,-98,1.182,1.182);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-98,189.1,189);


(lib.Symbol86_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.ic_surfboard_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7,-224);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-224,93,533);


(lib.Symbol17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.YoutubeButtons7326();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Symbol15copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap420();
	this.instance.parent = this;
	this.instance.setTransform(6,1,1.192,1.192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,1,190.8,190.8);


(lib.Symbol12copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.googleplaybutton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.6,86);


(lib.Symbol6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AknASIAvjZIIgC1IgvDZg");
	this.shape.setTransform(29.6,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.3,40);


(lib.shape6147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eg5MAooMAAAhRPMByZAAAMAAABRPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366.1,-260,732.2,520.1);


(lib.shape6145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.69)","rgba(255,255,255,0)"],[0.188,0.737],0,0,0,0,0,114.9).s().p("AslMlQlOlOAAnXQAAnXFOlPQFPlNHWAAQHXAAFOFNQFPFPAAHXQAAHXlPFOQlOFOnXABQnWgBlPlOg");
	this.shape.setTransform(53,53);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFF00","rgba(255,255,255,0)"],[0,0.188,0.737],0,0,0,0,0,53.4).s().p("Al2F2QiaibgBjbQABjaCaicQCciaDagBQDbABCbCaQCcCcAADaQAADbicCbQibCcjbAAQjaAAicicg");
	this.shape_1.setTransform(53,53);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBcIglAXIx2JGIRDqSIAagNItpvKIO6OiIRJouIwQJqIMpODg");
	this.shape_2.setTransform(47.8,55.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAmIAOgpI/NhqIf3gdIJI8AInGcFIc4BiI9ZAjIgRBBIpddKg");
	this.shape_3.setTransform(45,59);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.9,-134.1,402,386.4);


(lib.Symbol143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol140();
	this.instance.parent = this;
	this.instance.setTransform(240.4,250.1,0.931,0.931,0,0,0,99.3,216);

	this.instance_1 = new lib.Symbol142();
	this.instance_1.parent = this;
	this.instance_1.setTransform(230,66);

	this.instance_2 = new lib.Symbol141();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12,63);

	this.instance_3 = new lib.Symbol130();
	this.instance_3.parent = this;
	this.instance_3.setTransform(713.6,274.1,0.777,0.777,0,0,0,111.7,319.4);

	this.instance_4 = new lib.masajackkristoff();
	this.instance_4.parent = this;
	this.instance_4.setTransform(412,113,0.521,0.521);

	this.instance_5 = new lib.podium();
	this.instance_5.parent = this;
	this.instance_5.setTransform(42,435,0.622,0.622);

	this.instance_6 = new lib.coverbg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.Symbol138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol145();
	this.instance.parent = this;
	this.instance.setTransform(60,220,1,1,0,0,0,115,219);

	this.instance_1 = new lib.levelsiconbase();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2,1.48,1.48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,179.1,180.1);


(lib.Symbol134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol148();
	this.instance.parent = this;
	this.instance.setTransform(98.2,223.8,1,1,0,0,0,130.2,234.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-6,176,178);


(lib.Symbol132copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Bitmap86();
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol134();
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.9,217.9,1,1,0,0,0,90.9,211.9);

	this.instance_2 = new lib.levelsiconbase();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,2,1.48,1.48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,182);


(lib.Symbol132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Symbol144();
	this.instance.parent = this;
	this.instance.setTransform(80,208.5,1,1,0,0,0,91,212);

	this.instance_1 = new lib.levelsiconbase();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.48,1.48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-3.5,190.1,182.6);


(lib.Symbol119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 2
	this.instance = new lib.Symbol130();
	this.instance.parent = this;
	this.instance.setTransform(706.6,310.2,0.839,0.839,0,0,0,111.6,319.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Layer 1
	this.instance_1 = new lib.Symbol129();
	this.instance_1.parent = this;
	this.instance_1.setTransform(399,245.8,1,1,0,0,0,405,303.8);

	this.instance_2 = new lib.coverbg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-58,810,658);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.lant4 = new lib.Symbol86_1();
	this.lant4.parent = this;
	this.lant4.setTransform(-286.5,132.2,0.626,0.703);

	this.timeline.addTween(cjs.Tween.get(this.lant4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.9,-25.3,58.2,374.7);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		exportRoot.goNextScene();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(9).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(400,137);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({y:439.4},8).to({startPosition:0},1).to({y:137},9).wait(1));

	// Layer 2
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(400,1050);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},1).to({y:748.4},8).to({startPosition:0},1).to({y:1050},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,800,1203);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 1
	this.rochie6 = new lib.Symbol41();
	this.rochie6.parent = this;
	this.rochie6.setTransform(235.1,248.6,1,1,0,0,0,35.1,62.6);

	this.rochie3 = new lib.Symbol40();
	this.rochie3.parent = this;
	this.rochie3.setTransform(233.7,77.7,1,1,0,0,0,33.7,65.7);

	this.rochie5 = new lib.Symbol39();
	this.rochie5.parent = this;
	this.rochie5.setTransform(127.9,280.8,1,1,0,0,0,30.9,72.8);

	this.rochie4 = new lib.Symbol38();
	this.rochie4.parent = this;
	this.rochie4.setTransform(39,259.7,1,1,0,0,0,29,73.7);

	this.rochie1 = new lib.Symbol37();
	this.rochie1.parent = this;
	this.rochie1.setTransform(128.6,76.5,1,1,0,0,0,23.6,66.5);

	this.rochie2 = new lib.Symbol36();
	this.rochie2.parent = this;
	this.rochie2.setTransform(43.1,94.5,1,1,0,0,0,25.1,62.5);

	this.pantaloni1 = new lib.Symbol46();
	this.pantaloni1.parent = this;
	this.pantaloni1.setTransform(233.4,102.8,1,1,0,0,0,30.4,91.8);

	this.pantaloni5 = new lib.Symbol45();
	this.pantaloni5.parent = this;
	this.pantaloni5.setTransform(233.4,308,1,1,0,0,0,30.4,94);

	this.pantaloni3 = new lib.Symbol44();
	this.pantaloni3.parent = this;
	this.pantaloni3.setTransform(43.7,295.9,1,1,0,0,0,30.7,100.9);

	this.pantaloni4 = new lib.Symbol43();
	this.pantaloni4.parent = this;
	this.pantaloni4.setTransform(127.4,174,1,1,0,0,0,30.4,92);

	this.pantaloni2 = new lib.Symbol42();
	this.pantaloni2.parent = this;
	this.pantaloni2.setTransform(45,48.5,1,1,0,0,0,32,22.5);

	this.tricou5 = new lib.Symbol54();
	this.tricou5.parent = this;
	this.tricou5.setTransform(210.5,318.9,1,1,0,0,0,56.5,70.9);

	this.tricou4 = new lib.Symbol53();
	this.tricou4.parent = this;
	this.tricou4.setTransform(53.1,314.7,1,1,0,0,0,42.1,66.7);

	this.tricou3 = new lib.Symbol52();
	this.tricou3.parent = this;
	this.tricou3.setTransform(124,183.5,1,1,0,0,0,47,36.5);

	this.tricou2 = new lib.Symbol48();
	this.tricou2.parent = this;
	this.tricou2.setTransform(230.8,81.6,1,1,0,0,0,35.8,65.6);

	this.tricou1 = new lib.Symbol47();
	this.tricou1.parent = this;
	this.tricou1.setTransform(56.1,76.7,1,1,0,0,0,50.1,60.7);

	this.pantofi5 = new lib.Symbol59();
	this.pantofi5.parent = this;
	this.pantofi5.setTransform(246.7,388.8,1,1,0,0,0,-104,-31.2);

	this.pantofi4 = new lib.Symbol58();
	this.pantofi4.parent = this;
	this.pantofi4.setTransform(137.9,96.1,1,1,0,0,0,25.9,6);

	this.pantofi3 = new lib.Symbol57();
	this.pantofi3.parent = this;
	this.pantofi3.setTransform(131.2,401.2,1,1,0,0,0,33.5,32.5);

	this.pantofi2 = new lib.Symbol56();
	this.pantofi2.parent = this;
	this.pantofi2.setTransform(376.2,106.1,1,1,0,0,0,109.5,-87.2);

	this.pantofi1 = new lib.Symbol55();
	this.pantofi1.parent = this;
	this.pantofi1.setTransform(146.6,253.5,0.999,0.999,0,0,0,33.8,32.7);

	this.instance = new lib.glovesstander();
	this.instance.parent = this;
	this.instance.setTransform(83,102,0.777,0.777);

	this.geanta5 = new lib.Symbol64();
	this.geanta5.parent = this;
	this.geanta5.setTransform(-44,90.3,1.025,1.048,0,0,180,37.1,38.1);

	this.geanta3 = new lib.Symbol63();
	this.geanta3.parent = this;
	this.geanta3.setTransform(134.9,346.2,1.025,1.048,0,0,180,39.4,36.1);

	this.geanta4 = new lib.Symbol62();
	this.geanta4.parent = this;
	this.geanta4.setTransform(433.7,333.1,1.025,1.048,0,0,180,46.4,50.6);

	this.geanta2 = new lib.Symbol61();
	this.geanta2.parent = this;
	this.geanta2.setTransform(-292,314.7,1.025,1.048,0,0,180,30.2,28.1);

	this.geanta1 = new lib.Symbol60();
	this.geanta1.parent = this;
	this.geanta1.setTransform(-31.9,26.8,1.025,1.048,0,0,180,27.2,69.9);

	this.instance_1 = new lib.Bitmap59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,101);

	this.lant3 = new lib.Symbol68();
	this.lant3.parent = this;
	this.lant3.setTransform(293.2,232.5,0.914,0.914,0,0,180,38.3,17);

	this.lant4 = new lib.Symbol67();
	this.lant4.parent = this;
	this.lant4.setTransform(202.5,176.2,0.914,0.914);

	this.lant1 = new lib.Symbol65();
	this.lant1.parent = this;
	this.lant1.setTransform(5.6,153.2,0.914,0.914,0,0,0,-10.5,30.9);

	this.lant2 = new lib.Symbol66();
	this.lant2.parent = this;
	this.lant2.setTransform(43.3,148.9,0.97,0.97,0,0,0,-121.1,19);

	this.lant8 = new lib.Symbol72();
	this.lant8.parent = this;
	this.lant8.setTransform(93.6,338.8,0.914,0.914,0,0,0,24.3,-110.5);

	this.lant6 = new lib.Symbol71();
	this.lant6.parent = this;
	this.lant6.setTransform(227.3,324.2,0.914,0.914,0,0,0,215.3,28.8);

	this.lant7 = new lib.Symbol70();
	this.lant7.parent = this;
	this.lant7.setTransform(267.7,338.9,0.914,0.914,0,0,0,36,-55.4);

	this.lant5 = new lib.Symbol69();
	this.lant5.parent = this;
	this.lant5.setTransform(160.9,350.5,0.914,0.914,0,0,0,-15.9,26.7);

	this.instance_2 = new lib.Bitmap49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,30,0.933,0.933);

	this.cercei7 = new lib.Symbol79();
	this.cercei7.parent = this;
	this.cercei7.setTransform(163.6,428.8,0.769,0.769,0,0,0,42.4,3.6);

	this.cercei3 = new lib.Symbol76();
	this.cercei3.parent = this;
	this.cercei3.setTransform(149.1,147.7,0.804,0.804,0,0,0,144.5,-92.9);

	this.cercei8 = new lib.Symbol80();
	this.cercei8.parent = this;
	this.cercei8.setTransform(492.6,433.7,0.769,0.769,0,0,0,47.1,20.7);

	this.cercei6 = new lib.Symbol78();
	this.cercei6.parent = this;
	this.cercei6.setTransform(219.3,342.4,0.804,0.804,0,0,0,143.2,-61.6);

	this.cercei5 = new lib.Symbol77();
	this.cercei5.parent = this;
	this.cercei5.setTransform(90.9,331.6,0.804,0.804,0,0,0,71.9,-49.1);

	this.cercei1 = new lib.Symbol75();
	this.cercei1.parent = this;
	this.cercei1.setTransform(100.5,134.1,0.804,0.804,0,0,0,42.6,24.2);

	this.cercei2 = new lib.Symbol74();
	this.cercei2.parent = this;
	this.cercei2.setTransform(-18.7,125.3,0.804,0.804,0,0,0,0,0.2);

	this.cercei4 = new lib.Symbol73();
	this.cercei4.parent = this;
	this.cercei4.setTransform(519.6,178,0.804,0.804,0,0,0,77.9,37.6);

	this.corp4 = new lib.Symbol84();
	this.corp4.parent = this;
	this.corp4.setTransform(209,259.5,1,1,0,0,0,53,53.5);

	this.corp3 = new lib.Symbol83();
	this.corp3.parent = this;
	this.corp3.setTransform(67,259.5,1,1,0,0,0,53,53.5);

	this.corp2 = new lib.Symbol82();
	this.corp2.parent = this;
	this.corp2.setTransform(209,114.5,1,1,0,0,0,53,53.5);

	this.corp1 = new lib.Symbol81();
	this.corp1.parent = this;
	this.corp1.setTransform(67,114.5,1,1,0,0,0,53,53.5);

	this.ochii1 = new lib.Symbol106();
	this.ochii1.parent = this;
	this.ochii1.setTransform(44.5,35.5,1,1,0,0,0,39.5,19.5);

	this.ochii2 = new lib.Symbol105();
	this.ochii2.parent = this;
	this.ochii2.setTransform(140.5,33.5,1,1,0,0,0,39.5,19.5);

	this.ochii5 = new lib.Symbol104();
	this.ochii5.parent = this;
	this.ochii5.setTransform(225.5,74.5,1,1,0,0,0,39.5,19.5);

	this.ochii4 = new lib.Symbol103();
	this.ochii4.parent = this;
	this.ochii4.setTransform(129.5,74.5,1,1,0,0,0,39.5,19.5);

	this.ochii3 = new lib.Symbol101();
	this.ochii3.parent = this;
	this.ochii3.setTransform(44.5,76.5,1,1,0,0,0,39.5,19.5);

	this.ochii6 = new lib.Symbol100();
	this.ochii6.parent = this;
	this.ochii6.setTransform(44,126.5,1,1,0,0,0,40,19.5);

	this.ochii7 = new lib.Symbol99();
	this.ochii7.parent = this;
	this.ochii7.setTransform(129.5,126.5,1,1,0,0,0,39.5,19.5);

	this.ochii8 = new lib.Symbol98();
	this.ochii8.parent = this;
	this.ochii8.setTransform(227,126.5,1,1,0,0,0,40,19.5);

	this.ochii9 = new lib.Symbol97();
	this.ochii9.parent = this;
	this.ochii9.setTransform(39.5,177.5,1,1,0,0,0,39.5,19.5);

	this.ochii10 = new lib.Symbol96();
	this.ochii10.parent = this;
	this.ochii10.setTransform(133.5,175.5,1,1,0,0,0,39.5,19.5);

	this.ochii11 = new lib.Symbol95();
	this.ochii11.parent = this;
	this.ochii11.setTransform(228.5,177.5,1,1,0,0,0,39.5,19.5);

	this.ochii14 = new lib.Symbol94();
	this.ochii14.parent = this;
	this.ochii14.setTransform(232.5,225.5,1,1,0,0,0,39.5,19.5);

	this.ochii13 = new lib.Symbol93();
	this.ochii13.parent = this;
	this.ochii13.setTransform(132,225.5,1,1,0,0,0,40,19.5);

	this.ochii12 = new lib.Symbol92();
	this.ochii12.parent = this;
	this.ochii12.setTransform(39.5,225.5,1,1,0,0,0,39.5,19.5);

	this.ochii15 = new lib.Symbol91();
	this.ochii15.parent = this;
	this.ochii15.setTransform(50.5,282.5,1,1,0,0,0,39.5,19.5);

	this.ochii16 = new lib.Symbol90();
	this.ochii16.parent = this;
	this.ochii16.setTransform(133.5,282.5,1,1,0,0,0,39.5,19.5);

	this.ochii17 = new lib.Symbol89();
	this.ochii17.parent = this;
	this.ochii17.setTransform(228,285.5,1,1,0,0,0,40,19.5);

	this.ochii18 = new lib.Symbol88();
	this.ochii18.parent = this;
	this.ochii18.setTransform(45.5,338.5,1,1,0,0,0,39.5,19.5);

	this.ochii19 = new lib.Symbol87();
	this.ochii19.parent = this;
	this.ochii19.setTransform(133.5,338.5,1,1,0,0,0,39.5,19.5);

	this.ochii20 = new lib.Symbol86();
	this.ochii20.parent = this;
	this.ochii20.setTransform(228.5,335.5,1,1,0,0,0,39.5,19.5);

	this.ochii21 = new lib.Symbol85();
	this.ochii21.parent = this;
	this.ochii21.setTransform(227.5,34.2,1.076,1.076,0,0,0,39.5,19.6);

	this.par7 = new lib.Symbol113();
	this.par7.parent = this;
	this.par7.setTransform(378.5,361.2,0.775,0.742,0,0,0,32.9,36.3);

	this.par6 = new lib.Symbol112();
	this.par6.parent = this;
	this.par6.setTransform(264,313.8,0.775,0.742,0,0,0,41.7,34.9);

	this.par5 = new lib.Symbol111();
	this.par5.parent = this;
	this.par5.setTransform(206.5,422.4,0.885,0.847,0,0,0,-255.9,-31.7);

	this.par4 = new lib.Symbol110();
	this.par4.parent = this;
	this.par4.setTransform(81.2,412.8,0.83,0.795,0,0,0,8.3,-116.9);

	this.par3 = new lib.Symbol109();
	this.par3.parent = this;
	this.par3.setTransform(201,409.1,0.775,0.742,0,0,0,33.3,36.7);

	this.par2 = new lib.Symbol108();
	this.par2.parent = this;
	this.par2.setTransform(221.2,326.4,0.775,0.742,0,0,0,34.3,35.9);

	this.par1 = new lib.Symbol107();
	this.par1.parent = this;
	this.par1.setTransform(97.4,93.8,0.775,0.742,0,0,0,36.1,34.6);

	this.instance_3 = new lib.Bitmap54();
	this.instance_3.parent = this;
	this.instance_3.setTransform(27,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rochie2},{t:this.rochie1},{t:this.rochie4},{t:this.rochie5},{t:this.rochie3},{t:this.rochie6}]}).to({state:[{t:this.pantaloni2},{t:this.pantaloni4},{t:this.pantaloni3},{t:this.pantaloni5},{t:this.pantaloni1}]},1).to({state:[{t:this.tricou1},{t:this.tricou2},{t:this.tricou3},{t:this.tricou4},{t:this.tricou5}]},1).to({state:[{t:this.instance},{t:this.pantofi1},{t:this.pantofi2},{t:this.pantofi3},{t:this.pantofi4},{t:this.pantofi5}]},1).to({state:[{t:this.instance_1},{t:this.geanta1},{t:this.geanta2},{t:this.geanta4},{t:this.geanta3},{t:this.geanta5}]},1).to({state:[{t:this.instance_2},{t:this.lant5},{t:this.lant7},{t:this.lant6},{t:this.lant8},{t:this.lant2},{t:this.lant1},{t:this.lant4},{t:this.lant3}]},1).to({state:[{t:this.instance_2},{t:this.cercei4},{t:this.cercei2},{t:this.cercei1},{t:this.cercei5},{t:this.cercei6},{t:this.cercei8},{t:this.cercei3},{t:this.cercei7}]},1).to({state:[{t:this.corp1},{t:this.corp2},{t:this.corp3},{t:this.corp4}]},1).to({state:[{t:this.ochii21},{t:this.ochii20},{t:this.ochii19},{t:this.ochii18},{t:this.ochii17},{t:this.ochii16},{t:this.ochii15},{t:this.ochii12},{t:this.ochii13},{t:this.ochii14},{t:this.ochii11},{t:this.ochii10},{t:this.ochii9},{t:this.ochii8},{t:this.ochii7},{t:this.ochii6},{t:this.ochii3},{t:this.ochii4},{t:this.ochii5},{t:this.ochii2},{t:this.ochii1}]},1).to({state:[{t:this.instance_3},{t:this.par1},{t:this.par2},{t:this.par3},{t:this.par4},{t:this.par5},{t:this.par6},{t:this.par7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,10,260.4,343.6);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// butoane menu
	this.moregames = new lib.Symbol24();
	this.moregames.parent = this;
	this.moregames.setTransform(66,459.7,0.727,0.727,-5.5,0,0,-578.3,159);

	this.par_but = new lib.Symbol23();
	this.par_but.parent = this;
	this.par_but.setTransform(110.8,226.1,0.339,0.339,0,0,0,30.3,19.2);

	this.ochii_but = new lib.Symbol22();
	this.ochii_but.parent = this;
	this.ochii_but.setTransform(665.2,-15,1,1,0,0,0,28,28);

	this.corp_but = new lib.Symbol21();
	this.corp_but.parent = this;
	this.corp_but.setTransform(576.9,11,1,1,0,0,0,26.9,31.8);

	this.cercei_but = new lib.Symbol20();
	this.cercei_but.parent = this;
	this.cercei_but.setTransform(117.6,189.5,0.339,0.339,0,0,0,28.4,28.2);

	this.lant_but = new lib.Symbol19();
	this.lant_but.parent = this;
	this.lant_but.setTransform(78.2,86.2,0.339,0.339,0,0,0,-84,-85.2);

	this.geanta_but = new lib.Symbol18();
	this.geanta_but.parent = this;
	this.geanta_but.setTransform(85.7,326.9,0.339,0.339,0,0,0,28.2,28.2);

	this.pantofi_but = new lib.Symbol17();
	this.pantofi_but.parent = this;
	this.pantofi_but.setTransform(85.1,325.6,0.339,0.339,0,0,0,28.4,28.2);

	this.shirt_but = new lib.Symbol16();
	this.shirt_but.parent = this;
	this.shirt_but.setTransform(796.4,-15,1,1,0,0,0,28,28);

	this.pants_but = new lib.Symbol15();
	this.pants_but.parent = this;
	this.pants_but.setTransform(852.4,-15,1,1,0,0,0,28,28);

	this.dress_but = new lib.Symbol14();
	this.dress_but.parent = this;
	this.dress_but.setTransform(728,-15,1,1,0,0,0,28,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_but},{t:this.pants_but},{t:this.shirt_but},{t:this.pantofi_but},{t:this.geanta_but},{t:this.lant_but},{t:this.cercei_but},{t:this.corp_but},{t:this.ochii_but},{t:this.par_but},{t:this.moregames}]}).wait(1));

	// rochie
	this.haine = new lib.Symbol25();
	this.haine.parent = this;
	this.haine.setTransform(291.2,229.6,1,1,0,0,0,181.2,199.6);

	this.timeline.addTween(cjs.Tween.get(this.haine).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.8,-43,867.6,557.8);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{corp2:0,corp3:1,corp4:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 2
	this.instance = new lib.Symbol146();
	this.instance.parent = this;
	this.instance.setTransform(99.8,76.4,1.053,1.053,0,0,0,41.9,41);

	this.instance_1 = new lib.ladybug_web_face();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.7,37,0.509,0.509,0,0,180);

	this.instance_2 = new lib.Symbol139();
	this.instance_2.parent = this;
	this.instance_2.setTransform(83.5,80.9,1,1,-1.2,0,0,44.3,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.9,44.8,74.5,73.6);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Bitmap66();
	this.instance.parent = this;
	this.instance.setTransform(141,-131);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-118.5,246.8,1,1,0,0,0,-342.9,327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141,-131,402,366);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.moregames.cursor = "pointer";
		this.playbutton.cursor = "pointer";
		this.googleplay.cursor = "pointer";
		this.logo.cursor = "pointer";
		var buttonsArray = [this.logo,this.googleplay,this.playbutton,this.moregames];
		var buttonsArrayString = ["logo","googleplay","playbutton","moregames"];
		var buttonClicked = "";
		for(var i=0; i<buttonsArray.length;i++){
			buttonsArray[i].name = buttonsArrayString[i];
			buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
			buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
		}

		function hoverButtons(event) {
			event.currentTarget.alpha = .8;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 4, 4, 10);
		}

		function houtButtons(event) {
			event.currentTarget.alpha = 1;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 0, 0, 0);
		}

		this.moregames.addEventListener("click", moregamesfunctionhere.bind(this));
		function moregamesfunctionhere(event) {
			exportRoot.moregamesfunction();
		}
		this.logo.addEventListener("click", logofunctionhere.bind(this));
		function logofunctionhere(event) {
			exportRoot.logofunction();
		}

		this.playbutton.addEventListener("click", playfunctionhere.bind(this));
		function playfunctionhere(event) {
			exportRoot.animInterLevels = "cover";
			exportRoot.goAnim();
			exportRoot.showAds();


		}
		this.googleplay.addEventListener("click", googleplayfunctionhere.bind(this));
		function googleplayfunctionhere(event) {
			exportRoot.googleplayfunction();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.moregames = new lib.Symbol3();
	this.moregames.parent = this;
	this.moregames.setTransform(419.8,692.7,0.251,0.251,47.2,0,0,78.2,77.5);

	this.youtube = new lib.Symbol17_1();
	this.youtube.parent = this;
	this.youtube.setTransform(911.5,-244,0.66,0.66,0,0,0,50,50);

	this.googleplay = new lib.Symbol12copy2();
	this.googleplay.parent = this;
	this.googleplay.setTransform(-322.9,206.5,0.861,0.861,0,0,0,124.5,43.1);
	this.googleplay.visible = false;

	this.logo = new lib.Symbol51();
	this.logo.parent = this;
	this.logo.setTransform(1026.8,201.9,0.358,0.358,0,0,0,312.9,76);

	this.playbutton = new lib.Symbol4();
	this.playbutton.parent = this;
	this.playbutton.setTransform(725.3,535.1,0.251,0.251,0.4,0,0,-920.1,-1173.9);

	this.fullscreenBtn = new lib.Symbol6();
	this.fullscreenBtn.parent = this;
	this.fullscreenBtn.setTransform(1105.4,61.9,0.257,0.257,0,0,0,-63,127.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fullscreenBtn},{t:this.playbutton},{t:this.logo},{t:this.googleplay},{t:this.youtube},{t:this.moregames}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol143();
	this.instance.parent = this;
	this.instance.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-430.1,-277,1576.9,935.8);


(lib.Tween17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArtO1QjHAAAAi6IAA31QAAi6DHAAIXbAAQDIAAgBC6IAAX1QABC6jIAAg");
	mask.setTransform(0,-0.5);

	// Layer 1
	this.instance = new lib.Symbol15copy3();
	this.instance.parent = this;
	this.instance.setTransform(-6,-3,1,1,0,0,0,95,95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-95.4,190,189.2);


(lib.Symbol102copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween38copy();
	this.instance.parent = this;
	this.instance.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},14).to({scaleX:1,scaleY:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,190,190.1);


(lib.Symbol32copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol102copy();
	this.instance.parent = this;
	this.instance.setTransform(-88.9,96.8,0.978,0.978,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.6,0,185.8,185.8);


(lib.Symbol14copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02},11).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,190,189.2);


(lib.q = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.shape6145("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-53.9,35.7,0.047,0.047);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.25,scaleY:0.25,x:-64.8,y:24.8},4).to({scaleX:0.1,scaleY:0.1,x:-56.5,y:32.1},2).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.3,29.4,18.9,18.2);


(lib.Symbol147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol138();
	this.instance.parent = this;
	this.instance.setTransform(89.5,89.5,1,1,0,0,0,89.5,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.1,180.1);


(lib.Symbol132copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Bitmap84();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.instance_1 = new lib.Symbol147();
	this.instance_1.parent = this;
	this.instance_1.setTransform(89.5,110.5,1,1,0,0,0,89.5,109.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,183,184);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cap
	this.doll_corp = new lib.Symbol12();
	this.doll_corp.parent = this;
	this.doll_corp.setTransform(90.9,291.5,1.033,1.033,0,0,180,102,287.4);

	this.timeline.addTween(cjs.Tween.get(this.doll_corp).wait(1));

	// cercei
	this.doll_cercei = new lib.Symbol34();
	this.doll_cercei.parent = this;
	this.doll_cercei.setTransform(99.7,216.2,0.939,0.939,0,0,0,246,128.1);

	this.timeline.addTween(cjs.Tween.get(this.doll_cercei).wait(1));

	// geanta
	this.doll_geanta = new lib.Symbol35();
	this.doll_geanta.parent = this;
	this.doll_geanta.setTransform(52.4,292.4,0.721,0.721,1.7,0,0,213.8,-320.2);

	this.timeline.addTween(cjs.Tween.get(this.doll_geanta).wait(1));

	// pantofi
	this.doll_pantofi = new lib.Symbol32();
	this.doll_pantofi.parent = this;
	this.doll_pantofi.setTransform(108,219,0.64,0.64,0,0,0,101.3,61.8);

	this.timeline.addTween(cjs.Tween.get(this.doll_pantofi).wait(1));

	// par
	this.doll_par = new lib.Symbol27();
	this.doll_par.parent = this;
	this.doll_par.setTransform(60,496.8,0.666,0.626,0,0,0,295.6,84.1);

	this.timeline.addTween(cjs.Tween.get(this.doll_par).wait(1));

	// colier
	this.doll_lant = new lib.Symbol33();
	this.doll_lant.parent = this;
	this.doll_lant.setTransform(98.8,190.6,0.95,0.95,0,0,180,137.9,-41.4);

	this.timeline.addTween(cjs.Tween.get(this.doll_lant).wait(1));

	// bluza
	this.doll_tricou = new lib.Symbol31();
	this.doll_tricou.parent = this;
	this.doll_tricou.setTransform(1138.2,201,1,1,0,0,0,71.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.doll_tricou).wait(1));

	// pantaloni
	this.doll_pantaloni = new lib.Symbol30();
	this.doll_pantaloni.parent = this;
	this.doll_pantaloni.setTransform(1138.2,383.5,1,1,0,0,0,46.5,140.5);

	this.timeline.addTween(cjs.Tween.get(this.doll_pantaloni).wait(1));

	// rochie
	this.doll_rochie = new lib.Symbol29();
	this.doll_rochie.parent = this;
	this.doll_rochie.setTransform(1517,294.3,1,1,0,0,0,-146.6,194.5);

	this.timeline.addTween(cjs.Tween.get(this.doll_rochie).wait(1));

	// Layer 3
	this.doll_ochii = new lib.Symbol28();
	this.doll_ochii.parent = this;
	this.doll_ochii.setTransform(1341.6,219);

	this.timeline.addTween(cjs.Tween.get(this.doll_ochii).wait(1));

	// Layer 4
	this.instance = new lib.corppersonaje();
	this.instance.parent = this;
	this.instance.setTransform(-27,22,0.649,0.649);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-396.9,2393.5,923.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.moregames.cursor = "pointer";
		this.firstlevel.cursor = "pointer";
		this.secondlevel.cursor = "pointer";
		this.thirdlevel.cursor = "pointer";
		this.logo.cursor = "pointer";
		var buttonsArray = [this.logo,this.firstlevel,this.moregames,this.secondlevel,this.thirdlevel];
		var buttonsArrayString = ["logo","firstlevel","moregames","secondlevel","thirdlevel"];
		var buttonClicked = "";
		for(var i=0; i<buttonsArray.length;i++){
			buttonsArray[i].name = buttonsArrayString[i];
			buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
			buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
		}

		function hoverButtons(event) {
			event.currentTarget.alpha = .8;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 4, 4, 10);
		}

		function houtButtons(event) {
			event.currentTarget.alpha = 1;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 0, 0, 0);
		}

		this.moregames.addEventListener("click", moregamesfunctionhere1.bind(this));
		function moregamesfunctionhere1(event) {
			exportRoot.moregamesfunction();
		}
		this.logo.addEventListener("click", logofunctionhere.bind(this));
		function logofunctionhere(event) {
			exportRoot.logofunction();
		}

		this.firstlevel.addEventListener("click", dressupfunctionhere.bind(this));
		function dressupfunctionhere(event) {
			if(this.firstlevel.currentFrame == 0){
			exportRoot.animInterLevels = "level1";
				this.firstlevel.gotoAndStop(1);
			exportRoot.goAnim();
			}
		}
		this.secondlevel.addEventListener("click", roomdecorfunctionhere.bind(this));
		function roomdecorfunctionhere(event) {
			if(this.secondlevel.currentFrame == 1){
			exportRoot.animInterLevels = "level2";
				this.secondlevel.gotoAndStop(0);
			exportRoot.goAnim();
			}
		}
		this.thirdlevel.addEventListener("click", thirdlevelfunctionhere.bind(this));
		function thirdlevelfunctionhere(event) {
			if(this.thirdlevel.currentFrame == 1){
			exportRoot.animInterLevels = "level3";
				this.thirdlevel.gotoAndStop(0);
			exportRoot.goAnim();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.thirdlevel = new lib.Symbol132copy2();
	this.thirdlevel.parent = this;
	this.thirdlevel.setTransform(616.6,292.5,1,1,0,0,0,89.5,89.5);

	this.secondlevel = new lib.Symbol132copy();
	this.secondlevel.parent = this;
	this.secondlevel.setTransform(393.6,290.5,1,1,0,0,0,89.5,89.5);

	this.firstlevel = new lib.Symbol132();
	this.firstlevel.parent = this;
	this.firstlevel.setTransform(178.5,292.5,1,1,0,0,0,89.5,89.5);

	this.logo = new lib.Symbol51();
	this.logo.parent = this;
	this.logo.setTransform(532.2,491.6,0.626,0.626,0,0,0,321.4,60.5);

	this.instance = new lib.level();
	this.instance.parent = this;
	this.instance.setTransform(-51,11,0.877,0.877);

	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.4,972.4,0.639,0.639,0,0,180,726.6,287.8);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(696.7,982.1,0.594,0.594,0,0,0,337.9,61.9);

	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(455.2,749.5,0.597,0.597,0,0,0,154.1,107.6);

	this.moregames = new lib.Symbol3();
	this.moregames.parent = this;
	this.moregames.setTransform(998.2,535.4,0.525,0.525,41.6,0,0,-262.4,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.moregames},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.logo},{t:this.firstlevel},{t:this.secondlevel},{t:this.thirdlevel}]}).wait(1));

	// Layer 1
	this.instance_4 = new lib.coverbg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7,-12,1.131,1.131);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-12,1752.5,1096.9);


(lib.Symbol31copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol14copy6();
	this.instance.parent = this;
	this.instance.setTransform(93,93.4,0.978,0.978,0,0,0,95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-1.5,187.1,187.7);


(lib.sprite6148copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.sparklesSound();
	}
	this.frame_27 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(26).call(this.frame_27).wait(1));

	// JS
	this.instance = new lib.Symbol6_1();
	this.instance.parent = this;
	this.instance.setTransform(-110,-280,1,1,0,0,0,29.6,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(27));

	// Layer 237
	this.instance_1 = new lib.q();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-114.4,-147.1,0.272,0.272,-68.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(8));

	// Layer 232
	this.instance_2 = new lib.q();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-103.5,-149.6,0.272,0.272,-68.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(8));

	// Layer 227
	this.instance_3 = new lib.q();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-106.2,-228.9,0.63,0.63,-68.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(9));

	// Layer 222
	this.instance_4 = new lib.q();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-112.1,-180.8,0.63,0.63,-68.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(9));

	// Layer 217
	this.instance_5 = new lib.q();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-103.5,-140.5,0.272,0.272,-68.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).wait(10));

	// Layer 212
	this.instance_6 = new lib.q();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-89.6,-181.1,0.272,0.272,-68.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).wait(10));

	// Layer 207
	this.instance_7 = new lib.q();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-94.4,-177.3,0.272,0.272,-68.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},0).wait(11));

	// Layer 202
	this.instance_8 = new lib.q();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-112,-153.7,0.272,0.272,-68.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).wait(11));

	// Layer 197
	this.instance_9 = new lib.q();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-111.1,-169.1,0.272,0.272,-68.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).wait(11));

	// Layer 192
	this.instance_10 = new lib.q();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-114.4,-136.9,0.272,0.272,-68.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).wait(12));

	// Layer 187
	this.instance_11 = new lib.q();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-97,-167.3,0.272,0.272,-68.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).wait(12));

	// Layer 182
	this.instance_12 = new lib.q();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-101.8,-185.5,0.272,0.272,-68.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16).to({_off:false},0).wait(12));

	// Layer 177
	this.instance_13 = new lib.q();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-112,-167.3,0.272,0.272,-68.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).wait(13));

	// Layer 172
	this.instance_14 = new lib.q();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-103.5,-173.9,0.272,0.272,-68.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).wait(13));

	// Layer 167
	this.instance_15 = new lib.q();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-112,-193.5,0.272,0.272,-68.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15).to({_off:false},0).wait(13));

	// Layer 162
	this.instance_16 = new lib.q();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-118.7,-216.5,0.63,0.63,-68.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(14).to({_off:false},0).wait(14));

	// Layer 157
	this.instance_17 = new lib.q();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-131.1,-204.9,0.63,0.63,-68.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(14).to({_off:false},0).wait(14));

	// Layer 147
	this.instance_18 = new lib.q();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-123.6,-189.8,0.272,0.272,-68.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(13).to({_off:false},0).wait(15));

	// Layer 137
	this.instance_19 = new lib.q();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-114.4,-170.7,0.272,0.272,-68.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(12).to({_off:false},0).wait(16));

	// Layer 127
	this.instance_20 = new lib.q();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-94.4,-208,0.272,0.272,-68.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(11).to({_off:false},0).wait(17));

	// Layer 122
	this.instance_21 = new lib.q();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-110.4,-200.8,0.712,0.712,-68.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10).to({_off:false},0).wait(18));

	// Layer 117
	this.instance_22 = new lib.q();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-124.2,-190.8,0.712,0.712,-68.2);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10).to({_off:false},0).wait(18));

	// Layer 112
	this.instance_23 = new lib.q();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-110,-165.2,0.272,0.272,-68.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(9).to({_off:false},0).wait(19));

	// Layer 107
	this.instance_24 = new lib.q();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-116.5,-143.8,0.272,0.272,-68.2);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(9).to({_off:false},0).wait(19));

	// Layer 97
	this.instance_25 = new lib.q();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-122.2,-146.9,0.272,0.272,-68.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(9).to({_off:false},0).wait(19));

	// Layer 92
	this.instance_26 = new lib.q();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-114.4,-153.5,0.272,0.272,-68.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(8).to({_off:false},0).wait(20));

	// Layer 87
	this.instance_27 = new lib.q();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-124.9,-143.5,0.272,0.272,-68.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(7).to({_off:false},0).wait(21));

	// Layer 62
	this.instance_28 = new lib.q();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-126.8,-143.7,0.54,0.54,-68.2);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(5).to({_off:false},0).wait(23));

	// Layer 37
	this.instance_29 = new lib.q();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-114.4,-133,0.272,0.272,-68.2);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(3).to({_off:false},0).wait(25));

	// Layer 32
	this.instance_30 = new lib.q();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-117,-118.8,0.272,0.272,-68.2);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(2).to({_off:false},0).wait(26));

	// Layer 22
	this.instance_31 = new lib.q();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-127.3,-108.3,0.272,0.272,-68.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(2).to({_off:false},0).wait(26));

	// Layer 17
	this.instance_32 = new lib.q();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-123.9,-108.4,0.272,0.272,-68.2);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({_off:false},0).wait(27));

	// Layer 12
	this.instance_33 = new lib.q();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-118.4,-106.3,0.272,0.272,-68.2);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({_off:false},0).wait(27));

	// Layer 7
	this.instance_34 = new lib.q();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-115.3,-110.2,0.272,0.272,-68.2);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({_off:false},0).wait(27));

	// Layer 2
	this.instance_35 = new lib.q();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-112.7,-125.4,0.272,0.272,-68.2);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({_off:false},0).wait(27));

	// Layer 1
	this.instance_36 = new lib.shape6147("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(-112.7,-125.4,0.096,0.192);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({_off:false},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.6,-300,59.3,40);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		this.animStars1 = function(){
			exportRoot.sparklesSound();
		}
		this.stelute = function(){
			this.mcEffect.gotoAndPlay(1);
		}

		var frequency = 10;
		stage.enableMouseOver(frequency);
		var currentTargetNumChildren;
		var buttonsArray = [this.logo,this.poza1,this.poza2,this.replay_but,this.butoane.moregames,this.moregames1,this.nextlevel,this.butoane.dress_but,this.butoane.pants_but,this.butoane.shirt_but,this.butoane.pantofi_but,this.butoane.geanta_but,this.butoane.lant_but,this.butoane.cercei_but,this.butoane.corp_but,this.butoane.ochii_but,this.butoane.par_but,
		this.butoane.haine.rochie1,this.butoane.haine.rochie2,this.butoane.haine.rochie3,this.butoane.haine.rochie4,this.butoane.haine.rochie5,this.butoane.haine.rochie6,
		this.butoane.haine.pantaloni1,this.butoane.haine.pantaloni2,this.butoane.haine.pantaloni3,this.butoane.haine.pantaloni4,this.butoane.haine.pantaloni5,
		this.butoane.haine.tricou1,this.butoane.haine.tricou2,this.butoane.haine.tricou3,this.butoane.haine.tricou4,this.butoane.haine.tricou5,
		this.butoane.haine.pantofi1,this.butoane.haine.pantofi2,this.butoane.haine.pantofi3,this.butoane.haine.pantofi4,this.butoane.haine.pantofi5,
		this.butoane.haine.geanta1,this.butoane.haine.geanta2,this.butoane.haine.geanta3,this.butoane.haine.geanta4,this.butoane.haine.geanta5,
		this.butoane.haine.lant1,this.butoane.haine.lant2,this.butoane.haine.lant3,this.butoane.haine.lant4,this.butoane.haine.lant5,this.butoane.haine.lant6,this.butoane.haine.lant7,this.butoane.haine.lant8,
		this.butoane.haine.cercei1,this.butoane.haine.cercei2,this.butoane.haine.cercei3,this.butoane.haine.cercei4,this.butoane.haine.cercei5,this.butoane.haine.cercei6,this.butoane.haine.cercei7,this.butoane.haine.cercei8,
		this.butoane.haine.corp1,this.butoane.haine.corp2,this.butoane.haine.corp3,this.butoane.haine.corp4,
		this.butoane.haine.ochii1,this.butoane.haine.ochii2,this.butoane.haine.ochii3,this.butoane.haine.ochii4,this.butoane.haine.ochii5,this.butoane.haine.ochii6,this.butoane.haine.ochii7,this.butoane.haine.ochii8,this.butoane.haine.ochii9,this.butoane.haine.ochii10,
		this.butoane.haine.ochii11,this.butoane.haine.ochii12,this.butoane.haine.ochii13,this.butoane.haine.ochii14,this.butoane.haine.ochii15,this.butoane.haine.ochii16,this.butoane.haine.ochii17,this.butoane.haine.ochii18,this.butoane.haine.ochii19,this.butoane.haine.ochii20,this.butoane.haine.ochii21,
		this.butoane.haine.par1,this.butoane.haine.par2,this.butoane.haine.par3,this.butoane.haine.par4,this.butoane.haine.par5,this.butoane.haine.par6,this.butoane.haine.par7];

		var buttonsArrayString = ["logo","poza1","poza2","replay_but","moregames","moregames1","nextlevel","dress_but","pants_but","shirt_but","pantofi_but","geanta_but","lant_but","cercei_but","corp_but","ochii_but","par_but",
		"rochie1","rochie2","rochie3","rochie4","rochie5","rochie6","pantaloni1","pantaloni2","pantaloni3","pantaloni4","pantaloni5",
		"tricou1","tricou2","tricou3","tricou4","tricou5","pantofi1","pantofi2","pantofi3","pantofi4","pantofi5",
		"geanta1","geanta2","geanta3","geanta4","geanta5","lant1","lant2","lant3","lant4","lant5","lant6","lant7","lant8",
		"cercei1","cercei2","cercei3","cercei4","cercei5","cercei6","cercei7","cercei8",
		"corp1","corp2","corp3","corp4",
		"ochii1","ochii2","ochii3","ochii4","ochii5","ochii6","ochii7","ochii8","ochii9","ochii10","ochii12","ochii13","ochii14","ochii15","ochii16","ochii17","ochii18","ochii19","ochii20","ochii1","ochii21",
		"par1","par2","par3","par4","par5","par6","par7"];
		var buttonClicked = "";
		for(var i=0; i<buttonsArray.length;i++){
			buttonsArray[i].cursor = "pointer";
			buttonsArray[i].name = buttonsArrayString[i];
			buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
			buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
			buttonsArray[i].addEventListener("click", clickButtons.bind(this));
		}


		function clickButtons(event) {
			if(event.currentTarget.name.indexOf("nextlevel") > -1){

				exportRoot.animInterLevels = "interlevel";
				exportRoot.goAnim();
				//gdApi.showBanner();
				exportRoot.showAds();

			}

				if(event.currentTarget.name.indexOf("replay_but") > -1){
				//exportRoot.animInterLevels = "replay";
				//exportRoot.goAnim();
				//	gdApi.showBanner();
				//exportRoot.fadeInElement(exportRoot.interlevel);
				location.reload();
			}
			if(event.currentTarget.name.indexOf("poza1") > -1){
				exportRoot.poza1link();
			}
			if(event.currentTarget.name.indexOf("poza2") > -1){

				exportRoot.poza2link();
			}
			if(event.currentTarget.name.indexOf("moregames") > -1){
				exportRoot.moregamesfunction();
			}
			if(event.currentTarget.name.indexOf("logo") > -1){
				exportRoot.logofunction();
			}
			if(event.currentTarget.name.indexOf("dress_but") > -1){
				this.butoane.haine.gotoAndStop(0);

			}
			if(event.currentTarget.name.indexOf("pants_but") > -1){
				this.butoane.haine.gotoAndStop(1);

			}if(event.currentTarget.name.indexOf("shirt_but") > -1){
				this.butoane.haine.gotoAndStop(2);

			}if(event.currentTarget.name.indexOf("pantofi_but") > -1){
				this.butoane.haine.gotoAndStop(3);

			}if(event.currentTarget.name.indexOf("geanta_but") > -1){
				this.butoane.haine.gotoAndStop(4);

			}if(event.currentTarget.name.indexOf("lant_but") > -1){
				this.butoane.haine.gotoAndStop(5);

			}if(event.currentTarget.name.indexOf("cercei_but") > -1){
				this.butoane.haine.gotoAndStop(6);

			}if(event.currentTarget.name.indexOf("corp_but") > -1){
				this.butoane.haine.gotoAndStop(7);

			}if(event.currentTarget.name.indexOf("ochii_but") > -1){
				this.butoane.haine.gotoAndStop(8);

			}if(event.currentTarget.name.indexOf("par_but") > -1){
				this.butoane.haine.gotoAndStop(9);

			}


			if(event.currentTarget.name.indexOf("rochie") > -1){
				this.change1(event.currentTarget.name , "doll_rochie");
				this.animStars1();



			}
			if(event.currentTarget.name.indexOf("pantaloni") > -1){
				this.change2(event.currentTarget.name , "doll_pantaloni");
				this.animStars1();

			}
			if(event.currentTarget.name.indexOf("tricou") > -1){
				this.change3(event.currentTarget.name , "doll_tricou");
				this.animStars1();



			}
			if(event.currentTarget.name.indexOf("pantofi") > -1){
				this.change4(event.currentTarget.name , "doll_pantofi");
				this.animStars1();



			}
			if(event.currentTarget.name.indexOf("geanta") > -1){
				this.change5(event.currentTarget.name , "doll_geanta");
				this.animStars1();



			}
			if(event.currentTarget.name.indexOf("lant") > -1){
				this.change6(event.currentTarget.name , "doll_lant");
				this.animStars1();



			}
			if(event.currentTarget.name.indexOf("cercei") > -1){
				this.change7(event.currentTarget.name , "doll_cercei");
				this.animStars1();



			}
			if(event.currentTarget.name.indexOf("corp") > -1){
				this.change8(event.currentTarget.name , "doll_corp");
				this.animStars1();



			}
			if(event.currentTarget.name.indexOf("ochii") > -1){
				this.change9(event.currentTarget.name , "doll_ochii");
				this.animStars1();



			}
			if(event.currentTarget.name.indexOf("par") > -1){
				this.change10(event.currentTarget.name , "doll_par");
				this.animStars1();



			}

		}


		//this.elsaAnnaDoingStuff = function(){
		//}
		function hoverButtons(event) {
		//if(event.currentTarget.name.indexOf("dress") > -1){
		//	this.addChildAt(event.currentTarget,this.getNumChildren()-1);
		//		//this.addChildAt(this.dulapfata,this.getNumChildren()-1);
		//}
			event.currentTarget.alpha = 0.8;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 4, 4, 10);
		}

		function houtButtons(event) {
			event.currentTarget.alpha = 1;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 0, 0, 0);
		}
		/*this.sortDresses = function(){

		}*/
		function rand(min,max,interval)
		{
		    if (typeof(interval)==='undefined') interval = 1;
		    var r = Math.floor(Math.random()*(max-min+interval)/interval);
		    return r*interval+min;
		}

		this.change1 = function(arg){

			this.doll.doll_rochie.gotoAndStop(arg);
			this.doll.doll_rochie.visible=true;
			this.doll.doll_tricou.visible=false;
			this.doll.doll_pantaloni.visible=false;
			}


		this.change2 = function(arg){
		this.doll.doll_pantaloni.gotoAndStop(arg);
			this.doll.doll_tricou.visible=true;
			this.doll.doll_pantaloni.visible=true;
			this.doll.doll_rochie.visible=false;
				}



		this.change3 = function(arg){
		this.doll.doll_tricou.gotoAndStop(arg);
			this.doll.doll_tricou.visible=true;
			this.doll.doll_pantaloni.visible=true;
			this.doll.doll_rochie.visible=false;

		}
		this.change4 = function(arg){
		this.doll.doll_pantofi.gotoAndStop(arg);

		}

		this.change5 = function(arg){
		this.doll.doll_geanta.gotoAndStop(arg);

		}
		this.change6 = function(arg){
		this.doll.doll_lant.gotoAndStop(arg);

		}
		this.change7 = function(arg){
		this.doll.doll_cercei.gotoAndStop(arg);

		}
		this.change8 = function(arg){
		this.doll.doll_corp.gotoAndStop(arg);

		}
		this.change9 = function(arg){
		this.doll.doll_ochii.gotoAndStop(arg);

		}
		this.change10 = function(arg){
		this.doll.doll_par.gotoAndStop(arg);

		}

		this.finishlevel = function(){
			if(this.checklevel.currentFrame ==0){
			this.movedoll();
			this.butoane.visible=false;
				this.fundal.gotoAndStop(1);
				this.checklevel.gotoAndStop(1);
				this.finallevel();
				exportRoot.showAds();
			}
			else if(this.checklevel.currentFrame ==1){
				exportRoot.level1.visible=false;
				exportRoot.levelpick.visible=true;
				exportRoot.levelpick.firstlevel.gotoAndStop(1);
				exportRoot.levelpick.secondlevel.gotoAndStop(1);
				exportRoot.level1.doll.doll_corp.gotoAndStop(1);
			this.doll.y = 20;
			this.doll.x = 97;
			this.butoane.visible=true;
			exportRoot.level1.resetgame();
			this.fundal.gotoAndStop(0);
				this.checklevel.gotoAndStop(2);

				this.entergame();
			}
			else if(this.checklevel.currentFrame ==2){
			this.movedoll();
			this.butoane.visible=false;
			this.fundal.gotoAndStop(2);
				this.checklevel.gotoAndStop(3);
				this.finallevel();
				exportRoot.showAds();
			}
			else if(this.checklevel.currentFrame ==3){
				exportRoot.level1.visible=false;
				exportRoot.levelpick.visible=true;
				exportRoot.levelpick.firstlevel.gotoAndStop(1);
				exportRoot.levelpick.secondlevel.gotoAndStop(0);
				exportRoot.levelpick.thirdlevel.gotoAndStop(1);
				exportRoot.level1.doll.doll_corp.gotoAndStop(2);
			this.doll.y = 20;
			this.doll.x = 97;
			this.butoane.visible=true;
					exportRoot.level1.resetgame();
			this.fundal.gotoAndStop(0);
				this.checklevel.gotoAndStop(4);
				this.entergame();
			}
			else if(this.checklevel.currentFrame ==4){
			this.movedoll();
			this.butoane.visible=false;
			this.fundal.gotoAndStop(3);
			//	this.checklevel.gotoAndStop(4);
				this.completelevel();
			}
		}




		this.finallevel = function() {
			this.poza1.visible=true;
			this.poza2.visible=true;
			this.moregames1.visible=false;
			this.butoane.moregames.visible=false;
			this.nextlevel.visible=false;
		}
		this.completelevel = function() {
			this.poza1.visible=true;
			this.poza2.visible=true;
			this.moregames1.visible=true;
			this.butoane.moregames.visible=false;
			this.nextlevel.x = 900;
			this.logo.visible=false;
			createjs.Tween.get(exportRoot.level1.replay_but, {override:true}).wait(2000).to({alpha:1, visible:true}, 2000);

		}

		this.entergame = function(){
			this.moregames1.visible=false;
			this.butoane.moregames.visible=true;
			this.poza1.x = -200;
			this.poza2.x = 825;
			this.nextlevel.visible=true;
		}
		this.resetgame = function(){

			this.doll.doll_rochie.gotoAndStop(0);
			this.doll.doll_pantaloni.gotoAndStop(0);
			this.doll.doll_tricou.gotoAndStop(0);
			this.doll.doll_geanta.gotoAndStop(0);
			this.doll.doll_lant.gotoAndStop(0);
			this.doll.doll_cercei.gotoAndStop(0);
			this.doll.doll_ochii.gotoAndStop(0);
			this.doll.doll_par.gotoAndStop(0);
			this.doll.doll_pantofi.gotoAndStop(0);
			this.butoane.haine.gotoAndStop(5);
			this.doll.doll_rochie.visible=true;
			this.doll.doll_pantaloni.visible=false;
			this.doll.doll_tricou.visible=false;
			this.fundal.gotoAndStop(0);


		}
		this.movedoll = function(){
		this.doll.y = 35;
		createjs.Tween.get(this.doll, {override:true}).to({x:335},2000).call(handleComplete);
		this.nextlevel.visible=false;
		}
		function handleComplete() {
		     exportRoot.level1.mcEffect.gotoAndPlay(1);
			createjs.Tween.get(exportRoot.level1.poza1, {override:true}).to({x:100},1000);
			createjs.Tween.get(exportRoot.level1.poza2, {override:true}).to({x:550},1000);
			createjs.Tween.get(exportRoot.level1.nextlevel, {override:true}).to({alpha:1, visible:true}, 2000);
		    }
		/*this.animatieEliza = function(arg){
			 createjs.Tween.get(arg)
					 .to({y:4}, 700 , createjs.Ease.getPowInOut(2.2))
					 .to({y:7}, 700 , createjs.Ease.getPowInOut(2.2));
		}
		this.animatieEliza(exportRoot.level1.eliza);*/



		//functie replay
		//exportRoot.btnReplay.addEventListener("click", function () {location.reload();});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.checklevel = new lib.Symbol120();
	this.checklevel.parent = this;
	this.checklevel.setTransform(997.5,159.5,1,1,0,0,0,17.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.checklevel).wait(1));

	// final
	this.poza1 = new lib.Symbol32copy();
	this.poza1.parent = this;
	this.poza1.setTransform(-152.7,383.4,0.752,0.752,0,0,0,-181.3,-1.2);

	this.poza2 = new lib.Symbol31copy();
	this.poza2.parent = this;
	this.poza2.setTransform(850,383.7,0.752,0.752,0,0,0,1.6,-1.6);

	this.moregames1 = new lib.Symbol3();
	this.moregames1.parent = this;
	this.moregames1.setTransform(749.8,549.6,0.213,0.213,47.1,0,0,64.7,-889.4);

	this.replay_but = new lib.Symbol50();
	this.replay_but.parent = this;
	this.replay_but.setTransform(61.6,66.5,0.601,0.601,-0.2,0,0,355.2,-213.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replay_but},{t:this.moregames1},{t:this.poza2},{t:this.poza1}]}).wait(1));

	// butoane
	this.nextlevel = new lib.Symbol114();
	this.nextlevel.parent = this;
	this.nextlevel.setTransform(752.1,566.6,1,1,0,0,0,46.1,37.6);

	this.logo = new lib.Symbol51();
	this.logo.parent = this;
	this.logo.setTransform(658.7,28.5,0.433,0.376,0,0,0,326.1,67.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo},{t:this.nextlevel}]}).wait(1));

	// personaj
	this.mcEffect = new lib.sprite6148copy();
	this.mcEffect.parent = this;
	this.mcEffect.setTransform(246.9,-112.7,3.663,2.92,-14.8,0,0,-110,-279.9);

	this.doll = new lib.Symbol26();
	this.doll.parent = this;
	this.doll.setTransform(97.1,13.5,1,1,0,0,0,0.1,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.doll},{t:this.mcEffect}]}).wait(1));

	// chenar
	this.butoane = new lib.Symbol13();
	this.butoane.parent = this;
	this.butoane.setTransform(527,279,1,1,0,0,0,220,234);

	this.timeline.addTween(cjs.Tween.get(this.butoane).wait(1));

	// bg
	this.fundal = new lib.Symbol119();
	this.fundal.parent = this;
	this.fundal.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.fundal).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.6,-376.9,2620.1,1039.9);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.level1.visible=false;
		this.sndBtn.cursor = "pointer";
		this.levelpick.visible = false;


		var animInterLevels;
		createjs.Touch.enable(stage);
		this.goAnim = function(){
			this.animinterlevel.gotoAndPlay(1);
		}
		this.goNextScene = function(){
			switch(this.animInterLevels){
				case "cover":

					exportRoot.levelpick.visible = true;
					exportRoot.cover.visible = false;
					exportRoot.level1.resetgame();

				break;





					case "interlevel":
					exportRoot.level1.finishlevel();
				break;

				case "level1":
					exportRoot.level1.visible = true;
					exportRoot.levelpick.visible = false;
				exportRoot.level1.replay_but.visible=false;
				exportRoot.level1.moregames1.visible=false;
				exportRoot.level1.poza1.visible=false;
				exportRoot.level1.poza2.visible=false;
				exportRoot.levelpick.firstlevel.gotoAndStop(1);
				exportRoot.levelpick.secondlevel.gotoAndStop(1);

				break;

				case "level2":
					exportRoot.level1.visible=true;
				exportRoot.levelpick.visible = false;



				break;

				case "level3":
					exportRoot.level1.visible=true;
				exportRoot.levelpick.visible = false;




				break;



			}
		}

		//this.fadeInElement = function(arg){
		//	arg.alpha = 0;
		//		createjs.Tween.get(arg, { loop: false })
		//  .to({ alpha: 1 }, 500, createjs.Ease.getPowInOut(2));
		//}
		//this.fadeOutElement = function(arg){
		//	arg.alpha = 1;
		//		createjs.Tween.get(arg, { loop: false })
		//  .to({ alpha: 0 }, 500, createjs.Ease.getPowInOut(2));
		//}
		//this.nextFrame = function(arg , arg2){
		//	var nextFrameVar = arg.currentFrame + 1;
		//	if(arg2 == "play"){
		//		arg.gotoAndPlay(nextFrameVar);
		//	}else if(arg2 == "stop"){
		//		arg.gotoAndStop(nextFrameVar);
		//	}
		//}
this.showAds = function(){
    exportRoot.stopSnd();
    exportRoot.removeSnd();
        window[window.preroll.config.loaderObjectName].refetchAd(function(){
        exportRoot.startSnd();
    });
}
		// -- << more games



		/*function poza1function(event) {
			exportRoot.poza1link();
		}*/

		createjs.Touch.enable(stage);

		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
		if(isAndroid) {
			// Do something!
			// Redirect to Android-site?
			exportRoot.cover.googleplay.visible=true;
		}

		this.googleplayfunction = function () {
			window.open("market://search?q=pub:3GG Studio", "_blank");
		}


		this.moregamesfunction = function () {
			exportRoot.stopSnd();
			var gamename = 'girls-swimsuit-contest';
			var mainwebsite = '//www.playdora.com/';
			var stringHost = detect_parent();

			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=moregames&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		this.logofunction = function () {
			exportRoot.stopSnd();
			var gamename = 'girls-swimsuit-contest';
			var mainwebsite = '//www.playdora.com/';
			var stringHost = detect_parent();

			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=logo&utm_campaign=" + gamename;
			realClick(urlsite);
		}


		this.poza1link = function () {
			exportRoot.stopSnd();
			var gamename = 'girls-swimsuit-contest';
			var mainwebsite = '//www.playdora.com/game/6381/Snow_Queen_Real_Makeover!.html';
			var stringHost = detect_parent();

			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Snow_Queen_Real_Makeover&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		this.poza2link = function () {
			exportRoot.stopSnd();
			var gamename = 'girls-swimsuit-contest';
			var mainwebsite = '//www.playdora.com/game/6448/Do_you_wanna_build_a_snowman.html';
			var stringHost = detect_parent();

			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=snowman&utm_campaign=" + gamename;
			realClick(urlsite);
		}


		this.youtubelink = function () {
			exportRoot.stopSnd();
			var gamename = 'girls-swimsuit-contest';
			var mainwebsite = 'https://www.youtube.com/c/PrincessGamesCartoons';
			var stringHost = detect_parent();

			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=youtube-button&utm_campaign=" + gamename;
			realClick(urlsite);
		}



		exportRoot.cover.youtube.addEventListener("click", youtubefunctionhere.bind(this));
		function youtubefunctionhere(event) {
			exportRoot.youtubelink();
		}


		/*this.addthegame = function () {
			window.open("http://www.playrosy.com/ourgames.html?thegame=rapunzel-and-flynn-happy-family", "_blank");
		}*/

		function detect_parent() {
			var iframe = (parent !== window);
			var url = null;
			if (iframe) {
				url = document.referrer;
				ref = url.match(/:\/\/(.[^/]+)/)[1];
				return ref;
			}
			return "rosy";
		}
		exportRoot.cover.fullscreenBtn.addEventListener("mousedown", toggleFullScreen);
		function toggleFullScreen() {
		  var doc = window.document;
		  var docEl = doc.documentElement;

		  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
		  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

		  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
		    requestFullScreen.call(docEl);
		  }
		  else {
		    cancelFullScreen.call(doc);
		  }
		}
		var sparklesSound;

		var clickSound;

		var soundOn = 1;

		var isvisible = true;





		bgSnd = createjs.Sound.play("bgmusic", createjs.Sound.INTERRUPT_NONE);

		bgSnd.volume = 0.2;

		bgSnd.on("complete", handleComplete);



		exportRoot.sndBtn.addEventListener("mousedown", sndBtnF);

		function handleComplete() {

			if (soundOn == 1) {

				if (bgSnd != null) {

					bgSnd.play();

				}

			}

		}

		exportRoot.startSnd = function () {

			soundOn = 1;

			exportRoot.sndBtn.gotoAndStop(0);

			playBg();

		}
		exportRoot.removeSnd = function () {

			bgSnd = null;

		}


		function playBg() {

			if (bgSnd == null) {
				bgSnd = createjs.Sound.play("bgmusic", createjs.Sound.INTERRUPT_NONE);
				bgSnd.volume = 0.2;
				bgSnd.on("complete", handleComplete);

			} else {

				if (soundOn == 1) {

					bgSnd.play();

				} else {

					bgSnd.stop();

				}
			}

		}



		exportRoot.stopSnd = function () {

			if (bgSnd != null) {
				soundOn = 0;
				bgSnd.stop();
				exportRoot.sndBtn.gotoAndStop(1);

			}

		}

		function sndBtnF() {

			if (soundOn == 1) {

				soundOn = 0;

				exportRoot.sndBtn.gotoAndStop(1);

				exportRoot.stopSnd();

			} else {
				bgSnd = null;
				soundOn = 1;

				exportRoot.sndBtn.gotoAndStop(0);
				playBg();
			}

		}

		exportRoot.sparklesSound = function () {

			if (soundOn == 1) {

				sparklesSound = createjs.Sound.play("sparkles", createjs.Sound.INTERRUPT_NONE)

				sparklesSound.volume = 0.8;

			}

		}

		exportRoot.pigeonSound = function () {

			if (soundOn == 1) {

				sparklesSound = createjs.Sound.play("pigeonsound", createjs.Sound.INTERRUPT_NONE)

				sparklesSound.volume = 0.8;

			}

		}


		exportRoot.annaSound = function () {

			if (soundOn == 1 ) {
				annaSound = createjs.Sound.play("annaSound", createjs.Sound.INTERRUPT_NONE)
				annaSound.volume = 0.3;
			}
		}

		function rand(min, max, interval) {
			if (typeof (interval) === 'undefined') interval = 1;
			var r = Math.floor(Math.random() * (max - min + interval) / interval);
			return r * interval + min;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// animatie
	this.animinterlevel = new lib.Symbol49();
	this.animinterlevel.parent = this;
	this.animinterlevel.setTransform(400,-149,1,1,0,0,0,400,150);

	this.timeline.addTween(cjs.Tween.get(this.animinterlevel).wait(1));

	// butoane
	this.sndBtn = new lib.Symbol5();
	this.sndBtn.parent = this;
	this.sndBtn.setTransform(767.2,33.4,0.22,0.22,0,0,0,-203.3,221.7);

	this.timeline.addTween(cjs.Tween.get(this.sndBtn).wait(1));

	// level1
	this.level1 = new lib.Symbol11();
	this.level1.parent = this;
	this.level1.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.level1).wait(1));

	// intro
	this.levelpick = new lib.Symbol2();
	this.levelpick.parent = this;
	this.levelpick.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.levelpick).wait(1));

	// cover
	this.cover = new lib.Symbol1();
	this.cover.parent = this;
	this.cover.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-76.9,2893.6,1461.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
