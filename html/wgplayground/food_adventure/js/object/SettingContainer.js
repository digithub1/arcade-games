(function(){
// Put user code here //
 
//  End of user code  //

game.object.SettingContainer = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        this.container = settings.container;
        this.settingPanel = me.pool.pull("SettingPanel", 0, 0, {
            container : this
        });
        this.addChild(this.settingPanel, 5);
        
        this.overlayPanel = me.pool.pull("SettingOverlay", 0, 0);
        this.addChild(this.overlayPanel, 1);
        
        
        this.btnSfx = me.pool.pull("BtnSFX", 0, -100, {
            container : this
        });
        this.addChild(this.btnSfx, 100);
        
        this.btnBgm = me.pool.pull("BtnBGM", 0, 150, {
            container : this
        });
        me.game.world.addChild(this.btnBgm, 200);
        
        this.btnHome = me.pool.pull("HomeBtn", 0, 400, {
            container : this
        });
        me.game.world.addChild(this.btnHome, 200);
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
    HideSetting : function(){
        this.onShow = false;
        this.settingPanel.pos.x = 9000;
        this.overlayPanel.pos.x = 9000;
        this.btnSfx.pos.x = 9000;
        this.btnBgm.pos.x = 9000;
        this.btnHome.pos.x = 9000;
        this.container.btnStart.pos.x =  me.game.viewport.width / 2;
        this.container.btnGallery.pos.x =  me.game.viewport.width / 2 - 18;
        this.container.btnSettings.pos.x =  me.game.viewport.width / 2 - 18;
        this.container.btnStart.tweenPlay();
    },
    
    ShowSetting : function(){
        this.onShow = true;
        this.settingPanel.pos.x = me.game.viewport.width / 2;
        this.overlayPanel.pos.x = me.game.viewport.width / 2;
        this.btnSfx.pos.x = me.game.viewport.width / 2;
        this.btnBgm.pos.x = me.game.viewport.width / 2;
        this.btnHome.pos.x = me.game.viewport.width / 2;
        this.container.btnStart.tweenStop();
        this.container.btnStart.pos.x = 9000;
        this.container.btnGallery.pos.x = 9000;
        this.container.btnSettings.pos.x = 9000;
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();