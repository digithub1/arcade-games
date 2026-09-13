(function(){
// Put user code here //
 
//  End of user code  //

game.level.L5002 = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("L5002");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1500);
        let selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
        
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
        
        me.audio.play("bgm-asia", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
        me.audio.stop("gameover");
        me.audio.stop("bgm-menu");
        
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
        
        let racun = me.pool.pull("me.Sprite", me.game.viewport.width/2, me.game.viewport.height/2, {
            image:  game.textureMap.get("effect"),
            region:"poison fx"
        });
        me.game.world.addChild(racun, 10);
        
        let shakeBackground = me.pool.pull("me.Sprite", me.game.world.width, me.game.world.height, {
            image: game.textureMap.get("asia"),
            region: "L5002_china BG"
        });
        me.game.world.addChild(shakeBackground, 3);
        game.util.scale(shakeBackground, 2);
        
        let currentLevel = me.levelDirector.getCurrentLevelId();
        this.win = false;
        this.end = false;
        this.spawnFinalWave = true;
        this.component = {};
        this.component.stage = me.pool.pull("game.component.stageBattle", {
            id: currentLevel,
            benuaID: "B004",
            nextId: "L5003",
            stageNumber : 2,
            condition:this
        });
        console.log(me.levelDirector.getCurrentLevelId());
        
        this.spawnerEnemy = me.pool.pull ("spawnerEnemy", 0, -375,{//0,-600
                level:currentLevel,
                container:this
            });
        this.spawnerEnemy2 = me.pool.pull ("spawnerEnemy", -260, -375,{//-1500, -265
                level:currentLevel,
                container:this
            });
        this.spawnerEnemy3 = me.pool.pull ("spawnerEnemy", 260, -375,{//1500, -480
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
                this.spawnerEnemy.wave1ForFunction();
                this.spawnerEnemy2.wave1ForFunction();
                this.spawnerEnemy3.wave1ForFunction();
            }
        }, 4000);

        let blackPanelKiri = me.pool.pull("blackPanel", -me.game.world.width+25, 0);
        me.game.world.addChild(blackPanelKiri, 100);
        let blackPanelKanan = me.pool.pull("blackPanel", me.game.world.width-25, 0);
        me.game.world.addChild(blackPanelKanan, 100);
        let blackPanelAtas = me.pool.pull("blackPanel", 0, -me.game.world.height+2.5);
        me.game.world.addChild(blackPanelAtas, 100);
        let blackPanelBawah = me.pool.pull("blackPanel", 0, me.game.world.height-7.5);
        me.game.world.addChild(blackPanelBawah, 100);
        
        let pohonKiri = me.pool.pull("L5002_PohonAtas", -376, -143);
        me.game.world.addChild(pohonKiri, 11);
        
        let pohonKanan = me.pool.pull("L5002_PohonAtas", 376, -143);
        me.game.world.addChild(pohonKanan, 11);
        pohonKanan.flipX(true);
        
        let pilarBanyak = me.pool.pull("L5002_PilarBanyak", 0, -156);
        me.game.world.addChild(pilarBanyak, 11);
        //pilarBanyak.alpha = 0;
        let pilar = me.pool.pull("L5002_Pilar", -153, -61);
        me.game.world.addChild(pilar, 10);
        pilar.alpha = 0;
        
        let pilar2 = me.pool.pull("L5002_Pilar2", 153, -57);
        me.game.world.addChild(pilar2, 10);
        pilar2.alpha = 0;
        
        /*let pilar3Kanan = me.pool.pull("L5002_Pilar3Kanan", 352, -58);
        me.game.world.addChild(pilar3Kanan, 10);
        pilar3Kanan.alpha = 0;
         
        let pilar3_kiri = me.pool.pull("L5002_Pilar3", -352, -58);
        me.game.world.addChild(pilar3_kiri, 4);
        pilar3_kiri.alpha = 0;*/
        
        let tanggaKiri = me.pool.pull("L5002_TanggaKiri", -360, 1);
        me.game.world.addChild(tanggaKiri, 13);
        
        let tanggaKanan = me.pool.pull("L5002_TanggaKanan", 360, 1);
        me.game.world.addChild(tanggaKanan, 13);
        
        let tembokKiri = me.pool.pull("L5002_TembokCol", -950, -340);
        me.game.world.addChild(tembokKiri, 12);
        
        let tembokKanan = me.pool.pull("L5002_TembokCol", 950, -340);
        me.game.world.addChild(tembokKanan, 12);
        tembokKanan.body.getShape().translate(-this.width/2, -25);
        
        
        var image = me.loader.getImage('salju');
        var emitter = new me.ParticleEmitter(0, -400, {
            image: image,
            width: 2340,
            height:1080,
            totalParticles: 52,
            angle: 4.71238898038469,
            maxLife: 2000,
            speed: 4.84403669724771,
            speedVariation: 0,
            minRotation: -2.35763558773986,
            maxRotation: 3.14159265358979,
            minStartScale: 0.3,
            maxStartScale: 0.6,
            wind: 0.05,
            maxParticles: 100,
            floating: true
        });
        emitter.name = 'rain';
        emitter.pos.z = 0;
        me.game.world.addChild(emitter, 0);
        emitter.streamParticles();
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-asia");
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-asia", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },

    decisionFunc: function(){
        if(this.spawnerEnemy.bos2 && this.spawnerEnemy2.bos2 && this.spawnerEnemy3.bos2){
            this.spawnerEnemy.bos2  = false;
            this.spawnerEnemy2.bos2 = false;
            this.spawnerEnemy3.bos2 = false;
            this.spawnerEnemy.haveSpawn  = true;
            this.spawnerEnemy2.haveSpawn = true;
            this.spawnerEnemy3.haveSpawn = true;
        }
        
        if(this.spawnerEnemy.spawnWave2 && this.spawnerEnemy2.spawnWave2 && this.spawnerEnemy3.spawnWave2){
            this.spawnerEnemy.wave2ForFunction();
            this.spawnerEnemy2.wave2ForFunction();
            this.spawnerEnemy3.wave2ForFunction();
            this.spawnerEnemy.spawnWave2 = false;
            this.spawnerEnemy2.spawnWave2 = false;
            this.spawnerEnemy3.spawnWave2 = false;
        }
        
        if(this.spawnerEnemy.warningTime && this.spawnerEnemy2.warningTime && this.spawnerEnemy3.warningTime){
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
                    }
                });
            });
        }
        
        if(this.spawnerEnemy.bos3 && this.spawnerEnemy2.bos3 && this.spawnerEnemy3.bos3){
            this.spawnerEnemy.bos3  = false;
            this.spawnerEnemy2.bos3 = false;
            this.spawnerEnemy3.bos3 = false;
        }
        
        if(this.spawnerEnemy.end && this.spawnerEnemy2.end && this.spawnerEnemy3.end){
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