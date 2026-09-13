(function(){
// Put user code here //
 
//  End of user code  //

game.level.L6003 = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("L6003");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1500);
        let selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2,
            area1 = me.pool.pull ("skill2Area", 0, me.game.world.height/2),
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
            effect15 = me.pool.pull ("explosion", 0, 0),
            racun = me.pool.pull("me.Sprite", me.game.viewport.width/2, me.game.viewport.height/2, {
                image:  game.textureMap.get("effect"),
                region:"poison fx"
            });
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
        me.game.world.addChild(racun, 10);

        let currentLevel = me.levelDirector.getCurrentLevelId();
        this.win = false;
        this.end = false;
        this.spawnFinalWave = true;
        this.component = {};
        this.component.stage = me.pool.pull("game.component.stageBattle", {
            id: currentLevel,
            benuaID: "B005",
            nextId: "L6003B",
            stageNumber : 3,
            condition:this
        });
        me.audio.play("bgm-australi", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
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
        
        //spawner zombie
        this.spawnerEnemy = me.pool.pull ("spawnerEnemy", 120, -375,{level:currentLevel, container:this});
        this.spawnerEnemy2 = me.pool.pull ("spawnerEnemy", 0, -375,{level:currentLevel, container:this});
        this.spawnerEnemy3 = me.pool.pull ("spawnerEnemy", -120, -375,{level:currentLevel, container:this});
        this.spawnerEnemy4 = me.pool.pull ("spawnerEnemy", 650, 135,{level:currentLevel, container:this});
        this.spawnerEnemy5 = me.pool.pull ("spawnerEnemy", -650, 10,{level:currentLevel, container:this});
        this.spawnerEnemyBos = me.pool.pull ("spawnerEnemyBos", 0, -375,{level:currentLevel, container:this});
        let toOnce2 = true;
        this.timeOt2 = me.timer.setTimeout(()=>{
            if(toOnce2){
                toOnce2 = false;
                me.game.world.addChild(this.spawnerEnemy, this.spawnerEnemy.pos.z);
                me.game.world.addChild(this.spawnerEnemy2, this.spawnerEnemy2.pos.z);
                me.game.world.addChild(this.spawnerEnemy3, this.spawnerEnemy3.pos.z);
                me.game.world.addChild(this.spawnerEnemy4, this.spawnerEnemy4.pos.z+1);
                me.game.world.addChild(this.spawnerEnemy5, this.spawnerEnemy4.pos.z+1);
                me.game.world.addChild(this.spawnerEnemyBos, this.spawnerEnemyBos.pos.z);
                this.spawnerEnemy.wave1ForFunction();
                this.spawnerEnemy2.wave1ForFunction();
                this.spawnerEnemy3.wave1ForFunction();
                this.spawnerEnemy4.wave1ForFunction();
                this.spawnerEnemy5.wave1ForFunction();
            }
        },4000);
        let toKangaroo = true;
        this.waitKangaroo = me.timer.setTimeout(()=>{
            if(toKangaroo){
                toKangaroo = false;
                this.kangarooSpawn = me.pool.pull ("Z035", 120, -375);
                this.kangarooSpawn2 = me.pool.pull ("Z035", -650, 10);
                this.kangarooSpawn3 = me.pool.pull ("Z035", -120, -375);
                me.game.world.addChild(this.kangarooSpawn, 11);
                me.game.world.addChild(this.kangarooSpawn2, 11);
                me.game.world.addChild(this.kangarooSpawn3, 11);
            }
        },8000);
        //--
        
        let shakeBackground = me.pool.pull("me.Sprite", me.game.world.width, me.game.world.height, {
            image: game.textureMap.get("australia"),
            region: "L6003_dead crossroad bg"
        });
        me.game.world.addChild(shakeBackground, 3);
        game.util.scale(shakeBackground, 2);
        
        let coneShake = me.pool.pull("me.Sprite", me.game.viewport.width/2-512, me.game.viewport.height/2-selisihHeightLayar-110, {
                image: game.textureMap.get("australia"),
                region: "L6003_cone"
            }),
            barrierShake = me.pool.pull("me.Sprite", me.game.viewport.width/2-315, me.game.viewport.height/2-selisihHeightLayar-130, {
                image: game.textureMap.get("australia"),
                region: "L6003_barrier"
            }),
            policeCarShake = me.pool.pull("me.Sprite", me.game.viewport.width/2+310, me.game.viewport.height/2-selisihHeightLayar-185, {
                image: game.textureMap.get("australia"),
                region: "L6003_polisi car"
            }),
            bisShake = me.pool.pull("me.Sprite", me.game.viewport.width/2+465, me.game.viewport.height/2-selisihHeightLayar-40, {
                image: game.textureMap.get("australia"),
                region: "L6002_bis"
            }),
            shadow = me.pool.pull ("L6003Shadow", 0, -190),
            cone = me.pool.pull ("L6003Cone", -512, -110),
            barrier = me.pool.pull ("L6003Barrier", -315, -130),
            policeCar = me.pool.pull ("L6003PoliceCar", 310, -185),
            awanAtas = me.pool.pull ("australiaAwan1", -me.game.world.width, 75),
            awanBawah = me.pool.pull ("australiaAwan2", -me.game.world.width+(-me.game.world.width/2), -150),
            bis = me.pool.pull ("L6002Bis", 465, -40);
            me.game.world.addChild(coneShake, 5);
            me.game.world.addChild(barrierShake, 5);
            me.game.world.addChild(policeCarShake, 5);
            me.game.world.addChild(bisShake, 5);
            me.game.world.addChild(shadow, 14);
            me.game.world.addChild(cone, 4);
            me.game.world.addChild(barrier, 4);
            me.game.world.addChild(policeCar, 4);
            me.game.world.addChild(bis, 4);
            me.game.world.addChild(awanAtas, 50);
            me.game.world.addChild(awanBawah, 50);
            bis.tween();
            awanAtas.tween();
            awanBawah.tween();
        
        let blackPanelKiri = me.pool.pull("blackPanel", -me.game.world.width+20, 0);
        me.game.world.addChild(blackPanelKiri, 100);
        let blackPanelKanan = me.pool.pull("blackPanel", me.game.world.width-20, 0);
        me.game.world.addChild(blackPanelKanan, 100);
        let blackPanelAtas = me.pool.pull("blackPanel", 0, -me.game.world.height+2.5);
        me.game.world.addChild(blackPanelAtas, 100);
        let blackPanelBawah = me.pool.pull("blackPanel", 0, me.game.world.height-7.5);
        me.game.world.addChild(blackPanelBawah, 100);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-australi");
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.waitKangaroo);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-australi", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },

    decisionFunc: function(){
        if(this.spawnerEnemy.bos2 && this.spawnerEnemy2.bos2 && this.spawnerEnemy3.bos2 && this.spawnerEnemy4.bos2 && this.spawnerEnemy5.bos2){
            this.spawnerEnemyBos.spawnBos2();
            this.spawnerEnemy.bos2  = false;
            this.spawnerEnemy2.bos2 = false;
            this.spawnerEnemy3.bos2 = false;
            this.spawnerEnemy4.bos2 = false;
            this.spawnerEnemy5.bos2 = false;
            this.spawnerEnemy.haveSpawn  = true;
            this.spawnerEnemy2.haveSpawn = true;
            this.spawnerEnemy3.haveSpawn = true;
            this.spawnerEnemy4.haveSpawn = true;
            this.spawnerEnemy5.haveSpawn = true;
        }
        
        if(this.spawnerEnemy.spawnWave2 && this.spawnerEnemy2.spawnWave2 && this.spawnerEnemy3.spawnWave2 && this.spawnerEnemy4.spawnWave2 && this.spawnerEnemy5.spawnWave2){
            this.spawnerEnemy.wave2ForFunction();
            this.spawnerEnemy2.wave2ForFunction();
            this.spawnerEnemy3.wave2ForFunction();
            this.spawnerEnemy4.wave2ForFunction();
            this.spawnerEnemy5.wave2ForFunction();
            this.spawnerEnemy.spawnWave2 = false;
            this.spawnerEnemy2.spawnWave2 = false;
            this.spawnerEnemy3.spawnWave2 = false;
            this.spawnerEnemy4.spawnWave2 = false;
            this.spawnerEnemy5.spawnWave2 = false;
            let toKangaroo = true;
            this.waitKangaroo = me.timer.setTimeout(()=>{
                if(toKangaroo){
                    toKangaroo = false;
                    this.kangarooSpawn = me.pool.pull ("Z035", 120, -375);
                    this.kangarooSpawn2 = me.pool.pull ("Z035", -650, 10);
                    this.kangarooSpawn3 = me.pool.pull ("Z035", -120, -375);
                    me.game.world.addChild(this.kangarooSpawn, 11);
                    me.game.world.addChild(this.kangarooSpawn2, 11);
                    me.game.world.addChild(this.kangarooSpawn3, 11);
                }
            },3000);
        }
        
        if(this.spawnerEnemy.warningTime && this.spawnerEnemy2.warningTime && this.spawnerEnemy3.warningTime && this.spawnerEnemy4.warningTime && this.spawnerEnemy5.warningTime){
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
                        this.spawnerEnemy5.finalWaveForFunction();
                        let toKangaroo = true;
                        this.waitKangaroo = me.timer.setTimeout(()=>{
                            if(toKangaroo){
                                toKangaroo = false;
                                this.kangarooSpawn = me.pool.pull ("Z035", 120, -375);
                                this.kangarooSpawn2 = me.pool.pull ("Z035", -650, 10);
                                this.kangarooSpawn3 = me.pool.pull ("Z035", -120, -375);
                                me.game.world.addChild(this.kangarooSpawn, 11);
                                me.game.world.addChild(this.kangarooSpawn2, 11);
                                me.game.world.addChild(this.kangarooSpawn3, 11);
                            }
                        },2500);
                    }
                });
            });
        }
        
        if(this.spawnerEnemy.bos3 && this.spawnerEnemy2.bos3 && this.spawnerEnemy3.bos3 && this.spawnerEnemy4.bos3 && this.spawnerEnemy5.bos3){
            this.spawnerEnemyBos.spawnBos3();
            this.spawnerEnemy.bos3  = false;
            this.spawnerEnemy2.bos3 = false;
            this.spawnerEnemy3.bos3 = false;
            this.spawnerEnemy4.bos3 = false;
            this.spawnerEnemy5.bos3 = false;
        }
        
        if(this.spawnerEnemy.end && this.spawnerEnemy2.end && this.spawnerEnemy3.end && this.spawnerEnemy4.end && this.spawnerEnemy5.end){
            console.log("spawn win container");
            this.win = true;
            this.end = true;
            this.component.stage.battleFunc();
        }
        
        if(this.spawnerEnemyBos.bosEnd){
            console.log("spawn win container");
            this.win = true;
            this.end = true;
            this.component.stage.battleFunc();
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();