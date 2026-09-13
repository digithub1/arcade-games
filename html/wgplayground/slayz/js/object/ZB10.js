(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB10 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "africaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ZB10_attack_01","ZB10_attack_03","ZB10_attack_04",
			"ZB10_attack_05","ZB10_attack_06","ZB10_attack_07",
			"ZB10_attack_08","ZB10_attack_09","ZB10_idle_00",
			"ZB10_idle_01","ZB10_idle_02","ZB10_idle_03",
			"ZB10_idle_04","ZB10_idle_05","ZB10_idle_06",
			"ZB10_idle_07","ZB10_idle_08","ZB10_idle_09",
			"ZB10_special_00","ZB10_special_01","ZB10_special_02",
			"ZB10_special_03","ZB10_special_04","ZB10_special_05",
			"ZB10_special_06","ZB10_special_07","ZB10_special_08",
			"ZB10_special_09","ZB10_special_10","ZB10_special_11",
			"ZB10_special_12","ZB10_special_13","ZB10_special_14",
			"ZB10_special_15","ZB10_special_16","ZB10_special_17",
			"ZB10_special_18","ZB10_special_19","ZB10_attack_02",
			"ZB10_attack_00","ZB10_die_00","ZB10_die_01",
			"ZB10_die_02","ZB10_die_03","ZB10_die_04",
			"ZB10_die_05","ZB10_die_06","ZB10_die_07",
			"ZB10_die_08","ZB10_die_09","ZB10_die_10",
			"ZB10_die_11"
		], settings);
		settings.framewidth = settings.framewidth || 167;
		settings.frameheight = settings.frameheight || 259;
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

		this.addAnimation('walk&idle', [{ name: "ZB10_idle_00", delay: 100 },{ name: "ZB10_idle_01", delay: 100 },{ name: "ZB10_idle_02", delay: 100 },{ name: "ZB10_idle_03", delay: 100 },{ name: "ZB10_idle_04", delay: 100 },{ name: "ZB10_idle_05", delay: 100 },{ name: "ZB10_idle_06", delay: 100 },{ name: "ZB10_idle_07", delay: 100 },{ name: "ZB10_idle_08", delay: 100 },{ name: "ZB10_idle_09", delay: 100 }]);
		this.addAnimation('attack', [{ name: "ZB10_attack_01", delay: 100 },{ name: "ZB10_attack_03", delay: 100 },{ name: "ZB10_attack_04", delay: 100 },{ name: "ZB10_attack_05", delay: 100 },{ name: "ZB10_attack_06", delay: 100 },{ name: "ZB10_attack_07", delay: 100 },{ name: "ZB10_attack_08", delay: 100 },{ name: "ZB10_attack_09", delay: 100 },{ name: "ZB10_attack_02", delay: 100 },{ name: "ZB10_attack_00", delay: 100 }]);
		this.addAnimation('special', [{ name: "ZB10_special_00", delay: 100 },{ name: "ZB10_special_01", delay: 100 },{ name: "ZB10_special_02", delay: 100 },{ name: "ZB10_special_03", delay: 100 },{ name: "ZB10_special_04", delay: 100 },{ name: "ZB10_special_05", delay: 100 },{ name: "ZB10_special_06", delay: 100 },{ name: "ZB10_special_07", delay: 100 },{ name: "ZB10_special_08", delay: 100 },{ name: "ZB10_special_09", delay: 100 },{ name: "ZB10_special_10", delay: 100 },{ name: "ZB10_special_11", delay: 100 },{ name: "ZB10_special_12", delay: 100 },{ name: "ZB10_special_13", delay: 100 },{ name: "ZB10_special_14", delay: 100 },{ name: "ZB10_special_15", delay: 100 },{ name: "ZB10_special_16", delay: 100 },{ name: "ZB10_special_17", delay: 100 },{ name: "ZB10_special_18", delay: 100 },{ name: "ZB10_special_19", delay: 100 }]);
		this.addAnimation('first', [{ name: "ZB10_idle_00", delay: 100 }]);
		this.addAnimation('die', [{ name: "ZB10_die_00", delay: 100 },{ name: "ZB10_die_01", delay: 100 },{ name: "ZB10_die_02", delay: 100 },{ name: "ZB10_die_03", delay: 100 },{ name: "ZB10_die_04", delay: 100 },{ name: "ZB10_die_05", delay: 100 },{ name: "ZB10_die_06", delay: 100 },{ name: "ZB10_die_06", delay: 100 },{ name: "ZB10_die_06", delay: 100 },{ name: "ZB10_die_06", delay: 100 },{ name: "ZB10_die_07", delay: 100 },{ name: "ZB10_die_08", delay: 100 },{ name: "ZB10_die_09", delay: 100 },{ name: "ZB10_die_10", delay: 100 },{ name: "ZB10_die_11", delay: 100 },{ name: "ZB10_die_11", delay: 100 },{ name: "ZB10_die_11", delay: 100 },{ name: "ZB10_die_11", delay: 100 },{ name: "ZB10_die_11", delay: 100 },{ name: "ZB10_die_11", delay: 100 },{ name: "ZB10_die_11", delay: 100 },{ name: "ZB10_die_11", delay: 100 },{ name: "ZB10_die_11", delay: 100 },{ name: "ZB10_die_11", delay: 100 }]);
		this.setCurrentAnimation('first');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 20, 20, 127, 55) );
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
            if(dataZombie[id]["id"] == "ZB10"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.reward = dataZombie[id]["reward"];
            }
        }
        
        this.tweenFall1 = new me.Tween();
        this.tweenFall2 = new me.Tween();
        this.tweenFall3 = new me.Tween();
        this.tweenFall4 = new me.Tween();
        this.tweenBack1 = new me.Tween();
        this.tweenBack2 = new me.Tween();
        this.tweenBack3 = new me.Tween();
        this.pos.z = 10;
        this.body.getShape().translate(-this.width/2, 0);
        this.healthBase = this.health;
        this.shieldOn = true;
        this.tweenFall;
        this.fall1;
        this.fall2;
        this.fall3;
        this.fall4;
        this.back1;
        this.back2;
        this.back3;
        this.phase2Bool = true;
        this.phase3Bool = true;
        this.phase4Bool = true;
        this.play = true;
        this.attack = true;
        this.walk = true;
        this.attackDie = true;
        this.animHit = false;
        this.die = true;
        this.kena = true;
        this.duration = 0;
        this.hitRacun1 = true;
        this.dieInterval;
        this.bosEnd = false;
        this.once = true;
        this.timeWait = 0;
        this.tidakDiHit = true;
        this.hidup = true;
        this.haveRacun = false;
        
        // let coffin = me.pool.pull ("coffinZombieMummy", me.game.viewport.width/2, me.game.viewport.height/2);
        // me.game.world.addChild(coffin, this.pos.z);
        
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
        if(this.health <= this.healthBase*3/4 && this.phase2Bool && this.play){
            this.phase2Bool = false;
            this.play = false;
            this.phase2();
        }else if(this.health <= this.healthBase/2 && this.phase3Bool && this.play){
            this.phase3Bool = false;
            this.play = false;
            this.phase3();
        }else if(this.health <= this.healthBase/4 && this.phase4Bool && this.play){
            this.phase4Bool = false;
            this.play = false;
            this.phase4();
        }
        //  End of user code  //
		return drawNextFrame;
	},

	onCollision : function(response, other) {
		var isSolid = true;
        // Put user code here //
        isSolid = false;
        
        if (other.body.collisionType === game.collisionTypes.PELURU) {
            this.tidakDiHit = false;
            if(this.shieldOn){
                let shield = me.pool.pull ("ZB10Shield", this.pos.x, this.pos.y);
                me.game.world.addChild(shield, this.pos.z+1);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.PELURULASER) {
            this.tidakDiHit = false;
            if(this.shieldOn){
                let shield = me.pool.pull ("ZB10Shield", this.pos.x, this.pos.y);
                me.game.world.addChild(shield, this.pos.z+1);
            }else{
                if(this.kena){
                    this.kena = false;
                    this.hitAnim = me.pool.pull ("WP0006ujungPeluru", this.pos.x, this.pos.y+7.5);
                    me.game.world.addChild(this.hitAnim, this.pos.z+1);
                    this.delay = me.timer.setTimeout(()=>{
                        this.kena = true;
                    },1000);
    			}
            }
                
            return false;
        }
        if (other.body.collisionType === game.collisionTypes.PELURULISTRIK) {
            this.tidakDiHit = false;
            if(this.shieldOn){
                let shield = me.pool.pull ("ZB10Shield", this.pos.x, this.pos.y);
                me.game.world.addChild(shield, this.pos.z+1);
            }else{
                if(this.kena){
                    this.kena = false;
                    this.hitAnim = me.pool.pull ("WP0007ujungPeluru", this.pos.x, this.pos.y+7.5);
                    me.game.world.addChild(this.hitAnim, this.pos.z+1);
                    this.delay = me.timer.setTimeout(()=>{
                        this.kena = true;
                    },1000);
                }
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.RACUN) {
            this.tidakDiHit = false;
            if(this.shieldOn){
                if(this.once){
                    this.once = false;
                    let shield = me.pool.pull ("ZB10Shield", this.pos.x, this.pos.y);
                    me.game.world.addChild(shield, this.pos.z+1);
                    this.timeOt1 = me.timer.setTimeout(()=>{this.once = true},1500);
                }
            }else{
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
                		        this.timeOt2 = me.timer.setTimeout(()=>{
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
        if(this.fall1){this.tweenFall1.stop()}
        if(this.fall2){this.tweenFall2.stop()}
        if(this.fall3){this.tweenFall3.stop()}
        if(this.fall4){this.tweenFall3.stop()}
        if(this.back1){this.tweenBack1.stop()}
        if(this.back2){this.tweenBack2.stop()}
        if(this.back3){this.tweenBack2.stop()}
        
        me.timer.clearInterval(this.checkHealth);
        me.timer.clearInterval(this.dieInterval);
        me.timer.clearInterval(this.racunInterval);
        
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.timeOt3);
        me.timer.clearTimeout(this.delay);
        me.timer.clearTimeout(this.waitCheck);
        me.timer.clearTimeout(this.waitSpawn);
        //  End of user code  //
	},

    // Put user code here //
    phase1: function(){
        this.shieldOn = true;
        me.timer.clearInterval(this.kaloLamaGakdiHit);
        let to = true,
            to2 = true;
        me.audio.play("sfx-anubis-petir", true, null, game.user.userData.sound.SFX);
        if(!this.isCurrentAnimation('attack') && this.hidup){
            this.setCurrentAnimation('attack',()=>{
                if(to){
                    to = false;
                    let coffin = me.pool.pull ("coffinZombieMummy", this.pos.x+200, this.pos.y-10),
                        coffin2 = me.pool.pull ("coffinZombieMummy", this.pos.x-200, this.pos.y-10);
                    me.game.world.addChild(coffin, this.pos.z);
                    me.game.world.addChild(coffin2, this.pos.z);
                    coffin.plusX = 210;
                    coffin.plusY = -10;
                    coffin2.plusX = -190;
                    coffin2.plusY = -10;
                    this.waitCheck = me.timer.setTimeout(()=>{
                        if(to2){
                            to2 = false;
                            if(!this.isCurrentAnimation('walk&idle')){
                                this.setCurrentAnimation('walk&idle');
                                me.audio.stop("sfx-anubis-petir");
                            }
                            this.checkHealth = me.timer.setInterval(()=>{
                                if(coffin.zombieList[coffin.zombieList.length-1].health <= 0 && coffin2.zombieList[coffin2.zombieList.length-1].health <= 0){
                                    this.shieldOn = false;
                                    this.play = true;
                                    me.timer.clearInterval(this.checkHealth);
                                    this.kaloLamaGakdiHit = me.timer.setInterval(()=>{
                                        if(this.tidakDiHit){
                                            this.phase1();
                                        }
                                    },60000);
                                }
                            },1000);
                        }
                    }, 6000);
                }
            });
        }
    },
    phase2: function(){
        this.shieldOn = true;
        this.backPhase2();
    },
    phase3: function(){
        this.shieldOn = true;
        this.backPhase3();
    },
    phase4: function(){
        this.shieldOn = true;
        this.backPhase4();
    },
    
    attackPhase2:function(){
        this.shieldOn = true;
        me.timer.clearInterval(this.kaloLamaGakdiHit);
        let to = true,
            to2 = true;
        me.audio.play("sfx-anubis-petir", true, null, game.user.userData.sound.SFX);
        if(!this.isCurrentAnimation('attack') && this.hidup){
            this.setCurrentAnimation('attack',()=>{
                if(to){
                    to = false;
                    let coffin = me.pool.pull ("coffinZombieMummy", this.pos.x-250, this.pos.y-10),
                        coffin2 = me.pool.pull ("coffinZombieMummy", this.pos.x-450, this.pos.y-10);
                    me.game.world.addChild(coffin, this.pos.z);
                    me.game.world.addChild(coffin2, this.pos.z);
                    coffin.plusX = -190;
                    coffin.plusY = -10;
                    coffin2.plusX = 10;
                    coffin2.plusY = -10;
                    this.waitCheck = me.timer.setTimeout(()=>{
                        if(to2){
                            to2 = false;
                            if(!this.isCurrentAnimation('walk&idle')){
                                this.setCurrentAnimation('walk&idle');
                                 me.audio.stop("sfx-anubis-petir");
                            }
                            this.checkHealth = me.timer.setInterval(()=>{
                                if(coffin.zombieList[coffin.zombieList.length-1].health <= 0 && coffin2.zombieList[coffin2.zombieList.length-1].health <= 0){
                                    this.shieldOn = false;
                                    this.play = true;
                                    me.timer.clearInterval(this.checkHealth);
                                    this.kaloLamaGakdiHit = me.timer.setInterval(()=>{
                                        if(this.tidakDiHit){
                                            this.attackPhase2();
                                        }
                                    },60000);
                                }
                            },1000);
                        }
                    }, 6000);
                }
            });
        }
    },
    attackPhase3:function(){
        this.shieldOn = true;
        me.timer.clearInterval(this.kaloLamaGakdiHit);
        let to = true,
            to2 = true;
        me.audio.play("sfx-anubis-petir", true, null, game.user.userData.sound.SFX);
        if(!this.isCurrentAnimation('attack') && this.hidup){
            this.setCurrentAnimation('attack',()=>{
                if(to){
                    to = false;
                    let coffin = me.pool.pull ("coffinZombieMummy", this.pos.x+450, this.pos.y-10),
                        coffin2 = me.pool.pull ("coffinZombieMummy", this.pos.x+250, this.pos.y-10);
                    me.game.world.addChild(coffin, this.pos.z);
                    me.game.world.addChild(coffin2, this.pos.z);
                    coffin.plusX = 210;
                    coffin.plusY = -10;
                    coffin2.plusX = 10;
                    coffin2.plusY = -10;
                    this.waitCheck = me.timer.setTimeout(()=>{
                        if(to2){
                            to2 = false;
                            if(!this.isCurrentAnimation('walk&idle')){
                                this.setCurrentAnimation('walk&idle');
                                 me.audio.stop("sfx-anubis-petir");
                            }
                            this.checkHealth = me.timer.setInterval(()=>{
                                if(coffin.zombieList[coffin.zombieList.length-1].health <= 0 && coffin2.zombieList[coffin2.zombieList.length-1].health <= 0){
                                    this.shieldOn = false;
                                    this.play = true;
                                    me.timer.clearInterval(this.checkHealth);
                                    this.kaloLamaGakdiHit = me.timer.setInterval(()=>{
                                        if(this.tidakDiHit){
                                            this.attackPhase3();
                                        }
                                    },60000);
                                }
                            },1000);
                        }
                    }, 6000);
                }
            });
        }
    },
    attackPhase4:function(){
        this.shieldOn = true;
        me.timer.clearInterval(this.kaloLamaGakdiHit);
        let to = true,
            to2 = true;
        me.audio.play("sfx-anubis-spesial", true, null, game.user.userData.sound.SFX);
        if(!this.isCurrentAnimation('special') && this.hidup){
            this.setCurrentAnimation('special',()=>{
                if(to){
                    to = false;
                    let coffin = me.pool.pull ("coffinZombieMummy", this.pos.x+150, this.pos.y-10),
                        coffin2 = me.pool.pull ("coffinZombieMummy", this.pos.x-150, this.pos.y-10),
                        coffin3 = me.pool.pull ("coffinZombieMummy", this.pos.x+350, this.pos.y+10),
                        coffin4 = me.pool.pull ("coffinZombieMummy", this.pos.x-350, this.pos.y+10);
                    me.game.world.addChild(coffin, this.pos.z);
                    me.game.world.addChild(coffin2, this.pos.z);
                    me.game.world.addChild(coffin3, this.pos.z);
                    me.game.world.addChild(coffin4, this.pos.z);
                    coffin.plusX = 160;
                    coffin.plusY = -10;
                    coffin2.plusX = -140;
                    coffin2.plusY = -10;
                    coffin3.plusX = 360;
                    coffin3.plusY = -10;
                    coffin4.plusX = -340;
                    coffin4.plusY = -10;
                    this.waitCheck = me.timer.setTimeout(()=>{
                        if(to2){
                            to2 = false;
                            if(!this.isCurrentAnimation('walk&idle')){
                                this.setCurrentAnimation('walk&idle');
                                 me.audio.stop("sfx-anubis-spesial");
                            }
                            this.checkHealth = me.timer.setInterval(()=>{
                                if(coffin.zombieList[coffin.zombieList.length-1].health <= 0 && coffin2.zombieList[coffin2.zombieList.length-1].health <= 0 && coffin3.zombieList[coffin3.zombieList.length-1].health <= 0 && coffin4.zombieList[coffin4.zombieList.length-1].health <= 0){
                                    this.shieldOn = false;
                                    this.play = true;
                                    me.timer.clearInterval(this.checkHealth);
                                    this.kaloLamaGakdiHit = me.timer.setInterval(()=>{
                                        if(this.tidakDiHit){
                                            this.attackPhase4();
                                        }
                                    },60000);
                                }
                            },1000);
                        }
                    }, 6000);
                }
            });
        }
    },
    
    fallPhase1: function(){
        this.fall1 = true;
        this.tweenFall1 = new me.Tween(this.pos)
        .to({y:this.pos.y+360}, 500)
        .onComplete(()=>{
            this.fall1 = false;
            me.audio.play("sfx-MKalien-Exp", false, null, game.user.userData.sound.SFX);
            let fallSmoke = me.pool.pull ("ZB10FallSmoke", this.pos.x, this.pos.y+30);
            me.game.world.addChild(fallSmoke, this.pos.z-1);
            this.setCurrentAnimation('walk&idle');
            let to = true;
            this.waitSpawn = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    this.phase1();
                }
            }, 2000);
        });
        this.tweenFall1.start();
    },
    fallPhase2: function(){
        this.fall2 = true;
        this.tweenFall2 = new me.Tween(this.pos)
        .to({y:this.pos.y+360, x:this.pos.x+250}, 500)
        .onComplete(()=>{
            this.fall2 = false;
            me.audio.play("sfx-MKalien-Exp", false, null, game.user.userData.sound.SFX);
            let fallSmoke = me.pool.pull ("ZB10FallSmoke", this.pos.x, this.pos.y+30);
            me.game.world.addChild(fallSmoke, this.pos.z-1);
            let to = true;
            this.waitSpawn = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    this.attackPhase2();
                }
            }, 2000);
        });
        this.tweenFall2.start();
    },
    fallPhase3: function(){
        this.fall3 = true;
        this.tweenFall3 = new me.Tween(this.pos)
        .to({y:this.pos.y+360, x:this.pos.x-250}, 500)
        .onComplete(()=>{
            this.fall3 = false;
            me.audio.play("sfx-MKalien-Exp", false, null, game.user.userData.sound.SFX);
            let fallSmoke = me.pool.pull ("ZB10FallSmoke", this.pos.x, this.pos.y+30);
            me.game.world.addChild(fallSmoke, this.pos.z-1);
            let to = true;
            this.waitSpawn = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    this.attackPhase3();
                }
            }, 2000);
        });
        this.tweenFall3.start();
    },
    fallPhase4: function(){
        this.fall4 = true;
        this.tweenFall4 = new me.Tween(this.pos)
        .to({y:this.pos.y+360}, 500)
        .onComplete(()=>{
            this.fall4 = false;
            me.audio.play("sfx-MKalien-Exp", false, null, game.user.userData.sound.SFX);
            let fallSmoke = me.pool.pull ("ZB10FallSmoke", this.pos.x, this.pos.y+30);
            me.game.world.addChild(fallSmoke, this.pos.z-1);
            let to = true;
            this.waitSpawn = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    this.attackPhase4();
                }
            }, 2000);
        });
        this.tweenFall4.start();
    },
    backPhase2: function(){
        me.timer.clearInterval(this.kaloLamaGakdiHit);
        console.log("fase 2");
        this.back1 = true;
        this.tweenBack1 = new me.Tween(this.pos)
        .to({y:this.pos.y-360}, 500)
        .onComplete(()=>{
            this.back1 = false;
            let to = true;
            this.waitSpawn = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    this.fallPhase2();
                }
            }, 2000);
        });
        this.tweenBack1.start();
    },
    backPhase3: function(){
        me.timer.clearInterval(this.kaloLamaGakdiHit);
        console.log("fase 3");
        this.back2 = true;
        this.tweenBack2 = new me.Tween(this.pos)
        .to({y:this.pos.y-360, x:this.pos.x-250}, 500)
        .onComplete(()=>{
            this.back2 = false;
            let to = true;
            this.waitSpawn = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    this.fallPhase3();
                }
            }, 2000);
        });
        this.tweenBack2.start();
    },
    
    backPhase4: function(){
        me.timer.clearInterval(this.kaloLamaGakdiHit);
        console.log("fase 4");
        this.back3 = true;
        this.tweenBack3 = new me.Tween(this.pos)
        .to({y:this.pos.y-360, x:this.pos.x+250}, 500)
        .onComplete(()=>{
            this.back3 = false;
            let to = true;
            this.waitSpawn = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    this.fallPhase4();
                }
            }, 2000);
        });
        this.tweenBack3.start();
    },
    
    dieFunc: function(){
        this.dieInterval = me.timer.setInterval(()=>{
            this.tidakDiHit = true;
            if(this.health <= 0){
                if(this.die){
                    this.die = false;
                    this.bosEnd = true;
                    this.hidup = false;
                    
                    if(this.haveRacun){
                        this.haveRacun = false;
                        me.game.world.removeChild(this.racun);
                    }
                    
                    this.coinAnim = me.pool.pull ("battleCoin", this.pos.x+30, this.pos.y);
                    me.game.world.addChild(this.coinAnim, this.pos.z+4);
                    this.coinAnim2 = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                    me.game.world.addChild(this.coinAnim2, this.pos.z+4);
                    this.coinAnim3 = me.pool.pull ("battleCoin", this.pos.x-30, this.pos.y);
                    me.game.world.addChild(this.coinAnim3, this.pos.z+4);
                    game.controller.data.addGold(this.reward);
                    game.controller.data.addTemporaryGold(this.reward);
                    game.controller.data.addTemporaryKill();
                    game.controller.data.setDailyQuest('kill zombies', 1);
                    let to = true;
                    if(!this.isCurrentAnimation('die')){
                        this.setCurrentAnimation('die',()=>{
                            if(to){
                                to = false;
                                this.dieAnim = me.pool.pull ("battleDieAnim", this.pos.x, this.pos.y+15);
                                me.game.world.addChild(this.dieAnim, this.pos.z+3);
                                this.container.decisionFunc();
                                me.timer.clearInterval(this.dieInterval);
                                me.game.world.removeChild(this);
                            }
                            return false;
                        });
                    }
                    
                    me.audio.play("sfx-anubis-died", false, null, game.user.userData.sound.SFX);
                }
            }
        },1000);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();