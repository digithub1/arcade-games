"use strict";

const SDK = globalThis.SDK;
const C3 = globalThis.C3;

{
  C3.Plugins.WGSDK = class SingleGlobalPlugin extends globalThis.ISDKPluginBase {
    constructor(opts) {
      super(opts);
    }

    Release() {
      super.Release();
    }


    MuteSounds() {
      // Get the audio plugin instance
      const audioPlugin = this._runtime.GetPluginInstanceByPluginType(
        "Audio"
      );

      // Check if the audio plugin is available
      if (audioPlugin) {
        // Mute all game sounds
        audioPlugin.Mute();
      }
    }

    UnmuteSounds() {
      // Get the audio plugin instance
      const audioPlugin = this._runtime.GetPluginInstanceByPluginType(
        "Audio"
      );

      // Check if the audio plugin is available
      if (audioPlugin) {
        // Unmute all game sounds
        audioPlugin.Unmute();
      }
    }


  };
}