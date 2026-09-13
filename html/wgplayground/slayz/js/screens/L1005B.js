(function(){
// Put user code here //
 
//  End of user code  //

game.level.L1005B = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("L1005B");
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
        let image = me.loader.getImage("api");
        let x = me.game.viewport.height/2 - me.game.world.height/2+100,
            y = me.game.viewport.height-x;
            
        let partikel = new me.ParticleEmitter(50, y, {
            image: image,
            width: 500/2,
            height: 81/2,
            totalParticles: 120/2,
            angle: 0.8/2,
            angleVariation: 0.785398163397448/2,
            minLife: 600/2,
            maxLife: 7000/2,
            speedVariation: 5.13157894736842/2,
            minRotation: -1,
            minStartScale: 0.635964912280702/2,
            maxStartScale: 1.95175438596491/2,
            minEndScale: 0.942982456140351/2,
            maxEndScale: 2.08333333333333/2,
            frequency: 18
        });
        partikel.name = 'fire';
        partikel.floating = true;
        me.game.world.addChild(partikel, 18);
        partikel.streamParticles();
        
        let currentLevel = me.levelDirector.getCurrentLevelId();
        this.win = false;
        this.end = false;
        this.component = {};
        this.component.stage = me.pool.pull("game.component.stageBattle", {
            id: currentLevel,
            benuaID: "B000",
            stageNumber : 6,
            nextId: "L2001",
            condition:this
        });
        me.audio.play("bgm-ingame", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
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
                me.game.world.removeChildNow(partikel);
            }
        },1500);
        
        this.spawnerEnemyBos = me.pool.pull ("spawnerEnemyBos", 0, -375,{
            level:currentLevel,
            container:this
        });
        let toOnce2 = true;
        this.timeOt2 = me.timer.setTimeout(()=>{
            if(toOnce2){
                toOnce2 = false;
                me.game.world.addChild(this.spawnerEnemyBos, this.spawnerEnemyBos.pos.z);
                this.spawnerEnemyBos.spawnBos3();
            }
        },4000);
        
        let shakeBackground = me.pool.pull("me.Sprite", me.game.world.width, me.game.world.height, {
            image: game.textureMap.get("america"),
            region: "L1005"
        });
        me.game.world.addChild(shakeBackground, 3);
        game.util.scale(shakeBackground, 2);

        let frame = me.pool.pull ("frameMerah", 0, 0);
        me.game.world.addChild(frame, 50);
        
        let atapHancur = me.pool.pull ("L1005PintuJebol", 20, -155);
        me.game.world.addChild(atapHancur, 4);
        
        let emitter = new me.ParticleEmitter(50, y, {
            image: image,
            width: 500/2,
            height: 81/2,
            totalParticles: 120,
            angle: 0.8/2,
            angleVariation: 0.785398163397448,
            minLife: 600,
            maxLife: 7000,
            speedVariation: 5.13157894736842,
            minRotation: -1,
            minStartScale: 0.635964912280702/2,
            maxStartScale: 1.95175438596491/3,
            minEndScale: 0.942982456140351/2,
            maxEndScale: 2.08333333333333/3,
            frequency: 18
        });
        emitter.name = 'fire';
        emitter.floating = true;
        let toOnce3 = true;
        this.timeOt3 = me.timer.setTimeout(()=>{
            if(toOnce3){
                toOnce3 = false;
                me.game.world.addChild(emitter, 18);
                emitter.streamParticles();
            }
        }, 15000);
            
        let emitter2 = new me.ParticleEmitter(750, y, {
            image: image,
            width: 500/2,
            height: 81/2,
            totalParticles: 120,
            angle: 0.8/2,
            angleVariation: 0.785398163397448,
            minLife: 600,
            maxLife: 7000,
            speedVariation: 5.13157894736842,
            minRotation: -1,
            minStartScale: 0.635964912280702/2,
            maxStartScale: 1.95175438596491/3,
            minEndScale: 0.942982456140351/2,
            maxEndScale: 2.08333333333333/3,
            frequency: 18
        });
        emitter2.name = 'fire2';
        emitter2.floating = true;
        let toOnce4 = true;
        this.timeOt4 = me.timer.setTimeout(()=>{
            if(toOnce4){
                toOnce4 = false;
                me.game.world.addChild(emitter2, 18);
                emitter2.streamParticles();
            }
        }, 18000);
        
        let gelap = me.pool.pull ("L1005Gelap", 0, 50);
        me.game.world.addChild(gelap, 20);

        let dinding = me.pool.pull ("L1005Tembok", 0, -145);
        me.game.world.addChild(dinding, 4);

        let pohon = me.pool.pull ("L1005Pohon", -me.game.world.width/2+110, -me.game.world.height/2+52.5);
        me.game.world.addChild(pohon, 5);
        
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
        me.audio.stop("bgm-ingame");
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.timeOt3);
        me.timer.clearTimeout(this.timeOt4);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-ingame", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },

    decisionFunc: function(){
        if(this.spawnerEnemyBos.bosEnd){
            this.win = true;
            this.end = true;
            console.log("spawn win container");
            this.component.stage.battleFunc();
        }
    },
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();