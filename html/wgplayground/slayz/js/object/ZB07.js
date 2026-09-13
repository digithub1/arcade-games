(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB07 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "asiaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ZB07_front_attack_0","ZB07_front_attack_1","ZB07_front_attack_2",
			"ZB07_front_attack_3","ZB07_front_attack_4","ZB07_front_attack_5",
			"ZB07_front_attack_6","ZB07_front_attack_7","ZB07_front_walk_0",
			"ZB07_front_walk_1","ZB07_front_walk_2","ZB07_front_walk_3",
			"ZB07_front_walk_4"
		], settings);
		settings.framewidth = settings.framewidth || 375;
		settings.frameheight = settings.frameheight || 375;
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

		this.addAnimation('front-attack', [{ name: "ZB07_front_attack_0", delay: 100 },{ name: "ZB07_front_attack_1", delay: 100 },{ name: "ZB07_front_attack_2", delay: 100 },{ name: "ZB07_front_attack_3", delay: 100 },{ name: "ZB07_front_attack_4", delay: 100 },{ name: "ZB07_front_attack_5", delay: 100 },{ name: "ZB07_front_attack_6", delay: 100 },{ name: "ZB07_front_attack_7", delay: 100 }]);
		this.addAnimation('front-walk', [{ name: "ZB07_front_walk_0", delay: 100 },{ name: "ZB07_front_walk_1", delay: 100 },{ name: "ZB07_front_walk_2", delay: 100 },{ name: "ZB07_front_walk_3", delay: 100 },{ name: "ZB07_front_walk_4", delay: 100 }]);
		this.setCurrentAnimation('front-walk');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 131, 0, 244, 211) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.body.collisionType = game.collisionTypes.ZOMBIEBOS;
		this.body.setCollisionMask(
		    game.collisionTypes.PELURU | 
		    game.collisionTypes.PLAYER | 
		    game.collisionTypes.OBSTACLE |
		    game.collisionTypes.LIMIT |
		    game.collisionTypes.PELURULASER |
		    game.collisionTypes.PELURULISTRIK |
		    game.collisionTypes.RACUN |
		    game.collisionTypes.MISSILE |
		    game.collisionTypes.NUKE
		);
		
		let dataZombie = game.controller.data.getDataZombie();
        
        for(let id in dataZombie){
            if(dataZombie[id]["id"] == "ZB07"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.damage = dataZombie[id]["atk"];
                this.reward = dataZombie[id]["reward"];
                this.moveSpeed = dataZombie[id]["movement"];
            }
        }

        this.pos.z = 10;
        this.body.vel.y = this.moveSpeed;
        this.shieldOn = false;
        this.attack = true;
        this.walk = true;
        this.attackDie = true;
        this.smoke = true;
        this.animHit = false;
        this.body.getShape().translate(-this.width/1.2, -125);
        this.die = true;
        this.onDie = false;
        this.kena = true;
        this.duration = 0;
        this.hitRacun1 = true;
        this.dieInterval;
        this.haveRacun = false;
        
        me.audio.play("sfx-boss-spawn", false, null, game.user.userData.sound.SFX);
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        this.onSfx = false;
        this.onDie = false;
        this.dieFunc();
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		me.collision.check(this);
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
            if(this.isCurrentAnimation("front-attack")){
                if(this.getCurrentAnimationFrame() == 6){
                    if(this.onSfx == false){
                        this.onSfx = true;
                        me.audio.play("sfx-ogremagi-attack", false, null, game.user.userData.sound.SFX);
                    }
                }
                else{
                    this.onSfx = false;
                }
            }
        //  End of user code  //
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
        // Put user code here //
        isSolid = false;
       
        if (other.body.collisionType === game.collisionTypes.PLAYER) {
            if(this.getCurrentAnimationFrame() == 6){
                other.health -= this.damage;
            }
            
            if(this.attack){
                this.attack = false;
                this.attackDie = false;
                
                this.body.vel.y = 0;
                this.body.vel.x = 0;
                this.pos.set(this.pos.x, this.pos.y, this.pos.z);
                    
                if(!this.isCurrentAnimation('front-attack')){
                    this.setCurrentAnimation('front-attack');
                    this.animHit = true;
                }
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.PELURULASER) {
            if(this.kena){
                this.kena = false;
                this.hitAnim = me.pool.pull ("WP0006ujungPeluru", this.pos.x, this.pos.y+7.5);
                me.game.world.addChild(this.hitAnim, this.pos.z+1);
                this.delay = me.timer.setTimeout(()=>{
                    this.kena = true;
                },1000);
			}
            return false;
        }
        if (other.body.collisionType === game.collisionTypes.PELURULISTRIK) {
            if(this.kena){
                this.kena = false;
                this.hitAnim = me.pool.pull ("WP0007ujungPeluru", this.pos.x, this.pos.y+7.5);
                me.game.world.addChild(this.hitAnim, this.pos.z+1);
                this.delay = me.timer.setTimeout(()=>{
                    this.kena = true;
                },1000);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.RACUN) {
            if(this.hitRacun1){
                this.hitRacun1 = false;
                if(this.pos == undefined){
                    
                }else{
                    if(!this.racun){
                        this.haveRacun = true;
                        this.racun = me.pool.pull("me.Sprite", this.pos.x, this.pos.y-this.selisihHeightLayar-this.height/2, {
                            image:  game.textureMap.get("effect"),
                            region:"poison fx"
                        });
                        me.game.world.addChild(this.racun, this.pos.z+1);
                    }
                }
                    
                this.racunInterval = me.timer.setInterval(()=>{
        		    this.duration += 1;
        		    
        		    if(this.pos == undefined || this.racun.pos == undefined){
                        me.timer.clearInterval(this.racunInterval);
                        
                    }else{
                        this.racun.pos.x = this.pos.x;
                        this.racun.pos.y = this.pos.y-this.selisihHeightLayar-this.height/2;
            		    
            		    this.health -= other.damage;

            		    if(this.health <= 0 || this.duration >= 100){
            		        let to = true;
            		        this.delay2 = me.timer.setTimeout(()=>{
            		            if(to){
            		                to = false;
            		                if(this.racun && this.haveRacun){
            		                    this.haveRacun = false;
            		                    me.game.world.removeChildNow(this.racun);
            		                }
            		            }
                            }, 300);
                            
            		        me.timer.clearInterval(this.racunInterval);
            		        this.hitRacun1 = true;
            		        this.duration = 0;
            		    }
                    }
        		}, 100);
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
         me.timer.clearInterval(this.dieInterval);
         me.timer.clearTimeout(this.delay);
         me.timer.clearTimeout(this.delay2);
         me.timer.clearTimeout(this.delay3);
         me.timer.clearTimeout(this.delay4);
        //  End of user code  //
	},

    // Put user code here //
    dieFunc: function(){
        this.dieInterval = me.timer.setInterval(()=>{
            if(this.smoke){
                this.smoke = false;
                this.greenSmoke = me.pool.pull ("ZB01GreenSmoke", this.pos.x, this.pos.y+7.5);
                me.game.world.addChild(this.greenSmoke, this.pos.z-1);
                me.timer.setTimeout(()=>{
                    this.smoke = true;
                }, 6000);
            }
            
            if(this.animHit){
                this.hitPlayer = me.pool.pull ("battleHitPlayer", this.pos.x, this.pos.y+40);
                me.game.world.addChild(this.hitPlayer, this.pos.z+1);
    
                this.animHit = false;
                me.timer.setTimeout(() => {
                    //me.audio.play("sfx-zombie-atk-4", false, null, game.user.userData.sound.SFX);
                    this.animHit = true;
                }, 1000);
            }
            
            if(this.health <= 0){
                if(this.die){
                    this.die = false;
                    if(this.haveRacun){
                        this.haveRacun = false;
                        me.game.world.removeChild(this.racun);
                    }
                    this.body.vel.y = 0;
                    this.body.vel.x = 0;
                    this.smoke = false;
                    
                    if(this.attackDie === false){
                        if(this.pos.x > this.posXKiri && this.pos.x < this.posXKanan){
                            
                            this.coinAnim = me.pool.pull ("battleCoin", this.pos.x+30, this.pos.y);
                            me.game.world.addChild(this.coinAnim, this.pos.z+4);
                            this.coinAnim2 = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                            me.game.world.addChild(this.coinAnim2, this.pos.z+4);
                            this.coinAnim3 = me.pool.pull ("battleCoin", this.pos.x-30, this.pos.y);
                            me.game.world.addChild(this.coinAnim3, this.pos.z+4);
                            
                            let to2 = true;
                            this.delay3 = me.timer.setTimeout(()=>{
                                if(to2){
                                    to2 = false;
                                    game.controller.data.addGold(this.reward);
                                    game.controller.data.addTemporaryGold(this.reward);
                                    game.controller.data.addTemporaryKill();
                                    game.controller.data.setDailyQuest('kill zombies', 1);
                                }
                            }, 300);
                            
                            if(this.onDie == false){
                                this.onDie = true;
                                me.audio.play("sfx-boss-died", false, null, game.user.userData.sound.SFX);
                                me.game.world.removeChild(this);
                                me.timer.clearInterval(this.dieInterval);
                            }
                        }
                    }
                    
                    if(this.walk){
                        this.walk = false;
                        
                        this.coinAnim = me.pool.pull ("battleCoin", this.pos.x+30, this.pos.y);
                        me.game.world.addChild(this.coinAnim, this.pos.z+4);
                        this.coinAnim2 = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                        me.game.world.addChild(this.coinAnim2, this.pos.z+4);
                        this.coinAnim3 = me.pool.pull ("battleCoin", this.pos.x-30, this.pos.y);
                        me.game.world.addChild(this.coinAnim3, this.pos.z+4);
                        
                        let to3 = true;
                        this.delay4 = me.timer.setTimeout(()=>{
                            if(to3){
                                to3 = false;
                                game.controller.data.addGold(this.reward);
                                game.controller.data.addTemporaryGold(this.reward);
                                game.controller.data.addTemporaryKill();
                                game.controller.data.setDailyQuest('kill zombies', 1);
                            }
                        }, 300);
                    
                        if(!this.onDie){
                            this.onDie = true;
                            me.audio.play("sfx-boss-died", false, null, game.user.userData.sound.SFX);
                            me.game.world.removeChild(this);
                            me.timer.clearInterval(this.dieInterval);
                        }
                    }
                }
            }
        },1000);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();