(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZB06 = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "eropaZombieBos";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"ZB06_dead_00","ZB06_dead_01","ZB06_dead_02",
			"ZB06_dead_03","ZB06_dead_04","ZB06_dead_05",
			"ZB06_dead_06","ZB06_dead_07","ZB06_dead_08",
			"ZB06_dead_09","ZB06_dead_10","ZB06_dead_11",
			"ZB06_dead_12","ZB06_dead_13","ZB06_dead_14",
			"ZB06_dead_15","ZB06_dead_16","ZB06_dead_17",
			"ZB06_dead_18","ZB06_dead_19","ZB06_dead_20",
			"ZB06_dead_21","ZB06_dead_22","ZB06_dead_23",
			"ZB06_dead_24","ZB06_front_attack_00","ZB06_front_attack_01",
			"ZB06_front_attack_02","ZB06_front_attack_03","ZB06_front_attack_04",
			"ZB06_front_attack_05","ZB06_front_attack_06","ZB06_front_attack_07",
			"ZB06_front_attack_08","ZB06_front_attack_09","ZB06_front_attack_10",
			"ZB06_front_attack_11","ZB06_front_attack_12","ZB06_front_attack_13",
			"ZB06_front_attack_14","ZB06_front_attack_15","ZB06_front_attack_16",
			"ZB06_front_attack_17","ZB06_front_attack_18","ZB06_front_attack_19",
			"ZB06_front_attack_20","ZB06_front_attack_21","ZB06_front_attack_22",
			"ZB06_front_attack_23","ZB06_front_attack_24","ZB06_front_attack_25",
			"ZB06_front_attack_26","ZB06_front_attack_27","ZB06_front_attack_28",
			"ZB06_front_attack_29","ZB06_front_attack_30","ZB06_front_attack_31",
			"ZB06_front_attack_32","ZB06_front_attack_33","ZB06_front_attack_34",
			"ZB06_front_attack_35","ZB06_front_attack_36","ZB06_front_attack_37",
			"ZB06_front_attack_38","ZB06_front_attack_39","ZB06_front_attack_40",
			"ZB06_front_attack_41","ZB06_front_attack_42","ZB06_front_attack_43",
			"ZB06_front_attack_44","ZB06_front_walk_00","ZB06_front_walk_01",
			"ZB06_front_walk_02","ZB06_front_walk_03","ZB06_front_walk_04",
			"ZB06_front_walk_05","ZB06_front_walk_06","ZB06_front_walk_07",
			"ZB06_front_walk_08","ZB06_front_walk_09","ZB06_front_walk_10",
			"ZB06_front_walk_11","ZB06_front_walk_12","ZB06_front_walk_13",
			"ZB06_front_walk_14","ZB06_projectile_0","ZB06_projectile_1",
			"ZB06_projectile_2","ZB06_projectile_3","ZB06_projectile_4",
			"ZB06_projectile_5","ZB06_projectile_6","ZB06_projectile_7"
		], settings);
		settings.framewidth = settings.framewidth || 489;
		settings.frameheight = settings.frameheight || 399;
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

		this.addAnimation('dead', [{ name: "ZB06_dead_00", delay: 70 },{ name: "ZB06_dead_01", delay: 70 },{ name: "ZB06_dead_02", delay: 70 },{ name: "ZB06_dead_03", delay: 70 },{ name: "ZB06_dead_04", delay: 70 },{ name: "ZB06_dead_05", delay: 70 },{ name: "ZB06_dead_06", delay: 70 },{ name: "ZB06_dead_07", delay: 70 },{ name: "ZB06_dead_08", delay: 70 },{ name: "ZB06_dead_09", delay: 70 },{ name: "ZB06_dead_10", delay: 70 },{ name: "ZB06_dead_11", delay: 70 },{ name: "ZB06_dead_12", delay: 70 },{ name: "ZB06_dead_13", delay: 70 },{ name: "ZB06_dead_14", delay: 70 },{ name: "ZB06_dead_15", delay: 70 },{ name: "ZB06_dead_16", delay: 70 },{ name: "ZB06_dead_17", delay: 70 },{ name: "ZB06_dead_18", delay: 70 },{ name: "ZB06_dead_19", delay: 70 },{ name: "ZB06_dead_20", delay: 70 },{ name: "ZB06_dead_21", delay: 70 },{ name: "ZB06_dead_22", delay: 70 },{ name: "ZB06_dead_23", delay: 70 },{ name: "ZB06_dead_24", delay: 70 }]);
		this.addAnimation('front-walk', [{ name: "ZB06_front_walk_00", delay: 40 },{ name: "ZB06_front_walk_01", delay: 40 },{ name: "ZB06_front_walk_02", delay: 40 },{ name: "ZB06_front_walk_03", delay: 40 },{ name: "ZB06_front_walk_04", delay: 40 },{ name: "ZB06_front_walk_05", delay: 40 },{ name: "ZB06_front_walk_06", delay: 40 },{ name: "ZB06_front_walk_07", delay: 40 },{ name: "ZB06_front_walk_08", delay: 40 },{ name: "ZB06_front_walk_09", delay: 40 },{ name: "ZB06_front_walk_10", delay: 40 },{ name: "ZB06_front_walk_11", delay: 40 },{ name: "ZB06_front_walk_12", delay: 40 },{ name: "ZB06_front_walk_13", delay: 40 },{ name: "ZB06_front_walk_14", delay: 40 }]);
		this.addAnimation('front-attack', [{ name: "ZB06_front_attack_00", delay: 50 },{ name: "ZB06_front_attack_01", delay: 50 },{ name: "ZB06_front_attack_02", delay: 50 },{ name: "ZB06_front_attack_03", delay: 50 },{ name: "ZB06_front_attack_04", delay: 50 },{ name: "ZB06_front_attack_05", delay: 50 },{ name: "ZB06_front_attack_06", delay: 50 },{ name: "ZB06_front_attack_07", delay: 50 },{ name: "ZB06_front_attack_08", delay: 50 },{ name: "ZB06_front_attack_09", delay: 50 },{ name: "ZB06_front_attack_10", delay: 50 },{ name: "ZB06_front_attack_11", delay: 50 },{ name: "ZB06_front_attack_12", delay: 50 },{ name: "ZB06_front_attack_13", delay: 50 },{ name: "ZB06_front_attack_14", delay: 50 },{ name: "ZB06_front_attack_15", delay: 50 },{ name: "ZB06_front_attack_16", delay: 50 },{ name: "ZB06_front_attack_17", delay: 50 },{ name: "ZB06_front_attack_18", delay: 50 },{ name: "ZB06_front_attack_19", delay: 50 },{ name: "ZB06_front_attack_20", delay: 50 },{ name: "ZB06_front_attack_21", delay: 50 },{ name: "ZB06_front_attack_22", delay: 50 },{ name: "ZB06_front_attack_23", delay: 50 },{ name: "ZB06_front_attack_24", delay: 50 },{ name: "ZB06_front_attack_25", delay: 50 },{ name: "ZB06_front_attack_26", delay: 50 },{ name: "ZB06_front_attack_27", delay: 50 },{ name: "ZB06_front_attack_28", delay: 50 },{ name: "ZB06_front_attack_29", delay: 50 },{ name: "ZB06_front_attack_30", delay: 50 },{ name: "ZB06_front_attack_31", delay: 50 },{ name: "ZB06_front_attack_32", delay: 50 },{ name: "ZB06_front_attack_33", delay: 50 },{ name: "ZB06_front_attack_34", delay: 50 },{ name: "ZB06_front_attack_35", delay: 50 },{ name: "ZB06_front_attack_36", delay: 50 },{ name: "ZB06_front_attack_37", delay: 50 },{ name: "ZB06_front_attack_38", delay: 50 },{ name: "ZB06_front_attack_39", delay: 50 },{ name: "ZB06_front_attack_40", delay: 50 },{ name: "ZB06_front_attack_41", delay: 50 },{ name: "ZB06_front_attack_42", delay: 50 },{ name: "ZB06_front_attack_43", delay: 50 },{ name: "ZB06_front_attack_44", delay: 50 }]);
		this.setCurrentAnimation('front-walk');
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape( me.pool.pull("me.Rect", 228, 0, 486, 300) );
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.tween = new me.Tween();
        this.setCurrentAnimation('dead',()=>{
            this.setCurrentAnimation('front-attack',()=>{
                this.setCurrentAnimation('front-walk');
                me.audio.play("sfx-medusa-jalan", true, null, game.user.userData.sound.SFX);
                this.tween = new me.Tween(this.pos).to({y: me.game.viewport.height/2-82.5}, 2000).onComplete(function(){
                    this.setCurrentAnimation('front-attack');
                    this.attack = true;
                    this.setAnimationFrame(0);
                    me.audio.stop("sfx-medusa-jalan");
                }.bind(this));
                this.tween.start();
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
            if(dataZombie[id]["id"] == "ZB06"){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.damage = dataZombie[id]["atk"];
                this.reward = dataZombie[id]["reward"];
                this.moveSpeed = dataZombie[id]["movement"];
            }
        }
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        this.pos.z = 10;
        this.attack = false;
        this.walk = true;
        this.attackDie = true;
        this.animHit = false;
        this.body.getShape().translate(-this.width/2, -180);
        this.die = true;
        this.endDead = false;
        this.kena = true;
        this.duration = 0;
        this.hitRacun1 = true;
        this.dieInterval;
        this.shieldOn = false;
        this.haveRacun = false;
        
        this.frameIndex = 0;
        this.atkFrame = [5, 8, 10, 13, 15, 18, 20, 23, 25, 28];
        this.projectile = [];
                      
        this.projSetting = [{x: -38.5, y: 115, sudutX : 2, sudutY : 10},//770
                            {x: 50, y: 90, sudutX : -5, sudutY : 10},//720
                            {x: -70, y: 125, sudutX : 5, sudutY : 10},//790
                            {x: -22.5, y: 125, sudutX : 5, sudutY : 10},//790
                            {x: 35, y: 140, sudutX : -1.5, sudutY : 10},//820
                            {x: 90, y: 120, sudutX : -5.5, sudutY : 10},//780
                            {x: -80, y: 100, sudutX : 5.5, sudutY : 10},//740
                            {x: 60, y: 90, sudutX : -5, sudutY : 10},//720
                            {x: 22.5, y: 105, sudutX : -5, sudutY : 10},//750
                            {x: -20, y: 125, sudutX : 5, sudutY : 10}];//790
                            
        for(let i in this.atkFrame){
            let proj = me.pool.pull('projectileMedusaZB06', this.projSetting[i].x, this.projSetting[i].y);
            proj.index = parseInt(i) + 1;
            game.util.rotate(proj, this.projSetting[i].sudutX, this.projSetting[i].sudutY, 0, 0);
            me.game.world.addChild(proj, 55);
            this.projectile.push(proj);
        }
    
        this.dieFunc();
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);

		this.body.update();
		me.collision.check(this);
		drawNextFrame = drawNextFrame || this.body.vel.x !== 0 || this.body.vel.y !== 0;
        // Put user code here //
            if(this.attack){
                if(this.getCurrentAnimationFrame() == this.atkFrame[this.frameIndex]){
                    this.projectile[this.frameIndex].Shoot();
                    
                    if(this.frameIndex == this.atkFrame.length - 1){
                        this.frameIndex = 0;
                    }
                    else{
                        this.frameIndex ++;
                    }
                }
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
        this.tween.stop();
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.delay);
        me.timer.clearInterval(this.dieInterval);
        if(this.deadTimeout != undefined)
            me.timer.clearTimeout(this.deadTimeout);
        //  End of user code  //
	},

    // Put user code here //
    dieFunc: function(){
        this.dieInterval = me.timer.setInterval(()=>{
            if(this.health <= 0){
                this.tween.stop();
                if(this.die){
                    if(this.haveRacun){
                        this.haveRacun = false;
                        me.game.world.removeChild(this.racun);
                    }
                    me.audio.play("sfx-medusa-die", false, null, game.user.userData.sound.SFX);
                    this.attack = false;
                    this.die = false;
                    this.tween.stop();
                    this.setAnimationFrame(0);
                    this.setCurrentAnimation('dead', function(){
                        this.coinAnim = me.pool.pull ("battleCoin", this.pos.x+30, this.pos.y);
                        me.game.world.addChild(this.coinAnim, this.pos.z+4);
                        this.coinAnim2 = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                        me.game.world.addChild(this.coinAnim2, this.pos.z+4);
                        this.coinAnim3 = me.pool.pull ("battleCoin", this.pos.x-30, this.pos.y);
                        me.game.world.addChild(this.coinAnim3, this.pos.z+4);
                        
                        let to = true;
                        this.timeOt2 = me.timer.setTimeout(()=>{
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
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();