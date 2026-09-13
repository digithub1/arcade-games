(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB08 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "asiaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ZB08_attack_0","ZB08_attack_1","ZB08_attack_2",
			"ZB08_attack_3","ZB08_attack_4","ZB08_attack_5",
			"ZB08_attack_6","ZB08_attack_7","ZB08_attack_8",
			"ZB08_attack_9","ZB08_dead_0","ZB08_dead_1",
			"ZB08_dead_2","ZB08_dead_3","ZB08_dead_4",
			"ZB08_idle_0","ZB08_idle_1","ZB08_idle_2",
			"ZB08_idle_3","ZB08_idle_4","ZB08_idle_5",
			"ZB08_idle_6","ZB08_idle_7","ZB08_idle_8",
			"ZB08_idle_9"
		], settings);
		settings.framewidth = settings.framewidth || 900;
		settings.frameheight = settings.frameheight || 700;
		settings.anchorPoint = {
			x: 0,
			y: 0
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

		this.addAnimation('front-attack', [{ name: "ZB08_attack_0", delay: 100 },{ name: "ZB08_attack_1", delay: 100 },{ name: "ZB08_attack_2", delay: 100 },{ name: "ZB08_attack_3", delay: 100 },{ name: "ZB08_attack_4", delay: 100 },{ name: "ZB08_attack_5", delay: 100 },{ name: "ZB08_attack_6", delay: 100 },{ name: "ZB08_attack_7", delay: 100 },{ name: "ZB08_attack_8", delay: 100 },{ name: "ZB08_attack_9", delay: 100 }]);
		this.addAnimation('dead', [{ name: "ZB08_dead_0", delay: 100 },{ name: "ZB08_dead_1", delay: 100 },{ name: "ZB08_dead_2", delay: 100 },{ name: "ZB08_dead_3", delay: 100 },{ name: "ZB08_dead_4", delay: 100 }]);
		this.addAnimation('idle', [{ name: "ZB08_idle_0", delay: 100 },{ name: "ZB08_idle_1", delay: 100 },{ name: "ZB08_idle_2", delay: 100 },{ name: "ZB08_idle_3", delay: 100 },{ name: "ZB08_idle_4", delay: 100 },{ name: "ZB08_idle_5", delay: 100 },{ name: "ZB08_idle_6", delay: 100 },{ name: "ZB08_idle_7", delay: 100 },{ name: "ZB08_idle_8", delay: 100 },{ name: "ZB08_idle_9", delay: 100 }]);
		this.addAnimation('front-walk', [{ name: "ZB08_idle_0", delay: 100 },{ name: "ZB08_idle_1", delay: 100 },{ name: "ZB08_idle_2", delay: 100 },{ name: "ZB08_idle_3", delay: 100 },{ name: "ZB08_idle_4", delay: 100 },{ name: "ZB08_idle_5", delay: 100 },{ name: "ZB08_idle_6", delay: 100 },{ name: "ZB08_idle_7", delay: 100 },{ name: "ZB08_idle_8", delay: 100 },{ name: "ZB08_idle_9", delay: 100 }]);
		this.addAnimation('front-die', [{ name: "ZB08_dead_0", delay: 100 },{ name: "ZB08_dead_1", delay: 100 },{ name: "ZB08_dead_2", delay: 100 },{ name: "ZB08_dead_3", delay: 100 },{ name: "ZB08_dead_4", delay: 100 }]);
		this.setCurrentAnimation('front-walk');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 92, 0, 457, 90) );
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
            if(dataZombie[id]["id"] == "ZB08"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.damage = dataZombie[id]["atk"];
                this.reward = dataZombie[id]["reward"];
                this.moveSpeed = dataZombie[id]["movement"];
            }
        }
		
