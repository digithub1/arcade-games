(function(){
// Put user code here //
 
//  End of user code  //

game.level.A008 = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("A008");
		me.game.viewport.moveTo(906, 650);
		this.var = {};
        // Put user code here //
        this.component = {};
        this.component.stage = me.pool.pull("game.component.stageBattle", this, {
            id: "A008",
            nextId: "A009",
            territory: game.enum.territory.AMERICA,
            bgm: "ingame_action"
        });
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        this.start.splice(0, this.start.length);
        
        if(STB_Ver){
            me.event.unsubscribe(this.component.stage.keyHandler);
            clearInterval(this.component.stage.intervalKey);
        }
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();