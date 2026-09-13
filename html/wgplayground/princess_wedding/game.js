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
		{src:"images/game_atlas_.png?1552385771133", id:"game_atlas_"},
		{src:"images/game_atlas_2.png?1552385771135", id:"game_atlas_2"},
		{src:"sounds/BGM.mp3?1552385771207", id:"BGM"},
		{src:"sounds/stars.mp3?1552385771207", id:"stars"},
		{src:"sounds/mmm.mp3?1552385771207", id:"mmm"},
		{src:"sounds/finish.mp3?1552385771207", id:"finish"},
		{src:"sounds/btns.mp3?1552385771207", id:"btns"},
		{src:"sounds/wow.mp3?1552385771207", id:"wow"}
	]
};



lib.ssMetadata = [
		{name:"game_atlas_", frames: [[0,0,1200,900],[826,902,800,600],[0,902,824,632]]},
		{name:"game_atlas_2", frames: [[0,0,800,600],[802,0,545,840],[1282,1123,63,63],[0,842,843,214],[1199,1204,250,250],[743,1256,250,250],[1407,1463,155,155],[0,1487,155,155],[157,1499,155,155],[593,1508,155,155],[743,1058,100,100],[958,1526,100,100],[706,723,88,103],[1925,755,72,95],[1060,1526,115,85],[1903,1063,77,93],[1903,864,76,102],[264,790,55,50],[314,1551,50,52],[1818,267,78,49],[199,790,63,47],[314,1499,53,50],[1931,1568,44,44],[1060,1613,44,43],[1884,1568,45,52],[659,1462,52,40],[321,790,56,49],[809,1160,34,35],[1963,1257,35,36],[1650,1204,38,44],[792,1614,41,31],[750,1614,40,37],[1698,327,225,535],[1829,1568,53,48],[314,1605,53,36],[1903,1257,58,41],[1106,1613,55,31],[593,1462,64,37],[1925,394,73,125],[1925,267,75,125],[1925,638,70,115],[1925,521,72,115],[706,602,87,119],[1349,0,467,325],[750,1508,206,104],[575,1058,166,402],[387,1058,186,401],[0,1058,206,427],[1690,864,211,437],[208,1058,177,439],[1349,765,339,437],[845,842,352,412],[1349,327,347,436],[388,602,162,213],[1305,1456,100,276],[387,1461,101,252],[1183,1456,120,247],[1199,842,122,279],[490,1462,101,240],[995,1256,186,268],[0,602,197,238],[1451,1204,197,257],[1898,267,24,27],[1968,1158,30,34],[1650,1250,36,40],[490,1705,744,27],[1564,1591,263,37],[552,602,152,224],[1813,1303,169,263],[199,602,187,186],[1818,0,178,265],[1650,1303,161,286],[1903,968,80,93],[743,1160,64,90],[1199,1123,81,68],[1564,1463,55,105],[1903,1158,63,97]]}
];


// symbols:



(lib.bg2_source = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bg1 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bg2 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1copy = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap476 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap477 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap53 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bt_moregames1111 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bt_next = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bt_play = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bt_replayhover = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bt_soundoff = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bt_soundon = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.buchet1_1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.buchet1_2 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.buchet1_3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.buchet1_4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.buchet1_5 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.buchet2_1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.buchet2_2 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.buchet2_3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.buchet2_4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.buchet2_5 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.colier1_1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.colier1_2 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.colier1_3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.colier1_4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.colier1_5 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.colierraft1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.colierraft2 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.colierraft3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.colierraft4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.colierraft5 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.corp = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.ge1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.ge2 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.ge3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.ge4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.ge6 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.geanta1_1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.geanta1_2 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.geanta1_3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.geanta1_4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.geanta1_5 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.logoDaria = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.logoG = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.rochie1_1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.rochie1_2 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.rochie1_3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.rochie1_4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.rochie1_5 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.rochie1_6 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.rochie1_7 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.rochie1_8 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.rochie1_9 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.rochie2_1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.rochie2_2 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.rochie2_3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.rochie2_4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.rochie2_5 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.rochie2_6 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.rochie2_7 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.rochie2_8 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.star24 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.star30 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.star36 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.umerase = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.vazeflori = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.voal1_1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.voal1_2 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.voal1_3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.voal1_4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.voal1_5 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.voal2_1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.voal2_2 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.voal2_3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.voal2_4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.voal2_5 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.voaluricorp2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.voal1_1();
	this.instance.parent = this;

	this.instance_1 = new lib.voal1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17,2);

	this.instance_2 = new lib.voal1_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-26,-13);

	this.instance_3 = new lib.voal1_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8,7);

	this.instance_4 = new lib.voal1_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,224);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_moregames1111();
	this.instance.parent = this;
	this.instance.setTransform(110,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110,-9,155,155);


