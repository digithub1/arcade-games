game.UI.GameOver = me.Container.extend({
	init: function(x, y, imageChar){
		this._super(me.Container, 'init', [x, y]);

		this.anchorPoint.set(0.5, 0.5);

		this.isPersistent = true;

		this.floating = true;

		this.name = "Panel GameOver";

		this.bg = new me.ColorLayer('background', 'rgba(0, 0, 0, 0.8)');
        this.addChild(this.bg);

		this.Text1 = new game.HUD.Text("YOU HAVE DONE", me.game.viewport.width/2 - 100, 75, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text1);

        this.Text3 = new game.HUD.Text("START-UPS", me.game.viewport.width/2 - 125, 320, 100, 100, 1.6, "font-putih-export");
        this.addChild(this.Text3);

        this.Text4 = new game.HUD.Text("CONGRATULATIONS", me.game.viewport.width/2 - 131, 400, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text4);

        this.Text5 = new game.HUD.Text("YOU REACHED", me.game.viewport.width/2 - 75, 450, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text5);

        this.TextScore = new game.HUD.FinalScore("$ "+game.score, me.game.viewport.width/2 + 50, 483, 100, 100, 0.6, "font-merah-export");
        this.addChild(this.TextScore);

        this.Text6 = new game.HUD.Text("VALUATION", me.game.viewport.width/2 - 50, 550, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text6);

        this.btnRetry = me.pool.pull("button", me.game.viewport.width/2, me.game.viewport.height - 150, 203, 200, "retry button", function(){
            adShowMidRoll(()=>{
                var _currentState = me.state.current();
                adsOnceRun = true;
                me.audio.unmuteAll();
                if(game.isLoading) return;
                    _currentState.startOver();
            });
        });
        this.addChild(this.btnRetry);

        /*this.btnShare = me.pool.pull("button", me.game.viewport.width/2, me.game.viewport.height - 150, 203, 200, "share button", function(){
            var _currentState = me.state.current();
            _currentState.shareIt(_currentState.convertCanvasToImage())
        });
        this.addChild(this.btnShare);*/

        /*this.btnContinue = me.pool.pull("button", me.game.viewport.width/2 + 190, me.game.viewport.height - 150, 203, 200, "continue button", function(){
            var _currentState = me.state.current();
            if(game.isLoading) return;
                _currentState.showAdsVideo();
        });
        if(game.retry >= 1){
            this.btnContinue.alpha = 0.5;
        }
        this.addChild(this.btnContinue);*/

        this.textRetry = new game.HUD.Text("START OVER", me.game.viewport.width/2 - 30, me.game.viewport.height - 5, 100, 100, 0.7, "font-putih-export");
        this.addChild(this.textRetry);

        // this.textShare = new game.HUD.Text("SHARE", me.game.viewport.width/2, me.game.viewport.height - 5, 100, 100, 0.7, "font-putih-export");
        // this.addChild(this.textShare);

        // this.textContinue = new game.HUD.Text("CONTINUE", me.game.viewport.width/2 + 170, me.game.viewport.height - 5, 100, 100, 0.7, "font-putih-export");
        // this.addChild(this.textContinue);

        this.scoreDone =  new game.HUD.FinalScore(game.data.done, me.game.viewport.width/2 + 50, 130, 100, 100, 2.2, "font-merah-export");
        this.addChild(this.scoreDone);

        this.char = new me.Sprite(me.game.viewport.width/2 + this.posXchar(imageChar), me.game.viewport.height/2 + 130, {image: "stand_" + imageChar});
        this.addChild(this.char);
	},

    posXchar: function(imageChar){
        switch(imageChar){
            case "jump_salaryman":
                return 20;
                break;
            default:
                return 0;
        }
    },

    update : function(dt) {
        this._super(me.Container, "update", [ dt ]);
        return true;
    }
});


