(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB02 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "americaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ZB02_front_attack_00","ZB02_front_attack_01","ZB02_front_attack_02",
			"ZB02_front_attack_03","ZB02_front_attack_04","ZB02_front_die_00",
			"ZB02_front_die_01","ZB02_front_die_02","ZB02_front_die_03",
			"ZB02_front_die_04","ZB02_front_die_05","ZB02_front_die_06",
			"ZB02_front_die_07","ZB02_front_die_08","ZB02_front_die_09",
			"ZB02_front_die_10","ZB02_front_die_11","ZB02_front_die_12",
			"ZB02_front_die_13","ZB02_front_die_14","ZB02_front_die_15",
			"ZB02_front_die_16","ZB02_front_die_17","ZB02_front_die_18",
			"ZB02_front_die_19","ZB02_front_die_20","ZB02_front_die_21",
			"ZB02_front_die_22","ZB02_front_die_23","ZB02_front_walk_00",
			"ZB02_front_walk_01","ZB02_front_walk_02","ZB02_front_walk_03",
			"ZB02_front_walk_04","ZB02_front_walk_05","ZB02_front_walk_06",
			"ZB02_front_walk_07","ZB02_front_walk_08","ZB02_front_walk_09",
			"ZB02_front_walk_10","ZB02_front_walk_11","ZB02_front_walk_12",
			"ZB02_front_walk_13","ZB02_front_walk_14","ZB02_front_walk_15",
			"ZB02_side_walk_00","ZB02_side_walk_01","ZB02_side_walk_02",
			"ZB02_side_walk_03","ZB02_side_walk_04","ZB02_side_walk_05",
			"ZB02_side_walk_06","ZB02_side_walk_07","ZB02_side_walk_08",
			"ZB02_side_walk_09","ZB02_side_walk_10","ZB02_side_walk_11",
			"ZB02_side_walk_12","ZB02_side_walk_13","ZB02_side_walk_14",
			"ZB02_side_walk_15","ZB02_special_attack_00","ZB02_special_attack_01",
			"ZB02_special_attack_02","ZB02_special_attack_03","ZB02_special_attack_04",
			"ZB02_special_attack_05","ZB02_special_attack_06","ZB02_special_attack_07",
			"ZB02_special_attack_08","ZB02_special_attack_09","ZB02_special_attack_10",
			"ZB02_special_attack_11","ZB02_special_attack_12","ZB02_special_attack_13",
			"ZB02_special_attack_14","ZB02_special_attack_15","ZB02_special_attack_16",
			"ZB02_special_attack_17","ZB02_special_attack_18","ZB02_special_attack_19",
			"ZB02_special_attack_20","ZB02_special_attack_21","ZB02_special_attack_22",
			"ZB02_die_effect_00","ZB02_die_effect_01","ZB02_die_effect_02",
			"ZB02_die_effect_03","ZB02_die_effect_04","ZB02_die_effect_05",
			"ZB02_die_effect_06","ZB02_die_effect_07","ZB02_die_effect_08",
			"ZB02_die_effect_09","ZB02_front_attackDiagonal_00","ZB02_front_attackDiagonal_01",
			"ZB02_front_attackDiagonal_02","ZB02_front_attackDiagonal_03","ZB02_front_attackDiagonal_04"
		], settings);
		settings.framewidth = settings.framewidth || 421;
		settings.frameheight = settings.frameheight || 421;
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

		this.addAnimation('front-die', [{ name: "ZB02_front_die_00", delay: 100 },{ name: "ZB02_front_die_01", delay: 100 },{ name: "ZB02_front_die_02", delay: 100 },{ name: "ZB02_front_die_03", delay: 100 },{ name: "ZB02_front_die_04", delay: 100 },{ name: "ZB02_front_die_05", delay: 100 },{ name: "ZB02_front_die_06", delay: 100 },{ name: "ZB02_front_die_07", delay: 100 },{ name: "ZB02_front_die_08", delay: 100 },{ name: "ZB02_front_die_09", delay: 100 },{ name: "ZB02_front_die_10", delay: 100 },{ name: "ZB02_front_die_11", delay: 100 },{ name: "ZB02_front_die_12", delay: 100 },{ name: "ZB02_front_die_13", delay: 100 },{ name: "ZB02_front_die_14", delay: 100 },{ name: "ZB02_front_die_15", delay: 100 },{ name: "ZB02_front_die_16", delay: 100 },{ name: "ZB02_front_die_17", delay: 100 },{ name: "ZB02_front_die_18", delay: 100 },{ name: "ZB02_front_die_19", delay: 100 },{ name: "ZB02_front_die_20", delay: 100 },{ name: "ZB02_front_die_21", delay: 100 },{ name: "ZB02_front_die_22", delay: 100 },{ name: "ZB02_front_die_23", delay: 100 },{ name: "ZB02_die_effect_00", delay: 100 },{ name: "ZB02_die_effect_01", delay: 100 },{ name: "ZB02_die_effect_02", delay: 100 },{ name: "ZB02_die_effect_03", delay: 100 },{ name: "ZB02_die_effect_04", delay: 100 },{ name: "ZB02_die_effect_05", delay: 100 },{ name: "ZB02_die_effect_06", delay: 100 },{ name: "ZB02_die_effect_07", delay: 100 },{ name: "ZB02_die_effect_08", delay: 100 },{ name: "ZB02_die_effect_09", delay: 100 }]);
		this.addAnimation('front-walk', [{ name: "ZB02_front_walk_00", delay: 80 },{ name: "ZB02_front_walk_01", delay: 80 },{ name: "ZB02_front_walk_02", delay: 80 },{ name: "ZB02_front_walk_03", delay: 80 },{ name: "ZB02_front_walk_04", delay: 80 },{ name: "ZB02_front_walk_05", delay: 80 },{ name: "ZB02_front_walk_06", delay: 80 },{ name: "ZB02_front_walk_07", delay: 80 },{ name: "ZB02_front_walk_08", delay: 80 },{ name: "ZB02_front_walk_09", delay: 80 },{ name: "ZB02_front_walk_10", delay: 80 },{ name: "ZB02_front_walk_11", delay: 80 },{ name: "ZB02_front_walk_12", delay: 80 },{ name: "ZB02_front_walk_13", delay: 80 },{ name: "ZB02_front_walk_14", delay: 80 },{ name: "ZB02_front_walk_15", delay: 80 }]);
		this.addAnimation('front-special', [{ name: "ZB02_special_attack_00", delay: 100 },{ name: "ZB02_special_attack_01", delay: 100 },{ name: "ZB02_special_attack_02", delay: 100 },{ name: "ZB02_special_attack_03", delay: 100 },{ name: "ZB02_special_attack_04", delay: 100 },{ name: "ZB02_special_attack_05", delay: 100 },{ name: "ZB02_special_attack_06", delay: 100 },{ name: "ZB02_special_attack_07", delay: 100 },{ name: "ZB02_special_attack_08", delay: 100 },{ name: "ZB02_special_attack_09", delay: 100 },{ name: "ZB02_special_attack_10", delay: 100 },{ name: "ZB02_special_attack_11", delay: 100 },{ name: "ZB02_special_attack_12", delay: 100 },{ name: "ZB02_special_attack_13", delay: 100 },{ name: "ZB02_special_attack_14", delay: 100 },{ name: "ZB02_special_attack_15", delay: 100 },{ name: "ZB02_special_attack_16", delay: 100 },{ name: "ZB02_special_attack_17", delay: 100 },{ name: "ZB02_special_attack_18", delay: 100 },{ name: "ZB02_special_attack_19", delay: 100 },{ name: "ZB02_special_attack_20", delay: 100 },{ name: "ZB02_special_attack_21", delay: 100 },{ name: "ZB02_special_attack_22", delay: 100 }]);
		this.addAnimation('front-attack', [{ name: "ZB02_front_attack_00", delay: 100 },{ name: "ZB02_front_attack_01", delay: 100 },{ name: "ZB02_front_attack_02", delay: 100 },{ name: "ZB02_front_attack_03", delay: 100 },{ name: "ZB02_front_attack_04", delay: 100 }]);
		this.addAnimation('front-attackDiagonal', [{ name: "ZB02_front_attackDiagonal_00", delay: 100 },{ name: "ZB02_front_attackDiagonal_01", delay: 100 },{ name: "ZB02_front_attackDiagonal_02", delay: 100 },{ name: "ZB02_front_attackDiagonal_03", delay: 100 },{ name: "ZB02_front_attackDiagonal_04", delay: 100 }]);
		this.addAnimation('side-walk', [{ name: "ZB02_side_walk_00", delay: 80 },{ name: "ZB02_side_walk_01", delay: 80 },{ name: "ZB02_side_walk_02", delay: 80 },{ name: "ZB02_side_walk_03", delay: 80 },{ name: "ZB02_side_walk_04", delay: 80 },{ name: "ZB02_side_walk_05", delay: 80 },{ name: "ZB02_side_walk_06", delay: 80 },{ name: "ZB02_side_walk_07", delay: 80 },{ name: "ZB02_side_walk_08", delay: 80 },{ name: "ZB02_side_walk_09", delay: 80 },{ name: "ZB02_side_walk_10", delay: 80 },{ name: "ZB02_side_walk_11", delay: 80 },{ name: "ZB02_side_walk_12", delay: 80 },{ name: "ZB02_side_walk_13", delay: 80 },{ name: "ZB02_side_walk_14", delay: 80 },{ name: "ZB02_side_walk_15", delay: 80 }]);
		this.setCurrentAnimation('front-attack');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 0, 0, 521, 339) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.setCurrentAnimation('front-attack',()=>{
            this.setCurrentAnimation('front-attack',()=>{
                this.setCurrentAnimation('side-walk',()=>{
                    this.setCurrentAnimation('front-walk');
                    this.body.vel.y = 1;
                    return false;
                });
                return false;
            });
            return false;
        });
        
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
            if(dataZombie[id]["id"] == "ZB02"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.reward = dataZombie[id]["reward"];
            }
        }
		
		this.movePattern = ['attack', 'left', 'attack', 'center', 'attack', 'right', 'attack', 'center', 'attack', 'special'];
		this.moveIndex = 0;
		this.startPattern = false;
		this.currentMove = "";
		this.kena = true;
		this.duration = 0;
        this.hitRacun1 = true;
