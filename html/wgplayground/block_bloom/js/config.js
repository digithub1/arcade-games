// ---------------------------------------------------------------------------
// BUILD FLAG - the ONE value that selects the platform.
//
// Building for a platform = set this to one of:
//   'yandex' | 'crazygames' | 'gamedistribution' | 'gamemonetize' | 'gamepix' | 'wgplayground' | 'generic'
// then zip. Everything else (which SDK loads, how ads/language work) follows
// from the matching adapter in js/adapters/. The game code never reads this
// directly - it only ever talks to the Platform facade (js/platform.js).
// ---------------------------------------------------------------------------
window.BB_PLATFORM = 'wgplayground';

// Replace this placeholder with the Game ID from GameMonetize > My Games.
window.BB_GAMEMONETIZE_GAME_ID = 'YOUR_GAME_ID_HERE';
