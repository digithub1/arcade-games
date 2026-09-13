(function(){
// Put user code here //
 
//  End of user code  //

game.object.L6002Bis = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "australia";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"L6002_bis"
		], settings);
		settings.framewidth = settings.framewidth || 210;
		settings.frameheight = settings.frameheight || 241;
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
		this.body.addShape( me.pool.pull("me.Polygon", 0, 0, [me.pool.pull("me.Vector2d", 87, 218), me.pool.pull("me.Vector2d", 21, 197), me.pool.pull("me.Vector2d", 25, 133), me.pool.pull("me.Vector2d", 134, 11), me.pool.pull("me.Vector2d", 197, 37), me.pool.pull("me.Vector2d", 199, 96), ]) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.body.collisionType = game.collisionTypes.OBSTACLE;
		this.body.setCollisionMask(game.collisionTypes.PELURU | game.collisionTypes.ZOMBIE);
		
		this.body.getShape().translate(-this.width/2, -25);
		this.tweenMove = new me.Tween();
		this.sfx = ["sfx-bullet-impact-1","sfx-bullet-impact-2","sfx-bullet-impact-3"];
        this.lampu = me.pool.pull ("L6002BisLampu", this.pos.x-170, this.pos.y+120);
        me.game.world.addChild(this.lampu, 6);
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
        this.tweenMove.stop();
        //  End of user code  //
	},

    // Put user code here //
    tween: function(){
        this.tweenMove = new me.Tween(this.lampu)
            .to({alpha:0.05}, 1000)
            .yoyo(true)
            .repeat(Infinity);
            
        this.tweenMove.start();
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();