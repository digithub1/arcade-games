(function(){
// Put user code here //
 
//  End of user code  //

game.object.ZombieBase = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 80;
		settings.frameheight = settings.frameheight || 139;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.id = settings.id;
        this.folder = settings.folder;
        this.type = settings.type;
        this.animationMotions = settings.animationMotions;
        settings.image = game.textureMap.get(this.folder);
        
        this.listAnimation = [];
        let animationKeyList = {}, // for add animation, motion with imageNameList
            imageNameList = [],
            fullMotions = game.util.getFullMotionList(this.id, this.animationMotions);
            
        fullMotions.forEach((motion) => {
            let imageNames = game.util.createImageNameList(motion.name, motion.count);
            animationKeyList[motion.name] = imageNames;
            this.listAnimation.push(imageNames);
            Array.prototype.push.apply(imageNameList, imageNames);
        });
        
        let atlasIndices = game.util.populateAtlasIndices(settings.image, imageNameList);
        game.util.spreadAll(settings, atlasIndices);
        // --
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
		this.isKinematic = false;

		this.body = new me.Body(this);
		this.body.addShape(me.pool.pull("me.Rect", 0, 0, this.width, this.height) );
		this.body.collisionType = game.collisionTypes.ALL_OBJECT;
		this.body.setCollisionMask(game.collisionTypes.ALL_OBJECT);
		this.body.gravity.y = 0;
		this.var = {};

        // Put user code here //
        this.frontAtk = [];
        this.sideAtk = [];
        this.riseAnim = [];
          
        if(this.id == "Z003" || this.id == "Z014"){
            this.addAnimation("front-attack", this.listAnimation[0]);
            this.addAnimation("front-walk", this.listAnimation[1]);
            this.addAnimation("side-attack", this.listAnimation[2]);
            this.addAnimation("side-walk", this.listAnimation[3]);
        }else{
            for(let i = 0 ; i < this.listAnimation[0].length ; i++){
                this.frontAtk.push({ name: this.listAnimation[0][i], delay: 250 });
            }
            
            for(let i = 0 ; i < this.listAnimation[2].length ; i++){
                this.sideAtk.push({ name: this.listAnimation[2][i], delay: 250 });
            }
            
            if(this.id == "Z028" || this.id == "Z027"){
                this.sideWalk = [];
                this.frontWalk = [];
                
                for(let i = 0 ; i < this.listAnimation[1].length ; i++){
                    this.frontWalk.push({ name: this.listAnimation[1][i], delay: 150 });
                }
                
                for(let i = 0 ; i < this.listAnimation[3].length ; i++){
                    this.sideWalk.push({ name: this.listAnimation[3][i], delay: 150 });
                }
                
                this.addAnimation("front-attack", this.frontAtk);
                this.addAnimation("front-walk", this.frontWalk);
                this.addAnimation("side-attack", this.sideAtk);
                this.addAnimation("side-walk", this.sideWalk);
            }
            else{
                 this.addAnimation("front-attack", this.frontAtk);
                this.addAnimation("front-walk", this.listAnimation[1]);
                this.addAnimation("side-attack", this.sideAtk);
                this.addAnimation("side-walk", this.listAnimation[3]);
            }
           
        }    
        
        if(this.id == "Z007"){
            for(let i = 0 ; i < this.listAnimation[4].length ; i++){
                this.riseAnim.push({ name: this.listAnimation[4][i], delay: 130 });
            }
            
            this.addAnimation("front-rise", this.riseAnim);
        }
        
        let dataZombie = game.controller.data.getDataZombie();
        
        for(let id in dataZombie){
            if(dataZombie[id]["id"] == this.id){
                this.name   = dataZombie[id]["name"];
                this.health = dataZombie[id]["health"];
                this.damage = dataZombie[id]["atk"];
                this.reward = dataZombie[id]["reward"];
                this.moveSpeed = dataZombie[id]["movement"];
            }
        }
        
        this.attackSfx = settings.attackSfx;
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
		    game.collisionTypes.TEMBOK |
		    game.collisionTypes.NUKE
		);
		this.pos.z = 10;
		this.attack = true;
        this.walk = true;
        this.hitLimit = true;
        this.random = false;
        this.randomArray = [1,-1];
        this.animHit = false;
		this.die = true;
		this.sfxDied = ["sfx-zombie-died", "sfx-zombie-died-2", "sfx-zombie-died"];
		this.kena = true;
		this.timer = 0;
		this.duration = 0;
        this.hitRacun1 = true;
        this.kenaMissile = true;
        this.kenaNuke = true;
        this.timeOutDelay = [100, 300, 500, 700, 900];
        this.deadDelayTime = [100, 200, 300];
        this.racunInterval;
        this.changeAnim1;
        this.changeAnim2;
        this.delayLaser;
        this.delayListrik;
        this.intervalDieFunc;
        this.peluru = true;
        this.onSfx = false;
        this.haveRacun = false;
        
		if(this.id == "Z007"){
		    this.random = false;
		    me.audio.play("sfx-zombie-spawn-ground", false, null, game.user.userData.sound.SFX);
            this.timeOt1 = me.timer.setTimeout(() => {
                    me.audio.play("sfx-zombie-laugh", false, null, game.user.userData.sound.SFX);
            }, 1000);
            
            this.setCurrentAnimation('front-rise',()=>{
                this.pos.y += 30;
                
                if(!this.isCurrentAnimation('front-walk')){
                    this.setCurrentAnimation('front-walk');
                    this.body.vel.y = this.moveSpeed;
                }
                me.timer.setTimeout(()=>{
                    this.random = true;
                },3000);
                return false;
            });
		} else if(this.pos.x >= 1150){
		    //dari kanan
		    this.body.vel.y = 0;
            this.body.vel.x = -this.moveSpeed;
            this.flipX(true);
            this.setCurrentAnimation('side-walk');
            this.kananFunc();
		} else if(this.pos.x <= 50){
		    //dari kiri
		    this.flipX(false);
            this.body.vel.y = 0;
            this.body.vel.x = this.moveSpeed;
            this.setCurrentAnimation('side-walk');
            this.kiriFunc();
		} else if(this.pos.x > 50 && this.pos.x < 1150){
		     //dari atas
		    
		    this.body.vel.y = this.moveSpeed;
		    this.setCurrentAnimation('front-walk');
		    this.bawahFunc();
		}
        
        if(this.id == "Z027" || this.id == "Z028"){
            this.smoke = me.pool.pull("fallenSmoke", 0, 0);
            me.game.world.addChild(this.smoke, this.pos.z + 1);
            this.smoke.alpha = 0;
        }
        
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
        if(this.pos.x < -500 || this.pos.x > me.game.world.width + 500 || this.pos.y > me.game.viewport.height - this.selisihHeightLayar+25){
		    this.health -= 100;
		}
		if(this.health <= 0 && this.die === false){
		    this.alpha = 0;
		}
		
		if(this.id == "Z027" || this.id == "Z028"){
    		if(this.isCurrentAnimation("side-walk") || this.isCurrentAnimation("front-walk")){
    		    if(this.id == "Z028"){
                    if(this.isCurrentAnimation("side-walk")){
                        this.smoke.pos.x = this.pos.x;
                        this.smoke.pos.y = this.pos.y + 37;
                    }
                    else{
                        this.smoke.pos.x = this.pos.x;
                        this.smoke.pos.y = this.pos.y + 37;
                    }  
                }
                else if(this.id == "Z027"){
                    if(this.isCurrentAnimation("side-walk")){
                        this.smoke.pos.x = this.pos.x;
                        this.smoke.pos.y = this.pos.y + 37;
                    }
                    else{
                        this.smoke.pos.x = this.pos.x + 5;
                        this.smoke.pos.y = this.pos.y + 37;
                    }
                }
                
                if(this.getCurrentAnimationFrame() == 2){
                    if(this.smoke.alpha == 0){
                        this.smoke.alpha = 1;
                        this.smoke.setCurrentAnimation("idle", ()=> {
                            this.smoke.setCurrentAnimation("stop");
                            this.smoke.alpha = 0;
                            return false;
                            }
                        );
                    }
                }
    		}
        }
        
        if(this.id == "Z031"){
            if(this.isCurrentAnimation("side-attack") || this.isCurrentAnimation("front-attack")){
                if(this.getCurrentAnimationFrame() == 2){
                    if(this.onSfx == false){
                        this.onSfx = true;
                        me.audio.play(this.attackSfx, false, null, game.user.userData.sound.SFX);
                    }
                }
                else{
                    this.onSfx = false;
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
        // console.log("test");
        // console.log(other.body.collisionType);
        if (other.body.collisionType === game.collisionTypes.PLAYER) {
            // console.log("col player");
            this.hitLimit = false;
            
            if(this.getCurrentAnimationFrame() == 1){
                other.health -= this.damage;
            }
            
            let posXKanan = 650,
                posXKiri = 525;
            
            if(this.attack){
                // this.attack = false;
                this.random = false;
                
                if(this.pos.x > posXKanan){
                    this.pos.set(this.pos.x, this.pos.y, this.pos.z);
                    this.flipX(true);
                    
                    if(!this.isCurrentAnimation('side-attack')){
                        this.setCurrentAnimation('side-attack');
                        let randomTime = Math.floor(Math.random()*this.timeOutDelay.length);
                        me.timer.setTimeout(()=>{
                            this.animHit = true;
                        }, this.timeOutDelay[randomTime]);
                    }
                    this.body.vel.y = 0;
                    this.body.vel.x = 0;
                }
            
                if(this.pos.x < posXKiri){
                    this.pos.set(this.pos.x, this.pos.y, this.pos.z);
                    this.flipX(false);
                    
                    if(!this.isCurrentAnimation('side-attack')){
                        this.setCurrentAnimation('side-attack');
                        let randomTime = Math.floor(Math.random()*this.timeOutDelay.length);
                        
                        me.timer.setTimeout(()=>{
                            this.animHit = true;
                        }, this.timeOutDelay[randomTime]);
                    }
                    this.body.vel.y = 0;
                    this.body.vel.x = 0;
                }
                
                if(this.pos.x > posXKiri && this.pos.x < posXKanan){
                    // console.log("start attack");
                    this.pos.set(this.pos.x, this.pos.y, this.pos.z);
                    
                    if(!this.isCurrentAnimation('front-attack')){
                        this.setCurrentAnimation('front-attack');
                        let randomTime = Math.floor(Math.random()*this.timeOutDelay.length);
                        // console.log("rand1 ", this.timeOutDelay[randomTime]);
                        me.timer.setTimeout(()=>{
                            this.animHit = true;
                        }, this.timeOutDelay[randomTime]);
                    }
                    this.body.vel.y = 0;
                    this.body.vel.x = 0;
                }
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.OBSTACLE || 
            other.body.collisionType === game.collisionTypes.TEMBOK) {
            this.random = false;
            
            if(this.walk){
                this.timer = 0;
                let limitKanan  = other.pos.x + (other.body.width/2.5),
                    limitKiri   = other.pos.x - (other.body.width/2.5);
                
                if(this.pos.x < other.pos.x){
                    this.body.vel.y = 0;
                    this.body.vel.x = -this.moveSpeed;
                    this.flipX(true);
                    if(!this.isCurrentAnimation('side-walk')){
                     this.setCurrentAnimation('side-walk');
                    }
                    
                    if(this.pos.x <= limitKiri){
                        this.walk = false;
                        this.playTime();
                    }
                }
            
                if(this.pos.x > other.pos.x){
                    this.body.vel.y = 0;
                    this.body.vel.x = this.moveSpeed;
                    this.flipX(false);
                    if(!this.isCurrentAnimation('side-walk')){
                        this.setCurrentAnimation('side-walk');
                    }
                    
                    if(this.pos.x >= limitKanan){
                        this.walk = false;
                        this.playTime();
                    }
                }
            }
            
            return false;
        }
        
        if(other.body.collisionType === game.collisionTypes.LIMIT){
            this.walk = false;
            
            if(this.hitLimit){
                // this.hitLimit = false;
                this.random = false;
                
                if(this.pos.x > me.game.world.width/2){
                    this.body.vel.y = 0;
                    this.body.vel.x = -this.moveSpeed;
                    this.flipX(true);
                    if(!this.isCurrentAnimation('side-walk')){
                     this.setCurrentAnimation('side-walk');
                    }
                }
                
                if(this.pos.x < me.game.world.width/2){
                    this.body.vel.y = 0;
                    this.body.vel.x = this.moveSpeed;
                    this.flipX(false);
                    if(!this.isCurrentAnimation('side-walk')){
                        this.setCurrentAnimation('side-walk');
                    }
                }
            }
            
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.PELURULASER) {
            this.peluru = true;
            if(this.kena){
                this.kena = false;
                this.hitAnim = me.pool.pull ("WP0006ujungPeluru", this.pos.x, this.pos.y+7.5);
                me.game.world.addChild(this.hitAnim, this.pos.z+1);
                this.delayLaser = me.timer.setTimeout(()=>{
                    this.kena = true;
                },1000);
			}
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.PELURULISTRIK) {
            this.peluru = true;
            if(this.kena){
                this.kena = false;
                let hitAnim = me.pool.pull ("WP0007ujungPeluru", this.pos.x, this.pos.y+7.5);
                me.game.world.addChild(hitAnim, this.pos.z+1);
                if(this.type == "short"){
                    let hitAnim2 = me.pool.pull ("hitListrikEffect", this.pos.x, this.pos.y);
                    me.game.world.addChild(hitAnim2, this.pos.z+2);
                    hitAnim2.setCurrentAnimation('0',()=>{
                        let toOnce = true;
                        this.timeOt2 = me.timer.setTimeout(()=>{
                             if(toOnce){
                                toOnce = false;
                                me.game.world.removeChildNow(hitAnim2);
                             }
                        }, 500);
                        return false;
                    });
                }else if (this.type == "tall"){
                    let hitAnim2 = me.pool.pull ("hitListrikEffect", this.pos.x, this.pos.y);
                    me.game.world.addChild(hitAnim2, this.pos.z+2);
                    hitAnim2.setCurrentAnimation('1',()=>{
                        this.timeOt3 = me.timer.setTimeout(()=>{
                            me.game.world.removeChildNow(hitAnim2);
                        }, 500);
                        return false;
                    });
                }
                
                this.delayListrik = me.timer.setTimeout(()=>{
                    this.kena = true;
                },1000);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.RACUN) {
            this.peluru = false;
            if(this.hitRacun1){
                this.hitRacun1 = false;
                    
                let randomTime = Math.floor(Math.random()*this.timeOutDelay.length);
                this.timeOt4 = me.timer.setTimeout(()=>{
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
                		        me.timer.clearInterval(this.racunInterval);
                		        let to = true;
                		        this.timeOt5 = me.timer.setTimeout(()=>{
                                    if(to){
                                        to = false;
                                        if(this.racun && this.haveRacun){
                                            this.haveRacun = false;
                                            me.game.world.removeChildNow(this.racun);
                                        }
                                    }
                                }, 1000);
                                
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
            this.peluru = false;
            if(this.kenaMissile){
                // console.log("kena missile");
                this.kenaMissile = false;
                this.health -= other.damage;
                me.timer.setTimeout(()=>{
                    this.kenaMissile = true;
                },150);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.NUKE) {
            this.peluru = false;
            if(this.kenaNuke){
                this.kenaNuke = false;
                this.health -= other.damage;
                me.timer.setTimeout(()=>{
                    this.kenaNuke = true;
                },5000);
            }
            return false;
        }
        
        if (other.body.collisionType === game.collisionTypes.PELURU) {
            this.peluru = true;
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
        me.timer.clearTimeout(this.changeAnim1);
        me.timer.clearTimeout(this.changeAnim2);
        me.timer.clearTimeout(this.delayLaser);
        me.timer.clearTimeout(this.delayListrik);
        me.timer.clearInterval(this.intervalDieFunc);
        me.game.world.removeChild(this);
        //  End of user code  //
	},

    // Put user code here //
    playTime : function(){
        this.timer = 0;
        let intervalPlay = me.timer.setInterval(()=>{
            this.random = false;
            this.timer += 1;
            if(this.timer >= 1){
                this.random = false;
                me.timer.clearInterval(intervalPlay);
                if(this.body == undefined){
                    // console.log("Die");
                }else{
                    this.body.vel.y = this.moveSpeed;
                    this.body.vel.x = 0;
                    if(!this.isCurrentAnimation('front-walk')){
                        this.setCurrentAnimation('front-walk');
                        this.walk = true;
                    }
                }
            }
        },500);
    },
    
    bawahFunc: function(){
        let intervalBawahFunc = me.timer.setInterval(()=>{
            if(this.pos == undefined){
                me.timer.clearInterval(intervalBawahFunc);
                // console.log("mati");
            }else{
                if(this.pos.y >= me.game.viewport.height/2-50){
                    me.timer.clearInterval(intervalBawahFunc);
                    this.random = true;
                }
            }
        },1000);
    },
    
    kiriFunc: function(){
        let intervalKiriFunc = me.timer.setInterval(()=>{
            if(this.pos == undefined){
                me.timer.clearInterval(intervalKiriFunc);
                // console.log("mati");
            }else{
                if(this.pos.x >= me.game.world.width/4+100){
                    // console.log("random 1");
                    me.timer.clearInterval(intervalKiriFunc);
                    this.random = true;
                    this.body.vel.y = this.moveSpeed;
                    this.body.vel.x = 0;
                    if(!this.isCurrentAnimation('front-walk')){
                        this.setCurrentAnimation('front-walk');
                    }
                }
            }
        },1000);
    },
    
    kananFunc: function(){
        let intervalKananFunc = me.timer.setInterval(()=>{
            if(this.pos == undefined){
                me.timer.clearInterval(intervalKananFunc);
                // console.log("mati");
            }else{
                if(this.pos.x <= me.game.world.width-me.game.world.width/4-100){
                    // console.log("random 2");
                    me.timer.clearInterval(intervalKananFunc);
                    this.random = true;
                    this.body.vel.y = this.moveSpeed;
                    this.body.vel.x = 0;
                    if(!this.isCurrentAnimation('front-walk')){
                        this.setCurrentAnimation('front-walk');
                    }
                }
            }
        },1000);
    },
    
    dieFunc: function(){
        this.intervalDieFunc = me.timer.setInterval(()=>{
            if(this.random && this.walk && this.hitLimit){
                let randomValue = Math.floor(Math.random()*500)+0;
                
                if(this.randomArray[randomValue] == 1){
                    this.random = false;
                    this.flipX(false);
                    this.body.vel.y = 0;
                    this.body.vel.x = this.moveSpeed;
                    if(!this.isCurrentAnimation('side-walk')){
                        this.setCurrentAnimation('side-walk',()=>{
                            this.changeAnim1 = me.timer.setTimeout(()=>{
                                if(this.body == undefined){
                                    // console.log("Die");
                                }else{
                                    this.body.vel.y = this.moveSpeed;
                                    this.body.vel.x = 0;
                                    if(!this.isCurrentAnimation('front-walk')){
                                        this.setCurrentAnimation('front-walk');
                                    }
                                }
                            },3000);
                        });
                        
                    }
                }
                
                if(this.randomArray[randomValue] == -1){
                    this.random = false;
                    this.body.vel.y = 0;
                    this.body.vel.x = -this.moveSpeed;
                    this.flipX(true);
                    if(!this.isCurrentAnimation('side-walk')){
                        this.setCurrentAnimation('side-walk',()=>{
                            this.changeAnim2 = me.timer.setTimeout(()=>{
                                if(this.body == undefined){
                                    // console.log("Die");
                                }else{
                                    this.body.vel.y = this.moveSpeed;
                                    this.body.vel.x = 0;
                                    if(!this.isCurrentAnimation('front-walk')){
                                        this.setCurrentAnimation('front-walk');
                                    }
                                }
                            },3000);
                        });
                    }
                }
            }
            
            if(this.animHit){
                if(this.pos == undefined){
                    
                }else{
                    this.animHit = false;
                    
                    this.hitPlayer = me.pool.pull ("battleHitPlayer", this.pos.x, this.pos.y+20);
                    me.game.world.addChild(this.hitPlayer, this.pos.z+1);
                    
                    this.timeOt6 = me.timer.setTimeout(() => {
                        me.audio.play(this.attackSfx, false, null, game.user.userData.sound.SFX);
                        if(this.id != "Z031"){
                            me.audio.play(this.attackSfx, false, null, game.user.userData.sound.SFX);
                        }
                        
                        this.animHit = true;
                    }, 1000);
                }
            }
            
            if(this.health <= 0){
                me.timer.clearTimeout(this.delayLaser);
                me.timer.clearTimeout(this.delayListrik);
                if(this.die){
                    this.die = false;
                    if(this.racun && this.haveRacun){
                        this.haveRacun = false;
                        me.game.world.removeChild(this.racun);
                    }
                    if(this.peluru){
                        if(this.pos == undefined){
                            
                        }else{
                            let dieAnim = me.pool.pull ("battleDieAnim", this.pos.x, this.pos.y+15);
                            me.game.world.addChild(dieAnim, this.pos.z+3);
                            
                            let coinAnim = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                            me.game.world.addChild(coinAnim, this.pos.z+4);
                            
                            game.controller.data.addGold(this.reward);
                            game.controller.data.addTemporaryGold(this.reward);
                            game.controller.data.addTemporaryKill();
                            game.controller.data.setDailyQuest('kill zombies', 1);
                            
                            
                            var sfx = this.sfxDied[Math.floor(Math.random()*this.sfxDied.length)];
                            me.audio.play(sfx, false, null, game.user.userData.sound.SFX);
                            
                		    me.game.world.removeChildNow(this);
                            me.timer.clearInterval(this.intervalDieFunc);
                        }
                    }else{
                        let randomTime = Math.floor(Math.random()*this.deadDelayTime.length);
                        this.timeOt7 = me.timer.setTimeout(()=>{
                            if(this.pos == undefined){
                                
                            }else{
                                let dieAnim = me.pool.pull ("battleDieAnim", this.pos.x, this.pos.y+15);
                                me.game.world.addChild(dieAnim, this.pos.z+3);
                                
                                let coinAnim = me.pool.pull ("battleCoin", this.pos.x, this.pos.y-10);
                                me.game.world.addChild(coinAnim, this.pos.z+4);
                                
                                game.controller.data.addGold(this.reward);
                                game.controller.data.addTemporaryGold(this.reward);
                                game.controller.data.addTemporaryKill();
                                game.controller.data.setDailyQuest('kill zombies', 1);
                                
                                
                                var sfx = this.sfxDied[Math.floor(Math.random()*this.sfxDied.length)];
                                me.audio.play(sfx, false, null, game.user.userData.sound.SFX);
                                
                    		    me.game.world.removeChildNow(this);
                                me.timer.clearInterval(this.intervalDieFunc);
                            }
                        }, this.deadDelayTime[randomTime]);
                    }
                }
    		}
        },1000);
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();