(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB04 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "southAmericaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ZB04_fallen_1","ZB04_fallen_2","ZB04_fallen_3",
			"ZB04_fallen_0","ZB04_front_walk_0","ZB04_front_walk_1",
			"ZB04_front_walk_2","ZB04_front_walk_3","ZB04_front_walk_4",
			"ZB04_front_walk_5","ZB04_front_walk_6","ZB04_front_walk_7",
			"ZB04_front_die_00","ZB04_front_die_01","ZB04_front_die_02",
			"ZB04_front_die_03","ZB04_front_die_04","ZB04_front_die_05",
			"ZB04_front_die_06","ZB04_front_die_07","ZB04_front_die_08",
			"ZB04_front_die_09","ZB04_front_die_10","ZB04_front_die_11",
			"ZB04_front_die_12","ZB04_front_die_13","ZB04_front_die_14",
			"ZB04_front_die_15","ZB04_front_die_16","ZB04_front_die_17",
			"ZB04_front_die_18","ZB04_front_die_19","ZB04_front_die_20",
			"ZB04_front_attack_0","ZB04_front_attack_1","ZB04_front_attack_2",
			"ZB04_front_attack_3","ZB04_front_attack_4","ZB04_front_attack_5",
			"ZB04_front_attack_6","ZB04_side_walk_00","ZB04_side_walk_01",
			"ZB04_side_walk_02","ZB04_side_walk_03","ZB04_side_walk_04",
			"ZB04_side_walk_05","ZB04_side_walk_06","ZB04_side_walk_07",
			"ZB04_front_walkAttack_0","ZB04_front_walkAttack_1","ZB04_front_walkAttack_2",
			"ZB04_front_walkAttack_3","ZB04_front_walkAttack_4","ZB04_front_walkAttack_5",
			"ZB04_front_walkAttack_6","ZB04_front_walkAttack_7","ZB04_front_special_00",
			"ZB04_front_special_01","ZB04_front_special_02","ZB04_front_special_03",
			"ZB04_front_special_04","ZB04_front_special_05","ZB04_front_special_06",
			"ZB04_front_special_07","ZB04_front_special_08","ZB04_front_special_09",
			"ZB04_front_special_10","ZB04_front_special_11"
		], settings);
		settings.framewidth = settings.framewidth || 486;
		settings.frameheight = settings.frameheight || 444;
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

		this.addAnimation('idle', [{ name: "ZB04_fallen_0", delay: 100 }]);
		this.addAnimation('fall-walk', [{ name: "ZB04_fallen_1", delay: 100 },{ name: "ZB04_fallen_2", delay: 100 },{ name: "ZB04_fallen_3", delay: 100 },{ name: "ZB04_fallen_0", delay: 100 },{ name: "ZB04_front_walk_0", delay: 100 },{ name: "ZB04_front_walk_1", delay: 100 },{ name: "ZB04_front_walk_2", delay: 100 },{ name: "ZB04_front_walk_3", delay: 100 },{ name: "ZB04_front_walk_4", delay: 100 },{ name: "ZB04_front_walk_5", delay: 100 },{ name: "ZB04_front_walk_6", delay: 100 },{ name: "ZB04_front_walk_7", delay: 100 }]);
		this.addAnimation('front-walk', [{ name: "ZB04_front_walk_0", delay: 100 },{ name: "ZB04_front_walk_1", delay: 100 },{ name: "ZB04_front_walk_2", delay: 100 },{ name: "ZB04_front_walk_3", delay: 100 },{ name: "ZB04_front_walk_4", delay: 100 },{ name: "ZB04_front_walk_5", delay: 100 },{ name: "ZB04_front_walk_6", delay: 100 }]);
		this.addAnimation('front-die', [{ name: "ZB04_front_die_00", delay: 100 },{ name: "ZB04_front_die_01", delay: 100 },{ name: "ZB04_front_die_02", delay: 100 },{ name: "ZB04_front_die_03", delay: 100 },{ name: "ZB04_front_die_04", delay: 100 },{ name: "ZB04_front_die_05", delay: 100 },{ name: "ZB04_front_die_06", delay: 100 },{ name: "ZB04_front_die_07", delay: 100 },{ name: "ZB04_front_die_08", delay: 100 },{ name: "ZB04_front_die_09", delay: 100 },{ name: "ZB04_front_die_10", delay: 100 },{ name: "ZB04_front_die_11", delay: 100 },{ name: "ZB04_front_die_12", delay: 100 },{ name: "ZB04_front_die_13", delay: 100 },{ name: "ZB04_front_die_14", delay: 100 },{ name: "ZB04_front_die_15", delay: 100 },{ name: "ZB04_front_die_16", delay: 100 },{ name: "ZB04_front_die_17", delay: 100 },{ name: "ZB04_front_die_18", delay: 100 },{ name: "ZB04_front_die_19", delay: 100 },{ name: "ZB04_front_die_20", delay: 100 }]);
		this.addAnimation('front-attack', [{ name: "ZB04_front_attack_0", delay: 100 },{ name: "ZB04_front_attack_1", delay: 100 },{ name: "ZB04_front_attack_2", delay: 100 },{ name: "ZB04_front_attack_3", delay: 100 },{ name: "ZB04_front_attack_4", delay: 100 },{ name: "ZB04_front_attack_5", delay: 100 },{ name: "ZB04_front_attack_6", delay: 100 }]);
		this.addAnimation('side-walk', [{ name: "ZB04_side_walk_00", delay: 100 },{ name: "ZB04_side_walk_01", delay: 100 },{ name: "ZB04_side_walk_02", delay: 100 },{ name: "ZB04_side_walk_03", delay: 100 },{ name: "ZB04_side_walk_04", delay: 100 },{ name: "ZB04_side_walk_05", delay: 100 },{ name: "ZB04_side_walk_06", delay: 100 },{ name: "ZB04_side_walk_07", delay: 100 }]);
		this.addAnimation('front-walkAttack', [{ name: "ZB04_front_walkAttack_0", delay: 100 },{ name: "ZB04_front_walkAttack_1", delay: 100 },{ name: "ZB04_front_walkAttack_2", delay: 100 },{ name: "ZB04_front_walkAttack_3", delay: 100 },{ name: "ZB04_front_walkAttack_4", delay: 100 },{ name: "ZB04_front_walkAttack_5", delay: 100 },{ name: "ZB04_front_walkAttack_6", delay: 100 },{ name: "ZB04_front_walkAttack_7", delay: 100 }]);
		this.addAnimation('jump', [{ name: "ZB04_fallen_1", delay: 100 },{ name: "ZB04_fallen_2", delay: 100 },{ name: "ZB04_fallen_3", delay: 100 },{ name: "ZB04_fallen_0", delay: 100 }]);
		this.addAnimation('front-special', [{ name: "ZB04_front_special_00", delay: 100 },{ name: "ZB04_front_special_01", delay: 100 },{ name: "ZB04_front_special_02", delay: 100 },{ name: "ZB04_front_special_03", delay: 100 },{ name: "ZB04_front_special_04", delay: 100 },{ name: "ZB04_front_special_05", delay: 100 },{ name: "ZB04_front_special_06", delay: 100 },{ name: "ZB04_front_special_07", delay: 100 },{ name: "ZB04_front_special_08", delay: 100 },{ name: "ZB04_front_special_09", delay: 100 },{ name: "ZB04_front_special_10", delay: 100 },{ name: "ZB04_front_special_11", delay: 100 }]);
		this.setCurrentAnimation('front-walk');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 0, 0, 486, 444) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.peluru = me.pool.pull ("projectileZB04", this.pos.x-70, this.pos.y+50,{
            valueX:1.5,sudutX:1,sudutY:10
        });
        me.game.world.addChild(this.peluru, this.pos.z+1);
        this.pos.z = 10;
        this.setCurrentAnimation('front-walk',()=>{
            this.setCurrentAnimation('idle');
            return false;
        });
        let fallSmoke = me.pool.pull ("ZB04FallSmoke", this.pos.x, this.pos.y);
        me.game.world.addChild(fallSmoke, this.pos.z-1);
        
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
		this.body.getShape().translate(-this.width/2, -370);
		
		let dataZombie = game.controller.data.getDataZombie();
        for(let id in dataZombie){
            if(dataZombie[id]["id"] == "ZB04"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.reward = dataZombie[id]["reward"];
            }
        }
        
        this.pattern = "";
        this.die = true;
        this.hit = false;
        this.tembak = true;
        this.duration = 0;
        this.hitRacun1 = true;
        this.kena = true;
        this.updateIntvl;
        this.dieInterval;
        this.updateIntervalFunc();
        this.dieFunc();
        this.shieldOn = false;
        this.tween = new me.Tween();
        this.haveRacun = false;
        
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
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
        if(this.pattern == "attack" || this.pattern == "walk" || this.pattern == "walkLeft" || this.pattern == "walkRight" || this.pattern == "jumpRight" || this.pattern == "jumpLeft" || this.pattern == "walkAttack" || this.pattern == "cek"){
            this.stopFunc();
            me.game.world.removeChild(this);
            me.timer.clearInterval(this.dieInterval);
            me.timer.clearInterval(this.updateIntvl);
            me.timer.clearInterval(this.atkInterval);
            me.timer.clearTimeout(this.timeOut1);
            me.timer.clearTimeout(this.timeOut2);
            me.timer.clearTimeout(this.timeOut3);
            me.timer.clearTimeout(this.timeOut4);
            me.timer.clearTimeout(this.timeOt1);
            me.timer.clearTimeout(this.timeOt2);
            me.timer.clearTimeout(this.delay);
            this.tween.stop();
        }
        me.game.world.removeChild(this);
        me.timer.clearInterval(this.dieInterval);
        me.timer.clearInterval(this.updateIntvl);
        me.timer.clearInterval(this.atkInterval);
        me.timer.clearTimeout(this.timeOut1);
        me.timer.clearTimeout(this.timeOut2);
        me.timer.clearTimeout(this.timeOut3);
        me.timer.clearTimeout(this.timeOut4);
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.delay);
        this.tween.stop();
        
        me.audio.stop("sfx-boss2-walk");
        //  End of user code  //
	},

    // Put user code here //
    dieFunc:function(){
        this.dieInterval = me.timer.setInterval(()=>{
            if(this.health <= 0){
                if(this.die){
                    me.timer.clearInterval(this.updateIntvl);
                    this.die = false;
                    this.hit = false;
                    this.tween.stop();
                    
                    if(this.racun && this.haveRacun){
                        this.haveRacun = false;
                        me.game.world.removeChild(this.racun);
                    }
                    
                    if(!this.isCurrentAnimation('front-die')){
                        me.audio.play("sfx-boss2-died", false, null, game.user.userData.sound.SFX);
                        let to = true,
                            to2 = true;
                        this.setCurrentAnimation('front-die', () => {
                            if(to){
                                to = false;
                                this.timeOt2 = me.timer.setTimeout(()=>{
                                    if(to2){
                                        to2 = false;
                                        game.controller.data.addGold(this.reward);
                                        game.controller.data.addTemporaryGold(this.reward);
                                        game.controller.data.addTemporaryKill();
                                        game.controller.data.setDailyQuest('kill zombies', 1);
                                    }
                                }, 300);
                                this.coinAnim = me.pool.pull ("battleCoin", this.pos.x+30, this.pos.y-25);
                                me.game.world.addChild(this.coinAnim, this.pos.z+4);
                                this.coinAnim2 = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-50);
                                me.game.world.addChild(this.coinAnim2, this.pos.z+4);
                                this.coinAnim3 = me.pool.pull ("battleCoin", this.pos.x-30, this.pos.y-25);
                                me.game.world.addChild(this.coinAnim3, this.pos.z+4);
                                me.game.world.removeChild(this);
                                me.timer.clearInterval(this.dieInterval);
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
    
    tweenFall:function(){
        this.tween = new me.Tween(this.pos)
            .to({y:me.game.viewport.height/2-200}, 5000)
            .onComplete(() => {
                me.audio.play("sfx-MKalien-Exp", false, null, game.user.userData.sound.SFX);
                this.pattern = "walk";
                // this.tweenWalkForward();
                let fallSmoke = me.pool.pull ("ZB04FallSmoke", this.pos.x, this.pos.y);
                me.game.world.addChild(fallSmoke, this.pos.z-1);
                this.setCurrentAnimation('fall-walk',()=>{
                    this.setCurrentAnimation('front-walk');
                    return false;
                });
            });
        this.tween.start();
    },
    
    tweenWalkForward:function(){
        me.audio.play("sfx-boss2-walk", true, null, game.user.userData.sound.SFX);
        this.tween = new me.Tween(this.pos)
            .to({y:me.game.viewport.height/2-120}, 3000)
            .onComplete(() => {
                this.pattern = "attack";
                // this.attack();
                if(!this.isCurrentAnimation('front-attack')){
                    this.setCurrentAnimation('front-attack');
                }
            });
        this.tween.start();
    },
    
    attack:function(){
        me.audio.stop("sfx-boss2-walk");
        this.hit = true;
        let duration = 0,
            randomFunc = Math.floor(Math.random()*2)+0;
        this.atkInterval = me.timer.setInterval(()=>{
                duration++;
                if(duration >= 10){
                    this.hit = false;
                    me.timer.clearInterval(this.atkInterval);
                    let move = randomFunc;
                    this.randomFunc = (move == 0) ? this.pattern = "walkLeft" : this.pattern = "walkRight";
                    if(!this.isCurrentAnimation('side-walk')){
                        this.setCurrentAnimation('side-walk');
                    }
                }
            },1000);
    },
    
    tweenWalkLeft:function(){
        me.audio.play("sfx-boss2-walk", true, null, game.user.userData.sound.SFX);
        this.tween = new me.Tween(this.pos)
            .to({x:me.game.viewport.width/2-300}, 2500)
            .onComplete(() => {
                this.pattern = "jumpRight";
                // this.tweenJumpRight1();
                let fallSmoke = me.pool.pull ("ZB04FallSmoke", this.pos.x, this.pos.y);
                me.game.world.addChild(fallSmoke, this.pos.z-1);
                if(!this.isCurrentAnimation('jump')){
                    this.setCurrentAnimation('jump',()=>{
                        return false;
                    });
                }
            });
        this.tween.start();
    },
    
    tweenWalkRight:function(){
        me.audio.play("sfx-boss2-walk", true, null, game.user.userData.sound.SFX);
        this.tween = new me.Tween(this.pos)
            .to({x:me.game.viewport.width/2+300}, 2500)
            .onComplete(() => {
                this.pattern = "jumpLeft";
                // this.tweenJumpLeft1();
                let fallSmoke = me.pool.pull ("ZB04FallSmoke", this.pos.x, this.pos.y);
                me.game.world.addChild(fallSmoke, this.pos.z-1);
                if(!this.isCurrentAnimation('jump')){
                    this.setCurrentAnimation('jump',()=>{
                        return false;
                    });
                }
            });
        this.tween.start();
    },
    
    tweenJumpLeft1:function(){
        me.audio.play("sfx-MKalien-Exp", false, null, game.user.userData.sound.SFX);
        this.tween = new me.Tween(this.pos)
            .to({y:this.pos.y-600, x:me.game.viewport.width/2+150}, 1000)
            .onComplete(() => {
                this.tweenJumpLeft2();
            });
        this.tween.start();
    },
    
    tweenJumpLeft2:function(){
        this.tween = new me.Tween(this.pos)
            .to({y:me.game.viewport.height/2-200, x:me.game.viewport.width/2-25}, 1000)
            .onComplete(() => {
                me.audio.play("sfx-MKalien-Exp", false, null, game.user.userData.sound.SFX);
                this.pattern = "walkAttack";
                // this.walkAttack();
                let fallSmoke = me.pool.pull ("ZB04FallSmoke", this.pos.x, this.pos.y);
                me.game.world.addChild(fallSmoke, this.pos.z-1);
                this.setCurrentAnimation('fall-walk',()=>{
                    this.setCurrentAnimation('front-walkAttack');
                    return false;
                });
            });
        this.tween.start();
    },
    
    tweenJumpRight1:function(){
        me.audio.play("sfx-MKalien-Exp", false, null, game.user.userData.sound.SFX);
        this.tween = new me.Tween(this.pos)
            .to({y:this.pos.y-600, x:me.game.viewport.width/2-150}, 1000)
            .onComplete(() => {
                this.tweenJumpRight2();
            });
        this.tween.start();
    },
    
    tweenJumpRight2:function(){
        this.tween = new me.Tween(this.pos)
            .to({y:me.game.viewport.height/2-200, x:me.game.viewport.width/2-25}, 1000)
            .onComplete(() => {
                me.audio.play("sfx-MKalien-Exp", false, null, game.user.userData.sound.SFX);
                this.pattern = "walkAttack";
                // this.walkAttack();
                let fallSmoke = me.pool.pull ("ZB04FallSmoke", this.pos.x, this.pos.y);
                me.game.world.addChild(fallSmoke, this.pos.z-1);
                this.setCurrentAnimation('fall-walk',()=>{
                    this.setCurrentAnimation('front-walkAttack');
                    return false;
                });
            });
        this.tween.start();
    },
    
    walkAttack:function(){
        me.audio.play("sfx-boss2-walk", true, null, game.user.userData.sound.SFX);
        this.hit = true;
        this.tween = new me.Tween(this.pos)
            .to({y:me.game.viewport.height/2-120}, 10000)
            .onComplete(() => {
                this.hit = false;
                if(!this.isCurrentAnimation('front-special')){
                    let laser = me.pool.pull ("projectileLaserZB04", this.pos.x, this.pos.y+150);
                    me.game.world.addChild(laser, this.pos.z+1);
                    this.setCurrentAnimation('front-special',()=>{
                        this.pattern = "attack";
                        if(!this.isCurrentAnimation('front-attack')){
                            this.setCurrentAnimation('front-attack');
                        }
                        return false;
                    });
                }
            });
        this.tween.start();
    },
    
    stopFunc:function(){
        this.pattern == "stop";
        me.timer.clearInterval(this.dieInterval);
        me.timer.clearInterval(this.updateIntvl);
        me.timer.clearInterval(this.atkInterval);
        this.die = false;
        this.hit = false;
        this.tween.stop();
    },
    
    updateIntervalFunc: function(){
        this.updateIntvl = me.timer.setInterval(()=>{
            if(this.hit){
                if(this.tembak){
                    this.tembak = false;
                    
                    this.peluru1 = me.pool.pull ("projectileZB04", this.pos.x-60, this.pos.y+50,{
                        valueX:1.5,sudutX:1,sudutY:10
                    });
                    me.game.world.addChild(this.peluru1, this.pos.z+1);
                    this.peluru1.tweenAlpha();
                    let to1 = true,
                        to2 = true,
                        to3 = true;
                    this.timeOut1 = me.timer.setTimeout(()=>{
                        if(to1){
                            to1 = false;
                            this.peluru2 = me.pool.pull ("projectileZB04", this.pos.x+90, this.pos.y+50,{
                                valueX:-1.5,sudutX:-1,sudutY:10
                            });
                            me.game.world.addChild(this.peluru2, this.pos.z+1);
                            this.peluru2.tweenAlpha();
                        }
                    },100);
                    
                    this.timeOut2 = me.timer.setTimeout(()=>{
                        if(to2){
                            to2 = false;
                            this.peluru3 = me.pool.pull ("projectileZB04", this.pos.x-85, this.pos.y,{
                                valueX:1.5,sudutX:1,sudutY:10
                            });
                            me.game.world.addChild(this.peluru3, this.pos.z+1);
                            this.peluru3.tweenAlpha();
                        }
                    },200);
                    
                    this.timeOut3 = me.timer.setTimeout(()=>{
                        if(to3){
                            to3 = false;
                            this.peluru4 = me.pool.pull ("projectileZB04", this.pos.x+125, this.pos.y,{
                                valueX:-1.5,sudutX:-1,sudutY:10
                            });
                            me.game.world.addChild(this.peluru4, this.pos.z+1);
                            this.peluru4.tweenAlpha();
                        }
                    },300);
                    
                    this.timeOut4 = me.timer.setTimeout(()=>{
                        this.tembak = true;
                    },400);
                }   
            }
            
            if(this.pattern == "walk"){
                this.pattern = "cek";
                this.tweenWalkForward();
            }
            if(this.pattern == "attack"){
                this.pattern = "cek";
                this.attack();
            }
            if(this.pattern == "walkLeft"){
                this.pattern = "cek";
                this.tweenWalkLeft();
            }
            if(this.pattern == "walkRight"){
                this.pattern = "cek";
                this.tweenWalkRight();
            }
            if(this.pattern == "jumpLeft"){
                this.pattern = "cek";
                this.tweenJumpLeft1();
            }
            if(this.pattern == "jumpRight"){
                this.pattern = "cek";
                this.tweenJumpRight1();
            }
            if(this.pattern == "walkAttack"){
                this.pattern = "cek";
                this.walkAttack();
            }
            if(this.pattern == "stop"){
                this.pattern = "cek";
                this.stopFunc();
            }
        },10);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();