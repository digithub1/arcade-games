(function(){
// Put user code here //
 
//  End of user code  //

game.level.A003 = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("A003");
		me.game.viewport.moveTo(989, 737);
		this.var = {};
        // Put user code here //
        this.component = {};
        this.component.stage = me.pool.pull("game.component.stageBattle", this, {
            id: "A003",
            nextId: "A004",
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