game.Base = me.Entity.extend({
    init: function(x, y, images) {
        var settings = {};
        settings.image = game.texture.assets2;
        settings.region = images;
        settings.width = 827;
        settings.height = 631;

        this._super(me.Entity, "init", [x, y, settings]);

        this.anchorPoint.set(0.5, 0.5);

        this.renderable = game.texture.assets2.createAnimationFromName([images]);

        this.body.setVelocity(0, 0);

        this.alwaysUpdate = true;

        this.gameStart = false; 

    },

    update : function (dt) {
        this.body.update(dt);

        if(this.gameStart) this.body.setVelocity(0, 2);

        this.body.vel.y += this.body.maxVel.y * me.timer.tick;

        if(this.pos.y >= me.game.viewport.height + 100){
            me.game.world.removeChild(this);
        }

        return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);

    },
});

game.BlockEntity = me.Entity.extend({
    // call the constructor
    init:function (x, y) {
        var settings = {};
        settings.image = game.texture.assets2;
        settings.region = 'block1';
        settings.width = 100;
        settings.height = 58;

        this._super(me.Entity, "init", [x, y, settings]);

        this.body.gravity = 0;

        this.alwaysUpdate = true;

        this.renderable = game.texture.assets2.createAnimationFromName(["block1"]);

        this.name = 'Block';

        this.floating = false;

        this.anchorPoint.set(0.5, 0.5);

        this.gameStart = false;

    },

    /**
     * update the entity
     */
    update : function (dt) {

        // apply physics to the body (this moves the entity)
        this.body.update(dt);

        if(this.pos.y + this.ancestor.pos.y > me.game.viewport.height){
            this.ancestor.removeChild(this);
        }

        // return true if we moved or if the renderable was updated
        return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
    },

    /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision : function (response, other) {
        return false;
    },
});

game.ManagerBlok = me.Container.extend({
    init: function(){
        this._super(me.Container, 'init');

        this.lastPosition = me.game.viewport.height - 320;

        this.isPersistent = true;

        this.floating = true;

        this.alwaysUpdate = true;

        this.anchorPoint.set(0.5, 0.5);

        this.typePattern = 0;
        
        this.firstSpawn();

        this.gameStart = false;

        this.time = 0;

        this.historiesBlock = [];

    },

    firstSpawn: function(){
        for(i=0; i<pattern.data_4[this.typePattern].length; i++){
            var dataPattern = pattern.data_4[this.typePattern][i];
            game.pattern.push(dataPattern);
            this.firstBlock = me.pool.pull("Block", ( me.game.viewport.width/2 - 250 + (dataPattern * 100)), (this.lastPosition) - 60);
            this.addChild(this.firstBlock, 3);
            this.lastPosition = this.firstBlock.pos.y;
        }
        this.SpawnBlock();
    },

    SpawnBlock: function(){
        this.typePattern = this.getRandom();
        for(i=0; i<pattern.data_4[this.typePattern].length; i++){
            var dataPattern = pattern.data_4[this.typePattern][i];
            game.pattern.push(dataPattern);
            this.firstBlock = me.pool.pull("Block", ( me.game.viewport.width/2 - 250 + (dataPattern * 100)), (this.lastPosition) - 60);
            this.addChild(this.firstBlock, 3);
            this.lastPosition = this.firstBlock.pos.y;
        }
    },

    removeBlock : function(){
        for(i=0; i<pattern.data_4[this.typePattern].length; i++){
            this.removeChild(this.historiesBlock[i]);
        }
    },

    getRandom: function(){
        var length = pattern.data_4.length;
        var pola = Math.floor(Math.random() * length);
        return pola;
    },

    update: function(dt){

        this.lastPosition = this.firstBlock.pos.y;
        
        if(this.children[this.children.length - 1]._absPos.y > -50){
            this.SpawnBlock();
        }

        me.Rect.prototype.updateBounds.apply(this);

        this._super(me.Container, 'update', [dt]);

        return true;
    }
});