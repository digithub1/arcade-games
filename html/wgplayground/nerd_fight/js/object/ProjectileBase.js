(function(){
// Put user code here //
 
//  End of user code  //

game.object.ProjectileBase = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        this.id = settings.id;
        this.folder = settings.folder;
        this.animationMotions = settings.animationMotions;
        settings.image = game.textureMap.get(this.folder);

        this.listAnimation = [];
        let animationKeyList = {}, // for add animation, motion with imageNameList
            imageNameList = [],
            fullMotions = game.util.getFullMotionList(this.id, this.animationMotions);
            
        fullMotions.forEach((motion) => {
            let imageNames = game.util.createImageNameList(motion.name, motion.count);
            animationKeyList[motion.name] = imageNames;
            this.listAnimation.push(imageNames);
            Array.prototype.push.apply(imageNameList, imageNames);
        });
        
        
        let atlasIndices = game.util.populateAtlasIndices(settings.image, imageNameList);
        game.util.spreadAll(settings, atlasIndices);
		//
		this.originX = x;
        this.originY = y;
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.var = {};

        // Put user code here //
        
        //
        this.addAnimation('idle', this.listAnimation[0]);
        this.dmg = 10;
        this.hitEff = null;
        this.targetLayer = this.pos.z;
        
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        if(this.pos.x > me.game.viewport.width / 2){
            this.pos.set(this.pos.x, this.pos.y, this.targetLayer + 1);
            
        }
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
        
        //  End of user code  //
	},

    // Put user code here //
    Launch : function(targetPos){
        if(this.eff != undefined){
            this.eff.pos.set(this.pos.x, this.pos.y, this.targetLayer);
        }
        
        this.targetPos = targetPos;
        let posUp = 0,
            time = (Math.abs(this.pos.x - targetPos.x) / 500) * 250, 
            height = 100;
        
        if(this.pos.y >= targetPos.y){
            posUp = targetPos.y - height;
        }
        else{
            posUp = this.pos.y - height;
        }
        
        this.tweenX = new me.Tween(this.pos).to({x : targetPos.x}, time);
        this.tweenUp = new me.Tween(this.pos).to({y : posUp}, time / 2).onComplete(function(){
            let tweenDown = new me.Tween(this.pos).to({y : targetPos.y}, time / 2).onComplete(function(){
                this.pos.x = this.targetPos.x;
                this.tweenX.stop();
                this.SpawnEff();
                this.Attack();
                this.alpha = 0;
            }.bind(this));
            tweenDown.easing(me.Tween.Easing.Sinusoidal.In);
            tweenDown.start();
        }.bind(this));
        this.tweenUp.easing(me.Tween.Easing.Sinusoidal.Out);
        
        this.tweenUp.start();
        this.tweenX.start();
    },
    
    Attack : function(){
        if(game.var.enemyMngr.aliveList.includes(this.target))
           game.var.enemyMngr.list[this.target].Hit(this.dmg); 
    },
    
    SpawnEff : function(){
        if(this.hitEff != null){
                this.eff.pos.set(this.pos.x, this.pos.y, 1);
                this.eff.alpha = 1;
                this.eff.setAnimationFrame(0);
                this.eff.setCurrentAnimation('idle', function(){
                    this.eff.setCurrentAnimation("stop");
                    this.eff.alpha = 0;
                    //return false;
                }.bind(this));
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();