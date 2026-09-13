(function(){
// Put user code here //
 
//  End of user code  //

game.level.startMenu = me.Stage.extend({
	onResetEvent: function() {
        // Put user code here //
        
        //  End of user code  //
		me.levelDirector.loadLevel("startMenu");
		this.var = {};
        // Put user code here //
        me.game.viewport.fadeOut("#000000", 1500);
        
        //keyboard remote
        if(IS_KEYBOARD){
            me.input.preventDefault = false;
            
            me.input.bindKey(me.input.KEY.NUM0, "num0", true);
            me.input.bindKey(me.input.KEY.NUM1, "num1", true);
            me.input.bindKey(me.input.KEY.NUM2, "num2", true);
            me.input.bindKey(me.input.KEY.NUM3, "num3", true);
            me.input.bindKey(me.input.KEY.NUM4, "num4");
            me.input.bindKey(me.input.KEY.NUM5, "num5", true);
            me.input.bindKey(me.input.KEY.NUM6, "num6");
            me.input.bindKey(me.input.KEY.NUM7, "num7", true);
            me.input.bindKey(me.input.KEY.NUM8, "num8", true);
            me.input.bindKey(me.input.KEY.NUM9, "num9", true);
            me.input.bindKey(me.input.KEY.ENTER, "enter", true);
            me.input.bindKey(me.input.KEY.LEFT,  "left");
            me.input.bindKey(me.input.KEY.RIGHT, "right");
            me.input.bindKey(me.input.KEY.UP, "up");
            me.input.bindKey(me.input.KEY.DOWN, "down");
            
            for(let i=0; i<10; i++){
                me.input.bindGamepad(i, {type:"buttons", code: me.input.GAMEPAD.BUTTONS.LEFT}, me.input.KEY.LEFT);
                me.input.bindGamepad(i, {type:"buttons", code: me.input.GAMEPAD.BUTTONS.RIGHT}, me.input.KEY.RIGHT);
                me.input.bindGamepad(i, {type:"buttons", code: me.input.GAMEPAD.BUTTONS.UP}, me.input.KEY.UP);
                me.input.bindGamepad(i, {type:"buttons", code: me.input.GAMEPAD.BUTTONS.DOWN}, me.input.KEY.DOWN);
            }
            this.press = true;
            this.controllerPad();
        }
        
        this.startButton = me.pool.pull("startMenuButton", 0, 100);
        me.game.world.addChild(this.startButton, 10);
        this.startButton.show();
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, 0.5);
        //  End of user code  //
	},

	onDestroyEvent: function() {
        // Put user code here //
        me.audio.stop("bgm-menu");
        me.timer.clearTimeout(this.startButton.timeOut);
        me.timer.clearInterval(this.padInterval);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("bgm-menu", false, ()=>{this.audioFunc()}, 0.5);
    },

    controllerPad: function(){
        this.padInterval = me.timer.setInterval(()=>{
            if (me.input.isKeyPressed('enter') && this.press){
                this.press = false;
                this.startButton.func();
            }
        },10);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();