(function(){
// Put user code here //
 
//  End of user code  //

game.object.ItemContainer = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		x += me.game.viewport.width*0.5;
		y += me.game.viewport.height*0.5;
		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = true;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        this.heroInfo = game.controller.data.getDataHeroInfo();
        this.nerdItemInfo = game.controller.data.getDataNerdItemInfo();
        this.itemPanel = me.pool.pull('ItemPanel', - 90, 96);
        this.addChild(this.itemPanel, 2);
        
        this.itemList = {};
        this.itemLevelList = []; 
        this.itemNotif = [];
        this.selectedItem = {};
        
        for(let i in this.heroInfo){
            let selected = me.pool.pull('NerdItem', -415, 15, {
                heroID : this.heroInfo[i].id
            });
            this.addChild(selected, 3);
            selected.container = this;
            this.selectedItem[this.heroInfo[i].id] = selected;
            
            
            let list = [];
            for(let j = 0; j < 4; j ++){
                let item = me.pool.pull('NerdItem', -75 + ( j * 158), 150, {
                    heroID : this.heroInfo[i].id
                });
                this.addChild(item, 3);
                list.push(item);
                item.container = this;
                
                this.itemList[this.heroInfo[i].id] = list;
            }
        }
        
        for(let i = 0; i < 4; i ++){
            let itemLevel = me.pool.pull('ItemLevel', -88 + ( i * 66), 268);
            this.addChild(itemLevel, 3);
            this.itemLevelList.push(itemLevel);
            
            let notif = me.pool.pull('ItemNotif', -20 + ( i * 158), 70);
            this.addChild(notif, 4);
            this.itemNotif.push(notif);
            notif.alpha = 0;
        }
        
        this.itemDescPanel = me.pool.pull('ItemDescPanel', -413, 175);
        this.addChild(this.itemDescPanel, 3);
        
        this.itemDescTxt = me.pool.pull('me.BitmapText', -376, 168, {
                                             font: 'NiagaraphobiaWhite',
                                             size : 0.9,
                                             text : 'Tim Favourite Item',
                                             textAlign : 'center',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 0,y: 0}
                                             }); 
        this.addChild(this.itemDescTxt, 4);
        
        this.itemRankTxt = me.pool.pull('me.BitmapText', 173, 62, {
                                             font: 'NiagaraphobiaWhite',
                                             size : 1.4,
                                             text : 'ATOMIC',
                                             textAlign : 'Center',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 0,y: 0}
                                             }); 
        this.addChild(this.itemRankTxt, 3);
        
        this.graduateBtn = me.pool.pull('GraduateButton', 360, 272);
        this.addChild(this.graduateBtn, 3);
        this.graduateBtn.container = this;
        
        this.upgradeBtn = me.pool.pull('UpgradeButton', -415, 272);
        this.addChild(this.upgradeBtn, 3);
        this.upgradeBtn.container = this;
        
        this.upgraded = false;
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
        // Put user code here //
        
        //  End of user code  //
		return drawNextFrame;
	},

	draw : function(renderer, rect) {
		this._super(me.Container, 'draw', [renderer, rect]);
        // Put user code here //
        
        //  End of user code  //
	},

	onActivateEvent : function() {
		this._super(me.Container, 'onActivateEvent');
        // Put user code here //
        
        //  End of user code  //
	},

	onDeactivateEvent : function() {
		this._super(me.Container, 'onDeactivateEvent');

        // Put user code here //
        
        //  End of user code  //
	},

    // Put user code here //
    Show : function(){
        this.itemPanel.alpha = 1;
        this.selectedItem[this.cont.selectedHeroID].alpha = 1;
        this.itemDescPanel.alpha = 1;
        
        for(let i in this.itemNotif){
            this.itemNotif[i].alpha = 0;
    
            let getItemID = [];
            this.nextSkin = 'common';
            
            if(this.cont.getSkin == 'default'){
                this.nextSkin = 'common';
            }else if(this.cont.getSkin == 'common'){
                this.nextSkin = 'superb';
            }else if(this.cont.getSkin == 'superb'){
                this.nextSkin = 'spectacular';
            }else if(this.cont.getSkin == 'spectacular'){
                this.nextSkin = 'radical';
            }else if(this.cont.getSkin == 'radical'){
                this.nextSkin = 'atomic';
            }else if(this.cont.getSkin == 'atomic'){
                this.nextSkin = 'none';
            }
            
            for(let i in this.nerdItemInfo){
                if(this.nerdItemInfo[i].level == this.nextSkin && this.nerdItemInfo[i].heroID == this.cont.selectedHeroID){
                    getItemID.push(this.nerdItemInfo[i].id)
                }
            }
            
            let itemIndex = 0;
            if(this.cont.getSkin == 'default'){
                for(let i in getItemID){
                    this.itemLevelList[itemIndex].alpha = 1;
                    this.itemList[this.cont.selectedHeroID][itemIndex].alpha = 1;
                    if(game.user.userData.nerdItem[getItemID[i]] != undefined){
                        this.itemList[this.cont.selectedHeroID][itemIndex].setCurrentAnimation(getItemID[i]);
                        this.itemList[this.cont.selectedHeroID][itemIndex].id = getItemID[i];
                        this.itemLevelList[itemIndex].setCurrentAnimation(this.nextSkin);
                        this.GetCommonItem(getItemID[i]);
                    }
                    else{
                        this.itemList[this.cont.selectedHeroID][itemIndex].setCurrentAnimation('common empty');
                        this.itemLevelList[itemIndex].setCurrentAnimation('empty');
                        this.itemList[this.cont.selectedHeroID][itemIndex].id = 'common empty';
                    }
                        
                    itemIndex ++;
                }
            }
            else{
                for(let i in game.user.userData.labItem[this.cont.selectedHeroID]){
                    this.itemList[this.cont.selectedHeroID][itemIndex].alpha = 1
                    this.itemLevelList[itemIndex].alpha = 1;
                    this.itemList[this.cont.selectedHeroID][itemIndex].setCurrentAnimation(game.user.userData.labItem[this.cont.selectedHeroID][i]);
                    this.itemList[this.cont.selectedHeroID][itemIndex].id = game.user.userData.labItem[this.cont.selectedHeroID][i];
                    
                    if(this.nextSkin == 'none'){
                        this.itemLevelList[itemIndex].alpha = 0;
                    }else{
                        this.itemLevelList[itemIndex].setCurrentAnimation(this.nextSkin);
                    }
                    
                    itemIndex ++;
                }
            }
            
            this.CheckUpgrade();
            this.itemList[this.cont.selectedHeroID][0].Click();
            
            this.SelectItem(this.itemList[this.cont.selectedHeroID][0].id);
           
            this.graduateBtn.alpha = 1;
            this.upgradeBtn.alpha = 1;
            
            this.graduateBtn.setCurrentAnimation('idle');
            
            for(let i in this.itemLevelList){
                if(this.itemLevelList[i].isCurrentAnimation('empty')){
                    this.graduateBtn.setCurrentAnimation('disable');
                }
            }
        }
    },
    
    Hide : function(){
        this.itemPanel.alpha = 0;
        this.itemDescPanel.alpha = 0;
        
        for(let i in this.selectedItem){
            this.selectedItem[i].alpha = 0; 
        }
        
        for(let i in this.itemList){
            for(let j = 0; j < 4; j++){
                this.itemList[i][j].alpha = 0;
            }
        }
        
        for(let i = 0; i < 4; i++){
            this.itemLevelList[i].alpha = 0;
            this.itemNotif[i].alpha = 0;
        }
        
        this.itemDescTxt.setText(' ');
        this.itemRankTxt.setText(' ');
        this.graduateBtn.alpha = 0;
        this.upgradeBtn.alpha = 0;
    },
    
    SelectItem : function(id){
        this.selectedItemID = id;
        this.selectedItem[this.cont.selectedHeroID].setCurrentAnimation(id);
        
        let desc = '', getDesc = [];
        for(let i in this.nerdItemInfo){
            if(this.nerdItemInfo[i].id == id){
                getDesc = this.nerdItemInfo[i].desc; break;
            }
        }
        
        for(let i in getDesc){
            desc += getDesc[i] + '\n';
        }
        
        this.itemDescTxt.setText(desc);
        if(this.cont.getSkin == 'default'){
            this.itemRankTxt.setText('DEFAULT');
        }
        else if(this.cont.getSkin == 'common'){
            this.itemRankTxt.setText('COMMON');
        }
        else if(this.cont.getSkin == 'radical'){
            this.itemRankTxt.setText('RADICAL');
        }else if(this.cont.getSkin == 'superb'){
            this.itemRankTxt.setText('SUPERB');
        }
        else if(this.cont.getSkin == 'spectacular'){
            this.itemRankTxt.setText('SPECTACULAR');
        }
        else if(this.cont.getSkin == 'atomic'){
            this.itemRankTxt.setText('ATOMIC');
        }
    }, 
    
    CheckUpgrade : function(){
        let itemIndex = 0,
            itemLevelIndex = 0;
            heroItem = game.user.userData.labItem[this.cont.selectedHeroID];
        
        for(let i in this.itemLevelList){
            this.itemLevelList[i].setCurrentAnimation('empty');
        }
        
            for(let i in heroItem){
                let getName = '';
                for(let j in this.nerdItemInfo){
                    if(this.nerdItemInfo[j].id == heroItem[i]){
                        getName = this.nerdItemInfo[j].name;
                    }
                }
                
                let getID = '';
                for(let j in this.nerdItemInfo){
                    if(this.nerdItemInfo[j].name == getName && this.nerdItemInfo[j].level == this.nextSkin){
                        getID = this.nerdItemInfo[j].id;
                    }
                }
                
                if(game.user.userData.nerdItem[getID] != undefined){
                    if(getID != heroItem[i]){
                        this.itemNotif[itemIndex].alpha = 1;
                        
                        this.itemList[this.cont.selectedHeroID][i].upgradeItemID = getID;
                        if(this.cont.getSkin == 'atomic'){
                            this.itemList[this.cont.selectedHeroID][i].upgradeAble = false;
                        }
                        else{
                            this.itemList[this.cont.selectedHeroID][i].upgradeAble = true;
                        }
                    }
                    else{
                        this.itemNotif[itemIndex].alpha = 0;
                        this.itemList[this.cont.selectedHeroID][i].upgradeAble = false;
                        this.itemLevelList[itemLevelIndex].setCurrentAnimation(this.nextSkin);
                        itemLevelIndex ++;
                    }
                }
                else{
                    this.itemList[this.cont.selectedHeroID][i].upgradeAble = false;
                    this.itemNotif[itemIndex].alpha = 0;
                }
                
                itemIndex ++;
            }
    },
    
    UpgradeItem : function(){
        let labItem = game.user.userData.labItem;
        
        for(let i in labItem[this.cont.selectedHeroID]){
            if(labItem[this.cont.selectedHeroID][i] == this.selectedItemID){
                this.upgradeItemID2 = this.upgradeItemID;
                labItem[this.cont.selectedHeroID][i] = this.upgradeItemID;
                game.controller.data.modifyUserDataProperty('labItem', labItem, function(){
                    this.cont.ShowTab('item');
                    this.SelectItem(this.upgradeItemID2);
                }.bind(this)); break;
            }
        }
    },
    
    UpgradeSkin : function(){
        let heroSkin = game.user.userData.heroSkin;
        heroSkin[this.cont.selectedHeroID] = this.nextSkin;
        
        game.controller.data.modifyUserDataProperty('heroSkin', heroSkin, function(){
            if(this.upgraded == false){
                this.upgraded = true;
                
                let getHeroInfo;
                for(let i in this.heroInfo){
                    if(this.heroInfo[i].id == this.cont.selectedHeroID){
                        getHeroInfo = this.heroInfo[i]; break;
                    }
                }
                
                this.cont.UpgradeHero(getHeroInfo);
                this.cont.ChangeHero(getHeroInfo);
                this.cont.ShowTab('item');
            }
        }.bind(this));
    },
    
    GetCommonItem : function(itemID){
        let labItem = game.user.userData.labItem;
        if(labItem[this.cont.selectedHeroID] == undefined){
            labItem[this.cont.selectedHeroID] = [];
        }
            
        if(!labItem[this.cont.selectedHeroID].includes(itemID)){
            labItem[this.cont.selectedHeroID].push(itemID);
            game.controller.data.modifyUserDataProperty('labItem', labItem);
        }
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();