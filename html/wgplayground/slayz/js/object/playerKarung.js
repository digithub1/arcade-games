(function(){
// Put user code here //
 
//  End of user code  //

game.object.playerKarung = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "battle";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"karung","karung-hit"
		], settings);
		settings.framewidth = settings.framewidth || 259;
		settings.frameheight = settings.frameheight || 95;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.originX = x;
        this.originY = y;
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('idle', [{ name: "karung", delay: 100 }]);
		this.addAnimation('hit', [{ name: "karung-hit", delay: 200 },{ name: "karung", delay: 200 }]);
		this.setCurrentAnimation('idle');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Polygon", 0, 0, [me.pool.pull("me.Vector2d", 34, 95), me.pool.pull("me.Vector2d", 87, 45), me.pool.pull("me.Vector2d", 132, 25), me.pool.pull("me.Vector2d", 191, 37), me.pool.pull("me.Vector2d", 230, 93), ]) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        let vars = ["fungsi"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
        this.body.collisionType = game.collisionTypes.PLAYER;
		this.body.setCollisionMask(game.collisionTypes.ZOMBIE | game.collisionTypes.ZOMBIEBOS);
		this.pos.z = 20;
        this.health = this.fungsi.hp;//100
        this.body.getShape().translate(-100, -25);
        this.hit = true;
        this.die = false;
        this.timerCek = 0;
        this.haveTween = false;
        this.tween = new me.Tween();
        this.playing = true;
        
        // console.log(game.data.multiplayer);
        if(game.data.multiplayer == true){
            this.healtBar = me.pool.pull ("battleBarHp", this.originX-542.5, this.originY-367.5);//,{value:this.health});//-117-370 -878 this.playerKarung.health
            me.game.world.addChild(this.healtBar, this.pos.z+29);
        }else{
            this.healtBar = me.pool.pull ("battleBarHp", this.originX+377, this.originY-382);//,{value:this.health});//-117-370 -878 this.playerKarung.health
            me.game.world.addChild(this.healtBar, this.pos.z+29);
        }
        
        this.hitPlayer2 = me.pool.pull ("battleZombieAtk", 0, 0);
        me.game.world.addChild(this.hitPlayer2, 90);
        
        let to1 = true;
        me.timer.setTimeout(()=>{
            if(to1){
                to1 = false;
                this.hitPlayer2.alpha = 0;
            }
        },1000);
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
            this.healtBar.barFunc(this.health);
            
            if(this.hit){
                this.hit = false;
                this.tweenhitPlayer();
                this.setCurrentAnimation('hit');
                this.haveTween = true;
                this.cekHit();
            }
            
            if(this.health <= 0){
                this.playing = false;
                if(this.die == false){
                    this.die = true;
                    this.fungsi.battleFunc();
                }
    		}

            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.ZOMBIEBOS) {
            this.healtBar.barFunc(this.health);
            
            if(this.hit){
                this.hit = false;
                this.tweenhitPlayer();
                this.setCurrentAnimation('hit');
                this.haveTween = true;
                this.cekHit();
            }
            
            if(this.health <= 0){
                this.playing = false;
                if(this.die == false){
                    this.die = true;
                    this.fungsi.battleFunc();
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
        this.playing = false;
        me.timer.clearTimeout(this.timeOt1);
        this.tween.stop();
        //  End of user code  //
	},

    // Put user code here //
    tweenhitPlayer: function(){
        this.tween = new me.Tween(this.hitPlayer2)
            .to({alpha:0.4}, 500)
            .yoyo(true)
            .repeat(Infinity);
            
        this.tween.start();
    },
    
    cekHit: function(){
        if(this.playing){
            this.timerCek += 5;
            if(this.timerCek >= 10){
                this.timerCek = 0;
                this.hit = true;
                this.setCurrentAnimation('idle');
                if(this.haveTween){
                    this.tween.stop();
                    this.haveTween = false;
                    this.hitPlayer2.alpha = 0;
                }
            } else {
                let to2 = true;
    	        this.timeOt1 = me.timer.setTimeout(()=>{
    	            if(to2){
    	                to2 = false;
    	                this.cekHit();
    	            }
    		    }, 5000);
    		}
		}
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();