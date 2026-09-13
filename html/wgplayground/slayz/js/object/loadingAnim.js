(function(){
// Put user code here //
 
//  End of user code  //

game.object.loadingAnim = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "battle";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"loading_0","loading_1","loading_2",
			"loading_3","loading_4","loading_5",
			"loading_6","loading_7","loading_8",
			"loading_9"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
 
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);

		this.alpha = 0;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;

		this.addAnimation('1', [{ name: "loading_0", delay: 100 },{ name: "loading_1", delay: 100 },{ name: "loading_2", delay: 100 },{ name: "loading_3", delay: 100 },{ name: "loading_4", delay: 100 },{ name: "loading_5", delay: 100 },{ name: "loading_6", delay: 100 },{ name: "loading_7", delay: 100 },{ name: "loading_8", delay: 100 },{ name: "loading_9", delay: 100 }]);
		this.setCurrentAnimation('1');
		this.var = {};

        // Put user code here //
        this.pos.z = 95;
        this.fade = true;
        this.selisihHeightLayar = me.game.viewport.height/2 - me.game.world.height/2;
            
        
        this.loadingScreen = me.pool.pull("loadingScreen", x, y);
        me.game.world.addChild(this.loadingScreen, this.pos.z-2);
        
        this.loadingBlackBar = me.pool.pull("loadingBlackBar", me.game.viewport.width/2, me.game.viewport.height/2+257);
        me.game.world.addChild(this.loadingBlackBar, this.pos.z);
        
        let posY;
        if(me.game.viewport.height/2 < me.game.world.height/2){
            let p = me.game.world.height/2 - me.game.viewport.height/2;
            posY = me.game.world.height/2 - p;
        }else{
            posY = me.game.world.height/2;
        }
        let text1 = "Tips : Login for 7 days to get new weapons",
            text2 = "Tips : Use a special weapon, when there are many zombies",
            text3 = "Tips : Don't forget to upgrade your weapon in shop",
            text4 = "Tips : Complete 1 continent, to open a new special weapon",
            text5 = "Tips : Challenge yourself in Survivors Island!",
            text6 = "Tips : Kill Guitar zombies quickly!",
            text7 = "Tips : Dog zombies movement is very fast",
            text8 = "Tips : Watch the ADS to get more Diamond",
            text9 = "Tips : Use direction button, to move your weapons",
            text10 = "Tips : Click special weapon button, then click to zombies",
            textArray = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10],
            textRandom = Math.floor(Math.random()*textArray.length),
            textShow = me.pool.pull('me.BitmapText', x, posY+212, {
                font: 'veteranTypewriterWhite',
                size : 1,//2,
                text : textArray[textRandom],
                textAlign : 'center',
                textBaseAlign : 'middle'
            }); 
        me.game.world.addChild(textShow, this.pos.z+1);
        
        let to = true,
            toOnce = true;
        this.setCurrentAnimation('1',()=>{
            if(to){
                to = false;
                this.timeOt1 = me.timer.setTimeout(()=>{
                     if(toOnce){
                        toOnce = false;
                        me.game.world.removeChildNow(this);
                        me.game.world.removeChildNow(this.loadingScreen);
                        me.game.world.removeChildNow(this.loadingBlackBar);
                        me.game.world.removeChildNow(textShow);
                    
                        if(this.fade){
                            this.fade = false;
                            me.game.viewport.fadeOut("#000000", 1000);
                        }
                     }
                }, 4000);
            }
        });
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Sprite, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {

        // Put user code here //
        me.timer.clearTimeout(this.timeOt1);
        //  End of user code  //
	},

    // Put user code here //
    
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();