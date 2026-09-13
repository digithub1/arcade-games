(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB03 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "americaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ZB03_front_attack_00","ZB03_front_attack_01","ZB03_front_attack_02",
			"ZB03_front_attack_03","ZB03_front_attack_04","ZB03_front_attack_05",
			"ZB03_front_attack_06","ZB03_front_attack_07","ZB03_front_attack_08",
			"ZB03_front_attack_09","ZB03_front_attack_10","ZB03_front_walk_00",
			"ZB03_front_walk_01","ZB03_front_walk_02","ZB03_front_walk_03",
			"ZB03_front_walk_04","ZB03_front_walk_05","ZB03_front_walk_06",
			"ZB03_front_walk_07","ZB03_front_walk_08","ZB03_front_walk_09",
			"ZB03_front_walk_10","ZB03_front_walk_11","ZB03_front_walk_12",
			"ZB03_front_walk_13","ZB03_front_walk_14","ZB03_front_walk_15"
		], settings);
		settings.framewidth = settings.framewidth || 214;
		settings.frameheight = settings.frameheight || 214;
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

		this.addAnimation('front-attack', [{ name: "ZB03_front_attack_00", delay: 100 },{ name: "ZB03_front_attack_01", delay: 100 },{ name: "ZB03_front_attack_02", delay: 100 },{ name: "ZB03_front_attack_03", delay: 100 },{ name: "ZB03_front_attack_04", delay: 100 },{ name: "ZB03_front_attack_05", delay: 100 },{ name: "ZB03_front_attack_06", delay: 100 },{ name: "ZB03_front_attack_07", delay: 100 },{ name: "ZB03_front_attack_08", delay: 100 },{ name: "ZB03_front_attack_09", delay: 100 },{ name: "ZB03_front_attack_10", delay: 100 }]);
		this.addAnimation('front-walk', [{ name: "ZB03_front_walk_00", delay: 100 },{ name: "ZB03_front_walk_01", delay: 100 },{ name: "ZB03_front_walk_02", delay: 100 },{ name: "ZB03_front_walk_03", delay: 100 },{ name: "ZB03_front_walk_04", delay: 100 },{ name: "ZB03_front_walk_05", delay: 100 },{ name: "ZB03_front_walk_06", delay: 100 },{ name: "ZB03_front_walk_07", delay: 100 },{ name: "ZB03_front_walk_08", delay: 100 },{ name: "ZB03_front_walk_09", delay: 100 },{ name: "ZB03_front_walk_10", delay: 100 },{ name: "ZB03_front_walk_11", delay: 100 },{ name: "ZB03_front_walk_12", delay: 100 },{ name: "ZB03_front_walk_13", delay: 100 },{ name: "ZB03_front_walk_14", delay: 100 },{ name: "ZB03_front_walk_15", delay: 100 }]);
		this.setCurrentAnimation('front-walk');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 0, 0, 267, 130) );
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
            if(dataZombie[id]["id"] == "ZB03"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.damage = dataZombie[id]["atk"];
                this.reward = dataZombie[id]["reward"];
                this.moveSpeed = dataZombie[id]["movement"];
            }
        }
		
        this.pos.z = 10;
        this.body.vel.y = this.moveSpeed;
        this.attack = true;
        this.walk = true;
        this.attackDie = true;
        this.animHit = false;
        this.body.getShape().translate(-this.width/2, 0);
        this.die = true;
        this.kena = true;
        this.duration = 0;
        this.hitRacun1 = true;
        this.dieInterval;
        this.shieldOn = false;
        this.haveRacun = false;
        
        me.audio.play("sfx-boss-spawn", false, null, game.user.userData.sound.SFX);
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        this.dieFunc();
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
       
        if (other.body.collisionType === game.collisionTypes.PLAYER) {
            if(this.getCurrentAnimationFrame() == 8){
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
            		        let toOnce = true;
                		        this.timeOt1 = me.timer.setTimeout(()=>{
                		             if(toOnce){
                                        toOnce = false;
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
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.timeOt3);
        me.timer.clearTimeout(this.timeOt4);
        me.timer.clearTimeout(this.delay);
        //  End of user code  //
	},

    // Put user code here //
    dieFunc: function(){
        this.dieInterval = me.timer.setInterval(()=>{
            if(this.animHit){
                this.hitPlayer = me.pool.pull ("battleHitPlayer", this.pos.x, this.pos.y+30);
                me.game.world.addChild(this.hitPlayer, this.pos.z+1);
                this.animHit = false;
                this.timeOt2 = me.timer.setTimeout(() => {
                    me.audio.play("sfx-zombie-atk-4", false, null, game.user.userData.sound.SFX);
                    this.animHit = true;
                }, 1000);
            }
            
            if(this.health <= 0){
                if(this.die){
                    this.die = false;
                    
                    if(this.racun && this.haveRacun){
                        this.haveRacun = false;
                        me.game.world.removeChild(this.racun);
                    }
                    
                    this.body.vel.y = 0;
                    this.body.vel.x = 0;
    
                    if(this.attackDie === false){
                        if(this.pos.x > this.posXKiri && this.pos.x < this.posXKanan){
                            
                            this.coinAnim = me.pool.pull ("battleCoin", this.pos.x+30, this.pos.y);
                            me.game.world.addChild(this.coinAnim, this.pos.z+4);
                            this.coinAnim2 = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                            me.game.world.addChild(this.coinAnim2, this.pos.z+4);
                            this.coinAnim3 = me.pool.pull ("battleCoin", this.pos.x-30, this.pos.y);
                            me.game.world.addChild(this.coinAnim3, this.pos.z+4);
                            
                            let to = true;
                            this.timeOt3 = me.timer.setTimeout(()=>{
                                if(to){
                                    to = false;
                                    game.controller.data.addGold(this.reward);
                                    game.controller.data.addTemporaryGold(this.reward);
                                    game.controller.data.addTemporaryKill();
                                    game.controller.data.setDailyQuest('kill zombies', 1);
                                }
                            }, 300);
                            
                            this.dieAnim = me.pool.pull ("battleDieAnim", this.pos.x, this.pos.y+15);
                            me.game.world.addChild(this.dieAnim, this.pos.z+3);
                            me.audio.play("sfx-boss-died-2", false, null, game.user.userData.sound.SFX);
                            me.game.world.removeChild(this);
                            me.timer.clearInterval(this.dieInterval);
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
                        
                        let to2 = true;
                        this.timeOt4 = me.timer.setTimeout(()=>{
                            if(to2){
                                to2 = false;
                                game.controller.data.addGold(this.reward);
                                game.controller.data.addTemporaryGold(this.reward);
                                game.controller.data.addTemporaryKill();
                                game.controller.data.setDailyQuest('kill zombies', 1);
                            }
                        }, 300);
                    
                        this.dieAnim = me.pool.pull ("battleDieAnim", this.pos.x, this.pos.y+15);
                        me.game.world.addChild(this.dieAnim, this.pos.z+3);
                        me.audio.play("sfx-boss-died-2", false, null, game.user.userData.sound.SFX);
                        me.game.world.removeChild(this);
                        me.timer.clearInterval(this.dieInterval);
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