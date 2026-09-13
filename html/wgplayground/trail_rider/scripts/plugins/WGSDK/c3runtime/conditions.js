"use strict";

const C3 = globalThis.C3;

{
  C3.Plugins.WGSDK.Cnds = {
    AdIsNotRunning() {
      if( this.gameWasResumed === true){
        this.gameWasResumed = false;
        return true;
      }
      return false;
    },
    AdIsRunning() {      
      if( this.gameWasPaused === true){
        this.gameWasPaused = false;
        return true;
      }
      return false;
    },
    AdWasNotReturned(){
      if( this.adWasRequested === true && this.adWasReturned === false ){
        this.adWasRequested = false;
        this.adWasReturned = false;
        return true;
      }
      return false;
    },
    WgsdkLoaded() {
      if( this.sdkLoaded === true ){
        this.sdkLoaded = false;
        this.sdkInited = true;
        return true;
      }
      return this.sdkLoaded;
    },
    RewardReady() {
      if( this.rewardIsReady === true ){
        this.rewardIsReady = false;
        return true;
      }
      return this.rewardIsReady;
    },
    RewardGranted() {
      if( this.rewardWasGranted === true ){
        this.rewardWasGranted = false;
        return true;
      }
      return this.rewardWasGranted;
    },
    RewardCanceled() {
      if( this.rewardWasCanceled === true ){
        this.rewardWasCanceled = false;
        return true;
      }
      return this.rewardWasCanceled;
    },
    RewardClosed() {
      if( this.rewardWasClosed === true ){
        this.rewardWasClosed = false;
        return true;
      }
      return this.rewardWasClosed;
    }
  };
}