// 		this.health = 5000;
		this.pos.z = 10;
        this.shoot = true;
        this.dieInterval;
        this.intervalShoot;
        this.patternInterval;
        this.shieldOn = false;
        this.tween = new me.Tween();
        this.haveRacun = false;
       
        this.die = true;
        this.body.getShape().translate(-this.width/2, -200);
        this.posXArray = [-20,20,0];
        
        var specialProjectile = me.pool.pull ("projectileZB02", 0, 0, {
            valueX:0,
            sudutX:0,
            sudutY:0
        });
        me.game.world.addChild(specialProjectile, this.pos.z);
        
        me.audio.play("sfx-boss2-walk", true, null, game.user.userData.sound.SFX);
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        
        this.paternInterval();
        this.dieFunc();
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		me.collision.check(this);
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
        if(this.currentMove == 'right' || this.currentMove == 'center' || this.currentMove == 'left' || this.currentMove == 'special'){
            me.timer.clearInterval(this.intervalShoot);
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
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.timeOt3);
        me.timer.clearTimeout(this.timeOt4);
        me.timer.clearTimeout(this.timeOt5);
        me.timer.clearTimeout(this.delay);
        me.timer.clearInterval(this.patternInterval);
        me.timer.clearInterval(this.dieInterval);
        me.timer.clearTimeout(this.timeout);
        me.timer.clearTimeout(this.projectileTimeout);
        if(this.currentMove == 'right' || this.currentMove == 'center' || this.currentMove == 'left' || this.currentMove == 'special'){
            this.tween.stop();
            me.timer.clearInterval(this.intervalShoot);
        }
        me.timer.clearInterval(this.intervalShoot);
        me.audio.stop("sfx-boss2-walk");
        this.tween.stop();
        //  End of user code  //
	},

    // Put user code here //
    startBosMove: function() {
        if(this.currentMove == 'attack') {
            me.audio.stop("sfx-boss2-walk");
            var animationName = (this.movePattern[this.moveIndex - 1] == 'left') ? 'front-attackDiagonal' : 'front-attack';
            if(!this.isCurrentAnimation(animationName))
                this.setCurrentAnimation(animationName);
            
            this.callProjectileAttack();
            let to = true ;
            this.timeout = me.timer.setTimeout(() => {
                if(to){
                    to = false;
                    this.setMoveIndexPattern();
                }
            }, 5000);
            return;
        }
        
        if(this.currentMove == 'special') {
            me.audio.stop("sfx-boss2-walk");
            if(!this.isCurrentAnimation('front-special')){
                me.timer.clearTimeout(this.timeout);
                this.body.vel.y = 0;
                this.body.vel.x = 0;
                this.setCurrentAnimation('front-special');
                let to2 = true,
                    to3 = true;
                this.timeOt2 = me.timer.setTimeout(() => {
                    if(to2){
                        to2 = false;
                        this.sparkZB02 = me.pool.pull ("projectileSparkZB02", this.pos.x+2.5, this.pos.y+5);
                        me.game.world.addChild(this.sparkZB02, this.pos.z+4);
                    }
                }, 100);
                
                this.timeOt3 = me.timer.setTimeout(() => {
                    if(to3){
                        to3 = false;
                        this.laserZB02 = me.pool.pull ("projectileLaserZB02", this.pos.x+2.5, this.pos.y+225);
                        me.game.world.addChild(this.laserZB02, this.pos.z+4);
                        this.tweenBack();
                    }
                }, 300);
            }
            return;
        }
        
        if(!this.isCurrentAnimation('side-walk'))
            this.setCurrentAnimation('side-walk');
        
        if(this.currentMove == 'left') {
            me.audio.play("sfx-boss2-walk", true, null, game.user.userData.sound.SFX);
            this.tween = new me.Tween(this.pos)
            .to({x:me.game.viewport.width/2-250}, 2000).onComplete(() => {
                this.setMoveIndexPattern();
            });
        }
        
        if(this.currentMove == 'center') {
            me.audio.play("sfx-boss2-walk", true, null, game.user.userData.sound.SFX);
            this.tween = new me.Tween(this.pos)
            .to({x:me.game.viewport.width/2}, 2000).onComplete(() => {
                this.setMoveIndexPattern();
            });
        }
        
        if(this.currentMove == 'right') {
            me.audio.play("sfx-boss2-walk", true, null, game.user.userData.sound.SFX);
            this.tween = new me.Tween(this.pos)
            .to({x:me.game.viewport.width/2+325}, 3000).onComplete(() => {
                this.setMoveIndexPattern();
            });
        }
        
        this.tween.start();
    },
    
    callProjectileAttack:function() {
        if(this.currentMove == 'attack'){
            this.intervalShoot = me.timer.setInterval(()=>{
                if(this.pos == undefined){
                    
                }else{
                    this.randomX = Math.floor(Math.random()*3);
                    var projectilePosX = (this.movePattern[this.moveIndex - 1] == 'left') ? this.pos.x-30+this.posXArray[this.randomX] : this.pos.x-95+this.posXArray[this.randomX];
                    var specialProjectile = me.pool.pull ("projectileZB02", projectilePosX, this.pos.y+75, {
                        valueX:(this.movePattern[this.moveIndex - 1] == 'left') ? 8 : 0,
                        sudutX:(this.movePattern[this.moveIndex - 1] == 'left') ? -4 : 0,
                        sudutY:(this.movePattern[this.moveIndex - 1] == 'left') ? 10 : 0
                    });
                    me.game.world.addChild(specialProjectile, this.pos.z+4);   
                }
            },200);
        } else {
            me.timer.clearInterval(this.intervalShoot);c
        }
    },
    
    setMoveIndexPattern:function() {
        this.moveIndex += 1;
        if(this.moveIndex >= this.movePattern.length)
            this.moveIndex = 0;
        this.currentMove = this.movePattern[this.moveIndex];
        this.startBosMove();
    },
    
    tweenBack: function(){
        me.audio.play("sfx-boss2-walk", true, null, game.user.userData.sound.SFX);
        this.tween = new me.Tween(this.pos)
        .to({y:me.game.viewport.height/2-235}, 1000).onComplete(() => {
            this.startPattern = false;
            this.body.vel.y = 1;
            this.moveIndex = 0;
            this.setCurrentAnimation('front-walk');
        });
            
        this.tween.start();
    },
    
    dieFunc: function(){
        this.dieInterval = me.timer.setInterval(()=>{
            if(this.health <= 0){
                me.timer.clearInterval(this.patternInterval);
                me.timer.clearInterval(this.intervalShoot);
                if(this.die){
                    if(this.racun && this.haveRacun){
                        this.haveRacun = false;
                        me.game.world.removeChild(this.racun);
                    }
                    me.audio.stop("sfx-boss2-walk");
                    me.audio.play("sfx-boss2-died", false, null, game.user.userData.sound.SFX);
                    if(this.currentMove == 'right' || this.currentMove == 'center' || this.currentMove == 'left' || this.currentMove == 'special'){
                        this.tween.stop();
                    }
                    me.timer.clearTimeout(this.timeout);
                    me.timer.clearTimeout(this.projectileTimeout);
                    this.die = false;
                    this.body.vel.y = 0;
                    this.body.vel.x = 0;
                    
                    let to4 = true;
                    this.timeOt4 = me.timer.setTimeout(()=>{
                        if(to4){
                            to4 = false;
                            this.coinAnim = me.pool.pull ("battleCoin", this.pos.x+30, this.pos.y-25);
                            me.game.world.addChild(this.coinAnim, this.pos.z+4);
                            this.coinAnim2 = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-50);
                            me.game.world.addChild(this.coinAnim2, this.pos.z+4);
                            this.coinAnim3 = me.pool.pull ("battleCoin", this.pos.x-30, this.pos.y-25);
                            me.game.world.addChild(this.coinAnim3, this.pos.z+4);
                        }
                    }, 2000);
                    
                    if(!this.isCurrentAnimation('front-die')){
                        let stopAnim = true;
                        this.setCurrentAnimation('front-die', () => {
                            if(stopAnim){
                                stopAnim = false;
                                me.game.world.removeChild(this);
                                me.timer.clearInterval(this.dieInterval);
                                
                                let to5 = true;
                                this.timeOt5 = me.timer.setTimeout(()=>{
                                    if(to5){
                                        to5 = false;
                                        game.controller.data.addGold(this.reward);
                                        game.controller.data.addTemporaryGold(this.reward);
                                        game.controller.data.addTemporaryKill();
                                        game.controller.data.setDailyQuest('kill zombies', 1);
                                    }
                                }, 300);
                            }
                            return false;
                        });
                    }
                    return false;
                }
                return false;
            }
        },1000);
    },
    
    paternInterval: function(){
        this.patternInterval = me.timer.setInterval(()=>{
            if(!this.startPattern && this.pos.y >= me.game.viewport.height/2-17.5) {
                me.audio.stop("sfx-boss2-walk");
                this.body.vel.y = 0;
                this.currentMove = this.movePattern[0];
                this.startPattern = true;
                this.startBosMove();
            }
        },1);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();