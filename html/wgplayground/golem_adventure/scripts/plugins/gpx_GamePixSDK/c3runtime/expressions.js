"use strict";
{
    globalThis.C3.Plugins.gpx_GamePixSDK.Exps = {
        GetItem(key)
{
	return this.Gamepix.localStorage.getItem(key);
},

Lang()
{
	return this.lang;
},

LastRequestedItem()
{
	return this.lastRequestedItem;
},

LastSetItem()
{
	return this.lastSetItem;
},

LastRemovedItem()
{
	return this.lastRemovedItem;
}
    };
}