game.UI.GameOverLV = me.Container.extend({
    init: function(x, y, level, bitmapFont){
        this._super(me.Container, 'init', [x, y]);

        this.anchorPoint.set(0.5, 0.5);

        this.isPersistent = true;

        this.floating = true;

        this.name = "Panel GameOver";

        this.bg = new me.ColorLayer('background', 'rgba(0, 0, 0, 0.8)');
        this.addChild(this.bg);

        this.Text1 = new game.HUD.Text("YOU HAVE DONE", me.game.viewport.width/2 - 100, 75, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text1);

        this.Text3 = new game.HUD.Text("START-UPS", me.game.viewport.width/2 - 125, 320, 100, 100, 1.6, "font-putih-export");
        this.addChild(this.Text3);

        this.Text4 = new game.HUD.Text("CONGRATULATIONS", me.game.viewport.width/2 - 131, 400, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text4);

        this.Text5 = new game.HUD.Text("YOU REACHED", me.game.viewport.width/2 - 75, 450, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text5);

        this.TextScore = new game.HUD.FinalScore("$ "+game.score, me.game.viewport.width/2 + 50, 483, 100, 100, 0.6, "font-merah-export");
        this.addChild(this.TextScore);

        this.Text6 = new game.HUD.Text("VALUATION", me.game.viewport.width/2 - 50, 550, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text6);

        this.btnRetry = me.pool.pull("button", me.game.viewport.width/2, me.game.viewport.height - 150, 203, 200, "retry button", function(){
            adShowMidRoll(()=>{
                var _currentState = me.state.current();
                adsOnceRun = true;
                me.audio.unmuteAll();
                if(game.isLoading) return;
                    _currentState.startOver();
            });
        });
        this.addChild(this.btnRetry);

        /*this.btnShare = me.pool.pull("button", me.game.viewport.width/2, me.game.viewport.height - 150, 203, 200, "share button", function(){
            var _currentState = me.state.current();
            _currentState.shareIt(_currentState.convertCanvasToImage())
        });
        this.addChild(this.btnShare);

        this.btnContinue = me.pool.pull("button", me.game.viewport.width/2 + 190, me.game.viewport.height - 150, 203, 200, "continue button", function(){
            var _currentState = me.state.current();
            if(game.isLoading) return;
                _currentState.showAdsVideo();
        });
        if(game.retry >= 1){
            this.btnContinue.alpha = 0.5;
        }
        this.addChild(this.btnContinue, 10);*/

        this.textRetry = new game.HUD.Text("START OVER", me.game.viewport.width/2 - 30, me.game.viewport.height - 5, 100, 100, 0.7, "font-putih-export");
        this.addChild(this.textRetry);

        /*this.textShare = new game.HUD.Text("SHARE", me.game.viewport.width/2, me.game.viewport.height - 5, 100, 100, 0.7, "font-putih-export");
        this.addChild(this.textShare);

        this.textContinue = new game.HUD.Text("CONTINUE", me.game.viewport.width/2 + 170, me.game.viewport.height - 5, 100, 100, 0.7, "font-putih-export");
        this.addChild(this.textContinue);*/

        this.scoreDone =  new game.HUD.FinalScore(game.data.done, me.game.viewport.width/2 + 50, 130, 100, 100, 2.2, "font-merah-export");
        this.addChild(this.scoreDone);

        this.Text7 = new game.HUD.Text("YOU GAINED THE TITLE", me.game.viewport.width/2 - 150, 650, 100, 100, 0.5, bitmapFont);
        this.addChild(this.Text7);

        this.Text8 = new game.HUD.Text(level, me.game.viewport.width/2 - this.posXfont(level), 680, 100, 100, 1, bitmapFont);
        this.addChild(this.Text8);

    },

    posXfont: function(level){
        switch(level){
            case "pony":
                return 40;
                break;
            case "centaur":
                return 100;
                break;
            default:
                return 90;
        }
    },

    update : function(dt) {
        this._super(me.Container, "update", [ dt ]);
        return true;
    }
});


