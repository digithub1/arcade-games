(function(){
// Put user code here //
 
//  End of user code  //

game.object.NerdItem = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        let vars = ['heroID'];
        verify(settings, vars);
		game.util.spread(this, settings, vars);
		
        //settings.image = game.textureMap.get('NerdItem' + this.heroID);
        settings.image = game.textureMap.get('UI');
        this.nerdItemInfo = game.controller.data.getDataNerdItemInfo();
        let imageNameList = [];
        
        for(let i in this.nerdItemInfo){
            if(this.nerdItemInfo[i].heroID == this.heroID){
                imageNameList.push(this.nerdItemInfo[i].sprite);
            }
        }
        
        imageNameList.push('common item frame');
        imageNameList.push('spectacular item frame');
        imageNameList.push('atomic item frame');
        imageNameList.push('superb item frame');
        imageNameList.push('radical item frame');
        
        let atlasIndices = game.util.populateAtlasIndices(settings.image, imageNameList);
        game.util.spreadAll(settings, atlasIndices);
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Sprite, 'init', [x, y, settings]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = true;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        for(let i in this.nerdItemInfo){
            if(this.nerdItemInfo[i].heroID == this.heroID){
                let listAnimation = [];
                listAnimation.push({name : this.nerdItemInfo[i].sprite, delay : 100});
                this.addAnimation(this.nerdItemInfo[i].id, listAnimation);
            }
        }
        
        this.addAnimation('common empty', [{name : 'common item frame', delay : 100}]);
        this.addAnimation('atomic empty', [{name : 'atomic item frame', delay : 100}]);
        this.addAnimation('superb empty', [{name : 'superb item frame', delay : 100}]);
        this.addAnimation('radical empty', [{name : 'radical item frame', delay : 100}]);
        this.addAnimation('spectacular empty', [{name : 'spectacular item frame', delay : 100}]);
        
        this.setCurrentAnimation('common empty');
        this.id = 'common empty';
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        
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

		me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
        // Put user code here //
        
        //  End of user code  //
	},

	onClick : function(pointer) {
        // Put user code here //
        this.Click();
        //  End of user code  //
	},

    // Put user code here //
    Click : function(){
        if(this.alpha == 1){
            this.container.SelectItem(this.id);
            if(this.upgradeAble != undefined){
                me.audio.play('sfx-button', false);
                if(this.upgradeAble == true){
                    this.container.upgradeBtn.setCurrentAnimation('idle');
                    this.container.upgradeItemID = this.upgradeItemID;
                }
                else if(this.upgradeAble == false){
                    this.container.upgradeBtn.setCurrentAnimation('disable');
                }
            }
        }
    }
        
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();