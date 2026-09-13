(function () {
    var DEFAULT_MOVE_FORCE = 3,
        DEFAULT_MOVE_FRICTION = 0.4,
        DEFAULT_JUMP_FORCE = 15,
        DEFAULT_GRAVITY = 0.98;
    var callbacks = {
        "move-right": [],
        "move-left": [],
        "move-down": [],
        "jump": [],
        "hit-by-enemy": []
    };
    
    var platformerController = me.plugin.Base.extend({
        init : function(){
            this._super(me.plugin.Base, "init");
        },

        initObjectController : function(obj, moveForce, moveFriction, jumpForce, gravity){
            if(!obj.body) throw "Platformer Control : Given object doesn't have body";

            obj.body.setMaxVelocity(moveForce || DEFAULT_MOVE_FORCE, jumpForce || DEFAULT_JUMP_FORCE);
            obj.body.setFriction(moveFriction || DEFAULT_MOVE_FRICTION, 0);
            obj.body.gravity.y = gravity || DEFAULT_GRAVITY;
        },

        endObjectController : function(obj){
            for(var key in callbacks){
                callbacks[key] = [];
            }
        },

        setControlKey : function(leftKey, rightKey, jumpKey, downKey){
            if(typeof leftKey === "number"){
                me.input.bindKey(leftKey,  "left");
            }

            if(typeof rightKey === "number"){
                me.input.bindKey(rightKey, "right");
            }

            if(typeof jumpKey === "number"){
                me.input.bindKey(jumpKey,    "jump", true);
            }

            if(typeof downKey === "number"){
                me.input.bindKey(downKey,  "down");
            }
        },

        setDoubleJump : function(obj, dblJmp){
            if(dblJmp) obj._multipleJump = 1;
            else obj._multipleJump = null;
        },

        moveLeft : function(obj){
            obj.body.force.x = -obj.body.maxVel.x;
        },

        moveRight : function(obj){
            obj.body.force.x = obj.body.maxVel.x;
        },

        idleMove : function(obj){
            obj.body.force.x = 0;
        },

        jump : function(obj){
            if(!obj._multipleJump){
                if(!obj.body.falling && !obj.body.jumping){
                    obj.body.force.y = -obj.body.maxVel.y;
                }
            }
            else if(obj._multipleJump <= 2) {
                obj.body.force.y = -obj.body.maxVel.y * obj._multipleJump++;
            }
            obj.body.jumping = true;
        },

        idleJump : function(obj){
            obj.body.force.y = 0;
            if(!obj._multipleJump) return;

            if(!obj.body.falling && !obj.body.jumping){
                obj._multipleJump = 1;
            }
            else if(obj.body.falling && obj._multipleJump < 2){
                obj._multipleJump = 2;
            }
        },

        on : function(action, callback){
            callbacks[action].push(callback);
        },

        _call : function(action){
            callbacks[action].forEach( callback => callback() );
        },

        playerUpdate : function(obj){
            if(me.input.isKeyPressed("right")){
                this.moveRight(obj);
                this._call("move-right");
            }
            else if(me.input.isKeyPressed("left")){
                this.moveLeft(obj);
                this._call("move-left");
            }
            else this.idleMove(obj);

            if(me.input.isKeyPressed("jump")){
                this.jump(obj);
                this._call("jump");
            }
            else this.idleJump(obj);
        },

        playerCollision : function(obj, response, other){
            switch(other.body.collisionType){
                case me.collision.types.WORLD_SHAPE: 
                    if (other.type === "polyline") {
                        if (obj.body.falling && !me.input.isKeyPressed("down") &&
                            (response.overlapV.y > 0) && (~~obj.body.vel.y >= ~~response.overlapV.y)
                        ) {
                            response.overlapV.x = 0;
                            return true;
                        }
                        return false;
                    }
                    else if (other.type === "polygon") {
                        response.overlapV.y = Math.abs(response.overlap);
                        response.overlapV.x = 0;
                        return true;
                    }
                    break;
                case me.collision.types.ENEMY_OBJECT:
                    this._call("hit-by-enemy");
                    break;
            }
            return true;
        }
    });

    me.device.onReady(function(){
        me.utils.function.defer(me.plugin.register, null, platformerController, "platformerController");
    });
})();
 