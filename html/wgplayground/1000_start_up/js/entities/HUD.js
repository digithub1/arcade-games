/**
 * a HUD container and child items
 */
game.HUD = game.HUD || {};


game.HUD.Container = me.Container.extend({
  init: function() {
      // call the constructor
      this._super(me.Container, 'init');

      // persistent across level change
      this.isPersistent = true;

      // make sure we use screen coordinates
      this.floating = true;

      // give a name
      this.name = "HUD";

      // add our child score object at the top left corner
      this.addChild(new game.HUD.ScoreItem(-10, -20));
  }
});

/**
 * a basic HUD item to display score
 */
game.HUD.FinalScore = me.Renderable.extend({
  /**
   * constructor
   */
  init: function(text, x, y, width, height, size, bitmapFont) {

      // call the parent constructor
      // (size does not matter here)
        this._super(me.Renderable, 'init', [x, y, width, height]);

        this.floating = true;

        this.font = new me.BitmapFont(me.loader.getBinary(bitmapFont), me.loader.getImage(bitmapFont), size);

        this.Text = text;

        // local copy of the global score
        this.score = -1;

        this.widthText = this.font.measureText(text);
  },

  /**
   * update function
   */
  update : function () {
      // we don't do anything fancy here, so just
      // return true if the score has been updated
      if (this.score !== game.score) {
          this.score = game.score;

          return true;
      }
      return false;
  },

  /**
   * draw the score
   */
  draw : function (renderer) {
      this.font.draw (renderer, this.Text, this.pos.x - this.widthText.width/2, this.pos.y);
  }
});

game.HUD.Text = me.Renderable.extend( {
    /**
     * constructor
     */
    init: function(text, x, y, width, height, size, bitmapFont) {

        this._super(me.Renderable, "init", [x, y, width, height]);

        this.floating = true;

        this.font = new me.BitmapFont(me.loader.getBinary(bitmapFont), me.loader.getImage(bitmapFont), size);

        this.Text = text;        
    },

    /**
     * draw the score
     */
    draw : function (renderer) {
        this.font.draw (renderer, this.Text, this.pos.x, this.pos.y);
    }

});

game.HUD.TextLogo = me.Renderable.extend( {
    /**
     * constructor
     * for Join Text logo,
     * example : made by unicorn + (pic logo)
     */
    init: function(text, x, y, width, height, size, bitmapFont) {

        this._super(me.Renderable, "init", [x, y, width, height]);

        this.floating = true;

        this.font = new me.BitmapFont(me.loader.getBinary(bitmapFont), me.loader.getImage(bitmapFont), size);

        this.Text = text;

        this.widthText = this.font.measureText(this.Text).width; 

        this.heightText = this.font.measureText(this.Text).height;

        this.Images = me.loader.getImage("logo altermyth");
    },

    /**
     * draw the score
     */
    draw : function (renderer) {

        this.font.draw (renderer, this.Text, this.pos.x - this.widthText/2, this.pos.y + this.heightText/2);

        renderer.drawImage(this.Images, this.pos.x + this.widthText/2, this.pos.y);        

    }

});

/**
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend( {
  /**
   * constructor
   */
  init : function (x, y) {
    // call the parent constructor
    // (size does not matter here)
    this._super(me.Renderable, 'init', [x, y, 10, 500]);

    // create the font object
    this.font = new me.BitmapFont(me.loader.getBinary('font-putih-export'), me.loader.getImage('font-putih-export'));

    // font alignment to right, bottom
    this.font.textAlign = "right";
    this.font.textBaseline = "bottom";

    // local copy of the global score
    this.score = -1;
    this.name = "score";
  },
  /**
   * update function
   */
  update : function (dt) {
    // we don't draw anything fancy here, so just
    // return true if the score has been updated
    if (this.score !== game.score) {
      this.score = game.score;
      return true;
    }

    this._super(me.Renderable, "update", [dt]);
    return false;
  },
  /**
   * draw the score
   */
  draw : function (renderer) {
        // this.pos.x, this.pos.y are the relative position from the screen right bottom
        this.font.draw (renderer, game.scoreHUD, me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y);
  }
}); 

game.HUD.Countdown = me.Renderable.extend({
  init : function(x, y){

    this._super(me.Renderable, 'init', [x, y, 100, 100]);

    this.isPersistent = true;

    this.floating = true;

    this.alwaysUpdate = true;

    this.font = new me.BitmapFont(me.loader.getBinary('font-putih-export'), me.loader.getImage('font-putih-export'), 3);
    this.font.textAlign = "center";
    this.font.textBaseline = "bottom";

    this.Countdown = 3;

    this.time = 0;

    this.isFinish = false;

  },

  update: function(dt){

    if(this.isFinish) return;

    this.time += dt;
    if(this.time >= 1000){
      this.time = 0;
      this.Countdown -= 1;
    }

    if(this.Countdown <= 0){
      this.isFinish = true;
      me.game.world.removeChild(this);
      me.state.current().Player.startJump();
      me.state.current().Base.gameStart = true;
      game.isCountdown = false;
    }

    this._super(me.Renderable, 'update', [dt]);

    return true;

  },

  draw: function(renderer){
    this.font.draw(renderer, this.Countdown, me.game.viewport.width/2 + 50, 150);
  }
});
