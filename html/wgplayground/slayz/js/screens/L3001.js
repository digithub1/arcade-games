(function(){
// Put user code here //
 
//  End of user code  //

game.level.L3001 = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("L3001");
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
            benuaID: "B002",
            nextId: "L3002",
            stageNumber : 1,
            condition:this
        });
        me.audio.play("bgm-eropa", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
        me.audio.stop("gameover");
        me.audio.stop("bgm-menu");
        
        let shakeBackground = me.pool.pull("me.Sprite", me.game.world.width, me.game.world.height, {
            image: game.textureMap.get("eropa"),
            region: "backgroundEropa1"
        });
        me.game.world.addChild(shakeBackground, 3);
        game.util.scale(shakeBackground, 2);
        
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
        
        this.spawnerEnemy = me.pool.pull ("spawnerEnemy", -325, -375,{//-650, -900
                level:currentLevel,
                container:this
            });
        this.spawnerEnemy2 = me.pool.pull ("spawnerEnemy", 350, -375,{//700, -900
                level:currentLevel,
                container:this
            });
        this.spawnerEnemy3 = me.pool.pull ("spawnerEnemy", 0, -375,{//0, -900
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
        
        this.spawnerEnemyBos = me.pool.pull ("spawnerEnemyBos", -350, -450,{
            level:currentLevel,
            container:this
        });
        me.game.world.addChild(this.spawnerEnemyBos, this.spawnerEnemyBos.pos.z);
        
        this.spawnerEnemyZ024 = me.pool.pull ("spawnerEnemyZ024", 0, -450);
        me.game.world.addChild(this.spawnerEnemyZ024, this.spawnerEnemyZ024.pos.z);
        
        let blackPanelKiri = me.pool.pull("blackPanel", -me.game.world.width+25, 0);
        me.game.world.addChild(blackPanelKiri, 100);
        let blackPanelKanan = me.pool.pull("blackPanel", me.game.world.width-25, 0);
        me.game.world.addChild(blackPanelKanan, 100);
        let blackPanelAtas = me.pool.pull("blackPanel", 0, -me.game.world.height+2.5);
        me.game.world.addChild(blackPanelAtas, 100);
        let blackPanelBawah = me.pool.pull("blackPanel", 0, me.game.world.height-7.5);
        me.game.world.addChild(blackPanelBawah, 100);
        
        let pembatasJalan = me.pool.pull('pembatas', 412.5, 0);
        me.game.world.addChild(pembatasJalan, 13);
        
        let carPolice = me.pool.pull('carPoliceEropa', 412.5, -50);
        me.game.world.addChild(carPolice, 11);
      
        let batu = me.pool.pull('batuEropa', - 262.5, -231.25);
        me.game.world.addChild(batu, 9);
    
        let batu2 = me.pool.pull('batuEropa2', - 52.5, -246.25);
        me.game.world.addChild(batu2, 9);
        
        let boothTelp = me.pool.pull('boothTelp', 100, -240);
        me.game.world.addChild(boothTelp, 9);
       
        let carBlue = me.pool.pull('carBlue',-507.5, 20);
        me.game.world.addChild(carBlue, 9);
        carBlue.flipX(true);
        
        let awanAtas = me.pool.pull ("awanEropa1", -me.game.world.width, 75),
            awanBawah = me.pool.pull ("awanEropa2", -me.game.world.width+(-me.game.world.width/2), -150);
        me.game.world.addChild(awanAtas, 50);
        me.game.world.addChild(awanBawah, 50);
        awanAtas.tween();
        awanBawah.tween();
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-eropa");
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-eropa", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },

    decisionFunc: function(){
        let arrayX = [-325, 0];
        if(this.spawnerEnemy.spawnZ024 && this.spawnerEnemy2.spawnZ024 && this.spawnerEnemy3.spawnZ024){
            let rndmZ024 = Math.floor(Math.random() * arrayX.length);
            this.spawnerEnemyZ024.pos.x = arrayX[rndmZ024];//Z024posX[rndmZ024];
            this.spawnerEnemyZ024.pos.y = -450;
            this.spawnerEnemyZ024.spawnZ024();
            
            this.spawnerEnemy.spawnZ024  = false;
            this.spawnerEnemy2.spawnZ024 = false;
            this.spawnerEnemy3.spawnZ024 = false;
        }
        
        if(this.spawnerEnemy.spawnWave2 && this.spawnerEnemy2.spawnWave2 && this.spawnerEnemy3.spawnWave2){
            this.spawnerEnemy.wave2ForFunction();
            this.spawnerEnemy2.wave2ForFunction();
            this.spawnerEnemy3.wave2ForFunction();
            this.spawnerEnemy.spawnWave2 = false;
            this.spawnerEnemy2.spawnWave2 = false;
            this.spawnerEnemy3.spawnWave2 = false;
        }
        
        if(this.spawnerEnemy.bos2 && this.spawnerEnemy2.bos2 && this.spawnerEnemy3.bos2){
            this.spawnerEnemyBos.spawnBos2();
            this.spawnerEnemy.bos2  = false;
            this.spawnerEnemy2.bos2 = false;
            this.spawnerEnemy3.bos2 = false;
            this.spawnerEnemy.haveSpawn  = true;
            this.spawnerEnemy2.haveSpawn = true;
            this.spawnerEnemy3.haveSpawn = true;
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
            this.spawnerEnemyBos.spawnBos3();
            this.spawnerEnemy.bos3  = false;
            this.spawnerEnemy2.bos3 = false;
            this.spawnerEnemy3.bos3 = false;
        }
        
        if(this.spawnerEnemy.end && this.spawnerEnemy2.end && this.spawnerEnemy3.end && this.spawnerEnemyZ024.end){
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