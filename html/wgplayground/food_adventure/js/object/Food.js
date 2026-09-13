(function(){
// Put user code here //
 
//  End of user code  //

game.object.Food = me.GUI_Object.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Food";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"ayam geprek","bakso","blue star",
			"bubur ayam","burger","chicken thigh",
			"coffee","cola","eggs",
			"fish","gado gado","gudeg",
			"hot chocolate","ice cofeee","juice watermelon",
			"kerak telor","ketupat sayur","Kiwi Slush",
			"klepon","kue bendera","kue lumpur",
			"lemonade","lumpia","mango slushie",
			"martabak","martini","mie ayam",
			"mi goreng","mochalatte","nasi ayam",
			"nasi goreng","nasi jinggo","onde onde",
			"pecel lele","orange slush","pepes ikan",
			"pina colada","rawon","rendang",
			"rotiserie","salad","sambel open",
			"sambel tutup","Sandwich","sate",
			"sausage","sayur asem","serabi notosuman",
			"soto","spaghetti meatballs","steak",
			"strawberry champange","summer squash","sushi",
			"tacos","tahu gejrot","tea",
			"tempe","tom yum","tumpeng",
			"tuna2","veggie juice","capucinno",
			"es campur","tiramisu","choc shouffle",
			"egg benedict","fish n chips","panna cotta",
			"pie","greenpea salmon","beef wellington",
			"burrito","cordon bleu","glazed duck",
			"grilled lobster","lamb shank","Lemon Meringue",
			"pizza","Salmon sushi","seared scallop",
			"stuffed calamari","Tamago sushi","Tuna sushi",
			"Shrimp sushi","Burgers"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 63;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.GUI_Object, 'init', [x, y, settings]);
		delete settings.image;
		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('F000', [{ name: "ayam geprek", delay: 100 }]);
		this.addAnimation('F001', [{ name: "bakso", delay: 100 }]);
		this.addAnimation('F002', [{ name: "blue star", delay: 100 }]);
		this.addAnimation('F003', [{ name: "bubur ayam", delay: 100 }]);
		this.addAnimation('F004', [{ name: "Burgers", delay: 100 }]);
		this.addAnimation('F006', [{ name: "chicken thigh", delay: 100 }]);
		this.addAnimation('F007', [{ name: "coffee", delay: 100 }]);
		this.addAnimation('F008', [{ name: "cola", delay: 100 }]);
		this.addAnimation('F009', [{ name: "eggs", delay: 100 }]);
		this.addAnimation('F010', [{ name: "es campur", delay: 100 }]);
		this.addAnimation('F011', [{ name: "tiramisu", delay: 100 }]);
		this.addAnimation('F012', [{ name: "gado gado", delay: 100 }]);
		this.addAnimation('F013', [{ name: "gudeg", delay: 100 }]);
		this.addAnimation('F014', [{ name: "hot chocolate", delay: 100 }]);
		this.addAnimation('F015', [{ name: "ice cofeee", delay: 100 }]);
		this.addAnimation('F016', [{ name: "juice watermelon", delay: 100 }]);
		this.addAnimation('F017', [{ name: "kerak telor", delay: 100 }]);
		this.addAnimation('F018', [{ name: "choc shouffle", delay: 100 }]);
		this.addAnimation('F019', [{ name: "Kiwi Slush", delay: 100 }]);
		this.addAnimation('F020', [{ name: "klepon", delay: 100 }]);
		this.addAnimation('F021', [{ name: "kue bendera", delay: 100 }]);
		this.addAnimation('F022', [{ name: "egg benedict", delay: 100 }]);
		this.addAnimation('F023', [{ name: "lemonade", delay: 100 }]);
		this.addAnimation('F024', [{ name: "lumpia", delay: 100 }]);
		this.addAnimation('F025', [{ name: "mango slushie", delay: 100 }]);
		this.addAnimation('F026', [{ name: "martabak", delay: 100 }]);
		this.addAnimation('F027', [{ name: "martini", delay: 100 }]);
		this.addAnimation('F028', [{ name: "mi goreng", delay: 100 }]);
		this.addAnimation('F029', [{ name: "mie ayam", delay: 100 }]);
		this.addAnimation('F030', [{ name: "mochalatte", delay: 100 }]);
		this.addAnimation('F031', [{ name: "fish n chips", delay: 100 }]);
		this.addAnimation('F032', [{ name: "nasi goreng", delay: 100 }]);
		this.addAnimation('F033', [{ name: "nasi jinggo", delay: 100 }]);
		this.addAnimation('F034', [{ name: "onde onde", delay: 100 }]);
		this.addAnimation('F035', [{ name: "orange slush", delay: 100 }]);
		this.addAnimation('F036', [{ name: "pecel lele", delay: 100 }]);
		this.addAnimation('F037', [{ name: "pepes ikan", delay: 100 }]);
		this.addAnimation('F038', [{ name: "pina colada", delay: 100 }]);
		this.addAnimation('F039', [{ name: "rawon", delay: 100 }]);
		this.addAnimation('F040', [{ name: "rendang", delay: 100 }]);
		this.addAnimation('F041', [{ name: "rotiserie", delay: 100 }]);
		this.addAnimation('F042', [{ name: "salad", delay: 100 }]);
		this.addAnimation('F043', [{ name: "sausage", delay: 100 }]);
		this.addAnimation('F044', [{ name: "strawberry champange", delay: 100 }]);
		this.addAnimation('F045', [{ name: "Sandwich", delay: 100 }]);
		this.addAnimation('F046', [{ name: "sate", delay: 100 }]);
		this.addAnimation('F047', [{ name: "panna cotta", delay: 100 }]);
		this.addAnimation('F048', [{ name: "sayur asem", delay: 100 }]);
		this.addAnimation('F049', [{ name: "serabi notosuman", delay: 100 }]);
		this.addAnimation('F050', [{ name: "soto", delay: 100 }]);
		this.addAnimation('F051', [{ name: "spaghetti meatballs", delay: 100 }]);
		this.addAnimation('F052', [{ name: "pie", delay: 100 }]);
		this.addAnimation('F053', [{ name: "steak", delay: 100 }]);
		this.addAnimation('F054', [{ name: "summer squash", delay: 100 }]);
		this.addAnimation('F055', [{ name: "sushi", delay: 100 }]);
		this.addAnimation('F056', [{ name: "tacos", delay: 100 }]);
		this.addAnimation('F057', [{ name: "tahu gejrot", delay: 100 }]);
		this.addAnimation('F058', [{ name: "tea", delay: 100 }]);
		this.addAnimation('F059', [{ name: "tempe", delay: 100 }]);
		this.addAnimation('F060', [{ name: "tom yum", delay: 100 }]);
		this.addAnimation('F061', [{ name: "tumpeng", delay: 100 }]);
		this.addAnimation('F062', [{ name: "greenpea salmon", delay: 100 }]);
		this.addAnimation('F063', [{ name: "veggie juice", delay: 100 }]);
		this.addAnimation('F005', [{ name: "capucinno", delay: 100 }]);
		this.addAnimation('F064', [{ name: "tuna2", delay: 100 }]);
		this.addAnimation('F065', [{ name: "beef wellington", delay: 100 }]);
		this.addAnimation('F066', [{ name: "burrito", delay: 100 }]);
		this.addAnimation('F067', [{ name: "cordon bleu", delay: 100 }]);
		this.addAnimation('F068', [{ name: "glazed duck", delay: 100 }]);
		this.addAnimation('F069', [{ name: "grilled lobster", delay: 100 }]);
		this.addAnimation('F070', [{ name: "lamb shank", delay: 100 }]);
		this.addAnimation('F071', [{ name: "Lemon Meringue", delay: 100 }]);
		this.addAnimation('F072', [{ name: "pizza", delay: 100 }]);
		this.addAnimation('F073', [{ name: "Salmon sushi", delay: 100 }]);
		this.addAnimation('F074', [{ name: "seared scallop", delay: 100 }]);
		this.addAnimation('F076', [{ name: "stuffed calamari", delay: 100 }]);
		this.addAnimation('F077', [{ name: "Tamago sushi", delay: 100 }]);
		this.addAnimation('F078', [{ name: "Tuna sushi", delay: 100 }]);
		this.addAnimation('F075', [{ name: "Shrimp sushi", delay: 100 }]);
		this.setCurrentAnimation('F000');
		this.var = {};

        // Put user code here //
        
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.GUI_Object, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.GUI_Object, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.GUI_Object, 'onActivateEvent');
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.GUI_Object, 'onDeactivateEvent');

        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();