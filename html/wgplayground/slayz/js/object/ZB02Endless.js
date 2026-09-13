(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB02Endless = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "americaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ZB02_front_walk_00","ZB02_front_walk_01","ZB02_front_walk_02",
			"ZB02_front_walk_03","ZB02_front_walk_04","ZB02_front_walk_05",
			"ZB02_front_walk_06","ZB02_front_walk_07","ZB02_front_walk_08",
			"ZB02_front_walk_09","ZB02_front_walk_10","ZB02_front_walk_11",
			"ZB02_front_walk_12","ZB02_front_walk_13","ZB02_front_walk_14",
			"ZB02_front_walk_15","ZB02_front_attack_00","ZB02_front_attack_01",
			"ZB02_front_attack_02","ZB02_front_attack_03","ZB02_front_attack_04",
			"ZB02_front_die_00","ZB02_front_die_01","ZB02_front_die_02",
			"ZB02_front_die_03","ZB02_front_die_04","ZB02_front_die_05",
			"ZB02_front_die_06","ZB02_front_die_07","ZB02_front_die_08",
			"ZB02_front_die_09","ZB02_front_die_10","ZB02_front_die_11",
			"ZB02_front_die_12","ZB02_front_die_13","ZB02_front_die_14",
			"ZB02_front_die_15","ZB02_front_die_16","ZB02_front_die_17",
			"ZB02_front_die_18","ZB02_front_die_19","ZB02_front_die_20",
			"ZB02_front_die_21","ZB02_front_die_22","ZB02_front_die_23",
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

		this.addAnimation('front-walk', [{ name: "ZB02_front_walk_00", delay: 100 },{ name: "ZB02_front_walk_01", delay: 100 },{ name: "ZB02_front_walk_02", delay: 100 },{ name: "ZB02_front_walk_03", delay: 100 },{ name: "ZB02_front_walk_04", delay: 100 },{ name: "ZB02_front_walk_05", delay: 100 },{ name: "ZB02_front_walk_06", delay: 100 },{ name: "ZB02_front_walk_07", delay: 100 },{ name: "ZB02_front_walk_08", delay: 100 },{ name: "ZB02_front_walk_09", delay: 100 },{ name: "ZB02_front_walk_10", delay: 100 },{ name: "ZB02_front_walk_11", delay: 100 },{ name: "ZB02_front_walk_12", delay: 100 },{ name: "ZB02_front_walk_13", delay: 100 },{ name: "ZB02_front_walk_14", delay: 100 },{ name: "ZB02_front_walk_15", delay: 100 }]);
		this.addAnimation('front-attack', [{ name: "ZB02_front_attack_00", delay: 100 },{ name: "ZB02_front_attack_01", delay: 100 },{ name: "ZB02_front_attack_02", delay: 100 },{ name: "ZB02_front_attack_03", delay: 100 },{ name: "ZB02_front_attack_04", delay: 100 }]);
		this.addAnimation('front-die', [{ name: "ZB02_front_die_00", delay: 100 },{ name: "ZB02_front_die_01", delay: 100 },{ name: "ZB02_front_die_02", delay: 100 },{ name: "ZB02_front_die_03", delay: 100 },{ name: "ZB02_front_die_04", delay: 100 },{ name: "ZB02_front_die_05", delay: 100 },{ name: "ZB02_front_die_06", delay: 100 },{ name: "ZB02_front_die_07", delay: 100 },{ name: "ZB02_front_die_08", delay: 100 },{ name: "ZB02_front_die_09", delay: 100 },{ name: "ZB02_front_die_10", delay: 100 },{ name: "ZB02_front_die_11", delay: 100 },{ name: "ZB02_front_die_12", delay: 100 },{ name: "ZB02_front_die_13", delay: 100 },{ name: "ZB02_front_die_14", delay: 100 },{ name: "ZB02_front_die_15", delay: 100 },{ name: "ZB02_front_die_16", delay: 100 },{ name: "ZB02_front_die_17", delay: 100 },{ name: "ZB02_front_die_18", delay: 100 },{ name: "ZB02_front_die_19", delay: 100 },{ name: "ZB02_front_die_20", delay: 100 },{ name: "ZB02_front_die_21", delay: 100 },{ name: "ZB02_front_die_22", delay: 100 },{ name: "ZB02_front_die_23", delay: 100 },{ name: "ZB02_die_effect_00", delay: 100 },{ name: "ZB02_die_effect_01", delay: 100 },{ name: "ZB02_die_effect_02", delay: 100 },{ name: "ZB02_die_effect_03", delay: 100 },{ name: "ZB02_die_effect_04", delay: 100 },{ name: "ZB02_die_effect_05", delay: 100 },{ name: "ZB02_die_effect_06", delay: 100 },{ name: "ZB02_die_effect_07", delay: 100 },{ name: "ZB02_die_effect_08", delay: 100 },{ name: "ZB02_die_effect_09", delay: 100 }]);
		this.addAnimation('front-attackDiagonal', [{ name: "ZB02_front_attackDiagonal_00", delay: 100 },{ name: "ZB02_front_attackDiagonal_01", delay: 100 },{ name: "ZB02_front_attackDiagonal_02", delay: 100 },{ name: "ZB02_front_attackDiagonal_03", delay: 100 },{ name: "ZB02_front_attackDiagonal_04", delay: 100 }]);
		this.addAnimation('Animation 4', [], 100);
		this.setCurrentAnimation('front-walk');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 0, 0, 521, 339) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.pos.z = 10;
        
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
        
        this.body.vel.y = 0.5;
        this.die = true;
        this.hitRacun1 = true;
        this.duration = 0;
        this.kena = true;
        this.dieInterval;
        this.attackNya = true;
        this.shieldOn = false;
        this.haveRacun = false;
        
        this.body.getShape().translate(-this.width/2, -200);
        this.posXArray = [-20,20,0];
        
        me.audio.play("sfx-boss2-walk", true, false, null, game.user.userData.sound.SFX);
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
        me.timer.clearInterval(this.projectileTimeout);
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.timeOt3);
        me.timer.clearInterval(this.dieInterval);
        //  End of user code  //
	},

    // Put user code here //
    attack: function(){
        if(this.pos.x <= me.game.viewport.width/2){
            if(!this.isCurrentAnimation('front-attackDiagonal')){
                this.setCurrentAnimation('front-attackDiagonal');
                this.projectileSpawn();
            }
        }else{
            if(!this.isCurrentAnimation('front-attack')){
                this.setCurrentAnimation('front-attack');
                this.projectileSpawn();
            }
        }
    },
    
    projectileSpawn: function(){
        this.projectileTimeout = me.timer.setInterval(() => {
            if(this.pos == undefined){

            }else{
                let posXnya, inLeft;
                if(this.pos.x < me.game.viewport.width/2){
                    inLeft = true;
                    posXnya = this.pos.x-35;
                }else{
                    inLeft = false;
                    posXnya = this.pos.x-90;
                }
                this.randomX = Math.floor(Math.random()*3);
                var specialProjectile = me.pool.pull ("projectileZB02", posXnya+this.posXArray[this.randomX], this.pos.y+75, {
                    valueX:(inLeft) ? 8 : 0,
                    sudutX:(inLeft) ? -4 : 0,
                    sudutY:(inLeft) ? 10 : 0
                });
                me.game.world.addChild(specialProjectile, this.pos.z+4);
            }                
        }, 300);
    },
    
    dieFunc: function(){
        this.dieInterval = me.timer.setInterval(()=>{
            if(this.pos.y >= me.game.viewport.height/2-25) {
                me.audio.stop("sfx-boss2-walk");
                this.body.vel.y = 0;
                if(this.attackNya){
                    this.attackNya = false;
                    this.attack();
                }
            }
            
            if(this.health <= 0){
                if(this.die){
                    if(this.racun && this.haveRacun){
                        this.haveRacun = false;
                        me.game.world.removeChild(this.racun);
                    }
                    me.audio.stop("sfx-boss2-walk");
                    me.audio.play("sfx-boss2-died", false, null, game.user.userData.sound.SFX);
                    this.die = false;
                    this.body.vel.y = 0;
                    this.body.vel.x = 0;
                    me.timer.clearInterval(this.projectileTimeout);
                    
                    let to1 = true,
                        to2 = true,
                        to3 = true;
                    this.timeOt2 = me.timer.setTimeout(()=>{
                        if(to1){
                            to1 = false;
                            this.coinAnim = me.pool.pull ("battleCoin", this.pos.x+30, this.pos.y-25);
                            me.game.world.addChild(this.coinAnim, this.pos.z+4);
                            this.coinAnim2 = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-50);
                            me.game.world.addChild(this.coinAnim2, this.pos.z+4);
                            this.coinAnim3 = me.pool.pull ("battleCoin", this.pos.x-30, this.pos.y-25);
                            me.game.world.addChild(this.coinAnim3, this.pos.z+4);
                        }
                    }, 2000);
                        
                    if(!this.isCurrentAnimation('front-die')){
                        this.setCurrentAnimation('front-die', () => {
                            if(to2){
                                to2 = false;
                                me.game.world.removeChild(this);
                                me.timer.clearInterval(this.dieInterval);
                                
                                this.timeOt3 = me.timer.setTimeout(()=>{
                                    if(to3){
                                        to3 = false;
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
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();