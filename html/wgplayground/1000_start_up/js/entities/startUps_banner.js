game.UI = game.UI || {};

game.UI.StartUps = me.Container.extend({
    init: function(x, y, width, height){

        this._super(me.Container, 'init', [x, y, width, height]);

        this.isPersistent = true;

        this.floating = true;

        this.anchorPoint.set(0.5, 0.5);

        this.name = "Panel StartUps";

        this.bg = new game.backgroundRectangle(
            // x
            me.game.viewport.width/2, 
            // y
            me.game.viewport.height/2 - 300, 
            // width
            me.game.viewport.width, 
            // height
            me.game.viewport.height/2 - 350
            );
        this.addChild(this.bg);

        this.dataDone = new game.HUD.FinalScore(
            game.data.done, 
            me.game.viewport.width/2 + 50, 
            me.game.viewport.height/2 - 430, 
            100, 100, 2.5, "font-merah-export"
            );
        this.addChild(this.dataDone);

        this.textStartUps = new game.HUD.Text(
            "START-UPS",
            me.game.viewport.width/2 - 110,
            me.game.viewport.height/2 - 210, 
            100, 100, 1.5, "font-putih-export"
            );
        this.addChild(this.textStartUps);
    }
});
/***************************************************
            background startups banner
***************************************************/
game.backgroundRectangle = me.Renderable.extend({
    init: function(x, y, width, height){
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this._super(me.Renderable, 'init', [x, y, width, height]);

        this.floating = true;

        this.anchorPoint.set(0.5, 0.5);
    },

    update: function(dt){
        return true;
    },

    draw: function(renderer){
        renderer.setColor('rgba(0, 0, 0, 0.8)')
        renderer.fillRect(this.x, this.y, this.w, this.h)
    }
});