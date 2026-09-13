game.UI.Loading = me.Container.extend({

    init: function(x, y, width, height) {
        // call the constructor
        this._super(me.Container, "init", [x, y, width, height]);

        //this.anchorPoint.set(0.5, 0.5);

        // persistent across level change
        this.isPersistent = true;

        // make sure our object is always draw first
        this.z = Infinity;

        this.floating = true;

        // give a name
        this.name = "UIPanel";

        var bgLoading = new me.ColorLayer("background", "rgba(0, 0, 0, 0.7)");
        this.addChild(bgLoading,1);

        var loading = me.Entity.extend({
            init: function(){

                this._super(me.Entity, 'init', [me.game.viewport.width/2, me.game.viewport.height/2, { width: 128, height: 128 }]);

                this.name = "loading";

                this.renderable = game.texture.loading.createAnimationFromName(
                    ['loading_1', 'loading_2', 'loading_3', 'loading_4', 'loading_5', 'loading_6', 'loading_7', 'loading_8']);
                this.renderable.pos.x = me.game.viewport.width/2 - 75;
                this.renderable.pos.y = me.game.viewport.height/2 -75;
                this.renderable.addAnimation("loading", [0,1,2,3,4,5,6,7], 100);
                this.renderable.setCurrentAnimation("loading");
            }
        });

        this.addChild(new loading);
        this.alpha = 0;

    },

    showLoading: function() {
        this.alpha = 1;
        game.isLoading = true;
    }, 

    hideLoading: function() {
        this.alpha = 0;
        game.isLoading = false;
    },

    // update function
    update : function(dt) {
        return this._super(me.Container, "update", [ dt ]);
        //return true;
    }
});