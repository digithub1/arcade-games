(function(){
// Put user code here //
 
//  End of user code  //

game.object.BannerContainer = me.Container.extend({
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
        this.adsBanner = me.pool.pull("adsWarning", -10, -10);
        this.addChild(this.adsBanner, 9999);
        
        this.event = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if(this.onShow){
                if(action == "a"){
                    this.btnRestart.onClick();
                }
                else if(action == "d"){
                    this.btnHome.onClick();
                }
            }
        }.bind(this));
        
        this.onShow = false;
        this.container = settings.container;
        this.frame = me.pool.pull("WinFrame", 0, -200);
        this.addChild(this.frame, 200);
        
        this.overlayPanel = me.pool.pull("SettingOverlay", 0, 0);
        this.addChild(this.overlayPanel, 195);
        
        this.btnRestart = me.pool.pull("BtnRestart", -550, 140,{container:this});
        this.addChild(this.btnRestart, 220);
        
        this.btnHome = me.pool.pull("BtnHomeIngame", 550, 140,{container:this});
        this.addChild(this.btnHome, 220);
        
        this.btnAds = me.pool.pull("BtnAds", 0, 140,{container:this});
        this.addChild(this.btnAds, 221);
        
        this.finalScoreTxt = game.font.loja(25, -60, {
            size : 8,
            text : "000000000",
            textAlign : 'center',
            textBaseAlign : 'middle'
        });
        this.addChild(this.finalScoreTxt, 300);
        
        this.highScoreTxt = me.pool.pull("HighScore", 0, 30);
        this.addChild(this.highScoreTxt, 300);
        
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
        if(this.alphaInterval != undefined)
            clearInterval(this.alphaInterval);
        
        if(this.txtInterval != undefined)
            clearInterval(this.txtInterval);
            
        if(this.event != undefined)
            me.event.unsubscribe(this.event);
            
            
        me.timer.clearTimeout(this.timeOutWarning);
        //  End of user code  //
	},

    // Put user code here //
    Hide : function(){
        this.frame.pos.x = 3000;
        this.btnHome.pos.x = 3000;
        this.btnRestart.pos.x = 3000;
        this.btnAds.pos.x = 3000;
        this.finalScoreTxt.setText("");
        this.highScoreTxt.pos.x = 3000;
        this.overlayPanel.pos.x = 3000;
        this.onShow = false;
    },
    
    Show : function(){
        game.controller.data.setHighScore(this.container.score, ()=>{
            this.finalScoreTxt.setText(this.container.score);
            this.frame.pos.x = this.pos.x;
            this.btnHome.pos.x = this.pos.x + 188;
            this.btnRestart.pos.x = this.pos.x - 212;
            this.btnAds.pos.x = me.game.viewport.width/2;
            this.overlayPanel.pos.x = me.game.viewport.width/2;
            me.audio.play("sfx-gameover");
            this.onShow = true;
        });
    },
    
    doubleScoreFunc : function(){
        let scoreNow = this.container.score,
            doubleScore = scoreNow*2;
        game.controller.data.setHighScore(doubleScore, ()=>{
            this.finalScoreTxt.setText(doubleScore);
            this.btnAds.pos.x = 3000;
        });
    },
    
    noAdsFunc: function(callback){
        this.btnHome.pos.x = 3000;
        this.btnRestart.pos.x = 3000;
        this.btnAds.pos.x = 3000;
        this.adsBanner.alpha = 1;
        let kk = true;
        this.timeOutWarning = me.timer.setTimeout(()=>{
            if(kk){
                kk = false;
                this.adsBanner.alpha = 0;
                this.btnHome.pos.x = this.pos.x + 188;
                this.btnRestart.pos.x = this.pos.x - 212;
                this.btnAds.pos.x = me.game.viewport.width/2;
                callback();
            }
        }, 2000);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();