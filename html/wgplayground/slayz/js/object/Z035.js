(function(){
// Put user code here //
 
//  End of user code  //

game.object.Z035 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "australiaZombie";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"Z035_front_attack_0","Z035_front_attack_1","Z035_front_attack_2",
			"Z035_front_attack_3","Z035_front_attack_4","Z035_front_attack_5",
			"Z035_front_attack_6","Z035_front_attack_7","Z035_front_walk_0",
			"Z035_front_walk_1","Z035_front_walk_2","Z035_front_walk_3",
			"Z035_front_walk_4","Z035_side_attack_0","Z035_side_attack_1",
			"Z035_side_attack_2","Z035_side_attack_3","Z035_side_attack_4",
			"Z035_side_attack_5","Z035_side_attack_6","Z035_side_attack_7",
			"Z035_side_walk_0","Z035_side_walk_1","Z035_side_walk_2",
			"Z035_side_walk_3","Z035_side_walk_4"
		], settings);
		settings.framewidth = settings.framewidth || 99;
		settings.frameheight = settings.frameheight || 206;
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

		this.addAnimation('front-walk', [{ name: "Z035_front_walk_0", delay: 100 },{ name: "Z035_front_walk_1", delay: 100 },{ name: "Z035_front_walk_2", delay: 100 },{ name: "Z035_front_walk_3", delay: 100 },{ name: "Z035_front_walk_4", delay: 100 }]);
		this.addAnimation('front-attack', [{ name: "Z035_front_attack_0", delay: 100 },{ name: "Z035_front_attack_1", delay: 100 },{ name: "Z035_front_attack_2", delay: 100 },{ name: "Z035_front_attack_3", delay: 100 },{ name: "Z035_front_attack_4", delay: 100 },{ name: "Z035_front_attack_5", delay: 100 },{ name: "Z035_front_attack_6", delay: 100 },{ name: "Z035_front_attack_7", delay: 100 }]);
		this.addAnimation('side-walk', [{ name: "Z035_side_walk_0", delay: 100 },{ name: "Z035_side_walk_1", delay: 100 },{ name: "Z035_side_walk_2", delay: 100 },{ name: "Z035_side_walk_3", delay: 100 },{ name: "Z035_side_walk_4", delay: 100 }]);
		this.addAnimation('side-attack', [{ name: "Z035_side_attack_0", delay: 100 },{ name: "Z035_side_attack_1", delay: 100 },{ name: "Z035_side_attack_2", delay: 100 },{ name: "Z035_side_attack_3", delay: 100 },{ name: "Z035_side_attack_4", delay: 100 },{ name: "Z035_side_attack_5", delay: 100 },{ name: "Z035_side_attack_6", delay: 100 },{ name: "Z035_side_attack_7", delay: 100 }]);
		this.setCurrentAnimation('front-walk');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 20, 20, 59, 128) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.pos.z = 10;
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        
        this.body.getShape().translate(-this.width/2, -this.height/5);
        
        this.body.collisionType = game.collisionTypes.ZOMBIE;
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
            if(dataZombie[id]["id"] == "Z035"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.reward = dataZombie[id]["reward"];
                this.moveSpeed = dataZombie[id]["movement"];
            }
        }
        
        this.kena = true;
		this.kenaMissile = true;
        this.kenaNuke = true;
        this.hitRacun1 = true;
        this.timeOutDelay = [1, 400, 800, 1200, 1600];
        this.deadDelayTime = [100, 200, 300];
        this.attack = false;
        this.dariAtas = false;
        this.dariKanan = false;
        this.dariKiri = false
        this.haveRacun = false;
        
        //startMove
        if(this.pos.x >= 1150){//dari kanan
            this.flipX(true);
            this.body.vel.y = 0;
            this.body.vel.x = -this.moveSpeed;
            this.setCurrentAnimation('side-walk');
            this.dariKanan = true;
        }else if(this.pos.x <= 50){//dari kiri
            this.body.vel.y = 0;
            this.body.vel.x = this.moveSpeed;
            this.setCurrentAnimation('side-walk');
            this.dariKiri = true;
        }else if(this.pos.x > 50 && this.pos.x < 1150){// dari tengah
            this.body.vel.y = this.moveSpeed;
            this.body.vel.x = 0;
            this.dariAtas = true;
        }
        //--
        
        this.dieFunc();
        this.rangeATK();
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		me.collision.check(this);
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
        if(this.pos.x < -500 || this.pos.x > me.game.world.width+500 || this.pos.y > me.game.viewport.height-this.selisihHeightLayar+25){
		    this.health -= 100;
		}
		if(this.health <= 0 && this.die === false){
		    this.alpha = 0;
		}
        //  End of user code  //
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
        // Put user code here //
        isSolid = false;

        if (other.body.collisionType === game.collisionTypes.PELURULASER) {
            if(this.kena){
                this.kena = false;
                let hitAnim = me.pool.pull ("WP0006ujungPeluru", this.pos.x, this.pos.y+7.5);
                me.game.world.addChild(hitAnim, this.pos.z+1);
                let to1 = true;
                this.delay = me.timer.setTimeout(()=>{
                    if(to1){
                        to1 = false;
                        this.kena = true;
                    }
                },1000);
			}
            return false;
        }
        if (other.body.collisionType === game.collisionTypes.PELURULISTRIK) {
            if(this.kena){
                this.kena = false;
                let hitAnim = me.pool.pull ("WP0007ujungPeluru", this.pos.x, this.pos.y+7.5);
                me.game.world.addChild(hitAnim, this.pos.z+1);

                let to2 = true;
                this.delay = me.timer.setTimeout(()=>{
                    if(to2){
                        to2 = false;
                        this.kena = true;
                    }
                },1000);
			}
            return false;
        }
        if (other.body.collisionType === game.collisionTypes.RACUN) {
            if(this.hitRacun1){
                this.hitRacun1 = false;
                let randomTime = Math.floor(Math.random()*this.timeOutDelay.length);
                let to3 = true;
                this.timeOt1 = me.timer.setTimeout(()=>{
                    if(to3){
                        to3 = false;
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
                    		        let to4 = true;
                    		        this.timeOt2 = me.timer.setTimeout(()=>{
                    		            if(to4){
                    		                to4 = false;
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
                }, this.timeOutDelay[randomTime]);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.MISSILE) {
            if(this.kenaMissile){
                this.kenaMissile = false;
                this.health -= other.damage;
                let to5 = true;
                this.timeOt3 = me.timer.setTimeout(()=>{
                    if(to5){
                        to5 = false;
                        this.kenaMissile = true;
                    }
                },150);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.NUKE) {
            if(this.kenaNuke){
                this.kenaNuke = false;
                this.health -= other.damage;
                let to6 = true;
                this.timeOt4 = me.timer.setTimeout(()=>{
                    if(to6){
                        to6 = false;
                        this.kenaNuke = true;
                    }
                },5000);
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
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.timeOt3);
        me.timer.clearTimeout(this.timeOt4);
        me.timer.clearTimeout(this.timeOt5);
        me.timer.clearTimeout(this.timeOt6);
        me.timer.clearTimeout(this.timeOt7);
        me.timer.clearTimeout(this.timeOt8);
        me.timer.clearTimeout(this.timeOt9);
        me.timer.clearTimeout(this.delay);
        me.timer.clearInterval(this.spawnPeluru);
        //  End of user code  //
	},

    // Put user code here //
    dieFunc: function(){
        if(this.health <= 0){
            if(this.racun && this.haveRacun){
                this.haveRacun = false;
                me.game.world.removeChild(this.racun);
            }
            me.timer.clearInterval(this.spawnPeluru);
            let randomTime = Math.floor(Math.random()*this.deadDelayTime.length);
            this.timeOt5 = me.timer.setTimeout(()=>{
                let dieAnim = me.pool.pull ("battleDieAnim", this.pos.x, this.pos.y+15);
                me.game.world.addChild(dieAnim, this.pos.z+3);
                
                let coinAnim = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                me.game.world.addChild(coinAnim, this.pos.z+4);
            
                game.controller.data.addGold(this.reward);
                game.controller.data.addTemporaryGold(this.reward);
                game.controller.data.addTemporaryKill();
                game.controller.data.setDailyQuest('kill zombies', 1);
            
                me.game.world.removeChildNow(this);
            }, this.deadDelayTime[randomTime]);
        } else {
            this.timeOt6 = me.timer.setTimeout(()=>{
                this.dieFunc();
            }, 3000);
        }
    },
    
    rangeATK: function(){
        if(this.pos == undefined){
            // console.log("this.pos.x gak ada");
        }else{
            let kiri    = me.game.viewport.width/2-300,
                kanan   = me.game.viewport.width/2+300,
                atas    = me.game.viewport.height/2-100;
                
            if(this.dariAtas){
                if(this.pos.y >= atas){
                    this.funcATK();
                }else{
                    let to9 = true;
                    this.timeOt7 = me.timer.setTimeout(()=>{
                        if(to9){
                            to9 = false;
                            this.rangeATK();
                        }
                    }, 10);
                }
            }else if(this.dariKanan){
                if(this.pos.x < kanan){
                    this.funcATK();
                }else{
                    let to9 = true;
                    this.timeOt8 = me.timer.setTimeout(()=>{
                        if(to9){
                            to9 = false;
                            this.rangeATK();
                        }
                    }, 10);
                }
            }else if(this.dariKiri){
                if(this.pos.x > kiri){
                    this.funcATK();
                }else{
                    let to9 = true;
                    this.timeOt9 = me.timer.setTimeout(()=>{
                        if(to9){
                            to9 = false;
                            this.rangeATK();
                        }
                    }, 10);
                }
            }
        }
    },
    
    funcATK: function(){
        this.body.vel.y = 0;
        this.body.vel.x = 0;
        this.attack = true;
        
        let kiri    = me.game.viewport.width/2-100,
            kanan   = me.game.viewport.width/2+100;
            
        if(this.pos.x <= kiri){
            let selisih = 585-(this.pos.x+60),
                vlX = selisih*20/300,
                sdtX = selisih*10/300;
            this.flipX(false);
            if(!this.isCurrentAnimation('side-attack')){
                this.setCurrentAnimation('side-attack');
                this.spawnPeluru = me.timer.setInterval(()=>{
                    if(this.getCurrentAnimationFrame() == 5){
                        let projectile = me.pool.pull ("projectileZ035", this.pos.x+80, this.pos.y+25,{
                            valueX:vlX, sudutX:sdtX, sudutY:10
                        });
                        me.game.world.addChild(projectile, this.pos.z+1);
                    }
                },100);
            }
        }
        if(this.pos.x >= kanan){
            let selisih = (this.pos.x-30)-585,
                vlX = selisih*20/300,
                sdtX = selisih*10/300;
            this.flipX(true);
            if(!this.isCurrentAnimation('side-attack')){
                this.setCurrentAnimation('side-attack');
                this.spawnPeluru = me.timer.setInterval(()=>{
                    if(this.getCurrentAnimationFrame() == 5){
                        let projectile = me.pool.pull ("projectileZ035", this.pos.x-80, this.pos.y+25,{
                            valueX:-vlX, sudutX:-sdtX, sudutY:10
                        });
                        me.game.world.addChild(projectile, this.pos.z+1);
                    }
                },100);
            }
        }
        if(this.pos.x > kiri && this.pos.x < kanan){
            if(!this.isCurrentAnimation('front-attack')){
                this.setCurrentAnimation('front-attack');
                this.spawnPeluru = me.timer.setInterval(()=>{
                    if(this.getCurrentAnimationFrame() == 5){
                        let projectile = me.pool.pull ("projectileZ035", this.pos.x, this.pos.y+60,{
                            valueX:0, sudutX:0, sudutY:0
                        });
                        me.game.world.addChild(projectile, this.pos.z+1);
                    }
                },100);
            }
        }
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();