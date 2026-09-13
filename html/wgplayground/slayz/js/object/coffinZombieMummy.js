(function(){
// Put user code here //
 
//  End of user code  //

game.object.coffinZombieMummy = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "africa";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"peti_mumy_0","peti_mumy_1","peti_mumy_2",
			"peti_mumy_3","peti_mumy_4","peti_mumy_5"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.originX = x;
        this.originY = y;
        //  End of user code  //

		this._super(me.Sprite, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('spawn', [{ name: "peti_mumy_0", delay: 100 },{ name: "peti_mumy_1", delay: 100 },{ name: "peti_mumy_2", delay: 100 },{ name: "peti_mumy_3", delay: 100 },{ name: "peti_mumy_4", delay: 100 },{ name: "peti_mumy_5", delay: 100 }]);
		this.setCurrentAnimation('spawn');
		this.var = {};

        // Put user code here //
        this.zombieList = [];
        let to = true,
            no = 0;
        this.setCurrentAnimation('spawn',()=>{
            if(to){
                to = false;
                this.time = me.timer.setInterval(()=>{
                    no += 1;
                    let list = me.pool.pull("Z029coffin", this.pos.x-this.pos.x+this.plusX, this.pos.y-this.pos.y+this.plusY-150);
                    me.game.world.addChild(list, this.pos.z+1);
                    this.zombieList.push(list);
                    if(no >= 5){
                        me.timer.clearInterval(this.time);
                        me.game.world.removeChild(this);
                    }
                }, 1000);
            }
            return false;
        });
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
        me.timer.clearInterval(this.time);
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();