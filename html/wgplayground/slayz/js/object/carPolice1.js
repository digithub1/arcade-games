(function(){
// Put user code here //
 
//  End of user code  //

game.object.carPolice1 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "america";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"police car"
		], settings);
		settings.framewidth = settings.framewidth || 213;
		settings.frameheight = settings.frameheight || 186;
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
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Polygon", 0, 0, [me.pool.pull("me.Vector2d", 58, 154), me.pool.pull("me.Vector2d", 0, 122), me.pool.pull("me.Vector2d", 141, 0), me.pool.pull("me.Vector2d", 203, 37), ]) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.pos.z = 10;
        this.body.collisionType = game.collisionTypes.OBSTACLE;
		this.body.setCollisionMask(game.collisionTypes.PELURU | game.collisionTypes.ZOMBIE);
		
		this.body.getShape().translate(-this.width/2, -50);
		
		this.lampTween = me.pool.pull("carPolice1Lights", x-55, y+97.5);
        me.game.world.addChild(this.lampTween, this.pos.z+1);
		
		this.sfx = ["sfx-bullet-impact-1","sfx-bullet-impact-2","sfx-bullet-impact-3"];
		this.tween = new me.Tween();
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
            me.audio.play(item, false, null, game.user.userData.sound.SFX);
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
        this.tween.stop();
        //  End of user code  //
	},

    // Put user code here //
    playTween: function(){
        this.tween = new me.Tween(this.lampTween)
            .to({alpha:0.2}, 1000)
            .yoyo(true)
            .repeat(Infinity);
            
        this.tween.start();
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();