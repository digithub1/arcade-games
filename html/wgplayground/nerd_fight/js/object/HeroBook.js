(function(){
// Put user code here //
 
//  End of user code  //

game.object.HeroBook = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Library";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"anya book small","anya book","Chintya book big",
			"Chintya book small","DAVE book BIG","DAVE book SMALL",
			"eugene  book big","eugene book SMALL","MARBLE BOOK BIG",
			"MARBLE BOOK SMALL","MING BOOK BIG","MING BOOK SMALL",
			"NUR book BIG","NUR book SMALL","TIMOTHY BOOK BIG",
			"TIMOTHY BOOK SMALL","locked book"
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

		this.addAnimation('anya small', [{ name: "anya book small", delay: 100 }]);
		this.addAnimation('anya big', [{ name: "anya book", delay: 100 }]);
		this.addAnimation('marble small', [{ name: "MARBLE BOOK SMALL", delay: 100 }]);
		this.addAnimation('marble big', [{ name: "MARBLE BOOK BIG", delay: 100 }]);
		this.addAnimation('ming big', [{ name: "MING BOOK BIG", delay: 100 }]);
		this.addAnimation('ming small', [{ name: "MING BOOK SMALL", delay: 100 }]);
		this.addAnimation('timothy big', [{ name: "TIMOTHY BOOK BIG", delay: 100 }]);
		this.addAnimation('timothy small', [{ name: "TIMOTHY BOOK SMALL", delay: 100 }]);
		this.addAnimation('chintya small', [{ name: "Chintya book small", delay: 100 }]);
		this.addAnimation('chintya big', [{ name: "Chintya book big", delay: 100 }]);
		this.addAnimation('dave big', [{ name: "DAVE book BIG", delay: 100 }]);
		this.addAnimation('dave small', [{ name: "DAVE book SMALL", delay: 100 }]);
		this.addAnimation('eugene big', [{ name: "eugene  book big", delay: 100 }]);
		this.addAnimation('eugene small', [{ name: "eugene book SMALL", delay: 100 }]);
		this.addAnimation('nur big', [{ name: "NUR book BIG", delay: 100 }]);
		this.addAnimation('nur small', [{ name: "NUR book SMALL", delay: 100 }]);
		this.addAnimation('locked', [{ name: "locked book", delay: 100 }]);
		this.setCurrentAnimation('anya small');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        let vars = ['info', 'container'];
        verify(settings, vars);
		game.util.spread(this, settings, vars);
		
		this.press = 'small';
		this.locked = true;
		this.startPosX = this.pos.x;
		let lock = game.user.userData.unlockLibraryHero;
		console.log(game.user.userData.hiredHero[this.info.id]);
		if(lock.includes(this.info.id) || game.user.userData.hiredHero[this.info.id] != undefined){
		   this.locked = false;
		}
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //
        let hero = 'timothy';
        
        if(this.info.id == 'H000'){
            hero = 'timothy';
        }
        else if(this.info.id == 'H001'){
            hero = 'anya';
        }
        else if(this.info.id == 'H002'){
            hero = 'ming';
        }
        else if(this.info.id == 'H003'){
            hero = 'chintya';
        }
        else if(this.info.id == 'H004'){
            hero = 'eugene';
        }
        else if(this.info.id == 'H005'){
            hero = 'marble';
        }
        else if(this.info.id == 'H006'){
            hero = 'dave';
        }
        else if(this.info.id == 'H007'){
            hero = 'nur';
        }
            
        if(this.locked){
            this.setCurrentAnimation('locked');
        }
        else{
            this.setCurrentAnimation(hero + ' ' + this.press);
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
        
        for(let i in this.container.heroBookList){
            game.var.libraryData["bookPos"].push(this.container.heroBookList[i].pos.x);
        }
        
        for(let i in this.container.bookList){
            this.container.bookList[i].press = 'small';
        }
        this.container.currentBook = this;
        this.press = 'big';
        for(let i in this.container.enemyList){
            this.container.enemyList[i].alpha = 0;
        }
        
        let getSkin = game.user.userData.heroSkin[this.info.id] == undefined ? 'default' 
                        :  game.user.userData.heroSkin[this.info.id];
                        
        this.container.ShowHero(this.info.id, 'default', this.info.skinName[0]);
        
        
        let skin = ['superb', 'spectacular', 'radical', 'atomic']; 
        let skinCount = 0;
        if(getSkin == 'superb'){
            skinCount = 1;
        }
        else if(getSkin == 'spectacular'){
            skinCount = 2;
        }
        else if(getSkin == 'radical'){
            skinCount = 3;
        }
        else if(getSkin == 'atomic'){
            skinCount = 4;
        }
        
        for(let i in this.container.skinIconList){
            this.container.skinIconList[i].alpha = 0;
        }
        
        for(let i = 0; i < 4; i++){
            if(i < skinCount){
                this.container.skinIconList[i].alpha = 1;
            }
            else{
                this.container.skinIconList[i].alpha = 0;
            }
            
            this.container.skinIconList[i].setCurrentAnimation(this.info.id + 'idle' + skin[i]);
            this.container.skinIconList[i].heroID = this.info.id;
            this.container.skinIconList[i].skin = skin[i];
            this.container.skinIconList[i].name = this.info.skinName[i + 1];
        }
        
        this.SetDescription("default");
        this.container.UpdateLimitAtas(this.info.id);
        this.container.textDesc.pos.y = this.container.limitBawah;
    }, 
    
    SetDescription : function(skinName){
        let desc = "";
 
        for(let i in this.info.desc){
            desc += this.info.desc[i] + '\n';
        }
        
        desc += '\n' + "Base Status : "  + '\n';
        desc += "HP : " + this.info.hp + '\n';
        desc += "Attack : " + this.info.atk + '\n';
        desc += "Attack Speed : "  + this.info.atkSpeed + '\n';
        desc += "Defeat Time : "  + this.info.timeOut + '\n';
        desc += "HP Growth : "  + (this.info.hpGrowth  * SKIN_BUFF_HP(skinName))+ '\n';
        desc += "Attack Growth : "  + (this.info.atkGrowth * SKIN_BUFF_ATK(skinName)) + '\n';
        desc += '\n' + "Special :"  + '\n';

        for(let i in this.info.spcDesc){
            desc += this.info.spcDesc[i] + '\n';    
        }
        
        desc += "Special Value : " + this.info.spcValue + '\n';
        desc += "Cooldown : " + this.info.spcCooldown + '\n';
        this.container.textDesc.setText(desc);
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();