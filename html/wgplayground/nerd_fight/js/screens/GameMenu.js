(function(){
// Put user code here //
 
//  End of user code  //

game.level.GameMenu = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("GameMenu");
		this.var = {};
        // Put user code here //
        if(window.plugins != undefined)
             window.plugins.insomnia.allowSleepAgain();
             
        game.var.login = false;
        this.initStart = false;
        
        this.initTimer = setTimeout(function(){
            if(this.initStart == false){
                this.initStart = true;
                game.util.audioPlay('bgm-mainmenu', true);
            }
            clearTimeout(this.initTimer);
        }.bind(this), 100);
        
        let btn = me.pool.pull("StartBtn", 0, 370);
        me.game.world.addChild(btn, 2);
                
        let blok = me.pool.pull("Blok", 0, 0);
        me.game.world.addChild(blok, 1000);
        
        this.test = me.pool.pull('me.BitmapText', me.game.viewport.width / 2, me.game.viewport.height / 2 - 130, {
                                             font: 'Niagaraphobia',
                                             size : 3,
                                             text : "",
                                             textAlign : 'center',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 0,y: 0}
                                             }); 
        me.game.world.addChild(this.test, 101);
        
        game.var.adsEvent = false;
        game.var.tips = "";
        
        if(STORE){
            store.register({
                id: "c008",
                type: store.CONSUMABLE,
            });
            
            store.register({
                id: "c009",
                type: store.CONSUMABLE,
            });
            
            store.register({
                id: "c010",
                type: store.CONSUMABLE,
            });
            
            store.register({
                id: "c011",
                type: store.CONSUMABLE,
            });
            
            store.register({
                id: "c013",
                type: store.CONSUMABLE,
            });
            
            store.register({
                id: "c014",
                type: store.CONSUMABLE,
            });
            
            store.register({
                id: "c015",
                type: store.CONSUMABLE,
            });
        }
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();