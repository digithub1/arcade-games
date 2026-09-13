(function(){
// Put user code here //
 
//  End of user code  //

game.object.L1005Atap = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "america";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"L1005atap"
		], settings);
		settings.framewidth = settings.framewidth || 400;
		settings.frameheight = settings.frameheight || 76;
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
		this.body.addShape( me.pool.pull("me.Rect", 0, 0, 400, 76) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.body.collisionType = game.collisionTypes.OBSTACLE;
		this.body.setCollisionMask(game.collisionTypes.PELURU);
		
        this.body.getShape().translate(-this.width/2, -this.height/2);
        // console.log(this.width, this.height);
        this.sfx = ["sfx-bullet-impact-1","sfx-bullet-impact-2","sfx-bullet-impact-3"];
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
        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();