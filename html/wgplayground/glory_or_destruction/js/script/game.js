// Put user code here //
game.component = {};
game.template = {};
game.controller = {};
game.data = {};
game.class = {};
game.resource = {};
game.user = null;

var sub = me.event.subscribe(me.event.LOADER_COMPLETE, function(){
    game.data.unit = me.loader.getJSON("data_unit");
    game.data.hero = me.loader.getJSON("data_hero");
    game.data.tower = me.loader.getJSON("data_tower");
    game.data.hq = me.loader.getJSON("data_hq");
    game.data.stage = me.loader.getJSON("data_stage");
    game.data.shop = me.loader.getJSON("data_shop");
    game.data.homebase = me.loader.getJSON("data_homebase");
    game.data.achievement = me.loader.getJSON("data_achievement");
    
    // controller
    game.controller.data = new DataController();
    // game.controller.data.initDatabase(); // for debug purposes
    // --
    game.controller.achievement = new AchievementController();
    // game.controller.Ads = new Ads();
    //config
    me.sys.fps = 30;
    
    me.event.unsubscribe(sub);
});

var levelLoadedSub = me.event.subscribe(me.event.LEVEL_LOADED, function(){
    if(!game.controller.loading){
        game.controller.loading = me.pool.pull("loadingController", 0, 0);  
        game.controller.loading.hide(null, true);
        me.game.world.addChild(game.controller.loading, game.controller.loading.pos.z);
    }
    
    me.event.unsubscribe(levelLoadedSub);
});
//  End of user code  //
