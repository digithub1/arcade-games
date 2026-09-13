(function(){
// Put user code here //
 
//  End of user code  //

game.level.L2003 = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("L2003");
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
        
        let currentLevel = me.levelDirector.getCurrentLevelId();
        this.win = false;
        this.end = false;
        this.spawnFinalWave = true;
        this.component = {};
        this.component.stage = me.pool.pull("game.component.stageBattle", {
            id: currentLevel,
            benuaID: "B001",
            nextId: "L2004",
            stageNumber : 3,
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
        
        this.spawnerEnemy = me.pool.pull ("spawnerEnemy", 25, -375,{//0, -900
                level:currentLevel,
                container:this
            });
        this.spawnerEnemy2 = me.pool.pull ("spawnerEnemy", 425, -375,{//350, -900
                level:currentLevel,
                container:this
            });
        this.spawnerEnemy3 = me.pool.pull ("spawnerEnemy", -375, -375,{//-300, -900
                level:currentLevel,
                container:this
            });
        this.spawnerEnemy4 = me.pool.pull ("spawnerEnemy", -650, 35,{//-1600, 0
                level:currentLevel,
                container:this
            });
        this.spawnerEnemy5 = me.pool.pull ("spawnerEnemy", 650, 45,{//1600, 0
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
                me.game.world.addChild(this.spawnerEnemy5, this.spawnerEnemy5.pos.z);
                this.spawnerEnemy.wave1ForFunction();
                this.spawnerEnemy2.wave1ForFunction();
                this.spawnerEnemy3.wave1ForFunction();
                this.spawnerEnemy4.wave1ForFunction();
                this.spawnerEnemy5.wave1ForFunction();
            }
        }, 4000);
        
        this.spawnerEnemyBos = me.pool.pull ("spawnerEnemyBos", 0, -375,{
            level:currentLevel,
            container:this
        });
        me.game.world.addChild(this.spawnerEnemyBos, this.spawnerEnemyBos.pos.z);
        
        this.spawnerEnemyZ007 = me.pool.pull ("spawnerEnemyZ007", 0, 0);
        me.game.world.addChild(this.spawnerEnemyZ007, this.spawnerEnemyZ007.pos.z);
        
        let shakeBackground = me.pool.pull("me.Sprite", me.game.world.width, me.game.world.height, {
            image: game.textureMap.get("southAmerica"),
            region: "L2003"
        });
        me.game.world.addChild(shakeBackground, 3);
        game.util.scale(shakeBackground, 2);
        
        let cahayaRumah = me.pool.pull("L2003Cahaya", -425, 57.5);
        me.game.world.addChild(cahayaRumah, 15);
        // cahayaRumah.tweenCahayaRumah();
        
        let lampuJalan = me.pool.pull("L2003Cahaya", -300, -155);
        me.game.world.addChild(lampuJalan, 15);
        lampuJalan.setCurrentAnimation('lampu jalan');
        lampuJalan.tweenLampuJalan();
        
        let tulisanOn = me.pool.pull("L2003Cahaya", 0, -125);
        me.game.world.addChild(tulisanOn, 15);
        tulisanOn.setCurrentAnimation('tulisan nyala');
        tulisanOn.alpha = 0;
        this.interval1 = me.timer.setInterval(()=>{
            tulisanOn.tweenTulisanOn();
            me.audio.play("sfx-listrik-konslet", false, null, game.user.userData.sound.SFX);
        },5000);
        
        let tulisanOff = me.pool.pull("L2003Cahaya", 0, -125);
        me.game.world.addChild(tulisanOff, 14);
        tulisanOff.setCurrentAnimation('tulisan mati');
        
        let tikus = me.pool.pull("L2003Cahaya", 325, -300);
        me.game.world.addChild(tikus, 45);
        tikus.setCurrentAnimation('tikus');
        tikus.tweenTikusMaju();
        this.interval2 = me.timer.setInterval(()=>{
            tikus.tweenTikusMaju();
        },10000);
        
        let taliAtas = me.pool.pull("L2003Cahaya", -460, -110);
        me.game.world.addChild(taliAtas, 45);
        taliAtas.setCurrentAnimation('tali atas');
        
        let taliAtas2 = me.pool.pull("L2003Cahaya", 460, -110);
        me.game.world.addChild(taliAtas2, 45);
        taliAtas2.setCurrentAnimation('tali atas');
        taliAtas2.flipX(true);
        
        let gedung = me.pool.pull("L2003Gedung", 27.5, -145);
        me.game.world.addChild(gedung, 13);
        
        let tembokKiri = me.pool.pull("L2003TembokKiri", -500, -5);
        me.game.world.addChild(tembokKiri, 8);
        
        let tembokKanan = me.pool.pull("L2003TembokKanan", 510, 0);
        me.game.world.addChild(tembokKanan, 9);
        
        let tempatSampah = me.pool.pull("L2003TempatSampah", -500, -105);
        me.game.world.addChild(tempatSampah, 9);
        
        let mobil1 = me.pool.pull("L2003mobil1", -225, -130);
        me.game.world.addChild(mobil1, 14);
        let mobil1B = me.pool.pull("L2003mobil1B", -225, -130);
        me.game.world.addChild(mobil1B, 9);
        
        let mobil2 = me.pool.pull("L2003mobil2", 305, -82.5);
        me.game.world.addChild(mobil2, 14);
        let mobil2B = me.pool.pull("L2003mobil2B", 305, -82.5);
        me.game.world.addChild(mobil2B, 9);
        
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
        me.timer.clearInterval(this.interval2);
        me.audio.stop("sfx-listrik-konslet");
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-amerikaselatan", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },

    decisionFunc: function(){
        let arrayX  = [-50, 325],
            arrayY  = [-100, 0];
        if(this.spawnerEnemy.spawnZ007 && this.spawnerEnemy2.spawnZ007 && this.spawnerEnemy3.spawnZ007 && this.spawnerEnemy4.spawnZ007 && this.spawnerEnemy5.spawnZ007){
            let rndmZ007 = Math.floor(Math.random()*arrayX.length);
            this.spawnerEnemyZ007.pos.x = arrayX[rndmZ007];
            this.spawnerEnemyZ007.pos.y = arrayY[rndmZ007];
            
            this.spawnerEnemyZ007.spawnZ007();
            this.spawnerEnemy.spawnZ007  = false;
            this.spawnerEnemy2.spawnZ007 = false;
            this.spawnerEnemy3.spawnZ007 = false;
            this.spawnerEnemy4.spawnZ007 = false;
            this.spawnerEnemy5.spawnZ007 = false;
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
        }
        
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
            me.timer.clearInterval(this.interval2);
            this.component.stage.battleFunc();
        }
        
        if(this.spawnerEnemyBos.bosEnd){
            this.win = true;
            this.end = true;
            console.log("spawn win container");
            me.timer.clearInterval(this.interval2);
            this.component.stage.battleFunc();
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();