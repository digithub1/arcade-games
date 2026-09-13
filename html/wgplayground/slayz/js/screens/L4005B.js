(function(){
// Put user code here //
 
//  End of user code  //

game.level.L4005B = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("L4005B");
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
            benuaID: "B003",
            nextId: "L4005B",
            stageNumber : 6,
            condition:this
        });
        me.audio.play("bgm-afrika", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
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
        
        let shakeBackground = me.pool.pull("me.Sprite", me.game.world.width, me.game.world.height, {
            image: game.textureMap.get("africa"),
            region: "L4005_anubis chamber background"
        });
        me.game.world.addChild(shakeBackground, 3);
        game.util.scale(shakeBackground, 2);
        
        let toOnce3 = true;
        this.timeOt2 = me.timer.setTimeout(()=>{
            if(toOnce3){
                toOnce3 = false;
                this.spawnerEnemyBos = me.pool.pull ("ZB10", 10, -500);
                me.game.world.addChild(this.spawnerEnemyBos, 10);
                this.spawnerEnemyBos.container = this;
                this.spawnerEnemyBos.fallPhase1();
            }
        },8000);
        
        let image = me.loader.getImage("api"),
            x = me.game.viewport.height/2 - me.game.world.height/2,//-495,
            y = x+348.75,
            emitter = new me.ParticleEmitter(97.5, y, {
                image: image,
                width: 25,
                totalParticles: 150,
                angle: 1.55,
                maxLife: 300,
                minRotation: -3,
                minStartScale: 0.7,
                maxStartScale: 0.7,
                minEndScale: 0.7,
                maxEndScale: 0.7,
                textureAdditive: true,
                frequency: 30
            }),
            emitter2 = new me.ParticleEmitter(1047.5, y, {
                image: image,
                width: 25,
                totalParticles: 150,
                angle: 1.55,
                maxLife: 300,
                minRotation: -3,
                minStartScale: 0.7,
                maxStartScale: 0.7,
                minEndScale: 0.7,
                maxEndScale: 0.7,
                textureAdditive: true,
                frequency: 30
            });
        emitter.name = 'fire';
        emitter.floating = true;
        emitter2.name = 'fire2';
        emitter2.floating = true;
        
        let toOnce2 = true;
        this.timeOt3 = me.timer.setTimeout(()=>{
            if(toOnce2){
                toOnce2 = false;
                me.game.world.addChild(emitter, 7);
                emitter.streamParticles();
                me.game.world.addChild(emitter2, 7);
                emitter2.streamParticles();
            }
        }, 10000);
        
        let pilarAtsKiriShake = me.pool.pull("me.Sprite", 99, me.game.viewport.height/2-selisihHeightLayar-me.game.world.height/2+63.75, {
                image: game.textureMap.get("africa"),
                region: "L4005_pilar atas kiri"
            }),
            pilarAtsKananShake = me.pool.pull("me.Sprite", me.game.world.width-91.5, me.game.viewport.height/2-selisihHeightLayar-me.game.world.height/2+61.5, {
                image: game.textureMap.get("africa"),
                region: "L4005_pilar atas kanan"
            }),
            pilarBwhKiriShake = me.pool.pull("me.Sprite", 57.5, me.game.viewport.height/2-selisihHeightLayar+37.5, {
                image: game.textureMap.get("africa"),
                region: "L4005_pilar kiri bawah"
            }),
            pilarBwhKananShake = me.pool.pull("me.Sprite", me.game.world.width-57.5, me.game.viewport.height/2-selisihHeightLayar+55, {
                image: game.textureMap.get("africa"),
                region: "L4005_pilar kanan bawah"
            }),
            oborKiriShake = me.pool.pull("me.Sprite", me.game.world.width/2-475, me.game.viewport.height/2-selisihHeightLayar+105, {
                image: game.textureMap.get("africa"),
                region: "L4005_obor"
            }),
            oborKananShake = me.pool.pull("me.Sprite", me.game.world.width/2+475, me.game.viewport.height/2-selisihHeightLayar+105, {
                image: game.textureMap.get("africa"),
                region: "L4005_obor"
            }),
            pilarAtsKiri = me.pool.pull ("L4005_pilarAtsKiri", -me.game.world.width/2+99, -me.game.world.height/2+63.75),
            pilarAtsKanan = me.pool.pull ("L4005_pilarAtsKanan", me.game.world.width/2-91.5, -me.game.world.height/2+61.5),
            pilarBwhKiri = me.pool.pull ("L4005_pilarBwhKiri", -me.game.world.width/2+57.5, 37.5),
            pilarBwhKanan = me.pool.pull ("L4005_pilarBwhKanan", me.game.world.width/2-57.5, 55),
            oborKiri = me.pool.pull ("L4005_bor", -475, 105),
            oborKanan = me.pool.pull ("L4005_bor", 475, 105),
            frameGelap = me.pool.pull ("L4005B_gelap", 0, 0),
            pasir = me.pool.pull ("africaPasir", -me.game.viewport.width, 0);
        me.game.world.addChild(pilarAtsKiriShake, 5);
        me.game.world.addChild(pilarAtsKananShake, 5);
        me.game.world.addChild(pilarBwhKiriShake, 5);
        me.game.world.addChild(pilarBwhKananShake, 5);
        me.game.world.addChild(oborKiriShake, 6);
        me.game.world.addChild(oborKananShake, 6);
        me.game.world.addChild(pilarAtsKiri, 4);
        me.game.world.addChild(pilarAtsKanan, 4);
        me.game.world.addChild(pilarBwhKiri, 4);
        me.game.world.addChild(pilarBwhKanan, 4);
        me.game.world.addChild(oborKiri, 5);
        me.game.world.addChild(oborKanan, 5);
        me.game.world.addChild(frameGelap, 14);
        me.game.world.addChild(pasir, 15);
        pasir.alpha = 0.7;
        pasir.tween();
        
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
        me.audio.stop("bgm-afrika");
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.timeOt3);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-afrika", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },

    decisionFunc: function(){
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