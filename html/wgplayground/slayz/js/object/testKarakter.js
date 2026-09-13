(function(){
// Put user code here //
 
//  End of user code  //

game.object.testKarakter = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "character";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"character-000","character-001","character-002",
			"character-003","character-004","character-005",
			"character-006","character-007","character-008",
			"character-009","character-010","character-011",
			"character-012","character-013","character-014",
			"character-015","character-016","character-017",
			"character-018","character-019","character-020",
			"character-021","character-022","character-023",
			"character-024","character-025","character-026",
			"character-027","character-028","character-029",
			"character-030","character-031","character-032",
			"character-033","character-034","character-035",
			"character-036","character-037","character-038",
			"character-039","character-040","character-041",
			"character-042","character-043","character-044",
			"character-045","character-046","character-047",
			"character-048","character-049","character-050",
			"character-051","character-052","character-053",
			"character-054","character-055","character-056",
			"character-057","character-058","character-059",
			"character-060","character-061","character-062",
			"character-063","character-064","character-065",
			"character-066","character-067","character-068",
			"character-069","character-070","character-071",
			"character-072","character-073","character-074",
			"character-075","character-076","character-077",
			"character-078","character-079","character-080",
			"character-081","character-082","character-083",
			"character-084","character-085","character-086",
			"character-087","character-088","character-089",
			"character-090","character-091","character-092",
			"character-093","character-094","character-095",
			"character-096","character-097","character-098",
			"character-099","character-100","character-101",
			"character-102","character-103","character-104",
			"character-105","character-106","character-107",
			"character-108","character-109","character-110",
			"character-111","character-112","character-113"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('1', [{ name: "character-000", delay: 100 },{ name: "character-001", delay: 100 },{ name: "character-002", delay: 100 },{ name: "character-003", delay: 100 },{ name: "character-004", delay: 100 },{ name: "character-005", delay: 100 },{ name: "character-006", delay: 100 },{ name: "character-007", delay: 100 },{ name: "character-008", delay: 100 },{ name: "character-009", delay: 100 },{ name: "character-010", delay: 100 },{ name: "character-011", delay: 100 },{ name: "character-012", delay: 100 },{ name: "character-013", delay: 100 },{ name: "character-014", delay: 100 },{ name: "character-015", delay: 100 },{ name: "character-016", delay: 100 },{ name: "character-017", delay: 100 },{ name: "character-018", delay: 100 },{ name: "character-019", delay: 100 },{ name: "character-020", delay: 100 },{ name: "character-021", delay: 100 },{ name: "character-022", delay: 100 },{ name: "character-023", delay: 100 },{ name: "character-024", delay: 100 },{ name: "character-025", delay: 100 },{ name: "character-026", delay: 100 },{ name: "character-027", delay: 100 },{ name: "character-028", delay: 100 },{ name: "character-029", delay: 100 },{ name: "character-030", delay: 100 },{ name: "character-031", delay: 100 },{ name: "character-032", delay: 100 },{ name: "character-033", delay: 100 },{ name: "character-034", delay: 100 },{ name: "character-035", delay: 100 },{ name: "character-036", delay: 100 },{ name: "character-037", delay: 100 },{ name: "character-038", delay: 100 },{ name: "character-039", delay: 100 },{ name: "character-040", delay: 100 },{ name: "character-041", delay: 100 },{ name: "character-042", delay: 100 },{ name: "character-043", delay: 100 },{ name: "character-044", delay: 100 },{ name: "character-045", delay: 100 },{ name: "character-046", delay: 100 },{ name: "character-047", delay: 100 },{ name: "character-048", delay: 100 },{ name: "character-049", delay: 100 },{ name: "character-050", delay: 100 },{ name: "character-051", delay: 100 },{ name: "character-052", delay: 100 },{ name: "character-053", delay: 100 },{ name: "character-054", delay: 100 },{ name: "character-055", delay: 100 },{ name: "character-056", delay: 100 },{ name: "character-057", delay: 100 },{ name: "character-058", delay: 100 },{ name: "character-059", delay: 100 },{ name: "character-060", delay: 100 },{ name: "character-061", delay: 100 },{ name: "character-062", delay: 100 },{ name: "character-063", delay: 100 },{ name: "character-064", delay: 100 },{ name: "character-065", delay: 100 },{ name: "character-066", delay: 100 },{ name: "character-067", delay: 100 },{ name: "character-068", delay: 100 },{ name: "character-069", delay: 100 },{ name: "character-070", delay: 100 },{ name: "character-071", delay: 100 },{ name: "character-072", delay: 100 },{ name: "character-073", delay: 100 },{ name: "character-074", delay: 100 },{ name: "character-075", delay: 100 },{ name: "character-076", delay: 100 },{ name: "character-077", delay: 100 },{ name: "character-078", delay: 100 },{ name: "character-079", delay: 100 },{ name: "character-080", delay: 100 },{ name: "character-081", delay: 100 },{ name: "character-082", delay: 100 },{ name: "character-083", delay: 100 },{ name: "character-084", delay: 100 },{ name: "character-085", delay: 100 },{ name: "character-086", delay: 100 },{ name: "character-087", delay: 100 },{ name: "character-088", delay: 100 },{ name: "character-089", delay: 100 },{ name: "character-090", delay: 100 },{ name: "character-091", delay: 100 },{ name: "character-092", delay: 100 },{ name: "character-093", delay: 100 },{ name: "character-094", delay: 100 },{ name: "character-095", delay: 100 },{ name: "character-096", delay: 100 },{ name: "character-097", delay: 100 },{ name: "character-098", delay: 100 },{ name: "character-099", delay: 100 },{ name: "character-100", delay: 100 },{ name: "character-101", delay: 100 },{ name: "character-102", delay: 100 },{ name: "character-103", delay: 100 },{ name: "character-104", delay: 100 },{ name: "character-105", delay: 100 },{ name: "character-106", delay: 100 },{ name: "character-107", delay: 100 },{ name: "character-108", delay: 100 },{ name: "character-109", delay: 100 },{ name: "character-110", delay: 100 },{ name: "character-111", delay: 100 },{ name: "character-112", delay: 100 },{ name: "character-113", delay: 100 }]);
		this.setCurrentAnimation('1');
		this.var = {};

        // Put user code here //
        
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Sprite, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {

        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();