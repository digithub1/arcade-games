game.PlayScreen = me.Stage.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // reset the score
        game.score = 0;

        // coloring background as blue sky
        me.game.world.addChild(new me.ColorLayer("background", "#3399ff"), 0);

        // var cloud1 = new game.Image(me.game.viewport.width - 50, 0, 362, 224, "awan 1");
        var cloud1 = new me.Sprite(me.game.viewport.width - 50, 0, {framewidth: 362, frameheight: 224, image: game.texture.assets2, region: "awan 1"});
        me.game.world.addChild(cloud1, 1);

        var cloud2 = new me.Sprite(me.game.viewport.width - 150, 240, {framewidth: 362, frameheight: 224, image: game.texture.assets2, region: "awan 1"});
        me.game.world.addChild(cloud2, 2);

        var cloud3 = new me.Sprite(me.game.viewport.width/2 - 300, 200, {framewidth: 362, frameheight: 224, image: game.texture.assets2, region: "awan 1"});
        me.game.world.addChild(cloud3, 3);

        var cloud4 = new me.Sprite(me.game.viewport.width/2 - 150, 500, {framewidth: 362, frameheight: 224, image: game.texture.assets2, region: "awan 1"});
        me.game.world.addChild(cloud4, 4);

        var cloud5 = new me.Sprite(me.game.viewport.width - 50, me.game.viewport.height/2 - 270, {framewidth: 356, frameheight: 226, image: game.texture.assets2, region: "awan 2"});
        me.game.world.addChild(cloud5, 5);

        var cloud6 = new me.Sprite(me.game.viewport.width/2 - 300, 0, {framewidth: 356, frameheight: 226, image: game.texture.assets2, region: "awan 2"});
        me.game.world.addChild(cloud6, 7);
   
        // call base ground
        this.Base = new game.Base(me.game.viewport.width/2 - 410, me.game.viewport.height/2 + 20, "base");
        me.game.world.addChild(this.Base, 8);

        // Add our HUD to the game world, add it last so that this is on top of the rest.
        // Can also be forced by specifying a "Infinity" z value to the addChild function.
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);

        // call score line
        this.LineScore = new me.Sprite(me.game.viewport.width/2, me.game.viewport.height/2 + 300, {framewidth: 900, frameheight: 2, image: game.texture.assets2, region: "garis putih"});
        me.game.world.addChild(this.LineScore, 9);

        // button start
        this.buttonStart = me.pool.pull("button", me.game.viewport.width/2,me.game.viewport.height-(me.game.viewport.height/8), 252, 248, "button start", function(){
            // function onClick 
            var _this = this;
            var i = (game.flipX > 0) ? game.flipX : 0;

            me.game.world.removeChild(_this.startUps);
            me.audio.play("Button-SFX");
            _this.Player.i = i;
            me.input.triggerKeyEvent(me.input.KEY.SPACE, true);
            _this.Player.startJump();
            _this.managerContainer.gameStart = true;
            _this.Player.gameStart = true;
            _this.buttonStart.alpha = 0.5;
            game.data.done += 1;
        }.bind(this), function(){
            // function onRelease
            var _this = this;
            var j = game.flipX;

            _this.Player.i = j;
            _this.showBtnFlip();
            me.input.triggerKeyEvent(me.input.KEY.SPACE, true);
            _this.removeBtnStart();
            _this.Base.gameStart = true;
        }.bind(this));
        me.game.world.addChild(this.buttonStart, 10);

        // call start text above button and also the button itself
        this.textStart = new game.HUD.Text('START', me.game.viewport.width/2 + 10, me.game.viewport.height - 110, 200, 150, 1.4, 'font-putih-export');
        me.game.world.addChild(this.textStart, 11);

        // call block manager
        this.managerContainer = me.pool.pull("managerBlok");
        me.game.world.addChild(this.managerContainer, 12);
        
        // call shadow below player
        this.playerShadow = new me.Sprite(me.game.viewport.width/2 - 4, me.game.viewport.height/2 + 290, {framewidth: 120, frameheight: 36, image: game.texture.assets2, region: 'bayangan orang'});
        me.game.world.addChild(this.playerShadow, 13);

         // call player
        //this.Player = new game.PlayerEntity(me.game.viewport.width/2 - 40, me.game.viewport.height/2 + 200);
        this.Player = me.pool.pull ("mainPlayer", me.game.viewport.width/2 - 40, me.game.viewport.height/2 + 200);
        this.Player.renderable.pos.x = game.offsetX;
        this.Player.renderable.pos.y = game.offsetY;
        me.game.world.addChild(this.Player, 14);

        //jumlah done
        this.startUps = new game.UI.StartUps(me.game.viewport.width/2, me.game.viewport.height/2, 200, 200);
        me.game.world.addChild(this.startUps, 15);

        //loading
        this.bgLoading = new game.UI.Loading(0, 0, me.video.renderer.getWidth(), me.video.renderer.getHeight());
        me.game.world.addChild(this.bgLoading, Infinity);

        // button back to menu
        this.buttonBack = me.pool.pull("button", me.game.viewport.width/2-250, me.game.viewport.height/2-520, 104, 100, "button menu", function(){
            me.state.change(me.state.MENU);
        });
        me.game.world.addChild(this.buttonBack, 40);

    },

    closeStartups: function(){
        me.game.world.removeChild(this.startUps);
    },

    UI_GameOver: function(){

        me.game.world.removeChild(this.buttonFlip);

        if(game.score < 10000000){
            var charUnlock = game.data.unlock;
            var a = charUnlock.indexOf("salaryman");

            this.gameoverScreen = new game.UI.GameOver(0, 0, game.char);

            var images = (a >= 0) ? "data available" : game.data.unlock.push("salaryman");

            var save = game.setDataAsync(game.data);
            localStorage.setItem('1000StartUp.AllData', JSON.stringify(game.data));

        }else if(game.score >= 10000000 || game.score < 50000000){

            var charUnlock = game.data.unlock;
            var a = charUnlock.indexOf("hipster");

            this.gameoverScreen = (a >= 0) ? new game.UI.GameOverLV(0, 0, "pony", "font-ijo-export") : new game.UI.GameOverUnlocked(0, 0, "pony", "font-ijo-export");

            var images = (a >= 0) ? "data available" : game.data.unlock.push("hipster");

            var save = game.setDataAsync(game.data);
            localStorage.setItem('1000StartUp.AllData', JSON.stringify(game.data));

        }else if(game.score >= 50000000 || game.score < 100000000){

            var charUnlock = game.data.unlock;
            var a = charUnlock.indexOf("mark");

            this.gameoverScreen = (a >= 0) ? new game.UI.GameOverLV(0, 0, "centaur", "font-ungu-export") : new game.UI.GameOverUnlocked(0, 0, "centaur", "font-ungu-export");

            var images = (a >= 0) ? "data available" :  game.data.unlock.push("mark");

            var save = game.setDataAsync(game.data);
            localStorage.setItem('1000StartUp.AllData', JSON.stringify(game.data));

        }else if(game.score >= 100000000){

            var charUnlock = game.data.unlock;
            var a = charUnlock.indexOf("steve");

            this.gameoverScreen = (a >= 0) ? new game.UI.GameOverLV(0, 0, "unicorn", "font-kuning-export") : new game.UI.GameOverUnlocked(0, 0, "unicorn", "font-kuning-export");

            var images = (a >= 0) ? "data available" : game.data.unlock.push("steve");

            var save = game.setDataAsync(game.data);
            localStorage.setItem('1000StartUp.AllData', JSON.stringify(game.data));

        }

        me.game.world.addChild(this.gameoverScreen, 30);

        if(me.game.world.hasChild(this.Base)) this.Base.body.setVelocity(0, 0);
        this.Base.gameStart = false;

        game.setDataAsync(game.data);
        localStorage.setItem('1000StartUp.AllData', JSON.stringify(game.data));

    },

    showBtnFlip: function(){
          this.buttonFlip = me.pool.pull("button", me.game.viewport.width/2,me.game.viewport.height-(me.game.viewport.height/8), 252, 248, 'button turn', function(){
            // function onClick
            var _this = this;
            var j = game.flipX;

            if(game.isCountdown) return;
            if(_this.Player.click) return;
            _this.Player.i = j +=1;
            me.input.triggerKeyEvent(me.input.KEY.SPACE, true);
            _this.Player.flip = !_this.Player.flip;
            game.flipX = _this.Player.i;
            _this.Player.click = true;
            _this.buttonFlip.alpha = 0.5;
        }.bind(this), function(){
            // function on release
            var _this = this;
            _this.buttonFlip.alpha = 1;
        }.bind(this));
        me.game.world.addChild(this.buttonFlip, 16);
    },

    fixedPostitionX: function(){
        switch(game.char){
            case 'hipster':
                return -15;
            break;
            case 'mark':
                return 17;
            break;
            case 'steve':
                return -25;
            break;
            default:
                return 0;
        }
    },

    fixedPostitionY: function(){
        switch(game.char){
            case 'mark':
                return 14;
            break;
            case 'steve':
                return 15;
            break;
            default:
                return 0;
        }
    },

    showAdsVideo: function() {
      
      var adss = null;
      var self = this;

      this.bgLoading.showLoading();
      
      FBInstant.getRewardedVideoAsync(
        // placement_ID slipMaster
        //'187621998650096_191006438311652'
            // placement_ID
        '432036900540145_436973790046456'

      ).then(function(rewardedVideo) {

          adss = rewardedVideo;
          return adss.loadAsync();

      }).then(function() {

          me.audio.pauseTrack();
          return adss.showAsync();

      }).then(function() {

          self.bgLoading.hideLoading();
          me.game.world.removeChild(self.gameoverScreen);

      }).then(function() {

          game.retry = 1;
          game.isCountdown = true;
    
          self.Continue();

      }).catch(function(e) {
          //console.log(e);
          //game.isCountdown = true;
          self.bgLoading.hideLoading();
          //me.game.world.removeChild(self.gameoverScreen);
          //game.retry = 1;
          //self.Continue();
      });
    },

    startOver: function(){
        me.game.world.removeChild(this.gameoverScreen);
        game.speed = 500;
        game.pattern = [];
        game.retry = 0;
        me.state.current().Player.flip = false;
        game.restart();
        me.game.repaint();
    },

    Continue: function(){

        this.Player.renderable.alpha = 1;

        this.managerContainer.pos.y = game.currentBlokPos;

        if(me.game.world.hasChild(this.Base)) this.Base.body.setVelocity(0, 2);
        
        this.Player.pos.x = game.segment;
        this.Player.pos.y = me.game.viewport.height/2 + 210;//190
        this.Player.body.vel.y = 0;
        this.Player.flip = !this.Player.flip;
        this.Player.gameStart = true;
        this.Player.click = false;
        if(this.Player.pos.x >= 100 || this.Player.pos.x <= 500){
            game.flipX += 1;
            this.Player.i = game.flipX;
            //console.log(this.Player.i);
        }else {
            this.Player.i = game.flipX;
        }
        this.Player.changeAnimation("stand");
        this.Player.end = false;
        this.Player.alive = true;
        this.showBtnFlip();

        this.Countdown();
    },

    Countdown: function(){
       this.countdown = new game.HUD.Countdown(me.game.viewport.width/2, me.game.viewport.height/2);
       me.game.world.addChild(this.countdown, 20);
    },

    shareIt: function(image){
        FBInstant.shareAsync({
          intent: 'SHARE',
          image: image,
          text: 'Yeay! I reached highest score on the link',
          // data: { myReplayData: image },
        })
    },

    convertCanvasToImage: function() {
        var canvas = document.getElementsByTagName('canvas')[0];
        var image = canvas.toDataURL("image/png");
        window.location.href=image;
        // var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
        // console.log(image);
        return image;
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        
        game.flipX = 0;
        game.score = 0;
        game.scoreHUD = '0k';
        me.game.world.removeChild(this.HUD);
        me.game.world.removeChild(this.managerContainer);
        if(me.game.world.hasChild(this.startUps)) me.game.world.removeChild(this.startUps);
        if(this.gameoverScreen && me.game.world.hasChild(this.gameoverScreen)) me.game.world.removeChild(this.gameoverScreen);

        game.speed = 500;
        game.pattern = [];
        game.retry = 0;
        me.state.current().Player.flip = false;

        // before back state menu getdata again
        game.getDataAsync();     

    },

    removeBtnStart: function () {
        // remove start text above button
        me.game.world.removeChild(this.textStart);
        // remove red button start 
        me.game.world.removeChild(this.buttonStart);
        // remove shadow below player
        me.game.world.removeChild(this.playerShadow);
    },

    showAds: function () {
        if (game.sawAds == false) {
            if (game.adsOnload == false) {
                game.adsOnload = true;
                getKaiAd({
                    publisher: '69cfe709-6eb2-4fca-bd9e-1ff5e6e8a2f3',
                    app: '1k Startup',
                    onerror: err => {
                        game.adsOnload = false;
                        game.ads = null;
                    },
                    onready: ad => {
                        game.ads = ad;
                    }
                })
            } else {
                if (game.ads != null) {
                    game.ads.call('display');
                    game.sawAds = true;
                    game.adsOnload = false;
                } else
                    return;
            }
        }
    },


});