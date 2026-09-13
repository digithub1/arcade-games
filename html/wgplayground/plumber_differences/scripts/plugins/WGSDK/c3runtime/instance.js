"use strict";

const C3 = globalThis.C3;

const WEEGOO_URL = "https://afg.wgplayer.com/wgplayer.com/js/RkQDh8KWt62VoH09FPNYqA/2357995679/wgAds.js";
console.log("instance","2.0.1 - SDK V2");

{
  C3.Plugins.WGSDK.Instance = class SingleGlobalInstance extends globalThis.ISDKInstanceBase {
      
      constructor() {
      super();

      const properties = this._getInitProperties();

      this.GetRuntime = function(){
        return c3_runtimeInterface._GetLocalRuntime();
      }

      this.sdkInited = true;
      this.sdkLoaded = false;
      
      this.adWasRequested = false;
      this.adWasReturned = false;

      this.gameWasPaused = false;
      this.gameWasResumed = false;

      this.rewardInited = false;
      this.rewardIsReady = false;
      this.rewardWasGranted = false;
      this.rewardWasCanceled = false;
      this.rewardWasClosed = false;

      this.rewardCallback = null;
      this.rewardContext = null;

      this.gameEvents = [
        "game-event-start",
        "game-event-level-start",
        "game-event-level-finished",
        "game-event-level-failed",
        "game-event-life-lost",
        "game-event-game-pause",
        "game-event-resume-game",
        "game-event-game-over",
        "game-event-game-checkpoint",
        "game-event-game-tutorial",
        "game-event-game-iap",
        "game-event-game-achievement-unblock",
        "game-event-game-countdown",
        "game-event-game-daily-reward"

      ];


      if ( typeof window["preroll"] !== "object" ){

        //console.log( "[WGSDK] Weegoo not found, loading" );
        
        (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          fjs.parentNode.insertBefore(js, fjs);
          js.addEventListener("load", function (e) {
            (function (d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s);
              js.id = id;
              fjs.parentNode.insertBefore(js, fjs);
              js.addEventListener("load", function () {

                var checkSdk = setInterval( function(){
                  if( window[window["preroll"]["config"]["loaderObjectName"]] ){
                    this.sdkLoaded = true;
                    this.WGSDK = window[window["preroll"]["config"]["loaderObjectName"]];

                    
                    this.WGSDK.registerGameControls({
                      
                      "pause":this.PauseGame,
                      "resume":this.SetAdInactive,
                      "context":this,

                    });


                    clearInterval(checkSdk);
                  }

                }.bind(this), 1000);

              }.bind(this));

              js.src = WEEGOO_URL;

            }.bind(this))(document, "script", "wgplayer-library");
          }.bind(this));
          js.src = "https://afg.wgplayer.com/wgplayer.com/wgAds.iframe.conf.js";          
        }.bind(this))(document, "script", "wgplayer-conf");
      }else{

        var checkSdk = setInterval( function(){

          //console.log( "[WGSDK] Checking sdk ..." );

          if( window[window["preroll"]["config"]["loaderObjectName"]] ){
            this.sdkLoaded = true;
            this.WGSDK = window[window["preroll"]["config"]["loaderObjectName"]];
            clearInterval(checkSdk);

            this.WGSDK.registerGameControls({                      
              "pause":this.PauseGame,
              "resume":this.SetAdInactive,
              "context":this
            });

          }
        }.bind(this), 100);

      }

    }

    Release() {
      super.Release();
    }

    SaveToJson() {return {};}

    LoadFromJson(o) {}

    SetAdInactive( success = false, gameContext ){

      if( gameContext ){
        gameContext.adWasReturned = success;
        gameContext.adWasRequested = true;   
        gameContext.gameWasResumed = true;
      }else{ 
        this.adWasReturned = success;
        this.adWasRequested = true;   
        this.gameWasResumed = true;
      }
      
      this.ResumeGame();

    }


    PauseGame(){
      this.GetRuntime().SetSuspended(true);      
    }

    ResumeGame(){
      this.GetRuntime().SetSuspended(false);      
    }


    RequestAd() {
      if( this.sdkInited && this.WGSDK ){
        this.gameWasPaused = true;     
        this.WGSDK.refetchAd( [this.SetAdInactive, this] );

        this.PauseGame();
        //this.GetRuntime().SetSuspended(true);
        //this.GetInstance().GetRuntime().SetTimeScale(0)        
      }      
    }

    GameEvent( event ){
      if( this.sdkInited && this.WGSDK ){
        this.WGSDK.GameEvent( this.gameEvents[event] );
        //console.log( "[WGSDK] Game event ", this.gameEvents[event] );
      }
    }

    WgsdkLoaded() {}

    InitReward() {    
      if ( ! this.sdkInited || this.rewardInited === true || ! this.WGSDK ) return;
      this.WGSDK.registerRewardCallbacks({
        onReady:this.onRewardReadyCallback, 
        onSuccess:this.onRewardCompleteCallback, 
        onFail:this.onRewardCancelCallback,
        onClose:this.onRewardClosedCallback,
        context:this
      });
      this.rewardInited = true;
    }
    
    ShowReward() {     
      if( this.rewardCallback ){
        this.GetRuntime().SetSuspended(true);
        this.gameWasPaused = true;
        this.rewardCallback.call( this.rewardContext );
      }
    }


    onRewardReadyCallback( callback, context, gameContext ){
      gameContext.rewardContext = context;
      gameContext.rewardCallback = callback;
      gameContext.rewardIsReady = true;

    }

    onRewardCompleteCallback( payload, gameContext ){
      gameContext.rewardWasGranted = true;
    }
    

    onRewardCancelCallback( gameContext ){
	  gameContext.GetRuntime().SetSuspended(false);
      gameContext.rewardWasCanceled = true;
    }

    onRewardClosedCallback( gameContext ){
	  gameContext.GetRuntime().SetSuspended(false);
      gameContext.gameWasResumed = true;
      gameContext.rewardWasClosed = true;
    }

  };
}