// 		console.log(this.health);
        this.pos.z = 10;
        this.body.vel.y = 0;
        this.body.getShape().translate(-this.width/2, 0);
        this.shieldOn = true;
        this.attack = true;
        this.walk = true;
        this.attackDie = true;
        this.smoke = true;
        this.animHit = false;
        this.die = true;
        this.kena = true;
        this.duration = 0;
        this.hitRacun1 = true;
        this.dieInterval;
        this.haveRacun = false;
        
        //me.audio.play("sfx-boss-spawn", false, null, game.user.userData.sound.SFX);
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        this.dieFunc();
        this.blinkPos = 0;
        this.blinkCount = 0;
        this.blinkTime = 0;
        this.startBlink = false;
        this.tweenIlang = new me.Tween();
        this.tweenMuncul = new me.Tween();
        
        this.tweenMove = new me.Tween(this.pos).to({y: me.game.viewport.height/2 + -30}, 5000).onComplete(function(){
            this.attack = true;
            this.shieldOn = false;
            if(this.startBlink == false){
                this.startBlink = true;
                this.blinkInterval = me.timer.setInterval(()=>{
                    this.blinkTime ++;
                    if(this.blinkTime == 5){
                        this.blinkTime = 0;
                        this.Blink();
                    }
                }, 1000);
            }
            
            this.tweenMove.stop();
            this.setCurrentAnimation("front-attack");
            this.body.addShape(me.pool.pull("me.Rect", 0, 0, this.width * 0.2, this.height - 200));
        }.bind(this));
        this.tweenMove.start();
        this.onAttack = false;
        
        //this.body.removeShape(this.body.getShape(1));
        this.idleSfx = ["sfx-krobelus-idle-1", "sfx-krobelus-idle-2"];
        
        this.idleInterval = me.timer.setInterval(()=>{
            let rand = Math.floor(Math.random() * this.idleSfx.length);
            me.audio.play(this.idleSfx[rand], false, null);
        }, 2000);
        
        /*this.kepakInterval = setInterval(()=>{
            //let rand = Math.floor(Math.random() * this.idleSfx.length);
            me.audio.play("sfx-krobelus-kepak-sayap", false, null);
        }, 500);*/
        let to = true;
        this.delay = me.timer.setTimeout(()=>{
            if(to){
                to = false;
                me.audio.play("sfx-krobelus-kepak-sayap", true, null);    
            }
        }, 2000);
       
        this.atkSfx = ["sfx-krobelus-atk-1", "sfx-krobelus-atk-2"];
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
            if(this.isCurrentAnimation("front-attack")){
                let frame = this.getCurrentAnimationFrame();
                if(frame == 3 || frame == 5 || frame == 7){
                    if(this.onAttack == false){
                        let rand = Math.floor(Math.random() * this.atkSfx.length);
                        me.audio.play(this.atkSfx[rand], false, null);
                        // console.log(this.damage);
                        other.health -= this.damage;
                        this.onAttack = true;
                    }
                }
                else if(frame != 3 && frame != 5 && frame != 7){
                    this.onAttack = false;
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
        this.tweenMove.stop();
        this.tweenIlang.stop();
        this.tweenMuncul.stop();
        me.timer.clearInterval(this.blinkInterval);
        
        me.timer.clearInterval(this.idleInterval);
        
        me.timer.clearTimeout(this.delay);
        me.timer.clearTimeout(this.delay2);
        me.timer.clearTimeout(this.delay3);
        //clearInterval(this.kepakInterval);
        //  End of user code  //
	},

    // Put user code here //
    dieFunc: function(){
        this.dieInterval = me.timer.setInterval(()=>{
            if(this.health <= 0){
                this.spawnerBat.stop = true;
                //this.tween.stop();
                if(this.die){
                    me.audio.play("sfx-krobelus-death", false, null, game.user.userData.sound.SFX);
                    this.attack = false;
                    this.die = false;
                    
                    if(this.racun && this.haveRacun){
                        this.haveRacun = false;
	                    me.game.world.removeChild(this.racun);   
	                }
                    
                    this.setAnimationFrame(0);
                    this.setCurrentAnimation('dead', function(){
                        this.coinAnim = me.pool.pull ("battleCoin", this.pos.x+30, this.pos.y);
                        me.game.world.addChild(this.coinAnim, this.pos.z+4);
                        this.coinAnim2 = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                        me.game.world.addChild(this.coinAnim2, this.pos.z+4);
                        this.coinAnim3 = me.pool.pull ("battleCoin", this.pos.x-30, this.pos.y);
                        me.game.world.addChild(this.coinAnim3, this.pos.z+4);
                        
                        let to = true;
                        this.delay3 = me.timer.setTimeout(()=>{
                            if(to){
                                to = false;
                                game.controller.data.addGold(this.reward);
                                game.controller.data.addTemporaryGold(this.reward);
                                game.controller.data.addTemporaryKill();
                                game.controller.data.setDailyQuest('kill zombies', 1);
                            }
                                
                        }, 300);
                    
                        me.game.world.removeChild(this);
                        me.timer.clearInterval(this.dieInterval);
                        this.endDead = true;
                        
                        return false;
                    }.bind(this));
                }
            }
        },1000);
    },
    
    Blink : function(){
        this.blinkPos;
        this.kiri = -300;
        this.kanan = 300;
        if(this.pos.x == me.game.world.width / 2){
            this.body.removeShape(this.body.getShape(1));
            let rand = Math.floor(Math.random() * 2);
            if(rand == 0){
                this.blinkPos = this.kiri;
            }
            else{
                this.blinkPos = this.kanan;
            }
        }
        else{
            if(this.blinkCount < 2){
                if(this.blinkPos < 0){
                    this.blinkPos = this.kanan;
                }
                else{
                    this.blinkPos = this.kiri;
                }
            }
            else if(this.blinkCount < 3){
                let rand = Math.floor(Math.random() * 2);
                if(rand == 0){
                    this.blinkPos = 0;
                }
                else{
                    if(this.blinkPos < 0){
                        this.blinkPos = this.kanan;
                    }
                    else{
                        this.blinkPos = this.kiri;
                    }
                }
            }
            else{
                this.blinkPos = 0;
            }
        }
        
        if(this.blinkPos == 0){
            this.body.addShape(me.pool.pull("me.Rect", 0, 0, this.width * 0.2, this.height - 200));
            this.blinkCount = 0;
        }
        else{
            this.blinkCount ++;
        }
        
        this.Ilang();
    },
    
    Ilang : function(){
        this.shieldOn = true;
        this.tweenIlang = new me.Tween(this)
            .to({alpha:0}, 1000)
            .onComplete(()=>{
                this.tweenIlang.stop();
                this.Muncul();
            });
        this.tweenIlang.start();
    },
    
    Muncul : function(){
        this.shieldOn = false;
        this.pos.x = (me.game.viewport.width / 2) + this.blinkPos;
        
        if(this.blinkPos != 0){
            this.setCurrentAnimation("front-walk");
        }
        else{
            this.attack = true;
        }
        this.tweenMuncul = new me.Tween(this)
            .to({alpha:1}, 1000)
            .onComplete(()=>{
                if(this.blinkPos == 0){
                    this.setAnimationFrame(0);
                    this.setCurrentAnimation("front-attack");
                }
                this.tweenMuncul.stop();
            });
        this.tweenMuncul.start();
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();