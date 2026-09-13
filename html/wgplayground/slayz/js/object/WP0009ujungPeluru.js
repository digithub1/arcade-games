(function(){
// Put user code here //
 
//  End of user code  //

game.object.WP0009ujungPeluru = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "effect";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"WP0009_explosion_10","WP0009_explosion_15","WP0009_explosion_17",
			"WP0009_explosion_19"
		], settings);
		settings.framewidth = settings.framewidth || 226;
		settings.frameheight = settings.frameheight || 180;
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

		this.addAnimation('1', [{ name: "WP0009_explosion_10", delay: 100 },{ name: "WP0009_explosion_15", delay: 100 },{ name: "WP0009_explosion_17", delay: 100 },{ name: "WP0009_explosion_19", delay: 100 }]);
		this.setCurrentAnimation('1');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape(me.pool.pull("me.Rect", 0, 0, this.width, this.height) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        let dataWeapon = game.user.userData.weapon;
        
        for(let id in dataWeapon){
            if(dataWeapon[id]["id"] == "WP0009"){
                this.damage = dataWeapon[id].atk;
            }
        }
        
        let toOnce = true;
        this.setCurrentAnimation('1',()=>{
            this.timeOt1 = me.timer.setTimeout(()=>{
                if(toOnce){
                    toOnce = false;
                    me.game.world.removeChildNow(this);
                }
            }, 300);
            return false;
        });
        
        this.body.collisionType = game.collisionTypes.PELURU;
		this.body.setCollisionMask(game.collisionTypes.ZOMBIE | game.collisionTypes.ZOMBIEBOS);
        this.body.vel.x = 0;
		this.body.vel.y = 0;
		this.body.getShape().translate(-this.width/2, -this.height/2);
		this.once = true;
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
        if (other.body.collisionType === game.collisionTypes.ZOMBIE) {
            if(this.getCurrentAnimationFrame() == 3){
                other.health -= this.damage;
                // console.log(this.damage);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.ZOMBIEBOS) {
            if(other.shieldOn === false){
                if(this.once){
                    this.once = false;
                    if(this.getCurrentAnimationFrame() == 3){
                        other.health -= this.damage;
                    }
                }
            }
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
        me.timer.clearTimeout(this.timeOt1);
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();