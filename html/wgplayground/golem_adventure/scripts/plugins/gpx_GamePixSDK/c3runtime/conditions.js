"use strict";
{
    globalThis.C3.Plugins.gpx_GamePixSDK.Cnds = {
        ItemExists(key)
{
	return this.Gamepix.localStorage.itemExists(key);
},

OnInterstitialEnd()
{
	return true;
},

OnIntertitialSuccess()
{
	return true;
},

OnInterstitialFailure()
{
	return true;
},

OnRewardedEnd()
{
	return true;
},

OnRewardedSuccess()
{
	return true;
},

OnRewardedFailure()
{
	return true;
},

OnPause()
{
	return true;
},

OnResume()
{
	return true;
},

OnItemRequested(item)
{
	return item === this.lastRequestedItem;
},

OnItemSet(item)
{
	return item === this.lastSetItem;
},

OnItemRemoved(item)
{
	return item === this.lastRemovedItem;
},

OnAnyItemRequested()
{
	return true;
},

OnAnyItemSet()
{
	return true;
},

OnAnyItemRemoved()
{
	return true;
},

OnGotLang()
{
	return this.lang !== null;
}
    };
}