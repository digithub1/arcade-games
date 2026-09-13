/* WG Playground integration using the provided WGPlayer Universal Tag. */
(function(){
  window.WGPlayground = {
    showMidroll: function(){
      if (typeof window.pauseForWGAd === 'function') {
        window.pauseForWGAd();
      }
    }
  };

  document.addEventListener('visibilitychange', function(){
    if (!document.hidden && typeof window.resumeGame === 'function') {
      // Do not force-resume an intentional in-game pause.
      if (window.__wgAdInProgress) return;
    }
  });
})();
