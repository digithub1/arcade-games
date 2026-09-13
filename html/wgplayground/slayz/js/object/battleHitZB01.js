(function(){
// Put user code here //
 
//  End of user code  //

game.object.battleHitZB01 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "americaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"hit_ZB01_blood-00","hit_ZB01_blood-01","hit_ZB01_blood-02",
			"hit_ZB01_blood-03"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		this._super(me.Sprite, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('blood', [{ name: "hit_ZB01_blood-00", delay: 100 },{ name: "hit_ZB01_blood-01", delay: 100 },{ name: "hit_ZB01_blood-02", delay: 100 },{ name: "hit_ZB01_blood-03", delay: 100 }]);
		this.addAnimation('spark', [{ name: "hit_ZB01_projectile-00", delay: 100 },{ name: "hit_ZB01_projectile-01", delay: 100 },{ name: "hit_ZB01_projectile-02", delay: 100 },{ name: "hit_ZB01_projectile-03", delay: 100 }]);
		this.setCurrentAnimation('spark');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape(me.pool.pull("me.Rect", 0, 0, this.width, this.height) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        let to = true;
        this.setCurrentAnimation('blood', () => {
            this.setCurrentAnimation('blood', () => {
                if(to){
                    to = false;
                    me.game.world.removeChild(this);
                }
                return false;
            });
            return false;
        });
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