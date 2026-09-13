game.Base = me.Entity.extend({
    init: function(x, y, images) {
        var settings = {};
        settings.image = game.texture.assets2;
        settings.region = images;
        settings.width = 827;
        settings.height = 631;

        this._super(me.Entity, "init", [x, y, settings]);

        this.body.gravity = 0;

        this.body.vel.y = 0;

        this.anchorPoint.set(0.5, 0.5);

        this.renderable = game.texture.assets2.createAnimationFromName([images]);

        this.alwaysUpdate = true;

        this.gameStart = false; 

    },

    update : function (dt) {
        this.body.update(dt);

        if(this.gameStart){
            this.body.vel.y = 2;
        }else{
            this.body.vel.y = 0;
        }

        if(this.pos.y >= me.game.viewport.height + 100){
            me.game.world.removeChild(this);
        }

        return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);

    },
});