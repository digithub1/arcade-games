(function(){
// Put user code here //
 
//  End of user code  //

game.object.LabManager = me.Container.extend({
	init: function(x, y, settings = {}){
		settings.width = settings.width || 100;
		settings.height = settings.height || 100;
		settings.anchorPoint = {
			x: 0,
			y: 0
		};

        // Put user code here //
        
        //  End of user code  //

		this._super(me.Container, 'init', [x, y, settings.width, settings.height]);

		this.alpha = 1;
		this.floating = false;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.anchorPoint.set(settings.anchorPoint.x, settings.anchorPoint.y);
		this.var = {};


        // Put user code here //
        this.heroList = {};
        this.heroInfo = game.controller.data.getDataHeroInfo();
        this.SpawnHero();
        this.black = me.pool.pull("BlackScreen", 0, 0);
        me.game.world.addChild(this.black, 11);
        
        this.calloutTxt = me.pool.pull('me.BitmapText', 1045, 950, {
                                             font: 'NiagaraphobiaWhite',
                                             fillStyle : "#D76122",
                                             size : 1.2,
                                             text : 'Name',
                                             textAlign : 'center',
                                             textBaseAlign : 'middle',
                                             lineHeight : 1.1,
                                             anchorPoint : {x: 0,y: 0}
                                             }); 
                                             
        me.game.world.addChild(this.calloutTxt, 1);
        
        this.initLoad = false;
        this.initTimer = setInterval(function() {
            if(this.initLoad == false){
                this.uiLab = me.pool.pull('UILabContainer',  0, 0);
                me.game.world.addChild(this.uiLab, 1);
                this.uiLab.mngr = this;
                this.initLoad = true;
                this.ShowHero(0);
                this.black.alpha = 0;
                clearInterval(this.initTimer);
            }
        }.bind(this), 2000);
        
        
        this.index = 0;
        this.indexBefore = this.heroInfo.length;
        this.showHeroEvent = me.event.subscribe('ShowHeroEvent', this.ShowHero.bind(this));
        this.hireHeroEvent = me.event.subscribe('HireHeroEvent', this.HireHero.bind(this));
        this.scientist = me.pool.pull('Scientist', -830, 300);
        me.game.world.addChild(this.scientist, 3);
        this.scientist.container = this;
        this.scientist.alpha = 0;
        
        this.textIndex = 0;
        let heroCount = 0;
        for(let i in game.user.userData.hiredHero){
            heroCount ++;
            if(heroCount > 3){
                this.textIndex = 1;
                break;
            }
        }
        
        this.calloutList = ['Welcome! this is the laboratorium, where you can hire Nerds!',
                            "You can change your nerd formation by dragging the \n nerd icon into the slot",
                            'You can upgrade your nerds here!',
                             'Use the Nerd traits menu to buff up your Nerds!',
                             'Use Medals to upgrde your Nerd traits to make them \n stronger and better!'];
                             //'Use the Nerd items menu to obtain new skins for your Nerds!',
                             //'You can get new Nerd items by buying Lunchbox in the store!',
                             //'The exclamation point (!) is a sign that you have the items \n that can be upgraded to better tier!',
                             
                             //"You can change your Nerd's skins in the library",
                             //'Collect 5 Nerd items to graduate so you can get new skins!',
                             //"If you already got higher tier Nerd items but you dont see it here yet, \n don't worry you will get them when you graduated to next tier!"];
        this.calloutTxt.setText(this.calloutList[this.textIndex]);
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
        if(this.showHeroEvent != undefined)
            me.event.unsubscribe(this.showHeroEvent);
            
        if(this.hireHeroEvent != undefined)
            me.event.unsubscribe(this.hireHeroEvent);
            
        if(this.initTimer != undefined)
            clearInterval(this.initTimer);
            
        
        //  End of user code  //
	},

    // Put user code here //
    SpawnHero : function(){
        for(let i in this.heroInfo){
            
            let getSkin = (game.user.userData.heroSkin[this.heroInfo[i].id] != undefined) ? game.user.userData.heroSkin[this.heroInfo[i].id] : 'default';
            let offset = OFFSET(this.heroInfo[i].id, true);
            let hero = me.pool.pull(this.heroInfo[i].id, 820 + offset.x, 250 + offset.y, {
                                index : 0,
                                skin : getSkin
                            });
            me.game.world.addChild(hero, 2);
            this.heroList[this.heroInfo[i].id] = hero;
            
            hero.alpha = 0;
            hero.flipX(true);
        }
    },
    
    ShowHero : function(nextOrPrev){
        this.index = this.index + nextOrPrev;
        if(this.index < 0){
            this.index = this.heroInfo.length - 1;
        }
        else if(this.index > this.heroInfo.length - 1){
            this.index = 0;
        }
        
        this.uiLab.ChangeHero(this.heroInfo[this.index]);
    },
    
    HireHero : function(){
        let hiredHero =  game.user.userData.hiredHero;
        let name = "", gender = "";
        this.heroID = "H000";
        
        for(let i in this.heroInfo){
            if(i == this.index){
                for(let j in this.heroInfo[i].name){
                    if(this.heroInfo[i].name[j] == " "){
                        break;
                    }
                    else{
                        name += this.heroInfo[i].name[j];
                    }
                }
                
                this.heroID = this.heroInfo[i].id; 
                if(this.heroID == "H000" || this.heroID == "H002" || this.heroID == "H004" || this.heroID == "H006"){
                    gender = "his";
                }
                else{
                    gender = "her";
                }
                break;
            }
        }
        
        game.var.tips = "You just hire " + name + "  right ? Find out " + gender + " abilities and sta ts  at  the Library";
        game.controller.data.hireHero(this.heroID, function(){
            this.uiLab.ShowTab('trait');
            let unlockData = game.user.userData.unlockLibraryHero;
            if(!unlockData.includes(this.heroID)){
                unlockData.push(this.heroID);
                game.controller.data.modifyUserDataProperty('unlockLibraryHero', unlockData);
            }
        }.bind(this));
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();