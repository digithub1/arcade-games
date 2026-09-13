"use strict";
{
    globalThis.C3.Plugins.gpx_GamePixSDK.Acts = {
        Loading(loading)
{
	loading = Math.max(0, Math.min(100, loading));
	this.Gamepix.loading(loading);
},

Loaded()
{
	this.Gamepix.loaded();
},

async SetItem(key,value)
{
	await this.Gamepix.localStorage.setItem(key, value);
},

async RemoveItem(key)
{
	await this.Gamepix.localStorage.removeItem(key);
},

InterstitialAd()
{
	this.Gamepix.interstitialAd();
},

RewardedAd()
{
	this.Gamepix.rewardedAd();
},

UpdateScore(score)
{
	this.Gamepix.updateScore(score);
},

UpdateLevel(level)
{
	this.Gamepix.updateLevel(level);
},

HappyMoment()
{
	this.Gamepix.happyMoment();
},

async RequestItem(key)
{
	await this.Gamepix.localStorage.requestItem(key);
}
    };
}