/**
 * Player Entity
 */
game.PlayerEntity = me.Entity.extend({
  /**
   * constructor
   */
  init : function (x, y, settings) {
    // call the constructor
    this._super(me.Entity, 'init', [x, y, {
            width: 60, // 60
            height: 90, //90
    }]);

    this.name = "mainPlayer";

    this.alwaysUpdate = true;

    this.anchorPoint.set(0.5, 0.5);

    this.floating = true;

    this.body.gravity = 0;

    this.body.vel.y = 0;

    this.renderable = game.texture.assets.createAnimationFromName(
        ["stand_"+game.char, "jump_"+game.char, "fall_"+game.char]
    );
    
    this.renderable.addAnimation( "stand", [0] );
    this.renderable.addAnimation( "jump", [1] );
    this.renderable.addAnimation( "fall", [2] );

    this.renderable.currentTransform.translate(0, 30);
    this.renderable.anchorPoint.set(0.5, 0.5);

    this.changeAnimation("stand");

    this.i = 0;

    this.dirY = 0;

    this.isTweenDone = false;

    this.gameStart = false;

    this.jumpTimes = game.nextJumpTimes;

    this.nextSegment = 0;

    this.click = false;

    this.end = false;

    this.flip = false;

    this.gameover = false;

    //set Limit movement player
    this.maxX = me.game.viewport.width - this.width;

    this.initX = this.pos.x - 200;

  },
  
    /*
    * update the player pos
    */
    update : function (dt) {

        // UI game over
        if(!this.alive && !this.end){
            this.end = true;
            me.state.current().UI_GameOver();
        }

        if (me.input.isKeyPressed('turnForBtn')) {
            this.i++;
            this.gameStart = true;
        }

        if (me.input.isKeyPressed('turn')) {
            this.gameStart = true;
        }

        if (this.gameStart) {
            //console.log(this.i);
            game.flipX = this.i;
            if (this.i%2 == 0) {
                this.renderable.flipX(false);
            }
            else{
                this.renderable.flipX(true);
            }
        }

        // apply physics to the body (this moves the entity)
        this.body.update(dt);

        // return true if we moved or if the renderable was updated
        this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0;

        return true;
    },

    startJump : function(){
        var _this   = this;
        var blok    = me.state.current().managerContainer;
        var dirY    = Math.ceil((blok.pos.y / 10) * 10) + 58;//55
        this.dirY   = dirY;
        var blokY   = blok.pos.y;
        var speed   = parseInt(game.speed);
        var dirX    = (this.flip) ? this.pos.x+100 : this.pos.x-100;
        // move horizontal
        var tween = new me.Tween(this.pos).to({x:dirX}, speed)
                    .onUpdate(function(){
                        var posX = Math.ceil(this.pos.x);
                            this.nextSegment = this.initX + (game.pattern[this.jumpTimes]*100);
                        if (this.nextSegment < dirX || this.nextSegment > dirX ) {
                            tween.stop();
                            this.gameOver();
                        }else {
                            if ( Math.round(Math.abs(dirX - this.pos.x)) >= 90 || Math.round(Math.abs(dirX - this.pos.x)) <= 10 ) {
                                this.changeAnimation("stand");
                            }else {
                                this.changeAnimation("jump");
                            }
                        }
                    }.bind(this))
                    .onComplete(function(){
                        var limit = me.game.viewport.width/2 - 200;
                        if (dirX < limit - 100 || dirX > 500 + limit) {
                           tween.stop();
                           this.gameOver();
                        }else{
                            me.audio.play("Jump_char-01");
                            game.segment = this.nextSegment;
                            game.currentBlokPos = me.state.current().managerContainer.pos.y;
                            me.state.current().managerContainer.pos.y = blokY + 60; //60
                            _this.startJump();
                            game.score += 200000;
                            game.scoreHUD = this.nFormatter(game.score, 1);
                        }
                        this.click = false;
                        this.jumpTimes += 1;
                        if( game.speed > 100 ){
                            game.speed -= 1;
                        }
                    }.bind(this))
                    .easing(me.Tween.Easing.Linear.None)
                    .start();
        //tween Blok
        var tweenBlok = new me.Tween(blok.pos).to({y:dirY}, speed+20)
                    .onUpdate(function(){}.bind(this))
                    .onComplete(function(){}.bind(this))
                    .start();
        // move vertical            
        var tweenJump = new me.Tween(this.pos).to({y: me.game.viewport.height/2 + 150}, speed/2);
        tweenJump.easing(me.Tween.Easing.Linear.None);
        tweenJump.onComplete(function(){
            tweenDown = new me.Tween(this.pos).to({y: me.game.viewport.height/2 + 218}, speed/2);
            tweenDown.easing(me.Tween.Easing.Linear.None);
            tweenDown.start(); 
        }.bind(this));
        tweenJump.onUpdate(function(){
            this.pos.y += 1;
        }.bind(this));
        tweenJump.start();
    },

    nFormatter: function(num, digits) {
        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "k" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "G" },
            { value: 1E12, symbol: "T" },
            { value: 1E15, symbol: "P" },
            { value: 1E18, symbol: "E" }
        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
              break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    },

    onCollision: function (response, other) {

        return false;

    },

    gameOver: function () {
        // fall
        self = this;
        this.click = true;
        this.gameover = true;
        this.changeAnimation("fall");
        var dir = (this.flip) ? this.pos.x+100 : this.pos.x-100;
        var tween = new me.Tween(this.pos)
                    .to({y:me.game.viewport.height/2 + 150, x:dir}, 200)
                    .onComplete(function(){
                        self.body.vel.y = 15;
                        self.alive = false;
                        // alpha = 1 >>> alpha = 0
                        var ease = new me.Tween(this.renderable).to({alpha:0}, 500)
                        .easing(me.Tween.Easing.Linear.None)
                        .start();
                        me.audio.play("Fall-SFX");
                    }
                    .bind(this))
                    .interpolation(me.Tween.Interpolation.Bezier)
                    .start();
        me.game.repaint();
    },

    changeAnimation: function(anim){
        if (this.renderable === undefined || !this.renderable.isCurrentAnimation(anim)){
            switch(anim){
                case "stand":
                    
                    this.renderable.setCurrentAnimation("stand");
                break;
                case "jump":
                    
                    this.renderable.setCurrentAnimation("jump");
                break;
                case "fall":
                    
                    this.renderable.setCurrentAnimation("fall");
                break;
            }
        }
    },
});


