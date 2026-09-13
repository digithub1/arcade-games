(function(){
// Put user code here //
 
//  End of user code  //

game.object.HomeroomUpgradeBtn = me.Sprite.extend({
	init: function(x, y, settings = {}){
		settings.texture = "Homeroom";
		settings.image = game.textureMap.get(settings.texture);
		var tempSprite = game.util.__populateAtlasIndices([
			"homeroom upgrade button","NOT upgrade button","homeroom upgrade pressed"
		], settings);
		settings.framewidth = settings.framewidth || 100;
		settings.frameheight = settings.frameheight || 64;
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

		this.addAnimation('idle', [{ name: "homeroom upgrade button", delay: 100 }]);
		this.addAnimation('disable', [{ name: "NOT upgrade button", delay: 100 }]);
		this.addAnimation('pressed', [{ name: "homeroom upgrade pressed", delay: 100 }]);
		this.setCurrentAnimation('idle');
		this.isKinematic = false;
		this._pointerDownHandler = me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this));
		this.var = {};

        // Put user code here //
        let vars = ['id', 'container'];
        verify(settings, vars);
		game.util.spread(this, settings, vars);
		
		this.name = '';
		this.cost = '';
		let info = game.controller.data.getDataHomeroomInfo();
		for(let i in info){
		    if(info[i].id == this.id){
		        this.name = info[i].name;
		        this.cost = info[i].cost;
		        break;
		    }
		}
		
		
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Sprite, 'update', [dt]);
        // Put user code here //

        if(this.container.maxLvlList[this.id] > this.container.lvlList[this.id]){
            
		    this.alpha = 1;
		}else{
		    this.container.panelList[this.id].icon.alpha = 0;
            this.container.panelList[this.id].priceTxt.alpha = 0;
		    this.alpha = 0;
		}   
		  
		this.CheckCost();
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
        if(game.user.userData.homeroomTutorial > 0){
            if(this.pos.y > 195 && this.pos.y < 512 && this.alpha == 1){
                if(this.isCurrentAnimation('idle')){
                    me.audio.play('sfx-button', false);
                    this.setCurrentAnimation("pressed");
    
                    game.controller.data.upgradeHomeroom(this.id, this.container.lvlList[this.id] + 1, this.totalCost, function(){
                        console.log(game.user.userData.homeroom);
                        this.container.Dialog('upgrade');
                        this.container.lvlList[this.id] ++;
                        this.container.panelList[this.id].nameTxt.setText(this.name + ' ' + this.container.lvlList[this.id]);
                        
                        if(this.id == 'HR000'){
                            for(let i = 0; i < this.container.itemList[this.id].length; i ++){
                                if(i == parseInt(this.container.lvlList[this.id]) - 1){
                                    this.container.itemList[this.id][i].alpha = 1;
                                    this.container.blockWall[i].alpha = 1;
                                }
                                else{
                                    this.container.itemList[this.id][i].alpha = 0;
                                    this.container.blockWall[i].alpha = 0;
                                }
                            }
                        }
                        else if(this.id == 'HR001'){
                            for(let i = 0; i < this.container.itemList[this.id].length; i ++){
                                if(i == parseInt(this.container.lvlList[this.id]) - 1){
                                    this.container.itemList[this.id][i].alpha = 1;
                                }
                                else
                                    this.container.itemList[this.id][i].alpha = 0;
                            }
                        }
                        else{
                            this.container.itemList[this.id].setCurrentAnimation(this.container.lvlList[this.id]);
                        }
                        
                        setTimeout(function() {
                            this.setCurrentAnimation('idle');
                        }.bind(this), 200);
                    }.bind(this));
                }
                else if(this.isCurrentAnimation('disable')){
                    this.container.Dialog('not enough money');
                }
            }
        }
        //  End of user code  //
	},

    // Put user code here //
    CheckCost : function(){
        this.totalCost = this.cost * (Math.pow(3, this.container.lvlList[this.id] - 1));
        this.container.panelList[this.id].priceTxt.setText(this.totalCost);
        
        if(!this.isCurrentAnimation("pressed")){
            if(game.user.userData.candy >= this.totalCost){
                this.setCurrentAnimation('idle');
            }
            else{
                this.setCurrentAnimation('disable');
            }
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();