// Put user code here //
game.component = {};
game.template = {};
game.controller = {};
game.data = {};
game.class = {};
game.resource = {};
game.user = null;

var sub = me.event.subscribe(me.event.LOADER_COMPLETE, function(){
    game.data.heroInfo = me.loader.getJSON("HeroInfo");
    game.data.waveInfo = me.loader.getJSON("WaveInfo");
    game.data.stageInfo = me.loader.getJSON("StageInfo");
    game.data.enemyInfo = me.loader.getJSON("EnemyInfo");
    game.data.traitInfo = me.loader.getJSON("TraitInfo");
    game.data.cafetariaInfo = me.loader.getJSON("CafetariaInfo");
    game.data.cafetariaInfoWeb = me.loader.getJSON("CafetariaInfoWeb");
    game.data.nerdItemInfo = me.loader.getJSON("NerdItemInfo");
    game.data.itemInfo = me.loader.getJSON("ItemInfo");
    game.data.homeroomInfo = me.loader.getJSON("HomeroomInfo");
    game.data.achievementInfo = me.loader.getJSON("AchievementInfo");
    game.data.timeAtkInfo = me.loader.getJSON("TimeAttackInfo");
    game.controller.data = new DataController();
    
    me.event.unsubscribe(sub);
});
//  End of user code  //
