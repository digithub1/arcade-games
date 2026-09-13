// Put user code here //
game.template.hero = {
    init: function(x, y, settings = {}){
        game.util.spread(this, settings, ["healthUI", "skill"]);
        verify(settings, ["animationMotions"]);
        
        this._isRecall = false;
        this.recallFunction = function(){};
        this.recallTime = 0;
        this.recallEffect = null;
        
        let id = settings.id;
        if(settings.skin) settings.id += `_${settings.skin}`;
        
        this._super(this.superClass, 'init', [x, y, settings]);
        this.component.skill = me.pool.pull("game.component.skill", this);
        
        // skin animation key
        this.id = id;
        impose(settings, "skin", "");
        this.skin = settings.skin;
        if(this.skin !== ""){
            this.animationKey = me.pool.pull("game.class.animationKey", ["id", "skin", "side", "motion"], "_");
            this.animationKey.id = this.id;
            this.animationKey.skin = this.skin;
            this.animationKey.side = game.util.getUnitSide(this.isPlayerSide);
        }
        // --
        
        Object.defineProperties(this, {
            'currentSkill': {
                set: val => {this.component.skill._currentSkill = val;},
                get: () => this.component.skill._currentSkill,
                configurable: true
            },
            'isRecall': {
                set: (val) => {
                    this._isRecall = val;
                    if(val === false && this.recallEffect !== null){
                        this.recallEffect.destroyed();
                        this.recallEffect = null;
                    }
                },
                get: () => this._isRecall,
                configurable: true
            }
        });
        
        this.stunFunction = this.component.effect.stun.bind(this.component.effect);
        Object.defineProperty(this.component.effect, 'stun', {
            value: (data) => {
                let eff = this.stunFunction(data);
                this.isRecall = false;
                this.component.skill.resetSkill();
                this.atkFrameList = game.data.hero.find(hero => hero.id === this.id).atkFrameList;
                return eff;
            },
            configurable: true
            
        });
        
        if(!this.isPlayerSide) this.skillTime = 0;
    },
    
    update: function(dt){
        this._super(this.superClass, 'update', [dt]);
        if(this._isRecall){
            this.recallTime += dt;
        }else if(!this.isPlayerSide && this.isAttacking){
            if(this.skillTime > 3000){
                let rand = Math.random() * 100,
                    index = game.data.heroSkillChance.findIndex(val => val > rand);
                    
                this.currentSkill = index + 1;
                this.skillTime = 0;
            }else{
                this.skillTime += dt;
            }
        }
    },
    
    destroyedNow: function(){
        if(this.isPlayerSide) me.state.current().battleUI.heroDead();
        this.isRecall = false;
        
        // reset the stun function
        Object.defineProperty(this.component.effect, 'stun', {
            value: this.stunFunction.bind(this.component.effect),
            configurable: true
        });
        me.timer.clearInterval(this.heroIntervalId);
        this._super(this.superClass, 'destroyedNow');
    },
    
    hit: function(damage){
        if(this.isPlayerSide) this.healthUI.addValue(-damage);
        this._super(this.superClass, 'hit', [damage]);
    },
    
    ifRecall: function(){
        return this._isRecall;
    },
    
    doRecall: function(){
        this.component.move.stopMovement();
        if(this.changeAnimation("recall", () => false)){
            me.audio.play("hero_teleport", false, null, game.data.dynamic.sound.SFX);
            this.recallEffect = me.pool.pull("game.component.effectItem", this, 
                game.enum.effect.RECALL, {duration: HERO_RECALL_TIME});
        }
        
        if(this.recallTime >= HERO_RECALL_TIME * 1000){
            this.recallFunction();
            this.isRecall = false;
            this.recallTime = 0;
        }
        return true;
    },
    
    recall: function(lane, pos, path, tilerenderer){
        if(!this._isRecall){
            // console.log("hero " + this.id, "recall to lane", lane);
            this._isRecall = true;
            this.recallFunction = () => {
                this._recall(lane, pos, path, tilerenderer);
            };
        }
    },
    
    _recall: function(lane, pos, path, tilerenderer){
        this.lane = lane;
        this.target = null;
        
        this.pos.x = pos.x;
        this.pos.y = pos.y;
        this.setPath(path, tilerenderer);
    },
    
    spawnProjectile: function(projectileType, damage, gunpoint, target, destination, callback){
        let name = "projectile" + projectileType.capitalize(),
            gunpointPos = gunpoint[this.currentSide()],
            projectile = me.pool.pull(name, 
                this.pos.x + gunpointPos.x * (this._flip.x ? -1 : 1),
                this.pos.y + gunpointPos.y, {
                target: target,
                destination: destination,
                damage: damage,
                side: this.side,
                callback: callback
            });
        me.game.world.addChild(projectile, game.enum.layer.BATTLE_PROJECTILE);
    },
    
    skillSequence: function(){ return this.component.skill.skillSequence(); },
    skill1: function(){},
    skill2: function(){},
    skill3: function(){},
    skill1Update: function(){},
    skill2Update: function(){},
    skill3Update: function(){}
};
//  End of user code  //
