(function(){
// Put user code here //
 
//  End of user code  //

game.object.CafetariaContainer = me.Container.extend({
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
       game.var.cafeContainer = this;
       this.star = game.user.userData.star;
       this.candy = game.user.userData.candy;
       this.token = game.user.userData.token;
       
       this.cafeNameList = ['C007','C008', 
                            'C009', 'C010',
                            'C011', 'C012', 
                            'C013', 'C014', 
                            'C015' ,'C006',
                           'C005','C004',
                           'C001' ,'C000',
                           'C003','C002', 'C016'];
                           
       this.posList = [{x : - 830, y : 50}, {x : - 440, y : 50},
                       {x : - 120, y : 50}, {x : 200, y : 60},
                       {x : 520, y : 50}, {x : 840, y : 120}, 
                       {x : 1140, y : 120}, {x : 1540, y : 120},
                       {x : -780, y : 300}, {x : - 395, y : 315},
                       {x : - 100, y : 315}, {x : 150, y : 320},
                       {x : 460, y : 310}, {x : 700, y : 325},
                       {x : 940, y : 350}, {x : 1240, y : 330},
                       {x : 1540, y : 320}];
       this.itemList = [];
       
       let layer = 0;
       this.freeBG = [];
       for(let i in this.cafeNameList){
           let item = me.pool.pull(this.cafeNameList[i], this.posList[i].x,  this.posList[i].y,{
               id : this.cafeNameList[i]
           });
           this.addChild(item, layer);
           this.itemList.push(item);
           
           if(item.itemInfo.price == 'free'){
               let freePosY = 130;
               if(i > 7) freePosY = 310;
               
               let offset = this.GetOffsetFreeBG(this.cafeNameList[i]);
               let bg = me.pool.pull('me.Sprite', this.posList[i].x + offset.x, 
                                                   freePosY,{
                           image : game.textureMap.get('Cafetaria'),
                           region : 'free background'
                       });
               this.addChild(bg, layer - 2);
               this.freeBG.push(bg);
           }
           layer ++;
       }
       
       let blok = me.pool.pull('CafetariaBGBlok', 0, 0);
       this.addChild(blok, 20);
       
       this.limitKanan = this.itemList[0].pos.x,
       this.limitKiri = this.limitKanan - 700;
       //Cafe ITEM DESC
       this.confPanel = me.pool.pull('me.Sprite', -550, -225,{
           image : game.textureMap.get('Cafetaria'),
           region : 'papan harga dan penjelasan'
       });
       
       this.addChild(this.confPanel, 21);
       
       this.descBox = me.pool.pull('me.Sprite', -335, -245,{
           image : game.textureMap.get('Cafetaria'),
           region : 'item explanation'
       });
       
       this.addChild(this.descBox, 22);
       
       this.descNameTxt = me.pool.pull('me.BitmapText', -335, -340, {
                                            font: 'NiagaraphobiaWhite',
                                            size : 1.5,
                                            text : 'Name',
                                            textAlign : 'center',
                                            textBaseAlign : 'middle',
                                            anchorPoint : {x: 0,y: 0}
                                            }); 
       this.addChild(this.descNameTxt, 23);
       
       this.descTxt = me.pool.pull('me.BitmapText', -620, -300, {
                                            font: 'NiagaraphobiaWhite',
                                            size : 1.1,
                                            text : 'Desc',
                                            textAlign : 'left',
                                            textBaseAlign : 'middle',
                                            lineHeight : 1.2,
                                            anchorPoint : {x: 0,y: 0}
                                            }); 
       this.addChild(this.descTxt, 23);
       
       this.priceTxt = me.pool.pull('me.BitmapText', -910, -67, {
                                            font: 'NiagaraphobiaWhite',
                                            size : 1.1,
                                            text : 'Price',
                                            textAlign : 'left',
                                            textBaseAlign : 'middle',
                                            anchorPoint : {x: 0,y: 0}
                                            }); 
       this.addChild(this.priceTxt, 23);
       
       this.priceIAPTxt = me.pool.pull('me.BitmapText', -590, -67, {
                                            font: 'NiagaraphobiaWhite',
                                            size : 1.1,
                                            text : 'Price',
                                            textAlign : 'left',
                                            textBaseAlign : 'middle',
                                            anchorPoint : {x: 0,y: 0}
                                            }); 
       this.addChild(this.priceIAPTxt, 23);
       
       this.timerTxt = me.pool.pull('me.BitmapText', -897, -67, {
                                            font: 'NiagaraphobiaWhite',
                                            size : 1.1,
                                            text : 'Price',
                                            textAlign : 'center',
                                            textBaseAlign : 'middle',
                                            anchorPoint : {x: 0,y: 0}
                                            }); 
       this.addChild(this.timerTxt, 23);
       
       this.buyBtn = me.pool.pull("BuyBtn", -880, -100);
       this.addChild(this.buyBtn, 23);
       this.buyBtn.container = this;
       this.buyBtn.BuyFunc = this.Buy.bind(this);
       
       this.buyBtnIAP = me.pool.pull("BuyBtn", -520, -100);
       this.addChild(this.buyBtnIAP, 23);
       this.buyBtnIAP.container = this;
       this.buyBtnIAP.BuyFunc = this.RequestIAP.bind(this);
       
       this.priceIcon = {};
       
       let iconMedal = me.pool.pull('me.Sprite', -860, -50,{
           image : game.textureMap.get('UI'),
           region : 'medals'
       });
       this.addChild(iconMedal, 24);
       this.priceIcon['medal'] = iconMedal;
       
       let iconStar = me.pool.pull('me.Sprite', -939, -43,{
           image : game.textureMap.get('UI'),
           region : 'stars icons'
       });
       this.addChild(iconStar, 24);
       this.priceIcon['star'] = iconStar;
       
       let iconToken = me.pool.pull('me.Sprite', -939, -48,{
           image : game.textureMap.get('UI'),
           region : 'tokens'
       });
       this.addChild(iconToken, 24);
       this.priceIcon['token'] = iconToken;
       
       let iconCandy = me.pool.pull('me.Sprite', -939, -43,{
           image : game.textureMap.get('UI'),
           region : 'candy icon'
       });
       this.addChild(iconCandy, 24);
       this.priceIcon['candy'] = iconCandy;
       
       for(let i in this.priceIcon)
           this.priceIcon[i].alpha = 0;
       
       this.icon = {};
       for(let i in this.cafeNameList){
           let offset = this.GetOffsetConf(this.cafeNameList[i]);
           let item = me.pool.pull(this.cafeNameList[i], -900 + offset.x, 
                                                       -250 + offset.y,{
               id :this.cafeNameList[i]
           });
           this.addChild(item, 23);
           
           this.icon[this.cafeNameList[i]] = item;
           item.alpha = 0;
       }
       
       ///ACQUIRED
       this.acquiredPanel = me.pool.pull('me.Sprite', 0, 350,{
           image : game.textureMap.get('Cafetaria'),
           region : 'panel acquired items'
       });
       this.addChild(this.acquiredPanel, 26);
       
       this.iconAcquired = {};
       let iconMedal2 = me.pool.pull('me.Sprite', 0, -50,{
           image : game.textureMap.get('UI'),
           region : 'medals'
       });
       this.addChild(iconMedal2, this.acquiredPanel.pos.z + 1);
       this.iconAcquired['medal'] = iconMedal2;
       
       let iconStar2 = me.pool.pull('me.Sprite', 0, -50,{
           image : game.textureMap.get('UI'),
           region : 'stars icons'
       });
       this.addChild(iconStar2, this.acquiredPanel.pos.z + 1);
       this.iconAcquired['star'] = iconStar2;
       
       let iconToken2 = me.pool.pull('me.Sprite', 0, -50,{
           image : game.textureMap.get('UI'),
           region : 'tokens'
       });
       this.addChild(iconToken2, this.acquiredPanel.pos.z + 1);
       this.iconAcquired['token'] = iconToken2;
       
       let iconCandy2 = me.pool.pull('me.Sprite',0, -50,{
           image : game.textureMap.get('UI'),
           region : 'candy icon'
       });
       this.addChild(iconCandy2, this.acquiredPanel.pos.z + 1);
       this.iconAcquired['candy'] = iconCandy2;
           
       this.nerdItemIcon = [];
       this.acquiredTxt = [];
       for(let i = 0; i < 3; i++){
           let txt = me.pool.pull('me.BitmapText', 0, -70, {
                                                font: 'NiagaraphobiaWhite',
                                                size : 1.8,
                                                text : 'Price',
                                                textAlign : 'left',
                                                textBaseAlign : 'middle',
                                                anchorPoint : {x: 0,y: 0}
                                                }); 
           this.addChild(txt, this.acquiredPanel.pos.z + 1);
           this.acquiredTxt.push(txt);
       }
       
       this.accBtn = me.pool.pull('CafeAcceptBtn', -50, this.acquiredPanel.pos.y + 115,{
           container : this,
           region : "ACCEPT BUTTON",
           folder : "Cafetaria"
       });
       this.addChild(this.accBtn, this.acquiredPanel.pos.z + 1);
       
       this.nerdItemIcon = {};
       let nerdItemInfo = game.controller.data.getDataNerdItemInfo();
       for(let j in nerdItemInfo){
           let nerdItem = me.pool.pull('NerdItem', 0, 310, {
               heroID : nerdItemInfo[j].heroID
           });
           this.addChild(nerdItem, this.acquiredPanel.pos.z + 1);
           
           this.nerdItemIcon[nerdItemInfo[j].id] = nerdItem;
           this.nerdItemIcon[nerdItemInfo[j].id].setCurrentAnimation(nerdItemInfo[j].id);
           this.nerdItemIcon[nerdItemInfo[j].id].alpha = 0;
       }
       /////////
       let barAtas = me.pool.pull('MenuBarAtas', 0, -493);
       this.addChild(barAtas, 21);
       
       let backBtn = me.pool.pull('BackBtn', -1050, 480, {
           container : this,
           folder  : "UI",
           region :"back"
       });
       this.addChild(backBtn, 21);
       this.callout = me.pool.pull('me.Sprite', 300, -300, {
                       image : game.textureMap.get('Cafetaria'),
                       region: 'callout'
           });
       this.addChild(this.callout, 5);
       
       this.calloutTxt = me.pool.pull('me.BitmapText', 300, -350, {
                                                font: 'NiagaraphobiaWhite',
                                                fillStyle : "#D76122",
                                                size : 1.5,
                                                text : 'CLAIM YOUR FREE LUNCHBOX NOW',
                                                textAlign : 'center',
                                                textBaseAlign : 'middle',
                                                anchorPoint : {x: 0,y: 0}
                                                }); 
       this.addChild(this.calloutTxt, this.callout.pos.z + 1);
       
       this.callout.alpha = 0;
       this.calloutTxt.alpha = 0;
       /////////////////
       this.black = me.pool.pull('BlackScreen', 0, 0);
       this.addChild(this.black, 25);
       
       this.acquired = [];
       this.get = [];
       this.cost = {price : 0, type : 'star'};
       
       this.index = 0;
       this.info = this.itemList[0].itemInfo;
       this.time = 0;
       this.HideAcquired();
       
       this.chef = me.pool.pull('Chef', 601, -288);
       this.addChild(this.chef, 2);
       //
        this.d = me.pool.pull('me.BitmapText', 0, -340, {
                                            font: 'Niagaraphobia',
                                            size : 3,
                                            text : '',
                                            textAlign : 'center',
                                            textBaseAlign : 'middle',
                                            anchorPoint : {x: 0,y: 0}
                                            }); 
        this.addChild(this.d, 23);
        
        if(STORE){
            store.refresh();
            store.when("c008").updated((p)=>{
                
            });
            store.when("c009").updated((p)=>{
                
            });
            store.when("c010").updated((p)=>{
                
            });
            store.when("c011").updated((p)=>{
                
            });
            store.when("c013").updated((p)=>{
                
            });
            store.when("c014").updated((p)=>{
                
            });
            store.when("c015").updated((p)=>{
                
            });
	    }
        //  End of user code  //
	},

	update: function(dt){
		var drawNextFrame = this._super(me.Container, 'update', [dt]);
        // Put user code here //
        if(DATABASE_LOCAL){
            
        }
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
        if(this.timerInterval != undefined)
			clearInterval(this.timerInterval);
        //  End of user code  //
	},

    // Put user code here //
    ShowConf : function(info){
       this.info = info;
       
       for(let i in this.icon){
           if(i == info.id)
               this.icon[i].alpha = 1;
           else
               this.icon[i].alpha = 0;
       }
       
       this.descNameTxt.setText(info.name);
    
       let desc = '';
       
       for(let i in info.desc)
           desc += info.desc[i] + '\n';
       
       
       this.get = [];
       for(let i in info.contain){
           let type = this.ItemName(info.containType[i]);
               
           if(info.contain[i] > 1){
               if(type == 'medal')
                   type = 'medals';
               else if(type == 'candy')
                   type = 'candies';
               else if(type == 'star')
                   type = 'stars';
               else if(type == 'token')
                   type = 'tokens';
               else
                   type += 's';
           }
           
           if(i > 0){
               desc += '                   ' + 
                   info.contain[i] + ' ' + type + '\n';
           }
           else{
                desc += 'contain :' + info.contain[i] + ' ' + type + '\n';
           }
           
           this.get.push({contain : info.contain[i], type : info.containType[i]});
       }
       
       this.descTxt.setText(desc);
       this.priceTxt.setText(info.price[0]);
       
       if(info.price[0] != 'free'){
           this.cost.price = info.price[0];
           this.cost.type = info.priceType[0];
           
       }else{
           this.cost.price = 0;
           this.cost.type = 'star';
       }
       
       this.priceIAP = info.priceIAP;
       this.priceIAPTxt.setText("Rp." + info.priceIAP);
       
       if(info.timer != '-'){
           let now = new Date().getTime();
           game.controller.data.getCafeTimer(info.id, info.timer, now, function(remainingTime){
               this.StartTimer(remainingTime);
           }.bind(this));
       }
       else{
           if(this.timerInterval != undefined)
               clearInterval(this.timerInterval);
           this.CheckPrice();
       }
    },
    
    StartTimer : function(remainingTime){
       if(this.timerInterval != undefined)
               clearInterval(this.timerInterval);
               
       this.time = remainingTime;
       this.CheckTime(this.time);
       if(this.time > 0){
           this.timerInterval = setInterval(function(){
               this.time = Math.max(0, this.time - 1000);
               this.CheckTime(this.time);
               if(this.time == 0)
                   clearInterval(this.timerInterval);
           }.bind(this), 1000);
       }
    },
    
    CheckTime : function(time){
       if(time > 0){
           if(this.info.id == 'C007' || this.info.id == 'C012'){
               this.callout.alpha = 0;
               this.calloutTxt.alpha = 0;
           }
               
           this.timerTxt.alpha = 1;
           this.timerTxt.setText(this.TimeTxt(time));
           
           for(let i in this.priceIcon)
               this.priceIcon[i].alpha = 0;
               
           this.buyBtn.setCurrentAnimation("disable");
           //this.CheckPrice();
           this.CheckPriceIAP();
           this.priceTxt.alpha = 0;
       }
       else{
           if(this.info.id == 'C007' || this.info.id == 'C012'){
               this.callout.alpha = 1;
               this.calloutTxt.alpha = 1;
           }
           this.priceTxt.alpha = 1;
           this.timerTxt.alpha = 0;
           this.CheckPriceIAP();
           this.CheckPrice();
       }
    },
    
    CheckPrice : function(){
       let able = false;
       if(this.cost.type == 'star'){
           if(this.star >= this.cost.price) {
               able = true;
           }
       }
       else if(this.cost.type == 'token'){
           if(this.token >= this.cost.price){
               able = true;
           }
       }
       else if(this.cost.type == 'candy'){
           if(this.candy >= this.cost.price){
               able = true;
           } 
       }
       
       this.timerTxt.alpha = 0;
       this.priceTxt.alpha = 1;
       
       if(this.info.id == "C007" || this.info.id == "C012"){
           for(let i in this.priceIcon)
               this.priceIcon[i].alpha = 0;
       }
       else if(this.cost.price > 0){
           for(let i in this.priceIcon){
               if(i == this.cost.type){
                   this.priceIcon[i].alpha = 1;
               }
               else{
                   this.priceIcon[i].alpha = 0;
               }
           }
       }
       else if(this.cost.price == 0){
           for(let i in this.priceIcon)
               this.priceIcon[i].alpha = 0;
       }
       
       if(able == true){
           this.buyBtn.setCurrentAnimation("idle");
       }
       else{
           this.buyBtn.setCurrentAnimation("disable");
       }
       
       this.CheckPriceIAP();
    },
    
    CheckPriceIAP : function(){
        if(this.priceIAP > 0){
            this.priceIAPTxt.alpha = 1;
            this.priceTxt.alpha = 1;
            if(DATABASE_LOCAL == false){
                if(this.info.id != "C005"){
                    this.buyBtn.pos.set((me.game.viewport.width / 2) + -880, (me.game.viewport.height / 2) + -100, this.buyBtn.pos.z); 
                    this.buyBtnIAP.pos.set((me.game.viewport.width / 2) + -520, (me.game.viewport.height / 2) + -100, this.buyBtn.pos.z);
                    this.priceIAPTxt.pos.x = -590;
                }
                else{
                    this.priceTxt.alpha = 0;
                    this.buyBtn.pos.set((me.game.viewport.width / 2) + -880, 99999, this.buyBtn.pos.z); 
                    this.buyBtnIAP.pos.set((me.game.viewport.width / 2) + -880, (me.game.viewport.height / 2) + -100, this.buyBtn.pos.z);
                    this.priceIAPTxt.pos.x = -950;
                    for(let i in this.priceIcon) this.priceIcon[i].alpha = 0;
                }
            }
            else{
                this.priceTxt.alpha = 0;
                this.buyBtn.pos.set((me.game.viewport.width / 2) + -880, 99999, this.buyBtn.pos.z); 
                this.buyBtnIAP.pos.set((me.game.viewport.width / 2) + -880, (me.game.viewport.height / 2) + -100, this.buyBtn.pos.z);
                this.priceIAPTxt.pos.x = -950;
                for(let i in this.priceIcon) this.priceIcon[i].alpha = 0;
            }
        }
        else{
            this.priceTxt.alpha = 1;
            this.priceIAPTxt.alpha = 0;
            this.buyBtn.pos.set((me.game.viewport.width / 2) + -880, (me.game.viewport.height / 2) + -100, this.buyBtn.pos.z); 
            this.buyBtnIAP.pos.set((me.game.viewport.width / 2) + -520, 99999, this.buyBtn.pos.z);
        }
    },
    
    GetItemContain : function(){
        let itemInfo = game.controller.data.getDataNerdItemInfo();
       this.getItem = [];

       for(let i in this.get){
           if(this.get[i].type == 'Common Nerd Item' || this.get[i].type == 'Superb Nerd Item'
           || this.get[i].type == 'Spectacular Nerd Item'|| this.get[i].type == 'Radical Nerd Item'
           || this.get[i].type == 'Atomic Nerd Item'){
               let level = 'common';
               if(this.get[i].type == 'superb nerd item')
                   level = 'superb';
               else if(this.get[i].type == 'spectacular nerd item')
                   level = 'spectacular';
               else if(this.get[i].type == 'radical nerd item')
                   level = 'radical';
               else if(this.get[i].type == 'atomic nerd item')
                   level = 'atomic';
                   
               let list = [];
               for(let j in itemInfo){
                   if(itemInfo[j].level == level)
                       list.push(itemInfo[j].id);
               }
               
               for(let k = 0; k < this.get[i].contain; k++){
                   let rand = Math.floor(Math.random() * (list.length));
                   this.getItem.push({contain : 1, id: list[rand], type : 'nerdItem'});
                   list.splice(rand, 1);
               }
           }
           else if(this.get[i].type == 'I000' || this.get[i].type == 'I001'
           || this.get[i].type == 'I002'|| this.get[i].type == 'I003' || this.get[i].type == 'I004'){
               this.getItem.push({contain : this.get[i].contain, id :this.get[i].type, type : 'item'});
           }
           else{
               this.getItem.push({contain : this.get[i].contain, id :this.get[i].type, type : 'resource'});
           }
       }
    },
    
    Buy : function(){
        this.GetItemContain();
        this.SaveToDB(false);
    },
    
    BuyIAP : function(){
        this.GetItemContain();
        this.SaveToDB(true);
    },
    
    RequestIAP : function(){
        this.idIAP = "";
        if(this.info.id == "C008"){
            this.idIAP = "c008";
        }
        else if(this.info.id == "C009"){
            this.idIAP = "c009";
        }
        else if(this.info.id == "C010"){
            this.idIAP = "c010";
        }
        else if(this.info.id == "C011"){
            this.idIAP = "c011";
        }
        else if(this.info.id == "C013"){
            this.idIAP = "c013";
        }
        else if(this.info.id == "C014"){
            this.idIAP = "c014";
        }
        else if(this.info.id == "C015"){
            this.idIAP = "c015";
        }
        
        setTimeout(()=>{
            this.buyBtnIAP.setCurrentAnimation("idle");
        }, 2000);
        store.order(this.idIAP);
        this.Verifikasi();
    },
    
    Verifikasi : function(){
        store.when(this.idIAP).approved((p)=>{
            p.finish();
            this.BuyIAP();
        });
    },
    
    SaveToDB : function(IAP){
       this.black.alpha = 0.5;
       this.iap = IAP;
       game.controller.data.buyItem(this.getItem, this.cost, this.iap,function(){
           this.star = game.user.userData.star;
           this.candy = game.user.userData.candy;
           this.token = game.user.userData.token;
           
           if(this.iap == false){
               if(this.info.time != '-'){
                   let now = new Date().getTime();
                   game.controller.data.setCafeTimer(this.info.id, now, function(){
                       this.ShowConf(this.info); 
                   }.bind(this));
               }
           }
           
           if(this.icon[this.info.id].isCurrentAnimation('close')){
               this.icon[this.info.id].setCurrentAnimation('open', function(){
                   this.ShowAcquired(this.getItem);
                   return false;
               }.bind(this));
           }
           else{
               this.ShowAcquired(this.getItem);
           }
       }.bind(this));
    },
    
    ShowAcquired : function(acquired){
       this.acquiredPanel.alpha = 1;
       this.accBtn.alpha = 1;
       
       let distance = 300, posX = 0 - ((acquired.length - 1) * distance / 2);
       let index = 0;
       
       for(let i in acquired){
           if(acquired[i].type == 'nerdItem'){
               this.nerdItemIcon[acquired[i].id].pos.x = (me.game.viewport.width / 2) + posX;
               this.nerdItemIcon[acquired[i].id].alpha = 1;
           }
           else if(acquired[i].type == 'item'){
               let txt = 'X' + acquired[i].contain + ' ' + this.ItemName(acquired[i].id);
               this.acquiredTxt[index].alpha = 1;
               this.acquiredTxt[index].setText(txt);
               this.acquiredTxt[index].pos.x = posX - 100;
               this.acquiredTxt[index].pos.y = this.acquiredPanel.pos.y - 27;
               index ++;
           }
           else if(acquired[i].type == 'resource'){
               this.iconAcquired[acquired[i].id].alpha = 1;
               this.iconAcquired[acquired[i].id].pos.x = posX - 50;
               this.iconAcquired[acquired[i].id].pos.y = this.acquiredPanel.pos.y;
               let txt = 'X ' + acquired[i].contain;
               this.acquiredTxt[index].alpha = 1;
               this.acquiredTxt[index].setText(txt);
               this.acquiredTxt[index].pos.x = posX;
               this.acquiredTxt[index].pos.y = this.acquiredPanel.pos.y - 27;
               index ++;
           }
    
           posX += distance;
       }
    },
    
    HideAcquired : function(){
       for(let i in this.nerdItemIcon)
           this.nerdItemIcon[i].alpha = 0;
           
       for(let i in this.iconAcquired)
           this.iconAcquired[i].alpha = 0;
           
       for(let i in this.acquiredTxt)
           this.acquiredTxt[i].alpha = 0;
           
       this.acquiredPanel.alpha = 0;
       this.accBtn.alpha = 0;
       this.black.alpha = 0;
       
       if(this.icon[this.info.id].isCurrentAnimation('open')){
           this.icon[this.info.id].setCurrentAnimation('close');
       }
       this.ShowConf(this.info);
    },
    
    GetOffsetConf : function(name){
       switch(name){
           case 'C007':
               return {x : 30, y : -50};
           case 'C008':
               return {x : 0, y : -40};
           case 'C009':
               return {x : 0, y : -40};
           case 'C010':
               return {x : 0, y : -35};
           case 'C011':
               return {x : 0, y : -45};
           default :
               return {x : 0, y : 0};
       }
    },
    
    GetOffsetFreeBG : function(name){
       switch(name){
           case 'C007':
               return {x : 10, y : 60};
           case 'C010':
               return {x : 0, y : -15};
           case 'C011':
               return {x : 0, y : -25};
           case 'C012':
               return {x : 50, y : 60};
           default :
               return {x : 0, y : 0};
       }
    },
    
    ItemName : function(name){
       let info = game.controller.data.getDataItemInfo();
       for(let i in info){
           if(info[i].id == name){
               name = info[i].name; break;
           }
       }
       return name;
    }, 
    
    TimeTxt : function(time){
       let hour = 0, min = 0, sec = 0;
       
       hour = Math.floor(time / 3600000);
       min = Math.floor((time - (hour * 3600000)) / 60000);
       sec = Math.floor((time - (hour * 3600000) -(min * 60000)) / 1000);
       
       let hourTxt, minTxt, secTxt;
       if(hour < 10)
           hourTxt = '0' + hour;
       else
           hourTxt = hour;
           
       if(min < 10)
           minTxt = '0' + min;
       else
           minTxt = min;
           
       if(sec < 10)
           secTxt = '0' + sec;
       else
           secTxt = sec;
           
       return hourTxt + ' : ' + minTxt + ' : ' + secTxt;
    }
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();