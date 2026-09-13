(function(){
// Put user code here //
 
//  End of user code  //

game.object.SkinIcon = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.image = settings.image || game.textureMap.get('image')
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        settings.image = game.textureMap.get('Library');
        let heroInfo = game.controller.data.getDataHeroInfo();
        let skin = ['superb', 'atomic', 'radical', 'spectacular']
        let imageNameList = [];
        
        for(let i in heroInfo){
            for(let j in skin){
                imageNameList.push(heroInfo[i].id + ' small ' + skin[j]);
                imageNameList.push(heroInfo[i].id + ' big ' + skin[j]);
            }
        }
        
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
        for(let i in heroInfo){
            for(let j in skin){
                let listAnimation = [];
                listAnimation.push({name : heroInfo[i].id + ' small ' + skin[j], delay : 100});
                this.addAnimation(heroInfo[i].id + 'pressed' + skin[j] , listAnimation);
                
                let listAnimation2 = [];
                listAnimation2.push({name : heroInfo[i].id + ' big ' + skin[j], delay : 100});
                this.addAnimation(heroInfo[i].id + 'idle' + skin[j], listAnimation2);
            }
        }
        
        this.setCurrentAnimation('H000idlesuperb');
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
        let onLoad = this.container.onLoad,
        idle = this.heroID + 'idle' + this.skin;
        if(this.isCurrentAnimation(idle) && this.alpha == 1 && onLoad == false){
            me.audio.play('sfx-button', false);
            this.Show();
        }
        //  End of user code  //
	},

    // Put user code here //
    Show : function(){
        game.var.libraryData["skin"] = this.skin;
        this.container.ShowHero(this.heroID, this.skin, this.name);

        for(let i in this.container.skinIconList){
            this.container.skinIconList[i].setCurrentAnimation
            (this.container.skinIconList[i].heroID + 'idle' + this.container.skinIconList[i].skin);
        }
        
        this.setCurrentAnimation(this.heroID + 'pressed' + this.skin);
        this.container.currentBook.SetDescription(this.skin);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();