(function(){
// Put user code here //
 
//  End of user code  //

game.level.L2005B = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("L2005B");
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
        this.component = {};
        this.component.stage = me.pool.pull("game.component.stageBattle", {
            id: currentLevel,
            benuaID: "B001",
            nextId: "L3001",
            stageNumber : 6,
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
        
        this.spawnerEnemyBos = me.pool.pull ("spawnerEnemyBos", -25, -2800,{
            level:currentLevel,
            container:this
        });
        
        let toOnce2 = true;
        this.timeOt2 = me.timer.setTimeout(()=>{
            if(toOnce2){
                toOnce2 = false;
                me.game.world.addChild(this.spawnerEnemyBos, this.spawnerEnemyBos.pos.z);
                this.spawnerEnemyBos.spawnBos3();
                this.spawnerEnemyBos.bosZombie.tweenFall();
            }
        }, 6000);
        
        let shakeBackground = me.pool.pull("me.Sprite", me.game.world.width, me.game.world.height, {
            image: game.textureMap.get("southAmerica"),
            region: "L2005B"
        });
        me.game.world.addChild(shakeBackground, 3);
        game.util.scale(shakeBackground, 2);
        
        let frame = me.pool.pull ("frameMerah", 0, 0);
        me.game.world.addChild(frame, 50);
        
        let pohon1 = me.pool.pull("L2005BPohon", 430, 135);
        me.game.world.addChild(pohon1, 45);
        
        let pohon2 = me.pool.pull("L2005BPohon", -495, 100);
        me.game.world.addChild(pohon2, 45);
        pohon2.setCurrentAnimation('pohon2');
        
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
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-amerikaselatan", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
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