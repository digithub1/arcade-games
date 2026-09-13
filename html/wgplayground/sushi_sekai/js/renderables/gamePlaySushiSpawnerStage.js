import * as me from '../../dist/melonjs.module.js'
import game from '../game.js'


// Put user code here //
 
//  End of user code  //

export default class gamePlaySushiSpawnerStage extends me.Sprite {
	constructor(x, y, settings = {}) {
		settings.texture = "gamePlay";
		settings.image = game.textureMap.get(settings.texture);
		game.util.__populateAtlasIndices([
			"gamePlay_stagePlay"
		], settings);
		settings.framewidth = settings.framewidth || 488;
		settings.frameheight = settings.frameheight || 488;
		settings.anchorPoint = {
			x: 0.5,
			y: 0.5
		};

        // Put user code here //
        
        //  End of user code  //

		super(x, y, Object.assign(settings));
		delete settings.image;
		this.alpha = 1;
		this.floating = false;
		this.alwaysUpdate = false;
		this.updateWhenPaused = false;
		this.isPersistent = false;
		this.var = {};

        // Put user code here //
        this.board = [
            // [
            //     1,5,1,4,2,3,
            //     0,4,2,0,3,5,
            //     1,3,0,1,1,0,
            //     0,0,1,5,2,3,
            //     3,1,2,5,0,5,
            //     1,0,5,2,3,4
            // ],
            [
                0,5,1,4,2,3,
                2,4,0,1,3,5,
                5,3,1,0,4,3,
                4,0,5,1,2,3,
                3,1,2,5,0,5,
                1,0,5,2,3,4
            ],
            [
                0,1,2,3,4,5,
                6,2,5,2,3,4,
                5,6,0,4,2,3,
                4,5,0,3,1,2,
                3,4,5,0,5,6,
                2,5,4,5,6,5
            ],
            [
                0,1,2,3,4,5,
                6,0,3,2,3,4,
                5,6,1,1,4,3,
                4,3,6,0,2,2,
                3,4,5,6,0,1,
                2,3,4,5,6,0
            ],
            [
                2,4,2,1,4,5,
                6,0,1,2,3,4,
                6,6,5,2,2,3,
                4,5,6,3,5,2,
                3,4,5,6,0,1,
                2,3,4,0,6,3
            ],
            [
                6,4,2,0,5,3,
                1,0,2,4,6,1,
                3,5,6,4,2,0,
                5,3,1,0,2,4,
                6,1,3,5,0,3,
                1,3,4,0,6,3
            ],
            [
                2,5,6,1,4,3,
                1,0,2,4,6,1,
                5,5,6,6,1,3,
                1,3,5,0,2,4,
                5,0,4,6,0,2,
                1,3,4,0,6,6
            ],
            [
                0,6,5,1,3,4,
                1,0,2,4,6,1,
                4,5,6,1,2,3,
                1,3,5,0,2,4,
                6,1,6,5,0,3,
                1,3,4,0,6,3
            ]
        ]
        this.firstSpawn = true;
        this.numberSushi = 0;
        this.trimAreaX = this.pos.x-this.width/2+17+37.5;
        this.trimAreaY = this.pos.y-this.height/2+17+37.5;
        this.posIncrease = [75*0, 75*1, 75*2, 75*3+2, 75*4+4, 75*5+6];
        this.posDecrease = [-75*6, -75*5, -75*4, -75*3+2, -75*2+4, -75*1+6];
        this.posReverse = [75*5+6, , 75*4+4, 75*3+2, 75*2, 75*1, 75*0];
        this.sushiList = [];
        this.rowSushi = 6;
        this.columnSushi = 6;
        this.objDeleteList = [];
        this.objDeleteList2 = [];
        this.allObjDeleteList = [];
        this.bonus4 = false;
        this.bonus4Type = 0;
        this.bonus4State = true;
        this.bonus5 = false;
        this.bonus5State = true;
        this.bonus5DeleteState = false;
        this.objDeleteBonusSushi = [];
        
        this.sushiHint = [];
        this.hintOn = false;
        this.timeHint = 0;
        this.timeHintState = false;
        this.hintWait = false;
        this.boardPlay = null;
        
        this.moveCheckerList1Line = [
            {offsetC: [0, 1, 3], offsetR: [0, 0, 0]},
            {offsetC: [0, 2, 3], offsetR: [0, 0, 0]}
        ];
        this.moveCheckerList2Line = [
            //[1,0,0]
            //[0,2,3]
            {offsetC: [0, 1, 2], offsetR: [1, 0, 0]},
            //[0,1,0]
            //[2,0,3]
            {offsetC: [0, 1, 2], offsetR: [0, 1, 0]},
            //[0,0,1]
            //[2,3,0]
            {offsetC: [0, 1, 2], offsetR: [0, 0, 1]},
            //[0,1,2]
            //[3,0,0]
            {offsetC: [0, 1, 2], offsetR: [0, 1, 1]},
            //[1,0,2]
            //[0,3,0]
            {offsetC: [0, 1, 2], offsetR: [1, 0, 1]},
            //[1,2,0]
            //[0,0,3]
            {offsetC: [0, 1, 2], offsetR: [1, 1, 0]}
        ];
        
        this.effHorizontal = false;
        this.effVertical = false;
        //  End of user code  //
	}

	update (dt){
		var drawNextFrame = super.update(dt);
        // Put user code here //
        if(this.firstSpawn){
            this.firstSpawn = false;
            this.spawnSushiGameFunc();
        }
        
        if(this.timeHintState){
            this.timeHint += 1;
            if(this.timeHint >= 300){
                this.timeHintState = false;
                this.timeHint = 0;
                this.hintWait = true;
                this.checkHintRowSushi();
            }
        }
        //  End of user code  //
		return drawNextFrame;
	}

