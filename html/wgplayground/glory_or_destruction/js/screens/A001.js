(function(){
// Put user code here //
 
//  End of user code  //

game.level.A001 = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("A001");
		me.game.viewport.moveTo(1144, 820);
		this.var = {};
        // Put user code here //
        this.component = {};
        this.component.stage = me.pool.pull("game.component.stageBattle", this, {
            id: "A001",
            nextId: "A002",
            territory: game.enum.territory.AMERICA,
            bgm: "ingame_action"
        });
        
        if(game.util.checkTutorialStep(23)){
            game.controller.tutorial.currentStep();
        }
        
        // game.util.newCanvas("background_0.jpg", -100, -100);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        // reset the delegate
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