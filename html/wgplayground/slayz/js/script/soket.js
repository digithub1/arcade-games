// Put user code here //
game.data = {
    multiplayer:false,
    username :'',
    numberUser:'',
    playergameID:'',
    gameList:[],
    objGame:{},
    player1:{},
    player2:{},
    lose:false,
    levelsekarang:''
}


function NumberUser (data){
    if(!data){
        return;
    }
    this.totalPlayer = me.pool.pull('me.BitmapText', 650, 570, {
                 font: 'veteranTypewriterWhite',
                 size : 0.75,//1.5,
                 text : data,
                 textAlign : 'left',
                 textBaseAlign : 'bottom',
                 anchorPoint : {x: 0, y: 0.5}
                 }); 
    me.game.world.addChild(this.totalPlayer, 10);
}

function updateNumber (data){
    this.totalPlayer.setText(data);
}

function showPlayer(data, posx, posy){
    this.playerText = me.pool.pull('me.BitmapText', posx, posy, {
                 font: 'veteranTypewriterWhite',
                 size : 0.75,//1.5,
                 text : data,
                 textAlign : 'left',
                 textBaseAlign : 'bottom',
                 anchorPoint : {x: 0, y: 0.5}
                 }); 
    me.game.world.addChild(this.playerText, 10);
}

function playlist(){
    

}

//  End of user code  //
