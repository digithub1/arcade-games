(function(){
// Put user code here //
 
//  End of user code  //

game.object.EnemyBook = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Library";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"Abe books","bella books","Bono books",
			"Carrie books","Chad book","coach edwin books",
			"Drake book","Eben book","Edward books",
			"Elle book","eric book","Jhonny book",
			"Joe book","Johan books","mark books",
			"Megan book","Miley books","Ms Crawly books",
			"Sasha book","Shelly book","locked book"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 100;
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

		this.addAnimation('abe', [{ name: "Abe books", delay: 100 }]);
		this.addAnimation('bella', [{ name: "bella books", delay: 100 }]);
		this.addAnimation('bono', [{ name: "Bono books", delay: 100 }]);
		this.addAnimation('carrie', [{ name: "Carrie books", delay: 100 }]);
		this.addAnimation('chad', [{ name: "Chad book", delay: 100 }]);
		this.addAnimation('drake', [{ name: "Drake book", delay: 100 }]);
		this.addAnimation('eben', [{ name: "Eben book", delay: 100 }]);
		this.addAnimation('edward', [{ name: "Edward books", delay: 100 }]);
		this.addAnimation('eric', [{ name: "eric book", delay: 100 }]);
		this.addAnimation('joe', [{ name: "Joe book", delay: 100 }]);
		this.addAnimation('johan', [{ name: "Johan books", delay: 100 }]);
		this.addAnimation('mark', [{ name: "mark books", delay: 100 }]);
		this.addAnimation('megan', [{ name: "Megan book", delay: 100 }]);
		this.addAnimation('miley', [{ name: "Miley books", delay: 100 }]);
		this.addAnimation('mscrawly', [{ name: "Ms Crawly books", delay: 100 }]);
		this.addAnimation('sasha', [{ name: "Sasha book", delay: 100 }]);
		this.addAnimation('shelly', [{ name: "Shelly book", delay: 100 }]);
		this.addAnimation('locked', [{ name: "locked book", delay: 100 }]);
		this.addAnimation('johnny', [{ name: "Jhonny book", delay: 100 }]);
		this.addAnimation('edwin', [{ name: "coach edwin books", delay: 100 }]);
		this.addAnimation('ellie', [{ name: "Elle book", delay: 100 }]);
		this.setCurrentAnimation('abe');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        let vars = ['info', 'container'];
        verify(settings, vars);
		game.util.spread(this, settings, vars);
		
		//this.press = 'small';
		this.locked = true;
		this.startPosX = this.pos.x;
		let lock = game.user.userData.unlockLibraryEnemy;
		if(lock.includes(this.info.id)){
		   this.locked = false;
		}
		
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        let enemy = 'johnny';
        
        if(this.info.id == 'E000'){
            enemy = 'johnny';
        }
        else if(this.info.id == 'E001'){
            enemy = 'joe';
        }
        else if(this.info.id == 'E002'){
            enemy = 'megan';
        }
        else if(this.info.id == 'E003'){
            enemy = 'shelly';
        }
        else if(this.info.id == 'E004'){
            enemy = 'carrie';
        }
        else if(this.info.id == 'E005'){
            enemy = 'abe';
        }
        else if(this.info.id == 'E006'){
            enemy = 'bella';
        }
        else if(this.info.id == 'E007'){
            enemy = 'sasha';
        }
        else if(this.info.id == 'E008'){
            enemy = 'chad';
        }
        else if(this.info.id == 'E009'){
            enemy = 'drake';
        }
        else if(this.info.id == 'E010'){
            enemy = 'eben';
        }
        else if(this.info.id == 'E011'){
            enemy = 'ellie';
        }
        
        else if(this.info.id == 'E012'){
            enemy = 'eric';
        }
        else if(this.info.id == 'E013'){
            enemy = 'bono';
        }
        else if(this.info.id == 'EB000'){
            enemy = 'miley';
        }
        else if(this.info.id == 'EB001'){
            enemy = 'mscrawly';
        }
        else if(this.info.id == 'EB002'){
            enemy = 'johan';
        }
        else if(this.info.id == 'EB003'){
            enemy = 'edward';
        }
        else if(this.info.id == 'EB004'){
            enemy = 'mark';
        }
        else if(this.info.id == 'EB005'){
            enemy = 'edwin';
        }
            
        if(this.locked){
            this.setCurrentAnimation('locked');
        }
        else{
            this.setCurrentAnimation(enemy);
        }
        
        if(this.pos.x < 220 && this.pos.x > 1587){
            this.alpha = 0;
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

		me.input.releasePointerEvent("pointerdown", this, this._pointerDownHandler);
        // Put user code here //
        
        //  End of user code  //
	},

	onClick : function(pointer) {
        // Put user code here //
        if(this.locked == false && this.pos.x > 240 && this.pos.x < 1547 && this.alpha == 1){
            if(this.container.onLoad == false){
                me.audio.play('sfx-button', false);
                this.Show();
            }
        }
        //  End of user code  //
	},

    // Put user code here //
    Show : function(){
        game.var.libraryData["bookIndex"] = this.index;
        game.var.libraryData["bookPos"] = [];
        game.var.libraryData["skin"] = "";
        for(let i in this.container.enemyBookList){
            game.var.libraryData["bookPos"].push(this.container.enemyBookList[i].pos.x);
        }
        
        for(let i in this.container.heroBookList){
            this.container.heroBookList[i].alpha = 0;
        }
        
        this.container.ShowEnemy(this.info.id);
        this.container.textName.setText(this.info.name);
        
        let desc = "";
        for(let i in this.info.desc){
            desc += this.info.desc[i] + '\n';
        }
        
        desc += '\n' + "Base Status : "  + '\n';
        desc += "HP : " + this.info.hp + '\n';
        desc += "Attack : " + this.info.atk + '\n';
        desc += "Level : "  + this.info.difficulty + '\n';
        
        if(this.info.type == "boss"){
            desc += "Special Value : " + this.info.spcValue + '\n';
            desc += "Cooldown : " + this.info.spcCooldown + '\n';
        }
        
        this.container.textDesc.setText(desc);
        
        this.container.UpdateLimitAtas(this.info.id);
        this.container.textDesc.pos.y = this.container.limitBawah;
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();