(lib.Symbol105copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_moregames1111();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol105copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_moregames1111();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_moregames1111();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_play();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_replayhover();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol76copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_next();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_next();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.703,0.703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,109);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgaeAiJIAArVQAVgVATgZIA8geQA9hWAthmQAhhMAMhWIAdgKIAphkIA7goIAKhkIApgyIAAgKIAAgKQgBgKAFgHQAFgIAKgFIADgoQABgVALgQQAGgIAJgFQAAgUAGgSQAJghAUgkQARgeASgNIAUg7IAAgyQA7hhA5hgQAshKAphIIAegKIATgxQARgBAIgIQAJgMAIgTIAJgUIAKirQBwjTgPkEQgRkrAAk/QjHjJimi4QieixiRjvMAhwAAAQgrCgALC7QgUBCgdA/QhUC4gTDQQgLCEgJCNIgUAdIAAChQBGDVBmDXQACAGAGAGIAKB3IAdA9QBPA6AcBcQADAKAAAKQAmAcAaAeQAJALgDAdIApAnIBFCNIAfAKQBQBSAmB2QAJAdACAfIBQBjIAeEsQATAiAHAbQAJAeAZAJQATBAAdA+QAKAWANAWIAAAoIBGBQQAVA9AaBAQAJAUAYAPQgBBBAdA4QAHAOAFAPIA8AiIAAI3g");
	mask.setTransform(169.5,218.5);

	// Layer 1 copy
	this.instance = new lib.rochie1_6();
	this.instance.parent = this;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,339,437);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgbfAgMIAAx1IAUgKIAKgoQAhgkAogpQAygzAIhIIAdg8IAegKIAfgyQABhDAZg7QAqhlBHg+QAAgKADgKQADgKAHgIQACgDAGAAIAKgxIAngUQABgGACgCQAcgdAQgoQAJgYgFgeQAjgtAVg2QAQgoASgnIAUgTIAAgpQAsg2AihNQAnhZAMhjIAzgzIAngUQAqhRAGh2QAPkmgqkKIhGhvQAGg/gagvQgyhZgehbQgdg3gwg8QgXgegLgjIgegUQgJgsgkguIdXAAQg/CtAMDcQAHByALCEQAiGACzFLQAYAuABA8QAOAuAQAWQAaAgAiAfIAKAxQAjAuAMA3QAKAmAXAfQgBAfACAeQACAqAaARIAAA8IAzAzQgHAaAJANQAfAtAvAOQAcBaAuBPQAiA5AfBAIAAAxIAsA6QAbAlATBBIAKBQQAeAWAUArQAXAyAlAjQBnCzBtCgQANATAPAUIAANpg");
	mask.setTransform(176,206);

	// Layer 1
	this.instance = new lib.rochie1_7();
	this.instance.parent = this;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,352,412);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgbGAiDIAAs0QAHgTADgVIAegKQAyhCAZg5QAXg0gIhBQALgKADgMQAIgVALgOQADgDAFAAQALg5APg2QAIgaAagXQALg6AfgyQANgWgGgeIApg8IAekOQAEgJAIgDQATgGgBgVIgBgKQBEgwAug1QBOhcATiRQAZgrAbg4QAPggAhgoIAAgnQALgHAOgTQALgQgFgSIgCgKIAog9IApgnQAAgQADgOQAIgYALgjQAIgWAJgUIAzgdQAAgLAEgDQAUgOABgWIAEgBQAAhVAKhTIAKhcQgNgogGg7Qgomci+lcIgKg9QhEgog0gkQhCgug2hOQgBgEgBgFQgehYgrhTMAhRAAAQhUDyBUD6QAQAuAbAgQAKFIBNE6QAKApAYAlIAeDdQBMDPBKDRQAPAuAFAvIAUAVIAAAxIATAfQgNC+BgCLQAkAzAgA5QgFA7APA2QAPA6AjAxIAKB4QAPAKAKARQARAegDA1QAjAnAcAqQAmA4AJA/QA2A+AbBVQAUA8AeArQAJATADAVQAFAgAWASQAGBLAZA2IAAKpg");
	mask.setTransform(173.5,218);

	// Layer 1
	this.instance = new lib.rochie1_8();
	this.instance.parent = this;

	this.instance_1 = new lib.rochie1_8();
	this.instance_1.parent = this;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,347,436);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(0,-13,1.011,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ge6();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13,64,63);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-6,-6,1.043,0.807);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ge4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,65.7,50.9);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-20,-11,1.244,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ge3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-11,78.4,63);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-1,-9,0.856,0.868);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ge2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-9,54,54.7);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(0,-8,0.848,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ge1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8,53.5,63);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-5,-5,0.878,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.colierraft5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,55.3,63);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-14,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.colierraft4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-6,63,63);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.colierraft3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,0,63,63);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-14,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.colierraft2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-4,63,63);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-14,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.colierraft1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-5,63,63);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1copy();
	this.instance.parent = this;
	this.instance.setTransform(238,88,0.593,0.593);

	this.instance_1 = new lib.bg2_source();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.corp();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,225,535);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap476();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An3SwMAAAglfIJ8AAQAUAsgFA/IAAAAQgBAKABALIAAAAIAMARIAAAhIAMARQAOA1gHA2IAAAAQgBAKgKgCIAAAAIAAANIgUAQIgNAAIghAUIgIARQAAATgFAOIAAAAQgEAKgEADIAAAAIAAA5IgIAFQgCAqAHAzIAAAAQABAJgBAOIAAAAQAWBLACBVIAAAAIAAAeIAAAAIAQAYIgDBjIAQAZQAQBFACBMIAAAAIgBAMIAAAAIAIAEIAIAiQAZBnAnBmIAAAAQACAEAAAHIAAAAQAIAHAEANIAAAAQADAIgDAJIAAAAIAJAJIAEAcIAVAhQAIBHApAxIAAAAQAGAHgBAOIAAAAIAIAEQAbAvANA0IAAAAQACAIgBAJIAAAAQAOAWAGAcIAAAAIABADIAAAAIAYAyQALA4ATAxIAAAAQADAIgDALIAAAAIAHANQALA5AgAtIAAAAIAAFUgACoyvIFQAAIAAHbg");
	mask.setTransform(50.5,120);

	// Layer 1
	this.instance = new lib.rochie2_5();
	this.instance.parent = this;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,240);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rochie2_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,279);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApWTSMAAAgmjIMwAAQgWBkgJBzIAAAAQgCAdgGAbIAAAAIgMAKIgKBqQgVAiAAAwIAAAAIgBA3IAAAAQgWArARAvIAAAAQAEANABANIAAAAIAWAoIAFBIIAMALIAKBMQABAAABABQAAAAABAAQAAAAAAAAQABABAAAAIAAAAQAIALgBAPIAAAAIAMAMIgBAFIAAAAQgBAPANAHIAAAAIAAA4QAdAoAJA0IAAAAQAEAUACAUIAAAAIALAFIAMB1IAAAAQAEAfARARIAAAAIAAAWIAKAcQAFBTAaBKIAAAAIAAADIAAAAIAMAIIAQAcIAAAkQAJASAJAQIAAAAQAFAGAFABIAAAAIADAOIAIAFIALAyIASAXQAHAYAFAZIAAAAIAGAIIABAKIAAAAQADA4AVAsIAAAAIABAIIAAAAQABAFADAEIAAAAIAAAOQAcAnAUApIAAAAQApBXgFBoIAAAAQAEACADAEIAAAAIARATIAAAAIAAEmgAJNzRIAKAAIAAAeIgKgeg");
	mask.setTransform(60,123.5);

	// Layer 1
	this.instance = new lib.rochie2_3();
	this.instance.parent = this;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,247);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rochie2_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,252);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rochie2_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,276);


(lib.posete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.geanta1_1();
	this.instance.parent = this;
	this.instance.setTransform(8,-7);

	this.instance_1 = new lib.geanta1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,-8);

	this.instance_2 = new lib.geanta1_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12,-6);

	this.instance_3 = new lib.geanta1_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6,-6);

	this.instance_4 = new lib.geanta1_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,-7,73,125);


(lib.lvl2voal5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-1,0,1.009,1.584);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.voal2_5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,64,99.8);


(lib.lvl2voal4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.244,1.795);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.voal2_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.4,113.1);


(lib.lvl2voal3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(0,-6,1.244,1.49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.voal2_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,81,93.9);


(lib.lvl2voal2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(1,-2,0.882,1.49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.voal2_2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,64,93.9);


(lib.lvl2voal1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1,1.244,1.49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.voal2_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,81,94);


(lib.lvl2buchet5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-4,-9,0.99,1.236);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.buchet2_5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-9,62.4,77.9);


(lib.lvl2buchet4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(0,-9,0.99,1.236);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.buchet2_4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9,63,77.9);


(lib.lvl2buchet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(16,-9,0.99,1.236);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.buchet2_3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9,78.4,77.9);


(lib.lvl2buchet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.99,1.236);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.buchet2_2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.4,77.9);


(lib.lvl2buchet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-7,-9,0.99,1.236);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.buchet2_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-9,62.4,77.9);


(lib.lvl1rochie8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rochie2_8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197,257);


(lib.lvl1rochie7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvYSlIAAsgQAegUAQgfIAJgZIAAgMIAHgNQAMgVABgYIAVgpIAAgNIAIgMIAAgUQAhg9AygvIAIgFQAwgmAeg+IAIgyIALgOQA4hCA2g8IAHg7IARggIAAgNQAEgEACgFQAFgWAOgCIAEgQIANgIQAliMAliGIAIgMIAEgcIAVgdIAAgZIgIgMIgCgiQgCg2AYgtIAAgRIAIgMIABgtQADg+AegyIABgUQgBgNAMAEIABgIIAKguIJbAAQANAfgBAjIAAAyIgOAPQgJALgTAHIAAANIgIAEIgMAYQgLAFgGAIQgGAKgCALIgRAMIgHAQQgBBSAVBCQAHAbACAcIAIANIAAAQIApBCIAAAMIAEABQACACABAGIABAIQARAhASAbQAOATAFAYIAIAEIAdBDIAFAYQAJAJAIAMQAIANADALIAJAFIADAMIAJAFQA+BZA4BjQAJAPABAYIAhA5IAUAVIAJAEQAwBBAbA9IAIAVIAIAEQASAiAdAkQAPASAIAUIAIADIAIARQBDBcAvBwQALAbAQAVQAJA0ATAkQAJATARARQADAeAHAWQAEAMAGAKIAACtIgDAKIgNAHIAAARIgMAQIAAAaQgHAQgSAJIgZALIgJANQgQADgOALQgLAHgEAQIglAhQgcAXgrAeQgUANgIARQgTAHgUAQQgNAJgKANg");
	mask.setTransform(98.5,119);

	// Layer 1
	this.instance = new lib.rochie2_7();
	this.instance.parent = this;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197,238);


(lib.lvl1rochie6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuhU8IAAqPQAghdAIhnIAVg8QAUgLAHgUQAJgcADgfQAagPATgUQAsgqAVgrIApgUQgDgiAKgSQB4jFAhkDQATgLAGgUQANgrAVgaIAfm4QAUgVABgcQADjdgDjcII8AAIAYAzQgCBrgZBUQgHAVgPARIgKDnQgYANADAaQACAUgBAVIAUAeIAAAnIAUAVIAABuIA8BaIAACpQAnA8AsAwQAMANgFAdIAKAAQARAFADAZQAfAUAYAZQAEAFALAAIAxCKQBtBwBLCNQACAFgGAWIAfAoIAeAKIBGBQIAAAoQA1COB1BTIAAJKg");
	mask.setTransform(93,134);

	// Layer 1
	this.instance = new lib.rochie2_6();
	this.instance.parent = this;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,268);


(lib.logoggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logoG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206,104);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhAYAxYMAAAhivMCAxAAAMAAABivg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412.1,-316,824.3,632.2);


(lib.Tween1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap53();
	this.instance.parent = this;
	this.instance.setTransform(-412.1,-316);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412.1,-316,824,632);


(lib.Symbol50copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		c.Sound.play("BGM", c.Sound.INTERRUPT_NONE, 0, 0, -1, 0.4);
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();

		c.Sound.stop("BGM");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 3
	this.instance = new lib.bt_soundon();
	this.instance.parent = this;

	this.instance_1 = new lib.bt_soundoff();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Symbol15copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap477();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logoDaria();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,467,325);


