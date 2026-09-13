(function(){
// Put user code here //
 
//  End of user code  //

game.object.endContainer = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 0;
		settings.height = settings.height || 0;
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
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        let vars = ["level","benuaID"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
        this.pos.z = 200;
        this.dataGold;
        
        this.background = me.pool.pull("loseBckgrnd", 0, 0);
        this.addChild(this.background, this.pos.z);
        
        let coinicon = me.pool.pull("me.Sprite", -50, 100, {
            image:  game.textureMap.get("battle"),
            region:"coinIcon2"
        });
        this.addChild(coinicon, this.pos.z + 2);
        
        this.totalscore = me.pool.pull('me.BitmapText', 20, 85, {
                 font: 'veteranTypewriterWhite',
                 size : 1.5,//3,
                 text : "0",
                 textAlign : 'left',
                 textBaseAlign : 'bottom',
                 anchorPoint : {x: 0, y: 0.5}
                 }); 
        this.addChild(this.totalscore, this.pos.z + 2);
        
        let xtext = me.pool.pull('me.BitmapText', -20, 80, {
                 font: 'veteranTypewriterWhite',
                 size : 1.5,
                 text : "x",
                 textAlign : 'left',
                 textBaseAlign : 'bottom',
                 anchorPoint : {x: 0, y: 0.5}
                 }); 
        this.addChild(xtext, this.pos.z + 2);
        
        this.lost = me.pool.pull("me.Sprite", 0, 0, {
            image:  game.textureMap.get("battle"),
            region:  "lost"
        });
        this.addChild(this.lost, this.pos.z + 1);
        
        this.continue = me.pool.pull("continue", 95, 200);
        this.retry = me.pool.pull("retry", -50, 217.5, {level:this.level});
        
        
        // if(IS_KEYBOARD){
            // this.retry.pos.x -= 30;
            // this.retry.pos.y += 5;
            this.adsButton = me.pool.pull("adsButton", 200, 190, {container:this});
            // this.adsButtonKey = me.pool.pull("adsButtonKey", 330, 190);
            this.adsButtonNotif = me.pool.pull("ADS_Notif", 0, -me.game.viewport.height*2);
            this.addChild(this.adsButtonNotif, this.pos.z + 5);
            // this.continueKey = me.pool.pull("pauseContinueKey", 95+this.continue.width/2+20, 195);
            // this.retryKey = me.pool.pull("pauseHomeKey", -80+this.retry.width/2+20, 215);
            // this.continueKey.scale(0.4);
            // this.retryKey.scale(0.4);
        // }
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
        me.audio.stop("gameover");
        me.timer.clearTimeout(this.timeOt1);
        //  End of user code  //
	},

    // Put user code here //
    audioFunc: function(){
        me.audio.play("gameover", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
    },
    
    showContainer:function(){
        this.getGold();
        if(this.benuaID == "B000"){
            me.audio.stop("bgm-ingame");
        }
        if(this.benuaID == "B001"){
            me.audio.stop("bgm-amerikaselatan");
        }
        if(this.benuaID == "B002"){
            me.audio.stop("bgm-eropa");
        }
        if(this.benuaID == "B003"){
            me.audio.stop("bgm-afrika");
        }
        if(this.benuaID == "B005"){
            me.audio.stop("bgm-australi");
        }
        me.audio.play("gameover", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
        let toOnce = true;
        this.timeOt1 = me.timer.setTimeout(() => {
             if(toOnce){
                toOnce = false;
                this.addChild(this.continue, this.pos.z + 2);
                this.addChild(this.retry, this.pos.z + 2);
                // if(IS_KEYBOARD){
                    this.addChild(this.adsButton, this.pos.z + 2);
                    // this.addChild(this.adsButtonKey, this.pos.z + 2);
                    // this.addChild(this.continueKey, this.pos.z + 3);
                    // this.addChild(this.retryKey, this.pos.z + 3);
                // }
                me.state.pause(true);
             }
        }, 700);
    },
    
    getGold: function(){
        let data = game.user.userData.goldTemporary;
        this.totalscore.setText(data);
        this.dataGold = data;
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();