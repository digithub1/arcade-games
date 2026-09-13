(function(){
// Put user code here //
 
//  End of user code  //

game.level.L2005 = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("L2005");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1500);
        
        let area1 = me.pool.pull ("skill2Area", 0, me.game.world.height/2),
            area2 = me.pool.pull ("skill3Area", 0, me.game.world.height/2),
            effect1 = me.pool.pull ("battleCoin", 0, 0),
            effect2 = me.pool.pull ("battleDieAnim", 0, 0),
            effect3 = me.pool.pull ("battleHitPlayer", 0, 0),
            effect4 = me.pool.pull ("battleHitZombieAnim", 0, 0),
            effect5 = me.pool.pull ("battleProjectileEffect", 0, 0),
            effect6 = me.pool.pull ("missile", 0, 0),
            effect7 = me.pool.pull ("hitListrikEffect", 0, 0),
            effect8 = me.pool.pull ("WP0004ujungPeluru", 0, 0),
            effect9 = me.pool.pull ("WP0006ujungPeluru", 0, 0),
            effect10 = me.pool.pull ("WP0007ujungPeluru", 0, 0),
            effect11 = me.pool.pull ("WP0008ujungPeluru", 0, 0),
            effect12 = me.pool.pull ("WP0009ujungPeluru", 0, 0),
            effect13 = me.pool.pull ("explosionChemical", 0, 0),
            effect14 = me.pool.pull ("explosionNuke", 0, 0),
            effect15 = me.pool.pull ("explosion", 0, 0);
        me.game.world.addChild(area1, 10);
        me.game.world.addChild(area2, 10);
        me.game.world.addChild(effect1, 10);
        me.game.world.addChild(effect2, 10);
        me.game.world.addChild(effect3, 10);
        me.game.world.addChild(effect4, 10);
        me.game.world.addChild(effect5, 10);
        me.game.world.addChild(effect6, 10);
        me.game.world.addChild(effect7, 10);
        me.game.world.addChild(effect8, 10);
        me.game.world.addChild(effect9, 10);
        me.game.world.addChild(effect10, 10);
        me.game.world.addChild(effect11, 10);
        me.game.world.addChild(effect12, 10);
        me.game.world.addChild(effect13, 10);
        me.game.world.addChild(effect14, 10);
        me.game.world.addChild(effect15, 10);
        let racun = me.pool.pull("me.Sprite", me.game.viewport.width/2, me.game.viewport.height/2, {
            image:  game.textureMap.get("effect"),
            region:"poison fx"
        });
        me.game.world.addChild(racun, 10);
        
        this.background1 = me.pool.pull("me.Sprite", me.game.world.width, me.game.world.height, {
            image: game.textureMap.get("southAmerica"),
            region: "L2005"
        });
        me.game.world.addChild(this.background1, 1);
        game.util.scale(this.background1, 2);
        
        this.background2 = me.pool.pull("me.Sprite", me.game.world.width, me.game.world.height, {
            image: game.textureMap.get("southAmerica"),
            region: "L2005B"
        });
        game.util.scale(this.background2, 2);
        
        let currentLevel = me.levelDirector.getCurrentLevelId();
        this.win = false;
        this.end = false;
        this.spawnFinalWave = true;
        this.component = {};
        this.component.stage = me.pool.pull("game.component.stageBattle", {
            id: currentLevel,
            benuaID: "B001",
            nextId: "L2005B",
            stageNumber : 5,
            condition:this
        });
        me.audio.play("bgm-amerikaselatan", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
        me.audio.stop("gameover");
        me.audio.stop("bgm-menu");
        console.log(me.levelDirector.getCurrentLevelId());
        
        this.splashAnim = me.pool.pull("loadingAnim", 0, 0);
        me.game.world.addChild(this.splashAnim, 95);
        let toOnce = true;
        this.timeOt1 = me.timer.setTimeout(()=>{
            if(toOnce){
                toOnce = false;
                me.game.world.removeChildNow(effect6);
                me.game.world.removeChildNow(racun);
            }
        },1500);
        
        this.spawnerEnemy = me.pool.pull ("spawnerEnemy", 100, -375,{//200, -900
                level:currentLevel,
                container:this
            });
        this.spawnerEnemy2 = me.pool.pull ("spawnerEnemy", -75, -375,{//-200, -900
                level:currentLevel,
                container:this
            });
        this.spawnerEnemy3 = me.pool.pull ("spawnerEnemy", -525, -375,{//-1600, 0
                level:currentLevel,
                container:this
            });
        this.spawnerEnemy4 = me.pool.pull ("spawnerEnemy", 550, -375,{//1600, 0
                level:currentLevel,
                container:this
            });
        let toOnce2 = true;
        this.timeOt2 = me.timer.setTimeout(()=>{
            if(toOnce2){
                toOnce2 = false;
                me.game.world.addChild(this.spawnerEnemy, this.spawnerEnemy.pos.z);
                me.game.world.addChild(this.spawnerEnemy2, this.spawnerEnemy2.pos.z);
                me.game.world.addChild(this.spawnerEnemy3, this.spawnerEnemy3.pos.z);
                me.game.world.addChild(this.spawnerEnemy4, this.spawnerEnemy4.pos.z);
                this.spawnerEnemy.wave1ForFunction();
                this.spawnerEnemy2.wave1ForFunction();
                this.spawnerEnemy3.wave1ForFunction();
                this.spawnerEnemy4.wave1ForFunction();
            }
        }, 4000);
        
        this.spawnerEnemyBos = me.pool.pull ("spawnerEnemyBos", 0, -375,{
            level:currentLevel,
            container:this
        });
        me.game.world.addChild(this.spawnerEnemyBos, this.spawnerEnemyBos.pos.z);
        
        this.spawnerEnemyZ007 = me.pool.pull ("spawnerEnemyZ007", 0, 0);
        me.game.world.addChild(this.spawnerEnemyZ007, this.spawnerEnemyZ007.pos.z);
        
        this.sisiTangga = me.pool.pull("L2005Tangga", -110, -67.5);
        me.game.world.addChild(this.sisiTangga, 9);
        
        this.sisiTangga2 = me.pool.pull("L2005Tangga", 136, -67.5);
        me.game.world.addChild(this.sisiTangga2, 9);
        
        this.lantai1 = me.pool.pull("L2005Lantai", -210, -155);
        me.game.world.addChild(this.lantai1, 9);
        
        this.lantai2 = me.pool.pull("L2005Lantai", 235, -160);
        me.game.world.addChild(this.lantai2, 9);
        this.lantai2.flipX(true);
        
        this.tiang = me.pool.pull("L2005Tiang", -272.5, -247.5);
        me.game.world.addChild(this.tiang, 9);
        
        this.tiang2 = me.pool.pull("L2005Tiang", 12.5, -247.5);
        me.game.world.addChild(this.tiang2, 9);
        this.tiang2.setCurrentAnimation('tiang2');
        
        this.tiang3 = me.pool.pull("L2005Tiang", 285, -247.5);
        me.game.world.addChild(this.tiang3, 9);
        this.tiang3.setCurrentAnimation('tiang3');
        
        let pohon1 = me.pool.pull("L2005BPohon", 430, 135);
        me.game.world.addChild(pohon1, 45);
        
        let pohon2 = me.pool.pull("L2005BPohon", -495, 100);
        me.game.world.addChild(pohon2, 45);
        pohon2.setCurrentAnimation('pohon2');
        
        let blackPanelKiri = me.pool.pull("blackPanel", -me.game.world.width+25, 0);
        me.game.world.addChild(blackPanelKiri, 100);
        let blackPanelKanan = me.pool.pull("blackPanel", me.game.world.width-25, 0);
        me.game.world.addChild(blackPanelKanan, 100);
        let blackPanelAtas = me.pool.pull("blackPanel", 0, -me.game.world.height+2.5);
        me.game.world.addChild(blackPanelAtas, 100);
        let blackPanelBawah = me.pool.pull("blackPanel", 0, me.game.world.height-7.5);
        me.game.world.addChild(blackPanelBawah, 100);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-amerikaselatan");
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.timeOt3);
        me.timer.clearTimeout(this.timeOt4);
        me.timer.clearTimeout(this.timeOt5);
        me.timer.clearTimeout(this.timeOt6);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-amerikaselatan", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },

    decisionFunc: function(){
        let arrayX  = [-50, 325],
            arrayY  = [-100, 0];
        if(this.spawnerEnemy.spawnZ007 && this.spawnerEnemy2.spawnZ007 && this.spawnerEnemy3.spawnZ007 && this.spawnerEnemy4.spawnZ007){
            let rndmZ007 = Math.floor(Math.random()*arrayX.length);
            this.spawnerEnemyZ007.pos.x = arrayX[rndmZ007];
            this.spawnerEnemyZ007.pos.y = arrayY[rndmZ007];
            
            this.spawnerEnemyZ007.spawnZ007();
            this.spawnerEnemy.spawnZ007  = false;
            this.spawnerEnemy2.spawnZ007 = false;
            this.spawnerEnemy3.spawnZ007 = false;
            this.spawnerEnemy4.spawnZ007 = false;
        }
        
        if(this.spawnerEnemy.spawnWave2 && this.spawnerEnemy2.spawnWave2 && this.spawnerEnemy3.spawnWave2 && this.spawnerEnemy4.spawnWave2){
            this.spawnerEnemy.wave2ForFunction();
            this.spawnerEnemy2.wave2ForFunction();
            this.spawnerEnemy3.wave2ForFunction();
            this.spawnerEnemy4.wave2ForFunction();
            this.spawnerEnemy.spawnWave2 = false;
            this.spawnerEnemy2.spawnWave2 = false;
            this.spawnerEnemy3.spawnWave2 = false;
            this.spawnerEnemy4.spawnWave2 = false;
        }
        
        if(this.spawnerEnemy.bos2 && this.spawnerEnemy2.bos2 && this.spawnerEnemy3.bos2 && this.spawnerEnemy4.bos2){
            this.spawnerEnemyBos.spawnBos2();
            this.spawnerEnemy.bos2  = false;
            this.spawnerEnemy2.bos2 = false;
            this.spawnerEnemy3.bos2 = false;
            this.spawnerEnemy4.bos2 = false;
            this.spawnerEnemy.haveSpawn  = true;
            this.spawnerEnemy2.haveSpawn = true;
            this.spawnerEnemy3.haveSpawn = true;
            this.spawnerEnemy4.haveSpawn = true;
        }
        
        if(this.spawnerEnemy.bos3 && this.spawnerEnemy2.bos3 && this.spawnerEnemy3.bos3 && this.spawnerEnemy4.bos3){
            if(DATABASE_DEBUG == false){
                phoneVibrate();
            }
            me.game.viewport.shake(50, 2000, me.game.viewport.AXIS.BOTH,()=>{
                me.game.world.removeChild(this.background1);
                me.game.world.removeChild(this.sisiTangga);
                me.game.world.removeChild(this.sisiTangga2);
                me.game.world.removeChild(this.tiang);
                me.game.world.removeChild(this.tiang2);
                me.game.world.removeChild(this.tiang3);
                me.game.world.removeChild(this.lantai2);
                me.game.world.removeChild(this.lantai1);
                me.game.world.addChild(this.background2, 2);
                
                let batuTengah = me.pool.pull("L2005BBatuBiasa", -25, -200);
                me.game.world.addChild(batuTengah, 9);
                
                let batuKananAtas = me.pool.pull("L2005BBatuBiasa", 350, -217.5);
                me.game.world.addChild(batuKananAtas, 9);
                batuKananAtas.setCurrentAnimation('batu2');
                
                let batuKiriAtas = me.pool.pull("L2005BBatu2", -320, -195);
                me.game.world.addChild(batuKiriAtas, 9);
                
                let batuKiri = me.pool.pull("L2005BBatu1", -550, -55);
                me.game.world.addChild(batuKiri, 9);
                
                let batuKanan = me.pool.pull("L2005BBatu3", 535, -80);
                me.game.world.addChild(batuKanan, 9);
                
                let destroyAnim = me.pool.pull ("L2005Ledakan", -50, -50),
                    destroyAnim2 = me.pool.pull ("L2005Ledakan", -225, -175),
                    destroyAnim3 = me.pool.pull ("L2005Ledakan", 225, -200);
                    destroyAnim4 = me.pool.pull ("L2005Ledakan", -125, -125);
                    destroyAnim5 = me.pool.pull ("L2005Ledakan", 125, -150);
                
                me.game.world.addChild(destroyAnim, 10);
                let animOnce = true;
                destroyAnim.setCurrentAnimation('idle',()=>{
                    if(animOnce){
                        animOnce = false;
                        me.game.world.removeChild(destroyAnim);
                    }
                    return false;
                });
                me.audio.play("sfx-bangunan-meledak", false, null, game.user.userData.sound.SFX);
                let toOnce3 = true;
                this.timeOt3 = me.timer.setTimeout(()=>{
                    if(toOnce3){
                        toOnce3 = false;
                        me.game.world.addChild(destroyAnim2, 10);
                        let animOnce2 = true;
                        destroyAnim2.setCurrentAnimation('idle',()=>{
                            if(animOnce2){
                                animOnce2 = false;
                                me.game.world.removeChild(destroyAnim2);
                            }
                            return false;
                        });
                        me.audio.play("sfx-bangunan-meledak", false, null, game.user.userData.sound.SFX);
                    }
                }, 300);
                let toOnce4 = true;
                this.timeOt4 = me.timer.setTimeout(()=>{
                    if(toOnce4){
                        toOnce4 = false;
                        me.game.world.addChild(destroyAnim3, 10);
                        let animOnce3 = true;
                        destroyAnim3.setCurrentAnimation('idle',()=>{
                            if(animOnce3){
                                animOnce3 = false;
                                me.game.world.removeChild(destroyAnim3);
                            }
                            return false;
                        });
                        me.audio.play("sfx-bangunan-meledak", false, null, game.user.userData.sound.SFX);
                    }
                }, 600);
                let toOnce5 = true;
                this.timeOt5 = me.timer.setTimeout(()=>{
                    if(toOnce5){
                        toOnce5 = false;
                        me.game.world.addChild(destroyAnim4, 10);
                        let animOnce4 = true;
                        destroyAnim4.setCurrentAnimation('idle',()=>{
                            if(animOnce4){  
                                animOnce4 = false;
                                me.game.world.removeChild(destroyAnim4);
                            }  
                            return false;
                        });
                        me.audio.play("sfx-bangunan-meledak", false, null, game.user.userData.sound.SFX);
                    }
                }, 900);
                let toOnce6 = true;
                this.timeOt6 = me.timer.setTimeout(()=>{
                    if(toOnce6){
                        toOnce6 = false;
                        me.game.world.addChild(destroyAnim5, 10);
                        let animOnce5 = true;
                        destroyAnim5.setCurrentAnimation('idle',()=>{
                            if(animOnce5){
                                animOnce5 = false;
                                me.game.world.removeChild(destroyAnim5);
                            }
                            return false;
                        });
                        me.audio.play("sfx-bangunan-meledak", false, null, game.user.userData.sound.SFX);
                    }
                }, 1200);
                
                this.spawnerEnemyBos.spawnBos3();
                this.spawnerEnemy.bos3  = false;
                this.spawnerEnemy2.bos3 = false;
                this.spawnerEnemy3.bos3 = false;
                this.spawnerEnemy4.bos3 = false;
            });
        }
        
        if(this.spawnerEnemy.warningTime && this.spawnerEnemy2.warningTime && this.spawnerEnemy3.warningTime && this.spawnerEnemy4.warningTime){
            this.spawnerEnemy.tweenTextOn(()=>{
                this.spawnerEnemy.tweenTextOff(()=>{
                    this.spawnerEnemy.warningTime = false;
                    this.spawnerEnemy.tween.stop();
                    this.spawnerEnemy.tween2.stop();
                    if(this.spawnFinalWave){
                        this.spawnFinalWave = false;
                        this.spawnerEnemy.finalWaveForFunction();
                        this.spawnerEnemy2.finalWaveForFunction();
                        this.spawnerEnemy3.finalWaveForFunction();
                        this.spawnerEnemy4.finalWaveForFunction();
                    }
                });
            });
        }
        
        if(this.spawnerEnemy.end && this.spawnerEnemy2.end && this.spawnerEnemy3.end && this.spawnerEnemy4.end){
            console.log("spawn win container");
            this.win = true;
            this.end = true;
            this.component.stage.battleFunc();
        }
        
        if(this.spawnerEnemyBos.bosEnd){
            this.win = true;
            this.end = true;
            console.log("spawn win container");
            this.component.stage.battleFunc();
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();