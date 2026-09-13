(function(){
// Put user code here //
 
//  End of user code  //

game.object.LibraryEnemyBtn = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Library";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"bullies section2"
		], settings);
		settings.framewidth = settings.framewidth || 262;
		settings.frameheight = settings.frameheight || 104;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
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
        this.alpha = 0;

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
        if(this.btnSprite.isCurrentAnimation('disable') && this.container.onLoad == false){
            me.audio.play('sfx-button', false);
            this.Show();
        }
        //  End of user code  //
	},

    // Put user code here //
    Show : function(){
        game.var.libraryData["category"] = "enemy";
        
        
        this.container.textName.setText(" ");
        this.container.textDesc.setText(" ");
        this.container.HideHero();
        this.btnSprite.setCurrentAnimation('idle');
        this.container.heroBtnSprite.setCurrentAnimation('disable');
            
        for(let i in this.container.heroBookList){
            this.container.heroBookList[i].pos.x = this.container.heroBookList[i].startPosX;
            this.container.heroBookList[i].alpha = 0;
        }
            
        for(let i in this.container.enemyBookList){
            this.container.enemyBookList[i].alpha = 1;
        }
            
        this.container.bookList = this.container.enemyBookList;
        this.container.HideHero();
        
        for(let i in this.container.skinIconList){
            this.container.skinIconList[i].alpha = 0;
        }
            
        for(let i in this.container.bookList){
            if(this.container.bookList[i].locked == false){
                this.container.bookList[i].Show(); break;
            }
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();