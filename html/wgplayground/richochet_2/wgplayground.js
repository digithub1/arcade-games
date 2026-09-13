/* WG Playground integration */
(function(){
  'use strict';
  window.WGPlayground = {
    adInProgress: false,
    available: function(){
      return !!(window.preroll && window.preroll.config && window.preroll.config.loaderObjectName);
    },
    mute: function(){
      try { if (window.audio && typeof window.audio.mute === 'function') window.audio.mute(); } catch(e) {}
      try { window.dispatchEvent(new CustomEvent('wg-ad-mute')); } catch(e) {}
    },
    unmute: function(){
      try { if (window.audio && typeof window.audio.unmute === 'function') window.audio.unmute(); } catch(e) {}
      try { window.dispatchEvent(new CustomEvent('wg-ad-unmute')); } catch(e) {}
    },
    showMidroll: function(resumeGame){
      if (this.adInProgress) return false;
      var cfg = window.preroll && window.preroll.config;
      if (!cfg || !cfg.loaderObjectName || !window[cfg.loaderObjectName] || typeof window[cfg.loaderObjectName].refetchAd !== 'function') {
        return false;
      }
      this.adInProgress = true;
      try {
        window[cfg.loaderObjectName].refetchAd(function(){
          this.adInProgress = false;
          if (typeof resumeGame === 'function') resumeGame();
        }.bind(this));
        return true;
      } catch(e) {
        this.adInProgress = false;
        return false;
      }
    }
  };
})();
