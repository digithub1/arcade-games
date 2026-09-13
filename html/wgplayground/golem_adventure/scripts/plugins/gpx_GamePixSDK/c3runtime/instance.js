"use strict";
{
	const C3 = globalThis.C3;
	
	const DOM_COMPONENT_ID = "gpx_GamePixSDKPlugin";
	C3.Plugins.gpx_GamePixSDK.Instance = class GamePixSDKInstance extends globalThis.ISDKInstanceBase
	{
		constructor()
		{
			super({ domComponentId: DOM_COMPONENT_ID });
			const properties = this._getInitProperties();
			this.lang = null;
			this.lastRequestedItem = "";
			this.lastRemovedItem = "";
			this.lastSetItem = "";
			this.localStorage = {};
			
			this._addDOMMessageHandlers([
                ["lang", (lang) => {
                	this.lang = lang;
                }],
                ["interstitialAd", (res) => {
                	if (res.success) {
						this._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnInterstitialSuccess);
					} else {
						this._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnInterstitialFailure);
					}
					this._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnInterstitialEnd);
                }],
                ["rewardedAd", (res) => {
                	if (res.success) {
						this._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnRewardedSuccess);
					} else {
						this._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnRewardedFailure);
					}
					this._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnRewardedEnd);
                }],
                ["pause", (res) => {
					this._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnPause);
                }],
                ["resume", (res) => {
					this._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnResume);
                }],
            ]);
			let sdkInst = this;
			let lastLoadingProgress = -1;
			let hasAlreadyLoaded = false;
			this.Gamepix = {
				loading(num) {
					num = Math.min(100, Math.max(0, num));
					if (num > lastLoadingProgress)
						sdkInst._postToDOM("loading", num);
				},
				loaded() {
					if (hasAlreadyLoaded) return;
					hasAlreadyLoaded = true;
					sdkInst._postToDOM("loaded");
				},
				localStorage: {
					async setItem(key, value) {
						sdkInst.localStorage[key] = value;
						await sdkInst._postToDOMAsync("setItem", {key, value});
						sdkInst.lastSetItem = key;
						sdkInst._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnItemSet);
						sdkInst._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnAnyItemSet);
					},
					getItem(key) {
						let value = sdkInst.localStorage[key];
						return value === null? "" : value;
					},
					async removeItem(key) {
						sdkInst.localStorage[key] = null;
						await sdkInst._postToDOMAsync("removeItem", key);
						sdkInst.lastRemovedItem = key;
						sdkInst._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnItemRemoved);
						sdkInst._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnAnyItemRemoved);
					},
					itemExists(key) {
						return sdkInst.localStorage.hasOwnProperty(key) && sdkInst.localStorage[key] !== null && sdkInst.localStorage[key] !== undefined && typeof sdkInst.localStorage[key] === "string";
					},
					async requestItem(key) {
						let value = await sdkInst._postToDOMAsync("requestItem", key);
						sdkInst.localStorage[key] = value;
						sdkInst.lastRequestedItem = key;
						sdkInst._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnItemRequested);
						sdkInst._trigger(C3.Plugins.gpx_GamePixSDK.Cnds.OnAnyItemRequested);
					}
				},
				interstitialAd() {
					sdkInst._postToDOM("interstitialAd");
				},
				rewardedAd() {
					sdkInst._postToDOM("rewardedAd");
				},
				updateScore(num) {
					sdkInst._postToDOM("updateScore", num);
				},
				updateLevel(num) {
					sdkInst._postToDOM("updateLevel", num);
				},
				happyMoment(){
					sdkInst._postToDOM("happyMoment");
				},
			}
			
			let autoLoading = false;
			if (properties)
			{
				autoLoading = properties[0];
			}
			if (autoLoading) {
				let _tempProgress = 0;
			    this.Gamepix.loading(0);
			    let intervalForSendProgress = setInterval(() => {
			        let currentProgress = Math.round(this.runtime.assets.progress * 100);
			        this.Gamepix.loading(currentProgress);
			        if (currentProgress == 100) {
			        	clearInterval(intervalForSendProgress);
			    		this.Gamepix.loaded();
			        }
			    }, 100);
		    }
		}
		
		_release()
		{
			super._release();
		}
		
		_saveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		_loadFromJson(o)
		{
			// load state for savegames
		}

        _getDebuggerProperties()
		{
			return [{
				title: "GamePixSDK",
				properties: [
					//{name: ".current-animation",	value: this._currentAnimation.GetName(),	onedit: v => this.CallAction(Acts.SetAnim, v, 0) },
				]
			}];
		}

		// timeline support
		GetPropertyValueByIndex(index)
		{
			return 0;
		}

		SetPropertyValueByIndex(index, value)
		{
			//set property value here
		}
	};
}