	draw(renderer) {
		super.draw(renderer);
        // Put user code here //
        
        //  End of user code  //
	}

	onActivateEvent() {
        // Put user code here //
        
        //  End of user code  //
	}

	onDeactivateEvent() {

        // Put user code here //
        me.timer.clearInterval(this.intervalHint);
        me.timer.clearInterval(this.intervalChangeType);
        me.timer.clearInterval(this.intervalBoard);
        clearTimeout(this.globalTimeout);
        //  End of user code  //
	}

    // Put user code here //
    spawnSushiGameFunc(){
        let random = Math.floor(Math.random() * this.board.length);
        this.intervalBoard = me.timer.setInterval(()=>{
            if(this.boardPlay == random){
                random = Math.floor(Math.random() * this.board.length);
            }else{
                me.timer.clearInterval(this.intervalBoard);
                this.boardPlay = random;
                this.numberSushi = 0;
                for(let col=0; col<this.columnSushi; col++){
                    this.sushiList[col] = [];
                    
                    for(let row=0; row<this.rowSushi; row++){
                        let isSpecial = Math.random(), isBonus = Math.random();
                        
                        this.sushiList[col][row] = me.pool.pull("gamePlaySushi", this.trimAreaX+this.posIncrease[col], this.trimAreaY+this.posIncrease[row],{
                            type:this.board[random][this.numberSushi],//this.board[random][this.numberSushi],
                            gameOn: true,
                            numberSushi:this.numberSushi,
                            columnSushi: col,
                            rowSushi: row,
                            specialSushi: isSpecial < 0.02 ? true : false,
                            bonusSushi: isBonus < 0.01 ? true : false,
                        });
                        me.game.world.addChild(this.sushiList[col][row], this.pos._z+1);
                        this.numberSushi++;
                    }
                }
            }
        },100);
    }
    
    showAllSushiFunc(){
        this.timeHintState = true;
        for(let col=0; col<this.columnSushi; col++){
            for(let row=0; row<this.rowSushi; row++){
                this.sushiList[col][row].alpha = 1;
            }
        }
    }
    
    swapSushiFunc(obj, obj2, callCorr, callWrong){
        this.sushiList[obj.columnSushi][obj.rowSushi] = obj2;
        this.sushiList[obj2.columnSushi][obj2.rowSushi] = obj;
        
        this.checkListVerticalFunc(()=>{callCorr()}, ()=>{callWrong()});
    }
    
