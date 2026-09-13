// Put user code here //
game.component = {};
game.template = {};
game.controller = {};
game.data = {};
game.class = {};
game.resource = {};
game.user = null;
game.soket = {};

var sub = me.event.subscribe(me.event.LOADER_COMPLETE, function(){
    game.data.diamondShop = me.loader.getJSON("DiamondShop");
    game.data.weapon = me.loader.getJSON("GunInfo");
    game.data.zombie = me.loader.getJSON("ZombieInfo");
    game.data.stage = me.loader.getJSON("StageInfo");
    game.data.upgrade = me.loader.getJSON("UpgradeInfo");
    game.data.benua = me.loader.getJSON("Benua");
    game.data.dailyQuest = me.loader.getJSON("DailyQuestInfo");
    game.data.dailyReward = me.loader.getJSON("DailyReward");
    game.data.achievement = me.loader.getJSON("Achievement");
    game.data.loginReward = me.loader.getJSON("LoginReward");
    game.controller.data = new DataController();
    me.timer.maxfps = 60;
    me.timer.fps = 30;
    me.timer.interpolation = true;
    me.timer.tick = 30;
    
    me.event.unsubscribe(sub);
});
//  End of user code  //
