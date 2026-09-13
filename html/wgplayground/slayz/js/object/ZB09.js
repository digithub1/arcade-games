(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB09 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "australiaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ZB09_attack_00","ZB09_attack_01","ZB09_attack_02",
			"ZB09_attack_03","ZB09_attack_04","ZB09_attack_05",
			"ZB09_attack_06","ZB09_attack_07","ZB09_attack_08",
			"ZB09_attack_09","ZB09_dead_00","ZB09_dead_01",
			"ZB09_dead_02","ZB09_dead_03","ZB09_dead_04",
			"ZB09_walk_00","ZB09_walk_01","ZB09_walk_02",
			"ZB09_walk_03","ZB09_walk_04","ZB09_walk_05",
			"ZB09_walk_06","ZB09_walk_07","ZB09_dead_05",
			"ZB09_dead_06","ZB09_dead_07","ZB09_dead_08",
			"ZB09_dead_09","ZB09_dead_10","ZB09_dead_11",
			"ZB09_dead_12"
		], settings);
		settings.framewidth = settings.framewidth || 313;
		settings.frameheight = settings.frameheight || 371;
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

		this.addAnimation('walk', [{ name: "ZB09_walk_00", delay: 100 },{ name: "ZB09_walk_01", delay: 100 },{ name: "ZB09_walk_02", delay: 100 },{ name: "ZB09_walk_03", delay: 100 },{ name: "ZB09_walk_04", delay: 100 },{ name: "ZB09_walk_05", delay: 100 },{ name: "ZB09_walk_06", delay: 100 },{ name: "ZB09_walk_07", delay: 100 }]);
		this.addAnimation('attack', [{ name: "ZB09_attack_00", delay: 100 },{ name: "ZB09_attack_01", delay: 100 },{ name: "ZB09_attack_02", delay: 100 },{ name: "ZB09_attack_03", delay: 100 },{ name: "ZB09_attack_04", delay: 100 },{ name: "ZB09_attack_05", delay: 100 },{ name: "ZB09_attack_06", delay: 100 },{ name: "ZB09_attack_07", delay: 100 },{ name: "ZB09_attack_08", delay: 100 },{ name: "ZB09_attack_09", delay: 100 }]);
		this.addAnimation('dead', [{ name: "ZB09_dead_00", delay: 100 },{ name: "ZB09_dead_01", delay: 100 },{ name: "ZB09_dead_02", delay: 100 },{ name: "ZB09_dead_02", delay: 100 },{ name: "ZB09_dead_02", delay: 100 },{ name: "ZB09_dead_03", delay: 100 },{ name: "ZB09_dead_04", delay: 100 },{ name: "ZB09_dead_05", delay: 100 },{ name: "ZB09_dead_06", delay: 100 },{ name: "ZB09_dead_07", delay: 100 },{ name: "ZB09_dead_08", delay: 100 },{ name: "ZB09_dead_09", delay: 100 },{ name: "ZB09_dead_10", delay: 100 },{ name: "ZB09_dead_11", delay: 100 },{ name: "ZB09_dead_12", delay: 100 },{ name: "ZB09_dead_12", delay: 100 },{ name: "ZB09_dead_12", delay: 100 },{ name: "ZB09_dead_12", delay: 100 },{ name: "ZB09_dead_12", delay: 100 },{ name: "ZB09_dead_12", delay: 100 },{ name: "ZB09_dead_12", delay: 100 },{ name: "ZB09_dead_12", delay: 100 },{ name: "ZB09_dead_12", delay: 100 },{ name: "ZB09_dead_12", delay: 100 }]);
		this.addAnimation('dash', [{ name: "ZB09_attack_04", delay: 100 }]);
		this.addAnimation('slash', [{ name: "ZB09_attack_04", delay: 100 },{ name: "ZB09_attack_05", delay: 100 },{ name: "ZB09_attack_06", delay: 100 },{ name: "ZB09_attack_07", delay: 100 },{ name: "ZB09_attack_08", delay: 100 },{ name: "ZB09_attack_09", delay: 100 }]);
		this.setCurrentAnimation('walk');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 30, 30, 253, 120) );
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
            if(dataZombie[id]["id"] == "ZB09"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.damage = dataZombie[id]["atk"];
                this.reward = dataZombie[id]["reward"];
                this.moveSpeed = dataZombie[id]["movement"];
                this.damage = dataZombie[id]["atk"];
            }
        }
        // this.health = 1000;
        this.tween = new me.Tween();
        this.healthBase = this.health;
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        this.pos.z = 10;
        this.body.getShape().translate(-this.width/2, -this.height/4);
        this.shieldOn = true;
        this.kena = true;
        this.duration = 0;
        this.hitRacun1 = true;
        this.dieInterval;
        this.bosEnd = false;
        this.once = true;
        this.die = true;
        this.prepareSpecial = false;
        this.specialAtk = false;
        this.special1 = true;
        this.special2 = true;
        this.special3 = true;
        this.atk = true;
        this.timeWalk = 5000;
        this.haveRacun = false;

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
            if(this.specialAtk){
                this.specialAtk = false;
                other.health -= this.damage*15;
            }
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
            if(this.hitRacun1 && this.shieldOn === false){
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
            		        this.delay2 = me.timer.setTimeout(()=>{
            		             if(toOnce){
                                    toOnce = false;
                                    if(this.haveRacun){
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
        me.timer.clearTimeout(this.delay);
        me.timer.clearTimeout(this.delay2);
        me.timer.clearTimeout(this.delay3);
        me.timer.clearTimeout(this.delay4);
        me.timer.clearTimeout(this.waitTo);
        me.timer.clearTimeout(this.waitTime);
        this.tween.stop();
        me.audio.stop("sfx-boss2-walk");
        //  End of user code  //
	},

    // Put user code here //
    forwardWalk: function(){
        me.audio.play("sfx-boss2-walk", true, null, game.user.userData.sound.SFX);
        this.prepareSpecial = false;
        this.backWalk();
        this.playTween = true;
        this.tween = new me.Tween(this.pos)
        .to({y:me.game.viewport.height/2-80}, this.timeWalk)
        .onComplete(()=>{
            this.shieldOn = false;
            this.playTween = false;
            this.atk = true;
            if(this.atk){
                this.atk = false;
                this.attackFunc();
            }
                
        });
        this.tween.start();
    },
    attackFunc: function(){
        me.audio.stop("sfx-boss2-walk");
        this.shieldOn = false;
        this.specialAtk = false;
        if(!this.isCurrentAnimation('attack')){
            this.setCurrentAnimation('attack');
            this.spawnPeluru = me.timer.setInterval(()=>{
                if(this.pos == undefined){
                    
                }else{
                    if(this.getCurrentAnimationFrame() == 5){
                        let peluru = me.pool.pull ("projectileZB09", this.pos.x, this.pos.y+200);
                        me.game.world.addChild(peluru, this.pos.z+1);
                    }
                    
                    if(this.health <= this.healthBase*3/4 && this.special1){
                        this.special1 = false;
                        this.specialAtk = true;
                        this.prepareSpecial = true;
                        this.shieldOn = true;
                        me.timer.clearInterval(this.spawnPeluru);
                    }
                    if(this.health <= this.healthBase/2 && this.special2){
                        this.special2 = false;
                        this.specialAtk = true;
                        this.shieldOn = true;
                        this.prepareSpecial = true;
                        me.timer.clearInterval(this.spawnPeluru);
                    }
                    if(this.health <= this.healthBase/4 && this.special3){
                        this.special3 = false;
                        this.specialAtk = true;
                        this.shieldOn = true;
                        this.prepareSpecial = true;
                        me.timer.clearInterval(this.spawnPeluru);
                    }
                }
            },100);
        }
    },
    backWalk: function(){
        me.audio.play("sfx-boss2-walk", true, null, game.user.userData.sound.SFX);
        let to = true;
        if(this.prepareSpecial){
            if(!this.isCurrentAnimation('walk')){
                this.setCurrentAnimation('walk');
            }
            this.playTween = true;
            this.tween = new me.Tween(this.pos)
            .to({y:me.game.viewport.height/2-550}, 3000)
            .onComplete(()=>{
                this.playTween = false;
                this.spawnMiniZombie();
            });
            this.tween.start();
        }else{
            this.waitTo = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    this.backWalk();
                }
            },3000);
        }
    },
    specialAttack: function(){
        me.audio.stop("sfx-boss2-walk");
        me.audio.play("sfx-MKalien-Exp", false, null, game.user.userData.sound.SFX);
        if(!this.isCurrentAnimation('dash')){
            this.setCurrentAnimation('dash');
        }
        let to = true;
        this.playTween = true;
        this.tween = new me.Tween(this.pos)
        .to({y:me.game.viewport.height/2+100}, 500)
        .onComplete(()=>{
            me.audio.play("sfx-Bazooka-Exp", false, null, game.user.userData.sound.SFX);
            this.playTween = false;
            if(!this.isCurrentAnimation('slash')){
                this.setCurrentAnimation('slash',()=>{
                    if(!this.isCurrentAnimation('walk')){
                        this.setCurrentAnimation('walk');
                        if(to){
                            to = false;
                            this.timeWalk = 1000;
                            this.forwardWalk();
                        }
                    }
                    return false;
                });
            }
            me.game.viewport.shake(50, 1000, me.game.viewport.AXIS.BOTH);
        });
        this.tween.start();
    },
    dieFunc: function(){
        this.dieInterval = me.timer.setInterval(()=>{
            if(this.health <= 0){
                if(this.die){
                    this.tween.stop();
                    me.timer.clearInterval(this.spawnPeluru);
                    this.die = false;
                    this.bosEnd = true;
                    
                    if(this.haveRacun){
                        this.haveRacun = false;
                        me.game.world.removeChild(this.racun);
                    }
                    
                    let to1 = true;
                    this.delay3 = me.timer.setTimeout(()=>{
                        if(to1){
                            to1 = false;
                            game.controller.data.addGold(this.reward);
                            game.controller.data.addTemporaryGold(this.reward);
                            game.controller.data.addTemporaryKill();
                            game.controller.data.setDailyQuest('kill zombies', 1);
                        }
                    }, 300);
                    
                    this.coinAnim = me.pool.pull ("battleCoin", this.pos.x+30, this.pos.y);
                    me.game.world.addChild(this.coinAnim, this.pos.z+4);
                    this.coinAnim2 = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                    me.game.world.addChild(this.coinAnim2, this.pos.z+4);
                    this.coinAnim3 = me.pool.pull ("battleCoin", this.pos.x-30, this.pos.y);
                    me.game.world.addChild(this.coinAnim3, this.pos.z+4);
                    
                    let to3 = true;
                    if(!this.isCurrentAnimation('dead')){
                        this.setCurrentAnimation('dead',()=>{
                            if(to3){
                                to3 = false;
                                me.audio.play("sfx-boss-died", false, null, game.user.userData.sound.SFX);
                                let to2 = true;
                                this.delay4 = me.timer.setTimeout(()=>{
                                    if(to2){
                                        to2 = false;
                                        me.game.world.removeChild(this);
                                        this.container.decisionFunc();
                                        if(game.user.userData.tamat === undefined){
                                            game.controller.data.setHaveEnd(1)
                                        }else{
                                            if(game.user.userData.tamat <= 0){game.controller.data.setHaveEnd(1)}
                                        }
                                    }
                                }, 2000);
                                
                            }
                            return false;
                        });
                    }
                    me.timer.clearInterval(this.dieInterval);
                }
            }
        },1000);
    },
    
    spawnMiniZombie: function(){
        me.audio.stop("sfx-boss2-walk");
        let listZombie = [],
            listZombie2 = [],
            listZombie3 = [],
            listZombie4 = [],
            listZombie5 = [],
            sisaDarah = [],
            time = 0;
            
        this.intervalSpawn = me.timer.setInterval(()=>{
            if(time >= 5){time = 5}
            if(time < 5){
                let listZombieArray = ["Z034","Z036","Z037","Z038"],
                    rdm1 = Math.floor(Math.random()*listZombie.length),
                    rdm2 = Math.floor(Math.random()*listZombie.length),
                    rdm3 = Math.floor(Math.random()*listZombie.length),
                    rdm4 = Math.floor(Math.random()*listZombie.length),
                    rdm5 = Math.floor(Math.random()*listZombie.length),
                    zombie = me.pool.pull (listZombieArray[rdm1], 120, -375),
                    zombie2 = me.pool.pull (listZombieArray[rdm2], 0, -375),
                    zombie3 = me.pool.pull (listZombieArray[rdm3], -120, -375),
                    zombie4 = me.pool.pull (listZombieArray[rdm4], 650, 10),
                    zombie5 = me.pool.pull (listZombieArray[rdm5], -650, 10);
                me.game.world.addChild(zombie, 10);
                me.game.world.addChild(zombie2, 10);
                me.game.world.addChild(zombie3, 10);
                me.game.world.addChild(zombie4, 10);
                me.game.world.addChild(zombie5, 10);
                listZombie.push(zombie);
                listZombie2.push(zombie2);
                listZombie3.push(zombie3);
                listZombie4.push(zombie4);
                listZombie5.push(zombie5);
            }
            time += 1;
            
            if(time >= 5){
                if(listZombie[listZombie.length-1].health <= 0 && listZombie2[listZombie2.length-1].health <= 0 && listZombie3[listZombie3.length-1].health <= 0 && listZombie4[listZombie4.length-1].health <= 0 && listZombie5[listZombie5.length-1].health <= 0){
                    me.timer.clearInterval(this.intervalSpawn);
                    // console.log("stop");
                    let to = true;
                    this.waitTime = me.timer.setTimeout(()=>{
                        if(to){
                            to = false;
                            this.specialAttack();
                        }
                    },2000);
                            
                }
            }
                
        }, 3000);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();