    checkListVerticalFunc(callCorr, callWrong){
        this.objDeleteList = [];
        this.objDeleteBonusSushi = [];
        
        for(let col=0; col<this.columnSushi; col++){
            for(let row=0; row<this.rowSushi; row++){
                if(row < 4 && this.sushiList[col][row].type == this.sushiList[col][row+1].type){
                    for(let row2 = row+2; row2<this.columnSushi; row2++){
                        if(this.sushiList[col][row].type == this.sushiList[col][row2].type){
                            this.effVertical = true;
                            this.objDeleteList.push({col:col, row:row, type:this.sushiList[col][row].type, special:this.sushiList[col][row].specialSushi, bonus:this.sushiList[col][row].bonusSushi});
                            this.objDeleteList.push({col:col, row:row+1, type:this.sushiList[col][row+1].type, special:this.sushiList[col][row+1].specialSushi, bonus:this.sushiList[col][row+1].bonusSushi});
                            this.objDeleteList.push({col:col, row:row2, type:this.sushiList[col][row2].type, special:this.sushiList[col][row2].specialSushi, bonus:this.sushiList[col][row2].bonusSushi});
                        }else{
                            break;
                        }
                    }
                }
            }
        }
        
        this.objDeleteList = this.objDeleteList.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.row === value.row && t.col === value.col
          ))
        )
        
        this.deleteAllColumnFunc();
        
        this.checkListHorizontalFunc(()=>{ 
            for(let i=0; i<this.objDeleteList.length; i++){
                if(i>2 && this.bonus4State){
                    let col4_1 = this.objDeleteList[i].col,
                        col4_2 = this.objDeleteList[i-1].col,
                        col4_3 = this.objDeleteList[i-2].col,
                        col4_4 = this.objDeleteList[i-3].col,
                        row4_1 = this.objDeleteList[i].row,
                        row4_2 = this.objDeleteList[i-1].row,
                        row4_3 = this.objDeleteList[i-2].row,
                        row4_4 = this.objDeleteList[i-3].row;
                    if(col4_1 == col4_2 && col4_1 == col4_3 && col4_1 == col4_4){
                        this.bonus4 = true;
                        this.bonus4Type = this.objDeleteList[i].type;
                        this.bonus5 = false;
                    }else if(row4_1 == row4_2 && row4_1 == row4_3 && row4_1 == row4_4){
                        this.bonus4 = true;
                        this.bonus4Type = this.objDeleteList[i].type;
                        this.bonus5 = false;
                    }
                }
                
                if(i>3 && this.bonus5State){
                    let col4_1 = this.objDeleteList[i].col,
                        col4_2 = this.objDeleteList[i-1].col,
                        col4_3 = this.objDeleteList[i-2].col,
                        col4_4 = this.objDeleteList[i-3].col,
                        col4_5 = this.objDeleteList[i-4].col,
                        row4_1 = this.objDeleteList[i].row,
                        row4_2 = this.objDeleteList[i-1].row,
                        row4_3 = this.objDeleteList[i-2].row,
                        row4_4 = this.objDeleteList[i-3].row,
                        row4_5 = this.objDeleteList[i-4].row;
                    if(col4_1 == col4_2 && col4_1 == col4_3 && col4_1 == col4_4 && col4_1 == col4_5){
                        this.bonus5 = true;
                        this.bonus4 = false;
                    }else if(row4_1 == row4_2 && row4_1 == row4_3 && row4_1 == row4_4 && row4_1 == row4_5){
                        this.bonus5 = true;
                        this.bonus4 = false;
                    }
                }
            }
            callCorr();
        }, ()=>{callWrong()});
    }
    
    checkListHorizontalFunc(callCorr, callWrong){
        this.objDeleteList2 = [];
        
        for(let row=0; row<this.rowSushi; row++){
            for(let col=0; col<this.columnSushi; col++){
                if(col < 4 && this.sushiList[col][row].type == this.sushiList[col+1][row].type){
                    for(let col2 = col+2; col2<this.columnSushi; col2++){
                        if(this.sushiList[col][row].type == this.sushiList[col2][row].type){
                            this.effHorizontal = true;
                            this.objDeleteList2.push({col:col, row:row, type:this.sushiList[col][row].type, special:this.sushiList[col][row].specialSushi, bonus:this.sushiList[col][row].bonusSushi});
                            this.objDeleteList2.push({col:col+1, row:row, type:this.sushiList[col+1][row].type, special:this.sushiList[col+1][row].specialSushi, bonus:this.sushiList[col+1][row].bonusSushi});
                            this.objDeleteList2.push({col:col2, row:row, type:this.sushiList[col2][row].type, special:this.sushiList[col2][row].specialSushi, bonus:this.sushiList[col2][row].bonusSushi});
                        }else{
                            break;
                        }
                    }
                }
            }
        }
        
        
        this.objDeleteList2 = this.objDeleteList2.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.col === value.col && t.row === value.row
          ))
        )
        
        this.deleteAllRowFunc();
        
        if(this.objDeleteList2.length == 0 && this.objDeleteList.length == 0){
            callWrong();
        }else{
            for(let i=0; i<this.objDeleteList2.length; i++){
                if(i>2 && this.bonus4State){
                    let col4_1 = this.objDeleteList2[i].col,
                        col4_2 = this.objDeleteList2[i-1].col,
                        col4_3 = this.objDeleteList2[i-2].col,
                        col4_4 = this.objDeleteList2[i-3].col,
                        row4_1 = this.objDeleteList2[i].row,
                        row4_2 = this.objDeleteList2[i-1].row,
                        row4_3 = this.objDeleteList2[i-2].row,
                        row4_4 = this.objDeleteList2[i-3].row;
                    if(col4_1 == col4_2 && col4_1 == col4_3 && col4_1 == col4_4){
                        this.bonus4 = true;
                        this.bonus4Type = this.objDeleteList2[i].type;
                        this.bonus5 = false;
                    }else if(row4_1 == row4_2 && row4_1 == row4_3 && row4_1 == row4_4){
                        this.bonus4 = true;
                        this.bonus4Type = this.objDeleteList2[i].type;
                        this.bonus5 = false;
                    }
                }
                
                if(i>3 && this.bonus5State){
                    let col4_1 = this.objDeleteList2[i].col,
                        col4_2 = this.objDeleteList2[i-1].col,
                        col4_3 = this.objDeleteList2[i-2].col,
                        col4_4 = this.objDeleteList2[i-3].col,
                        col4_5 = this.objDeleteList2[i-4].col,
                        row4_1 = this.objDeleteList2[i].row,
                        row4_2 = this.objDeleteList2[i-1].row,
                        row4_3 = this.objDeleteList2[i-2].row,
                        row4_4 = this.objDeleteList2[i-3].row,
                        row4_5 = this.objDeleteList2[i-4].row;
                    if(col4_1 == col4_2 && col4_1 == col4_3 && col4_1 == col4_4 && col4_1 == col4_5){
                        this.bonus5 = true;
                        this.bonus4 = false;
                    }else if(row4_1 == row4_2 && row4_1 == row4_3 && row4_1 == row4_4 && row4_1 == row4_5){
                        this.bonus5 = true;
                        this.bonus4 = false;
                    }
                }
            }
            callCorr();
        }
    }
    
    deleteSushiFunc(){
        this.timeHintState = false;
        this.timeHint = 0;
        if(this.bonus5DeleteState){
            this.bonus5DeleteState = false;
            
            if(me.state.current().targetSushi1.char.sushiTargetActive){
                me.state.current().targetSushi1.char.sushiTarget.calculateSushi(this.sushiList[this.objDeleteBonusSushi[0].col][this.objDeleteBonusSushi[0].row].type);
            }
            if(me.state.current().targetSushi2.char.sushiTargetActive){
                me.state.current().targetSushi2.char.sushiTarget.calculateSushi(this.sushiList[this.objDeleteBonusSushi[0].col][this.objDeleteBonusSushi[0].row].type);
            }
            
            score += this.objDeleteBonusSushi.length;
            
            let objEff = [];
            for(let i=0; i<this.objDeleteBonusSushi.length; i++){
                
                objEff[i] = me.pool.pull(
                    "gamePlayEffSushiRainbow",
                    this.sushiList[this.objDeleteBonusSushi[i].col][this.objDeleteBonusSushi[i].row].pos.x,
                    this.sushiList[this.objDeleteBonusSushi[i].col][this.objDeleteBonusSushi[i].row].pos.y
                );
                me.game.world.addChild(objEff[i], this.pos._z+3);
                objEff[i].spawnEffFunc(this.sushiList[this.objDeleteBonusSushi[i].col][this.objDeleteBonusSushi[i].row].type);
                
                me.game.world.removeChild(this.sushiList[this.objDeleteBonusSushi[i].col][this.objDeleteBonusSushi[i].row]);
                delete this.sushiList[this.objDeleteBonusSushi[i].col][this.objDeleteBonusSushi[i].row];
            }
        }else{
            this.allObjDeleteList = this.objDeleteList.concat(this.objDeleteList2);
            
            this.allObjDeleteList = this.allObjDeleteList.filter((value, index, self) =>
              index === self.findIndex((t) => (
                t.col === value.col && t.row === value.row
              ))
            )
            
            if(me.state.current().targetSushi1.char.sushiTargetActive){
                me.state.current().targetSushi1.char.sushiTarget.calculateSushi(this.sushiList[this.allObjDeleteList[0].col][this.allObjDeleteList[0].row].type);
            }
            if(me.state.current().targetSushi2.char.sushiTargetActive){
                me.state.current().targetSushi2.char.sushiTarget.calculateSushi(this.sushiList[this.allObjDeleteList[0].col][this.allObjDeleteList[0].row].type);
            }
            
            score += this.allObjDeleteList.length;
            
            if(this.effHorizontal && this.effVertical == false){
                this.effHorizontal = false;
                if(this.allObjDeleteList.length > 3 && this.allObjDeleteList[1].row !== this.allObjDeleteList[3].row){
                    this.eff = me.pool.pull(
                        "gamePlayEffSushiMatch",
                        this.sushiList[this.allObjDeleteList[1].col][this.allObjDeleteList[1].row].pos.x,
                        this.sushiList[this.allObjDeleteList[1].col][this.allObjDeleteList[1].row].pos.y
                    );
                    me.game.world.addChild(this.eff, this.pos._z+3);
                    this.eff.spawnEffFunc(false, this.sushiList[this.allObjDeleteList[1].col][this.allObjDeleteList[1].row].type);
                    
                    this.eff2 = me.pool.pull(
                        "gamePlayEffSushiMatch",
                        this.sushiList[this.allObjDeleteList[4].col][this.allObjDeleteList[4].row].pos.x,
                        this.sushiList[this.allObjDeleteList[4].col][this.allObjDeleteList[4].row].pos.y
                    );
                    me.game.world.addChild(this.eff2, this.pos._z+3);
                    this.eff2.spawnEffFunc(false, this.sushiList[this.allObjDeleteList[4].col][this.allObjDeleteList[4].row].type);
                }else{
                    this.eff = me.pool.pull(
                        "gamePlayEffSushiMatch",
                        this.sushiList[this.allObjDeleteList[1].col][this.allObjDeleteList[1].row].pos.x,
                        this.sushiList[this.allObjDeleteList[1].col][this.allObjDeleteList[1].row].pos.y
                    );
                    me.game.world.addChild(this.eff, this.pos._z+3);
                    this.eff.spawnEffFunc(false, this.sushiList[this.allObjDeleteList[1].col][this.allObjDeleteList[1].row].type);
                }
            }else if(this.effHorizontal  == false && this.effVertical){
                this.effVertical = false;
                if(this.allObjDeleteList.length > 3 && this.allObjDeleteList[1].col !== this.allObjDeleteList[3].col){
                    this.eff = me.pool.pull(
                        "gamePlayEffSushiMatch",
                        this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-5].col][this.allObjDeleteList[this.allObjDeleteList.length-5].row].pos.x,
                        this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-5].col][this.allObjDeleteList[this.allObjDeleteList.length-5].row].pos.y
                    );
                    me.game.world.addChild(this.eff, this.pos._z+3);
                    this.eff.spawnEffFunc(true, this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-5].col][this.allObjDeleteList[this.allObjDeleteList.length-5].row].type);
                    
                    this.eff2 = me.pool.pull(
                        "gamePlayEffSushiMatch",
                        this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-2].col][this.allObjDeleteList[this.allObjDeleteList.length-2].row].pos.x,
                        this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-2].col][this.allObjDeleteList[this.allObjDeleteList.length-2].row].pos.y
                    );
                    me.game.world.addChild(this.eff2, this.pos._z+3);
                    this.eff2.spawnEffFunc(true, this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-2].col][this.allObjDeleteList[this.allObjDeleteList.length-2].row].type);
                }else{
                    this.eff = me.pool.pull(
                        "gamePlayEffSushiMatch",
                        this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-2].col][this.allObjDeleteList[this.allObjDeleteList.length-2].row].pos.x,
                        this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-2].col][this.allObjDeleteList[this.allObjDeleteList.length-2].row].pos.y
                    );
                    me.game.world.addChild(this.eff, this.pos._z+3);
                    this.eff.spawnEffFunc(true, this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-2].col][this.allObjDeleteList[this.allObjDeleteList.length-2].row].type);
                }
            }else if(this.effHorizontal && this.effVertical){
                this.effHorizontal = false;
                this.effVertical = false;
                this.eff = me.pool.pull(
                    "gamePlayEffSushiMatch",
                    this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-2].col][this.allObjDeleteList[this.allObjDeleteList.length-2].row].pos.x,
                    this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-2].col][this.allObjDeleteList[this.allObjDeleteList.length-2].row].pos.y
                );
                me.game.world.addChild(this.eff, this.pos._z+3);
                this.eff.spawnEffFunc(true, this.sushiList[this.allObjDeleteList[this.allObjDeleteList.length-2].col][this.allObjDeleteList[this.allObjDeleteList.length-2].row].type);
                this.eff2 = me.pool.pull(
                    "gamePlayEffSushiMatch",
                    this.sushiList[this.allObjDeleteList[1].col][this.allObjDeleteList[1].row].pos.x,
                    this.sushiList[this.allObjDeleteList[1].col][this.allObjDeleteList[1].row].pos.y
                );
                me.game.world.addChild(this.eff2, this.pos._z+3);
                this.eff2.spawnEffFunc(false, this.sushiList[this.allObjDeleteList[1].col][this.allObjDeleteList[1].row].type);
            }
            
            for(let i=0; i<this.allObjDeleteList.length; i++){
                if(i==this.allObjDeleteList.length-1){
                    if(this.bonus4){
                        this.bonus4 = false;
                        this.sushiList[this.allObjDeleteList[i].col][this.allObjDeleteList[i].row].changeSushiSpecialFunc(this.bonus4Type);
                    }else if(this.bonus5){
                        this.bonus5 = false;
                        this.sushiList[this.allObjDeleteList[i].col][this.allObjDeleteList[i].row].changeSushiBonusFunc(this.sushiList[this.allObjDeleteList[i].col][this.allObjDeleteList[i].row].type);
                    }else{
                        me.game.world.removeChild(this.sushiList[this.allObjDeleteList[i].col][this.allObjDeleteList[i].row]);
                        delete this.sushiList[this.allObjDeleteList[i].col][this.allObjDeleteList[i].row];
                    }
                }else{
                    me.game.world.removeChild(this.sushiList[this.allObjDeleteList[i].col][this.allObjDeleteList[i].row]);
                    delete this.sushiList[this.allObjDeleteList[i].col][this.allObjDeleteList[i].row];
                }
            }
        }
        
        me.state.current().scoreText.setText(score);
        me.state.current().gameTimer.upTimeFunc();
        me.audio.play("sfx_gamePlaySushiCorrect");
        this.descendinSushiFunc();
    }
    
    descendinSushiFunc(){
        let posNumber = 0, objTemp = [];
        for(let col=0; col<this.columnSushi; col++){
            objTemp[col] = [];
            posNumber = 0;
            for(let row=0; row<this.rowSushi; row++){
                if(this.sushiList[col][row] != undefined){
                    objTemp[col].push(this.sushiList[col][row]);
                }
            }
        }
        
        this.sushiList = [];
        for(let col=0; col<this.columnSushi; col++){
            this.sushiList[col] = [];
            for(let row=0; row<this.rowSushi; row++){
                this.sushiList[col][row] = objTemp[col][row];
            }
        }
        
        for(let col=0; col<this.columnSushi; col++){
            for(let row=0; row<this.rowSushi; row++){
                if(objTemp[col].length < 6){
                    this.sushiList[col][5-row] = objTemp[col][objTemp[col].length-1-row];
                }
            }
        }
        
        for(let col=0; col<this.columnSushi; col++){
            for(let row=0; row<this.rowSushi; row++){
                if(this.sushiList[col][row] != undefined){
                    this.sushiList[col][row].pos.y = this.trimAreaY+this.posIncrease[row];
                }
            }
        }
        
        this.addSushiFunc();
    }
    
    addSushiFunc(){
        let tweenSushi = [], numberTween = 0, oncePlayFunc = true;
        for(let col=0; col<this.columnSushi; col++){
            for(let row=0; row<this.rowSushi; row++){
                if(this.sushiList[col][row] == undefined){
                    let randomType = Math.floor(Math.random() * 7);
                    
                    this.sushiList[col][row] = me.pool.pull("gamePlaySushi", this.trimAreaX+this.posIncrease[col], this.trimAreaY+this.posDecrease[row],{
                        type: randomType,
                        gameOn: true,
                        numberSushi:this.numberSushi,
                        columnSushi: col,
                        rowSushi: row,
                        specialSushi: false,
                        bonusSushi:  false
                    });
                    me.game.world.addChild(this.sushiList[col][row], this.pos._z+1);
                    this.sushiList[col][row].alpha = 1;
                    
                    tweenSushi[numberTween] = new me.Tween(this.sushiList[col][row].pos)
                    .to({y:this.sushiList[col][row].pos.y+75*6}, 700)
                    .easing(me.Tween.Easing.Back.Out)
                    .onComplete(()=>{
                        if(oncePlayFunc){
                            oncePlayFunc = false
                            this.resetNumberSushiFunc();
                        }
                    });
                    tweenSushi[numberTween].start();
                    
                    numberTween++
                }
            }
        } 
    }
    
    resetNumberSushiFunc(){
        let numberSushi = 0, typeTemp = [], special = [], bonus = [];
        for(let col=0; col<this.columnSushi; col++){
            for(let row=0; row<this.rowSushi; row++){
                this.sushiList[col][row].numberSushi = numberSushi;
                this.sushiList[col][row].columnSushi = col;
                this.sushiList[col][row].rowSushi = row;
                typeTemp.push(this.sushiList[col][row].type);
                special.push(this.sushiList[col][row].specialSushi);
                bonus.push(this.sushiList[col][row].bonusSushi);
            }
        }
        
        for(let col=0; col<this.columnSushi; col++){
            for(let row=0; row<this.rowSushi; row++){
                me.game.world.removeChild(this.sushiList[col][row]);
                delete this.sushiList[col][row];
            }
        }
        
        for(let col=0; col<this.columnSushi; col++){
            for(let row=0; row<this.rowSushi; row++){
                this.sushiList[col][row] = me.pool.pull("gamePlaySushi", this.trimAreaX+this.posIncrease[col], this.trimAreaY+this.posIncrease[row],{
                    type:typeTemp[numberSushi],
                    gameOn: true,
                    numberSushi:numberSushi,
                    columnSushi: col,
                    rowSushi: row,
                    specialSushi: special[numberSushi],
                    bonusSushi: bonus[numberSushi]
                });
                me.game.world.addChild(this.sushiList[col][row], this.pos._z+1);
                this.sushiList[col][row].alpha = 1;
                numberSushi++;
            }
        }
        
        this.checkListVerticalFunc(()=>{
            let kk = true;
            me.timer.setTimeout(()=>{
                if(kk){kk = false;this.deleteSushiFunc();}
            },500);
        }, ()=>{
            this.resetSushiHintAnimFunc();
            this.timeHintState = false;
            this.timeHint = 0;
            this.checkHintRowSushi();
            this.bonus4State = true;
            this.bonus5State = true;
            me.state.current().clickSushi = true;
        });
    }
    
    deleteAllColumnFunc(){
        let once = true, objSpecial = [];
        for(let g in this.objDeleteList){
            if(this.objDeleteList[g].special && once){
                once = false;
                this.bonus4State = false;
                this.bonus5State = false;
                for(let a=0; a<this.columnSushi; a++){
                    objSpecial.push({col:this.objDeleteList[g].col, row:a});
                }
            }
        }
        
        objSpecial = objSpecial.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.row === value.row && t.col === value.col
          ))
        )
        
        for(let h in objSpecial){
            this.objDeleteList[h] = objSpecial[h];
        }
    }
    
    deleteAllRowFunc(){
        let once = true, objSpecial = [];
        for(let g in this.objDeleteList2){
            if(this.objDeleteList2[g].special && once){
                once = false;
                this.bonus4State = false;
                this.bonus5State = false;
                for(let a=0; a<this.rowSushi; a++){
                    objSpecial.push({col:a, row:this.objDeleteList2[g].row});
                }
            }
        }
        
        objSpecial = objSpecial.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.row === value.row && t.col === value.col
          ))
        )
        
        for(let h in objSpecial){
            this.objDeleteList2[h] = objSpecial[h];
        }
    }
    
    deleteAllBonusFunc(obj, type){
        this.objDeleteBonusSushi.push({col:obj.columnSushi, row:obj.rowSushi});
        
        for(let row=0; row<this.rowSushi; row++){
            for(let col=0; col<this.columnSushi; col++){
                if(type == this.sushiList[col][row].type){
                    this.objDeleteBonusSushi.push({col:col, row:row});
                }
            }
        }
        
        this.bonus5DeleteState = true;
        this.deleteSushiFunc();
    }
    
    checkHintRowSushi(){
        this.hintOn = true;
        this.sushiHint = [];
        let col=0, row=0, che=0, time=0, increaseState = true, checkLength = 2, step1 = true, timeScale = 0;
        
        this.intervalCheckRow = me.timer.setInterval(()=>{
            if(step1){
                this.sushiHint = [
                    this.sushiList[col+this.moveCheckerList1Line[che].offsetC[0]][row+this.moveCheckerList1Line[che].offsetR[0]],
                    this.sushiList[col+this.moveCheckerList1Line[che].offsetC[1]][row+this.moveCheckerList1Line[che].offsetR[1]],
                    this.sushiList[col+this.moveCheckerList1Line[che].offsetC[2]][row+this.moveCheckerList1Line[che].offsetR[2]]
                ];
                if(this.sushiHint[0].type == this.sushiHint[1].type && this.sushiHint[0].type == this.sushiHint[2].type){
                    me.timer.clearInterval(this.intervalCheckRow);
                    
                    if(this.hintWait){
                        this.intervalHint = me.timer.setInterval(()=>{
                            timeScale += 1;
                            if(timeScale > 30){
                                timeScale = 0;
                                time += 1;
                                if(increaseState){
                                    increaseState = false;
                                }else{
                                    increaseState = true;
                                }
                            }
                            
                            if(increaseState){
                                this.sushiHint[0].scale(1.005);
                                this.sushiHint[1].scale(1.005);
                                this.sushiHint[2].scale(1.005);
                            }else{
                                this.sushiHint[0].scale(0.995);
                                this.sushiHint[1].scale(0.995);
                                this.sushiHint[2].scale(0.995);
                            }
                            
                            if(time >= 10){
                                this.resetSushiHintAnimFunc();
                            }
                        }, 1);
                    }else{
                        this.resetSushiHintAnimFunc();
                    }
                }else{
                    che += 1;
                    if(che > this.moveCheckerList1Line.length-1){
                        che = 0;
                        row += 1;
                        if(row > 5){
                            row = 0;
                            col += 1;
                            if(col > checkLength){
                                this.sushiHint = [];
                                col = 0;
                                row = 0; 
                                che = 0;
                                time=0
                                increaseState = true;
                                checkLength = 3;
                                step1 = false;
                            }
                        }
                    }
                }
            }else{
                this.sushiHint = [
                    this.sushiList[col+this.moveCheckerList2Line[che].offsetC[0]][row+this.moveCheckerList2Line[che].offsetR[0]],
                    this.sushiList[col+this.moveCheckerList2Line[che].offsetC[1]][row+this.moveCheckerList2Line[che].offsetR[1]],
                    this.sushiList[col+this.moveCheckerList2Line[che].offsetC[2]][row+this.moveCheckerList2Line[che].offsetR[2]]
                ];
                
                if(this.sushiHint[0].type == this.sushiHint[1].type && this.sushiHint[0].type == this.sushiHint[2].type){
                    me.timer.clearInterval(this.intervalCheckRow);
                    
                    if(this.hintWait){
                        this.intervalHint = me.timer.setInterval(()=>{
                            timeScale += 1;
                            if(timeScale > 30){
                                timeScale = 0;
                                time += 1;
                                if(increaseState){
                                    increaseState = false;
                                }else{
                                    increaseState = true;
                                }
                            }
                            
                            if(increaseState){
                                this.sushiHint[0].scale(1.005);
                                this.sushiHint[1].scale(1.005);
                                this.sushiHint[2].scale(1.005);
                            }else{
                                this.sushiHint[0].scale(0.995);
                                this.sushiHint[1].scale(0.995);
                                this.sushiHint[2].scale(0.995);
                            }
                            
                            if(time >= 10){
                                this.resetSushiHintAnimFunc();
                            }
                        }, 1);
                    }else{
                        this.resetSushiHintAnimFunc();
                    }
                }else{
                    che += 1;
                    if(che > this.moveCheckerList2Line.length-1){
                        che = 0;
                        row += 1;
                        if(row > 4){
                            row = 0;
                            col += 1;
                            if(col > checkLength){
                                this.sushiHint = [];
                                col = 0;
                                row = 0; 
                                che = 0;
                                time=0
                                increaseState = true;
                                checkLength = 2;
                                step1 = true;
                                me.timer.clearInterval(this.intervalCheckRow);
                                this.checkHintColumnSushi();
                            }
                        }
                    }
                }
            }
        },1);
    }
    
    checkHintColumnSushi(){
        this.hintOn = true;
        this.sushiHint = [];
        let col=0, row=0, che=0, time=0, increaseState = true, checkLength = 2, step1 = true, timeScale = 0;
        
        this.intervalCheckRow = me.timer.setInterval(()=>{
            if(step1){
                this.sushiHint = [
                    this.sushiList[col+this.moveCheckerList1Line[che].offsetR[0]][row+this.moveCheckerList1Line[che].offsetC[0]],
                    this.sushiList[col+this.moveCheckerList1Line[che].offsetR[1]][row+this.moveCheckerList1Line[che].offsetC[1]],
                    this.sushiList[col+this.moveCheckerList1Line[che].offsetR[2]][row+this.moveCheckerList1Line[che].offsetC[2]]
                ];
                if(this.sushiHint[0].type == this.sushiHint[1].type && this.sushiHint[0].type == this.sushiHint[2].type){
                    me.timer.clearInterval(this.intervalCheckRow);
                    
                    if(this.hintWait){
                        this.intervalHint = me.timer.setInterval(()=>{
                            timeScale += 1;
                            if(timeScale > 30){
                                timeScale = 0;
                                time += 1;
                                if(increaseState){
                                    increaseState = false;
                                }else{
                                    increaseState = true;
                                }
                            }
                            
                            if(increaseState){
                                this.sushiHint[0].scale(1.005);
                                this.sushiHint[1].scale(1.005);
                                this.sushiHint[2].scale(1.005);
                            }else{
                                this.sushiHint[0].scale(0.995);
                                this.sushiHint[1].scale(0.995);
                                this.sushiHint[2].scale(0.995);
                            }
                            
                            if(time >= 10){
                                this.resetSushiHintAnimFunc();
                            }
                        }, 1);
                    }else{
                        this.resetSushiHintAnimFunc();
                    }
                }else{
                    che += 1;
                    if(che > this.moveCheckerList1Line.length-1){
                        che = 0;
                        col += 1;
                        if(col > 5){
                            col = 0;
                            row += 1;
                            if(row > checkLength){
                                this.sushiHint = [];
                                col = 0;
                                row = 0; 
                                che = 0;
                                time=0
                                increaseState = true;
                                checkLength = 3;
                                step1 = false;
                            }
                        }
                    }
                }
            }else{
                this.sushiHint = [
                    this.sushiList[col+this.moveCheckerList2Line[che].offsetR[0]][row+this.moveCheckerList2Line[che].offsetC[0]],
                    this.sushiList[col+this.moveCheckerList2Line[che].offsetR[1]][row+this.moveCheckerList2Line[che].offsetC[1]],
                    this.sushiList[col+this.moveCheckerList2Line[che].offsetR[2]][row+this.moveCheckerList2Line[che].offsetC[2]]
                ];
                
                if(this.sushiHint[0].type == this.sushiHint[1].type && this.sushiHint[0].type == this.sushiHint[2].type){
                    me.timer.clearInterval(this.intervalCheckRow);
                    
                    if(this.hintWait){
                        this.intervalHint = me.timer.setInterval(()=>{
                            timeScale += 1;
                            if(timeScale > 30){
                                timeScale = 0;
                                time += 1;
                                if(increaseState){
                                    increaseState = false;
                                }else{
                                    increaseState = true;
                                }
                            }
                            
                            if(increaseState){
                                this.sushiHint[0].scale(1.005);
                                this.sushiHint[1].scale(1.005);
                                this.sushiHint[2].scale(1.005);
                            }else{
                                this.sushiHint[0].scale(0.995);
                                this.sushiHint[1].scale(0.995);
                                this.sushiHint[2].scale(0.995);
                            }
                            
                            if(time >= 10){
                                this.resetSushiHintAnimFunc();
                            }
                        }, 1);
                    }else{
                        this.resetSushiHintAnimFunc();
                    }
                }else{
                    che += 1;
                    if(che > this.moveCheckerList2Line.length-1){
                        che = 0;
                        col += 1;
                        if(col > 4){
                            col = 0;
                            row += 1;
                            if(row > checkLength){
                                this.sushiHint = [];
                                col = 0;
                                row = 0; 
                                che = 0;
                                time=0
                                increaseState = true;
                                checkLength = 2;
                                step1 = true;
                                me.timer.clearInterval(this.intervalCheckRow);
                                this.checkHintBonusSushi();
                            }
                        }
                    }
                }
            }
        },1);
    }
    
    checkHintBonusSushi(){
        this.sushiHint = [];
        let col = 0, row = 0, time = 0, increaseState = true;
        this.intervalCheckRow = me.timer.setInterval(()=>{
            this.sushiHint = [
                this.sushiList[col][row],
                this.sushiList[col][row],
                this.sushiList[col][row]
            ];
            
            if(this.sushiHint[0].bonusSushi){
                me.timer.clearInterval(this.intervalCheckRow);
                if(this.hintWait){
                    this.intervalHint = me.timer.setInterval(()=>{
                        if(increaseState){
                            increaseState = false;
                            this.sushiHint[0].scale(1.04);
                            this.sushiHint[1].scale(1.04);
                            this.sushiHint[2].scale(1.04);
                        }else{
                            increaseState = true;
                            this.sushiHint[0].currentTransform.identity();
                            this.sushiHint[1].currentTransform.identity();
                            this.sushiHint[2].currentTransform.identity();
                        }
                        
                        time += 1;
                        if(time >= 10){
                            this.resetSushiHintAnimFunc();
                        }
                    }, 500);
                }else{
                    this.resetSushiHintAnimFunc();
                }
            }else{
                row += 1;
                if(row > 5){
                    row = 0;
                    col += 1;
                    if(col > 5){
                        col = 0;
                        row = 0;
                        me.timer.clearInterval(this.intervalCheckRow);
                        me.state.current().gameOverFunc();
                    }
                }
            }
        },1);
    }
    
    resetSushiHintAnimFunc(){
        if(this.hintOn){
            this.hintOn = false;
            this.timeHintState = true;
            this.timeHint = 0;
            this.hintWait = false;
            if(this.sushiHint.length > 0){
                this.sushiHint[0].currentTransform.identity();
                this.sushiHint[1].currentTransform.identity();
                this.sushiHint[2].currentTransform.identity();
            }
            me.timer.clearInterval(this.intervalHint);
            me.timer.clearInterval(this.intervalCheckRow);
        }
    }
    
    powerUpFunction(col, row, type, callback){
        this.objDeleteList = [];
        let objEff;
        if(type == "ginger"){
            objEff = me.pool.pull(
                "gamePlayEffSushiRainbow",
                me.game.viewport.width/2,
                me.game.viewport.height/2+50
            );
            me.game.world.addChild(objEff, this.pos._z+3);
            objEff.spawnEffFunc(type);
            
            this.resetSushiHintAnimFunc();
            
            for(let q=0; q<this.columnSushi; q++){
                for(let w=0; w<this.rowSushi; w++){
                    me.game.world.removeChild(this.sushiList[q][w]);
                    
                    delete this.sushiList[q][w];
                }
            }
            
            this.sushiList = [];
            this.spawnSushiGameFunc();
        }else if(type == "radish"){
            for(let i=0; i<6; i++){
                this.objDeleteList.push({col:col, row:i});
            }
            
            objEff = me.pool.pull(
                "gamePlayEffSushiMatch",
                this.sushiList[this.objDeleteList[2].col][this.objDeleteList[2].row].pos.x,
                this.sushiList[this.objDeleteList[2].col][this.objDeleteList[2].row].pos.y
            );
            me.game.world.addChild(objEff, this.pos._z+3);
            objEff.spawnEffFunc(true, type);
            
            this.deleteSushiFunc();
        }else if(type == "mayo"){
            let newType = Math.floor(Math.random() * 7), 
                oldNumberSushi = this.sushiList[col][row].numberSushi;
                this.oldPosX = this.sushiList[col][row].pos.x;
                this.oldPosY = this.sushiList[col][row].pos.y;
                
            objEff = me.pool.pull(
                "gamePlayEffSushiRainbow",
                this.oldPosX,
                this.oldPosY
            );
            me.game.world.addChild(objEff, this.pos._z+3);
            objEff.spawnEffFunc(type);
            
            this.intervalChangeType = me.timer.setInterval(()=>{
                if(this.sushiList[col][row].type == newType){
                    newType = Math.floor(Math.random() * 7);
                }else{
                    me.game.world.removeChild(this.sushiList[col][row]);
                    
                    me.timer.clearInterval(this.intervalChangeType);
                    this.globalTimeout = setTimeout(()=>{
                        let chance = Math.random();
                        this.sushiList[col][row] = me.pool.pull("gamePlaySushi", this.oldPosX, this.oldPosY,{
                            type:newType,
                            gameOn: true,
                            numberSushi: oldNumberSushi,
                            columnSushi: col,
                            rowSushi: row,
                            specialSushi: chance < 0.02 ? true : false,
                            bonusSushi: false,
                        });
                        me.game.world.addChild(this.sushiList[col][row], me.state.current().sushiStage.pos._z+1);
                        this.sushiList[col][row].alpha = 1;
                        
                        clearTimeout(this.globalTimeout);
                        
                        this.checkListVerticalFunc(()=>{
                            let kk = true;
                            me.timer.setTimeout(()=>{
                                if(kk){kk = false;this.deleteSushiFunc();}
                            },500);
                        }, ()=>{
                            this.resetSushiHintAnimFunc();
                            this.timeHint = 0;
                            this.timeHintState = false;
                            this.checkHintRowSushi();
                            this.bonus4State = true;
                            this.bonus5State = true;
                            me.state.current().clickSushi = true;
                        });
                    }, 100);
                }
            }, 100);
        }else if(type == "soySauce"){
            this.objDeleteList.push({col:col, row:row});
            objEff = me.pool.pull(
                "gamePlayEffSushiRainbow",
                this.sushiList[this.objDeleteList[0].col][this.objDeleteList[0].row].pos.x,
                this.sushiList[this.objDeleteList[0].col][this.objDeleteList[0].row].pos.y
            );
            me.game.world.addChild(objEff, this.pos._z+3);
            objEff.spawnEffFunc(type);
            this.deleteSushiFunc();
        }
        
        callback();
    }
    //  End of user code  //
};

// Put user code here //
 
//  End of user code  //
