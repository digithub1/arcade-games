(function(){
// Put user code here //
 
//  End of user code  //

game.object.PauseContainer = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0,
			y: 0
		};

        // Put user code here //
        
        //  End of user code  //

		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = false;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        // this.event = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
        //     if(this.onShow){
        //         if(action == "up"){
        //             this.Select(action);
        //         }
        //         else if(action == "down"){
        //             this.Select(action);
        //         }
        //         else if(action == "space"){
        //             this.ClickBtn();
        //         }
        //     }
        // }.bind(this));
        
        this.show = false;
        this.panel = me.pool.pull("PausePanel", 0, 0, {
            container : this
        });
        me.game.world.addChild(this.panel, 199);
        
        this.overlayPanel = me.pool.pull("SettingOverlay", 0, 0);
        me.game.world.addChild(this.overlayPanel, 195);
        
        this.btnContinue = me.pool.pull("BtnPauseContinue", 0, -100, {
            container : this
        });
        me.game.world.addChild(this.btnContinue, 200);
        
        this.btnRestart = me.pool.pull("BtnPauseRestart", 0, 150, {
            container : this
        });
        me.game.world.addChild(this.btnRestart, 200);
        
        this.btnHome = me.pool.pull("BtnPauseHome", 0, 400, {
            container : this
        });
        me.game.world.addChild(this.btnHome, 200);
        
        this.Hide();
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Container, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.Container, 'onActivateEvent');
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.Container, 'onDeactivateEvent');

        // Put user code here //
        if(this.event != undefined)
            me.event.unsubscribe(this.event);
        //  End of user code  //
	},

    // Put user code here //
    Hide : function(){
        this.onShow = false;
        this.panel.pos.x = 9000;
        this.btnContinue.pos.x = 9000;
        this.btnRestart.pos.x = 9000;
        this.btnHome.pos.x = 9000;
        this.overlayPanel.pos.x = 9000;
        game.util.resumeGame();
    },
    
    Show : function(){
        this.start = true;
        this.index = 1;
        this.onShow = true;
        this.panel.pos.x = me.game.viewport.width / 2;
        this.btnContinue.pos.x = me.game.viewport.width / 2;
        this.btnRestart.pos.x = me.game.viewport.width / 2;
        this.btnHome.pos.x = me.game.viewport.width / 2;
        this.overlayPanel.pos.x = me.game.viewport.width / 2;
        
        me.game.repaint();
        game.util.pauseGame();
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();