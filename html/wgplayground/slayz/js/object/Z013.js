(function(){
// Put user code here //
 
//  End of user code  //

game.object.Z013 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "southAmericaZombie";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"Z013_diagonal_walk_00","Z013_diagonal_walk_01","Z013_front_walk_00",
			"Z013_front_walk_01","Z013_side_walk_00","Z013_side_walk_01"
		], settings);
		settings.framewidth = settings.framewidth || 63;
		settings.frameheight = settings.frameheight || 156;
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

		this.addAnimation('diagonal-walk', [{ name: "Z013_diagonal_walk_00", delay: 100 },{ name: "Z013_diagonal_walk_01", delay: 100 }]);
		this.addAnimation('front-walk', [{ name: "Z013_front_walk_00", delay: 100 },{ name: "Z013_front_walk_01", delay: 100 }]);
		this.addAnimation('side-walk', [{ name: "Z013_side_walk_00", delay: 100 },{ name: "Z013_side_walk_01", delay: 100 }]);
		this.setCurrentAnimation('front-walk');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 0, 0, 104, 145) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
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
// 		console.log(this.width, this.height);
		let dataZombie = game.controller.data.getDataZombie();
        
        for(let id in dataZombie){
            if(dataZombie[id]["id"] == "Z013"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.damage = dataZombie[id]["atk"];
                this.reward = dataZombie[id]["reward"];
                this.moveSpeed = dataZombie[id]["movement"];
            }
        }
		
		this.tween = new me.Tween();
		this.body.getShape().translate(0, -this.height/2);
		this.pos.z = 30;
		this.die = true;
		this.atk = true;
		this.limit = true;
		this.duration = 0;
        this.hitRacun1 = true;
        this.kenaMissile = true;
        this.kenaNuke = true;
        this.kena = true;
        this.timeOutDelay = [100, 300, 500, 700, 900];
        this.deadDelayTime = [100, 200, 300];
        this.intervalMoveKanan;
        this.intervalMoveKiri;
        this.intervalMoveBawah;
        this.randomInterval;
        this.haveRacun = false;
        
        if(this.pos.x >= 1250){
            this.body.vel.y = 0;
            this.body.vel.x = -this.moveSpeed;
            this.flipX(true);
            this.setCurrentAnimation('side-walk');
            this.kananFunc();
        }else if(this.pos.x <= 50){
            this.body.vel.y = 0;
            this.body.vel.x = this.moveSpeed;
            this.setCurrentAnimation('side-walk');
            this.kiriFunc();
        }else  if(this.pos.x > 50 && this.pos.x < 1150){
            this.body.vel.y = this.moveSpeed;
            this.body.vel.x = 0;
            this.bawahFunc();
        }
        
        this.sfxDied = ["sfx-zombie-died", "sfx-zombie-died-2", "sfx-zombie-died"];
        
        me.audio.play("sfx-zombie-bats", true, null, game.user.userData.sound.SFX);
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
            me.timer.clearInterval(this.randomInterval);
            other.health -= this.damage*10;//damage
            if(this.atk){
                this.atk = false;
                this.atkFunc();
	        }
            return false;
        }
        
        if(other.body.collisionType === game.collisionTypes.LIMIT){
            me.timer.clearInterval(this.randomInterval);
            
            if(this.limit){
                this.limit = false;
                if(this.pos.x > me.game.viewport.width/2){
                    this.walkLeft();
                }else if(this.pos.x < me.game.viewport.width/2){
                    this.walkRight();
                }
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.PELURULASER) {
            if(this.kena){
                this.kena = false;
                let hitAnim = me.pool.pull ("WP0006ujungPeluru", this.pos.x, this.pos.y+7.5);
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
                            this.racun = me.pool.pull("me.Sprite", this.pos.x, this.pos.y-this.selisihHeightLayar-this.height/2, {
                                image:  game.textureMap.get("effect"),
                                region:"poison fx"
                            });
                            me.game.world.addChild(this.racun, this.pos.z+1);
                            this.haveRacun = true;
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
        me.timer.clearInterval(this.intervalMoveKanan);
        me.timer.clearInterval(this.intervalMoveKiri);
        me.timer.clearInterval(this.intervalMoveBawah);
        me.timer.clearInterval(this.randomInterval);
        if(this.tween == undefined){
            
        }else{
            this.tween.stop();
        }
        this.tween.stop();
        me.game.world.removeChild(this);
        
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.timeOt3);
        me.timer.clearTimeout(this.timeOt4);
        me.timer.clearTimeout(this.timeOt5);
        me.timer.clearTimeout(this.timeOt6);
        me.timer.clearTimeout(this.delay);
        me.timer.clearInterval(this.intervalDieFunc);
        //  End of user code  //
	},

    // Put user code here //
    dieFunc: function(){
        this.intervalDieFunc = me.timer.setInterval(()=>{
            if(this.health <= 0){
                me.timer.clearInterval(this.intervalMoveKanan);
                me.timer.clearInterval(this.intervalMoveKiri);
                me.timer.clearInterval(this.intervalMoveBawah);
                me.timer.clearInterval(this.randomInterval);
                
                if(this.die){
                    this.die = false;
                    if(this.racun && this.haveRacun){
                        this.haveRacun = false;
                        me.game.world.removeChild(this.racun);
                    }
                    this.tween.stop();
                    let dieAnim = me.pool.pull ("battleDieAnim", this.pos.x, this.pos.y+15);
                    me.game.world.addChild(dieAnim, this.pos.z+3);
                    
                    let coinAnim = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                    me.game.world.addChild(coinAnim, this.pos.z+4);
                    
                    let randomTime = Math.floor(Math.random()*this.deadDelayTime.length);
                    this.timeOt5 = me.timer.setTimeout(()=>{
                        game.controller.data.addGold(this.reward);
                        game.controller.data.addTemporaryGold(this.reward);
                        game.controller.data.addTemporaryKill();
                        game.controller.data.setDailyQuest('kill zombies', 1);
                    }, this.deadDelayTime[randomTime]);
                    
                    var sfx = this.sfxDied[Math.floor(Math.random()*this.sfxDied.length)];
                    me.audio.stop("sfx-zombie-bats");
                    me.audio.play(sfx, false, null, game.user.userData.sound.SFX);
                    me.timer.clearInterval(this.intervalDieFunc);
        		    me.game.world.removeChildNow(this);
                }
            }
        },1000);
    },
    
    kananFunc:function(){
        this.intervalMoveKanan = me.timer.setInterval(()=>{
            if(this.pos == undefined){
                me.timer.clearInterval(this.intervalMoveKanan);
            }else{
                if(this.pos.x <= me.game.viewport.width-me.game.viewport.width/4){
                    me.timer.clearInterval(this.intervalMoveKanan);
                    this.randomWalk();
                }
            }
        },1000);
    },
    
    kiriFunc:function(){
        this.intervalMoveKiri = me.timer.setInterval(()=>{
            if(this.pos == undefined){
                me.timer.clearInterval(this.intervalMoveKiri);
            }else{
                if(this.pos.x >= me.game.viewport.width/4){
                    me.timer.clearInterval(this.intervalMoveKiri);
                    this.randomWalk();
                }
            }
        },1000);
    },
    
    bawahFunc:function(){
        this.intervalMoveBawah = me.timer.setInterval(()=>{
            if(this.pos == undefined){
                me.timer.clearInterval(this.intervalMoveBawah);
            }else{
                if(this.pos.y >= me.game.viewport.height/2-250){
                    me.timer.clearInterval(this.intervalMoveBawah);
                    this.randomWalk();
                }
            }
        },1000);
    },
    
    walkDown:function(){
        if(this.body == undefined){
            
        }else{
            this.body.vel.y = this.moveSpeed;
            this.body.vel.x = 0;
            if(!this.isCurrentAnimation('front-walk')){
                this.setCurrentAnimation('front-walk');
            }
        }
    },
    walkLeft:function(){
        if(this.body == undefined){
            
        }else{
            this.body.vel.y = 0;
            this.body.vel.x = -this.moveSpeed;
            this.flipX(true);
            if(!this.isCurrentAnimation('side-walk')){
                this.setCurrentAnimation('side-walk');
            }
        }
    },
    walkRight:function(){
        if(this.body == undefined){
            
        }else{
            this.body.vel.y = 0;
            this.body.vel.x = this.moveSpeed;
            this.flipX(false);
            if(!this.isCurrentAnimation('side-walk')){
                this.setCurrentAnimation('side-walk');
            }
        }
    },
    walkDiagonalLeft:function(){
        if(this.body == undefined){
            
        }else{
            this.body.vel.y = this.moveSpeed;
            this.body.vel.x = -this.moveSpeed;
            this.flipX(true);
            if(!this.isCurrentAnimation('diagonal-walk')){
                this.setCurrentAnimation('diagonal-walk');
            }
        }
    },
    walkDiagonalRight:function(){
        if(this.body == undefined){
            
        }else{
            this.body.vel.y = this.moveSpeed;
            this.body.vel.x = this.moveSpeed;
            this.flipX(false);
            if(!this.isCurrentAnimation('diagonal-walk')){
                this.setCurrentAnimation('diagonal-walk');
            }
        }
    },
    
    randomWalk:function(){
        this.walkDown();
        let changeTime = 0,
            changeFunc = 0;
        this.randomInterval = me.timer.setInterval(()=>{
            changeTime++;
            if(changeTime == 2){
                changeFunc = Math.floor(Math.random()*3)+0;
                let randomFunc = (changeFunc == 0) ? this.walkLeft() : this.walkRight();
            }
            if(changeTime == 5){
                changeFunc = Math.floor(Math.random()*3)+0;
                let randomFunc = (changeFunc == 0) ? this.walkDiagonalLeft() : this.walkDiagonalRight();
            }
            if(changeTime >= 7){
                changeTime = 0;
                this.walkDown();
            }
        },1000);
    },
    
    atkFunc:function(){
        this.body.vel.y = 0;
        this.body.vel.x = 0;
        if(this.pos.x <= me.game.viewport.width/2-25){
            this.tweenAtkLeft();
            this.flipX(false);
            if(!this.isCurrentAnimation('diagonal-walk')){
                this.setCurrentAnimation('diagonal-walk');
            }
        }else if(this.pos.x >= me.game.viewport.width/2+25){
            this.tweenAtkRight();
            this.flipX(true);
            if(!this.isCurrentAnimation('diagonal-walk')){
                this.setCurrentAnimation('diagonal-walk');
            }
        } else if(this.pos.x > me.game.viewport.width/2-25 && this.pos.x < me.game.viewport.width/2+25){
            this.tweenAtk();
            if(!this.isCurrentAnimation('front-walk')){
                this.setCurrentAnimation('front-walk');
            }
        }
    },
    
    tweenAtk:function(){
        this.tween = new me.Tween(this.pos)
        .to({y:this.pos.y-50}, 500)
        .onComplete(() => {
            this.tweenAtkforward();
        });
        this.tween.start();
    },
    tweenAtkLeft:function(){
        this.tween = new me.Tween(this.pos)
        .to({y:this.pos.y-50,x:this.pos.x-50}, 500)
        .onComplete(() => {
            this.tweenAtkLeftforward();
        });
        this.tween.start();
    },
    tweenAtkRight:function(){
        this.tween = new me.Tween(this.pos)
        .to({y:this.pos.y-50,x:this.pos.x+50}, 500)
        .onComplete(() => {
            this.tweenAtkRightforward();
        });
        this.tween.start();
    },
    
    tweenAtkforward:function(){
        this.tween = new me.Tween(this.pos)
        .to({y:this.pos.y+50}, 150)
        .onComplete(() => {
            this.tweenAtk();
        });
        this.tween.start();
    },
    tweenAtkLeftforward:function(){
        this.tween = new me.Tween(this.pos)
        .to({y:this.pos.y+50,x:this.pos.x+50}, 150)
        .onComplete(() => {
            this.tweenAtkLeft();
        });
        this.tween.start();
    },
    tweenAtkRightforward:function(){
        this.tween = new me.Tween(this.pos)
        .to({y:this.pos.y+50,x:this.pos.x-50}, 150)
        .onComplete(() => {
            this.tweenAtkRight();
        });
        this.tween.start();
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();