(function(){
// Put user code here //
 
//  End of user code  //

game.object.L6003PoliceCar = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "australia";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"L6003_polisi car"
		], settings);
		settings.framewidth = settings.framewidth || 290;
		settings.frameheight = settings.frameheight || 170;
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
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Polygon", 0, 0, [me.pool.pull("me.Vector2d", 11, 71), me.pool.pull("me.Vector2d", 45, 40), me.pool.pull("me.Vector2d", 83, 58), me.pool.pull("me.Vector2d", 111, 154), me.pool.pull("me.Vector2d", 129, 106), me.pool.pull("me.Vector2d", 196, 110), me.pool.pull("me.Vector2d", 193, 36), me.pool.pull("me.Vector2d", 245, 10), me.pool.pull("me.Vector2d", 279, 41), ]) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.body.collisionType = game.collisionTypes.OBSTACLE;
		this.body.setCollisionMask(game.collisionTypes.PELURU | game.collisionTypes.ZOMBIE);
		
		this.body.getShape().translate(-this.width/2, -25);
		
		this.sfx = ["sfx-bullet-impact-1","sfx-bullet-impact-2","sfx-bullet-impact-3"];
        let smoke = me.pool.pull ("L6003SmokeCar", this.pos.x+15, this.pos.y-45);
        me.game.world.addChild(smoke, 6);
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		me.collision.check(this);
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
        // Put user code here //
        isSolid = false;
        
        if(other.body.collisionType === game.collisionTypes.PELURU){
            var item = this.sfx[Math.floor(Math.random()*this.sfx.length)];
            me.audio.play(item, false, null, game.data.dynamic.sound.SFX);
		    return false;
        }
        //  End of user code  //
		return isSolid;
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