(lib.Coliere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.colier1_1();
	this.instance.parent = this;

	this.instance_1 = new lib.colier1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,-2);

	this.instance_2 = new lib.colier1_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,-7);

	this.instance_3 = new lib.colier1_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3,-2);

	this.instance_4 = new lib.colier1_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.buchetecorp2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.buchet1_1();
	this.instance.parent = this;

	this.instance_1 = new lib.buchet1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,9);

	this.instance_2 = new lib.buchet1_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-25,19);

	this.instance_3 = new lib.buchet1_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10,26);

	this.instance_4 = new lib.buchet1_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,103);


(lib.voalurilevel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.voal5 = new lib.lvl2voal5();
	this.voal5.parent = this;
	this.voal5.setTransform(-152.5,163,1,1,0,0,0,32.5,39);

	this.voal3 = new lib.lvl2voal3();
	this.voal3.parent = this;
	this.voal3.setTransform(-340.5,170.5,1,1,0,0,0,32.5,35.5);

	this.voal4 = new lib.lvl2voal4();
	this.voal4.parent = this;
	this.voal4.setTransform(-100,145.5,1,1,0,0,0,31,35.5);

	this.voal2 = new lib.lvl2voal2();
	this.voal2.parent = this;
	this.voal2.setTransform(-276,176,1,1,0,0,0,31,37);

	this.voal1 = new lib.lvl2voal1();
	this.voal1.parent = this;
	this.voal1.setTransform(-218,164,1,1,0,0,0,36,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.voal1},{t:this.voal2},{t:this.voal4},{t:this.voal3},{t:this.voal5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-373,110,320.4,120.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.poseta5 = new lib.Symbol36();
	this.poseta5.parent = this;
	this.poseta5.setTransform(-107.5,209,1,1,0,0,0,32.5,39);

	this.poseta3 = new lib.Symbol33();
	this.poseta3.parent = this;
	this.poseta3.setTransform(-324.5,207.5,1,1,0,0,0,32.5,35.5);

	this.poseta4 = new lib.Symbol34();
	this.poseta4.parent = this;
	this.poseta4.setTransform(-214,213.5,1,1,0,0,0,31,35.5);

	this.poseta2 = new lib.Symbol32();
	this.poseta2.parent = this;
	this.poseta2.setTransform(-268,211,1,1,0,0,0,31,37);

	this.poseta1 = new lib.Symbol31();
	this.poseta1.parent = this;
	this.poseta1.setTransform(-155,207,1,1,0,0,0,36,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.poseta1},{t:this.poseta2},{t:this.poseta4},{t:this.poseta3},{t:this.poseta5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-377,157,301,69);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.lantic4 = new lib.Symbol22();
	this.lantic4.parent = this;
	this.lantic4.setTransform(119,175,1,1,0,0,0,51,58);

	this.lantic5 = new lib.Symbol23();
	this.lantic5.parent = this;
	this.lantic5.setTransform(291,173,1,1,0,0,0,51,54);

	this.lantic1 = new lib.Symbol19();
	this.lantic1.parent = this;
	this.lantic1.setTransform(239.5,177,1,1,0,0,0,50.5,58);

	this.lantic2 = new lib.Symbol20();
	this.lantic2.parent = this;
	this.lantic2.setTransform(182,172,1,1,0,0,0,51,54);

	this.lantic3 = new lib.Symbol21();
	this.lantic3.parent = this;
	this.lantic3.setTransform(55.5,152,1,1,0,0,0,44.5,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lantic3},{t:this.lantic2},{t:this.lantic1},{t:this.lantic5},{t:this.lantic4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,107,293.3,70);


(lib.Symbol8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Symbol15copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.3,71.3,0.75,0.75,0,0,0,95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.rochiilevel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.umerase();
	this.instance.parent = this;
	this.instance.setTransform(-31,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.rochie1 = new lib.Symbol2();
	this.rochie1.parent = this;
	this.rochie1.setTransform(648,-13);

	this.rochie3 = new lib.Symbol4();
	this.rochie3.parent = this;
	this.rochie3.setTransform(-51,-9);

	this.rochie5 = new lib.Symbol6();
	this.rochie5.parent = this;
	this.rochie5.setTransform(79,95,1,1,0,0,0,47,105);

	this.rochie7 = new lib.lvl1rochie7();
	this.rochie7.parent = this;
	this.rochie7.setTransform(47,-11);

	this.rochie8 = new lib.lvl1rochie8();
	this.rochie8.parent = this;
	this.rochie8.setTransform(109,-24);

	this.rochie4 = new lib.Symbol5();
	this.rochie4.parent = this;
	this.rochie4.setTransform(575,-14);

	this.rochie6 = new lib.lvl1rochie6();
	this.rochie6.parent = this;
	this.rochie6.setTransform(487,-10);

	this.rochie2 = new lib.Symbol3();
	this.rochie2.parent = this;
	this.rochie2.setTransform(477,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rochie2},{t:this.rochie6},{t:this.rochie4},{t:this.rochie8},{t:this.rochie7},{t:this.rochie5},{t:this.rochie3},{t:this.rochie1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-24,799,289);


(lib.rochiicorp2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1));

	// Layer 1
	this.instance = new lib.rochie1_1();
	this.instance.parent = this;

	this.instance_1 = new lib.rochie1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);

	this.instance_2 = new lib.rochie1_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-26,-26);

	this.instance_3 = new lib.rochie1_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-29,-29);

	this.instance_4 = new lib.rochie1_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3,-35);

	this.instance_5 = new lib.Symbol56();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-105,-29);

	this.instance_6 = new lib.Symbol55();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-109,-5);

	this.instance_7 = new lib.Symbol54();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-117,-28);

	this.instance_8 = new lib.rochie1_9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-32,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,402);


(lib.logoDariaGames = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(210.5,197.5,1,1,0,0,0,210.5,197.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},29).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,467,325);


