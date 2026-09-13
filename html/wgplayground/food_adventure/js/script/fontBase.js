// Put user code here //
game.font = {};

game.font.loja = function(x, y, settings = {}){
    settings.font = "loja";
    return me.pool.pull("me.BitmapText", x, y, settings);
};


game.font.rockford = function(x, y, settings = {}){
    settings.font = "rockford";
    return me.pool.pull("me.BitmapText", x, y, settings);
};

game.font.arialBlack = function(x, y, settings = {}){
    settings.font = "arialBlack";
    return me.pool.pull("me.BitmapText", x, y, settings);
};
//  End of user code  //
