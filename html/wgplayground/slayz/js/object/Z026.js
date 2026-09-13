(function(){
// Put user code here //
 
//  End of user code  //

game.object.Z026 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "africaZombie";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"Z026_front_attack_0","Z026_front_attack_1","Z026_front_attack_2",
			"Z026_front_attack_3","Z026_front_attack_4","Z026_front_attack_5",
			"Z026_front_attack_6","Z026_front_attack_7","Z026_front_attack_8",
			"Z026_front_dead_0","Z026_front_dead_1","Z026_front_dead_2",
			"Z026_front_dead_3","Z026_front_dead_4","Z026_front_walk_0",
			"Z026_front_walk_1","Z026_front_walk_2","Z026_front_walk_3",
			"Z026_front_walk_4","Z026_front_walk_5","Z026_front_walk_6",
			"Z026_front_walk_7","Z026_front_walk_8","Z026_side_attack_0",
			"Z026_side_attack_1","Z026_side_attack_2","Z026_side_attack_3",
			"Z026_side_attack_4","Z026_side_attack_5","Z026_side_attack_6",
			"Z026_side_attack_7","Z026_side_attack_8","Z026_side_dead_0",
			"Z026_side_dead_1","Z026_side_dead_2","Z026_side_dead_3",
			"Z026_side_dead_4","Z026_side_walk_0","Z026_side_walk_1",
			"Z026_side_walk_2","Z026_side_walk_3","Z026_side_walk_4",
			"Z026_side_walk_5","Z026_side_walk_6","Z026_side_walk_7",
			"Z026_side_walk_8"
		], settings);
		settings.framewidth = settings.framewidth || 141;
		settings.frameheight = settings.frameheight || 194;
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

		this.addAnimation('front-walk', [{ name: "Z026_front_walk_0", delay: 100 },{ name: "Z026_front_walk_1", delay: 100 },{ name: "Z026_front_walk_2", delay: 100 },{ name: "Z026_front_walk_3", delay: 100 },{ name: "Z026_front_walk_4", delay: 100 },{ name: "Z026_front_walk_5", delay: 100 },{ name: "Z026_front_walk_6", delay: 100 },{ name: "Z026_front_walk_7", delay: 100 },{ name: "Z026_front_walk_8", delay: 100 }]);
		this.addAnimation('front-attack', [{ name: "Z026_front_attack_0", delay: 100 },{ name: "Z026_front_attack_1", delay: 100 },{ name: "Z026_front_attack_2", delay: 100 },{ name: "Z026_front_attack_3", delay: 100 },{ name: "Z026_front_attack_4", delay: 100 },{ name: "Z026_front_attack_5", delay: 100 },{ name: "Z026_front_attack_6", delay: 100 },{ name: "Z026_front_attack_7", delay: 100 },{ name: "Z026_front_attack_8", delay: 100 }]);
		this.addAnimation('side-attack', [{ name: "Z026_side_attack_0", delay: 100 },{ name: "Z026_side_attack_1", delay: 100 },{ name: "Z026_side_attack_2", delay: 100 },{ name: "Z026_side_attack_3", delay: 100 },{ name: "Z026_side_attack_4", delay: 100 },{ name: "Z026_side_attack_5", delay: 100 },{ name: "Z026_side_attack_6", delay: 100 },{ name: "Z026_side_attack_7", delay: 100 },{ name: "Z026_side_attack_8", delay: 100 }]);
		this.addAnimation('side-walk', [{ name: "Z026_side_walk_0", delay: 100 },{ name: "Z026_side_walk_1", delay: 100 },{ name: "Z026_side_walk_2", delay: 100 },{ name: "Z026_side_walk_3", delay: 100 },{ name: "Z026_side_walk_4", delay: 100 },{ name: "Z026_side_walk_5", delay: 100 },{ name: "Z026_side_walk_6", delay: 100 },{ name: "Z026_side_walk_7", delay: 100 },{ name: "Z026_side_walk_8", delay: 100 }]);
		this.addAnimation('side-dead', [{ name: "Z026_side_dead_0", delay: 100 },{ name: "Z026_side_dead_1", delay: 100 },{ name: "Z026_side_dead_2", delay: 100 },{ name: "Z026_side_dead_3", delay: 100 },{ name: "Z026_side_dead_4", delay: 100 }]);
		this.addAnimation('front-dead', [{ name: "Z026_front_dead_0", delay: 100 },{ name: "Z026_front_dead_1", delay: 100 },{ name: "Z026_front_dead_2", delay: 100 },{ name: "Z026_front_dead_3", delay: 100 },{ name: "Z026_front_dead_4", delay: 100 }]);
		this.setCurrentAnimation('front-walk');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 20, 20, 101, 130) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.pos.z = 10;
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        
        let dataZombie = game.controller.data.getDataZombie();
        for(let id in dataZombie){
            if(dataZombie[id]["id"] == "Z026"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.damage = dataZombie[id]["atk"];
                this.reward = dataZombie[id]["reward"];
                this.moveSpeed = dataZombie[id]["movement"];
            }
        }
        
        this.body.getShape().translate(-this.width/2, -this.height/3.5);
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
        
        this.tween = new me.Tween();
        this.walk = true;
        this.hitLimit = true;
        this.random = false;
		this.sideAtk = false;
		this.sideAtkflip = false;
		this.frontAtk = false;
		this.walk = true;
		this.atk = true;
		this.hit = true;
		this.kena = true;
		this.kenaMissile = true;
        this.kenaNuke = true;
        this.hitRacun1 = true;
        this.timeOutDelay = [1, 400, 800, 1200, 1600];
        this.tween1 = false;
        this.tween2 = false;
        this.shieldOn = false;
        this.haveRacun = false;
	    this.body.vel.y = this.moveSpeed;
		this.dieFunc();
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
        
        if (other.body.collisionType === game.collisionTypes.PLAYER) {
            if(this.hit){
                if(this.getCurrentAnimationFrame() == 7){
                    other.health -= this.damage;
                }
            }

            if(this.atk){
                this.atk = false;
                this.atkFunc();
	        }
            return false;
        }
        if (other.body.collisionType === game.collisionTypes.PELURULASER) {
            if(this.kena){
                this.kena = false;
                let hitAnim = me.pool.pull ("WP0006ujungPeluru", this.pos.x, this.pos.y+15);
                me.game.world.addChild(hitAnim, this.pos.z+1);
                this.delay = me.timer.setTimeout(()=>{
                    this.kena = true;
                },1000);
			}
            return false;
        }
        if (other.body.collisionType === game.collisionTypes.PELURULISTRIK) {
            if(this.kena){
                this.kena = false;
                let hitAnim = me.pool.pull ("WP0007ujungPeluru", this.pos.x, this.pos.y+7.5);
                me.game.world.addChild(hitAnim, this.pos.z+1);
                this.delay = me.timer.setTimeout(()=>{
                    this.kena = true;
                },1000);
			}
            return false;
        }
        if (other.body.collisionType === game.collisionTypes.RACUN) {
            
            if(this.hitRacun1){
                this.hitRacun1 = false;
                let randomTime = Math.floor(Math.random()*this.timeOutDelay.length);
                this.timeOt1 = me.timer.setTimeout(()=>{
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
                		        let toOnce=true;
                		        this.timeOt2 = me.timer.setTimeout(()=>{
                		            if(toOnce){
                                        toOnce = false;
                                        if(this.racun && this.haveRacun){
                                            this.haveRacun = false;
                                            me.game.world.removeChild(this.racun);
                                        }
                		            }
                                }, 300);
                                
                		        me.timer.clearInterval(this.racunInterval);
                		        this.hitRacun1 = true;
                		        this.duration = 0;
                		    }
                        }
            		}, 100);
                }, this.timeOutDelay[randomTime]);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.MISSILE) {
            
            
            if(this.kenaMissile){
                // console.log("kena missile");
                this.kenaMissile = false;
                this.health -= other.damage;
                this.timeOt3 = me.timer.setTimeout(()=>{
                    this.kenaMissile = true;
                },150);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.NUKE) {
            
            
            if(this.kenaNuke){
                this.kenaNuke = false;
                this.health -= other.damage;
                this.timeOt4 = me.timer.setTimeout(()=>{
                    this.kenaNuke = true;
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
        me.timer.clearTimeout(this.delay);
        me.timer.clearTimeout(this.durationATK);
        if(this.tween1){this.tween.stop()}
        if(this.tween2){this.tween.stop()}
        this.tween.stop();
        //  End of user code  //
	},

    // Put user code here //
    dieFunc: function(){
        if(this.health <= 0){
            if(this.racun && this.haveRacun){
                this.haveRacun = false;
                me.game.world.removeChild(this.racun);
            }
            if(this.tween1){this.tween.stop()}
            if(this.tween2){this.tween.stop()}
            this.tween.stop();
            me.timer.clearTimeout(this.durationATK);
            
            let coinAnim = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
            me.game.world.addChild(coinAnim, this.pos.z+4);
            
            game.controller.data.addGold(this.reward);
            game.controller.data.addTemporaryGold(this.reward);
            game.controller.data.addTemporaryKill();
            game.controller.data.setDailyQuest('kill zombies', 1);
            
            if(this.sideAtk){
                if(!this.isCurrentAnimation('side-dead')){
                    this.setCurrentAnimation('side-dead');
                    this.timeOt5 = me.timer.setTimeout(()=>{
                        me.game.world.removeChildNow(this);
                    },500);
                    return false;
                }
            }else if(this.sideAtkflip){
                this.flipX(true);
                if(!this.isCurrentAnimation('side-dead')){
                    this.setCurrentAnimation('side-dead');
                    this.timeOt6 = me.timer.setTimeout(()=>{
                        me.game.world.removeChildNow(this);
                    },500);
                    return false;
                }
            }else if(this.frontAtk || this.walk){
                if(!this.isCurrentAnimation('front-dead')){
                    this.setCurrentAnimation('front-dead');
                    this.timeOt7 = me.timer.setTimeout(()=>{
                        me.game.world.removeChildNow(this);
                    },500);
                    return false;
                }
            }
        } else {
            this.timeOt8 = me.timer.setTimeout(()=>{
                this.dieFunc();
            }, 3000);
        }
    },
    
    atkFunc: function(){
        this.hit = true;
        this.body.vel.y = 0;
        this.body.vel.x = 0;
        
        let kiri = me.game.viewport.width/2-35,
            kanan = me.game.viewport.width/2+35;
            
        if(this.pos.x <= kiri){
            this.flipX(false);
            this.sideAtk = true;
            if(!this.isCurrentAnimation('side-attack')){
                this.setCurrentAnimation('side-attack');
            }
            
            this.durationATK = me.timer.setTimeout(()=>{
                this.sideAtk = false;
                this.keKananFunc();
            },3000);
        }
        if(this.pos.x >= kanan){
            this.flipX(true);
            this.sideAtkflip = true;
            if(!this.isCurrentAnimation('side-attack')){
                this.setCurrentAnimation('side-attack');
            }
            
            this.durationATK = me.timer.setTimeout(()=>{
                this.sideAtkflip = false;
                this.keKiriFunc();
            },3000);
        }
        if(this.pos.x > kiri && this.pos.x < kanan){
            this.flipX(false);
            this.frontAtk = true;
            let rd = Math.floor(Math.random()*2)+0;
            if(!this.isCurrentAnimation('front-attack')){
                this.setCurrentAnimation('front-attack');
            }
            
            this.durationATK = me.timer.setTimeout(()=>{
                this.frontAtk = false;
                this.randomFunc = (rd == 0) ? this.keKananFunc() : this.keKiriFunc();
            },3000);
        }
    },
    
    keKananFunc: function(){
        this.sideAtk = true;
        this.flipX(false);
        this.hit = false;
        
        if(!this.isCurrentAnimation('side-walk')){
            this.setCurrentAnimation('side-walk');
        }
        
        this.tween1 = true;
        this.tween = new me.Tween(this.pos)
        .to({x:this.pos.x+75}, 350)
        .onComplete(() => {
            this.tween1 = false;
            this.atkFunc();
        });
        this.tween.start();
    },
    
    keKiriFunc: function(){
        this.sideAtkflip = true;
        this.flipX(true);
        this.hit = false;
        
        if(!this.isCurrentAnimation('side-walk')){
            this.setCurrentAnimation('side-walk');
        }
        
        this.tween2 = true;
        this.tween = new me.Tween(this.pos)
        .to({x:this.pos.x-75}, 350)
        .onComplete(() => {
            this.tween2 = false;
            this.atkFunc();
        });
        this.tween.start();
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();