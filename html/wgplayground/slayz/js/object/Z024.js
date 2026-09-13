(function(){
// Put user code here //
 
//  End of user code  //

game.object.Z024 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "eropaZombie";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"Z024-guitar-00","Z024-guitar-01","Z024-guitar-02",
			"Z024-guitar-03","Z024-guitar-04","Z024-guitar-05",
			"Z024-guitar-06","Z024-guitar-07","Z024-guitar-08",
			"Z024-guitar-09","Z024-guitar-10","Z024-guitar-11",
			"Z024-guitar-12","Z024-guitar-13","Z024-guitar-14",
			"Z024-guitar-15","Z024-walk-00","Z024-walk-01",
			"Z024-walk-02","Z024-walk-03","Z024-walk-04",
			"Z024-walk-05","Z024-walk-06","Z024-walk-07",
			"Z024-walk-08","Z024-walk-09","Z024-walk-10",
			"Z024-walk-11","Z024-walk-12","Z024-walk-13",
			"Z024-walk-14"
		], settings);
		settings.framewidth = settings.framewidth || 205;
		settings.frameheight = settings.frameheight || 205;
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

		this.addAnimation('guitar', [{ name: "Z024-guitar-00", delay: 100 },{ name: "Z024-guitar-03", delay: 100 },{ name: "Z024-guitar-06", delay: 100 },{ name: "Z024-guitar-09", delay: 100 },{ name: "Z024-guitar-12", delay: 100 }]);
		this.addAnimation('front-walk', [{ name: "Z024-walk-00", delay: 100 },{ name: "Z024-walk-02", delay: 100 },{ name: "Z024-walk-06", delay: 100 },{ name: "Z024-walk-09", delay: 100 },{ name: "Z024-walk-12", delay: 100 }]);
		this.setCurrentAnimation('guitar');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 28, 0, 209, 351) );
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
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
            if(dataZombie[id]["id"] == "Z024"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.damage = dataZombie[id]["atk"];
                this.reward = dataZombie[id]["reward"];
                this.moveSpeed = dataZombie[id]["movement"];
            }
        }
		
        this.pos.z = 11;
        this.attack = true;
        this.walk = true;
        this.attackDie = true;
        this.animHit = false;
        // this.body.getShape().translate(-this.width/2, 0);
        this.die = true;
        this.kena = true;
        this.duration = 0;
        this.hitRacun1 = true;
        this.kenaMissile = true;
        this.kenaNuke = true;
        this.timeOutDelay = [100, 300, 500, 700, 900];
        this.deadDelayTime = [100, 200, 300];
        this.dieInterval;
        this.haveRacun = false;
        
        this.tween = new me.Tween();
        this.intervalSpeed = 15000;
        this.setCurrentAnimation('front-walk');
        this.tween = new me.Tween(this.pos).to({y: this.pos.y + 250, x: this.pos.x}, 4000).onComplete(this.Summon.bind(this));
        this.tween.start();
        
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
        
        if (other.body.collisionType === game.collisionTypes.MISSILE) {
            if(this.kenaMissile){
                // console.log("kena missile");
                this.kenaMissile = false;
                this.health -= other.damage;
                this.timeOt1 = me.timer.setTimeout(()=>{
                    this.kenaMissile = true;
                },150);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.NUKE) {
            if(this.kenaNuke){
                this.kenaNuke = false;
                this.health -= other.damage;
                this.timeOt2 = me.timer.setTimeout(()=>{
                    this.kenaNuke = true;
                },5000);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.RACUN) {
            if(this.hitRacun1){
                this.hitRacun1 = false;
                    
                let randomTime = Math.floor(Math.random()*this.deadDelayTime.length);
                this.timeOt3 = me.timer.setTimeout(()=>{
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
                		        this.timeOt4 = me.timer.setTimeout(()=>{
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
                }, this.deadDelayTime[randomTime]);
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
        me.timer.clearTimeout(this.delay);
        me.timer.clearInterval(this.dieInterval);
        this.tween.stop();
        if(this.tween != undefined)
            this.tween.stop();
                        
        if(this.summonInterval != undefined)
            me.timer.clearInterval(this.summonInterval);
        //  End of user code  //
	},

    // Put user code here //
    Summon : function(){
        this.setCurrentAnimation('guitar');
        this.summonPos = {y : this.pos.y - (me.game.viewport.height / 2),
                            x : this.pos.x - (me.game.viewport.width / 2)};
        
        this.SummonMole();
        this.summonInterval = me.timer.setInterval(function(){
            this.SummonMole();
        }.bind(this), this.intervalSpeed);
    },
    
    SummonMole : function(){
        this.thunder = me.pool.pull ('thunderBolt', this.summonPos.x, this.summonPos.y);
        me.game.world.addChild(this.thunder, 12);
        this.thunder.setCurrentAnimation('idle', function(){
            let zombie = me.pool.pull ('Z007', this.summonPos.x, this.summonPos.y + 100);
            me.game.world.addChild(zombie, 12);
            me.game.world.removeChild(this.thunder);
            return false;
        }.bind(this));
    },
    
    dieFunc: function(){
        if(this.health <= 0){
            if(this.die){
                this.die = false;
                if(this.racun && this.haveRacun){
                    this.haveRacun = false;
                    me.game.world.removeChild(this.racun);
                }
                this.body.vel.y = 0;
                this.body.vel.x = 0;
                
                if(this.walk){
                    this.walk = false;
                    
                    this.coinAnim = me.pool.pull ("battleCoin", this.pos.x+30, this.pos.y);
                    me.game.world.addChild(this.coinAnim, this.pos.z+4);
                    this.coinAnim2 = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                    me.game.world.addChild(this.coinAnim2, this.pos.z+4);
                    this.coinAnim3 = me.pool.pull ("battleCoin", this.pos.x-30, this.pos.y);
                    me.game.world.addChild(this.coinAnim3, this.pos.z+4);
                    
                    let randomTime = Math.floor(Math.random()*this.timeOutDelay.length);
                    this.timeOt5 = me.timer.setTimeout(()=>{
                        game.controller.data.addGold(this.reward);
                        game.controller.data.addTemporaryGold(this.reward);
                        game.controller.data.addTemporaryKill();
                        game.controller.data.setDailyQuest('kill zombies', 1);
                    }, this.timeOutDelay[randomTime]);
                
                    this.dieAnim = me.pool.pull ("battleDieAnim", this.pos.x, this.pos.y+15);
                    me.game.world.addChild(this.dieAnim, this.pos.z+3);
                    me.audio.play("sfx-boss-died", false, null, game.user.userData.sound.SFX);
                    
                    this.tween.stop();
                    me.game.world.removeChild(this);
                    me.timer.clearInterval(this.dieInterval);
                }
            }
        } else {
            this.timeOt6 = me.timer.setTimeout(()=>{
                this.dieFunc();
            },3000);
        }
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();