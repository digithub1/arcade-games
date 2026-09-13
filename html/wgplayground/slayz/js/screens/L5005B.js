(function(){
// Put user code here //
 
//  End of user code  //

game.level.L5005B = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("L5005B");
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
            region: "L5005_japan boss temple bg"
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
            stageNumber : 6,
            condition:this
        });
        console.log(me.levelDirector.getCurrentLevelId());
        
        this.spawnerBat = me.pool.pull ("spawnerBat", -650, 47,{//-1500, -265
                level:currentLevel,
                container:this
            });
        let toOnce2 = true;
        this.timeOt2 = me.timer.setTimeout(()=>{
            if(toOnce2){
                toOnce2 = false;
                me.game.world.addChild(this.spawnerBat, this.spawnerBat.pos.z);
                this.spawnerBat.wave1();
            }
        }, 4000);
        
        this.spawnerEnemyBos = me.pool.pull ("spawnerEnemyBos", 0, -375,{
            level:currentLevel,
            container:this
        });
        let toOnce3 = true;
        this.timeOt3 = me.timer.setTimeout(()=>{
            if(toOnce3){
                toOnce3 = false;
                me.game.world.addChild(this.spawnerEnemyBos, this.spawnerEnemyBos.pos.z);
                this.spawnerEnemyBos.spawnBosDeathProphet();
            }
        },4000);
        
        let blackPanelKiri = me.pool.pull("blackPanel", -me.game.world.width+25, 0);
        me.game.world.addChild(blackPanelKiri, 100);
        let blackPanelKanan = me.pool.pull("blackPanel", me.game.world.width-25, 0);
        me.game.world.addChild(blackPanelKanan, 100);
        let blackPanelAtas = me.pool.pull("blackPanel", 0, -me.game.world.height+2.5);
        me.game.world.addChild(blackPanelAtas, 100);
        let blackPanelBawah = me.pool.pull("blackPanel", 0, me.game.world.height-7.5);
        me.game.world.addChild(blackPanelBawah, 100);
        
        let lampuKanan = me.pool.pull("L5005_LampuKanan", 430, -89);
        me.game.world.addChild(lampuKanan, 9);
        
        let lampuKiri = me.pool.pull("L5005_LampuKiri", -434, -91);
        me.game.world.addChild(lampuKiri, 9);
        
        let pohonKiri = me.pool.pull("L5005_Pohon", -475, -203);
        me.game.world.addChild(pohonKiri, 12);
        
        let pohonKanan = me.pool.pull("L5005_Pohon", 455, -203);
        me.game.world.addChild(pohonKanan, 12); pohonKanan.flipX(true);
        
        let frameGelap = me.pool.pull ("L5005B_gelap", 0, 0);
        me.game.world.addChild(frameGelap, 14);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-asia");
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        me.timer.clearTimeout(this.timeOt3);
        me.timer.clearTimeout(this.timeOt4);
        if(this.checkInterval != undefined){
            me.timer.clearInterval(this.checkInterval);
        }
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-asia", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },

    checkSelesai : function(){
        this.spawnerBat.stop = true;
        me.timer.clearInterval(this.spawnerBat.waveInterval);
        this.checkInterval = me.timer.setInterval(() => {
            if(this.spawnerBat.checkMasihHidup() == 0){
                me.timer.clearInterval(this.checkInterval);
                let to = true;
                this.timeOt4 = me.timer.setTimeout(() => {
                    if(to){
                        to = false;
                        this.component.stage.condition.win = true;
                        this.component.stage.condition.end = true;
                        this.component.stage.battleFunc();
                    }
                }, 5000);
            }
            else{
                //console.log(this.spawnerBat.checkMasihHidup());
            }
        }, 1000);
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();