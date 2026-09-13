(function(){
// Put user code here //
 
//  End of user code  //

game.level.L6003B = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("L6003B");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1500);
        this.tween = new me.Tween();
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
            stageNumber : 4,
            condition:this
        });
        me.audio.play("sfx-abdomination-jalan", true, null, game.user.userData.sound.SFX);
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
        let toOnce2 = true;
        this.timeOt2 = me.timer.setTimeout(()=>{
            if(toOnce2){
                toOnce2 = false;
                this.blackLayer = me.pool.pull("blackPanel", 0, 0);
                me.game.world.addChild(this.blackLayer, 98);
                this.blackLayer.alpha = 0;
                this.spawnerEnemyBos = me.pool.pull ("ZB09", 0, -500);
                this.spawnerEnemyBos.container = this;
                this.spawnerEnemyBosIntro = me.pool.pull ("ZB09CinematicIntro", -350, -600);
                this.spawnerEnemyBosIntro2 = me.pool.pull ("ZB09CinematicIntro", 350, -600);
                this.spawnerEnemyBosIntro3 = me.pool.pull ("ZB09CinematicIntro", 1500, 0);
                this.spawnerEnemyBosIntro.setCurrentAnimation('1',()=>{return false});
                this.spawnerEnemyBosIntro2.setCurrentAnimation('2',()=>{return false});
                this.spawnerEnemyBosIntro3.setCurrentAnimation('3',()=>{return false});
                me.game.world.addChild(this.spawnerEnemyBosIntro, 99);
                me.game.viewport.shake(5, 3000, me.game.viewport.AXIS.BOTH,()=>{
                    this.tweenFadeOn();
                });
            }
        },7000);
        //--
        
        let shakeBackground = me.pool.pull("me.Sprite", me.game.world.width, me.game.world.height, {
            image: game.textureMap.get("australia"),
            region: "L6003_background"
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
            shadow = me.pool.pull ("L6003Shadow", 0, -220),
            frameGelap = me.pool.pull ("L6003B_gelap", 0, 0),
            cone = me.pool.pull ("L6003Cone", -512, -110),
            barrier = me.pool.pull ("L6003Barrier", -315, -130),
            policeCar = me.pool.pull ("L6003PoliceCar", 310, -185);
            me.game.world.addChild(coneShake, 5);
            me.game.world.addChild(barrierShake, 5);
            me.game.world.addChild(policeCarShake, 5);
            me.game.world.addChild(shadow, 14);
            me.game.world.addChild(frameGelap, 14);
            me.game.world.addChild(cone, 4);
            me.game.world.addChild(barrier, 4);
            me.game.world.addChild(policeCar, 4);
            
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
        me.timer.clearTimeout(this.delay);
        me.audio.stop("sfx-hujan2");
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        this.tween.stop();
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-australi", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },

    decisionFunc: function(){
        if(this.spawnerEnemyBos.bosEnd){
            this.win = true;
            this.end = true;
            console.log("spawn win container");
            this.component.stage.battleFunc();
        }
    },
    
    tweenFadeOn:function(){
        this.tween = new me.Tween(this.blackLayer)
        .to({alpha:0.7}, 2000)
        .onComplete(()=>{
            let to = true;
            this.delay = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    let image = me.loader.getImage("air"),
                    emitter = new me.ParticleEmitter(0,0, {
                        image: image,
                        width: 2340,
                        height:1080,
                        totalParticles: 200,//400,
                        angle: 3.14159265358979,
                        maxLife: 4000,//8000,
                        speed: 2.76315789473684,
                        speedVariation: 0,
                        maxStartScale: 0.5,
                        gravity: 3,
                        wind: -1.1,
                        floating: true,
                        frequency: 10
                    });
                    emitter.name = 'rain';
                    me.game.world.addChild(emitter, 94);
                    emitter.streamParticles();
                    me.audio.play("bgm-australi", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
                    me.audio.play("sfx-hujan2", true, null, game.user.userData.sound.SFX);
                    me.audio.stop("sfx-abdomination-jalan");
                    this.spawnerEnemyBosIntro.tween1(()=>{
                        me.game.world.addChild(this.spawnerEnemyBosIntro2, 99);
                        this.spawnerEnemyBosIntro2.tween2(()=>{
                            me.game.world.removeChild(this.spawnerEnemyBosIntro);
                            me.game.world.removeChild(this.spawnerEnemyBosIntro2);
                            me.game.world.addChild(this.spawnerEnemyBosIntro3, 99);
                            this.spawnerEnemyBosIntro3.tween3(()=>{
                                me.game.world.removeChild(this.spawnerEnemyBosIntro3);
                                this.tweenFadeOff();
                            });
                        });
                    });
                }
            }, 1000);
        });
        this.tween.start();
    },
    tweenFadeOff:function(){
        this.tween = new me.Tween(this.blackLayer)
        .to({alpha:0}, 1000)
        .onComplete(()=>{
            let to = true;
            this.delay = me.timer.setTimeout(()=>{
                if(to){
                    to = false;
                    me.game.world.addChild(this.spawnerEnemyBos, this.spawnerEnemyBos.pos.z);
                    this.spawnerEnemyBos.forwardWalk();
                }
            }, 1000);
        });
        this.tween.start();
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();