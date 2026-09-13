(function(){
// Put user code here //
 
//  End of user code  //

game.object.endContainerEndless = me.Container.extend({
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
        let vars = ["level"];
        verify(settings, vars);
        game.util.spread(this, settings, vars);
        
        this.pos.z = 200;
        
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
                 size : 1.5,//3,
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
        this.addChild(this.continue, this.pos.z + 2);
        this.retry = me.pool.pull("retry", -50, 217.5, {level:this.level});
        this.addChild(this.retry, this.pos.z + 2);
        this.share = me.pool.pull("share", 275, 200, {container:this});
        this.addChild(this.share, this.pos.z + 2);
        let ads = me.pool.pull("adsBtn", 275, 125, {container:this});
        this.addChild(ads, this.pos.z + 2);
        
        if(IS_KEYBOARD){
            this.retry.pos.x -= 30;
            this.retry.pos.y += 5;
            this.continueKey = me.pool.pull("pauseContinueKey", 95+this.continue.width/2+20, 195);
            this.retryKey = me.pool.pull("pauseHomeKey", -80+this.retry.width/2+20, 215);
            this.addChild(this.continueKey, this.pos.z + 3);
            this.addChild(this.retryKey, this.pos.z + 3);
            this.continueKey.scale(0.4);
            this.retryKey.scale(0.4);
        }
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
        me.audio.stop("bgm-ingame");
        me.audio.play("gameover", false, ()=>{this.audioFunc()}, game.user.userData.sound.BGM);
        let toOnce = true;
        this.timeOt1 = me.timer.setTimeout(() => {
             if(toOnce){
                toOnce = false;
            me.state.pause(true);
             }
        }, 1000);
    },
    
    getGold: function(){
        let data = game.user.userData.goldTemporary;
        this.totalscore.setText(data);
        game.controller.data.setBestScore(data);
    },
    
    shareFunc: function(){
        let canvas  = document.createElement('canvas'),
            ctx     = canvas.getContext('2d');
        canvas.width = 1170;
        canvas.height = 540; 
        
        let imgBackground = new Image(1170, 540);
        imgBackground.src = "data/image/share_Picture.jpg";
        imgBackground.onload = () => {
            ctx.drawImage(imgBackground, 0, 0, 1170, 540);
            
            let imgAvatar = new Image(160, 160);
            imgAvatar.crossOrigin = "Anonymous";
            imgAvatar.src = FBInstant.player.getPhoto();
            imgAvatar.onload = () => {
                ctx.drawImage(imgAvatar, 75, 285, 200, 200);
                
                ctx.font = 'bold 100px Arial';
                ctx.fillStyle = "white";
                
                let name    =String(game.user.userData.name),
                    score   =String(game.user.userData.bestscore);
                  
                ctx.fillText(name, canvas.width/2 - 275, canvas.height/2 +100);
                ctx.fillText("Score "+score, canvas.width/2 - 275, canvas.height/2 +200);
                
                this.picBase64 = canvas.toDataURL();
                console.log(this.picBase64);
                let shareText = "This is my Rank";
                    FBInstant.shareAsync({
                    intent: 'REQUEST',
                    image: this.picBase64,
                    text: shareText
                });
            };    
        };
    },
    
    watchads: function(){
        let data = game.user.userData.goldTemporary * 2;
        game.controller.Ads.showAds(this, data);
        this.totalscore.setText(data);
    },
    

    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();