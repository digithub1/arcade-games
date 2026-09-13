(function(){
// Put user code here //
 
//  End of user code  //

game.level.LENDLES = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("LENDLES");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1500);
        game.controller.data.setTemporaryKilltoZero();
        
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
        this.component = {};
        this.component.stage = me.pool.pull("game.component.soloSurvival",{id: currentLevel});
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
            }
        },1000);
        
        let toOnce2 = true;
        this.timeOt2 = me.timer.setTimeout(()=>{
            if(toOnce2){
                toOnce2 = false;
                this.spawnerEnemy = me.pool.pull ("spawnerEnemySoloSurvival", 0, 0);
                me.game.world.addChild(this.spawnerEnemy, this.spawnerEnemy.pos.z);
                this.spawnerEnemy.wave1ForFunction();
            }
        }, 4000);
        
        let shakeBackground = me.pool.pull("me.Sprite", me.game.world.width, me.game.world.height, {
            image: game.textureMap.get("america"),
            region: "L1001"
        });
        me.game.world.addChild(shakeBackground, 3);
        game.util.scale(shakeBackground, 2);
        
        this.car = me.pool.pull ("carBlue", 275, -105);
        me.game.world.addChild(this.car, 11);
        
        this.car2 = me.pool.pull ("carYellowCamaro", -400, 25);
        me.game.world.addChild(this.car2, 11);
        this.car2.playTween();
        
        this.pohonLeft = me.pool.pull ("pohon", -590, 145);
        me.game.world.addChild(this.pohonLeft, 20);
        
        this.pohonRight = me.pool.pull ("pohon", 585, 135);
        me.game.world.addChild(this.pohonRight, 20);
        
        let pohonKanan = me.pool.pull("pohonShadowKanan", this.pohonRight.pos.x-150, this.pohonRight.pos.y-30);
        me.game.world.addChild(pohonKanan, 12);
        
        let pohonKiri = me.pool.pull("pohonShadowKiri", this.pohonLeft.pos.x+115, this.pohonLeft.pos.y-15);
        me.game.world.addChild(pohonKiri, 12);
        
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
        me.video.renderer.clear();
        me.timer.clearTimeout(this.timeOt1);
        me.timer.clearTimeout(this.timeOt2);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-ingame", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();