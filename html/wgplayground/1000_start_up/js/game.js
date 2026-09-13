var adsOnceRun = true,
    pressAds = false,
    timeAdsOn = 0;
function init() {
    console.log("Init SDK");
}

function adShowMidRoll(callback){
    if(adsOnceRun){
        adsOnceRun = false;
        me.audio.muteAll();
        window[window.preroll.config.loaderObjectName].refetchAd(callback);
    }                   
}

me.device.onReady(function onReady() {
    init();
    game.onload();
});

/*
* link test : https://www.facebook.com/embed/instantgames/432036900540145/player?game_url=https%3A%2F%2Flocalhost%3A8080
*/


/* Game namespace */
var game = {

    sawAds : false,
    adsOnload : false,
    ads : null,

    retryGame: false,


    // an object where to store game information
    texture : {
        assets : null,
        assets2 : null,
        loading : null,
    },

    // score integer
    score : 0,
    // score with kilo formatter
    scoreHUD : '0k',
    // initial pattern for blok. set pattern as array
    pattern : [],
    // initial char used by user (salaryman, mark, steve, and hipster)
    char : 'salaryman',
    // initial speed char
    speed : 500, //500
    // retry data
    retry : 0,
    //segment for spawn char after game over
    segment : 0,
    //flip
    flipX : 0,
    //jumpTimes
    nextJumpTimes : 0,
    //loading
    isLoading: false,
    // condition when countdown
    isCountdown : false,
    // last pos managerBlok
    currentBlokPos : 0,
    // number array 
    arrChar: 3,
    offsetX: 0,
    offsetY: 0,
    data : {
        // data unlock ['salaryman', 'mark', 'steve', 'hipster']
        unlock : [],
        // if game done
        done : 0,
    },
    

    version : "v0.1",

    // Run on page load.
    "onload" : function () {
        // Initialize the video.        
        if (!me.video.init(720, 1200, {
                wrapper : "screen",
                scale : "auto",
                scaleMethod : 'flex-width',
                doubleBuffering : true
            })) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }
        
        // Initialize the audio.
        me.audio.init("mp3");

        /*me.event.subscribe(me.event.LOADER_PROGRESS, 
            function (progress) {      
                FBInstant.setLoadingProgress(Math.round(progress * 100)); 
        });*/
        
        var self = this;
        
        me.loader.preload(game.resources, function start(){  
        me.loader.crossOrigin = "anonymous";   
        // tells the SDK to end loading view and start the game     
            // FBInstant.startGameAsync()       
            //     .then(function() {              

                    // me.save.id_user = FBInstant.player.getID();
                    // me.save.name = FBInstant.player.getName();
                    // me.save.photo = FBInstant.player.getPhoto();

                    // //get data from FB API
                    // self.getDataAsync();


                    me.event.publish(me.event.WINDOW_ONRESIZE);

                    self.loaded();


                 // }); 
        });

        // set and load all resources.
        // (this will also automatically switch to the loading screen)
        // me.loader.preload(game.resources, this.loaded.bind(this));
    },

    // Run on game resources loaded.
    "loaded" : function () {

        me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // add our player entity in the entity pool
        me.pool.register("mainPlayer", game.PlayerEntity); // main player
        me.pool.register("Block", game.BlockEntity); // block entity
        me.pool.register("managerBlok", game.ManagerBlok) // manager container
        me.pool.register("button", game.Button);// button

        // Start the game.
        me.state.change(me.state.MENU);
        //me.state.change(me.state.PLAY);
        
        //enable the keyboard
        me.input.bindKey(me.input.KEY.SPACE, "turn", true); // for moving using keyboard
        // me.input.bindKey(me.input.KEY.X, "turnForBtn", true);

        // registering assets from texture packer
        game.texture.assets = new me.video.renderer.Texture(
            me.loader.getJSON("assets"),
            me.loader.getImage("assets")
        );

        game.texture.assets2 = new me.video.renderer.Texture(
            me.loader.getJSON("assets3"),
            me.loader.getImage("assets3")
        );

        game.texture.loading = new me.video.renderer.Texture(
            me.loader.getJSON("loading"),
            me.loader.getImage("loading")
        );

        me.audio.playTrack("BGM");
    },

    "restart": function(){
        // reseting game
        me.game.reset();
        me.state.current().onDestroyEvent();
        me.state.current().onResetEvent();        
    },

    "getDataAsync": function(){
        var _this = this;

        // FBInstant.player.getDataAsync(['data_user'])
        // .then(function(data) {
        //     //console.log('data is loaded');
        //     var data_achievements = data['data_user'];
        //     //console.log(data_achievements);
        //     if(data_achievements == undefined){
        //         _this.setDataAsync(game.data);
        //     }else{
        //         game.data = data_achievements;
        //         //console.log(game.data);
        //     }

        // }).catch(function(e) {
        //   //console.log(e);
        // }); 
    },

    "setDataAsync": function(data){
        // FBInstant.player.setDataAsync({
        //     data_user: data })
        // .then(function() {
        //     //console.log('data is set');
        // }).catch(function(e) {
        //   //console.log(e);
        // }); 
    },
};