game.UI.GameOverUnlocked = me.Container.extend({
    init: function(x, y, level, bitmapFont){
        this._super(me.Container, 'init', [x, y]);

        this.anchorPoint.set(0.5, 0.5);

        this.isPersistent = true;

        this.floating = true;

        this.name = "Panel GameOver";

        this.bg = new me.ColorLayer('background', 'rgba(0, 0, 0, 0.8)');
        this.addChild(this.bg);

        this.Text1 = new game.HUD.Text("YOU HAVE DONE", me.game.viewport.width/2 - 100, 75, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text1);

        this.Text3 = new game.HUD.Text("START-UPS", me.game.viewport.width/2 - 125, 320, 100, 100, 1.6, "font-putih-export");
        this.addChild(this.Text3);

        this.Text4 = new game.HUD.Text("CONGRATULATIONS", me.game.viewport.width/2 - 131, 400, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text4);

        this.Text5 = new game.HUD.Text("YOU REACHED", me.game.viewport.width/2 - 75, 450, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text5);

        this.TextScore = new game.HUD.FinalScore("$ "+game.score, me.game.viewport.width/2 + 50, 483, 100, 100, 0.6, "font-merah-export");
        this.addChild(this.TextScore);

        this.Text6 = new game.HUD.Text("VALUATION", me.game.viewport.width/2 - 50, 550, 100, 100, 1, "font-putih-export");
        this.addChild(this.Text6);

        this.btnRetry = me.pool.pull("button", me.game.viewport.width/2, me.game.viewport.height - 150, 203, 200, "retry button", function(){
            adShowMidRoll(()=>{
                var _currentState = me.state.current();
                adsOnceRun = true;
                me.audio.unmuteAll();
                if(game.isLoading) return;
                    _currentState.startOver();
            });
        });
        this.addChild(this.btnRetry);

        /*this.btnShare = me.pool.pull("button", me.game.viewport.width/2, me.game.viewport.height - 150, 203, 200, "share button", function(){
            var _currentState = me.state.current();
            _currentState.shareIt(_currentState.convertCanvasToImage())
        });
        this.addChild(this.btnShare);

        this.btnContinue = me.pool.pull("button", me.game.viewport.width/2 + 190, me.game.viewport.height - 150, 203, 200, "continue button", function(){
            var _currentState = me.state.current();
            if(game.isLoading) return;
                _currentState.showAdsVideo();
        });
        if(game.retry >= 1){
            this.btnContinue.alpha = 0.5;
        }
        this.addChild(this.btnContinue);*/

        this.textRetry = new game.HUD.Text("START OVER", me.game.viewport.width/2 - 30, me.game.viewport.height - 5, 100, 100, 0.7, "font-putih-export");
        this.addChild(this.textRetry);

       /* this.textShare = new game.HUD.Text("SHARE", me.game.viewport.width/2, me.game.viewport.height - 5, 100, 100, 0.7, "font-putih-export");
        this.addChild(this.textShare);

        this.textContinue = new game.HUD.Text("CONTINUE", me.game.viewport.width/2 + 170, me.game.viewport.height - 5, 100, 100, 0.7, "font-putih-export");
        this.addChild(this.textContinue);*/

        this.scoreDone =  new game.HUD.FinalScore(game.data.done, me.game.viewport.width/2 + 50, 130, 100, 100, 2.2, "font-merah-export");
        this.addChild(this.scoreDone);

        this.Text7 = new game.HUD.Text("YOU REACHED THE TITLE", me.game.viewport.width/2 - 150, 650, 100, 100, 0.5, bitmapFont);
        this.addChild(this.Text7);

        this.Text8 = new game.HUD.Text(level, me.game.viewport.width/2 - this.posXfont(level), 680, 100, 100, 1, bitmapFont);
        this.addChild(this.Text8);

        this.Text9 = new game.HUD.Text("NEW C.E.O UNLOCKED", me.game.viewport.width/2 - 115, 770, 100, 100, 0.5, bitmapFont);
        this.addChild(this.Text9);

        this.selected = false;
        this.hover = false;
        // to memorize where we grab the shape
        this.grabOffset = new me.Vector2d(0,0);

        this.isDragable = true;

    },

    posXfont: function(level){
        switch(level){
            case "pony":
                return 40;
                break;
            case "centaur":
                return 100;
                break;
            default:
                return 90;
        }
    },

    update : function(dt) {
        this._super(me.Container, "update", [ dt ]);
        return true;
    }
});