(lib.corp2clipit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(112.5,265.5,1,1,0,0,0,112.5,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,225,535);


(lib.corp2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Buchete
	this.flori = new lib.buchetecorp2();
	this.flori.parent = this;
	this.flori.setTransform(-36,38);

	this.timeline.addTween(cjs.Tween.get(this.flori).wait(1));

	// Coliere
	this.lantic = new lib.Coliere();
	this.lantic.parent = this;
	this.lantic.setTransform(105,127.5,1,1,0,0,0,27,35.5);

	this.timeline.addTween(cjs.Tween.get(this.lantic).wait(1));

	// Posete
	this.poseta = new lib.posete();
	this.poseta.parent = this;
	this.poseta.setTransform(148.5,227.5,1,1,0,0,0,46.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.poseta).wait(1));

	// Rochii
	this.rochie = new lib.rochiicorp2();
	this.rochie.parent = this;
	this.rochie.setTransform(99,221,1,1,0,0,0,56,96);

	this.timeline.addTween(cjs.Tween.get(this.rochie).wait(1));

	// Corp2
	this.instance = new lib.corp2clipit();
	this.instance.parent = this;
	this.instance.setTransform(70.5,253,1,1,0,0,0,70.5,253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Voaluri
	this.voal = new lib.voaluricorp2();
	this.voal.parent = this;
	this.voal.setTransform(115.5,144,1,1,0,0,0,93.5,143);

	this.timeline.addTween(cjs.Tween.get(this.voal).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,0,261,535);


(lib.buchetelevel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.flori5 = new lib.lvl2buchet5();
	this.flori5.parent = this;
	this.flori5.setTransform(-239,149);

	this.flori3 = new lib.lvl2buchet3();
	this.flori3.parent = this;
	this.flori3.setTransform(-346.5,189.5,1,1,0,0,0,32.5,35.5);

	this.flori4 = new lib.lvl2buchet4();
	this.flori4.parent = this;
	this.flori4.setTransform(-154,189.5,1,1,0,0,0,31,35.5);

	this.flori2 = new lib.lvl2buchet2();
	this.flori2.parent = this;
	this.flori2.setTransform(-95,188,1,1,0,0,0,31,37);

	this.flori1 = new lib.lvl2buchet1();
	this.flori1.parent = this;
	this.flori1.setTransform(-297,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flori1},{t:this.flori2},{t:this.flori4},{t:this.flori3},{t:this.flori5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-379,140,315.4,88.9);


(lib.animmcc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 1
	this.instance = new lib.Tween1copy2("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0},10).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412.1,-316,824,632);


// stage content:



(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		exportRoot.btnSound.cursor = "pointer";

		createjs.Touch.enable(stage);

		var bgSnd, btnSndEffect101, btnSndEffect102, btnSndEffect103, wowEffect1;
		var soundOn = 1;
		var onSound = true;
		var desktop = true;
		var cobrand = false;
		var gamename = 'princess-wedding-dressup';
		var mainwebsite = '//www.playdora.com';
		var thumb1 = '//www.playdora.com/game/5317/Miraculous_Hero_Closet.html';
		var thumb2 = '//www.playdora.com/game/5461/Miraculous_Hero_Design_Rivals.html';

		var thumb3 = '//www.playdora.com';

		this.showAds = function(){
	    exportRoot.stopSnd();
	    exportRoot.removeSnd();
	    window[window.preroll.config.loaderObjectName].refetchAd(function(){
	        exportRoot.startSnd();
	    });
	}


		var cobrandurl = 'http://www.girlsgogames.com/';
		var stringHost = detect_parent();
		var QueryString = function () {
			var query_string = {};
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split("=");
				if (typeof query_string[pair[0]] === "undefined") {
					query_string[pair[0]] = decodeURIComponent(pair[1]);
				} else if (typeof query_string[pair[0]] === "string") {
					var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
					query_string[pair[0]] = arr;
				} else {
					query_string[pair[0]].push(decodeURIComponent(pair[1]));
				}
			}
			return query_string;
		}();

		if (QueryString.part == "ggg") {
			cobrand = true;
		}
		exportRoot.partlogo.visible = false;
		if (cobrand) {
			exportRoot.partlogo.visible = true;
		}
		function detect_parent() {
			var iframe = (parent !== window);
			var url = null;
			if (iframe) {
				url = document.referrer;
				ref = url.match(/:\/\/(.[^/]+)/)[1];
				return ref;
			}
			return "daria";
		}

		if (stringHost == "daria") {
			stringHost = window.location.hostname;
		}

		window.mobilecheck = function () {
			var check = false;
			(function (a) {
				if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
			})(navigator.userAgent || navigator.vendor || window.opera);
			return check;
		}
		if (window.mobilecheck()) {
			desktop = false;
		}
		exportRoot.desktopFn = function () {
			if (desktop) {
				return true;
			} else {
				return false;
			}
		}
		if (typeof (isvisible) != "undefined") {
			if (isvisible) {
				bgSnd = createjs.Sound.play("BgMusic", createjs.Sound.INTERRUPT_NONE);
				bgSnd.volume = 0.2;
				bgSnd.on("complete", handleComplete);
			}
		}
		function handleComplete() {
			if (soundOn === 1) {
				if (bgSnd != null) {
					bgSnd.play();
				}
			}
		}

		exportRoot.startSnd = function () {
			soundOn = 1;
			exportRoot.btnSound.gotoAndStop(0);
			playBg();
		}
		exportRoot.removeSnd = function () {
			bgSnd = null;
		}
		exportRoot.checkSound = function () {
			if (soundOn === 1) {
				exportRoot.stopSnd();
			}
		}
		exportRoot.checkSound2 = function () {
			if (onSound) {
				exportRoot.startSnd();
			}
		}
		btnEffect = function () {
			if (soundOn == 1) {
				btnSndEffect101 = createjs.Sound.play("btparticule", createjs.Sound.INTERRUPT_NONE)
				btnSndEffect101.volume = 0.8;
			}
		}
		cameraClick = function () {
			if (soundOn == 1) {
				btnSndEffect102 = createjs.Sound.play("cameraClick", createjs.Sound.INTERRUPT_NONE)
				btnSndEffect102.volume = 0.4;
			}
		}
		finishEffect = function () {
			if (soundOn == 1) {
				createjs.Sound.play("sndfinish", createjs.Sound.INTERRUPT_NONE);
			}
		}
		finishEffect2 = function () {
			if (soundOn == 1) {
				createjs.Sound.play("sndfinish2", createjs.Sound.INTERRUPT_NONE);
			}
		}

		hornCar = function () {
			if (soundOn == 1) {
				btnSndEffect103 = createjs.Sound.play("carHorn", createjs.Sound.INTERRUPT_NONE)
				btnSndEffect103.volume = 0.4;
			}
		}
		wow = function () {
			if (soundOn == 1) {
				wowEffect1 = createjs.Sound.play("wow", createjs.Sound.INTERRUPT_NONE)
				wowEffect1.volume = 0.8;
			}
		}
		exportRoot.btnSound.addEventListener("mousedown", sndBtnF);

		function sndBtnF() {
			if (soundOn == 1) {
				soundOn = 0;
				onSound = false;
				exportRoot.btnSound.gotoAndStop(1);
				exportRoot.stopSnd();
			} else {
				soundOn = 1;
				exportRoot.btnSound.gotoAndStop(0);
				onSound = true;
			}
			playBg();
		}

		function playBg() {
			if (bgSnd == null) {
				bgSnd = createjs.Sound.play("BgMusic", createjs.Sound.INTERRUPT_NONE);
				bgSnd.volume = 0.2;
				bgSnd.on("complete", handleComplete);
			}
			if (soundOn == 1) {
				bgSnd.play();
			} else {
				bgSnd.stop();
			}
		}

		exportRoot.stopSnd = function () {
			if (bgSnd != null) {
				bgSnd.stop();
				soundOn = 0;
				exportRoot.btnSound.gotoAndStop(1);
			}
			/*if (btnSoudEffect1 != null) {
				btnSoudEffect1.stop();
			}
			if (btnSoudEffect3 != null) {
				btnSoudEffect3.stop();
			}*/
			if (wowEffect1 != null) {
				wowEffect1.stop();
			}
			if (btnSndEffect101 != null) {
				btnSndEffect101.stop();
			}
			if (btnSndEffect102 != null) {
				btnSndEffect102.stop();
			}
			if (btnSndEffect103 != null) {
				btnSndEffect103.stop();
			}
		}


		exportRoot.fl_MoreGames = function (linktype, content) {
			exportRoot.stopSnd();

			if (linktype == "thumb" && content == "thumb1") {
				mainwebsite1 = thumb1;
				utm_content = content;
			} else if (linktype == "thumb" && content == "thumb2") {
				mainwebsite1 = thumb2;
				utm_content = content;
			} else if (linktype == "thumb" && content == "thumb3") {
				mainwebsite1 = thumb3;
				utm_content = content;
			} else if (linktype == "moregames") {
				mainwebsite1 = mainwebsite;
				utm_content = "moregames-" + content;
			} else if (linktype == "logo") {
				mainwebsite1 = mainwebsite;
				utm_content = "logo-" + content;
			} else if (linktype == "cobrand") {
				mainwebsite1 = cobrandurl;
				utm_content = content;
			}

			var urlsite = mainwebsite1 + "?utm_source=" + stringHost + "&utm_medium=HTML5&utm_content=" + utm_content + "&utm_campaign=" + gamename;
			if (typeof (realClick) != "undefined") {
				realClick(urlsite);
			} else {
				window.open(urlsite, "_blank");
			}
		}

		//Start Particles
		//if (desktop) {
			exportRoot.stars = function (place, x, y, images, points, life, speed) {
				points = points ? points : 50;
				life = life ? life : 20;
				speed = speed ? 50 - speed : 33;
				effect = "linear";
				images = images.split(",");
				exportRoot.starsData = {};
				exportRoot.starsData.instances = [];
				var ci = exportRoot.starsData.instances.length;
				exportRoot.starsData.instances[ci] = {};
				var instance = exportRoot.starsData.instances[ci];
				instance.effects = [];
				instance.place = place;
				instance.ci = ci;
				instance.points = [];
				for (var i = 0; i <= points; i++) {
					point = {
						dir: Math.random() * 2 * Math.PI,
						speed: Math.random() * 1 + 2,
						life: Math.random() * 10 + life,
						cordX: x,
						cordY: y,
						alive: true
					}
					var cimg = images[Math.floor(Math.random() * images.length)];
					point.mc = eval("new lib." + cimg + "();");
					point.mc.x = point.cordX;
					point.mc.y = point.cordY;
					instance.place.addChild(point.mc);
					instance.points[instance.points.length] = point;
				}
				instance.effects["linear"] = function (point) {
					point.incX = Math.cos(point.dir) * point.speed;
					point.incY = Math.sin(point.dir) * point.speed;
					return point;
				}
				instance.update = function () {
					clearInterval(instance.timer);
					for (var i in instance.points) {
						cords = instance.effects[effect](instance.points[i]);
						instance.points[i] = cords;
						instance.points[i].life--;
						instance.points[i].cordX += cords.incX;
						instance.points[i].cordY += cords.incY;
						instance.points[i].mc.x += cords.incX;
						instance.points[i].mc.y += cords.incY;
						if (instance.points[i].life <= 0) {
							instance.points[i].alive = false;
						}
						if (!instance.points[i].alive) {
							instance.points[i].mc.alpha -= 0.2;
						}
						if (instance.points[i].life <= -5) {
							instance.place.removeChild(instance.points[i].mc);
							instance.points.splice(i, 1);
						}
					}
					if (instance.points.length > 0) {
						instance.timer = setInterval(instance.update, speed);
					} else {
						clearInterval(instance.timer);
						exportRoot.starsData.instances.splice(instance.ci, 1);
					}
				}
				instance.timer = setInterval(instance.update, speed);
			}
		//}
		// End Particles


		function saveImage(stage, name) {
			if(typeof name == "undefined") name = gamename+".jpg";
			stage.update();
			dataURL = $("#canvas")[0].toDataURL("image/jpeg");
			$("body").append('<a id="saveAsImage" download="'+name+'" href="'+dataURL+'"></a>');
			$("#saveAsImage").css({
				display: "block",
				position: "absolute",
				top: $("#canvas").offset().top,
				left: $("#canvas").offset().left,
				width: $("#canvas").width(),
				height: $("#canvas").height()
			});
			$("#saveAsImage")[0].click();
			$("#saveAsImage").remove();
		}





		///LINKS BTNS



		//COVER
		exportRoot.moreCOVER.addEventListener("click", exportRoot.fl_MoreGames.bind(this, "moregames", "cover"));
		exportRoot.logo.addEventListener("click", exportRoot.fl_MoreGames.bind(this, "logo", "cover"));
		exportRoot.partlogo.addEventListener("click", exportRoot.fl_MoreGames.bind(this, "cobrand", "ggg"));


		//LEVEL1
		exportRoot.moreLEV1.addEventListener("click", exportRoot.fl_MoreGames.bind(this, "moregames", "level1"));

		//LEVEL2
		exportRoot.moreLEV2.addEventListener("click", exportRoot.fl_MoreGames.bind(this, "moregames", "level2"));

		//FINAL
		exportRoot.moreEND.addEventListener("click", exportRoot.fl_MoreGames.bind(this, "moregames", "final"));

		exportRoot.thumb1.addEventListener("click", exportRoot.fl_MoreGames.bind(this, "thumb", "thumb1"));
		exportRoot.thumb2.addEventListener("click", exportRoot.fl_MoreGames.bind(this, "thumb", "thumb2"));
		this.stop();

		exportRoot.animMc.gotoAndPlay(1);

		exportRoot.playBut.cursor = "pointer";
		exportRoot.moreCOVER.cursor = "pointer";
		exportRoot.logo.cursor = "pointer";



		var cobrand = false;
		var QueryString = function () {
			var query_string = {};
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split("=");
				if (typeof query_string[pair[0]] === "undefined") {
					query_string[pair[0]] = decodeURIComponent(pair[1]);
				} else if (typeof query_string[pair[0]] === "string") {
					var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
					query_string[pair[0]] = arr;
				} else {
					query_string[pair[0]].push(decodeURIComponent(pair[1]));
				}
			}
			return query_string;
		}();

		if (QueryString.part == "ggg") {
			cobrand = true;
		}
		exportRoot.partlogo.visible = false;
		if (cobrand) {
			exportRoot.partlogo.visible = true;
		}





		buildGame();


		function buildGame() {

			stage.enableMouseOver();

			c = createjs;
			createjs.Touch.enable(stage);




		}

		/*createjs.Tween.get(exportRoot.playBut, {
			loop: true
		}).to({
			y: 390
		}, 2000, createjs.Ease.getPowInOut(1.5)).to({
			y: 386.7
		}, 2000, createjs.Ease.getPowInOut(1.5));*/


		createjs.Tween.get(exportRoot.moreCOVER, {
			loop: true
		}).to({
			y: 527
		}, 2000, createjs.Ease.getPowInOut(1.5)).to({
			y: 530
		}, 2000, createjs.Ease.getPowInOut(1.5));



		this.playBut.addEventListener("click", functiaPlay.bind(this));

		function functiaPlay() {

		exportRoot.showAds();
			exportRoot.play();


		}


		var sparklesSound;

		exportRoot.sparklesSound = function () {
			if (exportRoot.btnSound.currentFrame == 0) {
				sparklesSound = createjs.Sound.play("stars", createjs.Sound.INTERRUPT_NONE)
				sparklesSound.volume = 0.8;
			}
		}

		var finishSound;



		exportRoot.finishSound = function () {

			if (exportRoot.btnSound.currentFrame == 0) {
				finishSound = createjs.Sound.play("finish", createjs.Sound.INTERRUPT_NONE)
				finishSound.volume = 0.8;
			}


		}


		var btnsSound;



		exportRoot.btnsSound = function () {
			if (exportRoot.btnSound.currentFrame == 0) {
				btnsSound = createjs.Sound.play("btns", createjs.Sound.INTERRUPT_NONE)
				btnsSound.volume = 0.8;
			}
		}



		var wowSound;



		exportRoot.wowSound = function () {
			if (exportRoot.btnSound.currentFrame == 0) {
				wowSound = createjs.Sound.play("wow", createjs.Sound.INTERRUPT_NONE)
				wowSound.volume = 0.8;
			}
		}


		var mSound;



		exportRoot.mSound = function () {
			if (exportRoot.btnSound.currentFrame == 0) {
				mSound = createjs.Sound.play("mmm", createjs.Sound.INTERRUPT_NONE)
				mSound.volume = 0.8;
			}
		}
	}
	this.frame_1 = function() {
		this.stop();

		exportRoot.animMc.gotoAndPlay(1);
		exportRoot.doll.gotoAndStop(7);

		exportRoot.doll.poseta.visible = false;
		exportRoot.doll.lantic.visible = false;
		exportRoot.doll.voal.visible = false;
		exportRoot.doll.poseta.visible = false;
		exportRoot.doll.flori.visible = false;
		exportRoot.doll.rochie.gotoAndStop(8);


		/////MOUSE OVER


		exportRoot.rochieMc.rochie1.addEventListener("mouseover", mouseOverFun);
		exportRoot.rochieMc.rochie1.addEventListener("mouseout", mouseOutFun);
		exportRoot.rochieMc.rochie2.addEventListener("mouseover", mouseOverFun);
		exportRoot.rochieMc.rochie2.addEventListener("mouseout", mouseOutFun);
		exportRoot.rochieMc.rochie3.addEventListener("mouseover", mouseOverFun);
		exportRoot.rochieMc.rochie3.addEventListener("mouseout", mouseOutFun);
		exportRoot.rochieMc.rochie4.addEventListener("mouseover", mouseOverFun);
		exportRoot.rochieMc.rochie4.addEventListener("mouseout", mouseOutFun);
		exportRoot.rochieMc.rochie5.addEventListener("mouseover", mouseOverFun);
		exportRoot.rochieMc.rochie5.addEventListener("mouseout", mouseOutFun);
		exportRoot.rochieMc.rochie6.addEventListener("mouseover", mouseOverFun);
		exportRoot.rochieMc.rochie6.addEventListener("mouseout", mouseOutFun);
		exportRoot.rochieMc.rochie7.addEventListener("mouseover", mouseOverFun);
		exportRoot.rochieMc.rochie7.addEventListener("mouseout", mouseOutFun);
		exportRoot.rochieMc.rochie8.addEventListener("mouseover", mouseOverFun);
		exportRoot.rochieMc.rochie8.addEventListener("mouseout", mouseOutFun);



		function mouseOverFun(e) {

			if (e.currentTarget == exportRoot.rochieMc.rochie1) {

				exportRoot.rochieMc.rochie1.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.rochieMc.rochie2) {

				exportRoot.rochieMc.rochie2.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.rochieMc.rochie3) {

				exportRoot.rochieMc.rochie3.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.rochieMc.rochie4) {

				exportRoot.rochieMc.rochie4.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.rochieMc.rochie5) {

				exportRoot.rochieMc.rochie5.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.rochieMc.rochie6) {

				exportRoot.rochieMc.rochie6.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.rochieMc.rochie7) {

				exportRoot.rochieMc.rochie7.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.rochieMc.rochie8) {

				exportRoot.rochieMc.rochie8.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			}








		}

		function mouseOutFun(e) {
			if (e.currentTarget == exportRoot.rochieMc.rochie1) {

				exportRoot.rochieMc.rochie1.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.rochieMc.rochie2) {

				exportRoot.rochieMc.rochie2.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.rochieMc.rochie3) {

				exportRoot.rochieMc.rochie3.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.rochieMc.rochie4) {

				exportRoot.rochieMc.rochie4.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.rochieMc.rochie5) {

				exportRoot.rochieMc.rochie5.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.rochieMc.rochie6) {

				exportRoot.rochieMc.rochie6.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.rochieMc.rochie7) {

				exportRoot.rochieMc.rochie7.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.rochieMc.rochie8) {

				exportRoot.rochieMc.rochie8.shadow = new createjs.Shadow("");


			}



		}





		exportRoot.moreLEV1.cursor = "pointer";
		exportRoot.nextBtn.cursor = "pointer";

		exportRoot.rochieMc.rochie1.cursor = "pointer";
		exportRoot.rochieMc.rochie2.cursor = "pointer";
		exportRoot.rochieMc.rochie3.cursor = "pointer";
		exportRoot.rochieMc.rochie4.cursor = "pointer";
		exportRoot.rochieMc.rochie5.cursor = "pointer";
		exportRoot.rochieMc.rochie6.cursor = "pointer";
		exportRoot.rochieMc.rochie7.cursor = "pointer";
		exportRoot.rochieMc.rochie8.cursor = "pointer";


		exportRoot.rochieMc.rochie1.addEventListener("click", clickRochie);
		exportRoot.rochieMc.rochie2.addEventListener("click", clickRochie);
		exportRoot.rochieMc.rochie3.addEventListener("click", clickRochie);
		exportRoot.rochieMc.rochie4.addEventListener("click", clickRochie);
		exportRoot.rochieMc.rochie5.addEventListener("click", clickRochie);
		exportRoot.rochieMc.rochie6.addEventListener("click", clickRochie);
		exportRoot.rochieMc.rochie7.addEventListener("click", clickRochie);
		exportRoot.rochieMc.rochie8.addEventListener("click", clickRochie);


		exportRoot.nextBtn.addEventListener("click", clickRochie);

		function clickRochie(e) {

			if (e.currentTarget == exportRoot.rochieMc.rochie1) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 230, "star36, star30, star24", 30, 50, 40);






				exportRoot.doll.rochie.gotoAndStop(0);
			} else if (e.currentTarget == exportRoot.rochieMc.rochie2) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 230, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.rochie.gotoAndStop(1);
			} else if (e.currentTarget == exportRoot.rochieMc.rochie3) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 230, "star36, star30, star24", 30, 50, 40);






				exportRoot.doll.rochie.gotoAndStop(2);
			} else if (e.currentTarget == exportRoot.rochieMc.rochie4) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 230, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.rochie.gotoAndStop(3);
			} else if (e.currentTarget == exportRoot.rochieMc.rochie5) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 230, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.rochie.gotoAndStop(4);
			} else if (e.currentTarget == exportRoot.rochieMc.rochie6) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 230, "star36, star30, star24", 30, 50, 40);




				exportRoot.doll.rochie.gotoAndStop(5);
			} else if (e.currentTarget == exportRoot.rochieMc.rochie7) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 230, "star36, star30, star24", 30, 50, 40);







				exportRoot.doll.rochie.gotoAndStop(6);
			} else if (e.currentTarget == exportRoot.rochieMc.rochie8) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 230, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.rochie.gotoAndStop(7);
			} else if (e.currentTarget == exportRoot.nextBtn) {

				exportRoot.play();
			}


		}
	}
	this.frame_2 = function() {
		this.stop();



		exportRoot.animMc.gotoAndPlay(1);

		exportRoot.doll.poseta.visible = false;
		exportRoot.doll.lantic.visible = false;


		exportRoot.nextBtn3.cursor = "pointer";
		exportRoot.moreLEV2.cursor = "pointer";


		this.nextBtn3.addEventListener("click", nextLevFun2);

		function nextLevFun2() {


			exportRoot.play();


		}



		/////MOUSE OVER


		exportRoot.lanticMc.lantic1.addEventListener("mouseover", mouseOverFun2);
		exportRoot.lanticMc.lantic1.addEventListener("mouseout", mouseOutFun2);
		exportRoot.lanticMc.lantic2.addEventListener("mouseover", mouseOverFun2);
		exportRoot.lanticMc.lantic2.addEventListener("mouseout", mouseOutFun2);
		exportRoot.lanticMc.lantic3.addEventListener("mouseover", mouseOverFun2);
		exportRoot.lanticMc.lantic3.addEventListener("mouseout", mouseOutFun2);
		exportRoot.lanticMc.lantic4.addEventListener("mouseover", mouseOverFun2);
		exportRoot.lanticMc.lantic4.addEventListener("mouseout", mouseOutFun2);
		exportRoot.lanticMc.lantic5.addEventListener("mouseover", mouseOverFun2);
		exportRoot.lanticMc.lantic5.addEventListener("mouseout", mouseOutFun2);


		function mouseOverFun2(e) {

			if (e.currentTarget == exportRoot.lanticMc.lantic1) {

				exportRoot.lanticMc.lantic1.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.lanticMc.lantic2) {

				exportRoot.lanticMc.lantic2.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.lanticMc.lantic3) {

				exportRoot.lanticMc.lantic3.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.lanticMc.lantic4) {

				exportRoot.lanticMc.lantic4.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.lanticMc.lantic5) {

				exportRoot.lanticMc.lantic5.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			}







		}

		function mouseOutFun2(e) {
			if (e.currentTarget == exportRoot.lanticMc.lantic1) {

				exportRoot.lanticMc.lantic1.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.lanticMc.lantic2) {

				exportRoot.lanticMc.lantic2.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.lanticMc.lantic3) {

				exportRoot.lanticMc.lantic3.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.lanticMc.lantic4) {

				exportRoot.lanticMc.lantic4.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.lanticMc.lantic5) {

				exportRoot.lanticMc.lantic5.shadow = new createjs.Shadow("");


			}


		}







		exportRoot.lanticMc.lantic1.cursor = "pointer";
		exportRoot.lanticMc.lantic2.cursor = "pointer";
		exportRoot.lanticMc.lantic3.cursor = "pointer";
		exportRoot.lanticMc.lantic4.cursor = "pointer";
		exportRoot.lanticMc.lantic5.cursor = "pointer";


		exportRoot.lanticMc.lantic1.addEventListener("click", clicklantic);
		exportRoot.lanticMc.lantic2.addEventListener("click", clicklantic);
		exportRoot.lanticMc.lantic3.addEventListener("click", clicklantic);
		exportRoot.lanticMc.lantic4.addEventListener("click", clicklantic);
		exportRoot.lanticMc.lantic5.addEventListener("click", clicklantic);




		function clicklantic(e) {

			exportRoot.doll.lantic.visible = true;

			if (e.currentTarget == exportRoot.lanticMc.lantic1) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 390, 170, "star36, star30, star24", 30, 50, 40);






				exportRoot.doll.lantic.gotoAndStop(0);
			} else if (e.currentTarget == exportRoot.lanticMc.lantic2) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 390, 170, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.lantic.gotoAndStop(1);
			} else if (e.currentTarget == exportRoot.lanticMc.lantic3) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 390, 170, "star36, star30, star24", 30, 50, 40);






				exportRoot.doll.lantic.gotoAndStop(2);
			} else if (e.currentTarget == exportRoot.lanticMc.lantic4) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 390, 170, "star36, star30, star24", 30, 50, 40);






				exportRoot.doll.lantic.gotoAndStop(3);
			} else if (e.currentTarget == exportRoot.lanticMc.lantic5) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 390, 170, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.lantic.gotoAndStop(4);
			}

		}




		/////////PANOTOFI CLICK









		/////MOUSE OVER


		exportRoot.voalMc.voal1.addEventListener("mouseover", mouseOverFun3);
		exportRoot.voalMc.voal1.addEventListener("mouseout", mouseOutFun3);
		exportRoot.voalMc.voal2.addEventListener("mouseover", mouseOverFun3);
		exportRoot.voalMc.voal2.addEventListener("mouseout", mouseOutFun3);
		exportRoot.voalMc.voal3.addEventListener("mouseover", mouseOverFun3);
		exportRoot.voalMc.voal3.addEventListener("mouseout", mouseOutFun3);
		exportRoot.voalMc.voal4.addEventListener("mouseover", mouseOverFun3);
		exportRoot.voalMc.voal4.addEventListener("mouseout", mouseOutFun3);
		exportRoot.voalMc.voal5.addEventListener("mouseover", mouseOverFun3);
		exportRoot.voalMc.voal5.addEventListener("mouseout", mouseOutFun3);


		function mouseOverFun3(e) {

			if (e.currentTarget == exportRoot.voalMc.voal1) {

				exportRoot.voalMc.voal1.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.voalMc.voal2) {

				exportRoot.voalMc.voal2.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.voalMc.voal3) {

				exportRoot.voalMc.voal3.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.voalMc.voal4) {

				exportRoot.voalMc.voal4.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.voalMc.voal5) {

				exportRoot.voalMc.voal5.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			}








		}

		function mouseOutFun3(e) {
			if (e.currentTarget == exportRoot.voalMc.voal1) {

				exportRoot.voalMc.voal1.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.voalMc.voal2) {

				exportRoot.voalMc.voal2.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.voalMc.voal3) {

				exportRoot.voalMc.voal3.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.voalMc.voal4) {

				exportRoot.voalMc.voal4.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.voalMc.voal5) {

				exportRoot.voalMc.voal5.shadow = new createjs.Shadow("");


			}

		}











		exportRoot.voalMc.voal1.cursor = "pointer";
		exportRoot.voalMc.voal2.cursor = "pointer";
		exportRoot.voalMc.voal3.cursor = "pointer";
		exportRoot.voalMc.voal4.cursor = "pointer";
		exportRoot.voalMc.voal5.cursor = "pointer";

		exportRoot.voalMc.voal1.addEventListener("click", clickvoal);
		exportRoot.voalMc.voal2.addEventListener("click", clickvoal);
		exportRoot.voalMc.voal3.addEventListener("click", clickvoal);
		exportRoot.voalMc.voal4.addEventListener("click", clickvoal);
		exportRoot.voalMc.voal5.addEventListener("click", clickvoal);



		function clickvoal(e) {


			exportRoot.doll.voal.visible = true;

			if (e.currentTarget == exportRoot.voalMc.voal1) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 49, "star36, star30, star24", 30, 50, 40);






				exportRoot.doll.voal.gotoAndStop(0);
			} else if (e.currentTarget == exportRoot.voalMc.voal2) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 49, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.voal.gotoAndStop(1);
			} else if (e.currentTarget == exportRoot.voalMc.voal3) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 49, "star36, star30, star24", 30, 50, 40);






				exportRoot.doll.voal.gotoAndStop(2);
			} else if (e.currentTarget == exportRoot.voalMc.voal4) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 49, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.voal.gotoAndStop(3);
			} else if (e.currentTarget == exportRoot.voalMc.voal5) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 380, 49, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.voal.gotoAndStop(4);
			}

		}




		////CLICK POSETA


		/////MOUSE OVER


		exportRoot.posetaMc.poseta1.addEventListener("mouseover", mouseOverFun4);
		exportRoot.posetaMc.poseta1.addEventListener("mouseout", mouseOutFun4);
		exportRoot.posetaMc.poseta2.addEventListener("mouseover", mouseOverFun4);
		exportRoot.posetaMc.poseta2.addEventListener("mouseout", mouseOutFun4);
		exportRoot.posetaMc.poseta3.addEventListener("mouseover", mouseOverFun4);
		exportRoot.posetaMc.poseta3.addEventListener("mouseout", mouseOutFun4);
		exportRoot.posetaMc.poseta4.addEventListener("mouseover", mouseOverFun4);
		exportRoot.posetaMc.poseta4.addEventListener("mouseout", mouseOutFun4);
		exportRoot.posetaMc.poseta5.addEventListener("mouseover", mouseOverFun4);
		exportRoot.posetaMc.poseta5.addEventListener("mouseout", mouseOutFun4);



		function mouseOverFun4(e) {

			if (e.currentTarget == exportRoot.posetaMc.poseta1) {

				exportRoot.posetaMc.poseta1.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.posetaMc.poseta2) {

				exportRoot.posetaMc.poseta2.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.posetaMc.poseta3) {

				exportRoot.posetaMc.poseta3.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.posetaMc.poseta4) {

				exportRoot.posetaMc.poseta4.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.posetaMc.poseta5) {

				exportRoot.posetaMc.poseta5.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			}








		}

		function mouseOutFun4(e) {
			if (e.currentTarget == exportRoot.posetaMc.poseta1) {

				exportRoot.posetaMc.poseta1.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.posetaMc.poseta2) {

				exportRoot.posetaMc.poseta2.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.posetaMc.poseta3) {

				exportRoot.posetaMc.poseta3.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.posetaMc.poseta4) {

				exportRoot.posetaMc.poseta4.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.posetaMc.poseta5) {

				exportRoot.posetaMc.poseta5.shadow = new createjs.Shadow("");


			}


		}



		exportRoot.posetaMc.poseta1.cursor = "pointer";
		exportRoot.posetaMc.poseta2.cursor = "pointer";
		exportRoot.posetaMc.poseta3.cursor = "pointer";
		exportRoot.posetaMc.poseta4.cursor = "pointer";
		exportRoot.posetaMc.poseta5.cursor = "pointer";

		exportRoot.posetaMc.poseta1.addEventListener("click", clickposeta);
		exportRoot.posetaMc.poseta2.addEventListener("click", clickposeta);
		exportRoot.posetaMc.poseta3.addEventListener("click", clickposeta);
		exportRoot.posetaMc.poseta4.addEventListener("click", clickposeta);
		exportRoot.posetaMc.poseta5.addEventListener("click", clickposeta);




		function clickposeta(e) {

			exportRoot.doll.poseta.visible = true;

			if (e.currentTarget == exportRoot.posetaMc.poseta1) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 435, 310, "star36, star30, star24", 30, 50, 40);






				exportRoot.doll.poseta.gotoAndStop(0);
			} else if (e.currentTarget == exportRoot.posetaMc.poseta2) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 435, 310, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.poseta.gotoAndStop(1);
			} else if (e.currentTarget == exportRoot.posetaMc.poseta3) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 435, 310, "star36, star30, star24", 30, 50, 40);






				exportRoot.doll.poseta.gotoAndStop(2);
			} else if (e.currentTarget == exportRoot.posetaMc.poseta4) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 435, 310, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.poseta.gotoAndStop(3);
			} else if (e.currentTarget == exportRoot.posetaMc.poseta5) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 435, 310, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.poseta.gotoAndStop(4);
			}

		}










		////CLICK flori


		/////MOUSE OVER


		exportRoot.floriMc.flori1.addEventListener("mouseover", mouseOverFun5);
		exportRoot.floriMc.flori1.addEventListener("mouseout", mouseOutFun5);
		exportRoot.floriMc.flori2.addEventListener("mouseover", mouseOverFun5);
		exportRoot.floriMc.flori2.addEventListener("mouseout", mouseOutFun5);
		exportRoot.floriMc.flori3.addEventListener("mouseover", mouseOverFun5);
		exportRoot.floriMc.flori3.addEventListener("mouseout", mouseOutFun5);
		exportRoot.floriMc.flori4.addEventListener("mouseover", mouseOverFun5);
		exportRoot.floriMc.flori4.addEventListener("mouseout", mouseOutFun5);
		exportRoot.floriMc.flori5.addEventListener("mouseover", mouseOverFun5);
		exportRoot.floriMc.flori5.addEventListener("mouseout", mouseOutFun5);



		function mouseOverFun5(e) {

			if (e.currentTarget == exportRoot.floriMc.flori1) {

				exportRoot.floriMc.flori1.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.floriMc.flori2) {

				exportRoot.floriMc.flori2.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.floriMc.flori3) {

				exportRoot.floriMc.flori3.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.floriMc.flori4) {

				exportRoot.floriMc.flori4.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			} else if (e.currentTarget == exportRoot.floriMc.flori5) {

				exportRoot.floriMc.flori5.shadow = new createjs.Shadow("#FFFFFF", 3, 3, 8);


			}








		}

		function mouseOutFun5(e) {
			if (e.currentTarget == exportRoot.floriMc.flori1) {

				exportRoot.floriMc.flori1.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.floriMc.flori2) {

				exportRoot.floriMc.flori2.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.floriMc.flori3) {

				exportRoot.floriMc.flori3.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.floriMc.flori4) {

				exportRoot.floriMc.flori4.shadow = new createjs.Shadow("");


			} else if (e.currentTarget == exportRoot.floriMc.flori5) {

				exportRoot.floriMc.flori5.shadow = new createjs.Shadow("");


			}


		}



		exportRoot.floriMc.flori1.cursor = "pointer";
		exportRoot.floriMc.flori2.cursor = "pointer";
		exportRoot.floriMc.flori3.cursor = "pointer";
		exportRoot.floriMc.flori4.cursor = "pointer";
		exportRoot.floriMc.flori5.cursor = "pointer";

		exportRoot.floriMc.flori1.addEventListener("click", clickflori);
		exportRoot.floriMc.flori2.addEventListener("click", clickflori);
		exportRoot.floriMc.flori3.addEventListener("click", clickflori);
		exportRoot.floriMc.flori4.addEventListener("click", clickflori);
		exportRoot.floriMc.flori5.addEventListener("click", clickflori);




		function clickflori(e) {

			exportRoot.doll.flori.visible = true;

			if (e.currentTarget == exportRoot.floriMc.flori1) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 290, 140, "star36, star30, star24", 30, 50, 40);






				exportRoot.doll.flori.gotoAndStop(0);
			} else if (e.currentTarget == exportRoot.floriMc.flori2) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 290, 140, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.flori.gotoAndStop(1);
			} else if (e.currentTarget == exportRoot.floriMc.flori3) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 290, 140, "star36, star30, star24", 30, 50, 40);






				exportRoot.doll.flori.gotoAndStop(2);
			} else if (e.currentTarget == exportRoot.floriMc.flori4) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 290, 140, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.flori.gotoAndStop(3);
			} else if (e.currentTarget == exportRoot.floriMc.flori5) {

				exportRoot.sparklesSound();
				exportRoot.stars(exportRoot, 290, 140, "star36, star30, star24", 30, 50, 40);





				exportRoot.doll.flori.gotoAndStop(4);
			}

		}
	}
	this.frame_3 = function() {
		this.stop();

		exportRoot.animMc.gotoAndPlay(1);


		exportRoot.moreEND.cursor = "pointer";
		exportRoot.replayBut.cursor = "pointer";

		exportRoot.thumb1.cursor = "pointer";
		exportRoot.thumb2.cursor = "pointer";


		aparBtns();


		function aparBtns() {



			createjs.Tween.get(exportRoot.moreEND, {
				loop: false
			}).to({
				y: 542
			}, 1500, createjs.Ease.elasticInOut);


			createjs.Tween.get(exportRoot.replayBut, {
				loop: false
			}).to({
				y: 542
			}, 2500, createjs.Ease.elasticInOut);


			createjs.Tween.get(exportRoot.thumb1, {
				loop: false
			}).to({
				x: 95
			}, 3500, createjs.Ease.elasticInOut);


			createjs.Tween.get(exportRoot.thumb2, {
				loop: false
			}).to({
				x: 95
			}, 4500, createjs.Ease.elasticInOut);

		}



		exportRoot.replayBut.addEventListener("click", replayButFun);

		function replayButFun() {
			location.reload();


		}


		try {
			if (typeof (adsInGame) !== "undefined") {
				if (adsInGame === true) {
					console.log('G_Ads');
					window[preroll.config.loaderObjectName].refetchAd();
					document.getElementById("gameMovie").style.pointerEvents = "auto";
					exportRoot.stopSnd();
				}
			}

			if (typeof (gdApi) !== "undefined") {
				if (typeof (gdAds) !== "undefined") {
					if (gdAds === true) {
						gdApi.showBanner();
						console.log('GD_Ads');
					}
				}
			}
		} catch (err) {
			console.log(err.message)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// animmc
	this.animMc = new lib.animmcc();
	this.animMc.parent = this;
	this.animMc.setTransform(392.2,300.1,1.016,0.983);

	this.timeline.addTween(cjs.Tween.get(this.animMc).wait(4));

	// pers
	this.partlogo = new lib.logoggg();
	this.partlogo.parent = this;
	this.partlogo.setTransform(726.9,1061.9,0.801,0.798,0,0,0,103.5,52.3);
	this.partlogo.cache(-2,-2,210,108);

	this.doll = new lib.corp2();
	this.doll.parent = this;
	this.doll.setTransform(374.5,320,1,1,0,0,0,70.5,253);

	this.replayBut = new lib.Symbol78();
	this.replayBut.parent = this;
	this.replayBut.setTransform(37.1,676.1,0.607,0.607,0,0,0,31.4,64.3);

	this.moreEND = new lib.Symbol107();
	this.moreEND.parent = this;
	this.moreEND.setTransform(730.8,688.1,0.75,0.745,0,0,0,187.5,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.partlogo}]}).to({state:[{t:this.doll}]},1).to({state:[{t:this.doll}]},1).to({state:[{t:this.doll},{t:this.moreEND},{t:this.replayBut}]},1).wait(1));

	// btns
	this.logo = new lib.logoDariaGames();
	this.logo.parent = this;
	this.logo.setTransform(17.3,17.1,0.336,0.336,0,0,0,0,0.1);

	this.btnSound = new lib.Symbol50copy2();
	this.btnSound.parent = this;
	this.btnSound.setTransform(749,5,0.453,0.453,0,0,0,0.1,0.1);

	this.moreCOVER = new lib.Symbol105();
	this.moreCOVER.parent = this;
	this.moreCOVER.setTransform(70.3,530,0.8,0.8,0,0,0,75,75);

	this.playBut = new lib.Symbol104();
	this.playBut.parent = this;
	this.playBut.setTransform(729,530,0.8,0.8,0,0,0,75,75);

	this.nextBtn = new lib.Symbol76();
	this.nextBtn.parent = this;
	this.nextBtn.setTransform(737.1,541.5,0.948,0.948,0,0,0,50,50.1);

	this.moreLEV1 = new lib.Symbol105copy3();
	this.moreLEV1.parent = this;
	this.moreLEV1.setTransform(62,544,0.667,0.667,0,0,0,75,75);

	this.rochieMc = new lib.rochiilevel1();
	this.rochieMc.parent = this;
	this.rochieMc.setTransform(106.5,379.5,1,1,0,0,0,54.5,107.5);

	this.nextBtn3 = new lib.Symbol76copy();
	this.nextBtn3.parent = this;
	this.nextBtn3.setTransform(710.4,526.4,0.667,0.667,0,0,0,50,50);

	this.moreLEV2 = new lib.Symbol105copy();
	this.moreLEV2.parent = this;
	this.moreLEV2.setTransform(69,543,0.667,0.667,0,0,0,75,75);

	this.floriMc = new lib.buchetelevel2();
	this.floriMc.parent = this;
	this.floriMc.setTransform(931,360.5,1,1,0,0,0,55,169.5);

	this.voalMc = new lib.voalurilevel2();
	this.voalMc.parent = this;
	this.voalMc.setTransform(931,265.5,1,1,0,0,0,55,169.5);

	this.posetaMc = new lib.Symbol18();
	this.posetaMc.parent = this;
	this.posetaMc.setTransform(412,360.5,1,1,0,0,0,55,169.5);

	this.lanticMc = new lib.Symbol16();
	this.lanticMc.parent = this;
	this.lanticMc.setTransform(128.5,313.5,1,1,0,0,0,128.5,173.5);

	this.thumb2 = new lib.Symbol8_1();
	this.thumb2.parent = this;
	this.thumb2.setTransform(-121,371,1,1,0,0,0,75,75);

	this.thumb1 = new lib.Symbol7();
	this.thumb1.parent = this;
	this.thumb1.setTransform(-121,167,1,1,0,0,0,75,75);

	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-20,206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playBut},{t:this.moreCOVER},{t:this.btnSound,p:{regX:0.1,regY:0.1}},{t:this.logo}]}).to({state:[{t:this.btnSound,p:{regX:0.1,regY:0.1}},{t:this.rochieMc},{t:this.moreLEV1},{t:this.nextBtn}]},1).to({state:[{t:this.btnSound,p:{regX:0.1,regY:0.1}},{t:this.lanticMc},{t:this.posetaMc},{t:this.voalMc},{t:this.floriMc},{t:this.moreLEV2},{t:this.nextBtn3}]},1).to({state:[{t:this.btnSound,p:{regX:0,regY:0}},{t:this.instance},{t:this.thumb1},{t:this.thumb2}]},1).wait(1));

	// bg
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(401,301,1,1,0,0,0,400,300);

	this.instance_2 = new lib.Bg1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.vazeflori();
	this.instance_3.parent = this;
	this.instance_3.setTransform(531,377);

	this.instance_4 = new lib.Bg2();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(373.3,289.3,837.6,1113.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
