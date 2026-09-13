(function(){
// Put user code here //
 
//  End of user code  //

game.object.HomeroomContainer = me.Container.extend({
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
    
        
        let blok = me.pool.pull('Blok', 0, 0);
		me.game.world.addChild(blok, 101);
		
        let backBtn = me.pool.pull('BackBtn', -1050, 480, {
            container : this,
            folder  : "UI",
            region :"back"
        });
        this.addChild(backBtn, 21);
        
        let userHomeroom = game.user.userData.homeroom;
        this.lvlList = {};
        this.maxLvlList = {};
        
        this.panelList = {};
        this.itemList = {};
        this.homeroomInfo = game.controller.data.getDataHomeroomInfo();

        let posY = -245;
        let dist = 95;
        
        for(let i in this.homeroomInfo){
            let lvl = 1;
            if(userHomeroom[this.homeroomInfo[i].id] != undefined){
                lvl = userHomeroom[this.homeroomInfo[i].id].level;
            }
            
            this.lvlList[this.homeroomInfo[i].id] = lvl;
            this.maxLvlList[this.homeroomInfo[i].id] = this.homeroomInfo[i].maxLevel;
            
            let list = {panel : null, nameTxt : null, priceTxt : null, btn : null, icon : null};
            let panel = me.pool.pull('me.Sprite', 70, posY, {
                image : game.textureMap.get('Homeroom'),
                region:'panel for items'
            });
            this.addChild(panel, 3);

            let txt = me.pool.pull('me.BitmapText', -265, posY - 25, {
                                             font: 'NiagaraphobiaWhite',
                                             size : 1.5,
                                             text : this.homeroomInfo[i].name + ' ' + lvl,
                                             textAlign : 'left',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 0,y: 0}
                                             });
            this.addChild(txt, 4);
            
            let txt2 = me.pool.pull('me.BitmapText', 100, posY - 25, {
                                             font: 'NiagaraphobiaWhite',
                                             size : 1.5,
                                             text : this.homeroomInfo[i].cost,
                                             textAlign : 'left',
                                             textBaseAlign : 'middle',
                                             anchorPoint : {x: 0,y: 0}
                                             });
            this.addChild(txt2, 4);
            
            let icon = me.pool.pull('CandyIcon', 20, posY - 47);
            this.addChild(icon, 4);
            
            let btn = me.pool.pull('HomeroomUpgradeBtn', 280, posY - 50, {id : this.homeroomInfo[i].id
                                                                        , container : this
            });
            this.addChild(btn, 4);
            
            list.panel = panel;
            list.nameTxt = txt;
            list.priceTxt = txt2;
            list.btn = btn;
            list.icon = icon;
            this.panelList[this.homeroomInfo[i].id] = list;
            posY += dist;
        }
    
        this.limitBawah = this.panelList['HR000']['panel'].pos.y;
        this.limitAtas = -820;
        
        this.panelDrag = me.pool.pull('PanelDrag', 20, -193);
        this.addChild(this.panelDrag, 2);
        
        let bingkai = me.pool.pull('me.Sprite', 70, - 143, {
            image : game.textureMap.get('Homeroom'),
            region:'papan border'
        });
        this.addChild(bingkai, 7);
        
        let dalamPapan = me.pool.pull('me.Sprite',  70, -143, {
            image : game.textureMap.get('Homeroom'),
            region:'dalam papan'
        });
        this.addChild(dalamPapan, 1);
        
        let dragArea = me.pool.pull('HomeroomDragArea', 0, -200);
        this.addChild(dragArea, 1);
        dragArea.container = this;
        
        let barAtas = me.pool.pull('MenuBarAtas', 0, -493);
        this.addChild(barAtas, 20);
        
        let tableDepan = me.pool.pull('me.Sprite', -350, 440, {
                image : game.textureMap.get('Homeroom'),
                region: 'paralax belakang miss janet'
        });
        this.addChild(tableDepan, 12);
        
        this.missJane = me.pool.pull('MissJane', 750, 350);
        this.addChild(this.missJane, 14);
        
        this.callout = me.pool.pull('me.Sprite', -200, 400, {
                image : game.textureMap.get('Homeroom'),
                region: 'callout miss janes'
        });
        this.addChild(this.callout, 13);
        
        this.calloutTxt = me.pool.pull('me.BitmapText', -320, 300, {
                                             font: 'NiagaraphobiaWhite',
                                             fillStyle : "#D76122",
                                             size : 1.5,
                                             text : 'Hello asdfasdfasfasdfsadfasdfasdfasf',
                                             textAlign : 'center',
                                             textBaseAlign : 'middle',
                                             lineHeight : 1.2,
                                             anchorPoint : {x: 0,y: 0}
                                             });
        this.addChild(this.calloutTxt, 14);
        
        this.dialogIndex = 0;
        //////////////////////////////////////////////////////////////
        this.wall = [];
        this.blockWall = [];

        for(let i = 1; i <= this.maxLvlList['HR000']; i++){
            let wall = me.pool.pull('Wall' + i, 0, 0);
            this.addChild(wall, 1);
            
            let blockWall = me.pool.pull('BlockWall' + i, 0, 0);
            this.addChild(blockWall, 5);
            
            this.wall.push(wall);
            this.blockWall.push(blockWall);
            if(i == this.lvlList['HR000']){
                wall.alpha = 1; 
                blockWall.alpha = 1;
            }
            else{
                wall.alpha = 0;
                blockWall.alpha = 0;
            }
        }
        this.itemList['HR000'] = this.wall;
        
        this.floor = [];
        for(let i = 1; i <= this.maxLvlList['HR001']; i++){
            let floor = me.pool.pull('Floor' + i, 0, 300);
            this.addChild(floor, 6);
            
            this.floor.push(floor);
            if(parseInt(i) == this.lvlList['HR001']){
                floor.alpha = 1;
            }
            else
                floor.alpha = 0;
        }
        this.itemList['HR001'] = this.floor;
        
        let star = me.pool.pull('HomeroomStar',  535, -235, {id : 'HR000', container : this});
        this.addChild(star, 9);
        star.CheckTime();
        
        let star2 = me.pool.pull('HomeroomStar',  475, 200, {id : 'HR001', container : this});
        this.addChild(star2, 9);
        star2.CheckTime();
        
        this.table = me.pool.pull('Table', -970, 125);
        this.addChild(this.table, 11);
        this.table.setCurrentAnimation(this.lvlList['HR002']);
        this.itemList['HR002'] = this.table;
        let star3 = me.pool.pull('HomeroomStar', -970, 50, {id : 'HR002', container : this});
        this.addChild(star3, 12); 
        star3.CheckTime();
        
        this.vending = me.pool.pull('Vending', -470, -50);
        this.addChild(this.vending, 7);
        this.vending.setCurrentAnimation(this.lvlList['HR003']);
        this.itemList['HR003'] = this.vending;
        let star4 = me.pool.pull('HomeroomStar', -450, -150, {id : 'HR003', container : this});
        this.addChild(star4, 8);
        star4.CheckTime();
        
        this.flower = me.pool.pull('Flower', -700, 40);
        this.addChild(this.flower, 9);
        this.flower.setCurrentAnimation(this.lvlList['HR004']);
        this.itemList['HR004'] = this.flower;
        let star5 = me.pool.pull('HomeroomStar', -700, -40, {id : 'HR004', container : this});
        this.addChild(star5, 10);
        star5.CheckTime();
        
        this.wallDecor = me.pool.pull('WallDecor', 960, -200);
        this.addChild(this.wallDecor, 8);
        this.wallDecor.setCurrentAnimation(this.lvlList['HR005']);
        this.itemList['HR005'] = this.wallDecor;
        let star6 = me.pool.pull('HomeroomStar', 960, -300, {id : 'HR005', container : this});
        this.addChild(star6, 9);
        star6.CheckTime();
        
        this.flag = me.pool.pull('Flag', 675, -75);
        this.addChild(this.flag, 8);
        this.flag.setCurrentAnimation(this.lvlList['HR006']);
        this.itemList['HR006'] = this.flag;
        let star7 = me.pool.pull('HomeroomStar', 675, -125, {id : 'HR006', container : this});
        this.addChild(star7, 9);
        star7.CheckTime();
        
        this.windowRoom = me.pool.pull('Window', -870, -300);
        this.addChild(this.windowRoom, 7);
        this.windowRoom.setCurrentAnimation(this.lvlList['HR007']);
        this.itemList['HR007'] = this.windowRoom;
        let star8 = me.pool.pull('HomeroomStar', -870, -350, {id : 'HR007', container : this});
        this.addChild(star8, 8);
        star8.CheckTime();
        
        this.teacherTable = me.pool.pull('TeacherTable', 75, 200);
        this.addChild(this.teacherTable, 8);
        this.teacherTable.setCurrentAnimation(this.lvlList['HR008']);
        this.itemList['HR008'] = this.teacherTable;
        let star9 = me.pool.pull('HomeroomStar', 75, 105, {id : 'HR008', container : this});
        this.addChild(star9, 9);
        star9.CheckTime();
        
        ////////
        if(game.user.userData.homeroomTutorial == 2)
            this.Dialog('enter');
        else if(game.user.userData.homeroomTutorial == 0)
            this.Dialog('tutorial');
        else if(game.user.userData.homeroomTutorial == 1)
            this.Dialog('tutorial upgrade');
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
    Dialog : function(condition){
        if(condition == 'tutorial'){
            let opening = ['Hello, this is your homeroom. \n I am Miss Janet, your teacher. \n Sadly, now everything here is \n destroyed by the bullies.',
                            'Thankfully, you can help us repair them! \n This homeroom will looked better with your \n help i am sure. Plus, you can get lots of \n bonuses from repairing the homeroom!',
                            "All items that you've upgraded will \n gives you bonuses every 12 hours. \n Remember to come and claim your rewards!. ",
                            'Now chose any items from the item \n repair list, and choose upgrade!'];
            if(this.dialogIndex <= opening.length){
                this.calloutTxt.setText(opening[this.dialogIndex]);
                this.dialogIndex ++;
                if(this.dialogIndex == opening.length){
                    game.controller.data.modifyUserDataProperty('homeroomTutorial', 1);
                }
            }
        }
        else if(condition == 'tutorial upgrade'){
            this.calloutTxt.setText('Now chose any items from the item repair \n list, and choose upgrade!.');
        }
        else if(condition == 'upgrade'){
            game.controller.data.modifyUserDataProperty('homeroomTutorial', 2);
            this.calloutTxt.setText('Thank you for fixing that! \n you are very kind! we are very grat eful for you, \n new kid!');
        }
        else if(condition == 'not enough money'){
            this.calloutTxt.setText("Oh no, i don't think that you have \n enough stars to upgrade the items. \n Sorry, maybe next time!");
        }
        else if(condition == 'enter'){
            this.calloutTxt.setText("Hello nice to see you again! \n It's been awhile. \n tap on the items to collect your bonus!.");
        }
    },
    //  End of user code  //
});

// Put user code here //
 
//  End of user code  //
})();