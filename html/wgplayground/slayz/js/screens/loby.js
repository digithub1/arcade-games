(function(){
// Put user code here //
 
//  End of user code  //

game.level.loby = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("loby");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1000);
        this.soket = {};
        this.soket.stage = me.pool.pull("game.soket.socketComponent", this);
        
        game.data.multiplayer = true;
        
        this.mode = "multiplayer";
        
        this.playerAva =  me.pool.pull("me.Sprite", 400, 500, {
           image: game.textureMap.get("worldMap"),
           region:"User_ava"
        });
        me.game.world.addChild(this.playerAva, 11);
        game.util.scale(this.playerAva,2);
        
        var userText = me.pool.pull('me.BitmapText', 450, 420, {
                 font: 'veteranTypewriterWhite',
                 size : 1.5,
                 text : "win   :",
                 textAlign : 'left',
                 textBaseAlign : 'bottom',
                 anchorPoint : {x: 0, y: 0.5}
                 }); 
        me.game.world.addChild(userText, 12);
        
        var totalwin = me.pool.pull('me.BitmapText', 650, 420, {
                 font: 'veteranTypewriterWhite',
                 size : 1.5,
                 text : game.user.userData.win,
                 textAlign : 'left',
                 textBaseAlign : 'bottom',
                 anchorPoint : {x: 0, y: 0.5}
                 }); 
        me.game.world.addChild(totalwin, 12);
        
        var playeronline = me.pool.pull('me.BitmapText', 250, 570, {
                 font: 'veteranTypewriterWhite',
                 size : 1.5,
                 text : "Player Online : ",
                 textAlign : 'left',
                 textBaseAlign : 'bottom',
                 anchorPoint : {x: 0, y: 0.5}
                 }); 
        me.game.world.addChild(playeronline, 12);
        
        this.search = me.pool.pull("search",me.game.viewport.width / 2, me.game.viewport.height / 2  + 450,{
           region: "button_battle",
           container: this
        });
        me.game.world.addChild(this.search, 11);
        
        this.VsKonten = me.pool.pull("lobiGame", 0, 0, {
            container : this
        });
        me.game.world.addChild(this.VsKonten,20);
        this.VsKonten.closekonten();
    
        this.rankBoard = me.pool.pull('rankContainer', 860, 0,{
            container:this
        });
        me.game.world.addChild(this.rankBoard, 11);
        
        let blackPanelAtas = me.pool.pull("blackPanel", 0, -me.game.world.height-160);
        me.game.world.addChild(blackPanelAtas, 20);
        let blackPanelBawah = me.pool.pull("blackPanel", 0, me.game.world.height+160);
        me.game.world.addChild(blackPanelBawah, 20);
        
        let back = me.pool.pull("back",me.game.viewport.width / 2 - 2150, me.game.viewport.height / 2 - 1150,{
           region: "Button_back"
        });
        me.game.world.addChild(back,  3);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    showkonten: function(){
        this.search.pos.x = 999999;
        this.search.pos.y = 999999;
        
        this.VsKonten.openkonten();
    },
    
    closekonten: function(){
        this.search.pos.x = me.game.viewport.width / 2;
        this.search.pos.y = me.game.viewport.height / 2  + 450;

    },
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();